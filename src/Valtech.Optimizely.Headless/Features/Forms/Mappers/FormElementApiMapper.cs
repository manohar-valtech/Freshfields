using EPiServer.ContentApi.Core.Serialization;
using EPiServer.ContentApi.Core.Serialization.Models;
using EPiServer.Core;
using EPiServer.Forms.Core;
using EPiServer.Forms.Helpers.Internal;
using Valtech.Optimizely.Headless.Features.Forms.Models;
using Valtech.Optimizely.Headless.Infrastructure.Serialization.Mappers;

namespace Valtech.Optimizely.Headless.Features.Forms.Mappers;

public class FormElementApiMapper : BaseContentApiMapper<ElementBlockBase, FormElementApiModel>
{
    public override int Order => -2;

    protected override void MapApiModel(ElementBlockBase content, ConverterContext converterContext,
        ContentApiModel sourceApiModel, FormElementApiModel destinationApiModel) =>
        destinationApiModel.ElementName = ((IContent)content).ContentLink.GetElementName();
}
