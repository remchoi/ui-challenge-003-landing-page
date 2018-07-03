FROM node
VOLUME ["./:/src/"]
CMD ["cd /src && npm start"]
