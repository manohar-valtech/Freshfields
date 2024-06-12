import { ReactElement, memo } from 'react';

import { addEditAttributes } from '@/utils/episerverAttributes';

import BuyTicketBlockProps from './BuyTicketBlock.props';

import styles from './BuyTicketBlock.module.scss';

const BuyTicketBlock = ({
    heading,
    message,
    pagePropertyName,
}: BuyTicketBlockProps): ReactElement => {
    const prefixPropertyName = (propertyName: string): string => {
        return pagePropertyName
            ? `${pagePropertyName}.${propertyName}`
            : propertyName;
    };

    return (
        <div className={styles['wrapper']}>
            <h3 {...addEditAttributes(prefixPropertyName('Heading'))}>
                {heading || ''}
            </h3>
            <div>
                <label
                    htmlFor="tickets-email"
                    {...addEditAttributes(prefixPropertyName('Message'))}
                >
                    {message || ''}
                    <input id="tickets-email" type="email" />
                </label>
            </div>
        </div>
    );
};

export default memo(BuyTicketBlock);
