#cria a imagem do node
FROM node:18

# Diretório do projeto
WORKDIR /usr/src/app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todos os ficheiros para dentro do container
COPY . .

# Gera o Prisma Client
RUN npx prisma generate

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "run", "dev"]