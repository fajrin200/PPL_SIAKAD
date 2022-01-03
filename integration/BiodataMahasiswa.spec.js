// BiodataMahasiswa.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe ('BiodataMahasiswa', function(){
    it('BiodataMahasiswa', function(){

        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('input[id=username]').type('1941720010');
        cy.get('input[id=password]').type('Ganteng10');
        cy.get('button')
        cy.contains("Login")
        .click();
        cy.get('#gm_general > [href="javascript:;"]')
        .click();
        cy.get('#gm_general > .sub-menu > :nth-child(1) > .ajaxify')
        .click();
    })
})