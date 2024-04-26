FROM registry.suse.com/bci/nodejs:20 as build
WORKDIR /app/src

COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM registry.suse.com/bci/nodejs:20
WORKDIR /usr/app
COPY --from=build /app/src/dist/how-too/server ./
CMD node server.mjs
EXPOSE 4000
