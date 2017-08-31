let http = require('http');
let url = require('url');
let rout = require('./rout');
const hostName = '127.0.0.1';
const port = 8080;

http.createServer((req,res) => {
  res.writeHead(200,{'ConTent-Type':'text/html'});
  if(req.url !== '/favicon.ico'){
    let pathname = url.parse(req.url).pathname;
    pathname = pathname.replace(/\//,'');
    let data = '测试数据!';
    rout[pathname](req,res,pathname,data);
  }
}).listen(port,hostName,() => {
  console.log(`服务器运行在 http://${hostName}:${port}`);
});