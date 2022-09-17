///<reference types = "cypress"/>

describe('CSS Selectors', () => {

    it('CSS :first-child Selector', () => {
        cy.visit('https://www.amazon.in/')
        // cy.get('#nav-tools a:first-child').trigger('mouseover')
        // cy.get('#nav-tools a:last-child').trigger('mouseover')
        // cy.get('#nav-tools a:nth-child(2)').trigger('mouseover')
        cy.get('#nav-tools a:nth-last-child(3)').trigger('mouseover')

    });
    
});