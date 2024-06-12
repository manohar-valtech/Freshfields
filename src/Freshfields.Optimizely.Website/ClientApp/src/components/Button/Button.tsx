import { ReactElement, memo } from 'react';

import classNames from '@/utils/classNames';

import EpiserverLink from '../EpiserverLink';
import BackButtonProps from './Button.props';

import styles from './Button.module.scss';

const Button = ({
    url,
    children,
    text,
    prefetch,
    onClick,
    onKeyDown,
    title,
    disabled,
    type,
    variant = 'primary',
    className,
    mode,
}: BackButtonProps): ReactElement => {
    const classes = classNames([
        className,
        styles['button'],
        variant === 'outline' ? styles['button--outline'] : undefined,
    ]);
    const LinkComponent: ReactElement = (
        <EpiserverLink
            className={classes}
            url={url!}
            prefetch={prefetch}
            mode={mode}
        >
            {children ? children : text}
        </EpiserverLink>
    );

    const ButtonComponent: ReactElement = (
        <button
            className={classes}
            onClick={onClick}
            onKeyDown={onKeyDown}
            title={title}
            disabled={disabled}
            type={type}
            tabIndex={disabled ? -1 : undefined}
        >
            {children ? children : text}
        </button>
    );

    return url && !disabled ? LinkComponent : ButtonComponent;
};

export default memo(Button);
