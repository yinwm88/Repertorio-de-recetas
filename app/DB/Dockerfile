# Utiliza la imagen oficial de PostgreSQL como base
FROM postgres:latest

# Definir la contraseña de la base de datos (cambia "mypassword" por tu propia contraseña)
ENV POSTGRES_PASSWORD=mypassword

# Exponer el puerto por defecto de PostgreSQL
EXPOSE 5432

COPY . .

# Success. You can now start the database server using:
# postgres-1  | 
# postgres-1  |     pg_ctl -D /var/lib/postgresql/data -l logfile start
