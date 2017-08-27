const http = require("http");
const otherFun = require("./OtherFun");
const hostName = "127.0.0.1";
const port = 8080;
const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type','text/plain');
  res.writeHead(200,{'Content-Type': 'text/html'});
  // console.log("访问~");
  // res.write("你好~！");
  fun1(res);
  otherFun.fun3(res);
  // otherFun['fun2','fun3'](res);这种一次调用多次不行的
  //好处是以字符串的方式，可以动态传入
  otherFun['fun2'](res); //调用一个是可以的
  res.end("Hello Node Js\n"); //输出的值必须要有end否则浏览器会一直处于刷新状态
}).listen(port,hostName,() => {
  console.log(`服务器运行在 http://${hostName}:${port}`);
});
//调动函数
fun1 = (res) => {
  console.log("fun1");
  res.write("方法1调用测试\n");
};