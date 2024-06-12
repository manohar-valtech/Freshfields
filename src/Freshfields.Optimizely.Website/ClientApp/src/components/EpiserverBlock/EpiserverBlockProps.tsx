import { ContentData, ContentLink } from '@episerver/content-delivery';

import { EpiserverMode } from '@/types/EpiContent';

export interface EpiserverBlockExpanded extends ContentData {
    [x: string]: any;
}

export interface EpiserverBlockContentLink extends ContentLink {
    expanded: EpiserverBlockExpanded;
}
export interface EpiserverBlockContent extends ContentData {
    contentLink: EpiserverBlockContentLink;
    displayOption: string;
    inlineBlock: { contentType: [] };
    tag: string;
}

export default interface EpiserverBlockProps extends EpiserverMode {
    content: EpiserverBlockContent;
    [key: string]: any;
}
