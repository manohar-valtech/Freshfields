using Geta.Optimizely.Sitemaps.SpecializedProperties;
using Freshfields.Optimizely.Website.Infrastructure.SetUp;

namespace Freshfields.Optimizely.Website.Models.Pages;

public abstract class BasePage : PageData
{
    [UIHint("SeoSitemap")]
    [BackingType(typeof(PropertySEOSitemaps))]
    [Display(
        Name = "Seo Sitemap settings",
        GroupName = SiteContentTabs.Seo,
        Order = 10)]
    public virtual string? SEOSitemaps { get; set; }

    public override void SetDefaultValues(ContentType contentType)
    {
        base.SetDefaultValues(contentType);
        var siteMap = new PropertySEOSitemaps
        {
            Enabled = false
        };
        siteMap.Serialize();
        SEOSitemaps = siteMap.ToString();
    }

}
