import { ReactElement, memo } from 'react';

import ConditionalImage from '../ConditionalImage';
import ImageFileProps from './ImageFile.props';

import styles from './ImageFile.module.scss';

const ImageFile = ({ content }: ImageFileProps): ReactElement => {
    return (
        <div className={styles['wrapper']}>
            <ConditionalImage
                src={content.url}
                alt=""
                width={500}
                height={500}
            />
        </div>
    );
};

export default memo(ImageFile);
