// // 借用构造函数继承
// 简单理解就是，原型链继承的数据，是共享父类的数据，一改全变化
// 所以借用构造函数继承，其实就是，可以通过借用父类的做蛋糕的“配方”，来做属于“自己的”蛋糕
function person(name){
    this.name=name
}
// console.log(person.prototype.constructor===person);
person.prototype.sing=function (){
    console.log(this.name+'在唱歌');
    
}
function student(name){
    person.call(this,name)
}
// console.log(student.prototype.constructor);

let stu1=new student('小明')
let stu2=new student('小红')

console.log(stu1.constructor);
// 这个继承方式没办法继承父类的方法
// console.log(stu1.sing());
stu1.name='小白'
console.log(stu1,stu2);
