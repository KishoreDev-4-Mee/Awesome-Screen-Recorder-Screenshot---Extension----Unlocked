(() => {
	var e, t, n, r = {
			96283: (e, t, n) => {
				"use strict";
				var r = n(73935),
					o = (n(79855), n(19181)),
					i = (n(3958), n(27049)),
					a = (n(63170), n(76329)),
					c = (n(91104), n(38993)),
					s = (n(51837), n(54458)),
					l = (n(28727), n(55026)),
					u = (n(89255), n(38648)),
					d = (n(82648), n(71577)),
					f = (n(34529), n(75053)),
					p = (n(81211), n(2214)),
					h = (n(23416), n(84391)),
					m = n(67294),
					v = n(2877),
					y = n(88485),
					g = n(9669),
					b = n.n(g),
					w = (n(27484), n(40705), n(28374), n(72769));

				function x(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, o, i, a, c = [],
								s = !0,
								l = !1;
							try {
								if (i = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									s = !1
								} else
									for (; !(s = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); s = !0);
							} catch (e) {
								l = !0, o = e
							} finally {
								try {
									if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
								} finally {
									if (l) throw o
								}
							}
							return c
						}
					}(e, t) || k(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function j(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (o = r.key, i = void 0, i = function(e, t) {
							if ("object" !== N(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== N(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(o, "string"), "symbol" === N(i) ? i : String(i)), r)
					}
					var o, i
				}

				function I() {
					I = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						n = t.hasOwnProperty,
						r = Object.defineProperty || function(e, t, n) {
							e[t] = n.value
						},
						o = "function" == typeof Symbol ? Symbol : {},
						i = o.iterator || "@@iterator",
						a = o.asyncIterator || "@@asyncIterator",
						c = o.toStringTag || "@@toStringTag";

					function s(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						s({}, "")
					} catch (e) {
						s = function(e, t, n) {
							return e[t] = n
						}
					}

					function l(e, t, n, o) {
						var i = t && t.prototype instanceof f ? t : f,
							a = Object.create(i.prototype),
							c = new k(o || []);
						return r(a, "_invoke", {
							value: x(e, n, c)
						}), a
					}

					function u(e, t, n) {
						try {
							return {
								type: "normal",
								arg: e.call(t, n)
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
					s(m, i, (function() {
						return this
					}));
					var v = Object.getPrototypeOf,
						y = v && v(v(P([])));
					y && y !== t && n.call(y, i) && (m = y);
					var g = h.prototype = f.prototype = Object.create(m);

					function b(e) {
						["next", "throw", "return"].forEach((function(t) {
							s(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function w(e, t) {
						function o(r, i, a, c) {
							var s = u(e[r], e, i);
							if ("throw" !== s.type) {
								var l = s.arg,
									d = l.value;
								return d && "object" == N(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
									o("next", e, a, c)
								}), (function(e) {
									o("throw", e, a, c)
								})) : t.resolve(d).then((function(e) {
									l.value = e, a(l)
								}), (function(e) {
									return o("throw", e, a, c)
								}))
							}
							c(s.arg)
						}
						var i;
						r(this, "_invoke", {
							value: function(e, n) {
								function r() {
									return new t((function(t, r) {
										o(e, n, t, r)
									}))
								}
								return i = i ? i.then(r, r) : r()
							}
						})
					}

					function x(e, t, n) {
						var r = "suspendedStart";
						return function(o, i) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === o) throw i;
								return Z()
							}
							for (n.method = o, n.arg = i;;) {
								var a = n.delegate;
								if (a) {
									var c = j(a, n);
									if (c) {
										if (c === d) continue;
										return c
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var s = u(e, t, n);
								if ("normal" === s.type) {
									if (r = n.done ? "completed" : "suspendedYield", s.arg === d) continue;
									return {
										value: s.arg,
										done: n.done
									}
								}
								"throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg)
							}
						}
					}

					function j(e, t) {
						var n = t.method,
							r = e.iterator[n];
						if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, j(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
						var o = u(r, e.iterator, t.arg);
						if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, d;
						var i = o.arg;
						return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
					}

					function S(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function O(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function k(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(S, this), this.reset(!0)
					}

					function P(e) {
						if (e) {
							var t = e[i];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var r = -1,
									o = function t() {
										for (; ++r < e.length;)
											if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return o.next = o
							}
						}
						return {
							next: Z
						}
					}

					function Z() {
						return {
							value: void 0,
							done: !0
						}
					}
					return p.prototype = h, r(g, "constructor", {
						value: h,
						configurable: !0
					}), r(h, "constructor", {
						value: p,
						configurable: !0
					}), p.displayName = s(h, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, c, "GeneratorFunction")), e.prototype = Object.create(g), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, b(w.prototype), s(w.prototype, a, (function() {
						return this
					})), e.AsyncIterator = w, e.async = function(t, n, r, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(l(t, n, r, o), i);
						return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
							return e.done ? e.value : a.next()
						}))
					}, b(g), s(g, c, "Generator"), s(g, i, (function() {
						return this
					})), s(g, "toString", (function() {
						return "[object Generator]"
					})), e.keys = function(e) {
						var t = Object(e),
							n = [];
						for (var r in t) n.push(r);
						return n.reverse(),
							function e() {
								for (; n.length;) {
									var r = n.pop();
									if (r in t) return e.value = r, e.done = !1, e
								}
								return e.done = !0, e
							}
					}, e.values = P, k.prototype = {
						constructor: k,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
								for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

							function r(n, r) {
								return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var i = this.tryEntries[o],
									a = i.completion;
								if ("root" === i.tryLoc) return r("end");
								if (i.tryLoc <= this.prev) {
									var c = n.call(i, "catchLoc"),
										s = n.call(i, "finallyLoc");
									if (c && s) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
									} else {
										if (!s) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
									var i = o;
									break
								}
							}
							i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
							var a = i ? i.completion : {};
							return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), d
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var r = n.completion;
									if ("throw" === r.type) {
										var o = r.arg;
										O(n)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: P(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), d
						}
					}, e
				}

				function S(e, t, n, r, o, i, a) {
					try {
						var c = e[i](a),
							s = c.value
					} catch (e) {
						return void n(e)
					}
					c.done ? t(s) : Promise.resolve(s).then(r, o)
				}

				function O(e) {
					return function() {
						var t = this,
							n = arguments;
						return new Promise((function(r, o) {
							var i = e.apply(t, n);

							function a(e) {
								S(i, r, o, a, c, "next", e)
							}

							function c(e) {
								S(i, r, o, a, c, "throw", e)
							}
							a(void 0)
						}))
					}
				}

				function k(e, t) {
					if (e) {
						if ("string" == typeof e) return P(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(e, t) : void 0
					}
				}

				function P(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}

				function N(e) {
					return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, N(e)
				}

				function Z(e) {
					window.open(e)
				}

				function E() {
					return (E = O(I().mark((function e(t) {
						var n, r, o;
						return I().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return n = t.filename, e.next = 3, (0, w.S1)("save-as");
								case 3:
									return r = e.sent, e.next = 6, (0, w.S1)("download_directory");
								case 6:
									o = e.sent, r && o && (t.filename = o + "/" + t.filename), chrome.downloads.download(t, (function(e) {
										(void 0 === e || chrome.runtime.lastError) && C(t.url, n)
									}));
								case 10:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function C(e, t) {
					var n = document.createElement("a"),
						r = document.createEvent("MouseEvents");
					r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), n.setAttribute("href", e), n.setAttribute("download", t), n.rel = "noopener", n.dispatchEvent(r)
				}

				function _(e, t) {
					chrome.runtime.sendMessage({
						action: "googleEvent",
						name: e,
						extra: t
					})
				}

				function L(e) {
					var t, n;
					t = {}, n = function(t) {
						var n = {
							url: e
						};
						t && t.incognito || !t ? chrome.windows.getAll((function(e) {
							e.forEach((function(e) {
								e.incognito || "normal" !== e.type || (n.windowId = e.id)
							})), U(n)
						})) : (n.index = (t ? t.index : currentTabIndex || 0) + 1, n.windowId = t ? t.windowId : currentWindowId, U(n))
					}, chrome.tabs.query(Object.assign({
						active: !0
					}, t), (function(e) {
						n(e[0])
					}))
				}

				function U(e) {
					e && e.url && (e.hasOwnProperty("index") && !e.index && delete e.index, chrome.tabs.create(e, (function(e) {
						chrome.windows.update(e.windowId, {
							focused: !0
						})
					})))
				}
				var D = Math.pow(2, 31) - 1,
					T = function() {
						function e(t) {
							if (function(e, t) {
									if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
								}(this, e), this.map = {}, t)
								for (var n in t) {
									var r = t[n];
									this.map[n] = -1 === r ? D : r
								}
						}
						var t, n, r;
						return t = e, (n = [{
							key: "calcPos",
							value: function(e) {
								if (e < 0) throw new Error("pos must be natural number");
								var t = Math.floor(e / 31),
									n = e % 31;
								return void 0 === this.map[t] && (this.map[t] = 0), [t, n]
							}
						}, {
							key: "set",
							value: function(e) {
								var t = x(this.calcPos(e), 2),
									n = t[0],
									r = t[1];
								this.map[n] = this.map[n] | 1 << r
							}
						}, {
							key: "get",
							value: function(e) {
								var t = x(this.calcPos(e), 2),
									n = t[0],
									r = t[1];
								return this.map[n] >> r & 1
							}
						}, {
							key: "valueOf",
							value: function() {
								var e = {};
								for (var t in this.map) {
									var n = this.map[t];
									e[t] = n === D ? -1 : n
								}
								return e
							}
						}]) && j(t.prototype, n), r && j(t, r), Object.defineProperty(t, "prototype", {
							writable: !1
						}), e
					}(),
					F = n(83550),
					A = F.Z.baseUrl,
					M = A + "/api/v1",
					R = ["/premium/stripe/create_plan", "/premium/stripe/change_plan", "/folder/create", "/folder/add_items", "/folder/change_name", "/trash/throw_into", "/image/change_title", "/video/update_title", "/trash/restore", "/trash/delete", "/image/upload", "/workspace/channel/move_items", "/workspace/channel/load_items", "/workspace/channel/load_members", "/video/websocket/token", "/refer/check_accept"],
					B = b().create({
						baseURL: M
					});

				function V() {
					return (e = A, t = ["screenshot_personal_fullname", "screenshot_personal_type", "screenshot_personal_mail", "screenshot_personal_premium_level"], new Promise((function(n) {
						chrome.cookies.getAll({
							url: e
						}, (function(e) {
							if ("string" == typeof t) {
								var r = e.filter((function(e) {
									return e.name === t
								}));
								n(r)
							} else if (Array.isArray(t)) {
								var o = e.filter((function(e) {
									return -1 !== t.indexOf(e.name)
								}));
								n(o)
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

				function z(e) {
					return B({
						method: "POST",
						url: "video/upload_init_sts",
						data: e
					})
				}

				function G(e, t) {
					return B({
						method: "POST",
						url: "/video/upload_failed",
						data: {
							videoID: e,
							failedMessage: t
						}
					})
				}

				function K() {
					return B({
						method: "GET",
						url: "/user/info"
					})
				}

				function W(e) {
					return B({
						method: "POST",
						url: "/user/stuff",
						data: {
							type: e
						}
					})
				}
				B.interceptors.request.use((function(e) {
					return e
				}), (function() {
					return l.ZP.error("Network error, Request timeout!"), Promise.reject()
				})), B.interceptors.response.use((function(e) {
					if (e && e.data && 1 === e.data.code) return Promise.resolve(e.data.data);
					if (e.data.code, 2001 === e.data.code) return Promise.reject(e.data);
					if (1201 === e.data.code) return Promise.reject(e.data);
					if (e.data.msg) {
						if (-1 !== R.indexOf(e.config.url)) return Promise.reject(e.data.msg);
						if (l.ZP.error(e.data.msg), "/pricing" !== window.location.pathname) return Promise.reject(e.data.msg)
					}
				}), (function(e) {
					if (e.response) {
						var t = e.response.status;
						// l.ZP.error("Network error! Error Code " + t)
					}
				}));
				var Y = n(16165),
					q = n(94184),
					H = n.n(q),
					$ = (n(82452), n(98374)),
					J = n(60327),
					Q = n(92976),
					X = n(98688),
					ee = n(30418),
					te = n(24986),
					ne = n(73586),
					re = n(49355),
					oe = n(62504),
					ie = n(86324),
					ae = n(92504),
					ce = n(11685),
					se = n(1744),
					le = n(42978),
					ue = n(83225),
					de = n(83462),
					fe = n(33038),
					pe = n(29970),
					he = n(9187),
					me = n(48960),
					ve = n(26436),
					ye = n(93185),
					ge = n(1080),
					be = n(66716),
					we = n(36716),
					xe = n(4883),
					je = n(85631),
					Ie = n(2134),
					Se = n(68766),
					Oe = n(45250),
					ke = n(4689),
					Pe = n(11734),
					Ne = n(68901),
					Ze = n(97479),
					Ee = n(63501),
					Ce = n(4450),
					_e = n(55744),
					Le = n(10757),
					Ue = n(83538),
					De = n(9571),
					Te = n(7241),
					Fe = n(42025),
					Ae = n(31727),
					Me = n(71428),
					Re = n(57179),
					Be = n(69546),
					Ve = n(60126),
					ze = n(17687),
					Ge = n(22939),
					Ke = n(63059),
					We = n(58899),
					Ye = n(58707),
					qe = n(38183),
					He = n(76664),
					$e = n(24346),
					Je = n(44436),
					Qe = n(85309),
					Xe = n(54392),
					et = n(68321),
					tt = n(8197),
					nt = n(21482),
					rt = n(37491),
					ot = n(64322),
					it = n(13243),
					at = n(64664),
					ct = n(13736),
					st = n(94222),
					lt = n(63073),
					ut = n(82082),
					dt = n(26836),
					ft = n(74748),
					pt = n(59333),
					ht = n(70110),
					mt = n(15801),
					vt = n(70161),
					yt = n(49233),
					gt = n(14962),
					bt = n(21844),
					wt = n(27807),
					xt = n(64094),
					jt = n(93388),
					It = n(92580),
					St = n(93103),
					Ot = n(38514),
					kt = n(25912),
					Pt = n(75847),
					Nt = n(30227),
					Zt = n(74990),
					Et = n(91696),
					Ct = n(19877),
					_t = n(31614),
					Lt = n(64970),
					Ut = n(69426),
					Dt = n(83748),
					Tt = n(78037),
					Ft = n(12528),
					At = n(30913),
					Mt = n(54311),
					Rt = n(53495),
					Bt = n(77809),
					Vt = n(46516),
					zt = n(32729),
					Gt = n(72005),
					Kt = n(48858),
					Wt = n(26191),
					Yt = n(94372),
					qt = n(60272),
					Ht = n(67449),
					$t = n(56191),
					Jt = n(45747),
					Qt = n(39873),
					Xt = n(19961),
					en = n(96596),
					tn = n(17352),
					nn = n(33146),
					rn = n(98258),
					on = n(59478),
					an = n(76838),
					cn = n(67671),
					sn = n(56101),
					ln = n(61780),
					un = n(72245),
					dn = n(44549),
					fn = n(61654),
					pn = n(49795),
					hn = n(19926),
					mn = n(22015),
					vn = n(22594),
					yn = n(45818),
					gn = n(85893);

				function bn(e) {
					return bn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, bn(e)
				}

				function wn(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function xn(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? wn(Object(n), !0).forEach((function(t) {
							jn(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function jn(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== bn(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== bn(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === bn(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function In(e) {
					var t = H()("svg-icon", e.className);
					return (0, gn.jsx)(Y.Z, xn(xn({}, e), {}, {
						className: t
					}))
				}
				var Sn = {
						AddImageIcon: $.Z,
						AddIcon: J.Z,
						AnnotateIcon: Q.Z,
						ArrowIcon: X.Z,
						CloseIcon: ee.Z,
						CommentIcon: te.Z,
						CopyLinkIcon: ne.Z,
						CopyIcon: re.Z,
						DownloadIcon: oe.Z,
						EmbedIcon: ie.Z,
						FeedbackIcon: ae.Z,
						FolderIcon: ce.Z,
						ImagesIcon: se.Z,
						ItemsIcon: le.Z,
						LoadingMoreIcon: ue.Z,
						MoreIcon: de.Z,
						MoveFolderIcon: fe.Z,
						NotificationIcon: pe.Z,
						OpenFolderIcon: he.Z,
						PutBackIcon: me.Z,
						RenameIcon: ve.Z,
						RightIcon: ye.Z,
						TagIcon: ge.Z,
						TrashFilledIcon: be.Z,
						TrashIcon: we.Z,
						VideosIcon: xe.Z,
						AddTextIcon: je.Z,
						CutIcon: Ie.Z,
						ProIcon: Se.Z,
						PullIcon: Oe.Z,
						ReduceIcon: ke.Z,
						MoreDotIcon: Pe.Z,
						PlayIcon: Ze.Z,
						PauseIcon: Ee.Z,
						FullScreenIcon: Ce.Z,
						NormalScreenIcon: _e.Z,
						PIPIcon: Le.Z,
						ReplayIcon: Ue.Z,
						VolumeCloseIcon: De.Z,
						VolumeHighIcon: Te.Z,
						VolumeLowIcon: Fe.Z,
						SharedIcon: Ae.Z,
						StepForwardIcon: Me.Z,
						StepBackIcon: Re.Z,
						CommentBubbleIcon: Be.Z,
						MentionMsgIcon: Ve.Z,
						VideoEditorIcon: Ne.Z,
						EmojiIcon: ze.Z,
						RecordDesktopIcon: Ge.Z,
						RecordCameraIcon: Ke.Z,
						PricingTagIcon: We.Z,
						LightThemeIcon: Ye.Z,
						DarkThemeIcon: qe.Z,
						AutoThemeIcon: He.Z,
						NewTabIcon: $e.Z,
						MicIcon: Je.Z,
						HDIcon: Qe.Z,
						CameraIcon: Xe.Z,
						ChromeIcon: et.Z,
						EdgeIcon: tt.Z,
						GoogleIcon: nt.Z,
						BrushIcon: rt.Z,
						SecurityIcon: it.Z,
						SyncIcon: ot.Z,
						ChannelIcon: at.Z,
						SettingIcon: ct.Z,
						MemberIcon: st.Z,
						PersonIcon: lt.Z,
						QuestionMarkIcon: ut.Z,
						CardIcon: dt.Z,
						SharedMeIcon: ft.Z,
						MeIcon: pt.Z,
						StarIcon: ht.Z,
						EmptyIcon: mt.Z,
						PdfIcon: vt.Z,
						PrinterIcon: yt.Z,
						CopyImageIcon: gt.Z,
						SmileIcon: bt.Z,
						CrownIcon: wt.Z,
						CrownBgIcon: xt.Z,
						SharedMeFilledIcon: jt.Z,
						WarningIcon: It.Z,
						BilligIcon: St.Z,
						StarFolderIcon: Ot.Z,
						MeFilledIcon: kt.Z,
						AtIcon: Pt.Z,
						StickerIcon: ze.Z,
						CameraNoIcon: Nt.Z,
						TrashRecordIcon: Zt.Z,
						StopRecordIcon: Et.Z,
						ActionBigIcon: _t.Z,
						ActionMiniIcon: Ct.Z,
						CameraRecordIcon: Lt.Z,
						CheckboxIcon: Ut.Z,
						DragIcon: Dt.Z,
						AddMemberIcon: Tt.Z,
						RecordPauseIcon: Ft.Z,
						RecordPlayIcon: At.Z,
						LockIcon: Mt.Z,
						EnterpriseIcon: Rt.Z,
						DomainIcon: Bt.Z,
						SsoIcon: Vt.Z,
						DownloadExtIcon: zt.Z,
						CopyExtIcon: Gt.Z,
						PDFExtIcon: Kt.Z,
						PrintExtIcon: Wt.Z,
						BackupExtIcon: Yt.Z,
						OutIcon: qt.Z,
						ShareIcon: Ht.Z,
						DescIcon: $t.Z,
						FolderFilledIcon: Jt.Z,
						VideoFolderIcon: Qt.Z,
						VideoFilmIcon: Xt.Z,
						VideoEditIcon: en.Z,
						IcStopIcon: Et.Z,
						PointerIcon: tn.Z,
						ExtWarningIcon: nn.Z,
						NoBackupIcon: rn.Z,
						VideoFailedIcon: on.Z,
						VideoStatusIcon: an.Z,
						VideoPlayIcon: cn.Z,
						VideoDownloadIcon: sn.Z,
						VideoRetryIcon: ln.Z,
						VideoDeleteIcon: un.Z,
						MyItemIcon: dn.Z,
						DoneIcon: fn.Z,
						ScreenshotIIcon: pn.Z,
						TabIIcon: hn.Z,
						InfiniteIcon: mn.Z,
						BrainIcon: vn.Z,
						SiderOcrIcon: yn.Z
					},
					On = {},
					kn = function(e) {
						On[e] = (0, m.memo)((function(t) {
							return (0, gn.jsx)(In, xn({
								component: Sn[e]
							}, t))
						})), On[e].displayName = e
					};
				for (var Pn in Sn) kn(Pn);
				On.AddImageIcon, On.AddIcon, On.AnnotateIcon, On.ArrowIcon;
				var Nn = On.CloseIcon,
					Zn = (On.CommentIcon, On.CopyLinkIcon),
					En = (On.CopyIcon, On.DownloadIcon, On.EmbedIcon, On.FeedbackIcon),
					Cn = (On.FolderIcon, On.ImagesIcon, On.ItemsIcon, On.LoadingMoreIcon, On.MoreIcon),
					_n = (On.MoveFolderIcon, On.NotificationIcon, On.OpenFolderIcon, On.PutBackIcon, On.RenameIcon),
					Ln = On.RightIcon,
					Un = (On.TagIcon, On.TrashFilledIcon, On.TrashIcon),
					Dn = (On.VideosIcon, On.AddTextIcon, On.CutIcon, On.ProIcon, On.PullIcon, On.ReduceIcon, On.MoreDotIcon, On.PlayIcon, On.PauseIcon, On.FullScreenIcon, On.NormalScreenIcon, On.PIPIcon, On.ReplayIcon, On.VolumeCloseIcon, On.VolumeHighIcon, On.VolumeLowIcon, On.SharedIcon, On.StepForwardIcon, On.StepBackIcon, On.CommentBubbleIcon, On.MentionMsgIcon, On.VideoEditorIcon, On.EmojiIcon, On.RecordDesktopIcon, On.RecordCameraIcon, On.PricingTagIcon, On.LightThemeIcon, On.DarkThemeIcon, On.AutoThemeIcon, On.NewTabIcon, On.MicIcon, On.HDIcon, On.CameraIcon, On.ChromeIcon, On.EdgeIcon, On.GoogleIcon),
					Tn = (On.BrushIcon, On.SecurityIcon, On.SyncIcon, On.ChannelIcon, On.SettingIcon),
					Fn = (On.MemberIcon, On.PersonIcon, On.QuestionMarkIcon, On.CardIcon, On.SharedMeIcon, On.MeIcon),
					An = (On.StarIcon, On.EmptyIcon, On.PdfIcon, On.PrinterIcon, On.CopyImageIcon, On.SmileIcon, On.CrownIcon),
					Mn = (On.CrownBgIcon, On.SharedMeFilledIcon, On.WarningIcon),
					Rn = (On.BilligIcon, On.StarFolderIcon, On.MeFilledIcon, On.AtIcon, On.StickerIcon, On.CameraNoIcon, On.TrashRecordIcon, On.StopRecordIcon, On.ActionBigIcon, On.ActionMiniIcon, On.CameraRecordIcon, On.DragIcon, On.CheckboxIcon, On.AddMemberIcon, On.RecordPauseIcon, On.RecordPlayIcon, On.LockIcon, On.EnterpriseIcon, On.DomainIcon, On.SsoIcon, On.DownloadExtIcon, On.CopyExtIcon, On.PDFExtIcon, On.PrintExtIcon, On.BackupExtIcon, On.OutIcon),
					Bn = (On.ShareIcon, On.DescIcon, On.FolderFilledIcon, On.VideoFolderIcon),
					Vn = On.VideoFilmIcon,
					zn = On.VideoEditIcon,
					Gn = (On.IcStopIcon, On.PointerIcon, On.ExtWarningIcon, On.NoBackupIcon, On.VideoFailedIcon, On.VideoStatusIcon, On.VideoPlayIcon, On.VideoDownloadIcon, On.VideoRetryIcon, On.VideoDeleteIcon, On.MyItemIcon, On.DoneIcon, On.ScreenshotIIcon, On.TabIIcon, On.InfiniteIcon, On.BrainIcon, On.SiderOcrIcon, n(45697)),
					Kn = n.n(Gn);

				function Wn(e) {
					return Wn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Wn(e)
				}

				function Yn(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function qn(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Yn(Object(n), !0).forEach((function(t) {
							Hn(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yn(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function Hn(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== Wn(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== Wn(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === Wn(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function $n(e) {
					return $n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, $n(e)
				}

				function Jn(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function Qn(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Jn(Object(n), !0).forEach((function(t) {
							Xn(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jn(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function Xn(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== $n(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== $n(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === $n(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function er(e) {
					return er = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, er(e)
				}

				function tr(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function nr(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? tr(Object(n), !0).forEach((function(t) {
							rr(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tr(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function rr(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== er(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== er(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === er(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function or(e) {
					var t = H()("svg-icon", e.className);
					return (0, gn.jsx)(Y.Z, nr(nr({}, e), {}, {
						className: t
					}))
				}
				var ir = {
						CloseIcon: function(e) {
							return (0, gn.jsx)("svg", qn(qn({
								className: "close_svg__icon",
								viewBox: "0 0 1024 1024",
								xmlns: "http://www.w3.org/2000/svg",
								width: "1em",
								height: "1em"
							}, e), {}, {
								children: (0, gn.jsx)("path", {
									d: "M994.73 29.27a85.333 85.333 0 0 1 0 120.66L632.662 512l362.07 362.07a85.333 85.333 0 1 1-120.662 120.66L512 632.662l-362.07 362.07A85.333 85.333 0 1 1 29.27 874.069l361.983-362.154L29.27 149.93A85.333 85.333 0 1 1 149.931 29.269L512 391.253 874.07 29.27a85.333 85.333 0 0 1 120.66 0z",
									fill: "currentColor"
								})
							}))
						},
						CrownIcon: function(e) {
							return (0, gn.jsx)("svg", Qn(Qn({
								className: "crown_svg__icon",
								viewBox: "0 0 1024 1024",
								xmlns: "http://www.w3.org/2000/svg",
								width: "1em",
								height: "1em"
							}, e), {}, {
								children: (0, gn.jsx)("path", {
									d: "M867.02 874.445c31.284-13.005 54.426-40.96 58.318-75.623 0 1.485 67.89-499.097 67.89-499.712a32.154 32.154 0 0 0-32.255-31.795c-8.704 0-16.384 3.38-22.119 9.165L723.456 469.709 550.4 124.21a45.568 45.568 0 0 0-37.99-21.709 44.902 44.902 0 0 0-39.578 24.116L300.8 470.17 81.05 272.589a29.696 29.696 0 0 0-17.818-6.247 31.846 31.846 0 0 0-32.256 31.744c0 1.024 66.97 507.444 66.97 507.444a94.566 94.566 0 0 0 60.21 77.107c70.862 24.115 200.96 39.987 351.796 38.553 154.163-1.433 286.72-20.224 357.069-46.745zM563.2 787.763v28.058a14.029 14.029 0 0 1-14.029 14.029h-74.547a14.029 14.029 0 0 1-14.029-14.03v-28.057c0-7.782 6.298-14.08 14.029-14.08h74.598c7.68 0 13.978 6.298 13.978 14.08z"
								})
							}))
						}
					},
					ar = {},
					cr = function(e) {
						ar[e] = (0, m.memo)((function(t) {
							return (0, gn.jsx)(or, nr({
								component: ir[e]
							}, t))
						})), ar[e].displayName = e
					};
				for (var sr in ir) cr(sr);
				var lr = ar.CloseIcon,
					ur = ar.CrownIcon;

				function dr(e) {
					return dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, dr(e)
				}

				function fr(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function pr(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== dr(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== dr(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === dr(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function hr(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, o, i, a, c = [],
								s = !0,
								l = !1;
							try {
								if (i = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									s = !1
								} else
									for (; !(s = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); s = !0);
							} catch (e) {
								l = !0, o = e
							} finally {
								try {
									if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
								} finally {
									if (l) throw o
								}
							}
							return c
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return mr(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mr(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function mr(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var vr = ["#2ecc71", "#3498db", "#8e44ad", "#e67e22", "#e74c3c", "#1abc9c", "#2c3e50"];

				function yr(e) {
					var t = e.username ? e.username : "no name",
						n = hr((0, m.useState)("loading"), 2),
						r = n[0],
						o = n[1],
						i = e.bordered,
						a = t ? t.split(" ") : [],
						c = "";
					a.forEach((function(e) {
						c += e.charAt(0).toUpperCase()
					})), c = c.substring(0, 3);
					var s = e.size + "px",
						l = c.length > 1 ? function() {
							var t = e.size / 2 - Math.max(2, c.length),
								n = e.size / 5 * 4,
								r = document.createElement("span");
							if (r.style.visibility = "hidden", r.style.opacity = "0", r.style.position = "fixed", r.innerText = c, r.style.fontWeight = 500, r.style.fontSize = t + "px", document.body.appendChild(r), !(r.offsetWidth > n || r.offsetHeight > n)) return document.body.removeChild(r), t + "px";
							for (var o = 5; o <= t; o++)
								if (r.style.fontSize = o + "px", !(r.offsetWidth < n && r.offsetHeight < n)) return document.body.removeChild(r), o - 1 + "px"
						}() : e.size / 2 - Math.max(2, c.length) + "px",
						u = "square" !== e.type,
						d = e.username ? e.username.length : 0;
					var f = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {};
							t % 2 ? fr(Object(n), !0).forEach((function(t) {
								pr(e, t, n[t])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fr(Object(n)).forEach((function(t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
							}))
						}
						return e
					}({
						height: s,
						width: s,
						lineHeight: s,
						fontSize: l,
						borderRadius: u ? "50%" : "var(--as-border-radius)",
						display: e.block ? "block" : "inline-block",
						backgroundColor: e.avatarUrl && "success" === r ? "" : vr[d % vr.length]
					}, e.style);
					return (0, gn.jsxs)("div", {
						className: "avatar ".concat(i ? "bordered" : ""),
						style: f,
						children: [e.plan && "Free" !== e.plan && (0, gn.jsx)("div", {
							className: "plan-badge ".concat(e.plan),
							children: (0, gn.jsx)(ur, {})
						}), e.avatarUrl && 0 !== e.avatarUrl.length ? (0, gn.jsx)(gn.Fragment, {
							children: "failed" !== r ? (0, gn.jsx)("img", {
								style: {
									height: s,
									width: s
								},
								src: e.avatarUrl,
								onLoad: function() {
									o("success")
								},
								onError: function() {
									o("failed")
								}
							}) : (0, gn.jsx)(gn.Fragment, {
								children: c
							})
						}) : (0, gn.jsx)(gn.Fragment, {
							children: c
						})]
					})
				}
				yr.propTypes = {
					username: Kn().string.isRequired,
					size: Kn().oneOfType([Kn().string, Kn().number]).isRequired,
					type: Kn().string,
					avatarUrl: Kn().string,
					style: Kn().object,
					block: Kn().bool,
					plan: Kn().oneOf(["professional", "basic"])
				};
				const gr = (0, m.memo)(yr);

				function br(e) {
					return br = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, br(e)
				}

				function wr(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function xr(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? wr(Object(n), !0).forEach((function(t) {
							jr(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wr(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function jr(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== br(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== br(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === br(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}
				const Ir = function(e) {
					var t = this,
						n = function() {
							e.googleSigin && e.googleSigin()
						},
						r = function(t) {
							e.linkOther && e.linkOther(t)
						};
					return (0, gn.jsx)(p.Z, xr(xr({}, e), {}, {
						footer: null,
						maskClosable: !1,
						wrapClassName: "sign-in",
						width: 380,
						closeIcon: (0, gn.jsx)(Nn, {}),
						destroyOnClose: !0,
						centered: !0,
						children: (0, gn.jsxs)("div", {
							className: "sign-field",
							children: [(0, gn.jsx)("div", {
								className: "title",
								children: "Sign in"
							}), (0, gn.jsx)("div", {
								className: "tips",
								children: "Please sign in with your google account"
							}), (0, gn.jsxs)("div", {
								className: "google-btn",
								onClick: n,
								children: [(0, gn.jsx)(Dn, {
									className: "icon"
								}), (0, gn.jsx)("span", {
									children: "Sign in with Google"
								})]
							}), (0, gn.jsxs)("div", {
								className: "link-area",
								children: [(0, gn.jsx)("div", {
									className: "link",
									onClick: r.bind(t, !1),
									children: "Sign in with other accounts"
								}), (0, gn.jsx)(i.Z, {
									style: {
										background: "rgba(0, 0, 0, 0.06)",
										display: "inline-block"
									},
									type: "vertical"
								}), (0, gn.jsx)("div", {
									className: "link",
									onClick: r.bind(t, !0),
									children: "Create an account"
								})]
							})]
						})
					}))
				};

				function Sr(e) {
					return Sr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Sr(e)
				}

				function Or(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function kr(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Or(Object(n), !0).forEach((function(t) {
							Pr(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Or(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function Pr(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== Sr(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== Sr(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === Sr(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function Nr(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, o, i, a, c = [],
								s = !0,
								l = !1;
							try {
								if (i = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									s = !1
								} else
									for (; !(s = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); s = !0);
							} catch (e) {
								l = !0, o = e
							} finally {
								try {
									if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
								} finally {
									if (l) throw o
								}
							}
							return c
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Zr(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zr(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Zr(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				const Er = function(e) {
						var t = this,
							n = Nr((0, m.useState)(!1), 2),
							r = n[0],
							o = n[1],
							i = Nr((0, m.useState)(!0), 2),
							a = i[0],
							c = i[1],
							s = function() {
								e.onCancel && e.onCancel()
							},
							l = function(e) {
								o(!0), c(e), e ? (localStorage["save-location"] = "cloud", chrome && chrome.extension && chrome.runtime.sendMessage({
									action: "googleEvent",
									name: "video_change_to_cloud",
									extra: "yes"
								})) : chrome && chrome.extension && chrome.runtime.sendMessage({
									action: "googleEvent",
									name: "video_change_to_cloud",
									extra: "yes"
								})
							};
						return (0, gn.jsx)(p.Z, kr(kr({}, e), {}, {
							footer: null,
							maskClosable: !1,
							width: r ? 400 : 320,
							wrapClassName: "video-tips",
							closeIcon: (0, gn.jsx)(Nn, {}),
							closable: !r,
							destroyOnClose: !0,
							centered: !0,
							children: r ? (0, gn.jsxs)("div", {
								className: "content-guide",
								children: [a ? (0, gn.jsxs)("div", {
									className: "header-field",
									children: [(0, gn.jsx)("div", {
										className: "icon-field",
										children: (0, gn.jsx)(Ln, {})
									}), (0, gn.jsx)("div", {
										className: "suc-tips",
										children: "Success!"
									}), (0, gn.jsx)("div", {
										className: "tips",
										children: "You have changed save videos to cloud successfully!"
									})]
								}) : (0, gn.jsx)(gn.Fragment, {}), (0, gn.jsx)("div", {
									className: "guide-img " + (a ? "one" : "two")
								}), (0, gn.jsx)("div", {
									className: "done-btn",
									onClick: s,
									children: "OK"
								})]
							}) : (0, gn.jsxs)("div", {
								className: "content",
								children: [(0, gn.jsx)("div", {
									className: "title",
									children: "Your video is uploading"
								}), (0, gn.jsx)("div", {
									className: "icon"
								}), (0, gn.jsxs)("div", {
									className: "tips",
									children: [(0, gn.jsx)("div", {
										className: "sub-title",
										children: "Would you like to switch to Save to cloud for features like:"
									}), (0, gn.jsxs)("div", {
										className: "message",
										children: [(0, gn.jsx)("div", {
											className: "icon-field",
											children: (0, gn.jsx)(Zn, {})
										}), "Instantly ready to share your video with a link(uploading while you are recording)"]
									}), (0, gn.jsxs)("div", {
										className: "message",
										children: [(0, gn.jsx)("div", {
											className: "icon-field",
											children: (0, gn.jsx)(Vn, {})
										}), "Download in MP4"]
									}), (0, gn.jsxs)("div", {
										className: "message",
										children: [(0, gn.jsx)("div", {
											className: "icon-field",
											children: (0, gn.jsx)(zn, {})
										}), "Quick video editing"]
									})]
								}), (0, gn.jsx)("div", {
									className: "default-btn",
									onClick: l.bind(t, !0),
									children: "Switch to cloud"
								}), (0, gn.jsx)("div", {
									className: "cancel-btn",
									onClick: l.bind(t, !1),
									children: "No thanks"
								})]
							})
						}))
					},
					Cr = n.p + "images/image_premium..png",
					_r = n.p + "images/callout_premium..png",
					Lr = n.p + "images/step_premium..png",
					Ur = n.p + "images/local-image_premium..png";
				var Dr = ["callout", "list", "image", "insertImage"];

				function Tr(e) {
					var t = "workspace" === e.type ? "Go to workspace" : (0, gn.jsx)(gn.Fragment, {
						children: "Upgrade now"
					});
					return (0, gn.jsx)(p.Z, {
						visible: e.visible,
						onCancel: e.onCancel,
						footer: null,
						width: 436,
						getContainer: !1,
						maskClosable: !1,
						wrapClassName: "upgrade-modal",
						destroyOnClose: !0,
						centered: !0,
						closable: !e.unClosable,
						closeIcon: (0, gn.jsx)(lr, {
							style: {
								fontSize: "12px"
							}
						}),
						children: (0, gn.jsxs)("div", {
							className: "upgrade-panel",
							children: [(0, gn.jsx)("div", {
								className: "crown",
								children: (0, gn.jsx)(ur, {})
							}), (0, gn.jsx)("div", {
								className: "title",
								children: "5limit" === e.type ? "Your free trial has ended" : "workspace" === e.type ? "Workspace Limit Reached" : "download-duration" === e.type || "edit-duration" === e.type ? "Get more with professional plan" : (e.type, "Item Limit Reached")
							}), (0, gn.jsx)("p", {
								children: -1 !== Dr.indexOf(e.type) ? "This is a basic plan feature. Please upgrade to unlock it." : "dropbox" === e.type ? "Upgrade to premium plans to save to Dropbox." : "box" === e.type ? "Upgrade to premium plans to save to Box." : "team" === e.type ? "Upgrade to team plan to unlock the feature." : "project" === e.type ? "Upgrade to premium plans to get unlimited folders." : "uploadImage" === e.type ? "Upgrade to premium plans to host unlimited images." : "uploadVideo" === e.type ? (0, gn.jsxs)(gn.Fragment, {
									children: ["Upgrade to ", (0, gn.jsx)("b", {
										children: "professional plan"
									}), " to host unlimited videos."]
								}) : "recordResolution" === e.type ? (0, gn.jsxs)(gn.Fragment, {
									children: ["Upgrade to ", (0, gn.jsx)("b", {
										children: "professional plan"
									}), " to unlock the high resolution recording feature.", (0, gn.jsx)("br", {}), "High resolution video takes lots of disk space, so you need to upgrade to use this feature."]
								}) : "video-play" === e.type ? (0, gn.jsxs)(gn.Fragment, {
									children: ["This video is not accessible because you have reached the limit on video access. Please upgrade to ", (0, gn.jsx)("b", {
										children: "Professional plan"
									}), " for unlimited recording and access."]
								}) : "image-view" === e.type ? (0, gn.jsx)(gn.Fragment, {
									children: "This image is not accessible because you have reached the limit on image access. Please upgrade your plan for unlimited access."
								}) : "image-alert" === e.type ? (0, gn.jsxs)(gn.Fragment, {
									children: ["You have reached the limit on image. Please upgrade to", " ", (0, gn.jsx)("b", {
										children: "Professional plan"
									}), " for unlimited images."]
								}) : "video-alert" === e.type ? (0, gn.jsxs)(gn.Fragment, {
									children: ["You have reached the limit on video. Please upgrade to", " ", (0, gn.jsx)("b", {
										children: "Professional plan"
									}), " for unlimited recording."]
								}) : "download" === e.type || "editor" === e.type ? (0, gn.jsxs)(gn.Fragment, {
									children: ["Please upgrade to ", (0, gn.jsx)("b", {
										children: "Professional plan"
									}), " to unlock this feature."]
								}) : "5limit" === e.type ? (0, gn.jsx)(gn.Fragment, {
									children: "Your video can be up to 5 minutes long. To access unlimited video length, please upgrade your account to Professional."
								}) : "video-editor" === e.type ? (0, gn.jsxs)(gn.Fragment, {
									children: ["Please upgrade to ", (0, gn.jsx)("b", {
										children: "Professional plan"
									}), " to unlock this feature."]
								}) : "workspace" === e.type ? "This workspace has reached the limit. Pleace upgrade the workspace." : "download-duration" === e.type ? (0, gn.jsxs)(gn.Fragment, {
									children: ["Upgrade to ", (0, gn.jsx)("b", {
										children: "professional plan"
									}), " to download videos longer than one hour in MP4."]
								}) : "edit-duration" === e.type ? (0, gn.jsxs)(gn.Fragment, {
									children: ["Upgrade to ", (0, gn.jsx)("b", {
										children: "professional plan"
									}), " to edit videos longer than one hour."]
								}) : "trash-restore" === e.type ? (0, gn.jsxs)(gn.Fragment, {
									children: ["Upgrade to ", (0, gn.jsx)("b", {
										children: "professional plan"
									}), " to unlock unlimited videos and images."]
								}) : "Upgrade to Professional to unlock the feature."
							}), function() {
								switch (e.type) {
									case "callout":
										return (0, gn.jsx)("img", {
											src: _r,
											alt: ""
										});
									case "list":
										return (0, gn.jsx)("img", {
											src: Lr,
											alt: ""
										});
									case "image":
										return (0, gn.jsx)("img", {
											src: Cr,
											alt: ""
										});
									case "insertImage":
										return (0, gn.jsx)("img", {
											src: Ur,
											alt: ""
										});
									default:
										return ""
								}
							}(), (0, gn.jsx)(d.Z, {
								className: "up-btn",
								size: "large",
								type: "primary",
								onClick: function() {
									window.open("https://www.awesomescreenshot.com/pricing?from=" + e.type)
								},
								icon: (0, gn.jsx)(ur, {}),
								children: t
							}), "download-duration" === e.type && (0, gn.jsxs)("div", {
								className: "more-btn",
								children: [(0, gn.jsx)("a", {
									onClick: e.openDownloadWebmModal,
									children: "Download in webm"
								}), " ", "instead"]
							})]
						})
					})
				}
				Tr.show = function(e) {
					var t = !0,
						n = document.createDocumentFragment();

					function o() {
						t = !1, r.render((0, gn.jsx)(Tr, {
							type: e,
							visible: t,
							onCancel: o
						}), n)
					}
					setTimeout((function() {
						r.render((0, gn.jsx)(Tr, {
							type: e,
							visible: t,
							onCancel: o
						}), n)
					}))
				};
				var Fr = n(14397),
					Ar = n(70153),
					Mr = n(30366);

				function Rr(e) {
					return Rr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Rr(e)
				}

				function Br() {
					Br = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						n = t.hasOwnProperty,
						r = Object.defineProperty || function(e, t, n) {
							e[t] = n.value
						},
						o = "function" == typeof Symbol ? Symbol : {},
						i = o.iterator || "@@iterator",
						a = o.asyncIterator || "@@asyncIterator",
						c = o.toStringTag || "@@toStringTag";

					function s(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						s({}, "")
					} catch (e) {
						s = function(e, t, n) {
							return e[t] = n
						}
					}

					function l(e, t, n, o) {
						var i = t && t.prototype instanceof f ? t : f,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return r(a, "_invoke", {
							value: x(e, n, c)
						}), a
					}

					function u(e, t, n) {
						try {
							return {
								type: "normal",
								arg: e.call(t, n)
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
					s(m, i, (function() {
						return this
					}));
					var v = Object.getPrototypeOf,
						y = v && v(v(k([])));
					y && y !== t && n.call(y, i) && (m = y);
					var g = h.prototype = f.prototype = Object.create(m);

					function b(e) {
						["next", "throw", "return"].forEach((function(t) {
							s(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function w(e, t) {
						function o(r, i, a, c) {
							var s = u(e[r], e, i);
							if ("throw" !== s.type) {
								var l = s.arg,
									d = l.value;
								return d && "object" == Rr(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
									o("next", e, a, c)
								}), (function(e) {
									o("throw", e, a, c)
								})) : t.resolve(d).then((function(e) {
									l.value = e, a(l)
								}), (function(e) {
									return o("throw", e, a, c)
								}))
							}
							c(s.arg)
						}
						var i;
						r(this, "_invoke", {
							value: function(e, n) {
								function r() {
									return new t((function(t, r) {
										o(e, n, t, r)
									}))
								}
								return i = i ? i.then(r, r) : r()
							}
						})
					}

					function x(e, t, n) {
						var r = "suspendedStart";
						return function(o, i) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === o) throw i;
								return P()
							}
							for (n.method = o, n.arg = i;;) {
								var a = n.delegate;
								if (a) {
									var c = j(a, n);
									if (c) {
										if (c === d) continue;
										return c
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var s = u(e, t, n);
								if ("normal" === s.type) {
									if (r = n.done ? "completed" : "suspendedYield", s.arg === d) continue;
									return {
										value: s.arg,
										done: n.done
									}
								}
								"throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg)
							}
						}
					}

					function j(e, t) {
						var n = t.method,
							r = e.iterator[n];
						if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, j(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
						var o = u(r, e.iterator, t.arg);
						if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, d;
						var i = o.arg;
						return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
					}

					function I(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function S(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function O(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(I, this), this.reset(!0)
					}

					function k(e) {
						if (e) {
							var t = e[i];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var r = -1,
									o = function t() {
										for (; ++r < e.length;)
											if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return o.next = o
							}
						}
						return {
							next: P
						}
					}

					function P() {
						return {
							value: void 0,
							done: !0
						}
					}
					return p.prototype = h, r(g, "constructor", {
						value: h,
						configurable: !0
					}), r(h, "constructor", {
						value: p,
						configurable: !0
					}), p.displayName = s(h, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, c, "GeneratorFunction")), e.prototype = Object.create(g), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, b(w.prototype), s(w.prototype, a, (function() {
						return this
					})), e.AsyncIterator = w, e.async = function(t, n, r, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(l(t, n, r, o), i);
						return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
							return e.done ? e.value : a.next()
						}))
					}, b(g), s(g, c, "Generator"), s(g, i, (function() {
						return this
					})), s(g, "toString", (function() {
						return "[object Generator]"
					})), e.keys = function(e) {
						var t = Object(e),
							n = [];
						for (var r in t) n.push(r);
						return n.reverse(),
							function e() {
								for (; n.length;) {
									var r = n.pop();
									if (r in t) return e.value = r, e.done = !1, e
								}
								return e.done = !0, e
							}
					}, e.values = k, O.prototype = {
						constructor: O,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
								for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

							function r(n, r) {
								return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var i = this.tryEntries[o],
									a = i.completion;
								if ("root" === i.tryLoc) return r("end");
								if (i.tryLoc <= this.prev) {
									var c = n.call(i, "catchLoc"),
										s = n.call(i, "finallyLoc");
									if (c && s) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
									} else {
										if (!s) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
									var i = o;
									break
								}
							}
							i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
							var a = i ? i.completion : {};
							return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var r = n.completion;
									if ("throw" === r.type) {
										var o = r.arg;
										S(n)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: k(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), d
						}
					}, e
				}

				function Vr(e, t, n, r, o, i, a) {
					try {
						var c = e[i](a),
							s = c.value
					} catch (e) {
						return void n(e)
					}
					c.done ? t(s) : Promise.resolve(s).then(r, o)
				}

				function zr(e) {
					return function() {
						var t = this,
							n = arguments;
						return new Promise((function(r, o) {
							var i = e.apply(t, n);

							function a(e) {
								Vr(i, r, o, a, c, "next", e)
							}

							function c(e) {
								Vr(i, r, o, a, c, "throw", e)
							}
							a(void 0)
						}))
					}
				}
				var Gr, Kr, Wr, Yr, qr, Hr, $r, Jr = {
						chunkSize: 10485760,
						parallelLimit: 3,
						s3client: null,
						credential: null,
						uploadId: "",
						uploadKey: "",
						videoID: "",
						videoURI: "",
						accessKeyID: "",
						bucket: "",
						region: "",
						secretAccessKey: "",
						sessionToken: "",
						uploadedInfo: null,
						file: null,
						filePath: "",
						title: "",
						extraInfo: {},
						onInit: null,
						onProgress: null,
						onResult: null,
						onError: null,
						init: function(e, t, n, r, o, i, a) {
							this.file = e, this.filePath = new URL(t).pathname, this.extraInfo = n, this.onInit = r, this.onProgress = o, this.onResult = i, this.onError = a, this.clearOverdueInfo()
						},
						refreshCredential: ($r = zr(Br().mark((function e() {
							var t;
							return Br().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, n = this.videoID, B({
											method: "POST",
											url: "/video/upload_refresh_sts",
											data: {
												videoID: n
											}
										});
									case 2:
										t = e.sent, this.secretAccessKey = t.secretAccessKey, this.sessionToken = t.sessionToken, this.videoID = t.videoID, this.videoURI = t.videoURI, this.uploadKey = t.s3Key, this.bucket = t.bucket, this.region = t.region, this.accessKeyID = t.accessKeyID;
									case 11:
									case "end":
										return e.stop()
								}
								var n
							}), e, this)
						}))), function() {
							return $r.apply(this, arguments)
						}),
						prepareUpload: (Hr = zr(Br().mark((function e() {
							var t;
							return Br().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, z(this.extraInfo);
									case 2:
										t = e.sent, this.secretAccessKey = t.secretAccessKey, this.sessionToken = t.sessionToken, this.videoID = t.videoID, this.videoURI = t.videoURI, this.uploadKey = t.s3Key, this.bucket = t.bucket, this.region = t.region, this.accessKeyID = t.accessKeyID;
									case 12:
									case "end":
										return e.stop()
								}
							}), e, this)
						}))), function() {
							return Hr.apply(this, arguments)
						}),
						upload: (qr = zr(Br().mark((function e() {
							var t, n, r, o, i, a, c, s;
							return Br().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, this.getUploadedInfo();
									case 3:
										if (!(t = e.sent)) {
											e.next = 18;
											break
										}
										return this.uploadedInfo = t, n = this.uploadedInfo, r = n.videoId, o = n.uploadKey, i = n.uploadId, a = n.chunkMap, c = n.uploadedSize, this.videoID = r || this.uploadedInfo.videoId, this.uploadKey = o, this.uploadId = i, this.onInit && this.onInit(this.videoId), this.onProgress && (100 === (s = parseInt(c / this.file.size * 100)) && (s = 99), this.onProgress(s)), e.next = 14, this.refreshCredential();
									case 14:
										return e.next = 16, this.doUpload(a, c);
									case 16:
										e.next = 26;
										break;
									case 18:
										return e.next = 20, this.prepareUpload();
									case 20:
										return e.next = 22, this.initUploadChunk();
									case 22:
										return this.uploadedInfo = {
											uploadId: this.uploadId,
											uploadKey: this.uploadKey,
											videoId: this.videoID,
											chunkMap: new T,
											uploadedSize: 0,
											updateAt: Date.now()
										}, this.saveUploadInfo(this.uploadedInfo), e.next = 26, this.doUpload();
									case 26:
										e.next = 32;
										break;
									case 28:
										e.prev = 28, e.t0 = e.catch(0), this.onError && this.onError(this.videoID, e.t0);
									case 32:
									case "end":
										return e.stop()
								}
							}), e, this, [
								[0, 28]
							])
						}))), function() {
							return qr.apply(this, arguments)
						}),
						doUpload: (Yr = zr(Br().mark((function e(t, n) {
							var r, o, i, a, c, s, l = this;
							return Br().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										r = this.file.size, o = n || 0, i = 1, a = 0, c = new Set, s = Br().mark((function e() {
											var n, s, u;
											return Br().wrap((function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														if (!t || !t.get(i)) {
															e.next = 4;
															break
														}
														return a += l.chunkSize, i++, e.abrupt("return", "continue");
													case 4:
														if (c.size !== l.parallelLimit) {
															e.next = 7;
															break
														}
														return e.next = 7, Promise.race(c);
													case 7:
														n = l.file.slice(a, Math.min(a + l.chunkSize, r)), s = l.uploadChunk(n, i), u = i, c.add(s), s.then((function() {
															if (o += n.size, l.uploadedInfo.uploadedSize = o, l.uploadedInfo.chunkMap.set(u), l.uploadedInfo.updateAt = Date.now(), l.saveUploadInfo(l.uploadedInfo), l.onProgress) {
																var e = parseInt(o / r * 100);
																100 === e && (e = 99), l.onProgress(e)
															}
														})), s.finally((function() {
															c.delete(s)
														})), a += l.chunkSize, i++;
													case 15:
													case "end":
														return e.stop()
												}
											}), e)
										}));
									case 6:
										if (!(a < r)) {
											e.next = 13;
											break
										}
										return e.delegateYield(s(), "t0", 8);
									case 8:
										if ("continue" !== e.t0) {
											e.next = 11;
											break
										}
										return e.abrupt("continue", 6);
									case 11:
										e.next = 6;
										break;
									case 13:
										return e.next = 15, Promise.all(c);
									case 15:
										return e.next = 17, this.completeUpload();
									case 17:
									case "end":
										return e.stop()
								}
							}), e, this)
						}))), function(e, t) {
							return Yr.apply(this, arguments)
						}),
						createClient: function() {
							this.s3client = new Fr.g({
								region: this.region,
								credentials: {
									accessKeyId: this.accessKeyID,
									secretAccessKey: this.secretAccessKey,
									sessionToken: this.sessionToken
								}
							})
						},
						initUploadChunk: (Wr = zr(Br().mark((function e() {
							var t, n;
							return Br().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return this.s3client || this.createClient(), t = new Ar.p({
											Bucket: this.bucket,
											Key: this.uploadKey
										}), e.next = 4, this.s3Send(t);
									case 4:
										n = e.sent, this.uploadId = n.UploadId;
									case 6:
									case "end":
										return e.stop()
								}
							}), e, this)
						}))), function() {
							return Wr.apply(this, arguments)
						}),
						uploadChunk: function(e, t) {
							this.s3client || this.createClient();
							var n = new Mr.c({
								Bucket: this.bucket,
								Key: this.uploadKey,
								UploadId: this.uploadId,
								Body: e,
								PartNumber: t
							});
							return this.s3Send(n)
						},
						completeUpload: (Kr = zr(Br().mark((function e() {
							var t;
							return Br().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, n = this.videoID, r = this.uploadId, B({
											method: "POST",
											url: "/video/upload_complete",
											data: {
												videoID: n,
												uploadID: r
											}
										});
									case 2:
										t = e.sent, this.onResult && this.onResult({
											videoURI: t.videoURI
										}), this.clearUploadInfo();
									case 7:
									case "end":
										return e.stop()
								}
								var n, r
							}), e, this)
						}))), function() {
							return Kr.apply(this, arguments)
						}),
						s3Send: (Gr = zr(Br().mark((function e(t) {
							var n;
							return Br().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, this.s3client.send(t);
									case 3:
										return n = e.sent, e.abrupt("return", n);
									case 8:
										return e.prev = 8, e.t0 = e.catch(0), e.next = 12, this.refreshCredential();
									case 12:
										return this.createClient(), e.abrupt("return", this.s3client.send(t));
									case 14:
									case "end":
										return e.stop()
								}
							}), e, this, [
								[0, 8]
							])
						}))), function(e) {
							return Gr.apply(this, arguments)
						}),
						getUploadedInfo: function() {
							if (this.filePath) {
								var e = "upload-" + this.filePath;
								if (e) {
									var t = localStorage.getItem(e);
									if (t) {
										var n = JSON.parse(t);
										return n.chunkMap = new T(n.chunkMap), n
									}
								}
							}
							return null
						},
						clearUploadInfo: function() {
							if (this.filePath) {
								var e = "upload-" + this.filePath;
								localStorage.removeItem(e)
							}
						},
						saveUploadInfo: function(e) {
							if (this.filePath) {
								var t = "upload-" + this.filePath;
								localStorage.setItem(t, JSON.stringify(e, (function(e, t) {
									return t instanceof T ? t.valueOf() : t
								})))
							}
						},
						clearOverdueInfo: function() {
							for (var e = 0;;) {
								var t = localStorage.key(e);
								if (!t) break;
								if (t.startsWith("upload-")) {
									var n = localStorage.getItem(t);
									if (n) {
										var r = JSON.parse(n);
										Date.now() - r.updateAt >= 864e5 && localStorage.removeItem(t)
									}
								}
								e++
							}
						}
					},
					Qr = n(41044);

				function Xr(e) {
					return Xr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Xr(e)
				}

				function eo() {
					eo = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						n = t.hasOwnProperty,
						r = Object.defineProperty || function(e, t, n) {
							e[t] = n.value
						},
						o = "function" == typeof Symbol ? Symbol : {},
						i = o.iterator || "@@iterator",
						a = o.asyncIterator || "@@asyncIterator",
						c = o.toStringTag || "@@toStringTag";

					function s(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						s({}, "")
					} catch (e) {
						s = function(e, t, n) {
							return e[t] = n
						}
					}

					function l(e, t, n, o) {
						var i = t && t.prototype instanceof f ? t : f,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return r(a, "_invoke", {
							value: x(e, n, c)
						}), a
					}

					function u(e, t, n) {
						try {
							return {
								type: "normal",
								arg: e.call(t, n)
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
					s(m, i, (function() {
						return this
					}));
					var v = Object.getPrototypeOf,
						y = v && v(v(k([])));
					y && y !== t && n.call(y, i) && (m = y);
					var g = h.prototype = f.prototype = Object.create(m);

					function b(e) {
						["next", "throw", "return"].forEach((function(t) {
							s(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function w(e, t) {
						function o(r, i, a, c) {
							var s = u(e[r], e, i);
							if ("throw" !== s.type) {
								var l = s.arg,
									d = l.value;
								return d && "object" == Xr(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
									o("next", e, a, c)
								}), (function(e) {
									o("throw", e, a, c)
								})) : t.resolve(d).then((function(e) {
									l.value = e, a(l)
								}), (function(e) {
									return o("throw", e, a, c)
								}))
							}
							c(s.arg)
						}
						var i;
						r(this, "_invoke", {
							value: function(e, n) {
								function r() {
									return new t((function(t, r) {
										o(e, n, t, r)
									}))
								}
								return i = i ? i.then(r, r) : r()
							}
						})
					}

					function x(e, t, n) {
						var r = "suspendedStart";
						return function(o, i) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === o) throw i;
								return P()
							}
							for (n.method = o, n.arg = i;;) {
								var a = n.delegate;
								if (a) {
									var c = j(a, n);
									if (c) {
										if (c === d) continue;
										return c
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var s = u(e, t, n);
								if ("normal" === s.type) {
									if (r = n.done ? "completed" : "suspendedYield", s.arg === d) continue;
									return {
										value: s.arg,
										done: n.done
									}
								}
								"throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg)
							}
						}
					}

					function j(e, t) {
						var n = t.method,
							r = e.iterator[n];
						if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, j(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
						var o = u(r, e.iterator, t.arg);
						if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, d;
						var i = o.arg;
						return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
					}

					function I(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function S(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function O(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(I, this), this.reset(!0)
					}

					function k(e) {
						if (e) {
							var t = e[i];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var r = -1,
									o = function t() {
										for (; ++r < e.length;)
											if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return o.next = o
							}
						}
						return {
							next: P
						}
					}

					function P() {
						return {
							value: void 0,
							done: !0
						}
					}
					return p.prototype = h, r(g, "constructor", {
						value: h,
						configurable: !0
					}), r(h, "constructor", {
						value: p,
						configurable: !0
					}), p.displayName = s(h, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, c, "GeneratorFunction")), e.prototype = Object.create(g), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, b(w.prototype), s(w.prototype, a, (function() {
						return this
					})), e.AsyncIterator = w, e.async = function(t, n, r, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(l(t, n, r, o), i);
						return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
							return e.done ? e.value : a.next()
						}))
					}, b(g), s(g, c, "Generator"), s(g, i, (function() {
						return this
					})), s(g, "toString", (function() {
						return "[object Generator]"
					})), e.keys = function(e) {
						var t = Object(e),
							n = [];
						for (var r in t) n.push(r);
						return n.reverse(),
							function e() {
								for (; n.length;) {
									var r = n.pop();
									if (r in t) return e.value = r, e.done = !1, e
								}
								return e.done = !0, e
							}
					}, e.values = k, O.prototype = {
						constructor: O,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
								for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

							function r(n, r) {
								return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var i = this.tryEntries[o],
									a = i.completion;
								if ("root" === i.tryLoc) return r("end");
								if (i.tryLoc <= this.prev) {
									var c = n.call(i, "catchLoc"),
										s = n.call(i, "finallyLoc");
									if (c && s) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
									} else {
										if (!s) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return r(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
									var i = o;
									break
								}
							}
							i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
							var a = i ? i.completion : {};
							return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var r = n.completion;
									if ("throw" === r.type) {
										var o = r.arg;
										S(n)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: k(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), d
						}
					}, e
				}

				function to(e, t, n, r, o, i, a) {
					try {
						var c = e[i](a),
							s = c.value
					} catch (e) {
						return void n(e)
					}
					c.done ? t(s) : Promise.resolve(s).then(r, o)
				}

				function no(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function ro(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? no(Object(n), !0).forEach((function(t) {
							oo(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : no(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function oo(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== Xr(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== Xr(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === Xr(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function io(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, o, i, a, c = [],
								s = !0,
								l = !1;
							try {
								if (i = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									s = !1
								} else
									for (; !(s = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); s = !0);
							} catch (e) {
								l = !0, o = e
							} finally {
								try {
									if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
								} finally {
									if (l) throw o
								}
							}
							return c
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return ao(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ao(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function ao(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var co = F.Z.baseUrl,
					so = h.Z.TextArea,
					lo = p.Z.confirm,
					uo = null,
					fo = "";
				window.needUpload = "", window.bindEvents = !1;
				var po = function(e) {
					return (0, gn.jsxs)(f.Z, {
						onFinish: function(t) {
							e.onSubmit(t)
						},
						children: [(0, gn.jsx)(f.Z.Item, {
							name: "title",
							rules: [{
								required: !0,
								message: "Title can't be empty!"
							}],
							initialValue: e.defaultValue,
							children: (0, gn.jsx)(so, {})
						}), (0, gn.jsxs)(f.Z.Item, {
							className: "video-edit-title-btn-area",
							children: [(0, gn.jsx)(d.Z, {
								onClick: e.onCancel,
								children: "Cancel"
							}), (0, gn.jsx)(d.Z, {
								type: "primary",
								htmlType: "submit",
								loading: e.isLoading,
								children: "Done"
							})]
						})]
					})
				};
				const ho = function(e) {
					var t = io((0, m.useState)(null), 2),
						n = t[0],
						r = t[1],
						f = io((0, m.useState)("upload"), 2),
						g = f[0],
						w = f[1],
						x = io((0, m.useState)("upload"), 2),
						j = x[0],
						I = x[1],
						S = io((0, m.useState)("upload"), 2),
						O = S[0],
						k = S[1],
						P = io((0, m.useState)(0), 2),
						N = P[0],
						U = P[1],
						D = io((0, m.useState)(0), 2),
						T = D[0],
						F = D[1],
						A = io((0, m.useState)(0), 2),
						R = A[0],
						z = A[1],
						Y = io((0, m.useState)(!1), 2),
						q = Y[0],
						H = Y[1],
						$ = io((0, m.useState)(!1), 2),
						J = $[0],
						Q = $[1],
						X = io((0, m.useState)(!1), 2),
						ee = X[0],
						te = X[1],
						ne = io((0, m.useState)(null), 2),
						re = ne[0],
						oe = ne[1],
						ie = io((0, m.useState)(""), 2),
						ae = ie[0],
						ce = ie[1],
						se = io((0, m.useState)(""), 2),
						le = se[0],
						ue = se[1],
						de = io((0, m.useState)(""), 2),
						fe = de[0],
						pe = de[1],
						he = io((0, m.useState)(!1), 2),
						me = he[0],
						ve = he[1],
						ye = io((0, m.useState)(!1), 2),
						ge = ye[0],
						be = ye[1],
						we = io((0, m.useState)(!1), 2),
						xe = we[0],
						je = we[1],
						Ie = io((0, m.useState)(!1), 2),
						Se = Ie[0],
						Oe = Ie[1],
						ke = io((0, m.useState)(""), 2),
						Pe = ke[0],
						Ne = ke[1],
						Ze = io((0, m.useState)(!1), 2),
						Ee = Ze[0],
						Ce = Ze[1],
						_e = (0, m.useRef)(me);
					_e.current = me;
					var Le = (0, m.useRef)(null);
					(0, m.useEffect)((function() {
						return null !== n && "" === n.detail.thumbnailUrl && Le.current.addEventListener("canplay", (function() {
								Ve()
							})), document.addEventListener("visibilitychange", Ge), window.addEventListener("message", ze),
							function() {
								document.removeEventListener("visibilitychange", Ge), window.removeEventListener("message", ze)
							}
					}), [n, g]), (0, m.useEffect)((function() {
						var e = new URLSearchParams(window.location.search);
						(fo = parseInt(e.get("id"))) && DB.init().then((function() {
							DB.get(fo).then((function(e) {
								r(e), e.detail.youtubeUrl && I("uploaded"), e.detail.gDriveUrl && k("uploaded"), e.detail.awsUrl && w("uploaded"), Le.current.addEventListener("progress", t), Le.current.currentTime = 99999999
							}))
						}));
						var t = function e() {
							Le.current.buffered.length > 0 && Le.current.buffered.end(0) && Le.current.currentTime > 0 && (Le.current.currentTime = 0, Le.current.removeEventListener("seeked", e))
						};
						chrome.cookies.get({
							url: "https://www.awesomescreenshot.com",
							name: "screenshot_personal_type"
						}, (function(e) {
							e ? 0 == e.value && je(!0) : je(!0)
						})), chrome.storage.sync.get(["captureCount"], (function(e) {
							e.captureCount ? chrome.storage.sync.set({
								captureCount: (isNaN(parseInt(e.captureCount)) ? 0 : parseInt(e.captureCount)) + 1
							}) : chrome.storage.sync.set({
								captureCount: 1
							}), V().then((function(e) {
								if (e) {
									var t = e.username;
									t && (ce(t), K().then((function(e) {
										pe(e.info.avatarURL), ue(e.premium.currentPlan), null != e.permissions.showChromeFiveStarNever ? Ue(t, e.permissions.showChromeFiveStarNever) : Ue(t, !1)
									})))
								} else Ue("", !1)
							}))
						})), _("enter video detail page", "local")
					}), []), (0, m.useEffect)((function() {
						me && Ce(!0), !me && Ee && Pe && (Ye("aws", Pe), Ne(""))
					}), [me]);
					var Ue = function(e, t) {
							chrome.storage.sync.get(["captureCount", "clickNo", "neverShow"], (function(n) {
								if (!n.neverShow && !t) {
									var r = 200;
									r = n.clickNo ? 200 : 100, n.captureCount && n.captureCount > r && Be(e)
								}
							}))
						},
						De = function() {
							chrome.storage.sync.get(["clickNo"], (function(e) {
								e.clickNo ? chrome.storage.sync.set({
									neverShow: !0
								}) : chrome.storage.sync.set({
									clickNo: !0
								})
							})), V().then((function(e) {
								e && W("chromeFiveStarCancel")
							})), u.Z.destroy()
						},
						Te = function(e, t) {
							u.Z.open({
								key: "questionnaire",
								className: "questionnaire",
								placement: "bottomRight",
								duration: 0,
								style: {
									width: 418,
									marginLeft: -63,
									padding: "20px 30px"
								},
								message: e,
								description: t,
								onClose: De
							})
						},
						Fe = function() {
							Z("https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj/reviews"), chrome.storage.sync.set({
								neverShow: !0
							}), V().then((function(e) {
								e && W("chromeFiveStarClick")
							})), u.Z.destroy()
						},
						Ae = function() {
							Z("/feedback.html"), chrome.storage.sync.set({
								captureCount: 0,
								clickNo: !1,
								neverShow: !1
							}), V().then((function(e) {
								e && W("chromeFiveStarFeedback")
							})), u.Z.destroy()
						},
						Me = function() {
							Te((0, gn.jsxs)("div", {
								className: "noti_title",
								children: [(0, gn.jsx)("img", {
									src: "images/star.png"
								}), " User Satisfaction Survey"]
							}), (0, gn.jsxs)("div", {
								className: "noti_des",
								children: [(0, gn.jsx)("div", {
									className: "content",
									children: "Your review means a lot to us. Would you mind taking a moment to rate the extension in the Web Store?"
								}), (0, gn.jsx)(d.Z, {
									style: {
										width: "98px",
										height: "34px"
									},
									onClick: De,
									type: "primary",
									ghost: !0,
									children: "No, thanks"
								}), (0, gn.jsx)(d.Z, {
									style: {
										width: "246px",
										height: "34px",
										marginLeft: "14px"
									},
									type: "primary",
									onClick: Fe,
									children: "Sure, take me to the Web Store"
								})]
							}))
						},
						Re = function() {
							Te((0, gn.jsxs)("div", {
								className: "noti_title",
								children: [(0, gn.jsx)("img", {
									src: "images/star.png"
								}), " User Satisfaction Survey"]
							}), (0, gn.jsxs)("div", {
								className: "noti_des",
								children: [(0, gn.jsx)("div", {
									className: "content",
									children: "Would you like to report any issues you're experiencing or give us some suggestions so that we can make the extension better for you?"
								}), (0, gn.jsx)(d.Z, {
									style: {
										width: "98px"
									},
									onClick: De,
									type: "primary",
									ghost: !0,
									children: "No, thanks"
								}), (0, gn.jsx)(d.Z, {
									style: {
										width: "246px",
										marginLeft: "14px"
									},
									type: "primary",
									onClick: Ae,
									children: "Yes, take me to the feedback form"
								})]
							}))
						},
						Be = function(e) {
							var t = "Are you enjoying Awesome Screenshot?";
							Te((0, gn.jsxs)("div", {
								className: "noti_title",
								children: [(0, gn.jsx)("img", {
									src: "images/star.png"
								}), " User Satisfaction Survey"]
							}), (0, gn.jsxs)("div", {
								className: "noti_des",
								children: [e ? (0, gn.jsxs)("div", {
									className: "content",
									children: ["Hi ", (0, gn.jsxs)("p", {
										className: "user_name",
										children: [" ", e]
									}), " , ", t]
								}) : (0, gn.jsx)("div", {
									className: "content",
									children: t
								}), (0, gn.jsx)(d.Z, {
									style: {
										width: "172px"
									},
									onClick: Re,
									type: "primary",
									ghost: !0,
									children: "Not really"
								}), (0, gn.jsx)(d.Z, {
									style: {
										width: "172px",
										marginLeft: "14px"
									},
									type: "primary",
									onClick: Me,
									children: "Yes"
								})]
							}))
						},
						Ve = function() {
							var e = document.createElement("canvas");
							e.width = 320, e.height = 180;
							var t = e.getContext("2d"),
								o = Le.current;
							t.drawImage(o, 0, 0, e.width, e.height), e.toBlob((function(e) {
								Qr.Z.save(e, n.id + "_thumbnail.png").then((function(e) {
									var t = ro(ro({}, n), {}, {
										detail: ro(ro({}, n.detail), {}, {
											thumbnailUrl: e
										})
									});
									r(t), DB.update(fo, t)
								}))
							}))
						},
						ze = function(e) {
							e && "google_login_success" === e.data && (window.needUpload && (window.needUpload = "", ct()), Ke())
						},
						Ge = function() {
							"visible" === document.visibilityState && (window.needUpload && (window.needUpload = "", ct()), Ke())
						},
						Ke = function() {
							V().then((function(e) {
								e && e.username ? (H(!1), ce(e.username), K().then((function(e) {
									pe(e.info.avatarURL), ue(e.premium.currentPlan), null != e.permissions.showChromeFiveStarNever ? Ue(ae, e.permissions.showChromeFiveStarNever) : Ue(ae, !1)
								}))) : ce("")
							}))
						},
						We = function(e) {
							return new Promise((function(t, n) {
								var r = "filesystem:" + chrome.runtime.getURL("persistent/"),
									o = new RegExp(r),
									i = e.replace(o, "");
								Qr.Z.getFile(i).then((function(e) {
									t(e)
								}), (function(e) {
									n("Get file error: [" + e + "]")
								}))
							}))
						},
						Ye = function(e, t) {
							var o = ro(ro({}, n), {}, {
								detail: ro(ro({}, n.detail), {}, oo({}, e + "Url", t))
							});
							r(o), DB.update(fo, o), "aws" === e && chrome.tabs.create({
								url: t
							})
						},
						qe = function(e) {
							F(e)
						},
						He = function(e) {
							z(e)
						},
						$e = function(e) {
							100 !== e && U(e)
						},
						Je = function() {
							if (!ge) {
								be(!0);
								var e = localStorage.video_upload ? localStorage.video_upload : 0;
								1 != ++e && 5 !== e && 10 !== e || "cloud" === localStorage["save-location"] || (ve(!0), _("video_change_to_cloud", "show")), localStorage.video_upload = e
							}
						},
						Qe = function() {
							var e, t = (e = eo().mark((function e() {
								var t, r;
								return eo().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return w("uploading"), Je(), window.needUpload = "", t = {
												title: n.detail.title,
												userAgent: navigator.userAgent,
												client: /Edg/.test(navigator.userAgent) ? "Edge extension" : "chrome extension",
												extVersion: chrome.runtime.getManifest().version,
												screenSize: window.screen.width * window.devicePixelRatio + "*" + window.screen.height * window.devicePixelRatio,
												size: n.detail.size,
												duration: n.detail.duration,
												createUnix: Math.round(n.detail.timeStamp / 1e3) + ""
											}, n.detail.recordType && (t.recordType = n.detail.recordType), n.detail.codecs && (t.videoCodec = "fmp4" === n.detail.codecs ? "fmp4" : "webm"), e.next = 9, We(n.fileUrl);
										case 9:
											return r = e.sent, Jr.init(r, n.fileUrl, t, (function() {}), $e, (function(e) {
												U(100), _e.current ? Ne(e.videoURI) : (Ye("aws", e.videoURI), Ne("")), w("uploaded"), chrome.runtime.sendMessage({
													action: "updateUserInfo"
												})
											}), (function(e, t) {
												chrome.runtime.sendMessage({
													action: "updateUserInfo"
												}), e && G(e, t), t && "Premium Plan Required!" === t.msg ? (w("upload"), Oe(!0)) : w("failed")
											})), Jr.upload(), e.abrupt("return");
										case 14:
										case "end":
											return e.stop()
									}
								}), e)
							})), function() {
								var t = this,
									n = arguments;
								return new Promise((function(r, o) {
									var i = e.apply(t, n);

									function a(e) {
										to(i, r, o, a, c, "next", e)
									}

									function c(e) {
										to(i, r, o, a, c, "throw", e)
									}
									a(void 0)
								}))
							});
							return function() {
								return t.apply(this, arguments)
							}
						}();

					function Xe() {
						B({
							method: "GET",
							url: "/user/einfo"
						}).then((function(e) {
							e ? e.permission.allowVideoCreate ? Qe() : (w("upload"), Oe(!0)) : l.ZP.error("Network error")
						})).catch((function(e) {}))
					}
					var et, tt, nt, rt, ot, it, at = function() {
							_("upload to aws", "local"), V().then((function(e) {
								e && e.username ? Xe() : (window.needUpload = {
									title: n.detail.title,
									fileUrl: n.fileUrl
								}, H(!0))
							}))
						},
						ct = function() {
							V().then((function(e) {
								e && e.username ? (H(!1), ce(e.username), at()) : ce("")
							}))
						},
						st = function(e, t) {
							! function(e) {
								E.apply(this, arguments)
							}({
								url: e,
								filename: t,
								saveAs: !0
							})
						},
						lt = function() {
							Q(!1)
						},
						ut = function() {
							window.location.href = "/video-list.html"
						},
						dt = function() {
							chrome.tabs.create({
								url: n.detail.awsUrl
							})
						},
						ft = function(e) {
							var t, n;
							t = e, (n = document.createElement("textarea")).value = t, n.style.position = "absolute", n.style.top = "-999999px", document.body.appendChild(n), n.select(), document.execCommand("copy"), document.body.removeChild(n), l.ZP.success("Link has been copied to your clipboard!")
						},
						pt = function(e, t, r) {
							var o = "";
							o = "youtube" === e ? "#cc181e" : "gDrive" === e ? "#4285f4" : "";
							return (0, gn.jsxs)("div", {
								className: "upload-area",
								children: ["uploading" === t && (0, gn.jsx)(s.Z, {
									percent: r,
									status: "active",
									showInfo: !1,
									size: "small",
									strokeColor: o
								}), "uploaded" === t && function(e) {
									return "aws" === e ? (0, gn.jsxs)("div", {
										className: "view-btn",
										onClick: dt,
										children: [(0, gn.jsx)("img", {
											className: "icon",
											src: "images/icon_viewOnAS.svg"
										}), "View on Awesome Screenshot"]
									}) : (0, gn.jsx)(h.Z, {
										defaultValue: n.detail[e + "Url"],
										prefix: (0, gn.jsx)(v.Z, {}),
										onClick: ft.bind(null, n.detail[e + "Url"])
									})
								}(e)]
							})
						},
						ht = function() {
							chrome.tabs.create({
								url: "/feedback.html"
							})
						},
						mt = function() {
							window.open("https://www.awesomescreenshot.com/signin?from=ext_loc_normal")
						},
						vt = function() {
							chrome.tabs.create({
								url: "/option-react.html"
							})
						},
						yt = (0, gn.jsxs)(c.Z, {
							className: "more-menu",
							children: [le && "free" === le.PlanName && (0, gn.jsx)(c.Z.Item, {
								className: "menu-item",
								children: (0, gn.jsxs)("a", {
									href: "https://www.awesomescreenshot.com/pricing?from=local_dropdown",
									target: "_blank",
									rel: "noopener noreferrer",
									children: [(0, gn.jsx)(y.Z, {
										style: {
											marginRight: "5px"
										},
										title: "Premium user"
									}), "Upgrade"]
								})
							}), (0, gn.jsx)(c.Z.Item, {
								className: "menu-item",
								onClick: function() {
									Z("https://www.awesomescreenshot.com/web/user/logout")
								},
								children: (0, gn.jsxs)("a", {
									children: [(0, gn.jsx)(Rn, {
										style: {
											marginRight: "5px",
											fontSize: "16px"
										}
									}), "Sign out"]
								})
							})]
						}),
						gt = (0, gn.jsxs)(c.Z, {
							className: "more-menu",
							children: [(0, gn.jsxs)(c.Z.Item, {
								className: "menu-item ",
								onClick: function() {
									Q(!0)
								},
								children: [(0, gn.jsx)(_n, {
									className: "icon"
								}), "Rename"]
							}, "comfig"), (0, gn.jsxs)(c.Z.Item, {
								className: "menu-item warning",
								onClick: function() {
									lo({
										title: "Are you sure to delete this video?",
										okText: "Yes, delete",
										okType: "danger",
										cancelText: "No",
										onOk: function() {
											if (n.fileUrl && n.fileUrl.match(/\/persistent\/(.*)$/)[1]) {
												var e = n.fileUrl.match(/\/persistent\/(.*)$/)[1];
												Qr.Z.remove(e)
											}
											DB.delete(fo).then((function(e) {
												window.location.href = "/video-list.html"
											}))
										},
										onCancel: function() {}
									})
								},
								children: [(0, gn.jsx)(Un, {
									className: "icon"
								}), "Delete"]
							}, "comfig")]
						});
					return (0, gn.jsx)("div", {
						className: "videoPage",
						children: n ? (0, gn.jsxs)("div", {
							className: "main-container",
							children: [(0, gn.jsx)("div", {
								className: "top-bar",
								children: (0, gn.jsxs)("div", {
									className: "inner-container",
									children: [(0, gn.jsxs)("div", {
										className: "logo-area",
										children: [(0, gn.jsx)("div", {
											className: "logo"
										}), (0, gn.jsx)("a", {
											target: "_blank",
											href: "https://www.awesomescreenshot.com",
											rel: "noreferrer"
										})]
									}), (0, gn.jsxs)("div", {
										className: "user-area",
										children: [(0, gn.jsxs)("a", {
											className: "user-link email-us",
											target: "_blank",
											onClick: ht,
											children: [(0, gn.jsx)("div", {
												className: "icon-field",
												children: (0, gn.jsx)(En, {})
											}), "Feedback"]
										}), (0, gn.jsxs)("a", {
											className: "user-link email-us",
											target: "_blank",
											onClick: vt,
											children: [(0, gn.jsx)("div", {
												className: "icon-field",
												children: (0, gn.jsx)(Tn, {})
											}), "Options"]
										}), (0, gn.jsxs)("a", {
											className: "user-link email-us",
											onClick: ut,
											target: "_blank",
											children: [(0, gn.jsx)("div", {
												className: "icon-field",
												children: (0, gn.jsx)(Bn, {})
											}), "My Local Recordings"]
										}), ae ? (0, gn.jsx)(a.Z, {
											overlay: yt,
											trigger: ["click"],
											placement: "bottomRight",
											children: (0, gn.jsxs)("div", {
												className: "user-link user-avatar",
												children: [(0, gn.jsx)(gr, {
													username: ae,
													size: "22",
													avatarUrl: fe ? "https://www.awesomescreenshot.com/" + fe : ""
												}), le && le.PlanName && "free" !== le.PlanName ? (0, gn.jsx)(An, {
													className: "crown"
												}) : (0, gn.jsx)(gn.Fragment, {}), ae, (0, gn.jsx)(Cn, {
													className: "user-more"
												})]
											})
										}) : (0, gn.jsxs)("div", {
											className: "user-link",
											onClick: mt,
											children: [(0, gn.jsx)(Fn, {
												className: "me"
											}), "Sign in"]
										})]
									})]
								})
							}), (0, gn.jsxs)("div", {
								className: "title-field",
								children: [(0, gn.jsx)("span", {
									className: "display-text",
									id: "display-text",
									title: "Edit name",
									children: (0, gn.jsx)("span", {
										className: "text",
										children: n.detail.title
									})
								}), (0, gn.jsxs)("div", {
									className: "actions",
									children: [(0, gn.jsx)("span", {
										className: "info-time",
										children: (nt = new Date(n.detail.timeStamp), rt = nt.getDate(), ot = nt.getMonth(), it = nt.getFullYear(), ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"][ot] + " " + rt + ", " + it)
									}), (0, gn.jsx)(i.Z, {
										style: {
											background: "#FFFFFF33",
											display: "inline-block",
											height: "16px",
											width: "1px",
											top: "4px",
											margin: "0 18px"
										},
										type: "vertical"
									}), (0, gn.jsx)(a.Z, {
										overlay: gt,
										trigger: ["click"],
										className: "more-action",
										placement: "topLeft",
										children: (0, gn.jsx)("div", {
											className: "more-action",
											children: (0, gn.jsx)("div", {
												className: "dots"
											})
										})
									})]
								})]
							}), (0, gn.jsxs)("div", {
								className: "video-container",
								children: [(0, gn.jsxs)("div", {
									className: "video-box",
									children: [(0, gn.jsx)("video", {
										id: "video",
										controls: !0,
										src: n.fileUrl,
										ref: Le
									}), (0, gn.jsx)("div", {
										className: "info-field",
										children: (0, gn.jsxs)("div", {
											className: "video-tip",
											children: [(0, gn.jsx)("span", {
												children: "Upload or download the video to avoid data loss."
											}), (0, gn.jsx)("div", {
												className: "tips",
												children: "This video is temporarily saved in My Local Recordings( a temp folder in your browser) and prone to be lost due to an unexpected system or browser error. Upload this video to awesomescreenshot.com or download it to local to avoid any possible data loss."
											})]
										})
									})]
								}), (0, gn.jsxs)("div", {
									className: "info-box",
									children: [(0, gn.jsxs)("div", {
										className: "info-group",
										children: ["upload" === g || "uploaded" === g ? (0, gn.jsx)("div", {
											className: "group-title",
											children: "Save to Awesome Screenshot"
										}) : (0, gn.jsx)(gn.Fragment, {}), (0, gn.jsx)("div", {
											className: "info-group-box",
											children: (et = g, tt = N, "upload" === et ? (0, gn.jsxs)(gn.Fragment, {
												children: [(0, gn.jsx)(d.Z, {
													className: "uploadAwsBtn",
													block: !0,
													type: "primary",
													onClick: at,
													children: "Upload"
												}), (0, gn.jsxs)("div", {
													className: "tips-field",
													children: [(0, gn.jsx)("div", {
														className: "tip-title",
														children: "Upload for features :"
													}), (0, gn.jsxs)("div", {
														className: "tip-content",
														children: [(0, gn.jsxs)("div", {
															children: [(0, gn.jsxs)("div", {
																className: "tip-item",
																children: [(0, gn.jsx)("div", {
																	className: "icon",
																	children: (0, gn.jsx)(Ln, {})
																}), "Shareable link"]
															}), (0, gn.jsxs)("div", {
																className: "tip-item",
																children: [(0, gn.jsx)("div", {
																	className: "icon",
																	children: (0, gn.jsx)(Ln, {})
																}), "Download in MP4"]
															})]
														}), (0, gn.jsxs)("div", {
															children: [(0, gn.jsxs)("div", {
																className: "tip-item",
																children: [(0, gn.jsx)("div", {
																	className: "icon",
																	children: (0, gn.jsx)(Ln, {})
																}), "Quick video editing"]
															}), (0, gn.jsxs)("div", {
																className: "tip-item",
																children: [(0, gn.jsx)("div", {
																	className: "icon",
																	children: (0, gn.jsx)(Ln, {})
																}), "Back up"]
															})]
														})]
													})]
												})]
											}) : "uploaded" === et ? (0, gn.jsx)("div", {
												className: "upload-field",
												children: (0, gn.jsx)("div", {
													className: "view-btn",
													onClick: dt,
													children: "View on Awesome Screenshot"
												})
											}) : (0, gn.jsx)("div", {
												className: "upload-field",
												children: "uploading" === et ? (0, gn.jsxs)(gn.Fragment, {
													children: [(0, gn.jsx)(s.Z, {
														className: "progress",
														strokeWidth: 10,
														trailColor: "rgba(255, 255, 255, 0.05)",
														strokeColor: "#6494F7",
														type: "circle",
														percent: tt,
														gapPosition: "left",
														width: 50
													}), (0, gn.jsxs)("div", {
														className: "upload-tip",
														children: ["Saving to ", (0, gn.jsx)("span", {
															children: "My Items"
														})]
													})]
												}) : (0, gn.jsxs)("div", {
													className: "failed-field",
													onClick: at,
													children: [(0, gn.jsx)(Mn, {
														className: "icon"
													}), (0, gn.jsx)("div", {
														className: "upload-tip",
														children: "Failed to upload the video. Click to retry."
													})]
												})
											}))
										})]
									}), (0, gn.jsxs)("div", {
										className: "info-group",
										children: [(0, gn.jsxs)("div", {
											className: "group-title",
											children: ["Download", (0, gn.jsxs)("span", {
												className: "info-size",
												children: ["Size: ", n.detail.size]
											})]
										}), (0, gn.jsx)("div", {
											className: "info-item",
											children: (0, gn.jsxs)("div", {
												className: "subtitle",
												children: ["In ", "fmp4" === n.detail.codecs ? "Mp4" : "WebM", " ", "format", (0, gn.jsx)(d.Z, {
													className: "action-btn download-btn",
													type: "primary",
													size: "small",
													onClick: function() {
														chrome.permissions.request({
															permissions: ["downloads"]
														}, (function(e) {
															e && We(n.fileUrl).then((function(e) {
																var t = n.detail.codecs,
																	r = "fmp4" === t ? ".mp4" : ".webm",
																	o = n.detail.title.replace(/(\.|\:)/g, " ").replace(/[#$~!@%^&*();'"?><\[\]{}\|,:\/=+]/g, " ") + r;
																if (o = o.replace(/\s+/g, "-"), "fmp4" === t) {
																	var i = new Blob([e], {
																			type: "video/mp4"
																		}),
																		a = URL.createObjectURL(i);
																	st(a, o)
																} else {
																	if (e.size < 1442116762) try {
																		! function(e, t) {
																			if ("undefined" == typeof EBML) throw new Error("Please link: https://cdn.webrtc-experiment.com/EBML.js");
																			var n = new EBML.Reader,
																				r = new EBML.Decoder,
																				o = EBML.tools,
																				i = new FileReader;
																			i.onload = function(e) {
																				r.decode(this.result).forEach((function(e) {
																					n.read(e)
																				})), n.stop();
																				try {
																					var i = o.makeMetadataSeekable(n.metadatas, n.duration, n.cues)
																				} catch (e) {}
																				var a = this.result.slice(n.metadataSize),
																					c = new Blob([i, a], {
																						type: "video/webm"
																					});
																				t(c)
																			}, i.readAsArrayBuffer(e)
																		}(e, (function(e) {
																			var t = URL.createObjectURL(e);
																			st(t, o)
																		}))
																	} catch (t) {
																		a = URL.createObjectURL(e);
																		st(a, o)
																	} else C(URL.createObjectURL(new Blob([e], {
																		type: "video/webm"
																	})), n.detail.title + r)
																}
															}))
														})), _("download video", "local")
													},
													children: "Download"
												})]
											})
										})]
									}), (0, gn.jsxs)("div", {
										className: "info-group",
										children: [(0, gn.jsx)("div", {
											className: "group-title",
											children: "Save to cloud"
										}), (0, gn.jsxs)("div", {
											className: "upload-item",
											id: "youtube-upload",
											children: [(0, gn.jsxs)("div", {
												className: "subtitle",
												children: [(0, gn.jsx)("img", {
													src: "images/youtube.svg",
													alt: ""
												}), "YouTube", (0, gn.jsx)("div", {
													className: "upload-action",
													children: "uploaded" !== j && (0, gn.jsx)(d.Z, {
														type: "primary",
														size: "small",
														onClick: function() {
															_("upload to youtube", "local");
															var e = n.detail.codecs,
																t = "fmp4" === e ? ".mp4" : ".webm",
																r = "fmp4" === e ? "video/mp4" : "video/webm";
															return We(n.fileUrl).then((function(e) {
																return uo || (uo = new File([e], n.detail.title + t, {
																	type: r
																})), I("uploading"), uploadVideo.uploadToYoutube(uo, qe)
															})).then((function(e) {
																Ye("youtube", "https://youtu.be/" + e.id), I("uploaded")
															})).catch((function(e) {
																I("upload")
															}))
														},
														disabled: "upload" !== j,
														children: "upload" === j ? "Upload" : "Uploading"
													})
												})]
											}), (0, gn.jsx)("div", {
												className: "upload-item-detail",
												children: pt("youtube", j, T)
											})]
										}), (0, gn.jsxs)("div", {
											className: "upload-item",
											id: "gDrive-upload",
											children: [(0, gn.jsxs)("div", {
												className: "subtitle",
												children: [(0, gn.jsx)("img", {
													src: "images/google-drive.svg",
													alt: ""
												}), "Google Drive", (0, gn.jsx)("div", {
													className: "upload-action",
													children: "uploaded" !== O && (0, gn.jsx)(d.Z, {
														type: "primary",
														size: "small",
														onClick: function() {
															_("upload to google drive", "local");
															var e = n.detail.codecs,
																t = "fmp4" === e ? ".mp4" : ".webm",
																r = "fmp4" === e ? "video/mp4" : "video/webm";
															return We(n.fileUrl).then((function(e) {
																return uo || (uo = new File([e], n.detail.title + t, {
																	type: r
																})), k("uploading"), uploadVideo.uploadToGoogleDrive(uo, He)
															})).then((function(e) {
																Ye("gDrive", e.alternateLink), k("uploaded")
															})).catch((function(e) {
																k("upload")
															}))
														},
														disabled: "upload" !== O,
														children: "upload" === O ? "Upload" : "Uploading"
													})
												})]
											}), (0, gn.jsx)("div", {
												className: "upload-item-detail",
												children: pt("gDrive", O, R)
											})]
										}), re && (0, gn.jsxs)("div", {
											className: "current-account",
											id: "current-account",
											children: ["Current account:", (0, gn.jsx)(o.Z, {
												content: (0, gn.jsxs)("div", {
													className: "notice",
													id: "notice",
													children: ["NOTICE: If you want to save video to another google account, please clear the authentication in awesome screenshot.", (0, gn.jsx)("a", {
														className: "gdrive-signout",
														onClick: function() {
															googleOAuth.clearAccount(), oe(""), te(!1)
														},
														children: "Click to clear Authentication"
													})]
												}),
												trigger: "click",
												visible: ee,
												onVisibleChange: function(e) {
													te(e)
												},
												children: (0, gn.jsx)("span", {
													className: "current-account-email",
													id: "c-email",
													children: re
												})
											})]
										})]
									}), xe && (0, gn.jsxs)("div", {
										className: "tip",
										children: ["Recording length is limited to", (0, gn.jsx)("span", {
											children: " 5 minutes"
										}), ". Upgrade to unlock the unlimited recordings.", (0, gn.jsx)("div", {
											children: (0, gn.jsx)("a", {
												className: "upgrade-btn",
												id: "upgrade-btn",
												onClick: function() {
													! function(e, t) {
														chrome.cookies.get({
															url: t,
															name: "screenshot_personal_type"
														}, (function(n) {
															L(n ? t + "/pricing?from=" + e : t + "/user/login?redirect=" + t + "/pricing?from=" + e)
														}))
													}("Record_final", co)
												},
												children: "UPGRADE"
											})
										})]
									})]
								})]
							}), (0, gn.jsx)(Ir, {
								visible: q,
								onCancel: function() {
									H(!1)
								},
								googleSigin: function() {
									H(!1);
									var e, t = "width=800,height=700,top=" + (window.screen.availHeight - 30 - 700) / 2 + ",left=" + ((window.innerWidth > 810 ? window.innerWidth : window.screen.availWidth) - 10 - 800) / 2;
									(e = "ext_local_video_google", b()({
										method: "GET",
										url: M + "/user/oauth/login",
										params: {
											from: e
										}
									})).then((function(e) {
										var n = e.data.data.login_url;
										window.open(n, "Login in with Google", t)
									}))
								},
								linkOther: function(e) {
									H(!1), Z(e ? "https://www.awesomescreenshot.com/signup" : "https://www.awesomescreenshot.com/signin")
								}
							}), (0, gn.jsx)(Er, {
								visible: me,
								onCancel: function(e) {
									ve(!1), e && _("video_change_to_cloud", "click_close")
								}
							}), (0, gn.jsx)(Tr, {
								visible: Se,
								onCancel: function() {
									Oe(!1)
								},
								type: "uploadVideo"
							}), (0, gn.jsx)(p.Z, {
								title: (0, gn.jsx)(gn.Fragment, {
									children: (0, gn.jsx)("span", {
										className: "title",
										children: "Rename"
									})
								}),
								destroyOnClose: !0,
								maskClosable: !1,
								visible: J,
								className: "video-modal",
								footer: null,
								onCancel: lt,
								children: (0, gn.jsx)("div", {
									className: "edit-area",
									children: (0, gn.jsx)(po, {
										defaultValue: n.detail.title,
										onCancel: lt,
										onSubmit: function(e) {
											var t = ro(ro({}, n), {}, {
												detail: ro(ro({}, n.detail), {}, {
													title: e.title
												})
											});
											r(t), DB.update(fo, t), Q(!1)
										},
										isLoading: !1
									})
								})
							})]
						}) : ""
					})
				};
				r.render((0, gn.jsx)(ho, {}), document.getElementById("video-page-wrapper"))
			},
			54287: () => {}
		},
		o = {};

	function i(e) {
		var t = o[e];
		if (void 0 !== t) return t.exports;
		var n = o[e] = {
			exports: {}
		};
		return r[e].call(n.exports, n, n.exports, i), n.exports
	}
	i.m = r, e = [], i.O = (t, n, r, o) => {
		if (!n) {
			var a = 1 / 0;
			for (u = 0; u < e.length; u++) {
				for (var [n, r, o] = e[u], c = !0, s = 0; s < n.length; s++)(!1 & o || a >= o) && Object.keys(i.O).every((e => i.O[e](n[s]))) ? n.splice(s--, 1) : (c = !1, o < a && (a = o));
				if (c) {
					e.splice(u--, 1);
					var l = r();
					void 0 !== l && (t = l)
				}
			}
			return t
		}
		o = o || 0;
		for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
		e[u] = [n, r, o]
	}, i.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return i.d(t, {
			a: t
		}), t
	}, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(e, r) {
		if (1 & r && (e = this(e)), 8 & r) return e;
		if ("object" == typeof e && e) {
			if (4 & r && e.__esModule) return e;
			if (16 & r && "function" == typeof e.then) return e
		}
		var o = Object.create(null);
		i.r(o);
		var a = {};
		t = t || [null, n({}), n([]), n(n)];
		for (var c = 2 & r && e;
			"object" == typeof c && !~t.indexOf(c); c = n(c)) Object.getOwnPropertyNames(c).forEach((t => a[t] = () => e[t]));
		return a.default = () => e, i.d(o, a), o
	}, i.d = (e, t) => {
		for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
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
	}, (() => {
		var e;
		i.g.importScripts && (e = i.g.location + "");
		var t = i.g.document;
		if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
			var n = t.getElementsByTagName("script");
			n.length && (e = n[n.length - 1].src)
		}
		if (!e) throw new Error("Automatic publicPath is not supported in this browser");
		e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e + "../../"
	})(), (() => {
		var e = {
			791: 0
		};
		i.O.j = t => 0 === e[t];
		var t = (t, n) => {
				var r, o, [a, c, s] = n,
					l = 0;
				if (a.some((t => 0 !== e[t]))) {
					for (r in c) i.o(c, r) && (i.m[r] = c[r]);
					if (s) var u = s(i)
				}
				for (t && t(n); l < a.length; l++) o = a[l], i.o(e, o) && e[o] && e[o][0](), e[o] = 0;
				return i.O(u)
			},
			n = self.webpackChunkawesomescreenshot_extension = self.webpackChunkawesomescreenshot_extension || [];
		n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
	})(), i.O(void 0, [775, 799, 909, 431, 441, 932, 981, 544, 191, 32, 80, 377, 801, 46, 769], (() => i(32082)));
	var a = i.O(void 0, [775, 799, 909, 431, 441, 932, 981, 544, 191, 32, 80, 377, 801, 46, 769], (() => i(96283)));
	a = i.O(a)
})();