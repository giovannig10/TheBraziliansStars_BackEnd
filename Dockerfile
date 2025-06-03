FROM node:22-alpine3.21 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

# Estágio de produção
FROM node:22-alpine3.21

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src ./src

# Criar diretório para o banco SQLite
RUN mkdir -p /app/data

EXPOSE 4002

# Script de inicialização
COPY init.sh ./
RUN chmod +x init.sh

CMD ["./init.sh"]