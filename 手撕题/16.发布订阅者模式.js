class EventEmitter{
    constructor(){
        this.eventList={}
    }
    on(eventName,callBack){
        if(!this.eventList[eventName]){
            this.eventList[eventName]=[]
        }
        this.eventList[eventName].push(callBack)
    }
    emit(eventName,...args){
        if(!this.eventList[eventName]) return
        for(const callBack of this.eventList[eventName]){
            callBack(...args)
        }
    }
    off(eventName,callBack){
        if(!this.eventList[eventName]) return
        // 因为filter返回新的数组
        this.eventList[eventName]=this.eventList[eventName].filter(fn=>fn!==callBack)
    }
}


const eventBus = new EventEmitter();

// 小明订阅了“前端干货”事件（关注公众号）
function xiaomingReceive(content) {
  console.log(`小明收到新文章：${content}`);
}
eventBus.on('前端干货', xiaomingReceive);

// 小红也订阅了“前端干货”事件
function xiaohongReceive(content) {
  console.log(`小红收到新文章：${content}`);
}
eventBus.on('前端干货', xiaohongReceive);

// 公众号发布新文章（发布事件）
eventBus.emit('前端干货', '《3分钟学会发布订阅模式》'); 
// 输出：
// 小明收到新文章：《3分钟学会发布订阅模式》
// 小红收到新文章：《3分钟学会发布订阅模式》

// 小红取消订阅（取消关注）
eventBus.off('前端干货', xiaohongReceive);

// 公众号再发一篇
eventBus.emit('前端干货', '《JavaScript必学技巧》'); 
// 输出：
// 小明收到新文章：《JavaScript必学技巧》（小红没收到了）