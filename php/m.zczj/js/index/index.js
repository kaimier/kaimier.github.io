/**
 * Created by cuicaixia on 2015/8/13.
 */

/**
 * 是否点赞
 */
function isPraiseds(){
    var praiseds = $(".J_ui_prize");
    $.each(praiseds,function(key,praise){
        var projectId = $(praise).attr("project_id");
        var key=getCookie("m_ebcf_project_praise_"+projectId);
        if(key == true || key == 'true'){
            $(praise).find("i").addClass("zanheart");
            $(praise).attr("title","已点赞")
        }
    });
}
/**
 * 统计点赞人数和关注人数
 * @param _this
 */
function getFocusAndPraiseCount(_this){
    var projectId = $(_this).attr("project_id");
    var url = "http://sq.jr.jd.com/cm_focus/isFocus?key=4000&systemId="+projectId+"&callback=?";
    $.ajax({url:url, dataType: "jsonp",async:false,scriptCharset: "utf-8", success: function (datas,e) {
        if(datas == null || datas["data"] == null || datas["data"] == undefined){
        }else{
            alert(datas.data.praise);
            alert(datas.data.focus);
        }
    },error:function(a){}
    });
};
/**
 * 设置cookie
 */
function setCookie (c_name, value, expiredays) {
    expiredays = 7;
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + encodeURI(value) +
    ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())+";path=/";
}
/**
 * 得到cookie
 */
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function show_data(data) {
    if (data != null && data.praise != null && data.focus != null && data.praise != undefined && data.focus != undefined) {
        show_num(data.focus)
    }
}

function show_num(f) {
    if (f >= 10000) {
        return parseInt(f / 10000) + "万";
    } else {
        return f;
    }
}
function goBack(){
    var backUrl = document.referrer|| "";
    var backUrl_lower= backUrl.toLowerCase();
    if(backUrl_lower.indexOf("login.action")>0){
        window.location.href = "http://m.dj.jd.com/";
    }else{
        window.history.back();
    }
}


