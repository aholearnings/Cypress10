

///<reference types = "cypress"/>

describe('Handling tabs', () => {

    it('Cypress Tab', () => {

        cy.getCookies()
        

        const serverUrl = "http://www.supplyhouse.com/resources/videos"

        cy.visit(serverUrl)

        
        // cy.request('${serverUrl}')
    })
})
