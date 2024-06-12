using Microsoft.Extensions.DependencyInjection;
using Freshfields.Optimizely.Headless.Features.Forms.Mappers;
using Freshfields.Optimizely.Headless.Features.Forms.Services;
using Freshfields.Optimizely.Headless.Infrastructure.Configuration;
using Freshfields.Optimizely.Headless.Infrastructure.Serialization.Mappers;

namespace Freshfields.Optimizely.Headless.Infrastructure.DependencyInjection;

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
