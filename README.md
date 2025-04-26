Pré-requisitos
  Node.js (v18 ou superior)
  npm ou yarn
1.Clone o repositório
2. Instale as dependências (npm install  ou yarn install)
3.Configure a base de dados (O projeto utiliza SQLite. O ficheiro da base de dados será criado automaticamente)
4. Gere o cliente Prisma (npx prisma generate)
5. Execute as migrações (npx prisma migrate dev --name init)
6. Inicie o servidor de desenvolvimento (npm run dev)
O projeto ficará disponível em http://localhost:3000

Tecnologia | Motivo da Escolha
NestJS | Estrutura modular e escalável, facilita a organização de projetos de API REST robustos.
Prisma ORM | ORM moderno, com suporte total a TypeScript. Simplifica o acesso à base de dados com consultas seguras e de alta performance.
SQLite | Base de dados leve e fácil de configurar. Ideal para ambiente de desenvolvimento e testes rápidos sem necessidade de servidor de base de dados.
TypeScript | Tipagem estática que aumenta a segurança do código e a produtividade durante o desenvolvimento.
