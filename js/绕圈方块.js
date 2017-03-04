window.onload = function(){
//抓取外圈1
var oParent1 = document.getElementById('parent1');
//抓取外圈2
var oParent2 = document.getElementById('parent2');
//抓取外圈3
var oParent3 = document.getElementById('parent3');
//抓取方块
var oS = document.getElementsByClassName('s1');
//设置移动方向
	var attr = ['left','top','left','top','top','left','top','left'];
//设置移动速度
	var speed = [10,10,-10,-10,10,10,-10,-10];
//设置临界点
	var end = [350,350,0,0,350,350,0,0];
//设置下标
	var iNow1 = 0;
	var iNow2 = 0;
	var iNow3 = 0;
//抓取开关
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
//设置开关控制方块2移动
	var flag1 = 1;
	btn1.onclick = function(){
		if (flag1) {
		 timer1 = setInterval(run1,30);
			flag1 = 0;
		} else{
			clearInterval(timer1);
			 flag1 = 1;
		}		
	}
//设置开关控制方块1移动
	var flag2 = 1;
	btn2.onclick = function(){
		if (flag2) {
		 timer2 = setInterval(run2,30);
			flag2 = 0;
		} else{
			clearInterval(timer2);
			 flag2 = 1;
		}		
	}	
//设置开关控制方块2移动
	var flag3 = 1;
	btn3.onclick = function(){
		if (flag3) {
		 timer3 = setInterval(run3,30);
			flag3 = 0;
		} else{
			clearInterval(timer3);
			 flag3 = 1;
		}		
	}
//设置开关控制方块3移动
	var flag3 = 1;
	btn3.onclick = function(){
		if (flag3) {
		 timer3 = setInterval(run3,30);
			flag3 = 0;
		} else{
			clearInterval(timer3);
			 flag3 = 1;
		}		
	}
	

//方块1做循环运动
function run1(){
//div.style.left = div.当前位置 + 10 + 'px';
	oS[0].style[attr[iNow1]] = parseInt(getStyle(oS[0],attr[iNow1])) + speed[iNow1] + 'px';
//当div.当前位置[i] == end[i]时
	if (parseInt(getStyle(oS[0],attr[iNow1])) == end[iNow1]) {
		if (iNow1 == 3) {
			iNow1 = 0;
		} else{
			iNow1++; 
		}
	}
}
	
//方块2做循环运动
function run2(){
//div.style.left = div.当前位置 + 10 + 'px';
	oS[1].style[attr[iNow2]] = parseInt(getStyle(oS[1],attr[iNow2])) + speed[iNow2] + 'px';
//当div.当前位置[i] == end[i]时
	if (parseInt(getStyle(oS[1],attr[iNow2])) == end[iNow2]) {
		if (iNow2 == 7) {
			iNow2 = 0;
		} else{
			iNow2++; 
		}
	}
}

//方块1做循环运动
function run3(){
//div.style.left = div.当前位置 + 10 + 'px';
	oS[2].style[attr[iNow3+4]] = parseInt(getStyle(oS[2],attr[iNow3+4])) + speed[iNow3+4] + 'px';
//当div.当前位置[i] == end[i]时
	if (parseInt(getStyle(oS[2],attr[iNow3+4])) == end[iNow3+4]) {
		if (iNow3 == 3) {
			iNow3 = 0;
		} else{
			iNow3++; 
		}
	}
}

//抓取方块当前的位置
function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}

	
	
}
