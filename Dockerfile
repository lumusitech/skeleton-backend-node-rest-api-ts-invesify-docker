FROM node:16-stretch

WORKDIR /app

COPY src /app

COPY package.json /app

COPY tsconfig.json /app

RUN apt update && apt upgrade jq original-awk -y
RUN npm install pm2 -g && npm i yarn -g cross-env --force
RUN chown -R node:node /app

ENV NPM_CONFIG_LOGLEVEL warn

USER node

