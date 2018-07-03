FROM node
VOLUME ["./:/src/"]
RUN "npm start"
