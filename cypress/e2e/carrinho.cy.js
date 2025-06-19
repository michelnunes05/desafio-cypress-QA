/// <reference types="cypress" />

describe('Carrinho - Adicionar Produtos', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Deve adicionar produto ao carrinho com sucesso', () => {
      // Buscar por um produto
      cy.get('.search-field').type('Abominable Hoodie')
      cy.get('.search-submit').click()
      
      // Selecionar tamanho e cor
      cy.get('.button-variable-item-XS').click()
      cy.get('.button-variable-item-Blue').click()
      
      // Adicionar ao carrinho
      cy.get('.single_add_to_cart_button').click()
      
      // Verificar se foi adicionado
      cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
      
      // Verificar contador do carrinho
      cy.get('.mini-cart-items').should('contain', '1')
    })
  
    it('Deve adicionar múltiplos produtos ao carrinho', () => {
      // Adicionar primeiro produto
      cy.adicionarProdutoCarrinho('Abominable Hoodie')
      
      // Voltar para página inicial
      cy.visit('/')
      
      // Adicionar segundo produto
      cy.adicionarProdutoCarrinho('Aero Daily Fitness Tee')
      
      // Verificar contador
      cy.get('.mini-cart-items').should('contain', '2')
    })
  })