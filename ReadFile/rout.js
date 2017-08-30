let optFile = require('./OptFile');

module.exports = {

  login : function (req, res, path) {
    reCall = (data) => {
      res.write(data);
      res.end();
    }; //闭包函数，用于回调
    optFile.readFile('./' + path + '.html',reCall);
  },
  zhuce :　function (req, res, path) {
    reCall = (data) => {
      res.write(data);
      res.end();
    }; //闭包函数，用于回调
    optFile.readFile('./' + path + '.html',reCall);
  }
};
