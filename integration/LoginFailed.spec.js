// LoginFailed.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe ('loginFailed', function(){
    it('loginFailed', function(){

        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('input[id=username]').type('1941720011');
        cy.get('input[id=password]').type('Ganteng22');
        cy.get('button')
        cy.contains("Login")
        .click()
    })
})