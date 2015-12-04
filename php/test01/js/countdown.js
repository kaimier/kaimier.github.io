/*
用法:
dj_countdown({bt:开始时间, et:结束时间, el: dom, end:function() {'倒计时结束';}, error: function() {'发生错误';}})
*/
function dj_countdown(dj_conf) {
	countdown({
		bt: dj_conf.bt,
		et: dj_conf.et,
		format: function(time_distance) {
			var el = dj_conf.el;
			var one_day = 1000*60*60*24;
			var rest_d = (Math.floor(time_distance / one_day)).toString();
			var rest_h = (Math.floor(time_distance / 1000 / 3600) - rest_d*24).toString();
			var rest_m = (Math.floor(time_distance / 1000 / 60) - rest_d*24*60 - rest_h*60).toString();
			var rest_s = (Math.floor(time_distance / 1000) - rest_d*24*3600 - rest_h*3600 - rest_m*60).toString();
			var rest_d_str = '',rest_h_str = '',rest_m_str = '',rest_s_str = '';
			if (dj_conf.mob) {
				rest_d_str = rest_d_str + rest_d;
				rest_h_str = rest_h_str + (rest_h.length === 1 ? ("0" + rest_h) : rest_h);
				rest_m_str = rest_m_str + (rest_m.length === 1 ? ("0" + rest_m) : rest_m);
				rest_s_str = rest_s_str + (rest_s.length === 1 ? ("0" + rest_s) : rest_s);
			} else {
				rest_d_str = rest_d_str + '<em style="color:#f60;font-style: normal;">' + rest_d +'</em>';
				rest_h_str = rest_h_str + '<em style="color:#f60;font-style: normal;">' + (rest_h.length === 1 ? ("0" + rest_h) : rest_h) +'</em>';
				rest_m_str = rest_m_str + '<em style="color:#f60;font-style: normal;">' + (rest_m.length === 1 ? ("0" + rest_m) : rest_m) +'</em>';
				rest_s_str = rest_s_str + '<em style="color:#f60;font-style: normal;">' + (rest_s.length === 1 ? ("0" + rest_s) : rest_s) +'</em>';
			}
			if (dj_conf.mob) {
				el.style.fontSize = "1.4rem";
				el.style.height = "30px";
				el.style.lineHeight = "20px";
			}
			if (rest_d !== "0") {
				el.innerHTML = rest_d_str +' 天 ' + rest_h_str + ' 时';
				return true;
			} else {
				el.innerHTML = rest_h_str + ':' + rest_m_str + ':' + rest_s_str;
			}
		},
		end: dj_conf.end,
		error: dj_conf.error
	});

	function countdown(conf) {
		// 验证
		var bDate, eDate, end_time, begin_time;
		if (typeof conf.bt === "number" && typeof conf.et === "number") {
			end_time = conf.et;
			begin_time = conf.bt;
		} else if(typeof conf.bt === "string" && typeof conf.et === "string") {
			var reg = /^[1-9]\d{3}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
			if (reg.test(conf.bt) && reg.test(conf.et)) {
				bDate = makeDate(conf.bt);
				eDate = makeDate(conf.et);
				end_time = eDate.getTime();
				begin_time = bDate.getTime();
			} else {
				return conf.error && conf.error("a");
			}
		} else {
			return conf.error && conf.error("b");
		}
		// 变为毫秒数计算
		// 时间间隔
		var space = conf.space || 1000;
		var _format = conf.format || format;
		_do();
		function _do() {
			var time_distance = end_time - begin_time;
			if(
				time_distance <= 0){
				return conf.end && conf.end();
			}
			// 当格式化返回真的时候结束倒计时
			if (_format(time_distance)) {
				return;
				//return conf.end && conf.end(true);
			}
			setTimeout(function(){
				begin_time = begin_time + space;
				_do();
			}, space);
		}
		// 兼容ie
		//makeDate("2015-01-30 18:50:00")
		function makeDate(time) {
			var _t1 =  time.split(" ");
			var _t2 = _t1[0].split("-");
			var _t3 = _t1[1].split(":");
			var _d = new Date();
			var y = _t2[0], mon = _t2[1].replace(/^0/, '') - 0 -1, d = _t2[2].replace(/^0/, '') - 0, h = _t3[0].replace(/^0/, '') - 0, m = _t3[1].replace(/^0/, '') - 0, s = _t3[2].replace(/^0/, '') - 0;
			_d.setFullYear(y);
			_d.setMonth(mon);
			_d.setDate(d);
			_d.setHours(h);
			_d.setMinutes(m);
			_d
				.setSeconds(s);
			return _d;
		}
		//makeDate end
		function format(time_distance) {
			var one_day = 1000*60*60*24;
			var rest_d = (Math.floor(time_distance/one_day)).toString();
			var rest_h = (Math.floor(time_distance/1000/3600) - rest_d*24).toString();
			var rest_m = (Math.floor(time_distance/1000/60) - rest_d*24*60 - rest_h*60).toString();
			var rest_s = (Math.floor(time_distance/1000)-rest_d*24*3600 - rest_h*3600 - rest_m*60).toString();
			var rest_d_str = '',rest_h_str = '',rest_m_str = '',rest_s_str = '';
			rest_d_str = rest_d_str + rest_d;
			rest_h_str = rest_h_str + (rest_h.length === 1 ? ("0" + rest_h) : rest_h);
			rest_m_str = rest_m_str + (rest_m.length === 1 ? ("0" + rest_m) : rest_m);
			rest_s_str = rest_s_str + (rest_s.length === 1 ? ("0" + rest_s) : rest_s);
			console.log(rest_d_str +'天' + rest_h_str + '时' + rest_m_str + '分' + rest_s_str + '秒');
		}
	}

}
function getServerTime(){
	var severtime='';
	var xmlHttp = false;
	//获取服务器时间
	try {
		xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e2) {
			xmlHttp = false;
		}
	}
	if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
		xmlHttp = new XMLHttpRequest();
	}
	xmlHttp.open("head", location.href, false);
	xmlHttp.onreadystatechange=function(){
		if( xmlHttp.readyState == 4 && xmlHttp.status == 200 ){
			severtime=new Date(xmlHttp.getResponseHeader("Date"));
		}
	}
	xmlHttp.send("null");
	return severtime;
}

// 日期格式化函数
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt)
{ //author: meizz
	var o = {
		"M+" : this.getMonth()+1,                 //月份
		"d+" : this.getDate(),                    //日
		"h+" : this.getHours(),                   //小时
		"m+" : this.getMinutes(),                 //分
		"s+" : this.getSeconds(),                 //秒
		"q+" : Math.floor((this.getMonth()+3)/3), //季度
		"S"  : this.getMilliseconds()             //毫秒
	};
	if(/(y+)/.test(fmt))
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("("+ k +")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	return fmt;
}
//end
