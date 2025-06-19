class CarrinhoPage {
    // Elementos
    elements = {
      tabelaCarrinho: () => cy.get('.cart_item'),
      botaoRemover: () => cy.get('.remove'),
      inputQuantidade: () => cy.get('.qty'),
      botaoAtualizarCarrinho: () => cy.get('[name="update_cart"]'),
      totalCarrinho: () => cy.get('.cart-subtotal .amount'),
      botaoFinalizarCompra: () => cy.get('.checkout-button'),
      carrinhoVazio: () => cy.get('.cart-empty')
    }
  
    // Ações
    removerProduto(nomeProduto) {
      cy.contains('.cart_item', nomeProduto)
        .find('.remove')
        .click()
    }
  
    alterarQuantidade(nomeProduto, quantidade) {
      cy.contains('.cart_item', nomeProduto)
        .find('.qty')
        .clear()
        .type(quantidade)
      this.elements.botaoAtualizarCarrinho().click()
    }
  
    finalizarCompra() {
      this.elements.botaoFinalizarCompra().click()
    }
  
    verificarCarrinhoVazio() {
      this.elements.carrinhoVazio().should('be.visible')
    }
  }
  
  export default CarrinhoPage