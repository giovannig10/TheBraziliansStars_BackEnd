FROM node:22-alpine3.21

WORKDIR /app

# Debug: mostrar conteúdo atual
RUN echo "=== Conteúdo inicial ===" && ls -la

# Copiar package.json
COPY package*.json ./
RUN echo "=== Após copiar package.json ===" && ls -la

# Instalar dependências
RUN npm install

# Copiar todo o código
COPY . .
RUN echo "=== Após copiar tudo ===" && ls -la && echo "=== Conteúdo src ===" && ls -la src/

# Gerar Prisma
RUN npx prisma generate

# Verificar se server.js existe
RUN ls -la src/ && file src/server.js || echo "server.js não encontrado!"

EXPOSE 4002

COPY start.sh ./
RUN chmod +x start.sh

CMD ["./start.sh"]