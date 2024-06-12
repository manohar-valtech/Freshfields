import React from 'react';
import { useForm } from 'react-hook-form';

import CaptchaElement from '.';
import mockdata from './CaptchaElement.mock';

const Default = () => {
    return <CaptchaElement {...mockdata.default} control={useForm().control} />;
};

describe('<CaptchaElement Default>', () => {
    beforeEach(() => {
        cy.mount(<Default />);
    });

    describe('Renders', () => {
        it('Is in document', () => {
            cy.findByRole('textbox').should('be.visible');
        });
        it('has the correct attribute', () => {
            cy.findByRole('textbox').should('have.attr', 'type', 'text');
        });
    });

    describe('Handles input', () => {
        it('Can handle valid input', () => {
            cy.findByRole('textbox').type('testing');
            cy.findByRole('textbox').should(
                'have.attr',
                'aria-invalid',
                'false'
            );
        });
    });

    describe('A11y', () => {
        it('should pass the audits', function () {
            cy.injectAxe();
            cy.checkA11y(null, {
                rules: {
                    'page-has-heading-one': { enabled: false },
                },
            });
        });
    });
});
