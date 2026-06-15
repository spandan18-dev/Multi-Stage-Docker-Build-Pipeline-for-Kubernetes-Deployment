FROM node:18 AS Builder
WORKDIR /Build
COPY package*.json /Build/
RUN npm install
COPY . /Build/

FROM node:18 
WORKDIR /app
COPY --from=Builder /Build /app/
EXPOSE 8000
CMD ["node", "app.js"]