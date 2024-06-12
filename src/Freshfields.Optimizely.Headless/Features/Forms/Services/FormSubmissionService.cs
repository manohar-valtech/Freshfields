using System.Collections.Specialized;
using System.Security.Claims;
using EPiServer.Forms;
using EPiServer.Forms.Core.Internal;
using EPiServer.Forms.Core.Models;
using EPiServer.Forms.Core.Models.Internal;
using EPiServer.Forms.Implementation.Elements;
using Microsoft.AspNetCore.Http;

namespace Freshfields.Optimizely.Headless.Features.Forms.Services;

/// <summary>
/// Wrapper around the DataSubmissionService that allows us to set the correct user on the submission.
/// </summary>
internal class FormSubmissionService : DataSubmissionService, IFormSubmissionService
{
    private new readonly IHttpContextAccessor _httpContextAccessor;

    public FormSubmissionService(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public SubmitActionResult SubmitForm(NameValueCollection rawSubmittedData)
    {
        return base.PerformDataSubmit(rawSubmittedData, _httpContextAccessor.HttpContext);
    }

    /// <inheritdoc />
    protected override void AddSystemFieldsToSubmission(ref Submission submission, FormContainerBlock formContainer,
        HttpContext httpContext, NameValueCollection rawSubmittedData, bool isFinalized)
    {
        base.AddSystemFieldsToSubmission(ref submission, formContainer, httpContext, rawSubmittedData, isFinalized);

        if (submission.Data.ContainsKey(Constants.SYSTEMCOLUMN_SubmitUser))
        {
            submission.Data.Remove(Constants.SYSTEMCOLUMN_SubmitUser);
        }

        if (_httpContextAccessor.HttpContext == null)
        {
            submission.Data.Add(Constants.SYSTEMCOLUMN_SubmitUser, string.Empty);
            return;
        }

        var claimsPrincipal = _httpContextAccessor.HttpContext.User;

        var identifier = claimsPrincipal.FindFirst(x => x.Type == ClaimTypes.Email)?.Value ??
                         claimsPrincipal.Identity?.Name;

        submission.Data.Add(Constants.SYSTEMCOLUMN_SubmitUser, identifier ?? string.Empty);
    }
}
