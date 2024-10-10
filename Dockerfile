FROM node:20.12.2-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:20.12.2-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY package.json yarn.lock ./

RUN yarn install --production

EXPOSE 3000

CMD ["node", "dist/main.js"]
