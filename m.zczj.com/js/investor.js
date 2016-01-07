(function () {

    var dataForWeixin = {
        appId: "",
        img:"http://m.dj.jd.com/images/jddj.png",
        url: "http://m.dj.jd.com/",
        title: "京东东家，玩转私募股权",
        desc: "更多优质项目尽在京东私募股权融资平台~"
    };

    if( $("#shareImg").val()!=''){
        dataForWeixin = {
            appId: "",
            img: $("#shareImg").val(),
            url: $("#shareUrl").val(),
            title: $("#activeTitle").val(),
            desc: $("#activeDesc").val()
        };
    }



    var onBridgeReady = function () {
        // 发送给好友;
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid": dataForWeixin.appId,
                "img_url": dataForWeixin.img,
                "img_width": "240",
                "img_height": "240",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title
            }, function (res) {
            });
        });
        // 分享到朋友圈;
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "appid": dataForWeixin.appId,
                "img_url": dataForWeixin.img,
                "img_width": "240",
                "img_height": "240",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title
            }, function (res) {
            });
        });
        // 分享到微博;
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content": dataForWeixin.title + ' ' + dataForWeixin.url,
                "url": dataForWeixin.url
            }, function (res) {
            });
        });
    };
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
})();