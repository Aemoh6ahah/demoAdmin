/*! For license information please see esdk-obs-browserjs-without-polyfill.3.22.3.min.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ObsClient = t())
    : (e.ObsClient = t());
})(self, function () {
  return (function () {
    var e,
      t,
      r = {
        2990: function (e, t, r) {
          e.exports = r(7408);
        },
        7648: function (e, t, r) {
          "use strict";
          var o = r(610),
            n = r(2334),
            a = r(4942),
            i = r(3210),
            s = r(5755),
            c = r(3741),
            l = r(9912),
            u = r(5080),
            p = r(1306),
            d = r(5092);
          e.exports = function (e) {
            return new Promise(function (t, r) {
              var h,
                m = e.data,
                f = e.headers,
                y = e.responseType;
              function g() {
                e.cancelToken && e.cancelToken.unsubscribe(h),
                  e.signal && e.signal.removeEventListener("abort", h);
              }
              o.isFormData(m) && delete f["Content-Type"];
              var A = new XMLHttpRequest();
              if (e.auth) {
                var x = e.auth.username || "",
                  b = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                f.Authorization = "Basic " + btoa(x + ":" + b);
              }
              var w = s(e.baseURL, e.url);
              function k() {
                if (A) {
                  var o =
                      "getAllResponseHeaders" in A
                        ? c(A.getAllResponseHeaders())
                        : null,
                    a = {
                      data:
                        y && "text" !== y && "json" !== y
                          ? A.response
                          : A.responseText,
                      status: A.status,
                      statusText: A.statusText,
                      headers: o,
                      config: e,
                      request: A,
                    };
                  n(
                    function (e) {
                      t(e), g();
                    },
                    function (e) {
                      r(e), g();
                    },
                    a
                  ),
                    (A = null);
                }
              }
              if (
                (A.open(
                  e.method.toUpperCase(),
                  i(w, e.params, e.paramsSerializer),
                  !0
                ),
                (A.timeout = e.timeout),
                "onloadend" in A
                  ? (A.onloadend = k)
                  : (A.onreadystatechange = function () {
                      A &&
                        4 === A.readyState &&
                        (0 !== A.status ||
                          (A.responseURL &&
                            0 === A.responseURL.indexOf("file:"))) &&
                        setTimeout(k);
                    }),
                (A.onabort = function () {
                  A &&
                    (r(u("Request aborted", e, "ECONNABORTED", A)), (A = null));
                }),
                (A.onerror = function () {
                  r(u("Network Error", e, null, A)), (A = null);
                }),
                (A.ontimeout = function () {
                  var t = e.timeout
                      ? "timeout of " + e.timeout + "ms exceeded"
                      : "timeout exceeded",
                    o = e.transitional || p;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    r(
                      u(
                        t,
                        e,
                        o.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                        A
                      )
                    ),
                    (A = null);
                }),
                o.isStandardBrowserEnv())
              ) {
                var P =
                  (e.withCredentials || l(w)) && e.xsrfCookieName
                    ? a.read(e.xsrfCookieName)
                    : void 0;
                P && (f[e.xsrfHeaderName] = P);
              }
              "setRequestHeader" in A &&
                o.forEach(f, function (e, t) {
                  void 0 === m && "content-type" === t.toLowerCase()
                    ? delete f[t]
                    : A.setRequestHeader(t, e);
                }),
                o.isUndefined(e.withCredentials) ||
                  (A.withCredentials = !!e.withCredentials),
                y && "json" !== y && (A.responseType = e.responseType),
                "function" == typeof e.onDownloadProgress &&
                  A.addEventListener("progress", e.onDownloadProgress),
                "function" == typeof e.onUploadProgress &&
                  A.upload &&
                  A.upload.addEventListener("progress", e.onUploadProgress),
                (e.cancelToken || e.signal) &&
                  ((h = function (e) {
                    A &&
                      (r(!e || (e && e.type) ? new d("canceled") : e),
                      A.abort(),
                      (A = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(h),
                  e.signal &&
                    (e.signal.aborted
                      ? h()
                      : e.signal.addEventListener("abort", h))),
                m || (m = null),
                A.send(m);
            });
          };
        },
        7408: function (e, t, r) {
          "use strict";
          var o = r(610),
            n = r(3824),
            a = r(1030),
            i = r(8261),
            s = (function e(t) {
              var r = new a(t),
                s = n(a.prototype.request, r);
              return (
                o.extend(s, a.prototype, r),
                o.extend(s, r),
                (s.create = function (r) {
                  return e(i(t, r));
                }),
                s
              );
            })(r(479));
          (s.Axios = a),
            (s.Cancel = r(5092)),
            (s.CancelToken = r(1667)),
            (s.isCancel = r(2969)),
            (s.VERSION = r(9815).version),
            (s.all = function (e) {
              return Promise.all(e);
            }),
            (s.spread = r(8629)),
            (s.isAxiosError = r(2101)),
            (e.exports = s),
            (e.exports.default = s);
        },
        5092: function (e) {
          "use strict";
          function t(e) {
            this.message = e;
          }
          (t.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
          }),
            (t.prototype.__CANCEL__ = !0),
            (e.exports = t);
        },
        1667: function (e, t, r) {
          "use strict";
          var o = r(5092);
          function n(e) {
            if ("function" != typeof e)
              throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function (e) {
              t = e;
            });
            var r = this;
            this.promise.then(function (e) {
              if (r._listeners) {
                var t,
                  o = r._listeners.length;
                for (t = 0; t < o; t++) r._listeners[t](e);
                r._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  o = new Promise(function (e) {
                    r.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (o.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  o
                );
              }),
              e(function (e) {
                r.reason || ((r.reason = new o(e)), t(r.reason));
              });
          }
          (n.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
          }),
            (n.prototype.subscribe = function (e) {
              this.reason
                ? e(this.reason)
                : this._listeners
                ? this._listeners.push(e)
                : (this._listeners = [e]);
            }),
            (n.prototype.unsubscribe = function (e) {
              if (this._listeners) {
                var t = this._listeners.indexOf(e);
                -1 !== t && this._listeners.splice(t, 1);
              }
            }),
            (n.source = function () {
              var e;
              return {
                token: new n(function (t) {
                  e = t;
                }),
                cancel: e,
              };
            }),
            (e.exports = n);
        },
        2969: function (e) {
          "use strict";
          e.exports = function (e) {
            return !(!e || !e.__CANCEL__);
          };
        },
        1030: function (e, t, r) {
          "use strict";
          var o = r(610),
            n = r(3210),
            a = r(3952),
            i = r(7544),
            s = r(8261),
            c = r(6660),
            l = c.validators;
          function u(e) {
            (this.defaults = e),
              (this.interceptors = { request: new a(), response: new a() });
          }
          (u.prototype.request = function (e, t) {
            "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
              (t = s(this.defaults, t)).method
                ? (t.method = t.method.toLowerCase())
                : this.defaults.method
                ? (t.method = this.defaults.method.toLowerCase())
                : (t.method = "get");
            var r = t.transitional;
            void 0 !== r &&
              c.assertOptions(
                r,
                {
                  silentJSONParsing: l.transitional(l.boolean),
                  forcedJSONParsing: l.transitional(l.boolean),
                  clarifyTimeoutError: l.transitional(l.boolean),
                },
                !1
              );
            var o = [],
              n = !0;
            this.interceptors.request.forEach(function (e) {
              ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
                ((n = n && e.synchronous), o.unshift(e.fulfilled, e.rejected));
            });
            var a,
              u = [];
            if (
              (this.interceptors.response.forEach(function (e) {
                u.push(e.fulfilled, e.rejected);
              }),
              !n)
            ) {
              var p = [i, void 0];
              for (
                Array.prototype.unshift.apply(p, o),
                  p = p.concat(u),
                  a = Promise.resolve(t);
                p.length;

              )
                a = a.then(p.shift(), p.shift());
              return a;
            }
            for (var d = t; o.length; ) {
              var h = o.shift(),
                m = o.shift();
              try {
                d = h(d);
              } catch (e) {
                m(e);
                break;
              }
            }
            try {
              a = i(d);
            } catch (e) {
              return Promise.reject(e);
            }
            for (; u.length; ) a = a.then(u.shift(), u.shift());
            return a;
          }),
            (u.prototype.getUri = function (e) {
              return (
                (e = s(this.defaults, e)),
                n(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
              );
            }),
            o.forEach(["delete", "get", "head", "options"], function (e) {
              u.prototype[e] = function (t, r) {
                return this.request(
                  s(r || {}, { method: e, url: t, data: (r || {}).data })
                );
              };
            }),
            o.forEach(["post", "put", "patch"], function (e) {
              u.prototype[e] = function (t, r, o) {
                return this.request(s(o || {}, { method: e, url: t, data: r }));
              };
            }),
            (e.exports = u);
        },
        3952: function (e, t, r) {
          "use strict";
          var o = r(610);
          function n() {
            this.handlers = [];
          }
          (n.prototype.use = function (e, t, r) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!r && r.synchronous,
                runWhen: r ? r.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }),
            (n.prototype.eject = function (e) {
              this.handlers[e] && (this.handlers[e] = null);
            }),
            (n.prototype.forEach = function (e) {
              o.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }),
            (e.exports = n);
        },
        5755: function (e, t, r) {
          "use strict";
          var o = r(7204),
            n = r(117);
          e.exports = function (e, t) {
            return e && !o(t) ? n(e, t) : t;
          };
        },
        5080: function (e, t, r) {
          "use strict";
          var o = r(4980);
          e.exports = function (e, t, r, n, a) {
            var i = new Error(e);
            return o(i, t, r, n, a);
          };
        },
        7544: function (e, t, r) {
          "use strict";
          var o = r(610),
            n = r(8622),
            a = r(2969),
            i = r(479),
            s = r(5092);
          function c(e) {
            if (
              (e.cancelToken && e.cancelToken.throwIfRequested(),
              e.signal && e.signal.aborted)
            )
              throw new s("canceled");
          }
          e.exports = function (e) {
            return (
              c(e),
              (e.headers = e.headers || {}),
              (e.data = n.call(e, e.data, e.headers, e.transformRequest)),
              (e.headers = o.merge(
                e.headers.common || {},
                e.headers[e.method] || {},
                e.headers
              )),
              o.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                function (t) {
                  delete e.headers[t];
                }
              ),
              (e.adapter || i.adapter)(e).then(
                function (t) {
                  return (
                    c(e),
                    (t.data = n.call(
                      e,
                      t.data,
                      t.headers,
                      e.transformResponse
                    )),
                    t
                  );
                },
                function (t) {
                  return (
                    a(t) ||
                      (c(e),
                      t &&
                        t.response &&
                        (t.response.data = n.call(
                          e,
                          t.response.data,
                          t.response.headers,
                          e.transformResponse
                        ))),
                    Promise.reject(t)
                  );
                }
              )
            );
          };
        },
        4980: function (e) {
          "use strict";
          e.exports = function (e, t, r, o, n) {
            return (
              (e.config = t),
              r && (e.code = r),
              (e.request = o),
              (e.response = n),
              (e.isAxiosError = !0),
              (e.toJSON = function () {
                return {
                  message: this.message,
                  name: this.name,
                  description: this.description,
                  number: this.number,
                  fileName: this.fileName,
                  lineNumber: this.lineNumber,
                  columnNumber: this.columnNumber,
                  stack: this.stack,
                  config: this.config,
                  code: this.code,
                  status:
                    this.response && this.response.status
                      ? this.response.status
                      : null,
                };
              }),
              e
            );
          };
        },
        8261: function (e, t, r) {
          "use strict";
          var o = r(610);
          e.exports = function (e, t) {
            t = t || {};
            var r = {};
            function n(e, t) {
              return o.isPlainObject(e) && o.isPlainObject(t)
                ? o.merge(e, t)
                : o.isPlainObject(t)
                ? o.merge({}, t)
                : o.isArray(t)
                ? t.slice()
                : t;
            }
            function a(r) {
              return o.isUndefined(t[r])
                ? o.isUndefined(e[r])
                  ? void 0
                  : n(void 0, e[r])
                : n(e[r], t[r]);
            }
            function i(e) {
              if (!o.isUndefined(t[e])) return n(void 0, t[e]);
            }
            function s(r) {
              return o.isUndefined(t[r])
                ? o.isUndefined(e[r])
                  ? void 0
                  : n(void 0, e[r])
                : n(void 0, t[r]);
            }
            function c(r) {
              return r in t ? n(e[r], t[r]) : r in e ? n(void 0, e[r]) : void 0;
            }
            var l = {
              url: i,
              method: i,
              data: i,
              baseURL: s,
              transformRequest: s,
              transformResponse: s,
              paramsSerializer: s,
              timeout: s,
              timeoutMessage: s,
              withCredentials: s,
              adapter: s,
              responseType: s,
              xsrfCookieName: s,
              xsrfHeaderName: s,
              onUploadProgress: s,
              onDownloadProgress: s,
              decompress: s,
              maxContentLength: s,
              maxBodyLength: s,
              transport: s,
              httpAgent: s,
              httpsAgent: s,
              cancelToken: s,
              socketPath: s,
              responseEncoding: s,
              validateStatus: c,
            };
            return (
              o.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
                var t = l[e] || a,
                  n = t(e);
                (o.isUndefined(n) && t !== c) || (r[e] = n);
              }),
              r
            );
          };
        },
        2334: function (e, t, r) {
          "use strict";
          var o = r(5080);
          e.exports = function (e, t, r) {
            var n = r.config.validateStatus;
            r.status && n && !n(r.status)
              ? t(
                  o(
                    "Request failed with status code " + r.status,
                    r.config,
                    null,
                    r.request,
                    r
                  )
                )
              : e(r);
          };
        },
        8622: function (e, t, r) {
          "use strict";
          var o = r(610),
            n = r(479);
          e.exports = function (e, t, r) {
            var a = this || n;
            return (
              o.forEach(r, function (r) {
                e = r.call(a, e, t);
              }),
              e
            );
          };
        },
        479: function (e, t, r) {
          "use strict";
          var o = r(610),
            n = r(928),
            a = r(4980),
            i = r(1306),
            s = { "Content-Type": "application/x-www-form-urlencoded" };
          function c(e, t) {
            !o.isUndefined(e) &&
              o.isUndefined(e["Content-Type"]) &&
              (e["Content-Type"] = t);
          }
          var l,
            u = {
              transitional: i,
              adapter:
                (("undefined" != typeof XMLHttpRequest ||
                  ("undefined" != typeof process &&
                    "[object process]" ===
                      Object.prototype.toString.call(process))) &&
                  (l = r(7648)),
                l),
              transformRequest: [
                function (e, t) {
                  return (
                    n(t, "Accept"),
                    n(t, "Content-Type"),
                    o.isFormData(e) ||
                    o.isArrayBuffer(e) ||
                    o.isBuffer(e) ||
                    o.isStream(e) ||
                    o.isFile(e) ||
                    o.isBlob(e)
                      ? e
                      : o.isArrayBufferView(e)
                      ? e.buffer
                      : o.isURLSearchParams(e)
                      ? (c(
                          t,
                          "application/x-www-form-urlencoded;charset=utf-8"
                        ),
                        e.toString())
                      : o.isObject(e) ||
                        (t && "application/json" === t["Content-Type"])
                      ? (c(t, "application/json"),
                        (function (e, t, r) {
                          if (o.isString(e))
                            try {
                              return (0, JSON.parse)(e), o.trim(e);
                            } catch (e) {
                              if ("SyntaxError" !== e.name) throw e;
                            }
                          return (0, JSON.stringify)(e);
                        })(e))
                      : e
                  );
                },
              ],
              transformResponse: [
                function (e) {
                  var t = this.transitional || u.transitional,
                    r = t && t.silentJSONParsing,
                    n = t && t.forcedJSONParsing,
                    i = !r && "json" === this.responseType;
                  if (i || (n && o.isString(e) && e.length))
                    try {
                      return JSON.parse(e);
                    } catch (e) {
                      if (i) {
                        if ("SyntaxError" === e.name)
                          throw a(e, this, "E_JSON_PARSE");
                        throw e;
                      }
                    }
                  return e;
                },
              ],
              timeout: 0,
              xsrfCookieName: "XSRF-TOKEN",
              xsrfHeaderName: "X-XSRF-TOKEN",
              maxContentLength: -1,
              maxBodyLength: -1,
              validateStatus: function (e) {
                return e >= 200 && e < 300;
              },
              headers: {
                common: { Accept: "application/json, text/plain, */*" },
              },
            };
          o.forEach(["delete", "get", "head"], function (e) {
            u.headers[e] = {};
          }),
            o.forEach(["post", "put", "patch"], function (e) {
              u.headers[e] = o.merge(s);
            }),
            (e.exports = u);
        },
        1306: function (e) {
          "use strict";
          e.exports = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          };
        },
        9815: function (e) {
          e.exports = { version: "0.26.1" };
        },
        3824: function (e) {
          "use strict";
          e.exports = function (e, t) {
            return function () {
              for (
                var r = new Array(arguments.length), o = 0;
                o < r.length;
                o++
              )
                r[o] = arguments[o];
              return e.apply(t, r);
            };
          };
        },
        3210: function (e, t, r) {
          "use strict";
          var o = r(610);
          function n(e) {
            return encodeURIComponent(e)
              .replace(/%3A/gi, ":")
              .replace(/%24/g, "$")
              .replace(/%2C/gi, ",")
              .replace(/%20/g, "+")
              .replace(/%5B/gi, "[")
              .replace(/%5D/gi, "]");
          }
          e.exports = function (e, t, r) {
            if (!t) return e;
            var a;
            if (r) a = r(t);
            else if (o.isURLSearchParams(t)) a = t.toString();
            else {
              var i = [];
              o.forEach(t, function (e, t) {
                null != e &&
                  (o.isArray(e) ? (t += "[]") : (e = [e]),
                  o.forEach(e, function (e) {
                    o.isDate(e)
                      ? (e = e.toISOString())
                      : o.isObject(e) && (e = JSON.stringify(e)),
                      i.push(n(t) + "=" + n(e));
                  }));
              }),
                (a = i.join("&"));
            }
            if (a) {
              var s = e.indexOf("#");
              -1 !== s && (e = e.slice(0, s)),
                (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
            }
            return e;
          };
        },
        117: function (e) {
          "use strict";
          e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
          };
        },
        4942: function (e, t, r) {
          "use strict";
          var o = r(610);
          e.exports = o.isStandardBrowserEnv()
            ? {
                write: function (e, t, r, n, a, i) {
                  var s = [];
                  s.push(e + "=" + encodeURIComponent(t)),
                    o.isNumber(r) &&
                      s.push("expires=" + new Date(r).toGMTString()),
                    o.isString(n) && s.push("path=" + n),
                    o.isString(a) && s.push("domain=" + a),
                    !0 === i && s.push("secure"),
                    (document.cookie = s.join("; "));
                },
                read: function (e) {
                  var t = document.cookie.match(
                    new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                  );
                  return t ? decodeURIComponent(t[3]) : null;
                },
                remove: function (e) {
                  this.write(e, "", Date.now() - 864e5);
                },
              }
            : {
                write: function () {},
                read: function () {
                  return null;
                },
                remove: function () {},
              };
        },
        7204: function (e) {
          "use strict";
          e.exports = function (e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
          };
        },
        2101: function (e, t, r) {
          "use strict";
          var o = r(610);
          e.exports = function (e) {
            return o.isObject(e) && !0 === e.isAxiosError;
          };
        },
        9912: function (e, t, r) {
          "use strict";
          var o = r(610);
          e.exports = o.isStandardBrowserEnv()
            ? (function () {
                var e,
                  t = /(msie|trident)/i.test(navigator.userAgent),
                  r = document.createElement("a");
                function n(e) {
                  var o = e;
                  return (
                    t && (r.setAttribute("href", o), (o = r.href)),
                    r.setAttribute("href", o),
                    {
                      href: r.href,
                      protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                      host: r.host,
                      search: r.search ? r.search.replace(/^\?/, "") : "",
                      hash: r.hash ? r.hash.replace(/^#/, "") : "",
                      hostname: r.hostname,
                      port: r.port,
                      pathname:
                        "/" === r.pathname.charAt(0)
                          ? r.pathname
                          : "/" + r.pathname,
                    }
                  );
                }
                return (
                  (e = n(window.location.href)),
                  function (t) {
                    var r = o.isString(t) ? n(t) : t;
                    return r.protocol === e.protocol && r.host === e.host;
                  }
                );
              })()
            : function () {
                return !0;
              };
        },
        928: function (e, t, r) {
          "use strict";
          var o = r(610);
          e.exports = function (e, t) {
            o.forEach(e, function (r, o) {
              o !== t &&
                o.toUpperCase() === t.toUpperCase() &&
                ((e[t] = r), delete e[o]);
            });
          };
        },
        3741: function (e, t, r) {
          "use strict";
          var o = r(610),
            n = [
              "age",
              "authorization",
              "content-length",
              "content-type",
              "etag",
              "expires",
              "from",
              "host",
              "if-modified-since",
              "if-unmodified-since",
              "last-modified",
              "location",
              "max-forwards",
              "proxy-authorization",
              "referer",
              "retry-after",
              "user-agent",
            ];
          e.exports = function (e) {
            var t,
              r,
              a,
              i = {};
            return e
              ? (o.forEach(e.split("\n"), function (e) {
                  if (
                    ((a = e.indexOf(":")),
                    (t = o.trim(e.substr(0, a)).toLowerCase()),
                    (r = o.trim(e.substr(a + 1))),
                    t)
                  ) {
                    if (i[t] && n.indexOf(t) >= 0) return;
                    i[t] =
                      "set-cookie" === t
                        ? (i[t] ? i[t] : []).concat([r])
                        : i[t]
                        ? i[t] + ", " + r
                        : r;
                  }
                }),
                i)
              : i;
          };
        },
        8629: function (e) {
          "use strict";
          e.exports = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          };
        },
        6660: function (e, t, r) {
          "use strict";
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          var n = r(9815).version,
            a = {};
          [
            "object",
            "boolean",
            "number",
            "function",
            "string",
            "symbol",
          ].forEach(function (e, t) {
            a[e] = function (r) {
              return o(r) === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          });
          var i = {};
          (a.transitional = function (e, t, r) {
            function o(e, t) {
              return (
                "[Axios v" +
                n +
                "] Transitional option '" +
                e +
                "'" +
                t +
                (r ? ". " + r : "")
              );
            }
            return function (r, n, a) {
              if (!1 === e)
                throw new Error(
                  o(n, " has been removed" + (t ? " in " + t : ""))
                );
              return (
                t &&
                  !i[n] &&
                  ((i[n] = !0),
                  console.warn(
                    o(
                      n,
                      " has been deprecated since v" +
                        t +
                        " and will be removed in the near future"
                    )
                  )),
                !e || e(r, n, a)
              );
            };
          }),
            (e.exports = {
              assertOptions: function (e, t, r) {
                if ("object" !== o(e))
                  throw new TypeError("options must be an object");
                for (var n = Object.keys(e), a = n.length; a-- > 0; ) {
                  var i = n[a],
                    s = t[i];
                  if (s) {
                    var c = e[i],
                      l = void 0 === c || s(c, i, e);
                    if (!0 !== l)
                      throw new TypeError("option " + i + " must be " + l);
                  } else if (!0 !== r) throw Error("Unknown option " + i);
                }
              },
              validators: a,
            });
        },
        610: function (e, t, r) {
          "use strict";
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          var n = r(3824),
            a = Object.prototype.toString;
          function i(e) {
            return Array.isArray(e);
          }
          function s(e) {
            return void 0 === e;
          }
          function c(e) {
            return "[object ArrayBuffer]" === a.call(e);
          }
          function l(e) {
            return null !== e && "object" === o(e);
          }
          function u(e) {
            if ("[object Object]" !== a.call(e)) return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype;
          }
          function p(e) {
            return "[object Function]" === a.call(e);
          }
          function d(e, t) {
            if (null != e)
              if (("object" !== o(e) && (e = [e]), i(e)))
                for (var r = 0, n = e.length; r < n; r++)
                  t.call(null, e[r], r, e);
              else
                for (var a in e)
                  Object.prototype.hasOwnProperty.call(e, a) &&
                    t.call(null, e[a], a, e);
          }
          e.exports = {
            isArray: i,
            isArrayBuffer: c,
            isBuffer: function (e) {
              return (
                null !== e &&
                !s(e) &&
                null !== e.constructor &&
                !s(e.constructor) &&
                "function" == typeof e.constructor.isBuffer &&
                e.constructor.isBuffer(e)
              );
            },
            isFormData: function (e) {
              return "[object FormData]" === a.call(e);
            },
            isArrayBufferView: function (e) {
              return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(e)
                : e && e.buffer && c(e.buffer);
            },
            isString: function (e) {
              return "string" == typeof e;
            },
            isNumber: function (e) {
              return "number" == typeof e;
            },
            isObject: l,
            isPlainObject: u,
            isUndefined: s,
            isDate: function (e) {
              return "[object Date]" === a.call(e);
            },
            isFile: function (e) {
              return "[object File]" === a.call(e);
            },
            isBlob: function (e) {
              return "[object Blob]" === a.call(e);
            },
            isFunction: p,
            isStream: function (e) {
              return l(e) && p(e.pipe);
            },
            isURLSearchParams: function (e) {
              return "[object URLSearchParams]" === a.call(e);
            },
            isStandardBrowserEnv: function () {
              return (
                ("undefined" == typeof navigator ||
                  ("ReactNative" !== navigator.product &&
                    "NativeScript" !== navigator.product &&
                    "NS" !== navigator.product)) &&
                "undefined" != typeof window &&
                "undefined" != typeof document
              );
            },
            forEach: d,
            merge: function e() {
              var t = {};
              function r(r, o) {
                u(t[o]) && u(r)
                  ? (t[o] = e(t[o], r))
                  : u(r)
                  ? (t[o] = e({}, r))
                  : i(r)
                  ? (t[o] = r.slice())
                  : (t[o] = r);
              }
              for (var o = 0, n = arguments.length; o < n; o++)
                d(arguments[o], r);
              return t;
            },
            extend: function (e, t, r) {
              return (
                d(t, function (t, o) {
                  e[o] = r && "function" == typeof t ? n(t, r) : t;
                }),
                e
              );
            },
            trim: function (e) {
              return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
            },
            stripBOM: function (e) {
              return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
            },
          };
        },
        5917: function (e, t, r) {
          var o;
          !(function (n) {
            "use strict";
            function a(e, t) {
              var r = (65535 & e) + (65535 & t);
              return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
            }
            function i(e, t, r, o, n, i) {
              return a(
                ((s = a(a(t, e), a(o, i))) << (c = n)) | (s >>> (32 - c)),
                r
              );
              var s, c;
            }
            function s(e, t, r, o, n, a, s) {
              return i((t & r) | (~t & o), e, t, n, a, s);
            }
            function c(e, t, r, o, n, a, s) {
              return i((t & o) | (r & ~o), e, t, n, a, s);
            }
            function l(e, t, r, o, n, a, s) {
              return i(t ^ r ^ o, e, t, n, a, s);
            }
            function u(e, t, r, o, n, a, s) {
              return i(r ^ (t | ~o), e, t, n, a, s);
            }
            function p(e, t) {
              var r, o, n, i, p;
              (e[t >> 5] |= 128 << t % 32),
                (e[14 + (((t + 64) >>> 9) << 4)] = t);
              var d = 1732584193,
                h = -271733879,
                m = -1732584194,
                f = 271733878;
              for (r = 0; r < e.length; r += 16)
                (o = d),
                  (n = h),
                  (i = m),
                  (p = f),
                  (d = s(d, h, m, f, e[r], 7, -680876936)),
                  (f = s(f, d, h, m, e[r + 1], 12, -389564586)),
                  (m = s(m, f, d, h, e[r + 2], 17, 606105819)),
                  (h = s(h, m, f, d, e[r + 3], 22, -1044525330)),
                  (d = s(d, h, m, f, e[r + 4], 7, -176418897)),
                  (f = s(f, d, h, m, e[r + 5], 12, 1200080426)),
                  (m = s(m, f, d, h, e[r + 6], 17, -1473231341)),
                  (h = s(h, m, f, d, e[r + 7], 22, -45705983)),
                  (d = s(d, h, m, f, e[r + 8], 7, 1770035416)),
                  (f = s(f, d, h, m, e[r + 9], 12, -1958414417)),
                  (m = s(m, f, d, h, e[r + 10], 17, -42063)),
                  (h = s(h, m, f, d, e[r + 11], 22, -1990404162)),
                  (d = s(d, h, m, f, e[r + 12], 7, 1804603682)),
                  (f = s(f, d, h, m, e[r + 13], 12, -40341101)),
                  (m = s(m, f, d, h, e[r + 14], 17, -1502002290)),
                  (d = c(
                    d,
                    (h = s(h, m, f, d, e[r + 15], 22, 1236535329)),
                    m,
                    f,
                    e[r + 1],
                    5,
                    -165796510
                  )),
                  (f = c(f, d, h, m, e[r + 6], 9, -1069501632)),
                  (m = c(m, f, d, h, e[r + 11], 14, 643717713)),
                  (h = c(h, m, f, d, e[r], 20, -373897302)),
                  (d = c(d, h, m, f, e[r + 5], 5, -701558691)),
                  (f = c(f, d, h, m, e[r + 10], 9, 38016083)),
                  (m = c(m, f, d, h, e[r + 15], 14, -660478335)),
                  (h = c(h, m, f, d, e[r + 4], 20, -405537848)),
                  (d = c(d, h, m, f, e[r + 9], 5, 568446438)),
                  (f = c(f, d, h, m, e[r + 14], 9, -1019803690)),
                  (m = c(m, f, d, h, e[r + 3], 14, -187363961)),
                  (h = c(h, m, f, d, e[r + 8], 20, 1163531501)),
                  (d = c(d, h, m, f, e[r + 13], 5, -1444681467)),
                  (f = c(f, d, h, m, e[r + 2], 9, -51403784)),
                  (m = c(m, f, d, h, e[r + 7], 14, 1735328473)),
                  (d = l(
                    d,
                    (h = c(h, m, f, d, e[r + 12], 20, -1926607734)),
                    m,
                    f,
                    e[r + 5],
                    4,
                    -378558
                  )),
                  (f = l(f, d, h, m, e[r + 8], 11, -2022574463)),
                  (m = l(m, f, d, h, e[r + 11], 16, 1839030562)),
                  (h = l(h, m, f, d, e[r + 14], 23, -35309556)),
                  (d = l(d, h, m, f, e[r + 1], 4, -1530992060)),
                  (f = l(f, d, h, m, e[r + 4], 11, 1272893353)),
                  (m = l(m, f, d, h, e[r + 7], 16, -155497632)),
                  (h = l(h, m, f, d, e[r + 10], 23, -1094730640)),
                  (d = l(d, h, m, f, e[r + 13], 4, 681279174)),
                  (f = l(f, d, h, m, e[r], 11, -358537222)),
                  (m = l(m, f, d, h, e[r + 3], 16, -722521979)),
                  (h = l(h, m, f, d, e[r + 6], 23, 76029189)),
                  (d = l(d, h, m, f, e[r + 9], 4, -640364487)),
                  (f = l(f, d, h, m, e[r + 12], 11, -421815835)),
                  (m = l(m, f, d, h, e[r + 15], 16, 530742520)),
                  (d = u(
                    d,
                    (h = l(h, m, f, d, e[r + 2], 23, -995338651)),
                    m,
                    f,
                    e[r],
                    6,
                    -198630844
                  )),
                  (f = u(f, d, h, m, e[r + 7], 10, 1126891415)),
                  (m = u(m, f, d, h, e[r + 14], 15, -1416354905)),
                  (h = u(h, m, f, d, e[r + 5], 21, -57434055)),
                  (d = u(d, h, m, f, e[r + 12], 6, 1700485571)),
                  (f = u(f, d, h, m, e[r + 3], 10, -1894986606)),
                  (m = u(m, f, d, h, e[r + 10], 15, -1051523)),
                  (h = u(h, m, f, d, e[r + 1], 21, -2054922799)),
                  (d = u(d, h, m, f, e[r + 8], 6, 1873313359)),
                  (f = u(f, d, h, m, e[r + 15], 10, -30611744)),
                  (m = u(m, f, d, h, e[r + 6], 15, -1560198380)),
                  (h = u(h, m, f, d, e[r + 13], 21, 1309151649)),
                  (d = u(d, h, m, f, e[r + 4], 6, -145523070)),
                  (f = u(f, d, h, m, e[r + 11], 10, -1120210379)),
                  (m = u(m, f, d, h, e[r + 2], 15, 718787259)),
                  (h = u(h, m, f, d, e[r + 9], 21, -343485551)),
                  (d = a(d, o)),
                  (h = a(h, n)),
                  (m = a(m, i)),
                  (f = a(f, p));
              return [d, h, m, f];
            }
            function d(e) {
              var t,
                r = "",
                o = 32 * e.length;
              for (t = 0; t < o; t += 8)
                r += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
              return r;
            }
            function h(e) {
              var t,
                r = [];
              for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)
                r[t] = 0;
              var o = 8 * e.length;
              for (t = 0; t < o; t += 8)
                r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
              return r;
            }
            function m(e) {
              var t,
                r,
                o = "0123456789abcdef",
                n = "";
              for (r = 0; r < e.length; r += 1)
                (t = e.charCodeAt(r)),
                  (n += o.charAt((t >>> 4) & 15) + o.charAt(15 & t));
              return n;
            }
            function f(e) {
              return unescape(encodeURIComponent(e));
            }
            function y(e) {
              return (function (e) {
                return d(p(h(e), 8 * e.length));
              })(f(e));
            }
            function g(e, t) {
              return (function (e, t) {
                var r,
                  o,
                  n = h(e),
                  a = [],
                  i = [];
                for (
                  a[15] = i[15] = void 0,
                    n.length > 16 && (n = p(n, 8 * e.length)),
                    r = 0;
                  r < 16;
                  r += 1
                )
                  (a[r] = 909522486 ^ n[r]), (i[r] = 1549556828 ^ n[r]);
                return (
                  (o = p(a.concat(h(t)), 512 + 8 * t.length)),
                  d(p(i.concat(o), 640))
                );
              })(f(e), f(t));
            }
            function A(e, t, r) {
              return t ? (r ? g(t, e) : m(g(t, e))) : r ? y(e) : m(y(e));
            }
            void 0 ===
              (o = function () {
                return A;
              }.call(t, r, t, e)) || (e.exports = o);
          })();
        },
        9239: function (e, t, r) {
          var o, n;
          function a(e) {
            return (
              (a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              a(e)
            );
          }
          (e = r.nmd(e)),
            (function (i, s) {
              "use strict";
              "object" === a(e) && e.exports
                ? (e.exports = s())
                : void 0 ===
                    (n =
                      "function" == typeof (o = s) ? o.call(t, r, t, e) : o) ||
                  (e.exports = n);
            })(0, function (e) {
              "use strict";
              var t = e && e.IPv6;
              return {
                best: function (e) {
                  var t,
                    r,
                    o = e.toLowerCase().split(":"),
                    n = o.length,
                    a = 8;
                  for (
                    "" === o[0] && "" === o[1] && "" === o[2]
                      ? (o.shift(), o.shift())
                      : "" === o[0] && "" === o[1]
                      ? o.shift()
                      : "" === o[n - 1] && "" === o[n - 2] && o.pop(),
                      -1 !== o[(n = o.length) - 1].indexOf(".") && (a = 7),
                      t = 0;
                    t < n && "" !== o[t];
                    t++
                  );
                  if (t < a)
                    for (o.splice(t, 1, "0000"); o.length < a; )
                      o.splice(t, 0, "0000");
                  for (var i = 0; i < a; i++) {
                    r = o[i].split("");
                    for (var s = 0; s < 3 && "0" === r[0] && r.length > 1; s++)
                      r.splice(0, 1);
                    o[i] = r.join("");
                  }
                  var c = -1,
                    l = 0,
                    u = 0,
                    p = -1,
                    d = !1;
                  for (i = 0; i < a; i++)
                    d
                      ? "0" === o[i]
                        ? (u += 1)
                        : ((d = !1), u > l && ((c = p), (l = u)))
                      : "0" === o[i] && ((d = !0), (p = i), (u = 1));
                  u > l && ((c = p), (l = u)),
                    l > 1 && o.splice(c, l, ""),
                    (n = o.length);
                  var h = "";
                  for (
                    "" === o[0] && (h = ":"), i = 0;
                    i < n && ((h += o[i]), i !== n - 1);
                    i++
                  )
                    h += ":";
                  return "" === o[n - 1] && (h += ":"), h;
                },
                noConflict: function () {
                  return e.IPv6 === this && (e.IPv6 = t), this;
                },
              };
            });
        },
        4035: function (e, t, r) {
          var o, n;
          function a(e) {
            return (
              (a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              a(e)
            );
          }
          (e = r.nmd(e)),
            (function (i, s) {
              "use strict";
              "object" === a(e) && e.exports
                ? (e.exports = s())
                : void 0 ===
                    (n =
                      "function" == typeof (o = s) ? o.call(t, r, t, e) : o) ||
                  (e.exports = n);
            })(0, function (e) {
              "use strict";
              var t = e && e.SecondLevelDomains,
                r = {
                  list: {
                    ac: " com gov mil net org ",
                    ae: " ac co gov mil name net org pro sch ",
                    af: " com edu gov net org ",
                    al: " com edu gov mil net org ",
                    ao: " co ed gv it og pb ",
                    ar: " com edu gob gov int mil net org tur ",
                    at: " ac co gv or ",
                    au: " asn com csiro edu gov id net org ",
                    ba: " co com edu gov mil net org rs unbi unmo unsa untz unze ",
                    bb: " biz co com edu gov info net org store tv ",
                    bh: " biz cc com edu gov info net org ",
                    bn: " com edu gov net org ",
                    bo: " com edu gob gov int mil net org tv ",
                    br: " adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",
                    bs: " com edu gov net org ",
                    bz: " du et om ov rg ",
                    ca: " ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
                    ck: " biz co edu gen gov info net org ",
                    cn: " ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",
                    co: " com edu gov mil net nom org ",
                    cr: " ac c co ed fi go or sa ",
                    cy: " ac biz com ekloges gov ltd name net org parliament press pro tm ",
                    do: " art com edu gob gov mil net org sld web ",
                    dz: " art asso com edu gov net org pol ",
                    ec: " com edu fin gov info med mil net org pro ",
                    eg: " com edu eun gov mil name net org sci ",
                    er: " com edu gov ind mil net org rochest w ",
                    es: " com edu gob nom org ",
                    et: " biz com edu gov info name net org ",
                    fj: " ac biz com info mil name net org pro ",
                    fk: " ac co gov net nom org ",
                    fr: " asso com f gouv nom prd presse tm ",
                    gg: " co net org ",
                    gh: " com edu gov mil org ",
                    gn: " ac com gov net org ",
                    gr: " com edu gov mil net org ",
                    gt: " com edu gob ind mil net org ",
                    gu: " com edu gov net org ",
                    hk: " com edu gov idv net org ",
                    hu: " 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
                    id: " ac co go mil net or sch web ",
                    il: " ac co gov idf k12 muni net org ",
                    in: " ac co edu ernet firm gen gov i ind mil net nic org res ",
                    iq: " com edu gov i mil net org ",
                    ir: " ac co dnssec gov i id net org sch ",
                    it: " edu gov ",
                    je: " co net org ",
                    jo: " com edu gov mil name net org sch ",
                    jp: " ac ad co ed go gr lg ne or ",
                    ke: " ac co go info me mobi ne or sc ",
                    kh: " com edu gov mil net org per ",
                    ki: " biz com de edu gov info mob net org tel ",
                    km: " asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
                    kn: " edu gov net org ",
                    kr: " ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",
                    kw: " com edu gov net org ",
                    ky: " com edu gov net org ",
                    kz: " com edu gov mil net org ",
                    lb: " com edu gov net org ",
                    lk: " assn com edu gov grp hotel int ltd net ngo org sch soc web ",
                    lr: " com edu gov net org ",
                    lv: " asn com conf edu gov id mil net org ",
                    ly: " com edu gov id med net org plc sch ",
                    ma: " ac co gov m net org press ",
                    mc: " asso tm ",
                    me: " ac co edu gov its net org priv ",
                    mg: " com edu gov mil nom org prd tm ",
                    mk: " com edu gov inf name net org pro ",
                    ml: " com edu gov net org presse ",
                    mn: " edu gov org ",
                    mo: " com edu gov net org ",
                    mt: " com edu gov net org ",
                    mv: " aero biz com coop edu gov info int mil museum name net org pro ",
                    mw: " ac co com coop edu gov int museum net org ",
                    mx: " com edu gob net org ",
                    my: " com edu gov mil name net org sch ",
                    nf: " arts com firm info net other per rec store web ",
                    ng: " biz com edu gov mil mobi name net org sch ",
                    ni: " ac co com edu gob mil net nom org ",
                    np: " com edu gov mil net org ",
                    nr: " biz com edu gov info net org ",
                    om: " ac biz co com edu gov med mil museum net org pro sch ",
                    pe: " com edu gob mil net nom org sld ",
                    ph: " com edu gov i mil net ngo org ",
                    pk: " biz com edu fam gob gok gon gop gos gov net org web ",
                    pl: " art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",
                    pr: " ac biz com edu est gov info isla name net org pro prof ",
                    ps: " com edu gov net org plo sec ",
                    pw: " belau co ed go ne or ",
                    ro: " arts com firm info nom nt org rec store tm www ",
                    rs: " ac co edu gov in org ",
                    sb: " com edu gov net org ",
                    sc: " com edu gov net org ",
                    sh: " co com edu gov net nom org ",
                    sl: " com edu gov net org ",
                    st: " co com consulado edu embaixada gov mil net org principe saotome store ",
                    sv: " com edu gob org red ",
                    sz: " ac co org ",
                    tr: " av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",
                    tt: " aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
                    tw: " club com ebiz edu game gov idv mil net org ",
                    mu: " ac co com gov net or org ",
                    mz: " ac co edu gov org ",
                    na: " co com ",
                    nz: " ac co cri geek gen govt health iwi maori mil net org parliament school ",
                    pa: " abo ac com edu gob ing med net nom org sld ",
                    pt: " com edu gov int net nome org publ ",
                    py: " com edu gov mil net org ",
                    qa: " com edu gov mil net org ",
                    re: " asso com nom ",
                    ru: " ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
                    rw: " ac co com edu gouv gov int mil net ",
                    sa: " com edu gov med net org pub sch ",
                    sd: " com edu gov info med net org tv ",
                    se: " a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",
                    sg: " com edu gov idn net org per ",
                    sn: " art com edu gouv org perso univ ",
                    sy: " com edu gov mil net news org ",
                    th: " ac co go in mi net or ",
                    tj: " ac biz co com edu go gov info int mil name net nic org test web ",
                    tn: " agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
                    tz: " ac co go ne or ",
                    ua: " biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",
                    ug: " ac co go ne or org sc ",
                    uk: " ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
                    us: " dni fed isa kids nsn ",
                    uy: " com edu gub mil net org ",
                    ve: " co com edu gob info mil net org web ",
                    vi: " co com k12 net org ",
                    vn: " ac biz com edu gov health info int name net org pro ",
                    ye: " co com gov ltd me net org plc ",
                    yu: " ac co edu gov org ",
                    za: " ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",
                    zm: " ac co com edu gov net org sch ",
                    com: "ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",
                    net: "gb jp se uk ",
                    org: "ae",
                    de: "com ",
                  },
                  has: function (e) {
                    var t = e.lastIndexOf(".");
                    if (t <= 0 || t >= e.length - 1) return !1;
                    var o = e.lastIndexOf(".", t - 1);
                    if (o <= 0 || o >= t - 1) return !1;
                    var n = r.list[e.slice(t + 1)];
                    return !!n && n.indexOf(" " + e.slice(o + 1, t) + " ") >= 0;
                  },
                  is: function (e) {
                    var t = e.lastIndexOf(".");
                    if (t <= 0 || t >= e.length - 1) return !1;
                    if (e.lastIndexOf(".", t - 1) >= 0) return !1;
                    var o = r.list[e.slice(t + 1)];
                    return !!o && o.indexOf(" " + e.slice(0, t) + " ") >= 0;
                  },
                  get: function (e) {
                    var t = e.lastIndexOf(".");
                    if (t <= 0 || t >= e.length - 1) return null;
                    var o = e.lastIndexOf(".", t - 1);
                    if (o <= 0 || o >= t - 1) return null;
                    var n = r.list[e.slice(t + 1)];
                    return n
                      ? n.indexOf(" " + e.slice(o + 1, t) + " ") < 0
                        ? null
                        : e.slice(o + 1)
                      : null;
                  },
                  noConflict: function () {
                    return (
                      e.SecondLevelDomains === this &&
                        (e.SecondLevelDomains = t),
                      this
                    );
                  },
                };
              return r;
            });
        },
        5016: function (e, t, r) {
          var o, n, a;
          function i(e) {
            return (
              (i =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              i(e)
            );
          }
          (e = r.nmd(e)),
            (function (s, c) {
              "use strict";
              "object" === i(e) && e.exports
                ? (e.exports = c(r(2456), r(9239), r(4035)))
                : ((n = [r(2456), r(9239), r(4035)]),
                  void 0 ===
                    (a = "function" == typeof (o = c) ? o.apply(t, n) : o) ||
                    (e.exports = a));
            })(0, function (e, t, r, o) {
              "use strict";
              var n = o && o.URI;
              function a(e, t) {
                var r = arguments.length >= 1,
                  o = arguments.length >= 2;
                if (!(this instanceof a))
                  return r ? (o ? new a(e, t) : new a(e)) : new a();
                if (void 0 === e) {
                  if (r)
                    throw new TypeError(
                      "undefined is not a valid argument for URI"
                    );
                  e = "undefined" != typeof location ? location.href + "" : "";
                }
                if (null === e && r)
                  throw new TypeError("null is not a valid argument for URI");
                return this.href(e), void 0 !== t ? this.absoluteTo(t) : this;
              }
              a.version = "1.19.10";
              var s = a.prototype,
                c = Object.prototype.hasOwnProperty;
              function l(e) {
                return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
              }
              function u(e) {
                return void 0 === e
                  ? "Undefined"
                  : String(Object.prototype.toString.call(e)).slice(8, -1);
              }
              function p(e) {
                return "Array" === u(e);
              }
              function d(e, t) {
                var r,
                  o,
                  n = {};
                if ("RegExp" === u(t)) n = null;
                else if (p(t))
                  for (r = 0, o = t.length; r < o; r++) n[t[r]] = !0;
                else n[t] = !0;
                for (r = 0, o = e.length; r < o; r++)
                  ((n && void 0 !== n[e[r]]) || (!n && t.test(e[r]))) &&
                    (e.splice(r, 1), o--, r--);
                return e;
              }
              function h(e, t) {
                var r, o;
                if (p(t)) {
                  for (r = 0, o = t.length; r < o; r++)
                    if (!h(e, t[r])) return !1;
                  return !0;
                }
                var n = u(t);
                for (r = 0, o = e.length; r < o; r++)
                  if ("RegExp" === n) {
                    if ("string" == typeof e[r] && e[r].match(t)) return !0;
                  } else if (e[r] === t) return !0;
                return !1;
              }
              function m(e, t) {
                if (!p(e) || !p(t)) return !1;
                if (e.length !== t.length) return !1;
                e.sort(), t.sort();
                for (var r = 0, o = e.length; r < o; r++)
                  if (e[r] !== t[r]) return !1;
                return !0;
              }
              function f(e) {
                return e.replace(/^\/+|\/+$/g, "");
              }
              function y(e) {
                return escape(e);
              }
              function g(e) {
                return encodeURIComponent(e)
                  .replace(/[!'()*]/g, y)
                  .replace(/\*/g, "%2A");
              }
              (a._parts = function () {
                return {
                  protocol: null,
                  username: null,
                  password: null,
                  hostname: null,
                  urn: null,
                  port: null,
                  path: null,
                  query: null,
                  fragment: null,
                  preventInvalidHostname: a.preventInvalidHostname,
                  duplicateQueryParameters: a.duplicateQueryParameters,
                  escapeQuerySpace: a.escapeQuerySpace,
                };
              }),
                (a.preventInvalidHostname = !1),
                (a.duplicateQueryParameters = !1),
                (a.escapeQuerySpace = !0),
                (a.protocol_expression = /^[a-z][a-z0-9.+-]*$/i),
                (a.idn_expression = /[^a-z0-9\._-]/i),
                (a.punycode_expression = /(xn--)/i),
                (a.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/),
                (a.ip6_expression =
                  /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/),
                (a.find_uri_expression =
                  /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi),
                (a.findUri = {
                  start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
                  end: /[\s\r\n]|$/,
                  trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
                  parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g,
                }),
                (a.leading_whitespace_expression =
                  /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/),
                (a.defaultPorts = {
                  http: "80",
                  https: "443",
                  ftp: "21",
                  gopher: "70",
                  ws: "80",
                  wss: "443",
                }),
                (a.hostProtocols = ["http", "https"]),
                (a.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/),
                (a.domAttributes = {
                  a: "href",
                  blockquote: "cite",
                  link: "href",
                  base: "href",
                  script: "src",
                  form: "action",
                  img: "src",
                  area: "href",
                  iframe: "src",
                  embed: "src",
                  source: "src",
                  track: "src",
                  input: "src",
                  audio: "src",
                  video: "src",
                }),
                (a.getDomAttribute = function (e) {
                  if (e && e.nodeName) {
                    var t = e.nodeName.toLowerCase();
                    if ("input" !== t || "image" === e.type)
                      return a.domAttributes[t];
                  }
                }),
                (a.encode = g),
                (a.decode = decodeURIComponent),
                (a.iso8859 = function () {
                  (a.encode = escape), (a.decode = unescape);
                }),
                (a.unicode = function () {
                  (a.encode = g), (a.decode = decodeURIComponent);
                }),
                (a.characters = {
                  pathname: {
                    encode: {
                      expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                      map: {
                        "%24": "$",
                        "%26": "&",
                        "%2B": "+",
                        "%2C": ",",
                        "%3B": ";",
                        "%3D": "=",
                        "%3A": ":",
                        "%40": "@",
                      },
                    },
                    decode: {
                      expression: /[\/\?#]/g,
                      map: { "/": "%2F", "?": "%3F", "#": "%23" },
                    },
                  },
                  reserved: {
                    encode: {
                      expression:
                        /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                      map: {
                        "%3A": ":",
                        "%2F": "/",
                        "%3F": "?",
                        "%23": "#",
                        "%5B": "[",
                        "%5D": "]",
                        "%40": "@",
                        "%21": "!",
                        "%24": "$",
                        "%26": "&",
                        "%27": "'",
                        "%28": "(",
                        "%29": ")",
                        "%2A": "*",
                        "%2B": "+",
                        "%2C": ",",
                        "%3B": ";",
                        "%3D": "=",
                      },
                    },
                  },
                  urnpath: {
                    encode: {
                      expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
                      map: {
                        "%21": "!",
                        "%24": "$",
                        "%27": "'",
                        "%28": "(",
                        "%29": ")",
                        "%2A": "*",
                        "%2B": "+",
                        "%2C": ",",
                        "%3B": ";",
                        "%3D": "=",
                        "%40": "@",
                      },
                    },
                    decode: {
                      expression: /[\/\?#:]/g,
                      map: { "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" },
                    },
                  },
                }),
                (a.encodeQuery = function (e, t) {
                  var r = a.encode(e + "");
                  return (
                    void 0 === t && (t = a.escapeQuerySpace),
                    t ? r.replace(/%20/g, "+") : r
                  );
                }),
                (a.decodeQuery = function (e, t) {
                  (e += ""), void 0 === t && (t = a.escapeQuerySpace);
                  try {
                    return a.decode(t ? e.replace(/\+/g, "%20") : e);
                  } catch (t) {
                    return e;
                  }
                });
              var A,
                x = { encode: "encode", decode: "decode" },
                b = function (e, t) {
                  return function (r) {
                    try {
                      return a[t](r + "").replace(
                        a.characters[e][t].expression,
                        function (r) {
                          return a.characters[e][t].map[r];
                        }
                      );
                    } catch (e) {
                      return r;
                    }
                  };
                };
              for (A in x)
                (a[A + "PathSegment"] = b("pathname", x[A])),
                  (a[A + "UrnPathSegment"] = b("urnpath", x[A]));
              var w = function (e, t, r) {
                return function (o) {
                  var n;
                  n = r
                    ? function (e) {
                        return a[t](a[r](e));
                      }
                    : a[t];
                  for (
                    var i = (o + "").split(e), s = 0, c = i.length;
                    s < c;
                    s++
                  )
                    i[s] = n(i[s]);
                  return i.join(e);
                };
              };
              function k(e) {
                return function (t, r) {
                  return void 0 === t
                    ? this._parts[e] || ""
                    : ((this._parts[e] = t || null), this.build(!r), this);
                };
              }
              function P(e, t) {
                return function (r, o) {
                  return void 0 === r
                    ? this._parts[e] || ""
                    : (null !== r &&
                        (r += "").charAt(0) === t &&
                        (r = r.substring(1)),
                      (this._parts[e] = r),
                      this.build(!o),
                      this);
                };
              }
              (a.decodePath = w("/", "decodePathSegment")),
                (a.decodeUrnPath = w(":", "decodeUrnPathSegment")),
                (a.recodePath = w("/", "encodePathSegment", "decode")),
                (a.recodeUrnPath = w(":", "encodeUrnPathSegment", "decode")),
                (a.encodeReserved = b("reserved", "encode")),
                (a.parse = function (e, t) {
                  var r;
                  return (
                    t ||
                      (t = {
                        preventInvalidHostname: a.preventInvalidHostname,
                      }),
                    (r = (e = e.replace(
                      a.leading_whitespace_expression,
                      ""
                    )).indexOf("#")) > -1 &&
                      ((t.fragment = e.substring(r + 1) || null),
                      (e = e.substring(0, r))),
                    (r = e.indexOf("?")) > -1 &&
                      ((t.query = e.substring(r + 1) || null),
                      (e = e.substring(0, r))),
                    "//" ===
                    (e = e.replace(
                      /^(https?|ftp|wss?)?:+[/\\]*/i,
                      "$1://"
                    )).substring(0, 2)
                      ? ((t.protocol = null),
                        (e = e.substring(2)),
                        (e = a.parseAuthority(e, t)))
                      : (r = e.indexOf(":")) > -1 &&
                        ((t.protocol = e.substring(0, r) || null),
                        t.protocol && !t.protocol.match(a.protocol_expression)
                          ? (t.protocol = void 0)
                          : "//" ===
                            e.substring(r + 1, r + 3).replace(/\\/g, "/")
                          ? ((e = e.substring(r + 3)),
                            (e = a.parseAuthority(e, t)))
                          : ((e = e.substring(r + 1)), (t.urn = !0))),
                    (t.path = e),
                    t
                  );
                }),
                (a.parseHost = function (e, t) {
                  e || (e = "");
                  var r,
                    o,
                    n = (e = e.replace(/\\/g, "/")).indexOf("/");
                  if ((-1 === n && (n = e.length), "[" === e.charAt(0)))
                    (r = e.indexOf("]")),
                      (t.hostname = e.substring(1, r) || null),
                      (t.port = e.substring(r + 2, n) || null),
                      "/" === t.port && (t.port = null);
                  else {
                    var i = e.indexOf(":"),
                      s = e.indexOf("/"),
                      c = e.indexOf(":", i + 1);
                    -1 !== c && (-1 === s || c < s)
                      ? ((t.hostname = e.substring(0, n) || null),
                        (t.port = null))
                      : ((o = e.substring(0, n).split(":")),
                        (t.hostname = o[0] || null),
                        (t.port = o[1] || null));
                  }
                  return (
                    t.hostname &&
                      "/" !== e.substring(n).charAt(0) &&
                      (n++, (e = "/" + e)),
                    t.preventInvalidHostname &&
                      a.ensureValidHostname(t.hostname, t.protocol),
                    t.port && a.ensureValidPort(t.port),
                    e.substring(n) || "/"
                  );
                }),
                (a.parseAuthority = function (e, t) {
                  return (e = a.parseUserinfo(e, t)), a.parseHost(e, t);
                }),
                (a.parseUserinfo = function (e, t) {
                  var r = e;
                  -1 !== e.indexOf("\\") && (e = e.replace(/\\/g, "/"));
                  var o,
                    n = e.indexOf("/"),
                    i = e.lastIndexOf("@", n > -1 ? n : e.length - 1);
                  return (
                    i > -1 && (-1 === n || i < n)
                      ? ((o = e.substring(0, i).split(":")),
                        (t.username = o[0] ? a.decode(o[0]) : null),
                        o.shift(),
                        (t.password = o[0] ? a.decode(o.join(":")) : null),
                        (e = r.substring(i + 1)))
                      : ((t.username = null), (t.password = null)),
                    e
                  );
                }),
                (a.parseQuery = function (e, t) {
                  if (!e) return {};
                  if (!(e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "")))
                    return {};
                  for (
                    var r, o, n, i = {}, s = e.split("&"), l = s.length, u = 0;
                    u < l;
                    u++
                  )
                    (r = s[u].split("=")),
                      (o = a.decodeQuery(r.shift(), t)),
                      (n = r.length ? a.decodeQuery(r.join("="), t) : null),
                      "__proto__" !== o &&
                        (c.call(i, o)
                          ? (("string" != typeof i[o] && null !== i[o]) ||
                              (i[o] = [i[o]]),
                            i[o].push(n))
                          : (i[o] = n));
                  return i;
                }),
                (a.build = function (e) {
                  var t = "",
                    r = !1;
                  return (
                    e.protocol && (t += e.protocol + ":"),
                    e.urn || (!t && !e.hostname) || ((t += "//"), (r = !0)),
                    (t += a.buildAuthority(e) || ""),
                    "string" == typeof e.path &&
                      ("/" !== e.path.charAt(0) && r && (t += "/"),
                      (t += e.path)),
                    "string" == typeof e.query &&
                      e.query &&
                      (t += "?" + e.query),
                    "string" == typeof e.fragment &&
                      e.fragment &&
                      (t += "#" + e.fragment),
                    t
                  );
                }),
                (a.buildHost = function (e) {
                  var t = "";
                  return e.hostname
                    ? (a.ip6_expression.test(e.hostname)
                        ? (t += "[" + e.hostname + "]")
                        : (t += e.hostname),
                      e.port && (t += ":" + e.port),
                      t)
                    : "";
                }),
                (a.buildAuthority = function (e) {
                  return a.buildUserinfo(e) + a.buildHost(e);
                }),
                (a.buildUserinfo = function (e) {
                  var t = "";
                  return (
                    e.username && (t += a.encode(e.username)),
                    e.password && (t += ":" + a.encode(e.password)),
                    t && (t += "@"),
                    t
                  );
                }),
                (a.buildQuery = function (e, t, r) {
                  var o,
                    n,
                    i,
                    s,
                    l = "";
                  for (n in e)
                    if ("__proto__" !== n && c.call(e, n))
                      if (p(e[n]))
                        for (o = {}, i = 0, s = e[n].length; i < s; i++)
                          void 0 !== e[n][i] &&
                            void 0 === o[e[n][i] + ""] &&
                            ((l += "&" + a.buildQueryParameter(n, e[n][i], r)),
                            !0 !== t && (o[e[n][i] + ""] = !0));
                      else
                        void 0 !== e[n] &&
                          (l += "&" + a.buildQueryParameter(n, e[n], r));
                  return l.substring(1);
                }),
                (a.buildQueryParameter = function (e, t, r) {
                  return (
                    a.encodeQuery(e, r) +
                    (null !== t ? "=" + a.encodeQuery(t, r) : "")
                  );
                }),
                (a.addQuery = function (e, t, r) {
                  if ("object" === i(t))
                    for (var o in t) c.call(t, o) && a.addQuery(e, o, t[o]);
                  else {
                    if ("string" != typeof t)
                      throw new TypeError(
                        "URI.addQuery() accepts an object, string as the name parameter"
                      );
                    if (void 0 === e[t]) return void (e[t] = r);
                    "string" == typeof e[t] && (e[t] = [e[t]]),
                      p(r) || (r = [r]),
                      (e[t] = (e[t] || []).concat(r));
                  }
                }),
                (a.setQuery = function (e, t, r) {
                  if ("object" === i(t))
                    for (var o in t) c.call(t, o) && a.setQuery(e, o, t[o]);
                  else {
                    if ("string" != typeof t)
                      throw new TypeError(
                        "URI.setQuery() accepts an object, string as the name parameter"
                      );
                    e[t] = void 0 === r ? null : r;
                  }
                }),
                (a.removeQuery = function (e, t, r) {
                  var o, n, s;
                  if (p(t))
                    for (o = 0, n = t.length; o < n; o++) e[t[o]] = void 0;
                  else if ("RegExp" === u(t))
                    for (s in e) t.test(s) && (e[s] = void 0);
                  else if ("object" === i(t))
                    for (s in t) c.call(t, s) && a.removeQuery(e, s, t[s]);
                  else {
                    if ("string" != typeof t)
                      throw new TypeError(
                        "URI.removeQuery() accepts an object, string, RegExp as the first parameter"
                      );
                    void 0 !== r
                      ? "RegExp" === u(r)
                        ? !p(e[t]) && r.test(e[t])
                          ? (e[t] = void 0)
                          : (e[t] = d(e[t], r))
                        : e[t] !== String(r) || (p(r) && 1 !== r.length)
                        ? p(e[t]) && (e[t] = d(e[t], r))
                        : (e[t] = void 0)
                      : (e[t] = void 0);
                  }
                }),
                (a.hasQuery = function (e, t, r, o) {
                  switch (u(t)) {
                    case "String":
                      break;
                    case "RegExp":
                      for (var n in e)
                        if (
                          c.call(e, n) &&
                          t.test(n) &&
                          (void 0 === r || a.hasQuery(e, n, r))
                        )
                          return !0;
                      return !1;
                    case "Object":
                      for (var i in t)
                        if (c.call(t, i) && !a.hasQuery(e, i, t[i])) return !1;
                      return !0;
                    default:
                      throw new TypeError(
                        "URI.hasQuery() accepts a string, regular expression or object as the name parameter"
                      );
                  }
                  switch (u(r)) {
                    case "Undefined":
                      return t in e;
                    case "Boolean":
                      return r === Boolean(p(e[t]) ? e[t].length : e[t]);
                    case "Function":
                      return !!r(e[t], t, e);
                    case "Array":
                      return !!p(e[t]) && (o ? h : m)(e[t], r);
                    case "RegExp":
                      return p(e[t])
                        ? !!o && h(e[t], r)
                        : Boolean(e[t] && e[t].match(r));
                    case "Number":
                      r = String(r);
                    case "String":
                      return p(e[t]) ? !!o && h(e[t], r) : e[t] === r;
                    default:
                      throw new TypeError(
                        "URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter"
                      );
                  }
                }),
                (a.joinPaths = function () {
                  for (
                    var e = [], t = [], r = 0, o = 0;
                    o < arguments.length;
                    o++
                  ) {
                    var n = new a(arguments[o]);
                    e.push(n);
                    for (var i = n.segment(), s = 0; s < i.length; s++)
                      "string" == typeof i[s] && t.push(i[s]), i[s] && r++;
                  }
                  if (!t.length || !r) return new a("");
                  var c = new a("").segment(t);
                  return (
                    ("" !== e[0].path() && "/" !== e[0].path().slice(0, 1)) ||
                      c.path("/" + c.path()),
                    c.normalize()
                  );
                }),
                (a.commonPath = function (e, t) {
                  var r,
                    o = Math.min(e.length, t.length);
                  for (r = 0; r < o; r++)
                    if (e.charAt(r) !== t.charAt(r)) {
                      r--;
                      break;
                    }
                  return r < 1
                    ? e.charAt(0) === t.charAt(0) && "/" === e.charAt(0)
                      ? "/"
                      : ""
                    : (("/" === e.charAt(r) && "/" === t.charAt(r)) ||
                        (r = e.substring(0, r).lastIndexOf("/")),
                      e.substring(0, r + 1));
                }),
                (a.withinString = function (e, t, r) {
                  r || (r = {});
                  var o = r.start || a.findUri.start,
                    n = r.end || a.findUri.end,
                    i = r.trim || a.findUri.trim,
                    s = r.parens || a.findUri.parens,
                    c = /[a-z0-9-]=["']?$/i;
                  for (o.lastIndex = 0; ; ) {
                    var l = o.exec(e);
                    if (!l) break;
                    var u = l.index;
                    if (r.ignoreHtml) {
                      var p = e.slice(Math.max(u - 3, 0), u);
                      if (p && c.test(p)) continue;
                    }
                    for (
                      var d = u + e.slice(u).search(n),
                        h = e.slice(u, d),
                        m = -1;
                      ;

                    ) {
                      var f = s.exec(h);
                      if (!f) break;
                      var y = f.index + f[0].length;
                      m = Math.max(m, y);
                    }
                    if (
                      !(
                        (h =
                          m > -1
                            ? h.slice(0, m) + h.slice(m).replace(i, "")
                            : h.replace(i, "")).length <= l[0].length ||
                        (r.ignore && r.ignore.test(h))
                      )
                    ) {
                      var g = t(h, u, (d = u + h.length), e);
                      void 0 !== g
                        ? ((g = String(g)),
                          (e = e.slice(0, u) + g + e.slice(d)),
                          (o.lastIndex = u + g.length))
                        : (o.lastIndex = d);
                    }
                  }
                  return (o.lastIndex = 0), e;
                }),
                (a.ensureValidHostname = function (t, r) {
                  var o = !!t,
                    n = !1;
                  if ((!!r && (n = h(a.hostProtocols, r)), n && !o))
                    throw new TypeError(
                      "Hostname cannot be empty, if protocol is " + r
                    );
                  if (t && t.match(a.invalid_hostname_characters)) {
                    if (!e)
                      throw new TypeError(
                        'Hostname "' +
                          t +
                          '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available'
                      );
                    if (e.toASCII(t).match(a.invalid_hostname_characters))
                      throw new TypeError(
                        'Hostname "' +
                          t +
                          '" contains characters other than [A-Z0-9.-:_]'
                      );
                  }
                }),
                (a.ensureValidPort = function (e) {
                  if (e) {
                    var t = Number(e);
                    if (!(/^[0-9]+$/.test(t) && t > 0 && t < 65536))
                      throw new TypeError(
                        'Port "' + e + '" is not a valid port'
                      );
                  }
                }),
                (a.noConflict = function (e) {
                  if (e) {
                    var t = { URI: this.noConflict() };
                    return (
                      o.URITemplate &&
                        "function" == typeof o.URITemplate.noConflict &&
                        (t.URITemplate = o.URITemplate.noConflict()),
                      o.IPv6 &&
                        "function" == typeof o.IPv6.noConflict &&
                        (t.IPv6 = o.IPv6.noConflict()),
                      o.SecondLevelDomains &&
                        "function" == typeof o.SecondLevelDomains.noConflict &&
                        (t.SecondLevelDomains =
                          o.SecondLevelDomains.noConflict()),
                      t
                    );
                  }
                  return o.URI === this && (o.URI = n), this;
                }),
                (s.build = function (e) {
                  return (
                    !0 === e
                      ? (this._deferred_build = !0)
                      : (void 0 === e || this._deferred_build) &&
                        ((this._string = a.build(this._parts)),
                        (this._deferred_build = !1)),
                    this
                  );
                }),
                (s.clone = function () {
                  return new a(this);
                }),
                (s.valueOf = s.toString =
                  function () {
                    return this.build(!1)._string;
                  }),
                (s.protocol = k("protocol")),
                (s.username = k("username")),
                (s.password = k("password")),
                (s.hostname = k("hostname")),
                (s.port = k("port")),
                (s.query = P("query", "?")),
                (s.fragment = P("fragment", "#")),
                (s.search = function (e, t) {
                  var r = this.query(e, t);
                  return "string" == typeof r && r.length ? "?" + r : r;
                }),
                (s.hash = function (e, t) {
                  var r = this.fragment(e, t);
                  return "string" == typeof r && r.length ? "#" + r : r;
                }),
                (s.pathname = function (e, t) {
                  if (void 0 === e || !0 === e) {
                    var r =
                      this._parts.path || (this._parts.hostname ? "/" : "");
                    return e
                      ? (this._parts.urn ? a.decodeUrnPath : a.decodePath)(r)
                      : r;
                  }
                  return (
                    this._parts.urn
                      ? (this._parts.path = e ? a.recodeUrnPath(e) : "")
                      : (this._parts.path = e ? a.recodePath(e) : "/"),
                    this.build(!t),
                    this
                  );
                }),
                (s.path = s.pathname),
                (s.href = function (e, t) {
                  var r;
                  if (void 0 === e) return this.toString();
                  (this._string = ""), (this._parts = a._parts());
                  var o = e instanceof a,
                    n =
                      "object" === i(e) && (e.hostname || e.path || e.pathname);
                  if (
                    (e.nodeName &&
                      ((e = e[a.getDomAttribute(e)] || ""), (n = !1)),
                    !o && n && void 0 !== e.pathname && (e = e.toString()),
                    "string" == typeof e || e instanceof String)
                  )
                    this._parts = a.parse(String(e), this._parts);
                  else {
                    if (!o && !n) throw new TypeError("invalid input");
                    var s = o ? e._parts : e;
                    for (r in s)
                      "query" !== r &&
                        c.call(this._parts, r) &&
                        (this._parts[r] = s[r]);
                    s.query && this.query(s.query, !1);
                  }
                  return this.build(!t), this;
                }),
                (s.is = function (e) {
                  var t = !1,
                    o = !1,
                    n = !1,
                    i = !1,
                    s = !1,
                    c = !1,
                    l = !1,
                    u = !this._parts.urn;
                  switch (
                    (this._parts.hostname &&
                      ((u = !1),
                      (o = a.ip4_expression.test(this._parts.hostname)),
                      (n = a.ip6_expression.test(this._parts.hostname)),
                      (s =
                        (i = !(t = o || n)) &&
                        r &&
                        r.has(this._parts.hostname)),
                      (c = i && a.idn_expression.test(this._parts.hostname)),
                      (l =
                        i && a.punycode_expression.test(this._parts.hostname))),
                    e.toLowerCase())
                  ) {
                    case "relative":
                      return u;
                    case "absolute":
                      return !u;
                    case "domain":
                    case "name":
                      return i;
                    case "sld":
                      return s;
                    case "ip":
                      return t;
                    case "ip4":
                    case "ipv4":
                    case "inet4":
                      return o;
                    case "ip6":
                    case "ipv6":
                    case "inet6":
                      return n;
                    case "idn":
                      return c;
                    case "url":
                      return !this._parts.urn;
                    case "urn":
                      return !!this._parts.urn;
                    case "punycode":
                      return l;
                  }
                  return null;
                });
              var v = s.protocol,
                C = s.port,
                S = s.hostname;
              (s.protocol = function (e, t) {
                if (
                  e &&
                  !(e = e.replace(/:(\/\/)?$/, "")).match(a.protocol_expression)
                )
                  throw new TypeError(
                    'Protocol "' +
                      e +
                      "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]"
                  );
                return v.call(this, e, t);
              }),
                (s.scheme = s.protocol),
                (s.port = function (e, t) {
                  return this._parts.urn
                    ? void 0 === e
                      ? ""
                      : this
                    : (void 0 !== e &&
                        (0 === e && (e = null),
                        e &&
                          (":" === (e += "").charAt(0) && (e = e.substring(1)),
                          a.ensureValidPort(e))),
                      C.call(this, e, t));
                }),
                (s.hostname = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if (void 0 !== e) {
                    var r = {
                      preventInvalidHostname:
                        this._parts.preventInvalidHostname,
                    };
                    if ("/" !== a.parseHost(e, r))
                      throw new TypeError(
                        'Hostname "' +
                          e +
                          '" contains characters other than [A-Z0-9.-]'
                      );
                    (e = r.hostname),
                      this._parts.preventInvalidHostname &&
                        a.ensureValidHostname(e, this._parts.protocol);
                  }
                  return S.call(this, e, t);
                }),
                (s.origin = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if (void 0 === e) {
                    var r = this.protocol();
                    return this.authority()
                      ? (r ? r + "://" : "") + this.authority()
                      : "";
                  }
                  var o = a(e);
                  return (
                    this.protocol(o.protocol())
                      .authority(o.authority())
                      .build(!t),
                    this
                  );
                }),
                (s.host = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if (void 0 === e)
                    return this._parts.hostname ? a.buildHost(this._parts) : "";
                  if ("/" !== a.parseHost(e, this._parts))
                    throw new TypeError(
                      'Hostname "' +
                        e +
                        '" contains characters other than [A-Z0-9.-]'
                    );
                  return this.build(!t), this;
                }),
                (s.authority = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if (void 0 === e)
                    return this._parts.hostname
                      ? a.buildAuthority(this._parts)
                      : "";
                  if ("/" !== a.parseAuthority(e, this._parts))
                    throw new TypeError(
                      'Hostname "' +
                        e +
                        '" contains characters other than [A-Z0-9.-]'
                    );
                  return this.build(!t), this;
                }),
                (s.userinfo = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if (void 0 === e) {
                    var r = a.buildUserinfo(this._parts);
                    return r ? r.substring(0, r.length - 1) : r;
                  }
                  return (
                    "@" !== e[e.length - 1] && (e += "@"),
                    a.parseUserinfo(e, this._parts),
                    this.build(!t),
                    this
                  );
                }),
                (s.resource = function (e, t) {
                  var r;
                  return void 0 === e
                    ? this.path() + this.search() + this.hash()
                    : ((r = a.parse(e)),
                      (this._parts.path = r.path),
                      (this._parts.query = r.query),
                      (this._parts.fragment = r.fragment),
                      this.build(!t),
                      this);
                }),
                (s.subdomain = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if (void 0 === e) {
                    if (!this._parts.hostname || this.is("IP")) return "";
                    var r =
                      this._parts.hostname.length - this.domain().length - 1;
                    return this._parts.hostname.substring(0, r) || "";
                  }
                  var o = this._parts.hostname.length - this.domain().length,
                    n = this._parts.hostname.substring(0, o),
                    i = new RegExp("^" + l(n));
                  if (
                    (e && "." !== e.charAt(e.length - 1) && (e += "."),
                    -1 !== e.indexOf(":"))
                  )
                    throw new TypeError("Domains cannot contain colons");
                  return (
                    e && a.ensureValidHostname(e, this._parts.protocol),
                    (this._parts.hostname = this._parts.hostname.replace(i, e)),
                    this.build(!t),
                    this
                  );
                }),
                (s.domain = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if (
                    ("boolean" == typeof e && ((t = e), (e = void 0)),
                    void 0 === e)
                  ) {
                    if (!this._parts.hostname || this.is("IP")) return "";
                    var r = this._parts.hostname.match(/\./g);
                    if (r && r.length < 2) return this._parts.hostname;
                    var o =
                      this._parts.hostname.length - this.tld(t).length - 1;
                    return (
                      (o = this._parts.hostname.lastIndexOf(".", o - 1) + 1),
                      this._parts.hostname.substring(o) || ""
                    );
                  }
                  if (!e) throw new TypeError("cannot set domain empty");
                  if (-1 !== e.indexOf(":"))
                    throw new TypeError("Domains cannot contain colons");
                  if (
                    (a.ensureValidHostname(e, this._parts.protocol),
                    !this._parts.hostname || this.is("IP"))
                  )
                    this._parts.hostname = e;
                  else {
                    var n = new RegExp(l(this.domain()) + "$");
                    this._parts.hostname = this._parts.hostname.replace(n, e);
                  }
                  return this.build(!t), this;
                }),
                (s.tld = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if (
                    ("boolean" == typeof e && ((t = e), (e = void 0)),
                    void 0 === e)
                  ) {
                    if (!this._parts.hostname || this.is("IP")) return "";
                    var o = this._parts.hostname.lastIndexOf("."),
                      n = this._parts.hostname.substring(o + 1);
                    return (
                      (!0 !== t &&
                        r &&
                        r.list[n.toLowerCase()] &&
                        r.get(this._parts.hostname)) ||
                      n
                    );
                  }
                  var a;
                  if (!e) throw new TypeError("cannot set TLD empty");
                  if (e.match(/[^a-zA-Z0-9-]/)) {
                    if (!r || !r.is(e))
                      throw new TypeError(
                        'TLD "' +
                          e +
                          '" contains characters other than [A-Z0-9]'
                      );
                    (a = new RegExp(l(this.tld()) + "$")),
                      (this._parts.hostname = this._parts.hostname.replace(
                        a,
                        e
                      ));
                  } else {
                    if (!this._parts.hostname || this.is("IP"))
                      throw new ReferenceError(
                        "cannot set TLD on non-domain host"
                      );
                    (a = new RegExp(l(this.tld()) + "$")),
                      (this._parts.hostname = this._parts.hostname.replace(
                        a,
                        e
                      ));
                  }
                  return this.build(!t), this;
                }),
                (s.directory = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if (void 0 === e || !0 === e) {
                    if (!this._parts.path && !this._parts.hostname) return "";
                    if ("/" === this._parts.path) return "/";
                    var r =
                        this._parts.path.length - this.filename().length - 1,
                      o =
                        this._parts.path.substring(0, r) ||
                        (this._parts.hostname ? "/" : "");
                    return e ? a.decodePath(o) : o;
                  }
                  var n = this._parts.path.length - this.filename().length,
                    i = this._parts.path.substring(0, n),
                    s = new RegExp("^" + l(i));
                  return (
                    this.is("relative") ||
                      (e || (e = "/"), "/" !== e.charAt(0) && (e = "/" + e)),
                    e && "/" !== e.charAt(e.length - 1) && (e += "/"),
                    (e = a.recodePath(e)),
                    (this._parts.path = this._parts.path.replace(s, e)),
                    this.build(!t),
                    this
                  );
                }),
                (s.filename = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if ("string" != typeof e) {
                    if (!this._parts.path || "/" === this._parts.path)
                      return "";
                    var r = this._parts.path.lastIndexOf("/"),
                      o = this._parts.path.substring(r + 1);
                    return e ? a.decodePathSegment(o) : o;
                  }
                  var n = !1;
                  "/" === e.charAt(0) && (e = e.substring(1)),
                    e.match(/\.?\//) && (n = !0);
                  var i = new RegExp(l(this.filename()) + "$");
                  return (
                    (e = a.recodePath(e)),
                    (this._parts.path = this._parts.path.replace(i, e)),
                    n ? this.normalizePath(t) : this.build(!t),
                    this
                  );
                }),
                (s.suffix = function (e, t) {
                  if (this._parts.urn) return void 0 === e ? "" : this;
                  if (void 0 === e || !0 === e) {
                    if (!this._parts.path || "/" === this._parts.path)
                      return "";
                    var r,
                      o,
                      n = this.filename(),
                      i = n.lastIndexOf(".");
                    return -1 === i
                      ? ""
                      : ((r = n.substring(i + 1)),
                        (o = /^[a-z0-9%]+$/i.test(r) ? r : ""),
                        e ? a.decodePathSegment(o) : o);
                  }
                  "." === e.charAt(0) && (e = e.substring(1));
                  var s,
                    c = this.suffix();
                  if (c)
                    s = e
                      ? new RegExp(l(c) + "$")
                      : new RegExp(l("." + c) + "$");
                  else {
                    if (!e) return this;
                    this._parts.path += "." + a.recodePath(e);
                  }
                  return (
                    s &&
                      ((e = a.recodePath(e)),
                      (this._parts.path = this._parts.path.replace(s, e))),
                    this.build(!t),
                    this
                  );
                }),
                (s.segment = function (e, t, r) {
                  var o = this._parts.urn ? ":" : "/",
                    n = this.path(),
                    a = "/" === n.substring(0, 1),
                    i = n.split(o);
                  if (
                    (void 0 !== e &&
                      "number" != typeof e &&
                      ((r = t), (t = e), (e = void 0)),
                    void 0 !== e && "number" != typeof e)
                  )
                    throw new Error(
                      'Bad segment "' + e + '", must be 0-based integer'
                    );
                  if (
                    (a && i.shift(),
                    e < 0 && (e = Math.max(i.length + e, 0)),
                    void 0 === t)
                  )
                    return void 0 === e ? i : i[e];
                  if (null === e || void 0 === i[e])
                    if (p(t)) {
                      i = [];
                      for (var s = 0, c = t.length; s < c; s++)
                        (t[s].length || (i.length && i[i.length - 1].length)) &&
                          (i.length && !i[i.length - 1].length && i.pop(),
                          i.push(f(t[s])));
                    } else
                      (t || "string" == typeof t) &&
                        ((t = f(t)),
                        "" === i[i.length - 1]
                          ? (i[i.length - 1] = t)
                          : i.push(t));
                  else t ? (i[e] = f(t)) : i.splice(e, 1);
                  return a && i.unshift(""), this.path(i.join(o), r);
                }),
                (s.segmentCoded = function (e, t, r) {
                  var o, n, i;
                  if (
                    ("number" != typeof e && ((r = t), (t = e), (e = void 0)),
                    void 0 === t)
                  ) {
                    if (p((o = this.segment(e, t, r))))
                      for (n = 0, i = o.length; n < i; n++)
                        o[n] = a.decode(o[n]);
                    else o = void 0 !== o ? a.decode(o) : void 0;
                    return o;
                  }
                  if (p(t))
                    for (n = 0, i = t.length; n < i; n++) t[n] = a.encode(t[n]);
                  else
                    t =
                      "string" == typeof t || t instanceof String
                        ? a.encode(t)
                        : t;
                  return this.segment(e, t, r);
                });
              var T = s.query;
              return (
                (s.query = function (e, t) {
                  if (!0 === e)
                    return a.parseQuery(
                      this._parts.query,
                      this._parts.escapeQuerySpace
                    );
                  if ("function" == typeof e) {
                    var r = a.parseQuery(
                        this._parts.query,
                        this._parts.escapeQuerySpace
                      ),
                      o = e.call(this, r);
                    return (
                      (this._parts.query = a.buildQuery(
                        o || r,
                        this._parts.duplicateQueryParameters,
                        this._parts.escapeQuerySpace
                      )),
                      this.build(!t),
                      this
                    );
                  }
                  return void 0 !== e && "string" != typeof e
                    ? ((this._parts.query = a.buildQuery(
                        e,
                        this._parts.duplicateQueryParameters,
                        this._parts.escapeQuerySpace
                      )),
                      this.build(!t),
                      this)
                    : T.call(this, e, t);
                }),
                (s.setQuery = function (e, t, r) {
                  var o = a.parseQuery(
                    this._parts.query,
                    this._parts.escapeQuerySpace
                  );
                  if ("string" == typeof e || e instanceof String)
                    o[e] = void 0 !== t ? t : null;
                  else {
                    if ("object" !== i(e))
                      throw new TypeError(
                        "URI.addQuery() accepts an object, string as the name parameter"
                      );
                    for (var n in e) c.call(e, n) && (o[n] = e[n]);
                  }
                  return (
                    (this._parts.query = a.buildQuery(
                      o,
                      this._parts.duplicateQueryParameters,
                      this._parts.escapeQuerySpace
                    )),
                    "string" != typeof e && (r = t),
                    this.build(!r),
                    this
                  );
                }),
                (s.addQuery = function (e, t, r) {
                  var o = a.parseQuery(
                    this._parts.query,
                    this._parts.escapeQuerySpace
                  );
                  return (
                    a.addQuery(o, e, void 0 === t ? null : t),
                    (this._parts.query = a.buildQuery(
                      o,
                      this._parts.duplicateQueryParameters,
                      this._parts.escapeQuerySpace
                    )),
                    "string" != typeof e && (r = t),
                    this.build(!r),
                    this
                  );
                }),
                (s.removeQuery = function (e, t, r) {
                  var o = a.parseQuery(
                    this._parts.query,
                    this._parts.escapeQuerySpace
                  );
                  return (
                    a.removeQuery(o, e, t),
                    (this._parts.query = a.buildQuery(
                      o,
                      this._parts.duplicateQueryParameters,
                      this._parts.escapeQuerySpace
                    )),
                    "string" != typeof e && (r = t),
                    this.build(!r),
                    this
                  );
                }),
                (s.hasQuery = function (e, t, r) {
                  var o = a.parseQuery(
                    this._parts.query,
                    this._parts.escapeQuerySpace
                  );
                  return a.hasQuery(o, e, t, r);
                }),
                (s.setSearch = s.setQuery),
                (s.addSearch = s.addQuery),
                (s.removeSearch = s.removeQuery),
                (s.hasSearch = s.hasQuery),
                (s.normalize = function () {
                  return this._parts.urn
                    ? this.normalizeProtocol(!1)
                        .normalizePath(!1)
                        .normalizeQuery(!1)
                        .normalizeFragment(!1)
                        .build()
                    : this.normalizeProtocol(!1)
                        .normalizeHostname(!1)
                        .normalizePort(!1)
                        .normalizePath(!1)
                        .normalizeQuery(!1)
                        .normalizeFragment(!1)
                        .build();
                }),
                (s.normalizeProtocol = function (e) {
                  return (
                    "string" == typeof this._parts.protocol &&
                      ((this._parts.protocol =
                        this._parts.protocol.toLowerCase()),
                      this.build(!e)),
                    this
                  );
                }),
                (s.normalizeHostname = function (r) {
                  return (
                    this._parts.hostname &&
                      (this.is("IDN") && e
                        ? (this._parts.hostname = e.toASCII(
                            this._parts.hostname
                          ))
                        : this.is("IPv6") &&
                          t &&
                          (this._parts.hostname = t.best(this._parts.hostname)),
                      (this._parts.hostname =
                        this._parts.hostname.toLowerCase()),
                      this.build(!r)),
                    this
                  );
                }),
                (s.normalizePort = function (e) {
                  return (
                    "string" == typeof this._parts.protocol &&
                      this._parts.port ===
                        a.defaultPorts[this._parts.protocol] &&
                      ((this._parts.port = null), this.build(!e)),
                    this
                  );
                }),
                (s.normalizePath = function (e) {
                  var t,
                    r = this._parts.path;
                  if (!r) return this;
                  if (this._parts.urn)
                    return (
                      (this._parts.path = a.recodeUrnPath(this._parts.path)),
                      this.build(!e),
                      this
                    );
                  if ("/" === this._parts.path) return this;
                  var o,
                    n,
                    i = "";
                  for (
                    "/" !== (r = a.recodePath(r)).charAt(0) &&
                      ((t = !0), (r = "/" + r)),
                      ("/.." !== r.slice(-3) && "/." !== r.slice(-2)) ||
                        (r += "/"),
                      r = r
                        .replace(/(\/(\.\/)+)|(\/\.$)/g, "/")
                        .replace(/\/{2,}/g, "/"),
                      t &&
                        (i = r.substring(1).match(/^(\.\.\/)+/) || "") &&
                        (i = i[0]);
                    -1 !== (o = r.search(/\/\.\.(\/|$)/));

                  )
                    0 !== o
                      ? (-1 === (n = r.substring(0, o).lastIndexOf("/")) &&
                          (n = o),
                        (r = r.substring(0, n) + r.substring(o + 3)))
                      : (r = r.substring(3));
                  return (
                    t && this.is("relative") && (r = i + r.substring(1)),
                    (this._parts.path = r),
                    this.build(!e),
                    this
                  );
                }),
                (s.normalizePathname = s.normalizePath),
                (s.normalizeQuery = function (e) {
                  return (
                    "string" == typeof this._parts.query &&
                      (this._parts.query.length
                        ? this.query(
                            a.parseQuery(
                              this._parts.query,
                              this._parts.escapeQuerySpace
                            )
                          )
                        : (this._parts.query = null),
                      this.build(!e)),
                    this
                  );
                }),
                (s.normalizeFragment = function (e) {
                  return (
                    this._parts.fragment ||
                      ((this._parts.fragment = null), this.build(!e)),
                    this
                  );
                }),
                (s.normalizeSearch = s.normalizeQuery),
                (s.normalizeHash = s.normalizeFragment),
                (s.iso8859 = function () {
                  var e = a.encode,
                    t = a.decode;
                  (a.encode = escape), (a.decode = decodeURIComponent);
                  try {
                    this.normalize();
                  } finally {
                    (a.encode = e), (a.decode = t);
                  }
                  return this;
                }),
                (s.unicode = function () {
                  var e = a.encode,
                    t = a.decode;
                  (a.encode = g), (a.decode = unescape);
                  try {
                    this.normalize();
                  } finally {
                    (a.encode = e), (a.decode = t);
                  }
                  return this;
                }),
                (s.readable = function () {
                  var t = this.clone();
                  t.username("").password("").normalize();
                  var r = "";
                  if (
                    (t._parts.protocol && (r += t._parts.protocol + "://"),
                    t._parts.hostname &&
                      (t.is("punycode") && e
                        ? ((r += e.toUnicode(t._parts.hostname)),
                          t._parts.port && (r += ":" + t._parts.port))
                        : (r += t.host())),
                    t._parts.hostname &&
                      t._parts.path &&
                      "/" !== t._parts.path.charAt(0) &&
                      (r += "/"),
                    (r += t.path(!0)),
                    t._parts.query)
                  ) {
                    for (
                      var o = "",
                        n = 0,
                        i = t._parts.query.split("&"),
                        s = i.length;
                      n < s;
                      n++
                    ) {
                      var c = (i[n] || "").split("=");
                      (o +=
                        "&" +
                        a
                          .decodeQuery(c[0], this._parts.escapeQuerySpace)
                          .replace(/&/g, "%26")),
                        void 0 !== c[1] &&
                          (o +=
                            "=" +
                            a
                              .decodeQuery(c[1], this._parts.escapeQuerySpace)
                              .replace(/&/g, "%26"));
                    }
                    r += "?" + o.substring(1);
                  }
                  return r + a.decodeQuery(t.hash(), !0);
                }),
                (s.absoluteTo = function (e) {
                  var t,
                    r,
                    o,
                    n = this.clone(),
                    i = [
                      "protocol",
                      "username",
                      "password",
                      "hostname",
                      "port",
                    ];
                  if (this._parts.urn)
                    throw new Error(
                      "URNs do not have any generally defined hierarchical components"
                    );
                  if ((e instanceof a || (e = new a(e)), n._parts.protocol))
                    return n;
                  if (
                    ((n._parts.protocol = e._parts.protocol),
                    this._parts.hostname)
                  )
                    return n;
                  for (r = 0; (o = i[r]); r++) n._parts[o] = e._parts[o];
                  return (
                    n._parts.path
                      ? (".." === n._parts.path.substring(-2) &&
                          (n._parts.path += "/"),
                        "/" !== n.path().charAt(0) &&
                          ((t =
                            (t = e.directory()) ||
                            (0 === e.path().indexOf("/") ? "/" : "")),
                          (n._parts.path = (t ? t + "/" : "") + n._parts.path),
                          n.normalizePath()))
                      : ((n._parts.path = e._parts.path),
                        n._parts.query || (n._parts.query = e._parts.query)),
                    n.build(),
                    n
                  );
                }),
                (s.relativeTo = function (e) {
                  var t,
                    r,
                    o,
                    n,
                    i,
                    s = this.clone().normalize();
                  if (s._parts.urn)
                    throw new Error(
                      "URNs do not have any generally defined hierarchical components"
                    );
                  if (
                    ((e = new a(e).normalize()),
                    (t = s._parts),
                    (r = e._parts),
                    (n = s.path()),
                    (i = e.path()),
                    "/" !== n.charAt(0))
                  )
                    throw new Error("URI is already relative");
                  if ("/" !== i.charAt(0))
                    throw new Error(
                      "Cannot calculate a URI relative to another relative URI"
                    );
                  if (
                    (t.protocol === r.protocol && (t.protocol = null),
                    t.username !== r.username || t.password !== r.password)
                  )
                    return s.build();
                  if (
                    null !== t.protocol ||
                    null !== t.username ||
                    null !== t.password
                  )
                    return s.build();
                  if (t.hostname !== r.hostname || t.port !== r.port)
                    return s.build();
                  if (((t.hostname = null), (t.port = null), n === i))
                    return (t.path = ""), s.build();
                  if (!(o = a.commonPath(n, i))) return s.build();
                  var c = r.path
                    .substring(o.length)
                    .replace(/[^\/]*$/, "")
                    .replace(/.*?\//g, "../");
                  return (
                    (t.path = c + t.path.substring(o.length) || "./"), s.build()
                  );
                }),
                (s.equals = function (e) {
                  var t,
                    r,
                    o,
                    n,
                    i,
                    s = this.clone(),
                    l = new a(e),
                    u = {};
                  if (
                    (s.normalize(),
                    l.normalize(),
                    s.toString() === l.toString())
                  )
                    return !0;
                  if (
                    ((o = s.query()),
                    (n = l.query()),
                    s.query(""),
                    l.query(""),
                    s.toString() !== l.toString())
                  )
                    return !1;
                  if (o.length !== n.length) return !1;
                  for (i in ((t = a.parseQuery(
                    o,
                    this._parts.escapeQuerySpace
                  )),
                  (r = a.parseQuery(n, this._parts.escapeQuerySpace)),
                  t))
                    if (c.call(t, i)) {
                      if (p(t[i])) {
                        if (!m(t[i], r[i])) return !1;
                      } else if (t[i] !== r[i]) return !1;
                      u[i] = !0;
                    }
                  for (i in r) if (c.call(r, i) && !u[i]) return !1;
                  return !0;
                }),
                (s.preventInvalidHostname = function (e) {
                  return (this._parts.preventInvalidHostname = !!e), this;
                }),
                (s.duplicateQueryParameters = function (e) {
                  return (this._parts.duplicateQueryParameters = !!e), this;
                }),
                (s.escapeQuerySpace = function (e) {
                  return (this._parts.escapeQuerySpace = !!e), this;
                }),
                a
              );
            });
        },
        2456: function (e, t, r) {
          var o;
          function n(e) {
            return (
              (n =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              n(e)
            );
          }
          (e = r.nmd(e)),
            (function (a) {
              var i = "object" == n(t) && t && !t.nodeType && t,
                s = "object" == n(e) && e && !e.nodeType && e,
                c = "object" == (void 0 === r.g ? "undefined" : n(r.g)) && r.g;
              (c.global !== c && c.window !== c && c.self !== c) || (a = c);
              var l,
                u,
                p = 2147483647,
                d = 36,
                h = /^xn--/,
                m = /[^\x20-\x7E]/,
                f = /[\x2E\u3002\uFF0E\uFF61]/g,
                y = {
                  overflow: "Overflow: input needs wider integers to process",
                  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                  "invalid-input": "Invalid input",
                },
                g = Math.floor,
                A = String.fromCharCode;
              function x(e) {
                throw new RangeError(y[e]);
              }
              function b(e, t) {
                for (var r = e.length, o = []; r--; ) o[r] = t(e[r]);
                return o;
              }
              function w(e, t) {
                var r = e.split("@"),
                  o = "";
                return (
                  r.length > 1 && ((o = r[0] + "@"), (e = r[1])),
                  o + b((e = e.replace(f, ".")).split("."), t).join(".")
                );
              }
              function k(e) {
                for (var t, r, o = [], n = 0, a = e.length; n < a; )
                  (t = e.charCodeAt(n++)) >= 55296 && t <= 56319 && n < a
                    ? 56320 == (64512 & (r = e.charCodeAt(n++)))
                      ? o.push(((1023 & t) << 10) + (1023 & r) + 65536)
                      : (o.push(t), n--)
                    : o.push(t);
                return o;
              }
              function P(e) {
                return b(e, function (e) {
                  var t = "";
                  return (
                    e > 65535 &&
                      ((t += A((((e -= 65536) >>> 10) & 1023) | 55296)),
                      (e = 56320 | (1023 & e))),
                    t + A(e)
                  );
                }).join("");
              }
              function v(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
              }
              function C(e, t, r) {
                var o = 0;
                for (
                  e = r ? g(e / 700) : e >> 1, e += g(e / t);
                  e > 455;
                  o += d
                )
                  e = g(e / 35);
                return g(o + (36 * e) / (e + 38));
              }
              function S(e) {
                var t,
                  r,
                  o,
                  n,
                  a,
                  i,
                  s,
                  c,
                  l,
                  u,
                  h,
                  m = [],
                  f = e.length,
                  y = 0,
                  A = 128,
                  b = 72;
                for ((r = e.lastIndexOf("-")) < 0 && (r = 0), o = 0; o < r; ++o)
                  e.charCodeAt(o) >= 128 && x("not-basic"),
                    m.push(e.charCodeAt(o));
                for (n = r > 0 ? r + 1 : 0; n < f; ) {
                  for (
                    a = y, i = 1, s = d;
                    n >= f && x("invalid-input"),
                      ((c =
                        (h = e.charCodeAt(n++)) - 48 < 10
                          ? h - 22
                          : h - 65 < 26
                          ? h - 65
                          : h - 97 < 26
                          ? h - 97
                          : d) >= d ||
                        c > g((p - y) / i)) &&
                        x("overflow"),
                      (y += c * i),
                      !(c < (l = s <= b ? 1 : s >= b + 26 ? 26 : s - b));
                    s += d
                  )
                    i > g(p / (u = d - l)) && x("overflow"), (i *= u);
                  (b = C(y - a, (t = m.length + 1), 0 == a)),
                    g(y / t) > p - A && x("overflow"),
                    (A += g(y / t)),
                    (y %= t),
                    m.splice(y++, 0, A);
                }
                return P(m);
              }
              function T(e) {
                var t,
                  r,
                  o,
                  n,
                  a,
                  i,
                  s,
                  c,
                  l,
                  u,
                  h,
                  m,
                  f,
                  y,
                  b,
                  w = [];
                for (
                  m = (e = k(e)).length, t = 128, r = 0, a = 72, i = 0;
                  i < m;
                  ++i
                )
                  (h = e[i]) < 128 && w.push(A(h));
                for (o = n = w.length, n && w.push("-"); o < m; ) {
                  for (s = p, i = 0; i < m; ++i)
                    (h = e[i]) >= t && h < s && (s = h);
                  for (
                    s - t > g((p - r) / (f = o + 1)) && x("overflow"),
                      r += (s - t) * f,
                      t = s,
                      i = 0;
                    i < m;
                    ++i
                  )
                    if (((h = e[i]) < t && ++r > p && x("overflow"), h == t)) {
                      for (
                        c = r, l = d;
                        !(c < (u = l <= a ? 1 : l >= a + 26 ? 26 : l - a));
                        l += d
                      )
                        (b = c - u),
                          (y = d - u),
                          w.push(A(v(u + (b % y), 0))),
                          (c = g(b / y));
                      w.push(A(v(c, 0))), (a = C(r, f, o == n)), (r = 0), ++o;
                    }
                  ++r, ++t;
                }
                return w.join("");
              }
              if (
                ((l = {
                  version: "1.3.2",
                  ucs2: { decode: k, encode: P },
                  decode: S,
                  encode: T,
                  toASCII: function (e) {
                    return w(e, function (e) {
                      return m.test(e) ? "xn--" + T(e) : e;
                    });
                  },
                  toUnicode: function (e) {
                    return w(e, function (e) {
                      return h.test(e) ? S(e.slice(4).toLowerCase()) : e;
                    });
                  },
                }),
                "object" == n(r.amdO) && r.amdO)
              )
                void 0 ===
                  (o = function () {
                    return l;
                  }.call(t, r, t, e)) || (e.exports = o);
              else if (i && s)
                if (e.exports == i) s.exports = l;
                else for (u in l) l.hasOwnProperty(u) && (i[u] = l[u]);
              else a.punycode = l;
            })(this);
        },
        1062: function (e, t) {
          (t.AclPrivate = "private"),
            (t.AclPublicRead = "public-read"),
            (t.AclPublicReadWrite = "public-read-write"),
            (t.AclPublicReadDelivered = "public-read-delivered"),
            (t.AclPublicReadWriteDelivered = "public-read-write-delivered"),
            (t.AclAuthenticatedRead = "authenticated-read"),
            (t.AclBucketOwnerRead = "bucket-owner-read"),
            (t.AclBucketOwnerFullControl = "bucket-owner-full-control"),
            (t.AclLogDeliveryWrite = "log-delivery-write"),
            (t.StorageClassStandard = "STANDARD"),
            (t.StorageClassWarm = "WARM"),
            (t.StorageClassCold = "COLD"),
            (t.PermissionRead = "READ"),
            (t.PermissionWrite = "WRITE"),
            (t.PermissionReadAcp = "READ_ACP"),
            (t.PermissionWriteAcp = "WRITE_ACP"),
            (t.PermissionFullControl = "FULL_CONTROL"),
            (t.GroupAllUsers = "AllUsers"),
            (t.GroupAuthenticatedUsers = "AuthenticatedUsers"),
            (t.GroupLogDelivery = "LogDelivery"),
            (t.RestoreTierExpedited = "Expedited"),
            (t.RestoreTierStandard = "Standard"),
            (t.RestoreTierBulk = "Bulk"),
            (t.GranteeGroup = "Group"),
            (t.GranteeUser = "CanonicalUser"),
            (t.CopyMetadata = "COPY"),
            (t.ReplaceMetadata = "REPLACE"),
            (t.EventObjectCreatedAll = "ObjectCreated:*"),
            (t.EventObjectCreatedPut = "ObjectCreated:Put"),
            (t.EventObjectCreatedPost = "ObjectCreated:Post"),
            (t.EventObjectCreatedCopy = "ObjectCreated:Copy"),
            (t.EventObjectCreatedCompleteMultipartUpload =
              "ObjectCreated:CompleteMultipartUpload"),
            (t.EventObjectRemovedAll = "ObjectRemoved:*"),
            (t.EventObjectRemovedDelete = "ObjectRemoved:Delete"),
            (t.EventObjectRemovedDeleteMarkerCreated =
              "ObjectRemoved:DeleteMarkerCreated");
        },
      },
      o = {};
    function n(e) {
      var t = o[e];
      if (void 0 !== t) return t.exports;
      var a = (o[e] = { id: e, loaded: !1, exports: {} });
      return r[e].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports;
    }
    (n.amdO = {}),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      }),
      (t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          }),
      (n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ("object" == typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" == typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & o && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach(function (e) {
            i[e] = function () {
              return r[e];
            };
          });
        return (
          (i.default = function () {
            return r;
          }),
          n.d(a, i),
          a
        );
      }),
      (n.d = function (e, t) {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.nmd = function (e) {
        return (e.paths = []), e.children || (e.children = []), e;
      });
    var a = {};
    return (
      (function () {
        "use strict";
        n.d(a, {
          default: function () {
            return $r;
          },
        });
        var e = n(5016),
          t = n.n(e),
          r = n(2990),
          o = n.n(r);
        function i(e) {
          return (
            (i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            i(e)
          );
        }
        function s(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && c(e, t);
        }
        function c(e, t) {
          return (
            (c =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            c(e, t)
          );
        }
        function l(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var r,
              o = p(e);
            if (t) {
              var n = p(this).constructor;
              r = Reflect.construct(o, arguments, n);
            } else r = o.apply(this, arguments);
            return u(this, r);
          };
        }
        function u(e, t) {
          if (t && ("object" === i(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        }
        function p(e) {
          return (
            (p = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            p(e)
          );
        }
        function d(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function m(e, t, r) {
          return (
            t && h(e.prototype, t),
            r && h(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        var f =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        function y(e, t, r, o) {
          var n,
            a,
            i,
            s = t || [0],
            c = (r = r || 0) >>> 3,
            l = -1 === o ? 3 : 0;
          for (n = 0; n < e.length; n += 1)
            (a = (i = n + c) >>> 2),
              s.length <= a && s.push(0),
              (s[a] |= e[n] << (8 * (l + o * (i % 4))));
          return { value: s, binLen: 8 * e.length + r };
        }
        function g(e, t, r) {
          switch (t) {
            case "UTF8":
            case "UTF16BE":
            case "UTF16LE":
              break;
            default:
              throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE");
          }
          switch (e) {
            case "HEX":
              return function (e, t, o) {
                return (function (e, t, r, o) {
                  var n, a, i, s;
                  if (0 != e.length % 2)
                    throw new Error(
                      "String of HEX type must be in byte increments"
                    );
                  var c = t || [0],
                    l = (r = r || 0) >>> 3,
                    u = -1 === o ? 3 : 0;
                  for (n = 0; n < e.length; n += 2) {
                    if (((a = parseInt(e.substr(n, 2), 16)), isNaN(a)))
                      throw new Error(
                        "String of HEX type contains invalid characters"
                      );
                    for (i = (s = (n >>> 1) + l) >>> 2; c.length <= i; )
                      c.push(0);
                    c[i] |= a << (8 * (u + o * (s % 4)));
                  }
                  return { value: c, binLen: 4 * e.length + r };
                })(e, t, o, r);
              };
            case "TEXT":
              return function (e, o, n) {
                return (function (e, t, r, o, n) {
                  var a,
                    i,
                    s,
                    c,
                    l,
                    u,
                    p,
                    d,
                    h = 0,
                    m = r || [0],
                    f = (o = o || 0) >>> 3;
                  if ("UTF8" === t)
                    for (p = -1 === n ? 3 : 0, s = 0; s < e.length; s += 1)
                      for (
                        i = [],
                          128 > (a = e.charCodeAt(s))
                            ? i.push(a)
                            : 2048 > a
                            ? (i.push(192 | (a >>> 6)), i.push(128 | (63 & a)))
                            : 55296 > a || 57344 <= a
                            ? i.push(
                                224 | (a >>> 12),
                                128 | ((a >>> 6) & 63),
                                128 | (63 & a)
                              )
                            : ((s += 1),
                              (a =
                                65536 +
                                (((1023 & a) << 10) |
                                  (1023 & e.charCodeAt(s)))),
                              i.push(
                                240 | (a >>> 18),
                                128 | ((a >>> 12) & 63),
                                128 | ((a >>> 6) & 63),
                                128 | (63 & a)
                              )),
                          c = 0;
                        c < i.length;
                        c += 1
                      ) {
                        for (l = (u = h + f) >>> 2; m.length <= l; ) m.push(0);
                        (m[l] |= i[c] << (8 * (p + n * (u % 4)))), (h += 1);
                      }
                  else
                    for (
                      p = -1 === n ? 2 : 0,
                        d =
                          ("UTF16LE" === t && 1 !== n) ||
                          ("UTF16LE" !== t && 1 === n),
                        s = 0;
                      s < e.length;
                      s += 1
                    ) {
                      for (
                        a = e.charCodeAt(s),
                          !0 === d && (a = ((c = 255 & a) << 8) | (a >>> 8)),
                          l = (u = h + f) >>> 2;
                        m.length <= l;

                      )
                        m.push(0);
                      (m[l] |= a << (8 * (p + n * (u % 4)))), (h += 2);
                    }
                  return { value: m, binLen: 8 * h + o };
                })(e, t, o, n, r);
              };
            case "B64":
              return function (e, t, o) {
                return (function (e, t, r, o) {
                  var n,
                    a,
                    i,
                    s,
                    c,
                    l,
                    u = 0,
                    p = t || [0],
                    d = (r = r || 0) >>> 3,
                    h = -1 === o ? 3 : 0,
                    m = e.indexOf("=");
                  if (-1 === e.search(/^[a-zA-Z0-9=+/]+$/))
                    throw new Error("Invalid character in base-64 string");
                  if (((e = e.replace(/=/g, "")), -1 !== m && m < e.length))
                    throw new Error("Invalid '=' found in base-64 string");
                  for (n = 0; n < e.length; n += 4) {
                    for (s = e.substr(n, 4), i = 0, a = 0; a < s.length; a += 1)
                      i |= f.indexOf(s.charAt(a)) << (18 - 6 * a);
                    for (a = 0; a < s.length - 1; a += 1) {
                      for (c = (l = u + d) >>> 2; p.length <= c; ) p.push(0);
                      (p[c] |=
                        ((i >>> (16 - 8 * a)) & 255) <<
                        (8 * (h + o * (l % 4)))),
                        (u += 1);
                    }
                  }
                  return { value: p, binLen: 8 * u + r };
                })(e, t, o, r);
              };
            case "BYTES":
              return function (e, t, o) {
                return (function (e, t, r, o) {
                  var n,
                    a,
                    i,
                    s,
                    c = t || [0],
                    l = (r = r || 0) >>> 3,
                    u = -1 === o ? 3 : 0;
                  for (a = 0; a < e.length; a += 1)
                    (n = e.charCodeAt(a)),
                      (i = (s = a + l) >>> 2),
                      c.length <= i && c.push(0),
                      (c[i] |= n << (8 * (u + o * (s % 4))));
                  return { value: c, binLen: 8 * e.length + r };
                })(e, t, o, r);
              };
            case "ARRAYBUFFER":
              try {
                new ArrayBuffer(0);
              } catch (e) {
                throw new Error(
                  "ARRAYBUFFER not supported by this environment"
                );
              }
              return function (e, t, o) {
                return (function (e, t, r, o) {
                  return y(new Uint8Array(e), t, r, o);
                })(e, t, o, r);
              };
            case "UINT8ARRAY":
              try {
                new Uint8Array(0);
              } catch (e) {
                throw new Error("UINT8ARRAY not supported by this environment");
              }
              return function (e, t, o) {
                return y(e, t, o, r);
              };
            default:
              throw new Error(
                "format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY"
              );
          }
        }
        function A(e, t, r, o) {
          switch (e) {
            case "HEX":
              return function (e) {
                return (function (e, t, r, o) {
                  var n,
                    a,
                    i = "",
                    s = t / 8,
                    c = -1 === r ? 3 : 0;
                  for (n = 0; n < s; n += 1)
                    (a = e[n >>> 2] >>> (8 * (c + r * (n % 4)))),
                      (i +=
                        "0123456789abcdef".charAt((a >>> 4) & 15) +
                        "0123456789abcdef".charAt(15 & a));
                  return o.outputUpper ? i.toUpperCase() : i;
                })(e, t, r, o);
              };
            case "B64":
              return function (e) {
                return (function (e, t, r, o) {
                  var n,
                    a,
                    i,
                    s,
                    c,
                    l = "",
                    u = t / 8,
                    p = -1 === r ? 3 : 0;
                  for (n = 0; n < u; n += 3)
                    for (
                      s = n + 1 < u ? e[(n + 1) >>> 2] : 0,
                        c = n + 2 < u ? e[(n + 2) >>> 2] : 0,
                        i =
                          (((e[n >>> 2] >>> (8 * (p + r * (n % 4)))) & 255) <<
                            16) |
                          (((s >>> (8 * (p + r * ((n + 1) % 4)))) & 255) << 8) |
                          ((c >>> (8 * (p + r * ((n + 2) % 4)))) & 255),
                        a = 0;
                      a < 4;
                      a += 1
                    )
                      l +=
                        8 * n + 6 * a <= t
                          ? f.charAt((i >>> (6 * (3 - a))) & 63)
                          : o.b64Pad;
                  return l;
                })(e, t, r, o);
              };
            case "BYTES":
              return function (e) {
                return (function (e, t, r) {
                  var o,
                    n,
                    a = "",
                    i = t / 8,
                    s = -1 === r ? 3 : 0;
                  for (o = 0; o < i; o += 1)
                    (n = (e[o >>> 2] >>> (8 * (s + r * (o % 4)))) & 255),
                      (a += String.fromCharCode(n));
                  return a;
                })(e, t, r);
              };
            case "ARRAYBUFFER":
              try {
                new ArrayBuffer(0);
              } catch (e) {
                throw new Error(
                  "ARRAYBUFFER not supported by this environment"
                );
              }
              return function (e) {
                return (function (e, t, r) {
                  var o,
                    n = t / 8,
                    a = new ArrayBuffer(n),
                    i = new Uint8Array(a),
                    s = -1 === r ? 3 : 0;
                  for (o = 0; o < n; o += 1)
                    i[o] = (e[o >>> 2] >>> (8 * (s + r * (o % 4)))) & 255;
                  return a;
                })(e, t, r);
              };
            case "UINT8ARRAY":
              try {
                new Uint8Array(0);
              } catch (e) {
                throw new Error("UINT8ARRAY not supported by this environment");
              }
              return function (e) {
                return (function (e, t, r) {
                  var o,
                    n = t / 8,
                    a = -1 === r ? 3 : 0,
                    i = new Uint8Array(n);
                  for (o = 0; o < n; o += 1)
                    i[o] = (e[o >>> 2] >>> (8 * (a + r * (o % 4)))) & 255;
                  return i;
                })(e, t, r);
              };
            default:
              throw new Error(
                "format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY"
              );
          }
        }
        var x = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ],
          b = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ],
          w = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ],
          k = "Chosen SHA variant is not supported";
        function P(e, t) {
          var r,
            o,
            n = e.binLen >>> 3,
            a = t.binLen >>> 3,
            i = n << 3,
            s = (4 - n) << 3;
          if (n % 4 != 0) {
            for (r = 0; r < a; r += 4)
              (o = (n + r) >>> 2),
                (e.value[o] |= t.value[r >>> 2] << i),
                e.value.push(0),
                (e.value[o + 1] |= t.value[r >>> 2] >>> s);
            return (
              (e.value.length << 2) - 4 >= a + n && e.value.pop(),
              { value: e.value, binLen: e.binLen + t.binLen }
            );
          }
          return {
            value: e.value.concat(t.value),
            binLen: e.binLen + t.binLen,
          };
        }
        function v(e) {
          var t = { outputUpper: !1, b64Pad: "=", outputLen: -1 },
            r = e || {},
            o = "Output length must be a multiple of 8";
          if (
            ((t.outputUpper = r.outputUpper || !1),
            r.b64Pad && (t.b64Pad = r.b64Pad),
            r.outputLen)
          ) {
            if (r.outputLen % 8 != 0) throw new Error(o);
            t.outputLen = r.outputLen;
          } else if (r.shakeLen) {
            if (r.shakeLen % 8 != 0) throw new Error(o);
            t.outputLen = r.shakeLen;
          }
          if ("boolean" != typeof t.outputUpper)
            throw new Error("Invalid outputUpper formatting option");
          if ("string" != typeof t.b64Pad)
            throw new Error("Invalid b64Pad formatting option");
          return t;
        }
        function C(e, t, r, o) {
          var n = e + " must include a value and format";
          if (!t) {
            if (!o) throw new Error(n);
            return o;
          }
          if (void 0 === t.value || !t.format) throw new Error(n);
          return g(t.format, t.encoding || "UTF8", r)(t.value);
        }
        var S = (function () {
          function e(t, r, o) {
            d(this, e);
            var n = o || {};
            if (
              ((this.t = r),
              (this.i = n.encoding || "UTF8"),
              (this.numRounds = n.numRounds || 1),
              isNaN(this.numRounds) ||
                this.numRounds !== parseInt(this.numRounds, 10) ||
                1 > this.numRounds)
            )
              throw new Error("numRounds must a integer >= 1");
            (this.s = t),
              (this.o = []),
              (this.h = 0),
              (this.u = !1),
              (this.l = 0),
              (this.A = !1),
              (this.H = []),
              (this.S = []);
          }
          return (
            m(e, [
              {
                key: "update",
                value: function (e) {
                  var t,
                    r = 0,
                    o = this.p >>> 5,
                    n = this.m(e, this.o, this.h),
                    a = n.binLen,
                    i = n.value,
                    s = a >>> 5;
                  for (t = 0; t < s; t += o)
                    r + this.p <= a &&
                      ((this.C = this.R(i.slice(t, t + o), this.C)),
                      (r += this.p));
                  (this.l += r),
                    (this.o = i.slice(r >>> 5)),
                    (this.h = a % this.p),
                    (this.u = !0);
                },
              },
              {
                key: "getHash",
                value: function (e, t) {
                  var r,
                    o,
                    n = this.U,
                    a = v(t);
                  if (this.v) {
                    if (-1 === a.outputLen)
                      throw new Error(
                        "Output length must be specified in options"
                      );
                    n = a.outputLen;
                  }
                  var i = A(e, n, this.K, a);
                  if (this.A && this.T) return i(this.T(a));
                  for (
                    o = this.F(
                      this.o.slice(),
                      this.h,
                      this.l,
                      this.g(this.C),
                      n
                    ),
                      r = 1;
                    r < this.numRounds;
                    r += 1
                  )
                    this.v &&
                      n % 32 != 0 &&
                      (o[o.length - 1] &= 16777215 >>> (24 - (n % 32))),
                      (o = this.F(o, n, 0, this.B(this.s), n));
                  return i(o);
                },
              },
              {
                key: "setHMACKey",
                value: function (e, t, r) {
                  if (!this.L) throw new Error("Variant does not support HMAC");
                  if (this.u)
                    throw new Error("Cannot set MAC key after calling update");
                  var o = g(t, (r || {}).encoding || "UTF8", this.K);
                  this.M(o(e));
                },
              },
              {
                key: "M",
                value: function (e) {
                  var t,
                    r = this.p >>> 3,
                    o = r / 4 - 1;
                  if (1 !== this.numRounds)
                    throw new Error("Cannot set numRounds with MAC");
                  if (this.A) throw new Error("MAC key already set");
                  for (
                    r < e.binLen / 8 &&
                    (e.value = this.F(
                      e.value,
                      e.binLen,
                      0,
                      this.B(this.s),
                      this.U
                    ));
                    e.value.length <= o;

                  )
                    e.value.push(0);
                  for (t = 0; t <= o; t += 1)
                    (this.H[t] = 909522486 ^ e.value[t]),
                      (this.S[t] = 1549556828 ^ e.value[t]);
                  (this.C = this.R(this.H, this.C)),
                    (this.l = this.p),
                    (this.A = !0);
                },
              },
              {
                key: "getHMAC",
                value: function (e, t) {
                  var r = v(t);
                  return A(e, this.U, this.K, r)(this.k());
                },
              },
              {
                key: "k",
                value: function () {
                  var e;
                  if (!this.A)
                    throw new Error(
                      "Cannot call getHMAC without first setting MAC key"
                    );
                  var t = this.F(
                    this.o.slice(),
                    this.h,
                    this.l,
                    this.g(this.C),
                    this.U
                  );
                  return (
                    (e = this.R(this.S, this.B(this.s))),
                    this.F(t, this.U, this.p, e, this.U)
                  );
                },
              },
            ]),
            e
          );
        })();
        function T(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function M(e, t) {
          return (e >>> t) | (e << (32 - t));
        }
        function E(e, t) {
          return e >>> t;
        }
        function B(e, t, r) {
          return e ^ t ^ r;
        }
        function O(e, t, r) {
          return (e & t) ^ (~e & r);
        }
        function R(e, t, r) {
          return (e & t) ^ (e & r) ^ (t & r);
        }
        function D(e) {
          return M(e, 2) ^ M(e, 13) ^ M(e, 22);
        }
        function I(e, t) {
          var r = (65535 & e) + (65535 & t);
          return (
            ((65535 & ((e >>> 16) + (t >>> 16) + (r >>> 16))) << 16) |
            (65535 & r)
          );
        }
        function q(e, t, r, o) {
          var n = (65535 & e) + (65535 & t) + (65535 & r) + (65535 & o);
          return (
            ((65535 &
              ((e >>> 16) +
                (t >>> 16) +
                (r >>> 16) +
                (o >>> 16) +
                (n >>> 16))) <<
              16) |
            (65535 & n)
          );
        }
        function L(e, t, r, o, n) {
          var a =
            (65535 & e) + (65535 & t) + (65535 & r) + (65535 & o) + (65535 & n);
          return (
            ((65535 &
              ((e >>> 16) +
                (t >>> 16) +
                (r >>> 16) +
                (o >>> 16) +
                (n >>> 16) +
                (a >>> 16))) <<
              16) |
            (65535 & a)
          );
        }
        function j(e) {
          return M(e, 7) ^ M(e, 18) ^ E(e, 3);
        }
        function U(e) {
          return M(e, 6) ^ M(e, 11) ^ M(e, 25);
        }
        function K(e) {
          return [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        }
        function _(e, t) {
          var r,
            o,
            n,
            a,
            i,
            s,
            c,
            l = [];
          for (
            r = t[0], o = t[1], n = t[2], a = t[3], i = t[4], c = 0;
            c < 80;
            c += 1
          )
            (l[c] =
              c < 16
                ? e[c]
                : T(l[c - 3] ^ l[c - 8] ^ l[c - 14] ^ l[c - 16], 1)),
              (s =
                c < 20
                  ? L(T(r, 5), O(o, n, a), i, 1518500249, l[c])
                  : c < 40
                  ? L(T(r, 5), B(o, n, a), i, 1859775393, l[c])
                  : c < 60
                  ? L(T(r, 5), R(o, n, a), i, 2400959708, l[c])
                  : L(T(r, 5), B(o, n, a), i, 3395469782, l[c])),
              (i = a),
              (a = n),
              (n = T(o, 30)),
              (o = r),
              (r = s);
          return (
            (t[0] = I(r, t[0])),
            (t[1] = I(o, t[1])),
            (t[2] = I(n, t[2])),
            (t[3] = I(a, t[3])),
            (t[4] = I(i, t[4])),
            t
          );
        }
        function N(e, t, r, o) {
          for (
            var n, a = 15 + (((t + 65) >>> 9) << 4), i = t + r;
            e.length <= a;

          )
            e.push(0);
          for (
            e[t >>> 5] |= 128 << (24 - (t % 32)),
              e[a] = 4294967295 & i,
              e[a - 1] = (i / 4294967296) | 0,
              n = 0;
            n < e.length;
            n += 16
          )
            o = _(e.slice(n, n + 16), o);
          return o;
        }
        var G = (function (e) {
          s(r, e);
          var t = l(r);
          function r(e, o, n) {
            var a;
            if ((d(this, r), "SHA-1" !== e)) throw new Error(k);
            var i = n || {};
            return (
              ((a = t.call(this, e, o, n)).L = !0),
              (a.T = a.k),
              (a.K = -1),
              (a.m = g(a.t, a.i, a.K)),
              (a.R = _),
              (a.g = function (e) {
                return e.slice();
              }),
              (a.B = K),
              (a.F = N),
              (a.C = [
                1732584193, 4023233417, 2562383102, 271733878, 3285377520,
              ]),
              (a.p = 512),
              (a.U = 160),
              (a.v = !1),
              i.hmacKey && a.M(C("hmacKey", i.hmacKey, a.K)),
              a
            );
          }
          return m(r);
        })(S);
        function F(e) {
          return "SHA-224" == e ? b.slice() : w.slice();
        }
        function H(e, t) {
          var r,
            o,
            n,
            a,
            i,
            s,
            c,
            l,
            u,
            p,
            d,
            h,
            m = [];
          for (
            r = t[0],
              o = t[1],
              n = t[2],
              a = t[3],
              i = t[4],
              s = t[5],
              c = t[6],
              l = t[7],
              d = 0;
            d < 64;
            d += 1
          )
            (m[d] =
              d < 16
                ? e[d]
                : q(
                    M((h = m[d - 2]), 17) ^ M(h, 19) ^ E(h, 10),
                    m[d - 7],
                    j(m[d - 15]),
                    m[d - 16]
                  )),
              (u = L(l, U(i), O(i, s, c), x[d], m[d])),
              (p = I(D(r), R(r, o, n))),
              (l = c),
              (c = s),
              (s = i),
              (i = I(a, u)),
              (a = n),
              (n = o),
              (o = r),
              (r = I(u, p));
          return (
            (t[0] = I(r, t[0])),
            (t[1] = I(o, t[1])),
            (t[2] = I(n, t[2])),
            (t[3] = I(a, t[3])),
            (t[4] = I(i, t[4])),
            (t[5] = I(s, t[5])),
            (t[6] = I(c, t[6])),
            (t[7] = I(l, t[7])),
            t
          );
        }
        var z = (function (e) {
            s(r, e);
            var t = l(r);
            function r(e, o, n) {
              var a;
              if ((d(this, r), "SHA-224" !== e && "SHA-256" !== e))
                throw new Error(k);
              var i = n || {};
              return (
                ((a = t.call(this, e, o, n)).T = a.k),
                (a.L = !0),
                (a.K = -1),
                (a.m = g(a.t, a.i, a.K)),
                (a.R = H),
                (a.g = function (e) {
                  return e.slice();
                }),
                (a.B = F),
                (a.F = function (t, r, o, n) {
                  return (function (e, t, r, o, n) {
                    for (
                      var a, i = 15 + (((t + 65) >>> 9) << 4), s = t + r;
                      e.length <= i;

                    )
                      e.push(0);
                    for (
                      e[t >>> 5] |= 128 << (24 - (t % 32)),
                        e[i] = 4294967295 & s,
                        e[i - 1] = (s / 4294967296) | 0,
                        a = 0;
                      a < e.length;
                      a += 16
                    )
                      o = H(e.slice(a, a + 16), o);
                    return "SHA-224" === n
                      ? [o[0], o[1], o[2], o[3], o[4], o[5], o[6]]
                      : o;
                  })(t, r, o, n, e);
                }),
                (a.C = F(e)),
                (a.p = 512),
                (a.U = "SHA-224" === e ? 224 : 256),
                (a.v = !1),
                i.hmacKey && a.M(C("hmacKey", i.hmacKey, a.K)),
                a
              );
            }
            return m(r);
          })(S),
          W = m(function e(t, r) {
            d(this, e), (this.Y = t), (this.N = r);
          });
        function V(e, t) {
          var r;
          return t > 32
            ? ((r = 64 - t),
              new W((e.N << t) | (e.Y >>> r), (e.Y << t) | (e.N >>> r)))
            : 0 !== t
            ? ((r = 32 - t),
              new W((e.Y << t) | (e.N >>> r), (e.N << t) | (e.Y >>> r)))
            : e;
        }
        function Q(e, t) {
          var r;
          return t < 32
            ? ((r = 32 - t),
              new W((e.Y >>> t) | (e.N << r), (e.N >>> t) | (e.Y << r)))
            : ((r = 64 - t),
              new W((e.N >>> t) | (e.Y << r), (e.Y >>> t) | (e.N << r)));
        }
        function Y(e, t) {
          return new W(e.Y >>> t, (e.N >>> t) | (e.Y << (32 - t)));
        }
        function X(e, t, r) {
          return new W(
            (e.Y & t.Y) ^ (e.Y & r.Y) ^ (t.Y & r.Y),
            (e.N & t.N) ^ (e.N & r.N) ^ (t.N & r.N)
          );
        }
        function $(e) {
          var t = Q(e, 28),
            r = Q(e, 34),
            o = Q(e, 39);
          return new W(t.Y ^ r.Y ^ o.Y, t.N ^ r.N ^ o.N);
        }
        function Z(e, t) {
          var r, o;
          r = (65535 & e.N) + (65535 & t.N);
          var n =
            ((65535 & (o = (e.N >>> 16) + (t.N >>> 16) + (r >>> 16))) << 16) |
            (65535 & r);
          return (
            (r = (65535 & e.Y) + (65535 & t.Y) + (o >>> 16)),
            (o = (e.Y >>> 16) + (t.Y >>> 16) + (r >>> 16)),
            new W(((65535 & o) << 16) | (65535 & r), n)
          );
        }
        function J(e, t, r, o) {
          var n, a;
          n = (65535 & e.N) + (65535 & t.N) + (65535 & r.N) + (65535 & o.N);
          var i =
            ((65535 &
              (a =
                (e.N >>> 16) +
                (t.N >>> 16) +
                (r.N >>> 16) +
                (o.N >>> 16) +
                (n >>> 16))) <<
              16) |
            (65535 & n);
          return (
            (n =
              (65535 & e.Y) +
              (65535 & t.Y) +
              (65535 & r.Y) +
              (65535 & o.Y) +
              (a >>> 16)),
            (a =
              (e.Y >>> 16) +
              (t.Y >>> 16) +
              (r.Y >>> 16) +
              (o.Y >>> 16) +
              (n >>> 16)),
            new W(((65535 & a) << 16) | (65535 & n), i)
          );
        }
        function ee(e, t, r, o, n) {
          var a, i;
          a =
            (65535 & e.N) +
            (65535 & t.N) +
            (65535 & r.N) +
            (65535 & o.N) +
            (65535 & n.N);
          var s =
            ((65535 &
              (i =
                (e.N >>> 16) +
                (t.N >>> 16) +
                (r.N >>> 16) +
                (o.N >>> 16) +
                (n.N >>> 16) +
                (a >>> 16))) <<
              16) |
            (65535 & a);
          return (
            (a =
              (65535 & e.Y) +
              (65535 & t.Y) +
              (65535 & r.Y) +
              (65535 & o.Y) +
              (65535 & n.Y) +
              (i >>> 16)),
            (i =
              (e.Y >>> 16) +
              (t.Y >>> 16) +
              (r.Y >>> 16) +
              (o.Y >>> 16) +
              (n.Y >>> 16) +
              (a >>> 16)),
            new W(((65535 & i) << 16) | (65535 & a), s)
          );
        }
        function te(e, t) {
          return new W(e.Y ^ t.Y, e.N ^ t.N);
        }
        function re(e) {
          var t = Q(e, 19),
            r = Q(e, 61),
            o = Y(e, 6);
          return new W(t.Y ^ r.Y ^ o.Y, t.N ^ r.N ^ o.N);
        }
        function oe(e) {
          var t = Q(e, 1),
            r = Q(e, 8),
            o = Y(e, 7);
          return new W(t.Y ^ r.Y ^ o.Y, t.N ^ r.N ^ o.N);
        }
        function ne(e) {
          var t = Q(e, 14),
            r = Q(e, 18),
            o = Q(e, 41);
          return new W(t.Y ^ r.Y ^ o.Y, t.N ^ r.N ^ o.N);
        }
        var ae = [
          new W(x[0], 3609767458),
          new W(x[1], 602891725),
          new W(x[2], 3964484399),
          new W(x[3], 2173295548),
          new W(x[4], 4081628472),
          new W(x[5], 3053834265),
          new W(x[6], 2937671579),
          new W(x[7], 3664609560),
          new W(x[8], 2734883394),
          new W(x[9], 1164996542),
          new W(x[10], 1323610764),
          new W(x[11], 3590304994),
          new W(x[12], 4068182383),
          new W(x[13], 991336113),
          new W(x[14], 633803317),
          new W(x[15], 3479774868),
          new W(x[16], 2666613458),
          new W(x[17], 944711139),
          new W(x[18], 2341262773),
          new W(x[19], 2007800933),
          new W(x[20], 1495990901),
          new W(x[21], 1856431235),
          new W(x[22], 3175218132),
          new W(x[23], 2198950837),
          new W(x[24], 3999719339),
          new W(x[25], 766784016),
          new W(x[26], 2566594879),
          new W(x[27], 3203337956),
          new W(x[28], 1034457026),
          new W(x[29], 2466948901),
          new W(x[30], 3758326383),
          new W(x[31], 168717936),
          new W(x[32], 1188179964),
          new W(x[33], 1546045734),
          new W(x[34], 1522805485),
          new W(x[35], 2643833823),
          new W(x[36], 2343527390),
          new W(x[37], 1014477480),
          new W(x[38], 1206759142),
          new W(x[39], 344077627),
          new W(x[40], 1290863460),
          new W(x[41], 3158454273),
          new W(x[42], 3505952657),
          new W(x[43], 106217008),
          new W(x[44], 3606008344),
          new W(x[45], 1432725776),
          new W(x[46], 1467031594),
          new W(x[47], 851169720),
          new W(x[48], 3100823752),
          new W(x[49], 1363258195),
          new W(x[50], 3750685593),
          new W(x[51], 3785050280),
          new W(x[52], 3318307427),
          new W(x[53], 3812723403),
          new W(x[54], 2003034995),
          new W(x[55], 3602036899),
          new W(x[56], 1575990012),
          new W(x[57], 1125592928),
          new W(x[58], 2716904306),
          new W(x[59], 442776044),
          new W(x[60], 593698344),
          new W(x[61], 3733110249),
          new W(x[62], 2999351573),
          new W(x[63], 3815920427),
          new W(3391569614, 3928383900),
          new W(3515267271, 566280711),
          new W(3940187606, 3454069534),
          new W(4118630271, 4000239992),
          new W(116418474, 1914138554),
          new W(174292421, 2731055270),
          new W(289380356, 3203993006),
          new W(460393269, 320620315),
          new W(685471733, 587496836),
          new W(852142971, 1086792851),
          new W(1017036298, 365543100),
          new W(1126000580, 2618297676),
          new W(1288033470, 3409855158),
          new W(1501505948, 4234509866),
          new W(1607167915, 987167468),
          new W(1816402316, 1246189591),
        ];
        function ie(e) {
          return "SHA-384" === e
            ? [
                new W(3418070365, b[0]),
                new W(1654270250, b[1]),
                new W(2438529370, b[2]),
                new W(355462360, b[3]),
                new W(1731405415, b[4]),
                new W(41048885895, b[5]),
                new W(3675008525, b[6]),
                new W(1203062813, b[7]),
              ]
            : [
                new W(w[0], 4089235720),
                new W(w[1], 2227873595),
                new W(w[2], 4271175723),
                new W(w[3], 1595750129),
                new W(w[4], 2917565137),
                new W(w[5], 725511199),
                new W(w[6], 4215389547),
                new W(w[7], 327033209),
              ];
        }
        function se(e, t) {
          var r,
            o,
            n,
            a,
            i,
            s,
            c,
            l,
            u,
            p,
            d,
            h,
            m,
            f,
            y,
            g = [];
          for (
            r = t[0],
              o = t[1],
              n = t[2],
              a = t[3],
              i = t[4],
              s = t[5],
              c = t[6],
              l = t[7],
              d = 0;
            d < 80;
            d += 1
          )
            d < 16
              ? ((h = 2 * d), (g[d] = new W(e[h], e[h + 1])))
              : (g[d] = J(re(g[d - 2]), g[d - 7], oe(g[d - 15]), g[d - 16])),
              (u = ee(
                l,
                ne(i),
                ((f = s),
                (y = c),
                new W(
                  ((m = i).Y & f.Y) ^ (~m.Y & y.Y),
                  (m.N & f.N) ^ (~m.N & y.N)
                )),
                ae[d],
                g[d]
              )),
              (p = Z($(r), X(r, o, n))),
              (l = c),
              (c = s),
              (s = i),
              (i = Z(a, u)),
              (a = n),
              (n = o),
              (o = r),
              (r = Z(u, p));
          return (
            (t[0] = Z(r, t[0])),
            (t[1] = Z(o, t[1])),
            (t[2] = Z(n, t[2])),
            (t[3] = Z(a, t[3])),
            (t[4] = Z(i, t[4])),
            (t[5] = Z(s, t[5])),
            (t[6] = Z(c, t[6])),
            (t[7] = Z(l, t[7])),
            t
          );
        }
        var ce = (function (e) {
            s(r, e);
            var t = l(r);
            function r(e, o, n) {
              var a;
              if ((d(this, r), "SHA-384" !== e && "SHA-512" !== e))
                throw new Error(k);
              var i = n || {};
              return (
                ((a = t.call(this, e, o, n)).T = a.k),
                (a.L = !0),
                (a.K = -1),
                (a.m = g(a.t, a.i, a.K)),
                (a.R = se),
                (a.g = function (e) {
                  return e.slice();
                }),
                (a.B = ie),
                (a.F = function (t, r, o, n) {
                  return (function (e, t, r, o, n) {
                    for (
                      var a, i = 31 + (((t + 129) >>> 10) << 5), s = t + r;
                      e.length <= i;

                    )
                      e.push(0);
                    for (
                      e[t >>> 5] |= 128 << (24 - (t % 32)),
                        e[i] = 4294967295 & s,
                        e[i - 1] = (s / 4294967296) | 0,
                        a = 0;
                      a < e.length;
                      a += 32
                    )
                      o = se(e.slice(a, a + 32), o);
                    return "SHA-384" === n
                      ? [
                          (o = o)[0].Y,
                          o[0].N,
                          o[1].Y,
                          o[1].N,
                          o[2].Y,
                          o[2].N,
                          o[3].Y,
                          o[3].N,
                          o[4].Y,
                          o[4].N,
                          o[5].Y,
                          o[5].N,
                        ]
                      : [
                          o[0].Y,
                          o[0].N,
                          o[1].Y,
                          o[1].N,
                          o[2].Y,
                          o[2].N,
                          o[3].Y,
                          o[3].N,
                          o[4].Y,
                          o[4].N,
                          o[5].Y,
                          o[5].N,
                          o[6].Y,
                          o[6].N,
                          o[7].Y,
                          o[7].N,
                        ];
                  })(t, r, o, n, e);
                }),
                (a.C = ie(e)),
                (a.p = 1024),
                (a.U = "SHA-384" === e ? 384 : 512),
                (a.v = !1),
                i.hmacKey && a.M(C("hmacKey", i.hmacKey, a.K)),
                a
              );
            }
            return m(r);
          })(S),
          le = [
            new W(0, 1),
            new W(0, 32898),
            new W(2147483648, 32906),
            new W(2147483648, 2147516416),
            new W(0, 32907),
            new W(0, 2147483649),
            new W(2147483648, 2147516545),
            new W(2147483648, 32777),
            new W(0, 138),
            new W(0, 136),
            new W(0, 2147516425),
            new W(0, 2147483658),
            new W(0, 2147516555),
            new W(2147483648, 139),
            new W(2147483648, 32905),
            new W(2147483648, 32771),
            new W(2147483648, 32770),
            new W(2147483648, 128),
            new W(0, 32778),
            new W(2147483648, 2147483658),
            new W(2147483648, 2147516545),
            new W(2147483648, 32896),
            new W(0, 2147483649),
            new W(2147483648, 2147516424),
          ],
          ue = [
            [0, 36, 3, 41, 18],
            [1, 44, 10, 45, 2],
            [62, 6, 43, 15, 61],
            [28, 55, 25, 21, 56],
            [27, 20, 39, 8, 14],
          ];
        function pe(e) {
          var t,
            r = [];
          for (t = 0; t < 5; t += 1)
            r[t] = [
              new W(0, 0),
              new W(0, 0),
              new W(0, 0),
              new W(0, 0),
              new W(0, 0),
            ];
          return r;
        }
        function de(e) {
          var t,
            r = [];
          for (t = 0; t < 5; t += 1) r[t] = e[t].slice();
          return r;
        }
        function he(e, t) {
          var r,
            o,
            n,
            a,
            i,
            s,
            c,
            l,
            u,
            p = [],
            d = [];
          if (null !== e)
            for (o = 0; o < e.length; o += 2)
              t[(o >>> 1) % 5][((o >>> 1) / 5) | 0] = te(
                t[(o >>> 1) % 5][((o >>> 1) / 5) | 0],
                new W(e[o + 1], e[o])
              );
          for (r = 0; r < 24; r += 1) {
            for (a = pe(), o = 0; o < 5; o += 1)
              p[o] =
                ((i = t[o][0]),
                (s = t[o][1]),
                (c = t[o][2]),
                (l = t[o][3]),
                (u = t[o][4]),
                new W(
                  i.Y ^ s.Y ^ c.Y ^ l.Y ^ u.Y,
                  i.N ^ s.N ^ c.N ^ l.N ^ u.N
                ));
            for (o = 0; o < 5; o += 1)
              d[o] = te(p[(o + 4) % 5], V(p[(o + 1) % 5], 1));
            for (o = 0; o < 5; o += 1)
              for (n = 0; n < 5; n += 1) t[o][n] = te(t[o][n], d[o]);
            for (o = 0; o < 5; o += 1)
              for (n = 0; n < 5; n += 1)
                a[n][(2 * o + 3 * n) % 5] = V(t[o][n], ue[o][n]);
            for (o = 0; o < 5; o += 1)
              for (n = 0; n < 5; n += 1)
                t[o][n] = te(
                  a[o][n],
                  new W(
                    ~a[(o + 1) % 5][n].Y & a[(o + 2) % 5][n].Y,
                    ~a[(o + 1) % 5][n].N & a[(o + 2) % 5][n].N
                  )
                );
            t[0][0] = te(t[0][0], le[r]);
          }
          return t;
        }
        function me(e) {
          var t,
            r,
            o = 0,
            n = [0, 0],
            a = [4294967295 & e, (e / 4294967296) & 2097151];
          for (t = 6; t >= 0; t--)
            (0 == (r = (a[t >> 2] >>> (8 * t)) & 255) && 0 === o) ||
              ((n[(o + 1) >> 2] |= r << (8 * (o + 1))), (o += 1));
          return (
            (o = 0 !== o ? o : 1),
            (n[0] |= o),
            { value: o + 1 > 4 ? n : [n[0]], binLen: 8 + 8 * o }
          );
        }
        function fe(e) {
          return P(me(e.binLen), e);
        }
        function ye(e, t) {
          var r,
            o = me(t),
            n = t >>> 2,
            a = (n - ((o = P(o, e)).value.length % n)) % n;
          for (r = 0; r < a; r++) o.value.push(0);
          return o.value;
        }
        var ge = (function (e) {
            s(r, e);
            var t = l(r);
            function r(e, o, n) {
              var a;
              d(this, r);
              var i = 6,
                s = 0,
                c = n || {};
              if (1 !== (a = t.call(this, e, o, n)).numRounds) {
                if (c.kmacKey || c.hmacKey)
                  throw new Error("Cannot set numRounds with MAC");
                if ("CSHAKE128" === a.s || "CSHAKE256" === a.s)
                  throw new Error("Cannot set numRounds for CSHAKE variants");
              }
              switch (
                ((a.K = 1),
                (a.m = g(a.t, a.i, a.K)),
                (a.R = he),
                (a.g = de),
                (a.B = pe),
                (a.C = pe()),
                (a.v = !1),
                e)
              ) {
                case "SHA3-224":
                  (a.p = s = 1152), (a.U = 224), (a.L = !0), (a.T = a.k);
                  break;
                case "SHA3-256":
                  (a.p = s = 1088), (a.U = 256), (a.L = !0), (a.T = a.k);
                  break;
                case "SHA3-384":
                  (a.p = s = 832), (a.U = 384), (a.L = !0), (a.T = a.k);
                  break;
                case "SHA3-512":
                  (a.p = s = 576), (a.U = 512), (a.L = !0), (a.T = a.k);
                  break;
                case "SHAKE128":
                  (i = 31),
                    (a.p = s = 1344),
                    (a.U = -1),
                    (a.v = !0),
                    (a.L = !1),
                    (a.T = null);
                  break;
                case "SHAKE256":
                  (i = 31),
                    (a.p = s = 1088),
                    (a.U = -1),
                    (a.v = !0),
                    (a.L = !1),
                    (a.T = null);
                  break;
                case "KMAC128":
                  (i = 4),
                    (a.p = s = 1344),
                    a.I(n),
                    (a.U = -1),
                    (a.v = !0),
                    (a.L = !1),
                    (a.T = a.X);
                  break;
                case "KMAC256":
                  (i = 4),
                    (a.p = s = 1088),
                    a.I(n),
                    (a.U = -1),
                    (a.v = !0),
                    (a.L = !1),
                    (a.T = a.X);
                  break;
                case "CSHAKE128":
                  (a.p = s = 1344),
                    (i = a._(n)),
                    (a.U = -1),
                    (a.v = !0),
                    (a.L = !1),
                    (a.T = null);
                  break;
                case "CSHAKE256":
                  (a.p = s = 1088),
                    (i = a._(n)),
                    (a.U = -1),
                    (a.v = !0),
                    (a.L = !1),
                    (a.T = null);
                  break;
                default:
                  throw new Error(k);
              }
              return (
                (a.F = function (e, t, r, o, n) {
                  return (function (e, t, r, o, n, a, i) {
                    var s,
                      c,
                      l = 0,
                      u = [],
                      p = n >>> 5,
                      d = t >>> 5;
                    for (s = 0; s < d && t >= n; s += p)
                      (o = he(e.slice(s, s + p), o)), (t -= n);
                    for (e = e.slice(s), t %= n; e.length < p; ) e.push(0);
                    for (
                      e[(s = t >>> 3) >> 2] ^= a << ((s % 4) * 8),
                        e[p - 1] ^= 2147483648,
                        o = he(e, o);
                      32 * u.length < i &&
                      ((c = o[l % 5][(l / 5) | 0]),
                      u.push(c.N),
                      !(32 * u.length >= i));

                    )
                      u.push(c.Y),
                        0 == (64 * (l += 1)) % n && (he(null, o), (l = 0));
                    return u;
                  })(e, t, 0, o, s, i, n);
                }),
                c.hmacKey && a.M(C("hmacKey", c.hmacKey, a.K)),
                a
              );
            }
            return (
              m(r, [
                {
                  key: "_",
                  value: function (e, t) {
                    var r = (function (e) {
                      var t = e || {};
                      return {
                        funcName: C("funcName", t.funcName, 1, {
                          value: [],
                          binLen: 0,
                        }),
                        customization: C("Customization", t.customization, 1, {
                          value: [],
                          binLen: 0,
                        }),
                      };
                    })(e || {});
                    t && (r.funcName = t);
                    var o = P(fe(r.funcName), fe(r.customization));
                    if (
                      0 !== r.customization.binLen ||
                      0 !== r.funcName.binLen
                    ) {
                      for (
                        var n = ye(o, this.p >>> 3), a = 0;
                        a < n.length;
                        a += this.p >>> 5
                      )
                        (this.C = this.R(
                          n.slice(a, a + (this.p >>> 5)),
                          this.C
                        )),
                          (this.l += this.p);
                      return 4;
                    }
                    return 31;
                  },
                },
                {
                  key: "I",
                  value: function (e) {
                    var t = (function (e) {
                      var t = e || {};
                      return {
                        kmacKey: C("kmacKey", t.kmacKey, 1),
                        funcName: { value: [1128353099], binLen: 32 },
                        customization: C("Customization", t.customization, 1, {
                          value: [],
                          binLen: 0,
                        }),
                      };
                    })(e || {});
                    this._(e, t.funcName);
                    for (
                      var r = ye(fe(t.kmacKey), this.p >>> 3), o = 0;
                      o < r.length;
                      o += this.p >>> 5
                    )
                      (this.C = this.R(r.slice(o, o + (this.p >>> 5)), this.C)),
                        (this.l += this.p);
                    this.A = !0;
                  },
                },
                {
                  key: "X",
                  value: function (e) {
                    var t = P(
                      { value: this.o.slice(), binLen: this.h },
                      (function (e) {
                        var t,
                          r,
                          o = 0,
                          n = [0, 0],
                          a = [4294967295 & e, (e / 4294967296) & 2097151];
                        for (t = 6; t >= 0; t--)
                          (0 == (r = (a[t >> 2] >>> (8 * t)) & 255) &&
                            0 === o) ||
                            ((n[o >> 2] |= r << (8 * o)), (o += 1));
                        return (
                          (n[(o = 0 !== o ? o : 1) >> 2] |= o << (8 * o)),
                          { value: o + 1 > 4 ? n : [n[0]], binLen: 8 + 8 * o }
                        );
                      })(e.outputLen)
                    );
                    return this.F(
                      t.value,
                      t.binLen,
                      this.l,
                      this.g(this.C),
                      e.outputLen
                    );
                  },
                },
              ]),
              r
            );
          })(S),
          Ae = (function () {
            function e(t, r, o) {
              if ((d(this, e), "SHA-1" == t)) this.O = new G(t, r, o);
              else if ("SHA-224" == t || "SHA-256" == t)
                this.O = new z(t, r, o);
              else if ("SHA-384" == t || "SHA-512" == t)
                this.O = new ce(t, r, o);
              else {
                if (
                  "SHA3-224" != t &&
                  "SHA3-256" != t &&
                  "SHA3-384" != t &&
                  "SHA3-512" != t &&
                  "SHAKE128" != t &&
                  "SHAKE256" != t &&
                  "CSHAKE128" != t &&
                  "CSHAKE256" != t &&
                  "KMAC128" != t &&
                  "KMAC256" != t
                )
                  throw new Error(k);
                this.O = new ge(t, r, o);
              }
            }
            return (
              m(e, [
                {
                  key: "update",
                  value: function (e) {
                    this.O.update(e);
                  },
                },
                {
                  key: "getHash",
                  value: function (e, t) {
                    return this.O.getHash(e, t);
                  },
                },
                {
                  key: "setHMACKey",
                  value: function (e, t, r) {
                    this.O.setHMACKey(e, t, r);
                  },
                },
                {
                  key: "getHMAC",
                  value: function (e, t) {
                    return this.O.getHMAC(e, t);
                  },
                },
              ]),
              e
            );
          })(),
          xe = "function" == typeof atob,
          be = "function" == typeof btoa,
          we = "function" == typeof Buffer,
          ke = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
          Pe = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
          ve = Array.prototype.slice.call(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          ),
          Ce = (function (e) {
            var t = {};
            return (
              e.forEach(function (e, r) {
                return (t[e] = r);
              }),
              t
            );
          })(ve),
          Se =
            /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
          Te = String.fromCharCode.bind(String),
          Me =
            "function" == typeof Uint8Array.from
              ? Uint8Array.from.bind(Uint8Array)
              : function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : function (e) {
                          return e;
                        };
                  return new Uint8Array(
                    Array.prototype.slice.call(e, 0).map(t)
                  );
                },
          Ee = function (e) {
            return e.replace(/=/g, "").replace(/[+\/]/g, function (e) {
              return "+" == e ? "-" : "_";
            });
          },
          Be = function (e) {
            return e.replace(/[^A-Za-z0-9\+\/]/g, "");
          },
          Oe = function (e) {
            for (
              var t, r, o, n, a = "", i = e.length % 3, s = 0;
              s < e.length;

            ) {
              if (
                (r = e.charCodeAt(s++)) > 255 ||
                (o = e.charCodeAt(s++)) > 255 ||
                (n = e.charCodeAt(s++)) > 255
              )
                throw new TypeError("invalid character found");
              a +=
                ve[((t = (r << 16) | (o << 8) | n) >> 18) & 63] +
                ve[(t >> 12) & 63] +
                ve[(t >> 6) & 63] +
                ve[63 & t];
            }
            return i ? a.slice(0, i - 3) + "===".substring(i) : a;
          },
          Re = be
            ? function (e) {
                return btoa(e);
              }
            : we
            ? function (e) {
                return Buffer.from(e, "binary").toString("base64");
              }
            : Oe,
          De = we
            ? function (e) {
                return Buffer.from(e).toString("base64");
              }
            : function (e) {
                for (var t = [], r = 0, o = e.length; r < o; r += 4096)
                  t.push(Te.apply(null, e.subarray(r, r + 4096)));
                return Re(t.join(""));
              },
          Ie = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t ? Ee(De(e)) : De(e);
          },
          qe = function (e) {
            if (e.length < 2)
              return (t = e.charCodeAt(0)) < 128
                ? e
                : t < 2048
                ? Te(192 | (t >>> 6)) + Te(128 | (63 & t))
                : Te(224 | ((t >>> 12) & 15)) +
                  Te(128 | ((t >>> 6) & 63)) +
                  Te(128 | (63 & t));
            var t =
              65536 +
              1024 * (e.charCodeAt(0) - 55296) +
              (e.charCodeAt(1) - 56320);
            return (
              Te(240 | ((t >>> 18) & 7)) +
              Te(128 | ((t >>> 12) & 63)) +
              Te(128 | ((t >>> 6) & 63)) +
              Te(128 | (63 & t))
            );
          },
          Le = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
          je = function (e) {
            return e.replace(Le, qe);
          },
          Ue = we
            ? function (e) {
                return Buffer.from(e, "utf8").toString("base64");
              }
            : Pe
            ? function (e) {
                return De(Pe.encode(e));
              }
            : function (e) {
                return Re(je(e));
              },
          Ke = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t ? Ee(Ue(e)) : Ue(e);
          },
          _e = function (e) {
            return Ke(e, !0);
          },
          Ne =
            /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
          Ge = function (e) {
            switch (e.length) {
              case 4:
                var t =
                  (((7 & e.charCodeAt(0)) << 18) |
                    ((63 & e.charCodeAt(1)) << 12) |
                    ((63 & e.charCodeAt(2)) << 6) |
                    (63 & e.charCodeAt(3))) -
                  65536;
                return Te(55296 + (t >>> 10)) + Te(56320 + (1023 & t));
              case 3:
                return Te(
                  ((15 & e.charCodeAt(0)) << 12) |
                    ((63 & e.charCodeAt(1)) << 6) |
                    (63 & e.charCodeAt(2))
                );
              default:
                return Te(
                  ((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1))
                );
            }
          },
          Fe = function (e) {
            return e.replace(Ne, Ge);
          },
          He = function (e) {
            if (((e = e.replace(/\s+/g, "")), !Se.test(e)))
              throw new TypeError("malformed base64.");
            e += "==".slice(2 - (3 & e.length));
            for (var t, r, o, n = "", a = 0; a < e.length; )
              (t =
                (Ce[e.charAt(a++)] << 18) |
                (Ce[e.charAt(a++)] << 12) |
                ((r = Ce[e.charAt(a++)]) << 6) |
                (o = Ce[e.charAt(a++)])),
                (n +=
                  64 === r
                    ? Te((t >> 16) & 255)
                    : 64 === o
                    ? Te((t >> 16) & 255, (t >> 8) & 255)
                    : Te((t >> 16) & 255, (t >> 8) & 255, 255 & t));
            return n;
          },
          ze = xe
            ? function (e) {
                return atob(Be(e));
              }
            : we
            ? function (e) {
                return Buffer.from(e, "base64").toString("binary");
              }
            : He,
          We = we
            ? function (e) {
                return Me(Buffer.from(e, "base64"));
              }
            : function (e) {
                return Me(ze(e), function (e) {
                  return e.charCodeAt(0);
                });
              },
          Ve = function (e) {
            return We(Ye(e));
          },
          Qe = we
            ? function (e) {
                return Buffer.from(e, "base64").toString("utf8");
              }
            : ke
            ? function (e) {
                return ke.decode(We(e));
              }
            : function (e) {
                return Fe(ze(e));
              },
          Ye = function (e) {
            return Be(
              e.replace(/[-_]/g, function (e) {
                return "-" == e ? "+" : "/";
              })
            );
          },
          Xe = function (e) {
            return Qe(Ye(e));
          },
          $e = function (e) {
            return { value: e, enumerable: !1, writable: !0, configurable: !0 };
          },
          Ze = function () {
            var e = function (e, t) {
              return Object.defineProperty(String.prototype, e, $e(t));
            };
            e("fromBase64", function () {
              return Xe(this);
            }),
              e("toBase64", function (e) {
                return Ke(this, e);
              }),
              e("toBase64URI", function () {
                return Ke(this, !0);
              }),
              e("toBase64URL", function () {
                return Ke(this, !0);
              }),
              e("toUint8Array", function () {
                return Ve(this);
              });
          },
          Je = function () {
            var e = function (e, t) {
              return Object.defineProperty(Uint8Array.prototype, e, $e(t));
            };
            e("toBase64", function (e) {
              return Ie(this, e);
            }),
              e("toBase64URI", function () {
                return Ie(this, !0);
              }),
              e("toBase64URL", function () {
                return Ie(this, !0);
              });
          },
          et = {
            version: "3.7.2",
            VERSION: "3.7.2",
            atob: ze,
            atobPolyfill: He,
            btoa: Re,
            btoaPolyfill: Oe,
            fromBase64: Xe,
            toBase64: Ke,
            encode: Ke,
            encodeURI: _e,
            encodeURL: _e,
            utob: je,
            btou: Fe,
            decode: Xe,
            isValid: function (e) {
              if ("string" != typeof e) return !1;
              var t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
              return (
                !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t)
              );
            },
            fromUint8Array: Ie,
            toUint8Array: Ve,
            extendString: Ze,
            extendUint8Array: Je,
            extendBuiltins: function () {
              Ze(), Je();
            },
          },
          tt = n(5917),
          rt = n.n(tt),
          ot = new (function () {
            var e = function e(t) {
              var r = {};
              if (1 === t.nodeType) {
                if (t.attributes.length > 0) {
                  r["@attributes"] = {};
                  for (var o = 0; o < t.attributes.length; o++) {
                    var n = t.attributes.item(o);
                    r["@attributes"][n.nodeName] = n.value;
                  }
                }
              } else 3 === t.nodeType && (r = t.nodeValue);
              if (t.hasChildNodes())
                for (var a = 0; a < t.childNodes.length; a++) {
                  var i = t.childNodes.item(a),
                    s = i.nodeName;
                  if (void 0 === r[s]) r[s] = e(i);
                  else {
                    if (void 0 === r[s].push) {
                      var c = r[s];
                      (r[s] = []), r[s].push(c);
                    }
                    r[s].push(e(i));
                  }
                }
              return r;
            };
            this.parseString = function (t, r) {
              var o;
              window.DOMParser
                ? (o = new window.DOMParser().parseFromString(t, "text/xml"))
                : ((o = new window.ActiveXObject("Microsoft.XMLDOM")).async =
                    "false");
              var n,
                a,
                i =
                  ((n = e(o)),
                  -1 ===
                  (a = JSON.stringify(n, void 0, 2)
                    .replace(/(\\t|\\r|\\n)/g, "")
                    .replace(/"",[\n\t\r\s]+""[,]*/g, "")
                    .replace(/(\n[\t\s\r]*\n)/g, "")
                    .replace(/[\s\t]{2,}""[,]{0,1}/g, "")
                    .replace(/"[\s\t]{1,}"[,]{0,1}/g, "")).indexOf(
                    '"parsererror": {'
                  )
                    ? a
                    : "Invalid XML format");
              return void 0 === r ? JSON.parse(i) : i;
            };
          })(),
          nt = {
            type: "object",
            location: "xml",
            sentAs: "Owner",
            parameters: { ID: { sentAs: "ID" } },
          },
          at = {
            type: "object",
            location: "xml",
            sentAs: "Initiator",
            parameters: { ID: { sentAs: "ID" } },
          },
          it = {
            sentAs: "BackToSourceRule",
            required: !0,
            location: "xml",
            type: "array",
            items: {
              type: "object",
              parameters: {
                ID: { sentAs: "ID" },
                Condition: {
                  sentAs: "Condition",
                  type: "object",
                  parameters: {
                    ObjectKeyPrefixEquals: { sentAs: "ObjectKeyPrefixEquals" },
                    HttpErrorCodeReturnedEquals: {
                      sentAs: "HttpErrorCodeReturnedEquals",
                    },
                  },
                },
                Redirect: {
                  sentAs: "Redirect",
                  type: "object",
                  parameters: {
                    HttpRedirectCode: { sentAs: "HttpRedirectCode" },
                    SourceEndpoint: { sentAs: "SourceEndpoint" },
                    SourceBucketName: { sentAs: "SourceBucketName" },
                    ReplaceKeyWith: { sentAs: "ReplaceKeyWith" },
                    StaticUri: { sentAs: "StaticUri" },
                    ReplaceKeyPrefixWith: { sentAs: "ReplaceKeyPrefixWith" },
                    MigrationConfiguration: {
                      sentAs: "MigrationConfiguration",
                      type: "object",
                      parameters: {
                        Agency: { sentAs: "Agency" },
                        LogBucketName: { sentAs: "LogBucketName" },
                        PrivateBucketConfiguration: {
                          sentAs: "PrivateBucketConfiguration",
                          type: "object",
                          parameters: {
                            SourceStorageProvider: {
                              sentAs: "SourceStorageProvider",
                            },
                            SourceBucketAK: { sentAs: "SourceBucketAK" },
                            SourceBucketSK: { sentAs: "SourceBucketSK" },
                            SourceBucketZone: { sentAs: "SourceBucketZone" },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          st = {
            type: "array",
            location: "xml",
            sentAs: "CommonPrefixes",
            items: {
              type: "object",
              parameters: {
                Prefix: { decode: !0, sentAs: "Prefix" },
                MTime: { sentAs: "MTime" },
                InodeNo: { sentAs: "InodeNo" },
              },
            },
          },
          ct = {
            type: "array",
            location: "xml",
            wrapper: "AccessControlList",
            sentAs: "Grant",
            items: {
              type: "object",
              parameters: {
                Grantee: {
                  type: "object",
                  sentAs: "Grantee",
                  parameters: {
                    Type: { type: "ignore" },
                    ID: { sentAs: "ID", notAllowEmpty: !0 },
                    URI: {
                      sentAs: "Canned",
                      type: "adapter",
                      notAllowEmpty: !0,
                    },
                  },
                },
                Permission: { sentAs: "Permission" },
                Delivered: { sentAs: "Delivered" },
              },
            },
          },
          lt = {
            type: "object",
            location: "xml",
            sentAs: "LoggingEnabled",
            parameters: {
              TargetBucket: { sentAs: "TargetBucket" },
              TargetPrefix: { sentAs: "TargetPrefix" },
              TargetGrants: {
                type: "array",
                wrapper: "TargetGrants",
                sentAs: "Grant",
                items: {
                  type: "object",
                  parameters: {
                    Grantee: {
                      type: "object",
                      sentAs: "Grantee",
                      parameters: {
                        Type: { type: "ignore" },
                        ID: { sentAs: "ID" },
                        URI: { sentAs: "Canned", type: "adapter" },
                      },
                    },
                    Permission: { sentAs: "Permission" },
                  },
                },
              },
            },
          },
          ut = {
            required: !0,
            type: "array",
            location: "xml",
            sentAs: "Rule",
            items: {
              type: "object",
              parameters: {
                ID: { sentAs: "ID" },
                Prefix: { sentAs: "Prefix" },
                Status: { sentAs: "Status" },
                Transitions: {
                  type: "array",
                  sentAs: "Transition",
                  items: {
                    type: "object",
                    parameters: {
                      StorageClass: { sentAs: "StorageClass", type: "adapter" },
                      Date: { sentAs: "Date" },
                      Days: { type: "number", sentAs: "Days" },
                    },
                  },
                },
                Expiration: {
                  type: "object",
                  sentAs: "Expiration",
                  parameters: {
                    Date: { sentAs: "Date" },
                    Days: { type: "number", sentAs: "Days" },
                  },
                },
                AbortIncompleteMultipartUpload: {
                  type: "object",
                  sentAs: "AbortIncompleteMultipartUpload",
                  parameters: {
                    DaysAfterInitiation: {
                      type: "number",
                      sentAs: "DaysAfterInitiation",
                    },
                  },
                },
                NoncurrentVersionTransitions: {
                  type: "array",
                  sentAs: "NoncurrentVersionTransition",
                  items: {
                    type: "object",
                    parameters: {
                      StorageClass: { sentAs: "StorageClass", type: "adapter" },
                      NoncurrentDays: {
                        type: "number",
                        sentAs: "NoncurrentDays",
                      },
                    },
                  },
                },
                NoncurrentVersionExpiration: {
                  type: "object",
                  sentAs: "NoncurrentVersionExpiration",
                  parameters: {
                    NoncurrentDays: {
                      type: "number",
                      sentAs: "NoncurrentDays",
                    },
                  },
                },
              },
            },
          },
          pt = {
            type: "object",
            location: "xml",
            sentAs: "RedirectAllRequestsTo",
            parameters: {
              HostName: { sentAs: "HostName" },
              Protocol: { sentAs: "Protocol" },
            },
          },
          dt = {
            type: "array",
            wrapper: "RoutingRules",
            location: "xml",
            sentAs: "RoutingRule",
            items: {
              type: "object",
              parameters: {
                Condition: {
                  type: "object",
                  sentAs: "Condition",
                  parameters: {
                    HttpErrorCodeReturnedEquals: {
                      sentAs: "HttpErrorCodeReturnedEquals",
                    },
                    KeyPrefixEquals: { sentAs: "KeyPrefixEquals" },
                  },
                },
                Redirect: {
                  type: "object",
                  sentAs: "Redirect",
                  parameters: {
                    HostName: { sentAs: "HostName" },
                    HttpRedirectCode: { sentAs: "HttpRedirectCode" },
                    Protocol: { sentAs: "Protocol" },
                    ReplaceKeyPrefixWith: { sentAs: "ReplaceKeyPrefixWith" },
                    ReplaceKeyWith: { sentAs: "ReplaceKeyWith" },
                  },
                },
              },
            },
          },
          ht = {
            type: "object",
            location: "xml",
            sentAs: "IndexDocument",
            parameters: { Suffix: { sentAs: "Suffix" } },
          },
          mt = {
            type: "object",
            location: "xml",
            sentAs: "ErrorDocument",
            parameters: { Key: { sentAs: "Key" } },
          },
          ft = {
            required: !0,
            type: "array",
            location: "xml",
            sentAs: "CORSRule",
            items: {
              type: "object",
              parameters: {
                ID: { sentAs: "ID" },
                AllowedMethod: {
                  type: "array",
                  sentAs: "AllowedMethod",
                  items: { type: "string" },
                },
                AllowedOrigin: {
                  type: "array",
                  sentAs: "AllowedOrigin",
                  items: { type: "string" },
                },
                AllowedHeader: {
                  type: "array",
                  sentAs: "AllowedHeader",
                  items: { type: "string" },
                },
                MaxAgeSeconds: { type: "number", sentAs: "MaxAgeSeconds" },
                ExposeHeader: {
                  type: "array",
                  sentAs: "ExposeHeader",
                  items: { type: "string" },
                },
              },
            },
          },
          yt = {
            type: "array",
            location: "xml",
            sentAs: "FunctionGraphConfiguration",
            items: {
              type: "object",
              location: "xml",
              parameters: {
                ID: { sentAs: "Id" },
                Filter: {
                  type: "object",
                  parameters: {
                    FilterRules: {
                      wrapper: "Object",
                      type: "array",
                      sentAs: "FilterRule",
                      items: {
                        type: "object",
                        parameters: { Name: {}, Value: {} },
                      },
                    },
                  },
                },
                FunctionGraph: {},
                Event: { type: "array", items: { type: "adapter" } },
              },
            },
          },
          gt = {
            type: "array",
            location: "xml",
            sentAs: "TopicConfiguration",
            items: {
              type: "object",
              location: "xml",
              parameters: {
                ID: { sentAs: "Id" },
                Filter: {
                  type: "object",
                  parameters: {
                    FilterRules: {
                      wrapper: "Object",
                      type: "array",
                      sentAs: "FilterRule",
                      items: {
                        type: "object",
                        parameters: { Name: {}, Value: {} },
                      },
                    },
                  },
                },
                Topic: {},
                Event: { type: "array", items: { type: "adapter" } },
              },
            },
          },
          At = {
            type: "array",
            location: "xml",
            sentAs: "FunctionStageConfiguration",
            items: {
              type: "object",
              location: "xml",
              parameters: {
                ID: { sentAs: "Id" },
                Filter: {
                  type: "object",
                  parameters: {
                    FilterRules: {
                      wrapper: "Object",
                      type: "array",
                      sentAs: "FilterRule",
                      items: {
                        type: "object",
                        parameters: { Name: {}, Value: {} },
                      },
                    },
                  },
                },
                FunctionStage: {},
                Event: { type: "array", items: { type: "adapter" } },
              },
            },
          },
          xt = {
            required: !0,
            type: "array",
            location: "xml",
            wrapper: "TagSet",
            sentAs: "Tag",
            items: {
              type: "object",
              parameters: {
                Key: { sentAs: "Key" },
                Value: { sentAs: "Value" },
              },
            },
          },
          bt = {
            required: !0,
            type: "array",
            location: "xml",
            sentAs: "Rule",
            items: {
              type: "object",
              parameters: {
                ID: { sentAs: "ID" },
                Prefix: { sentAs: "Prefix" },
                Status: { sentAs: "Status" },
                Destination: {
                  type: "object",
                  sentAs: "Destination",
                  parameters: {
                    Bucket: { sentAs: "Bucket", type: "adapter" },
                    StorageClass: { sentAs: "StorageClass", type: "adapter" },
                    DeleteData: { sentAs: "DeleteData", type: "string" },
                  },
                },
                HistoricalObjectReplication: {
                  sentAs: "HistoricalObjectReplication",
                },
              },
            },
          },
          wt = {
            type: "object",
            location: "xml",
            sentAs: "Rule",
            parameters: {
              ApplyServerSideEncryptionByDefault: {
                type: "object",
                sentAs: "ApplyServerSideEncryptionByDefault",
                parameters: {
                  SSEAlgorithm: { sentAs: "SSEAlgorithm" },
                  KMSMasterKeyID: { sentAs: "KMSMasterKeyID" },
                  ProjectID: { sentAs: "ProjectID" },
                },
              },
            },
          },
          kt = {
            type: "object",
            location: "xml",
            sentAs: "InventoryConfiguration",
            parameters: {
              Id: { sentAs: "Id" },
              IsEnabled: { sentAs: "IsEnabled" },
              Filter: {
                type: "object",
                sentAs: "Filter",
                parameters: { Prefix: { sentAs: "Prefix" } },
              },
              Destination: {
                type: "object",
                sentAs: "Destination",
                parameters: {
                  Format: { sentAs: "Format" },
                  Bucket: { sentAs: "Bucket" },
                  Prefix: { sentAs: "Prefix" },
                  Encryption: {
                    type: "object",
                    sentAs: "Encryption",
                    parameters: {
                      "SSE-KMS": {
                        type: "object",
                        sentAs: "SSE-KMS",
                        parameters: {
                          KeyId: { sentAs: "KeyId", type: "adapter" },
                        },
                      },
                    },
                  },
                },
              },
              Schedule: {
                type: "object",
                sentAs: "Schedule",
                parameters: { Frequency: { sentAs: "Frequency" } },
              },
              IncludedObjectVersions: { sentAs: "IncludedObjectVersions" },
              OptionalFields: {
                type: "object",
                location: "xml",
                sentAs: "OptionalFields",
                parameters: {
                  Field: {
                    type: "array",
                    sentAs: "Field",
                    items: { type: "string" },
                  },
                },
              },
            },
          },
          Pt = {
            HeadBucket: {
              httpMethod: "HEAD",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            HeadApiVersion: {
              httpMethod: "HEAD",
              urlPath: "apiversion",
              parameters: { Bucket: { location: "uri" } },
            },
            HeadApiVersionOutput: {
              parameters: {
                ApiVersion: { location: "header", sentAs: "x-obs-api" },
              },
            },
            CreateBucket: {
              httpMethod: "PUT",
              data: { xmlRoot: "CreateBucketConfiguration" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ACL: { location: "header", sentAs: "acl", withPrefix: !0 },
                StorageType: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                FileInterface: {
                  location: "header",
                  sentAs: "fs-file-interface",
                  withPrefix: !0,
                },
                Type: {
                  location: "header",
                  sentAs: "bucket-type",
                  withPrefix: !0,
                },
                MultiAz: {
                  location: "header",
                  sentAs: "az-redundancy",
                  withPrefix: !0,
                },
                Cluster: {
                  location: "header",
                  sentAs: "location-clustergroup-id",
                  withPrefix: !0,
                },
                GrantFullControl: {
                  location: "header",
                  sentAs: "grant-full-control",
                  withPrefix: !0,
                },
                GrantRead: {
                  location: "header",
                  sentAs: "grant-read",
                  withPrefix: !0,
                },
                GrantReadACP: {
                  location: "header",
                  sentAs: "grant-read-acp",
                  withPrefix: !0,
                },
                GrantWrite: {
                  location: "header",
                  sentAs: "grant-write",
                  withPrefix: !0,
                },
                GrantWriteACP: {
                  location: "header",
                  sentAs: "grant-write-acp",
                  withPrefix: !0,
                },
                ClusterType: {
                  location: "header",
                  sentAs: "cluster-type",
                  withPrefix: !0,
                },
                MultiEnterprise: {
                  location: "header",
                  sentAs: "epid",
                  withPrefix: !0,
                },
                Location: { location: "xml", sentAs: "Location" },
              },
            },
            GetBucketMetadata: {
              httpMethod: "HEAD",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Origin: { location: "header", sentAs: "Origin" },
                RequestHeader: {
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                },
              },
            },
            GetBucketMetadataOutput: {
              parameters: {
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                ObsVersion: {
                  location: "header",
                  sentAs: "version",
                  withPrefix: !0,
                },
                Location: {
                  location: "header",
                  sentAs: "bucket-location",
                  withPrefix: !0,
                },
                FileInterface: {
                  location: "header",
                  sentAs: "fs-file-interface",
                  withPrefix: !0,
                },
                Type: {
                  location: "header",
                  sentAs: "bucket-type",
                  withPrefix: !0,
                },
                MultiAz: {
                  location: "header",
                  sentAs: "az-redundancy",
                  withPrefix: !0,
                },
                Cluster: {
                  location: "header",
                  sentAs: "location-clustergroup-id",
                  withPrefix: !0,
                },
                MultiEnterprise: {
                  location: "header",
                  sentAs: "epid",
                  withPrefix: !0,
                },
                ClusterType: {
                  location: "header",
                  sentAs: "cluster-type",
                  withPrefix: !0,
                },
                AllowOrigin: {
                  location: "header",
                  sentAs: "access-control-allow-origin",
                },
                MaxAgeSeconds: {
                  location: "header",
                  sentAs: "access-control-max-age",
                },
                ExposeHeader: {
                  location: "header",
                  sentAs: "access-control-expose-headers",
                },
                AllowMethod: {
                  location: "header",
                  sentAs: "access-control-allow-methods",
                },
                AllowHeader: {
                  location: "header",
                  sentAs: "access-control-allow-headers",
                },
              },
            },
            DeleteBucket: {
              httpMethod: "DELETE",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            ListBuckets: {
              httpMethod: "GET",
              parameters: {
                Type: { sentAs: "x-obs-bucket-type", location: "header" },
                Location: {
                  sentAs: "location",
                  location: "header",
                  withPrefix: !0,
                },
              },
            },
            ListBucketsOutput: {
              data: { type: "xml", xmlRoot: "ListAllMyBucketsResult" },
              parameters: {
                Buckets: {
                  location: "xml",
                  sentAs: "Bucket",
                  type: "array",
                  wrapper: "Buckets",
                  items: {
                    type: "object",
                    location: "xml",
                    sentAs: "Bucket",
                    parameters: {
                      Name: { sentAs: "Name" },
                      CreationDate: { sentAs: "CreationDate" },
                      Location: { sentAs: "Location" },
                      ClusterType: { sentAs: "ClusterType" },
                    },
                  },
                },
                Owner: {
                  type: "object",
                  location: "xml",
                  sentAs: "Owner",
                  parameters: {
                    ID: { sentAs: "ID" },
                    DisplayName: { sentAs: "DisplayName" },
                  },
                },
              },
            },
            ListObjects: {
              httpMethod: "GET",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Prefix: { location: "urlPath", sentAs: "prefix" },
                Marker: { location: "urlPath", sentAs: "marker" },
                MaxKeys: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "max-keys",
                },
                Delimiter: { location: "urlPath", sentAs: "delimiter" },
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
              },
            },
            ListObjectsOutput: {
              data: { type: "xml", xmlRoot: "ListBucketResult" },
              parameters: {
                Location: {
                  location: "header",
                  sentAs: "bucket-location",
                  withPrefix: !0,
                },
                Bucket: { location: "xml", sentAs: "Name" },
                Delimiter: { decode: !0, location: "xml", sentAs: "Delimiter" },
                IsTruncated: { location: "xml", sentAs: "IsTruncated" },
                Prefix: { decode: !0, location: "xml", sentAs: "Prefix" },
                Marker: { decode: !0, location: "xml", sentAs: "Marker" },
                NextMarker: {
                  decode: !0,
                  location: "xml",
                  sentAs: "NextMarker",
                },
                MaxKeys: { location: "xml", sentAs: "MaxKeys" },
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Contents: {
                  type: "array",
                  location: "xml",
                  sentAs: "Contents",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { decode: !0, sentAs: "Key" },
                      LastModified: { sentAs: "LastModified" },
                      ETag: { sentAs: "ETag" },
                      Size: { sentAs: "Size" },
                      Type: { sentAs: "Type" },
                      StorageClass: { sentAs: "StorageClass" },
                      Owner: nt,
                    },
                  },
                },
                CommonPrefixes: st,
              },
            },
            ListVersions: {
              httpMethod: "GET",
              urlPath: "versions",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Prefix: { location: "urlPath", sentAs: "prefix" },
                KeyMarker: { location: "urlPath", sentAs: "key-marker" },
                MaxKeys: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "max-keys",
                },
                Delimiter: { location: "urlPath", sentAs: "delimiter" },
                VersionIdMarker: {
                  location: "urlPath",
                  sentAs: "version-id-marker",
                },
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
              },
            },
            ListVersionsOutput: {
              data: { type: "xml", xmlRoot: "ListVersionsResult" },
              parameters: {
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Location: {
                  location: "header",
                  sentAs: "bucket-location",
                  withPrefix: !0,
                },
                Bucket: { location: "xml", sentAs: "Name" },
                Prefix: { decode: !0, location: "xml", sentAs: "Prefix" },
                Delimiter: { decode: !0, location: "xml", sentAs: "Delimiter" },
                KeyMarker: { decode: !0, location: "xml", sentAs: "KeyMarker" },
                VersionIdMarker: { location: "xml", sentAs: "VersionIdMarker" },
                NextKeyMarker: {
                  decode: !0,
                  location: "xml",
                  sentAs: "NextKeyMarker",
                },
                NextVersionIdMarker: {
                  location: "xml",
                  sentAs: "NextVersionIdMarker",
                },
                MaxKeys: { location: "xml", sentAs: "MaxKeys" },
                IsTruncated: { location: "xml", sentAs: "IsTruncated" },
                Versions: {
                  type: "array",
                  location: "xml",
                  sentAs: "Version",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { decode: !0, sentAs: "Key" },
                      VersionId: { sentAs: "VersionId" },
                      IsLatest: { sentAs: "IsLatest" },
                      LastModified: { sentAs: "LastModified" },
                      ETag: { sentAs: "ETag" },
                      Size: { sentAs: "Size" },
                      Type: { sentAs: "Type" },
                      Owner: nt,
                      StorageClass: { sentAs: "StorageClass" },
                    },
                  },
                },
                DeleteMarkers: {
                  type: "array",
                  location: "xml",
                  sentAs: "DeleteMarker",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { decode: !0, sentAs: "Key" },
                      VersionId: { sentAs: "VersionId" },
                      IsLatest: { sentAs: "IsLatest" },
                      LastModified: { sentAs: "LastModified" },
                      Owner: nt,
                    },
                  },
                },
                CommonPrefixes: st,
              },
            },
            PutBackToSource: {
              httpMethod: "PUT",
              data: { xmlRoot: "BackToSourceConfiguration" },
              urlPath: "backtosource",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                BackToSourceRules: it,
                ContentMD5: { location: "header", sentAs: "Content-MD5" },
              },
            },
            DeleteBackToSource: {
              httpMethod: "DELETE",
              urlPath: "backtosource",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBackToSource: {
              httpMethod: "GET",
              urlPath: "backtosource",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBackToSourceOutput: {
              data: { type: "xml", xmlRoot: "BackToSourceConfiguration" },
              parameters: { BackToSourceRules: it },
            },
            GetBucketLocation: {
              httpMethod: "GET",
              urlPath: "location",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketLocationOutput: {
              data: { type: "xml" },
              parameters: { Location: { location: "xml", sentAs: "Location" } },
            },
            GetBucketStorageInfo: {
              httpMethod: "GET",
              urlPath: "storageinfo",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketStorageInfoOutput: {
              data: { type: "xml", xmlRoot: "GetBucketStorageInfoResult" },
              parameters: {
                Size: { location: "xml", sentAs: "Size" },
                ObjectNumber: { location: "xml", sentAs: "ObjectNumber" },
              },
            },
            SetBucketQuota: {
              httpMethod: "PUT",
              urlPath: "quota",
              data: { xmlRoot: "Quota" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                StorageQuota: {
                  required: !0,
                  location: "xml",
                  sentAs: "StorageQuota",
                },
              },
            },
            GetBucketQuota: {
              httpMethod: "GET",
              urlPath: "quota",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketQuotaOutput: {
              data: { type: "xml", xmlRoot: "Quota" },
              parameters: {
                StorageQuota: { location: "xml", sentAs: "StorageQuota" },
              },
            },
            SetBucketAcl: {
              httpMethod: "PUT",
              urlPath: "acl",
              data: { xmlRoot: "AccessControlPolicy" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                Owner: nt,
                Grants: ct,
              },
            },
            GetBucketInventory: {
              httpMethod: "GET",
              urlPath: "inventory",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketInventoryOutput: {
              data: { type: "xml", xmlRoot: "ListInventoryConfiguration" },
              parameters: {
                Rules: {
                  type: "array",
                  location: "xml",
                  sentAs: "InventoryConfiguration",
                  items: {
                    type: "object",
                    parameters: {
                      Id: { sentAs: "Id" },
                      IsEnabled: { sentAs: "IsEnabled" },
                      Filter: {
                        type: "object",
                        sentAs: "Filter",
                        parameters: { Prefix: { sentAs: "Prefix" } },
                      },
                      Destination: {
                        type: "object",
                        sentAs: "Destination",
                        parameters: {
                          Format: { sentAs: "Format" },
                          Bucket: { sentAs: "Bucket" },
                          Prefix: { sentAs: "Prefix" },
                        },
                      },
                      Schedule: {
                        type: "object",
                        sentAs: "Schedule",
                        parameters: { Frequency: { sentAs: "Frequency" } },
                      },
                      IncludedObjectVersions: {
                        sentAs: "IncludedObjectVersions",
                      },
                      OptionalFields: {
                        type: "object",
                        location: "xml",
                        sentAs: "OptionalFields",
                        parameters: {
                          Field: {
                            type: "array",
                            sentAs: "Field",
                            items: { type: "string" },
                          },
                        },
                      },
                      LastExportTime: { sentAs: "LastExportTime" },
                    },
                  },
                },
              },
            },
            SetBucketInventory: {
              httpMethod: "PUT",
              urlPath: "inventory",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Id: { location: "urlPath", sentAs: "id" },
                InventoryConfiguration: kt,
              },
            },
            SetBucketInventoryOutput: {
              data: { type: "xml", xmlRoot: "InventoryConfiguration" },
              parameters: { InventoryConfiguration: kt },
            },
            DeleteBucketInventory: {
              httpMethod: "DELETE",
              urlPath: "inventory",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Id: { location: "urlPath", sentAs: "id" },
              },
            },
            DeleteBucketInventoryOutput: {
              data: { type: "xml", xmlRoot: "InventoryConfiguration" },
              parameters: { InventoryConfiguration: kt },
            },
            GetBucketAcl: {
              httpMethod: "GET",
              urlPath: "acl",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketAclOutput: {
              data: { type: "xml", xmlRoot: "AccessControlPolicy" },
              parameters: { Owner: nt, Grants: ct },
            },
            SetBucketLoggingConfiguration: {
              httpMethod: "PUT",
              urlPath: "logging",
              data: { xmlRoot: "BucketLoggingStatus", xmlAllowEmpty: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Agency: { location: "xml", sentAs: "Agency" },
                LoggingEnabled: lt,
              },
            },
            GetBucketLoggingConfiguration: {
              httpMethod: "GET",
              urlPath: "logging",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketLoggingConfigurationOutput: {
              data: { type: "xml", xmlRoot: "BucketLoggingStatus" },
              parameters: {
                Agency: { location: "xml", sentAs: "Agency" },
                LoggingEnabled: lt,
              },
            },
            SetSFSAcl: {
              httpMethod: "PUT",
              urlPath: "sfsacl",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Policy: { required: !0, location: "body" },
              },
            },
            GetSFSAcl: {
              httpMethod: "GET",
              urlPath: "sfsacl",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetSFSAclOutput: {
              data: { type: "body" },
              parameters: { Policy: { location: "body" } },
            },
            DeleteSFSAcl: {
              httpMethod: "DELETE",
              urlPath: "sfsacl",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            SetBucketPolicy: {
              httpMethod: "PUT",
              urlPath: "policy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Policy: { required: !0, location: "body" },
              },
            },
            GetBucketPolicy: {
              httpMethod: "GET",
              urlPath: "policy",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketPolicyOutput: {
              data: { type: "body" },
              parameters: { Policy: { location: "body" } },
            },
            DeleteBucketPolicy: {
              httpMethod: "DELETE",
              urlPath: "policy",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            SetBucketDisPolicy: {
              httpMethod: "PUT",
              urlPath: "disPolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
                Rules: { required: !0, location: "body" },
              },
            },
            GetBucketDisPolicy: {
              httpMethod: "GET",
              urlPath: "disPolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
                ContentType: { location: "header", sentAs: "Content-Type" },
              },
            },
            GetBucketDisPolicyOutput: {
              data: { type: "body" },
              parameters: { Rules: { location: "body" } },
            },
            DeleteBucketDisPolicy: {
              httpMethod: "DELETE",
              urlPath: "disPolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
              },
            },
            SetBucketLifecycleConfiguration: {
              httpMethod: "PUT",
              urlPath: "lifecycle",
              data: { xmlRoot: "LifecycleConfiguration", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Rules: ut,
              },
            },
            GetBucketLifecycleConfiguration: {
              httpMethod: "GET",
              urlPath: "lifecycle",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketLifecycleConfigurationOutput: {
              data: { type: "xml", xmlRoot: "LifecycleConfiguration" },
              parameters: { Rules: ut },
            },
            DeleteBucketLifecycleConfiguration: {
              httpMethod: "DELETE",
              urlPath: "lifecycle",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            SetBucketWebsiteConfiguration: {
              httpMethod: "PUT",
              urlPath: "website",
              data: { xmlRoot: "WebsiteConfiguration" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                RedirectAllRequestsTo: pt,
                IndexDocument: ht,
                ErrorDocument: mt,
                RoutingRules: dt,
              },
            },
            GetBucketWebsiteConfiguration: {
              httpMethod: "GET",
              urlPath: "website",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketWebsiteConfigurationOutput: {
              data: { type: "xml", xmlRoot: "WebsiteConfiguration" },
              parameters: {
                RedirectAllRequestsTo: pt,
                IndexDocument: ht,
                ErrorDocument: mt,
                RoutingRules: dt,
              },
            },
            DeleteBucketWebsiteConfiguration: {
              httpMethod: "DELETE",
              urlPath: "website",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            SetBucketVersioningConfiguration: {
              httpMethod: "PUT",
              urlPath: "versioning",
              data: { xmlRoot: "VersioningConfiguration" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                VersionStatus: {
                  required: !0,
                  location: "xml",
                  sentAs: "Status",
                },
              },
            },
            GetBucketVersioningConfiguration: {
              httpMethod: "GET",
              urlPath: "versioning",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketVersioningConfigurationOutput: {
              data: { type: "xml", xmlRoot: "VersioningConfiguration" },
              parameters: {
                VersionStatus: { location: "xml", sentAs: "Status" },
              },
            },
            SetBucketCors: {
              httpMethod: "PUT",
              urlPath: "cors",
              data: { xmlRoot: "CORSConfiguration", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                CorsRules: ft,
              },
            },
            GetBucketCors: {
              httpMethod: "GET",
              urlPath: "cors",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketCorsOutput: {
              data: { type: "xml", xmlRoot: "CORSConfiguration" },
              parameters: { CorsRules: ft },
            },
            DeleteBucketCors: {
              httpMethod: "DELETE",
              urlPath: "cors",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            SetBucketNotification: {
              httpMethod: "PUT",
              urlPath: "notification",
              data: { xmlRoot: "NotificationConfiguration", xmlAllowEmpty: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                TopicConfigurations: gt,
                FunctionGraphConfigurations: yt,
                FunctionStageConfigurations: At,
              },
            },
            GetBucketNotification: {
              httpMethod: "GET",
              urlPath: "notification",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketNotificationOutput: {
              data: { type: "xml", xmlRoot: "NotificationConfiguration" },
              parameters: {
                RequestId: { location: "header", sentAs: "x-obs-request-id" },
                TopicConfigurations: gt,
                FunctionGraphConfigurations: yt,
                FunctionStageConfigurations: At,
              },
            },
            SetBucketTagging: {
              httpMethod: "PUT",
              urlPath: "tagging",
              data: { xmlRoot: "Tagging", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Tags: xt,
              },
            },
            DeleteBucketTagging: {
              httpMethod: "DELETE",
              urlPath: "tagging",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketTagging: {
              httpMethod: "GET",
              urlPath: "tagging",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketTaggingOutput: {
              data: { type: "xml", xmlRoot: "Tagging" },
              parameters: { Tags: xt },
            },
            SetBucketStoragePolicy: {
              httpMethod: "PUT",
              urlPath: "storageClass",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                StorageClass: {
                  required: !0,
                  location: "xml",
                  type: "adapter",
                  sentAs: "StorageClass",
                },
              },
            },
            GetBucketStoragePolicy: {
              httpMethod: "GET",
              urlPath: "storageClass",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketStoragePolicyOutput: {
              data: { type: "xml" },
              parameters: {
                StorageClass: {
                  location: "xml",
                  type: "string",
                  sentAs: "StorageClass",
                },
              },
            },
            SetBucketReplication: {
              httpMethod: "PUT",
              urlPath: "replication",
              data: { xmlRoot: "ReplicationConfiguration", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Agency: { location: "xml", sentAs: "Agency" },
                Rules: bt,
              },
            },
            GetBucketReplication: {
              httpMethod: "GET",
              urlPath: "replication",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketReplicationOutput: {
              data: { type: "xml", xmlRoot: "ReplicationConfiguration" },
              parameters: {
                Agency: { location: "xml", sentAs: "Agency" },
                Rules: bt,
              },
            },
            DeleteBucketReplication: {
              httpMethod: "DELETE",
              urlPath: "replication",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            PutObject: {
              httpMethod: "PUT",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                ContentMD5: { location: "header", sentAs: "Content-MD5" },
                ContentType: { location: "header", sentAs: "Content-Type" },
                Offset: { type: "plain" },
                ContentLength: {
                  location: "header",
                  sentAs: "Content-Length",
                  type: "plain",
                },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                GrantRead: {
                  location: "header",
                  sentAs: "grant-read",
                  withPrefix: !0,
                },
                GrantReadAcp: {
                  location: "header",
                  sentAs: "grant-read-acp",
                  withPrefix: !0,
                },
                GrantWriteAcp: {
                  location: "header",
                  sentAs: "grant-write-acp",
                  withPrefix: !0,
                },
                GrantFullControl: {
                  location: "header",
                  sentAs: "grant-full-control",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                  type: "adapter",
                },
                Metadata: {
                  type: "object",
                  location: "header",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                CacheControl: { location: "header", sentAs: "Cache-Control" },
                ContentDisposition: {
                  location: "header",
                  sentAs: "Content-Disposition",
                  encodingSafe: ' ;/?:@&=+$,"',
                },
                ContentLanguage: {
                  location: "header",
                  sentAs: "Content-Language",
                },
                ContentEncoding: {
                  location: "header",
                  sentAs: "Content-Encoding",
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                Expires: {
                  location: "header",
                  sentAs: "expires",
                  type: "number",
                  withPrefix: !0,
                },
                SuccessActionRedirect: {
                  location: "header",
                  sentAs: "success-action-redirect",
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                  type: "adapter",
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                Body: { location: "body" },
                SourceFile: { type: "srcFile" },
                ProgressCallback: { type: "plain" },
              },
            },
            PutObjectOutput: {
              parameters: {
                ETag: { location: "header", sentAs: "etag" },
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            AppendObject: {
              httpMethod: "POST",
              urlPath: "append",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                Position: {
                  location: "urlPath",
                  sentAs: "position",
                  type: "number",
                },
                ContentMD5: { location: "header", sentAs: "Content-MD5" },
                ContentType: { location: "header", sentAs: "Content-Type" },
                Offset: { type: "plain" },
                ContentLength: {
                  location: "header",
                  sentAs: "Content-Length",
                  type: "plain",
                },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                GrantRead: {
                  location: "header",
                  sentAs: "grant-read",
                  withPrefix: !0,
                },
                GrantReadAcp: {
                  location: "header",
                  sentAs: "grant-read-acp",
                  withPrefix: !0,
                },
                GrantWriteAcp: {
                  location: "header",
                  sentAs: "grant-write-acp",
                  withPrefix: !0,
                },
                GrantFullControl: {
                  location: "header",
                  sentAs: "grant-full-control",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                  type: "adapter",
                },
                Metadata: {
                  type: "object",
                  location: "header",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                Expires: {
                  location: "header",
                  sentAs: "expires",
                  type: "number",
                  withPrefix: !0,
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                  type: "adapter",
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                Body: { location: "body" },
                SourceFile: { type: "srcFile" },
                ProgressCallback: { type: "plain" },
              },
            },
            AppendObjectOutput: {
              parameters: {
                ETag: { location: "header", sentAs: "etag" },
                NextPosition: {
                  location: "header",
                  sentAs: "next-append-position",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            GetObject: {
              httpMethod: "GET",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                ResponseCacheControl: {
                  location: "urlPath",
                  sentAs: "response-cache-control",
                },
                ResponseContentDisposition: {
                  location: "urlPath",
                  sentAs: "response-content-disposition",
                },
                ResponseContentEncoding: {
                  location: "urlPath",
                  sentAs: "response-content-encoding",
                },
                ResponseContentLanguage: {
                  location: "urlPath",
                  sentAs: "response-content-language",
                },
                ResponseContentType: {
                  location: "urlPath",
                  sentAs: "response-content-type",
                },
                ResponseExpires: {
                  location: "urlPath",
                  sentAs: "response-expires",
                },
                VersionId: { location: "urlPath", sentAs: "versionId" },
                ImageProcess: {
                  location: "urlPath",
                  sentAs: "x-image-process",
                },
                IfMatch: { location: "header", sentAs: "If-Match" },
                IfModifiedSince: {
                  location: "header",
                  sentAs: "If-Modified-Since",
                },
                IfNoneMatch: { location: "header", sentAs: "If-None-Match" },
                IfUnmodifiedSince: {
                  location: "header",
                  sentAs: "If-Unmodified-Since",
                },
                Range: { location: "header", sentAs: "Range" },
                Origin: { location: "header", sentAs: "Origin" },
                RequestHeader: {
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                },
                SaveByType: { type: "dstFile" },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                ProgressCallback: { type: "plain" },
              },
            },
            GetObjectOutput: {
              data: { type: "body" },
              parameters: {
                Content: { location: "body" },
                Expiration: {
                  location: "header",
                  sentAs: "expiration",
                  withPrefix: !0,
                },
                ETag: { location: "header", sentAs: "etag" },
                CacheControl: { location: "header", sentAs: "Cache-Control" },
                ContentDisposition: {
                  location: "header",
                  sentAs: "Content-Disposition",
                },
                ContentEncoding: {
                  location: "header",
                  sentAs: "Content-Encoding",
                },
                ContentLanguage: {
                  location: "header",
                  sentAs: "Content-Language",
                },
                ContentType: { location: "header", sentAs: "Content-Type" },
                Expires: { location: "header", sentAs: "Expires" },
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                ContentLength: { location: "header", sentAs: "Content-Length" },
                DeleteMarker: {
                  location: "header",
                  sentAs: "delete-marker",
                  withPrefix: !0,
                },
                LastModified: { location: "header", sentAs: "Last-Modified" },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                Restore: {
                  location: "header",
                  sentAs: "restore",
                  withPrefix: !0,
                },
                AllowOrigin: {
                  location: "header",
                  sentAs: "access-control-allow-origin",
                },
                MaxAgeSeconds: {
                  location: "header",
                  sentAs: "access-control-max-age",
                },
                ExposeHeader: {
                  location: "header",
                  sentAs: "access-control-expose-headers",
                },
                AllowMethod: {
                  location: "header",
                  sentAs: "access-control-allow-methods",
                },
                AllowHeader: {
                  location: "header",
                  sentAs: "access-control-allow-headers",
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
                Metadata: {
                  location: "header",
                  type: "object",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
              },
            },
            CopyObject: {
              httpMethod: "PUT",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                GrantRead: {
                  location: "header",
                  sentAs: "grant-read",
                  withPrefix: !0,
                },
                GrantReadAcp: {
                  location: "header",
                  sentAs: "grant-read-acp",
                  withPrefix: !0,
                },
                GrantWriteAcp: {
                  location: "header",
                  sentAs: "grant-write-acp",
                  withPrefix: !0,
                },
                GrantFullControl: {
                  location: "header",
                  sentAs: "grant-full-control",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                  type: "adapter",
                },
                CopySource: {
                  required: !0,
                  location: "header",
                  sentAs: "copy-source",
                  withPrefix: !0,
                  skipEncoding: !0,
                },
                CopySourceIfMatch: {
                  location: "header",
                  sentAs: "copy-source-if-match",
                  withPrefix: !0,
                },
                CopySourceIfModifiedSince: {
                  location: "header",
                  sentAs: "copy-source-if-modified-since",
                  withPrefix: !0,
                },
                CopySourceIfNoneMatch: {
                  location: "header",
                  sentAs: "copy-source-if-none-match",
                  withPrefix: !0,
                },
                CopySourceIfUnmodifiedSince: {
                  location: "header",
                  sentAs: "copy-source-if-unmodified-since",
                  withPrefix: !0,
                },
                ContentType: { location: "header", sentAs: "Content-Type" },
                ContentEncoding: {
                  location: "header",
                  sentAs: "content-encoding",
                },
                ContentLanguage: {
                  location: "header",
                  sentAs: "content-language",
                },
                ContentDisposition: {
                  location: "header",
                  sentAs: "content-disposition",
                },
                CacheControl: { location: "header", sentAs: "cache-control" },
                Expires: { location: "header", sentAs: "expires" },
                Metadata: {
                  type: "object",
                  location: "header",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                MetadataDirective: {
                  location: "header",
                  sentAs: "metadata-directive",
                  withPrefix: !0,
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                SuccessActionRedirect: {
                  location: "header",
                  sentAs: "success-action-redirect",
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                  type: "adapter",
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                CopySourceSseC: {
                  location: "header",
                  sentAs:
                    "copy-source-server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                CopySourceSseCKey: {
                  location: "header",
                  sentAs: "copy-source-server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
              },
            },
            CopyObjectOutput: {
              data: { type: "xml", xmlRoot: "CopyObjectResult" },
              parameters: {
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                CopySourceVersionId: {
                  location: "header",
                  sentAs: "copy-source-version-id",
                  withPrefix: !0,
                },
                ETag: { location: "xml", sentAs: "ETag" },
                LastModified: { location: "xml", sentAs: "LastModified" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            RestoreObject: {
              httpMethod: "POST",
              urlPath: "restore",
              data: { xmlRoot: "RestoreRequest", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
                Days: { location: "xml", sentAs: "Days" },
                Tier: {
                  wrapper: "RestoreJob",
                  location: "xml",
                  sentAs: "Tier",
                },
              },
            },
            GetObjectMetadata: {
              httpMethod: "HEAD",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
                Origin: { location: "header", sentAs: "Origin" },
                RequestHeader: {
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
              },
            },
            GetObjectMetadataOutput: {
              parameters: {
                Expiration: {
                  location: "header",
                  sentAs: "expiration",
                  withPrefix: !0,
                },
                LastModified: { location: "header", sentAs: "Last-Modified" },
                ContentLength: { location: "header", sentAs: "Content-Length" },
                ContentType: { location: "header", sentAs: "Content-Type" },
                ETag: { location: "header", sentAs: "etag" },
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                Restore: {
                  location: "header",
                  sentAs: "restore",
                  withPrefix: !0,
                },
                ObjectType: { location: "header", sentAs: "x-obs-object-type" },
                NextPosition: {
                  location: "header",
                  sentAs: "x-obs-next-append-position",
                },
                AllowOrigin: {
                  location: "header",
                  sentAs: "access-control-allow-origin",
                },
                MaxAgeSeconds: {
                  location: "header",
                  sentAs: "access-control-max-age",
                },
                ExposeHeader: {
                  location: "header",
                  sentAs: "access-control-expose-headers",
                },
                AllowMethod: {
                  location: "header",
                  sentAs: "access-control-allow-methods",
                },
                AllowHeader: {
                  location: "header",
                  sentAs: "access-control-allow-headers",
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "x-obs-server-side-encryption-kms-key-id",
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
                Metadata: {
                  location: "header",
                  type: "object",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                ContentLanguage: {
                  location: "header",
                  sentAs: "Content-Language",
                },
                ContentEncoding: {
                  location: "header",
                  sentAs: "Content-Encoding",
                },
                CacheControl: { location: "header", sentAs: "Cache-Control" },
                ContentDisposition: {
                  location: "header",
                  sentAs: "Content-Disposition",
                },
                Expires: { location: "header", sentAs: "Expires" },
                ReplicationStatus: {
                  location: "header",
                  sentAs: "replication-status",
                  withPrefix: !0,
                },
              },
            },
            SetObjectMetadata: {
              httpMethod: "PUT",
              urlPath: "metadata",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
                Origin: { location: "header", sentAs: "Origin" },
                RequestHeader: {
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                },
                CacheControl: { location: "header", sentAs: "Cache-Control" },
                ContentDisposition: {
                  location: "header",
                  sentAs: "Content-Disposition",
                  encodingSafe: ' ;/?:@&=+$,"',
                },
                ContentLanguage: {
                  location: "header",
                  sentAs: "Content-Language",
                },
                ContentEncoding: {
                  location: "header",
                  sentAs: "Content-Encoding",
                },
                ContentType: { location: "header", sentAs: "Content-Type" },
                Expires: { location: "header", sentAs: "Expires" },
                Metadata: {
                  shape: "Sy",
                  location: "header",
                  type: "object",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                MetadataDirective: {
                  location: "header",
                  sentAs: "metadata-directive",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
              },
            },
            SetObjectMetadataOutput: {
              parameters: {
                Expires: { location: "header", sentAs: "Expires" },
                ContentLength: { location: "header", sentAs: "Content-Length" },
                ContentType: { location: "header", sentAs: "Content-Type" },
                ContentLanguage: {
                  location: "header",
                  sentAs: "Content-Language",
                },
                CacheControl: { location: "header", sentAs: "Cache-Control" },
                ContentDisposition: {
                  location: "header",
                  sentAs: "Content-Disposition",
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                  type: "adapter",
                },
                Metadata: {
                  location: "header",
                  type: "object",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
              },
            },
            SetObjectAcl: {
              httpMethod: "PUT",
              urlPath: "acl",
              data: { xmlRoot: "AccessControlPolicy" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                Delivered: { location: "xml", sentAs: "Delivered" },
                Owner: nt,
                Grants: ct,
              },
            },
            SetObjectAclOutput: {
              parameters: {
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
              },
            },
            GetObjectAcl: {
              httpMethod: "GET",
              urlPath: "acl",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
              },
            },
            GetObjectAclOutput: {
              data: { type: "xml", xmlRoot: "AccessControlPolicy" },
              parameters: {
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                Delivered: { location: "xml", sentAs: "Delivered" },
                Owner: nt,
                Grants: ct,
              },
            },
            DeleteObject: {
              httpMethod: "DELETE",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
              },
            },
            DeleteObjectOutput: {
              parameters: {
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                DeleteMarker: {
                  location: "header",
                  sentAs: "delete-marker",
                  withPrefix: !0,
                },
              },
            },
            DeleteObjects: {
              httpMethod: "POST",
              urlPath: "delete",
              data: { xmlRoot: "Delete", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Quiet: { location: "xml", sentAs: "Quiet" },
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Objects: {
                  required: !0,
                  type: "array",
                  location: "xml",
                  sentAs: "Object",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { sentAs: "Key" },
                      VersionId: { sentAs: "VersionId" },
                    },
                  },
                },
              },
            },
            DeleteObjectsOutput: {
              data: { type: "xml", xmlRoot: "DeleteResult" },
              EncodingType: { location: "xml", sentAs: "EncodingType" },
              parameters: {
                Deleteds: {
                  type: "array",
                  location: "xml",
                  sentAs: "Deleted",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { decode: !0, sentAs: "Key" },
                      VersionId: { sentAs: "VersionId" },
                      DeleteMarker: { sentAs: "DeleteMarker" },
                      DeleteMarkerVersionId: {
                        sentAs: "DeleteMarkerVersionId",
                      },
                    },
                  },
                },
                Errors: {
                  type: "array",
                  location: "xml",
                  sentAs: "Error",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { sentAs: "Key" },
                      VersionId: { sentAs: "VersionId" },
                      Code: { sentAs: "Code" },
                      Message: { sentAs: "Message" },
                    },
                  },
                },
              },
            },
            InitiateMultipartUpload: {
              httpMethod: "POST",
              urlPath: "uploads",
              parameters: {
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                GrantRead: {
                  location: "header",
                  sentAs: "grant-read",
                  withPrefix: !0,
                },
                GrantReadAcp: {
                  location: "header",
                  sentAs: "grant-read-acp",
                  withPrefix: !0,
                },
                GrantWriteAcp: {
                  location: "header",
                  sentAs: "grant-write-acp",
                  withPrefix: !0,
                },
                GrantFullControl: {
                  location: "header",
                  sentAs: "grant-full-control",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                  type: "adapter",
                },
                Metadata: {
                  type: "object",
                  location: "header",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                Expires: {
                  location: "header",
                  sentAs: "expires",
                  type: "number",
                  withPrefix: !0,
                },
                ContentType: { location: "header", sentAs: "Content-Type" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                  type: "adapter",
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
              },
            },
            InitiateMultipartUploadOutput: {
              data: { type: "xml", xmlRoot: "InitiateMultipartUploadResult" },
              parameters: {
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Bucket: { location: "xml", sentAs: "Bucket" },
                Key: { location: "xml", sentAs: "Key" },
                UploadId: { location: "xml", sentAs: "UploadId" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            ListMultipartUploads: {
              httpMethod: "GET",
              urlPath: "uploads",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Delimiter: { location: "urlPath", sentAs: "delimiter" },
                KeyMarker: { location: "urlPath", sentAs: "key-marker" },
                MaxUploads: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "max-uploads",
                },
                Prefix: { location: "urlPath", sentAs: "prefix" },
                UploadIdMarker: {
                  location: "urlPath",
                  sentAs: "upload-id-marker",
                },
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
              },
            },
            ListMultipartUploadsOutput: {
              data: { type: "xml", xmlRoot: "ListMultipartUploadsResult" },
              parameters: {
                Bucket: { location: "xml", sentAs: "Bucket" },
                KeyMarker: { decode: !0, location: "xml", sentAs: "KeyMarker" },
                UploadIdMarker: { location: "xml", sentAs: "UploadIdMarker" },
                NextKeyMarker: {
                  decode: !0,
                  location: "xml",
                  sentAs: "NextKeyMarker",
                },
                Prefix: { decode: !0, location: "xml", sentAs: "Prefix" },
                Delimiter: { decode: !0, location: "xml", sentAs: "Delimiter" },
                NextUploadIdMarker: {
                  location: "xml",
                  sentAs: "NextUploadIdMarker",
                },
                MaxUploads: { location: "xml", sentAs: "MaxUploads" },
                IsTruncated: { location: "xml", sentAs: "IsTruncated" },
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Uploads: {
                  type: "array",
                  location: "xml",
                  sentAs: "Upload",
                  items: {
                    type: "object",
                    parameters: {
                      UploadId: { sentAs: "UploadId" },
                      Key: { decode: !0, sentAs: "Key" },
                      Initiated: { sentAs: "Initiated" },
                      StorageClass: { sentAs: "StorageClass" },
                      Owner: nt,
                      Initiator: at,
                    },
                  },
                },
                CommonPrefixes: st,
              },
            },
            UploadPart: {
              httpMethod: "PUT",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                PartNumber: {
                  required: !0,
                  type: "number",
                  location: "urlPath",
                  sentAs: "partNumber",
                },
                UploadId: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "uploadId",
                },
                ContentMD5: { location: "header", sentAs: "Content-MD5" },
                Body: { location: "body" },
                SourceFile: { type: "srcFile" },
                Offset: { type: "plain" },
                PartSize: { type: "plain" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                ProgressCallback: { type: "plain" },
              },
            },
            UploadPartOutput: {
              parameters: {
                ETag: { location: "header", sentAs: "etag" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            ListParts: {
              httpMethod: "GET",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                UploadId: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "uploadId",
                },
                MaxParts: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "max-parts",
                },
                PartNumberMarker: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "part-number-marker",
                },
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
              },
            },
            ListPartsOutput: {
              data: { type: "xml", xmlRoot: "ListPartsResult" },
              parameters: {
                Bucket: { location: "xml", sentAs: "Bucket" },
                Key: { decode: !0, location: "xml", sentAs: "Key" },
                UploadId: { location: "xml", sentAs: "UploadId" },
                PartNumberMarker: {
                  location: "xml",
                  sentAs: "PartNumberMarker",
                },
                NextPartNumberMarker: {
                  location: "xml",
                  sentAs: "NextPartNumberMarker",
                },
                MaxParts: { location: "xml", sentAs: "MaxParts" },
                IsTruncated: { location: "xml", sentAs: "IsTruncated" },
                StorageClass: { location: "xml", sentAs: "StorageClass" },
                EncodingType: { location: "urlPath", sentAs: "EncodingType" },
                Initiator: at,
                Owner: nt,
                Parts: {
                  type: "array",
                  location: "xml",
                  sentAs: "Part",
                  items: {
                    type: "object",
                    parameters: {
                      PartNumber: { sentAs: "PartNumber" },
                      LastModified: { sentAs: "LastModified" },
                      ETag: { sentAs: "ETag" },
                      Size: { sentAs: "Size" },
                    },
                  },
                },
              },
            },
            CopyPart: {
              httpMethod: "PUT",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                PartNumber: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "partNumber",
                  type: "number",
                },
                UploadId: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "uploadId",
                },
                CopySource: {
                  required: !0,
                  location: "header",
                  sentAs: "copy-source",
                  skipEncoding: !0,
                  withPrefix: !0,
                },
                CopySourceRange: {
                  location: "header",
                  sentAs: "copy-source-range",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                CopySourceSseC: {
                  location: "header",
                  sentAs:
                    "copy-source-server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                CopySourceSseCKey: {
                  location: "header",
                  sentAs: "copy-source-server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
              },
            },
            CopyPartOutput: {
              data: { type: "xml", xmlRoot: "CopyPartResult" },
              parameters: {
                LastModified: { location: "xml", sentAs: "LastModified" },
                ETag: { location: "xml", sentAs: "ETag" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            AbortMultipartUpload: {
              httpMethod: "DELETE",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                UploadId: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "uploadId",
                },
              },
            },
            CompleteMultipartUpload: {
              httpMethod: "POST",
              data: { xmlRoot: "CompleteMultipartUpload" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                UploadId: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "uploadId",
                },
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                Parts: {
                  required: !0,
                  type: "array",
                  location: "xml",
                  sentAs: "Part",
                  items: {
                    type: "object",
                    parameters: {
                      PartNumber: { sentAs: "PartNumber" },
                      ETag: { sentAs: "ETag" },
                    },
                  },
                },
                Callback: {
                  location: "header",
                  sentAs: "callback",
                  withPrefix: !0,
                  type: "callback",
                  parameters: {
                    CallbackUrl: { required: !0 },
                    CallbackBody: { required: !0 },
                    CallbackHost: {},
                    CallbackBodyType: {},
                  },
                },
              },
            },
            CompleteMultipartUploadOutput: {
              data: { type: "xml", xmlRoot: "CompleteMultipartUploadResult" },
              parameters: {
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                Location: { location: "xml", sentAs: "Location" },
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Bucket: { location: "xml", sentAs: "Bucket" },
                Key: { decode: !0, location: "xml", sentAs: "Key" },
                ETag: { location: "xml", sentAs: "ETag" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
              CallbackResponse: {
                location: "body",
                sentAs: "CallbackResponseBody",
              },
            },
            OptionsBucket: {
              httpMethod: "OPTIONS",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Origin: { required: !0, location: "header", sentAs: "Origin" },
                AccessControlRequestMethods: {
                  required: !0,
                  type: "array",
                  location: "header",
                  sentAs: "Access-Control-Request-Method",
                  items: { type: "string" },
                },
                AccessControlRequestHeaders: {
                  type: "array",
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                  items: { type: "string" },
                },
              },
            },
            OptionsBucketOutput: {
              parameters: {
                AllowOrigin: {
                  location: "header",
                  sentAs: "access-control-allow-origin",
                },
                AllowHeader: {
                  location: "header",
                  sentAs: "access-control-allow-headers",
                },
                AllowMethod: {
                  location: "header",
                  sentAs: "access-control-allow-methods",
                },
                ExposeHeader: {
                  location: "header",
                  sentAs: "access-control-expose-headers",
                },
                MaxAgeSeconds: {
                  location: "header",
                  sentAs: "access-control-max-age",
                },
              },
            },
            OptionsObject: {
              httpMethod: "OPTIONS",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                Origin: { required: !0, location: "header", sentAs: "Origin" },
                AccessControlRequestMethods: {
                  required: !0,
                  type: "array",
                  location: "header",
                  sentAs: "Access-Control-Request-Method",
                  items: { type: "string" },
                },
                AccessControlRequestHeaders: {
                  type: "array",
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                  items: { type: "string" },
                },
              },
            },
            OptionsObjectOutput: {
              parameters: {
                AllowOrigin: {
                  location: "header",
                  sentAs: "access-control-allow-origin",
                },
                AllowHeader: {
                  location: "header",
                  sentAs: "access-control-allow-headers",
                },
                AllowMethod: {
                  location: "header",
                  sentAs: "access-control-allow-methods",
                },
                ExposeHeader: {
                  location: "header",
                  sentAs: "access-control-expose-headers",
                },
                MaxAgeSeconds: {
                  location: "header",
                  sentAs: "access-control-max-age",
                },
              },
            },
            GetBucketEncryption: {
              httpMethod: "GET",
              urlPath: "encryption",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketEncryptionOutput: {
              data: {
                type: "xml",
                xmlRoot: "ServerSideEncryptionConfiguration",
              },
              parameters: {
                Rule: {
                  type: "object",
                  location: "xml",
                  sentAs: "Rule",
                  parameters: {
                    ApplyServerSideEncryptionByDefault: {
                      type: "object",
                      sentAs: "ApplyServerSideEncryptionByDefault",
                      parameters: {
                        SSEAlgorithm: { sentAs: "SSEAlgorithm" },
                        KMSMasterKeyID: { sentAs: "KMSMasterKeyID" },
                        ProjectID: { sentAs: "ProjectID" },
                      },
                    },
                  },
                },
              },
            },
            SetBucketEncryption: {
              httpMethod: "PUT",
              urlPath: "encryption",
              data: { xmlRoot: "ServerSideEncryptionConfiguration" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Rule: wt,
              },
            },
            SetBucketEncryptionOutput: {
              data: {
                type: "xml",
                xmlRoot: "ServerSideEncryptionConfiguration",
              },
              parameters: { Rule: wt },
            },
            DeleteBucketEncryption: {
              httpMethod: "DELETE",
              urlPath: "encryption",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            DeleteBucketEncryptionOutput: {
              data: {
                type: "xml",
                xmlRoot: "ServerSideEncryptionConfiguration",
              },
              parameters: { Rule: wt },
            },
            GetBucketRequesterPay: {
              httpMethod: "GET",
              urlPath: "requestPayment",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketRequesterPayOutput: {
              data: { type: "xml", xmlRoot: "RequestPaymentConfiguration" },
              parameters: { Payer: { location: "xml", sentAs: "Payer" } },
            },
            SetBucketRequesterPay: {
              httpMethod: "PUT",
              urlPath: "requestPayment",
              data: { xmlRoot: "RequestPaymentConfiguration" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Payer: { location: "xml", sentAs: "Payer" },
              },
            },
            SetBucketRequesterPayOutput: {
              data: { type: "xml", xmlRoot: "RequestPaymentConfiguration" },
              parameters: { Payer: { location: "xml", sentAs: "Payer" } },
            },
            SetMirrorBackToSource: {
              httpMethod: "PUT",
              urlPath: "mirrorBackToSource",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
                Rules: { required: !0, location: "body" },
              },
            },
            SetMirrorBackToSourceOutput: {
              data: { type: "body" },
              parameters: { Rules: { location: "body" } },
            },
            GetMirrorBackToSource: {
              httpMethod: "GET",
              urlPath: "mirrorBackToSource",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
              },
            },
            GetMirrorBackToSourceOutput: {
              data: { type: "body" },
              parameters: { Rules: { location: "body" } },
            },
            DeleteMirrorBackToSource: {
              httpMethod: "DELETE",
              urlPath: "mirrorBackToSource",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
              },
            },
            GetBucketDirectColdAccess: {
              httpMethod: "GET",
              urlPath: "directcoldaccess",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketDirectColdAccessOutput: {
              data: { type: "xml", xmlRoot: "DirectColdAccessConfiguration" },
              parameters: { Status: { location: "xml", sentAs: "Status" } },
            },
            SetBucketDirectColdAccess: {
              httpMethod: "PUT",
              urlPath: "directcoldaccess",
              data: { xmlRoot: "DirectColdAccessConfiguration", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Status: { required: !0, location: "xml", sentAs: "Status" },
              },
            },
            SetBucketDirectColdAccessOutput: {
              data: { type: "xml", xmlRoot: "DirectColdAccessConfiguration" },
              parameters: { Status: { location: "xml", sentAs: "Status" } },
            },
            DeleteBucketDirectColdAccess: {
              httpMethod: "DELETE",
              urlPath: "directcoldaccess",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            DeleteBucketDirectColdAccessOutput: {
              data: { type: "xml", xmlRoot: "DirectColdAccessConfiguration" },
              parameters: { Status: { location: "xml", sentAs: "Status" } },
            },
            GetBucketCustomDomain: {
              httpMethod: "GET",
              urlPath: "customdomain",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketCustomDomainOutput: {
              data: { type: "xml", xmlRoot: "ListBucketCustomDomainsResult" },
              parameters: {
                Domains: {
                  location: "xml",
                  type: "array",
                  sentAs: "Domains",
                  items: {
                    type: "object",
                    parameters: {
                      DomainName: { sentAs: "DomainName" },
                      Value: { sentAs: "CreateTime" },
                    },
                  },
                },
              },
            },
            SetBucketCustomDomain: {
              httpMethod: "PUT",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                DomainName: { location: "urlPath", sentAs: "customdomain" },
              },
            },
            DeleteBucketCustomDomain: {
              httpMethod: "DELETE",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                DomainName: { location: "urlPath", sentAs: "customdomain" },
              },
            },
            GetCDNNotifyConfiguration: {
              httpMethod: "GET",
              urlPath: "CDNNotifyConfiguration",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetCDNNotifyConfigurationOutput: {
              data: { type: "xml", xmlRoot: "CDNNotifyConfiguration" },
              parameters: {
                Domain: {
                  location: "xml",
                  type: "array",
                  sentAs: "Domain",
                  items: {
                    type: "object",
                    parameters: {
                      Name: { sentAs: "Name" },
                      Events: {
                        type: "array",
                        items: { type: "adapter" },
                        sentAs: "Event",
                      },
                    },
                  },
                },
              },
            },
            SetCdnNotifyConfiguration: {
              httpMethod: "PUT",
              urlPath: "CDNNotifyConfiguration",
              data: { xmlRoot: "CDNNotifyConfiguration", xmlAllowEmpty: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Domain: {
                  location: "xml",
                  sentAs: "Domain",
                  type: "array",
                  items: {
                    type: "object",
                    parameters: {
                      Name: { type: "string", sentAs: "Name" },
                      Event: {
                        type: "array",
                        items: { type: "adapter" },
                        sentAs: "Event",
                      },
                    },
                  },
                },
              },
            },
            GetQuota: { httpMethod: "GET", urlPath: "quota" },
            GetQuotaOutput: {
              data: { type: "xml", xmlRoot: "MaxBucketNumber" },
              parameters: { Size: { location: "xml", sentAs: "Number" } },
            },
            GetWorkflowTrigger: {
              httpMethod: "GET",
              urlPath: "obsworkflowtriggerpolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
              },
            },
            GetWorkflowTriggerOutput: {
              data: { type: "body" },
              parameters: { rules: { location: "body" } },
            },
            DeleteWorkflowTrigger: {
              httpMethod: "DELETE",
              urlPath: "obsworkflowtriggerpolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
              },
            },
            CreateWorkflowTrigger: {
              httpMethod: "PUT",
              urlPath: "obsworkflowtriggerpolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
                Rule: { required: !0, location: "body" },
              },
            },
            RestoreFailedWorkflowExecution: {
              httpMethod: "PUT",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  required: !0,
                  location: "uri",
                  sentAs: "execution_name",
                },
                GraphName: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "x-workflow-graph-name",
                },
              },
            },
            CreateTemplate: {
              httpMethod: "POST",
              parameters: {
                ApiPath: { location: "uri" },
                Template: { required: !0, location: "body" },
              },
            },
            CreateWorkflow: {
              httpMethod: "POST",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  required: !0,
                  location: "uri",
                  sentAs: "graph_name",
                },
                Workflow_create: {
                  location: "urlPath",
                  sentAs: "x-workflow-create",
                },
                Workflow: { required: !0, location: "body" },
              },
            },
            DeleteWorkflow: {
              httpMethod: "DELETE",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: { location: "uri", sentAs: "graph_name" },
              },
            },
            UpdateWorkflow: {
              httpMethod: "PUT",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: { location: "uri", sentAs: "graph_name" },
                Graph_name: { required: !0, location: "body" },
              },
            },
            GetWorkflowList: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  location: "uri",
                  sentAs: "graph_name_prefix",
                },
                XObsLimit: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-limit",
                },
                XObsPrefix: {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
                XObsStart: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-start",
                },
              },
            },
            GetWorkflowListOutput: {
              data: { type: "body" },
              parameters: { workflows: { location: "body" } },
            },
            GetWorkflowTemplateList: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  location: "uri",
                  sentAs: "template_name_prefix",
                },
                Start: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-start",
                },
                Limit: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-limit",
                },
                "X-workflow-prefix": {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
              },
            },
            GetWorkflowTemplateListOutput: {
              data: { type: "body" },
              parameters: { templates: { location: "body" } },
            },
            GetWorkflowInstanceList: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  location: "uri",
                  sentAs: "execution_name_prefix",
                },
                Start: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-start",
                },
                Limit: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-limit",
                },
                Graph_name: {
                  location: "urlPath",
                  sentAs: "x-workflow-graph-name",
                },
                State: {
                  location: "urlPath",
                  sentAs: "x-workflow-execution-state",
                },
                "X-workflow-prefix": {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
              },
            },
            GetWorkflowInstanceListOutput: {
              data: { type: "body" },
              parameters: { instances: { location: "body" } },
            },
            DeleteTemplate: {
              httpMethod: "DELETE",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: { location: "uri", sentAs: "template_name" },
              },
            },
            GetActionTemplates: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  location: "uri",
                  sentAs: "template_name_prefix",
                },
                XObsPrefix: {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
                XObsCategory: {
                  type: "String",
                  location: "urlPath",
                  sentAs: "x-workflow-category",
                },
              },
            },
            GetActionTemplatesOutput: {
              data: { type: "body" },
              parameters: { actions: { location: "body" } },
            },
            GetWorkflowAuthorization: {
              httpMethod: "GET",
              parameters: { ApiPath: { location: "uri" } },
            },
            GetWorkflowAuthorizationOutput: {
              data: { type: "body" },
              parameters: { authorization: { location: "body" } },
            },
            OpenWorkflowAuthorization: {
              httpMethod: "POST",
              parameters: { ApiPath: { location: "uri" } },
            },
            CreateOnlineDecom: {
              httpMethod: "PUT",
              urlPath: "obscompresspolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Decom: { required: !0, location: "body" },
              },
            },
            GetOnlineDecom: {
              httpMethod: "GET",
              urlPath: "obscompresspolicy",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetOnlineDecomOutput: {
              data: { type: "body" },
              parameters: { Decom: { location: "body" } },
            },
            DeleteOnlineDecom: {
              httpMethod: "DELETE",
              urlPath: "obscompresspolicy",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetPublicationTemplates: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: {
                  location: "uri",
                  sentAs: "template_name_prefix",
                },
                XObsCategory: {
                  location: "urlPath",
                  sentAs: "x-workflow-category",
                },
                XObsOtatus: {
                  location: "urlPath",
                  sentAs: "x-workflow-status",
                },
                XObsPrefix: {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
              },
            },
            GetPublicationTemplatesOutput: {
              data: { type: "body" },
              parameters: { PublishedTemplates: { location: "body" } },
            },
            GetPublicationTemplateDetail: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
              },
            },
            GetPublicationTemplateDetailOutput: {
              data: { type: "body" },
              parameters: { PublishTemplate: { location: "body" } },
            },
            GetWorkflowAgreements: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                XWorkflowType: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "x-workflow-type",
                },
              },
            },
            GetWorkflowAgreementsOutput: {
              data: { type: "body" },
              parameters: { authorization: { location: "body" } },
            },
            OpenWorkflowAgreements: {
              httpMethod: "POST",
              parameters: {
                ApiPath: { location: "uri" },
                XWorkflowType: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "x-workflow-type",
                },
              },
            },
            CreateMyActionTemplate: {
              httpMethod: "POST",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
                ActionTemplate: { required: !0, location: "body" },
              },
            },
            CreateMyActionTemplateOutput: {
              data: { type: "body" },
              parameters: { ActionTemplate: { location: "body" } },
            },
            GetMyActionTemplates: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: {
                  location: "uri",
                  sentAs: "template_name_prefix",
                },
                XObsCategory: {
                  location: "urlPath",
                  sentAs: "x-workflow-category",
                },
                XObsOtatus: {
                  location: "urlPath",
                  sentAs: "x-workflow-status",
                },
                XObsPrefix: {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
              },
            },
            GetMyActionTemplatesOutput: {
              data: { type: "body" },
              parameters: { ActionTemplates: { location: "body" } },
            },
            GetMyactiontemplateDetail: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
              },
            },
            GetMyactiontemplateDetailOutput: {
              data: { type: "body" },
              parameters: { ActionTemplate: { location: "body" } },
            },
            UpdateMyActionTemplate: {
              httpMethod: "PUT",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
                ActionTemplate: { required: !0, location: "body" },
              },
            },
            UpdateMyActionTemplateOutput: {
              data: { type: "body" },
              parameters: { ActionTemplate: { location: "body" } },
            },
            DeleteMyActionTemplate: {
              httpMethod: "DELETE",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
              },
            },
            ForbidMyActionTemplate: {
              httpMethod: "DELETE",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
                XObsForbid: {
                  location: "urlPath",
                  sentAs: "x-workflow-forbid",
                },
              },
            },
            UpdatePublicActionTemplate: {
              httpMethod: "PUT",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
                PublicAction: { required: !0, location: "body" },
              },
            },
            GetOmPublicActionTemplates: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: {
                  location: "uri",
                  sentAs: "template_name_prefix",
                },
                XObsCategory: {
                  location: "urlPath",
                  sentAs: "x-workflow-category",
                },
                XObsOtatus: {
                  location: "urlPath",
                  sentAs: "x-workflow-status",
                },
                XObsPrefix: {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
              },
            },
            GetOmPublicActionTemplatesOutput: {
              data: { type: "body" },
              parameters: { Templates: { location: "body" } },
            },
            SetBucketAlias: {
              httpMethod: "PUT",
              urlPath: "obsbucketalias",
              data: { xmlRoot: "CreateBucketAlias" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                BucketList: {
                  location: "xml",
                  type: "object",
                  sentAs: "BucketList",
                  parameters: {
                    Bucket: {
                      location: "xml",
                      type: "array",
                      items: { parameters: { sentAs: "Bucket" } },
                    },
                  },
                },
              },
            },
            GetBucketAlias: {
              httpMethod: "GET",
              urlPath: "obsalias",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketAliasOutput: {
              data: { type: "xml", xmlRoot: "AliasList" },
              parameters: {
                BucketAlias: {
                  location: "xml",
                  type: "object",
                  sentAs: "BucketAlias",
                  parameters: {
                    Alias: { sentAs: "Alias" },
                    BucketList: {
                      sentAs: "Bucket",
                      location: "xml",
                      type: "array",
                      wrapper: "BucketList",
                      items: { type: "string" },
                    },
                  },
                },
              },
            },
            DeleteBucketAlias: {
              httpMethod: "DELETE",
              urlPath: "obsbucketalias",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            BindBucketAlias: {
              httpMethod: "PUT",
              urlPath: "obsalias",
              data: { xmlRoot: "AliasList" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Alias: { location: "xml", type: "string", sentAs: "Alias" },
              },
            },
            BindBucketAliasOutput: {
              data: { xmlRoot: "AliasList" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Alias: { location: "xml", type: "string", sentAs: "Alias" },
              },
            },
            UnbindBucketAlias: {
              httpMethod: "DELETE",
              urlPath: "obsalias",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            ListBucketsAlias: { httpMethod: "GET", urlPath: "obsbucketalias" },
            ListBucketsAliasOutput: {
              data: { type: "xml", xmlRoot: "ListBucketAliasResult" },
              parameters: {
                BucketAliasList: {
                  location: "xml",
                  sentAs: "BucketAliasList",
                  type: "object",
                  parameters: {
                    BucketAlias: {
                      location: "xml",
                      type: "array",
                      sentAs: "BucketAlias",
                      items: {
                        type: "object",
                        parameters: {
                          Alias: { sentAs: "Alias" },
                          CreationDate: { sentAs: "CreationDate" },
                          BucketList: {
                            location: "xml",
                            type: "object",
                            sentAs: "BucketList",
                            parameters: {
                              Bucket: {
                                location: "xml",
                                type: "array",
                                items: { parameters: { sentAs: "Bucket" } },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                Owner: {
                  location: "xml",
                  sentAs: "Owner",
                  type: "object",
                  parameters: { ID: { sentAs: "ID" } },
                },
              },
            },
          },
          vt = {
            type: "object",
            location: "xml",
            sentAs: "Owner",
            parameters: {
              ID: { sentAs: "ID" },
              Name: { sentAs: "DisplayName" },
            },
          },
          Ct = {
            type: "object",
            location: "xml",
            sentAs: "Rule",
            parameters: {
              ApplyServerSideEncryptionByDefault: {
                type: "object",
                sentAs: "ApplyServerSideEncryptionByDefault",
                parameters: {
                  SSEAlgorithm: { sentAs: "SSEAlgorithm" },
                  KMSMasterKeyID: { sentAs: "KMSMasterKeyID" },
                  ProjectID: { sentAs: "ProjectID" },
                },
              },
            },
          },
          St = {
            type: "object",
            location: "xml",
            sentAs: "InventoryConfiguration",
            parameters: {
              Id: { sentAs: "Id" },
              IsEnabled: { sentAs: "IsEnabled" },
              Filter: {
                type: "object",
                sentAs: "Filter",
                parameters: { Prefix: { sentAs: "Prefix" } },
              },
              Destination: {
                type: "object",
                sentAs: "Destination",
                parameters: {
                  Format: { sentAs: "Format" },
                  Bucket: { sentAs: "Bucket" },
                  Prefix: { sentAs: "Prefix" },
                  Encryption: {
                    type: "object",
                    sentAs: "Encryption",
                    parameters: {
                      "SSE-KMS": {
                        type: "object",
                        sentAs: "SSE-KMS",
                        parameters: {
                          KeyId: { sentAs: "KeyId", type: "adapter" },
                        },
                      },
                    },
                  },
                },
              },
              Schedule: {
                type: "object",
                sentAs: "Schedule",
                parameters: { Frequency: { sentAs: "Frequency" } },
              },
              IncludedObjectVersions: { sentAs: "IncludedObjectVersions" },
              OptionalFields: {
                type: "object",
                location: "xml",
                sentAs: "OptionalFields",
                parameters: {
                  Field: {
                    type: "array",
                    sentAs: "Field",
                    items: { type: "string" },
                  },
                },
              },
            },
          },
          Tt = {
            type: "object",
            location: "xml",
            sentAs: "Initiator",
            parameters: {
              ID: { sentAs: "ID" },
              Name: { sentAs: "DisplayName" },
            },
          },
          Mt = {
            sentAs: "BackToSourceRule",
            required: !0,
            location: "xml",
            type: "array",
            items: {
              type: "object",
              parameters: {
                ID: { sentAs: "ID" },
                Condition: {
                  sentAs: "Condition",
                  type: "object",
                  parameters: {
                    ObjectKeyPrefixEquals: { sentAs: "ObjectKeyPrefixEquals" },
                    HttpErrorCodeReturnedEquals: {
                      sentAs: "HttpErrorCodeReturnedEquals",
                    },
                  },
                },
                Redirect: {
                  sentAs: "Redirect",
                  type: "object",
                  parameters: {
                    HttpRedirectCode: { sentAs: "HttpRedirectCode" },
                    SourceEndpoint: { sentAs: "SourceEndpoint" },
                    SourceBucketName: { sentAs: "SourceBucketName" },
                    ReplaceKeyWith: { sentAs: "ReplaceKeyWith" },
                    StaticUri: { sentAs: "StaticUri" },
                    ReplaceKeyPrefixWith: { sentAs: "ReplaceKeyPrefixWith" },
                    MigrationConfiguration: {
                      sentAs: "MigrationConfiguration",
                      type: "object",
                      parameters: {
                        Agency: { sentAs: "Agency" },
                        LogBucketName: { sentAs: "LogBucketName" },
                        PrivateBucketConfiguration: {
                          sentAs: "PrivateBucketConfiguration",
                          type: "object",
                          parameters: {
                            SourceStorageProvider: {
                              sentAs: "SourceStorageProvider",
                            },
                            SourceBucketAK: { sentAs: "SourceBucketAK" },
                            SourceBucketSK: { sentAs: "SourceBucketSK" },
                            SourceBucketZone: { sentAs: "SourceBucketZone" },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          Et = {
            type: "array",
            location: "xml",
            sentAs: "CommonPrefixes",
            items: {
              type: "object",
              parameters: {
                Prefix: { decode: !0, sentAs: "Prefix" },
                MTime: { sentAs: "MTime" },
                InodeNo: { sentAs: "InodeNo" },
              },
            },
          },
          Bt = {
            type: "array",
            location: "xml",
            wrapper: "AccessControlList",
            sentAs: "Grant",
            items: {
              type: "object",
              parameters: {
                Grantee: {
                  data: {
                    xsiNamespace: "http://www.w3.org/2001/XMLSchema-instance",
                    xsiType: "Type",
                  },
                  type: "object",
                  sentAs: "Grantee",
                  parameters: {
                    Type: { type: "ignore" },
                    ID: { sentAs: "ID", notAllowEmpty: !0 },
                    Name: { sentAs: "DisplayName" },
                    URI: { sentAs: "URI", type: "adapter", notAllowEmpty: !0 },
                  },
                },
                Permission: { sentAs: "Permission" },
              },
            },
          },
          Ot = {
            type: "object",
            location: "xml",
            sentAs: "LoggingEnabled",
            parameters: {
              TargetBucket: { sentAs: "TargetBucket" },
              TargetPrefix: { sentAs: "TargetPrefix" },
              TargetGrants: {
                type: "array",
                wrapper: "TargetGrants",
                sentAs: "Grant",
                items: {
                  type: "object",
                  parameters: {
                    Grantee: {
                      data: {
                        xsiNamespace:
                          "http://www.w3.org/2001/XMLSchema-instance",
                        xsiType: "Type",
                      },
                      type: "object",
                      sentAs: "Grantee",
                      parameters: {
                        Type: { type: "ignore" },
                        ID: { sentAs: "ID" },
                        Name: { sentAs: "DisplayName" },
                        URI: { sentAs: "URI", type: "adapter" },
                      },
                    },
                    Permission: { sentAs: "Permission" },
                  },
                },
              },
            },
          },
          Rt = {
            required: !0,
            type: "array",
            location: "xml",
            sentAs: "Rule",
            items: {
              type: "object",
              parameters: {
                ID: { sentAs: "ID" },
                Prefix: { sentAs: "Prefix" },
                Status: { sentAs: "Status" },
                Transitions: {
                  type: "array",
                  sentAs: "Transition",
                  items: {
                    type: "object",
                    parameters: {
                      StorageClass: { sentAs: "StorageClass", type: "adapter" },
                      Date: { sentAs: "Date" },
                      Days: { type: "number", sentAs: "Days" },
                    },
                  },
                },
                Expiration: {
                  type: "object",
                  sentAs: "Expiration",
                  parameters: {
                    Date: { sentAs: "Date" },
                    Days: { type: "number", sentAs: "Days" },
                  },
                },
                AbortIncompleteMultipartUpload: {
                  type: "object",
                  sentAs: "AbortIncompleteMultipartUpload",
                  parameters: {
                    DaysAfterInitiation: {
                      type: "number",
                      sentAs: "DaysAfterInitiation",
                    },
                  },
                },
                NoncurrentVersionTransitions: {
                  type: "array",
                  sentAs: "NoncurrentVersionTransition",
                  items: {
                    type: "object",
                    parameters: {
                      StorageClass: { sentAs: "StorageClass", type: "adapter" },
                      NoncurrentDays: {
                        type: "number",
                        sentAs: "NoncurrentDays",
                      },
                    },
                  },
                },
                NoncurrentVersionExpiration: {
                  type: "object",
                  sentAs: "NoncurrentVersionExpiration",
                  parameters: {
                    NoncurrentDays: {
                      type: "number",
                      sentAs: "NoncurrentDays",
                    },
                  },
                },
              },
            },
          },
          Dt = {
            type: "object",
            location: "xml",
            sentAs: "RedirectAllRequestsTo",
            parameters: {
              HostName: { sentAs: "HostName" },
              Protocol: { sentAs: "Protocol" },
            },
          },
          It = {
            type: "array",
            wrapper: "RoutingRules",
            location: "xml",
            sentAs: "RoutingRule",
            items: {
              type: "object",
              parameters: {
                Condition: {
                  type: "object",
                  sentAs: "Condition",
                  parameters: {
                    HttpErrorCodeReturnedEquals: {
                      sentAs: "HttpErrorCodeReturnedEquals",
                    },
                    KeyPrefixEquals: { sentAs: "KeyPrefixEquals" },
                  },
                },
                Redirect: {
                  type: "object",
                  sentAs: "Redirect",
                  parameters: {
                    HostName: { sentAs: "HostName" },
                    HttpRedirectCode: { sentAs: "HttpRedirectCode" },
                    Protocol: { sentAs: "Protocol" },
                    ReplaceKeyPrefixWith: { sentAs: "ReplaceKeyPrefixWith" },
                    ReplaceKeyWith: { sentAs: "ReplaceKeyWith" },
                  },
                },
              },
            },
          },
          qt = {
            type: "object",
            location: "xml",
            sentAs: "IndexDocument",
            parameters: { Suffix: { sentAs: "Suffix" } },
          },
          Lt = {
            type: "object",
            location: "xml",
            sentAs: "ErrorDocument",
            parameters: { Key: { sentAs: "Key" } },
          },
          jt = {
            required: !0,
            type: "array",
            location: "xml",
            sentAs: "CORSRule",
            items: {
              type: "object",
              parameters: {
                ID: { sentAs: "ID" },
                AllowedMethod: {
                  type: "array",
                  sentAs: "AllowedMethod",
                  items: { type: "string" },
                },
                AllowedOrigin: {
                  type: "array",
                  sentAs: "AllowedOrigin",
                  items: { type: "string" },
                },
                AllowedHeader: {
                  type: "array",
                  sentAs: "AllowedHeader",
                  items: { type: "string" },
                },
                MaxAgeSeconds: { type: "number", sentAs: "MaxAgeSeconds" },
                ExposeHeader: {
                  type: "array",
                  sentAs: "ExposeHeader",
                  items: { type: "string" },
                },
              },
            },
          },
          Ut = {
            type: "array",
            location: "xml",
            sentAs: "FunctionGraphConfiguration",
            items: {
              type: "object",
              location: "xml",
              parameters: {
                ID: { sentAs: "Id" },
                Filter: {
                  type: "object",
                  parameters: {
                    FilterRules: {
                      wrapper: "S3Key",
                      type: "array",
                      sentAs: "FilterRule",
                      items: {
                        type: "object",
                        parameters: { Name: {}, Value: {} },
                      },
                    },
                  },
                },
                FunctionGraph: {},
                Event: { type: "array", items: { type: "adapter" } },
              },
            },
          },
          Kt = {
            type: "array",
            location: "xml",
            sentAs: "FunctionStageConfiguration",
            items: {
              type: "object",
              location: "xml",
              parameters: {
                ID: { sentAs: "Id" },
                Filter: {
                  type: "object",
                  parameters: {
                    FilterRules: {
                      wrapper: "S3Key",
                      type: "array",
                      sentAs: "FilterRule",
                      items: {
                        type: "object",
                        parameters: { Name: {}, Value: {} },
                      },
                    },
                  },
                },
                FunctionStage: {},
                Event: { type: "array", items: { type: "adapter" } },
              },
            },
          },
          _t = {
            type: "array",
            location: "xml",
            sentAs: "TopicConfiguration",
            items: {
              type: "object",
              location: "xml",
              parameters: {
                ID: { sentAs: "Id" },
                Filter: {
                  type: "object",
                  parameters: {
                    FilterRules: {
                      wrapper: "S3Key",
                      type: "array",
                      sentAs: "FilterRule",
                      items: {
                        type: "object",
                        parameters: { Name: {}, Value: {} },
                      },
                    },
                  },
                },
                Topic: {},
                Event: { type: "array", items: { type: "adapter" } },
              },
            },
          },
          Nt = {
            required: !0,
            type: "array",
            location: "xml",
            wrapper: "TagSet",
            sentAs: "Tag",
            items: {
              type: "object",
              parameters: {
                Key: { sentAs: "Key" },
                Value: { sentAs: "Value" },
              },
            },
          },
          Gt = {
            required: !0,
            type: "array",
            location: "xml",
            sentAs: "Rule",
            items: {
              type: "object",
              parameters: {
                ID: { sentAs: "ID" },
                Prefix: { sentAs: "Prefix" },
                Status: { sentAs: "Status" },
                Destination: {
                  type: "object",
                  sentAs: "Destination",
                  parameters: {
                    Bucket: { sentAs: "Bucket", type: "adapter" },
                    StorageClass: { sentAs: "StorageClass", type: "adapter" },
                    DeleteData: { sentAs: "DeleteData", type: "string" },
                  },
                },
                HistoricalObjectReplication: {
                  sentAs: "HistoricalObjectReplication",
                },
              },
            },
          },
          Ft = {
            HeadBucket: {
              httpMethod: "HEAD",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            HeadApiVersion: {
              httpMethod: "HEAD",
              urlPath: "apiversion",
              parameters: { Bucket: { location: "uri" } },
            },
            HeadApiVersionOutput: {
              parameters: {
                ApiVersion: { location: "header", sentAs: "x-obs-api" },
              },
            },
            CreateBucket: {
              httpMethod: "PUT",
              data: { xmlRoot: "CreateBucketConfiguration" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ACL: { location: "header", sentAs: "acl", withPrefix: !0 },
                StorageType: {
                  location: "header",
                  sentAs: "x-default-storage-class",
                },
                FileInterface: {
                  location: "header",
                  sentAs: "fs-file-interface",
                  withPrefix: !0,
                },
                Type: {
                  location: "header",
                  sentAs: "bucket-type",
                  withPrefix: !0,
                },
                MultiAz: { location: "header", sentAs: "x-obs-az-redundancy" },
                Cluster: {
                  location: "header",
                  sentAs: "location-clustergroup-id",
                  withPrefix: !0,
                },
                GrantFullControl: {
                  location: "header",
                  sentAs: "grant-full-control",
                  withPrefix: !0,
                },
                GrantRead: {
                  location: "header",
                  sentAs: "grant-read",
                  withPrefix: !0,
                },
                GrantReadACP: {
                  location: "header",
                  sentAs: "grant-read-acp",
                  withPrefix: !0,
                },
                GrantWrite: {
                  location: "header",
                  sentAs: "grant-write",
                  withPrefix: !0,
                },
                GrantWriteACP: {
                  location: "header",
                  sentAs: "grant-write-acp",
                  withPrefix: !0,
                },
                ClusterType: {
                  location: "header",
                  sentAs: "cluster-type",
                  withPrefix: !0,
                },
                MultiEnterprise: {
                  location: "header",
                  sentAs: "epid",
                  withPrefix: !0,
                },
                Location: { location: "xml", sentAs: "LocationConstraint" },
              },
            },
            GetBucketMetadata: {
              httpMethod: "HEAD",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Origin: { location: "header", sentAs: "Origin" },
                RequestHeader: {
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                },
              },
            },
            GetBucketMetadataOutput: {
              parameters: {
                StorageClass: {
                  location: "header",
                  sentAs: "x-default-storage-class",
                },
                ObsVersion: { location: "header", sentAs: "x-obs-version" },
                Location: {
                  location: "header",
                  sentAs: "bucket-region",
                  withPrefix: !0,
                },
                FileInterface: {
                  location: "header",
                  sentAs: "fs-file-interface",
                  withPrefix: !0,
                },
                Type: {
                  location: "header",
                  sentAs: "bucket-type",
                  withPrefix: !0,
                },
                MultiAz: { location: "header", sentAs: "x-obs-az-redundancy" },
                MultiEnterprise: {
                  location: "header",
                  sentAs: "epid",
                  withPrefix: !0,
                },
                ClusterType: {
                  location: "header",
                  sentAs: "cluster-type",
                  withPrefix: !0,
                },
                Cluster: {
                  location: "header",
                  sentAs: "location-clustergroup-id",
                  withPrefix: !0,
                },
                AllowOrigin: {
                  location: "header",
                  sentAs: "access-control-allow-origin",
                },
                MaxAgeSeconds: {
                  location: "header",
                  sentAs: "access-control-max-age",
                },
                ExposeHeader: {
                  location: "header",
                  sentAs: "access-control-expose-headers",
                },
                AllowMethod: {
                  location: "header",
                  sentAs: "access-control-allow-methods",
                },
                AllowHeader: {
                  location: "header",
                  sentAs: "access-control-allow-headers",
                },
              },
            },
            DeleteBucket: {
              httpMethod: "DELETE",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            ListBuckets: {
              httpMethod: "GET",
              parameters: {
                Type: { sentAs: "x-obs-bucket-type", location: "header" },
                Location: {
                  sentAs: "location",
                  location: "header",
                  withPrefix: !0,
                },
              },
            },
            ListBucketsOutput: {
              data: { type: "xml", xmlRoot: "ListAllMyBucketsResult" },
              parameters: {
                Buckets: {
                  location: "xml",
                  sentAs: "Bucket",
                  type: "array",
                  wrapper: "Buckets",
                  items: {
                    type: "object",
                    location: "xml",
                    sentAs: "Bucket",
                    parameters: {
                      Name: { sentAs: "Name" },
                      CreationDate: { sentAs: "CreationDate" },
                      Location: { sentAs: "Location" },
                      ClusterType: { sentAs: "ClusterType" },
                    },
                  },
                },
                Owner: {
                  type: "object",
                  location: "xml",
                  sentAs: "Owner",
                  parameters: {
                    ID: { sentAs: "ID" },
                    DisplayName: { sentAs: "DisplayName" },
                  },
                },
              },
            },
            ListObjects: {
              httpMethod: "GET",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Prefix: { location: "urlPath", sentAs: "prefix" },
                Marker: { location: "urlPath", sentAs: "marker" },
                MaxKeys: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "max-keys",
                },
                Delimiter: { location: "urlPath", sentAs: "delimiter" },
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
              },
            },
            ListObjectsOutput: {
              data: { type: "xml", xmlRoot: "ListBucketResult" },
              parameters: {
                Location: {
                  location: "header",
                  sentAs: "bucket-region",
                  withPrefix: !0,
                },
                Bucket: { location: "xml", sentAs: "Name" },
                Delimiter: { decode: !0, location: "xml", sentAs: "Delimiter" },
                IsTruncated: { location: "xml", sentAs: "IsTruncated" },
                Prefix: { decode: !0, location: "xml", sentAs: "Prefix" },
                Marker: { decode: !0, location: "xml", sentAs: "Marker" },
                NextMarker: {
                  decode: !0,
                  location: "xml",
                  sentAs: "NextMarker",
                },
                MaxKeys: { location: "xml", sentAs: "MaxKeys" },
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Contents: {
                  type: "array",
                  location: "xml",
                  sentAs: "Contents",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { decode: !0, sentAs: "Key" },
                      LastModified: { sentAs: "LastModified" },
                      ETag: { sentAs: "ETag" },
                      Size: { sentAs: "Size" },
                      Type: { sentAs: "Type" },
                      StorageClass: { sentAs: "StorageClass" },
                      Owner: vt,
                    },
                  },
                },
                CommonPrefixes: Et,
              },
            },
            ListVersions: {
              httpMethod: "GET",
              urlPath: "versions",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Prefix: { location: "urlPath", sentAs: "prefix" },
                KeyMarker: { location: "urlPath", sentAs: "key-marker" },
                MaxKeys: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "max-keys",
                },
                Delimiter: { location: "urlPath", sentAs: "delimiter" },
                VersionIdMarker: {
                  location: "urlPath",
                  sentAs: "version-id-marker",
                },
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
              },
            },
            ListVersionsOutput: {
              data: { type: "xml", xmlRoot: "ListVersionsResult" },
              parameters: {
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Location: {
                  location: "header",
                  sentAs: "bucket-region",
                  withPrefix: !0,
                },
                Bucket: { location: "xml", sentAs: "Name" },
                Prefix: { decode: !0, location: "xml", sentAs: "Prefix" },
                Delimiter: { decode: !0, location: "xml", sentAs: "Delimiter" },
                KeyMarker: { decode: !0, location: "xml", sentAs: "KeyMarker" },
                VersionIdMarker: { location: "xml", sentAs: "VersionIdMarker" },
                NextKeyMarker: {
                  decode: !0,
                  location: "xml",
                  sentAs: "NextKeyMarker",
                },
                NextVersionIdMarker: {
                  location: "xml",
                  sentAs: "NextVersionIdMarker",
                },
                MaxKeys: { location: "xml", sentAs: "MaxKeys" },
                IsTruncated: { location: "xml", sentAs: "IsTruncated" },
                Versions: {
                  type: "array",
                  location: "xml",
                  sentAs: "Version",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { decode: !0, sentAs: "Key" },
                      VersionId: { sentAs: "VersionId" },
                      IsLatest: { sentAs: "IsLatest" },
                      LastModified: { sentAs: "LastModified" },
                      ETag: { sentAs: "ETag" },
                      Size: { sentAs: "Size" },
                      Type: { sentAs: "Type" },
                      Owner: vt,
                      StorageClass: { sentAs: "StorageClass" },
                    },
                  },
                },
                DeleteMarkers: {
                  type: "array",
                  location: "xml",
                  sentAs: "DeleteMarker",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { decode: !0, sentAs: "Key" },
                      VersionId: { sentAs: "VersionId" },
                      IsLatest: { sentAs: "IsLatest" },
                      LastModified: { sentAs: "LastModified" },
                      Owner: vt,
                    },
                  },
                },
                CommonPrefixes: Et,
              },
            },
            PutBackToSource: {
              httpMethod: "PUT",
              data: { xmlRoot: "BackToSourceConfiguration" },
              urlPath: "backtosource",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                BackToSourceRules: Mt,
                ContentMD5: { location: "header", sentAs: "Content-MD5" },
              },
            },
            DeleteBackToSource: {
              httpMethod: "DELETE",
              urlPath: "backtosource",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBackToSource: {
              httpMethod: "GET",
              urlPath: "backtosource",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBackToSourceOutput: {
              data: { type: "xml", xmlRoot: "BackToSourceConfiguration" },
              parameters: { BackToSourceRules: Mt },
            },
            GetBucketLocation: {
              httpMethod: "GET",
              urlPath: "location",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketLocationOutput: {
              data: { type: "xml", xmlRoot: "CreateBucketConfiguration" },
              parameters: {
                Location: { location: "xml", sentAs: "LocationConstraint" },
              },
            },
            GetBucketStorageInfo: {
              httpMethod: "GET",
              urlPath: "storageinfo",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketStorageInfoOutput: {
              data: { type: "xml", xmlRoot: "GetBucketStorageInfoResult" },
              parameters: {
                Size: { location: "xml", sentAs: "Size" },
                ObjectNumber: { location: "xml", sentAs: "ObjectNumber" },
              },
            },
            SetBucketQuota: {
              httpMethod: "PUT",
              urlPath: "quota",
              data: { xmlRoot: "Quota" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                StorageQuota: {
                  required: !0,
                  location: "xml",
                  sentAs: "StorageQuota",
                },
              },
            },
            GetBucketQuota: {
              httpMethod: "GET",
              urlPath: "quota",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketQuotaOutput: {
              data: { type: "xml", xmlRoot: "Quota" },
              parameters: {
                StorageQuota: { location: "xml", sentAs: "StorageQuota" },
              },
            },
            SetBucketAcl: {
              httpMethod: "PUT",
              urlPath: "acl",
              data: { xmlRoot: "AccessControlPolicy" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                Owner: vt,
                Grants: Bt,
              },
            },
            GetBucketAcl: {
              httpMethod: "GET",
              urlPath: "acl",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketAclOutput: {
              data: { type: "xml", xmlRoot: "AccessControlPolicy" },
              parameters: { Owner: vt, Grants: Bt },
            },
            SetBucketLoggingConfiguration: {
              httpMethod: "PUT",
              urlPath: "logging",
              data: { xmlRoot: "BucketLoggingStatus", xmlAllowEmpty: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                LoggingEnabled: Ot,
              },
            },
            GetBucketLoggingConfiguration: {
              httpMethod: "GET",
              urlPath: "logging",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketLoggingConfigurationOutput: {
              data: { type: "xml", xmlRoot: "BucketLoggingStatus" },
              parameters: { LoggingEnabled: Ot },
            },
            SetBucketPolicy: {
              httpMethod: "PUT",
              urlPath: "policy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Policy: { required: !0, location: "body" },
              },
            },
            SetSFSAcl: {
              httpMethod: "PUT",
              urlPath: "sfsacl",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Policy: { required: !0, location: "body" },
              },
            },
            GetSFSAcl: {
              httpMethod: "GET",
              urlPath: "sfsacl",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetSFSAclOutput: {
              data: { type: "body" },
              parameters: { Policy: { location: "body" } },
            },
            DeleteSFSAcl: {
              httpMethod: "DELETE",
              urlPath: "sfsacl",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketPolicy: {
              httpMethod: "GET",
              urlPath: "policy",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketPolicyOutput: {
              data: { type: "body" },
              parameters: { Policy: { location: "body" } },
            },
            DeleteBucketPolicy: {
              httpMethod: "DELETE",
              urlPath: "policy",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            SetBucketDisPolicy: {
              httpMethod: "PUT",
              urlPath: "disPolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
                Rules: { required: !0, location: "body" },
              },
            },
            GetBucketDisPolicy: {
              httpMethod: "GET",
              urlPath: "disPolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
                ContentType: { location: "header", sentAs: "Content-Type" },
              },
            },
            GetBucketDisPolicyOutput: {
              data: { type: "body" },
              parameters: { Rules: { location: "body" } },
            },
            DeleteBucketDisPolicy: {
              httpMethod: "DELETE",
              urlPath: "disPolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
              },
            },
            SetBucketLifecycleConfiguration: {
              httpMethod: "PUT",
              urlPath: "lifecycle",
              data: { xmlRoot: "LifecycleConfiguration", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Rules: Rt,
              },
            },
            GetBucketLifecycleConfiguration: {
              httpMethod: "GET",
              urlPath: "lifecycle",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketLifecycleConfigurationOutput: {
              data: { type: "xml", xmlRoot: "LifecycleConfiguration" },
              parameters: { Rules: Rt },
            },
            DeleteBucketLifecycleConfiguration: {
              httpMethod: "DELETE",
              urlPath: "lifecycle",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            SetBucketWebsiteConfiguration: {
              httpMethod: "PUT",
              urlPath: "website",
              data: { xmlRoot: "WebsiteConfiguration" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                RedirectAllRequestsTo: Dt,
                IndexDocument: qt,
                ErrorDocument: Lt,
                RoutingRules: It,
              },
            },
            GetBucketWebsiteConfiguration: {
              httpMethod: "GET",
              urlPath: "website",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketWebsiteConfigurationOutput: {
              data: { type: "xml", xmlRoot: "WebsiteConfiguration" },
              parameters: {
                RedirectAllRequestsTo: Dt,
                IndexDocument: qt,
                ErrorDocument: Lt,
                RoutingRules: It,
              },
            },
            DeleteBucketWebsiteConfiguration: {
              httpMethod: "DELETE",
              urlPath: "website",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            SetBucketVersioningConfiguration: {
              httpMethod: "PUT",
              urlPath: "versioning",
              data: { xmlRoot: "VersioningConfiguration" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                VersionStatus: {
                  required: !0,
                  location: "xml",
                  sentAs: "Status",
                },
              },
            },
            GetBucketVersioningConfiguration: {
              httpMethod: "GET",
              urlPath: "versioning",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketVersioningConfigurationOutput: {
              data: { type: "xml", xmlRoot: "VersioningConfiguration" },
              parameters: {
                VersionStatus: { location: "xml", sentAs: "Status" },
              },
            },
            SetBucketCors: {
              httpMethod: "PUT",
              urlPath: "cors",
              data: { xmlRoot: "CORSConfiguration", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                CorsRules: jt,
              },
            },
            GetBucketCors: {
              httpMethod: "GET",
              urlPath: "cors",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketCorsOutput: {
              data: { type: "xml", xmlRoot: "CORSConfiguration" },
              parameters: { CorsRules: jt },
            },
            DeleteBucketCors: {
              httpMethod: "DELETE",
              urlPath: "cors",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            SetBucketNotification: {
              httpMethod: "PUT",
              urlPath: "notification",
              data: { xmlRoot: "NotificationConfiguration", xmlAllowEmpty: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                TopicConfigurations: _t,
                FunctionGraphConfigurations: Ut,
                FunctionStageConfigurations: Kt,
              },
            },
            GetBucketNotification: {
              httpMethod: "GET",
              urlPath: "notification",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketNotificationOutput: {
              data: { type: "xml", xmlRoot: "NotificationConfiguration" },
              parameters: {
                TopicConfigurations: _t,
                FunctionGraphConfigurations: Ut,
                FunctionStageConfigurations: Kt,
              },
            },
            SetBucketTagging: {
              httpMethod: "PUT",
              urlPath: "tagging",
              data: { xmlRoot: "Tagging", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Tags: Nt,
              },
            },
            DeleteBucketTagging: {
              httpMethod: "DELETE",
              urlPath: "tagging",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketTagging: {
              httpMethod: "GET",
              urlPath: "tagging",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketTaggingOutput: {
              data: { type: "xml", xmlRoot: "Tagging" },
              parameters: { Tags: Nt },
            },
            SetBucketStoragePolicy: {
              httpMethod: "PUT",
              urlPath: "storagePolicy",
              data: { xmlRoot: "StoragePolicy" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                StorageClass: {
                  required: !0,
                  location: "xml",
                  type: "adapter",
                  sentAs: "DefaultStorageClass",
                },
              },
            },
            GetBucketStoragePolicy: {
              httpMethod: "GET",
              urlPath: "storagePolicy",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketStoragePolicyOutput: {
              data: { type: "xml", xmlRoot: "StoragePolicy" },
              parameters: {
                StorageClass: {
                  location: "xml",
                  type: "string",
                  sentAs: "DefaultStorageClass",
                },
              },
            },
            SetBucketReplication: {
              httpMethod: "PUT",
              urlPath: "replication",
              data: { xmlRoot: "ReplicationConfiguration", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Agency: { location: "xml", sentAs: "Agency" },
                Rules: Gt,
              },
            },
            GetBucketReplication: {
              httpMethod: "GET",
              urlPath: "replication",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketReplicationOutput: {
              data: { type: "xml", xmlRoot: "ReplicationConfiguration" },
              parameters: {
                Agency: { location: "xml", sentAs: "Agency" },
                Rules: Gt,
              },
            },
            DeleteBucketReplication: {
              httpMethod: "DELETE",
              urlPath: "replication",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            PutObject: {
              httpMethod: "PUT",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                ContentMD5: { location: "header", sentAs: "Content-MD5" },
                ContentType: { location: "header", sentAs: "Content-Type" },
                Offset: { type: "plain" },
                ContentLength: {
                  location: "header",
                  sentAs: "Content-Length",
                  type: "plain",
                },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                GrantRead: {
                  location: "header",
                  sentAs: "grant-read",
                  withPrefix: !0,
                },
                GrantReadAcp: {
                  location: "header",
                  sentAs: "grant-read-acp",
                  withPrefix: !0,
                },
                GrantWriteAcp: {
                  location: "header",
                  sentAs: "grant-write-acp",
                  withPrefix: !0,
                },
                GrantFullControl: {
                  location: "header",
                  sentAs: "grant-full-control",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                  type: "adapter",
                },
                Metadata: {
                  type: "object",
                  location: "header",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                CacheControl: { location: "header", sentAs: "Cache-Control" },
                ContentDisposition: {
                  location: "header",
                  sentAs: "Content-Disposition",
                  encodingSafe: ' ;/?:@&=+$,"',
                },
                ContentLanguage: {
                  location: "header",
                  sentAs: "Content-Language",
                },
                ContentEncoding: {
                  location: "header",
                  sentAs: "Content-Encoding",
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                Expires: {
                  location: "header",
                  sentAs: "x-obs-expires",
                  type: "number",
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                  type: "adapter",
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                Body: { location: "body" },
                SourceFile: { type: "srcFile" },
                ProgressCallback: { type: "plain" },
              },
            },
            PutObjectOutput: {
              parameters: {
                ETag: { location: "header", sentAs: "etag" },
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseKmsProjectId: {
                  location: "header",
                  sentAs: "sse-kms-key-project-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            AppendObject: {
              httpMethod: "POST",
              urlPath: "append",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                Position: {
                  location: "urlPath",
                  sentAs: "position",
                  type: "number",
                },
                ContentMD5: { location: "header", sentAs: "Content-MD5" },
                Offset: { type: "plain" },
                ContentType: { location: "header", sentAs: "Content-Type" },
                ContentLength: {
                  location: "header",
                  sentAs: "Content-Length",
                  type: "plain",
                },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                GrantRead: {
                  location: "header",
                  sentAs: "grant-read",
                  withPrefix: !0,
                },
                GrantReadAcp: {
                  location: "header",
                  sentAs: "grant-read-acp",
                  withPrefix: !0,
                },
                GrantWriteAcp: {
                  location: "header",
                  sentAs: "grant-write-acp",
                  withPrefix: !0,
                },
                GrantFullControl: {
                  location: "header",
                  sentAs: "grant-full-control",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                  type: "adapter",
                },
                Metadata: {
                  type: "object",
                  location: "header",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                Expires: {
                  location: "header",
                  sentAs: "x-obs-expires",
                  type: "number",
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                  type: "adapter",
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                Body: { location: "body" },
                SourceFile: { type: "srcFile" },
                ProgressCallback: { type: "plain" },
              },
            },
            AppendObjectOutput: {
              parameters: {
                ETag: { location: "header", sentAs: "etag" },
                NextPosition: {
                  location: "header",
                  sentAs: "x-obs-next-append-position",
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            GetObject: {
              httpMethod: "GET",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                ResponseCacheControl: {
                  location: "urlPath",
                  sentAs: "response-cache-control",
                },
                ResponseContentDisposition: {
                  location: "urlPath",
                  sentAs: "response-content-disposition",
                },
                ResponseContentEncoding: {
                  location: "urlPath",
                  sentAs: "response-content-encoding",
                },
                ResponseContentLanguage: {
                  location: "urlPath",
                  sentAs: "response-content-language",
                },
                ResponseContentType: {
                  location: "urlPath",
                  sentAs: "response-content-type",
                },
                ResponseExpires: {
                  location: "urlPath",
                  sentAs: "response-expires",
                },
                VersionId: { location: "urlPath", sentAs: "versionId" },
                ImageProcess: {
                  location: "urlPath",
                  sentAs: "x-image-process",
                },
                IfMatch: { location: "header", sentAs: "If-Match" },
                IfModifiedSince: {
                  location: "header",
                  sentAs: "If-Modified-Since",
                },
                IfNoneMatch: { location: "header", sentAs: "If-None-Match" },
                IfUnmodifiedSince: {
                  location: "header",
                  sentAs: "If-Unmodified-Since",
                },
                Range: { location: "header", sentAs: "Range" },
                Origin: { location: "header", sentAs: "Origin" },
                RequestHeader: {
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                },
                SaveByType: { type: "dstFile" },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                ProgressCallback: { type: "plain" },
              },
            },
            GetObjectOutput: {
              data: { type: "body" },
              parameters: {
                Content: { location: "body" },
                Expiration: {
                  location: "header",
                  sentAs: "expiration",
                  withPrefix: !0,
                },
                ETag: { location: "header", sentAs: "etag" },
                CacheControl: { location: "header", sentAs: "Cache-Control" },
                ContentDisposition: {
                  location: "header",
                  sentAs: "Content-Disposition",
                },
                ContentEncoding: {
                  location: "header",
                  sentAs: "Content-Encoding",
                },
                ContentLanguage: {
                  location: "header",
                  sentAs: "Content-Language",
                },
                ContentType: { location: "header", sentAs: "Content-Type" },
                Expires: { location: "header", sentAs: "Expires" },
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                ContentLength: { location: "header", sentAs: "Content-Length" },
                DeleteMarker: {
                  location: "header",
                  sentAs: "delete-marker",
                  withPrefix: !0,
                },
                LastModified: { location: "header", sentAs: "Last-Modified" },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                Restore: {
                  location: "header",
                  sentAs: "restore",
                  withPrefix: !0,
                },
                AllowOrigin: {
                  location: "header",
                  sentAs: "access-control-allow-origin",
                },
                MaxAgeSeconds: {
                  location: "header",
                  sentAs: "access-control-max-age",
                },
                ExposeHeader: {
                  location: "header",
                  sentAs: "access-control-expose-headers",
                },
                AllowMethod: {
                  location: "header",
                  sentAs: "access-control-allow-methods",
                },
                AllowHeader: {
                  location: "header",
                  sentAs: "access-control-allow-headers",
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
                Metadata: {
                  location: "header",
                  type: "object",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
              },
            },
            CopyObject: {
              httpMethod: "PUT",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                GrantRead: {
                  location: "header",
                  sentAs: "grant-read",
                  withPrefix: !0,
                },
                GrantReadAcp: {
                  location: "header",
                  sentAs: "grant-read-acp",
                  withPrefix: !0,
                },
                GrantWriteAcp: {
                  location: "header",
                  sentAs: "grant-write-acp",
                  withPrefix: !0,
                },
                GrantFullControl: {
                  location: "header",
                  sentAs: "grant-full-control",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                  type: "adapter",
                },
                CopySource: {
                  required: !0,
                  location: "header",
                  sentAs: "copy-source",
                  withPrefix: !0,
                  skipEncoding: !0,
                },
                CopySourceIfMatch: {
                  location: "header",
                  sentAs: "copy-source-if-match",
                  withPrefix: !0,
                },
                CopySourceIfModifiedSince: {
                  location: "header",
                  sentAs: "copy-source-if-modified-since",
                  withPrefix: !0,
                },
                CopySourceIfNoneMatch: {
                  location: "header",
                  sentAs: "copy-source-if-none-match",
                  withPrefix: !0,
                },
                CopySourceIfUnmodifiedSince: {
                  location: "header",
                  sentAs: "copy-source-if-unmodified-since",
                  withPrefix: !0,
                },
                ContentType: { location: "header", sentAs: "Content-Type" },
                ContentEncoding: {
                  location: "header",
                  sentAs: "content-encoding",
                },
                ContentLanguage: {
                  location: "header",
                  sentAs: "content-language",
                },
                ContentDisposition: {
                  location: "header",
                  sentAs: "content-disposition",
                },
                CacheControl: { location: "header", sentAs: "cache-control" },
                Expires: { location: "header", sentAs: "expires" },
                Metadata: {
                  type: "object",
                  location: "header",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                MetadataDirective: {
                  location: "header",
                  sentAs: "metadata-directive",
                  withPrefix: !0,
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                  type: "adapter",
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                CopySourceSseC: {
                  location: "header",
                  sentAs:
                    "copy-source-server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                CopySourceSseCKey: {
                  location: "header",
                  sentAs: "copy-source-server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
              },
            },
            CopyObjectOutput: {
              data: { type: "xml", xmlRoot: "CopyObjectResult" },
              parameters: {
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                CopySourceVersionId: {
                  location: "header",
                  sentAs: "copy-source-version-id",
                  withPrefix: !0,
                },
                ETag: { location: "xml", sentAs: "ETag" },
                LastModified: { location: "xml", sentAs: "LastModified" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            RestoreObject: {
              httpMethod: "POST",
              urlPath: "restore",
              data: { xmlRoot: "RestoreRequest", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
                Days: { location: "xml", sentAs: "Days" },
                Tier: {
                  wrapper: "GlacierJobParameters",
                  location: "xml",
                  sentAs: "Tier",
                },
              },
            },
            GetObjectMetadata: {
              httpMethod: "HEAD",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
                Origin: { location: "header", sentAs: "Origin" },
                RequestHeader: {
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
              },
            },
            GetObjectMetadataOutput: {
              parameters: {
                Expiration: {
                  location: "header",
                  sentAs: "expiration",
                  withPrefix: !0,
                },
                LastModified: { location: "header", sentAs: "Last-Modified" },
                ContentLength: { location: "header", sentAs: "Content-Length" },
                ContentType: { location: "header", sentAs: "Content-Type" },
                ETag: { location: "header", sentAs: "etag" },
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                Restore: {
                  location: "header",
                  sentAs: "restore",
                  withPrefix: !0,
                },
                ObjectType: { location: "header", sentAs: "x-obs-object-type" },
                NextPosition: {
                  location: "header",
                  sentAs: "x-obs-next-append-position",
                },
                AllowOrigin: {
                  location: "header",
                  sentAs: "access-control-allow-origin",
                },
                MaxAgeSeconds: {
                  location: "header",
                  sentAs: "access-control-max-age",
                },
                ExposeHeader: {
                  location: "header",
                  sentAs: "access-control-expose-headers",
                },
                AllowMethod: {
                  location: "header",
                  sentAs: "access-control-allow-methods",
                },
                AllowHeader: {
                  location: "header",
                  sentAs: "access-control-allow-headers",
                },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
                Metadata: {
                  location: "header",
                  type: "object",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                ContentLanguage: {
                  location: "header",
                  sentAs: "Content-Language",
                },
                ContentEncoding: {
                  location: "header",
                  sentAs: "Content-Encoding",
                },
                CacheControl: { location: "header", sentAs: "Cache-Control" },
                ContentDisposition: {
                  location: "header",
                  sentAs: "Content-Disposition",
                },
                Expires: { location: "header", sentAs: "Expires" },
                ReplicationStatus: {
                  location: "header",
                  sentAs: "replication-status",
                  withPrefix: !0,
                },
              },
            },
            SetObjectMetadata: {
              httpMethod: "PUT",
              urlPath: "metadata",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
                Origin: { location: "header", sentAs: "Origin" },
                RequestHeader: {
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                },
                CacheControl: { location: "header", sentAs: "Cache-Control" },
                ContentDisposition: {
                  location: "header",
                  sentAs: "Content-Disposition",
                  encodingSafe: ' ;/?:@&=+$,"',
                },
                ContentLanguage: {
                  location: "header",
                  sentAs: "Content-Language",
                },
                ContentEncoding: {
                  location: "header",
                  sentAs: "Content-Encoding",
                },
                ContentType: { location: "header", sentAs: "Content-Type" },
                Expires: { location: "header", sentAs: "Expires" },
                Metadata: {
                  shape: "Sy",
                  location: "header",
                  type: "object",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                MetadataDirective: {
                  location: "header",
                  sentAs: "metadata-directive",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
              },
            },
            SetObjectMetadataOutput: {
              parameters: {
                Expires: { location: "header", sentAs: "Expires" },
                ContentLength: { location: "header", sentAs: "Content-Length" },
                ContentType: { location: "header", sentAs: "Content-Type" },
                ContentLanguage: {
                  location: "header",
                  sentAs: "Content-Language",
                },
                CacheControl: { location: "header", sentAs: "Cache-Control" },
                ContentDisposition: {
                  location: "header",
                  sentAs: "Content-Disposition",
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                  type: "adapter",
                },
                Metadata: {
                  location: "header",
                  type: "object",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
              },
            },
            SetObjectAcl: {
              httpMethod: "PUT",
              urlPath: "acl",
              data: { xmlRoot: "AccessControlPolicy" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                Owner: vt,
                Grants: Bt,
              },
            },
            SetObjectAclOutput: {
              parameters: {
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
              },
            },
            GetObjectAcl: {
              httpMethod: "GET",
              urlPath: "acl",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
              },
            },
            GetObjectAclOutput: {
              data: { type: "xml", xmlRoot: "AccessControlPolicy" },
              parameters: {
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                Owner: vt,
                Grants: Bt,
              },
            },
            DeleteObject: {
              httpMethod: "DELETE",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                VersionId: { location: "urlPath", sentAs: "versionId" },
              },
            },
            DeleteObjectOutput: {
              parameters: {
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                DeleteMarker: {
                  location: "header",
                  sentAs: "delete-marker",
                  withPrefix: !0,
                },
              },
            },
            DeleteObjects: {
              httpMethod: "POST",
              urlPath: "delete",
              data: { xmlRoot: "Delete", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Quiet: { location: "xml", sentAs: "Quiet" },
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Objects: {
                  required: !0,
                  type: "array",
                  location: "xml",
                  sentAs: "Object",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { sentAs: "Key" },
                      VersionId: { sentAs: "VersionId" },
                    },
                  },
                },
              },
            },
            DeleteObjectsOutput: {
              data: { type: "xml", xmlRoot: "DeleteResult" },
              parameters: {
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Deleteds: {
                  type: "array",
                  location: "xml",
                  sentAs: "Deleted",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { decode: !0, sentAs: "Key" },
                      VersionId: { sentAs: "VersionId" },
                      DeleteMarker: { sentAs: "DeleteMarker" },
                      DeleteMarkerVersionId: {
                        sentAs: "DeleteMarkerVersionId",
                      },
                    },
                  },
                },
                Errors: {
                  type: "array",
                  location: "xml",
                  sentAs: "Error",
                  items: {
                    type: "object",
                    parameters: {
                      Key: { decode: !0, sentAs: "Key" },
                      VersionId: { sentAs: "VersionId" },
                      Code: { sentAs: "Code" },
                      Message: { sentAs: "Message" },
                    },
                  },
                },
              },
            },
            InitiateMultipartUpload: {
              httpMethod: "POST",
              urlPath: "uploads",
              parameters: {
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                ACL: {
                  location: "header",
                  sentAs: "acl",
                  withPrefix: !0,
                  type: "adapter",
                },
                GrantRead: {
                  location: "header",
                  sentAs: "grant-read",
                  withPrefix: !0,
                },
                GrantReadAcp: {
                  location: "header",
                  sentAs: "grant-read-acp",
                  withPrefix: !0,
                },
                GrantWriteAcp: {
                  location: "header",
                  sentAs: "grant-write-acp",
                  withPrefix: !0,
                },
                GrantFullControl: {
                  location: "header",
                  sentAs: "grant-full-control",
                  withPrefix: !0,
                },
                StorageClass: {
                  location: "header",
                  sentAs: "storage-class",
                  withPrefix: !0,
                  type: "adapter",
                },
                Metadata: {
                  type: "object",
                  location: "header",
                  sentAs: "meta-",
                  withPrefix: !0,
                },
                WebsiteRedirectLocation: {
                  location: "header",
                  sentAs: "website-redirect-location",
                  withPrefix: !0,
                },
                Expires: {
                  location: "header",
                  sentAs: "x-obs-expires",
                  type: "number",
                },
                ContentType: { location: "header", sentAs: "Content-Type" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                  type: "adapter",
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
              },
            },
            InitiateMultipartUploadOutput: {
              data: { type: "xml", xmlRoot: "InitiateMultipartUploadResult" },
              parameters: {
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Bucket: { location: "xml", sentAs: "Bucket" },
                Key: { decode: !0, location: "xml", sentAs: "Key" },
                UploadId: { location: "xml", sentAs: "UploadId" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            ListMultipartUploads: {
              httpMethod: "GET",
              urlPath: "uploads",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Delimiter: { location: "urlPath", sentAs: "delimiter" },
                KeyMarker: { location: "urlPath", sentAs: "key-marker" },
                MaxUploads: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "max-uploads",
                },
                Prefix: { location: "urlPath", sentAs: "prefix" },
                UploadIdMarker: {
                  location: "urlPath",
                  sentAs: "upload-id-marker",
                },
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
              },
            },
            ListMultipartUploadsOutput: {
              data: { type: "xml", xmlRoot: "ListMultipartUploadsResult" },
              parameters: {
                Bucket: { location: "xml", sentAs: "Bucket" },
                KeyMarker: { decode: !0, location: "xml", sentAs: "KeyMarker" },
                UploadIdMarker: { location: "xml", sentAs: "UploadIdMarker" },
                NextKeyMarker: {
                  decode: !0,
                  location: "xml",
                  sentAs: "NextKeyMarker",
                },
                Prefix: { decode: !0, location: "xml", sentAs: "Prefix" },
                Delimiter: { decode: !0, location: "xml", sentAs: "Delimiter" },
                NextUploadIdMarker: {
                  location: "xml",
                  sentAs: "NextUploadIdMarker",
                },
                MaxUploads: { location: "xml", sentAs: "MaxUploads" },
                IsTruncated: { location: "xml", sentAs: "IsTruncated" },
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Uploads: {
                  type: "array",
                  location: "xml",
                  sentAs: "Upload",
                  items: {
                    type: "object",
                    parameters: {
                      UploadId: { sentAs: "UploadId" },
                      Key: { decode: !0, sentAs: "Key" },
                      Initiated: { sentAs: "Initiated" },
                      StorageClass: { sentAs: "StorageClass" },
                      Owner: vt,
                      Initiator: Tt,
                    },
                  },
                },
                CommonPrefixes: Et,
              },
            },
            UploadPart: {
              httpMethod: "PUT",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                PartNumber: {
                  required: !0,
                  type: "number",
                  location: "urlPath",
                  sentAs: "partNumber",
                },
                UploadId: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "uploadId",
                },
                ContentMD5: { location: "header", sentAs: "Content-MD5" },
                Body: { location: "body" },
                SourceFile: { type: "srcFile" },
                Offset: { type: "plain" },
                PartSize: { type: "plain" },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                ProgressCallback: { type: "plain" },
              },
            },
            UploadPartOutput: {
              parameters: {
                ETag: { location: "header", sentAs: "etag" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            ListParts: {
              httpMethod: "GET",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                UploadId: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "uploadId",
                },
                MaxParts: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "max-parts",
                },
                PartNumberMarker: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "part-number-marker",
                },
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
              },
            },
            ListPartsOutput: {
              data: { type: "xml", xmlRoot: "ListPartsResult" },
              parameters: {
                Bucket: { location: "xml", sentAs: "Bucket" },
                Key: { decode: !0, location: "xml", sentAs: "Key" },
                UploadId: { location: "xml", sentAs: "UploadId" },
                PartNumberMarker: {
                  location: "xml",
                  sentAs: "PartNumberMarker",
                },
                NextPartNumberMarker: {
                  location: "xml",
                  sentAs: "NextPartNumberMarker",
                },
                MaxParts: { location: "xml", sentAs: "MaxParts" },
                IsTruncated: { location: "xml", sentAs: "IsTruncated" },
                StorageClass: { location: "xml", sentAs: "StorageClass" },
                EncodingType: { location: "urlPath", sentAs: "EncodingType" },
                Initiator: Tt,
                Owner: vt,
                Parts: {
                  type: "array",
                  location: "xml",
                  sentAs: "Part",
                  items: {
                    type: "object",
                    parameters: {
                      PartNumber: { sentAs: "PartNumber" },
                      LastModified: { sentAs: "LastModified" },
                      ETag: { sentAs: "ETag" },
                      Size: { sentAs: "Size" },
                    },
                  },
                },
              },
            },
            CopyPart: {
              httpMethod: "PUT",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                PartNumber: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "partNumber",
                  type: "number",
                },
                UploadId: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "uploadId",
                },
                CopySource: {
                  required: !0,
                  location: "header",
                  sentAs: "copy-source",
                  skipEncoding: !0,
                  withPrefix: !0,
                },
                CopySourceRange: {
                  location: "header",
                  sentAs: "copy-source-range",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKey: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
                CopySourceSseC: {
                  location: "header",
                  sentAs:
                    "copy-source-server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                CopySourceSseCKey: {
                  location: "header",
                  sentAs: "copy-source-server-side-encryption-customer-key",
                  type: "password",
                  withPrefix: !0,
                },
              },
            },
            CopyPartOutput: {
              data: { type: "xml", xmlRoot: "CopyPartResult" },
              parameters: {
                LastModified: { location: "xml", sentAs: "LastModified" },
                ETag: { location: "xml", sentAs: "ETag" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
            },
            AbortMultipartUpload: {
              httpMethod: "DELETE",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                UploadId: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "uploadId",
                },
              },
            },
            CompleteMultipartUpload: {
              httpMethod: "POST",
              data: { xmlRoot: "CompleteMultipartUpload" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                UploadId: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "uploadId",
                },
                EncodingType: { location: "urlPath", sentAs: "encoding-type" },
                Parts: {
                  required: !0,
                  type: "array",
                  location: "xml",
                  sentAs: "Part",
                  items: {
                    type: "object",
                    parameters: {
                      PartNumber: { sentAs: "PartNumber" },
                      ETag: { sentAs: "ETag" },
                    },
                  },
                },
                Callback: {
                  location: "header",
                  sentAs: "callback",
                  withPrefix: !0,
                  type: "callback",
                  parameters: {
                    CallbackUrl: { required: !0 },
                    CallbackBody: { required: !0 },
                    CallbackHost: {},
                    CallbackBodyType: {},
                  },
                },
              },
            },
            CompleteMultipartUploadOutput: {
              data: { type: "xml", xmlRoot: "CompleteMultipartUploadResult" },
              parameters: {
                VersionId: {
                  location: "header",
                  sentAs: "version-id",
                  withPrefix: !0,
                },
                Location: { location: "xml", sentAs: "Location" },
                EncodingType: { location: "xml", sentAs: "EncodingType" },
                Bucket: { location: "xml", sentAs: "Bucket" },
                Key: { decode: !0, location: "xml", sentAs: "Key" },
                ETag: { location: "xml", sentAs: "ETag" },
                SseKms: {
                  location: "header",
                  sentAs: "server-side-encryption",
                  withPrefix: !0,
                },
                SseKmsKey: {
                  location: "header",
                  sentAs: "server-side-encryption-aws-kms-key-id",
                  withPrefix: !0,
                },
                SseC: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-algorithm",
                  withPrefix: !0,
                },
                SseCKeyMd5: {
                  location: "header",
                  sentAs: "server-side-encryption-customer-key-MD5",
                  withPrefix: !0,
                },
              },
              CallbackResponse: {
                location: "body",
                sentAs: "CallbackResponseBody",
              },
            },
            GetBucketInventory: {
              httpMethod: "GET",
              urlPath: "inventory",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketInventoryOutput: {
              data: { type: "xml", xmlRoot: "ListInventoryConfiguration" },
              parameters: {
                Rules: {
                  type: "array",
                  location: "xml",
                  sentAs: "InventoryConfiguration",
                  items: {
                    type: "object",
                    parameters: {
                      Id: { sentAs: "Id" },
                      IsEnabled: { sentAs: "IsEnabled" },
                      Filter: {
                        type: "object",
                        sentAs: "Filter",
                        parameters: { Prefix: { sentAs: "Prefix" } },
                      },
                      Destination: {
                        type: "object",
                        sentAs: "Destination",
                        parameters: {
                          Format: { sentAs: "Format" },
                          Bucket: { sentAs: "Bucket" },
                          Prefix: { sentAs: "Prefix" },
                        },
                      },
                      Schedule: {
                        type: "object",
                        sentAs: "Schedule",
                        parameters: { Frequency: { sentAs: "Frequency" } },
                      },
                      IncludedObjectVersions: {
                        sentAs: "IncludedObjectVersions",
                      },
                      OptionalFields: {
                        type: "object",
                        location: "xml",
                        sentAs: "OptionalFields",
                        parameters: {
                          Field: {
                            type: "array",
                            sentAs: "Field",
                            items: { type: "string" },
                          },
                        },
                      },
                      LastExportTime: { sentAs: "LastExportTime" },
                    },
                  },
                },
              },
            },
            SetBucketInventory: {
              httpMethod: "PUT",
              urlPath: "inventory",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Id: { location: "urlPath", sentAs: "id" },
                InventoryConfiguration: St,
              },
            },
            SetBucketInventoryOutput: {
              data: { type: "xml", xmlRoot: "InventoryConfiguration" },
              parameters: { InventoryConfiguration: St },
            },
            DeleteInventory: {
              httpMethod: "DELETE",
              urlPath: "inventory",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Id: { location: "urlPath", sentAs: "id" },
              },
            },
            DeleteInventoryOutput: {
              data: { type: "xml", xmlRoot: "InventoryConfiguration" },
              parameters: { InventoryConfiguration: St },
            },
            GetBucketEncryption: {
              httpMethod: "GET",
              urlPath: "encryption",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketEncryptionOutput: {
              data: {
                type: "xml",
                xmlRoot: "ServerSideEncryptionConfiguration",
              },
              parameters: {
                Rule: {
                  type: "object",
                  location: "xml",
                  sentAs: "Rule",
                  parameters: {
                    ApplyServerSideEncryptionByDefault: {
                      type: "object",
                      sentAs: "ApplyServerSideEncryptionByDefault",
                      parameters: {
                        SSEAlgorithm: { sentAs: "SSEAlgorithm" },
                        KMSMasterKeyID: { sentAs: "KMSMasterKeyID" },
                        ProjectID: { sentAs: "ProjectID" },
                      },
                    },
                  },
                },
              },
            },
            SetBucketEncryption: {
              httpMethod: "PUT",
              urlPath: "encryption",
              data: { xmlRoot: "ServerSideEncryptionConfiguration" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Rule: Ct,
              },
            },
            SetBucketEncryptionOutput: {
              data: {
                type: "xml",
                xmlRoot: "ServerSideEncryptionConfiguration",
              },
              parameters: { Rule: Ct },
            },
            DeleteBucketEncryption: {
              httpMethod: "DELETE",
              urlPath: "encryption",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            DeleteBucketEncryptionOutput: {
              data: {
                type: "xml",
                xmlRoot: "ServerSideEncryptionConfiguration",
              },
              parameters: { Rule: Ct },
            },
            GetBucketRequesterPay: {
              httpMethod: "GET",
              urlPath: "requestPayment",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketRequesterPayOutput: {
              data: { type: "xml", xmlRoot: "RequestPaymentConfiguration" },
              parameters: { Payer: { location: "xml", sentAs: "Payer" } },
            },
            SetBucketRequesterPay: {
              httpMethod: "PUT",
              urlPath: "requestPayment",
              data: { xmlRoot: "RequestPaymentConfiguration" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Payer: { location: "xml", sentAs: "Payer" },
              },
            },
            SetBucketRequesterPayOutput: {
              data: { type: "xml", xmlRoot: "RequestPaymentConfiguration" },
              parameters: { Payer: { location: "xml", sentAs: "Payer" } },
            },
            OptionsBucket: {
              httpMethod: "OPTIONS",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Origin: { required: !0, location: "header", sentAs: "Origin" },
                AccessControlRequestMethods: {
                  required: !0,
                  type: "array",
                  location: "header",
                  sentAs: "Access-Control-Request-Method",
                  items: { type: "string" },
                },
                AccessControlRequestHeaders: {
                  type: "array",
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                  items: { type: "string" },
                },
              },
            },
            OptionsBucketOutput: {
              parameters: {
                AllowOrigin: {
                  location: "header",
                  sentAs: "access-control-allow-origin",
                },
                AllowHeader: {
                  location: "header",
                  sentAs: "access-control-allow-headers",
                },
                AllowMethod: {
                  location: "header",
                  sentAs: "access-control-allow-methods",
                },
                ExposeHeader: {
                  location: "header",
                  sentAs: "access-control-expose-headers",
                },
                MaxAgeSeconds: {
                  location: "header",
                  sentAs: "access-control-max-age",
                },
              },
            },
            OptionsObject: {
              httpMethod: "OPTIONS",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Key: { required: !0, location: "uri" },
                Origin: { required: !0, location: "header", sentAs: "Origin" },
                AccessControlRequestMethods: {
                  required: !0,
                  type: "array",
                  location: "header",
                  sentAs: "Access-Control-Request-Method",
                  items: { type: "string" },
                },
                AccessControlRequestHeaders: {
                  type: "array",
                  location: "header",
                  sentAs: "Access-Control-Request-Headers",
                  items: { type: "string" },
                },
              },
            },
            OptionsObjectOutput: {
              parameters: {
                AllowOrigin: {
                  location: "header",
                  sentAs: "access-control-allow-origin",
                },
                AllowHeader: {
                  location: "header",
                  sentAs: "access-control-allow-headers",
                },
                AllowMethod: {
                  location: "header",
                  sentAs: "access-control-allow-methods",
                },
                ExposeHeader: {
                  location: "header",
                  sentAs: "access-control-expose-headers",
                },
                MaxAgeSeconds: {
                  location: "header",
                  sentAs: "access-control-max-age",
                },
              },
            },
            SetMirrorBackToSource: {
              httpMethod: "PUT",
              urlPath: "mirrorBackToSource",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
                Rules: { required: !0, location: "body" },
              },
            },
            SetMirrorBackToSourceOutput: {
              data: { type: "body" },
              parameters: { Rules: { location: "body" } },
            },
            GetMirrorBackToSource: {
              httpMethod: "GET",
              urlPath: "mirrorBackToSource",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
              },
            },
            GetMirrorBackToSourceOutput: {
              data: { type: "body" },
              parameters: { Rules: { location: "body" } },
            },
            deleteMirrorBackToSource: {
              httpMethod: "DELETE",
              urlPath: "mirrorBackToSource",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
              },
            },
            GetBucketDirectColdAccess: {
              httpMethod: "GET",
              urlPath: "directcoldaccess",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketDirectColdAccessOutput: {
              data: { type: "xml", xmlRoot: "DirectColdAccessConfiguration" },
              parameters: { Status: { location: "xml", sentAs: "Status" } },
            },
            SetBucketDirectColdAccess: {
              httpMethod: "PUT",
              urlPath: "directcoldaccess",
              data: { xmlRoot: "DirectColdAccessConfiguration", md5: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Status: { required: !0, location: "xml", sentAs: "Status" },
              },
            },
            SetBucketDirectColdAccessOutput: {
              data: { type: "xml", xmlRoot: "DirectColdAccessConfiguration" },
              parameters: { Status: { location: "xml", sentAs: "Status" } },
            },
            DeleteBucketDirectColdAccess: {
              httpMethod: "DELETE",
              urlPath: "directcoldaccess",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            DeleteBucketDirectColdAccessOutput: {
              data: { type: "xml", xmlRoot: "DirectColdAccessConfiguration" },
              parameters: { Status: { location: "xml", sentAs: "Status" } },
            },
            GetBucketCustomDomain: {
              httpMethod: "GET",
              urlPath: "customdomain",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketCustomDomainOutput: {
              data: { type: "xml", xmlRoot: "ListBucketCustomDomainsResult" },
              parameters: {
                Domains: {
                  location: "xml",
                  type: "array",
                  sentAs: "Domains",
                  items: {
                    type: "object",
                    parameters: {
                      DomainName: { sentAs: "DomainName" },
                      Value: { sentAs: "CreateTime" },
                    },
                  },
                },
              },
            },
            SetBucketCustomDomain: {
              httpMethod: "PUT",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                DomainName: { location: "urlPath", sentAs: "customdomain" },
              },
            },
            DeleteBucketCustomDomain: {
              httpMethod: "DELETE",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                DomainName: { location: "urlPath", sentAs: "customdomain" },
              },
            },
            GetCDNNotifyConfiguration: {
              httpMethod: "GET",
              urlPath: "CDNNotifyConfiguration",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetCDNNotifyConfigurationOutput: {
              data: { type: "xml", xmlRoot: "CDNNotifyConfiguration" },
              parameters: {
                Domain: {
                  location: "xml",
                  type: "array",
                  sentAs: "Domain",
                  items: {
                    type: "object",
                    parameters: {
                      Name: { sentAs: "Name" },
                      Events: {
                        type: "array",
                        items: { type: "adapter" },
                        sentAs: "Event",
                      },
                    },
                  },
                },
              },
            },
            SetCdnNotifyConfiguration: {
              httpMethod: "PUT",
              urlPath: "CDNNotifyConfiguration",
              data: { xmlRoot: "CDNNotifyConfiguration", xmlAllowEmpty: !0 },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Domain: {
                  location: "xml",
                  sentAs: "Domain",
                  type: "array",
                  items: {
                    type: "object",
                    parameters: {
                      Name: { type: "string", sentAs: "Name" },
                      Event: {
                        type: "array",
                        items: { type: "adapter" },
                        sentAs: "Event",
                      },
                    },
                  },
                },
              },
            },
            GetQuota: { httpMethod: "GET", urlPath: "quota" },
            GetQuotaOutput: {
              data: { type: "xml", xmlRoot: "MaxBucketNumber" },
              parameters: { Size: { location: "xml", sentAs: "Number" } },
            },
            GetWorkflowTrigger: {
              httpMethod: "GET",
              urlPath: "triggerpolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
              },
            },
            GetWorkflowTriggerOutput: {
              data: { type: "body" },
              parameters: { rules: { location: "body" } },
            },
            DeleteWorkflowTrigger: {
              httpMethod: "DELETE",
              urlPath: "triggerpolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
              },
            },
            CreateWorkflowTrigger: {
              httpMethod: "PUT",
              urlPath: "triggerpolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                ApiPath: { location: "uri" },
                Rule: { required: !0, location: "body" },
              },
            },
            RestoreFailedWorkflowExecution: {
              httpMethod: "PUT",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  required: !0,
                  location: "uri",
                  sentAs: "execution_name",
                },
                GraphName: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "x-workflow-graph-name",
                },
              },
            },
            CreateTemplate: {
              httpMethod: "POST",
              parameters: {
                ApiPath: { location: "uri" },
                Template: { required: !0, location: "body" },
              },
            },
            CreateWorkflow: {
              httpMethod: "POST",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  required: !0,
                  location: "uri",
                  sentAs: "graph_name",
                },
                Workflow_create: {
                  location: "urlPath",
                  sentAs: "x-workflow-create",
                },
                Workflow: { required: !0, location: "body" },
              },
            },
            DeleteWorkflow: {
              httpMethod: "DELETE",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: { location: "uri", sentAs: "graph_name" },
              },
            },
            UpdateWorkflow: {
              httpMethod: "PUT",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: { location: "uri", sentAs: "graph_name" },
                Graph_name: { required: !0, location: "body" },
              },
            },
            GetWorkflowList: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  location: "uri",
                  sentAs: "graph_name_prefix",
                },
                XObsLimit: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-limit",
                },
                XObsPrefix: {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
                XObsStart: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-start",
                },
              },
            },
            GetWorkflowListOutput: {
              data: { type: "body" },
              parameters: { workflows: { location: "body" } },
            },
            GetWorkflowTemplateList: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  location: "uri",
                  sentAs: "template_name_prefix",
                },
                Start: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-start",
                },
                Limit: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-limit",
                },
                "X-workflow-prefix": {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
              },
            },
            GetWorkflowTemplateListOutput: {
              data: { type: "body" },
              parameters: { templates: { location: "body" } },
            },
            GetWorkflowInstanceList: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  location: "uri",
                  sentAs: "execution_name_prefix",
                },
                Start: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-start",
                },
                Limit: {
                  type: "number",
                  location: "urlPath",
                  sentAs: "x-workflow-limit",
                },
                Graph_name: {
                  location: "urlPath",
                  sentAs: "x-workflow-graph-name",
                },
                State: {
                  location: "urlPath",
                  sentAs: "x-workflow-execution-state",
                },
                "X-workflow-prefix": {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
              },
            },
            GetWorkflowInstanceListOutput: {
              data: { type: "body" },
              parameters: { instances: { location: "body" } },
            },
            DeleteTemplate: {
              httpMethod: "DELETE",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: { location: "uri", sentAs: "template_name" },
              },
            },
            GetActionTemplates: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                Other_parameter: {
                  location: "uri",
                  sentAs: "template_name_prefix",
                },
                XObsPrefix: {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
                XObsCategory: {
                  type: "String",
                  location: "urlPath",
                  sentAs: "x-workflow-category",
                },
              },
            },
            GetActionTemplatesOutput: {
              data: { type: "body" },
              parameters: { templates: { location: "body" } },
            },
            GetWorkflowAuthorization: {
              httpMethod: "GET",
              parameters: { ApiPath: { location: "uri" } },
            },
            GetWorkflowAuthorizationOutput: {
              data: { type: "body" },
              parameters: { authorization: { location: "body" } },
            },
            OpenWorkflowAuthorization: {
              httpMethod: "POST",
              parameters: { ApiPath: { location: "uri" } },
            },
            CreateOnlineDecom: {
              httpMethod: "PUT",
              urlPath: "obscompresspolicy",
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Decom: { required: !0, location: "body" },
              },
            },
            GetOnlineDecom: {
              httpMethod: "GET",
              urlPath: "obscompresspolicy",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetOnlineDecomOutput: {
              data: { type: "body" },
              parameters: { Decom: { location: "body" } },
            },
            DeleteOnlineDecom: {
              httpMethod: "DELETE",
              urlPath: "obscompresspolicy",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetPublicationTemplates: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: {
                  location: "uri",
                  sentAs: "template_name_prefix",
                },
                XObsCategory: {
                  location: "urlPath",
                  sentAs: "x-workflow-category",
                },
                XObsOtatus: {
                  location: "urlPath",
                  sentAs: "x-workflow-status",
                },
                XObsPrefix: {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
              },
            },
            GetPublicationTemplatesOutput: {
              data: { type: "body" },
              parameters: { PublishedTemplates: { location: "body" } },
            },
            GetPublicationTemplateDetail: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
              },
            },
            GetPublicationTemplateDetailOutput: {
              data: { type: "body" },
              parameters: { PublishTemplate: { location: "body" } },
            },
            GetWorkflowAgreements: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                XWorkflowType: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "x-workflow-type",
                },
              },
            },
            GetWorkflowAgreementsOutput: {
              data: { type: "body" },
              parameters: { authorization: { location: "body" } },
            },
            OpenWorkflowAgreements: {
              httpMethod: "POST",
              parameters: {
                ApiPath: { location: "uri" },
                XWorkflowType: {
                  required: !0,
                  location: "urlPath",
                  sentAs: "x-workflow-type",
                },
              },
            },
            CreateMyActionTemplate: {
              httpMethod: "POST",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
                ActionTemplate: { required: !0, location: "body" },
              },
            },
            CreateMyActionTemplateOutput: {
              data: { type: "body" },
              parameters: { ActionTemplate: { location: "body" } },
            },
            GetMyActionTemplates: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: {
                  location: "uri",
                  sentAs: "template_name_prefix",
                },
                XObsCategory: {
                  location: "urlPath",
                  sentAs: "x-workflow-category",
                },
                XObsOtatus: {
                  location: "urlPath",
                  sentAs: "x-workflow-status",
                },
                XObsPrefix: {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
              },
            },
            GetMyActionTemplatesOutput: {
              data: { type: "body" },
              parameters: { ActionTemplates: { location: "body" } },
            },
            GetMyactiontemplateDetail: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
              },
            },
            GetMyactiontemplateDetailOutput: {
              data: { type: "body" },
              parameters: { ActionTemplate: { location: "body" } },
            },
            UpdateMyActionTemplate: {
              httpMethod: "PUT",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
                ActionTemplate: { required: !0, location: "body" },
              },
            },
            UpdateMyActionTemplateOutput: {
              data: { type: "body" },
              parameters: { ActionTemplate: { location: "body" } },
            },
            DeleteMyActionTemplate: {
              httpMethod: "DELETE",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
              },
            },
            ForbidMyActionTemplate: {
              httpMethod: "DELETE",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
                XObsForbid: {
                  location: "urlPath",
                  sentAs: "x-workflow-forbid",
                },
              },
            },
            UpdatePublicActionTemplate: {
              httpMethod: "PUT",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: { location: "uri", sentAs: "template_name" },
                PublicAction: { required: !0, location: "body" },
              },
            },
            GetOmPublicActionTemplates: {
              httpMethod: "GET",
              parameters: {
                ApiPath: { location: "uri" },
                OtherParameter: {
                  location: "uri",
                  sentAs: "template_name_prefix",
                },
                XObsCategory: {
                  location: "urlPath",
                  sentAs: "x-workflow-category",
                },
                XObsOtatus: {
                  location: "urlPath",
                  sentAs: "x-workflow-status",
                },
                XObsPrefix: {
                  location: "urlPath",
                  sentAs: "x-workflow-prefix",
                },
              },
            },
            GetOmPublicActionTemplatesOutput: {
              data: { type: "body" },
              parameters: { Templates: { location: "body" } },
            },
            SetBucketAlias: {
              httpMethod: "PUT",
              urlPath: "obsbucketalias",
              data: { xmlRoot: "CreateBucketAlias" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                BucketList: {
                  location: "xml",
                  type: "object",
                  sentAs: "BucketList",
                  parameters: {
                    Bucket: {
                      location: "xml",
                      type: "array",
                      items: { parameters: { sentAs: "Bucket" } },
                    },
                  },
                },
              },
            },
            GetBucketAlias: {
              httpMethod: "GET",
              urlPath: "obsalias",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            GetBucketAliasOutput: {
              data: { type: "xml", xmlRoot: "AliasList" },
              parameters: {
                BucketAlias: {
                  location: "xml",
                  type: "object",
                  sentAs: "BucketAlias",
                  parameters: {
                    Alias: { sentAs: "Alias" },
                    BucketList: {
                      sentAs: "Bucket",
                      location: "xml",
                      type: "array",
                      wrapper: "BucketList",
                      items: { type: "string" },
                    },
                  },
                },
              },
            },
            DeleteBucketAlias: {
              httpMethod: "DELETE",
              urlPath: "obsbucketalias",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            BindBucketAlias: {
              httpMethod: "PUT",
              urlPath: "obsalias",
              data: { xmlRoot: "AliasList" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Alias: { location: "xml", type: "string", sentAs: "Alias" },
              },
            },
            BindBucketAliasOutput: {
              data: { xmlRoot: "AliasList" },
              parameters: {
                Bucket: { required: !0, location: "uri" },
                Alias: { location: "xml", type: "string", sentAs: "Alias" },
              },
            },
            UnbindBucketAlias: {
              httpMethod: "DELETE",
              urlPath: "obsalias",
              parameters: { Bucket: { required: !0, location: "uri" } },
            },
            ListBucketsAlias: { httpMethod: "GET", urlPath: "obsbucketalias" },
            ListBucketsAliasOutput: {
              data: { type: "xml", xmlRoot: "ListBucketAliasResult" },
              parameters: {
                BucketAliasList: {
                  location: "xml",
                  sentAs: "BucketAliasList",
                  type: "object",
                  parameters: {
                    BucketAlias: {
                      location: "xml",
                      type: "array",
                      sentAs: "BucketAlias",
                      items: {
                        type: "object",
                        parameters: {
                          Alias: { sentAs: "Alias" },
                          CreationDate: { sentAs: "CreationDate" },
                          BucketList: {
                            location: "xml",
                            type: "object",
                            sentAs: "BucketList",
                            parameters: {
                              Bucket: {
                                location: "xml",
                                type: "array",
                                items: { parameters: { sentAs: "Bucket" } },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                Owner: {
                  location: "xml",
                  sentAs: "Owner",
                  type: "object",
                  parameters: { ID: { sentAs: "ID" } },
                },
              },
            },
          };
        function Ht(e) {
          return (
            (Ht =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Ht(e)
          );
        }
        function zt(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
          return o;
        }
        var Wt = function (e, t) {
            var r = new Ae(
              "sha1" === e ? "SHA-1" : "sha512" === e ? "SHA-512" : "SHA-256",
              "TEXT"
            );
            return (
              r.setHMACKey(
                t,
                t instanceof ArrayBuffer ? "ARRAYBUFFER" : "TEXT"
              ),
              {
                update: function (e) {
                  return r.update(e), this;
                },
                digest: function (e) {
                  return "hex" === e
                    ? r.getHMAC("HEX")
                    : "base64" === e
                    ? r.getHMAC("B64")
                    : r.getHMAC("ARRAYBUFFER");
                },
              }
            );
          },
          Vt = function (e) {
            if ("md5" === e)
              return {
                update: function (e) {
                  return (
                    this.message ? (this.message += e) : (this.message = e),
                    this
                  );
                },
                digest: function (e) {
                  return "hex" === e
                    ? rt()(this.message)
                    : "base64" === e || "rawbase64" === e
                    ? (window.btoa ? window.btoa : et.encode)(
                        rt()(this.message, !1, !0)
                      )
                    : rt()(this.message, !1, !0);
                },
              };
            var t = new Ae(
              "sha1" === e ? "SHA-1" : "sha512" === e ? "SHA-512" : "SHA-256",
              "TEXT"
            );
            return {
              update: function (e) {
                return t.update(e), this;
              },
              digest: function (e) {
                return "hex" === e
                  ? t.getHash("HEX")
                  : "base64" === e
                  ? t.getHash("B64")
                  : t.getHash("ARRAYBUFFER");
              },
            };
          },
          Qt =
            "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
          Yt = [
            "inventory",
            "acl",
            "backtosource",
            "policy",
            "torrent",
            "logging",
            "location",
            "storageinfo",
            "quota",
            "storageclass",
            "storagepolicy",
            "mirrorbacktosource",
            "requestpayment",
            "versions",
            "versioning",
            "versionid",
            "uploads",
            "uploadid",
            "partnumber",
            "website",
            "notification",
            "replication",
            "lifecycle",
            "deletebucket",
            "delete",
            "cors",
            "restore",
            "tagging",
            "append",
            "position",
            "response-content-type",
            "response-content-language",
            "response-expires",
            "response-cache-control",
            "response-content-disposition",
            "response-content-encoding",
            "x-image-process",
            "x-oss-process",
            "encryption",
            "obsworkflowtriggerpolicy",
            "x-workflow-limit",
            "x-workflow-prefix",
            "x-workflow-start",
            "x-workflow-template-name",
            "x-workflow-graph-name",
            "x-workflow-execution-state",
            "x-workflow-category",
            "x-workflow-prefix",
            "x-workflow-create",
            "directcoldaccess",
            "customdomain",
            "cdnnotifyconfiguration",
            "metadata",
            "dispolicy",
            "obscompresspolicy",
            "template_name",
            "template_name_prefix",
            "x-workflow-status",
            "x-workflow-type",
            "x-workflow-forbid",
            "sfsacl",
            "obsbucketalias",
            "obsalias",
          ],
          Xt = [
            "content-type",
            "content-md5",
            "content-length",
            "content-language",
            "expires",
            "origin",
            "cache-control",
            "content-disposition",
            "content-encoding",
            "x-default-storage-class",
            "location",
            "date",
            "etag",
            "host",
            "last-modified",
            "content-range",
            "x-reserved",
            "access-control-allow-origin",
            "access-control-allow-headers",
            "access-control-max-age",
            "access-control-allow-methods",
            "access-control-expose-headers",
            "connection",
            "x-obs-location-clustergroup-id",
          ],
          $t = {
            "content-length": "ContentLength",
            date: "Date",
            "x-reserved": "Reserved",
          },
          Zt = ["STANDARD", "WARM", "COLD"],
          Jt = ["STANDARD", "STANDARD_IA", "GLACIER"],
          er = [
            "private",
            "public-read",
            "public-read-write",
            "public-read-delivered",
            "public-read-write-delivered",
          ],
          tr = [
            "private",
            "public-read",
            "public-read-write",
            "authenticated-read",
            "bucket-owner-read",
            "bucket-owner-full-control",
            "log-delivery-write",
          ],
          rr = ["Everyone", "LogDelivery"],
          or = [
            "http://acs.amazonaws.com/groups/global/AllUsers",
            "http://acs.amazonaws.com/groups/global/AuthenticatedUsers",
            "http://acs.amazonaws.com/groups/s3/LogDelivery",
          ],
          nr = [
            "ObjectCreated",
            "ObjectRemoved",
            "ObjectCreated:*",
            "ObjectCreated:Put",
            "ObjectCreated:Post",
            "ObjectCreated:Copy",
            "ObjectCreated:CompleteMultipartUpload",
            "ObjectRemoved:*",
            "ObjectRemoved:Delete",
            "ObjectRemoved:DeleteMarkerCreated",
          ],
          ar = [
            "ObjectCreated",
            "ObjectRemoved",
            "s3:ObjectCreated:*",
            "s3:ObjectCreated:Put",
            "s3:ObjectCreated:Post",
            "s3:ObjectCreated:Copy",
            "s3:ObjectCreated:CompleteMultipartUpload",
            "s3:ObjectRemoved:*",
            "s3:ObjectRemoved:Delete",
            "s3:ObjectRemoved:DeleteMarkerCreated",
          ],
          ir = [
            "CreateBucket",
            "SetBucketAlias",
            "BindBucketAlias",
            "UnbindBucketAlias",
            "DeleteBucketAlias",
            "GetBucketAlias",
          ],
          sr = "HeadApiVersion",
          cr = {
            signature: "obs",
            headerPrefix: "x-obs-",
            headerMetaPrefix: "x-obs-meta-",
            authPrefix: "OBS",
          },
          lr = {
            signature: "v2",
            headerPrefix: "x-amz-",
            headerMetaPrefix: "x-amz-meta-",
            authPrefix: "AWS",
          };
        function ur(e, t, r) {
          if (0 === (e = String(e)).length) return "";
          if (r) return e;
          var o;
          if (t) {
            o = [];
            var n,
              a = (function (e, t) {
                var r =
                  ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
                if (!r) {
                  if (
                    Array.isArray(e) ||
                    (r = (function (e, t) {
                      if (e) {
                        if ("string" == typeof e) return zt(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return (
                          "Object" === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                          "Map" === r || "Set" === r
                            ? Array.from(e)
                            : "Arguments" === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? zt(e, t)
                            : void 0
                        );
                      }
                    })(e)) ||
                    (t && e && "number" == typeof e.length)
                  ) {
                    r && (e = r);
                    var o = 0,
                      n = function () {};
                    return {
                      s: n,
                      n: function () {
                        return o >= e.length
                          ? { done: !0 }
                          : { done: !1, value: e[o++] };
                      },
                      e: function (e) {
                        throw e;
                      },
                      f: n,
                    };
                  }
                  throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                }
                var a,
                  i = !0,
                  s = !1;
                return {
                  s: function () {
                    r = r.call(e);
                  },
                  n: function () {
                    var e = r.next();
                    return (i = e.done), e;
                  },
                  e: function (e) {
                    (s = !0), (a = e);
                  },
                  f: function () {
                    try {
                      i || null == r.return || r.return();
                    } finally {
                      if (s) throw a;
                    }
                  },
                };
              })(e);
            try {
              for (a.s(); !(n = a.n()).done; ) {
                var i = n.value;
                o.push(t.indexOf(i) >= 0 ? i : encodeURIComponent(i));
              }
            } catch (e) {
              a.e(e);
            } finally {
              a.f();
            }
            o = o.join("");
          } else o = encodeURIComponent(e);
          return o
            .replace(/!/g, "%21")
            .replace(/\*/g, "%2A")
            .replace(/'/g, "%27")
            .replace(/\(/g, "%28")
            .replace(/\)/g, "%29");
        }
        function pr(e) {
          return JSON ? JSON.stringify(e) : "";
        }
        function dr(e, t) {
          var r = {};
          for (var o in t)
            if ({}.hasOwnProperty.call(t, o)) {
              var n = String(o).toLowerCase();
              0 === n.indexOf(e) && (r[n.slice(e.length)] = t[o]);
            }
          return r;
        }
        function hr(e) {
          return "[object Function]" === Object.prototype.toString.call(e);
        }
        function mr(e) {
          return "[object Object]" === Object.prototype.toString.call(e);
        }
        function fr(e, t) {
          if ("object" === Ht(e)) return t(null, e);
          try {
            return t(null, ot.parseString(e));
          } catch (e) {
            return t(e, null);
          }
        }
        function yr(e) {
          var t = new Date(Date.parse(e)),
            r = t.getUTCHours(),
            o = t.getUTCMinutes(),
            n = t.getUTCSeconds(),
            a = t.getUTCDate(),
            i = t.getUTCMonth() + 1,
            s = "";
          return (
            (s += t.getUTCFullYear() + "-"),
            i < 10 && (s += "0"),
            (s += i + "-"),
            a < 10 && (s += "0"),
            (s += a + "T"),
            r < 10 && (s += "0"),
            (s += r + ":"),
            o < 10 && (s += "0"),
            (s += o + ":"),
            n < 10 && (s += "0"),
            s + (n + "Z")
          );
        }
        function gr(e) {
          var t = new Date(Date.parse(e)),
            r = t.getUTCHours(),
            o = t.getUTCMinutes(),
            n = t.getUTCSeconds(),
            a = t.getUTCDate(),
            i = t.getUTCMonth() + 1,
            s = "",
            c = "";
          return (
            (s += t.getUTCFullYear()),
            i < 10 && (s += "0"),
            (s += i),
            a < 10 && (s += "0"),
            (c += (s += a) + "T"),
            r < 10 && (c += "0"),
            (c += r),
            o < 10 && (c += "0"),
            (c += o),
            n < 10 && (c += "0"),
            [s, (c += n + "Z")]
          );
        }
        function Ar(e) {
          var t = [],
            r = {};
          for (var o in e)
            ({}.hasOwnProperty.call(e, o) &&
              (t.push(o.toLowerCase()), (r[o.toLowerCase()] = e[o])));
          t = t.sort();
          for (var n = "", a = "", i = 0; i < t.length; i++)
            0 !== i && (n += ";"),
              (n += t[i]),
              (a += t[i] + ":" + r[t[i]] + "\n");
          return [n, a];
        }
        function xr(e, t, r, o) {
          var n = Wt("sha256", "AWS4" + t)
              .update(e)
              .digest(),
            a = Wt("sha256", n).update(r).digest(),
            i = Wt("sha256", a).update("s3").digest(),
            s = Wt("sha256", i).update("aws4_request").digest();
          return Wt("sha256", s).update(o).digest("hex");
        }
        function br(e, t, r, o, n) {
          var a = "AWS4-HMAC-SHA256\n";
          return (
            (a += t + "\n"),
            (a += e + "/" + o + "/s3/aws4_request\n"),
            xr(e, r, o, (a += Vt("sha256").update(n).digest("hex")))
          );
        }
        function wr(e) {
          (this.log = e),
            (this.ak = null),
            (this.sk = null),
            (this.securityToken = null),
            (this.isSecure = !0),
            (this.server = null),
            (this.pathStyle = !1),
            (this.signatureContext = null),
            (this.isSignatureNegotiation = !0),
            (this.bucketSignatureCache = {}),
            (this.region = "region"),
            (this.port = null),
            (this.timeout = 300),
            (this.obsSdkVersion = "3.22.3"),
            (this.isCname = !1),
            (this.bucketEventEmitters = {}),
            (this.useRawXhr = !1);
        }
        (wr.prototype.encodeURIWithSafe = ur),
          (wr.prototype.mimeTypes = {
            "7z": "application/x-7z-compressed",
            aac: "audio/x-aac",
            ai: "application/postscript",
            aif: "audio/x-aiff",
            asc: "text/plain",
            asf: "video/x-ms-asf",
            atom: "application/atom+xml",
            avi: "video/x-msvideo",
            bmp: "image/bmp",
            bz2: "application/x-bzip2",
            cer: "application/pkix-cert",
            crl: "application/pkix-crl",
            crt: "application/x-x509-ca-cert",
            css: "text/css",
            csv: "text/csv",
            cu: "application/cu-seeme",
            deb: "application/x-debian-package",
            doc: "application/msword",
            docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            dvi: "application/x-dvi",
            eot: "application/vnd.ms-fontobject",
            eps: "application/postscript",
            epub: "application/epub+zip",
            etx: "text/x-setext",
            flac: "audio/flac",
            flv: "video/x-flv",
            gif: "image/gif",
            gz: "application/gzip",
            htm: "text/html",
            html: "text/html",
            ico: "image/x-icon",
            ics: "text/calendar",
            ini: "text/plain",
            iso: "application/x-iso9660-image",
            jar: "application/java-archive",
            jpe: "image/jpeg",
            jpeg: "image/jpeg",
            jpg: "image/jpeg",
            js: "text/javascript",
            json: "application/json",
            latex: "application/x-latex",
            log: "text/plain",
            m4a: "audio/mp4",
            m4v: "video/mp4",
            mid: "audio/midi",
            midi: "audio/midi",
            mov: "video/quicktime",
            mp3: "audio/mpeg",
            mp4: "video/mp4",
            mp4a: "audio/mp4",
            mp4v: "video/mp4",
            mpe: "video/mpeg",
            mpeg: "video/mpeg",
            mpg: "video/mpeg",
            mpg4: "video/mp4",
            oga: "audio/ogg",
            ogg: "audio/ogg",
            ogv: "video/ogg",
            ogx: "application/ogg",
            pbm: "image/x-portable-bitmap",
            pdf: "application/pdf",
            pgm: "image/x-portable-graymap",
            png: "image/png",
            pnm: "image/x-portable-anymap",
            ppm: "image/x-portable-pixmap",
            ppt: "application/vnd.ms-powerpoint",
            pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            ps: "application/postscript",
            qt: "video/quicktime",
            rar: "application/x-rar-compressed",
            ras: "image/x-cmu-raster",
            rss: "application/rss+xml",
            rtf: "application/rtf",
            sgm: "text/sgml",
            sgml: "text/sgml",
            svg: "image/svg+xml",
            swf: "application/x-shockwave-flash",
            tar: "application/x-tar",
            tif: "image/tiff",
            tiff: "image/tiff",
            torrent: "application/x-bittorrent",
            ttf: "application/x-font-ttf",
            txt: "text/plain",
            wav: "audio/x-wav",
            webm: "video/webm",
            wma: "audio/x-ms-wma",
            wmv: "video/x-ms-wmv",
            woff: "application/x-font-woff",
            wsdl: "application/wsdl+xml",
            xbm: "image/x-xbitmap",
            xls: "application/vnd.ms-excel",
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            xml: "application/xml",
            xpm: "image/x-xpixmap",
            xwd: "image/x-xwindowdump",
            yaml: "text/yaml",
            yml: "text/yaml",
            zip: "application/zip",
          }),
          (wr.prototype.refresh = function (e, t, r) {
            (this.ak = e ? String(e).trim() : null),
              (this.sk = t ? String(t).trim() : null),
              (this.securityToken = r ? String(r).trim() : null);
          }),
          (wr.prototype.initFactory = function (
            e,
            t,
            r,
            o,
            n,
            a,
            i,
            s,
            c,
            l,
            u,
            p,
            d,
            h,
            m,
            f
          ) {
            if (
              (this.refresh(e, t, l),
              (this.urlPrefix = d || ""),
              (this.regionDomains = h || null),
              (this.setRequestHeaderHook = m || null),
              !o)
            )
              throw new Error("Server is not set");
            0 === (o = String(o).trim()).indexOf("https://")
              ? ((o = o.slice("https://".length)), (r = !0))
              : 0 === o.indexOf("http://") &&
                ((o = o.slice("http://".length)), (r = !1));
            for (var y = o.lastIndexOf("/"); y >= 0; )
              y = (o = o.slice(0, y)).lastIndexOf("/");
            (y = o.indexOf(":")) >= 0 &&
              ((s = o.slice(y + 1)), (o = o.slice(0, y))),
              (this.server = o),
              /^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/.test(this.server) && (n = !0),
              void 0 !== r && (this.isSecure = r),
              void 0 !== n && (this.pathStyle = n),
              (a = void 0 !== a ? String(a).trim().toLowerCase() : "obs"),
              void 0 !== u && (this.isSignatureNegotiation = u),
              (this.isCname = p),
              (this.pathStyle || this.isCname) &&
                ((this.isSignatureNegotiation = !1), "obs" === a && (a = "v2")),
              (this.signatureContext = "obs" === a ? cr : lr),
              void 0 !== i && (this.region = String(i)),
              (this.port = s ? parseInt(s, 10) : this.isSecure ? 443 : 80),
              void 0 !== c && (this.timeout = parseInt(c, 10)),
              void 0 !== f && (this.useRawXhr = f);
          }),
          (wr.prototype.SseKmsAdapter = function (e, t) {
            e = e || "";
            var r = (e = String(e)).indexOf("aws:");
            return "obs" === t.signature
              ? 0 === r
                ? e.slice(4)
                : e
              : 0 === r
              ? e
              : "aws:" + e;
          }),
          (wr.prototype.BucketAdapter = function (e, t) {
            e = e || "";
            var r = (e = String(e)).indexOf("arn:aws:s3:::");
            return "obs" === t.signature
              ? 0 === r
                ? e.slice("arn:aws:s3:::".length)
                : e
              : 0 === r
              ? e
              : "arn:aws:s3:::" + e;
          }),
          (wr.prototype.EventAdapter = function (e, t) {
            return (
              (e = e || ""),
              (e = String(e)),
              "obs" === t.signature
                ? nr.indexOf(e) >= 0
                  ? e
                  : ar.indexOf(e) >= 0
                  ? e.substring(3)
                  : ""
                : ar.indexOf(e) >= 0
                ? e
                : nr.indexOf(e) >= 0
                ? "s3:" + e
                : ""
            );
          }),
          (wr.prototype.URIAdapter = function (e, t) {
            return (
              (e = e || ""),
              (e = String(e)),
              "obs" === t.signature
                ? rr.indexOf(e) >= 0
                  ? e
                  : "AllUsers" === e ||
                    "http://acs.amazonaws.com/groups/global/AllUsers" === e
                  ? "Everyone"
                  : ""
                : or.indexOf(e) >= 0
                ? e
                : "Everyone" === e || "AllUsers" === e
                ? "http://acs.amazonaws.com/groups/global/AllUsers"
                : "AuthenticatedUsers" === e
                ? "http://acs.amazonaws.com/groups/global/AuthenticatedUsers"
                : "LogDelivery" === e
                ? "http://acs.amazonaws.com/groups/s3/LogDelivery"
                : ""
            );
          }),
          (wr.prototype.StorageClassAdapter = function (e, t) {
            return (
              (e = e || ""),
              (e = String(e).toUpperCase()),
              "obs" === t.signature
                ? Zt.indexOf(e) >= 0
                  ? e
                  : "STANDARD_IA" === e
                  ? "WARM"
                  : "GLACIER" === e
                  ? "COLD"
                  : ""
                : Jt.indexOf(e) >= 0
                ? e
                : "WARM" === e
                ? "STANDARD_IA"
                : "COLD" === e
                ? "GLACIER"
                : ""
            );
          }),
          (wr.prototype.ACLAdapter = function (e, t) {
            return (
              (e = e || ""),
              (e = String(e).toLowerCase()),
              "obs" === t.signature
                ? er.indexOf(e) >= 0
                  ? e
                  : ""
                : ("public-read-delivered" === e
                    ? (e = "public-read")
                    : "public-read-write-delivered" === e &&
                      (e = "public-read-write"),
                  tr.indexOf(e) >= 0 ? e : "")
            );
          }),
          (wr.prototype.doExec = function (e, t, r) {
            var o = this.makeParam(e, t);
            if ("err" in o) return r(o.err, null);
            this.sendRequest(e, o, r);
          }),
          (wr.prototype.doNegotiation = function (e, t, r, o, n, a) {
            var i = null,
              s = this;
            if (n && t.Bucket) {
              var c = this.bucketSignatureCache[t.Bucket];
              if (
                c &&
                c.signatureContext &&
                c.expireTime > new Date().getTime()
              ) {
                t.signatureContext = c.signatureContext;
                var l = this.makeParam(e, t);
                return "err" in l
                  ? r(l.err, null)
                  : ((l.signatureContext = c.signatureContext),
                    this.sendRequest(e, l, r));
              }
              if (
                ((i = this.bucketEventEmitters[t.Bucket]) ||
                  ((i = {
                    s: 0,
                    n: function () {
                      for (; this.e && this.e.length > 0; ) this.e.shift()();
                    },
                  }),
                  (this.bucketEventEmitters[t.Bucket] = i)),
                i.s)
              )
                return void i.e.push(function () {
                  s.doNegotiation(e, t, r, o, n, a);
                });
              (i.e = []), (i.s = 1);
            }
            this.doExec(sr, o ? { Bucket: t.Bucket } : {}, function (n, c) {
              if (n) return r(n, null), void (i && ((i.s = 0), i.n()));
              if (
                (o && 404 === c.CommonMsg.Status) ||
                c.CommonMsg.Status >= 500
              )
                return r(n, c), void (i && ((i.s = 0), i.n()));
              var l = lr;
              c.CommonMsg.Status < 300 &&
                c.InterfaceResult &&
                c.InterfaceResult.ApiVersion >= "3.0" &&
                (l = cr),
                a &&
                  (s.bucketSignatureCache[t.Bucket] = {
                    signatureContext: l,
                    expireTime:
                      new Date().getTime() +
                      15 +
                      60 * Math.ceil(5 * Math.random()) * 1e3,
                  }),
                i && ((i.s = 0), i.n()),
                (t.signatureContext = l);
              var u = s.makeParam(e, t);
              if ("err" in u) return r(u.err, null);
              (u.signatureContext = l), s.sendRequest(e, u, r);
            });
          }),
          (wr.prototype.exec = function (e, t, r) {
            var o = this;
            o.isSignatureNegotiation && e !== sr
              ? "ListBuckets" === e
                ? o.doNegotiation(e, t, r, !1, !1, !1)
                : ir.indexOf(e) > -1
                ? o.doNegotiation(
                    e,
                    t,
                    function (n, a) {
                      if (
                        !n &&
                        400 === a.CommonMsg.Status &&
                        "Unsupported Authorization Type" ===
                          a.CommonMsg.Message &&
                        t.signatureContext &&
                        "v2" === t.signatureContext.signature
                      ) {
                        t.signatureContext = lr;
                        var i = o.makeParam(e, t);
                        return "err" in i
                          ? r(i.err, null)
                          : ((i.signatureContext = t.signatureContext),
                            void o.sendRequest(e, i, r));
                      }
                      r(n, a);
                    },
                    !1,
                    !0,
                    !1
                  )
                : o.doNegotiation(e, t, r, !0, !0, !0)
              : o.doExec(e, t, r);
          }),
          (wr.prototype.sliceBlob = function (e, t, r, o) {
            return (
              (o = o || e.type),
              e.mozSlice
                ? e.mozSlice(t, r, o)
                : e.webkitSlice
                ? e.webkitSlice(t, r, o)
                : e.slice(t, r, o)
            );
          }),
          (wr.prototype.toXml = function (e, t, r, o, n) {
            var a = "";
            if (null !== r) return a + this.buildXml(e, t, r, o, n);
            for (var i in t)
              if (i in e) {
                var s = t[i].sentAs || i;
                a += this.buildXml(e, t[i], i, s, n);
              }
            return a;
          }),
          (wr.prototype.buildXml = function (e, t, r, o, n) {
            var a = "",
              i = t.type;
            if ("array" === i)
              for (var s = 0; s < e[r].length; s++)
                if ("object" === t.items.type) {
                  if (!e[r][s]) return a;
                  var c = this.toXml(
                    e[r][s],
                    t.items.parameters,
                    null,
                    null,
                    n
                  );
                  "" !== c && (a += "<" + o + ">" + c + "</" + o + ">");
                } else
                  "adapter" === t.items.type
                    ? (a +=
                        "<" +
                        o +
                        ">" +
                        String(this[r + "Adapter"](e[r][s], n))
                          .replace(/&/g, "&amp;")
                          .replace(/'/g, "&apos;")
                          .replace(/"/g, "&quot;") +
                        "</" +
                        o +
                        ">")
                    : "array" !== t.items.type &&
                      (a +=
                        "<" +
                        o +
                        ">" +
                        String(e[r][s])
                          .replace(/&/g, "&amp;")
                          .replace(/'/g, "&apos;")
                          .replace(/"/g, "&quot;") +
                        "</" +
                        o +
                        ">");
            else if ("object" === i) {
              if (!e[r]) return a;
              var l = this.toXml(e[r], t.parameters, null, null, n);
              "" !== l &&
                ((a += "<" + o),
                "data" in t &&
                  ("xsiNamespace" in t.data &&
                    (a += ' xmlns:xsi="' + t.data.xsiNamespace + '"'),
                  "xsiType" in t.data &&
                    (a += ' xsi:type="' + e[r][t.data.xsiType] + '"')),
                (a += ">"),
                (a += l + "</" + o + ">"));
            } else
              "adapter" === i
                ? (a +=
                    "<" +
                    o +
                    ">" +
                    String(this[r + "Adapter"](e[r], n))
                      .replace(/&/g, "&amp;")
                      .replace(/'/g, "&apos;")
                      .replace(/"/g, "&quot;") +
                    "</" +
                    o +
                    ">")
                : "ignore" !== i &&
                  (a +=
                    "<" +
                    o +
                    ">" +
                    String(e[r])
                      .replace(/&/g, "&amp;")
                      .replace(/'/g, "&apos;")
                      .replace(/"/g, "&quot;") +
                    "</" +
                    o +
                    ">");
            if (a && t.wrapper) {
              var u = t.wrapper;
              a = "<" + u + ">" + a + "</" + u + ">";
            }
            return a;
          }),
          (wr.prototype.jsonToObject = function (e, t, r, o) {
            var n = {};
            if (null !== r) this.buildObject(e, t, r, n, o);
            else
              for (var a in e)
                ({}.hasOwnProperty.call(e, a) &&
                  this.buildObject(e, t, a, n, o));
            return n;
          }),
          (wr.prototype.buildObject = function (e, t, r, o, n) {
            var a = function (t) {
              return t && e[r].decode && n
                ? decodeURIComponent(t.replace(/\+/g, "%20"))
                : t;
            };
            if (mr(t)) {
              var i = !0,
                s = e[r].wrapper;
              if ((s && s in t && (i = mr((t = t[s]))), i)) {
                var c = e[r].sentAs || r;
                if (c in t)
                  if ("object" === e[r].type)
                    o[r] = this.jsonToObject(e[r].parameters, t[c], null, n);
                  else if ("array" === e[r].type) {
                    var l = [];
                    if (
                      (function (e) {
                        return (
                          "[object Array]" === Object.prototype.toString.call(e)
                        );
                      })(t[c])
                    )
                      for (var u = 0; u < t[c].length; u++)
                        l[u] =
                          "object" === e[r].items.type
                            ? this.jsonToObject(
                                e[r].items.parameters,
                                t[c][u],
                                null,
                                n
                              )
                            : a(t[c][u]["#text"]);
                    else
                      l[0] =
                        "object" === e[r].items.type
                          ? this.jsonToObject(
                              e[r].items.parameters,
                              t[c],
                              null,
                              n
                            )
                          : a(t[c]["#text"] || "");
                    o[r] = l;
                  } else o[r] = a(t[c]["#text"]);
              }
            }
            void 0 === o[r] &&
              ("object" === e[r].type
                ? (o[r] = e[r].parameters
                    ? this.jsonToObject(e[r].parameters, null, null, n)
                    : {})
                : "array" === e[r].type && (o[r] = []));
          }),
          (wr.prototype.makeParam = function (e, t) {
            var r = t.signatureContext || this.signatureContext,
              o = "obs" === r.signature ? Pt[e] : Ft[e],
              n = o.httpMethod,
              a = "/",
              i = "",
              s = "",
              c = {},
              l = {};
            for (var u in ((l.$requestParam = t),
            "urlPath" in o && ((i += "?"), (i += o.urlPath)),
            o.parameters))
              if ({}.hasOwnProperty.call(o.parameters, u)) {
                var p = o.parameters[u];
                if ("Bucket" === u && this.isCname) continue;
                var d = t[u];
                if (
                  "callback" === p.type &&
                  void 0 === d &&
                  p.parameters &&
                  (void 0 !== t.CallbackUrl || void 0 !== t.CallbackBody)
                ) {
                  d = {};
                  for (
                    var h = 0, m = Object.keys(p.parameters);
                    h < m.length;
                    h++
                  ) {
                    var f = m[h],
                      y = p.parameters[f],
                      g = t[f];
                    if (
                      y.required &&
                      (null == g ||
                        ("[object String]" ===
                          Object.prototype.toString.call(g) &&
                          "" === g))
                    )
                      return (
                        (l.err = f + " is a required element!"),
                        this.log.runLog("error", e, l.err),
                        l
                      );
                    d[f.slice(0, 1).toLowerCase() + f.slice(1)] = g;
                  }
                }
                if (
                  p.required &&
                  (null == d ||
                    ("[object String]" === Object.prototype.toString.call(d) &&
                      "" === d))
                )
                  return (
                    (l.err = u + " is a required element!"),
                    this.log.runLog("error", e, l.err),
                    l
                  );
                if (null != d) {
                  if ("srcFile" === p.type || "dstFile" === p.type) {
                    l[p.type] = d;
                    continue;
                  }
                  "plain" === p.type && (l[u] = d);
                  var A = p.sentAs || u;
                  if (
                    (p.withPrefix && (A = r.headerPrefix + A),
                    "uri" === p.location)
                  )
                    "/" !== a && (a += "/"), (a += d);
                  else if ("header" === p.location) {
                    var x = p.encodingSafe || " ;/?:@&=+$,";
                    if ("object" === p.type) {
                      if (r.headerMetaPrefix === A)
                        for (var b in d)
                          if ({}.hasOwnProperty.call(d, b)) {
                            var w = d[b];
                            c[
                              0 ===
                              (b = String(b).trim().toLowerCase()).indexOf(A)
                                ? b
                                : A + b
                            ] = ur(w, x);
                          }
                    } else if ("array" === p.type) {
                      var k = [];
                      for (var P in d)
                        ({}.hasOwnProperty.call(d, P) && (k[P] = ur(d[P], x)));
                      c[A] = k;
                    } else if ("password" === p.type) {
                      var v = window.btoa ? window.btoa : et.encode;
                      (c[A] = v(d)),
                        (c[p.pwdSentAs || A + "-MD5"] = this.rawBufMD5(d));
                    } else if ("number" === p.type && Number(d))
                      c[A] = ur(String(d), x);
                    else if ("boolean" === p.type)
                      c[A] = ur(d ? "true" : "false", x);
                    else if ("callback" === p.type)
                      c[A] = et.encode(JSON.stringify(d));
                    else if ("adapter" === p.type) {
                      var C = this[u + "Adapter"](d, r);
                      C && (c[A] = ur(String(C), x));
                    } else c[A] = ur(String(d), x, p.skipEncoding);
                  } else if ("urlPath" === p.location) {
                    var S = "" === i ? "?" : "&",
                      T = d;
                    ("number" !== p.type ||
                      ("number" === p.type && Number(T) >= 0)) &&
                      (i += S + ur(A, "/") + "=" + ur(String(T), "/"));
                  } else if ("xml" === p.location) {
                    var M = this.toXml(t, p, u, A, r);
                    M && (s += M);
                  } else "body" === p.location && (s = d);
                }
              }
            var E = "file" === l.dstFile;
            if (
              ("Content-Type" in c ||
                E ||
                (c["Content-Type"] = "binary/octet-stream"),
              "data" in o && "xmlRoot" in o.data && (s || o.data.xmlAllowEmpty))
            ) {
              var B = o.data.xmlRoot;
              (s = "<" + B + ">" + s + "</" + B + ">"),
                (c["Content-Type"] = "application/xml");
            }
            if (
              (E && (l.rawUri = a),
              (c.Host =
                this.server +
                (80 === this.port || 443 === this.port ? "" : ":" + this.port)),
              !this.pathStyle && !this.isCname)
            ) {
              var O = a.split("/");
              if (O.length >= 2 && O[1]) {
                c.Host = O[1] + "." + c.Host;
                var R = a.replace(O[1], "");
                0 === R.indexOf("//") && (R = R.slice(1)),
                  "v4" === r.signature ? (a = R) : "/" === R && (a += "/"),
                  (l.requestUri = ur(R, "/"));
              }
            }
            if (
              ((l.method = n),
              (l.uri = ur(a, "/")),
              (l.urlPath = i),
              s &&
                (o.data &&
                  o.data.md5 &&
                  ((c["Content-MD5"] = this.bufMD5(s)),
                  (c["Content-Length"] =
                    0 === s.length ? "0" : String(s.length))),
                (l.xml = s),
                this.log.runLog("debug", e, "request content:" + s)),
              (l.headers = c),
              "srcFile" in l &&
                (l.srcFile instanceof window.File ||
                  l.srcFile instanceof window.Blob))
            ) {
              var D = l.srcFile.size;
              if (
                "Content-Length" in l.headers ||
                "PartSize" in l ||
                "Offset" in l
              ) {
                var I,
                  q = l.Offset;
                (q = q && q >= 0 && q < D ? q : 0),
                  (I =
                    (I =
                      "PartSize" in l
                        ? l.PartSize
                        : "Content-Length" in l.headers
                        ? parseInt(l.headers["Content-Length"], 10)
                        : D) &&
                    I > 0 &&
                    I <= D - q
                      ? I
                      : D - q),
                  (l.PartSize = I),
                  (l.Offset = q),
                  (l.headers["Content-Length"] = String(l.PartSize));
              }
            }
            return l;
          }),
          (wr.prototype.parseCommonHeaders = function (e, t, r) {
            for (var o in $t)
              ({}.hasOwnProperty.call($t, o) &&
                (e.InterfaceResult[$t[o]] = t[o]));
            (e.InterfaceResult.RequestId = t[r.headerPrefix + "request-id"]),
              (e.InterfaceResult.Id2 = t[r.headerPrefix + "id-2"]),
              (e.CommonMsg.RequestId = e.InterfaceResult.RequestId),
              (e.CommonMsg.Id2 = e.InterfaceResult.Id2);
          }),
          (wr.prototype.contrustCommonMsg = function (e, t, r, o) {
            for (var n in ((e.InterfaceResult = {}),
            this.parseCommonHeaders(e, r, o),
            t))
              if ("header" === t[n].location) {
                var a = t[n].sentAs || n;
                if (
                  (t[n].withPrefix && (a = o.headerPrefix + a),
                  "object" === t[n].type)
                )
                  e.InterfaceResult[n] = dr(a, r);
                else {
                  var i = null;
                  a in r
                    ? (i = r[a])
                    : a.toLowerCase() in r && (i = r[a.toLowerCase()]),
                    null !== i && (e.InterfaceResult[n] = i);
                }
              }
          }),
          (wr.prototype.getRequest = function (e, t, r, o, n, a) {
            var i = this.regionDomains,
              s = {},
              c = this.log,
              l = "obs" === r.signature ? Pt[e + "Output"] : Ft[e + "Output"],
              u = (l = l || {}).parameters || {};
            s.CommonMsg = {
              Status: t.status,
              Code: "",
              Message: "",
              HostId: "",
              RequestId: "",
              InterfaceResult: null,
            };
            var p = t.headers,
              d = pr(p);
            c.runLog("info", e, "get response start, statusCode:" + t.status),
              c.runLog(
                "debug",
                e,
                "response msg :statusCode:" + t.status + ", headers:" + d
              );
            var h = function () {
              var t =
                "Status:" +
                s.CommonMsg.Status +
                ", Code:" +
                s.CommonMsg.Code +
                ", Message:" +
                s.CommonMsg.Message;
              c.runLog("debug", e, "exec interface " + e + " finish, " + t),
                a(null, s);
            };
            if (
              t.status >= 300 &&
              t.status < 400 &&
              304 !== t.status &&
              o <= 5
            ) {
              var m = p.location || p.Location;
              if (m) {
                var f = "http code is 3xx, need to redirect to " + m;
                c.runLog("warn", e, f);
                var y = new Error("redirect");
                return (
                  (y.location = m),
                  (y.bucketLocation =
                    p["x-amz-bucket-region"] || p["x-obs-bucket-region"]),
                  a(y)
                );
              }
              var g = p["x-amz-bucket-region"] || p["x-obs-bucket-location"];
              if (g && i[g]) {
                var A = (this.isSecure ? "https://" : "http://") + i[g];
                hr(this.setRequestHeaderHook) &&
                  this.setRequestHeaderHook(p, n, e, i[g]);
                var x = "get redirect code 3xx, need to redirect to" + A;
                c.runLog("error", e, x);
                var b = new Error("redirect");
                return (b.location = A), a(b);
              }
              c.runLog(
                "error",
                e,
                "get redirect code 3xx, but no location in headers"
              );
            }
            if (t.status < 300) {
              var w = t.data;
              this.contrustCommonMsg(s, u, p, r);
              var k = "Status: " + s.CommonMsg.Status + ", headers: " + d;
              if (
                (w &&
                  ((k += "body length: " + w.length),
                  c.runLog("debug", e, "response body length:" + w.length)),
                c.runLog("debug", e, k),
                w && "data" in l)
              ) {
                if (n.CallbackUrl && l.CallbackResponse)
                  return (
                    (s.InterfaceResult[l.CallbackResponse.sentAs] = w), void h()
                  );
                if ("xml" === l.data.type) {
                  var P = this;
                  return fr(w, function (t, r) {
                    if (t)
                      return (
                        c.runLog(
                          "error",
                          e,
                          "change xml to json err [" + pr(t) + "]"
                        ),
                        a(t, null)
                      );
                    var o = r;
                    l.data.xmlRoot &&
                      l.data.xmlRoot in o &&
                      (o = r[l.data.xmlRoot]);
                    var n = !!o.EncodingType;
                    if (mr(o))
                      for (var i in u)
                        "xml" === u[i].location &&
                          (s.InterfaceResult[i] = P.jsonToObject(u, o, i, n)[
                            i
                          ]);
                    h();
                  });
                }
                if ("body" === l.data.type)
                  for (var v in u)
                    if ("body" === u[v].location) {
                      s.InterfaceResult[v] = w;
                      break;
                    }
              }
              return h();
            }
            var C = t.data,
              S = "Status: " + s.CommonMsg.Status + ", headers: " + d;
            return (
              "" !== C &&
                ((S += "body: " + C),
                c.runLog("debug", e, "response body :" + C)),
              (s.CommonMsg.RequestId = p[r.headerPrefix + "request-id"]),
              (s.CommonMsg.Id2 = p[r.headerPrefix + "id2"]),
              (s.CommonMsg.Indicator = p["x-reserved-indicator"]),
              c.runLog(
                "info",
                e,
                "request finished with request id:" + s.CommonMsg.RequestId
              ),
              c.runLog("debug", e, S),
              C
                ? fr(C, function (t, r) {
                    if (t)
                      c.runLog(
                        "error",
                        e,
                        "change xml to json err [" + pr(t) + "]"
                      ),
                        (s.CommonMsg.Message = t.message);
                    else if (r) {
                      if ("Error" in r) {
                        var o = r.Error;
                        for (var n in o)
                          o[n] &&
                            o[n]["#text"] &&
                            (s.CommonMsg[n] = o[n]["#text"]);
                      } else {
                        var a = r;
                        "code" in a && (s.CommonMsg.Code = a.code),
                          "message" in a && (s.CommonMsg.Message = a.message),
                          "hostId" in a && (s.CommonMsg.HostId = a.hostId),
                          "request_id" in a &&
                            a.request_id &&
                            (s.CommonMsg.RequestId = a.request_id);
                      }
                      c.runLog(
                        "error",
                        e,
                        "request error with error code:" +
                          s.CommonMsg.Code +
                          ", error message:" +
                          s.CommonMsg.Message +
                          ", request id:" +
                          s.CommonMsg.RequestId
                      );
                    }
                    h();
                  })
                : h()
            );
          }),
          (wr.prototype.makeRequest = function (e, t, r, n) {
            var a = this.log,
              i = t.xml || null,
              s = t.signatureContext || this.signatureContext;
            if ((delete t.headers.Authorization, "file" === t.dstFile)) {
              var c = {};
              if (t.urlPath)
                for (
                  var l = t.urlPath.slice(1).split("&"), u = 0;
                  u < l.length;
                  u++
                )
                  if (-1 === l[u].indexOf("=")) c[l[u]] = "";
                  else {
                    var p = l[u].split("=");
                    c[p[0]] = p[1];
                  }
              var d = t.rawUri.split("/")[1],
                h = t.rawUri.slice(("/" + d + "/").length),
                m = {
                  CommonMsg: { Status: 0, Code: "", Message: "", HostId: "" },
                  InterfaceResult: {},
                },
                f = (
                  "obs" === s.signature ? Pt[e + "Output"] : Ft[e + "Output"]
                ).parameters;
              for (var y in f)
                if ("body" === f[y].location) {
                  m.InterfaceResult[y] = this.createSignedUrlSync({
                    Method: t.method,
                    Bucket: d,
                    Key: h,
                    Expires: 3600,
                    Headers: t.headers,
                    QueryParams: c,
                    signatureContext: s,
                  });
                  break;
                }
              return n(null, m);
            }
            var g,
              A = t.$requestParam.RequestDate,
              x = Object.prototype.toString.call(A);
            if ("[object Date]" === x) g = A;
            else if ("[object String]" === x)
              try {
                (g = new Date()).setTime(Date.parse(A));
              } catch (e) {}
            g || (g = new Date());
            var b = g.toUTCString(),
              w = "v4" === s.signature.toLowerCase();
            t.headers[s.headerPrefix + "date"] = w ? gr(b)[1] : b;
            var k = (t.requestUri ? t.requestUri : t.uri) + t.urlPath;
            this.ak &&
              this.sk &&
              e !== sr &&
              (this.securityToken &&
                (t.headers[s.headerPrefix + "security-token"] =
                  this.securityToken),
              w ? this.v4Auth(t, e, s) : this.doAuth(t, e, s));
            var P = t.headers;
            hr(this.setRequestHeaderHook) &&
              this.setRequestHeaderHook(P, t.$requestParam, e);
            var v = P.Host,
              C = t.method,
              S = {};
            for (var T in P) ({}.hasOwnProperty.call(P, T) && (S[T] = P[T]));
            S.Authorization = "****";
            var M = "method:" + C + ", path:" + k + "headers:" + pr(S);
            i && (M += "body:" + i),
              a.runLog(
                "info",
                e,
                "prepare request parameters ok,then Send request to service start"
              ),
              a.runLog("debug", e, "request msg:" + M);
            var E = t.protocol
                ? 0 === t.protocol.toLowerCase().indexOf("https")
                : this.isSecure,
              B = t.port || this.port;
            delete P.Host, delete P["Content-Length"];
            var O = "text";
            !t.dstFile ||
              "file" === t.dstFile ||
              ("arraybuffer" !== t.dstFile && "blob" !== t.dstFile) ||
              (O = String(t.dstFile));
            var R = g.getTime(),
              D = this,
              I = function (t) {
                try {
                  var r = pr(t);
                  a.runLog(
                    "error",
                    e,
                    "Send request to service error [" + r + "]"
                  );
                } catch (r) {
                  t.toString &&
                    a.runLog(
                      "error",
                      e,
                      "Send request to service error [" + t.toString() + "]"
                    );
                }
                a.runLog(
                  "info",
                  e,
                  "http cost " + (new Date().getTime() - R) + " ms"
                ),
                  n(t, null);
              };
            if (this.useRawXhr) {
              var q = null;
              try {
                q = new XMLHttpRequest();
              } catch (e) {
                try {
                  q = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                  try {
                    q = new ActiveXObject("Microsoft.XMLHTTP");
                  } catch (e) {}
                }
              }
              if (null === q) return n(new Error("XHR is not available"), null);
              if (t.srcFile) {
                if (
                  !(
                    t.srcFile instanceof window.File ||
                    t.srcFile instanceof window.Blob
                  )
                )
                  return n(
                    new Error(
                      "source file must be an instance of window.File or window.Blob"
                    ),
                    null
                  );
                try {
                  var L = t.srcFile;
                  if (t.Offset >= 0 && t.PartSize > 0)
                    L = this.sliceBlob(L, t.Offset, t.Offset + t.PartSize);
                  else if ("ContentLength" in t) {
                    var j = parseInt(t.ContentLength, 10);
                    j > 0 && (L = this.sliceBlob(L, 0, j));
                  }
                  i = L;
                } catch (e) {
                  return n(e);
                }
              }
              for (var U in (q.open(
                C,
                (E
                  ? "https://" + this.urlPrefix + v
                  : "http://" + this.urlPrefix + v) + k
              ),
              (q.withCredentials = !1),
              P))
                ({}.hasOwnProperty.call(P, U) && q.setRequestHeader(U, P[U]));
              (q.timeout = 1e3 * D.timeout),
                (q.responseType = O),
                (t.$requestParam.cancelHook = function () {
                  q.abort();
                }),
                (q.onreadystatechange = function () {
                  if (4 === q.readyState && q.status >= 200) {
                    a.runLog(
                      "info",
                      e,
                      "http cost " + (new Date().getTime() - R) + " ms"
                    );
                    for (
                      var o = q
                          .getAllResponseHeaders()
                          .trim()
                          .split(/[\r\n]+/),
                        i = {},
                        c = 0;
                      c < o.length;
                      c++
                    ) {
                      var l = o[c].split(": "),
                        u = l.shift(),
                        p = l.join(": ");
                      i[u.toLowerCase()] = p;
                    }
                    var d = q.response;
                    d || ("" !== O && "text" !== O) || (d = q.responseText);
                    var h = { status: q.status, headers: i, data: d };
                    D.getRequest(e, h, s, r, t.$requestParam, n);
                  }
                });
              var K = !1,
                _ = function (e) {
                  K || ((K = !0), I(e));
                };
              (q.ontimeout = function () {
                _(new Error("timeout of " + q.timeout + "ms exceed"));
              }),
                (q.onerror = function () {
                  _(new Error("Network Error"));
                }),
                (q.onabort = function () {
                  _(new Error("Cancel"));
                }),
                q.upload &&
                  ((q.upload.ontimeout = function () {
                    _(new Error("timeout of " + q.timeout + "ms exceed"));
                  }),
                  (q.upload.onerror = function () {
                    _(new Error("Network Error"));
                  }),
                  (q.upload.onabort = function (e) {
                    _(new Error("Cancel"));
                  })),
                hr(t.ProgressCallback) &&
                  ("GET" !== C && q.upload
                    ? ("PUT" !== C && "POST" !== C) ||
                      (q.upload.onprogress = function (e) {
                        e.lengthComputable &&
                          t.ProgressCallback(
                            e.loaded,
                            e.total,
                            (new Date().getTime() - R) / 1e3
                          );
                      })
                    : (q.onprogress = function (e) {
                        e.lengthComputable &&
                          t.ProgressCallback(
                            e.loaded,
                            e.total,
                            (new Date().getTime() - R) / 1e3
                          );
                      })),
                q.send(i);
            } else {
              var N = null,
                G = null;
              if (hr(t.ProgressCallback)) {
                var F = function (e) {
                  e.lengthComputable &&
                    t.ProgressCallback(
                      e.loaded,
                      e.total,
                      (new Date().getTime() - R) / 1e3
                    );
                };
                "GET" === C
                  ? (G = F)
                  : ("PUT" !== C && "POST" !== C) || (N = F);
              }
              var H = ":" + B;
              v.indexOf(":") >= 0 && (H = "");
              var z = "",
                W = E ? "https://" : "http://";
              if (
                this.urlPrefix &&
                hr(this.setRequestHeaderHook) &&
                "InitiateMultipartUpload" !== e &&
                "UploadPart" !== e &&
                "CompleteMultipartUpload" !== e
              ) {
                var V = !0;
                (t.$requestParam.hasRegion || t.$requestParam.redirectRegion) &&
                  (V = !1);
                var Q = "";
                5443 === B && (Q = "-5443"),
                  V
                    ? t.$requestParam.Bucket
                      ? (-1 !== t.$requestParam.Bucket.indexOf(".") &&
                          (z = W + this.urlPrefix + "/bucket" + Q),
                        (z = W + this.urlPrefix + "/bucket" + Q))
                      : (z =
                          "/" === k.split("?")[0]
                            ? W + this.urlPrefix + Q
                            : W + this.urlPrefix + "/place" + Q)
                    : (z = t.$requestParam.Bucket
                        ? W + this.urlPrefix + "/region-bucket" + Q
                        : W + this.urlPrefix + "/region" + Q);
              } else z = W + v + H;
              var Y = {
                method: C,
                url: z + k,
                withCredentials: !1,
                headers: P,
                validateStatus: function (e) {
                  return e >= 200;
                },
                maxRedirects: 0,
                responseType: O,
                data: i,
                timeout: 1e3 * this.timeout,
                onUploadProgress: N,
                onDownloadProgress: G,
                cancelToken: new (o().CancelToken)(function (e) {
                  t.$requestParam.cancelHook = e;
                }),
              };
              if (t.srcFile) {
                if (
                  !(
                    t.srcFile instanceof window.File ||
                    t.srcFile instanceof window.Blob
                  )
                )
                  return n(
                    new Error(
                      "source file must be an instance of window.File or window.Blob"
                    ),
                    null
                  );
                var X = t.srcFile;
                try {
                  if (t.Offset >= 0 && t.PartSize > 0)
                    X = this.sliceBlob(X, t.Offset, t.Offset + t.PartSize);
                  else if ("ContentLength" in t) {
                    var $ = parseInt(t.ContentLength, 10);
                    $ > 0 && (X = this.sliceBlob(X, 0, $));
                  }
                } catch (e) {
                  return n(e);
                }
                Y.data = X;
              }
              o()
                .request(Y)
                .then(function (o) {
                  a.runLog(
                    "info",
                    e,
                    "http cost " + (new Date().getTime() - R) + " ms"
                  ),
                    D.getRequest(e, o, s, r, t.$requestParam, n);
                })
                .catch(function (e) {
                  I(e);
                });
            }
          }),
          (wr.prototype.sendRequest = function (e, r, o, n) {
            void 0 === n && (n = 1);
            var a = this;
            a.makeRequest(e, r, n, function (i, s) {
              if (i && "redirect" === i.message) {
                var c = (function (e) {
                  var r = t().parse(e);
                  return {
                    hostname: r.hostname,
                    port: r.port,
                    host: r.hostname,
                    protocol: r.protocol ? r.protocol + ":" : "",
                    query: r.query,
                    path: r.path + (r.query ? "?" + r.query : ""),
                    pathname: r.path,
                    search: r.query ? "?" + r.query : "",
                  };
                })(i.location);
                i.bucketLocation &&
                  -1 !== c.hostname.indexOf(r.$requestParam.Bucket) &&
                  (r.$requestParam.redirectRegion = i.bucketLocation),
                  (r.headers.Host = c.hostname),
                  (r.protocol = c.protocol),
                  (r.port =
                    c.port ||
                    (r.protocol &&
                    0 === r.protocol.toLowerCase().indexOf("https")
                      ? 443
                      : 80)),
                  a.sendRequest(e, r, o, n + 1);
              } else o(i, s);
            });
          }),
          (wr.prototype.doAuth = function (e, t, r) {
            for (
              var o = ["Content-MD5", "Content-Type"],
                n = e.method + "\n",
                a = 0;
              a < o.length;
              a++
            )
              o[a] in e.headers && (n += e.headers[o[a]]), (n += "\n");
            r.headerPrefix + "date" in e.headers || (n += e.headers.Date),
              (n += "\n");
            var i = [];
            for (var s in e.headers)
              if ({}.hasOwnProperty.call(e.headers, s)) {
                var c = s.toLowerCase();
                0 === c.indexOf(r.headerPrefix) &&
                  i.push({ key: c, value: e.headers[s] });
              }
            i = i.sort(function (e, t) {
              return e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
            });
            for (var l = 0; l < i.length; l++) {
              var u = i[l].key,
                p =
                  0 === u.indexOf(r.headerMetaPrefix)
                    ? i[l].value.trim()
                    : i[l].value;
              n += u + ":" + p + "\n";
            }
            var d = e.uri;
            if (
              (this.isCname &&
                ("/" === d
                  ? (d += e.headers.Host + "/")
                  : 0 === d.indexOf("/") && (d = "/" + e.headers.Host + d)),
              e.urlPath)
            ) {
              for (
                var h = e.urlPath.slice(1).split("&").sort(), m = "", f = 0;
                f < h.length;
                f++
              ) {
                var y = h[f].split("="),
                  g = decodeURIComponent(y[0]);
                Yt.indexOf(g.toLowerCase()) >= 0 &&
                  ((m += "" === m ? "?" : "&"),
                  (m += g),
                  2 === y.length &&
                    y[1] &&
                    (m += "=" + decodeURIComponent(y[1])));
              }
              d += m;
            }
            (n += d),
              this.log.runLog("debug", t, "stringToSign:" + n),
              (e.headers.Authorization =
                r.authPrefix +
                " " +
                this.ak +
                ":" +
                Wt("sha1", this.sk).update(n).digest("base64"));
          }),
          (wr.prototype.v4Auth = function (e, t, r) {
            e.headers[r.headerPrefix + "content-sha256"] = Qt;
            var o = e.headers,
              n = this.log,
              a = null,
              i = null;
            if (r.headerPrefix + "date" in o)
              a = (i = o[r.headerPrefix + "date"]).slice(0, i.indexOf("T"));
            else {
              var s = gr(o.Date);
              (a = s[0]), (i = s[1]);
            }
            var c = this.ak + "/" + a + "/" + this.region + "/s3/aws4_request",
              l = Ar(o),
              u = l[0],
              p = l[1],
              d = "";
            if (e.urlPath) {
              var h = e.urlPath.slice(1).split("&");
              h = h.sort();
              for (var m = 0; m < h.length; m++)
                (d += h[m]),
                  -1 === h[m].indexOf("=") && (d += "="),
                  m !== h.length - 1 && (d += "&");
            }
            var f = e.method + "\n";
            (f += e.uri + "\n"),
              (f += d + "\n"),
              (f += p + "\n"),
              (f += u + "\n"),
              (f += Qt),
              n.runLog("debug", t, "canonicalRequest:" + f);
            var y = br(a, i, this.sk, this.region, f);
            e.headers.Authorization =
              "AWS4-HMAC-SHA256 Credential=" +
              c +
              ",SignedHeaders=" +
              u +
              ",Signature=" +
              y;
          }),
          (wr.prototype.bufMD5 = function (e) {
            return Vt("md5").update(e).digest("base64");
          }),
          (wr.prototype.rawBufMD5 = function (e) {
            return Vt("md5").update(e).digest("rawbase64");
          }),
          (wr.prototype.createSignedUrlSync = function (e) {
            return "v4" ===
              (
                e.signatureContext || this.signatureContext
              ).signature.toLowerCase()
              ? this.createV4SignedUrlSync(e)
              : this.createV2SignedUrlSync(e);
          }),
          (wr.prototype.createV2SignedUrlSync = function (e) {
            var t = (e = e || {}).signatureContext || this.signatureContext,
              r = e.Method ? String(e.Method) : "GET",
              o = e.Bucket ? String(e.Bucket) : null,
              n = e.Key ? String(e.Key) : null,
              a = e.SpecialParam ? String(e.SpecialParam) : null;
            "obs" === t.signature.toLowerCase() && "storagePolicy" === a
              ? (a = "storageClass")
              : "v2" === t.signature.toLowerCase() &&
                "storageClass" === a &&
                (a = "storagePolicy");
            var i = e.Policy ? String(e.Policy) : null,
              s = e.Prefix ? String(e.Prefix) : null,
              c = e.Expires ? parseInt(e.Expires, 10) : 300,
              l = {};
            if (
              e.Headers &&
              e.Headers instanceof Object &&
              !(e.Headers instanceof Array)
            )
              for (var u in e.Headers)
                ({}.hasOwnProperty.call(e.Headers, u) && (l[u] = e.Headers[u]));
            var p = {};
            if (
              e.QueryParams &&
              e.QueryParams instanceof Object &&
              !(e.QueryParams instanceof Array)
            )
              for (var d in e.QueryParams)
                ({}.hasOwnProperty.call(e.QueryParams, d) &&
                  (p[d] = e.QueryParams[d]));
            this.securityToken &&
              !p[t.headerPrefix + "security-token"] &&
              (p[t.headerPrefix + "security-token"] = this.securityToken);
            var h = "",
              m = "",
              f = this.server;
            this.isCname
              ? (m += "/" + f + "/")
              : o &&
                ((m += "/" + o),
                this.pathStyle
                  ? (h += "/" + o)
                  : ((f = o + "." + f), (m += "/"))),
              n &&
                ((h += "/" + (n = ur(n, "/"))),
                m.lastIndexOf("/") !== m.length - 1 && (m += "/"),
                (m += n)),
              "" === m && (m = "/"),
              (h += "?"),
              a && (p[a] = ""),
              "v2" === t.signature.toLowerCase()
                ? (p.AWSAccessKeyId = this.ak)
                : (p.AccessKeyId = this.ak),
              c < 0 && (c = 300),
              (c = parseInt(new Date().getTime() / 1e3, 10) + c),
              i && s
                ? ((p.Policy = i), (p.prefix = s))
                : (p.Expires = String(c));
            var y = {};
            for (var g in l)
              if ({}.hasOwnProperty.call(l, g)) {
                var A = String(g).toLowerCase();
                ("content-type" === A ||
                  "content-md5" === A ||
                  (A.length > t.headerPrefix.length &&
                    A.slice(0, t.headerPrefix.length) === t.headerPrefix)) &&
                  (y[A] = l[g]);
              }
            var x = [];
            for (var b in p) ({}.hasOwnProperty.call(p, b) && x.push(b));
            x.sort();
            for (
              var w = i && s, k = !1, P = [], v = i && s ? "" : "/", C = 0;
              C < x.length;
              C++
            ) {
              var S = x[C],
                T = p[S];
              if (
                ((h += S = ur(S, v)),
                (T = ur(T, v)) && (h += "=" + T),
                (!w || "policy" !== S.toLowerCase()) &&
                  (Yt.indexOf(S.toLowerCase()) >= 0 ||
                    0 === S.toLowerCase().indexOf(t.headerPrefix)))
              ) {
                k = !0;
                var M = T ? S + "=" + decodeURIComponent(T) : S;
                P.push(M);
              }
              h += "&";
            }
            (P = P.join("&")), k && (P = "?" + P), (m += P);
            var E = [r];
            if (
              (E.push("\n"),
              "content-md5" in y && E.push(y["content-md5"]),
              E.push("\n"),
              "content-type" in y && E.push(y["content-type"]),
              E.push("\n"),
              w ? E.push(i) : E.push(String(c)),
              E.push("\n"),
              w)
            )
              E.push(P);
            else {
              var B = [],
                O = 0;
              for (var R in y)
                R.length > t.headerPrefix.length &&
                  R.slice(0, t.headerPrefix.length) === t.headerPrefix &&
                  (B[O++] = R);
              B = B.sort();
              for (var D = 0; D < B.length; D++)
                E.push(B[D]), E.push(":"), E.push(y[B[D]]), E.push("\n");
              E.push(m);
            }
            var I = Wt("sha1", this.sk);
            return (
              I.update(E.join("")),
              (h += w
                ? "Signature=" + ur(I.digest("base64"))
                : "Signature=" + ur(I.digest("base64"), "/")),
              {
                ActualSignedRequestHeaders: l,
                SignedUrl:
                  (this.isSecure ? "https" : "http") +
                  "://" +
                  f +
                  ":" +
                  this.port +
                  h,
              }
            );
          }),
          (wr.prototype.createV4SignedUrlSync = function (e) {
            var t = (e = e || {}).signatureContext || this.signatureContext,
              r = e.Method ? String(e.Method) : "GET",
              o = e.Bucket ? String(e.Bucket) : null,
              n = e.Key ? String(e.Key) : null,
              a = e.SpecialParam ? String(e.SpecialParam) : null;
            "storageClass" === a && (a = "storagePolicy");
            var i = e.Expires ? parseInt(e.Expires, 10) : 300,
              s = {};
            if (
              e.Headers &&
              e.Headers instanceof Object &&
              !(e.Headers instanceof Array)
            )
              for (var c in e.Headers)
                ({}.hasOwnProperty.call(e.Headers, c) && (s[c] = e.Headers[c]));
            var l = {};
            if (
              e.QueryParams &&
              e.QueryParams instanceof Object &&
              !(e.QueryParams instanceof Array)
            )
              for (var u in e.QueryParams)
                ({}.hasOwnProperty.call(e.QueryParams, u) &&
                  (l[u] = e.QueryParams[u]));
            this.securityToken &&
              !l[t.headerPrefix + "security-token"] &&
              (l[t.headerPrefix + "security-token"] = this.securityToken);
            var p = "",
              d = "",
              h = this.server;
            o &&
              (this.pathStyle
                ? ((p += "/" + o), (d += "/" + o))
                : (h = o + "." + h)),
              n && ((p += "/" + (n = ur(n, "/"))), (d += "/" + n)),
              "" === d && (d = "/"),
              (p += "?"),
              a && (l[a] = ""),
              i < 0 && (i = 300);
            var m = gr(s.date || s.Date || new Date().toUTCString()),
              f = m[0],
              y = m[1];
            (s.Host =
              h +
              (80 === this.port || 443 === this.port ? "" : ":" + this.port)),
              (l["X-Amz-Algorithm"] = "AWS4-HMAC-SHA256"),
              (l["X-Amz-Credential"] =
                this.ak + "/" + f + "/" + this.region + "/s3/aws4_request"),
              (l["X-Amz-Date"] = y),
              (l["X-Amz-Expires"] = String(i));
            var g = Ar(s);
            l["X-Amz-SignedHeaders"] = g[0];
            var A = {},
              x = [];
            for (var b in l)
              if ({}.hasOwnProperty.call(l, b)) {
                var w = l[b];
                (b = ur(b, "/")),
                  (w = ur(w)),
                  (A[b] = w),
                  x.push(b),
                  (p += b),
                  w && (p += "=" + w),
                  (p += "&");
              }
            var k = "";
            x.sort();
            for (var P = 0; P < x.length; )
              (k += x[P] + "=" + A[x[P]]), ++P !== x.length && (k += "&");
            var v = r + "\n";
            return (
              (v += d + "\n"),
              (v += k + "\n"),
              (v += g[1] + "\n"),
              (v += g[0] + "\n"),
              (v += "UNSIGNED-PAYLOAD"),
              (p += "X-Amz-Signature=" + ur(br(f, y, this.sk, this.region, v))),
              {
                ActualSignedRequestHeaders: s,
                SignedUrl:
                  (this.isSecure ? "https" : "http") +
                  "://" +
                  h +
                  ":" +
                  this.port +
                  p,
              }
            );
          }),
          (wr.prototype.createPostSignatureSync = function (e) {
            var t = e.signatureContext || this.signatureContext;
            if ("v4" === t.signature) return this.createV4PostSignatureSync(e);
            var r = (e = e || {}).Bucket ? String(e.Bucket) : null,
              o = e.Key ? String(e.Key) : null,
              n = e.Expires ? parseInt(e.Expires, 10) : 300,
              a = {};
            if (
              e.FormParams &&
              e.FormParams instanceof Object &&
              !(e.FormParams instanceof Array)
            )
              for (var i in e.FormParams)
                ({}.hasOwnProperty.call(e.FormParams, i) &&
                  (a[i] = e.FormParams[i]));
            this.securityToken &&
              !a[t.headerPrefix + "security-token"] &&
              (a[t.headerPrefix + "security-token"] = this.securityToken);
            var s = new Date();
            s.setTime(parseInt(new Date().getTime(), 10) + 1e3 * n),
              (s = yr(s.toUTCString())),
              r && (a.bucket = r),
              o && (a.key = o);
            var c = [];
            c.push('{"expiration":"'), c.push(s), c.push('", "conditions":[');
            var l = !0,
              u = !0,
              p = [
                "acl",
                "bucket",
                "key",
                "success_action_redirect",
                "redirect",
                "success_action_status",
              ];
            for (var d in a)
              if (d) {
                var h = a[d];
                "bucket" === (d = String(d).toLowerCase())
                  ? (l = !1)
                  : "key" === d && (u = !1),
                  (Xt.indexOf(d) < 0 &&
                    p.indexOf(d) < 0 &&
                    0 !== d.indexOf(t.headerPrefix)) ||
                    (c.push('{"'),
                    c.push(d),
                    c.push('":"'),
                    c.push(null !== h ? String(h) : ""),
                    c.push('"},'));
              }
            l && c.push('["starts-with", "$bucket", ""],'),
              u && c.push('["starts-with", "$key", ""],'),
              c.push("]}");
            var m = c.join("");
            c = window.btoa ? window.btoa(m) : et.encode(m);
            var f = Wt("sha1", this.sk).update(c).digest("base64");
            return {
              OriginPolicy: m,
              Policy: c,
              Signature: f,
              Token: this.ak + ":" + f + ":" + c,
            };
          }),
          (wr.prototype.createV4PostSignatureSync = function (e) {
            var t = (e = e || {}).signatureContext || this.signatureContext,
              r = e.Bucket ? String(e.Bucket) : null,
              o = e.Key ? String(e.Key) : null,
              n = e.Expires ? parseInt(e.Expires, 10) : 300,
              a = {};
            if (
              e.FormParams &&
              e.FormParams instanceof Object &&
              !(e.FormParams instanceof Array)
            )
              for (var i in e.FormParams)
                ({}.hasOwnProperty.call(e.FormParams, i) &&
                  (a[i] = e.FormParams[i]));
            this.securityToken &&
              !a[t.headerPrefix + "security-token"] &&
              (a[t.headerPrefix + "security-token"] = this.securityToken);
            var s = gr(new Date().toUTCString()),
              c = s[0],
              l = s[1],
              u = this.ak + "/" + c + "/" + this.region + "/s3/aws4_request",
              p = new Date();
            p.setTime(parseInt(new Date().getTime(), 10) + 1e3 * n),
              (p = yr(p.toUTCString())),
              (a["X-Amz-Algorithm"] = "AWS4-HMAC-SHA256"),
              (a["X-Amz-Date"] = l),
              (a["X-Amz-Credential"] = u),
              r && (a.bucket = r),
              o && (a.key = o);
            var d = [];
            d.push('{"expiration":"'), d.push(p), d.push('", "conditions":[');
            var h = !0,
              m = !0,
              f = [
                "acl",
                "bucket",
                "key",
                "success_action_redirect",
                "redirect",
                "success_action_status",
              ];
            for (var y in a)
              if (y) {
                var g = a[y];
                "bucket" === (y = String(y).toLowerCase())
                  ? (h = !1)
                  : "key" === y && (m = !1),
                  (Xt.indexOf(y) < 0 &&
                    f.indexOf(y) < 0 &&
                    0 !== y.indexOf(t.headerPrefix)) ||
                    (d.push('{"'),
                    d.push(y),
                    d.push('":"'),
                    d.push(null !== g ? String(g) : ""),
                    d.push('"},'));
              }
            h && d.push('["starts-with", "$bucket", ""],'),
              m && d.push('["starts-with", "$key", ""],'),
              d.push("]}");
            var A = d.join("");
            d = window.btoa ? window.btoa(A) : et.encode(A);
            var x = xr(c, this.sk, this.region, d);
            return {
              OriginPolicy: A,
              Policy: d,
              Algorithm: a["X-Amz-Algorithm"],
              Credential: a["X-Amz-Credential"],
              Date: a["X-Amz-Date"],
              Signature: x,
            };
          });
        var kr = wr,
          Pr = Number.MAX_VALUE;
        function vr() {
          (this.consoleLog = window.console), (this._level = Pr);
        }
        (vr.prototype.setLevel = function (e) {
          e &&
            ((e =
              "info" === (e = String(e).toLowerCase())
                ? 20
                : "warn" === e
                ? 30
                : "error" === e
                ? 40
                : "debug" === e
                ? 10
                : Pr),
            (this._level = e));
        }),
          (vr.prototype.runLog = function (e, t, r) {
            if (e) {
              var o = [new Date().toLocaleString(), e.toLowerCase(), t, r].join(
                "|"
              );
              "debug" === e.toLowerCase() && this._level <= 10
                ? this.consoleLog.debug(o)
                : "info" === e.toLowerCase() && this._level <= 20
                ? this.consoleLog.info(o)
                : "warn" === e.toLowerCase() && this._level <= 30
                ? this.consoleLog.warn(o)
                : "error" === e.toLowerCase() &&
                  this._level <= 40 &&
                  this.consoleLog.error(o);
            }
          });
        var Cr = vr,
          Sr = n(1062),
          Tr = n.t(Sr, 2),
          Mr = function (e) {
            return (
              "[object String]" === Object.prototype.toString.call(e) &&
                e.lastIndexOf("/") !== e.length - 1 &&
                (e += "/"),
              e
            );
          },
          Er = {
            extend: function (e) {
              (e.prototype.dropFile = function (e, t) {
                this.deleteObject(e, t);
              }),
                (e.prototype.dropFolder = function (e, t) {
                  var r = this;
                  e = e || {};
                  var o = (function (e, t, r) {
                      e = e || function () {};
                      var o = new Date().getTime();
                      return function (r, n) {
                        return (
                          t.runLog(
                            "info",
                            "dropFolder",
                            "ObsClient cost " +
                              (new Date().getTime() - o) +
                              " ms"
                          ),
                          "[object String]" ===
                          Object.prototype.toString.call(r)
                            ? e(new Error(r), n)
                            : e(r, n)
                        );
                      };
                    })(t, r.log),
                    n = (function (e) {
                      return (
                        (e = e || function () {}),
                        function (t, r, o) {
                          return "[object Error]" ===
                            Object.prototype.toString.call(o)
                            ? e(t, r, o)
                            : "[object String]" ===
                              Object.prototype.toString.call(o)
                            ? e(t, r, new Error(o))
                            : o
                            ? o.CommonMsg.Status > 300
                              ? e(
                                  t,
                                  r,
                                  new Error(
                                    "status:" +
                                      o.CommonMsg.Status +
                                      ", code:" +
                                      o.CommonMsg.Code +
                                      ", message:" +
                                      o.CommonMsg.Message
                                  )
                                )
                              : void e(t, r, o)
                            : void 0;
                        }
                      );
                    })(e.EventCallback),
                    a = e.TaskNum || 1,
                    i = 0,
                    s = [],
                    c = function (e, t, o, c) {
                      if (c) return t.finished++, void o(t);
                      var l = function () {
                        i++,
                          r.dropFile(
                            { Bucket: t.bucket, Key: e },
                            function (r, c) {
                              i--,
                                t.finished++,
                                (function () {
                                  for (; i < a && s.length > 0; ) s.shift()();
                                })(),
                                r
                                  ? (n("dropFileFailed", e, r),
                                    (t.subDeleted = !1))
                                  : c.CommonMsg.Status >= 300
                                  ? (n("dropFileFailed", e, c),
                                    (t.subDeleted = !1))
                                  : n("dropFileSucceed", e, c),
                                o(t);
                            }
                          );
                      };
                      i < a ? l() : s.push(l);
                    },
                    l = function (e, t, r) {
                      return function (o) {
                        !o.isTruncated &&
                          o.finished === o.total &&
                          o.subDeleted &&
                          c(e, t, r, !1);
                      };
                    },
                    u = Mr(e.Prefix);
                  !(function e(t, n, u, p, d) {
                    i++,
                      r.listObjects(
                        { Bucket: n, Prefix: u, Delimiter: "/", Marker: p },
                        function (r, p) {
                          if ((i--, r)) return o(r);
                          if (p.CommonMsg.Status >= 300) return o(null, p);
                          if (
                            ((t.total += p.InterfaceResult.Contents.length),
                            (t.total +=
                              p.InterfaceResult.CommonPrefixes.length),
                            0 !== t.total)
                          ) {
                            t.isTruncated =
                              "true" === p.InterfaceResult.IsTruncated;
                            for (
                              var h = function (r) {
                                  return function () {
                                    e(
                                      {
                                        total: 0,
                                        finished: 0,
                                        isTruncated: !1,
                                        bucket: n,
                                        subDeleted: !0,
                                      },
                                      n,
                                      r,
                                      null,
                                      l(r, t, d)
                                    );
                                  };
                                },
                                m = 0;
                              m < p.InterfaceResult.CommonPrefixes.length;
                              m++
                            ) {
                              var f = Mr(
                                p.InterfaceResult.CommonPrefixes[m].Prefix
                              );
                              i < a
                                ? e(
                                    {
                                      total: 0,
                                      finished: 0,
                                      isTruncated: !1,
                                      bucket: n,
                                      subDeleted: !0,
                                    },
                                    n,
                                    f,
                                    null,
                                    l(f, t, d)
                                  )
                                : s.push(h(f));
                            }
                            for (
                              var y = 0;
                              y < p.InterfaceResult.Contents.length;
                              y++
                            ) {
                              var g = p.InterfaceResult.Contents[y].Key;
                              c(g, t, d, g.lastIndexOf("/") === g.length - 1);
                            }
                            t.isTruncated &&
                              (i < a
                                ? e(t, n, u, p.InterfaceResult.NextMarker, d)
                                : s.push(function () {
                                    e(t, n, u, p.InterfaceResult.NextMarker, d);
                                  }));
                          } else d(t);
                        }
                      );
                  })(
                    {
                      total: 0,
                      finished: 0,
                      isTruncated: !1,
                      bucket: e.Bucket,
                      subDeleted: !0,
                    },
                    e.Bucket,
                    u,
                    null,
                    function (e) {
                      if (!e.isTruncated && e.finished === e.total)
                        if (e.subDeleted)
                          r.dropFile(
                            { Bucket: e.bucket, Key: u },
                            function (e, t) {
                              return e
                                ? (n("dropFileFailed", u, e), o(e))
                                : t.CommonMsg.Status >= 300
                                ? (n("dropFileFailed", u, t), o(null, t))
                                : (n("dropFileSucceed", u, t), o(null, t));
                            }
                          );
                        else {
                          var t =
                            "drop folder " +
                            u +
                            " failed due to child file deletion failed";
                          n("dropFileFailed", u, new Error(t)), o(t);
                        }
                    }
                  );
                });
            },
          },
          Br = Er,
          Or = 5368709120,
          Rr = function (e) {
            var t = [];
            if (
              (t.push(e.bucket),
              t.push(e.key),
              t.push(e.sourceFile.name),
              t.push(String(e.partSize)),
              t.push(String(e.partCount)),
              t.push(String(e.fileStat.fileSize)),
              t.push(String(e.fileStat.lastModified)),
              e.uploadId && t.push(e.uploadId),
              e.sseC && t.push(e.sseC),
              e.sseCKey && t.push(e.sseCKey),
              e.parts)
            )
              for (var r = 0; r < e.parts.length; r++) {
                var o = e.parts[r];
                o &&
                  (t.push(String(o.partNumber)),
                  t.push(String(o.offset)),
                  t.push(String(o.partSize)),
                  t.push(String(o.isCompleted)),
                  o.etag && t.push(String(o.etag)));
              }
            return window.btoa(rt()(t.join(""), !1, !0));
          },
          Dr = function (e, t, r) {
            e &&
              e.uploadId &&
              r.abortMultipartUpload(
                {
                  Bucket: e.bucket,
                  Key: e.key,
                  RequestDate: e.requestDate,
                  UploadId: e.uploadId,
                },
                function (o, n) {
                  o
                    ? r.log.runLog(
                        "warn",
                        t,
                        "abort multipart upload failed, bucket:" +
                          e.bucket +
                          ", key:" +
                          e.key +
                          ", uploadId:" +
                          e.uploadId +
                          ", err:" +
                          o
                      )
                    : n.CommonMsg.Status >= 300
                    ? r.log.runLog(
                        "warn",
                        t,
                        "abort multipart upload failed, bucket:" +
                          e.bucket +
                          ", key:" +
                          e.key +
                          ", uploadId:" +
                          e.uploadId +
                          ", status:" +
                          n.CommonMsg.Status +
                          ", code:" +
                          n.CommonMsg.Code +
                          ", message:" +
                          n.CommonMsg.Message
                      )
                    : (delete e.uploadId,
                      r.log.runLog(
                        "warn",
                        t,
                        "abort multipart upload succeed, bucket:" +
                          e.bucket +
                          ", key:" +
                          e.key +
                          ", uploadId:" +
                          e.uploadId
                      ));
                }
              );
          },
          Ir = function (e) {
            if (!(e.finishedCount < e.uploadCheckpoint.partCount)) {
              if (e.isAbort)
                return (
                  Dr(e.uploadCheckpoint, e.funcName, e.that),
                  e.callback("uploadFile failed the upload task is aborted")
                );
              if (e.isSuspend)
                return e.callback(
                  "the process of uploadFile is suspened, you can retry with the uploadCheckpoint"
                );
              if (e.hasError)
                return e.callback(
                  "uploadFile finished with error, you can retry with the uploadCheckpoint"
                );
              for (var t = [], r = 0; r < e.uploadCheckpoint.partCount; r++) {
                var o = e.uploadCheckpoint.parts[r];
                t.push({ PartNumber: o.partNumber, ETag: o.etag });
              }
              e.that.completeMultipartUpload(
                {
                  Bucket: e.uploadCheckpoint.bucket,
                  Key: e.uploadCheckpoint.key,
                  RequestDate: e.uploadCheckpoint.requestDate,
                  UploadId: e.uploadCheckpoint.uploadId,
                  Parts: t,
                  CallbackUrl: e.callbackUrl,
                  CallbackHost: e.callbackHost,
                  CallbackBody: e.callbackBody,
                  CallbackBodyType: e.callbackBodyType,
                },
                function (t, r) {
                  var o = {
                    bucket: e.uploadCheckpoint.bucket,
                    key: e.uploadCheckpoint.key,
                    uploadId: e.uploadCheckpoint.uploadId,
                  };
                  return t
                    ? (e.eventCallback("completeMultipartUploadFailed", o, t),
                      e.callback(t))
                    : r.CommonMsg.Status >= 500
                    ? (e.eventCallback("completeMultipartUploadFailed", o, r),
                      e.callback(null, r))
                    : r.CommonMsg.Status >= 300 && r.CommonMsg.Status < 500
                    ? (e.eventCallback("completeMultipartUploadAborted", o, r),
                      Dr(e.uploadCheckpoint, e.funcName, e.that),
                      e.callback(null, r))
                    : (e.eventCallback("completeMultipartUploadSucceed", o, r),
                      void e.callback(null, r));
                }
              );
            }
          },
          qr = function (e) {
            e.resumeCallback(
              {
                cancel: function () {
                  e.isSuspend = !0;
                  for (var t = 0; t < e.uploadPartParams.length; t++) {
                    var r = e.uploadPartParams[t].cancelHook;
                    (o = r),
                      "[object Function]" ===
                        Object.prototype.toString.call(o) && r();
                  }
                  var o;
                },
              },
              e.uploadCheckpoint
            );
            var t = [],
              r = function () {
                for (; e.runningTask < e.taskNum && t.length > 0; ) t.shift()();
                0 === t.length && Ir(e);
              },
              o = window.btoa ? window.btoa : et.encode,
              n = function (n) {
                return function () {
                  if ((e.runningTask++, e.isSuspend || e.isAbort))
                    return (
                      e.runningTask--,
                      e.finishedCount++,
                      (e.finishedCount += t.length),
                      (t = []),
                      r()
                    );
                  var a,
                    i,
                    s,
                    c,
                    l = 0,
                    u = function (t) {
                      if (!l) {
                        l = 1;
                        var o,
                          a = {
                            Bucket: e.uploadCheckpoint.bucket,
                            Key: e.uploadCheckpoint.key,
                            RequestDate: e.uploadCheckpoint.requestDate,
                            PartNumber: n.partNumber,
                            UploadId: e.uploadCheckpoint.uploadId,
                            SourceFile: e.uploadCheckpoint.sourceFile,
                            Offset: n.offset,
                            PartSize: n.partSize,
                            SseC: e.uploadCheckpoint.sseC,
                            SseCKey: e.uploadCheckpoint.sseCKey,
                            ProgressCallback:
                              ((o = n.partNumber),
                              function (t, r, n) {
                                e.progressCallback(o, t);
                              }),
                            ContentMD5: t,
                          };
                        e.uploadPartParams.push(a),
                          e.that.uploadPart(a, function (t, o) {
                            if (
                              (e.runningTask--, e.finishedCount++, e.isSuspend)
                            )
                              return r();
                            var a = {
                              partNumber: n.partNumber,
                              bucket: e.uploadCheckpoint.bucket,
                              key: e.uploadCheckpoint.key,
                              uploadId: e.uploadCheckpoint.uploadId,
                            };
                            t
                              ? (e.eventCallback("uploadPartFailed", a, t),
                                (e.hasError = !0))
                              : o.CommonMsg.Status >= 500 ||
                                (400 === o.CommonMsg.Status &&
                                  "BadDigest" === o.CommonMsg.Code)
                              ? (e.eventCallback("uploadPartFailed", a, o),
                                (e.hasError = !0))
                              : o.CommonMsg.Status >= 300 &&
                                o.CommonMsg.Status < 500
                              ? ((e.isAbort = !0),
                                (e.hasError = !0),
                                e.eventCallback("uploadPartAborted", a, o))
                              : ((n.etag = o.InterfaceResult.ETag),
                                (n.isCompleted = !0),
                                (a.etag = n.etag),
                                (e.uploadCheckpoint.md5 = Rr(
                                  e.uploadCheckpoint
                                )),
                                e.eventCallback("uploadPartSucceed", a, o),
                                e.that.log.runLog(
                                  "debug",
                                  e.funcName,
                                  "Part " +
                                    String(n.partNumber) +
                                    " is finished, uploadId " +
                                    e.uploadCheckpoint.uploadId
                                )),
                              r();
                          });
                      }
                    };
                  if (
                    e.verifyMd5 &&
                    window.FileReader &&
                    (e.uploadCheckpoint.sourceFile instanceof window.File ||
                      e.uploadCheckpoint.sourceFile instanceof window.Blob)
                  ) {
                    var p =
                        ((a = e.uploadCheckpoint.sourceFile),
                        (i = n.offset),
                        (s = n.offset + n.partSize),
                        (c = c || a.type),
                        a.mozSlice
                          ? a.mozSlice(i, s, c)
                          : a.webkitSlice
                          ? a.webkitSlice(i, s, c)
                          : a.slice(i, s, c)),
                      d = new window.FileReader();
                    return (
                      (d.onload = function (e) {
                        var t = (function (e) {
                            e = new Uint8Array(e);
                            for (var t, r = 0; r < e.length; ) {
                              var o = r + 16384;
                              (o = o <= e.length ? o : e.length),
                                t
                                  ? (t += String.fromCharCode.apply(
                                      null,
                                      e.slice(r, o)
                                    ))
                                  : (t = String.fromCharCode.apply(
                                      null,
                                      e.slice(r, o)
                                    )),
                                (r = o);
                            }
                            return (e = null), t;
                          })(e.target.result),
                          r = o(rt()(t, !1, !0));
                        (t = null), u(r);
                      }),
                      (d.onerror = function (t) {
                        e.that.log.runLog(
                          "error",
                          e.funcName,
                          "Caculate md5 for part " +
                            String(n.partNumber) +
                            " failed"
                        ),
                          u();
                      }),
                      void d.readAsArrayBuffer(p)
                    );
                  }
                  u();
                };
              };
            if (!e.isSuspend) {
              for (var a = 0; a < e.uploadCheckpoint.partCount; a++) {
                var i = e.uploadCheckpoint.parts[a];
                i.isCompleted
                  ? (e.finishedCount++, (e.finishedBytes += i.partSize))
                  : t.push(n(i));
              }
              return 0 === t.length ? Ir(e) : r();
            }
            e.callback(
              "the process of uploadFile is suspened, you can retry with the uploadCheckpoint"
            );
          },
          Lr = {
            extend: function (e) {
              e.prototype.uploadFile = function (e, t) {
                var r = this;
                e = e || {};
                var o = "uploadFile",
                  n = (function (e, t, r) {
                    e = e || function () {};
                    var o = new Date().getTime();
                    return function (r, n) {
                      return (
                        t.runLog(
                          "info",
                          "uploadFile",
                          "ObsClient cost " + (new Date().getTime() - o) + " ms"
                        ),
                        "[object String]" === Object.prototype.toString.call(r)
                          ? e(new Error(r), n)
                          : e(r, n)
                      );
                    };
                  })(t, r.log),
                  a = (function (e) {
                    return (
                      (e = e || function () {}),
                      function (t, r, o) {
                        return "[object Error]" ===
                          Object.prototype.toString.call(o)
                          ? e(t, r, o)
                          : "[object String]" ===
                            Object.prototype.toString.call(o)
                          ? e(t, r, new Error(o))
                          : o
                          ? o.CommonMsg.Status > 300
                            ? e(
                                t,
                                r,
                                new Error(
                                  "status:" +
                                    o.CommonMsg.Status +
                                    ", code:" +
                                    o.CommonMsg.Code +
                                    ", message:" +
                                    o.CommonMsg.Message
                                )
                              )
                            : void e(t, r, o)
                          : void 0;
                      }
                    );
                  })(e.EventCallback),
                  i = e.TaskNum || 1,
                  s = e.ProgressCallback || function () {},
                  c = e.ResumeCallback || function () {},
                  l = e.VerifyMd5 || !1;
                r.log.runLog("info", o, "enter uploadFile...");
                var u = null;
                if (
                  (e.UploadCheckpoint &&
                  e.UploadCheckpoint.sourceFile &&
                  e.UploadCheckpoint.fileStat &&
                  e.UploadCheckpoint.uploadId &&
                  e.UploadCheckpoint.md5 === Rr(e.UploadCheckpoint)
                    ? (u = e.UploadCheckpoint)
                    : Dr(e.UploadCheckpoint, o, r),
                  u)
                ) {
                  var p = u.sourceFile;
                  if (!(p instanceof window.File || p instanceof window.Blob))
                    return n(
                      "source file is not valid, must be an instanceof [File | Blob]"
                    );
                  if (!p.mozSlice && !p.webkitSlice && !p.slice)
                    return n(
                      "your browser cannot support the slice method for [File | Blob]"
                    );
                } else {
                  var d = e.SourceFile;
                  if (!(d instanceof window.File || d instanceof window.Blob))
                    return n(
                      "source file is not valid, must be an instanceof [File | Blob]"
                    );
                  if (!d.mozSlice && !d.webkitSlice && !d.slice)
                    return n(
                      "your browser cannot support the slice method for [File | Blob]"
                    );
                  r.log.runLog(
                    "debug",
                    o,
                    "Begin to uploadFile to OBS from file:" + d.name
                  );
                  var h = d.size,
                    m = parseInt(e.PartSize, 10),
                    f = 0,
                    y = [];
                  if (0 === h)
                    (m = 0),
                      (f = 1),
                      y.push({
                        partNumber: 1,
                        offset: 0,
                        partSize: 0,
                        isCompleted: !1,
                      });
                  else {
                    if (
                      ((m = isNaN(m) || m < 102400 ? 9437184 : m > Or ? Or : m),
                      (f = Math.floor(h / m)) >= 1e4 &&
                        ((m = Math.floor(h / 1e4)),
                        h % 1e4 != 0 && (m += 1),
                        (f = Math.floor(h / m))),
                      m > Or)
                    )
                      return n("The source file " + d.name + " is too large");
                    var g = h % m;
                    0 !== g && f++;
                    for (var A = 0; A < f; A++)
                      y.push({
                        partNumber: A + 1,
                        offset: A * m,
                        partSize: m,
                        isCompleted: !1,
                      });
                    0 !== g && (y[f - 1].partSize = g);
                  }
                  r.log.runLog("debug", o, "Total parts count " + f),
                    ((u = {
                      bucket: e.Bucket,
                      key: e.Key,
                      sourceFile: d,
                      partSize: m,
                      partCount: f,
                      parts: y,
                    }).fileStat = {
                      fileSize: h,
                      lastModified: d.lastModified,
                    }),
                    e.SseC &&
                      e.SseCKey &&
                      ((u.sseC = e.SseC), (u.sseCKey = e.SseCKey)),
                    (u.md5 = Rr(u));
                }
                u.requestDate = e.RequestDate;
                var x = {
                  start: new Date().getTime(),
                  uploadCheckpoint: u,
                  funcName: o,
                  taskNum: i,
                  callback: n,
                  that: r,
                  runningTask: 0,
                  finishedCount: 0,
                  hasError: !1,
                  finishedBytes: 0,
                  isAbort: !1,
                  resumeCallback: c,
                  isSuspend: !1,
                  partsLoaded: {},
                  requestDate: e.RequestDate,
                  uploadPartParams: [],
                  verifyMd5: l,
                  callbackUrl: e.CallbackUrl,
                  callbackHost: e.CallbackHost,
                  callbackBody: e.CallbackBody,
                  callbackBodyType: e.CallbackBodyType,
                  eventCallback: function (e, t, r) {
                    x.isSuspend || a(e, t, r);
                  },
                  progressCallback: function (e, t) {
                    x.isSuspend ||
                      ((x.finishedBytes += t),
                      x.partsLoaded[e] && (x.finishedBytes -= x.partsLoaded[e]),
                      (x.partsLoaded[e] = t),
                      s(
                        x.finishedBytes,
                        x.uploadCheckpoint.fileStat.fileSize,
                        (new Date().getTime() - x.start) / 1e3
                      ));
                  },
                };
                if (!u.uploadId) {
                  var b = e.ContentType;
                  return (
                    !b &&
                      u.key &&
                      (b =
                        r.util.mimeTypes[
                          u.key.substring(u.key.lastIndexOf(".") + 1)
                        ]),
                    !b &&
                      u.sourceFile.name &&
                      (b =
                        r.util.mimeTypes[
                          u.sourceFile.name.substring(
                            u.sourceFile.name.lastIndexOf(".") + 1
                          )
                        ]),
                    void r.initiateMultipartUpload(
                      {
                        Bucket: e.Bucket,
                        Key: e.Key,
                        RequestDate: e.RequestDate,
                        ACL: e.ACL,
                        Metadata: e.Metadata,
                        WebsiteRedirectLocation: e.WebsiteRedirectLocation,
                        StorageClass: e.StorageClass,
                        ContentType: b,
                        Expires: e.Expires,
                        SseKms: e.SseKms,
                        SseKmsKey: e.SseKmsKey,
                        SseC: e.SseC,
                        SseCKey: e.SseCKey,
                      },
                      function (t, a) {
                        var i = { bucket: e.Bucket, key: e.Key };
                        if (t)
                          return (
                            x.eventCallback(
                              "initiateMultipartUploadFailed",
                              i,
                              t
                            ),
                            n(t)
                          );
                        if (a.CommonMsg.Status >= 300)
                          return (
                            x.eventCallback(
                              "initiateMultipartUploadFailed",
                              i,
                              a
                            ),
                            n(null, a)
                          );
                        var s = a.InterfaceResult.UploadId;
                        (u.uploadId = s),
                          (u.md5 = Rr(u)),
                          (x.uploadCheckpoint = u),
                          (i.uploadId = s),
                          r.log.runLog("info", o, "Claim a new upload id " + s),
                          x.eventCallback(
                            "initiateMultipartUploadSucceed",
                            i,
                            a
                          ),
                          qr(x);
                      }
                    )
                  );
                }
                qr(x);
              };
            },
          },
          jr = Lr;
        function Ur(e) {
          this.factory(e);
        }
        function Kr(e) {
          return e.slice(0, 1).toUpperCase() + e.slice(1);
        }
        var _r = [
          "createBucket",
          "listBuckets",
          "getBucketMetadata",
          "headBucket",
          "deleteBucket",
          "setBucketQuota",
          "getBucketQuota",
          "getBucketStorageInfo",
          "setBucketPolicy",
          "getBucketPolicy",
          "deleteBucketPolicy",
          "setBucketVersioningConfiguration",
          "getBucketVersioningConfiguration",
          "putBackToSource",
          "deleteBackToSource",
          "getBackToSource",
          "getBucketLocation",
          "listVersions",
          "listObjects",
          "setBucketLifecycleConfiguration",
          "getBucketLifecycleConfiguration",
          "deleteBucketLifecycleConfiguration",
          "setBucketAcl",
          "getBucketAcl",
          "setBucketLoggingConfiguration",
          "getBucketLoggingConfiguration",
          "setBucketWebsiteConfiguration",
          "getBucketWebsiteConfiguration",
          "deleteBucketWebsiteConfiguration",
          "setBucketNotification",
          "getBucketNotification",
          "setBucketTagging",
          "getBucketTagging",
          "deleteBucketTagging",
          "getBucketCors",
          "deleteBucketCors",
          "setBucketStoragePolicy",
          "getBucketStoragePolicy",
          "getObject",
          "getObjectMetadata",
          "setObjectMetadata",
          "setObjectAcl",
          "getObjectAcl",
          "deleteObject",
          "deleteObjects",
          "listMultipartUploads",
          "listParts",
          "abortMultipartUpload",
          "completeMultipartUpload",
          "getBucketInventory",
          "setBucketInventory",
          "deleteBucketInventory",
          "getBucketEncryption",
          "setBucketEncryption",
          "deleteBucketEncryption",
          "getBucketRequesterPay",
          "setBucketRequesterPay",
          "setMirrorBackToSource",
          "getMirrorBackToSource",
          "deleteMirrorBackToSource",
          "getWorkflowTrigger",
          "deleteWorkflowTrigger",
          "createWorkflowTrigger",
          "restoreFailedWorkflowExecution",
          "createTemplate",
          "createWorkflow",
          "getWorkflowList",
          "deleteWorkflow",
          "getWorkflowTemplateList",
          "getWorkflowInstanceList",
          "deleteTemplate",
          "updateWorkflow",
          "getActionTemplates",
          "getWorkflowAuthorization",
          "openWorkflowAuthorization",
          "getBucketDirectColdAccess",
          "setBucketDirectColdAccess",
          "deleteBucketDirectColdAccess",
          "getBucketCustomDomain",
          "setBucketCustomDomain",
          "deleteBucketCustomDomain",
          "setBucketCors",
          "getBucketReplication",
          "setBucketReplication",
          "deleteBucketReplication",
          "getCDNNotifyConfiguration",
          "setCdnNotifyConfiguration",
          "getQuota",
          "getBucketDisPolicy",
          "setBucketDisPolicy",
          "deleteBucketDisPolicy",
          "createOnlineDecom",
          "getOnlineDecom",
          "getWorkflowAgreements",
          "openWorkflowAgreements",
          "deleteOnlineDecom",
          "getMyActionTemplates",
          "createMyActionTemplate",
          "getMyactiontemplateDetail",
          "updateMyActionTemplate",
          "deleteMyActionTemplate",
          "forbidMyActionTemplate",
          "updatePublicActionTemplate",
          "getOmPublicActionTemplates",
          "setSFSAcl",
          "getSFSAcl",
          "deleteSFSAcl",
          "setBucketAlias",
          "bindBucketAlias",
          "unbindBucketAlias",
          "deleteBucketAlias",
          "listBucketsAlias",
          "getBucketAlias",
        ];
        function Nr(e) {
          return function (t, r) {
            this.exec(Kr(e), t, r);
          };
        }
        for (var Gr = 0; Gr < _r.length; Gr++) {
          var Fr = _r[Gr];
          Ur.prototype[Fr] = Nr(Fr);
        }
        function Hr(e) {
          return "[object Function]" === Object.prototype.toString.call(e);
        }
        function zr(e) {
          return function (t, r) {
            if (Hr(t)) e.call(this, null, t);
            else {
              if (!Hr(r)) {
                var o = this;
                return new Promise(function (r, n) {
                  e.call(o, t, function (e, t) {
                    if (e) return n(e);
                    r(t);
                  });
                });
              }
              e.call(this, t, r);
            }
          };
        }
        if (
          ((Ur.prototype.createTemplate = function (e, t) {
            (e.ApiPath = "v2/workflowtemplates"),
              this.exec("CreateTemplate", e, t);
          }),
          (Ur.prototype.createWorkflow = function (e, t) {
            (e.ApiPath = "v2/workflows"), this.exec("CreateWorkflow", e, t);
          }),
          (Ur.prototype.restoreFailedWorkflowExecution = function (e, t) {
            (e.ApiPath = "v2/workflowexecutions"),
              this.exec("RestoreFailedWorkflowExecution", e, t);
          }),
          (Ur.prototype.getWorkflowList = function (e, t) {
            (e.ApiPath = "v2/workflows"), this.exec("GetWorkflowList", e, t);
          }),
          (Ur.prototype.deleteWorkflow = function (e, t) {
            (e.ApiPath = "v2/workflows"), this.exec("DeleteWorkflow", e, t);
          }),
          (Ur.prototype.deleteTemplate = function (e, t) {
            (e.ApiPath = "v2/workflowtemplates"),
              this.exec("DeleteTemplate", e, t);
          }),
          (Ur.prototype.getWorkflowTemplateList = function (e, t) {
            (e.ApiPath = "v2/workflowtemplates"),
              this.exec("GetWorkflowTemplateList", e, t);
          }),
          (Ur.prototype.getWorkflowInstanceList = function (e, t) {
            (e.ApiPath = "v2/workflowexecutions"),
              this.exec("GetWorkflowInstanceList", e, t);
          }),
          (Ur.prototype.updateWorkflow = function (e, t) {
            (e.ApiPath = "v2/workflows"), this.exec("UpdateWorkflow", e, t);
          }),
          (Ur.prototype.getActionTemplates = function (e, t) {
            (e.ApiPath = "v2/actiontemplates"),
              this.exec("GetActionTemplates", e, t);
          }),
          (Ur.prototype.getWorkflowAuthorization = function (e, t) {
            (e.ApiPath = "v2/workflow-authorization"),
              this.exec("GetWorkflowAuthorization", e, t);
          }),
          (Ur.prototype.openWorkflowAuthorization = function (e, t) {
            (e.ApiPath = "v2/workflow-authorization"),
              this.exec("OpenWorkflowAuthorization", e, t);
          }),
          (Ur.prototype.getPublicationTemplates = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/publicactiontemplates"),
              this.exec("GetPublicationTemplates", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.getPublicationTemplateDetail = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/publicactiontemplates"),
              this.exec("GetPublicationTemplateDetail", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.getWorkflowAgreements = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/workflow-agreements"),
              this.exec("GetWorkflowAgreements", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.openWorkflowAgreements = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/workflow-agreements"),
              this.exec("OpenWorkflowAgreements", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.createMyActionTemplate = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/myactiontemplates"),
              this.exec("CreateMyActionTemplate", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.getMyActionTemplates = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/myactiontemplates"),
              this.exec("GetMyActionTemplates", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.getMyactiontemplateDetail = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/myactiontemplates"),
              this.exec("GetMyactiontemplateDetail", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.updateMyActionTemplate = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/myactiontemplates"),
              this.exec("UpdateMyActionTemplate", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.deleteMyActionTemplate = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/myactiontemplates"),
              this.exec("DeleteMyActionTemplate", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.forbidMyActionTemplate = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/myactiontemplates"),
              this.exec("ForbidMyActionTemplate", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.updatePublicActionTemplate = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/ompublicactiontemplates"),
              this.exec("UpdatePublicActionTemplate", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.getOmPublicActionTemplates = function (e, t) {
            (this.util.pathStyle = !0),
              (e.ApiPath = "v2/ompublicactiontemplates"),
              this.exec("GetOmPublicActionTemplates", e, t),
              (this.util.pathStyle = !1);
          }),
          (Ur.prototype.putObject = function (e, t) {
            if ("Body" in e && "SourceFile" in e) {
              var r =
                "the input body and sourcefile exist at same time,please specify one of eigther a string or file to be send!";
              return (
                this.log.runLog("error", "PutObject", r), t(new Error(r), null)
              );
            }
            if (
              !("ContentType" in e) &&
              ("Key" in e &&
                (e.ContentType =
                  this.util.mimeTypes[
                    e.Key.substring(e.Key.lastIndexOf(".") + 1)
                  ]),
              !e.ContentType && "SourceFile" in e)
            ) {
              var o = e.SourceFile.name;
              e.ContentType =
                this.util.mimeTypes[o.substring(o.lastIndexOf(".") + 1)];
            }
            this.exec("PutObject", e, t);
          }),
          (Ur.prototype.appendObject = function (e, t) {
            if ("Body" in e && "SourceFile" in e) {
              var r =
                "the input body and sourcefile exist at same time,please specify one of eigther a string or file to be send!";
              return (
                this.log.isLevelEnabled("error") &&
                  this.log.runLog("error", "PutObject", r),
                t(new Error(r), null)
              );
            }
            "ContentType" in e ||
              ("Key" in e &&
                (e.ContentType =
                  this.util.mimeTypes[
                    e.Key.substring(e.Key.lastIndexOf(".") + 1)
                  ]),
              !e.ContentType &&
                "SourceFile" in e &&
                (e.ContentType =
                  this.util.mimeTypes[
                    e.SourceFile.substring(e.SourceFile.lastIndexOf(".") + 1)
                  ])),
              this.exec("AppendObject", e, t);
          }),
          (Ur.prototype.copyObject = function (e, t) {
            var r = "CopySource";
            if (r in e) {
              var o = e[r],
                n = o.lastIndexOf("?versionId=");
              e[r] =
                n > 0
                  ? this.util.encodeURIWithSafe(o.slice(0, n)) + o.slice(n)
                  : this.util.encodeURIWithSafe(o);
            }
            this.exec("CopyObject", e, t);
          }),
          (Ur.prototype.copyPart = function (e, t) {
            var r = "CopySource";
            if (r in e) {
              var o = e[r],
                n = o.lastIndexOf("?versionId=");
              e[r] =
                n > 0
                  ? this.util.encodeURIWithSafe(o.slice(0, n)) + o.slice(n)
                  : this.util.encodeURIWithSafe(o);
            }
            this.exec("CopyPart", e, t);
          }),
          (Ur.prototype.restoreObject = function (e, t) {
            this.exec("RestoreObject", e, function (e, r) {
              !e &&
                r.InterfaceResult &&
                r.CommonMsg.Status < 300 &&
                (r.InterfaceResult.RestoreStatus =
                  200 === r.CommonMsg.Status ? "AVALIABLE" : "INPROGRESS"),
                t(e, r);
            });
          }),
          (Ur.prototype.initiateMultipartUpload = function (e, t) {
            "ContentType" in e ||
              ("Key" in e &&
                (e.ContentType =
                  this.util.mimeTypes[
                    e.Key.substring(e.Key.lastIndexOf(".") + 1)
                  ])),
              this.exec("InitiateMultipartUpload", e, t);
          }),
          (Ur.prototype.uploadPart = function (e, t) {
            if ("Body" in e && "SourceFile" in e) {
              var r =
                "the input body and sourcefile exist at same time, please specify one of eigther a string or file to be send!";
              return (
                this.log.runLog("error", "UploadPart", r), t(new Error(r), null)
              );
            }
            this.exec("UploadPart", e, t);
          }),
          Br.extend(Ur),
          jr.extend(Ur),
          Hr(Promise))
        )
          for (var Wr in Ur.prototype)
            if ({}.hasOwnProperty.call(Ur.prototype, Wr)) {
              var Vr = Ur.prototype[Wr];
              Ur.prototype[Wr] = zr(Vr);
            }
        for (var Qr in ((Ur.prototype.exec = function (e, t, r) {
          var o = this.log;
          o.runLog("info", e, "enter " + e + "...");
          var n = new Date().getTime();
          (t = t || {}),
            (r = r || function () {}),
            this.util.exec(e, t, function t(a, i) {
              t.$called ||
                ((t.$called = !0),
                !a || a instanceof Error || (a = new Error(a)),
                o.runLog(
                  "debug",
                  e,
                  "ObsClient cost " + (new Date().getTime() - n) + " ms"
                ),
                r(a, i));
            });
        }),
        (Ur.prototype.initLog = function (e) {
          (e = e || {}), this.log.setLevel(e.level);
          var t = ["[OBS SDK Version=" + this.util.obsSdkVersion];
          if (this.util.server) {
            var r = this.util.port ? ":" + this.util.port : "";
            t.push(
              "Endpoint=" +
                (this.util.is_secure ? "https" : "http") +
                "://" +
                this.util.server +
                r
            );
          }
          t.push(
            "Access Mode=" +
              (this.util.path_style ? "Path" : "Virtual Hosting") +
              "]"
          ),
            this.log.runLog("warn", "init", t.join("];["));
        }),
        (Ur.prototype.factory = function (e) {
          (this.log = new Cr()),
            (this.util = new kr(this.log)),
            (e = e || {}),
            this.util.initFactory(
              e.access_key_id,
              e.secret_access_key,
              e.is_secure,
              e.server,
              e.path_style,
              e.signature,
              e.region,
              e.port,
              e.timeout,
              e.security_token,
              e.is_signature_negotiation,
              e.is_cname,
              e.url_prefix,
              e.region_domains,
              e.setRequestHeaderHook,
              e.useRawXhr
            );
        }),
        (Ur.prototype.refresh = function (e, t, r) {
          this.util.refresh(e, t, r);
        }),
        (Ur.prototype.createSignedUrlSync = function (e) {
          return this.util.createSignedUrlSync(e);
        }),
        (Ur.prototype.createV2SignedUrlSync = function (e) {
          return this.util.createV2SignedUrlSync(e);
        }),
        (Ur.prototype.createV4SignedUrlSync = function (e) {
          return this.util.createV4SignedUrlSync(e);
        }),
        (Ur.prototype.createPostSignatureSync = function (e) {
          return this.util.createPostSignatureSync(e);
        }),
        (Ur.prototype.createV4PostSignatureSync = function (e) {
          return this.util.createV4PostSignatureSync(e);
        }),
        (Ur.prototype.enums = Tr),
        Ur.prototype))
          ({}.hasOwnProperty.call(Ur.prototype, Qr) &&
            (Ur.prototype[Kr(Qr)] = Ur.prototype[Qr]));
        for (var Yr in Ur.prototype)
          if ({}.hasOwnProperty.call(Ur.prototype, Yr)) {
            var Xr = Yr.indexOf("Configuration");
            Xr > 0 &&
              Xr + "Configuration".length === Yr.length &&
              (Ur.prototype[Yr.slice(0, Xr)] = Ur.prototype[Yr]);
          }
        var $r = Ur;
      })(),
      a.default
    );
  })();
});
