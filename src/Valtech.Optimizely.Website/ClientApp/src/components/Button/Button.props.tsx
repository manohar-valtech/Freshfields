import { PropsWithChildren } from 'react';

import { EpiserverMode } from '@/types/EpiContent';

type ButtonProps = PropsWithChildren<
    EpiserverMode & {
        className?: string;
        title?: string;
        text?: string;
        disabled?: boolean;
        name?: string;
        url?: string;
        prefetch?: boolean;
        type?: 'button' | 'submit' | 'reset';
        variant?: 'primary' | 'outline';
        onClick?: (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void;
        onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    }
>;

export default ButtonProps;
