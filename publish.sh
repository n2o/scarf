#!/bin/bash

echo "Delete local gh-pages branch"
git branch -d gh-pages

echo "Create fresh branch"
git checkout -b gh-pages

echo "Get dependencies, build application"
rm -rf resources/public/bower_components
bower install
sass resources/public/css/scarf.sass resources/public/css/scarf.css --style compressed
lein do clean, cljsbuild once min

echo "Add application"
git add -f resources/public/index.html \
    resources/public/bower_components/fontawesome/css/font-awesome.css \
    resources/public/bower_components/bootstrap/dist/css/bootstrap.css \
    resources/public/css/scarf.css \
    resources/public/img/ \
    resources/public/bower_components/jquery/dist/jquery.js \
    resources/public/bower_components/tether/dist/js/tether.js \
    resources/public/bower_components/bootstrap/dist/js/bootstrap.js \
    resources/public/js/compiled/scarf.js

echo "Remove remote gh-pages branch"
git push origin --delete gh-pages

echo "Publish application"
git commit -m "Release to gh-pages"
git subtree push --prefix resources/public origin gh-pages
