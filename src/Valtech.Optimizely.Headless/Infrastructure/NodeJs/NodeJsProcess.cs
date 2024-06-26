using System.Diagnostics;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Valtech.Optimizely.Headless.Infrastructure.NodeJs;

/// <summary>
/// Basic sub-process governor to start the Node.js process and
/// keep it running during the lifecycle of the dotnet process.
/// </summary>
internal sealed class NodeJsProcess : IDisposable
{
    public const string ClientName = "NodeJsProcessClient";

    private readonly object _lock = new();
    private readonly NodeJsOptions _options;
    private readonly IHttpClientFactory _clientFactory;
    private readonly ILogger<NodeJsProcess> _logger;

    private Process? _process;
    private bool _processResponding;

    public NodeJsProcess(
        IHttpClientFactory clientFactory,
        IOptions<NodeJsOptions> options,
        ILogger<NodeJsProcess> logger)
    {
        _clientFactory = clientFactory;
        _options = options.Value;
        _logger = logger;

        if (!_options.Disabled)
        {
            ValidateNodeVersion();
        }
    }

    // This check is a bit simplified. We could also validate that the process is
    // actually running, not just null-check _process.
    private bool IsReady => _processResponding && _process is not null && !_process.HasExited;

    public async Task<bool> EnsureProcessStarted(CancellationToken cancellationToken = default)
    {
        if (IsReady)
        {
            return true;
        }

        if (_options.Disabled)
        {
            throw new ApplicationException("The proxy is disabled.");
        }

        var sw = Stopwatch.StartNew();
        var timeout = TimeSpan.FromMinutes(1);

        while (!IsReady && sw.Elapsed < timeout)
        {
            if (cancellationToken.IsCancellationRequested)
            {
                break;
            }

            _processResponding = await ProcessIsResponding(cancellationToken);

            if (_processResponding)
            {
                return true;
            }

            StartProcessInternal();

            await Task.Delay(5_000, cancellationToken);
        }

        return false;
    }

    public void Dispose()
    {
        if (_process is not null)
        {
            if (_options.RedirectOutput)
            {
                _process.CancelErrorRead();
                _process.CancelOutputRead();
            }

            if (!_process.CloseMainWindow())
            {
                _process.Kill(entireProcessTree: true);
            }

            _process.Dispose();
        }

        GC.SuppressFinalize(this);
    }

    private void ValidateNodeVersion()
    {
        var process = Process.Start(new ProcessStartInfo()
        {
            UseShellExecute = false,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            RedirectStandardInput = true,
            FileName = "node",
            Arguments = "--version"
        });

        if (process is null)
        {
            throw new ApplicationException("Unable to start the Node.js process.");
        }

        process.WaitForExit();

        if (process.ExitCode != 0)
        {
            throw new ApplicationException("Node.js was unable to report a version.");
        }

        var nodeVersionString = process.StandardOutput.ReadToEnd().TrimEnd().TrimStart('v');

        if (Version.TryParse(nodeVersionString, out var nodeVersion) && nodeVersion.Major >= 16)
        {
            _logger.LogInformation("Running Node.js version { nodeVersion }.", nodeVersion);
        }
        else
        {
            throw new ApplicationException($"Detected Node.js {nodeVersionString}, Node.js 16 or greater is required.");
        }
    }

    private void StartProcessInternal()
    {
        if (_process is not null)
        {
            return;
        }

        var space = _options.LaunchCommand.IndexOf(' ');
        var command = _options.LaunchCommand[0..space];
        var arguments = _options.LaunchCommand[++space..];

        if (OperatingSystem.IsWindows() && !Path.HasExtension(command))
        {
            // On windows we transform npm/yarn to npm.cmd/yarn.cmd so that the command
            // can actually be found when we start the process. This is overridable if
            // necessary by explicitly providing the extension in the launch command.
            command += command.Equals("node", StringComparison.OrdinalIgnoreCase)
                ? ".exe"
                : ".cmd";
        }

        lock (_lock)
        {
            _process = new Process();
            _process.StartInfo.FileName = command;
            _process.StartInfo.Arguments = arguments;
            _process.StartInfo.WorkingDirectory = _options.WorkingDirectory;

            if (_options.RedirectOutput)
            {
                _process.StartInfo.CreateNoWindow = true;
                _process.StartInfo.RedirectStandardOutput = true;
                _process.StartInfo.RedirectStandardError = true;
                _process.OutputDataReceived += Process_OutputDataReceived;
                _process.ErrorDataReceived += Process_ErrorDataReceived;

                foreach (var item in _options.EnvironmentVariables)
                {
                    _process.StartInfo.EnvironmentVariables[item.Key] = item.Value;
                }
            }
            else
            {
                _process.StartInfo.UseShellExecute = true;

                if (_options.EnvironmentVariables.Any())
                {
                    throw new InvalidOperationException("Environment variables are not supported when output is not redirected. See NodeJsOptions.RedirectOutput.");
                }
            }

            _logger.LogInformation("Starting the '{Command}' with arguments '{Arguments}'.", command, arguments);

            _process.Start();

            if (_options.RedirectOutput)
            {
                _process.BeginErrorReadLine();
                _process.BeginOutputReadLine();
            }
        }

        if (_process is null)
        {
            throw new ApplicationException("Unable to start the process.");
        }
    }

    private void Process_ErrorDataReceived(object sender, DataReceivedEventArgs e) => _logger.LogError(e.Data);

    private void Process_OutputDataReceived(object sender, DataReceivedEventArgs e) => _logger.LogInformation(e.Data);

    private async Task<bool> ProcessIsResponding(CancellationToken cancellationToken)
    {
        using var timeout = new CancellationTokenSource(TimeSpan.FromSeconds(5));
        using var cancellationTokenSource = CancellationTokenSource.CreateLinkedTokenSource(timeout.Token, cancellationToken);

        try
        {
            var client = _clientFactory.CreateClient(ClientName);
            var response = await client.GetAsync($"http://localhost:{_options.DestinationPort}", cancellationTokenSource.Token);
            var responding = response.IsSuccessStatusCode;

            return responding;
        }
        catch (Exception exception) when (
            exception is HttpRequestException ||
            exception is TaskCanceledException ||
            exception is OperationCanceledException)
        {
            _logger.LogDebug(exception, "Failed to connect to the process.");

            return false;
        }
    }
}
