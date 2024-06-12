import {
    ContentData,
    ContextMode,
    PageData,
} from '@episerver/content-delivery';

export interface EpiserverMode {
    mode: ContextMode;
}

export interface EpiPageContent extends EpiserverMode {
    content: PageData;
}

export default interface EpiContent extends EpiserverMode {
    content: ContentData;
    mode: ContextMode;
}
