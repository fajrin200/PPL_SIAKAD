// ChangePassword.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe ('ChangePassword', function(){
    it('ChangePassword', function(){

        cy.visit('http://siakad.polinema.ac.id/')
        cy.get('input[id=username]').type('1941720010');
        cy.get('input[id=password]').type('Ganteng10');
        cy.get('button')
        cy.contains("Login")
        .click()
        cy.get('.dropdown-user > .dropdown-toggle').click();
        cy.get('.dropdown-user > .dropdown-toggle').click();
        cy.contains(' Change Password ').click();
        cy.get('#old_password').type ('Ganteng20');
        cy.get('#password').type('Ganteng10');
        cy.get('#password_confirm').type('Ganteng10');
        cy.get('.green-meadow').click();
        cy.contains('Perubahan password berhasil').should('be.visible');
        cy.get('.dropdown-user > .dropdown-toggle').click();
        cy.get('.dropdown-user > .dropdown-toggle').click();
        cy.contains('Log Out').click();
        cy.get('input[id=username]').type('1941720010');
        cy.get('input[id=password]').type('Ganteng10');
        cy.get('button')
        cy.contains("Login")
        .click()
      
    })
})