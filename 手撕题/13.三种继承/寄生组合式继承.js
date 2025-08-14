// 寄生组合式继承
// 首先是组合式继承
// function person(name){
//     this.name=name
// }
// person.prototype.sing=function (){
//     console.log(this.name+'会唱歌');
// }
// function student(name,number){
//     // 继承父类的属性
//     person.call(this,name)
//     // 自身属性number
//     this.number=number
// }
// // 继承父类的方法
// student.prototype=new person()
// student.prototype.constructor=student
// student.prototype.read=function (){
//     console.log(this.name+'会读书');
// }

// let stu1=new student('小明',1)
// let stu2=new student('小红',2)
// stu1.sing()
// stu1.read()
// console.log(stu1.name);
// stu1.name='小白'
// console.log(stu1.name,stu2.name);
// console.log(student.prototype);


// 再是寄生组合式继承
// 发现组合式继承，调用了两次父类构造函数，①person.call()    ② new person（） ,同时student.prototype不干净，student.prototype=new person()导致他有name属性(虽然没传，为undefined)
// 所以需要一个干净的父类构造函数副本
function person(name){
    this.name=name
}
person.prototype.sing=function (){
    console.log(this.name+'会唱歌');
}
function clearing(student,person){
    let clear=Object.create(person.prototype)
    student.prototype=clear
}
function student(name,number){
    // 继承父类的属性
    person.call(this,name)
    // 自身属性number
    this.number=number
}
// 继承父类的方法
// student.prototype=new person()
clearing(student,person)
student.prototype.constructor=student
student.prototype.read=function (){
    console.log(this.name+'会读书');
}

let stu1=new student('小明',1)
let stu2=new student('小红',2)
stu1.sing()
stu1.read()
console.log(stu1.name);
stu1.name='小白'
console.log(stu1.name,stu2.name);
console.log(student.prototype);
