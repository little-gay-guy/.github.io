//拖拽登录框
var loginBtnObj=document.querySelector('.member div')
loginBtnObj.onclick=function(){
    var loginObj=document.querySelector('.login')
    loginObj.style.visibility='visible'

}
document.querySelector('.login .icon-close').onclick=function(){
    var loginObj=document.querySelector('.login')
    loginObj.style.visibility='hidden'
}
var menutzh=document.querySelector('.login .item .menu')
var itemtzh=document.querySelector('.login .item')
    menutzh.onmousedown=function(evt)
{   
    var oldE=evt || window.event
    document.onmousemove=function(evt){
        var e=evt || window.event
        var left=e.clientX-oldE.offsetX
        var top=e.clientY-oldE.offsetY
        if(left<0) left=0
        if(top<0) top=0
        maxleft=(window.innerWidth || document.documentElement.clientWidth)-itemtzh.offsetWidth
        maxtop=(window.innerHeight || document.documentElement.clientHeight)-itemtzh.offsetHeight
        if(left>maxleft) left=maxleft
        if(top>maxtop) top=maxtop
        itemtzh.style.position='absolute'
        itemtzh.style.left=left+'px'
        itemtzh.style.top=top+'px'
    }
    document.onmouseup=function(){
        document.onmousemove=null
    }
}


//验证码登录倒计时
var t
var num=5

var captchaBtn=document.querySelector('section.login .captcha')
captchaBtn.onclick=function(){
    var seCaptchaObj=document.querySelector('section.captcha')
    seCaptchaObj.style.visibility='visible'
    var tzhuaiBtnObj=document.querySelector('section.captcha .drag .btn')
    console.log(tzhuaiBtnObj)
    tzhuaiBtnObj.onmousedown=function(){
        document.onmousemove=function(evt1){
            var e1=evt1 || window.event
            // var left=e1.pageX-tzhuaiBtnObj.offsetWidth/2-seCaptchaObj.offsetLeft+seCaptchaObj.offsetWidth/2
            var left=e1.pageX-seCaptchaObj.offsetLeft+seCaptchaObj.offsetWidth/2
            // var left=e1.pageX-tzhuaiBtnObj.offsetWidth/2-445
            // var left2=e1.pageX-tzhuaiBtnObj.offsetWidth/2-445
            if(left>350) left=350
            if(left<0) left=0
            tzhuaiBtnObj.style.left=left+'px'
            var capImg2=document.querySelector('section.captcha .check img:nth-of-type(2)')
            capImg2.style.left=left+'px'
        }
        document.onmouseup=function(evt2){
            document.onmousemove=null
            // var e2=evt2 ||window.event
            // tzhuaiBtnObj.style.left=0
            var capImg2=(document.querySelector('section.captcha .check img:nth-of-type(2)'))
            if(parseInt(capImg2.style.left)>=255 && parseInt(capImg2.style.left)<=270){
                var seCaptchaObj=document.querySelector('section.captcha')
                seCaptchaObj.style.visibility='hidden'
                captchaBtn.innerText=num+'秒后触发'
    
                captchaBtn.disabled=true    //表单的disabled属性
                t=setInterval(function(){
                    
                    if(num<=1){
                        captchaBtn.innerText='重新发送'
                        clearInterval(t)
                        num=5
                        captchaBtn.disabled=false
                        return
                    } else{
                        num--
                        captchaBtn.innerText=num+'秒后触发'
                    }
                    
                },1000)  
            }else{
                var tzhuaiBtnObj=document.querySelector('section.captcha .drag .btn')
                var capImg2=document.querySelector('section.captcha .check img:nth-of-type(2)')
                capImg2.style.left='0px'
                tzhuaiBtnObj.style.left='0px'
            }
            }
        }

    }
    document.querySelector('section.captcha .icon-close').onclick=function(){
        var seCaptchaObj=document.querySelector('section.captcha')
        seCaptchaObj.style.visibility='hidden'
    }







   
//表单验证

var submitBtnObj=document.querySelector('.login .form .submit')
submitBtnObj.onclick=function(){
    var ipt1Obj=document.querySelector('.login .form .mobile')
    var ipt2Obj=document.querySelector('.login .form .password')
    var yanz1Obj=document.querySelector('.login .form p:nth-of-type(3)')
    var yanz2Obj=document.querySelector('.login .form p:nth-of-type(4)')
    var num=0
    //判断手机号是否为以1开头的11位数字
    if(ipt1Obj.value.length!==11 || ipt1Obj.value==''|| !Number(ipt1Obj.value) ){
        yanz1Obj.innerText='手机号码有误'
    }else{
        num++
        yanz1Obj.innerText=''
    }
    //判断验证码是否为4位数字
    if(ipt2Obj.value.length!==4 || ipt2Obj.value==''|| !Number(ipt2Obj.value)){
        yanz2Obj.innerText='验证码错误'
    }else{
        num++
        yanz2Obj.innerText=''
    }

    if (num==2) alert('登陆成功')
}

//