import { EpiserverMode } from '@/types/EpiContent';
import { ContentData } from "@episerver/content-delivery";

export interface SubmitButtonElementBlockContent extends ContentData {
    label: string;
    description: string;
}

export default interface SubmitButtonElementBlockProps extends EpiserverMode {
    content: SubmitButtonElementBlockContent;
}