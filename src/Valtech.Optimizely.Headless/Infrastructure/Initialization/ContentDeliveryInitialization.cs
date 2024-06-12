using EPiServer.ContentApi.Core.Serialization;
using EPiServer.ContentApi.Core.Serialization.Internal;
using EPiServer.ContentApi.Core.Serialization.Models.Internal;
using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.ServiceLocation;
using EPiServer.Web;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Valtech.Optimizely.Headless.Infrastructure.Configuration;
using Valtech.Optimizely.Headless.Infrastructure.Serialization;

namespace Valtech.Optimizely.Headless.Infrastructure.Initialization;

[ModuleDependency(typeof(InitializationModule))]
[ModuleDependency(typeof(ServiceContainerInitialization))]
public class ContentDeliveryInitialization : IConfigurableModule
{
    public void ConfigureContainer(ServiceConfigurationContext context)
    {
        context.Services.AddSingleton<IContentConverter, CustomContentConverter>();
        context.Services.AddSingleton<DefaultContentConverter, CustomContentConverter>();

        context.ConfigurationComplete += (_, _) =>
        {
            context.Services.Intercept<IContentExpander>((locator, defaultContentExpander) => new CustomContentExpander(
                    locator.GetInstance<IPermanentLinkMapper>(), locator.GetInstance<IOptions<HeadlessOptions>>(), defaultContentExpander));
        };
    }

    public void Initialize(InitializationEngine context)
    {
    }

    public void Uninitialize(InitializationEngine context)
    {
    }
}
