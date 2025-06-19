describe('Funcionalidade: Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.login('valido')
    cy.url().should('include', '/minha-conta')
    cy.get('.page-title').should('contain', 'Minha conta')
  })

  it('Não deve logar com email inválido', () => {
    cy.login('invalido_email')
    cy.validateErrorMessage('Endereço de e-mail desconhecido')
  })

  it('Não deve logar com senha inválida', () => {
    cy.login('invalido_senha')
    cy.validateErrorMessage('Senha fornecida inválida para o e-mail')
  })

  it('Deve mostrar erro ao tentar login sem credenciais', () => {
    cy.login('em_branco')
    cy.validateErrorMessage('O nome de usuário é obrigatório')
  })
})