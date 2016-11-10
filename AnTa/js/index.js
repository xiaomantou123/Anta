$(function(){

    //最顶部语言的划过效果；
    var Box_a = $("#box").find("h4").find("a");
    Box_a.hover(function(){
        Box_a.attr("class","");
        $(this).attr("class", "language");
    });

    //菜单栏划过时下拉菜单显示；
    var MenuLi = $("#menu").find("ul").find("li");
    var menuH = $("#menu").find("ul").find("li").eq(1).find(".menu_hover");       
    $.ajax({
        url:'json/menu.json',
        type:'GET',
        success:function(data){
            //克隆li里面的div
            for(var i = 2; i < 7; i++){
                var cloneDiv = menuH.clone();
                cloneDiv.appendTo(MenuLi.eq(i));
            }
            //获取ajax里的数据；
            var oDiv = $("#menu").find("ul").find("li").find(".menu_hover");
            var oBox = oDiv.find(".box");
            for(var i = 0; i < data.length; i++){
                for(var j = 0; j < data[i].type.length - 1; j++){
                    var clonePul = oBox.find(".Pul").eq(0).clone();
                    clonePul.appendTo(oBox.eq(i));
                }
                
                for(var k = 0; k < data[i].type.length; k++){
                    var oPul = oBox.eq(i).find(".Pul");
                    oPul.find("p").eq(k).html(data[i].type[k].title);
                    var html = "";
                    for(var t = 0; t <data[i].type[k].list.length; t++){
                        html += '<li><a href="html/runShoes.html">' + data[i].type[k].list[t].name + '</a></li>'
                    }
                    oPul.find("ul").eq(k).html(html);
                }
            }
            var menu_Li =  $("#menu").find(".out").find(".out_li");
            //alert(menu_Li.length)
            menu_Li.mouseenter(function(){
                var n = $(this).index();
                $(this).find(".menu_hover").css("display", "block");
                $(this).find(".menu_hover").find(".box").css("left",$(this).offset().left);
                if(n == 6){
                   $(this).find(".menu_hover").find(".box").css("left",'300px'); 
                }
            });
            menu_Li.mouseleave(function(){
                //var n = $(this).index() - 1;
                $(this).find(".menu_hover").css("display", "none");
            });
            
        }
    });



    //banner轮播图;
    var bn_oUl = $("#banner").find("ul");
    var oBtn = $("#banner").find("ol").find("li");
    var aLi = bn_oUl.find('li');
    //var _width = aLi.eq(0).css("width");
    //alert(_width)
    var iNow = 0;
    var timer = null;
    oBtn.click(function(ev){
        iNow = $(this).index(); 
        tab();
    });

    timer = setInterval(timerInner, 2000);
    function timerInner(){
        iNow++;
        tab();
    }
    
    oBtn.add(aLi).hover(function(){
        clearInterval(timer);
        $(this).css('cursor','pointer')
    },function(){
        timer = setInterval(timerInner, 2000);
    });

    function tab(){
        oBtn.attr("class", "");
        oBtn.eq(iNow).attr("class", "fColor");
        if(iNow == aLi.size() - 1){
            oBtn.eq(0).attr("class", "fColor");
        }
        //alert(_width)
        bn_oUl.animate({"left":-iNow * 1270}, function(){
            //console.log(bn_oUl.css("left"));
            if(iNow == aLi.size() - 1){
                iNow = 0;
                bn_oUl.css("left", 0);
            }
        });
    }        
    //main的主要内容:
    var big = $("#main").find(".big");
    $(".big").hover(function(){
        $(this).find(".pic").animate({top:-20, left:-20, bottom:-20, right:-20});
    },function(){
        $(this).find(".pic").animate({top:0, left:0, bottom:0, right:0});
    });
})