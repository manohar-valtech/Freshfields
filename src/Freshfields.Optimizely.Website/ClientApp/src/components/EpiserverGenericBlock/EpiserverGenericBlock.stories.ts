import type { Meta, StoryObj } from '@storybook/react';

import EpiserverGenericBlock from './EpiserverGenericBlock';
import mockdata from './EpiserverGenericBlock.mock';

const meta = {
    title: 'Episerver/Generic Block',
    component: EpiserverGenericBlock,
} satisfies Meta<typeof EpiserverGenericBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _GenericBlock: Story = {
    args: mockdata,
};
