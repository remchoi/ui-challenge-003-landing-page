FROM node
VOLUME ["./:/src/"]
RUN "cd /src && npm start"
