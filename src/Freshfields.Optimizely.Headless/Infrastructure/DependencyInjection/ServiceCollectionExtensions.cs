using Microsoft.Extensions.DependencyInjection;
using Freshfields.Headless.Features.Forms.Mappers;
using Freshfields.Headless.Features.Forms.Services;
using Freshfields.Headless.Infrastructure.Configuration;
using Freshfields.Headless.Infrastructure.Serialization.Mappers;

namespace Freshfields.Headless.Infrastructure.DependencyInjection;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddHeadless(this IServiceCollection services)
    {
        // Base
        services.AddSingleton<IContentApiMapper, ContentApiMapper>();

        services.ConfigureOptions<HeadlessOptionsConfigurer>();
        services.AddOptions<HeadlessOptions>().ValidateDataAnnotations();

        // Forms
        services
            .AddSingleton<IContentApiMapper, FormElementApiMapper>()
            .AddSingleton<IContentApiMapper, ValidatableElementApiMapper>()
            .AddSingleton<IContentApiMapper, SelectionElementApiMapper>();

        services.AddSingleton<IFormSubmissionService, FormSubmissionService>();

        return services;
    }
}
