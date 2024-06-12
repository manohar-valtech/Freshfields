import { ContextMode } from '@episerver/content-delivery';
import { ReactElement, memo } from 'react';

import { addEditAttributes } from '@/utils/episerverAttributes';

import EpiserverProperty from '../EpiserverProperty';
import HeroProps from './Hero.props';

import styles from './Hero.module.scss';

const Hero = ({
    title,
    subtitle,
    heroimage,
    mode,
}: HeroProps): ReactElement => {
    if (typeof heroimage != 'string') heroimage = heroimage?.src || '';

    return (
        <section className={styles['wrapper']}>
            <div className={styles['content']}>
                {(mode === ContextMode.Edit || title) && (
                    <h1
                        {...addEditAttributes('Title')}
                        className={styles['title']}
                        dangerouslySetInnerHTML={{ __html: title || '' }}
                    ></h1>
                )}
                {(mode === ContextMode.Edit || subtitle) && (
                    <p
                        {...addEditAttributes('Subtitle')}
                        className={styles['subtitle']}
                        dangerouslySetInnerHTML={{ __html: subtitle || '' }}
                    ></p>
                )}
                <EpiserverProperty propertyName="heroImage" mode={mode} />
            </div>
            {heroimage && (
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${heroimage})` }}
                />
            )}
        </section>
    );
};

export default memo(Hero);
