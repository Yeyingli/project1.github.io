window.onload = function(){
//钢琴声音播放器
var oA = document.getElementById('a1');
//钢琴按键绑定声音
document.onkeydown = function(e){
	var e = e || window.event;
	console.log(e.keyCode);
	//a65 s83 d68  f70  j74  k75  l76 
	switch (e.keyCode){
		case 65:
				oA.src = "http://s8.qhimg.com/share/audio/piano1/c4.mp3";
				oA.play();	
			break;
		case 83:
				oA.src = "http://s8.qhimg.com/share/audio/piano1/d4.mp3";
				oA.play();
			break;
		case 68:
				oA.src = "http://s8.qhimg.com/share/audio/piano1/e4.mp3";
				oA.play();
			break;
		case 70:
				oA.src = "http://s8.qhimg.com/share/audio/piano1/f4.mp3";
				oA.play();
			break;
		case 74:
				oA.src = "http://s8.qhimg.com/share/audio/piano1/g4.mp3";
				oA.play();
			break;
		case 75:
				oA.src = "http://s8.qhimg.com/share/audio/piano1/a4.mp3";
				oA.play();
			break;
		case 76:
				oA.src = "http://s8.qhimg.com/share/audio/piano1/b4.mp3";
				oA.play();
			break;
		default:
			break;
	}
}

}		