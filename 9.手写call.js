// function mycall(obj,fn,...args){
//     // fn.call(obj,...args)
//     // 怎么把fn的this给obj呢？
//     // 换一个思路试试
// }

Function.prototype.mycall=function(thisObj,...args){
    let key=Symbol()
    thisObj=Object(thisObj) || {}
    thisObj[key]=this
    let res=thisObj[key](...args)
    delete thisObj[key]
    return res
}

// 测试
// let obj={
//     name:'叶子',
//     grade:'100',
//     getGrade(){
//         console.log(this);
//         // console.log(111);
        
//     }
// }
// obj.getGrade()

function fn() { console.log(this.name); }
const obj = { name: '张三' };

fn.mycall(obj); 