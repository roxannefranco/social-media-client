describe('Test login with valid credentials', () => {
  it('can log in with the login form with valid credentials', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('[data-bs-target="#loginModal"]').first().click({ force: true })
    cy.wait(500)
    cy.get('#loginEmail').type('roxannetests@stud.noroff.no')
    cy.get('#loginPassword').type('12345678')
    cy.get('#loginForm button.btn-success').first().click({ force: true })
    cy.location('search').should('eq', '?view=profile&name=roxanne_franco')
  })
})
