#!/bin/sh

# Script de inicialização para setup da aplicação

echo "Aguardando PostgreSQL ficar disponível..."
sleep 10

# Verificar conexão com o banco (tentativas)
until npx prisma db push --accept-data-loss 2>/dev/null || [ $? -eq 0 ]; do
  echo "PostgreSQL ainda não está pronto - aguardando..."
  sleep 5
done

echo "PostgreSQL está pronto!"

echo "Executando migrações do Prisma..."
npx prisma migrate deploy

# Executar seed se necessário (opcional)
echo "Executando seed do banco de dados..."
npx prisma db seed || echo "Seed não encontrado ou falhou - continuando..."

# Iniciar a aplicação
echo "Iniciando a aplicação..."
npm run start