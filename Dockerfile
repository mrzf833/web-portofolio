FROM node:16.13.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build
CMD [ "npm", "run", "start" ]