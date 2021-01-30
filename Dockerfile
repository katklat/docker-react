FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
 
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
# default command is start nginx

# docker build .
# docker run -p 8080:80 <container-id>
