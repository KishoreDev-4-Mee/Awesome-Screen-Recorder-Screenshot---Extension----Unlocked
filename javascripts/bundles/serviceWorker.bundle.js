(() => {
	var t = {
			40873: t => {
				var e = {
					en_GB: "en-gb",
					en_US: "en",
					zh_CN: "zh-cn",
					zh_TW: "zh-tw"
				};
				t.exports = function(t, r, n) {
					var o = r.prototype.locale;
					r.prototype.locale = function(t) {
						var r;
						return "string" == typeof t && (t = e[r = t] || r.split("_")[0]), o.call(this, t)
					}
				}
			},
			9669: (t, e, r) => {
				r(51609)
			},
			55448: (t, e, r) => {
				"use strict";
				var n = r(64867),
					o = r(36026),
					i = r(4372),
					a = r(15327),
					c = r(94097),
					s = r(84109),
					u = r(67985),
					f = r(77874),
					l = r(10723),
					h = r(60644),
					d = r(90205);
				t.exports = function(t) {
					return new Promise((function(e, r) {
						var p, m = t.data,
							y = t.headers,
							v = t.responseType;

						function g() {
							t.cancelToken && t.cancelToken.unsubscribe(p), t.signal && t.signal.removeEventListener("abort", p)
						}
						n.isFormData(m) && n.isStandardBrowserEnv() && delete y["Content-Type"];
						var w = new XMLHttpRequest;
						if (t.auth) {
							var b = t.auth.username || "",
								x = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
							y.Authorization = "Basic " + btoa(b + ":" + x)
						}
						var k = c(t.baseURL, t.url);

						function E() {
							if (w) {
								var n = "getAllResponseHeaders" in w ? s(w.getAllResponseHeaders()) : null,
									i = {
										data: v && "text" !== v && "json" !== v ? w.response : w.responseText,
										status: w.status,
										statusText: w.statusText,
										headers: n,
										config: t,
										request: w
									};
								o((function(t) {
									e(t), g()
								}), (function(t) {
									r(t), g()
								}), i), w = null
							}
						}
						if (w.open(t.method.toUpperCase(), a(k, t.params, t.paramsSerializer), !0), w.timeout = t.timeout, "onloadend" in w ? w.onloadend = E : w.onreadystatechange = function() {
								w && 4 === w.readyState && (0 !== w.status || w.responseURL && 0 === w.responseURL.indexOf("file:")) && setTimeout(E)
							}, w.onabort = function() {
								w && (r(new l("Request aborted", l.ECONNABORTED, t, w)), w = null)
							}, w.onerror = function() {
								r(new l("Network Error", l.ERR_NETWORK, t, w, w)), w = null
							}, w.ontimeout = function() {
								var e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
									n = t.transitional || f;
								t.timeoutErrorMessage && (e = t.timeoutErrorMessage), r(new l(e, n.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED, t, w)), w = null
							}, n.isStandardBrowserEnv()) {
							var _ = (t.withCredentials || u(k)) && t.xsrfCookieName ? i.read(t.xsrfCookieName) : void 0;
							_ && (y[t.xsrfHeaderName] = _)
						}
						"setRequestHeader" in w && n.forEach(y, (function(t, e) {
							void 0 === m && "content-type" === e.toLowerCase() ? delete y[e] : w.setRequestHeader(e, t)
						})), n.isUndefined(t.withCredentials) || (w.withCredentials = !!t.withCredentials), v && "json" !== v && (w.responseType = t.responseType), "function" == typeof t.onDownloadProgress && w.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && w.upload && w.upload.addEventListener("progress", t.onUploadProgress), (t.cancelToken || t.signal) && (p = function(t) {
							w && (r(!t || t && t.type ? new h : t), w.abort(), w = null)
						}, t.cancelToken && t.cancelToken.subscribe(p), t.signal && (t.signal.aborted ? p() : t.signal.addEventListener("abort", p))), m || (m = null);
						var L = d(k);
						L && -1 === ["http", "https", "file"].indexOf(L) ? r(new l("Unsupported protocol " + L + ":", l.ERR_BAD_REQUEST, t)) : w.send(m)
					}))
				}
			},
			51609: (t, e, r) => {
				"use strict";
				var n = r(64867),
					o = r(91849),
					i = r(30321),
					a = r(47185);
				var c = function t(e) {
					var r = new i(e),
						c = o(i.prototype.request, r);
					return n.extend(c, i.prototype, r), n.extend(c, r), c.create = function(r) {
						return t(a(e, r))
					}, c
				}(r(45546));
				c.Axios = i, c.CanceledError = r(60644), c.CancelToken = r(14972), c.isCancel = r(26502), c.VERSION = r(97288).version, c.toFormData = r(47675), c.AxiosError = r(10723), c.Cancel = c.CanceledError, c.all = function(t) {
					return Promise.all(t)
				}, c.spread = r(8713), c.isAxiosError = r(16268), t.exports = c, t.exports.default = c
			},
			14972: (t, e, r) => {
				"use strict";
				var n = r(60644);

				function o(t) {
					if ("function" != typeof t) throw new TypeError("executor must be a function.");
					var e;
					this.promise = new Promise((function(t) {
						e = t
					}));
					var r = this;
					this.promise.then((function(t) {
						if (r._listeners) {
							var e, n = r._listeners.length;
							for (e = 0; e < n; e++) r._listeners[e](t);
							r._listeners = null
						}
					})), this.promise.then = function(t) {
						var e, n = new Promise((function(t) {
							r.subscribe(t), e = t
						})).then(t);
						return n.cancel = function() {
							r.unsubscribe(e)
						}, n
					}, t((function(t) {
						r.reason || (r.reason = new n(t), e(r.reason))
					}))
				}
				o.prototype.throwIfRequested = function() {
					if (this.reason) throw this.reason
				}, o.prototype.subscribe = function(t) {
					this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t]
				}, o.prototype.unsubscribe = function(t) {
					if (this._listeners) {
						var e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1)
					}
				}, o.source = function() {
					var t;
					return {
						token: new o((function(e) {
							t = e
						})),
						cancel: t
					}
				}, t.exports = o
			},
			60644: (t, e, r) => {
				"use strict";
				var n = r(10723);

				function o(t) {
					n.call(this, null == t ? "canceled" : t, n.ERR_CANCELED), this.name = "CanceledError"
				}
				r(64867).inherits(o, n, {
					__CANCEL__: !0
				}), t.exports = o
			},
			26502: t => {
				"use strict";
				t.exports = function(t) {
					return !(!t || !t.__CANCEL__)
				}
			},
			30321: (t, e, r) => {
				"use strict";
				var n = r(64867),
					o = r(15327),
					i = r(80782),
					a = r(13572),
					c = r(47185),
					s = r(94097),
					u = r(54875),
					f = u.validators;

				function l(t) {
					this.defaults = t, this.interceptors = {
						request: new i,
						response: new i
					}
				}
				l.prototype.request = function(t, e) {
					"string" == typeof t ? (e = e || {}).url = t : e = t || {}, (e = c(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
					var r = e.transitional;
					void 0 !== r && u.assertOptions(r, {
						silentJSONParsing: f.transitional(f.boolean),
						forcedJSONParsing: f.transitional(f.boolean),
						clarifyTimeoutError: f.transitional(f.boolean)
					}, !1);
					var n = [],
						o = !0;
					this.interceptors.request.forEach((function(t) {
						"function" == typeof t.runWhen && !1 === t.runWhen(e) || (o = o && t.synchronous, n.unshift(t.fulfilled, t.rejected))
					}));
					var i, s = [];
					if (this.interceptors.response.forEach((function(t) {
							s.push(t.fulfilled, t.rejected)
						})), !o) {
						var l = [a, void 0];
						for (Array.prototype.unshift.apply(l, n), l = l.concat(s), i = Promise.resolve(e); l.length;) i = i.then(l.shift(), l.shift());
						return i
					}
					for (var h = e; n.length;) {
						var d = n.shift(),
							p = n.shift();
						try {
							h = d(h)
						} catch (t) {
							p(t);
							break
						}
					}
					try {
						i = a(h)
					} catch (t) {
						return Promise.reject(t)
					}
					for (; s.length;) i = i.then(s.shift(), s.shift());
					return i
				}, l.prototype.getUri = function(t) {
					t = c(this.defaults, t);
					var e = s(t.baseURL, t.url);
					return o(e, t.params, t.paramsSerializer)
				}, n.forEach(["delete", "get", "head", "options"], (function(t) {
					l.prototype[t] = function(e, r) {
						return this.request(c(r || {}, {
							method: t,
							url: e,
							data: (r || {}).data
						}))
					}
				})), n.forEach(["post", "put", "patch"], (function(t) {
					function e(e) {
						return function(r, n, o) {
							return this.request(c(o || {}, {
								method: t,
								headers: e ? {
									"Content-Type": "multipart/form-data"
								} : {},
								url: r,
								data: n
							}))
						}
					}
					l.prototype[t] = e(), l.prototype[t + "Form"] = e(!0)
				})), t.exports = l
			},
			10723: (t, e, r) => {
				"use strict";
				var n = r(64867);

				function o(t, e, r, n, o) {
					Error.call(this), this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o)
				}
				n.inherits(o, Error, {
					toJSON: function() {
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
							status: this.response && this.response.status ? this.response.status : null
						}
					}
				});
				var i = o.prototype,
					a = {};
				["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach((function(t) {
					a[t] = {
						value: t
					}
				})), Object.defineProperties(o, a), Object.defineProperty(i, "isAxiosError", {
					value: !0
				}), o.from = function(t, e, r, a, c, s) {
					var u = Object.create(i);
					return n.toFlatObject(t, u, (function(t) {
						return t !== Error.prototype
					})), o.call(u, t.message, e, r, a, c), u.name = t.name, s && Object.assign(u, s), u
				}, t.exports = o
			},
			80782: (t, e, r) => {
				"use strict";
				var n = r(64867);

				function o() {
					this.handlers = []
				}
				o.prototype.use = function(t, e, r) {
					return this.handlers.push({
						fulfilled: t,
						rejected: e,
						synchronous: !!r && r.synchronous,
						runWhen: r ? r.runWhen : null
					}), this.handlers.length - 1
				}, o.prototype.eject = function(t) {
					this.handlers[t] && (this.handlers[t] = null)
				}, o.prototype.forEach = function(t) {
					n.forEach(this.handlers, (function(e) {
						null !== e && t(e)
					}))
				}, t.exports = o
			},
			94097: (t, e, r) => {
				"use strict";
				var n = r(91793),
					o = r(7303);
				t.exports = function(t, e) {
					return t && !n(e) ? o(t, e) : e
				}
			},
			13572: (t, e, r) => {
				"use strict";
				var n = r(64867),
					o = r(18527),
					i = r(26502),
					a = r(45546),
					c = r(60644);

				function s(t) {
					if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new c
				}
				t.exports = function(t) {
					return s(t), t.headers = t.headers || {}, t.data = o.call(t, t.data, t.headers, t.transformRequest), t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
						delete t.headers[e]
					})), (t.adapter || a.adapter)(t).then((function(e) {
						return s(t), e.data = o.call(t, e.data, e.headers, t.transformResponse), e
					}), (function(e) {
						return i(e) || (s(t), e && e.response && (e.response.data = o.call(t, e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
					}))
				}
			},
			47185: (t, e, r) => {
				"use strict";
				var n = r(64867);
				t.exports = function(t, e) {
					e = e || {};
					var r = {};

					function o(t, e) {
						return n.isPlainObject(t) && n.isPlainObject(e) ? n.merge(t, e) : n.isPlainObject(e) ? n.merge({}, e) : n.isArray(e) ? e.slice() : e
					}

					function i(r) {
						return n.isUndefined(e[r]) ? n.isUndefined(t[r]) ? void 0 : o(void 0, t[r]) : o(t[r], e[r])
					}

					function a(t) {
						if (!n.isUndefined(e[t])) return o(void 0, e[t])
					}

					function c(r) {
						return n.isUndefined(e[r]) ? n.isUndefined(t[r]) ? void 0 : o(void 0, t[r]) : o(void 0, e[r])
					}

					function s(r) {
						return r in e ? o(t[r], e[r]) : r in t ? o(void 0, t[r]) : void 0
					}
					var u = {
						url: a,
						method: a,
						data: a,
						baseURL: c,
						transformRequest: c,
						transformResponse: c,
						paramsSerializer: c,
						timeout: c,
						timeoutMessage: c,
						withCredentials: c,
						adapter: c,
						responseType: c,
						xsrfCookieName: c,
						xsrfHeaderName: c,
						onUploadProgress: c,
						onDownloadProgress: c,
						decompress: c,
						maxContentLength: c,
						maxBodyLength: c,
						beforeRedirect: c,
						transport: c,
						httpAgent: c,
						httpsAgent: c,
						cancelToken: c,
						socketPath: c,
						responseEncoding: c,
						validateStatus: s
					};
					return n.forEach(Object.keys(t).concat(Object.keys(e)), (function(t) {
						var e = u[t] || i,
							o = e(t);
						n.isUndefined(o) && e !== s || (r[t] = o)
					})), r
				}
			},
			36026: (t, e, r) => {
				"use strict";
				var n = r(10723);
				t.exports = function(t, e, r) {
					var o = r.config.validateStatus;
					r.status && o && !o(r.status) ? e(new n("Request failed with status code " + r.status, [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r)) : t(r)
				}
			},
			18527: (t, e, r) => {
				"use strict";
				var n = r(64867),
					o = r(45546);
				t.exports = function(t, e, r) {
					var i = this || o;
					return n.forEach(r, (function(r) {
						t = r.call(i, t, e)
					})), t
				}
			},
			45546: (t, e, r) => {
				"use strict";
				var n = r(64867),
					o = r(16016),
					i = r(10723),
					a = r(77874),
					c = r(47675),
					s = {
						"Content-Type": "application/x-www-form-urlencoded"
					};

				function u(t, e) {
					!n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
				}
				var f, l = {
					transitional: a,
					adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (f = r(55448)), f),
					transformRequest: [function(t, e) {
						if (o(e, "Accept"), o(e, "Content-Type"), n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t)) return t;
						if (n.isArrayBufferView(t)) return t.buffer;
						if (n.isURLSearchParams(t)) return u(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
						var r, i = n.isObject(t),
							a = e && e["Content-Type"];
						if ((r = n.isFileList(t)) || i && "multipart/form-data" === a) {
							var s = this.env && this.env.FormData;
							return c(r ? {
								"files[]": t
							} : t, s && new s)
						}
						return i || "application/json" === a ? (u(e, "application/json"), function(t, e, r) {
							if (n.isString(t)) try {
								return (e || JSON.parse)(t), n.trim(t)
							} catch (t) {
								if ("SyntaxError" !== t.name) throw t
							}
							return (r || JSON.stringify)(t)
						}(t)) : t
					}],
					transformResponse: [function(t) {
						var e = this.transitional || l.transitional,
							r = e && e.silentJSONParsing,
							o = e && e.forcedJSONParsing,
							a = !r && "json" === this.responseType;
						if (a || o && n.isString(t) && t.length) try {
							return JSON.parse(t)
						} catch (t) {
							if (a) {
								if ("SyntaxError" === t.name) throw i.from(t, i.ERR_BAD_RESPONSE, this, null, this.response);
								throw t
							}
						}
						return t
					}],
					timeout: 0,
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					maxContentLength: -1,
					maxBodyLength: -1,
					env: {
						FormData: r(91623)
					},
					validateStatus: function(t) {
						return t >= 200 && t < 300
					},
					headers: {
						common: {
							Accept: "application/json, text/plain, */*"
						}
					}
				};
				n.forEach(["delete", "get", "head"], (function(t) {
					l.headers[t] = {}
				})), n.forEach(["post", "put", "patch"], (function(t) {
					l.headers[t] = n.merge(s)
				})), t.exports = l
			},
			77874: t => {
				"use strict";
				t.exports = {
					silentJSONParsing: !0,
					forcedJSONParsing: !0,
					clarifyTimeoutError: !1
				}
			},
			97288: t => {
				t.exports = {
					version: "0.27.2"
				}
			},
			91849: t => {
				"use strict";
				t.exports = function(t, e) {
					return function() {
						for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
						return t.apply(e, r)
					}
				}
			},
			15327: (t, e, r) => {
				"use strict";
				var n = r(64867);

				function o(t) {
					return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
				}
				t.exports = function(t, e, r) {
					if (!e) return t;
					var i;
					if (r) i = r(e);
					else if (n.isURLSearchParams(e)) i = e.toString();
					else {
						var a = [];
						n.forEach(e, (function(t, e) {
							null != t && (n.isArray(t) ? e += "[]" : t = [t], n.forEach(t, (function(t) {
								n.isDate(t) ? t = t.toISOString() : n.isObject(t) && (t = JSON.stringify(t)), a.push(o(e) + "=" + o(t))
							})))
						})), i = a.join("&")
					}
					if (i) {
						var c = t.indexOf("#"); - 1 !== c && (t = t.slice(0, c)), t += (-1 === t.indexOf("?") ? "?" : "&") + i
					}
					return t
				}
			},
			7303: t => {
				"use strict";
				t.exports = function(t, e) {
					return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
				}
			},
			4372: (t, e, r) => {
				"use strict";
				var n = r(64867);
				t.exports = n.isStandardBrowserEnv() ? {
					write: function(t, e, r, o, i, a) {
						var c = [];
						c.push(t + "=" + encodeURIComponent(e)), n.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()), n.isString(o) && c.push("path=" + o), n.isString(i) && c.push("domain=" + i), !0 === a && c.push("secure"), document.cookie = c.join("; ")
					},
					read: function(t) {
						var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
						return e ? decodeURIComponent(e[3]) : null
					},
					remove: function(t) {
						this.write(t, "", Date.now() - 864e5)
					}
				} : {
					write: function() {},
					read: function() {
						return null
					},
					remove: function() {}
				}
			},
			91793: t => {
				"use strict";
				t.exports = function(t) {
					return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
				}
			},
			16268: (t, e, r) => {
				"use strict";
				var n = r(64867);
				t.exports = function(t) {
					return n.isObject(t) && !0 === t.isAxiosError
				}
			},
			67985: (t, e, r) => {
				"use strict";
				var n = r(64867);
				t.exports = n.isStandardBrowserEnv() ? function() {
					var t, e = /(msie|trident)/i.test(navigator.userAgent),
						r = document.createElement("a");

					function o(t) {
						var n = t;
						return e && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
							href: r.href,
							protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
							host: r.host,
							search: r.search ? r.search.replace(/^\?/, "") : "",
							hash: r.hash ? r.hash.replace(/^#/, "") : "",
							hostname: r.hostname,
							port: r.port,
							pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
						}
					}
					return t = o(window.location.href),
						function(e) {
							var r = n.isString(e) ? o(e) : e;
							return r.protocol === t.protocol && r.host === t.host
						}
				}() : function() {
					return !0
				}
			},
			16016: (t, e, r) => {
				"use strict";
				var n = r(64867);
				t.exports = function(t, e) {
					n.forEach(t, (function(r, n) {
						n !== e && n.toUpperCase() === e.toUpperCase() && (t[e] = r, delete t[n])
					}))
				}
			},
			91623: t => {
				t.exports = null
			},
			84109: (t, e, r) => {
				"use strict";
				var n = r(64867),
					o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
				t.exports = function(t) {
					var e, r, i, a = {};
					return t ? (n.forEach(t.split("\n"), (function(t) {
						if (i = t.indexOf(":"), e = n.trim(t.substr(0, i)).toLowerCase(), r = n.trim(t.substr(i + 1)), e) {
							if (a[e] && o.indexOf(e) >= 0) return;
							a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([r]) : a[e] ? a[e] + ", " + r : r
						}
					})), a) : a
				}
			},
			90205: t => {
				"use strict";
				t.exports = function(t) {
					var e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
					return e && e[1] || ""
				}
			},
			8713: t => {
				"use strict";
				t.exports = function(t) {
					return function(e) {
						return t.apply(null, e)
					}
				}
			},
			47675: (t, e, r) => {
				"use strict";
				var n = r(64867);
				t.exports = function(t, e) {
					e = e || new FormData;
					var r = [];

					function o(t) {
						return null === t ? "" : n.isDate(t) ? t.toISOString() : n.isArrayBuffer(t) || n.isTypedArray(t) ? "function" == typeof Blob ? new Blob([t]) : Buffer.from(t) : t
					}
					return function t(i, a) {
						if (n.isPlainObject(i) || n.isArray(i)) {
							if (-1 !== r.indexOf(i)) throw Error("Circular reference detected in " + a);
							r.push(i), n.forEach(i, (function(r, i) {
								if (!n.isUndefined(r)) {
									var c, s = a ? a + "." + i : i;
									if (r && !a && "object" == typeof r)
										if (n.endsWith(i, "{}")) r = JSON.stringify(r);
										else if (n.endsWith(i, "[]") && (c = n.toArray(r))) return void c.forEach((function(t) {
										!n.isUndefined(t) && e.append(s, o(t))
									}));
									t(r, s)
								}
							})), r.pop()
						} else e.append(a, o(i))
					}(t), e
				}
			},
			54875: (t, e, r) => {
				"use strict";
				var n = r(97288).version,
					o = r(10723),
					i = {};
				["object", "boolean", "number", "function", "string", "symbol"].forEach((function(t, e) {
					i[t] = function(r) {
						return typeof r === t || "a" + (e < 1 ? "n " : " ") + t
					}
				}));
				var a = {};
				i.transitional = function(t, e, r) {
					return function(i, c, s) {
						if (!1 === t) throw new o(function(t, e) {
							return "[Axios v" + n + "] Transitional option '" + t + "'" + e + (r ? ". " + r : "")
						}(c, " has been removed" + (e ? " in " + e : "")), o.ERR_DEPRECATED);
						return e && !a[c] && (a[c] = !0), !t || t(i, c, s)
					}
				}, t.exports = {
					assertOptions: function(t, e, r) {
						if ("object" != typeof t) throw new o("options must be an object", o.ERR_BAD_OPTION_VALUE);
						for (var n = Object.keys(t), i = n.length; i-- > 0;) {
							var a = n[i],
								c = e[a];
							if (c) {
								var s = t[a],
									u = void 0 === s || c(s, a, t);
								if (!0 !== u) throw new o("option " + a + " must be " + u, o.ERR_BAD_OPTION_VALUE)
							} else if (!0 !== r) throw new o("Unknown option " + a, o.ERR_BAD_OPTION)
						}
					},
					validators: i
				}
			},
			64867: (t, e, r) => {
				"use strict";
				var n, o = r(91849),
					i = Object.prototype.toString,
					a = (n = Object.create(null), function(t) {
						var e = i.call(t);
						return n[e] || (n[e] = e.slice(8, -1).toLowerCase())
					});

				function c(t) {
					return t = t.toLowerCase(),
						function(e) {
							return a(e) === t
						}
				}

				function s(t) {
					return Array.isArray(t)
				}

				function u(t) {
					return void 0 === t
				}
				var f = c("ArrayBuffer");

				function l(t) {
					return null !== t && "object" == typeof t
				}

				function h(t) {
					if ("object" !== a(t)) return !1;
					var e = Object.getPrototypeOf(t);
					return null === e || e === Object.prototype
				}
				var d = c("Date"),
					p = c("File"),
					m = c("Blob"),
					y = c("FileList");

				function v(t) {
					return "[object Function]" === i.call(t)
				}
				var g = c("URLSearchParams");

				function w(t, e) {
					if (null != t)
						if ("object" != typeof t && (t = [t]), s(t))
							for (var r = 0, n = t.length; r < n; r++) e.call(null, t[r], r, t);
						else
							for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
				}
				var b, x = (b = "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array), function(t) {
					return b && t instanceof b
				});
				t.exports = {
					isArray: s,
					isArrayBuffer: f,
					isBuffer: function(t) {
						return null !== t && !u(t) && null !== t.constructor && !u(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
					},
					isFormData: function(t) {
						var e = "[object FormData]";
						return t && ("function" == typeof FormData && t instanceof FormData || i.call(t) === e || v(t.toString) && t.toString() === e)
					},
					isArrayBufferView: function(t) {
						return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && f(t.buffer)
					},
					isString: function(t) {
						return "string" == typeof t
					},
					isNumber: function(t) {
						return "number" == typeof t
					},
					isObject: l,
					isPlainObject: h,
					isUndefined: u,
					isDate: d,
					isFile: p,
					isBlob: m,
					isFunction: v,
					isStream: function(t) {
						return l(t) && v(t.pipe)
					},
					isURLSearchParams: g,
					isStandardBrowserEnv: function() {
						return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
					},
					forEach: w,
					merge: function t() {
						var e = {};

						function r(r, n) {
							h(e[n]) && h(r) ? e[n] = t(e[n], r) : h(r) ? e[n] = t({}, r) : s(r) ? e[n] = r.slice() : e[n] = r
						}
						for (var n = 0, o = arguments.length; n < o; n++) w(arguments[n], r);
						return e
					},
					extend: function(t, e, r) {
						return w(e, (function(e, n) {
							t[n] = r && "function" == typeof e ? o(e, r) : e
						})), t
					},
					trim: function(t) {
						return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
					},
					stripBOM: function(t) {
						return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t
					},
					inherits: function(t, e, r, n) {
						t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, r && Object.assign(t.prototype, r)
					},
					toFlatObject: function(t, e, r) {
						var n, o, i, a = {};
						e = e || {};
						do {
							for (o = (n = Object.getOwnPropertyNames(t)).length; o-- > 0;) a[i = n[o]] || (e[i] = t[i], a[i] = !0);
							t = Object.getPrototypeOf(t)
						} while (t && (!r || r(t, e)) && t !== Object.prototype);
						return e
					},
					kindOf: a,
					kindOfTest: c,
					endsWith: function(t, e, r) {
						t = String(t), (void 0 === r || r > t.length) && (r = t.length), r -= e.length;
						var n = t.indexOf(e, r);
						return -1 !== n && n === r
					},
					toArray: function(t) {
						if (!t) return null;
						var e = t.length;
						if (u(e)) return null;
						for (var r = new Array(e); e-- > 0;) r[e] = t[e];
						return r
					},
					isTypedArray: x,
					isFileList: y
				}
			},
			27484: function(t) {
				t.exports = function() {
					"use strict";
					var t = 1e3,
						e = 6e4,
						r = 36e5,
						n = "millisecond",
						o = "second",
						i = "minute",
						a = "hour",
						c = "day",
						s = "week",
						u = "month",
						f = "quarter",
						l = "year",
						h = "date",
						d = "Invalid Date",
						p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
						m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
						y = {
							name: "en",
							weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
							months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
						},
						v = function(t, e, r) {
							var n = String(t);
							return !n || n.length >= e ? t : "" + Array(e + 1 - n.length).join(r) + t
						},
						g = {
							s: v,
							z: function(t) {
								var e = -t.utcOffset(),
									r = Math.abs(e),
									n = Math.floor(r / 60),
									o = r % 60;
								return (e <= 0 ? "+" : "-") + v(n, 2, "0") + ":" + v(o, 2, "0")
							},
							m: function t(e, r) {
								if (e.date() < r.date()) return -t(r, e);
								var n = 12 * (r.year() - e.year()) + (r.month() - e.month()),
									o = e.clone().add(n, u),
									i = r - o < 0,
									a = e.clone().add(n + (i ? -1 : 1), u);
								return +(-(n + (r - o) / (i ? o - a : a - o)) || 0)
							},
							a: function(t) {
								return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
							},
							p: function(t) {
								return {
									M: u,
									y: l,
									w: s,
									d: c,
									D: h,
									h: a,
									m: i,
									s: o,
									ms: n,
									Q: f
								} [t] || String(t || "").toLowerCase().replace(/s$/, "")
							},
							u: function(t) {
								return void 0 === t
							}
						},
						w = "en",
						b = {};
					b[w] = y;
					var x = function(t) {
							return t instanceof L
						},
						k = function t(e, r, n) {
							var o;
							if (!e) return w;
							if ("string" == typeof e) {
								var i = e.toLowerCase();
								b[i] && (o = i), r && (b[i] = r, o = i);
								var a = e.split("-");
								if (!o && a.length > 1) return t(a[0])
							} else {
								var c = e.name;
								b[c] = e, o = c
							}
							return !n && o && (w = o), o || !n && w
						},
						E = function(t, e) {
							if (x(t)) return t.clone();
							var r = "object" == typeof e ? e : {};
							return r.date = t, r.args = arguments, new L(r)
						},
						_ = g;
					_.l = k, _.i = x, _.w = function(t, e) {
						return E(t, {
							locale: e.$L,
							utc: e.$u,
							x: e.$x,
							$offset: e.$offset
						})
					};
					var L = function() {
							function y(t) {
								this.$L = k(t.locale, null, !0), this.parse(t)
							}
							var v = y.prototype;
							return v.parse = function(t) {
								this.$d = function(t) {
									var e = t.date,
										r = t.utc;
									if (null === e) return new Date(NaN);
									if (_.u(e)) return new Date;
									if (e instanceof Date) return new Date(e);
									if ("string" == typeof e && !/Z$/i.test(e)) {
										var n = e.match(p);
										if (n) {
											var o = n[2] - 1 || 0,
												i = (n[7] || "0").substring(0, 3);
											return r ? new Date(Date.UTC(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i)) : new Date(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i)
										}
									}
									return new Date(e)
								}(t), this.$x = t.x || {}, this.init()
							}, v.init = function() {
								var t = this.$d;
								this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
							}, v.$utils = function() {
								return _
							}, v.isValid = function() {
								return !(this.$d.toString() === d)
							}, v.isSame = function(t, e) {
								var r = E(t);
								return this.startOf(e) <= r && r <= this.endOf(e)
							}, v.isAfter = function(t, e) {
								return E(t) < this.startOf(e)
							}, v.isBefore = function(t, e) {
								return this.endOf(e) < E(t)
							}, v.$g = function(t, e, r) {
								return _.u(t) ? this[e] : this.set(r, t)
							}, v.unix = function() {
								return Math.floor(this.valueOf() / 1e3)
							}, v.valueOf = function() {
								return this.$d.getTime()
							}, v.startOf = function(t, e) {
								var r = this,
									n = !!_.u(e) || e,
									f = _.p(t),
									d = function(t, e) {
										var o = _.w(r.$u ? Date.UTC(r.$y, e, t) : new Date(r.$y, e, t), r);
										return n ? o : o.endOf(c)
									},
									p = function(t, e) {
										return _.w(r.toDate()[t].apply(r.toDate("s"), (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), r)
									},
									m = this.$W,
									y = this.$M,
									v = this.$D,
									g = "set" + (this.$u ? "UTC" : "");
								switch (f) {
									case l:
										return n ? d(1, 0) : d(31, 11);
									case u:
										return n ? d(1, y) : d(0, y + 1);
									case s:
										var w = this.$locale().weekStart || 0,
											b = (m < w ? m + 7 : m) - w;
										return d(n ? v - b : v + (6 - b), y);
									case c:
									case h:
										return p(g + "Hours", 0);
									case a:
										return p(g + "Minutes", 1);
									case i:
										return p(g + "Seconds", 2);
									case o:
										return p(g + "Milliseconds", 3);
									default:
										return this.clone()
								}
							}, v.endOf = function(t) {
								return this.startOf(t, !1)
							}, v.$set = function(t, e) {
								var r, s = _.p(t),
									f = "set" + (this.$u ? "UTC" : ""),
									d = (r = {}, r[c] = f + "Date", r[h] = f + "Date", r[u] = f + "Month", r[l] = f + "FullYear", r[a] = f + "Hours", r[i] = f + "Minutes", r[o] = f + "Seconds", r[n] = f + "Milliseconds", r)[s],
									p = s === c ? this.$D + (e - this.$W) : e;
								if (s === u || s === l) {
									var m = this.clone().set(h, 1);
									m.$d[d](p), m.init(), this.$d = m.set(h, Math.min(this.$D, m.daysInMonth())).$d
								} else d && this.$d[d](p);
								return this.init(), this
							}, v.set = function(t, e) {
								return this.clone().$set(t, e)
							}, v.get = function(t) {
								return this[_.p(t)]()
							}, v.add = function(n, f) {
								var h, d = this;
								n = Number(n);
								var p = _.p(f),
									m = function(t) {
										var e = E(d);
										return _.w(e.date(e.date() + Math.round(t * n)), d)
									};
								if (p === u) return this.set(u, this.$M + n);
								if (p === l) return this.set(l, this.$y + n);
								if (p === c) return m(1);
								if (p === s) return m(7);
								var y = (h = {}, h[i] = e, h[a] = r, h[o] = t, h)[p] || 1,
									v = this.$d.getTime() + n * y;
								return _.w(v, this)
							}, v.subtract = function(t, e) {
								return this.add(-1 * t, e)
							}, v.format = function(t) {
								var e = this,
									r = this.$locale();
								if (!this.isValid()) return r.invalidDate || d;
								var n = t || "YYYY-MM-DDTHH:mm:ssZ",
									o = _.z(this),
									i = this.$H,
									a = this.$m,
									c = this.$M,
									s = r.weekdays,
									u = r.months,
									f = function(t, r, o, i) {
										return t && (t[r] || t(e, n)) || o[r].slice(0, i)
									},
									l = function(t) {
										return _.s(i % 12 || 12, t, "0")
									},
									h = r.meridiem || function(t, e, r) {
										var n = t < 12 ? "AM" : "PM";
										return r ? n.toLowerCase() : n
									},
									p = {
										YY: String(this.$y).slice(-2),
										YYYY: this.$y,
										M: c + 1,
										MM: _.s(c + 1, 2, "0"),
										MMM: f(r.monthsShort, c, u, 3),
										MMMM: f(u, c),
										D: this.$D,
										DD: _.s(this.$D, 2, "0"),
										d: String(this.$W),
										dd: f(r.weekdaysMin, this.$W, s, 2),
										ddd: f(r.weekdaysShort, this.$W, s, 3),
										dddd: s[this.$W],
										H: String(i),
										HH: _.s(i, 2, "0"),
										h: l(1),
										hh: l(2),
										a: h(i, a, !0),
										A: h(i, a, !1),
										m: String(a),
										mm: _.s(a, 2, "0"),
										s: String(this.$s),
										ss: _.s(this.$s, 2, "0"),
										SSS: _.s(this.$ms, 3, "0"),
										Z: o
									};
								return n.replace(m, (function(t, e) {
									return e || p[t] || o.replace(":", "")
								}))
							}, v.utcOffset = function() {
								return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
							}, v.diff = function(n, h, d) {
								var p, m = _.p(h),
									y = E(n),
									v = (y.utcOffset() - this.utcOffset()) * e,
									g = this - y,
									w = _.m(this, y);
								return w = (p = {}, p[l] = w / 12, p[u] = w, p[f] = w / 3, p[s] = (g - v) / 6048e5, p[c] = (g - v) / 864e5, p[a] = g / r, p[i] = g / e, p[o] = g / t, p)[m] || g, d ? w : _.a(w)
							}, v.daysInMonth = function() {
								return this.endOf(u).$D
							}, v.$locale = function() {
								return b[this.$L]
							}, v.locale = function(t, e) {
								if (!t) return this.$L;
								var r = this.clone(),
									n = k(t, e, !0);
								return n && (r.$L = n), r
							}, v.clone = function() {
								return _.w(this.$d, this)
							}, v.toDate = function() {
								return new Date(this.valueOf())
							}, v.toJSON = function() {
								return this.isValid() ? this.toISOString() : null
							}, v.toISOString = function() {
								return this.$d.toISOString()
							}, v.toString = function() {
								return this.$d.toUTCString()
							}, y
						}(),
						S = L.prototype;
					return E.prototype = S, [
						["$ms", n],
						["$s", o],
						["$m", i],
						["$H", a],
						["$W", c],
						["$M", u],
						["$y", l],
						["$D", h]
					].forEach((function(t) {
						S[t[1]] = function(e) {
							return this.$g(e, t[0], t[1])
						}
					})), E.extend = function(t, e) {
						return t.$i || (t(e, L, E), t.$i = !0), E
					}, E.locale = k, E.isDayjs = x, E.unix = function(t) {
						return E(1e3 * t)
					}, E.en = b[w], E.Ls = b, E.p = {}, E
				}()
			},
			28734: function(t) {
				t.exports = function() {
					"use strict";
					return function(t, e, r) {
						var n = e.prototype,
							o = n.format;
						r.en.ordinal = function(t) {
							var e = ["th", "st", "nd", "rd"],
								r = t % 100;
							return "[" + t + (e[(r - 20) % 10] || e[r] || e[0]) + "]"
						}, n.format = function(t) {
							var e = this,
								r = this.$locale();
							if (!this.isValid()) return o.bind(this)(t);
							var n = this.$utils(),
								i = (t || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(t) {
									switch (t) {
										case "Q":
											return Math.ceil((e.$M + 1) / 3);
										case "Do":
											return r.ordinal(e.$D);
										case "gggg":
											return e.weekYear();
										case "GGGG":
											return e.isoWeekYear();
										case "wo":
											return r.ordinal(e.week(), "W");
										case "w":
										case "ww":
											return n.s(e.week(), "w" === t ? 1 : 2, "0");
										case "W":
										case "WW":
											return n.s(e.isoWeek(), "W" === t ? 1 : 2, "0");
										case "k":
										case "kk":
											return n.s(String(0 === e.$H ? 24 : e.$H), "k" === t ? 1 : 2, "0");
										case "X":
											return Math.floor(e.$d.getTime() / 1e3);
										case "x":
											return e.$d.getTime();
										case "z":
											return "[" + e.offsetName() + "]";
										case "zzz":
											return "[" + e.offsetName("long") + "]";
										default:
											return t
									}
								}));
							return o.bind(this)(i)
						}
					}
				}()
			},
			10285: function(t) {
				t.exports = function() {
					"use strict";
					var t = {
							LTS: "h:mm:ss A",
							LT: "h:mm A",
							L: "MM/DD/YYYY",
							LL: "MMMM D, YYYY",
							LLL: "MMMM D, YYYY h:mm A",
							LLLL: "dddd, MMMM D, YYYY h:mm A"
						},
						e = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
						r = /\d\d/,
						n = /\d\d?/,
						o = /\d*[^\s\d-_:/()]+/,
						i = {},
						a = function(t) {
							return (t = +t) + (t > 68 ? 1900 : 2e3)
						},
						c = function(t) {
							return function(e) {
								this[t] = +e
							}
						},
						s = [/[+-]\d\d:?(\d\d)?|Z/, function(t) {
							(this.zone || (this.zone = {})).offset = function(t) {
								if (!t) return 0;
								if ("Z" === t) return 0;
								var e = t.match(/([+-]|\d\d)/g),
									r = 60 * e[1] + (+e[2] || 0);
								return 0 === r ? 0 : "+" === e[0] ? -r : r
							}(t)
						}],
						u = function(t) {
							var e = i[t];
							return e && (e.indexOf ? e : e.s.concat(e.f))
						},
						f = function(t, e) {
							var r, n = i.meridiem;
							if (n) {
								for (var o = 1; o <= 24; o += 1)
									if (t.indexOf(n(o, 0, e)) > -1) {
										r = o > 12;
										break
									}
							} else r = t === (e ? "pm" : "PM");
							return r
						},
						l = {
							A: [o, function(t) {
								this.afternoon = f(t, !1)
							}],
							a: [o, function(t) {
								this.afternoon = f(t, !0)
							}],
							S: [/\d/, function(t) {
								this.milliseconds = 100 * +t
							}],
							SS: [r, function(t) {
								this.milliseconds = 10 * +t
							}],
							SSS: [/\d{3}/, function(t) {
								this.milliseconds = +t
							}],
							s: [n, c("seconds")],
							ss: [n, c("seconds")],
							m: [n, c("minutes")],
							mm: [n, c("minutes")],
							H: [n, c("hours")],
							h: [n, c("hours")],
							HH: [n, c("hours")],
							hh: [n, c("hours")],
							D: [n, c("day")],
							DD: [r, c("day")],
							Do: [o, function(t) {
								var e = i.ordinal,
									r = t.match(/\d+/);
								if (this.day = r[0], e)
									for (var n = 1; n <= 31; n += 1) e(n).replace(/\[|\]/g, "") === t && (this.day = n)
							}],
							M: [n, c("month")],
							MM: [r, c("month")],
							MMM: [o, function(t) {
								var e = u("months"),
									r = (u("monthsShort") || e.map((function(t) {
										return t.slice(0, 3)
									}))).indexOf(t) + 1;
								if (r < 1) throw new Error;
								this.month = r % 12 || r
							}],
							MMMM: [o, function(t) {
								var e = u("months").indexOf(t) + 1;
								if (e < 1) throw new Error;
								this.month = e % 12 || e
							}],
							Y: [/[+-]?\d+/, c("year")],
							YY: [r, function(t) {
								this.year = a(t)
							}],
							YYYY: [/\d{4}/, c("year")],
							Z: s,
							ZZ: s
						};

					function h(r) {
						var n, o;
						n = r, o = i && i.formats;
						for (var a = (r = n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(e, r, n) {
								var i = n && n.toUpperCase();
								return r || o[n] || t[n] || o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(t, e, r) {
									return e || r.slice(1)
								}))
							}))).match(e), c = a.length, s = 0; s < c; s += 1) {
							var u = a[s],
								f = l[u],
								h = f && f[0],
								d = f && f[1];
							a[s] = d ? {
								regex: h,
								parser: d
							} : u.replace(/^\[|\]$/g, "")
						}
						return function(t) {
							for (var e = {}, r = 0, n = 0; r < c; r += 1) {
								var o = a[r];
								if ("string" == typeof o) n += o.length;
								else {
									var i = o.regex,
										s = o.parser,
										u = t.slice(n),
										f = i.exec(u)[0];
									s.call(e, f), t = t.replace(f, "")
								}
							}
							return function(t) {
								var e = t.afternoon;
								if (void 0 !== e) {
									var r = t.hours;
									e ? r < 12 && (t.hours += 12) : 12 === r && (t.hours = 0), delete t.afternoon
								}
							}(e), e
						}
					}
					return function(t, e, r) {
						r.p.customParseFormat = !0, t && t.parseTwoDigitYear && (a = t.parseTwoDigitYear);
						var n = e.prototype,
							o = n.parse;
						n.parse = function(t) {
							var e = t.date,
								n = t.utc,
								a = t.args;
							this.$u = n;
							var c = a[1];
							if ("string" == typeof c) {
								var s = !0 === a[2],
									u = !0 === a[3],
									f = s || u,
									l = a[2];
								u && (l = a[2]), i = this.$locale(), !s && l && (i = r.Ls[l]), this.$d = function(t, e, r) {
									try {
										if (["x", "X"].indexOf(e) > -1) return new Date(("X" === e ? 1e3 : 1) * t);
										var n = h(e)(t),
											o = n.year,
											i = n.month,
											a = n.day,
											c = n.hours,
											s = n.minutes,
											u = n.seconds,
											f = n.milliseconds,
											l = n.zone,
											d = new Date,
											p = a || (o || i ? 1 : d.getDate()),
											m = o || d.getFullYear(),
											y = 0;
										o && !i || (y = i > 0 ? i - 1 : d.getMonth());
										var v = c || 0,
											g = s || 0,
											w = u || 0,
											b = f || 0;
										return l ? new Date(Date.UTC(m, y, p, v, g, w, b + 60 * l.offset * 1e3)) : r ? new Date(Date.UTC(m, y, p, v, g, w, b)) : new Date(m, y, p, v, g, w, b)
									} catch (t) {
										return new Date("")
									}
								}(e, c, n), this.init(), l && !0 !== l && (this.$L = this.locale(l).$L), f && e != this.format(c) && (this.$d = new Date("")), i = {}
							} else if (c instanceof Array)
								for (var d = c.length, p = 1; p <= d; p += 1) {
									a[1] = c[p - 1];
									var m = r.apply(this, a);
									if (m.isValid()) {
										this.$d = m.$d, this.$L = m.$L, this.init();
										break
									}
									p === d && (this.$d = new Date(""))
								} else o.call(this, t)
						}
					}
				}()
			},
			1646: function(t) {
				t.exports = function() {
					"use strict";
					var t, e, r = 1e3,
						n = 6e4,
						o = 36e5,
						i = 864e5,
						a = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
						c = 31536e6,
						s = 2592e6,
						u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
						f = {
							years: c,
							months: s,
							days: i,
							hours: o,
							minutes: n,
							seconds: r,
							milliseconds: 1,
							weeks: 6048e5
						},
						l = function(t) {
							return t instanceof g
						},
						h = function(t, e, r) {
							return new g(t, r, e.$l)
						},
						d = function(t) {
							return e.p(t) + "s"
						},
						p = function(t) {
							return t < 0
						},
						m = function(t) {
							return p(t) ? Math.ceil(t) : Math.floor(t)
						},
						y = function(t) {
							return Math.abs(t)
						},
						v = function(t, e) {
							return t ? p(t) ? {
								negative: !0,
								format: "" + y(t) + e
							} : {
								negative: !1,
								format: "" + t + e
							} : {
								negative: !1,
								format: ""
							}
						},
						g = function() {
							function p(t, e, r) {
								var n = this;
								if (this.$d = {}, this.$l = r, void 0 === t && (this.$ms = 0, this.parseFromMilliseconds()), e) return h(t * f[d(e)], this);
								if ("number" == typeof t) return this.$ms = t, this.parseFromMilliseconds(), this;
								if ("object" == typeof t) return Object.keys(t).forEach((function(e) {
									n.$d[d(e)] = t[e]
								})), this.calMilliseconds(), this;
								if ("string" == typeof t) {
									var o = t.match(u);
									if (o) {
										var i = o.slice(2).map((function(t) {
											return null != t ? Number(t) : 0
										}));
										return this.$d.years = i[0], this.$d.months = i[1], this.$d.weeks = i[2], this.$d.days = i[3], this.$d.hours = i[4], this.$d.minutes = i[5], this.$d.seconds = i[6], this.calMilliseconds(), this
									}
								}
								return this
							}
							var y = p.prototype;
							return y.calMilliseconds = function() {
								var t = this;
								this.$ms = Object.keys(this.$d).reduce((function(e, r) {
									return e + (t.$d[r] || 0) * f[r]
								}), 0)
							}, y.parseFromMilliseconds = function() {
								var t = this.$ms;
								this.$d.years = m(t / c), t %= c, this.$d.months = m(t / s), t %= s, this.$d.days = m(t / i), t %= i, this.$d.hours = m(t / o), t %= o, this.$d.minutes = m(t / n), t %= n, this.$d.seconds = m(t / r), t %= r, this.$d.milliseconds = t
							}, y.toISOString = function() {
								var t = v(this.$d.years, "Y"),
									e = v(this.$d.months, "M"),
									r = +this.$d.days || 0;
								this.$d.weeks && (r += 7 * this.$d.weeks);
								var n = v(r, "D"),
									o = v(this.$d.hours, "H"),
									i = v(this.$d.minutes, "M"),
									a = this.$d.seconds || 0;
								this.$d.milliseconds && (a += this.$d.milliseconds / 1e3);
								var c = v(a, "S"),
									s = t.negative || e.negative || n.negative || o.negative || i.negative || c.negative,
									u = o.format || i.format || c.format ? "T" : "",
									f = (s ? "-" : "") + "P" + t.format + e.format + n.format + u + o.format + i.format + c.format;
								return "P" === f || "-P" === f ? "P0D" : f
							}, y.toJSON = function() {
								return this.toISOString()
							}, y.format = function(t) {
								var r = t || "YYYY-MM-DDTHH:mm:ss",
									n = {
										Y: this.$d.years,
										YY: e.s(this.$d.years, 2, "0"),
										YYYY: e.s(this.$d.years, 4, "0"),
										M: this.$d.months,
										MM: e.s(this.$d.months, 2, "0"),
										D: this.$d.days,
										DD: e.s(this.$d.days, 2, "0"),
										H: this.$d.hours,
										HH: e.s(this.$d.hours, 2, "0"),
										m: this.$d.minutes,
										mm: e.s(this.$d.minutes, 2, "0"),
										s: this.$d.seconds,
										ss: e.s(this.$d.seconds, 2, "0"),
										SSS: e.s(this.$d.milliseconds, 3, "0")
									};
								return r.replace(a, (function(t, e) {
									return e || String(n[t])
								}))
							}, y.as = function(t) {
								return this.$ms / f[d(t)]
							}, y.get = function(t) {
								var e = this.$ms,
									r = d(t);
								return "milliseconds" === r ? e %= 1e3 : e = "weeks" === r ? m(e / f[r]) : this.$d[r], 0 === e ? 0 : e
							}, y.add = function(t, e, r) {
								var n;
								return n = e ? t * f[d(e)] : l(t) ? t.$ms : h(t, this).$ms, h(this.$ms + n * (r ? -1 : 1), this)
							}, y.subtract = function(t, e) {
								return this.add(t, e, !0)
							}, y.locale = function(t) {
								var e = this.clone();
								return e.$l = t, e
							}, y.clone = function() {
								return h(this.$ms, this)
							}, y.humanize = function(e) {
								return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e)
							}, y.milliseconds = function() {
								return this.get("milliseconds")
							}, y.asMilliseconds = function() {
								return this.as("milliseconds")
							}, y.seconds = function() {
								return this.get("seconds")
							}, y.asSeconds = function() {
								return this.as("seconds")
							}, y.minutes = function() {
								return this.get("minutes")
							}, y.asMinutes = function() {
								return this.as("minutes")
							}, y.hours = function() {
								return this.get("hours")
							}, y.asHours = function() {
								return this.as("hours")
							}, y.days = function() {
								return this.get("days")
							}, y.asDays = function() {
								return this.as("days")
							}, y.weeks = function() {
								return this.get("weeks")
							}, y.asWeeks = function() {
								return this.as("weeks")
							}, y.months = function() {
								return this.get("months")
							}, y.asMonths = function() {
								return this.as("months")
							}, y.years = function() {
								return this.get("years")
							}, y.asYears = function() {
								return this.as("years")
							}, p
						}();
					return function(r, n, o) {
						t = o, e = o().$utils(), o.duration = function(t, e) {
							var r = o.locale();
							return h(t, {
								$l: r
							}, e)
						}, o.isDuration = l;
						var i = n.prototype.add,
							a = n.prototype.subtract;
						n.prototype.add = function(t, e) {
							return l(t) && (t = t.asMilliseconds()), i.bind(this)(t, e)
						}, n.prototype.subtract = function(t, e) {
							return l(t) && (t = t.asMilliseconds()), a.bind(this)(t, e)
						}
					}
				}()
			},
			34425: function(t) {
				t.exports = function() {
					"use strict";
					return function(t, e, r) {
						r.isMoment = function(t) {
							return r.isDayjs(t)
						}
					}
				}()
			},
			79212: function(t) {
				t.exports = function() {
					"use strict";
					return function(t, e) {
						e.prototype.isSameOrAfter = function(t, e) {
							return this.isSame(t, e) || this.isAfter(t, e)
						}
					}
				}()
			},
			37412: function(t) {
				t.exports = function() {
					"use strict";
					return function(t, e) {
						e.prototype.isSameOrBefore = function(t, e) {
							return this.isSame(t, e) || this.isBefore(t, e)
						}
					}
				}()
			},
			96036: function(t) {
				t.exports = function() {
					"use strict";
					return function(t, e, r) {
						var n = e.prototype,
							o = function(t) {
								return t && (t.indexOf ? t : t.s)
							},
							i = function(t, e, r, n, i) {
								var a = t.name ? t : t.$locale(),
									c = o(a[e]),
									s = o(a[r]),
									u = c || s.map((function(t) {
										return t.slice(0, n)
									}));
								if (!i) return u;
								var f = a.weekStart;
								return u.map((function(t, e) {
									return u[(e + (f || 0)) % 7]
								}))
							},
							a = function() {
								return r.Ls[r.locale()]
							},
							c = function(t, e) {
								return t.formats[e] || function(t) {
									return t.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(t, e, r) {
										return e || r.slice(1)
									}))
								}(t.formats[e.toUpperCase()])
							},
							s = function() {
								var t = this;
								return {
									months: function(e) {
										return e ? e.format("MMMM") : i(t, "months")
									},
									monthsShort: function(e) {
										return e ? e.format("MMM") : i(t, "monthsShort", "months", 3)
									},
									firstDayOfWeek: function() {
										return t.$locale().weekStart || 0
									},
									weekdays: function(e) {
										return e ? e.format("dddd") : i(t, "weekdays")
									},
									weekdaysMin: function(e) {
										return e ? e.format("dd") : i(t, "weekdaysMin", "weekdays", 2)
									},
									weekdaysShort: function(e) {
										return e ? e.format("ddd") : i(t, "weekdaysShort", "weekdays", 3)
									},
									longDateFormat: function(e) {
										return c(t.$locale(), e)
									},
									meridiem: this.$locale().meridiem,
									ordinal: this.$locale().ordinal
								}
							};
						n.localeData = function() {
							return s.bind(this)()
						}, r.localeData = function() {
							var t = a();
							return {
								firstDayOfWeek: function() {
									return t.weekStart || 0
								},
								weekdays: function() {
									return r.weekdays()
								},
								weekdaysShort: function() {
									return r.weekdaysShort()
								},
								weekdaysMin: function() {
									return r.weekdaysMin()
								},
								months: function() {
									return r.months()
								},
								monthsShort: function() {
									return r.monthsShort()
								},
								longDateFormat: function(e) {
									return c(t, e)
								},
								meridiem: t.meridiem,
								ordinal: t.ordinal
							}
						}, r.months = function() {
							return i(a(), "months")
						}, r.monthsShort = function() {
							return i(a(), "monthsShort", "months", 3)
						}, r.weekdays = function(t) {
							return i(a(), "weekdays", null, null, t)
						}, r.weekdaysShort = function(t) {
							return i(a(), "weekdaysShort", "weekdays", 3, t)
						}, r.weekdaysMin = function(t) {
							return i(a(), "weekdaysMin", "weekdays", 2, t)
						}
					}
				}()
			},
			56176: function(t) {
				t.exports = function() {
					"use strict";
					var t = {
						LTS: "h:mm:ss A",
						LT: "h:mm A",
						L: "MM/DD/YYYY",
						LL: "MMMM D, YYYY",
						LLL: "MMMM D, YYYY h:mm A",
						LLLL: "dddd, MMMM D, YYYY h:mm A"
					};
					return function(e, r, n) {
						var o = r.prototype,
							i = o.format;
						n.en.formats = t, o.format = function(e) {
							void 0 === e && (e = "YYYY-MM-DDTHH:mm:ssZ");
							var r = this.$locale().formats,
								n = function(e, r) {
									return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(e, n, o) {
										var i = o && o.toUpperCase();
										return n || r[o] || t[o] || r[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(t, e, r) {
											return e || r.slice(1)
										}))
									}))
								}(e, void 0 === r ? {} : r);
							return i.call(this, n)
						}
					}
				}()
			},
			70178: function(t) {
				t.exports = function() {
					"use strict";
					var t = "minute",
						e = /[+-]\d\d(?::?\d\d)?/g,
						r = /([+-]|\d\d)/g;
					return function(n, o, i) {
						var a = o.prototype;
						i.utc = function(t) {
							return new o({
								date: t,
								utc: !0,
								args: arguments
							})
						}, a.utc = function(e) {
							var r = i(this.toDate(), {
								locale: this.$L,
								utc: !0
							});
							return e ? r.add(this.utcOffset(), t) : r
						}, a.local = function() {
							return i(this.toDate(), {
								locale: this.$L,
								utc: !1
							})
						};
						var c = a.parse;
						a.parse = function(t) {
							t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), c.call(this, t)
						};
						var s = a.init;
						a.init = function() {
							if (this.$u) {
								var t = this.$d;
								this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds()
							} else s.call(this)
						};
						var u = a.utcOffset;
						a.utcOffset = function(n, o) {
							var i = this.$utils().u;
							if (i(n)) return this.$u ? 0 : i(this.$offset) ? u.call(this) : this.$offset;
							if ("string" == typeof n && (n = function(t) {
									void 0 === t && (t = "");
									var n = t.match(e);
									if (!n) return null;
									var o = ("" + n[0]).match(r) || ["-", 0, 0],
										i = o[0],
										a = 60 * +o[1] + +o[2];
									return 0 === a ? 0 : "+" === i ? a : -a
								}(n), null === n)) return this;
							var a = Math.abs(n) <= 16 ? 60 * n : n,
								c = this;
							if (o) return c.$offset = a, c.$u = 0 === n, c;
							if (0 !== n) {
								var s = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
								(c = this.local().add(a + s, t)).$offset = a, c.$x.$localOffset = s
							} else c = this.utc();
							return c
						};
						var f = a.format;
						a.format = function(t) {
							var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
							return f.call(this, e)
						}, a.valueOf = function() {
							var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || (new Date).getTimezoneOffset());
							return this.$d.valueOf() - 6e4 * t
						}, a.isUTC = function() {
							return !!this.$u
						}, a.toISOString = function() {
							return this.toDate().toISOString()
						}, a.toString = function() {
							return this.toDate().toUTCString()
						};
						var l = a.toDate;
						a.toDate = function(t) {
							return "s" === t && this.$offset ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this)
						};
						var h = a.diff;
						a.diff = function(t, e, r) {
							if (t && this.$u === t.$u) return h.call(this, t, e, r);
							var n = this.local(),
								o = i(t).local();
							return h.call(n, o, e, r)
						}
					}
				}()
			},
			55183: function(t) {
				t.exports = function() {
					"use strict";
					var t = "week",
						e = "year";
					return function(r, n, o) {
						var i = n.prototype;
						i.week = function(r) {
							if (void 0 === r && (r = null), null !== r) return this.add(7 * (r - this.week()), "day");
							var n = this.$locale().yearStart || 1;
							if (11 === this.month() && this.date() > 25) {
								var i = o(this).startOf(e).add(1, e).date(n),
									a = o(this).endOf(t);
								if (i.isBefore(a)) return 1
							}
							var c = o(this).startOf(e).date(n).startOf(t).subtract(1, "millisecond"),
								s = this.diff(c, t, !0);
							return s < 0 ? o(this).startOf("week").week() : Math.ceil(s)
						}, i.weeks = function(t) {
							return void 0 === t && (t = null), this.week(t)
						}
					}
				}()
			},
			172: function(t) {
				t.exports = function() {
					"use strict";
					return function(t, e) {
						e.prototype.weekYear = function() {
							var t = this.month(),
								e = this.week(),
								r = this.year();
							return 1 === e && 11 === t ? r + 1 : 0 === t && e >= 52 ? r - 1 : r
						}
					}
				}()
			},
			6833: function(t) {
				t.exports = function() {
					"use strict";
					return function(t, e) {
						e.prototype.weekday = function(t) {
							var e = this.$locale().weekStart || 0,
								r = this.$W,
								n = (r < e ? r + 7 : r) - e;
							return this.$utils().u(t) ? n : this.subtract(n, "day").add(t, "day")
						}
					}
				}()
			},
			40705: t => {
				t.exports = function t(e, r, n) {
					function o(a, c) {
						if (!r[a]) {
							if (!e[a]) {
								if (i) return i(a, !0);
								throw new Error("Cannot find module '" + a + "'")
							}
							var s = r[a] = {
								exports: {}
							};
							e[a][0].call(s.exports, (function(t) {
								return o(e[a][1][t] || t)
							}), s, s.exports, t, e, r, n)
						}
						return r[a].exports
					}
					for (var i = void 0, a = 0; a < n.length; a++) o(n[a]);
					return o
				}({
					1: [function(t, e, r) {
						(function(n, o, i, a, c, s, u, f, l) {
							"use strict";
							var h = t("crypto");

							function d(t, e) {
								return function(t, e) {
									var r;
									if (void 0 === (r = "passthrough" !== e.algorithm ? h.createHash(e.algorithm) : new w).write && (r.write = r.update, r.end = r.update), g(e, r).dispatch(t), r.update || r.end(""), r.digest) return r.digest("buffer" === e.encoding ? void 0 : e.encoding);
									var n = r.read();
									return "buffer" !== e.encoding ? n.toString(e.encoding) : n
								}(t, e = y(t, e))
							}(r = e.exports = d).sha1 = function(t) {
								return d(t)
							}, r.keys = function(t) {
								return d(t, {
									excludeValues: !0,
									algorithm: "sha1",
									encoding: "hex"
								})
							}, r.MD5 = function(t) {
								return d(t, {
									algorithm: "md5",
									encoding: "hex"
								})
							}, r.keysMD5 = function(t) {
								return d(t, {
									algorithm: "md5",
									encoding: "hex",
									excludeValues: !0
								})
							};
							var p = h.getHashes ? h.getHashes().slice() : ["sha1", "md5"];
							p.push("passthrough");
							var m = ["buffer", "hex", "binary", "base64"];

							function y(t, e) {
								e = e || {};
								var r = {};
								if (r.algorithm = e.algorithm || "sha1", r.encoding = e.encoding || "hex", r.excludeValues = !!e.excludeValues, r.algorithm = r.algorithm.toLowerCase(), r.encoding = r.encoding.toLowerCase(), r.ignoreUnknown = !0 === e.ignoreUnknown, r.respectType = !1 !== e.respectType, r.respectFunctionNames = !1 !== e.respectFunctionNames, r.respectFunctionProperties = !1 !== e.respectFunctionProperties, r.unorderedArrays = !0 === e.unorderedArrays, r.unorderedSets = !1 !== e.unorderedSets, r.unorderedObjects = !1 !== e.unorderedObjects, r.replacer = e.replacer || void 0, r.excludeKeys = e.excludeKeys || void 0, void 0 === t) throw new Error("Object argument required.");
								for (var n = 0; n < p.length; ++n) p[n].toLowerCase() === r.algorithm.toLowerCase() && (r.algorithm = p[n]);
								if (-1 === p.indexOf(r.algorithm)) throw new Error('Algorithm "' + r.algorithm + '"  not supported. supported values: ' + p.join(", "));
								if (-1 === m.indexOf(r.encoding) && "passthrough" !== r.algorithm) throw new Error('Encoding "' + r.encoding + '"  not supported. supported values: ' + m.join(", "));
								return r
							}

							function v(t) {
								if ("function" == typeof t) return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(t))
							}

							function g(t, e, r) {
								function n(t) {
									return e.update ? e.update(t, "utf8") : e.write(t, "utf8")
								}
								return r = r || [], {
									dispatch: function(e) {
										t.replacer && (e = t.replacer(e));
										var r = typeof e;
										return null === e && (r = "null"), this["_" + r](e)
									},
									_object: function(e) {
										var o, a = Object.prototype.toString.call(e),
											c = /\[object (.*)\]/i.exec(a);
										if (c = (c = c ? c[1] : "unknown:[" + a + "]").toLowerCase(), 0 <= (o = r.indexOf(e))) return this.dispatch("[CIRCULAR:" + o + "]");
										if (r.push(e), void 0 !== i && i.isBuffer && i.isBuffer(e)) return n("buffer:"), n(e);
										if ("object" === c || "function" === c || "asyncfunction" === c) {
											var s = Object.keys(e);
											t.unorderedObjects && (s = s.sort()), !1 === t.respectType || v(e) || s.splice(0, 0, "prototype", "__proto__", "constructor"), t.excludeKeys && (s = s.filter((function(e) {
												return !t.excludeKeys(e)
											}))), n("object:" + s.length + ":");
											var u = this;
											return s.forEach((function(r) {
												u.dispatch(r), n(":"), t.excludeValues || u.dispatch(e[r]), n(",")
											}))
										}
										if (!this["_" + c]) {
											if (t.ignoreUnknown) return n("[" + c + "]");
											throw new Error('Unknown object type "' + c + '"')
										}
										this["_" + c](e)
									},
									_array: function(e, o) {
										o = void 0 !== o ? o : !1 !== t.unorderedArrays;
										var i = this;
										if (n("array:" + e.length + ":"), !o || e.length <= 1) return e.forEach((function(t) {
											return i.dispatch(t)
										}));
										var a = [],
											c = e.map((function(e) {
												var n = new w,
													o = r.slice();
												return g(t, n, o).dispatch(e), a = a.concat(o.slice(r.length)), n.read().toString()
											}));
										return r = r.concat(a), c.sort(), this._array(c, !1)
									},
									_date: function(t) {
										return n("date:" + t.toJSON())
									},
									_symbol: function(t) {
										return n("symbol:" + t.toString())
									},
									_error: function(t) {
										return n("error:" + t.toString())
									},
									_boolean: function(t) {
										return n("bool:" + t.toString())
									},
									_string: function(t) {
										n("string:" + t.length + ":"), n(t.toString())
									},
									_function: function(e) {
										n("fn:"), v(e) ? this.dispatch("[native]") : this.dispatch(e.toString()), !1 !== t.respectFunctionNames && this.dispatch("function-name:" + String(e.name)), t.respectFunctionProperties && this._object(e)
									},
									_number: function(t) {
										return n("number:" + t.toString())
									},
									_xml: function(t) {
										return n("xml:" + t.toString())
									},
									_null: function() {
										return n("Null")
									},
									_undefined: function() {
										return n("Undefined")
									},
									_regexp: function(t) {
										return n("regex:" + t.toString())
									},
									_uint8array: function(t) {
										return n("uint8array:"), this.dispatch(Array.prototype.slice.call(t))
									},
									_uint8clampedarray: function(t) {
										return n("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(t))
									},
									_int8array: function(t) {
										return n("uint8array:"), this.dispatch(Array.prototype.slice.call(t))
									},
									_uint16array: function(t) {
										return n("uint16array:"), this.dispatch(Array.prototype.slice.call(t))
									},
									_int16array: function(t) {
										return n("uint16array:"), this.dispatch(Array.prototype.slice.call(t))
									},
									_uint32array: function(t) {
										return n("uint32array:"), this.dispatch(Array.prototype.slice.call(t))
									},
									_int32array: function(t) {
										return n("uint32array:"), this.dispatch(Array.prototype.slice.call(t))
									},
									_float32array: function(t) {
										return n("float32array:"), this.dispatch(Array.prototype.slice.call(t))
									},
									_float64array: function(t) {
										return n("float64array:"), this.dispatch(Array.prototype.slice.call(t))
									},
									_arraybuffer: function(t) {
										return n("arraybuffer:"), this.dispatch(new Uint8Array(t))
									},
									_url: function(t) {
										return n("url:" + t.toString())
									},
									_map: function(e) {
										n("map:");
										var r = Array.from(e);
										return this._array(r, !1 !== t.unorderedSets)
									},
									_set: function(e) {
										n("set:");
										var r = Array.from(e);
										return this._array(r, !1 !== t.unorderedSets)
									},
									_blob: function() {
										if (t.ignoreUnknown) return n("[blob]");
										throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')
									},
									_domwindow: function() {
										return n("domwindow")
									},
									_process: function() {
										return n("process")
									},
									_timer: function() {
										return n("timer")
									},
									_pipe: function() {
										return n("pipe")
									},
									_tcp: function() {
										return n("tcp")
									},
									_udp: function() {
										return n("udp")
									},
									_tty: function() {
										return n("tty")
									},
									_statwatcher: function() {
										return n("statwatcher")
									},
									_securecontext: function() {
										return n("securecontext")
									},
									_connection: function() {
										return n("connection")
									},
									_zlib: function() {
										return n("zlib")
									},
									_context: function() {
										return n("context")
									},
									_nodescript: function() {
										return n("nodescript")
									},
									_httpparser: function() {
										return n("httpparser")
									},
									_dataview: function() {
										return n("dataview")
									},
									_signal: function() {
										return n("signal")
									},
									_fsevent: function() {
										return n("fsevent")
									},
									_tlswrap: function() {
										return n("tlswrap")
									}
								}
							}

							function w() {
								return {
									buf: "",
									write: function(t) {
										this.buf += t
									},
									end: function(t) {
										this.buf += t
									},
									read: function() {
										return this.buf
									}
								}
							}
							r.writeToStream = function(t, e, r) {
								return void 0 === r && (r = e, e = {}), g(e = y(t, e), r).dispatch(t)
							}
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_794fcf4d.js", "/")
					}, {
						buffer: 3,
						crypto: 5,
						lYpoI2: 10
					}],
					2: [function(t, e, r) {
						(function(t, e, n, o, i, a, c, s, u) {
							! function(t) {
								"use strict";
								var e = "undefined" != typeof Uint8Array ? Uint8Array : Array,
									r = "+".charCodeAt(0),
									n = "/".charCodeAt(0),
									o = "0".charCodeAt(0),
									i = "a".charCodeAt(0),
									a = "A".charCodeAt(0),
									c = "-".charCodeAt(0),
									s = "_".charCodeAt(0);

								function u(t) {
									var e = t.charCodeAt(0);
									return e === r || e === c ? 62 : e === n || e === s ? 63 : e < o ? -1 : e < o + 10 ? e - o + 26 + 26 : e < a + 26 ? e - a : e < i + 26 ? e - i + 26 : void 0
								}
								t.toByteArray = function(t) {
									var r, n, o, i, a;
									if (0 < t.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
									var c = t.length;
									i = "=" === t.charAt(c - 2) ? 2 : "=" === t.charAt(c - 1) ? 1 : 0, a = new e(3 * t.length / 4 - i), n = 0 < i ? t.length - 4 : t.length;
									var s = 0;

									function f(t) {
										a[s++] = t
									}
									for (r = 0; r < n; r += 4, 0) f((16711680 & (o = u(t.charAt(r)) << 18 | u(t.charAt(r + 1)) << 12 | u(t.charAt(r + 2)) << 6 | u(t.charAt(r + 3)))) >> 16), f((65280 & o) >> 8), f(255 & o);
									return 2 == i ? f(255 & (o = u(t.charAt(r)) << 2 | u(t.charAt(r + 1)) >> 4)) : 1 == i && (f((o = u(t.charAt(r)) << 10 | u(t.charAt(r + 1)) << 4 | u(t.charAt(r + 2)) >> 2) >> 8 & 255), f(255 & o)), a
								}, t.fromByteArray = function(t) {
									var e, r, n, o, i = t.length % 3,
										a = "";

									function c(t) {
										return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)
									}
									for (e = 0, n = t.length - i; e < n; e += 3) a += c((o = r = (t[e] << 16) + (t[e + 1] << 8) + t[e + 2]) >> 18 & 63) + c(o >> 12 & 63) + c(o >> 6 & 63) + c(63 & o);
									switch (i) {
										case 1:
											a += c((r = t[t.length - 1]) >> 2), a += c(r << 4 & 63), a += "==";
											break;
										case 2:
											a += c((r = (t[t.length - 2] << 8) + t[t.length - 1]) >> 10), a += c(r >> 4 & 63), a += c(r << 2 & 63), a += "="
									}
									return a
								}
							}(void 0 === r ? this.base64js = {} : r)
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib")
					}, {
						buffer: 3,
						lYpoI2: 10
					}],
					3: [function(t, e, r) {
						(function(e, n, o, i, a, c, s, u, f) {
							var l = t("base64-js"),
								h = t("ieee754");

							function o(t, e, r) {
								if (!(this instanceof o)) return new o(t, e, r);
								var n, i, a, c, s, u = typeof t;
								if ("base64" === e && "string" == u)
									for (t = (n = t).trim ? n.trim() : n.replace(/^\s+|\s+$/g, ""); t.length % 4 != 0;) t += "=";
								if ("number" == u) i = j(t);
								else if ("string" == u) i = o.byteLength(t, e);
								else {
									if ("object" != u) throw new Error("First argument needs to be a number, array or string.");
									i = j(t.length)
								}
								if (o._useTypedArrays ? a = o._augment(new Uint8Array(i)) : ((a = this).length = i, a._isBuffer = !0), o._useTypedArrays && "number" == typeof t.byteLength) a._set(t);
								else if (C(s = t) || o.isBuffer(s) || s && "object" == typeof s && "number" == typeof s.length)
									for (c = 0; c < i; c++) o.isBuffer(t) ? a[c] = t.readUInt8(c) : a[c] = t[c];
								else if ("string" == u) a.write(t, 0, e);
								else if ("number" == u && !o._useTypedArrays && !r)
									for (c = 0; c < i; c++) a[c] = 0;
								return a
							}

							function d(t, e, r, n) {
								return o._charsWritten = D(function(t) {
									for (var e = [], r = 0; r < t.length; r++) e.push(255 & t.charCodeAt(r));
									return e
								}(e), t, r, n)
							}

							function p(t, e, r, n) {
								return o._charsWritten = D(function(t) {
									for (var e, r, n, o = [], i = 0; i < t.length; i++) r = (e = t.charCodeAt(i)) >> 8, n = e % 256, o.push(n), o.push(r);
									return o
								}(e), t, r, n)
							}

							function m(t, e, r) {
								var n = "";
								r = Math.min(t.length, r);
								for (var o = e; o < r; o++) n += String.fromCharCode(t[o]);
								return n
							}

							function y(t, e, r, n) {
								n || (R("boolean" == typeof r, "missing or invalid endian"), R(null != e, "missing offset"), R(e + 1 < t.length, "Trying to read beyond buffer length"));
								var o, i = t.length;
								if (!(i <= e)) return r ? (o = t[e], e + 1 < i && (o |= t[e + 1] << 8)) : (o = t[e] << 8, e + 1 < i && (o |= t[e + 1])), o
							}

							function v(t, e, r, n) {
								n || (R("boolean" == typeof r, "missing or invalid endian"), R(null != e, "missing offset"), R(e + 3 < t.length, "Trying to read beyond buffer length"));
								var o, i = t.length;
								if (!(i <= e)) return r ? (e + 2 < i && (o = t[e + 2] << 16), e + 1 < i && (o |= t[e + 1] << 8), o |= t[e], e + 3 < i && (o += t[e + 3] << 24 >>> 0)) : (e + 1 < i && (o = t[e + 1] << 16), e + 2 < i && (o |= t[e + 2] << 8), e + 3 < i && (o |= t[e + 3]), o += t[e] << 24 >>> 0), o
							}

							function g(t, e, r, n) {
								if (n || (R("boolean" == typeof r, "missing or invalid endian"), R(null != e, "missing offset"), R(e + 1 < t.length, "Trying to read beyond buffer length")), !(t.length <= e)) {
									var o = y(t, e, r, !0);
									return 32768 & o ? -1 * (65535 - o + 1) : o
								}
							}

							function w(t, e, r, n) {
								if (n || (R("boolean" == typeof r, "missing or invalid endian"), R(null != e, "missing offset"), R(e + 3 < t.length, "Trying to read beyond buffer length")), !(t.length <= e)) {
									var o = v(t, e, r, !0);
									return 2147483648 & o ? -1 * (4294967295 - o + 1) : o
								}
							}

							function b(t, e, r, n) {
								return n || (R("boolean" == typeof r, "missing or invalid endian"), R(e + 3 < t.length, "Trying to read beyond buffer length")), h.read(t, e, r, 23, 4)
							}

							function x(t, e, r, n) {
								return n || (R("boolean" == typeof r, "missing or invalid endian"), R(e + 7 < t.length, "Trying to read beyond buffer length")), h.read(t, e, r, 52, 8)
							}

							function k(t, e, r, n, o) {
								o || (R(null != e, "missing value"), R("boolean" == typeof n, "missing or invalid endian"), R(null != r, "missing offset"), R(r + 1 < t.length, "trying to write beyond buffer length"), N(e, 65535));
								var i = t.length;
								if (!(i <= r))
									for (var a = 0, c = Math.min(i - r, 2); a < c; a++) t[r + a] = (e & 255 << 8 * (n ? a : 1 - a)) >>> 8 * (n ? a : 1 - a)
							}

							function E(t, e, r, n, o) {
								o || (R(null != e, "missing value"), R("boolean" == typeof n, "missing or invalid endian"), R(null != r, "missing offset"), R(r + 3 < t.length, "trying to write beyond buffer length"), N(e, 4294967295));
								var i = t.length;
								if (!(i <= r))
									for (var a = 0, c = Math.min(i - r, 4); a < c; a++) t[r + a] = e >>> 8 * (n ? a : 3 - a) & 255
							}

							function _(t, e, r, n, o) {
								o || (R(null != e, "missing value"), R("boolean" == typeof n, "missing or invalid endian"), R(null != r, "missing offset"), R(r + 1 < t.length, "Trying to write beyond buffer length"), U(e, 32767, -32768)), t.length <= r || k(t, 0 <= e ? e : 65535 + e + 1, r, n, o)
							}

							function L(t, e, r, n, o) {
								o || (R(null != e, "missing value"), R("boolean" == typeof n, "missing or invalid endian"), R(null != r, "missing offset"), R(r + 3 < t.length, "Trying to write beyond buffer length"), U(e, 2147483647, -2147483648)), t.length <= r || E(t, 0 <= e ? e : 4294967295 + e + 1, r, n, o)
							}

							function S(t, e, r, n, o) {
								o || (R(null != e, "missing value"), R("boolean" == typeof n, "missing or invalid endian"), R(null != r, "missing offset"), R(r + 3 < t.length, "Trying to write beyond buffer length"), B(e, 34028234663852886e22, -34028234663852886e22)), t.length <= r || h.write(t, e, r, n, 23, 4)
							}

							function O(t, e, r, n, o) {
								o || (R(null != e, "missing value"), R("boolean" == typeof n, "missing or invalid endian"), R(null != r, "missing offset"), R(r + 7 < t.length, "Trying to write beyond buffer length"), B(e, 17976931348623157e292, -17976931348623157e292)), t.length <= r || h.write(t, e, r, n, 52, 8)
							}
							r.Buffer = o, r.SlowBuffer = o, r.INSPECT_MAX_BYTES = 50, o.poolSize = 8192, o._useTypedArrays = function() {
								try {
									var t = new ArrayBuffer(0),
										e = new Uint8Array(t);
									return e.foo = function() {
										return 42
									}, 42 === e.foo() && "function" == typeof e.subarray
								} catch (t) {
									return !1
								}
							}(), o.isEncoding = function(t) {
								switch (String(t).toLowerCase()) {
									case "hex":
									case "utf8":
									case "utf-8":
									case "ascii":
									case "binary":
									case "base64":
									case "raw":
									case "ucs2":
									case "ucs-2":
									case "utf16le":
									case "utf-16le":
										return !0;
									default:
										return !1
								}
							}, o.isBuffer = function(t) {
								return !(null == t || !t._isBuffer)
							}, o.byteLength = function(t, e) {
								var r;
								switch (t += "", e || "utf8") {
									case "hex":
										r = t.length / 2;
										break;
									case "utf8":
									case "utf-8":
										r = P(t).length;
										break;
									case "ascii":
									case "binary":
									case "raw":
										r = t.length;
										break;
									case "base64":
										r = A(t).length;
										break;
									case "ucs2":
									case "ucs-2":
									case "utf16le":
									case "utf-16le":
										r = 2 * t.length;
										break;
									default:
										throw new Error("Unknown encoding")
								}
								return r
							}, o.concat = function(t, e) {
								if (R(C(t), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === t.length) return new o(0);
								if (1 === t.length) return t[0];
								var r;
								if ("number" != typeof e)
									for (r = e = 0; r < t.length; r++) e += t[r].length;
								var n = new o(e),
									i = 0;
								for (r = 0; r < t.length; r++) {
									var a = t[r];
									a.copy(n, i), i += a.length
								}
								return n
							}, o.prototype.write = function(t, e, r, n) {
								if (isFinite(e)) isFinite(r) || (n = r, r = void 0);
								else {
									var i = n;
									n = e, e = r, r = i
								}
								e = Number(e) || 0;
								var a, c, s, u, f, l, h, m = this.length - e;
								switch ((!r || m < (r = Number(r))) && (r = m), n = String(n || "utf8").toLowerCase()) {
									case "hex":
										a = function(t, e, r, n) {
											r = Number(r) || 0;
											var i = t.length - r;
											(!n || i < (n = Number(n))) && (n = i);
											var a = e.length;
											R(a % 2 == 0, "Invalid hex string"), a / 2 < n && (n = a / 2);
											for (var c = 0; c < n; c++) {
												var s = parseInt(e.substr(2 * c, 2), 16);
												R(!isNaN(s), "Invalid hex string"), t[r + c] = s
											}
											return o._charsWritten = 2 * c, c
										}(this, t, e, r);
										break;
									case "utf8":
									case "utf-8":
										f = this, l = e, h = r, a = o._charsWritten = D(P(t), f, l, h);
										break;
									case "ascii":
									case "binary":
										a = d(this, t, e, r);
										break;
									case "base64":
										c = this, s = e, u = r, a = o._charsWritten = D(A(t), c, s, u);
										break;
									case "ucs2":
									case "ucs-2":
									case "utf16le":
									case "utf-16le":
										a = p(this, t, e, r);
										break;
									default:
										throw new Error("Unknown encoding")
								}
								return a
							}, o.prototype.toString = function(t, e, r) {
								var n, o, i, a, c = this;
								if (t = String(t || "utf8").toLowerCase(), e = Number(e) || 0, (r = void 0 !== r ? Number(r) : r = c.length) === e) return "";
								switch (t) {
									case "hex":
										n = function(t, e, r) {
											var n = t.length;
											(!e || e < 0) && (e = 0), (!r || r < 0 || n < r) && (r = n);
											for (var o = "", i = e; i < r; i++) o += M(t[i]);
											return o
										}(c, e, r);
										break;
									case "utf8":
									case "utf-8":
										n = function(t, e, r) {
											var n = "",
												o = "";
											r = Math.min(t.length, r);
											for (var i = e; i < r; i++) t[i] <= 127 ? (n += $(o) + String.fromCharCode(t[i]), o = "") : o += "%" + t[i].toString(16);
											return n + $(o)
										}(c, e, r);
										break;
									case "ascii":
									case "binary":
										n = m(c, e, r);
										break;
									case "base64":
										o = c, a = r, n = 0 === (i = e) && a === o.length ? l.fromByteArray(o) : l.fromByteArray(o.slice(i, a));
										break;
									case "ucs2":
									case "ucs-2":
									case "utf16le":
									case "utf-16le":
										n = function(t, e, r) {
											for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
											return o
										}(c, e, r);
										break;
									default:
										throw new Error("Unknown encoding")
								}
								return n
							}, o.prototype.toJSON = function() {
								return {
									type: "Buffer",
									data: Array.prototype.slice.call(this._arr || this, 0)
								}
							}, o.prototype.copy = function(t, e, r, n) {
								if (r = r || 0, n || 0 === n || (n = this.length), e = e || 0, n !== r && 0 !== t.length && 0 !== this.length) {
									R(r <= n, "sourceEnd < sourceStart"), R(0 <= e && e < t.length, "targetStart out of bounds"), R(0 <= r && r < this.length, "sourceStart out of bounds"), R(0 <= n && n <= this.length, "sourceEnd out of bounds"), n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
									var i = n - r;
									if (i < 100 || !o._useTypedArrays)
										for (var a = 0; a < i; a++) t[a + e] = this[a + r];
									else t._set(this.subarray(r, r + i), e)
								}
							}, o.prototype.slice = function(t, e) {
								var r = this.length;
								if (t = T(t, r, 0), e = T(e, r, r), o._useTypedArrays) return o._augment(this.subarray(t, e));
								for (var n = e - t, i = new o(n, void 0, !0), a = 0; a < n; a++) i[a] = this[a + t];
								return i
							}, o.prototype.get = function(t) {
								return this.readUInt8(t)
							}, o.prototype.set = function(t, e) {
								return this.writeUInt8(t, e)
							}, o.prototype.readUInt8 = function(t, e) {
								if (e || (R(null != t, "missing offset"), R(t < this.length, "Trying to read beyond buffer length")), !(t >= this.length)) return this[t]
							}, o.prototype.readUInt16LE = function(t, e) {
								return y(this, t, !0, e)
							}, o.prototype.readUInt16BE = function(t, e) {
								return y(this, t, !1, e)
							}, o.prototype.readUInt32LE = function(t, e) {
								return v(this, t, !0, e)
							}, o.prototype.readUInt32BE = function(t, e) {
								return v(this, t, !1, e)
							}, o.prototype.readInt8 = function(t, e) {
								if (e || (R(null != t, "missing offset"), R(t < this.length, "Trying to read beyond buffer length")), !(t >= this.length)) return 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
							}, o.prototype.readInt16LE = function(t, e) {
								return g(this, t, !0, e)
							}, o.prototype.readInt16BE = function(t, e) {
								return g(this, t, !1, e)
							}, o.prototype.readInt32LE = function(t, e) {
								return w(this, t, !0, e)
							}, o.prototype.readInt32BE = function(t, e) {
								return w(this, t, !1, e)
							}, o.prototype.readFloatLE = function(t, e) {
								return b(this, t, !0, e)
							}, o.prototype.readFloatBE = function(t, e) {
								return b(this, t, !1, e)
							}, o.prototype.readDoubleLE = function(t, e) {
								return x(this, t, !0, e)
							}, o.prototype.readDoubleBE = function(t, e) {
								return x(this, t, !1, e)
							}, o.prototype.writeUInt8 = function(t, e, r) {
								r || (R(null != t, "missing value"), R(null != e, "missing offset"), R(e < this.length, "trying to write beyond buffer length"), N(t, 255)), e >= this.length || (this[e] = t)
							}, o.prototype.writeUInt16LE = function(t, e, r) {
								k(this, t, e, !0, r)
							}, o.prototype.writeUInt16BE = function(t, e, r) {
								k(this, t, e, !1, r)
							}, o.prototype.writeUInt32LE = function(t, e, r) {
								E(this, t, e, !0, r)
							}, o.prototype.writeUInt32BE = function(t, e, r) {
								E(this, t, e, !1, r)
							}, o.prototype.writeInt8 = function(t, e, r) {
								r || (R(null != t, "missing value"), R(null != e, "missing offset"), R(e < this.length, "Trying to write beyond buffer length"), U(t, 127, -128)), e >= this.length || (0 <= t ? this.writeUInt8(t, e, r) : this.writeUInt8(255 + t + 1, e, r))
							}, o.prototype.writeInt16LE = function(t, e, r) {
								_(this, t, e, !0, r)
							}, o.prototype.writeInt16BE = function(t, e, r) {
								_(this, t, e, !1, r)
							}, o.prototype.writeInt32LE = function(t, e, r) {
								L(this, t, e, !0, r)
							}, o.prototype.writeInt32BE = function(t, e, r) {
								L(this, t, e, !1, r)
							}, o.prototype.writeFloatLE = function(t, e, r) {
								S(this, t, e, !0, r)
							}, o.prototype.writeFloatBE = function(t, e, r) {
								S(this, t, e, !1, r)
							}, o.prototype.writeDoubleLE = function(t, e, r) {
								O(this, t, e, !0, r)
							}, o.prototype.writeDoubleBE = function(t, e, r) {
								O(this, t, e, !1, r)
							}, o.prototype.fill = function(t, e, r) {
								if (t = t || 0, e = e || 0, r = r || this.length, "string" == typeof t && (t = t.charCodeAt(0)), R("number" == typeof t && !isNaN(t), "value is not a number"), R(e <= r, "end < start"), r !== e && 0 !== this.length) {
									R(0 <= e && e < this.length, "start out of bounds"), R(0 <= r && r <= this.length, "end out of bounds");
									for (var n = e; n < r; n++) this[n] = t
								}
							}, o.prototype.inspect = function() {
								for (var t = [], e = this.length, n = 0; n < e; n++)
									if (t[n] = M(this[n]), n === r.INSPECT_MAX_BYTES) {
										t[n + 1] = "...";
										break
									} return "<Buffer " + t.join(" ") + ">"
							}, o.prototype.toArrayBuffer = function() {
								if ("undefined" == typeof Uint8Array) throw new Error("Buffer.toArrayBuffer not supported in this browser");
								if (o._useTypedArrays) return new o(this).buffer;
								for (var t = new Uint8Array(this.length), e = 0, r = t.length; e < r; e += 1) t[e] = this[e];
								return t.buffer
							};
							var I = o.prototype;

							function T(t, e, r) {
								return "number" != typeof t ? r : e <= (t = ~~t) ? e : 0 <= t || 0 <= (t += e) ? t : 0
							}

							function j(t) {
								return (t = ~~Math.ceil(+t)) < 0 ? 0 : t
							}

							function C(t) {
								return (Array.isArray || function(t) {
									return "[object Array]" === Object.prototype.toString.call(t)
								})(t)
							}

							function M(t) {
								return t < 16 ? "0" + t.toString(16) : t.toString(16)
							}

							function P(t) {
								for (var e = [], r = 0; r < t.length; r++) {
									var n = t.charCodeAt(r);
									if (n <= 127) e.push(t.charCodeAt(r));
									else {
										var o = r;
										55296 <= n && n <= 57343 && r++;
										for (var i = encodeURIComponent(t.slice(o, r + 1)).substr(1).split("%"), a = 0; a < i.length; a++) e.push(parseInt(i[a], 16))
									}
								}
								return e
							}

							function A(t) {
								return l.toByteArray(t)
							}

							function D(t, e, r, n) {
								for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); o++) e[o + r] = t[o];
								return o
							}

							function $(t) {
								try {
									return decodeURIComponent(t)
								} catch (t) {
									return String.fromCharCode(65533)
								}
							}

							function N(t, e) {
								R("number" == typeof t, "cannot write a non-number as a number"), R(0 <= t, "specified a negative value for writing an unsigned value"), R(t <= e, "value is larger than maximum value for type"), R(Math.floor(t) === t, "value has a fractional component")
							}

							function U(t, e, r) {
								R("number" == typeof t, "cannot write a non-number as a number"), R(t <= e, "value larger than maximum allowed value"), R(r <= t, "value smaller than minimum allowed value"), R(Math.floor(t) === t, "value has a fractional component")
							}

							function B(t, e, r) {
								R("number" == typeof t, "cannot write a non-number as a number"), R(t <= e, "value larger than maximum allowed value"), R(r <= t, "value smaller than minimum allowed value")
							}

							function R(t, e) {
								if (!t) throw new Error(e || "Failed assertion")
							}
							o._augment = function(t) {
								return t._isBuffer = !0, t._get = t.get, t._set = t.set, t.get = I.get, t.set = I.set, t.write = I.write, t.toString = I.toString, t.toLocaleString = I.toString, t.toJSON = I.toJSON, t.copy = I.copy, t.slice = I.slice, t.readUInt8 = I.readUInt8, t.readUInt16LE = I.readUInt16LE, t.readUInt16BE = I.readUInt16BE, t.readUInt32LE = I.readUInt32LE, t.readUInt32BE = I.readUInt32BE, t.readInt8 = I.readInt8, t.readInt16LE = I.readInt16LE, t.readInt16BE = I.readInt16BE, t.readInt32LE = I.readInt32LE, t.readInt32BE = I.readInt32BE, t.readFloatLE = I.readFloatLE, t.readFloatBE = I.readFloatBE, t.readDoubleLE = I.readDoubleLE, t.readDoubleBE = I.readDoubleBE, t.writeUInt8 = I.writeUInt8, t.writeUInt16LE = I.writeUInt16LE, t.writeUInt16BE = I.writeUInt16BE, t.writeUInt32LE = I.writeUInt32LE, t.writeUInt32BE = I.writeUInt32BE, t.writeInt8 = I.writeInt8, t.writeInt16LE = I.writeInt16LE, t.writeInt16BE = I.writeInt16BE, t.writeInt32LE = I.writeInt32LE, t.writeInt32BE = I.writeInt32BE, t.writeFloatLE = I.writeFloatLE, t.writeFloatBE = I.writeFloatBE, t.writeDoubleLE = I.writeDoubleLE, t.writeDoubleBE = I.writeDoubleBE, t.fill = I.fill, t.inspect = I.inspect, t.toArrayBuffer = I.toArrayBuffer, t
							}
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer")
					}, {
						"base64-js": 2,
						buffer: 3,
						ieee754: 11,
						lYpoI2: 10
					}],
					4: [function(t, e, r) {
						(function(r, n, o, i, a, c, s, u, f) {
							o = t("buffer").Buffer;
							var l = 4,
								h = new o(l);
							h.fill(0), e.exports = {
								hash: function(t, e, r, n) {
									return o.isBuffer(t) || (t = new o(t)),
										function(t, e, r) {
											for (var n = new o(e), i = r ? n.writeInt32BE : n.writeInt32LE, a = 0; a < t.length; a++) i.call(n, t[a], 4 * a, !0);
											return n
										}(e(function(t, e) {
											if (t.length % l != 0) {
												var r = t.length + (l - t.length % l);
												t = o.concat([t, h], r)
											}
											for (var n = [], i = e ? t.readInt32BE : t.readInt32LE, a = 0; a < t.length; a += l) n.push(i.call(t, a));
											return n
										}(t, n), 8 * t.length), r, n)
								}
							}
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
					}, {
						buffer: 3,
						lYpoI2: 10
					}],
					5: [function(t, e, r) {
						(function(e, n, o, i, a, c, s, u, f) {
							o = t("buffer").Buffer;
							var l = t("./sha"),
								h = t("./sha256"),
								d = t("./rng"),
								p = {
									sha1: l,
									sha256: h,
									md5: t("./md5")
								},
								m = 64,
								y = new o(m);

							function v(t, e) {
								var r = p[t = t || "sha1"],
									n = [];
								return r || g("algorithm:", t, "is not yet supported"), {
									update: function(t) {
										return o.isBuffer(t) || (t = new o(t)), n.push(t), t.length, this
									},
									digest: function(t) {
										var i = o.concat(n),
											a = e ? function(t, e, r) {
												o.isBuffer(e) || (e = new o(e)), o.isBuffer(r) || (r = new o(r)), e.length > m ? e = t(e) : e.length < m && (e = o.concat([e, y], m));
												for (var n = new o(m), i = new o(m), a = 0; a < m; a++) n[a] = 54 ^ e[a], i[a] = 92 ^ e[a];
												var c = t(o.concat([n, r]));
												return t(o.concat([i, c]))
											}(r, e, i) : r(i);
										return n = null, t ? a.toString(t) : a
									}
								}
							}

							function g() {
								var t = [].slice.call(arguments).join(" ");
								throw new Error([t, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"))
							}
							y.fill(0), r.createHash = function(t) {
									return v(t)
								}, r.createHmac = function(t, e) {
									return v(t, e)
								}, r.randomBytes = function(t, e) {
									if (!e || !e.call) return new o(d(t));
									try {
										e.call(this, void 0, new o(d(t)))
									} catch (t) {
										e(t)
									}
								},
								function(t, e) {
									for (var r in t) e(t[r], r)
								}(["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], (function(t) {
									r[t] = function() {
										g("sorry,", t, "is not implemented yet")
									}
								}))
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
					}, {
						"./md5": 6,
						"./rng": 7,
						"./sha": 8,
						"./sha256": 9,
						buffer: 3,
						lYpoI2: 10
					}],
					6: [function(t, e, r) {
						(function(r, n, o, i, a, c, s, u, f) {
							var l = t("./helpers");

							function h(t, e) {
								t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
								for (var r = 1732584193, n = -271733879, o = -1732584194, i = 271733878, a = 0; a < t.length; a += 16) {
									var c = r,
										s = n,
										u = o,
										f = i;
									r = p(r, n, o, i, t[a + 0], 7, -680876936), i = p(i, r, n, o, t[a + 1], 12, -389564586), o = p(o, i, r, n, t[a + 2], 17, 606105819), n = p(n, o, i, r, t[a + 3], 22, -1044525330), r = p(r, n, o, i, t[a + 4], 7, -176418897), i = p(i, r, n, o, t[a + 5], 12, 1200080426), o = p(o, i, r, n, t[a + 6], 17, -1473231341), n = p(n, o, i, r, t[a + 7], 22, -45705983), r = p(r, n, o, i, t[a + 8], 7, 1770035416), i = p(i, r, n, o, t[a + 9], 12, -1958414417), o = p(o, i, r, n, t[a + 10], 17, -42063), n = p(n, o, i, r, t[a + 11], 22, -1990404162), r = p(r, n, o, i, t[a + 12], 7, 1804603682), i = p(i, r, n, o, t[a + 13], 12, -40341101), o = p(o, i, r, n, t[a + 14], 17, -1502002290), r = m(r, n = p(n, o, i, r, t[a + 15], 22, 1236535329), o, i, t[a + 1], 5, -165796510), i = m(i, r, n, o, t[a + 6], 9, -1069501632), o = m(o, i, r, n, t[a + 11], 14, 643717713), n = m(n, o, i, r, t[a + 0], 20, -373897302), r = m(r, n, o, i, t[a + 5], 5, -701558691), i = m(i, r, n, o, t[a + 10], 9, 38016083), o = m(o, i, r, n, t[a + 15], 14, -660478335), n = m(n, o, i, r, t[a + 4], 20, -405537848), r = m(r, n, o, i, t[a + 9], 5, 568446438), i = m(i, r, n, o, t[a + 14], 9, -1019803690), o = m(o, i, r, n, t[a + 3], 14, -187363961), n = m(n, o, i, r, t[a + 8], 20, 1163531501), r = m(r, n, o, i, t[a + 13], 5, -1444681467), i = m(i, r, n, o, t[a + 2], 9, -51403784), o = m(o, i, r, n, t[a + 7], 14, 1735328473), r = y(r, n = m(n, o, i, r, t[a + 12], 20, -1926607734), o, i, t[a + 5], 4, -378558), i = y(i, r, n, o, t[a + 8], 11, -2022574463), o = y(o, i, r, n, t[a + 11], 16, 1839030562), n = y(n, o, i, r, t[a + 14], 23, -35309556), r = y(r, n, o, i, t[a + 1], 4, -1530992060), i = y(i, r, n, o, t[a + 4], 11, 1272893353), o = y(o, i, r, n, t[a + 7], 16, -155497632), n = y(n, o, i, r, t[a + 10], 23, -1094730640), r = y(r, n, o, i, t[a + 13], 4, 681279174), i = y(i, r, n, o, t[a + 0], 11, -358537222), o = y(o, i, r, n, t[a + 3], 16, -722521979), n = y(n, o, i, r, t[a + 6], 23, 76029189), r = y(r, n, o, i, t[a + 9], 4, -640364487), i = y(i, r, n, o, t[a + 12], 11, -421815835), o = y(o, i, r, n, t[a + 15], 16, 530742520), r = v(r, n = y(n, o, i, r, t[a + 2], 23, -995338651), o, i, t[a + 0], 6, -198630844), i = v(i, r, n, o, t[a + 7], 10, 1126891415), o = v(o, i, r, n, t[a + 14], 15, -1416354905), n = v(n, o, i, r, t[a + 5], 21, -57434055), r = v(r, n, o, i, t[a + 12], 6, 1700485571), i = v(i, r, n, o, t[a + 3], 10, -1894986606), o = v(o, i, r, n, t[a + 10], 15, -1051523), n = v(n, o, i, r, t[a + 1], 21, -2054922799), r = v(r, n, o, i, t[a + 8], 6, 1873313359), i = v(i, r, n, o, t[a + 15], 10, -30611744), o = v(o, i, r, n, t[a + 6], 15, -1560198380), n = v(n, o, i, r, t[a + 13], 21, 1309151649), r = v(r, n, o, i, t[a + 4], 6, -145523070), i = v(i, r, n, o, t[a + 11], 10, -1120210379), o = v(o, i, r, n, t[a + 2], 15, 718787259), n = v(n, o, i, r, t[a + 9], 21, -343485551), r = g(r, c), n = g(n, s), o = g(o, u), i = g(i, f)
								}
								return Array(r, n, o, i)
							}

							function d(t, e, r, n, o, i) {
								return g((a = g(g(e, t), g(n, i))) << (c = o) | a >>> 32 - c, r);
								var a, c
							}

							function p(t, e, r, n, o, i, a) {
								return d(e & r | ~e & n, t, e, o, i, a)
							}

							function m(t, e, r, n, o, i, a) {
								return d(e & n | r & ~n, t, e, o, i, a)
							}

							function y(t, e, r, n, o, i, a) {
								return d(e ^ r ^ n, t, e, o, i, a)
							}

							function v(t, e, r, n, o, i, a) {
								return d(r ^ (e | ~n), t, e, o, i, a)
							}

							function g(t, e) {
								var r = (65535 & t) + (65535 & e);
								return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
							}
							e.exports = function(t) {
								return l.hash(t, h, 16)
							}
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
					}, {
						"./helpers": 4,
						buffer: 3,
						lYpoI2: 10
					}],
					7: [function(t, e, r) {
						(function(t, r, n, o, i, a, c, s, u) {
							var f, l;
							f = function(t) {
								for (var e, r = new Array(t), n = 0; n < t; n++) 0 == (3 & n) && (e = 4294967296 * Math.random()), r[n] = e >>> ((3 & n) << 3) & 255;
								return r
							}, e.exports = l || f
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
					}, {
						buffer: 3,
						lYpoI2: 10
					}],
					8: [function(t, e, r) {
						(function(r, n, o, i, a, c, s, u, f) {
							var l = t("./helpers");

							function h(t, e) {
								t[e >> 5] |= 128 << 24 - e % 32, t[15 + (e + 64 >> 9 << 4)] = e;
								for (var r, n = Array(80), o = 1732584193, i = -271733879, a = -1732584194, c = 271733878, s = -1009589776, u = 0; u < t.length; u += 16) {
									for (var f = o, l = i, h = a, y = c, v = s, g = 0; g < 80; g++) {
										n[g] = g < 16 ? t[u + g] : m(n[g - 3] ^ n[g - 8] ^ n[g - 14] ^ n[g - 16], 1);
										var w = p(p(m(o, 5), d(g, i, a, c)), p(p(s, n[g]), (r = g) < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514));
										s = c, c = a, a = m(i, 30), i = o, o = w
									}
									o = p(o, f), i = p(i, l), a = p(a, h), c = p(c, y), s = p(s, v)
								}
								return Array(o, i, a, c, s)
							}

							function d(t, e, r, n) {
								return t < 20 ? e & r | ~e & n : !(t < 40) && t < 60 ? e & r | e & n | r & n : e ^ r ^ n
							}

							function p(t, e) {
								var r = (65535 & t) + (65535 & e);
								return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
							}

							function m(t, e) {
								return t << e | t >>> 32 - e
							}
							e.exports = function(t) {
								return l.hash(t, h, 20, !0)
							}
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
					}, {
						"./helpers": 4,
						buffer: 3,
						lYpoI2: 10
					}],
					9: [function(t, e, r) {
						(function(r, n, o, i, a, c, s, u, f) {
							function l(t, e) {
								var r = (65535 & t) + (65535 & e);
								return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
							}

							function h(t, e) {
								return t >>> e | t << 32 - e
							}

							function d(t, e) {
								return t >>> e
							}

							function p(t, e) {
								var r, n, o, i, a, c, s, u, f, p, m, y, v, g, w, b, x, k, E = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
									_ = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
									L = new Array(64);
								t[e >> 5] |= 128 << 24 - e % 32, t[15 + (e + 64 >> 9 << 4)] = e;
								for (var S = 0; S < t.length; S += 16) {
									r = _[0], n = _[1], o = _[2], i = _[3], a = _[4], c = _[5], s = _[6], u = _[7];
									for (var O = 0; O < 64; O++) L[O] = O < 16 ? t[O + S] : l(l(l(h(k = L[O - 2], 17) ^ h(k, 19) ^ d(k, 10), L[O - 7]), h(x = L[O - 15], 7) ^ h(x, 18) ^ d(x, 3)), L[O - 16]), f = l(l(l(l(u, h(b = a, 6) ^ h(b, 11) ^ h(b, 25)), (w = a) & c ^ ~w & s), E[O]), L[O]), p = l(h(g = r, 2) ^ h(g, 13) ^ h(g, 22), (m = r) & (y = n) ^ m & (v = o) ^ y & v), u = s, s = c, c = a, a = l(i, f), i = o, o = n, n = r, r = l(f, p);
									_[0] = l(r, _[0]), _[1] = l(n, _[1]), _[2] = l(o, _[2]), _[3] = l(i, _[3]), _[4] = l(a, _[4]), _[5] = l(c, _[5]), _[6] = l(s, _[6]), _[7] = l(u, _[7])
								}
								return _
							}
							var m = t("./helpers");
							e.exports = function(t) {
								return m.hash(t, p, 32, !0)
							}
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
					}, {
						"./helpers": 4,
						buffer: 3,
						lYpoI2: 10
					}],
					10: [function(t, e, r) {
						(function(t, r, n, o, i, a, c, s, u) {
							function f() {}(t = e.exports = {}).nextTick = function() {
								var t = "undefined" != typeof window && window.setImmediate,
									e = "undefined" != typeof window && window.postMessage && window.addEventListener;
								if (t) return function(t) {
									return window.setImmediate(t)
								};
								if (e) {
									var r = [];
									return window.addEventListener("message", (function(t) {
											var e = t.source;
											e !== window && null !== e || "process-tick" !== t.data || (t.stopPropagation(), 0 < r.length && r.shift()())
										}), !0),
										function(t) {
											r.push(t), window.postMessage("process-tick", "*")
										}
								}
								return function(t) {
									setTimeout(t, 0)
								}
							}(), t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.on = f, t.addListener = f, t.once = f, t.off = f, t.removeListener = f, t.removeAllListeners = f, t.emit = f, t.binding = function(t) {
								throw new Error("process.binding is not supported")
							}, t.cwd = function() {
								return "/"
							}, t.chdir = function(t) {
								throw new Error("process.chdir is not supported")
							}
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process")
					}, {
						buffer: 3,
						lYpoI2: 10
					}],
					11: [function(t, e, r) {
						(function(t, e, n, o, i, a, c, s, u) {
							r.read = function(t, e, r, n, o) {
								var i, a, c = 8 * o - n - 1,
									s = (1 << c) - 1,
									u = s >> 1,
									f = -7,
									l = r ? o - 1 : 0,
									h = r ? -1 : 1,
									d = t[e + l];
								for (l += h, i = d & (1 << -f) - 1, d >>= -f, f += c; 0 < f; i = 256 * i + t[e + l], l += h, f -= 8);
								for (a = i & (1 << -f) - 1, i >>= -f, f += n; 0 < f; a = 256 * a + t[e + l], l += h, f -= 8);
								if (0 === i) i = 1 - u;
								else {
									if (i === s) return a ? NaN : 1 / 0 * (d ? -1 : 1);
									a += Math.pow(2, n), i -= u
								}
								return (d ? -1 : 1) * a * Math.pow(2, i - n)
							}, r.write = function(t, e, r, n, o, i) {
								var a, c, s, u = 8 * i - o - 1,
									f = (1 << u) - 1,
									l = f >> 1,
									h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
									d = n ? 0 : i - 1,
									p = n ? 1 : -1,
									m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
								for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, a = f) : (a = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), 2 <= (e += 1 <= a + l ? h / s : h * Math.pow(2, 1 - l)) * s && (a++, s /= 2), f <= a + l ? (c = 0, a = f) : 1 <= a + l ? (c = (e * s - 1) * Math.pow(2, o), a += l) : (c = e * Math.pow(2, l - 1) * Math.pow(2, o), a = 0)); 8 <= o; t[r + d] = 255 & c, d += p, c /= 256, o -= 8);
								for (a = a << o | c, u += o; 0 < u; t[r + d] = 255 & a, d += p, a /= 256, u -= 8);
								t[r + d - p] |= 128 * m
							}
						}).call(this, t("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/ieee754/index.js", "/node_modules/ieee754")
					}, {
						buffer: 3,
						lYpoI2: 10
					}]
				}, {}, [1])(1)
			}
		},
		r = {};

	function n(e) {
		var o = r[e];
		if (void 0 !== o) return o.exports;
		var i = r[e] = {
			exports: {}
		};
		return t[e].call(i.exports, i, i.exports, n), i.exports
	}(() => {
		var t = n(27484),
			e = n(37412),
			r = n(79212),
			o = n(28734),
			i = n(10285),
			a = n(6833),
			c = n(172),
			s = n(55183),
			u = n(34425),
			f = n(96036),
			l = n(56176),
			h = n(70178),
			d = n(1646);
		t.extend(e), t.extend(r), t.extend(o), t.extend(i), t.extend(a), t.extend(c), t.extend(s), t.extend(u), t.extend(f), t.extend(l), t.extend(h), t.extend(d);
		var p = n(40873);
		t.extend(p)
	})(), (() => {
		"use strict";

		function t(t, e) {
			var r = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t);
				e && (n = n.filter((function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), r.push.apply(r, n)
			}
			return r
		}

		function r(e) {
			for (var r = 1; r < arguments.length; r++) {
				var n = null != arguments[r] ? arguments[r] : {};
				r % 2 ? t(Object(n), !0).forEach((function(t) {
					c(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function o() {
			o = function() {
				return t
			};
			var t = {},
				e = Object.prototype,
				r = e.hasOwnProperty,
				n = Object.defineProperty || function(t, e, r) {
					t[e] = r.value
				},
				i = "function" == typeof Symbol ? Symbol : {},
				a = i.iterator || "@@iterator",
				c = i.asyncIterator || "@@asyncIterator",
				u = i.toStringTag || "@@toStringTag";

			function f(t, e, r) {
				return Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				f({}, "")
			} catch (t) {
				f = function(t, e, r) {
					return t[e] = r
				}
			}

			function l(t, e, r, o) {
				var i = e && e.prototype instanceof p ? e : p,
					a = Object.create(i.prototype),
					c = new O(o || []);
				return n(a, "_invoke", {
					value: E(t, r, c)
				}), a
			}

			function h(t, e, r) {
				try {
					return {
						type: "normal",
						arg: t.call(e, r)
					}
				} catch (t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			t.wrap = l;
			var d = {};

			function p() {}

			function m() {}

			function y() {}
			var v = {};
			f(v, a, (function() {
				return this
			}));
			var g = Object.getPrototypeOf,
				w = g && g(g(I([])));
			w && w !== e && r.call(w, a) && (v = w);
			var b = y.prototype = p.prototype = Object.create(v);

			function x(t) {
				["next", "throw", "return"].forEach((function(e) {
					f(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function k(t, e) {
				function o(n, i, a, c) {
					var u = h(t[n], t, i);
					if ("throw" !== u.type) {
						var f = u.arg,
							l = f.value;
						return l && "object" == s(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
							o("next", t, a, c)
						}), (function(t) {
							o("throw", t, a, c)
						})) : e.resolve(l).then((function(t) {
							f.value = t, a(f)
						}), (function(t) {
							return o("throw", t, a, c)
						}))
					}
					c(u.arg)
				}
				var i;
				n(this, "_invoke", {
					value: function(t, r) {
						function n() {
							return new e((function(e, n) {
								o(t, r, e, n)
							}))
						}
						return i = i ? i.then(n, n) : n()
					}
				})
			}

			function E(t, e, r) {
				var n = "suspendedStart";
				return function(o, i) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw i;
						return T()
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var c = _(a, r);
							if (c) {
								if (c === d) continue;
								return c
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var s = h(t, e, r);
						if ("normal" === s.type) {
							if (n = r.done ? "completed" : "suspendedYield", s.arg === d) continue;
							return {
								value: s.arg,
								done: r.done
							}
						}
						"throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
					}
				}
			}

			function _(t, e) {
				var r = e.method,
					n = t.iterator[r];
				if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), d;
				var o = h(n, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, d;
				var i = o.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
			}

			function L(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function S(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function O(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(L, this), this.reset(!0)
			}

			function I(t) {
				if (t) {
					var e = t[a];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							o = function e() {
								for (; ++n < t.length;)
									if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: T
				}
			}

			function T() {
				return {
					value: void 0,
					done: !0
				}
			}
			return m.prototype = y, n(b, "constructor", {
				value: y,
				configurable: !0
			}), n(y, "constructor", {
				value: m,
				configurable: !0
			}), m.displayName = f(y, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, f(t, u, "GeneratorFunction")), t.prototype = Object.create(b), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, x(k.prototype), f(k.prototype, c, (function() {
				return this
			})), t.AsyncIterator = k, t.async = function(e, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new k(l(e, r, n, o), i);
				return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, x(b), f(b, u, "Generator"), f(b, a, (function() {
				return this
			})), f(b, "toString", (function() {
				return "[object Generator]"
			})), t.keys = function(t) {
				var e = Object(t),
					r = [];
				for (var n in e) r.push(n);
				return r.reverse(),
					function t() {
						for (; r.length;) {
							var n = r.pop();
							if (n in e) return t.value = n, t.done = !1, t
						}
						return t.done = !0, t
					}
			}, t.values = I, O.prototype = {
				constructor: O,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
						for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function n(r, n) {
						return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o],
							a = i.completion;
						if ("root" === i.tryLoc) return n("end");
						if (i.tryLoc <= this.prev) {
							var c = r.call(i, "catchLoc"),
								s = r.call(i, "finallyLoc");
							if (c && s) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							} else if (c) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), d
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.tryLoc === t) {
							var n = r.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								S(r)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, r) {
					return this.delegate = {
						iterator: I(t),
						resultName: e,
						nextLoc: r
					}, "next" === this.method && (this.arg = void 0), d
				}
			}, t
		}

		function i(t, e, r, n, o, i, a) {
			try {
				var c = t[i](a),
					s = c.value
			} catch (t) {
				return void r(t)
			}
			c.done ? e(s) : Promise.resolve(s).then(n, o)
		}

		function a(t) {
			return function() {
				var e = this,
					r = arguments;
				return new Promise((function(n, o) {
					var a = t.apply(e, r);

					function c(t) {
						i(a, n, o, c, s, "next", t)
					}

					function s(t) {
						i(a, n, o, c, s, "throw", t)
					}
					c(void 0)
				}))
			}
		}

		function c(t, e, r) {
			return (e = function(t) {
				var e = function(t, e) {
					if ("object" !== s(t) || null === t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(t, e || "default");
						if ("object" !== s(n)) return n;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === e ? String : Number)(t)
				}(t, "string");
				return "symbol" === s(e) ? e : String(e)
			}(e)) in t ? Object.defineProperty(t, e, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = r, t
		}

		function s(t) {
			return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, s(t)
		}

		function u(t, e) {
			return new Promise((function(r, n) {
				var o = null;
				if ("object" === s(t)) o = t;
				else {
					if ("string" != typeof t) throw "TypeError: First argument should be a string or an object.";
					o = c({}, t, e)
				}
				chrome.storage.local.set(o, (function() {
					return chrome.runtime.lastError ? n(chrome.runtime.lastError) : r()
				}))
			}))
		}

		function f(t) {
			return new Promise((function(e, r) {
				"string" == typeof t ? chrome.storage.local.get([t], (function(r) {
					e(r[t])
				})) : Array.isArray(t) ? chrome.storage.local.get(null, (function(r) {
					e(t.map((function(t) {
						return r[t]
					})))
				})) : t || chrome.storage.local.get(null, (function(t) {
					e(t)
				}))
			}))
		}

		function l(t) {
			return h.apply(this, arguments)
		}

		function h() {
			return (h = a(o().mark((function t(e) {
				return o().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.abrupt("return", new Promise((function(t) {
								chrome.storage.local.get("options", (function(r) {
									t(e ? r.options[e] : r.options)
								}))
							})));
						case 1:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function d() {
			return (d = a(o().mark((function t(e, n) {
				var i, a;
				return o().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, f(e);
						case 2:
							i = t.sent, a = r(r({}, i), n), u(e, a);
						case 5:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}
		n(27484), n(9669), n(40705);

		function p(t) {
			return new Promise((function(e, r) {
				chrome.cookies.get({
					url: t,
					name: "screenshot_personal_uid"
				}, (function(t) {
					t ? e(t) : e()
				}))
			}))
		}

		function m() {
			var t = navigator.userAgent,
				e = t.indexOf("Chrome/"),
				r = t.substring(e + 7, t.length),
				n = r.indexOf("."),
				o = r.substring(0, n);
			return parseInt(o) < 116
		}

		function y(t) {
			var e, r;
			e = {}, r = function(e) {
				var r = {
					url: t
				};
				e && e.incognito || !e ? chrome.windows.getAll((function(t) {
					t.forEach((function(t) {
						t.incognito || "normal" !== t.type || (r.windowId = t.id)
					})), v(r)
				})) : (r.index = (e ? e.index : currentTabIndex || 0) + 1, r.windowId = e ? e.windowId : currentWindowId, v(r))
			}, chrome.tabs.query(Object.assign({
				active: !0
			}, e), (function(t) {
				r(t[0])
			}))
		}

		function v(t) {
			t && t.url && (t.hasOwnProperty("index") && !t.index && delete t.index, chrome.tabs.create(t, (function(t) {
				chrome.windows.update(t.windowId, {
					focused: !0
				})
			})))
		}
		var g;
		Math.pow(2, 31);

		function w(t) {
			return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, w(t)
		}

		function b(t, e) {
			var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
			if (!r) {
				if (Array.isArray(t) || (r = function(t, e) {
						if (!t) return;
						if ("string" == typeof t) return x(t, e);
						var r = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === r && t.constructor && (r = t.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(t);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return x(t, e)
					}(t)) || e && t && "number" == typeof t.length) {
					r && (t = r);
					var n = 0,
						o = function() {};
					return {
						s: o,
						n: function() {
							return n >= t.length ? {
								done: !0
							} : {
								done: !1,
								value: t[n++]
							}
						},
						e: function(t) {
							throw t
						},
						f: o
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var i, a = !0,
				c = !1;
			return {
				s: function() {
					r = r.call(t)
				},
				n: function() {
					var t = r.next();
					return a = t.done, t
				},
				e: function(t) {
					c = !0, i = t
				},
				f: function() {
					try {
						a || null == r.return || r.return()
					} finally {
						if (c) throw i
					}
				}
			}
		}

		function x(t, e) {
			(null == e || e > t.length) && (e = t.length);
			for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
			return n
		}

		function k() {
			k = function() {
				return t
			};
			var t = {},
				e = Object.prototype,
				r = e.hasOwnProperty,
				n = Object.defineProperty || function(t, e, r) {
					t[e] = r.value
				},
				o = "function" == typeof Symbol ? Symbol : {},
				i = o.iterator || "@@iterator",
				a = o.asyncIterator || "@@asyncIterator",
				c = o.toStringTag || "@@toStringTag";

			function s(t, e, r) {
				return Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				s({}, "")
			} catch (t) {
				s = function(t, e, r) {
					return t[e] = r
				}
			}

			function u(t, e, r, o) {
				var i = e && e.prototype instanceof h ? e : h,
					a = Object.create(i.prototype),
					c = new O(o || []);
				return n(a, "_invoke", {
					value: E(t, r, c)
				}), a
			}

			function f(t, e, r) {
				try {
					return {
						type: "normal",
						arg: t.call(e, r)
					}
				} catch (t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			t.wrap = u;
			var l = {};

			function h() {}

			function d() {}

			function p() {}
			var m = {};
			s(m, i, (function() {
				return this
			}));
			var y = Object.getPrototypeOf,
				v = y && y(y(I([])));
			v && v !== e && r.call(v, i) && (m = v);
			var g = p.prototype = h.prototype = Object.create(m);

			function b(t) {
				["next", "throw", "return"].forEach((function(e) {
					s(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function x(t, e) {
				function o(n, i, a, c) {
					var s = f(t[n], t, i);
					if ("throw" !== s.type) {
						var u = s.arg,
							l = u.value;
						return l && "object" == w(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
							o("next", t, a, c)
						}), (function(t) {
							o("throw", t, a, c)
						})) : e.resolve(l).then((function(t) {
							u.value = t, a(u)
						}), (function(t) {
							return o("throw", t, a, c)
						}))
					}
					c(s.arg)
				}
				var i;
				n(this, "_invoke", {
					value: function(t, r) {
						function n() {
							return new e((function(e, n) {
								o(t, r, e, n)
							}))
						}
						return i = i ? i.then(n, n) : n()
					}
				})
			}

			function E(t, e, r) {
				var n = "suspendedStart";
				return function(o, i) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw i;
						return T()
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var c = _(a, r);
							if (c) {
								if (c === l) continue;
								return c
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var s = f(t, e, r);
						if ("normal" === s.type) {
							if (n = r.done ? "completed" : "suspendedYield", s.arg === l) continue;
							return {
								value: s.arg,
								done: r.done
							}
						}
						"throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
					}
				}
			}

			function _(t, e) {
				var r = e.method,
					n = t.iterator[r];
				if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
				var o = f(n, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l;
				var i = o.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
			}

			function L(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function S(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function O(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(L, this), this.reset(!0)
			}

			function I(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							o = function e() {
								for (; ++n < t.length;)
									if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: T
				}
			}

			function T() {
				return {
					value: void 0,
					done: !0
				}
			}
			return d.prototype = p, n(g, "constructor", {
				value: p,
				configurable: !0
			}), n(p, "constructor", {
				value: d,
				configurable: !0
			}), d.displayName = s(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, b(x.prototype), s(x.prototype, a, (function() {
				return this
			})), t.AsyncIterator = x, t.async = function(e, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new x(u(e, r, n, o), i);
				return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, b(g), s(g, c, "Generator"), s(g, i, (function() {
				return this
			})), s(g, "toString", (function() {
				return "[object Generator]"
			})), t.keys = function(t) {
				var e = Object(t),
					r = [];
				for (var n in e) r.push(n);
				return r.reverse(),
					function t() {
						for (; r.length;) {
							var n = r.pop();
							if (n in e) return t.value = n, t.done = !1, t
						}
						return t.done = !0, t
					}
			}, t.values = I, O.prototype = {
				constructor: O,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
						for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function n(r, n) {
						return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o],
							a = i.completion;
						if ("root" === i.tryLoc) return n("end");
						if (i.tryLoc <= this.prev) {
							var c = r.call(i, "catchLoc"),
								s = r.call(i, "finallyLoc");
							if (c && s) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							} else if (c) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), l
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.tryLoc === t) {
							var n = r.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								S(r)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, r) {
					return this.delegate = {
						iterator: I(t),
						resultName: e,
						nextLoc: r
					}, "next" === this.method && (this.arg = void 0), l
				}
			}, t
		}

		function E(t, e, r, n, o, i, a) {
			try {
				var c = t[i](a),
					s = c.value
			} catch (t) {
				return void r(t)
			}
			c.done ? e(s) : Promise.resolve(s).then(n, o)
		}

		function _(t) {
			return function() {
				var e = this,
					r = arguments;
				return new Promise((function(n, o) {
					var i = t.apply(e, r);

					function a(t) {
						E(i, n, o, a, c, "next", t)
					}

					function c(t) {
						E(i, n, o, a, c, "throw", t)
					}
					a(void 0)
				}))
			}
		}

		function L(t) {
			return S.apply(this, arguments)
		}

		function S() {
			return (S = _(k().mark((function t(e) {
				var r;
				return k().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return r = chrome.runtime.getURL(e), t.next = 3, chrome.runtime.getContexts({
								contextTypes: ["OFFSCREEN_DOCUMENT"],
								documentUrls: [r]
							});
						case 3:
							if (!(t.sent.length > 0)) {
								t.next = 6;
								break
							}
							return t.abrupt("return");
						case 6:
							if (!g) {
								t.next = 11;
								break
							}
							return t.next = 9, g;
						case 9:
							t.next = 15;
							break;
						case 11:
							return g = chrome.offscreen.createDocument({
								url: e,
								reasons: ["WEB_RTC", "LOCAL_STORAGE", "BLOBS", "USER_MEDIA"],
								justification: "reason for needing the document"
							}), t.next = 14, g;
						case 14:
							g = null;
						case 15:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function O(t) {
			return I.apply(this, arguments)
		}

		function I() {
			return (I = _(k().mark((function t(e) {
				var r, n, o, i;
				return k().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, clients.matchAll();
						case 2:
							r = t.sent, n = chrome.runtime.getURL(e), o = b(r), t.prev = 5, o.s();
						case 7:
							if ((i = o.n()).done) {
								t.next = 13;
								break
							}
							if (i.value.url !== n) {
								t.next = 11;
								break
							}
							return t.abrupt("return", !0);
						case 11:
							t.next = 7;
							break;
						case 13:
							t.next = 18;
							break;
						case 15:
							t.prev = 15, t.t0 = t.catch(5), o.e(t.t0);
						case 18:
							return t.prev = 18, o.f(), t.finish(18);
						case 21:
							return t.abrupt("return", !1);
						case 22:
						case "end":
							return t.stop()
					}
				}), t, null, [
					[5, 15, 18, 21]
				])
			})))).apply(this, arguments)
		}

		function T(t, e, r) {
			return new Promise(function() {
				var n = _(k().mark((function n(o, i) {
					var a, c, s, u, l;
					return k().wrap((function(n) {
						for (;;) switch (n.prev = n.next) {
							case 0:
								if ("desktop" !== t) {
									n.next = 14;
									break
								}
								return n.next = 3, f("showGuide");
							case 3:
								a = n.sent, c = navigator.userAgent.indexOf("Windows") > 0, s = 610, u = c ? 550 : 500, a || (s = 970, u += 150), l = {
									focused: !0,
									width: s,
									left: parseInt(r.left + (r.width - s) / 2),
									type: "popup",
									height: u
								}, e ? l.tabId = e : l.url = "/record.html", chrome.windows.create(l).then((function(t) {
									o({
										tabId: t.tabs[0].id,
										winId: t.id
									})
								})), n.next = 15;
								break;
							case 14:
								e ? chrome.tabs.update(e, {
									pinned: !0
								}).then((function() {
									o({
										tabId: e
									})
								})) : chrome.tabs.create({
									url: "/record.html",
									pinned: !0,
									active: !1
								}).then((function(t) {
									o({
										tabId: t.id
									})
								}));
							case 15:
							case "end":
								return n.stop()
						}
					}), n)
				})));
				return function(t, e) {
					return n.apply(this, arguments)
				}
			}())
		}

		function j(t, e) {
			return new Promise(function() {
				var r = _(k().mark((function r(n, o) {
					var i, a, c, s, u;
					return k().wrap((function(r) {
						for (;;) switch (r.prev = r.next) {
							case 0:
								return r.next = 2, f("showGuide");
							case 2:
								i = r.sent, a = navigator.userAgent.indexOf("Windows") + navigator.userAgent.indexOf("CrOS") > 0, c = 610, s = a ? 550 : 500, m() || (s += 30), i || (c = 970, s += 150), u = {
									focused: !0,
									width: c,
									left: parseInt(e.left + (e.width - c) / 2),
									type: "popup",
									height: s
								}, t ? u.tabId = t : u.url = "/record.html", chrome.windows.create(u).then((function(t) {
									n({
										tabId: t.tabs[0].id,
										winId: t.id
									})
								}));
							case 12:
							case "end":
								return r.stop()
						}
					}), r)
				})));
				return function(t, e) {
					return r.apply(this, arguments)
				}
			}())
		}

		function C(t, e) {
			return M.apply(this, arguments)
		}

		function M() {
			return (M = _(k().mark((function t(e, r) {
				return k().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							chrome.windows.update(e, {
								focused: !0,
								left: parseInt(r.left + (r.width - 608) / 2)
							});
						case 1:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function P(t) {
			return P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, P(t)
		}

		function A() {
			A = function() {
				return t
			};
			var t = {},
				e = Object.prototype,
				r = e.hasOwnProperty,
				n = Object.defineProperty || function(t, e, r) {
					t[e] = r.value
				},
				o = "function" == typeof Symbol ? Symbol : {},
				i = o.iterator || "@@iterator",
				a = o.asyncIterator || "@@asyncIterator",
				c = o.toStringTag || "@@toStringTag";

			function s(t, e, r) {
				return Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				s({}, "")
			} catch (t) {
				s = function(t, e, r) {
					return t[e] = r
				}
			}

			function u(t, e, r, o) {
				var i = e && e.prototype instanceof h ? e : h,
					a = Object.create(i.prototype),
					c = new L(o || []);
				return n(a, "_invoke", {
					value: x(t, r, c)
				}), a
			}

			function f(t, e, r) {
				try {
					return {
						type: "normal",
						arg: t.call(e, r)
					}
				} catch (t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			t.wrap = u;
			var l = {};

			function h() {}

			function d() {}

			function p() {}
			var m = {};
			s(m, i, (function() {
				return this
			}));
			var y = Object.getPrototypeOf,
				v = y && y(y(S([])));
			v && v !== e && r.call(v, i) && (m = v);
			var g = p.prototype = h.prototype = Object.create(m);

			function w(t) {
				["next", "throw", "return"].forEach((function(e) {
					s(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function b(t, e) {
				function o(n, i, a, c) {
					var s = f(t[n], t, i);
					if ("throw" !== s.type) {
						var u = s.arg,
							l = u.value;
						return l && "object" == P(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
							o("next", t, a, c)
						}), (function(t) {
							o("throw", t, a, c)
						})) : e.resolve(l).then((function(t) {
							u.value = t, a(u)
						}), (function(t) {
							return o("throw", t, a, c)
						}))
					}
					c(s.arg)
				}
				var i;
				n(this, "_invoke", {
					value: function(t, r) {
						function n() {
							return new e((function(e, n) {
								o(t, r, e, n)
							}))
						}
						return i = i ? i.then(n, n) : n()
					}
				})
			}

			function x(t, e, r) {
				var n = "suspendedStart";
				return function(o, i) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw i;
						return O()
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var c = k(a, r);
							if (c) {
								if (c === l) continue;
								return c
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var s = f(t, e, r);
						if ("normal" === s.type) {
							if (n = r.done ? "completed" : "suspendedYield", s.arg === l) continue;
							return {
								value: s.arg,
								done: r.done
							}
						}
						"throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
					}
				}
			}

			function k(t, e) {
				var r = e.method,
					n = t.iterator[r];
				if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
				var o = f(n, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l;
				var i = o.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
			}

			function E(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function _(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function L(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(E, this), this.reset(!0)
			}

			function S(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							o = function e() {
								for (; ++n < t.length;)
									if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: O
				}
			}

			function O() {
				return {
					value: void 0,
					done: !0
				}
			}
			return d.prototype = p, n(g, "constructor", {
				value: p,
				configurable: !0
			}), n(p, "constructor", {
				value: d,
				configurable: !0
			}), d.displayName = s(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, w(b.prototype), s(b.prototype, a, (function() {
				return this
			})), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new b(u(e, r, n, o), i);
				return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, w(g), s(g, c, "Generator"), s(g, i, (function() {
				return this
			})), s(g, "toString", (function() {
				return "[object Generator]"
			})), t.keys = function(t) {
				var e = Object(t),
					r = [];
				for (var n in e) r.push(n);
				return r.reverse(),
					function t() {
						for (; r.length;) {
							var n = r.pop();
							if (n in e) return t.value = n, t.done = !1, t
						}
						return t.done = !0, t
					}
			}, t.values = S, L.prototype = {
				constructor: L,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t)
						for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function n(r, n) {
						return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o],
							a = i.completion;
						if ("root" === i.tryLoc) return n("end");
						if (i.tryLoc <= this.prev) {
							var c = r.call(i, "catchLoc"),
								s = r.call(i, "finallyLoc");
							if (c && s) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							} else if (c) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), l
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.tryLoc === t) {
							var n = r.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								_(r)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, r) {
					return this.delegate = {
						iterator: S(t),
						resultName: e,
						nextLoc: r
					}, "next" === this.method && (this.arg = void 0), l
				}
			}, t
		}

		function D(t, e, r, n, o, i, a) {
			try {
				var c = t[i](a),
					s = c.value
			} catch (t) {
				return void r(t)
			}
			c.done ? e(s) : Promise.resolve(s).then(n, o)
		}

		function $(t, e, r) {
			return chrome.tabs.sendMessage(t, e, r)
		}

		function N(t, e) {
			return chrome.runtime.sendMessage(t, e)
		}

		function U(t, e) {
			chrome.tabs.query({}, (function(r) {
				r.forEach((function(r) {
					r.id !== e && $(r.id, t).catch((function(t) {}))
				}))
			}))
		}

		function B(t, e) {
			return R.apply(this, arguments)
		}

		function R() {
			var t;
			return t = A().mark((function t(e, r) {
				return A().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							if (e.target = "offscreen", m()) {
								t.next = 5;
								break
							}
							return t.abrupt("return", N(e, r));
						case 5:
							return t.next = 7, f("recordTab");
						case 7:
							$(t.sent, e, r);
						case 9:
						case "end":
							return t.stop()
					}
				}), t)
			})), R = function() {
				var e = this,
					r = arguments;
				return new Promise((function(n, o) {
					var i = t.apply(e, r);

					function a(t) {
						D(i, n, o, a, c, "next", t)
					}

					function c(t) {
						D(i, n, o, a, c, "throw", t)
					}
					a(void 0)
				}))
			}, R.apply(this, arguments)
		}

		function Y(t) {
			return new Promise((function(e, r) {
				N({
					action: "record/getInfo",
					keys: t,
					target: "offscreen"
				}).then(e).catch(r)
			}))
		}
		var F = {};

		function G() {
			return "undefined" != typeof isContentScriptLoaded && isContentScriptLoaded
		}

		function W(t) {
			return function(t) {
				return chrome.scripting.executeScript({
					target: {
						tabId: t
					},
					injectImmediately: !0,
					func: G
				})
			}(t).then((function(e) {
				return function(t, e) {
					return new Promise((function(r, n) {
						t && (t[0].result ? r() : F[e] ? setTimeout((function() {
							r()
						}), 250) : (F[e] = !0, chrome.scripting.insertCSS({
							target: {
								tabId: e
							},
							files: ["stylesheets/selected.css"]
						}), chrome.scripting.executeScript({
							target: {
								tabId: e
							},
							files: ["javascripts/libs/jquery-3.4.0.min.js", "javascripts/libs/dragresize.js", "javascripts/jquery.draggable.js", "javascripts/libs/jquery-ui-custom.min.js", "javascripts/bundles/content.bundle.js", "javascripts/bundles/content_record.bundle.js"]
						}).then((function() {
							delete F[e], r()
						}))))
					}))
				}(e, t)
			})).catch((function(t) {}))
		}

		function H() {
			return {
				height: window.screen.height,
				width: window.screen.width,
				left: window.screen.availLeft,
				top: window.screen.availTop
			}
		}
		const q = function() {
			return chrome.tabs.query({
				currentWindow: !0
			}).then((function(t) {
				for (var e = 0; e < t.length; e++)
					if (/^(https?:\/\/)/.test(t[e].url)) return r = t[e].id, chrome.scripting.executeScript({
						target: {
							tabId: r
						},
						func: H
					}).then((function(t) {
						return t[0].result
					})).catch((function() {
						return H()
					}));
				var r;
				return H()
			}))
		};
		var z = {
			preview: {
				ws: "wss",
				domain: "preview.awesomescreenshot.com",
				cookie: "awesomescreenshot.com",
				schema: "https"
			},
			www: {
				ws: "wss",
				domain: "www.awesomescreenshot.com",
				cookie: "awesomescreenshot.com",
				schema: "https"
			},
			alpha: {
				ws: "wss",
				domain: "alpha.awesomescreenshot.com",
				cookie: "awesomescreenshot.com",
				schema: "https"
			},
			local: {
				ws: "wss",
				domain: "www.awesomescreenshot.cn",
				cookie: "awesomescreenshot.cn",
				schema: "https"
			}
		};
		for (var V in z) {
			var J = z[V];
			J.baseUrl = J.schema + "://" + J.domain, J.wsUrl = J.ws + "://" + J.domain
		}
		const X = z.www;

		function Z(t) {
			return Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, Z(t)
		}

		function K(t, e) {
			var r = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t);
				e && (n = n.filter((function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), r.push.apply(r, n)
			}
			return r
		}

		function Q(t) {
			for (var e = 1; e < arguments.length; e++) {
				var r = null != arguments[e] ? arguments[e] : {};
				e % 2 ? K(Object(r), !0).forEach((function(e) {
					tt(t, e, r[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach((function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
				}))
			}
			return t
		}

		function tt(t, e, r) {
			return (e = it(e)) in t ? Object.defineProperty(t, e, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = r, t
		}

		function et() {
			et = function() {
				return t
			};
			var t = {},
				e = Object.prototype,
				r = e.hasOwnProperty,
				n = Object.defineProperty || function(t, e, r) {
					t[e] = r.value
				},
				o = "function" == typeof Symbol ? Symbol : {},
				i = o.iterator || "@@iterator",
				a = o.asyncIterator || "@@asyncIterator",
				c = o.toStringTag || "@@toStringTag";

			function s(t, e, r) {
				return Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				s({}, "")
			} catch (t) {
				s = function(t, e, r) {
					return t[e] = r
				}
			}

			function u(t, e, r, o) {
				var i = e && e.prototype instanceof h ? e : h,
					a = Object.create(i.prototype),
					c = new L(o || []);
				return n(a, "_invoke", {
					value: x(t, r, c)
				}), a
			}

			function f(t, e, r) {
				try {
					return {
						type: "normal",
						arg: t.call(e, r)
					}
				} catch (t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			t.wrap = u;
			var l = {};

			function h() {}

			function d() {}

			function p() {}
			var m = {};
			s(m, i, (function() {
				return this
			}));
			var y = Object.getPrototypeOf,
				v = y && y(y(S([])));
			v && v !== e && r.call(v, i) && (m = v);
			var g = p.prototype = h.prototype = Object.create(m);

			function w(t) {
				["next", "throw", "return"].forEach((function(e) {
					s(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function b(t, e) {
				function o(n, i, a, c) {
					var s = f(t[n], t, i);
					if ("throw" !== s.type) {
						var u = s.arg,
							l = u.value;
						return l && "object" == Z(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
							o("next", t, a, c)
						}), (function(t) {
							o("throw", t, a, c)
						})) : e.resolve(l).then((function(t) {
							u.value = t, a(u)
						}), (function(t) {
							return o("throw", t, a, c)
						}))
					}
					c(s.arg)
				}
				var i;
				n(this, "_invoke", {
					value: function(t, r) {
						function n() {
							return new e((function(e, n) {
								o(t, r, e, n)
							}))
						}
						return i = i ? i.then(n, n) : n()
					}
				})
			}

			function x(t, e, r) {
				var n = "suspendedStart";
				return function(o, i) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw i;
						return O()
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var c = k(a, r);
							if (c) {
								if (c === l) continue;
								return c
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var s = f(t, e, r);
						if ("normal" === s.type) {
							if (n = r.done ? "completed" : "suspendedYield", s.arg === l) continue;
							return {
								value: s.arg,
								done: r.done
							}
						}
						"throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
					}
				}
			}

			function k(t, e) {
				var r = e.method,
					n = t.iterator[r];
				if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
				var o = f(n, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l;
				var i = o.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
			}

			function E(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function _(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function L(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(E, this), this.reset(!0)
			}

			function S(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							o = function e() {
								for (; ++n < t.length;)
									if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: O
				}
			}

			function O() {
				return {
					value: void 0,
					done: !0
				}
			}
			return d.prototype = p, n(g, "constructor", {
				value: p,
				configurable: !0
			}), n(p, "constructor", {
				value: d,
				configurable: !0
			}), d.displayName = s(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, w(b.prototype), s(b.prototype, a, (function() {
				return this
			})), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new b(u(e, r, n, o), i);
				return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, w(g), s(g, c, "Generator"), s(g, i, (function() {
				return this
			})), s(g, "toString", (function() {
				return "[object Generator]"
			})), t.keys = function(t) {
				var e = Object(t),
					r = [];
				for (var n in e) r.push(n);
				return r.reverse(),
					function t() {
						for (; r.length;) {
							var n = r.pop();
							if (n in e) return t.value = n, t.done = !1, t
						}
						return t.done = !0, t
					}
			}, t.values = S, L.prototype = {
				constructor: L,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t)
						for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function n(r, n) {
						return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o],
							a = i.completion;
						if ("root" === i.tryLoc) return n("end");
						if (i.tryLoc <= this.prev) {
							var c = r.call(i, "catchLoc"),
								s = r.call(i, "finallyLoc");
							if (c && s) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							} else if (c) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), l
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.tryLoc === t) {
							var n = r.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								_(r)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, r) {
					return this.delegate = {
						iterator: S(t),
						resultName: e,
						nextLoc: r
					}, "next" === this.method && (this.arg = void 0), l
				}
			}, t
		}

		function rt(t, e, r, n, o, i, a) {
			try {
				var c = t[i](a),
					s = c.value
			} catch (t) {
				return void r(t)
			}
			c.done ? e(s) : Promise.resolve(s).then(n, o)
		}

		function nt(t) {
			return function() {
				var e = this,
					r = arguments;
				return new Promise((function(n, o) {
					var i = t.apply(e, r);

					function a(t) {
						rt(i, n, o, a, c, "next", t)
					}

					function c(t) {
						rt(i, n, o, a, c, "throw", t)
					}
					a(void 0)
				}))
			}
		}

		function ot(t, e) {
			for (var r = 0; r < e.length; r++) {
				var n = e[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, it(n.key), n)
			}
		}

		function it(t) {
			var e = function(t, e) {
				if ("object" !== Z(t) || null === t) return t;
				var r = t[Symbol.toPrimitive];
				if (void 0 !== r) {
					var n = r.call(t, e || "default");
					if ("object" !== Z(n)) return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ("string" === e ? String : Number)(t)
			}(t, "string");
			return "symbol" === Z(e) ? e : String(e)
		}
		var at = "https://www.google-analytics.com/mp/collect",
			ct = "https://www.google-analytics.com/debug/mp/collect",
			st = "G-ET3T731TEF",
			ut = "lJMuoWydQXKIT3blFpRHoA",
			ft = 100;

		function lt(t) {
			return new Promise((function(e, r) {
				chrome.storage.local.set(t, (function() {
					e()
				}))
			}))
		}

		function ht(t) {
			return new Promise((function(e, r) {
				chrome.storage.local.get(t, (function(t) {
					e(t)
				}))
			}))
		}
		var dt = new(function() {
			function t() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t), this.debug = e
			}
			var e, r, n, o, i, a, c, s;
			return e = t, r = [{
				key: "getOrCreateClientId",
				value: (s = nt(et().mark((function t() {
					var e, r;
					return et().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, ht("clientId");
							case 2:
								if (e = t.sent, r = e.clientId) {
									t.next = 8;
									break
								}
								return r = self.crypto.randomUUID(), t.next = 8, lt({
									clientId: r
								});
							case 8:
								return t.abrupt("return", r);
							case 9:
							case "end":
								return t.stop()
						}
					}), t)
				}))), function() {
					return s.apply(this, arguments)
				})
			}, {
				key: "getOrCreateSessionId",
				value: (c = nt(et().mark((function t() {
					var e, r, n;
					return et().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, ht(["sessionData"]);
							case 2:
								if (e = t.sent, r = e.sessionData, n = Date.now(), !r || !r.timestamp) {
									t.next = 14;
									break
								}
								if (!((n - r.timestamp) / 6e4 > 30)) {
									t.next = 11;
									break
								}
								r = null, t.next = 14;
								break;
							case 11:
								return r.timestamp = n, t.next = 14, lt({
									sessionData: r
								});
							case 14:
								if (r) {
									t.next = 18;
									break
								}
								return r = {
									session_id: n.toString(),
									timestamp: n.toString()
								}, t.next = 18, lt({
									sessionData: r
								});
							case 18:
								return t.abrupt("return", r.session_id);
							case 19:
							case "end":
								return t.stop()
						}
					}), t)
				}))), function() {
					return c.apply(this, arguments)
				})
			}, {
				key: "fireEvent",
				value: (a = nt(et().mark((function t(e) {
					var r, n, o = arguments;
					return et().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								if ((r = o.length > 1 && void 0 !== o[1] ? o[1] : {}).session_id) {
									t.next = 5;
									break
								}
								return t.next = 4, this.getOrCreateSessionId();
							case 4:
								r.session_id = t.sent;
							case 5:
								return r.engagement_time_msec || (r.engagement_time_msec = ft), t.prev = 6, t.t0 = fetch, t.t1 = "".concat(this.debug ? ct : at, "?measurement_id=").concat(st, "&api_secret=").concat(ut), t.t2 = JSON, t.next = 12, this.getOrCreateClientId();
							case 12:
								return t.t3 = t.sent, t.t4 = [{
									name: e.replace(/\s/g, "_"),
									params: r
								}], t.t5 = {
									client_id: t.t3,
									events: t.t4
								}, t.t6 = t.t2.stringify.call(t.t2, t.t5), t.t7 = {
									method: "POST",
									body: t.t6
								}, t.next = 19, (0, t.t0)(t.t1, t.t7);
							case 19:
								if (n = t.sent, this.debug) {
									t.next = 22;
									break
								}
								return t.abrupt("return");
							case 22:
								return t.t8 = console, t.next = 25, n.text();
							case 25:
								t.t9 = t.sent, t.t8.log.call(t.t8, t.t9), t.next = 32;
								break;
							case 29:
								t.prev = 29, t.t10 = t.catch(6);
							case 32:
							case "end":
								return t.stop()
						}
					}), t, this, [
						[6, 29]
					])
				}))), function(t) {
					return a.apply(this, arguments)
				})
			}, {
				key: "firePageViewEvent",
				value: (i = nt(et().mark((function t(e, r) {
					var n, o = arguments;
					return et().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return n = o.length > 2 && void 0 !== o[2] ? o[2] : {}, t.abrupt("return", this.fireEvent("page_view", Q({
									page_title: e,
									page_location: r
								}, n)));
							case 2:
							case "end":
								return t.stop()
						}
					}), t, this)
				}))), function(t, e) {
					return i.apply(this, arguments)
				})
			}, {
				key: "fireErrorEvent",
				value: (o = nt(et().mark((function t(e) {
					var r, n = arguments;
					return et().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return r = n.length > 1 && void 0 !== n[1] ? n[1] : {}, t.abrupt("return", this.fireEvent("extension_error", Q(Q({}, e), r)));
							case 2:
							case "end":
								return t.stop()
						}
					}), t, this)
				}))), function(t) {
					return o.apply(this, arguments)
				})
			}], r && ot(e.prototype, r), n && ot(e, n), Object.defineProperty(e, "prototype", {
				writable: !1
			}), t
		}());

		function pt(t) {
			return pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, pt(t)
		}

		function mt(t, e) {
			var r = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(t);
				e && (n = n.filter((function(e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), r.push.apply(r, n)
			}
			return r
		}

		function yt(t, e, r) {
			return (e = function(t) {
				var e = function(t, e) {
					if ("object" !== pt(t) || null === t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(t, e || "default");
						if ("object" !== pt(n)) return n;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === e ? String : Number)(t)
				}(t, "string");
				return "symbol" === pt(e) ? e : String(e)
			}(e)) in t ? Object.defineProperty(t, e, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = r, t
		}

		function vt() {
			vt = function() {
				return t
			};
			var t = {},
				e = Object.prototype,
				r = e.hasOwnProperty,
				n = Object.defineProperty || function(t, e, r) {
					t[e] = r.value
				},
				o = "function" == typeof Symbol ? Symbol : {},
				i = o.iterator || "@@iterator",
				a = o.asyncIterator || "@@asyncIterator",
				c = o.toStringTag || "@@toStringTag";

			function s(t, e, r) {
				return Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				s({}, "")
			} catch (t) {
				s = function(t, e, r) {
					return t[e] = r
				}
			}

			function u(t, e, r, o) {
				var i = e && e.prototype instanceof h ? e : h,
					a = Object.create(i.prototype),
					c = new L(o || []);
				return n(a, "_invoke", {
					value: x(t, r, c)
				}), a
			}

			function f(t, e, r) {
				try {
					return {
						type: "normal",
						arg: t.call(e, r)
					}
				} catch (t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			t.wrap = u;
			var l = {};

			function h() {}

			function d() {}

			function p() {}
			var m = {};
			s(m, i, (function() {
				return this
			}));
			var y = Object.getPrototypeOf,
				v = y && y(y(S([])));
			v && v !== e && r.call(v, i) && (m = v);
			var g = p.prototype = h.prototype = Object.create(m);

			function w(t) {
				["next", "throw", "return"].forEach((function(e) {
					s(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function b(t, e) {
				function o(n, i, a, c) {
					var s = f(t[n], t, i);
					if ("throw" !== s.type) {
						var u = s.arg,
							l = u.value;
						return l && "object" == pt(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
							o("next", t, a, c)
						}), (function(t) {
							o("throw", t, a, c)
						})) : e.resolve(l).then((function(t) {
							u.value = t, a(u)
						}), (function(t) {
							return o("throw", t, a, c)
						}))
					}
					c(s.arg)
				}
				var i;
				n(this, "_invoke", {
					value: function(t, r) {
						function n() {
							return new e((function(e, n) {
								o(t, r, e, n)
							}))
						}
						return i = i ? i.then(n, n) : n()
					}
				})
			}

			function x(t, e, r) {
				var n = "suspendedStart";
				return function(o, i) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw i;
						return O()
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var c = k(a, r);
							if (c) {
								if (c === l) continue;
								return c
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var s = f(t, e, r);
						if ("normal" === s.type) {
							if (n = r.done ? "completed" : "suspendedYield", s.arg === l) continue;
							return {
								value: s.arg,
								done: r.done
							}
						}
						"throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
					}
				}
			}

			function k(t, e) {
				var r = e.method,
					n = t.iterator[r];
				if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
				var o = f(n, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l;
				var i = o.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
			}

			function E(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function _(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function L(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(E, this), this.reset(!0)
			}

			function S(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							o = function e() {
								for (; ++n < t.length;)
									if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: O
				}
			}

			function O() {
				return {
					value: void 0,
					done: !0
				}
			}
			return d.prototype = p, n(g, "constructor", {
				value: p,
				configurable: !0
			}), n(p, "constructor", {
				value: d,
				configurable: !0
			}), d.displayName = s(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, w(b.prototype), s(b.prototype, a, (function() {
				return this
			})), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new b(u(e, r, n, o), i);
				return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, w(g), s(g, c, "Generator"), s(g, i, (function() {
				return this
			})), s(g, "toString", (function() {
				return "[object Generator]"
			})), t.keys = function(t) {
				var e = Object(t),
					r = [];
				for (var n in e) r.push(n);
				return r.reverse(),
					function t() {
						for (; r.length;) {
							var n = r.pop();
							if (n in e) return t.value = n, t.done = !1, t
						}
						return t.done = !0, t
					}
			}, t.values = S, L.prototype = {
				constructor: L,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t)
						for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function n(r, n) {
						return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o],
							a = i.completion;
						if ("root" === i.tryLoc) return n("end");
						if (i.tryLoc <= this.prev) {
							var c = r.call(i, "catchLoc"),
								s = r.call(i, "finallyLoc");
							if (c && s) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							} else if (c) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), l
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.tryLoc === t) {
							var n = r.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								_(r)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, r) {
					return this.delegate = {
						iterator: S(t),
						resultName: e,
						nextLoc: r
					}, "next" === this.method && (this.arg = void 0), l
				}
			}, t
		}

		function gt(t, e, r, n, o, i, a) {
			try {
				var c = t[i](a),
					s = c.value
			} catch (t) {
				return void r(t)
			}
			c.done ? e(s) : Promise.resolve(s).then(n, o)
		}

		function wt(t) {
			return function() {
				var e = this,
					r = arguments;
				return new Promise((function(n, o) {
					var i = t.apply(e, r);

					function a(t) {
						gt(i, n, o, a, c, "next", t)
					}

					function c(t) {
						gt(i, n, o, a, c, "throw", t)
					}
					a(void 0)
				}))
			}
		}
		var bt = X.baseUrl,
			xt = null,
			kt = null,
			Et = "record.html",
			_t = "4.3.45",
			Lt = -1,
			St = !1;

		function Ot(t) {
			return void 0 === t
		}

		function It() {
			return (It = wt(vt().mark((function t() {
				return vt().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, f("offScreenStatus");
						case 2:
							t.sent && Ut();
						case 4:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Tt() {
			return Tt = wt(vt().mark((function t(e, r) {
				var n;
				return vt().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, Ut();
						case 2:
							if (!m()) {
								t.next = 6;
								break
							}
							B({
								action: "record/startCustom1",
								data: e,
								target: "offscreen"
							}), t.next = 10;
							break;
						case 6:
							return t.next = 8, chrome.tabCapture.getMediaStreamId({
								targetTabId: r
							});
						case 8:
							n = t.sent, B({
								action: "record/startCustom1",
								data: e,
								streamId: n,
								target: "offscreen"
							});
						case 10:
						case "end":
							return t.stop()
					}
				}), t)
			}))), Tt.apply(this, arguments)
		}

		function jt() {
			return (jt = wt(vt().mark((function t() {
				var e, r;
				return vt().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, l("context-menu");
						case 2:
							return e = t.sent, t.next = 5, Y("isBeginRecorded").catch((function() {}));
						case 5:
							r = t.sent, e ? chrome.contextMenus.removeAll((function() {
								Pt(), Dt(r)
							})) : chrome.contextMenus.removeAll();
						case 7:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Ct(t, e, r) {
			return Mt.apply(this, arguments)
		}

		function Mt() {
			return (Mt = wt(vt().mark((function t(e, r, n) {
				var o, i, a, c, s, u, f, h, d, p, m;
				return vt().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, l();
						case 2:
							if (o = t.sent, i = o.record_mic, a = o.record_countdown, c = o["save-location"], s = o.max_resolution, !1, u = o.ctl_bar, f = o["mic-deviceId"], h = (h = o["cam-deviceId"]) || "default", f = f || "default", d = o.record_tabsound, r || "cloud" !== c || (c = "local"), p = {
									isRecordMic: i,
									recordType: e,
									countdown: a,
									saveLocation: c,
									resolution: s,
									isRecordCam: false,
									isShowToolbar: u,
									camDeviceId: h,
									micDeviceId: f,
									isRecordTabSound: d
								}, !n) {
								t.next = 26;
								break
							}
							return p.recordingTabId = n.id, p.mainWinId = n.windowId, p.recordingTabTitle = n.title, p.recordingTabUrl = n.url, t.next = 23, q();
						case 23:
							m = t.sent, Rt(p, m);
						case 26:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Pt() {
			return At.apply(this, arguments)
		}

		function At() {
			return (At = wt(vt().mark((function t() {
				return vt().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							try {
								chrome.contextMenus.removeAll(wt(vt().mark((function t() {
									return vt().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												return t.next = 2, l("context-menu");
											case 2:
												t.sent && (chrome.contextMenus.create({
													id: "record_desktop",
													title: "Record Screen",
													contexts: ["all"]
												}), chrome.contextMenus.create({
													id: "record_tab",
													title: "Record Tab",
													visible: !0,
													contexts: ["all"]
												}), chrome.contextMenus.create({
													id: "stop_record",
													title: "Stop Recording",
													visible: !1,
													contexts: ["all"]
												}));
											case 4:
											case "end":
												return t.stop()
										}
									}), t)
								}))))
							} catch (t) {}
							case 1:
							case "end":
								return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Dt(t) {
			return $t.apply(this, arguments)
		}

		function $t() {
			return ($t = wt(vt().mark((function t(e) {
				return vt().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, l("context-menu");
						case 2:
							t.sent && (chrome.contextMenus.update("record_desktop", {
								visible: !e
							}), chrome.contextMenus.update("record_tab", {
								visible: !e
							}), chrome.contextMenus.update("stop_record", {
								visible: e
							}));
						case 4:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Nt(t, e) {
			m() ? $(t, {
				action: "record/start",
				recordOptions: e,
				target: "offscreen"
			}) : N({
				action: "record/start",
				recordOptions: e,
				target: "offscreen"
			}), u("recordingInfo", e)
		}

		function Ut() {
			return new Promise(function() {
				var t = wt(vt().mark((function t(e) {
					var r, n, o, i, a;
					return vt().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								if (!m()) {
									t.next = 40;
									break
								}
								return t.next = 3, f("recordTab");
							case 3:
								if (!(n = t.sent)) {
									t.next = 15;
									break
								}
								return t.next = 7, $(n, {
									action: "checkpin",
									target: "offscreen"
								}).catch((function(t) {}));
							case 7:
								if (!t.sent) {
									t.next = 14;
									break
								}
								return t.next = 11, chrome.tabs.get(n).catch((function() {}));
							case 11:
								r = t.sent, t.next = 15;
								break;
							case 14:
								n = null;
							case 15:
								if (r) {
									t.next = 31;
									break
								}
								return t.next = 18, chrome.tabs.query({});
							case 18:
								o = t.sent, t.t0 = vt().keys(o);
							case 20:
								if ((t.t1 = t.t0()).done) {
									t.next = 31;
									break
								}
								return i = t.t1.value, t.next = 24, $(o[i].id, {
									action: "checkpin",
									target: "offscreen"
								}).catch((function(t) {}));
							case 24:
								if (!t.sent) {
									t.next = 29;
									break
								}
								return r = o[i], n = o[i].id, t.abrupt("break", 31);
							case 29:
								t.next = 20;
								break;
							case 31:
								return t.next = 33, T("tab", n);
							case 33:
								if (!(a = t.sent) || !a.tabId) {
									t.next = 37;
									break
								}
								return t.next = 37, u("recordTab", a.tabId);
							case 37:
								e({
									tabId: a.tabId
								}), t.next = 46;
								break;
							case 40:
								return t.next = 42, O(Et);
							case 42:
								if (t.sent) {
									t.next = 45;
									break
								}
								return t.next = 45, L(Et);
							case 45:
								e();
							case 46:
							case "end":
								return t.stop()
						}
					}), t)
				})));
				return function(e) {
					return t.apply(this, arguments)
				}
			}())
		}

		function Bt() {
			chrome.runtime.sendMessage({
				action: "reloadRecorder",
				target: "offscreen"
			}), St = !0
		}

		function Rt(t, e) {
			return Yt.apply(this, arguments)
		}

		function Yt() {
			return Yt = wt(vt().mark((function t(e, r) {
				var n, o, i, a, c, s, l, h, d, p;
				return vt().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							if (n = e.recordType, o = e.recordingTabId, e && ((kt = e).recorderVersion = chrome.runtime.getManifest().version), "tab" != n || m()) {
								t.next = 7;
								break
							}
							return t.next = 5, chrome.tabCapture.getMediaStreamId({
								targetTabId: o
							});
						case 5:
							i = t.sent, kt.streamId = i;
						case 7:
							return t.next = 9, Ut();
						case 9:
							if (a = t.sent, !m()) {
								t.next = 42;
								break
							}
							if (c = a.tabId) {
								t.next = 16;
								break
							}
							return t.next = 15, f("recordTab");
						case 15:
							c = t.sent;
						case 16:
							if (!c) {
								t.next = 40;
								break
							}
							return t.next = 19, chrome.tabs.get(c);
						case 19:
							return s = t.sent, l = s.windowId, t.next = 23, chrome.windows.get(l);
						case 23:
							if (h = t.sent, kt.recordBgTabId = c, "desktop" != n) {
								t.next = 39;
								break
							}
							if ("pop" != h.type) {
								t.next = 30;
								break
							}
							C(l, r), t.next = 37;
							break;
						case 30:
							return t.next = 32, j(c, r);
						case 32:
							d = t.sent, p = {
								tabId: d.tabId
							}, d.winId && (p.winId = d.winId), u("recordBgWin", p), Nt(c, kt);
						case 37:
							t.next = 40;
							break;
						case 39:
							Nt(c, kt);
						case 40:
							t.next = 43;
							break;
						case 42:
							Nt(kt.recordBgTabId, kt);
						case 43:
						case "end":
							return t.stop()
					}
				}), t)
			}))), Yt.apply(this, arguments)
		}

		function Ft() {
			u("recordBgWin", null)
		}

		function Gt() {
			return (Gt = wt(vt().mark((function t() {
				var e, r;
				return vt().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, f("version");
						case 2:
							if (e = t.sent) {
								t.next = 8;
								break
							}
							return t.next = 6, u("newClickVersion", _t);
						case 6:
							return t.next = 8, u("installVersion", chrome.runtime.getManifest().version);
						case 8:
							return t.next = 10, f("newClickVersion");
						case 10:
							r = t.sent, e && r != _t && chrome.action.setBadgeText({
								text: "New"
							}), u("version", chrome.runtime.getManifest().version);
						case 13:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Wt() {
			return /Edg/.test(navigator.userAgent) ? "Edge extension" : "Chrome extension"
		}

		function Ht(t) {
			return Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, Ht(t)
		}

		function qt() {
			qt = function() {
				return t
			};
			var t = {},
				e = Object.prototype,
				r = e.hasOwnProperty,
				n = Object.defineProperty || function(t, e, r) {
					t[e] = r.value
				},
				o = "function" == typeof Symbol ? Symbol : {},
				i = o.iterator || "@@iterator",
				a = o.asyncIterator || "@@asyncIterator",
				c = o.toStringTag || "@@toStringTag";

			function s(t, e, r) {
				return Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				s({}, "")
			} catch (t) {
				s = function(t, e, r) {
					return t[e] = r
				}
			}

			function u(t, e, r, o) {
				var i = e && e.prototype instanceof h ? e : h,
					a = Object.create(i.prototype),
					c = new L(o || []);
				return n(a, "_invoke", {
					value: x(t, r, c)
				}), a
			}

			function f(t, e, r) {
				try {
					return {
						type: "normal",
						arg: t.call(e, r)
					}
				} catch (t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			t.wrap = u;
			var l = {};

			function h() {}

			function d() {}

			function p() {}
			var m = {};
			s(m, i, (function() {
				return this
			}));
			var y = Object.getPrototypeOf,
				v = y && y(y(S([])));
			v && v !== e && r.call(v, i) && (m = v);
			var g = p.prototype = h.prototype = Object.create(m);

			function w(t) {
				["next", "throw", "return"].forEach((function(e) {
					s(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function b(t, e) {
				function o(n, i, a, c) {
					var s = f(t[n], t, i);
					if ("throw" !== s.type) {
						var u = s.arg,
							l = u.value;
						return l && "object" == Ht(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
							o("next", t, a, c)
						}), (function(t) {
							o("throw", t, a, c)
						})) : e.resolve(l).then((function(t) {
							u.value = t, a(u)
						}), (function(t) {
							return o("throw", t, a, c)
						}))
					}
					c(s.arg)
				}
				var i;
				n(this, "_invoke", {
					value: function(t, r) {
						function n() {
							return new e((function(e, n) {
								o(t, r, e, n)
							}))
						}
						return i = i ? i.then(n, n) : n()
					}
				})
			}

			function x(t, e, r) {
				var n = "suspendedStart";
				return function(o, i) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw i;
						return O()
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var c = k(a, r);
							if (c) {
								if (c === l) continue;
								return c
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var s = f(t, e, r);
						if ("normal" === s.type) {
							if (n = r.done ? "completed" : "suspendedYield", s.arg === l) continue;
							return {
								value: s.arg,
								done: r.done
							}
						}
						"throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
					}
				}
			}

			function k(t, e) {
				var r = e.method,
					n = t.iterator[r];
				if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
				var o = f(n, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l;
				var i = o.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
			}

			function E(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function _(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function L(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(E, this), this.reset(!0)
			}

			function S(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							o = function e() {
								for (; ++n < t.length;)
									if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: O
				}
			}

			function O() {
				return {
					value: void 0,
					done: !0
				}
			}
			return d.prototype = p, n(g, "constructor", {
				value: p,
				configurable: !0
			}), n(p, "constructor", {
				value: d,
				configurable: !0
			}), d.displayName = s(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, w(b.prototype), s(b.prototype, a, (function() {
				return this
			})), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new b(u(e, r, n, o), i);
				return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, w(g), s(g, c, "Generator"), s(g, i, (function() {
				return this
			})), s(g, "toString", (function() {
				return "[object Generator]"
			})), t.keys = function(t) {
				var e = Object(t),
					r = [];
				for (var n in e) r.push(n);
				return r.reverse(),
					function t() {
						for (; r.length;) {
							var n = r.pop();
							if (n in e) return t.value = n, t.done = !1, t
						}
						return t.done = !0, t
					}
			}, t.values = S, L.prototype = {
				constructor: L,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t)
						for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function n(r, n) {
						return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o],
							a = i.completion;
						if ("root" === i.tryLoc) return n("end");
						if (i.tryLoc <= this.prev) {
							var c = r.call(i, "catchLoc"),
								s = r.call(i, "finallyLoc");
							if (c && s) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							} else if (c) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), l
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.tryLoc === t) {
							var n = r.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								_(r)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, r) {
					return this.delegate = {
						iterator: S(t),
						resultName: e,
						nextLoc: r
					}, "next" === this.method && (this.arg = void 0), l
				}
			}, t
		}

		function zt(t, e, r, n, o, i, a) {
			try {
				var c = t[i](a),
					s = c.value
			} catch (t) {
				return void r(t)
			}
			c.done ? e(s) : Promise.resolve(s).then(n, o)
		}

		function Vt(t) {
			return function() {
				var e = this,
					r = arguments;
				return new Promise((function(n, o) {
					var i = t.apply(e, r);

					function a(t) {
						zt(i, n, o, a, c, "next", t)
					}

					function c(t) {
						zt(i, n, o, a, c, "throw", t)
					}
					a(void 0)
				}))
			}
		}
		chrome.runtime.onMessageExternal.addListener((function(t, e, r) {
				if (/.awesomescreenshot.com\/(.*)/.test(e.url) && "checkExtension" === msg.action) r(!0)
			})), chrome.runtime.onConnect.addListener(function() {
				var t = wt(vt().mark((function t(e) {
					var r, n, o;
					return vt().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								if ("record" !== e.name) {
									t.next = 17;
									break
								}
								if (xt = e, St && (St = !1, Nt(kt.recordBgTabId, kt)), !(e && e.sender && e.sender.tab)) {
									t.next = 17;
									break
								}
								return Lt = e.sender.tab.id, t.next = 8, f();
							case 8:
								if (r = t.sent, !(n = r.recordBgWin) || !n.tabId) {
									t.next = 15;
									break
								}
								return t.next = 14, chrome.tabs.get(n.tabId).catch((function() {}));
							case 14:
								o = t.sent;
							case 15:
								o && n || u("recordBgWin", {
									tabId: Lt
								});
							case 17:
								e.onDisconnect.addListener(function() {
									var t = wt(vt().mark((function t(e) {
										var r, n;
										return vt().wrap((function(t) {
											for (;;) switch (t.prev = t.next) {
												case 0:
													if (!(Lt > 0)) {
														t.next = 12;
														break
													}
													return t.prev = 2, t.next = 5, chrome.tabs.get(Lt);
												case 5:
													r = t.sent, t.next = 11;
													break;
												case 8:
													t.prev = 8, t.t0 = t.catch(2);
												case 11:
													r || Ft();
												case 12:
													return t.next = 14, Y("recordingStatus").catch((function(t) {}));
												case 14:
													(n = t.sent) && "init" !== n || (chrome.action.setBadgeText({
														text: ""
													}), U({
														action: "stop-camera"
													}, {}), U({
														action: "remove-toolbar"
													}, {}), U({
														action: "endSelect"
													}, {}), U({
														action: "removeRecordDiv"
													}, {}), U({
														action: "stop-recording"
													}, {}), St || (kt = null));
												case 17:
												case "end":
													return t.stop()
											}
										}), t, null, [
											[2, 8]
										])
									})));
									return function(e) {
										return t.apply(this, arguments)
									}
								}());
							case 18:
							case "end":
								return t.stop()
						}
					}), t)
				})));
				return function(e) {
					return t.apply(this, arguments)
				}
			}()), chrome.runtime.onInstalled.addListener((function(t) {
				var e, r;
				e = navigator.userAgent.indexOf("Windows") > 0, r = {}, chrome.storage.local.get("options", (function(t) {
					r = function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {};
							e % 2 ? mt(Object(r), !0).forEach((function(e) {
								yt(t, e, r[e])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : mt(Object(r)).forEach((function(e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
							}))
						}
						return t
					}({}, t.options), Ot(r.msObj) && (r.msObj = e ? {
						visible: {
							enable: !0,
							key: "1"
						},
						selected: {
							enable: !0,
							key: "S"
						},
						entire: {
							enable: !0,
							key: "E"
						}
					} : {
						visible: {
							enable: !0,
							key: "V"
						},
						selected: {
							enable: !0,
							key: "S"
						},
						entire: {
							enable: !0,
							key: "E"
						}
					}), Ot(r.format) && (r.format = "png"), Ot(r.delay_sec) && (r.delay_sec = 3), Ot(r.desktop_delay_sec) && (r.desktop_delay_sec = 0), Ot("remove-print-watermark") && (r["remove-print-watermark"] = !1), Ot(r["data-tracking"]) && (r["data-tracking"] = !0), Ot(r["add-url"]) && (r["add-url"] = !1), Ot(r["expand-link"]) && (r["expand-link"] = !0), Ot(r["expand-link-slack"]) && (r["expand-link-slack"] = !0), Ot(r["expand-link-trello"]) && (r["expand-link-trello"] = !0), Ot(r["expand-link-asana"]) && (r["expand-link-asana"] = !0), Ot(r["expand-link-github"]) && (r["expand-link-github"] = !0), Ot(r["expand-link-jira"]) && (r["expand-link-jira"] = !0), Ot(r["expand-link-gmail"]) && (r["expand-link-gmail"] = !1), Ot(r["auto-save-path"]) && (r["auto-save-path"] = !0), r.aws_s && 32 !== r.aws_s.length && (r.aws_s = "", r.aws_uid = "", r.aws_username = ""), Ot(r["show-noti"]) && (r["show-noti"] = !0), Ot(r.popupTab) && Ot(r.version) ? (r.popupTab = "remember", r.activeTab = "record") : function(t, e) {
						var r = !1;
						if (e)
							for (var n = e.split("."), o = t.split("."), i = 0; i < n.length; i++)
								if (n[i] < o[i]) {
									r = !0;
									break
								} return r
					}("4.3.33", r.version) && ("record" === r.popupTab ? (r.popupTab = "remember", r.activeTab = "record") : (r.popupTab = "remember", r.activeTab = "screenshot")), Ot(r["save-as"]) && (r["save-as"] = !0), Ot(r["allow-remind-mic"]) && (r["allow-remind-mic"] = !0), Ot(r.record_mic) && (r.record_mic = !0), Ot(r.record_countdown) && (r.record_countdown = 3), Ot(r.max_resolution) && (r.max_resolution = "720"), Ot(r["save-location"]) ? (r["save-location"] = "cloud", r["save-capture-location"] = "cloud") : Ot(r["save-capture-location"]) && (r["save-capture-location"] = "local"), Ot(r.record_tabsound) && (r.record_tabsound = !0), Ot(r.record_toolbar) && (r.record_toolbar = !0), Ot(r.record_type) && (r.record_type = "desktop"), Ot(r["gmail-btn"]) && (r["gmail-btn"] = !0), Ot(r["context-menu"]) && (r["context-menu"] = !0), Ot(r.ctl_bar) && (r.ctl_bar = !0), Ot(r["auto-timer-stop"]) && (r["auto-timer-stop"] = !1), Ot(r["auto-hour"]) && (r["auto-hour"] = 0), Ot(r["auto-min"]) && (r["auto-min"] = 0), Ot(r["auto-sec"]) && (r["auto-sec"] = 0), chrome.storage.local.set({
						options: r
					}, (function() {}))
				})), "install" === t.reason && chrome.cookies.get({
					url: bt,
					name: "screenshot_personal_uid"
				}, (function(t) {
					t ? chrome.tabs.create({
						url: "/setup-react.html?from=install&isSignIn=true"
					}) : chrome.tabs.create({
						url: "/setup-react.html?from=install"
					})
				}))
			})), chrome.runtime.setUninstallURL("https://www.awesomescreenshot.com/uninstall?appname=as&source=as&p1=uninstall&p2=" + (/Edg/.test(navigator.userAgent) ? "edge" : "chrome")), chrome.runtime.onMessage.addListener((function(t, e, r) {
				switch (t.action) {
					case "getUID":
						return chrome.cookies.getAll({
							url: X.baseUrl
						}).then((function(t) {
							var e = "",
								n = "";
							t.forEach((function(t) {
								"screenshot_personal_session_id" === t.name ? e = t.value : "screenshot_personal_uid" === t.name && (n = t.value)
							})), r({
								sid: e,
								uid: n
							})
						})), !0;
					case "openNewTab":
						y(t.data), r();
						break;
					case "test":
						return xt.onMessage.addListener((function(t) {
							"tests" === t.action && r("hhh")
						})), xt.postMessage({
							action: "tests"
						}), !0;
					case "startRecord":
						Rt(t.recordOptions, t.screen), r();
						break;
					case "reopenPrepare":
						Bt(), r();
						break;
					case "openCameraPage":
						h = t.screen, new Promise((function(t, e) {
							chrome.windows.create({
								focused: !0,
								width: 800,
								left: parseInt(h.left + (h.width - 800) / 2),
								type: "popup",
								url: "/camera.html",
								height: 558
							}).then((function(e) {
								t({
									tabId: e.tabs[0].id,
									winId: e.id
								})
							}))
						})), u("recordSettings", t.recordOptions), r();
						break;
					case "mute":
						chrome.tabs.update(e.tab.id, {
							muted: !0
						});
						break;
					case "unmute":
						chrome.tabs.update(e.tab.id, {
							muted: !1
						});
						break;
					case "setRecordDefault":
						kt = null;
						break;
					case "updateMenuVisible":
						! function() {
							jt.apply(this, arguments)
						}();
						break;
					case "updateContextMenu":
						Dt(t.isBeginRecorded);
						break;
					case "broadCastMessage":
						U(t.data);
						break;
					case "sendMessageToTab":
						var n = t.tabid;
						return n && $(n, t.data).catch((function(t) {
							r("err")
						})), !0;
					case "saveStorage":
						var o = t.type;
						o && u(o, t.data);
						break;
					case "updateStorage":
						var i = t.type;
						i && function(t, e) {
							d.apply(this, arguments)
						}(i, t.data);
						break;
					case "setBadge":
						var a = t.type;
						a && function(t, e) {
							"text" === t ? chrome.action.setBadgeText({
								text: e
							}) : "color" === t && (chrome.action.setBadgeBackgroundColor({
								color: e
							}), chrome.action.setBadgeTextColor && chrome.action.setBadgeTextColor({
								color: "white"
							}))
						}(a, t.data);
						break;
					case "windowsCreate":
						var c = t.data;
						c && chrome.windows.create(c);
						break;
					case "insertContent":
						var s = t.tabid;
						s && W(s).then((function() {
							$(s, t.data)
						}));
						break;
					case "insertAction":
						var f = t.tabid;
						f && W(f).then((function() {
							r()
						}));
						break;
					case "insertAllContent":
						var l = t.data;
						chrome.tabs.query({}, (function(t) {
							t.forEach((function(t) {
								/https?:\/\//.test(t.url) && W(t.id).then(wt(vt().mark((function e() {
									return vt().wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												$(t.id, l).catch((function() {}));
											case 1:
											case "end":
												return e.stop()
										}
									}), e)
								})))).catch((function(t) {}))
							}))
						}));
						break;
					case "getPremiumLevel":
						return function(t) {
							return new Promise((function(e, r) {
								chrome.cookies.get({
									url: t,
									name: "screenshot_personal_premium_level"
								}, (function(t) {
									t && parseInt(t.value) > 1 ? e(1) : e(1)
								}))
							}))
						}(bt).then((function(t) {
							r(t)
						})), !0;
					case "getStorage":
						return t.type && chrome.storage.local.get("userinfo", (function(t) {
							r(t)
						})), !0;
					case "record/startCustom":
						! function(t, e) {
							Tt.apply(this, arguments)
						}(t.data, e.tab.id);
						break;
					case "offScreenStatus":
						u("offScreenStatus", t.data);
						break;
					case "releaseKeepAwake":
						chrome.power.releaseKeepAwake();
						break;
					case "keepAwake":
						chrome.power.requestKeepAwake("display");
						break;
					case "updateNewClickVersion":
						u("newClickVersion", _t);
						break;
					case "googleEvent":
						! function(t, e) {
							dt && dt.fireEvent(t, {
								event_category: Wt().toLowerCase(),
								event_label: e
							})
						}(t.name, t.extra)
				}
				var h
			})), chrome.tabs.onUpdated.addListener((function(t, e, r) {
				/http|https|file|ftp/.test(r.url.slice(0, 5)) && B({
					action: "tabUpdated",
					tabid: r.id
				})
			})), chrome.contextMenus.onClicked.addListener(function() {
				var t = wt(vt().mark((function t(e, r) {
					return vt().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								t.t0 = e.menuItemId, t.next = "record_desktop" === t.t0 ? 4 : "record_tab" === t.t0 ? 9 : "stop_record" === t.t0 ? 14 : 16;
								break;
							case 4:
								return t.next = 6, p(bt);
							case 6:
								return Ct("desktop", t.sent, r), t.abrupt("break", 16);
							case 9:
								return t.next = 11, p(bt);
							case 11:
								return Ct("tab", t.sent, r), t.abrupt("break", 16);
							case 14:
								return B({
									action: "record/stop",
									from: "content menu click"
								}), t.abrupt("break", 16);
							case 16:
							case "end":
								return t.stop()
						}
					}), t)
				})));
				return function(e, r) {
					return t.apply(this, arguments)
				}
			}()), chrome.commands.onCommand.addListener(function() {
				var t = wt(vt().mark((function t(e) {
					var r, n, o;
					return vt().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 3, Y("recordingStatus").catch((function(t) {}));
							case 3:
								if (r = t.sent, "pause-or-resume-recording" !== e) {
									t.next = 11;
									break
								}
								return t.next = 7, Y("isPaused").catch((function(t) {}));
							case 7:
								n = t.sent, r && "recording" === r && B(n ? {
									action: "record/resume"
								} : {
									action: "record/pause"
								}), t.next = 20;
								break;
							case 11:
								if ("start-or-stop-recording" !== e) {
									t.next = 20;
									break
								}
								if (r && "init" !== r) {
									t.next = 19;
									break
								}
								return t.next = 15, p(bt);
							case 15:
								o = t.sent, chrome.tabs.query({
									active: !0,
									currentWindow: !0
								}, (function(t) {
									var e = t[0];
									e && Ct("desktop", o, e)
								})), t.next = 20;
								break;
							case 19:
								"preparing" === r ? Bt() : B({
									action: "record/stop",
									from: "commands stop"
								});
							case 20:
							case "end":
								return t.stop()
						}
					}), t)
				})));
				return function(e) {
					return t.apply(this, arguments)
				}
			}()), chrome.tabs.onUpdated.addListener((function(t, e) {
				kt && t === kt.recordBgTabId && "complete" === e.status && Nt(kt.recordBgTabId, kt)
			})), Ft(),
			function() {
				It.apply(this, arguments)
			}(), setTimeout((function() {
				Pt()
			}), 800), setTimeout((function() {
				! function() {
					Gt.apply(this, arguments)
				}()
			}), 1e3);
		var Jt = X.baseUrl;

		function Xt() {
			return Zt.apply(this, arguments)
		}

		function Zt() {
			return (Zt = Vt(qt().mark((function t() {
				return qt().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.abrupt("return", new Promise((function(t) {
								l("save-capture-location").then((function(e) {
									t("cloud" === e)
								}))
							})));
						case 1:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Kt() {
			return (Kt = Vt(qt().mark((function t(e) {
				return qt().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, l("save-capture-location");
						case 2:
							"cloud" === t.sent ? Qt((function(t) {
								t ? chrome.storage.local.get("userinfo", (function(t) {
									t && t.userinfo && t.userinfo.allowUploadImage ? e(!0) : new Promise((function(t, e) {
										chrome.cookies.get({
											url: Jt,
											name: "screenshot_personal_premium_level"
										}, (function(e) {
											e && parseInt(e.value) >= 1 ? t(!0) : t(!1)
										}))
									})).then((function(t) {
										e(!!t)
									}))
								})) : e(!0)
							})) : e(!0);
						case 4:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Qt(t) {
			chrome.cookies.get({
				url: Jt,
				name: "screenshot_personal_uid"
			}, (function(e) {
				e ? t && t(!0) : t && t(!1)
			}))
		}

		function te() {
			return new Promise((function(t, e) {
				oe((function(e) {
					if (e) {
						var r = e.url,
							n = !0;
						/Edg/.test(navigator.userAgent) ? r.match(/https:\/\/microsoftedge.microsoft.com\/addons/i) && (n = !1) : (r.match(/https:\/\/chrome.google.com/i) || r.match(/chrome(.*):\/\//) || r.match(/https:\/\/chromewebstore.google.com/i) || r.match(/chrome-extension:\/\//)) && (n = !1), /http|https|file|ftp/.test(r.slice(0, 5)) || (n = !1), t(n)
					}
				}))
			}))
		}

		function ee(t) {
			return chrome.scripting.executeScript({
				target: {
					tabId: t
				},
				injectImmediately: !0,
				func: re
			}, (function(t) {}))
		}

		function re() {
			"undefined" == typeof isContentScriptLoaded ? chrome.runtime.sendMessage({
				action: "insert_script"
			}) : chrome.runtime.sendMessage({
				action: "script_running"
			})
		}

		function ne(t, e, r) {
			t && chrome.tabs.sendMessage(t, e, {
				frameId: 0
			}, r)
		}

		function oe(t) {
			chrome.tabs.query({
				active: !0,
				currentWindow: !0
			}, (function(e) {
				t(e[0])
			}))
		}
		var ie = X.baseUrl;

		function ae() {
			chrome.cookies.getAll({
				url: ie
			}, (function(t) {
				if (t) {
					for (var e = "", r = 0, n = t.length; r < n; r++) "screenshot_personal_uid" === t[r].name && (e = t[r].value);
					e ? fetch(ie + "/api/v1/user/einfo", {
						method: "GET",
						cache: "no-cache",
						headers: {
							"Content-Type": "application/json; charset=utf-8"
						}
					}).then((function(t) {
						return t.json()
					})).then((function(t) {
						var r = t.data,
							n = parseInt("2"),
							o = r.newPremium,
							i = r.permission.allowUploadImage,
							a = r.permission.allowVideoCreate,
							c = r.counts.imageLimitation,
							s = r.counts.imageTotalLimitation,
							f = r.counts.videoLimitation,
							l = r.counts.videoTotalLimitation;
						u("userinfo", {
							uid: e,
							newPremium: o,
							premiumLevel: n,
							allowUploadImage: i,
							allowVideoCreate: a,
							imageLimitation: c,
							imageTotalLimitation: s,
							videoLimitation: f,
							videoTotalLimitation: l
						})
					})) : (o = "userinfo", chrome.storage.local.remove(o))
				}
				var o
			}))
		}

		function ce(t) {
			return ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, ce(t)
		}

		function se() {
			se = function() {
				return t
			};
			var t = {},
				e = Object.prototype,
				r = e.hasOwnProperty,
				n = Object.defineProperty || function(t, e, r) {
					t[e] = r.value
				},
				o = "function" == typeof Symbol ? Symbol : {},
				i = o.iterator || "@@iterator",
				a = o.asyncIterator || "@@asyncIterator",
				c = o.toStringTag || "@@toStringTag";

			function s(t, e, r) {
				return Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				s({}, "")
			} catch (t) {
				s = function(t, e, r) {
					return t[e] = r
				}
			}

			function u(t, e, r, o) {
				var i = e && e.prototype instanceof h ? e : h,
					a = Object.create(i.prototype),
					c = new L(o || []);
				return n(a, "_invoke", {
					value: x(t, r, c)
				}), a
			}

			function f(t, e, r) {
				try {
					return {
						type: "normal",
						arg: t.call(e, r)
					}
				} catch (t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			t.wrap = u;
			var l = {};

			function h() {}

			function d() {}

			function p() {}
			var m = {};
			s(m, i, (function() {
				return this
			}));
			var y = Object.getPrototypeOf,
				v = y && y(y(S([])));
			v && v !== e && r.call(v, i) && (m = v);
			var g = p.prototype = h.prototype = Object.create(m);

			function w(t) {
				["next", "throw", "return"].forEach((function(e) {
					s(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function b(t, e) {
				function o(n, i, a, c) {
					var s = f(t[n], t, i);
					if ("throw" !== s.type) {
						var u = s.arg,
							l = u.value;
						return l && "object" == ce(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
							o("next", t, a, c)
						}), (function(t) {
							o("throw", t, a, c)
						})) : e.resolve(l).then((function(t) {
							u.value = t, a(u)
						}), (function(t) {
							return o("throw", t, a, c)
						}))
					}
					c(s.arg)
				}
				var i;
				n(this, "_invoke", {
					value: function(t, r) {
						function n() {
							return new e((function(e, n) {
								o(t, r, e, n)
							}))
						}
						return i = i ? i.then(n, n) : n()
					}
				})
			}

			function x(t, e, r) {
				var n = "suspendedStart";
				return function(o, i) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw i;
						return O()
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var c = k(a, r);
							if (c) {
								if (c === l) continue;
								return c
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var s = f(t, e, r);
						if ("normal" === s.type) {
							if (n = r.done ? "completed" : "suspendedYield", s.arg === l) continue;
							return {
								value: s.arg,
								done: r.done
							}
						}
						"throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
					}
				}
			}

			function k(t, e) {
				var r = e.method,
					n = t.iterator[r];
				if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
				var o = f(n, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l;
				var i = o.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
			}

			function E(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function _(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function L(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(E, this), this.reset(!0)
			}

			function S(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							o = function e() {
								for (; ++n < t.length;)
									if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: O
				}
			}

			function O() {
				return {
					value: void 0,
					done: !0
				}
			}
			return d.prototype = p, n(g, "constructor", {
				value: p,
				configurable: !0
			}), n(p, "constructor", {
				value: d,
				configurable: !0
			}), d.displayName = s(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, w(b.prototype), s(b.prototype, a, (function() {
				return this
			})), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new b(u(e, r, n, o), i);
				return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, w(g), s(g, c, "Generator"), s(g, i, (function() {
				return this
			})), s(g, "toString", (function() {
				return "[object Generator]"
			})), t.keys = function(t) {
				var e = Object(t),
					r = [];
				for (var n in e) r.push(n);
				return r.reverse(),
					function t() {
						for (; r.length;) {
							var n = r.pop();
							if (n in e) return t.value = n, t.done = !1, t
						}
						return t.done = !0, t
					}
			}, t.values = S, L.prototype = {
				constructor: L,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t)
						for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function n(r, n) {
						return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o],
							a = i.completion;
						if ("root" === i.tryLoc) return n("end");
						if (i.tryLoc <= this.prev) {
							var c = r.call(i, "catchLoc"),
								s = r.call(i, "finallyLoc");
							if (c && s) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							} else if (c) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), l
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.tryLoc === t) {
							var n = r.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								_(r)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, r) {
					return this.delegate = {
						iterator: S(t),
						resultName: e,
						nextLoc: r
					}, "next" === this.method && (this.arg = void 0), l
				}
			}, t
		}

		function ue(t, e, r, n, o, i, a) {
			try {
				var c = t[i](a),
					s = c.value
			} catch (t) {
				return void r(t)
			}
			c.done ? e(s) : Promise.resolve(s).then(n, o)
		}

		function fe(t) {
			return function() {
				var e = this,
					r = arguments;
				return new Promise((function(n, o) {
					var i = t.apply(e, r);

					function a(t) {
						ue(i, n, o, a, c, "next", t)
					}

					function c(t) {
						ue(i, n, o, a, c, "throw", t)
					}
					a(void 0)
				}))
			}
		}
		var le = 3e4;

		function he() {
			return he = fe(se().mark((function t(e, r, n, o, i, a, c, s, u) {
				var f, l, h, d, p, m, y, v, g, w, b, x, k, E, _, L, S, O, I, T, j, C, M, P, A, D, $, N;
				return se().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return f = u || le, l = !1, t.next = 4, de(e[0]);
						case 4:
							h = t.sent, d = h.width / n, p = h.height / n, c && parseInt(c.height) > parseInt(h.height) && (l = !0), m = Math.ceil(p * r), v = null, g = null, a && a.forEach(function() {
								var t = fe(se().mark((function t(r) {
									return se().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												if (!(r && r.fill.width > 0 && r.fill.height > 0)) {
													t.next = 11;
													break
												}
												if (0 != r.fill.x) {
													t.next = 7;
													break
												}
												return t.next = 4, pe(e[0], r.sample);
											case 4:
												v = t.sent, t.next = 11;
												break;
											case 7:
												if (!(r.fill.x > 0)) {
													t.next = 11;
													break
												}
												return t.next = 10, pe(e[0], r.sample);
											case 10:
												g = t.sent;
											case 11:
											case "end":
												return t.stop()
										}
									}), t)
								})));
								return function(e) {
									return t.apply(this, arguments)
								}
							}()), o ? (w = o.height, l && (w = p), y = (m = w * r) ? ((l ? p : c.height) + (e.length > 2 ? (e.length - 2) * w : 0) + m) / n : ((l ? p : c.height) + (e.length - 1) * w) / n, i && i.height > 0 && (y += i.height / n)) : y = m ? (e.length - 1) * p + m : e.length * p, b = Math.ceil(y / f), x = y % f, k = 0, E = 0, _ = [], L = 0, S = 0;
						case 19:
							if (!(S < b)) {
								t.next = 68;
								break
							}
							O = new OffscreenCanvas(10, 10), I = O.getContext("2d"), O.id = "c_" + S, O.width = d, O.height = S === b - 1 ? x : f, T = k;
						case 26:
							if (!(T < e.length)) {
								t.next = 64;
								break
							}
							return j = 0, C = 0, M = d * n, P = p * n, A = 0, D = d, $ = p, t.next = 31, de(e[T]);
						case 31:
							if (N = t.sent, !o) {
								t.next = 49;
								break
							}
							if (w = o.height, l && (w = p), 0 === T ? (P = l ? p : c.height, $ = (l ? p : c.height) / n) : T === e.length - 1 && S === b - 1 ? (j = o.x, A = o.x / n, L ? (C = (p - Math.min(L, m)) * n, $ = Math.min(L, m)) : (C = (p - m) * n, $ = m / n), P = $ * n) : (j = o.x, A = o.x / n, L ? (C = (p - L) * n, j = o.x, A = o.x / n, P = ($ = L) * n) : (C = o.y, j = o.x, A = o.x / n, $ = w / n, D = o.width / n, P = w, M = o.width), T === e.length - 1 && S !== b - 1 && (C = (p - m) * n)), I.drawImage(N, j, C, M, P, A, E, D, $), 0 !== T && (o.x > 0 && v && (I.beginPath(), I.rect(0, E - 1, o.x / n, $ + 1), I.fillStyle = v, I.fill()), o.x + o.width < d && g && (I.beginPath(), I.rect((o.x + o.width) / n, E - 1, (d - (o.x + o.width)) / n, $ + 1), I.fillStyle = g, I.fill()), T === e.length - 1 && S === b - 1 && i && i.height > 0 && I.drawImage(N, 0, i.y, d * n, i.height, 0, E + $, d, i.height / n)), !(E + $ > f)) {
								t.next = 45;
								break
							}
							return k = T, L = T === e.length - 1 && S + 1 === b - 1 ? E + m - f : E + o.height / n - f, E = 0, t.abrupt("break", 64);
						case 45:
							E = L ? E + L : E + $, L = 0;
						case 47:
							t.next = 61;
							break;
						case 49:
							if (T === e.length - 1 && S === b - 1 ? C = L ? (p - Math.min(L, m)) * n : (p - m) * n : (L && (C = (p - L) * n, P = ($ = L) * n), T === e.length - 1 && S !== b - 1 && (C = (p - m) * n)), I.drawImage(N, j, C, M, P, A, E, D, $), !(E + $ > f)) {
								t.next = 59;
								break
							}
							return k = T, L = T === e.length - 1 && S + 1 === b - 1 ? E + m - f : E + p - f, E = 0, t.abrupt("break", 64);
						case 59:
							E = L ? E + L : E + $, L = 0;
						case 61:
							T++, t.next = 26;
							break;
						case 64:
							! function(t) {
								O.convertToBlob().then((function(e) {
									if (_.push({
											blob: e,
											index: t
										}), _.length === b) {
										_.sort((function(t, e) {
											return t.index - e.index
										}));
										s(_.map((function(t) {
											return t.blob
										})))
									}
								}))
							}(S);
						case 65:
							S++, t.next = 19;
							break;
						case 68:
						case 69:
						case "end":
							return t.stop()
					}
				}), t)
			}))), he.apply(this, arguments)
		}

		function de(t) {
			return new Promise((function(e) {
				fetch(t).then((function(t) {
					return t.blob()
				})).then((function(t) {
					createImageBitmap(t).then((function(t) {
						e(t)
					}))
				}))
			}))
		}

		function pe(t, e) {
			return me.apply(this, arguments)
		}

		function me() {
			return me = fe(se().mark((function t(e, r) {
				var n, o, i, a, c, s, u, f, l;
				return se().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							if (l = function(t, e) {
									function r(t, e, r) {
										return (t << 16) + (e << 8) + r
									}
									e = e || new Map;
									for (var n = 0, o = t.length; n < o; n += 4)
										if (255 === t[n + 3]) {
											var i = r(t[n], t[n + 1], t[n + 2]);
											e.set(i, (e.get(i) || 0) + 1)
										} return e
								}, !(r.height > 0 && r.width > 0)) {
								t.next = 22;
								break
							}
							return n = new Map, (o = new OffscreenCanvas(10, 10)).width = r.width, o.height = r.height, t.next = 8, de(e);
						case 8:
							i = t.sent, (a = o.getContext("2d")).drawImage(i, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height), c = null;
							try {
								c = a.getImageData(0, 0, r.width, r.height)
							} catch (t) {}
							if (!c) {
								t.next = 21;
								break
							}
							if (l(c.data, n), s = 0, u = 0, f = !1, n.forEach((function(t, e) {
									t > s && (s = t, u = e, f = !0)
								})), !f) {
								t.next = 20;
								break
							}
							return t.abrupt("return", "rgb(" + ye(u).join(", ") + ")");
						case 20:
							return t.abrupt("return", "rgb(212,212,212)");
						case 21:
							return t.abrupt("return", null);
						case 22:
						case "end":
							return t.stop()
					}
				}), t)
			}))), me.apply(this, arguments)
		}

		function ye(t) {
			var e = 255 & t,
				r = 255 & (t >>= 8);
			return [255 & (t >>= 8), r, e]
		}

		function ve(t) {
			return ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, ve(t)
		}

		function ge() {
			ge = function() {
				return t
			};
			var t = {},
				e = Object.prototype,
				r = e.hasOwnProperty,
				n = Object.defineProperty || function(t, e, r) {
					t[e] = r.value
				},
				o = "function" == typeof Symbol ? Symbol : {},
				i = o.iterator || "@@iterator",
				a = o.asyncIterator || "@@asyncIterator",
				c = o.toStringTag || "@@toStringTag";

			function s(t, e, r) {
				return Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				s({}, "")
			} catch (t) {
				s = function(t, e, r) {
					return t[e] = r
				}
			}

			function u(t, e, r, o) {
				var i = e && e.prototype instanceof h ? e : h,
					a = Object.create(i.prototype),
					c = new L(o || []);
				return n(a, "_invoke", {
					value: x(t, r, c)
				}), a
			}

			function f(t, e, r) {
				try {
					return {
						type: "normal",
						arg: t.call(e, r)
					}
				} catch (t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			t.wrap = u;
			var l = {};

			function h() {}

			function d() {}

			function p() {}
			var m = {};
			s(m, i, (function() {
				return this
			}));
			var y = Object.getPrototypeOf,
				v = y && y(y(S([])));
			v && v !== e && r.call(v, i) && (m = v);
			var g = p.prototype = h.prototype = Object.create(m);

			function w(t) {
				["next", "throw", "return"].forEach((function(e) {
					s(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function b(t, e) {
				function o(n, i, a, c) {
					var s = f(t[n], t, i);
					if ("throw" !== s.type) {
						var u = s.arg,
							l = u.value;
						return l && "object" == ve(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
							o("next", t, a, c)
						}), (function(t) {
							o("throw", t, a, c)
						})) : e.resolve(l).then((function(t) {
							u.value = t, a(u)
						}), (function(t) {
							return o("throw", t, a, c)
						}))
					}
					c(s.arg)
				}
				var i;
				n(this, "_invoke", {
					value: function(t, r) {
						function n() {
							return new e((function(e, n) {
								o(t, r, e, n)
							}))
						}
						return i = i ? i.then(n, n) : n()
					}
				})
			}

			function x(t, e, r) {
				var n = "suspendedStart";
				return function(o, i) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw i;
						return O()
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var c = k(a, r);
							if (c) {
								if (c === l) continue;
								return c
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var s = f(t, e, r);
						if ("normal" === s.type) {
							if (n = r.done ? "completed" : "suspendedYield", s.arg === l) continue;
							return {
								value: s.arg,
								done: r.done
							}
						}
						"throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
					}
				}
			}

			function k(t, e) {
				var r = e.method,
					n = t.iterator[r];
				if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
				var o = f(n, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l;
				var i = o.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
			}

			function E(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function _(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function L(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(E, this), this.reset(!0)
			}

			function S(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							o = function e() {
								for (; ++n < t.length;)
									if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: O
				}
			}

			function O() {
				return {
					value: void 0,
					done: !0
				}
			}
			return d.prototype = p, n(g, "constructor", {
				value: p,
				configurable: !0
			}), n(p, "constructor", {
				value: d,
				configurable: !0
			}), d.displayName = s(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, w(b.prototype), s(b.prototype, a, (function() {
				return this
			})), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new b(u(e, r, n, o), i);
				return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, w(g), s(g, c, "Generator"), s(g, i, (function() {
				return this
			})), s(g, "toString", (function() {
				return "[object Generator]"
			})), t.keys = function(t) {
				var e = Object(t),
					r = [];
				for (var n in e) r.push(n);
				return r.reverse(),
					function t() {
						for (; r.length;) {
							var n = r.pop();
							if (n in e) return t.value = n, t.done = !1, t
						}
						return t.done = !0, t
					}
			}, t.values = S, L.prototype = {
				constructor: L,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t)
						for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function n(r, n) {
						return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o],
							a = i.completion;
						if ("root" === i.tryLoc) return n("end");
						if (i.tryLoc <= this.prev) {
							var c = r.call(i, "catchLoc"),
								s = r.call(i, "finallyLoc");
							if (c && s) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							} else if (c) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), l
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.tryLoc === t) {
							var n = r.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								_(r)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, r) {
					return this.delegate = {
						iterator: S(t),
						resultName: e,
						nextLoc: r
					}, "next" === this.method && (this.arg = void 0), l
				}
			}, t
		}

		function we(t, e, r, n, o, i, a) {
			try {
				var c = t[i](a),
					s = c.value
			} catch (t) {
				return void r(t)
			}
			c.done ? e(s) : Promise.resolve(s).then(n, o)
		}

		function be(t) {
			return function() {
				var e = this,
					r = arguments;
				return new Promise((function(n, o) {
					var i = t.apply(e, r);

					function a(t) {
						we(i, n, o, a, c, "next", t)
					}

					function c(t) {
						we(i, n, o, a, c, "throw", t)
					}
					a(void 0)
				}))
			}
		}
		var xe = X.baseUrl,
			ke = chrome.runtime.getManifest().version,
			Ee = {};

		function _e(t, e, r, n, o, i) {
			oe(function() {
				var a = be(ge().mark((function a(c) {
					var s;
					return ge().wrap((function(a) {
						for (;;) switch (a.prev = a.next) {
							case 0:
								return ne(c.id, {
									action: "destroy_selected"
								}), a.next = 3, Xt();
							case 3:
								s = a.sent, t && s && navigator.onLine ? Pe(o, i, r, n, (function(r, o, i) {
									var a = new Se(t, "1", e, 0),
										c = new Le(r, o);
									c.sid = i, c.uploadItems.push(a), c.addCapturesCount(), n && (c.format = n), Ee[r] = c, c.finishCapture(), c.checkStatus()
								}), (function(e) {
									Xr(t), ae()
								})) : t && Xr(t);
							case 5:
							case "end":
								return a.stop()
						}
					}), a)
				})));
				return function(t) {
					return a.apply(this, arguments)
				}
			}())
		}

		function Le(t, e) {
			this.imageId = t, this.imageUrl = e, this.haveOpenUrl = !1, this.captureCount = 0, this.captureFinish = !1, this.uploadItems = [], this.uploadFinish = !1, this.sid = "", this.failedInitImage = !1, this.clientCreateTime = (new Date).toUTCString(), this.offsetInfo = {
				centerOffX: nn().centerOffX,
				centerOffY: nn().centerOffY,
				centerW: nn().centerW,
				centerH: nn().centerH
			}, this.menuType = nn().menuType, this.type = nn().type, this.errMsg = "", this.format = "image/png", this.failedMaxTime = !1, this.height = 0, this.bgRegions = null, this.contentClip = null, this.bottomClip = null, this.topCapturePosition = null, this.imageScale = 0, this.leftClr = null, this.rightClr = null
		}

		function Se(t, e, r, n) {
			this.blob = t, this.index = e, this.isLast = r, this.failedTimes = 0, this.inTimeoutFun = !1, this.status = n
		}

		function Oe(t) {
			var e = Ee[t];
			if (!e)
				for (var r in Ee) {
					var n = Ee[r];
					t == n.imageId && (e = n)
				}
			e && e.checkStatus()
		}

		function Ie(t) {
			var e = new Le(t);
			return Ee[t] = e, e
		}

		function Te(t) {
			var e = Ee[t];
			if (!e)
				for (var r in Ee) {
					var n = Ee[r];
					if (t == n.imageId) {
						e = n;
						break
					}
				}
			return e
		}

		function je(t, e, r, n, o) {
			return Ce.apply(this, arguments)
		}

		function Ce() {
			return Ce = be(ge().mark((function t(e, r, n, o, i) {
				var a;
				return ge().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, Xt();
						case 2:
							if (!t.sent || !navigator.onLine) {
								t.next = 11;
								break
							}
							return en(!0), t.next = 7, l("format");
						case 7:
							a = t.sent, Pe(e, r, n, "jpg" === a ? "image/jpeg" : "image/png", (function(t, e, r) {
								var n = Te(o);
								n ? (r && (n.sid = r), n.updateInfo(t, e)) : (n = new Le(t, e), Ee[o] = n, r && (n.sid = r)), i && Me(t, {
									contentInfo: i
								}), n.checkStatus()
							}), (function() {
								en(!1);
								var t = Te(o);
								t && t.failedInitId(), ae()
							})), t.next = 12;
							break;
						case 11:
							en(!1);
						case 12:
						case "end":
							return t.stop()
					}
				}), t)
			}))), Ce.apply(this, arguments)
		}

		function Me(t, e) {
			fetch(xe + "/api/v1/image/log", {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=utf-8"
				},
				body: JSON.stringify({
					imageID: t,
					info: JSON.stringify(e)
				})
			}).then((function(t) {
				return t.json()
			})).then((function(t) {}))
		}

		function Pe(t, e, r, n, o, i) {
			fetch(xe + "/api/v1/image/create", {
				method: "POST",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json; charset=utf-8"
				},
				body: JSON.stringify({
					title: t,
					folderID: "0",
					sourceURL: e,
					actionType: r,
					contentType: n,
					client: /Edg/.test(navigator.userAgent) ? "Edge extension" : "chrome extension",
					version: ke,
					clientCreateTime: (new Date).toUTCString()
				})
			}).then((function(t) {
				return t.json()
			})).then((function(t) {
				t && (1 === t.code ? o(t.data.image.id, t.data.image.imageURI, t.data.sid) : (i(t.code), Me("-1", {
					errMsg: t.msg + "image/create; "
				})))
			}))
		}

		function Ae(t, r, n) {
			if (1 != t.status || !t.blob) {
				t.status = 1;
				var o = new FormData;
				o.append("file", t.blob), o.append("imageID", r), o.append("imageIndex", t.index), fetch(xe + "/api/v1/image/upload_multipart" + (n ? "?sid=" + n : ""), {
					method: "POST",
					body: o
				}).then((function(t) {
					return t.json()
				})).then((function(n) {
					1 === n.code ? (t.status = 2, Oe(r)) : (t.status = 3, t.failedTimes++, Oe(r), t.failedTimes < 2 && Me(r, {
						errMsg: e.statusText + " status:" + e.status + " " + t.index + " upload_multipart; "
					}))
				}))
			}
		}

		function De(t, e, r, n) {
			if ((o = Te(n)).addCapturesCount(), r && o.finishCapture(), "entire" === o.type && "entire" === o.menuType) ! function(t, e, r, n, o, i) {
				var a = Te(o);
				if (!a.contentClip) {
					var c = {
						contentClip: Sr,
						bgRegions: _r,
						bottomClip: Lr,
						topCapturePosition: Or
					};
					a.contentClip = c.contentClip, a.bgRegions = c.bgRegions, a.bottomClip = c.bottomClip, a.topCapturePosition = c.topCapturePosition, c.bgRegions && c.bgRegions.forEach(function() {
						var e = be(ge().mark((function e(r) {
							return ge().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (!(r && r.fill.width > 0 && r.fill.height > 0)) {
											e.next = 11;
											break
										}
										if (0 != r.fill.x) {
											e.next = 7;
											break
										}
										return e.next = 4, pe(t, r.sample);
									case 4:
										a.leftClr = e.sent, e.next = 11;
										break;
									case 7:
										if (!(r.fill.x > 0)) {
											e.next = 11;
											break
										}
										return e.next = 10, pe(t, r.sample);
									case 10:
										a.rightClr = e.sent;
									case 11:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}())
				}
				if (t) {
					var s = new OffscreenCanvas(100, 100),
						u = s.getContext("2d");
					fetch(t).then((function(t) {
						return t.blob()
					})).then((function(t) {
						createImageBitmap(t).then((function(t) {
							var c, f, l, h, d, p, m, y, v, g = t.width,
								w = t.height,
								b = 0;
							if (parseInt(a.topCapturePosition.height) > w + 10) {
								a.isMobileMode = !0;
								var x = a.topCapturePosition.width / g;
								a.imageScale = Math.round(x), a.topCapturePosition = k(x, a.topCapturePosition), a.topCapturePosition.height > w && (a.topCapturePosition.height = w, a.topCapturePosition.width = g), a.contentClip && (a.contentClip = k(x, a.contentClip)), a.contentClip.y + a.contentClip.height > w && (a.contentClip.height = w - a.contentClip.y), a.bottomClip && (a.bottomClip = k(x, a.bottomClip))
							}

							function k(t, e) {
								return e.x = e.x / t, e.y = Math.ceil(e.y / t), e.height = parseInt(e.height / t), e.width = e.width / t, e
							}
							if (1 === e) c = d = 0, f = p = 0, l = m = g, h = y = v = a.topCapturePosition.height - 1;
							else {
								var E = a.contentClip.height;
								if (f = a.contentClip.y, c = d = a.contentClip.x, p = 0, l = m = a.contentClip.width, h = y = E - 1, r) {
									var _ = rn();
									b = Math.ceil(E * _.y), h = y = b = b <= 0 ? 1 : b;
									var L = a.bottomClip && a.bottomClip.height ? a.bottomClip.height : 0;
									f = w - b - L, v = b + L
								} else v = y
							}
							s.width = a.isMobileMode ? g - 2 : g, s.height = v, u.drawImage(t, c, f, l, h, d, p, m, y), a.contentClip.x > 0 && a.leftClr && (u.beginPath(), u.rect(0, 0, c, h), u.fillStyle = a.leftClr, u.fill()), a.contentClip.x + a.contentClip.width < g && a.rightClr && (u.beginPath(), u.rect(c + l, 0, g - (c + l), h), u.fillStyle = a.rightClr, u.fill()), a.bottomClip && a.bottomClip.height > 0 && r && u.drawImage(t, 0, a.bottomClip.y, g, a.bottomClip.height, 0, h, g, a.bottomClip.height), "image/jpeg" === n ? s.convertToBlob({
								type: "image/jpeg",
								quality: 1
							}).then((function(e) {
								if (t = null, s = null, !e) {
									var r = Te(o);
									r && (r.imageUrl ? Me(r.imageId, {
										clientCreateTime: r.clientCreateTime,
										errMsg: "cropImage return null size:" + l + " " + h + " " + r.type + r.menuType
									}) : r.errMsg = "cropImage return null size:" + l + " " + h + " " + r.type + r.menuType)
								}
								i(e)
							}), "image/jpeg", 1) : s.convertToBlob().then((function(e) {
								if (t = null, s = null, !e) {
									var r = Te(o);
									r && (r.imageUrl ? Me(r.imageId, {
										clientCreateTime: r.clientCreateTime + " ",
										errMsg: "cropImage return null size:" + centerW + " " + centerH + " " + type + menuType
									}) : r.errMsg = "cropImage return null size:" + centerW + " " + centerH + " " + type + menuType)
								}
								i(e)
							}))
						}))
					}))
				}
			}(t, e, r, o.format, n, (function(t) {
				var o = Te(n);
				if (!t && o) o.imageUrl ? Me(o.imageId, {
					clientCreateTime: o.clientCreateTime,
					errMsg: "cropImage return null"
				}) : o.errMsg = o.errMsg ? o.errMsg + "cropImage return null; " : "cropImage return null; ";
				else {
					var i = new Se(t, e, r, 0);
					if (o) {
						o.uploadItems.push(i);
						var a = o.imageUrl ? o.imageId : 0;
						a > 0 && Ae(i, a, o.sid)
					}
				}
			}));
			else try {
				! function(t, e, r, n, o, i, a, c, s, u, f) {
					Te(u);
					if (t) {
						var l = new OffscreenCanvas(100, 100),
							h = l.getContext("2d"),
							d = 0;
						fetch(t).then((function(t) {
							return t.blob()
						})).then((function(t) {
							createImageBitmap(t).then((function(t) {
								var p = t.width,
									m = t.height;
								0 == i || "desktop" == e ? (a = m, i = p - d, n = o = 0) : "visible" !== r && (a = m, o = 0);
								var y = Or;
								if (y && parseInt(y.height) > m + 10 && "selected" === e) {
									var v = y.width / p;
									i /= v, a /= v, n /= v, o /= v
								}
								if (c && "visible" !== r) {
									var g = rn();
									if (g.y > 0) {
										(w = Math.ceil(m * g.y)) <= 0 && (w = 1), o = m - w, a = w
									} else {
										var w = m * g.y;
										o = 0, a = m
									}
								} else "selected" !== e && (o = 0);
								l.width = i, l.height = a, h.drawImage(t, n, o, i, a, 0, 0, i, a), "image/jpeg" === s ? l.convertToBlob({
									type: "image/jpeg",
									quality: 1
								}).then((function(n) {
									if (t = null, l = null, !n) {
										var o = Te(u);
										o && (o.imageUrl ? Me(o.imageId, {
											clientCreateTime: o.clientCreateTime,
											errMsg: "cropImage return null size:" + i + " " + a + " " + r + e
										}) : o.errMsg = "cropImage return null size:" + i + " " + a + " " + r + e)
									}
									f(n)
								})) : l.convertToBlob().then((function(t) {
									if (l = null, !t) {
										var n = Te(u);
										n && (n.imageUrl ? Me(n.imageId, {
											clientCreateTime: n.clientCreateTime + " ",
											errMsg: "cropImage return null size:" + i + " " + a + " " + r + e
										}) : n.errMsg = "cropImage return null size:" + i + " " + a + " " + r + e)
									}
									f(t)
								}))
							}))
						}))
					}
				}(t, o.menuType, o.type, o.offsetInfo.centerOffX, o.offsetInfo.centerOffY, o.offsetInfo.centerW, o.offsetInfo.centerH, r, o.format, n, (function(t) {
					var o = Te(n);
					if (!t && o) o.imageUrl ? Me(o.imageId, {
						clientCreateTime: o.clientCreateTime,
						errMsg: "cropImage return null"
					}) : o.errMsg = o.errMsg ? o.errMsg + "cropImage return null; " : "cropImage return null; ";
					else {
						var i = new Se(t, e, r, 0);
						if (o) {
							o.uploadItems.push(i);
							var a = o.imageUrl ? o.imageId : 0;
							a > 0 && Ae(i, a, o.sid)
						}
					}
				}))
			} catch (t) {
				var o;
				(o = Te(n)) && (o.imageUrl ? Me(o.imageId, {
					clientCreateTime: o.clientCreateTime,
					errMsg: t.toString() + "handleCurrentCapture; "
				}) : o.errMsg = o.errMsg ? o.errMsg + t.toString() + "handleCurrentCapture; " : t.toString() + "handleCurrentCapture; ")
			}
		}

		function $e(t) {
			return $e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, $e(t)
		}

		function Ne() {
			Ne = function() {
				return t
			};
			var t = {},
				e = Object.prototype,
				r = e.hasOwnProperty,
				n = Object.defineProperty || function(t, e, r) {
					t[e] = r.value
				},
				o = "function" == typeof Symbol ? Symbol : {},
				i = o.iterator || "@@iterator",
				a = o.asyncIterator || "@@asyncIterator",
				c = o.toStringTag || "@@toStringTag";

			function s(t, e, r) {
				return Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				s({}, "")
			} catch (t) {
				s = function(t, e, r) {
					return t[e] = r
				}
			}

			function u(t, e, r, o) {
				var i = e && e.prototype instanceof h ? e : h,
					a = Object.create(i.prototype),
					c = new L(o || []);
				return n(a, "_invoke", {
					value: x(t, r, c)
				}), a
			}

			function f(t, e, r) {
				try {
					return {
						type: "normal",
						arg: t.call(e, r)
					}
				} catch (t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			t.wrap = u;
			var l = {};

			function h() {}

			function d() {}

			function p() {}
			var m = {};
			s(m, i, (function() {
				return this
			}));
			var y = Object.getPrototypeOf,
				v = y && y(y(S([])));
			v && v !== e && r.call(v, i) && (m = v);
			var g = p.prototype = h.prototype = Object.create(m);

			function w(t) {
				["next", "throw", "return"].forEach((function(e) {
					s(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function b(t, e) {
				function o(n, i, a, c) {
					var s = f(t[n], t, i);
					if ("throw" !== s.type) {
						var u = s.arg,
							l = u.value;
						return l && "object" == $e(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
							o("next", t, a, c)
						}), (function(t) {
							o("throw", t, a, c)
						})) : e.resolve(l).then((function(t) {
							u.value = t, a(u)
						}), (function(t) {
							return o("throw", t, a, c)
						}))
					}
					c(s.arg)
				}
				var i;
				n(this, "_invoke", {
					value: function(t, r) {
						function n() {
							return new e((function(e, n) {
								o(t, r, e, n)
							}))
						}
						return i = i ? i.then(n, n) : n()
					}
				})
			}

			function x(t, e, r) {
				var n = "suspendedStart";
				return function(o, i) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw i;
						return O()
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var c = k(a, r);
							if (c) {
								if (c === l) continue;
								return c
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var s = f(t, e, r);
						if ("normal" === s.type) {
							if (n = r.done ? "completed" : "suspendedYield", s.arg === l) continue;
							return {
								value: s.arg,
								done: r.done
							}
						}
						"throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
					}
				}
			}

			function k(t, e) {
				var r = e.method,
					n = t.iterator[r];
				if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
				var o = f(n, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l;
				var i = o.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
			}

			function E(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function _(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function L(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(E, this), this.reset(!0)
			}

			function S(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							o = function e() {
								for (; ++n < t.length;)
									if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: O
				}
			}

			function O() {
				return {
					value: void 0,
					done: !0
				}
			}
			return d.prototype = p, n(g, "constructor", {
				value: p,
				configurable: !0
			}), n(p, "constructor", {
				value: d,
				configurable: !0
			}), d.displayName = s(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, w(b.prototype), s(b.prototype, a, (function() {
				return this
			})), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new b(u(e, r, n, o), i);
				return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, w(g), s(g, c, "Generator"), s(g, i, (function() {
				return this
			})), s(g, "toString", (function() {
				return "[object Generator]"
			})), t.keys = function(t) {
				var e = Object(t),
					r = [];
				for (var n in e) r.push(n);
				return r.reverse(),
					function t() {
						for (; r.length;) {
							var n = r.pop();
							if (n in e) return t.value = n, t.done = !1, t
						}
						return t.done = !0, t
					}
			}, t.values = S, L.prototype = {
				constructor: L,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t)
						for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function n(r, n) {
						return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o],
							a = i.completion;
						if ("root" === i.tryLoc) return n("end");
						if (i.tryLoc <= this.prev) {
							var c = r.call(i, "catchLoc"),
								s = r.call(i, "finallyLoc");
							if (c && s) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							} else if (c) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), l
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.tryLoc === t) {
							var n = r.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								_(r)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, r) {
					return this.delegate = {
						iterator: S(t),
						resultName: e,
						nextLoc: r
					}, "next" === this.method && (this.arg = void 0), l
				}
			}, t
		}

		function Ue(t, e, r, n, o, i, a) {
			try {
				var c = t[i](a),
					s = c.value
			} catch (t) {
				return void r(t)
			}
			c.done ? e(s) : Promise.resolve(s).then(n, o)
		}

		function Be(t, e, r, n, o, i, a, c, s, u, f, l, h, d, p, m, y, v, g) {
			var w, b, x, k, E, _, L, S, O = 1,
				I = new OffscreenCanvas(100, 100),
				T = I.getContext("2d"),
				j = !1,
				C = 1,
				M = 0,
				P = 0;

			function A() {
				I.width = j ? x - 2 : x, I.height = k
			}
			l && window.devicePixelRatio > 1 && (O = window.devicePixelRatio), fetch(u[0]).then((function(t) {
				return t.blob()
			})).then((function(l) {
				createImageBitmap(l).then((function(l) {
					if (w = l.width / O, b = l.height / O, L = l.width, S = l.height, v && parseInt(v.height) > S + 10) {
						j = !0;
						var h = v.width / L;
						C = Math.ceil(h), (v = d(h, v)).height > S && (v.height = S, v.width = L), p && (p = d(h, p)).y + p.height > S && (p.height = S - p.y), m && (m = d(h, m)), "selected" === t && (o /= h, i /= h, r /= h, n /= h)
					}

					function d(t, e) {
						return e.x = e.x / t, e.y = Math.ceil(e.y / t), e.height = parseInt(e.height / t), e.width = e.width / t + 2, e
					}
					switch (e) {
						case "visible":
							"selected" === t ? (x = o / O, k = i / O, H = r, V = n, S = i, L = o) : "desktop" === t || "upload" === t ? (x = w, k = b, H = 0, V = 0) : (x = w - 0, k = b, H = 0, V = 0, L -= 0), A(), T.drawImage(l, H, V, L, S, 0, 0, x, k), "jpg" === f ? I.convertToBlob({
								type: "image/jpeg",
								quality: 1
							}).then((function(t) {
								g(t, {
									width: I.width,
									height: I.height
								})
							})) : I.convertToBlob().then((function(t) {
								g(t, {
									width: I.width,
									height: I.height
								})
							}));
							break;
						case "entire":
							var D = P = M = 0,
								$ = u.length,
								N = a,
								U = Math.round($ / N),
								B = null,
								R = null;
							y && y.forEach(function() {
								var t, e = (t = Ne().mark((function t(e) {
									return Ne().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												if (!(e && e.fill.width > 0 && e.fill.height > 0)) {
													t.next = 11;
													break
												}
												if (0 != e.fill.x) {
													t.next = 7;
													break
												}
												return t.next = 4, pe(u[0], e.sample);
											case 4:
												B = t.sent, t.next = 11;
												break;
											case 7:
												if (!(e.fill.x > 0)) {
													t.next = 11;
													break
												}
												return t.next = 10, pe(u[0], e.sample);
											case 10:
												R = t.sent;
											case 11:
											case "end":
												return t.stop()
										}
									}), t)
								})), function() {
									var e = this,
										r = arguments;
									return new Promise((function(n, o) {
										var i = t.apply(e, r);

										function a(t) {
											Ue(i, n, o, a, c, "next", t)
										}

										function c(t) {
											Ue(i, n, o, a, c, "throw", t)
										}
										a(void 0)
									}))
								});
								return function(t) {
									return e.apply(this, arguments)
								}
							}());
							var Y = function t(e, r, n, o, i, a, c, s, h) {
									e ? fetch(e).then((function(t) {
										return t.blob()
									})).then((function(e) {
										createImageBitmap(e).then((function(e) {
											if (p) {
												var f = p.height;
												0 === D ? T.drawImage(e, 0, 0, o, v.height, 0, 0, o / O, v.height / O) : (c = (v.height - C + (D - 1) * (f - C)) / O, n = p.y, h = f / O, i = f, D === U - 1 && (n = p.y + f - E, h = E / O, i = E), T.drawImage(e, p.x, n, p.width, i, p.x / O, c, p.width / O, h), p.x > 0 && B && (T.beginPath(), T.rect(0, c - 1, p.x / O, h + 1), T.fillStyle = B, T.fill()), p.x + p.width < o && R && (T.beginPath(), T.rect((p.x + p.width) / O, c - 1, (o - (p.x + p.width)) / O, h + 1), T.fillStyle = R, T.fill()), D === U - 1 && m && m.height > 0 && T.drawImage(l, 0, m.y, o, m.height, 0, c + h, o / O, m.height / O)), D++
											} else c = D * b, D == U - 1 && (n = (b - E) * O, i = (h = E) * O), T.drawImage(e, r, n, o, i, a, c, s, h), ++D > U - 1 && F();
											t(u[++M], r, n, o, i, a, c, s, h)
										}))
									})) : "jpg" === f ? I.convertToBlob({
										type: "image/jpeg",
										quality: 1
									}).then((function(t) {
										g(t, {
											width: I.width,
											height: I.height
										})
									})) : I.convertToBlob().then((function(t) {
										g(t, {
											width: I.width,
											height: I.height
										})
									}))
								},
								F = function() {
									++P > N - 1 || (P == N - 1 ? (H = w - _, q = x - P * w, z = P * w) : (H = 0, q = w, z = P * w), V = 0, J = b, X = 0, Y(u[M = (D = 0) + P * U], H, V, L, S, z, X, q, J))
								};
							if (!s.x && s.y) {
								if (U = $, E = b * c.y, x = "selected" == t ? o / O : w, p) {
									E = p.height * c.y;
									var G = p.height,
										W = v.height;
									k = E ? 1 === U ? W / O : (W + (U > 2 ? (U - 2) * G : 0) + E) / O : (W + (U - 1) * G) / O, m && m.height > 0 && (k += m.height / O)
								} else k = E ? b * (U - 1) + E : b * U;
								if (k > le) return void
								function(t, e, r, n, o, i, a, c, s) {
									he.apply(this, arguments)
								}(u, c.y, O, p, m, y, v, g);
								A();
								var H = 0,
									q = w,
									z = 0,
									V = 0,
									J = b,
									X = 0;
								"selected" == t && r && (H = r), Y(u[M], H, V, L, S, z, X, q, J)
							}
							if (s.x && !s.y) {
								N = $, _ = w * c.x, k = "selected" == t ? request.centerH : b, x = _ ? w * (N - 1) + _ : w * N, A();
								H = 0, q = w, z = 0, V = 0, J = b, X = 0;
								! function t(e, r, n, o, i, a, c, s, f, l) {
									a = P * w, P == N - 1 && (r = w - _, s = _), T.drawImage(e, r, n, o, i, a, c, s, f), P < N - 1 && t(u[++P], r, n, o, i, a, c, s, f)
								}(u[M], H, V, L, S, z, X, q, J)
							}
							if (s.x && s.y) {
								_ = w * c.x, E = b * c.y, "selected" == t ? (x = request.centerW, k = request.centerH) : (x = _ ? w * (N - 1) + _ : w * N, k = E ? b * (U - 1) + E : b * U), A();
								H = 0, q = w, z = 0, V = 0, J = b, X = 0;
								Y(u[M], H, V, L, S, z, X, q, J)
							}
					}
				}))
			}))
		}

		function Re(t) {
			return chrome.windows.update(t, {
				state: "minimized"
			})
		}

		function Ye(t) {
			return Ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, Ye(t)
		}

		function Fe() {
			Fe = function() {
				return t
			};
			var t = {},
				e = Object.prototype,
				r = e.hasOwnProperty,
				n = Object.defineProperty || function(t, e, r) {
					t[e] = r.value
				},
				o = "function" == typeof Symbol ? Symbol : {},
				i = o.iterator || "@@iterator",
				a = o.asyncIterator || "@@asyncIterator",
				c = o.toStringTag || "@@toStringTag";

			function s(t, e, r) {
				return Object.defineProperty(t, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				s({}, "")
			} catch (t) {
				s = function(t, e, r) {
					return t[e] = r
				}
			}

			function u(t, e, r, o) {
				var i = e && e.prototype instanceof h ? e : h,
					a = Object.create(i.prototype),
					c = new L(o || []);
				return n(a, "_invoke", {
					value: x(t, r, c)
				}), a
			}

			function f(t, e, r) {
				try {
					return {
						type: "normal",
						arg: t.call(e, r)
					}
				} catch (t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			t.wrap = u;
			var l = {};

			function h() {}

			function d() {}

			function p() {}
			var m = {};
			s(m, i, (function() {
				return this
			}));
			var y = Object.getPrototypeOf,
				v = y && y(y(S([])));
			v && v !== e && r.call(v, i) && (m = v);
			var g = p.prototype = h.prototype = Object.create(m);

			function w(t) {
				["next", "throw", "return"].forEach((function(e) {
					s(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function b(t, e) {
				function o(n, i, a, c) {
					var s = f(t[n], t, i);
					if ("throw" !== s.type) {
						var u = s.arg,
							l = u.value;
						return l && "object" == Ye(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
							o("next", t, a, c)
						}), (function(t) {
							o("throw", t, a, c)
						})) : e.resolve(l).then((function(t) {
							u.value = t, a(u)
						}), (function(t) {
							return o("throw", t, a, c)
						}))
					}
					c(s.arg)
				}
				var i;
				n(this, "_invoke", {
					value: function(t, r) {
						function n() {
							return new e((function(e, n) {
								o(t, r, e, n)
							}))
						}
						return i = i ? i.then(n, n) : n()
					}
				})
			}

			function x(t, e, r) {
				var n = "suspendedStart";
				return function(o, i) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === o) throw i;
						return O()
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var c = k(a, r);
							if (c) {
								if (c === l) continue;
								return c
							}
						}
						if ("next" === r.method) r.sent = r._sent = r.arg;
						else if ("throw" === r.method) {
							if ("suspendedStart" === n) throw n = "completed", r.arg;
							r.dispatchException(r.arg)
						} else "return" === r.method && r.abrupt("return", r.arg);
						n = "executing";
						var s = f(t, e, r);
						if ("normal" === s.type) {
							if (n = r.done ? "completed" : "suspendedYield", s.arg === l) continue;
							return {
								value: s.arg,
								done: r.done
							}
						}
						"throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
					}
				}
			}

			function k(t, e) {
				var r = e.method,
					n = t.iterator[r];
				if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
				var o = f(n, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l;
				var i = o.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
			}

			function E(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function _(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function L(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(E, this), this.reset(!0)
			}

			function S(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							o = function e() {
								for (; ++n < t.length;)
									if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: O
				}
			}

			function O() {
				return {
					value: void 0,
					done: !0
				}
			}
			return d.prototype = p, n(g, "constructor", {
				value: p,
				configurable: !0
			}), n(p, "constructor", {
				value: d,
				configurable: !0
			}), d.displayName = s(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, w(b.prototype), s(b.prototype, a, (function() {
				return this
			})), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new b(u(e, r, n, o), i);
				return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, w(g), s(g, c, "Generator"), s(g, i, (function() {
				return this
			})), s(g, "toString", (function() {
				return "[object Generator]"
			})), t.keys = function(t) {
				var e = Object(t),
					r = [];
				for (var n in e) r.push(n);
				return r.reverse(),
					function t() {
						for (; r.length;) {
							var n = r.pop();
							if (n in e) return t.value = n, t.done = !1, t
						}
						return t.done = !0, t
					}
			}, t.values = S, L.prototype = {
				constructor: L,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t)
						for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function n(r, n) {
						return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o],
							a = i.completion;
						if ("root" === i.tryLoc) return n("end");
						if (i.tryLoc <= this.prev) {
							var c = r.call(i, "catchLoc"),
								s = r.call(i, "finallyLoc");
							if (c && s) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							} else if (c) {
								if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < i.finallyLoc) return n(i.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
							var i = o;
							break
						}
					}
					i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), l
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var r = this.tryEntries[e];
						if (r.tryLoc === t) {
							var n = r.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								_(r)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, r) {
					return this.delegate = {
						iterator: S(t),
						resultName: e,
						nextLoc: r
					}, "next" === this.method && (this.arg = void 0), l
				}
			}, t
		}

		function Ge(t, e, r, n, o, i, a) {
			try {
				var c = t[i](a),
					s = c.value
			} catch (t) {
				return void r(t)
			}
			c.done ? e(s) : Promise.resolve(s).then(n, o)
		}

		function We(t) {
			return function() {
				var e = this,
					r = arguments;
				return new Promise((function(n, o) {
					var i = t.apply(e, r);

					function a(t) {
						Ge(i, n, o, a, c, "next", t)
					}

					function c(t) {
						Ge(i, n, o, a, c, "throw", t)
					}
					a(void 0)
				}))
			}
		}
		Le.prototype.updateInfo = function(t, e) {
			this.imageId = t, this.imageUrl = e, this.checkStatus(), this.errMsg && Me(this.imageId, {
				errMsg: this.errMsg
			})
		}, Le.prototype.failedInitId = function() {
			this.failedInitImage = !0, this.captureFinish && (this.uploadItems = [], newTab())
		}, Le.prototype.addCapturesCount = function() {
			this.captureCount++
		}, Le.prototype.finishCapture = function() {
			if (this.captureFinish = !0, Qr(!1), pr = 0, this.failedInitImage) return this.uploadItems = [], void newTab();
			this.checkStatus()
		}, Le.prototype.checkStatus = function() {
			if (this.imageUrl) {
				var t, e, r, n, o = !0,
					i = this.uploadItems.length;
				if (i > 0) {
					var a = this;
					this.uploadItems.forEach((function(t) {
						2 !== t.status && (o = !1), 0 != t.status && 3 != t.status || (0 == t.failedTimes ? Ae(t, a.imageId, a.sid) : t.failedTimes < 8 && !t.inTimeoutFun && !this.failedMaxTime ? (t.inTimeoutFun = !0, setTimeout((function() {
							t.inTimeoutFun = !1, Ae(t, a.imageId, a.sid)
						}), 800 * t.failedTimes)) : t.failedTimes > 8 && !t.inTimeoutFun && (this.failedMaxTime = !0))
					}))
				} else o = !1;
				if (this.captureFinish && !this.haveOpenUrl && this.imageUrl) this.haveOpenUrl = !0, Zr("entire" === this.menuType || "selected" === this.menuType ? this.imageUrl + "?init_open=true" : this.imageUrl);
				o && this.captureFinish && !this.uploadFinish && this.captureCount === i && (this.uploadFinish = !0, this.uploadItems = [], t = this.imageId, e = this.captureCount, r = this.format, n = this.sid, fetch(xe + "/api/v1/image/complete_multipart" + (n ? "?sid=" + n : ""), {
					method: "POST",
					headers: {
						"Content-Type": "application/json; charset=utf-8"
					},
					body: JSON.stringify({
						imageID: t,
						imageCount: e + "",
						contentType: r
					})
				}).then((function(t) {
					return t.json()
				})).then((function(e) {
					1 !== e.code && Me(t, {
						errMsg: e.msg + " complete_multipart; "
					}), ae()
				})), function(t) {
					var e = Ee[t],
						r = t;
					if (!e)
						for (var n in Ee) {
							t == Ee[n].imageId && (r = n)
						}
					delete Ee[r]
				}(this.imageId))
			}
		};
		var He, qe, ze, Ve, Je, Xe, Ze, Ke, Qe, tr, er, rr, nr = X.baseUrl,
			or = [],
			ir = {},
			ar = 0,
			cr = 0,
			sr = null,
			ur = !1,
			fr = 1,
			lr = !1,
			hr = -1,
			dr = 0,
			pr = 0,
			mr = !1,
			yr = !1,
			vr = 0,
			gr = 8e4,
			wr = 0,
			br = 0,
			xr = !1,
			kr = "annotate",
			Er = "",
			_r = [],
			Lr = null,
			Sr = null,
			Or = null,
			Ir = [],
			Tr = -1,
			jr = -1,
			Cr = navigator.userAgent.indexOf("Edg") > -1,
			Mr = "dhoenijjpgpeimemopealfcbiecgceod",
			Pr = "difoiogjjojoaoomphldepapgpbgkhkb",
			Ar = Cr ? "https://sider.ai/ad-land-redirect?source=as&p1=edge&p2=mainscreen" : "https://sider.ai/ad-land-redirect?source=as&p1=chrome&p2=mainscreen";

		function Dr() {
			return $r.apply(this, arguments)
		}

		function $r() {
			return ($r = We(Fe().mark((function t() {
				var e, r;
				return Fe().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, l("after-capture-action");
						case 2:
							return e = t.sent, t.next = 5, l("skip-annotate");
						case 5:
							if (r = t.sent, e) {
								t.next = 14;
								break
							}
							if ("true" !== r) {
								t.next = 11;
								break
							}
							return t.abrupt("return", !0);
						case 11:
							return t.abrupt("return", !1);
						case 12:
							t.next = 19;
							break;
						case 14:
							if ("annotate" != e) {
								t.next = 18;
								break
							}
							return t.abrupt("return", !1);
						case 18:
							return t.abrupt("return", !0);
						case 19:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Nr() {
			return Ur.apply(this, arguments)
		}

		function Ur() {
			return (Ur = We(Fe().mark((function t() {
				return Fe().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, u("dataURL", or);
						case 2:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Br(t) {
			return Rr.apply(this, arguments)
		}

		function Rr() {
			return (Rr = We(Fe().mark((function t(e) {
				return Fe().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, Nr();
						case 2:
							tn(e);
						case 3:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Yr(t) {
			return Fr.apply(this, arguments)
		}

		function Fr() {
			return (Fr = We(Fe().mark((function t(e) {
				var r;
				return Fe().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, l("msObj");
						case 2:
							r = t.sent, ne(e, {
								action: "update_shortcuts",
								msObj: JSON.stringify(r)
							});
						case 4:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Gr() {
			return Gr = We(Fe().mark((function t(e, r, n, o, i) {
				var a;
				return Fe().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, Xt();
						case 2:
							a = t.sent, e && a && navigator.onLine ? fetch(e).then((function(t) {
								return t.blob()
							})).then((function(t) {
								_e(t, !0, r, n, o, i)
							})) : (wr = 0, br = 0, (or = []).push(e), Br());
						case 4:
						case "end":
							return t.stop()
					}
				}), t)
			}))), Gr.apply(this, arguments)
		}

		function Wr(t, e) {
			var r = Date.now();
			chrome.tabs.update(t, {
				active: !0
			}, (function(n) {
				chrome.tabs.captureVisibleTab(n.windowId, {
					format: "png"
				}, function() {
					var n = We(Fe().mark((function n(o) {
						var i, a, c, s, u, f;
						return Fe().wrap((function(n) {
							for (;;) switch (n.prev = n.next) {
								case 0:
									if (i = !1, !o) {
										n.next = 11;
										break
									}
									if (or.push(o), "save" != kr) {
										n.next = 9;
										break
									}
									return n.next = 7, Xt();
								case 7:
									a = n.sent;
									try {
										a && or.length >= 2 && ur && e > 0 && (c = or.length, (s = Te(e)) || (s = Ie(e)), s.height < ("image/png" == s.format ? gr : 6e4) && !s.captureFinish ? (s.height += dr, De(or[c - 2], or.length - 1, !1, e)) : Hr(t, "maxHeight"))
									} catch (t) {
										(u = Te(e)) && (u.imageUrl ? Me(u.imageId, {
											clientCreateTime: u.clientCreateTime,
											errMsg: t.toString() + "pushDataURL; " + u.errMsg
										}) : u.errMsg = u.errMsg ? u.errMsg + t.toString() + "pushDataURL; " : t.toString() + "pushDataURL; ")
									}
									case 9:
										n.next = 14;
										break;
									case 11:
										RegExp(/MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND/).test(chrome.runtime.lastError.message) ? i = !0 : (u = Te(e)) && (u.imageUrl ? Me(u.imageId, {
											clientCreateTime: u.clientCreateTime,
											errMsg: " chrome.tabs.captureVisibleTab; " + u.errMsg
										}) : u.errMsg = u.errMsg ? u.errMsg + " chrome.tabs.captureVisibleTab; " : " chrome.tabs.captureVisibleTab; ");
									case 14:
										i ? setTimeout((function() {
											Wr(t, e)
										}), 100) : (f = qr(r), mr || (0 === f ? ne(t, {
											action: "scroll_next",
											captureTime: r
										}) : setTimeout((function() {
											ne(t, {
												action: "scroll_next",
												captureTime: r
											})
										}), f)));
									case 15:
									case "end":
										return n.stop()
							}
						}), n)
					})));
					return function(t) {
						return n.apply(this, arguments)
					}
				}())
			}))
		}

		function Hr(t, e) {
			if (t == hr && lr) {
				mr = !0, tr = or.length, er = {
					x: 1,
					y: 1
				}, rr = {
					x: !1,
					y: !0
				}, ne(ze, {
					action: "restorebar"
				});
				var r = pr;
				if ("copy" == kr) on(t, !0);
				else if ("ocr" == kr) on(t, !1);
				else {
					var n;
					if (Xt() && ur && pr > 0)(n = Te(pr)) || (n = new Le(r), uploadQueues[pr] = n), n.finishCapture(), ne(ze, {
						action: "destroy_selected"
					});
					else Br()
				}
				if (r > 0)(n = Te(r)) && !n.imageUrl ? n.errMsg = n.errMsg ? n.errMsg + e + " " : e + " " : n && Me(n.imageId, {
					clientCreateTime: n.clientCreateTime,
					errMsg: n.errMsg + e + " "
				})
			}
		}

		function qr(t) {
			var e = Date.now();
			Ir.push(t);
			var r = e - t;
			if (r >= 1e3) return 0;
			var n = Ir.length;
			if (1 === n) return r >= 400 ? 0 : r > 250 ? 200 : 250;
			var o = t - Ir[n - 2] + r;
			if (o > 1e3) return 0;
			var i = 1020 - o;
			return i < 50 ? 50 : i
		}

		function zr() {
			return (zr = We(Fe().mark((function t() {
				var e, r;
				return Fe().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, l("delay_sec");
						case 2:
							(e = t.sent) || (e = 1), r = parseInt(e), chrome.action.setBadgeText({
								text: r + ""
							}), r--, sr = setInterval((function() {
								0 !== r ? (chrome.action.setBadgeText({
									text: r + ""
								}), r--) : (clearInterval(sr), chrome.action.setBadgeText({
									text: ""
								}), setTimeout((function() {
									kr = "save", yr = !1, Jr()
								}), 300))
							}), 1e3);
						case 8:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function Vr() {
			return Vr = We(Fe().mark((function t(e, r) {
				return Fe().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							if (qe = "visible", r || "annotate" != kr) {
								t.next = 6;
								break
							}
							return t.next = 4, Dr();
						case 4:
							t.sent && (kr = "save");
						case 6:
							te().then((function(t) {
								t && "shortCut" !== e ? fn().then((function() {
									ee(ze)
								})) : (kr = "save", yr = !1, Jr())
							}));
						case 7:
						case "end":
							return t.stop()
					}
				}), t)
			}))), Vr.apply(this, arguments)
		}

		function Jr() {
			qe = "visible", or = [], fn().then((function() {
				! function() {
					var e = 0;
					"save" == kr && (e = ++fr, je(Je, Ve, t, e));
					(r = Ze, n = Ke, new Promise((function(t, e) {
						chrome.permissions.request({
							permissions: ["activeTab"]
						}, (function(o) {
							chrome.windows.update(r, {
								focused: !0
							}, (function() {
								chrome.tabs.update(n, {
									active: !0
								}, (function() {
									chrome.tabs.captureVisibleTab(null, {
										format: "png"
									}, (function(r) {
										r ? t(r) : e()
									}))
								}))
							}))
						}))
					}))).then(function() {
						var r = We(Fe().mark((function r(n) {
							var o, i;
							return Fe().wrap((function(r) {
								for (;;) switch (r.prev = r.next) {
									case 0:
										if (!n) {
											r.next = 35;
											break
										}
										return or.push(n), r.next = 5, Xt();
									case 5:
										if (o = r.sent, "copy" != kr) {
											r.next = 10;
											break
										}
										on(Ke, !0), r.next = 35;
										break;
									case 10:
										if ("ocr" != kr) {
											r.next = 15;
											break
										}
										on(Ke, !1), r.next = 35;
										break;
									case 15:
										if ("save" != kr) {
											r.next = 27;
											break
										}
										if (ne(ze, {
												action: "destroy_selected"
											}), o && ur) {
											r.next = 22;
											break
										}
										return Br(), r.abrupt("return");
									case 22:
										Te(e) || Ie(e), De(n, 1, !0, e);
									case 25:
										r.next = 35;
										break;
									case 27:
										if (o || 0 != ar) {
											r.next = 30;
											break
										}
										return Br(), r.abrupt("return");
									case 30:
										return r.next = 32, l("format");
									case 32:
										(i = r.sent) || (i = "png"), ne(ze, {
											action: "dataURL",
											dataURL: n,
											cl: wr,
											ct: br,
											ch: cr,
											cw: ar,
											incognito: xr,
											userAction: kr,
											autoOnline: !0,
											actionType: t,
											format: i
										});
									case 35:
									case "end":
										return r.stop()
								}
							}), r)
						})));
						return function(t) {
							return r.apply(this, arguments)
						}
					}());
					var r, n
				}()
			}));
			var t = "visible";
			"selected" == He && (t = "visible_selected")
		}

		function Xr(t) {
			or = [], wr = 0, br = 0, He = "upload";
			var e = new FileReader;
			e.onload = function(t) {
				or.push(t.target.result), Br()
			}, e.readAsDataURL(t)
		}

		function Zr(t) {
			oe((function(e) {
				var r = {
					url: t
				};
				e && e.incognito || !e ? chrome.windows.getAll((function(t) {
					t.forEach((function(t) {
						t.incognito || "normal" !== t.type || (r.windowId = t.id)
					})), Kr(r)
				})) : (r.index = (e ? e.index : Qe || 0) + 1, r.windowId = e ? e.windowId : Ze, Kr(r))
			}))
		}

		function Kr(t) {
			t && t.url && (t.hasOwnProperty("index") && !t.index && delete t.index, chrome.tabs.create(t, (function(t) {
				var e, r;
				ir[t.id] = ze, ze = t.id, chrome.windows.update(t.windowId, {
					focused: !0
				}), e = {
					action: "closeWin"
				}, chrome.runtime.sendMessage(e, r)
			})))
		}

		function Qr(t) {
			lr = t
		}

		function tn(t) {
			if (Qr(!1), pr = 0, or) {
				if ("selected" == He && ne(ze, {
						action: "destroy_selected"
					}), t && "gmail" == t.type) var e = "edit-react.html?" + t.type + "=" + t.tabId;
				else e = "edit-react.html";
				chrome.tabs.query({
					active: !0,
					currentWindow: !0
				}, (function(r) {
					if (r && r.length) {
						if (t && t.tabId) var n = r[0].index;
						else n = r[0].index + 1;
						var o = {
							url: e
						};
						r[0].incognito || (o.index = n)
					} else o = {
						url: e,
						index: Qe + 1
					};
					Kr(o)
				}))
			} else alert("Screen Capture Fail!!")
		}

		function en(t) {
			ur = t
		}

		function rn() {
			return er
		}

		function nn() {
			return {
				centerOffX: wr,
				centerOffY: br,
				centerW: ar,
				centerH: cr,
				menuType: He,
				type: qe
			}
		}

		function on(t, e) {
			return an.apply(this, arguments)
		}

		function an() {
			return (an = We(Fe().mark((function t(e, r) {
				var n;
				return Fe().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return kr = "", Qr(!1), t.next = 4, l("format");
						case 4:
							n = t.sent, Be(He, qe, wr, br, ar, cr, tr, er, rr, or, n, !1, yr, vr, Sr, Lr, _r, Or, (function(t) {
								un(t).then((function(t) {
									r ? (ne(e, {
										action: "destroy_selected"
									}), ne(e, {
										action: "copytoclipboard",
										obj: t
									})) : cn(t, e)
								}))
							}));
						case 6:
						case "end":
							return t.stop()
					}
				}), t)
			})))).apply(this, arguments)
		}

		function cn(t, e) {
			Cr ? sn(t, Mr).then((function() {
				ne(e, {
					action: "destroy_selected"
				})
			}), (function() {
				sn(t, Pr).then((function() {
					ne(e, {
						action: "destroy_selected"
					})
				}), (function() {
					ne(e, {
						action: "missSider"
					})
				}))
			})) : sn(t, Pr).then((function() {
				ne(e, {
					action: "destroy_selected"
				})
			}), (function() {
				ne(e, {
					action: "missSider"
				})
			}))
		}

		function sn(t, e) {
			return new Promise((function(r, n) {
				chrome.runtime.sendMessage(e, {
					type: "SIDER_OCR",
					data: {
						img: t
					}
				}, (function(t) {
					chrome.runtime.lastError ? n() : r()
				}))
			}))
		}

		function un(t) {
			return new Promise((function(e, r) {
				var n = new FileReader;
				n.onloadend = function() {
					return e(n.result)
				}, n.readAsDataURL(t)
			}))
		}

		function fn() {
			return new Promise((function(t, e) {
				oe((function(e) {
					ze = e.id, Ve = e.url, Je = e.title, xr = e.incognito, chrome.tabs.getZoom(e.id, (function(e) {
						Xe = e, t()
					}))
				}))
			}))
		}
		chrome.runtime.onMessage.addListener((function(t, e, r) {
			var n, o, i, a, c;
			if ("inboxsdk__injectPageWorld" === t.type && e.tab) chrome.scripting ? (chrome.scripting.executeScript({
				target: {
					tabId: e.tab.id
				},
				world: "MAIN",
				files: ["javascripts/bundles/pageWorld.bundle.js"]
			}), r(!0)) : r(!1);
			else switch (oe((function(e) {
				e && (/chrome-extension:\/\/nlipoenfbbikpbjkfpfillcgkoblgpmj/.test(e.url) && "visible" != t.action && "desktop" !== t.type || (Ze = e.windowId, Ke = e.id, Qe = e.index))
			})), e.tab && -1 != e.tab.id && "visible" != t.action && "selected" != t.action && "entire" != t.action && "delay" !== t.action && "ocr" !== t.action || (lr || "visible" != t.action && "selected" != t.action && "entire" != t.action || (He = t.action, t.menuType && (He = t.menuType)), Er = t.actionFrom, "visible" != t.action && "selected" != t.action && "entire" != t.action && "delay" !== t.action || (_r = [], Sr = null, Lr = null, Or = null)), t.action) {
				case "getData":
					r({
						taburl: Ve,
						tabtitle: Je,
						type: qe,
						menuType: He,
						centerOffX: wr,
						centerOffY: br,
						centerH: cr,
						centerW: ar,
						counter: tr,
						ratio: er,
						scrollBar: rr,
						contentCanScroll: yr,
						scrollBarWidth: vr,
						contentClip: Sr,
						bottomClip: Lr,
						bgRegions: _r,
						topCapturePosition: Or,
						zoomLevel: Xe
					});
					break;
				case "visible":
					if (!lr || "entire" == t.menuType) {
						var s = !1;
						"selected" == (He = t.menuType) ? (qe = "visible", s = !0, t.centerW && (ar = t.centerW, cr = t.centerH, t.data && (wr = t.data.x, br = t.data.y))) : (br = 0, wr = 0, ar = 0, cr = 0, kr = "annotate", "entire" == He && Qr(!1)), or = [],
							function(t, e) {
								Vr.apply(this, arguments)
							}(t.actionFrom, s)
					}
					break;
				case "selected":
					lr || (or = [], qe = "selected", fn().then((function() {
						ee(ze)
					})));
					break;
				case "ocr":
					lr || (or = [], qe = "ocr", fn().then((function() {
						ee(ze)
					})));
					break;
				case "entire":
					lr || (or = [], br = 0, wr = 0, ar = 0, cr = 0, kr = "save", qe = "entire", fn().then((function() {
						ee(ze)
					})));
					break;
				case "delay":
					qe = "delay", te().then((function(t) {
						t ? fn().then((function() {
							ee(ze)
						})) : function() {
							zr.apply(this, arguments)
						}()
					}));
					break;
				case "insert_script":
					W(ze).then(We(Fe().mark((function t() {
						var e, r;
						return Fe().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									if (lr) {
										t.next = 18;
										break
									}
									if ("delay" !== qe) {
										t.next = 9;
										break
									}
									return t.next = 4, l("delay_sec");
								case 4:
									(e = t.sent) || (e = 0), ne(ze, {
										action: "delay-capture",
										sec: e
									}), t.next = 18;
									break;
								case 9:
									if ("visible" != qe) {
										t.next = 13;
										break
									}
									Jr(), t.next = 18;
									break;
								case 13:
									return "entire" == He && Qr(!0), t.next = 16, Xt();
								case 16:
									r = t.sent, ne(ze, {
										action: "init_" + He + "_capture",
										autoOnline: r
									});
								case 18:
								case "end":
									return t.stop()
							}
						}), t)
					}))));
					break;
				case "script_running":
					return lr || ("delay" === qe ? l("delay_sec").then((function(t) {
						t || (t = 0), ne(ze, {
							action: "delay-capture",
							sec: t
						})
					})) : "visible" == qe ? Jr() : ("entire" == He && Qr(!0), Xt().then((function(t) {
						ne(ze, {
							action: "init_" + qe + "_capture",
							autoOnline: t
						})
					})))), !0;
				case "capture_selected_done":
					if (pr > 0) return;
					qe = "visible", He = "selected", cr = t.data.h, ar = t.data.w, t.topCapturePosition && (Or = t.topCapturePosition), cr <= 1 && (cr = 1), ar <= 1 && (ar = 1), wr = t.data.x, br = t.data.y, null != t.userAction && (kr = t.userAction), or = [], Jr();
					break;
				case "canScroll":
					yr = t.canScroll, vr = t.scrollBarWidth;
					break;
				case "scroll_next_done":
					null != t.userAction && (kr = t.userAction), qe = "entire", "selected" != He && "selected" != t.menuType || (He = "selected", t.centerW && (ar = t.centerW, cr = t.centerH, t.data && (wr = t.data.x, br = t.data.y)));
					t.isFirstScroll && (mr = !1, !0, ur = !1, Qr(!0), hr = e.tab.id, dr = t.windowHeight, _r = t.bgRegions, Sr = t.contentClip, Lr = t.bottomClip, Or = t.topCapturePosition, t.devicePixelRatio, Ir = [], or = [], "save" == kr && (pr = ++fr, je(Je, Ve, "selected" == He ? "entire_selected" : "entire", pr, t.mark ? Er + " tabid:" + Ke + " mark:" + t.mark : Er + " tabid:" + Ke))),
						function(t, e, r) {
							Wr(t, e)
						}(hr, pr);
					break;
				case "entire_capture_done":
					if (tr = t.counter, er = t.ratio, rr = t.scrollBar, qe = "entire", Ir = [], "selected" == He && t.centerW && (ar = t.centerW, cr = t.centerH, t.data && (wr = t.data.x, br = t.data.y)), ne(hr || Ke, {
							action: "restorebar"
						}), "copy" == kr) on(hr || Ke, !0);
					else if ("ocr" == kr) on(hr || Ke, !1);
					else if (Xt() && ur && pr > 0) {
						var h = or.length;
						Te(pr) || Ie(pr), De(or[h - 1], h, !0, pr), pr = 0, ne(hr || Ke, {
							action: "destroy_selected"
						})
					} else Br();
					break;
				case "stop-entire-capture":
					ne(hr || Ke, {
						action: "stop-entire-capture"
					});
					break;
				case "checkUserStatus":
					return !pr > 0 && Qt((function(t) {
						Xt().then((function(e) {
							r(t || !e)
						}))
					})), !0;
				case "getPersonType":
					return c = function(t) {
						r(t)
					}, chrome.cookies.get({
						url: Jt,
						name: "screenshot_personal_type"
					}, (function(t) {
						var e;
						e = t ? t.value : 0, c && c(e)
					})), !0;
				case "canCapture":
					return !pr > 0 && function(t) {
						Kt.apply(this, arguments)
					}((function(e) {
						e || t.isCopy || t.isOCR ? r({
							action: "canCapture",
							isCopy: t.isCopy,
							isUserAction: t.isUserAction,
							isOCR: t.isOCR
						}) : r({
							action: "imageLimit"
						})
					})), !0;
				case "imageLimit":
					! function(t, e) {
						chrome.cookies.get({
							url: e,
							name: "screenshot_personal_type"
						}, (function(r) {
							y(r ? e + "/pricing?from=" + t : e + "/user/login?redirect=" + e + "/pricing?from=" + t)
						}))
					}(t.reason, nr);
					break;
				case "isCapturing":
					r(lr);
					break;
				case "upload":
					t.data && ((or = []).push(t.data), qe = "visible", He = "upload", Je = t.name, Nr().then((function() {
						r("gaga")
					})));
					break;
				case "clearDataURL":
					u("dataURL", or = []);
					break;
				case "gmail-btn":
					return l("gmail-btn").then((function(t) {
						r(t)
					})), !0;
				case "desktop":
					Tr = t.type && "gmail" == t.type ? e.tab.id : -1, o = navigator.userAgent.indexOf("Windows") > 0, i = o ? 550 : 500, a = o ? 640 : 610, chrome.windows.create({
						focused: !0,
						url: "/capture-desktop.html",
						width: a,
						left: 200,
						type: "popup",
						height: i
					}).then((function(t) {
						t.tabs[0].id, jr = t.id
					}));
					break;
				case "miniWindow":
					jr > 0 && Re(jr);
					break;
				case "desktop_capture":
					var d = t.data;
					return (or = []).push(d), r("asa"), Je = "Desktop screenshot", qe = "visible", He = "desktop", ar = 0, jr = -1, -1, Xt().then((function(t) {
						if (!t || Tr > 0) Tr > 0 ? (Br({
							type: "gmail",
							tabId: Tr
						}), Tr = -1) : Br();
						else {
							var e = ++fr;
							je("Desktop screenshot", "", "desktop", e), Te(e) || Ie(e), De(d, 1, !0, e)
						}
					})), !0;
				case "saveImage":
					! function(t, e, r, n, o) {
						Gr.apply(this, arguments)
					}(t.data, t.actionType, t.format, Je, Ve);
					break;
				case "updateUserInfo":
					ae();
					break;
				case "check_shortcuts":
					Yr(e.tab.id);
					break;
				case "update_shortcuts":
					chrome.tabs.query({}, (function(t) {
						for (var e = 0, r = t.length; e < r; e++) {
							var n = t[e],
								o = n.url;
							o.match(/https?:\/\/*\/*/gi) && !o.match(/https:\/\/chrome.google.com\/extensions/i) && Yr(n.id)
						}
					}));
					break;
				case "pageReload":
					e.tab && Hr(e.tab.id, "reload");
					break;
				case "recordStyle":
					var p = {};
					f("recordStyle").then((function(e) {
						e && (p = JSON.parse(e)), p[t.shape] || (p[t.shape] = {}), t.isColor ? p[t.shape].color = t.value : p[t.shape].width = t.value, u("recordStyle", JSON.stringify(p))
					}));
					break;
				case "getRecordStyle":
					return f("recordStyle").then((function(t) {
						r(t ? JSON.parse(t) : "")
					})), !0;
				case "sendSider":
					cn(t.data, e.tab.id);
					break;
				case "sendLocalSider":
					return (n = t.data, new Promise((function(t) {
						Cr ? sn(n, Mr).then((function() {
							t(!0)
						}), (function() {
							sn(n, Pr).then((function() {
								t(!0)
							}), (function() {
								t(!1)
							}))
						})) : sn(n, Pr).then((function() {
							t(!0)
						}), (function() {
							t(!1)
						}))
					}))).then((function(t) {
						r(t)
					})), !0;
				case "getSider":
					Zr(Ar);
					break;
				case "shortCuts":
					e.tab && t.data && ne(e.tab.id, {
						action: "shortCuts",
						data: t.data
					});
					break;
				case "frameResponse":
					e.tab && ne(e.tab.id, {
						action: "frameResponse"
					});
					break;
				case "awsSendBg":
					e.tab && t.data && ne(e.tab.id, {
						action: "awsSendBg",
						data: t.data
					})
			}
		})), chrome.tabs.onRemoved.addListener((function(t) {
			Hr(t, "close"), ir[t] && chrome.tabs.update(ir[t], {
				selected: !0
			})
		})), chrome.runtime.onInstalled.addListener((function(t) {
			"update" !== t.reason && "install" !== t.reason || chrome.tabs.query({}, (function(t) {
				t.forEach((function(t) {
					W(t.id)
				}))
			}))
		}))
	})()
})();