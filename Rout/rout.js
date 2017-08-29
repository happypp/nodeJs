let http = require('http');
let url = require('url');
let router = require('./router');
const hostName = '127.0.0.1';
const port = 8080;

http.createServer((req,res) => {
  res.writeHead(200,{'Content-Type' : 'text/html'});
  if(req.url !== '/favicon.ico'){
    let pathname = url.parse(req.url).pathname;
    pathname = pathname.replace(/\//,"");
    router[pathname](req,res);
    console.log(pathname);
    res.end();
  }
}).listen(port,hostName,() => {
  console.log(`服务器运行在 http://${hostName}:${port}`);
});