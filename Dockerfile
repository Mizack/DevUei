FROM node:12
WORKDIR /devuei
EXPOSE 3000
COPY . .
RUN npm install
ENTRYPOINT npm start