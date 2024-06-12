import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import TextareaElement from '.';
import mockdata from './TextareaElement.mock';

const meta: Meta<typeof TextareaElement> = {
    title: 'Atoms/TextareaElement',
    component: TextareaElement,
    args: mockdata.default,
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { control, setError } = useForm();
        args.error &&
            setError(
                mockdata.default.content.elementName || '',
                { type: 'value', message: 'Not ok' },
                { shouldFocus: true }
            );
        return <TextareaElement control={control} {...args} />;
    },
};

export default meta;

type Story = StoryObj<typeof TextareaElement>;

export const Default: Story = {};

export const Error: Story = {
    args: mockdata.error,
};

export const Placeholder: Story = {
    args: mockdata.placeHolder,
};

export const Disabled: Story = {
    args: mockdata.disabled,
};

export const Phone: Story = {
    args: mockdata.phone,
};

export const Number: Story = {
    args: mockdata.number,
};

export const Password: Story = {
    args: mockdata.password,
};
