using EPiServer.ContentApi.Core.Serialization.Models;

namespace Freshfields.Optimizely.Headless.Features.Forms.Models;

public class FormElementApiModel : ContentApiModel
{
    public string ElementName { get; set; }
}
