$(function(){
//	$.ajax({
//			url: "json/goods.json",
//			type: "GET",
//			success: function(data){
//				var html = "";
//			    for(var i=0;i<12;i++){
//			    		html = '<li><a href="goodsdetail.html"><img src="' +data[i].img+ '"/></a><p>' +data[i].type + '</p><p>' +data[i].capacity + '</p><p>' +data[i].word + '<span class="ac_price">' +data[i].price + '</span></p><span class="btn" id="' + data[i].id + '" href="javascript:;">' +data[i].add + '</span></li>';
//			    		$('.main').find('ul').eq(0).append(html);
//			    }
//			    for(var i=12;i<24;i++){
//			    		html = '<li><a href="goodsdetail.html"><img src="' +data[i].img+ '"/></a><p>' +data[i].type + '</p><p>' +data[i].capacity + '</p><p>' +data[i].word + '<span class="ac_price">' +data[i].price + '</span></p><span class="btn" id="' + data[i].id + '" href="javascript:;">' +data[i].add + '</span></li>';
//			    		$('.main').find('ul').eq(1).append(html);
//			    }
//			    for(var i=24;i<36;i++){
//			    		html = '<li><a href="goodsdetail.html"><img src="' +data[i].img+ '"/></a><p>' +data[i].type + '</p><p>' +data[i].capacity + '</p><p>' +data[i].word + '<span class="ac_price">' +data[i].price + '</span></p><span class="btn" id="' + data[i].id + '" href="javascript:;">' +data[i].add + '</span></li>';
//			    		$('.main').find('ul').eq(2).append(html);
//			    }
//			   	$('li').find("img").hover(function(){
//					$(this).animate({opacity:0.3},200)
//					},function(){
//					$(this).animate({opacity:1},200)
//				})
//				sc_car();
//				$('.btn').click(function(){
//					sc_msg();
//					var id = this.id
//					var first = $.cookie('goods')==null?true:false;
//					var same = false;
//					if(first){
//						$.cookie('goods','[{id:'+id+',num:1}]',{expires: 7, path: '/' });
//						$.cookie('first','false',{expires: 7, path: '/' });
//					}else{
//						var str = $.cookie('goods');
//						var arr = eval(str);
//						for(var attr in arr){
//							if(arr[attr].id == id){		
//								arr[attr].num = arr[attr].num + 1;  
//								var cookieStr = JSON.stringify(arr);
//								$.cookie('goods',cookieStr);
//								same = true;
//							}
//						}
//						if(!same){
//							var obj  = {id:id,num:1};
//							arr.push(obj);
//							var cookieStr = JSON.stringify(arr);
//							$.cookie('goods',cookieStr);
//						}
//					}
//					sc_car()
//				})
//				function sc_car(){
//					var sc_str = $.cookie('goods');
//					if(sc_str){//如果购物车cookie不为空。
//						var sc_obj = eval(sc_str);
//						var sc_num = 0 ; 
//						for(var i in sc_obj){
//							sc_num = Number(sc_obj[i].num) + sc_num;
//						}
//						$('.sc_num').html(sc_num);
//					}
//				}
//				
//				function sc_msg(){
//					$.ajax({
//						url:'json/goods.json',
//						type:'GET',
//						success:function(data){
//							var sc_str = $.cookie('goods');
//							if(sc_str){
//								alert(1);
//								var sc_obj = eval(sc_str);
//								var sc_num = 0 ;
//								var html = ''; 
//								var shop_sum = 0;
//								var shop_num = 0;
//								for(var i in sc_obj){					
//									html += '<div class="shopping" style="overflow:hidden"><div class="single"><a href="goodsdetail.html"><img src="'+data[sc_obj[i].id].img+'" alt=""/></a></div><div class="single_text"><a href="goodsdetail.html">'+data[sc_obj[i].id].capacity+'</a></div><div class="single_num">'+sc_obj[i].num+'</div><div class="single_price">'+data[sc_obj[i].id].word+data[sc_obj[i].id].price+'</div></div>'
//									shop_sum += parseInt(data[sc_obj[i].id].price);
//									shop_num += parseInt(sc_obj[i].num);
//								}
//								$('.car1').find("ul").html(html);
//								$('.all_shopping').html(html);
//								$(".all_goods_num").html(shop_num + "件商品");
//								$(".all_goods_price").html("￥" + shop_sum);
//								
//							}
//						}
//					})
//				}
//				$(".fixed_memu").find(".tab-logo_cart").click(function(){
//					$(".fixed_memu").animate({"right":"278px"},500)
//					sc_msg();
//				})
//				$(".close_bg").click(function(){
//					$(".fixed_memu").animate({"right":"0px"},500)
//				})
//	}//sccess结束
//})
//购物车;
	$(".goods_top").click(function(){
		$('body,html').animate({scrollTop:0},30);
			return false;
	});
	$(".sideNav_list").find(".top_end").click(function(){
		$('body,html').animate({scrollTop:0},30);
			return false;
	});
})

