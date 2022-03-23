FROM node:16.14-stretch-slim
WORKDIR /opt/
COPY package*.json tsconfig.json /opt/
RUN npm install
COPY src /opt/src/
ENTRYPOINT ["npx", "ts-node", "/opt/src/_init.ts"]

