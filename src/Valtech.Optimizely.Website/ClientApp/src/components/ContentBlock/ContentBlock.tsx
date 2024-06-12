import { ReactElement, memo } from 'react';

import classNames from '@/utils/classNames';
import { addEditAttributes } from '@/utils/episerverAttributes';

import ConditionalImage from '../ConditionalImage';
import EpiserverProperty from '../EpiserverProperty';
import ContentBlockProps from './ContentBlock.props';

import styles from './ContentBlock.module.scss';

const ContentBlock = ({ content, mode }: ContentBlockProps): ReactElement => {
    return (
        <div
            className={classNames([
                styles['container'],
                content.imageAlignment === 'Right'
                    ? styles['container--flip']
                    : undefined,
                content.image ? styles['container--two-col'] : undefined,
            ])}
        >
            {content.image && (
                <ConditionalImage
                    className={styles['image']}
                    src={content.image}
                    alt={content.title}
                    width={1000}
                    height={1000}
                    {...addEditAttributes('Image')}
                />
            )}
            <div className={classNames([styles['content']])}>
                <h2 {...addEditAttributes('Title')}>{content.title}</h2>
                <div
                    {...addEditAttributes('Content')}
                    dangerouslySetInnerHTML={{ __html: content.content || '' }}
                />
                {!content.image && (
                    <EpiserverProperty propertyName="image" mode={mode} />
                )}
            </div>
        </div>
    );
};

export default memo(ContentBlock);
