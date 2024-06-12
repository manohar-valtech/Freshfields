import {
    ContentData,
    ContentLink,
    PageData,
} from '@episerver/content-delivery';

import BuyTicketBlockProps from '@/components/BuyTicketBlock/BuyTicketBlock.props';
import { EpiserverBlockContent } from '@/components/EpiserverBlock/EpiserverBlockProps';

import { EpiPageContent } from '@/types/EpiContent';

interface AristsLinkExpanded extends ContentData {
    url: string;
}

interface ArtistsLink extends ContentLink {
    expanded: AristsLinkExpanded;
}

interface LandingPageContent extends PageData {
    artistsLink: ArtistsLink;
    buyTicketBlock: BuyTicketBlockProps;
    footerContentArea: EpiserverBlockContent[];
    heroImage: string;
    mainContentArea: EpiserverBlockContent[];
    subtitle: string;
    title: string;
}

interface LandingPageProps extends EpiPageContent {
    content: LandingPageContent;
}

export default LandingPageProps;
