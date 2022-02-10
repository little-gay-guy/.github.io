setInterval(function (){
    var ulObj=document.querySelector('.hot ul')
    var mL=parseInt(ulObj.style.marginLeft)
    var liObj=document.querySelector('.hot ul li:nth-of-type(1) ')
    mL--
    if(mL<=-2026){
        ulObj.style.marginLeft='0px'
    }else{
            ulObj.style.marginLeft=mL+'px'
        }
    
},10)