let http = require("http");
let url = require("url");
let router = require("./router");
let exception = require("./exception");
const hostName = "127.0.0.1";
const port = 8080;

http.createServer((req,res) => {

  if(req.url !== "/favicon.ico"){

    let pathname = url.parse(req.url).pathname;
    pathname = pathname.replace(/\//,"");
    try{
      router[pathname](req,res);
    }catch (err){
      console.log('出错='+err);
      res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
      res.write(err.toString());
      res.end('');
    }
    // try{
    //   let data = exception.expfun(1);
    //   res.write(data);
    //   res.end();
    // }catch (err){
    //   console.log('aaaaa='+err);
    //   res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //   res.write(err.toString());
    //   res.end('');
    // }
    console.log("server执行完毕");
  }
}).listen(port,hostName,() => {
  console.log(`服务器运行在 http://${hostName}:${port}`);
});