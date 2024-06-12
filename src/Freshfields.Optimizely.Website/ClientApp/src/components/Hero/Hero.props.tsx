import { StaticImageData } from 'next/image';

import { EpiserverMode } from '@/types/EpiContent';

export default interface HeroProps extends EpiserverMode {
    title: string;
    subtitle: string;
    heroimage: string | StaticImageData;
}
