import { ContextMode } from '@episerver/content-delivery';

import SubmitButtonElementProps from './SubmitButtonElementProps';

const mockdata: SubmitButtonElementProps = {
    content: {
        required: false,
        elementName: 'submitfield',
        contentLink: {
            guidValue: '1fc90efd-e702-4a5e-a3a2-daf3a3a05f7e',
            url: '',
            language: {
                link: '',
                displayName: 'English',
                name: 'en',
            },
        },
        name: 'Submit button',
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
        contentType: ['Block', 'SubmitButtonElementBlock'],
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

export default mockdata;
