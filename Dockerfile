FROM clojure:alpine
MAINTAINER Christian Meter <cmeter@googlemail.com>

ENV dir /code

RUN mkdir ${dir}

WORKDIR ${dir}
ADD . ${dir}

# RUN bower --allow-root install
CMD ["lein", "cljsbuild", "once", "min"]
