# Use Node.js official image as base
FROM node:16

# Set working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (the app's port)
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
