<div align="center">
# **USAGE**
</div>

<div>
    1. Copiar variables de `.env.test` a un `.env`
    2. Moverte a la carpeta backend 
        ```cd app/backend``` 
    3. Correr en la carpeta del backend 
        ```npx prisma generate```
    3. Correr al nivel del docker-compose.yml
        ```chmod a+x DB/entrypoint.sh ``` 
    4. Correr servidor
        ```docker compose watch```
</div>