$(function(){
//btn登录   wrap:block    box:block    box:left:40%,right:40%
$('#btn').on('click',function(){
	$('#box').show();
	$('#wrap').show();
});
//x  wrap:none    box:none    box:left:0,right:0  
$('span').on('click',function(){
	$('#wrap').hide();
	$('#box').hide();
});
	
});
