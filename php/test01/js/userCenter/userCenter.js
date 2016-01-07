function myInverstmentProjectJson(data) {
    var html = "";
    $(data).each(function (index, obj) {
        html = "<div class='box'>";
        html += "<div class='banner'>";
        html+="<a href='http://m.dj.jd.com/funding/details/"+obj.projectId+".html'>";
        if (obj.projectImgM != "") {
            html += '<img src="/images/default.png" class="snload" data-original="'+obj.projectImgM+'">';
        } else {
            html += '<img src="/images/default.png" class="snload" data-original="'+obj.projectImgZf+'">';
        }
        html += "</a>";
        html += "<div class='status'>";
        html += " <div class='lable icon' data-percent=" + parseInt(obj.projectProgress) + ">";
        html += ' <img src="/images/empty.gif" class="icon ico_left">'
        if (parseInt(obj.projectStatus) == 500) {
            html += " <span class='text'>路演中</span>";
        } else if (parseInt(obj.projectStatus) == 600) {
            html += " <span class='text'>路演结束</span>";
        } else if (parseInt(obj.projectStatus) == 700) {
            html += " <span class='text'>融资中</span>";
        } else if (parseInt(obj.projectStatus) == 800) {
            html += " <span class='text'>募集失败</span>";
        } else if (parseInt(obj.projectStatus) == 900) {
            html += " <span class='text'>募集成功</span>";
        } else if (parseInt(obj.projectStatus) >= 1000 && parseInt(obj.projectStatus) < 1100) {
            html += " <span class='text'>失败退款</span>";
        } else if (parseInt(obj.projectStatus) == 1100) {
            html += " <span class='text'>融资成功</span>";
        } else if (parseInt(obj.projectStatus) == 1200) {
            html += " <span class='text'>融资失败</span>";
        }
        html += ' <img src="/images/empty.gif" class="icon ico_right">'
        html += "</div>";
        html += "<img src='/images/item_detail/line_black.png' class='line_black'>";
        html += "<img src='/images/item_detail/line.png' class='line'>";
        html += "</div>";
        html += "</div>";
        var projectName = obj.projectName||"";
        if(projectName.length>10){
            projectName = projectName.substring(0,10)+"...";
        }
        html += "<h1 class='title'>"+projectName;
        if (obj.projectModel == 0) {
            html += " <span class='icon ct'> </span>";
        } else if (obj.projectModel == 100) {
            html += " <span class='icon xf'> </span>";
        }
        html += "</h1>";
        html += "<div class='con'>";
        html += "<ul>";
        html += "<li class='left'>";
        html += "<span>订单号：" + obj.fineOrderId + "</span>";
        html += "<span>订单状态：";
        if (obj.psStatus == 0) {
            html += "认购中";
            if(obj.marginStatus==0){
                html += "<p>(保证金冻结中)</p>";
            }else if(obj.marginStatus==100){
                html += "<p>(保证金已冻结)</p>";
            } else if(obj.marginStatus==200){
               html += "<p>(保证金冻结失败)</p>";
            }
        } else if (obj.psStatus == 100) {
            html += "预购成功";
            if (obj.intentionPayStatus == 0) {
                html += "(未打款)";
            } else if (obj.intentionPayStatus == 100) {
                html += "(打款中)";
            } else if (obj.intentionPayStatus == 200) {
                if(obj.marginStatus==300)
                {
                    html += "<p>(保证金解冻中)</p>";
                }
              else if(obj.marginStatus==400)
                {
                    html += "<p>(保证金已解冻)</p>";
                }
              else if(obj.marginStatus==500)
                {
                    html += "<p>(保证金解冻失败)</p>";
                }
               else{
                    html += "(已打款)";
                }

            } else if (obj.intentionPayStatus == 300) {
                html += "(打款失败)";
            }
        } else if (obj.psStatus == 200) {
            html += "预购成功 打标中";
        } else if (obj.psStatus == 300) {
            html += "投资成功";
        } else if (obj.psStatus == 400) {
            html += "投资失败";
        } else if (obj.psStatus == 450) {
            html += "取消投资单待审核";
        } else if (obj.psStatus == 460) {
            html += "取消投资单审核否决";
        } else if (obj.psStatus == 500) {
            html += "投资失败<p>(取消投资单)</p>";
        } else if (obj.psStatus == 600) {
            html += "投资失败(跳票)";
        } else if (obj.psStatus == 700) {
            html += "投资失败(退款中)";
        } else if (obj.psStatus == 800) {
            html += "投资失败(退款完成)";
        } else if (obj.psStatus == 900) {
            html += "投资失败<p>(退款待审核)</p>";
        } else if (obj.psStatus == 950) {
            html += "投资失败(退款驳回)";
        } else if (obj.psStatus == 1000) {
            html += "投资失败(退款中)";
        } else if (obj.psStatus == 1100) {
            html += "投资失败(退款完成)";
        }
        html += "</span>";
        html += "</li>";
        html += "<li class='right'>";
        var intentionAmount=obj.intentionAmount
        var wan = ""
        if(intentionAmount>10000000){
            intentionAmount = (obj.intentionAmount/10000).toFixed(2);
            wan = "万"
        }
        html += "<span class='mq'>￥<em class='gotham'>" + intentionAmount + "</em>"+wan+"</span>";
        html += "<span>投资金额</span>";
        html += "</li>"
        html += "</ul>"
        html += "<ul style='margin-top:0px;'>";
        html += "<li class='left'>";
        html += "</li>";
        html += "<li class='right'>";
        var marginFrozenTime = obj.marginFrozenTime||""
        html += "<span class=date>" + marginFrozenTime + "</span>";
        html += "</li>";
        html += "</ul>";
        html += " </div>";
        html += " </div>";
        $("section[index='1']").append(html);
    });
    $("section[index='1']").append("<div class='index_loadmore' ref='loading'><img src='/images/loadmore.gif'></div>");
    /*if(html == ""){
        html = "<div class='ident'>";
         html += "<p>您还没有投资任何项目！</br>机遇不常有。成功更需快人一步！快去首页寻找好的项目。</span>";
        html += "</div>";
        html += "<div class='space_btn'>";
            html += "<a href='http://m.dj.jd.com/'>去首页</a>";
        html += "</div>";
        $("section[index='1']").html(html);
    }*/
}
/**
 * 我发起的70以下的不可查看
 * @param data
 */
function toDisable(){
    $(".cover_fix").show();
    $(".alert").show();
    $("#btnB").off("click");
    $("#btnB").on("click",function(){
        $(".cover_fix").hide();
        $(".alert").hide();
    });

}
function mySponsorsProjectJson(data) {
    var html = "";
    $(data).each(function (index, obj) {
        html = "<div class='box'>";
        html += "<div class='banner'>";
        if(obj.projectStatus<70){
            html+="<a href='javascript:toDisable();'>";
        }else{
            html+="<a href='http://m.dj.jd.com/funding/details/"+obj.projectId+".html'>";
        }
        if (obj.projectImgM != "") {
            html += '<img src="/images/default.png" class="snload" data-original="'+obj.projectImgM+'">';
        } else {
            html += '<img src="/images/default.png" class="snload" data-original="'+obj.projectImgZf+'">';
        }
        html += "</a>";
        if(parseInt(obj.projectStatus) >= 500){
            html += "<div class='status'>";
            html += " <div class='lable icon' data-percent=" + parseInt(obj.projectProgress) + ">";
            html += ' <img src="/images/empty.gif" class="icon ico_left">'
            if (parseInt(obj.projectStatus) == 500) {
                html += " <span class='text'>路演中</span>";
            } else if (parseInt(obj.projectStatus) == 600) {
                html += " <span class='text'>待募集</span>";
            } else if (parseInt(obj.projectStatus) == 700) {
                html += " <span class='text'>融资中</span>";
            } else if (parseInt(obj.projectStatus) == 800) {
                html += " <span class='text'>募集失败</span>";
            } else if (parseInt(obj.projectStatus) == 900) {
                html += " <span class='text'>募集成功</span>";
            } else if (parseInt(obj.projectStatus) >= 1000 && parseInt(obj.projectStatus) < 1100) {
                html += " <span class='text'>失败退款</span>";
            } else if (parseInt(obj.projectStatus) == 1100) {
                html += " <span class='text'>融资成功</span>";
            } else if (parseInt(obj.projectStatus) == 1200) {
                html += " <span class='text'>融资失败</span>";
            }
            html += ' <img src="/images/empty.gif" class="icon ico_right">'
            html += "</div>";
            html += "<img src='/images/item_detail/line_black.png' class='line_black'>";
            html += "<img src='/images/item_detail/line.png' class='line'>";
            html += "</div>";
        }
        html += "</div>";
        var projectName = obj.projectName||"";
        if(projectName.length>10){
            projectName = projectName.substring(0,10)+"...";
        }
        html += "<h1 class='title'>"+projectName;
        if (obj.projectModel == 0) {
            html += " <span class='icon ct'> </span>";
        } else if (obj.projectModel == 100) {
            html += " <span class='icon xf'> </span>";
        }
        html += "</h1>";
        html += "<div class='con'>";

        html += "<ul>";
        html += "<li class='left'>";
        html += "<span>发布状态：";
        if (obj.projectStatus ==0) {
            html += "已保存";
        } else if (obj.projectStatus <= 100) {
            html += "待审核";
        } else if (obj.projectStatus == 200) {
            html += "审核通过";
        } else if (obj.projectStatus == 300) {
            html += "审核驳回";
        } else if (obj.projectStatus == 400) {
            html += "审核否决";
        } else {
            html += "已发布";
        }
        html += "</span>";
        html += "<span>投资人数："+obj.supports+"人</span>";
        html += "</li>";

        html += "<li class='right'>";
        html += "<span class='mq'>￥<em class='gotham'>" + obj.collectAmount + "</em></span>";
        html += "<span>已募集</span>";
        html += "</li>";
        html += "</ul>";
        html += " </div>";
        html += " </div>";
        $("section[index='2']").append(html);
    });
    if(html == ""){
        html = "<div class='space' style='text-align: center;'>";
        html += "您还没有发起过项目！</br>只要有想法，京东东家给您实现的机会。请在电脑上登录dj.jd.com发布项目。";
        html += "</div>";
        html += "<div class='btn'>";
        html += "<a href='/'>去首页</a>";
        html += "</div>"
        $("section[index='2']").html(html);
    }else{
        $("section[index='2']").append("<div class='index_loadmore' ref='loading'><img src='/images/loadmore.gif'></div>");
    }
}

function myConcerProjectJson(data,totalCount) {
    var html = "";
    $(data).each(function (index, obj) {
        html = "<div class='box'>";
        html += "<div class='banner'>";
        html += "<a href='http://m.dj.jd.com/funding/details/" + obj.projectId + ".html'>";
        if (obj.projectImgM != "") {
            html += '<img src="/images/default.png" class="snload" data-original="'+obj.projectImgM+'">';
        } else {
            html += '<img src="/images/default.png" class="snload" data-original="'+obj.projectImgZf+'">';
        }
        html += "</a>";

        html += "<div class='status'>";
        html += " <div class='lable icon' data-percent=" + parseInt(obj.projectProgress) + ">";
        html += ' <img src="/images/empty.gif" class="icon ico_left">'
        if (parseInt(obj.projectStatus) ==0) {
            html += " <span class='text'>已保存</span>";
        } else if (parseInt(obj.projectStatus) <= 100) {
            html += " <span class='text'>待审核</span>";
        } else if (parseInt(obj.projectStatus) == 200) {
            html += " <span class='text'>审核通过</span>";
        } else if (parseInt(obj.projectStatus) == 300) {
            html += " <span class='text'>审核驳回</span>";
        } else if (parseInt(obj.projectStatus) == 400) {
            html += " <span class='text'>审核否决</span>";
        } else if (parseInt(obj.projectStatus) == 500) {
            html += " <span class='text'>路演中</span>";
        } else if (parseInt(obj.projectStatus) == 600) {
            html += " <span class='text'>待募集</span>";
        } else if (parseInt(obj.projectStatus) == 700) {
            html += " <span class='text'>融资中</span>";
        } else if (parseInt(obj.projectStatus) == 800) {
            html += " <span class='text'>募集失败</span>";
        } else if (parseInt(obj.projectStatus) == 900) {
            html += " <span class='text'>募集成功</span>";
        } else if (parseInt(obj.projectStatus) >= 1000 && parseInt(obj.projectStatus) < 1100) {
            html += " <span class='text'>失败退款</span>";
        } else if (parseInt(obj.projectStatus) == 1100) {
            html += " <span class='text'>融资成功</span>";
        } else if (parseInt(obj.projectStatus) == 1200) {
            html += " <span class='text'>融资失败</span>";
        }
        html += ' <img src="/images/empty.gif" class="icon ico_right">'
        html += "</div>";
        html += "<img src='/images/item_detail/line_black.png' class='line_black'>";
        html += "<img src='/images/item_detail/line.png' class='line'>";
        html += "</div>";

        html += "</div>";
        var projectName = obj.projectName||"";
        if(projectName.length>10){
            projectName = projectName.substring(0,10)+"...";
        }
        html += "<h1 class='title'>"+projectName;
        if (obj.projectModel == 0) {
            html += " <span class='icon ct'> </span>";
        } else if (obj.projectModel == 100) {
            html += " <span class='icon xf'> </span>";
        }
        html += "</h1>";
        html += "<div class='con'>";

        html += "<ul>";
        html += "<li class='left'>";

        if(obj.projectModel == 0 && obj.investorRealname !="" && obj.investorRealname != undefined){
            var investorRealname = obj.investorRealname||"";
            if(investorRealname.length>10){
                investorRealname = investorRealname.substring(0,10)+"...";
            }
            html+="<span>领投人："+investorRealname+"</span>";
        }else if(obj.projectModel == 0){
            html+="<span>领投人：暂无领投人</span>";
        }
        html += "<span>投资人数："+obj.supports+"人</span>";
        html += "</li>";
        html += "<li class='right'>";
        html += "<span class='mq'>￥<em class='gotham'>" + obj.collectAmount + "</em></span>";
        html += "<span>已募集</span>";
        html += " </li>";
        html += "</ul>";

        html += " </div>";
        html += " </div>";
        $("section[index='3']").append(html);
    });
    if(html == "" && totalCount == 0){
        html = "<div class='space' style='text-align: center;'>";
        html += "您还没有关注过任何项目！</br>远见，在于发现，快去首页看看吧。";
        html += "</div>";
        html += "<div class='btn'>";
        html += "<a href='/'>去首页</a>";
        html += "</div>"
        $("section[index='3']").html(html);
    }else{
        $("section[index='3']").append("<div class='index_loadmore' ref='loading'><img src='/images/loadmore.gif'></div>");
    }
}
sn.ext({
    snload: function(settings) {
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
        //手动更新方法
        me.sn2load = snLoad;
    }
})
