const parseUrl=(url)=>{
    const tempUrl=url.split('?')[1]
    let resObj={}
    for(let str of tempUrl.split('&')){
        let [key,value]=str.split('=')
        // 注意，value可能为中文对吧，所以要转义一下
        value=decodeURIComponent(value)
        if(resObj.hasOwnProperty(key)){
            resObj[key]=[].concat(resObj[key],value)
        }else if(!value){
            resObj[key]=true
        }else{
            resObj[key]=value
        }
    }
    return resObj
}
const url = "https://mix.com?type=book&type=movie&author=鲁迅&enable&filter=price%26sort%3Fdesc"
console.log(parseUrl(url))