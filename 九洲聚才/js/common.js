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