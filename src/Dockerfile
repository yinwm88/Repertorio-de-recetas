# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the entire backend directory contents into the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the backend server
CMD ["node", "index.js"]
