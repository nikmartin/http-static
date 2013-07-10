Simple Static
==============
Simple Static is a tiny web server for testing static web pages. It is designed around testing and 
developing single page web apps, like with backbone, ember, angular etc. It handles mime-types, 
includes, etc.  It doesn't have any required config settings.  Just install it, and run it. It 
serves files out of the directory it is running in, and any files and folders that are included 
underneath.

Install
-------
Simple Static runs as as executable, so installing with -g is the preferred method:
`npm install -g simple-static`

Run
---
Run simple-static from whatever directory you are in, and it will serve files from that directory as the root. `simple-static`. simple-static is now serving files from the localdirectory on port 3333: http://localhost:3333/

License
--------
Copyright (c) 2013 Nik Martin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The Software shall be used for Good, not Evil.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

