# base node image
FROM node:16-bullseye-slim as base

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

ENV NODE_ENV production

# Install all node_modules, including dev dependencies
FROM base as deps

RUN mkdir /app
WORKDIR /app

ADD package.json ./
RUN npm install --production=false

# Setup production node_modules
# FROM base as production-deps

# RUN mkdir /app
# WORKDIR /app

# COPY --from=deps /app/node_modules /app/node_modules
# ADD package.json pnpm-lock.yaml ./
# ADD package.json ./
# RUN npm install pnpm -g
# RUN npm prune --production

# Build the app
FROM base as build

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD package.json .
ADD prisma ./prisma
RUN npm run db

ADD . .
# RUN npm install pnpm -g
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

ENV NODE_ENV production

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
COPY --from=build /app/prisma /app/prisma
ADD . .

CMD ["npm", "run", "start"]
