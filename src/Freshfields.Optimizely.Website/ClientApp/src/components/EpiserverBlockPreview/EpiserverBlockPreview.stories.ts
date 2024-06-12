import type { Meta, StoryObj } from '@storybook/react';

import EpiserverBlockPreview from './EpiserverBlockPreview';
import mockdata from './EpiserverBlockPreview.mock';

const meta = {
    title: 'Episerver/Block Preview',
    component: EpiserverBlockPreview,
} satisfies Meta<typeof EpiserverBlockPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _BlockPreview: Story = {
    args: mockdata,
};
