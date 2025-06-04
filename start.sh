#!/bin/sh

# Script de inicialização para setup da aplicação

echo "=== DEBUG: Verificando estrutura de arquivos ==="
ls -la /app
echo "=== Conteúdo da pasta src: ==="
ls -la /app/src || echo "Pasta src não encontrada!"

echo "Aguardando PostgreSQL ficar disponível..."
sleep 10

# Verificar conexão com o banco (tentativas)
until npx prisma db push --accept-data-loss 2>/dev/null || [ $? -eq 0 ]; do
  echo "PostgreSQL ainda não está pronto - aguardando..."
  sleep 5
done

echo "PostgreSQL está pronto!"

# Usar db push em vez de migrate para evitar problemas de drift
echo "Sincronizando banco com schema..."
npx prisma db push --accept-data-loss

# Executar seed se necessário (opcional)
echo "Executando seed do banco de dados..."
npx prisma db seed || echo "Seed não encontrado ou falhou - continuando..."

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