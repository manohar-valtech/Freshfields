using EPiServer;
using EPiServer.ContentApi.Core.Internal;
using EPiServer.ContentApi.Core.Serialization;
using EPiServer.ContentApi.Core.Serialization.Internal;
using EPiServer.ContentApi.Core.Serialization.Models;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using Freshfields.Headless.Infrastructure.Serialization.Mappers;

namespace Freshfields.Headless.Infrastructure.Serialization;

/// <summary>
/// Replaces the default content converter to allow easier model conversion
/// </summary>
public class CustomContentConverter : DefaultContentConverter
{
    private readonly IEnumerable<IContentApiMapper> _mappers;

    public CustomContentConverter(
        IContentTypeRepository contentTypeRepository,
        ReflectionService reflectionService,
        IContentModelReferenceConverter contentModelService,
        IContentVersionRepository contentVersionRepository,
        ContentLoaderService contentLoaderService,
        UrlResolverService urlResolverService,
        IPropertyConverterResolver propertyConverterResolver,
        ContentTypeResolver contentTypeResolver,
        IEnumerable<IContentApiMapper> mappers) : base(
        contentTypeRepository,
        reflectionService,
        contentModelService,
        contentVersionRepository,
        contentLoaderService,
        urlResolverService,
        propertyConverterResolver,
        contentTypeResolver)
    {
        _mappers = mappers;
    }

    public override ContentApiModel Convert(IContent content, ConverterContext converterContext)
    {
        var model = base.Convert(content, converterContext);
        
        var mappers = _mappers
            .Where(x => x.HandlesType(content.GetOriginalType()))
            .OrderBy(x => x.Order)
            .ToList();

        var lastMapper = mappers.LastOrDefault();

        if (lastMapper == null)
        {
            return model;
        }
        
        if (lastMapper.ApiModelType == model.GetOriginalType())
        {
            return model;
        }
        
        var destinationApiModel = lastMapper.CreateApiModel();

        foreach (var mapper in mappers)
        {
            mapper.Map(content, converterContext, model, destinationApiModel);
        }

        return destinationApiModel;
    }
}