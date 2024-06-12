import { Language } from '@episerver/content-delivery';

import { EpiserverMode } from '@/types/EpiContent';

export default interface LanguageSelectorProps extends EpiserverMode {
    className?: string;
    existingLanguages: Language[];
    language: Language;
}
