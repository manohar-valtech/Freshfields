import { ReactElement, memo } from 'react';

import classNames from '@/utils/classNames';

import EpiserverViewModeLink from '../EpiserverViewModeLink';
import LanguageSelectorProps from './LanguageSelector.props';

import styles from './LanguageSelector.module.scss';

const LanguageSelector = ({
    language,
    existingLanguages,
    className,
    mode,
}: LanguageSelectorProps): ReactElement => {
    return (
        <nav
            className={classNames([className, styles['wrapper']])}
            aria-label="Languages"
        >
            <ul className={styles['languages']}>
                {existingLanguages.map((item) => (
                    <li
                        key={item.name}
                        className={classNames([
                            styles['language'],
                            item.name === language.name
                                ? styles['language--active']
                                : '',
                        ])}
                    >
                        <EpiserverViewModeLink
                            url={item.link}
                            className={styles['link']}
                            mode={mode}
                        >
                            {item.displayName}
                        </EpiserverViewModeLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default memo(LanguageSelector);
