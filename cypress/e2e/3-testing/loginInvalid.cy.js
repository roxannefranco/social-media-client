describe('Test login with invalid credentials for a error message', () => {
  it('cannot submit the login form with invalid credentials and is shown a message.', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('[data-bs-target="#loginModal"]').first().click({ force: true })
    cy.wait(500)
    cy.get('#loginEmail').type('roxannetests@stud.noroff.no')
    cy.get('#loginPassword').type('wrongpassword')
    cy.get('#loginForm button.btn-success').first().click({ force: true })
    // test if error message appears
    cy.on('window:alert', (text) => {
      expect(text).to.eq(
        'Either your username was not found or your password is incorrect'
      )
    })
  })
})
