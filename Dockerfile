FROM node:20.9

WORKDIR /workspace

COPY . .

RUN npm install

CMD ["npm", "start"]