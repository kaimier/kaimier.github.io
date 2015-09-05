;(function($){
	var LightBox=function(){
		var This=this;
		this.popupMask=$('<div id="G-lightbox-mask">');
		this.popupWin=$('<div id="G-lightbox-popup">');
		this.bodyNode=$(document.body);
		this.renderDOM();

		this.picViewArea=this.popupWin.find("div.lightbox-pic-view");
		this.popupPic=this.popupWin.find("img.lightbox-image");
		this.picCaptionArea=this.popupWin.find("div.lightbox-pic-caption");
		this.nextBtn=this.popupWin.find("span.lightbox-next-btn");
		this.prevBtn=this.popupWin.find("span.lightbox-prev-btn");

		this.captionText=this.popupWin.find("p.lightbox-pci-desc");
		this.currentIndex=this.popupWin.find("span.lightbox-of-index");
		this.closeBtn=this.popupWin.find("span.lightbox-close-btn");


		this.groupName=null;
		this.groupData=[];
		this.bodyNode.delegate(".js-lightbox,*[data-role=lightbox]",'click',function(e){
			//阻止事件冒泡
			e.stopPropagation();
			var currentGroupName=$(this).attr('data-group');
			if (currentGroupName != This.groupName) {
				This.groupName=currentGroupName;
				This.getGroup();
			};

			This.initPopup($(this));

		});
	};
	LightBox.prototype={
		loadPicSize:function(sourceSrc){
			var This=this;
			this.preLoadImg(sourceSrc,function(){
				This.popupPic.attr("src",sourceSrc);
				var picWidth=This.popupPic.width(),
					picHeight=This.popupPic.height();
				This.changePic(picWidth,picHeight);
			})
		},
		changePic:function(width,height){
			var This=this,
				winWidth=$(window).width(),
				winHeight=$(window).height();
			var scale=Math.min(winWidth/(width+10),winHeight/(height+10),1);
			width=width*scale;
			height=height*scale;
			this.picViewArea.animate({
				width:width-10,
				height:height-10
			})
			this.popupWin.animate({
				widht:width,
				height:height,
				marginLeft:(-width/2),
				top:(winHeight-height)/2
			},function(){
				This.popupPic.css({
					width:width-10,
					height:height-10
				}).fadeIn();
				This.picCaptionArea.fadeIn();
			})
		},
		preLoadImg:function(src,callback){
			var img=new Image();
			if(!!window.ActiveObject){
				img.onreadystatechange=function(){
					if(this.readystate=="complete"){
						callback();
					}
				}
			}else{
				img.onload=function(){
					callback();
				}
			};
			img.src=src;
		},
		showMaskAndPopup:function(sourceSrc,currentId){
			var This=this;
			this.popupPic.hide();
			this.picCaptionArea.hide();

			this.popupMask.fadeIn();
			var winWidth=$(window).width(),
				winHeight=$(window).height();
			this.picViewArea.css({
				width:winWidth/2,
				height:winHeight/2
			});
			this.popupWin.fadeIn();

			var viewHeight=winHeight/2+10;

			this.popupWin.css({
				width:winWidth/2+10,
				height:winHeight/2+10,
				marginLeft:-(winWidth/2+10)/2,
				top:-viewHeight
			}).animate({
				top:(winHeight-viewHeight)/2
			},100,function(){
				This.loadPicSize(sourceSrc);
			});

			this.index=this.getIndexOf(currentId);
			var groupDataLength=this.groupData.length;
			if (groupDataLength>1) {
				console.log(this.index)
				if(this.index===0){
					this.prevBtn.addClass("disabled");
					this.nextBtn.removeClass("disabled");
				}else if(this.index===groupDataLength-1){
					this.nextBtn.addClass("disabled");
					this.prevBtn.removeClass("disabled");
				}else{
					this.nextBtn.removeClass("disabled");
					this.prevBtn.removeClass("disabled");
				}
			};

		},
		getIndexOf:function(currentId){
			var index=0;
			$(this.groupData).each(function(i){
				index=i;
				if(this.id === currentId){
					return false;
				}
			})
			return index;
		},
		initPopup:function(currentObj){
			var This=this
			sourceSrc=currentObj.attr("data-source"),
			currentId=currentObj.attr("data-id");

			this.showMaskAndPopup(sourceSrc,currentId);
		},
		getGroup:function(){
			var This=this;
			var groupList=this.bodyNode.find("*[data-group="+this.groupName+"]");
			// alert(groupList.size())
			This.groupData.length=0; 
			groupList.each(function(){
				This.groupData.push({
					src:$(this).attr("data-source"),
					id:$(this).attr("data-id"),
					caption:$(this).attr("data-caption")
				})			
			})
			console.log(This.groupData);
		},
		renderDOM:function(){
			var strDom='<div class="lightbox-pic-view">'+
				'<span class="lightbox-btn lightbox-prev-btn"><</span>'+
				'<img class="lightbox-image" src="../content/images/2-2.jpg" alt="">'+
				'<span class="lightbox-btn lightbox-next-btn">></span>'+
			'</div>'+
			'<div class="lightbox-pic-caption">'+
				'<div class="lightbox-caption-area">'+
					'<p class="lightbox-pic-desc"></p>'+
					'<span class="lightbox-of-index">当前索引：0 of 0</span>'+
				'</div>'+
				'<span class="lightbox-close-btn"></span>'+
			'</div>';

			this.popupWin.html(strDom);
			this.bodyNode.append(this.popupMask,this.popupWin);
		}
	};
	window["LightBox"]=LightBox;


})(jQuery)