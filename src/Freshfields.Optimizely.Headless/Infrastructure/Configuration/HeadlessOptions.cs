using System.ComponentModel.DataAnnotations;
using EPiServer.ServiceLocation;

namespace Freshfields.Optimizely.Headless.Infrastructure.Configuration;

[Options]
public class HeadlessOptions
{
    [Required]
    public int ContentAreaMaxDepth { get; set; } = 1;
}