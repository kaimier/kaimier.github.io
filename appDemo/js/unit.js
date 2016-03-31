/*
 * @Author: suzhihui
 * @Date:   2016-03-29 10:37:28
 * @Last Modified by:   suzhihui
 * @Last Modified time: 2016-03-31 15:37:00
 */
var BookReader = function(area, pageName, referer, uid) {
    if (area != undefined && area != null) {
        this.site = area;
    }
    if (pageName != undefined && pageName != null) {
        this.page = pageName;
    }
    if (referer != undefined && referer != null) {
        this.referer = referer
    }
    if (uid != undefined && uid != null) {
        this.uid = uid
    }
};
BookReader.prototype.setPage = function(pageName) {
    this.page = pageName;
};
BookReader.prototype.setPageName=function(pageName) {
    this.pageName=pageName;
}

;(function(win, document, $) { //200 e()
    var BOOK = window.BOOK || {};
    function createObj(dataPage) {
        var br=new BookReader();

    }
    BOOK.Namespace = {
        //BOOK.Namespace.register("touch.component.module")
        register: function(str) {
            var eArray = str.split("."),
                win = window,
                len, i;
            for (i = 0, len = eArray.length; i < len; i++) {
                if (typeof win[eArray[i]] == "undefined") {
                    win[eArray[i]] = {};
                }
                win = win[eArray[i]];
            }
            return win;
        }
    };
    BOOK.Utils = {
        checkPhone: function(tel) {
            var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            if (reg.test(tel)) {
                return true
            }
            return false;
        }
    };
    (function() {
        var dataPage,newppc,ppc,m,oHead=$("head");
        dataPage=oHead.data("page");
        createObj(dataPage);
    })();
    window.BOOK = BOOK;
    window.B = BOOK.Utils;
})(window,document,Zepto,"注册全局事件");
BOOK.Namespace.register("book.search.component");
;(function($,module) {//797 搜索模块
    module.SearchModule=function(obj) {
        this.elem={
            hideSearP: $(".cancel_moudle"),
            searPage: $(".search_page"),
            list: $(".linklist"),
            listDetail: $(".linklistdetail"),
            input: $(".form_moudle").find("input[type=text]"),
            topbar: $(".sear_moudle"),
            content: $(".pageContent"),
            result: $(".search-result"),
            esfDefault: $(".esfDefault"),
            esfHistory: $(".esfHistory")
        };
        var data={data:{}};
        this.nowkeyw="";
        this.page=1;
        this.options=$.extend({},data,obj||{});
        this.init();
    }
    module.SearchModule.prototype={
        init:function(){
            this.event();
            this.setScroll();
            if($(".noresult").length !== 0){
                $("#list").css("margin-top","38px")
            }
        },
        setScroll: function() {
            var elemH = $(window).height() - this.elem.topbar.height() + "px";
            this.elem.content.css({
                "max-height": elemH,
                "overflow-y": "scroll"
            })
        },
        event:function() { //834
            var _this=this;
            this.options.target.select.forEach(function(id) {
                $(id).on(_this.options.target.event,function() {//837
                   _this.getHistory();
                    _this.elem.searPage.show();
                    $("#searchHide").hide();
                    _this.elem.input.focus();
                })
            });
            this.elem.hideSearP.on("click", function() {
                _this.elem.searPage.hide();
                $("#searchHide").show()
            });
            $(".form_moudle").on("submit", function() { //848
                var val = $.trim(_this.elem.input.val());
                if (val.length <= 0) {
                    return
                }
                $("#searchHide").show();
                _this.redirect(val); //重定向 854
                return false
            });
            this.elem.content.on('click','a',function(e) {
                e.preventDefault();
                window.location.href=$(this).attr('href');
                $('#searchHide').show();
            });
            this.elem.input.on('input', function() { //862
                var el = $(this); // 保存input对象
                clearTimeout(_this.timer);
                _this.timer=setTimeout(function() { //开启定时器，50毫秒请求一次
                    var value=$.trim(el.val());//input值去掉空格
                    if (value.length===0) {
                        _this.elem.content.show();
                        _this.elem.result.hide();
                    }else{
                        _this.getSuggest(value);
                    }
                },50)
            });

        },
        redirect: function(key) { //877 重定向
            this.redirectEvent(key);
        },
        redirectEvent:function(key) { //883
            var url=this.options.searchurl?this.options.searchurl:this.options.url;
            var hash=url.indexOf("?"),
                itemUrl,urlKey=[],arrUrl,
                domain= hash<0 ? url: url.substring(0,hash);
                if (hash>0) {
                    arrUrl=url.substring(hash).replace("?","").split("&");
                    for(itemUrl in arrUrl){
                        if (arrUrl[itemUrl].indexOf("q=") === 0 || arrUrl[itemUrl]==="") {
                            continue
                        }
                        urlKey.push(arrUrl[g]);
                    }
                }
                urlKey.push("q=" + encodeURIComponent(key));
                if (this.hrefReplace === true) {
                    location.replace(domain + "?"+ urlKey.join("&"));
                    return
                }
                location.href= domain+"?" + urlKey.join("&");
        },
        /**
         * 构建单条搜索结果
         * @Author: 老苏
         * @param   {[type]} obj 查询后的单条数据
         * @param   {[type]} str 关键词
         * @return  {[type]} 构建单条搜索结果
         */
        buildItem:function(obj,str) {//904
            var keyword=this.encodeHtml(obj.keyword),
                des=this.encodeHtml(obj.description);
                oStr=this.encodeHtml(str);
                keyword=this.buildHigh(keyword,oStr);
                des = this.buildHigh(des,oStr)
                return '<li><a href="' + obj.url + "?q=" + obj.keyword + '" class="soj" data-soj="' + obj.from_code + '"><span class="elli">' + keyword + '</span><br/><span class="elli">' + des + "</span></li>";
        },
        /**
         * 返回高亮字段
         * @Author: 老苏
         * @param   {[type]} oVal 字段
         * @param   {[type]} str  关键词
         * @return  {[string]} 返回高亮字段
         */
        buildHigh:function(oVal,str) {
            var rTxt;
            if (str) {
                rTxt=new RegExp(str,"g");
                oVal = oVal.replace(rTxt,function() {
                    return "<em>" + arguments[0] + "</em>"
                })
            }
            return oVal;
        },
        encodeHtml:function(html) { //922
            if ($.type(html) !=="string" || html.lenght===0) { return "";}
            html = html.replace(/&/g, "&gt;");
            html = html.replace(/</g, "&lt;");
            html = html.replace(/>/g, "&gt;");
            html = html.replace(/ /g, "&nbsp;");
            html = html.replace(/\'/g, "&#39;");
            html = html.replace(/\"/g, "&quot;");
            return html;
        },
        getHistory:function() { //934
            var _this=this;
            $.ajax({
                url:_this.options.suggest,
                type:'get',
                dataType:'jsonp',
                jsonp:'callback',
                data:{
                    city_id:_this.options.cityid,
                    form:_this.page
                },
                success:function(obj) {
                    _this.elem.esfHistory.html("");
                    for(var str in obj.data){
                        if ($.isArray(obj.data[str])) {
                            _this.buildHistory(obj.data[str],str)
                        }
                    }
                },
                error:function() {
                    console.log('error');
                }
            })
        },
        buildHistory:function(obj,item) { //958
            var arr=[],
                _this=this;
            $.each(obj,function(i,el) {
                arr.push(_this.buildHistoryItem(el||{}))
            });
            var arrList=arr.join("");
            switch(item){ //965
                case "default":
                    arrList = '<h3>热门搜索：</h3><div class="hot_moudle">' + arrList + "</div>";
                    this.elem.esfHistory.hide();
                    this.elem.esfDefault.html(arrList);
                    break;
                case "searched":
                    arrList = '<h3>搜索历史</h3><div class="history_dom"><div class="history_moudle">' + arrList + "</div></div>";
                    this.elem.esfDefault.hide();
                    this.elem.esfHistory.append(arrList);
                    break;
            }
        },
        buildHistoryItem:function(obj) { //993
            var value= this.encodeHtml(obj.keyword);
            return '<a href="'+obj.url+"?q="+obj.keyword+'" class="soj" data-soj="' + obj.form_code + '">' + value + "</a>"
        },
        getSuggest:function(val) {//997
            var _this=this,
                obj=$.extend({
                    keywords:val
                },_this.options.data||{});
            this.nowkeyw=$.trim(_this.elem.input.val());
            $.ajax({
                url:_this.options.suggest,
                type:'get',
                dataType:'jsonp',
                jsonp:'callback',
                data:{
                    city_id:_this.options.cityid,
                    kw:_this.nowkeyw,
                    form:_this.page
                },
                success:function (obj) { // 1013
                    if (_this.nowkeyw === val) {
                        if ($.isArray(obj)) {
                            _this.suggest=obj;
                            _this.content.hide();
                            _this.elem.result.show();
                            _this.bulidSuggest(obj,val);
                        }else{
                            if($.isArray(obj.data)){
                                _this.suggest = obj.data;
                                _this.elem.content.hide();
                                _this.elem.result.show();
                                _this.buildSuggest(obj.data, val)
                            }else{
                                if($.isArray(obj.data.match)){
                                    _this.suggest = obj.data;
                                    _this.elem.content.hide();
                                    _this.elem.result.show();
                                    _this.buildSuggest(obj.data, val)
                                }
                            }
                        }
                    }
                },
                error:function() {
                    console.log('error');
                }
            })
        },
        buildSuggest:function(array,str) {//1042
            var arr=[],
                _this=this;
                arr.push('<li class="searchKey">' + this.nowkeyw + "</li>");
                $.each(array.match,function(index, el) {
                    arr.push(_this.buildItem(el||{},str))
                });
                this.elem.result.html(arr.join(""));
        }
    }
})(Zepto,book.search.component,"搜索模块");
;(function($,module) {//1051
    var pix = function() {//设备像素比 1054
        var scale = Math.floor(window.devicePixelRatio);
        scale = scale >= 2 ? 1.5 : 1;
        pix = function() {
            return scale
        };
        return scale
    };
    var d = function() {
        var e = new Image(),
            f = false;
        e.onload = function() {
            f = true
        };
        e.onerror = function() {
            T.trackEvent(APF.info.pageName + "_webp_support_error")
        };
        e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        d = function() {
            return f
        };
        return f
    };
    module.LazyLoadImg=function(obj) {
        var options={//1076
            min:0,
            max:-1,
            select:"img",
            attr:"data-src",
            ratioAttr:"origin",
            isClip:false,
            imgRange:1
        };
        this.ops={};
        $.extend(this.ops,options,obj);//深拷贝
        this.init();
    }
    module.LazyLoadImg.prototype={ //1089
        constructor:module.LazyLoadImg,
        init:function() {
            var _this =this,
                lock=false;
            rAf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
                window.setTimeout(fn, 1000 / 60)
            };
            function callBack() {//1198
                var win=$(window),
                    min=_this.ops.min,
                    max=_this.ops.max,
                    winH=win.height(),
                    scrollT=win.scrollTop();
                if (_this.ops.min<scrollT) {
                    min=scrollT;
                }
                if (_this.ops.max=== -1 || winH * _this.ops.imgRange + scrollT<_this.ops.max) {
                    max = winH * _this.ops.imgRange + scrollT;
                }
                _this.refreshImg(min,max); //加载可社区图片
                lock=false;
            }
            function loadImg() {
                if (lock === true) {
                    return;
                }
                lock=true;
                rAf(callBack);
            }
            $(window).scroll(loadImg);
            $(document).on("touchmove",loadImg);
            $(window).trigger("scroll");
        },
        /**
         * 加载可社区图片
         * @Author: 老苏
         * @param   {int} min 可视区最小值
         * @param   {int} max 可视区最大值
         * @return  {no}     无返回值
         */
        refreshImg:function(min,max) { //1125
            var _this=this,
                className,h;
            className=this.ops.select.replace(".","");
            $(this.ops.select).each(function(i,el) {
                var aImg=$(el);//当前图片
                imgH=aImg.offset().top;//每张图的top值
                if (imgH >= min && imgH <= max) {//取出可视区的图片,调用imgReplace方法
                    _this.imgReplace(aImg, _this.ops.attr, _this.ops.ratioAttr, _this.ops.isClip);
                    aImg.removeClass(className)
                }
            })
        },
        imgReplace: function(oImg, oAttr, ratioAttr, z) {
            var _this = this,
                v = oAttr || "data-src",
                imgAttr = oImg.attr(v),
                imgSize, imgW, imgH, p, k, f, l, A, ratioAttr = ratioAttr ? oImg.data(ratioAttr) : false,
                t, o, B;
            if (!imgAttr) {
                return
            }
            imgSize = imgAttr.split("/").pop().match(/\d+x\d+/g); //100x75
            if (imgSize) {
                if (ratioAttr) { //ratioAttr = false 图片是否存在ratioAttr属性
                    imgW = parseInt(oImg.parent().width(), 10);
                    imgH = parseInt(oImg.parent().height(), 10);
                    f = imgSize[0].split("x");
                    l = parseInt(imgSize[0], 10);
                    A = parseInt(imgSize[1], 10);
                    k = A / l;
                    if (k > imgH / imgW) {
                        imgW = parseInt(imgH / k, 10)
                    } else {
                        imgH = parseInt(imgW * k, 10)
                    }
                } else {
                    imgW = parseInt(oImg.width(), 10);
                    imgH = parseInt(oImg.height(), 10)
                }
                if (imgW < 1 || imgH < 1) {
                    return
                }
                p = pix();
                var q = imgW + "x" + imgH;
                if (z === true) {
                    q += "c"
                }
                imgAttr = imgAttr.replace(imgSize, Math.floor(imgW * p) + "x" + Math.floor(imgH * p))
            }
            if (imgAttr) {
                B = new Image();
                B.onerror = function() {
                    return false
                };
                if (d()) {
                    imgAttr && (/pic1\.ajkimg\.com(.*)\.(jpg|png)/.test(imgAttr)) && !(imgAttr.match(/\?t=(\d)/i) > 0) && (imgAttr += "?t=5")
                }
                B.onload = function() {
                    oImg.attr("src", imgAttr)
                };
                B.src = imgAttr
            }
        }
    }
})(Zepto,BOOK.Namespace.register("module.utils"));
;(function($,module,win,book) {
    module.Exposure=function(options) {
        var defaults={
            trackTag:"data-trace",
            delay:50,
            pageName:book.info.pageName,
            prefix:"Exp_"
        };
        this.ops=$.extend(defaults,options);
        this.domCache=[];
        this.pageViewHeight=$(win).height();
        this.timer=null;
        this.dataCache=[];
        this.expStatus=false;
        this.init();
    };
    module.Exposure.prototype={ //508
        constructor:module.Exposure,
        add:function(list) {
            var _this = this;
            this.expStatus=true;
            list.each(function(i,el) {
                _this.domCache.push($(el))
            });
            $(win).scroll();
        },
        init:function() {//518
            var w=$(win);
            w.resize($.proxy(this.resize,this));
            w.on("beforeunload",$.proxy(this.beforeunload,this));
            //wd.scroll($.proxy(this.scroll,this));
        },
        resize:function() { console.log('reszie');
            this.pageViewHeight = $(win).height();
        },
        beforeunload: function() { //527
            this.buildData()
        },
        buildData:function() { //绑定数据
        }
    }
})(Zepto,BOOK.Namespace.register("touch.component.module"),window,BOOK);
/**
 * 首页事件
 * @Author: 老苏
 * @param   {[type]} $    Zopte底层库
 * @param   {string} even 事件名
 * @return  {无}      无返回值
 */
(function($, even) {//1734
    $(window).on('resize',function() {
        $('#swiper-container').height($(window).width()*2.67)
    });
    var mod= touch.component.module,
        exposure=mod.Exposure,
        search=mod.Search;
    new module.utils.LazyLoadImg({
        select:".imglazyload"
    });
    even.Home = function(obj) {//1757
        this.options = obj;
        this.search = {};
        this.init();
    }
    even.Home.prototype = {
        constructor: even.Home, //修改指针
        init: function() {//初始化
            this.exposure=new exposure();
            this.bindSearchEvent();
            this.swiper();
        },
        bindSearchEvent:function() {//搜索事件 1793
            new book.search.component.SearchModule({
                target: {
                    select: ["#search"],
                    event: "click"
                },
                suggest: this.options.suggest,
                searchurl: this.options.searchurl,
                cityid: this.options.city_id
            })
        },
        swiper:function() {
            $('#swiper-container').height($(window).width()/2.67);
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                parallax: true,
                speed: 600,
            });
        }
    }
})(Zepto,BOOK.Namespace.register("touch.home"),"首页模块")