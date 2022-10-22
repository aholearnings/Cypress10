///<reference types = "cypress"/>

describe('basic cypress commands', { tags: ['smoke', 'regression'] }, () => {

    it('launch application', () => {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("[name='username']").type('Admin')
        cy.get("[name='password']").type('admin123')
        cy.get("[type='submit']").click()
        cy.get('.oxd-userdropdown-name').should('be.visible').click()
        cy.get('.oxd-dropdown-menu li').last().contains('Logout').log('login is successful')

    })

});