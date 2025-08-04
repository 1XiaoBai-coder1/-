
// 浅拷贝
function shallowCopy(obj){
    const newObj={}
    for(const key in obj){
        // 由于for in 默认遍历的是包含继承的属性，
        // 实际开发中不太需要拷贝继承的属性，所以
        if(obj.hasOwnProperty(key)){
            newObj[key]=obj[key]
        }
    }
    return newObj
}
// 深拷贝
function deepCopy(obj){
    if(!obj || typeof obj !=="object") return obj
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof RegExp) return new RegExp(obj)
    if(obj instanceof Function) return function(...args){
        // 这个this是新的newObj
        return obj.call(this,...args)
    }
    // 有可能拷贝的是数组,所以初始化时要考虑
    const newObj=Array.isArray(obj)?[]:{}
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] instanceof Object){
                newObj[key]=deepCopy(obj[key])
            }else{
                newObj[key]=obj[key]
            }
        }
    }
    return newObj
}

// 测试案例
// // 测试1：基本类型拷贝（数字、字符串、布尔值）
// const baseObj = {
//   num: 100,
//   str: "hello",
//   bool: true,
//   nil: null,
//   undef: undefined
// };

// const shallowBase = shallowCopy(baseObj);
// const deepBase = deepCopy(baseObj);

// // 修改拷贝后的值，原对象应不受影响（基本类型是值传递）
// shallowBase.num = 200;
// deepBase.str = "world";
// console.log("测试1-原对象：", baseObj.num, baseObj.str); // 100, "hello"（未被修改）
// console.log("测试1-浅拷贝：", shallowBase.num); // 200
// console.log("测试1-深拷贝：", deepBase.str); // "world"


// // 测试2：普通对象拷贝（浅拷贝会共享引用，深拷贝会完全隔离）
// const obj = {
//   a: { x: 1, y: 2 },
//   b: 3
// };

// const shallowObj = shallowCopy(obj);
// const deepObj = deepCopy(obj);

// // 修改浅拷贝的嵌套对象
// shallowObj.a.x = 100;
// // 修改深拷贝的嵌套对象
// deepObj.a.x = 200;

// console.log("测试2-原对象：", obj.a.x); // 100（被浅拷贝修改影响）
// console.log("测试2-浅拷贝：", shallowObj.a.x); // 100
// console.log("测试2-深拷贝：", deepObj.a.x); // 200（不影响原对象）


// // 测试3：数组拷贝（浅拷贝共享数组元素引用，深拷贝完全隔离）
// const arrObj = {
//   list: [1, 2, { z: 3 }],
//   len: 3
// };

// const shallowArr = shallowCopy(arrObj);
// const deepArr = deepCopy(arrObj);

// // 修改浅拷贝的数组元素（引用类型）
// shallowArr.list[2].z = 300;
// // 修改深拷贝的数组元素（引用类型）
// deepArr.list[2].z = 400;

// console.log("测试3-原对象：", arrObj.list[2].z); // 300（被浅拷贝修改影响）
// console.log("测试3-浅拷贝：", shallowArr.list[2].z); // 300
// console.log("测试3-深拷贝：", deepArr.list[2].z); // 400（不影响原对象）
