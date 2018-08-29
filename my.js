window.onload=function(){
    var aBigicon=document.querySelector(".page01 .home .container .home_top .address_box");
    var aIcon=document.querySelector('.page01 .home .container .home_top .address_box .icon_address')
    var aPlace=document.querySelector('.page01 .home .container .home_top .address_box .address_place');
    aBigicon.onmouseover=function(){
        aIcon.setAttribute('class','icon_address aBorder');
        aPlace.style.display="block";
        aIcon.style.backgroundImage="url(./images/icon_dorn2.png)";
      
    }
    aBigicon.onmouseout=function(){
        aIcon.setAttribute('class','icon_address');
        aPlace.style.display="none";
        aIcon.style.backgroundImage="url(./images/icon_dorn.png)";
    }

    var second_list=document.querySelector(".page01 .home .container .home_bottom .menu_box .second_list");
    var ali=document.querySelectorAll(".page01 .home .container .home_bottom .menu_box .first_list ul li");
    var box_list=document.querySelector(".page01 .home .container .home_bottom .menu_box .box_list");
    var triangle=document.querySelector(".page01 .home .container .home_bottom .menu_box .first_list ul li .triangle"); 
    var menu_box=document.querySelector(".page01 .home .container .home_bottom .menu_box");
    var first_list=document.querySelector(".page01 .home .container .home_bottom .menu_box .first_list");  
    var aul=document.querySelectorAll(".page01 .home .container .home_bottom .menu_box .second_list div ul");
    var aDiv=document.querySelectorAll(".home .container .home_bottom .menu_box .second_list div");
    

    var str = '<li>'+
                '<dl>'+
                   '<dt>中学</dt>'+
                    '<dd>'+
                        '<a href="">中学数学</a>'+
                        '<a href="">中学英语</a>'+
                        '<a href="">中学语文</a>'+
                        '<a href="">中学奥数</a>'+
                        '<a href="">中学陪读</a>'+
                        '<a href="">陪读陪玩</a>'+
                        '<a href="">学前教育</a>'+
                        '<a href="">幼教</a>'+  
                    '</dd>'+                                                                 
                '</dl>'+'<li>';
                
    var two_dl=document.createElement("li");
    two_dl.innerHTML=str;
    aul[0].appendChild(two_dl);

    var str1= '<li>'+'<dl>'+
                  '<dt>中学</dt>'+
                  '<dd>'+
                      '<a href="">中学数学</a>'+
                      '<a href="">中学英语</a>'+
                      '<a href="">中学语文</a>'+
                      '<a href="">中学奥数</a>'+
                      '<a href="">中学陪读</a>'+
                      '<a href="">陪读陪玩</a>'+
                      '<a href="">学前教育</a>'+
                      '<a href="">幼教</a>'+  
                  '</dd>'+                                                                 
                '</dl>'+'<li>';
    
    var str2='<li>'+'<dl>'+
               '<dt>大学</dt>'+
               '<dd>'+
                   '<a href="">大学数学</a>'+
                   '<a href="">大学英语</a>'+
                   '<a href="">大学语文</a>'+
                   '<a href="">大学奥数</a>'+
                   '<a href="">大学陪读</a>'+
                   '<a href="">陪读陪玩</a>'+
                   '<a href="">学前教育</a>'+
                   '<a href="">幼教</a>'+  
               '</dd>'+                                                                 
              '</dl>'+'<li>';

    

    for(var i=0;i<aul.length;i++){
        var two_dl01=document.createElement("li");
        two_dl01.innerHTML= str +str1;
        aul[i].appendChild(two_dl01);
    }
    
    
    
  
    

    

    

     //大盒子移入时一级菜单显示
     menu_box.onmouseover=function(){
        first_list.style.display="block";
    }
    menu_box.onmouseout=function(){
        first_list.style.display="none";
    }
    //一级菜单移入时二级菜单显示
    box_list.onmouseover=function(){
        second_list.style.display="block";
    }
    box_list.onmouseout=function(){
        second_list.style.display="none";
    }

    //移动至相应一级菜单时，相应的二级菜单显示
    for(var i=0;i<ali.length;i++){
        ali[i].index=i;
        ali[i].onmouseover=function(){
            for(var i=0;i<aul.length;i++){
                aul[i].style.display="none";
            }
            aul[this.index].style.display="block";
            this.querySelector(".triangle").style.display="block";
            this.style.backgroundColor="#000";
            
        }
        ali[i].onmouseout=function(){
            this.style.backgroundColor="";
            this.querySelector(".triangle").style.display="none";          
        }
    }



    //二级菜单移入时相应的一级菜单变换背景颜色
    for(var i=0;i<aDiv.length;i++){
        aDiv[i].index=i;        
        aDiv[i].onmouseover=function(){
            for(var i=0;i<aDiv.length;i++){
                ali[i].style.backgroundColor="";
                ali[i].querySelector(".triangle").style.display="none";
            }
            ali[this.index].style.backgroundColor="#000";
            ali[this.index].querySelector(".triangle").style.display="block";
           
        }
        aDiv[i].onmouseout=function(){            
            ali[this.index].style.backgroundColor="";
            ali[this.index].querySelector(".triangle").style.display="none";          
        }
    }
    //固定导航栏
    function scroll(){
        if(document.documentElement.scrollTop){
            return {
                top:document.documentElement.scrollTop,
                left:document.documentElement.scrollLeft
            }                  
        } 
        else{
            return{
                top:document.body.scrollTop,
                left:document.body.scrollLeft
            }            
        }
    }
   function $(id,all){
       return id==""?document.querySelectorAll(all):document.querySelector(id);
   }

   var H=$(".nav").offsetTop;
   window.onscroll=function(){
       var h=scroll().top;
       if(h > H){
           $(".nav").setAttribute("class","nav_fixed nav");
       }
       else{
           $(".nav").className="nav";
       }
      
   }

   //微信二维码
   $(".weixin").onmouseover=function(){
       $(".erweima").style.display="block";
   }
   $(".weixin").onmouseout=function(){
       $(".erweima").style.display="none";
   }

   //返回顶部
   var speed=0,timer;
   function sudu(itarget){
    clearInterval(timer);
    timer=setInterval(function(){
        speed=(itarget-scroll().top)/5;
        speed>0 ? Math.ceil(speed) : Math.floor(speed);
        scrollTo(0,scroll().top+speed); 
        if(!speed){clearInterval(timer)}
    },30)
    

}
   $(".arrow").onclick=function(){
      sudu(0);
   }
}
