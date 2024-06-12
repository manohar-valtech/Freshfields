import { ReactElement, memo } from 'react';

import BackButton from '../BackButton';
import LanguageSelector from '../LanguageSelector';
import NavbarProps from './Navbar.props';

const Navbar = ({
    parentLink,
    existingLanguages,
    language,
    mode,
}: NavbarProps): ReactElement => {
    return (
        <nav>
            {parentLink?.url && (
                <BackButton previousUrl={parentLink.url} mode={mode} />
            )}
            <LanguageSelector
                existingLanguages={existingLanguages}
                language={language}
                mode={mode}
            />
        </nav>
    );
};

export default memo(Navbar);
