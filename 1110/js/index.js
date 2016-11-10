//轮播图效果		                
	var iNow = 0;
    var timer = null;
	var oUl = $('#Shuffling').find("#s_play");
    var aLis = $('#Shuffling').find("#s_play").find("li");
	var iNum = $(this).index();
    var aBtn = $('.point').find("li");  	          	
    aBtn.mouseover(function(){
    	clearInterval(timer);
    });
    aBtn.mouseout(function(){
    	clearInterval(timer);
    });
    $('.s_gt').mouseover(function(){
    	clearInterval(timer);
    });
    $('.s_gt').mouseout(function(){
    	clearInterval(timer);
    });
    $('.s_lt').mouseover(function(){
    	clearInterval(timer);
    });
    $('.s_lt').mouseout(function(){
    	clearInterval(timer);
    });
	$('.s_gt').click(function (){
		clearInterval(timer);
		timerInner();
	})
	$('.s_lt').click(function(){
		clearInterval(timer);
	    iNow--;
	    if(iNow < 0){
			iNow = aLis.size() - 1;
			oUl.css("left", -1440 * iNow);
	    	iNow = aLis.size() - 2;
		}
	    tab();
	})
	aBtn.click(function(){
		iNow = $(this).index();
		tab();
	})

	timer = setInterval(timerInner, 4000);
	function timerInner(){
		iNow++;
		tab();
	}
	oUl.hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(timerInner, 4000);
	})
	function tab(){
		aBtn.attr("class", "");
		aBtn.eq(iNow).attr("class", "active");
		if(iNow == aLis.size() - 1){
			aBtn.eq(0).attr("class", "active");
		}
		oUl.animate({left: -1440 * iNow}, function(){
			if(iNow == aLis.size() - 1){
				iNow = 0;
				oUl.css("left", 0);
			}
		})
	}
//轮播图效果结束
//品牌热卖
    $(".flag_list").find('li').mouseover(function(){
		var Li_index = $(this).index();
		$(".flag_hide").eq(Li_index).stop().animate({bottom:0}, 100, "linear");
	})
	$(".flag_list").find('li').mouseout(function(){
		var Li_index1 = $(this).index();
		$(".flag_hide").eq(Li_index1).stop().animate({bottom:-88},300,"linear");
	})
	var arr_m = ["蒙口","托德斯","布尔兄弟","稀奇艺术","歌蕾","LuckyOzasec","","魄力思","瑞贝卡·明可弗","Theonne","宝格丽","科颜氏","阿玛尼","海蓝之谜"]
	var arr_img = ['img/img_index/14477416926764.png','img/img_index/14477462462623.png','img/img_index/14477284508184.png','img/img_index/14643313037366.png','img/img_index/14712476653414.png','img/img_index/147418184838_214x108.jpg','img/img_index/14605454895591.png','img/img_index/14477430744531.png','img/img_index/14479263905429.png','img/img_index/14524832304110.png','img/img_index/14477284519867.png','img/img_index/14477391395609.png','img/img_index/14477258985459.png','img/img_index/14477391399663.png'];
	for(var i =0; i< arr_m.length;i++){
		 var oLi =$('<div class="mon_cot"><div class="mon_hide"><p>' + arr_m[i] + '</p><p class="h_line"></p></div><li><img src=' + arr_img[i] + ' /></li><div class="topline"></div><div class="rightline"></div><div class="leftline"></div><div class="bottomline"></div></div>');
		 $('.moncler').append(oLi);
	}
	$(".mon_cot").hover(function(){
		$(this).find('.mon_hide').stop().animate({opacity:1}, 50, "linear");
		$(this).find('.topline').stop().animate({width:166}, 50);
		$(this).find('.bottomline').stop().animate({width:166},50);
		$(this).find('.leftline').stop().animate({height:85}, 50);
		$(this).find('.rightline').stop().animate({height:85}, 50);
		
	},function(){
		$(this).find('.mon_hide').stop().animate({opacity:0}, 50, "linear");
		$(this).find('.topline').stop().animate({width:0}, 50);
		$(this).find('.bottomline').stop().animate({width:0}, 50);
		$(this).find('.leftline').stop().animate({height:0}, 50);
		$(this).find('.rightline').stop().animate({height:0}, 50);
	})
	$(".shopcenter").find('li').mouseover(function(){
		$(this).find(".shopbox").stop().animate({top:-50}, 300, "linear");
	})
	$(".shopcenter").find('li').mouseout(function(){
		$(this).find(".shopbox").stop().animate({top:0},300,"linear");
	})
	var arr_bag1 = [{"name":"单肩包"},{"name":"手提包"},{"name":"手提斜跨包"},{"name":"双肩包"},{"name":"手拿包"},{"name":"钱包"},{"name":"小披件"},{"name":"旅行箱/包"},{"name":"斜跨包"},{"name":"化妆箱/包"}];
	var arr_bag2 = [{"name":"时尚"},{"name":"瑞士"},{"name":"德国"},{"name":"限量版"},{"name":"法国"},{"name":"机械表"},{"name":"石英表"},{"name":"三针"},{"name":"计时码表"},{"name":"瑞士"}];
	var arr_bag3 = [{"name":"首饰"},{"name":"腰带"},{"name":"领带/领结/领带夹"},{"name":"围巾/丝巾"},{"name":"帽子"},{"name":"手套"},{"name":"伞"},{"name":"挂饰"},{"name":"手杖"},{"name":"眼镜/镜架"}];
	var arr_bag4 = [{"name":"护肤"},{"name":"彩妆"},{"name":"香水"},{"name":"美体"},{"name":"套装精品"},{"name":"旅行套装"},{"name":"美妆工具"},{"name":"全身护理"},{"name":"神奇面霜"},{"name":"古龙水"}];
	var arr_bag5 = [{"name":"上装"},{"name":"裤装"},{"name":"裙装"},{"name":"内衣"},{"name":"套装"},{"name":"连衣裙"},{"name":"复古"},{"name":"欧美"},{"name":"修身"},{"name":"鱼尾裙"}];
    for(var i=0;i<arr_bag1.length;i++){
	var aLi = '<li><a href="javascript:;">'+arr_bag1[i].name+'</a></li>';
	$(".bag").eq(0).find(".bag_ltop").append(aLi);
	var aLi = '<li><a href="javascript:;">'+arr_bag2[i].name+'</a></li>';
	$(".bag").eq(1).find(".bag_ltop").append(aLi);
	var aLi = '<li><a href="javascript:;">'+arr_bag3[i].name+'</a></li>';
	$('.bag').eq(2).find(".bag_ltop").append(aLi);
	var aLi = '<li><a href="javascript:;">'+arr_bag4[i].name+'</a></li>';
	$('.bag').eq(3).find(".bag_ltop").append(aLi);
	var aLi = '<li><a href="javascript:;">'+arr_bag5[i].name+'</a></li>';
	$('.bag').eq(4).find(".bag_ltop").append(aLi);
}
    						
//兰蔻
	$(".store_rtop").find('li').hover(function(){
			$(this).find('.top_text').stop().animate({left:-20}, 300);
			$(this).find('.top_img').stop().animate({left:20}, 300);
			
		},function(){
			$(this).find('.top_text').stop().animate({left:0}, 300);
			$(this).find('.top_img').stop().animate({left:0}, 300);
		})
	$(".store_bottom").hover(function(){
			$(this).find('.bottom_text').stop().animate({left:-20}, 300);
			$(this).find('.bottom_img').stop().animate({left:20}, 300);
			
		},function(){
			$(this).find('.bottom_text').stop().animate({left:0}, 300);
			$(this).find('.bottom_img').stop().animate({left:0}, 300);
		})
	$(".store_two").hover(function(){
			$(this).find('.top_text2').stop().animate({left:48}, 300);
			$(this).find('.top_img2').stop().animate({right:20}, 300);
			
		},function(){
			$(this).find('.top_text2').stop().animate({left:68}, 300);
			$(this).find('.top_img2').stop().animate({right:40}, 300);
		})
	var aLi_hot = $(".sale_list").find("li");
	var iNum = 0;
	function tab_hot(){
			aLi_hot.attr("class", "");
			aLi_hot.eq(iNum).attr("class", "active_hot");
			$(".tab_hot").animate({left: -1210 * iNum})
		}
	aLi_hot.mouseover(function(){
			iNum = $(this).index();
			tab_hot();
		})
	$(".store_left3").hover(function(){
			$(this).find(".r_hide").show();
		},function(){
			$(this).find(".r_hide").hide();
		})
	$(".store_right3").find("li").hover(function(){
		$(this).find(".r_hide1").show();
		},function(){
		$(this).find(".r_hide1").hide();
		})
//小轮播
   $(function(){
   	 	var aLi_btn = $(".add_btn1").find("li");
		var aLi_s = $('.add_top1').find('li');
		var sNum = 0;
		function tab_btn(){
				aLi_btn.attr("class", "");
				aLi_btn.eq(sNum).attr("class", "active_btn");
				if(sNum == aLi_s.size() - 1){
				aLi_btn.eq(0).attr("class", "active_btn");
				}
				$('.add_top1').animate({left: -220 * sNum}, function(){
				if(sNum == aLi_s.length - 1){
					sNum = 0;
					$('.add_top1').css("left", 0);
				}
			    })
		}
		$(".add1").find('.slider_gt').click(function (){
			sNum++;
			tab_btn();
		})
		$(".add1").find('.slider_lt').click(function(){
		    sNum--;
		    if(sNum < 0){
				sNum = aLi_s.size() - 1;
				$(".add1").find('.slider_top').css("left", -220 * sNum);
				sNum = aLi_s.size() - 2;
			}
		    tab_btn();
		    
		})
		aLi_btn.click(function(){
			sNum = $(this).index();
			tab_btn();
		})
   })
    $(function(){
   	 	var aLi_btn = $(".add_btn2").find("li");
		var aLi_s = $('.add_top2').find('li');
		var sNum = 0;
		function tab_btn(){
				aLi_btn.attr("class", "");
				aLi_btn.eq(sNum).attr("class", "active_btn");
				if(sNum == aLi_s.size() - 1){
				aLi_btn.eq(0).attr("class", "active_btn");
				}
				$('.add_top2').animate({left: -220 * sNum}, function(){
				if(sNum == aLi_s.length - 1){
					sNum = 0;
					$('.add_top2').css("left", 0);
				}
			    })
		}
		$(".add2").find('.slider_gt').click(function (){
			sNum++;
			tab_btn();
		})
		$(".add2").find('.slider_lt').click(function(){
		    sNum--;
		    if(sNum < 0){
				sNum = aLi_s.size() - 1;
				$(".add2").find('.slider_top').css("left", -220 * sNum);
				sNum = aLi_s.size() - 2;
			}
		    tab_btn();
		    
		})
		aLi_btn.click(function(){
			sNum = $(this).index();
			tab_btn();
		})
   })
	$(function(){
   	 	var aLi_btn = $(".add_btn3").find("li");
		var aLi_s = $('.add_top3').find('li');
		var sNum = 0;
		function tab_btn(){
				aLi_btn.attr("class", "");
				aLi_btn.eq(sNum).attr("class", "active_btn");
				if(sNum == aLi_s.size() - 1){
				aLi_btn.eq(0).attr("class", "active_btn");
				}
				$('.add_top3').animate({left: -220 * sNum}, function(){
				if(sNum == aLi_s.length - 1){
					sNum = 0;
					$('.add_top3').css("left", 0);
				}
			    })
		}
		$(".add3").find('.slider_gt').click(function (){
			sNum++;
			tab_btn();
		})
		$(".add3").find('.slider_lt').click(function(){
		    sNum--;
		    if(sNum < 0){
				sNum = aLi_s.size() - 1;
				$(".add3").find('.slider_top').css("left", -220 * sNum);
				sNum = aLi_s.size() - 2;
			}
		    tab_btn();
		    
		})
		aLi_btn.click(function(){
			sNum = $(this).index();
			tab_btn();
		})
   })
   $(function(){
   	 	var aLi_btn = $(".add_btn4").find("li");
		var aLi_s = $('.add_top4').find('li');
		var sNum = 0;
		function tab_btn(){
				aLi_btn.attr("class", "");
				aLi_btn.eq(sNum).attr("class", "active_btn");
				if(sNum == aLi_s.size() - 1){
				aLi_btn.eq(0).attr("class", "active_btn");
				}
				$('.add_top4').animate({left: -220 * sNum}, function(){
				if(sNum == aLi_s.length - 1){
					sNum = 0;
					$('.add_top4').css("left", 0);
				}
			    })
		}
		$(".add4").find('.slider_gt').click(function (){
			sNum++;
			tab_btn();
		})
		$(".add4").find('.slider_lt').click(function(){
		    sNum--;
		    if(sNum < 0){
				sNum = aLi_s.size() - 1;
				$(".add4").find('.slider_top').css("left", -220 * sNum);
				sNum = aLi_s.size() - 2;
			}
		    tab_btn();
		    
		})
		aLi_btn.click(function(){
			sNum = $(this).index();
			tab_btn();
		})
   })
   $(function(){
   	 	var aLi_btn = $(".add_btn5").find("li");
		var aLi_s = $('.add_top5').find('li');
		var sNum = 0;
		function tab_btn(){
				aLi_btn.attr("class", "");
				aLi_btn.eq(sNum).attr("class", "active_btn");
				if(sNum == aLi_s.size() - 1){
				aLi_btn.eq(0).attr("class", "active_btn");
				}
				$('.add_top5').animate({left: -220 * sNum}, function(){
				if(sNum == aLi_s.length - 1){
					sNum = 0;
					$('.add_top5').css("left", 0);
				}
			    })
		}
		$(".add5").find('.slider_gt').click(function (){
			sNum++;
			tab_btn();
		})
		$(".add5").find('.slider_lt').click(function(){
		    sNum--;
		    if(sNum < 0){
				sNum = aLi_s.size() - 1;
				$(".add5").find('.slider_top').css("left", -220 * sNum);
				sNum = aLi_s.size() - 2;
			}
		    tab_btn();
		    
		})
		aLi_btn.click(function(){
			sNum = $(this).index();
			tab_btn();
		})
   })
//总裁线条
    var html_line = $('<div class="T_line"></div><div class="B_line"></div><div class="L_line"></div><div class="R_line"></div>')
	$(".promotion2_left").find('li').append(html_line);
	$(".promotion2_left").find('li').hover(function(){
		var pro_index = $(this).index();
		$('.promotion2_right').find('img').hide();
		$('.promotion2_right').find('img').eq(pro_index).show();
		$(this).find('.T_line').stop().animate({width:190},50);
		$(this).find('.B_line').stop().animate({width:190},50);
		$(this).find('.L_line').stop().animate({height:63}, 50);
		$(this).find('.R_line').stop().animate({height:63}, 50);
		
	},function(){
		$(this).find('.T_line').stop().animate({width:0}, 50);
		$(this).find('.B_line').stop().animate({width:0},50);
		$(this).find('.L_line').stop().animate({height:0},50);
		$(this).find('.R_line').stop().animate({height:0}, 50);
	})