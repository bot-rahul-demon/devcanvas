#!/usr/bin/env sh

# abort on errors
set -e

#build
cd dist

#place .nojekyll to bypass Jeykll processing
echo > .nojekyll

#if you are deploying to a custom domain
#echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -n 'deploy'

#if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

#if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:bot-rahul-demon/devcanvas.git main:gh-pages

cd -
