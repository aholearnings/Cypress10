///<reference types = "cypress"/>

describe('Alerts', () => {

    it('Handling Alerts', () => {
        cy.visit('https://demoqa.com/alertsWindows')
        cy.get('#item-1 span.text').contains('Alerts').click()

        cy.get('#alertButton').click({force : true})
    
    })

});

