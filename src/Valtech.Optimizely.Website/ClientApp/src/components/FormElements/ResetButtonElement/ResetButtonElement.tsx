'use client';

import React, { ReactElement, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import Button from '@/components/Button';

import ResetButtonElementProps from './ResetButtonElementProps';

import styled from './ResetButtonElement.module.scss';

const ResetButtonElement = ({
    disabled,
    content: { elementName, label, description },
    onClick,
    onKeyDown,
    mode,
}: ResetButtonElementProps): ReactElement => {
    const { reset } = useFormContext();

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (onClick) onClick(event);
            reset();
        },
        [onClick, reset]
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
            type="button"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            title={description}
            mode={mode}
            variant="outline"
        >
            {label}
        </Button>
    );
};

export default ResetButtonElement;
