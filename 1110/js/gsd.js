$(".pic_top").hover(function(){
	$(".pic_top").find('.pic_hide').show();
},function(){
	$(".pic_top").find('.pic_hide').hide();
})
$(".b_bg").hover(function(){
	$(this).find('.hide1').show();
},function(){
	$(this).find('.hide1').hide();
})
$(".b_bg1").hover(function(){
	$(this).find('.hide1').show();
},function(){
	$(this).find('.hide1').hide();
})
$(".b_sort").find('li').click(function(){
	var _this = $(this).index();
	$('.gdimg_top').find('img').hide();
	$('.large_all').find('img').hide();
	$('.gdimg_top').find('img').eq(_this).show();
	$(".replace").find('img').eq(_this).show();
	$('.large_all').find('img').eq(_this).show();
})
var n = 0;
$(".b_next").click(function(){
	n++;
	$(".b_sort").animate({left:-95*n},1000,function(){
		if(n>3){
			n = 0;
			$('.b_sort').css("left",0);
		}
	})
})
$(".b_pre").click(function(){
	n--;
	if(n<0){
		n = 0;
		$('.b_sort').css("left",0);
	}
	$(".b_sort").animate({left:-95*n},1000)
})
//add
//$(".btn_add").click(function(){
//	$(".add_hide").show();
//})
//$(".add_close").click(function(){
//	$(".add_hide").hide();
//})
//放大镜
var  upwid = Math.ceil($(".s_move").outerWidth(true));
var  uphei = Math.ceil($(".s_move").outerHeight(true));
var Padwid = Math.floor($(".gdimg_top").width());
var Padhei = Math.floor($(".gdimg_top").height());
var  Lwid = parseInt($(".gd_large").width());
var  Lhei = parseInt($(".gd_large").height());
var Awid = parseInt($(".large_all").width());
var Ahei = parseInt($(".large_all").height());
$(".s_move").mousemove(function(e){
		var offwid = $(".gdimg_top").offset().left;
		var offtop = $(".gdimg_top").offset().top;
		var x = e.pageX - offwid - upwid/2;
		var y = e.pageY - offtop - uphei/2;
		if( x < 0 ){
			x = 0;
		}else if( x > Padwid - upwid ){
			x = Padwid - upwid;
		}
		if( y < 0 ){
			y = 0;
		}else if( y > (Padhei - uphei)  ){
			y = (Padhei - uphei);
		}
		$(".s_move").css({left:x,top:y});
		var proportionX = x/(Lwid - upwid);
		var proportionY = y/(Lhei - uphei);
		var fx = -proportionX*(Awid-Lwid);
		var fy = -proportionY*(Ahei-Lhei);
		$('.large_all').css({left:fx,top:fy});
})
$('.gdimg_top').hover(function(e){
	var offwid = $(".gdimg_top").offset().left;
	var offtop = $(".gdimg_top").offset().top;
	var x = e.pageX - offwid - upwid/2;
	var y = e.pageY - offtop - uphei/2;
	if( x < 0 ){
		x = 0;
	}else if( x > Padwid - upwid ){
		x = Padwid - upwid;
	}
	if( y < 0 ){
		y = 0;
	}else if( y > (Padhei - uphei)  ){
		y = (Padhei - uphei);
	}
	$(".s_move").css({left:x,top:y});
	$(".s_move").show();
	$('.replace').show();
	$('.replace').stop().animate({left:490,width:480,height:480,top:2},1000,function(){
		$('.gd_large').show();
	});
},function(){
	$(".s_move").hide();
	$('.gd_large').hide();
	$('.replace').stop().animate({left:250,width:0,height:0,top:250},1000,function(){
		$('.replace').hide();
	});
})
		