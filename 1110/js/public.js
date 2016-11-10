//广告效果
$(function(){
   	
  
   $(".T_ad").click(function(){
    	$(".T_ad1").show();
    })
    $(".ad_close").click(function(){
    	$(".T_ad1").hide();
    })
    
//订单效果
	$('.f_main').mouseenter(function(){
		$('.f_con1').show();
		$(this).find("span").attr("class","ft_change");
	})
    $('.f_main').mouseleave(function(){
		$('.f_con1').hide();
	    $(this).find("span").attr("class","f_triangle");
	})					
//手机效果
	$('.phone').mouseenter(function(){
		$('.f_con2').show();
		$(this).find("span").eq(1).attr("class","ft_change");
	})
	$('.phone').mouseleave(function(){
		$('.f_con2').hide();
		$(this).find("span").eq(1).attr("class","f_triangle");
	})
//购物车效果
	
	$(".shopcar").mouseleave(function(){
	    $('.car1').hide();
	    $(".shopcar").find("b").css('display','none');
	})
	$('.r_memu').find('li').mouseover(function(){
		    $(this).stop().animate({
		        'width':'160px'
		    }).siblings().stop().animate({
		                            'width':'30px'
		                        });
	});
    $('.r_memu').find('li').mouseout(function(){
		$(this).stop().animate({
		                    'width':'30px'
		                })
	});
    $('.r_memu').find('li').mouseover(function(){
		$(this).stop().animate({
		    'width':'160px'
		               }).siblings().stop().animate({
		                                        'width':'30px'
		                                     });
	});
    $('.r_memu').find('li').mouseout(function(){
		$(this).stop().animate({
		                        'width':'30px'
		                })
		                            
    });
    $.ajax({
			url: "json/goods.json",
			type: "GET",
			success: function(data){
				var html = "";
			    for(var i=0;i<12;i++){
			    		html = '<li><a href="goodsdetail.html"><img src="' +data[i].img+ '"/></a><p>' +data[i].type + '</p><p>' +data[i].capacity + '</p><p>' +data[i].word + '<span class="ac_price">' +data[i].price + '</span></p><span class="btn" id="' + data[i].id + '" href="javascript:;">' +data[i].add + '</span></li>';
			    		$('.main').find('ul').eq(0).append(html);
			    }
			    for(var i=12;i<24;i++){
			    		html = '<li><a href="goodsdetail.html"><img src="' +data[i].img+ '"/></a><p>' +data[i].type + '</p><p>' +data[i].capacity + '</p><p>' +data[i].word + '<span class="ac_price">' +data[i].price + '</span></p><span class="btn" id="' + data[i].id + '" href="javascript:;">' +data[i].add + '</span></li>';
			    		$('.main').find('ul').eq(1).append(html);
			    }
			    for(var i=24;i<36;i++){
			    		html = '<li><a href="goodsdetail.html"><img src="' +data[i].img+ '"/></a><p>' +data[i].type + '</p><p>' +data[i].capacity + '</p><p>' +data[i].word + '<span class="ac_price">' +data[i].price + '</span></p><span class="btn" id="' + data[i].id + '" href="javascript:;">' +data[i].add + '</span></li>';
			    		$('.main').find('ul').eq(2).append(html);
			    }
			   	$('.main').find('li').find("img").hover(function(){
					$(this).animate({opacity:0.3},200)
					},function(){
					$(this).animate({opacity:1},200)
				})
				sc_car();
				var add_num = 1;
				$(".btn_add").click(function(){
					add_num++;
					$(".buy_ntext").val(add_num);
				})
				$(".btn_reduce").click(function(){
					add_num--;
					if(add_num <= 1){
						add_num = 1;
					}
					$(".buy_ntext").val(add_num);
				})
				$(".btn1").click(function(){
					sc_msg();
					var id = this.id
					var first = $.cookie('goods')==null?true:false;
					var same = false;
					if(first){
						$.cookie('goods','[{id:'+id+',num:add_num}]',{expires: 7, path: '/' });
						$.cookie('first','false',{expires: 7, path: '/' });
					}else{
						var str = $.cookie('goods');
						var arr = eval(str);
						for(var attr in arr){
							if(arr[attr].id == id){		
								arr[attr].num = arr[attr].num + add_num;  
								var cookieStr = JSON.stringify(arr);
								$.cookie('goods',cookieStr);
								same = true;
							}
						}
						if(!same){
							var obj  = {id:id,num:add_num};
							arr.push(obj);
							var cookieStr = JSON.stringify(arr);
							$.cookie('goods',cookieStr);
						}
					}
					sc_car()
				})
				$('.btn').click(function(){
					sc_msg();
					var id = this.id
					var first = $.cookie('goods')==null?true:false;
					var same = false;
					if(first){
						$.cookie('goods','[{id:'+id+',num:1}]',{expires: 7, path: '/' });
						$.cookie('first','false',{expires: 7, path: '/' });
					}else{
						var str = $.cookie('goods');
						var arr = eval(str);
						for(var attr in arr){
							if(arr[attr].id == id){		
								arr[attr].num = arr[attr].num + 1;  
								var cookieStr = JSON.stringify(arr);
								$.cookie('goods',cookieStr);
								same = true;
							}
						}
						if(!same){
							var obj  = {id:id,num:1};
							arr.push(obj);
							var cookieStr = JSON.stringify(arr);
							$.cookie('goods',cookieStr);
						}
					}
					sc_car()
				})
				function sc_car(){
					var sc_str = $.cookie('goods');
					if(sc_str){
						var sc_obj = eval(sc_str);
						var sc_num = 0 ; 
						for(var i in sc_obj){
							sc_num = Number(sc_obj[i].num) + sc_num;
						}
						$('.sc_num').html(sc_num);
					}
				}
				
				function sc_msg(){
					$.ajax({
						url:'json/goods.json',
						type:'GET',
						success:function(data){
							var sc_str = $.cookie('goods');
							if(sc_str){
								var sc_obj = eval(sc_str);
								var sc_num = 0 ;
								var html = ''; 
								var shop_sum = 0;
								var shop_num = 0;
								for(var i in sc_obj){					
									html += '<div class="shopping" style="overflow:hidden"><div class="delet" id="'+sc_obj[i].id+'">'+ "删除"+'</div><div class="single"><a href="goodsdetail.html"><img src="'+data[sc_obj[i].id].img+'" alt=""/></a></div><div class="single_text"><a href="goodsdetail.html">'+data[sc_obj[i].id].capacity+'</a></div><div class="single_num">'+sc_obj[i].num+'</div><div class="single_price">'+data[sc_obj[i].id].word+data[sc_obj[i].id].price+'</div></div>'
									shop_sum += parseInt(data[sc_obj[i].id].price)*parseInt(sc_obj[i].num);
									shop_num += parseInt(sc_obj[i].num);
								}
								$('.car1').find("ul").html(html);
								$('.all_shopping').html(html);
								$(".all_goods_num").html(shop_num + "件商品");
								$(".all_goods_price").html("￥" + shop_sum);
								$(".delet").click(function(){
									var id = this.id;
									var str = $.cookie('goods');
									var arr = eval(str);
										for(var attr in arr){
											if(arr[attr].id == id){	
												arr.splice(attr,1);
												var cookieStr = JSON.stringify(arr);
												$.cookie('goods',cookieStr);
											}
									}
									$(this).closest(".shopping").remove();
									sc_car();
									sc_msg();
								})
							}
						}
					})
				}
				$(".fixed_memu").find(".tab-logo_cart").click(function(){
					$(".fixed_memu").animate({"right":"278px"},500)
					sc_msg();
				})
				$(".close_bg").click(function(){
					$(".fixed_memu").animate({"right":"0px"},500)
				})
				$(".car").mouseenter(function(){
					sc_car();
					sc_msg();
				    $('.car1').show();
				    $(".shopcar").find("b").css('display','block');
				})
	}//sccess结束
})
//fixed
  $(".fix_right").click(function(){
    	$(".fixed").hide();
    })
//菜单
	$('.s_memu').hover(function(){
		$('.s_memu1').show();
		$('.s_memu1').hover(function(){
			$('this').find(".right_memu").show();
			$(".s_memu1").find("li").mouseover(function(){
				$(this).find(".right_memu").show();
				$(this).css('background-color','white');
				$(this).find("span").show();
			})
			$(".s_memu1").find("li").mouseout(function(){
				$(this).find(".right_memu").hide();
				$(this).css('background-color','');
				$(this).find("span").hide();
				
				$(this).find(".right_memu").hide();
			})
		},function(){
			$('.s_memu1').find(".right_memu").hide();
		})
	},function(){
		$('.s_memu1').hide();
	})
	$(function(){
		$.ajax({
			url: "json/index.json",
			type: "GET",
			success: function(data){
				var html = "";
				for (var i = 0; i < data.length; i++){
					html += '<li><div class="memu_cont"><a href="#">' + data[i].title + '<span></span><i></i></a></div><div class="right_memu">';
					for (var j = 0; j < data[i].child.length; j++) {
						if (j == data[i].child.length - 1) {
							html += '<div class="r_enter">';
							for (var l = 0; l < data[i].child[data[i].child.length - 1].children.length; l++) {
								html += '<a href="#">' + data[i].child[data[i].child.length - 1].children[l] + '</a>'	;			
							}
							html += '</div>';
						} else{
							html += '<div class="r_shop"><h2>' + data[i].child[j].title + '</h2><div class="r_word">';
							for (var k = 0; k < data[i].child[j].children.length; k++) {
							html += '<a href="#">' + data[i].child[j].children[k] + '</a>';
						}
							html += '</div></div>'
						}
					}
				html += '</div></li>';    
				}
				$(".s_memu1").find("ul").html(html);
				for (var i = 0; i < $(".memu_cont").length; i++) {
 		 			$(".memu_cont").eq(i).attr("id","li"+i);
 				}
			}
		})
	})
//侧边菜单
$(".fixed_memu").find(".tab-logo_cart").click(function(){
	$(".fixed_memu").animate({"right":"278px"},500)
})
$(".close_bg").click(function(){
	$(".fixed_memu").animate({"right":"0px"},500)
})
$(".fixed_memu").find("li").hover(function(){
	$(this).find(".tab-tip").show();
},function(){
	$(this).find(".tab-tip").hide();
})
$(".tab-logo_top").click(function(){
	$('body,html').animate({scrollTop:0},30);
		return false;
});
})