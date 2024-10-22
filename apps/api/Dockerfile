FROM node:20 AS build
WORKDIR /orquestrando
COPY . .
RUN yarn install
RUN yarn workspace @orquestrando/api build

FROM node:20-alpine as prod
WORKDIR /api
USER node
COPY --from=build /orquestrando/apps/api/node_modules ./node_modules
COPY --from=build /orquestrando/node_modules ./node_modules
COPY --from=build /orquestrando/apps/api/build .
EXPOSE 3333
CMD [ "node", "main.cjs" ]
