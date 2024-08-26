
FROM node:18 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY client ./client

WORKDIR /usr/src/app/client

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
