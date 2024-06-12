using System.Collections.Specialized;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.Forms;
using EPiServer.Forms.Core.Models.Internal;
using EPiServer.Forms.Implementation.Elements;
using EPiServer.Globalization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Valtech.Optimizely.Headless.Features.Forms.Models;
using Valtech.Optimizely.Headless.Features.Forms.Services;

namespace Valtech.Optimizely.Headless.Features.Forms.Controllers.Api;

[ApiController]
[Route("{language}/api/forms")]
public class FormsSubmissionApiController : ControllerBase
{
    private readonly IFormSubmissionService _formSubmissionService;
    private readonly IUpdateCurrentLanguage _updateCurrentLanguage;
    private readonly IContentLoader _contentLoader;
    private readonly ILanguageBranchRepository _languageBranchRepository;

    public FormsSubmissionApiController(IFormSubmissionService formSubmissionService, IUpdateCurrentLanguage updateCurrentLanguage, IContentLoader contentLoader, ILanguageBranchRepository languageBranchRepository)
    {
        _formSubmissionService = formSubmissionService;
        _updateCurrentLanguage = updateCurrentLanguage;
        _contentLoader = contentLoader;
        _languageBranchRepository = languageBranchRepository;
    }

    [HttpPost]
    [HttpOptions]
    [Route("{formGuid}")]
    public IActionResult PostFormSubmission(string language, Guid formGuid, IFormCollection formCollection)
    {
        var culture = _languageBranchRepository.ListEnabled()
            .SingleOrDefault(x => string.Equals(x.LanguageID, language, StringComparison.OrdinalIgnoreCase))?.Culture;

        if (culture == null)
        {
            return BadRequest();
        }

        var loaderOptions = new LoaderOptions { LanguageLoaderOption.FallbackWithMaster(culture) };

        if (!_contentLoader.TryGet<FormContainerBlock>(formGuid, loaderOptions, out var form))
        {
            return NotFound();
        }

        _updateCurrentLanguage.SetRoutedContent((IContent)form, culture.Name);

        var formData = new NameValueCollection
        {
            {Constants.FormGuidKey, formGuid.ToString()}
        };

        if (!string.IsNullOrEmpty(language))
        {
            formData.Add(Constants.FormLanguage, culture.Name);
        }

        foreach (var formItem in formCollection)
        {
            formData.Add(formItem.Key, formItem.Value);
        }

        var result = _formSubmissionService.SubmitForm(formData);

        return Ok(Map(result, form));
    }

    private static FormSubmitResultApiModel Map(SubmitActionResult result, FormContainerBlock form)
    {
        // TODO: Would be good to add support for the RedirectUrl
        var model = new FormSubmitResultApiModel
        {
            IsSuccess = result.IsSuccess,
            IsValid = true,
            Message = result.IsSuccess ? form.ConfirmationMessage ?? result.Message : result.Message
        };

        if (result.AdditionalParams == null)
        {
            return model;
        }

        if (result.AdditionalParams.TryGetValue(Constants.ValidationFail, out var validationFail))
        {
            model.IsValid = !(validationFail as bool?) ?? true;
        }

        if (!result.AdditionalParams.TryGetValue(Constants.FormFieldKey, out var formField))
        {
            return model;
        }

        if (formField is not IList<ValidationInfo> validationInfos)
        {
            return model;
        }

        model.Validations = validationInfos.Select(x =>
            new FormElementValidationApiModel(x.InvalidElement.ToString(), x.InvalidElementName,
                x.ValidationMessage)).ToArray();

        return model;
    }
}
