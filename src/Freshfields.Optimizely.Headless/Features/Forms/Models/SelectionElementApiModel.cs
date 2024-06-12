namespace Freshfields.Optimizely.Headless.Features.Forms.Models;

public class SelectionElementApiModel : ValidatableElementApiModel
{
    public ICollection<OptionApiModel> Options { get; set; }
}
