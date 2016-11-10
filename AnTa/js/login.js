/* 
* @Author: Marte
* @Date:   2016-11-09 19:48:55
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-10 11:16:50
*/

$(function(){
    //四个小图标的滑动效果；
    var aLi = $("#right").find("ul").find("li");
    aLi.hover(function(){
        $(this).animate({'backgroundPosition':-52 -0});
    },function(){
        $(this).animate({'backgroundPosition':-0 -0})
    });

    //注册方式的切换
    $("#login2").click(function(){
        $(this).css("background", "#D71722").css("color", "#fff");
        $("#phone").css("display", "block");
        $("#login1").css("background", "#E4E4E4").css("color", "#000");
        $("#e_mail").css("display", "none");
    });
    $("#login1").click(function(){
        $(this).css("background", "#D71722").css("color", "#fff");
        $("#phone").css("display", "none");
        $("#login2").css("background", "#E4E4E4").css("color", "#000");
        $("#e_mail").css("display", "block");
    });

    var tmp = true;
    //邮箱的验证；
    var phoneInput = $("#phone").find('input');
    var mailInput = $('#e_mail').find("input");
    mailInput[0].onblur = function(){
        var errorShow = $(this).siblings(".errorShow").eq(0);
        var oValue = $(this).val();
        if(/^\w+@\w+(\.\w+)+$/g.test(oValue) == true){
            tmp = true;
            errorShow.css("display", "none");
            $(this).css("backgroundColor", "#fff").css("border","1px solid #D6D6D6");
        }else{
            errorShow.css("display", "block").css("color", "red");
            $(this).css("backgroundColor", "#FDF5F3").css("border","1px solid red");
            tmp = false;
        }
    }

    //密码验证；         
    mailInput.eq(1).blur(function(){
        var errorShow = $(this).siblings(".errorShow").eq(1);
        var oValue = $(this).val();
        if(oValue.length >= 6 && oValue.length <= 18){
            tmp = true;
            errorShow.css("display", "none");
            $(this).css("backgroundColor", "#fff").css("border","1px solid #D6D6D6");
        }else{
            errorShow.css("display", "block").css("color", "red");
            $(this).css("backgroundColor", "#FDF5F3").css("border","1px solid red"); 
            tmp = false;                
        }
    });

    //确认密码；
    mailInput.eq(2).blur(function(){
        var errorShow = $(this).siblings(".errorShow").eq(2);
        var oValue = $(this).val();
        if(oValue == mailInput.eq(1).val()){
            tmp = true;
            errorShow.css("display", "none");
            $(this).css("backgroundColor", "#fff").css("border","1px solid #D6D6D6");
        }else{
            errorShow.css("display", "block").css("color", "red");
            $(this).css("backgroundColor", "#FDF5F3").css("border","1px solid red");
            tmp = false; 
        }
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
    //验证码的验证；
    mailInput.eq(3).add(phoneInput.eq(3)).blur(function(){
        var oValue = $(this).val();
        if(oValue == $(".code").html()){
            tmp = true;
            errorShow.css("display", "none");
            $(this).css("backgroundColor", "#fff").css("border","1px solid #D6D6D6");
        }else{
            $(this).css("backgroundColor", "#FDF5F3").css("border","1px solid red"); 
            tmp = false;
        }
    });
    //手机号的验证；
    phoneInput.eq(0).blur(function() {
        var errorShow = $(this).siblings(".errorShow").eq(0);
        var oValue = $(this).val();
        if(/^13[0-9]{9}$/.test(oValue) || /^15[0-9]{9}$/.test(oValue) || /^18[0-9]{9}$/.test(oValue)){
            tmp = true;
            errorShow.css("display", "none");
            $(this).css("backgroundColor", "#fff").css("border","1px solid #D6D6D6");
        }else{
            errorShow.css("display", "block").css("color", "red");
            $(this).css("backgroundColor", "#FDF5F3").css("border","1px solid red");
            tmp = false; 
        }
    });
    phoneInput.eq(1).blur(function(){
        var errorShow = $(this).siblings(".errorShow").eq(1);
        var oValue = $(this).val();
        if(oValue.length >= 6 && oValue.length <= 18){
            tmp = true;
            errorShow.css("display", "none");
            $(this).css("backgroundColor", "#fff").css("border","1px solid #D6D6D6");
        }else{
            errorShow.css("display", "block").css("color", "red");
            $(this).css("backgroundColor", "#FDF5F3").css("border","1px solid red"); 
            tmp = false;                
        }
    });

    phoneInput.eq(2).blur(function(){
        var errorShow = $(this).siblings(".errorShow").eq(2);
        var oValue = $(this).val();
        if(oValue == phoneInput.eq(1).val()){
            tmp = true;
            errorShow.css("display", "none");
            $(this).css("backgroundColor", "#fff").css("border","1px solid #D6D6D6");
        }else{
            errorShow.css("display", "block").css("color", "red");
            $(this).css("backgroundColor", "#FDF5F3").css("border","1px solid red");
            tmp = false; 
        }
    });


    //提交按钮点击时进行判断是否都正确；
    var btn1 = $("#e_mail").find(".btn");
    //alert(btn1.val())
    var Einput = $("#e_mail").find("input");
    btn1.click(function(){
        for(var i = 0; i < Einput.length - 1; i++){
            if(Einput[i].value == ""){
                tmp = false;
            }
        }
        if(!tmp){
            alert("输入不正确，请重新输入！");
        }else{
            $.cookie("username", mailInput[0].value,{expires:7,path:'/'});
            $.cookie("password", mailInput[1].value,{expires:7,path:'/'});
            alert("注册成功！");
        }
    });
    var btn2 = $("#phone").find(".btn");
    var Pinput = $("#phone").find("input");
    btn2.click(function(){
        for(var i = 0; i < Pinput.length - 1; i++){
            if(Pinput[i].value == ""){
                tmp = false;
            }
        }
        if(!tmp){
            alert("输入不正确，请重新输入！");
        }else{
            $.cookie("username", phoneInput[0].value,{expires:7,path:'/'});
            $.cookie("password", phoneInput[1].value,{expires:7,path:'/'});
            alert("注册成功！");
        }
    });

    //获取cookie;
    
});