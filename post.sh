#!/bin/bash

set -o errexit # Exit on error

bower cache clean
bower install
grunt execute:target

CURRENT=`pwd`

cd "$CURRENT/app/bower_components/modernizr"
npm install
cd "$CURRENT/app/bower_components/modernizr/bin"
node modernizr --config ../../../../modernizr-config.json --dest ../../../../app/js/plugins/modernizr.js
