import { ContextMode } from '@episerver/content-delivery';

import ButtonProps from './Button.props';

const link: ButtonProps = {
    text: 'lorem ipsum',
    url: '/',
    mode: ContextMode.Default,
};

const button: ButtonProps = {
    text: 'lorem ipsum',
    onClick: () => alert('you have clicked'),
    mode: ContextMode.Default,
};

const mockdata = { link, button };
export default mockdata;
