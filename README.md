# Desafio Cypress QA - Automação E2E

## Funcionalidade Escolhida
**Fluxo de Carrinho de Compras** 

### Justificativa
O carrinho é a funcionalidade mais crítica de um e-commerce, sendo reutilizada em múltiplos cenários:
- Adicionar/remover produtos
- Alterar quantidades
- Aplicar cupons de desconto
- Finalizar compras
- Validar cálculos

## Cenários Automatizados

### Carrinho de Compras
- Adicionar produto ao carrinho
- Adicionar múltiplos produtos
- Alterar quantidade de produtos
- Remover produto específico
- Limpar carrinho completamente
- Finalizar compra completa

### Login
- Login com credenciais válidas
- Login com credenciais inválidas

### Produtos
- Buscar produto por nome
- Visualizar detalhes do produto

## Como Executar

### Pré-requisitos
- Node.js 16+
- NPM

### Instalação
\`\`\`bash
git clone <seu-repositorio>
cd desafio-cypress-QA
npm install
\`\`\`

### Executar Testes
\`\`\`bash
# Modo interativo
npm run cy:open

# Modo headless (todos os testes)
npm test

# Testes específicos
npm run test:carrinho
npm run test:login
\`\`\`

## Estrutura do Projeto
- `/cypress/e2e/` - Testes organizados por funcionalidade
- `/cypress/fixtures/` - Dados de teste
- `/cypress/support/` - Comandos customizados e page objects

## Relatórios
- Videos: `cypress/videos/`
- Screenshots: `cypress/screenshots/`