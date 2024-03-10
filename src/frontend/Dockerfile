# Use an official Node.js runtime as a parent image
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory contents into the container
COPY frontend/ ./

# Build the React app
RUN npm run build

# Stage 2: Serve frontend with nginx server
FROM nginx:alpine

# Copy the build output from the previous stage to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the nginx server
CMD ["nginx", "-g", "daemon off;"]
