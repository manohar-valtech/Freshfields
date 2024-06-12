import React from 'react';

import EpiserverLink from '.';
import mockdata from './EpiserverLink.mock';

describe('<EpiserverLink> as absolute', () => {
    it('has a valid text', () => {
        cy.mount(<EpiserverLink {...mockdata} url="https://www.google.com" />);
        cy.get('a').should('contains.text', mockdata.children || '');
    });

    it('should have a valid href attribute', () => {
        cy.mount(
            <EpiserverLink {...mockdata.link} url="https://www.google.com" />
        );
        cy.get('a').should('have.attr', 'href', 'https://www.google.com');
    });
});

describe('<EpiserverLink> as relative', () => {
    it('mounts', () => {
        cy.mount(<EpiserverLink {...mockdata} url="/news" />);
    });

    it('should have a valid href attribute', () => {
        cy.mount(<EpiserverLink {...mockdata} url="/news" />);
        cy.get('a').should('have.attr', 'href', '/news');
    });

    it('has a valid text', () => {
        cy.mount(<EpiserverLink {...mockdata} url="/news" />);
        cy.get('a').should('contains.text', mockdata.children);
    });
});
