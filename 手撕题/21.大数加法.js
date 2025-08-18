const BigIntAdd=(a,b)=>{
    a=''+a
    b=''+b
    let i=a.length-1
    let j=b.length-1
    let addOne=0
    let res=[]
    while(i>=0 || j>=0 || addOne>0){
        let numberA=i>=0?parseInt(a[i]):0
        let numberB=j>=0?parseInt(b[j]):0
        let sum=numberA+numberB+addOne
        res.push(sum%10)
        addOne=Math.floor(sum/10)
        i--
        j--
    }
    return res.reverse().join('')
}

console.log(BigIntAdd("123456789", "987654321")); 
// 输出："1111111110"（正确结果）

console.log(BigIntAdd("999999999999999999", "1")); 
// 输出："1000000000000000000"（正确结果）

console.log(BigIntAdd("123", "456789")); 
// 输出："456912"（正确结果）