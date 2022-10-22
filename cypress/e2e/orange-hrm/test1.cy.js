///<reference types = "cypress"/>

describe('Handling tabs', () => {

    it('Cypress Tab', () => {
        

        cy.visit("https://www.amazon.in/")

        cy.get('#twotabsearchtextbox').click().type('laptops')

        cy.get('[value="Go"]').click()

        cy.get("[class='a-section a-spacing-small a-spacing-top-small'] h2 a").eq(0)
          .invoke('removeAttr','target')
          .click()

        cy.get('.selection').should('contain.text',"82KU017KIN")
    
    })

});

