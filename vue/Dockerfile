FROM node:12 as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:1.19
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/conf.d /etc/nginx/conf.d/
