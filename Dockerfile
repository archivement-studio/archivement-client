FROM nginx:latest
LABEL authors="changmin.kim"
EXPOSE 80 443

# COPY ./build /archivementclient

COPY ./build /usr/share/nginx/html