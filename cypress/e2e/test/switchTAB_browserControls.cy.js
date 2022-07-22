/// <reference types="cypress" />
describe('It should click to element and switch tab', function () {
    it('should visit the website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });
    it('should remove target attrb. then click to button and open website in same page', function () {
        cy.get('#opentab').invoke('removeAttr' , 'target').click();
    });
    it('should navigate us to previous page using back button(browser navigation button)', function () {
        cy.go('back');
        cy.url().should('equal','https://rahulshettyacademy.com/AutomationPractice/')
    });
});
