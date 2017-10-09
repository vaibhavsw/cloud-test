FROM node

RUN curl -L https://84530a71c0e8b4d329f3049b34189f0623e5692f@github.com/vaibhavswarnkar/cloud-test/tarball/c416566d69a883ab8fe53b078a5d7bc280b95ea8 > cloud-test.tar.gz

RUN mkdir gitdir

RUN tar xfvz cloud-test.tar.gz -C ./gitdir/ --strip-components=1

WORKDIR ./gitdir/

RUN npm install

RUN npm run server
