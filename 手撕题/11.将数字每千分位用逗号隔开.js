function formatNumber(num){
    // 如果不是数字或者不能转化为num
    if(typeof num !=='number' && isNaN(num)){
        return '0'
    }
    // 如果为负数
    const isNegative=num<0
    const absNum=Math.abs(num)
    // 将整数和小数分开
    const [integer,decimal]=absNum.toString().split('.')
    let formated=''
    let count=0
    for(let i=integer.length-1;i>=0;i--){
        // 记住这里不是+=，因为是从右到左的加了
        formated=integer[i]+formated
        count++
        if(count%3==0 && i!==0){
            formated=','+formated
        }
    }
    // 如果有小数
    if(decimal){
        formated+='.'+decimal
    }
    return isNegative?'-'+formated:formated
}

// 测试
console.log(formatNumber(1234)); // "1,234"
console.log(formatNumber(1234567)); // "1,234,567"
console.log(formatNumber(1234.567)); // "1,234.567"
console.log(formatNumber(-123456)); // "-123,456"
console.log(formatNumber(0)); // "0"