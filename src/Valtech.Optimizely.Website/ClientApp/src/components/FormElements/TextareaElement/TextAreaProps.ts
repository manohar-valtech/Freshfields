import EpiFormElement from '@/types/EpiFormElement';

export default interface TextAreaProps extends EpiFormElement {
    rows?: number;
    placeHolder?: string;
    error?: boolean;
    onChange?: (
        event: React.ChangeEvent<HTMLTextAreaElement>,
        value: string | number
    ) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}
