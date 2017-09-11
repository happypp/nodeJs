let fs = require("fs");

module.exports = {
  readFile : function (path,reCall) {
    fs.readFile(path,"utf-8",function (err, data) {
      if(err){
        // throw err;  //异步抛出异常，主程序中的try捕获不到异常。使用回调方法将其抛出
        reCall(err.toString());
      }else {
        reCall(data);
      }
    });
  }
};
