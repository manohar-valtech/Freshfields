using EPiServer.ContentApi.Core.Serialization;
using EPiServer.ContentApi.Core.Serialization.Models;
using EPiServer.Core;
using EPiServer.Forms.Core;
using EPiServer.Forms.Helpers.Internal;
using  Freshfields.Web.Headless.Features.Forms.Models;
using  Freshfields.Web.Headless.Infrastructure.Serialization.Mappers;

namespace  Freshfields.Web.Headless.Features.Forms.Mappers;

public class FormElementApiMapper : BaseContentApiMapper<ElementBlockBase, FormElementApiModel>
{
    public override int Order => -2;

    protected override void MapApiModel(ElementBlockBase content, ConverterContext converterContext,
        ContentApiModel sourceApiModel, FormElementApiModel destinationApiModel) =>
        destinationApiModel.ElementName = ((IContent)content).ContentLink.GetElementName();
}
