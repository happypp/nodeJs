/**
 * Created by pp on 2017/9/11.
 */
let optfile = require('./optfile');
let url = require("url");
var  queryString = require('querystring');  //post需导入
getRecall = (req,res,post) => {
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  recall = (data) => {
    // res.write(data);
    //实现将参数动态绑定到HTML页面上
    let dataStr = data.toString();
    let arr = ['email','pwd'];
    for (let i = 0; i < arr.length; i++){
      let re = new RegExp('{' + arr[i] + '}','g');
      console.log(post[arr[i]]);
      dataStr = dataStr.replace(re,post[arr[i]]);
    }
    res.write(dataStr);
    res.end('');//不写则没有http协议尾
  };
  return  recall;
};
module.exports = {
  login : function (req,res) {
    //get 方式获取参数
    let rdata = url.parse(req.url,true).query;
    console.log(rdata);
    if(rdata['email']!=undefined){
      console.log(rdata['email']);
      console.log(rdata['pwd']);
    }
    //post方式获取参数
    let post = "";
    req.on('data',(chunk) => {
      post += chunk;
    });
    req.on('end',() => {
      post = queryString.parse(post);
      console.log("email:" + post['email']);
      console.log("pwd:" + post['pwd']);

      recall = getRecall(req,res,post);
      optfile.readFile("./login.html",recall)
    });
  },
  regist : function (req,res) {

  }
};
