FROM node:alpine
WORKDIR /back
COPY package.json .
RUN npm install\
    && npm install typescript -g
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=16384"
RUN export NODE_OPTIONS="--max-old-space-size=16384"
RUN npm run build
EXPOSE 9000
CMD ["node", "./dist/server.js"]