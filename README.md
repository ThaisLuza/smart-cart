🛒 SmartShop - E-commerce Intelligence
O SmartShop é uma plataforma de e-commerce moderna e responsiva desenvolvida para demonstrar práticas avançadas de desenvolvimento Front-end. O projeto foca em uma experiência de usuário fluida, gerenciamento de estado complexo e consumo de APIs assíncronas.

🚀 Funcionalidades
Catálogo Dinâmico: Listagem de produtos consumindo a Fake Store API.

Filtros por Categoria: Navegação inteligente para segmentar produtos em tempo real.

Carrinho de Compras: Sistema completo de adição, remoção e persistência de dados.

Páginas de Detalhes: Rotas dinâmicas para exibição individual de produtos.

UI/UX Premium: Interface construída com Shadcn/UI e Radix UI, garantindo acessibilidade e componentes de alta qualidade.

Feedback ao Usuário: Notificações de ações via Sonner (Toasts) e estados de carregamento.

🛠️ Stack Tecnológica
O projeto utiliza o que há de mais moderno no ecossistema React em 2026:

Core: React 18 + Vite

Linguagem: TypeScript (Tipagem estrita para maior segurança)

Estilização: Tailwind CSS + Tailwind Merge

Componentes: Radix UI + Shadcn/UI (Acessibilidade e consistência)

Gerenciamento de Dados: TanStack Query (React Query) para Cache e Fetching

Roteamento: React Router Dom v6

Ícones: Lucide React

Testes: Vitest + React Testing Library

⚙️ Decisões Técnicas (Destaque de Pleno)
Arquitetura de Componentes: Separação clara entre componentes de UI (átomos) e componentes de negócio (páginas).

Hooks Customizados: Implementação de useCart e useProducts para centralizar a lógica de negócio e manter os componentes limpos.

Performance: Uso de React.memo e estratégias de cache do React Query para evitar re-renderizações desnecessárias e chamadas de API repetitivas.

Acessibilidade: Utilização de primitivos do Radix UI para garantir que modais, dropdowns e menus sejam navegáveis via teclado e leitores de tela.

🔧 Como Rodar o Projeto
Clone o repositório:

Bash
git clone https://github.com/thais-luza/smart-cart.git
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev

Desenvolvido com ☕ por Thais Luza.
