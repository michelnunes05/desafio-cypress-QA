class HomePage {
    // Elementos
    elements = {
      barraBusca: () => cy.get('.search-field'),
      botaoBuscar: () => cy.get('.search-submit'),
      iconLogin: () => cy.get('.icon-user-unfollow'),
      menuCategorias: () => cy.get('.product-categories'),
      produtoCard: () => cy.get('.product-block')
    }
  
    // Ações
    buscarProduto(nome) {
      this.elements.barraBusca().type(nome)
      this.elements.botaoBuscar().click()
    }
  
    irParaLogin() {
      this.elements.iconLogin().click()
    }
  
    selecionarCategoria(categoria) {
      this.elements.menuCategorias().contains(categoria).click()
    }
  }
  
  export default HomePage