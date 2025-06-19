describe('Funcionalidade de Produtos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve buscar produto existente', () => {
    cy.get('.search-field').type('Abominable Hoodie')
    cy.get('.search-submit').click()
    
    cy.get('.product').should('be.visible')
    cy.get('.product-title').should('contain', 'Abominable Hoodie')
  })

  it('Deve exibir mensagem para produto inexistente', () => {
    cy.get('.search-field').type('produto_que_nao_existe_123')
    cy.get('.search-submit').click()
    
    cy.get('.woocommerce-info')
      .should('contain', 'Nenhum produto foi encontrado')
  })

  it('Deve filtrar produtos por categoria', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click() // Produtos
    
    // Aplicar filtro de preço
    cy.get('.widget_price_filter').should('be.visible')
    cy.get('.price_slider_amount .button').click()
    
    cy.get('.products .product').should('have.length.greaterThan', 0)
  })
})