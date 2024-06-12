using System.Net.Http.Headers;
using Microsoft.Extensions.DependencyInjection;
using Freshfields.Optimizely.Headless.Infrastructure.NodeJs;

namespace Freshfields.Optimizely.Headless.Infrastructure.DependencyInjection;

/// <summary>
/// Extensions for <see cref="IServiceCollection"/>.
/// </summary>
public static class NodeJsServiceCollectionExtensions
{
    /// <summary>
    /// Registers and configures services for the Node.js proxy.
    /// </summary>
    /// <param name="services">The <see cref="IServiceCollection" /> to add services to.</param>
    /// <param name="configureOptions">Registers an action used to configure <see cref="NodeJsOptions"/>.</param>
    public static IServiceCollection AddNodeJs(
        this IServiceCollection services,
        Action<NodeJsOptions>? configureOptions = null)
    {
        var optionsBuilder = services.AddOptions<NodeJsOptions>();
        if (configureOptions is not null)
        {
            optionsBuilder.Configure(configureOptions);
        }

        services.AddHttpClient(NodeJsProcess.ClientName, options =>
        {
            options.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("*/*", 0.1));
        });

        services
            .AddHttpForwarder()
            .AddSingleton<NodeJsForwarder>()
            .AddSingleton<NodeJsProcess>();

        return services;
    }
}
