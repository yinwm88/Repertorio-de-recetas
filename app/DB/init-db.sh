#!/bin/bash

# Wait for PostgreSQL service to be ready (optional, if necessary)
# Add appropriate logic here to wait for PostgreSQL service to be ready

# Execute DDL script
psql -U postgres -d RECETAS -a -f /docker-entrypoint-initdb.d/DDL.sql

# Execute DML script
psql -U postgres -d RECETAS -a -f /docker-entrypoint-initdb.d/DML.sql
