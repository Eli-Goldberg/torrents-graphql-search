FROM node:7.7.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .

ENV NODE_PATH $PATH:/node_modules

RUN npm install --production

EXPOSE 8080

CMD ["npm", "start"]
