FROM node:20 AS build
WORKDIR /tagit
COPY . .
RUN yarn install
RUN yarn workspace @tagit/api build

FROM node:20-alpine as prod
WORKDIR /api
USER node
COPY --from=build /tagit/apps/api/node_modules ./node_modules
COPY --from=build /tagit/node_modules ./node_modules
COPY --from=build /tagit/apps/api/build .
EXPOSE 3333
CMD [ "node", "main.cjs" ]
