import { ContentData } from '@episerver/content-delivery';

import { EpiserverMode } from '@/types/EpiContent';

import FormProps from '../Form/FormProps';

export interface FormContainerBlockContent extends FormProps, ContentData {
    title: string;
    description: string;
}

export default interface FormContainerBlockProps extends EpiserverMode {
    content: FormContainerBlockContent;
}
