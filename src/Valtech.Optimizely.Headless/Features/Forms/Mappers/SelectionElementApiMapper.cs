using EPiServer.ContentApi.Core.Serialization;
using EPiServer.ContentApi.Core.Serialization.Models;
using EPiServer.Forms.EditView.Models.Internal;
using EPiServer.Forms.Implementation.Elements.BaseClasses;
using Valtech.Optimizely.Headless.Features.Forms.Models;
using Valtech.Optimizely.Headless.Infrastructure.Serialization.Mappers;

namespace Valtech.Optimizely.Headless.Features.Forms.Mappers;

public class SelectionElementApiMapper : BaseContentApiMapper<SelectionElementBlockBase<OptionItem>, SelectionElementApiModel>
{
    public override int Order => 0;

    protected override void MapApiModel(SelectionElementBlockBase<OptionItem> content, ConverterContext converterContext, ContentApiModel sourceApiModel,
        SelectionElementApiModel destinationApiModel) =>
        destinationApiModel.Options = content.Items.Select(x => new OptionApiModel(x.Caption, x.Value, x.Checked)).ToList();
}
