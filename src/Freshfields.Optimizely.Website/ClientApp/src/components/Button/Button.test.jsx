import React from 'react';

import Button from './';
import mockdata from './Button.mock';

describe('<Button> as link', () => {
    it('has a valid text', () => {
        cy.mount(<Button {...mockdata.link} url="https://www.google.com" />);
        cy.get('a').should('contains.text', mockdata.link.text || '');
    });

    it('should have a valid href attribute', () => {
        cy.mount(<Button {...mockdata.link} url="https://www.google.com" />);
        cy.get('a').should('have.attr', 'href', 'https://www.google.com');
    });
});

describe('<Button> as button', () => {
    it('mounts', () => {
        cy.mount(<Button {...mockdata.button} />);
    });

    it('has a valid text', () => {
        cy.mount(<Button {...mockdata.button} />);
        cy.get('button').should('contains.text', mockdata.button.text || '');
    });

    it('calls OnClick when button is clicked', () => {
        const onClickSpy = cy.spy().as('onClickSpy');

        cy.mount(<Button {...mockdata.button} onClick={onClickSpy} />);
        cy.get('button').click();
        cy.get('@onClickSpy').should('have.been.called');
    });

    it('calls OnKeyDown when key is pressed', () => {
        const onKeyDownSpy = cy.spy().as('onKeyDownSpy');

        cy.mount(<Button {...mockdata.button} onKeyDown={onKeyDownSpy} />);
        cy.get('button').type('{enter}');
        cy.get('@onKeyDownSpy').should('have.been.called');
    });
});

describe('<Button disabled>', () => {
    it('has a valid text', () => {
        cy.mount(<Button {...mockdata.button} disabled={true} />);
        cy.get('button').should('contains.text', mockdata.button.text || '');
    });

    it('should not have a href', () => {
        cy.mount(<Button {...mockdata.button} disabled={true} />);
        cy.get('button').should('not.have.attr', 'href');
    });

    it('should be disabled', () => {
        cy.mount(<Button {...mockdata.button} disabled={true} />);
        cy.get('button').should('be.disabled');
    });

    it('should not have a tabindex', () => {
        cy.mount(<Button {...mockdata.button} disabled={true} />);
        cy.get('button').should('have.attr', 'tabindex', '-1');
    });
});
