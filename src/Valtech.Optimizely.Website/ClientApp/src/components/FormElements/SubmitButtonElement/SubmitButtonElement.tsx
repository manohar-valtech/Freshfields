'use client';

import React, { ReactElement, useCallback } from 'react';

import Button from '@/components/Button';

import SubmitButtonElementProps from './SubmitButtonElementProps';

import styled from './SubmitButtonElement.module.scss';

const SubmitButtonElement = ({
    disabled,
    content: { elementName, label, description },
    onClick,
    onKeyDown,
    mode,
}: SubmitButtonElementProps): ReactElement => {
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (onClick) onClick(event);
        },
        [onClick]
    );

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLButtonElement>) => {
            if (onKeyDown) onKeyDown(event);
        },
        [onKeyDown]
    );

    return (
        <Button
            className={styled.button}
            name={elementName}
            disabled={disabled}
            type={'submit'}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            title={description}
            mode={mode}
        >
            {label}
        </Button>
    );
};

export default SubmitButtonElement;
