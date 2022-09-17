///<reference types = "cypress"/>

describe('basics1', () => {

    it('test basics', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        // cy.title().should('include', 'Testautomation practice page')
        // cy.title().should('contain', 'Testautomation practice page')
        // cy.title().should('eq', '- Testautomation practice page'.trim())
        cy.title().should('eq', ' - Testautomation practice page'.trim())

        cy.get('.nav-item').should('have.length', '6')

        cy.get('.jumbotron h1').should('have.text', ' Test automation practice form'.trim())
        // cy.get('.jumbotron h1').should('exist')
        // cy.get('.jumbotron h1')
        cy.get(".form-check-label [type='checkbox']").first().should('be.enabled').check()

        // cy.scrollTo(0,2000)
        // cy.scrollTo('bottom')
        // cy.get('.input-group-text').scrollIntoView()

        // cy.get('select').select(3)
        // cy.get('select').select('Greece', {timeout : 3000}).should('have.value','4')

        // cy.get('select').should('have.value', 'Select option')
        // cy.get('select').select(2).should('have.value', '2')
        cy.get('select').select('Turkey').should('have.value', 3)

        cy.get(".form-group [type='text']").first().type('Aho', {delay:2000})


        // cy.get("[type='submit']").first().click()

        cy.get('.nav-item').contains('Home').trigger('click')

        cy.get('.nav-item').contains('Login').click({force:true})
        
        

    });

    // - Testautomation practice page

});