import { PropsWithChildren, ReactElement, memo } from 'react';

import FooterProps from './Footer.props';

import styles from './Footer.module.scss';

const Footer = ({ children }: PropsWithChildren<FooterProps>): ReactElement => {
    return (
        <footer className={styles['wrapper']}>
            <div className={styles['waves']}>
                <div className={styles['container']}>
                    {children}
                    <p className={styles['text']}>&copy; Music Festival 2022</p>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
