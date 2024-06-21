namespace Freshfields.Web.Models.Pages;

[ContentType(
    DisplayName = "Generic Page",
    GUID = "2dc7e2f3-db70-4a18-a7c3-a2a18cfd61bb",
    Description = "Generic Page")]
public class GenericPage : BasePage
{
    [Display(
           GroupName = SystemTabNames.Content,
           Order = 310)]
    [CultureSpecific]
    //[AllowedTypes(new[] { typeof(HeroProfileBlock), typeof(StandardHeroBlock), typeof(ImageHeroBlock), typeof(CarouselHeroBlock), typeof(HeroVideoBlock), typeof(HomepageHeroCarouselBlock) })]
    public virtual ContentArea HeroContentArea { get; set; }

    [Display(
        GroupName = SystemTabNames.Content,
        Order = 320)]
    [CultureSpecific]
    //[AllowedTypes(RestrictedTypes = new[] { typeof(Blocks.Interface.IProfileBlockType) })]
    public virtual ContentArea MainContentArea { get; set; }

    [Display(
     GroupName = SystemTabNames.Content,
     Order = 330)]
    [CultureSpecific]
    [ScaffoldColumn(false)]
    public virtual ContentArea BottomContentArea { get; set; }

}
