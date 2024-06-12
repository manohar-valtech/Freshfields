import { ContextMode } from '@episerver/content-delivery';
import { ReactElement, memo } from 'react';

import ConditionalImage from '@/components/ConditionalImage';
import EpiserverProperty from '@/components/EpiserverProperty';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { addEditAttributes } from '@/utils/episerverAttributes';

import ArtistDetailsPageProps from './ArtistDetailsPageProps';

import styles from './ArtistDetailsPage.module.scss';

const ArtistDetailsPage = ({
    content,
    mode,
}: ArtistDetailsPageProps): ReactElement => {
    function friendlyDateTime(dateTime: string | number | Date) {
        return new Date(dateTime).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    }

    const friendlyStartTime = content.performanceStartTime
        ? friendlyDateTime(content.performanceStartTime)
        : ' ';
    const friendlyEndTime = content.performanceEndTime
        ? friendlyDateTime(content.performanceEndTime)
        : ' ';
    return (
        <>
            <Navbar
                parentLink={content.parentLink}
                language={content.language}
                existingLanguages={content.existingLanguages}
                mode={mode}
            />
            <div className={styles.page}>
                <ConditionalImage
                    src={content.artistPhoto}
                    alt={content.artistName}
                    width={2000}
                    height={2000}
                    className={styles.image}
                />

                <div className={styles.information}>
                    <h1
                        className={styles.title}
                        {...addEditAttributes('ArtistName')}
                    >
                        {content.artistName}
                    </h1>

                    <EpiserverProperty propertyName="ArtistPhoto" mode={mode} />
                    <EpiserverProperty propertyName="ArtistGenre" mode={mode} />
                    <EpiserverProperty
                        propertyName="PerformanceStartTime"
                        mode={mode}
                    />
                    <EpiserverProperty
                        propertyName="PerformanceEndTime"
                        mode={mode}
                    />
                    <EpiserverProperty
                        propertyName="ArtistIsHeadliner"
                        mode={mode}
                    />

                    {(mode === ContextMode.Edit || content.stageName) && (
                        <p
                            className={styles.stage}
                            {...addEditAttributes('StageName')}
                            dangerouslySetInnerHTML={{
                                __html: content.stageName || '',
                            }}
                        />
                    )}
                    {(mode === ContextMode.Edit ||
                        content.performanceStartTime ||
                        content.performanceEndTime) && (
                        <p className={styles.time}>
                            {content.performanceStartTime && (
                                <span
                                    className={styles['start-time']}
                                    {...addEditAttributes(
                                        'PerformanceStartTime'
                                    )}
                                >
                                    {friendlyStartTime}
                                </span>
                            )}
                            {' - '}
                            {content.performanceEndTime && (
                                <span
                                    className={styles['end-time']}
                                    {...addEditAttributes('PerformanceEndTime')}
                                >
                                    {friendlyEndTime}
                                </span>
                            )}
                        </p>
                    )}
                    {(mode === ContextMode.Edit ||
                        content.artistDescription) && (
                        <div className={styles.description}>
                            <div
                                {...addEditAttributes('ArtistDescription')}
                                dangerouslySetInnerHTML={{
                                    __html: content.artistDescription || '',
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default memo(ArtistDetailsPage);
