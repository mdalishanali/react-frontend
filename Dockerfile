FROM node:14-alpine AS development
# ENV NODE_ENV de       velopment
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD [ "npm","start" ]
