#!/bin/bash
srcpath=$(pwd)
docker run -p 8000:80 -it \
    -v $srcpath/_site:/var/www/example.com/public_html/ \
    lamp 
    #-u $(id -u) \