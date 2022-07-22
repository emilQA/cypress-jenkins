/// <reference types="cypress" />
import HomePage from "../../support/page_objects/homePage";
import CheckOut from "../../support/page_objects/checkOut";

let itemsTotalsum = 0;

describe('It should ', function () {
    beforeEach(() => {
        cy.fixture('users').then(function (data) {
            this.user_data = data
        })
    })
    it('should visit the website', function () {
        const homePage = new HomePage();
        const checkOut = new CheckOut();
        cy.visit(Cypress.env('url'));
        homePage.homeNameInput().type(this.user_data[0].name);
        homePage.homeEmailInput().type(this.user_data[0].email);
        homePage.homeGenderInput().select(this.user_data[0].gender);
        homePage.homeTwoWayDataBindingInput().should('have.value', this.user_data[0].name)
        homePage.homeNameInput().should('have.attr', 'minlength', '2');
        homePage.homeDisabledInputRadio().should('be.disabled');
        homePage.shopTab().click();
        this.user_data[0].products.forEach(product => {
            cy.selectProduct(product)
        });
        checkOut.checkOutButton().click();
        checkOut.checkOutPrice().each(el => {
            let numb = Number(el.text().replace(/\D/g, ''));
            itemsTotalsum += numb;
        })
        checkOut.checkOutTotalSum().then((el) => {
            let totalSum = Number(el.text().replace(/\D/g, ''));
            expect(itemsTotalsum).to.equal(totalSum)
        })
        checkOut.checkOutSubmitButton().click();
        checkOut.checkOutCountryInput().type(this.user_data[0].address.country);
        checkOut.checkOutSelectedCountry().click()
        checkOut.checkOutSelectBox().click({force: true});
        checkOut.checkOutPurchaseButton().click();
        checkOut.checkOutSuccess().should('contain.text', 'Thank you! Your order will be delivered in next few weeks')

    });
});
