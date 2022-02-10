var swiper=[
    {x:-60,s:.83,z:1},
    {x:140,s:1,z:2},
    {x:338,s:.83,z:1},
    {x:960,s:.83,z:1},
    {x:960,s:.83,z:1},
    {x:960,s:.83,z:1}
]
var swiperDivObjs=document.querySelectorAll('.swiper .swiper-wrapper .swiper-slide')
console.log(swiperDivObjs);
function public(){
    swiperDivObjs.forEach(function(item,i){
        item.style.transform='translateX('+swiper[i].x+'px) scale('+swiper[i].s+')'
        item.style.zIndex=swiper[i].z
    })
}
public()

function next(){
    var lastDate=swiper.pop()
    swiper.unshift(lastDate)
    public()
}
function prev(){
    var lastDate=swiper.shift()
    swiper.push(lastDate)
    public()
}
// next()
// console.log(swiper);

var swiperNext=document.querySelector('.swiper .swiper-next')
swiperNext.onclick=function(){
    next()
    
}
var swiperPrev=document.querySelector('.swiper .swiper-prev')
swiperPrev.onclick=function(){
    prev()
}

var ts=setInterval(function(){
    next()
    public()
},2000)

document.querySelector('.swiper').onmouseover=function(){
    clearInterval(ts)
}
document.querySelector('.swiper').onmouseout=function(){
    ts=setInterval(function(){
        next()
        public()
    },2000)
    
}
var swiperDivObjs=document.querySelectorAll('.swiper .swiper-wrapper .swiper-slide')
swiperDivObjs.forEach(function(item){
    item.onclick=function(){
        var style=item.style.transform
        
        if(style.indexOf('60') !=-1) prev()
        if(style.indexOf('338') !=-1) next()
    }
})
