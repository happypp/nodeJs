let fs = require('fs');
module.exports = {
  writeFileSync : function (path,data) { //同步写文件
    fs.writeFileSync(path,data,'UTF-8');
  },
  writeFile : function (path,data,reCall) { //同步读取文件
    fs.writeFile(path,data,function (err) {
      if(err){
        throw err;
      }
      console.log('It is saved');
      reCall(data);
    })
  },
  readFile : function (path,reCall) {
    fs.readFile(path,'UTF-8',function (err, data) {
      if(err){
        throw err;
      }
      console.log(data.toString());
      reCall(data);
    })
  }
};