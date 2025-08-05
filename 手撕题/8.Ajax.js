const xhr=new XMLHttpRequest()
// 初始化请求，method，url，async
let method = "GET"
let url = "https://developer.mozilla.org/"
xhr.open(method,url,true)
xhr.onreadystatechange=function(){
    if(this.readyState!==4) return
    if(this.status==200){
        console.log(this.responseText);
    }else{
        throw new Error(xhr.statusText)
    }
}
// 发送请求
xhr.send()

// 静态属性，只能通过XMLHttpRequest.UNSENT这种调用
// 0：未初始化（UNSENT）
// 1：已调用 open () 方法（OPENED）
// 2：已调用 send () 方法（HEADERS_RECEIVED）
// 3：正在接收响应（LOADING）
// 4：请求完成（DONE）