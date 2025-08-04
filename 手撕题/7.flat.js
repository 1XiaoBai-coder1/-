// es6写法
function myFlat(obj,depth=1){
    return flat(obj,depth)
}
// 其他写法

// 数组扁平化

// 默认depth为1
function myFlat(arr,depth=1){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i]) && depth>0){
            res.push(...myFlat(arr[i],depth-1))
        }else{
            res.push(arr[i])
        }
    }
    return res
}

// 测试
// const arr = [1, [2, 3, 4], [5], [[6, [7, 8, [9]]]]];
// console.log(myFlat(arr,Infinity));
// console.log(myFlat(arr,2));


// 对象扁平化
function flat3(obj,parentKey='',result={}){
    
    for(const key in obj){
        // obj.hasOwnProperty(key)这样写的
        if(obj.hasOwnProperty(key)){
            let newKey=parentKey?`${parentKey}.${key}`:key
            if(obj[key]!==null && typeof obj[key]=='object' && !Array.isArray(obj[key])){
                // 是对象
                flat3(obj[key],newKey,result)
            }else{
                result[newKey]=obj[key]
            }
            }
    }
    return result
}

// 测试
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(flat3(source));



