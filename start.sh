#!/bin/sh

# Script de inicialização para setup da aplicação

echo "=== DEBUG: Verificando estrutura de arquivos ==="
ls -la /app
echo "=== Conteúdo da pasta src: ==="
ls -la /app/src || echo "Pasta src não encontrada!"

echo "=== Verificando diretório de dados ==="
ls -la /app/data || echo "Pasta data não encontrada!"

# Verificar se o banco já existe
if [ -f "/app/data/database.db" ]; then
    echo "Banco de dados SQLite já existe - pulando inicialização"
else
    echo "Banco de dados não encontrado - criando novo banco..."
    
    # Criar banco e aplicar schema
    npx prisma db push --accept-data-loss
    
    # Executar seed se necessário (opcional)
    echo "Executando seed do banco de dados..."
    npx prisma db seed || echo "Seed não encontrado ou falhou - continuando..."
fi

# Verificar se o arquivo existe antes de tentar executar
if [ -f "/app/src/server.js" ]; then
    echo "Iniciando a aplicação..."
    npm run start
else
    echo "ERRO: Arquivo /app/src/server.js não encontrado!"
    echo "Conteúdo da pasta /app/src:"
    ls -la /app/src
    exit 1
fi