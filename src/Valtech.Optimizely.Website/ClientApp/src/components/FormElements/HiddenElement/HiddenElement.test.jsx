import React from 'react';
import { useForm } from 'react-hook-form';

import HiddenElement from '.';
import mockdata from './HiddenElement.mock';

const TestComponent = () => {
    return <HiddenElement {...mockdata} control={useForm().control} />;
};

describe('<HiddenElement>', () => {
    beforeEach(() => {
        cy.mount(<TestComponent />);
    });

    describe('Renders the email HiddenElement', () => {
        it('Is in document', () => {
            cy.get('input[type="hidden"]').should('be.hidden');
        });
        it('has the hidden attribute', () => {
            cy.get('input[type="hidden"]').should(
                'have.attr',
                'type',
                'hidden'
            );
        });
        it('has the correct value', () => {
            cy.get('input[type="hidden"]').should('have.value', 'test-value');
        });
    });
});
