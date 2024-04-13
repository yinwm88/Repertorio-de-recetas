# Estamos utilizando la imagen de Node.js 14 basada en Alpine como imagen base.
FROM node:18-alpine

# Establecemos el directorio de trabajo en el contenedor.
WORKDIR /app

# Copiamos package.json y package-lock.json al directorio de trabajo.
COPY package*.json ./

# Instalamos las dependencias del backend, incluyendo Axios
RUN npm install

# Copiamos todo el contenido del directorio del backend al contenedor.
COPY . .

# Exponemos el puerto 3000 al mundo exterior.
EXPOSE 3001

# Comando para ejecutar el servidor backend.
CMD ["npm", "run", "dev"]