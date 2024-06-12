import { ContextMode, Language } from '@episerver/content-delivery';

import NavbarProps from './Navbar.props';

const mockdata: NavbarProps = {
    parentLink: {
        guidValue: '',
        url: '/',
        language: {
            name: 'svenska',
            link: '',
            displayName: 'Svenska',
        } as Language,
    },
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
