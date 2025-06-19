# Desafio Cypress QA - Automação E2E

## Funcionalidade Escolhida: **Fluxo de Carrinho de Compras**

### Justificativa
O carrinho foi escolhido por ser:
- A funcionalidade central de qualquer e-commerce
- Reutilizável em múltiplos cenários (70% dos fluxos dependem dele)
- Crítico para conversão de vendas
- Complexo com diversas variações (quantidades, descontos, remoções)

## Cenários Automatizados

### Carrinho de Compras
1. **Adicionar produto único ao carrinho**  
   - Validação: Item aparece no carrinho com preço correto
2. **Adicionar múltiplos produtos**  
   - Validação: Soma de valores e quantidade total
3. **Alterar quantidade de produtos**  
   - Validação: Atualização em tempo real do subtotal
4. **Remover produto específico**  
   - Validação: Item removido e recálculo automático
5. **Limpar carrinho completamente**  
   - Validação: Carrinho vazio com mensagem apropriada
6. **Finalizar compra completa**  
   - Validação: Fluxo completo até confirmação de pedido

### Login
7. **Login com credenciais válidas**  
   - Validação: Redirecionamento para área logada
8. **Login com credenciais inválidas**  
   - Validação: Mensagem de erro específica

### Produtos
9. **Buscar produto por nome exato**  
   - Validação: Resultado único e correto
10. **Visualizar detalhes do produto**  
    - Validação: Informações completas e imagens

## Como Executar

### Pré-requisitos
- Node.js 16+
- npm 8+

### Instalação
```bash
git clone https://github.com/michelnunes05/desafio-cypress-QA.git
cd desafio-cypress-QA
npm install