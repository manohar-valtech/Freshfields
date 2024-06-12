import type { Meta, StoryObj } from '@storybook/react';

import Hero from './Hero';
import mockdata from './Hero.mock';

const meta = {
    title: 'Organisms/Hero',
    component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Hero: Story = {
    args: mockdata,
};
