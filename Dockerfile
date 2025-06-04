FROM node:22-alpine3.21

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código fonte
COPY . .

# Gerar cliente Prisma
RUN npx prisma generate

EXPOSE 4002

# Script de inicialização
COPY start.sh ./
RUN chmod +x start.sh

CMD ["./start.sh"]