'use client';

import React, { ReactElement, memo, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import classNames from '@/utils/classNames';
import evaluteVisibilityFromDependencies from '@/utils/evaluteVisibilityFromDependencies';
import generateValidationRules from '@/utils/generateValidationRules';

import TextareaElementProps from './TextareaElementProps';

import styled from './TextareaElement.module.scss';

const TextareaElement = ({
    content: {
        contentLink: { guidValue },
        id,
        label,
        placeHolder,
        predefinedValue,
        autoComplete,
        elementName,
        className,
        validators,
        dependencies,
        description,
        required,
        requiredMessage,
    },
    onChange,
    onFocus,
    disabled,
    rows = 3,
}: TextareaElementProps): ReactElement => {
    const { setValue, unregister, control } = useFormContext();

    const rules = generateValidationRules(
        validators,
        required,
        requiredMessage ?? ''
    );

    const visibleFromDependencies =
        dependencies && control
            ? evaluteVisibilityFromDependencies(dependencies, control)
            : true;

    useEffect(() => {
        if (elementName && setValue && unregister)
            if (visibleFromDependencies) setValue(elementName, predefinedValue);
            else unregister(elementName);
    }, [
        elementName,
        predefinedValue,
        setValue,
        unregister,
        visibleFromDependencies,
    ]);

    return (
        <>
            {visibleFromDependencies && (
                <Controller
                    name={elementName || ''}
                    control={control}
                    defaultValue={predefinedValue || ''}
                    rules={rules}
                    render={({
                        field: { ref, ...field },
                        fieldState: { error },
                    }) => (
                        <fieldset className={styled.fieldset}>
                            {label && (
                                <label className={styled.label}>{label}</label>
                            )}
                            <textarea
                                {...field}
                                className={classNames([
                                    className,
                                    styled.textarea,
                                    error ? styled['textarea--error'] : '',
                                ])}
                                id={id || guidValue}
                                ref={ref}
                                placeholder={placeHolder}
                                disabled={disabled}
                                autoComplete={autoComplete}
                                title={description}
                                rows={rows}
                                onFocus={(
                                    event: React.FocusEvent<HTMLTextareaElementElement>
                                ) => {
                                    if (onFocus) {
                                        onFocus(event);
                                    }
                                }}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextareaElementElement>
                                ) => {
                                    field.onChange(event);

                                    if (onChange) {
                                        onChange(event, event.target.value);
                                    }
                                }}
                            ></textarea>
                            {error && (
                                <span className={styled.error}>
                                    {error.message}
                                </span>
                            )}
                        </fieldset>
                    )}
                />
            )}
        </>
    );
};

export default memo(TextareaElement);
