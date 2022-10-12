FROM node

RUN npm i -g nodemon 

WORKDIR /home/app

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 4000

CMD ["npm", "run", "dev"]