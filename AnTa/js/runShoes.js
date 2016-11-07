

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
            url:'../json/menu.json',
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
                            html += '<li><a href="#">' + data[i].type[k].list[t].name + '</a></li>'
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

    //菜单吸顶；
    $(window).on("scroll", function(){
        var top = $(document).scrollTop();
        //console.log(top)
        if(top >= 0){
            $("#topbg").css("position", "fixed").css("top", "0").css("zIndex", "1000");
            $("#menubg").css("position", "fixed").css("top", "24px").css("zIndex", "1000");
        }else{
            $("#topbg").css("position", "relative");
            $("#menubg").css("position", "relative");
        }
        if(top >= 500){
            $(".mainLeft").css("position", "fixed").css("top", "100px");
        }else{
            $(".mainLeft").css("position", "relative").css("top", "0");
        }

    });

    //banner图的设计;
    var bn_oUl = $("#banner").find("ul");
    var oBtn = $("#banner").find("ol").find("li");
    var aLi = bn_oUl.find('li');
    //alert(aLi.eq(0).css("width"))
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

        bn_oUl.animate({"top":-iNow * 396}, function(){
            if(iNow == aLi.size() - 1){
                iNow = 0;
                bn_oUl.css("top", 0);
            }
        });
    }

    //左边菜单栏
    var MleftUp = $(".mainLeft").find(".up");
 
    var count = 1;
    MleftUp.click(function(){
        // var n = $(this).index() + 2;
        if($(this).index() == 0){
            $(this).nextAll("div").css("height", "0").css("overflow", "hidden");
            $(this).html("+");
        }        
        if(count % 2 == 1){
            $(this).siblings("ul").css("height", "0").css("overflow", "hidden");
            $(this).html("+");
        }else{
            $(this).siblings("ul").css("height", "auto");
            $(this).html("-");
        }
        count++
    });

    //main中右边的多选区
    $("#chose ul").hover(function(){
        $(this).stop().animate({"height":"230"}).css("background", "#fff");
        $(this).find("li").hover(function(){
            $(this).css("background", "#E4E4E4");
        },function(){
            $(this).css("background", "#fff");
        });

    }, function(){
        $(this).stop().animate({"height":"45"});
        $("#chose ul").find("li").eq(0).css("background", "#F4F4F4");

    });

    //商品图片加载
    $.ajax({
        url:"../json/runShoe.json",
        type:"GET",
        success:function(data){
            var  oUl = $("#mainAjax").find("ul");
            var  oLi = $("#mainAjax").find("ul").find('li').eq(0);               
            for(var i = 1; i < data.length; i++){
                var cloneLi = oLi.clone();
                cloneLi.appendTo(oUl);
            }
            var _oLi = $("#mainAjax").find("ul").find('li');
            
            for(var i = 0; i < data.length; i++){
                var html = "";
                for(var j = 0; j < data[i].child.length; j++){    
                    html += '<span><img src = "'+data[i].child[j].img+'"></span>';                        
                }
                _oLi.eq(i).find("div").html(html);
                _oLi.eq(i).find("h5").html(data[i].price + '<span>'+data[i].price2+'</span>');
                _oLi.eq(i).find("h4").find("a").html(data[i].title);
                _oLi.eq(i).find("img")[0].src = data[i].bgUr;
            }
            
            var minIndex = 2;
            //li划过时小图片显示；
            _oLi.mouseenter(function(){
                $(this).find("div").finish().animate({height:30});
                $(this).finish().animate({height:310}).css("border", "1px solid #CCCCCC").css("zIndex", minIndex++);
            });
            //li划出时小图片隐藏；
            _oLi.mouseleave(function(){
                $(this).find("div").finish().animate({height:0});
                $(this).finish().animate({height:260}).css("border", "0");
            })
            //给每一个li定位；
            for(var j = 0; j < _oLi.length; j++){
                _oLi[j].style.left = _oLi[j].offsetLeft + "px";
                _oLi[j].style.top = _oLi[j].offsetTop + "px";
            }
            for(var i = 0; i < _oLi.length; i++){
                _oLi[i].style.position = "absolute";
                _oLi[i].style.margin = "0";
            }
        }
    });
    //返回顶部；
    $(window).on("scroll", function(){
        var top = $(window).scrollTop();
        //console.log(top)
        if(top >= 300){
            $("#fixedBox").css("display", "block").click(function(){
                $(window).scrollTop("0");
            });
        }else{
            $("#fixedBox").css("display", "none");
        }
    });    
}); 
   