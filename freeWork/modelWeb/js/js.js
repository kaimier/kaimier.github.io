$(document).ready(function(){


    //MENU
    /*
     $('.btnMenu').click(function(){
     var swiper = $(".swiper-container");
     var clase = $(this).attr('class');
     $(".botonera").toggleClass("show");
     console.log("===");
     if(clase == 'btnMenu'){
     $(".botonera").fadeIn();
     $(".btnMenu").addClass("open");
     $(".cover").fadeIn();
     }else{
     $(this).removeClass('open');
     $('nav').fadeOut('fast');
     }
     });
     */
// 菜单
    var el_menu = sn.$(".botonera");
    var el_btnMenu = sn.$(".btnMenu");
    globalEventAgent["touchend"]["btnMenu"] = function(e) {
        e.preventDefault();
        if (sn.css(el_menu[0])._contains("show")) {
            setTimeout(function() {
                sn.css(el_menu[0]).toggle("show");
            }, 500);
        } else {
            setTimeout(function() {
                sn.css(el_menu[0]).toggle("show");
            }, 500);
        }
        sn.css(this).toggle("open");
    }
// 子菜单
    globalEventAgent["touchend"]["submenu"] = function(e) {
        var prt = this.parentNode;
        var name = this.nodeName;
        var els = sn.$("div", prt);
        if (els.length) {
            setTimeout(function() {
                sn.css(els[0]).toggle("show");
            }, 200);
        }
    }
    //滚动查询
    globalEventAgent["touchend"]["scrollSearch"] = function(e) {
        var el = this;
        setTimeout(function() {
            sn.css(el.parentNode).toggle("show");
            sn.css(el_menu[0]).toggle("show");
            sn.css(el_btnMenu[0]).toggle("open");
            selectHomeProject(el);
        }, 500);
    }
// 页卡
    var currCard = 0;
    var currCardSwt = false;
    sn(".tab_tle ul li").bind("touchend", function(e) {
        // 停用默认事件和冒泡
        e.stopPropagation();
        e.preventDefault();
        var index = sn.index(this) - 0;
        var clear = function() {
            sn(".tab_slide .page").unbind("touchstart,touchmove,touchend");
            currCardSwt = false;
        }
        if (index === currCard || currCardSwt) {
            window.___temp_clear = setTimeout(function (){
                clear();
            }, 300);
            return;
        }
        clearTimeout(window.___temp_clear);
        currCardSwt = true;
        sn.css(sn.$(".tab_tle ul li")[currCard]).remove("now");
        sn.css(this).add("now");
        sn.css( sn.$(".movebg")[0]).remove("tab_tleLi" + currCard);
        sn.css( sn.$(".movebg")[0]).add("tab_tleLi" + index);
        sn(".tab_slide .page").bind("touchstart,touchmove,touchend", function(e) {
            e.stopPropagation();
            e.preventDefault();
        });
        globalDomEvtSwt = true;
        sn.transition(
            currCard,
            index,
            (index > currCard) ? 'next' : 'pre',
            "fb",
            sn.$(".tab_slide .page"),
            {
                begin: function(){},
                end: function(){
                    currCard = index;
                    currCardSwt = false;
                    sn(".tab_slide .page").unbind("touchstart,touchmove,touchend");
                    globalDomEvtSwt = false;
                }
            }
        );

    });
// 页卡
// S扩展 懒加载 为检测是否可见
    sn.ext({snload: function(settings) {
        var me = this;
        settings = settings || {};
        var conf = {
            threshold: 30,
            attr: "data-original",
            load_class: "load",
            loaded_class: "loaded"
        }
        var sh = me.body().wh;
        var snLoad = function(e) {
            var els = me.$("." + conf.load_class);
            if (els.length) {
                loadpic(els);
            } else {
                //me.evt.off(window, 'scroll', snLoad);
            }
        }
        me.evt.on(window, 'scroll', snLoad);
        me.copy(conf, settings);
        snLoad();
        function loadpic(els) {
            me.each(els, function(el, index) {
                if ( el.nodeName && el.getAttribute(conf.attr)) {
                    var _offsetTop = me.getPos(el).y;
                    var swt = (_offsetTop - conf.threshold) <= (sh + document.body.scrollTop);
                    if (swt) {
                        if (el.nodeName === "IMG") {
                            el.src = el.getAttribute(conf.attr);
                        } else {
                            el.style.backgroundImage = 'url(' + conf.attr + ')';
                        }
                        me.css(el).remove(conf.load_class);
                        me.css(el).add(conf.loaded_class);
                    }
                }
            });
        }
    }});
// 懒加载图片
//    <img src="http://st.360buyimg.com/m/images/index/floor-background-296-100.png" class="snload" data-original="static/images/h_frist/card01.jpg">
//    sn.snload({load_class:"snload"});
    // 是否滚动到底部了并且是向下滚动
    function isBottom() {
        var scrolled = document.body.scrollTop;
        if (typeof isBottom.lastVal === "undefined") {
            isBottom.lastVal = document.body.scrollTop;
        }
        var sh = sn.body().wh;
        //isBottom.threshold = isBottom.threshold || sn.$(".tab_li")[0].offsetHeight;
        var threshold = 100;
        var scrollH = document.body.scrollHeight - sh;
        //滚动到低不了
        var isDown = scrolled > isBottom.lastVal; //是否是向下滚动
        isBottom.lastVal = scrolled;
        return (scrolled + threshold) > scrollH && isDown;
    }
    sn.snload({load_class:"snload"});
    sn.evt.on(window, 'scroll', function() {
        if (isBottom()) {
            // 滚动到底部了
            loadJson();
        }
    });

});
