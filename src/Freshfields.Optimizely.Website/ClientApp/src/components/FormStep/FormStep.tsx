'use client';

import { ContextMode } from '@episerver/content-delivery';
import { ReactElement, memo, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import Button from '@/components/Button';

import classNames from '@/utils/classNames';

import FormStepProps from './FormStepProps';

import styles from './FormStep.module.scss';

const FormStep = ({
    id,
    className,
    elementsArea,
    hasSteps,
    children,
    mode,
    stepIndex,
    open,
    active,
    done,
    isLastStep,
    toggleStep,
    openStep,
    label,
    stepNumber,
}: FormStepProps): ReactElement => {
    open = open || mode == ContextMode.Edit;
    active = active || mode == ContextMode.Edit;

    const isStep = stepNumber || label;

    const [isOpen, setOpen] = useState<boolean>(open);
    const { trigger } = useFormContext();

    const elementnames = elementsArea
        ?.map((item) => item.contentLink.expanded.elementName || '')
        .filter(Boolean);

    const triggerOptions = {
        shouldFocus: true,
    };
    useEffect(() => {
        if (isOpen !== open) {
            setOpen(open);
        }
    }, [isOpen, open]);

    const classes = classNames([
        styles.step,
        className,
        isStep ? styles['step--has-steps'] : undefined,
        done ? styles['step--done'] : undefined,
        open ? styles['step--open'] : undefined,
        active ? styles['step--active'] : undefined,
        !open ? styles['step--closed'] : undefined,
    ]);

    const childItems = <>{children}</>;

    if (hasSteps)
        return (
            <div className={classes} id={id}>
                {isStep && (
                    <button
                        onClick={async (event) => {
                            event.preventDefault();
                            if (
                                elementnames &&
                                (await trigger(elementnames, triggerOptions))
                            )
                                toggleStep(stepIndex);
                        }}
                        disabled={!active}
                        aria-disabled={active ? 'false' : 'true'}
                    >
                        <div className={styles.step__content}>
                            {stepNumber && (
                                <p className={styles.number}>{stepNumber}</p>
                            )}
                            {label}
                        </div>
                    </button>
                )}
                <div className={styles.elements}>
                    {childItems}
                    {(stepIndex > 0 || !isLastStep) && (
                        <div className={styles.buttons}>
                            {stepIndex > 0 && (
                                <Button
                                    onClick={async (event) => {
                                        event.preventDefault();
                                        if (
                                            elementnames &&
                                            (await trigger(
                                                elementnames,
                                                triggerOptions
                                            ))
                                        )
                                            openStep(stepIndex - 1);
                                    }}
                                    mode={mode}
                                >
                                    Previous
                                </Button>
                            )}
                            {!isLastStep && (
                                <Button
                                    onClick={async (event) => {
                                        event.preventDefault();
                                        if (
                                            elementnames &&
                                            (await trigger(
                                                elementnames,
                                                triggerOptions
                                            ))
                                        )
                                            openStep(stepIndex + 1);
                                    }}
                                    mode={mode}
                                >
                                    Next
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );

    return <>{children}</>;
};

export default memo(FormStep);
