describe('Funcionalidade do Carrinho', () => {
  beforeEach(() => {
    cy.visit('/produtos/')
  })

  it('Deve adicionar produto ao carrinho', () => {
    // Selecionar primeiro produto
    cy.get('.products .product').first().click()
    
    // Selecionar variações se necessário
    cy.get('.single_variation_wrap').then(($variation) => {
      if ($variation.find('.single_variation').length > 0) {
        cy.get('select[name="attribute_color"]').select(1)
        cy.get('select[name="attribute_size"]').select(1)
      }
    })
    
    // Adicionar ao carrinho
    cy.get('.single_add_to_cart_button').click()
    
    // Validar mensagem de sucesso
    cy.get('.woocommerce-message')
      .should('contain', 'foi adicionado no seu carrinho')
  })

  it('Deve remover produto do carrinho', () => {
    // Primeiro adicionar um produto
    cy.get('.products .product').first().click()
    cy.get('.single_add_to_cart_button').click()
    
    // Ir para o carrinho
    cy.get('.woocommerce-message .button').click()
    
    // Remover produto
    cy.get('.remove').click()
    
    // Validar carrinho vazio
    cy.get('.cart-empty')
      .should('contain', 'Seu carrinho está vazio')
  })

  it('Deve calcular total do carrinho corretamente', () => {
    // Adicionar produto específico
    cy.visit('/produtos/abominable-hoodie/')
    cy.get('select[name="attribute_color"]').select('Blue')
    cy.get('select[name="attribute_size"]').select('M')
    
    // Capturar preço do produto
    cy.get('.price .woocommerce-Price-amount').then(($price) => {
      const productPrice = $price.text()
      
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message .button').click()
      
      // Validar se o total está correto
      cy.get('.order-total .woocommerce-Price-amount')
        .should('contain', productPrice)
    })
  })
})