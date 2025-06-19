// ***********************************************
// Comandos customizados para reutilização
// ***********************************************

// Comando para login
Cypress.Commands.add('login', (email, senha) => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
  })
  
  // Comando para adicionar produto ao carrinho
  Cypress.Commands.add('adicionarProdutoCarrinho', (nomeProduto) => {
    cy.contains('.product-block', nomeProduto)
      .find('.button-variable-item')
      .first()
      .click()
    cy.contains('.product-block', nomeProduto)
      .find('.single_add_to_cart_button')
      .click()
  })
  
  // Comando para ir ao carrinho
  Cypress.Commands.add('irParaCarrinho', () => {
    cy.get('.dropdown-toggle > .mini-cart-items').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
  })
  
  // Comando para limpar carrinho
  Cypress.Commands.add('limparCarrinho', () => {
    cy.get('body').then($body => {
      if ($body.find('.cart-empty').length === 0) {
        cy.get('.remove').each($el => {
          cy.wrap($el).click()
        })
      }
    })
  })
  
  // Comando para buscar produto
  Cypress.Commands.add('buscarProduto', (nomeProduto) => {
    cy.get('.search-field').type(nomeProduto)
    cy.get('.search-submit').click()
  })