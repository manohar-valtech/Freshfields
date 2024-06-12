import { ReactElement, memo } from 'react';

import BlockComponentSelector from '../BlockComponentSelector';
import EpiserverBlockProps from './EpiserverBlockProps';

const EpiserverBlock = ({
    content,
    mode,
    ...props
}: EpiserverBlockProps): ReactElement => (
    <BlockComponentSelector
        content={content.contentLink.expanded}
        mode={mode}
        {...props}
    ></BlockComponentSelector>
);

export default memo(EpiserverBlock);
