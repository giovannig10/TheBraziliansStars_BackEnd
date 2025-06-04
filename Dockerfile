FROM node:22-alpine3.21

WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Criar estrutura de pastas se não existir
RUN mkdir -p src

# Copiar arquivos essenciais
COPY prisma/ ./prisma/
COPY .env* ./
COPY start.sh ./

# Tentar copiar src se existir, senão criar server.js
RUN echo 'import express from "express";\nimport { config } from "dotenv";\nimport cors from "cors";\n\nconfig();\nconst port = process.env.PORT || 4002;\n\nconst app = express();\n\napp.use(cors());\napp.use(express.json());\n\napp.get("/", (req, res) => {\n  res.json({ message: "API funcionando!", port });\n});\n\napp.listen(port, () => {\n  console.log(`Servidor rodando na porta ${port}`);\n});' > src/server.js

# Tentar copiar src original se existir (sobrescreve o arquivo criado acima)
COPY src/ ./src/ 2>/dev/null || echo "Pasta src original não encontrada, usando server.js padrão"

# Verificar resultado
RUN ls -la src/ && cat src/server.js

# Gerar Prisma
RUN npx prisma generate

# Permissões
RUN chmod +x start.sh

EXPOSE 4002

CMD ["./start.sh"]