window.onload = function(){
//乘法表
var oMultiply = document.getElementById('multiply');
	for (var i=1 ; i<10 ; i++) {
		for(var j=1; j<=i ; j++){
			oMultiply.innerHTML += '<li class="box" style="left:'+j*80+'px; top:'+i*60+'px";>'+j+'*'+i+"="+i*j+'</li>';
		}
	}
			
}