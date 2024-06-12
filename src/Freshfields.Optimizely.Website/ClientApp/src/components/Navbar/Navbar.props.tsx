import { ContentLink } from '@episerver/content-delivery';

import LanguageSelectorProps from '../LanguageSelector/LanguageSelector.props';

export default interface NavbarProps extends LanguageSelectorProps {
    parentLink: ContentLink;
}
