(() => {
	var e, t, r, n = {
			92138: (e, t, r) => {
				"use strict";
				r.d(t, {
					generate: () => v
				});
				var n = r(86500),
					i = r(1350),
					o = 2,
					a = .16,
					s = .05,
					u = .05,
					c = .15,
					l = 5,
					f = 4,
					h = [{
						index: 7,
						opacity: .15
					}, {
						index: 6,
						opacity: .25
					}, {
						index: 5,
						opacity: .3
					}, {
						index: 5,
						opacity: .45
					}, {
						index: 5,
						opacity: .65
					}, {
						index: 5,
						opacity: .85
					}, {
						index: 4,
						opacity: .9
					}, {
						index: 3,
						opacity: .95
					}, {
						index: 2,
						opacity: .97
					}, {
						index: 1,
						opacity: .98
					}];

				function d(e) {
					var t = e.r,
						r = e.g,
						i = e.b,
						o = (0, n.py)(t, r, i);
					return {
						h: 360 * o.h,
						s: o.s,
						v: o.v
					}
				}

				function p(e) {
					var t = e.r,
						r = e.g,
						i = e.b;
					return "#".concat((0, n.vq)(t, r, i, !1))
				}

				function y(e, t, r) {
					var n;
					return (n = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r ? Math.round(e.h) - o * t : Math.round(e.h) + o * t : r ? Math.round(e.h) + o * t : Math.round(e.h) - o * t) < 0 ? n += 360 : n >= 360 && (n -= 360), n
				}

				function g(e, t, r) {
					return 0 === e.h && 0 === e.s ? e.s : ((n = r ? e.s - a * t : t === f ? e.s + a : e.s + s * t) > 1 && (n = 1), r && t === l && n > .1 && (n = .1), n < .06 && (n = .06), Number(n.toFixed(2)));
					var n
				}

				function m(e, t, r) {
					var n;
					return (n = r ? e.v + u * t : e.v - c * t) > 1 && (n = 1), Number(n.toFixed(2))
				}

				function v(e) {
					for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = [], n = (0, i.uA)(e), o = l; o > 0; o -= 1) {
						var a = d(n),
							s = p((0, i.uA)({
								h: y(a, o, !0),
								s: g(a, o, !0),
								v: m(a, o, !0)
							}));
						r.push(s)
					}
					r.push(p(n));
					for (var u = 1; u <= f; u += 1) {
						var c = d(n),
							v = p((0, i.uA)({
								h: y(c, u),
								s: g(c, u),
								v: m(c, u)
							}));
						r.push(v)
					}
					return "dark" === t.theme ? h.map((function(e) {
						var n, o, a, s = e.index,
							u = e.opacity;
						return p((n = (0, i.uA)(t.backgroundColor || "#141414"), o = (0, i.uA)(r[s]), a = 100 * u / 100, {
							r: (o.r - n.r) * a + n.r,
							g: (o.g - n.g) * a + n.g,
							b: (o.b - n.b) * a + n.b
						}))
					})) : r
				}
				var b = {
						red: "#F5222D",
						volcano: "#FA541C",
						orange: "#FA8C16",
						gold: "#FAAD14",
						yellow: "#FADB14",
						lime: "#A0D911",
						green: "#52C41A",
						cyan: "#13C2C2",
						blue: "#1890FF",
						geekblue: "#2F54EB",
						purple: "#722ED1",
						magenta: "#EB2F96",
						grey: "#666666"
					},
					S = {},
					w = {};
				Object.keys(b).forEach((function(e) {
					S[e] = v(b[e]), S[e].primary = S[e][5], w[e] = v(b[e], {
						theme: "dark",
						backgroundColor: "#141414"
					}), w[e].primary = w[e][5]
				}));
				S.red, S.volcano, S.gold, S.orange, S.yellow, S.lime, S.green, S.cyan, S.blue, S.geekblue, S.purple, S.magenta, S.grey
			},
			96159: (e, t, r) => {
				"use strict";
				r.d(t, {
					Tm: () => o
				});
				var n = r(67294),
					i = n.isValidElement;

				function o(e, t) {
					return function(e, t, r) {
						return i(e) ? n.cloneElement(e, "function" == typeof r ? r(e.props || {}) : r) : t
					}(e, e, t)
				}
			},
			27484: function(e) {
				e.exports = function() {
					"use strict";
					var e = 1e3,
						t = 6e4,
						r = 36e5,
						n = "millisecond",
						i = "second",
						o = "minute",
						a = "hour",
						s = "day",
						u = "week",
						c = "month",
						l = "quarter",
						f = "year",
						h = "date",
						d = "Invalid Date",
						p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
						y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
						g = {
							name: "en",
							weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
							months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
						},
						m = function(e, t, r) {
							var n = String(e);
							return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(r) + e
						},
						v = {
							s: m,
							z: function(e) {
								var t = -e.utcOffset(),
									r = Math.abs(t),
									n = Math.floor(r / 60),
									i = r % 60;
								return (t <= 0 ? "+" : "-") + m(n, 2, "0") + ":" + m(i, 2, "0")
							},
							m: function e(t, r) {
								if (t.date() < r.date()) return -e(r, t);
								var n = 12 * (r.year() - t.year()) + (r.month() - t.month()),
									i = t.clone().add(n, c),
									o = r - i < 0,
									a = t.clone().add(n + (o ? -1 : 1), c);
								return +(-(n + (r - i) / (o ? i - a : a - i)) || 0)
							},
							a: function(e) {
								return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
							},
							p: function(e) {
								return {
									M: c,
									y: f,
									w: u,
									d: s,
									D: h,
									h: a,
									m: o,
									s: i,
									ms: n,
									Q: l
								} [e] || String(e || "").toLowerCase().replace(/s$/, "")
							},
							u: function(e) {
								return void 0 === e
							}
						},
						b = "en",
						S = {};
					S[b] = g;
					var w = function(e) {
							return e instanceof _
						},
						k = function e(t, r, n) {
							var i;
							if (!t) return b;
							if ("string" == typeof t) {
								var o = t.toLowerCase();
								S[o] && (i = o), r && (S[o] = r, i = o);
								var a = t.split("-");
								if (!i && a.length > 1) return e(a[0])
							} else {
								var s = t.name;
								S[s] = t, i = s
							}
							return !n && i && (b = i), i || !n && b
						},
						$ = function(e, t) {
							if (w(e)) return e.clone();
							var r = "object" == typeof t ? t : {};
							return r.date = e, r.args = arguments, new _(r)
						},
						x = v;
					x.l = k, x.i = w, x.w = function(e, t) {
						return $(e, {
							locale: t.$L,
							utc: t.$u,
							x: t.$x,
							$offset: t.$offset
						})
					};
					var _ = function() {
							function g(e) {
								this.$L = k(e.locale, null, !0), this.parse(e)
							}
							var m = g.prototype;
							return m.parse = function(e) {
								this.$d = function(e) {
									var t = e.date,
										r = e.utc;
									if (null === t) return new Date(NaN);
									if (x.u(t)) return new Date;
									if (t instanceof Date) return new Date(t);
									if ("string" == typeof t && !/Z$/i.test(t)) {
										var n = t.match(p);
										if (n) {
											var i = n[2] - 1 || 0,
												o = (n[7] || "0").substring(0, 3);
											return r ? new Date(Date.UTC(n[1], i, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o)) : new Date(n[1], i, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o)
										}
									}
									return new Date(t)
								}(e), this.$x = e.x || {}, this.init()
							}, m.init = function() {
								var e = this.$d;
								this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
							}, m.$utils = function() {
								return x
							}, m.isValid = function() {
								return !(this.$d.toString() === d)
							}, m.isSame = function(e, t) {
								var r = $(e);
								return this.startOf(t) <= r && r <= this.endOf(t)
							}, m.isAfter = function(e, t) {
								return $(e) < this.startOf(t)
							}, m.isBefore = function(e, t) {
								return this.endOf(t) < $(e)
							}, m.$g = function(e, t, r) {
								return x.u(e) ? this[t] : this.set(r, e)
							}, m.unix = function() {
								return Math.floor(this.valueOf() / 1e3)
							}, m.valueOf = function() {
								return this.$d.getTime()
							}, m.startOf = function(e, t) {
								var r = this,
									n = !!x.u(t) || t,
									l = x.p(e),
									d = function(e, t) {
										var i = x.w(r.$u ? Date.UTC(r.$y, t, e) : new Date(r.$y, t, e), r);
										return n ? i : i.endOf(s)
									},
									p = function(e, t) {
										return x.w(r.toDate()[e].apply(r.toDate("s"), (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), r)
									},
									y = this.$W,
									g = this.$M,
									m = this.$D,
									v = "set" + (this.$u ? "UTC" : "");
								switch (l) {
									case f:
										return n ? d(1, 0) : d(31, 11);
									case c:
										return n ? d(1, g) : d(0, g + 1);
									case u:
										var b = this.$locale().weekStart || 0,
											S = (y < b ? y + 7 : y) - b;
										return d(n ? m - S : m + (6 - S), g);
									case s:
									case h:
										return p(v + "Hours", 0);
									case a:
										return p(v + "Minutes", 1);
									case o:
										return p(v + "Seconds", 2);
									case i:
										return p(v + "Milliseconds", 3);
									default:
										return this.clone()
								}
							}, m.endOf = function(e) {
								return this.startOf(e, !1)
							}, m.$set = function(e, t) {
								var r, u = x.p(e),
									l = "set" + (this.$u ? "UTC" : ""),
									d = (r = {}, r[s] = l + "Date", r[h] = l + "Date", r[c] = l + "Month", r[f] = l + "FullYear", r[a] = l + "Hours", r[o] = l + "Minutes", r[i] = l + "Seconds", r[n] = l + "Milliseconds", r)[u],
									p = u === s ? this.$D + (t - this.$W) : t;
								if (u === c || u === f) {
									var y = this.clone().set(h, 1);
									y.$d[d](p), y.init(), this.$d = y.set(h, Math.min(this.$D, y.daysInMonth())).$d
								} else d && this.$d[d](p);
								return this.init(), this
							}, m.set = function(e, t) {
								return this.clone().$set(e, t)
							}, m.get = function(e) {
								return this[x.p(e)]()
							}, m.add = function(n, l) {
								var h, d = this;
								n = Number(n);
								var p = x.p(l),
									y = function(e) {
										var t = $(d);
										return x.w(t.date(t.date() + Math.round(e * n)), d)
									};
								if (p === c) return this.set(c, this.$M + n);
								if (p === f) return this.set(f, this.$y + n);
								if (p === s) return y(1);
								if (p === u) return y(7);
								var g = (h = {}, h[o] = t, h[a] = r, h[i] = e, h)[p] || 1,
									m = this.$d.getTime() + n * g;
								return x.w(m, this)
							}, m.subtract = function(e, t) {
								return this.add(-1 * e, t)
							}, m.format = function(e) {
								var t = this,
									r = this.$locale();
								if (!this.isValid()) return r.invalidDate || d;
								var n = e || "YYYY-MM-DDTHH:mm:ssZ",
									i = x.z(this),
									o = this.$H,
									a = this.$m,
									s = this.$M,
									u = r.weekdays,
									c = r.months,
									l = function(e, r, i, o) {
										return e && (e[r] || e(t, n)) || i[r].slice(0, o)
									},
									f = function(e) {
										return x.s(o % 12 || 12, e, "0")
									},
									h = r.meridiem || function(e, t, r) {
										var n = e < 12 ? "AM" : "PM";
										return r ? n.toLowerCase() : n
									},
									p = {
										YY: String(this.$y).slice(-2),
										YYYY: this.$y,
										M: s + 1,
										MM: x.s(s + 1, 2, "0"),
										MMM: l(r.monthsShort, s, c, 3),
										MMMM: l(c, s),
										D: this.$D,
										DD: x.s(this.$D, 2, "0"),
										d: String(this.$W),
										dd: l(r.weekdaysMin, this.$W, u, 2),
										ddd: l(r.weekdaysShort, this.$W, u, 3),
										dddd: u[this.$W],
										H: String(o),
										HH: x.s(o, 2, "0"),
										h: f(1),
										hh: f(2),
										a: h(o, a, !0),
										A: h(o, a, !1),
										m: String(a),
										mm: x.s(a, 2, "0"),
										s: String(this.$s),
										ss: x.s(this.$s, 2, "0"),
										SSS: x.s(this.$ms, 3, "0"),
										Z: i
									};
								return n.replace(y, (function(e, t) {
									return t || p[e] || i.replace(":", "")
								}))
							}, m.utcOffset = function() {
								return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
							}, m.diff = function(n, h, d) {
								var p, y = x.p(h),
									g = $(n),
									m = (g.utcOffset() - this.utcOffset()) * t,
									v = this - g,
									b = x.m(this, g);
								return b = (p = {}, p[f] = b / 12, p[c] = b, p[l] = b / 3, p[u] = (v - m) / 6048e5, p[s] = (v - m) / 864e5, p[a] = v / r, p[o] = v / t, p[i] = v / e, p)[y] || v, d ? b : x.a(b)
							}, m.daysInMonth = function() {
								return this.endOf(c).$D
							}, m.$locale = function() {
								return S[this.$L]
							}, m.locale = function(e, t) {
								if (!e) return this.$L;
								var r = this.clone(),
									n = k(e, t, !0);
								return n && (r.$L = n), r
							}, m.clone = function() {
								return x.w(this.$d, this)
							}, m.toDate = function() {
								return new Date(this.valueOf())
							}, m.toJSON = function() {
								return this.isValid() ? this.toISOString() : null
							}, m.toISOString = function() {
								return this.$d.toISOString()
							}, m.toString = function() {
								return this.$d.toUTCString()
							}, g
						}(),
						O = _.prototype;
					return $.prototype = O, [
						["$ms", n],
						["$s", i],
						["$m", o],
						["$H", a],
						["$W", s],
						["$M", c],
						["$y", f],
						["$D", h]
					].forEach((function(e) {
						O[e[1]] = function(t) {
							return this.$g(t, e[0], e[1])
						}
					})), $.extend = function(e, t) {
						return e.$i || (e(t, _, $), e.$i = !0), $
					}, $.locale = k, $.isDayjs = w, $.unix = function(e) {
						return $(1e3 * e)
					}, $.en = S[b], $.Ls = S, $.p = {}, $
				}()
			},
			72408: (e, t, r) => {
				"use strict";
				var n = r(27418),
					i = "function" == typeof Symbol && Symbol.for,
					o = i ? Symbol.for("react.element") : 60103,
					a = i ? Symbol.for("react.portal") : 60106,
					s = i ? Symbol.for("react.fragment") : 60107,
					u = i ? Symbol.for("react.strict_mode") : 60108,
					c = i ? Symbol.for("react.profiler") : 60114,
					l = i ? Symbol.for("react.provider") : 60109,
					f = i ? Symbol.for("react.context") : 60110,
					h = i ? Symbol.for("react.forward_ref") : 60112,
					d = i ? Symbol.for("react.suspense") : 60113,
					p = i ? Symbol.for("react.memo") : 60115,
					y = i ? Symbol.for("react.lazy") : 60116,
					g = "function" == typeof Symbol && Symbol.iterator;

				function m(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				}
				var v = {
						isMounted: function() {
							return !1
						},
						enqueueForceUpdate: function() {},
						enqueueReplaceState: function() {},
						enqueueSetState: function() {}
					},
					b = {};

				function S(e, t, r) {
					this.props = e, this.context = t, this.refs = b, this.updater = r || v
				}

				function w() {}

				function k(e, t, r) {
					this.props = e, this.context = t, this.refs = b, this.updater = r || v
				}
				S.prototype.isReactComponent = {}, S.prototype.setState = function(e, t) {
					if ("object" != typeof e && "function" != typeof e && null != e) throw Error(m(85));
					this.updater.enqueueSetState(this, e, t, "setState")
				}, S.prototype.forceUpdate = function(e) {
					this.updater.enqueueForceUpdate(this, e, "forceUpdate")
				}, w.prototype = S.prototype;
				var $ = k.prototype = new w;
				$.constructor = k, n($, S.prototype), $.isPureReactComponent = !0;
				var x = {
						current: null
					},
					_ = Object.prototype.hasOwnProperty,
					O = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function C(e, t, r) {
					var n, i = {},
						a = null,
						s = null;
					if (null != t)
						for (n in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t) _.call(t, n) && !O.hasOwnProperty(n) && (i[n] = t[n]);
					var u = arguments.length - 2;
					if (1 === u) i.children = r;
					else if (1 < u) {
						for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
						i.children = c
					}
					if (e && e.defaultProps)
						for (n in u = e.defaultProps) void 0 === i[n] && (i[n] = u[n]);
					return {
						$$typeof: o,
						type: e,
						key: a,
						ref: s,
						props: i,
						_owner: x.current
					}
				}

				function P(e) {
					return "object" == typeof e && null !== e && e.$$typeof === o
				}
				var I = /\/+/g,
					j = [];

				function T(e, t, r, n) {
					if (j.length) {
						var i = j.pop();
						return i.result = e, i.keyPrefix = t, i.func = r, i.context = n, i.count = 0, i
					}
					return {
						result: e,
						keyPrefix: t,
						func: r,
						context: n,
						count: 0
					}
				}

				function M(e) {
					e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > j.length && j.push(e)
				}

				function D(e, t, r, n) {
					var i = typeof e;
					"undefined" !== i && "boolean" !== i || (e = null);
					var s = !1;
					if (null === e) s = !0;
					else switch (i) {
						case "string":
						case "number":
							s = !0;
							break;
						case "object":
							switch (e.$$typeof) {
								case o:
								case a:
									s = !0
							}
					}
					if (s) return r(n, e, "" === t ? "." + R(e, 0) : t), 1;
					if (s = 0, t = "" === t ? "." : t + ":", Array.isArray(e))
						for (var u = 0; u < e.length; u++) {
							var c = t + R(i = e[u], u);
							s += D(i, c, r, n)
						} else if (null === e || "object" != typeof e ? c = null : c = "function" == typeof(c = g && e[g] || e["@@iterator"]) ? c : null, "function" == typeof c)
							for (e = c.call(e), u = 0; !(i = e.next()).done;) s += D(i = i.value, c = t + R(i, u++), r, n);
						else if ("object" === i) throw r = "" + e, Error(m(31, "[object Object]" === r ? "object with keys {" + Object.keys(e).join(", ") + "}" : r, ""));
					return s
				}

				function E(e, t, r) {
					return null == e ? 0 : D(e, "", t, r)
				}

				function R(e, t) {
					return "object" == typeof e && null !== e && null != e.key ? function(e) {
						var t = {
							"=": "=0",
							":": "=2"
						};
						return "$" + ("" + e).replace(/[=:]/g, (function(e) {
							return t[e]
						}))
					}(e.key) : t.toString(36)
				}

				function F(e, t) {
					e.func.call(e.context, t, e.count++)
				}

				function U(e, t, r) {
					var n = e.result,
						i = e.keyPrefix;
					e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? z(e, n, r, (function(e) {
						return e
					})) : null != e && (P(e) && (e = function(e, t) {
						return {
							$$typeof: o,
							type: e.type,
							key: t,
							ref: e.ref,
							props: e.props,
							_owner: e._owner
						}
					}(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(I, "$&/") + "/") + r)), n.push(e))
				}

				function z(e, t, r, n, i) {
					var o = "";
					null != r && (o = ("" + r).replace(I, "$&/") + "/"), E(e, U, t = T(t, o, n, i)), M(t)
				}
				var A = {
					current: null
				};

				function W() {
					var e = A.current;
					if (null === e) throw Error(m(321));
					return e
				}
				var B = {
					ReactCurrentDispatcher: A,
					ReactCurrentBatchConfig: {
						suspense: null
					},
					ReactCurrentOwner: x,
					IsSomeRendererActing: {
						current: !1
					},
					assign: n
				};
				t.Children = {
					map: function(e, t, r) {
						if (null == e) return e;
						var n = [];
						return z(e, n, null, t, r), n
					},
					forEach: function(e, t, r) {
						if (null == e) return e;
						E(e, F, t = T(null, null, t, r)), M(t)
					},
					count: function(e) {
						return E(e, (function() {
							return null
						}), null)
					},
					toArray: function(e) {
						var t = [];
						return z(e, t, null, (function(e) {
							return e
						})), t
					},
					only: function(e) {
						if (!P(e)) throw Error(m(143));
						return e
					}
				}, t.Component = S, t.Fragment = s, t.Profiler = c, t.PureComponent = k, t.StrictMode = u, t.Suspense = d, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, t.cloneElement = function(e, t, r) {
					if (null == e) throw Error(m(267, e));
					var i = n({}, e.props),
						a = e.key,
						s = e.ref,
						u = e._owner;
					if (null != t) {
						if (void 0 !== t.ref && (s = t.ref, u = x.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
						for (l in t) _.call(t, l) && !O.hasOwnProperty(l) && (i[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l])
					}
					var l = arguments.length - 2;
					if (1 === l) i.children = r;
					else if (1 < l) {
						c = Array(l);
						for (var f = 0; f < l; f++) c[f] = arguments[f + 2];
						i.children = c
					}
					return {
						$$typeof: o,
						type: e.type,
						key: a,
						ref: s,
						props: i,
						_owner: u
					}
				}, t.createContext = function(e, t) {
					return void 0 === t && (t = null), (e = {
						$$typeof: f,
						_calculateChangedBits: t,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null
					}).Provider = {
						$$typeof: l,
						_context: e
					}, e.Consumer = e
				}, t.createElement = C, t.createFactory = function(e) {
					var t = C.bind(null, e);
					return t.type = e, t
				}, t.createRef = function() {
					return {
						current: null
					}
				}, t.forwardRef = function(e) {
					return {
						$$typeof: h,
						render: e
					}
				}, t.isValidElement = P, t.lazy = function(e) {
					return {
						$$typeof: y,
						_ctor: e,
						_status: -1,
						_result: null
					}
				}, t.memo = function(e, t) {
					return {
						$$typeof: p,
						type: e,
						compare: void 0 === t ? null : t
					}
				}, t.useCallback = function(e, t) {
					return W().useCallback(e, t)
				}, t.useContext = function(e, t) {
					return W().useContext(e, t)
				}, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
					return W().useEffect(e, t)
				}, t.useImperativeHandle = function(e, t, r) {
					return W().useImperativeHandle(e, t, r)
				}, t.useLayoutEffect = function(e, t) {
					return W().useLayoutEffect(e, t)
				}, t.useMemo = function(e, t) {
					return W().useMemo(e, t)
				}, t.useReducer = function(e, t, r) {
					return W().useReducer(e, t, r)
				}, t.useRef = function(e) {
					return W().useRef(e)
				}, t.useState = function(e) {
					return W().useState(e)
				}, t.version = "16.14.0"
			},
			67294: (e, t, r) => {
				"use strict";
				e.exports = r(72408)
			},
			5519: (e, t, r) => {
				"use strict";
				var n = r(67294),
					i = r(73935),
					o = r(94184),
					a = r.n(o),
					s = ["callout", "list"],
					u = r(9266),
					c = r(84334),
					l = r(85893);

				function f(e) {
					return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, f(e)
				}

				function h(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (i = n.key, o = void 0, o = function(e, t) {
							if ("object" !== f(e) || null === e) return e;
							var r = e[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(e, t || "default");
								if ("object" !== f(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(i, "string"), "symbol" === f(o) ? o : String(o)), n)
					}
					var i, o
				}

				function d(e, t) {
					return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
						return e.__proto__ = t, e
					}, d(e, t)
				}

				function p(e) {
					var t = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (e) {
							return !1
						}
					}();
					return function() {
						var r, n = g(e);
						if (t) {
							var i = g(this).constructor;
							r = Reflect.construct(n, arguments, i)
						} else r = n.apply(this, arguments);
						return function(e, t) {
							if (t && ("object" === f(t) || "function" == typeof t)) return t;
							if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
							return y(e)
						}(this, r)
					}
				}

				function y(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function g(e) {
					return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, g(e)
				}
				chrome.extension.getBackgroundPage();
				const m = function(e) {
					! function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0
							}
						}), Object.defineProperty(e, "prototype", {
							writable: !1
						}), t && d(e, t)
					}(f, e);
					var t, r, i, o = p(f);

					function f(e) {
						var t;
						return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, f), (t = o.call(this, e)).outerContainer = (0, n.createRef)(), t.container = (0, n.createRef)(), t.doodleCanvas = (0, n.createRef)(), t.layerCanvas = (0, n.createRef)(), t.textareaOut = (0, n.createRef)(), t.textarea = (0, n.createRef)(), t.listDialog = (0, n.createRef)(), t.fileInput = (0, n.createRef)(), t.state = {
							isInCropMode: !1,
							currentTool: "",
							currentColor: "rgb(255, 0, 0)",
							currentPenWidth: 4,
							currentFontSize: 32,
							currentFontFamily: "Times New Roman",
							cropWidth: 0,
							cropHeight: 0,
							resizeWidth: 0,
							resizeHeight: 0,
							resizeProportional: !0,
							currentScale: 1,
							canUndo: !1,
							canRedo: !1,
							canClear: !1,
							canDeleteSelected: !0,
							isShownUpgrade: !1,
							isReady: !1,
							upgradeType: "",
							isTextBackground: !1,
							isPremium: !1,
							currentShape: "",
							changeShape: !1
						}, t.handleFileInputChange = t.handleFileInputChange.bind(y(t)), t.editor_style_callback = t.editor_style_callback.bind(y(t)), t.initEditor = t.initEditor.bind(y(t)), t.insertImage = t.insertImage.bind(y(t)), t.finishEdit = t.finishEdit.bind(y(t)), t.handleKeyDown = t.handleKeyDown.bind(y(t)), t.handleCloseUpgrade = t.handleCloseUpgrade.bind(y(t)), t.handleTextBgChange = t.handleTextBgChange.bind(y(t)), t.handleResetList = t.handleResetList.bind(y(t)), t.getQueryVariable = t.getQueryVariable.bind(y(t)), t
					}
					return t = f, (r = [{
						key: "componentDidMount",
						value: function() {
							this.initEditor(this.props.imageUrl), document.addEventListener("keydown", this.handleKeyDown), this.props.onRef(this), document.querySelector("#canvas2") && document.querySelector("#canvas2").addEventListener("contextmenu", (function(e) {
								e.preventDefault()
							}))
						}
					}, {
						key: "handleDrawStyle",
						value: function(e) {
							var t = this;
							if ("undo" === e.type) this.state.isReady && this.editor.undo();
							else if ("premiumPlan" === e.type) this.setState({
								isPremium: !e.value
							});
							else if ("clear" === e.type) this.editor.clear();
							else if ("deleteSelected" === e.type) this.state.isReady && this.editor.deleteSelected();
							else if ("save" === e.type)
								if ("true" == this.getQueryVariable("incognito")) {
									var r = this.editor.getImageDataURL(this.props.contentType);
									this.props.handleFinishEdit(e.type, r)
								} else this.editor.getImageDataBlob(this.props.contentType, (function(r) {
									t.props.handleFinishEdit(e.type, r)
								}));
							else if ("copy" === e.type) this.editor.getImageDataBlob(this.props.contentType, (function(r) {
								t.props.handleFinishEdit(e.type, r)
							}));
							else if ("ocr" === e.type) r = this.editor.getImageDataURL("image/png"), chrome.runtime.sendMessage({
								action: "sendSider",
								data: r
							}, (function() {
								chrome.runtime.lastError
							}));
							else if ("style" === e.type) {
								var n = e.shape,
									i = e.style;
								if (this.state.isReady)
									if (this.state.currentShape.length > 0 && this.state.currentShape !== n && (this.setState({
											changeShape: !0
										}), this.editor.unSelectAll()), "insertImage" === n) {
										if (!this.state.isPremium) return void this.setState({
											upgradeType: "insertImage",
											isShownUpgrade: !0
										});
										i.name && this.insertImage(i.name)
									} else if ("image" === n) {
									if (!this.state.isPremium) return void this.setState({
										upgradeType: "image",
										isShownUpgrade: !0
									});
									if (i.name) {
										var o = "./images/svg/" + i.name + ".svg";
										this.insertImage(o)
									}
								} else {
									if (!this.state.isPremium && ("callout" == n || "list" == n)) return void this.setState({
										upgradeType: n,
										isShownUpgrade: !0
									});
									if (this.editor.setPenType(n), "rect_blur" !== n) {
										var a = e.changeType;
										2 == a ? i.color && this.editor.setPenColor(i.color) : (3 == a || i.color && this.editor.setPenColor(i.color), "text" !== n && "callout" !== n ? i.width && this.editor.setPenWidth(i.width) : i.width && (this.editor.setFontSize(i.width), this.editor.setPenWidth(4)))
									}
								} else {
									if (!this.state.isPremium && ("callout" == n || "list" == n || "image" == n || "insertImage" == n)) return void this.setState({
										upgradeType: n,
										isShownUpgrade: !0
									});
									"image" !== n && "insertImage" !== n && this.setState({
										currentTool: n
									}), i.color && this.setState({
										currentColor: i.color
									}), "text" !== n && "callout" !== n ? i.width && this.setState({
										currentPenWidth: i.width
									}) : i.width && this.setState({
										currentPenWidth: 4,
										currentFontSize: i.width
									})
								}
							}
						}
					}, {
						key: "componentDidUpdate",
						value: function(e) {
							e.imageUrl !== this.props.imageUrl && "" === e.imageUrl && this.initEditor(this.props.imageUrl)
						}
					}, {
						key: "componentWillUnmount",
						value: function() {
							document.removeEventListener("keydown", this.handleKeyDown), this.editor = null
						}
					}, {
						key: "handleKeyDown",
						value: function(e) {
							var t = e.keyCode;
							if (-1 !== this.props.className.indexOf("active"))
								if (90 === t && (e.ctrlKey || e.metaKey)) e.shiftKey ? this.editor.redo() : this.editor.undo();
								else if ((46 === t || 8 === t) && this.state.canDeleteSelected) {
								if (e.target.classList.contains("editor-textarea")) return;
								this.editor.deleteSelected()
							}
						}
					}, {
						key: "handleCloseUpgrade",
						value: function() {
							this.setState({
								isShownUpgrade: !1
							});
							var e = this.getQueryVariable("mark");
							window.parent.postMessage({
								type: "closeModel",
								mark: e,
								data: "closeModel"
							}, "*")
						}
					}, {
						key: "finishEdit",
						value: function(e, t) {}
					}, {
						key: "handleResetList",
						value: function() {
							this.editor.resetList()
						}
					}, {
						key: "handleTextBgChange",
						value: function() {
							this.editor.setTextBackground(!this.state.isTextBackground), this.setState({
								isTextBackground: !this.state.isTextBackground
							})
						}
					}, {
						key: "handleResizeProportionChange",
						value: function(e) {
							this.setState({
								resizeProportional: e.target.checked
							})
						}
					}, {
						key: "handleResizeInputChange",
						value: function(e, t) {
							var r = this.editor.bg_info.width / this.editor.bg_info.height;
							"width" === e ? !0 === this.state.resizeProportional ? this.setState({
								resizeWidth: parseInt(t.target.value),
								resizeHeight: parseInt(t.target.value) / r
							}) : this.setState({
								resizeWidth: parseInt(t.target.value)
							}) : !0 === this.state.resizeProportional ? this.setState({
								resizeWidth: parseInt(t.target.value) * r,
								resizeHeight: parseInt(t.target.value)
							}) : this.setState({
								resizeHeight: parseInt(t.target.value)
							})
						}
					}, {
						key: "getResizeInfo",
						value: function() {
							var e = this.editor.bg_info;
							this.setState({
								resizeHeight: parseInt(e.height),
								resizeWidth: parseInt(e.width)
							})
						}
					}, {
						key: "handleFileInputChange",
						value: function(e) {
							var t = e.target.files[0],
								r = URL.createObjectURL(t);
							this.insertImage(r)
						}
					}, {
						key: "editor_style_callback",
						value: function(e, t) {
							var r = this.getQueryVariable("mark");
							if ("selected" == e) {
								if (t) {
									var n = "";
									switch (t.shape) {
										case 1:
											n = "curve";
											break;
										case 3:
											n = "rect";
											break;
										case 4:
											n = "ellipse";
											break;
										case 7:
											n = "callout";
											break;
										case 30:
											n = "image";
											break;
										case 8:
											n = "list";
											break;
										case 23:
										case 20:
										case 2:
											n = "line_arrow";
											break;
										case 5:
											n = "rect_blur";
											break;
										case 80:
											n = "text"
									}
									this.setState({
										currentShape: n
									})
								} else this.setState({
									currentShape: ""
								});
								if (this.state.changeShape) return void this.setState({
									changeShape: !1
								})
							}
							window.parent.postMessage({
								type: e,
								mark: r,
								data: t
							}, "*")
						}
					}, {
						key: "getQueryVariable",
						value: function(e) {
							var t = new URLSearchParams(window.location.search).get(e);
							return t || !1
						}
					}, {
						key: "initEditor",
						value: function(e) {
							if (e) {
								this.container.current.style.position = "absolute", this.container.current.style.setProperty("top", this.getQueryVariable("ct") + "px", "important"), this.container.current.style.left = this.getQueryVariable("cl") + "px";
								var t = this,
									r = new Image;
								this.editor = new c.Z({
									out_container: this.outerContainer.current,
									container: this.container.current,
									doodle_canvas: this.doodleCanvas.current,
									layer_canvas: this.layerCanvas.current,
									textarea: this.textarea.current,
									textarea_out: this.textareaOut.current,
									$list_dialog: this.listDialog.current,
									image: r
								}, (function(e, r) {
									t.editor_style_callback(e, r)
								})), r.src = e, r.onload = function() {
									t.editor.setBgImage(r, !1), t.editor.setPenColor(t.state.currentColor), t.state.currentTool.length > 0 && t.editor.setPenType(t.state.currentTool), t.editor.setFontSize(t.state.currentFontSize), t.editor.setPenWidth(t.state.currentPenWidth), t.editor.setFontName(t.state.currentFontFamily), t.editor.setBlurRadius(30), t.setState({
										isReady: !0
									})
								}
							}
						}
					}, {
						key: "insertImage",
						value: function(e) {
							var t = this,
								r = new Image;
							r.src = e;
							var n = {
								image: r,
								width: 0,
								height: 0,
								choose_type: "full"
							};
							r.img_info = n, r.onload = function() {
								n.width = this.naturalWidth, n.height = this.naturalHeight, t.editor.insertSvgImage(n)
							}
						}
					}, {
						key: "handleToolBarBtnClick",
						value: function(e, t) {
							var r = this.editor;
							if ("shape" === e) {
								if (-1 !== s.indexOf(t) && !this.props.permissions.allowAdvancedToolForImageEditor) return void this.setState({
									upgradeType: t,
									isShownUpgrade: !0
								});
								"highlight" == t ? (r.unSelectAll(), r.setPenOpacity(.3), r.setPenWidth(16), r.setPenType("highlight")) : (r.setPenOpacity(1), r.setPenWidth(this.state.currentPenWidth), r.setPenType(t)), this.setState({
									currentTool: t
								})
							} else if ("action" === e) switch (t.actionType) {
								case "crop":
									this.setState({
										isInCropMode: !0
									}), r.cutImage();
									break;
								case "changeColor":
									this.setState({
										currentColor: t.value
									}), r.setPenColor(t.value), localStorage["pen-color"] = t.value;
									break;
								case "changePenWidth":
									this.setState({
										currentPenWidth: t.value
									}), r.setPenWidth(parseInt(t.value)), localStorage["pen-width"] = t.value;
									break;
								case "changeFontSize":
									this.setState({
										currentFontSize: t.value
									}), r.setFontSize(parseInt(t.value)), localStorage["font-size"] = t.value;
									break;
								case "changeFontFamily":
									this.setState({
										currentFontFamily: t.value
									}), r.setFontName(t.value), localStorage["font-family"] = t.value;
									break;
								case "zoom-in":
									if (2 !== this.state.currentScale) {
										var n = this.state.currentScale + .25;
										r.setScale(n), this.setState({
											currentScale: n,
											isShowScaleTip: !0
										})
									}
									break;
								case "zoom-out":
									.25 !== this.state.currentScale && (n = this.state.currentScale - .25, r.setScale(n), this.setState({
										currentScale: n,
										isShowScaleTip: !0
									}));
									break;
								case "resetScale":
									r.setScale(1), this.setState({
										currentScale: 1,
										isShowScaleTip: !1
									});
									break;
								case "crop-demension-width":
									this.setState({
										cropWidth: parseInt(t.value)
									}, (function() {
										r.setCropSize(this.state.cropWidth, this.state.cropHeight)
									}));
									break;
								case "crop-demension-height":
									this.setState({
										cropHeight: parseInt(t.value)
									}, (function() {
										r.setCropSize(this.state.cropWidth, this.state.cropHeight)
									}));
									break;
								case "leaveCrop":
									this.setState({
										isInCropMode: !1,
										cropWidth: 0,
										cropHeight: 0
									}), r.finishCutImage(!1);
									break;
								case "doCrop":
									r.finishCutImage(!0), this.setState({
										isInCropMode: !1,
										cropWidth: 0,
										cropHeight: 0
									});
									break;
								case "insert-image":
									if (!this.props.permissions.allowAdvancedToolForImageEditor) return void this.setState({
										upgradeType: "insertImage",
										isShownUpgrade: !0
									});
									this.fileInput.current.click();
									break;
								case "doInsertImage":
									if (!this.props.permissions.allowAdvancedToolForImageEditor) return void this.setState({
										upgradeType: "image",
										isShownUpgrade: !0
									});
									var i = "./images/svg/" + t.value + ".svg";
									this.insertImage(i);
									break;
								case "doResize":
									r.setImageSize(this.state.resizeWidth, this.state.resizeHeight);
									break;
								default:
									r[t.actionType]()
							}
						}
					}, {
						key: "render",
						value: function() {
							var e = this.state,
								t = e.isShownUpgrade,
								r = (e.isReady, a()("editor", this.props.className));
							return (0, l.jsxs)("div", {
								className: r,
								tabIndex: "0",
								children: [(0, l.jsx)("input", {
									type: "file",
									className: "file-input",
									ref: this.fileInput,
									accept: ".jpg,.jpeg,.png",
									onChange: this.handleFileInputChange
								}), (0, l.jsx)("div", {
									className: "editor-outer-container",
									tabIndex: "0",
									id: "editor-outer-container",
									ref: this.outerContainer,
									children: (0, l.jsxs)("div", {
										className: "editor-container",
										ref: this.container,
										children: [(0, l.jsx)("canvas", {
											className: "doodle-canvas",
											id: "canvas",
											ref: this.doodleCanvas
										}), (0, l.jsx)("canvas", {
											className: "layer-canvas",
											id: "canvas2",
											ref: this.layerCanvas
										}), (0, l.jsx)("div", {
											className: "editor-outer-textarea",
											ref: this.textareaOut,
											children: (0, l.jsx)("textarea", {
												className: "editor-textarea",
												ref: this.textarea
											})
										}), (0, l.jsxs)("div", {
											className: "editor-list-dialog",
											ref: this.listDialog,
											children: ["Number:", (0, l.jsx)("input", {
												type: "number"
											})]
										})]
									})
								}), (0, l.jsx)(u.Z, {
									visible: t,
									onCancel: this.handleCloseUpgrade,
									type: this.state.upgradeType
								})]
							})
						}
					}]) && h(t.prototype, r), i && h(t, i), Object.defineProperty(t, "prototype", {
						writable: !1
					}), f
				}(n.PureComponent);

				function v(e) {
					return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, v(e)
				}

				function b(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (i = n.key, o = void 0, o = function(e, t) {
							if ("object" !== v(e) || null === e) return e;
							var r = e[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(e, t || "default");
								if ("object" !== v(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(i, "string"), "symbol" === v(o) ? o : String(o)), n)
					}
					var i, o
				}

				function S(e, t) {
					return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
						return e.__proto__ = t, e
					}, S(e, t)
				}

				function w(e) {
					var t = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (e) {
							return !1
						}
					}();
					return function() {
						var r, n = $(e);
						if (t) {
							var i = $(this).constructor;
							r = Reflect.construct(n, arguments, i)
						} else r = n.apply(this, arguments);
						return function(e, t) {
							if (t && ("object" === v(t) || "function" == typeof t)) return t;
							if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
							return k(e)
						}(this, r)
					}
				}

				function k(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function $(e) {
					return $ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, $(e)
				}
				var x = chrome.extension.getBackgroundPage(),
					_ = function(e) {
						return "jpg" === e ? "image/jpeg" : "image/png"
					},
					O = function(e) {
						! function(e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
							e.prototype = Object.create(t && t.prototype, {
								constructor: {
									value: e,
									writable: !0,
									configurable: !0
								}
							}), Object.defineProperty(e, "prototype", {
								writable: !1
							}), t && S(e, t)
						}(o, e);
						var t, r, n, i = w(o);

						function o(e) {
							var t;
							return function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, o), (t = i.call(this, e)).onRef = function(e) {
								t.child = e
							}, t.state = {
								annotateImageUrl: "",
								saveImageUrl: "",
								imageBlob: null,
								contentType: "image/png",
								permissions: {},
								step: "edit"
							}, t.handleImageBlob = t.handleImageBlob.bind(k(t)), t.initEditor = t.initEditor.bind(k(t)), t.getQueryVariable = t.getQueryVariable.bind(k(t)), t.handleDrawStyleAction = t.handleDrawStyleAction, t
						}
						return t = o, (r = [{
							key: "handleDrawStyleAction",
							value: function(e) {
								this.child.handleDrawStyle(e)
							}
						}, {
							key: "initEditor",
							value: function(e) {
								if (e) {
									var t = {
										annotateImageUrl: e
									};
									this.setState(t)
								}
							}
						}, {
							key: "componentDidMount",
							value: function() {
								var e = this;
								window.addEventListener("message", (function(t) {
									"init" == t.data.type ? e.initEditor(t.data.dataUrl) : e.handleDrawStyleAction(t.data.data)
								}));
								var t = this.getQueryVariable("mark");
								window.parent.postMessage({
									type: "initIframe",
									mark: t
								}, "*")
							}
						}, {
							key: "componentWillUnmount",
							value: function() {
								document.removeEventListener("visibilitychange", (function() {})), window.removeEventListener("message")
							}
						}, {
							key: "handleImageBlob",
							value: function(e, t) {
								var r = this.getQueryVariable("mark");
								if ("copy" === e) window.parent.postMessage({
									type: "copy",
									mark: r,
									data: t
								}, "*");
								else if ("save" === e) {
									var n = this.getQueryVariable("incognito"),
										i = this.getQueryVariable("actionType");
									"true" == n ? chrome.runtime.sendMessage({
										action: "saveImage",
										data: t,
										actionType: i,
										format: _(this.getQueryVariable("format"))
									}, (function() {
										chrome.runtime.lastError
									})) : x ? x.saveAnnotatedImage(t, !0, i, _(this.getQueryVariable("format"))) : chrome.runtime.sendMessage({
										action: "saveImage",
										data: window.URL.createObjectURL(t),
										actionType: i,
										format: _(this.getQueryVariable("format"))
									}, (function() {
										chrome.runtime.lastError
									}))
								}
							}
						}, {
							key: "getQueryVariable",
							value: function(e) {
								for (var t = window.location.search.substring(1).split("&"), r = 0; r < t.length; r++) {
									var n = t[r].split("=");
									if (n[0] == e) return n[1]
								}
								return !1
							}
						}, {
							key: "render",
							value: function() {
								var e = a()("sub-page", {
									active: "edit" === this.state.step
								});
								return this.state.saveImageUrl || this.state.annotateImageUrl ? (0, l.jsx)(m, {
									imageUrl: this.state.annotateImageUrl,
									handleFinishEdit: this.handleImageBlob,
									permissions: this.state.permissions,
									className: e,
									type: "ext",
									contentType: _(this.getQueryVariable("format")),
									onRef: this.onRef
								}) : (0, l.jsx)("div", {
									className: "loading-page",
									children: (0, l.jsx)("div", {
										className: "center"
									})
								})
							}
						}]) && b(t.prototype, r), n && b(t, n), Object.defineProperty(t, "prototype", {
							writable: !1
						}), o
					}(n.Component);
				i.render((0, l.jsx)(O, {}), document.getElementById("edit-page"))
			}
		},
		i = {};

	function o(e) {
		var t = i[e];
		if (void 0 !== t) return t.exports;
		var r = i[e] = {
			exports: {}
		};
		return n[e].call(r.exports, r, r.exports, o), r.exports
	}
	o.m = n, e = [], o.O = (t, r, n, i) => {
		if (!r) {
			var a = 1 / 0;
			for (l = 0; l < e.length; l++) {
				for (var [r, n, i] = e[l], s = !0, u = 0; u < r.length; u++)(!1 & i || a >= i) && Object.keys(o.O).every((e => o.O[e](r[u]))) ? r.splice(u--, 1) : (s = !1, i < a && (a = i));
				if (s) {
					e.splice(l--, 1);
					var c = n();
					void 0 !== c && (t = c)
				}
			}
			return t
		}
		i = i || 0;
		for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
		e[l] = [r, n, i]
	}, o.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return o.d(t, {
			a: t
		}), t
	}, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, o.t = function(e, n) {
		if (1 & n && (e = this(e)), 8 & n) return e;
		if ("object" == typeof e && e) {
			if (4 & n && e.__esModule) return e;
			if (16 & n && "function" == typeof e.then) return e
		}
		var i = Object.create(null);
		o.r(i);
		var a = {};
		t = t || [null, r({}), r([]), r(r)];
		for (var s = 2 & n && e;
			"object" == typeof s && !~t.indexOf(s); s = r(s)) Object.getOwnPropertyNames(s).forEach((t => a[t] = () => e[t]));
		return a.default = () => e, o.d(i, a), i
	}, o.d = (e, t) => {
		for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: t[r]
		})
	}, o.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, (() => {
		var e;
		o.g.importScripts && (e = o.g.location + "");
		var t = o.g.document;
		if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
			var r = t.getElementsByTagName("script");
			r.length && (e = r[r.length - 1].src)
		}
		if (!e) throw new Error("Automatic publicPath is not supported in this browser");
		e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e + "../../"
	})(), (() => {
		var e = {
			512: 0
		};
		o.O.j = t => 0 === e[t];
		var t = (t, r) => {
				var n, i, [a, s, u] = r,
					c = 0;
				if (a.some((t => 0 !== e[t]))) {
					for (n in s) o.o(s, n) && (o.m[n] = s[n]);
					if (u) var l = u(o)
				}
				for (t && t(r); c < a.length; c++) i = a[c], o.o(e, i) && e[i] && e[i][0](), e[i] = 0;
				return o.O(l)
			},
			r = self.webpackChunkawesomescreenshot_extension = self.webpackChunkawesomescreenshot_extension || [];
		r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
	})(), o.O(void 0, [775, 799, 431, 441, 981, 462, 172], (() => o(32082)));
	var a = o.O(void 0, [775, 799, 431, 441, 981, 462, 172], (() => o(5519)));
	a = o.O(a)
})();