# Utilizamos la imagen de Node.js como base.
FROM node:18-alpine

# Copiamos los archivos del frontend al directorio de trabajo del contenedor.
WORKDIR /app

# opiamos package.json y package-lock.json al directorio de trabajo.
COPY package*.json ./

# Instalamos las dependencias del frontend.
RUN npm install 
    

# Copiamos todo el contenido del directorio frontend al contenedor.
COPY . .

# Exponemos el puerto 3000 para que el servidor frontend esté accesible desde fuera del contenedor.
EXPOSE 3000

#  Usamos el comando npm start como comando de inicio para iniciar el servidor frontend.
CMD ["npm", "start"]