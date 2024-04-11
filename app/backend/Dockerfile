# Estamos utilizando la imagen de Node.js 14 basada en Alpine como imagen base.
FROM node:18-alpine

# Exponemos el puerto 3000 al mundo exterior.
EXPOSE 3030

# Establecemos el directorio de trabajo en el contenedor.
WORKDIR /backend

# Copiamos package.json y package-lock.json al directorio de trabajo.
COPY package*.json package-lock*.json ./

# Instalamos las dependencias del backend, incluyendo Axios
RUN npm install

# Copiamos todo el contenido del directorio del backend al contenedor.
COPY . .

# Comando para ejecutar el servidor backend.
CMD ["npm", "start"]
