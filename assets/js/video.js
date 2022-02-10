// var cols=[
//     {left:0,top:0},
//     {left:254,top:0},
//     {left:254*2,top:0},
//     {left:254*3,top:0}
// ]


// for(var num=1;num<=56;num++){
//     var liObj=document.createElement('li')
//     liObj.innerHTML=`
//     <div>
//             <img src="./assets/imgs2/${num}.jpg" alt="">
//         </div>
//         <span>${num} 初秋絮语，用音乐记下你的点点滴滴</span>
//         <p>
//             <i class="iconfont icon-aixin"></i>${num}${num}.6w喜欢
//         </p>`
//     liObj.style.position='absolute'

    
//     document.querySelector('.video ul').appendChild(liObj)
//     liObj.querySelector('img').onload=function(){
//         var minHeightIndex=0
//         cols.forEach(function(item,i){
            
//             if(cols[minHeightIndex].top>item.top){
//                 minHeightIndex=i
//             }
//         })
//         liObj.style.display='block'
//         liObj.style.left=cols[minHeightIndex].left+'px'
//         liObj.style.top=cols[minHeightIndex].top+'px'
//         cols[minHeightIndex].top+=liObj.offsetHeight
//     }

// }

// JS-追加图片
// JS-更改图片位置
let cols = [
    {left:0, top: 0},
    {left:254, top: 0},
    {left:254*2, top: 0},
    {left:254*3, top: 0},
]
var videoHeight=0
function waterfull(){
    for (let num=1; num<=56; num++) 
{
    // 循环里面造li标签 - 追加到页面即可
    let liObj = document.createElement('li')
    liObj.style.position = 'absolute'
    liObj.style.display = 'none'
    liObj.innerHTML = `
        <div>
            <img src="./assets/imgs2/${num}.jpg" alt="">
        </div>
        <span>${num} 初秋絮语，用音乐记下你的点点滴滴</span>
        <p>
            <i class="iconfont icon-aixin"></i>${num}${num}.6w喜欢
        </p>
    `
    document.querySelector('.video ul').appendChild(liObj)
 

    liObj.querySelector('img').onload = function() {
        let minHeightIndex =  0
        cols.forEach((item,i) => {
            if (cols[minHeightIndex].top > item.top)
            {
                minHeightIndex = i
            }
        })
        liObj.style.display = 'block' 
        liObj.style.left = cols[minHeightIndex].left + 'px'
        liObj.style.top = cols[minHeightIndex].top + 'px'
        cols[minHeightIndex].top += liObj.offsetHeight    // 留心：上面已经把图片加载到页面但是不以为着图片已经加载完毕 所以获取不到最新图片高度
        videoHeight=col[minHeightIndex].top
    }
 
    }
}

window.onscroll=function(){
    var clientH=window.innerHeight|| document.documentElement.clientHeight
    var scrollTop=document.body.scrollTop ||document.documentElement.scrollTop
    if(clientH+scrollTop>=videoHeight){
        waterfull()
    }
}


window.addEventListener('load',waterfull)
// 循环打印1-56




