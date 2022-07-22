/// <reference types="cypress" />
describe('It should ', function () {
    it('should visit the website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then(a => {
            const hrefText = a.prop('href');
            cy.log(hrefText);
            // cy.visit(url)//will not work
        })
    });

});
