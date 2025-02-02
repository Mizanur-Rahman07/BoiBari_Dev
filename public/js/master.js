function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}/*! jQuery & Zepto Lazy v1.7.9 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function (t, e) {
    "use strict";

    function r(r, a, i, u, l) {
        function f() {
            L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function () {
                s(!0);
            }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function (t) {
                "resize" === t.type && (w = B = -1), s(t.all);
            }), u.a = function (t) {
                t = c(t), i.push.apply(i, t);
            }, u.g = function () {
                return i = n(i).filter(function () {
                    return !n(this).data(a.loadedName);
                });
            }, u.f = function (t) {
                for (var e = 0; e < t.length; e++) {
                    var r = i.filter(function () {
                        return this === t[e];
                    });
                    r.length && s(!1, r);
                }
            }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e));
        }

        function c(t) {
            var i = a.defaultImage, o = a.placeholder, u = a.imageBase, l = a.srcsetAttribute, f = a.loaderAttribute,
                c = a._f || {};
            t = n(t).filter(function () {
                var t = n(this), r = m(this);
                return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e);
            }).data("plugin_" + a.name, r);
            for (var s = 0, d = t.length; s < d; s++) {
                var A = n(t[s]), g = m(t[s]), h = A.attr(a.imageBaseAttribute) || u;
                g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')");
            }
            return t;
        }

        function s(t, e) {
            if (!i.length) return void (a.autoDestroy && r.destroy());
            for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++) {
                if (t || e || A(o[s])) {
                    var g = n(o[s]), h = m(o[s]), b = g.attr(a.attribute), v = g.attr(a.imageBaseAttribute) || l,
                        p = g.attr(a.loaderAttribute);
                    g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p));
                }
            }
            u && (i = n(i).filter(function () {
                return !n(this).data(c);
            }));
        }

        function d(t, e, r, i) {
            ++z;
            var _o = function o() {
                y("onError", t), p(), _o = n.noop;
            };
            y("beforeLoad", t);
            var u = a.attribute, l = a.srcsetAttribute, f = a.sizesAttribute, c = a.retinaAttribute,
                s = a.removeAttribute, d = a.loadedName, A = t.attr(c);
            if (i) {
                var _g = function g() {
                    s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), _g = n.noop;
                };
                t.off(I).one(I, _o).one(D, _g), y(i, t, function (e) {
                    e ? (t.off(D), _g()) : (t.off(I), _o());
                }) || t.trigger(I);
            } else {
                var h = n(new Image());
                h.one(I, _o).one(D, function () {
                    t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p();
                });
                var m = (L && A ? A : t.attr(u)) || "";
                h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D);
            }
        }

        function A(t) {
            var e = t.getBoundingClientRect(), r = a.scrollDirection, n = a.threshold,
                i = h() + n > e.top && -n < e.bottom, o = g() + n > e.left && -n < e.right;
            return "vertical" === r ? i : "horizontal" === r ? o : i && o;
        }

        function g() {
            return w >= 0 ? w : w = n(t).width();
        }

        function h() {
            return B >= 0 ? B : B = n(t).height();
        }

        function m(t) {
            return t.tagName.toLowerCase();
        }

        function b(t, e) {
            if (e) {
                var r = t.split(",");
                t = "";
                for (var a = 0, n = r.length; a < n; a++) {
                    t += e + r[a].trim() + (a !== n - 1 ? "," : "");
                }
            }
            return t;
        }

        function v(t, e) {
            var n, i = 0;
            return function (o, u) {
                function l() {
                    i = +new Date(), e.call(r, o);
                }

                var f = +new Date() - i;
                n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f);
            };
        }

        function p() {
            --z, i.length || z || y("onFinishedAll");
        }

        function y(t, e, n) {
            return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0);
        }

        var z = 0, w = -1, B = -1, L = !1, T = "afterLoad", D = "load", I = "error", N = "img", E = "src", F = "srcset",
            C = "sizes", O = "background-image";
        "event" === a.bind || o ? f() : n(t).on(D + "." + l, f);
    }

    function a(a, o) {
        var u = this, l = n.extend({}, u.config, o), f = {}, c = l.name + "-" + ++i;
        return u.config = function (t, r) {
            return r === e ? l[t] : (l[t] = r, u);
        }, u.addItems = function (t) {
            return f.a && f.a("string" === n.type(t) ? n(t) : t), u;
        }, u.getItems = function () {
            return f.g ? f.g() : {};
        }, u.update = function (t) {
            return f.e && f.e({}, !t), u;
        }, u.force = function (t) {
            return f.f && f.f("string" === n.type(t) ? n(t) : t), u;
        }, u.loadAll = function () {
            return f.e && f.e({all: !0}, !0), u;
        }, u.destroy = function () {
            return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e;
        }, r(u, l, a, f, c), l.chainable ? a : u;
    }

    var n = t.jQuery || t.Zepto, i = 0, o = !1;
    n.fn.Lazy = n.fn.lazy = function (t) {
        return new a(this, t);
    }, n.Lazy = n.lazy = function (t, r, i) {
        if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
            t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
            for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++) {
                (o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);
            }
            for (var c = 0, s = r.length; c < s; c++) {
                u[r[c]] = t[0];
            }
        }
    }, a.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: t,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: e,
        afterLoad: e,
        onError: e,
        onFinishedAll: e
    }, n(t).on("load", function () {
        o = !0;
    });
}(window);/*! jQuery & Zepto Lazy - All Plugins v1.7.9 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function (t) {
    function a(a, e, r, o) {
        o = o ? o.toUpperCase() : "GET";
        var i;
        "POST" !== o && "PUT" !== o || !a.config("ajaxCreateData") || (i = a.config("ajaxCreateData").apply(a, [e])), t.ajax({
            url: e.attr("data-src"),
            type: "POST" === o || "PUT" === o ? o : "GET",
            data: i,
            dataType: e.attr("data-type") || "html",
            success: function success(t) {
                e.html(t), r(!0), a.config("removeAttribute") && e.removeAttr("data-src data-method data-type");
            },
            error: function error() {
                r(!1);
            }
        });
    }

    t.lazy("ajax", function (t, e) {
        a(this, t, e, t.attr("data-method"));
    }), t.lazy("get", function (t, e) {
        a(this, t, e, "GET");
    }), t.lazy("post", function (t, e) {
        a(this, t, e, "POST");
    }), t.lazy("put", function (t, e) {
        a(this, t, e, "PUT");
    });
}(window.jQuery || window.Zepto), function (t) {
    t.lazy(["av", "audio", "video"], ["audio", "video"], function (a, e) {
        var r = a[0].tagName.toLowerCase();
        if ("audio" === r || "video" === r) {
            var o = a.find("data-src"), i = a.find("data-track"), n = 0, c = function c() {
                ++n === o.length && e(!1);
            }, s = function s() {
                var a = t(this), e = a[0].tagName.toLowerCase(), r = a.prop("attributes"),
                    o = t("data-src" === e ? "<source>" : "<track>");
                "data-src" === e && o.one("error", c), t.each(r, function (t, a) {
                    o.attr(a.name, a.value);
                }), a.replaceWith(o);
            };
            a.one("loadedmetadata", function () {
                e(!0);
            }).off("load error").attr("poster", a.attr("data-poster")), o.length ? o.each(s) : a.attr("data-src") ? (t.each(a.attr("data-src").split(","), function (e, r) {
                var o = r.split("|");
                a.append(t("<source>").one("error", c).attr({src: o[0].trim(), type: o[1].trim()}));
            }), this.config("removeAttribute") && a.removeAttr("data-src")) : e(!1), i.length && i.each(s);
        } else e(!1);
    });
}(window.jQuery || window.Zepto), function (t) {
    t.lazy(["frame", "iframe"], "iframe", function (a, e) {
        var r = this;
        if ("iframe" === a[0].tagName.toLowerCase()) {
            var o = a.attr("data-error-detect");
            "true" !== o && "1" !== o ? (a.attr("src", a.attr("data-src")), r.config("removeAttribute") && a.removeAttr("data-src data-error-detect")) : t.ajax({
                url: a.attr("data-src"),
                dataType: "html",
                crossDomain: !0,
                xhrFields: {withCredentials: !0},
                success: function success(t) {
                    a.html(t).attr("src", a.attr("data-src")), r.config("removeAttribute") && a.removeAttr("data-src data-error-detect");
                },
                error: function error() {
                    e(!1);
                }
            });
        } else e(!1);
    });
}(window.jQuery || window.Zepto), function (t) {
    t.lazy("noop", function () {
    }), t.lazy("noop-success", function (t, a) {
        a(!0);
    }), t.lazy("noop-error", function (t, a) {
        a(!1);
    });
}(window.jQuery || window.Zepto), function (t) {
    function a(a, e, i) {
        var n = a.prop("attributes"), c = t("<" + e + ">");
        return t.each(n, function (t, a) {
            "srcset" !== a.name && a.name !== o || (a.value = r(a.value, i)), c.attr(a.name, a.value);
        }), a.replaceWith(c), c;
    }

    function e(a, e, r) {
        var o = t("<img>").one("load", function () {
            r(!0);
        }).one("error", function () {
            r(!1);
        }).appendTo(a).attr("src", e);
        o.complete && o.load();
    }

    function r(t, a) {
        if (a) {
            var e = t.split(",");
            t = "";
            for (var r = 0, o = e.length; r < o; r++) {
                t += a + e[r].trim() + (r !== o - 1 ? "," : "");
            }
        }
        return t;
    }

    var o = "data-src";
    t.lazy(["pic", "picture"], ["picture"], function (i, n) {
        if ("picture" === i[0].tagName.toLowerCase()) {
            var c = i.find(o), s = i.find("data-img"), d = this.config("imageBase") || "";
            c.length ? (c.each(function () {
                a(t(this), "source", d);
            }), 1 === s.length ? (s = a(s, "img", d), s.on("load", function () {
                n(!0);
            }).on("error", function () {
                n(!1);
            }), s.attr("src", s.attr(o)), this.config("removeAttribute") && s.removeAttr(o)) : i.attr(o) ? (e(i, d + i.attr(o), n), this.config("removeAttribute") && i.removeAttr(o)) : n(!1)) : i.attr("data-srcset") ? (t("<source>").attr({
                media: i.attr("data-media"),
                sizes: i.attr("data-sizes"),
                type: i.attr("data-type"),
                srcset: r(i.attr("data-srcset"), d)
            }).appendTo(i), e(i, d + i.attr(o), n), this.config("removeAttribute") && i.removeAttr(o + " data-srcset data-media data-sizes data-type")) : n(!1);
        } else n(!1);
    });
}(window.jQuery || window.Zepto), function (t) {
    t.lazy(["js", "javascript", "script"], "script", function (t, a) {
        "script" === t[0].tagName.toLowerCase() ? (t.attr("src", t.attr("data-src")), this.config("removeAttribute") && t.removeAttr("data-src")) : a(!1);
    });
}(window.jQuery || window.Zepto), function (t) {
    t.lazy("vimeo", function (t, a) {
        "iframe" === t[0].tagName.toLowerCase() ? (t.attr("src", "https://player.vimeo.com/video/" + t.attr("data-src")), this.config("removeAttribute") && t.removeAttr("data-src")) : a(!1);
    });
}(window.jQuery || window.Zepto), function (t) {
    t.lazy(["yt", "youtube"], function (t, a) {
        "iframe" === t[0].tagName.toLowerCase() ? (t.attr("src", "https://www.youtube.com/embed/" + t.attr("data-src") + "?rel=0&amp;showinfo=0"), this.config("removeAttribute") && t.removeAttr("data-src")) : a(!1);
    });
}(window.jQuery || window.Zepto);/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = t || self).bootstrap = {}, t.jQuery);
}(this, function (t, e) {
    "use strict";

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }

    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
    }

    function o(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), n.push.apply(n, i);
        }
        return n;
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach(function (e) {
                o(t, e, n[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
        }
        return t;
    }

    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;

    function a(t) {
        var n = this, i = !1;
        return e(this).one(l.TRANSITION_END, function () {
            i = !0;
        }), setTimeout(function () {
            i || l.triggerTransitionEnd(n);
        }, t), this;
    }

    var l = {
        TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
            do {
                t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
        }, getSelectorFromElement: function getSelectorFromElement(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
            if (!t) return 0;
            var n = e(t).css("transition-duration"), i = e(t).css("transition-delay"), o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
        }, reflow: function reflow(t) {
            return t.offsetHeight;
        }, triggerTransitionEnd: function triggerTransitionEnd(t) {
            e(t).trigger("transitionend");
        }, supportsTransitionEnd: function supportsTransitionEnd() {
            return Boolean("transitionend");
        }, isElement: function isElement(t) {
            return (t[0] || t).nodeType;
        }, typeCheckConfig: function typeCheckConfig(t, e, n) {
            for (var i in n) {
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i], r = e[i],
                        s = r && l.isElement(r) ? "element" : null === (a = r) || "undefined" == typeof a ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
                }
            }
            var a;
        }, findShadowRoot: function findShadowRoot(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? l.findShadowRoot(t.parentNode) : null;
        }, jQueryDetection: function jQueryDetection() {
            if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }
    };
    l.jQueryDetection(), e.fn.emulateTransitionEnd = a, e.event.special[l.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function handle(t) {
            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
        }
    };
    var c = "alert", u = e.fn[c], h = function () {
        function t(t) {
            this._element = t;
        }

        var n = t.prototype;
        return n.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
        }, n.dispose = function () {
            e.removeData(this._element, "bs.alert"), this._element = null;
        }, n._getRootElement = function (t) {
            var n = l.getSelectorFromElement(t), i = !1;
            return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i;
        }, n._triggerCloseEvent = function (t) {
            var n = e.Event("close.bs.alert");
            return e(t).trigger(n), n;
        }, n._removeElement = function (t) {
            var n = this;
            if (e(t).removeClass("show"), e(t).hasClass("fade")) {
                var i = l.getTransitionDurationFromElement(t);
                e(t).one(l.TRANSITION_END, function (e) {
                    return n._destroyElement(t, e);
                }).emulateTransitionEnd(i);
            } else this._destroyElement(t);
        }, n._destroyElement = function (t) {
            e(t).detach().trigger("closed.bs.alert").remove();
        }, t._jQueryInterface = function (n) {
            return this.each(function () {
                var i = e(this), o = i.data("bs.alert");
                o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this);
            });
        }, t._handleDismiss = function (t) {
            return function (e) {
                e && e.preventDefault(), t.close(this);
            };
        }, i(t, null, [{
            key: "VERSION", get: function get() {
                return "4.5.0";
            }
        }]), t;
    }();
    e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h())), e.fn[c] = h._jQueryInterface, e.fn[c].Constructor = h, e.fn[c].noConflict = function () {
        return e.fn[c] = u, h._jQueryInterface;
    };
    var f = e.fn.button, d = function () {
        function t(t) {
            this._element = t;
        }

        var n = t.prototype;
        return n.toggle = function () {
            var t = !0, n = !0, i = e(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
                var o = this._element.querySelector('input:not([type="hidden"])');
                if (o) {
                    if ("radio" === o.type) if (o.checked && this._element.classList.contains("active")) t = !1; else {
                        var r = i.querySelector(".active");
                        r && e(r).removeClass("active");
                    }
                    t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")), e(o).trigger("change")), o.focus(), n = !1;
                }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && e(this._element).toggleClass("active"));
        }, n.dispose = function () {
            e.removeData(this._element, "bs.button"), this._element = null;
        }, t._jQueryInterface = function (n) {
            return this.each(function () {
                var i = e(this).data("bs.button");
                i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
            });
        }, i(t, null, [{
            key: "VERSION", get: function get() {
                return "4.5.0";
            }
        }]), t;
    }();
    e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        var n = t.target, i = n;
        if (e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) t.preventDefault(); else {
            var o = n.querySelector('input:not([type="hidden"])');
            if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault();
            "LABEL" === i.tagName && o && "checkbox" === o.type && t.preventDefault(), d._jQueryInterface.call(e(n), "toggle");
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        var n = e(t.target).closest(".btn")[0];
        e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
    }), e(window).on("load.bs.button.data-api", function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
            var i = t[e], o = i.querySelector('input:not([type="hidden"])');
            o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
        }
        for (var r = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
            var a = t[r];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active");
        }
    }), e.fn.button = d._jQueryInterface, e.fn.button.Constructor = d, e.fn.button.noConflict = function () {
        return e.fn.button = f, d._jQueryInterface;
    };
    var p = "carousel", m = ".bs.carousel", g = e.fn[p],
        v = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, _ = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, b = {TOUCH: "touch", PEN: "pen"}, y = function () {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
            }

            var n = t.prototype;
            return n.next = function () {
                this._isSliding || this._slide("next");
            }, n.nextWhenVisible = function () {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
            }, n.prev = function () {
                this._isSliding || this._slide("prev");
            }, n.pause = function (t) {
                t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
            }, n.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
            }, n.to = function (t) {
                var n = this;
                this._activeElement = this._element.querySelector(".active.carousel-item");
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one("slid.bs.carousel", function () {
                    return n.to(t);
                }); else {
                    if (i === t) return this.pause(), void this.cycle();
                    var o = t > i ? "next" : "prev";
                    this._slide(o, this._items[t]);
                }
            }, n.dispose = function () {
                e(this._element).off(m), e.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
            }, n._getConfig = function (t) {
                return t = s(s({}, v), t), l.typeCheckConfig(p, t, _), t;
            }, n._handleSwipe = function () {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next();
                }
            }, n._addEventListeners = function () {
                var t = this;
                this._config.keyboard && e(this._element).on("keydown.bs.carousel", function (e) {
                    return t._keydown(e);
                }), "hover" === this._config.pause && e(this._element).on("mouseenter.bs.carousel", function (e) {
                    return t.pause(e);
                }).on("mouseleave.bs.carousel", function (e) {
                    return t.cycle(e);
                }), this._config.touch && this._addTouchEventListeners();
            }, n._addTouchEventListeners = function () {
                var t = this;
                if (this._touchSupported) {
                    var n = function n(e) {
                        t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
                    }, i = function i(e) {
                        t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e);
                        }, 500 + t._config.interval));
                    };
                    e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
                        return t.preventDefault();
                    }), this._pointerEvent ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
                        return n(t);
                    }), e(this._element).on("pointerup.bs.carousel", function (t) {
                        return i(t);
                    }), this._element.classList.add("pointer-event")) : (e(this._element).on("touchstart.bs.carousel", function (t) {
                        return n(t);
                    }), e(this._element).on("touchmove.bs.carousel", function (e) {
                        return function (e) {
                            e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX;
                        }(e);
                    }), e(this._element).on("touchend.bs.carousel", function (t) {
                        return i(t);
                    }));
                }
            }, n._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next();
                }
            }, n._getItemIndex = function (t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t);
            }, n._getItemByDirection = function (t, e) {
                var n = "next" === t, i = "prev" === t, o = this._getItemIndex(e), r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s];
            }, n._triggerSlideEvent = function (t, n) {
                var i = this._getItemIndex(t), o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    r = e.Event("slide.bs.carousel", {relatedTarget: t, direction: n, from: o, to: i});
                return e(this._element).trigger(r), r;
            }, n._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    e(n).removeClass("active");
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && e(i).addClass("active");
                }
            }, n._slide = function (t, n) {
                var i, o, r, s = this, a = this._element.querySelector(".active.carousel-item"), c = this._getItemIndex(a),
                    u = n || a && this._getItemByDirection(t, a), h = this._getItemIndex(u), f = Boolean(this._interval);
                if ("next" === t ? (i = "carousel-item-left", o = "carousel-item-next", r = "left") : (i = "carousel-item-right", o = "carousel-item-prev", r = "right"), u && e(u).hasClass("active")) this._isSliding = !1; else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(u);
                    var d = e.Event("slid.bs.carousel", {relatedTarget: u, direction: r, from: c, to: h});
                    if (e(this._element).hasClass("slide")) {
                        e(u).addClass(o), l.reflow(u), e(a).addClass(i), e(u).addClass(i);
                        var p = parseInt(u.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var m = l.getTransitionDurationFromElement(a);
                        e(a).one(l.TRANSITION_END, function () {
                            e(u).removeClass(i + " " + o).addClass("active"), e(a).removeClass("active " + o + " " + i), s._isSliding = !1, setTimeout(function () {
                                return e(s._element).trigger(d);
                            }, 0);
                        }).emulateTransitionEnd(m);
                    } else e(a).removeClass("active"), e(u).addClass("active"), this._isSliding = !1, e(this._element).trigger(d);
                    f && this.cycle();
                }
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this).data("bs.carousel"), o = s(s({}, v), e(this).data());
                    "object" == _typeof(n) && (o = s(s({}, o), n));
                    var r = "string" == typeof n ? n : o.slide;
                    if (i || (i = new t(this, o), e(this).data("bs.carousel", i)), "number" == typeof n) i.to(n); else if ("string" == typeof r) {
                        if ("undefined" == typeof i[r]) throw new TypeError('No method named "' + r + '"');
                        i[r]();
                    } else o.interval && o.ride && (i.pause(), i.cycle());
                });
            }, t._dataApiClickHandler = function (n) {
                var i = l.getSelectorFromElement(this);
                if (i) {
                    var o = e(i)[0];
                    if (o && e(o).hasClass("carousel")) {
                        var r = s(s({}, e(o).data()), e(this).data()), a = this.getAttribute("data-slide-to");
                        a && (r.interval = !1), t._jQueryInterface.call(e(o), r), a && e(o).data("bs.carousel").to(a), n.preventDefault();
                    }
                }
            }, i(t, null, [{
                key: "VERSION", get: function get() {
                    return "4.5.0";
                }
            }, {
                key: "Default", get: function get() {
                    return v;
                }
            }]), t;
        }();
    e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", y._dataApiClickHandler), e(window).on("load.bs.carousel.data-api", function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
            var o = e(t[n]);
            y._jQueryInterface.call(o, o.data());
        }
    }), e.fn[p] = y._jQueryInterface, e.fn[p].Constructor = y, e.fn[p].noConflict = function () {
        return e.fn[p] = g, y._jQueryInterface;
    };
    var w = "collapse", E = e.fn[w], T = {toggle: !0, parent: ""}, C = {toggle: "boolean", parent: "(string|element)"},
        S = function () {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
                    var r = n[i], s = l.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                            return e === t;
                        });
                    null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(r));
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }

            var n = t.prototype;
            return n.toggle = function () {
                e(this._element).hasClass("show") ? this.hide() : this.show();
            }, n.show = function () {
                var n, i, o = this;
                if (!this._isTransitioning && !e(this._element).hasClass("show") && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
                    return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse");
                })).length && (n = null), !(n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                    var r = e.Event("show.bs.collapse");
                    if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
                        n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
                        var s = this._getDimension();
                        e(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            c = l.getTransitionDurationFromElement(this._element);
                        e(this._element).one(l.TRANSITION_END, function () {
                            e(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[s] = "", o.setTransitioning(!1), e(o._element).trigger("shown.bs.collapse");
                        }).emulateTransitionEnd(c), this._element.style[s] = this._element[a] + "px";
                    }
                }
            }, n.hide = function () {
                var t = this;
                if (!this._isTransitioning && e(this._element).hasClass("show")) {
                    var n = e.Event("hide.bs.collapse");
                    if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", l.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse show");
                        var o = this._triggerArray.length;
                        if (o > 0) for (var r = 0; r < o; r++) {
                            var s = this._triggerArray[r], a = l.getSelectorFromElement(s);
                            if (null !== a) e([].slice.call(document.querySelectorAll(a))).hasClass("show") || e(s).addClass("collapsed").attr("aria-expanded", !1);
                        }
                        this.setTransitioning(!0);
                        this._element.style[i] = "";
                        var c = l.getTransitionDurationFromElement(this._element);
                        e(this._element).one(l.TRANSITION_END, function () {
                            t.setTransitioning(!1), e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                        }).emulateTransitionEnd(c);
                    }
                }
            }, n.setTransitioning = function (t) {
                this._isTransitioning = t;
            }, n.dispose = function () {
                e.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
            }, n._getConfig = function (t) {
                return (t = s(s({}, T), t)).toggle = Boolean(t.toggle), l.typeCheckConfig(w, t, C), t;
            }, n._getDimension = function () {
                return e(this._element).hasClass("width") ? "width" : "height";
            }, n._getParent = function () {
                var n, i = this;
                l.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(n.querySelectorAll(o));
                return e(r).each(function (e, n) {
                    i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
                }), n;
            }, n._addAriaAndCollapsedClass = function (t, n) {
                var i = e(t).hasClass("show");
                n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
            }, t._getTargetFromElement = function (t) {
                var e = l.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null;
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this), o = i.data("bs.collapse"),
                        r = s(s(s({}, T), i.data()), "object" == _typeof(n) && n ? n : {});
                    if (!o && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1), o || (o = new t(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
                        if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]();
                    }
                });
            }, i(t, null, [{
                key: "VERSION", get: function get() {
                    return "4.5.0";
                }
            }, {
                key: "Default", get: function get() {
                    return T;
                }
            }]), t;
        }();
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = e(this), i = l.getSelectorFromElement(this), o = [].slice.call(document.querySelectorAll(i));
        e(o).each(function () {
            var t = e(this), i = t.data("bs.collapse") ? "toggle" : n.data();
            S._jQueryInterface.call(t, i);
        });
    }), e.fn[w] = S._jQueryInterface, e.fn[w].Constructor = S, e.fn[w].noConflict = function () {
        return e.fn[w] = E, S._jQueryInterface;
    };
    var D = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        k = function () {
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) {
                if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            }
            return 0;
        }();
    var N = D && window.Promise ? function (t) {
        var e = !1;
        return function () {
            e || (e = !0, window.Promise.resolve().then(function () {
                e = !1, t();
            }));
        };
    } : function (t) {
        var e = !1;
        return function () {
            e || (e = !0, setTimeout(function () {
                e = !1, t();
            }, k));
        };
    };

    function O(t) {
        return t && "[object Function]" === {}.toString.call(t);
    }

    function A(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n;
    }

    function I(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }

    function x(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body;
        }
        var e = A(t), n = e.overflow, i = e.overflowX, o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(I(t));
    }

    function j(t) {
        return t && t.referenceNode ? t.referenceNode : t;
    }

    var L = D && !(!window.MSInputMethodContext || !document.documentMode),
        P = D && /MSIE 10/.test(navigator.userAgent);

    function F(t) {
        return 11 === t ? L : 10 === t ? P : L || P;
    }

    function R(t) {
        if (!t) return document.documentElement;
        for (var e = F(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) {
            n = (t = t.nextElementSibling).offsetParent;
        }
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === A(n, "position") ? R(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
    }

    function M(t) {
        return null !== t.parentNode ? M(t.parentNode) : t;
    }

    function B(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? t : e, o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && R(s.firstElementChild) !== s ? R(l) : l;
        var c = M(t);
        return c.host ? B(c.host, e) : B(t, M(e).host);
    }

    function q(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft", i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var o = t.ownerDocument.documentElement, r = t.ownerDocument.scrollingElement || o;
            return r[n];
        }
        return t[n];
    }

    function H(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = q(e, "top"), o = q(e, "left"),
            r = n ? -1 : 1;
        return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t;
    }

    function Q(t, e) {
        var n = "x" === e ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
    }

    function W(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], F(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0);
    }

    function U(t) {
        var e = t.body, n = t.documentElement, i = F(10) && getComputedStyle(n);
        return {height: W("Height", e, n, i), width: W("Width", e, n, i)};
    }

    var V = function V(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }, Y = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
        };
    }(), z = function z(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }, X = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) {
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
        }
        return t;
    };

    function K(t) {
        return X({}, t, {right: t.left + t.width, bottom: t.top + t.height});
    }

    function G(t) {
        var e = {};
        try {
            if (F(10)) {
                e = t.getBoundingClientRect();
                var n = q(t, "top"), i = q(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i;
            } else e = t.getBoundingClientRect();
        } catch (t) {
        }
        var o = {left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top},
            r = "HTML" === t.nodeName ? U(t.ownerDocument) : {}, s = r.width || t.clientWidth || o.width,
            a = r.height || t.clientHeight || o.height, l = t.offsetWidth - s, c = t.offsetHeight - a;
        if (l || c) {
            var u = A(t);
            l -= Q(u, "x"), c -= Q(u, "y"), o.width -= l, o.height -= c;
        }
        return K(o);
    }

    function $(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = F(10), o = "HTML" === e.nodeName,
            r = G(t), s = G(e), a = x(t), l = A(e), c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var h = K({top: r.top - s.top - c, left: r.left - s.left - u, width: r.width, height: r.height});
        if (h.marginTop = 0, h.marginLeft = 0, !i && o) {
            var f = parseFloat(l.marginTop, 10), d = parseFloat(l.marginLeft, 10);
            h.top -= c - f, h.bottom -= c - f, h.left -= u - d, h.right -= u - d, h.marginTop = f, h.marginLeft = d;
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (h = H(h, e)), h;
    }

    function J(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = t.ownerDocument.documentElement,
            i = $(t, n), o = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0), s = e ? 0 : q(n), a = e ? 0 : q(n, "left"),
            l = {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r};
        return K(l);
    }

    function Z(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e) return !1;
        if ("fixed" === A(t, "position")) return !0;
        var n = I(t);
        return !!n && Z(n);
    }

    function tt(t) {
        if (!t || !t.parentElement || F()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === A(e, "transform");) {
            e = e.parentElement;
        }
        return e || document.documentElement;
    }

    function et(t, e, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], r = {top: 0, left: 0},
            s = o ? tt(t) : B(t, j(e));
        if ("viewport" === i) r = J(s, o); else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = x(I(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = $(a, s, o);
            if ("HTML" !== a.nodeName || Z(s)) r = l; else {
                var c = U(t.ownerDocument), u = c.height, h = c.width;
                r.top += l.top - l.marginTop, r.bottom = u + l.top, r.left += l.left - l.marginLeft, r.right = h + l.left;
            }
        }
        var f = "number" == typeof (n = n || 0);
        return r.left += f ? n : n.left || 0, r.top += f ? n : n.top || 0, r.right -= f ? n : n.right || 0, r.bottom -= f ? n : n.bottom || 0, r;
    }

    function nt(t) {
        return t.width * t.height;
    }

    function it(t, e, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = et(n, i, r, o), a = {
            top: {width: s.width, height: e.top - s.top},
            right: {width: s.right - e.right, height: s.height},
            bottom: {width: s.width, height: s.bottom - e.bottom},
            left: {width: e.left - s.left, height: s.height}
        }, l = Object.keys(a).map(function (t) {
            return X({key: t}, a[t], {area: nt(a[t])});
        }).sort(function (t, e) {
            return e.area - t.area;
        }), c = l.filter(function (t) {
            var e = t.width, i = t.height;
            return e >= n.clientWidth && i >= n.clientHeight;
        }), u = c.length > 0 ? c[0].key : l[0].key, h = t.split("-")[1];
        return u + (h ? "-" + h : "");
    }

    function ot(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o = i ? tt(e) : B(e, j(n));
        return $(n, o, i);
    }

    function rt(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {width: t.offsetWidth + i, height: t.offsetHeight + n};
    }

    function st(t) {
        var e = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t];
        });
    }

    function at(t, e, n) {
        n = n.split("-")[0];
        var i = rt(t), o = {width: i.width, height: i.height}, r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left", a = r ? "left" : "top", l = r ? "height" : "width", c = r ? "width" : "height";
        return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[st(a)], o;
    }

    function lt(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }

    function ct(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function (t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex(function (t) {
                return t[e] === n;
            });
            var i = lt(t, function (t) {
                return t[e] === n;
            });
            return t.indexOf(i);
        }(t, "name", n))).forEach(function (t) {
            t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t["function"] || t.fn;
            t.enabled && O(n) && (e.offsets.popper = K(e.offsets.popper), e.offsets.reference = K(e.offsets.reference), e = n(e, t));
        }), e;
    }

    function ut() {
        if (!this.state.isDestroyed) {
            var t = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            t.offsets.reference = ot(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = it(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = at(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ct(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
        }
    }

    function ht(t, e) {
        return t.some(function (t) {
            var n = t.name;
            return t.enabled && n === e;
        });
    }

    function ft(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i], r = o ? "" + o + n : t;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }

    function dt() {
        return this.state.isDestroyed = !0, ht(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ft("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
    }

    function pt(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window;
    }

    function mt(t, e, n, i) {
        n.updateBound = i, pt(t).addEventListener("resize", n.updateBound, {passive: !0});
        var o = x(t);
        return function t(e, n, i, o) {
            var r = "BODY" === e.nodeName, s = r ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {passive: !0}), r || t(x(s.parentNode), n, i, o), o.push(s);
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
    }

    function gt() {
        this.state.eventsEnabled || (this.state = mt(this.reference, this.options, this.state, this.scheduleUpdate));
    }

    function vt() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, pt(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound);
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
    }

    function _t(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }

    function bt(t, e) {
        Object.keys(e).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && _t(e[n]) && (i = "px"), t.style[n] = e[n] + i;
        });
    }

    var yt = D && /Firefox/i.test(navigator.userAgent);

    function wt(t, e, n) {
        var i = lt(t, function (t) {
            return t.name === e;
        }), o = !!i && t.some(function (t) {
            return t.name === n && t.enabled && t.order < i.order;
        });
        if (!o) {
            var r = "`" + e + "`", s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
        }
        return o;
    }

    var Et = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Tt = Et.slice(3);

    function Ct(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = Tt.indexOf(t),
            i = Tt.slice(n + 1).concat(Tt.slice(0, n));
        return e ? i.reverse() : i;
    }

    var St = "flip", Dt = "clockwise", kt = "counterclockwise";

    function Nt(t, e, n, i) {
        var o = [0, 0], r = -1 !== ["right", "left"].indexOf(i), s = t.split(/(\+|\-)/).map(function (t) {
            return t.trim();
        }), a = s.indexOf(lt(s, function (t) {
            return -1 !== t.search(/,|\s/);
        }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map(function (t, i) {
            var o = (1 === i ? !r : r) ? "height" : "width", s = !1;
            return t.reduce(function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e);
            }, []).map(function (t) {
                return function (t, e, n, i) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +o[1], s = o[2];
                    if (!r) return t;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i;
                        }
                        return K(a)[e] / 100 * r;
                    }
                    if ("vh" === s || "vw" === s) {
                        return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                    }
                    return r;
                }(t, o, e, n);
            });
        })).forEach(function (t, e) {
            t.forEach(function (n, i) {
                _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
            });
        }), o;
    }

    var Ot = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {
        }, onUpdate: function onUpdate() {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function fn(t) {
                    var e = t.placement, n = e.split("-")[0], i = e.split("-")[1];
                    if (i) {
                        var o = t.offsets, r = o.reference, s = o.popper, a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top", c = a ? "width" : "height",
                            u = {start: z({}, l, r[l]), end: z({}, l, r[l] + r[c] - s[c])};
                        t.offsets.popper = X({}, s, u[i]);
                    }
                    return t;
                }
            }, offset: {
                order: 200, enabled: !0, fn: function fn(t, e) {
                    var n = e.offset, i = t.placement, o = t.offsets, r = o.popper, s = o.reference,
                        a = i.split("-")[0], l = void 0;
                    return l = _t(+n) ? [+n, 0] : Nt(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t;
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function fn(t, e) {
                    var n = e.boundariesElement || R(t.instance.popper);
                    t.instance.reference === n && (n = R(n));
                    var i = ft("transform"), o = t.instance.popper.style, r = o.top, s = o.left, a = o[i];
                    o.top = "", o.left = "", o[i] = "";
                    var l = et(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                    o.top = r, o.left = s, o[i] = a, e.boundaries = l;
                    var c = e.priority, u = t.offsets.popper, h = {
                        primary: function primary(t) {
                            var n = u[t];
                            return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), z({}, t, n);
                        }, secondary: function secondary(t) {
                            var n = "right" === t ? "left" : "top", i = u[n];
                            return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ("right" === t ? u.width : u.height))), z({}, n, i);
                        }
                    };
                    return c.forEach(function (t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                        u = X({}, u, h[e](t));
                    }), t.offsets.popper = u, t;
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function fn(t) {
                    var e = t.offsets, n = e.popper, i = e.reference, o = t.placement.split("-")[0], r = Math.floor,
                        s = -1 !== ["top", "bottom"].indexOf(o), a = s ? "right" : "bottom", l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t;
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function fn(t, e) {
                    var n;
                    if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var i = e.element;
                    if ("string" == typeof i) {
                        if (!(i = t.instance.popper.querySelector(i))) return t;
                    } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var o = t.placement.split("-")[0], r = t.offsets, s = r.popper, a = r.reference,
                        l = -1 !== ["left", "right"].indexOf(o), c = l ? "height" : "width", u = l ? "Top" : "Left",
                        h = u.toLowerCase(), f = l ? "left" : "top", d = l ? "bottom" : "right", p = rt(i)[c];
                    a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]), t.offsets.popper = K(t.offsets.popper);
                    var m = a[h] + a[c] / 2 - p / 2, g = A(t.instance.popper), v = parseFloat(g["margin" + u], 10),
                        _ = parseFloat(g["border" + u + "Width"], 10), b = m - t.offsets.popper[h] - v - _;
                    return b = Math.max(Math.min(s[c] - p, b), 0), t.arrowElement = i, t.offsets.arrow = (z(n = {}, h, Math.round(b)), z(n, f, ""), n), t;
                }, element: "[x-arrow]"
            }, flip: {
                order: 600,
                enabled: !0,
                fn: function fn(t, e) {
                    if (ht(t.instance.modifiers, "inner")) return t;
                    if (t.flipped && t.placement === t.originalPlacement) return t;
                    var n = et(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                        i = t.placement.split("-")[0], o = st(i), r = t.placement.split("-")[1] || "", s = [];
                    switch (e.behavior) {
                        case St:
                            s = [i, o];
                            break;
                        case Dt:
                            s = Ct(i);
                            break;
                        case kt:
                            s = Ct(i, !0);
                            break;
                        default:
                            s = e.behavior;
                    }
                    return s.forEach(function (a, l) {
                        if (i !== a || s.length === l + 1) return t;
                        i = t.placement.split("-")[0], o = st(i);
                        var c = t.offsets.popper, u = t.offsets.reference, h = Math.floor,
                            f = "left" === i && h(c.right) > h(u.left) || "right" === i && h(c.left) < h(u.right) || "top" === i && h(c.bottom) > h(u.top) || "bottom" === i && h(c.top) < h(u.bottom),
                            d = h(c.left) < h(n.left), p = h(c.right) > h(n.right), m = h(c.top) < h(n.top),
                            g = h(c.bottom) > h(n.bottom),
                            v = "left" === i && d || "right" === i && p || "top" === i && m || "bottom" === i && g,
                            _ = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!e.flipVariations && (_ && "start" === r && d || _ && "end" === r && p || !_ && "start" === r && m || !_ && "end" === r && g),
                            y = !!e.flipVariationsByContent && (_ && "start" === r && p || _ && "end" === r && d || !_ && "start" === r && g || !_ && "end" === r && m),
                            w = b || y;
                        (f || v || w) && (t.flipped = !0, (f || v) && (i = s[l + 1]), w && (r = function (t) {
                            return "end" === t ? "start" : "start" === t ? "end" : t;
                        }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = X({}, t.offsets.popper, at(t.instance.popper, t.offsets.reference, t.placement)), t = ct(t.instance.modifiers, t, "flip"));
                    }), t;
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            }, inner: {
                order: 700, enabled: !1, fn: function fn(t) {
                    var e = t.placement, n = e.split("-")[0], i = t.offsets, o = i.popper, r = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = st(e), t.offsets.popper = K(o), t;
                }
            }, hide: {
                order: 800, enabled: !0, fn: function fn(t) {
                    if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t;
                    var e = t.offsets.reference, n = lt(t.instance.modifiers, function (t) {
                        return "preventOverflow" === t.name;
                    }).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide) return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
                    } else {
                        if (!1 === t.hide) return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
                    }
                    return t;
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function fn(t, e) {
                    var n = e.x, i = e.y, o = t.offsets.popper, r = lt(t.instance.modifiers, function (t) {
                        return "applyStyle" === t.name;
                    }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== r ? r : e.gpuAcceleration, a = R(t.instance.popper), l = G(a),
                        c = {position: o.position}, u = function (t, e) {
                            var n = t.offsets, i = n.popper, o = n.reference, r = Math.round, s = Math.floor,
                                a = function a(t) {
                                    return t;
                                }, l = r(o.width), c = r(i.width), u = -1 !== ["left", "right"].indexOf(t.placement),
                                h = -1 !== t.placement.indexOf("-"), f = e ? u || h || l % 2 == c % 2 ? r : s : a,
                                d = e ? r : a;
                            return {
                                left: f(l % 2 == 1 && c % 2 == 1 && !h && e ? i.left - 1 : i.left),
                                top: d(i.top),
                                bottom: d(i.bottom),
                                right: f(i.right)
                            };
                        }(t, window.devicePixelRatio < 2 || !yt), h = "bottom" === n ? "top" : "bottom",
                        f = "right" === i ? "left" : "right", d = ft("transform"), p = void 0, m = void 0;
                    if (m = "bottom" === h ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, p = "right" === f ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && d) c[d] = "translate3d(" + p + "px, " + m + "px, 0)", c[h] = 0, c[f] = 0, c.willChange = "transform"; else {
                        var g = "bottom" === h ? -1 : 1, v = "right" === f ? -1 : 1;
                        c[h] = m * g, c[f] = p * v, c.willChange = h + ", " + f;
                    }
                    var _ = {"x-placement": t.placement};
                    return t.attributes = X({}, _, t.attributes), t.styles = X({}, c, t.styles), t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles), t;
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function fn(t) {
                    var e, n;
                    return bt(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
                        !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
                    }), t.arrowElement && Object.keys(t.arrowStyles).length && bt(t.arrowElement, t.arrowStyles), t;
                }, onLoad: function onLoad(t, e, n, i, o) {
                    var r = ot(o, e, t, n.positionFixed),
                        s = it(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s), bt(e, {position: n.positionFixed ? "fixed" : "absolute"}), n;
                }, gpuAcceleration: void 0
            }
        }
    }, At = function () {
        function t(e, n) {
            var i = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            V(this, t), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update);
            }, this.update = N(this.update.bind(this)), this.options = X({}, t.Defaults, o), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(X({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                i.options.modifiers[e] = X({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
                return X({name: t}, i.options.modifiers[t]);
            }).sort(function (t, e) {
                return t.order - e.order;
            }), this.modifiers.forEach(function (t) {
                t.enabled && O(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
            }), this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(), this.state.eventsEnabled = r;
        }

        return Y(t, [{
            key: "update", value: function value() {
                return ut.call(this);
            }
        }, {
            key: "destroy", value: function value() {
                return dt.call(this);
            }
        }, {
            key: "enableEventListeners", value: function value() {
                return gt.call(this);
            }
        }, {
            key: "disableEventListeners", value: function value() {
                return vt.call(this);
            }
        }]), t;
    }();
    At.Utils = ("undefined" != typeof window ? window : global).PopperUtils, At.placements = Et, At.Defaults = Ot;
    var It = "dropdown", xt = e.fn[It], jt = new RegExp("38|40|27"), Lt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }, Pt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }, Ft = function () {
        function t(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
        }

        var n = t.prototype;
        return n.toggle = function () {
            if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
                var n = e(this._menu).hasClass("show");
                t._clearMenus(), n || this.show(!0);
            }
        }, n.show = function (n) {
            if (void 0 === n && (n = !1), !(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show"))) {
                var i = {relatedTarget: this._element}, o = e.Event("show.bs.dropdown", i),
                    r = t._getParentFromElement(this._element);
                if (e(r).trigger(o), !o.isDefaultPrevented()) {
                    if (!this._inNavbar && n) {
                        if ("undefined" == typeof At) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        var s = this._element;
                        "parent" === this._config.reference ? s = r : l.isElement(this._config.reference) && (s = this._config.reference, "undefined" != typeof this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(r).addClass("position-static"), this._popper = new At(s, this._menu, this._getPopperConfig());
                    }
                    "ontouchstart" in document.documentElement && 0 === e(r).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass("show"), e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown", i));
                }
            }
        }, n.hide = function () {
            if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
                var n = {relatedTarget: this._element}, i = e.Event("hide.bs.dropdown", n),
                    o = t._getParentFromElement(this._element);
                e(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass("show"), e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", n)));
            }
        }, n.dispose = function () {
            e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
        }, n.update = function () {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
        }, n._addEventListeners = function () {
            var t = this;
            e(this._element).on("click.bs.dropdown", function (e) {
                e.preventDefault(), e.stopPropagation(), t.toggle();
            });
        }, n._getConfig = function (t) {
            return t = s(s(s({}, this.constructor.Default), e(this._element).data()), t), l.typeCheckConfig(It, t, this.constructor.DefaultType), t;
        }, n._getMenuElement = function () {
            if (!this._menu) {
                var e = t._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(".dropdown-menu"));
            }
            return this._menu;
        }, n._getPlacement = function () {
            var t = e(this._element.parentNode), n = "bottom-start";
            return t.hasClass("dropup") ? n = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n;
        }, n._detectNavbar = function () {
            return e(this._element).closest(".navbar").length > 0;
        }, n._getOffset = function () {
            var t = this, e = {};
            return "function" == typeof this._config.offset ? e.fn = function (e) {
                return e.offsets = s(s({}, e.offsets), t._config.offset(e.offsets, t._element) || {}), e;
            } : e.offset = this._config.offset, e;
        }, n._getPopperConfig = function () {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {enabled: this._config.flip},
                    preventOverflow: {boundariesElement: this._config.boundary}
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {enabled: !1}), s(s({}, t), this._config.popperConfig);
        }, t._jQueryInterface = function (n) {
            return this.each(function () {
                var i = e(this).data("bs.dropdown");
                if (i || (i = new t(this, "object" == _typeof(n) ? n : null), e(this).data("bs.dropdown", i)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]();
                }
            });
        }, t._clearMenus = function (n) {
            if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = i.length; o < r; o++) {
                var s = t._getParentFromElement(i[o]), a = e(i[o]).data("bs.dropdown"), l = {relatedTarget: i[o]};
                if (n && "click" === n.type && (l.clickEvent = n), a) {
                    var c = a._menu;
                    if (e(s).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(s, n.target))) {
                        var u = e.Event("hide.bs.dropdown", l);
                        e(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), e(c).removeClass("show"), e(s).removeClass("show").trigger(e.Event("hidden.bs.dropdown", l)));
                    }
                }
            }
        }, t._getParentFromElement = function (t) {
            var e, n = l.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode;
        }, t._dataApiKeydownHandler = function (n) {
            if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(".dropdown-menu").length) : !jt.test(n.which)) && !this.disabled && !e(this).hasClass("disabled")) {
                var i = t._getParentFromElement(this), o = e(i).hasClass("show");
                if (o || 27 !== n.which) {
                    if (n.preventDefault(), n.stopPropagation(), !o || o && (27 === n.which || 32 === n.which)) return 27 === n.which && e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void e(this).trigger("click");
                    var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
                        return e(t).is(":visible");
                    });
                    if (0 !== r.length) {
                        var s = r.indexOf(n.target);
                        38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus();
                    }
                }
            }
        }, i(t, null, [{
            key: "VERSION", get: function get() {
                return "4.5.0";
            }
        }, {
            key: "Default", get: function get() {
                return Lt;
            }
        }, {
            key: "DefaultType", get: function get() {
                return Pt;
            }
        }]), t;
    }();
    e(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Ft._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Ft._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ft._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
        t.preventDefault(), t.stopPropagation(), Ft._jQueryInterface.call(e(this), "toggle");
    }).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation();
    }), e.fn[It] = Ft._jQueryInterface, e.fn[It].Constructor = Ft, e.fn[It].noConflict = function () {
        return e.fn[It] = xt, Ft._jQueryInterface;
    };
    var Rt = e.fn.modal, Mt = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
        Bt = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, qt = function () {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
            }

            var n = t.prototype;
            return n.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t);
            }, n.show = function (t) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    e(this._element).hasClass("fade") && (this._isTransitioning = !0);
                    var i = e.Event("show.bs.modal", {relatedTarget: t});
                    e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
                        return n.hide(t);
                    }), e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                        e(n._element).one("mouseup.dismiss.bs.modal", function (t) {
                            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                        });
                    }), this._showBackdrop(function () {
                        return n._showElement(t);
                    }));
                }
            }, n.hide = function (t) {
                var n = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = e.Event("hide.bs.modal");
                    if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = e(this._element).hasClass("fade");
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off("focusin.bs.modal"), e(this._element).removeClass("show"), e(this._element).off("click.dismiss.bs.modal"), e(this._dialog).off("mousedown.dismiss.bs.modal"), o) {
                            var r = l.getTransitionDurationFromElement(this._element);
                            e(this._element).one(l.TRANSITION_END, function (t) {
                                return n._hideModal(t);
                            }).emulateTransitionEnd(r);
                        } else this._hideModal();
                    }
                }
            }, n.dispose = function () {
                [window, this._element, this._dialog].forEach(function (t) {
                    return e(t).off(".bs.modal");
                }), e(document).off("focusin.bs.modal"), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
            }, n.handleUpdate = function () {
                this._adjustDialog();
            }, n._getConfig = function (t) {
                return t = s(s({}, Mt), t), l.typeCheckConfig("modal", t, Bt), t;
            }, n._triggerBackdropTransition = function () {
                var t = this;
                if ("static" === this._config.backdrop) {
                    var n = e.Event("hidePrevented.bs.modal");
                    if (e(this._element).trigger(n), n.defaultPrevented) return;
                    this._element.classList.add("modal-static");
                    var i = l.getTransitionDurationFromElement(this._element);
                    e(this._element).one(l.TRANSITION_END, function () {
                        t._element.classList.remove("modal-static");
                    }).emulateTransitionEnd(i), this._element.focus();
                } else this.hide();
            }, n._showElement = function (t) {
                var n = this, i = e(this._element).hasClass("fade"),
                    o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, i && l.reflow(this._element), e(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                var r = e.Event("shown.bs.modal", {relatedTarget: t}), s = function s() {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r);
                };
                if (i) {
                    var a = l.getTransitionDurationFromElement(this._dialog);
                    e(this._dialog).one(l.TRANSITION_END, s).emulateTransitionEnd(a);
                } else s();
            }, n._enforceFocus = function () {
                var t = this;
                e(document).off("focusin.bs.modal").on("focusin.bs.modal", function (n) {
                    document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
                });
            }, n._setEscapeEvent = function () {
                var t = this;
                this._isShown ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
                    t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
                }) : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
            }, n._setResizeEvent = function () {
                var t = this;
                this._isShown ? e(window).on("resize.bs.modal", function (e) {
                    return t.handleUpdate(e);
                }) : e(window).off("resize.bs.modal");
            }, n._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                    e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger("hidden.bs.modal");
                });
            }, n._removeBackdrop = function () {
                this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
            }, n._showBackdrop = function (t) {
                var n = this, i = e(this._element).hasClass("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on("click.dismiss.bs.modal", function (t) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && n._triggerBackdropTransition();
                    }), i && l.reflow(this._backdrop), e(this._backdrop).addClass("show"), !t) return;
                    if (!i) return void t();
                    var o = l.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(o);
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass("show");
                    var r = function r() {
                        n._removeBackdrop(), t && t();
                    };
                    if (e(this._element).hasClass("fade")) {
                        var s = l.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(l.TRANSITION_END, r).emulateTransitionEnd(s);
                    } else r();
                } else t && t();
            }, n._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
            }, n._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
            }, n._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
            }, n._setScrollbar = function () {
                var t = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                        i = [].slice.call(document.querySelectorAll(".sticky-top"));
                    e(n).each(function (n, i) {
                        var o = i.style.paddingRight, r = e(i).css("padding-right");
                        e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
                    }), e(i).each(function (n, i) {
                        var o = i.style.marginRight, r = e(i).css("margin-right");
                        e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
                    });
                    var o = document.body.style.paddingRight, r = e(document.body).css("padding-right");
                    e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
                }
                e(document.body).addClass("modal-open");
            }, n._resetScrollbar = function () {
                var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                e(t).each(function (t, n) {
                    var i = e(n).data("padding-right");
                    e(n).removeData("padding-right"), n.style.paddingRight = i || "";
                });
                var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                e(n).each(function (t, n) {
                    var i = e(n).data("margin-right");
                    "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right");
                });
                var i = e(document.body).data("padding-right");
                e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || "";
            }, n._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e;
            }, t._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var o = e(this).data("bs.modal"),
                        r = s(s(s({}, Mt), e(this).data()), "object" == _typeof(n) && n ? n : {});
                    if (o || (o = new t(this, r), e(this).data("bs.modal", o)), "string" == typeof n) {
                        if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](i);
                    } else r.show && o.show(i);
                });
            }, i(t, null, [{
                key: "VERSION", get: function get() {
                    return "4.5.0";
                }
            }, {
                key: "Default", get: function get() {
                    return Mt;
                }
            }]), t;
        }();
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n, i = this, o = l.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var r = e(n).data("bs.modal") ? "toggle" : s(s({}, e(n).data()), e(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var a = e(n).one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || a.one("hidden.bs.modal", function () {
                e(i).is(":visible") && i.focus();
            });
        });
        qt._jQueryInterface.call(e(n), r, this);
    }), e.fn.modal = qt._jQueryInterface, e.fn.modal.Constructor = qt, e.fn.modal.noConflict = function () {
        return e.fn.modal = Rt, qt._jQueryInterface;
    };
    var Ht = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Qt = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }, Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Ut = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function Vt(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var i = new window.DOMParser().parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), s = function s(t, n) {
            var i = r[t], s = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
            var a = [].slice.call(i.attributes), l = [].concat(e["*"] || [], e[s] || []);
            a.forEach(function (t) {
                (function (t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n)) return -1 === Ht.indexOf(n) || Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut));
                    for (var i = e.filter(function (t) {
                        return t instanceof RegExp;
                    }), o = 0, r = i.length; o < r; o++) {
                        if (n.match(i[o])) return !0;
                    }
                    return !1;
                })(t, l) || i.removeAttribute(t.nodeName);
            });
        }, a = 0, l = r.length; a < l; a++) {
            s(a);
        }
        return i.body.innerHTML;
    }

    var Yt = "tooltip", zt = e.fn[Yt], Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Kt = ["sanitize", "whiteList", "sanitizeFn"], Gt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        }, $t = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, Jt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Qt,
            popperConfig: null
        }, Zt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        }, te = function () {
            function t(t, e) {
                if ("undefined" == typeof At) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
            }

            var n = t.prototype;
            return n.enable = function () {
                this._isEnabled = !0;
            }, n.disable = function () {
                this._isEnabled = !1;
            }, n.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
            }, n.toggle = function (t) {
                if (this._isEnabled) if (t) {
                    var n = this.constructor.DATA_KEY, i = e(t.currentTarget).data(n);
                    i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                } else {
                    if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                    this._enter(null, this);
                }
            }, n.dispose = function () {
                clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
            }, n.show = function () {
                var t = this;
                if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                var n = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(n);
                    var i = l.findShadowRoot(this.element),
                        o = e.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !o) return;
                    var r = this.getTipElement(), s = l.getUID(this.constructor.NAME);
                    r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(r).addClass("fade");
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        c = this._getAttachment(a);
                    this.addAttachmentClass(c);
                    var u = this._getContainer();
                    e(r).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new At(this.element, r, this._getPopperConfig(c)), e(r).addClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                    var h = function h() {
                        t.config.animation && t._fixTransition();
                        var n = t._hoverState;
                        t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), "out" === n && t._leave(null, t);
                    };
                    if (e(this.tip).hasClass("fade")) {
                        var f = l.getTransitionDurationFromElement(this.tip);
                        e(this.tip).one(l.TRANSITION_END, h).emulateTransitionEnd(f);
                    } else h();
                }
            }, n.hide = function (t) {
                var n = this, i = this.getTipElement(), o = e.Event(this.constructor.Event.HIDE), r = function r() {
                    "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
                };
                if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (e(i).removeClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, e(this.tip).hasClass("fade")) {
                        var s = l.getTransitionDurationFromElement(i);
                        e(i).one(l.TRANSITION_END, r).emulateTransitionEnd(s);
                    } else r();
                    this._hoverState = "";
                }
            }, n.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
            }, n.isWithContent = function () {
                return Boolean(this.getTitle());
            }, n.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t);
            }, n.getTipElement = function () {
                return this.tip = this.tip || e(this.config.template)[0], this.tip;
            }, n.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show");
            }, n.setElementContent = function (t, n) {
                "object" != _typeof(n) || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Vt(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text());
            }, n.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
            }, n._getPopperConfig = function (t) {
                var e = this;
                return s(s({}, {
                    placement: t,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {behavior: this.config.fallbackPlacement},
                        arrow: {element: ".arrow"},
                        preventOverflow: {boundariesElement: this.config.boundary}
                    },
                    onCreate: function onCreate(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                    },
                    onUpdate: function onUpdate(t) {
                        return e._handlePopperPlacementChange(t);
                    }
                }), this.config.popperConfig);
            }, n._getOffset = function () {
                var t = this, e = {};
                return "function" == typeof this.config.offset ? e.fn = function (e) {
                    return e.offsets = s(s({}, e.offsets), t.config.offset(e.offsets, t.element) || {}), e;
                } : e.offset = this.config.offset, e;
            }, n._getContainer = function () {
                return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container);
            }, n._getAttachment = function (t) {
                return $t[t.toUpperCase()];
            }, n._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                        return t.toggle(e);
                    }); else if ("manual" !== n) {
                        var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        e(t.element).on(i, t.config.selector, function (e) {
                            return t._enter(e);
                        }).on(o, t.config.selector, function (e) {
                            return t._leave(e);
                        });
                    }
                }), this._hideModalHandler = function () {
                    t.element && t.hide();
                }, e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s(s({}, this.config), {}, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle();
            }, n._fixTitle = function () {
                var t = _typeof(this.element.getAttribute("data-original-title"));
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
            }, n._enter = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                    "show" === n._hoverState && n.show();
                }, n.config.delay.show) : n.show());
            }, n._leave = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                    "out" === n._hoverState && n.hide();
                }, n.config.delay.hide) : n.hide());
            }, n._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger) {
                    if (this._activeTrigger[t]) return !0;
                }
                return !1;
            }, n._getConfig = function (t) {
                var n = e(this.element).data();
                return Object.keys(n).forEach(function (t) {
                    -1 !== Kt.indexOf(t) && delete n[t];
                }), "number" == typeof (t = s(s(s({}, this.constructor.Default), n), "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l.typeCheckConfig(Yt, t, this.constructor.DefaultType), t.sanitize && (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)), t;
            }, n._getDelegateConfig = function () {
                var t = {};
                if (this.config) for (var e in this.config) {
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                }
                return t;
            }, n._cleanTipClass = function () {
                var t = e(this.getTipElement()), n = t.attr("class").match(Xt);
                null !== n && n.length && t.removeClass(n.join(""));
            }, n._handlePopperPlacementChange = function (t) {
                this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
            }, n._fixTransition = function () {
                var t = this.getTipElement(), n = this.config.animation;
                null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this).data("bs.tooltip"), o = "object" == _typeof(n) && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, o), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]();
                    }
                });
            }, i(t, null, [{
                key: "VERSION", get: function get() {
                    return "4.5.0";
                }
            }, {
                key: "Default", get: function get() {
                    return Jt;
                }
            }, {
                key: "NAME", get: function get() {
                    return Yt;
                }
            }, {
                key: "DATA_KEY", get: function get() {
                    return "bs.tooltip";
                }
            }, {
                key: "Event", get: function get() {
                    return Zt;
                }
            }, {
                key: "EVENT_KEY", get: function get() {
                    return ".bs.tooltip";
                }
            }, {
                key: "DefaultType", get: function get() {
                    return Gt;
                }
            }]), t;
        }();
    e.fn[Yt] = te._jQueryInterface, e.fn[Yt].Constructor = te, e.fn[Yt].noConflict = function () {
        return e.fn[Yt] = zt, te._jQueryInterface;
    };
    var ee = "popover", ne = e.fn[ee], ie = new RegExp("(^|\\s)bs-popover\\S+", "g"), oe = s(s({}, te.Default), {}, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), re = s(s({}, te.DefaultType), {}, {content: "(string|element|function)"}), se = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }, ae = function (t) {
        var n, o;

        function r() {
            return t.apply(this, arguments) || this;
        }

        o = t, (n = r).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o;
        var s = r.prototype;
        return s.isWithContent = function () {
            return this.getTitle() || this._getContent();
        }, s.addAttachmentClass = function (t) {
            e(this.getTipElement()).addClass("bs-popover-" + t);
        }, s.getTipElement = function () {
            return this.tip = this.tip || e(this.config.template)[0], this.tip;
        }, s.setContent = function () {
            var t = e(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            var n = this._getContent();
            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show");
        }, s._getContent = function () {
            return this.element.getAttribute("data-content") || this.config.content;
        }, s._cleanTipClass = function () {
            var t = e(this.getTipElement()), n = t.attr("class").match(ie);
            null !== n && n.length > 0 && t.removeClass(n.join(""));
        }, r._jQueryInterface = function (t) {
            return this.each(function () {
                var n = e(this).data("bs.popover"), i = "object" == _typeof(t) ? t : null;
                if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                    if ("undefined" == typeof n[t]) throw new TypeError('No method named "' + t + '"');
                    n[t]();
                }
            });
        }, i(r, null, [{
            key: "VERSION", get: function get() {
                return "4.5.0";
            }
        }, {
            key: "Default", get: function get() {
                return oe;
            }
        }, {
            key: "NAME", get: function get() {
                return ee;
            }
        }, {
            key: "DATA_KEY", get: function get() {
                return "bs.popover";
            }
        }, {
            key: "Event", get: function get() {
                return se;
            }
        }, {
            key: "EVENT_KEY", get: function get() {
                return ".bs.popover";
            }
        }, {
            key: "DefaultType", get: function get() {
                return re;
            }
        }]), r;
    }(te);
    e.fn[ee] = ae._jQueryInterface, e.fn[ee].Constructor = ae, e.fn[ee].noConflict = function () {
        return e.fn[ee] = ne, ae._jQueryInterface;
    };
    var le = "scrollspy", ce = e.fn[le], ue = {offset: 10, method: "auto", target: ""},
        he = {offset: "number", method: "string", target: "(string|element)"}, fe = function () {
            function t(t, n) {
                var i = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
                    return i._process(t);
                }), this.refresh(), this._process();
            }

            var n = t.prototype;
            return n.refresh = function () {
                var t = this, n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    i = "auto" === this._config.method ? n : this._config.method,
                    o = "position" === i ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                    var n, r = l.getSelectorFromElement(t);
                    if (r && (n = document.querySelector(r)), n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height) return [e(n)[i]().top + o, r];
                    }
                    return null;
                }).filter(function (t) {
                    return t;
                }).sort(function (t, e) {
                    return t[0] - e[0];
                }).forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1]);
                });
            }, n.dispose = function () {
                e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
            }, n._getConfig = function (t) {
                if ("string" != typeof (t = s(s({}, ue), "object" == _typeof(t) && t ? t : {})).target && l.isElement(t.target)) {
                    var n = e(t.target).attr("id");
                    n || (n = l.getUID(le), e(t.target).attr("id", n)), t.target = "#" + n;
                }
                return l.typeCheckConfig(le, t, he), t;
            }, n._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }, n._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }, n._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            }, n._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i);
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                    }
                }
            }, n._activate = function (t) {
                this._activeTarget = t, this._clear();
                var n = this._selector.split(",").map(function (e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                }), i = e([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), e(this._scrollElement).trigger("activate.bs.scrollspy", {relatedTarget: t});
            }, n._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
                    return t.classList.contains("active");
                }).forEach(function (t) {
                    return t.classList.remove("active");
                });
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this).data("bs.scrollspy");
                    if (i || (i = new t(this, "object" == _typeof(n) && n), e(this).data("bs.scrollspy", i)), "string" == typeof n) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]();
                    }
                });
            }, i(t, null, [{
                key: "VERSION", get: function get() {
                    return "4.5.0";
                }
            }, {
                key: "Default", get: function get() {
                    return ue;
                }
            }]), t;
        }();
    e(window).on("load.bs.scrollspy.data-api", function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--;) {
            var i = e(t[n]);
            fe._jQueryInterface.call(i, i.data());
        }
    }), e.fn[le] = fe._jQueryInterface, e.fn[le].Constructor = fe, e.fn[le].noConflict = function () {
        return e.fn[le] = ce, fe._jQueryInterface;
    };
    var de = e.fn.tab, pe = function () {
        function t(t) {
            this._element = t;
        }

        var n = t.prototype;
        return n.show = function () {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active") || e(this._element).hasClass("disabled"))) {
                var n, i, o = e(this._element).closest(".nav, .list-group")[0],
                    r = l.getSelectorFromElement(this._element);
                if (o) {
                    var s = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                    i = (i = e.makeArray(e(o).find(s)))[i.length - 1];
                }
                var a = e.Event("hide.bs.tab", {relatedTarget: this._element}),
                    c = e.Event("show.bs.tab", {relatedTarget: i});
                if (i && e(i).trigger(a), e(this._element).trigger(c), !c.isDefaultPrevented() && !a.isDefaultPrevented()) {
                    r && (n = document.querySelector(r)), this._activate(this._element, o);
                    var u = function u() {
                        var n = e.Event("hidden.bs.tab", {relatedTarget: t._element}),
                            o = e.Event("shown.bs.tab", {relatedTarget: i});
                        e(i).trigger(n), e(t._element).trigger(o);
                    };
                    n ? this._activate(n, n.parentNode, u) : u();
                }
            }
        }, n.dispose = function () {
            e.removeData(this._element, "bs.tab"), this._element = null;
        }, n._activate = function (t, n, i) {
            var o = this,
                r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(".active") : e(n).find("> li > .active"))[0],
                s = i && r && e(r).hasClass("fade"), a = function a() {
                    return o._transitionComplete(t, r, i);
                };
            if (r && s) {
                var c = l.getTransitionDurationFromElement(r);
                e(r).removeClass("show").one(l.TRANSITION_END, a).emulateTransitionEnd(c);
            } else a();
        }, n._transitionComplete = function (t, n, i) {
            if (n) {
                e(n).removeClass("active");
                var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
                o && e(o).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
            }
            if (e(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), l.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                var r = e(t).closest(".dropdown")[0];
                if (r) {
                    var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                    e(s).addClass("active");
                }
                t.setAttribute("aria-expanded", !0);
            }
            i && i();
        }, t._jQueryInterface = function (n) {
            return this.each(function () {
                var i = e(this), o = i.data("bs.tab");
                if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
                    if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                    o[n]();
                }
            });
        }, i(t, null, [{
            key: "VERSION", get: function get() {
                return "4.5.0";
            }
        }]), t;
    }();
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
        t.preventDefault(), pe._jQueryInterface.call(e(this), "show");
    }), e.fn.tab = pe._jQueryInterface, e.fn.tab.Constructor = pe, e.fn.tab.noConflict = function () {
        return e.fn.tab = de, pe._jQueryInterface;
    };
    var me = e.fn.toast, ge = {animation: "boolean", autohide: "boolean", delay: "number"},
        ve = {animation: !0, autohide: !0, delay: 500}, _e = function () {
            function t(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
            }

            var n = t.prototype;
            return n.show = function () {
                var t = this, n = e.Event("show.bs.toast");
                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                    this._config.animation && this._element.classList.add("fade");
                    var i = function i() {
                        t._element.classList.remove("showing"), t._element.classList.add("show"), e(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
                            t.hide();
                        }, t._config.delay));
                    };
                    if (this._element.classList.remove("hide"), l.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var o = l.getTransitionDurationFromElement(this._element);
                        e(this._element).one(l.TRANSITION_END, i).emulateTransitionEnd(o);
                    } else i();
                }
            }, n.hide = function () {
                if (this._element.classList.contains("show")) {
                    var t = e.Event("hide.bs.toast");
                    e(this._element).trigger(t), t.isDefaultPrevented() || this._close();
                }
            }, n.dispose = function () {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), e(this._element).off("click.dismiss.bs.toast"), e.removeData(this._element, "bs.toast"), this._element = null, this._config = null;
            }, n._getConfig = function (t) {
                return t = s(s(s({}, ve), e(this._element).data()), "object" == _typeof(t) && t ? t : {}), l.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
            }, n._setListeners = function () {
                var t = this;
                e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
                    return t.hide();
                });
            }, n._close = function () {
                var t = this, n = function n() {
                    t._element.classList.add("hide"), e(t._element).trigger("hidden.bs.toast");
                };
                if (this._element.classList.remove("show"), this._config.animation) {
                    var i = l.getTransitionDurationFromElement(this._element);
                    e(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i);
                } else n();
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this), o = i.data("bs.toast");
                    if (o || (o = new t(this, "object" == _typeof(n) && n), i.data("bs.toast", o)), "string" == typeof n) {
                        if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](this);
                    }
                });
            }, i(t, null, [{
                key: "VERSION", get: function get() {
                    return "4.5.0";
                }
            }, {
                key: "DefaultType", get: function get() {
                    return ge;
                }
            }, {
                key: "Default", get: function get() {
                    return ve;
                }
            }]), t;
        }();
    e.fn.toast = _e._jQueryInterface, e.fn.toast.Constructor = _e, e.fn.toast.noConflict = function () {
        return e.fn.toast = me, _e._jQueryInterface;
    }, t.Alert = h, t.Button = d, t.Carousel = y, t.Collapse = S, t.Dropdown = Ft, t.Modal = qt, t.Popover = ae, t.Scrollspy = fe, t.Tab = pe, t.Toast = _e, t.Tooltip = te, t.Util = l, Object.defineProperty(t, "__esModule", {value: !0});
});/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
    function e(t) {
        for (var e = t.css("visibility"); "inherit" === e;) {
            t = t.parent(), e = t.css("visibility");
        }
        return "hidden" !== e;
    }

    function i(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent();
        }
        return 0;
    }

    function s() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }

    function n(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", i, function () {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
        }).on("mouseover", i, o);
    }

    function o() {
        t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
    }

    function a(e, i) {
        t.extend(e, i);
        for (var s in i) {
            null == i[s] && (e[s] = i[s]);
        }
        return e;
    }

    function r(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
        };
    }

    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var h = 0, l = Array.prototype.slice;
    t.cleanData = function (e) {
        return function (i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++) {
                try {
                    s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
                } catch (a) {
                }
            }
            e(i);
        };
    }(t.cleanData), t.widget = function (e, i, s) {
        var n, o, a, r = {}, h = e.split(".")[0];
        e = e.split(".")[1];
        var l = h + "-" + e;
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function (e) {
            return !!t.data(e, l);
        }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function (t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
        }, t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
            return t.isFunction(s) ? (r[e] = function () {
                function t() {
                    return i.prototype[e].apply(this, arguments);
                }

                function n(t) {
                    return i.prototype[e].apply(this, t);
                }

                return function () {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e;
                };
            }(), void 0) : (r[e] = s, void 0);
        }), o.prototype = t.widget.extend(a, {widgetEventPrefix: n ? a.widgetEventPrefix || e : e}, r, {
            constructor: o,
            namespace: h,
            widgetName: e,
            widgetFullName: l
        }), n ? (t.each(n._childConstructors, function (e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto);
        }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
    }, t.widget.extend = function (e) {
        for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++) {
            for (i in n[o]) {
                s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
            }
        }
        return e;
    }, t.widget.bridge = function (e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function (n) {
            var o = "string" == typeof n, a = l.call(arguments, 1), r = this;
            return o ? this.length || "instance" !== n ? this.each(function () {
                var i, o = t.data(this, s);
                return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'");
            }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function () {
                var e = t.data(this, s);
                e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
            })), r;
        };
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {classes: {}, disabled: !1, create: null},
        _createWidget: function _createWidget(e, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function remove(t) {
                    t.target === i && this.destroy();
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: function _getCreateOptions() {
            return {};
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function destroy() {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function (t, i) {
                e._removeClass(i, t);
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
        },
        _destroy: t.noop,
        widget: function widget() {
            return this.element;
        },
        option: function option(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) {
                    n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                }
                if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                n[e] = i;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                a[e] = i;
            }
            return this._setOptions(a), this;
        },
        _setOptions: function _setOptions(t) {
            var e;
            for (e in t) {
                this._setOption(e, t[e]);
            }
            return this;
        },
        _setOption: function _setOption(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
        },
        _setOptionClasses: function _setOptionClasses(e) {
            var i, s, n;
            for (i in e) {
                n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                    element: s,
                    keys: i,
                    classes: e,
                    add: !0
                })));
            }
        },
        _setOptionDisabled: function _setOptionDisabled(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function enable() {
            return this._setOptions({disabled: !1});
        },
        disable: function disable() {
            return this._setOptions({disabled: !0});
        },
        _classes: function _classes(e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++) {
                    a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
                }
            }

            var s = [], n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {remove: "_untrackClassesElement"}), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ");
        },
        _untrackClassesElement: function _untrackClassesElement(e) {
            var i = this;
            t.each(i.classesElementLookup, function (s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
            });
        },
        _removeClass: function _removeClass(t, e, i) {
            return this._toggleClass(t, e, i, !1);
        },
        _addClass: function _addClass(t, e, i) {
            return this._toggleClass(t, e, i, !0);
        },
        _toggleClass: function _toggleClass(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t,
                o = {extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s};
            return o.element.toggleClass(this._classes(o), s), this;
        },
        _on: function _on(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
                function r() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
                }

                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + o.eventNamespace, c = h[2];
                c ? n.on(l, c, r) : i.on(l, r);
            });
        },
        _off: function _off(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
        },
        _delay: function _delay(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments);
            }

            var s = this;
            return setTimeout(i, e || 0);
        },
        _hoverable: function _hoverable(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function mouseenter(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover");
                }, mouseleave: function mouseleave(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover");
                }
            });
        },
        _focusable: function _focusable(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function focusin(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus");
                }, focusout: function focusout(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus");
                }
            });
        },
        _trigger: function _trigger(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) {
                n in i || (i[n] = o[n]);
            }
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
        }
    }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
            "string" == typeof n && (n = {effect: n});
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {duration: n}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i();
            });
        };
    }), t.widget, function () {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)];
        }

        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0;
        }

        function s(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {top: 0, left: 0}
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {top: e.scrollTop(), left: e.scrollLeft()}
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {top: i.pageY, left: i.pageX}
            } : {width: e.outerWidth(), height: e.outerHeight(), offset: e.offset()};
        }

        var n, o = Math.max, a = Math.abs, r = /left|center|right/, h = /top|center|bottom/,
            l = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, u = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function scrollbarWidth() {
                if (void 0 !== n) return n;
                var e, i,
                    s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = s.children()[0];
                return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i;
            }, getScrollInfo: function getScrollInfo(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {width: o ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0};
            }, getWithinInfo: function getWithinInfo(e) {
                var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType, o = !s && !n;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: o ? t(e).offset() : {left: 0, top: 0},
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                };
            }
        }, t.fn.position = function (n) {
            if (!n || !n.of) return d.apply(this, arguments);
            n = t.extend({}, n);
            var u, p, f, g, m, _, v = t(n.of), b = t.position.getWithinInfo(n.within), y = t.position.getScrollInfo(b),
                w = (n.collision || "flip").split(" "), k = {};
            return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
                var t, e, i = (n[this] || "").split(" ");
                1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
            }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function () {
                var s, r, h = t(this), l = h.outerWidth(), c = h.outerHeight(), d = i(this, "marginLeft"),
                    _ = i(this, "marginTop"), x = l + d + i(this, "marginRight") + y.width,
                    C = c + _ + i(this, "marginBottom") + y.height, D = t.extend({}, m),
                    I = e(k.my, h.outerWidth(), h.outerHeight());
                "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += I[0], D.top += I[1], s = {
                    marginLeft: d,
                    marginTop: _
                }, t.each(["left", "top"], function (e, i) {
                    t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: l,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [u[0] + I[0], u[1] + I[1]],
                        my: n.my,
                        at: n.at,
                        within: b,
                        elem: h
                    });
                }), n.using && (r = function r(t) {
                    var e = g.left - D.left, i = e + p - l, s = g.top - D.top, r = s + f - c, u = {
                        target: {element: v, left: g.left, top: g.top, width: p, height: f},
                        element: {element: h, left: D.left, top: D.top, width: l, height: c},
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    l > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u);
                }), h.offset(t.extend(D, {using: r}));
            });
        }, t.ui.position = {
            fit: {
                left: function left(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width,
                        r = t.left - e.collisionPosition.marginLeft, h = n - r, l = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left);
                }, top: function top(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height,
                        r = t.top - e.collisionPosition.marginTop, h = n - r, l = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top);
                }
            }, flip: {
                left: function left(t, e) {
                    var i, s, n = e.within, o = n.offset.left + n.scrollLeft, r = n.width,
                        h = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft,
                        c = l - h, u = l + e.collisionWidth - r - h,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > a(s)) && (t.left += d + p + f));
                }, top: function top(t, e) {
                    var i, s, n = e.within, o = n.offset.top + n.scrollTop, r = n.height,
                        h = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop,
                        c = l - h, u = l + e.collisionHeight - r - h, d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        g = -2 * e.offset[1];
                    0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || u > a(i)) && (t.top += p + f + g));
                }
            }, flipfit: {
                left: function left() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
                }, top: function top() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
                }
            }
        };
    }(), t.ui.position, t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (i) {
                return !!t.data(i, e);
            };
        }) : function (e, i, s) {
            return !!t.data(e, s[3]);
        }
    }), t.fn.extend({
        disableSelection: function () {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.on(t + ".ui-disableSelection", function (t) {
                    t.preventDefault();
                });
            };
        }(), enableSelection: function enableSelection() {
            return this.off(".ui-disableSelection");
        }
    });
    var c = "ui-effects-", u = "ui-effects-style", d = "ui-effects-animated", p = t;
    t.effects = {effect: {}}, function (t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t);
        }

        function s(i) {
            var s = l(), n = s._rgba = [];
            return i = i.toLowerCase(), f(h, function (t, o) {
                var a, r = o.re.exec(i), h = r && o.parse(r), l = o.space || "rgba";
                return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e;
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i];
        }

        function n(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
        }

        var o,
            a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function parse(t) {
                    return [t[1], t[2], t[3], t[4]];
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function parse(t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function parse(t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function parse(t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function parse(t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]];
                }
            }], l = t.Color = function (e, i, s, n) {
                return new t.Color.fn.parse(e, i, s, n);
            }, c = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, u = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, d = l.support = {},
            p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1};
        }), l.fn = t.extend(l.prototype, {
            parse: function parse(n, a, r, h) {
                if (n === e) return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                var u = this, d = t.type(n), p = this._rgba = [];
                return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
                    p[e.idx] = i(n[e.idx], e);
                }), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice());
                }) : f(c, function (e, s) {
                    var o = s.cache;
                    f(s.props, function (t, e) {
                        if (!u[o] && s.to) {
                            if ("alpha" === t || null == n[t]) return;
                            u[o] = s.to(u._rgba);
                        }
                        u[o][e.idx] = i(n[t], e, !0);
                    }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])));
                }), this) : e;
            }, is: function is(t) {
                var i = l(t), s = !0, n = this;
                return f(c, function (t, o) {
                    var a, r = i[o.cache];
                    return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e;
                    })), s;
                }), s;
            }, _space: function _space() {
                var t = [], e = this;
                return f(c, function (i, s) {
                    e[s.cache] && t.push(i);
                }), t.pop();
            }, transition: function transition(t, e) {
                var s = l(t), n = s._space(), o = c[n], a = 0 === this.alpha() ? l("transparent") : this,
                    r = a[o.cache] || o.to(a._rgba), h = r.slice();
                return s = s[o.cache], f(o.props, function (t, n) {
                    var o = n.idx, a = r[o], l = s[o], c = u[n.type] || {};
                    null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)));
                }), this[n](h);
            }, blend: function blend(e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), s = i.pop(), n = l(e)._rgba;
                return l(t.map(i, function (t, e) {
                    return (1 - s) * n[e] + s * t;
                }));
            }, toRgbaString: function toRgbaString() {
                var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t;
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
            }, toHslaString: function toHslaString() {
                var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t;
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
            }, toHexString: function toHexString(e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t;
                }).join("");
            }, toString: function toString() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o),
                h = Math.min(s, n, o), l = r - h, c = r + h, u = .5 * c;
            return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a];
        }, c.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], o = t[3], a = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - a;
            return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o];
        }, f(c, function (s, n) {
            var o = n.props, a = n.cache, h = n.to, c = n.from;
            l.fn[s] = function (s) {
                if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[a].slice();
                return f(o, function (t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e);
                }), c ? (n = l(c(d)), n[a] = d, n) : l(d);
            }, f(o, function (e, i) {
                l.fn[e] || (l.fn[e] = function (n) {
                    var o, a = t.type(n), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, l = this[h](),
                        c = l[i.idx];
                    return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)));
                });
            });
        }), l.hook = function (e) {
            var i = e.split(" ");
            f(i, function (e, i) {
                t.cssHooks[i] = {
                    set: function set(e, n) {
                        var o, a, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                            if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;) {
                                    try {
                                        r = t.css(a, "backgroundColor"), a = a.parentNode;
                                    } catch (h) {
                                    }
                                }
                                n = n.blend(r && "transparent" !== r ? r : "_default");
                            }
                            n = n.toRgbaString();
                        }
                        try {
                            e.style[i] = n;
                        } catch (h) {
                        }
                    }
                }, t.fx.step[i] = function (e) {
                    e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                };
            });
        }, l.hook(a), t.cssHooks.borderColor = {
            expand: function expand(t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                    e["border" + s + "Color"] = t;
                }), e;
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        };
    }(p), function () {
        function e(e) {
            var i, s,
                n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                o = {};
            if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) {
                i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
            } else for (i in n) {
                "string" == typeof n[i] && (o[i] = n[i]);
            }
            return o;
        }

        function i(e, i) {
            var s, o, a = {};
            for (s in i) {
                o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
            }
            return a;
        }

        var s = ["add", "remove", "toggle"], n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
            t.fx.step[i] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0);
            };
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }), t.effects.animateClass = function (n, o, a, r) {
            var h = t.speed(o, a, r);
            return this.queue(function () {
                var o, a = t(this), r = a.attr("class") || "", l = h.children ? a.find("*").addBack() : a;
                l = l.map(function () {
                    var i = t(this);
                    return {el: i, start: e(this)};
                }), o = function o() {
                    t.each(s, function (t, e) {
                        n[e] && a[e + "Class"](n[e]);
                    });
                }, o(), l = l.map(function () {
                    return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this;
                }), a.attr("class", r), l = l.map(function () {
                    var e = this, i = t.Deferred(), s = t.extend({}, h, {
                        queue: !1, complete: function complete() {
                            i.resolve(e);
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise();
                }), t.when.apply(t, l.get()).done(function () {
                    o(), t.each(arguments, function () {
                        var e = this.el;
                        t.each(this.diff, function (t) {
                            e.css(t, "");
                        });
                    }), h.complete.call(a[0]);
                });
            });
        }, t.fn.extend({
            addClass: function (e) {
                return function (i, s, n, o) {
                    return s ? t.effects.animateClass.call(this, {add: i}, s, n, o) : e.apply(this, arguments);
                };
            }(t.fn.addClass), removeClass: function (e) {
                return function (i, s, n, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, o) : e.apply(this, arguments);
                };
            }(t.fn.removeClass), toggleClass: function (e) {
                return function (i, s, n, o, a) {
                    return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {add: i} : {remove: i}, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: i}, s, n, o);
                };
            }(t.fn.toggleClass), switchClass: function switchClass(e, i, s, n, o) {
                return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, o);
            }
        });
    }(), function () {
        function e(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e;
        }

        function i(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != _typeof(e) || e.effect ? !1 : !0 : !0;
        }

        function s(t, e) {
            var i = e.outerWidth(), s = e.outerHeight(),
                n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                o = n.exec(t) || ["", 0, i, s, 0];
            return {
                top: parseFloat(o[1]) || 0,
                right: "auto" === o[2] ? i : parseFloat(o[2]),
                bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                left: parseFloat(o[4]) || 0
            };
        }

        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
            return function (i) {
                return !!t(i).data(d) || e(i);
            };
        }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
            save: function save(t, e) {
                for (var i = 0, s = e.length; s > i; i++) {
                    null !== e[i] && t.data(c + e[i], t[0].style[e[i]]);
                }
            }, restore: function restore(t, e) {
                for (var i, s = 0, n = e.length; n > s; s++) {
                    null !== e[s] && (i = t.data(c + e[s]), t.css(e[s], i));
                }
            }, setMode: function setMode(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
            }, createWrapper: function createWrapper(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float")},
                    s = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), n = {width: e.width(), height: e.height()}, o = document.activeElement;
                try {
                    o.id;
                } catch (a) {
                    o = document.body;
                }
                return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], function (t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(n), s.css(i).show();
            }, removeWrapper: function removeWrapper(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e;
            }
        }), t.extend(t.effects, {
            version: "1.12.1", define: function define(e, i, s) {
                return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s;
            }, scaledDimensions: function scaledDimensions(t, e, i) {
                if (0 === e) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
                var s = "horizontal" !== i ? (e || 100) / 100 : 1, n = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * n,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * n,
                    outerWidth: t.outerWidth() * s
                };
            }, clipToBox: function clipToBox(t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                };
            }, unshift: function unshift(t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
            }, saveStyle: function saveStyle(t) {
                t.data(u, t[0].style.cssText);
            }, restoreStyle: function restoreStyle(t) {
                t[0].style.cssText = t.data(u) || "", t.removeData(u);
            }, mode: function mode(t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e;
            }, getBaseline: function getBaseline(t, e) {
                var i, s;
                switch (t[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height;
                }
                switch (t[1]) {
                    case "left":
                        s = 0;
                        break;
                    case "center":
                        s = .5;
                        break;
                    case "right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width;
                }
                return {x: s, y: i};
            }, createPlaceholder: function createPlaceholder(e) {
                var i, s = e.css("position"), n = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    "float": e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({
                    position: s,
                    left: n.left,
                    top: n.top
                }), i;
            }, removePlaceholder: function removePlaceholder(t) {
                var e = c + "placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e));
            }, cleanUp: function cleanUp(e) {
                t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
            }, setTransition: function setTransition(e, i, s, n) {
                return n = n || {}, t.each(i, function (t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1]);
                }), n;
            }
        }), t.fn.extend({
            effect: function effect() {
                function i(e) {
                    function i() {
                        r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a();
                    }

                    function a() {
                        t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e();
                    }

                    var r = t(this);
                    s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a);
                }

                var s = e.apply(this, arguments), n = t.effects.effect[s.effect], o = n.mode, a = s.queue,
                    r = a || "fx", h = s.complete, l = s.mode, c = [], u = function u(e) {
                        var i = t(this), s = t.effects.mode(i, l) || o;
                        i.data(d, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e();
                    };
                return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function () {
                    h && h.call(this);
                }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i);
            }, show: function (t) {
                return function (s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "show", this.effect.call(this, n);
                };
            }(t.fn.show), hide: function (t) {
                return function (s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "hide", this.effect.call(this, n);
                };
            }(t.fn.hide), toggle: function (t) {
                return function (s) {
                    if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "toggle", this.effect.call(this, n);
                };
            }(t.fn.toggle), cssUnit: function cssUnit(e) {
                var i = this.css(e), s = [];
                return t.each(["em", "px", "%", "pt"], function (t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e]);
                }), s;
            }, cssClip: function cssClip(t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this);
            }, transfer: function transfer(e, i) {
                var s = t(this), n = t(e.to), o = "fixed" === n.css("position"), a = t("body"),
                    r = o ? a.scrollTop() : 0, h = o ? a.scrollLeft() : 0, l = n.offset(),
                    c = {top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth()},
                    u = s.offset(),
                    d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                        top: u.top - r,
                        left: u.left - h,
                        height: s.innerHeight(),
                        width: s.innerWidth(),
                        position: o ? "fixed" : "absolute"
                    }).animate(c, e.duration, e.easing, function () {
                        d.remove(), t.isFunction(i) && i();
                    });
            }
        }), t.fx.step.clip = function (e) {
            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            });
        };
    }(), function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
            e[i] = function (e) {
                return Math.pow(e, t + 2);
            };
        }), t.extend(e, {
            Sine: function Sine(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            }, Circ: function Circ(t) {
                return 1 - Math.sqrt(1 - t * t);
            }, Elastic: function Elastic(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
            }, Back: function Back(t) {
                return t * t * (3 * t - 2);
            }, Bounce: function Bounce(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) {
                    ;
                }
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
            }
        }), t.each(e, function (e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t);
            }, t.easing["easeInOut" + e] = function (t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
            };
        });
    }();
    var f = t.effects;
    t.effects.define("blind", "hide", function (e, i) {
        var s = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            }, n = t(this), o = e.direction || "up", a = n.cssClip(), r = {clip: t.extend({}, a)},
            h = t.effects.createPlaceholder(n);
        r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("bounce", function (e, i) {
        var s, n, o, a = t(this), r = e.mode, h = "hide" === r, l = "show" === r, c = e.direction || "up",
            u = e.distance, d = e.times || 5, p = 2 * d + (l || h ? 1 : 0), f = e.duration / p, g = e.easing,
            m = "up" === c || "down" === c ? "top" : "left", _ = "up" === c || "left" === c, v = 0,
            b = a.queue().length;
        for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = {opacity: 1}, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++) {
            s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;
        }
        h && (s = {opacity: 0}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1);
    }), t.effects.define("clip", "hide", function (e, i) {
        var s, n = {}, o = t(this), a = e.direction || "vertical", r = "both" === a, h = r || "horizontal" === a,
            l = r || "vertical" === a;
        s = o.cssClip(), n.clip = {
            top: l ? (s.bottom - s.top) / 2 : s.top,
            right: h ? (s.right - s.left) / 2 : s.right,
            bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
            left: h ? (s.right - s.left) / 2 : s.left
        }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("drop", "hide", function (e, i) {
        var s, n = t(this), o = e.mode, a = "show" === o, r = e.direction || "left",
            h = "up" === r || "down" === r ? "top" : "left", l = "up" === r || "left" === r ? "-=" : "+=",
            c = "+=" === l ? "-=" : "+=", u = {opacity: 0};
        t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("explode", "hide", function (e, i) {
        function s() {
            b.push(this), b.length === u * d && n();
        }

        function n() {
            p.css({visibility: "visible"}), t(b).remove(), i();
        }

        var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = e.mode,
            g = "show" === f, m = p.show().css("visibility", "hidden").offset(), _ = Math.ceil(p.outerWidth() / d),
            v = Math.ceil(p.outerHeight() / u), b = [];
        for (o = 0; u > o; o++) {
            for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) {
                r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -a * _,
                    top: -o * v
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: _,
                    height: v,
                    left: r + (g ? l * _ : 0),
                    top: h + (g ? c * v : 0),
                    opacity: g ? 0 : 1
                }).animate({
                    left: r + (g ? 0 : l * _),
                    top: h + (g ? 0 : c * v),
                    opacity: g ? 1 : 0
                }, e.duration || 500, e.easing, s);
            }
        }
    }), t.effects.define("fade", "toggle", function (e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({opacity: s ? 1 : 0}, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("fold", "hide", function (e, i) {
        var s = t(this), n = e.mode, o = "show" === n, a = "hide" === n, r = e.size || 15, h = /([0-9]+)%/.exec(r),
            l = !!e.horizFirst, c = l ? ["right", "bottom"] : ["bottom", "right"], u = e.duration / 2,
            d = t.effects.createPlaceholder(s), p = s.cssClip(), f = {clip: t.extend({}, p)},
            g = {clip: t.extend({}, p)}, m = [p[c[0]], p[c[1]]], _ = s.queue().length;
        h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function (i) {
            d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i();
        }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4);
    }), t.effects.define("highlight", "show", function (e, i) {
        var s = t(this), n = {backgroundColor: s.css("backgroundColor")};
        "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(n, {queue: !1, duration: e.duration, easing: e.easing, complete: i});
    }), t.effects.define("size", function (e, i) {
        var s, n, o, a = t(this), r = ["fontSize"],
            h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], c = e.mode, u = "effect" !== c,
            d = e.scale || "both", p = e.origin || ["middle", "center"], f = a.css("position"), g = a.position(),
            m = t.effects.scaledDimensions(a), _ = e.from || m, v = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
            from: {
                y: _.height / m.height,
                x: _.width / m.width
            }, to: {y: v.height / m.height, x: v.width / m.width}
        }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
            var i = t(this), s = t.effects.scaledDimensions(i), o = {
                height: s.height * n.from.y,
                width: s.width * n.from.x,
                outerHeight: s.outerHeight * n.from.y,
                outerWidth: s.outerWidth * n.from.x
            }, a = {
                height: s.height * n.to.y,
                width: s.width * n.to.x,
                outerHeight: s.height * n.to.y,
                outerWidth: s.width * n.to.x
            };
            n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function () {
                u && t.effects.restoreStyle(i);
            });
        })), a.animate(v, {
            queue: !1, duration: e.duration, easing: e.easing, complete: function complete() {
                var e = a.offset();
                0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i();
            }
        });
    }), t.effects.define("scale", function (e, i) {
        var s = t(this), n = e.mode,
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
            a = t.extend(!0, {
                from: t.effects.scaledDimensions(s),
                to: t.effects.scaledDimensions(s, o, e.direction || "both"),
                origin: e.origin || ["middle", "center"]
            }, e);
        e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i);
    }), t.effects.define("puff", "hide", function (e, i) {
        var s = t.extend(!0, {}, e, {fade: !0, percent: parseInt(e.percent, 10) || 150});
        t.effects.effect.scale.call(this, s, i);
    }), t.effects.define("pulsate", "show", function (e, i) {
        var s = t(this), n = e.mode, o = "show" === n, a = "hide" === n, r = o || a,
            h = 2 * (e.times || 5) + (r ? 1 : 0), l = e.duration / h, c = 0, u = 1, d = s.queue().length;
        for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); h > u; u++) {
            s.animate({opacity: c}, l, e.easing), c = 1 - c;
        }
        s.animate({opacity: c}, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1);
    }), t.effects.define("shake", function (e, i) {
        var s = 1, n = t(this), o = e.direction || "left", a = e.distance || 20, r = e.times || 3, h = 2 * r + 1,
            l = Math.round(e.duration / h), c = "up" === o || "down" === o ? "top" : "left",
            u = "up" === o || "left" === o, d = {}, p = {}, f = {}, g = n.queue().length;
        for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); r > s; s++) {
            n.animate(p, l, e.easing).animate(f, l, e.easing);
        }
        n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1);
    }), t.effects.define("slide", "show", function (e, i) {
        var s, n, o = t(this),
            a = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]},
            r = e.mode, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left",
            c = "up" === h || "left" === h, u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0), d = {};
        t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    });
    var f;
    t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function (e, i) {
        t(this).transfer(e, i);
    })), t.ui.focusable = function (i, s) {
        var n, o, a, r, h, l = i.nodeName.toLowerCase();
        return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i)));
    }, t.extend(t.expr[":"], {
        focusable: function focusable(e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"));
        }
    }), t.ui.focusable, t.fn.form = function () {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
    }, t.ui.formResetMixin = {
        _formResetHandler: function _formResetHandler() {
            var e = t(this);
            setTimeout(function () {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function () {
                    this.refresh();
                });
            });
        }, _bindFormResetHandler: function _bindFormResetHandler() {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t);
            }
        }, _unbindFormResetHandler: function _unbindFormResetHandler() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
            }
        }
    }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
        function s(e, i, s, o) {
            return t.each(n, function () {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), i;
        }

        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], o = i.toLowerCase(), a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function (e) {
            return void 0 === e ? a["inner" + i].call(this) : this.each(function () {
                t(this).css(o, s(this, e) + "px");
            });
        }, t.fn["outer" + i] = function (e, n) {
            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
                t(this).css(o, s(this, e, !0, n) + "px");
            });
        };
    }), t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.escapeSelector = function () {
        var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function (e) {
            return e.replace(t, "\\$1");
        };
    }(), t.fn.labels = function () {
        var e, i, s, n, o;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n));
    }, t.fn.scrollParent = function (e) {
        var i = this.css("position"), s = "absolute" === i, n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents().filter(function () {
                var e = t(this);
                return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
            }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
    }, t.extend(t.expr[":"], {
        tabbable: function tabbable(e) {
            var i = t.attr(e, "tabindex"), s = null != i;
            return (!s || i >= 0) && t.ui.focusable(e, s);
        }
    }), t.fn.extend({
        uniqueId: function () {
            var t = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++t);
                });
            };
        }(), removeUniqueId: function removeUniqueId() {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function _create() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh();
        },
        _getCreateEventData: function _getCreateEventData() {
            return {header: this.active, panel: this.active.length ? this.active.next() : t()};
        },
        _createIcons: function _createIcons() {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
        },
        _destroyIcons: function _destroyIcons() {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function _destroy() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function _setOption(t, e) {
            return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0);
        },
        _setOptionDisabled: function _setOptionDisabled(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
        },
        _keydown: function _keydown(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, s = this.headers.length, n = this.headers.index(e.target), o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[s - 1];
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault());
            }
        },
        _panelKeyDown: function _panelKeyDown(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
        },
        refresh: function refresh() {
            var e = this.options;
            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
        },
        _processPanels: function _processPanels() {
            var t = this.headers, e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
        },
        _refresh: function _refresh() {
            var e, i = this.options, s = i.heightStyle, n = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                var e = t(this), i = e.uniqueId().attr("id"), s = e.next(), n = s.uniqueId().attr("id");
                e.attr("aria-controls", n), s.attr("aria-labelledby", i);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function () {
                var i = t(this), s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0));
            }), this.headers.each(function () {
                e -= t(this).outerHeight(!0);
            }), this.headers.next().each(function () {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function () {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide();
            }).height(e));
        },
        _activate: function _activate(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function _findActive(e) {
            return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function _setupEvents(e) {
            var i = {keydown: "_keydown"};
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers);
        },
        _eventHandler: function _eventHandler(e) {
            var i, s, n = this.options, o = this.active, a = t(e.currentTarget), r = a[0] === o[0],
                h = r && n.collapsible, l = h ? t() : a.next(), c = o.next(),
                u = {oldHeader: o, oldPanel: c, newHeader: h ? t() : a, newPanel: l};
            e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")));
        },
        _toggle: function _toggle(e) {
            var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({"aria-hidden": "true"}), s.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function () {
                return 0 === parseInt(t(this).attr("tabIndex"), 10);
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _animate: function _animate(t, e, i) {
            var s, n, o, a = this, r = 0, h = t.css("box-sizing"), l = t.length && (!e.length || t.index() < e.index()),
                c = this.options.animate || {}, u = l && c.down || c, d = function d() {
                    a._toggleComplete(i);
                };
            return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
                duration: o,
                easing: n,
                step: function step(t, e) {
                    e.now = Math.round(t);
                }
            }), t.hide().animate(this.showProps, {
                duration: o, easing: n, complete: d, step: function step(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0);
                }
            }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d);
        },
        _toggleComplete: function _toggleComplete(t) {
            var e = t.oldPanel, i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
        }
    }), t.ui.safeActiveElement = function (t) {
        var e;
        try {
            e = t.activeElement;
        } catch (i) {
            e = t.body;
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e;
    }, t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-caret-1-e"},
            items: "> *",
            menus: "ul",
            position: {my: "left top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function _create() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function mousedownUiMenuItem(t) {
                    t.preventDefault();
                }, "click .ui-menu-item": function clickUiMenuItem(e) {
                    var i = t(e.target), s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                }, "mouseenter .ui-menu-item": function mouseenterUiMenuItem(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"), s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s));
                    }
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function focus(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i);
                }, blur: function blur(e) {
                    this._delay(function () {
                        var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                        i && this.collapseAll(e);
                    });
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function click(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function _destroy() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove();
            });
        },
        _keydown: function _keydown(e) {
            var i, s, n, o, a = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
                        delete this.previousFilter;
                    }, 1e3)) : delete this.previousFilter;
            }
            a && e.preventDefault();
        },
        _activate: function _activate(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
        },
        refresh: function refresh() {
            var e, i, s, n, o, a = this, r = this.options.icons.submenu, h = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var e = t(this), i = e.prev(), s = t("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"));
            }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
                var e = t(this);
                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
            }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function _itemRole() {
            return {menu: "menuitem", listbox: "option"}[this.options.role];
        },
        _setOption: function _setOption(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
            }
            this._super(t, e);
        },
        _setOptionDisabled: function _setOptionDisabled(t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        focus: function focus(t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close();
            }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e});
        },
        _scrollIntoView: function _scrollIntoView(e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
        },
        blur: function blur(t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {item: this.active}), this.active = null);
        },
        _startOpening: function _startOpening(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t);
            }, this.delay));
        },
        _open: function _open(e) {
            var i = t.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
        },
        collapseAll: function collapseAll(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s;
            }, this.delay);
        },
        _close: function _close(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function _closeOnDocumentClick(e) {
            return !t(e.target).closest(".ui-menu").length;
        },
        _isDivider: function _isDivider(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function collapse(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function expand(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e);
            }));
        },
        next: function next(t) {
            this._move("next", "first", t);
        },
        previous: function previous(t) {
            this._move("prev", "last", t);
        },
        isFirstItem: function isFirstItem() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function isLastItem() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function _move(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s);
        },
        nextPage: function nextPage(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = t(this), 0 > i.offset().top - s - n;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0);
        },
        previousPage: function previousPage(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = t(this), i.offset().top - s + n > 0;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0);
        },
        _hasScroll: function _hasScroll() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function select(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
        },
        _filterMenuItems: function _filterMenuItems(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
            });
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function _create() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, a = "input" === n;
            this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function keydown(n) {
                    if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
                    e = !1, s = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", n);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", n);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", n);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", n);
                            break;
                        case o.ENTER:
                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n);
                    }
                }, keypress: function keypress(s) {
                    if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s);
                        }
                    }
                }, input: function input(t) {
                    return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0);
                }, focus: function focus() {
                    this.selectedItem = null, this.previous = this._value();
                }, blur: function blur(t) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0);
                }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function mousedown(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
                    });
                }, menufocus: function menufocus(e, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
                        t(e.target).trigger(e.originalEvent);
                    }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {item: n}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0);
                }, menuselect: function menuselect(e, i) {
                    var s = i.item.data("ui-autocomplete-item"), n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
                        this.previous = n, this.selectedItem = s;
                    })), !1 !== this._trigger("select", e, {item: s}) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s;
                }
            }), this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function beforeunload() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function _destroy() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
        },
        _setOption: function _setOption(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _isEventTargetInWidget: function _isEventTargetInWidget(e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
        },
        _closeOnClickOutside: function _closeOnClickOutside(t) {
            this._isEventTargetInWidget(t) || this.close();
        },
        _appendTo: function _appendTo() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
        },
        _initSource: function _initSource() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
                s(t.ui.autocomplete.filter(e, i.term));
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function success(t) {
                        n(t);
                    },
                    error: function error() {
                        n([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function _searchTimeout(t) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                var e = this.term === this._value(), i = this.menu.element.is(":visible"),
                    s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t));
            }, this.options.delay);
        },
        search: function search(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0;
        },
        _search: function _search(t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response());
        },
        _response: function _response() {
            var e = ++this.requestIndex;
            return t.proxy(function (t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
            }, this);
        },
        __response: function __response(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
        },
        close: function close(t) {
            this.cancelSearch = !0, this._close(t);
        },
        _close: function _close(t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
        },
        _change: function _change(t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem});
        },
        _normalize: function _normalize(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return "string" == typeof e ? {label: e, value: e} : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                });
            });
        },
        _suggest: function _suggest(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {mousedown: "_closeOnClickOutside"});
        },
        _resizeMenu: function _resizeMenu() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function _renderMenu(e, i) {
            var s = this;
            t.each(i, function (t, i) {
                s._renderItemData(e, i);
            });
        },
        _renderItemData: function _renderItemData(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function _renderItem(e, i) {
            return t("<li>").append(e("<div>").text(i.label)).appendTo(e);
        },
        _move: function _move(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0);
        },
        widget: function widget() {
            return this.menu.element;
        },
        _value: function _value() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function _keyEvent(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
        },
        _isContentEditable: function _isContentEditable(t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function escapeRegex(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        }, filter: function filter(e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function (t) {
                return s.test(t.label || t.value || t);
            });
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function results(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        }, __response: function __response(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
        }
    }), t.ui.autocomplete;
    var g = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function _create() {
            this._enhance();
        },
        _enhance: function _enhance() {
            this.element.attr("role", "toolbar"), this.refresh();
        },
        _destroy: function _destroy() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
        },
        _initWidgets: function _initWidgets() {
            var e = this, i = [];
            t.each(this.options.items, function (s, n) {
                var o, a = {};
                return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function () {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {classes: {}}, e.element.find(n).each(function () {
                    var n = t(this), o = n[s]("instance"), r = t.widget.extend({}, a);
                    if ("button" !== s || !n.parent(".ui-spinner").length) {
                        o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
                        var h = n[s]("widget");
                        t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0]);
                    }
                })), void 0) : void 0;
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function _callChildMethod(e) {
            this.childWidgets.each(function () {
                var i = t(this), s = i.data("ui-controlgroup-data");
                s && s[e] && s[e]();
            });
        },
        _updateCornerClass: function _updateCornerClass(t, e) {
            var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                s = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, i), this._addClass(t, null, s);
        },
        _buildSimpleOptions: function _buildSimpleOptions(t, e) {
            var i = "vertical" === this.options.direction, s = {classes: {}};
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t], s;
        },
        _spinnerOptions: function _spinnerOptions(t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e;
        },
        _buttonOptions: function _buttonOptions(t) {
            return this._buildSimpleOptions(t, "ui-button");
        },
        _checkboxradioOptions: function _checkboxradioOptions(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function _selectmenuOptions(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: e ? "auto" : !1,
                classes: {
                    middle: {"ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": ""},
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"}
                }[t]
            };
        },
        _resolveClassesValues: function _resolveClassesValues(e, i) {
            var s = {};
            return t.each(e, function (n) {
                var o = i.options.classes[n] || "";
                o = t.trim(o.replace(g, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ");
            }), s;
        },
        _setOption: function _setOption(t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0);
        },
        refresh: function refresh() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, s) {
                var n = e[s]().data("ui-controlgroup-data");
                if (n && i["_" + n.widgetName + "Options"]) {
                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o);
                } else i._updateCornerClass(e[s](), s);
            }), this._callChildMethod("refresh"));
        }
    }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {"ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all"}
        },
        _getCreateOptions: function _getCreateOptions() {
            var e, i, s = this, n = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
            }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n;
        },
        _create: function _create() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function focus() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                },
                blur: function blur() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                }
            });
        },
        _readType: function _readType() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type);
        },
        _enhance: function _enhance() {
            this._updateIcon(this.element[0].checked);
        },
        widget: function widget() {
            return this.label;
        },
        _getRadioGroup: function _getRadioGroup() {
            var e, i = this.element[0].name, s = "input[name='" + t.ui.escapeSelector(i) + "']";
            return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function () {
                return 0 === t(this).form().length;
            }), e.not(this.element)) : t([]);
        },
        _toggleClasses: function _toggleClasses() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active");
            });
        },
        _destroy: function _destroy() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function _setOption(t, e) {
            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0;
        },
        _updateIcon: function _updateIcon(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function _updateLabel() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label);
        },
        refresh: function refresh() {
            var t = this.element[0].checked, e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({disabled: e});
        }
    }]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {"ui-button": "ui-corner-all"},
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function _getCreateOptions() {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e;
        },
        _create: function _create() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function keyup(e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
                }
            });
        },
        _enhance: function _enhance() {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
        },
        _updateTooltip: function _updateTooltip() {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
        },
        _updateIcon: function _updateIcon(e, i) {
            var s = "iconPosition" !== e, n = s ? this.options.iconPosition : i, o = "top" === n || "bottom" === n;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n));
        },
        _destroy: function _destroy() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title");
        },
        _attachIconSpace: function _attachIconSpace(t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
        },
        _attachIcon: function _attachIcon(t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
        },
        _setOptions: function _setOptions(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t);
        },
        _setOption: function _setOption(t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur());
        },
        refresh: function refresh() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({disabled: t}), this._updateTooltip();
        }
    }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
        options: {text: !0, icons: {primary: null, secondary: null}}, _create: function _create() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super();
        }, _setOption: function _setOption(t, e) {
            return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0);
        }
    }), t.fn.button = function (e) {
        return function () {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({icon: !1}) : this.checkboxradio.apply(this, arguments));
        };
    }(t.fn.button), t.fn.buttonset = function () {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == _typeof(arguments[0]) && arguments[0].items && (arguments[0].items = {button: arguments[0].items}), this.controlgroup.apply(this, arguments));
    }), t.ui.button, t.extend(t.ui, {datepicker: {version: "1.12.1"}});
    var m;
    t.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function _widgetDatepicker() {
            return this.dpDiv;
        },
        setDefaults: function setDefaults(t) {
            return a(this._defaults, t || {}), this;
        },
        _attachDatepicker: function _attachDatepicker(e, i) {
            var s, n, o;
            s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
        },
        _newInst: function _newInst(e, i) {
            var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            };
        },
        _connectDatepicker: function _connectDatepicker(e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function _attachments(e, i) {
            var s, n, o, a = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: n,
                title: n
            }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1;
            }));
        },
        _autoSize: function _autoSize(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009, 11, 20), a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function e(t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++) {
                        t[n].length > i && (i = t[n].length, s = n);
                    }
                    return s;
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length);
            }
        },
        _inlineDatepicker: function _inlineDatepicker(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function _dialogDatepicker(e, i, s, n, o) {
            var r, h, l, c, u, d = this._dialogInst;
            return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this;
        },
        _destroyDatepicker: function _destroyDatepicker(e) {
            var i, s = t(e), n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), m === n && (m = null));
        },
        _enableDatepicker: function _enableDatepicker(e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t;
            }));
        },
        _disableDatepicker: function _disableDatepicker(e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t;
            }), this._disabledInputs[this._disabledInputs.length] = e);
        },
        _isDisabledDatepicker: function _isDisabledDatepicker(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++) {
                if (this._disabledInputs[e] === t) return !0;
            }
            return !1;
        },
        _getInst: function _getInst(e) {
            try {
                return t.data(e, "datepicker");
            } catch (i) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function _optionDatepicker(e, i, s) {
            var n, o, r, h, l = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0);
        },
        _changeDatepicker: function _changeDatepicker(t, e, i) {
            this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function _refreshDatepicker(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function _setDateDatepicker(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
        },
        _getDateDatepicker: function _getDateDatepicker(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
        },
        _doKeyDown: function _doKeyDown(e) {
            var i, s, n, o = t.datepicker._getInst(e.target), a = !0, r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1;
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function _doKeyPress(e) {
            var i, s, n = t.datepicker._getInst(e.target);
            return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
        },
        _doKeyUp: function _doKeyUp(e) {
            var i, s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal) try {
                i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
            } catch (n) {
            }
            return !0;
        },
        _showDatepicker: function _showDatepicker(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var s, n, o, r, h, l, c;
                s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
                    return r |= "fixed" === t(this).css("position"), !r;
                }), h = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s));
            }
        },
        _updateDatepicker: function _updateDatepicker(e) {
            this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, s = this._getNumberOfMonths(e), n = s[1], a = 17, r = e.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null;
            }, 0));
        },
        _shouldFocusInput: function _shouldFocusInput(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
        },
        _checkOffset: function _checkOffset(e, i, s) {
            var n = e.dpDiv.outerWidth(), o = e.dpDiv.outerHeight(), a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i;
        },
        _findPos: function _findPos(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) {
                e = e[n ? "previousSibling" : "nextSibling"];
            }
            return i = t(e).offset(), [i.left, i.top];
        },
        _hideDatepicker: function _hideDatepicker(e) {
            var i, s, n, o, a = this._curInst;
            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function n() {
                t.datepicker._tidyDialog(a);
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1);
        },
        _tidyDialog: function _tidyDialog(t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function _checkExternalClick(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target), s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function _adjustDate(e, i, s) {
            var n = t(e), o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o));
        },
        _gotoToday: function _gotoToday(e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s);
        },
        _selectMonthYear: function _selectMonthYear(e, i, s) {
            var n = t(e), o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n);
        },
        _selectDay: function _selectDay(e, i, s, n) {
            var o, a = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
        },
        _clearDate: function _clearDate(e) {
            var i = t(e);
            this._selectDate(i, "");
        },
        _selectDate: function _selectDate(e, i) {
            var s, n = t(e), o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != _typeof(o.input[0]) && o.input.trigger("focus"), this._lastInput = null);
        },
        _updateAlternate: function _updateAlternate(e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n));
        },
        noWeekends: function noWeekends(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""];
        },
        iso8601Week: function iso8601Week(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
        },
        parseDate: function parseDate(e, i, s) {
            if (null == e || null == i) throw "Invalid arguments";
            if (i = "object" == _typeof(i) ? "" + i : i + "", "" === i) return null;
            var n, o, a, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof l ? l : new Date().getFullYear() % 100 + parseInt(l, 10),
                u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, _ = -1, v = -1, b = !1,
                y = function y(t) {
                    var i = e.length > n + 1 && e.charAt(n + 1) === t;
                    return i && n++, i;
                }, w = function w(t) {
                    var e = y(t), s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        n = "y" === t ? s : 1, o = RegExp("^\\d{" + n + "," + s + "}"), a = i.substring(h).match(o);
                    if (!a) throw "Missing number at position " + h;
                    return h += a[0].length, parseInt(a[0], 10);
                }, k = function k(e, s, n) {
                    var o = -1, a = t.map(y(e) ? n : s, function (t, e) {
                        return [[e, t]];
                    }).sort(function (t, e) {
                        return -(t[1].length - e[1].length);
                    });
                    if (t.each(a, function (t, e) {
                        var s = e[1];
                        return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0;
                    }), -1 !== o) return o + 1;
                    throw "Unknown name at position " + h;
                }, x = function x() {
                    if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
                    h++;
                };
            for (n = 0; e.length > n; n++) {
                if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1; else switch (e.charAt(n)) {
                    case "d":
                        _ = w("d");
                        break;
                    case "D":
                        k("D", u, d);
                        break;
                    case "o":
                        v = w("o");
                        break;
                    case "m":
                        m = w("m");
                        break;
                    case "M":
                        m = k("M", p, f);
                        break;
                    case "y":
                        g = w("y");
                        break;
                    case "@":
                        r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
                        break;
                    case "!":
                        r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
                        break;
                    case "'":
                        y("'") ? x() : b = !0;
                        break;
                    default:
                        x();
                }
            }
            if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (-1 === g ? g = new Date().getFullYear() : 100 > g && (g += new Date().getFullYear() - new Date().getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1) for (m = 1, _ = v; ;) {
                if (o = this._getDaysInMonth(g, m - 1), o >= _) break;
                m++, _ -= o;
            }
            if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
            return r;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function formatDate(t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function h(e) {
                    var i = t.length > s + 1 && t.charAt(s + 1) === e;
                    return i && s++, i;
                }, l = function l(t, e, i) {
                    var s = "" + e;
                    if (h(t)) for (; i > s.length;) {
                        s = "0" + s;
                    }
                    return s;
                }, c = function c(t, e, i, s) {
                    return h(t) ? s[e] : i[e];
                }, u = "", d = !1;
            if (e) for (s = 0; t.length > s; s++) {
                if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1; else switch (t.charAt(s)) {
                    case "d":
                        u += l("d", e.getDate(), 2);
                        break;
                    case "D":
                        u += c("D", e.getDay(), n, o);
                        break;
                    case "o":
                        u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                        break;
                    case "m":
                        u += l("m", e.getMonth() + 1, 2);
                        break;
                    case "M":
                        u += c("M", e.getMonth(), a, r);
                        break;
                    case "y":
                        u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                        break;
                    case "@":
                        u += e.getTime();
                        break;
                    case "!":
                        u += 1e4 * e.getTime() + this._ticksTo1970;
                        break;
                    case "'":
                        h("'") ? u += "'" : d = !0;
                        break;
                    default:
                        u += t.charAt(s);
                }
            }
            return u;
        },
        _possibleChars: function _possibleChars(t) {
            var e, i = "", s = !1, n = function n(i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++, s;
            };
            for (e = 0; t.length > e; e++) {
                if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1; else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e);
                }
            }
            return i;
        },
        _get: function _get(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function _setDateFromField(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t), o = n, a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n;
                } catch (r) {
                    s = e ? "" : s;
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t);
            }
        },
        _getDefaultDate: function _getDefaultDate(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
        },
        _determineDate: function _determineDate(e, i, s) {
            var n = function n(t) {
                    var e = new Date();
                    return e.setDate(e.getDate() + t), e;
                }, o = function o(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
                    } catch (s) {
                    }
                    for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                                break;
                            case "y":
                            case "Y":
                                o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                        }
                        l = h.exec(i);
                    }
                    return new Date(o, a, r);
                },
                a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a);
        },
        _daylightSavingAdjust: function _daylightSavingAdjust(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
        },
        _setDate: function _setDate(t, e, i) {
            var s = !e, n = t.selectedMonth, o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
        },
        _getDate: function _getDate(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e;
        },
        _attachHandlers: function _attachHandlers(e) {
            var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function () {
                var e = {
                    prev: function prev() {
                        t.datepicker._adjustDate(s, -i, "M");
                    }, next: function next() {
                        t.datepicker._adjustDate(s, +i, "M");
                    }, hide: function hide() {
                        t.datepicker._hideDatepicker();
                    }, today: function today() {
                        t.datepicker._gotoToday(s);
                    }, selectDay: function selectDay() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
                    }, selectMonth: function selectMonth() {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1;
                    }, selectYear: function selectYear() {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1;
                    }
                };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function _generateHTML(t) {
            var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N,
                W, E, F, L, R = new Date(),
                B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                Y = this._get(t, "isRTL"), j = this._get(t, "showButtonPanel"), q = this._get(t, "hideIfNoPrevNext"),
                K = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"), $ = this._get(t, "stepMonths"), X = 1 !== U[0] || 1 !== U[1],
                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - V,
                te = t.drawYear;
            if (0 > Z && (Z += 12, te--), J) for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) {
                Z--, 0 > Z && (Z = 11, te--);
            }
            for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
                for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) {
                        if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case U[1] - 1:
                                T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle", I = "";
                        }
                        T += "'>";
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) {
                        M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
                    }
                    for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z ? this.maxRows : z : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)), N = 0; O > N; N++) {
                        for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) {
                            E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
                        }
                        T += W + "</tr>";
                    }
                    Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T;
                }
                y += x;
            }
            return y += l, t._keyEvent = !1, y;
        },
        _generateMonthYearHeader: function _generateMonthYearHeader(t, e, i, s, n, o, a, r) {
            var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"), _ = this._get(t, "changeYear"),
                v = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>"; else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++) {
                    (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                }
                y += "</select>";
            }
            if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (u = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), p = function p(t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? d : e;
                }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) {
                    t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                }
                t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
            }
            return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>";
        },
        _adjustInstDate: function _adjustInstDate(t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0), n = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t);
        },
        _restrictMinMax: function _restrictMinMax(t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && i > e ? i : e;
            return s && n > s ? s : n;
        },
        _notifyChange: function _notifyChange(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
        },
        _getNumberOfMonths: function _getNumberOfMonths(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
        },
        _getMinMaxDate: function _getMinMaxDate(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function _getDaysInMonth(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function _getFirstDayOfMonth(t, e) {
            return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function _canAdjustMonth(t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
        },
        _isInRange: function _isInRange(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), a = null, r = null,
                h = this._get(t, "yearRange");
            return h && (i = h.split(":"), s = new Date().getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear());
        },
        _getFormatConfig: function _getFormatConfig(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            };
        },
        _formatDate: function _formatDate(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == _typeof(e) ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
        }
    }), t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e);
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i));
    }, t.datepicker = new s(), t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var _ = !1;
    t(document).on("mouseup", function () {
        _ = !1;
    }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0},
        _mouseInit: function _mouseInit() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t);
            }).on("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function _mouseDestroy() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function _mouseDown(e) {
            if (!_) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this, s = 1 === e.which,
                    n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                }, this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0)) : !0;
            }
        },
        _mouseMove: function _mouseMove(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e);
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
        },
        _mouseUp: function _mouseUp(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault();
        },
        _mouseDistanceMet: function _mouseDistanceMet(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function _mouseDelayMet() {
            return this.mouseDelayMet;
        },
        _mouseStart: function _mouseStart() {
        },
        _mouseDrag: function _mouseDrag() {
        },
        _mouseStop: function _mouseStop() {
        },
        _mouseCapture: function _mouseCapture() {
            return !0;
        }
    }), t.ui.plugin = {
        add: function add(e, i, s) {
            var n, o = t.ui[e].prototype;
            for (n in s) {
                o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]);
            }
        }, call: function call(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; o.length > n; n++) {
                t.options[o[n][0]] && o[n][1].apply(t.element, i);
            }
        }
    }, t.ui.safeBlur = function (e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
    }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function _create() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
        },
        _setOption: function _setOption(t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function _destroy() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
        },
        _mouseCapture: function _mouseCapture(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1);
        },
        _blockFrames: function _blockFrames(e) {
            this.iframeBlocks = this.document.find(e).map(function () {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];
            });
        },
        _unblockFrames: function _unblockFrames() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function _blurActiveElement(e) {
            var i = t.ui.safeActiveElement(this.document[0]), s = t(e.target);
            s.closest(i).length || t.ui.safeBlur(i);
        },
        _mouseStart: function _mouseStart(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                return "fixed" === t(this).css("position");
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
        },
        _refreshOffsets: function _refreshOffsets(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top};
        },
        _mouseDrag: function _mouseDrag(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = s.position;
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
        },
        _mouseStop: function _mouseStop(e) {
            var i = this, s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", e) !== !1 && i._clear();
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1;
        },
        _mouseUp: function _mouseUp(e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e);
        },
        cancel: function cancel() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {target: this.element[0]})) : this._clear(), this;
        },
        _getHandle: function _getHandle(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0;
        },
        _setHandleClassName: function _setHandleClassName() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle");
        },
        _removeHandleClassName: function _removeHandleClassName() {
            this._removeClass(this.handleElement, "ui-draggable-handle");
        },
        _createHelper: function _createHelper(e) {
            var i = this.options, s = t.isFunction(i.helper),
                n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n;
        },
        _setPositionRelative: function _setPositionRelative() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function _adjustOffsetFromHelper(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _isRootNode: function _isRootNode(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0];
        },
        _getParentOffset: function _getParentOffset() {
            var e = this.offsetParent.offset(), i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function _getRelativeOffset() {
            if ("relative" !== this.cssPosition) return {top: 0, left: 0};
            var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            };
        },
        _cacheMargins: function _cacheMargins() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function _cacheHelperProportions() {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()};
        },
        _setContainment: function _setContainment() {
            var e, i, s, n = this.options, o = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0);
        },
        _convertPositionTo: function _convertPositionTo(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1, s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            };
        },
        _generatePosition: function _generatePosition(t, e) {
            var i, s, n, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), h = t.pageX, l = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            };
        },
        _clear: function _clear() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
        },
        _trigger: function _trigger(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s);
        },
        plugins: {},
        _uiHash: function _uiHash() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function start(e, i, s) {
            var n = t.extend({}, i, {item: s.element});
            s.sortables = [], t(s.options.connectToSortable).each(function () {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n));
            });
        }, stop: function stop(e, i, s) {
            var n = t.extend({}, i, {item: s.element});
            s.cancelHelperRemoval = !1, t.each(s.sortables, function () {
                var t = this;
                t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n));
            });
        }, drag: function drag(e, i, s) {
            t.each(s.sortables, function () {
                var n = !1, o = this;
                o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function () {
                    return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n;
                })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
                    return i.helper[0];
                }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function () {
                    this.refreshPositions();
                }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function () {
                    this.refreshPositions();
                }));
            });
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function start(e, i, s) {
            var n = t("body"), o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor);
        }, stop: function stop(e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor);
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function start(e, i, s) {
            var n = t(i.helper), o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity);
        }, stop: function stop(e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity);
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function start(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
        }, drag: function drag(e, i, s) {
            var n = s.options, o = !1, a = s.scrollParentNotHidden[0], r = s.document[0];
            a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e);
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function start(e, i, s) {
            var n = s.options;
            s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
                var e = t(this), i = e.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                });
            });
        }, drag: function drag(e, i, s) {
            var n, o, a, r, h, l, c, u, d, p, f = s.options, g = f.snapTolerance, m = i.offset.left,
                _ = m + s.helperProportions.width, v = i.offset.top, b = v + s.helperProportions.height;
            for (d = s.snapElements.length - 1; d >= 0; d--) {
                h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {snapItem: s.snapElements[d].item})), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", {
                    top: c - s.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = s._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), a && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h - s.helperProportions.width
                }).left), r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), o && (i.position.top = s._convertPositionTo("relative", {
                    top: u - s.helperProportions.height,
                    left: 0
                }).top), a && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left), r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l - s.helperProportions.width
                }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {snapItem: s.snapElements[d].item})), s.snapElements[d].snapping = n || o || a || r || p);
            }
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function start(e, i, s) {
            var n, o = s.options, a = t.makeArray(t(o.stack)).sort(function (e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
            });
            a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) {
                t(this).css("zIndex", n + e);
            }), this.css("zIndex", n + a.length));
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function start(e, i, s) {
            var n = t(i.helper), o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex);
        }, stop: function stop(e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex);
        }
    }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"},
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function _num(t) {
            return parseFloat(t) || 0;
        },
        _isNumber: function _isNumber(t) {
            return !isNaN(parseFloat(t));
        },
        _hasScroll: function _hasScroll(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1;
            return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n);
        },
        _create: function _create() {
            var e, i = this.options, s = this;
            this._addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
                i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show());
            }).on("mouseleave", function () {
                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide());
            }), this._mouseInit();
        },
        _destroy: function _destroy() {
            this._mouseDestroy();
            var e, i = function i(e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this;
        },
        _setOption: function _setOption(t, e) {
            switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles();
                    break;
                default:
            }
        },
        _setupHandles: function _setupHandles() {
            var e, i, s, n, o, a = this.options, r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) {
                e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({zIndex: a.zIndex}), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            }
            this._renderAxis = function (e) {
                var i, s, n, o;
                e = e || this.element;
                for (i in this.handles) {
                    this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {mousedown: r._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
                }
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se");
            }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
        },
        _removeHandles: function _removeHandles() {
            this._handles.remove();
        },
        _mouseCapture: function _mouseCapture(e) {
            var i, s, n = !1;
            for (i in this.handles) {
                s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
            }
            return !this.options.disabled && n;
        },
        _mouseStart: function _mouseStart(e) {
            var i, s, n, o = this.options, a = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {width: a.width(), height: a.height()}, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {width: a.width(), height: a.height()}, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalPosition = {left: i, top: s}, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0;
        },
        _mouseDrag: function _mouseDrag(e) {
            var i, s, n = this.originalMousePosition, o = this.axis, a = e.pageX - n.left || 0,
                r = e.pageY - n.top || 0, h = this._change[o];
            return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1;
        },
        _mouseStop: function _mouseStop(e) {
            this.resizing = !1;
            var i, s, n, o, a, r, h, l = this.options, c = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
                width: c.helper.width() - o,
                height: c.helper.height() - n
            }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
                top: h,
                left: r
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1;
        },
        _updatePrevProperties: function _updatePrevProperties() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {width: this.size.width, height: this.size.height};
        },
        _applyChanges: function _applyChanges() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t;
        },
        _updateVirtualBoundaries: function _updateVirtualBoundaries(t) {
            var e, i, s, n, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o;
        },
        _updateCache: function _updateCache(t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width);
        },
        _updateRatio: function _updateRatio(t) {
            var e = this.position, i = this.size, s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t;
        },
        _respectSize: function _respectSize(t) {
            var e = this._vBoundaries, i = this.axis, s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                h = this.originalPosition.top + this.originalSize.height, l = /sw|nw|w/.test(i), c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t;
        },
        _getPaddingPlusBorderDimensions: function _getPaddingPlusBorderDimensions(t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) {
                i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
            }
            return {height: i[0] + i[2], width: i[1] + i[3]};
        },
        _proportionallyResize: function _proportionallyResize() {
            if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) {
                t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                });
            }
        },
        _renderProxy: function _renderProxy() {
            var e = this.element, i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
        },
        _change: {
            e: function e(t, _e2) {
                return {width: this.originalSize.width + _e2};
            }, w: function w(t, e) {
                var i = this.originalSize, s = this.originalPosition;
                return {left: s.left + e, width: i.width - e};
            }, n: function n(t, e, i) {
                var s = this.originalSize, n = this.originalPosition;
                return {top: n.top + i, height: s.height - i};
            }, s: function s(t, e, i) {
                return {height: this.originalSize.height + i};
            }, se: function se(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
            }, sw: function sw(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
            }, ne: function ne(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
            }, nw: function nw(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
            }
        },
        _propagate: function _propagate(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui());
        },
        plugins: {},
        ui: function ui() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function stop(e) {
            var i = t(this).resizable("instance"), s = i.options, n = i._proportionallyResizeElements,
                o = n.length && /textarea/i.test(n[0].nodeName),
                a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = o ? 0 : i.sizeDiff.width,
                h = {width: i.size.width - r, height: i.size.height - a},
                l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? {top: c, left: l} : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function step() {
                    var s = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e);
                }
            });
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function start() {
            var e, i, s, n, o, a, r, h = t(this).resizable("instance"), l = h.options, c = h.element, u = l.containment,
                d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
                left: 0,
                top: 0
            }, h.containerPosition = {left: 0, top: 0}, h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) {
                i[t] = h._num(e.css("padding" + s));
            }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: a,
                height: r
            }));
        }, resize: function resize(e) {
            var i, s, n, o, a = t(this).resizable("instance"), r = a.options, h = a.containerOffset, l = a.position,
                c = a._aspectRatio || e.shiftKey, u = {top: 0, left: 0}, d = a.containerElement, p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height);
        }, stop: function stop() {
            var e = t(this).resizable("instance"), i = e.options, s = e.containerOffset, n = e.containerPosition,
                o = e.containerElement, a = t(e.helper), r = a.offset(), h = a.outerWidth() - e.sizeDiff.width,
                l = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            });
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function start() {
            var e = t(this).resizable("instance"), i = e.options;
            t(i.alsoResize).each(function () {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                });
            });
        }, resize: function resize(e, i) {
            var s = t(this).resizable("instance"), n = s.options, o = s.originalSize, a = s.originalPosition, r = {
                height: s.size.height - o.height || 0,
                width: s.size.width - o.width || 0,
                top: s.position.top - a.top || 0,
                left: s.position.left - a.left || 0
            };
            t(n.alsoResize).each(function () {
                var e = t(this), s = t(this).data("ui-resizable-alsoresize"), n = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function (t, e) {
                    var i = (s[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (n[e] = i || null);
                }), e.css(n);
            });
        }, stop: function stop() {
            t(this).removeData("ui-resizable-alsoresize");
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function start() {
            var e = t(this).resizable("instance"), i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper);
        }, resize: function resize() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({position: "relative", height: e.size.height, width: e.size.width});
        }, stop: function stop() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function resize() {
            var e, i = t(this).resizable("instance"), s = i.options, n = i.size, o = i.originalSize,
                a = i.originalPosition, r = i.axis, h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                l = h[0] || 1, c = h[1] || 1, u = Math.round((n.width - o.width) / l) * l,
                d = Math.round((n.height - o.height) / c) * c, p = o.width + u, f = o.height + d,
                g = s.maxWidth && p > s.maxWidth, m = s.maxHeight && f > s.maxHeight, _ = s.minWidth && s.minWidth > p,
                v = s.minHeight && s.minHeight > f;
            s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p));
        }
    }), t.ui.resizable, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {"ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all"},
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function using(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i);
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
        _create: function _create() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus();
        },
        _init: function _init() {
            this.options.autoOpen && this.open();
        },
        _appendTo: function _appendTo() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
        },
        _destroy: function _destroy() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
        },
        widget: function widget() {
            return this.uiDialog;
        },
        disable: t.noop,
        enable: t.noop,
        close: function close(e) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
                i._trigger("close", e);
            }));
        },
        isOpen: function isOpen() {
            return this._isOpen;
        },
        moveToTop: function moveToTop() {
            this._moveToTop();
        },
        _moveToTop: function _moveToTop(e, i) {
            var s = !1, n = this.uiDialog.siblings(".ui-front:visible").map(function () {
                return +t(this).css("z-index");
            }).get(), o = Math.max.apply(null, n);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s;
        },
        open: function open() {
            var e = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                e._focusTabbable(), e._trigger("focus");
            }), this._makeFocusTarget(), this._trigger("open"), void 0);
        },
        _focusTabbable: function _focusTabbable() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus");
        },
        _keepFocus: function _keepFocus(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]),
                    i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable();
            }

            e.preventDefault(), i.call(this), this._delay(i);
        },
        _createWrapper: function _createWrapper() {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function keydown(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), void 0;
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
                            n.trigger("focus");
                        }), e.preventDefault()) : (this._delay(function () {
                            s.trigger("focus");
                        }), e.preventDefault());
                    }
                }, mousedown: function mousedown(t) {
                    this._moveToTop(t) && this._focusTabbable();
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")});
        },
        _createTitlebar: function _createTitlebar() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function mousedown(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function click(t) {
                    t.preventDefault(), this.close(t);
                }
            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({"aria-labelledby": e.attr("id")});
        },
        _title: function _title(t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;");
        },
        _createButtonPane: function _createButtonPane() {
            this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons();
        },
        _createButtons: function _createButtons() {
            var e = this, i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, function (i, s) {
                var n, o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = t.extend({type: "button"}, s), n = s.click, o = {
                    icon: s.icon,
                    iconPosition: s.iconPosition,
                    showLabel: s.showLabel,
                    icons: s.icons,
                    text: s.text
                }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function () {
                    n.apply(e.element[0], arguments);
                });
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0);
        },
        _makeDraggable: function _makeDraggable() {
            function e(t) {
                return {position: t.position, offset: t.offset};
            }

            var i = this, s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function start(s, n) {
                    i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n));
                },
                drag: function drag(t, s) {
                    i._trigger("drag", t, e(s));
                },
                stop: function stop(n, o) {
                    var a = o.offset.left - i.document.scrollLeft(), r = o.offset.top - i.document.scrollTop();
                    s.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o));
                }
            });
        },
        _makeResizable: function _makeResizable() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                };
            }

            var i = this, s = this.options, n = s.resizable, o = this.uiDialog.css("position"),
                a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function start(s, n) {
                    i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n));
                },
                resize: function resize(t, s) {
                    i._trigger("resize", t, e(s));
                },
                stop: function stop(n, o) {
                    var a = i.uiDialog.offset(), r = a.left - i.document.scrollLeft(),
                        h = a.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o));
                }
            }).css("position", o);
        },
        _trackFocus: function _trackFocus() {
            this._on(this.widget(), {
                focusin: function focusin(e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target);
                }
            });
        },
        _makeFocusTarget: function _makeFocusTarget() {
            this._untrackInstance(), this._trackingInstances().unshift(this);
        },
        _untrackInstance: function _untrackInstance() {
            var e = this._trackingInstances(), i = t.inArray(this, e);
            -1 !== i && e.splice(i, 1);
        },
        _trackingInstances: function _trackingInstances() {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t;
        },
        _minHeight: function _minHeight() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
        },
        _position: function _position() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
        },
        _setOptions: function _setOptions(e) {
            var i = this, s = !1, n = {};
            t.each(e, function (t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
        },
        _setOption: function _setOption(e, i) {
            var s, n, o = this.uiDialog;
            "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({label: t("<a>").text("" + this.options.closeText).html()}), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function _size() {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function _blockFrames() {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0];
            });
        },
        _unblockFrames: function _unblockFrames() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function _allowInteraction(e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function _createOverlay() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function () {
                    e = !1;
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function focusin(t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                    }
                }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {mousedown: "_keepFocus"}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
            }
        },
        _destroyOverlay: function _destroyOverlay() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null;
            }
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        options: {dialogClass: ""},
        _createWrapper: function _createWrapper() {
            this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function _setOption(t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments);
        }
    }), t.ui.dialog, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function _create() {
            var e, i = this.options, s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
                return t.is(s);
            }, this.proportions = function () {
                return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                };
            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable");
        },
        _addToManager: function _addToManager(e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this);
        },
        _splice: function _splice(t) {
            for (var e = 0; t.length > e; e++) {
                t[e] === this && t.splice(e, 1);
            }
        },
        _destroy: function _destroy() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e);
        },
        _setOption: function _setOption(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i);
            }; else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i);
            }
            this._super(e, i);
        },
        _activate: function _activate(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
        },
        _deactivate: function _deactivate(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i));
        },
        _over: function _over(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
        },
        _out: function _out(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
        },
        _drop: function _drop(e, i) {
            var s = i || t.ui.ddmanager.current, n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var i = t(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && v(s, t.extend(i, {offset: i.element.offset()}), i.options.tolerance, e) ? (n = !0, !1) : void 0;
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1;
        },
        ui: function ui(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            };
        },
        _addHoverClass: function _addHoverClass() {
            this._addClass("ui-droppable-hover");
        },
        _removeHoverClass: function _removeHoverClass() {
            this._removeClass("ui-droppable-hover");
        },
        _addActiveClass: function _addActiveClass() {
            this._addClass("ui-droppable-active");
        },
        _removeActiveClass: function _removeActiveClass() {
            this._removeClass("ui-droppable-active");
        }
    });
    var v = t.ui.intersect = function () {
        function t(t, e, i) {
            return t >= e && e + i > t;
        }

        return function (e, i, s, n) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                a = (e.positionAbs || e.position.absolute).top + e.margins.top, r = o + e.helperProportions.width,
                h = a + e.helperProportions.height, l = i.offset.left, c = i.offset.top, u = l + i.proportions().width,
                d = c + i.proportions().height;
            switch (s) {
                case "fit":
                    return o >= l && u >= r && a >= c && d >= h;
                case "intersect":
                    return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;
                case "pointer":
                    return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
                case "touch":
                    return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);
                default:
                    return !1;
            }
        };
    }();
    t.ui.ddmanager = {
        current: null, droppables: {"default": []}, prepareOffsets: function prepareOffsets(e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [], a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; o.length > s; s++) {
                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; r.length > n; n++) {
                        if (r[n] === o[s].element[0]) {
                            o[s].proportions().height = 0;
                            continue t;
                        }
                    }
                    o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
                        width: o[s].element[0].offsetWidth,
                        height: o[s].element[0].offsetHeight
                    }));
                }
            }
        }, drop: function drop(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)));
            }), s;
        }, dragStart: function dragStart(e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function () {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
            });
        }, drag: function drag(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, a = v(e, this, this.options.tolerance, i),
                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () {
                        return t(this).droppable("instance").options.scope === n;
                    }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)));
                }
            });
        }, dragStop: function dragStop(e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        }
    }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
        options: {hoverClass: !1, activeClass: !1},
        _addActiveClass: function _addActiveClass() {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function _removeActiveClass() {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function _addHoverClass() {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function _removeHoverClass() {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
        }
    }), t.ui.droppable, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            }, max: 100, value: 0, change: null, complete: null
        },
        min: 0,
        _create: function _create() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
        },
        _destroy: function _destroy() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
        },
        value: function value(t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0);
        },
        _constrainedValue: function _constrainedValue(t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t));
        },
        _setOptions: function _setOptions(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue();
        },
        _setOption: function _setOption(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
        },
        _setOptionDisabled: function _setOptionDisabled(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _percentage: function _percentage() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function _refreshValue() {
            var e = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete");
        }
    }), t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function _create() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
                    var i = t(this), s = i.offset(),
                        n = {left: s.left - e.elementPos.left, top: s.top - e.elementPos.top};
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: n.left,
                        top: n.top,
                        right: n.left + i.outerWidth(),
                        bottom: n.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function _destroy() {
            this.selectees.removeData("selectable-item"), this._mouseDestroy();
        },
        _mouseStart: function _mouseStart(e) {
            var i = this, s = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {unselecting: s.element}));
            }), t(e.target).parents().addBack().each(function () {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {selecting: n.element}) : i._trigger("unselecting", e, {unselecting: n.element}), !1) : void 0;
            }));
        },
        _mouseDrag: function _mouseDrag(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, n = this.options, o = this.opos[0], a = this.opos[1], r = e.pageX, h = e.pageY;
                return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: h - a
                }), this.selectees.each(function () {
                    var i = t.data(this, "selectable-item"), l = !1, c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {selecting: i.element}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {unselecting: i.element}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {unselecting: i.element})))));
                }), !1;
            }
        },
        _mouseStop: function _mouseStop(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {unselected: s.element});
            }), t(".ui-selecting", this.element[0]).each(function () {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {selected: s.element});
            }), this._trigger("stop", e), this.helper.remove(), !1;
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"},
            disabled: null,
            icons: {button: "ui-icon-triangle-1-s"},
            position: {my: "left top", at: "left bottom", collision: "none"},
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function _create() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t();
        },
        _drawButton: function _drawButton() {
            var e, i = this, s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function click(t) {
                    this.button.focus(), t.preventDefault();
                }
            }), this.element.hide(), this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                i._rendered || i._refreshMenu();
            });
        },
        _drawMenu: function _drawMenu() {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {"ui-menu": "ui-corner-bottom"},
                role: "listbox",
                select: function select(t, i) {
                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
                },
                focus: function focus(t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {item: s}), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"));
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                return !1;
            }, this.menuInstance._isDivider = function () {
                return !1;
            };
        },
        refresh: function refresh() {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function _refreshMenu() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function open(t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)));
        },
        _position: function _position() {
            this.menuWrap.position(t.extend({of: this.button}, this.options.position));
        },
        close: function close(t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t));
        },
        widget: function widget() {
            return this.button;
        },
        menuWidget: function menuWidget() {
            return this.menu;
        },
        _renderButtonItem: function _renderButtonItem(e) {
            var i = t("<span>");
            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
        },
        _renderMenu: function _renderMenu(e, i) {
            var s = this, n = "";
            t.each(i, function (i, o) {
                var a;
                o.optgroup !== n && (a = t("<li>", {text: o.optgroup}), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o);
            });
        },
        _renderItemData: function _renderItemData(t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function _renderItem(e, i) {
            var s = t("<li>"), n = t("<div>", {title: i.element.attr("title")});
            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e);
        },
        _setText: function _setText(t, e) {
            e ? t.text(e) : t.html("&#160;");
        },
        _move: function _move(t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s);
        },
        _getSelectedItem: function _getSelectedItem() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function _toggle(t) {
            this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function _setSelection() {
            var t;
            this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus());
        },
        _documentClick: {
            mousedown: function mousedown(e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e));
            }
        },
        _buttonEvents: {
            mousedown: function mousedown() {
                var t;
                window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange();
            }, click: function click(t) {
                this._setSelection(), this._toggle(t);
            }, keydown: function keydown(e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1;
                }
                i && e.preventDefault();
            }
        },
        _selectFocusedItem: function _selectFocusedItem(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function _select(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {item: t}), t.index !== i && this._trigger("change", e, {item: t}), this.close(e);
        },
        _setAria: function _setAria(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e);
        },
        _setOption: function _setOption(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton();
        },
        _setOptionDisabled: function _setOptionDisabled(t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
        },
        _appendTo: function _appendTo() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
        },
        _toggleAttr: function _toggleAttr() {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function _resizeButton() {
            var t = this.options.width;
            return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0);
        },
        _resizeMenu: function _resizeMenu() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function _getCreateOptions() {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t;
        },
        _parseOptions: function _parseOptions(e) {
            var i = this, s = [];
            e.each(function (e, n) {
                s.push(i._parseOption(t(n), e));
            }), this.items = s;
        },
        _parseOption: function _parseOption(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            };
        },
        _destroy: function _destroy() {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
        }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function _create() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1;
        },
        _refresh: function _refresh() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function _createHandles() {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle"), o = "<span tabindex='0'></span>",
                a = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) {
                a.push(o);
            }
            this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
            });
        },
        _createRange: function _createRange() {
            var e = this.options;
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null);
        },
        _setupEvents: function _setupEvents() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
        },
        _destroy: function _destroy() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
        },
        _mouseCapture: function _mouseCapture(e) {
            var i, s, n, o, a, r, h, l, c = this, u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(s - c.values(e));
                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e);
            }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - h.left - o.width() / 2,
                top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0));
        },
        _mouseStart: function _mouseStart() {
            return !0;
        },
        _mouseDrag: function _mouseDrag(t) {
            var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1;
        },
        _mouseStop: function _mouseStop(t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
        },
        _detectOrientation: function _detectOrientation() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function _normValueFromMouse(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o);
        },
        _uiHash: function _uiHash(t, e, i) {
            var s = {handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value()};
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s;
        },
        _hasMultipleValues: function _hasMultipleValues() {
            return this.options.values && this.options.values.length;
        },
        _start: function _start(t, e) {
            return this._trigger("start", t, this._uiHash(e));
        },
        _slide: function _slide(t, e, i) {
            var s, n, o = this.value(), a = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
        },
        _stop: function _stop(t, e) {
            this._trigger("stop", t, this._uiHash(e));
        },
        _change: function _change(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
        },
        value: function value(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value();
        },
        values: function values(e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) {
                s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            }
            this._refreshValue();
        },
        _setOption: function _setOption(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) {
                        this._change(null, s);
                    }
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _setOptionDisabled: function _setOptionDisabled(t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _value: function _value() {
            var t = this.options.value;
            return t = this._trimAlignValue(t);
        },
        _values: function _values(t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
                    i[s] = this._trimAlignValue(i[s]);
                }
                return i;
            }
            return [];
        },
        _trimAlignValue: function _trimAlignValue(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
        },
        _calculateNewMax: function _calculateNewMax() {
            var t = this.options.max, e = this._valueMin(), i = this.options.step, s = Math.round((t - e) / i) * i;
            t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
        },
        _precision: function _precision() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
        },
        _precisionOf: function _precisionOf(t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1;
        },
        _valueMin: function _valueMin() {
            return this.options.min;
        },
        _valueMax: function _valueMax() {
            return this.max;
        },
        _refreshRange: function _refreshRange(t) {
            "vertical" === t && this.range.css({width: "", left: ""}), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            });
        },
        _refreshValue: function _refreshValue() {
            var e, i, s, n, o, a = this.options.range, r = this.options, h = this,
                l = this._animateOff ? !1 : r.animate, c = {};
            this._hasMultipleValues() ? this.handles.each(function (s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({left: i + "%"}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({width: i - e + "%"}, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({bottom: i + "%"}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({height: i - e + "%"}, {
                    queue: !1,
                    duration: r.animate
                }))), e = i;
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: i + "%"}, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: 100 - i + "%"}, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: i + "%"}, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: 100 - i + "%"}, r.animate));
        },
        _handleEvents: {
            keydown: function keydown(e) {
                var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return;
                }
                switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - o);
                }
                this._slide(e, a, n);
            }, keyup: function keyup(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"));
            }
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function _isOverAxis(t, e, i) {
            return t >= e && e + i > t;
        },
        _isFloating: function _isFloating(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
        },
        _create: function _create() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0;
        },
        _setOption: function _setOption(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function _setHandleClassName() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
            });
        },
        _destroy: function _destroy() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) {
                this.items[t].item.removeData(this.widgetName + "-item");
            }
            return this;
        },
        _mouseCapture: function _mouseCapture(e, i) {
            var s = null, n = !1, o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0;
            }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
                this === e.target && (n = !0);
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1);
        },
        _mouseStart: function _mouseStart(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) {
                this.containers[n]._trigger("activate", e, this._uiHash(this));
            }
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0;
        },
        _mouseDrag: function _mouseDrag(e) {
            var i, s, n, o, a = this.options, r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) {
                if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break;
                }
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
        },
        _mouseStop: function _mouseStop(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this, n = this.placeholder.offset(), o = this.options.axis, a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                        s._clear(e);
                    });
                } else this._clear(e, i);
                return !1;
            }
        },
        cancel: function cancel() {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup", {target: null})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) {
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                }
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this;
        },
        serialize: function serialize(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each(function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
            }), !s.length && e.key && s.push(e.key + "="), s.join("&");
        },
        toArray: function toArray(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each(function () {
                s.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), s;
        },
        _intersectsWith: function _intersectsWith(t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top,
                n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, h = r + t.height,
                l = this.offset.click.top, c = this.offset.click.left,
                u = "x" === this.options.axis || s + l > r && h > s + l,
                d = "y" === this.options.axis || e + c > o && a > e + c, p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function _intersectsWithPointer(t) {
            var e, i,
                s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                o = s && n;
            return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1;
        },
        _intersectsWithSides: function _intersectsWithSides(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e);
        },
        _getDragVerticalDirection: function _getDragVerticalDirection() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function _getDragHorizontalDirection() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function refresh(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
        },
        _connectWith: function _connectWith() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
        },
        _getItemsAsjQuery: function _getItemsAsjQuery(e) {
            function i() {
                r.push(this);
            }

            var s, n, o, a, r = [], h = [], l = this._connectWith();
            if (l && e) for (s = l.length - 1; s >= 0; s--) {
                for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) {
                    a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                }
            }
            for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) {
                h[s][0].each(i);
            }
            return t(r);
        },
        _removeCurrentsFromItems: function _removeCurrentsFromItems() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function (t) {
                for (var i = 0; e.length > i; i++) {
                    if (e[i] === t.item[0]) return !1;
                }
                return !0;
            });
        },
        _refreshItems: function _refreshItems(e) {
            this.items = [], this.containers = [this];
            var i, s, n, o, a, r, h, l, c = this.items,
                u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]],
                d = this._connectWith();
            if (d && this.ready) for (i = d.length - 1; i >= 0; i--) {
                for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) {
                    o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {item: this.currentItem}) : t(o.options.items, o.element), o]), this.containers.push(o));
                }
            }
            for (i = u.length - 1; i >= 0; i--) {
                for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) {
                    h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
                        item: h,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    });
                }
            }
        },
        refreshPositions: function refreshPositions(e) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--) {
                s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) {
                o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            }
            return this;
        },
        _createPlaceholder: function _createPlaceholder(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function element() {
                    var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]);
                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n;
                }, update: function update(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function _createTrPlaceholder(e, i) {
            var s = this;
            e.children().each(function () {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
            });
        },
        _contactContainers: function _contactContainers(e) {
            var i, s, n, o, a, r, h, l, c, u, d = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--) {
                if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                    d = this.containers[i], p = i;
                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            }
            if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
                for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) {
                    t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));
                }
                if (!o && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1;
            }
        },
        _createHelper: function _createHelper(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s;
        },
        _adjustOffsetFromHelper: function _adjustOffsetFromHelper(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function _getParentOffset() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function _getRelativeOffset() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {top: 0, left: 0};
        },
        _cacheMargins: function _cacheMargins() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function _cacheHelperProportions() {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()};
        },
        _setContainment: function _setContainment() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
        },
        _convertPositionTo: function _convertPositionTo(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            };
        },
        _generatePosition: function _generatePosition(e) {
            var i, s, n = this.options, o = e.pageX, a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            };
        },
        _rearrange: function _rearrange(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function () {
                n === this.counter && this.refreshPositions(!s);
            });
        },
        _clear: function _clear(t, e) {
            function i(t, e, i) {
                return function (s) {
                    i._trigger(t, s, e._uiHash(e));
                };
            }

            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) {
                    ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                }
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (e || (n.push(function (t) {
                this._trigger("remove", t, this._uiHash());
            }), n.push(function (t) {
                return function (e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), n.push(function (t) {
                return function (e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) {
                e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            }
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (s = 0; n.length > s; s++) {
                    n[s].call(this, t);
                }
                this._trigger("stop", t, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function _trigger() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
        },
        _uiHash: function _uiHash(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            };
        }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function _create() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function beforeunload() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function _getCreateOptions() {
            var e = this._super(), i = this.element;
            return t.each(["min", "max", "step"], function (t, s) {
                var n = i.attr(s);
                null != n && n.length && (e[s] = n);
            }), e;
        },
        _events: {
            keydown: function keydown(t) {
                this._start(t) && this._keydown(t) && t.preventDefault();
            },
            keyup: "_stop",
            focus: function focus() {
                this.previous = this.element.val();
            },
            blur: function blur(t) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0);
            },
            mousewheel: function mousewheel(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(t);
                    }, 100), t.preventDefault();
                }
            },
            "mousedown .ui-spinner-button": function mousedownUiSpinnerButton(e) {
                function i() {
                    var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
                    e || (this.element.trigger("focus"), this.previous = s, this._delay(function () {
                        this.previous = s;
                    }));
                }

                var s;
                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, i.call(this);
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function mouseenterUiSpinnerButton(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0;
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function _enhance() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
        },
        _draw: function _draw() {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({classes: {"ui-button": ""}}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height());
        },
        _keydown: function _keydown(e) {
            var i = this.options, s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0;
            }
            return !1;
        },
        _start: function _start(t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1;
        },
        _repeat: function _repeat(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, e, i);
            }, t), this._spin(e * this.options.step, i);
        },
        _spin: function _spin(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {value: i}) === !1 || (this._value(i), this.counter++);
        },
        _increment: function _increment(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1;
        },
        _precision: function _precision() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
        },
        _precisionOf: function _precisionOf(t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1;
        },
        _adjustValue: function _adjustValue(t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t;
        },
        _stop: function _stop(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t));
        },
        _setOption: function _setOption(t, e) {
            var i, s, n;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0);
        },
        _setOptionDisabled: function _setOptionDisabled(t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
        },
        _setOptions: r(function (t) {
            this._super(t);
        }),
        _parse: function _parse(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t;
        },
        _format: function _format(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
        },
        _refresh: function _refresh() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        isValid: function isValid() {
            var t = this.value();
            return null === t ? !1 : t === this._adjustValue(t);
        },
        _value: function _value(t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh();
        },
        _destroy: function _destroy() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element);
        },
        stepUp: r(function (t) {
            this._stepUp(t);
        }),
        _stepUp: function _stepUp(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop());
        },
        stepDown: r(function (t) {
            this._stepDown(t);
        }),
        _stepDown: function _stepDown(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
        },
        pageUp: r(function (t) {
            this._stepUp((t || 1) * this.options.page);
        }),
        pageDown: r(function (t) {
            this._stepDown((t || 1) * this.options.page);
        }),
        value: function value(t) {
            return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val());
        },
        widget: function widget() {
            return this.uiSpinner;
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function _enhance() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        }, _uiSpinnerHtml: function _uiSpinnerHtml() {
            return "<span>";
        }, _buttonHtml: function _buttonHtml() {
            return "<a></a><a></a>";
        }
    }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function () {
            var t = /#.*$/;
            return function (e) {
                var i, s;
                i = e.href.replace(t, ""), s = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i);
                } catch (n) {
                }
                try {
                    s = decodeURIComponent(s);
                } catch (n) {
                }
                return e.hash.length > 1 && i === s;
            };
        }(),
        _create: function _create() {
            var e = this, i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t);
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active);
        },
        _initialActive: function _initialActive() {
            var e = this.options.active, i = this.options.collapsible, s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function (i, n) {
                return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0;
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e;
        },
        _getCreateEventData: function _getCreateEventData() {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()};
        },
        _tabKeydown: function _tabKeydown(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), s = this.tabs.index(i), n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        n = !1, s--;
                        break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
                    default:
                        return;
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", s);
                }, this.delay));
            }
        },
        _panelKeydown: function _panelKeydown(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"));
        },
        _handlePageNav: function _handlePageNav(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
        },
        _findNextTab: function _findNextTab(e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e;
            }

            for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);) {
                e = i ? e + 1 : e - 1;
            }
            return e;
        },
        _focusNextTab: function _focusNextTab(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
        },
        _setOption: function _setOption(t, e) {
            return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0);
        },
        _sanitizeSelector: function _sanitizeSelector(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function refresh() {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                return i.index(t);
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh();
        },
        _refresh: function _refresh() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function _processTabs() {
            var e = this, i = this.tabs, s = this.anchors, n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault();
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                return t("a", this)[0];
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
                var n, o, a, r = t(s).uniqueId().attr("id"), h = t(s).closest("li"), l = h.attr("aria-controls");
                e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), o.attr("aria-labelledby", r);
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
        },
        _getList: function _getList() {
            return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function _createPanel(e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
        },
        _setOptionDisabled: function _setOptionDisabled(e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) {
                i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            }
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0);
        },
        _setupEvents: function _setupEvents(e) {
            var i = {};
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function click(t) {
                    t.preventDefault();
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function _setupHeightStyle(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
            }), this.element.children().not(this.panels).each(function () {
                i -= t(this).outerHeight(!0);
            }), this.panels.each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                i = Math.max(i, t(this).height("").height());
            }).height(i));
        },
        _eventHandler: function _eventHandler(e) {
            var i = this.options, s = this.active, n = t(e.currentTarget), o = n.closest("li"), a = o[0] === s[0],
                r = a && i.collapsible, h = r ? t() : this._getPanelForTab(o),
                l = s.length ? this._getPanelForTab(s) : t(),
                c = {oldTab: s, oldPanel: l, newTab: r ? t() : o, newPanel: h};
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c));
        },
        _toggle: function _toggle(e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i);
            }

            function n() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s());
            }

            var o = this, a = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n();
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
                return 0 === t(this).attr("tabIndex");
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _activate: function _activate(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function _findActive(e) {
            return e === !1 ? t() : this.tabs.eq(e);
        },
        _getIndex: function _getIndex(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e;
        },
        _destroy: function _destroy() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
            }), this.tabs.each(function () {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function enable(e) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
                return t !== e ? t : null;
            }) : t.map(this.tabs, function (t, i) {
                return i !== e ? i : null;
            })), this._setOptionDisabled(i));
        },
        disable: function disable(e) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === e) i = !0; else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e];
                }
                this._setOptionDisabled(i);
            }
        },
        load: function load(e, i) {
            e = this._getIndex(e);
            var s = this, n = this.tabs.eq(e), o = n.find(".ui-tabs-anchor"), a = this._getPanelForTab(n),
                r = {tab: n, panel: a}, h = function h(t, e) {
                    "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr;
                };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) {
                setTimeout(function () {
                    a.html(t), s._trigger("load", i, r), h(n, e);
                }, 1);
            }).fail(function (t, e) {
                setTimeout(function () {
                    h(t, e);
                }, 1);
            })));
        },
        _ajaxSettings: function _ajaxSettings(e, i, s) {
            var n = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""), beforeSend: function beforeSend(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: o}, s));
                }
            };
        },
        _getPanelForTab: function _getPanelForTab(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i));
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function _processTabs() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        }
    }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {"ui-tooltip": "ui-corner-all ui-widget-shadow"},
            content: function content() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html();
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function _addDescribedBy(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")));
        },
        _removeDescribedBy: function _removeDescribedBy(e) {
            var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s);
            -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby");
        },
        _create: function _create() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]);
        },
        _setOption: function _setOption(e, i) {
            var s = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
                s._updateContent(e.element);
            });
        },
        _setOptionDisabled: function _setOptionDisabled(t) {
            this[t ? "_disable" : "_enable"]();
        },
        _disable: function _disable() {
            var e = this;
            t.each(this.tooltips, function (i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0], e.close(n, !0);
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0;
            }));
        },
        _enable: function _enable() {
            this.disabledTitles.each(function () {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
            }), this.disabledTitles = t([]);
        },
        open: function open(e) {
            var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""));
            }), this._registerCloseHandlers(e, s), this._updateContent(s, e));
        },
        _updateContent: function _updateContent(t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
                n._delay(function () {
                    t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i));
                });
            }), i && this._open(e, t, i), void 0);
        },
        _open: function _open(e, i, s) {
            function n(t) {
                l.of = t, a.is(":hidden") || a.position(l);
            }

            var o, a, r, h, l = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {mousemove: n}), n(e)) : a.position(t.extend({of: i}, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
                    a.is(":visible") && (n(l.of), clearInterval(r));
                }, t.fx.interval)), this._trigger("open", e, {tooltip: a});
            }
        },
        _registerCloseHandlers: function _registerCloseHandlers(e, i) {
            var s = {
                keyup: function keyup(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0], this.close(s, !0);
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function () {
                this._removeTooltip(this._find(i).tooltip);
            }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s);
        },
        close: function close(e) {
            var i, s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
            return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
                s._removeTooltip(t(this));
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e];
            }), o.closing = !0, this._trigger("close", e, {tooltip: i}), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0);
        },
        _tooltip: function _tooltip(e) {
            var i = t("<div>").attr("role", "tooltip"), s = t("<div>").appendTo(i), n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
                element: e,
                tooltip: i
            };
        },
        _find: function _find(t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null;
        },
        _removeTooltip: function _removeTooltip(t) {
            t.remove(), delete this.tooltips[t.attr("id")];
        },
        _appendTo: function _appendTo(t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e;
        },
        _destroy: function _destroy() {
            var e = this;
            t.each(this.tooltips, function (i, s) {
                var n = t.Event("blur"), o = s.element;
                n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"));
            }), this.liveRegion.remove();
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {tooltipClass: null},
        _tooltip: function _tooltip() {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t;
        }
    }), t.ui.tooltip;
});/*! jQuery Validation * https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function (t) {
    t.extend(t.fn, {
        validate: function validate(e) {
            if (!this.length) return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
                i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0);
            }), this.submit(function (e) {
                function s() {
                    var s;
                    return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0;
                }

                return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1);
            })), i);
        }, valid: function valid() {
            if (t(this[0]).is("form")) return this.validate().form();
            var e = !0, i = t(this[0].form).validate();
            return this.each(function () {
                e = e && i.element(this);
            }), e;
        }, removeAttrs: function removeAttrs(e) {
            var i = {}, s = this;
            return t.each(e.split(/\s/), function (t, e) {
                i[e] = s.attr(e), s.removeAttr(e);
            }), i;
        }, rules: function rules(e, i) {
            var s = this[0];
            if (e) {
                var r = t.data(s.form, "validator").settings, n = r.rules, a = t.validator.staticRules(s);
                switch (e) {
                    case "add":
                        t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
                        break;
                    case "remove":
                        if (!i) return delete n[s.name], a;
                        var u = {};
                        return t.each(i.split(/\s/), function (t, e) {
                            u[e] = a[e], delete a[e];
                        }), u;
                }
            }
            var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
            if (o.required) {
                var l = o.required;
                delete o.required, o = t.extend({required: l}, o);
            }
            return o;
        }
    }), t.extend(t.expr[":"], {
        blank: function blank(e) {
            return !t.trim("" + t(e).val());
        }, filled: function filled(e) {
            return !!t.trim("" + t(e).val());
        }, unchecked: function unchecked(e) {
            return !t(e).prop("checked");
        }
    }), t.validator = function (e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init();
    }, t.validator.format = function (e, i) {
        return 1 === arguments.length ? function () {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i);
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
            e = e.replace(RegExp("\\{" + t + "\\}", "g"), function () {
                return i;
            });
        }), e);
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function onfocusin(t) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide());
            },
            onfocusout: function onfocusout(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t);
            },
            onkeyup: function onkeyup(t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t);
            },
            onclick: function onclick(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);
            },
            highlight: function highlight(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s);
            },
            unhighlight: function unhighlight(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s);
            }
        },
        setDefaults: function setDefaults(e) {
            t.extend(t.validator.defaults, e);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function init() {
                function e(e) {
                    var i = t.data(this[0].form, "validator"), s = "on" + e.type.replace(/^validate/, "");
                    i.settings[s] && i.settings[s].call(i, this[0], e);
                }

                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i = this.groups = {};
                t.each(this.settings.groups, function (e, s) {
                    "string" == typeof s && (s = s.split(/\s/)), t.each(s, function (t, s) {
                        i[s] = e;
                    });
                });
                var s = this.settings.rules;
                t.each(s, function (e, i) {
                    s[e] = t.validator.normalizeRule(i);
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
            }, form: function form() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
            }, checkForm: function checkForm() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) {
                    this.check(e[t]);
                }
                return this.valid();
            }, element: function element(e) {
                e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                var i = this.check(e) !== !1;
                return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i;
            }, showErrors: function showErrors(e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e) {
                        this.errorList.push({message: e[i], element: this.findByName(i)[0]});
                    }
                    this.successList = t.grep(this.successList, function (t) {
                        return !(t.name in e);
                    });
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
            }, resetForm: function resetForm() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
            }, numberOfInvalids: function numberOfInvalids() {
                return this.objectLength(this.invalid);
            }, objectLength: function objectLength(t) {
                var e = 0;
                for (var i in t) {
                    e++;
                }
                return e;
            }, hideErrors: function hideErrors() {
                this.addWrapper(this.toHide).hide();
            }, valid: function valid() {
                return 0 === this.size();
            }, size: function size() {
                return this.errorList.length;
            }, focusInvalid: function focusInvalid() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                } catch (e) {
                }
            }, findLastActive: function findLastActive() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function (t) {
                    return t.element.name === e.name;
                }).length && e;
            }, elements: function elements() {
                var e = this, i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0);
                });
            }, clean: function clean(e) {
                return t(e)[0];
            }, errors: function errors() {
                var e = this.settings.errorClass.replace(" ", ".");
                return t(this.settings.errorElement + "." + e, this.errorContext);
            }, reset: function reset() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([]);
            }, prepareForm: function prepareForm() {
                this.reset(), this.toHide = this.errors().add(this.containers);
            }, prepareElement: function prepareElement(t) {
                this.reset(), this.toHide = this.errorsFor(t);
            }, elementValue: function elementValue(e) {
                var i = t(e).attr("type"), s = t(e).val();
                return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s;
            }, check: function check(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s = t(e).rules(), r = !1, n = this.elementValue(e);
                for (var a in s) {
                    var u = {method: a, parameters: s[a]};
                    try {
                        if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
                            r = !0;
                            continue;
                        }
                        if (r = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
                        if (!i) return this.formatAndAdd(e, u), !1;
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o;
                    }
                }
                return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0);
            }, customDataMessage: function customDataMessage(e, i) {
                return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase());
            }, customMessage: function customMessage(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e]);
            }, findDefined: function findDefined() {
                for (var t = 0; arguments.length > t; t++) {
                    if (void 0 !== arguments[t]) return arguments[t];
                }
                return void 0;
            }, defaultMessage: function defaultMessage(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>");
            }, formatAndAdd: function formatAndAdd(e, i) {
                var s = this.defaultMessage(e, i.method), r = /\$?\{(\d+)\}/g;
                "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
                    message: s,
                    element: e
                }), this.errorMap[e.name] = s, this.submitted[e.name] = s;
            }, addWrapper: function addWrapper(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t;
            }, defaultShowErrors: function defaultShowErrors() {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var i = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) {
                    this.showLabel(this.successList[t]);
                }
                if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) {
                    this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                }
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
            }, validElements: function validElements() {
                return this.currentElements.not(this.invalidElements());
            }, invalidElements: function invalidElements() {
                return t(this.errorList).map(function () {
                    return this.element;
                });
            }, showLabel: function showLabel(e, i) {
                var s = this.errorsFor(e);
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s);
            }, errorsFor: function errorsFor(e) {
                var i = this.idOrName(e);
                return this.errors().filter(function () {
                    return t(this).attr("for") === i;
                });
            }, idOrName: function idOrName(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name);
            }, validationTargetFor: function validationTargetFor(t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t;
            }, checkable: function checkable(t) {
                return /radio|checkbox/i.test(t.type);
            }, findByName: function findByName(e) {
                return t(this.currentForm).find("[name='" + e + "']");
            }, getLength: function getLength(e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;
                }
                return e.length;
            }, depend: function depend(t, e) {
                return this.dependTypes[_typeof(t)] ? this.dependTypes[_typeof(t)](t, e) : !0;
            }, dependTypes: {
                "boolean": function boolean(t) {
                    return t;
                }, string: function string(e, i) {
                    return !!t(e, i.form).length;
                }, "function": function _function(t, e) {
                    return t(e);
                }
            }, optional: function optional(e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch";
            }, startRequest: function startRequest(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0);
            }, stopRequest: function stopRequest(e, i) {
                this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
            }, previousValue: function previousValue(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                });
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function addClassRules(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e);
        },
        classRules: function classRules(e) {
            var i = {}, s = t(e).attr("class");
            return s && t.each(s.split(" "), function () {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]);
            }), i;
        },
        attributeRules: function attributeRules(e) {
            var i = {}, s = t(e), r = s[0].getAttribute("type");
            for (var n in t.validator.methods) {
                var a;
                "required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0);
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i;
        },
        dataRules: function dataRules(e) {
            var i, s, r = {}, n = t(e);
            for (i in t.validator.methods) {
                s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
            }
            return r;
        },
        staticRules: function staticRules(e) {
            var i = {}, s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i;
        },
        normalizeRules: function normalizeRules(e, i) {
            return t.each(e, function (s, r) {
                if (r === !1) return delete e[s], void 0;
                if (r.param || r.depends) {
                    var n = !0;
                    switch (_typeof(r.depends)) {
                        case "string":
                            n = !!t(r.depends, i.form).length;
                            break;
                        case "function":
                            n = r.depends.call(i, i);
                    }
                    n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s];
                }
            }), t.each(e, function (s, r) {
                e[s] = t.isFunction(r) ? r(i) : r;
            }), t.each(["minlength", "maxlength"], function () {
                e[this] && (e[this] = Number(e[this]));
            }), t.each(["rangelength", "range"], function () {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]));
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e;
        },
        normalizeRule: function normalizeRule(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function () {
                    i[this] = !0;
                }), e = i;
            }
            return e;
        },
        addMethod: function addMethod(e, i, s) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e));
        },
        methods: {
            required: function required(e, i, s) {
                if (!this.depend(s, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0;
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0;
            }, email: function email(t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t);
            }, url: function url(t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t);
            }, date: function date(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t));
            }, dateISO: function dateISO(t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
            }, number: function number(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
            }, digits: function digits(t, e) {
                return this.optional(e) || /^\d+$/.test(t);
            }, creditcard: function creditcard(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return !1;
                var i = 0, s = 0, r = !1;
                t = t.replace(/\D/g, "");
                for (var n = t.length - 1; n >= 0; n--) {
                    var a = t.charAt(n);
                    s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r;
                }
                return 0 === i % 10;
            }, minlength: function minlength(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s;
            }, maxlength: function maxlength(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || s >= r;
            }, rangelength: function rangelength(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s[0] && s[1] >= r;
            }, min: function min(t, e, i) {
                return this.optional(e) || t >= i;
            }, max: function max(t, e, i) {
                return this.optional(e) || i >= t;
            }, range: function range(t, e, i) {
                return this.optional(e) || t >= i[0] && i[1] >= t;
            }, equalTo: function equalTo(e, i, s) {
                var r = t(s);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    t(i).valid();
                }), e === r.val();
            }, remote: function remote(e, i, s) {
                if (this.optional(i)) return "dependency-mismatch";
                var r = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {url: s} || s, r.old === e) return r.valid;
                r.old = e;
                var n = this;
                this.startRequest(i);
                var a = {};
                return a[i.name] = e, t.ajax(t.extend(!0, {
                    url: s,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    success: function success(s) {
                        n.settings.messages[i.name].remote = r.originalMessage;
                        var a = s === !0 || "true" === s;
                        if (a) {
                            var u = n.formSubmitted;
                            n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors();
                        } else {
                            var o = {}, l = s || n.defaultMessage(i, "remote");
                            o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o);
                        }
                        r.valid = a, n.stopRequest(i, a);
                    }
                }, s)), "pending";
            }
        }
    }), t.format = t.validator.format;
})(jQuery), function (t) {
    var e = {};
    if (t.ajaxPrefilter) t.ajaxPrefilter(function (t, i, s) {
        var r = t.port;
        "abort" === t.mode && (e[r] && e[r].abort(), e[r] = s);
    }); else {
        var i = t.ajax;
        t.ajax = function (s) {
            var r = ("mode" in s ? s : t.ajaxSettings).mode, n = ("port" in s ? s : t.ajaxSettings).port;
            return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments);
        };
    }
}(jQuery), function (t) {
    t.extend(t.fn, {
        validateDelegate: function validateDelegate(e, i, s) {
            return this.bind(i, function (i) {
                var r = t(i.target);
                return r.is(e) ? s.apply(r, arguments) : void 0;
            });
        }
    });
}(jQuery);/*! pace 1.0.2 */
(function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, _v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K,
        L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice, Y = {}.hasOwnProperty, Z = function Z(a, b) {
            function c() {
                this.constructor = a;
            }

            for (var d in b) {
                Y.call(b, d) && (a[d] = b[d]);
            }
            return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
        }, $ = [].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++) {
                if (b in this && this[b] === a) return b;
            }
            return -1;
        };
    for (u = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {checkInterval: 100, selectors: ["body"]},
        eventLag: {minSamples: 10, sampleCount: 3, lagThreshold: 3},
        ajax: {trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: []}
    }, C = function C() {
        var a;
        return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function E(a) {
        return setTimeout(a, 50);
    }, t = function t(a) {
        return clearTimeout(a);
    }), G = function G(a) {
        var b, _c;
        return b = C(), (_c = function c() {
            var d;
            return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
                return E(_c);
            })) : setTimeout(_c, 33 - d);
        })();
    }, F = function F() {
        var a, b, c;
        return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
    }, _v = function v() {
        var a, b, c, d, e, f, g;
        for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) {
            if (c = d[f]) for (a in c) {
                Y.call(c, a) && (e = c[a], null != b[a] && "object" == _typeof(b[a]) && null != e && "object" == _typeof(e) ? _v(b[a], e) : b[a] = e);
            }
        }
        return b;
    }, q = function q(a) {
        var b, c, d, e, f;
        for (c = b = 0, e = 0, f = a.length; f > e; e++) {
            d = a[e], c += Math.abs(d), b++;
        }
        return c / b;
    }, x = function x(a, b) {
        var c, d, e;
        if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
            if (c = e.getAttribute("data-pace-" + a), !b) return c;
            try {
                return JSON.parse(c);
            } catch (f) {
                return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
            }
        }
    }, g = function () {
        function a() {
        }

        return a.prototype.on = function (a, b, c, d) {
            var e;
            return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                handler: b,
                ctx: c,
                once: d
            });
        }, a.prototype.once = function (a, b, c) {
            return this.on(a, b, c, !0);
        }, a.prototype.off = function (a, b) {
            var c, d, e;
            if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length;) {
                    e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                }
                return e;
            }
        }, a.prototype.trigger = function () {
            var a, b, c, d, e, f, g, h, i;
            if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                for (e = 0, i = []; e < this.bindings[c].length;) {
                    h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                }
                return i;
            }
        }, a;
    }(), j = window.Pace || {}, window.Pace = j, _v(j, g.prototype), D = j.options = _v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) {
        K = U[Q], D[K] === !0 && (D[K] = u[K]);
    }
    i = function (a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments);
        }

        return Z(b, a), b;
    }(Error), b = function () {
        function a() {
            this.progress = 0;
        }

        return a.prototype.getElement = function () {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(D.target), !a) throw new i();
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
            }
            return this.el;
        }, a.prototype.finish = function () {
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
        }, a.prototype.update = function (a) {
            return this.progress = a, this.render();
        }, a.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement());
            } catch (a) {
                i = a;
            }
            return this.el = void 0;
        }, a.prototype.render = function () {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) {
                b = g[e], a.children[0].style[b] = d;
            }
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress;
        }, a.prototype.done = function () {
            return this.progress >= 100;
        }, a;
    }(), h = function () {
        function a() {
            this.bindings = {};
        }

        return a.prototype.trigger = function (a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) {
                    c = f[d], g.push(c.call(this, b));
                }
                return g;
            }
        }, a.prototype.on = function (a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
        }, a;
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function w(a, b) {
        var c, d, e;
        e = [];
        for (d in b.prototype) {
            try {
                e.push(null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? Object.defineProperty(a, d, {
                    get: function get() {
                        return b.prototype[d];
                    }, configurable: !0, enumerable: !0
                }) : a[d] = b.prototype[d] : void 0);
            } catch (f) {
                c = f;
            }
        }
        return e;
    }, A = [], j.ignore = function () {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c;
    }, j.track = function () {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c;
    }, J = function J(a) {
        var b;
        if (null == a && (a = "GET"), "track" === A[0]) return "force";
        if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets) return !0;
            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0;
        }
        return !1;
    }, k = function (a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function a(_a) {
                var b;
                return b = _a.open, _a.open = function (d, e) {
                    return J(d) && c.trigger("request", {type: d, url: e, request: _a}), b.apply(_a, arguments);
                };
            }, window.XMLHttpRequest = function (b) {
                var c;
                return c = new P(b), a(c), c;
            };
            try {
                w(window.XMLHttpRequest, P);
            } catch (d) {
            }
            if (null != O) {
                window.XDomainRequest = function () {
                    var b;
                    return b = new O(), a(b), b;
                };
                try {
                    w(window.XDomainRequest, O);
                } catch (d) {
                }
            }
            if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function (a, b) {
                    var d;
                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                        type: "socket",
                        url: a,
                        protocols: b,
                        request: d
                    }), d;
                };
                try {
                    w(window.WebSocket, N);
                } catch (d) {
                }
            }
        }

        return Z(b, a), b;
    }(h), R = null, y = function y() {
        return null == R && (R = new k()), R;
    }, I = function I(a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) {
            if (b = e[c], "string" == typeof b) {
                if (-1 !== a.indexOf(b)) return !0;
            } else if (b.test(a)) return !0;
        }
        return !1;
    }, y().on("request", function (b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
            var b, c, g, h, i, k;
            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                    if (K = i[c], K instanceof a) {
                        K.watch.apply(K, d);
                        break;
                    }
                    k.push(void 0);
                }
                return k;
            }
        }, c));
    }), a = function () {
        function a() {
            var a = this;
            this.elements = [], y().on("request", function () {
                return a.watch.apply(a, arguments);
            });
        }

        return a.prototype.watch = function (a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c));
        }, a;
    }(), o = function () {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
                return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
            }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) {
                b = g[d], a.addEventListener(b, function () {
                    return h.progress = 100;
                }, !1);
            } else f = a.onreadystatechange, a.onreadystatechange = function () {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
            };
        }

        return a;
    }(), n = function () {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) {
                b = e[c], a.addEventListener(b, function () {
                    return f.progress = 100;
                }, !1);
            }
        }

        return a;
    }(), d = function () {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) {
                b = f[c], this.elements.push(new e(b));
            }
        }

        return a;
    }(), e = function () {
        function a(a) {
            this.selector = a, this.progress = 0, this.check();
        }

        return a.prototype.check = function () {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                return a.check();
            }, D.elements.checkInterval);
        }, a.prototype.done = function () {
            return this.progress = 100;
        }, a;
    }(), c = function () {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
            };
        }

        return a.prototype.states = {loading: 0, interactive: 50, complete: 100}, a;
    }(), f = function () {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
                var g;
                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
            }, 50);
        }

        return a;
    }(), m = function () {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"));
        }

        return a.prototype.tick = function (a, b) {
            var c;
            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
        }, a;
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function z() {
        return D.restartOnPushState ? j.restart() : void 0;
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
        return z(), T.apply(window.history, arguments);
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
        return z(), W.apply(window.history, arguments);
    }), l = {ajax: a, elements: d, document: c, eventLag: f}, (B = function B() {
        var a, c, d, e, f, g, h, i;
        for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) {
            a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        }
        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) {
            K = i[d], L.push(new K(D));
        }
        return j.bar = r = new b(), H = [], M = new m();
    })(), j.stop = function () {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B();
    }, j.restart = function () {
        return j.trigger("restart"), j.stop(), j.start();
    }, j.go = function () {
        var a;
        return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q) {
                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) {
                    g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
                }
            }
            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
                return r.finish(), j.running = !1, j.trigger("hide");
            }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c();
        });
    }, j.start = function (a) {
        _v(D, a), j.running = !0;
        try {
            r.render();
        } catch (b) {
            i = b;
        }
        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50);
    }, "function" == typeof define && define.amd ? define(["pace"], function () {
        return j;
    }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = j : D.startOnPageLoad && j.start();
}).call(this);/*! Select2  https://github.com/select2/select2/blob/master/LICENSE.md */
!function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, t) {
        return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t;
    } : n(jQuery);
}(function (u) {
    var e = function () {
        if (u && u.fn && u.fn.select2 && u.fn.select2.amd) var e = u.fn.select2.amd;
        var t, n, r, h, o, _s, f, g, m, v, y, _, i, a, w;

        function b(e, t) {
            return i.call(e, t);
        }

        function l(e, t) {
            var n, r, i, o, s, a, l, c, u, d, p, h = t && t.split("/"), f = y.map, g = f && f["*"] || {};
            if (e) {
                for (s = (e = e.split("/")).length - 1, y.nodeIdCompat && w.test(e[s]) && (e[s] = e[s].replace(w, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), u = 0; u < e.length; u++) {
                    if ("." === (p = e[u])) e.splice(u, 1), u -= 1; else if (".." === p) {
                        if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
                        0 < u && (e.splice(u - 1, 2), u -= 2);
                    }
                }
                e = e.join("/");
            }
            if ((h || g) && f) {
                for (u = (n = e.split("/")).length; 0 < u; u -= 1) {
                    if (r = n.slice(0, u).join("/"), h) for (d = h.length; 0 < d; d -= 1) {
                        if (i = (i = f[h.slice(0, d).join("/")]) && i[r]) {
                            o = i, a = u;
                            break;
                        }
                    }
                    if (o) break;
                    !l && g && g[r] && (l = g[r], c = u);
                }
                !o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"));
            }
            return e;
        }

        function A(t, n) {
            return function () {
                var e = a.call(arguments, 0);
                return "string" != typeof e[0] && 1 === e.length && e.push(null), _s.apply(h, e.concat([t, n]));
            };
        }

        function x(t) {
            return function (e) {
                m[t] = e;
            };
        }

        function D(e) {
            if (b(v, e)) {
                var t = v[e];
                delete v[e], _[e] = !0, o.apply(h, t);
            }
            if (!b(m, e) && !b(_, e)) throw new Error("No " + e);
            return m[e];
        }

        function c(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e];
        }

        function S(e) {
            return e ? c(e) : [];
        }

        return e && e.requirejs || (e ? n = e : e = {}, m = {}, v = {}, y = {}, _ = {}, i = Object.prototype.hasOwnProperty, a = [].slice, w = /\.js$/, f = function f(e, t) {
            var n, r = c(e), i = r[0], o = t[1];
            return e = r[1], i && (n = D(i = l(i, o))), i ? e = n && n.normalize ? n.normalize(e, function (t) {
                return function (e) {
                    return l(e, t);
                };
            }(o)) : l(e, o) : (i = (r = c(e = l(e, o)))[0], e = r[1], i && (n = D(i))), {
                f: i ? i + "!" + e : e,
                n: e,
                pr: i,
                p: n
            };
        }, g = {
            require: function require(e) {
                return A(e);
            }, exports: function exports(e) {
                var t = m[e];
                return void 0 !== t ? t : m[e] = {};
            }, module: function module(e) {
                return {
                    id: e, uri: "", exports: m[e], config: function (e) {
                        return function () {
                            return y && y.config && y.config[e] || {};
                        };
                    }(e)
                };
            }
        }, o = function o(e, t, n, r) {
            var i, o, s, a, l, c, u, d = [], p = _typeof(n);
            if (c = S(r = r || e), "undefined" == p || "function" == p) {
                for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1) {
                    if ("require" === (o = (a = f(t[l], c)).f)) d[l] = g.require(e); else if ("exports" === o) d[l] = g.exports(e), u = !0; else if ("module" === o) i = d[l] = g.module(e); else if (b(m, o) || b(v, o) || b(_, o)) d[l] = D(o); else {
                        if (!a.p) throw new Error(e + " missing " + o);
                        a.p.load(a.n, A(r, !0), x(o), {}), d[l] = m[o];
                    }
                }
                s = n ? n.apply(m[e], d) : void 0, e && (i && i.exports !== h && i.exports !== m[e] ? m[e] = i.exports : s === h && u || (m[e] = s));
            } else e && (m[e] = n);
        }, t = n = _s = function s(e, t, n, r, i) {
            if ("string" == typeof e) return g[e] ? g[e](t) : D(f(e, S(t)).f);
            if (!e.splice) {
                if ((y = e).deps && _s(y.deps, y.callback), !t) return;
                t.splice ? (e = t, t = n, n = null) : e = h;
            }
            return t = t || function () {
            }, "function" == typeof n && (n = r, r = i), r ? o(h, e, t, n) : setTimeout(function () {
                o(h, e, t, n);
            }, 4), _s;
        }, _s.config = function (e) {
            return _s(e);
        }, t._defined = m, (r = function r(e, t, n) {
            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
            t.splice || (n = t, t = []), b(m, e) || b(v, e) || (v[e] = [e, t, n]);
        }).amd = {jQuery: !0}, e.requirejs = t, e.require = n, e.define = r), e.define("almond", function () {
        }), e.define("jquery", [], function () {
            var e = u || $;
            return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e;
        }), e.define("select2/utils", ["jquery"], function (o) {
            var i = {};

            function u(e) {
                var t = e.prototype, n = [];
                for (var r in t) {
                    "function" == typeof t[r] && "constructor" !== r && n.push(r);
                }
                return n;
            }

            i.Extend = function (e, t) {
                var n = {}.hasOwnProperty;

                function r() {
                    this.constructor = e;
                }

                for (var i in t) {
                    n.call(t, i) && (e[i] = t[i]);
                }
                return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
            }, i.Decorate = function (r, i) {
                var e = u(i), t = u(r);

                function o() {
                    var e = Array.prototype.unshift, t = i.prototype.constructor.length, n = r.prototype.constructor;
                    0 < t && (e.call(arguments, r.prototype.constructor), n = i.prototype.constructor), n.apply(this, arguments);
                }

                i.displayName = r.displayName, o.prototype = new function () {
                    this.constructor = o;
                }();
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    o.prototype[s] = r.prototype[s];
                }

                function a(e) {
                    var t = function t() {
                    };
                    e in o.prototype && (t = o.prototype[e]);
                    var n = i.prototype[e];
                    return function () {
                        return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments);
                    };
                }

                for (var l = 0; l < e.length; l++) {
                    var c = e[l];
                    o.prototype[c] = a(c);
                }
                return o;
            };

            function e() {
                this.listeners = {};
            }

            e.prototype.on = function (e, t) {
                this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t];
            }, e.prototype.trigger = function (e) {
                var t = Array.prototype.slice, n = t.call(arguments, 1);
                this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
            }, e.prototype.invoke = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) {
                    e[n].apply(this, t);
                }
            }, i.Observable = e, i.generateChars = function (e) {
                for (var t = "", n = 0; n < e; n++) {
                    t += Math.floor(36 * Math.random()).toString(36);
                }
                return t;
            }, i.bind = function (e, t) {
                return function () {
                    e.apply(t, arguments);
                };
            }, i._convertData = function (e) {
                for (var t in e) {
                    var n = t.split("-"), r = e;
                    if (1 !== n.length) {
                        for (var i = 0; i < n.length; i++) {
                            var o = n[i];
                            (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in r || (r[o] = {}), i == n.length - 1 && (r[o] = e[t]), r = r[o];
                        }
                        delete e[t];
                    }
                }
                return e;
            }, i.hasScroll = function (e, t) {
                var n = o(t), r = t.style.overflowX, i = t.style.overflowY;
                return (r !== i || "hidden" !== i && "visible" !== i) && ("scroll" === r || "scroll" === i || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth);
            }, i.escapeMarkup = function (e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                    return t[e];
                });
            }, i.appendMany = function (e, t) {
                if ("1.7" === o.fn.jquery.substr(0, 3)) {
                    var n = o();
                    o.map(t, function (e) {
                        n = n.add(e);
                    }), t = n;
                }
                e.append(t);
            }, i.__cache = {};
            var n = 0;
            return i.GetUniqueElementId = function (e) {
                var t = e.getAttribute("data-select2-id");
                return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++n), t = n.toString())), t;
            }, i.StoreData = function (e, t, n) {
                var r = i.GetUniqueElementId(e);
                i.__cache[r] || (i.__cache[r] = {}), i.__cache[r][t] = n;
            }, i.GetData = function (e, t) {
                var n = i.GetUniqueElementId(e);
                return t ? i.__cache[n] && null != i.__cache[n][t] ? i.__cache[n][t] : o(e).data(t) : i.__cache[n];
            }, i.RemoveData = function (e) {
                var t = i.GetUniqueElementId(e);
                null != i.__cache[t] && delete i.__cache[t], e.removeAttribute("data-select2-id");
            }, i;
        }), e.define("select2/results", ["jquery", "./utils"], function (h, f) {
            function r(e, t, n) {
                this.$element = e, this.data = n, this.options = t, r.__super__.constructor.call(this);
            }

            return f.Extend(r, f.Observable), r.prototype.render = function () {
                var e = h('<ul class="select2-results__options" role="listbox"></ul>');
                return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e;
            }, r.prototype.clear = function () {
                this.$results.empty();
            }, r.prototype.displayMessage = function (e) {
                var t = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var n = h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                    r = this.options.get("translations").get(e.message);
                n.append(t(r(e.args))), n[0].className += " select2-results__message", this.$results.append(n);
            }, r.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove();
            }, r.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var r = e.results[n], i = this.option(r);
                        t.push(i);
                    }
                    this.$results.append(t);
                } else 0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"});
            }, r.prototype.position = function (e, t) {
                t.find(".select2-results").append(e);
            }, r.prototype.sort = function (e) {
                return this.options.get("sorter")(e);
            }, r.prototype.highlightFirstItem = function () {
                var e = this.$results.find(".select2-results__option[aria-selected]"),
                    t = e.filter("[aria-selected=true]");
                0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible();
            }, r.prototype.setClasses = function () {
                var t = this;
                this.data.current(function (e) {
                    var r = h.map(e, function (e) {
                        return e.id.toString();
                    });
                    t.$results.find(".select2-results__option[aria-selected]").each(function () {
                        var e = h(this), t = f.GetData(this, "data"), n = "" + t.id;
                        null != t.element && t.element.selected || null == t.element && -1 < h.inArray(n, r) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false");
                    });
                });
            }, r.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = {disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e)},
                    n = this.option(t);
                n.className += " loading-results", this.$results.prepend(n);
            }, r.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove();
            }, r.prototype.option = function (e) {
                var t = document.createElement("li");
                t.className = "select2-results__option";
                var n = {role: "option", "aria-selected": "false"},
                    r = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                for (var i in (null != e.element && r.call(e.element, ":disabled") || null == e.element && e.disabled) && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]), n) {
                    var o = n[i];
                    t.setAttribute(i, o);
                }
                if (e.children) {
                    var s = h(t), a = document.createElement("strong");
                    a.className = "select2-results__group";
                    h(a);
                    this.template(e, a);
                    for (var l = [], c = 0; c < e.children.length; c++) {
                        var u = e.children[c], d = this.option(u);
                        l.push(d);
                    }
                    var p = h("<ul></ul>", {"class": "select2-results__options select2-results__options--nested"});
                    p.append(l), s.append(a), s.append(p);
                } else this.template(e, t);
                return f.StoreData(t, "data", e), t;
            }, r.prototype.bind = function (t, e) {
                var l = this, n = t.id + "-results";
                this.$results.attr("id", n), t.on("results:all", function (e) {
                    l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem());
                }), t.on("results:append", function (e) {
                    l.append(e.data), t.isOpen() && l.setClasses();
                }), t.on("query", function (e) {
                    l.hideMessages(), l.showLoading(e);
                }), t.on("select", function () {
                    t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
                }), t.on("unselect", function () {
                    t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
                }), t.on("open", function () {
                    l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible();
                }), t.on("close", function () {
                    l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant");
                }), t.on("results:toggle", function () {
                    var e = l.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup");
                }), t.on("results:select", function () {
                    var e = l.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = f.GetData(e[0], "data");
                        "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {data: t});
                    }
                }), t.on("results:previous", function () {
                    var e = l.getHighlightedResults(), t = l.$results.find("[aria-selected]"), n = t.index(e);
                    if (!(n <= 0)) {
                        var r = n - 1;
                        0 === e.length && (r = 0);
                        var i = t.eq(r);
                        i.trigger("mouseenter");
                        var o = l.$results.offset().top, s = i.offset().top, a = l.$results.scrollTop() + (s - o);
                        0 === r ? l.$results.scrollTop(0) : s - o < 0 && l.$results.scrollTop(a);
                    }
                }), t.on("results:next", function () {
                    var e = l.getHighlightedResults(), t = l.$results.find("[aria-selected]"), n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                        var r = t.eq(n);
                        r.trigger("mouseenter");
                        var i = l.$results.offset().top + l.$results.outerHeight(!1),
                            o = r.offset().top + r.outerHeight(!1), s = l.$results.scrollTop() + o - i;
                        0 === n ? l.$results.scrollTop(0) : i < o && l.$results.scrollTop(s);
                    }
                }), t.on("results:focus", function (e) {
                    e.element.addClass("select2-results__option--highlighted");
                }), t.on("results:message", function (e) {
                    l.displayMessage(e);
                }), h.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                    var t = l.$results.scrollTop(), n = l.$results.get(0).scrollHeight - t + e.deltaY,
                        r = 0 < e.deltaY && t - e.deltaY <= 0, i = e.deltaY < 0 && n <= l.$results.height();
                    r ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : i && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation());
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
                    var t = h(this), n = f.GetData(this, "data");
                    "true" !== t.attr("aria-selected") ? l.trigger("select", {
                        originalEvent: e,
                        data: n
                    }) : l.options.get("multiple") ? l.trigger("unselect", {
                        originalEvent: e,
                        data: n
                    }) : l.trigger("close", {});
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (e) {
                    var t = f.GetData(this, "data");
                    l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
                        data: t,
                        element: h(this)
                    });
                });
            }, r.prototype.getHighlightedResults = function () {
                return this.$results.find(".select2-results__option--highlighted");
            }, r.prototype.destroy = function () {
                this.$results.remove();
            }, r.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]").index(e), n = this.$results.offset().top,
                        r = e.offset().top, i = this.$results.scrollTop() + (r - n), o = r - n;
                    i -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(i);
                }
            }, r.prototype.template = function (e, t) {
                var n = this.options.get("templateResult"), r = this.options.get("escapeMarkup"), i = n(e, t);
                null == i ? t.style.display = "none" : "string" == typeof i ? t.innerHTML = r(i) : h(t).append(i);
            }, r;
        }), e.define("select2/keys", [], function () {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
        }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, r, i) {
            function o(e, t) {
                this.$element = e, this.options = t, o.__super__.constructor.call(this);
            }

            return r.Extend(o, r.Observable), o.prototype.render = function () {
                var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != r.GetData(this.$element[0], "old-tabindex") ? this._tabindex = r.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), e.attr("aria-disabled", "false"), this.$selection = e;
            }, o.prototype.bind = function (e, t) {
                var n = this, r = e.id + "-results";
                this.container = e, this.$selection.on("focus", function (e) {
                    n.trigger("focus", e);
                }), this.$selection.on("blur", function (e) {
                    n._handleBlur(e);
                }), this.$selection.on("keydown", function (e) {
                    n.trigger("keypress", e), e.which === i.SPACE && e.preventDefault();
                }), e.on("results:focus", function (e) {
                    n.$selection.attr("aria-activedescendant", e.data._resultId);
                }), e.on("selection:update", function (e) {
                    n.update(e.data);
                }), e.on("open", function () {
                    n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", r), n._attachCloseHandler(e);
                }), e.on("close", function () {
                    n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e);
                }), e.on("enable", function () {
                    n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false");
                }), e.on("disable", function () {
                    n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true");
                });
            }, o.prototype._handleBlur = function (e) {
                var t = this;
                window.setTimeout(function () {
                    document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e);
                }, 1);
            }, o.prototype._attachCloseHandler = function (e) {
                n(document.body).on("mousedown.select2." + e.id, function (e) {
                    var t = n(e.target).closest(".select2");
                    n(".select2.select2-container--open").each(function () {
                        this != t[0] && r.GetData(this, "element").select2("close");
                    });
                });
            }, o.prototype._detachCloseHandler = function (e) {
                n(document.body).off("mousedown.select2." + e.id);
            }, o.prototype.position = function (e, t) {
                t.find(".selection").append(e);
            }, o.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
            }, o.prototype.update = function (e) {
                throw new Error("The `update` method must be defined in child classes.");
            }, o;
        }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, r) {
            function i() {
                i.__super__.constructor.apply(this, arguments);
            }

            return n.Extend(i, t), i.prototype.render = function () {
                var e = i.__super__.render.call(this);
                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e;
            }, i.prototype.bind = function (t, e) {
                var n = this;
                i.__super__.bind.apply(this, arguments);
                var r = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", r).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", r), this.$selection.on("mousedown", function (e) {
                    1 === e.which && n.trigger("toggle", {originalEvent: e});
                }), this.$selection.on("focus", function (e) {
                }), this.$selection.on("blur", function (e) {
                }), t.on("focus", function (e) {
                    t.isOpen() || n.$selection.trigger("focus");
                });
            }, i.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title");
            }, i.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
            }, i.prototype.selectionContainer = function () {
                return e("<span></span>");
            }, i.prototype.update = function (e) {
                if (0 !== e.length) {
                    var t = e[0], n = this.$selection.find(".select2-selection__rendered"), r = this.display(t, n);
                    n.empty().append(r);
                    var i = t.title || t.text;
                    i ? n.attr("title", i) : n.removeAttr("title");
                } else this.clear();
            }, i;
        }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (i, e, l) {
            function n(e, t) {
                n.__super__.constructor.apply(this, arguments);
            }

            return l.Extend(n, e), n.prototype.render = function () {
                var e = n.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
            }, n.prototype.bind = function (e, t) {
                var r = this;
                n.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
                    r.trigger("toggle", {originalEvent: e});
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
                    if (!r.options.get("disabled")) {
                        var t = i(this).parent(), n = l.GetData(t[0], "data");
                        r.trigger("unselect", {originalEvent: e, data: n});
                    }
                });
            }, n.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title");
            }, n.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
            }, n.prototype.selectionContainer = function () {
                return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
            }, n.prototype.update = function (e) {
                if (this.clear(), 0 !== e.length) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var r = e[n], i = this.selectionContainer(), o = this.display(r, i);
                        i.append(o);
                        var s = r.title || r.text;
                        s && i.attr("title", s), l.StoreData(i[0], "data", r), t.push(i);
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    l.appendMany(a, t);
                }
            }, n;
        }), e.define("select2/selection/placeholder", ["../utils"], function (e) {
            function t(e, t, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n);
            }

            return t.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t;
            }, t.prototype.createPlaceholder = function (e, t) {
                var n = this.selectionContainer();
                return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n;
            }, t.prototype.update = function (e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (1 < t.length || n) return e.call(this, t);
                this.clear();
                var r = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(r);
            }, t;
        }), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (i, r, a) {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                    r._handleClear(e);
                }), t.on("keypress", function (e) {
                    r._handleKeyboardClear(e, t);
                });
            }, e.prototype._handleClear = function (e, t) {
                if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                        t.stopPropagation();
                        var r = a.GetData(n[0], "data"), i = this.$element.val();
                        this.$element.val(this.placeholder.id);
                        var o = {data: r};
                        if (this.trigger("clear", o), o.prevented) this.$element.val(i); else {
                            for (var s = 0; s < r.length; s++) {
                                if (o = {data: r[s]}, this.trigger("unselect", o), o.prevented) return void this.$element.val(i);
                            }
                            this.$element.trigger("change"), this.trigger("toggle", {});
                        }
                    }
                }
            }, e.prototype._handleKeyboardClear = function (e, t, n) {
                n.isOpen() || t.which != r.DELETE && t.which != r.BACKSPACE || this._handleClear(t);
            }, e.prototype.update = function (e, t) {
                if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
                    var n = this.options.get("translations").get("removeAllItems"),
                        r = i('<span class="select2-selection__clear" title="' + n() + '">&times;</span>');
                    a.StoreData(r[0], "data", t), this.$selection.find(".select2-selection__rendered").prepend(r);
                }
            }, e;
        }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (r, a, l) {
            function e(e, t, n) {
                e.call(this, t, n);
            }

            return e.prototype.render = function (e) {
                var t = r('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = t, this.$search = t.find("input");
                var n = e.call(this);
                return this._transferTabIndex(), n;
            }, e.prototype.bind = function (e, t, n) {
                var r = this, i = t.id + "-results";
                e.call(this, t, n), t.on("open", function () {
                    r.$search.attr("aria-controls", i), r.$search.trigger("focus");
                }), t.on("close", function () {
                    r.$search.val(""), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus");
                }), t.on("enable", function () {
                    r.$search.prop("disabled", !1), r._transferTabIndex();
                }), t.on("disable", function () {
                    r.$search.prop("disabled", !0);
                }), t.on("focus", function (e) {
                    r.$search.trigger("focus");
                }), t.on("results:focus", function (e) {
                    e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant");
                }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
                    r.trigger("focus", e);
                }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
                    r._handleBlur(e);
                }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                    if (e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented(), e.which === l.BACKSPACE && "" === r.$search.val()) {
                        var t = r.$searchContainer.prev(".select2-selection__choice");
                        if (0 < t.length) {
                            var n = a.GetData(t[0], "data");
                            r.searchRemoveChoice(n), e.preventDefault();
                        }
                    }
                }), this.$selection.on("click", ".select2-search--inline", function (e) {
                    r.$search.val() && e.stopPropagation();
                });
                var o = document.documentMode, s = o && o <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                    s ? r.$selection.off("input.search input.searchcheck") : r.$selection.off("keyup.search");
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                    if (s && "input" === e.type) r.$selection.off("input.search input.searchcheck"); else {
                        var t = e.which;
                        t != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && r.handleSearch(e);
                    }
                });
            }, e.prototype._transferTabIndex = function (e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
            }, e.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text);
            }, e.prototype.update = function (e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus");
            }, e.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {term: e});
                }
                this._keyUpPrevented = !1;
            }, e.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", {data: t}), this.$search.val(t.text), this.handleSearch();
            }, e.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "";
                "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").width() : e = .75 * (this.$search.val().length + 1) + "em";
                this.$search.css("width", e);
            }, e;
        }), e.define("select2/selection/eventRelay", ["jquery"], function (s) {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this,
                    i = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                    o = ["opening", "closing", "selecting", "unselecting", "clearing"];
                e.call(this, t, n), t.on("*", function (e, t) {
                    if (-1 !== s.inArray(e, i)) {
                        t = t || {};
                        var n = s.Event("select2:" + e, {params: t});
                        r.$element.trigger(n), -1 !== s.inArray(e, o) && (t.prevented = n.isDefaultPrevented());
                    }
                });
            }, e;
        }), e.define("select2/translation", ["jquery", "require"], function (t, n) {
            function r(e) {
                this.dict = e || {};
            }

            return r.prototype.all = function () {
                return this.dict;
            }, r.prototype.get = function (e) {
                return this.dict[e];
            }, r.prototype.extend = function (e) {
                this.dict = t.extend({}, e.all(), this.dict);
            }, r._cache = {}, r.loadPath = function (e) {
                if (!(e in r._cache)) {
                    var t = n(e);
                    r._cache[e] = t;
                }
                return new r(r._cache[e]);
            }, r;
        }), e.define("select2/diacritics", [], function () {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Œ": "OE",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "œ": "oe",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ώ": "ω",
                "ς": "σ",
                "’": "'"
            };
        }), e.define("select2/data/base", ["../utils"], function (r) {
            function n(e, t) {
                n.__super__.constructor.call(this);
            }

            return r.Extend(n, r.Observable), n.prototype.current = function (e) {
                throw new Error("The `current` method must be defined in child classes.");
            }, n.prototype.query = function (e, t) {
                throw new Error("The `query` method must be defined in child classes.");
            }, n.prototype.bind = function (e, t) {
            }, n.prototype.destroy = function () {
            }, n.prototype.generateResultId = function (e, t) {
                var n = e.id + "-result-";
                return n += r.generateChars(4), null != t.id ? n += "-" + t.id.toString() : n += "-" + r.generateChars(4), n;
            }, n;
        }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, a, l) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this);
            }

            return a.Extend(n, e), n.prototype.current = function (e) {
                var n = [], r = this;
                this.$element.find(":selected").each(function () {
                    var e = l(this), t = r.item(e);
                    n.push(t);
                }), e(n);
            }, n.prototype.select = function (i) {
                var o = this;
                if (i.selected = !0, l(i.element).is("option")) return i.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (e) {
                    var t = [];
                    (i = [i]).push.apply(i, e);
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n].id;
                        -1 === l.inArray(r, t) && t.push(r);
                    }
                    o.$element.val(t), o.$element.trigger("change");
                }); else {
                    var e = i.id;
                    this.$element.val(e), this.$element.trigger("change");
                }
            }, n.prototype.unselect = function (i) {
                var o = this;
                if (this.$element.prop("multiple")) {
                    if (i.selected = !1, l(i.element).is("option")) return i.element.selected = !1, void this.$element.trigger("change");
                    this.current(function (e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var r = e[n].id;
                            r !== i.id && -1 === l.inArray(r, t) && t.push(r);
                        }
                        o.$element.val(t), o.$element.trigger("change");
                    });
                }
            }, n.prototype.bind = function (e, t) {
                var n = this;
                (this.container = e).on("select", function (e) {
                    n.select(e.data);
                }), e.on("unselect", function (e) {
                    n.unselect(e.data);
                });
            }, n.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    a.RemoveData(this);
                });
            }, n.prototype.query = function (r, e) {
                var i = [], o = this;
                this.$element.children().each(function () {
                    var e = l(this);
                    if (e.is("option") || e.is("optgroup")) {
                        var t = o.item(e), n = o.matches(r, t);
                        null !== n && i.push(n);
                    }
                }), e({results: i});
            }, n.prototype.addOptions = function (e) {
                a.appendMany(this.$element, e);
            }, n.prototype.option = function (e) {
                var t;
                e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                var n = l(t), r = this._normalizeItem(e);
                return r.element = t, a.StoreData(t, "data", r), n;
            }, n.prototype.item = function (e) {
                var t = {};
                if (null != (t = a.GetData(e[0], "data"))) return t;
                if (e.is("option")) t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title")
                }; else if (e.is("optgroup")) {
                    t = {text: e.prop("label"), children: [], title: e.prop("title")};
                    for (var n = e.children("option"), r = [], i = 0; i < n.length; i++) {
                        var o = l(n[i]), s = this.item(o);
                        r.push(s);
                    }
                    t.children = r;
                }
                return (t = this._normalizeItem(t)).element = e[0], a.StoreData(e[0], "data", t), t;
            }, n.prototype._normalizeItem = function (e) {
                e !== Object(e) && (e = {id: e, text: e});
                return null != (e = l.extend({}, {text: ""}, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), l.extend({}, {
                    selected: !1,
                    disabled: !1
                }, e);
            }, n.prototype.matches = function (e, t) {
                return this.options.get("matcher")(e, t);
            }, n;
        }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, f, g) {
            function r(e, t) {
                this._dataToConvert = t.get("data") || [], r.__super__.constructor.call(this, e, t);
            }

            return f.Extend(r, e), r.prototype.bind = function (e, t) {
                r.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
            }, r.prototype.select = function (n) {
                var e = this.$element.find("option").filter(function (e, t) {
                    return t.value == n.id.toString();
                });
                0 === e.length && (e = this.option(n), this.addOptions(e)), r.__super__.select.call(this, n);
            }, r.prototype.convertToOptions = function (e) {
                var t = this, n = this.$element.find("option"), r = n.map(function () {
                    return t.item(g(this)).id;
                }).get(), i = [];

                function o(e) {
                    return function () {
                        return g(this).val() == e.id;
                    };
                }

                for (var s = 0; s < e.length; s++) {
                    var a = this._normalizeItem(e[s]);
                    if (0 <= g.inArray(a.id, r)) {
                        var l = n.filter(o(a)), c = this.item(l), u = g.extend(!0, {}, a, c), d = this.option(u);
                        l.replaceWith(d);
                    } else {
                        var p = this.option(a);
                        if (a.children) {
                            var h = this.convertToOptions(a.children);
                            f.appendMany(p, h);
                        }
                        i.push(p);
                    }
                }
                return i;
            }, r;
        }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, o) {
            function n(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t);
            }

            return t.Extend(n, e), n.prototype._applyDefaults = function (e) {
                var t = {
                    data: function data(e) {
                        return o.extend({}, e, {q: e.term});
                    }, transport: function transport(e, t, n) {
                        var r = o.ajax(e);
                        return r.then(t), r.fail(n), r;
                    }
                };
                return o.extend({}, t, e, !0);
            }, n.prototype.processResults = function (e) {
                return e;
            }, n.prototype.query = function (n, r) {
                var i = this;
                null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var t = o.extend({type: "GET"}, this.ajaxOptions);

                function e() {
                    var e = t.transport(t, function (e) {
                        var t = i.processResults(e, n);
                        i.options.get("debug") && window.console && console.error && (t && t.results && o.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), r(t);
                    }, function () {
                        "status" in e && (0 === e.status || "0" === e.status) || i.trigger("results:message", {message: "errorLoading"});
                    });
                    i._request = e;
                }

                "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e();
            }, n;
        }), e.define("select2/data/tags", ["jquery"], function (u) {
            function e(e, t, n) {
                var r = n.get("tags"), i = n.get("createTag");
                void 0 !== i && (this.createTag = i);
                var o = n.get("insertTag");
                if (void 0 !== o && (this.insertTag = o), e.call(this, t, n), u.isArray(r)) for (var s = 0; s < r.length; s++) {
                    var a = r[s], l = this._normalizeItem(a), c = this.option(l);
                    this.$element.append(c);
                }
            }

            return e.prototype.query = function (e, c, u) {
                var d = this;
                this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, n) {
                    for (var r = t.results, i = 0; i < r.length; i++) {
                        var o = r[i], s = null != o.children && !e({results: o.children}, !0);
                        if ((o.text || "").toUpperCase() === (c.term || "").toUpperCase() || s) return !n && (t.data = r, void u(t));
                    }
                    if (n) return !0;
                    var a = d.createTag(c);
                    if (null != a) {
                        var l = d.option(a);
                        l.attr("data-select2-tag", !0), d.addOptions([l]), d.insertTag(r, a);
                    }
                    t.results = r, u(t);
                }) : e.call(this, c, u);
            }, e.prototype.createTag = function (e, t) {
                var n = u.trim(t.term);
                return "" === n ? null : {id: n, text: n};
            }, e.prototype.insertTag = function (e, t, n) {
                t.unshift(n);
            }, e.prototype._removeOldTags = function (e) {
                this.$element.find("option[data-select2-tag]").each(function () {
                    this.selected || u(this).remove();
                });
            }, e;
        }), e.define("select2/data/tokenizer", ["jquery"], function (d) {
            function e(e, t, n) {
                var r = n.get("tokenizer");
                void 0 !== r && (this.tokenizer = r), e.call(this, t, n);
            }

            return e.prototype.bind = function (e, t, n) {
                e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field");
            }, e.prototype.query = function (e, t, n) {
                var r = this;
                t.term = t.term || "";
                var i = this.tokenizer(t, this.options, function (e) {
                    var t = r._normalizeItem(e);
                    if (!r.$element.find("option").filter(function () {
                        return d(this).val() === t.id;
                    }).length) {
                        var n = r.option(t);
                        n.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([n]);
                    }
                    !function (e) {
                        r.trigger("select", {data: e});
                    }(t);
                });
                i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.trigger("focus")), t.term = i.term), e.call(this, t, n);
            }, e.prototype.tokenizer = function (e, t, n, r) {
                for (var i = n.get("tokenSeparators") || [], o = t.term, s = 0, a = this.createTag || function (e) {
                    return {id: e.term, text: e.term};
                }; s < o.length;) {
                    var l = o[s];
                    if (-1 !== d.inArray(l, i)) {
                        var c = o.substr(0, s), u = a(d.extend({}, t, {term: c}));
                        null != u ? (r(u), o = o.substr(s + 1) || "", s = 0) : s++;
                    } else s++;
                }
                return {term: o};
            }, e;
        }), e.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, n) {
                this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n);
            }

            return e.prototype.query = function (e, t, n) {
                t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: t.term, params: t}
                }) : e.call(this, t, n);
            }, e;
        }), e.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, n) {
                this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n);
            }

            return e.prototype.query = function (e, t, n) {
                t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: t.term, params: t}
                }) : e.call(this, t, n);
            }, e;
        }), e.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n);
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("select", function () {
                    r._checkIfMaximumSelected();
                });
            }, e.prototype.query = function (e, t, n) {
                var r = this;
                this._checkIfMaximumSelected(function () {
                    e.call(r, t, n);
                });
            }, e.prototype._checkIfMaximumSelected = function (e, n) {
                var r = this;
                this.current(function (e) {
                    var t = null != e ? e.length : 0;
                    0 < r.maximumSelectionLength && t >= r.maximumSelectionLength ? r.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: r.maximumSelectionLength}
                    }) : n && n();
                });
            }, e;
        }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this);
            }

            return e.Extend(n, e.Observable), n.prototype.render = function () {
                var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$dropdown = e;
            }, n.prototype.bind = function () {
            }, n.prototype.position = function (e, t) {
            }, n.prototype.destroy = function () {
                this.$dropdown.remove();
            }, n;
        }), e.define("select2/dropdown/search", ["jquery", "../utils"], function (o, e) {
            function t() {
            }

            return t.prototype.render = function (e) {
                var t = e.call(this),
                    n = o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                return this.$searchContainer = n, this.$search = n.find("input"), t.prepend(n), t;
            }, t.prototype.bind = function (e, t, n) {
                var r = this, i = t.id + "-results";
                e.call(this, t, n), this.$search.on("keydown", function (e) {
                    r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented();
                }), this.$search.on("input", function (e) {
                    o(this).off("keyup");
                }), this.$search.on("keyup input", function (e) {
                    r.handleSearch(e);
                }), t.on("open", function () {
                    r.$search.attr("tabindex", 0), r.$search.attr("aria-controls", i), r.$search.trigger("focus"), window.setTimeout(function () {
                        r.$search.trigger("focus");
                    }, 0);
                }), t.on("close", function () {
                    r.$search.attr("tabindex", -1), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.val(""), r.$search.trigger("blur");
                }), t.on("focus", function () {
                    t.isOpen() || r.$search.trigger("focus");
                }), t.on("results:all", function (e) {
                    null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"));
                }), t.on("results:focus", function (e) {
                    e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant");
                });
            }, t.prototype.handleSearch = function (e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t});
                }
                this._keyUpPrevented = !1;
            }, t.prototype.showSearch = function (e, t) {
                return !0;
            }, t;
        }), e.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, n, r) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, r);
            }

            return e.prototype.append = function (e, t) {
                t.results = this.removePlaceholder(t.results), e.call(this, t);
            }, e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {id: "", text: t}), t;
            }, e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), r = t.length - 1; 0 <= r; r--) {
                    var i = t[r];
                    this.placeholder.id === i.id && n.splice(r, 1);
                }
                return n;
            }, e;
        }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
            function e(e, t, n, r) {
                this.lastParams = {}, e.call(this, t, n, r), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
            }

            return e.prototype.append = function (e, t) {
                this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
            }, e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("query", function (e) {
                    r.lastParams = e, r.loading = !0;
                }), t.on("query:append", function (e) {
                    r.lastParams = e, r.loading = !0;
                }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
            }, e.prototype.loadMoreIfNeeded = function () {
                var e = n.contains(document.documentElement, this.$loadingMore[0]);
                if (!this.loading && e) {
                    var t = this.$results.offset().top + this.$results.outerHeight(!1);
                    this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= t + 50 && this.loadMore();
                }
            }, e.prototype.loadMore = function () {
                this.loading = !0;
                var e = n.extend({}, {page: 1}, this.lastParams);
                e.page++, this.trigger("query:append", e);
            }, e.prototype.showLoadingMore = function (e, t) {
                return t.pagination && t.pagination.more;
            }, e.prototype.createLoadingMore = function () {
                var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                    t = this.options.get("translations").get("loadingMore");
                return e.html(t(this.lastParams)), e;
            }, e;
        }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (f, a) {
            function e(e, t, n) {
                this.$dropdownParent = f(n.get("dropdownParent") || document.body), e.call(this, t, n);
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("open", function () {
                    r._showDropdown(), r._attachPositioningHandler(t), r._bindContainerResultHandlers(t);
                }), t.on("close", function () {
                    r._hideDropdown(), r._detachPositioningHandler(t);
                }), this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation();
                });
            }, e.prototype.destroy = function (e) {
                e.call(this), this.$dropdownContainer.remove();
            }, e.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = n;
            }, e.prototype.render = function (e) {
                var t = f("<span></span>"), n = e.call(this);
                return t.append(n), this.$dropdownContainer = t;
            }, e.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach();
            }, e.prototype._bindContainerResultHandlers = function (e, t) {
                if (!this._containerResultsHandlersBound) {
                    var n = this;
                    t.on("results:all", function () {
                        n._positionDropdown(), n._resizeDropdown();
                    }), t.on("results:append", function () {
                        n._positionDropdown(), n._resizeDropdown();
                    }), t.on("results:message", function () {
                        n._positionDropdown(), n._resizeDropdown();
                    }), t.on("select", function () {
                        n._positionDropdown(), n._resizeDropdown();
                    }), t.on("unselect", function () {
                        n._positionDropdown(), n._resizeDropdown();
                    }), this._containerResultsHandlersBound = !0;
                }
            }, e.prototype._attachPositioningHandler = function (e, t) {
                var n = this, r = "scroll.select2." + t.id, i = "resize.select2." + t.id,
                    o = "orientationchange.select2." + t.id, s = this.$container.parents().filter(a.hasScroll);
                s.each(function () {
                    a.StoreData(this, "select2-scroll-position", {x: f(this).scrollLeft(), y: f(this).scrollTop()});
                }), s.on(r, function (e) {
                    var t = a.GetData(this, "select2-scroll-position");
                    f(this).scrollTop(t.y);
                }), f(window).on(r + " " + i + " " + o, function (e) {
                    n._positionDropdown(), n._resizeDropdown();
                });
            }, e.prototype._detachPositioningHandler = function (e, t) {
                var n = "scroll.select2." + t.id, r = "resize.select2." + t.id, i = "orientationchange.select2." + t.id;
                this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + r + " " + i);
            }, e.prototype._positionDropdown = function () {
                var e = f(window), t = this.$dropdown.hasClass("select2-dropdown--above"),
                    n = this.$dropdown.hasClass("select2-dropdown--below"), r = null, i = this.$container.offset();
                i.bottom = i.top + this.$container.outerHeight(!1);
                var o = {height: this.$container.outerHeight(!1)};
                o.top = i.top, o.bottom = i.top + o.height;
                var s = this.$dropdown.outerHeight(!1), a = e.scrollTop(), l = e.scrollTop() + e.height(),
                    c = a < i.top - s, u = l > i.bottom + s, d = {left: i.left, top: o.bottom},
                    p = this.$dropdownParent;
                "static" === p.css("position") && (p = p.offsetParent());
                var h = p.offset();
                d.top -= h.top, d.left -= h.left, t || n || (r = "below"), u || !c || t ? !c && u && t && (r = "below") : r = "above", ("above" == r || t && "below" !== r) && (d.top = o.top - h.top - s), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d);
            }, e.prototype._resizeDropdown = function () {
                var e = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e);
            }, e.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
            }, e;
        }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(e, t, n, r) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, r);
            }

            return e.prototype.showSearch = function (e, t) {
                return !(function e(t) {
                    for (var n = 0, r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.children ? n += e(i.children) : n++;
                    }
                    return n;
                }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
            }, e;
        }), e.define("select2/dropdown/selectOnClose", ["../utils"], function (o) {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("close", function (e) {
                    r._handleSelectOnClose(e);
                });
            }, e.prototype._handleSelectOnClose = function (e, t) {
                if (t && null != t.originalSelect2Event) {
                    var n = t.originalSelect2Event;
                    if ("select" === n._type || "unselect" === n._type) return;
                }
                var r = this.getHighlightedResults();
                if (!(r.length < 1)) {
                    var i = o.GetData(r[0], "data");
                    null != i.element && i.element.selected || null == i.element && i.selected || this.trigger("select", {data: i});
                }
            }, e;
        }), e.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {
            }

            return e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n), t.on("select", function (e) {
                    r._selectTriggered(e);
                }), t.on("unselect", function (e) {
                    r._selectTriggered(e);
                });
            }, e.prototype._selectTriggered = function (e, t) {
                var n = t.originalEvent;
                n && (n.ctrlKey || n.metaKey) || this.trigger("close", {originalEvent: n, originalSelect2Event: t});
            }, e;
        }), e.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function errorLoading() {
                    return "The results could not be loaded.";
                }, inputTooLong: function inputTooLong(e) {
                    var t = e.input.length - e.maximum, n = "Please delete " + t + " character";
                    return 1 != t && (n += "s"), n;
                }, inputTooShort: function inputTooShort(e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters";
                }, loadingMore: function loadingMore() {
                    return "Loading more results…";
                }, maximumSelected: function maximumSelected(e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"), t;
                }, noResults: function noResults() {
                    return "No results found";
                }, searching: function searching() {
                    return "Searching…";
                }, removeAllItems: function removeAllItems() {
                    return "Remove all items";
                }
            };
        }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (c, u, d, p, h, f, g, m, v, y, s, t, _, $, w, b, A, x, D, S, E, C, O, T, q, L, I, j, e) {
            function n() {
                this.reset();
            }

            return n.prototype.apply = function (e) {
                if (null == (e = c.extend(!0, {}, this.defaults, e)).dataAdapter) {
                    if (null != e.ajax ? e.dataAdapter = w : null != e.data ? e.dataAdapter = $ : e.dataAdapter = _, 0 < e.minimumInputLength && (e.dataAdapter = y.Decorate(e.dataAdapter, x)), 0 < e.maximumInputLength && (e.dataAdapter = y.Decorate(e.dataAdapter, D)), 0 < e.maximumSelectionLength && (e.dataAdapter = y.Decorate(e.dataAdapter, S)), e.tags && (e.dataAdapter = y.Decorate(e.dataAdapter, b)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = y.Decorate(e.dataAdapter, A)), null != e.query) {
                        var t = u(e.amdBase + "compat/query");
                        e.dataAdapter = y.Decorate(e.dataAdapter, t);
                    }
                    if (null != e.initSelection) {
                        var n = u(e.amdBase + "compat/initSelection");
                        e.dataAdapter = y.Decorate(e.dataAdapter, n);
                    }
                }
                if (null == e.resultsAdapter && (e.resultsAdapter = d, null != e.ajax && (e.resultsAdapter = y.Decorate(e.resultsAdapter, T)), null != e.placeholder && (e.resultsAdapter = y.Decorate(e.resultsAdapter, O)), e.selectOnClose && (e.resultsAdapter = y.Decorate(e.resultsAdapter, I))), null == e.dropdownAdapter) {
                    if (e.multiple) e.dropdownAdapter = E; else {
                        var r = y.Decorate(E, C);
                        e.dropdownAdapter = r;
                    }
                    if (0 !== e.minimumResultsForSearch && (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, L)), e.closeOnSelect && (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, j)), null != e.dropdownCssClass || null != e.dropdownCss || null != e.adaptDropdownCssClass) {
                        var i = u(e.amdBase + "compat/dropdownCss");
                        e.dropdownAdapter = y.Decorate(e.dropdownAdapter, i);
                    }
                    e.dropdownAdapter = y.Decorate(e.dropdownAdapter, q);
                }
                if (null == e.selectionAdapter) {
                    if (e.multiple ? e.selectionAdapter = h : e.selectionAdapter = p, null != e.placeholder && (e.selectionAdapter = y.Decorate(e.selectionAdapter, f)), e.allowClear && (e.selectionAdapter = y.Decorate(e.selectionAdapter, g)), e.multiple && (e.selectionAdapter = y.Decorate(e.selectionAdapter, m)), null != e.containerCssClass || null != e.containerCss || null != e.adaptContainerCssClass) {
                        var o = u(e.amdBase + "compat/containerCss");
                        e.selectionAdapter = y.Decorate(e.selectionAdapter, o);
                    }
                    e.selectionAdapter = y.Decorate(e.selectionAdapter, v);
                }
                e.language = this._resolveLanguage(e.language), e.language.push("en");
                for (var s = [], a = 0; a < e.language.length; a++) {
                    var l = e.language[a];
                    -1 === s.indexOf(l) && s.push(l);
                }
                return e.language = s, e.translations = this._processTranslations(e.language, e.debug), e;
            }, n.prototype.reset = function () {
                function a(e) {
                    return e.replace(/[^\u0000-\u007E]/g, function (e) {
                        return t[e] || e;
                    });
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: y.escapeMarkup,
                    language: {},
                    matcher: function e(t, n) {
                        if ("" === c.trim(t.term)) return n;
                        if (n.children && 0 < n.children.length) {
                            for (var r = c.extend(!0, {}, n), i = n.children.length - 1; 0 <= i; i--) {
                                null == e(t, n.children[i]) && r.children.splice(i, 1);
                            }
                            return 0 < r.children.length ? r : e(t, r);
                        }
                        var o = a(n.text).toUpperCase(), s = a(t.term).toUpperCase();
                        return -1 < o.indexOf(s) ? n : null;
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    scrollAfterSelect: !1,
                    sorter: function sorter(e) {
                        return e;
                    },
                    templateResult: function templateResult(e) {
                        return e.text;
                    },
                    templateSelection: function templateSelection(e) {
                        return e.text;
                    },
                    theme: "default",
                    width: "resolve"
                };
            }, n.prototype.applyFromElement = function (e, t) {
                var n = e.language, r = this.defaults.language, i = t.prop("lang"),
                    o = t.closest("[lang]").prop("lang"),
                    s = Array.prototype.concat.call(this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(r), this._resolveLanguage(o));
                return e.language = s, e;
            }, n.prototype._resolveLanguage = function (e) {
                if (!e) return [];
                if (c.isEmptyObject(e)) return [];
                if (c.isPlainObject(e)) return [e];
                var t;
                t = c.isArray(e) ? e : [e];
                for (var n = [], r = 0; r < t.length; r++) {
                    if (n.push(t[r]), "string" == typeof t[r] && 0 < t[r].indexOf("-")) {
                        var i = t[r].split("-")[0];
                        n.push(i);
                    }
                }
                return n;
            }, n.prototype._processTranslations = function (e, t) {
                for (var n = new s(), r = 0; r < e.length; r++) {
                    var i = new s(), o = e[r];
                    if ("string" == typeof o) try {
                        i = s.loadPath(o);
                    } catch (e) {
                        try {
                            o = this.defaults.amdLanguageBase + o, i = s.loadPath(o);
                        } catch (e) {
                            t && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.');
                        }
                    } else i = c.isPlainObject(o) ? new s(o) : o;
                    n.extend(i);
                }
                return n;
            }, n.prototype.set = function (e, t) {
                var n = {};
                n[c.camelCase(e)] = t;
                var r = y._convertData(n);
                c.extend(!0, this.defaults, r);
            }, new n();
        }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (r, d, i, p) {
            function e(e, t) {
                if (this.options = e, null != t && this.fromElement(t), null != t && (this.options = i.applyFromElement(this.options, t)), this.options = i.apply(this.options), t && t.is("input")) {
                    var n = r(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = p.Decorate(this.options.dataAdapter, n);
                }
            }

            return e.prototype.fromElement = function (e) {
                var t = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), p.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), p.StoreData(e[0], "data", p.GetData(e[0], "select2Tags")), p.StoreData(e[0], "tags", !0)), p.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", p.GetData(e[0], "ajaxUrl")), p.StoreData(e[0], "ajax-Url", p.GetData(e[0], "ajaxUrl")));
                var n = {};

                function r(e, t) {
                    return t.toUpperCase();
                }

                for (var i = 0; i < e[0].attributes.length; i++) {
                    var o = e[0].attributes[i].name, s = "data-";
                    if (o.substr(0, s.length) == s) {
                        var a = o.substring(s.length), l = p.GetData(e[0], a);
                        n[a.replace(/-([a-z])/g, r)] = l;
                    }
                }
                d.fn.jquery && "1." == d.fn.jquery.substr(0, 2) && e[0].dataset && (n = d.extend(!0, {}, e[0].dataset, n));
                var c = d.extend(!0, {}, p.GetData(e[0]), n);
                for (var u in c = p._convertData(c)) {
                    -1 < d.inArray(u, t) || (d.isPlainObject(this.options[u]) ? d.extend(this.options[u], c[u]) : this.options[u] = c[u]);
                }
                return this;
            }, e.prototype.get = function (e) {
                return this.options[e];
            }, e.prototype.set = function (e, t) {
                this.options[e] = t;
            }, e;
        }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (i, c, u, r) {
            var d = function d(e, t) {
                null != u.GetData(e[0], "select2") && u.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), d.__super__.constructor.call(this);
                var n = e.attr("tabindex") || 0;
                u.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
                var r = this.options.get("dataAdapter");
                this.dataAdapter = new r(e, this.options);
                var i = this.render();
                this._placeContainer(i);
                var o = this.options.get("selectionAdapter");
                this.selection = new o(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, i);
                var s = this.options.get("dropdownAdapter");
                this.dropdown = new s(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, i);
                var a = this.options.get("resultsAdapter");
                this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var l = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
                    l.trigger("selection:update", {data: e});
                }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), u.StoreData(e[0], "select2", this), e.data("select2", this);
            };
            return u.Extend(d, u.Observable), d.prototype._generateId = function (e) {
                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + u.generateChars(2) : u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
            }, d.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t);
            }, d.prototype._resolveWidth = function (e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var r = this._resolveWidth(e, "style");
                    return null != r ? r : this._resolveWidth(e, "element");
                }
                if ("element" == t) {
                    var i = e.outerWidth(!1);
                    return i <= 0 ? "auto" : i + "px";
                }
                if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
                var o = e.attr("style");
                if ("string" != typeof o) return null;
                for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
                    var c = s[a].replace(/\s/g, "").match(n);
                    if (null !== c && 1 <= c.length) return c[1];
                }
                return null;
            }, d.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
            }, d.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                        t.trigger("selection:update", {data: e});
                    });
                }), this.$element.on("focus.select2", function (e) {
                    t.trigger("focus", e);
                }), this._syncA = u.bind(this._syncAttributes, this), this._syncS = u.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != e ? (this._observer = new e(function (e) {
                    i.each(e, t._syncA), i.each(e, t._syncS);
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1));
            }, d.prototype._registerDataEvents = function () {
                var n = this;
                this.dataAdapter.on("*", function (e, t) {
                    n.trigger(e, t);
                });
            }, d.prototype._registerSelectionEvents = function () {
                var n = this, r = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                    n.toggleDropdown();
                }), this.selection.on("focus", function (e) {
                    n.focus(e);
                }), this.selection.on("*", function (e, t) {
                    -1 === i.inArray(e, r) && n.trigger(e, t);
                });
            }, d.prototype._registerDropdownEvents = function () {
                var n = this;
                this.dropdown.on("*", function (e, t) {
                    n.trigger(e, t);
                });
            }, d.prototype._registerResultsEvents = function () {
                var n = this;
                this.results.on("*", function (e, t) {
                    n.trigger(e, t);
                });
            }, d.prototype._registerEvents = function () {
                var n = this;
                this.on("open", function () {
                    n.$container.addClass("select2-container--open");
                }), this.on("close", function () {
                    n.$container.removeClass("select2-container--open");
                }), this.on("enable", function () {
                    n.$container.removeClass("select2-container--disabled");
                }), this.on("disable", function () {
                    n.$container.addClass("select2-container--disabled");
                }), this.on("blur", function () {
                    n.$container.removeClass("select2-container--focus");
                }), this.on("query", function (t) {
                    n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function (e) {
                        n.trigger("results:all", {data: e, query: t});
                    });
                }), this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (e) {
                        n.trigger("results:append", {data: e, query: t});
                    });
                }), this.on("keypress", function (e) {
                    var t = e.which;
                    n.isOpen() ? t === r.ESC || t === r.TAB || t === r.UP && e.altKey ? (n.close(), e.preventDefault()) : t === r.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === r.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === r.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === r.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === r.ENTER || t === r.SPACE || t === r.DOWN && e.altKey) && (n.open(), e.preventDefault());
                });
            }, d.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
            }, d.prototype._syncSubtree = function (e, t) {
                var n = !1, r = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (t) {
                        if (t.addedNodes && 0 < t.addedNodes.length) for (var i = 0; i < t.addedNodes.length; i++) {
                            t.addedNodes[i].selected && (n = !0);
                        } else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
                    } else n = !0;
                    n && this.dataAdapter.current(function (e) {
                        r.trigger("selection:update", {data: e});
                    });
                }
            }, d.prototype.trigger = function (e, t) {
                var n = d.__super__.trigger, r = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                };
                if (void 0 === t && (t = {}), e in r) {
                    var i = r[e], o = {prevented: !1, name: e, args: t};
                    if (n.call(this, i, o), o.prevented) return void (t.prevented = !0);
                }
                n.call(this, e, t);
            }, d.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
            }, d.prototype.open = function () {
                this.isOpen() || this.trigger("query", {});
            }, d.prototype.close = function () {
                this.isOpen() && this.trigger("close", {});
            }, d.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open");
            }, d.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus");
            }, d.prototype.focus = function (e) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
            }, d.prototype.enable = function (e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t);
            }, d.prototype.data = function () {
                this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var t = [];
                return this.dataAdapter.current(function (e) {
                    t = e;
                }), t;
            }, d.prototype.val = function (e) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                var t = e[0];
                i.isArray(t) && (t = i.map(t, function (e) {
                    return e.toString();
                })), this.$element.val(t).trigger("change");
            }, d.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", u.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
            }, d.prototype.render = function () {
                var e = i('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), u.StoreData(e[0], "element", this.$element), e;
            }, d;
        }), e.define("jquery-mousewheel", ["jquery"], function (e) {
            return e;
        }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (i, e, o, t, s) {
            if (null == i.fn.select2) {
                var a = ["open", "close", "destroy"];
                i.fn.select2 = function (t) {
                    if ("object" == _typeof(t = t || {})) return this.each(function () {
                        var e = i.extend(!0, {}, t);
                        new o(i(this), e);
                    }), this;
                    if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                    var n, r = Array.prototype.slice.call(arguments, 1);
                    return this.each(function () {
                        var e = s.GetData(this, "select2");
                        null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, r);
                    }), -1 < i.inArray(t, a) ? this : n;
                };
            }
            return null == i.fn.select2.defaults && (i.fn.select2.defaults = t), o;
        }), {define: e.define, require: e.require};
    }(), t = e.require("jquery.select2");
    return u.fn.select2.amd = e, t;
});
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */!function ($, window, document, undefined) {
    function Owl(element, options) {
        this.settings = null, this.options = $.extend({}, Owl.Defaults, options), this.$element = $(element), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, $.each(["onResize", "onThrottledResize"], $.proxy(function (i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this)), $.each(Owl.Plugins, $.proxy(function (key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
        }, this)), $.each(Owl.Workers, $.proxy(function (priority, worker) {
            this._pipe.push({filter: worker.filter, run: $.proxy(worker.run, this)});
        }, this)), this.setup(), this.initialize();
    }

    Owl.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, Owl.Width = {Default: "default", Inner: "inner", Outer: "outer"}, Owl.Type = {
        Event: "event",
        State: "state"
    }, Owl.Plugins = {}, Owl.Workers = [{
        filter: ["width", "settings"], run: function run() {
            this._width = this.$element.width();
        }
    }, {
        filter: ["width", "items", "settings"], run: function run(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ["items", "settings"], run: function run() {
            this.$stage.children(".cloned").remove();
        }
    }, {
        filter: ["width", "items", "settings"], run: function run(cache) {
            var margin = this.settings.margin || "", grid = !this.settings.autoWidth, rtl = this.settings.rtl,
                css = {width: "auto", "margin-left": rtl ? margin : "", "margin-right": rtl ? "" : margin};
            !grid && this.$stage.children().css(css), cache.css = css;
        }
    }, {
        filter: ["width", "items", "settings"], run: function run(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, merge = null,
                iterator = this._items.length, grid = !this.settings.autoWidth, widths = [];
            for (cache.items = {merge: !1, width: width}; iterator--;) {
                merge = this._mergers[iterator], merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge, cache.items.merge = merge > 1 || cache.items.merge, widths[iterator] = grid ? width * merge : this._items[iterator].width();
            }
            this._widths = widths;
        }
    }, {
        filter: ["items", "settings"], run: function run() {
            var clones = [], items = this._items, settings = this.settings, view = Math.max(2 * settings.items, 4),
                size = 2 * Math.ceil(items.length / 2),
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0, append = "",
                prepend = "";
            for (repeat /= 2; repeat > 0;) {
                clones.push(this.normalize(clones.length / 2, !0)), append += items[clones[clones.length - 1]][0].outerHTML, clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, !0)), prepend = items[clones[clones.length - 1]][0].outerHTML + prepend, repeat -= 1;
            }
            this._clones = clones, $(append).addClass("cloned").appendTo(this.$stage), $(prepend).addClass("cloned").prependTo(this.$stage);
        }
    }, {
        filter: ["width", "items", "settings"], run: function run() {
            for (var rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, iterator = -1, previous = 0, current = 0, coordinates = []; ++iterator < size;) {
                previous = coordinates[iterator - 1] || 0, current = this._widths[this.relative(iterator)] + this.settings.margin, coordinates.push(previous + current * rtl);
            }
            this._coordinates = coordinates;
        }
    }, {
        filter: ["width", "items", "settings"], run: function run() {
            var padding = this.settings.stagePadding, coordinates = this._coordinates, css = {
                width: Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + 2 * padding,
                "padding-left": padding || "",
                "padding-right": padding || ""
            };
            this.$stage.css(css);
        }
    }, {
        filter: ["width", "items", "settings"], run: function run(cache) {
            var iterator = this._coordinates.length, grid = !this.settings.autoWidth, items = this.$stage.children();
            if (grid && cache.items.merge) for (; iterator--;) {
                cache.css.width = this._widths[this.relative(iterator)], items.eq(iterator).css(cache.css);
            } else grid && (cache.css.width = cache.items.width, items.css(cache.css));
        }
    }, {
        filter: ["items"], run: function run() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
        }
    }, {
        filter: ["width", "items", "settings"], run: function run(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0, cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current)), this.reset(cache.current);
        }
    }, {
        filter: ["position"], run: function run() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function run() {
            var rtl = this.settings.rtl ? 1 : -1, padding = 2 * this.settings.stagePadding,
                begin = this.coordinates(this.current()) + padding, end = begin + this.width() * rtl, inner, outer,
                matches = [], i, n;
            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0, outer = Math.abs(this._coordinates[i]) + padding * rtl, (this.op(inner, "<=", begin) && this.op(inner, ">", end) || this.op(outer, "<", begin) && this.op(outer, ">", end)) && matches.push(i);
            }
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + matches.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
        }
    }], Owl.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = $("<" + this.settings.stageElement + ">", {"class": this.settings.stageClass}).wrap($("<div/>", {"class": this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()));
    }, Owl.prototype.initializeItems = function () {
        var $items = this.$element.find(".owl-item");
        if ($items.length) return this._items = $items.get().map(function (item) {
            return $(item);
        }), this._mergers = this._items.map(function () {
            return 1;
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
    }, Owl.prototype.initialize = function () {
        var imgs, nestedSelector, width;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (imgs = this.$element.find("img"), nestedSelector = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, width = this.$element.children(nestedSelector).width(), imgs.length && width <= 0 && this.preloadAutoWidthImages(imgs));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
    }, Owl.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible");
    }, Owl.prototype.setup = function () {
        var viewport = this.viewport(), overwrites = this.options.responsive, match = -1, settings = null;
        overwrites ? ($.each(overwrites, function (breakpoint) {
            breakpoint <= viewport && breakpoint > match && (match = Number(breakpoint));
        }), "function" == typeof (settings = $.extend({}, this.options, overwrites[match])).stagePadding && (settings.stagePadding = settings.stagePadding()), delete settings.responsive, settings.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + match))) : settings = $.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: settings
            }
        }), this._breakpoint = match, this.settings = settings, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        });
    }, Owl.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, Owl.prototype.prepare = function (item) {
        var event = this.trigger("prepare", {content: item});
        return event.data || (event.data = $("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(item)), this.trigger("prepared", {content: event.data}), event.data;
    }, Owl.prototype.update = function () {
        for (var i = 0, n = this._pipe.length, filter = $.proxy(function (p) {
            return this[p];
        }, this._invalidated), cache = {}; i < n;) {
            (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) && this._pipe[i].run(cache), i++;
        }
        this._invalidated = {}, !this.is("valid") && this.enter("valid");
    }, Owl.prototype.width = function (dimension) {
        switch (dimension = dimension || Owl.Width.Default) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin;
        }
    }, Owl.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
    }, Owl.prototype.onThrottledResize = function () {
        window.clearTimeout(this.resizeTimer), this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    }, Owl.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
    }, Owl.prototype.registerEventHandlers = function () {
        $.support.transition && this.$stage.on($.support.transition.end + ".owl.core", $.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(window, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", $.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1;
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", $.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", $.proxy(this.onDragEnd, this)));
    }, Owl.prototype.onDragStart = function (event) {
        var stage = null;
        3 !== event.which && ($.support.transform ? stage = {
            x: (stage = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === stage.length ? 12 : 4],
            y: stage[16 === stage.length ? 13 : 5]
        } : (stage = this.$stage.position(), stage = {
            x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
            y: stage.top
        }), this.is("animating") && ($.support.transform ? this.animate(stage.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === event.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = $(event.target), this._drag.stage.start = stage, this._drag.stage.current = stage, this._drag.pointer = this.pointer(event), $(document).on("mouseup.owl.core touchend.owl.core", $.proxy(this.onDragEnd, this)), $(document).one("mousemove.owl.core touchmove.owl.core", $.proxy(function (event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));
            $(document).on("mousemove.owl.core touchmove.owl.core", $.proxy(this.onDragMove, this)), Math.abs(delta.x) < Math.abs(delta.y) && this.is("valid") || (event.preventDefault(), this.enter("dragging"), this.trigger("drag"));
        }, this)));
    }, Owl.prototype.onDragMove = function (event) {
        var minimum = null, maximum = null, pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);
        this.is("dragging") && (event.preventDefault(), this.settings.loop ? (minimum = this.coordinates(this.minimum()), maximum = this.coordinates(this.maximum() + 1) - minimum, stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum) : (minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0, stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull)), this._drag.stage.current = stage, this.animate(stage.x));
    }, Owl.prototype.onDragEnd = function (event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)), stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? "left" : "right";
        $(document).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== delta.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(stage.x, 0 !== delta.x ? direction : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = direction, (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1;
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }, Owl.prototype.closest = function (coordinate, direction) {
        var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();
        return this.settings.freeDrag || $.each(coordinates, $.proxy(function (index, value) {
            return "left" === direction && coordinate > value - 30 && coordinate < value + 30 ? position = index : "right" === direction && coordinate > value - width - 30 && coordinate < value - width + 30 ? position = index + 1 : this.op(coordinate, "<", value) && this.op(coordinate, ">", void 0 !== coordinates[index + 1] ? coordinates[index + 1] : value - width) && (position = "left" === direction ? index + 1 : index), -1 === position;
        }, this)), this.settings.loop || (this.op(coordinate, ">", coordinates[this.minimum()]) ? position = coordinate = this.minimum() : this.op(coordinate, "<", coordinates[this.maximum()]) && (position = coordinate = this.maximum())), position;
    }, Owl.prototype.animate = function (coordinate) {
        var animate = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), animate && (this.enter("animating"), this.trigger("translate")), $.support.transform3d && $.support.transition ? this.$stage.css({
            transform: "translate3d(" + coordinate + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : animate ? this.$stage.animate({left: coordinate + "px"}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: coordinate + "px"});
    }, Owl.prototype.is = function (state) {
        return this._states.current[state] && this._states.current[state] > 0;
    }, Owl.prototype.current = function (position) {
        if (void 0 === position) return this._current;
        if (0 !== this._items.length) {
            if (position = this.normalize(position), this._current !== position) {
                var event = this.trigger("change", {property: {name: "position", value: position}});
                void 0 !== event.data && (position = this.normalize(event.data)), this._current = position, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                });
            }
            return this._current;
        }
    }, Owl.prototype.invalidate = function (part) {
        return "string" === $.type(part) && (this._invalidated[part] = !0, this.is("valid") && this.leave("valid")), $.map(this._invalidated, function (v, i) {
            return i;
        });
    }, Owl.prototype.reset = function (position) {
        void 0 !== (position = this.normalize(position)) && (this._speed = 0, this._current = position, this.suppress(["translate", "translated"]), this.animate(this.coordinates(position)), this.release(["translate", "translated"]));
    }, Owl.prototype.normalize = function (position, relative) {
        var n = this._items.length, m = relative ? 0 : this._clones.length;
        return !this.isNumeric(position) || n < 1 ? position = void 0 : (position < 0 || position >= n + m) && (position = ((position - m / 2) % n + n) % n + m / 2), position;
    }, Owl.prototype.relative = function (position) {
        return position -= this._clones.length / 2, this.normalize(position, !0);
    }, Owl.prototype.maximum = function (relative) {
        var settings = this.settings, maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
        if (settings.loop) maximum = this._clones.length / 2 + this._items.length - 1; else if (settings.autoWidth || settings.merge) {
            if (iterator = this._items.length) for (reciprocalItemsWidth = this._items[--iterator].width(), elementWidth = this.$element.width(); iterator-- && !((reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin) > elementWidth);) {
                ;
            }
            maximum = iterator + 1;
        } else maximum = settings.center ? this._items.length - 1 : this._items.length - settings.items;
        return relative && (maximum -= this._clones.length / 2), Math.max(maximum, 0);
    }, Owl.prototype.minimum = function (relative) {
        return relative ? 0 : this._clones.length / 2;
    }, Owl.prototype.items = function (position) {
        return void 0 === position ? this._items.slice() : (position = this.normalize(position, !0), this._items[position]);
    }, Owl.prototype.mergers = function (position) {
        return void 0 === position ? this._mergers.slice() : (position = this.normalize(position, !0), this._mergers[position]);
    }, Owl.prototype.clones = function (position) {
        var odd = this._clones.length / 2, even = odd + this._items.length, map = function map(index) {
            return index % 2 == 0 ? even + index / 2 : odd - (index + 1) / 2;
        };
        return void 0 === position ? $.map(this._clones, function (v, i) {
            return map(i);
        }) : $.map(this._clones, function (v, i) {
            return v === position ? map(i) : null;
        });
    }, Owl.prototype.speed = function (speed) {
        return void 0 !== speed && (this._speed = speed), this._speed;
    }, Owl.prototype.coordinates = function (position) {
        var multiplier = 1, newPosition = position - 1, coordinate;
        return void 0 === position ? $.map(this._coordinates, $.proxy(function (coordinate, index) {
            return this.coordinates(index);
        }, this)) : (this.settings.center ? (this.settings.rtl && (multiplier = -1, newPosition = position + 1), coordinate = this._coordinates[position], coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier) : coordinate = this._coordinates[newPosition] || 0, coordinate = Math.ceil(coordinate));
    }, Owl.prototype.duration = function (from, to, factor) {
        return 0 === factor ? 0 : Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
    }, Owl.prototype.to = function (position, speed) {
        var current = this.current(), revert = null, distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0), items = this._items.length, minimum = this.minimum(),
            maximum = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(distance) > items / 2 && (distance += -1 * direction * items), (revert = (((position = current + distance) - minimum) % items + items) % items + minimum) !== position && revert - distance <= maximum && revert - distance > 0 && (current = revert - distance, position = revert, this.reset(current))) : position = this.settings.rewind ? (position % (maximum += 1) + maximum) % maximum : Math.max(minimum, Math.min(maximum, position)), this.speed(this.duration(current, position, speed)), this.current(position), this.isVisible() && this.update();
    }, Owl.prototype.next = function (speed) {
        speed = speed || !1, this.to(this.relative(this.current()) + 1, speed);
    }, Owl.prototype.prev = function (speed) {
        speed = speed || !1, this.to(this.relative(this.current()) - 1, speed);
    }, Owl.prototype.onTransitionEnd = function (event) {
        if (void 0 !== event && (event.stopPropagation(), (event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated");
    }, Owl.prototype.viewport = function () {
        var width;
        return this.options.responsiveBaseElement !== window ? width = $(this.options.responsiveBaseElement).width() : window.innerWidth ? width = window.innerWidth : document.documentElement && document.documentElement.clientWidth ? width = document.documentElement.clientWidth : console.warn("Can not detect viewport width."), width;
    }, Owl.prototype.replace = function (content) {
        this.$stage.empty(), this._items = [], content && (content = content instanceof jQuery ? content : $(content)), this.settings.nestedItemSelector && (content = content.find("." + this.settings.nestedItemSelector)), content.filter(function () {
            return 1 === this.nodeType;
        }).each($.proxy(function (index, item) {
            item = this.prepare(item), this.$stage.append(item), this._items.push(item), this._mergers.push(1 * item.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
    }, Owl.prototype.add = function (content, position) {
        var current = this.relative(this._current);
        position = void 0 === position ? this._items.length : this.normalize(position, !0), content = content instanceof jQuery ? content : $(content), this.trigger("add", {
            content: content,
            position: position
        }), content = this.prepare(content), 0 === this._items.length || position === this._items.length ? (0 === this._items.length && this.$stage.append(content), 0 !== this._items.length && this._items[position - 1].after(content), this._items.push(content), this._mergers.push(1 * content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[position].before(content), this._items.splice(position, 0, content), this._mergers.splice(position, 0, 1 * content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[current] && this.reset(this._items[current].index()), this.invalidate("items"), this.trigger("added", {
            content: content,
            position: position
        });
    }, Owl.prototype.remove = function (position) {
        void 0 !== (position = this.normalize(position, !0)) && (this.trigger("remove", {
            content: this._items[position],
            position: position
        }), this._items[position].remove(), this._items.splice(position, 1), this._mergers.splice(position, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: position
        }));
    }, Owl.prototype.preloadAutoWidthImages = function (images) {
        images.each($.proxy(function (i, element) {
            this.enter("pre-loading"), element = $(element), $(new Image()).one("load", $.proxy(function (e) {
                element.attr("src", e.target.src), element.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
            }, this)).attr("src", element.attr("src") || element.attr("data-src") || element.attr("data-src-retina"));
        }, this));
    }, Owl.prototype.destroy = function () {
        for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), $(document).off(".owl.core"), !1 !== this.settings.responsive && (window.clearTimeout(this.resizeTimer), this.off(window, "resize", this._handlers.onThrottledResize)), this._plugins) {
            this._plugins[i].destroy();
        }
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
    }, Owl.prototype.op = function (a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case "<":
                return rtl ? a > b : a < b;
            case ">":
                return rtl ? a < b : a > b;
            case ">=":
                return rtl ? a <= b : a >= b;
            case "<=":
                return rtl ? a >= b : a <= b;
        }
    }, Owl.prototype.on = function (element, event, listener, capture) {
        element.addEventListener ? element.addEventListener(event, listener, capture) : element.attachEvent && element.attachEvent("on" + event, listener);
    }, Owl.prototype.off = function (element, event, listener, capture) {
        element.removeEventListener ? element.removeEventListener(event, listener, capture) : element.detachEvent && element.detachEvent("on" + event, listener);
    }, Owl.prototype.trigger = function (name, data, namespace, state, enter) {
        var status = {item: {count: this._items.length, index: this.current()}},
            handler = $.camelCase($.grep(["on", name, namespace], function (v) {
                return v;
            }).join("-").toLowerCase()),
            event = $.Event([name, "owl", namespace || "carousel"].join(".").toLowerCase(), $.extend({relatedTarget: this}, status, data));
        return this._supress[name] || ($.each(this._plugins, function (name, plugin) {
            plugin.onTrigger && plugin.onTrigger(event);
        }), this.register({
            type: Owl.Type.Event,
            name: name
        }), this.$element.trigger(event), this.settings && "function" == typeof this.settings[handler] && this.settings[handler].call(this, event)), event;
    }, Owl.prototype.enter = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            void 0 === this._states.current[name] && (this._states.current[name] = 0), this._states.current[name]++;
        }, this));
    }, Owl.prototype.leave = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            this._states.current[name]--;
        }, this));
    }, Owl.prototype.register = function (object) {
        if (object.type === Owl.Type.Event) {
            if ($.event.special[object.name] || ($.event.special[object.name] = {}), !$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function (e) {
                    return !_default || !_default.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : _default.apply(this, arguments);
                }, $.event.special[object.name].owl = !0;
            }
        } else object.type === Owl.Type.State && (this._states.tags[object.name] ? this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags) : this._states.tags[object.name] = object.tags, this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
            return $.inArray(tag, this._states.tags[object.name]) === i;
        }, this)));
    }, Owl.prototype.suppress = function (events) {
        $.each(events, $.proxy(function (index, event) {
            this._supress[event] = !0;
        }, this));
    }, Owl.prototype.release = function (events) {
        $.each(events, $.proxy(function (index, event) {
            delete this._supress[event];
        }, this));
    }, Owl.prototype.pointer = function (event) {
        var result = {x: null, y: null};
        return (event = (event = event.originalEvent || event || window.event).touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event).pageX ? (result.x = event.pageX, result.y = event.pageY) : (result.x = event.clientX, result.y = event.clientY), result;
    }, Owl.prototype.isNumeric = function (number) {
        return !isNaN(parseFloat(number));
    }, Owl.prototype.difference = function (first, second) {
        return {x: first.x - second.x, y: first.y - second.y};
    }, $.fn.owlCarousel = function (option) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var $this = $(this), data = $this.data("owl.carousel");
            data || (data = new Owl(this, "object" == _typeof(option) && option), $this.data("owl.carousel", data), $.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (i, event) {
                data.register({
                    type: Owl.Type.Event,
                    name: event
                }), data.$element.on(event + ".owl.carousel.core", $.proxy(function (e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([event]), data[event].apply(this, [].slice.call(arguments, 1)), this.release([event]));
                }, data));
            })), "string" == typeof option && "_" !== option.charAt(0) && data[option].apply(data, args);
        });
    }, $.fn.owlCarousel.Constructor = Owl;
}(window.Zepto || window.jQuery, window, document), function ($, window, document, undefined) {
    var AutoRefresh = function AutoRefresh(carousel) {
        this._core = carousel, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": $.proxy(function (e) {
                e.namespace && this._core.settings.autoRefresh && this.watch();
            }, this)
        }, this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    AutoRefresh.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, AutoRefresh.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
    }, AutoRefresh.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
    }, AutoRefresh.prototype.destroy = function () {
        var handler, property;
        for (handler in window.clearInterval(this._interval), this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[property] && (this[property] = null);
        }
    }, $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
}(window.Zepto || window.jQuery, window, document), function ($, window, document, undefined) {
    var Lazy = function Lazy(carousel) {
        this._core = carousel, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": $.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var settings = this._core.settings,
                        n = settings.center && Math.ceil(settings.items / 2) || settings.items,
                        i = settings.center && -1 * n || 0,
                        position = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length, load = $.proxy(function (i, v) {
                            this.load(v);
                        }, this);
                    for (settings.lazyLoadEager > 0 && (n += settings.lazyLoadEager, settings.loop && (position -= settings.lazyLoadEager, n++)); i++ < n;) {
                        this.load(clones / 2 + this._core.relative(position)), clones && $.each(this._core.clones(this._core.relative(position)), load), position++;
                    }
                }
            }, this)
        }, this._core.options = $.extend({}, Lazy.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    Lazy.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, Lazy.prototype.load = function (position) {
        var $item = this._core.$stage.children().eq(position), $elements = $item && $item.find(".owl-lazy");
        !$elements || $.inArray($item.get(0), this._loaded) > -1 || ($elements.each($.proxy(function (index, element) {
            var $element = $(element), image,
                url = window.devicePixelRatio > 1 && $element.attr("data-src-retina") || $element.attr("data-src") || $element.attr("data-srcset");
            this._core.trigger("load", {
                element: $element,
                url: url
            }, "lazy"), $element.is("img") ? $element.one("load.owl.lazy", $.proxy(function () {
                $element.css("opacity", 1), this._core.trigger("loaded", {element: $element, url: url}, "lazy");
            }, this)).attr("src", url) : $element.is("source") ? $element.one("load.owl.lazy", $.proxy(function () {
                this._core.trigger("loaded", {element: $element, url: url}, "lazy");
            }, this)).attr("srcset", url) : ((image = new Image()).onload = $.proxy(function () {
                $element.css({
                    "background-image": 'url("' + url + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {element: $element, url: url}, "lazy");
            }, this), image.src = url);
        }, this)), this._loaded.push($item.get(0)));
    }, Lazy.prototype.destroy = function () {
        var handler, property;
        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[property] && (this[property] = null);
        }
    }, $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
}(window.Zepto || window.jQuery, window, document), function ($, window, document, undefined) {
    var AutoHeight = function AutoHeight(carousel) {
        this._core = carousel, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": $.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && this.update();
            }, this), "changed.owl.carousel": $.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update();
            }, this), "loaded.owl.lazy": $.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
            }, this)
        }, this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var refThis = this;
        $(window).on("load", function () {
            refThis._core.settings.autoHeight && refThis.update();
        }), $(window).resize(function () {
            refThis._core.settings.autoHeight && (null != refThis._intervalId && clearTimeout(refThis._intervalId), refThis._intervalId = setTimeout(function () {
                refThis.update();
            }, 250));
        });
    };
    AutoHeight.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, AutoHeight.prototype.update = function () {
        var start = this._core._current, end = start + this._core.settings.items,
            lazyLoadEnabled = this._core.settings.lazyLoad,
            visible = this._core.$stage.children().toArray().slice(start, end), heights = [], maxheight = 0;
        $.each(visible, function (index, item) {
            heights.push($(item).height());
        }), (maxheight = Math.max.apply(null, heights)) <= 1 && lazyLoadEnabled && this._previousHeight && (maxheight = this._previousHeight), this._previousHeight = maxheight, this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
    }, AutoHeight.prototype.destroy = function () {
        var handler, property;
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[property] && (this[property] = null);
        }
    }, $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
}(window.Zepto || window.jQuery, window, document), function ($, window, document, undefined) {
    var Video = function Video(carousel) {
        this._core = carousel, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": $.proxy(function (e) {
                e.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]});
            }, this), "resize.owl.carousel": $.proxy(function (e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault();
            }, this), "refreshed.owl.carousel": $.proxy(function (e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
            }, this), "changed.owl.carousel": $.proxy(function (e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop();
            }, this), "prepared.owl.carousel": $.proxy(function (e) {
                if (e.namespace) {
                    var $element = $(e.content).find(".owl-video");
                    $element.length && ($element.css("display", "none"), this.fetch($element, $(e.content)));
                }
            }, this)
        }, this._core.options = $.extend({}, Video.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", $.proxy(function (e) {
            this.play(e);
        }, this));
    };
    Video.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, Video.prototype.fetch = function (target, item) {
        var type = target.attr("data-vimeo-id") ? "vimeo" : target.attr("data-vzaar-id") ? "vzaar" : "youtube",
            id = target.attr("data-vimeo-id") || target.attr("data-youtube-id") || target.attr("data-vzaar-id"),
            width = target.attr("data-width") || this._core.settings.videoWidth,
            height = target.attr("data-height") || this._core.settings.videoHeight, url = target.attr("href");
        if (!url) throw new Error("Missing video URL.");
        if ((id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) type = "youtube"; else if (id[3].indexOf("vimeo") > -1) type = "vimeo"; else {
            if (!(id[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            type = "vzaar";
        }
        id = id[6], this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        }, item.attr("data-video", url), this.thumbnail(target, this._videos[url]);
    }, Video.prototype.thumbnail = function (target, video) {
        var tnLink, icon, path,
            dimensions = video.width && video.height ? "width:" + video.width + "px;height:" + video.height + "px;" : "",
            customTn = target.find("img"), srcType = "src", lazyClass = "", settings = this._core.settings,
            create = function create(path) {
                icon = '<div class="owl-video-play-icon"></div>', tnLink = settings.lazyLoad ? $("<div/>", {
                    "class": "owl-video-tn " + lazyClass,
                    srcType: path
                }) : $("<div/>", {
                    "class": "owl-video-tn",
                    style: "opacity:1;background-image:url(" + path + ")"
                }), target.after(tnLink), target.after(icon);
            };
        if (target.wrap($("<div/>", {
            "class": "owl-video-wrapper",
            style: dimensions
        })), this._core.settings.lazyLoad && (srcType = "data-src", lazyClass = "owl-lazy"), customTn.length) return create(customTn.attr(srcType)), customTn.remove(), !1;
        "youtube" === video.type ? (path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg", create(path)) : "vimeo" === video.type ? $.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + video.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function success(data) {
                path = data[0].thumbnail_large, create(path);
            }
        }) : "vzaar" === video.type && $.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + video.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function success(data) {
                path = data.framegrab_url, create(path);
            }
        });
    }, Video.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
    }, Video.prototype.play = function (event) {
        var target, item = $(event.target).closest("." + this._core.settings.itemClass),
            video = this._videos[item.attr("data-video")], width = video.width || "100%",
            height = video.height || this._core.$stage.height(), html, iframe;
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), item = this._core.items(this._core.relative(item.index())), this._core.reset(item.index()), (html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", height), html.attr("width", width), "youtube" === video.type ? html.attr("src", "//www.youtube.com/embed/" + video.id + "?autoplay=1&rel=0&v=" + video.id) : "vimeo" === video.type ? html.attr("src", "//player.vimeo.com/video/" + video.id + "?autoplay=1") : "vzaar" === video.type && html.attr("src", "//view.vzaar.com/" + video.id + "/player?autoplay=true"), iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find(".owl-video")), this._playing = item.addClass("owl-video-playing"));
    }, Video.prototype.isInFullScreen = function () {
        var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        return element && $(element).parent().hasClass("owl-video-frame");
    }, Video.prototype.destroy = function () {
        var handler, property;
        for (handler in this._core.$element.off("click.owl.video"), this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[property] && (this[property] = null);
        }
    }, $.fn.owlCarousel.Constructor.Plugins.Video = Video;
}(window.Zepto || window.jQuery, window, document), function ($, window, document, undefined) {
    var Animate = function Animate(scope) {
        this.core = scope, this.core.options = $.extend({}, Animate.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": $.proxy(function (e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value);
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": $.proxy(function (e) {
                e.namespace && (this.swapping = "translated" == e.type);
            }, this), "translate.owl.carousel": $.proxy(function (e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
            }, this)
        }, this.core.$element.on(this.handlers);
    };
    Animate.Defaults = {animateOut: !1, animateIn: !1}, Animate.prototype.swap = function () {
        if (1 === this.core.settings.items && $.support.animation && $.support.transition) {
            this.core.speed(0);
            var left, clear = $.proxy(this.clear, this), previous = this.core.$stage.children().eq(this.previous),
                next = this.core.$stage.children().eq(this.next), incoming = this.core.settings.animateIn,
                outgoing = this.core.settings.animateOut;
            this.core.current() !== this.previous && (outgoing && (left = this.core.coordinates(this.previous) - this.core.coordinates(this.next), previous.one($.support.animation.end, clear).css({left: left + "px"}).addClass("animated owl-animated-out").addClass(outgoing)), incoming && next.one($.support.animation.end, clear).addClass("animated owl-animated-in").addClass(incoming));
        }
    }, Animate.prototype.clear = function (e) {
        $(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
    }, Animate.prototype.destroy = function () {
        var handler, property;
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[property] && (this[property] = null);
        }
    }, $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
}(window.Zepto || window.jQuery, window, document), function ($, window, document, undefined) {
    var Autoplay = function Autoplay(carousel) {
        this._core = carousel, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": $.proxy(function (e) {
                e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0);
            }, this), "initialized.owl.carousel": $.proxy(function (e) {
                e.namespace && this._core.settings.autoplay && this.play();
            }, this), "play.owl.autoplay": $.proxy(function (e, t, s) {
                e.namespace && this.play(t, s);
            }, this), "stop.owl.autoplay": $.proxy(function (e) {
                e.namespace && this.stop();
            }, this), "mouseover.owl.autoplay": $.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this), "mouseleave.owl.autoplay": $.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
            }, this), "touchstart.owl.core": $.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this), "touchend.owl.core": $.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play();
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };
    Autoplay.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, Autoplay.prototype._next = function (speed) {
        this._call = window.setTimeout($.proxy(this._next, this, speed), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || document.hidden || this._core.next(speed || this._core.settings.autoplaySpeed);
    }, Autoplay.prototype.read = function () {
        return new Date().getTime() - this._time;
    }, Autoplay.prototype.play = function (timeout, speed) {
        var elapsed;
        this._core.is("rotating") || this._core.enter("rotating"), timeout = timeout || this._core.settings.autoplayTimeout, elapsed = Math.min(this._time % (this._timeout || timeout), timeout), this._paused ? (this._time = this.read(), this._paused = !1) : window.clearTimeout(this._call), this._time += this.read() % timeout - elapsed, this._timeout = timeout, this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
    }, Autoplay.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, window.clearTimeout(this._call), this._core.leave("rotating"));
    }, Autoplay.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, window.clearTimeout(this._call));
    }, Autoplay.prototype.destroy = function () {
        var handler, property;
        for (handler in this.stop(), this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[property] && (this[property] = null);
        }
    }, $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
}(window.Zepto || window.jQuery, window, document), function ($, window, document, undefined) {
    "use strict";
    var Navigation = function Navigation(carousel) {
        this._core = carousel, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": $.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
            }, this), "added.owl.carousel": $.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop());
            }, this), "remove.owl.carousel": $.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1);
            }, this), "changed.owl.carousel": $.proxy(function (e) {
                e.namespace && "position" == e.property.name && this.draw();
            }, this), "initialized.owl.carousel": $.proxy(function (e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
            }, this), "refreshed.owl.carousel": $.proxy(function (e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
            }, this)
        }, this._core.options = $.extend({}, Navigation.Defaults, this._core.options), this.$element.on(this._handlers);
    };
    Navigation.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, Navigation.prototype.initialize = function () {
        var override, settings = this._core.settings;
        for (override in this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $("<div>").addClass(settings.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = $("<" + settings.navElement + ">").addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on("click", $.proxy(function (e) {
            this.prev(settings.navSpeed);
        }, this)), this._controls.$next = $("<" + settings.navElement + ">").addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on("click", $.proxy(function (e) {
            this.next(settings.navSpeed);
        }, this)), settings.dotsData || (this._templates = [$('<button role="button">').addClass(settings.dotClass).append($("<span>")).prop("outerHTML")]), this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $("<div>").addClass(settings.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", $.proxy(function (e) {
            var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault(), this.to(index, settings.dotsSpeed);
        }, this)), this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    }, Navigation.prototype.destroy = function () {
        var handler, control, property, override, settings;
        for (handler in settings = this._core.settings, this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            "$relative" === control && settings.navContainer ? this._controls[control].html("") : this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[property] && (this[property] = null);
        }
    }, Navigation.prototype.update = function () {
        var i, j, k, lower = this._core.clones().length / 2, upper = lower + this._core.items().length,
            maximum = this._core.maximum(!0), settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
        if ("page" !== settings.slideBy && (settings.slideBy = Math.min(settings.slideBy, settings.items)), settings.dots || "page" == settings.slideBy) for (this._pages = [], i = lower, j = 0, k = 0; i < upper; i++) {
            if (j >= size || 0 === j) {
                if (this._pages.push({
                    start: Math.min(maximum, i - lower),
                    end: i - lower + size - 1
                }), Math.min(maximum, i - lower) === maximum) break;
                j = 0, ++k;
            }
            j += this._core.mergers(this._core.relative(i));
        }
    }, Navigation.prototype.draw = function () {
        var difference, settings = this._core.settings, disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()), loop = settings.loop || settings.rewind;
        this._controls.$relative.toggleClass("disabled", !settings.nav || disabled), settings.nav && (this._controls.$previous.toggleClass("disabled", !loop && index <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !loop && index >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !settings.dots || disabled), settings.dots && (difference = this._pages.length - this._controls.$absolute.children().length, settings.dotsData && 0 !== difference ? this._controls.$absolute.html(this._templates.join("")) : difference > 0 ? this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0])) : difference < 0 && this._controls.$absolute.children().slice(difference).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass("active"));
    }, Navigation.prototype.onTrigger = function (event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
        };
    }, Navigation.prototype.current = function () {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function (page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    }, Navigation.prototype.getPosition = function (successor) {
        var position, length, settings = this._core.settings;
        return "page" == settings.slideBy ? (position = $.inArray(this.current(), this._pages), length = this._pages.length, successor ? ++position : --position, position = this._pages[(position % length + length) % length].start) : (position = this._core.relative(this._core.current()), length = this._core.items().length, successor ? position += settings.slideBy : position -= settings.slideBy), position;
    }, Navigation.prototype.next = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(!0), speed);
    }, Navigation.prototype.prev = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(!1), speed);
    }, Navigation.prototype.to = function (position, speed, standard) {
        var length;
        !standard && this._pages.length ? (length = this._pages.length, $.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed)) : $.proxy(this._overrides.to, this._core)(position, speed);
    }, $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
}(window.Zepto || window.jQuery, window, document), function ($, window, document, undefined) {
    "use strict";
    var Hash = function Hash(carousel) {
        this._core = carousel, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": $.proxy(function (e) {
                e.namespace && "URLHash" === this._core.settings.startPosition && $(window).trigger("hashchange.owl.navigation");
            }, this), "prepared.owl.carousel": $.proxy(function (e) {
                if (e.namespace) {
                    var hash = $(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!hash) return;
                    this._hashes[hash] = e.content;
                }
            }, this), "changed.owl.carousel": $.proxy(function (e) {
                if (e.namespace && "position" === e.property.name) {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function (item, hash) {
                            return item === current ? hash : null;
                        }).join();
                    if (!hash || window.location.hash.slice(1) === hash) return;
                    window.location.hash = hash;
                }
            }, this)
        }, this._core.options = $.extend({}, Hash.Defaults, this._core.options), this.$element.on(this._handlers), $(window).on("hashchange.owl.navigation", $.proxy(function (e) {
            var hash = window.location.hash.substring(1), items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);
            void 0 !== position && position !== this._core.current() && this._core.to(this._core.relative(position), !1, !0);
        }, this));
    };
    Hash.Defaults = {URLhashListener: !1}, Hash.prototype.destroy = function () {
        var handler, property;
        for (handler in $(window).off("hashchange.owl.navigation"), this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[property] && (this[property] = null);
        }
    }, $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
}(window.Zepto || window.jQuery, window, document), function ($, window, document, undefined) {
    var style = $("<support>").get(0).style, prefixes = "Webkit Moz O ms".split(" "), events = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, tests_csstransforms = function tests_csstransforms() {
        return !!test("transform");
    }, tests_csstransforms3d = function tests_csstransforms3d() {
        return !!test("perspective");
    }, tests_csstransitions, tests_cssanimations = function tests_cssanimations() {
        return !!test("animation");
    };

    function test(property, prefixed) {
        var result = !1, upper = property.charAt(0).toUpperCase() + property.slice(1);
        return $.each((property + " " + prefixes.join(upper + " ") + upper).split(" "), function (i, property) {
            if (void 0 !== style[property]) return result = !prefixed || property, !1;
        }), result;
    }

    function prefixed(property) {
        return test(property, !0);
    }

    (function () {
        return !!test("transition");
    })() && ($.support.transition = new String(prefixed("transition")), $.support.transition.end = events.transition.end[$.support.transition]), tests_cssanimations() && ($.support.animation = new String(prefixed("animation")), $.support.animation.end = events.animation.end[$.support.animation]), tests_csstransforms() && ($.support.transform = new String(prefixed("transform")), $.support.transform3d = tests_csstransforms3d());
}(window.Zepto || window.jQuery, window, document);/*! echo.js | (c)  @toddmotto | https://github.com/toddmotto/echo */
!function (t, e) {
    "function" == typeof define && define.amd ? define(function () {
        return e(t);
    }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e : t.echo = e(t);
}(this, function (t) {
    "use strict";
    var e, n, o, r, c, i = {}, l = function l() {
    }, a = function a(t, e) {
        var n = t.getBoundingClientRect();
        return n.right >= e.l && n.bottom >= e.t && n.left <= e.r && n.top <= e.b;
    }, d = function d() {
        (r || !n) && (clearTimeout(n), n = setTimeout(function () {
            i.render(), n = null;
        }, o));
    };
    return i.init = function (n) {
        n = n || {};
        var a = n.offset || 0, u = n.offsetVertical || a, f = n.offsetHorizontal || a, s = function s(t, e) {
            return parseInt(t || e, 10);
        };
        e = {
            t: s(n.offsetTop, u),
            b: s(n.offsetBottom, u),
            l: s(n.offsetLeft, f),
            r: s(n.offsetRight, f)
        }, o = s(n.throttle, 250), r = n.debounce !== !1, c = !!n.unload, l = n.callback || l, i.render(), document.addEventListener ? (t.addEventListener("scroll", d, !1), t.addEventListener("load", d, !1)) : (t.attachEvent("onscroll", d), t.attachEvent("onload", d));
    }, i.render = function () {
        for (var n, o, r = document.querySelectorAll("img[data-echo]"), d = r.length, u = {
            l: 0 - e.l,
            t: 0 - e.t,
            b: (t.innerHeight || document.documentElement.clientHeight) + e.b,
            r: (t.innerWidth || document.documentElement.clientWidth) + e.r
        }, f = 0; d > f; f++) {
            o = r[f], a(o, u) ? (c && o.setAttribute("data-echo-placeholder", o.src), o.src = o.getAttribute("data-echo"), c || o.removeAttribute("data-echo"), l(o, "load")) : c && (n = o.getAttribute("data-echo-placeholder")) && (o.src = n, o.removeAttribute("data-echo-placeholder"), l(o, "unload"));
        }
        d || i.detach();
    }, i.detach = function () {
        document.removeEventListener ? t.removeEventListener("scroll", d) : t.detachEvent("onscroll", d), clearTimeout(n);
    }, i;
});/*
 * jQuery Easing http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/
$(document).ready(function () {
    jQuery.easing.jswing = jQuery.easing.swing;
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad", swing: function swing(e, f, a, h, g) {
            return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
        }, easeInQuad: function easeInQuad(e, f, a, h, g) {
            return h * (f /= g) * f + a;
        }, easeOutQuad: function easeOutQuad(e, f, a, h, g) {
            return -h * (f /= g) * (f - 2) + a;
        }, easeInOutQuad: function easeInOutQuad(e, f, a, h, g) {
            if ((f /= g / 2) < 1) {
                return h / 2 * f * f + a;
            }
            return -h / 2 * (--f * (f - 2) - 1) + a;
        }, easeInCubic: function easeInCubic(e, f, a, h, g) {
            return h * (f /= g) * f * f + a;
        }, easeOutCubic: function easeOutCubic(e, f, a, h, g) {
            return h * ((f = f / g - 1) * f * f + 1) + a;
        }, easeInOutCubic: function easeInOutCubic(e, f, a, h, g) {
            if ((f /= g / 2) < 1) {
                return h / 2 * f * f * f + a;
            }
            return h / 2 * ((f -= 2) * f * f + 2) + a;
        }, easeInQuart: function easeInQuart(e, f, a, h, g) {
            return h * (f /= g) * f * f * f + a;
        }, easeOutQuart: function easeOutQuart(e, f, a, h, g) {
            return -h * ((f = f / g - 1) * f * f * f - 1) + a;
        }, easeInOutQuart: function easeInOutQuart(e, f, a, h, g) {
            if ((f /= g / 2) < 1) {
                return h / 2 * f * f * f * f + a;
            }
            return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
        }, easeInQuint: function easeInQuint(e, f, a, h, g) {
            return h * (f /= g) * f * f * f * f + a;
        }, easeOutQuint: function easeOutQuint(e, f, a, h, g) {
            return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
        }, easeInOutQuint: function easeInOutQuint(e, f, a, h, g) {
            if ((f /= g / 2) < 1) {
                return h / 2 * f * f * f * f * f + a;
            }
            return h / 2 * ((f -= 2) * f * f * f * f + 2) + a;
        }, easeInSine: function easeInSine(e, f, a, h, g) {
            return -h * Math.cos(f / g * (Math.PI / 2)) + h + a;
        }, easeOutSine: function easeOutSine(e, f, a, h, g) {
            return h * Math.sin(f / g * (Math.PI / 2)) + a;
        }, easeInOutSine: function easeInOutSine(e, f, a, h, g) {
            return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a;
        }, easeInExpo: function easeInExpo(e, f, a, h, g) {
            return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
        }, easeOutExpo: function easeOutExpo(e, f, a, h, g) {
            return f == g ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
        }, easeInOutExpo: function easeInOutExpo(e, f, a, h, g) {
            if (f == 0) {
                return a;
            }
            if (f == g) {
                return a + h;
            }
            if ((f /= g / 2) < 1) {
                return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
            }
            return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
        }, easeInCirc: function easeInCirc(e, f, a, h, g) {
            return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
        }, easeOutCirc: function easeOutCirc(e, f, a, h, g) {
            return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
        }, easeInOutCirc: function easeInOutCirc(e, f, a, h, g) {
            if ((f /= g / 2) < 1) {
                return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a;
            }
            return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
        }, easeInElastic: function easeInElastic(f, h, e, l, k) {
            var i = 1.70158;
            var j = 0;
            var g = l;
            if (h == 0) {
                return e;
            }
            if ((h /= k) == 1) {
                return e + l;
            }
            if (!j) {
                j = k * 0.3;
            }
            if (g < Math.abs(l)) {
                g = l;
                var i = j / 4;
            } else {
                var i = j / (2 * Math.PI) * Math.asin(l / g);
            }
            return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
        }, easeOutElastic: function easeOutElastic(f, h, e, l, k) {
            var i = 1.70158;
            var j = 0;
            var g = l;
            if (h == 0) {
                return e;
            }
            if ((h /= k) == 1) {
                return e + l;
            }
            if (!j) {
                j = k * 0.3;
            }
            if (g < Math.abs(l)) {
                g = l;
                var i = j / 4;
            } else {
                var i = j / (2 * Math.PI) * Math.asin(l / g);
            }
            return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e;
        }, easeInOutElastic: function easeInOutElastic(f, h, e, l, k) {
            var i = 1.70158;
            var j = 0;
            var g = l;
            if (h == 0) {
                return e;
            }
            if ((h /= k / 2) == 2) {
                return e + l;
            }
            if (!j) {
                j = k * (0.3 * 1.5);
            }
            if (g < Math.abs(l)) {
                g = l;
                var i = j / 4;
            } else {
                var i = j / (2 * Math.PI) * Math.asin(l / g);
            }
            if (h < 1) {
                return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
            }
            return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e;
        }, easeInBack: function easeInBack(e, f, a, i, h, g) {
            if (g == undefined) {
                g = 1.70158;
            }
            return i * (f /= h) * f * ((g + 1) * f - g) + a;
        }, easeOutBack: function easeOutBack(e, f, a, i, h, g) {
            if (g == undefined) {
                g = 1.70158;
            }
            return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
        }, easeInOutBack: function easeInOutBack(e, f, a, i, h, g) {
            if (g == undefined) {
                g = 1.70158;
            }
            if ((f /= h / 2) < 1) {
                return i / 2 * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
            }
            return i / 2 * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
        }, easeInBounce: function easeInBounce(e, f, a, h, g) {
            return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
        }, easeOutBounce: function easeOutBounce(e, f, a, h, g) {
            if ((f /= g) < 1 / 2.75) {
                return h * (7.5625 * f * f) + a;
            } else {
                if (f < 2 / 2.75) {
                    return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
                } else {
                    if (f < 2.5 / 2.75) {
                        return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
                    } else {
                        return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
                    }
                }
            }
        }, easeInOutBounce: function easeInOutBounce(e, f, a, h, g) {
            if (f < g / 2) {
                return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
            }
            return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a;
        }
    });
});/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */ /*! RateIt | https://rateit.codeplex.com/license
    http://rateit.codeplex.com | Twitter: @gjunge
*/
(function (n) {
    function t(n) {
        var u = n.originalEvent.changedTouches, t = u[0], i = "", r;
        switch (n.type) {
            case "touchmove":
                i = "mousemove";
                break;
            case "touchend":
                i = "mouseup";
                break;
            default:
                return;
        }
        r = document.createEvent("MouseEvent");
        r.initMouseEvent(i, !0, !0, window, 1, t.screenX, t.screenY, t.clientX, t.clientY, !1, !1, !1, !1, 0, null);
        t.target.dispatchEvent(r);
        n.preventDefault();
    }

    n.rateit = {aria: {resetLabel: "reset rating", ratingLabel: "rating"}};
    n.fn.rateit = function (i, r) {
        var e = 1, u = {}, o = "init", s = function s(n) {
            return n.charAt(0).toUpperCase() + n.substr(1);
        }, f;
        if (this.length === 0) return this;
        if (f = n.type(i), f == "object" || i === undefined || i === null) u = n.extend({}, n.fn.rateit.defaults, i); else {
            if (f == "string" && i !== "reset" && r === undefined) return this.data("rateit" + s(i));
            f == "string" && (o = "setvalue");
        }
        return this.each(function () {
            var c = n(this), f = function f(n, t) {
                if (t != null) {
                    var i = "aria-value" + (n == "value" ? "now" : n), r = c.find(".rateit-range");
                    r.attr(i) != undefined && r.attr(i, t);
                }
                return arguments[0] = "rateit" + s(n), c.data.apply(c, arguments);
            }, p, w, v, h, b, g, nt, l, y, k, a;
            if (i == "reset") {
                p = f("init");
                for (w in p) {
                    c.data(w, p[w]);
                }
                f("backingfld") && (h = n(f("backingfld")), h.val(f("value")), h.trigger("change"), h[0].min && (h[0].min = f("min")), h[0].max && (h[0].max = f("max")), h[0].step && (h[0].step = f("step")));
                c.trigger("reset");
            }
            if (c.hasClass("rateit") || c.addClass("rateit"), v = c.css("direction") != "rtl", o == "setvalue") {
                if (!f("init")) throw "Can't set value before init";
                i != "readonly" || r != !0 || f("readonly") || (c.find(".rateit-range").unbind(), f("wired", !1));
                i == "value" && (r = r == null ? f("min") : Math.max(f("min"), Math.min(f("max"), r)));
                f("backingfld") && (h = n(f("backingfld")), i == "value" && h.val(r), i == "min" && h[0].min && (h[0].min = r), i == "max" && h[0].max && (h[0].max = r), i == "step" && h[0].step && (h[0].step = r));
                f(i, r);
            }
            f("init") || (f("min", isNaN(f("min")) ? u.min : f("min")), f("max", isNaN(f("max")) ? u.max : f("max")), f("step", f("step") || u.step), f("readonly", f("readonly") !== undefined ? f("readonly") : u.readonly), f("resetable", f("resetable") !== undefined ? f("resetable") : u.resetable), f("backingfld", f("backingfld") || u.backingfld), f("starwidth", f("starwidth") || u.starwidth), f("starheight", f("starheight") || u.starheight), f("value", Math.max(f("min"), Math.min(f("max"), isNaN(f("value")) ? isNaN(u.value) ? u.min : u.value : f("value")))), f("ispreset", f("ispreset") !== undefined ? f("ispreset") : u.ispreset), f("backingfld") && (h = n(f("backingfld")).hide(), (h.attr("disabled") || h.attr("readonly")) && f("readonly", !0), h[0].nodeName == "INPUT" && (h[0].type == "range" || h[0].type == "text") && (f("min", parseInt(h.attr("min")) || f("min")), f("max", parseInt(h.attr("max")) || f("max")), f("step", parseInt(h.attr("step")) || f("step"))), h[0].nodeName == "SELECT" && h[0].options.length > 1 ? (f("min", isNaN(f("min")) ? Number(h[0].options[0].value) : f("min")), f("max", Number(h[0].options[h[0].length - 1].value)), f("step", Number(h[0].options[1].value) - Number(h[0].options[0].value)), b = h.find("option[selected]"), b.length == 1 && f("value", b.val())) : f("value", h.val())), g = c[0].nodeName == "DIV" ? "div" : "span", e++, nt = '<button id="rateit-reset-{{index}}" data-role="none" class="rateit-reset" aria-label="' + n.rateit.aria.resetLabel + '" aria-controls="rateit-range-{{index}}"><\/button><{{element}} id="rateit-range-{{index}}" class="rateit-range" tabindex="0" role="slider" aria-label="' + n.rateit.aria.ratingLabel + '" aria-owns="rateit-reset-{{index}}" aria-valuemin="' + f("min") + '" aria-valuemax="' + f("max") + '" aria-valuenow="' + f("value") + '"><{{element}} class="rateit-selected" style="height:' + f("starheight") + 'px"><\/{{element}}><{{element}} class="rateit-hover" style="height:' + f("starheight") + 'px"><\/{{element}}><\/{{element}}>', c.append(nt.replace(/{{index}}/gi, e).replace(/{{element}}/gi, g)), v || (c.find(".rateit-reset").css("float", "right"), c.find(".rateit-selected").addClass("rateit-selected-rtl"), c.find(".rateit-hover").addClass("rateit-hover-rtl")), f("init", JSON.parse(JSON.stringify(c.data()))));
            c.find(".rateit-selected, .rateit-hover").height(f("starheight"));
            l = c.find(".rateit-range");
            l.width(f("starwidth") * (f("max") - f("min"))).height(f("starheight"));
            y = "rateit-preset" + (v ? "" : "-rtl");
            f("ispreset") ? c.find(".rateit-selected").addClass(y) : c.find(".rateit-selected").removeClass(y);
            f("value") != null && (k = (f("value") - f("min")) * f("starwidth"), c.find(".rateit-selected").width(k));
            a = c.find(".rateit-reset");
            a.data("wired") !== !0 && a.on("click", function (t) {
                t.preventDefault();
                a.blur();
                var i = n.Event("beforereset");
                if (c.trigger(i), i.isDefaultPrevented()) return !1;
                c.rateit("value", null);
                c.trigger("reset");
            }).data("wired", !0);
            var tt = function tt(t, i) {
                var u = i.changedTouches ? i.changedTouches[0].pageX : i.pageX, r = u - n(t).offset().left;
                return v || (r = l.width() - r), r > l.width() && (r = l.width()), r < 0 && (r = 0), k = Math.ceil(r / f("starwidth") * (1 / f("step")));
            }, it = function it(n) {
                var t = n * f("starwidth") * f("step"), r = l.find(".rateit-hover"), i;
                r.data("width") != t && (l.find(".rateit-selected").hide(), r.width(t).show().data("width", t), i = [n * f("step") + f("min")], c.trigger("hover", i).trigger("over", i));
            }, d = function d(t) {
                var i = n.Event("beforerated");
                return (c.trigger(i, [t]), i.isDefaultPrevented()) ? !1 : (f("value", t), f("backingfld") && n(f("backingfld")).val(t).trigger("change"), f("ispreset") && (l.find(".rateit-selected").removeClass(y), f("ispreset", !1)), l.find(".rateit-hover").hide(), l.find(".rateit-selected").width(t * f("starwidth") - f("min") * f("starwidth")).show(), c.trigger("hover", [null]).trigger("over", [null]).trigger("rated", [t]), !0);
            };
            f("readonly") ? a.hide() : (f("resetable") || a.hide(), f("wired") || (l.bind("touchmove touchend", t), l.mousemove(function (n) {
                var t = tt(this, n);
                it(t);
            }), l.mouseleave(function () {
                l.find(".rateit-hover").hide().width(0).data("width", "");
                c.trigger("hover", [null]).trigger("over", [null]);
                l.find(".rateit-selected").show();
            }), l.mouseup(function (n) {
                var t = tt(this, n), i = t * f("step") + f("min");
                d(i);
                l.blur();
            }), l.keyup(function (n) {
                (n.which == 38 || n.which == (v ? 39 : 37)) && d(Math.min(f("value") + f("step"), f("max")));
                (n.which == 40 || n.which == (v ? 37 : 39)) && d(Math.max(f("value") - f("step"), f("min")));
            }), f("wired", !0)), f("resetable") && a.show());
            l.attr("aria-readonly", f("readonly"));
        });
    };
    n.fn.rateit.defaults = {
        min: 0,
        max: 5,
        step: .5,
        starwidth: 14,
        starheight: 14,
        readonly: !1,
        resetable: !0,
        ispreset: !1
    };
    n(function () {
        n("div.rateit, span.rateit").rateit();
    });
})(jQuery);/*
//# sourceMappingURL=jquery.rateit.min.js.map
*/ /*! WOW
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function () {
    var a, b, c, d = function d(a, b) {
        return function () {
            return a.apply(b, arguments);
        };
    }, e = [].indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++) {
            if (b in this && this[b] === a) return b;
        }
        return -1;
    };
    b = function () {
        function a() {
        }

        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in a) {
                d = a[c], null != d && (b[c] = d);
            }
            return b;
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
        }, a;
    }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
        function a() {
            this.keys = [], this.values = [];
        }

        return a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) {
                if (c = f[b], c === a) return this.values[b];
            }
        }, a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) {
                if (d = g[c], d === a) return void (this.values[c] = b);
            }
            return this.keys.push(a), this.values.push(b);
        }, a;
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
        function a() {
            console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
        }

        return a.notSupported = !0, a.prototype.observe = function () {
        }, a;
    }()), this.WOW = function () {
        function f(a) {
            null == a && (a = {}), this.scrollCallback = d(this.scrollCallback, this), this.scrollHandler = d(this.scrollHandler, this), this.start = d(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c();
        }

        return f.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }, f.prototype.init = function () {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = [];
        }, f.prototype.start = function () {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.all = function () {
                var a, c, d, e;
                for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) {
                    b = d[a], e.push(b);
                }
                return e;
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else {
                for (e = this.boxes, c = 0, d = e.length; d > c; c++) {
                    b = e[c], this.applyStyle(b, !0);
                }
                window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50);
            }
            return this.config.live ? new a(function (a) {
                return function (b) {
                    var c, d, e, f, g;
                    for (g = [], e = 0, f = b.length; f > e; e++) {
                        d = b[e], g.push(function () {
                            var a, b, e, f;
                            for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) {
                                c = e[a], f.push(this.doSync(c));
                            }
                            return f;
                        }.call(a));
                    }
                    return g;
                };
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0;
        }, f.prototype.stop = function () {
            return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0;
        }, f.prototype.sync = function () {
            return a.notSupported ? this.doSync(this.element) : void 0;
        }, f.prototype.doSync = function (a) {
            var b, c, d, f, g;
            if (!this.stopped) {
                for (a || (a = this.element), a = a.parentNode || a, f = a.getElementsByClassName(this.config.boxClass), g = [], c = 0, d = f.length; d > c; c++) {
                    b = f[c], e.call(this.all, b) < 0 ? (this.applyStyle(b, !0), this.boxes.push(b), this.all.push(b), g.push(this.scrolled = !0)) : g.push(void 0);
                }
                return g;
            }
        }, f.prototype.show = function (a) {
            return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass;
        }, f.prototype.applyStyle = function (a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e);
                };
            }(this));
        }, f.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (a) {
                return window.requestAnimationFrame(a);
            } : function (a) {
                return a();
            };
        }(), f.prototype.resetStyle = function () {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) {
                a = d[b], e.push(a.setAttribute("style", "visibility: visible;"));
            }
            return e;
        }, f.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {animationDuration: c}), d && this.vendorSet(a.style, {animationDelay: d}), e && this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b ? "none" : this.cachedAnimationName(a)}), a;
        }, f.prototype.vendors = ["moz", "webkit"], f.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            f = [];
            for (c in b) {
                d = b[c], a["" + c] = d, f.push(function () {
                    var b, f, g, h;
                    for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) {
                        e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                    }
                    return h;
                }.call(this));
            }
            return f;
        }, f.prototype.vendorCSS = function (a, b) {
            var c, d, e, f, g, h;
            for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, f = 0, g = h.length; g > f; f++) {
                e = h[f], c = c || d.getPropertyCSSValue("-" + e + "-" + b);
            }
            return c;
        }, f.prototype.animationName = function (a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText;
            } catch (c) {
                b = window.getComputedStyle(a).getPropertyValue("animation-name");
            }
            return "none" === b ? "" : b;
        }, f.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a));
        }, f.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a);
        }, f.prototype.scrollHandler = function () {
            return this.scrolled = !0;
        }, f.prototype.scrollCallback = function () {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) {
                    a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                }
                return e;
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
        }, f.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;) {
                a = a.parentNode;
            }
            for (b = a.offsetTop; a = a.offsetParent;) {
                b += a.offsetTop;
            }
            return b;
        }, f.prototype.isVisible = function (a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + this.element.clientHeight - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f;
        }, f.prototype.util = function () {
            return this._util || (this._util = new b());
        }, f.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }, f;
    }();
}).call(this);
!function ($) {
    "use strict";
    $.fn.starRating = function (options) {
        var settings = $.extend({
            stars: 5, current: 0, callback: function callback(value) {
            }, "static": !1
        }, options), $ul = this, $li = $('<li class="star"><i class="fa fa-star"></i></li>');
        if (!$ul.hasClass("starrating-init")) {
            this.attr("data-current") && (settings.current = this.attr("data-current")), this.attr("data-stars") && (settings.stars = this.attr("data-stars")), this.attr("data-static") && (settings["static"] = "1" === this.attr("data-static") || "true" === this.attr("data-static") || settings["static"]);
            for (var i = 0; i < settings.stars; i++) {
                var $clone = $li.clone();
                settings.current && i < settings.current && $clone.addClass("active"), $ul.append($clone);
            }
            return this.addClass("starrating-init"), settings["static"] || $ul.find("li").on("click", function () {
                if ($(this).hasClass("last")) return $ul.find("li.active").removeClass("active last"), void settings.callback(0);
                $ul.find("li.active").removeClass("active last"), $(this).addClass("active last"), $(this).prevAll().addClass("active");
                var selected = $ul.find("li.active").length;
                settings.callback(selected);
            }).hover(function () {
                $ul.addClass("hover"), $(this).addClass("hover"), $(this).prevAll().addClass("hover");
            }, function () {
                $ul.removeClass("hover"), $(this).removeClass("hover"), $(this).prevAll().removeClass("hover");
            }), this;
        }
    };
}(jQuery);/*!
 * The Final Countdown  (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2014 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function (factory) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], factory) : factory(jQuery);
}(function ($) {
    "use strict";
    var PRECISION = 100, instances = [], matchers = [];

    function parseDateString(dateString) {
        if (dateString instanceof Date) return dateString;
        if (String(dateString).match(matchers)) return String(dateString).match(/^[0-9]*$/) && (dateString = Number(dateString)), String(dateString).match(/\-/) && (dateString = String(dateString).replace(/\-/g, "/")), new Date(dateString);
        throw new Error("Couldn't cast `" + dateString + "` to a date object.");
    }

    matchers.push(/^[0-9]*$/.source), matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), matchers = new RegExp(matchers.join("|"));
    var DIRECTIVE_KEY_MAP = {
        Y: "years",
        m: "months",
        w: "weeks",
        d: "days",
        D: "totalDays",
        H: "hours",
        M: "minutes",
        S: "seconds"
    };

    function strftime(offsetObject) {
        return function (format) {
            var directives = format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (directives) for (var i = 0, len = directives.length; i < len; ++i) {
                var directive = directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                    regexp = new RegExp(directive[0]), modifier = directive[1] || "", plural = directive[3] || "",
                    value = null;
                directive = directive[2], DIRECTIVE_KEY_MAP.hasOwnProperty(directive) && (value = DIRECTIVE_KEY_MAP[directive], value = Number(offsetObject[value])), null !== value && ("!" === modifier && (value = pluralize(plural, value)), "" === modifier && value < 10 && (value = "0" + value.toString()), format = format.replace(regexp, value.toString()));
            }
            return format = format.replace(/%%/, "%");
        };
    }

    function pluralize(format, count) {
        var plural = "s", singular = "";
        return format && (1 === (format = format.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? plural = format[0] : (singular = format[0], plural = format[1])), 1 === Math.abs(count) ? singular : plural;
    }

    var Countdown = function Countdown(el, finalDate, callback) {
        this.el = el, this.$el = $(el), this.interval = null, this.offset = {}, this.instanceNumber = instances.length, instances.push(this), this.$el.data("countdown-instance", this.instanceNumber), callback && (this.$el.on("update.countdown", callback), this.$el.on("stoped.countdown", callback), this.$el.on("finish.countdown", callback)), this.setFinalDate(finalDate), this.start();
    };
    $.extend(Countdown.prototype, {
        start: function start() {
            null !== this.interval && clearInterval(this.interval);
            var self = this;
            this.update(), this.interval = setInterval(function () {
                self.update.call(self);
            }, 100);
        }, stop: function stop() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped");
        }, pause: function pause() {
            this.stop.call(this);
        }, resume: function resume() {
            this.start.call(this);
        }, remove: function remove() {
            this.stop(), instances[this.instanceNumber] = null, delete this.$el.data().countdownInstance;
        }, setFinalDate: function setFinalDate(value) {
            this.finalDate = parseDateString(value);
        }, update: function update() {
            0 !== this.$el.closest("html").length ? (this.totalSecsLeft = this.finalDate.getTime() - new Date().getTime(), this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3), this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
            }, 0 === this.totalSecsLeft ? (this.stop(), this.dispatchEvent("finish")) : this.dispatchEvent("update")) : this.remove();
        }, dispatchEvent: function dispatchEvent(eventName) {
            var event = $.Event(eventName + ".countdown");
            event.finalDate = this.finalDate, event.offset = $.extend({}, this.offset), event.strftime = strftime(this.offset), this.$el.trigger(event);
        }
    }), $.fn.countdown = function () {
        var argumentsArray = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            var instanceNumber = $(this).data("countdown-instance");
            if (void 0 !== instanceNumber) {
                var instance = instances[instanceNumber], method = argumentsArray[0];
                Countdown.prototype.hasOwnProperty(method) ? instance[method].apply(instance, argumentsArray.slice(1)) : null === String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (instance.setFinalDate.call(instance, method), instance.start()) : $.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, method));
            } else new Countdown(this, argumentsArray[0], argumentsArray[1]);
        });
    };
});
!function ($) {
    function isInternetExplorer() {
        var userAgent = window.navigator.userAgent;
        return userAgent.indexOf("MSIE") >= 0 || userAgent.match(/Trident.*rv\:11\./);
    }

    function mobilecheck() {
        var check = !1, a;
        return a = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (check = !0), check;
    }

    $.fn.venomButton = function (options) {
        var settings = $.extend({
            phone: "",
            message: "",
            size: "72px",
            backgroundColor: "#25D366",
            position: "left",
            popupMessage: "",
            linkButton: !1,
            showPopup: !1,
            showOnIE: !0,
            autoOpenTimeout: 0,
            headerColor: "#128C7E",
            headerTitle: "WhatsApp Chat",
            zIndex: 0,
            buttonImage: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 800 800" width="800" height="800"><defs><clipPath id="_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ"><rect width="800" height="800"/></clipPath></defs><g clip-path="url(#_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ)"><g><path d=" M 787.59 800 L 12.41 800 C 5.556 800 0 793.332 0 785.108 L 0 14.892 C 0 6.667 5.556 0 12.41 0 L 787.59 0 C 794.444 0 800 6.667 800 14.892 L 800 785.108 C 800 793.332 794.444 800 787.59 800 Z " fill="rgb(37,211,102)"/></g><g><path d=" M 508.558 450.429 C 502.67 447.483 473.723 433.24 468.325 431.273 C 462.929 429.308 459.003 428.328 455.078 434.22 C 451.153 440.114 439.869 453.377 436.434 457.307 C 433 461.236 429.565 461.729 423.677 458.78 C 417.79 455.834 398.818 449.617 376.328 429.556 C 358.825 413.943 347.008 394.663 343.574 388.768 C 340.139 382.873 343.207 379.687 346.155 376.752 C 348.804 374.113 352.044 369.874 354.987 366.436 C 357.931 362.999 358.912 360.541 360.875 356.614 C 362.837 352.683 361.857 349.246 360.383 346.299 C 358.912 343.352 347.136 314.369 342.231 302.579 C 337.451 291.099 332.597 292.654 328.983 292.472 C 325.552 292.301 321.622 292.265 317.698 292.265 C 313.773 292.265 307.394 293.739 301.996 299.632 C 296.6 305.527 281.389 319.772 281.389 348.752 C 281.389 377.735 302.487 405.731 305.431 409.661 C 308.376 413.592 346.949 473.062 406.015 498.566 C 420.062 504.634 431.03 508.256 439.581 510.969 C 453.685 515.451 466.521 514.818 476.666 513.302 C 487.978 511.613 511.502 499.06 516.409 485.307 C 521.315 471.55 521.315 459.762 519.842 457.307 C 518.371 454.851 514.446 453.377 508.558 450.429 Z  M 401.126 597.117 L 401.047 597.117 C 365.902 597.104 331.431 587.661 301.36 569.817 L 294.208 565.572 L 220.08 585.017 L 239.866 512.743 L 235.21 505.332 C 215.604 474.149 205.248 438.108 205.264 401.1 C 205.307 293.113 293.17 205.257 401.204 205.257 C 453.518 205.275 502.693 225.674 539.673 262.696 C 576.651 299.716 597.004 348.925 596.983 401.258 C 596.939 509.254 509.078 597.117 401.126 597.117 Z  M 567.816 234.565 C 523.327 190.024 464.161 165.484 401.124 165.458 C 271.24 165.458 165.529 271.161 165.477 401.085 C 165.46 442.617 176.311 483.154 196.932 518.892 L 163.502 641 L 288.421 608.232 C 322.839 627.005 361.591 636.901 401.03 636.913 L 401.126 636.913 L 401.127 636.913 C 530.998 636.913 636.717 531.2 636.77 401.274 C 636.794 338.309 612.306 279.105 567.816 234.565" fill-rule="evenodd" fill="rgb(255,255,255)"/></g></g></svg>'
        }, options), isMobile = mobilecheck();
        this.addClass("venom-button");
        var $button = $(document.createElement("div")), $buttonImageContainer = $(document.createElement("div")),
            $popup = $(document.createElement("div")), $header = $(document.createElement("div")),
            $popupMessage = $(document.createElement("div")), $btnSend = $(document.createElement("div")),
            $inputMessage = $(document.createElement("div"));
        if ($buttonImageContainer.addClass("venom-button-button-image"), $button.addClass("venom-button-button").append($(settings.buttonImage)).css({
            width: settings.size,
            height: settings.size,
            "background-color": settings.backgroundColor
        }), isInternetExplorer() && !settings.showOnIE || $button.append($buttonImageContainer).appendTo(this), $button.on("click", function () {
            isMobile && settings.showPopup ? openPopup() : settings.linkButton && sendWhatsappMessage();
        }), settings.showPopup) {
            var _openPopup = function _openPopup() {
                $popup.hasClass("active") || ($popup.addClass("active"), $textarea.focus());
            };
            var $textarea = $(document.createElement("textarea")), $closeBtn = $(document.createElement("strong")),
                $sendIcon = $('<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 20 18" width="20" height="18"><defs><clipPath id="_clipPath_fgX00hLzP9PnAfCkGQoSPsYB7aEGkj1G"><rect width="20" height="18"/></clipPath></defs><g clip-path="url(#_clipPath_fgX00hLzP9PnAfCkGQoSPsYB7aEGkj1G)"><path d=" M 0 0 L 0 7.813 L 16 9 L 0 10.188 L 0 18 L 20 9 L 0 0 Z " fill="rgb(46,46,46)"/></g></svg>');
            $popup.addClass("venom-button-popup"), $header.addClass("venom-button-head"), $popupMessage.addClass("venom-button-message"), $inputMessage.addClass("venom-button-input-message"), $btnSend.addClass("venom-button-btn-send"), $popupMessage.text(settings.popupMessage), $textarea.val(settings.message), settings.popupMessage || $popupMessage.hide(), $header.append("<span>" + settings.headerTitle + "</span>", $closeBtn).css("background-color", settings.headerColor), $btnSend.append($sendIcon), $inputMessage.append($textarea, $btnSend), $closeBtn.addClass("close").html("&times;"), $popup.append($header, $popupMessage, $inputMessage).appendTo(this), $popupMessage.click(function () {
            }), $closeBtn.click(function () {
            }), $header.click(function () {
                $popup.removeClass("active");
            }), $textarea.keypress(function (event) {
                settings.message = $(this).val(), 13 != event.keyCode || event.shiftKey || isMobile || (event.preventDefault(), $btnSend.click());
            }), $btnSend.click(function () {
                settings.message = $textarea.val(), sendWhatsappMessage();
            }), this.mouseenter(function () {
                _openPopup();
            }), settings.autoOpenTimeout > 0 && setTimeout(function () {
                _openPopup();
            }, settings.autoOpenTimeout);
        }

        function sendWhatsappMessage() {
            var apilink = "http://";
            apilink += isMobile ? "api" : "web", apilink += ".whatsapp.com/send?phone=" + settings.phone + "&text=" + encodeURI(settings.message), window.open(apilink);
        }

        settings.zIndex && $(this).css("z-index", settings.zIndex), "right" === settings.position && (this.css({
            left: "auto",
            right: "15px"
        }), $popup.css("right", "0"));
    };
}(jQuery);

function _classCallCheck(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
}

var Sticky = function () {
    function t() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        _classCallCheck(this, t), this.selector = i, this.elements = [], this.version = "1.2.0", this.vp = this.getViewportSize(), this.body = document.querySelector("body"), this.options = {
            wrap: e.wrap || !1,
            marginTop: e.marginTop || 0,
            stickyFor: e.stickyFor || 0,
            stickyClass: e.stickyClass || null,
            stickyContainer: e.stickyContainer || "body"
        }, this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this), this.updateScrollTopPosition(), window.addEventListener("load", this.updateScrollTopPosition), window.addEventListener("scroll", this.updateScrollTopPosition), this.run();
    }

    return t.prototype.run = function () {
        var t = this, i = setInterval(function () {
            if ("complete" === document.readyState) {
                clearInterval(i);
                var e = document.querySelectorAll(t.selector);
                t.forEach(e, function (i) {
                    return t.renderElement(i);
                });
            }
        }, 10);
    }, t.prototype.renderElement = function (t) {
        var i = this;
        t.sticky = {}, t.sticky.active = !1, t.sticky.marginTop = parseInt(t.getAttribute("data-margin-top")) || this.options.marginTop, t.sticky.stickyFor = parseInt(t.getAttribute("data-sticky-for")) || this.options.stickyFor, t.sticky.stickyClass = t.getAttribute("data-sticky-class") || this.options.stickyClass, t.sticky.wrap = !!t.hasAttribute("data-sticky-wrap") || this.options.wrap, t.sticky.stickyContainer = this.options.stickyContainer, t.sticky.container = this.getStickyContainer(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect = this.getRectangle(t), "img" === t.tagName.toLowerCase() && (t.onload = function () {
            return t.sticky.rect = i.getRectangle(t);
        }), t.sticky.wrap && this.wrapElement(t), this.activate(t);
    }, t.prototype.wrapElement = function (t) {
        t.insertAdjacentHTML("beforebegin", "<span></span>"), t.previousSibling.appendChild(t);
    }, t.prototype.activate = function (t) {
        t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active && (t.sticky.active = !0), this.elements.indexOf(t) < 0 && this.elements.push(t), t.sticky.resizeEvent || (this.initResizeEvents(t), t.sticky.resizeEvent = !0), t.sticky.scrollEvent || (this.initScrollEvents(t), t.sticky.scrollEvent = !0), this.setPosition(t);
    }, t.prototype.initResizeEvents = function (t) {
        var i = this;
        t.sticky.resizeListener = function () {
            return i.onResizeEvents(t);
        }, window.addEventListener("resize", t.sticky.resizeListener);
    }, t.prototype.destroyResizeEvents = function (t) {
        window.removeEventListener("resize", t.sticky.resizeListener);
    }, t.prototype.onResizeEvents = function (t) {
        this.vp = this.getViewportSize(), t.sticky.rect = this.getRectangle(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active ? t.sticky.active = !0 : (t.sticky.rect.top + t.sticky.rect.height >= t.sticky.container.rect.top + t.sticky.container.rect.height || t.sticky.stickyFor >= this.vp.width && t.sticky.active) && (t.sticky.active = !1), this.setPosition(t);
    }, t.prototype.initScrollEvents = function (t) {
        var i = this;
        t.sticky.scrollListener = function () {
            return i.onScrollEvents(t);
        }, window.addEventListener("scroll", t.sticky.scrollListener);
    }, t.prototype.destroyScrollEvents = function (t) {
        window.removeEventListener("scroll", t.sticky.scrollListener);
    }, t.prototype.onScrollEvents = function (t) {
        t.sticky.active && this.setPosition(t);
    }, t.prototype.setPosition = function (t) {
        this.css(t, {
            position: "",
            width: "",
            top: "",
            left: ""
        }), this.vp.height < t.sticky.rect.height || !t.sticky.active || (t.sticky.rect.width || (t.sticky.rect = this.getRectangle(t)), t.sticky.wrap && this.css(t.parentNode, {
            display: "block",
            width: t.sticky.rect.width + "px",
            height: t.sticky.rect.height + "px"
        }), 0 === t.sticky.rect.top && t.sticky.container === this.body ? this.css(t, {
            position: "fixed",
            top: t.sticky.rect.top + "px",
            left: t.sticky.rect.left + "px",
            width: t.sticky.rect.width + "px"
        }) : this.scrollTop > t.sticky.rect.top - t.sticky.marginTop ? (this.css(t, {
            position: "fixed",
            width: t.sticky.rect.width + "px",
            left: t.sticky.rect.left + "px"
        }), this.scrollTop + t.sticky.rect.height + t.sticky.marginTop > t.sticky.container.rect.top + t.sticky.container.offsetHeight ? (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, {top: t.sticky.container.rect.top + t.sticky.container.offsetHeight - (this.scrollTop + t.sticky.rect.height) + "px"})) : (t.sticky.stickyClass && t.classList.add(t.sticky.stickyClass), this.css(t, {top: t.sticky.marginTop + "px"}))) : (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, {
            position: "",
            width: "",
            top: "",
            left: ""
        }), t.sticky.wrap && this.css(t.parentNode, {display: "", width: "", height: ""})));
    }, t.prototype.update = function () {
        var t = this;
        this.forEach(this.elements, function (i) {
            i.sticky.rect = t.getRectangle(i), i.sticky.container.rect = t.getRectangle(i.sticky.container), t.activate(i), t.setPosition(i);
        });
    }, t.prototype.destroy = function () {
        var t = this;
        this.forEach(this.elements, function (i) {
            t.destroyResizeEvents(i), t.destroyScrollEvents(i), delete i.sticky;
        });
    }, t.prototype.getStickyContainer = function (t) {
        for (var i = t.parentNode; !i.hasAttribute("data-sticky-container") && !i.parentNode.querySelector(t.sticky.stickyContainer) && i !== this.body;) {
            i = i.parentNode;
        }
        return i;
    }, t.prototype.getRectangle = function (t) {
        this.css(t, {position: "", width: "", top: "", left: ""});
        var i = Math.max(t.offsetWidth, t.clientWidth, t.scrollWidth),
            e = Math.max(t.offsetHeight, t.clientHeight, t.scrollHeight), s = 0, o = 0;
        do {
            s += t.offsetTop || 0, o += t.offsetLeft || 0, t = t.offsetParent;
        } while (t);
        return {top: s, left: o, width: i, height: e};
    }, t.prototype.getViewportSize = function () {
        return {
            width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        };
    }, t.prototype.updateScrollTopPosition = function () {
        this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
    }, t.prototype.forEach = function (t, i) {
        for (var e = 0, s = t.length; e < s; e++) {
            i(t[e]);
        }
    }, t.prototype.css = function (t, i) {
        for (var e in i) {
            i.hasOwnProperty(e) && (t.style[e] = i[e]);
        }
    }, t;
}();
!function (t, i) {
    "undefined" != typeof exports ? module.exports = i : "function" == typeof define && define.amd ? define([], i) : t.Sticky = i;
}(this, Sticky);/*=================================================
=            Autocomplete search 				  =
=			  Developer - @nkit                   =
=================================================*/
"use strict";
var search_word;
$(function () {
    search(search_word);
});
$('.searchDropMenu').on('change', function () {
    search_word = $(this).val();
    search(search_word);
});

function search(search_word) {
    if (!search_word) {
        var x = $('.searchDropMenu option:selected').val();
    } else {
        var x = search_word;
    }
    $(".search-field").autocomplete({
        source: function source(request, response) {
            $.ajax({
                url: '{{route("ajaxsearch")}}',
                data: {catid: x, search: request.term},
                dataType: "json",
                success: function success(data) {
                    console.log('Data1', data);
                    var resp = $.map(data, function (obj) {
                        return {label: obj.value, value: obj.value, img: obj.img, url: obj.url};
                    });
                    response(resp);
                }
            });
        }, select: function select(event, ui) {
            if (ui.item.value != 'No Result found') {
                event.preventDefault();
                location.href = ui.item.url;
            } else {
                return false;
            }
        }, html: true, open: function open(event, ui) {
            $(".ui-autocomplete").css("z-index", 1000);
        }
    })
    //     .data( "autocomplete" )._renderItem= function( ul, item ) {
    //     return $( "<li><div><img src='" + item.img + "'><span>" + item.value + "</span></div></li>" )
    //         .data( "item.autocomplete", item )
    //         .append( "<a>" + item.topic.name + "</a>" )
    //         .appendTo( ul );
    // };
        .autocomplete("instance")._renderItem = function (ul, item) {
        return $("<li><div><img src='" + item.img + "'><span>" + item.value + "</span></div></li>").appendTo(ul);
    };
}

var catids = sessionStorage.getItem("searchcat");
$(function () {
    if (window.location.href.indexOf('&keyword=') > 0) {// No code
    } else {
        sessionStorage.clear();
    }
    var cachesearchedValue;
    if (typeof Storage !== "undefined") {
        cachesearchedValue = sessionStorage.getItem("searchItem");
    }
    $('.search-field').val(cachesearchedValue);
    setinhtmlsession(catids);
    $(".searchDropMenu option").each(function () {
        if ($(this).val() == catids) {// EDITED THIS LINE
            $(this).attr("selected", "selected");
        } else {
            $(this).removeAttr("selected");
        }
    });
});
$('.searchDropMenu').on('change', function () {
    catids = $(this).val();
    setinhtmlsession(catids);
});

function setinhtmlsession(catids) {
    if (!catids) {
        var catids1 = $('.searchDropMenu').val();
    } else {
        var catids1 = catids;
    }
    sessionStorage.setItem("searchcat", catids1);
}/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a : a(jQuery);
}(function (a) {
    function b(b) {
        var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q;
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r;
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top;
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
        }
    }

    function c() {
        f = null;
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
    }

    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks) for (var j = g.length; j;) {
        a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    }
    var k = a.event.special.mousewheel = {
        version: "3.1.12", setup: function setup() {
            if (this.addEventListener) for (var c = h.length; c;) {
                this.addEventListener(h[--c], b, !1);
            } else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
        }, teardown: function teardown() {
            if (this.removeEventListener) for (var c = h.length; c;) {
                this.removeEventListener(h[--c], b, !1);
            } else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
        }, getLineHeight: function getLineHeight(b) {
            var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        }, getPageHeight: function getPageHeight(b) {
            return a(b).height();
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    a.fn.extend({
        mousewheel: function mousewheel(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
        }, unmousewheel: function unmousewheel(a) {
            return this.unbind("mousewheel", a);
        }
    });
});
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a : a(jQuery);
}(function (a) {
    function b(b) {
        var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q;
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r;
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top;
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
        }
    }

    function c() {
        f = null;
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
    }

    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks) for (var j = g.length; j;) {
        a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    }
    var k = a.event.special.mousewheel = {
        version: "3.1.12", setup: function setup() {
            if (this.addEventListener) for (var c = h.length; c;) {
                this.addEventListener(h[--c], b, !1);
            } else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
        }, teardown: function teardown() {
            if (this.removeEventListener) for (var c = h.length; c;) {
                this.removeEventListener(h[--c], b, !1);
            } else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
        }, getLineHeight: function getLineHeight(b) {
            var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        }, getPageHeight: function getPageHeight(b) {
            return a(b).height();
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    a.fn.extend({
        mousewheel: function mousewheel(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
        }, unmousewheel: function unmousewheel(a) {
            return this.unbind("mousewheel", a);
        }
    });
});/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document);
}(function (e) {
    !function (t) {
        var o = "function" == typeof define && define.amd, a = "undefined" != typeof module && module.exports,
            n = "https:" == document.location.protocol ? "https:" : "http:",
            i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t();
    }(function () {
        var t, o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {scrollType: "stepless", scrollAmount: "auto"},
                keyboard: {enable: !0, scrollType: "stepless", scrollAmount: "auto"},
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0}
            }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = {
                init: function init(t) {
                    var t = e.extend(!0, {}, i, t), o = f.call(this);
                    if (t.live) {
                        var s = t.liveSelector || this.selector || n, c = e(s);
                        if ("off" === t.live) return void m(s);
                        l[s] = setTimeout(function () {
                            c.mCustomScrollbar(t), "once" === t.live && c.length && m(s);
                        }, 500);
                    } else m(s);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != _typeof(t.mouseWheel) && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function () {
                        var o = e(this);
                        if (!o.data(a)) {
                            o.data(a, {
                                idx: ++r,
                                opt: t,
                                scrollRatio: {y: null, x: null},
                                overflowed: null,
                                contentReset: {y: null, x: null},
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: o.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {size: {o: 0, n: 0}, img: {o: 0, n: 0}, change: {o: 0, n: 0}}
                            });
                            var n = o.data(a), i = n.opt, l = o.data("mcs-axis"), s = o.data("mcs-scrollbar-position"),
                                c = o.data("mcs-theme");
                            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o);
                        }
                    });
                }, update: function update(t, o) {
                    var n = t || f.call(this);
                    return e(n).each(function () {
                        var t = e(this);
                        if (t.data(a)) {
                            var n = t.data(a), i = n.opt, r = e("#mCSB_" + n.idx + "_container"),
                                l = e("#mCSB_" + n.idx),
                                s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                            if (!r.length) return;
                            n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
                            var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                            "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this);
                        }
                    });
                }, scrollTo: function scrollTo(t, o) {
                    if ("undefined" != typeof t && null != t) {
                        var n = f.call(this);
                        return e(n).each(function () {
                            var n = e(this);
                            if (n.data(a)) {
                                var i = n.data(a), r = i.opt, l = {
                                        trigger: "external",
                                        scrollInertia: r.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    }, s = e.extend(!0, {}, l, o), c = Y.call(this, t),
                                    d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                                c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function () {
                                    null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s));
                                }, s.timeout);
                            }
                        });
                    }
                }, stop: function stop() {
                    var t = f.call(this);
                    return e(t).each(function () {
                        var t = e(this);
                        t.data(a) && Q(t);
                    });
                }, disable: function disable(t) {
                    var o = f.call(this);
                    return e(o).each(function () {
                        var o = e(this);
                        if (o.data(a)) {
                            o.data(a);
                            N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]);
                        }
                    });
                }, destroy: function destroy() {
                    var t = f.call(this);
                    return e(t).each(function () {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a), r = i.opt, l = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"), c = e(".mCSB_" + i.idx + "_scrollbar");
                            r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]);
                        }
                    });
                }
            }, f = function f() {
                return "object" != _typeof(e(this)) || e(this).length < 1 ? n : this;
            }, h = function h(t) {
                var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    n = ["minimal", "minimal-dark"], i = ["minimal", "minimal-dark"], r = ["minimal", "minimal-dark"];
                t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition;
            }, m = function m(e) {
                l[e] && (clearTimeout(l[e]), $(l, e));
            }, p = function p(e) {
                return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y";
            }, g = function g(e) {
                return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless";
            }, v = function v() {
                var t = e(this), n = t.data(a), i = n.opt, r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                    l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                    u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = i.autoHideScrollbar ? " " + d[6] : "", h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
                i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
                var m = e("#mCSB_" + n.idx), p = e("#mCSB_" + n.idx + "_container");
                "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
                var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width());
            }, x = function x(t) {
                var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
                    return e(this).outerWidth(!0);
                }).get())], a = t.parent().width();
                return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%";
            }, _ = function _() {
                var t = e(this), o = t.data(a), n = o.opt, i = e("#mCSB_" + o.idx + "_container");
                if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                    i.css({width: "auto", "min-width": 0, "overflow-x": "scroll"});
                    var r = Math.ceil(i[0].scrollWidth);
                    3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                        width: r,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : i.css({
                        "overflow-x": "inherit",
                        position: "absolute"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: "relative"
                    }).unwrap();
                }
            }, w = function w() {
                var t = e(this), o = t.data(a), n = o.opt, i = e(".mCSB_" + o.idx + "_scrollbar:first"),
                    r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                    l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
                    s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
                n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]);
            }, S = function S() {
                var t = e(this), o = t.data(a), n = e("#mCSB_" + o.idx), i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
                    c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
                    d = s && c[1] < c[0] ? c[0] : c[1], u = s && c[3] < c[2] ? c[2] : c[3];
                r[0].css({
                    height: d,
                    "max-height": r[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({"line-height": c[0] + "px"}), r[1].css({
                    width: u,
                    "max-width": r[1].parent().width() - 10
                });
            }, b = function b() {
                var t = e(this), o = t.data(a), n = e("#mCSB_" + o.idx), i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
                    s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
                o.scrollRatio = {y: s[0], x: s[1]};
            }, C = function C(e, t, o) {
                var a = o ? d[0] + "_expanded" : "", n = e.closest(".mCSB_scrollTools");
                "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])));
            }, y = function y() {
                var t = e(this), o = t.data(a), n = e("#mCSB_" + o.idx), i = e("#mCSB_" + o.idx + "_container"),
                    r = null == o.overflowed ? i.height() : i.outerHeight(!1),
                    l = null == o.overflowed ? i.width() : i.outerWidth(!1), s = i[0].scrollHeight, c = i[0].scrollWidth;
                return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()];
            }, B = function B() {
                var t = e(this), o = t.data(a), n = o.opt, i = e("#mCSB_" + o.idx), r = e("#mCSB_" + o.idx + "_container"),
                    l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                    var s = dx = 0;
                    "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX");
                }
            }, T = function T() {
                function t() {
                    r = setTimeout(function () {
                        e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t();
                    }, 100);
                }

                var o = e(this), n = o.data(a), i = n.opt;
                if (!n.bindEvents) {
                    if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
                        var r;
                        t();
                    }
                    P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0;
                }
            }, k = function k() {
                var t = e(this), o = t.data(a), n = o.opt, i = a + "_" + o.idx, r = ".mCSB_" + o.idx + "_scrollbar",
                    l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                    s = e("#mCSB_" + o.idx + "_container");
                n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function () {
                    e(this).unbind("." + i);
                }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1);
            }, M = function M(t) {
                var o = e(this), n = o.data(a), i = n.opt, r = e("#mCSB_" + n.idx + "_container_wrapper"),
                    l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                    c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
                "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]);
            }, O = function O(t) {
                var o = t.type,
                    a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                    n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
                switch (o) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                            r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                        return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
                    default:
                        return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1];
                }
            }, I = function I() {
                function t(e, t, a, n) {
                    if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
                        s = (o[0].offsetLeft - t + n) * l.scrollRatio.x; else var i = "y",
                        s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                    G(r, s.toString(), {dir: i, drag: !0});
                }

                var o, n, i, r = e(this), l = r.data(a), d = l.opt, u = a + "_" + l.idx,
                    f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                    h = e("#mCSB_" + l.idx + "_container"), m = e("#" + f[0] + ",#" + f[1]),
                    p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
                    g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
                m.bind("contextmenu." + u, function (e) {
                    e.preventDefault();
                }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
                    if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
                        c = !0, s && (document.onselectstart = function () {
                            return !1;
                        }), L.call(h, !1), Q(r), o = e(this);
                        var a = o.offset(), l = O(t)[0] - a.top, u = O(t)[1] - a.left, f = o.height() + a.top,
                            m = o.width() + a.left;
                        f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar);
                    }
                }).bind("touchmove." + u, function (e) {
                    e.stopImmediatePropagation(), e.preventDefault();
                    var a = o.offset(), r = O(e)[0] - a.top, l = O(e)[1] - a.left;
                    t(n, i, r, l);
                }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (e) {
                    if (o) {
                        var a = o.offset(), r = O(e)[0] - a.top, l = O(e)[1] - a.left;
                        if (n === r && i === l) return;
                        t(n, i, r, l);
                    }
                }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function () {
                    o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0);
                });
            }, D = function D() {
                function o(e) {
                    if (!te(e) || c || O(e)[2]) return void (t = 0);
                    t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
                    var o = I.offset();
                    u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]];
                }

                function n(e) {
                    if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
                        g = K();
                        var t = M.offset(), o = O(e)[0] - t.top, a = O(e)[1] - t.left, n = "mcsLinearOut";
                        if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
                            r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
                        if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
                            h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                        r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0);
                    }
                }

                function i(e) {
                    if (!te(e) || c || O(e)[2]) return void (t = 0);
                    t = 1, e.stopImmediatePropagation(), Q(y), p = K();
                    var o = M.offset();
                    h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [];
                }

                function r(e) {
                    if (te(e) && !c && !O(e)[2]) {
                        d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K();
                        var t = M.offset(), o = O(e)[0] - t.top, a = O(e)[1] - t.left;
                        if (!(v - g > 30)) {
                            _ = 1e3 / (v - p);
                            var n = "mcsEaseOut", i = 2.5 > _, r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                            x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                            var u = [Math.abs(x[0]), Math.abs(x[1])];
                            _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                            var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                            w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                            var y = parseInt(T.contentTouchScroll) || 0;
                            w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
                        }
                    }
                }

                function l(e, t) {
                    var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3];
                }

                function s(e, t, o, a, n, i) {
                    e && G(y, e.toString(), {dur: t, scrollEasing: o, dir: a, overwrite: n, drag: i});
                }

                var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this), B = y.data(a), T = B.opt, k = a + "_" + B.idx,
                    M = e("#mCSB_" + B.idx), I = e("#mCSB_" + B.idx + "_container"),
                    D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")], E = [],
                    W = [], R = 0, L = "yx" === T.axis ? "none" : "all", z = [], P = I.find("iframe"),
                    H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
                    U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                I.bind(H[0], function (e) {
                    o(e);
                }).bind(H[1], function (e) {
                    n(e);
                }), M.bind(H[0], function (e) {
                    i(e);
                }).bind(H[2], function (e) {
                    r(e);
                }), P.length && P.each(function () {
                    e(this).bind("load", function () {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function (e) {
                            o(e), i(e);
                        }).bind(H[1], function (e) {
                            n(e);
                        }).bind(H[2], function (e) {
                            r(e);
                        });
                    });
                });
            }, E = function E() {
                function o() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0;
                }

                function n(e, t, o) {
                    d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null);
                }

                var i, r = e(this), l = r.data(a), s = l.opt, d = l.sequential, u = a + "_" + l.idx,
                    f = e("#mCSB_" + l.idx + "_container"), h = f.parent();
                f.bind("mousedown." + u, function () {
                    t || i || (i = 1, c = !0);
                }).add(document).bind("mousemove." + u, function (e) {
                    if (!t && i && o()) {
                        var a = f.offset(), r = O(e)[0] - a.top + f[0].offsetTop, c = O(e)[1] - a.left + f[0].offsetLeft;
                        r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)));
                    }
                }).bind("mouseup." + u + " dragend." + u, function () {
                    t || (i && (i = 0, n("off", null)), c = !1);
                });
            }, W = function W() {
                function t(t, a) {
                    if (Q(o), !z(o, t.target)) {
                        var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                            d = i.scrollInertia;
                        if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
                            f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft), p = c[1][0].offsetLeft,
                            g = c[1].parent().width() - c[1].width(),
                            v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX; else var u = "y",
                            f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop), p = c[0][0].offsetTop,
                            g = c[0].parent().height() - c[0].height(), v = t.deltaY || a;
                        "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), {
                            dir: u,
                            dur: d
                        }));
                    }
                }

                if (e(this).data(a)) {
                    var o = e(this), n = o.data(a), i = n.opt, r = a + "_" + n.idx, l = e("#mCSB_" + n.idx),
                        c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                        d = e("#mCSB_" + n.idx + "_container").find("iframe");
                    d.length && d.each(function () {
                        e(this).bind("load", function () {
                            A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (e, o) {
                                t(e, o);
                            });
                        });
                    }), l.bind("mousewheel." + r, function (e, o) {
                        t(e, o);
                    });
                }
            }, R = new Object(), A = function A(t) {
                var o = !1, a = !1, n = null;
                if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a];
                if (t) {
                    try {
                        var i = t.contentDocument || t.contentWindow.document;
                        n = i.body.innerHTML;
                    } catch (r) {
                    }
                    o = null !== n;
                } else {
                    try {
                        var i = top.document;
                        n = i.body.innerHTML;
                    } catch (r) {
                    }
                    o = null !== n;
                }
                return a !== !1 && (R[a] = o), o;
            }, L = function L(e) {
                var t = this.find("iframe");
                if (t.length) {
                    var o = e ? "auto" : "none";
                    t.css("pointer-events", o);
                }
            }, z = function z(t, o) {
                var n = o.nodeName.toLowerCase(), i = t.data(a).opt.mouseWheel.disableOver, r = ["select", "textarea"];
                return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"));
            }, P = function P() {
                var t, o = e(this), n = o.data(a), i = a + "_" + n.idx, r = e("#mCSB_" + n.idx + "_container"),
                    l = r.parent(), s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
                s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function (o) {
                    c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1);
                }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function () {
                    c = !1;
                }).bind("click." + i, function (a) {
                    if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                        Q(o);
                        var i = e(this), s = i.find(".mCSB_dragger");
                        if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!n.overflowed[1]) return;
                            var c = "x", u = a.pageX > s.offset().left ? -1 : 1,
                                f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width());
                        } else {
                            if (!n.overflowed[0]) return;
                            var c = "y", u = a.pageY > s.offset().top ? -1 : 1,
                                f = Math.abs(r[0].offsetTop) - u * (.9 * l.height());
                        }
                        G(o, f.toString(), {dir: c, scrollEasing: "mcsEaseInOut"});
                    }
                });
            }, H = function H() {
                var t = e(this), o = t.data(a), n = o.opt, i = a + "_" + o.idx, r = e("#mCSB_" + o.idx + "_container"),
                    l = r.parent();
                r.bind("focusin." + i, function () {
                    var o = e(document.activeElement), a = r.find(".mCustomScrollBox").length, i = 0;
                    o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function () {
                        var e = [ae(o)[0], ae(o)[1]], a = [r[0].offsetTop, r[0].offsetLeft],
                            s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
                            c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                        "x" === n.axis || s[0] || G(t, e[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: i
                        }), "y" === n.axis || s[1] || G(t, e[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: i
                        });
                    }, t[0]._focusTimer));
                });
            }, U = function U() {
                var t = e(this), o = t.data(a), n = a + "_" + o.idx, i = e("#mCSB_" + o.idx + "_container").parent();
                i.bind("scroll." + n, function () {
                    0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden");
                });
            }, F = function F() {
                var t = e(this), o = t.data(a), n = o.opt, i = o.sequential, r = a + "_" + o.idx,
                    l = ".mCSB_" + o.idx + "_scrollbar", s = e(l + ">a");
                s.bind("contextmenu." + r, function (e) {
                    e.preventDefault();
                }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (a) {
                    function r(e, o) {
                        i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o);
                    }

                    if (a.preventDefault(), ee(a)) {
                        var l = e(this).attr("class");
                        switch (i.type = n.scrollButtons.scrollType, a.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === i.type) return;
                                c = !0, o.tweenRunning = !1, r("on", l);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === i.type) return;
                                c = !1, i.dir && r("off", l);
                                break;
                            case "click":
                                if ("stepped" !== i.type || o.tweenRunning) return;
                                r("on", l);
                        }
                    }
                });
            }, q = function q() {
                function t(t) {
                    function a(e, t) {
                        r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t);
                    }

                    switch (t.type) {
                        case "blur":
                            n.tweenRunning && r.dir && a("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var l = t.keyCode ? t.keyCode : t.which, s = "on";
                            if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                                if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                                "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l));
                            } else if (33 === l || 34 === l) {
                                if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                    Q(o);
                                    var f = 34 === l ? -1 : 1;
                                    if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                        m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width()); else var h = "y",
                                        m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                                    G(o, m.toString(), {dir: h, scrollEasing: "mcsEaseInOut"});
                                }
                            } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0; else var h = "y",
                                    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                G(o, m.toString(), {dir: h, scrollEasing: "mcsEaseInOut"});
                            }
                    }
                }

                var o = e(this), n = o.data(a), i = n.opt, r = n.sequential, l = a + "_" + n.idx, s = e("#mCSB_" + n.idx),
                    c = e("#mCSB_" + n.idx + "_container"), d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']", f = c.find("iframe"),
                    h = ["blur." + l + " keydown." + l + " keyup." + l];
                f.length && f.each(function () {
                    e(this).bind("load", function () {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {
                            t(e);
                        });
                    });
                }), s.attr("tabindex", "0").bind(h[0], function (e) {
                    t(e);
                });
            }, j = function j(t, o, n, i, r) {
                function l(e) {
                    u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                    var o = "stepped" !== f.type, a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60, n = e ? o ? 7.5 : 40 : 2.5,
                        s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
                        v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
                        x = "auto" !== f.scrollAmount ? v : m,
                        _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear", w = !!e;
                    return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), {
                        dir: f.dir[0],
                        scrollEasing: _,
                        dur: a,
                        onComplete: w
                    }), e ? void (f.dir = !1) : (clearTimeout(f.step), void (f.step = setTimeout(function () {
                        l();
                    }, a)));
                }

                function s() {
                    clearTimeout(f.step), $(f, "step"), Q(t);
                }

                var c = t.data(a), u = c.opt, f = c.sequential, h = e("#mCSB_" + c.idx + "_container"),
                    m = "stepped" === f.type, p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                switch (o) {
                    case "on":
                        if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return;
                        l(m);
                        break;
                    case "off":
                        s(), (m || c.tweenRunning && f.dir) && l(!0);
                }
            }, Y = function Y(t) {
                var o = e(this).data(a).opt, n = [];
                return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n;
            }, X = function X(t, o) {
                if (null != t && "undefined" != typeof t) {
                    var n = e(this), i = n.data(a), r = i.opt, l = e("#mCSB_" + i.idx + "_container"), s = l.parent(),
                        c = _typeof(t);
                    o || (o = "x" === r.axis ? "x" : "y");
                    var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
                        f = "x" === o ? l[0].offsetLeft : l[0].offsetTop, h = "x" === o ? "left" : "top";
                    switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var m = t.jquery ? t : e(t);
                            if (!m.length) return;
                            return "x" === o ? ae(m)[1] : ae(m)[0];
                        case "string":
                        case "number":
                            if (oe(t)) return Math.abs(t);
                            if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                            if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                            if (-1 !== t.indexOf("+=")) {
                                var p = f + parseInt(t.split("+=")[1]);
                                return p >= 0 ? 0 : Math.abs(p);
                            }
                            if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                            if ("top" === t || "left" === t) return 0;
                            if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                            if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                            if ("first" === t || "last" === t) {
                                var m = l.find(":" + t);
                                return "x" === o ? ae(m)[1] : ae(m)[0];
                            }
                            return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]));
                    }
                }
            }, N = function N(t) {
                function o() {
                    return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function () {
                        return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function () {
                            n(this);
                        }));
                    }, c.advanced.autoUpdateTimeout));
                }

                function n(t) {
                    function o(e, t) {
                        return function () {
                            return t.apply(e, arguments);
                        };
                    }

                    function a() {
                        this.onload = null, e(t).addClass(d[2]), r(2);
                    }

                    if (e(t).hasClass(d[2])) return void r();
                    var n = new Image();
                    n.onload = o(n, a), n.src = t.src;
                }

                function i() {
                    c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                    var e = 0, t = f.find(c.advanced.updateOnSelectorChange);
                    return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
                        e += this.offsetHeight + this.offsetWidth;
                    }), e;
                }

                function r(e) {
                    clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
                }

                var l = e(this), s = l.data(a), c = s.opt, f = e("#mCSB_" + s.idx + "_container");
                return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o();
            }, V = function V(e, t, o) {
                return Math.round(e / t) * t - o;
            }, Q = function Q(t) {
                var o = t.data(a),
                    n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
                n.each(function () {
                    Z.call(this);
                });
            }, G = function G(t, o, n) {
                function i(e) {
                    return s && c.callbacks[e] && "function" == typeof c.callbacks[e];
                }

                function r() {
                    return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w];
                }

                function l() {
                    var e = [h[0].offsetTop, h[0].offsetLeft], o = [x[0].offsetTop, x[0].offsetLeft],
                        a = [h.outerHeight(!1), h.outerWidth(!1)], i = [f.height(), f.width()];
                    t[0].mcs = {
                        content: h,
                        top: e[0],
                        left: e[1],
                        draggerTop: o[0],
                        draggerLeft: o[1],
                        topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                        leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                        direction: n.dir
                    };
                }

                var s = t.data(a), c = s.opt, d = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    }, n = e.extend(d, n), u = [n.dur, n.drag ? 0 : n.dur], f = e("#mCSB_" + s.idx),
                    h = e("#mCSB_" + s.idx + "_container"), m = h.parent(),
                    p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                    if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
                        var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                        o = V(o, v, c.snapOffset);
                    }
                    switch (n.dir) {
                        case "x":
                            var x = e("#mCSB_" + s.idx + "_dragger_horizontal"), _ = "left", w = h[0].offsetLeft,
                                S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.x], y = p[1], B = g[1],
                                T = y > 0 ? y / s.scrollRatio.x : 0, k = B > 0 ? B / s.scrollRatio.x : 0;
                            break;
                        case "y":
                            var x = e("#mCSB_" + s.idx + "_dragger_vertical"), _ = "top", w = h[0].offsetTop,
                                S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.y], y = p[0], B = g[0],
                                T = y > 0 ? y / s.scrollRatio.y : 0, k = B > 0 ? B / s.scrollRatio.y : 0;
                    }
                    b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                        onStart: function onStart() {
                            n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r());
                        }, onUpdate: function onUpdate() {
                            n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]));
                        }, onComplete: function onComplete() {
                            if (n.callbacks && n.onComplete) {
                                "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                                var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function () {
                                    i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide");
                                }, e);
                            }
                        }
                    });
                }
            }, J = function J(e, t, o, a, n, i, r) {
                function l() {
                    S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call());
                }

                function s() {
                    a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call();
                }

                function c() {
                    f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
                        return s(), setTimeout(e, .01);
                    }, S.id = h(l);
                }

                function d() {
                    null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null);
                }

                function u(e, t, o, a, n) {
                    switch (n) {
                        case "linear":
                        case "mcsLinear":
                            return o * e / a + t;
                        case "mcsLinearOut":
                            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= a, e--, -o * (e * e * e * e - 1) + t;
                        case "easeOutStrong":
                            return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var i = (e /= a) * e, r = i * e;
                            return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e);
                    }
                }

                e._mTween || (e._mTween = {top: {}, left: {}});
                var f, h, r = r || {}, m = r.onStart || function () {
                }, p = r.onUpdate || function () {
                }, g = r.onComplete || function () {
                }, v = K(), x = 0, _ = e.offsetTop, w = e.style, S = e._mTween[t];
                "left" === t && (_ = e.offsetLeft);
                var b = o - _;
                S.stop = 0, "none" !== i && d(), c();
            }, K = function K() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
            }, Z = function Z() {
                var e = this;
                e._mTween || (e._mTween = {top: {}, left: {}});
                for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                    var a = t[o];
                    e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1);
                }
            }, $ = function $(e, t) {
                try {
                    delete e[t];
                } catch (o) {
                    e[t] = null;
                }
            }, ee = function ee(e) {
                return !(e.which && 1 !== e.which);
            }, te = function te(e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t);
            }, oe = function oe(e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            }, ae = function ae(e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left];
            }, ne = function ne() {
                function e() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) {
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    }
                    return null;
                }

                var t = e();
                return t ? document[t] : !1;
            };
        e.fn[o] = function (t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(t) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
        }, e[o] = function (t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(t) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
        }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function () {
            e(n)[o](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function (t) {
                    var o, a, n = e(t), i = n.parents(".mCSB_container");
                    if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1);
                }, mcsInSight: e.expr[":"].mcsInSight || function (t, o, a) {
                    var n, i, r, l, s = e(t), c = s.parents(".mCSB_container"),
                        d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                    if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0;
                }, mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
                    var o = e(t).data(a);
                    if (o) return o.overflowed[0] || o.overflowed[1];
                }
            });
        });
    });
});
"use strict";// Define your library strictly...
$(function () {
    $('.menu-ham').on('click', function () {
        $('.menu-new').animate({left: '0px'}, 100);
    });
    $('.close-menu-new').on('click', function () {
        $('.menu-new').animate({left: '-260px'}, 100);
        $('.closeNav').animate({left: '-260px'}, 100);
    });
    $('[data-toggle="popover"]').popover();
    $('.search-field').on('change', function () {
        var x = $('.search-field').val();
        keyword(x);
    });
    $('.search-field').on('keyup', function () {
        var x = $('.search-field').val();
        keyword(x);
    });
    $(".toggle-password").on('click', function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    $('#password, #confirm_password').on('keyup', function () {
        if ($('#password').val() == $('#confirm_password').val()) {
            $('#message').html('Password Matched').css('color', 'green').show();
        } else $('#message').html('Password Not Matching').css('color', 'red').show();
    });
    $('#btn_reset').on('click', function () {
        document.getElementById("form1").reset();
        $('#message').hide();
    });
    $('.changed_language').on('change', function () {
        var lang = $(this).val();
        $.ajax({
            url: baseUrl + '/changelang', type: 'GET', data: {lang: lang}, success: function success(data) {
                location.reload();
            }
        });
    });
});
var sticky = new Sticky('[data-sticky]');
sticky.destroy('[data-sticky]');
$('.currency').on("change", function () {
    var d = $(this).val();
    $.ajax({
        method: 'GET', url: baseUrl + '/change-currency/' + d, success: function success(data) {
            window.location.reload();
        }
    });
});

function val() {
    d = document.getElementById("currency").value;
    $.ajax({
        method: 'GET', url: baseUrl + '/change-currency/' + d, success: function success(data) {
            window.location.reload();
        }
    });
}

function val2() {
    d = document.getElementById("currencySmall").value;
    $.ajax({
        method: 'GET', url: baseUrl + '/change-currency/' + d, success: function success(data) {
            window.location.reload();
        }
    });
}

function keyword(x) {
    var test = x;// Check browser support
    if (typeof Storage !== "undefined") {// Store
        sessionStorage.setItem("searchItem", test);
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function catPage(url) {
    $("#dropdown ul").hide();
    window.location.href = url;
}

(function ($) {
    $('#starRating').starRating({
        callback: function callback(value) {
            $('.getStar').val(+value);
        }
    });
})(jQuery);// Hot Deal Countdown
var d = new Date();
var datestring = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
if ($('.timing-wrapper').length) {
    $('.timing-wrapper').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        var $this1 = $(this), finalDate1 = $(this).data('startat');
        if (datestring >= finalDate1) {
            $this.countdown(finalDate, function (event) {
                var $this = $(this).html(event.strftime('' + '<div class="box-wrapper"><div class="date box"> <span class="key">%D</span> <span class="value">DAYS</span> </div> </div> ' + '<div class="box-wrapper"><div class="hour box"> <span class="key">%H</span> <span class="value">HRS</span> </div> </div> ' + '<div class="box-wrapper"><div class="minutes box"> <span class="key">%M</span> <span class="value">MINS</span> </div> </div> ' + '<div class="box-wrapper"><div class="seconds box"> <span class="key">%S</span> <span class="value">SEC</span> </div> </div> '));
            });
        }
    });
}

function gotourl(url) {
    window.location.href = url;
}

var hidWidth;
var scrollBarWidths = 40;
var widthOfList = function widthOfList() {
    var itemsWidth = 0;
    $('.list li').each(function () {
        var itemWidth = $(this).outerWidth();
        itemsWidth += itemWidth;
    });
    return itemsWidth;
};
var widthOfHidden = function widthOfHidden() {
    return $('.wrapper').outerWidth() - widthOfList() - getLeftPosi() - scrollBarWidths;
};
var reAdjust = function reAdjust() {
    if ($('.wrapper').outerWidth() < widthOfList()) {
        $('.scroller-right').show();
    } else {
        $('.scroller-right').hide();
    }
};
reAdjust();
$(window).on('resize', function (e) {
    reAdjust();
});
$('.scroller-right').on('click', function () {
    $('.scroller-left').fadeIn('slow');
    $('.scroller-right').fadeOut('slow');
    $('.list').animate({left: "+=" + widthOfHidden() + "px"}, 'slow', function () {
    });
});
$('.scroller-left').on('click', function () {
    $('.scroller-right').fadeIn('slow');
    $('.scroller-left').fadeOut('slow');
    $('.list').animate({left: "-=" + getLeftPosi() + "px"}, 'slow', function () {
    });
});
setTimeout(function () {
    $('.hideAlert').slideUp();
}, 2500);
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
$('.dropdown-cart-one').on('click', function () {
    $('.cart-checkout').removeAttr('style');
});

function logout() {
    $(".logout-form").submit();
    event.preventDefault();
}

$(function () {
    $('.toggle-menu').on('click', function () {
        $('.exo-menu').fadeIn().toggleClass('display');
    });
});
$(function () {
    $(".mega-menu").on('hover', function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
        $(this).toggleClass('open');
    }, function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
        $(this).toggleClass('open');
    });
    $("form").on('submit', function () {
        Pace.restart();
    });
    $("a").on('click', function () {
        Pace.restart();
    });
});
$('.categoryrec').on('click', function () {
    var id = $(this).data('id');
    $('#childOpen' + id).toggle('fast');
});
$('.childrec').on('click', function () {
    var id = $(this).data('id');
    $('#childcollapseExample' + id).toggle('fast');
});
if (rightclick == '1') {
    $(function () {
        $(document).bind("contextmenu", function (e) {
            return false;
        });
    });
}
if (inspect == '1') {
    document.onkeydown = function (e) {
        if (e.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    };
}
(function () {
    'use strict';
    window.addEventListener('load', function () {// Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');// Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
$(window).on('load', function () {
    $('.front-preloader').fadeOut('slow');
});
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({theme: "minimal"});
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
$(document).on('click', '.c_icon_plus', function () {
    var icon = $(this).children().html('');
    $(this).removeClass('c_icon_plus').addClass('c_icon_minus');
    icon.removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
});
$(document).on('click', '.c_icon_minus', function () {
    var icon = $(this).children().html('');
    $(this).removeClass('c_icon_minus').addClass('c_icon_plus');
    icon.removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
});
