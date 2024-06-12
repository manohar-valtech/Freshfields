import EpiFormElement, { EpiFormElementData } from '@/types/EpiFormElement';

interface CaptchaElementContent extends EpiFormElementData {
    imageWidth: number;
    imageHeight: number;
    textLength: number;
}
export default interface CaptchaElementProps extends EpiFormElement {
    content: CaptchaElementContent;
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
