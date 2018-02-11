#!/bin/bash

echo "Delete local gh-pages branch"
git branch -D gh-pages

echo "Create fresh branch"
git checkout -b gh-pages

echo "Get dependencies, build application"
rm -rf resources/public/node_modules
yarn install
sass resources/public/css/scarf.sass resources/public/css/scarf.css --style compressed
lein do clean, cljsbuild once min

echo "Add application"
git add -f resources/public/index.html \
    resources/public/node_modules/font-awesome/css/font-awesome.min.css \
    resources/public/node_modules/font-awesome/fonts \
    resources/public/node_modules/bootstrap/dist/css/bootstrap.min.css \
    resources/public/node_modules/lightbox2/dist/css/lightbox.min.css \
    resources/public/css/scarf.css \
    resources/public/img/ \
    resources/public/node_modules/jquery/dist/jquery.min.js \
    resources/public/node_modules/bootstrap/dist/js/bootstrap.min.js \
    resources/public/node_modules/bootstrap/dist/js/bootstrap.min.js.map \
    resources/public/node_modules/lightbox2/dist/js/lightbox.min.js \
    resources/public/node_modules/lightbox2/dist/js/lightbox.min.map \
    resources/public/node_modules/clipboard/dist/clipboard.min.js \
    resources/public/node_modules/jspdf/dist/jspdf.min.js \
    resources/public/node_modules/lightbox2/dist/images/ \
    resources/public/js/canvg_context2d/ \
    resources/public/js/compiled/scarf.js

echo "Add empty .nojekyll file for node_modules support"
touch .nojekyll
git add .nojekyll

echo "Remove remote gh-pages branch"
git push origin --delete gh-pages

echo "Publish application"
git commit -m "Release to gh-pages"
git subtree push --prefix resources/public origin gh-pages

echo "Finished. Switching back to develop"
git checkout develop

rm -r resources/public/node_modules
yarn install
sass resources/public/css/scarf.sass resources/public/css/scarf.css --style compressed
