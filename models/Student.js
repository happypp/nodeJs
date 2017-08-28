let user = require('./User');

Student = function (id, name, age) {
  user.apply(this,[id,name,age]);
  this.student = function (res) {
    res.write(this.name + '在学习');
  }
};
module.exports = Student;