# Utiliza la imagen oficial de PostgreSQL como base
FROM postgres:latest

# Establece las variables de entorno para PostgreSQL
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=RECETAS

# Exponer el puerto por defecto de PostgreSQL
EXPOSE 5432

# Copiar los archivos DDL.sql y DML.sql al directorio de inicialización
COPY ./DDL.sql /docker-entrypoint-initdb.d/01_DDL.sql
COPY ./DML.sql /docker-entrypoint-initdb.d/02_DML.sql

# Copiar el script de inicialización y darle permisos de ejecución
COPY init-db.sh /docker-entrypoint-initdb.d/init-db.sh
RUN chmod +x /docker-entrypoint-initdb.d/init-db.sh
