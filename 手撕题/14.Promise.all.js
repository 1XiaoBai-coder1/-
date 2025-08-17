// 手写promise.all
function myPromiseAll(promises){
    let results=[]
    let completed=0
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then(value=>{
                results[index]=value
                completed++
                if(promises.length==completed){
                    resolve(results)
                }
            },reason=>{
                reject(reason)
            })
        })
    })
}
// 3个异步操作（用setTimeout模拟）
const p1 = new Promise(resolve => setTimeout(() => resolve("第一个完成"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("第二个完成"), 2000));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject("第三个失败了"), 1500));

// 使用自己写的myPromiseAll
myPromiseAll([p1, p2, p3])
  .then(results => console.log("全部成功:", results))
  .catch(error => console.log("有失败:", error)); // 输出："有失败: 第三个失败了"


// 手写promise.allSettled
function myPromiseAllSettled(promises){
    let results=[]
    let completed=0
    return new Promise((resolve)=>{
        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then(value=>{
                results[index]={status:'fulfilled',value}
                completed++
                if(promises.length==completed){
                    resolve(results)
                }
            },reason=>{
                results[index]={status:'rejected',reason}
                completed++
                if(promises.length==completed){
                    resolve(results)
                }
                // reject(reason)
            })
        })
    })
}
myPromiseAllSettled([p1, p2, p3])
  .then(results => console.log("全部成功:", results))
  .catch(error => console.log("有失败:", error));