import { ValidationRule } from 'react-hook-form';

import EpiValidation from '@/types/EpiValidation';

const generateValidationRules = (
    validationRules: EpiValidation[] | undefined,
    required: boolean,
    requiredMessage: string
) => {
    let rules = {
        required: {
            value: required,
            message: required
                ? requiredMessage || 'This field is required'
                : '',
        },
    } as Rules;

    if (!validationRules) return rules;

    // Sort based on order
    validationRules.sort((a, b) => a.order - b.order);

    // Go through the validationRules and create the rules required in the react-hook-form format
    validationRules.forEach((validationRule: EpiValidation, index: number) => {
        switch (validationRule.type) {
            case 'MaxLengthValidator':
                rules = {
                    ...rules,
                    maxLength: {
                        value: validationRule?.maxLength || 100,
                        message:
                            validationRule?.message ||
                            'This field has a too long value',
                    },
                };
                break;

            case 'MaxFileSizeValidator':
                rules = {
                    ...rules,
                    validate: {
                        ...rules.validate,
                        [`${validationRule.type}-${index}`]: (
                            FileList: any[]
                        ): string | boolean => {
                            if (FileList && FileList.length > 0) {
                                const files = Array.from(FileList);
                                const fallbackSizeInBytes = 104857600;
                                const allowedSizeInBytes =
                                    validationRule?.sizeInBytes ||
                                    fallbackSizeInBytes;
                                const isValid = files.every(
                                    (file) =>
                                        Number(file?.size) < allowedSizeInBytes
                                );
                                if (!isValid) {
                                    return (
                                        validationRule?.message ||
                                        'This field is invalid'
                                    );
                                }
                            }
                            return true;
                        },
                    },
                };
                break;
            default:
                if (validationRule?.regex) {
                    rules = {
                        ...rules,
                        pattern: {
                            value: new RegExp(validationRule?.regex),
                            message:
                                validationRule?.message ||
                                'This field is invalid',
                        },
                    };
                }
                break;
        }
    });
    return rules;
};

interface Rules {
    required?: ValidationRule<boolean>;
    maxLength?: ValidationRule<number>;
    pattern?: ValidationRule<RegExp>;
    validate: {
        [key: string]: (value: any) => string | boolean;
    };
}

export default generateValidationRules;
