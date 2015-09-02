;(function($){
	var LightBox=function(){
		var This=this;
		this.popupMask=$('<div id="G-lightbox-mask">');
		this.popupWin=$('<div id="G-lightbox-popup">');
		this.bodyNode=$(document.body);
		// this.renderDOM();
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
		});
	};
	LightBox.prototype={
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
				'<div class="lightbox-btn lightbox-prev-btn"><</div>'+
				'<img class="lightbox-image" src="../content/images/2-2.jpg" alt="" width="100%">'+
				'<div class="lightbox-btn lightbox-next-btn">></div>'+
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