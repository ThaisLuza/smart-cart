# Smart Cart 🛒

Aplicação web moderna de carrinho de compras para e-commerce, desenvolvida com as melhores práticas de desenvolvimento frontend.

## 📋 Sobre o Projeto

Smart Cart é uma solução completa de carrinho de compras que oferece uma experiência fluida e responsiva para usuários. O projeto inclui funcionalidades como:

- Listagem de produtos com filtros por categoria
- Visualização detalhada de produtos com galeria de imagens
- Carrinho de compras interativo com persistência local
- Interface responsiva que se adapta a todos os dispositivos
- Carregamento otimizado de imagens com lazy loading
- Animações e transições suaves para melhor UX

## 🚀 Tecnologias Utilizadas

### Core
- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápida e moderna

### Estilização
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes acessíveis e customizáveis

### Gerenciamento de Estado
- **React Hooks** - useState, useEffect, useContext para gerenciamento local
- **LocalStorage** - Persistência do carrinho

### Outras Ferramentas
- **React Router** - Navegação entre páginas
- **ESLint** - Linting e qualidade de código
- **Vitest** - Framework de testes

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para rodar o projeto

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/smart-cart.git
cd smart-cart
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
```

O projeto estará disponível em [`https://smart-cart-taupe.vercel.app/)`

## 🏗️ Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para visualizar a build localmente:
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/          # Páginas da aplicação
├── hooks/          # Custom hooks
├── types/          # Definições TypeScript
├── lib/            # Utilitários
└── assets/         # Imagens e recursos estáticos
```

## 🧪 Testes

Execute os testes com:
```bash
npm run test
```

## 🙏 Agradecimentos

- [shadcn](https://ui.shadcn.com/) pela incrível biblioteca de componentes
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS
- [Vite](https://vitejs.dev/) pela ferramenta de build extremamente rápida
- Comunidade React por todo o suporte e recursos

---

Desenvolvido com ❤️ usando React + TypeScript
