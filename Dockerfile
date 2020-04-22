FROM node:9.4.0-alpine

ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -s build -p 80
EXPOSE 80

# Install all dependencies of the current project.
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install

COPY . .

RUN npm install

RUN yarn build
