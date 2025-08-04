// 手写instanceof
function myInstanceof(left,right){
    const prototype=right.prototype
    let proto=Object.getPrototypeOf(left)
    while(proto!==prototype){
        if(proto==null) return false
        proto=Object.getPrototypeOf(proto)
    }
    return true
}

// obj instanceof Object

// 测试
let arr=[]
console.log(myInstanceof(arr,Array));
console.log(myInstanceof(arr,Object));
console.log(myInstanceof(arr,Function));