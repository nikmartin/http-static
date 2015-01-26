#!/usr/bin/env node

"use strict";
var http = require('http'),
   send = require('send'),
   url = require('url');

var app = http.createServer(function(req, res) {
   function error(err) {
      res.statusCode = err.status || 500;
      console.log('%s: %s', err.status, req.url);
      res.end(err.message);
   }

   function redirect() {
      res.statusCode = 301;
      res.setHeader('Location', req.url + '/');
      res.end('Redirecting to ' + req.url + '/');
   }

   send(req, url.parse(req.url).pathname, {
         root: process.cwd()
      })
      .on('error', error)
      .on('directory', redirect)
      .on('file', function() {
         console.log('%s: %s', res.statusCode, req.url);
      })
      .pipe(res);
});

var port = process.argv[2] || 3333;

console.log('Simple-Static Listening on port %s', port);

app.on('error', function(e) {
   if (e.code === 'EADDRINUSE') {
      console.log('Address in use, incrementing and retrying...');
      setTimeout(function() {
         //         app.close();
         port++;
         app.listen(port, function() {
            console.log('Simple-Static Listening on port %s', port);
         });
      }, 1000);
   }
});

app.listen(port);
