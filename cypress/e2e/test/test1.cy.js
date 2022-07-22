/// <reference types="cypress" />
const url = 'https://rahulshettyacademy.com/seleniumPractise/#/'
const searchInput = '.search-keyword';
const searchButton = '.search-button';
const products = '.products'
const product = '.product'
//or-->  cy.get('.product').as('prdcts') // Aliasing as()
const productName = 'Carrot'

//Assign element to a variable manually and use.
// 1. const incrementElem = cy.get(':nth-child(1) > .stepper-input > .increment').then(() => {})
// 2. incrementElem.click();

describe('Open website bla bla', () => {
    it('open website ', () => {
        cy.visit(url);
        cy.get(searchInput).type('ca');
        cy.wait(2000);
        // cy.get('.product:visible').should("have.length" , 4)  //:visible, getting only visible elements.
        cy.get(products).find(product).should('have.length', 4); //find child element of parent element.
        // cy.get(products).find(product).eq(2).contains('ADD TO CART').click();
        cy.get(products).find(product).each($el => {
            const vegText = $el.find('h4.product-name').text();
            // vegText.includes(productName) ? $el.find('button').click() : '';
            // Click method is not working because of it's promise.
            // For handling that , first use wrap() method on element ($el)
            // Yield the object passed into wrap(). If the object is a promise, yield its resolved value.
            // https://docs.cypress.io/api/commands/wrap#Syntax
            vegText.includes(productName) ? cy.wrap($el).find('button').click() : '';
        })

    });
});