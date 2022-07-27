/// <reference types="cypress" />
// import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";


import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/page_objects/homePage";
import CheckOut from "../../support/page_objects/checkOut";

const homePage = new HomePage();
const checkOut = new CheckOut();


Given('I open ecommerce page', () => {
    cy.visit(Cypress.env('url'));
})
When('I add items to card', function ()  {
    homePage.shopTab().click();
    this.user_data[0].products.forEach(product => {
        cy.selectProduct(product)
    });
    checkOut.checkOutButton().click();
})
And('Validate the total price', () => {
    checkOut.checkOutPrice().each(el => {
        let numb = Number(el.text().replace(/\D/g, ''));
        itemsTotalsum += numb;
    })
    checkOut.checkOutTotalSum().then((el) => {
        let totalSum = Number(el.text().replace(/\D/g, ''));
        expect(itemsTotalsum).to.equal(totalSum)
    })
    checkOut.checkOutSubmitButton().click();
})
Then('Select the country and verify thankyou message' , function (){
    checkOut.checkOutCountryInput().type(this.user_data[0].address.country);
    checkOut.checkOutSelectedCountry().click()
    checkOut.checkOutSelectBox().click({force: true});
    checkOut.checkOutPurchaseButton().click();
    checkOut.checkOutSuccess().should('contain.text', 'Thank you! Your order will be delivered in next few weeks')

})




















