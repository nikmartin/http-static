# HTTP Static

HTTP Static is a tiny web server for testing static web pages. It is designed around testing and
developing single page web apps, like with backbone, ember, angular etc. It handles mime-types,
includes, etc. It doesn't have any required config settings. Just install it, and run it. It
serves files out of the directory it is running in, and any files and folders that are included
underneath.

## Install

HTTP Static runs as as executable, so installing with -g is the preferred method:
`npm install -g http-static`

## SSL

Edit lines 4 and 5 in server.js to point to your key and cert. Server will fall back to http if
either file fails to load.

## Run

Run http-static from whatever directory you are in, and it will serve files from that directory as the root.
`http-static`. http-static is now serving files from the local directory on port 3333: http://localhost:3333/
