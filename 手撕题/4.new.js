// 手写new 四个步骤
// 创建空对象，将构造函数的属性方法给这个空对象，将this绑定到空对象上，返回新对象
function myNew(fn,...args){
    if(Object.prototype.toString.call(fn)!=="[object Function]"){
        return "Error in params"
    }
    const obj={}
    Object.setPrototypeOf(obj,fn.prototype)
    let res=fn.apply(obj,args)
    // 构造函数返回的值是引用类型，就用这个，不然才返回新创建的obj
    return res instanceof Object?res:obj
}
function fn(name){
    this.name=name
    // return {age:18}
    return "hello"
}
const person=myNew(fn,'张三')
console.log(person);
