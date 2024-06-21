using System.Collections.Specialized;
using EPiServer.Forms.Core.Models.Internal;

namespace Freshfields.Headless.Features.Forms.Services;

public interface IFormSubmissionService
{
    SubmitActionResult SubmitForm(NameValueCollection rawSubmittedData);
}
