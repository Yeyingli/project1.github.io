//$(function(){})相当于window.onload = function(){}  不加这个前面的函数执行不了
$(function(){
//点击
$('#oUl li').on('click',function(){
	console.log($('#oUl li'))
	$(document).scrollTop($('#box div').eq($(this).index()).offset().top);
})
//滚动
$(window).on('scroll',function(){
	$('#box div').each(function(i,elem){
		if($(elem).offset().top<$(document).scrollTop()+$(window).height()/3){
			$('#box li').eq(i).addClass('color').siblings('#box li').removeClass('color');
		}
	});
});
	
})

			