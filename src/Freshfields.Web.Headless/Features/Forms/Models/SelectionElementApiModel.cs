﻿namespace  Freshfields.Web.Headless.Features.Forms.Models;

public class SelectionElementApiModel : ValidatableElementApiModel
{
    public ICollection<OptionApiModel> Options { get; set; }
}
