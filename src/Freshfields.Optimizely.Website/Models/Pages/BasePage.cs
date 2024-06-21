using Geta.Optimizely.Sitemaps.SpecializedProperties;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Shell.ObjectEditing;
using EPiServer.Web;
using EPiServer;
using EPiServer.ServiceLocation;
using System.Text;
using Freshfields.Web.Infrastructure.SetUp;
using EPiServer.SpecializedProperties;

namespace Freshfields.Web.Models.Pages;

public abstract class BasePage : PageData
{
    #region MetaData

    [UIHint("SeoSitemap")]
    [BackingType(typeof(PropertySEOSitemaps))]
    [Display(
        Name = "Seo Sitemap settings",
        GroupName = Global.GroupNames.MetaData,
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

    [Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "Meta Title",
        Order = 100)]
    [CultureSpecific]
    [Searchable(false)]
    public virtual string MetaTitle
    {
        get
        {
            var metaTitle = this.GetPropertyValue(p => p.MetaTitle);

            // Use explicitly set meta title, otherwise fall back to page name
            return !string.IsNullOrWhiteSpace(metaTitle)
                ? metaTitle
                : PageName;
        }
        set { this.SetPropertyValue(p => p.MetaTitle, value); }
    }

    [Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "Meta Keywords",
        Order = 200)]
    [CultureSpecific]
    [BackingType(typeof(PropertyStringList))]
    public virtual string[] MetaKeywords { get; set; }

    [Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "Meta Description",
        Order = 300)]
    [CultureSpecific]
    [UIHint(UIHint.Textarea)]
    [ClientEditor(ClientEditingClass = "realise/editors/CustTextAreaWithCharCount")]
    [Searchable(false)]
    public virtual string MetaDescription { get; set; }

    [Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "Head Html",
        Order = 350)]
    [CultureSpecific]
    [UIHint(UIHint.Textarea)]
    [Searchable(false)]
    public virtual string HeadHtml { get; set; }


    [Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "OG Type",
        Order = 360)]
    [CultureSpecific]
    [Searchable(false)]
    public virtual string OGType { get; set; }

    [Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "OG Title",
        Order = 365)]
    [CultureSpecific]
    [Searchable(false)]
    public virtual string OGTitle { get; set; }

    [Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "OG Description",
        Order = 370)]
    [UIHint(UIHint.Textarea)]
    [CultureSpecific]
    [Searchable(false)]
    public virtual string OGDescription { get; set; }

    /*[Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "OG URL",
        Order = 375)]
    [CultureSpecific]
    [Searchable(false)]
    public virtual Url OGUrl
    {
        get
        {
            var ogurl = this.GetPropertyValue(p => p.OGUrl);

            if (ogurl != null)
            {
                var rewriteProvider = ServiceLocator.Current.GetInstance<FriendlyUrlRewriteProvider>();
                var url = new UrlBuilder(ogurl);
                rewriteProvider.ConvertToExternal(url, null, Encoding.UTF8);

                if (url.Host == null || url.Host == "")
                {
                    return UriSupport.AbsoluteUrlBySettings(url.ToString());
                }
                else
                {
                    return url.ToString();
                }
            }
            else
            {
                return null;
            }
        }
        set { this.SetPropertyValue(p => p.OGUrl, value); }
    }*/

    [Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "OG Image",
        Order = 380)]
    [CultureSpecific]
    [UIHint(UIHint.MediaFile)]
    public virtual ContentReference OGImage { get; set; }

    [Display(
        Name = "Canonical Link Override",
        Description = "The override value for the canonical link for this page",
        GroupName = Global.GroupNames.MetaData,
        Order = 381)]
    [CultureSpecific]
    public virtual string CanonicalLinkOverride { get; set; }

    [Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "No Index NoFollow",
        Order = 400)]
    [CultureSpecific]
    public virtual bool NoIndexNoFollow { get; set; }

    [Display(
        GroupName = Global.GroupNames.MetaData,
        Name = "No Index Follow",
        Order = 410)]
    [CultureSpecific]
    public virtual bool NoIndexFollow { get; set; }

    #endregion

    #region Settings

    [Display(
            GroupName = SystemTabNames.Settings,
            Order = 305,
            Description = "Body CSS class",
            Name = "Body CSS class")]
    [Searchable(false)]
    public virtual string PageCssClass
    {
        get
        {
            var pageCssClass = this.GetPropertyValue(p => p.PageCssClass);

            // Use explicitly set meta title, otherwise fall back to page name
            return !string.IsNullOrWhiteSpace(BodyCssClass)
                ? BodyCssClass
                : pageCssClass;
        }
        set { this.SetPropertyValue(p => p.PageCssClass, value); }
    }

    [Display(
        GroupName = SystemTabNames.Settings,
        Name = "Hide Breadcrumb",
        Order = 310)]
    [CultureSpecific]
    public virtual bool HideBreadcrumb { get; set; }

    #endregion

    #region Hidden

    [Ignore]
    [Searchable(false)]
    public string BodyCssClass { get; set; }

    [Ignore]
    [Searchable(false)]
    public string ContentAreaCssClass => "";

    #endregion
}
