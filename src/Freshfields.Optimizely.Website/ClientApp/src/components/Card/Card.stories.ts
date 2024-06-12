import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';
import mockdata from './Card.mock';

const meta = {
    title: 'Molecules/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Card: Story = {
    args: mockdata,
};
