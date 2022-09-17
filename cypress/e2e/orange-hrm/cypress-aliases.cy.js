///<reference types = "cypress"/>

describe('Cypress - Aliases',{ tags: ['smoke', 'regression'] }, () => {

    it('cypress aliases basics', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        // cy.title().should('include', 'Testautomation practice page')
        // cy.title().should('contain', 'Testautomation practice page')
        // cy.title().should('eq', '- Testautomation practice page'.trim())
        cy.title().should('eq', ' - Testautomation practice page'.trim())

        cy.get("[type='text']").as('textBoxes')
        cy.get('@textBoxes').first().type('Hi', {delay:1000})
        cy.get('@textBoxes').eq(1).type('Aho', {delay:1000})
        cy.get('@textBoxes').eq(2).type('cypress', {delay:1000})

        // cy.go('back')


    });


    it('and chainer in cypress', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        // cy.title().should('include', 'Testautomation practice page')
        // cy.title().should('contain', 'Testautomation practice page')
        // cy.title().should('eq', '- Testautomation practice page'.trim())
        cy.title().should('eq', ' - Testautomation practice page'.trim())

        cy.get('.display-3').should('have.text', 'Test automation practice form')
                            .and('have.attr', 'class')
        
        cy.get('.navbar-brand img').should('have.attr', 'alt')
                            .and('not.include', '#')

                            
});


it('its in cypress', () => {
    // Get a property's value on the previously yielded subject.
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    // cy.title().should('include', 'Testautomation practice page')
    // cy.title().should('contain', 'Testautomation practice page')
    // cy.title().should('eq', '- Testautomation practice page'.trim())
    cy.title().should('eq', ' - Testautomation practice page'.trim())

    cy.get('.nav-link').its('length').should('eq',6)


});

});
