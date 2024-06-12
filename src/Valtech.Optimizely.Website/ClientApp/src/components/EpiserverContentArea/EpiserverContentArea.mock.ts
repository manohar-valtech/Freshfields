import { ContextMode } from '@episerver/content-delivery';
import image from 'public/imageExample.jpg';

import EpiserverContentAreaProps from './EpiserverContentArea.props';

const mockdata: EpiserverContentAreaProps = {
    content: [
        {
            displayOption: '',
            tag: '',
            contentLink: {
                guidValue: '6d559290-a37f-4741-a0de-944efba547ee',
                url: '',
                language: {
                    link: '',
                    displayName: 'English',
                    name: 'en',
                },
                expanded: {
                    contentLink: {
                        guidValue: '6d559290-a37f-4741-a0de-944efba547ee',
                        url: '',
                        language: {
                            link: '',
                            displayName: 'English',
                            name: 'en',
                        },
                        expanded: undefined,
                    },
                    name: 'Music Festival',
                    language: {
                        link: '',
                        displayName: 'English',
                        name: 'en',
                    },
                    existingLanguages: [
                        { link: '', displayName: 'English', name: 'en' },
                        { link: '', displayName: 'Swedish', name: 'sv' },
                    ],
                    contentType: ['Block', 'ContentBlock'],
                    parentLink: {
                        guidValue: '43d54b7a-e957-43dd-ba16-1e5805e451aa',
                        url: '/contentassets/43d54b7ae95743ddba161e5805e451aa/',
                        language: {
                            link: '',
                            displayName: 'English',
                            name: 'en',
                        },
                    },
                    changed: new Date('2021-03-12T13:11:02Z'),
                    created: new Date('2018-01-04T20:19:02Z'),
                    startPublish: new Date('2018-01-04T20:19:02Z'),
                    saved: new Date('2024-04-02T10:28:10Z'),
                    title: 'music festival is coming soon!',
                    image: image,
                    imageAlignment: 'Left',
                    content:
                        '<p>Get ready for the largest music experience in North America. Music Festival offers a variety of food vendors, performances from your favorite artists, and environmentally conscious planning.</p>',
                },
            },
            parentLink: {
                guidValue: '43d54b7a-e957-43dd-ba16-1e5805e451aa',
                url: '/',
                language: { link: '', displayName: 'English', name: 'en' },
            },
            language: { link: '', displayName: 'English', name: 'en' },
            existingLanguages: [
                { link: '', displayName: 'English', name: 'en' },
                { link: '', displayName: 'Swedish', name: 'sv' },
            ],
            name: 'Music Festival',
            contentType: ['Block', 'ContentBlock'],
            changed: new Date('2021-03-12T13:11:02Z'),
            created: new Date('2018-01-04T20:19:02Z'),
            startPublish: new Date('2018-01-04T20:19:02Z'),
            saved: new Date('2024-04-02T10:28:10Z'),
            inlineBlock: { contentType: [] },
        },
        {
            displayOption: '',
            tag: '',
            contentLink: {
                guidValue: 'c2136e2a-0520-4c53-9358-7e32997634de',
                url: '',
                language: {
                    link: '',
                    displayName: 'English',
                    name: 'en',
                },
                expanded: {
                    contentLink: {
                        guidValue: 'c2136e2a-0520-4c53-9358-7e32997634de',
                        url: '',
                        language: {
                            link: '',
                            displayName: 'English',
                            name: 'en',
                        },
                        expanded: undefined,
                    },
                    name: 'Lineup',
                    language: {
                        link: '',
                        displayName: 'English',
                        name: 'en',
                    },
                    existingLanguages: [
                        { link: '', displayName: 'English', name: 'en' },
                        { link: '', displayName: 'Swedish', name: 'sv' },
                    ],
                    contentType: ['Block', 'ContentBlock'],
                    parentLink: {
                        guidValue: '43d54b7a-e957-43dd-ba16-1e5805e451aa',
                        url: '/contentassets/43d54b7ae95743ddba161e5805e451aa/',
                        expanded: undefined,
                        language: {
                            link: '',
                            displayName: 'English',
                            name: 'en',
                        },
                    },
                    changed: new Date('2021-03-12T13:11:02Z'),
                    created: new Date('2018-01-04T20:19:02Z'),
                    startPublish: new Date('2018-01-04T20:19:02Z'),
                    saved: new Date('2024-04-02T10:28:10Z'),
                    title: "this year's lineup",
                    image: image,
                    imageAlignment: 'Right',
                    content:
                        '<ol>\n<li>Air and Firewood</li>\n<li>Alexa Everywhere</li>\n<li>Boring Thrill</li>\n<li>Brave Minor</li>\n<li>Cranky Babe</li>\n<li>Despite Yu</li>\n<li>Greg Rabbit</li>\n</ol>\n<p><a href="/en/artists/">And Much More!</a></p>',
                },
            },
            parentLink: {
                guidValue: '43d54b7a-e957-43dd-ba16-1e5805e451aa',
                url: '/',
                language: { link: '', displayName: 'English', name: 'en' },
            },
            language: { link: '', displayName: 'English', name: 'en' },
            existingLanguages: [
                { link: '', displayName: 'English', name: 'en' },
                { link: '', displayName: 'Swedish', name: 'sv' },
            ],
            name: 'Music Festival',
            contentType: ['Block', 'ContentBlock'],
            changed: new Date('2021-03-12T13:11:02Z'),
            created: new Date('2018-01-04T20:19:02Z'),
            startPublish: new Date('2018-01-04T20:19:02Z'),
            saved: new Date('2024-04-02T10:28:10Z'),
            inlineBlock: { contentType: [] },
        },
    ],
    mode: ContextMode.Default,
};

export default mockdata;
