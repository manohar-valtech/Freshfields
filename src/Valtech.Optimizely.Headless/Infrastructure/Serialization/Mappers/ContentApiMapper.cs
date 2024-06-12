using EPiServer.ContentApi.Core.Serialization;
using EPiServer.ContentApi.Core.Serialization.Models;
using EPiServer.Core;

namespace Valtech.Optimizely.Headless.Infrastructure.Serialization.Mappers;

public class ContentApiMapper : BaseContentApiMapper<IContentData, ContentApiModel>
{
    // This should always fire first
    public override int Order => int.MinValue;

    protected override void MapApiModel(IContentData content, ConverterContext converterContext, ContentApiModel sourceApiModel,
        ContentApiModel destinationApiModel)
    {
        // Map existing properties
        destinationApiModel.ContentLink = sourceApiModel.ContentLink;
        destinationApiModel.Name = sourceApiModel.Name;
        destinationApiModel.Language = sourceApiModel.Language;
        destinationApiModel.ExistingLanguages = sourceApiModel.ExistingLanguages;
        destinationApiModel.MasterLanguage = sourceApiModel.MasterLanguage;
        destinationApiModel.ContentType = sourceApiModel.ContentType;
        destinationApiModel.ParentLink = sourceApiModel.ParentLink;
        destinationApiModel.RouteSegment = sourceApiModel.RouteSegment;
        destinationApiModel.Url = sourceApiModel.Url;
        destinationApiModel.Changed = sourceApiModel.Changed;
        destinationApiModel.Created = sourceApiModel.Created;
        destinationApiModel.StartPublish = sourceApiModel.StartPublish;
        destinationApiModel.StopPublish = sourceApiModel.StopPublish;
        destinationApiModel.Saved = sourceApiModel.Saved;
        destinationApiModel.Status = sourceApiModel.Status;
        destinationApiModel.Properties = sourceApiModel.Properties;
    }
}