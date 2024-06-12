import { EpiserverBlockContent } from '@/components/EpiserverBlock/EpiserverBlockProps';

import { EpiserverMode } from '@/types/EpiContent';

export default interface FormProps extends EpiserverMode {
    id?: string;
    label?: string;
    className?: string;
    method?: 'post' | 'put' | 'delete';
    action?: string;
    areaName?: string;
    elementsArea: EpiserverBlockContent[];
    confirmationMessage: string;
    resetConfirmationMessage: string;
    submitSuccessMessage: string;
    showSummarizedData: boolean;
}

export type formDataProps = {
    [key: string]: any;
};
