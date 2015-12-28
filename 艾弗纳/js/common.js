;(function(){
    $('.proBox .tabBtns a').each(function(i,el){
        $(el).click(function(){
            $(el).addClass('active').siblings().removeClass('active');
            $('.tabBoxs').hide().eq(i).show();
        })
    })
})();