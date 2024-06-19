using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace  Freshfields.Web.Headless.Infrastructure.Configuration;

public class HeadlessOptionsConfigurer : IConfigureOptions<HeadlessOptions>
{
    private readonly IConfiguration _configuration;

    public HeadlessOptionsConfigurer(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public void Configure(HeadlessOptions options)
    {
        _configuration.GetSection("Headless").Bind(options);
    }
}
