#!/bin/bash

echo "Creating Deployment zip now..."

if [ -f ./release.zip ]; then
    rm ./release.zip
fi

zip -rq release.zip index.js scrumblr.js node_modules

echo "Done"
