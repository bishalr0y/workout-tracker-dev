FROM node:18-alpine3.15

RUN npm i -g nodemon

WORKDIR /home/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]