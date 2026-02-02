# 🛒 SmartShop - E-commerce Intelligence

> Uma plataforma de e-commerce moderna e responsiva desenvolvida para demonstrar práticas avançadas de desenvolvimento Front-end.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📋 Sobre o Projeto

O **SmartShop** é uma aplicação completa de e-commerce que combina design moderno, performance otimizada e as melhores práticas de desenvolvimento front-end. O projeto foca em uma experiência de usuário fluida, gerenciamento de estado complexo e consumo eficiente de APIs assíncronas.

### ✨ Destaques

- 🎨 **Interface Premium** - Design moderno e responsivo
- ⚡ **Performance Otimizada** - Cache inteligente e carregamento eficiente
- 🔒 **Type-Safe** - TypeScript com tipagem estrita
- 📱 **Mobile First** - Responsivo em todos os dispositivos

---

## 🚀 Funcionalidades

- ✅ **Catálogo Dinâmico** - Listagem de produtos consumindo a Fake Store API
- ✅ **Filtros por Categoria** - Navegação inteligente para segmentar produtos em tempo real
- ✅ **Carrinho de Compras** - Sistema completo de adição, remoção e persistência de dados
- ✅ **Páginas de Detalhes** - Rotas dinâmicas para exibição individual de produtos
- ✅ **UI/UX Premium** - Interface construída com Shadcn/UI e Radix UI
- ✅ **Feedback ao Usuário** - Notificações de ações via Sonner (Toasts) e estados de carregamento
- ✅ **Busca e Ordenação** - Sistema de busca e ordenação de produtos

---

## 🛠️ Stack Tecnológica

O projeto utiliza o que há de mais moderno no ecossistema React:

### Core
- **React 18** - Biblioteca principal
- **Vite** - Build tool e dev server de alta performance
- **TypeScript** - Tipagem estática para maior segurança e produtividade

### Estilização
- **Tailwind CSS** - Framework CSS utility-first
- **Tailwind Merge** - Otimização de classes do Tailwind
- **Class Variance Authority** - Gerenciamento de variantes de componentes

### Componentes e UI
- **Radix UI** - Primitivos de UI acessíveis e não estilizados
- **Shadcn/UI** - Componentes reutilizáveis e personalizáveis
- **Lucide React** - Ícones modernos e consistentes

### Gerenciamento de Dados
- **TanStack Query (React Query)** - Gerenciamento de estado assíncrono, cache e sincronização
- **React Router Dom v6** - Roteamento declarativo

### Notificações
- **Sonner** - Sistema de toasts elegante e performático

### Qualidade de Código
- **ESLint** - Linting e padronização de código
- **Vitest** - Framework de testes unitários
- **React Testing Library** - Testes de componentes

---

## ⚙️ Decisões Técnicas

### Arquitetura

```
src/
├── components/        # Componentes reutilizáveis
│   ├── ui/           # Componentes base (Shadcn/UI)
│   └── ...           # Componentes de negócio
├── hooks/            # Custom hooks
│   ├── useCart.ts
│   └── useProducts.ts
├── lib/              # Utilitários e configurações
├── pages/            # Páginas da aplicação
├── services/         # Camada de API
└── types/            # Definições de tipos TypeScript
```

### Highlights de Desenvolvimento

1. **Separação de Responsabilidades**
   - Componentes de UI puros e reutilizáveis
   - Lógica de negócio isolada em custom hooks
   - Camada de serviços para comunicação com API

2. **Performance**
   - `React.memo` para evitar re-renderizações desnecessárias
   - Estratégias de cache do React Query
   - Lazy loading de rotas e componentes

3. **Acessibilidade**
   - Primitivos do Radix UI para navegação por teclado
   - ARIA labels e roles adequados
   - Foco visual e navegação semântica

4. **Type Safety**
   - Tipagem estrita em todo o código
   - Interfaces bem definidas para API
   - Validação em tempo de desenvolvimento

5. **Estado e Cache**
   - React Query para gerenciamento de estado do servidor
   - Local Storage para persistência do carrinho
   - Sincronização automática de dados

---

## 🔧 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/thais-luza/smart-cart.git
cd smart-cart
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria a build de produção
npm run preview      # Preview da build de produção
npm run lint         # Executa o linter
npm run test         # Executa os testes
```

---

## 📦 Build e Deploy

Para gerar a build de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/` e podem ser servidos por qualquer servidor estático.

### Deploy Sugerido

- **Vercel** - Deploy automático via Git
- **Netlify** - CI/CD integrado
- **GitHub Pages** - Hospedagem gratuita

---

## 🎯 Roadmap

- [ ] Implementar autenticação de usuários
- [ ] Adicionar sistema de favoritos
- [ ] Integrar gateway de pagamento
- [ ] Implementar histórico de pedidos
- [ ] Adicionar suporte a múltiplos idiomas (i18n)
- [ ] Implementar modo escuro
- [ ] Adicionar testes E2E com Playwright

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👩‍💻 Autora

**Thais Luza**

- GitHub: [@thais-luza](https://github.com/thais-luza)

---

## 🙏 Agradecimentos

- [Fake Store API](https://fakestoreapi.com/) - API utilizada para dados de produtos
- [Shadcn/UI](https://ui.shadcn.com/) - Sistema de componentes
- [Radix UI](https://www.radix-ui.com/) - Primitivos de UI acessíveis

---

<div align="center">
  Desenvolvido com ☕ e 💜 por Thais Luza
</div>
