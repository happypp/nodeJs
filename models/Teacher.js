let user = require('./User');
Teacher = function(id,name,age){
  user.apply(this,[id,name,age]); //js继承的写法
  this.teacher = (res) => {
    res.write(this.name + '在讲课');
  };
};

module.exports = Teacher;