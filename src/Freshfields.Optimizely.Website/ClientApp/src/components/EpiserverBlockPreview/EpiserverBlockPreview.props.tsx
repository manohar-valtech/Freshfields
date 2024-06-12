import { ContentData } from '@episerver/content-delivery';

import { EpiserverMode } from '@/types/EpiContent';

export default interface EpiserverBlockPreviewProps extends EpiserverMode {
    content: ContentData;
}
