FROM node:22-alpine3.21

WORKDIR /app

# Copiar package.json primeiro
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar arquivos específicos (evitando problemas com .dockerignore)
COPY prisma ./prisma
COPY src ./src
COPY .env* ./
COPY start.sh ./

# Debug: verificar se arquivos foram copiados
RUN echo "=== Verificando cópia ===" && ls -la && echo "=== Conteúdo src ===" && ls -la src/

# Gerar cliente Prisma
RUN npx prisma generate

# Permissão para o script
RUN chmod +x start.sh

EXPOSE 4002

CMD ["./start.sh"]