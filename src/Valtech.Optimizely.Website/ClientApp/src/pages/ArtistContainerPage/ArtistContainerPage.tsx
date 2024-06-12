import { ReactElement, memo } from 'react';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';

import EpiContent from '@/types/EpiContent';
import { addEditAttributes } from '@/utils/episerverAttributes';
import getContent from '@/utils/getContent';

import { ArtistDetailsProps } from '../ArtistDetailsPage/ArtistDetailsPageProps';

import styles from './ArtistContainerPage.module.scss';

const ArtistContainerPage = async ({
    content,
    mode,
}: EpiContent): Promise<ReactElement> => {
    const { contentLoader } = getContent();
    let artists: [string, ArtistDetailsProps[]][] = [];

    await contentLoader
        .getChildren<ArtistDetailsProps>(content.contentLink.guidValue, {
            branch: content.language.name,
        })
        .then((children) => {
            var items = Array.isArray(children) ? children : children.items;

            const ordered: ArtistDetailsProps[] = Array.from(items ?? []).sort(
                (a: ArtistDetailsProps, b: ArtistDetailsProps): number =>
                    a.artistName.toLowerCase() < b.artistName.toLowerCase()
                        ? -1
                        : 1
            );

            // Group by first letter of artist name
            const artistsByLetter = ordered.reduce(
                (
                    groups: {
                        [key: string]: ArtistDetailsProps[];
                    },
                    item: ArtistDetailsProps
                ) => {
                    const letter = item.artistName.substring(0, 1);
                    groups[letter] = groups[letter] || [];
                    groups[letter].push(item);
                    return groups;
                },
                {}
            );

            artists = Object.entries(artistsByLetter);
        });

    return (
        <>
            <Navbar
                parentLink={content.parentLink}
                language={content.language}
                existingLanguages={content.existingLanguages}
                mode={mode}
            />
            <div className={styles.page}>
                <h1 className={styles.title} {...addEditAttributes('Name')}>
                    {content.name}
                </h1>
                <ul className={styles.letters}>
                    {artists.map((artist) => {
                        const [letter, artists] = artist;
                        return (
                            <li key={letter}>
                                <h2 className={styles.subtitle}>{letter}</h2>
                                <ul className={styles.artists} key={letter}>
                                    {artists.map((artist, key) => (
                                        <li
                                            className={styles['wrapper']}
                                            key={key}
                                        >
                                            <Card
                                                name={artist.artistName}
                                                image={artist.artistPhoto}
                                                url={artist.url}
                                                mode={mode}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default memo(ArtistContainerPage);
