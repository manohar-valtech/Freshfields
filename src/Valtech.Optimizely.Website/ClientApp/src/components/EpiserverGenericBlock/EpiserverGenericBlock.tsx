import { ReactElement, memo } from 'react';

import EpiserverGenericBlockProps from './EpiserverGenericBlock.props';

import styles from './EpiserverGenericBlock.module.scss';

const EpiserverGenericBlock = ({
    content,
}: EpiserverGenericBlockProps): ReactElement => {
    return (
        <div className={styles['container']}>
            <p className={styles['text']}>
                {`Could not load a react component of type ${content.contentType[1] || 'unknown'}.`}
            </p>
            <details>
                <summary>Show content</summary>
                <pre className={styles['code']}>
                    {JSON.stringify(content, null, 4)}
                </pre>
            </details>
        </div>
    );
};

export default memo(EpiserverGenericBlock);
