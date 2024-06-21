namespace Freshfields.Headless.Features.Forms.Models;

public class ValidationApiModel
{
    public ValidationApiModel(int order, string regex, string message, string type)
    {
        Order = order;
        Regex = regex;
        Message = message;
        Type = type;
    }

    public int Order { get; set; }
    public string Regex { get; set; }
    public string Message { get; set; }
    public string Type { get; set; }
}
