/// <reference types="cypress" />
describe('clicking on checkboxes ', function () {
    it('should visit the website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });

    it('should open the webpage and click to elements', function () {
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        //OR
        // cy.get('input[type="checkbox"]').each(($el, i) => {
        //     cy.wrap($el).check().should('be.checked').and('have.value', `option${i + 1}`)
        // })
    });

    it('should click static(fixed) dropdowns', function () {
        cy.get('select').select('option1').should('have.value', 'option1');
        cy.get('select').select('option2').should('have.value', 'option2');
        cy.get('select').select('option3').should('have.value', 'option3');
    });

    // TASK
    it('should click static(fixed) dropdowns automatically', function () {
        cy.get('select').each(($el, i) => {
            cy.wrap($el).select(`option${i + 1}`).should('have.value', `option${i + 1}`);
        })
    });

    it('should click dynamic dropdowns', function () {
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each($el => {
            $el.text() === 'India' ? cy.wrap($el).click() : '';
        })
    });
    it('should verify textblock is visible or not', function () {
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible');

    });

    it('should check radio buttons are clickable', function () {
        cy.get('#radio-btn-example fieldset label input').each(($el, i) => {
            cy.wrap($el).click().should('be.checked');
        })
    });
});
