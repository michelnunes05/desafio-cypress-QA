Cypress.Commands.add('login', (userType) => {
  cy.fixture('usuarios').then((usuarios) => {
    const user = usuarios[userType]
    cy.visit('minha-conta')
    cy.get('#username').type(user.email)
    cy.get('#password').type(user.password)
    cy.get('.woocommerce-form > .button').click()
  })

Cypress.Commands.add('validateErrorMessage', (message) => {
  cy.get('.woocommerce-error')
    .should('be.visible')
    .and('contain', message)
})  
})