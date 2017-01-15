FROM clojure:alpine
MAINTAINER Christian Meter <cmeter@googlemail.com>

ENV dir /code

# RUN apk add --update git ruby nodejs && \
#     (gem install sass; exit 0) && \
#     npm install -g bower && \
RUN mkdir ${dir}

WORKDIR ${dir}
ADD . ${dir}

# RUN bower --allow-root install
CMD ["lein", "cljsbuild", "once", "min"]
