using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;

namespace Freshfields.Web.Models.Pages
{
    [ContentType(DisplayName = "_404Page", GUID = "6037299b-364e-4b98-85fb-8ee858e75f8e", Description = "404 Not found Page")]
    public class _404Page : BasePage
    {
        [Display(
         GroupName = SystemTabNames.Content,
         Order = 320)]
        [CultureSpecific]
        //[AllowedTypes(RestrictedTypes = new[] { typeof(Blocks.Interface.IProfileBlockType) })]
        public virtual ContentArea MainContentArea { get; set; }
    }
}
