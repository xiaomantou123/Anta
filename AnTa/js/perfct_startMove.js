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