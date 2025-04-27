BACKEND
Pré-requisitos
  Node.js (v18 ou superior)
  npm ou yarn
  docker
1.Clone o repositório
2.entra na pasta backend
3. executa o comando no terminal docker compose up --build

O projeto ficará disponível em http://localhost:3000

Tecnologia | Motivo da Escolha
NestJS | Estrutura modular e escalável, facilita a organização de projetos de API REST robustos.
Prisma ORM | ORM moderno, com suporte total a TypeScript. Simplifica o acesso à base de dados com consultas seguras e de alta performance.
SQLite | Base de dados leve e fácil de configurar. Ideal para ambiente de desenvolvimento e testes rápidos sem necessidade de servidor de base de dados.
TypeScript | Tipagem estática que aumenta a segurança do código e a produtividade durante o desenvolvimento.



FRONTEND

Product CRUD
  Este projeto foi desenvolvido usando React, TypeScript, Vite, React Router, SASS e Axios.

Como Rodar o Projeto
  1. clone o repositório
  2.entra na pasta frontend
  3. executa o comando no terminal (docker compose up --build)

Estrutura do Projeto
  src/
├── api/
│   ├── axios.ts         # Configuração do Axios
│   └── routes.ts        # Rotas da API
├── components/
│   ├── ProductCard.tsx   # Card individual de produto
│   └── ProductSearchName.tsx # Filtro de busca
├── context/
│   └── CategoryContext.tsx # Contexto global de categorias
├── pages/
│   ├── ProductForm.tsx  # Página de formulário de produto
│   └── ProductList.tsx   # Página de listagem de produtos
├── routes/
│   └── AppRoutes.tsx     # Definição das rotas
├── styles/
│   └── main.scss         # Estilos principais
├── App.tsx
├── main.tsx
└── vite.config.ts

