import { ContextMode } from '@episerver/content-delivery';
import image from 'public/imageExample.jpg';

import HeroProps from './Hero.props';

const mockdata: HeroProps = {
    title: 'Lorem ipsum',
    subtitle: 'Dolor ist',
    heroimage: image,
    mode: ContextMode.Default,
};

export default mockdata;
