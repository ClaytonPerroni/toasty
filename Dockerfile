FROM node:14-alpine AS builder
WORKDIR /app/
COPY package.json ./
RUN apk --update --no-cache add openssh git \
  && npx yarn install


FROM node:14-alpine
# nice to have
RUN apk --update --no-cache add git openssh 
WORKDIR /app/
COPY --from=builder /app/node_modules ./node_modules
