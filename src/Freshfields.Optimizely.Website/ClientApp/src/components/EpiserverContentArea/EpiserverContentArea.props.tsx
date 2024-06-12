import { EpiserverMode } from '@/types/EpiContent';

import { EpiserverBlockContent } from '../EpiserverBlock/EpiserverBlockProps';

export default interface EpiserverContentAreaProps extends EpiserverMode {
    content: EpiserverBlockContent[];
}
