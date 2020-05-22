FROM ruby:alpine

RUN apk --no-cache add \
  openjdk8 \
  && rm -rf /var/cache/apk/*

WORKDIR /srv/s3_website

COPY s3_website.yml ./

RUN gem install s3_website \
  && rm -rf $GEM_HOME/cache/*.gem \
  && mkdir -p $GEM_HOME/gems \
  && find $GEM_HOME/gems -name "*.c" -delete \
  && find $GEM_HOME/gems -name "*.o" -delete

RUN s3_website install

ENTRYPOINT ["s3_website"]