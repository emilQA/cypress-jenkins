/// <reference types="cypress" />
const url = 'https://rahulshettyacademy.com/seleniumPractise/#/'
const searchInput = '.search-keyword';
const searchButton = '.search-button';
const products = '.products'
const product = '.product'
//or-->  cy.get('.product').as('prdcts') // Aliasing as()
const productName = 'Carrot'


describe('Open website bla bla', () => {
    it('open website ', () => {
        cy.visit(url);
    });
    it('should type a word in searchbox and wait 2 seconds', function () {
        cy.get(searchInput).type('ca');
        cy.wait(2000);
    });
    it('should find product by name and click on it', function () {
        cy.get(products).find(product).each($el => {
            const vegText = $el.find('h4.product-name').text();
            vegText.includes(productName) ? cy.wrap($el).find('button').click() : '';
        })
    });
    it('should verify checkout process', function () {
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.get('.product-name').should('have.text', 'Carrot - 1 Kg');

    });
    it('should click Pleace Order button and verify button is pressed(next page opened)', function () {
        cy.get('button').contains('Place Order').click();
        cy.get('label').should('have.text', 'Choose Country');
    });
});