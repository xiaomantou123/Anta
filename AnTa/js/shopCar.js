/* 
* @Author: Marte
* @Date:   2016-11-07 21:03:13
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-10 17:57:45
*/

$(document).ready(function(){
    //点击联系客服，出现电话号码；
    $("#No").mouseenter(function(){
        $(this).css("width", "230px").css("background", "url(../image/big_img/tel2.jpg) no-repeat center");     
    });
    $("#No").mouseleave(function(){
        $(this).css("width", "72px").css("background", "url(../image/big_img/tel_NO.jpg) no-repeat center");
    });

    //购物车加载；
    shopCar();
    function shopCar(){
        $.ajax({
            url:"../json/runShoe.json",
            type:"GET",
            success:function(data){
                var str = $.cookie("goods");
                if(str){
                    var arr = eval(str);
                    var html = '';
                    var html2 = Number();
                    $("#realCar").css("display", "block");
                    $("#car").find("h5").css("display", "none");
                    for(var i in arr){
                        html += '<li><div class = "checkBox"><input type="checkbox" checked = "checked" class = "cBox"/></div><div class = "shoeNum">'+'0000'+data[arr[i].id].id+'</div><div class = "sc_pic"><img src="'+ data[arr[i].id].bgUr +'" /></div><div class = "title">'+ data[arr[i].id].title +'</div><div class = "price">'+ data[arr[i].id].price +'</div><div class = "buyNum"><input type="button" value = "+" class = "add"/><p id = "hh">'+ arr[i].num +'</p><input type="button" class = "minus" value = "-" /></div><div class = "score">'+data[arr[i].id].price*100/100+'</div><div class = "del" id = "'+data[arr[i].id].id+'">删除</div></li>';
                        html2 += (data[arr[i].id].price) * (arr[i].num);
                    }
                    $("#car").find("ul").html(html);
                    $("#money").find("span").html('￥'+html2);
                    
                    var add = $("#realCar").find("ul").find("li").find(".buyNum").find(".add");
                    var minus = $("#realCar").find("ul").find("li").find(".buyNum").find(".minus");
                    var price = $("#realCar").find("ul").find("li").find(".price");

                    var del = $("#realCar").find("ul").find("li").find(".del");
                    
                    //点击“+”号，商品数量加1；
                    for(var i = 0; i < add.length; i++){
                        add[i].index = i;
                        add[i].onclick = function(){
                            arr[this.index].num++;
                            var cookieStr = JSON.stringify(arr);
                            $.cookie('goods', cookieStr, {expires:7});
                            shopCar();
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
                                shopCar();
                            }                    
                        }
                    }
                    //点击“删除”， 删除cookie;
                    for(var k = 0; k < del.length; k++){             
                        del[k].index = k;
                        del[k].onclick = function(){
                            arr.splice(this.index, 1);
                            if(arr.length == 0){
                                $.cookie('goods', null, {expires:7});
                                location.reload(true);   
                            }else{
                                var cookieStr = JSON.stringify(arr);
                                $.cookie('goods', cookieStr, {expires:7});
                                shopCar();
                            }                           
                        }            
                    }
                    //点击全选框全选或全不选；
                    var check = $(".check")[0];
                    var cheBox = $("#realCar").find("ul").find("li").find(".checkBox").find(".cBox");
                    check.checked = true;
                    check.onclick = function(){
                        if(this.checked == true){
                            for(var i = 0; i < cheBox.length; i++){
                                cheBox[i].checked = true; 
                            }
                            var num1 = html2
                            $("#money").find("span").html('￥'+num1);
                        }else{
                            for(var i = 0; i < cheBox.length; i++){
                                cheBox[i].checked = false;      
                            } 
                            html3 = 0;
                            $("#money").find("span").html('￥' +html3);    
                        }         
                    }
                    var num2 = html2;
                    for(var i = 0; i < cheBox.length; i++){
                        cheBox[i].index = i;
                        cheBox[i].onclick = function(){
                            if(this.checked == false){
                                num2 -= Number(price[this.index].innerHTML) * Number($("#hh").text());
                            
                                $("#money").find("span").html('￥'+num2);
                            }else{

                                num2 += Number(price[this.index].innerHTML) * Number($("#hh").text());
                                $("#money").find("span").html('￥'+num2);
                            }

                        }
                    }

                    //清空购物车；
                    $("#clear").click(function(){
                        $.cookie('goods', null, {expires:7});
                        location.reload(true);
                    });
                    //删除选中的商品；
                    $("#delCheck").click(function(){ 
                        for(var i = 0; i < cheBox.length; i++){               
                            if(cheBox[i].checked == true){
                                arr.splice(i, 1);
                                var cookieStr = JSON.stringify(arr);
                                $.cookie('goods', cookieStr, {expires:7});
                                shopCar();
                                if(arr.length == 0){
                                    $.cookie('goods', null, {expires:7});
                                    location.reload(true);
                                }
                            }
                        }      
                        
                    })
            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                              }
            //}
        });
    }
    

});           