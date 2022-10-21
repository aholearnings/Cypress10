/// <reference types = 'cypress'/>

import Home_Screen_PO from "../../support/pageobjects/home-Screen.cy";
import Test_Auto_Practice from "../../support/pageobjects/test-auto-practice.cy";

describe('Test Automation Practice Validation - TestCase1', ()=> {

    const home_Screen_PO = new Home_Screen_PO;
    const test_Auto_Practice = new Test_Auto_Practice;

    it("Launch URL", ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/home')
    });

    it('Verify whether application is launched or not', ()=> {
        // cy.get('.jumbotron h1').should('contain.text','Test Automation')
        home_Screen_PO.verifyApplicationURLLaunchedorNot();
    });

    it('Click on Test Automation Practice Nav link', ()=> {
        // cy.get('.nav-link').eq(2).click()
        test_Auto_Practice.clickOnTestAutomationNavLink()
    });

    it('Validate Automation Practice Header', () => {
        // cy.get('.jumbotron h1').contains('Test automation practice form')
        test_Auto_Practice.validateAutomationPracticeHeader();
    });

    it('Enter UserName', ()=> {
        // cy.get('#name').type('Cypress')
        test_Auto_Practice.enterUserName('Selenium');
    });

    it('Enter Mobile Number', ()=> {
        // cy.get("input[placeholder='Enter your mobile phone']").click().type('1234567890')
        test_Auto_Practice.enterMobileNumber('9900990099')
    });

    it('Enter Email Address', ()=> {
        // cy.get("input[type='email']").click().type('aho.learnings@gmail.com')
        test_Auto_Practice.enterEmail('seleniumtest@yahoo.com')
    });

    it('Enter Password', ()=> {
        // cy.get('#password').click().type('Test@1234')
        test_Auto_Practice.enterPassword()
    });

    it('Enter Address', ()=> {
        // cy.get('#address').type('Bangalore')
        test_Auto_Practice.enterAddress('Bangalore')
    });

    it('Click on the Submit Button', ()=> {
        // cy.get('.btn-primary').click()
        test_Auto_Practice.clickOnSubmitButton().click()
    })
});