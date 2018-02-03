#!/bin/bash

echo "Delete local gh-pages branch"
git branch -D gh-pages

echo "Create fresh branch"
git checkout -b gh-pages

echo "Get dependencies, build application"
rm -rf resources/public/bower_components
bower install
sass resources/public/css/scarf.sass resources/public/css/scarf.css --style compressed
lein do clean, cljsbuild once min

echo "Add application"
git add -f resources/public/index.html \
    resources/public/bower_components/fontawesome/css/font-awesome.min.css \
    resources/public/bower_components/fontawesome/fonts \
    resources/public/bower_components/bootstrap/dist/css/bootstrap.min.css \
    resources/public/bower_components/lightbox2/dist/css/lightbox.min.css \
    resources/public/css/scarf.css \
    resources/public/img/ \
    resources/public/bower_components/jquery/dist/jquery.min.js \
    resources/public/bower_components/bootstrap/dist/js/bootstrap.min.js \
    resources/public/bower_components/bootstrap/dist/js/bootstrap.min.js.map \
    resources/public/bower_components/lightbox2/dist/js/lightbox.min.js \
    resources/public/bower_components/lightbox2/dist/js/lightbox.min.map \
    resources/public/bower_components/clipboard/dist/clipboard.min.js \
    resources/public/bower_components/jspdf/dist/jspdf.min.js \
    resources/public/bower_components/lightbox2/dist/images/ \
    resources/public/js/canvg_context2d/ \
    resources/public/js/compiled/scarf.js

echo "Remove remote gh-pages branch"
git push origin --delete gh-pages

echo "Publish application"
git commit -m "Release to gh-pages"
git subtree push --prefix resources/public origin gh-pages

echo "Finished. Switching back to develop"
git checkout develop

rm -r resources/public/bower_components
bower install
sass resources/public/css/scarf.sass resources/public/css/scarf.css --style compressed
