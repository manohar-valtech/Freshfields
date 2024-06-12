import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import mockdata from './Button.mock';

const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Button: Story = {
    args: mockdata.button,
};

export const Disabled: Story = {
    args: {
        ...mockdata.button,
        disabled: true,
    },
};

export const Outline: Story = {
    args: {
        ...mockdata.button,
        variant: 'outline',
    },
};

export const Link: Story = {
    args: mockdata.link,
};
