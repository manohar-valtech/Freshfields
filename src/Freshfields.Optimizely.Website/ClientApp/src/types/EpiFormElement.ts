import { ContentData, ContextMode } from '@episerver/content-delivery';

import EpiValidation from '@/types/EpiValidation';

import EpiElementDependency from './EpiElementDependency';

export interface EpiFormElementData extends ContentData {
    id?: string;
    label?: string;
    className?: string;
    elementName?: string;
    autoComplete?: string;
    description?: string;
    placeHolder?: string;
    predefinedValue?: string;
    required: boolean;
    requiredMessage?: string;
    validators?: EpiValidation[];
    dependencies?: EpiElementDependency;
}

export default interface EpiFormElement {
    content: EpiFormElementData;
    mode: ContextMode;
    disabled?: boolean;
}
