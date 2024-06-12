'use client';

import { ReactElement, memo, useCallback, useEffect, useState } from 'react';
import {
    FormProvider,
    Form as ReactHookForm,
    useForm,
    useFormState,
} from 'react-hook-form';

import { EpiserverBlockContent } from '@/components/EpiserverBlock/EpiserverBlockProps';
import FormStep from '@/components/FormStep';

import EpiserverBlock from '../EpiserverBlock';
import FormProps from './FormProps';

import styles from './Form.module.scss';

const isFormStepBlock = (element: EpiserverBlockContent): boolean =>
    element.contentLink.expanded.contentType.includes('FormStepBlock');

const SplitItemsByStep = (
    elementsArea: EpiserverBlockContent[],
    hasSteps: boolean
): EpiserverBlockContent[][] => {
    if (!hasSteps) return [elementsArea];

    const result: EpiserverBlockContent[][] = [[]];
    elementsArea.forEach((element) => {
        if (isFormStepBlock(element)) {
            result.push([]); // If new step, create new subarray
        }
        result[result.length - 1].push(element); // Push element to last array
    });

    if (result[0]?.length === 0) result.shift(); // Remove first item if empty
    return result;
};

const Form = ({
    id,
    method,
    action,
    elementsArea,
    submitSuccessMessage,
    mode,
}: FormProps): ReactElement => {
    const methods = useForm();
    const {
        control,
        formState: { isSubmitSuccessful, errors },
        reset,
        setValue,
        getValues,
        watch,
    } = methods;
    const formState = useFormState({ control });

    const numberOfSteps = elementsArea.filter((item) =>
        isFormStepBlock(item)
    ).length;
    const hasSteps = numberOfSteps > 0;
    const steps = SplitItemsByStep(elementsArea, hasSteps);
    const initialOpenSteps = steps
        .map((step, index) => {
            const isFormStep = step && isFormStepBlock(step[0]);
            if (!isFormStep || (isFormStep && index === 0)) return index;
        })
        .filter((x) => typeof x === 'number');

    const [openSteps, setOpenSteps] = useState<(number | undefined)[]>(
        initialOpenSteps || []
    );
    const [activeSteps, setActiveSteps] = useState<(number | undefined)[]>(
        initialOpenSteps || []
    );
    const finishedSteps = activeSteps.slice(0, -1);

    const toggleStep = useCallback(
        (index: number) => {
            const newOpenSteps = openSteps.includes(index)
                ? openSteps.filter((item) => item !== index)
                : [...openSteps, index];
            setOpenSteps(newOpenSteps);

            if (!activeSteps.includes(index)) {
                setActiveSteps([...activeSteps, index]);
            }
        },
        [openSteps, activeSteps]
    );

    const openStep = useCallback(
        (index: number) => {
            if (!openSteps.includes(index)) setOpenSteps([index]); // Close others on open

            if (!activeSteps.includes(index))
                setActiveSteps([...activeSteps, index]);

            setTimeout(() => {
                const element = document.getElementById(`${id}-${index}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        },
        [id, openSteps, activeSteps]
    );

    useEffect(() => {
        // Toggle the steps containing the errors
        if (formState.errors) {
            Object.keys(formState.errors).forEach((errorElementName) =>
                steps?.forEach((step, index) => {
                    if (
                        step.some(
                            (formItem) =>
                                formItem.contentLink.expanded.elementName ===
                                errorElementName
                        ) &&
                        !openSteps.includes(index)
                    ) {
                        openStep(index);
                    }
                })
            );
        }
    }, [formState.errors, openStep, openSteps, steps]);

    return (
        <FormProvider {...methods}>
            {!isSubmitSuccessful && (
                <ReactHookForm
                    method={method || 'post'}
                    id={id}
                    action={action}
                    onSubmit={(data) => {
                        console.log('DEBUG: onSubmit', data);
                    }}
                    onError={(data) => {
                        console.log('DEBUG: onError', data);
                    }}
                    onSuccess={(data) => {
                        console.log('DEBUG: onSuccess', data);
                    }}
                >
                    <>
                        {steps.map((stepElements, index) => {
                            return (
                                <FormStep
                                    key={`formStep${index}`}
                                    id={`${id}-${index}`}
                                    hasSteps={hasSteps}
                                    done={finishedSteps.includes(index)}
                                    open={openSteps.includes(index)}
                                    active={activeSteps.includes(index)}
                                    isLastStep={index === steps.length - 1}
                                    toggleStep={toggleStep}
                                    openStep={openStep}
                                    stepIndex={index}
                                    mode={mode}
                                >
                                    {stepElements && (
                                        <div className={styles.elements}>
                                            {stepElements.map(
                                                (
                                                    item: EpiserverBlockContent,
                                                    index: number
                                                ) => {
                                                    return (
                                                        <EpiserverBlock
                                                            key={`${index}-${item.contentLink.guidValue}`}
                                                            mode={mode}
                                                            content={item}
                                                        />
                                                    );
                                                }
                                            )}
                                        </div>
                                    )}
                                </FormStep>
                            );
                        })}

                        {errors?.root?.server && (
                            <div className={styles.elements} key="formError">
                                <div
                                    className={styles.error}
                                    dangerouslySetInnerHTML={{
                                        __html: errors.root.message || '',
                                    }}
                                />
                            </div>
                        )}
                    </>
                </ReactHookForm>
            )}
            {isSubmitSuccessful && (
                <div
                    className={styles.success}
                    dangerouslySetInnerHTML={{
                        __html: submitSuccessMessage || '',
                    }}
                />
            )}
        </FormProvider>
    );
};
export default memo(Form);
