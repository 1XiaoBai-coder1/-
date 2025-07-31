// 把平铺的数组转化为树形结构

  // {id:'01',name:"爷爷",pid:''},
  // {id:'02',name:"爸爸",pid:'01'},
  // {id:'02',name:"儿子",pid:'02'},
  // {id:'04',name:"女儿",pid:'02'},
const arr = [
  { id: "01", name: "张大大", pid: "", job: "项目经理" },
  { id: "02", name: "小亮", pid: "01", job: "产品leader" },
  { id: "03", name: "小美", pid: "01", job: "UIleader" },
  { id: "04", name: "老马", pid: "01", job: "技术leader" },
  { id: "05", name: "老王", pid: "01", job: "测试leader" },
  { id: "06", name: "老李", pid: "01", job: "运维leader" },
  { id: "07", name: "小丽", pid: "02", job: "产品经理" },
  { id: "08", name: "大光", pid: "02", job: "产品经理" },
  { id: "09", name: "小高", pid: "03", job: "UI设计师" },
  { id: "10", name: "小刘", pid: "04", job: "前端工程师" },
  { id: "11", name: "小华", pid: "04", job: "后端工程师" },
  { id: "12", name: "小李", pid: "04", job: "后端工程师" },
  { id: "13", name: "小赵", pid: "05", job: "测试工程师" },
  { id: "14", name: "小强", pid: "05", job: "测试工程师" },
  { id: "15", name: "小涛", pid: "06", job: "运维工程师" },
];

// 解法一 暴力 在数组中找哪个的id等于我的pid O（n2）
// function toTree(list, parId) {
//   const loop=(parId)=>{
//     let res=[]
//     for(let i=0;i<list.length;i++){
//       let item=list[i]
//       if(item.pid=parId){
//         res.push(item)
//         item.children=loop(item.id)
//       }
//     }
//     return res
//   }
//   return loop(parId)
// }

// 解法二 哈希 两次遍历解决O(n2)
function toTreeHash(list){
  // 两次遍历，第一次遍历根据pid，装入hash数据结构，第二次遍历就是形成树
  const map=new Map()
  for(let i=0;i<list.length;i++){
    if(!map.has(list[i].id)){
      map.set(list[i].pid,[list[i]])
    }else{
      // 这里不是浅拷贝也不是深拷贝，而是list[i]对象的引用存储到了不同的地方——map和list里面
      map.get(list[i].pid).push(list[i])
    }
  }
  for(let i=0;i<list.length;i++){
    if(map.has(list[i].id)){
      list[i].children=map.get(list[i].id)
    }
  }
  return list
}

// let result = toTree(arr, "");
let result=toTreeHash(arr)
console.log(result);
