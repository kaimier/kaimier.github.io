/*! JS, uglified
 Date: 2015-09-08 */
! function() {
  function a(a) {
    if (0 === l.$(".loading").length) return h();
    var c = 5e3,
      d = !1;
    window.__snTimeOut__ = setTimeout(function() {
      d = !0, l.evt.unbind(window, "load"), b(a)
    }, c), l.evt.bind(document, m, function(a) {
      a.stopPropagation(), a.preventDefault()
    }), l.evt.bind(window, "load", function() {
      clearTimeout(window.__snTimeOut__), d || b(a)
    })
  }

  function b(a) {
    l("body").css("add", "loaded");
    var b = l(".loading");
    b.css("add", "hiding"), l.evt.unbind(document, m), b.css("add", "hide"), c(), g(), f(), a()
  }

  function c() {
    0 !== l.$(".go2top").length && l.evt.on(window, "scroll", function() {
      var a = 0;
      document.documentElement && (a = document.documentElement.scrollTop), 0 === a && document.body && (a = document.body.scrollTop), d(a)
    })
  }

  function d(a) {
    var b = l.body().wh;
    if (b > a || n) return void l.css(l.$(".go2top")[0]).remove("show"); {
      var c = 1.5 * b;
      (document.documentElement || document.body).scrollHeight - b
    }
    a > c ? l.css(l.$(".go2top")[0]).add("show") : l.css(l.$(".go2top")[0]).remove("show")
  }

  function e() {
    var a = (l.body().wh, document.body.scrollTop),
      b = function() {
        n = !0;
        var b = 10,
          c = Math.floor(a / b);
        l.animate(function(b) {
          document.documentElement && (document.documentElement.scrollTop = a - c * b), document.body && (document.body.scrollTop = a - c * b)
        }, b, 40, function() {
          document.documentElement && (document.documentElement.scrollTop = 0), document.body && (document.body.scrollTop = 0), n = !1
        }, -1)
      };
    b()
  }

  function f() {
    l.evt.bind(document, m, function(a) {
      globalDomEvtSwt && (a.stopPropagation(), a.preventDefault());
      var b = a.target,
        c = a.type,
        d = b.getAttribute("data-event-agent"),
        e = 5;
      if (!d)
        for (var f = 0;
          (b = b.parentNode) && (!(f >= e) && "getAttribute" in b) && !(d = b.getAttribute("data-event-agent")); f++);
      if (d) {
        var g = d.split("|"),
          h = g[0].split(","),
          i = g[1]; - 1 !== l.indexOf(h, c) && globalEventAgent[c][i].call(b, a)
      }
    })
  }

  function g() {
    globalEventAgent.touchend.rock = function() {
      l.css(this).add("rocking"), l(this).unbind("webkitAnimationEnd").bind("webkitAnimationEnd", function() {
        e(), l.css(this).remove("rocking"), l.css(this.parentNode).remove("show")
      })
    }
  }

  function h() {
    c(), g(), f(), window.globalZJdComTask = {
      push: function(a) {
        a()
      }
    }
  }

  function i() {
    {
      var a = navigator.userAgent;
      navigator.appVersion
    }
    return {
      trident: a.indexOf("Trident") > -1,
      presto: a.indexOf("Presto") > -1,
      webKit: a.indexOf("AppleWebKit") > -1,
      gecko: a.indexOf("Gecko") > -1 && -1 == a.indexOf("KHTML"),
      mobile: !!a.match(/AppleWebKit.*Mobile.*/),
      ios: !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: a.indexOf("Android") > -1 || a.indexOf("Linux") > -1,
      iPhone: a.indexOf("iPhone") > -1,
      iPad: a.indexOf("iPad") > -1,
      webApp: -1 == a.indexOf("Safari"),
      weixin: a.indexOf("MicroMessenger") > -1,
      qq: " qq" == a.match(/\sQQ/i)
    }
  }

  function j() {
    var a = i();
    a.weixin && a.android && l.pushcss(".icon{background-image: url(/images/andweixin.png) !important; background-size: 527px auto}")
  }
  var k = util();
  window.jstools = k;
  var l = k.s;
  window.sn = l, window.globalDomEvtSwt = !1;
  var m = "touchstart,touchmove,touchend";
  window.globalEventAgent = {};
  var n = !1;
  l.each(m.split(","), function(a) {
    window.globalEventAgent[a] = {}
  }), document.documentElement && (document.documentElement.scrollTop = 0), document.body && (document.body.scrollTop = 0), window.loading = a, window.globalZJdComTask = [], a(function() {
    for (var a; a = globalZJdComTask.shift();) a()
  }), j()
}("common"), window.validate_middleware = function() {
    function a(a, d) {
      var e = c(d);
      for (var f in e) {
        var d = e[f];
        a[f] = b(f, d)
      }
      return a
    }

    function b(a, b) {
      return function(c) {
        return "function" == typeof b ? b(c) : d(a, c, b)
      }
    }

    function c(a) {
      var b = {};
      for (var c in a) {
        var d = a[c];
        b[c] = e(d) ? {
          min: d[2] ? d[2][0] : !1,
          max: d[2] ? d[2][1] : !1,
          reg: d[3] || null,
          exist: d[1],
          name: d[0] || "",
          reg_msg: d[4] || ""
        } : d
      }
      return b
    }

    function d(a, b, c) {
      var d = "",
        e = !0;
      if ("string" != typeof b && "number" != typeof b) return !1;
      var f = "";
      f = c.name, b = b.toString();
      var g = b.length;
      return c.exist && "" === b ? (d = f + "不能为空", e = !1) : c.min && g < c.min ? (d = f + "不能小于" + c.min + "位," + f + "长度为" + c.min + " ~ " + c.max + "位", e = !1) : c.max && g > c.max ? (d = f + "不能大于" + c.max + "位," + f + "长度为" + c.min + " ~ " + c.max + "位", e = !1) : c.reg && !c.reg.test(b) && (d = c.reg_msg, e = !1), {
        status: e,
        msg: d,
        key: a
      }
    }

    function e(a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    }

    function f(a, b) {
      for (var c in b) a[c] = b[c];
      return a
    }
    var g = {},
      h = {},
      i = {
        email: ["邮箱", !0, [1, 100], /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i, "邮箱地址无效"],
        captcha: ["验证码", !0, void 0, /^\d{4,10}$/, "验证码不正确"],
        mobile: ["移动电话", !0, null, /^0?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/, "手机号格式不正确"],
        username: ["用户名", !0, [4, 16], /^[a-zA-Z][\w\-]+$/, "用户名只允许字母、数字、下划线、横线组成，首位只能为字母, 且至少需要 4 个字符"],
        password: ["密码", !0, [6, 26], /^.{5,25}$/, "密码只能为 6 - 26 位数字，字母及常用符号组成"],
        code: ["短信验证码", !0, null, /^\d{6}$/, "请填写6位数字验证码"],
        ID_card: ["身份证号码", !0, null, /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/, "请输入正确的身份证号码"],
        time: ["时间", !0, null, /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/, "请输入正确的时间,例:14:30或14:30:00"],
        url: ["网址", !0, null, /^(https?|ftp):\/\/[^\s]+$/i, "网址格式不正确"],
        postcode: ["邮政编码", !0, null, /^(https?|ftp):\/\/[^\s]+$/i, "邮政编码格式不正确"],
        chinese: ["中文", !0, null, /^[\u0391-\uFFE5]+$/, "请输入中文"],
        chineseName: ["中文名", !0, null, /^[\u0391-\uFFE5]{2,6}$/, "请输入2-6个汉字中文"],
        address: ["地址", !0, null, /^[\u0391-\uFFE5][\u0391-\uFFE5\d]+$/, "填写正确的地址"],
        agreement: ["注册协议", !0, null, /^.{1,10}$/, "填阅读注册协议"],
        date: ["日期", !0, null, /^[\u0391-\uFFE5][\u0391-\uFFE5\d]+$/, "日期格式:yyyy-mm-dd"]
      };
    return g.REG = i, g.validate = function(b) {
      return b = b || {}, a(h, f(i, b))
    }, g
  }(),
  function() {
    if (!a) var a = (encodeURI(window.location.href), {
      appId: "",
      img: "http://m.dj.jd.com/images/jddj.png",
      url: document.location.href,
      title: "京东东家，玩转私募股权",
      desc: "更多优质项目尽在京东私募股权融资平台~"
    });
    var b = function() {
      WeixinJSBridge.on("menu:share:appmessage", function() {
        WeixinJSBridge.invoke("sendAppMessage", {
          appid: a.appId,
          img_url: a.img,
          img_width: "240",
          img_height: "240",
          link: a.url,
          desc: a.desc,
          title: a.title
        }, function() {})
      }), WeixinJSBridge.on("menu:share:timeline", function() {
        WeixinJSBridge.invoke("shareTimeline", {
          appid: a.appId,
          img_url: a.img,
          img_width: "240",
          img_height: "240",
          link: a.url,
          desc: a.desc,
          title: a.title
        }, function() {})
      }), WeixinJSBridge.on("menu:share:weibo", function() {
        WeixinJSBridge.invoke("shareWeibo", {
          content: a.title + " " + a.url,
          url: a.url
        }, function() {})
      })
    };
    document.addEventListener ? (document.removeEventListener("WeixinJSBridgeReady", b), document.addEventListener("WeixinJSBridgeReady", b, !1)) : document.attachEvent && (document.detachEvent("WeixinJSBridgeReady", b), document.detachEvent("onWeixinJSBridgeReady", b), document.attachEvent("WeixinJSBridgeReady", b), document.attachEvent("onWeixinJSBridgeReady", b))
  }();

function obstructClick(zIndex, id) {
  // 阻止touchend后300ms启动的click
  var sh = document.body.scrollHeight;
  id = id || "sn-obstruct-click";
  var el = getDom(id);
  el.style.height = sh + "px";
  el.style.display = "block";
  // 300ms在微信中无效 修改为400ms
  obstructClick.st = setTimeout(function() {
    el.style.display = "none";
  }, 400);
  if (typeof el.onclick !== "function") {
    el.onclick = function(e) {
      clearTimeout(obstructClick.st);
      this.style.display = "none";
    }
  }

  function getDom(id) {
    var el = document.getElementById(id);
    if (el === null) {
      el = createDom({
        "tag": "div",
        "attr": {
          "id": id,
          "style": "position:absolute;left:0; -webkit-tap-highlight-color: transparent; width:100%; top:0; z-index:" + (zIndex || 1000)
        }
      });
      document.body.appendChild(el);
    }
    return el;
  }

  function createDom(conf) {
    var dom = document.createElement(conf.tag || "div");
    conf.className && (dom.className = conf.className);
    if (typeof conf.attr === "object") {
      for (var key in conf.attr) {
        dom.setAttribute(key, conf.attr[key]);
      }
    }
    return dom;
  }
}