FROM node:6.9.4-alpine
MAINTAINER feedMyPixel <info@feedmypixel.com>
USER root

# create userGroup "nodeApp" and add user "nodeApp"
# implicitly creates /home/nodeApp
# no shell access for user "nodeApp"
RUN adduser -Ds /bin/false nodeApp

ENV HOME=/home/nodeApp

COPY package.json $HOME/
RUN chown -R nodeApp:nodeApp $HOME/*

USER nodeApp
WORKDIR $HOME/src

RUN npm install && \
    npm cache clean

USER root
COPY src/ $HOME/src/
RUN chown -R nodeApp:nodeApp $HOME/*
USER nodeApp
