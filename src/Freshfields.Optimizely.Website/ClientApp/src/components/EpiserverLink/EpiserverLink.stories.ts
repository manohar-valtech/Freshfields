import type { Meta, StoryObj } from '@storybook/react';

import EpiserverLink from './EpiserverLink';
import mockdata from './EpiserverLink.mock';

const meta = {
    title: 'Episerver/Link',
    component: EpiserverLink,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof EpiserverLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Link: Story = {
    args: mockdata,
};
