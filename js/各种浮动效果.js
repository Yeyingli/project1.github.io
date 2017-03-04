window.onload = function(){
//从上往下浮现特效
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
a1.onmouseover = function(){
	a2.style.height = '200px'; //控制height 是从上往下出现
	a2.style.transition = '1s';
}
a1.onmouseout = function(){
	a2.style.height = '0';  //控制height 是从上往下出现
	a2.style.transition = '1s';
}
//从下往上浮现特效
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
b1.onmouseover = function(){
	b2.style.top = 0;
	b2.style.height = '200px';
	b2.style.transition = '1s';
}
b1.onmouseout = function(){
	b2.style.top = '200px';
	b2.style.height = '0';
	b2.style.transition = '1s';
}
//从角落浮现特效
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
c1.onmouseover = function(){
	c2.style.top = 0;
	c2.style.height = '200px';
	c2.style.width = '200px';
	c2.style.transition = '1s';
}
c1.onmouseout = function(){
	c2.style.top = '200px';
	c2.style.height = '0';
	c2.style.width = '0';
	c2.style.transition = '1s';
}
				
}