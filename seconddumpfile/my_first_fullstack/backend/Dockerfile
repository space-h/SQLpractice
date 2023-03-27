FROM node:18-alpine
COPY . /opt/app
WORKDIR /opt/app

# When docker wakes up, the first command it does is "Cd WORKDIR" so, /opt/app

CMD ["npm", "run", "dev"]
