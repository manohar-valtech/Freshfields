import { ContextMode } from '@episerver/content-delivery';

import TextFieldProps from './CaptchaElementProps';

const defaultTextfield: TextFieldProps = {
    content: {
        elementName: 'CaptchaElement',
        description: 'Field description',
        predefinedValue: '',
        placeHolder: '',
        required: false,
        validators: [],
        contentLink: {
            guidValue: '47c9c8cc-4ef4-4fc1-be58-e96f54fa316e',
            url: '',
            language: {
                link: '',
                displayName: 'English',
                name: 'en',
            },
        },
        name: 'CaptchaElement',
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
        contentType: ['Block', 'CaptchaElementElementBlock'],
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
        label: 'Word verification',
        imageWidth: 350,
        imageHeight: 75,
        textLength: 5,
    },
    mode: ContextMode.Default,
};

const error: TextFieldProps = {
    ...defaultTextfield,
    //error: true,
};

const disabled: TextFieldProps = {
    ...defaultTextfield,
    disabled: true,
};

const placeHolder: TextFieldProps = {
    ...defaultTextfield,
    //placeHolder: 'Placeholder',
};

const number: TextFieldProps = {
    ...defaultTextfield,
    //inputMode: 'numeric',
    //type: 'number',
};

const password: TextFieldProps = {
    ...defaultTextfield,
    //type: 'password',
};

const phone: TextFieldProps = {
    ...defaultTextfield,
    //inputMode: 'tel',
    //type: 'tel',
};

const mockdata = {
    default: defaultTextfield,
    disabled: disabled,
    error: error,
    placeHolder: placeHolder,
    number: number,
    password: password,
    phone: phone,
};

export default mockdata;
