FROM node:22-alpine AS base

WORKDIR /usr/local/app

FROM base AS deps

COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS dev

COPY . .
CMD ["npm","run","dev"]

FROM deps AS build
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL

COPY . .
RUN npm run build

FROM build AS test
RUN npm run test

FROM base AS final
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=test /usr/local/app/package.json ./package.json

COPY --from=build /usr/local/app/.next/standalone ./

COPY --from=build /usr/local/app/.next/static ./.next/static

COPY --from=build /usr/local/app/public ./public



EXPOSE 3000
CMD ["node", "server.js"]