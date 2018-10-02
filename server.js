#!/usr/bin/env node

// EDIT THESE FOR SSL SUPPORT
const KEY_PATH = './ privkey.pem';
const CERT_PATH = './cert.pem';

('use strict');
var http = require('http'),
  https = require('https'),
  send = require('send'),
  fs = require('fs'),
  url = require('url');

const options = {};
let server = {};
try {
  let key = fs.readFileSync(KEY_PATH);
  let cert = fs.readFileSync(CERT_PATH);
  options.key = key;
  options.cert = cert;
  server = https;
} catch (error) {
  server = http;
}

var app = server.createServer(options, function(req, res) {
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
    root: process.cwd(),
  })
    .on('error', error)
    .on('directory', redirect)
    .on('file', function() {
      console.log('%s: %s', res.statusCode, req.url);
    })
    .pipe(res);
});

var port = process.argv[2] || 3333;

console.log('HTTP Static Listening on port %s', port);

app.on('error', function(e) {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, incrementing and retrying...');
    setTimeout(function() {
      //         app.close();
      port++;
      app.listen(port, function() {
        console.log('HTTP Static Listening on port %s', port);
      });
    }, 1000);
  }
});

app.listen(port);
