'use client';

import { ReactElement, memo } from 'react';

import ParagraphTextElementProps from './ParagraphTextElementProps';

import styled from './ParagraphTextElement.module.scss';

const ParagraphTextElement = ({
    content: {
        contentLink: { guidValue },
        paragraphText,
    },
}: ParagraphTextElementProps): ReactElement => {
    return (
        <>
            <div
                id={guidValue}
                className={styled.text}
                dangerouslySetInnerHTML={{ __html: paragraphText || '' }}
            />
        </>
    );
};

export default memo(ParagraphTextElement);
