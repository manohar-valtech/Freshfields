import EpiserverGenericBlockProps from './EpiserverGenericBlock.props';

const mockdata: EpiserverGenericBlockProps = {
    content: {
        contentLink: {
            guidValue: '6d559290-a37f-4741-a0de-944efba547ee',
            url: '',
            language: { link: '', displayName: 'English', name: 'en' },
            expanded: undefined,
        },
        name: 'Lorem ipsum',
        language: { link: '', displayName: 'English', name: 'en' },
        existingLanguages: [
            { link: '', displayName: 'English', name: 'en' },
            { link: '', displayName: 'Swedish', name: 'sv' },
        ],
        contentType: [],
        parentLink: {
            guidValue: '43d54b7a-e957-43dd-ba16-1e5805e451aa',
            url: '/',
            language: { link: '', displayName: 'English', name: 'en' },
        },
        changed: new Date('2021-03-12T13:11:02Z'),
        created: new Date('2018-01-04T20:19:02Z'),
        startPublish: new Date('2018-01-04T20:19:02Z'),
        saved: new Date('2024-04-02T10:28:10Z'),
    },
};

export default mockdata;
