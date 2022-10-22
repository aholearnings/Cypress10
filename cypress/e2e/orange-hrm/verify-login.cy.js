///<reference types = "cypress"/>

describe('Demo OrangeHRM Website', () => {

 

    it('Verify User is successfully logged in', () => {
        

        

        cy.get('.oxd-text').should('contain.text', 'PIM')

        cy.get('.oxd-userdropdown-name').click()
        // cy.get('.oxd-dropdown-menu li a').contains('Logout').click()
        // cy.get('.oxd-dropdown-menu li a:last-child').contains('Logout').click()
        cy.get('.oxd-dropdown-menu li a').last().click()
    
    })


});


