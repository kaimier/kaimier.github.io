var __jrrda = ['40887678.1738918129.1448521721.1449105467.1449110404.29'];
var __jrrdb = ['40887678.2.1738918129|29.1449110404'];
var __jrrdc = ['40887678'];
var __jrrdv = ['40887678|JD|-|referral|-'];
var c_domain = 'click.jr.jd.com';
(function() {
    var ae = {
        cdomain: "",
        getHost: function(l) {
            var s = /.*\:\/\/([^\/|:]*).*/;
            var g = l.match(s);
            var p = "";
            if (typeof g != "undefined" && null != g) {
                p = g[1]
            }
            return p
        },
        urlParams: function(g) {
            var l = new RegExp("(^|&)" + g + "=([^&]*)(&|$)");
            var p = window.location.search.substr(1).match(l);
            if (p != null) {
                return unescape(p[2])
            }
            return null
        },
        setCookie: function(g, l, s) {
            var p = new Date();
            p.setTime(p.getTime() + s);
            document.cookie = g + "=" + escape(l) + ";expires=" + p.toGMTString() + ";path=/;domain=" + this.cdomain
        },
        getCookie: function(g) {
            var t = "";
            if (document.cookie && document.cookie != "") {
                var s = document.cookie.split(";");
                for (var p = 0; p < s.length; p++) {
                    var l = $.trim(s[p]);
                    if (l.substring(0, g.length + 1) == (g + "=")) {
                        t = decodeURIComponent(l.substring(g.length + 1));
                        break
                    }
                }
            }
            return t
        }
    };
    var aZ = {
        account: "",
        visit: function() {
            var y = ae.getCookie("_jrda");
            var s = ae.getCookie("_jrdb");
            var l = new Date().getTime();
            var g = 1;
            var t = 30 * 60 * 1000;
            var p = 180 * 24 * 60 * 60 * 1000;
            if (!y && !s) {
                ae.setCookie("_jrda", g, p);
                ae.setCookie("_jrdb", l, t)
            } else {
                if (y && !s) {
                    g = parseInt(y) + 1;
                    ae.setCookie("_jrda", g, p);
                    ae.setCookie("_jrdb", l, t)
                } else {
                    ae.setCookie("_jrdb", l, t)
                }
            }
        },
        order: function(D) {
            var L = ae.getHost(D),
                l = "",
                p = null,
                C = null,
                t = null,
                y = null;
            var K = ae.getHost(document.location.href);
            if (K == "trade.z.jd.com" || L == "trade.z.jd.com") {
                y = "10002";
                p = $(".module_item:first dl:first dd").html();
                t = $("#_projectId").val();
                var g = $(".f_red28:first").html();
                if (g != null) {
                    C = g.substr(1, g.length - 1)
                }
            } else {
                if (L == "licai.bx.jd.com") {
                    y = "102";
                    p = ae.urlParams("orderId");
                    C = ae.urlParams("shouldPay")
                } else {
                    if (L == "bill.jr.jd.com") {
                        y = "10003";
                        p = $("#orderId").val();
                        C = $("#shouldPay").val()
                    } else {
                        if (L == "") {
                            L = document.location.href;
                            if (L.match("trade.jr.jd.com")) {
                                var s = $("a[href='/centre/jrbpayin.action']").size();
                                if (s == 1) {
                                    y = "10000";
                                    p = ae.urlParams("order");
                                    C = ae.urlParams("amount")
                                } else {
                                    $("a[class='loan-pub-btn']").each(function() {
                                        var W = this;
                                        var O = $(W).attr("href");
                                        if (O.indexOf("list.jr.jd.com/detail")) {
                                            y = "101";
                                            p = ae.urlParams("order");
                                            C = $(".bill-money").html().substr(1);
                                            t = $(".loan-pub-btn").last().attr("href").split("/")[4].split(".")[0]
                                        }
                                    })
                                }
                            }
                        } else {
                            if (L == "jrapp.jd.com") {
                                L = document.location.href;
                                if (L.match("m.z.jd.com")) {
                                    y = "10002";
                                    p = ae.urlParams("orderId");
                                    C = ae.urlParams("amount")
                                }
                            }
                        }
                    }
                }
            }
            if (p != null && C != null) {
                l = p + "|" + C + "|" + t + "|" + y
            }
            return l
        },
        req: function(W, t) {
            var K = document.referrer;
            var D = "";
            for (var a1 in t) {
                D += ((a1 + "=" + t[a1]) + "$")
            }
            D = D.substring(0, D.length - 1);
            var y = ae.getCookie("__jdu");
            if (y == "") {
                var l = ae.getCookie("__jda");
                if (l != "") {
                    var s = l.split(".");
                    y = s[1]
                }
            }
            var g = ae.getCookie("pin");
            var p = ae.getCookie("_jrda");
            var L = ae.getCookie("flow_site_ad");
            var O = ae.getCookie("flow_outsite_ad");
            var aa = ("https:" == document.location.protocol ? "https://" : "http://") + c_domain + "/log.gif?uid=" + y + "&p=" + g + "&t=" + W + "&m=" + this.account + "&ref=" + encodeURIComponent(K) + "&v=" + encodeURIComponent(D) + "&order=" + this.order(K) + "&jrda=" + p + "&sitead=" + L + "&outsitead=" + O + "&rm=" + (new Date).getTime() + "&__jrrda=" + __jrrda + "&__jrrdb=" + __jrrdb + "&__jrrdc=" + __jrrdc + "&__jrrdv=" + __jrrdv;
            var C = new Image(1, 1);
            C.src = aa;
            C.onload = function() {
                C.onload = null;
                C.onerror = null
            }
        }
    };
    if ("undefined" == typeof _jraq || _jraq.length == 0) {
        var ab = document.domain.lastIndexOf(".");
        var ap = document.domain.substring(0, ab).lastIndexOf(".");
        if (ap > -1) {
            ae.cdomain = document.domain.substring(ap)
        } else {
            ae.cdomain = "." + document.domain
        }
        aZ.account = "UA-J2000-1"
    } else {
        if (_jraq.length == 1) {
            var ah = _jraq.pop();
            aZ.account = ah[1];
            var ab = document.domain.lastIndexOf(".");
            var ap = document.domain.substring(0, ab).lastIndexOf(".");
            if (ap > -1) {
                ae.cdomain = document.domain.substring(ap)
            } else {
                ae.cdomain = "." + document.domain
            }
        } else {
            var aW = _jraq.pop();
            ae.cdomain = aW[1];
            var ah = _jraq.pop();
            aZ.account = ah[1]
        }
    }
    var ai = "jr.jd.com,z.jd.com,zbbs.jd.com,baitiao.jd.com,baitiao.ps.jd.com,go.jd.com,loan.jd.com,bao.jd.com,baoxian.jd.com,licai.bx.jd.com,licai.jd.com,8.jd.com,8.jr.jd.com,jinku.pay.jd.com".split(",");
    var aY = function(L) {
        var s = document.referrer,
            D = ae.cdomain;
        var p = s && s.split("/")[2],
            K = false;
        var W = __jrrdv;
        var l = /from=jrad_(([0-9]{1,})|JD)/;
        var g = l.exec(at.location.href);
        var O = /&loc=([0-9]{1,})/;
        var y = O.exec(at.location.href);
        if (g != null && y != null && y[1] == 2) {
            L.set(f, "jrad_" + g[1]);
            L.set(az, "-");
            L.set(c, "referral");
            L.set(av, "-")
        } else {
            if (p && (p.indexOf(".jd.com") > -1)) {
                for (var aa = ai, t = 0; t < aa.length; t++) {
                    var C = aa[t].toLowerCase();
                    if (p.indexOf(C) > -1) {
                        K = true;
                        break
                    }
                }
                if (!K && (/jrad_(([0-9]{1,})|JD)/.exec(L.get(f)) == null)) {
                    L.set(f, "JD");
                    L.set(az, "-");
                    L.set(c, "referral");
                    L.set(av, "-")
                }
            } else {
                if (!p) {
                    if (W[0] != null && "JD" === L.get(f)) {
                        L.set(f, "direct");
                        L.set(az, "-");
                        L.set(c, "none");
                        L.set(av, "-")
                    }
                }
            }
        }
        if (window.jrBase && window.jrBase.navId) {
            L.set(j, window.jrBase.navId)
        }
    };
    var ad = window,
        at = document,
        aG = encodeURIComponent,
        af = decodeURIComponent,
        S = void 0,
        P = "push",
        G = "join",
        M = "split",
        R = "length",
        x = "indexOf",
        n = "prototype",
        I = "toLowerCase";
    var u = {};
    u.util = {
        getParameter: function(p, l) {
            var s = new RegExp("(?:^|&|[?]|[/])" + l + "=([^&]*)");
            var g = s.exec(p);
            return g ? aG(g[1]) : ""
        },
        Wv: function(s, g, p, l) {
            s = s + "=" + g + "; path=/; ";
            l && (s += "expires=" + (new Date(new Date().getTime() + l)).toGMTString() + "; ");
            p && (s += "domain=" + p + ";");
            at.cookie = s
        },
        Vv: function(y) {
            for (var g = [], t = at.cookie[M](";"), l = RegExp("^\\s*" + y + "=\\s*(.*?)\\s*$"), s = 0; s < t[R]; s++) {
                var p = t[s]["match"](l);
                p && g[P](p[1])
            }
            return g
        }
    };
    var aM = 0;

    function am(g) {
        return (g ? "_" : "") + aM++
    }
    var ao = am(),
        ag = am(),
        al = am(),
        J = am(),
        d = am(),
        aO = am(),
        X = am(),
        au = am(),
        aj = am(),
        an = am(),
        aD = am(),
        aC = am(),
        aK = am(),
        aT = am(),
        Z = am(),
        U = am(),
        E = am(),
        A = am(),
        N = am(),
        aF = am(),
        o = am(),
        B = am(),
        i = am(),
        a = am(),
        aR = am(),
        aB = am(),
        Q = am(),
        aP = am(),
        f = am(),
        az = am(),
        c = am(),
        av = am(),
        a0 = am(),
        b = am(),
        j = am();
    var aS = function() {
        var p = {};
        this.set = function(t, s) {
            p[t] = s
        }, this.get = function(s) {
            return p[s] !== S ? p[s] : null
        }, this.m = function(t) {
            var s = this.get(t);
            var C = s == S || s === "" ? 0 : 1 * s;
            p[t] = C + 1
        };
        this.set(ao, "UA-J2011-1");
        this.set(J, ae.cdomain);
        this.set(al, m());
        this.set(d, Math.round((new Date).getTime() / 1000));
        this.set(aO, 63072000000);
        this.set(X, 15768000000);
        this.set(au, 1800000);
        this.set(aT, T());
        var g = ac();
        this.set(Z, g.name);
        this.set(U, g.version);
        this.set(E, H());
        var l = aN();
        this.set(A, l.D);
        this.set(N, l.C);
        this.set(aF, l.language);
        this.set(o, l.javaEnabled);
        this.set(B, l.characterSet);
        this.set(aP, ar);
        this.set(a0, new Date().getTime())
    };
    var ar = "baidu:wd,baidu:word,so.com:q,so.360.cn:q,360so.com:q,360sou.com:q,baidu:q1,m.baidu:word,m.baidu:w,wap.soso:key,m.so:q,page.yicha:key,sz.roboo:q,i.easou:q,wap.sogou:keyword,google:q,soso:w,sogou:query,youdao:q,ucweb:keyword,ucweb:word,114so:kw,yahoo:p,yahoo:q,live:q,msn:q,bing:q,aol:query,aol:q,daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,alice:qs,yandex:text,najdi:q,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,ozu:q,terra:query,rambler:query".split(","),
        aX = function() {
            return Math.round((new Date).getTime() / 1000)
        },
        w = function() {
            return Math.round(Math.random() * 2147483647)
        },
        Y = function() {
            return w() ^ aq() & 2147483647
        },
        m = function() {
            return V(at.domain)
        },
        aN = function() {
            var l = {},
                g = ad.navigator,
                p = ad.screen;
            l.D = p ? p.width + "x" + p.height : "-";
            l.C = p ? p.colorDepth + "-bit" : "-";
            l.language = (g && (g.language || g.browserLanguage) || "-")[I]();
            l.javaEnabled = g && g.javaEnabled() ? 1 : 0;
            l.characterSet = at.characterSet || at.charset || "-";
            return l
        },
        T = function() {
            var D, C, y, t;
            y = "ShockwaveFlash";
            if ((D = (D = window.navigator) ? D.plugins : S) && D[R] > 0) {
                for (C = 0; C < D[R] && !t; C++) {
                    y = D[C], y.name[x]("Shockwave Flash") > -1 && (t = y.description[M]("Shockwave Flash ")[1])
                }
            } else {
                y = y + "." + y;
                try {
                    C = new ActiveXObject(y + ".7"), t = C.GetVariable("$version")
                } catch (s) {}
                if (!t) {
                    try {
                        C = new ActiveXObject(y + ".6"), t = "WIN 6,0,21,0", C.AllowScriptAccess = "always", t = C.GetVariable("$version")
                    } catch (p) {}
                }
                if (!t) {
                    try {
                        C = new ActiveXObject(y), t = C.GetVariable("$version")
                    } catch (l) {}
                }
                t && (t = t[M](" ")[1][M](","), t = t[0] + "." + t[1] + " r" + t[2])
            }
            var K = u.util.Vv("_r2");
            D = t ? (t + (K[R] > 0 ? ("_" + K[0]) : "")) : "-";
            var g = u.util.Vv("limgs");
            D = D + (g[R] > 0 ? ("_" + g[0]) : "");
            return D
        },
        aw = function(g) {
            return S == g || "-" == g || "" == g
        },
        V = function(l) {
            var g = 1,
                s = 0,
                p;
            if (!aw(l)) {
                g = 0;
                for (p = l[R] - 1; p >= 0; p--) {
                    s = l.charCodeAt(p), g = (g << 6 & 268435455) + s + (s << 14), s = g & 266338304, g = s != 0 ? g ^ s >> 21 : g
                }
            }
            return g
        },
        aq = function() {
            var p = aN();
            for (var l = p, g = ad.navigator, l = g.appName + g.version + l.language + g.platform + g.userAgent + l.javaEnabled + l.D + l.C + (at.cookie ? at.cookie : "") + (at.referrer ? at.referrer : ""), g = l.length, s = ad.history.length; s > 0;) {
                l += s-- ^ g++
            }
            return V(l)
        },
        ac = function() {
            var g = {
                    name: "other",
                    version: "0"
                },
                s = navigator.userAgent.toLowerCase();
            browserRegExp = {
                jrapp: /jdjr[|\-]([\w.]+)/,
                weixin: /micromessenger[|\/]([\w.]+)/,
                se360: /360se/,
                se360_2x: /qihu/,
                ie: /msie[ ]([\w.]+)/,
                firefox: /firefox[|\/]([\w.]+)/,
                chrome: /chrome[|\/]([\w.]+)/,
                safari: /version[|\/]([\w.]+)(\s\w.+)?\s?safari/,
                opera: /opera[|\/]([\w.]+)/
            };
            for (var p in browserRegExp) {
                var l = browserRegExp[p].exec(s);
                if (l) {
                    g.name = p;
                    g.version = l[1] || "0";
                    break
                }
            }
            return g
        },
        H = function() {
            var g = /(win|android|linux|nokia|ipad|iphone|ipod|mac|sunos|solaris)/.exec(navigator.platform.toLowerCase());
            return g == null ? "other" : g[0]
        },
        aL = function() {
            var p = "",
                y = ["jwotest_product", "jwotest_list", "jwotest_cart", "jwotest_orderinfo", "jwotest_homepage", "jwotest_other1", "jwotest_other2", "jwotest_other3"];
            for (var t = 0, g = y.length; t < g; t++) {
                var s = u.util.Vv(y[t]);
                if (s[R] == 0) {
                    continue
                }
                var C = af(s[0]).match(/=(.*?)&/gi),
                    l = [];
                if (C == null) {
                    continue
                }
                $.each(C, function(K, D) {
                    l.push(K == 0 ? "T" + D.substring(1, D.length - 1) : D.substring(1, D.length - 1))
                });
                p += l[G]("-") + ";"
            }
            return p
        },
        aJ = function(l) {
            l.set(aj, at.location.hostname);
            l.set(an, at.title);
            l.set(aD, at.location.pathname);
            l.set(aC, at.referrer);
            l.set(aK, at.location.href);
            var C = __jrrda,
                s = C[R] > 0 ? C[0][M](".") : null;
            l.set(ag, s ? s[1] : Y());
            l.set(i, s ? s[2] : l.get(d));
            l.set(a, s ? s[3] : l.get(d));
            l.set(aR, s ? s[4] : l.get(d));
            l.set(aB, s ? s[5] : 1);
            var t = __jrrdv,
                g = t[R] > 0 ? t[0][M]("|") : null;
            l.set(f, g ? g[1] : "direct");
            l.set(az, g ? g[2] : "-");
            l.set(c, g ? g[3] : "none");
            l.set(av, g ? g[4] : "-");
            var y = __jrrdb,
                p = y[R] > 0 ? y[0][M](".") : null;
            l.set(Q, p ? p[1] : 0);
            l.set(b, aL() || "-");
            return !0
        },
        aH = function() {
            var l = __jrrdb,
                g = l[R] > 0 ? l[0][M](".") : null;
            return (g && g.length == 4) ? g[1] * 1 : 0
        },
        aI = function(ba) {
            var s = at.location.href,
                D = at.referrer,
                a7 = ba.get(J),
                C = u.util.getParameter(s, "utm_source"),
                t = [],
                aa = ba.get(f),
                W = ba.get(az),
                O = ba.get(c),
                K = ba.get(av),
                g = (__jrrdb.length == 0);
            if (C) {
                var l = u.util.getParameter(s, "utm_campaign"),
                    a9 = u.util.getParameter(s, "utm_medium"),
                    a1 = u.util.getParameter(s, "utm_term");
                t[P](C);
                t[P](l || "-");
                t[P](a9 || "-");
                t[P](a1 || "not set")
            } else {
                var p = D && D[M]("/")[2],
                    a8 = false;
                if (p && p[x](a7) < 0) {
                    for (var a2 = ba.get(aP), a4 = 0; a4 < a2.length; a4++) {
                        var a6 = a2[a4][M](":");
                        if (p[x](a6[0][I]()) > -1 && D[x]((a6[1] + "=")[I]()) > -1) {
                            var y = /jrad_([0-9]{1,})/;
                            var a3 = y.exec(ba.get(f));
                            if (a3 != null) {
                                a8 = true;
                                break
                            }
                            var a5 = af(a6[1][I]()),
                                L = u.util.getParameter(D, a5);
                            t[P](a6[0]);
                            t[P]("-");
                            t[P]("organic");
                            t[P](L || "not set");
                            a8 = true;
                            break
                        }
                    }
                    if (!a8) {
                        if (p[x]("zol.com.cn") > -1) {
                            t[P]("zol.com.cn");
                            t[P]("-");
                            t[P]("cpc");
                            t[P]("not set")
                        } else {
                            t[P](p);
                            t[P]("-");
                            t[P]("referral");
                            t[P]("-")
                        }
                    }
                }
            }
            if (t[R] > 0 && ((t[0] != aa || t[1] != W || t[2] != O) || (g && t[2] === "referral"))) {
                ba.set(f, t[0] || "direct");
                ba.set(az, t[1] || "-");
                ba.set(c, t[2] || "none");
                ba.set(av, t[3] || "-");
                ax(ba)
            } else {
                if (g) {
                    ax(ba)
                } else {
                    h(ba)
                }
            }
        },
        k = function(l, g) {
            var p = g.split(".");
            l.set(i, p[2]);
            l.set(a, p[4]);
            l.set(aR, aX());
            l.m(aB);
            l.set(Q, 1)
        },
        F = function(l) {
            var g = l.get(d);
            l.set(ag, Y());
            l.set(i, g);
            l.set(a, g);
            l.set(aR, g);
            l.set(aB, 1);
            l.set(Q, 1)
        },
        h = function(g) {
            g.m(Q)
        },
        v = function(g) {
            return [g.get(al), g.get(ag) || "-", g.get(i) || "-", g.get(a) || "-", g.get(aR) || "-", g.get(aB) || 1][G](".")
        },
        e = function(g) {
            return [g.get(al), g.get(Q) || 1, g.get(ag) + "|" + g.get(aB) || 1, g.get(aR) || g.get(d)][G](".")
        },
        z = function(g) {
            return [g.get(al), g.get(f) || at.domain, g.get(az) || "(direct)", g.get(c) || "direct", g.get(av) || "-"][G]("|")
        },
        ax = function(g) {
            var l = __jrrda;
            l.length == 0 ? F(g) : k(g, l[0])
        };
    var r = new aS(),
        aA = function() {
            this.a = {};
            this.add = function(g, l) {
                this.a[g] = l
            };
            this.get = function(g) {
                return this.a[g]
            };
            this.toString = function() {
                return this.a[G]("&")
            }
        },
        ak = function(l, g) {
            function s(y, t) {
                t && p[P](y + "=" + t + ";")
            }
            var p = [];
            s("__jrrda", v(l));
            s("__jrrdv", z(l));
            g.add("jdcc", p[G]("+"))
        },
        q = function(l, g) {
            g.add("jdac", l.get(ao)), g.add("jduid", l.get(ag)), g.add("jdsid", l.get(ag) + "|" + l.get(aB)), g.add("jdje", l.get(o)), g.add("jdsc", l.get(N)), g.add("jdsr", l.get(A)), g.add("jdul", l.get(aF)), g.add("jdcs", l.get(B)), g.add("jddt", l.get(an) || "-"), g.add("jdmr", aG(l.get(aC))), g.add("jdhn", l.get(aj) || "-"), g.add("jdfl", l.get(aT)), g.add("jdos", l.get(E)), g.add("jdbr", l.get(Z)), g.add("jdbv", l.get(U)), g.add("jdwb", l.get(i)), g.add("jdxb", l.get(a)), g.add("jdyb", l.get(aR)), g.add("jdzb", l.get(aB)), g.add("jdcb", l.get(Q)), g.add("jdusc", l.get(f) || "direct"), g.add("jducp", l.get(az) || "-"), g.add("jdumd", l.get(c) || "-"), g.add("jduct", l.get(av) || "-"), g.add("jdlt", typeof jdpts != "object" ? 0 : jdpts._st == undefined ? 0 : l.get(a0) - jdpts._st), g.add("jdtad", l.get(b)), g.add("nav", l.get(j) || "-")
        },
        aV = function(l, g, p, s) {
            g.add("jdac", l.get(ao)), g.add("jduid", l.get(ag)), g.add("jdsid", l.get(ag) + "|" + l.get(aB)), g.add("jdje", "-"), g.add("jdsc", "-"), g.add("jdsr", "-"), g.add("jdul", "-"), g.add("jdcs", "-"), g.add("jddt", "-"), g.add("jdmr", aG(l.get(aC))), g.add("jdhn", "-"), g.add("jdfl", "-"), g.add("jdos", "-"), g.add("jdbr", "-"), g.add("jdbv", "-"), g.add("jdwb", "-"), g.add("jdxb", "-"), g.add("jdyb", "-"), g.add("jdzb", l.get(aB)), g.add("jdcb", s ? (aH() + s) : l.get(Q)), g.add("jdusc", "-"), g.add("jducp", "-"), g.add("jdumd", "-"), g.add("jduct", "-"), g.add("jdlt", 0), g.add("jdtad", p)
        },
        aU = function() {
            aJ(r) && aI(r);
            aY(r);
            var l = new aA(),
                g = r.get(J);
            q(r, l);
            __jrrda = v(r);
            __jrrdb = e(r);
            __jrrdc = r.get(al);
            __jrrdv = z(r);
            return l.a
        },
        aE = function() {
            var g = new aA();
            q(r, g);
            return g.a
        },
        aQ = function(g, l) {
            var p = new aA();
            aV(r, p, g, l);
            return p.a
        },
        ay = function(l) {
            if (l instanceof Array) {
                var s = "";
                for (var p = 0, g = l.length; p < g; p++) {
                    s += l[p] + ((p == g - 1) ? "" : "|||")
                }
                return s
            }
            return l
        };
    u.tracker = {
        bloading: function(p, l, s) {
            var g = aU()
        }
    };
    u.tracker.bloading("J", "A", new Date().getTime());
    $(document).bind("click", function(y) {
        y = y || event;
        var W = document;
        var aa = y.srcElement || y.target;
        var C = $(aa).attr("clstag");
        var L = "";
        while (!C) {
            aa = aa.parentNode;
            if (!aa || (aa.nodeName == "BODY")) {
                break
            }
            C = $(aa).attr("clstag")
        }
        if (C) {
            var l = C.split("|"),
                g = l[1],
                K = l[2],
                O = l[3];
            if (aa.nodeName == "IMG") {
                aa = aa.parentNode
            }
            var p = $(aa).attr("href");
            if (p == undefined || p.indexOf("javascript") != -1) {
                p = ""
            } else {
                if (p.indexOf("http") == -1) {
                    p = window.location.host + p
                }
            }
            switch (g) {
                case "keycount":
                    var D = {
                        page: K,
                        location: O,
                        tag: "Q",
                        href: p
                    };
                    aZ.req("www.130000", D);
                    L = K + "|" + O;
                    break
            }
        }
    });
    (function() {
        var g = aE();
        var l = {
            je: g.jdje,
            sc: g.jdsc,
            sr: g.jdsr,
            ul: g.jdul,
            cs: g.jdcs,
            dt: g.jddt,
            hn: g.jdhn,
            fl: g.jdfl,
            os: g.jdos,
            br: g.jdbr,
            bv: g.jdbv,
            wb: g.jdwb,
            xb: g.jdxb,
            yb: g.jdyb,
            zb: g.jdzb,
            cb: g.jdcb,
            usc: g.jdusc,
            ucp: g.jducp,
            umd: g.jdumd,
            uct: g.jduct,
            lt: g.jdlt,
            ct: new Date().getTime(),
            tad: g.jdtad,
            nav: g.nav
        };
        aZ.visit();
        aZ.req("www.110000", l)
    })()
})();