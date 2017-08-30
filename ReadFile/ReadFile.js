let http = require('http');
let rout = require('./rout');
let url = require('url');
const hostName = '127.0.0.1';
const port = 8080;

http.createServer((req,res) => {
  res.writeHead(200,{'Content-Type' : 'text/html'});
  if(req.url !== '/favicon.ico'){
    let pathname = url.parse(req.url).pathname;
    pathname = pathname.replace(/\//,'');
    // let path = "./login.html";
    // reCall = (data) => {
    //   res.write(data);
    //   res.end();
    // }; //闭包函数，用于回调
    // let readFileSync = optFile.readFile(path,reCall);
    rout[pathname](req,res,pathname);
    console.log("主线程运行完");
    // console.log(readFileSync);
    // res.end(readFileSync);
  }
}).listen(port,hostName,() => {
  console.log(`服务器运行在 http://${hostName}:${port}`);
});