//函数声明
function tab(id) {
//抓取元素
	var oParent = document.getElementById(id);
	var aInput = oParent.getElementsByTagName('input');
	var aDiv = oParent.getElementsByTagName('div');
	var aSpan = oParent.getElementsByTagName('span');
	var iNow = 0;
//每个按钮绑定触发事件
	for(var i = 0; i < aInput.length; i++) {
		aInput[i].index = i;
		aInput[i].onclick = function() {
			change(this.index);
			iNow = this.index;
		};
	}
//←
	aSpan[0].onclick = function() {
		if(iNow == 0) {
			iNow = aInput.length - 1;
		} else {
			iNow--;
		}
		change(iNow);

	};
//→
	aSpan[1].onclick = function() {
		if(iNow == aInput.length - 1) {
			iNow = 0;
		} else {
			iNow++;
		}
		change(iNow);
	};
//控制文本框显示和按钮的背景颜色
	function change(iNow) {
		for(var i = 0; i < aInput.length; i++) {
			aInput[i].className = '';
			aDiv[i].style.display = 'none';
		}
		aInput[iNow].className = 'active';
		aDiv[iNow].style.display = 'block';
	};

};