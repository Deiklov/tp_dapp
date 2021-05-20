FROM python:3.8

# Set up code directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install linux dependencies
RUN apt-get update && apt-get install -y libssl-dev

RUN apt-get update && apt-get install -y \
    npm

RUN npm install --global yarn && yarn global add ganache-cli

COPY brownie/ .

RUN pip install -r requirements.txt

EXPOSE 8545

CMD sleep 7200
