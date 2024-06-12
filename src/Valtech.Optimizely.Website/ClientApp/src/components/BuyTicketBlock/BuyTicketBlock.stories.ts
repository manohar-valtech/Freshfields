import type { Meta, StoryObj } from '@storybook/react';

import BuyTicketBlock from './BuyTicketBlock';
import mockdata from './BuyTicketBlock.mock';

const meta = {
    title: 'Molecules/Buy Ticket Block',
    component: BuyTicketBlock,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof BuyTicketBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _BuyTicketBlock: Story = {
    args: mockdata,
};
