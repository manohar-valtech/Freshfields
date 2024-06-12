using EPiServer.ContentApi.Core.Serialization;
using EPiServer.ContentApi.Core.Serialization.Models;
using EPiServer.Core;

namespace Valtech.Optimizely.Headless.Infrastructure.Serialization.Mappers;

public interface IContentApiMapper
{
    int Order { get; }
    
    bool HandlesType(Type contentType);

    ContentApiModel CreateApiModel();
    
    Type ApiModelType { get; }

    void Map(IContentData content, ConverterContext converterContext, ContentApiModel sourceApiModel,
        ContentApiModel destinationApiModel);
}