import type { Meta, StoryObj } from '@storybook/react';

import BackButton from './BackButton';
import mockdata from './BackButton.mock';

const meta = {
    title: 'Molecules/Back Button',
    component: BackButton,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _BackButton: Story = {
    args: mockdata,
};
