FROM node:14

# create app directory
WORKDIR /app

COPY package.json ./

RUN npm install

# Bundle app sorce
COPY . .

EXPOSE 3000
CMD ["node","index.js"]