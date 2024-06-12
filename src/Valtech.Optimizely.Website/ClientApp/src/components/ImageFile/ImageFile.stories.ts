import type { Meta, StoryObj } from '@storybook/react';

import ImageFile from './ImageFile';
import mockdata from './ImageFile.mock';

const meta = {
    title: 'Atoms/Image',
    component: ImageFile,
} satisfies Meta<typeof ImageFile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Image: Story = {
    args: mockdata,
};
