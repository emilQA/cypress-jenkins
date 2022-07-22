// 1st install package
// npm install -D cypress-iframe
/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('It should ', function () {
    it('should visit the website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });
    it('should switch focus to iframe', function () {
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.iframe().find("h1[class*='pricing-title']").should('have.length' , 2)
    });

});
