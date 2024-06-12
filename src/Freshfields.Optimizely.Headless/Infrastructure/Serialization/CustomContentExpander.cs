using EPiServer.ContentApi.Core.Serialization;
using EPiServer.ContentApi.Core.Serialization.Models;
using EPiServer.ContentApi.Core.Serialization.Models.Internal;
using EPiServer.Core;
using EPiServer.Web;
using Microsoft.Extensions.Options;
using Freshfields.Optimizely.Headless.Infrastructure.Configuration;

namespace Freshfields.Optimizely.Headless.Infrastructure.Serialization;

/// <summary>
/// Component responsible for expanding content properties with support for nested Content Area items
/// </summary>
public class CustomContentExpander : IContentExpander
{
    private readonly IPermanentLinkMapper _permanentLinkMapper;
    private readonly IOptions<HeadlessOptions> _headlessOptions;
    private readonly IContentExpander _defaultContentExpander;

    public CustomContentExpander(
        IPermanentLinkMapper permanentLinkMapper,
        IOptions<HeadlessOptions> headlessOptions,
        IContentExpander defaultContentExpander)
    {
        _permanentLinkMapper = permanentLinkMapper;
        _headlessOptions = headlessOptions;
        _defaultContentExpander = defaultContentExpander;
    }

    public ContentApiModel? Expand(ContentModelReference contentModelReference, ConverterContext converterContext)
    {
        var contentApiModel = _defaultContentExpander.Expand(contentModelReference, converterContext);
        
        if (contentApiModel == null)
        {
            return null;
        }
        
        ExpandContentAreaItems(new List<ContentApiModel> { contentApiModel }, converterContext);

        return contentApiModel;
    }
    
    private ContentModelReference? GetValidContentModelReference(ContentModelReference contentModelLink)
    {
        // The ContentExpander needs an Id and WorkId
        if (contentModelLink is { Id: { }, WorkId: { } })
        {
            return contentModelLink;
        }

        if (!contentModelLink.GuidValue.HasValue)
        {
            return null;
        }

        var link = _permanentLinkMapper.Find(contentModelLink.GuidValue!.Value);

        if (link == null || ContentReference.IsNullOrEmpty(link.ContentReference))
        {
            return null;
        }

        return new ContentModelReference
        {
            Id = link.ContentReference.ID,
            WorkId = link.ContentReference.WorkID,
            ProviderName = link.ContentReference.ProviderName
        };
    }
    
    private void ExpandContentAreaItems(IEnumerable<ContentApiModel> contentApiModels, ConverterContext converterContext)
    {
        var depth = 1;
        
        while (depth < _headlessOptions.Value.ContentAreaMaxDepth)
        {
            ICollection<ContentApiModel> childContentApiModels = new List<ContentApiModel>();

            foreach (var contentApiModel in contentApiModels)
            {
                foreach (var property in contentApiModel.Properties)
                {
                    if (property.Value is not ICollection<ContentAreaItemModel> items)
                    {
                        continue;
                    }

                    foreach (var item in items)
                    {
                        var contentModelReference = GetValidContentModelReference(item.ContentLink);

                        if (contentModelReference == null)
                        {
                            continue;
                        }

                        var model = _defaultContentExpander.Expand(contentModelReference, converterContext);

                        if (model == null)
                        {
                            continue;
                        }

                        item.ContentLink.Expanded = model;
                        childContentApiModels.Add(model);
                    }
                }
            }

            if (childContentApiModels.Count == 0)
            {
                break;
            }

            contentApiModels = childContentApiModels;
            depth++;
        }
    }
}