# Imagem base do Node.js
FROM node:18-alpine

# Diretório de trabalho no container
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código fonte
COPY . .

# Gerar o Prisma Client para interação com o banco de dados
RUN npx prisma generate

# Expor a porta que o servidor Node.js usa
EXPOSE 4000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]