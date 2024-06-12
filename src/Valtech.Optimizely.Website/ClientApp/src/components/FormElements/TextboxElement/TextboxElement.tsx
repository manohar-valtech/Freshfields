'use client';

import React, { ReactElement, memo, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import classNames from '@/utils/classNames';
import evaluteVisibilityFromDependencies from '@/utils/evaluteVisibilityFromDependencies';
import generateValidationRules from '@/utils/generateValidationRules';

import TextboxElementProps from './TextboxElementProps';

import styled from './TextboxElement.module.scss';

const TextboxElement = ({
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
        contentType,
    },
    onChange,
    onFocus,
    disabled,
    inputMode = 'text',
    type = 'text',
    pattern,
}: TextboxElementProps): ReactElement => {
    const { setValue, unregister, control } = useFormContext();
    const isNumeric =
        contentType.includes('NumberElementBlock') || type === 'number';
    const isUrl = contentType.includes('UrlElementBlock') || type === 'url';
    const isEmail = validators?.some(
        (validator: { type: string }) => validator.type === 'EmailValidator'
    );

    // Set the correct types and input modes for the input
    if (isNumeric) {
        inputMode = 'numeric';
        type = 'text';
        pattern = '^[0-9]*$';
    }

    if (isUrl) {
        inputMode = 'url';
        type = 'url';
    }

    if (isEmail) {
        type = 'email';
        inputMode = 'email';
    }

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
                            <input
                                {...field}
                                className={classNames([
                                    className,
                                    styled.input,
                                    error ? styled['input--error'] : '',
                                ])}
                                id={id || guidValue}
                                ref={ref}
                                placeholder={placeHolder}
                                disabled={disabled}
                                autoComplete={autoComplete}
                                inputMode={inputMode}
                                pattern={pattern}
                                type={type}
                                title={description}
                                onFocus={(
                                    event: React.FocusEvent<HTMLInputElement>
                                ) => {
                                    if (onFocus) {
                                        onFocus(event);
                                    }
                                }}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    field.onChange(event);

                                    if (onChange) {
                                        onChange(event, event.target.value);
                                    }

                                    if (isNumeric && setValue && elementName)
                                        setValue(
                                            elementName,
                                            event.target.value.replace(
                                                /\D/g,
                                                ''
                                            )
                                        );
                                }}
                            />
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

export default memo(TextboxElement);
