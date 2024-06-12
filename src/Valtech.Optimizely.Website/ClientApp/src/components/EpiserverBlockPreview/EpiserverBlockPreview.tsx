import { ContextMode } from '@episerver/content-delivery';
import { ReactElement, memo } from 'react';

import classNames from '@/utils/classNames';

import BlockComponentSelector from '../BlockComponentSelector';
import EpiserverBlockPreviewProps from './EpiserverBlockPreview.props';

import styles from './EpiserverBlockPreview.module.scss';

const EpiserverBlockPreview = ({
    content,
    mode,
}: EpiserverBlockPreviewProps): ReactElement => {
    return (
        <section className={styles['wrapper']}>
            <div className={styles['border']}>
                <h5>Full</h5>
            </div>
            <div className={styles['container']}>
                <BlockComponentSelector
                    mode={ContextMode.Edit}
                    content={content}
                ></BlockComponentSelector>
            </div>

            <div className={styles['border']}>
                <h5>Wide</h5>
            </div>
            <div
                className={classNames([
                    styles['container'],
                    styles['container--two-third'],
                ])}
            >
                <BlockComponentSelector
                    mode={ContextMode.Edit}
                    content={content}
                ></BlockComponentSelector>
            </div>

            <div className={styles['border']}>
                <h5>Half</h5>
            </div>
            <div
                className={classNames([
                    styles['container'],
                    styles['container--half'],
                ])}
            >
                <BlockComponentSelector
                    mode={ContextMode.Edit}
                    content={content}
                ></BlockComponentSelector>
            </div>

            <div className={styles['border']}>
                <h5>Narrow</h5>
            </div>
            <div
                className={classNames([
                    styles['container'],
                    styles['container--one-third'],
                ])}
            >
                <BlockComponentSelector
                    mode={ContextMode.Edit}
                    content={content}
                ></BlockComponentSelector>
            </div>
        </section>
    );
};

export default memo(EpiserverBlockPreview);
