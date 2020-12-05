FROM python:3.9.0-alpine

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/main openssl \
    build-base cmake musl-dev linux-headers

RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing gdal-dev

RUN apk update && apk add postgresql-dev gcc python3-dev geos-dev geos

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .
