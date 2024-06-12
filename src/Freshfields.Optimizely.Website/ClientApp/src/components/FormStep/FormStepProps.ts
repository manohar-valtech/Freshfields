import { PropsWithChildren } from 'react';

import { EpiserverBlockContent } from '@/components/EpiserverBlock/EpiserverBlockProps';

import { EpiserverMode } from '@/types/EpiContent';

type FormStepProps = EpiserverMode &
    PropsWithChildren<{
        stepNumber?: number;
        className?: string;
        id?: string;
        label?: string;
        contentId?: string;
        elementsArea?: EpiserverBlockContent[];
        hasSteps?: boolean;
        stepIndex: number;
        open: boolean;
        done: boolean;
        active: boolean;
        isLastStep: boolean;
        toggleStep: (index: number) => void;
        openStep: (index: number) => void;
    }>;

export type PropsWithEpiFormContent<P = Record<string, unknown>> = P &
    FormStepProps;

export default FormStepProps;
