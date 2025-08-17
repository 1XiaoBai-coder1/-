function isEqual(obj1,obj2){
    // 不全是对象，则直接比较
    if(typeof obj1 !== 'object' || typeof obj2 !=='object') return obj1===obj2
    // 地址相同
    if(obj1===obj2) return true
    let key1=Object.keys(obj1)
    let key2=Object.keys(obj2)
    if(key1.length!==key2.length) return false
    for(let key of key1){
        if(!isEqual(obj1[key],obj2[key])){
            return false
        }
    }
    return true
}
const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}
const obj2 = {
  a: 200,
  b: {
    x: 100,
    y: 200
  }
}
console.log(isEqual(obj1, obj2)) //false