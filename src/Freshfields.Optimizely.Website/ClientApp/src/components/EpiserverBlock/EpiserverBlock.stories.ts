import type { Meta, StoryObj } from '@storybook/react';

import EpiserverBlock from './EpiserverBlock';
import mockdata from './EpiserverBlock.mock';

const meta = {
    title: 'Episerver/Block',
    component: EpiserverBlock,
} satisfies Meta<typeof EpiserverBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Block: Story = {
    args: mockdata,
};
