/**
 * Created by pp on 2017/9/4.
 */
let http = require('http');
let optFile = require('./OptFile');
const hostName = '127.0.0.1';
const port = 8080;

http.createServer((req,res) => {
  res.writeHead(200,{'ConTent-Type':'image/jpeg'});
  if(req.url !== '/favicon.ico'){
    optFile.readImg('img/default.png',res);
  }
}).listen(port,hostName,() => {
  console.log(`服务器运行在 http://${hostName}:${port}`);
});