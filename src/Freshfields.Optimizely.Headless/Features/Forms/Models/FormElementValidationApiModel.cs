namespace Freshfields.Headless.Features.Forms.Models;

public class FormElementValidationApiModel
{
    public FormElementValidationApiModel(string id, string name, string message)
    {
        Id = id;
        Name = name;
        Message = message;
    }

    public string Id { get; set; }
    public string Name { get; set; }
    public string Message { get; set; }
}
