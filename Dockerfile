# stage: 1
FROM node:8 as build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build
# stage: 2 — the production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
