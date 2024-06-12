import { ContextMode } from '@episerver/content-delivery';
import Link from 'next/link';
import { ReactElement, memo } from 'react';

import classNames from '@/utils/classNames';

import EpiserverLinkProps from './EpiserverLink.props';

import styles from './EpiserverLink.module.scss';

const EpiserverLink = ({
    className,
    url,
    children,
    prefetch,
    mode,
}: EpiserverLinkProps): ReactElement => {
    const useNextLink = mode === ContextMode.Default;

    const classes = classNames([styles['link'], className]);

    // Use the Next links for view mode
    if (useNextLink)
        return (
            <Link href={url} className={classes} prefetch={prefetch}>
                {children}
            </Link>
        );
    else
        return (
            <a href={url} className={classes}>
                {children}
            </a>
        );
};

export default memo(EpiserverLink);
