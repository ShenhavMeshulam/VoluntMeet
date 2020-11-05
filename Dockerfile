FROM node:latest AS server
WORKDIR /opt/server
COPY server .
RUN npm i && npm run build

FROM node:latest AS client
WORKDIR /opt/client
COPY client .
RUN npm i && npm run build

FROM node:latest
WORKDIR /opt/app
COPY --from=server /opt/server/dist .
COPY --from=server /opt/server/node_modules ./node_modules
COPY --from=client /opt/client/dist ./public
CMD [ "node", "index.js" ]