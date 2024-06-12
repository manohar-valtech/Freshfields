import { ContextMode } from '@episerver/content-delivery';
import { ReactElement, memo } from 'react';

import classNames from '@/utils/classNames';

import EpiserverLink from '../EpiserverLink';
import EpiserverViewModeLinkProps from './EpiserverViewModeLink.props';

import styles from './EpiserverViewModeLink.module.scss';

const EpiserverViewModeLink = ({
    className,
    url,
    children,
    mode,
}: EpiserverViewModeLinkProps): ReactElement => {
    return (
        <EpiserverLink
            url={url}
            className={
                mode === ContextMode.Edit
                    ? classNames([className, styles.edit])
                    : className
            }
            mode={mode}
        >
            {children}
        </EpiserverLink>
    );
};

export default memo(EpiserverViewModeLink);
