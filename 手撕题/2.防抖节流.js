// 防抖 debounce
// 为啥写成函数包函数的形式？
// 可以理解为myDebounce是一个 "工厂函数"，专门用来创建具有防抖功能的新函数，职责单一，防止全局变量污染
function myDebounce(fn,delay){
    let timer=null
    const _debounce=()=>{
        if(timer){
            clearTimeout(timer)
        }
        // 这里没有else分支，每次进入都需要重新设置定时器
        timer=setTimeout(()=>{
            fn()
        },delay)
    }
    return _debounce
}

// 防抖测试
// function print(){
//     console.log('1111');
    
// }
// const test=myDebounce(print,2000);
// test()
// setTimeout(()=>{
//     test()
// },1000)
// test()
// 节流 throttle

function myThrottle(fn,delay){
    let timer=0
    const _throttle=()=>{
        let now=Date.now()
        if(now-timer>=delay){
            timer=now
            fn()
        }
    }
    return _throttle
}
// 节流测试
// function print(){
//     console.log('1111');
    
// }
// // 只打印一次
// const test=myThrottle(print,2000);
// test()
// setTimeout(()=>{
//     test()
// },1000)
// test()


// function debounce(func, delay) {

//   // 这里使用了闭包，所以 timer 不会轻易被销毁
//   let timer = null

//   // 生成一个新的函数并返回
//   return function (...args) {
//     // 清空定时器
//     if (timer) {
//       clearTimeout(timer)
//     }
//     // 重新启动定时器
//     timer = setTimeout(() => {
//       func.call(this, ...args)
//     }, delay)
//   }
// }

// function throttle(func, delay) {
//   let timer = null
//   // 在 delay 时间内，最多执行一次 func
//   return function (...args) {
//     if (!timer) {
//       timer = setTimeout(() => {
//         func.call(this, ...args)
//         // 完成一次计时，清空，待下一次触发
//         timer = null
//       }, delay)
//     }
//   }
// }
