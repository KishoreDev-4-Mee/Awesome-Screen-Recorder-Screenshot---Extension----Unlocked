(() => {
	"use strict";
	var e, t, r, n = {
			10182: (e, t, r) => {
				var n = r(73935),
					o = (r(84239), r(9676)),
					i = (r(91886), r(45777)),
					a = (r(23416), r(84391)),
					s = (r(34529), r(75053)),
					c = (r(82648), r(71577)),
					l = (r(28727), r(55026)),
					u = (r(78032), r(73216)),
					h = r(67294),
					f = r(38819),
					d = r(1870),
					m = r(31795),
					p = r.n(m),
					v = r(9669),
					y = r.n(v);
				r(27484), r(40705), r(28374);
				Math.pow(2, 31);
				var w = {
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
				for (var g in w) {
					var b = w[g];
					b.baseUrl = b.schema + "://" + b.domain, b.wsUrl = b.ws + "://" + b.domain
				}
				var j = w.www.baseUrl,
					x = j + "/api/v1",
					O = ["/premium/stripe/create_plan", "/premium/stripe/change_plan", "/folder/create", "/folder/add_items", "/folder/change_name", "/trash/throw_into", "/image/change_title", "/video/update_title", "/trash/restore", "/trash/delete", "/image/upload", "/workspace/channel/move_items", "/workspace/channel/load_items", "/workspace/channel/load_members", "/video/websocket/token", "/refer/check_accept"],
					_ = y().create({
						baseURL: x
					});

				function S() {
					return (e = j, t = ["screenshot_personal_fullname", "screenshot_personal_type", "screenshot_personal_mail", "screenshot_personal_premium_level"], new Promise((function(r) {
						chrome.cookies.getAll({
							url: e
						}, (function(e) {
							if ("string" == typeof t) {
								var n = e.filter((function(e) {
									return e.name === t
								}));
								r(n)
							} else if (Array.isArray(t)) {
								var o = e.filter((function(e) {
									return -1 !== t.indexOf(e.name)
								}));
								r(o)
							}
						}))
					}))).then((function(e) {
						if (!e.length) return null;
						var t = {};
						return e.forEach((function(e) {
							t[e.name] = e
						})), t.screenshot_personal_fullname ? {
							username: decodeURI(t.screenshot_personal_fullname.value),
							type: t.screenshot_personal_type.value,
							mail: t.screenshot_personal_mail.value,
							premiumLevel: 2
						} : void 0
					}));
					var e, t
				}

				function P(e) {
					return _({
						method: "POST",
						url: "/common/contact_us",
						data: e
					})
				}
				_.interceptors.request.use((function(e) {
					return e
				}), (function() {
					return l.ZP.error("Network error, Request timeout!"), Promise.reject()
				})), _.interceptors.response.use((function(e) {
					if (e && e.data && 1 === e.data.code) return Promise.resolve(e.data.data);
					if (e.data.code, 2001 === e.data.code) return Promise.reject(e.data);
					if (1201 === e.data.code) return Promise.reject(e.data);
					if (e.data.msg) {
						if (-1 !== O.indexOf(e.config.url)) return Promise.reject(e.data.msg);
						if (l.ZP.error(e.data.msg), "/pricing" !== window.location.pathname) return Promise.reject(e.data.msg)
					}
				}), (function(e) {
					if (e.response) {
						var t = e.response.status;
						// l.ZP.error("Network error! Error Code " + t)
					}
				}));
				var k = r(50963),
					L = r(85893);

				function E(e) {
					return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, E(e)
				}

				function N() {
					N = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						r = t.hasOwnProperty,
						n = Object.defineProperty || function(e, t, r) {
							e[t] = r.value
						},
						o = "function" == typeof Symbol ? Symbol : {},
						i = o.iterator || "@@iterator",
						a = o.asyncIterator || "@@asyncIterator",
						s = o.toStringTag || "@@toStringTag";

					function c(e, t, r) {
						return Object.defineProperty(e, t, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						c({}, "")
					} catch (e) {
						c = function(e, t, r) {
							return e[t] = r
						}
					}

					function l(e, t, r, o) {
						var i = t && t.prototype instanceof f ? t : f,
							a = Object.create(i.prototype),
							s = new S(o || []);
						return n(a, "_invoke", {
							value: j(e, r, s)
						}), a
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
					var h = {};

					function f() {}

					function d() {}

					function m() {}
					var p = {};
					c(p, i, (function() {
						return this
					}));
					var v = Object.getPrototypeOf,
						y = v && v(v(P([])));
					y && y !== t && r.call(y, i) && (p = y);
					var w = m.prototype = f.prototype = Object.create(p);

					function g(e) {
						["next", "throw", "return"].forEach((function(t) {
							c(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function b(e, t) {
						function o(n, i, a, s) {
							var c = u(e[n], e, i);
							if ("throw" !== c.type) {
								var l = c.arg,
									h = l.value;
								return h && "object" == E(h) && r.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
									o("next", e, a, s)
								}), (function(e) {
									o("throw", e, a, s)
								})) : t.resolve(h).then((function(e) {
									l.value = e, a(l)
								}), (function(e) {
									return o("throw", e, a, s)
								}))
							}
							s(c.arg)
						}
						var i;
						n(this, "_invoke", {
							value: function(e, r) {
								function n() {
									return new t((function(t, n) {
										o(e, r, t, n)
									}))
								}
								return i = i ? i.then(n, n) : n()
							}
						})
					}

					function j(e, t, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return k()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var s = x(a, r);
									if (s) {
										if (s === h) continue;
										return s
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var c = u(e, t, r);
								if ("normal" === c.type) {
									if (n = r.done ? "completed" : "suspendedYield", c.arg === h) continue;
									return {
										value: c.arg,
										done: r.done
									}
								}
								"throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
							}
						}
					}

					function x(e, t) {
						var r = t.method,
							n = e.iterator[r];
						if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), h;
						var o = u(n, e.iterator, t.arg);
						if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, h;
						var i = o.arg;
						return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
					}

					function O(e) {
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
						}], e.forEach(O, this), this.reset(!0)
					}

					function P(e) {
						if (e) {
							var t = e[i];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var n = -1,
									o = function t() {
										for (; ++n < e.length;)
											if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return o.next = o
							}
						}
						return {
							next: k
						}
					}

					function k() {
						return {
							value: void 0,
							done: !0
						}
					}
					return d.prototype = m, n(w, "constructor", {
						value: m,
						configurable: !0
					}), n(m, "constructor", {
						value: d,
						configurable: !0
					}), d.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, "GeneratorFunction")), e.prototype = Object.create(w), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, g(b.prototype), c(b.prototype, a, (function() {
						return this
					})), e.AsyncIterator = b, e.async = function(t, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new b(l(t, r, n, o), i);
						return e.isGeneratorFunction(r) ? a : a.next().then((function(e) {
							return e.done ? e.value : a.next()
						}))
					}, g(w), c(w, s, "Generator"), c(w, i, (function() {
						return this
					})), c(w, "toString", (function() {
						return "[object Generator]"
					})), e.keys = function(e) {
						var t = Object(e),
							r = [];
						for (var n in t) r.push(n);
						return r.reverse(),
							function e() {
								for (; r.length;) {
									var n = r.pop();
									if (n in t) return e.value = n, e.done = !1, e
								}
								return e.done = !0, e
							}
					}, e.values = P, S.prototype = {
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

							function n(r, n) {
								return a.type = "throw", a.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var i = this.tryEntries[o],
									a = i.completion;
								if ("root" === i.tryLoc) return n("end");
								if (i.tryLoc <= this.prev) {
									var s = r.call(i, "catchLoc"),
										c = r.call(i, "finallyLoc");
									if (s && c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (s) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!c) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var n = this.tryEntries.length - 1; n >= 0; --n) {
								var o = this.tryEntries[n];
								if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
									var i = o;
									break
								}
							}
							i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
							var a = i ? i.completion : {};
							return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var r = this.tryEntries[t];
								if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), _(r), h
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var r = this.tryEntries[t];
								if (r.tryLoc === e) {
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
						delegateYield: function(e, t, r) {
							return this.delegate = {
								iterator: P(e),
								resultName: t,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), h
						}
					}, e
				}

				function I(e, t) {
					var r = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						t && (n = n.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), r.push.apply(r, n)
					}
					return r
				}

				function Z(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {};
						t % 2 ? I(Object(r), !0).forEach((function(t) {
							T(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
						}))
					}
					return e
				}

				function T(e, t, r) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== E(e) || null === e) return e;
							var r = e[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(e, t || "default");
								if ("object" !== E(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === E(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function q(e, t, r, n, o, i, a) {
					try {
						var s = e[i](a),
							c = s.value
					} catch (e) {
						return void r(e)
					}
					s.done ? t(c) : Promise.resolve(c).then(n, o)
				}

				function B(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != r) {
							var n, o, i, a, s = [],
								c = !0,
								l = !1;
							try {
								if (i = (r = r.call(e)).next, 0 === t) {
									if (Object(r) !== r) return;
									c = !1
								} else
									for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, o = e
							} finally {
								try {
									if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
								} finally {
									if (l) throw o
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return U(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r && e.constructor && (r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return U(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function U(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
					return n
				}
				var A = u.Z.Option;
				const F = function(e) {
					var t = B((0, h.useState)(!1), 2),
						r = t[0],
						n = t[1],
						m = B((0, h.useState)(!1), 2),
						v = m[0],
						y = m[1],
						w = B((0, h.useState)("Screenshot Bug"), 2),
						g = w[0],
						b = w[1],
						j = B((0, k.cI)(), 1)[0];
					(0, h.useEffect)((function() {
						S().then((function(e) {
							e && e.mail && j.setFieldsValue({
								email: e.mail
							})
						}))
					}), []);
					var x = {
							"Screenshot Bug": {
								name: "Bug Report-Screenshot",
								title: {
									label: "Bug Summary",
									tip: "Let us know what went wrong in a few words."
								},
								detail: {
									label: "Details",
									tip: "Describe the issues, actions you took, and  error messages you got."
								}
							},
							"Video Bug": {
								name: "Bug Report-Screenshot",
								title: {
									label: "Bug Summary",
									tip: "Let us know what went wrong in a few words."
								},
								detail: {
									label: "Details",
									tip: "Describe the issues, actions you took, and  error messages you got."
								}
							},
							"Feature Request": {
								name: "Feature Request",
								title: {
									label: "Title",
									tip: "What's your request about?"
								},
								detail: {
									label: "Description",
									tip: "Please provide a detailed description of new feature you want."
								}
							},
							"Other Issue": {
								name: "Other Issue",
								title: {
									label: "Title"
								},
								detail: {
									label: "Description",
									tip: "Let us know your thoughts on Awesome Screenshot. Any questions, comments or suggestions are welcome."
								}
							}
						},
						O = function(e, t) {
							var r = "";
							for (var n in r += e + "<br/><br/><br/><hr>", t) r += "<b>" + n + "</b>: " + t[n] + "<br/>";
							return r
						},
						_ = function() {
							var e, t = (e = N().mark((function e(t) {
								var r, o, i, a, s, c;
								return N().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if ((r = {})["Extension Version"] = chrome.runtime.getManifest().version, localStorage.last_info && (r = Z(Z({}, r), JSON.parse(localStorage.last_info))), r.Browser) {
												e.next = 13;
												break
											}
											if (o = /Edg/.test(window.navigator.userAgent), i = !1, !navigator.brave) {
												e.next = 10;
												break
											}
											return e.next = 9, navigator.brave.isBrave();
										case 9:
											i = e.sent;
										case 10:
											a = p().name, o ? a = "Edge" : i && (a = "Brave"), r.Browser = a + " " + p().version;
										case 13:
											r.OS || (r.OS = p().os.toString()), r["Screen Size"] || (r["Screen Size"] = window.screen.width + "x" + window.screen.height), t.webUrl && (r["Web URL"] = t.webUrl), t.screenshotVideoUrl && (r["Screenshot/video URL"] = t.screenshotVideoUrl), s = !0 === t.isSendInfo || void 0 === t.isSendInfo ? O(t.content, r) : t.content, c = {
												email: t.email,
												name: t.name,
												subject: "[".concat(t.type, "] ").concat(t.title),
												content: s
											}, n(!0), y(!0), P(c).then((function(e) {
												n(!1), y(!0)
											})).catch((function(e) {
												n(!1), l.ZP.error("Submission failed. Please retry or copy summary and details to send an email to care@awesomescreenshot.com.")
											}));
										case 23:
										case "end":
											return e.stop()
									}
								}), e)
							})), function() {
								var t = this,
									r = arguments;
								return new Promise((function(n, o) {
									var i = e.apply(t, r);

									function a(e) {
										q(i, n, o, a, s, "next", e)
									}

									function s(e) {
										q(i, n, o, a, s, "throw", e)
									}
									a(void 0)
								}))
							});
							return function(e) {
								return t.apply(this, arguments)
							}
						}();
					return (0, L.jsxs)("div", {
						className: "main",
						children: [(0, L.jsx)("div", {
							className: "top",
							children: (0, L.jsx)("div", {
								className: "logo",
								children: (0, L.jsx)("a", {
									href: "https://www.awesomescreenshot.com"
								})
							})
						}), (0, L.jsx)("div", {
							className: "options-container",
							children: v ? (0, L.jsxs)("div", {
								className: "sent-message",
								children: [(0, L.jsx)("div", {
									children: (0, L.jsx)(f.Z, {})
								}), (0, L.jsx)("div", {
									className: "title",
									children: "Thank you"
								}), (0, L.jsx)("div", {
									className: "content",
									children: "The form was submitted successfully. We will contact you shortly."
								}), (0, L.jsx)(c.Z, {
									type: "primary",
									onClick: function() {
										y(!1)
									},
									children: "Submit another issue"
								})]
							}) : (0, L.jsxs)(L.Fragment, {
								children: [(0, L.jsx)("div", {
									className: "main-title",
									children: "Send Feedback"
								}), (0, L.jsxs)("div", {
									className: "title-tip",
									children: ["Please visit our", " ", (0, L.jsx)("a", {
										href: "https://support.awesomescreenshot.com/hc/en-us",
										target: "_blank",
										children: "Help Center"
									}), " ", "to find answers to your questions before submitting the request form."]
								}), (0, L.jsxs)(s.Z, {
									onFinish: _,
									form: j,
									children: [(0, L.jsx)("div", {
										className: "label required",
										children: "Issue Type"
									}), (0, L.jsx)(s.Z.Item, {
										name: "type",
										initialValue: g,
										rules: [{
											required: !0
										}],
										children: (0, L.jsx)(u.Z, {
											onChange: function(e) {
												b(e)
											},
											children: ["Screenshot Bug", "Video Bug", "Feature Request", "Other Issue"].map((function(e) {
												return (0, L.jsx)(A, {
													value: e,
													children: e
												}, e)
											}))
										})
									}), (0, L.jsx)("div", {
										className: "label required",
										children: x[g].title.label
									}), (0, L.jsx)("div", {
										className: "label-tip",
										children: x[g].title.tip
									}), (0, L.jsx)(s.Z.Item, {
										name: "title",
										rules: [{
											required: !0
										}],
										children: (0, L.jsx)(a.Z, {})
									}), "Screenshot Bug" === g && (0, L.jsxs)(L.Fragment, {
										children: [(0, L.jsx)("div", {
											className: "label",
											children: "Web URL"
										}), (0, L.jsx)("div", {
											className: "label-tip",
											children: "Share the URL of the problematic page."
										}), (0, L.jsx)(s.Z.Item, {
											name: "webUrl",
											children: (0, L.jsx)(a.Z, {})
										})]
									}), (0, L.jsx)("div", {
										className: "label required",
										children: x[g].detail.label
									}), (0, L.jsx)("div", {
										className: "label-tip",
										children: x[g].detail.tip
									}), (0, L.jsx)(s.Z.Item, {
										name: "content",
										rules: [{
											required: !0
										}],
										children: (0, L.jsx)(a.Z.TextArea, {
											autoSize: {
												minRows: 3
											}
										})
									}), (0, L.jsx)("div", {
										className: "label required",
										children: "Your Email Address"
									}), (0, L.jsx)("div", {
										className: "label-tip",
										children: "Provide your email for updates."
									}), (0, L.jsx)(s.Z.Item, {
										name: "email",
										rules: [{
											required: !0
										}],
										children: (0, L.jsx)(a.Z, {
											type: "email"
										})
									}), ("Screenshot Bug" === g || "Video Bug" === g) && (0, L.jsxs)(L.Fragment, {
										children: [(0, L.jsx)("div", {
											className: "label",
											children: "Screenshot/video URL"
										}), (0, L.jsx)("div", {
											className: "label-tip",
											children: "Record a video to show us what's happening or send screenshot(s). If a picture is worth a thousand words, then a video is worth a million."
										}), (0, L.jsx)(s.Z.Item, {
											name: "screenshotVideoUrl",
											children: (0, L.jsx)(a.Z, {})
										})]
									}), (0, L.jsx)(s.Z.Item, {
										name: "isSendInfo",
										valuePropName: "checked",
										initialValue: !0,
										children: (0, L.jsxs)(o.Z, {
											children: ["Include your OS and browser info to help developers debug errors.", " ", (0, L.jsx)(i.Z, {
												title: "The version number of your OS, browser, and extension, as well as the screen size, will be included.",
												children: (0, L.jsx)(d.Z, {})
											})]
										})
									}), (0, L.jsx)(s.Z.Item, {
										children: (0, L.jsx)(c.Z, {
											type: "primary",
											htmlType: "submit",
											loading: r,
											size: "large",
											block: !0,
											children: "Submit"
										})
									})]
								})]
							})
						})]
					})
				};
				n.render((0, L.jsx)(F, {}), document.getElementById("app"))
			}
		},
		o = {};

	function i(e) {
		var t = o[e];
		if (void 0 !== t) return t.exports;
		var r = o[e] = {
			id: e,
			loaded: !1,
			exports: {}
		};
		return n[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
	}
	i.m = n, e = [], i.O = (t, r, n, o) => {
		if (!r) {
			var a = 1 / 0;
			for (u = 0; u < e.length; u++) {
				for (var [r, n, o] = e[u], s = !0, c = 0; c < r.length; c++)(!1 & o || a >= o) && Object.keys(i.O).every((e => i.O[e](r[c]))) ? r.splice(c--, 1) : (s = !1, o < a && (a = o));
				if (s) {
					e.splice(u--, 1);
					var l = n();
					void 0 !== l && (t = l)
				}
			}
			return t
		}
		o = o || 0;
		for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
		e[u] = [r, n, o]
	}, i.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return i.d(t, {
			a: t
		}), t
	}, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(e, n) {
		if (1 & n && (e = this(e)), 8 & n) return e;
		if ("object" == typeof e && e) {
			if (4 & n && e.__esModule) return e;
			if (16 & n && "function" == typeof e.then) return e
		}
		var o = Object.create(null);
		i.r(o);
		var a = {};
		t = t || [null, r({}), r([]), r(r)];
		for (var s = 2 & n && e;
			"object" == typeof s && !~t.indexOf(s); s = r(s)) Object.getOwnPropertyNames(s).forEach((t => a[t] = () => e[t]));
		return a.default = () => e, i.d(o, a), o
	}, i.d = (e, t) => {
		for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: t[r]
		})
	}, i.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
		var e = {
			656: 0
		};
		i.O.j = t => 0 === e[t];
		var t = (t, r) => {
				var n, o, [a, s, c] = r,
					l = 0;
				if (a.some((t => 0 !== e[t]))) {
					for (n in s) i.o(s, n) && (i.m[n] = s[n]);
					if (c) var u = c(i)
				}
				for (t && t(r); l < a.length; l++) o = a[l], i.o(e, o) && e[o] && e[o][0](), e[o] = 0;
				return i.O(u)
			},
			r = self.webpackChunkawesomescreenshot_extension = self.webpackChunkawesomescreenshot_extension || [];
		r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
	})(), i.O(void 0, [775, 799, 909, 431, 441, 932, 191, 873, 32, 203, 588], (() => i(32082)));
	var a = i.O(void 0, [775, 799, 909, 431, 441, 932, 191, 873, 32, 203, 588], (() => i(10182)));
	a = i.O(a)
})();