import Image from 'next/image';
import { ReactElement, memo } from 'react';

import EpiserverLink from '../EpiserverLink';
import BackButtonProps from './BackButton.props';

import styles from './BackButton.module.scss';

const BackButton = ({ previousUrl, mode }: BackButtonProps): ReactElement => {
    return (
        <div className={styles['wrapper']}>
            <EpiserverLink
                url={previousUrl}
                className={styles['link']}
                mode={mode}
                prefetch
            >
                <Image src="/back.svg" width="64" height="64" alt="Back" />
            </EpiserverLink>
        </div>
    );
};

export default memo(BackButton);
