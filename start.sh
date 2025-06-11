#!/bin/sh

echo "=== Iniciando aplicação Brazilian Stars ==="

echo "=== DEBUG: Verificando estrutura de arquivos ==="
ls -la /app
echo "=== Conteúdo da pasta src: ==="
ls -la /app/src || echo "Pasta src não encontrada!"

echo "=== Verificando diretório de dados ==="
ls -la /app/data || echo "Pasta data não encontrada!"

# FORÇAR recriação do banco para resolver problemas de schema
echo "Removendo banco antigo para resolver problemas de schema..."
rm -f /app/data/database.db

echo "Criando novo banco com schema atualizado..."
npx prisma db push --accept-data-loss

# Executar seed se disponível
if [ -f "/app/prisma/seed.js" ]; then
    echo "Executando seed do banco de dados..."
    node prisma/seed.js || echo "Seed falhou - continuando..."
else
    echo "Arquivo seed não encontrado em prisma/seed.js"
fi

# Verificar se o arquivo servidor existe
if [ -f "/app/src/server.js" ]; then
    echo "Iniciando a aplicação..."
    npm run start
else
    echo "ERRO: Arquivo /app/src/server.js não encontrado!"
    echo "Conteúdo da pasta /app/src:"
    ls -la /app/src
    exit 1
fi