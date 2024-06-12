using Microsoft.Extensions.DependencyInjection;
using Valtech.Optimizely.Headless.Features.Forms.Mappers;
using Valtech.Optimizely.Headless.Features.Forms.Services;
using Valtech.Optimizely.Headless.Infrastructure.Configuration;
using Valtech.Optimizely.Headless.Infrastructure.Serialization.Mappers;

namespace Valtech.Optimizely.Headless.Infrastructure.DependencyInjection;

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
