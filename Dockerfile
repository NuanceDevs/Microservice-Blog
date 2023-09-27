FROM node:alpine
LABEL name="blog-microservice"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
EXPOSE 8888

CMD [ "npm", "run", "start:dev" ]