FROM node:14

# Create app directory
WORKDIR /usr/app

COPY . /usr/app/
RUN npm install

EXPOSE 8080 7501 7502
CMD ["npm", "start"]
