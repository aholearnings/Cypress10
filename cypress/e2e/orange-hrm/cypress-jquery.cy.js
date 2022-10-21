///<reference types = "cypress"/>

describe('cypress-jquery', () => {

    it('launch application', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        // cy.title().should('include', 'Testautomation practice page')
        // cy.title().should('contain', 'Testautomation practice page')
        // cy.title().should('eq', '- Testautomation practice page'.trim())
        cy.title().should('eq', ' - Testautomation practice page'.trim())

        cy.get(".nav-link").then((ele)=> {
            const elements = ele.text()
            cy.log(elements)
            expect(elements).contains('Practice')  
            
       
            
        })
    })

});