/// <reference types="cypress" />
describe('It should click on popups and alert boxes', function () {
    it('should visit the website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });
    it('should click on alert button', function () {
        cy.get('#alertbtn').click();
        //window:alert
        cy.on('window:alert', str => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })
    });
    it('should click on confirm button', function () {
        cy.get('[value="Confirm"]').click();
        cy.on('window:confirm', str => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })
    });
});
