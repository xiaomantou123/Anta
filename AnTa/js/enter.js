/* 
* @Author: Marte
* @Date:   2016-11-09 20:47:51
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-10 11:31:42
*/

$(document).ready(function(){
     //四个小图标的滑动效果；
    var aLi = $("#right").find("ul").find("li");
    aLi.hover(function(){
        $(this).animate({'backgroundPosition':-52 -0});
    },function(){
        $(this).animate({'backgroundPosition':-0 -0})
    });

    //验证码的获取；
    function fourCode(n){
        var str = "";
        for(var i = 0; i < n; i++){
            var m = parseInt(Math.random()*10);
            str += m;
        }
        return str;
    }
    $(".code").html(fourCode(4));
    $(".code").click(function(){
        $(this).html(fourCode(4));
    });
    var entInput = $('#ent').find("input");
    //验证码的验证；
    entInput.eq(2).blur(function(){
        var oValue = $(this).val();
        var errorShow = $(this).siblings(".errorShow").eq(2);
        if(oValue == $(".code").html()){
            tmp = true;
            errorShow.css("display", "none");
            $(this).css("backgroundColor", "#fff").css("border","1px solid green");
        }else{
            $(this).css("backgroundColor", "#FDF5F3").css("border","1px solid red"); 
            tmp = false;
        }
    });
    

    //登录账户；
    entInput.eq(0).blur(function(){
        var errorShow = $(this).siblings(".errorShow").eq(0);
        var oValue = $(this).val();
        if(oValue != $.cookie("username")){
            alert("你还未注册，请先注册");
            errorShow.css("display", "block").css("color", "red");
            $(this).css("backgroundColor", "#FDF5F3").css("border","1px solid red");
            tmp = false;
        }else{
            errorShow.css("display", "none");
            $(this).css("backgroundColor", "#fff").css("border","1px solid green");
            tmp = true;
        }
    });

    //密码验证；
    entInput.eq(1).blur(function(){
        var errorShow = $(this).siblings(".errorShow").eq(1);
        var oValue = $(this).val();
        if(oValue != $.cookie("password")){
            alert("密码有误，请重新输入！");
            errorShow.css("display", "block").css("color", "red");
            $(this).css("backgroundColor", "#FDF5F3").css("border","1px solid red");
            tmp = false;
        }else{
            errorShow.css("display", "none");
            $(this).css("backgroundColor", "#fff").css("border","1px solid green");
            tmp = true;
        }
    });

    $("#btn").click(function(){
        if(entInput[0].value == '' || entInput[1].value == '' || 
            entInput[2].value == ''){
                alert("账号、密码或验证码不能为空！");
        }
        if(tmp){
            alert("登录成功！");
        }else{
            alert("账号或密码有误，请重新输入！"); 
        }
    })







});