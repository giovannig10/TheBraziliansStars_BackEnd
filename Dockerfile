FROM node:22-alpine3.21

WORKDIR /app

# Copiar e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar TODOS os arquivos do projeto
COPY . .

# Gerar cliente Prisma
RUN npx prisma generate

# Criar diretório para SQLite e definir permissões
RUN mkdir -p /app/data && chmod 755 /app/data

EXPOSE 4002

# Comando simplificado - apenas push se o banco não existir
CMD ["sh", "-c", "if [ ! -f /app/data/database.db ]; then npx prisma db push; fi && npm run start"]