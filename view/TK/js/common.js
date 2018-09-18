//aos动画
function aosAddAttr(object){
	var time = 300;
    object.each(function(){
    	$(this).attr('data-aos-delay',time).attr('data-aos','flip-left');
    	time += 100;
    })
}
//导航下拉
function navSlide(){
	$('.language_btn').click(function(){
		$(this).find('.slide_box').stop(true).slideToggle();
	});
}
$(function(){
	navSlide();
	aosAddAttr($('footer dl'));
})