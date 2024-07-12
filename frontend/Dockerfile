FROM node:20-bookworm

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY next.config.mjs tsconfig.json ./
COPY public ./public
COPY src ./src
RUN npm run build

CMD ["npm", "start"]
