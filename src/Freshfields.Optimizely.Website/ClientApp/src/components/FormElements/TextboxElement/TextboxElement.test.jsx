import React from 'react';
import { useForm } from 'react-hook-form';

import TextboxElement from '.';
import mockdata from './TextboxElement.mock';

const Default = () => {
    return <TextboxElement {...mockdata.default} control={useForm().control} />;
};

const Number = () => {
    return <TextboxElement {...mockdata.number} control={useForm().control} />;
};

const Disabled = () => {
    return (
        <TextboxElement {...mockdata.disabled} control={useForm().control} />
    );
};

describe('<TextboxElement Default>', () => {
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

describe('<TextboxElement Number>', () => {
    beforeEach(() => {
        cy.mount(<Number />);
    });

    describe('Renders', () => {
        it('Is in document', () => {
            cy.findByRole('textbox').should('be.visible');
        });
        it('has the correct attribute', () => {
            cy.findByRole('textbox')
                .should('have.attr', 'type', 'text')
                .should('have.attr', 'inputMode', 'numeric');
        });
    });
    describe('Handles input', () => {
        it('Can handle valid input', () => {
            cy.findByRole('textbox').type('070123456');
            cy.findByRole('textbox').should(
                'have.attr',
                'aria-invalid',
                'false'
            );
        });
    });
});

describe('<TextboxElement Disabled>', () => {
    beforeEach(() => {
        cy.mount(<Disabled />);
    });

    describe('Renders', () => {
        it('Is in document', () => {
            cy.findByRole('textbox').should('be.visible');
        });

        it('is disabled', () => {
            cy.findByRole('textbox').should('be.disabled');
        });
    });
});
