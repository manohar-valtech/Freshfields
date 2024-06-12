import { ContextMode } from '@episerver/content-delivery';
import { ReactElement, memo } from 'react';

import Form from '@/components/Form';

import FormContainerBlockProps from './FormContainerBlock.props';

import styles from './FormContainerBlock.module.scss';

const FormContainerBlock = ({
    content: {
        title,
        description,
        elementsArea,
        confirmationMessage,
        resetConfirmationMessage,
        submitSuccessMessage,
        showSummarizedData,
        contentLink: { guidValue },
        language,
    },
    mode,
}: FormContainerBlockProps): ReactElement => (
    <div className={styles.container}>
        {(mode == ContextMode.Edit || title) && (
            <h2 className={styles.title}>{title}</h2>
        )}
        {(mode == ContextMode.Edit || description) && (
            <p className={styles.description}>{description}</p>
        )}

        <Form
            id={guidValue}
            elementsArea={elementsArea}
            confirmationMessage={confirmationMessage}
            resetConfirmationMessage={resetConfirmationMessage}
            submitSuccessMessage={submitSuccessMessage}
            showSummarizedData={showSummarizedData}
            mode={mode}
            action={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${language.name}/api/forms/${guidValue}`}
        />
    </div>
);

export default memo(FormContainerBlock);
