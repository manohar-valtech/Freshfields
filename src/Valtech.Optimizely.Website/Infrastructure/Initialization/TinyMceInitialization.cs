using EPiServer.Cms.TinyMce.Core;

namespace Valtech.Optimizely.Website.Infrastructure.Initialization;

public static class TinyMceInitialization
{
    public static IServiceCollection AddTinyMceConfigurations(this IServiceCollection services)
    {
        services.Configure<TinyMceConfiguration>(config =>
        {
            config.Default().AddEpiserverSupport()
                .AddPlugin("table", "code")
                .Toolbar(
                    "blocks | bold italic | epi-link epi-create-block anchor image epi-image-editor epi-personalized-content | bullist numlist outdent indent | table | code | searchreplace fullscreen | removeformat pastetext help")
                .BlockFormats("Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Preformatted=pre");

        });

        return services;
    }
}
