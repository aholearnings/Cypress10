/// <reference types="cypress"/>

import Home_Screen_PO from "../../support/pageobjects/home-Screen.cy";

describe('Home Page Validations', ()=> {

    const home_Screen_PO = new Home_Screen_PO;

    it('Launch Application URL', ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/home')
    });

    it('Verify whether application is launched or not', ()=> {
        // cy.get('.jumbotron h1').should('contain.text','Test Automation')
        home_Screen_PO.verifyApplicationURLLaunchedorNot();
    });

    it('Validate Selenium Webdriver Text', ()=> {
        // cy.get('.row h2').first().should('have.text','Selenium Webdriver')
        home_Screen_PO.verifySeleniumHeaderText();
    });

    it('Click on Read More button', ()=> {
        // cy.get('.btn-primary').click()
        home_Screen_PO.clickOnReadMeButton();
    });
})