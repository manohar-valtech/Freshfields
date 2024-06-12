import type { Meta, StoryObj } from '@storybook/react';

import EpiserverContentArea from './EpiserverContentArea';
import mockdata from './EpiserverContentArea.mock';

const meta = {
    title: 'Episerver/Content Area',
    component: EpiserverContentArea,
} satisfies Meta<typeof EpiserverContentArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _ContentArea: Story = {
    args: mockdata,
};
