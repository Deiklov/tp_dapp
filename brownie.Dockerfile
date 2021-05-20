FROM python:3.8

# Set up code directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install linux dependencies
RUN apt-get update && apt-get install -y libssl-dev

RUN apt-get update && apt-get install -y \
    npm

RUN npm install -g ganache-cli

COPY . .

RUN pip install -r requirements.txt
RUN brownie run brownie/scripts/deploy.py

EXPOSE 8545

CMD brownie console
