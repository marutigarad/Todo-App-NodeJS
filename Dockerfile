FROM node

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "app.js" ,"0.0.0.0:3000"]