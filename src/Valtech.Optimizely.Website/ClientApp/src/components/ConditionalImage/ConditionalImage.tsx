import Image, { StaticImageData } from 'next/image';
import { ReactElement, memo } from 'react';

import ConditionalImageProps from './ConditionalImage.props';

const ConditionalImage = ({
    src,
    alt,
    ...props
}: ConditionalImageProps): ReactElement => {
    var url: string | StaticImageData;

    if (typeof src === 'string') {
        url =
            (/(http(s?)):\/\//i.test(src)
                ? ''
                : process.env.NEXT_PUBLIC_WEBSITE_URL) + src;
    } else url = src;

    return <>{src && <Image src={url} alt={alt} {...props} />}</>;
};

export default memo(ConditionalImage);
