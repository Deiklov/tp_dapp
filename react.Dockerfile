FROM node:16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install
ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
EXPOSE 3000
CMD npm run start