(() => {
	"use strict";
	var e, t = {
			60801: (e, t, r) => {
				function o() {
					o = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						r = t.hasOwnProperty,
						n = Object.defineProperty || function(e, t, r) {
							e[t] = r.value
						},
						a = "function" == typeof Symbol ? Symbol : {},
						i = a.iterator || "@@iterator",
						s = a.asyncIterator || "@@asyncIterator",
						l = a.toStringTag || "@@toStringTag";

					function u(e, t, r) {
						return Object.defineProperty(e, t, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						u({}, "")
					} catch (e) {
						u = function(e, t, r) {
							return e[t] = r
						}
					}

					function d(e, t, r, o) {
						var a = t && t.prototype instanceof h ? t : h,
							i = Object.create(a.prototype),
							c = new C(o || []);
						return n(i, "_invoke", {
							value: x(e, r, c)
						}), i
					}

					function f(e, t, r) {
						try {
							return {
								type: "normal",
								arg: e.call(t, r)
							}
						} catch (e) {
							return {
								type: "throw",
								arg: e
							}
						}
					}
					e.wrap = d;
					var p = {};

					function h() {}

					function m() {}

					function v() {}
					var g = {};
					u(g, i, (function() {
						return this
					}));
					var w = Object.getPrototypeOf,
						b = w && w(w(L([])));
					b && b !== t && r.call(b, i) && (g = b);
					var y = v.prototype = h.prototype = Object.create(g);

					function $(e) {
						["next", "throw", "return"].forEach((function(t) {
							u(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function k(e, t) {
						function o(n, a, i, s) {
							var l = f(e[n], e, a);
							if ("throw" !== l.type) {
								var u = l.arg,
									d = u.value;
								return d && "object" == c(d) && r.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
									o("next", e, i, s)
								}), (function(e) {
									o("throw", e, i, s)
								})) : t.resolve(d).then((function(e) {
									u.value = e, i(u)
								}), (function(e) {
									return o("throw", e, i, s)
								}))
							}
							s(l.arg)
						}
						var a;
						n(this, "_invoke", {
							value: function(e, r) {
								function n() {
									return new t((function(t, n) {
										o(e, r, t, n)
									}))
								}
								return a = a ? a.then(n, n) : n()
							}
						})
					}

					function x(e, t, r) {
						var o = "suspendedStart";
						return function(n, a) {
							if ("executing" === o) throw new Error("Generator is already running");
							if ("completed" === o) {
								if ("throw" === n) throw a;
								return T()
							}
							for (r.method = n, r.arg = a;;) {
								var i = r.delegate;
								if (i) {
									var c = _(i, r);
									if (c) {
										if (c === p) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === o) throw o = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								o = "executing";
								var s = f(e, t, r);
								if ("normal" === s.type) {
									if (o = r.done ? "completed" : "suspendedYield", s.arg === p) continue;
									return {
										value: s.arg,
										done: r.done
									}
								}
								"throw" === s.type && (o = "completed", r.method = "throw", r.arg = s.arg)
							}
						}
					}

					function _(e, t) {
						var r = t.method,
							o = e.iterator[r];
						if (void 0 === o) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), p;
						var n = f(o, e.iterator, t.arg);
						if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
						var a = n.arg;
						return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
					}

					function S(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function I(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function C(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(S, this), this.reset(!0)
					}

					function L(e) {
						if (e) {
							var t = e[i];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var o = -1,
									n = function t() {
										for (; ++o < e.length;)
											if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return n.next = n
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
					return m.prototype = v, n(y, "constructor", {
						value: v,
						configurable: !0
					}), n(v, "constructor", {
						value: m,
						configurable: !0
					}), m.displayName = u(v, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, u(e, l, "GeneratorFunction")), e.prototype = Object.create(y), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, $(k.prototype), u(k.prototype, s, (function() {
						return this
					})), e.AsyncIterator = k, e.async = function(t, r, o, n, a) {
						void 0 === a && (a = Promise);
						var i = new k(d(t, r, o, n), a);
						return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
							return e.done ? e.value : i.next()
						}))
					}, $(y), u(y, l, "Generator"), u(y, i, (function() {
						return this
					})), u(y, "toString", (function() {
						return "[object Generator]"
					})), e.keys = function(e) {
						var t = Object(e),
							r = [];
						for (var o in t) r.push(o);
						return r.reverse(),
							function e() {
								for (; r.length;) {
									var o = r.pop();
									if (o in t) return e.value = o, e.done = !1, e
								}
								return e.done = !0, e
							}
					}, e.values = L, C.prototype = {
						constructor: C,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !e)
								for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
						},
						stop: function() {
							this.done = !0;
							var e = this.tryEntries[0].completion;
							if ("throw" === e.type) throw e.arg;
							return this.rval
						},
						dispatchException: function(e) {
							if (this.done) throw e;
							var t = this;

							function o(r, o) {
								return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
							}
							for (var n = this.tryEntries.length - 1; n >= 0; --n) {
								var a = this.tryEntries[n],
									i = a.completion;
								if ("root" === a.tryLoc) return o("end");
								if (a.tryLoc <= this.prev) {
									var c = r.call(a, "catchLoc"),
										s = r.call(a, "finallyLoc");
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc)
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
									} else {
										if (!s) throw new Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return o(a.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var n = this.tryEntries[o];
								if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
									var a = n;
									break
								}
							}
							a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var i = a ? a.completion : {};
							return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var r = this.tryEntries[t];
								if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), I(r), p
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var r = this.tryEntries[t];
								if (r.tryLoc === e) {
									var o = r.completion;
									if ("throw" === o.type) {
										var n = o.arg;
										I(r)
									}
									return n
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, r) {
							return this.delegate = {
								iterator: L(e),
								resultName: t,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), p
						}
					}, e
				}

				function n(e, t, r, o, n, a, i) {
					try {
						var c = e[a](i),
							s = c.value
					} catch (e) {
						return void r(e)
					}
					c.done ? t(s) : Promise.resolve(s).then(o, n)
				}

				function a(e) {
					return function() {
						var t = this,
							r = arguments;
						return new Promise((function(o, a) {
							var i = e.apply(t, r);

							function c(e) {
								n(i, o, a, c, s, "next", e)
							}

							function s(e) {
								n(i, o, a, c, s, "throw", e)
							}
							c(void 0)
						}))
					}
				}

				function i(e, t, r) {
					return (t = function(e) {
						var t = function(e, t) {
							if ("object" !== c(e) || null === e) return e;
							var r = e[Symbol.toPrimitive];
							if (void 0 !== r) {
								var o = r.call(e, t || "default");
								if ("object" !== c(o)) return o;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === c(t) ? t : String(t)
					}(t)) in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function c(e) {
					return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, c(e)
				}

				function s(e, t) {
					return new Promise((function(r, o) {
						var n = null;
						if ("object" === c(e)) n = e;
						else {
							if ("string" != typeof e) throw "TypeError: First argument should be a string or an object.";
							n = i({}, e, t)
						}
						chrome.storage.local.set(n, (function() {
							return chrome.runtime.lastError ? o(chrome.runtime.lastError) : r()
						}))
					}))
				}

				function l(e) {
					return new Promise((function(t, r) {
						"string" == typeof e ? chrome.storage.local.get([e], (function(r) {
							t(r[e])
						})) : Array.isArray(e) ? chrome.storage.local.get(null, (function(r) {
							t(e.map((function(e) {
								return r[e]
							})))
						})) : e || chrome.storage.local.get(null, (function(e) {
							t(e)
						}))
					}))
				}

				function u(e) {
					return d.apply(this, arguments)
				}

				function d() {
					return (d = a(o().mark((function e(t) {
						return o().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.abrupt("return", new Promise((function(e) {
										chrome.storage.local.get("options", (function(r) {
											e(t ? r.options[t] : r.options)
										}))
									})));
								case 1:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function f() {
					return p.apply(this, arguments)
				}

				function p() {
					return (p = a(o().mark((function e() {
						var t, r, n, a, i;
						return o().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (e.prev = 0, t = !1, !localStorage || !localStorage.msObj) {
										e.next = 37;
										break
									}
									return e.next = 5, u();
								case 5:
									r = e.sent, localStorage.format && (r.format = localStorage.format, localStorage.removeItem("format"), t = !0), localStorage.msObj && (r.msObj = JSON.parse(localStorage.msObj), localStorage.removeItem("msObj"), t = !0), localStorage.delay_sec && (n = parseInt(localStorage.delay_sec), isNaN(n) || (r.delay_sec = n), localStorage.removeItem("delay_sec"), t = !0), localStorage.desktop_delay_sec && (a = parseInt(localStorage.desktop_delay_sec), isNaN(a) || (r.desktop_delay_sec = a), localStorage.removeItem("desktop_delay_sec"), t = !0), localStorage["add-url"] && (r["add-url"] = "true" === localStorage["add-url"], localStorage.removeItem("add-url"), t = !0), localStorage["expand-link"] && (r["expand-link"] = "true" === localStorage["expand-link"], localStorage.removeItem("expand-link"), t = !0), localStorage["expand-link-slack"] && (r["expand-link-slack"] = "true" === localStorage["expand-link-slack"], localStorage.removeItem("expand-link-slack"), t = !0), localStorage["expand-link-trello"] && (r["expand-link-trello"] = "true" === localStorage["expand-link-trello"], localStorage.removeItem("expand-link-trello"), t = !0), localStorage["expand-link-asana"] && (r["expand-link-asana"] = "true" === localStorage["expand-link-asana"], localStorage.removeItem("expand-link-asana"), t = !0), localStorage["expand-link-github"] && (r["expand-link-github"] = "true" === localStorage["expand-link-github"], localStorage.removeItem("expand-link-github"), t = !0), localStorage["expand-link-jira"] && (r["expand-link-jira"] = "true" === localStorage["expand-link-jira"], localStorage.removeItem("expand-link-jira"), t = !0), localStorage["expand-link-gmail"] && (r["expand-link-gmail"] = "true" === localStorage["expand-link-gmail"], localStorage.removeItem("expand-link-gmail"), t = !0), localStorage["auto-save-path"] && (r["auto-save-path"] = "true" === localStorage["auto-save-path"], localStorage.removeItem("auto-save-path"), t = !0), localStorage["show-noti"] && (r["show-noti"] = "true" === localStorage["show-noti"], localStorage.removeItem("show-noti"), t = !0), localStorage.popupTab && (r.popupTab = localStorage.popupTab, localStorage.removeItem("popupTab"), t = !0), localStorage.activeTab && (r.activeTab = localStorage.activeTab, localStorage.removeItem("activeTab"), t = !0), localStorage["save-as"] && (r["save-as"] = "true" === localStorage["save-as"], localStorage.removeItem("save-as"), t = !0), localStorage["allow-remind-mic"] && (r["allow-remind-mic"] = "true" === localStorage["allow-remind-mic"], localStorage.removeItem("allow-remind-mic"), t = !0), localStorage.record_mic && (r.record_mic = "true" === localStorage.record_mic, localStorage.removeItem("record_mic"), t = !0), localStorage.record_countdown && (i = localStorage.record_countdown, isNaN(i) || (r.record_countdown = 3), localStorage.removeItem("record_countdown"), t = !0), localStorage.max_resolution && (r.max_resolution = localStorage.max_resolution, localStorage.removeItem("max_resolution"), t = !0), localStorage["save-location"] && (r["save-location"] = localStorage["save-location"], localStorage.removeItem("save-location"), t = !0), localStorage["save-capture-location"] && (r["save-capture-location"] = localStorage["save-capture-location"], localStorage.removeItem("save-capture-location"), t = !0), localStorage.record_tabsound && (r.record_tabsound = "true" === localStorage.record_tabsound, localStorage.removeItem("record_tabsound"), t = !0), localStorage.record_toolbar && (r.record_toolbar = "true" === localStorage.record_toolbar, localStorage.removeItem("record_toolbar"), t = !0), localStorage.record_type && (r.record_type = localStorage.record_type, localStorage.removeItem("record_type"), t = !0), localStorage["gmail-btn"] && (r["gmail-btn"] = "true" === localStorage["gmail-btn"], localStorage.removeItem("gmail-btn"), t = !0), localStorage["context-menu"] && (r["context-menu"] = "true" === localStorage["context-menu"], localStorage.removeItem("context-menu"), t = !0), localStorage.ctl_bar && (r.ctl_bar = "true" === localStorage.ctl_bar, localStorage.removeItem("ctl_bar"), t = !0), localStorage.version && (r.version = localStorage.version, t = !0), t && s("options", r);
								case 37:
									e.next = 41;
									break;
								case 39:
									e.prev = 39, e.t0 = e.catch(0);
								case 41:
								case "end":
									return e.stop()
							}
						}), e, null, [
							[0, 39]
						])
					})))).apply(this, arguments)
				}

				function h(e, t) {
					if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources && (navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)), !navigator.enumerateDevices && navigator.mediaDevices.enumerateDevices && (navigator.enumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator)), navigator.enumerateDevices) {
						var r = [],
							o = [],
							n = [],
							a = [],
							i = [],
							c = [];
						navigator.enumerateDevices((function(t) {
							t.forEach((function(e) {
								var t, s = {};
								for (var l in e) s[l] = e[l];
								r.forEach((function(e) {
									e.deviceId === s.deviceId && (t = !0)
								})), t || ("audio" === s.kind && (s.kind = "audioinput"), "video" === s.kind && (s.kind = "videoinput"), s.deviceId || (s.deviceId = s.id), s.id || (s.id = s.deviceId), "audioinput" !== s.kind && "audio" !== s.kind || a.push(s), "audiooutput" === s.kind && i.push(s), "videoinput" !== s.kind && "video" !== s.kind || c.push(s), -1 !== s.kind.indexOf("audio") && o.push(s), -1 !== s.kind.indexOf("video") && n.push(s), r.push(s))
							})), e && e({
								allMediaDevices: r,
								allVideoDevices: n,
								allAudioDevices: o,
								videoInputDevices: c,
								audioInputDevices: a,
								audioOutputDevices: i
							})
						}))
					} else t(null, "Neither navigator.mediaDevices.enumerateDevices NOR MediaStreamTrack.getSources are available.")
				}
				navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && (navigator.enumerateDevices = function(e) {
					navigator.mediaDevices.enumerateDevices().then(e)
				});
				var m = {
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
				for (var v in m) {
					var g = m[v];
					g.baseUrl = g.schema + "://" + g.domain, g.wsUrl = g.ws + "://" + g.domain
				}
				const w = m.www;
				r(27484), r(9669), r(40705), r(28374);

				function b(e, t) {
					chrome.runtime.sendMessage({
						action: "googleEvent",
						name: e,
						extra: t
					})
				}

				function y() {
					var e = navigator.userAgent,
						t = e.indexOf("Chrome/"),
						r = e.substring(t + 7, e.length),
						o = r.indexOf("."),
						n = r.substring(0, o);
					return parseInt(n) < 116
				}

				function k(e) {
					! function(e, t) {
						chrome.tabs.query(Object.assign({
							active: !0
						}, e), (function(e) {
							t(e[0])
						}))
					}({}, (function(t) {
						var r = {
							url: e
						};
						t && t.incognito || !t ? chrome.windows.getAll((function(e) {
							e.forEach((function(e) {
								e.incognito || "normal" !== e.type || (r.windowId = e.id)
							})), x(r)
						})) : (r.index = (t ? t.index : currentTabIndex || 0) + 1, r.windowId = t ? t.windowId : currentWindowId, x(r))
					}))
				}

				function x(e) {
					e && e.url && (e.hasOwnProperty("index") && !e.index && delete e.index, chrome.tabs.create(e, (function(e) {
						chrome.windows.update(e.windowId, {
							focused: !0
						})
					})))
				}
				Math.pow(2, 31);

				function _(e) {
					return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, _(e)
				}

				function S() {
					S = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						r = t.hasOwnProperty,
						o = Object.defineProperty || function(e, t, r) {
							e[t] = r.value
						},
						n = "function" == typeof Symbol ? Symbol : {},
						a = n.iterator || "@@iterator",
						i = n.asyncIterator || "@@asyncIterator",
						c = n.toStringTag || "@@toStringTag";

					function s(e, t, r) {
						return Object.defineProperty(e, t, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						s({}, "")
					} catch (e) {
						s = function(e, t, r) {
							return e[t] = r
						}
					}

					function l(e, t, r, n) {
						var a = t && t.prototype instanceof f ? t : f,
							i = Object.create(a.prototype),
							c = new C(n || []);
						return o(i, "_invoke", {
							value: $(e, r, c)
						}), i
					}

					function u(e, t, r) {
						try {
							return {
								type: "normal",
								arg: e.call(t, r)
							}
						} catch (e) {
							return {
								type: "throw",
								arg: e
							}
						}
					}
					e.wrap = l;
					var d = {};

					function f() {}

					function p() {}

					function h() {}
					var m = {};
					s(m, a, (function() {
						return this
					}));
					var v = Object.getPrototypeOf,
						g = v && v(v(L([])));
					g && g !== t && r.call(g, a) && (m = g);
					var w = h.prototype = f.prototype = Object.create(m);

					function b(e) {
						["next", "throw", "return"].forEach((function(t) {
							s(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function y(e, t) {
						function n(o, a, i, c) {
							var s = u(e[o], e, a);
							if ("throw" !== s.type) {
								var l = s.arg,
									d = l.value;
								return d && "object" == _(d) && r.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
									n("next", e, i, c)
								}), (function(e) {
									n("throw", e, i, c)
								})) : t.resolve(d).then((function(e) {
									l.value = e, i(l)
								}), (function(e) {
									return n("throw", e, i, c)
								}))
							}
							c(s.arg)
						}
						var a;
						o(this, "_invoke", {
							value: function(e, r) {
								function o() {
									return new t((function(t, o) {
										n(e, r, t, o)
									}))
								}
								return a = a ? a.then(o, o) : o()
							}
						})
					}

					function $(e, t, r) {
						var o = "suspendedStart";
						return function(n, a) {
							if ("executing" === o) throw new Error("Generator is already running");
							if ("completed" === o) {
								if ("throw" === n) throw a;
								return T()
							}
							for (r.method = n, r.arg = a;;) {
								var i = r.delegate;
								if (i) {
									var c = k(i, r);
									if (c) {
										if (c === d) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === o) throw o = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								o = "executing";
								var s = u(e, t, r);
								if ("normal" === s.type) {
									if (o = r.done ? "completed" : "suspendedYield", s.arg === d) continue;
									return {
										value: s.arg,
										done: r.done
									}
								}
								"throw" === s.type && (o = "completed", r.method = "throw", r.arg = s.arg)
							}
						}
					}

					function k(e, t) {
						var r = t.method,
							o = e.iterator[r];
						if (void 0 === o) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), d;
						var n = u(o, e.iterator, t.arg);
						if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
						var a = n.arg;
						return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
					}

					function x(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function I(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function C(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(x, this), this.reset(!0)
					}

					function L(e) {
						if (e) {
							var t = e[a];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var o = -1,
									n = function t() {
										for (; ++o < e.length;)
											if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return n.next = n
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
					return p.prototype = h, o(w, "constructor", {
						value: h,
						configurable: !0
					}), o(h, "constructor", {
						value: p,
						configurable: !0
					}), p.displayName = s(h, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, c, "GeneratorFunction")), e.prototype = Object.create(w), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, b(y.prototype), s(y.prototype, i, (function() {
						return this
					})), e.AsyncIterator = y, e.async = function(t, r, o, n, a) {
						void 0 === a && (a = Promise);
						var i = new y(l(t, r, o, n), a);
						return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
							return e.done ? e.value : i.next()
						}))
					}, b(w), s(w, c, "Generator"), s(w, a, (function() {
						return this
					})), s(w, "toString", (function() {
						return "[object Generator]"
					})), e.keys = function(e) {
						var t = Object(e),
							r = [];
						for (var o in t) r.push(o);
						return r.reverse(),
							function e() {
								for (; r.length;) {
									var o = r.pop();
									if (o in t) return e.value = o, e.done = !1, e
								}
								return e.done = !0, e
							}
					}, e.values = L, C.prototype = {
						constructor: C,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !e)
								for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
						},
						stop: function() {
							this.done = !0;
							var e = this.tryEntries[0].completion;
							if ("throw" === e.type) throw e.arg;
							return this.rval
						},
						dispatchException: function(e) {
							if (this.done) throw e;
							var t = this;

							function o(r, o) {
								return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
							}
							for (var n = this.tryEntries.length - 1; n >= 0; --n) {
								var a = this.tryEntries[n],
									i = a.completion;
								if ("root" === a.tryLoc) return o("end");
								if (a.tryLoc <= this.prev) {
									var c = r.call(a, "catchLoc"),
										s = r.call(a, "finallyLoc");
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc)
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
									} else {
										if (!s) throw new Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return o(a.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var n = this.tryEntries[o];
								if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
									var a = n;
									break
								}
							}
							a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var i = a ? a.completion : {};
							return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, d) : this.complete(i)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var r = this.tryEntries[t];
								if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), I(r), d
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var r = this.tryEntries[t];
								if (r.tryLoc === e) {
									var o = r.completion;
									if ("throw" === o.type) {
										var n = o.arg;
										I(r)
									}
									return n
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, r) {
							return this.delegate = {
								iterator: L(e),
								resultName: t,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), d
						}
					}, e
				}

				function I(e, t, r, o, n, a, i) {
					try {
						var c = e[a](i),
							s = c.value
					} catch (e) {
						return void r(e)
					}
					c.done ? t(s) : Promise.resolve(s).then(o, n)
				}

				function C(e, t, r) {
					return chrome.tabs.sendMessage(e, t, r)
				}

				function L(e, t) {
					return chrome.runtime.sendMessage(e, t)
				}

				function T(e, t) {
					return O.apply(this, arguments)
				}

				function O() {
					var e;
					return e = S().mark((function e(t, r) {
						return S().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (t.target = "offscreen", y()) {
										e.next = 5;
										break
									}
									return e.abrupt("return", L(t, r));
								case 5:
									return e.next = 7, l("recordTab");
								case 7:
									C(e.sent, t, r);
								case 9:
								case "end":
									return e.stop()
							}
						}), e)
					})), O = function() {
						var t = this,
							r = arguments;
						return new Promise((function(o, n) {
							var a = e.apply(t, r);

							function i(e) {
								I(a, o, n, i, c, "next", e)
							}

							function c(e) {
								I(a, o, n, i, c, "throw", e)
							}
							i(void 0)
						}))
					}, O.apply(this, arguments)
				}

				function E(e) {
					return new Promise((function(t, r) {
						L({
							action: "record/getInfo",
							keys: e,
							target: "offscreen"
						}).then(t).catch(r)
					}))
				}
				var j = 1073741824,
					M = 2,
					N = 1;

				function P() {
					return {
						height: window.screen.height,
						width: window.screen.width,
						left: window.screen.availLeft,
						top: window.screen.availTop
					}
				}
				const A = function() {
					return chrome.tabs.query({
						currentWindow: !0
					}).then((function(e) {
						for (var t = 0; t < e.length; t++)
							if (/^(https?:\/\/)/.test(e[t].url)) return r = e[t].id, chrome.scripting.executeScript({
								target: {
									tabId: r
								},
								func: P
							}).then((function(e) {
								return e[0].result
							})).catch((function() {
								return P()
							}));
						var r;
						return P()
					}))
				};

				function D() {
					D = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						r = t.hasOwnProperty,
						o = Object.defineProperty || function(e, t, r) {
							e[t] = r.value
						},
						n = "function" == typeof Symbol ? Symbol : {},
						a = n.iterator || "@@iterator",
						i = n.asyncIterator || "@@asyncIterator",
						c = n.toStringTag || "@@toStringTag";

					function s(e, t, r) {
						return Object.defineProperty(e, t, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						s({}, "")
					} catch (e) {
						s = function(e, t, r) {
							return e[t] = r
						}
					}

					function l(e, t, r, n) {
						var a = t && t.prototype instanceof f ? t : f,
							i = Object.create(a.prototype),
							c = new S(n || []);
						return o(i, "_invoke", {
							value: $(e, r, c)
						}), i
					}

					function u(e, t, r) {
						try {
							return {
								type: "normal",
								arg: e.call(t, r)
							}
						} catch (e) {
							return {
								type: "throw",
								arg: e
							}
						}
					}
					e.wrap = l;
					var d = {};

					function f() {}

					function p() {}

					function h() {}
					var m = {};
					s(m, a, (function() {
						return this
					}));
					var v = Object.getPrototypeOf,
						g = v && v(v(I([])));
					g && g !== t && r.call(g, a) && (m = g);
					var w = h.prototype = f.prototype = Object.create(m);

					function b(e) {
						["next", "throw", "return"].forEach((function(t) {
							s(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function y(e, t) {
						function n(o, a, i, c) {
							var s = u(e[o], e, a);
							if ("throw" !== s.type) {
								var l = s.arg,
									d = l.value;
								return d && "object" == H(d) && r.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
									n("next", e, i, c)
								}), (function(e) {
									n("throw", e, i, c)
								})) : t.resolve(d).then((function(e) {
									l.value = e, i(l)
								}), (function(e) {
									return n("throw", e, i, c)
								}))
							}
							c(s.arg)
						}
						var a;
						o(this, "_invoke", {
							value: function(e, r) {
								function o() {
									return new t((function(t, o) {
										n(e, r, t, o)
									}))
								}
								return a = a ? a.then(o, o) : o()
							}
						})
					}

					function $(e, t, r) {
						var o = "suspendedStart";
						return function(n, a) {
							if ("executing" === o) throw new Error("Generator is already running");
							if ("completed" === o) {
								if ("throw" === n) throw a;
								return C()
							}
							for (r.method = n, r.arg = a;;) {
								var i = r.delegate;
								if (i) {
									var c = k(i, r);
									if (c) {
										if (c === d) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === o) throw o = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								o = "executing";
								var s = u(e, t, r);
								if ("normal" === s.type) {
									if (o = r.done ? "completed" : "suspendedYield", s.arg === d) continue;
									return {
										value: s.arg,
										done: r.done
									}
								}
								"throw" === s.type && (o = "completed", r.method = "throw", r.arg = s.arg)
							}
						}
					}

					function k(e, t) {
						var r = t.method,
							o = e.iterator[r];
						if (void 0 === o) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), d;
						var n = u(o, e.iterator, t.arg);
						if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
						var a = n.arg;
						return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
					}

					function x(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function _(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function S(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(x, this), this.reset(!0)
					}

					function I(e) {
						if (e) {
							var t = e[a];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var o = -1,
									n = function t() {
										for (; ++o < e.length;)
											if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return n.next = n
							}
						}
						return {
							next: C
						}
					}

					function C() {
						return {
							value: void 0,
							done: !0
						}
					}
					return p.prototype = h, o(w, "constructor", {
						value: h,
						configurable: !0
					}), o(h, "constructor", {
						value: p,
						configurable: !0
					}), p.displayName = s(h, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, c, "GeneratorFunction")), e.prototype = Object.create(w), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, b(y.prototype), s(y.prototype, i, (function() {
						return this
					})), e.AsyncIterator = y, e.async = function(t, r, o, n, a) {
						void 0 === a && (a = Promise);
						var i = new y(l(t, r, o, n), a);
						return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
							return e.done ? e.value : i.next()
						}))
					}, b(w), s(w, c, "Generator"), s(w, a, (function() {
						return this
					})), s(w, "toString", (function() {
						return "[object Generator]"
					})), e.keys = function(e) {
						var t = Object(e),
							r = [];
						for (var o in t) r.push(o);
						return r.reverse(),
							function e() {
								for (; r.length;) {
									var o = r.pop();
									if (o in t) return e.value = o, e.done = !1, e
								}
								return e.done = !0, e
							}
					}, e.values = I, S.prototype = {
						constructor: S,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
								for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
						},
						stop: function() {
							this.done = !0;
							var e = this.tryEntries[0].completion;
							if ("throw" === e.type) throw e.arg;
							return this.rval
						},
						dispatchException: function(e) {
							if (this.done) throw e;
							var t = this;

							function o(r, o) {
								return i.type = "throw", i.arg = e, t.next = r, o && (t.method = "next", t.arg = void 0), !!o
							}
							for (var n = this.tryEntries.length - 1; n >= 0; --n) {
								var a = this.tryEntries[n],
									i = a.completion;
								if ("root" === a.tryLoc) return o("end");
								if (a.tryLoc <= this.prev) {
									var c = r.call(a, "catchLoc"),
										s = r.call(a, "finallyLoc");
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc)
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
									} else {
										if (!s) throw new Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return o(a.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var n = this.tryEntries[o];
								if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
									var a = n;
									break
								}
							}
							a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var i = a ? a.completion : {};
							return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, d) : this.complete(i)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var r = this.tryEntries[t];
								if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), _(r), d
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var r = this.tryEntries[t];
								if (r.tryLoc === e) {
									var o = r.completion;
									if ("throw" === o.type) {
										var n = o.arg;
										_(r)
									}
									return n
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, r) {
							return this.delegate = {
								iterator: I(e),
								resultName: t,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), d
						}
					}, e
				}

				function G(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != r) {
							var o, n, a, i, c = [],
								s = !0,
								l = !1;
							try {
								if (a = (r = r.call(e)).next, 0 === t) {
									if (Object(r) !== r) return;
									s = !1
								} else
									for (; !(s = (o = a.call(r)).done) && (c.push(o.value), c.length !== t); s = !0);
							} catch (e) {
								l = !0, n = e
							} finally {
								try {
									if (!s && null != r.return && (i = r.return(), Object(i) !== i)) return
								} finally {
									if (l) throw n
								}
							}
							return c
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return F(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r && e.constructor && (r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return F(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function F(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
					return o
				}

				function U(e, t, r, o, n, a, i) {
					try {
						var c = e[a](i),
							s = c.value
					} catch (e) {
						return void r(e)
					}
					c.done ? t(s) : Promise.resolve(s).then(o, n)
				}

				function R(e) {
					return function() {
						var t = this,
							r = arguments;
						return new Promise((function(o, n) {
							var a = e.apply(t, r);

							function i(e) {
								U(a, o, n, i, c, "next", e)
							}

							function c(e) {
								U(a, o, n, i, c, "throw", e)
							}
							i(void 0)
						}))
					}
				}

				function W(e, t) {
					var r = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(e);
						t && (o = o.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), r.push.apply(r, o)
					}
					return r
				}

				function q(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {};
						t % 2 ? W(Object(r), !0).forEach((function(t) {
							B(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W(Object(r)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
						}))
					}
					return e
				}

				function B(e, t, r) {
					return (t = function(e) {
						var t = function(e, t) {
							if ("object" !== H(e) || null === e) return e;
							var r = e[Symbol.toPrimitive];
							if (void 0 !== r) {
								var o = r.call(e, t || "default");
								if ("object" !== H(o)) return o;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === H(t) ? t : String(t)
					}(t)) in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function H(e) {
					return H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, H(e)
				}
				var V, Y = w.baseUrl,
					z = !1,
					J = null,
					K = null,
					Q = null,
					X = 0,
					Z = !1,
					ee = !1,
					te = !1,
					re = 100,
					oe = 0,
					ne = 20,
					ae = 0,
					ie = null,
					ce = !1,
					se = !0,
					le = !1,
					ue = null,
					de = !1,
					fe = !1,
					pe = !1,
					he = !1,
					me = [],
					ve = [],
					ge = !1,
					we = !1,
					be = !1,
					ye = {},
					$e = "",
					ke = !1;

				function xe(e) {
					chrome.tabs.create({
						url: e
					})
				}

				function _e(e, t) {
					chrome.tabs.query(Object.assign({
						active: !0,
						currentWindow: !0
					}, e), (function(e) {
						t(e[0])
					}))
				}

				function Se(e, t) {
					"object" === H(e) ? ye = q(q({}, ye), e) : "string" == typeof e && (ye = q(q({}, ye), {}, B({}, e, t))), s("options", ye)
				}
				$("[data-i18n-id]").each((function() {
					var e = $(this).attr("data-i18n-id");
					$(this).html(chrome.i18n.getMessage(e))
				})), $("[data-i18n-text-id]").each((function() {
					var e = $(this).attr("data-i18n-text-id");
					$(this).attr("data-text", chrome.i18n.getMessage(e))
				})), $("[data-i18n-aria-label]").each((function() {
					var e = $(this).attr("data-i18n-aria-label");
					$(this).attr("aria-label", chrome.i18n.getMessage(e))
				})), L({
					action: "isCapturing"
				}, (function(e) {
					e && Pe("capturing-view")
				}));

				function Ie() {
					return Ie = R(D().mark((function e() {
						var t, r, o, n, a, i, c;
						return D().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 3, E("recordingStatus").catch((function(e) {}));
								case 3:
									if (t = e.sent, "recording" !== ($e = t)) {
										e.next = 17;
										break
									}
									return Pe("recording-view"), lt(), Ze(), setInterval(vt, 100), e.next = 13, E(["isPaused", "socketClient"]);
								case 13:
									r = e.sent, o = G(r, 1), o[0] && st(!0);
								case 17:
									return e.next = 19, f();
								case 19:
									return e.next = 22, l();
								case 22:
									if (n = e.sent, ye = n.options, "preparing" !== $e) {
										e.next = 37;
										break
									}
									if (!y()) {
										e.next = 36;
										break
									}
									if (!(a = n.recordBgWin) || !a.winId) {
										e.next = 34;
										break
									}
									return e.next = 32, chrome.windows.get(a.winId).catch((function(e) {}));
								case 32:
									(i = e.sent) && "popup" === i.type && chrome.windows.update(a.winId, {
										focused: !0
									}).then((function() {
										window.close()
									}));
								case 34:
									e.next = 37;
									break;
								case 36:
									L({
										action: "reopenPrepare"
									}, (function() {
										window.close()
									}));
								case 37:
									return n.recordingInfo, ye["dark-mode"] && $("body").addClass("dark-mode"), "recording" !== $e && "preparing" !== $e ? chrome.cookies.getAll({
										url: Y
									}, (function(e) {
										if (chrome.runtime.lastError, e || (e = []), e) {
											for (var t = 0, r = e.length; t < r; t++)
												if ("screenshot_personal_fullname" === e[t].name) var o = decodeURI(e[t].value);
												else if ("screenshot_personal_type" === e[t].name) var n = e[t].value;
											else if ("screenshot_personal_premium_level" === e[t].name) var a = 2;
											else if ("screenshot_personal_permission" === e[t].name) e[t].value.split(",");
											else if ("screenshot_personal_uid" === e[t].name) var i = e[t].value;
											o ? (z = !0, $(".aws-info").find(".user-name").text(o).attr("title", o), $("#no-signin").hide(), $("#aws-account").show(), chrome.storage.local.get("userinfo", (function(e) {
												e.userinfo && (X = parseInt(a), Z = e.userinfo.newPremium, ee = e.userinfo.allowUploadImage, te = e.userinfo.allowVideoCreate, re = e.userinfo.imageLimitation, oe = e.userinfo.imageTotalLimitation, ne = e.userinfo.videoLimitation, ae = e.userinfo.videoTotalLimitation, ye.videoTotalLimitation = ae, ge = !0, chrome.storage.local.set({
													userinfo: {
														newPremium: e.userinfo.newPremium,
														uid: e.userinfo.uid,
														premiumLevel: parseInt(a),
														allowUploadImage: e.userinfo.allowUploadImage,
														allowVideoCreate: e.userinfo.allowVideoCreate,
														imageLimitation: e.userinfo.imageLimitation,
														imageTotalLimitation: e.userinfo.imageTotalLimitation,
														videoLimitation: e.userinfo.videoLimitation,
														videoTotalLimitation: e.userinfo.videoTotalLimitation
													}
												}), He()), $("#loading").addClass("active"), $.ajax({
													method: "GET",
													url: Y + "/api/v1/user/einfo"
												}).done((function(e) {
													X = parseInt("2"), Z = e.data.newPremium, ee = e.data.permission.allowUploadImage, te = e.data.permission.allowVideoCreate, re = e.data.counts.imageLimitation, oe = e.data.counts.imageTotalLimitation, ne = e.data.counts.videoLimitation, ae = e.data.counts.videoTotalLimitation, ye.videoTotalLimitation = ae, ge = !0, chrome.storage.local.set({
														userinfo: {
															newPremium: Z,
															uid: i,
															premiumLevel: X,
															allowUploadImage: ee,
															allowVideoCreate: te,
															imageLimitation: re,
															imageTotalLimitation: oe,
															videoLimitation: ne,
															videoTotalLimitation: ae
														}
													}), $("#loading").removeClass("active"), He(), setTimeout((function() {
														$(document.body).removeClass("no-transition")
													}), 500)
												})).catch((function(e) {
													$("#loading").addClass("hide"), setTimeout((function() {
														$(document.body).removeClass("no-transition")
													}), 500)
												}))
											}))) : (ge = !0, chrome.storage.local.remove("userinfo"), "local" === ye["save-location"] && We(), $("#loading").addClass("hide"), $("#no-signin").show(), $("#aws-account").hide(), He()), "0" == n ? $(".aws-user").removeClass("premium") : void 0 === n ? ($(".aws-premium-icon").hide(), $(".aws-upgrade").hide()) : $(".aws-user").addClass("premium"), z || dt()
										}
									})) : Ce(), e.next = 44, E("isInCountdown").catch((function() {}));
								case 44:
									c = e.sent, "preparing" !== $e && "countdown" !== $e || (Pe(c ? "video-countdown-view" : "video-prepare-view"), ie = setInterval(R(D().mark((function e() {
											var t;
											return D().wrap((function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														return e.next = 2, l("recordingStatus");
													case 2:
														if ("recording" !== e.sent) {
															e.next = 11;
															break
														}
														Pe("recording-view"), clearInterval(ie), Ce(), ie = null, setInterval(vt, 100), e.next = 16;
														break;
													case 11:
														if (!c) {
															e.next = 16;
															break
														}
														return e.next = 14, E("countdown");
													case 14:
														t = e.sent, $("#countdown-num").text(t);
													case 16:
													case "end":
														return e.stop()
												}
											}), e)
										}))), 100)), Le(), Te(),
										function() {
											function e(e, t) {
												for (var r = 0; r < t.length; r++)
													if (e === t[r].deviceId) return !0;
												return !1
											}

											function t(t, r) {
												if (r.length) {
													var o = $("#" + t + "-source");
													r.forEach((function(e) {
														$("<option value='" + e.deviceId + "'>" + e.label + "</option>").appendTo(o)
													})), ye[t + "-deviceId"] && e(ye[t + "-deviceId"], r) && o.val(ye[t + "-deviceId"])
												}
											}

											function r(t, r) {
												if (r.length) {
													var o = $("#" + t + "-source-recording");
													r.forEach((function(e) {
														$("<option value='" + e.deviceId + "'>" + e.label + "</option>").appendTo(o)
													})), ye[t + "-deviceId"] && e(ye[t + "-deviceId"], r) && o.val(ye[t + "-deviceId"])
												}
											}

											function o() {
												ye.record_tabsound ? ($("#tabsound").show(), $("#tabsoundoff").hide(), $("#record-tabsound").prop("checked", !0)) : ($("#tabsound").hide(), $("#tabsoundoff").show(), $("#record-tabsound").prop("checked", !1))
											}

											function n(e) {
												var t = "none" !== $("#audio").css("display"),
													r = $("#ctl-bar").prop("checked"),
													o = $("input[name=record-type]:checked").val(),
													n = ye.record_countdown,
													a = $(".custom-select[data-option=max_resolution]").attr("data-value") || 720,
													i = $(".custom-select[data-option=save-location").attr("data-value"),
													c = "none" !== $("#cam").css("display"),
													s = $("#cam-source").val();
												$("#cam-source").val() && ye["cam-deviceId"] || ve.length > 0 && Se({
													"cam-deviceId": s = ve[0].deviceId
												});
												var l = $("#mic-source").val();
												$("#mic-source").val() && ye["mic-deviceId"] || me.length > 0 && Se({
													"mic-deviceId": l = me[0].deviceId
												});
												var u = $("#record-tabsound").prop("checked");
												if (!t && me.length > 0 && !e && ye["allow-remind-mic"]) Ne("open-mic");
												else {
													var d = parseInt($("#sec-field")[0].value),
														f = parseInt($("#min-field")[0].value),
														p = parseInt($("#hour-field")[0].value),
														h = {
															isRecordMic: t,
															recordType: o,
															countdown: n,
															saveLocation: i,
															resolution: a,
															isRecordCam: c,
															isShowToolbar: r,
															camDeviceId: s,
															micDeviceId: l,
															isRecordTabSound: u,
															isAutoStop: $("#auto-stop").prop("checked"),
															autoStopHour: p,
															autoStopMin: f,
															autoStopSec: d
														},
														m = window.screen.width,
														v = window.screen.height,
														g = {
															"4k": {
																width: 3084,
																height: 2160
															},
															1080: {
																width: 1920,
																height: 1080
															},
															720: {
																width: 1280,
																height: 720
															}
														};
													if ("desktop" === o && (m < g[a].width ? (h.width = m, h.height = v) : (h.width = g[a].width, h.height = g[a].height)), h.screenWidth = m * window.devicePixelRatio, h.screenHeight = v * window.devicePixelRatio, "cloud" === ye["save-location"]) {
														if (z) {
															if (de && 0 === me.length) w = "/setup-react.html?from=record&isSignIn=true"
														} else if (de) {
															if (0 !== me.length) return void Ne("sign-in", "record");
															var w = "/setup-react.html?from=record"
														} else var w = "/setup-react.html?from=record&isGranted=true";
														if (w && (!ye.has_setup || !z)) return chrome.tabs.create({
															url: w
														}), void Se({
															has_setup: !0
														})
													}
													_e({}, function() {
														var e = R(D().mark((function e(t) {
															var r, o, n, a;
															return D().wrap((function(e) {
																for (;;) switch (e.prev = e.next) {
																	case 0:
																		return h.recordingTabId = t.id, h.mainWinId = t.windowId, h.recordingTabTitle = t.title, h.recordingTabUrl = t.url, r = h.recordType, o = h.camDeviceId, n = h.isRecordCam, e.next = 7, A();
																	case 7:
																		a = e.sent, "camera" === r ? (h.recordingTabTitle = "camera", L({
																			action: "openCameraPage",
																			screen: a,
																			recordOptions: h
																		}, (function() {
																			window.close()
																		}))) : ("desktop" === r && n && chrome.runtime.onConnect.addListener((function(e) {
																			"record" === e.name && (e.postMessage({
																				action: "startCamera",
																				camDeviceId: o
																			}), window.close())
																		})), L({
																			action: "startRecord",
																			recordOptions: h,
																			screen: a
																		}, (function() {
																			"desktop" === r && n ? n && setTimeout((function() {
																				window.close()
																			}), 600) : window.close()
																		})));
																	case 9:
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
											}

											function a() {
												return i.apply(this, arguments)
											}

											function i() {
												return (i = R(D().mark((function e() {
													var t, r, o;
													return D().wrap((function(e) {
														for (;;) switch (e.prev = e.next) {
															case 0:
																return e.next = 2, navigator.storage.estimate();
															case 2:
																return t = e.sent, r = t.usage, o = t.quota, e.abrupt("return", o - r);
															case 6:
															case "end":
																return e.stop()
														}
													}), e)
												})))).apply(this, arguments)
											}
											Promise.all([Ae(), De(), Ge()]).then((function() {
												pe && ye.record_mic && me.length > 0 ? ($("#record-mic").prop("checked", !0), $("#record-mic").parents(".record-option-item").find(".source-part").show(), $("volume-canvas").show(), $("#mute").hide(), $("#audio").show(), $("#mic-device").attr("aria-label", chrome.i18n.getMessage("off_mic_btn"))) : !pe || me.length < 1 ? ($("#mute").show(), $("#mute").find(".svg-icon").addClass("red"), $("#audio").hide(), $("#mic-device").attr("aria-label", chrome.i18n.getMessage("on_mic_btn"))) : !0 !== ye.record_mic && ($("#mute").show(), $("#mute").find(".svg-icon").removeClass("red"), $("#audio").hide(), $("#mic-device").attr("aria-label", chrome.i18n.getMessage("on_mic_btn"))), he && ye.record_cam && ve.length > 0 ? ($("#record-cam").prop("checked", !0), $("#record-cam").parents(".record-option-item").find(".source-part").show(), $("#nocam").hide(), $("#cam").show(), $("#cam-device").attr("aria-label", chrome.i18n.getMessage("off_cam_btn"))) : !he || ve.length < 1 ? ($("#nocam").show(), $("#nocam").find(".svg-icon").addClass("red"), $("#cam").hide(), $("#cam-device").attr("aria-label", chrome.i18n.getMessage("on_cam_btn"))) : ye.record_cam || ($("#nocam").show(), $("#nocam").find(".svg-icon").removeClass("red"), $("#cam").hide(), $("#cam-device").attr("aria-label", chrome.i18n.getMessage("on_cam_btn"))), $(".option-source").find("select").on("change", (function() {
													var e = $(this).attr("data-source"),
														t = $(this).val();
													ye[e + "-deviceId"] = t, $(".tab-record").hasClass("active") && "mic" === e ? (!1 === ye.record_mic && Se({
														record_mic: !0
													}), je(!0)) : $(".tab-record").hasClass("active") && "cam" === e && (Se({
														record_cam: !0
													}), Me(!0))
												})), $(".device-recording-select").find("select").on("change", (function(e) {
													var t = $(this).attr("data-source"),
														r = $(this).val();
													Se(B({}, t + "-deviceId", r)), "mic" === t ? T({
														action: "record/changeMic",
														deviceId: r
													}) : "cam" === t && T({
														action: "record/changeCamera",
														deviceId: r
													})
												})), $("input[name=record-type]").on("change", (function(e, t) {
													be = !(!t && !we), we || t ? we = !1 : ("custom" !== this.value && Se({
														record_type: this.value
													}), Ee()), be || je(!0 === ye.record_mic), Me(!0 === ye.record_cam), Ve(this.value), $("#record-menu").attr("class", this.value)
												})), $(".setup-btn").on("click", (function() {
													xe("/getAccess.html")
												})), we ? Oe() : ($("#record-type-" + ye.record_type).trigger("click", ["autofill"]), Ee()), $("#more-action").on("click", (function() {
													$(".video-setting-wrapper").addClass("show"), $(".menu-content").addClass("show")
												})), $(".video-setting-wrapper").on("click", (function() {
													$(".menu-content").removeClass("show"), $(".video-setting-wrapper").removeClass("show"), Xe()
												})), $("#back-menu").on("click", (function() {
													$(".menu-content").removeClass("show"), $(".video-setting-wrapper").removeClass("show"), Xe()
												})), $(".menu-content").on("click", (function(e) {
													e.stopPropagation()
												})), $("#auto-stop-action").on("click", (function() {
													$(".video-setting-wrapper").show(), $(".menu-content").addClass("show"),
														function() {
															ot.apply(this, arguments)
														}()
												})), de ? me.length ? (t("mic", me), r("mic", me)) : ($(".setup-mic-btn").show(), $(".record-option-microphone").find(".action").hide()) : $(".record-option-microphone").find(".record-option-title").text("No Microphone detected").addClass("no").end().find(".action").hide(), fe ? ve.length ? (t("cam", ve), t("cam-only", ve), r("cam", ve), $("#cam-only-source-part").show()) : ($(".setup-cam-btn").show(), $(".record-option-camera").find(".action").hide()) : ($(".record-option-camera").find(".record-option-title").addClass("no").text("No Camera detected").end().find(".action").hide(), $(".record-option-camera-only").find(".record-option-title").addClass("no").text("No Camera detected"))
											})).catch((function(e) {})), Ve(ye.record_type), $("#mic-reminder").prop("checked", ye["allow-remind-mic"]), Qe(), $(".custom-select[data-option=save-location]").find(".select-option-item[data-value=" + ye["save-location"] + "]").trigger("mousedown", ["autofill"]), $(".custom-select[data-option=save-capture-location]").find(".select-option-item[data-value=" + ye["save-capture-location"] + "]").trigger("mousedown", ["autofill"]), Ye("countdown", ye.record_countdown, !1), $("#auto-stop").prop("checked", ye["auto-timer-stop"]), Ye("hour", ye["auto-hour"], !1), Ye("min", ye["auto-min"], !1), Ye("sec", ye["auto-sec"], !1), Xe(), Qe(), $("#countdown-input").on("change", (function() {
												ye.record_countdown = $(this).val()
											})), $("#record-tabsound").prop("checked", ye.record_tabsound), o(), $("#record-tabsound").on("change", (function() {
												Se({
													record_tabsound: $(this).prop("checked")
												}), o()
											})), $("#ctl-bar").on("change", (function() {
												Se({
													ctl_bar: $(this).prop("checked")
												}), wt($(this).prop("checked"))
											})), $("#mic-reminder").on("change", (function() {
												Se({
													"allow-remind-mic": $(this).prop("checked")
												})
											})), $("#auto-stop").on("change", (function() {
												$("#auto-stop").prop("checked") && X < 2 ? (Ne("auto-stop-upgrade", "Auto-stop-limit"), $("#auto-stop").prop("checked", !1)) : (Qe(), Se("auto-timer-stop", $("#auto-stop").prop("checked")))
											})), $("#local-recording").on("click", (function() {
												xe("/video-list.html")
											})), $(".record-option-source").find(".field-head").on("click", (function() {
												"ctl-bar" === $(this).attr("data-type") && (Se({
													ctl_bar: !ye.ctl_bar
												}), wt(ye.ctl_bar))
											})), $(".record-option-source").find(".device-item").on("click", (function() {
												var e = $(this).attr("data-type");
												if ("mic" === e) {
													var t = !1,
														r = "none" === $("#audio").css("display");
													pe ? ye.record_mic && !r ? Se({
														record_mic: !1
													}) : (Se({
														record_mic: !0
													}), t = !0) : xe("/getAccess.html"), je(t)
												} else if ("cam" === e) {
													var n = !1;
													he ? "camera" !== $("input[name=record-type]:checked").val() && (ye.record_cam ? Se({
														record_cam: !1
													}) : (Se({
														record_cam: !0
													}), n = !0), Me(n)) : xe("/getAccess.html")
												} else "tabsound" === e && (Se({
													record_tabsound: !ye.record_tabsound
												}), o())
											})), $(".record-option-checkbox").on("change", (function() {
												var e = $(this).attr("data-type");
												if ($(this).prop("checked")) {
													if ("mic" === e) var t = pe;
													else if ("cam" === e) t = he;
													ye["record_" + e] = "true", !0 === t ? ($("#" + e + "-source-part").show(), "cam" === e && !ye.record_mic && pe && me && (Se({
														record_mic: !0
													}), $("#record-mic").prop("checked", !0), $("#mic-source-part").show()), "mic" === e && ht()) : xe("/getAccess.html")
												} else Se(B({}, "record_" + e, !1)), $("#" + e + "-source-part").hide(), "mic" === e && pt()
											})), $(".popup").find(".close").on("click", (function() {
												$(this).parents(".popup").hide(), this.classList.contains("cancel") && dt()
											})), $(".popup").find(".sub-item").on("click", (function() {
												var e = $(this).attr("data-type");
												"image" === e ? (Se({
													"save-capture-location": "local"
												}), He()) : "video" === e ? (Se({
													"save-location": "local"
												}), He()) : "invite" === e && xe(Y + "/invite"), $(this).parents(".popup").hide()
											})), $("#cancel-off").on("click", (function() {
												$(this).parents(".popup").hide()
											})), $("#comfig-off").on("click", (function() {
												T({
													action: "autoStop/toggle",
													isOn: !1
												}), Ze(), $(this).parents(".popup").hide()
											})), $("#cancel-edit").on("click", (function() {
												$(this).parents(".popup").hide()
											})), $("#comfig-edit").on("click", R(D().mark((function e() {
												var t, r, o, n, a, i;
												return D().wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															return e.next = 2, E(["recordTimeLength"]);
														case 2:
															if (t = e.sent, r = G(t, 1), r[0], o = 0, n = parseInt($("#e-min-field")[0].value), a = parseInt($("#e-hour-field")[0].value), !(o + n + a > 0)) {
																e.next = 14;
																break
															}
															return e.next = 11, ze();
														case 11:
															i = e.sent, ke && i && T({
																action: "autoStop/updateTimer",
																data: {
																	hour: a,
																	min: n,
																	sec: o
																}
															}), i && (setTimeout((function() {
																Ze()
															}), 100), $(this).parents(".popup").hide());
														case 14:
														case "end":
															return e.stop()
													}
												}), e, this)
											})))), $("#edit-action").on("click", (function() {
												nt(), Ne("timer-edit")
											})), $("#cancel-action").on("click", (function() {
												Ne("timer-off")
											})), $(".input-field").on("focus", (function(e) {
												$(this).attr("data-type");
												$(this).find("input")[0].focus()
											})), $(".input-field").find(".option-item").on("click", (function() {
												Ye($(this).attr("data-type"), $(this).attr("data-value"), !0)
											})), $(".input-field").find("input").on("focus", (function(e) {
												var t = parseInt(e.target.value);
												isNaN(t) || 0 != t || ($(this)[0].value = ""), $(this).parents(".input-field.time").addClass("focus")
											})), $(".input-field").find("input").on("blur", (function(e) {
												$(this).parents(".input-field.time").removeClass("focus");
												var t = parseInt(e.target.value);
												isNaN(t) && (e.target.value = 0)
											})), $(".input-field").find("input").on("input", (function(e) {
												Ye($(this).attr("data-type"), parseInt(e.target.value), !1)
											})), $(".input-field.reset").on("click", (function() {
												Ye("hour", 0, !0), Ye("min", 0, !0), Ye("sec", 0, !0)
											})), $("#reset-Timer").on("click", (function() {
												T({
													action: "autoStop/resetTimer"
												})
											})), $(".popup").find(".change-local").on("click", (function() {
												$(this).parents(".popup").hide(), dt()
											})), $("#request-notification").on("click", (function() {
												chrome.permissions.request({
													permissions: ["notifications"]
												}, (function(e) {
													$("#grant-notification").hide(), n()
												}))
											})), $("#mic-select-recording").on("click", (function() {
												me.length <= 0 && xe("/getAccess.html")
											})), $("#cam-select-recording").on("click", (function() {
												ve.length <= 0 && xe("/getAccess.html")
											})), $("#back-to-main").on("click", (function() {
												Pe("main-menu")
											})), $("#record-stop").on("click", (function() {
												T({
													action: "record/stop",
													from: "popup click"
												}, (function() {
													window.close()
												}))
											})), $("#record-pause").on("click", (function() {
												st(!0), T({
													action: "record/pause"
												})
											})), $("#record-resume").on("click", (function() {
												st(!1), T({
													action: "record/resume"
												})
											})), $("#record-discard").on("click", (function() {
												$("#discard-popup").show()
											})), $("#discard-cancel").on("click", (function() {
												$("#discard-popup").hide()
											})), $("#discard-confirm").on("click", (function() {
												T({
													action: "record/stop",
													isDiscard: !0
												}), setTimeout((function() {
													window.close()
												}), 100)
											})), $("#open-mic-cancel").on("click", (function() {
												n(!0)
											})), $("#open-mic-confirm").on("click", (function() {
												$(".device-item.mic").trigger("click"), n()
											})), $("#storage-cancel").on("click", (function() {
												$(this).parents(".popup").hide(), localStorage.alertStorage = "1", n(be)
											})), $("#record-start").on("click", R(D().mark((function e() {
												var t, r;
												return D().wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															if (t = !1, !navigator.brave) {
																e.next = 5;
																break
															}
															return e.next = 4, navigator.brave.isBrave();
														case 4:
															t = e.sent;
														case 5:
															return e.next = 7, a();
														case 7:
															if (r = e.sent, "cloud" !== ye["save-location"] || z) {
																e.next = 12;
																break
															}
															Ne("sign-in", "record"), e.next = 18;
															break;
														case 12:
															if (!("cloud" === ye["save-location"] && z && parseInt(X) < 2 && ae >= ne)) {
																e.next = 17;
																break
															}
															return Ne("upgrade-alert-video"), e.abrupt("return");
														case 17:
															"alerted" !== ye["alert-win"] && navigator.platform.indexOf("Win") >= 0 && "desktop" === $("input[name=record-type]:checked").val() ? (Ne("win-compter-audio"), Se({
																"alert-win": "alerted"
															})) : r < j * N && !t ? ($("#storage-cancel").hide(), Ne("storage-issue")) : r < j * M && !t ? ($("#storage-cancel").show(), Ne("storage-issue")) : (localStorage.alertStorage = "0", n(be));
														case 18:
														case "end":
															return e.stop()
													}
												}), e)
											})))), $("#popup-audio-in-btn").on("click", R(D().mark((function e() {
												var t, r;
												return D().wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															return $(this).parents(".popup").hide(), Se({
																"alert-win": "alerted"
															}), e.next = 4, a();
														case 4:
															if (t = e.sent, r = !1, !navigator.brave) {
																e.next = 10;
																break
															}
															return e.next = 9, navigator.brave.isBrave();
														case 9:
															r = e.sent;
														case 10:
															t < j * N && !r ? ($("#storage-cancel").hide(), Ne("storage-issue")) : t < j * M && !r ? ($("#storage-cancel").show(), Ne("storage-issue")) : (localStorage.alertStorage = "0", n());
														case 11:
														case "end":
															return e.stop()
													}
												}), e, this)
											})))), $("#popup-sign-in-btn").on("click", (function() {
												var e = $(this).attr("data-reason");
												xe("https://www.awesomescreenshot.com/signin?from=" + ("capture" === e ? "ext_pop_capture" : "record" === e ? "ext_pop_record" : "ext_pop_bottom"))
											})), $("#capture-guide").on("click", (function() {
												xe("https://support.awesomescreenshot.com/hc/en-us/articles/4403241044249-How-to-take-a-screenshot-of-desktop-entire-screen-or-an-application-window")
											})), $(".upgrade-btn").on("click", (function() {
												var e = $(this).attr("data-reason");
												b("upgrade from recording menu (" + e + ")", "upgrade"),
													function(e, t) {
														chrome.cookies.get({
															url: t,
															name: "screenshot_personal_type"
														}, (function(r) {
															k(r ? t + "/pricing?from=" + e : t + "/user/login?redirect=" + t + "/pricing?from=" + e)
														}))
													}(e, Y)
											})), $("#toggle-camera").on("click", R(D().mark((function e() {
												var t, r, o, n;
												return D().wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															return e.next = 2, E(["cameraStream", "devicesInfo"]);
														case 2:
															t = e.sent, r = G(t, 2), o = r[0], n = r[1], ve.length < 1 && n.videoDevices < 1 ? xe("/getAccess.html") : T({
																action: "init-camera"
															}), o || $("#toggle-camera").find(".camera-action-icon").addClass("loading");
														case 8:
														case "end":
															return e.stop()
													}
												}), e)
											})))), $("#toggle-mic").on("click", R(D().mark((function e() {
												var t, r, o;
												return D().wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															return e.next = 2, E(["audioStream", "devicesInfo"]);
														case 2:
															t = e.sent, r = G(t, 2), r[0], o = r[1], me.length < 1 && o.audioDevices < 1 ? xe("/getAccess.html") : T({
																action: "record/toggleMic"
															});
														case 7:
														case "end":
															return e.stop()
													}
												}), e)
											})))), $("#toggle-ann-menu").on("click", (function() {
												T({
													action: "record/toggleToolbar"
												})
											})), $("#toggle-timer").on("click", R(D().mark((function e() {
												var t, r, o, n, a, i, c;
												return D().wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															return e.next = 2, E(["autoTimerInfo", "isAutoTimerStop"]);
														case 2:
															t = e.sent, r = G(t, 2), o = r[0], n = r[1], a = o.timerHour, i = o.timerMin, c = o.timerSec, a + i + c > 0 && n ? Ne("timer-off") : (nt(), Ne("timer-edit"));
														case 8:
														case "end":
															return e.stop()
													}
												}), e)
											}))))
										}(), _e({}, (function(e) {
											C(e.id, {
												action: "check-videos"
											})
										}));
								case 51:
								case "end":
									return e.stop()
							}
						}), e)
					}))), Ie.apply(this, arguments)
				}

				function Ce() {
					var e;
					(e = Y, new Promise((function(t, r) {
						chrome.cookies.get({
							url: e,
							name: "screenshot_personal_premium_level"
						}, (function(e) {
							e && parseInt(e.value) > 1 ? t(!0) : t(!1)
						}))
					}))).then((function(e) {
						e || $("#toggle-timer").hide()
					}))
				}

				function Le() {
					! function() {
						if (localStorage.dev && localStorage.devConfig) {
							var e = localStorage.devConfig;
							$(document.body).append("<div class='dev-badge'>" + e + "</div>")
						}
					}(), $("#aws-info-upgrade").on("click", (function() {
						b("upgrade from main menu", "upgrade"), xe("https://www.awesomescreenshot.com/pricing?from=extMenu"), window.close()
					})), $("#aws-login").on("click", (function() {
						xe(Y + "/signin?from=ext_pop_bottom"), window.close()
					})), $(".link-item").on("click", (function() {
						xe($(this).attr("data-url")), window.close()
					})), $("#user").on("click", (function() {
						xe("https://www.awesomescreenshot.com/settings"), window.close()
					})), $(".feedback").on("click", (function() {
						xe("/feedback.html"), window.close()
					})), $(".backToMenu").on("click", (function() {
						Pe("main-menu")
					})), $(".tab-header-item").on("click", (function() {
						var e = $(this).attr("data-tab");
						($(".tab-header").removeClass("screenshot record").addClass(e), $(".tab-header-item").removeClass("active"), $(this).addClass("active"), $(".tab-item").removeClass("active"), $(".tab-item.tab-" + e).addClass("active"), e && Se({
							activeTab: e
						}), "record" === e) ? "none" === $("#audio").css("display") || ht(): "screenshot" === e && pt()
					})), "record" === ye.popupTab || "remember" === ye.popupTab && "record" === ye.activeTab ? $(".tab-header-item[data-tab='record']").trigger("click") : "screenshot" !== ye.activeTab && Se({
						activeTab: "screenshot"
					}), $(".action-btn").on("click", (function() {
						var e = $(this);
						e.hasClass("option") ? xe("/option-react.html") : e.hasClass("feedback") ? xe("/feedback.html") : e.hasClass("more") ? (e.toggleClass("expand"), $(".more-links").toggle()) : e.hasClass("recording") ? xe("/video-list.html") : e.hasClass("sign-out") && xe(Y + "/web/user/logout")
					})), $(".more-links-item").on("click", (function() {
						var e = $(this);
						if (e.hasClass("mp")) var t = Y + "/all_images";
						else if (e.hasClass("mv")) t = Y + "/all_videos";
						else if (e.hasClass("logout")) t = Y + "/web/user/logout";
						xe(t)
					})), chrome.tabs.query({
						active: !0,
						currentWindow: !0
					}, (function(e) {
						var t = e[0],
							r = (V = t.url).match(/(https?|file):\/\/*\/*/gi);
						if (/Edg/.test(window.navigator.userAgent) ? (null == r || V.match(/https:\/\/microsoftedge.microsoft.com\/addons/i) || bt(V)) && (se = !1) : (null == r || bt(V)) && (se = !1), "complete" != t.status && ($("#selected").attr({
								title: "Page still loading! Please wait."
							}).addClass("disabled"), !1), /http|https|file|ftp/.test(V.slice(0, 5)) || (se = !1), ce = !!/file:/.test(V.slice(0, 5)), se) $("#record-type-custom");
						else {
							var o = document.getElementsByClassName("content-affect");
							Array.prototype.forEach.call(o, (function(e) {
								e.classList.add("disable")
							})), $("#record-type-custom").attr({
								disabled: !0
							})
						}
					})), $("#open-setting").on("click", (function() {
						var e = "chrome://extensions/?id=" + chrome.runtime.id;
						chrome.tabs.create({
							url: e
						})
					})), chrome.extension.isAllowedFileSchemeAccess((function(e) {
						le = e
					})), chrome.runtime.onMessage.addListener((function(e, t, r) {
						switch (e.action) {
							case "enable_selected":
								if (V.match(/https:\/\/*\/*/gi)) return void $("#selected").attr({
									title: "For security reason, Capture Selected Area doesn't work in https pages!"
								});
								!0, $("#selected").attr({
									title: ""
								}).css({
									color: "#000"
								});
								break;
							case "shownew":
							case "closeWin":
								window.close();
								break;
							case "entireCaptureProgress":
								$("#entire-progress-percentage").text(e.percentage), $("#entire-progress").css("width", e.percentage), e.scrollNum && e.scrollNum >= 1 && $("#stop-msg").show();
								break;
							case "updateRecordUI":
								lt();
								break;
							case "page-video-status":
								we || (e.status ? (we = !0, Oe()) : Ee())
						}
					})), $(".custom-select").find(".select-option-item").on("mousedown", (function(e, t) {
						var r = $(this),
							o = $(this).attr("data-value"),
							n = $(this).attr("data-text"),
							a = $(this).parents(".custom-select").attr("data-option");

						function i(e) {
							r.parents(".custom-select").attr("data-value", o).find(".display-item").text(n), r.siblings().removeClass("selected").end().addClass("selected"), e || Se(B({}, a, o))
						}
						if ("max_resolution" === a) {
							var c = "local" === ye["save-location"];
							"720" === o ? (i(c), Ue(o)) : "1080" !== o && "4k" !== o || (z ? c ? X > 1 ? (i(), Ue(o)) : Ne("signin-local-upgrade", "Record_resolution") : X > 1 ? (i(), Ue(o)) : Ne("signin-limit-upgrade", "Record_resolution") : Ne("no-signin-local-upgrade", "Record_resolution"))
						} else "save-location" === a ? (z ? "local" === o ? parseInt(X) < 2 && 0 !== Z || 0 === parseInt(X) ? We() : (parseInt(X), Be()) : parseInt(X) < 2 && ae < ne && ae >= .75 * ne ? (qe(), $(".record-tip.try.video").css("display", "flex"), $(".record-tip.video").find(".count").text(ae + "/" + ne)) : Be() : "local" === o ? We() : qe(), "local" === o ? $("#record-bubble").removeClass("hidde-bubble") : ($("#record-bubble").addClass("hidde-bubble"), t || z || Ne("sign-in", "record")), i(), function(e) {
							"local" === e ? ($("#cloud_icon").hide(), $("#local_icon").show()) : ($("#cloud_icon").show(), $("#local_icon").hide())
						}(o), ge && function() {
							var e = ye.max_resolution,
								t = (ye.record_toolbar, ye.ctl_bar);
							"local" === ye["save-location"] ? z && X > 1 || (e = 720, !1) : z ? X <= 1 && (e = 720, !1) : (e = 720, !1);
							$(".custom-select[data-option=max_resolution]").find(".select-option-item[data-value=" + e + "]").trigger("mousedown"), wt(t)
						}()) : "record_countdown" === a ? i() : "save-capture-location" === a && ("local" === o ? $("#capture-bubble").removeClass("hidde-bubble") : ($("#capture-bubble").addClass("hidde-bubble"), t || z || Ne("sign-in", "capture")), i(), function(e) {
							"local" === e ? ($("#cloud_icon_capture").hide(), $("#local_icon_capture").show()) : ($("#cloud_icon_capture").show(), $("#local_icon_capture").hide())
						}(o), z && "local" !== o && parseInt(X) < 1 && oe >= .75 * re && oe < re ? ($(".record-tip.try.img").css("display", "flex"), $(".record-tip.img").find(".count_image").text(oe + "/" + re)) : Re())
					})), chrome.windows.getCurrent((function(e) {
						_e({
							windowId: e.id
						}, (function(t) {
							chrome.action.getBadgeText({
								tabId: t.id
							}, (function(t) {
								"New" == t && (chrome.action.setBadgeText({
									text: ""
								}), L({
									action: "updateNewClickVersion"
								}), setTimeout((function() {
									chrome.tabs.create({
										url: "https://blog.awesomescreenshot.com/2022/02/15/workspace-a-collaborative-visual-repository-for-your-team/"
									}), e.close()
								}), 100))
							}))
						}))
					}))
				}

				function Te() {
					$(".capture-menu").find(".action-item").on("click", (function() {
							var e = this.id;
							if ("visible" === e || "selected" === e || "entire" === e || "delay" === e || "sidebar" === e)
								if (ce && !le) Ne("file-access");
								else if (se || ce || "visible" === e || "delay" === e) {
								if ("cloud" === ye["save-capture-location"]) {
									if (!z) return void Ne("sign-in", "capture");
									if (parseInt(X) < 1 && oe >= re) return void Ne("upgrade-alert-img")
								}
								"sidebar" === e && (e = "ocr"), L({
									action: e,
									actionFrom: "pop"
								}), b("capture " + e, "capture"), "entire" === e ? Pe("capturing-view") : setTimeout((function() {
									window.close()
								}), 100)
							} else Ne("reject-access");
							else if ("desktop" === e) {
								if ("cloud" === ye["save-capture-location"]) {
									if (!z) return void Ne("sign-in", "capture");
									if (parseInt(X) < 1 && oe >= re) return void Ne("upgrade-alert-img")
								}
								L({
									action: e,
									actionFrom: "pop"
								}), setTimeout((function() {
									window.close()
								}), 100), b("capture desktop", "capture")
							} else if ("annotate" === e) {
								var t = chrome.runtime.getURL("") + "upload.html";
								chrome.tabs.create({
									url: t
								}), b("capture local", "capture"), window.close()
							} else "sidebar" === e && (L({
								action: "ocr",
								actionFrom: "pop"
							}), b("Click sidebar OCR", "sidebar"), localStorage.promotion_new = !0, window.close())
						})), ye.delay_sec && $("#delay").find(".countdown").text(ye.delay_sec + "s"), "" !== ye.desktop_delay_sec & parseInt(ye.desktop_delay_sec) > 0 && $("#desktop").find(".countdown").text(ye.desktop_delay_sec + "s"),
						function() {
							if (ye.msObj) {
								var e = ye.msObj,
									t = 1 == e.visible.enable ? "Ctrl+Shift+" + e.visible.key : "",
									r = 1 == e.selected.enable ? "Ctrl+Shift+" + e.selected.key : "",
									o = 1 == e.entire.enable ? "Ctrl+Shift+" + e.entire.key : "";
								t && $("#visible").addClass("tooltip delay").attr("aria-label", t), t && $("#selected").addClass("tooltip delay").attr("aria-label", r), o && $("#entire").addClass("tooltip delay").attr("aria-label", o)
							}
						}(), $("#stop-entire-capture").on("click", (function() {
							L({
								action: "stop-entire-capture"
							})
						}))
				}

				function Oe() {
					$("#record-type-tab").trigger("click").trigger("change", !0), $("#record-mic").prop("checked", !1), $("#tabsound").show(), $("#tabsoundoff").hide(), $("#record-tabsound").prop("checked", !0), $(".record-tip.auto-tab-record").css("display", "flex"), je(!1)
				}

				function Ee() {
					$(".record-tip.auto-tab-record").css("display", "none")
				}

				function je(e) {
					pe && e && me.length > 0 ? ($("volume-canvas").show(), "record" === $(".tab-header-item.active").attr("data-tab") && ht(), $("#mute").hide(), $("#audio").show(), $("#mic-device").attr("aria-label", chrome.i18n.getMessage("off_mic_btn"))) : !pe || me.length < 1 ? ($("#mute").show(), $("#mute").addClass("red"), $("#audio").hide(), $("#mic-device").attr("aria-label", chrome.i18n.getMessage("on_mic_btn")), pt()) : e || ($("#mute").show(), $("#mute").removeClass("red"), $("#audio").hide(), $("#mic-device").attr("aria-label", chrome.i18n.getMessage("on_mic_btn")), pt())
				}

				function Me(e) {
					he && e && ve.length > 0 ? ($("#nocam").hide(), $("#cam").show(), $("#cam-device").attr("aria-label", chrome.i18n.getMessage("off_cam_btn"))) : !he || ve.length < 1 ? ($("#nocam").show(), $("#nocam").addClass("red"), $("#cam").hide(), $("#cam-device").attr("aria-label", chrome.i18n.getMessage("on_cam_btn"))) : e || ($("#nocam").show(), $("#nocam").removeClass("red"), $("#cam").hide(), $("#cam-device").attr("aria-label", chrome.i18n.getMessage("on_cam_btn")))
				}

				function Ne(e, t) {
					var r = $(".popup[data-name=" + e + "]");
					r.show(), t && r.find(".popup-btn").attr("data-reason", t), "sign-in" === e && ($(".tab-header").hasClass("record") ? ($("#sign-in-reason").text("videos"), $(".popup").find(".change-local").hide()) : ($("#sign-in-reason").text("screenshots"), $(".popup").find(".change-local").show()))
				}

				function Pe(e) {
					"main-menu" !== e && pt(), $(".layout-view").hide(), $("#" + e).show()
				}

				function Ae() {
					return new Promise((function(e, t) {
						h((function(t) {
							de = (ue = t).audioInputDevices.length > 0, fe = ue.videoInputDevices.length > 0, me = Fe(ue.audioInputDevices), ve = Fe(ue.videoInputDevices), e()
						}))
					}))
				}

				function De() {
					return navigator.permissions.query({
						name: "microphone"
					}).then((function(e) {
						return "granted" === e.state && (pe = !0), e.state
					}))
				}

				function Ge() {
					return navigator.permissions.query({
						name: "camera"
					}).then((function(e) {
						return "granted" === e.state && (he = !0), e.state
					}))
				}

				function Fe(e) {
					return e.filter((function(e, t, r) {
						return "" !== e.label && r.findIndex((function(t) {
							return t.deviceId === e.deviceId
						})) === t
					}))
				}

				function Ue(e) {
					switch (e) {
						case "720":
							$("#hd_icon").show(), $("#fhd_icon").hide(), $("#4k_icon").hide();
							break;
						case "1080":
							$("#hd_icon").hide(), $("#fhd_icon").show(), $("#4k_icon").hide();
							break;
						case "4k":
							$("#hd_icon").hide(), $("#fhd_icon").hide(), $("#4k_icon").show()
					}
				}

				function Re() {
					$(".record-tip.try.img").hide()
				}

				function We() {
					$(".start-container").hasClass("limit") || $(".start-container").addClass("limit"), $(".record-tip.limit").show(), $(".record-tip.try").hide()
				}

				function qe() {
					$(".start-container").removeClass("limit"), $(".record-tip.limit").hide()
				}

				function Be() {
					$(".record-tip.try.video").hide(), qe()
				}

				function He() {
					$(".custom-select[data-option=save-location]").find(".select-option-item[data-value=" + ye["save-location"] + "]").trigger("mousedown", ["autofill"]), $(".custom-select[data-option=save-capture-location]").find(".select-option-item[data-value=" + ye["save-capture-location"] + "]").trigger("mousedown", ["autofill"])
				}

				function Ve(e) {
					$(".record-type-item").removeClass("selected"), $("#record-type-" + e).parents(".record-type-item").addClass("selected"), "tab" !== e && "custom" !== e ? ($("#tab-sound").hide(), $(".option-source.ann").removeClass("fullWidth"), $(".option-source.ann").addClass("halfWidth"), $("#controlBar").html(chrome.i18n.getMessage("ctl_bar_title"))) : ($("#tab-sound").show(), $(".option-source.ann").addClass("fullWidth"), $(".option-source.ann").removeClass("halfWidth"), $("#controlBar").html(chrome.i18n.getMessage("ctl_bar_title_more"))), "camera" === e ? ($(".record-option-camera").hide(), $(".record-option-camera-only").show(), $(".option-source.ann").hide(), Me(!0)) : ($(".record-option-camera").show(), $(".record-option-camera-only").hide(), $(".option-source.ann").show()), "camera" === e ? ve.length ? ($("#record-start").removeClass("disabled"), $("#premission-tip").removeClass("show")) : ($("#record-start").addClass("disabled"), $("#premission-tip").addClass("show")) : ($("#record-start").removeClass("disabled"), $("#premission-tip").removeClass("show"))
				}

				function Ye(e, t, r) {
					switch (e) {
						case "countdown":
							t < 0 && (t = 0), isNaN(t) ? (s("record_countdown", 0), $("#countdown-label").html("0")) : ($("#countdown-field")[0].value = t, $("#countdown-label").html(t), Se("record_countdown", t)), r && $("#countdown-field").blur();
							break;
						case "hour":
							t > 6 ? t = 6 : (t < 0 || isNaN(t) && r) && (t = 0), "recording" === $e ? (ke = !0, isNaN(t) ? $("#e-hour-label").html("0") : ($("#e-hour-field")[0].value = t, $("#e-hour-label").html(t)), r && $("#e-hour-field").blur()) : (isNaN(t) ? ($("#hour-label").html("0"), Se("auto-hour", 0)) : ($("#hour-field")[0].value = t, $("#hour-label").html(t), Se("auto-hour", t), 6 == t && (Ye("min", 0, !1), Ye("sec", 0, !1))), r && $("#hour-field").blur());
							break;
						case "min":
							if (t > 59 ? t = 59 : (t < 0 || isNaN(t) && r) && (t = 0), "recording" === $e) ke = !0, isNaN(t) ? $("#e-min-label").html("0") : ($("#e-min-field")[0].value = t, $("#e-min-label").html(t)), r && $("#e-min-field").blur();
							else {
								if (isNaN(t)) $("#min-label").html("0"), Se("auto-min", 0);
								else(o = ye["auto-hour"]) && !isNaN(o) && o >= 6 && (t = 0), $("#min-field")[0].value = t, $("#min-label").html(t), Se("auto-min", t);
								r && $("#min-field").blur()
							}
							break;
						case "sec":
							if (t > 59 ? t = 59 : (t < 0 || isNaN(t) && r) && (t = 0), "recording" === $e) ke = !0, isNaN(t) ? $("#e-sec-label").html("0") : ($("#e-sec-field")[0].value = t, $("#e-sec-label").html(t)), r && $("#e-sec-field").blur();
							else {
								var o;
								if (isNaN(t)) $("#sec-label").html("0"), Se("auto-sec", 0);
								else(o = ye["auto-hour"]) && !isNaN(o) && o >= 6 && (t = 0), $("#sec-field")[0].value = t, $("#sec-label").html(t), Se("auto-sec", t);
								r && $("#sec-field").blur()
							}
					}
					ze()
				}

				function ze() {
					return Je.apply(this, arguments)
				}

				function Je() {
					return (Je = R(D().mark((function e() {
						var t, r, o, n, a, i;
						return D().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if ("recording" !== $e) {
										e.next = 20;
										break
									}
									return e.next = 3, E(["recordTimeLength"]);
								case 3:
									if (t = e.sent, r = G(t, 1), o = r[0], n = parseInt($("#e-min-field")[0].value), a = parseInt($("#e-hour-field")[0].value), !(n + a > 0)) {
										e.next = 18;
										break
									}
									if (!(216e5 < o + 1e3 * (60 * a * 60 + 60 * n))) {
										e.next = 18;
										break
									}
									return i = 216e5 - o, i = Math.floor(i / 1e3), a = Math.floor(i / 3600), n = Math.floor((i - 3600 * a) / 60), $(".timer-tip").html(chrome.i18n.getMessage("auto_stop_warning_tip", [a, n])), $(".timer-tip").show(), $("#comfig-edit").addClass("disable"), e.abrupt("return", !1);
								case 18:
									$("#comfig-edit").removeClass("disable"), $(".timer-tip").hide();
								case 20:
									return e.abrupt("return", !0);
								case 21:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function Ke() {
					if ("recording" === $e) {
						var e = $("#e-min-field")[0].value;
						$("#e-hour-field")[0].value + e > 0 ? $("#comfig-edit").removeClass("disable") : $("#comfig-edit").addClass("disable")
					}
				}

				function Qe() {
					$("#auto-stop").prop("checked") ? $(".menu-cell.autoStop").removeClass("hidden") : $(".menu-cell.autoStop").addClass("hidden")
				}

				function Xe() {
					var e = parseInt($("#sec-field")[0].value),
						t = parseInt($("#min-field")[0].value),
						r = parseInt($("#hour-field")[0].value);
					if (!$("#auto-stop").prop("checked") || 0 == e && 0 == t && 0 == r) $(".auto-stop-tip").hide();
					else {
						var o = "";
						r > 0 ? (o += r + "h", o += t + "m", o += e + "s") : t > 0 ? (o += t + "m", o += e + "s") : o += e + "s", $(".auto-stop-tip").html(chrome.i18n.getMessage("auto_stop_tip", o)), $(".auto-stop-tip").css("display", "flex")
					}
				}

				function Ze() {
					return et.apply(this, arguments)
				}

				function et() {
					return (et = R(D().mark((function e() {
						var t, r, o, n, a, i, c, s;
						return D().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, E(["autoTimerInfo", "isAutoTimerStop"]);
								case 2:
									t = e.sent, r = G(t, 2), o = r[0], n = r[1], a = o.timerHour, i = o.timerMin, c = o.timerSec, s = $("#toggle-timer").find(".timer-action-icon"), !n || 0 === a && 0 === i && 0 === c ? (s.hasClass("off") || s.addClass("off"), $(".auto-stop-field").hide()) : (s.hasClass("off") && s.removeClass("off"), tt());
								case 9:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function tt() {
					return rt.apply(this, arguments)
				}

				function rt() {
					return (rt = R(D().mark((function e() {
						var t, r, o, n, a, i, c;
						return D().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, E(["autoTimerInfo", "isAutoTimerStop"]);
								case 2:
									t = e.sent, r = G(t, 2), o = r[0], n = r[1], a = o.timerHour, i = o.timerMin, c = o.timerSec, "recording" === $e && n && a + i + c > 0 && ($(".auto-stop-field").css("display", "flex"), it());
								case 9:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function ot() {
					return (ot = R(D().mark((function e() {
						var t, r, o, n, a, i, c, s, l, u, d, f, p, h;
						return D().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, E(["autoTimerInfo", "isAutoTimerStop", "recordTimeLength", "startAutoStop"]);
								case 2:
									t = e.sent, r = G(t, 4), o = r[0], n = r[1], a = r[2], i = r[3], c = o.timerHour, s = o.timerMin, l = o.timerSec, "recording" === $e && (ke = !1, u = 0, d = 0, n && (h = 0, (f = 1e3 * (l + 60 * s + 60 * c * 60)) >= (p = a - i) && (h = f - p), h = Math.floor(h / 1e3), u = Math.floor(h / 3600), d = Math.floor((h - 3600 * u) / 60)), $("#e-min-field")[0].value = d, $("#e-min-label").html(d), $("#e-hour-field")[0].value = u, $("#e-hour-label").html(u), tt(), Ke());
								case 10:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function nt() {
					return at.apply(this, arguments)
				}

				function at() {
					return (at = R(D().mark((function e() {
						var t, r, o, n, a, i, c, s, l, u, d, f, p;
						return D().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, E(["autoTimerInfo", "isAutoTimerStop", "recordTimeLength", "startAutoStop"]);
								case 2:
									t = e.sent, r = G(t, 4), o = r[0], n = r[1], a = r[2], r[3], i = o.timerHour, c = o.timerMin, s = o.timerSec, "recording" === $e && (ke = !1, l = 0, u = 0, 0, n && (p = 0, (d = 1e3 * (s + 60 * c + 60 * i * 60)) >= (f = a) && (p = d - f + 200), p = Math.floor(p / 1e3), l = Math.floor(p / 3600), u = Math.floor((p - 3600 * l) / 60)), $("#e-min-field")[0].value = u, $("#e-min-label").html(u), $("#e-hour-field")[0].value = l, $("#e-hour-label").html(l), tt(), ze());
								case 10:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function it() {
					return ct.apply(this, arguments)
				}

				function ct() {
					return (ct = R(D().mark((function e() {
						var t, r, o, n, a, i, c, s;
						return D().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, E(["autoTimerInfo", "isAutoTimerStop", "autoStopTime"]);
								case 2:
									t = e.sent, r = G(t, 3), o = r[0], n = r[1], a = r[2], i = o.timerHour, c = o.timerMin, s = o.timerSec, n && 1e3 * (s + 60 * c + 60 * i * 60) > 0 && $(".auto-stop-field").find(".tips").html(chrome.i18n.getMessage("auto_timer_tip", a));
								case 9:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function st(e) {
					var t = $("#recording_title");
					if (e) $("#recording-view").find(".recording-action").addClass("paused"), $("#recording-view").find(".time-field").addClass("paused"), t.html(chrome.i18n.getMessage("pause_title"));
					else {
						$("#recording-view").find(".recording-action");
						$("#recording-view").find(".recording-action").removeClass("paused"), $("#recording-view").find(".time-field").removeClass("paused"), t.html(chrome.i18n.getMessage("recording_title"))
					}
				}

				function lt() {
					return ut.apply(this, arguments)
				}

				function ut() {
					return (ut = R(D().mark((function e() {
						var t, r, o, n, a, i, c, s, l, u, d, f;
						return D().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, E(["cameraStream", "audioStream", "isShowToolbar", "devicesInfo"]);
								case 2:
									t = e.sent, r = G(t, 4), o = r[0], n = r[1], a = r[2], i = r[3], c = $("#toggle-camera").find(".camera-action-icon"), s = $("#toggle-mic").find(".mic-action-icon"), l = $("#toggle-ann-menu").find(".toolbar-action-icon"), u = $("#toggle-camera"), d = $("#toggle-mic"), f = $("#toggle-ann-menu"), o ? (c.hasClass("nocam") && c.removeClass("nocam"), u.attr("aria-label", chrome.i18n.getMessage("off_cam_btn"))) : (c.hasClass("nocam") || c.addClass("nocam"), ve.length < 1 && i.videoDevices < 1 ? c.hasClass("red") || c.addClass("red") : c.removeClass("red"), u.attr("aria-label", chrome.i18n.getMessage("on_cam_btn"))), $("#toggle-mic").find(".mic-action-icon").removeClass("loading"), $("#toggle-camera").find(".camera-action-icon").removeClass("loading"), n ? (s.hasClass("mute") && s.removeClass("mute"), d.attr("aria-label", chrome.i18n.getMessage("off_mic_btn"))) : (s.hasClass("mute") || s.addClass("mute"), me.length < 1 && i.audioDevices < 1 ? s.hasClass("red") || s.addClass("red") : s.removeClass("red"), d.attr("aria-label", chrome.i18n.getMessage("on_mic_btn"))), a ? (l.removeClass("notoolbar"), f.attr("aria-label", chrome.i18n.getMessage("hide_ctl_bar"))) : (l.addClass("notoolbar"), f.attr("aria-label", chrome.i18n.getMessage("show_ctl_bar")), $(".select-option-item.ann-tool-bar").addClass("disable"));
								case 20:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function dt() {
					Se({
						"save-capture-location": "local"
					}), He()
				}

				function ft(e) {
					for (var t, r = e.inputBuffer.getChannelData(0), o = r.length, n = 0, a = 0; a < o; a++) t = r[a], Math.abs(t) >= this.clipLevel && (this.clipping = !0, this.lastClip = window.performance.now()), n += t * t;
					var i = Math.sqrt(n / o);
					this.volume = Math.max(i, this.volume * this.averaging)
				}

				function pt() {
					$("#volume-canvas").hide(), K && window.cancelAnimationFrame(K), J = null, Q && (Q.getTracks().forEach((function(e) {
						e.stop()
					})), Q = null)
				}

				function ht() {
					if (ye.record_mic && pe && !1 !== $("#main-menu").is(":visible")) {
						pt(), $("#volume-canvas").show();
						var e = new AudioContext,
							t = {};
						ye["mic-deviceId"] && (t.deviceId = ye["mic-deviceId"]);
						try {
							navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia, navigator.getUserMedia({
								audio: t
							}, (function(t) {
								Q = t;
								var r = e.createMediaStreamSource(t);
								J = function(e, t, r, o) {
									var n = e.createScriptProcessor(512);
									return n.onaudioprocess = ft, n.clipping = !1, n.lastClip = 0, n.volume = 0, n.clipLevel = t || .98, n.averaging = r || .95, n.clipLag = o || 750, n.connect(e.destination), n.checkClipping = function() {
										return !!this.clipping && (this.lastClip + this.clipLag < window.performance.now() && (this.clipping = !1), this.clipping)
									}, n.shutdown = function() {
										this.disconnect(), this.onaudioprocess = null
									}, n
								}(e), r.connect(J), mt()
							}), (function(e) {}))
						} catch (e) {}
					}
				}

				function mt(e) {
					var t = document.getElementById("volume-canvas").getContext("2d");
					t.clearRect(0, 0, 5, 18), J && (J.checkClipping() ? t.fillStyle = "red" : t.fillStyle = "#47d892", t.fillRect(0, 0, 5, 18 * J.volume * 5)), K = window.requestAnimationFrame(mt)
				}

				function vt() {
					return gt.apply(this, arguments)
				}

				function gt() {
					return (gt = R(D().mark((function e() {
						var t;
						return D().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, E("time");
								case 2:
									t = e.sent, $("#recording-view").find(".time").text(t), it();
								case 5:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function wt(e) {
					e ? ($("#ctl-bar-icon").show(), $("#ctl-bar-off-icon").hide(), $(".ann-bar-field.ann-tool").removeClass("disable")) : ($("#ctl-bar-icon").hide(), $("#ctl-bar-off-icon").show(), $(".ann-bar-field.ann-tool").addClass("disable")), $("#ctl-bar").prop("checked", e)
				}

				function bt(e) {
					return e.match(/chrome(.*):\/\//) || e.match(/edge(.*):\/\//) || e.match(/chrome-extension:\/\//) || e.match(/https:\/\/chrome.google.com\/webstore/i) || e.match(/https:\/\/chromewebstore.google.com/i) || e.match(/https:\/\/ntp.msn.cn\/edge\/ntp/i) || e.match(/about:blank/) && !1
				}
				$("#sidebar").css("display", "block"), "true" !== localStorage.promotion_new && $("#sidebar").find(".new-badge").show(),
					function() {
						Ie.apply(this, arguments)
					}()
			}
		},
		r = {};

	function o(e) {
		var n = r[e];
		if (void 0 !== n) return n.exports;
		var a = r[e] = {
			exports: {}
		};
		return t[e].call(a.exports, a, a.exports, o), a.exports
	}
	o.m = t, e = [], o.O = (t, r, n, a) => {
		if (!r) {
			var i = 1 / 0;
			for (u = 0; u < e.length; u++) {
				for (var [r, n, a] = e[u], c = !0, s = 0; s < r.length; s++)(!1 & a || i >= a) && Object.keys(o.O).every((e => o.O[e](r[s]))) ? r.splice(s--, 1) : (c = !1, a < i && (i = a));
				if (c) {
					e.splice(u--, 1);
					var l = n();
					void 0 !== l && (t = l)
				}
			}
			return t
		}
		a = a || 0;
		for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
		e[u] = [r, n, a]
	}, o.d = (e, t) => {
		for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: t[r]
		})
	}, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
		var e = {
			42: 0
		};
		o.O.j = t => 0 === e[t];
		var t = (t, r) => {
				var n, a, [i, c, s] = r,
					l = 0;
				if (i.some((t => 0 !== e[t]))) {
					for (n in c) o.o(c, n) && (o.m[n] = c[n]);
					if (s) var u = s(o)
				}
				for (t && t(r); l < i.length; l++) a = i[l], o.o(e, a) && e[a] && e[a][0](), e[a] = 0;
				return o.O(u)
			},
			r = self.webpackChunkawesomescreenshot_extension = self.webpackChunkawesomescreenshot_extension || [];
		r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
	})(), o.O(void 0, [909, 510], (() => o(32082)));
	var n = o.O(void 0, [909, 510], (() => o(60801)));
	n = o.O(n)
})();