// 微信部分
share({
    //自定义共享内容
    "url": (document.location.href),
    "title": ($("#title").val()+"-"+$("#subtitle").val()),
    "content": $("#shareContent").val(),
    "pic": "http://m.dj.jd.com/images/jddj.png"
});
// 分享
function share(conf) {
    weixinShare(conf);
    var el_share = sn.$(".share_weixin");
    var el_sina = sn.$(".sicon .sina");
    if (el_share.length === 0) {
        return;
    }
    share_sina();
    globalEventAgent["touchend"]["share_weixin"] = function(e) {
        var el = sn.$(".share_weixin")[0];
        sn(el).bind("touchstart,touchmove,touchend", function(e) {
            e.stopPropagation();
            e.preventDefault();
            el.style.display = "none";
            sn(el).unbind("touchstart,touchmove,touchend");
        });
        el.style.display = "block";
        if (isWeixin()) {
            el.innerHTML = '<img src="/images/share.png" class="weixin">';
        } else {
            el.innerHTML = '<div class="wh300"><canvas class="qrcode"></canvas></div>';
            var fenxiangUrl = $("#fenxiangUrl").val();
            qr.canvas({
                canvas: sn.$("canvas", el)[0],
                value: fenxiangUrl,
                size: 8,
                cb: function(width, len, px) {
                    var el = sn.$(".qrcode", el)[0];
                    var val = 25;
                    if (width < (25*8 - 10)) {
                        val = Math.floor((250 - width) / 2);
                    }
                    el.style.marginLeft = val + "px";
                    el.style.marginTop = val + "px";
                }

            });
        }
    };
    function isWeixin() {
        var userAgentString = window.navigator ? window.navigator.userAgent : "";
        var weixinreg = /MicroMessenger/i;
        var androidreg = /android/i;
        if (!weixinreg.test(userAgentString) ) {
            return false;
        }
        return true;
    }
    function share_sina() {
        // var conf =  {
        // 		//自定义共享内容
        // 		"url": (document.location.href),
        // 		"title": (document.title),
        // 		"content": "",
        // 		"pic": ""
        // }
        var str = "http://v.t.sina.com.cn/share/share.php?url={$url}&title={$title}&content={$content}&pic={$pic}";
        var parse = function(str, hash) {
            if (typeof str != 'string') {
                return false;
            }
            var _str = str.replace(/\{\$(\w+)\}/g, function(_0, _1) {
                return (_1 in hash) ? hash[_1] : _1;
            });
            return _str;
        }
        el_sina[0].parentNode.setAttribute("href", parse(str, conf));
    }
    function weixinShare(conf) {

        var dataForWeixin = {
            appId: "",
            img: conf.pic,
            url:conf.url,
            title: conf.title,
            friendTitle: conf.title,
            desc: conf.content
        };

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
    }
}

// 微信部分 end
(function() {
    globalZJdComTask.push(function() {
        // 额外代码添加到此处
        // 代码将会在页面资源加载完毕后执行
    });

    globalZJdComTask.push(function() {
        // 额外代码添加到此处
        // 代码将会在页面资源加载完毕后执行
    });
})("添加额外脚本");

;(function() {
// loading(function() {
// 	loaded();
// })
// //加载完成
// function loaded() {
// 	run();
// }
    globalZJdComTask.push(run);
//执行
    function run() {
        var sn = jstools.s;
        // [TODO] for test
        window.sn = sn;
        // 标签动画 移动 -> 数字 -> 员
        drawBgCir({x:35, y:35}, 28, "canvas");
        sn(".lable[data-percent]").each(function(el, index) {
            var percent = el.getAttribute('data-percent');
            if (!jstools.isNumeric(percent)) {
                return;
            }
            percent = percent - 0;
            var initP = percent;
            percent = percent < 0 ? 0 : (percent > 100 ? 100 : percent);
            percent = Math.floor(( (el.parentNode.offsetWidth - el.offsetWidth) / el.parentNode.offsetWidth) * percent);
            //移动
            sn(el).bind("webkitTransitionEnd", function(e) {
                //数字
                var divide = 1;
                drawCircle({x:35, y:35}, 28, initP < 0 ? 0 : (initP > 100 ? 100 : initP) , "canvas");
                if (initP > 100) {
                    divide = Math.floor(initP/100);
                }
                sn.animate(function(times, max) {
                    var num = times * divide;
                    sn(".percent").html(formatNum(num));
                }, Math.floor(initP / divide), 40, function() {
                    sn(".percent").html(formatNum(initP));
                    //圆
                }, -1)
            });
            setTimeout(function() {
                var __ptg = Math.floor((el.parentNode.offsetWidth*percent/100 + el.offsetWidth) * 100 / el.parentNode.offsetWidth);
                el.style.left = percent + "%";
                if (percent !== 0) {
                    __ptg = __ptg + 1;
                    sn.$(".status .line", el.parentNode)[0].style.width = (__ptg > 100 ? 100 : (initP >= 99 ? 100 : __ptg)) + "%";
                }

            }, 0)
        });
        // 东家和小东家效果
        // var but = sn.$(".but");
        // var desc = sn.$(".desc");
        // sn(".but").bind("touchend", function(e) {
        // 	console.log('----', desc[sn.index(this)]);
        // 	butDo(sn.index(this));
        // });
        // function butDo(index) {
        // 	sn.css(but[index]).toggle('show');
        // 	sn.css(desc[index]).toggle('show');
        // }
        // jstools.$();
        // 停用document默认事件开关
        var globalDomEvtSwt = false;
        // 事件代理 基于事件冒泡 touchstart touchmove touchend 用document代理

        var touchendAgent =  {
            "dongjia": function(e) {
                var prt = this.parentNode;
                var child = this;
                if (this.nodeName === "SPAN") {
                    child = prt;
                    prt = prt.parentNode;
                }
                sn.css(child).toggle('show');
                sn.css(sn.$(".item .desc", prt)[0]).toggle('show');
            },
            "star": function(e) {

            },
            "share": function(e) {
                var ele =sn.$('.invest>.share');
                sn.css(ele[0]).toggle('show');
            },
            "close": function(e) {
                var ele =sn.$('.invest>.share');
                sn.css(ele[0]).toggle('show');
            },
            "touzi": function(e) {
                // selected 不可用 disabled 抢光了 full
                sn(".touzi").css("toggle", "show");
            }
        }

        for (var key in touchendAgent) {
            globalEventAgent["touchend"][key] = touchendAgent[key];
        }

        // sn.evt.unbind(document, "touchstart,touchmove,touchend");

        // 页卡
        var currCard = 0;
        // touchend 开关
        var currCardSwt = false;

        sn(".card li").bind("touchend", function(e) {
            // 停用默认事件和冒泡
            e.stopPropagation();
            e.preventDefault();
            var el = this.parentNode;
            var index = sn.index(this) - 0;
            var clear = function() {
                sn(".cardcon").unbind("touchstart,touchmove,touchend");
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
            sn.css(sn.$(".card li")[currCard]).remove("flipInX");
            sn.css(this).add("flipInX");
            // 解决动画时显示错误
            // el.style.overflow = "hidden";
            // 内容转换
            // 解决转换时胡乱按产生左右滚动的问题
            sn(".cardcon").bind("touchstart,touchmove,touchend", function(e) {
                e.stopPropagation();
                e.preventDefault();
            });
            globalDomEvtSwt = true;
            sn.transition(
                currCard,
                index,
                (index > currCard) ? 'next' : 'pre',
                "fb",
                sn.$(".cardcon .page"),
                {
                    begin: function(){},
                    end: function(){
                        currCard = index;
                        currCardSwt = false;
                        sn(".cardcon").unbind("touchstart,touchmove,touchend");
                        // el.style.overflow = "visible";
                        globalDomEvtSwt = false;
                    }
                }
            );

        });
        // 滚动事件
        var rel = sn.$(".rel");
        var card = sn.$(".card");
        var relPos = rel[0].getBoundingClientRect();
        var root = sn.root;
        console.log("relPos", relPos);
        // 需要执行的
        var globalTask = [
            function() {
                sn.$(".invest")[0].style.display = "block";
            }
        ];
        globalTaskRun(globalTask);
        // 执行全局任务
        function globalTaskRun(task) {
            var item;
            while(item = task.shift()) {
                item();
            }
        }
        // 格式化数字
        function formatNum(num) {
            var numy = num.toString().split('');
            numy.length === 1 && num !== 0 && numy.unshift("0");
            var cache = [];
            for (var i = 0, len = numy.length; i < len; i++) {
                var item = numy[i];
                cache.push('<img src="/images/empty.gif" class="icon t'+ item +'">');
            }
            cache.push('<img src="/images/empty.gif" class="icon tper">');
            return cache.join('');
        }

        function drawBgCir(pos, radius, id) {
            var canvas = document.getElementById(id);
            var context = canvas.getContext('2d');
            context.beginPath();
            //起点需要数学转换
            context.arc(pos.x, pos.y, radius, -Math.PI/2, 3*Math.PI/2, false);
            context.lineWidth = 1;
            // context.globalAlpha = 0.1;
            context.strokeStyle = '#351f2c';
            context.stroke();
        }

        // canvas动画
        function drawCircle(pos, radius, percent, id) {
            var canvas = document.getElementById(id);
            var context = canvas.getContext('2d');
            // var radius = 70;
            var i = 0;
            var offset = -2;
            // var pos = {x:100, y:100};
            var pic1 = new Image();
            var max = Math.floor(360 * percent / 100);
            pic1.src="/images/item_detail/dot.png";
            window.setInterval = setInterval(function() {
                i++;
                context.clearRect(0,0,canvas.width, canvas.height);

                context.beginPath();
                //起点需要数学转换
                context.arc(pos.x, pos.y, radius, -Math.PI/2, 3*Math.PI/2, false);
                context.lineWidth = 1;
                // context.globalAlpha = 0.1;
                context.strokeStyle = '#351f2c';
                context.stroke();

                context.beginPath();
                //起点需要数学转换
                context.arc(pos.x, pos.y, radius, -Math.PI/2, i / 180 * Math.PI - Math.PI/2, false);
                context.lineWidth = 10;
                context.globalAlpha = 0.1;
                context.strokeStyle = '#ab189b';
                context.stroke();

                context.beginPath();
                //起点需要数学转换
                context.arc(pos.x, pos.y, radius, -Math.PI/2, i / 180 * Math.PI - Math.PI/2, false);
                context.lineWidth = 1;
                context.globalAlpha = 1;
                context.strokeStyle = '#ab189b';
                context.stroke();

                if ( i / 180 * Math.PI > Math.PI) {
                    offset = -Math.abs(offset);
                }
                context.drawImage(pic1, pos.x + offset - Math.sin(-i / 180 * Math.PI)*radius, pos.y + offset - Math.cos(-i / 180 * Math.PI)*radius);
                if (i >= max) {
                    clearInterval(window.setInterval);
                }
            }, 0);
        }
        //投资人滚动
        function touziren() {

            var dom = sn.$(".touzirenWapper")[0];
            var hash = {};
            var swt = false;
            var els = sn.$(".touziren");
            var cbs = {
                begin: function(){},
                end: function(){
                    swt = false;
                }
            };
            sn.evt.on(dom, 'touchstart', function(evt) {
                // evt.stopPropagation();
                // evt.preventDefault();
                var touch = evt.touches[0];
                hash.x = touch.clientX;
                hash.y = touch.clientY;
            });

            sn.evt.on(dom, 'touchmove', function(evt) {
                // evt.stopPropagation();
                // evt.preventDefault();
                if (swt) {
                    window.___temp_clear_touziren = setTimeout(function (){
                        swt = false;
                    }, 300);
                    return;
                }

                clearTimeout(window.___temp_clear_touziren);

                var threshold = 10;
                var touch = evt.touches[0];
                hash.mx = touch.clientX;
                hash.my = touch.clientY;
                hash.dx = hash.mx - hash.x;
                hash.dy = hash.my - hash.y;
                // alert('====' + hash.dx);
                if (hash.dx > threshold) {
                    // 右
                    // console.log("右");
                    swt = true;
                    evt.stopPropagation();
                    evt.preventDefault();

                    run("pre", "vgomove2", els, cbs);
                } else if (hash.dx < -threshold) {
                    // 左
                    // console.log("左");
                    swt = true;
                    run("next", "vgomove2", els, cbs);
                    evt.stopPropagation();
                    evt.preventDefault();

                }
            });

            // sn.evt.on(dom, 'touchend', function(evt) {
            // 	// evt.stopPropagation();
            // 	// evt.preventDefault();
            // 	var threshold = 30;
            // 	if (swt) {
            // 		return;
            // 	}
            // 	if (hash.dx > threshold) {
            // 		// 右
            // 		// console.log("右");
            // 		swt = true;
            // 		run("pre", "vgomove", els, cbs);
            // 	} else if (hash.dx < -threshold) {
            // 		console.log('do...left', swt);
            // 		// 左
            // 		// console.log("左");
            // 		swt = true;
            // 		run("next", "vgomove", els, cbs);
            // 	}
            // });

            // sn.transition(
            // 	0,
            // 	1,
            // 	'next',
            // 	"vgomove",
            // 	sn.$(".touziren"),
            // {
            // 	begin: function(){},
            // 	end: function(){}
            // }
            // );
        }
        //
        window.touziren = touziren;
        //转场控制
        function run(tag, type, els, cbs) {
            var curr = 0;
            for (var i = 0, len = els.length; i < len; i++) {
                var el = els[i];
                if (el.getAttribute("visible") === "true") {
                    curr = i;
                    break;
                }
            }
            if (tag === 'next' && curr === (els.length - 1) ) {
                //最后一屏向下
                cbs.end();
                return;
            } else if (tag === 'pre' && curr === 0) {
                //第一屏向上
                cbs.end();
                return;
            }
            sn.transition(curr, tag === 'next' ? curr + 1 : curr - 1, tag, type, els, cbs);
        }
    }

    // [TODO] for test

})("项目详情页");

;(function() {
    var perw = Math.floor($(window).width() / 5);
    $(".touziren li a img").css('height',perw+'px');
    $(".touziren li a img").css('width',perw+'px');
    $("#a_prais").click(function(){
        var key=getCookie('m_ebcf_project_praise_'+projectId);
        if($("#a_prais").attr('class') == 'icon link heart red'){
            //return urlAlert("已点赞","","");
        }
        if (key==null || key==undefined || key!="true"){
            var url = "http://m.dj.jd.com/funding/"+projectId+"/inc_praise.action";
            $.getJSON(url, function(data,e) {
                $("#a_prais").attr('class','icon link heart red');
                setCookie('m_ebcf_project_praise_'+projectId,'true');
            });
        }
    });
    /*点击底部关注*/
    $("#focuse").click(function(){
        if($("#a_focuse").attr('class') == 'icon star zan'){
            return urlAlert("已关注","","");
        }
        // var url = "http://m.dj.jd.com/funding/"+projectId+"/inc_focus.action";
        var url = "/js/ajax/inc_focus.js";
        $.ajax({url:url, dataType: "json",scriptCharset: "utf-8", success: function (data) {
            if(data != null && data.error !=null && data.error == "NotLogin" ){
                location.reload();
                return;
            }
            if(data != undefined && data != null){
                $("#a_focuse").attr('class','icon star zan');
            }
        },
            error:function(a){
            }
        });
    });
    $("#team").bind("touchend",function (){
        var url = "js/ajax/findProjectTeam.js"
        // var url = "http://m.dj.jd.com/funding/findProjectTeam.action?projectId="+projectId;
        $.ajax({url:url,type:'post', cache:false,dataType:'json',
            success:function(data) {
                if(data != null && data.error !=null && data.error == "NotLogin" ){
                    location.reload();
                    return;
                }
                var html="";
                if(data==null || data == undefined || data == ""){
                    return;
                }
                $.each(data, function (index, obj) {
                    var ptRealname = obj.ptRealname || "";
                    var ptTitle = obj.ptTitle || "";
                    var ptIntroduce = obj.ptIntroduce || "";
                    var ptImg = obj.ptImg || "/css/pub/images/user-unlogin-icon.png";

                    html =html+'<div class="member"><p class="head"><img src="'+ptImg+'">'+ptRealname+'<br />'+ptTitle+'</p><p class="desc"> '+ptIntroduce+'</p></div>';
                });
                if(html != ""){
                    $("#teamList").html(html);
                }
            },
            error : function() {
            }
        });
    });

    $("#btnB").click(function(){
        $(".cover_fix").css("display","none");
        $(".alert").css("display","none");
    });
    $("#del").click(function(){
        $(".cover_fix").css("display","none");
        $(".alert").css("display","none");
    });
})("公共绑定事件");

/**
 * 实名认证 {"info":"已实名认证！","code":"1","success":true,"txnStatus":"1"}
 * @return {Boolean} [description]
 */
function isRealname(){
    // var url = "http://m.dj.jd.com/funding/validRealName.action";
    var url="/js/ajax/validRealName.js"
    var realname = 0;
    $.ajax({url:url,type:'post', cache:false,async:false,dataType:'json',
        success:function(data) {
            if(data != null && data.error !=null && data.error == "NotLogin" ){
                return location.reload();
            }
            realname = data.code;
        },
        error: function(error){
            //reminder("系统繁忙！");
        }
    });
    return realname;
}

function leaderIsCom(){
    var projectId = $("#projectId").val();
    var url = "/funding/leaderIsCom.action?projectId="+projectId;
    var comLeader = false;
    $.ajax({url:url,type:'post', cache:false,async:false,dataType:'json',
        success:function(data) {
            comLeader = data.result;
        },
        error: function(error){
            reminder("系统繁忙！");
        }
    });
    return comLeader;
}
/**
 * 判断点赞
 * @return {[type]} [description]
 */
function getPraisAndFocous(){
    var key=getCookie('m_ebcf_project_praise_'+projectId);
    if(key == true || key == 'true'){
        $("#a_prais").attr('class','icon link heart red');
    }
    // var url = "http://m.dj.jd.com/funding/"+projectId+"/is_focus.action";
    var url = "/js/ajax/is_focus.js";
    $.ajax({url:url, dataType: "json",async:false, success: function (datas,e) {
        if(datas != null && datas["code"]!=null){
            var name = $("#user_pin").val();
            if(name != null && name != undefined && name != ""){
                if(datas["code"]=="0002"){
                    $("#a_focuse").attr('class','icon star zan');
                }
            }
        }
    },
        error:function(a){
        }
    });
}

function investorList(){
    var investorList = $("#investorList");
    if(investorList!=undefined &&$(investorList).find("ul").length>0){
        touziren();
    }
}

function getCurrentUserForDetail() {
    if ($("#user_pin").val() == "" || $("#user_pin").val() == undefined || $("#user_pin").val() == null || $("#user_pin").val() == "{}") {
        $.ajax({url: "/funding/get_loginpin.action",dataType: "json",scriptCharset: "utf-8",async:false,
            success: function (data) {
                if(data != null && data!= undefined && data.pin!= null && data.pin!=undefined && data.pin!=""){
                    $("#user_pin").val(data.pin);
                }else{
                    location.reload();
                }
            }, error: function (e) {
                location.reload();
            }
        });
    }
}

function urlAlert(content,btnA,urlA){
    $("#content").html(content);
    $("#btnA a").css('display','block');
    $("p.big").css('display','block');
    $(".local_icon").css('display','block');
    if(btnA == '' && urlA == ''){
        $("#btnA a").css('display','none');
        $("p.big").css('display','none');
        $(".local_icon").css('display','none');
    }else if(urlA == "leaderStatus"){
        $("#content").html(content);
        $("#btnA").css('display','none');
        $("p.big").css('display','block');
        $(".local_icon").css('display','block');
    }else{
        $("#btnA a").html(btnA);
        $("#btnA a").attr('href',urlA);
    }
    var cover = $(".cover_fix");
    var alertDiv = $(".alert");
    cover.css("display","block");
    alertDiv.css("display","block");
}
/**
 * [isInvstor description] 是否关注
 * @return {Boolean} [description] {"isSuccess":true,"code":"0002","info":"已关注"}
 */
function isInvstor(){
    var url = "http://m.dj.jd.com/funding/checkInvestor.action";
    var value = false;
    $.ajax({url:url,type:'post', cache:false,async:false,dataType:'json',
        success:function(data) {
            if(data != null && data.error !=null && data.error == "NotLogin" ){
                return location.reload();
            }
            if(data != null && data != undefined && data != ""){
                value = data.result;
            }
        },
        error: function(error){
            //reminder("系统繁忙！");
        }
    });
    return value;
}