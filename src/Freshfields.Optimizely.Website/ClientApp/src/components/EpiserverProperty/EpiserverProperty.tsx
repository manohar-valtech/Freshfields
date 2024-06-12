import { ContextMode } from '@episerver/content-delivery';
import { ReactElement, memo } from 'react';

import { addEditAttributes } from '@/utils/episerverAttributes';

import EpiserverPropertyProps from './EpiserverProperty.props';

import styles from './EpiserverProperty.module.scss';

const EpiserverProperty = ({
    propertyName,
    debug = false,
    mode,
}: EpiserverPropertyProps): ReactElement => {
    return (
        <>
            {(mode === ContextMode.Edit || debug) && (
                <button
                    {...addEditAttributes(propertyName)}
                    className={styles['button']}
                >
                    Edit property: {propertyName}
                </button>
            )}
        </>
    );
};

export default memo(EpiserverProperty);
