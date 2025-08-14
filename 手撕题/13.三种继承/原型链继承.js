// 原型链继承
// 本质就是，将子类的原型指向父类的实例，子类就能继承父类的方法
// 先创建一个父类
// function dog(name){
//     this.name=name
// }
// dog.prototype.study=function (){
//     console.log('我可以吃骨头');
// }
// dog.prototype.read=function (){
//     console.log('我可以汪汪');
// }
// // 创建子类
// function newdog(name){
//     this.name=name
// }
// newdog.prototype=new dog()
// newdog.prototype.drink=function (){
//     console.log('我喜欢喝牛奶');
// }
// const tugou=new newdog()
// tugou.study()
// tugou.read()
// tugou.drink()
// 1. 先定义一个“父类”：狗


function dog(name) {
  this.name = name; // 每个狗都有自己的名字
}
// 给“狗”的原型（所有狗的共用老师）加两个本事
dog.prototype.wang = function() {
  console.log(this.name + '：汪汪！');
};
dog.prototype.yao = function() {
  console.log(this.name + '摇了摇尾巴～');
};

// 2. 定义“子类”：导盲犬
function newdog(name) {
  this.name = name; // 导盲犬也有自己的名字
}
// 关键步骤：让导盲犬的原型 指向 一个“狗”的实例
// 这样导盲犬就能通过原型链，找到“狗”的本事
newdog.prototype = new dog(); 
// 把这个constructor指向变到newdog上面，这样才对，“newdog”家的户口上在“newdog”家，而不是“dog”家
newdog.prototype.constructor=newdog

newdog.prototype.road = function() {
  console.log(this.name + '正在引路～');
};

// 3. 测试一下
const dog1 = new newdog('小白');

console.log(dog1.constructor);
dog1.wang(); // 输出：小白：汪汪！（继承自“狗”）
dog1.yao(); // 输出：小白摇了摇尾巴～（继承自“狗”）
dog1.road(); // 输出：小白正在引路～（自己的本事）


