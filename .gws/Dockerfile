FROM node:20-alpine
WORKDIR /app
RUN npm install -g nodemon
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV HOST=0.0.0.0
CMD ["nodemon", "src/index.js"]
