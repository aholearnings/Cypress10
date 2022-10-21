class Test_Auto_Practice {

    clickOnTestAutomationNavLink() {
        cy.get('.nav-link').eq(2).click()
    }

    validateAutomationPracticeHeader() {
        cy.get('.jumbotron h1').contains('Test automation practice form')
    }

    enterUserName(userName) {
        cy.get('#name').type(userName)
    }

    enterMobileNumber(mobileNum) {
        cy.get("input[placeholder='Enter your mobile phone']").click().type(mobileNum)
    }

    enterEmail(emailAddress) {
        cy.get("input[type='email']").click().type(emailAddress)
    }

    enterPassword() {
        cy.get('#password').click().type('Test@1234')
    }

    enterAddress(locationAddress) {
        cy.get('#address').type(locationAddress)
    }

    clickOnSubmitButton() {
        return cy.get('.btn-primary')
    }

}

export default Test_Auto_Practice;