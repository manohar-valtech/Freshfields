import { ContentData } from '@episerver/content-delivery';
import { StaticImageData } from 'next/image';

import { EpiserverMode } from '@/types/EpiContent';

export interface ContentBlockContent extends ContentData {
    title: string;
    content: string;
    imageAlignment?: 'Left' | 'Right';
    image?: string | StaticImageData;
}

export default interface ContentBlockProps extends EpiserverMode {
    content: ContentBlockContent;
}
