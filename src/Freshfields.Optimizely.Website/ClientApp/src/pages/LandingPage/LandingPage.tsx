import { ReactElement, memo } from 'react';

import Button from '@/components/Button';
import EpiserverContentArea from '@/components/EpiserverContentArea';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LanguageSelector from '@/components/LanguageSelector';

import { addEditAttributes } from '@/utils/episerverAttributes';

import LandingPageProps from './LandingPageProps';

import styles from './LandingPage.module.scss';

const LandingPage = ({ content, mode }: LandingPageProps): ReactElement => {
    return (
        <div className={styles.page}>
            <nav className={styles.navbar}>
                <div className={styles.buttons}>
                    <Button url={content.artistsLink.url} mode={mode}>
                        {content.artistsLink.expanded.name}
                    </Button>

                    <Button mode={mode}>
                        {content.buyTicketBlock.heading}
                    </Button>
                </div>

                <LanguageSelector
                    existingLanguages={content.existingLanguages}
                    language={content.language}
                    mode={mode}
                />
            </nav>

            <Hero
                title={content.title}
                subtitle={content.subtitle}
                heroimage={content.heroImage}
                mode={mode}
            />

            <main className="Page-container">
                <div {...addEditAttributes('MainContentArea')}>
                    <EpiserverContentArea
                        content={content.mainContentArea}
                        mode={mode}
                    />
                </div>
            </main>

            <Footer>
                <div {...addEditAttributes('FooterContentArea')}>
                    <EpiserverContentArea
                        content={content.footerContentArea}
                        mode={mode}
                    />
                </div>
            </Footer>
        </div>
    );
};
export default memo(LandingPage);
