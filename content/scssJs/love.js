/*update 2015.10.16*/
/**
 * [Swipe description]
 * @param {[type]} container [页面窗口节点]
 * @param {[type]} options [参数] 
 */
function Swipe(container) {	
	//第一个子节点
	var element=container.find(":first");
	//滑动对象
	var swipe={};
	//li数量
	var slides=element.find("li");
	//获取容器尺寸
	var width=container.width();
	var height=container.height();
	//设置li页面总宽度
	element.css({
		width:(slides.length*width)+'px',
		height:height+'px'
	});
	//设置第一个页面LI的宽度
	$.each(slides, function(index) {
		//获取到每一个LI元素
		var slide=slides.eq(index);
		slide.css({
			width:width+'px',
			height:height+'px'
		});
	});

	//监控完成与移动
	swipe.scrollTo=function(x,speed){
		//执行动画移动
		element.css({
			'transition-timing-function':'linear',
			'transition-duration':speed+'ms',
			'transform':'translate3d(-'+x+'px,0px,0px)'
		});
		return this;
	};
	return swipe;	
}
