import { ContextMode } from '@episerver/content-delivery';
import { PropsWithChildren } from 'react';

type EpiserverLinkProps = PropsWithChildren<{
    url: string;
    className?: string;
    prefetch?: boolean;
    mode: ContextMode;
}>;

export default EpiserverLinkProps;
