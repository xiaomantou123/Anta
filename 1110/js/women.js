$('.brand_content').find('li').hover(function(){
	$(this).find("p").show();
},function(){
	$(this).find("p").hide();
})
$.ajax({
	url: "json/women.json",
	type: "GET",
	success: function(data){
		var html = "";
	    for(var i=0;i < data.length; i++){
	     	html += '<li class="w_sort"><div class="wca_logo"><img src="' + data[i].img + '"></div><div class="wca_list"><h3><a href="javascript:void(0)">' +data[i].h2+ '</a></h3><ul class="clear  wca_item">';
	     	for(var j=0;j < data[i].capacity.length; j++){
	     		html += '<li><a href="javascript:void(0);">' +data[i].capacity[j]+ '</a></li>';
	     	}
	     	html += '</ul></div></li>';
	     }
	     $(".wca_ul").html(html);
	     $(".wca_ul").find(".w_sort").eq(3).css("border-right","none");
	     $(".wca_ul").find(".w_sort").eq(6).css("border-right","none");
	}
})

$.ajax({
	url: "json/w_list.json",
	type: "GET",
	success: function(data){
		var html = "";
	     	for(var i=0;i < data.length; i++){
	     		for(var j=0;j<data[i].list_img.length;j++){
	     			html = '<li><div class="bags" style="width: 183px; margin: 0 auto;"><div class="list_img"><img src="' + data[i].list_img[j] + '"/></div><div class="list_p"><p class="p_title"><a href="javascript:void(0)">' + data[i].list_title[j] + '</a></p><p class="sale_price"><em><strong>' + data[i].list_p[0] + '</strong>' + data[i].list_price[j] + '</em></p></div></div></li>';
	     			$(".bags_list").eq(i).append(html);
	     		}
	     		
	     	}
	    
	     $('.bags_list').find("li").hover(function(){
			$(this).find(".bags").attr("class","shadow");
			$(this).find(".list_p").css("background","#e0e0e0")
			},function(){
				$(this).find(".shadow").attr("class","bags");
			$(this).find(".list_p").css("background","")
		})
	}
})
$(".s_memu").hover(function(){
	$(".m_li3").attr("class","m_li");
},function(){
	$(".m_li").attr("class","m_li3");
})
