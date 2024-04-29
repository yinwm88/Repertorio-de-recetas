#!/bin/bash

psql -U postgres -d RECETAS -a -f /docker-entrypoint-initdb.d/DDL.sql
psql -U postgres -d RECETAS -a -f /docker-entrypoint-initdb.d/DML.sql

# Start the PostgreSQL service
/usr/local/bin/docker-entrypoint.sh postgres