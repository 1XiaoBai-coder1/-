// 函数柯里化是个什么东西
// 函数柯里化使用的场景是什么
// 你才好手写

function curry(fn,...preargs){
    return (...args)=>{
        let allArgs=[...preargs,...args]
        if(allArgs.length<fn.length){
            return curry(fn,...allArgs)
        }else{
            return fn(...allArgs)
        }
    }
}

// 测试
const add=(a,b,c)=>{
    return a+b+c
}
let res=curry(add,1)
// let m=curry(add)
console.log(res(2)(3));
console.log(curry(add)(1)(2,3),curry(add)(1)(2)(3),curry(add)(1, 2, 3),curry(add)(1, 3)(2));

