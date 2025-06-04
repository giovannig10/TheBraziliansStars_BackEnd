FROM node:22-alpine3.21 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

# Estágio de produção
FROM node:22-alpine3.21

WORKDIR /app

# Copiar dependências e arquivos necessários
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /package*.json ./
COPY --from=builder /prisma ./prisma
COPY --from=builder /src ./src

# Copiar arquivo principal do servidor
COPY --from=builder /src/server.js ./

# Criar diretório para o banco SQLite
RUN mkdir -p /data

EXPOSE 4002

# Script de inicialização
COPY start.sh ./
RUN chmod +x start.sh

CMD ["./start.sh"]