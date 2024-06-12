import { ContextMode } from '@episerver/content-delivery';
import image from 'public/imageExample.jpg';

import CardProps from './Card.props';

const mockdata: CardProps = {
    name: 'Card Name',
    image: image,
    url: 'https://www.google.com',
    mode: ContextMode.Default,
};

export default mockdata;
