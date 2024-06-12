import { ReactElement, memo } from 'react';

import ConditionalImage from '../ConditionalImage';
import EpiserverLink from '../EpiserverLink';
import CardProps from './Card.props';

import styles from './Card.module.scss';

const Card = ({ name, image, url, mode }: CardProps): ReactElement => {
    return (
        <EpiserverLink url={url} className={styles['link']} mode={mode}>
            <ConditionalImage
                className={styles['image']}
                src={image}
                alt={name}
                width={60}
                height={60}
            />
            <p className={styles['text']}>{name}</p>
        </EpiserverLink>
    );
};

export default memo(Card);
