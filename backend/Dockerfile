FROM python:latest

RUN apt-get update -y
RUN apt-get install vim -y
RUN apt-get install httpie -y
RUN apt-get install ipython -y

EXPOSE 8888

RUN mkdir /app
VOLUME /app
WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt
