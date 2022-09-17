///<reference types = "cypress"/>

describe('basics1', () => {

    it('test basics', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        // cy.wait(5000)
        cy.title().should('include', 'Testautomation practice page').then( () =>  {

            console.log("Hello")

        });

    });

    it('verify button text', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get("[type='submit']").first().then( ($btn) => {
            const btnName = $btn.text()
            cy.log(btnName)    
            expect(btnName).to.be.equals('Search') 
            expect(btnName).to.be.equal('Search') 
            expect(btnName).to.be.eq('Search') 
            expect(btnName).contain('Search') 
            expect(btnName).include('Search') 
        });

    });


    it('verify links length', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.nav-link').then( ($linkscount) => {
            const lnkscount = $linkscount.length
            cy.log(lnkscount)    
            expect(lnkscount).to.be.equal(6)
            expect(lnkscount).to.be.not.equal(7)           
        });

    });

   
            

    /* Using .then() callback functions to access the previous command values 
    Cypress .then() is similar to native Promises 
    You can continue to nested Cypress commands
    */
});