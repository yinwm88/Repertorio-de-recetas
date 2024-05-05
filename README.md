# **USAGE**

1. Entra al directorio de `app`
2. Copia las variables de entorno  del `.env.test` a un `.env`
  ```sh
   cp backend/.env.test  backend/.env
   ```
(O en win)
```
copy "backend\.env.test" "backend\.env"
```

3. En el directorio del `backend` corre
   
   ```sh
   cd backend
   npx prisma generate
   cd ..
   ```
   
4. Ejecuta
   
   ```
   chmod a+x DB/entrypoint.sh
   ```
   
6. Corre el servidor 
   
   ```
   docker compose watch
   ```
