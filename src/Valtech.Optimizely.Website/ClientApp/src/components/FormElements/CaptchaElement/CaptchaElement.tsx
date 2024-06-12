'use client';

import React, { ReactElement, memo, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import ConditionalImage from '@/components/ConditionalImage';

import classNames from '@/utils/classNames';
import evaluteVisibilityFromDependencies from '@/utils/evaluteVisibilityFromDependencies';
import generateValidationRules from '@/utils/generateValidationRules';

import CaptchaElementProps from './CaptchaElementProps';

import styled from './CaptchaElement.module.scss';

const CaptchaElement = ({
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
        imageWidth,
        imageHeight,
        textLength,
    },
    disabled,
    onFocus,
    onChange,
}: CaptchaElementProps): ReactElement => {
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
                            <ConditionalImage
                                className={styled.image}
                                title={description}
                                src={`/EPiServer.Forms/DataSubmit/GetCaptchaImage?elementGuid=${guidValue}`}
                                alt={''}
                                width={imageWidth}
                                height={imageHeight}
                            />
                            <input
                                {...field}
                                className={classNames([
                                    className,
                                    styled.input,
                                    error ? styled['input--error'] : '',
                                ])}
                                id={guidValue}
                                ref={ref}
                                placeholder={placeHolder}
                                disabled={disabled}
                                autoComplete={autoComplete}
                                type="text"
                                title={description}
                                maxLength={textLength}
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

export default memo(CaptchaElement);
