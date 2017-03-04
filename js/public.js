//网页时间JS
	var aImg = document.getElementsByClassName('timeImg');
	var timer = null;
	timer = setInterval(runtime, 1000);
	function runtime() {
		var oDate = new Date();
		var iH = timeStyle(oDate.getHours());
		var iM = timeStyle(oDate.getMinutes());
		var iS = timeStyle(oDate.getSeconds());
		clock(iH, iM, iS);
	}
	function timeStyle(num) {
		if(num < 10) {
			return '0' + num;
		}
		return '' + num;
	}
	function clock(h, m, s) {
		var time = h + m + s;
		for(var i = 0; i < time.length; i++) {
			aImg[i].src = 'images/img/time/' + time.charAt(i) + '.png';
		}
	}
