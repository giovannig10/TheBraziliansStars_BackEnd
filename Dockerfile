FROM node:22-alpine3.21

WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar arquivos essenciais
COPY prisma/ ./prisma/
COPY .env* ./
COPY start.sh ./

# Criar pasta src e server.js com base no código que você mostrou
RUN mkdir -p src && cat > src/server.js << 'EOF'
import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();
const port = process.env.PORT || 4002;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ 
    message: "The Brazilian Stars API está funcionando!", 
    port: port,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
EOF

# Verificar se foi criado
RUN ls -la src/ && echo "=== Conteúdo do server.js ===" && cat src/server.js

# Gerar Prisma
RUN npx prisma generate

# Permissões
RUN chmod +x start.sh

EXPOSE 4002

CMD ["./start.sh"]