FROM node:22-alpine

workdir /app

copy package.json package-lock.json ./
run npm install 

copy . .

expose 3000

cmd ["npm", "start"]