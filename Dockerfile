# Stage 1: Build an Angular Docker Image
FROM node AS build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build 
# Stage 2, use the compiled app, ready for production with Nginx
FROM nginx
COPY --from=build /app/dist/ecr/browser/ /usr/share/nginx/html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]