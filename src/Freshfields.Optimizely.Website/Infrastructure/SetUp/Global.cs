using EPiServer.DataAnnotations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Freshfields.Web.Infrastructure.SetUp;

public class Global
{
    [GroupDefinitions()]
    public static class GroupNames
    {

        [Display(Name = "Default", Order = 2)]
        public const string Default = "Default";

        [Display(Name = "PageLayout", Order = 40)]
        public const string PageLayout = "Page Layout";

        [Display(Name = "Search", Order = 90)]
        public const string Search = "Search";

        [Display(Name = "Metadata", Order = 9)]
        public const string MetaData = "Metadata";

        [Display(Name = "SiteSettings", Order = 6)]
        public const string SiteSettings = "SiteSettings";

        [Display(Name = "Localization", Order = 7)]
        public const string Localization = "Localization";

        [Display(Name = "Header/Footer settings", Order = 8)]
        public const string HeaderFooter = "Header/Footer";

        [Display(Name = "Security Header Settings", Order = 9)]
        public const string SecurityHeaderSettings = "SecurityHeaderSettings";

        [Display(Name = "External Content", Order = 130)]
        public const string ExternalContent = "External Content";

        [Display(Name = "Internal Content", Order = 140)]
        public const string InternalContent = "Internal Content";


        [Display(Name = "Passle Settings", Order = 150)]
        public const string PassleSettings = "Passle Settings";

        [Display(Name = "Video Settings", Order = 150)]
        public const string Video = "Video Settings";

        [Display(Name = "Salesforce Event Creation Settings", Order = 160)]
        public const string SalesforceEventCreationSettings = "Salesforce Event Creation Settings";

    }

    public static class ContentAreaTags
    {
        public const string FullWidth = "col-md-12";
        public const string TwoThirdsWidth = "col-md-8";
        public const string HalfWidth = "col-md-6";
        public const string OneThirdWidth = "col-md-4";
        public const string NoRenderer = "norenderer";
    }

    /// <summary>
    /// Main widths used in the Bootstrap HTML framework
    /// </summary>
    public static class ContentAreaWidths
    {
        public const int FullWidth = 12;
        public const int TwoThirdsWidth = 8;
        public const int HalfWidth = 6;
        public const int OneThirdWidth = 4;
    }

#pragma warning disable CA2211 // Non-constant fields should not be visible
    public static Dictionary<string, int> ContentAreaTagWidths = new Dictionary<string, int>
#pragma warning restore CA2211 // Non-constant fields should not be visible
    {
                { ContentAreaTags.FullWidth, ContentAreaWidths.FullWidth },
                { ContentAreaTags.TwoThirdsWidth, ContentAreaWidths.TwoThirdsWidth },
                { ContentAreaTags.HalfWidth, ContentAreaWidths.HalfWidth },
                { ContentAreaTags.OneThirdWidth, ContentAreaWidths.OneThirdWidth }
    };

    public static class Constants
    {
        public const string SectorsCategory = "Sectors";
        public const string ServicesCategory = "Services";
    }

}
