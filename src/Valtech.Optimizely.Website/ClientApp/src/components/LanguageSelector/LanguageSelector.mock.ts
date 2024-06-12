import { ContextMode, Language } from '@episerver/content-delivery';

import LanguageSelectorProps from './LanguageSelector.props';

const mockdata: LanguageSelectorProps = {
    language: {
        name: 'svenska',
        link: '',
        displayName: 'Svenska',
    } as Language,
    existingLanguages: [
        {
            name: 'svenska',
            link: '/sv/',
            displayName: 'Svenska',
        } as Language,
        {
            name: 'english',
            link: '/en/',
            displayName: 'English',
        } as Language,
    ],
    mode: ContextMode.Default,
};

export default mockdata;
