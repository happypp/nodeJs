let fs = require('fs');
module.exports = {
  readFileSync : function (path) {   //同步读取
    let readFileSync = fs.readFileSync(path,'utf-8');
    console.log(readFileSync);
    console.log('同步方法执行完毕');
    return readFileSync;
  },
  readFile : function (path,reCall) {    //异步读取
    fs.readFile(path,'Utf-8',function(err,data){
        if(err){
          console.log(err);
        }else {
          console.log(data.toString());
          reCall(data);
        }
    });
    console.log("异步方式执行完毕");
  }
};