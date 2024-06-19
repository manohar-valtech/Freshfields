using EPiServer.ContentApi.Core.Serialization;
using EPiServer.ContentApi.Core.Serialization.Models;
using EPiServer.Core;

namespace  Freshfields.Web.Headless.Infrastructure.Serialization.Mappers;

public abstract class BaseContentApiMapper<TContent, TApiModel> : IContentApiMapper
    where TContent : IContentData
    where TApiModel : ContentApiModel, new()
{
    public abstract int Order { get; }

    public bool HandlesType(Type contentType)
    {
        return typeof(TContent).IsAssignableFrom(contentType);
    }

    public ContentApiModel CreateApiModel() => new TApiModel();

    public Type ApiModelType => typeof(TApiModel);

    protected abstract void MapApiModel(TContent content, ConverterContext converterContext, ContentApiModel sourceApiModel,
        TApiModel destinationApiModel);

    public void Map(IContentData content, ConverterContext converterContext, ContentApiModel sourceApiModel,
        ContentApiModel destinationApiModel)
    {
        if (content is TContent contentModel && destinationApiModel is TApiModel apiModel)
        {
            MapApiModel(contentModel, converterContext, sourceApiModel, apiModel);
        }
    }
}