# **USAGE DEV**

1. Entra al directorio de `app`
2. Copia las variables de entorno  del `.env.test` a un `.env`
  ```zh
   cp backend/.env.test  backend/.env
   ```
(O en win)
```cmd
copy "backend\.env.test" "backend\.env"
```

3. En el directorio del `backend` corre (EL DOCKER DEBERIA YA HACERLO)
   
   ```bash
   cd backend
   npx prisma generate
   cd ..
   ```
   
4. Corre el servidor 
   
   ```bash
   docker compose watch
   ```
> Si haz detenido el docker compose watch, entonces para volverlo a correr debera ser en una nueva terminal
