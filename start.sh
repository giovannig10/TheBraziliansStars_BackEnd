#!/bin/sh

# Script de inicialização para setup da aplicação

echo "Executando migrações do Prisma..."
npx prisma migrate deploy

# Executar seed se necessário (opcional)
echo "Executando seed do banco de dados..."
npx prisma db seed || echo "Seed não encontrado ou falhou - continuando..."

# Iniciar a aplicação
echo "Iniciando a aplicação..."
node server.js