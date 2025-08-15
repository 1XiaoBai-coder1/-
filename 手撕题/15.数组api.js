// map
// map() 方法创建一个[新数组]，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
Array.prototype.map=function (fn){
    let res=[]
    for(let i=0;i<this.length;i++){
        res.push(fn(this[i]))
    }
    return res
}
let arr=[1,2,3,4]
console.log(arr.map(x=>x*2));

// filter 得到一个新数组
Array.prototype.filter=function (fn){
    let res=[]
    for(let i=0;i<this.length;i++){
        fn(this[i]) && res.push(this[i])
    }
    return res
}

console.log(arr.filter(x=>x>2));

// reduce  注意处理有无初始值的两种情况
Array.prototype.reduce=function (fn,initValue){
    let start=0
    let res=0
    if(arguments.length>1){
        res=initValue
    }else{
        res=this[0]
        start=1
    }
    for(let i=start;i<this.length;i++){
        res=fn(res,this[i])
    }
    return res
}
console.log(arr.reduce((a,b)=>a+b));
console.log(arr.reduce((a,b)=>a+b,5));

