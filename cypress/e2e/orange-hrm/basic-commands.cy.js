///<reference types = "cypress"/>

describe('basic cypress commands', { tags: ['smoke', 'regression'] }, () => {

    it('launch application', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("[name='username']").type('Admin')
        cy.get("[name='password']").type('admin123')
        cy.get("[type='submit']").click()
    })

});