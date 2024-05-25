#!/bin/bash
set -e

# Ejecuta los archivos DDL.sql y DML.sql
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    \i /docker-entrypoint-initdb.d/01_DDL.sql
    \i /docker-entrypoint-initdb.d/02_DML.sql
EOSQL
