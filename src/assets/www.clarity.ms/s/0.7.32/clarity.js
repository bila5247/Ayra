/* clarity-js v0.7.32: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get queue() {
                return Fa
            },
            get start() {
                return Ua
            },
            get stop() {
                return Va
            },
            get track() {
                return Pa
            }
        }),
        e = Object.freeze({
            __proto__: null,
            get clone() {
                return hr
            },
            get compute() {
                return pr
            },
            get data() {
                return ir
            },
            get keys() {
                return or
            },
            get reset() {
                return vr
            },
            get start() {
                return dr
            },
            get stop() {
                return mr
            },
            get trigger() {
                return fr
            },
            get update() {
                return gr
            }
        }),
        n = Object.freeze({
            __proto__: null,
            get check() {
                return Or
            },
            get compute() {
                return Tr
            },
            get data() {
                return rr
            },
            get start() {
                return Er
            },
            get stop() {
                return Sr
            },
            get trigger() {
                return Nr
            }
        }),
        a = Object.freeze({
            __proto__: null,
            get compute() {
                return Dr
            },
            get data() {
                return xr
            },
            get log() {
                return Cr
            },
            get reset() {
                return Ar
            },
            get start() {
                return _r
            },
            get stop() {
                return Ir
            },
            get updates() {
                return Mr
            }
        }),
        r = Object.freeze({
            __proto__: null,
            get callbacks() {
                return Rr
            },
            get clear() {
                return qr
            },
            get consent() {
                return Yr
            },
            get data() {
                return jr
            },
            get electron() {
                return Lr
            },
            get id() {
                return Xr
            },
            get metadata() {
                return Wr
            },
            get save() {
                return Ur
            },
            get shortid() {
                return Br
            },
            get start() {
                return Hr
            },
            get stop() {
                return Pr
            }
        }),
        i = Object.freeze({
            __proto__: null,
            get data() {
                return ti
            },
            get envelope() {
                return ai
            },
            get start() {
                return ei
            },
            get stop() {
                return ni
            }
        }),
        o = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            drop: [],
            mask: [],
            unmask: [],
            regions: [],
            cookies: [],
            fraud: !0,
            checksum: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null,
            action: null,
            dob: null,
            delayDom: !1
        };

    function u(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var c = 0;

    function s(t) {
        void 0 === t && (t = null);
        var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now();
        return Math.max(Math.round(e - c), 0)
    }
    var l = "0.7.32";

    function d(t, e) {
        void 0 === e && (e = null);
        for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
            if (a = (a << 5) + a ^ t.charCodeAt(i), i + 1 < t.length) r = (r << 5) + r ^ t.charCodeAt(i + 1)
        }
        return n = Math.abs(a + 11579 * r), (e ? n % Math.pow(2, e) : n).toString(36)
    }
    var f = /\S/gi,
        h = !0,
        p = null,
        v = null,
        g = null;

    function m(t, e, n, a) {
        if (void 0 === a && (a = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case "*T":
                    case "value":
                    case "placeholder":
                    case "click":
                        return function(t) {
                            var e = -1,
                                n = 0,
                                a = !1,
                                r = !1,
                                i = !1,
                                o = null;
                            O();
                            for (var u = 0; u < t.length; u++) {
                                var c = t.charCodeAt(u);
                                if (a = a || c >= 48 && c <= 57, r = r || 64 === c, i = 9 === c || 10 === c || 13 === c || 32 === c, 0 === u || u === t.length - 1 || i) {
                                    if (a || r) {
                                        null === o && (o = t.split(""));
                                        var s = t.substring(e + 1, i ? u : u + 1);
                                        s = h && null !== g ? s.match(g) ? s : k(s, "▪", "▫") : w(s), o.splice(e + 1 - n, s.length, s), n += s.length - 1
                                    }
                                    i && (a = !1, r = !1, e = u)
                                }
                            }
                            return o ? o.join("") : t
                        }(t);
                    case "input":
                    case "change":
                        return E(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case "*T":
                    case "data-":
                        return a ? y(t) : w(t);
                    case "src":
                    case "srcset":
                    case "title":
                    case "alt":
                        return 3 === n ? "" : t;
                    case "value":
                    case "click":
                    case "input":
                    case "change":
                        return E(t);
                    case "placeholder":
                        return w(t)
                }
                break;
            case 4:
                switch (e) {
                    case "*T":
                    case "data-":
                        return a ? y(t) : w(t);
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                        return ""
                }
                break;
            case 5:
                switch (e) {
                    case "*T":
                    case "data-":
                        return k(t, "▪", "▫");
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                    case "src":
                    case "srcset":
                    case "alt":
                    case "title":
                        return ""
                }
        }
        return t
    }

    function b(t, e) {
        if (void 0 === e && (e = !1), e) return "".concat("https://").concat("Electron");
        var n = o.drop;
        if (n && n.length > 0 && t && t.indexOf("?") > 0) {
            var a = t.split("?"),
                r = a[0],
                i = a[1];
            return r + "?" + i.split("&").map((function(t) {
                return n.some((function(e) {
                    return 0 === t.indexOf("".concat(e, "="))
                })) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
            })).join("&")
        }
        return t
    }

    function y(t) {
        var e = t.trim();
        if (e.length > 0) {
            var n = e[0],
                a = t.indexOf(n),
                r = t.substr(0, a),
                i = t.substr(a + e.length);
            return "".concat(r).concat(e.length.toString(36)).concat(i)
        }
        return t
    }

    function w(t) {
        return t.replace(f, "•")
    }

    function k(t, e, n) {
        return O(), t ? t.replace(v, e).replace(p, n) : t
    }

    function E(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }

    function O() {
        if (h && null === p) try {
            p = new RegExp("\\p{N}", "gu"), v = new RegExp("\\p{L}", "gu"), g = new RegExp("\\p{Sc}", "gu")
        } catch (t) {
            h = !1
        }
    }
    var N = null,
        T = null,
        S = !1;

    function x() {
        S && (N = {
            time: s(),
            event: 4,
            data: {
                visible: T.visible,
                docWidth: T.docWidth,
                docHeight: T.docHeight,
                screenWidth: T.screenWidth,
                screenHeight: T.screenHeight,
                scrollX: T.scrollX,
                scrollY: T.scrollY,
                pointerX: T.pointerX,
                pointerY: T.pointerY,
                activityTime: T.activityTime,
                scrollTime: T.scrollTime
            }
        }), T = T || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0,
            scrollTime: 0
        }
    }

    function M(t, e, n, a) {
        switch (t) {
            case 8:
                T.docWidth = e, T.docHeight = n;
                break;
            case 11:
                T.screenWidth = e, T.screenHeight = n;
                break;
            case 10:
                T.scrollX = e, T.scrollY = n, T.scrollTime = a;
                break;
            default:
                T.pointerX = e, T.pointerY = n
        }
        S = !0
    }

    function _(t) {
        T.activityTime = t
    }

    function I(t, e) {
        T.visible = "visible" === e ? 1 : 0, T.visible || _(t), S = !0
    }

    function C() {
        S && kr(4)
    }
    var D = Object.freeze({
            __proto__: null,
            activity: _,
            compute: C,
            reset: x,
            start: function() {
                S = !1, x()
            },
            get state() {
                return N
            },
            stop: function() {
                x()
            },
            track: M,
            visibility: I
        }),
        A = null;

    function j(t, e) {
        ki() && t && "string" == typeof t && t.length < 255 && (A = e && "string" == typeof e && e.length < 255 ? {
            key: t,
            value: e
        } : {
            value: t
        }, kr(24))
    }
    var R, L = null,
        z = null;

    function H(t) {
        t in L || (L[t] = 0), t in z || (z[t] = 0), L[t]++, z[t]++
    }

    function P(t, e) {
        null !== e && (t in L || (L[t] = 0), t in z || (z[t] = 0), L[t] += e, z[t] += e)
    }

    function W(t, e) {
        null !== e && !1 === isNaN(e) && (t in L || (L[t] = 0), (e > L[t] || 0 === L[t]) && (z[t] = e, L[t] = e))
    }

    function X(t, e, n) {
        return window.setTimeout(oi(t), e, n)
    }

    function Y(t) {
        return window.clearTimeout(t)
    }
    var q = 0,
        U = 0,
        F = null;

    function V() {
        F && Y(F), F = X(B, U), q = s()
    }

    function B() {
        var t = s();
        R = {
            gap: t - q
        }, kr(25), R.gap < 3e5 ? F = X(B, U) : bi && (j("clarity", "suspend"), zi(), ["mousemove", "touchstart"].forEach((function(t) {
            return ci(document, t, Oi)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return ci(window, t, Oi)
        })))
    }
    var J = Object.freeze({
            __proto__: null,
            get data() {
                return R
            },
            reset: V,
            start: function() {
                U = 6e4, q = 0
            },
            stop: function() {
                Y(F), q = 0, U = 0
            }
        }),
        K = null;

    function G(t, e) {
        if (t in K) {
            var n = K[t],
                a = n[n.length - 1];
            e - a[0] > 100 ? K[t].push([e, 0]) : a[1] = e - a[0]
        } else K[t] = [
            [e, 0]
        ]
    }

    function Z() {
        kr(36)
    }

    function Q() {
        K = {}
    }
    var $ = Object.freeze({
            __proto__: null,
            compute: Z,
            get data() {
                return K
            },
            reset: Q,
            start: function() {
                K = {}
            },
            stop: function() {
                K = {}
            },
            track: G
        }),
        tt = null;

    function et(t) {
        ki() && o.lean && (o.lean = !1, tt = {
            key: t
        }, Ur(), o.upgrade && o.upgrade(t), kr(3))
    }
    var nt = Object.freeze({
        __proto__: null,
        get data() {
            return tt
        },
        start: function() {
            !o.lean && o.upgrade && o.upgrade("Config"), tt = null
        },
        stop: function() {
            tt = null
        },
        upgrade: et
    });

    function at(t, e, n, a) {
        return new(n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }))
    }

    function rt(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(u) {
            return function(c) {
                return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, u[0] && (o = 0)), o;) try {
                        if (n = 1, a && (r = 2 & u[0] ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, u[1])).done) return r;
                        switch (a = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return o.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = u[1], u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < r[1]) {
                                    o.label = r[1], r = u;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(u);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        u = e.call(t, o)
                    } catch (t) {
                        u = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    var it = null;

    function ot(t, e) {
        ct(t, "string" == typeof e ? [e] : e)
    }

    function ut(t, e, n, a) {
        return void 0 === e && (e = null), void 0 === n && (n = null), void 0 === a && (a = null), at(this, void 0, void 0, (function() {
            var r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return i = {}, [4, dt(t)];
                    case 1:
                        return i.userId = o.sent(), i.userHint = a || ((u = t) && u.length >= 5 ? "".concat(u.substring(0, 2)).concat(k(u.substring(2), "*", "*")) : k(u, "*", "*")), ct("userId", [(r = i).userId]), ct("userHint", [r.userHint]), ct("userType", [ft(t)]), e && (ct("sessionId", [e]), r.sessionId = e), n && (ct("pageId", [n]), r.pageId = n), [2, r]
                }
                var u
            }))
        }))
    }

    function ct(t, e) {
        if (ki() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in it ? it[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            it[t] = n
        }
    }

    function st() {
        kr(34)
    }

    function lt() {
        it = {}
    }

    function dt(t) {
        return at(this, void 0, void 0, (function() {
            var e;
            return rt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 4, , 5]), crypto && t ? [4, crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t))] : [3, 2];
                    case 1:
                        return e = n.sent(), [2, Array.prototype.map.call(new Uint8Array(e), (function(t) {
                            return ("00" + t.toString(16)).slice(-2)
                        })).join("")];
                    case 2:
                        return [2, ""];
                    case 3:
                        return [3, 5];
                    case 4:
                        return n.sent(), [2, ""];
                    case 5:
                        return [2]
                }
            }))
        }))
    }

    function ft(t) {
        return t && t.indexOf("@") > 0 ? "email" : "string"
    }
    var ht = "CompressionStream" in window;

    function pt(t) {
        return at(this, void 0, void 0, (function() {
            var e, n;
            return rt(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), ht ? (e = new ReadableStream({
                            start: function(e) {
                                return at(this, void 0, void 0, (function() {
                                    return rt(this, (function(n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, vt(e)]) : [3, 2];
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function vt(t) {
        return at(this, void 0, void 0, (function() {
            var e, n, a, r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }
    var gt = null;

    function mt(t) {
        try {
            if (!gt) return;
            var e = function(t) {
                try {
                    return JSON.parse(t)
                } catch (t) {
                    return []
                }
            }(t);
            e.forEach((function(t) {
                gt(t)
            }))
        } catch (t) {}
    }
    var bt = [D, a, Object.freeze({
        __proto__: null,
        compute: st,
        get data() {
            return it
        },
        identify: ut,
        reset: lt,
        set: ot,
        start: function() {
            lt()
        },
        stop: function() {
            lt()
        }
    }), n, $, r, i, t, J, nt, e];

    function yt() {
        L = {}, z = {}, H(5), bt.forEach((function(t) {
            return oi(t.start)()
        }))
    }

    function wt() {
        bt.slice().reverse().forEach((function(t) {
            return oi(t.stop)()
        })), L = {}, z = {}
    }

    function kt() {
        st(), C(), Dr(), kr(0), Z(), Tr(), pr()
    }
    var Et, Ot = [];

    function Nt(t, e, n) {
        o.fraud && null !== t && n && n.length >= 5 && (Et = {
            id: t,
            target: e,
            checksum: d(n, 24)
        }, Ot.indexOf(Et.checksum) < 0 && (Ot.push(Et.checksum), tr(41)))
    }
    var Tt = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
        St = {};

    function xt(t, e) {
        var n = t.attributes,
            a = t.prefix ? t.prefix[e] : null,
            r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a).concat(">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r),
                    o = "id" in n && n.id.length > 0 ? n.id : null,
                    u = "BODY" !== t.tag && "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
                        return Mt(t)
                    })).join(".") : null;
                if (u && u.length > 0)
                    if (0 === e) {
                        var c = "".concat(function(t) {
                            for (var e = t.split(">"), n = 0; n < e.length; n++) {
                                var a = e[n].indexOf("~"),
                                    r = e[n].indexOf(".");
                                e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                            }
                            return e.join(">")
                        }(a)).concat(t.tag).concat(".").concat(u);
                        c in St || (St[c] = []), St[c].indexOf(t.id) < 0 && St[c].push(t.id), i = "".concat(c).concat("~").concat(St[c].indexOf(t.id))
                    } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
                return i = o && Mt(o) ? "".concat(function(t) {
                    var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                    if (a < 0) return "";
                    return t.substring(0, t.indexOf(">", a) + 1)
                }(a)).concat("#").concat(o) : i, i
        }
    }

    function Mt(t) {
        if (!t) return !1;
        if (Tt.some((function(e) {
                return t.toLowerCase().indexOf(e) >= 0
            }))) return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !1
        }
        return !0
    }
    var _t = 1,
        It = null,
        Ct = [],
        Dt = [],
        At = {},
        jt = [],
        Rt = [],
        Lt = [],
        zt = [],
        Ht = [],
        Pt = [],
        Wt = null,
        Xt = null,
        Yt = null,
        qt = null;

    function Ut() {
        Vt(), Bt(document, !0)
    }

    function Ft() {
        Vt()
    }

    function Vt() {
        _t = 1, Ct = [], Dt = [], At = {}, jt = [], Rt = [], Lt = "address,password,contact".split(","), zt = "password,secret,pass,social,ssn,code,hidden".split(","), Ht = "radio,checkbox,range,button,reset,submit".split(","), Pt = "INPUT,SELECT,TEXTAREA".split(","), It = new Map, Wt = new WeakMap, Xt = new WeakMap, Yt = new WeakMap, qt = new WeakMap, St = {}
    }

    function Bt(t, e) {
        void 0 === e && (e = !1);
        try {
            e && o.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? Rt.push(t) : jt.push(t.substr(1))
            })), "querySelectorAll" in t && (o.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Ge(t, "".concat(e[0]))
                }))
            })), o.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Yt.set(t, 3)
                }))
            })), o.checksum.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return qt.set(t, e[0])
                }))
            })), Rt.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Yt.set(t, 0)
                }))
            })))
        } catch (t) {
            ar(5, 1, t ? t.name : null)
        }
    }

    function Jt(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = Wt.get(t);
        return !n && e && (n = _t++, Wt.set(t, n)), n || null
    }

    function Kt(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (Xt.set(n.contentDocument, n), e = !0)
            } catch (t) {}
        }
        return e
    }

    function Gt(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && Xt.has(e) ? Xt.get(e) : null
    }

    function Zt(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function Qt(t) {
        var e = t.parent && t.parent in Ct ? Ct[t.parent] : null,
            n = e ? e.selector : null,
            a = t.data,
            r = function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = Ct[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t),
            i = {
                id: t.id,
                tag: a.tag,
                prefix: n,
                position: r,
                attributes: a.attributes
            };
        t.selector = [xt(i, 0), xt(i, 1)], t.hash = t.selector.map((function(t) {
            return t ? d(t) : null
        })), t.hash.forEach((function(e) {
            return At[e] = t.id
        }))
    }

    function $t(t) {
        var e = te(ne(t));
        return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
    }

    function te(t) {
        return It.has(t) ? It.get(t) : null
    }

    function ee(t) {
        var e = Jt(t);
        return e in Ct ? Ct[e] : null
    }

    function ne(t) {
        return t in At ? At[t] : null
    }

    function ae(t) {
        return It.has(Jt(t))
    }

    function re() {
        for (var t = [], e = 0, n = Dt; e < n.length; e++) {
            var a = n[e];
            a in Ct && t.push(Ct[a])
        }
        return Dt = [], t
    }

    function ie(t) {
        It.delete(t);
        var e = t in Ct ? Ct[t] : null;
        if (e && e.children)
            for (var n = 0, a = e.children; n < a.length; n++) {
                ie(a[n])
            }
    }

    function oe(t) {
        for (var e = null; null === e && t.previousSibling;) e = Jt(t.previousSibling), t = t.previousSibling;
        return e
    }

    function ue(t, e, n, a) {
        void 0 === n && (n = !0), void 0 === a && (a = !1);
        var r = Dt.indexOf(t);
        r >= 0 && 1 === e && a ? (Dt.splice(r, 1), Dt.push(t)) : -1 === r && n && Dt.push(t)
    }
    var ce = Object.freeze({
            __proto__: null,
            add: function(t, e, n, a) {
                var r, i = Jt(t, !0),
                    u = e ? Jt(e) : null,
                    c = oe(t),
                    s = null,
                    l = Ze(t) ? i : null,
                    d = qt.has(t) ? qt.get(t) : null,
                    f = o.content ? 1 : 3;
                u >= 0 && Ct[u] && ((s = Ct[u]).children.push(i), l = null === l ? s.region : l, d = null === d ? s.metadata.fraud : d, f = s.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (Ge(t, n.attributes["data-clarity-region"]), l = i), It.set(i, t), Ct[i] = {
                        id: i,
                        parent: u,
                        previous: c,
                        children: [],
                        data: n,
                        selector: null,
                        hash: null,
                        region: l,
                        metadata: {
                            active: !0,
                            suspend: !1,
                            privacy: f,
                            position: null,
                            fraud: d,
                            size: null
                        }
                    },
                    function(t, e, n) {
                        var a = e.data,
                            r = e.metadata,
                            i = r.privacy,
                            o = a.attributes || {},
                            u = a.tag.toUpperCase();
                        switch (!0) {
                            case Pt.indexOf(u) >= 0:
                                var c = o.type,
                                    s = "";
                                Object.keys(o).forEach((function(t) {
                                    return s += o[t].toLowerCase()
                                }));
                                var l = zt.some((function(t) {
                                    return s.indexOf(t) >= 0
                                }));
                                r.privacy = "INPUT" === u && Ht.indexOf(c) >= 0 ? i : l ? 4 : 2;
                                break;
                            case "data-clarity-mask" in o:
                                r.privacy = 3;
                                break;
                            case "data-clarity-unmask" in o:
                                r.privacy = 0;
                                break;
                            case Yt.has(t):
                                r.privacy = Yt.get(t);
                                break;
                            case qt.has(t):
                                r.privacy = 2;
                                break;
                            case "*T" === u:
                                var d = n && n.data ? n.data.tag : "",
                                    f = n && n.selector ? n.selector[1] : "",
                                    h = ["STYLE", "TITLE", "svg:style"];
                                r.privacy = h.includes(d) || jt.some((function(t) {
                                    return f.indexOf(t) >= 0
                                })) ? 0 : i;
                                break;
                            case 1 === i:
                                r.privacy = function(t, e, n) {
                                    if (t && e.some((function(e) {
                                            return t.indexOf(e) >= 0
                                        }))) return 2;
                                    return n.privacy
                                }(o.class, Lt, r)
                        }
                    }(t, Ct[i], s), Qt(Ct[i]), "IMG" === (r = Ct[i]).data.tag && 3 === r.metadata.privacy && (r.metadata.size = []), ue(i, a)
            },
            get: ee,
            getId: Jt,
            getNode: te,
            getValue: function(t) {
                return t in Ct ? Ct[t] : null
            },
            has: ae,
            hashText: $t,
            iframe: Gt,
            lookup: ne,
            parse: Bt,
            sameorigin: Kt,
            start: Ut,
            stop: Ft,
            update: function(t, e, n, a) {
                var r = Jt(t),
                    i = e ? Jt(e) : null,
                    o = oe(t),
                    u = !1,
                    c = !1;
                if (r in Ct) {
                    var s = Ct[r];
                    if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                        u = !0;
                        var l = s.parent;
                        if (s.parent = i, null !== i && i >= 0) {
                            var d = null === o ? 0 : Ct[i].children.indexOf(o) + 1;
                            Ct[i].children.splice(d, 0, r), s.region = Ze(t) ? r : Ct[i].region
                        } else ! function(t, e) {
                            if (t in Ct) {
                                var n = Ct[t];
                                n.metadata.active = !1, n.parent = null, ue(t, e), ie(t)
                            }
                        }(r, a);
                        if (null !== l && l >= 0) {
                            var f = Ct[l].children.indexOf(r);
                            f >= 0 && Ct[l].children.splice(f, 1)
                        }
                        c = !0
                    }
                    for (var h in n) Zt(s.data, n, h) && (u = !0, s.data[h] = n[h]);
                    Qt(s), ue(r, a, u, c)
                }
            },
            updates: re
        }),
        se = 5e3,
        le = {},
        de = [],
        fe = null,
        he = null,
        pe = null;

    function ve() {
        le = {}, de = [], fe = null, he = null
    }

    function ge(t, e) {
        return void 0 === e && (e = 0), at(this, void 0, void 0, (function() {
            var n, a, r;
            return rt(this, (function(i) {
                for (n = 0, a = de; n < a.length; n++)
                    if (a[n].task === t) return [2];
                return r = new Promise((function(n) {
                    de[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: Xr()
                    })
                })), null === fe && null === he && me(), [2, r]
            }))
        }))
    }

    function me() {
        var t = de.shift();
        t && (fe = t, t.task().then((function() {
            t.id === Xr() && (t.resolve(), fe = null, me())
        })).catch((function(e) {
            t.id === Xr() && (e && ar(0, 1, e.name, e.message, e.stack), fe = null, me())
        })))
    }

    function be(t) {
        var e = Ee(t);
        return e in le ? performance.now() - le[e].start > le[e].yield ? 0 : 1 : 2
    }

    function ye(t) {
        le[Ee(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function we(t) {
        var e = performance.now(),
            n = Ee(t),
            a = e - le[n].start;
        P(t.cost, a), H(5), le[n].calls > 0 && P(4, a)
    }

    function ke(t) {
        return at(this, void 0, void 0, (function() {
            var e, n;
            return rt(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return (e = Ee(t)) in le ? (we(t), n = le[e], [4, Oe()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(),
                            function(t) {
                                var e = Ee(t);
                                if (le && le[e]) {
                                    var n = le[e].calls,
                                        a = le[e].yield;
                                    ye(t), le[e].calls = n + 1, le[e].yield = a
                                }
                            }(t), a.label = 2;
                    case 2:
                        return [2, e in le ? 1 : 2]
                }
            }))
        }))
    }

    function Ee(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function Oe() {
        return at(this, void 0, void 0, (function() {
            return rt(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return he ? [4, he] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            Te(t, {
                                timeout: se
                            })
                        }))]
                }
            }))
        }))
    }
    var Ne, Te = window.requestIdleCallback || function(t, e) {
        var n = performance.now(),
            a = new MessageChannel,
            r = a.port1,
            i = a.port2;
        r.onmessage = function(a) {
            var r = performance.now(),
                o = r - n,
                u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                i.postMessage(r)
            }));
            else {
                var c = o > e.timeout;
                t({
                    didTimeout: c,
                    timeRemaining: function() {
                        return c ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }))
    };

    function Se() {
        Ne = null
    }

    function xe() {
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            c = Math.max(n, a, r, i, o, u),
            s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null,
            p = e ? e.offsetHeight : null,
            v = Math.max(s, l, d, f, h, p);
        null !== Ne && c === Ne.width && v === Ne.height || null === c || null === v || (Ne = {
            width: c,
            height: v
        }, We(8))
    }
    var Me = [],
        _e = [],
        Ie = null,
        Ce = null,
        De = null,
        Ae = null,
        je = "clarityAnimationId",
        Re = "clarityOperationCount",
        Le = 20;

    function ze() {
        _e = []
    }

    function He(t, e, n, a, r, i, o) {
        _e.push({
            time: t,
            event: 44,
            data: {
                id: e,
                operation: n,
                keyFrames: a,
                timing: r,
                targetId: i,
                timeline: o
            }
        }), We(44)
    }

    function Pe(t, e) {
        null === t && (t = Animation.prototype[e], Animation.prototype[e] = function() {
            if (ki()) {
                var n = this.effect,
                    a = Jt(this.effect.target);
                if (null !== a && n.getKeyframes && n.getTiming) {
                    if (!this[je]) {
                        this[je] = Br(), this[Re] = 0;
                        var r = n.getKeyframes(),
                            i = n.getTiming();
                        He(s(), this[je], 0, JSON.stringify(r), JSON.stringify(i), a)
                    }
                    if (this[Re]++ < Le) {
                        var o = null;
                        switch (e) {
                            case "play":
                                o = 1;
                                break;
                            case "pause":
                                o = 2;
                                break;
                            case "cancel":
                                o = 3;
                                break;
                            case "finish":
                                o = 4
                        }
                        o && He(s(), this[je], o)
                    }
                }
            }
            return t.apply(this, arguments)
        })
    }

    function We(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), at(this, void 0, void 0, (function() {
            var a, r, i, u, c, l, d, f, h, p, v, g, b, y, w, k, E, O, N, T, S, x, I, C, D, A, j, R, L;
            return rt(this, (function(z) {
                switch (z.label) {
                    case 0:
                        switch (a = n || s(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 45:
                                return [3, 3];
                            case 46:
                                return [3, 4];
                            case 44:
                                return [3, 5];
                            case 5:
                            case 6:
                                return [3, 6]
                        }
                        return [3, 13];
                    case 1:
                        return i = Ne, r.push(i.width), r.push(i.height), M(t, i.width, i.height), Fa(r), [3, 13];
                    case 2:
                        for (u = 0, c = Ue; u < c.length; u++) l = c[u], (r = [l.time, 7]).push(l.data.id), r.push(l.data.interaction), r.push(l.data.visibility), r.push(l.data.name), Fa(r);
                        return nn(), [3, 13];
                    case 3:
                        for (d = 0, f = Me; d < f.length; d++) b = f[d], (r = [b.time, b.event]).push(b.data.id), r.push(b.data.operation), r.push(b.data.newIds), Fa(r);
                        return [3, 13];
                    case 4:
                        for (h = 0, p = Me; h < p.length; h++) b = p[h], (r = [b.time, b.event]).push(b.data.id), r.push(b.data.operation), r.push(b.data.cssRules), Fa(r);
                        z.label = 5;
                    case 5:
                        for (v = 0, g = _e; v < g.length; v++) b = g[v], (r = [b.time, b.event]).push(b.data.id), r.push(b.data.operation), r.push(b.data.keyFrames), r.push(b.data.timing), r.push(b.data.timeline), r.push(b.data.targetId), Fa(r);
                        return ze(), [3, 13];
                    case 6:
                        if (2 === be(e)) return [3, 13];
                        if (!((y = re()).length > 0)) return [3, 12];
                        w = 0, k = y, z.label = 7;
                    case 7:
                        return w < k.length ? (E = k[w], 0 !== (O = be(e)) ? [3, 9] : [4, ke(e)]) : [3, 11];
                    case 8:
                        O = z.sent(), z.label = 9;
                    case 9:
                        if (2 === O) return [3, 11];
                        for (N = E.data, T = E.metadata.active, S = E.metadata.suspend, x = E.metadata.privacy, I = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(E), C = 0, D = T ? ["tag", "attributes", "value"] : ["tag"]; C < D.length; C++)
                            if (N[A = D[C]]) switch (A) {
                                case "tag":
                                    j = Xe(E), R = I ? -1 : 1, r.push(E.id * R), E.parent && T && r.push(E.parent), E.previous && T && r.push(E.previous), r.push(S ? "*M" : N[A]), j && 2 === j.length && r.push("".concat("#").concat(Ye(j[0]), ".").concat(Ye(j[1])));
                                    break;
                                case "attributes":
                                    for (L in N[A]) void 0 !== N[A][L] && r.push(qe(L, N[A][L], x));
                                    break;
                                case "value":
                                    Nt(E.metadata.fraud, E.id, N[A]), r.push(m(N[A], N.tag, x, I))
                            }
                        z.label = 10;
                    case 10:
                        return w++, [3, 7];
                    case 11:
                        6 === t && _(a), Fa(function(t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++)
                                if ("string" == typeof t[i]) {
                                    var o = t[i],
                                        u = n[o] || -1;
                                    u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                                } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !o.lean), z.label = 12;
                    case 12:
                        return [3, 13];
                    case 13:
                        return [2]
                }
            }))
        }))
    }

    function Xe(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = te(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function Ye(t) {
        return t.toString(36)
    }

    function qe(t, e, n) {
        return "".concat(t, "=").concat(m(e, 0 === t.indexOf("data-") ? "data-" : t, n))
    }
    var Ue = [],
        Fe = null,
        Ve = {},
        Be = [],
        Je = !1,
        Ke = null;

    function Ge(t, e) {
        !1 === Fe.has(t) && (Fe.set(t, e), (Ke = null === Ke && Je ? new IntersectionObserver($e, {
            threshold: [0, .05, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
        }) : Ke) && t && t.nodeType === Node.ELEMENT_NODE && Ke.observe(t))
    }

    function Ze(t) {
        return Fe && Fe.has(t)
    }

    function Qe() {
        for (var t = [], e = 0, n = Be; e < n.length; e++) {
            var a = n[e],
                r = Jt(a.node);
            r ? (a.state.data.id = r, Ve[r] = a.state.data, Ue.push(a.state)) : t.push(a)
        }
        Be = t, Ue.length > 0 && We(7)
    }

    function $e(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e],
                r = a.target,
                i = a.boundingClientRect,
                o = a.intersectionRect,
                u = a.rootBounds;
            if (Fe.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? Jt(r) : null,
                    s = c in Ve ? Ve[c] : {
                        id: c,
                        name: Fe.get(r),
                        interaction: 16,
                        visibility: 0
                    },
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                tn(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && Ke && Ke.unobserve(r)
            }
        }
        Ue.length > 0 && We(7)
    }

    function tn(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in Ve && r || !(e.id in Ve)) && (Ve[e.id] = e, Ue.push(en(e))) : Be.push({
            node: t,
            state: en(e)
        })
    }

    function en(t) {
        return {
            time: s(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }

    function nn() {
        Ue = []
    }
    var an = [];

    function rn(t) {
        var e = Ma(t);
        if (e) {
            var n = e.value,
                a = n && n.length >= 5 && o.fraud && -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type) ? d(n, 24) : "";
            an.push({
                time: s(t),
                event: 42,
                data: {
                    target: Ma(t),
                    type: e.type,
                    value: n,
                    checksum: a
                }
            }), ge(Ia.bind(this, 42))
        }
    }

    function on() {
        an = []
    }

    function un(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    a = null === n ? Gt(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
            } while (t);
        return e
    }
    var cn = ["input", "textarea", "radio", "button", "canvas"],
        sn = [];

    function ln(t) {
        ci(t, "click", dn.bind(this, 9, t), !0)
    }

    function dn(t, e, n) {
        var a = Gt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = un(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var c = Ma(n),
            l = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(c),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var a = t.getBoundingClientRect();
                    a && a.width > 0 && a.height > 0 && (e = {
                        x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(a.width),
                        h: Math.floor(a.height)
                    })
                }
                return e
            }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (sn.push({
            time: s(n),
            event: t,
            data: {
                target: c,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: hn(c),
                context: pn(l),
                text: fn(c),
                link: l ? l.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0
            }
        }), ge(Ia.bind(this, t)))
    }

    function fn(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.replace(/\s+/g, " ").trim().substr(0, 25))
        }
        return e
    }

    function hn(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (cn.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function pn(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function vn() {
        sn = []
    }
    var gn = [];

    function mn(t, e) {
        gn.push({
            time: s(e),
            event: 38,
            data: {
                target: Ma(e),
                action: t
            }
        }), ge(Ia.bind(this, 38))
    }

    function bn() {
        gn = []
    }
    var yn = null,
        wn = [];

    function kn(t) {
        var e = Ma(t),
            n = ee(e);
        if (e && e.type && n) {
            var a = e.value;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    a = e.checked ? "true" : "false"
            }
            var r = {
                target: e,
                value: a
            };
            wn.length > 0 && wn[wn.length - 1].data.target === r.target && wn.pop(), wn.push({
                time: s(t),
                event: 27,
                data: r
            }), Y(yn), yn = X(En, 1e3, 27)
        }
    }

    function En(t) {
        ge(Ia.bind(this, t))
    }

    function On() {
        wn = []
    }
    var Nn, Tn = [],
        Sn = null;

    function xn(t, e, n) {
        var a = Gt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = un(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && _n({
            time: s(n),
            event: t,
            data: {
                target: Ma(n),
                x: i,
                y: o
            }
        })
    }

    function Mn(t, e, n) {
        var a = Gt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = s(n);
        if (i)
            for (var u = 0; u < i.length; u++) {
                var c = i[u],
                    l = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
                    d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
                l = l && a ? l + Math.round(a.offsetLeft) : l, d = d && a ? d + Math.round(a.offsetTop) : d, null !== l && null !== d && _n({
                    time: o,
                    event: t,
                    data: {
                        target: Ma(n),
                        x: l,
                        y: d
                    }
                })
            }
    }

    function _n(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = Tn.length,
                    n = e > 1 ? Tn[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        a = t.data.y - e.data.y,
                        r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && Tn.pop(), Tn.push(t), Y(Sn), Sn = X(In, 500, t.event);
                break;
            default:
                Tn.push(t), In(t.event)
        }
    }

    function In(t) {
        ge(Ia.bind(this, t))
    }

    function Cn() {
        Tn = []
    }

    function Dn() {
        var t = document.documentElement;
        Nn = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, Ia(11)
    }

    function An() {
        Nn = null
    }
    var jn = [],
        Rn = null;

    function Ln(t) {
        void 0 === t && (t = null);
        var e = window,
            n = document.documentElement,
            a = t ? Ma(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = Gt(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = window.innerWidth,
            c = window.innerHeight,
            l = u / 3,
            d = u > c ? .15 * c : .2 * c,
            f = c - d,
            h = zn(l, d),
            p = zn(l, f),
            v = {
                time: s(t),
                event: 10,
                data: {
                    target: a,
                    x: i,
                    y: o,
                    top: h,
                    bottom: p
                }
            };
        if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
            var g = jn.length,
                m = g > 1 ? jn[g - 2] : null;
            m && function(t, e) {
                var n = t.data.x - e.data.x,
                    a = t.data.y - e.data.y;
                return n * n + a * a < 400 && e.time - t.time < 25
            }(m, v) && jn.pop(), jn.push(v), Y(Rn), Rn = X(Hn, 500, 10)
        }
    }

    function zn(t, e) {
        var n, a, r, i, o;
        return "caretPositionFromPoint" in document ? o = null === (n = document.caretPositionFromPoint(t, e)) || void 0 === n ? void 0 : n.offsetNode : "caretRangeFromPoint" in document && (o = null === (a = document.caretRangeFromPoint(t, e)) || void 0 === a ? void 0 : a.startContainer), o || (o = document.elementFromPoint(t, e)), o && o.nodeType === Node.TEXT_NODE && (o = o.parentNode), null === (i = null === (r = ee(o)) || void 0 === r ? void 0 : r.hash) || void 0 === i ? void 0 : i[1]
    }

    function Hn(t) {
        ge(Ia.bind(this, t))
    }
    var Pn = null,
        Wn = null,
        Xn = null;

    function Yn(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = Pn.start ? Pn.start : null;
            null !== Wn && null !== Pn.start && n !== e.anchorNode && (Y(Xn), qn(21)), Pn = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, Wn = e, Y(Xn), Xn = X(qn, 500, 21)
        }
    }

    function qn(t) {
        ge(Ia.bind(this, t))
    }

    function Un() {
        Wn = null, Pn = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    var Fn, Vn, Bn = [];

    function Jn(t) {
        Bn.push({
            time: s(t),
            event: 39,
            data: {
                target: Ma(t)
            }
        }), ge(Ia.bind(this, 39))
    }

    function Kn() {
        Bn = []
    }

    function Gn(t) {
        Fn = {
            name: t.type
        }, Ia(26, s(t)), zi()
    }

    function Zn() {
        Fn = null
    }

    function Qn(t) {
        void 0 === t && (t = null), Vn = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, Ia(28, s(t))
    }

    function $n() {
        Vn = null
    }

    function ta(t) {
        ! function(t) {
            var e = Gt(t);
            ci(e ? e.contentWindow : t === document ? window : t, "scroll", Ln, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (ln(t), function(t) {
            ci(t, "cut", mn.bind(this, 0), !0), ci(t, "copy", mn.bind(this, 1), !0), ci(t, "paste", mn.bind(this, 2), !0)
        }(t), function(t) {
            ci(t, "mousedown", xn.bind(this, 13, t), !0), ci(t, "mouseup", xn.bind(this, 14, t), !0), ci(t, "mousemove", xn.bind(this, 12, t), !0), ci(t, "wheel", xn.bind(this, 15, t), !0), ci(t, "dblclick", xn.bind(this, 16, t), !0), ci(t, "touchstart", Mn.bind(this, 17, t), !0), ci(t, "touchend", Mn.bind(this, 18, t), !0), ci(t, "touchmove", Mn.bind(this, 19, t), !0), ci(t, "touchcancel", Mn.bind(this, 20, t), !0)
        }(t), function(t) {
            ci(t, "input", kn, !0)
        }(t), function(t) {
            ci(t, "selectstart", Yn.bind(this, t), !0), ci(t, "selectionchange", Yn.bind(this, t), !0)
        }(t), function(t) {
            ci(t, "change", rn, !0)
        }(t), function(t) {
            ci(t, "submit", Jn, !0)
        }(t))
    }
    var ea = Object.freeze({
            __proto__: null,
            observe: ta,
            start: function() {
                Ca = [], Aa(), vn(), bn(), Cn(), On(), ci(window, "resize", Dn), Dn(), ci(document, "visibilitychange", Qn), Qn(), jn = [], Ln(), Un(), on(), Kn(), ci(window, "pagehide", Gn)
            },
            stop: function() {
                Ca = [], Aa(), vn(), bn(), Y(Sn), Tn.length > 0 && In(Tn[Tn.length - 1].event), Y(yn), On(), An(), $n(), Y(Rn), jn = [], Un(), Y(Xn), on(), Kn(), Zn()
            }
        }),
        na = /[^0-9\.]/g;

    function aa(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e],
                r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    Cr(5, t[a]), Cr(8, t.creator), Cr(18, t.headline);
                    break;
                case "product":
                    Cr(5, t[a]), Cr(10, t.name), Cr(12, t.sku), t.brand && Cr(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (W(11, ra(t.ratingValue, 100)), W(18, ra(t.bestRating)), W(19, ra(t.worstRating))), W(12, ra(t.ratingCount)), W(17, ra(t.reviewCount));
                    break;
                case "person":
                    Cr(8, t.name);
                    break;
                case "offer":
                    Cr(7, t.availability), Cr(14, t.itemCondition), Cr(13, t.priceCurrency), Cr(12, t.sku), W(13, ra(t.price));
                    break;
                case "brand":
                    Cr(6, t.name)
            }
            null !== r && "object" == typeof r && aa(r)
        }
    }

    function ra(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(na, "")) * e)
        }
        return null
    }
    var ia = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last"],
        oa = /[\r\n]+/g;

    function ua(t, e, n) {
        var a, r = null;
        if (2 === e && !1 === ae(t)) return r;
        0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode);
        var i = !1 === ae(t) ? "add" : "update",
            o = t.parentElement ? t.parentElement : null,
            u = t.ownerDocument !== document;
        switch (t.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                o = u && t.parentNode ? Gt(t.parentNode) : o;
                var c = t,
                    s = {
                        tag: (u ? "iframe:" : "") + "*D",
                        attributes: {
                            name: c.name,
                            publicId: c.publicId,
                            systemId: c.systemId
                        }
                    };
                ce[i](t, o, s, e);
                break;
            case Node.DOCUMENT_NODE:
                t === document && Bt(document), ca(t);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var l = t;
                if (l.host)
                    if (Bt(l), "function" === typeof l.constructor && l.constructor.toString().indexOf("[native code]") >= 0) {
                        ca(l);
                        var d = {
                            tag: "*S",
                            attributes: {
                                style: ""
                            }
                        };
                        ce[i](t, l.host, d, e)
                    } else ce[i](t, l.host, {
                        tag: "*P",
                        attributes: {}
                    }, e);
                break;
            case Node.TEXT_NODE:
                if (o = o || t.parentNode, "update" === i || o && ae(o) && "STYLE" !== o.tagName && "NOSCRIPT" !== o.tagName) {
                    var f = {
                        tag: "*T",
                        value: t.nodeValue
                    };
                    ce[i](t, o, f, e)
                }
                break;
            case Node.ELEMENT_NODE:
                var h = t,
                    p = h.tagName,
                    v = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a].name;
                                ia.indexOf(r) < 0 && (e[r] = n[a].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(h);
                switch (o = t.parentElement ? t.parentElement : t.parentNode ? t.parentNode : null, "http://www.w3.org/2000/svg" === h.namespaceURI && (p = "svg:" + p), p) {
                    case "HTML":
                        o = u && o ? Gt(o) : null;
                        var g = {
                            tag: (u ? "iframe:" : "") + p,
                            attributes: v
                        };
                        ce[i](t, o, g, e);
                        break;
                    case "SCRIPT":
                        if ("type" in v && "application/ld+json" === v.type) try {
                            aa(JSON.parse(h.text.replace(oa, "")))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        var m = {
                            tag: p,
                            attributes: {},
                            value: ""
                        };
                        ce[i](t, o, m, e);
                        break;
                    case "META":
                        var b = "property" in v ? "property" : "name" in v ? "name" : null;
                        if (b && "content" in v) {
                            var y = v.content;
                            switch (v[b]) {
                                case "og:title":
                                    Cr(20, y);
                                    break;
                                case "og:type":
                                    Cr(19, y);
                                    break;
                                case "generator":
                                    Cr(21, y)
                            }
                        }
                        break;
                    case "HEAD":
                        var w = {
                                tag: p,
                                attributes: v
                            },
                            k = u && (null === (a = t.ownerDocument) || void 0 === a ? void 0 : a.location) ? t.ownerDocument.location : location;
                        w.attributes["*B"] = k.protocol + "//" + k.host + k.pathname, ce[i](t, o, w, e);
                        break;
                    case "BASE":
                        var E = ee(t.parentElement);
                        if (E) {
                            var O = document.createElement("a");
                            O.href = v.href, E.data.attributes["*B"] = O.protocol + "//" + O.host + O.pathname
                        }
                        break;
                    case "STYLE":
                        var N = {
                            tag: p,
                            attributes: v,
                            value: sa(h)
                        };
                        ce[i](t, o, N, e);
                        break;
                    case "IFRAME":
                        var T = t,
                            S = {
                                tag: p,
                                attributes: v
                            };
                        Kt(T) && (! function(t) {
                            !1 === ae(t) && ci(t, "load", xa.bind(this, t, "childList"), !0)
                        }(T), S.attributes["*O"] = "true", T.contentDocument && T.contentWindow && "loading" !== T.contentDocument.readyState && (r = T.contentDocument)), ce[i](t, o, S, e);
                        break;
                    case "LINK":
                        if (Lr && "stylesheet" === v.rel) {
                            for (var x in Object.keys(document.styleSheets)) {
                                var M = document.styleSheets[x];
                                if (M.ownerNode == h) {
                                    var _ = {
                                        tag: "STYLE",
                                        attributes: v,
                                        value: la(M)
                                    };
                                    ce[i](t, o, _, e);
                                    break
                                }
                            }
                            break
                        }
                        var I = {
                            tag: p,
                            attributes: v
                        };
                        ce[i](t, o, I, e);
                        break;
                    case "VIDEO":
                    case "AUDIO":
                    case "SOURCE":
                        "src" in v && v.src.startsWith("data:") && (v.src = "");
                        var C = {
                            tag: p,
                            attributes: v
                        };
                        ce[i](t, o, C, e);
                        break;
                    default:
                        var D = {
                            tag: p,
                            attributes: v
                        };
                        h.shadowRoot && (r = h.shadowRoot), ce[i](t, o, D, e)
                }
        }
        return r
    }

    function ca(t) {
        ae(t) || (! function(t) {
            try {
                var e = u("MutationObserver"),
                    n = e in window ? new window[e](oi(Ea)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), fa.push(n))
            } catch (t) {
                ar(2, 0, t ? t.name : null)
            }
        }(t), ta(t))
    }

    function sa(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0) && (e = la(t.sheet)), e
    }

    function la(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (ar(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }

    function da(t, e, n, a) {
        return at(this, void 0, void 0, (function() {
            var a, r, i, o, u;
            return rt(this, (function(c) {
                switch (c.label) {
                    case 0:
                        a = [t], c.label = 1;
                    case 1:
                        if (!(a.length > 0)) return [3, 4];
                        for (r = a.shift(), i = r.firstChild; i;) a.push(i), i = i.nextSibling;
                        return 0 !== (o = be(e)) ? [3, 3] : [4, ke(e)];
                    case 2:
                        o = c.sent(), c.label = 3;
                    case 3:
                        return 2 === o ? [3, 4] : ((u = ua(r, n)) && a.push(u), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var fa = [],
        ha = [],
        pa = null,
        va = null,
        ga = null,
        ma = [],
        ba = null,
        ya = null,
        wa = {};

    function ka() {
        if (fa = [], ma = [], ba = null, ya = 0, wa = {}, null === pa && (pa = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function() {
                return ki() && Sa(this.ownerNode), pa.apply(this, arguments)
            }), null === va && (va = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function() {
                return ki() && Sa(this.ownerNode), va.apply(this, arguments)
            }), null === ga) {
            ga = Element.prototype.attachShadow;
            try {
                Element.prototype.attachShadow = function() {
                    return ki() ? Sa(ga.apply(this, arguments)) : ga.apply(this, arguments)
                }
            } catch (t) {
                ga = null
            }
        }
    }

    function Ea(t) {
        var e = s();
        G(6, e), ha.push({
            time: e,
            mutations: t
        }), ge(Oa, 1).then((function() {
            X(xe), oi(Qe)()
        }))
    }

    function Oa() {
        return at(this, void 0, void 0, (function() {
            var t, e, n, a, r, i, o, u, c, l;
            return rt(this, (function(d) {
                switch (d.label) {
                    case 0:
                        ye(t = {
                            id: Xr(),
                            cost: 3
                        }), d.label = 1;
                    case 1:
                        if (!(ha.length > 0)) return [3, 8];
                        e = ha.shift(), n = s(), a = 0, r = e.mutations, d.label = 2;
                    case 2:
                        return a < r.length ? (i = r[a], 0 !== (o = be(t)) ? [3, 4] : [4, ke(t)]) : [3, 6];
                    case 3:
                        o = d.sent(), d.label = 4;
                    case 4:
                        if (2 === o) return [3, 6];
                        switch (u = i.target, c = function(t, e, n, a) {
                            var r = t.target ? ee(t.target.parentNode) : null;
                            if (r && "HTML" !== r.data.tag) {
                                var i = s() > ya,
                                    o = ee(t.target),
                                    u = o && o.selector ? o.selector.join() : t.target.nodeName,
                                    c = [r.selector ? r.selector.join() : "", u, t.attributeName, Na(t.addedNodes), Na(t.removedNodes)].join();
                                wa[c] = c in wa ? wa[c] : [0, n];
                                var l = wa[c];
                                if (!1 === i && l[0] >= 10 && Ta(l[2], 2, e), l[0] = i ? l[1] === n ? l[0] : l[0] + 1 : 1, l[1] = n, 10 === l[0]) return l[2] = t.removedNodes, "suspend";
                                if (l[0] > 10) return ""
                            }
                            return t.type
                        }(i, t, n, e.time), c && u && u.ownerDocument && Bt(u.ownerDocument), c && u && u.nodeType == Node.DOCUMENT_FRAGMENT_NODE && u.host && Bt(u), c) {
                            case "attributes":
                                ua(u, 3, e.time);
                                break;
                            case "characterData":
                                ua(u, 4, e.time);
                                break;
                            case "childList":
                                Ta(i.addedNodes, 1, t, e.time), Ta(i.removedNodes, 2, t, e.time);
                                break;
                            case "suspend":
                                (l = ee(u)) && (l.metadata.suspend = !0)
                        }
                        d.label = 5;
                    case 5:
                        return a++, [3, 2];
                    case 6:
                        return [4, We(6, t, e.time)];
                    case 7:
                        return d.sent(), [3, 1];
                    case 8:
                        return we(t), [2]
                }
            }))
        }))
    }

    function Na(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function Ta(t, e, n, a) {
        return at(this, void 0, void 0, (function() {
            var a, r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        a = t ? t.length : 0, r = 0, o.label = 1;
                    case 1:
                        return r < a ? 1 !== e ? [3, 2] : (da(t[r], n, e), [3, 5]) : [3, 6];
                    case 2:
                        return 0 !== (i = be(n)) ? [3, 4] : [4, ke(n)];
                    case 3:
                        i = o.sent(), o.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        ua(t[r], e), o.label = 5;
                    case 5:
                        return r++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function Sa(t) {
        return ma.indexOf(t) < 0 && ma.push(t), ba && Y(ba), ba = X((function() {
            ! function() {
                for (var t = 0, e = ma; t < e.length; t++) {
                    var n = e[t];
                    if (n) {
                        var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (a && ae(n)) continue;
                        xa(n, a ? "childList" : "characterData")
                    }
                }
                ma = []
            }()
        }), 33), t
    }

    function xa(t, e) {
        oi(Ea)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }

    function Ma(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return ya = s() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function _a(t, e, n) {
        void 0 === n && (n = null);
        var a = {
            id: 0,
            hash: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var r = ee(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id, a.hash = r.hash, a.privacy = i.privacy, r.region && function(t, e) {
                    var n = te(t),
                        a = t in Ve ? Ve[t] : {
                            id: t,
                            visibility: 0,
                            interaction: 16,
                            name: Fe.get(n)
                        },
                        r = 16;
                    switch (e) {
                        case 9:
                            r = 20;
                            break;
                        case 27:
                            r = 30
                    }
                    tn(n, a, r, a.visibility)
                }(r.region, e), i.fraud && Nt(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }

    function Ia(t, e) {
        return void 0 === e && (e = null), at(this, void 0, void 0, (function() {
            var n, a, r, i, o, u, c, l, d, f, h, p, v, g, y, w, k, E, O, N, T, S, x, _, C, D, A, j, R, L, z;
            return rt(this, (function(H) {
                switch (n = e || s(), a = [n, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, i = Tn; r < i.length; r++) L = i[r], (o = _a(L.data.target, L.event)).id > 0 && ((a = [L.time, L.event]).push(o.id), a.push(L.data.x), a.push(L.data.y), Fa(a), M(L.event, L.data.x, L.data.y));
                        Cn();
                        break;
                    case 9:
                        for (u = 0, c = sn; u < c.length; u++) L = c[u], l = _a(L.data.target, L.event, L.data.text), a = [L.time, L.event], d = l.hash ? l.hash.join(".") : "", a.push(l.id), a.push(L.data.x), a.push(L.data.y), a.push(L.data.eX), a.push(L.data.eY), a.push(L.data.button), a.push(L.data.reaction), a.push(L.data.context), a.push(m(L.data.text, "click", l.privacy)), a.push(b(L.data.link)), a.push(d), a.push(L.data.trust), Fa(a), ja(L.time, L.event, d, L.data.x, L.data.y, L.data.reaction, L.data.context);
                        vn();
                        break;
                    case 38:
                        for (f = 0, h = gn; f < h.length; f++) L = h[f], a = [L.time, L.event], (A = _a(L.data.target, L.event)).id > 0 && (a.push(A.id), a.push(L.data.action), Fa(a));
                        bn();
                        break;
                    case 11:
                        p = Nn, a.push(p.width), a.push(p.height), M(t, p.width, p.height), An(), Fa(a);
                        break;
                    case 26:
                        v = Fn, a.push(v.name), Zn(), Fa(a);
                        break;
                    case 27:
                        for (g = 0, y = wn; g < y.length; g++) L = y[g], w = _a(L.data.target, L.event, L.data.value), (a = [L.time, L.event]).push(w.id), a.push(m(L.data.value, "input", w.privacy)), Fa(a);
                        On();
                        break;
                    case 21:
                        (k = Pn) && (E = _a(k.start, t), O = _a(k.end, t), a.push(E.id), a.push(k.startOffset), a.push(O.id), a.push(k.endOffset), Un(), Fa(a));
                        break;
                    case 10:
                        for (N = 0, T = jn; N < T.length; N++) L = T[N], (S = _a(L.data.target, L.event)).id > 0 && ((a = [L.time, L.event]).push(S.id), a.push(L.data.x), a.push(L.data.y), a.push(L.data.top), a.push(L.data.bottom), Fa(a), M(L.event, L.data.x, L.data.y, L.time));
                        jn = [];
                        break;
                    case 42:
                        for (x = 0, _ = an; x < _.length; x++) L = _[x], a = [L.time, L.event], (A = _a(L.data.target, L.event)).id > 0 && ((a = [L.time, L.event]).push(A.id), a.push(L.data.type), a.push(m(L.data.value, "change", A.privacy)), a.push(m(L.data.checksum, "checksum", A.privacy)), Fa(a));
                        on();
                        break;
                    case 39:
                        for (C = 0, D = Bn; C < D.length; C++) L = D[C], a = [L.time, L.event], (A = _a(L.data.target, L.event)).id > 0 && (a.push(A.id), Fa(a));
                        Kn();
                        break;
                    case 22:
                        for (j = 0, R = Da; j < R.length; j++) L = R[j], (a = [L.time, L.event]).push(L.data.type), a.push(L.data.hash), a.push(L.data.x), a.push(L.data.y), a.push(L.data.reaction), a.push(L.data.context), Fa(a, !1);
                        Aa();
                        break;
                    case 28:
                        z = Vn, a.push(z.visible), Fa(a), I(n, z.visible), $n()
                }
                return [2]
            }))
        }))
    }
    var Ca = [],
        Da = [];

    function Aa() {
        Da = []
    }

    function ja(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), Ca.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }), M(e, a, r)
    }
    var Ra, La, za, Ha, Pa, Wa = 0,
        Xa = 0,
        Ya = null,
        qa = 0;

    function Ua() {
        Ha = !0, Wa = 0, Xa = 0, qa = 0, Ra = [], La = [], za = {}, Pa = null
    }

    function Fa(t, e) {
        if (void 0 === e && (e = !0), Ha) {
            var n = s(),
                a = t.length > 1 ? t[1] : null,
                r = JSON.stringify(t);
            switch (a) {
                case 5:
                    Wa += r.length;
                case 37:
                case 6:
                case 43:
                case 45:
                case 46:
                    Xa += r.length, Ra.push(r);
                    break;
                default:
                    La.push(r)
            }
            H(25);
            var i = function() {
                var t = !1 === o.lean && Wa > 0 ? 100 : ti.sequence * o.delay;
                return "string" == typeof o.upload ? Math.max(Math.min(t, 3e4), 100) : o.delay
            }();
            n - qa > 2 * i && (Y(Ya), Ya = null), e && null === Ya && (25 !== a && V(), Ya = X(Ba, i), qa = n, Or(Xa))
        }
    }

    function Va() {
        Y(Ya), Ba(!0), Wa = 0, Xa = 0, qa = 0, Ra = [], La = [], za = {}, Pa = null, Ha = !1
    }

    function Ba(t) {
        return void 0 === t && (t = !1), at(this, void 0, void 0, (function() {
            var e, n, a, r, i, u, c, s;
            return rt(this, (function(l) {
                switch (l.label) {
                    case 0:
                        return Ya = null, (e = !1 === o.lean && Xa > 0 && (Xa < 1048576 || ti.sequence > 0)) && W(1, 1), Qe(),
                            function() {
                                var t = [];
                                Da = [];
                                for (var e = ti.start + ti.duration, n = Math.max(e - 2e3, 0), a = 0, r = Ca; a < r.length; a++) {
                                    var i = r[a];
                                    i.time >= n && (i.time <= e && Da.push(i), t.push(i))
                                }
                                Ca = t, Ia(22)
                            }(), kt(), n = !0 === t, a = JSON.stringify(ai(n)), r = "[".concat(La.join(), "]"), i = e ? "[".concat(Ra.join(), "]") : "", u = function(t) {
                                return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                            }({
                                e: a,
                                a: r,
                                p: i
                            }), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, pt(u)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return P(2, (c = s) ? c.length : u.length), Ja(u, c, ti.sequence, n), La = [], e && (Ra = [], Xa = 0, Wa = 0), [2]
                }
            }))
        }))
    }

    function Ja(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof o.upload) {
            var r = o.upload,
                i = !1;
            if (a && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(r, t)) && Ga(n)
            } catch (t) {}
            if (!1 === i) {
                n in za ? za[n].attempts++ : za[n] = {
                    data: t,
                    attempts: 1
                };
                var u = new XMLHttpRequest;
                u.open("POST", r, !0), u.timeout = 15e3, u.ontimeout = function() {
                    ii(new Error("".concat("Timeout", " : ").concat(r)))
                }, null !== n && (u.onreadystatechange = function() {
                    oi(Ka)(u, n)
                }), u.withCredentials = !0, e ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"), u.send(e)) : u.send(t)
            }
        } else if (o.upload) {
            (0, o.upload)(t), Ga(n)
        }
    }

    function Ka(t, e) {
        var n = za[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? Nr(6) : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload), Ja(n.data, null, e)) : (Pa = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && kr(2), 200 === t.status && t.responseText && function(t) {
            for (var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e; n < a.length; n++) {
                var r = a[n],
                    i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                    case "END":
                        Nr(6);
                        break;
                    case "UPGRADE":
                        et("Auto");
                        break;
                    case "ACTION":
                        o.action && i.length > 1 && o.action(i[1]);
                        break;
                    case "EXTRACT":
                        i.length > 1 && fr(i[1]);
                        break;
                    case "SIGNAL":
                        i.length > 1 && mt(i[1])
                }
            }
        }(t.responseText), 0 === t.status && (Ja(n.data, null, e, !0), Nr(3)), t.status >= 200 && t.status <= 208 && Ga(e), delete za[e]))
    }

    function Ga(t) {
        1 === t && Ur()
    }
    var Za, Qa = {};

    function $a(t) {
        var e = t.error || t;
        return e.message in Qa || (Qa[e.message] = 0), Qa[e.message]++ >= 5 || e && e.message && (Za = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, tr(31)), !0
    }

    function tr(t) {
        return at(this, void 0, void 0, (function() {
            var e;
            return rt(this, (function(n) {
                switch (e = [s(), t], t) {
                    case 31:
                        e.push(Za.message), e.push(Za.line), e.push(Za.column), e.push(Za.stack), e.push(b(Za.source)), Fa(e);
                        break;
                    case 33:
                        er && (e.push(er.code), e.push(er.name), e.push(er.message), e.push(er.stack), e.push(er.severity), Fa(e, !1));
                        break;
                    case 41:
                        Et && (e.push(Et.id), e.push(Et.target), e.push(Et.checksum), Fa(e, !1))
                }
                return [2]
            }))
        }))
    }
    var er, nr = {};

    function ar(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in nr && nr[t].indexOf(i) >= 0 || (er = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in nr ? nr[t].push(i) : nr[t] = [i], tr(33))
    }
    var rr, ir = {},
        or = new Set,
        ur = {},
        cr = {},
        sr = {},
        lr = {};

    function dr() {
        vr()
    }

    function fr(t) {
        try {
            var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
                n = e[0].split(/\|(.*)/),
                a = parseInt(n[0]),
                r = n.length > 1 ? n[1] : "",
                i = e.length > 1 ? JSON.parse(e[1]) : {};
            for (var o in ur[a] = {}, cr[a] = {}, sr[a] = {}, lr[a] = r, i) {
                var u = parseInt(o),
                    c = i[o],
                    s = 2;
                switch (c.startsWith("~") ? s = 0 : c.startsWith("!") && (s = 4), s) {
                    case 0:
                        var l = c.substring(1, c.length);
                        ur[a][u] = br(l);
                        break;
                    case 2:
                        cr[a][u] = c;
                        break;
                    case 4:
                        var d = c.substring(1, c.length);
                        sr[a][u] = d
                }
            }
        } catch (t) {
            ar(8, 1, t ? t.name : null)
        }
    }

    function hr(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function pr() {
        try {
            for (var t in ur) {
                var e = parseInt(t);
                if ("" == lr[e] || document.querySelector(lr[e])) {
                    var n = ur[e];
                    for (var a in n) {
                        var r = parseInt(a),
                            i = (h = yr(hr(n[r]))) ? JSON.stringify(h).substring(0, 1e4) : h;
                        i && gr(e, r, i)
                    }
                    var o = cr[e];
                    for (var u in o) {
                        var c = parseInt(u),
                            s = document.querySelectorAll(o[c]);
                        if (s) gr(e, c, Array.from(s).map((function(t) {
                            return t.textContent
                        })).join("<SEP>").substring(0, 1e4))
                    }
                    var l = sr[e];
                    for (var d in l) {
                        var f = parseInt(d);
                        gr(e, f, $t(l[f]).trim().substring(0, 1e4))
                    }
                }
            }
            or.size > 0 && kr(40)
        } catch (t) {
            ar(5, 1, t ? t.name : null)
        }
        var h
    }

    function vr() {
        or.clear()
    }

    function gr(t, e, n) {
        var a, r = !1;
        t in ir || (ir[t] = {}, r = !0), a = sr[t], 0 == Object.keys(a).length || e in ir[t] && ir[t][e] == n || (r = !0), ir[t][e] = n, r && or.add(t)
    }

    function mr() {
        vr()
    }

    function br(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var a = n.shift(),
                r = a.indexOf("["),
                i = a.indexOf("{"),
                o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.substring(i + 1, o) : null
            })
        }
        return e
    }

    function yr(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && wr(r, a.condition)) n = yr(t, r);
            else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if (wr(c, a.condition)) {
                        var s = yr(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function wr(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function kr(t) {
        var e = [s(), t];
        switch (t) {
            case 4:
                var n = N;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), e.push(n.data.scrollTime), Fa(e, !1)), x();
                break;
            case 25:
                e.push(R.gap), Fa(e);
                break;
            case 35:
                e.push(rr.check), Fa(e, !1);
                break;
            case 3:
                e.push(tt.key), Fa(e);
                break;
            case 2:
                e.push(Pa.sequence), e.push(Pa.attempts), e.push(Pa.status), Fa(e, !1);
                break;
            case 24:
                A.key && e.push(A.key), e.push(A.value), Fa(e);
                break;
            case 34:
                var a = Object.keys(it);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(it[o])
                    }
                    lt(), Fa(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(z);
                if (u.length > 0) {
                    for (var c = 0, l = u; c < l.length; c++) {
                        var d = l[c],
                            f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(z[d]))
                    }
                    z = {}, Fa(e, !1)
                }
                break;
            case 1:
                var h = Object.keys(Mr);
                if (h.length > 0) {
                    for (var p = 0, v = h; p < v.length; p++) {
                        var g = v[p];
                        f = parseInt(g, 10);
                        e.push(f), e.push(Mr[g])
                    }
                    Ar(), Fa(e, !1)
                }
                break;
            case 36:
                var m = Object.keys(K);
                if (m.length > 0) {
                    for (var b = 0, y = m; b < y.length; b++) {
                        var w = y[b];
                        f = parseInt(w, 10);
                        e.push(f), e.push([].concat.apply([], K[w]))
                    }
                    Q(), Fa(e, !1)
                }
                break;
            case 40:
                or.forEach((function(t) {
                    e.push(t);
                    var n = [];
                    for (var a in ir[t]) {
                        var r = parseInt(a, 10);
                        n.push(r), n.push(ir[t][a])
                    }
                    e.push(n)
                })), vr(), Fa(e, !1)
        }
    }

    function Er() {
        rr = {
            check: 0
        }
    }

    function Or(t) {
        if (0 === rr.check) {
            var e = rr.check;
            e = ti.sequence >= 128 ? 1 : e, e = ti.pageNum >= 128 ? 7 : e, e = s() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== rr.check && Nr(e)
        }
    }

    function Nr(t) {
        rr.check = t, qr(), zi()
    }

    function Tr() {
        0 !== rr.check && kr(35)
    }

    function Sr() {
        rr = null
    }
    var xr = null,
        Mr = null;

    function _r() {
        xr = {}, Mr = {}
    }

    function Ir() {
        xr = {}, Mr = {}
    }

    function Cr(t, e) {
        e && (e = "".concat(e), t in xr || (xr[t] = []), xr[t].indexOf(e) < 0 && (xr[t].push(e), t in Mr || (Mr[t] = []), Mr[t].push(e), xr[t].length > 128 && Nr(5)))
    }

    function Dr() {
        kr(1)
    }

    function Ar() {
        Mr = {}
    }
    var jr = null,
        Rr = [],
        Lr = 0,
        zr = null;

    function Hr() {
        zr = null;
        var t = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            e = document && document.title ? document.title : "";
        Lr = t.indexOf("Electron") > 0 ? 1 : 0;
        var n, a = function() {
                var t = {
                        session: Br(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = Gr("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - Jr(n[1]) < 18e5 && (t.session = n[0], t.count = Jr(n[2]) + 1, t.upgrade = Jr(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(),
            r = Kr(),
            i = o.projectId || d(location.host);
        jr = {
            projectId: i,
            userId: r.id,
            sessionId: a.session,
            pageNum: a.count
        }, o.lean = o.track && null !== a.upgrade ? 0 === a.upgrade : o.lean, o.upload = o.track && "string" == typeof o.upload && a.upload && a.upload.length > "https://".length ? a.upload : o.upload, Cr(0, t), Cr(3, e), Cr(1, b(location.href, !!Lr)), Cr(2, document.referrer), Cr(15, function() {
            var t = Br();
            if (o.track && Fr(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), Cr(16, document.documentElement.lang), Cr(17, document.dir), Cr(26, "".concat(window.devicePixelRatio)), Cr(28, r.dob.toString()), Cr(29, r.version.toString()), W(0, a.ts), W(1, 0), W(35, Lr), navigator && (Cr(9, navigator.language), W(33, navigator.hardwareConcurrency), W(32, navigator.maxTouchPoints), W(34, Math.round(navigator.deviceMemory)), (n = navigator.userAgentData) && n.getHighEntropyValues ? n.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            Cr(22, t.platform), Cr(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                Cr(24, t.name + "~" + t.version)
            })), Cr(25, t.model), W(27, t.mobile ? 1 : 0)
        })) : Cr(22, navigator.platform)), screen && (W(14, Math.round(screen.width)), W(15, Math.round(screen.height)), W(16, Math.round(screen.colorDepth)));
        for (var u = 0, c = o.cookies; u < c.length; u++) {
            var s = c[u],
                l = Gr(s);
            l && ot(s, l)
        }
        Vr(r)
    }

    function Pr() {
        zr = null, jr = null
    }

    function Wr(t, e) {
        void 0 === e && (e = !0);
        var n = o.lean ? 0 : 1;
        jr && (n || !1 === e) ? t(jr, !o.lean) : Rr.push({
            callback: t,
            wait: e
        })
    }

    function Xr() {
        return jr ? [jr.userId, jr.sessionId, jr.pageNum].join(".") : ""
    }

    function Yr(t) {
        if (void 0 === t && (t = !0), !t) return o.track = !1, Qr("_clsk", "", -Number.MAX_VALUE), Qr("_clck", "", -Number.MAX_VALUE), zi(), void window.setTimeout(Li, 250);
        ki() && (o.track = !0, Vr(Kr(), 1))
    }

    function qr() {
        Qr("_clsk", "", 0)
    }

    function Ur() {
        var t = Math.round(Date.now()),
            e = o.upload && "string" == typeof o.upload ? o.upload.replace("https://", "") : "",
            n = o.lean ? 0 : 1;
        ! function(t) {
            Rr.length > 0 && Rr.forEach((function(e) {
                !e.callback || e.wait && !t || e.callback(jr, !o.lean)
            }))
        }(n), Qr("_clsk", [jr.sessionId, t, jr.pageNum, n, e].join("|"), 1)
    }

    function Fr(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function Vr(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5),
            a = 0 === t.dob ? null === o.dob ? 0 : o.dob : t.dob;
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e || t.dob !== a) && Qr("_clck", [jr.userId, 2, n.toString(36), e, a].join("|"), 365)
    }

    function Br() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function Jr(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function Kr() {
        var t = {
                id: Br(),
                version: 0,
                expiry: null,
                consent: 0,
                dob: 0
            },
            e = Gr("_clck");
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var u = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(u), document.cookie = "".concat("_clsk", "=").concat(u)
            }
            n.length > 1 && (t.version = Jr(n[1])), n.length > 2 && (t.expiry = Jr(n[2], 36)), n.length > 3 && 1 === Jr(n[3]) && (t.consent = 1), n.length > 4 && Jr(n[1]) > 1 && (t.dob = Jr(n[4])), o.track = o.track || 1 === t.consent, t.id = o.track ? n[0] : t.id
        }
        return t
    }

    function Gr(t) {
        var e;
        if (Fr(document, "cookie")) {
            var n = document.cookie.split(";");
            if (n)
                for (var a = 0; a < n.length; a++) {
                    var r = n[a].split("=");
                    if (r.length > 1 && r[0] && r[0].trim() === t) {
                        for (var i = Zr(r[1]), o = i[0], u = i[1]; o;) o = (e = Zr(u))[0], u = e[1];
                        return u
                    }
                }
        }
        return null
    }

    function Zr(t) {
        try {
            var e = decodeURIComponent(t);
            return [e != t, e]
        } catch (t) {}
        return [!1, t]
    }

    function Qr(t, e, n) {
        if ((o.track || "" == e) && (navigator && navigator.cookieEnabled || Fr(document, "cookie"))) {
            var a = function(t) {
                    return encodeURIComponent(t)
                }(e),
                r = new Date;
            r.setDate(r.getDate() + n);
            var i = r ? "expires=" + r.toUTCString() : "",
                u = "".concat(t, "=").concat(a).concat(";").concat(i).concat(";path=/");
            try {
                if (null === zr) {
                    for (var c = location.hostname ? location.hostname.split(".") : [], s = c.length - 1; s >= 0; s--)
                        if (zr = ".".concat(c[s]).concat(zr || ""), s < c.length - 1 && (document.cookie = "".concat(u).concat(";").concat("domain=").concat(zr), Gr(t) === e)) return;
                    zr = ""
                }
            } catch (t) {
                zr = ""
            }
            document.cookie = zr ? "".concat(u).concat(";").concat("domain=").concat(zr) : u
        }
    }
    var $r, ti = null;

    function ei() {
        var t = jr;
        ti = {
            version: l,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0
        }
    }

    function ni() {
        ti = null
    }

    function ai(t) {
        return ti.start = ti.start + ti.duration, ti.duration = s() - ti.start, ti.sequence++, ti.upload = t && "sendBeacon" in navigator ? 1 : 0, ti.end = t ? 1 : 0, [ti.version, ti.sequence, ti.start, ti.duration, ti.projectId, ti.userId, ti.sessionId, ti.pageNum, ti.upload, ti.end]
    }

    function ri() {
        $r = []
    }

    function ii(t) {
        if ($r && -1 === $r.indexOf(t.message)) {
            var e = o.report;
            if (e && e.length > 0) {
                var n = {
                    v: ti.version,
                    p: ti.projectId,
                    u: ti.userId,
                    s: ti.sessionId,
                    n: ti.pageNum
                };
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e, !0), a.send(JSON.stringify(n)), $r.push(t.message)
            }
        }
        return t
    }

    function oi(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw ii(t)
            }
            var n = performance.now() - e;
            P(4, n), n > 30 && (H(7), W(6, n))
        }
    }
    var ui = [];

    function ci(t, e, n, a) {
        void 0 === a && (a = !1), n = oi(n);
        try {
            t[u("addEventListener")](e, n, a), ui.push({
                event: e,
                target: t,
                listener: n,
                capture: a
            })
        } catch (t) {}
    }

    function si() {
        for (var t = 0, e = ui; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[u("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {}
        }
        ui = []
    }
    var li = null,
        di = null,
        fi = null,
        hi = 0;

    function pi() {
        return !(hi++ > 20) || (ar(4, 0), !1)
    }

    function vi() {
        hi = 0, fi !== mi() && (zi(), window.setTimeout(gi, 250))
    }

    function gi() {
        Li(), W(29, 1)
    }

    function mi() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var bi = !1;

    function yi() {
        bi = !0, c = performance.now(), ve(), si(), ri(), fi = mi(), hi = 0, ci(window, "popstate", vi), null === li && (li = history.pushState, history.pushState = function() {
            li.apply(this, arguments), ki() && pi() && vi()
        }), null === di && (di = history.replaceState, history.replaceState = function() {
            di.apply(this, arguments), ki() && pi() && vi()
        })
    }

    function wi() {
        fi = null, hi = 0, ri(), si(), ve(), c = 0, bi = !1
    }

    function ki() {
        return bi
    }

    function Ei(t) {
        if (null === t || bi) return !1;
        for (var e in t) e in o && (o[e] = t[e]);
        return !0
    }

    function Oi() {
        Li(), j("clarity", "restart")
    }
    var Ni = Object.freeze({
        __proto__: null,
        start: function() {
            ! function() {
                Ot = [], W(26, navigator.webdriver ? 1 : 0);
                try {
                    W(31, window.top == window.self ? 1 : 2)
                } catch (t) {
                    W(31, 0)
                }
            }(), ci(window, "error", $a), Qa = {}, nr = {}
        },
        stop: function() {
            nr = {}
        }
    });

    function Ti() {
        return at(this, void 0, void 0, (function() {
            var t, e;
            return rt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = s(), ye(e = {
                            id: Xr(),
                            cost: 3
                        }), [4, da(document, e, 0)];
                    case 1:
                        return n.sent(), [4, We(5, e, t)];
                    case 2:
                        return n.sent(), we(e), [2]
                }
            }))
        }))
    }
    var Si = Object.freeze({
        __proto__: null,
        hashText: $t,
        start: function() {
            Se(), xe(), nn(), Ke = null, Fe = new WeakMap, Ve = {}, Be = [], Je = !!window.IntersectionObserver, Ut(), o.delayDom ? ci(window, "load", (function() {
                ka()
            })) : ka(), ge(Ti, 1).then((function() {
                oi(xe)(), oi(Qe)()
            })), window.Animation && window.KeyframeEffect && window.KeyframeEffect.prototype.getKeyframes && window.KeyframeEffect.prototype.getTiming && (ze(), Pe(Ie, "play"), Pe(Ce, "pause"), Pe(De, "cancel"), Pe(Ae, "finish"))
        },
        stop: function() {
            nn(), Fe = null, Ve = {}, Be = [], Ke && (Ke.disconnect(), Ke = null), Je = !1, Ft(),
                function() {
                    for (var t = 0, e = fa; t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    fa = [], wa = {}, ha = [], ma = [], ya = 0, ba = null
                }(), Se(), ze()
        }
    });
    var xi, Mi = null;

    function _i() {
        Mi = null
    }

    function Ii(t) {
        Mi = {
                fetchStart: Math.round(t.fetchStart),
                connectStart: Math.round(t.connectStart),
                connectEnd: Math.round(t.connectEnd),
                requestStart: Math.round(t.requestStart),
                responseStart: Math.round(t.responseStart),
                responseEnd: Math.round(t.responseEnd),
                domInteractive: Math.round(t.domInteractive),
                domComplete: Math.round(t.domComplete),
                loadEventStart: Math.round(t.loadEventStart),
                loadEventEnd: Math.round(t.loadEventEnd),
                redirectCount: Math.round(t.redirectCount),
                size: t.transferSize ? t.transferSize : 0,
                type: t.type,
                protocol: t.nextHopProtocol,
                encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
                decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
            },
            function(t) {
                at(this, void 0, void 0, (function() {
                    var e, n;
                    return rt(this, (function(a) {
                        return e = s(), n = [e, t], 29 === t && (n.push(Mi.fetchStart), n.push(Mi.connectStart), n.push(Mi.connectEnd), n.push(Mi.requestStart), n.push(Mi.responseStart), n.push(Mi.responseEnd), n.push(Mi.domInteractive), n.push(Mi.domComplete), n.push(Mi.loadEventStart), n.push(Mi.loadEventEnd), n.push(Mi.redirectCount), n.push(Mi.size), n.push(Mi.type), n.push(Mi.protocol), n.push(Mi.encodedSize), n.push(Mi.decodedSize), _i(), Fa(n)), [2]
                    }))
                }))
            }(29)
    }
    var Ci = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint"];

    function Di() {
        try {
            xi && xi.disconnect(), xi = new PerformanceObserver(oi(Ai));
            for (var t = 0, e = Ci; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && P(9, 0), xi.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            ar(3, 1)
        }
    }

    function Ai(t) {
        ! function(t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                    case "navigation":
                        Ii(a);
                        break;
                    case "resource":
                        var r = a.name;
                        Cr(4, ji(r)), r !== o.upload && r !== o.fallback || W(28, a.duration);
                        break;
                    case "longtask":
                        H(7);
                        break;
                    case "first-input":
                        e && W(10, a.processingStart - a.startTime);
                        break;
                    case "layout-shift":
                        e && !a.hadRecentInput && P(9, 1e3 * a.value);
                        break;
                    case "largest-contentful-paint":
                        e && W(8, a.startTime)
                }
            }
        }(t.getEntries())
    }

    function ji(t) {
        var e = document.createElement("a");
        return e.href = t, e.host
    }
    var Ri = [Ni, Si, ea, Object.freeze({
        __proto__: null,
        start: function() {
            _i(),
                function() {
                    navigator && "connection" in navigator && Cr(27, navigator.connection.effectiveType), window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? ci(window, "load", X.bind(this, Di, 0)) : Di() : ar(3, 0)
                }()
        },
        stop: function() {
            xi && xi.disconnect(), xi = null, _i()
        }
    })];

    function Li(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    var t = navigator && "globalPrivacyControl" in navigator && 1 == navigator.globalPrivacyControl;
                    return !1 === bi && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap && !t
                } catch (t) {
                    return !1
                }
            }() && (Ei(t), yi(), yt(), Ri.forEach((function(t) {
                return oi(t.start)()
            })), null === t && Xi())
    }

    function zi() {
        ki() && (Ri.slice().reverse().forEach((function(t) {
            return oi(t.stop)()
        })), wt(), wi(), void 0 !== Pi && (Pi[Wi] = function() {
            (Pi[Wi].q = Pi[Wi].q || []).push(arguments), "start" === arguments[0] && Pi[Wi].q.unshift(Pi[Wi].q.pop()) && Xi()
        }))
    }
    var Hi = Object.freeze({
            __proto__: null,
            consent: Yr,
            event: j,
            hashText: $t,
            identify: ut,
            metadata: Wr,
            pause: function() {
                ki() && (j("clarity", "pause"), null === he && (he = new Promise((function(t) {
                    pe = t
                }))))
            },
            resume: function() {
                ki() && (he && (pe(), he = null, null === fe && me()), j("clarity", "resume"))
            },
            set: ot,
            signal: function(t) {
                gt = t
            },
            start: Li,
            stop: zi,
            upgrade: et,
            version: l
        }),
        Pi = window,
        Wi = "clarity";

    function Xi() {
        if (void 0 !== Pi) {
            if (Pi[Wi] && Pi[Wi].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var t = Pi[Wi] && Pi[Wi].q || [];
            for (Pi[Wi] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return Hi[t].apply(Hi, e)
                }, Pi[Wi].v = l; t.length > 0;) Pi[Wi].apply(Pi, t.shift())
        }
    }
    Xi()
}();