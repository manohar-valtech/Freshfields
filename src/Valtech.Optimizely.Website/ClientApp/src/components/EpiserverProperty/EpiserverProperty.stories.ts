import type { Meta, StoryObj } from '@storybook/react';

import EpiserverProperty from './EpiserverProperty';
import mockdata from './EpiserverProperty.mock';

const meta = {
    title: 'Episerver/Property',
    component: EpiserverProperty,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof EpiserverProperty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Property: Story = {
    args: mockdata,
};
