import EpiFormElement, { EpiFormElementData } from '@/types/EpiFormElement';

interface ParagraphTextElementContent extends EpiFormElementData {
    paragraphText: string;
}
export default interface ParagraphTextElementProps extends EpiFormElement {
    content: ParagraphTextElementContent;
}
