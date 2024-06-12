using System.Collections.Specialized;
using EPiServer.Forms.Core.Models.Internal;

namespace Valtech.Optimizely.Headless.Features.Forms.Services;

public interface IFormSubmissionService
{
    SubmitActionResult SubmitForm(NameValueCollection rawSubmittedData);
}
