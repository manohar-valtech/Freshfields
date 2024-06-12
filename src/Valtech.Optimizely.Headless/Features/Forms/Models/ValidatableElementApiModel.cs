namespace Valtech.Optimizely.Headless.Features.Forms.Models;

public class ValidatableElementApiModel : FormElementApiModel
{
    public string? AutoComplete { get; set; }

    public bool Required { get; set; }

    public string RequiredMessage { get; set; }

    public ICollection<ValidationApiModel> Validators { get; set; } = new List<ValidationApiModel>();
}
