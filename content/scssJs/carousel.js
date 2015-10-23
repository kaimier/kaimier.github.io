;(function($){
	var Carousel=function(poster){		
		var This=this;
	//	console.log(poster.attr('data-setting'));
		this.poster= poster;
		this.posterItemMain=poster.find("ul.poster-list");
		this.nextBtn=poster.find('div.poster-next-btn');
		this.prevBtn=poster.find('div.poster-prev-btn');
		this.posterItems=poster.find('li.poster-item');
		this.posterFirstItem=this.posterItems.first();
		this.posterLastItem=this.posterItems.last();
		

		//默认配置参数
		this.setting={
				"width":1000, //幻灯片的宽
		  		"height":270, //幻灯片的高
		  		"posterWidth":640, //幻灯片第一帧的宽度
		  		"posterHeight":270, //幻灯片第一帧的高度
		  		"scale":0.9,
		  		"speed":500,
		  		"verticalAlign":'middel'
		};

		$.extend(this.setting,this.getSetting());
		//设置配置参数值
		this.setSettingValue();
		this.setPosterPos();
		this.nextBtn.click(function() {			
			This.carouseRotate('left');
		});
		this.prevBtn.click(function() {			
			This.carouseRotate('right');
		});
	};
	Carousel.prototype={
		//旋转方法
		carouseRotate:function(dir) {
			var _This=this;
			var zIndexArr=[];
			if (dir==='left') {
				this.posterItems.each(function(i) {
					var This=$(this),
						prev=This.prev().get(0)?This.prev():_This.posterLastItem,
						width=prev.width(),
						height=prev.height(),
						zIndex=prev.css('zIndex'),
						opacity=prev.css('opacity'),
						left=prev.css('left'),
						top=prev.css('top');						
						zIndexArr.push(zIndex);
						This.animate({
                             width:width,
                             height:height, 
                             // zIndex:zIndex,
                             opacity:opacity,
                             left:left,
                             top:top
						});


				});
				this.posterItems.each(function(i, el) {
					$(this).css('zIndex',zIndexArr[i]);
				});

			}else if (dir==='right') {

				this.posterItems.each(function() {
					var This=$(this),
						next=This.next().get(0)?This.next():_This.posterFirstItem,
						width=next.width(),
						height=next.height(),
						zIndex=next.css('zIndex'),
						opacity=next.css('opacity'),
						left=next.css('left'),
						top=next.css('top');
						zIndexArr.push(zIndex);
						This.animate({
                             width:width,
                             height:height, 
                             // zIndex:zIndex,
                             opacity:opacity,
                             left:left,
                             top:top
						});

				});

				this.posterItems.each(function(i, el) {
					$(this).css('zIndex',zIndexArr[i]);
				});

			}
		},
		//设置剩余的帧的位置关系
		setPosterPos:function(){
			var This=this;
			var sliceItems=this.posterItems.slice(1), //除掉第一帧
				sliceSize=sliceItems.size()/2,
				rightSlice=sliceItems.slice(0,sliceSize),
				level=Math.floor(this.posterItems.size()/2);
				leftSlice=sliceItems.slice(sliceSize);



				//设置右边帧的位置关系
				var rw= this.setting.posterWidth,
					rh= this.setting.posterHeight,
					gap=((this.setting.width-this.setting.posterWidth)/2)/level;
				var firstLeft =(this.setting.width-this.setting.posterWidth)/2;
					//固定变化left值
				var fixOffsetLeft=firstLeft + rw;

				rightSlice.each(function(i){
					level--;
					var j=i;
					rw=rw*This.setting.scale;
					rh=rh*This.setting.scale;				
					
					$(this).css({
						zIndex:level,
						width:rw,
						height:rh,
						opacity:1/(++i),
						left:fixOffsetLeft+(++j)*gap-rw,
						top:This.setVertucalAlign(rh)
					});
				});

				//设置左边的位置关系
				var lw=rightSlice.last().width(),
					lh=rightSlice.last().height(),
					oloop=Math.floor(this.posterItems.size()/2);

				leftSlice.each(function(i){

					$(this).css({
						zIndex:i,
						width:lw,
						height:lh,
						opacity:1/oloop,
						left:i*gap,
						top:This.setVertucalAlign(lh)
					});
					lw=lw/This.setting.scale;
					lh=lh/This.setting.scale;
					oloop--;
				});
		},
		setVertucalAlign:function(height){
			var verticalType= this.setting.verticalAlign,
				top=0;
				if (verticalType==='middle') {
					top=(this.setting.height-height)/2;
				}else if(verticalType==='top'){
					top=0;
				}else if(verticalType==='bottom'){
					top=this.setting.height-height;
				}else{
					top=(this.setting.height-height)/2;
				}
			return top;
		},
		//设置配置参数值去控制基本的宽度高度。。。
		setSettingValue:function(){
			this.poster.css({
				width:this.setting.width,
				height:this.setting.height
			});
			this.posterItemMain.css({
				width:this.setting.width,
				height:this.setting.height
			});
			//计算上下切换按钮宽度
			var w=(this.setting.width-this.setting.posterWidth)/2;
			this.nextBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.posterItems.size()/2)
			});
			this.prevBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.posterItems.size()/2)
			});
			this.posterFirstItem.css({
				width:this.setting.posterWidth,
				height:this.setting.posterHeight,
				left:w,
				zIndex:Math.ceil(this.posterItems.size()/2)
			});


		},
		//获取人工配置参数
		getSetting:function(){
			var setting= this.poster.attr('data-setting');
			if (setting && setting!=="") {
				return $.parseJSON(setting);
			}else{
				return {};
			}
			
			
		}
	};
	Carousel.init=function(posters){
		var This =this;
		posters.each(function(i,el){
			
			new This($(this));

		});
	};
	window['Carousel'] = Carousel;
})(jQuery);