;(function(){
    $('.news_link li:even').css({
        'marginLeft':'0'
    })
    $('.news_tabBtn a').each(function(i, el) {
        $(el).mouseenter(function() {
            $(this).addClass('active').siblings().removeClass('active');
            $('.news_tabBox').hide();
            $('.news_tabBox').eq(i).show()
        });
    });
})('老苏');
;(function() {
    $('.e_btns span').each(function(i,el) {
        $(el).click(function() {
            $(el).addClass('active').siblings().removeClass('active');
            $('.e_tabbox').hide();
            $('.e_tabbox').eq(i).show();
        })
    })
})('ebay页面tab切换');