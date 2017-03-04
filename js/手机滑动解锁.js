window.onload = function(){
	var lock = document.getElementById('lock');
	var h1 = lock.getElementsByTagName('h1')[0];
	var flag = 1;
	console.log(h1.offsetLeft)  //383 - 983
	console.log(h1.offsetTop)   //75 - 207			  	
		h1.onmousemove = function(e){
//		//阻止事件冒泡
//		e.cancelBubble = true; //阻止事件冒泡  只支持IE
//		e.stopPropagation();   //阻止事件冒泡  只支持IE
		var e = e || window.event;
			if (e.offsetX < 595) {
				h1.style.backgroundPositionX = parseInt(e.offsetX) -170 + 'px';
				console.log(e.offsetX)	
				console.log(h1.style.backgroundPositionX) 
			} else if(flag) {
				window.open("https://www.baidu.com/");
				alert('解锁成功');
				flag = 0; //flag保证alert只弹出一次
//window.location.href = '网页地址' ; 在本页面中打开网页
//window.open("https://www.baidu.com/");
//window.open('网页地址')在新页面中打开网页
			}	
		}
			  				  	
}