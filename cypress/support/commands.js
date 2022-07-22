Cypress.Commands.add('selectProduct',(productName)=>{
    cy.get('h4.card-title a').each((el, i) => {
        if (el.text().includes(productName)) {
            cy.get('.card-footer button.btn').eq(i).click();
        }
    })
})



//
// Cypress.Commands.add('convertToNumbInner' , (str)=>{
//     Number(str.text().replace(/\D/g, ''));
// })
//
// Cypress.Commands.add('convertToNumb' , (str)=>{
//     let itemsTotalsum = 0;
//     cy.convertToNumb(str).then((strn)=>{
//         let numb = strn;
//         itemsTotalsum += numb;
//         expect(itemsTotalsum).to.equal(num)
//
//     })
// })









// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })















