import { ImageProps, StaticImageData } from 'next/image';

export default interface ConditionalImageProps extends ImageProps {
    src: string | StaticImageData;
}
