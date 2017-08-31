let optFile = require('./OptFile');
module.exports = {
  write : function (req, res, path, data) {
    reCall = (data)=> {
      res.write(data);
      res.end();
    };
    let path1 = './' + path + '.html';
    let writeFile = optFile.writeFile(path1,data,reCall);
  },
  read : function (req, res) {
    reCall = (data)=> {
      res.write(data);
      res.end();
    };
    let path1 = './write.html';
    optFile.readFile(path1,reCall)
  }
};