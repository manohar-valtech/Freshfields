import { ContextMode } from '@episerver/content-delivery';

import TextboxElementProps from './TextboxElementProps';

const defaultTextboxElement: TextboxElementProps = {
    content: {
        elementName: 'TextboxElement',
        label: 'Default',
        description: 'Field description',
        predefinedValue: '',
        placeHolder: '',
        required: false,
        validators: [],
        contentLink: {
            guidValue: '1fc90efd-e702-4a5e-a3a2-daf3a3a05f7e',
            url: '',
            language: {
                link: '',
                displayName: 'English',
                name: 'en',
            },
        },
        name: 'Text area',
        language: {
            link: '',
            displayName: 'English',
            name: 'en',
        },
        existingLanguages: [
            {
                link: '',
                displayName: 'English',
                name: 'en',
            },
        ],
        contentType: ['Block', 'TextareaElementBlock'],
        parentLink: {
            guidValue: 'b1f5a6bc-4e73-452f-b83a-853a33db7fdf',
            url: '/contentassets/b1f5a6bc4e73452fb83a853a33db7fdf/',
            language: {
                link: '',
                displayName: 'English',
                name: 'en',
            },
        },
        changed: new Date('2024-06-11T10:01:22Z'),
        created: new Date('2024-06-11T10:01:22Z'),
        startPublish: new Date('2024-06-11T10:01:22Z'),
        saved: new Date('2024-06-11T10:03:43Z'),
    },
    mode: ContextMode.Default,
};

const error: TextboxElementProps = {
    ...defaultTextboxElement,
    error: true,
};

const disabled: TextboxElementProps = {
    ...defaultTextboxElement,
    disabled: true,
};

const placeHolder: TextboxElementProps = {
    ...defaultTextboxElement,
    placeHolder: 'Placeholder',
};

const number: TextboxElementProps = {
    ...defaultTextboxElement,
    inputMode: 'numeric',
    type: 'number',
};

const password: TextboxElementProps = {
    ...defaultTextboxElement,
    type: 'password',
};

const phone: TextboxElementProps = {
    ...defaultTextboxElement,
    inputMode: 'tel',
    type: 'tel',
};

const mockdata = {
    default: defaultTextboxElement,
    disabled: disabled,
    error: error,
    placeHolder: placeHolder,
    number: number,
    password: password,
    phone: phone,
};

export default mockdata;
