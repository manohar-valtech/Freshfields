import { ContextMode } from '@episerver/content-delivery';
import image from 'public/imageExample.jpg';

import ContentBlockProps from './ContentBlock.props';

const left: ContentBlockProps = {
    content: {
        name: 'Lorem ipsum dolor',
        contentLink: {
            guidValue: '6d559290-a37f-4741-a0de-944efba547ee',
            url: '',
            language: { link: '', displayName: 'English', name: 'en' },
        },
        title: 'Lorem ipsum dolor sit amet',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis tellus dolor, et volutpat nunc bibendum eu. Sed vehicula a eros vehicula consequat. Maecenas cursus elit elit, eget mollis tellus mollis a. Etiam ac ante aliquet, hendrerit justo vitae, mattis leo. Ut a pulvinar metus. Cras ut elit eget nisi maximus ultrices. ',
        imageAlignment: 'Left',
        image: image,
        parentLink: {
            guidValue: '',
            url: '/',
            language: { link: '', displayName: 'English', name: 'en' },
        },
        contentType: ['Block', 'ContentBlock'],
        language: { link: '', displayName: 'English', name: 'en' },
        existingLanguages: [
            { link: '', displayName: 'English', name: 'en' },
            { link: '', displayName: 'Swedish', name: 'sv' },
        ],
        changed: new Date('2021-03-12T13:11:02Z'),
        created: new Date('2018-01-04T20:19:02Z'),
        startPublish: new Date('2018-01-04T20:19:02Z'),
        saved: new Date('2024-04-02T10:28:10Z'),
    },
    mode: ContextMode.Default,
};

const right: ContentBlockProps = {
    content: {
        ...left.content,
        imageAlignment: 'Right',
    },
    mode: ContextMode.Default,
};

const noImage: ContentBlockProps = {
    content: {
        ...left.content,
        image: undefined,
    },
    mode: ContextMode.Default,
};

const mockdata = { left, right, noImage };

export default mockdata;
