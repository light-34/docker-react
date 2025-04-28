FROM node:23-alpine AS builder

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

FROM nginx
#Look at the nginx documentation.
COPY --from=builder /app/build /usr/share/nginx/html
