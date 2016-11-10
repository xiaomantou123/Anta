    /* 
* @Author: Marte
* @Date:   2016-11-01 17:51:53
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-10 17:29:21
*/

$(document).ready(function(){
    $.ajax({
        url:"../json/big_left.json",
        type:"GET",
        success:function(data){
            var muLeftUl = $("#leftMenu").find("li").find(".menuList");
            //alert(muLeftUl.length)
            for(var i = 0; i < data.length; i++){
                var html = "";
                //alert(data[i].type.length)
                for(var j = 0; j < data[i].type.length; j++){
                    html += '<li><a href = "#">' + data[i].type[j].name + '</a></li>'
                }
                muLeftUl.eq(i).html(html);
            }
            var Hover = $("#leftMenu").find("li").find(".Hover");
            var div_Ul = Hover.find("ul");
            var div_dl = Hover.find("dl");
            //alert(div_dl.length)
            
            for(var i = 2; i < 4; i++){
                var html1 = "";
                var html2 = '';
                for(var j = 0; j <data[i].list.length; j++){
                    html1 += '<li><a href="#">'+ data[i].list[j].childList +'</a></li>';
                }
                html2 += '<dt>'+ data[i].txt +'</dt><dd><img src="' + data[i].img + '" /></dd>';
                div_dl.eq(i-2).html(html2);
                div_Ul.eq(i-2).html(html1);   
            }
            //鼠标划过时，左侧菜单显示；
            
            $(".Mleft").mouseenter(function(){
                $("#leftMenu").css("display", "block");

                $("#leftMenu").find(".men").hover(function(){
                    $(this).find(".Hover").css("display", "block").css("top", $(this).offset().top - 150);
                }, function(){
                    $(this).find(".Hover").css("display", "none");
                })
            });
            $("#leftMenu").mouseleave(function(){
                $(this).css("display", "none");
            });
        }     
    });
    //主菜单划过时下拉菜单的加载；
    $.ajax({
        url: '../json/big_center.json',
        type: 'GET',
        success:function(data){
            var div = $(".Mcenter").find("ul").find("li").eq(1).find(".centerMenu");
            var oLi = $(".Mcenter").find("ul").find("li");
            //clone div;
            for(var i = 2; i < 9; i++){
                var cloneDiv = div.clone();
                cloneDiv.appendTo(oLi.eq(i));
            }
            var oDiv = $(".Mcenter").find("ul").find("li").find(".centerMenu");
            var smallBox = oDiv.find(".Cright").find(".smallBox");
            var Cright = oDiv.find(".Cright");
            for(var i = 0; i < data.length; i++){
                for(var j = 0; j < data[i].type.length; j++){
                    var SMclone = null;
                    SMclone = smallBox.eq(0).clone();
                    SMclone.appendTo(Cright.eq(i));
                }
            }
            //alert(Cright.length)
            //加载data数据；
            for(var i = 0; i < data.length; i++){
                var obj = data[i];          
                oDiv.eq(i).find(".Cleft").find("img")[0].src = obj.img;
                //alert(data[i].type.length)
                for(var j = 0; j < obj.type.length; j++){
                    var arr = obj.type[j];                   
                    Cright.eq(i).find(".smallBox").find("p").eq(j).html(arr.title);                    
                    var html3 = '';
                    //alert(arr.child[0].name)                    
                    // alert(arr.child.length)
                    for(var k = 0; k < arr.child.length; k++){
                        //alert(k);
                        var arr2 = arr.child[k];
                        html3 += '<li class = "change">' + arr2.name + '</li>'
                    }
                    Cright.eq(i).find(".smallBox").find("ul").eq(j).html(html3);
                }
            }
            oLi.mouseenter(function(){
                $(this).find(".centerMenu").css("display", "block").css("left", $(this).offset().left);

                if($(this).index() == 7 || $(this).index() == 8 || $(this).index() == 6){
                    $(this).find(".centerMenu").css("left","650px");
                }
            });
            oLi.mouseleave(function(){
                $(this).find(".centerMenu").css("display", "none");
            }) 
        }
        
    });
    // 放大镜开始
    var scale = null;
    var small = document.getElementById("mainCenter");
    var big = document.getElementById("big_pic");
    var mask = document.getElementById("mask");
    var bigPic = document.getElementById("BP");
    small.onmouseover = function(){
        big.style.display = "block";
        mask.style.display = "block";
        scale = bigPic.offsetWidth / small.offsetWidth ;
        mask.style.width = big.offsetWidth / scale + "px";
        mask.style.height = big.offsetHeight / scale + "px";
        mask.style.cursor="pointer";
    }
    small.onmouseout = function(){
        big.style.display = "none";
        mask.style.display = "none";
    }
    small.onmousemove = function(evt){
        evt = evt || window.event;
        var left = evt.pageX - mask.offsetWidth / 2 - this.offsetLeft;
        var top = evt.pageY - mask.offsetHeight / 2 - this.offsetTop;
        if(left < 0){
            left = 0;
        }
        if(top < 0){
            top = 0;
        }
        if(left >= small.offsetWidth - mask.offsetWidth){
            left = small.offsetWidth - mask.offsetWidth - 5;
        }
        if(top >= small.offsetHeight - mask.offsetHeight){
            top = small.offsetHeight - mask.offsetHeight - 5;
        }
        mask.style.left = left + "px";
        mask.style.top = top + "px";
        bigPic.style.left = -mask.offsetLeft * scale + "px";
        bigPic.style.top = -mask.offsetTop * scale + "px";
    }
 
    var s_pic = $("#mainLeft").find("img");
    var b_pic = $("#mainCenter").find("img");
    var xx_pic = $("#big_pic").find("img");
    var Rimg = $("#mainRight").find(".color").find("img");
    //alert(b_pic.length)；
    //点击小图标切换大图标；
    s_pic.click(function(){
        var m = $(this).index() ;
        s_pic.css("border", "1px solid #E5E5E5");
        xx_pic[0].src = '../image/big_img/big' + m + '.jpg';
        b_pic[0].src = '../image/big_img/big' + m + '.jpg';
        $(this).css("border", "3px solid #E5E5E5");
    }); 
    //点击右边小图切换放大镜的图片；
    Rimg.click(function(){
        Rimg.attr("class", "");
        $(this).attr("class", "img_red");
        var n = $(this).index();
        //左边小图点击时大图切换；
        s_pic.click(function(){
            var m = $(this).index() ;
            xx_pic[0].src = '../image/big_img/big' + (m + n * 5) + '.jpg';
            b_pic[0].src = '../image/big_img/big' + (m + n * 5) + '.jpg'
        }); 
        xx_pic.get(0).src = '../image/big_img/big'+ ( 5 * n + 1)+'.jpg';

        s_pic[0].src = '../image/big_img/left' + (5 * n + 1) + '.jpg';
        s_pic[1].src = '../image/big_img/left' + (5 * n + 2) + '.jpg';
        s_pic[2].src = '../image/big_img/left' + (5 * n + 3) + '.jpg';
        s_pic[3].src = '../image/big_img/left' + (5 * n + 4) + '.jpg';
        s_pic[4].src = '../image/big_img/left' + (5 * n + 5) + '.jpg';
       
        b_pic[0].src = '../image/big_img/big' + (5 * n + 1) +'.jpg';    
    });
    //尺寸点击外边框变色并且显示所选尺寸和库存；
    var sizeA = $("#mainRight").find(".size").find("a");
    sizeA.click(function(){
        sizeA.css("border", "1px solid #B8B7BD");
        $(this).css("border", "2px solid #BE0106");
        $("#input_h2").find("input")[0].value = $(this).html();
        $("#input_h2").find("input")[1].value = parseInt($(this).html()) *2;
    });

    //右边黑色区域；
    var Rli = $("#allRight").find("ul").find("li");
    Rli.mouseenter(function(){
        var n = $(this).index()+1;
        //alert(n)
        $(this).find("img")[0].src = '../image/big_img/hover' + n + '.jpg';
        $(this).find(".div_li").css("display", "block");
    });
        
    Rli.mouseleave(function(){
        var n = $(this).index()+1;
        $(this).find("img")[0].src = '../image/big_img/right' + n + '.jpg';
        $(this).find(".div_li").css("display", "none");
    });
    Rli.eq(7).click(function(){
        $(window).scrollTop('0');
    });
     //购物车右上角点击×号，购物车关闭；
    var btn = document.getElementById("closeBtn");
    var allRight = document.getElementById("allRight");

    btn.onclick = function(){
        startMove(allRight, {right: -280});
    }
    //点击加入购物车，购物车显示；
    var addCar = $("#buy").find(".car");
    addCar.click(function(){
        //sc_msg();
        startMove(allRight, {right:0});
    });
    //购物车中商品加载；
    smallAjax(); 

        
    
});
window.onscroll = function(){    
    var top = document.documentElement.scrollTop ||
            document.body.scrollTop;
    if(top > 180){
        $("#menubg").css("position", "fixed").css("top", "0").css("left", "0").css("zIndex", "10");
        $("#leftMenu").css("position", "fixed").css("top","0");
        $("#leftMenu").css("position", "fixed").css("top","0");
        var Hover = $("#leftMenu").find("li").find(".Hover");
        Hover.css("position", "fixed").css("top", "200px").css("left", "255px");

    }else{
        $("#menubg").css("position", "relative");
        $("#leftMenu").css("position", "absolute").css("top", "130px");
        $(".Mleft").mouseenter(function(){
            $("#leftMenu").css("display", "block");

            $("#leftMenu").find(".men").hover(function(){
                $(this).find(".Hover").css("display", "block").css("top", $(this).offset().top - 50);
            }, function(){
                $(this).find(".Hover").css("display", "none");
            });
        });
        $("#leftMenu").mouseleave(function(){
            $(this).css("display", "none");
        });

        //右边黑色区域固定；
        if(top > 100){
            $("#allRight").css("position", "fixed").css("top", "0px").css("zIndex","10");
        }else{
            $("#allRight").css("position", "absolute").css("top", "164px");
        }
    }
}
function startMove(obj, json, func){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var bstop = true;
        for(var attr in json){
            var iCur = 0;
            if(attr == "opacity"){
                iCur = parseFloat(getStyle(obj,attr)) *100 ;
            }else{
                iCur = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr] - iCur) / 8; 
            speed = speed >0 ? Math.ceil(speed):Math.floor(speed);
            if(attr == "opacity"){
                iCur += speed;
                obj.style.filter = "alpha(opacity=" + iCur + ")";
                obj.style.opacity = iCur / 100;
            }else{
                obj.style[attr] = iCur + speed + "px";
            }
            if(iCur != json[attr]){
                bstop = false;
            }
            if(bstop){
                clearInterval(obj.timer);
                if(func){
                    func();
                }
            }

        }
    },30)   
}

//获取元素节点的样式
function getStyle(obj,attr){
    if(window.getComputedStyle){
       return window.getComputedStyle(obj,null)[attr];
    }else{
       return obj.currentStyle[attr];
    }
}
function smallAjax(){
    $.ajax({
        url:'../json/runShoe.json',
        type:'GET',
        success:function(data){
            var str = $.cookie('goods');
            if(str){
                var arr = eval(str);
                var html = '';
                var html2 =Number();
                var sc_num = 0;
                for(var i in arr){
                    html += '<li><div><input type="checkbox" checked = "checked" /></div><div class = "sc_pic"><img src="'+data[arr[i].id].bgUr+'" /></div><div class = "sc_title">'+data[arr[i].id].title+'</div><div class = "sc_num"><span class = "minus">-</span>'+arr[i].num+'<em class = "add">+</em></div><div class = "price">'+'￥'+data[arr[i].id].price+'</div></li>';
                    html2 += data[arr[i].id].price * arr[i].num;
                    sc_num += arr[i].num;
                }
                $("#shopCar").find("ul").html(html);
                $("#money").html('￥'+html2);
                $("#Number").html(sc_num);
            }


            var add = $("#shopCar").find("ul").find("li").find(".sc_num").find(".add");
            //alert(add.length)
            var minus = $("#shopCar").find("ul").find("li").find(".sc_num").find(".minus");
            //点击“+”号，商品数量加1；
            var str = $.cookie("goods");
            var arr = eval(str);

            for(var i = 0; i < add.length; i++){
                add[i].index = i;
                add[i].onclick = function(){

                    arr[this.index].num++;
                    var cookieStr = JSON.stringify(arr);
                    $.cookie('goods', cookieStr, {expires:7});
                    smallAjax();
                }
            }
            //点击“-”号，商品数量减1；
            for(var j = 0; j < minus.length; j++){
                minus[j].index = j;
                minus[j].onclick = function(){
                    if(arr[this.index].num == 1){
                        arr[this.index].num = 1;
                    }else{
                        arr[this.index].num--;
                        var cookieStr = JSON.stringify(arr);
                        $.cookie('goods', cookieStr, {expires:7});
                        smallAjax();
                    }                    
                }
            }         

            
        }      
    });




}






                
