// 1、【准备】打开网页创建【网页顶部加载进度条】进度10%；
var nprogress=document.createElement('div')
nprogress.style.position='fixed'
nprogress.style.width='0%'
nprogress.style.height='5px'
nprogress.style.backgroundColor='#29d'
nprogress.style.left='0px'
nprogress.style.top=0
document.body.appendChild(nprogress)
var nprogressRadius=document.createElement('div')
nprogressRadius.className='nprogressRadius'
document.body.appendChild(nprogressRadius)
// 2、【定时器】定义num变量默认0，每隔10ms ++ 作为【网页顶部加载进度条】进度
var num=0
var over=false
var t=setInterval(function(){
    
    if(num>=95 && !over) return
    num++
    nprogress.style.width=num+'%'
    
    if(num>=105){
        document.body.removeChild(nprogress)
        document.body.removeChild(nprogressRadius)
        clearInterval(t)
    }
},20)
window.onload=function(){
    over=true
}
// 3、【判断】如果【网页顶部加载进度条】已存在直接修改【进度】无需重复创建

// 4、【判断】进度100%  也就是 【num>=100】则【1-移除DOM】【2-清除定时器】

// 5、【优化1】网页未加载完毕，暂停操作进度条

// > 类似于龟兔赛跑
// >
// > 兔子🐰进度>95%就暂停睡觉
// >
// > 乌龟🐢走到重点结束后，兔子再走

// 6、【优化2】网页右上角增加一个旋转盒模型