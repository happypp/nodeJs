/**
 * Created by pp on 2017/8/27.
 */
//将多个函数提供给其他nodejs方式使用
module.exports = {
  fun2 : (res) => {
    res.write("我是fun2\n");
  },
  fun3 : (res) => {
    res.write("我是fun3\n");
  }
};