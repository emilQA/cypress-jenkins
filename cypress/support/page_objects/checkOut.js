class CheckOut {

    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }

    checkOutSubmitButton() {
        return cy.get(':nth-child(5) > :nth-child(5) > .btn');
    }

    checkOutCountryInput() {
        return cy.get('#country');
    }

    checkOutPurchaseButton() {
        return cy.get('form.ng-untouched > .btn');
    }

    checkOutSelectedCountry() {
        return cy.get('.suggestions > ul > li > a');
    }

    checkOutSelectBox() {
        return cy.get('#checkbox2')
    }

    checkOutSuccess() {
        return cy.get('.alert-success');
    }

    checkOutPrice() {
        return cy.get('tr td:nth-child(4) strong');
    }

    checkOutTotalSum() {
        return cy.get('.text-right>h3>strong');
    }
}


export default CheckOut;