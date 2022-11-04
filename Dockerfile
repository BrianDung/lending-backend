# lts-gallium refers to v16
# Using this instead of node:16 to avoid dependabot updates
FROM node:16 as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ARG APP_ENV=development
ENV NODE_ENV=${APP_ENV}

RUN npm run build

RUN npm prune

FROM node:16-alpine

ARG APP_ENV=development
ENV NODE_ENV=${APP_ENV}

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app ./

EXPOSE 3000

CMD [ "node", "dist/src/main.js" ]
