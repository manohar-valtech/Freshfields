import { ContextMode, Language } from '@episerver/content-delivery';
import type { Meta, StoryObj } from '@storybook/react';

import LanguageSelector from './LanguageSelector';

const meta = {
    title: 'Molecules/Language Selector',
    component: LanguageSelector,
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _LanguageSelector: Story = {
    args: {
        language: {
            name: 'svenska',
            link: '',
            displayName: 'Svenska',
        } as Language,
        existingLanguages: [
            {
                name: 'svenska',
                link: '/sv/',
                displayName: 'Svenska',
            } as Language,
            {
                name: 'english',
                link: '/en/',
                displayName: 'English',
            } as Language,
        ],
        mode: ContextMode.Default,
    },
};
