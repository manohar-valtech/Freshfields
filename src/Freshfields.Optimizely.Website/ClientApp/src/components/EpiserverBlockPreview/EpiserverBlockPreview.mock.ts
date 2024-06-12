import { ContentData, ContextMode } from '@episerver/content-delivery';
import image from 'public/imageExample.jpg';

import EpiserverBlockPreviewProps from './EpiserverBlockPreview.props';

const mockdata: EpiserverBlockPreviewProps = {
    content: {
        contentLink: {
            id: undefined,
            workId: undefined,
            guidValue: '6d559290-a37f-4741-a0de-944efba547ee',
            providerName: undefined,
            url: '',
            language: { link: '', displayName: 'English', name: 'en' },
            expanded: undefined,
        },
        name: 'Music Festival',
        language: { link: '', displayName: 'English', name: 'en' },
        existingLanguages: [
            { link: '', displayName: 'English', name: 'en' },
            { link: '', displayName: 'Swedish', name: 'sv' },
        ],
        contentType: ['Block', 'ContentBlock'],
        parentLink: {
            guidValue: '43d54b7a-e957-43dd-ba16-1e5805e451aa',
            url: '/',
            language: { link: '', displayName: 'English', name: 'en' },
        },
        changed: new Date('2021-03-12T13:11:02Z'),
        created: new Date('2018-01-04T20:19:02Z'),
        startPublish: new Date('2018-01-04T20:19:02Z'),
        saved: new Date('2024-04-02T10:28:10Z'),
        status: 'Published',
        title: 'music festival is coming soon!',
        image: image,
        imageAlignment: 'Left',
        content:
            '<p>Get ready for the largest music experience in North America. Music Festival offers a variety of food vendors, performances from your favorite artists, and environmentally conscious planning.</p>',
    } as ContentData,
    mode: ContextMode.Default,
};

export default mockdata;
