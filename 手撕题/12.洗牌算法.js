// Math.random()属于[0,1)
function shuffle(arr){
    let newArr=[...arr]
    for(let i=newArr.length-1;i>=0;i--){
        // j属于[0,arr.length-1]
        const j=Math.floor(Math.random()*(i+1))
        // 使用临时变量避免解构赋值的初始化问题
        // [newArr[i],newArr[j]]=[newArr[j],newArr[i]]
        const temp = newArr[i]
        newArr[i] = newArr[j]
        newArr[j] = temp
    }
    return newArr
}

// 测试
const arr=[1,23,4,5,4,3,4]
console.log(shuffle(arr));
