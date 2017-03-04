window.onload = function(){
//开始按钮
	var oBtn = document.getElementById('btn');
//绕圈div框
	var oBox = document.getElementById('box');
//绕圈div
	var aDiv = oBox.getElementsByTagName('div');
//中奖显示div
	var oPrice = document.getElementById('price');
//奖励信息显示框
	var oMessage = document.getElementById('message');
//奖励信息div
	var aMsg = oMessage.getElementsByTagName('div');
//投币按钮
	var oCoins = document.getElementById('coins');
//余额提示
	var oSpan = document.getElementById('oSpan');
//绕圈定时器
	var timer = 0;
//绕圈停止定时器
	var timer1 = 0;
//硬币初始值
	var coin = 0;
//点击投币，一次一枚
	oCoins.onclick = function(){
		coin++;
		oSpan.innerHTML = coin + '元';				
	};
//开始按钮
	oBtn.onclick = function(){
//判断有没有币,有币开始,使用一次减一枚币
		if (coin>0) {
			//清除定时器
			clearInterval(timer);
			//绕圈循环
			timer = setInterval(run,100);
			//绕圈延迟停止
			timer1 = setTimeout(function(){
				clearInterval(timer);
				oPrice.innerHTML = '恭喜你中奖了！'+ oVelue;
			//中奖信息浮现
			//如果iNow == 11的时候 iNow == 0,解决iNow[11]5等奖不显示的BUG
				if (iNow == 0) {
					aMsg[arr[11]].style.display = 'block';
					aMsg[arr[11]].style.top = '0';
				} else{
					aMsg[arr[iNow-1]].style.display = 'block';
					aMsg[arr[iNow-1]].style.top = '0';
				}
			},(Math.random()*3+1)*1000);  //((0-1)*3+1)*1000
			//每次跑完从头开始跑
			iNow = 0;
			//使用一次减少一枚硬币
			coin--;
			oSpan.innerHTML = coin + '元';
		} else{
			for (var i=0;i<aMsg.length;i++) {
				aMsg[i].style.display = 'none';
				aMsg[i].style.top = '492px';
			}
			alert('请投币');
			aMsg[5].style.display = 'block';
			aMsg[5].style.top = '0';
		}	
	}
//循环抽奖
	var iNow = 0;
	var arr = [0,1,2,3,6,7,12,11,10,9,8,4]
	function run(){
		for (var i=0;i<aDiv.length;i++) {
			aDiv[i].className = '';
			aDiv[arr[iNow]].className = 'box';
			oVelue = aDiv[arr[iNow]].innerHTML;
			aMsg[i].style.display = 'none';		
		}
		if (iNow == 11) {
			iNow = 0;
		} else{
			iNow++;
		}
	}
			
}
