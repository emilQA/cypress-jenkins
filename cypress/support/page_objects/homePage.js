class HomePage {

    homeNameInput() {
        return cy.get("input[name='name']:nth-child(2)");
    }

    homeEmailInput() {
        return cy.get("input[name='email']")
    }

    homeGenderInput() {
        return cy.get("select[class='form-control']")
    }

    homeTwoWayDataBindingInput() {
        return cy.get('.ng-untouched')
    }

    homeDisabledInputRadio() {
        return cy.get('#inlineRadio3')
    }

    shopTab() {
        return cy.get(':nth-child(2) > .nav-link')
    }

}


export default HomePage;