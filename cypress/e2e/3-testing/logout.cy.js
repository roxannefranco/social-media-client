describe('Test logout', () => {
  it('can logout with logout button', () => {
    // first login in order to logout
    cy.visit('/')
    cy.wait(1000)
    cy.get('[data-bs-target="#loginModal"]').first().click({ force: true })
    cy.wait(500)
    cy.get('#loginEmail').type('roxannetests@stud.noroff.no')
    cy.get('#loginPassword').type('12345678')
    cy.get('#loginForm button.btn-success').first().click({ force: true })
    // logout
    cy.wait(3000)
    cy.get('[data-auth="logout"]').first().click({ force: true })
    cy.location('pathname').should('eq', '/')
  })
})
