import { ContextMode } from '@episerver/content-delivery';
import { ReactElement, memo } from 'react';

import EpiserverBlock from '@/components/EpiserverBlock';

import classNames from '@/utils/classNames';
import displayOptions from '@/utils/displayOptions';

import EpiserverContentAreaProps from './EpiserverContentArea.props';

import styles from './EpiserverContentArea.module.scss';

const EpiserverContentArea = ({
    content,
    mode,
}: EpiserverContentAreaProps): ReactElement => {
    const { getDisplayOption } = displayOptions('block');

    return (
        <section className={styles['container']}>
            {content?.length > 0 &&
                content.map((block, index) => {
                    const displayOption = getDisplayOption(block.displayOption);

                    return (
                        <div
                            className={classNames([
                                styles['block'],
                                !!displayOption
                                    ? styles[
                                          getDisplayOption(block.displayOption)
                                      ]
                                    : undefined,
                            ])}
                            key={index}
                            data-epi-content-id={
                                mode === ContextMode.Edit
                                    ? block.contentLink.guidValue
                                    : null
                            }
                        >
                            <EpiserverBlock content={block} mode={mode} />
                        </div>
                    );
                })}
        </section>
    );
};

export default memo(EpiserverContentArea);
