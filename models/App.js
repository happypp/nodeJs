let http = require('http');
let user = require('./User');
let teacher = require('./Teacher');
let student = require('./Student');

const hostName = '127.0.0.1';
const port = 8080;
http.createServer((req,res) => {
  res.writeHead(200,{'Content-Type':'text/html'});
  if(req.url !== '/favicon.ico'){
    user = new User(1,'张三',20);
    user.enter();
    teacher = new Teacher(2,'happy-pp',24);
    teacher.enter();
    teacher.teacher(res);
    student = new Student(3,'happy_code',21);
    student.enter();
    student.student(res);
    res.end('');
  }
  console.log(req.url);
}).listen(port,hostName,() => {
  console.log(`服务器运行在 http://${hostName}:${port}`);
});