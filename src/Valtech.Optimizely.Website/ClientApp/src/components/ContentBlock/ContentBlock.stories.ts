import type { Meta, StoryObj } from '@storybook/react';

import ContentBlock from './ContentBlock';
import mockdata from './ContentBlock.mock';

const meta = {
    title: 'Molecules/Content Block',
    component: ContentBlock,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ContentBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RightImage: Story = {
    args: mockdata.right,
};

export const LeftImage: Story = {
    args: mockdata.left,
};

export const NoImage: Story = {
    args: mockdata.noImage,
};
