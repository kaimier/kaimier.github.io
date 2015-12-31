/*! JS, uglified
 Date: 2015-09-07 */
function util() {
    function a() {
        function a(a) {
            this._el = a
        }

        function b(a, b) {
            var c = -1;
            if ("[object Array]" === !Object.prototype.toString.call(a) || "string" != typeof b) return c;
            for (var d = 0, e = a.length; e > d; d++)
                if (a[d] === b) return d;
            return c
        }
        var c = function(b) {
            var c = "object" == typeof b && b.nodeName;
            if (c) return new a(b)
        };
        return a.prototype = {
            _toArray: function() {
                var a = this._el.className;
                return a.match(/[\w-]+/g) || []
            },
            _ck: function(a) {
                return "string" == typeof a && /^[\w-]+$/g.test(a)
            },
            _contains: function(a) {
                return -1 !== b(this._toArray(), a)
            },
            add: function(a) {
                if (!this._ck(a) || this._contains(a)) return !1;
                var b = this._toArray();
                b.push(a), this._el.className = b.join(" ")
            },
            remove: function(a) {
                if ("undefined" == typeof a) return void(this._el.className = "");
                if (!this._ck(a) || !this._contains(a)) return !1;
                var b = this._el.className,
                    c = new RegExp("\\b" + a + "\\b\\s*", "g");
                this._el.className = b.replace(c, "")
            },
            toggle: function(a) {
                return this._ck(a) ? void(this._contains(a) ? this.remove(a) : this.add(a)) : !1
            }
        }, c
    }

    function b(a, b) {
        var c = -1;
        if ("[object Array]" === !Object.prototype.toString.call(a) || "string" != typeof b) return c;
        for (var d = 0, e = a.length; e > d; d++)
            if (a[d] === b) return d;
        return c
    }

    function c(a) {
        var b;
        if ("string" == typeof a) b = [], b.push(a);
        else {
            if ("[object Array]" !== Object.prototype.toString.call(a)) return !1;
            b = a
        }
        var c = document.createElement("style"),
            d = document.head || document.getElementsByTagName("head")[0];
        c.textContent = b.join("\r\n"), d.appendChild(c)
    }

    function d(a, b, c) {
        return a.split(b).join(c)
    }

    function e(a, b) {
        var c;
        if ("undefined" == typeof b && (b = document), "object" == typeof a) return [a];
        if ("string" == typeof a && "querySelectorAll" in document) {
            var d = b.querySelectorAll(a);
            c = Array.prototype.slice.call(d)
        } else c = [];
        return c
    }

    function f(a) {
        return function(b) {
            return {}.toString.call(b) == "[object " + a + "]"
        }
    }

    function g(a) {
        return void 0 === a || null === a || 1 / 0 === a || a === -1 / 0 || isNaN(a) ? !1 : (a = a.toString(), (a - 0).toString() === a && a.length > 0)
    }

    function h(a) {
        return "number" == typeof a
    }

    function i() {
        var a = function() {
            this.guid = -1, this.pname = "data_iwborninjgdq", this.event = []
        };
        return a.prototype = {
            bind: function(a, b, c, d) {
                if (void 0 !== b && null !== b && "" !== b && "string" == typeof b) {
                    var e = b.split(","),
                        f = [];
                    x.isArray(a) ? f = a : f.push(a);
                    for (var g = 0, h = f.length; h > g; g++)
                        for (var i = 0, j = e.length; j > i; i++) this.on(f[g], e[i], c, d)
                }
            },
            unbind: function(a, b) {
                if (void 0 !== b && null !== b && "" !== b && "string" == typeof b) {
                    var c = b.split(","),
                        d = [];
                    x.isArray(a) ? d = a : d.push(a);
                    for (var e = 0, f = d.length; f > e; e++)
                        for (var g = 0, h = c.length; h > g; g++) this.off(d[e], c[g])
                }
            },
            on: function(a, b, c, d) {
                var e;
                a.nodeName && "#document" !== a.nodeName ? null === a.getAttribute(this.pname) ? (a.setAttribute(this.pname, ++this.guid), e = this.guid) : e = a.getAttribute(this.pname) : "undefined" == typeof a[this.pname] ? (a[this.pname] = ++this.guid, e = this.guid) : e = a[this.pname], this.event[e] = this.event[e] || {}, this.event[e][b] = this.event[e][b] || [], this.event[e][b].push(c), this.addEvent(a, b, this.event[e][b][this.event[e][b].length - 1], d)
            },
            off: function(a, b, c, d) {
                var e;
                if (e = a.nodeName && "#document" !== a.nodeName ? a.getAttribute(this.pname) : a[this.pname], "undefined" != typeof e) {
                    var f = this.event[e] && this.event[e][b];
                    if ("undefined" != typeof f) {
                        var g = f.length;
                        if ("undefined" == typeof c) {
                            if (!f) return;
                            for (var h = void 0; h = f.shift();) this.removeEvent(a, b, h, d)
                        } else "number" == typeof c && c >= 0 && g > c ? this.removeEvent(a, b, f[c], d) : this.removeEvent(a, b, c, d)
                    }
                }
            },
            show: function(a, b) {
                var c;
                return (c = a.nodeName && "#document" !== a.nodeName ? a.getAttribute(this.pname) : a[this.pname]) ? this.event[c] && this.event[c][b] : void 0
            },
            addEvent: function(a, b, c, d) {
                a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener(b, c, d)
            },
            removeEvent: function(a, b, c, d) {
                a.detachEvent ? a.detachEvent("on" + b, c) : a.removeEventListener(b, c, d)
            }
        }, new a
    }

    function j(a, b) {
        if ("[object Array]" === !Object.prototype.toString.call(a)) return !1;
        for (var c = 0; c < a.length; c++) b(a[c], c, a)
    }

    function k(a, b) {
        if ("undefined" == typeof k._len && (k._len = a.length), "[object Array]" === Object.prototype.toString.call(a)) {
            if (0 === a.length) return b();
            var c = a.shift();
            "function" != typeof c && k(a, b);
            var d = function() {
                    k(a, b)
                },
                e = k._len - a.length;
            c(d, e)
        }
    }

    function l() {
        return document.documentElement || document.body
    }

    function m(a, b, c, d, e) {
        function f(a, b) {
            "undefined" == typeof f.times && (f.times = 0), f.times = f.times + 1;
            var c = function(b) {
                f(a, b)
            };
            a(c, f.times, b)
        }

        function g(c, f, g) {
            if (f >= b) return a(b, b), void(d && d(b));
            if (a(f, b)) return void(d && d(b));
            if ("undefined" != typeof e) {
                var h = g + e;
                g = h > 0 ? h : 0
            }
            window.setTimeout(function() {
                c(g)
            }, g)
        }
        "undefined" == typeof b && (b = 1), f(g, c)
    }

    function n() {
        var a = x.root;
        return {
            cw: a.clientWidth,
            wh: a.clientHeight,
            w: a.offsetWidth,
            h: a.offsetHeight,
            sw: a.scrollWidth,
            sh: a.scrollHeight
        }
    }

    function o() {
        var a = window.screen;
        return {
            resolution: {
                w: a.width,
                h: a.height
            },
            w: a.availWidth,
            h: a.availHeight
        }
    }

    function p(a) {
        var b = document,
            c = x.evt;
        c.on(b, "readystatechange", function() {
            p.tag || ("interactive" == b.readyState || "complete" == b.readyState) && (p.tag = !0, a())
        })
    }

    function q(a) {
        var b, c = document.defaultView;
        if (c && c.getComputedStyle) b = c.getComputedStyle(a, null);
        else {
            if (!a.currentStyle) throw "无法动态获取DOM的实际样式属性";
            b = a.currentStyle
        }
        return b
    }

    function r(a) {
        var b = parseInt(a, 10);
        return isNaN(b) ? 0 : b
    }

    function s(a) {
        var b = x.getStyle(a),
            c = x.parseNum(b.borderTopWidth),
            d = x.parseNum(b.borderLeftWidth);
        return {
            top: c,
            left: d
        }
    }

    function t(a, b) {
        try {
            for (var c = {
                    x: 0,
                    y: 0
                }, d = a; d; d = d.offsetParent) {
                var e, f, g = ("tagName=" + d.tagName + ",className=" + d.className, 0),
                    h = 0;
                if (d != a && d != b) {
                    var i = x.getBorderLeftTop(d);
                    e = i.left, f = i.top, g += e, h += f
                }
                if (d == b) {
                    var i = x.getBorderLeftTop(d);
                    e = i.left, f = i.top, c.x += e, c.y += f;
                    break
                }
                if (c.x += d.offsetLeft + (d != a ? g : 0), c.y += d.offsetTop + (d != a ? h : 0), "BODY" == d.tagName || "HTML" == d.tagName) break
            }
        } catch (j) {
            throw "无法获取元素的位置"
        }
        return c
    }

    function u(a, b, c) {
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var d in b) {
            var e = b[d];
            c && "object" == typeof e ? (a[d] = e.constructor === Array ? [] : {}, u(a[d], e)) : a[d] = e
        }
    }

    function v(a, b, c, d, e, f) {
        if (!(v.doing || !jstools.isArray(e) || a > e.length || 0 > a || b > e.length || 0 > b)) {
            "undefined" == typeof f && (f = {
                begin: function() {},
                end: function() {}
            }), v.doing = !0, f.begin(a, b, c, d, e);
            var g = e[b],
                h = e[a],
                i = {};
            switch (d) {
                case "move":
                    i.runTime = .6, i.ease = "cubic-bezier(1,0.3,0.3,1)", "next" === c ? (i.keyframeA = "pageAnimateMoveInCurrent", i.keyframeB = "pageAnimateMoveInTarget") : (i.keyframeA = "pageAnimateMoveOutCurrent", i.keyframeB = "pageAnimateMoveOutTarget");
                    break;
                case "vgomove":
                    i.runTime = .5, i.ease = "cubic-bezier(0.8,0,0.3,0)", "next" === c ? (i.keyframeA = "pageAnimateVGOMoveInCurrent", i.keyframeB = "pageAnimateVGOMoveInTarget") : (i.keyframeA = "pageAnimateVGOMoveOutCurrent", i.keyframeB = "pageAnimateVGOMoveOutTarget");
                    break;
                case "vgomove2":
                    i.runTime = .2, i.ease = "cubic-bezier(0.8,0,0.3,0)", "next" === c ? (i.keyframeA = "pageAnimateVGOMoveInCurrent", i.keyframeB = "pageAnimateVGOMoveInTarget") : (i.keyframeA = "pageAnimateVGOMoveOutCurrent", i.keyframeB = "pageAnimateVGOMoveOutTarget");
                    break;
                case "slide":
                    i.runTime = .8, i.ease = "cubic-bezier(1,0.3,0.3,1)", "next" === c ? (i.keyframeA = "pageAnimateSlideInCurrent", i.keyframeB = "pageAnimateSlideInTarget") : (i.keyframeA = "pageAnimateSlideOutCurrent", i.keyframeB = "pageAnimateSlideOutTarget");
                    break;
                case "fb":
                    i.runTime = .4, i.ease = "ease-out", "next" === c ? (i.keyframeA = "pageAnimateFbInCurrent", i.keyframeB = "pageAnimateFbInTarget") : (i.keyframeA = "pageAnimateFbOutCurrent", i.keyframeB = "pageAnimateFbOutTarget");
                    break;
                case "cover":
                    i.runTime = .3, i.ease = "ease-out", "next" === c ? (i.keyframeA = "pageAnimateCoverInCurrent", i.keyframeB = "pageAnimateCoverInTarget") : (i.keyframeA = "pageAnimateCoverOutCurrent", i.keyframeB = "pageAnimateCoverOutTarget");
                    break;
                case "fade":
                    i.runTime = .3, i.ease = "ease-out", i.keyframeA = "pageAnimateFadeCurrent", i.keyframeB = "pageAnimateFadeTarget";
                    break;
                case "vgofade":
                    i.runTime = .3, i.ease = "ease-out", i.keyframeA = "pageAnimateVGOFadeCurrent", i.keyframeB = "pageAnimateVGOFadeTarget";
                    break;
                case "scale":
                    i.runTime = .15, i.ease = "ease-out", "next" === c ? (i.keyframeA = "pageAnimateScaleInCurrent", i.keyframeB = "pageAnimateScaleInTarget") : (i.keyframeA = "pageAnimateScaleOutCurrent", i.keyframeB = "pageAnimateScaleOutTarget");
                    break;
                case "poker":
                    i.runTime = .25, i.ease = "linear", h.parentNode.style.webkitPerspective = "2000px", "next" === c ? (i.keyframeA = "pageAnimatePokerInCurrent", i.keyframeB = "pageAnimatePokerInTarget") : (i.keyframeA = "pageAnimatePokerOutCurrent", i.keyframeB = "pageAnimatePokerOutTarget")
            }
            var j = {
                curr: function() {
                    h.setAttribute("visible", "false"), h.style.webkitAnimation = "", h.style.zIndex = "", jstools.evt.off(h, "webkitAnimationEnd"), j.num++, j.num >= 2 && j.end()
                },
                target: function() {
                    g.setAttribute("visible", "true"), g.style.webkitAnimation = "", g.style.zIndex = "", jstools.evt.off(g, "webkitAnimationEnd"), j.num++, j.num >= 2 && j.end()
                },
                end: function() {
                    j.tag || (f.end(a, b, c, d, e), j.tag = !0, v.doing = !1)
                },
                num: 0,
                tag: !1
            };
            jstools.evt.off(h, "webkitAnimationEnd"), jstools.evt.off(g, "webkitAnimationEnd"), jstools.evt.on(h, "webkitAnimationEnd", function() {
                j.curr()
            }), jstools.evt.on(g, "webkitAnimationEnd", function() {
                j.target()
            }), h.style.zIndex = 1, g.style.zIndex = 2, h.style.webkitAnimation = i.keyframeA + " " + i.runTime + "s " + i.ease, g.style.webkitAnimation = i.keyframeB + " " + i.runTime + "s " + i.ease, setTimeout(function() {
                g.setAttribute("visible", "true")
            }, 0)
        }
    }

    function w() {
        function a(b, c) {
            return new a.fn.init(b, c)
        }

        function b(b, c) {
            var d = x[c];
            d !== a && (b[c] = d)
        }
        a.nocopy = !0, a.fn = a.prototype = x, a.indexStr = "data-sn-index";
        for (var c in x) b(a, c);
        var d = a.fn.init = function(b, c) {
            this.doms = a.fn.$(b, c), this.length = this.doms.length, this.each(function(b, c) {
                b.setAttribute(a.indexStr, c)
            })
        };
        return a.ext = function(b) {
            for (var c in b) c in a || (a[c] = b[c])
        }, a.cp = d.prototype = {
            css: function(b, c) {
                var d = this.doms,
                    e = {
                        add: !0,
                        remove: !0,
                        toggle: !0
                    };
                if (!(b in e)) return !1;
                for (var f = 0, g = d.length; g > f; f++)
                    if ("undefined" != typeof c)
                        for (var h = c.replace(/ +/g, " ").split(" "), i = 0; i < h.length; i++) a.fn.css(d[f])[b](h[i]);
                    else a.fn.css(d[f])[b](c);
                return this
            },
            bind: function(b, c, d) {
                var e = this.doms;
                return a.fn.evt.bind(e, b, c, d), this
            },
            unbind: function(b, c, d) {
                var e = this.doms;
                return a.fn.evt.unbind(e, b, c, d), this
            },
            each: function(b) {
                var c = this.doms;
                a.fn.each(c, b)
            },
            val: function() {
                var a = this.doms;
                if (a.length) {
                    var b = a[0];
                    return "INPUT" === b.nodeName || "SELECT" === b.nodeName || "OPTION" === b.nodeName ? b.value : ""
                }
                return ""
            },
            html: function(b) {
                var c = this.doms;
                return "undefined" == typeof b && c.length ? c[0].innerHTML : void a.fn.each(c, function(a) {
                    a.innerHTML = b
                })
            }
        }, a.cp.hidden = function() {
            return this.each(function(a) {
                a.style.display = "none"
            }), this
        }, a.cp.attr = function() {}, a.cp.eq = function() {}, a.ext({
            index: function(b) {
                return b.getAttribute(a.indexStr) || ""
            }
        }), a
    }
    var x = {};
    return x.css = a(), x.indexOf = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    } : b, x.pushcss = c, x.replaceAll = d, x.isObject = f("Object"), x.isString = f("String"), x.isArray = Array.isArray || f("Array"), x.isFunction = f("Function"), x.evt = i(), x.isNumeric = g, x.isNum = h, x.each = Array.prototype.forEach ? function(a, b) {
        a.forEach(b)
    } : j, x.queue = k, x.$ = e, x.root = l(), x.animate = m, x.body = n, x.screen = o, x.DOMContentLoaded = p, x.getStyle = q, x.parseNum = r, x.getBorderLeftTop = s, x.copy = u, x.transition = v, x.getPos = t, x.s = w(), x
}