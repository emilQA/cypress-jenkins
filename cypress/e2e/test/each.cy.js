/// <reference types="cypress" />
const arr = ['Engineer', 'Mechanic', 'Manager', 'Receptionist', 'Engineer', 'Postman', 'Businessman', 'Sportsman', 'Cricketer']

describe('It should ', function () {

    it('should visit the website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });
    it('should loop for table course names', function () {
        cy.get('tr td:nth-child(2)').each(($el, i) => {
            const text = $el.text();
            text.includes('interview call') ?
                cy.get('tr td:nth-child(2)').eq(i).next()
                    .then(price => {
                        const priceText = price.text();
                        expect(priceText).to.equal('0')
                    }) : '';
        })
    });
    it('should gdkhsagd', function () {
        cy.get('.right-align #product tr td:nth-child(2)').each(($el, i) => {
            const text = $el.text();
            // expect(text).to.equal(arr[i])
            if (text.includes('interview call')){
                cy.get('tr td:nth-child(2)').eq(i).next()
            }
        })
    });
});
