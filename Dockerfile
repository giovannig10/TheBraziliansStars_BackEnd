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
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src ./src

EXPOSE 4002

# Script de inicialização
COPY start.sh ./
RUN chmod +x start.sh

CMD ["./start.sh"]