namespace Freshfields.Headless.Features.Forms.Models;

public class FormSubmitResultApiModel
{
    public bool IsSuccess { get; set; }
    public bool IsValid { get; set; }
    public string Message { get; set; }
    public FormElementValidationApiModel[] Validations { get; set; }
}