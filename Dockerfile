FROM ruby:latest
MAINTAINER Andrew Garner <andrew@andrewgarner.com>

RUN \
  apt-get update && \
  apt-get install -y openjdk-8-jre-headless && \
  yes | gem update --no-document -- --use-system-libraries && \
  yes | gem update --system --no-document -- --use-system-libraries && \
  gem install s3_website && \
  s3_website install

RUN mkdir -p /srv/s3_website
WORKDIR /srv/s3_website

ADD s3_website.yml /srv/s3_website/

CMD ["s3_website", "push"]
