import EpiFormElement from "types/EpiFormElement";
import { FieldSizeType } from "types/types";
export default interface ChoiceElementProps extends EpiFormElement {
    description?: string;
    allowMultiSelect?: boolean;
    disabled?: boolean;
    error?: boolean;
    items?: ChoiceItem[];
    size?: FieldSizeType;
    onChange?: (
        event: React.ChangeEvent<HTMLInputElement | HTMLButtonElement>,
        value: string,
    ) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLButtonElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLButtonElement>;
}

export interface ChoiceItem {
    value: string;
    caption: string;
    description?: string;
    disabled?: boolean;
    required?: boolean;
    checked?: boolean;
}
