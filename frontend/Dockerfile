FROM node:5

RUN mkdir /app
VOLUME /app
WORKDIR /app

EXPOSE 3000
EXPOSE 3001

COPY package.json /app

RUN npm install
