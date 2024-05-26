#!/bin/bash
set -e

# Esperar a que PostgreSQL esté listo
until pg_isready -h localhost -p 5432; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

# Ejecutar los archivos DDL.sql y DML.sql
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    \i /docker-entrypoint-initdb.d/01_DDL.sql
    \i /docker-entrypoint-initdb.d/02_DML.sql
EOSQL
