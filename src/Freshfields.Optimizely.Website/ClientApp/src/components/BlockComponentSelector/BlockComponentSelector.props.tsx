import { ContentData } from '@episerver/content-delivery';

import { EpiserverMode } from '@/types/EpiContent';

export default interface BlockComponentSelectorProps extends EpiserverMode {
    content?: ContentData;
    previewWrapper?: boolean;
    [key: string]: any;
}
