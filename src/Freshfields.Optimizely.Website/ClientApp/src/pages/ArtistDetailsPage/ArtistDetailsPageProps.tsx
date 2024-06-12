import { PageData } from '@episerver/content-delivery';

import { EpiPageContent } from '@/types/EpiContent';

export interface ArtistDetailsProps extends PageData {
    artistDescription: string;
    artistGenre: string;
    artistPhoto: string;
    artistName: string;
    performanceEndTime: string;
    performanceStartTime: string;
    stageName: string;
}

export default interface ArtistDetailsPageProps extends EpiPageContent {
    content: ArtistDetailsProps;
}
