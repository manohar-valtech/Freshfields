import { StaticImageData } from 'next/image';

import { EpiserverMode } from '@/types/EpiContent';

export default interface CardProps extends EpiserverMode {
    name: string;
    image: string | StaticImageData;
    url: string;
}
