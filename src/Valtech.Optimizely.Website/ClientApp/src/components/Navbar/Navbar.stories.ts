import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar';
import mockdata from './Navbar.mock';

const meta = {
    title: 'Organisms/Navbar',
    component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _Navbar: Story = { args: mockdata };
