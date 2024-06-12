import { FunctionComponent, ReactElement, memo } from 'react';

import EpiContent from '@/types/EpiContent';
import getComponentTypeForContent from '@/utils/getComponentTypeForContent';

import EpiserverGenericBlock from '../EpiserverGenericBlock';
import BlockComponentSelectorProps from './BlockComponentSelector.props';

const BlockComponentSelector = ({
    content,
    mode,
    previewWrapper = false,
    ...props
}: BlockComponentSelectorProps): ReactElement => {
    if (content) {
        const BlockComponent = getComponentTypeForContent(
            content,
            mode,
            previewWrapper
        ) as FunctionComponent<EpiContent>;

        if (BlockComponent) {
            return <BlockComponent content={content} mode={mode} {...props} />;
        }
    }

    if (content) return <EpiserverGenericBlock content={content} />;

    return <></>;
};

export default memo(BlockComponentSelector);
