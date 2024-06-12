import type { Preview } from '@storybook/react';

import '../src/styles/global.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: ['Atoms', 'Molecules', 'Organisms'],
            },
        },
    },
};

export default preview;
