using EPiServer.ContentApi.Core.Serialization;
using EPiServer.ContentApi.Core.Serialization.Models;
using EPiServer.Forms.Core;
using EPiServer.Forms.Core.Internal.AutoComplete;
using EPiServer.Forms.Core.Validation;
using EPiServer.Forms.Core.Validation.Internal;
using EPiServer.Forms.Implementation.Elements.BaseClasses;
using EPiServer.Forms.Implementation.Validation;
using EPiServer.Forms.UI.SelectionFactory;
using Valtech.Optimizely.Headless.Features.Forms.Models;
using Valtech.Optimizely.Headless.Infrastructure.Serialization.Mappers;

namespace Valtech.Optimizely.Headless.Features.Forms.Mappers;

public class ValidatableElementApiMapper : BaseContentApiMapper<ValidatableElementBlockBase, ValidatableElementApiModel>
{
    private readonly IValidationService _validationService;

    public ValidatableElementApiMapper(IValidationService validationService)
    {
        _validationService = validationService;
    }

    public override int Order => -1;

    protected override void MapApiModel(ValidatableElementBlockBase content, ConverterContext converterContext, ContentApiModel sourceApiModel,
        ValidatableElementApiModel destinationApiModel)
    {
        if (content is IAutoComplete autocomplete)
        {
            destinationApiModel.Properties.Remove(nameof(IAutoComplete.AutoComplete));

            if ((AutoCompleteType)autocomplete.AutoComplete != AutoCompleteType.Off)
            {
                destinationApiModel.AutoComplete = AutoCompleteSelectionFactory.GetStringValue(autocomplete.AutoComplete);
            }
        }

        destinationApiModel.Properties.Remove(nameof(IElementValidatable.Validators));

        var validators = _validationService.GetElementValidators(content).OrderBy(x => x.ValidationOrder);

        var validationApiModels = new List<ValidationApiModel>();

        foreach (var validator in validators)
        {
            var validationModel = validator.BuildValidationModel(content);

            if (validator is RequiredValidator)
            {
                destinationApiModel.Required = true;
                destinationApiModel.RequiredMessage = validationModel.Message;
                continue;
            }

            if (validationModel is RegularExpressionValidationModel regexValidationModel)
            {
                validationApiModels.Add(new ValidationApiModel(validator.ValidationOrder, regexValidationModel.JsPattern,
                    regexValidationModel.Message, validator.GetType().Name));
            }
        }

        destinationApiModel.Validators = validationApiModels;
    }
}
