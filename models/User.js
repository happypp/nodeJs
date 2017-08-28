/**
 * Created by pp on 2017/8/28.
 */
User = function(id,name,age){
  this.id = id;
  this.name = name;
  this.age = age;
  this.enter = function () {
    console.log(this.name + '进入图书馆！');
  };
};
module.exports = User;