import { Control, useWatch } from 'react-hook-form';

import EpiElementDependency, {
    EpiConditionCombination,
    EpiConditionOperator,
    EpiDependencyAction,
} from '@/types/EpiElementDependency';

const evaluateConditionByOperator = (
    operator: EpiConditionOperator,
    targetValue: string | string[],
    conditionValue: string
): boolean => {
    if (typeof targetValue === 'undefined') return false;

    if (!Array.isArray(targetValue))
        switch (operator) {
            case EpiConditionOperator.Equals:
                return targetValue === conditionValue;
            case EpiConditionOperator.NotEquals:
                return targetValue !== conditionValue;
            case EpiConditionOperator.Contains:
                return targetValue.includes(conditionValue);
            case EpiConditionOperator.NotContains:
                return !targetValue.includes(conditionValue);
            case EpiConditionOperator.MatchRegularExpression:
                return new RegExp(conditionValue).test(targetValue);
            case EpiConditionOperator.NotApplicable:
                return true;
            default:
                return false;
        }
    else
        switch (operator) {
            case EpiConditionOperator.Equals:
                return targetValue.includes(conditionValue);
            case EpiConditionOperator.NotEquals:
                return !targetValue.includes(conditionValue);
            case EpiConditionOperator.Contains:
                return targetValue.some((value) =>
                    value.includes(conditionValue)
                );
            case EpiConditionOperator.NotContains:
                return !targetValue.some((value) =>
                    value.includes(conditionValue)
                );
            case EpiConditionOperator.MatchRegularExpression:
                return targetValue.some((value) =>
                    new RegExp(conditionValue).test(value)
                );
            case EpiConditionOperator.NotApplicable:
                return true;
            default:
                return false;
        }
};

const evaluteVisibleFromDependencies = (
    dependency: EpiElementDependency | undefined,
    control: Control<Record<string, any>, any>
): boolean => {
    if (dependency && control) {
        const { conditionCombination, action } = dependency;
        const returnValue =
            action?.clientsideAction === EpiDependencyAction.Show;

        if (conditionCombination === EpiConditionCombination.Any)
            return dependency.conditions
                ?.map((condition) => {
                    const { operator, fieldName, fieldValue } = condition;
                    const elementValue = fieldName
                        ? useWatch({
                              control,
                              name: fieldName,
                          }) || ''
                        : '';

                    return evaluateConditionByOperator(
                        operator,
                        elementValue,
                        fieldValue || ''
                    )
                        ? returnValue
                        : !returnValue;
                })
                .some(Boolean);
        else
            return dependency.conditions?.every((condition) => {
                const { operator, fieldName, fieldValue } = condition;
                const elementValue = fieldName
                    ? useWatch({
                          control,
                          name: fieldName,
                      }) || ''
                    : '';
                return evaluateConditionByOperator(
                    operator,
                    elementValue,
                    fieldValue || ''
                )
                    ? returnValue
                    : !returnValue;
            });
    }
    return true;
};

export default evaluteVisibleFromDependencies;
