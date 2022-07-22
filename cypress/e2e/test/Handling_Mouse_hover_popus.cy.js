/// <reference types="cypress" />
describe('It should ', function () {
    it('should visit the website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });
    it('should click on button to show invisible elements', function () {
        cy.get('div.mouse-hover-content').invoke('show');
        cy.get('a').contains('Top').click();
        cy.url().should('include' , '#top')
    });

    // OR
    // it('should click on button to show invisible elements', function () {
    //     // cy.get('div.mouse-hover-content').invoke('show');
    //     cy.get('a').contains('Top').click({force: true});  // {force:true} Forcing a click overrides the actionable checks Cypress applies and will automatically fire the events.
    //     cy.url().should('include' , '#top')
    // });
});
