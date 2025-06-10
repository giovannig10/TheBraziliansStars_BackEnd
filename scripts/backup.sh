#!/bin/bash

# Script para backup do banco SQLite

CONTAINER_NAME="the_brazilian_stars"
BACKUP_DIR="./backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Criar diretório de backup se não existir
mkdir -p $BACKUP_DIR

echo "Fazendo backup do banco de dados..."

# Fazer backup do banco SQLite
docker exec $CONTAINER_NAME cp /app/data/database.db /app/data/database_backup_$DATE.db
docker cp $CONTAINER_NAME:/app/data/database_backup_$DATE.db $BACKUP_DIR/

echo "Backup salvo em: $BACKUP_DIR/database_backup_$DATE.db"

# Limpar arquivo temporário do container
docker exec $CONTAINER_NAME rm /app/data/database_backup_$DATE.db

# Manter apenas os 10 backups mais recentes
ls -t $BACKUP_DIR/database_backup_*.db | tail -n +11 | xargs -r rm

echo "Backup concluído!"