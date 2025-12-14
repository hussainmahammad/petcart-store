
# Dummy Dockerfile for PetCart Store
FROM node:20-alpine

WORKDIR /app
COPY app/backend/package*.json ./
RUN npm install || true
COPY app/backend/. .

EXPOSE 3000
CMD ["node", "app.js"]
