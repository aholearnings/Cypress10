class Home_Screen_PO {

    verifyApplicationURLLaunchedorNot() {
        cy.get('.jumbotron h1').should('contain.text','Test Automation')
    }

    verifySeleniumHeaderText() {
        cy.get('.row h2').first().should('have.text','Selenium Webdriver')
    }

    clickOnReadMeButton() {
        cy.get('.btn-primary').click()
    }

}

export default Home_Screen_PO;