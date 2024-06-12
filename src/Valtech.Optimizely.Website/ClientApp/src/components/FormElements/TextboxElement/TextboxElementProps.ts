import EpiFormElement from '@/types/EpiFormElement';

export default interface TextboxElementProps extends EpiFormElement {
    placeHolder?: string;
    error?: boolean;
    type?:
        | 'text'
        | 'password'
        | 'email'
        | 'number'
        | 'tel'
        | 'url'
        | 'time'
        | 'date'
        | 'datetime-local'
        | 'month'
        | 'week';
    inputMode?:
        | 'none'
        | 'text'
        | 'tel'
        | 'url'
        | 'email'
        | 'numeric'
        | 'decimal'
        | 'search';
    pattern?: string;
    onChange?: (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
        value: string | number
    ) => void;
    onBlur?: (
        event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
    onFocus?: (
        event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
}
