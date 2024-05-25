# Utiliza la imagen oficial de PostgreSQL como base
FROM postgres:latest

ENV POSTGRES_PASSWORD=mypassword

ENV POSTGRES_DB=RECETAS

# Exponer el puerto por defecto de PostgreSQL
EXPOSE 5432

COPY ./DDL.sql /docker-entrypoint-initdb.d/01_DDL.sql
COPY ./DML.sql /docker-entrypoint-initdb.d/02_DML.sql

COPY init-db.sh /docker-entrypoint-initdb.d/init-db.sh

RUN chmod +x /docker-entrypoint-initdb.d/init-db.sh
