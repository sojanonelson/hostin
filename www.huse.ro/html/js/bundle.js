if (function(t, e) {
        function n(t) {
            var e = t.length,
                n = ct.type(t);
            return !ct.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)))
        }

        function i(t) {
            var e = kt[t] = {};
            return ct.each(t.match(pt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function o(t, n, i, o) {
            if (ct.acceptData(t)) {
                var r, s, a = ct.expando,
                    l = t.nodeType,
                    u = l ? ct.cache : t,
                    c = l ? t[a] : t[a] && a;
                if (c && u[c] && (o || u[c].data) || i !== e || "string" != typeof n) return c || (c = l ? t[a] = et.pop() || ct.guid++ : a), u[c] || (u[c] = l ? {} : {
                    toJSON: ct.noop
                }), ("object" == typeof n || "function" == typeof n) && (o ? u[c] = ct.extend(u[c], n) : u[c].data = ct.extend(u[c].data, n)), s = u[c], o || (s.data || (s.data = {}), s = s.data), i !== e && (s[ct.camelCase(n)] = i), "string" == typeof n ? (r = s[n], null == r && (r = s[ct.camelCase(n)])) : r = s, r
            }
        }

        function r(t, e, n) {
            if (ct.acceptData(t)) {
                var i, o, r = t.nodeType,
                    s = r ? ct.cache : t,
                    l = r ? t[ct.expando] : ct.expando;
                if (s[l]) {
                    if (e && (i = n ? s[l] : s[l].data)) {
                        ct.isArray(e) ? e = e.concat(ct.map(e, ct.camelCase)) : e in i ? e = [e] : (e = ct.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !a(i) : !ct.isEmptyObject(i)) return
                    }(n || (delete s[l].data, a(s[l]))) && (r ? ct.cleanData([t], !0) : ct.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
                }
            }
        }

        function s(t, n, i) {
            if (i === e && 1 === t.nodeType) {
                var o = "data-" + n.replace(Nt, "-$1").toLowerCase();
                if (i = t.getAttribute(o), "string" == typeof i) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Et.test(i) ? ct.parseJSON(i) : i)
                    } catch (t) {}
                    ct.data(t, n, i)
                } else i = e
            }
            return i
        }

        function a(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ct.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function u() {
            return !1
        }

        function c() {
            try {
                return J.activeElement
            } catch (t) {}
        }

        function d(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function p(t, e, n) {
            if (ct.isFunction(e)) return ct.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ct.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (Ft.test(e)) return ct.filter(e, t, n);
                e = ct.filter(e, t)
            }
            return ct.grep(t, function(t) {
                return ct.inArray(t, e) >= 0 !== n
            })
        }

        function f(t) {
            var e = Vt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function h(t, e) {
            return ct.nodeName(t, "table") && ct.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function m(t) {
            return t.type = (null !== ct.find.attr(t, "type")) + "/" + t.type, t
        }

        function g(t) {
            var e = oe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function v(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) ct._data(n, "globalEval", !e || ct._data(e[i], "globalEval"))
        }

        function y(t, e) {
            if (1 === e.nodeType && ct.hasData(t)) {
                var n, i, o, r = ct._data(t),
                    s = ct._data(e, r),
                    a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, o = a[n].length; o > i; i++) ct.event.add(e, n, a[n][i])
                }
                s.data && (s.data = ct.extend({}, s.data))
            }
        }

        function b(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ct.support.noCloneEvent && e[ct.expando]) {
                    o = ct._data(e);
                    for (i in o.events) ct.removeEvent(e, i, o.handle);
                    e.removeAttribute(ct.expando)
                }
                "script" === n && e.text !== t.text ? (m(e).text = t.text, g(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ct.support.html5Clone && t.innerHTML && !ct.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function x(t, n) {
            var i, o, r = 0,
                s = typeof t.getElementsByTagName !== Q ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== Q ? t.querySelectorAll(n || "*") : e;
            if (!s)
                for (s = [], i = t.childNodes || t; null != (o = i[r]); r++) !n || ct.nodeName(o, n) ? s.push(o) : ct.merge(s, x(o, n));
            return n === e || n && ct.nodeName(t, n) ? ct.merge([t], s) : s
        }

        function w(t) {
            ee.test(t.type) && (t.defaultChecked = t.checked)
        }

        function T(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = Se.length; o--;)
                if (e = Se[o] + n, e in t) return e;
            return i
        }

        function C(t, e) {
            return t = e || t, "none" === ct.css(t, "display") || !ct.contains(t.ownerDocument, t)
        }

        function S(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = ct._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && C(i) && (r[s] = ct._data(i, "olddisplay", $(i.nodeName)))) : r[s] || (o = C(i), (n && "none" !== n || !o) && ct._data(i, "olddisplay", o ? n : ct.css(i, "display"))));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function k(t, e, n) {
            var i = ve.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function E(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += ct.css(t, n + Ce[r], !0, o)), i ? ("content" === n && (s -= ct.css(t, "padding" + Ce[r], !0, o)), "margin" !== n && (s -= ct.css(t, "border" + Ce[r] + "Width", !0, o))) : (s += ct.css(t, "padding" + Ce[r], !0, o), "padding" !== n && (s += ct.css(t, "border" + Ce[r] + "Width", !0, o)));
            return s
        }

        function N(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = ce(t),
                s = ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = de(t, e, r), (0 > o || null == o) && (o = t.style[e]), ye.test(o)) return o;
                i = s && (ct.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + E(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function $(t) {
            var e = J,
                n = xe[t];
            return n || (n = A(t, e), "none" !== n && n || (ue = (ue || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ue[0].contentWindow || ue[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = A(t, e), ue.detach()), xe[t] = n), n
        }

        function A(t, e) {
            var n = ct(e.createElement(t)).appendTo(e.body),
                i = ct.css(n[0], "display");
            return n.remove(), i
        }

        function D(t, e, n, i) {
            var o;
            if (ct.isArray(e)) ct.each(e, function(e, o) {
                n || Ee.test(t) ? i(t, o) : D(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== ct.type(e)) i(t, e);
            else
                for (o in e) D(t + "[" + o + "]", e[o], n, i)
        }

        function O(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(pt) || [];
                if (ct.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function j(t, n, i, o) {
            function r(l) {
                var u;
                return s[l] = !0, ct.each(t[l] || [], function(t, l) {
                    var c = l(n, i, o);
                    return "string" != typeof c || a || s[c] ? a ? !(u = c) : e : (n.dataTypes.unshift(c), r(c), !1)
                }), u
            }
            var s = {},
                a = t === We;
            return r(n.dataTypes[0]) || !s["*"] && r("*")
        }

        function _(t, n) {
            var i, o, r = ct.ajaxSettings.flatOptions || {};
            for (o in n) n[o] !== e && ((r[o] ? t : i || (i = {}))[o] = n[o]);
            return i && ct.extend(!0, t, i), t
        }

        function L(t, n, i) {
            for (var o, r, s, a, l = t.contents, u = t.dataTypes;
                "*" === u[0];) u.shift(), r === e && (r = t.mimeType || n.getResponseHeader("Content-Type"));
            if (r)
                for (a in l)
                    if (l[a] && l[a].test(r)) {
                        u.unshift(a);
                        break
                    }
            if (u[0] in i) s = u[0];
            else {
                for (a in i) {
                    if (!u[0] || t.converters[a + " " + u[0]]) {
                        s = a;
                        break
                    }
                    o || (o = a)
                }
                s = s || o
            }
            return s ? (s !== u[0] && u.unshift(s), i[s]) : e
        }

        function I(t, e, n, i) {
            var o, r, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (r = c.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (s = u[l + " " + r] || u["* " + r], !s)
                    for (o in u)
                        if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t.throws) e = s(e);
                    else try {
                        e = s(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: s ? t : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function M() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        }

        function q() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function H() {
            return setTimeout(function() {
                Ke = e
            }), Ke = ct.now()
        }

        function P(t, e, n) {
            for (var i, o = (on[e] || []).concat(on["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function B(t, e, n) {
            var i, o, r = 0,
                s = nn.length,
                a = ct.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Ke || H(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                    return a.notifyWith(t, [u, r, n]), 1 > r && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: ct.extend({}, e),
                    opts: ct.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Ke || H(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ct.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (R(c, u.opts.specialEasing); s > r; r++)
                if (i = nn[r].call(u, t, c, u.opts)) return i;
            return ct.map(c, P, u), ct.isFunction(u.opts.start) && u.opts.start.call(t, u), ct.fx.timer(ct.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function R(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (i = ct.camelCase(n), o = e[i], r = t[n], ct.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = ct.cssHooks[i], s && "expand" in s) {
                    r = s.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function F(t, e, n) {
            var i, o, r, s, a, l, u = this,
                c = {},
                d = t.style,
                p = t.nodeType && C(t),
                f = ct._data(t, "fxshow");
            n.queue || (a = ct._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, ct.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ct.css(t, "display") && "none" === ct.css(t, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== $(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], Ze.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) continue;
                    c[i] = f && f[i] || ct.style(t, i)
                }
            if (!ct.isEmptyObject(c)) {
                f ? "hidden" in f && (p = f.hidden) : f = ct._data(t, "fxshow", {}), r && (f.hidden = !p), p ? ct(t).show() : u.done(function() {
                    ct(t).hide()
                }), u.done(function() {
                    var e;
                    ct._removeData(t, "fxshow");
                    for (e in c) ct.style(t, e, c[e])
                });
                for (i in c) s = P(p ? f[i] : 0, i, u), i in f || (f[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function W(t, e, n, i, o) {
            return new W.prototype.init(t, e, n, i, o)
        }

        function z(t, e) {
            var n, i = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = Ce[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function U(t) {
            return ct.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var V, X, Q = typeof e,
            Y = t.location,
            J = t.document,
            K = J.documentElement,
            G = t.jQuery,
            Z = t.$,
            tt = {},
            et = [],
            nt = "1.10.2",
            it = et.concat,
            ot = et.push,
            rt = et.slice,
            st = et.indexOf,
            at = tt.toString,
            lt = tt.hasOwnProperty,
            ut = nt.trim,
            ct = function(t, e) {
                return new ct.fn.init(t, e, X)
            },
            dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            pt = /\S+/g,
            ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            gt = /^[\],:{}\s]*$/,
            vt = /(?:^|:|,)(?:\s*\[)+/g,
            yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            xt = /^-ms-/,
            wt = /-([\da-z])/gi,
            Tt = function(t, e) {
                return e.toUpperCase()
            },
            Ct = function(t) {
                (J.addEventListener || "load" === t.type || "complete" === J.readyState) && (St(), ct.ready())
            },
            St = function() {
                J.addEventListener ? (J.removeEventListener("DOMContentLoaded", Ct, !1), t.removeEventListener("load", Ct, !1)) : (J.detachEvent("onreadystatechange", Ct), t.detachEvent("onload", Ct))
            };
        ct.fn = ct.prototype = {
                jquery: nt,
                constructor: ct,
                init: function(t, n, i) {
                    var o, r;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ht.exec(t), !o || !o[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                        if (o[1]) {
                            if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), mt.test(o[1]) && ct.isPlainObject(n))
                                for (o in n) ct.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                            return this
                        }
                        if (r = J.getElementById(o[2]), r && r.parentNode) {
                            if (r.id !== o[2]) return i.find(t);
                            this.length = 1, this[0] = r
                        }
                        return this.context = J, this.selector = t, this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ct.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ct.makeArray(t, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return rt.call(this)
                },
                get: function(t) {
                    return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
                },
                pushStack: function(t) {
                    var e = ct.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t, e) {
                    return ct.each(this, t, e)
                },
                ready: function(t) {
                    return ct.ready.promise().done(t), this
                },
                slice: function() {
                    return this.pushStack(rt.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                },
                map: function(t) {
                    return this.pushStack(ct.map(this, function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: ot,
                sort: [].sort,
                splice: [].splice
            }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function() {
                var t, n, i, o, r, s, a = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ct.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                    if (null != (r = arguments[l]))
                        for (o in r) t = a[o], i = r[o], a !== i && (c && i && (ct.isPlainObject(i) || (n = ct.isArray(i))) ? (n ? (n = !1, s = t && ct.isArray(t) ? t : []) : s = t && ct.isPlainObject(t) ? t : {}, a[o] = ct.extend(c, s, i)) : i !== e && (a[o] = i));
                return a
            }, ct.extend({
                expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
                noConflict: function(e) {
                    return t.$ === ct && (t.$ = Z), e && t.jQuery === ct && (t.jQuery = G), ct
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? ct.readyWait++ : ct.ready(!0)
                },
                ready: function(t) {
                    if (t === !0 ? !--ct.readyWait : !ct.isReady) {
                        if (!J.body) return setTimeout(ct.ready);
                        ct.isReady = !0, t !== !0 && --ct.readyWait > 0 || (V.resolveWith(J, [ct]), ct.fn.trigger && ct(J).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(t) {
                    return "function" === ct.type(t)
                },
                isArray: Array.isArray || function(t) {
                    return "array" === ct.type(t)
                },
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                type: function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[at.call(t)] || "object" : typeof t
                },
                isPlainObject: function(t) {
                    var n;
                    if (!t || "object" !== ct.type(t) || t.nodeType || ct.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !lt.call(t, "constructor") && !lt.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (t) {
                        return !1
                    }
                    if (ct.support.ownLast)
                        for (n in t) return lt.call(t, n);
                    for (n in t);
                    return n === e || lt.call(t, n)
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                error: function(t) {
                    throw Error(t)
                },
                parseHTML: function(t, e, n) {
                    if (!t || "string" != typeof t) return null;
                    "boolean" == typeof e && (n = e, e = !1), e = e || J;
                    var i = mt.exec(t),
                        o = !n && [];
                    return i ? [e.createElement(i[1])] : (i = ct.buildFragment([t], e, o), o && ct(o).remove(), ct.merge([], i.childNodes))
                },
                parseJSON: function(n) {
                    return t.JSON && t.JSON.parse ? t.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && gt.test(n.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), e)
                },
                parseXML: function(n) {
                    var i, o;
                    if (!n || "string" != typeof n) return null;
                    try {
                        t.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (t) {
                        i = e
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(e) {
                    e && ct.trim(e) && (t.execScript || function(e) {
                        t.eval.call(t, e)
                    })(e)
                },
                camelCase: function(t) {
                    return t.replace(xt, "ms-").replace(wt, Tt)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e, i) {
                    var o, r = 0,
                        s = t.length,
                        a = n(t);
                    if (i) {
                        if (a)
                            for (; s > r && (o = e.apply(t[r], i), o !== !1); r++);
                        else
                            for (r in t)
                                if (o = e.apply(t[r], i), o === !1) break
                    } else if (a)
                        for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
                    else
                        for (r in t)
                            if (o = e.call(t[r], r, t[r]), o === !1) break; return t
                },
                trim: ut && !ut.call("\ufeff ") ? function(t) {
                    return null == t ? "" : ut.call(t)
                } : function(t) {
                    return null == t ? "" : (t + "").replace(ft, "")
                },
                makeArray: function(t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? ct.merge(i, "string" == typeof t ? [t] : t) : ot.call(i, t)), i
                },
                inArray: function(t, e, n) {
                    var i;
                    if (e) {
                        if (st) return st.call(e, t, n);
                        for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in e && e[n] === t) return n
                    }
                    return -1
                },
                merge: function(t, n) {
                    var i = n.length,
                        o = t.length,
                        r = 0;
                    if ("number" == typeof i)
                        for (; i > r; r++) t[o++] = n[r];
                    else
                        for (; n[r] !== e;) t[o++] = n[r++];
                    return t.length = o, t
                },
                grep: function(t, e, n) {
                    var i, o = [],
                        r = 0,
                        s = t.length;
                    for (n = !!n; s > r; r++) i = !!e(t[r], r), n !== i && o.push(t[r]);
                    return o
                },
                map: function(t, e, i) {
                    var o, r = 0,
                        s = t.length,
                        a = n(t),
                        l = [];
                    if (a)
                        for (; s > r; r++) o = e(t[r], r, i), null != o && (l[l.length] = o);
                    else
                        for (r in t) o = e(t[r], r, i), null != o && (l[l.length] = o);
                    return it.apply([], l)
                },
                guid: 1,
                proxy: function(t, n) {
                    var i, o, r;
                    return "string" == typeof n && (r = t[n], n = t, t = r), ct.isFunction(t) ? (i = rt.call(arguments, 2), o = function() {
                        return t.apply(n || this, i.concat(rt.call(arguments)))
                    }, o.guid = t.guid = t.guid || ct.guid++, o) : e
                },
                access: function(t, n, i, o, r, s, a) {
                    var l = 0,
                        u = t.length,
                        c = null == i;
                    if ("object" === ct.type(i)) {
                        r = !0;
                        for (l in i) ct.access(t, n, l, i[l], !0, s, a)
                    } else if (o !== e && (r = !0, ct.isFunction(o) || (a = !0), c && (a ? (n.call(t, o), n = null) : (c = n, n = function(t, e, n) {
                            return c.call(ct(t), n)
                        })), n))
                        for (; u > l; l++) n(t[l], i, a ? o : o.call(t[l], l, n(t[l], i)));
                    return r ? t : c ? n.call(t) : u ? n(t[0], i) : s
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(t, e, n, i) {
                    var o, r, s = {};
                    for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                    o = n.apply(t, i || []);
                    for (r in e) t.style[r] = s[r];
                    return o
                }
            }), ct.ready.promise = function(e) {
                if (!V)
                    if (V = ct.Deferred(), "complete" === J.readyState) setTimeout(ct.ready);
                    else if (J.addEventListener) J.addEventListener("DOMContentLoaded", Ct, !1), t.addEventListener("load", Ct, !1);
                else {
                    J.attachEvent("onreadystatechange", Ct), t.attachEvent("onload", Ct);
                    var n = !1;
                    try {
                        n = null == t.frameElement && J.documentElement
                    } catch (t) {}
                    n && n.doScroll && function t() {
                        if (!ct.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(t, 50)
                            }
                            St(), ct.ready()
                        }
                    }()
                }
                return V.promise(e)
            }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                tt["[object " + e + "]"] = e.toLowerCase()
            }), X = ct(J),
            function(t, e) {
                function n(t, e, n, i) {
                    var o, r, s, a, l, u, c, d, h, m;
                    if ((e ? e.ownerDocument || e : B) !== j && O(e), e = e || j, n = n || [], !t || "string" != typeof t) return n;
                    if (1 !== (a = e.nodeType) && 9 !== a) return [];
                    if (L && !i) {
                        if (o = bt.exec(t))
                            if (s = o[1]) {
                                if (9 === a) {
                                    if (r = e.getElementById(s), !r || !r.parentNode) return n;
                                    if (r.id === s) return n.push(r), n
                                } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && H(e, r) && r.id === s) return n.push(r), n
                            } else {
                                if (o[2]) return tt.apply(n, e.getElementsByTagName(t)), n;
                                if ((s = o[3]) && C.getElementsByClassName && e.getElementsByClassName) return tt.apply(n, e.getElementsByClassName(s)), n
                            }
                        if (C.qsa && (!I || !I.test(t))) {
                            if (d = c = P, h = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                                for (u = p(t), (c = e.getAttribute("id")) ? d = c.replace(Tt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + f(u[l]);
                                h = ft.test(t) && e.parentNode || e, m = u.join(",")
                            }
                            if (m) try {
                                return tt.apply(n, h.querySelectorAll(m)), n
                            } catch (t) {} finally {
                                c || e.removeAttribute("id")
                            }
                        }
                    }
                    return w(t.replace(ut, "$1"), e, n, i)
                }

                function i() {
                    function t(n, i) {
                        return e.push(n += " ") > k.cacheLength && delete t[e.shift()], t[n] = i
                    }
                    var e = [];
                    return t
                }

                function o(t) {
                    return t[P] = !0, t
                }

                function r(t) {
                    var e = j.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function s(t, e) {
                    for (var n = t.split("|"), i = t.length; i--;) k.attrHandle[n[i]] = e
                }

                function a(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function u(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function c(t) {
                    return o(function(e) {
                        return e = +e, o(function(n, i) {
                            for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function d() {}

                function p(t, e) {
                    var i, o, r, s, a, l, u, c = z[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (a = t, l = [], u = k.preFilter; a;) {
                        (!i || (o = dt.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = pt.exec(a)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(ut, " ")
                        }), a = a.slice(i.length));
                        for (s in k.filter) !(o = vt[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: s,
                            matches: o
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return e ? a.length : a ? n.error(t) : z(t, l).slice(0)
                }

                function f(t) {
                    for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                    return i
                }

                function h(t, e, n) {
                    var i = e.dir,
                        o = n && "parentNode" === i,
                        r = F++;
                    return e.first ? function(e, n, r) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) return t(e, n, r)
                    } : function(e, n, s) {
                        var a, l, u, c = R + " " + r;
                        if (s) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || o)
                                    if (u = e[P] || (e[P] = {}), (l = u[i]) && l[0] === c) {
                                        if ((a = l[1]) === !0 || a === S) return a === !0
                                    } else if (l = u[i] = [c], l[1] = t(e, n, s) || S, l[1] === !0) return !0
                    }
                }

                function m(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var o = t.length; o--;)
                            if (!t[o](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function g(t, e, n, i, o) {
                    for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), u && e.push(a));
                    return s
                }

                function v(t, e, n, i, r, s) {
                    return i && !i[P] && (i = v(i)), r && !r[P] && (r = v(r, s)), o(function(o, s, a, l) {
                        var u, c, d, p = [],
                            f = [],
                            h = s.length,
                            m = o || x(e || "*", a.nodeType ? [a] : a, []),
                            v = !t || !o && e ? m : g(m, p, t, a, l),
                            y = n ? r || (o ? t : h || i) ? [] : s : v;
                        if (n && n(v, y, a, l), i)
                            for (u = g(y, f), i(u, [], a, l), c = u.length; c--;)(d = u[c]) && (y[f[c]] = !(v[f[c]] = d));
                        if (o) {
                            if (r || t) {
                                if (r) {
                                    for (u = [], c = y.length; c--;)(d = y[c]) && u.push(v[c] = d);
                                    r(null, y = [], u, l)
                                }
                                for (c = y.length; c--;)(d = y[c]) && (u = r ? nt.call(o, d) : p[c]) > -1 && (o[u] = !(s[u] = d))
                            }
                        } else y = g(y === s ? y.splice(h, y.length) : y), r ? r(null, s, y, l) : tt.apply(s, y)
                    })
                }

                function y(t) {
                    for (var e, n, i, o = t.length, r = k.relative[t[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = h(function(t) {
                            return t === e
                        }, s, !0), u = h(function(t) {
                            return nt.call(e, t) > -1
                        }, s, !0), c = [function(t, n, i) {
                            return !r && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                        }]; o > a; a++)
                        if (n = k.relative[t[a].type]) c = [h(m(c), n)];
                        else {
                            if (n = k.filter[t[a].type].apply(null, t[a].matches), n[P]) {
                                for (i = ++a; o > i && !k.relative[t[i].type]; i++);
                                return v(a > 1 && m(c), a > 1 && f(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(ut, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && f(t))
                            }
                            c.push(n)
                        }
                    return m(c)
                }

                function b(t, e) {
                    var i = 0,
                        r = e.length > 0,
                        s = t.length > 0,
                        a = function(o, a, l, u, c) {
                            var d, p, f, h = [],
                                m = 0,
                                v = "0",
                                y = o && [],
                                b = null != c,
                                x = A,
                                w = o || s && k.find.TAG("*", c && a.parentNode || a),
                                T = R += null == x ? 1 : Math.random() || .1;
                            for (b && (A = a !== j && a, S = i); null != (d = w[v]); v++) {
                                if (s && d) {
                                    for (p = 0; f = t[p++];)
                                        if (f(d, a, l)) {
                                            u.push(d);
                                            break
                                        }
                                    b && (R = T, S = ++i)
                                }
                                r && ((d = !f && d) && m--, o && y.push(d))
                            }
                            if (m += v, r && v !== m) {
                                for (p = 0; f = e[p++];) f(y, h, a, l);
                                if (o) {
                                    if (m > 0)
                                        for (; v--;) y[v] || h[v] || (h[v] = G.call(u));
                                    h = g(h)
                                }
                                tt.apply(u, h), b && !o && h.length > 0 && m + e.length > 1 && n.uniqueSort(u)
                            }
                            return b && (R = T, A = x), y
                        };
                    return r ? o(a) : a
                }

                function x(t, e, i) {
                    for (var o = 0, r = e.length; r > o; o++) n(t, e[o], i);
                    return i
                }

                function w(t, e, n, i) {
                    var o, r, s, a, l, u = p(t);
                    if (!i && 1 === u.length) {
                        if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && C.getById && 9 === e.nodeType && L && k.relative[r[1].type]) {
                            if (e = (k.find.ID(s.matches[0].replace(Ct, St), e) || [])[0], !e) return n;
                            t = t.slice(r.shift().value.length)
                        }
                        for (o = vt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                            if ((l = k.find[a]) && (i = l(s.matches[0].replace(Ct, St), ft.test(r[0].type) && e.parentNode || e))) {
                                if (r.splice(o, 1), t = i.length && f(r), !t) return tt.apply(n, i), n;
                                break
                            }
                    }
                    return $(t, u)(i, e, !L, n, ft.test(t)), n
                }
                var T, C, S, k, E, N, $, A, D, O, j, _, L, I, M, q, H, P = "sizzle" + -new Date,
                    B = t.document,
                    R = 0,
                    F = 0,
                    W = i(),
                    z = i(),
                    U = i(),
                    V = !1,
                    X = function(t, e) {
                        return t === e ? (V = !0, 0) : 0
                    },
                    Q = typeof e,
                    Y = 1 << 31,
                    J = {}.hasOwnProperty,
                    K = [],
                    G = K.pop,
                    Z = K.push,
                    tt = K.push,
                    et = K.slice,
                    nt = K.indexOf || function(t) {
                        for (var e = 0, n = this.length; n > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                    it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ot = "[\\x20\\t\\r\\n\\f]",
                    rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    st = rt.replace("w", "w#"),
                    at = "\\[" + ot + "*(" + rt + ")" + ot + "*(?:([*^$|!~]?=)" + ot + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + st + ")|)|)" + ot + "*\\]",
                    lt = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
                    ut = RegExp("^" + ot + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ot + "+$", "g"),
                    dt = RegExp("^" + ot + "*," + ot + "*"),
                    pt = RegExp("^" + ot + "*([>+~]|" + ot + ")" + ot + "*"),
                    ft = RegExp(ot + "*[+~]"),
                    ht = RegExp("=" + ot + "*([^\\]'\"]*)" + ot + "*\\]", "g"),
                    mt = RegExp(lt),
                    gt = RegExp("^" + st + "$"),
                    vt = {
                        ID: RegExp("^#(" + rt + ")"),
                        CLASS: RegExp("^\\.(" + rt + ")"),
                        TAG: RegExp("^(" + rt.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + at),
                        PSEUDO: RegExp("^" + lt),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ot + "*(even|odd|(([+-]|)(\\d*)n|)" + ot + "*(?:([+-]|)" + ot + "*(\\d+)|))" + ot + "*\\)|)", "i"),
                        bool: RegExp("^(?:" + it + ")$", "i"),
                        needsContext: RegExp("^" + ot + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ot + "*((?:-\\d)?\\d*)" + ot + "*\\)|)(?=[^-]|$)", "i")
                    },
                    yt = /^[^{]+\{\s*\[native \w/,
                    bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    xt = /^(?:input|select|textarea|button)$/i,
                    wt = /^h\d$/i,
                    Tt = /'|\\/g,
                    Ct = RegExp("\\\\([\\da-f]{1,6}" + ot + "?|(" + ot + ")|.)", "ig"),
                    St = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    };
                try {
                    tt.apply(K = et.call(B.childNodes), B.childNodes), K[B.childNodes.length].nodeType
                } catch (t) {
                    tt = {
                        apply: K.length ? function(t, e) {
                            Z.apply(t, et.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                N = n.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, C = n.support = {}, O = n.setDocument = function(t) {
                    var n = t ? t.ownerDocument || t : B,
                        i = n.defaultView;
                    return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, _ = n.documentElement, L = !N(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                        O()
                    }), C.attributes = r(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), C.getElementsByTagName = r(function(t) {
                        return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                    }), C.getElementsByClassName = r(function(t) {
                        return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                    }), C.getById = r(function(t) {
                        return _.appendChild(t).id = P, !n.getElementsByName || !n.getElementsByName(P).length
                    }), C.getById ? (k.find.ID = function(t, e) {
                        if (typeof e.getElementById !== Q && L) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, k.filter.ID = function(t) {
                        var e = t.replace(Ct, St);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete k.find.ID, k.filter.ID = function(t) {
                        var e = t.replace(Ct, St);
                        return function(t) {
                            var n = typeof t.getAttributeNode !== Q && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), k.find.TAG = C.getElementsByTagName ? function(t, n) {
                        return typeof n.getElementsByTagName !== Q ? n.getElementsByTagName(t) : e
                    } : function(t, e) {
                        var n, i = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, k.find.CLASS = C.getElementsByClassName && function(t, n) {
                        return typeof n.getElementsByClassName !== Q && L ? n.getElementsByClassName(t) : e
                    }, M = [], I = [], (C.qsa = yt.test(n.querySelectorAll)) && (r(function(t) {
                        t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || I.push("\\[" + ot + "*(?:value|" + it + ")"), t.querySelectorAll(":checked").length || I.push(":checked")
                    }), r(function(t) {
                        var e = n.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && I.push("[*^$]=" + ot + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
                    })), (C.matchesSelector = yt.test(q = _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && r(function(t) {
                        C.disconnectedMatch = q.call(t, "div"), q.call(t, "[s!='']:x"), M.push("!=", lt)
                    }), I = I.length && RegExp(I.join("|")), M = M.length && RegExp(M.join("|")), H = yt.test(_.contains) || _.compareDocumentPosition ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, X = _.compareDocumentPosition ? function(t, e) {
                        if (t === e) return V = !0, 0;
                        var i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                        return i ? 1 & i || !C.sortDetached && e.compareDocumentPosition(t) === i ? t === n || H(B, t) ? -1 : e === n || H(B, e) ? 1 : D ? nt.call(D, t) - nt.call(D, e) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                    } : function(t, e) {
                        var i, o = 0,
                            r = t.parentNode,
                            s = e.parentNode,
                            l = [t],
                            u = [e];
                        if (t === e) return V = !0, 0;
                        if (!r || !s) return t === n ? -1 : e === n ? 1 : r ? -1 : s ? 1 : D ? nt.call(D, t) - nt.call(D, e) : 0;
                        if (r === s) return a(t, e);
                        for (i = t; i = i.parentNode;) l.unshift(i);
                        for (i = e; i = i.parentNode;) u.unshift(i);
                        for (; l[o] === u[o];) o++;
                        return o ? a(l[o], u[o]) : l[o] === B ? -1 : u[o] === B ? 1 : 0
                    }, n) : j
                }, n.matches = function(t, e) {
                    return n(t, null, null, e)
                }, n.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== j && O(t), e = e.replace(ht, "='$1']"), !(!C.matchesSelector || !L || M && M.test(e) || I && I.test(e))) try {
                        var i = q.call(t, e);
                        if (i || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return n(e, j, null, [t]).length > 0
                }, n.contains = function(t, e) {
                    return (t.ownerDocument || t) !== j && O(t), H(t, e)
                }, n.attr = function(t, n) {
                    (t.ownerDocument || t) !== j && O(t);
                    var i = k.attrHandle[n.toLowerCase()],
                        o = i && J.call(k.attrHandle, n.toLowerCase()) ? i(t, n, !L) : e;
                    return o === e ? C.attributes || !L ? t.getAttribute(n) : (o = t.getAttributeNode(n)) && o.specified ? o.value : null : o
                }, n.error = function(t) {
                    throw Error("Syntax error, unrecognized expression: " + t)
                }, n.uniqueSort = function(t) {
                    var e, n = [],
                        i = 0,
                        o = 0;
                    if (V = !C.detectDuplicates, D = !C.sortStable && t.slice(0), t.sort(X), V) {
                        for (; e = t[o++];) e === t[o] && (i = n.push(o));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return t
                }, E = n.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += E(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[i]; i++) n += E(e);
                    return n
                }, k = n.selectors = {
                    cacheLength: 50,
                    createPseudo: o,
                    match: vt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(Ct, St), t[3] = (t[4] || t[5] || "").replace(Ct, St), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var n, i = !t[5] && t[2];
                            return vt.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && mt.test(i) && (n = p(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(Ct, St).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = W[t + " "];
                            return e || (e = RegExp("(^|" + ot + ")" + t + "(" + ot + "|$)")) && W(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Q && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, i) {
                            return function(o) {
                                var r = n.attr(o, t);
                                return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, n, i, o) {
                            var r = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === o ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var u, c, d, p, f, h, m = r !== s ? "nextSibling" : "previousSibling",
                                    g = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (g) {
                                    if (r) {
                                        for (; m;) {
                                            for (d = e; d = d[m];)
                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            h = m = "only" === t && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                        for (c = g[P] || (g[P] = {}), u = c[t] || [], f = u[0] === R && u[1], p = u[0] === R && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
                                            if (1 === d.nodeType && ++p && d === e) {
                                                c[t] = [R, f, p];
                                                break
                                            }
                                    } else if (y && (u = (e[P] || (e[P] = {}))[t]) && u[0] === R) p = u[1];
                                    else
                                        for (;
                                            (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[P] || (d[P] = {}))[t] = [R, p]), d !== e)););
                                    return p -= o, p === i || 0 === p % i && p / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                            return r[P] ? r(e) : r.length > 1 ? (i = [t, t, "", e], k.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, n) {
                                for (var i, o = r(t, e), s = o.length; s--;) i = nt.call(t, o[s]), t[i] = !(n[i] = o[s])
                            }) : function(t) {
                                return r(t, 0, i)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: o(function(t) {
                            var e = [],
                                n = [],
                                i = $(t.replace(ut, "$1"));
                            return i[P] ? o(function(t, e, n, o) {
                                for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                            }) : function(t, o, r) {
                                return e[0] = t, i(e, null, r, n), !n.pop()
                            }
                        }),
                        has: o(function(t) {
                            return function(e) {
                                return n(t, e).length > 0
                            }
                        }),
                        contains: o(function(t) {
                            return function(e) {
                                return (e.textContent || e.innerText || E(e)).indexOf(t) > -1
                            }
                        }),
                        lang: o(function(t) {
                            return gt.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(Ct, St).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === _
                        },
                        focus: function(t) {
                            return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !k.pseudos.empty(t)
                        },
                        header: function(t) {
                            return wt.test(t.nodeName)
                        },
                        input: function(t) {
                            return xt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: c(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; e > ++i;) t.push(i);
                            return t
                        })
                    }
                }, k.pseudos.nth = k.pseudos.eq;
                for (T in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) k.pseudos[T] = l(T);
                for (T in {
                        submit: !0,
                        reset: !0
                    }) k.pseudos[T] = u(T);
                d.prototype = k.filters = k.pseudos, k.setFilters = new d, $ = n.compile = function(t, e) {
                    var n, i = [],
                        o = [],
                        r = U[t + " "];
                    if (!r) {
                        for (e || (e = p(t)), n = e.length; n--;) r = y(e[n]), r[P] ? i.push(r) : o.push(r);
                        r = U(t, b(o, i))
                    }
                    return r
                }, C.sortStable = P.split("").sort(X).join("") === P, C.detectDuplicates = V, O(), C.sortDetached = r(function(t) {
                    return 1 & t.compareDocumentPosition(j.createElement("div"))
                }), r(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function(t, n, i) {
                    return i ? e : t.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
                }), C.attributes && r(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || s("value", function(t, n, i) {
                    return i || "input" !== t.nodeName.toLowerCase() ? e : t.defaultValue
                }), r(function(t) {
                    return null == t.getAttribute("disabled")
                }) || s(it, function(t, n, i) {
                    var o;
                    return i ? e : (o = t.getAttributeNode(n)) && o.specified ? o.value : t[n] === !0 ? n.toLowerCase() : null
                }), ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
            }(t);
        var kt = {};
        ct.Callbacks = function(t) {
            t = "string" == typeof t ? kt[t] || i(t) : ct.extend({}, t);
            var n, o, r, s, a, l, u = [],
                c = !t.once && [],
                d = function(e) {
                    for (o = t.memory && e, r = !0, a = l || 0, l = 0, s = u.length, n = !0; u && s > a; a++)
                        if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                            o = !1;
                            break
                        }
                    n = !1, u && (c ? c.length && d(c.shift()) : o ? u = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (u) {
                            var e = u.length;
                            ! function e(n) {
                                ct.each(n, function(n, i) {
                                    var o = ct.type(i);
                                    "function" === o ? t.unique && p.has(i) || u.push(i) : i && i.length && "string" !== o && e(i)
                                })
                            }(arguments), n ? s = u.length : o && (l = e, d(o))
                        }
                        return this
                    },
                    remove: function() {
                        return u && ct.each(arguments, function(t, e) {
                            for (var i;
                                (i = ct.inArray(e, u, i)) > -1;) u.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? ct.inArray(t, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [], s = 0, this
                    },
                    disable: function() {
                        return u = c = o = e, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = e, o || p.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, e) {
                        return !u || r && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : d(e)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return p
        }, ct.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ct.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ct.Deferred(function(n) {
                                ct.each(e, function(e, r) {
                                    var s = r[0],
                                        a = ct.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && ct.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ct.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, ct.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    r = rt.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && ct.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : ct.Deferred(),
                    u = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? rt.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = Array(s), n = Array(s), i = Array(s); s > o; o++) r[o] && ct.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        }), ct.support = function(e) {
            var n, i, o, r, s, a, l, u, c, d = J.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length) return e;
            r = J.createElement("select"), a = r.appendChild(J.createElement("option")), o = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== d.className, e.leadingWhitespace = 3 === d.firstChild.nodeType, e.tbody = !d.getElementsByTagName("tbody").length, e.htmlSerialize = !!d.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !!i.style.cssFloat, e.checkOn = !!o.value, e.optSelected = a.selected, e.enctype = !!J.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, o.checked = !0, e.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !a.disabled;
            try {
                delete d.test
            } catch (t) {
                e.deleteExpando = !1
            }
            o = J.createElement("input"), o.setAttribute("value", ""), e.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), e.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), s = J.createDocumentFragment(), s.appendChild(o), e.appendChecked = o.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
                e.noCloneEvent = !1
            }), d.cloneNode(!0).click());
            for (c in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) d.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || d.attributes[l].expando === !1;
            d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === d.style.backgroundClip;
            for (c in ct(e)) break;
            return e.ownLast = "0" !== c, ct(function() {
                var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    s = J.getElementsByTagName("body")[0];
                s && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(s, null != s.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    e.boxSizing = 4 === d.offsetWidth
                }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(d, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, i = d.appendChild(J.createElement("div")), i.style.cssText = d.style.cssText = r, i.style.marginRight = i.style.width = "0", d.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== Q && (d.innerHTML = "", d.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== d.offsetWidth, e.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = d = o = i = null)
            }), n = r = s = a = i = o = null, e
        }({});
        var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Nt = /([A-Z])/g;
        ct.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ct.cache[t[ct.expando]] : t[ct.expando], !!t && !a(t)
            },
            data: function(t, e, n) {
                return o(t, e, n)
            },
            removeData: function(t, e) {
                return r(t, e)
            },
            _data: function(t, e, n) {
                return o(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return r(t, e, !0)
            },
            acceptData: function(t) {
                if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
                var e = t.nodeName && ct.noData[t.nodeName.toLowerCase()];
                return !e || e !== !0 && t.getAttribute("classid") === e
            }
        }), ct.fn.extend({
            data: function(t, n) {
                var i, o, r = null,
                    a = 0,
                    l = this[0];
                if (t === e) {
                    if (this.length && (r = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; i.length > a; a++) o = i[a].name, 0 === o.indexOf("data-") && (o = ct.camelCase(o.slice(5)), s(l, o, r[o]));
                        ct._data(l, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    ct.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ct.data(this, t, n)
                }) : l ? s(l, t, ct.data(l, t)) : null
            },
            removeData: function(t) {
                return this.each(function() {
                    ct.removeData(this, t)
                })
            }
        }), ct.extend({
            queue: function(t, n, i) {
                var o;
                return t ? (n = (n || "fx") + "queue", o = ct._data(t, n), i && (!o || ct.isArray(i) ? o = ct._data(t, n, ct.makeArray(i)) : o.push(i)), o || []) : e
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ct.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = ct._queueHooks(t, e),
                    s = function() {
                        ct.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return ct._data(t, n) || ct._data(t, n, {
                    empty: ct.Callbacks("once memory").add(function() {
                        ct._removeData(t, e + "queue"), ct._removeData(t, n)
                    })
                })
            }
        }), ct.fn.extend({
            queue: function(t, n) {
                var i = 2;
                return "string" != typeof t && (n = t, t = "fx", i--), i > arguments.length ? ct.queue(this[0], t) : n === e ? this : this.each(function() {
                    var e = ct.queue(this, t, n);
                    ct._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ct.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ct.dequeue(this, t)
                })
            },
            delay: function(t, e) {
                return t = ct.fx ? ct.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, n) {
                var i, o = 1,
                    r = ct.Deferred(),
                    s = this,
                    a = this.length,
                    l = function() {
                        --o || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;) i = ct._data(s[a], t + "queueHooks"), i && i.empty && (o++, i.empty.add(l));
                return l(), r.promise(n)
            }
        });
        var $t, At, Dt = /[\t\r\n\f]/g,
            Ot = /\r/g,
            jt = /^(?:input|select|textarea|button|object)$/i,
            _t = /^(?:a|area)$/i,
            Lt = /^(?:checked|selected)$/i,
            It = ct.support.getSetAttribute,
            Mt = ct.support.input;
        ct.fn.extend({
            attr: function(t, e) {
                return ct.access(this, ct.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ct.removeAttr(this, t)
                })
            },
            prop: function(t, e) {
                return ct.access(this, ct.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = ct.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = e, delete this[t]
                    } catch (t) {}
                })
            },
            addClass: function(t) {
                var e, n, i, o, r, s = 0,
                    a = this.length,
                    l = "string" == typeof t && t;
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).addClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(pt) || []; a > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                            for (r = 0; o = e[r++];) 0 > i.indexOf(" " + o + " ") && (i += o + " ");
                            n.className = ct.trim(i)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof t && t;
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).removeClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(pt) || []; a > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                            for (r = 0; o = e[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            n.className = t ? ct.trim(i) : ""
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ct.isFunction(t) ? this.each(function(n) {
                    ct(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var e, i = 0, o = ct(this), r = t.match(pt) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else(n === Q || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ct._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(e) >= 0) return !0;
                return !1
            },
            val: function(t) {
                var n, i, o, r = this[0];
                return arguments.length ? (o = ct.isFunction(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = o ? t.call(this, n, ct(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ct.isArray(r) && (r = ct.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), i = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, r, "value") !== e || (this.value = r))
                })) : r ? (i = ct.valHooks[r.type] || ct.valHooks[r.nodeName.toLowerCase()], i && "get" in i && (n = i.get(r, "value")) !== e ? n : (n = r.value, "string" == typeof n ? n.replace(Ot, "") : null == n ? "" : n)) : void 0
            }
        }), ct.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ct.find.attr(t, "value");
                        return null != e ? e : t.text
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ct(n).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = ct.makeArray(e), s = o.length; s--;) i = o[s], (i.selected = ct.inArray(ct(i).val(), r) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            },
            attr: function(t, n, i) {
                var o, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === Q ? ct.prop(t, n, i) : (1 === s && ct.isXMLDoc(t) || (n = n.toLowerCase(), o = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? At : $t)), i === e ? o && "get" in o && null !== (r = o.get(t, n)) ? r : (r = ct.find.attr(t, n), null == r ? e : r) : null !== i ? o && "set" in o && (r = o.set(t, i, n)) !== e ? r : (t.setAttribute(n, i + ""), i) : (ct.removeAttr(t, n), e))
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    r = e && e.match(pt);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? Mt && It || !Lt.test(n) ? t[i] = !1 : t[ct.camelCase("default-" + n)] = t[i] = !1 : ct.attr(t, n, ""), t.removeAttribute(It ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ct.support.radioValue && "radio" === e && ct.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(t, n, i) {
                var o, r, s, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ct.isXMLDoc(t), s && (n = ct.propFix[n] || n, r = ct.propHooks[n]), i !== e ? r && "set" in r && (o = r.set(t, i, n)) !== e ? o : t[n] = i : r && "get" in r && null !== (o = r.get(t, n)) ? o : t[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ct.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : jt.test(t.nodeName) || _t.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), At = {
            set: function(t, e, n) {
                return e === !1 ? ct.removeAttr(t, n) : Mt && It || !Lt.test(n) ? t.setAttribute(!It && ct.propFix[n] || n, n) : t[ct.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function(t, n) {
            var i = ct.expr.attrHandle[n] || ct.find.attr;
            ct.expr.attrHandle[n] = Mt && It || !Lt.test(n) ? function(t, n, o) {
                var r = ct.expr.attrHandle[n],
                    s = o ? e : (ct.expr.attrHandle[n] = e) != i(t, n, o) ? n.toLowerCase() : null;
                return ct.expr.attrHandle[n] = r, s
            } : function(t, n, i) {
                return i ? e : t[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), Mt && It || (ct.attrHooks.value = {
            set: function(t, n, i) {
                return ct.nodeName(t, "input") ? (t.defaultValue = n, e) : $t && $t.set(t, n, i)
            }
        }), It || ($t = {
            set: function(t, n, i) {
                var o = t.getAttributeNode(i);
                return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(i)), o.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
            }
        }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(t, n, i) {
            var o;
            return i ? e : (o = t.getAttributeNode(n)) && "" !== o.value ? o.value : null
        }, ct.valHooks.button = {
            get: function(t, n) {
                var i = t.getAttributeNode(n);
                return i && i.specified ? i.value : e
            },
            set: $t.set
        }, ct.attrHooks.contenteditable = {
            set: function(t, e, n) {
                $t.set(t, "" !== e && e, n)
            }
        }, ct.each(["width", "height"], function(t, n) {
            ct.attrHooks[n] = {
                set: function(t, i) {
                    return "" === i ? (t.setAttribute(n, "auto"), i) : e
                }
            }
        })), ct.support.hrefNormalized || ct.each(["href", "src"], function(t, e) {
            ct.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ct.support.style || (ct.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || e
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        }), ct.support.optSelected || (ct.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ct.propFix[this.toLowerCase()] = this
        }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function() {
            ct.valHooks[this] = {
                set: function(t, n) {
                    return ct.isArray(n) ? t.checked = ct.inArray(ct(t).val(), n) >= 0 : e
                }
            }, ct.support.checkOn || (ct.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var qt = /^(?:input|select|textarea)$/i,
            Ht = /^key/,
            Pt = /^(?:mouse|contextmenu)|click/,
            Bt = /^(?:focusinfocus|focusoutblur)$/,
            Rt = /^([^.]*)(?:\.(.+)|)$/;
        ct.event = {
            global: {},
            add: function(t, n, i, o, r) {
                var s, a, l, u, c, d, p, f, h, m, g, v = ct._data(t);
                if (v) {
                    for (i.handler && (u = i, i = u.handler, r = u.selector), i.guid || (i.guid = ct.guid++), (a = v.events) || (a = v.events = {}), (d = v.handle) || (d = v.handle = function(t) {
                            return typeof ct === Q || t && ct.event.triggered === t.type ? e : ct.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = t), n = (n || "").match(pt) || [""], l = n.length; l--;) s = Rt.exec(n[l]) || [], h = g = s[1], m = (s[2] || "").split(".").sort(), h && (c = ct.event.special[h] || {}, h = (r ? c.delegateType : c.bindType) || h, c = ct.event.special[h] || {}, p = ct.extend({
                        type: h,
                        origType: g,
                        data: o,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && ct.expr.match.needsContext.test(r),
                        namespace: m.join(".")
                    }, u), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, c.setup && c.setup.call(t, o, m, d) !== !1 || (t.addEventListener ? t.addEventListener(h, d, !1) : t.attachEvent && t.attachEvent("on" + h, d))), c.add && (c.add.call(t, p), p.handler.guid || (p.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, p) : f.push(p), ct.event.global[h] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, u, c, d, p, f, h, m, g = ct.hasData(t) && ct._data(t);
                if (g && (c = g.events)) {
                    for (e = (e || "").match(pt) || [""], u = e.length; u--;)
                        if (a = Rt.exec(e[u]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                            for (d = ct.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = c[f] || [], a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, d.remove && d.remove.call(t, s));
                            l && !p.length && (d.teardown && d.teardown.call(t, h, g.handle) !== !1 || ct.removeEvent(t, f, g.handle), delete c[f])
                        } else
                            for (f in c) ct.event.remove(t, f + e[u], n, i, !0);
                    ct.isEmptyObject(c) && (delete g.handle, ct._removeData(t, "events"))
                }
            },
            trigger: function(n, i, o, r) {
                var s, a, l, u, c, d, p, f = [o || J],
                    h = lt.call(n, "type") ? n.type : n,
                    m = lt.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = d = o = o || J, 3 !== o.nodeType && 8 !== o.nodeType && !Bt.test(h + ct.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), a = 0 > h.indexOf(":") && "on" + h, n = n[ct.expando] ? n : new ct.Event(h, "object" == typeof n && n), n.isTrigger = r ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = o), i = null == i ? [n] : ct.makeArray(i, [n]), c = ct.event.special[h] || {}, r || !c.trigger || c.trigger.apply(o, i) !== !1)) {
                    if (!r && !c.noBubble && !ct.isWindow(o)) {
                        for (u = c.delegateType || h, Bt.test(u + h) || (l = l.parentNode); l; l = l.parentNode) f.push(l), d = l;
                        d === (o.ownerDocument || J) && f.push(d.defaultView || d.parentWindow || t)
                    }
                    for (p = 0;
                        (l = f[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? u : c.bindType || h, s = (ct._data(l, "events") || {})[n.type] && ct._data(l, "handle"), s && s.apply(l, i), s = a && l[a], s && ct.acceptData(l) && s.apply && s.apply(l, i) === !1 && n.preventDefault();
                    if (n.type = h, !r && !n.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), i) === !1) && ct.acceptData(o) && a && o[h] && !ct.isWindow(o)) {
                        d = o[a], d && (o[a] = null), ct.event.triggered = h;
                        try {
                            o[h]()
                        } catch (t) {}
                        ct.event.triggered = e, d && (o[a] = d)
                    }
                    return n.result
                }
            },
            dispatch: function(t) {
                t = ct.event.fix(t);
                var n, i, o, r, s, a = [],
                    l = rt.call(arguments),
                    u = (ct._data(this, "events") || {})[t.type] || [],
                    c = ct.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = ct.event.handlers.call(this, t, u), n = 0;
                        (r = a[n++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, s = 0;
                            (o = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((ct.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, n) {
                var i, o, r, s, a = [],
                    l = n.delegateCount,
                    u = t.target;
                if (l && u.nodeType && (!t.button || "click" !== t.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                            for (r = [], s = 0; l > s; s++) o = n[s], i = o.selector + " ", r[i] === e && (r[i] = o.needsContext ? ct(i, this).index(u) >= 0 : ct.find(i, this, null, [u]).length), r[i] && r.push(o);
                            r.length && a.push({
                                elem: u,
                                handlers: r
                            })
                        }
                return n.length > l && a.push({
                    elem: this,
                    handlers: n.slice(l)
                }), a
            },
            fix: function(t) {
                if (t[ct.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Pt.test(o) ? this.mouseHooks : Ht.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ct.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || J), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, n) {
                    var i, o, r, s = n.button,
                        a = n.fromElement;
                    return null == t.pageX && null != n.clientX && (o = t.target.ownerDocument || J, r = o.documentElement, i = o.body, t.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== c() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === c() && this.blur ? (this.blur(), !1) : e
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
                    },
                    _default: function(t) {
                        return ct.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== e && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = ct.extend(new ct.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ct.event.trigger(o, null, e) : ct.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ct.removeEvent = J.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === Q && (t[i] = null), t.detachEvent(i, n))
        }, ct.Event = function(t, n) {
            return this instanceof ct.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, n && ct.extend(this, n), this.timeStamp = t && t.timeStamp || ct.now(), this[ct.expando] = !0, e) : new ct.Event(t, n)
        }, ct.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ct.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, e) {
            ct.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return (!o || o !== i && !ct.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ct.support.submitBubbles || (ct.event.special.submit = {
            setup: function() {
                return !ct.nodeName(this, "form") && (ct.event.add(this, "click._submit keypress._submit", function(t) {
                    var n = t.target,
                        i = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : e;
                    i && !ct._data(i, "submitBubbles") && (ct.event.add(i, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), ct._data(i, "submitBubbles", !0))
                }), e)
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ct.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return !ct.nodeName(this, "form") && (ct.event.remove(this, "._submit"), e)
            }
        }), ct.support.changeBubbles || (ct.event.special.change = {
            setup: function() {
                return qt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ct.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, t, !0)
                })), !1) : (ct.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    qt.test(e.nodeName) && !ct._data(e, "changeBubbles") && (ct.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ct.event.simulate("change", this.parentNode, t, !0)
                    }), ct._data(e, "changeBubbles", !0))
                }), e)
            },
            handle: function(t) {
                var n = t.target;
                return this !== n || t.isSimulated || t.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? t.handleObj.handler.apply(this, arguments) : e
            },
            teardown: function() {
                return ct.event.remove(this, "._change"), !qt.test(this.nodeName)
            }
        }), ct.support.focusinBubbles || ct.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = 0,
                i = function(t) {
                    ct.event.simulate(e, t.target, ct.event.fix(t), !0)
                };
            ct.event.special[e] = {
                setup: function() {
                    0 === n++ && J.addEventListener(t, i, !0)
                },
                teardown: function() {
                    0 === --n && J.removeEventListener(t, i, !0)
                }
            }
        }), ct.fn.extend({
            on: function(t, n, i, o, r) {
                var s, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n, n = e);
                    for (s in t) this.on(s, n, i, t[s], r);
                    return this
                }
                if (null == i && null == o ? (o = n, i = n = e) : null == o && ("string" == typeof n ? (o = i, i = e) : (o = i, i = n, n = e)), o === !1) o = u;
                else if (!o) return this;
                return 1 === r && (a = o, o = function(t) {
                    return ct().off(t), a.apply(this, arguments)
                }, o.guid = a.guid || (a.guid = ct.guid++)), this.each(function() {
                    ct.event.add(this, t, o, i, n)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, n, i) {
                var o, r;
                if (t && t.preventDefault && t.handleObj) return o = t.handleObj, ct(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, n, t[r]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = u), this.each(function() {
                    ct.event.remove(this, t, i, n)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    ct.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, n) {
                var i = this[0];
                return i ? ct.event.trigger(t, n, i, !0) : e
            }
        });
        var Ft = /^.[^:#\[\.,]*$/,
            Wt = /^(?:parents|prev(?:Until|All))/,
            zt = ct.expr.match.needsContext,
            Ut = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ct.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof t) return this.pushStack(ct(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (ct.contains(i[e], this)) return !0
                }));
                for (e = 0; o > e; e++) ct.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            has: function(t) {
                var e, n = ct(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (ct.contains(this, n[e])) return !0
                })
            },
            not: function(t) {
                return this.pushStack(p(this, t || [], !0))
            },
            filter: function(t) {
                return this.pushStack(p(this, t || [], !1))
            },
            is: function(t) {
                return !!p(this, "string" == typeof t && zt.test(t) ? ct(t) : t || [], !1).length
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], s = zt.test(t) || "string" != typeof t ? ct(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, t))) {
                            n = r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? ct.unique(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ct.inArray(this[0], ct(t)) : ct.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                var n = "string" == typeof t ? ct(t, e) : ct.makeArray(t && t.nodeType ? [t] : t),
                    i = ct.merge(this.get(), n);
                return this.pushStack(ct.unique(i))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ct.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ct.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return ct.dir(t, "parentNode", n)
            },
            next: function(t) {
                return d(t, "nextSibling")
            },
            prev: function(t) {
                return d(t, "previousSibling")
            },
            nextAll: function(t) {
                return ct.dir(t, "nextSibling");
            },
            prevAll: function(t) {
                return ct.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return ct.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return ct.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return ct.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ct.sibling(t.firstChild)
            },
            contents: function(t) {
                return ct.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ct.merge([], t.childNodes)
            }
        }, function(t, e) {
            ct.fn[t] = function(n, i) {
                var o = ct.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ct.filter(i, o)), this.length > 1 && (Ut[t] || (o = ct.unique(o)), Wt.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        }), ct.extend({
            filter: function(t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ct.find.matchesSelector(i, t) ? [i] : [] : ct.find.matches(t, ct.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            },
            dir: function(t, n, i) {
                for (var o = [], r = t[n]; r && 9 !== r.nodeType && (i === e || 1 !== r.nodeType || !ct(r).is(i));) 1 === r.nodeType && o.push(r), r = r[n];
                return o
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        });
        var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Xt = / jQuery\d+="(?:null|\d+)"/g,
            Qt = RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
            Yt = /^\s+/,
            Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Kt = /<([\w:]+)/,
            Gt = /<tbody/i,
            Zt = /<|&#?\w+;/,
            te = /<(?:script|style|link)/i,
            ee = /^(?:checkbox|radio)$/i,
            ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ie = /^$|\/(?:java|ecma)script/i,
            oe = /^true\/(.*)/,
            re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            se = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ae = f(J),
            le = ae.appendChild(J.createElement("div"));
        se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td, ct.fn.extend({
            text: function(t) {
                return ct.access(this, function(t) {
                    return t === e ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = h(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = h(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? ct.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || ct.cleanData(x(n)), n.parentNode && (e && ct.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ct.cleanData(x(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && ct.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return ct.clone(this, t, e)
                })
            },
            html: function(t) {
                return ct.access(this, function(t) {
                    var n = this[0] || {},
                        i = 0,
                        o = this.length;
                    if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : e;
                    if (!("string" != typeof t || te.test(t) || !ct.support.htmlSerialize && Qt.test(t) || !ct.support.leadingWhitespace && Yt.test(t) || se[(Kt.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Jt, "<$1></$2>");
                        try {
                            for (; o > i; i++) n = this[i] || {}, 1 === n.nodeType && (ct.cleanData(x(n, !1)), n.innerHTML = t);
                            n = 0
                        } catch (t) {}
                    }
                    n && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = ct.map(this, function(t) {
                        return [t.nextSibling, t.parentNode]
                    }),
                    e = 0;
                return this.domManip(arguments, function(n) {
                    var i = t[e++],
                        o = t[e++];
                    o && (i && i.parentNode !== o && (i = this.nextSibling), ct(this).remove(), o.insertBefore(n, i))
                }, !0), e ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e, n) {
                t = it.apply([], t);
                var i, o, r, s, a, l, u = 0,
                    c = this.length,
                    d = this,
                    p = c - 1,
                    f = t[0],
                    h = ct.isFunction(f);
                if (h || !(1 >= c || "string" != typeof f || ct.support.checkClone) && ne.test(f)) return this.each(function(i) {
                    var o = d.eq(i);
                    h && (t[0] = f.call(this, i, o.html())), o.domManip(t, e, n)
                });
                if (c && (l = ct.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (s = ct.map(x(l, "script"), m), r = s.length; c > u; u++) o = l, u !== p && (o = ct.clone(o, !0, !0), r && ct.merge(s, x(o, "script"))), e.call(this[u], o, u);
                    if (r)
                        for (a = s[s.length - 1].ownerDocument, ct.map(s, g), u = 0; r > u; u++) o = s[u], ie.test(o.type || "") && !ct._data(o, "globalEval") && ct.contains(a, o) && (o.src ? ct._evalUrl(o.src) : ct.globalEval((o.text || o.textContent || o.innerHTML || "").replace(re, "")));
                    l = i = null
                }
                return this
            }
        }), ct.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ct.fn[t] = function(t) {
                for (var n, i = 0, o = [], r = ct(t), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), ct(r[i])[e](n), ot.apply(o, n.get());
                return this.pushStack(o)
            }
        }), ct.extend({
            clone: function(t, e, n) {
                var i, o, r, s, a, l = ct.contains(t.ownerDocument, t);
                if (ct.support.html5Clone || ct.isXMLDoc(t) || !Qt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(r = le.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ct.isXMLDoc(t)))
                    for (i = x(r), a = x(t), s = 0; null != (o = a[s]); ++s) i[s] && b(o, i[s]);
                if (e)
                    if (n)
                        for (a = a || x(t), i = i || x(r), s = 0; null != (o = a[s]); s++) y(o, i[s]);
                    else y(t, r);
                return i = x(r, "script"), i.length > 0 && v(i, !l && x(t, "script")), i = a = o = null, r
            },
            buildFragment: function(t, e, n, i) {
                for (var o, r, s, a, l, u, c, d = t.length, p = f(e), h = [], m = 0; d > m; m++)
                    if (r = t[m], r || 0 === r)
                        if ("object" === ct.type(r)) ct.merge(h, r.nodeType ? [r] : r);
                        else if (Zt.test(r)) {
                    for (a = a || p.appendChild(e.createElement("div")), l = (Kt.exec(r) || ["", ""])[1].toLowerCase(), c = se[l] || se._default, a.innerHTML = c[1] + r.replace(Jt, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
                    if (!ct.support.leadingWhitespace && Yt.test(r) && h.push(e.createTextNode(Yt.exec(r)[0])), !ct.support.tbody)
                        for (r = "table" !== l || Gt.test(r) ? "<table>" !== c[1] || Gt.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) ct.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                    for (ct.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = p.lastChild
                } else h.push(e.createTextNode(r));
                for (a && p.removeChild(a), ct.support.appendChecked || ct.grep(x(h, "input"), w), m = 0; r = h[m++];)
                    if ((!i || -1 === ct.inArray(r, i)) && (s = ct.contains(r.ownerDocument, r), a = x(p.appendChild(r), "script"), s && v(a), n))
                        for (o = 0; r = a[o++];) ie.test(r.type || "") && n.push(r);
                return a = null, p
            },
            cleanData: function(t, e) {
                for (var n, i, o, r, s = 0, a = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (n = t[s]); s++)
                    if ((e || ct.acceptData(n)) && (o = n[a], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) c[i] ? ct.event.remove(n, i) : ct.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], u ? delete n[a] : typeof n.removeAttribute !== Q ? n.removeAttribute(a) : n[a] = null, et.push(o))
                    }
            },
            _evalUrl: function(t) {
                return ct.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
        }), ct.fn.extend({
            wrapAll: function(t) {
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ct(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return ct.isFunction(t) ? this.each(function(e) {
                    ct(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ct(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ct.isFunction(t);
                return this.each(function(n) {
                    ct(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var ue, ce, de, pe = /alpha\([^)]*\)/i,
            fe = /opacity\s*=\s*([^)]*)/,
            he = /^(top|right|bottom|left)$/,
            me = /^(none|table(?!-c[ea]).+)/,
            ge = /^margin/,
            ve = RegExp("^(" + dt + ")(.*)$", "i"),
            ye = RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"),
            be = RegExp("^([+-])=(" + dt + ")", "i"),
            xe = {
                BODY: "block"
            },
            we = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Te = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Ce = ["Top", "Right", "Bottom", "Left"],
            Se = ["Webkit", "O", "Moz", "ms"];
        ct.fn.extend({
            css: function(t, n) {
                return ct.access(this, function(t, n, i) {
                    var o, r, s = {},
                        a = 0;
                    if (ct.isArray(n)) {
                        for (r = ce(t), o = n.length; o > a; a++) s[n[a]] = ct.css(t, n[a], !1, r);
                        return s
                    }
                    return i !== e ? ct.style(t, n, i) : ct.css(t, n)
                }, t, n, arguments.length > 1)
            },
            show: function() {
                return S(this, !0)
            },
            hide: function() {
                return S(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    C(this) ? ct(this).show() : ct(this).hide()
                })
            }
        }), ct.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = de(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: ct.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, n, i, o) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, a, l = ct.camelCase(n),
                        u = t.style;
                    if (n = ct.cssProps[l] || (ct.cssProps[l] = T(u, l)), a = ct.cssHooks[n] || ct.cssHooks[l], i === e) return a && "get" in a && (r = a.get(t, !1, o)) !== e ? r : u[n];
                    if (s = typeof i, "string" === s && (r = be.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(ct.css(t, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ct.cssNumber[l] || (i += "px"), ct.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (i = a.set(t, i, o)) === e))) try {
                        u[n] = i
                    } catch (t) {}
                }
            },
            css: function(t, n, i, o) {
                var r, s, a, l = ct.camelCase(n);
                return n = ct.cssProps[l] || (ct.cssProps[l] = T(t.style, l)), a = ct.cssHooks[n] || ct.cssHooks[l], a && "get" in a && (s = a.get(t, !0, i)), s === e && (s = de(t, n, o)), "normal" === s && n in Te && (s = Te[n]), "" === i || i ? (r = parseFloat(s), i === !0 || ct.isNumeric(r) ? r || 0 : s) : s
            }
        }), t.getComputedStyle ? (ce = function(e) {
            return t.getComputedStyle(e, null)
        }, de = function(t, n, i) {
            var o, r, s, a = i || ce(t),
                l = a ? a.getPropertyValue(n) || a[n] : e,
                u = t.style;
            return a && ("" !== l || ct.contains(t.ownerDocument, t) || (l = ct.style(t, n)), ye.test(l) && ge.test(n) && (o = u.width, r = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = o, u.minWidth = r, u.maxWidth = s)), l
        }) : J.documentElement.currentStyle && (ce = function(t) {
            return t.currentStyle
        }, de = function(t, n, i) {
            var o, r, s, a = i || ce(t),
                l = a ? a[n] : e,
                u = t.style;
            return null == l && u && u[n] && (l = u[n]), ye.test(l) && !he.test(n) && (o = u.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = o, s && (r.left = s)), "" === l ? "auto" : l
        }), ct.each(["height", "width"], function(t, n) {
            ct.cssHooks[n] = {
                get: function(t, i, o) {
                    return i ? 0 === t.offsetWidth && me.test(ct.css(t, "display")) ? ct.swap(t, we, function() {
                        return N(t, n, o)
                    }) : N(t, n, o) : e
                },
                set: function(t, e, i) {
                    var o = i && ce(t);
                    return k(t, e, i ? E(t, n, i, ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ct.support.opacity || (ct.cssHooks.opacity = {
            get: function(t, e) {
                return fe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    o = ct.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ct.trim(r.replace(pe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = pe.test(r) ? r.replace(pe, o) : r + " " + o)
            }
        }), ct(function() {
            ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
                get: function(t, n) {
                    return n ? ct.swap(t, {
                        display: "inline-block"
                    }, de, [t, "marginRight"]) : e
                }
            }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function(t, n) {
                ct.cssHooks[n] = {
                    get: function(t, i) {
                        return i ? (i = de(t, n), ye.test(i) ? ct(t).position()[n] + "px" : i) : e
                    }
                }
            })
        }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(t) {
            return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ct.css(t, "display"))
        }, ct.expr.filters.visible = function(t) {
            return !ct.expr.filters.hidden(t)
        }), ct.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ct.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Ce[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ge.test(t) || (ct.cssHooks[t + e].set = k)
        });
        var ke = /%20/g,
            Ee = /\[\]$/,
            Ne = /\r?\n/g,
            $e = /^(?:submit|button|image|reset|file)$/i,
            Ae = /^(?:input|select|textarea|keygen)/i;
        ct.fn.extend({
            serialize: function() {
                return ct.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ct.prop(this, "elements");
                    return t ? ct.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ct(this).is(":disabled") && Ae.test(this.nodeName) && !$e.test(t) && (this.checked || !ee.test(t))
                }).map(function(t, e) {
                    var n = ct(this).val();
                    return null == n ? null : ct.isArray(n) ? ct.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ne, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ne, "\r\n")
                    }
                }).get()
            }
        }), ct.param = function(t, n) {
            var i, o = [],
                r = function(t, e) {
                    e = ct.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (n === e && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(t) || t.jquery && !ct.isPlainObject(t)) ct.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (i in t) D(i, t[i], n, r);
            return o.join("&").replace(ke, "+")
        }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ct.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ct.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var De, Oe, je = ct.now(),
            _e = /\?/,
            Le = /#.*$/,
            Ie = /([?&])_=[^&]*/,
            Me = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            qe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            He = /^(?:GET|HEAD)$/,
            Pe = /^\/\//,
            Be = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Re = ct.fn.load,
            Fe = {},
            We = {},
            ze = "*/".concat("*");
        try {
            Oe = Y.href
        } catch (t) {
            Oe = J.createElement("a"), Oe.href = "", Oe = Oe.href
        }
        De = Be.exec(Oe.toLowerCase()) || [], ct.fn.load = function(t, n, i) {
            if ("string" != typeof t && Re) return Re.apply(this, arguments);
            var o, r, s, a = this,
                l = t.indexOf(" ");
            return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)), ct.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ct.ajax({
                url: t,
                type: s,
                dataType: "html",
                data: n
            }).done(function(t) {
                r = arguments, a.html(o ? ct("<div>").append(ct.parseHTML(t)).find(o) : t)
            }).complete(i && function(t, e) {
                a.each(i, r || [t.responseText, e, t])
            }), this
        }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ct.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ct.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Oe,
                type: "GET",
                isLocal: qe.test(De[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ze,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ct.parseJSON,
                    "text xml": ct.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? _(_(t, ct.ajaxSettings), e) : _(ct.ajaxSettings, t)
            },
            ajaxPrefilter: O(Fe),
            ajaxTransport: O(We),
            ajax: function(t, n) {
                function i(t, n, i, o) {
                    var r, d, y, b, w, C = n;
                    2 !== x && (x = 2, l && clearTimeout(l), c = e, a = o || "", T.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (b = L(p, T, i)), b = I(p, b, T, r), r ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ct.lastModified[s] = w), w = T.getResponseHeader("etag"), w && (ct.etag[s] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, y = b.error, r = !y)) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", r ? m.resolveWith(f, [d, C, T]) : m.rejectWith(f, [T, C, y]), T.statusCode(v), v = e, u && h.trigger(r ? "ajaxSuccess" : "ajaxError", [T, p, r ? d : y]), g.fireWith(f, [T, C]), u && (h.trigger("ajaxComplete", [T, p]), --ct.active || ct.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = e), n = n || {};
                var o, r, s, a, l, u, c, d, p = ct.ajaxSetup({}, n),
                    f = p.context || p,
                    h = p.context && (f.nodeType || f.jquery) ? ct(f) : ct.event,
                    m = ct.Deferred(),
                    g = ct.Callbacks("once memory"),
                    v = p.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === x) {
                                if (!d)
                                    for (d = {}; e = Me.exec(a);) d[e[1].toLowerCase()] = e[2];
                                e = d[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return x || (t = b[n] = b[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return x || (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > x)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else T.always(t[T.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return c && c.abort(e), i(0, e), this
                        }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || Oe) + "").replace(Le, "").replace(Pe, De[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ct.trim(p.dataType || "*").toLowerCase().match(pt) || [""], null == p.crossDomain && (o = Be.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === De[1] && o[2] === De[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (De[3] || ("http:" === De[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ct.param(p.data, p.traditional)), j(Fe, p, n, T), 2 === x) return T;
                u = p.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !He.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (_e.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Ie.test(s) ? s.replace(Ie, "$1_=" + je++) : s + (_e.test(s) ? "&" : "?") + "_=" + je++)), p.ifModified && (ct.lastModified[s] && T.setRequestHeader("If-Modified-Since", ct.lastModified[s]), ct.etag[s] && T.setRequestHeader("If-None-Match", ct.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : p.accepts["*"]);
                for (r in p.headers) T.setRequestHeader(r, p.headers[r]);
                if (p.beforeSend && (p.beforeSend.call(f, T, p) === !1 || 2 === x)) return T.abort();
                w = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[r](p[r]);
                if (c = j(We, p, n, T)) {
                    T.readyState = 1, u && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                        T.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, c.send(y, i)
                    } catch (t) {
                        if (!(2 > x)) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function(t, e, n) {
                return ct.get(t, e, n, "json")
            },
            getScript: function(t, n) {
                return ct.get(t, e, n, "script")
            }
        }), ct.each(["get", "post"], function(t, n) {
            ct[n] = function(t, i, o, r) {
                return ct.isFunction(i) && (r = r || o, o = i, i = e), ct.ajax({
                    url: t,
                    type: n,
                    dataType: r,
                    data: i,
                    success: o
                })
            }
        }), ct.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return ct.globalEval(t), t
                }
            }
        }), ct.ajaxPrefilter("script", function(t) {
            t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ct.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var n, i = J.head || ct("head")[0] || J.documentElement;
                return {
                    send: function(e, o) {
                        n = J.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function(t, e) {
                            (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || o(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(e, !0)
                    }
                }
            }
        });
        var Ue = [],
            Ve = /(=)\?(?=&|$)|\?\?/;
        ct.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ue.pop() || ct.expando + "_" + je++;
                return this[t] = !0, t
            }
        }), ct.ajaxPrefilter("json jsonp", function(n, i, o) {
            var r, s, a, l = n.jsonp !== !1 && (Ve.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Ve, "$1" + r) : n.jsonp !== !1 && (n.url += (_e.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function() {
                return a || ct.error(r + " was not called"), a[0]
            }, n.dataTypes[0] = "json", s = t[r], t[r] = function() {
                a = arguments
            }, o.always(function() {
                t[r] = s, n[r] && (n.jsonpCallback = i.jsonpCallback, Ue.push(r)), a && ct.isFunction(s) && s(a[0]), a = s = e
            }), "script") : e
        });
        var Xe, Qe, Ye = 0,
            Je = t.ActiveXObject && function() {
                var t;
                for (t in Xe) Xe[t](e, !0)
            };
        ct.ajaxSettings.xhr = t.ActiveXObject ? function() {
            return !this.isLocal && M() || q()
        } : M, Qe = ct.ajaxSettings.xhr(), ct.support.cors = !!Qe && "withCredentials" in Qe, Qe = ct.support.ajax = !!Qe, Qe && ct.ajaxTransport(function(n) {
            if (!n.crossDomain || ct.support.cors) {
                var i;
                return {
                    send: function(o, r) {
                        var s, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (a in n.xhrFields) l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in o) l.setRequestHeader(a, o[a])
                        } catch (t) {}
                        l.send(n.hasContent && n.data || null), i = function(t, o) {
                            var a, u, c, d;
                            try {
                                if (i && (o || 4 === l.readyState))
                                    if (i = e, s && (l.onreadystatechange = ct.noop, Je && delete Xe[s]), o) 4 !== l.readyState && l.abort();
                                    else {
                                        d = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                        try {
                                            c = l.statusText
                                        } catch (t) {
                                            c = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                    }
                            } catch (t) {
                                o || r(-1, t)
                            }
                            d && r(a, c, d, u)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Ye, Je && (Xe || (Xe = {}, ct(t).unload(Je)), Xe[s] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(e, !0)
                    }
                }
            }
        });
        var Ke, Ge, Ze = /^(?:toggle|show|hide)$/,
            tn = RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"),
            en = /queueHooks$/,
            nn = [F],
            on = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = tn.exec(e),
                        r = o && o[3] || (ct.cssNumber[t] ? "" : "px"),
                        s = (ct.cssNumber[t] || "px" !== r && +i) && tn.exec(ct.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +i || 1;
                        do a = a || ".5", s /= a, ct.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        ct.Animation = ct.extend(B, {
            tweener: function(t, e) {
                ct.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; o > i; i++) n = t[i], on[n] = on[n] || [], on[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? nn.unshift(t) : nn.push(t)
            }
        }), ct.Tween = W, W.prototype = {
            constructor: W,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ct.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = W.propHooks[this.prop];
                return t && t.get ? t.get(this) : W.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = W.propHooks[this.prop];
                return this.pos = e = this.options.duration ? ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ct.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    ct.fx.step[t.prop] ? ct.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ct.cssProps[t.prop]] || ct.cssHooks[t.prop]) ? ct.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ct.each(["toggle", "show", "hide"], function(t, e) {
            var n = ct.fn[e];
            ct.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, o)
            }
        }), ct.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(C).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = ct.isEmptyObject(t),
                    r = ct.speed(e, n, i),
                    s = function() {
                        var e = B(this, ct.extend({}, t), r);
                        (o || ct._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, n, i) {
                var o = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        n = null != t && t + "queueHooks",
                        r = ct.timers,
                        s = ct._data(this);
                    if (n) s[n] && s[n].stop && o(s[n]);
                    else
                        for (n in s) s[n] && s[n].stop && en.test(n) && o(s[n]);
                    for (n = r.length; n--;) r[n].elem !== this || null != t && r[n].queue !== t || (r[n].anim.stop(i), e = !1, r.splice(n, 1));
                    (e || !i) && ct.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ct._data(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        r = ct.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ct.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ct.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ct.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ct.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? ct.extend({}, t) : {
                complete: n || !n && e || ct.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ct.isFunction(e) && e
            };
            return i.duration = ct.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ct.fx.speeds ? ct.fx.speeds[i.duration] : ct.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ct.isFunction(i.old) && i.old.call(this), i.queue && ct.dequeue(this, i.queue)
            }, i
        }, ct.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ct.timers = [], ct.fx = W.prototype.init, ct.fx.tick = function() {
            var t, n = ct.timers,
                i = 0;
            for (Ke = ct.now(); n.length > i; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
            n.length || ct.fx.stop(), Ke = e
        }, ct.fx.timer = function(t) {
            t() && ct.timers.push(t) && ct.fx.start()
        }, ct.fx.interval = 13, ct.fx.start = function() {
            Ge || (Ge = setInterval(ct.fx.tick, ct.fx.interval))
        }, ct.fx.stop = function() {
            clearInterval(Ge), Ge = null
        }, ct.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(t) {
            return ct.grep(ct.timers, function(e) {
                return t === e.elem
            }).length
        }), ct.fn.offset = function(t) {
            if (arguments.length) return t === e ? this : this.each(function(e) {
                ct.offset.setOffset(this, t, e)
            });
            var n, i, o = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                s = r && r.ownerDocument;
            return s ? (n = s.documentElement, ct.contains(n, r) ? (typeof r.getBoundingClientRect !== Q && (o = r.getBoundingClientRect()), i = U(s), {
                top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o) : void 0
        }, ct.offset = {
            setOffset: function(t, e, n) {
                var i = ct.css(t, "position");
                "static" === i && (t.style.position = "relative");
                var o, r, s = ct(t),
                    a = s.offset(),
                    l = ct.css(t, "top"),
                    u = ct.css(t, "left"),
                    c = ("absolute" === i || "fixed" === i) && ct.inArray("auto", [l, u]) > -1,
                    d = {},
                    p = {};
                c ? (p = s.position(), o = p.top, r = p.left) : (o = parseFloat(l) || 0, r = parseFloat(u) || 0), ct.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : s.css(d)
            }
        }, ct.fn.extend({
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ct.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ct.nodeName(t[0], "html") || (n = t.offset()), n.top += ct.css(t[0], "borderTopWidth", !0), n.left += ct.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ct.css(i, "marginTop", !0),
                        left: e.left - n.left - ct.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || K; t && !ct.nodeName(t, "html") && "static" === ct.css(t, "position");) t = t.offsetParent;
                    return t || K
                })
            }
        }), ct.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var i = /Y/.test(n);
            ct.fn[t] = function(o) {
                return ct.access(this, function(t, o, r) {
                    var s = U(t);
                    return r === e ? s ? n in s ? s[n] : s.document.documentElement[o] : t[o] : (s ? s.scrollTo(i ? ct(s).scrollLeft() : r, i ? r : ct(s).scrollTop()) : t[o] = r, e)
                }, t, o, arguments.length, null)
            }
        }), ct.each({
            Height: "height",
            Width: "width"
        }, function(t, n) {
            ct.each({
                padding: "inner" + t,
                content: n,
                "": "outer" + t
            }, function(i, o) {
                ct.fn[o] = function(o, r) {
                    var s = arguments.length && (i || "boolean" != typeof o),
                        a = i || (o === !0 || r === !0 ? "margin" : "border");
                    return ct.access(this, function(n, i, o) {
                        var r;
                        return ct.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + t], r["scroll" + t], n.body["offset" + t], r["offset" + t], r["client" + t])) : o === e ? ct.css(n, i, a) : ct.style(n, i, o, a)
                    }, n, s ? o : e, s, null)
                }
            })
        }), ct.fn.size = function() {
            return this.length
        }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (t.jQuery = t.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ct
        }))
    }(window), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.5", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = t(this),
            r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function() {
            var i = t(this),
                o = e(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.5", s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(a);
            u && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                d = r[0].offsetWidth,
                p = r[0].offsetHeight;
            if (u) {
                var f = a,
                    h = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + p > h.bottom ? "top" : "top" == a && c.top - p < h.top ? "bottom" : "right" == a && c.right + d > h.width ? "left" : "left" == a && c.left - d < h.left ? "right" : a, r.removeClass(f).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, d, p);
            this.applyPlacement(m, a);
            var g = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != r && (e.top = e.top + r - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var d = /top|bottom/.test(n),
            p = d ? 2 * c.left - o + l : 2 * c.top - r + u,
            f = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(p, i[0][f], d)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = i ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, s, a, r)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var u = e.left - r,
                c = e.left + r + n;
            u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = i.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(t - i >= o + s) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            u = a ? s : e;
        return null != n && n >= o ? "top" : null != i && l + u >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()),
            this.$body.find(this.selector).map(function() {
                var e = t(this),
                    o = e.data("target") || e.attr("href"),
                    r = /^#./.test(o) && t(o);
                return r && r.length && r.is(":visible") && [
                    [r[n]().top + i, o]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), ! function(t, e, n, i) {
    n.swipebox = function(o, r) {
        var s, a, l = {
                useCSS: !0,
                useSVG: !0,
                initialIndexOnArray: 0,
                removeBarsOnMobile: !0,
                hideCloseButtonOnMobile: !1,
                hideBarsDelay: 3e3,
                videoMaxWidth: 1140,
                vimeoColor: "cccccc",
                beforeOpen: null,
                afterOpen: null,
                afterClose: null,
                nextSlide: null,
                prevSlide: null,
                loopAtEnd: !1,
                autoplayVideos: !1,
                queryStringData: {},
                toggleClassOnLoad: ""
            },
            u = this,
            c = [],
            d = o.selector,
            p = n(d),
            f = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),
            h = null !== f || e.createTouch !== i || "ontouchstart" in t || "onmsgesturechange" in t || navigator.msMaxTouchPoints,
            m = !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            g = t.innerWidth ? t.innerWidth : n(t).width(),
            v = t.innerHeight ? t.innerHeight : n(t).height(),
            y = 0,
            b = '<div id="swipebox-overlay">\t\t\t\t\t<div id="swipebox-container">\t\t\t\t\t\t<div id="swipebox-slider"></div>\t\t\t\t\t\t<div id="swipebox-top-bar">\t\t\t\t\t\t\t<div id="swipebox-title"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div id="swipebox-bottom-bar">\t\t\t\t\t\t\t<div id="swipebox-arrows">\t\t\t\t\t\t\t\t<a id="swipebox-prev"></a>\t\t\t\t\t\t\t\t<a id="swipebox-next"></a>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a id="swipebox-close"></a>\t\t\t\t\t</div>\t\t\t</div>';
        u.settings = {}, n.swipebox.close = function() {
            s.closeSlide()
        }, n.swipebox.extend = function() {
            return s
        }, u.init = function() {
            u.settings = n.extend({}, l, r), n.isArray(o) ? (c = o, s.target = n(t), s.init(u.settings.initialIndexOnArray)) : n(e).on("click", d, function(t) {
                if ("slide current" === t.target.parentNode.className) return !1;
                n.isArray(o) || (s.destroy(), a = n(d), s.actions()), c = [];
                var e, i, r;
                r || (i = "data-rel", r = n(this).attr(i)), r || (i = "rel", r = n(this).attr(i)), a = r && "" !== r && "nofollow" !== r ? p.filter("[" + i + '="' + r + '"]') : n(d), a.each(function() {
                    var t = null,
                        e = null;
                    n(this).attr("title") && (t = n(this).attr("title")), n(this).attr("href") && (e = n(this).attr("href")), c.push({
                        href: e,
                        title: t
                    })
                }), e = a.index(n(this)), t.preventDefault(), t.stopPropagation(), s.target = n(t.target), s.init(e)
            })
        }, s = {
            init: function(t) {
                u.settings.beforeOpen && u.settings.beforeOpen(), this.target.trigger("swipebox-start"), n.swipebox.isOpen = !0, this.build(), this.openSlide(t), this.openMedia(t), this.preloadMedia(t + 1), this.preloadMedia(t - 1), u.settings.afterOpen && u.settings.afterOpen()
            },
            build: function() {
                var t, e = this;
                n("body").append(b), m && u.settings.useSVG === !0 && (t = n("#swipebox-close").css("background-image"), t = t.replace("png", "svg"), n("#swipebox-prev, #swipebox-next, #swipebox-close").css({
                    "background-image": t
                })), f && u.settings.removeBarsOnMobile && n("#swipebox-bottom-bar, #swipebox-top-bar").remove(), n.each(c, function() {
                    n("#swipebox-slider").append('<div class="slide"></div>')
                }), e.setDim(), e.actions(), h && e.gesture(), e.keyboard(), e.animBars(), e.resize()
            },
            setDim: function() {
                var e, i, o = {};
                "onorientationchange" in t ? t.addEventListener("orientationchange", function() {
                    0 === t.orientation ? (e = g, i = v) : (90 === t.orientation || -90 === t.orientation) && (e = v, i = g)
                }, !1) : (e = t.innerWidth ? t.innerWidth : n(t).width(), i = t.innerHeight ? t.innerHeight : n(t).height()), o = {
                    width: e,
                    height: i
                }, n("#swipebox-overlay").css(o)
            },
            resize: function() {
                var e = this;
                n(t).resize(function() {
                    e.setDim()
                }).resize()
            },
            supportTransition: function() {
                var t, n = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");
                for (t = 0; t < n.length; t++)
                    if (e.createElement("div").style[n[t]] !== i) return n[t];
                return !1
            },
            doCssTrans: function() {
                return !(!u.settings.useCSS || !this.supportTransition()) || void 0
            },
            gesture: function() {
                var t, e, i, o, r, s, a = this,
                    l = !1,
                    u = !1,
                    d = 10,
                    p = 50,
                    f = {},
                    h = {},
                    m = n("#swipebox-top-bar, #swipebox-bottom-bar"),
                    v = n("#swipebox-slider");
                m.addClass("visible-bars"), a.setTimeout(), n("body").bind("touchstart", function(a) {
                    return n(this).addClass("touching"), t = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current")), h = a.originalEvent.targetTouches[0], f.pageX = a.originalEvent.targetTouches[0].pageX, f.pageY = a.originalEvent.targetTouches[0].pageY, n("#swipebox-slider").css({
                        "-webkit-transform": "translate3d(" + y + "%, 0, 0)",
                        transform: "translate3d(" + y + "%, 0, 0)"
                    }), n(".touching").bind("touchmove", function(a) {
                        if (a.preventDefault(), a.stopPropagation(), h = a.originalEvent.targetTouches[0], !u && (r = i, i = h.pageY - f.pageY, Math.abs(i) >= p || l)) {
                            var m = .75 - Math.abs(i) / v.height();
                            v.css({
                                top: i + "px"
                            }), v.css({
                                opacity: m
                            }), l = !0
                        }
                        o = e, e = h.pageX - f.pageX, s = 100 * e / g, !u && !l && Math.abs(e) >= d && (n("#swipebox-slider").css({
                            "-webkit-transition": "",
                            transition: ""
                        }), u = !0), u && (e > 0 ? 0 === t ? n("#swipebox-overlay").addClass("leftSpringTouch") : (n("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), n("#swipebox-slider").css({
                            "-webkit-transform": "translate3d(" + (y + s) + "%, 0, 0)",
                            transform: "translate3d(" + (y + s) + "%, 0, 0)"
                        })) : 0 > e && (c.length === t + 1 ? n("#swipebox-overlay").addClass("rightSpringTouch") : (n("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), n("#swipebox-slider").css({
                            "-webkit-transform": "translate3d(" + (y + s) + "%, 0, 0)",
                            transform: "translate3d(" + (y + s) + "%, 0, 0)"
                        }))))
                    }), !1
                }).bind("touchend", function(t) {
                    if (t.preventDefault(), t.stopPropagation(), n("#swipebox-slider").css({
                            "-webkit-transition": "-webkit-transform 0.4s ease",
                            transition: "transform 0.4s ease"
                        }), i = h.pageY - f.pageY, e = h.pageX - f.pageX, s = 100 * e / g, l)
                        if (l = !1, Math.abs(i) >= 2 * p && Math.abs(i) > Math.abs(r)) {
                            var c = i > 0 ? v.height() : -v.height();
                            v.animate({
                                top: c + "px",
                                opacity: 0
                            }, 300, function() {
                                a.closeSlide()
                            })
                        } else v.animate({
                            top: 0,
                            opacity: 1
                        }, 300);
                    else u ? (u = !1, e >= d && e >= o ? a.getPrev() : -d >= e && o >= e && a.getNext()) : m.hasClass("visible-bars") ? (a.clearTimeout(), a.hideBars()) : (a.showBars(), a.setTimeout());
                    n("#swipebox-slider").css({
                        "-webkit-transform": "translate3d(" + y + "%, 0, 0)",
                        transform: "translate3d(" + y + "%, 0, 0)"
                    }), n("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), n(".touching").off("touchmove").removeClass("touching")
                })
            },
            setTimeout: function() {
                if (u.settings.hideBarsDelay > 0) {
                    var e = this;
                    e.clearTimeout(), e.timeout = t.setTimeout(function() {
                        e.hideBars()
                    }, u.settings.hideBarsDelay)
                }
            },
            clearTimeout: function() {
                t.clearTimeout(this.timeout), this.timeout = null
            },
            showBars: function() {
                var t = n("#swipebox-top-bar, #swipebox-bottom-bar");
                this.doCssTrans() ? t.addClass("visible-bars") : (n("#swipebox-top-bar").animate({
                    top: 0
                }, 500), n("#swipebox-bottom-bar").animate({
                    bottom: 0
                }, 500), setTimeout(function() {
                    t.addClass("visible-bars")
                }, 1e3))
            },
            hideBars: function() {
                var t = n("#swipebox-top-bar, #swipebox-bottom-bar");
                this.doCssTrans() ? t.removeClass("visible-bars") : (n("#swipebox-top-bar").animate({
                    top: "-50px"
                }, 500), n("#swipebox-bottom-bar").animate({
                    bottom: "-50px"
                }, 500), setTimeout(function() {
                    t.removeClass("visible-bars")
                }, 1e3))
            },
            animBars: function() {
                var t = this,
                    e = n("#swipebox-top-bar, #swipebox-bottom-bar");
                e.addClass("visible-bars"), t.setTimeout(), n("#swipebox-slider").click(function() {
                    e.hasClass("visible-bars") || (t.showBars(), t.setTimeout())
                }), n("#swipebox-bottom-bar").hover(function() {
                    t.showBars(), e.addClass("visible-bars"), t.clearTimeout()
                }, function() {
                    u.settings.hideBarsDelay > 0 && (e.removeClass("visible-bars"), t.setTimeout())
                })
            },
            keyboard: function() {
                var e = this;
                n(t).bind("keyup", function(t) {
                    t.preventDefault(), t.stopPropagation(), 37 === t.keyCode ? e.getPrev() : 39 === t.keyCode ? e.getNext() : 27 === t.keyCode && e.closeSlide()
                })
            },
            actions: function() {
                var t = this,
                    e = "touchend click";
                c.length < 2 ? (n("#swipebox-bottom-bar").hide(), i === c[1] && n("#swipebox-top-bar").hide()) : (n("#swipebox-prev").bind(e, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.getPrev(), t.setTimeout()
                }), n("#swipebox-next").bind(e, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.getNext(), t.setTimeout()
                })), n("#swipebox-close").bind(e, function() {
                    t.closeSlide()
                })
            },
            setSlide: function(t, e) {
                e = e || !1;
                var i = n("#swipebox-slider");
                y = 100 * -t, this.doCssTrans() ? i.css({
                    "-webkit-transform": "translate3d(" + 100 * -t + "%, 0, 0)",
                    transform: "translate3d(" + 100 * -t + "%, 0, 0)"
                }) : i.animate({
                    left: 100 * -t + "%"
                }), n("#swipebox-slider .slide").removeClass("current"), n("#swipebox-slider .slide").eq(t).addClass("current"), this.setTitle(t), e && i.fadeIn(), n("#swipebox-prev, #swipebox-next").removeClass("disabled"), 0 === t ? n("#swipebox-prev").addClass("disabled") : t === c.length - 1 && u.settings.loopAtEnd !== !0 && n("#swipebox-next").addClass("disabled")
            },
            openSlide: function(e) {
                n("html").addClass("swipebox-html"), h ? (n("html").addClass("swipebox-touch"), u.settings.hideCloseButtonOnMobile && n("html").addClass("swipebox-no-close-button")) : n("html").addClass("swipebox-no-touch"), n(t).trigger("resize"), this.setSlide(e, !0)
            },
            preloadMedia: function(t) {
                var e = this,
                    n = null;
                c[t] !== i && (n = c[t].href), e.isVideo(n) ? e.openMedia(t) : setTimeout(function() {
                    e.openMedia(t)
                }, 1e3)
            },
            openMedia: function(t) {
                var e, o, r = this;
                return c[t] !== i && (e = c[t].href), !(0 > t || t >= c.length) && (o = n("#swipebox-slider .slide").eq(t), void(r.isVideo(e) ? o.html(r.getVideo(e)) : (o.addClass("slide-loading"), r.loadMedia(e, function() {
                    o.removeClass("slide-loading"), o.html(this)
                }))))
            },
            setTitle: function(t) {
                var e = null;
                n("#swipebox-title").empty(), c[t] !== i && (e = c[t].title), e ? (n("#swipebox-top-bar").show(), n("#swipebox-title").append(e)) : n("#swipebox-top-bar").hide()
            },
            isVideo: function(t) {
                if (t) {
                    if (t.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || t.match(/vimeo\.com\/([0-9]*)/) || t.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)) return !0;
                    if (t.toLowerCase().indexOf("swipeboxvideo=1") >= 0) return !0
                }
            },
            parseUri: function(t, i) {
                var o = e.createElement("a"),
                    r = {};
                return o.href = decodeURIComponent(t), o.search && (r = JSON.parse('{"' + o.search.toLowerCase().replace("?", "").replace(/&/g, '","').replace(/=/g, '":"') + '"}')), n.isPlainObject(i) && (r = n.extend(r, i, u.settings.queryStringData)), n.map(r, function(t, e) {
                    return t && t > "" ? encodeURIComponent(e) + "=" + encodeURIComponent(t) : void 0
                }).join("&")
            },
            getVideo: function(t) {
                var e = "",
                    n = t.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),
                    i = t.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
                    o = t.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),
                    r = "";
                return n || i ? (i && (n = i), r = s.parseUri(t, {
                    autoplay: u.settings.autoplayVideos ? "1" : "0",
                    v: ""
                }), e = '<iframe width="560" height="315" src="//' + n[1] + "/embed/" + n[2] + "?" + r + '" frameborder="0" allowfullscreen></iframe>') : o ? (r = s.parseUri(t, {
                    autoplay: u.settings.autoplayVideos ? "1" : "0",
                    byline: "0",
                    portrait: "0",
                    color: u.settings.vimeoColor
                }), e = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + o[1] + "?" + r + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>') : e = '<iframe width="560" height="315" src="' + t + '" frameborder="0" allowfullscreen></iframe>', '<div class="swipebox-video-container" style="max-width:' + u.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + e + "</div></div>"
            },
            loadMedia: function(t, e) {
                if (0 === t.trim().indexOf("#")) e.call(n("<div>", {
                    class: "swipebox-inline-container"
                }).append(n(t).clone().toggleClass(u.settings.toggleClassOnLoad)));
                else if (!this.isVideo(t)) {
                    var i = n("<img>").on("load", function() {
                        e.call(i)
                    });
                    i.attr("src", t)
                }
            },
            getNext: function() {
                var t, e = this,
                    i = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                i + 1 < c.length ? (t = n("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src"), n("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src", t), i++, e.setSlide(i), e.preloadMedia(i + 1), u.settings.nextSlide && u.settings.nextSlide()) : u.settings.loopAtEnd === !0 ? (t = n("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src"), n("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src", t), i = 0, e.preloadMedia(i), e.setSlide(i), e.preloadMedia(i + 1), u.settings.nextSlide && u.settings.nextSlide()) : (n("#swipebox-overlay").addClass("rightSpring"), setTimeout(function() {
                    n("#swipebox-overlay").removeClass("rightSpring")
                }, 500))
            },
            getPrev: function() {
                var t, e = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                e > 0 ? (t = n("#swipebox-slider .slide").eq(e).contents().find("iframe").attr("src"), n("#swipebox-slider .slide").eq(e).contents().find("iframe").attr("src", t), e--, this.setSlide(e), this.preloadMedia(e - 1), u.settings.prevSlide && u.settings.prevSlide()) : (n("#swipebox-overlay").addClass("leftSpring"), setTimeout(function() {
                    n("#swipebox-overlay").removeClass("leftSpring")
                }, 500))
            },
            nextSlide: function() {},
            prevSlide: function() {},
            closeSlide: function() {
                n("html").removeClass("swipebox-html"), n("html").removeClass("swipebox-touch"), n(t).trigger("resize"), this.destroy()
            },
            destroy: function() {
                n(t).unbind("keyup"), n("body").unbind("touchstart"), n("body").unbind("touchmove"), n("body").unbind("touchend"), n("#swipebox-slider").unbind(), n("#swipebox-overlay").remove(), n.isArray(o) || o.removeData("_swipebox"), this.target && this.target.trigger("swipebox-destroy"), n.swipebox.isOpen = !1, u.settings.afterClose && u.settings.afterClose()
            }
        }, u.init()
    }, n.fn.swipebox = function(t) {
        if (!n.data(this, "_swipebox")) {
            var e = new n.swipebox(this, t);
            this.data("_swipebox", e)
        }
        return this.data("_swipebox")
    }
}(window, document, jQuery), ! function(t, e, n) {
    "use strict";
    ! function t(e, n, i) {
        function o(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (r) return r(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, function(t) {
                    var n = e[s][1][t];
                    return o(n ? n : t)
                }, c, c.exports, t, e, n, i)
            }
            return n[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) o(i[s]);
        return o
    }({
        1: [function(i) {
            var o, r, s, a, l = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                },
                u = i("./modules/handle-dom"),
                c = i("./modules/utils"),
                d = i("./modules/handle-swal-dom"),
                p = i("./modules/handle-click"),
                f = i("./modules/handle-key"),
                h = l(f),
                m = i("./modules/default-params"),
                g = l(m),
                v = i("./modules/set-params"),
                y = l(v);
            s = a = function() {
                function i(t) {
                    var e = s;
                    return e[t] === n ? g.default[t] : e[t]
                }
                var s = arguments[0];
                if (u.addClass(e.body, "stop-scrolling"), d.resetInput(), s === n) return c.logStr("SweetAlert expects at least 1 attribute!"), !1;
                var l = c.extend({}, g.default);
                switch (typeof s) {
                    case "string":
                        l.title = s, l.text = arguments[1] || "", l.type = arguments[2] || "";
                        break;
                    case "object":
                        if (s.title === n) return c.logStr('Missing "title" argument!'), !1;
                        l.title = s.title;
                        for (var f in g.default) l[f] = i(f);
                        l.confirmButtonText = l.showCancelButton ? "Confirm" : g.default.confirmButtonText, l.confirmButtonText = i("confirmButtonText"), l.doneFunction = arguments[1] || null;
                        break;
                    default:
                        return c.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof s), !1
                }
                y.default(l), d.fixVerticalPosition(), d.openModal(arguments[1]);
                for (var m = d.getModal(), v = m.querySelectorAll("button"), b = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], x = function(t) {
                        return p.handleButton(t, l, m)
                    }, w = 0; w < v.length; w++)
                    for (var T = 0; T < b.length; T++) {
                        var C = b[T];
                        v[w][C] = x
                    }
                d.getOverlay().onclick = x, o = t.onkeydown;
                var S = function(t) {
                    return h.default(t, l, m)
                };
                t.onkeydown = S, t.onfocus = function() {
                    setTimeout(function() {
                        r !== n && (r.focus(), r = n)
                    }, 0)
                }, a.enableButtons()
            }, s.setDefaults = a.setDefaults = function(t) {
                if (!t) throw new Error("userParams is required");
                if ("object" != typeof t) throw new Error("userParams has to be a object");
                c.extend(g.default, t)
            }, s.close = a.close = function() {
                var i = d.getModal();
                u.fadeOut(d.getOverlay(), 5), u.fadeOut(i, 5), u.removeClass(i, "showSweetAlert"), u.addClass(i, "hideSweetAlert"), u.removeClass(i, "visible");
                var s = i.querySelector(".sa-icon.sa-success");
                u.removeClass(s, "animate"), u.removeClass(s.querySelector(".sa-tip"), "animateSuccessTip"), u.removeClass(s.querySelector(".sa-long"), "animateSuccessLong");
                var a = i.querySelector(".sa-icon.sa-error");
                u.removeClass(a, "animateErrorIcon"), u.removeClass(a.querySelector(".sa-x-mark"), "animateXMark");
                var l = i.querySelector(".sa-icon.sa-warning");
                return u.removeClass(l, "pulseWarning"), u.removeClass(l.querySelector(".sa-body"), "pulseWarningIns"), u.removeClass(l.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
                    var t = i.getAttribute("data-custom-class");
                    u.removeClass(i, t)
                }, 300), u.removeClass(e.body, "stop-scrolling"), t.onkeydown = o, t.previousActiveElement && t.previousActiveElement.focus(), r = n, clearTimeout(i.timeout), !0
            }, s.showInputError = a.showInputError = function(t) {
                var e = d.getModal(),
                    n = e.querySelector(".sa-input-error");
                u.addClass(n, "show");
                var i = e.querySelector(".sa-error-container");
                u.addClass(i, "show"), i.querySelector("p").innerHTML = t, setTimeout(function() {
                    s.enableButtons()
                }, 1), e.querySelector("input").focus()
            }, s.resetInputError = a.resetInputError = function(t) {
                if (t && 13 === t.keyCode) return !1;
                var e = d.getModal(),
                    n = e.querySelector(".sa-input-error");
                u.removeClass(n, "show");
                var i = e.querySelector(".sa-error-container");
                u.removeClass(i, "show")
            }, s.disableButtons = a.disableButtons = function() {
                var t = d.getModal(),
                    e = t.querySelector("button.confirm"),
                    n = t.querySelector("button.cancel");
                e.disabled = !0, n.disabled = !0
            }, s.enableButtons = a.enableButtons = function() {
                var t = d.getModal(),
                    e = t.querySelector("button.confirm"),
                    n = t.querySelector("button.cancel");
                e.disabled = !1, n.disabled = !1
            }, "undefined" != typeof t ? t.sweetAlert = t.swal = s : c.logStr("SweetAlert is a frontend module!")
        }, {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }],
        2: [function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            };
            n.default = i, e.exports = n.default
        }, {}],
        3: [function(e, n, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = e("./utils"),
                r = (e("./handle-swal-dom"), e("./handle-dom")),
                s = function(e, n, i) {
                    function s(t) {
                        h && n.confirmButtonColor && (f.style.backgroundColor = t)
                    }
                    var u, c, d, p = e || t.event,
                        f = p.target || p.srcElement,
                        h = -1 !== f.className.indexOf("confirm"),
                        m = -1 !== f.className.indexOf("sweet-overlay"),
                        g = r.hasClass(i, "visible"),
                        v = n.doneFunction && "true" === i.getAttribute("data-has-done-function");
                    switch (h && n.confirmButtonColor && (u = n.confirmButtonColor, c = o.colorLuminance(u, -.04), d = o.colorLuminance(u, -.14)), p.type) {
                        case "mouseover":
                            s(c);
                            break;
                        case "mouseout":
                            s(u);
                            break;
                        case "mousedown":
                            s(d);
                            break;
                        case "mouseup":
                            s(c);
                            break;
                        case "focus":
                            var y = i.querySelector("button.confirm"),
                                b = i.querySelector("button.cancel");
                            h ? b.style.boxShadow = "none" : y.style.boxShadow = "none";
                            break;
                        case "click":
                            var x = i === f,
                                w = r.isDescendant(i, f);
                            if (!x && !w && g && !n.allowOutsideClick) break;
                            h && v && g ? a(i, n) : v && g || m ? l(i, n) : r.isDescendant(i, f) && "BUTTON" === f.tagName && sweetAlert.close()
                    }
                },
                a = function(t, e) {
                    var n = !0;
                    r.hasClass(t, "show-input") && (n = t.querySelector("input").value, n || (n = "")), e.doneFunction(n), e.closeOnConfirm && sweetAlert.close(), e.showLoaderOnConfirm && sweetAlert.disableButtons()
                },
                l = function(t, e) {
                    var n = String(e.doneFunction).replace(/\s/g, ""),
                        i = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
                    i && e.doneFunction(!1), e.closeOnCancel && sweetAlert.close()
                };
            i.default = {
                handleButton: s,
                handleConfirm: a,
                handleCancel: l
            }, n.exports = i.default
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        4: [function(n, i, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = function(t, e) {
                    return new RegExp(" " + e + " ").test(" " + t.className + " ")
                },
                s = function(t, e) {
                    r(t, e) || (t.className += " " + e)
                },
                a = function(t, e) {
                    var n = " " + t.className.replace(/[\t\r\n]/g, " ") + " ";
                    if (r(t, e)) {
                        for (; n.indexOf(" " + e + " ") >= 0;) n = n.replace(" " + e + " ", " ");
                        t.className = n.replace(/^\s+|\s+$/g, "")
                    }
                },
                l = function(t) {
                    var n = e.createElement("div");
                    return n.appendChild(e.createTextNode(t)), n.innerHTML
                },
                u = function(t) {
                    t.style.opacity = "", t.style.display = "block"
                },
                c = function(t) {
                    if (t && !t.length) return u(t);
                    for (var e = 0; e < t.length; ++e) u(t[e])
                },
                d = function(t) {
                    t.style.opacity = "", t.style.display = "none"
                },
                p = function(t) {
                    if (t && !t.length) return d(t);
                    for (var e = 0; e < t.length; ++e) d(t[e])
                },
                f = function(t, e) {
                    for (var n = e.parentNode; null !== n;) {
                        if (n === t) return !0;
                        n = n.parentNode
                    }
                    return !1
                },
                h = function(t) {
                    t.style.left = "-9999px", t.style.display = "block";
                    var e, n = t.clientHeight;
                    return e = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(t).getPropertyValue("padding-top"), 10) : parseInt(t.currentStyle.padding), t.style.left = "", t.style.display = "none", "-" + parseInt((n + e) / 2) + "px"
                },
                m = function(t, e) {
                    if (+t.style.opacity < 1) {
                        e = e || 16, t.style.opacity = 0, t.style.display = "block";
                        var n = +new Date,
                            i = function(t) {
                                function e() {
                                    return t.apply(this, arguments)
                                }
                                return e.toString = function() {
                                    return t.toString()
                                }, e
                            }(function() {
                                t.style.opacity = +t.style.opacity + (new Date - n) / 100, n = +new Date, +t.style.opacity < 1 && setTimeout(i, e)
                            });
                        i()
                    }
                    t.style.display = "block"
                },
                g = function(t, e) {
                    e = e || 16, t.style.opacity = 1;
                    var n = +new Date,
                        i = function(t) {
                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e.toString = function() {
                                return t.toString()
                            }, e
                        }(function() {
                            t.style.opacity = +t.style.opacity - (new Date - n) / 100, n = +new Date, +t.style.opacity > 0 ? setTimeout(i, e) : t.style.display = "none"
                        });
                    i()
                },
                v = function(n) {
                    if ("function" == typeof MouseEvent) {
                        var i = new MouseEvent("click", {
                            view: t,
                            bubbles: !1,
                            cancelable: !0
                        });
                        n.dispatchEvent(i)
                    } else if (e.createEvent) {
                        var o = e.createEvent("MouseEvents");
                        o.initEvent("click", !1, !1), n.dispatchEvent(o)
                    } else e.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
                },
                y = function(e) {
                    "function" == typeof e.stopPropagation ? (e.stopPropagation(), e.preventDefault()) : t.event && t.event.hasOwnProperty("cancelBubble") && (t.event.cancelBubble = !0)
                };
            o.hasClass = r, o.addClass = s, o.removeClass = a, o.escapeHtml = l, o._show = u, o.show = c, o._hide = d, o.hide = p, o.isDescendant = f, o.getTopMargin = h, o.fadeIn = m, o.fadeOut = g, o.fireClick = v, o.stopEventPropagation = y
        }, {}],
        5: [function(e, i, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = e("./handle-dom"),
                s = e("./handle-swal-dom"),
                a = function(e, i, o) {
                    var a = e || t.event,
                        l = a.keyCode || a.which,
                        u = o.querySelector("button.confirm"),
                        c = o.querySelector("button.cancel"),
                        d = o.querySelectorAll("button[tabindex]");
                    if (-1 !== [9, 13, 32, 27].indexOf(l)) {
                        for (var p = a.target || a.srcElement, f = -1, h = 0; h < d.length; h++)
                            if (p === d[h]) {
                                f = h;
                                break
                            }
                        9 === l ? (p = -1 === f ? u : f === d.length - 1 ? d[0] : d[f + 1], r.stopEventPropagation(a), p.focus(), i.confirmButtonColor && s.setFocusStyle(p, i.confirmButtonColor)) : 13 === l ? ("INPUT" === p.tagName && (p = u, u.focus()), p = -1 === f ? u : n) : 27 === l && i.allowEscapeKey === !0 ? (p = c, r.fireClick(p, a)) : p = n
                    }
                };
            o.default = a, i.exports = o.default
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        }],
        6: [function(n, i, o) {
            var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var s = n("./utils"),
                a = n("./handle-dom"),
                l = n("./default-params"),
                u = r(l),
                c = n("./injected-html"),
                d = r(c),
                p = ".sweet-alert",
                f = ".sweet-overlay",
                h = function() {
                    var t = e.createElement("div");
                    for (t.innerHTML = d.default; t.firstChild;) e.body.appendChild(t.firstChild)
                },
                m = function(t) {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e.toString = function() {
                        return t.toString()
                    }, e
                }(function() {
                    var t = e.querySelector(p);
                    return t || (h(), t = m()), t
                }),
                g = function() {
                    var t = m();
                    return t ? t.querySelector("input") : void 0
                },
                v = function() {
                    return e.querySelector(f)
                },
                y = function(t, e) {
                    var n = s.hexToRgb(e);
                    t.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                },
                b = function(n) {
                    var i = m();
                    a.fadeIn(v(), 10), a.show(i), a.addClass(i, "showSweetAlert"), a.removeClass(i, "hideSweetAlert"), t.previousActiveElement = e.activeElement;
                    var o = i.querySelector("button.confirm");
                    o.focus(), setTimeout(function() {
                        a.addClass(i, "visible")
                    }, 500);
                    var r = i.getAttribute("data-timer");
                    if ("null" !== r && "" !== r) {
                        var s = n;
                        i.timeout = setTimeout(function() {
                            var t = (s || null) && "true" === i.getAttribute("data-has-done-function");
                            t ? s(null) : sweetAlert.close()
                        }, r)
                    }
                },
                x = function() {
                    var t = m(),
                        e = g();
                    a.removeClass(t, "show-input"), e.value = u.default.inputValue, e.setAttribute("type", u.default.inputType), e.setAttribute("placeholder", u.default.inputPlaceholder), w()
                },
                w = function(t) {
                    if (t && 13 === t.keyCode) return !1;
                    var e = m(),
                        n = e.querySelector(".sa-input-error");
                    a.removeClass(n, "show");
                    var i = e.querySelector(".sa-error-container");
                    a.removeClass(i, "show")
                },
                T = function() {
                    var t = m();
                    t.style.marginTop = a.getTopMargin(m())
                };
            o.sweetAlertInitialize = h, o.getModal = m, o.getOverlay = v, o.getInput = g, o.setFocusStyle = y, o.openModal = b, o.resetInput = x, o.resetInputError = w, o.fixVerticalPosition = T
        }, {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        }],
        7: [function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
            n.default = i, e.exports = n.default
        }, {}],
        8: [function(t, e, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = t("./utils"),
                r = t("./handle-swal-dom"),
                s = t("./handle-dom"),
                a = ["error", "warning", "info", "success", "input", "prompt"],
                l = function(t) {
                    var e = r.getModal(),
                        i = e.querySelector("h2"),
                        l = e.querySelector("p"),
                        u = e.querySelector("button.cancel"),
                        c = e.querySelector("button.confirm");
                    if (i.innerHTML = t.html ? t.title : s.escapeHtml(t.title).split("\n").join("<br>"), l.innerHTML = t.html ? t.text : s.escapeHtml(t.text || "").split("\n").join("<br>"), t.text && s.show(l), t.customClass) s.addClass(e, t.customClass), e.setAttribute("data-custom-class", t.customClass);
                    else {
                        var d = e.getAttribute("data-custom-class");
                        s.removeClass(e, d), e.setAttribute("data-custom-class", "")
                    }
                    if (s.hide(e.querySelectorAll(".sa-icon")), t.type && !o.isIE8()) {
                        var p = function() {
                            for (var i = !1, o = 0; o < a.length; o++)
                                if (t.type === a[o]) {
                                    i = !0;
                                    break
                                }
                            if (!i) return logStr("Unknown alert type: " + t.type), {
                                v: !1
                            };
                            var l = ["success", "error", "warning", "info"],
                                u = n; - 1 !== l.indexOf(t.type) && (u = e.querySelector(".sa-icon.sa-" + t.type), s.show(u));
                            var c = r.getInput();
                            switch (t.type) {
                                case "success":
                                    s.addClass(u, "animate"), s.addClass(u.querySelector(".sa-tip"), "animateSuccessTip"), s.addClass(u.querySelector(".sa-long"), "animateSuccessLong");
                                    break;
                                case "error":
                                    s.addClass(u, "animateErrorIcon"), s.addClass(u.querySelector(".sa-x-mark"), "animateXMark");
                                    break;
                                case "warning":
                                    s.addClass(u, "pulseWarning"), s.addClass(u.querySelector(".sa-body"), "pulseWarningIns"), s.addClass(u.querySelector(".sa-dot"), "pulseWarningIns");
                                    break;
                                case "input":
                                case "prompt":
                                    c.setAttribute("type", t.inputType), c.value = t.inputValue, c.setAttribute("placeholder", t.inputPlaceholder), s.addClass(e, "show-input"), setTimeout(function() {
                                        c.focus(), c.addEventListener("keyup", swal.resetInputError)
                                    }, 400)
                            }
                        }();
                        if ("object" == typeof p) return p.v
                    }
                    if (t.imageUrl) {
                        var f = e.querySelector(".sa-icon.sa-custom");
                        f.style.backgroundImage = "url(" + t.imageUrl + ")", s.show(f);
                        var h = 80,
                            m = 80;
                        if (t.imageSize) {
                            var g = t.imageSize.toString().split("x"),
                                v = g[0],
                                y = g[1];
                            v && y ? (h = v, m = y) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
                        }
                        f.setAttribute("style", f.getAttribute("style") + "width:" + h + "px; height:" + m + "px")
                    }
                    e.setAttribute("data-has-cancel-button", t.showCancelButton), t.showCancelButton ? u.style.display = "inline-block" : s.hide(u), e.setAttribute("data-has-confirm-button", t.showConfirmButton), t.showConfirmButton ? c.style.display = "inline-block" : s.hide(c), t.cancelButtonText && (u.innerHTML = s.escapeHtml(t.cancelButtonText)), t.confirmButtonText && (c.innerHTML = s.escapeHtml(t.confirmButtonText)), t.confirmButtonColor && (c.style.backgroundColor = t.confirmButtonColor, c.style.borderLeftColor = t.confirmLoadingButtonColor, c.style.borderRightColor = t.confirmLoadingButtonColor, r.setFocusStyle(c, t.confirmButtonColor)), e.setAttribute("data-allow-outside-click", t.allowOutsideClick);
                    var b = !!t.doneFunction;
                    e.setAttribute("data-has-done-function", b), t.animation ? "string" == typeof t.animation ? e.setAttribute("data-animation", t.animation) : e.setAttribute("data-animation", "pop") : e.setAttribute("data-animation", "none"), e.setAttribute("data-timer", t.timer)
                };
            i.default = l, e.exports = i.default
        }, {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        9: [function(e, n, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                },
                r = function(t) {
                    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    return e ? parseInt(e[1], 16) + ", " + parseInt(e[2], 16) + ", " + parseInt(e[3], 16) : null
                },
                s = function() {
                    return t.attachEvent && !t.addEventListener
                },
                a = function(e) {
                    t.console && t.console.log("SweetAlert: " + e)
                },
                l = function(t, e) {
                    t = String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
                    var n, i, o = "#";
                    for (i = 0; 3 > i; i++) n = parseInt(t.substr(2 * i, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * e), 255)).toString(16), o += ("00" + n).substr(n.length);
                    return o
                };
            i.extend = o, i.hexToRgb = r, i.isIE8 = s, i.logStr = a, i.colorLuminance = l
        }, {}]
    }, {}, [1]), "function" == typeof define && define.amd ? define(function() {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
}(window, document), $("#form_configurator input[type=checkbox]").click(function(t) {
    configurator.updateSummary();
}), $(".material_list input[type=radio]").click(function(t) {
    $(t.target).closest(".tab-pane").find("label").each(function() {
        $(this).removeClass("selected")
    }), $(t.target).parent().addClass("selected"), configurator.updateSummary()
}), $("#form_configurator select:not(.impartire)").change(function() {
    configurator.updateSummary()
}), $("#impartire_sezut").on("change", function() {
    var t = $("#impartire_sezut option:selected").attr("rel");
    if ("intreg" != t) {
        var e = $("#impartire_spatar option[rel=" + t + "]");
        e.siblings().attr("disabled", "disabled"), console.log(e), e.removeAttr("disabled"), e.prop("selected", !0)
    } else {
        var e = $("#impartire_spatar option[rel=intreg]");
        e.prop("selected", !0), e.siblings().removeAttr("disabled"), e.removeAttr("disabled")
    }
    configurator.updateSummary()
}), $("#impartire_spatar").on("change", function() {
    configurator.updateSummary()
}), configurator = [], configurator.addToCart = function() {
    // console.log($('#form_configurator').serialize())
    $.ajax({
        method: "POST",
        url: "/configurator-huse-auto/add_to_cart",
        data: $("#form_configurator").serialize(),

    }).done(function(t) {
        var e = jQuery.parseJSON(t);
        e.success ?
            swal({
                title: _translate["Succes"],
                text: e.success,
                type: "success"
            }, function() {
                window.location.href = "/"+_translate['cart'];
            }) : e.title ? sweetAlert(e.title, e.error, "error") : sweetAlert(_translate["Urmatoarele date lipsesc:"], e.error, "error")
    })
}, configurator.updateSummary = function() {
    $("#loading_image").addClass("in"), $.ajax({
        method: "POST",
        url: "/configurator-huse-auto/summary",
        data: $("#form_configurator").serialize()
    }).done(function(t) {
        $("#summary").html(t), configurator.updateImage()
    })
}, configurator.updateImage = function() {
    var url = "/configurator-huse-auto/image";
    if(window.location.href.indexOf('alb') > -1)
        url += '?alb';
    $.ajax({
        method: "POST",
        url: url,
        data: $("#form_configurator").serialize()
    }).done(function(t) {
        $("#left_image").html(t), setTimeout(function() {
            $("#loading_image").removeClass("in")
        }, 500)
    })
}, configurator.updateMaterials = function(t) {
    $.ajax({
        method: "POST",
        url: "/configurator-huse-auto/materials",
        data: {
            car_id: t
        }
    }).done(function(t) {
        $("#configurator_right").html(t)
    })
}, configurator.getCarModels = function(t, e) {
    $.ajax({
        method: "POST",
        url: "/configurator-huse-auto/get_car_models",
        data: {
            marca: t,
            selected: e
        }
    }).done(function(t, open) {
        $("#car_model").html(t), $("#car_model").removeClass('disabled'), $("#car_model").parents().first().removeClass('disabled'), $("#car_model").selectpicker("refresh"), $("#car_model").removeAttr("disabled"), "undefined" != typeof e && configurator.updateSummary()
    })
}, configurator.otherCar = function() {
    console.log("here"), $("#other_car_input").is(":checked") ? $("#other_car").show(300) : $("#other_car").hide(200)
}, $(".number-int").keyup(function() {
    if ($(this).val().indexOf(",") != -1) {
        var t = $(this).val().replace(",", ".");
        $(this).val(t)
    }
    if ($(this).val().indexOf(".") != -1 && $(this).val().split(".")[1].length > 1) {
        if (isNaN(parseFloat(this.value))) return;
        this.value = parseFloat(this.value).toFixed(1)
    }
    return this
}), $(".number-one-digit").keyup(function() {
    if ($(this).val().indexOf(",") != -1) {
        var t = $(this).val().replace(",", ".");
        $(this).val(t)
    }
    if ($(this).val().indexOf(".") != -1 && $(this).val().split(".")[1].length > 1) {
        if (isNaN(parseFloat(this.value))) return;
        this.value = parseFloat(this.value).toFixed(1)
    }
    return this
}), shop = [], shop.addToCart = function() {
    console.log($("#form_configurator").serialize());
    $.ajax({
        method: "POST",
        url: "/add_to_cart",
        data: $("#form_configurator").serialize()
    }).done(function(t) {
        sweetAlert(_translate.Succes, _translate["Produsul a fost adaugat la cos"], "success"), swal({
            title: _translate["Succes"],
            text: _translate["Produsul a fost adaugat la cos"],
            type: "success",
            showCancelButton: !1,
            confirmButtonText: "Ok",
            closeOnConfirm: !1
        }, function() {
            window.location.href = "/"+_translate['cart']
        })
    })
}, shop.removeFromCart = function(t, e) {
    $.get("/" + e + "/shop/remove_product_from_cart/" + t, function(e) {
        $("#cart_row_" + t).remove()
    })
}, shop.updateCart = function(t) {
    console.log($("#cart_form").serialize()), $.ajax({
        method: "POST",
        url: "/" + t + "/shop/cart",
        data: $("#cart_form").serialize()
    }).done(function(t) {
        shop.loadTopCart(), shop.updateCartTotals()
    })
}, shop.updateCartTotals = function(t) {
    $.ajax({
        method: "POST",
        url: "/" + t + "/shop/get_cart_products"
    }).done(function(t) {
        var e = jQuery.parseJSON(t),
            n = 0;
        $.each(e, function(t) {
            var e = parseFloat(this.qty * this.price);
            n += e, $(".cart_product_subtotal_" + t).html(e.toFixed(2))
        }), n = n.toFixed(2), $("#cart_big_total").html(n);
        noty({
            text: "Continutul cosului a fost modificat cu success!",
            layout: "topCenter",
            timeout: 2e3
        })
    })
}, shop.loadTopCart = function(t) {
    $.get("/" + t + "/shop/top_cart", function(t) {
        $("#cart.top_cart").html(t)
    })
}, $(".swipebox").swipebox({
    hideBarsDelay: 0
});
