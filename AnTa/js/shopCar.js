/* 
* @Author: Marte
* @Date:   2016-11-07 21:03:13
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-08 14:45:35
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
                    html += '<li><div class = "checkBox"><input type="checkbox" checked = "checked"/></div><div class = "shoeNum">'+'0000'+data[arr[i].id].id+'</div><div class = "sc_pic"><img src="'+ data[arr[i].id].bgUr +'" /></div><div class = "title">'+ data[arr[i].id].title +'</div><div class = "price">'+ data[arr[i].id].price +'</div><div class = "buyNum"><span>-</span>'+ arr[i].num +'<em>+</em></div><div class = "score">309分</div><div class = "del">删除</div></li>';

                    // var cut = $("#realCar").find("ul").find("li").find(".buyNum").find("span");
                    // var plus = $("#realCar").find("ul").find("li").find(".buyNum").find("em");
                    // cut.click(function(){
                    //     arr[i].num = arr[i].num - 1;
                    // });
                    // plus.click(function(){
                    //     arr[i].num++;
                    // })
                    html2 += (data[arr[i].id].price) * (arr[i].num);

                }
                $("#car").find("ul").html(html);
                $("#money").find("span").html('￥'+html2)
            }

        }
    })
});