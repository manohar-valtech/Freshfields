namespace Freshfields.Optimizely.Website.Infrastructure.SetUp;


[GroupDefinitions]
public static class SiteContentTabs
{
    [Display(Order = 100)]
    public const string Content = SystemTabNames.Content;

    [Display(Order = 600)]
    public const string Categories = nameof(Categories);

    [Display(Order = 700)]
    public const string Seo = nameof(Seo);

    [Display(Order = 800)]
    public const string SiteSettings = nameof(SiteSettings);

    [Display(Order = 900)]
    public const string Settings = SystemTabNames.Settings;
}
