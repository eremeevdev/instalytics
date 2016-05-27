FROM python:latest

RUN apt-get update
RUN apt-get install vim
RUN apt-get install httpie
RUN apt-get install ipython

EXPOSE 8888

RUN mkdir /app
VOLUME /app

COPY requirements.txt /app
RUN pip install -r requirements.txt

