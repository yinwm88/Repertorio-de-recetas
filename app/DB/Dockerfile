# Utiliza la imagen oficial de PostgreSQL como base
FROM postgres:latest

# Definir la contraseña de la base de datos (cambia "mypassword" por tu propia contraseña)
ENV POSTGRES_PASSWORD=mypassword

# Exponer el puerto por defecto de PostgreSQL
EXPOSE 5432

# Copiar los archivos DDL.sql y DML.sql al directorio de inicialización
#COPY ./DDL.sql /docker-entrypoint-initdb.d/01_DDL.sql
#COPY ./DML.sql /docker-entrypoint-initdb.d/02_DML.sql

# Copy the initialization script
COPY ./DB/init-db.sh /docker-entrypoint-initdb.d/init-db.sh

# Set executable permissions for the script
RUN chmod +x /docker-entrypoint-initdb.d/init-db.sh
