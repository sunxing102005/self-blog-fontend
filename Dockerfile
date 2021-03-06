FROM node:alpine
RUN mkdir -p /opt/data/
WORKDIR /opt/data
COPY . /opt/data
# RUN npm install cnpm -g --registry=https://registry.npm.taobao.org
RUN npm install
RUN npm run compile
EXPOSE 8365
CMD node production.js