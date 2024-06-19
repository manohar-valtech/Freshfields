namespace  Freshfields.Web.Headless.Features.Forms.Models;

public class OptionApiModel
{
    public OptionApiModel(string caption, string value, bool? @checked)
    {
        Caption = caption;
        Value = value;
        Checked = @checked;
    }

    public string Caption { get; set; }

    public string Value { get; set; }

    public bool? Checked { get; set; }
}