'use client';

import { ReactElement, memo, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import evaluteVisibilityFromDependencies from '@/utils/evaluteVisibilityFromDependencies';

import HiddenElementProps from './HiddenElementProps';

const HiddenElement = ({
    content: {
        contentLink: { guidValue },
        id,
        predefinedValue,
        elementName,
        dependencies,
    },
}: HiddenElementProps): ReactElement => {
    const { setValue, unregister, control } = useFormContext();
    const defaultvalue = predefinedValue || '';
    const visibleFromDependencies =
        dependencies && control
            ? evaluteVisibilityFromDependencies(dependencies, control)
            : true;

    const updateHidden = (event: any) => {
        if (event.detail?.value && event.detail.id === id) {
            setValue &&
                elementName &&
                setValue(elementName, event.detail.value);
        }
    };

    useEffect(() => {
        window.addEventListener('updateHidden', updateHidden);

        // cleanup listeners
        return () => {
            window.removeEventListener('updateHidden', updateHidden);
        };
    });

    useEffect(() => {
        if (elementName && setValue)
            if (visibleFromDependencies) setValue(elementName, defaultvalue);
            else unregister(elementName);
    }, [visibleFromDependencies]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {visibleFromDependencies && (
                <Controller
                    name={elementName || ''}
                    control={control}
                    defaultValue={defaultvalue}
                    render={({ field }) => (
                        <input id={id || guidValue} type="hidden" {...field} />
                    )}
                />
            )}
        </>
    );
};

export default memo(HiddenElement);
