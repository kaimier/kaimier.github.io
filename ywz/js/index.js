"use strict";
var navs = [];
var nowPage = {};
$(document).ready(function(){


    var a = 2, b = 16;

    var result = a | b;

    console.log( (result && 3)) ;







    var nav = {};
    var navLinks = $('.link', $('.Navigation')).click(selecPage);
    $('#Drop_Down_Button').click(selecPage);


    var defaultPage = true;
    for(var i=0; i<navLinks.length; ++i){
        var _cacheObj = {};
        _cacheObj.index = i;
        _cacheObj.page = $( $(navLinks[i]).attr('href'));
        _cacheObj.link = $(navLinks[i]);
        _cacheObj.isLoaded = false;
        nav[$(navLinks[i]).attr('href')] =  _cacheObj;
        navs.push(_cacheObj);
        if(_cacheObj.page[0] ==  $(window.location.hash)[0] ){
            nowPage = _cacheObj;
            showPhoto();
            (nowPage.link).addClass('on');
            (nowPage.page).addClass('show');
            defaultPage = false;
        }
    }

    if(defaultPage){
        nowPage = navs[0];
        showPhoto();
        (nowPage.link).addClass('on');
        (nowPage.page).addClass('show');

    }

    function selecPage(){
        switchPage(nav[$(this).attr('href')]);

    }

    function switchPage(obj){
        if(!look){

            show_animate(obj,obj.index > nowPage.index, isIE());
        }

    }


    var look = false;


    function show_animate(obj, mode, isAnimate){

        look = true;
        if(obj == nowPage){look = false;return;}


        (nowPage.link).removeClass('on');
        (nowPage.page).removeClass('show');



        if(!isAnimate){
            nowPage.page.css({ 'top':'-100%'}) ;
        }else{
            var _cache = nowPage.page;
        }


        nowPage = obj;
        window.location.hash = (nowPage.page).attr('id');

        showPhoto();

        (nowPage.page).css({ 'top': (mode ? '300px' : '-300px') });
        (nowPage.page).animate({'top': '0' }, isAnimate ? 'fast' : 'slow',function(){look = false;  if(isAnimate){ _cache.css({ 'top':'-100%'});} });


        (nowPage.link).addClass('on');
        (nowPage.page).addClass('show');

    }

    hookScroll(switchPage);







    (function(){

        var test = new Sliders(  $('#Base-Frame1')   );

        $('#void_button').click(function(){

            test.next_Page();

        });

        // test.time = 3000;
        //test.bindButton();
        //test.autoPlay(true);



    })();

    (function(){

        var test = new Sliders(  $('#Base-Frame2')   );

        var parent_Con = $(".web_case");

        $('.ar_l', parent_Con ).click(function(){
            test.next_Page();
        });
        $('.ar_r', parent_Con).click(function(){
            test.before_Page();
        });


        //test.time = 3000;
        //test.bindButton();
        test.autoPlay(true);



    })();




    (function(){

        var test = new Sliders(  $('#Base-Frame3')   );

        var parent_Con = $(".news_case");

        $('.ar_l', parent_Con ).click(function(){
            test.next_Page();
        });
        $('.ar_r', parent_Con).click(function(){
            test.before_Page();
        });

        //test.time = 3000;
        //test.bindButton();
        //test.autoPlay(true);



    })();






});



function showPhoto() {



    function loadImage(url, callback, _obj) {
        var img = new Image();
        img.src = url;

        if(img.complete) {
            callback.call(_obj);
            return;
        }
        img.onload = function () {
            callback.call(_obj);
        };
    }



    function tt(){

        this._obj.attr('src',this.url);
        this._obj.css({'background':'none'});



    }

    if(nowPage.isLoaded === false){

        var photos = $('.scrollLoading');
        for(var ii=photos.length-1; ii>=0; --ii){
            var _obj = $(photos[ii]);
            var url = _obj.attr('data-url');

            var oo = {
                '_obj':_obj,
                'url':url
            };
            loadImage(url,tt, oo );

        }





        nowPage.isLoaded = true;
    }
}


var isIE = function(ver){
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1
};







function hookScroll (callBack){

    function handle(delta) {

        if(!callBack){return;}
        var index = nowPage.index + delta;
        if(index >= 0 && index < navs.length ){
            callBack(navs[index]);
        }
    }

    function wheel(event){

        var delta = 0;
        if (!event){
            event = window.event;
        }

        if (event.wheelDelta) {
            delta = event.wheelDelta/120;
            if (window.opera) delta = -delta;
        } else if (event.detail) {
            delta = -event.detail/3;
        }
        if (delta){
            handle(-delta);
        }

    }

    if (window.addEventListener){
        window.addEventListener('DOMMouseScroll', wheel, false);
        window.onmousewheel = document.onmousewheel = wheel;
    }else{
        document.body.onmousewheel =wheel;
    }

}