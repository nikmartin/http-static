#!/usr/bin/env node
"use strict";
var http = require('http'),
    send = require('send'),
    url = require('url');

var app = http.createServer(function (req, res) {
   console.log('Request: %s', req.url);
   function error(err) {
      res.statusCode = err.status || 500;
      res.end(err.message);
   }

   function redirect() {
      res.statusCode = 301;
      res.setHeader('Location', req.url + '/');
      res.end('Redirecting to ' + req.url + '/');
   }

   send(req, url.parse(req.url).pathname)
      .root(process.cwd())
      .on('error', error)
      .on('directory', redirect)
      .pipe(res);
});

app.listen(3333, function() {
   console.log('Simple-Static Listening on port 3333');
});

