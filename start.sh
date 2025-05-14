#!/bin/sh

# Script de inicialização para setup da aplicação

# Verificar se o banco de dados está acessível
echo "Aguardando o banco de dados..."
sleep 5

# Executar as migrações do Prisma
echo "Executando migrações do Prisma..."
npx prisma migrate dev

# Executar seed se necessário
echo "Executando seed do banco de dados..."
npx prisma db seed

# Iniciar a aplicação
echo "Iniciando a aplicação..."
npm run start