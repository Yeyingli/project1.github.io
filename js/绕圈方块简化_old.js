window.onload = function(){
//抓取外圈1
var oParent1 = document.getElementById('parent1');
//抓取外圈2
var oParent2 = document.getElementById('parent2');
//抓取外圈3
var oParent3 = document.getElementById('parent3');
//设置移动方向
	var attr = ['left','top','left','top','top','left','top','left'];
//设置移动速度
	var speed = [10,10,-10,-10,10,10,-10,-10];
//设置临界点
	var end = [350,350,0,0,350,350,0,0];

var oS = document.getElementsByClassName('s1');
var oBtn = document.getElementsByTagName('input');
var flag = [1,1,1];
var arr = [[0,1,2,3],[0,1,2,3,4,5,6,7]];
var iNow = 0;	
var timer = [];


for (var i=0;i<oBtn.length;i++) {
	oBtn[i].index = i; 
	oBtn[i].onclick = function(){
		if (flag[this.index] == 1) {
			var a = oS[this.index];
			b = arr[this.index];
			timer[this.index] = setInterval(function(){	
				run(a,b[iNow]) 
			},30)
			flag[this.index] = 0;
			
		} else{
			clearInterval(timer[this.index]);
			flag[this.index] = 1;
		}
	}
}
//方块循环移动
function run(obj,num){
	obj.style[attr[num]] = parseInt(getStyle(obj,attr[num])) + speed[num] + 'px';
	if (parseInt(getStyle(obj,attr[num])) == end[num]) {
		if (num == (b.length-1)) {
			iNow = 0;
		} else{
			iNow++; 
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