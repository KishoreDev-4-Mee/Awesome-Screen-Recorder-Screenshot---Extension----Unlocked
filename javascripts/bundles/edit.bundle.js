(() => {
	"use strict";
	var e, t, n, r, i, a = {
			67348: (e, t, n) => {
				var r = n(73935),
					i = (n(81211), n(2214)),
					a = (n(89255), n(38648)),
					o = (n(28727), n(55026)),
					s = n(67294),
					c = (n(4765), n(99177)),
					l = (n(2269), n(12028)),
					u = (n(84239), n(9676)),
					h = (n(91886), n(45777)),
					d = n(85907),
					f = n(9669),
					p = n.n(f);

				function m(e, t, n) {
					function r(e) {
						return e.charCodeAt(0)
					}
					t = t || "", n = n || 1024;
					for (var i = atob(e), a = [], o = 0; o < i.length; o += n) {
						var s = i.slice(o, o + n),
							c = Array.prototype.map.call(s, r),
							l = new Uint8Array(c);
						a.push(l)
					}
					return new Blob(a, {
						type: t
					})
				}

				function g(e, t, n, r) {
					var i = {
						version: 1,
						type: "doc",
						content: []
					};
					if (e && e.length && i.content.push({
							type: "paragraph",
							content: [{
								type: "text",
								text: e
							}]
						}), i.content.push({
							type: "rule"
						}), t)
						for (var a in t) {
							var o = {
								type: "paragraph",
								content: [{
									type: "text",
									text: a + ":",
									marks: [{
										type: "strong"
									}]
								}, {
									type: "text",
									text: " " + t[a]
								}]
							};
							i.content.push(o)
						}
					return n && (i.content.push({
						type: "paragraph",
						content: [{
							type: "text",
							text: "video" === r ? "Click the link below to watch the video:" : "Click the link below to see the image:"
						}]
					}), i.content.push({
						type: "paragraph",
						content: [{
							type: "text",
							text: n,
							marks: [{
								type: "link",
								attrs: {
									href: n,
									title: n
								}
							}]
						}]
					})), i
				}

				function v(e) {
					return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
				}

				function y(e) {
					return JSON.stringify(e).replace(/[\u007f-\uffff]/g, (function(e) {
						return "\\u" + ("000" + e.charCodeAt(0).toString(16)).slice(-4)
					}))
				}

				function b(e) {
					function t(e) {
						return new Promise((function(t, n) {
							var r = new Image;
							r.crossOrigin = "Anonymous", r.onload = function() {
								t({
									ele: r,
									height: r.height,
									width: r.width
								})
							}, r.onerror = r.onabort = function() {
								n(e)
							}, r.src = e
						}))
					}
					for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r]));
					return Promise.all(n)
				}

				function w(e) {
					var t = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
						n = (t && t[4] || "").trim(),
						r = t ? (256 | t[1]).toString(16).slice(1) + (256 | t[2]).toString(16).slice(1) + (256 | t[3]).toString(16).slice(1) : e;
					return "" !== n ? n > 1 ? 1 : n : 1, "transparent" === e ? "0000000" : r
				}

				function x(e) {
					return new Promise((function(t) {
						var n = window.URL.createObjectURL(e),
							r = document.createElement("img"),
							i = document.createElement("canvas"),
							a = i.getContext("2d");
						r.onload = function() {
							i.width = r.width, i.height = r.height, a.drawImage(r, 0, 0), i.toBlob((function(e) {
								t(e)
							}))
						}, r.src = n
					}))
				}

				function S(e, t, n) {
					navigator.clipboard.write([new ClipboardItem(Object.defineProperty({}, e.type, {
						value: e,
						enumerable: !0
					}))]).then(t, n)
				}

				function j(e, t, n, r) {
					var i = document.createElement("canvas"),
						a = i.getContext("2d"),
						o = t.height,
						s = t.width,
						c = 0,
						l = 0,
						u = 0,
						h = null,
						d = t.border.borderType;
					t.border.paddingSize > 0 && (c = t.border.paddingSize, h = t.border.paddingColor, l += c, u += c, o += 2 * c, s += 2 * c), i.width = s, d && (o += t.border.height, i.height = o, "url_bottom" !== d && (u += t.border.height)), i.height = o, h && (a.save(), a.fillStyle = h, a.fillRect(0, 0, i.width, i.height), a.restore(), c > 0 && (a.shadowOffsetX = 4 * window.devicePixelRatio, a.shadowOffsetY = 4 * window.devicePixelRatio, a.shadowBlur = 4 * window.devicePixelRatio, a.shadowColor = "rgba(0,0,0,.15)"));
					var f = URL.createObjectURL(e);
					if ("mac" === d || "windows" === d)(function(e, t, n) {
						return new Promise((function(r) {
							if (e) {
								var i, a = t.paddingSize ? t.paddingSize : 0,
									o = "mac" === t.borderType ? "mac" : "win",
									s = "web" == n ? "/static/images/" : "./images/",
									c = s + o + "-header-left.png",
									l = s + o + "-header-center.png",
									u = s + o + "-header-right.png",
									h = e.width;
								b([c, l, u]).then((function(n) {
									var s = e.getContext("2d"),
										c = a;
									if (i = h - t.left - t.right - 2 * a, n.forEach((function(e, n) {
											var o;
											1 === n ? o = i : 0 === n ? o = t.left : 2 === n && (o = t.right), s.drawImage(e.ele, 0, 0, e.width, e.height, c, a, o, t.height), c += o, 2 === n && r()
										})), t.url)
										if (s.font = 13 * window.devicePixelRatio + "px Arial", s.fillStyle = "#000000", s.measureText(t.url).width > i) {
											var l = N(s, t.url, i);
											s.fillText(l, 140 * window.devicePixelRatio + a, ("mac" === o ? 66 : 70) * window.devicePixelRatio + a)
										} else s.fillText(t.url, 140 * window.devicePixelRatio + a, ("mac" === o ? 66 : 70) * window.devicePixelRatio + a);
									if (t.captureTime) {
										s.font = 12 * window.devicePixelRatio + "px sans-serif", s.fillStyle = "#000000";
										var u = s.measureText(t.captureTime).width,
											d = h - a - 10 * window.devicePixelRatio - u,
											f = "mac" === o ? 34 * window.devicePixelRatio + a : 39 * window.devicePixelRatio + a;
										s.fillText(t.captureTime, d, f)
									}
								}))
							}
						}))
					})(i, t.border, n).then((function() {
						var e = document.createElement("img");
						e.onload = function() {
							a.drawImage(e, l, u);
							var t = "png" === localStorage.format ? "image/png" : "image/jpeg";
							i.toBlob((function(e) {
								r(e)
							}), t, 1)
						}, e.src = f
					}));
					else {
						! function(e, t, n) {
							if (!(Object.keys(t).indexOf("url") < 0)) {
								var r = e.getContext("2d"),
									i = "url_top" == t.borderType ? 0 : n,
									a = t.paddingSize ? t.paddingSize : 0,
									o = e.width - 20 - 2 * a,
									s = "Captured at: " + t.captureTime + (t.url && t.url.length ? "  URL: " + t.url : ""),
									c = "single",
									l = 40;
								if (r.font = "bold 24px Arial", r.measureText(s).width > o) {
									c = "multiple";
									var u = k(r, "URL:" + t.url, o);
									l = 40 * (u.length + 1)
								}
								if (r.fillStyle = "#000000", r.fillRect(a, i + a, e.width - 2 * a, l), r.restore(), r.fillStyle = "#ffffff", r.textBaseline = "top", r.strokeStyle = "#ffffff", r.font = "bold 24px Arial", "single" === c) r.fillText(s, 12 + a, 8 + i + a);
								else {
									r.fillText("Captured at:" + t.captureTime, 12 + a, 8 + i + a);
									for (var h = 0; h < u.length; h++) r.fillText(u[h], 12 + a, 8 + 40 * (h + 1) + i + a)
								}
							}
						}(i, t.border, t.height);
						var p = document.createElement("img");
						p.onload = function() {
							a.drawImage(p, l, u);
							var e = "png" === localStorage.format ? "image/png" : "image/jpeg";
							i.toBlob((function(e) {
								r(e)
							}), e, 1)
						}, p.src = f
					}
				}

				function N(e, t, n) {
					for (var r = t.split(""), i = r[0], a = 1; a < r.length; a++) {
						var o = r[a];
						if (!(e.measureText(i + " " + o).width < n)) break;
						i += o
					}
					return i + "..."
				}

				function k(e, t, n) {
					n -= 10;
					for (var r = t.split(""), i = [], a = r[0], o = 1; o < r.length; o++) {
						var s = r[o];
						e.measureText(a + " " + s).width < n ? a += s : (i.push(a), a = s)
					}
					return i.push(a), i
				}
				var A = n(94184),
					L = n.n(A),
					P = n(85893);

				function I(e) {
					return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, I(e)
				}

				function C(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return _(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function _(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}

				function O(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function T(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (i = r.key, a = void 0, a = function(e, t) {
							if ("object" !== I(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== I(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(i, "string"), "symbol" === I(a) ? a : String(a)), r)
					}
					var i, a
				}

				function D(e, t, n) {
					return t && T(e.prototype, t), n && T(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), e
				}

				function E(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), Object.defineProperty(e, "prototype", {
						writable: !1
					}), t && F(e, t)
				}

				function F(e, t) {
					return F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
						return e.__proto__ = t, e
					}, F(e, t)
				}

				function R(e) {
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
						var n, r = B(e);
						if (t) {
							var i = B(this).constructor;
							n = Reflect.construct(r, arguments, i)
						} else n = r.apply(this, arguments);
						return function(e, t) {
							if (t && ("object" === I(t) || "function" == typeof t)) return t;
							if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
							return M(e)
						}(this, n)
					}
				}

				function M(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function B(e) {
					return B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, B(e)
				}
				var U = ["rgba(255, 0, 0,1)", "rgba(255, 92, 0, 1)", "rgba(250, 255, 0, 1)", "rgba(36, 255, 0, 1)", "rgba(0, 255, 240, 1)", "rgba(0, 163, 255, 1)", "rgba(144, 75, 255, 1)", "rgba(255, 0, 229, 1)", "rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)", "rgba(244, 219, 121, 1)", "rgba(248, 202, 65, 1)", "rgba(246, 130, 61, 1)", "rgba(226, 90, 59, 1)", "rgba(242, 155, 126, 1)", "rgba(217, 72, 70, 1)", "rgba(160, 67, 72, 1)", "rgba(228, 123, 135, 1)", "rgba(198, 57, 69, 1)", "rgba(198, 69, 101, 1)", "rgba(165, 65, 90, 1)", "rgba(151, 55, 143, 1)", "rgba(112, 70, 140, 1)", "rgba(79, 74, 142, 1)", "rgba(94, 69, 128, 1)", "rgba(67, 84, 104, 1)", "rgba(34, 126, 169, 1)", "rgba(59, 77, 105, 1)", "rgba(47, 86, 165, 1)", "rgba(25, 104, 173, 1)", "rgba(72, 86, 145, 1)", "rgba(11, 123, 185, 1)", "rgba(74, 176, 209, 1)", "rgba(22, 140, 152, 1)", "rgba(22, 161, 134, 1)", "rgba(33, 143, 106, 1)", "rgba(45, 98, 90, 1)", "rgba(80, 111, 80, 1)", "rgba(93, 150, 73, 1)", "rgba(120, 120, 71, 1)", "transparent"],
					q = ["Times New Roman", "Arial", "Craft Girls", "OpenSans", "Roboto", "Montserrat", "Limelight", "Lobster", "Anton", "Chewy", "Frijole", "Spirax", "Dancing Script", "Changa One", "Griffy"],
					z = [2, 4, 6, 8, 16],
					Z = [6, 8, 16, 32, 48],
					H = function(e) {
						E(n, e);
						var t = R(n);

						function n(e) {
							return O(this, n), t.call(this, e)
						}
						return D(n, [{
							key: "shouldComponentUpdate",
							value: function(e) {
								return e.disabled !== this.props.disabled || this.props.allowAdvancedTool !== e.allowAdvancedTool
							}
						}, {
							key: "render",
							value: function() {
								var e = this.props,
									t = e.disabled,
									n = e.action,
									r = e.title,
									i = e.handleClick,
									a = L()("tool-btn single-btn", {
										disabled: t
									}),
									o = L()(this.props.allowAdvancedTool ? "" : "");
								return (0, P.jsx)(h.Z, {
									title: r,
									children: (0, P.jsx)("div", {
										className: a,
										"data-action": n,
										onClick: i.bind(this, "action", {
											actionType: n
										}),
										children: (0, P.jsx)("b", {
											className: o
										})
									})
								})
							}
						}]), n
					}(s.Component),
					G = function(e) {
						E(n, e);
						var t = R(n);

						function n(e) {
							var r;
							return O(this, n), (r = t.call(this, e)).state = {
								haveClickShape: !1
							}, r.clickShape = r.clickShape.bind(M(r)), r.visibleChange = r.visibleChange.bind(M(r)), r
						}
						return D(n, [{
							key: "shouldComponentUpdate",
							value: function(e, t) {
								return e.current !== this.props.current || this.props.allowAdvancedTool !== e.allowAdvancedTool || this.props.selectShape !== e.selectShape || this.state.haveClickShape !== t.haveClickShape
							}
						}, {
							key: "clickShape",
							value: function() {
								this.setState({
									haveClickShape: !1
								}), this.props.handleClick("shape", {
									shape: this.props.shape,
									shapeKey: this.props.shapeGroup
								})
							}
						}, {
							key: "visibleChange",
							value: function(e) {
								this.setState({
									haveClickShape: e
								})
							}
						}, {
							key: "render",
							value: function() {
								var e = this.props,
									t = e.current,
									n = e.shape,
									r = e.title,
									i = e.active,
									a = e.selectShape,
									o = !1;
								a ? a === n && (o = !0) : o = n === t || i;
								var s = L()("tool-btn single-btn " + n, {
										active: o
									}),
									c = L()(this.props.allowAdvancedTool ? "" : "");
         console.log('this.props :', this.props);
								return (0, P.jsx)(h.Z, {
									title: r,
									placement: "bottom",
									visible: this.state.haveClickShape,
									mouseEnterDelay: 0,
									mouseLeaveDelay: 0,
									onVisibleChange: this.visibleChange,
									children: (0, P.jsx)("div", {
										className: s,
										"data-shape": n,
										onClick: this.clickShape,
										children: (0, P.jsx)("b", {
											className: c
										})
									})
								})
							}
						}]), n
					}(s.Component);

				function V(e) {
					var t, n, r, i = e.current,
						a = e.defaultShape,
						o = e.handleClick,
						c = e.btns,
						l = e.allowAdvancedTool,
						u = e.selectShape,
						h = e.shapeGroup;
					(0, s.useEffect)((function() {}), [u]);
					return function() {
						var s;
						s = !1, c && c.forEach((function(e) {
							u ? e.shape == u && (s = !0, t = e.title, n = e.shape) : (e.shape === i && (s = !0), e.shape === a && (t = e.title, n = e.shape))
						})), u && !s && c.forEach((function(e) {
							e.shape === a && (t = e.title, n = e.shape)
						})), r = s;
						var d = L()("menu", {
							active: r
						});
						return (0, P.jsxs)("div", {
							className: "subMenu",
							children: [(0, P.jsx)(G, {
								title: t,
								shape: n,
								active: r,
								selectShape: u || "",
								current: i,
								shapeGroup: h,
								handleClick: o,
								onToolBar: !0,
								allowAdvancedTool: l
							}), (0, P.jsx)("div", {
								className: d,
								children: e.children()
							})]
						})
					}()
				}
				var W = s.memo(V, (function(e, t) {
						return t.currentShapeKey !== e.shapeGroup && e.currentShapeKey !== e.shapeGroup && e.allowAdvancedTool === t.allowAdvancedTool && e.currentShape === t.currentShape && e.defaultShape !== t.selectShape
					})),
					Y = s.memo(K, (function(e, t) {
						return e.currentColor === t.currentColor
					}));

				function K(e) {
					var t = this,
						n = e.recentColors,
						r = e.currentColor,
						i = e.stroke,
						a = e.handleColorClick,
						o = e.shapeKey,
						c = C((0, s.useState)(!0), 2),
						l = c[0],
						u = c[1],
						f = C((0, s.useState)(r), 2),
						p = f[0],
						m = f[1];

					function g(e) {
						return "rgb(239, 239, 239)" === e || "rgb(243, 243, 243)" === e || "rgb(255, 255, 255)" === e || "rgb(252, 229, 205)" === e || "rgb(255, 242, 204)" === e ? "#bdc1c6" : "transparent"
					}

					function v(e, t) {
						a(e, !!t), m(e)
					}
					return (0, s.useEffect)((function() {
						r !== p && m(r)
					}), [r]), (0, P.jsxs)(P.Fragment, {
						children: [(0, P.jsxs)("div", {
							className: "color-header",
							children: [(0, P.jsxs)("div", {
								className: "color-values",
								children: [(0, P.jsx)("div", {
									className: "color-icon",
									"data-color": p,
									style: {
										backgroundColor: p
									}
								}), (0, P.jsx)(d.ZE, {
									color: w(p),
									onChange: v,
									onClick: function(e) {
										e.target.select()
									},
									alpha: !0,
									prefixed: !0
								})]
							}), (0, P.jsx)(h.Z, {
								title: "More Colors",
								placement: "right",
								children: (0, P.jsx)("div", {
									className: "change-action",
									style: {
										backgroundColor: l ? "" : "#26272D"
									},
									onClick: function() {
										u(!l)
									}.bind(this),
									children: (0, P.jsx)("b", {})
								})
							})]
						}), (0, P.jsx)("div", {
							className: "color-content",
							children: l ? U.map((function(e, n) {
								return "transparent" !== e ? (0, P.jsx)("div", {
									className: "color-item",
									"data-color": e,
									title: e,
									style: {
										backgroundColor: e,
										borderColor: g(e)
									},
									onClick: v.bind(t, e, "item")
								}, o + e + n) : i ? (0, P.jsx)("div", {
									className: "color-item transparent",
									"data-color": "transparent",
									title: "transparent",
									style: {
										backgroundColor: "#666666",
										borderColor: g("transparent")
									},
									onClick: v.bind(t, "transparent", "item")
								}, "transparent" + o) : void 0
							})) : (0, P.jsx)(d.gW, {
								color: w(p),
								onChange: v
							})
						}), (0, P.jsxs)("div", {
							className: "color-foot",
							children: [(0, P.jsx)("span", {
								children: "Recent Colors"
							}), (0, P.jsx)("div", {
								className: "recent-colors",
								children: n.map((function(e, n) {
									return (0, P.jsx)("div", {
										className: "color-item recent-item",
										"data-color": e,
										title: e,
										style: {
											backgroundColor: e,
											borderColor: g(e)
										},
										onClick: v.bind(t, e, "item")
									}, e + o + n)
								}))
							})]
						})]
					})
				}

				function J(e) {
					var t = this,
						n = e.style,
						r = e.selectShape,
						i = e.shapeKey,
						a = e.clickItem,
						o = C((0, s.useState)(!1), 2),
						c = o[0],
						l = o[1],
						u = !1;
					if (n) var d = n.width;
					"highlight" !== i || n && n.width || (d = 16);
					var f = "highlight" === i;
					r && (d = r.penWidth, "highlight" === r.shapeName && (f = !0));
					var p = d;

					function m(e) {
						l((!e || !u) && e)
					}
					return (0, P.jsx)(Q, {
						className: "tool-pen-width multi-btn",
						children: function(e, n) {
							var r = L()("panel", {
								active: e.isExpand
							});
							e.isExpand && l(!1), u = e.isExpand;
							var o = function(e) {
								n(), p = e, a("action", {
									actionType: "changePenWidth",
									value: e,
									shapeKey: i
								})
							};
							return (0, P.jsxs)(P.Fragment, {
								children: [(0, P.jsx)(h.Z, {
									title: "Stroke width",
									placement: "bottom",
									visible: c,
									onVisibleChange: m,
									children: (0, P.jsxs)("div", {
										className: "current",
										id: "tool-current-width",
										"data-width": p || d,
										children: [(0, P.jsxs)("div", {
											className: "tool-current-width " + (f ? "highlight" : ""),
											children: [(0, P.jsx)("span", {
												children: p || d
											}), (0, P.jsx)("b", {})]
										}), (0, P.jsx)("div", {
											className: "multi-btn-arrow"
										})]
									})
								}), (0, P.jsx)("div", {
									className: r,
									children: f ? Z.map((function(e, n) {
										return (0, P.jsxs)("div", {
											className: "pen-width-item " + (e === p ? "checked" : ""),
											"data-width": n + 1,
											onClick: o.bind(t, e),
											children: [(0, P.jsx)("span", {
												children: e
											}), (0, P.jsx)("b", {})]
										}, e)
									})) : z.map((function(e, n) {
										return (0, P.jsxs)("div", {
											className: "pen-width-item " + (e === p ? "checked" : ""),
											"data-width": n + 1,
											onClick: o.bind(t, e),
											children: [(0, P.jsx)("span", {
												children: e
											}), (0, P.jsx)("b", {})]
										}, e)
									}))
								})]
							})
						}
					})
				}

				function X(e) {
					var t = this,
						n = e.style,
						r = e.selectShape,
						i = e.shapeKey,
						a = e.clickItem,
						o = C((0, s.useState)(!1), 2),
						c = o[0],
						l = o[1],
						u = !1,
						d = n.fontFamily;
					r && r.fontName && (d = r.fontName);
					var f = d;

					function p(e) {
						l((!e || !u) && e)
					}
					return (0, P.jsx)(Q, {
						className: "tool-font-family multi-btn",
						children: function(e, n) {
							var r = L()("panel", {
								active: e.isExpand
							});
							u = e.isExpand, e.isExpand && l(!1);
							var o = function(e) {
								n(), f = e, a("action", {
									actionType: "changeFontFamily",
									value: e,
									shapeKey: i
								})
							};
							return (0, P.jsxs)(P.Fragment, {
								children: [(0, P.jsx)(h.Z, {
									title: "Font",
									placement: "bottom",
									visible: c,
									onVisibleChange: p,
									children: (0, P.jsxs)("div", {
										className: "tool-current-font-family btn-border current",
										id: "tool-current-font-family",
										"data-ff": f || d,
										children: [(0, P.jsx)("span", {
											children: f || d
										}), (0, P.jsx)("div", {
											className: "btn-down-arrow"
										})]
									})
								}), (0, P.jsx)("div", {
									className: r,
									children: q.map((function(e) {
										return (0, P.jsx)("div", {
											className: "font-f-item " + (f === e ? "checked" : ""),
											"data-ff": e,
											onClick: o.bind(t, e),
											children: e
										}, e)
									}))
								})]
							})
						}
					})
				}
				var $ = function(e) {
						E(n, e);
						var t = R(n);

						function n(e) {
							var r;
							return O(this, n), (r = t.call(this, e)).state = {
								isExpand: !1
							}, r.toggle = r.toggle.bind(M(r)), r.clickView = r.clickView.bind(M(r)), r.elementContains = r.elementContains.bind(M(r)), r.el = (0, s.createRef)(), r
						}
						return D(n, [{
							key: "componentDidMount",
							value: function() {
								document.addEventListener("click", this.clickView)
							}
						}, {
							key: "componentWillUnmount",
							value: function() {
								document.removeEventListener("click", this.clickView)
							}
						}, {
							key: "elementContains",
							value: function(e, t) {
								return e !== t && e.contains(t) || e === t
							}
						}, {
							key: "shouldComponentUpdate",
							value: function(e, t) {
								return !(t.isExpand === this.state.isExpand && e.allowAdvancedTool === this.props.allowAdvancedTool && !t.isExpand && e.color === this.props.color)
							}
						}, {
							key: "clickView",
							value: function(e) {
								var t = this.el.current.querySelector("." + this.props.checkView);
								this.elementContains(t, e.target) || (this.elementContains(this.el.current, e.target) ? (this.toggle(), this.props.handleClick && this.props.handleClick("action", {
									actionType: "ToolColorSelect"
								})) : this.state.isExpand && this.setState({
									isExpand: !this.state.isExpand
								}))
							}
						}, {
							key: "toggle",
							value: function() {
								this.setState({
									isExpand: !this.state.isExpand
								})
							}
						}, {
							key: "render",
							value: function() {
								var e = L()("tool-select " + (this.state.isExpand ? "expand" : ""), this.props.className);
								return (0, P.jsx)("div", {
									className: e,
									tabIndex: "0",
									ref: this.el,
									children: this.props.children(this.state, this.toggle)
								})
							}
						}]), n
					}(s.Component),
					Q = function(e) {
						E(n, e);
						var t = R(n);

						function n(e) {
							var r;
							return O(this, n), (r = t.call(this, e)).state = {
								isExpand: !1
							}, r.toggle = r.toggle.bind(M(r)), r.el = (0, s.createRef)(), r
						}
						return D(n, [{
							key: "shouldComponentUpdate",
							value: function() {
								return !0
							}
						}, {
							key: "toggle",
							value: function() {
								var e = this;
								this.state.isExpand && this.el.current.blur(), this.setState({
									isExpand: !this.state.isExpand
								}, (function() {
									e.props.onPopupShown && e.props.onPopupShown(e.state.isExpand)
								}))
							}
						}, {
							key: "render",
							value: function() {
								var e = L()("tool-select " + (this.state.isExpand ? "expand" : ""), this.props.className);
								return (0, P.jsx)("div", {
									className: e,
									tabIndex: "0",
									onFocus: this.toggle,
									onBlur: this.toggle,
									ref: this.el,
									children: this.props.children(this.state, this.toggle)
								})
							}
						}]), n
					}(s.Component),
					ee = n(6700);

				function te(e) {
					return te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, te(e)
				}

				function ne(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (i = r.key, a = void 0, a = function(e, t) {
							if ("object" !== te(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== te(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(i, "string"), "symbol" === te(a) ? a : String(a)), r)
					}
					var i, a
				}

				function re(e, t) {
					return re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
						return e.__proto__ = t, e
					}, re(e, t)
				}

				function ie(e) {
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
						var n, r = oe(e);
						if (t) {
							var i = oe(this).constructor;
							n = Reflect.construct(r, arguments, i)
						} else n = r.apply(this, arguments);
						return function(e, t) {
							if (t && ("object" === te(t) || "function" == typeof t)) return t;
							if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
							return ae(e)
						}(this, n)
					}
				}

				function ae(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function oe(e) {
					return oe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, oe(e)
				}
				var se = [20, 30, 40, 68, 98],
					ce = [{
						title: "Top Left",
						value: "top_left"
					}, {
						title: "Top Right",
						value: "top_right"
					}, {
						title: "Center",
						value: "center"
					}, {
						title: "Bottom Left",
						value: "bottom_left"
					}, {
						title: "Bottom Right",
						value: "bottom_right"
					}],
					le = [{
						title: "",
						value: "mac"
					}, {
						title: "",
						value: "windows"
					}, {
						title: "URL on top",
						value: "url_top"
					}, {
						title: "URL on bottom",
						value: "url_bottom"
					}],
					ue = [{
						title: "Rectangle",
						shape: "rect"
					}, {
						title: "Ellipse",
						shape: "ellipse"
					}],
					he = localStorage.rect ? localStorage.rect : "rect",
					de = localStorage.line ? localStorage.line : "big_head_arrow",
					fe = [{
						title: "Big head arrow",
						shape: "big_head_arrow"
					}, {
						title: "Line arrow",
						shape: "line_arrow"
					}, {
						title: "Bezier arrow",
						shape: "bezier_arrow"
					}, {
						title: "Line",
						shape: "line"
					}],
					pe = ["windows-cursor", "cursor", "cursor-hand", "cursor-hand-black", "cursor-click", "smile", "cry", "tick-off", "cross", "forbidden", "warning", "q-mark", "like", "heart", "star", "chicken", "dog", "rain", "sun", "cloud", "thunder", "fish", "fish2", "tree1", "tree2", "building1", "building2", "package", "tent", "umbrella", "car", "basketball", "beer"],
					me = function(e) {
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
							}), t && re(e, t)
						}(a, e);
						var t, n, r, i = ie(a);

						function a(e) {
							var t;
							return function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, a), (t = i.call(this, e)).fontSizeInputRef = (0, s.createRef)(), t.inputCalloutRef = (0, s.createRef)(), t.inputFileRef = (0, s.createRef)(), t.colorFieldRef = (0, s.createRef)(), t.state = {
								maskUrl: ""
							}, t.handleCropDemensionChange = t.handleCropDemensionChange.bind(ae(t)), t.handleFileInputChange = t.handleFileInputChange.bind(ae(t)), t
						}
						return t = a, n = [{
							key: "handleCropDemensionChange",
							value: function(e, t) {
								"" === t.target.value && (t.target.value = 0);
								var n = parseInt(t.target.value);
								!isNaN(n) && n >= 0 && this.props.handleToolBarBtnClick("action", {
									actionType: "crop-demension-" + e,
									value: t.target.value
								})
							}
						}, {
							key: "handleFileInputChange",
							value: function(e) {
								var t = e.target.files[0];
								if (t) {
									var n = URL.createObjectURL(t);
									this.setState({
										maskUrl: n
									}), this.props.handleToolBarBtnClick("action", {
										actionType: "addMask",
										value: n
									})
								}
							}
						}, {
							key: "render",
							value: function() {
								var e = this,
									t = this.props,
									n = t.handleToolBarBtnClick,
									r = t.handleResizeInputChange,
									i = t.handleResizeProportionChange,
									a = t.getResizeInfo,
									o = t.currentTool,
									s = t.currentScale,
									f = t.cropWidth,
									p = t.cropHeight,
									m = t.resizeWidth,
									g = t.resizeHeight,
									v = t.resizeProportional,
									y = t.canUndo,
									b = t.canRedo,
									x = t.canClear,
									S = t.canDeleteSelected,
									j = t.finishEdit,
									N = t.handleTextBgChange,
									k = t.handleResetList,
									A = t.selectShape,
									I = t.drawStyle,
									C = t.maskPosition,
									_ = t.enableBrowser,
									O = t.enablePadding,
									T = t.enableMask,
									D = t.showSiderGuide,
									E = t.borderType,
									F = t.checkedUrl,
									R = t.checkedCaptureTime,
									M = t.paddingColor,
									B = t.recentColors,
									U = t.paddingSize,
									q = t.maskSize,
									z = t.maskOpacity,
									Z = t.currentToolGroup,
									V = 100 * s + "%",
									K = function(t, n) {
										var r = I[t],
											i = 24;
										r && (i = r.fontSize), A && A.fontName && (i = A.penWidth, n.current && (n.current.value = i));
										var a = i,
											o = function(r) {
												var i = n.current.value;
												"add" === r ? i < 190 ? i++ : i = 190 : i > 11 ? i-- : i = 10, n.current.value = i, a = i, e.props.handleToolBarBtnClick("action", {
													actionType: "changeFontSize",
													value: i,
													shapeKey: t
												})
											};
										return (0, P.jsxs)("div", {
											className: "font-size-group",
											children: [(0, P.jsx)(h.Z, {
												title: "Decrease font size",
												placement: "bottom",
												children: (0, P.jsx)("div", {
													className: "action",
													onClick: o.bind(e, "plus"),
													children: "-"
												})
											}), (0, P.jsx)($, {
												checkView: "panel",
												className: "tool-font-size multi-btn",
												children: function(r, i) {
													var o = L()("panel", {
														active: r.isExpand
													});
													!r.isExpand && n.current && n.current.blur();
													var s = function(r) {
														i(), a = r, n.current.value = a, e.props.handleToolBarBtnClick("action", {
															actionType: "changeFontSize",
															value: r,
															shapeKey: t
														})
													};
													return (0, P.jsxs)(P.Fragment, {
														children: [(0, P.jsx)(h.Z, {
															title: "Font size",
															placement: "bottom",
															children: (0, P.jsx)("div", {
																className: "tool-current-font-size current",
																"data-fs": a,
																id: "tool-current-font-size",
																children: (0, P.jsx)("input", {
																	type: "text",
																	id: "change-size",
																	maxLength: "4",
																	className: "font-size",
																	onClick: function() {
																		n.current.setSelectionRange(0, n.current.value.length)
																	},
																	ref: n,
																	defaultValue: a,
																	onBlur: function() {
																		n.current.value = a
																	}.bind(e),
																	onKeyDown: function(r) {
																		if (13 === r.keyCode) {
																			var o = n.current.value;
																			if (o.length > 0) try {
																				o = parseInt(o), isNaN(o) && (o = a)
																			} catch (r) {
																				o = a
																			}
																			o < 10 && (o = 10), o > 190 && (o = 190), a = o, n.current.value = a, i(), n.current.blur(), e.props.handleToolBarBtnClick("action", {
																				actionType: "changeFontSize",
																				value: a,
																				shapeKey: t
																			})
																		}
																	}.bind(e)
																})
															})
														}), (0, P.jsx)("div", {
															className: o,
															children: se.map((function(t) {
																return (0, P.jsx)("div", {
																	className: "font-s-item " + (a == t ? "checked" : ""),
																	"data-fs": t,
																	onClick: s.bind(e, t),
																	children: t
																}, t)
															}))
														})]
													})
												}
											}), (0, P.jsx)(h.Z, {
												title: "Increase font size",
												placement: "bottom",
												children: (0, P.jsx)("div", {
													className: "action",
													onClick: o.bind(e, "add"),
													children: "+"
												})
											})]
										})
									},
									te = function(e, t) {
										var r = I[e];
										"highlight" !== e || r && r.color || (r = I.curve);
										var i = !0,
											a = t ? "Stroke color" : "Color";
										if (r) {
											var o = r.color;
											t && (o = r.strokeColor)
										} else "padding_color" === e && (o = M, i = !1);
										A && "padding_color" !== e && (o = t ? A.strokeColor ? A.strokeColor : o : A.color ? A.color : o), "highlight" === e && (o = function(e) {
											if (e && e.toLocaleLowerCase().startsWith("rgba")) {
												var t = e.split("(")[1].split(")")[0].split(",");
												return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
											}
											return e
										}(o));
										var s = o,
											c = "changeColor";
										t && (c = "changeStroke");
										var l = "panel";
										return (0, P.jsx)($, {
											checkView: l,
											color: s,
											className: "tool-color-picker multi-btn",
											children: function(r, u) {
												var d = L()(l, {
													active: r.isExpand
												});
												return (0, P.jsxs)(P.Fragment, {
													children: [(0, P.jsx)(h.Z, {
														title: a,
														placement: "bottom",
														children: (0, P.jsxs)("div", {
															className: "current",
															id: "tool-current-color",
															"data-color": s || o,
															children: [(0, P.jsx)("div", {
																className: "tool-current-color ",
																style: {
																	backgroundColor: "transparent" !== s ? s : ""
																},
																children: "highlight" === e ? (0, P.jsx)("b", {}) : (0, P.jsx)(P.Fragment, {})
															}), i ? (0, P.jsx)("div", {
																className: "multi-btn-arrow"
															}) : (0, P.jsx)(P.Fragment, {})]
														})
													}), (0, P.jsx)("div", {
														className: d,
														children: (0, P.jsx)(Y, {
															handleColorClick: function(t, r) {
																r && u(), s = t, o = t, n("action", {
																	actionType: c,
																	value: t,
																	shapeKey: e
																}), n("action", {
																	actionType: "changeRecentColor",
																	value: t,
																	shapeKey: e
																})
															},
															actionType: c,
															stroke: t,
															shapeKey: e,
															recentColors: B,
															currentColor: s
														})
													})]
												})
											}
										})
									};
								return (0, P.jsx)("div", {
									className: "toolbar active",
									children: this.props.isInCropMode ? (0, P.jsxs)("div", {
										className: "crop-area",
										children: [(0, P.jsx)("div", {
											className: "tool-action-btn primary-btn crop-item",
											id: "crop-btn",
											onClick: n.bind(e, "action", {
												actionType: "doCrop"
											}),
											children: "Crop"
										}), (0, P.jsx)("div", {
											className: "tool-action-btn border-btn crop-item",
											id: "crop-cancel-btn",
											onClick: n.bind(e, "action", {
												actionType: "leaveCrop"
											}),
											children: "Cancel"
										}), (0 !== f || 0 !== p) && (0, P.jsxs)("div", {
											id: "crop-dimension",
											children: [(0, P.jsxs)("div", {
												children: ["Width:", (0, P.jsx)("input", {
													type: "text",
													id: "cd-width",
													className: "cd-input",
													onChange: e.handleCropDemensionChange.bind(null, "width"),
													value: f
												})]
											}), (0, P.jsxs)("div", {
												children: ["Height:", (0, P.jsx)("input", {
													id: "cd-height",
													type: "text",
													className: "cd-input",
													onChange: e.handleCropDemensionChange.bind(null, "height"),
													value: p
												})]
											})]
										})]
									}) : (0, P.jsxs)("div", {
										className: "tools",
										children: ["ext" !== e.props.type && (0, P.jsxs)("div", {
											className: "back-btn",
											onClick: e.props.handleBack,
											children: [(0, P.jsx)(ee.Z, {}), "Return"]
										}), (0, P.jsxs)("div", {
											className: "editer-content-field",
											children: [(0, P.jsx)($, {
												checkView: "panel",
												handleClick: n,
												className: "resize",
												children: function(e, t) {
													var o = L()("panel", {
															active: e.isExpand
														}),
														s = L()("tool-btn resize-btn", {
															active: e.isExpand
														});
													return (0, P.jsxs)(P.Fragment, {
														children: [(0, P.jsx)(h.Z, {
															title: "Resize",
															children: (0, P.jsx)("div", {
																className: s,
																id: "resize-btn",
																onClick: a,
																children: (0, P.jsx)("b", {})
															})
														}), (0, P.jsxs)("div", {
															className: o,
															children: [(0, P.jsxs)("div", {
																className: "row",
																children: [(0, P.jsx)("span", {
																	children: "Width:"
																}), (0, P.jsx)("input", {
																	type: "number",
																	id: "resize-width",
																	min: "1",
																	max: "5000",
																	value: m,
																	onChange: r.bind(null, "width")
																}), "px"]
															}), (0, P.jsxs)("div", {
																className: "row",
																children: [(0, P.jsx)("span", {
																	children: "Height:"
																}), (0, P.jsx)("input", {
																	type: "number",
																	id: "resize-height",
																	min: "1",
																	max: "5000",
																	value: g,
																	onChange: r.bind(null, "height")
																}), "px"]
															}), (0, P.jsx)("div", {
																className: "row",
																children: (0, P.jsx)("label", {
																	htmlFor: "resize-proportional",
																	children: (0, P.jsx)(u.Z, {
																		checked: v,
																		onChange: i,
																		children: "Proportional"
																	})
																})
															}), (0, P.jsxs)("div", {
																className: "row",
																children: [(0, P.jsx)("div", {
																	className: "do-resize-btn",
																	id: "do-resize-btn",
																	onClick: function(e) {
																		t(), "doResize" === e ? n("action", {
																			actionType: "doResize"
																		}) : "getSize" === e && a()
																	}.bind(null, "doResize"),
																	children: "Resize"
																}), (0, P.jsx)("div", {
																	className: "resize-cancel",
																	id: "resize-cancel",
																	onClick: t,
																	children: "Cancel"
																})]
															})]
														})]
													})
												}
											}), (0, P.jsx)(H, {
												title: "Crop",
												action: "crop",
												handleClick: n
											}), (0, P.jsx)(W, {
												defaultShape: "curve",
												btns: [{
													title: "Pen",
													shape: "curve"
												}],
												current: o,
												shapeGroup: "curve",
												currentShapeKey: Z,
												currentShape: A,
												selectShape: A ? A.shapeName : "",
												handleClick: n,
												children: function() {
													return (0, P.jsxs)("div", {
														children: [te("curve"), (0, P.jsx)(J, {
															selectShape: A,
															style: I.curve,
															shapeKey: "curve",
															clickItem: e.props.handleToolBarBtnClick
														})]
													})
												}
											}), (0, P.jsx)(W, {
												defaultShape: "highlight",
												btns: [{
													title: "Highlighter",
													shape: "highlight"
												}],
												current: o,
												shapeGroup: "highlight",
												currentShapeKey: Z,
												currentShape: A,
												selectShape: A ? A.shapeName : "",
												handleClick: n,
												children: function() {
													return (0, P.jsxs)("div", {
														children: [te("highlight"), (0, P.jsx)(J, {
															selectShape: A,
															style: I.highlight,
															shapeKey: "highlight",
															clickItem: e.props.handleToolBarBtnClick
														})]
													})
												}
											}), (0, P.jsx)(W, {
												btns: ue,
												current: o,
												shapeGroup: "rect",
												currentShapeKey: Z,
												defaultShape: he,
												currentShape: A,
												selectShape: A ? A.shapeName : "",
												handleClick: n,
												children: function() {
													var t = function(e) {
														he = e, n("shape", {
															shape: e,
															fromMenu: !0,
															shapeKey: "rect"
														})
													};
													return (0, P.jsxs)("div", {
														children: [ue.map((function(e) {
															return (0, P.jsx)(G, {
																title: e.title,
																shape: e.shape,
																shapeGroup: "rect",
																current: o,
																selectShape: A ? A.shapeName : "",
																handleClick: t.bind(null, e.shape)
															}, e.shape)
														})), (0, P.jsx)("div", {
															className: "tool-sep"
														}), te("rect"), (0, P.jsx)(J, {
															selectShape: A,
															style: I.rect,
															shapeKey: "rect",
															clickItem: e.props.handleToolBarBtnClick
														})]
													})
												}
											}), (0, P.jsx)(W, {
												btns: fe,
												current: o,
												currentShape: A,
												selectShape: A ? A.shapeName : "",
												defaultShape: de,
												shapeGroup: "line",
												currentShapeKey: Z,
												title: "Line arrow",
												handleClick: n,
												children: function() {
													var t = function(e) {
														de = e, n("shape", {
															shape: e,
															fromMenu: !0,
															shapeKey: "line"
														})
													};
													return (0, P.jsxs)("div", {
														children: [fe.map((function(e) {
															return (0, P.jsx)(G, {
																title: e.title,
																shape: e.shape,
																shapeGroup: "line",
																current: o,
																selectShape: A ? A.shapeName : "",
																handleClick: t.bind(null, e.shape)
															}, e.shape)
														})), (0, P.jsx)("div", {
															className: "tool-sep"
														}), te("line"), (0, P.jsx)(J, {
															selectShape: A,
															style: I.line,
															shapeKey: "line",
															clickItem: e.props.handleToolBarBtnClick
														})]
													})
												}
											}), (0, P.jsx)(W, {
												btns: [{
													title: "Text",
													shape: "text"
												}],
												current: o,
												currentShape: A,
												selectShape: A ? A.shapeName : "",
												defaultShape: "text",
												shapeGroup: "text",
												currentShapeKey: Z,
												handleClick: n,
												children: function() {
													var t = I.text,
														n = !1,
														r = !1;
													t && (n = t.isTextBg, r = t.showShadow), A && "text" === A.shapeName && (n = A.isTextBg, r = A.showShadow);
													var i = n ? "bg" : "",
														a = r ? "bg" : "",
														o = function(e) {
															N(e)
														};
													return (0, P.jsxs)(P.Fragment, {
														children: [(0, P.jsx)(X, {
															selectShape: A,
															style: I.text,
															shapeKey: "text",
															clickItem: e.props.handleToolBarBtnClick
														}), K("text", e.fontSizeInputRef), te("text"), (0, P.jsx)("div", {
															className: "tool-sep"
														}), (0, P.jsx)(h.Z, {
															title: "Background",
															placement: "bottom",
															children: (0, P.jsx)("div", {
																className: "single-btn text-bg-option-btn ".concat(i),
																onClick: o.bind(null, "text-bg"),
																children: (0, P.jsx)("span", {
																	children: "A"
																})
															})
														}), (0, P.jsx)(h.Z, {
															title: "Shadow",
															placement: "bottom",
															children: (0, P.jsx)("div", {
																className: "single-btn text-bg-option-btn text-shadow ".concat(a),
																onClick: o.bind(null, "text-shadow"),
																children: (0, P.jsx)("div", {})
															})
														}), te("text", "stroke")]
													})
												}
											}), (0, P.jsx)(G, {
												title: "Blur",
												shape: "rect_blur",
												shapeGroup: "rect_blur",
												current: o,
												selectShape: A ? A.shapeName : "",
												handleClick: n
											}), (0, P.jsxs)("div", {
												className: "advanced-tool",
												children: [(0, P.jsx)(W, {
													btns: [{
														title: "Callout",
														shape: "callout"
													}],
													current: o,
													currentShape: A,
													selectShape: A ? A.shapeName : "",
													defaultShape: "callout",
													shapeGroup: "callout",
													currentShapeKey: Z,
													handleClick: n,
													allowAdvancedTool: e.props.allowAdvancedTool,
													children: function() {
														return (0, P.jsxs)(P.Fragment, {
															children: [(0, P.jsx)(X, {
																selectShape: A,
																style: I.callout,
																shapeKey: "callout",
																clickItem: e.props.handleToolBarBtnClick
															}), K("callout", e.inputCalloutRef), te("callout")]
														})
													}
												}), (0, P.jsx)(W, {
													btns: [{
														title: "Step",
														shape: "list"
													}],
													current: o,
													currentShape: A,
													selectShape: A ? A.shapeName : "",
													defaultShape: "list",
													shapeGroup: "list",
													currentShapeKey: Z,
													handleClick: n,
													allowAdvancedTool: e.props.allowAdvancedTool,
													children: function() {
														return (0, P.jsxs)(P.Fragment, {
															children: [te("list"), (0, P.jsx)("div", {
																className: "tool-select tool-restart-sequence",
																children: (0, P.jsx)("div", {
																	onClick: k,
																	children: "Restart Sequence"
																})
															})]
														})
													}
												}), (0, P.jsx)($, {
													checkView: "panel",
													allowAdvancedTool: e.props.allowAdvancedTool,
													handleClick: n,
													className: "tool-image-picker",
													children: function(t, r) {
														var i = L()("panel", {
																active: t.isExpand
															}),
															a = L()("image-btn", {
																active: t.isExpand
															}),
															o = function(e) {
																r(), n("action", {
																	actionType: "doInsertImage",
																	value: e
																})
															},
															s = L()(e.props.allowAdvancedTool ? "" : "");
														return (0, P.jsxs)(P.Fragment, {
															children: [(0, P.jsx)(h.Z, {
																title: "Stickers",
																children: (0, P.jsxs)("div", {
																	className: a,
																	id: "image-btn",
																	children: [(0, P.jsx)("b", {
																		className: s
																	}), (0, P.jsx)("div", {
																		className: "image-btn-arrow"
																	})]
																})
															}), (0, P.jsx)("div", {
																className: i,
																children: (0, P.jsx)("div", {
																	className: "panel-container",
																	children: pe.map((function(t) {
																		if ("web" === e.props.type) var n = "/images/svg/" + t + ".svg";
																		else n = "./images/svg/" + t + ".svg";
																		return (0, P.jsx)("div", {
																			className: "image-item",
																			onClick: o.bind(null, t),
																			children: (0, P.jsx)("img", {
																				src: n,
																				alt: ""
																			})
																		}, t)
																	}))
																})
															})]
														})
													}
												}, "emoj"), (0, P.jsx)(H, {
													title: "Image",
													action: "insert-image",
													handleClick: n,
													allowAdvancedTool: e.props.allowAdvancedTool
												}), (0, P.jsx)($, {
													checkView: "menu",
													handleClick: n,
													className: "subMenu border-pickier",
													children: function(t) {
														var r = L()("menu", {
																active: t.isExpand
															}),
															i = "icon-position " + C.value,
															a = function(t, r) {
																n("action", {
																	actionType: "changeSwitchValue",
																	value: r,
																	type: t
																}), "watermask" !== t || r || e.setState({
																	maskUrl: null
																})
															};
														return (0, P.jsxs)(P.Fragment, {
															children: [(0, P.jsx)(h.Z, {
																title: "Watermark",
																children: (0, P.jsx)("div", {
																	className: "single-btn watermask",
																	"data-shape": "watermask",
																	children: (0, P.jsx)("b", {
																		className: ""
																	})
																})
															}), (0, P.jsx)("div", {
																className: r,
																children: (0, P.jsxs)("div", {
																	className: "content",
																	children: [(0, P.jsxs)("div", {
																		className: "section-title",
																		children: [(0, P.jsx)("span", {
																			children: "Watermark"
																		}), (0, P.jsx)(l.Z, {
																			className: "switch",
																			size: "small",
																			onChange: a.bind(e, "watermask"),
																			defaultChecked: T
																		})]
																	}), T ? (0, P.jsxs)("div", {
																		children: [(0, P.jsxs)("div", {
																			className: "mask-preview",
																			style: {
																				backgroundImage: e.state.maskUrl ? "url(" + e.state.maskUrl + ")" : "none"
																			},
																			onClick: function() {
																				e.inputFileRef.current.click()
																			}.bind(e),
																			children: [(0, P.jsx)("input", {
																				type: "file",
																				className: "file-input",
																				ref: e.inputFileRef,
																				accept: ".jpg,.jpeg,.png",
																				onChange: e.handleFileInputChange
																			}), (0, P.jsx)("div", {
																				className: "tips",
																				children: e.state.maskUrl ? (0, P.jsx)("div", {
																					className: "change-mask",
																					children: "Change Image"
																				}) : (0, P.jsx)("div", {
																					className: "upload-mask",
																					children: "Upload Image"
																				})
																			})]
																		}), (0, P.jsxs)("div", {
																			className: "mask-position-field",
																			children: [(0, P.jsx)("div", {
																				className: i
																			}), (0, P.jsx)(Q, {
																				className: "select-position",
																				children: function(t, r) {
																					var i = L()("panel", {
																							active: t.isExpand
																						}),
																						a = function(e) {
																							r(), n("action", {
																								actionType: "changeMaskPosition",
																								value: e
																							})
																						};
																					return (0, P.jsxs)(P.Fragment, {
																						children: [(0, P.jsx)("span", {
																							children: C.title
																						}), (0, P.jsx)("div", {
																							className: i,
																							children: ce.map((function(t) {
																								return (0, P.jsxs)("div", {
																									className: "position-item",
																									onClick: a.bind(e, t),
																									children: [(0, P.jsx)("div", {
																										className: "icon-position " + t.value
																									}), t.title]
																								}, t.value)
																							}))
																						})]
																					})
																				}
																			})]
																		}), (0, P.jsxs)("div", {
																			className: "mask_size_field",
																			children: [(0, P.jsxs)("div", {
																				className: "size_show_field",
																				children: [(0, P.jsx)("span", {
																					children: "Size"
																				}), (0, P.jsx)("span", {
																					className: "size_value",
																					children: q + "%"
																				})]
																			}), (0, P.jsx)("div", {
																				className: "size_action_field",
																				children: (0, P.jsx)(c.Z, {
																					className: "slider_opacity",
																					defaultValue: q,
																					value: q,
																					disabled: !e.state.maskUrl,
																					min: 20,
																					max: 200,
																					tipFormatter: "",
																					onChange: a.bind(e, "mask_size")
																				})
																			})]
																		}), (0, P.jsxs)("div", {
																			className: "mask_opacity_field",
																			children: [(0, P.jsxs)("div", {
																				className: "size_show_field",
																				children: [(0, P.jsx)("span", {
																					children: "Opacity"
																				}), (0, P.jsx)("span", {
																					className: "size_value",
																					children: z + "%"
																				})]
																			}), (0, P.jsx)("div", {
																				className: "size_action_field",
																				children: (0, P.jsx)(c.Z, {
																					className: "slider_opacity",
																					defaultValue: z,
																					value: z,
																					disabled: !e.state.maskUrl,
																					tipFormatter: "",
																					onChange: a.bind(e, "mask_opacity")
																				})
																			})]
																		})]
																	}) : (0, P.jsx)(P.Fragment, {})]
																})
															})]
														})
													}
												}), (0, P.jsx)($, {
													checkView: "menu",
													handleClick: n,
													className: "subMenu border-pickier",
													children: function(t) {
														var r = L()("menu", {
																active: t.isExpand
															}),
															i = function(e, t) {
																"check_url" !== e && "check_time" !== e || (t = t.target.checked), n("action", {
																	actionType: "changeSwitchValue",
																	value: t,
																	type: e
																})
															},
															a = function(t) {
																"click" === t ? e.colorFieldRef.current.classList.contains("active") || e.colorFieldRef.current.classList.add("active") : e.colorFieldRef.current.classList.remove("active")
															},
															o = function(e) {
																n("action", {
																	actionType: "changeBowser",
																	value: e
																})
															};
														return (0, P.jsxs)(P.Fragment, {
															children: [(0, P.jsx)(h.Z, {
																title: "Border",
																children: (0, P.jsx)("div", {
																	className: "single-btn border",
																	"data-shape": "border",
																	children: (0, P.jsx)("b", {
																		className: ""
																	})
																})
															}), (0, P.jsx)("div", {
																className: r,
																children: (0, P.jsxs)("div", {
																	className: "content",
																	children: [(0, P.jsxs)("div", {
																		className: "section-title",
																		children: [(0, P.jsx)("span", {
																			children: "Browser"
																		}), (0, P.jsx)(l.Z, {
																			className: "switch",
																			size: "small",
																			onChange: i.bind(e, "browser"),
																			checked: _
																		})]
																	}), (0, P.jsxs)("div", {
																		className: "browser-content",
																		style: {
																			display: _ ? "block" : "none"
																		},
																		children: [le.map((function(e) {
																			return (0, P.jsx)("div", {
																				className: "thum-border " + (E === e.value ? " active" : ""),
																				children: (0, P.jsx)("div", {
																					className: "thum_browser " + e.value,
																					onClick: o.bind(null, e.value),
																					children: e.title
																				})
																			}, e.value)
																		})), (0, P.jsxs)("div", {
																			className: "check_field check_url",
																			style: {
																				display: "mac" !== E && "windows" !== E || !e.props.tabUrl ? "none" : "flex"
																			},
																			children: [(0, P.jsx)("span", {
																				children: "Include URL"
																			}), (0, P.jsx)(u.Z, {
																				checked: F,
																				onChange: i.bind(e, "check_url")
																			})]
																		}), (0, P.jsxs)("div", {
																			className: "check_field check_time",
																			style: {
																				display: "mac" !== E && "windows" !== E ? "none" : "flex"
																			},
																			children: [(0, P.jsx)("span", {
																				children: "Include Date"
																			}), (0, P.jsx)(u.Z, {
																				checked: R,
																				onChange: i.bind(e, "check_time")
																			})]
																		})]
																	}), (0, P.jsxs)("div", {
																		className: "section-title",
																		children: [(0, P.jsx)("span", {
																			children: "Padding"
																		}), (0, P.jsx)(l.Z, {
																			className: "switch",
																			size: "small",
																			onChange: i.bind(e, "padding"),
																			defaultChecked: O
																		})]
																	}), (0, P.jsxs)("div", {
																		className: "padding-content",
																		style: {
																			display: O ? "block" : "none"
																		},
																		children: [(0, P.jsxs)("div", {
																			className: "color_field",
																			ref: e.colorFieldRef,
																			children: [te("padding_color"), (0, P.jsx)("span", {
																				children: "#"
																			}), (0, P.jsx)(d.ZE, {
																				color: w(M),
																				onClick: a.bind(e, "click"),
																				onBlur: a.bind(e, "focus"),
																				onChange: function(e) {
																					n("action", {
																						actionType: "changeColor",
																						value: e,
																						shapeKey: "padding_color"
																					})
																				}
																			})]
																		}), (0, P.jsxs)("div", {
																			className: "size_field",
																			children: [(0, P.jsxs)("div", {
																				className: "size_show_field",
																				children: [(0, P.jsx)("span", {
																					children: "Size"
																				}), (0, P.jsx)("span", {
																					className: "size_value",
																					children: U + "px"
																				})]
																			}), (0, P.jsx)("div", {
																				className: "size_action_field",
																				children: (0, P.jsx)(c.Z, {
																					max: "200",
																					className: "slider_opacity",
																					value: U,
																					tipFormatter: "",
																					onChange: i.bind(e, "padding_size")
																				})
																			})]
																		})]
																	}), (0, P.jsx)("div", {
																		className: "preload mac left"
																	}), (0, P.jsx)("div", {
																		className: "preload mac right"
																	}), (0, P.jsx)("div", {
																		className: "preload windows left"
																	}), (0, P.jsx)("div", {
																		className: "preload windows right"
																	})]
																})
															})]
														})
													}
												})]
											})]
										}), (0, P.jsxs)("div", {
											className: "editer-action-field",
											children: [(0, P.jsx)(H, {
												title: "Undo",
												action: "undo",
												disabled: !y,
												handleClick: n
											}), (0, P.jsx)(H, {
												title: "Redo",
												action: "redo",
												disabled: !b,
												handleClick: n
											}), (0, P.jsx)(H, {
												title: "Clear",
												action: "clear",
												disabled: !x,
												handleClick: n
											}), (0, P.jsx)(H, {
												title: "Delete selected",
												action: "deleteSelected",
												disabled: !S,
												handleClick: n
											})]
										}), (0, P.jsxs)("div", {
											className: "zoom-area",
											children: [(0, P.jsx)(Q, {
												className: "zoom-field",
												children: function() {
													return (0, P.jsxs)(P.Fragment, {
														children: [(0, P.jsx)(H, {
															title: "Zoom out",
															action: "zoom-out",
															handleClick: n
														}), (0, P.jsx)("span", {
															className: "zoom-level",
															children: V
														}), (0, P.jsx)(H, {
															title: "Zoom in",
															action: "zoom-in",
															handleClick: n
														})]
													})
												}
											}), chrome && chrome.extension ? (0, P.jsxs)("div", {
												className: "ocr-btn",
												children: [(0, P.jsxs)("div", {
													className: "content",
													onClick: n.bind(e, "ocr", {
														actionType: "sendSider"
													}),
													children: [(0, P.jsx)("div", {
														className: "ocr"
													}), (0, P.jsx)("div", {
														className: "tip",
														children: "AI OCR"
													})]
												}), D ? (0, P.jsx)(P.Fragment, {
													children: (0, P.jsxs)("div", {
														className: "center-block",
														children: [(0, P.jsx)("div", {
															className: "close",
															id: "close_ocr",
															onClick: n.bind(e, "ocr", {
																actionType: "hideOCRGuide"
															}),
															children: "+"
														}), (0, P.jsx)("div", {
															className: "header",
															children: (0, P.jsx)("div", {
																className: "tip",
																children: "Recognize text in any image, No need to type."
															})
														}), (0, P.jsxs)("ul", {
															className: "tips",
															children: [(0, P.jsx)("li", {
																children: "Extract text from any image"
															}), (0, P.jsx)("li", {
																children: "Reuse the text with AI features such as explain, translate, summarize, rewrite etc."
															}), (0, P.jsxs)("li", {
																children: ["It even recognizes ", (0, P.jsx)("span", {
																	children: "math equation"
																}), "!"]
															})]
														}), (0, P.jsxs)("div", {
															className: "btn-area",
															children: [(0, P.jsx)("div", {
																className: "popup-btn-primary",
																id: "popup-imge-ocr-btn",
																"data-reason": "ext_pop_sider_limit",
																onClick: n.bind(e, "ocr", {
																	actionType: "getSider"
																}),
																children: "Get it now"
															}), (0, P.jsx)("div", {
																className: "tip",
																children: "Awesome Screenshot teams up with Sider.AI to extract text from your screenshot."
															})]
														})]
													})
												}) : (0, P.jsx)(P.Fragment, {})]
											}) : (0, P.jsx)(P.Fragment, {})]
										}), (0, P.jsxs)("div", {
											className: "right-field",
											children: ["web" !== e.props.type && !e.props.isReported && ("entire" === e.props.menuType || "selected" === e.props.menuType) && (0, P.jsxs)("div", {
												className: "quick-issue",
												children: ["Not properly captured?", (0, P.jsx)("a", {
													onClick: e.props.quickReport,
													children: " Report a problem."
												})]
											}), (0, P.jsx)("div", {
												className: "tool-action-btn border-btn",
												onClick: n.bind(e, "action", {
													actionType: "copy"
												}),
												children: "Copy"
											}), (0, P.jsx)("div", {
												className: "tool-action-btn primary-btn",
												id: "save-btn",
												onClick: j,
												children: "web" === e.props.type ? "Save" : "Done"
											})]
										})]
									})
								})
							}
						}], n && ne(t.prototype, n), r && ne(t, r), Object.defineProperty(t, "prototype", {
							writable: !1
						}), a
					}(s.PureComponent);
				const ge = me;
				var ve = ["callout", "list"],
					ye = {
						channel: "#",
						repo: "",
						user: "@",
						board: "",
						project: "",
						folder: ""
					},
					be = [{
						name: "slack",
						displayName: "Slack"
					}, {
						name: "asana",
						displayName: "Asana"
					}, {
						name: "trello",
						displayName: "Trello"
					}, {
						name: "github",
						displayName: "Github"
					}, {
						name: "jira",
						displayName: "Jira"
					}],
					we = {
						slack: {
							displayName: "Slack",
							targetName: "Channel",
							placeHolder: "Choose a channel or user",
							panelTitle: "Send message",
							actionTypeStr: "Sending message",
							successMsg: "Slack message sent!",
							panelSubTitle: "Send screenshots to Slack",
							featureLists: ["Send screenshots to Slack Channel", "Send screenshots to Slack direct messages", "Attach URL of the screenshot automatically"]
						},
						trello: {
							displayName: "Trello",
							targetName: "Board",
							placeHolder: "Choose a board",
							panelTitle: "Create card",
							actionTypeStr: "Creating card",
							successMsg: "Trello card created!",
							panelSubTitle: "Send screenshots as Trello cards",
							featureLists: ["Create a trello card and attach the screenshot directly", "Assign the card to members", "Set due date and time", "Include browser & OS info to help identify the issue"]
						},
						asana: {
							displayName: "Asana",
							targetName1: "Workspace",
							targetName2: "Project",
							placeHolder1: "Choose a workspace",
							placeHolder2: "Choose a project",
							panelTitle: "Create task",
							actionTypeStr: "Creating task",
							successMsg: "Asana task created!",
							panelSubTitle: "Send screenshots as Asana task",
							featureLists: ["Send screenshots to Asana task", "Create an Asana task and attach the screenshot directly", "Assign the card to members", "Choose Sections", "Set due date and time", "Include browser & OS info to help identify the issue"]
						},
						jira: {
							displayName: "Jira",
							targetName1: "Site",
							targetName2: "Project",
							placeHolder1: "Choose a site",
							placeHolder2: "Choose a project",
							panelTitle: "Create issue",
							actionTypeStr: "Creating issue",
							successMsg: "Jira issue created!",
							panelSubTitle: "Send screenshots as Jira issue",
							featureLists: ["Create a Jira issue and attach the screenshot directly", "Assign the card to members", "Include browser & OS info to help identify the issue"]
						},
						googleDrive: {
							displayName: "Google Drive",
							targetName: "Folder",
							placeHolder: "Choose a folder",
							panelTitle: "Upload image",
							actionTypeStr: "Uploading image",
							successMsg: "Google Drive image uploaded!",
							panelSubTitle: "Save screenshots to Google Drive",
							featureLists: ["Save screenshots to Google Drive folders directly"]
						},
						dropbox: {
							displayName: "Dropbox",
							targetName: "Folder",
							placeHolder: "Choose a folder",
							panelTitle: "Upload image",
							actionTypeStr: "Uploading image",
							successMsg: "Dropbox image uploaded!",
							panelSubTitle: "Save screenshots to Dropbox",
							featureLists: ["Save screenshots to Dropbox folders directly"]
						},
						box: {
							displayName: "Box",
							targetName: "Folder",
							placeHolder: "Choose a folder",
							panelTitle: "Upload image",
							actionTypeStr: "Uploading image",
							successMsg: "Box image uploaded!",
							panelSubTitle: "Save screenshots to Box",
							featureLists: ["Save screenshots to Box folders directly"]
						},
						github: {
							displayName: "Github",
							targetName: "Repository",
							placeHolder: "Choose a repository",
							panelTitle: "Create issue",
							actionTypeStr: "Creating issue",
							successMsg: "Github issue created!",
							panelSubTitle: "Send screenshots as Github issue",
							featureLists: ["Create issue in Github repository", "Send screenshots to Github message", "Attach URL of the screenshot automatically"]
						}
					},
					xe = [{
						name: "googleDrive",
						displayName: "Google Drive"
					}, {
						name: "dropbox",
						displayName: "Dropbox"
					}, {
						name: "box",
						displayName: "Box"
					}],
					Se = n(9266),
					je = n(84334),
					Ne = n(27484),
					ke = n.n(Ne);

				function Ae(e) {
					return Ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Ae(e)
				}

				function Le(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function Pe(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Le(Object(n), !0).forEach((function(t) {
							Ie(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function Ie(e, t, n) {
					return (t = _e(t)) in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function Ce(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _e(r.key), r)
					}
				}

				function _e(e) {
					var t = function(e, t) {
						if ("object" !== Ae(e) || null === e) return e;
						var n = e[Symbol.toPrimitive];
						if (void 0 !== n) {
							var r = n.call(e, t || "default");
							if ("object" !== Ae(r)) return r;
							throw new TypeError("@@toPrimitive must return a primitive value.")
						}
						return ("string" === t ? String : Number)(e)
					}(e, "string");
					return "symbol" === Ae(t) ? t : String(t)
				}

				function Oe(e, t) {
					return Oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
						return e.__proto__ = t, e
					}, Oe(e, t)
				}

				function Te(e) {
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
						var n, r = Ee(e);
						if (t) {
							var i = Ee(this).constructor;
							n = Reflect.construct(r, arguments, i)
						} else n = r.apply(this, arguments);
						return function(e, t) {
							if (t && ("object" === Ae(t) || "function" == typeof t)) return t;
							if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
							return De(e)
						}(this, n)
					}
				}

				function De(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function Ee(e) {
					return Ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, Ee(e)
				}
				var Fe = localStorage.draw_style ? JSON.parse(localStorage.draw_style) : {
						curve: {
							width: 8,
							color: localStorage["pen-color"] || "rgb(255, 0, 0)",
							contains: ["curve"]
						},
						highlight: {
							width: 16,
							color: localStorage["pen-color"] || "rgb(255, 0, 0)",
							contains: ["highlight"]
						},
						rect: {
							width: 8,
							color: localStorage["pen-color"] || "rgb(255, 0, 0)",
							contains: ["rect", "ellipse"]
						},
						line: {
							width: 8,
							color: localStorage["pen-color"] || "rgb(255, 0, 0)",
							contains: ["line_arrow", "bezier_arrow", "big_head_arrow", "line"]
						},
						text: {
							width: 8,
							color: localStorage["pen-color"] || "rgb(255, 0, 0)",
							fontFamily: localStorage["font-family"] || "Arial",
							isTextBg: !1,
							showShadow: !1,
							strokeColor: "transparent",
							fontSize: localStorage["font-size"] ? parseInt(localStorage["font-size"]) : window.devicePixelRatio > 1 ? 36 : 24,
							contains: ["text"]
						},
						callout: {
							width: 8,
							color: localStorage["pen-color"] || "rgb(255, 0, 0)",
							fontFamily: localStorage["font-family"] || "Arial",
							fontSize: localStorage["font-size"] ? parseInt(localStorage["font-size"]) : window.devicePixelRatio > 1 ? 36 : 24,
							contains: ["callout"]
						},
						list: {
							color: localStorage["pen-color"] || "rgb(255, 0, 0)",
							contains: ["list"]
						}
					},
					Re = {
						mac: {
							left: 255,
							right: 105,
							height: 79,
							top: 48
						},
						windows: {
							left: 214,
							right: 146,
							height: 86,
							top: 54
						},
						url_top: {
							height: 34
						},
						url_bottom: {
							height: 34
						}
					},
					Me = function(e) {
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
							}), t && Oe(e, t)
						}(a, e);
						var t, n, r, i = Te(a);

						function a(e) {
							var t;
							return function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, a), (t = i.call(this, e)).outerContainer = (0, s.createRef)(), t.container = (0, s.createRef)(), t.doodleCanvas = (0, s.createRef)(), t.layerCanvas = (0, s.createRef)(), t.textareaOut = (0, s.createRef)(), t.textarea = (0, s.createRef)(), t.listDialog = (0, s.createRef)(), t.fileInput = (0, s.createRef)(), t.headerBorder = (0, s.createRef)(), t.headerCenter = (0, s.createRef)(), t.headerLeft = (0, s.createRef)(), t.headerRight = (0, s.createRef)(), t.timeRef = (0, s.createRef)(), t.urlFeld = (0, s.createRef)(), t.headerBar = (0, s.createRef)(), t.urlTopRef = (0, s.createRef)(), t.urlTopContent = (0, s.createRef)(), t.urlBottomContent = (0, s.createRef)(), t.urlBottomRef = (0, s.createRef)(), t.originHeight = 0, t.originWidth = 0, t.urlContentHeight = 0, t.state = {
								isInCropMode: !1,
								currentTool: "",
								currentToolGroup: "",
								currentColor: localStorage["pen-color"] || "rgb(255, 0, 0)",
								currentPenWidth: localStorage["pen-width"] ? parseInt(localStorage["pen-width"]) : window.devicePixelRatio > 1 ? 8 : 4,
								currentFontSize: localStorage["font-size"] ? parseInt(localStorage["font-size"]) : window.devicePixelRatio > 1 ? 36 : 24,
								currentFontFamily: localStorage["font-family"] || "Times New Roman",
								cropWidth: 0,
								cropHeight: 0,
								resizeWidth: 0,
								resizeHeight: 0,
								resizeProportional: !0,
								currentScale: 1,
								canUndo: !1,
								canRedo: !1,
								canClear: !1,
								canDeleteSelected: !1,
								isShownUpgrade: !1,
								isReady: !1,
								upgradeType: "",
								isTextBackground: !1,
								selectShape: null,
								showTopBorder: !1,
								showBopttomBorder: !1,
								borderAction: !0,
								borderType: "mac",
								maskPosition: {
									title: "Top Left",
									value: "top_left"
								},
								maskSize: 100,
								maskOpacity: 100,
								enableBrowser: !1,
								enablePadding: !1,
								enableMask: !0,
								checkedUrl: !0,
								showSiderGuide: !1,
								recentColors: localStorage.recent_clr ? JSON.parse(localStorage.recent_clr) : ["#F8CA41", "#E25A3B", "#E47B87", "#168C98", "#218F6A"],
								paddingColor: "rgb(255, 153, 0)",
								paddingSize: 30,
								checkedCaptureTime: !1,
								captureTime: ke()().format("YYYY-MM-DD hh:mm A")
							}, t.handleToolBarBtnClick = t.handleToolBarBtnClick.bind(De(t)), t.handleFileInputChange = t.handleFileInputChange.bind(De(t)), t.editor_style_callback = t.editor_style_callback.bind(De(t)), t.initEditor = t.initEditor.bind(De(t)), t.insertImage = t.insertImage.bind(De(t)), t.handleResizeInputChange = t.handleResizeInputChange.bind(De(t)), t.handleResizeProportionChange = t.handleResizeProportionChange.bind(De(t)), t.getResizeInfo = t.getResizeInfo.bind(De(t)), t.finishEdit = t.finishEdit.bind(De(t)), t.handleKeyDown = t.handleKeyDown.bind(De(t)), t.handleCloseUpgrade = t.handleCloseUpgrade.bind(De(t)), t.handleTextBgChange = t.handleTextBgChange.bind(De(t)), t.handleResetList = t.handleResetList.bind(De(t)), t.handleSelectShape = t.handleSelectShape.bind(De(t)), t.updateBorderShow = t.updateBorderShow.bind(De(t)), t.rePositionBorder = t.rePositionBorder.bind(De(t)), t.resetStatus = t.resetStatus.bind(De(t)), t.updateContainerTop = t.updateContainerTop.bind(De(t)), t.copyImageAction = t.copyImageAction.bind(De(t)), t.handlePaste = t.handlePaste.bind(De(t)), t.handleSiderGuide = t.handleSiderGuide.bind(De(t)), t.sendImgToSider = t.sendImgToSider.bind(De(t)), t
						}
						return t = a, n = [{
							key: "componentDidMount",
							value: function() {
								this.initEditor(this.props.imageUrl);
								var e = this;
								document.querySelector("#canvas2") && (document.querySelector("#canvas2").addEventListener("click", (function() {
									document.querySelectorAll(".tool-select").forEach((function(e) {
										e.blur()
									}))
								}), !1), document.querySelector("#canvas2").addEventListener("contextmenu", (function(e) {
									e.preventDefault()
								}))), document.addEventListener("keydown", this.handleKeyDown), window.addEventListener("resize", (function() {
									e.state.enableBrowser && e.updateBorderShow(e.state.borderType), e.state.enablePadding && e.updateContainerTop(e.state.enableBrowser, e.state.enablePadding, e.state.paddingSize)
								}), !1), document.body.addEventListener("paste", this.handlePaste)
							}
						}, {
							key: "componentDidUpdate",
							value: function(e) {
								e.imageUrl === this.props.imageUrl || "" !== e.imageUrl && void 0 !== e.imageUrl || this.initEditor(this.props.imageUrl)
							}
						}, {
							key: "componentWillUnmount",
							value: function() {
								document.removeEventListener("keydown", this.handleKeyDown), document.body.removeEventListener("paste", this.handlePaste), this.editor = null
							}
						}, {
							key: "handlePaste",
							value: function(e) {
								var t = e.target;
								if ((!t || "INPUT" !== t.nodeName && "TEXTAREA" !== t.nodeName) && e.clipboardData && e.clipboardData.files.length && "edit" == this.props.step) {
									var n = e.clipboardData.files[0],
										r = n.name.match(/(.*)\.(png|jpg|jpeg|PNG|JPG|JPEG)$/);
									if (r && r.length > 0) {
										var i = URL.createObjectURL(n);
										this.insertImage(i)
									}
								}
							}
						}, {
							key: "handleKeyDown",
							value: function(e) {
								var t = e.keyCode;
								if (-1 !== this.props.className.indexOf("active"))
									if (90 === t && (e.ctrlKey || e.metaKey)) e.shiftKey ? this.editor.redo() : this.editor.undo();
									else if ((46 === t || 8 === t) && this.state.canDeleteSelected) {
									if (e.target.classList.contains("editor-textarea") || e.target.classList.contains("editor-input") || e.target.classList.contains("font-size")) return;
									this.editor.deleteSelected()
								}
							}
						}, {
							key: "handleSiderGuide",
							value: function(e) {
								if (e) {
									var t = this.editor.getImageDataURL("image/png");
									this.sendImgToSider(t)
								} else e == this.showSiderGuide || e || this.setState({
									showSiderGuide: e
								})
							}
						}, {
							key: "sendImgToSider",
							value: function(e) {
								var t = this;
								chrome && chrome.extension && chrome.runtime.sendMessage({
									action: "sendLocalSider",
									data: e
								}, (function(e) {
									e || t.setState({
										showSiderGuide: !0
									})
								}))
							}
						}, {
							key: "finishEdit",
							value: function(e, t) {
								var n = this,
									r = {};
								if (this.state.enableBrowser || this.state.enablePadding) {
									if (this.state.enableBrowser) {
										var i = this.state.borderType;
										r.borderType = i, "mac" == i || "windows" == i ? (this.state.checkedUrl && (r.url = this.props.tabUrl, r.checkedUrl = this.state.checkedUrl), r.height = Re[i].height * window.devicePixelRatio, r.left = Re[i].left * window.devicePixelRatio, r.right = Re[i].right * window.devicePixelRatio, this.state.checkedCaptureTime && (r.captureTime = this.state.captureTime)) : (r.url = this.props.tabUrl, r.checkedUrl = !0, r.height = this.urlContentHeight * window.devicePixelRatio, r.captureTime = this.state.captureTime)
									}
									this.state.enablePadding && (r.paddingSize = this.state.paddingSize * window.devicePixelRatio, r.paddingColor = this.state.paddingColor)
								}
								this.editor.getImageDataBlob(this.props.contentType, (function(e) {
									var i = window.URL.createObjectURL(e);
									if (t) n.props.handleFinishEditAndShare(i, e);
									else {
										var a = n.editor.bg_info;
										n.props.handleFinishEdit(i, e, {
											width: a.width,
											height: a.height,
											border: r
										})
									}
								}))
							}
						}, {
							key: "copyImageAction",
							value: function() {
								var e = this;
								chrome && chrome.extension;
								var t = {};
								if (this.state.enableBrowser || this.state.enablePadding) {
									if (this.state.enableBrowser) {
										var n = this.state.borderType;
										t.borderType = n, "mac" == n || "windows" == n ? (this.state.checkedUrl && (t.url = this.props.tabUrl, t.checkedUrl = this.state.checkedUrl), t.height = Re[n].height * window.devicePixelRatio, t.left = Re[n].left * window.devicePixelRatio, t.right = Re[n].right * window.devicePixelRatio, this.state.checkedCaptureTime && (t.captureTime = this.state.captureTime)) : (t.url = this.props.tabUrl, t.checkedUrl = !0, t.height = this.urlContentHeight * window.devicePixelRatio, t.captureTime = this.state.captureTime)
									}
									this.state.enablePadding && (t.paddingSize = this.state.paddingSize * window.devicePixelRatio, t.paddingColor = this.state.paddingColor)
								}
								this.editor.getImageDataBlob(this.props.contentType, (function(n) {
									if (Object.keys(t).length > 0) {
										var r = e.editor.bg_info;
										j(n, {
											width: r.width,
											height: r.height,
											border: t
										}, e.props.type, (function(e) {
											e && ("image/jpeg" === e.type ? x(e).then((function(e) {
												S(e, (function() {
													o.ZP.success("Copied to clipboard!", 1)
												}), (function(e) {
													o.ZP.error("Copy failed.", 1)
												}))
											})) : S(e, (function() {
												o.ZP.success("Copied to clipboard!", 1)
											}), (function(e) {
												o.ZP.error("Copy failed.", 1)
											})))
										}))
									} else n && ("image/jpeg" === n.type ? x(n).then((function(e) {
										S(e, (function() {
											o.ZP.success("Copied to clipboard!", 1)
										}), (function(e) {
											o.ZP.error("Copy failed.", 1)
										}))
									})) : S(n, (function() {
										o.ZP.success("Copied to clipboard!", 1)
									}), (function(e) {
										o.ZP.error("Copy failed.", 1)
									})))
								}))
							}
						}, {
							key: "handleResetList",
							value: function() {
								this.editor.resetList()
							}
						}, {
							key: "handleTextBgChange",
							value: function(e) {
								var t = Fe.text,
									n = !1;
								if ("text-bg" === e)
									if (this.state.selectShape) {
										var r = this.state.selectShape,
											i = this.state.selectShape.isTextBg;
										r.isTextBg = !i, this.setState({
											selectShape: r
										}), t.isTextBg = !i, n = !0, this.editor.setTextBackground(!i)
									} else t.isTextBg = !t.isTextBg, n = !0, this.editor.setTextBackground(t.isTextBg);
								else this.state.selectShape ? (r = this.state.selectShape, i = this.state.selectShape.showShadow, r.showShadow = !i, this.setState({
									selectShape: r
								}), t.showShadow = !i, n = !0, this.editor.setShowShadow(!i)) : (t.showShadow = !t.showShadow, n = !0, this.editor.setShowShadow(t.showShadow));
								n && (localStorage.draw_style = JSON.stringify(Fe)), this.setState({
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
								var n = this.editor.bg_info.width / this.editor.bg_info.height;
								"width" === e ? !0 === this.state.resizeProportional ? this.setState({
									resizeWidth: parseInt(t.target.value),
									resizeHeight: parseInt(t.target.value) / n
								}) : this.setState({
									resizeWidth: parseInt(t.target.value)
								}) : !0 === this.state.resizeProportional ? this.setState({
									resizeWidth: parseInt(t.target.value) * n,
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
								var t = e.target.files[0];
								if (t) {
									var n = URL.createObjectURL(t);
									this.insertImage(n)
								}
							}
						}, {
							key: "editor_style_callback",
							value: function(e, t) {
								switch (e) {
									case "crop":
										"done" !== t && this.setState({
											cropWidth: t.width,
											cropHeight: t.height
										});
										break;
									case "undo":
										this.setState({
											canUndo: t
										}), this.state.enableBrowser && this.updateBorderShow(this.state.borderType), this.state.enablePadding && this.updateContainerTop(this.state.enableBrowser, this.state.enablePadding, this.state.paddingSize), this.editor.updateMaskPosition(this.state.maskPosition.value);
										break;
									case "redo":
										this.setState({
											canRedo: t
										});
										break;
									case "del":
										this.setState({
											canDeleteSelected: t
										});
										break;
									case "clear":
										this.setState({
											canClear: !t
										}), this.state.enableBrowser && this.updateBorderShow(this.state.borderType);
										break;
									case "selected":
										this.handleSelectShape(t)
								}
							}
						}, {
							key: "handleSelectShape",
							value: function(e) {
								if (e) {
									var t = "";
									switch (e.shape) {
										case 1:
											t = "curve";
											break;
										case 3:
											t = "rect";
											break;
										case 4:
											t = "ellipse";
											break;
										case 7:
											t = "callout";
											break;
										case 30:
											t = "image";
											break;
										case 8:
											t = "list";
											break;
										case 10:
											t = "highlight";
											break;
										case 23:
											t = "big_head_arrow";
											break;
										case 22:
											t = "bezier_arrow";
											break;
										case 20:
											t = "line_arrow";
											break;
										case 2:
											t = "line";
											break;
										case 5:
											t = "rect_blur";
											break;
										case 80:
											t = "text"
									}
									e.shapeName = t, this.setState({
										selectShape: e
									})
								} else if (this.setState({
										selectShape: null
									}), this.state.currentToolGroup) {
									var n = Fe[this.state.currentToolGroup];
									n && (n.width ? this.editor.setPenWidth(n.width) : "highlight" === this.state.currentTool && (n.width = 16, this.editor.setPenWidth(16)), n.fontFamily && (this.editor.setFontName(n.fontFamily), this.editor.setTextBackground(!!n.isTextBg && n.isTextBg), this.editor.setShowShadow(!!n.showShadow && n.showShadow)), n.fontSize && this.editor.setFontSize(n.fontSize), this.editor.setPenColor(n.color))
								}
							}
						}, {
							key: "initEditor",
							value: function(e) {
								if (e) {
									var t = this,
										n = new Image;
									n.crossOrigin = "Anonymous", this.editor = new je.Z({
										out_container: this.outerContainer.current,
										container: this.container.current,
										doodle_canvas: this.doodleCanvas.current,
										layer_canvas: this.layerCanvas.current,
										textarea: this.textarea.current,
										textarea_out: this.textareaOut.current,
										$list_dialog: this.listDialog.current,
										image: n
									}, (function(e, n) {
										t.editor_style_callback(e, n)
									})), n.src = e, n.onload = function() {
										t.originWidth = this.width, t.originHeight = this.height, t.editor.setBgImage(n, !1), t.editor.setPenColor(t.state.currentColor), t.editor.setFontSize(t.state.currentFontSize), t.editor.setPenWidth(t.state.currentPenWidth), t.editor.setFontName(t.state.currentFontFamily), t.editor.setBlurRadius(30), t.setState({
											isReady: !0
										})
									}
								}
							}
						}, {
							key: "insertImage",
							value: function(e, t) {
								var n = this,
									r = new Image;
								r.src = e;
								var i = {
									image: r,
									width: 0,
									height: 0,
									choose_type: "full"
								};
								r.img_info = i, r.onload = function() {
									i.width = this.naturalWidth, i.height = this.naturalHeight, t ? n.editor.insertMaskImage(i, n.state.maskPosition.value, n.state.maskSize / 100, n.state.maskOpacity / 100) : n.editor.insertSvgImage(i)
								}
							}
						}, {
							key: "handleCloseUpgrade",
							value: function() {
								this.setState({
									isShownUpgrade: !1
								})
							}
						}, {
							key: "updateContainerTop",
							value: function(e, t, n) {
								var r = parseInt(this.outerContainer.current.offsetHeight),
									i = parseInt(this.container.current.offsetHeight);
								this.container.current.style.top = e || t && n > 0 ? "0px" : r - i > 40 ? "40px" : "0px"
							}
						}, {
							key: "resetStatus",
							value: function(e) {
								"browser" === e ? (this.setState({
									enableBrowser: !1
								}), this.updateContainerTop(!1, this.state.enablePadding, this.state.paddingSize)) : "padding" === e ? this.setState({
									enablePadding: !1
								}) : "watermask" === e && (this.setState({
									enableMask: !1
								}), this.editor.removeMask())
							}
						}, {
							key: "rePositionBorder",
							value: function(e, t) {
								if (this.headerBorder.current) {
									var n = Re[t].height;
									this.container.current.style.top = 0;
									var r = this.doodleCanvas.current.width / parseInt(this.doodleCanvas.current.style.width);
									"mac" !== t && "windows" !== t && (e *= window.devicePixelRatio / r);
									var i = parseInt(n * e),
										a = this.doodleCanvas.current.width / e,
										o = parseInt(a / r) * e;
									if (Re[t].left) {
										this.headerBorder.current.style.width = o + "px", this.headerBorder.current.style.height = i + "px", this.headerLeft.current.style.height = i + "px", this.headerRight.current.style.height = i + "px", this.headerCenter.current.style.height = i + "px";
										var s = "matrix(" + e + ", 0, 0, " + e + "," + 120 * (1 - e) / 2 + "," + (22 - 22 * e) / 2 + ")";
										this.timeRef.current.style.transform = s;
										var c = 18 * e,
											l = parseInt(a / r) - (Re[t].left - 50) - Re[t].right,
											u = "matrix(" + (e *= window.devicePixelRatio / r) + ", 0, 0, " + e + "," + l * (e - 1) / 2 + "," + (c - 18) / 2 + ")";
										this.urlFeld.current.style.transform = u
									} else s = "matrix(" + e + ", 0, 0, " + e + "," + o / e * (e - 1) / 2 + "," + (this.urlContentHeight * e - this.urlContentHeight) / 2 + ")", "url_top" == t ? (i = this.urlContentHeight * e, this.urlTopRef.current.style.width = o + "px", this.urlTopRef.current.style.height = i + "px", this.urlTopContent.current.style.transform = s) : (i = this.urlContentHeight * e, this.urlBottomRef.current.style.height = i + "px", this.urlBottomRef.current.style.width = o + "px", this.urlBottomContent.current.style.transform = s)
								}
							}
						}, {
							key: "updateBorderShow",
							value: function(e) {
								var t = this;
								if ("none" !== e) {
									this.setState({
										showTopBorder: !0
									});
									var n = this.doodleCanvas.current.width / this.state.currentScale,
										r = this.doodleCanvas.current.width / parseInt(this.doodleCanvas.current.style.width),
										i = parseInt(n / r);
									if (parseInt(this.container.current.style.width), Re[e].left) {
										if (i < 460) return this.setState({
											enableBrowser: !1
										}), void o.ZP.warning("The image size is too small to add a browser border.", 1.2);
										var a, s = Re[e].left / i,
											c = Re[e].right / i;
										this.headerBorder.current.style.width = i + "px", this.headerLeft.current.style.width = 100 * s + "%", this.headerRight.current.style.width = 100 * c + "%", this.headerCenter.current.style.width = 100 * (1 - s - c + 1 / i) + "%", this.container.current.style.marginBottom = "-6px", this.container.current.style.top = 0;
										var l = 144 / i,
											u = this.urlFeld.current,
											h = i - Re[e].left - Re[e].right;
										this.urlFeld.current.style.left = 100 * l + "%", this.urlFeld.current.style.top = 58 / 86 * 100 + "%", this.timeRef.current.style.bottom = 38 / 86 * 100 + "%", this.urlFeld.current.style.width = h + "px", this.urlFeld.current.style.height = "18px", this.urlFeld.current.height = 18 * window.devicePixelRatio, this.urlFeld.current.width = h * window.devicePixelRatio, a = this.props.tabUrl ? this.props.tabUrl : "";
										var d = u.getContext("2d");
										d.font = 13 * window.devicePixelRatio + "px Arial", d.fillStyle = "#000000", d.measureText(a).width > h * window.devicePixelRatio && (a = N(d, a, h * window.devicePixelRatio)), d.fillText(a, 0, 13 * window.devicePixelRatio)
									} else {
										var f = this.props.tabUrl ? "URL:" + this.props.tabUrl : "";
										! function(e, t, n, r, i) {
											var a = e.getContext("2d"),
												o = n && n.length ? t + " " + n : t,
												s = "single",
												c = 40,
												l = "bold 24px Arial";
											if (a.font = l, a.measureText(o).width > r) {
												s = "multiple";
												var u = k(a, n, r);
												c = 40 * (u.length + 1)
											}
											if (i(c), e.width = r, e.height = c, a.fillStyle = "#000000", a.fillRect(0, 0, e.width, c), a.restore(), a.fillStyle = "#ffffff", a.textBaseline = "top", a.strokeStyle = "#ffffff", a.font = l, "single" === s) a.fillText(o, 10, 8);
											else {
												a.fillText(t, 10, 8);
												for (var h = 0; h < u.length; h++) a.fillText(u[h], 10, 8 + 40 * (h + 1))
											}
										}((u = "url_top" !== e ? this.urlBottomContent : this.urlTopContent).current, "Captured at: " + this.state.captureTime, f, n, (function(e) {
											u.current.style.height = e / window.devicePixelRatio + "px", u.current.style.width = n / window.devicePixelRatio + "px", t.urlContentHeight = e / window.devicePixelRatio
										}))
									}
									var p = this.state.currentScale;
									this.rePositionBorder(p, e)
								} else this.setState({
									showTopBorder: !1
								})
							}
						}, {
							key: "handleToolBarBtnClick",
							value: function(e, t) {
								var n = this,
									r = this.editor;
								if ("shape" === e) {
									var i = t.shapeKey,
										a = null;
									if (this.state.selectShape && (a = this.state.selectShape.shapeName), this.setState({
											selectShape: null
										}), r.unSelectAll(), !(t.shape !== this.state.currentTool || t.fromMenu || a && a !== t.shape)) return r.setPenType(""), void this.setState({
										currentTool: "",
										currentToolGroup: ""
									});
									// if (-1 !== ve.indexOf(t.shape) && !this.props.permissions.allowAdvancedToolForImageEditor) return void this.setState({
									// 	upgradeType: t.shape,
									// 	isShownUpgrade: !0
									// });
									if ("border" === t.shape) this.setState({
										borderAction: !0
									});
									else if ("highlight" == t.shape)(o = Fe[i]) || (Fe.highlight = o = {
										width: 16,
										color: "rgb(255, 0, 0)",
										contains: ["highlight"]
									}), r.unSelectAll(), r.setPenOpacity(.3), r.setPenWidth(o.width ? o.width : 16), r.setPenColor(o.color ? o.color : "rgb(255, 0, 0)"), r.setPenType("highlight");
									else {
										if (r.unSelectAll(), r.setPenOpacity(1), i && Fe[i]) {
											var o = Fe[i];
											r.setPenWidth(o.width), r.setPenColor(o.color), o.fontFamily && r.setFontName(o.fontFamily), o.fontSize && r.setFontSize(o.fontSize), "text" === i && r.setShowShadow(o.showShadow), r.setTextBackground(!!o.isTextBg && o.isTextBg), r.setTextStrokeColor(o.strokeColor)
										} else r.setPenWidth(this.state.currentPenWidth);
										r.setPenType(t.shape)
									}
									t.shape && i && (localStorage[i] = t.shape), this.setState({
										selectShape: null,
										currentTool: t.shape,
										currentToolGroup: i
									})
								} else if ("ocr" == e) switch (t.actionType) {
									case "sendSider":
										this.handleSiderGuide(!0);
										break;
									case "hideOCRGuide":
										this.handleSiderGuide(!1);
										break;
									case "getSider":
										chrome.runtime.sendMessage({
											action: "getSider"
										}), this.handleSiderGuide(!1)
								} else if ("action" === e) {
									i = t.shapeKey;
									var s = !1;
									switch (t.actionType) {
										case "crop":
											this.setState({
												isInCropMode: !0
											}), r.cutImage();
											break;
										case "addMask":
											this.insertImage(t.value, !0);
											break;
										case "copy":
											this.copyImageAction();
											break;
										case "changeBowser":
											this.setState({
												borderType: t.value
											}, (function() {
												"url_bottom" === t.value ? n.outerContainer.current.scrollTop = n.outerContainer.current.scrollHeight : n.outerContainer.current.scrollTop = 0
											})), this.updateBorderShow(t.value);
											break;
										case "ToolColorSelect":
											r.unactiveTextbox(), r.unSelectAll(), r.setPenType(""), this.setState({
												selectShape: null,
												currentTool: "",
												currentToolGroup: ""
											});
											break;
										case "changeStroke":
											r.setTextStrokeColor(t.value), i && ((o = Fe[i]).strokeColor = t.value, s = !0), this.state.selectShape && this.state.selectShape.strokeColor && ((u = this.state.selectShape).strokeColor = t.value, this.setState({
												selectShape: u
											})), this.setState({
												isTextBackground: !this.state.isTextBackground
											});
											break;
										case "changeSwitchValue":
											"browser" == (e = t.type) ? (this.setState({
												enableBrowser: t.value
											}, (function() {
												t.value && ("url_bottom" === n.state.borderType ? n.outerContainer.current.scrollTop = n.outerContainer.current.scrollHeight : n.outerContainer.current.scrollTop = 0)
											})), t.value ? this.updateBorderShow(this.state.borderType) : this.resetStatus(e)) : "padding" === e ? (this.setState({
												enablePadding: t.value
											}), t.value || this.resetStatus(e), this.updateContainerTop(this.state.enableBrowser, t.value, this.state.paddingSize)) : "watermask" === e ? (this.setState({
												enableMask: t.value
											}), t.value || this.resetStatus(e)) : "check_url" === e ? this.setState({
												checkedUrl: t.value
											}) : "check_time" === e ? this.setState({
												checkedCaptureTime: t.value
											}) : "padding_size" === e ? (this.setState({
												paddingSize: t.value
											}), this.updateContainerTop(this.state.enableBrowser, this.state.enablePadding, t.value)) : "mask_size" === e ? (this.setState({
												maskSize: t.value
											}), this.editor.updateMaskScale(t.value / 100)) : "mask_opacity" === e && (this.setState({
												maskOpacity: t.value
											}), this.editor.updateMaskOpacity(t.value / 100));
											break;
										case "changeMaskPosition":
											this.setState({
												maskPosition: t.value
											});
											var c = t.value;
											this.editor.updateMaskPosition(c.value);
											break;
										case "changeColor":
											"padding_color" === i ? this.setState({
												paddingColor: t.value
											}) : (this.setState({
												currentColor: t.value
											}), r.setPenColor(t.value), localStorage["pen-color"] = t.value, i && ((o = Fe[i]) || (Fe[i] = o = {}), o.color = t.value, s = !0), this.state.selectShape && this.state.selectShape.color && ((u = this.state.selectShape).color = t.value, this.setState({
												selectShape: u
											})));
											break;
										case "changeRecentColor":
											if ("transparent" !== t.value) {
												var l = this.state.recentColors;
												l.indexOf(t.value) < 0 ? (l.unshift(t.value), l.pop()) : (l.splice(l.indexOf(t.value), 1), l.unshift(t.value)), localStorage.recent_clr = JSON.stringify(l), this.setState({
													recentColors: l
												})
											}
											break;
										case "changePenWidth":
											r.setPenWidth(parseInt(t.value)), i && ((o = Fe[i]) || (Fe[i] = o = {}), o.width = parseInt(t.value), s = !0), localStorage["pen-width"] = t.value;
											break;
										case "changeFontSize":
											r.setFontSize(parseInt(t.value)), i && ((o = Fe[i]).width = parseInt(t.value), o.fontSize = parseInt(t.value), s = !0), localStorage["font-size"] = t.value;
											break;
										case "changeFontFamily":
											var u;
											r.setFontName(t.value), i && ((o = Fe[i]).fontFamily = t.value, s = !0), this.state.selectShape && this.state.selectShape.fontName && ((u = this.state.selectShape).fontName = t.value, this.setState({
												selectShape: u
											})), localStorage["font-family"] = t.value;
											break;
										case "zoom-in":
											if (2 !== this.state.currentScale) {
												var h = this.state.currentScale + .25;
												r.setScale(h), this.setState({
													currentScale: h,
													isShowScaleTip: !0
												}), this.rePositionBorder(h, this.state.borderType)
											}
											break;
										case "zoom-out":
											.25 !== this.state.currentScale && (h = this.state.currentScale - .25, r.setScale(h), this.setState({
												currentScale: h,
												isShowScaleTip: !0
											}), this.rePositionBorder(h, this.state.borderType));
											break;
										case "resetScale":
											r.setScale(1), this.setState({
												currentScale: 1,
												isShowScaleTip: !1
											}), this.rePositionBorder(1, this.state.borderType);
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
											// if (!this.props.permissions.allowAdvancedToolForImageEditor) return void this.setState({
											// 	upgradeType: "insertImage",
											// 	isShownUpgrade: !0
											// });
											this.fileInput.current.click();
											break;
										case "doInsertImage":
											// if (!this.props.permissions.allowAdvancedToolForImageEditor) return void this.setState({
											// 	upgradeType: "image",
											// 	isShownUpgrade: !0
											// });
											if ("web" === this.props.type) var d = "/images/svg/" + t.value + ".svg";
											else d = "./images/svg/" + t.value + ".svg";
											this.insertImage(d);
											break;
										case "doResize":
											r.setImageSize(this.state.resizeWidth, this.state.resizeHeight), this.updateContainerTop(this.state.enableBrowser, this.state.enablePadding, this.state.paddingSize);
											break;
										case "border":
											break;
										default:
											r[t.actionType]()
									}
									s && (localStorage.draw_style = JSON.stringify(Fe))
								}
							}
						}, {
							key: "render",
							value: function() {
								var e = this.state,
									t = e.isShownUpgrade,
									n = e.isReady,
									r = e.borderType,
									i = e.checkedCaptureTime,
									a = e.checkedUrl,
									o = e.enableBrowser,
									s = e.borderAction,
									c = L()("editor", this.props.className),
									l = L()("loading-page", {
										active: !n
									});
								return (0, P.jsxs)("div", {
									className: c,
									tabIndex: "0",
									children: [(0, P.jsx)("div", {
										className: l,
										children: (0, P.jsxs)("div", {
											className: "center",
											children: [(0, P.jsx)("div", {
												className: "loading-spinner",
												children: (0, P.jsxs)("div", {
													className: "spinner",
													children: [(0, P.jsx)("div", {
														className: "rect1"
													}), (0, P.jsx)("div", {
														className: "rect2"
													}), (0, P.jsx)("div", {
														className: "rect3"
													}), (0, P.jsx)("div", {
														className: "rect4"
													}), (0, P.jsx)("div", {
														className: "rect5"
													})]
												})
											}), (0, P.jsxs)("div", {
												className: "brand",
												children: [(0, P.jsx)("div", {
													className: "logo"
												}), "AWESOME SCREENSHOT"]
											})]
										})
									}), (0, P.jsx)("input", {
										type: "file",
										className: "file-input",
										ref: this.fileInput,
										accept: ".jpg,.jpeg,.png",
										onChange: this.handleFileInputChange
									}), (0, P.jsx)(ge, Pe(Pe({}, this.state), {}, {
										handleToolBarBtnClick: this.handleToolBarBtnClick,
										handleResizeInputChange: this.handleResizeInputChange,
										handleResizeProportionChange: this.handleResizeProportionChange,
										handleResetList: this.handleResetList,
										getResizeInfo: this.getResizeInfo,
										finishEdit: this.finishEdit,
										handleTextBgChange: this.handleTextBgChange,
										handleBack: this.props.handleBack,
										type: this.props.type,
										quickReport: this.props.quickReport,
										isReported: this.props.isReported,
										menuType: this.props.menuType,
										drawStyle: Fe,
										tabUrl: this.props.tabUrl,
										allowAdvancedTool: this.props.permissions.allowAdvancedToolForImageEditor
									})), (0, P.jsx)("div", {
										className: "editor-outer-container",
										tabIndex: "0",
										id: "editor-outer-container",
										ref: this.outerContainer,
										children: (0, P.jsxs)("div", {
											className: "border-container",
											style: {
												padding: (this.state.enablePadding ? this.state.paddingSize : 0) + "px",
												backgroundColor: this.state.enablePadding && this.state.paddingSize > 0 ? this.state.paddingColor : "transparent"
											},
											children: [(0, P.jsxs)("div", {
												className: o && s && ("mac" === r || "windows" === r) ? "header-container show" : "header-container",
												ref: this.headerBorder,
												children: [(0, P.jsxs)("div", {
													className: "header-bar",
													ref: this.headerBar,
													children: [(0, P.jsx)("div", {
														className: "header-left " + r,
														ref: this.headerLeft
													}), (0, P.jsx)("div", {
														className: "header-center " + r,
														ref: this.headerCenter
													}), (0, P.jsx)("div", {
														className: "header-right " + r,
														ref: this.headerRight
													}), (0, P.jsx)("div", {
														className: "header-time " + (i ? "show" : ""),
														ref: this.timeRef,
														children: this.state.captureTime
													})]
												}), (0, P.jsx)("canvas", {
													ref: this.urlFeld,
													style: {
														visibility: a ? "visible" : "hidden"
													}
												})]
											}), (0, P.jsx)("div", {
												className: "url-region",
												style: {
													display: o && "url_top" == r ? "block" : "none"
												},
												ref: this.urlTopRef,
												children: (0, P.jsx)("canvas", {
													ref: this.urlTopContent
												})
											}), (0, P.jsxs)("div", {
												className: "editor-container",
												ref: this.container,
												children: [(0, P.jsx)("canvas", {
													className: "doodle-canvas",
													id: "canvas",
													ref: this.doodleCanvas
												}), (0, P.jsx)("canvas", {
													className: "layer-canvas",
													id: "canvas2",
													ref: this.layerCanvas
												}), (0, P.jsx)("div", {
													className: "editor-outer-textarea",
													ref: this.textareaOut,
													children: (0, P.jsx)("textarea", {
														className: "editor-textarea",
														ref: this.textarea
													})
												}), (0, P.jsxs)("div", {
													className: "editor-list-dialog",
													ref: this.listDialog,
													children: ["Number:", (0, P.jsx)("input", {
														type: "number",
														className: "editor-input"
													})]
												})]
											}), (0, P.jsx)("div", {
												className: "url-region url_bottom",
												style: {
													display: o && "url_bottom" == r ? "block" : "none"
												},
												ref: this.urlBottomRef,
												children: (0, P.jsx)("canvas", {
													ref: this.urlBottomContent
												})
											})]
										})
									}), (0, P.jsx)(Se.Z, {
										visible: t,
										onCancel: this.handleCloseUpgrade,
										type: this.state.upgradeType
									})]
								})
							}
						}], n && Ce(t.prototype, n), r && Ce(t, r), Object.defineProperty(t, "prototype", {
							writable: !1
						}), a
					}(s.PureComponent);
				const Be = Me;
				n(63170);
				var Ue = n(76329),
					qe = (n(79855), n(19181)),
					ze = (n(91104), n(38993)),
					Ze = (n(82648), n(71577)),
					He = n(88485),
					Ge = n(16165),
					Ve = (n(82452), n(98374)),
					We = n(60327),
					Ye = n(92976),
					Ke = n(98688),
					Je = n(30418),
					Xe = n(24986),
					$e = n(73586),
					Qe = n(49355),
					et = n(62504),
					tt = n(86324),
					nt = n(92504),
					rt = n(11685),
					it = n(1744),
					at = n(42978),
					ot = n(83225),
					st = n(83462),
					ct = n(33038),
					lt = n(29970),
					ut = n(9187),
					ht = n(48960),
					dt = n(26436),
					ft = n(93185),
					pt = n(1080),
					mt = n(66716),
					gt = n(36716),
					vt = n(4883),
					yt = n(85631),
					bt = n(2134),
					wt = n(68766),
					xt = n(45250),
					St = n(4689),
					jt = n(11734),
					Nt = n(68901),
					kt = n(97479),
					At = n(63501),
					Lt = n(4450),
					Pt = n(55744),
					It = n(10757),
					Ct = n(83538),
					_t = n(9571),
					Ot = n(7241),
					Tt = n(42025),
					Dt = n(31727),
					Et = n(71428),
					Ft = n(57179),
					Rt = n(69546),
					Mt = n(60126),
					Bt = n(17687),
					Ut = n(22939),
					qt = n(63059),
					zt = n(58899),
					Zt = n(58707),
					Ht = n(38183),
					Gt = n(76664),
					Vt = n(24346),
					Wt = n(44436),
					Yt = n(85309),
					Kt = n(54392),
					Jt = n(68321),
					Xt = n(8197),
					$t = n(21482),
					Qt = n(37491),
					en = n(64322),
					tn = n(13243),
					nn = n(64664),
					rn = n(13736),
					an = n(94222),
					on = n(63073),
					sn = n(82082),
					cn = n(26836),
					ln = n(74748),
					un = n(59333),
					hn = n(70110),
					dn = n(15801),
					fn = n(70161),
					pn = n(49233),
					mn = n(14962),
					gn = n(21844),
					vn = n(27807),
					yn = n(64094),
					bn = n(93388),
					wn = n(92580),
					xn = n(93103),
					Sn = n(38514),
					jn = n(25912),
					Nn = n(75847),
					kn = n(30227),
					An = n(74990),
					Ln = n(91696),
					Pn = n(19877),
					In = n(31614),
					Cn = n(64970),
					_n = n(69426),
					On = n(83748),
					Tn = n(78037),
					Dn = n(12528),
					En = n(30913),
					Fn = n(54311),
					Rn = n(53495),
					Mn = n(77809),
					Bn = n(46516),
					Un = n(32729),
					qn = n(72005),
					zn = n(48858),
					Zn = n(26191),
					Hn = n(94372),
					Gn = n(60272),
					Vn = n(67449),
					Wn = n(56191),
					Yn = n(45747),
					Kn = n(39873),
					Jn = n(19961),
					Xn = n(96596),
					$n = n(17352),
					Qn = n(33146),
					er = n(98258),
					tr = n(59478),
					nr = n(76838),
					rr = n(67671),
					ir = n(56101),
					ar = n(61780),
					or = n(72245),
					sr = n(44549),
					cr = n(61654),
					lr = n(49795),
					ur = n(19926),
					hr = n(22015),
					dr = n(22594),
					fr = n(45818);

				function pr(e) {
					return pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, pr(e)
				}

				function mr(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function gr(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? mr(Object(n), !0).forEach((function(t) {
							vr(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mr(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function vr(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== pr(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== pr(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === pr(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function yr(e) {
					var t = L()("svg-icon", e.className);
					return (0, P.jsx)(Ge.Z, gr(gr({}, e), {}, {
						className: t
					}))
				}
				var br = {
						AddImageIcon: Ve.Z,
						AddIcon: We.Z,
						AnnotateIcon: Ye.Z,
						ArrowIcon: Ke.Z,
						CloseIcon: Je.Z,
						CommentIcon: Xe.Z,
						CopyLinkIcon: $e.Z,
						CopyIcon: Qe.Z,
						DownloadIcon: et.Z,
						EmbedIcon: tt.Z,
						FeedbackIcon: nt.Z,
						FolderIcon: rt.Z,
						ImagesIcon: it.Z,
						ItemsIcon: at.Z,
						LoadingMoreIcon: ot.Z,
						MoreIcon: st.Z,
						MoveFolderIcon: ct.Z,
						NotificationIcon: lt.Z,
						OpenFolderIcon: ut.Z,
						PutBackIcon: ht.Z,
						RenameIcon: dt.Z,
						RightIcon: ft.Z,
						TagIcon: pt.Z,
						TrashFilledIcon: mt.Z,
						TrashIcon: gt.Z,
						VideosIcon: vt.Z,
						AddTextIcon: yt.Z,
						CutIcon: bt.Z,
						ProIcon: wt.Z,
						PullIcon: xt.Z,
						ReduceIcon: St.Z,
						MoreDotIcon: jt.Z,
						PlayIcon: kt.Z,
						PauseIcon: At.Z,
						FullScreenIcon: Lt.Z,
						NormalScreenIcon: Pt.Z,
						PIPIcon: It.Z,
						ReplayIcon: Ct.Z,
						VolumeCloseIcon: _t.Z,
						VolumeHighIcon: Ot.Z,
						VolumeLowIcon: Tt.Z,
						SharedIcon: Dt.Z,
						StepForwardIcon: Et.Z,
						StepBackIcon: Ft.Z,
						CommentBubbleIcon: Rt.Z,
						MentionMsgIcon: Mt.Z,
						VideoEditorIcon: Nt.Z,
						EmojiIcon: Bt.Z,
						RecordDesktopIcon: Ut.Z,
						RecordCameraIcon: qt.Z,
						PricingTagIcon: zt.Z,
						LightThemeIcon: Zt.Z,
						DarkThemeIcon: Ht.Z,
						AutoThemeIcon: Gt.Z,
						NewTabIcon: Vt.Z,
						MicIcon: Wt.Z,
						HDIcon: Yt.Z,
						CameraIcon: Kt.Z,
						ChromeIcon: Jt.Z,
						EdgeIcon: Xt.Z,
						GoogleIcon: $t.Z,
						BrushIcon: Qt.Z,
						SecurityIcon: tn.Z,
						SyncIcon: en.Z,
						ChannelIcon: nn.Z,
						SettingIcon: rn.Z,
						MemberIcon: an.Z,
						PersonIcon: on.Z,
						QuestionMarkIcon: sn.Z,
						CardIcon: cn.Z,
						SharedMeIcon: ln.Z,
						MeIcon: un.Z,
						StarIcon: hn.Z,
						EmptyIcon: dn.Z,
						PdfIcon: fn.Z,
						PrinterIcon: pn.Z,
						CopyImageIcon: mn.Z,
						SmileIcon: gn.Z,
						CrownIcon: vn.Z,
						CrownBgIcon: yn.Z,
						SharedMeFilledIcon: bn.Z,
						WarningIcon: wn.Z,
						BilligIcon: xn.Z,
						StarFolderIcon: Sn.Z,
						MeFilledIcon: jn.Z,
						AtIcon: Nn.Z,
						StickerIcon: Bt.Z,
						CameraNoIcon: kn.Z,
						TrashRecordIcon: An.Z,
						StopRecordIcon: Ln.Z,
						ActionBigIcon: In.Z,
						ActionMiniIcon: Pn.Z,
						CameraRecordIcon: Cn.Z,
						CheckboxIcon: _n.Z,
						DragIcon: On.Z,
						AddMemberIcon: Tn.Z,
						RecordPauseIcon: Dn.Z,
						RecordPlayIcon: En.Z,
						LockIcon: Fn.Z,
						EnterpriseIcon: Rn.Z,
						DomainIcon: Mn.Z,
						SsoIcon: Bn.Z,
						DownloadExtIcon: Un.Z,
						CopyExtIcon: qn.Z,
						PDFExtIcon: zn.Z,
						PrintExtIcon: Zn.Z,
						BackupExtIcon: Hn.Z,
						OutIcon: Gn.Z,
						ShareIcon: Vn.Z,
						DescIcon: Wn.Z,
						FolderFilledIcon: Yn.Z,
						VideoFolderIcon: Kn.Z,
						VideoFilmIcon: Jn.Z,
						VideoEditIcon: Xn.Z,
						IcStopIcon: Ln.Z,
						PointerIcon: $n.Z,
						ExtWarningIcon: Qn.Z,
						NoBackupIcon: er.Z,
						VideoFailedIcon: tr.Z,
						VideoStatusIcon: nr.Z,
						VideoPlayIcon: rr.Z,
						VideoDownloadIcon: ir.Z,
						VideoRetryIcon: ar.Z,
						VideoDeleteIcon: or.Z,
						MyItemIcon: sr.Z,
						DoneIcon: cr.Z,
						ScreenshotIIcon: lr.Z,
						TabIIcon: ur.Z,
						InfiniteIcon: hr.Z,
						BrainIcon: dr.Z,
						SiderOcrIcon: fr.Z
					},
					wr = {},
					xr = function(e) {
						wr[e] = (0, s.memo)((function(t) {
							return (0, P.jsx)(yr, gr({
								component: br[e]
							}, t))
						})), wr[e].displayName = e
					};
				for (var Sr in br) xr(Sr);
				wr.AddImageIcon;
				var jr = wr.AddIcon,
					Nr = (wr.AnnotateIcon, wr.ArrowIcon),
					kr = wr.CloseIcon,
					Ar = (wr.CommentIcon, wr.CopyLinkIcon, wr.CopyIcon, wr.DownloadIcon, wr.EmbedIcon, wr.FeedbackIcon),
					Lr = wr.FolderIcon,
					Pr = (wr.ImagesIcon, wr.ItemsIcon, wr.LoadingMoreIcon, wr.MoreIcon),
					Ir = (wr.MoveFolderIcon, wr.NotificationIcon, wr.OpenFolderIcon),
					Cr = (wr.PutBackIcon, wr.RenameIcon, wr.RightIcon, wr.TagIcon, wr.TrashFilledIcon, wr.TrashIcon, wr.VideosIcon, wr.AddTextIcon, wr.CutIcon, wr.ProIcon, wr.PullIcon, wr.ReduceIcon, wr.MoreDotIcon, wr.PlayIcon, wr.PauseIcon, wr.FullScreenIcon, wr.NormalScreenIcon, wr.PIPIcon, wr.ReplayIcon, wr.VolumeCloseIcon, wr.VolumeHighIcon, wr.VolumeLowIcon, wr.SharedIcon, wr.StepForwardIcon, wr.StepBackIcon, wr.CommentBubbleIcon, wr.MentionMsgIcon, wr.VideoEditorIcon, wr.EmojiIcon, wr.RecordDesktopIcon, wr.RecordCameraIcon, wr.PricingTagIcon, wr.LightThemeIcon, wr.DarkThemeIcon, wr.AutoThemeIcon, wr.NewTabIcon, wr.MicIcon, wr.HDIcon, wr.CameraIcon, wr.ChromeIcon, wr.EdgeIcon, wr.GoogleIcon),
					_r = (wr.BrushIcon, wr.SecurityIcon, wr.SyncIcon, wr.ChannelIcon),
					Or = wr.SettingIcon,
					Tr = (wr.MemberIcon, wr.PersonIcon, wr.QuestionMarkIcon, wr.CardIcon, wr.SharedMeIcon, wr.MeIcon),
					Dr = (wr.StarIcon, wr.EmptyIcon, wr.PdfIcon, wr.PrinterIcon, wr.CopyImageIcon, wr.SmileIcon, wr.CrownIcon),
					Er = (wr.CrownBgIcon, wr.SharedMeFilledIcon, wr.WarningIcon),
					Fr = (wr.BilligIcon, wr.StarFolderIcon, wr.MeFilledIcon, wr.AtIcon, wr.StickerIcon, wr.CameraNoIcon, wr.TrashRecordIcon, wr.StopRecordIcon, wr.ActionBigIcon, wr.ActionMiniIcon, wr.CameraRecordIcon, wr.DragIcon, wr.CheckboxIcon, wr.AddMemberIcon, wr.RecordPauseIcon, wr.RecordPlayIcon, wr.LockIcon, wr.EnterpriseIcon, wr.DomainIcon, wr.SsoIcon, wr.DownloadExtIcon),
					Rr = wr.CopyExtIcon,
					Mr = wr.PDFExtIcon,
					Br = wr.PrintExtIcon,
					Ur = wr.BackupExtIcon,
					qr = wr.OutIcon,
					zr = (wr.ShareIcon, wr.DescIcon, wr.FolderFilledIcon, wr.VideoFolderIcon, wr.VideoFilmIcon, wr.VideoEditIcon, wr.IcStopIcon, wr.PointerIcon, wr.ExtWarningIcon, wr.NoBackupIcon, wr.VideoFailedIcon, wr.VideoStatusIcon, wr.VideoPlayIcon, wr.VideoDownloadIcon, wr.VideoRetryIcon, wr.VideoDeleteIcon, wr.MyItemIcon, wr.DoneIcon, wr.ScreenshotIIcon, wr.TabIIcon, wr.InfiniteIcon, wr.BrainIcon, wr.SiderOcrIcon, n(40705), n(28374), n(72769));

				function Zr() {
					Zr = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						n = t.hasOwnProperty,
						r = Object.defineProperty || function(e, t, n) {
							e[t] = n.value
						},
						i = "function" == typeof Symbol ? Symbol : {},
						a = i.iterator || "@@iterator",
						o = i.asyncIterator || "@@asyncIterator",
						s = i.toStringTag || "@@toStringTag";

					function c(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						c({}, "")
					} catch (e) {
						c = function(e, t, n) {
							return e[t] = n
						}
					}

					function l(e, t, n, i) {
						var a = t && t.prototype instanceof d ? t : d,
							o = Object.create(a.prototype),
							s = new k(i || []);
						return r(o, "_invoke", {
							value: x(e, n, s)
						}), o
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
					var h = {};

					function d() {}

					function f() {}

					function p() {}
					var m = {};
					c(m, a, (function() {
						return this
					}));
					var g = Object.getPrototypeOf,
						v = g && g(g(A([])));
					v && v !== t && n.call(v, a) && (m = v);
					var y = p.prototype = d.prototype = Object.create(m);

					function b(e) {
						["next", "throw", "return"].forEach((function(t) {
							c(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function w(e, t) {
						function i(r, a, o, s) {
							var c = u(e[r], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									h = l.value;
								return h && "object" == Vr(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
									i("next", e, o, s)
								}), (function(e) {
									i("throw", e, o, s)
								})) : t.resolve(h).then((function(e) {
									l.value = e, o(l)
								}), (function(e) {
									return i("throw", e, o, s)
								}))
							}
							s(c.arg)
						}
						var a;
						r(this, "_invoke", {
							value: function(e, n) {
								function r() {
									return new t((function(t, r) {
										i(e, n, t, r)
									}))
								}
								return a = a ? a.then(r, r) : r()
							}
						})
					}

					function x(e, t, n) {
						var r = "suspendedStart";
						return function(i, a) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === i) throw a;
								return L()
							}
							for (n.method = i, n.arg = a;;) {
								var o = n.delegate;
								if (o) {
									var s = S(o, n);
									if (s) {
										if (s === h) continue;
										return s
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var c = u(e, t, n);
								if ("normal" === c.type) {
									if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
									return {
										value: c.arg,
										done: n.done
									}
								}
								"throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
							}
						}
					}

					function S(e, t) {
						var n = t.method,
							r = e.iterator[n];
						if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
						var i = u(r, e.iterator, t.arg);
						if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, h;
						var a = i.arg;
						return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
					}

					function j(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function N(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function k(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(j, this), this.reset(!0)
					}

					function A(e) {
						if (e) {
							var t = e[a];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var r = -1,
									i = function t() {
										for (; ++r < e.length;)
											if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return i.next = i
							}
						}
						return {
							next: L
						}
					}

					function L() {
						return {
							value: void 0,
							done: !0
						}
					}
					return f.prototype = p, r(y, "constructor", {
						value: p,
						configurable: !0
					}), r(p, "constructor", {
						value: f,
						configurable: !0
					}), f.displayName = c(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, c(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, b(w.prototype), c(w.prototype, o, (function() {
						return this
					})), e.AsyncIterator = w, e.async = function(t, n, r, i, a) {
						void 0 === a && (a = Promise);
						var o = new w(l(t, n, r, i), a);
						return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
							return e.done ? e.value : o.next()
						}))
					}, b(y), c(y, s, "Generator"), c(y, a, (function() {
						return this
					})), c(y, "toString", (function() {
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
					}, e.values = A, k.prototype = {
						constructor: k,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
								return o.type = "throw", o.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									o = a.completion;
								if ("root" === a.tryLoc) return r("end");
								if (a.tryLoc <= this.prev) {
									var s = n.call(a, "catchLoc"),
										c = n.call(a, "finallyLoc");
									if (s && c) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return r(a.finallyLoc)
									} else if (s) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
									} else {
										if (!c) throw new Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return r(a.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var i = this.tryEntries[r];
								if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
									var a = i;
									break
								}
							}
							a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var o = a ? a.completion : {};
							return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(o)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), h
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var r = n.completion;
									if ("throw" === r.type) {
										var i = r.arg;
										N(n)
									}
									return i
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: A(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), h
						}
					}, e
				}

				function Hr(e, t, n, r, i, a, o) {
					try {
						var s = e[a](o),
							c = s.value
					} catch (e) {
						return void n(e)
					}
					s.done ? t(c) : Promise.resolve(c).then(r, i)
				}

				function Gr(e) {
					return function() {
						var t = this,
							n = arguments;
						return new Promise((function(r, i) {
							var a = e.apply(t, n);

							function o(e) {
								Hr(a, r, i, o, s, "next", e)
							}

							function s(e) {
								Hr(a, r, i, o, s, "throw", e)
							}
							o(void 0)
						}))
					}
				}

				function Vr(e) {
					return Vr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Vr(e)
				}

				function Wr(e) {
					window.open(e)
				}

				function Yr(e) {
					return "[object Array]" === Object.prototype.toString.call(e)
				}

				function Kr(e) {
					return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
				}

				function Jr(e) {
					var t = document.createElement("textarea");
					t.value = e, t.style.position = "absolute", t.style.top = "-999999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
				}

				function Xr(e, t, n) {
					var r = [],
						i = document.createElement("img");
					i.onload = function() {
						for (var e = this.height, a = this.width, o = Math.ceil(e / t), s = e % t, c = 0; c < o; c++) {
							var l, u, h = document.createElement("canvas"),
								d = h.getContext("2d");
							h.width = a, l = u = h.height = c !== o - 1 ? t : s, d.drawImage(i, 0, t * c, a, l, 0, 0, a, u), r.push(h.toDataURL())
						}
						n(r)
					}, i.src = e
				}

				function $r(e) {
					function t(e) {
						return new Promise((function(t, n) {
							var r = new Image;
							r.crossOrigin = "Anonymous", r.onload = function() {
								t({
									ele: r,
									height: r.height,
									width: r.width
								})
							}, r.onerror = r.onabort = function() {
								n(e)
							}, r.src = e
						}))
					}
					for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r]));
					return Promise.all(n)
				}

				function Qr() {
					return new Promise((function(e) {
						chrome.permissions.request({
							permissions: ["downloads"]
						}, (function(t) {
							t && e()
						}))
					}))
				}

				function ei(e) {
					return ti.apply(this, arguments)
				}

				function ti() {
					return (ti = Gr(Zr().mark((function e(t) {
						var n, r, i;
						return Zr().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return n = t.filename, e.next = 3, (0, zr.S1)("save-as");
								case 3:
									return r = e.sent, e.next = 6, (0, zr.S1)("download_directory");
								case 6:
									i = e.sent, r && i && (t.filename = i + "/" + t.filename), chrome.downloads.download(t, (function(e) {
										(void 0 === e || chrome.runtime.lastError) && ni(t.url, n)
									}));
								case 10:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function ni(e, t) {
					var n = document.createElement("a"),
						r = document.createEvent("MouseEvents");
					r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), n.setAttribute("href", e), n.setAttribute("download", t), n.rel = "noopener", n.dispatchEvent(r)
				}

				function ri(e) {
					if (!e) return "local-image-" + ke()().format("YYYY-MM-DD_h_mm");
					var t = new URL(e),
						n = t.pathname ? t.pathname.split("/").splice(1).join("-") + "-" : "";
					return "AwesomeScreenshot-" + t.hostname.replace(/^https?:\/\/(www\.)?/, "").replace(/^([^/]+)\.com/, "$1").replace(/[^A-Za-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^[_-]+/, "").replace(/[_-]+$/, "") + "-" + n + ke()().format("YYYY-MM-DD_h_mm")
				}

				function ii(e) {
					return new Promise((function(t) {
						var n = document.createElement("img"),
							r = document.createElement("canvas"),
							i = r.getContext("2d");
						n.onload = function() {
							r.width = n.width, r.height = n.height, i.drawImage(n, 0, 0), r.toBlob((function(e) {
								t(e)
							}))
						}, n.src = e
					}))
				}

				function ai(e, t, n) {
					navigator.clipboard.write([new ClipboardItem(Object.defineProperty({}, e.type, {
						value: e,
						enumerable: !0
					}))]).then(t, n)
				}

				function oi(e, t, n, r) {
					var i = document.createElement("canvas"),
						a = i.getContext("2d"),
						o = t.height,
						s = t.width,
						c = 0,
						l = 0,
						u = 0,
						h = null,
						d = t.border.borderType;
					t.border.paddingSize > 0 && (c = t.border.paddingSize, h = t.border.paddingColor, l += c, u += c, o += 2 * c, s += 2 * c), i.width = s, d && (o += t.border.height, i.height = o, "url_bottom" !== d && (u += t.border.height)), i.height = o, h && (a.save(), a.fillStyle = h, a.fillRect(0, 0, i.width, i.height), a.restore(), c > 0 && (a.shadowOffsetX = 4 * window.devicePixelRatio, a.shadowOffsetY = 4 * window.devicePixelRatio, a.shadowBlur = 4 * window.devicePixelRatio, a.shadowColor = "rgba(0,0,0,.15)"));
					var f = URL.createObjectURL(e);
					if ("mac" === d || "windows" === d)(function(e, t, n) {
						return new Promise((function(r) {
							if (e) {
								var i, a = t.paddingSize ? t.paddingSize : 0,
									o = "mac" === t.borderType ? "mac" : "win",
									s = "web" == n ? "/static/images/" : "./images/",
									c = s + o + "-header-left.png",
									l = s + o + "-header-center.png",
									u = s + o + "-header-right.png",
									h = e.width;
								$r([c, l, u]).then((function(n) {
									var s = e.getContext("2d"),
										c = a;
									if (i = h - t.left - t.right - 2 * a, n.forEach((function(e, n) {
											var o;
											1 === n ? o = i : 0 === n ? o = t.left : 2 === n && (o = t.right), s.drawImage(e.ele, 0, 0, e.width, e.height, c, a, o, t.height), c += o, 2 === n && r()
										})), t.url)
										if (s.font = 13 * window.devicePixelRatio + "px Arial", s.fillStyle = "#000000", s.measureText(t.url).width > i) {
											var l = function(e, t, n) {
												for (var r = t.split(""), i = r[0], a = 1; a < r.length; a++) {
													var o = r[a];
													if (!(e.measureText(i + " " + o).width < n)) break;
													i += o
												}
												return i + "..."
											}(s, t.url, i);
											s.fillText(l, 140 * window.devicePixelRatio + a, ("mac" === o ? 66 : 70) * window.devicePixelRatio + a)
										} else s.fillText(t.url, 140 * window.devicePixelRatio + a, ("mac" === o ? 66 : 70) * window.devicePixelRatio + a);
									if (t.captureTime) {
										s.font = 12 * window.devicePixelRatio + "px sans-serif", s.fillStyle = "#000000";
										var u = s.measureText(t.captureTime).width,
											d = h - a - 10 * window.devicePixelRatio - u,
											f = "mac" === o ? 34 * window.devicePixelRatio + a : 39 * window.devicePixelRatio + a;
										s.fillText(t.captureTime, d, f)
									}
								}))
							}
						}))
					})(i, t.border, n).then((function() {
						var e = document.createElement("img");
						e.onload = function() {
							a.drawImage(e, l, u);
							var t = "png" === localStorage.format ? "image/png" : "image/jpeg";
							i.toBlob((function(e) {
								r(e)
							}), t, 1)
						}, e.src = f
					}));
					else {
						! function(e, t, n) {
							if (!(Object.keys(t).indexOf("url") < 0)) {
								var r = e.getContext("2d"),
									i = "url_top" == t.borderType ? 0 : n,
									a = t.paddingSize ? t.paddingSize : 0,
									o = e.width - 20 - 2 * a,
									s = "Captured at: " + t.captureTime + (t.url && t.url.length ? "  URL: " + t.url : ""),
									c = "single",
									l = 40;
								if (r.font = "bold 24px Arial", r.measureText(s).width > o) {
									c = "multiple";
									var u = ci(r, "URL:" + t.url, o);
									l = 40 * (u.length + 1)
								}
								if (r.fillStyle = "#000000", r.fillRect(a, i + a, e.width - 2 * a, l), r.restore(), r.fillStyle = "#ffffff", r.textBaseline = "top", r.strokeStyle = "#ffffff", r.font = "bold 24px Arial", "single" === c) r.fillText(s, 12 + a, 8 + i + a);
								else {
									r.fillText("Captured at:" + t.captureTime, 12 + a, 8 + i + a);
									for (var h = 0; h < u.length; h++) r.fillText(u[h], 12 + a, 8 + 40 * (h + 1) + i + a)
								}
							}
						}(i, t.border, t.height);
						var p = document.createElement("img");
						p.onload = function() {
							a.drawImage(p, l, u);
							var e = "png" === localStorage.format ? "image/png" : "image/jpeg";
							i.toBlob((function(e) {
								r(e)
							}), e, 1)
						}, p.src = f
					}
				}

				function si(e, t, n, r) {
					var i = document.createElement("canvas"),
						a = i.getContext("2d"),
						o = n && n.length ? "Captured at: " + ke()().format("YYYY/MM/DD hh:mm") + "  URL: " + n : "Captured at: " + ke()().format("YYYY/MM/DD hh:mm"),
						s = "single",
						c = 40,
						l = "bold 24px Arial",
						u = "bold 24px Arial";
					a.font = l;
					ci(a, o, t.width);
					var h = a.measureText("Captured at: ").width,
						d = a.measureText("URL: ").width;
					if (a.font = u, h + d + a.measureText(n).width + a.measureText(ke()().format("YYYY/MM/DD hh:mm") + " ").width > t.width) {
						s = "multiple";
						var f = ci(a, "URL: " + n, t.width),
							p = f.length;
						c = 40 * (p + 1)
					}
					i.width = t.width, i.height = t.height + c;
					var m = URL.createObjectURL(e),
						g = document.createElement("img");
					if (g.onload = Gr(Zr().mark((function e() {
							var t;
							return Zr().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return a.drawImage(g, 0, c), e.next = 3, (0, zr.S1)("format");
									case 3:
										t = e.sent, i.toBlob((function(e) {
											r(e)
										}), t, 1);
									case 6:
									case "end":
										return e.stop()
								}
							}), e)
						}))), g.src = m, a.fillStyle = "#000000", a.fillRect(0, 0, i.width, c), a.restore(), a.fillStyle = "#ffffff", a.textBaseline = "top", a.strokeStyle = "#ffffff", a.font = "bold 24px Arial", "single" === s) {
						a.fillText("Captured at: ", 10, 10), a.font = u, a.fillText(ke()().format("YYYY/MM/DD hh:mm A") + " ", 10 + h, 10);
						var v = a.measureText(ke()().format("YYYY/MM/DD hh:mm A") + " ").width + 20;
						n.length && (a.font = l, a.fillText("URL: ", 10 + h + v, 10), a.font = u, a.fillText(n, 10 + h + v + d, 10))
					} else {
						a.fillText("Captured at: ", 10, 10), a.font = u, a.fillText(ke()().format("MM/DD/YYYY, hh:mm A"), 10 + h, 10);
						for (var y = 0; y < f.length; y++) 0 === y ? (a.font = l, a.fillText("URL: ", 10, 50), a.font = u, a.fillText(f[0].substring(5), 10 + d, 50)) : (a.font = u, a.fillText(f[y], 10, 10 + 40 * (y + 1)))
					}
					a.beginPath(), a.moveTo(0, c), a.stroke(), a.closePath()
				}

				function ci(e, t, n) {
					n -= 10;
					for (var r = t.split(""), i = [], a = r[0], o = 1; o < r.length; o++) {
						var s = r[o];
						e.measureText(a + " " + s).width < n ? a += s : (i.push(a), a = s)
					}
					return i.push(a), i
				}

				function li(e, t) {
					chrome.runtime.sendMessage({
						action: "googleEvent",
						name: e,
						extra: t
					})
				}
				Math.pow(2, 31);
				var ui = n(83550).Z.baseUrl,
					hi = ui + "/api/v1",
					di = ["/premium/stripe/create_plan", "/premium/stripe/change_plan", "/folder/create", "/folder/add_items", "/folder/change_name", "/trash/throw_into", "/image/change_title", "/video/update_title", "/trash/restore", "/trash/delete", "/image/upload", "/workspace/channel/move_items", "/workspace/channel/load_items", "/workspace/channel/load_members", "/video/websocket/token", "/refer/check_accept"],
					fi = p().create({
						baseURL: hi
					});

				function pi() {
					return (e = ui, t = ["screenshot_personal_fullname", "screenshot_personal_type", "screenshot_personal_mail", "screenshot_personal_premium_level"], new Promise((function(n) {
						chrome.cookies.getAll({
							url: e
						}, (function(e) {
							if ("string" == typeof t) {
								var r = e.filter((function(e) {
									return e.name === t
								}));
								n(r)
							} else if (Array.isArray(t)) {
								var i = e.filter((function(e) {
									return -1 !== t.indexOf(e.name)
								}));
								n(i)
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

				function mi(e) {
					return p()({
						method: "GET",
						url: "https://tinyurl.com/api-create.php?url=" + e
					})
				}

				function gi(e) {
					return p()({
						method: "GET",
						url: hi + "/user/oauth/login",
						params: {
							from: e
						}
					})
				}

				function vi(e) {
					return fi({
						method: "POST",
						url: "/user/stuff",
						data: {
							type: e
						}
					})
				}
				fi.interceptors.request.use((function(e) {
					return e
				}), (function() {
					return o.ZP.error("Network error, Request timeout!"), Promise.reject()
				})), fi.interceptors.response.use((function(e) {
					if (e && e.data && 1 === e.data.code) return Promise.resolve(e.data.data);
					if (e.data.code, 2001 === e.data.code) return Promise.reject(e.data);
					if (1201 === e.data.code) return Promise.reject(e.data);
					if (e.data.msg) {
						if (-1 !== di.indexOf(e.config.url)) return Promise.reject(e.data.msg);
						if (o.ZP.error(e.data.msg), "/pricing" !== window.location.pathname) return Promise.reject(e.data.msg)
					}
				}), (function(e) {
					if (e.response) {
						var t = e.response.status;
						// o.ZP.error("Network error! Error Code " + t)
					}
				}));
				var yi = n(71002),
					bi = n(93778),
					wi = function() {
						return "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : this
					}();

				function xi() {
					wi.console && "function" == typeof wi.console.log && wi.console.log.apply(wi.console, arguments)
				}
				var Si = {
					log: xi,
					warn: function(e) {
						wi.console && ("function" == typeof wi.console.warn ? wi.console.warn.apply(wi.console, arguments) : xi.call(null, arguments))
					},
					error: function(e) {
						wi.console && ("function" == typeof wi.console.error ? wi.console.error.apply(wi.console, arguments) : xi(e))
					}
				};

				function ji(e, t, n) {
					var r = new XMLHttpRequest;
					r.open("GET", e), r.responseType = "blob", r.onload = function() {
						Pi(r.response, t, n)
					}, r.onerror = function() {
						Si.error("could not download file")
					}, r.send()
				}

				function Ni(e) {
					var t = new XMLHttpRequest;
					t.open("HEAD", e, !1);
					try {
						t.send()
					} catch (e) {}
					return t.status >= 200 && t.status <= 299
				}

				function ki(e) {
					try {
						e.dispatchEvent(new MouseEvent("click"))
					} catch (n) {
						var t = document.createEvent("MouseEvents");
						t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
					}
				}
				var Ai, Li, Pi = wi.saveAs || ("object" !== ("undefined" == typeof window ? "undefined" : (0, yi.Z)(window)) || window !== wi ? function() {} : "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype ? function(e, t, n) {
					var r = wi.URL || wi.webkitURL,
						i = document.createElement("a");
					t = t || e.name || "download", i.download = t, i.rel = "noopener", "string" == typeof e ? (i.href = e, i.origin !== location.origin ? Ni(i.href) ? ji(e, t, n) : ki(i, i.target = "_blank") : ki(i)) : (i.href = r.createObjectURL(e), setTimeout((function() {
						r.revokeObjectURL(i.href)
					}), 4e4), setTimeout((function() {
						ki(i)
					}), 0))
				} : "msSaveOrOpenBlob" in navigator ? function(e, t, n) {
					if (t = t || e.name || "download", "string" == typeof e)
						if (Ni(e)) ji(e, t, n);
						else {
							var r = document.createElement("a");
							r.href = e, r.target = "_blank", setTimeout((function() {
								ki(r)
							}))
						}
					else navigator.msSaveOrOpenBlob(function(e, t) {
						return void 0 === t ? t = {
							autoBom: !1
						} : "object" !== (0, yi.Z)(t) && (Si.warn("Deprecated: Expected third argument to be a object"), t = {
							autoBom: !t
						}), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
							type: e.type
						}) : e
					}(e, n), t)
				} : function(e, t, n, r) {
					if ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."), "string" == typeof e) return ji(e, t, n);
					var i = "application/octet-stream" === e.type,
						a = /constructor/i.test(wi.HTMLElement) || wi.safari,
						o = /CriOS\/[\d]+/.test(navigator.userAgent);
					if ((o || i && a) && "object" === ("undefined" == typeof FileReader ? "undefined" : (0, yi.Z)(FileReader))) {
						var s = new FileReader;
						s.onloadend = function() {
							var e = s.result;
							e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location = e, r = null
						}, s.readAsDataURL(e)
					} else {
						var c = wi.URL || wi.webkitURL,
							l = c.createObjectURL(e);
						r ? r.location = l : location.href = l, r = null, setTimeout((function() {
							c.revokeObjectURL(l)
						}), 4e4)
					}
				});

				function Ii(e) {
					var t;
					e = e || "", this.ok = !1, "#" == e.charAt(0) && (e = e.substr(1, 6)), e = {
						aliceblue: "f0f8ff",
						antiquewhite: "faebd7",
						aqua: "00ffff",
						aquamarine: "7fffd4",
						azure: "f0ffff",
						beige: "f5f5dc",
						bisque: "ffe4c4",
						black: "000000",
						blanchedalmond: "ffebcd",
						blue: "0000ff",
						blueviolet: "8a2be2",
						brown: "a52a2a",
						burlywood: "deb887",
						cadetblue: "5f9ea0",
						chartreuse: "7fff00",
						chocolate: "d2691e",
						coral: "ff7f50",
						cornflowerblue: "6495ed",
						cornsilk: "fff8dc",
						crimson: "dc143c",
						cyan: "00ffff",
						darkblue: "00008b",
						darkcyan: "008b8b",
						darkgoldenrod: "b8860b",
						darkgray: "a9a9a9",
						darkgreen: "006400",
						darkkhaki: "bdb76b",
						darkmagenta: "8b008b",
						darkolivegreen: "556b2f",
						darkorange: "ff8c00",
						darkorchid: "9932cc",
						darkred: "8b0000",
						darksalmon: "e9967a",
						darkseagreen: "8fbc8f",
						darkslateblue: "483d8b",
						darkslategray: "2f4f4f",
						darkturquoise: "00ced1",
						darkviolet: "9400d3",
						deeppink: "ff1493",
						deepskyblue: "00bfff",
						dimgray: "696969",
						dodgerblue: "1e90ff",
						feldspar: "d19275",
						firebrick: "b22222",
						floralwhite: "fffaf0",
						forestgreen: "228b22",
						fuchsia: "ff00ff",
						gainsboro: "dcdcdc",
						ghostwhite: "f8f8ff",
						gold: "ffd700",
						goldenrod: "daa520",
						gray: "808080",
						green: "008000",
						greenyellow: "adff2f",
						honeydew: "f0fff0",
						hotpink: "ff69b4",
						indianred: "cd5c5c",
						indigo: "4b0082",
						ivory: "fffff0",
						khaki: "f0e68c",
						lavender: "e6e6fa",
						lavenderblush: "fff0f5",
						lawngreen: "7cfc00",
						lemonchiffon: "fffacd",
						lightblue: "add8e6",
						lightcoral: "f08080",
						lightcyan: "e0ffff",
						lightgoldenrodyellow: "fafad2",
						lightgrey: "d3d3d3",
						lightgreen: "90ee90",
						lightpink: "ffb6c1",
						lightsalmon: "ffa07a",
						lightseagreen: "20b2aa",
						lightskyblue: "87cefa",
						lightslateblue: "8470ff",
						lightslategray: "778899",
						lightsteelblue: "b0c4de",
						lightyellow: "ffffe0",
						lime: "00ff00",
						limegreen: "32cd32",
						linen: "faf0e6",
						magenta: "ff00ff",
						maroon: "800000",
						mediumaquamarine: "66cdaa",
						mediumblue: "0000cd",
						mediumorchid: "ba55d3",
						mediumpurple: "9370d8",
						mediumseagreen: "3cb371",
						mediumslateblue: "7b68ee",
						mediumspringgreen: "00fa9a",
						mediumturquoise: "48d1cc",
						mediumvioletred: "c71585",
						midnightblue: "191970",
						mintcream: "f5fffa",
						mistyrose: "ffe4e1",
						moccasin: "ffe4b5",
						navajowhite: "ffdead",
						navy: "000080",
						oldlace: "fdf5e6",
						olive: "808000",
						olivedrab: "6b8e23",
						orange: "ffa500",
						orangered: "ff4500",
						orchid: "da70d6",
						palegoldenrod: "eee8aa",
						palegreen: "98fb98",
						paleturquoise: "afeeee",
						palevioletred: "d87093",
						papayawhip: "ffefd5",
						peachpuff: "ffdab9",
						peru: "cd853f",
						pink: "ffc0cb",
						plum: "dda0dd",
						powderblue: "b0e0e6",
						purple: "800080",
						red: "ff0000",
						rosybrown: "bc8f8f",
						royalblue: "4169e1",
						saddlebrown: "8b4513",
						salmon: "fa8072",
						sandybrown: "f4a460",
						seagreen: "2e8b57",
						seashell: "fff5ee",
						sienna: "a0522d",
						silver: "c0c0c0",
						skyblue: "87ceeb",
						slateblue: "6a5acd",
						slategray: "708090",
						snow: "fffafa",
						springgreen: "00ff7f",
						steelblue: "4682b4",
						tan: "d2b48c",
						teal: "008080",
						thistle: "d8bfd8",
						tomato: "ff6347",
						turquoise: "40e0d0",
						violet: "ee82ee",
						violetred: "d02090",
						wheat: "f5deb3",
						white: "ffffff",
						whitesmoke: "f5f5f5",
						yellow: "ffff00",
						yellowgreen: "9acd32"
					} [e = (e = e.replace(/ /g, "")).toLowerCase()] || e;
					for (var n = [{
							re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
							example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
							process: function(e) {
								return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])]
							}
						}, {
							re: /^(\w{2})(\w{2})(\w{2})$/,
							example: ["#00ff00", "336699"],
							process: function(e) {
								return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
							}
						}, {
							re: /^(\w{1})(\w{1})(\w{1})$/,
							example: ["#fb0", "f0f"],
							process: function(e) {
								return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
							}
						}], r = 0; r < n.length; r++) {
						var i = n[r].re,
							a = n[r].process,
							o = i.exec(e);
						o && (t = a(o), this.r = t[0], this.g = t[1], this.b = t[2], this.ok = !0)
					}
					this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
						return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
					}, this.toHex = function() {
						var e = this.r.toString(16),
							t = this.g.toString(16),
							n = this.b.toString(16);
						return 1 == e.length && (e = "0" + e), 1 == t.length && (t = "0" + t), 1 == n.length && (n = "0" + n), "#" + e + t + n
					}
				}

				function Ci(e, t) {
					var n = e[0],
						r = e[1],
						i = e[2],
						a = e[3];
					n = Oi(n, r, i, a, t[0], 7, -680876936), a = Oi(a, n, r, i, t[1], 12, -389564586), i = Oi(i, a, n, r, t[2], 17, 606105819), r = Oi(r, i, a, n, t[3], 22, -1044525330), n = Oi(n, r, i, a, t[4], 7, -176418897), a = Oi(a, n, r, i, t[5], 12, 1200080426), i = Oi(i, a, n, r, t[6], 17, -1473231341), r = Oi(r, i, a, n, t[7], 22, -45705983), n = Oi(n, r, i, a, t[8], 7, 1770035416), a = Oi(a, n, r, i, t[9], 12, -1958414417), i = Oi(i, a, n, r, t[10], 17, -42063), r = Oi(r, i, a, n, t[11], 22, -1990404162), n = Oi(n, r, i, a, t[12], 7, 1804603682), a = Oi(a, n, r, i, t[13], 12, -40341101), i = Oi(i, a, n, r, t[14], 17, -1502002290), n = Ti(n, r = Oi(r, i, a, n, t[15], 22, 1236535329), i, a, t[1], 5, -165796510), a = Ti(a, n, r, i, t[6], 9, -1069501632), i = Ti(i, a, n, r, t[11], 14, 643717713), r = Ti(r, i, a, n, t[0], 20, -373897302), n = Ti(n, r, i, a, t[5], 5, -701558691), a = Ti(a, n, r, i, t[10], 9, 38016083), i = Ti(i, a, n, r, t[15], 14, -660478335), r = Ti(r, i, a, n, t[4], 20, -405537848), n = Ti(n, r, i, a, t[9], 5, 568446438), a = Ti(a, n, r, i, t[14], 9, -1019803690), i = Ti(i, a, n, r, t[3], 14, -187363961), r = Ti(r, i, a, n, t[8], 20, 1163531501), n = Ti(n, r, i, a, t[13], 5, -1444681467), a = Ti(a, n, r, i, t[2], 9, -51403784), i = Ti(i, a, n, r, t[7], 14, 1735328473), n = Di(n, r = Ti(r, i, a, n, t[12], 20, -1926607734), i, a, t[5], 4, -378558), a = Di(a, n, r, i, t[8], 11, -2022574463), i = Di(i, a, n, r, t[11], 16, 1839030562), r = Di(r, i, a, n, t[14], 23, -35309556), n = Di(n, r, i, a, t[1], 4, -1530992060), a = Di(a, n, r, i, t[4], 11, 1272893353), i = Di(i, a, n, r, t[7], 16, -155497632), r = Di(r, i, a, n, t[10], 23, -1094730640), n = Di(n, r, i, a, t[13], 4, 681279174), a = Di(a, n, r, i, t[0], 11, -358537222), i = Di(i, a, n, r, t[3], 16, -722521979), r = Di(r, i, a, n, t[6], 23, 76029189), n = Di(n, r, i, a, t[9], 4, -640364487), a = Di(a, n, r, i, t[12], 11, -421815835), i = Di(i, a, n, r, t[15], 16, 530742520), n = Ei(n, r = Di(r, i, a, n, t[2], 23, -995338651), i, a, t[0], 6, -198630844), a = Ei(a, n, r, i, t[7], 10, 1126891415), i = Ei(i, a, n, r, t[14], 15, -1416354905), r = Ei(r, i, a, n, t[5], 21, -57434055), n = Ei(n, r, i, a, t[12], 6, 1700485571), a = Ei(a, n, r, i, t[3], 10, -1894986606), i = Ei(i, a, n, r, t[10], 15, -1051523), r = Ei(r, i, a, n, t[1], 21, -2054922799), n = Ei(n, r, i, a, t[8], 6, 1873313359), a = Ei(a, n, r, i, t[15], 10, -30611744), i = Ei(i, a, n, r, t[6], 15, -1560198380), r = Ei(r, i, a, n, t[13], 21, 1309151649), n = Ei(n, r, i, a, t[4], 6, -145523070), a = Ei(a, n, r, i, t[11], 10, -1120210379), i = Ei(i, a, n, r, t[2], 15, 718787259), r = Ei(r, i, a, n, t[9], 21, -343485551), e[0] = Zi(n, e[0]), e[1] = Zi(r, e[1]), e[2] = Zi(i, e[2]), e[3] = Zi(a, e[3])
				}

				function _i(e, t, n, r, i, a) {
					return t = Zi(Zi(t, e), Zi(r, a)), Zi(t << i | t >>> 32 - i, n)
				}

				function Oi(e, t, n, r, i, a, o) {
					return _i(t & n | ~t & r, e, t, i, a, o)
				}

				function Ti(e, t, n, r, i, a, o) {
					return _i(t & r | n & ~r, e, t, i, a, o)
				}

				function Di(e, t, n, r, i, a, o) {
					return _i(t ^ n ^ r, e, t, i, a, o)
				}

				function Ei(e, t, n, r, i, a, o) {
					return _i(n ^ (t | ~r), e, t, i, a, o)
				}

				function Fi(e) {
					var t, n = e.length,
						r = [1732584193, -271733879, -1732584194, 271733878];
					for (t = 64; t <= e.length; t += 64) Ci(r, Ri(e.substring(t - 64, t)));
					e = e.substring(t - 64);
					var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					for (t = 0; t < e.length; t++) i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
					if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55)
						for (Ci(r, i), t = 0; t < 16; t++) i[t] = 0;
					return i[14] = 8 * n, Ci(r, i), r
				}

				function Ri(e) {
					var t, n = [];
					for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
					return n
				}
				Ai = wi.atob.bind(wi), Li = wi.btoa.bind(wi);
				var Mi = "0123456789abcdef".split("");

				function Bi(e) {
					for (var t = "", n = 0; n < 4; n++) t += Mi[e >> 8 * n + 4 & 15] + Mi[e >> 8 * n & 15];
					return t
				}

				function Ui(e) {
					return String.fromCharCode((255 & e) >> 0, (65280 & e) >> 8, (16711680 & e) >> 16, (4278190080 & e) >> 24)
				}

				function qi(e) {
					return Fi(e).map(Ui).join("")
				}
				var zi = "5d41402abc4b2a76b9719d911017c592" != function(e) {
					for (var t = 0; t < e.length; t++) e[t] = Bi(e[t]);
					return e.join("")
				}(Fi("hello"));

				function Zi(e, t) {
					if (zi) {
						var n = (65535 & e) + (65535 & t);
						return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
					}
					return e + t & 4294967295
				}

				function Hi(e, t) {
					var n, r, i, a;
					if (e !== n) {
						for (var o = (i = e, a = 1 + (256 / e.length >> 0), new Array(a + 1).join(i)), s = [], c = 0; c < 256; c++) s[c] = c;
						var l = 0;
						for (c = 0; c < 256; c++) {
							var u = s[c];
							l = (l + u + o.charCodeAt(c)) % 256, s[c] = s[l], s[l] = u
						}
						n = e, r = s
					} else s = r;
					var h = t.length,
						d = 0,
						f = 0,
						p = "";
					for (c = 0; c < h; c++) f = (f + (u = s[d = (d + 1) % 256])) % 256, s[d] = s[f], s[f] = u, o = s[(s[d] + s[f]) % 256], p += String.fromCharCode(t.charCodeAt(c) ^ o);
					return p
				}
				var Gi = {
					print: 4,
					modify: 8,
					copy: 16,
					"annot-forms": 32
				};

				function Vi(e, t, n, r) {
					this.v = 1, this.r = 2;
					var i = 192;
					e.forEach((function(e) {
						if (void 0 !== Gi.perm) throw new Error("Invalid permission: " + e);
						i += Gi[e]
					})), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
					var a = (t + this.padding).substr(0, 32),
						o = (n + this.padding).substr(0, 32);
					this.O = this.processOwnerPassword(a, o), this.P = -(1 + (255 ^ i)), this.encryptionKey = qi(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5), this.U = Hi(this.encryptionKey, this.padding)
				}

				function Wi(e) {
					if (/[^\u0000-\u00ff]/.test(e)) throw new Error("Invalid PDF Name Object: " + e + ", Only accept ASCII characters.");
					for (var t = "", n = e.length, r = 0; r < n; r++) {
						var i = e.charCodeAt(r);
						t += i < 33 || 35 === i || 37 === i || 40 === i || 41 === i || 47 === i || 60 === i || 62 === i || 91 === i || 93 === i || 123 === i || 125 === i || i > 126 ? "#" + ("0" + i.toString(16)).slice(-2) : e[r]
					}
					return t
				}

				function Yi(e) {
					if ("object" !== (0, yi.Z)(e)) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
					var t = {};
					this.subscribe = function(e, n, r) {
						if (r = r || !1, "string" != typeof e || "function" != typeof n || "boolean" != typeof r) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
						t.hasOwnProperty(e) || (t[e] = {});
						var i = Math.random().toString(35);
						return t[e][i] = [n, !!r], i
					}, this.unsubscribe = function(e) {
						for (var n in t)
							if (t[n][e]) return delete t[n][e], 0 === Object.keys(t[n]).length && delete t[n], !0;
						return !1
					}, this.publish = function(n) {
						if (t.hasOwnProperty(n)) {
							var r = Array.prototype.slice.call(arguments, 1),
								i = [];
							for (var a in t[n]) {
								var o = t[n][a];
								try {
									o[0].apply(e, r)
								} catch (n) {
									wi.console && Si.error("jsPDF PubSub Error", n.message, n)
								}
								o[1] && i.push(a)
							}
							i.length && i.forEach(this.unsubscribe)
						}
					}, this.getTopics = function() {
						return t
					}
				}

				function Ki(e) {
					if (!(this instanceof Ki)) return new Ki(e);
					var t = "opacity,stroke-opacity".split(",");
					for (var n in e) e.hasOwnProperty(n) && t.indexOf(n) >= 0 && (this[n] = e[n]);
					this.id = "", this.objectNumber = -1
				}

				function Ji(e, t) {
					this.gState = e, this.matrix = t, this.id = "", this.objectNumber = -1
				}

				function Xi(e, t, n, r, i) {
					if (!(this instanceof Xi)) return new Xi(e, t, n, r, i);
					this.type = "axial" === e ? 2 : 3, this.coords = t, this.colors = n, Ji.call(this, r, i)
				}

				function $i(e, t, n, r, i) {
					if (!(this instanceof $i)) return new $i(e, t, n, r, i);
					this.boundingBox = e, this.xStep = t, this.yStep = n, this.stream = "", this.cloneIndex = 0, Ji.call(this, r, i)
				}

				function Qi(e) {
					var t, n = "string" == typeof arguments[0] ? arguments[0] : "p",
						r = arguments[1],
						i = arguments[2],
						a = arguments[3],
						o = [],
						s = 1,
						c = 16,
						l = "S",
						u = null;
					"object" === (0, yi.Z)(e = e || {}) && (n = e.orientation, r = e.unit || r, i = e.format || i, a = e.compress || e.compressPdf || a, null !== (u = e.encryption || null) && (u.userPassword = u.userPassword || "", u.ownerPassword = u.ownerPassword || "", u.userPermissions = u.userPermissions || []), s = "number" == typeof e.userUnit ? Math.abs(e.userUnit) : 1, void 0 !== e.precision && (t = e.precision), void 0 !== e.floatPrecision && (c = e.floatPrecision), l = e.defaultPathOperation || "S"), o = e.filters || (!0 === a ? ["FlateEncode"] : o), r = r || "mm", n = ("" + (n || "P")).toLowerCase();
					var h = e.putOnlyUsedFonts || !1,
						d = {},
						f = {
							internal: {},
							__private__: {}
						};
					f.__private__.PubSub = Yi;
					var p = "1.3",
						m = f.__private__.getPdfVersion = function() {
							return p
						};
					f.__private__.setPdfVersion = function(e) {
						p = e
					};
					var g = {
						a0: [2383.94, 3370.39],
						a1: [1683.78, 2383.94],
						a2: [1190.55, 1683.78],
						a3: [841.89, 1190.55],
						a4: [595.28, 841.89],
						a5: [419.53, 595.28],
						a6: [297.64, 419.53],
						a7: [209.76, 297.64],
						a8: [147.4, 209.76],
						a9: [104.88, 147.4],
						a10: [73.7, 104.88],
						b0: [2834.65, 4008.19],
						b1: [2004.09, 2834.65],
						b2: [1417.32, 2004.09],
						b3: [1000.63, 1417.32],
						b4: [708.66, 1000.63],
						b5: [498.9, 708.66],
						b6: [354.33, 498.9],
						b7: [249.45, 354.33],
						b8: [175.75, 249.45],
						b9: [124.72, 175.75],
						b10: [87.87, 124.72],
						c0: [2599.37, 3676.54],
						c1: [1836.85, 2599.37],
						c2: [1298.27, 1836.85],
						c3: [918.43, 1298.27],
						c4: [649.13, 918.43],
						c5: [459.21, 649.13],
						c6: [323.15, 459.21],
						c7: [229.61, 323.15],
						c8: [161.57, 229.61],
						c9: [113.39, 161.57],
						c10: [79.37, 113.39],
						dl: [311.81, 623.62],
						letter: [612, 792],
						"government-letter": [576, 756],
						legal: [612, 1008],
						"junior-legal": [576, 360],
						ledger: [1224, 792],
						tabloid: [792, 1224],
						"credit-card": [153, 243]
					};
					f.__private__.getPageFormats = function() {
						return g
					};
					var v = f.__private__.getPageFormat = function(e) {
						return g[e]
					};
					i = i || "a4";
					var y = {
							COMPAT: "compat",
							ADVANCED: "advanced"
						},
						b = y.COMPAT;

					function w() {
						this.saveGraphicsState(), J(new Ce(he, 0, 0, -he, 0, ln() * he).toString() + " cm"), this.setFontSize(this.getFontSize() / he), l = "n", b = y.ADVANCED
					}

					function x() {
						this.restoreGraphicsState(), l = "S", b = y.COMPAT
					}
					var S = f.__private__.combineFontStyleAndFontWeight = function(e, t) {
						if ("bold" == e && "normal" == t || "bold" == e && 400 == t || "normal" == e && "italic" == t || "bold" == e && "italic" == t) throw new Error("Invalid Combination of fontweight and fontstyle");
						return t && (e = 400 == t || "normal" === t ? "italic" === e ? "italic" : "normal" : 700 != t && "bold" !== t || "normal" !== e ? (700 == t ? "bold" : t) + "" + e : "bold"), e
					};
					f.advancedAPI = function(e) {
						var t = b === y.COMPAT;
						return t && w.call(this), "function" != typeof e || (e(this), t && x.call(this)), this
					}, f.compatAPI = function(e) {
						var t = b === y.ADVANCED;
						return t && x.call(this), "function" != typeof e || (e(this), t && w.call(this)), this
					}, f.isAdvancedAPI = function() {
						return b === y.ADVANCED
					};
					var j, N = function(e) {
							if (b !== y.ADVANCED) throw new Error(e + " is only available in 'advanced' API mode. You need to call advancedAPI() first.")
						},
						k = f.roundToPrecision = f.__private__.roundToPrecision = function(e, n) {
							var r = t || n;
							if (isNaN(e) || isNaN(r)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
							return e.toFixed(r).replace(/0+$/, "")
						};
					j = f.hpf = f.__private__.hpf = "number" == typeof c ? function(e) {
						if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.hpf");
						return k(e, c)
					} : "smart" === c ? function(e) {
						if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.hpf");
						return k(e, e > -1 && e < 1 ? 16 : 5)
					} : function(e) {
						if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.hpf");
						return k(e, 16)
					};
					var A = f.f2 = f.__private__.f2 = function(e) {
							if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.f2");
							return k(e, 2)
						},
						L = f.__private__.f3 = function(e) {
							if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.f3");
							return k(e, 3)
						},
						P = f.scale = f.__private__.scale = function(e) {
							if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.scale");
							return b === y.COMPAT ? e * he : b === y.ADVANCED ? e : void 0
						},
						I = function(e) {
							return P(function(e) {
								return b === y.COMPAT ? ln() - e : b === y.ADVANCED ? e : void 0
							}(e))
						};
					f.__private__.setPrecision = f.setPrecision = function(e) {
						"number" == typeof parseInt(e, 10) && (t = parseInt(e, 10))
					};
					var C, _ = "00000000000000000000000000000000",
						O = f.__private__.getFileId = function() {
							return _
						},
						T = f.__private__.setFileId = function(e) {
							return _ = void 0 !== e && /^[a-fA-F0-9]{32}$/.test(e) ? e.toUpperCase() : _.split("").map((function() {
								return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()))
							})).join(""), null !== u && (yt = new Vi(u.userPermissions, u.userPassword, u.ownerPassword, _)), _
						};
					f.setFileId = function(e) {
						return T(e), this
					}, f.getFileId = function() {
						return O()
					};
					var D = f.__private__.convertDateToPDFDate = function(e) {
							var t = e.getTimezoneOffset(),
								n = t < 0 ? "+" : "-",
								r = Math.floor(Math.abs(t / 60)),
								i = Math.abs(t % 60),
								a = [n, B(r), "'", B(i), "'"].join("");
							return ["D:", e.getFullYear(), B(e.getMonth() + 1), B(e.getDate()), B(e.getHours()), B(e.getMinutes()), B(e.getSeconds()), a].join("")
						},
						E = f.__private__.convertPDFDateToDate = function(e) {
							var t = parseInt(e.substr(2, 4), 10),
								n = parseInt(e.substr(6, 2), 10) - 1,
								r = parseInt(e.substr(8, 2), 10),
								i = parseInt(e.substr(10, 2), 10),
								a = parseInt(e.substr(12, 2), 10),
								o = parseInt(e.substr(14, 2), 10);
							return new Date(t, n, r, i, a, o, 0)
						},
						F = f.__private__.setCreationDate = function(e) {
							var t;
							if (void 0 === e && (e = new Date), e instanceof Date) t = D(e);
							else {
								if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(e)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
								t = e
							}
							return C = t
						},
						R = f.__private__.getCreationDate = function(e) {
							var t = C;
							return "jsDate" === e && (t = E(C)), t
						};
					f.setCreationDate = function(e) {
						return F(e), this
					}, f.getCreationDate = function(e) {
						return R(e)
					};
					var M, B = f.__private__.padd2 = function(e) {
							return ("0" + parseInt(e)).slice(-2)
						},
						U = f.__private__.padd2Hex = function(e) {
							return ("00" + (e = e.toString())).substr(e.length)
						},
						q = 0,
						z = [],
						Z = [],
						H = 0,
						G = [],
						V = [],
						W = !1,
						Y = Z;
					f.__private__.setCustomOutputDestination = function(e) {
						W = !0, Y = e
					};
					var K = function(e) {
						W || (Y = e)
					};
					f.__private__.resetCustomOutputDestination = function() {
						W = !1, Y = Z
					};
					var J = f.__private__.out = function(e) {
							return e = e.toString(), H += e.length + 1, Y.push(e), Y
						},
						X = f.__private__.write = function(e) {
							return J(1 === arguments.length ? e.toString() : Array.prototype.join.call(arguments, " "))
						},
						$ = f.__private__.getArrayBuffer = function(e) {
							for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n); t--;) r[t] = e.charCodeAt(t);
							return n
						},
						Q = [
							["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
							["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
							["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
							["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
							["Courier", "courier", "normal", "WinAnsiEncoding"],
							["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
							["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
							["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
							["Times-Roman", "times", "normal", "WinAnsiEncoding"],
							["Times-Bold", "times", "bold", "WinAnsiEncoding"],
							["Times-Italic", "times", "italic", "WinAnsiEncoding"],
							["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
							["ZapfDingbats", "zapfdingbats", "normal", null],
							["Symbol", "symbol", "normal", null]
						];
					f.__private__.getStandardFonts = function() {
						return Q
					};
					var ee = e.fontSize || 16;
					f.__private__.setFontSize = f.setFontSize = function(e) {
						return ee = b === y.ADVANCED ? e / he : e, this
					};
					var te, ne = f.__private__.getFontSize = f.getFontSize = function() {
							return b === y.COMPAT ? ee : ee * he
						},
						re = e.R2L || !1;
					f.__private__.setR2L = f.setR2L = function(e) {
						return re = e, this
					}, f.__private__.getR2L = f.getR2L = function() {
						return re
					};
					var ie, ae = f.__private__.setZoomMode = function(e) {
						if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(e)) te = e;
						else if (isNaN(e)) {
							if (-1 === [void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(e)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + e + '" is not recognized.');
							te = e
						} else te = parseInt(e, 10)
					};
					f.__private__.getZoomMode = function() {
						return te
					};
					var oe, se = f.__private__.setPageMode = function(e) {
						if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(e)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + e + '" is not recognized.');
						ie = e
					};
					f.__private__.getPageMode = function() {
						return ie
					};
					var ce = f.__private__.setLayoutMode = function(e) {
						if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(e)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + e + '" is not recognized.');
						oe = e
					};
					f.__private__.getLayoutMode = function() {
						return oe
					}, f.__private__.setDisplayMode = f.setDisplayMode = function(e, t, n) {
						return ae(e), ce(t), se(n), this
					};
					var le = {
						title: "",
						subject: "",
						author: "",
						keywords: "",
						creator: ""
					};
					f.__private__.getDocumentProperty = function(e) {
						if (-1 === Object.keys(le).indexOf(e)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
						return le[e]
					}, f.__private__.getDocumentProperties = function() {
						return le
					}, f.__private__.setDocumentProperties = f.setProperties = f.setDocumentProperties = function(e) {
						for (var t in le) le.hasOwnProperty(t) && e[t] && (le[t] = e[t]);
						return this
					}, f.__private__.setDocumentProperty = function(e, t) {
						if (-1 === Object.keys(le).indexOf(e)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
						return le[e] = t
					};
					var ue, he, de, fe, pe, me = {},
						ge = {},
						ve = [],
						ye = {},
						be = {},
						we = {},
						xe = {},
						Se = null,
						je = 0,
						Ne = [],
						ke = new Yi(f),
						Ae = e.hotfixes || [],
						Le = {},
						Pe = {},
						Ie = [],
						Ce = function e(t, n, r, i, a, o) {
							if (!(this instanceof e)) return new e(t, n, r, i, a, o);
							isNaN(t) && (t = 1), isNaN(n) && (n = 0), isNaN(r) && (r = 0), isNaN(i) && (i = 1), isNaN(a) && (a = 0), isNaN(o) && (o = 0), this._matrix = [t, n, r, i, a, o]
						};
					Object.defineProperty(Ce.prototype, "sx", {
						get: function() {
							return this._matrix[0]
						},
						set: function(e) {
							this._matrix[0] = e
						}
					}), Object.defineProperty(Ce.prototype, "shy", {
						get: function() {
							return this._matrix[1]
						},
						set: function(e) {
							this._matrix[1] = e
						}
					}), Object.defineProperty(Ce.prototype, "shx", {
						get: function() {
							return this._matrix[2]
						},
						set: function(e) {
							this._matrix[2] = e
						}
					}), Object.defineProperty(Ce.prototype, "sy", {
						get: function() {
							return this._matrix[3]
						},
						set: function(e) {
							this._matrix[3] = e
						}
					}), Object.defineProperty(Ce.prototype, "tx", {
						get: function() {
							return this._matrix[4]
						},
						set: function(e) {
							this._matrix[4] = e
						}
					}), Object.defineProperty(Ce.prototype, "ty", {
						get: function() {
							return this._matrix[5]
						},
						set: function(e) {
							this._matrix[5] = e
						}
					}), Object.defineProperty(Ce.prototype, "a", {
						get: function() {
							return this._matrix[0]
						},
						set: function(e) {
							this._matrix[0] = e
						}
					}), Object.defineProperty(Ce.prototype, "b", {
						get: function() {
							return this._matrix[1]
						},
						set: function(e) {
							this._matrix[1] = e
						}
					}), Object.defineProperty(Ce.prototype, "c", {
						get: function() {
							return this._matrix[2]
						},
						set: function(e) {
							this._matrix[2] = e
						}
					}), Object.defineProperty(Ce.prototype, "d", {
						get: function() {
							return this._matrix[3]
						},
						set: function(e) {
							this._matrix[3] = e
						}
					}), Object.defineProperty(Ce.prototype, "e", {
						get: function() {
							return this._matrix[4]
						},
						set: function(e) {
							this._matrix[4] = e
						}
					}), Object.defineProperty(Ce.prototype, "f", {
						get: function() {
							return this._matrix[5]
						},
						set: function(e) {
							this._matrix[5] = e
						}
					}), Object.defineProperty(Ce.prototype, "rotation", {
						get: function() {
							return Math.atan2(this.shx, this.sx)
						}
					}), Object.defineProperty(Ce.prototype, "scaleX", {
						get: function() {
							return this.decompose().scale.sx
						}
					}), Object.defineProperty(Ce.prototype, "scaleY", {
						get: function() {
							return this.decompose().scale.sy
						}
					}), Object.defineProperty(Ce.prototype, "isIdentity", {
						get: function() {
							return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty
						}
					}), Ce.prototype.join = function(e) {
						return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(j).join(e)
					}, Ce.prototype.multiply = function(e) {
						var t = e.sx * this.sx + e.shy * this.shx,
							n = e.sx * this.shy + e.shy * this.sy,
							r = e.shx * this.sx + e.sy * this.shx,
							i = e.shx * this.shy + e.sy * this.sy,
							a = e.tx * this.sx + e.ty * this.shx + this.tx,
							o = e.tx * this.shy + e.ty * this.sy + this.ty;
						return new Ce(t, n, r, i, a, o)
					}, Ce.prototype.decompose = function() {
						var e = this.sx,
							t = this.shy,
							n = this.shx,
							r = this.sy,
							i = this.tx,
							a = this.ty,
							o = Math.sqrt(e * e + t * t),
							s = (e /= o) * n + (t /= o) * r;
						n -= e * s, r -= t * s;
						var c = Math.sqrt(n * n + r * r);
						return s /= c, e * (r /= c) < t * (n /= c) && (e = -e, t = -t, s = -s, o = -o), {
							scale: new Ce(o, 0, 0, c, 0, 0),
							translate: new Ce(1, 0, 0, 1, i, a),
							rotate: new Ce(e, t, -t, e, 0, 0),
							skew: new Ce(1, 0, s, 1, 0, 0)
						}
					}, Ce.prototype.toString = function(e) {
						return this.join(" ")
					}, Ce.prototype.inversed = function() {
						var e = this.sx,
							t = this.shy,
							n = this.shx,
							r = this.sy,
							i = this.tx,
							a = this.ty,
							o = 1 / (e * r - t * n),
							s = r * o,
							c = -t * o,
							l = -n * o,
							u = e * o;
						return new Ce(s, c, l, u, -s * i - l * a, -c * i - u * a)
					}, Ce.prototype.applyToPoint = function(e) {
						var t = e.x * this.sx + e.y * this.shx + this.tx,
							n = e.x * this.shy + e.y * this.sy + this.ty;
						return new tn(t, n)
					}, Ce.prototype.applyToRectangle = function(e) {
						var t = this.applyToPoint(e),
							n = this.applyToPoint(new tn(e.x + e.w, e.y + e.h));
						return new nn(t.x, t.y, n.x - t.x, n.y - t.y)
					}, Ce.prototype.clone = function() {
						var e = this.sx,
							t = this.shy,
							n = this.shx,
							r = this.sy,
							i = this.tx,
							a = this.ty;
						return new Ce(e, t, n, r, i, a)
					}, f.Matrix = Ce;
					var _e = f.matrixMult = function(e, t) {
							return t.multiply(e)
						},
						Oe = new Ce(1, 0, 0, 1, 0, 0);
					f.unitMatrix = f.identityMatrix = Oe;
					var Te = function(e, t) {
						if (!be[e]) {
							var n = (t instanceof Xi ? "Sh" : "P") + (Object.keys(ye).length + 1).toString(10);
							t.id = n, be[e] = n, ye[n] = t, ke.publish("addPattern", t)
						}
					};
					f.ShadingPattern = Xi, f.TilingPattern = $i, f.addShadingPattern = function(e, t) {
						return N("addShadingPattern()"), Te(e, t), this
					}, f.beginTilingPattern = function(e) {
						N("beginTilingPattern()"), an(e.boundingBox[0], e.boundingBox[1], e.boundingBox[2] - e.boundingBox[0], e.boundingBox[3] - e.boundingBox[1], e.matrix)
					}, f.endTilingPattern = function(e, t) {
						N("endTilingPattern()"), t.stream = V[M].join("\n"), Te(e, t), ke.publish("endTilingPattern", t), Ie.pop().restore()
					};
					var De, Ee = f.__private__.newObject = function() {
							var e = Fe();
							return Re(e, !0), e
						},
						Fe = f.__private__.newObjectDeferred = function() {
							return q++, z[q] = function() {
								return H
							}, q
						},
						Re = function(e, t) {
							return t = "boolean" == typeof t && t, z[e] = H, t && J(e + " 0 obj"), e
						},
						Me = f.__private__.newAdditionalObject = function() {
							var e = {
								objId: Fe(),
								content: ""
							};
							return G.push(e), e
						},
						Be = Fe(),
						Ue = Fe(),
						qe = f.__private__.decodeColorString = function(e) {
							var t = e.split(" ");
							if (2 !== t.length || "g" !== t[1] && "G" !== t[1]) 5 !== t.length || "k" !== t[4] && "K" !== t[4] || (t = [(1 - t[0]) * (1 - t[3]), (1 - t[1]) * (1 - t[3]), (1 - t[2]) * (1 - t[3]), "r"]);
							else {
								var n = parseFloat(t[0]);
								t = [n, n, n, "r"]
							}
							for (var r = "#", i = 0; i < 3; i++) r += ("0" + Math.floor(255 * parseFloat(t[i])).toString(16)).slice(-2);
							return r
						},
						ze = f.__private__.encodeColorString = function(e) {
							var t;
							"string" == typeof e && (e = {
								ch1: e
							});
							var n = e.ch1,
								r = e.ch2,
								i = e.ch3,
								a = e.ch4,
								o = "draw" === e.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"];
							if ("string" == typeof n && "#" !== n.charAt(0)) {
								var s = new Ii(n);
								if (s.ok) n = s.toHex();
								else if (!/^\d*\.?\d*$/.test(n)) throw new Error('Invalid color "' + n + '" passed to jsPDF.encodeColorString.')
							}
							if ("string" == typeof n && /^#[0-9A-Fa-f]{3}$/.test(n) && (n = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), "string" == typeof n && /^#[0-9A-Fa-f]{6}$/.test(n)) {
								var c = parseInt(n.substr(1), 16);
								n = c >> 16 & 255, r = c >> 8 & 255, i = 255 & c
							}
							if (void 0 === r || void 0 === a && n === r && r === i)
								if ("string" == typeof n) t = n + " " + o[0];
								else if (2 === e.precision) t = A(n / 255) + " " + o[0];
							else t = L(n / 255) + " " + o[0];
							else if (void 0 === a || "object" === (0, yi.Z)(a)) {
								if (a && !isNaN(a.a) && 0 === a.a) return ["1.", "1.", "1.", o[1]].join(" ");
								if ("string" == typeof n) t = [n, r, i, o[1]].join(" ");
								else if (2 === e.precision) t = [A(n / 255), A(r / 255), A(i / 255), o[1]].join(" ");
								else t = [L(n / 255), L(r / 255), L(i / 255), o[1]].join(" ")
							} else if ("string" == typeof n) t = [n, r, i, a, o[2]].join(" ");
							else if (2 === e.precision) t = [A(n), A(r), A(i), A(a), o[2]].join(" ");
							else t = [L(n), L(r), L(i), L(a), o[2]].join(" ");
							return t
						},
						Ze = f.__private__.getFilters = function() {
							return o
						},
						He = f.__private__.putStream = function(e) {
							var t = (e = e || {}).data || "",
								n = e.filters || Ze(),
								r = e.alreadyAppliedFilters || [],
								i = e.addLength1 || !1,
								a = t.length,
								o = e.objectId,
								s = function(e) {
									return e
								};
							if (null !== u && void 0 === o) throw new Error("ObjectId must be passed to putStream for file encryption");
							null !== u && (s = yt.encryptor(o, 0));
							var c = {};
							!0 === n && (n = ["FlateEncode"]);
							var l = e.additionalKeyValues || [],
								h = (c = void 0 !== Qi.API.processDataByFilters ? Qi.API.processDataByFilters(t, n) : {
									data: t,
									reverseChain: []
								}).reverseChain + (Array.isArray(r) ? r.join(" ") : r.toString());
							if (0 !== c.data.length && (l.push({
									key: "Length",
									value: c.data.length
								}), !0 === i && l.push({
									key: "Length1",
									value: a
								})), 0 != h.length)
								if (h.split("/").length - 1 == 1) l.push({
									key: "Filter",
									value: h
								});
								else {
									l.push({
										key: "Filter",
										value: "[" + h + "]"
									});
									for (var d = 0; d < l.length; d += 1)
										if ("DecodeParms" === l[d].key) {
											for (var f = [], p = 0; p < c.reverseChain.split("/").length - 1; p += 1) f.push("null");
											f.push(l[d].value), l[d].value = "[" + f.join(" ") + "]"
										}
								} J("<<");
							for (var m = 0; m < l.length; m++) J("/" + l[m].key + " " + l[m].value);
							J(">>"), 0 !== c.data.length && (J("stream"), J(s(c.data)), J("endstream"))
						},
						Ge = f.__private__.putPage = function(e) {
							var t = e.number,
								n = e.data,
								r = e.objId,
								i = e.contentsObjId;
							Re(r, !0), J("<</Type /Page"), J("/Parent " + e.rootDictionaryObjId + " 0 R"), J("/Resources " + e.resourceDictionaryObjId + " 0 R"), J("/MediaBox [" + parseFloat(j(e.mediaBox.bottomLeftX)) + " " + parseFloat(j(e.mediaBox.bottomLeftY)) + " " + j(e.mediaBox.topRightX) + " " + j(e.mediaBox.topRightY) + "]"), null !== e.cropBox && J("/CropBox [" + j(e.cropBox.bottomLeftX) + " " + j(e.cropBox.bottomLeftY) + " " + j(e.cropBox.topRightX) + " " + j(e.cropBox.topRightY) + "]"), null !== e.bleedBox && J("/BleedBox [" + j(e.bleedBox.bottomLeftX) + " " + j(e.bleedBox.bottomLeftY) + " " + j(e.bleedBox.topRightX) + " " + j(e.bleedBox.topRightY) + "]"), null !== e.trimBox && J("/TrimBox [" + j(e.trimBox.bottomLeftX) + " " + j(e.trimBox.bottomLeftY) + " " + j(e.trimBox.topRightX) + " " + j(e.trimBox.topRightY) + "]"), null !== e.artBox && J("/ArtBox [" + j(e.artBox.bottomLeftX) + " " + j(e.artBox.bottomLeftY) + " " + j(e.artBox.topRightX) + " " + j(e.artBox.topRightY) + "]"), "number" == typeof e.userUnit && 1 !== e.userUnit && J("/UserUnit " + e.userUnit), ke.publish("putPage", {
								objId: r,
								pageContext: Ne[t],
								pageNumber: t,
								page: n
							}), J("/Contents " + i + " 0 R"), J(">>"), J("endobj");
							var a = n.join("\n");
							return b === y.ADVANCED && (a += "\nQ"), Re(i, !0), He({
								data: a,
								filters: Ze(),
								objectId: i
							}), J("endobj"), r
						},
						Ve = f.__private__.putPages = function() {
							var e, t, n = [];
							for (e = 1; e <= je; e++) Ne[e].objId = Fe(), Ne[e].contentsObjId = Fe();
							for (e = 1; e <= je; e++) n.push(Ge({
								number: e,
								data: V[e],
								objId: Ne[e].objId,
								contentsObjId: Ne[e].contentsObjId,
								mediaBox: Ne[e].mediaBox,
								cropBox: Ne[e].cropBox,
								bleedBox: Ne[e].bleedBox,
								trimBox: Ne[e].trimBox,
								artBox: Ne[e].artBox,
								userUnit: Ne[e].userUnit,
								rootDictionaryObjId: Be,
								resourceDictionaryObjId: Ue
							}));
							Re(Be, !0), J("<</Type /Pages");
							var r = "/Kids [";
							for (t = 0; t < je; t++) r += n[t] + " 0 R ";
							J(r + "]"), J("/Count " + je), J(">>"), J("endobj"), ke.publish("postPutPages")
						},
						We = function(e) {
							ke.publish("putFont", {
								font: e,
								out: J,
								newObject: Ee,
								putStream: He
							}), !0 !== e.isAlreadyPutted && (e.objectNumber = Ee(), J("<<"), J("/Type /Font"), J("/BaseFont /" + Wi(e.postScriptName)), J("/Subtype /Type1"), "string" == typeof e.encoding && J("/Encoding /" + e.encoding), J("/FirstChar 32"), J("/LastChar 255"), J(">>"), J("endobj"))
						},
						Ye = function(e) {
							e.objectNumber = Ee();
							var t = [];
							t.push({
								key: "Type",
								value: "/XObject"
							}), t.push({
								key: "Subtype",
								value: "/Form"
							}), t.push({
								key: "BBox",
								value: "[" + [j(e.x), j(e.y), j(e.x + e.width), j(e.y + e.height)].join(" ") + "]"
							}), t.push({
								key: "Matrix",
								value: "[" + e.matrix.toString() + "]"
							});
							var n = e.pages[1].join("\n");
							He({
								data: n,
								additionalKeyValues: t,
								objectId: e.objectNumber
							}), J("endobj")
						},
						Ke = function(e, t) {
							t || (t = 21);
							var n = Ee(),
								r = function(e, t) {
									var n, r = [],
										i = 1 / (t - 1);
									for (n = 0; n < 1; n += i) r.push(n);
									if (r.push(1), 0 != e[0].offset) {
										var a = {
											offset: 0,
											color: e[0].color
										};
										e.unshift(a)
									}
									if (1 != e[e.length - 1].offset) {
										var o = {
											offset: 1,
											color: e[e.length - 1].color
										};
										e.push(o)
									}
									for (var s = "", c = 0, l = 0; l < r.length; l++) {
										for (n = r[l]; n > e[c + 1].offset;) c++;
										var u = e[c].offset,
											h = (n - u) / (e[c + 1].offset - u),
											d = e[c].color,
											f = e[c + 1].color;
										s += U(Math.round((1 - h) * d[0] + h * f[0]).toString(16)) + U(Math.round((1 - h) * d[1] + h * f[1]).toString(16)) + U(Math.round((1 - h) * d[2] + h * f[2]).toString(16))
									}
									return s.trim()
								}(e.colors, t),
								i = [];
							i.push({
								key: "FunctionType",
								value: "0"
							}), i.push({
								key: "Domain",
								value: "[0.0 1.0]"
							}), i.push({
								key: "Size",
								value: "[" + t + "]"
							}), i.push({
								key: "BitsPerSample",
								value: "8"
							}), i.push({
								key: "Range",
								value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
							}), i.push({
								key: "Decode",
								value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
							}), He({
								data: r,
								additionalKeyValues: i,
								alreadyAppliedFilters: ["/ASCIIHexDecode"],
								objectId: n
							}), J("endobj"), e.objectNumber = Ee(), J("<< /ShadingType " + e.type), J("/ColorSpace /DeviceRGB");
							var a = "/Coords [" + j(parseFloat(e.coords[0])) + " " + j(parseFloat(e.coords[1])) + " ";
							2 === e.type ? a += j(parseFloat(e.coords[2])) + " " + j(parseFloat(e.coords[3])) : a += j(parseFloat(e.coords[2])) + " " + j(parseFloat(e.coords[3])) + " " + j(parseFloat(e.coords[4])) + " " + j(parseFloat(e.coords[5])), J(a += "]"), e.matrix && J("/Matrix [" + e.matrix.toString() + "]"), J("/Function " + n + " 0 R"), J("/Extend [true true]"), J(">>"), J("endobj")
						},
						Je = function(e, t) {
							var n = Fe(),
								r = Ee();
							t.push({
								resourcesOid: n,
								objectOid: r
							}), e.objectNumber = r;
							var i = [];
							i.push({
								key: "Type",
								value: "/Pattern"
							}), i.push({
								key: "PatternType",
								value: "1"
							}), i.push({
								key: "PaintType",
								value: "1"
							}), i.push({
								key: "TilingType",
								value: "1"
							}), i.push({
								key: "BBox",
								value: "[" + e.boundingBox.map(j).join(" ") + "]"
							}), i.push({
								key: "XStep",
								value: j(e.xStep)
							}), i.push({
								key: "YStep",
								value: j(e.yStep)
							}), i.push({
								key: "Resources",
								value: n + " 0 R"
							}), e.matrix && i.push({
								key: "Matrix",
								value: "[" + e.matrix.toString() + "]"
							}), He({
								data: e.stream,
								additionalKeyValues: i,
								objectId: e.objectNumber
							}), J("endobj")
						},
						Xe = function(e) {
							for (var t in e.objectNumber = Ee(), J("<<"), e) switch (t) {
								case "opacity":
									J("/ca " + A(e[t]));
									break;
								case "stroke-opacity":
									J("/CA " + A(e[t]))
							}
							J(">>"), J("endobj")
						},
						$e = function(e) {
							Re(e.resourcesOid, !0), J("<<"), J("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),
								function() {
									for (var e in J("/Font <<"), me) me.hasOwnProperty(e) && (!1 === h || !0 === h && d.hasOwnProperty(e)) && J("/" + e + " " + me[e].objectNumber + " 0 R");
									J(">>")
								}(),
								function() {
									if (Object.keys(ye).length > 0) {
										for (var e in J("/Shading <<"), ye) ye.hasOwnProperty(e) && ye[e] instanceof Xi && ye[e].objectNumber >= 0 && J("/" + e + " " + ye[e].objectNumber + " 0 R");
										ke.publish("putShadingPatternDict"), J(">>")
									}
								}(),
								function(e) {
									if (Object.keys(ye).length > 0) {
										for (var t in J("/Pattern <<"), ye) ye.hasOwnProperty(t) && ye[t] instanceof f.TilingPattern && ye[t].objectNumber >= 0 && ye[t].objectNumber < e && J("/" + t + " " + ye[t].objectNumber + " 0 R");
										ke.publish("putTilingPatternDict"), J(">>")
									}
								}(e.objectOid),
								function() {
									if (Object.keys(we).length > 0) {
										var e;
										for (e in J("/ExtGState <<"), we) we.hasOwnProperty(e) && we[e].objectNumber >= 0 && J("/" + e + " " + we[e].objectNumber + " 0 R");
										ke.publish("putGStateDict"), J(">>")
									}
								}(),
								function() {
									for (var e in J("/XObject <<"), Le) Le.hasOwnProperty(e) && Le[e].objectNumber >= 0 && J("/" + e + " " + Le[e].objectNumber + " 0 R");
									ke.publish("putXobjectDict"), J(">>")
								}(), J(">>"), J("endobj")
						},
						Qe = function() {
							var e = [];
							(function() {
								for (var e in me) me.hasOwnProperty(e) && (!1 === h || !0 === h && d.hasOwnProperty(e)) && We(me[e])
							})(),
							function() {
								var e;
								for (e in we) we.hasOwnProperty(e) && Xe(we[e])
							}(),
							function() {
								for (var e in Le) Le.hasOwnProperty(e) && Ye(Le[e])
							}(),
							function(e) {
								var t;
								for (t in ye) ye.hasOwnProperty(t) && (ye[t] instanceof Xi ? Ke(ye[t]) : ye[t] instanceof $i && Je(ye[t], e))
							}(e), ke.publish("putResources"), e.forEach($e), $e({
								resourcesOid: Ue,
								objectOid: Number.MAX_SAFE_INTEGER
							}), ke.publish("postPutResources")
						},
						et = function(e) {
							ge[e.fontName] = ge[e.fontName] || {}, ge[e.fontName][e.fontStyle] = e.id
						},
						tt = function(e, t, n, r, i) {
							var a = {
								id: "F" + (Object.keys(me).length + 1).toString(10),
								postScriptName: e,
								fontName: t,
								fontStyle: n,
								encoding: r,
								isStandardFont: i || !1,
								metadata: {}
							};
							return ke.publish("addFont", {
								font: a,
								instance: this
							}), me[a.id] = a, et(a), a.id
						},
						nt = f.__private__.pdfEscape = f.pdfEscape = function(e, t) {
							return function(e, t) {
								var n, r, i, a, o, s, c, l, u;
								if (i = (t = t || {}).sourceEncoding || "Unicode", o = t.outputEncoding, (t.autoencode || o) && me[ue].metadata && me[ue].metadata[i] && me[ue].metadata[i].encoding && (a = me[ue].metadata[i].encoding, !o && me[ue].encoding && (o = me[ue].encoding), !o && a.codePages && (o = a.codePages[0]), "string" == typeof o && (o = a[o]), o)) {
									for (c = !1, s = [], n = 0, r = e.length; n < r; n++)(l = o[e.charCodeAt(n)]) ? s.push(String.fromCharCode(l)) : s.push(e[n]), s[n].charCodeAt(0) >> 8 && (c = !0);
									e = s.join("")
								}
								for (n = e.length; void 0 === c && 0 !== n;) e.charCodeAt(n - 1) >> 8 && (c = !0), n--;
								if (!c) return e;
								for (s = t.noBOM ? [] : [254, 255], n = 0, r = e.length; n < r; n++) {
									if ((u = (l = e.charCodeAt(n)) >> 8) >> 8) throw new Error("Character at position " + n + " of string '" + e + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
									s.push(u), s.push(l - (u << 8))
								}
								return String.fromCharCode.apply(void 0, s)
							}(e, t).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
						},
						rt = f.__private__.beginPage = function(e) {
							V[++je] = [], Ne[je] = {
								objId: 0,
								contentsObjId: 0,
								userUnit: Number(s),
								artBox: null,
								bleedBox: null,
								cropBox: null,
								trimBox: null,
								mediaBox: {
									bottomLeftX: 0,
									bottomLeftY: 0,
									topRightX: Number(e[0]),
									topRightY: Number(e[1])
								}
							}, ot(je), K(V[M])
						},
						it = function(e, t) {
							var r, a, o;
							switch (n = t || n, "string" == typeof e && (r = v(e.toLowerCase()), Array.isArray(r) && (a = r[0], o = r[1])), Array.isArray(e) && (a = e[0] * he, o = e[1] * he), isNaN(a) && (a = i[0], o = i[1]), (a > 14400 || o > 14400) && (Si.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), a = Math.min(14400, a), o = Math.min(14400, o)), i = [a, o], n.substr(0, 1)) {
								case "l":
									o > a && (i = [o, a]);
									break;
								case "p":
									a > o && (i = [o, a])
							}
							rt(i), Mt(Ft), J(Vt), 0 !== $t && J($t + " J"), 0 !== Qt && J(Qt + " j"), ke.publish("addPage", {
								pageNumber: je
							})
						},
						at = function(e) {
							e > 0 && e <= je && (V.splice(e, 1), Ne.splice(e, 1), je--, M > je && (M = je), this.setPage(M))
						},
						ot = function(e) {
							e > 0 && e <= je && (M = e)
						},
						st = f.__private__.getNumberOfPages = f.getNumberOfPages = function() {
							return V.length - 1
						},
						ct = function(e, t, n) {
							var r, i = void 0;
							return n = n || {}, e = void 0 !== e ? e : me[ue].fontName, t = void 0 !== t ? t : me[ue].fontStyle, r = e.toLowerCase(), void 0 !== ge[r] && void 0 !== ge[r][t] ? i = ge[r][t] : void 0 !== ge[e] && void 0 !== ge[e][t] ? i = ge[e][t] : !1 === n.disableWarning && Si.warn("Unable to look up font label for font '" + e + "', '" + t + "'. Refer to getFontList() for available fonts."), i || n.noFallback || null == (i = ge.times[t]) && (i = ge.times.normal), i
						},
						lt = f.__private__.putInfo = function() {
							var e = Ee(),
								t = function(e) {
									return e
								};
							for (var n in null !== u && (t = yt.encryptor(e, 0)), J("<<"), J("/Producer (" + nt(t("jsPDF " + Qi.version)) + ")"), le) le.hasOwnProperty(n) && le[n] && J("/" + n.substr(0, 1).toUpperCase() + n.substr(1) + " (" + nt(t(le[n])) + ")");
							J("/CreationDate (" + nt(t(C)) + ")"), J(">>"), J("endobj")
						},
						ut = f.__private__.putCatalog = function(e) {
							var t = (e = e || {}).rootDictionaryObjId || Be;
							switch (Ee(), J("<<"), J("/Type /Catalog"), J("/Pages " + t + " 0 R"), te || (te = "fullwidth"), te) {
								case "fullwidth":
									J("/OpenAction [3 0 R /FitH null]");
									break;
								case "fullheight":
									J("/OpenAction [3 0 R /FitV null]");
									break;
								case "fullpage":
									J("/OpenAction [3 0 R /Fit]");
									break;
								case "original":
									J("/OpenAction [3 0 R /XYZ null null 1]");
									break;
								default:
									var n = "" + te;
									"%" === n.substr(n.length - 1) && (te = parseInt(te) / 100), "number" == typeof te && J("/OpenAction [3 0 R /XYZ null null " + A(te) + "]")
							}
							switch (oe || (oe = "continuous"), oe) {
								case "continuous":
									J("/PageLayout /OneColumn");
									break;
								case "single":
									J("/PageLayout /SinglePage");
									break;
								case "two":
								case "twoleft":
									J("/PageLayout /TwoColumnLeft");
									break;
								case "tworight":
									J("/PageLayout /TwoColumnRight")
							}
							ie && J("/PageMode /" + ie), ke.publish("putCatalog"), J(">>"), J("endobj")
						},
						ht = f.__private__.putTrailer = function() {
							J("trailer"), J("<<"), J("/Size " + (q + 1)), J("/Root " + q + " 0 R"), J("/Info " + (q - 1) + " 0 R"), null !== u && J("/Encrypt " + yt.oid + " 0 R"), J("/ID [ <" + _ + "> <" + _ + "> ]"), J(">>")
						},
						dt = f.__private__.putHeader = function() {
							J("%PDF-" + p), J("%ºß¬à")
						},
						ft = f.__private__.putXRef = function() {
							var e = "0000000000";
							J("xref"), J("0 " + (q + 1)), J("0000000000 65535 f ");
							for (var t = 1; t <= q; t++) "function" == typeof z[t] ? J((e + z[t]()).slice(-10) + " 00000 n ") : void 0 !== z[t] ? J((e + z[t]).slice(-10) + " 00000 n ") : J("0000000000 00000 n ")
						},
						pt = f.__private__.buildDocument = function() {
							q = 0, H = 0, Z = [], z = [], G = [], Be = Fe(), Ue = Fe(), K(Z), ke.publish("buildDocument"), dt(), Ve(),
								function() {
									ke.publish("putAdditionalObjects");
									for (var e = 0; e < G.length; e++) {
										var t = G[e];
										Re(t.objId, !0), J(t.content), J("endobj")
									}
									ke.publish("postPutAdditionalObjects")
								}(), Qe(), null !== u && (yt.oid = Ee(), J("<<"), J("/Filter /Standard"), J("/V " + yt.v), J("/R " + yt.r), J("/U <" + yt.toHexString(yt.U) + ">"), J("/O <" + yt.toHexString(yt.O) + ">"), J("/P " + yt.P), J(">>"), J("endobj")), lt(), ut();
							var e = H;
							return ft(), ht(), J("startxref"), J("" + e), J("%%EOF"), K(V[M]), Z.join("\n")
						},
						mt = f.__private__.getBlob = function(e) {
							return new Blob([$(e)], {
								type: "application/pdf"
							})
						},
						gt = f.output = f.__private__.output = (De = function(e, t) {
							switch ("string" == typeof(t = t || {}) ? t = {
								filename: t
							} : t.filename = t.filename || "generated.pdf", e) {
								case void 0:
									return pt();
								case "save":
									f.save(t.filename);
									break;
								case "arraybuffer":
									return $(pt());
								case "blob":
									return mt(pt());
								case "bloburi":
								case "bloburl":
									if (void 0 !== wi.URL && "function" == typeof wi.URL.createObjectURL) return wi.URL && wi.URL.createObjectURL(mt(pt())) || void 0;
									Si.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
									break;
								case "datauristring":
								case "dataurlstring":
									var n = "",
										r = pt();
									try {
										n = Li(r)
									} catch (e) {
										n = Li(unescape(encodeURIComponent(r)))
									}
									return "data:application/pdf;filename=" + t.filename + ";base64," + n;
								case "pdfobjectnewwindow":
									throw Object.prototype.toString.call(wi), new Error("The option pdfobjectnewwindow just works in a browser-environment.");
								case "pdfjsnewwindow":
									throw Object.prototype.toString.call(wi), new Error("The option pdfjsnewwindow just works in a browser-environment.");
								case "dataurlnewwindow":
									if ("[object Window]" !== Object.prototype.toString.call(wi)) throw new Error("The option dataurlnewwindow just works in a browser-environment.");
									var i = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", t) + '"></iframe></body></html>',
										a = wi.open();
									if (null !== a && (a.document.write(i), a.document.title = t.filename), a || "undefined" == typeof safari) return a;
									break;
								case "datauri":
								case "dataurl":
									return wi.document.location.href = this.output("datauristring", t);
								default:
									return null
							}
						}, De.foo = function() {
							try {
								return De.apply(this, arguments)
							} catch (n) {
								var e = n.stack || "";
								~e.indexOf(" at ") && (e = e.split(" at ")[1]);
								var t = "Error in function " + e.split("\n")[0].split("<")[0] + ": " + n.message;
								if (!wi.console) throw new Error(t);
								wi.console.error(t, n), wi.alert && alert(t)
							}
						}, De.foo.bar = De, De.foo),
						vt = function(e) {
							return !0 === Array.isArray(Ae) && Ae.indexOf(e) > -1
						};
					switch (r) {
						case "pt":
							he = 1;
							break;
						case "mm":
							he = 72 / 25.4;
							break;
						case "cm":
							he = 72 / 2.54;
							break;
						case "in":
							he = 72;
							break;
						case "px":
							he = 1 == vt("px_scaling") ? .75 : 96 / 72;
							break;
						case "pc":
						case "em":
							he = 12;
							break;
						case "ex":
							he = 6;
							break;
						default:
							if ("number" != typeof r) throw new Error("Invalid unit: " + r);
							he = r
					}
					var yt = null;
					F(), T();
					var bt = f.__private__.getPageInfo = f.getPageInfo = function(e) {
							if (isNaN(e) || e % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
							return {
								objId: Ne[e].objId,
								pageNumber: e,
								pageContext: Ne[e]
							}
						},
						wt = f.__private__.getPageInfoByObjId = function(e) {
							if (isNaN(e) || e % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
							for (var t in Ne)
								if (Ne[t].objId === e) break;
							return bt(t)
						},
						xt = f.__private__.getCurrentPageInfo = f.getCurrentPageInfo = function() {
							return {
								objId: Ne[M].objId,
								pageNumber: M,
								pageContext: Ne[M]
							}
						};
					f.addPage = function() {
						return it.apply(this, arguments), this
					}, f.setPage = function() {
						return ot.apply(this, arguments), K.call(this, V[M]), this
					}, f.insertPage = function(e) {
						return this.addPage(), this.movePage(M, e), this
					}, f.movePage = function(e, t) {
						var n, r;
						if (e > t) {
							n = V[e], r = Ne[e];
							for (var i = e; i > t; i--) V[i] = V[i - 1], Ne[i] = Ne[i - 1];
							V[t] = n, Ne[t] = r, this.setPage(t)
						} else if (e < t) {
							n = V[e], r = Ne[e];
							for (var a = e; a < t; a++) V[a] = V[a + 1], Ne[a] = Ne[a + 1];
							V[t] = n, Ne[t] = r, this.setPage(t)
						}
						return this
					}, f.deletePage = function() {
						return at.apply(this, arguments), this
					}, f.__private__.text = f.text = function(e, t, n, r, i) {
						var a, o, s, c, l, u, h, f, p, m = (r = r || {}).scope || this;
						if ("number" == typeof e && "number" == typeof t && ("string" == typeof n || Array.isArray(n))) {
							var g = n;
							n = t, t = e, e = g
						}
						if (arguments[3] instanceof Ce == 0 ? (s = arguments[4], c = arguments[5], "object" === (0, yi.Z)(h = arguments[3]) && null !== h || ("string" == typeof s && (c = s, s = null), "string" == typeof h && (c = h, h = null), "number" == typeof h && (s = h, h = null), r = {
								flags: h,
								angle: s,
								align: c
							})) : (N("The transform parameter of text() with a Matrix value"), p = i), isNaN(t) || isNaN(n) || null == e) throw new Error("Invalid arguments passed to jsPDF.text");
						if (0 === e.length) return m;
						var v, w = "",
							x = "number" == typeof r.lineHeightFactor ? r.lineHeightFactor : Et,
							S = m.internal.scaleFactor;

						function k(e) {
							return e = e.split("\t").join(Array(r.TabLen || 9).join(" ")), nt(e, h)
						}

						function A(e) {
							for (var t, n = e.concat(), r = [], i = n.length; i--;) "string" == typeof(t = n.shift()) ? r.push(t) : Array.isArray(e) && (1 === t.length || void 0 === t[1] && void 0 === t[2]) ? r.push(t[0]) : r.push([t[0], t[1], t[2]]);
							return r
						}

						function L(e, t) {
							var n;
							if ("string" == typeof e) n = t(e)[0];
							else if (Array.isArray(e)) {
								for (var r, i, a = e.concat(), o = [], s = a.length; s--;) "string" == typeof(r = a.shift()) ? o.push(t(r)[0]) : Array.isArray(r) && "string" == typeof r[0] && (i = t(r[0], r[1], r[2]), o.push([i[0], i[1], i[2]]));
								n = o
							}
							return n
						}
						var I = !1,
							C = !0;
						if ("string" == typeof e) I = !0;
						else if (Array.isArray(e)) {
							var _ = e.concat();
							o = [];
							for (var O, T = _.length; T--;)("string" != typeof(O = _.shift()) || Array.isArray(O) && "string" != typeof O[0]) && (C = !1);
							I = C
						}
						if (!1 === I) throw new Error('Type of text must be string or Array. "' + e + '" is not recognized.');
						"string" == typeof e && (e = e.match(/[\r?\n]/) ? e.split(/\r\n|\r|\n/g) : [e]);
						var D = ee / m.internal.scaleFactor,
							E = D * (x - 1);
						switch (r.baseline) {
							case "bottom":
								n -= E;
								break;
							case "top":
								n += D - E;
								break;
							case "hanging":
								n += D - 2 * E;
								break;
							case "middle":
								n += D / 2 - E
						}
						if ((u = r.maxWidth || 0) > 0 && ("string" == typeof e ? e = m.splitTextToSize(e, u) : "[object Array]" === Object.prototype.toString.call(e) && (e = e.reduce((function(e, t) {
								return e.concat(m.splitTextToSize(t, u))
							}), []))), a = {
								text: e,
								x: t,
								y: n,
								options: r,
								mutex: {
									pdfEscape: nt,
									activeFontKey: ue,
									fonts: me,
									activeFontSize: ee
								}
							}, ke.publish("preProcessText", a), e = a.text, s = (r = a.options).angle, p instanceof Ce == 0 && s && "number" == typeof s) {
							s *= Math.PI / 180, 0 === r.rotationDirection && (s = -s), b === y.ADVANCED && (s = -s);
							var F = Math.cos(s),
								R = Math.sin(s);
							p = new Ce(F, R, -R, F, 0, 0)
						} else s && s instanceof Ce && (p = s);
						b !== y.ADVANCED || p || (p = Oe), void 0 !== (l = r.charSpace || Jt) && (w += j(P(l)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), void 0 !== (f = r.horizontalScale) && (w += j(100 * f) + " Tz\n"), r.lang;
						var M = -1,
							B = void 0 !== r.renderingMode ? r.renderingMode : r.stroke,
							U = m.internal.getCurrentPageInfo().pageContext;
						switch (B) {
							case 0:
							case !1:
							case "fill":
								M = 0;
								break;
							case 1:
							case !0:
							case "stroke":
								M = 1;
								break;
							case 2:
							case "fillThenStroke":
								M = 2;
								break;
							case 3:
							case "invisible":
								M = 3;
								break;
							case 4:
							case "fillAndAddForClipping":
								M = 4;
								break;
							case 5:
							case "strokeAndAddPathForClipping":
								M = 5;
								break;
							case 6:
							case "fillThenStrokeAndAddToPathForClipping":
								M = 6;
								break;
							case 7:
							case "addToPathForClipping":
								M = 7
						}
						var q = void 0 !== U.usedRenderingMode ? U.usedRenderingMode : -1; - 1 !== M ? w += M + " Tr\n" : -1 !== q && (w += "0 Tr\n"), -1 !== M && (U.usedRenderingMode = M), c = r.align || "left";
						var z, Z = ee * x,
							H = m.internal.pageSize.getWidth(),
							G = me[ue];
						l = r.charSpace || Jt, u = r.maxWidth || 0, h = Object.assign({
							autoencode: !0,
							noBOM: !0
						}, r.flags);
						var V = [];
						if ("[object Array]" === Object.prototype.toString.call(e)) {
							var W;
							o = A(e), "left" !== c && (z = o.map((function(e) {
								return m.getStringUnitWidth(e, {
									font: G,
									charSpace: l,
									fontSize: ee,
									doKerning: !1
								}) * ee / S
							})));
							var Y, K = 0;
							if ("right" === c) {
								t -= z[0], e = [], T = o.length;
								for (var X = 0; X < T; X++) 0 === X ? (Y = zt(t), W = Zt(n)) : (Y = P(K - z[X]), W = -Z), e.push([o[X], Y, W]), K = z[X]
							} else if ("center" === c) {
								t -= z[0] / 2, e = [], T = o.length;
								for (var $ = 0; $ < T; $++) 0 === $ ? (Y = zt(t), W = Zt(n)) : (Y = P((K - z[$]) / 2), W = -Z), e.push([o[$], Y, W]), K = z[$]
							} else if ("left" === c) {
								e = [], T = o.length;
								for (var Q = 0; Q < T; Q++) e.push(o[Q])
							} else {
								if ("justify" !== c) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
								e = [], T = o.length, u = 0 !== u ? u : H;
								for (var te = 0; te < T; te++) W = 0 === te ? Zt(n) : -Z, Y = 0 === te ? zt(t) : 0, te < T - 1 ? V.push(j(P((u - z[te]) / (o[te].split(" ").length - 1)))) : V.push(0), e.push([o[te], Y, W])
							}
						}!0 === ("boolean" == typeof r.R2L ? r.R2L : re) && (e = L(e, (function(e, t, n) {
							return [e.split("").reverse().join(""), t, n]
						}))), a = {
							text: e,
							x: t,
							y: n,
							options: r,
							mutex: {
								pdfEscape: nt,
								activeFontKey: ue,
								fonts: me,
								activeFontSize: ee
							}
						}, ke.publish("postProcessText", a), e = a.text, v = a.mutex.isHex || !1;
						var ne = me[ue].encoding;
						"WinAnsiEncoding" !== ne && "StandardEncoding" !== ne || (e = L(e, (function(e, t, n) {
							return [k(e), t, n]
						}))), o = A(e), e = [];
						for (var ie, ae, oe, se = Array.isArray(o[0]) ? 1 : 0, ce = "", le = function(e, t, n) {
								var i = "";
								return n instanceof Ce ? (n = "number" == typeof r.angle ? _e(n, new Ce(1, 0, 0, 1, e, t)) : _e(new Ce(1, 0, 0, 1, e, t), n), b === y.ADVANCED && (n = _e(new Ce(1, 0, 0, -1, 0, 0), n)), i = n.join(" ") + " Tm\n") : i = j(e) + " " + j(t) + " Td\n", i
							}, he = 0; he < o.length; he++) {
							switch (ce = "", se) {
								case 1:
									oe = (v ? "<" : "(") + o[he][0] + (v ? ">" : ")"), ie = parseFloat(o[he][1]), ae = parseFloat(o[he][2]);
									break;
								case 0:
									oe = (v ? "<" : "(") + o[he] + (v ? ">" : ")"), ie = zt(t), ae = Zt(n)
							}
							void 0 !== V && void 0 !== V[he] && (ce = V[he] + " Tw\n"), 0 === he ? e.push(ce + le(ie, ae, p) + oe) : 0 === se ? e.push(ce + oe) : 1 === se && e.push(ce + le(ie, ae, p) + oe)
						}
						e = 0 === se ? e.join(" Tj\nT* ") : e.join(" Tj\n"), e += " Tj\n";
						var de = "BT\n/";
						return de += ue + " " + ee + " Tf\n", de += j(ee * x) + " TL\n", de += Yt + "\n", de += w, de += e, J(de += "ET"), d[ue] = !0, m
					};
					var St = f.__private__.clip = f.clip = function(e) {
						return J("evenodd" === e ? "W*" : "W"), this
					};
					f.clipEvenOdd = function() {
						return St("evenodd")
					}, f.__private__.discardPath = f.discardPath = function() {
						return J("n"), this
					};
					var jt = f.__private__.isValidStyle = function(e) {
						var t = !1;
						return -1 !== [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(e) && (t = !0), t
					};
					f.__private__.setDefaultPathOperation = f.setDefaultPathOperation = function(e) {
						return jt(e) && (l = e), this
					};
					var Nt = f.__private__.getStyle = f.getStyle = function(e) {
							var t = l;
							switch (e) {
								case "D":
								case "S":
									t = "S";
									break;
								case "F":
									t = "f";
									break;
								case "FD":
								case "DF":
									t = "B";
									break;
								case "f":
								case "f*":
								case "B":
								case "B*":
									t = e
							}
							return t
						},
						kt = f.close = function() {
							return J("h"), this
						};
					f.stroke = function() {
						return J("S"), this
					}, f.fill = function(e) {
						return At("f", e), this
					}, f.fillEvenOdd = function(e) {
						return At("f*", e), this
					}, f.fillStroke = function(e) {
						return At("B", e), this
					}, f.fillStrokeEvenOdd = function(e) {
						return At("B*", e), this
					};
					var At = function(e, t) {
							"object" === (0, yi.Z)(t) ? It(t, e): J(e)
						},
						Lt = function(e) {
							null === e || b === y.ADVANCED && void 0 === e || (e = Nt(e), J(e))
						};

					function Pt(e, t, n, r, i) {
						var a = new $i(t || this.boundingBox, n || this.xStep, r || this.yStep, this.gState, i || this.matrix);
						a.stream = this.stream;
						var o = e + "$$" + this.cloneIndex++ + "$$";
						return Te(o, a), a
					}
					var It = function(e, t) {
							var n = be[e.key],
								r = ye[n];
							if (r instanceof Xi) J("q"), J(Ct(t)), r.gState && f.setGState(r.gState), J(e.matrix.toString() + " cm"), J("/" + n + " sh"), J("Q");
							else if (r instanceof $i) {
								var i = new Ce(1, 0, 0, -1, 0, ln());
								e.matrix && (i = i.multiply(e.matrix || Oe), n = Pt.call(r, e.key, e.boundingBox, e.xStep, e.yStep, i).id), J("q"), J("/Pattern cs"), J("/" + n + " scn"), r.gState && f.setGState(r.gState), J(t), J("Q")
							}
						},
						Ct = function(e) {
							switch (e) {
								case "f":
								case "F":
								case "n":
									return "W n";
								case "f*":
									return "W* n";
								case "B":
								case "S":
									return "W S";
								case "B*":
									return "W* S"
							}
						},
						_t = f.moveTo = function(e, t) {
							return J(j(P(e)) + " " + j(I(t)) + " m"), this
						},
						Ot = f.lineTo = function(e, t) {
							return J(j(P(e)) + " " + j(I(t)) + " l"), this
						},
						Tt = f.curveTo = function(e, t, n, r, i, a) {
							return J([j(P(e)), j(I(t)), j(P(n)), j(I(r)), j(P(i)), j(I(a)), "c"].join(" ")), this
						};
					f.__private__.line = f.line = function(e, t, n, r, i) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !jt(i)) throw new Error("Invalid arguments passed to jsPDF.line");
						return b === y.COMPAT ? this.lines([
							[n - e, r - t]
						], e, t, [1, 1], i || "S") : this.lines([
							[n - e, r - t]
						], e, t, [1, 1]).stroke()
					}, f.__private__.lines = f.lines = function(e, t, n, r, i, a) {
						var o, s, c, l, u, h, d, f, p, m, g, v;
						if ("number" == typeof e && (v = n, n = t, t = e, e = v), r = r || [1, 1], a = a || !1, isNaN(t) || isNaN(n) || !Array.isArray(e) || !Array.isArray(r) || !jt(i) || "boolean" != typeof a) throw new Error("Invalid arguments passed to jsPDF.lines");
						for (_t(t, n), o = r[0], s = r[1], l = e.length, m = t, g = n, c = 0; c < l; c++) 2 === (u = e[c]).length ? (m = u[0] * o + m, g = u[1] * s + g, Ot(m, g)) : (h = u[0] * o + m, d = u[1] * s + g, f = u[2] * o + m, p = u[3] * s + g, m = u[4] * o + m, g = u[5] * s + g, Tt(h, d, f, p, m, g));
						return a && kt(), Lt(i), this
					}, f.path = function(e) {
						for (var t = 0; t < e.length; t++) {
							var n = e[t],
								r = n.c;
							switch (n.op) {
								case "m":
									_t(r[0], r[1]);
									break;
								case "l":
									Ot(r[0], r[1]);
									break;
								case "c":
									Tt.apply(this, r);
									break;
								case "h":
									kt()
							}
						}
						return this
					}, f.__private__.rect = f.rect = function(e, t, n, r, i) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !jt(i)) throw new Error("Invalid arguments passed to jsPDF.rect");
						return b === y.COMPAT && (r = -r), J([j(P(e)), j(I(t)), j(P(n)), j(P(r)), "re"].join(" ")), Lt(i), this
					}, f.__private__.triangle = f.triangle = function(e, t, n, r, i, a, o) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) || !jt(o)) throw new Error("Invalid arguments passed to jsPDF.triangle");
						return this.lines([
							[n - e, r - t],
							[i - n, a - r],
							[e - i, t - a]
						], e, t, [1, 1], o, !0), this
					}, f.__private__.roundedRect = f.roundedRect = function(e, t, n, r, i, a, o) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) || !jt(o)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
						var s = 4 / 3 * (Math.SQRT2 - 1);
						return i = Math.min(i, .5 * n), a = Math.min(a, .5 * r), this.lines([
							[n - 2 * i, 0],
							[i * s, 0, i, a - a * s, i, a],
							[0, r - 2 * a],
							[0, a * s, -i * s, a, -i, a],
							[2 * i - n, 0],
							[-i * s, 0, -i, -a * s, -i, -a],
							[0, 2 * a - r],
							[0, -a * s, i * s, -a, i, -a]
						], e + i, t, [1, 1], o, !0), this
					}, f.__private__.ellipse = f.ellipse = function(e, t, n, r, i) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !jt(i)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
						var a = 4 / 3 * (Math.SQRT2 - 1) * n,
							o = 4 / 3 * (Math.SQRT2 - 1) * r;
						return _t(e + n, t), Tt(e + n, t - o, e + a, t - r, e, t - r), Tt(e - a, t - r, e - n, t - o, e - n, t), Tt(e - n, t + o, e - a, t + r, e, t + r), Tt(e + a, t + r, e + n, t + o, e + n, t), Lt(i), this
					}, f.__private__.circle = f.circle = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || !jt(r)) throw new Error("Invalid arguments passed to jsPDF.circle");
						return this.ellipse(e, t, n, n, r)
					}, f.setFont = function(e, t, n) {
						return n && (t = S(t, n)), ue = ct(e, t, {
							disableWarning: !1
						}), this
					};
					var Dt = f.__private__.getFont = f.getFont = function() {
						return me[ct.apply(f, arguments)]
					};
					f.__private__.getFontList = f.getFontList = function() {
						var e, t, n = {};
						for (e in ge)
							if (ge.hasOwnProperty(e))
								for (t in n[e] = [], ge[e]) ge[e].hasOwnProperty(t) && n[e].push(t);
						return n
					}, f.addFont = function(e, t, n, r, i) {
						var a = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
						return arguments[3] && -1 !== a.indexOf(arguments[3]) ? i = arguments[3] : arguments[3] && -1 == a.indexOf(arguments[3]) && (n = S(n, r)), i = i || "Identity-H", tt.call(this, e, t, n, i)
					};
					var Et, Ft = e.lineWidth || .200025,
						Rt = f.__private__.getLineWidth = f.getLineWidth = function() {
							return Ft
						},
						Mt = f.__private__.setLineWidth = f.setLineWidth = function(e) {
							return Ft = e, J(j(P(e)) + " w"), this
						};
					f.__private__.setLineDash = Qi.API.setLineDash = Qi.API.setLineDashPattern = function(e, t) {
						if (e = e || [], t = t || 0, isNaN(t) || !Array.isArray(e)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
						return e = e.map((function(e) {
							return j(P(e))
						})).join(" "), t = j(P(t)), J("[" + e + "] " + t + " d"), this
					};
					var Bt = f.__private__.getLineHeight = f.getLineHeight = function() {
						return ee * Et
					};
					f.__private__.getLineHeight = f.getLineHeight = function() {
						return ee * Et
					};
					var Ut = f.__private__.setLineHeightFactor = f.setLineHeightFactor = function(e) {
							return "number" == typeof(e = e || 1.15) && (Et = e), this
						},
						qt = f.__private__.getLineHeightFactor = f.getLineHeightFactor = function() {
							return Et
						};
					Ut(e.lineHeight);
					var zt = f.__private__.getHorizontalCoordinate = function(e) {
							return P(e)
						},
						Zt = f.__private__.getVerticalCoordinate = function(e) {
							return b === y.ADVANCED ? e : Ne[M].mediaBox.topRightY - Ne[M].mediaBox.bottomLeftY - P(e)
						},
						Ht = f.__private__.getHorizontalCoordinateString = f.getHorizontalCoordinateString = function(e) {
							return j(zt(e))
						},
						Gt = f.__private__.getVerticalCoordinateString = f.getVerticalCoordinateString = function(e) {
							return j(Zt(e))
						},
						Vt = e.strokeColor || "0 G";
					f.__private__.getStrokeColor = f.getDrawColor = function() {
						return qe(Vt)
					}, f.__private__.setStrokeColor = f.setDrawColor = function(e, t, n, r) {
						return Vt = ze({
							ch1: e,
							ch2: t,
							ch3: n,
							ch4: r,
							pdfColorType: "draw",
							precision: 2
						}), J(Vt), this
					};
					var Wt = e.fillColor || "0 g";
					f.__private__.getFillColor = f.getFillColor = function() {
						return qe(Wt)
					}, f.__private__.setFillColor = f.setFillColor = function(e, t, n, r) {
						return Wt = ze({
							ch1: e,
							ch2: t,
							ch3: n,
							ch4: r,
							pdfColorType: "fill",
							precision: 2
						}), J(Wt), this
					};
					var Yt = e.textColor || "0 g",
						Kt = f.__private__.getTextColor = f.getTextColor = function() {
							return qe(Yt)
						};
					f.__private__.setTextColor = f.setTextColor = function(e, t, n, r) {
						return Yt = ze({
							ch1: e,
							ch2: t,
							ch3: n,
							ch4: r,
							pdfColorType: "text",
							precision: 3
						}), this
					};
					var Jt = e.charSpace,
						Xt = f.__private__.getCharSpace = f.getCharSpace = function() {
							return parseFloat(Jt || 0)
						};
					f.__private__.setCharSpace = f.setCharSpace = function(e) {
						if (isNaN(e)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
						return Jt = e, this
					};
					var $t = 0;
					f.CapJoinStyles = {
						0: 0,
						butt: 0,
						but: 0,
						miter: 0,
						1: 1,
						round: 1,
						rounded: 1,
						circle: 1,
						2: 2,
						projecting: 2,
						project: 2,
						square: 2,
						bevel: 2
					}, f.__private__.setLineCap = f.setLineCap = function(e) {
						var t = f.CapJoinStyles[e];
						if (void 0 === t) throw new Error("Line cap style of '" + e + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
						return $t = t, J(t + " J"), this
					};
					var Qt = 0;
					f.__private__.setLineJoin = f.setLineJoin = function(e) {
						var t = f.CapJoinStyles[e];
						if (void 0 === t) throw new Error("Line join style of '" + e + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
						return Qt = t, J(t + " j"), this
					}, f.__private__.setLineMiterLimit = f.__private__.setMiterLimit = f.setLineMiterLimit = f.setMiterLimit = function(e) {
						if (e = e || 0, isNaN(e)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
						return J(j(P(e)) + " M"), this
					}, f.GState = Ki, f.setGState = function(e) {
						(e = "string" == typeof e ? we[xe[e]] : en(null, e)).equals(Se) || (J("/" + e.id + " gs"), Se = e)
					};
					var en = function(e, t) {
						if (!e || !xe[e]) {
							var n = !1;
							for (var r in we)
								if (we.hasOwnProperty(r) && we[r].equals(t)) {
									n = !0;
									break
								} if (n) t = we[r];
							else {
								var i = "GS" + (Object.keys(we).length + 1).toString(10);
								we[i] = t, t.id = i
							}
							return e && (xe[e] = t.id), ke.publish("addGState", t), t
						}
					};
					f.addGState = function(e, t) {
						return en(e, t), this
					}, f.saveGraphicsState = function() {
						return J("q"), ve.push({
							key: ue,
							size: ee,
							color: Yt
						}), this
					}, f.restoreGraphicsState = function() {
						J("Q");
						var e = ve.pop();
						return ue = e.key, ee = e.size, Yt = e.color, Se = null, this
					}, f.setCurrentTransformationMatrix = function(e) {
						return J(e.toString() + " cm"), this
					}, f.comment = function(e) {
						return J("#" + e), this
					};
					var tn = function(e, t) {
							var n = e || 0;
							Object.defineProperty(this, "x", {
								enumerable: !0,
								get: function() {
									return n
								},
								set: function(e) {
									isNaN(e) || (n = parseFloat(e))
								}
							});
							var r = t || 0;
							Object.defineProperty(this, "y", {
								enumerable: !0,
								get: function() {
									return r
								},
								set: function(e) {
									isNaN(e) || (r = parseFloat(e))
								}
							});
							var i = "pt";
							return Object.defineProperty(this, "type", {
								enumerable: !0,
								get: function() {
									return i
								},
								set: function(e) {
									i = e.toString()
								}
							}), this
						},
						nn = function(e, t, n, r) {
							tn.call(this, e, t), this.type = "rect";
							var i = n || 0;
							Object.defineProperty(this, "w", {
								enumerable: !0,
								get: function() {
									return i
								},
								set: function(e) {
									isNaN(e) || (i = parseFloat(e))
								}
							});
							var a = r || 0;
							return Object.defineProperty(this, "h", {
								enumerable: !0,
								get: function() {
									return a
								},
								set: function(e) {
									isNaN(e) || (a = parseFloat(e))
								}
							}), this
						},
						rn = function() {
							this.page = je, this.currentPage = M, this.pages = V.slice(0), this.pagesContext = Ne.slice(0), this.x = de, this.y = fe, this.matrix = pe, this.width = sn(M), this.height = ln(M), this.outputDestination = Y, this.id = "", this.objectNumber = -1
						};
					rn.prototype.restore = function() {
						je = this.page, M = this.currentPage, Ne = this.pagesContext, V = this.pages, de = this.x, fe = this.y, pe = this.matrix, cn(M, this.width), un(M, this.height), Y = this.outputDestination
					};
					var an = function(e, t, n, r, i) {
						Ie.push(new rn), je = M = 0, V = [], de = e, fe = t, pe = i, rt([n, r])
					};
					for (var on in f.beginFormObject = function(e, t, n, r, i) {
							return an(e, t, n, r, i), this
						}, f.endFormObject = function(e) {
							return function(e) {
								if (Pe[e]) Ie.pop().restore();
								else {
									var t = new rn,
										n = "Xo" + (Object.keys(Le).length + 1).toString(10);
									t.id = n, Pe[e] = n, Le[n] = t, ke.publish("addFormObject", t), Ie.pop().restore()
								}
							}(e), this
						}, f.doFormObject = function(e, t) {
							var n = Le[Pe[e]];
							return J("q"), J(t.toString() + " cm"), J("/" + n.id + " Do"), J("Q"), this
						}, f.getFormObject = function(e) {
							var t = Le[Pe[e]];
							return {
								x: t.x,
								y: t.y,
								width: t.width,
								height: t.height,
								matrix: t.matrix
							}
						}, f.save = function(e, t) {
							return e = e || "generated.pdf", (t = t || {}).returnPromise = t.returnPromise || !1, !1 === t.returnPromise ? (Pi(mt(pt()), e), "function" == typeof Pi.unload && wi.setTimeout && setTimeout(Pi.unload, 911), this) : new Promise((function(t, n) {
								try {
									var r = Pi(mt(pt()), e);
									"function" == typeof Pi.unload && wi.setTimeout && setTimeout(Pi.unload, 911), t(r)
								} catch (e) {
									n(e.message)
								}
							}))
						}, Qi.API) Qi.API.hasOwnProperty(on) && ("events" === on && Qi.API.events.length ? function(e, t) {
						var n, r, i;
						for (i = t.length - 1; - 1 !== i; i--) n = t[i][0], r = t[i][1], e.subscribe.apply(e, [n].concat("function" == typeof r ? [r] : r))
					}(ke, Qi.API.events) : f[on] = Qi.API[on]);
					var sn = f.getPageWidth = function(e) {
							return (Ne[e = e || M].mediaBox.topRightX - Ne[e].mediaBox.bottomLeftX) / he
						},
						cn = f.setPageWidth = function(e, t) {
							Ne[e].mediaBox.topRightX = t * he + Ne[e].mediaBox.bottomLeftX
						},
						ln = f.getPageHeight = function(e) {
							return (Ne[e = e || M].mediaBox.topRightY - Ne[e].mediaBox.bottomLeftY) / he
						},
						un = f.setPageHeight = function(e, t) {
							Ne[e].mediaBox.topRightY = t * he + Ne[e].mediaBox.bottomLeftY
						};
					return f.internal = {
							pdfEscape: nt,
							getStyle: Nt,
							getFont: Dt,
							getFontSize: ne,
							getCharSpace: Xt,
							getTextColor: Kt,
							getLineHeight: Bt,
							getLineHeightFactor: qt,
							getLineWidth: Rt,
							write: X,
							getHorizontalCoordinate: zt,
							getVerticalCoordinate: Zt,
							getCoordinateString: Ht,
							getVerticalCoordinateString: Gt,
							collections: {},
							newObject: Ee,
							newAdditionalObject: Me,
							newObjectDeferred: Fe,
							newObjectDeferredBegin: Re,
							getFilters: Ze,
							putStream: He,
							events: ke,
							scaleFactor: he,
							pageSize: {
								getWidth: function() {
									return sn(M)
								},
								setWidth: function(e) {
									cn(M, e)
								},
								getHeight: function() {
									return ln(M)
								},
								setHeight: function(e) {
									un(M, e)
								}
							},
							encryptionOptions: u,
							encryption: yt,
							getEncryptor: function(e) {
								return null !== u ? yt.encryptor(e, 0) : function(e) {
									return e
								}
							},
							output: gt,
							getNumberOfPages: st,
							pages: V,
							out: J,
							f2: A,
							f3: L,
							getPageInfo: bt,
							getPageInfoByObjId: wt,
							getCurrentPageInfo: xt,
							getPDFVersion: m,
							Point: tn,
							Rectangle: nn,
							Matrix: Ce,
							hasHotfix: vt
						}, Object.defineProperty(f.internal.pageSize, "width", {
							get: function() {
								return sn(M)
							},
							set: function(e) {
								cn(M, e)
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(f.internal.pageSize, "height", {
							get: function() {
								return ln(M)
							},
							set: function(e) {
								un(M, e)
							},
							enumerable: !0,
							configurable: !0
						}),
						function(e) {
							for (var t = 0, n = Q.length; t < n; t++) {
								var r = tt.call(this, e[t][0], e[t][1], e[t][2], Q[t][3], !0);
								!1 === h && (d[r] = !0);
								var i = e[t][0].split("-");
								et({
									id: r,
									fontName: i[0],
									fontStyle: i[1] || ""
								})
							}
							ke.publish("addFonts", {
								fonts: me,
								dictionary: ge
							})
						}.call(f, Q), ue = "F1", it(i, n), ke.publish("initialized"), f
				}
				Vi.prototype.lsbFirstWord = function(e) {
					return String.fromCharCode(e >> 0 & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255)
				}, Vi.prototype.toHexString = function(e) {
					return e.split("").map((function(e) {
						return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2)
					})).join("")
				}, Vi.prototype.hexToBytes = function(e) {
					for (var t = [], n = 0; n < e.length; n += 2) t.push(String.fromCharCode(parseInt(e.substr(n, 2), 16)));
					return t.join("")
				}, Vi.prototype.processOwnerPassword = function(e, t) {
					return Hi(qi(t).substr(0, 5), e)
				}, Vi.prototype.encryptor = function(e, t) {
					var n = qi(this.encryptionKey + String.fromCharCode(255 & e, e >> 8 & 255, e >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
					return function(e) {
						return Hi(n, e)
					}
				}, Ki.prototype.equals = function(e) {
					var t, n = "id,objectNumber,equals";
					if (!e || (0, yi.Z)(e) !== (0, yi.Z)(this)) return !1;
					var r = 0;
					for (t in this)
						if (!(n.indexOf(t) >= 0)) {
							if (this.hasOwnProperty(t) && !e.hasOwnProperty(t)) return !1;
							if (this[t] !== e[t]) return !1;
							r++
						} for (t in e) e.hasOwnProperty(t) && n.indexOf(t) < 0 && r--;
					return 0 === r
				}, Qi.API = {
					events: []
				}, Qi.version = "2.5.1";
				var ea = Qi.API,
					ta = 1,
					na = function(e) {
						return e.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
					},
					ra = function(e) {
						return e.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")")
					},
					ia = function(e) {
						return e.toFixed(2)
					},
					aa = function(e) {
						return e.toFixed(5)
					};
				ea.__acroform__ = {};
				var oa = function(e, t) {
						e.prototype = Object.create(t.prototype), e.prototype.constructor = e
					},
					sa = function(e) {
						return e * ta
					},
					ca = function(e) {
						var t = new ka,
							n = Ba.internal.getHeight(e) || 0,
							r = Ba.internal.getWidth(e) || 0;
						return t.BBox = [0, 0, Number(ia(r)), Number(ia(n))], t
					},
					la = ea.__acroform__.setBit = function(e, t) {
						if (e = e || 0, t = t || 0, isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
						return e | 1 << t
					},
					ua = ea.__acroform__.clearBit = function(e, t) {
						if (e = e || 0, t = t || 0, isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
						return e & ~(1 << t)
					},
					ha = ea.__acroform__.getBit = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
						return 0 == (e & 1 << t) ? 0 : 1
					},
					da = ea.__acroform__.getBitForPdf = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
						return ha(e, t - 1)
					},
					fa = ea.__acroform__.setBitForPdf = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
						return la(e, t - 1)
					},
					pa = ea.__acroform__.clearBitForPdf = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
						return ua(e, t - 1)
					},
					ma = ea.__acroform__.calculateCoordinates = function(e, t) {
						var n = t.internal.getHorizontalCoordinate,
							r = t.internal.getVerticalCoordinate,
							i = e[0],
							a = e[1],
							o = e[2],
							s = e[3],
							c = {};
						return c.lowerLeft_X = n(i) || 0, c.lowerLeft_Y = r(a + s) || 0, c.upperRight_X = n(i + o) || 0, c.upperRight_Y = r(a) || 0, [Number(ia(c.lowerLeft_X)), Number(ia(c.lowerLeft_Y)), Number(ia(c.upperRight_X)), Number(ia(c.upperRight_Y))]
					},
					ga = function(e) {
						if (e.appearanceStreamContent) return e.appearanceStreamContent;
						if (e.V || e.DV) {
							var t = [],
								n = e._V || e.DV,
								r = va(e, n),
								i = e.scope.internal.getFont(e.fontName, e.fontStyle).id;
							t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(e.scope.__private__.encodeColorString(e.color)), t.push("/" + i + " " + ia(r.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(r.text), t.push("ET"), t.push("Q"), t.push("EMC");
							var a = ca(e);
							return a.scope = e.scope, a.stream = t.join("\n"), a
						}
					},
					va = function(e, t) {
						var n = 0 === e.fontSize ? e.maxFontSize : e.fontSize,
							r = {
								text: "",
								fontSize: ""
							},
							i = (t = ")" == (t = "(" == t.substr(0, 1) ? t.substr(1) : t).substr(t.length - 1) ? t.substr(0, t.length - 1) : t).split(" ");
						i = e.multiline ? i.map((function(e) {
							return e.split("\n")
						})) : i.map((function(e) {
							return [e]
						}));
						var a = n,
							o = Ba.internal.getHeight(e) || 0;
						o = o < 0 ? -o : o;
						var s = Ba.internal.getWidth(e) || 0;
						s = s < 0 ? -s : s;
						var c = function(t, n, r) {
							if (t + 1 < i.length) {
								var a = n + " " + i[t + 1][0];
								return ya(a, e, r).width <= s - 4
							}
							return !1
						};
						a++;
						e: for (; a > 0;) {
							t = "", a--;
							var l, u, h = ya("3", e, a).height,
								d = e.multiline ? o - a : (o - h) / 2,
								f = d += 2,
								p = 0,
								m = 0,
								g = 0;
							if (a <= 0) {
								t = "(...) Tj\n", t += "% Width of Text: " + ya(t, e, a = 12).width + ", FieldWidth:" + s + "\n";
								break
							}
							for (var v = "", y = 0, b = 0; b < i.length; b++)
								if (i.hasOwnProperty(b)) {
									var w = !1;
									if (1 !== i[b].length && g !== i[b].length - 1) {
										if ((h + 2) * (y + 2) + 2 > o) continue e;
										v += i[b][g], w = !0, m = b, b--
									} else {
										v = " " == (v += i[b][g] + " ").substr(v.length - 1) ? v.substr(0, v.length - 1) : v;
										var x = parseInt(b),
											S = c(x, v, a),
											j = b >= i.length - 1;
										if (S && !j) {
											v += " ", g = 0;
											continue
										}
										if (S || j) {
											if (j) m = x;
											else if (e.multiline && (h + 2) * (y + 2) + 2 > o) continue e
										} else {
											if (!e.multiline) continue e;
											if ((h + 2) * (y + 2) + 2 > o) continue e;
											m = x
										}
									}
									for (var N = "", k = p; k <= m; k++) {
										var A = i[k];
										if (e.multiline) {
											if (k === m) {
												N += A[g] + " ", g = (g + 1) % A.length;
												continue
											}
											if (k === p) {
												N += A[A.length - 1] + " ";
												continue
											}
										}
										N += A[0] + " "
									}
									switch (N = " " == N.substr(N.length - 1) ? N.substr(0, N.length - 1) : N, u = ya(N, e, a).width, e.textAlign) {
										case "right":
											l = s - u - 2;
											break;
										case "center":
											l = (s - u) / 2;
											break;
										default:
											l = 2
									}
									t += ia(l) + " " + ia(f) + " Td\n", t += "(" + na(N) + ") Tj\n", t += -ia(l) + " 0 Td\n", f = -(a + 2), u = 0, p = w ? m : m + 1, y++, v = ""
								} break
						}
						return r.text = t, r.fontSize = a, r
					},
					ya = function(e, t, n) {
						var r = t.scope.internal.getFont(t.fontName, t.fontStyle),
							i = t.scope.getStringUnitWidth(e, {
								font: r,
								fontSize: parseFloat(n),
								charSpace: 0
							}) * parseFloat(n);
						return {
							height: t.scope.getStringUnitWidth("3", {
								font: r,
								fontSize: parseFloat(n),
								charSpace: 0
							}) * parseFloat(n) * 1.5,
							width: i
						}
					},
					ba = {
						fields: [],
						xForms: [],
						acroFormDictionaryRoot: null,
						printedOut: !1,
						internal: null,
						isInitialized: !1
					},
					wa = function(e, t) {
						var n = {
							type: "reference",
							object: e
						};
						void 0 === t.internal.getPageInfo(e.page).pageContext.annotations.find((function(e) {
							return e.type === n.type && e.object === n.object
						})) && t.internal.getPageInfo(e.page).pageContext.annotations.push(n)
					},
					xa = function(e, t) {
						if (t.scope = e, void 0 !== e.internal && (void 0 === e.internal.acroformPlugin || !1 === e.internal.acroformPlugin.isInitialized)) {
							if (La.FieldNum = 0, e.internal.acroformPlugin = JSON.parse(JSON.stringify(ba)), e.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
							ta = e.internal.scaleFactor, e.internal.acroformPlugin.acroFormDictionaryRoot = new Aa, e.internal.acroformPlugin.acroFormDictionaryRoot.scope = e, e.internal.acroformPlugin.acroFormDictionaryRoot._eventID = e.internal.events.subscribe("postPutResources", (function() {
								var t;
								(t = e).internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = !0
							})), e.internal.events.subscribe("buildDocument", (function() {
								! function(e) {
									e.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
									var t = e.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
									for (var n in t)
										if (t.hasOwnProperty(n)) {
											var r = t[n];
											r.objId = void 0, r.hasAnnotation && wa(r, e)
										}
								}(e)
							})), e.internal.events.subscribe("putCatalog", (function() {
								! function(e) {
									if (void 0 === e.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
									e.internal.write("/AcroForm " + e.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R")
								}(e)
							})), e.internal.events.subscribe("postPutPages", (function(t) {
								! function(e, t) {
									var n = !e;
									for (var r in e || (t.internal.newObjectDeferredBegin(t.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), t.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), e = e || t.internal.acroformPlugin.acroFormDictionaryRoot.Kids)
										if (e.hasOwnProperty(r)) {
											var i = e[r],
												a = [],
												o = i.Rect;
											if (i.Rect && (i.Rect = ma(i.Rect, t)), t.internal.newObjectDeferredBegin(i.objId, !0), i.DA = Ba.createDefaultAppearanceStream(i), "object" === (0, yi.Z)(i) && "function" == typeof i.getKeyValueListForStream && (a = i.getKeyValueListForStream()), i.Rect = o, i.hasAppearanceStream && !i.appearanceStreamContent) {
												var s = ga(i);
												a.push({
													key: "AP",
													value: "<</N " + s + ">>"
												}), t.internal.acroformPlugin.xForms.push(s)
											}
											if (i.appearanceStreamContent) {
												var c = "";
												for (var l in i.appearanceStreamContent)
													if (i.appearanceStreamContent.hasOwnProperty(l)) {
														var u = i.appearanceStreamContent[l];
														if (c += "/" + l + " ", c += "<<", Object.keys(u).length >= 1 || Array.isArray(u)) {
															for (var r in u)
																if (u.hasOwnProperty(r)) {
																	var h = u[r];
																	"function" == typeof h && (h = h.call(t, i)), c += "/" + r + " " + h + " ", t.internal.acroformPlugin.xForms.indexOf(h) >= 0 || t.internal.acroformPlugin.xForms.push(h)
																}
														} else "function" == typeof(h = u) && (h = h.call(t, i)), c += "/" + r + " " + h, t.internal.acroformPlugin.xForms.indexOf(h) >= 0 || t.internal.acroformPlugin.xForms.push(h);
														c += ">>"
													} a.push({
													key: "AP",
													value: "<<\n" + c + ">>"
												})
											}
											t.internal.putStream({
												additionalKeyValues: a,
												objectId: i.objId
											}), t.internal.out("endobj")
										} n && function(e, t) {
										for (var n in e)
											if (e.hasOwnProperty(n)) {
												var r = n,
													i = e[n];
												t.internal.newObjectDeferredBegin(i.objId, !0), "object" === (0, yi.Z)(i) && "function" == typeof i.putStream && i.putStream(), delete e[r]
											}
									}(t.internal.acroformPlugin.xForms, t)
								}(t, e)
							})), e.internal.acroformPlugin.isInitialized = !0
						}
					},
					Sa = ea.__acroform__.arrayToPdfArray = function(e, t, n) {
						var r = function(e) {
							return e
						};
						if (Array.isArray(e)) {
							for (var i = "[", a = 0; a < e.length; a++) switch (0 !== a && (i += " "), (0, yi.Z)(e[a])) {
								case "boolean":
								case "number":
								case "object":
									i += e[a].toString();
									break;
								case "string":
									"/" !== e[a].substr(0, 1) ? (void 0 !== t && n && (r = n.internal.getEncryptor(t)), i += "(" + na(r(e[a].toString())) + ")") : i += e[a].toString()
							}
							return i + "]"
						}
						throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
					},
					ja = function(e, t, n) {
						var r = function(e) {
							return e
						};
						return void 0 !== t && n && (r = n.internal.getEncryptor(t)), (e = e || "").toString(), "(" + na(r(e)) + ")"
					},
					Na = function() {
						this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
							get: function() {
								if (void 0 === this._objId) {
									if (void 0 === this.scope) return;
									this._objId = this.scope.internal.newObjectDeferred()
								}
								return this._objId
							},
							set: function(e) {
								this._objId = e
							}
						}), Object.defineProperty(this, "scope", {
							value: this._scope,
							writable: !0
						})
					};
				Na.prototype.toString = function() {
					return this.objId + " 0 R"
				}, Na.prototype.putStream = function() {
					var e = this.getKeyValueListForStream();
					this.scope.internal.putStream({
						data: this.stream,
						additionalKeyValues: e,
						objectId: this.objId
					}), this.scope.internal.out("endobj")
				}, Na.prototype.getKeyValueListForStream = function() {
					var e = [],
						t = Object.getOwnPropertyNames(this).filter((function(e) {
							return "content" != e && "appearanceStreamContent" != e && "scope" != e && "objId" != e && "_" != e.substring(0, 1)
						}));
					for (var n in t)
						if (!1 === Object.getOwnPropertyDescriptor(this, t[n]).configurable) {
							var r = t[n],
								i = this[r];
							i && (Array.isArray(i) ? e.push({
								key: r,
								value: Sa(i, this.objId, this.scope)
							}) : i instanceof Na ? (i.scope = this.scope, e.push({
								key: r,
								value: i.objId + " 0 R"
							})) : "function" != typeof i && e.push({
								key: r,
								value: i
							}))
						} return e
				};
				var ka = function() {
					Na.call(this), Object.defineProperty(this, "Type", {
						value: "/XObject",
						configurable: !1,
						writable: !0
					}), Object.defineProperty(this, "Subtype", {
						value: "/Form",
						configurable: !1,
						writable: !0
					}), Object.defineProperty(this, "FormType", {
						value: 1,
						configurable: !1,
						writable: !0
					});
					var e, t = [];
					Object.defineProperty(this, "BBox", {
						configurable: !1,
						get: function() {
							return t
						},
						set: function(e) {
							t = e
						}
					}), Object.defineProperty(this, "Resources", {
						value: "2 0 R",
						configurable: !1,
						writable: !0
					}), Object.defineProperty(this, "stream", {
						enumerable: !1,
						configurable: !0,
						set: function(t) {
							e = t.trim()
						},
						get: function() {
							return e || null
						}
					})
				};
				oa(ka, Na);
				var Aa = function() {
					Na.call(this);
					var e, t = [];
					Object.defineProperty(this, "Kids", {
						enumerable: !1,
						configurable: !0,
						get: function() {
							return t.length > 0 ? t : void 0
						}
					}), Object.defineProperty(this, "Fields", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return t
						}
					}), Object.defineProperty(this, "DA", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (e) {
								var t = function(e) {
									return e
								};
								return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + na(t(e)) + ")"
							}
						},
						set: function(t) {
							e = t
						}
					})
				};
				oa(Aa, Na);
				var La = function e() {
					Na.call(this);
					var t = 4;
					Object.defineProperty(this, "F", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return t
						},
						set: function(e) {
							if (isNaN(e)) throw new Error('Invalid value "' + e + '" for attribute F supplied.');
							t = e
						}
					}), Object.defineProperty(this, "showWhenPrinted", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(t, 3))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.F = fa(t, 3) : this.F = pa(t, 3)
						}
					});
					var n = 0;
					Object.defineProperty(this, "Ff", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return n
						},
						set: function(e) {
							if (isNaN(e)) throw new Error('Invalid value "' + e + '" for attribute Ff supplied.');
							n = e
						}
					});
					var r = [];
					Object.defineProperty(this, "Rect", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (0 !== r.length) return r
						},
						set: function(e) {
							r = void 0 !== e ? e : []
						}
					}), Object.defineProperty(this, "x", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return !r || isNaN(r[0]) ? 0 : r[0]
						},
						set: function(e) {
							r[0] = e
						}
					}), Object.defineProperty(this, "y", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return !r || isNaN(r[1]) ? 0 : r[1]
						},
						set: function(e) {
							r[1] = e
						}
					}), Object.defineProperty(this, "width", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return !r || isNaN(r[2]) ? 0 : r[2]
						},
						set: function(e) {
							r[2] = e
						}
					}), Object.defineProperty(this, "height", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return !r || isNaN(r[3]) ? 0 : r[3]
						},
						set: function(e) {
							r[3] = e
						}
					});
					var i = "";
					Object.defineProperty(this, "FT", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return i
						},
						set: function(e) {
							switch (e) {
								case "/Btn":
								case "/Tx":
								case "/Ch":
								case "/Sig":
									i = e;
									break;
								default:
									throw new Error('Invalid value "' + e + '" for attribute FT supplied.')
							}
						}
					});
					var a = null;
					Object.defineProperty(this, "T", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							if (!a || a.length < 1) {
								if (this instanceof Ea) return;
								a = "FieldObject" + e.FieldNum++
							}
							var t = function(e) {
								return e
							};
							return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + na(t(a)) + ")"
						},
						set: function(e) {
							a = e.toString()
						}
					}), Object.defineProperty(this, "fieldName", {
						configurable: !0,
						enumerable: !0,
						get: function() {
							return a
						},
						set: function(e) {
							a = e
						}
					});
					var o = "helvetica";
					Object.defineProperty(this, "fontName", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return o
						},
						set: function(e) {
							o = e
						}
					});
					var s = "normal";
					Object.defineProperty(this, "fontStyle", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return s
						},
						set: function(e) {
							s = e
						}
					});
					var c = 0;
					Object.defineProperty(this, "fontSize", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return c
						},
						set: function(e) {
							c = e
						}
					});
					var l = void 0;
					Object.defineProperty(this, "maxFontSize", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return void 0 === l ? 50 / ta : l
						},
						set: function(e) {
							l = e
						}
					});
					var u = "black";
					Object.defineProperty(this, "color", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return u
						},
						set: function(e) {
							u = e
						}
					});
					var h = "/F1 0 Tf 0 g";
					Object.defineProperty(this, "DA", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							if (!(!h || this instanceof Ea || this instanceof Ra)) return ja(h, this.objId, this.scope)
						},
						set: function(e) {
							e = e.toString(), h = e
						}
					});
					var d = null;
					Object.defineProperty(this, "DV", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (d) return this instanceof Oa == 0 ? ja(d, this.objId, this.scope) : d
						},
						set: function(e) {
							e = e.toString(), d = this instanceof Oa == 0 ? "(" === e.substr(0, 1) ? ra(e.substr(1, e.length - 2)) : ra(e) : e
						}
					}), Object.defineProperty(this, "defaultValue", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return this instanceof Oa == 1 ? ra(d.substr(1, d.length - 1)) : d
						},
						set: function(e) {
							e = e.toString(), d = this instanceof Oa == 1 ? "/" + e : e
						}
					});
					var f = null;
					Object.defineProperty(this, "_V", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (f) return f
						},
						set: function(e) {
							this.V = e
						}
					}), Object.defineProperty(this, "V", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							if (f) return this instanceof Oa == 0 ? ja(f, this.objId, this.scope) : f
						},
						set: function(e) {
							e = e.toString(), f = this instanceof Oa == 0 ? "(" === e.substr(0, 1) ? ra(e.substr(1, e.length - 2)) : ra(e) : e
						}
					}), Object.defineProperty(this, "value", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return this instanceof Oa == 1 ? ra(f.substr(1, f.length - 1)) : f
						},
						set: function(e) {
							e = e.toString(), f = this instanceof Oa == 1 ? "/" + e : e
						}
					}), Object.defineProperty(this, "hasAnnotation", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return this.Rect
						}
					}), Object.defineProperty(this, "Type", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return this.hasAnnotation ? "/Annot" : null
						}
					}), Object.defineProperty(this, "Subtype", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return this.hasAnnotation ? "/Widget" : null
						}
					});
					var p, m = !1;
					Object.defineProperty(this, "hasAppearanceStream", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return m
						},
						set: function(e) {
							e = Boolean(e), m = e
						}
					}), Object.defineProperty(this, "page", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							if (p) return p
						},
						set: function(e) {
							p = e
						}
					}), Object.defineProperty(this, "readOnly", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 1))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 1) : this.Ff = pa(this.Ff, 1)
						}
					}), Object.defineProperty(this, "required", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 2))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 2) : this.Ff = pa(this.Ff, 2)
						}
					}), Object.defineProperty(this, "noExport", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 3))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 3) : this.Ff = pa(this.Ff, 3)
						}
					});
					var g = null;
					Object.defineProperty(this, "Q", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							if (null !== g) return g
						},
						set: function(e) {
							if (-1 === [0, 1, 2].indexOf(e)) throw new Error('Invalid value "' + e + '" for attribute Q supplied.');
							g = e
						}
					}), Object.defineProperty(this, "textAlign", {
						get: function() {
							var e;
							switch (g) {
								case 0:
								default:
									e = "left";
									break;
								case 1:
									e = "center";
									break;
								case 2:
									e = "right"
							}
							return e
						},
						configurable: !0,
						enumerable: !0,
						set: function(e) {
							switch (e) {
								case "right":
								case 2:
									g = 2;
									break;
								case "center":
								case 1:
									g = 1;
									break;
								default:
									g = 0
							}
						}
					})
				};
				oa(La, Na);
				var Pa = function() {
					La.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
					var e = 0;
					Object.defineProperty(this, "TI", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							e = t
						}
					}), Object.defineProperty(this, "topIndex", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return e
						},
						set: function(t) {
							e = t
						}
					});
					var t = [];
					Object.defineProperty(this, "Opt", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return Sa(t, this.objId, this.scope)
						},
						set: function(e) {
							var n, r;
							r = [], "string" == typeof(n = e) && (r = function(e, t, n) {
								n || (n = 1);
								for (var r, i = []; r = t.exec(e);) i.push(r[n]);
								return i
							}(n, /\((.*?)\)/g)), t = r
						}
					}), this.getOptions = function() {
						return t
					}, this.setOptions = function(e) {
						t = e, this.sort && t.sort()
					}, this.addOption = function(e) {
						e = (e = e || "").toString(), t.push(e), this.sort && t.sort()
					}, this.removeOption = function(e, n) {
						for (n = n || !1, e = (e = e || "").toString(); - 1 !== t.indexOf(e) && (t.splice(t.indexOf(e), 1), !1 !== n););
					}, Object.defineProperty(this, "combo", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 18))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 18) : this.Ff = pa(this.Ff, 18)
						}
					}), Object.defineProperty(this, "edit", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 19))
						},
						set: function(e) {
							!0 === this.combo && (!0 === Boolean(e) ? this.Ff = fa(this.Ff, 19) : this.Ff = pa(this.Ff, 19))
						}
					}), Object.defineProperty(this, "sort", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 20))
						},
						set: function(e) {
							!0 === Boolean(e) ? (this.Ff = fa(this.Ff, 20), t.sort()) : this.Ff = pa(this.Ff, 20)
						}
					}), Object.defineProperty(this, "multiSelect", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 22))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 22) : this.Ff = pa(this.Ff, 22)
						}
					}), Object.defineProperty(this, "doNotSpellCheck", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 23))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 23) : this.Ff = pa(this.Ff, 23)
						}
					}), Object.defineProperty(this, "commitOnSelChange", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 27))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 27) : this.Ff = pa(this.Ff, 27)
						}
					}), this.hasAppearanceStream = !1
				};
				oa(Pa, La);
				var Ia = function() {
					Pa.call(this), this.fontName = "helvetica", this.combo = !1
				};
				oa(Ia, Pa);
				var Ca = function() {
					Ia.call(this), this.combo = !0
				};
				oa(Ca, Ia);
				var _a = function() {
					Ca.call(this), this.edit = !0
				};
				oa(_a, Ca);
				var Oa = function() {
					La.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 15))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 15) : this.Ff = pa(this.Ff, 15)
						}
					}), Object.defineProperty(this, "radio", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 16))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 16) : this.Ff = pa(this.Ff, 16)
						}
					}), Object.defineProperty(this, "pushButton", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 17))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 17) : this.Ff = pa(this.Ff, 17)
						}
					}), Object.defineProperty(this, "radioIsUnison", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 26))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 26) : this.Ff = pa(this.Ff, 26)
						}
					});
					var e, t = {};
					Object.defineProperty(this, "MK", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							var e = function(e) {
								return e
							};
							if (this.scope && (e = this.scope.internal.getEncryptor(this.objId)), 0 !== Object.keys(t).length) {
								var n, r = [];
								for (n in r.push("<<"), t) r.push("/" + n + " (" + na(e(t[n])) + ")");
								return r.push(">>"), r.join("\n")
							}
						},
						set: function(e) {
							"object" === (0, yi.Z)(e) && (t = e)
						}
					}), Object.defineProperty(this, "caption", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return t.CA || ""
						},
						set: function(e) {
							"string" == typeof e && (t.CA = e)
						}
					}), Object.defineProperty(this, "AS", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							e = t
						}
					}), Object.defineProperty(this, "appearanceState", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return e.substr(1, e.length - 1)
						},
						set: function(t) {
							e = "/" + t
						}
					})
				};
				oa(Oa, La);
				var Ta = function() {
					Oa.call(this), this.pushButton = !0
				};
				oa(Ta, Oa);
				var Da = function() {
					Oa.call(this), this.radio = !0, this.pushButton = !1;
					var e = [];
					Object.defineProperty(this, "Kids", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							e = void 0 !== t ? t : []
						}
					})
				};
				oa(Da, Oa);
				var Ea = function() {
					var e, t;
					La.call(this), Object.defineProperty(this, "Parent", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							e = t
						}
					}), Object.defineProperty(this, "optionName", {
						enumerable: !1,
						configurable: !0,
						get: function() {
							return t
						},
						set: function(e) {
							t = e
						}
					});
					var n, r = {};
					Object.defineProperty(this, "MK", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							var e = function(e) {
								return e
							};
							this.scope && (e = this.scope.internal.getEncryptor(this.objId));
							var t, n = [];
							for (t in n.push("<<"), r) n.push("/" + t + " (" + na(e(r[t])) + ")");
							return n.push(">>"), n.join("\n")
						},
						set: function(e) {
							"object" === (0, yi.Z)(e) && (r = e)
						}
					}), Object.defineProperty(this, "caption", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return r.CA || ""
						},
						set: function(e) {
							"string" == typeof e && (r.CA = e)
						}
					}), Object.defineProperty(this, "AS", {
						enumerable: !1,
						configurable: !1,
						get: function() {
							return n
						},
						set: function(e) {
							n = e
						}
					}), Object.defineProperty(this, "appearanceState", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return n.substr(1, n.length - 1)
						},
						set: function(e) {
							n = "/" + e
						}
					}), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Ba.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName)
				};
				oa(Ea, La), Da.prototype.setAppearance = function(e) {
					if (!("createAppearanceStream" in e) || !("getCA" in e)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
					for (var t in this.Kids)
						if (this.Kids.hasOwnProperty(t)) {
							var n = this.Kids[t];
							n.appearanceStreamContent = e.createAppearanceStream(n.optionName), n.caption = e.getCA()
						}
				}, Da.prototype.createOption = function(e) {
					var t = new Ea;
					return t.Parent = this, t.optionName = e, this.Kids.push(t), Ua.call(this.scope, t), t
				};
				var Fa = function() {
					Oa.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Ba.CheckBox.createAppearanceStream()
				};
				oa(Fa, Oa);
				var Ra = function() {
					La.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 13))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 13) : this.Ff = pa(this.Ff, 13)
						}
					}), Object.defineProperty(this, "fileSelect", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 21))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 21) : this.Ff = pa(this.Ff, 21)
						}
					}), Object.defineProperty(this, "doNotSpellCheck", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 23))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 23) : this.Ff = pa(this.Ff, 23)
						}
					}), Object.defineProperty(this, "doNotScroll", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 24))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 24) : this.Ff = pa(this.Ff, 24)
						}
					}), Object.defineProperty(this, "comb", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 25))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 25) : this.Ff = pa(this.Ff, 25)
						}
					}), Object.defineProperty(this, "richText", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 26))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 26) : this.Ff = pa(this.Ff, 26)
						}
					});
					var e = null;
					Object.defineProperty(this, "MaxLen", {
						enumerable: !0,
						configurable: !1,
						get: function() {
							return e
						},
						set: function(t) {
							e = t
						}
					}), Object.defineProperty(this, "maxLength", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return e
						},
						set: function(t) {
							Number.isInteger(t) && (e = t)
						}
					}), Object.defineProperty(this, "hasAppearanceStream", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return this.V || this.DV
						}
					})
				};
				oa(Ra, La);
				var Ma = function() {
					Ra.call(this), Object.defineProperty(this, "password", {
						enumerable: !0,
						configurable: !0,
						get: function() {
							return Boolean(da(this.Ff, 14))
						},
						set: function(e) {
							!0 === Boolean(e) ? this.Ff = fa(this.Ff, 14) : this.Ff = pa(this.Ff, 14)
						}
					}), this.password = !0
				};
				oa(Ma, Ra);
				var Ba = {
					CheckBox: {
						createAppearanceStream: function() {
							return {
								N: {
									On: Ba.CheckBox.YesNormal
								},
								D: {
									On: Ba.CheckBox.YesPushDown,
									Off: Ba.CheckBox.OffPushDown
								}
							}
						},
						YesPushDown: function(e) {
							var t = ca(e);
							t.scope = e.scope;
							var n = [],
								r = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
								i = e.scope.__private__.encodeColorString(e.color),
								a = va(e, e.caption);
							return n.push("0.749023 g"), n.push("0 0 " + ia(Ba.internal.getWidth(e)) + " " + ia(Ba.internal.getHeight(e)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + r + " " + ia(a.fontSize) + " Tf " + i), n.push("BT"), n.push(a.text), n.push("ET"), n.push("Q"), n.push("EMC"), t.stream = n.join("\n"), t
						},
						YesNormal: function(e) {
							var t = ca(e);
							t.scope = e.scope;
							var n = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
								r = e.scope.__private__.encodeColorString(e.color),
								i = [],
								a = Ba.internal.getHeight(e),
								o = Ba.internal.getWidth(e),
								s = va(e, e.caption);
							return i.push("1 g"), i.push("0 0 " + ia(o) + " " + ia(a) + " re"), i.push("f"), i.push("q"), i.push("0 0 1 rg"), i.push("0 0 " + ia(o - 1) + " " + ia(a - 1) + " re"), i.push("W"), i.push("n"), i.push("0 g"), i.push("BT"), i.push("/" + n + " " + ia(s.fontSize) + " Tf " + r), i.push(s.text), i.push("ET"), i.push("Q"), t.stream = i.join("\n"), t
						},
						OffPushDown: function(e) {
							var t = ca(e);
							t.scope = e.scope;
							var n = [];
							return n.push("0.749023 g"), n.push("0 0 " + ia(Ba.internal.getWidth(e)) + " " + ia(Ba.internal.getHeight(e)) + " re"), n.push("f"), t.stream = n.join("\n"), t
						}
					},
					RadioButton: {
						Circle: {
							createAppearanceStream: function(e) {
								var t = {
									D: {
										Off: Ba.RadioButton.Circle.OffPushDown
									},
									N: {}
								};
								return t.N[e] = Ba.RadioButton.Circle.YesNormal, t.D[e] = Ba.RadioButton.Circle.YesPushDown, t
							},
							getCA: function() {
								return "l"
							},
							YesNormal: function(e) {
								var t = ca(e);
								t.scope = e.scope;
								var n = [],
									r = Ba.internal.getWidth(e) <= Ba.internal.getHeight(e) ? Ba.internal.getWidth(e) / 4 : Ba.internal.getHeight(e) / 4;
								r = Number((.9 * r).toFixed(5));
								var i = Ba.internal.Bezier_C,
									a = Number((r * i).toFixed(5));
								return n.push("q"), n.push("1 0 0 1 " + aa(Ba.internal.getWidth(e) / 2) + " " + aa(Ba.internal.getHeight(e) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + a + " " + a + " " + r + " 0 " + r + " c"), n.push("-" + a + " " + r + " -" + r + " " + a + " -" + r + " 0 c"), n.push("-" + r + " -" + a + " -" + a + " -" + r + " 0 -" + r + " c"), n.push(a + " -" + r + " " + r + " -" + a + " " + r + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join("\n"), t
							},
							YesPushDown: function(e) {
								var t = ca(e);
								t.scope = e.scope;
								var n = [],
									r = Ba.internal.getWidth(e) <= Ba.internal.getHeight(e) ? Ba.internal.getWidth(e) / 4 : Ba.internal.getHeight(e) / 4;
								r = Number((.9 * r).toFixed(5));
								var i = Number((2 * r).toFixed(5)),
									a = Number((i * Ba.internal.Bezier_C).toFixed(5)),
									o = Number((r * Ba.internal.Bezier_C).toFixed(5));
								return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + aa(Ba.internal.getWidth(e) / 2) + " " + aa(Ba.internal.getHeight(e) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), n.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), n.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), n.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + aa(Ba.internal.getWidth(e) / 2) + " " + aa(Ba.internal.getHeight(e) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + o + " " + o + " " + r + " 0 " + r + " c"), n.push("-" + o + " " + r + " -" + r + " " + o + " -" + r + " 0 c"), n.push("-" + r + " -" + o + " -" + o + " -" + r + " 0 -" + r + " c"), n.push(o + " -" + r + " " + r + " -" + o + " " + r + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join("\n"), t
							},
							OffPushDown: function(e) {
								var t = ca(e);
								t.scope = e.scope;
								var n = [],
									r = Ba.internal.getWidth(e) <= Ba.internal.getHeight(e) ? Ba.internal.getWidth(e) / 4 : Ba.internal.getHeight(e) / 4;
								r = Number((.9 * r).toFixed(5));
								var i = Number((2 * r).toFixed(5)),
									a = Number((i * Ba.internal.Bezier_C).toFixed(5));
								return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + aa(Ba.internal.getWidth(e) / 2) + " " + aa(Ba.internal.getHeight(e) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), n.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), n.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), n.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join("\n"), t
							}
						},
						Cross: {
							createAppearanceStream: function(e) {
								var t = {
									D: {
										Off: Ba.RadioButton.Cross.OffPushDown
									},
									N: {}
								};
								return t.N[e] = Ba.RadioButton.Cross.YesNormal, t.D[e] = Ba.RadioButton.Cross.YesPushDown, t
							},
							getCA: function() {
								return "8"
							},
							YesNormal: function(e) {
								var t = ca(e);
								t.scope = e.scope;
								var n = [],
									r = Ba.internal.calculateCross(e);
								return n.push("q"), n.push("1 1 " + ia(Ba.internal.getWidth(e) - 2) + " " + ia(Ba.internal.getHeight(e) - 2) + " re"), n.push("W"), n.push("n"), n.push(ia(r.x1.x) + " " + ia(r.x1.y) + " m"), n.push(ia(r.x2.x) + " " + ia(r.x2.y) + " l"), n.push(ia(r.x4.x) + " " + ia(r.x4.y) + " m"), n.push(ia(r.x3.x) + " " + ia(r.x3.y) + " l"), n.push("s"), n.push("Q"), t.stream = n.join("\n"), t
							},
							YesPushDown: function(e) {
								var t = ca(e);
								t.scope = e.scope;
								var n = Ba.internal.calculateCross(e),
									r = [];
								return r.push("0.749023 g"), r.push("0 0 " + ia(Ba.internal.getWidth(e)) + " " + ia(Ba.internal.getHeight(e)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + ia(Ba.internal.getWidth(e) - 2) + " " + ia(Ba.internal.getHeight(e) - 2) + " re"), r.push("W"), r.push("n"), r.push(ia(n.x1.x) + " " + ia(n.x1.y) + " m"), r.push(ia(n.x2.x) + " " + ia(n.x2.y) + " l"), r.push(ia(n.x4.x) + " " + ia(n.x4.y) + " m"), r.push(ia(n.x3.x) + " " + ia(n.x3.y) + " l"), r.push("s"), r.push("Q"), t.stream = r.join("\n"), t
							},
							OffPushDown: function(e) {
								var t = ca(e);
								t.scope = e.scope;
								var n = [];
								return n.push("0.749023 g"), n.push("0 0 " + ia(Ba.internal.getWidth(e)) + " " + ia(Ba.internal.getHeight(e)) + " re"), n.push("f"), t.stream = n.join("\n"), t
							}
						}
					},
					createDefaultAppearanceStream: function(e) {
						var t = e.scope.internal.getFont(e.fontName, e.fontStyle).id,
							n = e.scope.__private__.encodeColorString(e.color);
						return "/" + t + " " + e.fontSize + " Tf " + n
					}
				};
				Ba.internal = {
					Bezier_C: .551915024494,
					calculateCross: function(e) {
						var t = Ba.internal.getWidth(e),
							n = Ba.internal.getHeight(e),
							r = Math.min(t, n);
						return {
							x1: {
								x: (t - r) / 2,
								y: (n - r) / 2 + r
							},
							x2: {
								x: (t - r) / 2 + r,
								y: (n - r) / 2
							},
							x3: {
								x: (t - r) / 2,
								y: (n - r) / 2
							},
							x4: {
								x: (t - r) / 2 + r,
								y: (n - r) / 2 + r
							}
						}
					}
				}, Ba.internal.getWidth = function(e) {
					var t = 0;
					return "object" === (0, yi.Z)(e) && (t = sa(e.Rect[2])), t
				}, Ba.internal.getHeight = function(e) {
					var t = 0;
					return "object" === (0, yi.Z)(e) && (t = sa(e.Rect[3])), t
				};
				var Ua = ea.addField = function(e) {
					if (xa(this, e), !(e instanceof La)) throw new Error("Invalid argument passed to jsPDF.addField.");
					var t;
					return (t = e).scope.internal.acroformPlugin.printedOut && (t.scope.internal.acroformPlugin.printedOut = !1, t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t), e.page = e.scope.internal.getCurrentPageInfo().pageNumber, this
				};
				ea.AcroFormChoiceField = Pa, ea.AcroFormListBox = Ia, ea.AcroFormComboBox = Ca, ea.AcroFormEditBox = _a, ea.AcroFormButton = Oa, ea.AcroFormPushButton = Ta, ea.AcroFormRadioButton = Da, ea.AcroFormCheckBox = Fa, ea.AcroFormTextField = Ra, ea.AcroFormPasswordField = Ma, ea.AcroFormAppearance = Ba, ea.AcroForm = {
					ChoiceField: Pa,
					ListBox: Ia,
					ComboBox: Ca,
					EditBox: _a,
					Button: Oa,
					PushButton: Ta,
					RadioButton: Da,
					CheckBox: Fa,
					TextField: Ra,
					PasswordField: Ma,
					Appearance: Ba
				}, Qi.AcroForm = {
					ChoiceField: Pa,
					ListBox: Ia,
					ComboBox: Ca,
					EditBox: _a,
					Button: Oa,
					PushButton: Ta,
					RadioButton: Da,
					CheckBox: Fa,
					TextField: Ra,
					PasswordField: Ma,
					Appearance: Ba
				};
				var qa, za;
				Qi.AcroForm;

				function Za(e) {
					return e.reduce((function(e, t, n) {
						return e[t] = n, e
					}), {})
				}! function(e) {
					e.__addimage__ = {};
					var t = "UNKNOWN",
						n = {
							PNG: [
								[137, 80, 78, 71]
							],
							TIFF: [
								[77, 77, 0, 42],
								[73, 73, 42, 0]
							],
							JPEG: [
								[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
								[255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
								[255, 216, 255, 219],
								[255, 216, 255, 238]
							],
							JPEG2000: [
								[0, 0, 0, 12, 106, 80, 32, 32]
							],
							GIF87a: [
								[71, 73, 70, 56, 55, 97]
							],
							GIF89a: [
								[71, 73, 70, 56, 57, 97]
							],
							WEBP: [
								[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]
							],
							BMP: [
								[66, 77],
								[66, 65],
								[67, 73],
								[67, 80],
								[73, 67],
								[80, 84]
							]
						},
						r = e.__addimage__.getImageFileTypeByImageData = function(e, r) {
							var i, a, o, s, c, l = t;
							if ("RGBA" === (r = r || t) || void 0 !== e.data && e.data instanceof Uint8ClampedArray && "height" in e && "width" in e) return "RGBA";
							if (S(e))
								for (c in n)
									for (o = n[c], i = 0; i < o.length; i += 1) {
										for (s = !0, a = 0; a < o[i].length; a += 1)
											if (void 0 !== o[i][a] && o[i][a] !== e[a]) {
												s = !1;
												break
											} if (!0 === s) {
											l = c;
											break
										}
									} else
										for (c in n)
											for (o = n[c], i = 0; i < o.length; i += 1) {
												for (s = !0, a = 0; a < o[i].length; a += 1)
													if (void 0 !== o[i][a] && o[i][a] !== e.charCodeAt(a)) {
														s = !1;
														break
													} if (!0 === s) {
													l = c;
													break
												}
											}
							return l === t && r !== t && (l = r), l
						},
						i = function e(t) {
							for (var n = this.internal.write, r = this.internal.putStream, i = (0, this.internal.getFilters)(); - 1 !== i.indexOf("FlateEncode");) i.splice(i.indexOf("FlateEncode"), 1);
							t.objectId = this.internal.newObject();
							var a = [];
							if (a.push({
									key: "Type",
									value: "/XObject"
								}), a.push({
									key: "Subtype",
									value: "/Image"
								}), a.push({
									key: "Width",
									value: t.width
								}), a.push({
									key: "Height",
									value: t.height
								}), t.colorSpace === g.INDEXED ? a.push({
									key: "ColorSpace",
									value: "[/Indexed /DeviceRGB " + (t.palette.length / 3 - 1) + " " + ("sMask" in t && void 0 !== t.sMask ? t.objectId + 2 : t.objectId + 1) + " 0 R]"
								}) : (a.push({
									key: "ColorSpace",
									value: "/" + t.colorSpace
								}), t.colorSpace === g.DEVICE_CMYK && a.push({
									key: "Decode",
									value: "[1 0 1 0 1 0 1 0]"
								})), a.push({
									key: "BitsPerComponent",
									value: t.bitsPerComponent
								}), "decodeParameters" in t && void 0 !== t.decodeParameters && a.push({
									key: "DecodeParms",
									value: "<<" + t.decodeParameters + ">>"
								}), "transparency" in t && Array.isArray(t.transparency)) {
								for (var o = "", s = 0, c = t.transparency.length; s < c; s++) o += t.transparency[s] + " " + t.transparency[s] + " ";
								a.push({
									key: "Mask",
									value: "[" + o + "]"
								})
							}
							void 0 !== t.sMask && a.push({
								key: "SMask",
								value: t.objectId + 1 + " 0 R"
							});
							var l = void 0 !== t.filter ? ["/" + t.filter] : void 0;
							if (r({
									data: t.data,
									additionalKeyValues: a,
									alreadyAppliedFilters: l,
									objectId: t.objectId
								}), n("endobj"), "sMask" in t && void 0 !== t.sMask) {
								var u = "/Predictor " + t.predictor + " /Colors 1 /BitsPerComponent " + t.bitsPerComponent + " /Columns " + t.width,
									h = {
										width: t.width,
										height: t.height,
										colorSpace: "DeviceGray",
										bitsPerComponent: t.bitsPerComponent,
										decodeParameters: u,
										data: t.sMask
									};
								"filter" in t && (h.filter = t.filter), e.call(this, h)
							}
							if (t.colorSpace === g.INDEXED) {
								var d = this.internal.newObject();
								r({
									data: N(new Uint8Array(t.palette)),
									objectId: d
								}), n("endobj")
							}
						},
						a = function() {
							var e = this.internal.collections.addImage_images;
							for (var t in e) i.call(this, e[t])
						},
						o = function() {
							var e, t = this.internal.collections.addImage_images,
								n = this.internal.write;
							for (var r in t) n("/I" + (e = t[r]).index, e.objectId, "0", "R")
						},
						s = function() {
							this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", a), this.internal.events.subscribe("putXobjectDict", o))
						},
						c = function() {
							var e = this.internal.collections.addImage_images;
							return s.call(this), e
						},
						l = function() {
							return Object.keys(this.internal.collections.addImage_images).length
						},
						u = function(t) {
							return "function" == typeof e["process" + t.toUpperCase()]
						},
						h = function(e) {
							return "object" === (0, yi.Z)(e) && 1 === e.nodeType
						},
						d = function(t, n) {
							if ("IMG" === t.nodeName && t.hasAttribute("src")) {
								var r = "" + t.getAttribute("src");
								if (0 === r.indexOf("data:image/")) return Ai(unescape(r).split("base64,").pop());
								var i = e.loadFile(r, !0);
								if (void 0 !== i) return i
							}
							if ("CANVAS" === t.nodeName) {
								if (0 === t.width || 0 === t.height) throw new Error("Given canvas must have data. Canvas width: " + t.width + ", height: " + t.height);
								var a;
								switch (n) {
									case "PNG":
										a = "image/png";
										break;
									case "WEBP":
										a = "image/webp";
										break;
									default:
										a = "image/jpeg"
								}
								return Ai(t.toDataURL(a, 1).split("base64,").pop())
							}
						},
						f = function(e) {
							var t = this.internal.collections.addImage_images;
							if (t)
								for (var n in t)
									if (e === t[n].alias) return t[n]
						},
						p = function(e, t, n) {
							return e || t || (e = -96, t = -96), e < 0 && (e = -1 * n.width * 72 / e / this.internal.scaleFactor), t < 0 && (t = -1 * n.height * 72 / t / this.internal.scaleFactor), 0 === e && (e = t * n.width / n.height), 0 === t && (t = e * n.height / n.width), [e, t]
						},
						m = function(e, t, n, r, i, a) {
							var o = p.call(this, n, r, i),
								s = this.internal.getCoordinateString,
								l = this.internal.getVerticalCoordinateString,
								u = c.call(this);
							if (n = o[0], r = o[1], u[i.index] = i, a) {
								a *= Math.PI / 180;
								var h = Math.cos(a),
									d = Math.sin(a),
									f = function(e) {
										return e.toFixed(4)
									},
									m = [f(h), f(d), f(-1 * d), f(h), 0, 0, "cm"]
							}
							this.internal.write("q"), a ? (this.internal.write([1, "0", "0", 1, s(e), l(t + r), "cm"].join(" ")), this.internal.write(m.join(" ")), this.internal.write([s(n), "0", "0", s(r), "0", "0", "cm"].join(" "))) : this.internal.write([s(n), "0", "0", s(r), s(e), l(t + r), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + i.index + " Do"), this.internal.write("Q")
						},
						g = e.color_spaces = {
							DEVICE_RGB: "DeviceRGB",
							DEVICE_GRAY: "DeviceGray",
							DEVICE_CMYK: "DeviceCMYK",
							CAL_GREY: "CalGray",
							CAL_RGB: "CalRGB",
							LAB: "Lab",
							ICC_BASED: "ICCBased",
							INDEXED: "Indexed",
							PATTERN: "Pattern",
							SEPARATION: "Separation",
							DEVICE_N: "DeviceN"
						};
					e.decode = {
						DCT_DECODE: "DCTDecode",
						FLATE_DECODE: "FlateDecode",
						LZW_DECODE: "LZWDecode",
						JPX_DECODE: "JPXDecode",
						JBIG2_DECODE: "JBIG2Decode",
						ASCII85_DECODE: "ASCII85Decode",
						ASCII_HEX_DECODE: "ASCIIHexDecode",
						RUN_LENGTH_DECODE: "RunLengthDecode",
						CCITT_FAX_DECODE: "CCITTFaxDecode"
					};
					var v = e.image_compression = {
							NONE: "NONE",
							FAST: "FAST",
							MEDIUM: "MEDIUM",
							SLOW: "SLOW"
						},
						y = e.__addimage__.sHashCode = function(e) {
							var t, n, r = 0;
							if ("string" == typeof e)
								for (n = e.length, t = 0; t < n; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
							else if (S(e))
								for (n = e.byteLength / 2, t = 0; t < n; t++) r = (r << 5) - r + e[t], r |= 0;
							return r
						},
						b = e.__addimage__.validateStringAsBase64 = function(e) {
							(e = e || "").toString().trim();
							var t = !0;
							return 0 === e.length && (t = !1), e.length % 4 != 0 && (t = !1), !1 === /^[A-Za-z0-9+/]+$/.test(e.substr(0, e.length - 2)) && (t = !1), !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(e.substr(-2)) && (t = !1), t
						},
						w = e.__addimage__.extractImageFromDataUrl = function(e) {
							var t = (e = e || "").split("base64,"),
								n = null;
							if (2 === t.length) {
								var r = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(t[0]);
								Array.isArray(r) && (n = {
									mimeType: r[1],
									charset: r[2],
									data: t[1]
								})
							}
							return n
						},
						x = e.__addimage__.supportsArrayBuffer = function() {
							return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
						};
					e.__addimage__.isArrayBuffer = function(e) {
						return x() && e instanceof ArrayBuffer
					};
					var S = e.__addimage__.isArrayBufferView = function(e) {
							return x() && "undefined" != typeof Uint32Array && (e instanceof Int8Array || e instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array)
						},
						j = e.__addimage__.binaryStringToUint8Array = function(e) {
							for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++) n[r] = e.charCodeAt(r);
							return n
						},
						N = e.__addimage__.arrayBufferToBinaryString = function(e) {
							for (var t = "", n = S(e) ? e : new Uint8Array(e), r = 0; r < n.length; r += 8192) t += String.fromCharCode.apply(null, n.subarray(r, r + 8192));
							return t
						};
					e.addImage = function() {
						var e, n, r, i, a, o, c, l, u;
						if ("number" == typeof arguments[1] ? (n = t, r = arguments[1], i = arguments[2], a = arguments[3], o = arguments[4], c = arguments[5], l = arguments[6], u = arguments[7]) : (n = arguments[1], r = arguments[2], i = arguments[3], a = arguments[4], o = arguments[5], c = arguments[6], l = arguments[7], u = arguments[8]), "object" === (0, yi.Z)(e = arguments[0]) && !h(e) && "imageData" in e) {
							var d = e;
							e = d.imageData, n = d.format || n || t, r = d.x || r || 0, i = d.y || i || 0, a = d.w || d.width || a, o = d.h || d.height || o, c = d.alias || c, l = d.compression || l, u = d.rotation || d.angle || u
						}
						var f = this.internal.getFilters();
						if (void 0 === l && -1 !== f.indexOf("FlateEncode") && (l = "SLOW"), isNaN(r) || isNaN(i)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
						s.call(this);
						var p = k.call(this, e, n, c, l);
						return m.call(this, r, i, a, o, p, u), this
					};
					var k = function(n, i, a, o) {
							var s, c, p;
							if ("string" == typeof n && r(n) === t) {
								n = unescape(n);
								var m = A(n, !1);
								("" !== m || void 0 !== (m = e.loadFile(n, !0))) && (n = m)
							}
							if (h(n) && (n = d(n, i)), i = r(n, i), !u(i)) throw new Error("addImage does not support files of type '" + i + "', please ensure that a plugin for '" + i + "' support is added.");
							if ((null == (p = a) || 0 === p.length) && (a = function(e) {
									return "string" == typeof e || S(e) ? y(e) : S(e.data) ? y(e.data) : null
								}(n)), (s = f.call(this, a)) || (x() && (n instanceof Uint8Array || "RGBA" === i || (c = n, n = j(n))), s = this["process" + i.toUpperCase()](n, l.call(this), a, function(t) {
									return t && "string" == typeof t && (t = t.toUpperCase()), t in e.image_compression ? t : v.NONE
								}(o), c)), !s) throw new Error("An unknown error occurred whilst processing the image.");
							return s
						},
						A = e.__addimage__.convertBase64ToBinaryString = function(e, t) {
							var n;
							t = "boolean" != typeof t || t;
							var r, i = "";
							if ("string" == typeof e) {
								r = null !== (n = w(e)) ? n.data : e;
								try {
									i = Ai(r)
								} catch (e) {
									if (t) throw b(r) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + e.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")
								}
							}
							return i
						};
					e.getImageProperties = function(n) {
						var i, a, o = "";
						if (h(n) && (n = d(n)), "string" == typeof n && r(n) === t && ("" === (o = A(n, !1)) && (o = e.loadFile(n) || ""), n = o), a = r(n), !u(a)) throw new Error("addImage does not support files of type '" + a + "', please ensure that a plugin for '" + a + "' support is added.");
						if (!x() || n instanceof Uint8Array || (n = j(n)), !(i = this["process" + a.toUpperCase()](n))) throw new Error("An unknown error occurred whilst processing the image");
						return i.fileType = a, i
					}
				}(Qi.API), qa = Qi.API, za = function(e) {
						if (void 0 !== e && "" != e) return !0
					}, Qi.API.events.push(["addPage", function(e) {
						this.internal.getPageInfo(e.pageNumber).pageContext.annotations = []
					}]), qa.events.push(["putPage", function(e) {
						for (var t, n, r, i = this.internal.getCoordinateString, a = this.internal.getVerticalCoordinateString, o = this.internal.getPageInfoByObjId(e.objId), s = e.pageContext.annotations, c = !1, l = 0; l < s.length && !c; l++) switch ((t = s[l]).type) {
							case "link":
								(za(t.options.url) || za(t.options.pageNumber)) && (c = !0);
								break;
							case "reference":
							case "text":
							case "freetext":
								c = !0
						}
						if (0 != c) {
							this.internal.write("/Annots [");
							for (var u = 0; u < s.length; u++) {
								t = s[u];
								var h = this.internal.pdfEscape,
									d = this.internal.getEncryptor(e.objId);
								switch (t.type) {
									case "reference":
										this.internal.write(" " + t.object.objId + " 0 R ");
										break;
									case "text":
										var f = this.internal.newAdditionalObject(),
											p = this.internal.newAdditionalObject(),
											m = this.internal.getEncryptor(f.objId),
											g = t.title || "Note";
										r = "<</Type /Annot /Subtype /Text " + (n = "/Rect [" + i(t.bounds.x) + " " + a(t.bounds.y + t.bounds.h) + " " + i(t.bounds.x + t.bounds.w) + " " + a(t.bounds.y) + "] ") + "/Contents (" + h(m(t.contents)) + ")", r += " /Popup " + p.objId + " 0 R", r += " /P " + o.objId + " 0 R", r += " /T (" + h(m(g)) + ") >>", f.content = r;
										var v = f.objId + " 0 R";
										r = "<</Type /Annot /Subtype /Popup " + (n = "/Rect [" + i(t.bounds.x + 30) + " " + a(t.bounds.y + t.bounds.h) + " " + i(t.bounds.x + t.bounds.w + 30) + " " + a(t.bounds.y) + "] ") + " /Parent " + v, t.open && (r += " /Open true"), r += " >>", p.content = r, this.internal.write(f.objId, "0 R", p.objId, "0 R");
										break;
									case "freetext":
										n = "/Rect [" + i(t.bounds.x) + " " + a(t.bounds.y) + " " + i(t.bounds.x + t.bounds.w) + " " + a(t.bounds.y + t.bounds.h) + "] ";
										var y = t.color || "#000000";
										r = "<</Type /Annot /Subtype /FreeText " + n + "/Contents (" + h(d(t.contents)) + ")", r += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + y + ")", r += " /Border [0 0 0]", r += " >>", this.internal.write(r);
										break;
									case "link":
										if (t.options.name) {
											var b = this.annotations._nameMap[t.options.name];
											t.options.pageNumber = b.page, t.options.top = b.y
										} else t.options.top || (t.options.top = 0);
										if (n = "/Rect [" + t.finalBounds.x + " " + t.finalBounds.y + " " + t.finalBounds.w + " " + t.finalBounds.h + "] ", r = "", t.options.url) r = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /A <</S /URI /URI (" + h(d(t.options.url)) + ") >>";
										else if (t.options.pageNumber) switch (r = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(t.options.pageNumber).objId + " 0 R", t.options.magFactor = t.options.magFactor || "XYZ", t.options.magFactor) {
											case "Fit":
												r += " /Fit]";
												break;
											case "FitH":
												r += " /FitH " + t.options.top + "]";
												break;
											case "FitV":
												t.options.left = t.options.left || 0, r += " /FitV " + t.options.left + "]";
												break;
											default:
												var w = a(t.options.top);
												t.options.left = t.options.left || 0, void 0 === t.options.zoom && (t.options.zoom = 0), r += " /XYZ " + t.options.left + " " + w + " " + t.options.zoom + "]"
										}
										"" != r && (r += " >>", this.internal.write(r))
								}
							}
							this.internal.write("]")
						}
					}]), qa.createAnnotation = function(e) {
						var t = this.internal.getCurrentPageInfo();
						switch (e.type) {
							case "link":
								this.link(e.bounds.x, e.bounds.y, e.bounds.w, e.bounds.h, e);
								break;
							case "text":
							case "freetext":
								t.pageContext.annotations.push(e)
						}
					}, qa.link = function(e, t, n, r, i) {
						var a = this.internal.getCurrentPageInfo(),
							o = this.internal.getCoordinateString,
							s = this.internal.getVerticalCoordinateString;
						a.pageContext.annotations.push({
							finalBounds: {
								x: o(e),
								y: s(t),
								w: o(e + n),
								h: s(t + r)
							},
							options: i,
							type: "link"
						})
					}, qa.textWithLink = function(e, t, n, r) {
						var i, a, o = this.getTextWidth(e),
							s = this.internal.getLineHeight() / this.internal.scaleFactor;
						if (void 0 !== r.maxWidth) {
							a = r.maxWidth;
							var c = this.splitTextToSize(e, a).length;
							i = Math.ceil(s * c)
						} else a = o, i = s;
						return this.text(e, t, n, r), n += .2 * s, "center" === r.align && (t -= o / 2), "right" === r.align && (t -= o), this.link(t, n - s, a, i, r), o
					}, qa.getTextWidth = function(e) {
						var t = this.internal.getFontSize();
						return this.getStringUnitWidth(e) * t / this.internal.scaleFactor
					},
					function(e) {
						var t = {
								1569: [65152],
								1570: [65153, 65154],
								1571: [65155, 65156],
								1572: [65157, 65158],
								1573: [65159, 65160],
								1574: [65161, 65162, 65163, 65164],
								1575: [65165, 65166],
								1576: [65167, 65168, 65169, 65170],
								1577: [65171, 65172],
								1578: [65173, 65174, 65175, 65176],
								1579: [65177, 65178, 65179, 65180],
								1580: [65181, 65182, 65183, 65184],
								1581: [65185, 65186, 65187, 65188],
								1582: [65189, 65190, 65191, 65192],
								1583: [65193, 65194],
								1584: [65195, 65196],
								1585: [65197, 65198],
								1586: [65199, 65200],
								1587: [65201, 65202, 65203, 65204],
								1588: [65205, 65206, 65207, 65208],
								1589: [65209, 65210, 65211, 65212],
								1590: [65213, 65214, 65215, 65216],
								1591: [65217, 65218, 65219, 65220],
								1592: [65221, 65222, 65223, 65224],
								1593: [65225, 65226, 65227, 65228],
								1594: [65229, 65230, 65231, 65232],
								1601: [65233, 65234, 65235, 65236],
								1602: [65237, 65238, 65239, 65240],
								1603: [65241, 65242, 65243, 65244],
								1604: [65245, 65246, 65247, 65248],
								1605: [65249, 65250, 65251, 65252],
								1606: [65253, 65254, 65255, 65256],
								1607: [65257, 65258, 65259, 65260],
								1608: [65261, 65262],
								1609: [65263, 65264, 64488, 64489],
								1610: [65265, 65266, 65267, 65268],
								1649: [64336, 64337],
								1655: [64477],
								1657: [64358, 64359, 64360, 64361],
								1658: [64350, 64351, 64352, 64353],
								1659: [64338, 64339, 64340, 64341],
								1662: [64342, 64343, 64344, 64345],
								1663: [64354, 64355, 64356, 64357],
								1664: [64346, 64347, 64348, 64349],
								1667: [64374, 64375, 64376, 64377],
								1668: [64370, 64371, 64372, 64373],
								1670: [64378, 64379, 64380, 64381],
								1671: [64382, 64383, 64384, 64385],
								1672: [64392, 64393],
								1676: [64388, 64389],
								1677: [64386, 64387],
								1678: [64390, 64391],
								1681: [64396, 64397],
								1688: [64394, 64395],
								1700: [64362, 64363, 64364, 64365],
								1702: [64366, 64367, 64368, 64369],
								1705: [64398, 64399, 64400, 64401],
								1709: [64467, 64468, 64469, 64470],
								1711: [64402, 64403, 64404, 64405],
								1713: [64410, 64411, 64412, 64413],
								1715: [64406, 64407, 64408, 64409],
								1722: [64414, 64415],
								1723: [64416, 64417, 64418, 64419],
								1726: [64426, 64427, 64428, 64429],
								1728: [64420, 64421],
								1729: [64422, 64423, 64424, 64425],
								1733: [64480, 64481],
								1734: [64473, 64474],
								1735: [64471, 64472],
								1736: [64475, 64476],
								1737: [64482, 64483],
								1739: [64478, 64479],
								1740: [64508, 64509, 64510, 64511],
								1744: [64484, 64485, 64486, 64487],
								1746: [64430, 64431],
								1747: [64432, 64433]
							},
							n = {
								65247: {
									65154: 65269,
									65156: 65271,
									65160: 65273,
									65166: 65275
								},
								65248: {
									65154: 65270,
									65156: 65272,
									65160: 65274,
									65166: 65276
								},
								65165: {
									65247: {
										65248: {
											65258: 65010
										}
									}
								},
								1617: {
									1612: 64606,
									1613: 64607,
									1614: 64608,
									1615: 64609,
									1616: 64610
								}
							},
							r = {
								1612: 64606,
								1613: 64607,
								1614: 64608,
								1615: 64609,
								1616: 64610
							},
							i = [1570, 1571, 1573, 1575];
						e.__arabicParser__ = {};
						var a = e.__arabicParser__.isInArabicSubstitutionA = function(e) {
								return void 0 !== t[e.charCodeAt(0)]
							},
							o = e.__arabicParser__.isArabicLetter = function(e) {
								return "string" == typeof e && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(e)
							},
							s = e.__arabicParser__.isArabicEndLetter = function(e) {
								return o(e) && a(e) && t[e.charCodeAt(0)].length <= 2
							},
							c = e.__arabicParser__.isArabicAlfLetter = function(e) {
								return o(e) && i.indexOf(e.charCodeAt(0)) >= 0
							};
						e.__arabicParser__.arabicLetterHasIsolatedForm = function(e) {
							return o(e) && a(e) && t[e.charCodeAt(0)].length >= 1
						};
						var l = e.__arabicParser__.arabicLetterHasFinalForm = function(e) {
							return o(e) && a(e) && t[e.charCodeAt(0)].length >= 2
						};
						e.__arabicParser__.arabicLetterHasInitialForm = function(e) {
							return o(e) && a(e) && t[e.charCodeAt(0)].length >= 3
						};
						var u = e.__arabicParser__.arabicLetterHasMedialForm = function(e) {
								return o(e) && a(e) && 4 == t[e.charCodeAt(0)].length
							},
							h = e.__arabicParser__.resolveLigatures = function(e) {
								var t = 0,
									r = n,
									i = "",
									a = 0;
								for (t = 0; t < e.length; t += 1) void 0 !== r[e.charCodeAt(t)] ? (a++, "number" == typeof(r = r[e.charCodeAt(t)]) && (i += String.fromCharCode(r), r = n, a = 0), t === e.length - 1 && (r = n, i += e.charAt(t - (a - 1)), t -= a - 1, a = 0)) : (r = n, i += e.charAt(t - a), t -= a, a = 0);
								return i
							};
						e.__arabicParser__.isArabicDiacritic = function(e) {
							return void 0 !== e && void 0 !== r[e.charCodeAt(0)]
						};
						var d = e.__arabicParser__.getCorrectForm = function(e, t, n) {
								return o(e) ? !1 === a(e) ? -1 : !l(e) || !o(t) && !o(n) || !o(n) && s(t) || s(e) && !o(t) || s(e) && c(t) || s(e) && s(t) ? 0 : u(e) && o(t) && !s(t) && o(n) && l(n) ? 3 : s(e) || !o(n) ? 1 : 2 : -1
							},
							f = function(e) {
								var n = 0,
									r = 0,
									i = 0,
									a = "",
									s = "",
									c = "",
									l = (e = e || "").split("\\s+"),
									u = [];
								for (n = 0; n < l.length; n += 1) {
									for (u.push(""), r = 0; r < l[n].length; r += 1) a = l[n][r], s = l[n][r - 1], c = l[n][r + 1], o(a) ? (i = d(a, s, c), u[n] += -1 !== i ? String.fromCharCode(t[a.charCodeAt(0)][i]) : a) : u[n] += a;
									u[n] = h(u[n])
								}
								return u.join(" ")
							},
							p = e.__arabicParser__.processArabic = e.processArabic = function() {
								var e, t = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text,
									n = [];
								if (Array.isArray(t)) {
									var r = 0;
									for (n = [], r = 0; r < t.length; r += 1) Array.isArray(t[r]) ? n.push([f(t[r][0]), t[r][1], t[r][2]]) : n.push([f(t[r])]);
									e = n
								} else e = f(t);
								return "string" == typeof arguments[0] ? e : (arguments[0].text = e, arguments[0])
							};
						e.events.push(["preProcessText", p])
					}(Qi.API), Qi.API.autoPrint = function(e) {
						var t;
						if ("javascript" === ((e = e || {}).variant = e.variant || "non-conform", e.variant)) this.addJS("print({});");
						else this.internal.events.subscribe("postPutResources", (function() {
							t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj")
						})), this.internal.events.subscribe("putCatalog", (function() {
							this.internal.out("/OpenAction " + t + " 0 R")
						}));
						return this
					},
					function(e) {
						var t = function() {
							var e = void 0;
							Object.defineProperty(this, "pdf", {
								get: function() {
									return e
								},
								set: function(t) {
									e = t
								}
							});
							var t = 150;
							Object.defineProperty(this, "width", {
								get: function() {
									return t
								},
								set: function(e) {
									t = isNaN(e) || !1 === Number.isInteger(e) || e < 0 ? 150 : e, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = t + 1)
								}
							});
							var n = 300;
							Object.defineProperty(this, "height", {
								get: function() {
									return n
								},
								set: function(e) {
									n = isNaN(e) || !1 === Number.isInteger(e) || e < 0 ? 300 : e, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = n + 1)
								}
							});
							var r = [];
							Object.defineProperty(this, "childNodes", {
								get: function() {
									return r
								},
								set: function(e) {
									r = e
								}
							});
							var i = {};
							Object.defineProperty(this, "style", {
								get: function() {
									return i
								},
								set: function(e) {
									i = e
								}
							}), Object.defineProperty(this, "parentNode", {})
						};
						t.prototype.getContext = function(e, t) {
							var n;
							if ("2d" !== (e = e || "2d")) return null;
							for (n in t) this.pdf.context2d.hasOwnProperty(n) && (this.pdf.context2d[n] = t[n]);
							return this.pdf.context2d._canvas = this, this.pdf.context2d
						}, t.prototype.toDataURL = function() {
							throw new Error("toDataURL is not implemented.")
						}, e.events.push(["initialized", function() {
							this.canvas = new t, this.canvas.pdf = this
						}])
					}(Qi.API),
					function(e) {
						var t = {
								left: 0,
								top: 0,
								bottom: 0,
								right: 0
							},
							n = !1,
							r = function() {
								void 0 === this.internal.__cell__ && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, t), this.internal.__cell__.margins.width = this.getPageWidth(), i.call(this))
							},
							i = function() {
								this.internal.__cell__.lastCell = new a, this.internal.__cell__.pages = 1
							},
							a = function() {
								var e = arguments[0];
								Object.defineProperty(this, "x", {
									enumerable: !0,
									get: function() {
										return e
									},
									set: function(t) {
										e = t
									}
								});
								var t = arguments[1];
								Object.defineProperty(this, "y", {
									enumerable: !0,
									get: function() {
										return t
									},
									set: function(e) {
										t = e
									}
								});
								var n = arguments[2];
								Object.defineProperty(this, "width", {
									enumerable: !0,
									get: function() {
										return n
									},
									set: function(e) {
										n = e
									}
								});
								var r = arguments[3];
								Object.defineProperty(this, "height", {
									enumerable: !0,
									get: function() {
										return r
									},
									set: function(e) {
										r = e
									}
								});
								var i = arguments[4];
								Object.defineProperty(this, "text", {
									enumerable: !0,
									get: function() {
										return i
									},
									set: function(e) {
										i = e
									}
								});
								var a = arguments[5];
								Object.defineProperty(this, "lineNumber", {
									enumerable: !0,
									get: function() {
										return a
									},
									set: function(e) {
										a = e
									}
								});
								var o = arguments[6];
								return Object.defineProperty(this, "align", {
									enumerable: !0,
									get: function() {
										return o
									},
									set: function(e) {
										o = e
									}
								}), this
							};
						a.prototype.clone = function() {
							return new a(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align)
						}, a.prototype.toArray = function() {
							return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align]
						}, e.setHeaderFunction = function(e) {
							return r.call(this), this.internal.__cell__.headerFunction = "function" == typeof e ? e : void 0, this
						}, e.getTextDimensions = function(e, t) {
							r.call(this);
							var n = (t = t || {}).fontSize || this.getFontSize(),
								i = t.font || this.getFont(),
								a = t.scaleFactor || this.internal.scaleFactor,
								o = 0,
								s = 0,
								c = 0,
								l = this;
							if (!Array.isArray(e) && "string" != typeof e) {
								if ("number" != typeof e) throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
								e = String(e)
							}
							var u = t.maxWidth;
							u > 0 ? "string" == typeof e ? e = this.splitTextToSize(e, u) : "[object Array]" === Object.prototype.toString.call(e) && (e = e.reduce((function(e, t) {
								return e.concat(l.splitTextToSize(t, u))
							}), [])) : e = Array.isArray(e) ? e : [e];
							for (var h = 0; h < e.length; h++) o < (c = this.getStringUnitWidth(e[h], {
								font: i
							}) * n) && (o = c);
							return 0 !== o && (s = e.length), {
								w: o /= a,
								h: Math.max((s * n * this.getLineHeightFactor() - n * (this.getLineHeightFactor() - 1)) / a, 0)
							}
						}, e.cellAddPage = function() {
							r.call(this), this.addPage();
							var e = this.internal.__cell__.margins || t;
							return this.internal.__cell__.lastCell = new a(e.left, e.top, void 0, void 0), this.internal.__cell__.pages += 1, this
						};
						var o = e.cell = function() {
							var e;
							e = arguments[0] instanceof a ? arguments[0] : new a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), r.call(this);
							var i = this.internal.__cell__.lastCell,
								o = this.internal.__cell__.padding,
								s = this.internal.__cell__.margins || t,
								c = this.internal.__cell__.tableHeaderRow,
								l = this.internal.__cell__.printHeaders;
							return void 0 !== i.lineNumber && (i.lineNumber === e.lineNumber ? (e.x = (i.x || 0) + (i.width || 0), e.y = i.y || 0) : i.y + i.height + e.height + s.bottom > this.getPageHeight() ? (this.cellAddPage(), e.y = s.top, l && c && (this.printHeaderRow(e.lineNumber, !0), e.y += c[0].height)) : e.y = i.y + i.height || e.y), void 0 !== e.text[0] && (this.rect(e.x, e.y, e.width, e.height, !0 === n ? "FD" : void 0), "right" === e.align ? this.text(e.text, e.x + e.width - o, e.y + o, {
								align: "right",
								baseline: "top"
							}) : "center" === e.align ? this.text(e.text, e.x + e.width / 2, e.y + o, {
								align: "center",
								baseline: "top",
								maxWidth: e.width - o - o
							}) : this.text(e.text, e.x + o, e.y + o, {
								align: "left",
								baseline: "top",
								maxWidth: e.width - o - o
							})), this.internal.__cell__.lastCell = e, this
						};
						e.table = function(e, n, c, l, u) {
							if (r.call(this), !c) throw new Error("No data for PDF table.");
							var h, d, f, p, m = [],
								g = [],
								v = [],
								y = {},
								b = {},
								w = [],
								x = [],
								S = (u = u || {}).autoSize || !1,
								j = !1 !== u.printHeaders,
								N = u.css && void 0 !== u.css["font-size"] ? 16 * u.css["font-size"] : u.fontSize || 12,
								k = u.margins || Object.assign({
									width: this.getPageWidth()
								}, t),
								A = "number" == typeof u.padding ? u.padding : 3,
								L = u.headerBackgroundColor || "#c8c8c8",
								P = u.headerTextColor || "#000";
							if (i.call(this), this.internal.__cell__.printHeaders = j, this.internal.__cell__.margins = k, this.internal.__cell__.table_font_size = N, this.internal.__cell__.padding = A, this.internal.__cell__.headerBackgroundColor = L, this.internal.__cell__.headerTextColor = P, this.setFontSize(N), null == l) g = m = Object.keys(c[0]), v = m.map((function() {
								return "left"
							}));
							else if (Array.isArray(l) && "object" === (0, yi.Z)(l[0]))
								for (m = l.map((function(e) {
										return e.name
									})), g = l.map((function(e) {
										return e.prompt || e.name || ""
									})), v = l.map((function(e) {
										return e.align || "left"
									})), h = 0; h < l.length; h += 1) b[l[h].name] = l[h].width * (19.049976 / 25.4);
							else Array.isArray(l) && "string" == typeof l[0] && (g = m = l, v = m.map((function() {
								return "left"
							})));
							if (S || Array.isArray(l) && "string" == typeof l[0])
								for (h = 0; h < m.length; h += 1) {
									for (y[p = m[h]] = c.map((function(e) {
											return e[p]
										})), this.setFont(void 0, "bold"), w.push(this.getTextDimensions(g[h], {
											fontSize: this.internal.__cell__.table_font_size,
											scaleFactor: this.internal.scaleFactor
										}).w), d = y[p], this.setFont(void 0, "normal"), f = 0; f < d.length; f += 1) w.push(this.getTextDimensions(d[f], {
										fontSize: this.internal.__cell__.table_font_size,
										scaleFactor: this.internal.scaleFactor
									}).w);
									b[p] = Math.max.apply(null, w) + A + A, w = []
								}
							if (j) {
								var I = {};
								for (h = 0; h < m.length; h += 1) I[m[h]] = {}, I[m[h]].text = g[h], I[m[h]].align = v[h];
								var C = s.call(this, I, b);
								x = m.map((function(t) {
									return new a(e, n, b[t], C, I[t].text, void 0, I[t].align)
								})), this.setTableHeaderRow(x), this.printHeaderRow(1, !1)
							}
							var _ = l.reduce((function(e, t) {
								return e[t.name] = t.align, e
							}), {});
							for (h = 0; h < c.length; h += 1) {
								"rowStart" in u && u.rowStart instanceof Function && u.rowStart({
									row: h,
									data: c[h]
								}, this);
								var O = s.call(this, c[h], b);
								for (f = 0; f < m.length; f += 1) {
									var T = c[h][m[f]];
									"cellStart" in u && u.cellStart instanceof Function && u.cellStart({
										row: h,
										col: f,
										data: T
									}, this), o.call(this, new a(e, n, b[m[f]], O, T, h + 2, _[m[f]]))
								}
							}
							return this.internal.__cell__.table_x = e, this.internal.__cell__.table_y = n, this
						};
						var s = function(e, t) {
							var n = this.internal.__cell__.padding,
								r = this.internal.__cell__.table_font_size,
								i = this.internal.scaleFactor;
							return Object.keys(e).map((function(r) {
								var i = e[r];
								return this.splitTextToSize(i.hasOwnProperty("text") ? i.text : i, t[r] - n - n)
							}), this).map((function(e) {
								return this.getLineHeightFactor() * e.length * r / i + n + n
							}), this).reduce((function(e, t) {
								return Math.max(e, t)
							}), 0)
						};
						e.setTableHeaderRow = function(e) {
							r.call(this), this.internal.__cell__.tableHeaderRow = e
						}, e.printHeaderRow = function(e, t) {
							if (r.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
							var i;
							if (n = !0, "function" == typeof this.internal.__cell__.headerFunction) {
								var s = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
								this.internal.__cell__.lastCell = new a(s[0], s[1], s[2], s[3], void 0, -1)
							}
							this.setFont(void 0, "bold");
							for (var c = [], l = 0; l < this.internal.__cell__.tableHeaderRow.length; l += 1) {
								i = this.internal.__cell__.tableHeaderRow[l].clone(), t && (i.y = this.internal.__cell__.margins.top || 0, c.push(i)), i.lineNumber = e;
								var u = this.getTextColor();
								this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), o.call(this, i), this.setTextColor(u)
							}
							c.length > 0 && this.setTableHeaderRow(c), this.setFont(void 0, "normal"), n = !1
						}
					}(Qi.API);
				var Ha = {
						italic: ["italic", "oblique", "normal"],
						oblique: ["oblique", "italic", "normal"],
						normal: ["normal", "oblique", "italic"]
					},
					Ga = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"],
					Va = Za(Ga),
					Wa = [100, 200, 300, 400, 500, 600, 700, 800, 900],
					Ya = Za(Wa);

				function Ka(e) {
					var t = e.family.replace(/"|'/g, "").toLowerCase(),
						n = function(e) {
							return Ha[e = e || "normal"] ? e : "normal"
						}(e.style),
						r = function(e) {
							return e ? "number" == typeof e ? e >= 100 && e <= 900 && e % 100 == 0 ? e : 400 : /^\d00$/.test(e) ? parseInt(e) : "bold" === e ? 700 : 400 : 400
						}(e.weight),
						i = function(e) {
							return "number" == typeof Va[e = e || "normal"] ? e : "normal"
						}(e.stretch);
					return {
						family: t,
						style: n,
						weight: r,
						stretch: i,
						src: e.src || [],
						ref: e.ref || {
							name: t,
							style: [i, n, r].join(" ")
						}
					}
				}

				function Ja(e, t, n, r) {
					var i;
					for (i = n; i >= 0 && i < t.length; i += r)
						if (e[t[i]]) return e[t[i]];
					for (i = n; i >= 0 && i < t.length; i -= r)
						if (e[t[i]]) return e[t[i]]
				}
				var Xa = {
						"sans-serif": "helvetica",
						fixed: "courier",
						monospace: "courier",
						terminal: "courier",
						cursive: "times",
						fantasy: "times",
						serif: "times"
					},
					$a = {
						caption: "times",
						icon: "times",
						menu: "times",
						"message-box": "times",
						"small-caption": "times",
						"status-bar": "times"
					};

				function Qa(e) {
					return [e.stretch, e.style, e.weight, e.family].join(" ")
				}

				function eo(e) {
					return e.trimLeft()
				}

				function to(e, t) {
					for (var n = 0; n < e.length;) {
						if (e.charAt(n) === t) return [e.substring(0, n), e.substring(n + 1)];
						n += 1
					}
					return null
				}

				function no(e) {
					var t = e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
					return null === t ? null : [t[0], e.substring(t[0].length)]
				}
				var ro, io, ao, oo = ["times"];
				! function(e) {
					var t, n, r, i, a, o, s, c, l, u = function(e) {
						return e = e || {}, this.isStrokeTransparent = e.isStrokeTransparent || !1, this.strokeOpacity = e.strokeOpacity || 1, this.strokeStyle = e.strokeStyle || "#000000", this.fillStyle = e.fillStyle || "#000000", this.isFillTransparent = e.isFillTransparent || !1, this.fillOpacity = e.fillOpacity || 1, this.font = e.font || "10px sans-serif", this.textBaseline = e.textBaseline || "alphabetic", this.textAlign = e.textAlign || "left", this.lineWidth = e.lineWidth || 1, this.lineJoin = e.lineJoin || "miter", this.lineCap = e.lineCap || "butt", this.path = e.path || [], this.transform = void 0 !== e.transform ? e.transform.clone() : new c, this.globalCompositeOperation = e.globalCompositeOperation || "normal", this.globalAlpha = e.globalAlpha || 1, this.clip_path = e.clip_path || [], this.currentPoint = e.currentPoint || new o, this.miterLimit = e.miterLimit || 10, this.lastPoint = e.lastPoint || new o, this.lineDashOffset = e.lineDashOffset || 0, this.lineDash = e.lineDash || [], this.margin = e.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = e.prevPageLastElemOffset || 0, this.ignoreClearRect = "boolean" != typeof e.ignoreClearRect || e.ignoreClearRect, this
					};
					e.events.push(["initialized", function() {
						this.context2d = new h(this), t = this.internal.f2, n = this.internal.getCoordinateString, r = this.internal.getVerticalCoordinateString, i = this.internal.getHorizontalCoordinate, a = this.internal.getVerticalCoordinate, o = this.internal.Point, s = this.internal.Rectangle, c = this.internal.Matrix, l = new u
					}]);
					var h = function(e) {
						Object.defineProperty(this, "canvas", {
							get: function() {
								return {
									parentNode: !1,
									style: !1
								}
							}
						});
						var t = e;
						Object.defineProperty(this, "pdf", {
							get: function() {
								return t
							}
						});
						var n = !1;
						Object.defineProperty(this, "pageWrapXEnabled", {
							get: function() {
								return n
							},
							set: function(e) {
								n = Boolean(e)
							}
						});
						var r = !1;
						Object.defineProperty(this, "pageWrapYEnabled", {
							get: function() {
								return r
							},
							set: function(e) {
								r = Boolean(e)
							}
						});
						var i = 0;
						Object.defineProperty(this, "posX", {
							get: function() {
								return i
							},
							set: function(e) {
								isNaN(e) || (i = e)
							}
						});
						var a = 0;
						Object.defineProperty(this, "posY", {
							get: function() {
								return a
							},
							set: function(e) {
								isNaN(e) || (a = e)
							}
						}), Object.defineProperty(this, "margin", {
							get: function() {
								return l.margin
							},
							set: function(e) {
								var t;
								"number" == typeof e ? t = [e, e, e, e] : ((t = new Array(4))[0] = e[0], t[1] = e.length >= 2 ? e[1] : t[0], t[2] = e.length >= 3 ? e[2] : t[0], t[3] = e.length >= 4 ? e[3] : t[1]), l.margin = t
							}
						});
						var o = !1;
						Object.defineProperty(this, "autoPaging", {
							get: function() {
								return o
							},
							set: function(e) {
								o = e
							}
						});
						var s = 0;
						Object.defineProperty(this, "lastBreak", {
							get: function() {
								return s
							},
							set: function(e) {
								s = e
							}
						});
						var c = [];
						Object.defineProperty(this, "pageBreaks", {
							get: function() {
								return c
							},
							set: function(e) {
								c = e
							}
						}), Object.defineProperty(this, "ctx", {
							get: function() {
								return l
							},
							set: function(e) {
								e instanceof u && (l = e)
							}
						}), Object.defineProperty(this, "path", {
							get: function() {
								return l.path
							},
							set: function(e) {
								l.path = e
							}
						});
						var h = [];
						Object.defineProperty(this, "ctxStack", {
							get: function() {
								return h
							},
							set: function(e) {
								h = e
							}
						}), Object.defineProperty(this, "fillStyle", {
							get: function() {
								return this.ctx.fillStyle
							},
							set: function(e) {
								var t;
								t = d(e), this.ctx.fillStyle = t.style, this.ctx.isFillTransparent = 0 === t.a, this.ctx.fillOpacity = t.a, this.pdf.setFillColor(t.r, t.g, t.b, {
									a: t.a
								}), this.pdf.setTextColor(t.r, t.g, t.b, {
									a: t.a
								})
							}
						}), Object.defineProperty(this, "strokeStyle", {
							get: function() {
								return this.ctx.strokeStyle
							},
							set: function(e) {
								var t = d(e);
								this.ctx.strokeStyle = t.style, this.ctx.isStrokeTransparent = 0 === t.a, this.ctx.strokeOpacity = t.a, 0 === t.a ? this.pdf.setDrawColor(255, 255, 255) : (t.a, this.pdf.setDrawColor(t.r, t.g, t.b))
							}
						}), Object.defineProperty(this, "lineCap", {
							get: function() {
								return this.ctx.lineCap
							},
							set: function(e) {
								-1 !== ["butt", "round", "square"].indexOf(e) && (this.ctx.lineCap = e, this.pdf.setLineCap(e))
							}
						}), Object.defineProperty(this, "lineWidth", {
							get: function() {
								return this.ctx.lineWidth
							},
							set: function(e) {
								isNaN(e) || (this.ctx.lineWidth = e, this.pdf.setLineWidth(e))
							}
						}), Object.defineProperty(this, "lineJoin", {
							get: function() {
								return this.ctx.lineJoin
							},
							set: function(e) {
								-1 !== ["bevel", "round", "miter"].indexOf(e) && (this.ctx.lineJoin = e, this.pdf.setLineJoin(e))
							}
						}), Object.defineProperty(this, "miterLimit", {
							get: function() {
								return this.ctx.miterLimit
							},
							set: function(e) {
								isNaN(e) || (this.ctx.miterLimit = e, this.pdf.setMiterLimit(e))
							}
						}), Object.defineProperty(this, "textBaseline", {
							get: function() {
								return this.ctx.textBaseline
							},
							set: function(e) {
								this.ctx.textBaseline = e
							}
						}), Object.defineProperty(this, "textAlign", {
							get: function() {
								return this.ctx.textAlign
							},
							set: function(e) {
								-1 !== ["right", "end", "center", "left", "start"].indexOf(e) && (this.ctx.textAlign = e)
							}
						});
						var f = null;

						function p(e, t) {
							if (null === f) {
								var n = function(e) {
									var t = [];
									return Object.keys(e).forEach((function(n) {
										e[n].forEach((function(e) {
											var r = null;
											switch (e) {
												case "bold":
													r = {
														family: n,
														weight: "bold"
													};
													break;
												case "italic":
													r = {
														family: n,
														style: "italic"
													};
													break;
												case "bolditalic":
													r = {
														family: n,
														weight: "bold",
														style: "italic"
													};
													break;
												case "":
												case "normal":
													r = {
														family: n
													}
											}
											null !== r && (r.ref = {
												name: n,
												style: e
											}, t.push(r))
										}))
									})), t
								}(e.getFontList());
								f = function(e) {
									for (var t = {}, n = 0; n < e.length; ++n) {
										var r = Ka(e[n]),
											i = r.family,
											a = r.stretch,
											o = r.style,
											s = r.weight;
										t[i] = t[i] || {}, t[i][a] = t[i][a] || {}, t[i][a][o] = t[i][a][o] || {}, t[i][a][o][s] = r
									}
									return t
								}(n.concat(t))
							}
							return f
						}
						var m = null;
						Object.defineProperty(this, "fontFaces", {
							get: function() {
								return m
							},
							set: function(e) {
								f = null, m = e
							}
						}), Object.defineProperty(this, "font", {
							get: function() {
								return this.ctx.font
							},
							set: function(e) {
								var t;
								if (this.ctx.font = e, null !== (t = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(e))) {
									var n = t[1],
										r = (t[2], t[3]),
										i = t[4],
										a = (t[5], t[6]),
										o = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];
									i = "px" === o ? Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor) : "em" === o ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(i);
									var s = function(e) {
										var t, n, r = [],
											i = e.trim();
										if ("" === i) return oo;
										if (i in $a) return [$a[i]];
										for (;
											"" !== i;) {
											switch (n = null, t = (i = eo(i)).charAt(0)) {
												case '"':
												case "'":
													n = to(i.substring(1), t);
													break;
												default:
													n = no(i)
											}
											if (null === n) return oo;
											if (r.push(n[0]), "" !== (i = eo(n[1])) && "," !== i.charAt(0)) return oo;
											i = i.replace(/^,/, "")
										}
										return r
									}(a);
									if (this.fontFaces) {
										var c = function(e, t, n) {
											for (var r = (n = n || {}).defaultFontFamily || "times", i = Object.assign({}, Xa, n.genericFontFamilies || {}), a = null, o = null, s = 0; s < t.length; ++s)
												if (i[(a = Ka(t[s])).family] && (a.family = i[a.family]), e.hasOwnProperty(a.family)) {
													o = e[a.family];
													break
												} if (!(o = o || e[r])) throw new Error("Could not find a font-family for the rule '" + Qa(a) + "' and default family '" + r + "'.");
											if (o = function(e, t) {
													if (t[e]) return t[e];
													var n = Va[e],
														r = n <= Va.normal ? -1 : 1,
														i = Ja(t, Ga, n, r);
													if (!i) throw new Error("Could not find a matching font-stretch value for " + e);
													return i
												}(a.stretch, o), o = function(e, t) {
													if (t[e]) return t[e];
													for (var n = Ha[e], r = 0; r < n.length; ++r)
														if (t[n[r]]) return t[n[r]];
													throw new Error("Could not find a matching font-style for " + e)
												}(a.style, o), !(o = function(e, t) {
													if (t[e]) return t[e];
													if (400 === e && t[500]) return t[500];
													if (500 === e && t[400]) return t[400];
													var n = Ya[e],
														r = Ja(t, Wa, n, e < 400 ? -1 : 1);
													if (!r) throw new Error("Could not find a matching font-weight for value " + e);
													return r
												}(a.weight, o))) throw new Error("Failed to resolve a font for the rule '" + Qa(a) + "'.");
											return o
										}(p(this.pdf, this.fontFaces), s.map((function(e) {
											return {
												family: e,
												stretch: "normal",
												weight: r,
												style: n
											}
										})));
										this.pdf.setFont(c.ref.name, c.ref.style)
									} else {
										var l = "";
										("bold" === r || parseInt(r, 10) >= 700 || "bold" === n) && (l = "bold"), "italic" === n && (l += "italic"), 0 === l.length && (l = "normal");
										for (var u = "", h = {
												arial: "Helvetica",
												Arial: "Helvetica",
												verdana: "Helvetica",
												Verdana: "Helvetica",
												helvetica: "Helvetica",
												Helvetica: "Helvetica",
												"sans-serif": "Helvetica",
												fixed: "Courier",
												monospace: "Courier",
												terminal: "Courier",
												cursive: "Times",
												fantasy: "Times",
												serif: "Times"
											}, d = 0; d < s.length; d++) {
											if (void 0 !== this.pdf.internal.getFont(s[d], l, {
													noFallback: !0,
													disableWarning: !0
												})) {
												u = s[d];
												break
											}
											if ("bolditalic" === l && void 0 !== this.pdf.internal.getFont(s[d], "bold", {
													noFallback: !0,
													disableWarning: !0
												})) u = s[d], l = "bold";
											else if (void 0 !== this.pdf.internal.getFont(s[d], "normal", {
													noFallback: !0,
													disableWarning: !0
												})) {
												u = s[d], l = "normal";
												break
											}
										}
										if ("" === u)
											for (var f = 0; f < s.length; f++)
												if (h[s[f]]) {
													u = h[s[f]];
													break
												} u = "" === u ? "Times" : u, this.pdf.setFont(u, l)
									}
								}
							}
						}), Object.defineProperty(this, "globalCompositeOperation", {
							get: function() {
								return this.ctx.globalCompositeOperation
							},
							set: function(e) {
								this.ctx.globalCompositeOperation = e
							}
						}), Object.defineProperty(this, "globalAlpha", {
							get: function() {
								return this.ctx.globalAlpha
							},
							set: function(e) {
								this.ctx.globalAlpha = e
							}
						}), Object.defineProperty(this, "lineDashOffset", {
							get: function() {
								return this.ctx.lineDashOffset
							},
							set: function(e) {
								this.ctx.lineDashOffset = e, R.call(this)
							}
						}), Object.defineProperty(this, "lineDash", {
							get: function() {
								return this.ctx.lineDash
							},
							set: function(e) {
								this.ctx.lineDash = e, R.call(this)
							}
						}), Object.defineProperty(this, "ignoreClearRect", {
							get: function() {
								return this.ctx.ignoreClearRect
							},
							set: function(e) {
								this.ctx.ignoreClearRect = Boolean(e)
							}
						})
					};
					h.prototype.setLineDash = function(e) {
						this.lineDash = e
					}, h.prototype.getLineDash = function() {
						return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice()
					}, h.prototype.fill = function() {
						w.call(this, "fill", !1)
					}, h.prototype.stroke = function() {
						w.call(this, "stroke", !1)
					}, h.prototype.beginPath = function() {
						this.path = [{
							type: "begin"
						}]
					}, h.prototype.moveTo = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw Si.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
						var n = this.ctx.transform.applyToPoint(new o(e, t));
						this.path.push({
							type: "mt",
							x: n.x,
							y: n.y
						}), this.ctx.lastPoint = new o(e, t)
					}, h.prototype.closePath = function() {
						var e = new o(0, 0),
							t = 0;
						for (t = this.path.length - 1; - 1 !== t; t--)
							if ("begin" === this.path[t].type && "object" === (0, yi.Z)(this.path[t + 1]) && "number" == typeof this.path[t + 1].x) {
								e = new o(this.path[t + 1].x, this.path[t + 1].y);
								break
							} this.path.push({
							type: "close"
						}), this.ctx.lastPoint = new o(e.x, e.y)
					}, h.prototype.lineTo = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw Si.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
						var n = this.ctx.transform.applyToPoint(new o(e, t));
						this.path.push({
							type: "lt",
							x: n.x,
							y: n.y
						}), this.ctx.lastPoint = new o(n.x, n.y)
					}, h.prototype.clip = function() {
						this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), w.call(this, null, !0)
					}, h.prototype.quadraticCurveTo = function(e, t, n, r) {
						if (isNaN(n) || isNaN(r) || isNaN(e) || isNaN(t)) throw Si.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
						var i = this.ctx.transform.applyToPoint(new o(n, r)),
							a = this.ctx.transform.applyToPoint(new o(e, t));
						this.path.push({
							type: "qct",
							x1: a.x,
							y1: a.y,
							x: i.x,
							y: i.y
						}), this.ctx.lastPoint = new o(i.x, i.y)
					}, h.prototype.bezierCurveTo = function(e, t, n, r, i, a) {
						if (isNaN(i) || isNaN(a) || isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw Si.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
						var s = this.ctx.transform.applyToPoint(new o(i, a)),
							c = this.ctx.transform.applyToPoint(new o(e, t)),
							l = this.ctx.transform.applyToPoint(new o(n, r));
						this.path.push({
							type: "bct",
							x1: c.x,
							y1: c.y,
							x2: l.x,
							y2: l.y,
							x: s.x,
							y: s.y
						}), this.ctx.lastPoint = new o(s.x, s.y)
					}, h.prototype.arc = function(e, t, n, r, i, a) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i)) throw Si.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
						if (a = Boolean(a), !this.ctx.transform.isIdentity) {
							var s = this.ctx.transform.applyToPoint(new o(e, t));
							e = s.x, t = s.y;
							var c = this.ctx.transform.applyToPoint(new o(0, n)),
								l = this.ctx.transform.applyToPoint(new o(0, 0));
							n = Math.sqrt(Math.pow(c.x - l.x, 2) + Math.pow(c.y - l.y, 2))
						}
						Math.abs(i - r) >= 2 * Math.PI && (r = 0, i = 2 * Math.PI), this.path.push({
							type: "arc",
							x: e,
							y: t,
							radius: n,
							startAngle: r,
							endAngle: i,
							counterclockwise: a
						})
					}, h.prototype.arcTo = function(e, t, n, r, i) {
						throw new Error("arcTo not implemented.")
					}, h.prototype.rect = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw Si.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
						this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.lineTo(e, t), this.lineTo(e + n, t), this.lineTo(e, t)
					}, h.prototype.fillRect = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw Si.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
						if (!f.call(this)) {
							var i = {};
							"butt" !== this.lineCap && (i.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (i.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(e, t, n, r), this.fill(), i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap), i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin)
						}
					}, h.prototype.strokeRect = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw Si.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
						p.call(this) || (this.beginPath(), this.rect(e, t, n, r), this.stroke())
					}, h.prototype.clearRect = function(e, t, n, r) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw Si.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
						this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(e, t, n, r))
					}, h.prototype.save = function(e) {
						e = "boolean" != typeof e || e;
						for (var t = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) this.pdf.setPage(n + 1), this.pdf.internal.out("q");
						if (this.pdf.setPage(t), e) {
							this.ctx.fontSize = this.pdf.internal.getFontSize();
							var r = new u(this.ctx);
							this.ctxStack.push(this.ctx), this.ctx = r
						}
					}, h.prototype.restore = function(e) {
						e = "boolean" != typeof e || e;
						for (var t = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) this.pdf.setPage(n + 1), this.pdf.internal.out("Q");
						this.pdf.setPage(t), e && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset)
					}, h.prototype.toDataURL = function() {
						throw new Error("toDataUrl not implemented.")
					};
					var d = function(e) {
							var t, n, r, i;
							if (!0 === e.isCanvasGradient && (e = e.getColor()), !e) return {
								r: 0,
								g: 0,
								b: 0,
								a: 0,
								style: e
							};
							if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(e)) t = 0, n = 0, r = 0, i = 0;
							else {
								var a = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(e);
								if (null !== a) t = parseInt(a[1]), n = parseInt(a[2]), r = parseInt(a[3]), i = 1;
								else if (null !== (a = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(e))) t = parseInt(a[1]), n = parseInt(a[2]), r = parseInt(a[3]), i = parseFloat(a[4]);
								else {
									if (i = 1, "string" == typeof e && "#" !== e.charAt(0)) {
										var o = new Ii(e);
										e = o.ok ? o.toHex() : "#000000"
									}
									4 === e.length ? (t = e.substring(1, 2), t += t, n = e.substring(2, 3), n += n, r = e.substring(3, 4), r += r) : (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7)), t = parseInt(t, 16), n = parseInt(n, 16), r = parseInt(r, 16)
								}
							}
							return {
								r: t,
								g: n,
								b: r,
								a: i,
								style: e
							}
						},
						f = function() {
							return this.ctx.isFillTransparent || 0 == this.globalAlpha
						},
						p = function() {
							return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha)
						};
					h.prototype.fillText = function(e, t, n, r) {
						if (isNaN(t) || isNaN(n) || "string" != typeof e) throw Si.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
						if (r = isNaN(r) ? void 0 : r, !f.call(this)) {
							var i = D(this.ctx.transform.rotation),
								a = this.ctx.transform.scaleX;
							P.call(this, {
								text: e,
								x: t,
								y: n,
								scale: a,
								angle: i,
								align: this.textAlign,
								maxWidth: r
							})
						}
					}, h.prototype.strokeText = function(e, t, n, r) {
						if (isNaN(t) || isNaN(n) || "string" != typeof e) throw Si.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
						if (!p.call(this)) {
							r = isNaN(r) ? void 0 : r;
							var i = D(this.ctx.transform.rotation),
								a = this.ctx.transform.scaleX;
							P.call(this, {
								text: e,
								x: t,
								y: n,
								scale: a,
								renderingMode: "stroke",
								angle: i,
								align: this.textAlign,
								maxWidth: r
							})
						}
					}, h.prototype.measureText = function(e) {
						if ("string" != typeof e) throw Si.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
						var t = this.pdf,
							n = this.pdf.internal.scaleFactor,
							r = t.internal.getFontSize(),
							i = t.getStringUnitWidth(e) * r / t.internal.scaleFactor;
						return new function(e) {
							var t = (e = e || {}).width || 0;
							return Object.defineProperty(this, "width", {
								get: function() {
									return t
								}
							}), this
						}({
							width: i *= Math.round(96 * n / 72 * 1e4) / 1e4
						})
					}, h.prototype.scale = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw Si.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
						var n = new c(e, 0, 0, t, 0, 0);
						this.ctx.transform = this.ctx.transform.multiply(n)
					}, h.prototype.rotate = function(e) {
						if (isNaN(e)) throw Si.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
						var t = new c(Math.cos(e), Math.sin(e), -Math.sin(e), Math.cos(e), 0, 0);
						this.ctx.transform = this.ctx.transform.multiply(t)
					}, h.prototype.translate = function(e, t) {
						if (isNaN(e) || isNaN(t)) throw Si.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
						var n = new c(1, 0, 0, 1, e, t);
						this.ctx.transform = this.ctx.transform.multiply(n)
					}, h.prototype.transform = function(e, t, n, r, i, a) {
						if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a)) throw Si.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
						var o = new c(e, t, n, r, i, a);
						this.ctx.transform = this.ctx.transform.multiply(o)
					}, h.prototype.setTransform = function(e, t, n, r, i, a) {
						e = isNaN(e) ? 1 : e, t = isNaN(t) ? 0 : t, n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, i = isNaN(i) ? 0 : i, a = isNaN(a) ? 0 : a, this.ctx.transform = new c(e, t, n, r, i, a)
					};
					var m = function() {
						return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0
					};
					h.prototype.drawImage = function(e, t, n, r, i, a, o, l, u) {
						var h = this.pdf.getImageProperties(e),
							d = 1,
							f = 1,
							p = 1,
							v = 1;
						void 0 !== r && void 0 !== l && (p = l / r, v = u / i, d = h.width / r * l / r, f = h.height / i * u / i), void 0 === a && (a = t, o = n, t = 0, n = 0), void 0 !== r && void 0 === l && (l = r, u = i), void 0 === r && void 0 === l && (l = h.width, u = h.height);
						for (var w, S = this.ctx.transform.decompose(), j = D(S.rotate.shx), N = new c, k = (N = (N = (N = N.multiply(S.translate)).multiply(S.skew)).multiply(S.scale)).applyToRectangle(new s(a - t * p, o - n * v, r * d, i * f)), A = g.call(this, k), L = [], P = 0; P < A.length; P += 1) - 1 === L.indexOf(A[P]) && L.push(A[P]);
						if (b(L), this.autoPaging)
							for (var I = L[0], C = L[L.length - 1], _ = I; _ < C + 1; _++) {
								this.pdf.setPage(_);
								var O = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
									T = 1 === _ ? this.posY + this.margin[0] : this.margin[0],
									E = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
									F = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
									R = 1 === _ ? 0 : E + (_ - 2) * F;
								if (0 !== this.ctx.clip_path.length) {
									var M = this.path;
									w = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(w, this.posX + this.margin[3], -R + T + this.ctx.prevPageLastElemOffset), x.call(this, "fill", !0), this.path = M
								}
								var B = JSON.parse(JSON.stringify(k));
								B = y([B], this.posX + this.margin[3], -R + T + this.ctx.prevPageLastElemOffset)[0];
								var U = (_ > I || _ < C) && m.call(this);
								U && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], O, F, null).clip().discardPath()), this.pdf.addImage(e, "JPEG", B.x, B.y, B.w, B.h, null, null, j), U && this.pdf.restoreGraphicsState()
							} else this.pdf.addImage(e, "JPEG", k.x, k.y, k.w, k.h, null, null, j)
					};
					var g = function(e, t, n) {
							var r = [];
							t = t || this.pdf.internal.pageSize.width, n = n || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
							var i = this.posY + this.ctx.prevPageLastElemOffset;
							switch (e.type) {
								default:
								case "mt":
								case "lt":
									r.push(Math.floor((e.y + i) / n) + 1);
									break;
								case "arc":
									r.push(Math.floor((e.y + i - e.radius) / n) + 1), r.push(Math.floor((e.y + i + e.radius) / n) + 1);
									break;
								case "qct":
									var a = E(this.ctx.lastPoint.x, this.ctx.lastPoint.y, e.x1, e.y1, e.x, e.y);
									r.push(Math.floor((a.y + i) / n) + 1), r.push(Math.floor((a.y + a.h + i) / n) + 1);
									break;
								case "bct":
									var o = F(this.ctx.lastPoint.x, this.ctx.lastPoint.y, e.x1, e.y1, e.x2, e.y2, e.x, e.y);
									r.push(Math.floor((o.y + i) / n) + 1), r.push(Math.floor((o.y + o.h + i) / n) + 1);
									break;
								case "rect":
									r.push(Math.floor((e.y + i) / n) + 1), r.push(Math.floor((e.y + e.h + i) / n) + 1)
							}
							for (var s = 0; s < r.length; s += 1)
								for (; this.pdf.internal.getNumberOfPages() < r[s];) v.call(this);
							return r
						},
						v = function() {
							var e = this.fillStyle,
								t = this.strokeStyle,
								n = this.font,
								r = this.lineCap,
								i = this.lineWidth,
								a = this.lineJoin;
							this.pdf.addPage(), this.fillStyle = e, this.strokeStyle = t, this.font = n, this.lineCap = r, this.lineWidth = i, this.lineJoin = a
						},
						y = function(e, t, n) {
							for (var r = 0; r < e.length; r++) switch (e[r].type) {
								case "bct":
									e[r].x2 += t, e[r].y2 += n;
								case "qct":
									e[r].x1 += t, e[r].y1 += n;
								default:
									e[r].x += t, e[r].y += n
							}
							return e
						},
						b = function(e) {
							return e.sort((function(e, t) {
								return e - t
							}))
						},
						w = function(e, t) {
							for (var n, r, i = this.fillStyle, a = this.strokeStyle, o = this.lineCap, s = this.lineWidth, c = Math.abs(s * this.ctx.transform.scaleX), l = this.lineJoin, u = JSON.parse(JSON.stringify(this.path)), h = JSON.parse(JSON.stringify(this.path)), d = [], f = 0; f < h.length; f++)
								if (void 0 !== h[f].x)
									for (var p = g.call(this, h[f]), w = 0; w < p.length; w += 1) - 1 === d.indexOf(p[w]) && d.push(p[w]);
							for (var S = 0; S < d.length; S++)
								for (; this.pdf.internal.getNumberOfPages() < d[S];) v.call(this);
							if (b(d), this.autoPaging)
								for (var j = d[0], N = d[d.length - 1], k = j; k < N + 1; k++) {
									this.pdf.setPage(k), this.fillStyle = i, this.strokeStyle = a, this.lineCap = o, this.lineWidth = c, this.lineJoin = l;
									var A = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
										L = 1 === k ? this.posY + this.margin[0] : this.margin[0],
										P = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
										I = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
										C = 1 === k ? 0 : P + (k - 2) * I;
									if (0 !== this.ctx.clip_path.length) {
										var _ = this.path;
										n = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(n, this.posX + this.margin[3], -C + L + this.ctx.prevPageLastElemOffset), x.call(this, e, !0), this.path = _
									}
									if (r = JSON.parse(JSON.stringify(u)), this.path = y(r, this.posX + this.margin[3], -C + L + this.ctx.prevPageLastElemOffset), !1 === t || 0 === k) {
										var O = (k > j || k < N) && m.call(this);
										O && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], A, I, null).clip().discardPath()), x.call(this, e, t), O && this.pdf.restoreGraphicsState()
									}
									this.lineWidth = s
								} else this.lineWidth = c, x.call(this, e, t), this.lineWidth = s;
							this.path = u
						},
						x = function(e, t) {
							if (("stroke" !== e || t || !p.call(this)) && ("stroke" === e || t || !f.call(this))) {
								for (var n, r, i = [], a = this.path, o = 0; o < a.length; o++) {
									var s = a[o];
									switch (s.type) {
										case "begin":
											i.push({
												begin: !0
											});
											break;
										case "close":
											i.push({
												close: !0
											});
											break;
										case "mt":
											i.push({
												start: s,
												deltas: [],
												abs: []
											});
											break;
										case "lt":
											var c = i.length;
											if (a[o - 1] && !isNaN(a[o - 1].x) && (n = [s.x - a[o - 1].x, s.y - a[o - 1].y], c > 0))
												for (; c >= 0; c--)
													if (!0 !== i[c - 1].close && !0 !== i[c - 1].begin) {
														i[c - 1].deltas.push(n), i[c - 1].abs.push(s);
														break
													} break;
										case "bct":
											n = [s.x1 - a[o - 1].x, s.y1 - a[o - 1].y, s.x2 - a[o - 1].x, s.y2 - a[o - 1].y, s.x - a[o - 1].x, s.y - a[o - 1].y], i[i.length - 1].deltas.push(n);
											break;
										case "qct":
											var l = a[o - 1].x + 2 / 3 * (s.x1 - a[o - 1].x),
												u = a[o - 1].y + 2 / 3 * (s.y1 - a[o - 1].y),
												h = s.x + 2 / 3 * (s.x1 - s.x),
												d = s.y + 2 / 3 * (s.y1 - s.y),
												m = s.x,
												g = s.y;
											n = [l - a[o - 1].x, u - a[o - 1].y, h - a[o - 1].x, d - a[o - 1].y, m - a[o - 1].x, g - a[o - 1].y], i[i.length - 1].deltas.push(n);
											break;
										case "arc":
											i.push({
												deltas: [],
												abs: [],
												arc: !0
											}), Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(s)
									}
								}
								r = t ? null : "stroke" === e ? "stroke" : "fill";
								for (var v = !1, y = 0; y < i.length; y++)
									if (i[y].arc)
										for (var b = i[y].abs, w = 0; w < b.length; w++) {
											var x = b[w];
											"arc" === x.type ? N.call(this, x.x, x.y, x.radius, x.startAngle, x.endAngle, x.counterclockwise, void 0, t, !v) : I.call(this, x.x, x.y), v = !0
										} else if (!0 === i[y].close) this.pdf.internal.out("h"), v = !1;
										else if (!0 !== i[y].begin) {
									var S = i[y].start.x,
										j = i[y].start.y;
									C.call(this, i[y].deltas, S, j), v = !0
								}
								r && k.call(this, r), t && A.call(this)
							}
						},
						S = function(e) {
							var t = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
								n = t * (this.pdf.internal.getLineHeightFactor() - 1);
							switch (this.ctx.textBaseline) {
								case "bottom":
									return e - n;
								case "top":
									return e + t - n;
								case "hanging":
									return e + t - 2 * n;
								case "middle":
									return e + t / 2 - n;
								default:
									return e
							}
						},
						j = function(e) {
							return e + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1)
						};
					h.prototype.createLinearGradient = function() {
						var e = function() {};
						return e.colorStops = [], e.addColorStop = function(e, t) {
							this.colorStops.push([e, t])
						}, e.getColor = function() {
							return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1]
						}, e.isCanvasGradient = !0, e
					}, h.prototype.createPattern = function() {
						return this.createLinearGradient()
					}, h.prototype.createRadialGradient = function() {
						return this.createLinearGradient()
					};
					var N = function(e, t, n, r, i, a, o, s, c) {
							for (var l = O.call(this, n, r, i, a), u = 0; u < l.length; u++) {
								var h = l[u];
								0 === u && (c ? L.call(this, h.x1 + e, h.y1 + t) : I.call(this, h.x1 + e, h.y1 + t)), _.call(this, e, t, h.x2, h.y2, h.x3, h.y3, h.x4, h.y4)
							}
							s ? A.call(this) : k.call(this, o)
						},
						k = function(e) {
							switch (e) {
								case "stroke":
									this.pdf.internal.out("S");
									break;
								case "fill":
									this.pdf.internal.out("f")
							}
						},
						A = function() {
							this.pdf.clip(), this.pdf.discardPath()
						},
						L = function(e, t) {
							this.pdf.internal.out(n(e) + " " + r(t) + " m")
						},
						P = function(e) {
							var t;
							switch (e.align) {
								case "right":
								case "end":
									t = "right";
									break;
								case "center":
									t = "center";
									break;
								default:
									t = "left"
							}
							var n = this.pdf.getTextDimensions(e.text),
								r = S.call(this, e.y),
								i = j.call(this, r) - n.h,
								a = this.ctx.transform.applyToPoint(new o(e.x, r)),
								l = this.ctx.transform.decompose(),
								u = new c;
							u = (u = (u = u.multiply(l.translate)).multiply(l.skew)).multiply(l.scale);
							for (var h, d, f, p = this.ctx.transform.applyToRectangle(new s(e.x, r, n.w, n.h)), v = u.applyToRectangle(new s(e.x, i, n.w, n.h)), w = g.call(this, v), N = [], k = 0; k < w.length; k += 1) - 1 === N.indexOf(w[k]) && N.push(w[k]);
							if (b(N), this.autoPaging)
								for (var A = N[0], L = N[N.length - 1], P = A; P < L + 1; P++) {
									this.pdf.setPage(P);
									var I = 1 === P ? this.posY + this.margin[0] : this.margin[0],
										C = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
										_ = this.pdf.internal.pageSize.height - this.margin[2],
										O = _ - this.margin[0],
										T = this.pdf.internal.pageSize.width - this.margin[1],
										D = T - this.margin[3],
										E = 1 === P ? 0 : C + (P - 2) * O;
									if (0 !== this.ctx.clip_path.length) {
										var F = this.path;
										h = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(h, this.posX + this.margin[3], -1 * E + I), x.call(this, "fill", !0), this.path = F
									}
									var R = y([JSON.parse(JSON.stringify(v))], this.posX + this.margin[3], -E + I + this.ctx.prevPageLastElemOffset)[0];
									e.scale >= .01 && (d = this.pdf.internal.getFontSize(), this.pdf.setFontSize(d * e.scale), f = this.lineWidth, this.lineWidth = f * e.scale);
									var M = "text" !== this.autoPaging;
									if (M || R.y + R.h <= _) {
										if (M || R.y >= I && R.x <= T) {
											var B = M ? e.text : this.pdf.splitTextToSize(e.text, e.maxWidth || T - R.x)[0],
												U = y([JSON.parse(JSON.stringify(p))], this.posX + this.margin[3], -E + I + this.ctx.prevPageLastElemOffset)[0],
												q = M && (P > A || P < L) && m.call(this);
											q && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], D, O, null).clip().discardPath()), this.pdf.text(B, U.x, U.y, {
												angle: e.angle,
												align: t,
												renderingMode: e.renderingMode
											}), q && this.pdf.restoreGraphicsState()
										}
									} else R.y < _ && (this.ctx.prevPageLastElemOffset += _ - R.y);
									e.scale >= .01 && (this.pdf.setFontSize(d), this.lineWidth = f)
								} else e.scale >= .01 && (d = this.pdf.internal.getFontSize(), this.pdf.setFontSize(d * e.scale), f = this.lineWidth, this.lineWidth = f * e.scale), this.pdf.text(e.text, a.x + this.posX, a.y + this.posY, {
									angle: e.angle,
									align: t,
									renderingMode: e.renderingMode,
									maxWidth: e.maxWidth
								}), e.scale >= .01 && (this.pdf.setFontSize(d), this.lineWidth = f)
						},
						I = function(e, t, i, a) {
							i = i || 0, a = a || 0, this.pdf.internal.out(n(e + i) + " " + r(t + a) + " l")
						},
						C = function(e, t, n) {
							return this.pdf.lines(e, t, n, null, null)
						},
						_ = function(e, n, r, o, s, c, l, u) {
							this.pdf.internal.out([t(i(r + e)), t(a(o + n)), t(i(s + e)), t(a(c + n)), t(i(l + e)), t(a(u + n)), "c"].join(" "))
						},
						O = function(e, t, n, r) {
							for (var i = 2 * Math.PI, a = Math.PI / 2; t > n;) t -= i;
							var o = Math.abs(n - t);
							o < i && r && (o = i - o);
							for (var s = [], c = r ? -1 : 1, l = t; o > 1e-5;) {
								var u = l + c * Math.min(o, a);
								s.push(T.call(this, e, l, u)), o -= Math.abs(u - l), l = u
							}
							return s
						},
						T = function(e, t, n) {
							var r = (n - t) / 2,
								i = e * Math.cos(r),
								a = e * Math.sin(r),
								o = i,
								s = -a,
								c = o * o + s * s,
								l = c + o * i + s * a,
								u = 4 / 3 * (Math.sqrt(2 * c * l) - l) / (o * a - s * i),
								h = o - u * s,
								d = s + u * o,
								f = h,
								p = -d,
								m = r + t,
								g = Math.cos(m),
								v = Math.sin(m);
							return {
								x1: e * Math.cos(t),
								y1: e * Math.sin(t),
								x2: h * g - d * v,
								y2: h * v + d * g,
								x3: f * g - p * v,
								y3: f * v + p * g,
								x4: e * Math.cos(n),
								y4: e * Math.sin(n)
							}
						},
						D = function(e) {
							return 180 * e / Math.PI
						},
						E = function(e, t, n, r, i, a) {
							var o = e + .5 * (n - e),
								c = t + .5 * (r - t),
								l = i + .5 * (n - i),
								u = a + .5 * (r - a),
								h = Math.min(e, i, o, l),
								d = Math.max(e, i, o, l),
								f = Math.min(t, a, c, u),
								p = Math.max(t, a, c, u);
							return new s(h, f, d - h, p - f)
						},
						F = function(e, t, n, r, i, a, o, c) {
							var l, u, h, d, f, p, m, g, v, y, b, w, x, S, j = n - e,
								N = r - t,
								k = i - n,
								A = a - r,
								L = o - i,
								P = c - a;
							for (u = 0; u < 41; u++) v = (m = (h = e + (l = u / 40) * j) + l * ((f = n + l * k) - h)) + l * (f + l * (i + l * L - f) - m), y = (g = (d = t + l * N) + l * ((p = r + l * A) - d)) + l * (p + l * (a + l * P - p) - g), 0 == u ? (b = v, w = y, x = v, S = y) : (b = Math.min(b, v), w = Math.min(w, y), x = Math.max(x, v), S = Math.max(S, y));
							return new s(Math.round(b), Math.round(w), Math.round(x - b), Math.round(S - w))
						},
						R = function() {
							if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
								var e, t, n = (e = this.ctx.lineDash, t = this.ctx.lineDashOffset, JSON.stringify({
									lineDash: e,
									lineDashOffset: t
								}));
								this.prevLineDash !== n && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = n)
							}
						}
				}(Qi.API),
				function(e) {
					var t = function(e) {
							var t, n, r, i, a, o, s, c, l, u;
							for (/[^\x00-\xFF]/.test(e), n = [], r = 0, i = (e += t = "\0\0\0\0".slice(e.length % 4 || 4)).length; i > r; r += 4) 0 !== (a = (e.charCodeAt(r) << 24) + (e.charCodeAt(r + 1) << 16) + (e.charCodeAt(r + 2) << 8) + e.charCodeAt(r + 3)) ? (o = (a = ((a = ((a = ((a = (a - (u = a % 85)) / 85) - (l = a % 85)) / 85) - (c = a % 85)) / 85) - (s = a % 85)) / 85) % 85, n.push(o + 33, s + 33, c + 33, l + 33, u + 33)) : n.push(122);
							return function(e, t) {
								for (var n = t; n > 0; n--) e.pop()
							}(n, t.length), String.fromCharCode.apply(String, n) + "~>"
						},
						n = function(e) {
							var t, n, r, i, a, o = String,
								s = "length",
								c = 255,
								l = "charCodeAt",
								u = "slice",
								h = "replace";
							for (e[u](-2), e = e[u](0, -2)[h](/\s/g, "")[h]("z", "!!!!!"), r = [], i = 0, a = (e += t = "uuuuu" [u](e[s] % 5 || 5))[s]; a > i; i += 5) n = 52200625 * (e[l](i) - 33) + 614125 * (e[l](i + 1) - 33) + 7225 * (e[l](i + 2) - 33) + 85 * (e[l](i + 3) - 33) + (e[l](i + 4) - 33), r.push(c & n >> 24, c & n >> 16, c & n >> 8, c & n);
							return function(e, t) {
								for (var n = t; n > 0; n--) e.pop()
							}(r, t[s]), o.fromCharCode.apply(o, r)
						},
						r = function(e) {
							var t = new RegExp(/^([0-9A-Fa-f]{2})+$/);
							if (-1 !== (e = e.replace(/\s/g, "")).indexOf(">") && (e = e.substr(0, e.indexOf(">"))), e.length % 2 && (e += "0"), !1 === t.test(e)) return "";
							for (var n = "", r = 0; r < e.length; r += 2) n += String.fromCharCode("0x" + (e[r] + e[r + 1]));
							return n
						},
						i = function(e) {
							for (var t = new Uint8Array(e.length), n = e.length; n--;) t[n] = e.charCodeAt(n);
							return (t = (0, bi.iZ)(t)).reduce((function(e, t) {
								return e + String.fromCharCode(t)
							}), "")
						};
					e.processDataByFilters = function(e, a) {
						var o = 0,
							s = e || "",
							c = [];
						for ("string" == typeof(a = a || []) && (a = [a]), o = 0; o < a.length; o += 1) switch (a[o]) {
							case "ASCII85Decode":
							case "/ASCII85Decode":
								s = n(s), c.push("/ASCII85Encode");
								break;
							case "ASCII85Encode":
							case "/ASCII85Encode":
								s = t(s), c.push("/ASCII85Decode");
								break;
							case "ASCIIHexDecode":
							case "/ASCIIHexDecode":
								s = r(s), c.push("/ASCIIHexEncode");
								break;
							case "ASCIIHexEncode":
							case "/ASCIIHexEncode":
								s = s.split("").map((function(e) {
									return ("0" + e.charCodeAt().toString(16)).slice(-2)
								})).join("") + ">", c.push("/ASCIIHexDecode");
								break;
							case "FlateEncode":
							case "/FlateEncode":
								s = i(s), c.push("/FlateDecode");
								break;
							default:
								throw new Error('The filter: "' + a[o] + '" is not implemented')
						}
						return {
							data: s,
							reverseChain: c.reverse().join(" ")
						}
					}
				}(Qi.API),
				function(e) {
					e.loadFile = function(e, t, n) {
						return function(e, t, n) {
							t = !1 !== t, n = "function" == typeof n ? n : function() {};
							var r = void 0;
							try {
								r = function(e, t, n) {
									var r = new XMLHttpRequest,
										i = 0,
										a = function(e) {
											var t = e.length,
												n = [],
												r = String.fromCharCode;
											for (i = 0; i < t; i += 1) n.push(r(255 & e.charCodeAt(i)));
											return n.join("")
										};
									if (r.open("GET", e, !t), r.overrideMimeType("text/plain; charset=x-user-defined"), !1 === t && (r.onload = function() {
											200 === r.status ? n(a(this.responseText)) : n(void 0)
										}), r.send(null), t && 200 === r.status) return a(r.responseText)
								}(e, t, n)
							} catch (e) {}
							return r
						}(e, t, n)
					}, e.loadImageFile = e.loadFile
				}(Qi.API),
				function(e) {
					function t() {
						return (wi.html2canvas ? Promise.resolve(wi.html2canvas) : n.e(120).then(n.t.bind(n, 61120, 23))).catch((function(e) {
							return Promise.reject(new Error("Could not load html2canvas: " + e))
						})).then((function(e) {
							return e.default ? e.default : e
						}))
					}

					function r() {
						return (wi.DOMPurify ? Promise.resolve(wi.DOMPurify) : n.e(856).then(n.t.bind(n, 27856, 23))).catch((function(e) {
							return Promise.reject(new Error("Could not load dompurify: " + e))
						})).then((function(e) {
							return e.default ? e.default : e
						}))
					}
					var i = function(e) {
							var t = (0, yi.Z)(e);
							return "undefined" === t ? "undefined" : "string" === t || e instanceof String ? "string" : "number" === t || e instanceof Number ? "number" : "function" === t || e instanceof Function ? "function" : e && e.constructor === Array ? "array" : e && 1 === e.nodeType ? "element" : "object" === t ? "object" : "unknown"
						},
						a = function(e, t) {
							var n = document.createElement(e);
							for (var r in t.className && (n.className = t.className), t.innerHTML && t.dompurify && (n.innerHTML = t.dompurify.sanitize(t.innerHTML)), t.style) n.style[r] = t.style[r];
							return n
						},
						o = function e(t) {
							var n = Object.assign(e.convert(Promise.resolve()), JSON.parse(JSON.stringify(e.template))),
								r = e.convert(Promise.resolve(), n);
							return (r = r.setProgress(1, e, 1, [e])).set(t)
						};
					(o.prototype = Object.create(Promise.prototype)).constructor = o, o.convert = function(e, t) {
						return e.__proto__ = t || o.prototype, e
					}, o.template = {
						prop: {
							src: null,
							container: null,
							overlay: null,
							canvas: null,
							img: null,
							pdf: null,
							pageSize: null,
							callback: function() {}
						},
						progress: {
							val: 0,
							state: null,
							n: 0,
							stack: []
						},
						opt: {
							filename: "file.pdf",
							margin: [0, 0, 0, 0],
							enableLinks: !0,
							x: 0,
							y: 0,
							html2canvas: {},
							jsPDF: {},
							backgroundColor: "transparent"
						}
					}, o.prototype.from = function(e, t) {
						return this.then((function() {
							switch (t = t || function(e) {
								switch (i(e)) {
									case "string":
										return "string";
									case "element":
										return "canvas" === e.nodeName.toLowerCase() ? "canvas" : "element";
									default:
										return "unknown"
								}
							}(e)) {
								case "string":
									return this.then(r).then((function(t) {
										return this.set({
											src: a("div", {
												innerHTML: e,
												dompurify: t
											})
										})
									}));
								case "element":
									return this.set({
										src: e
									});
								case "canvas":
									return this.set({
										canvas: e
									});
								case "img":
									return this.set({
										img: e
									});
								default:
									return this.error("Unknown source type.")
							}
						}))
					}, o.prototype.to = function(e) {
						switch (e) {
							case "container":
								return this.toContainer();
							case "canvas":
								return this.toCanvas();
							case "img":
								return this.toImg();
							case "pdf":
								return this.toPdf();
							default:
								return this.error("Invalid target.")
						}
					}, o.prototype.toContainer = function() {
						return this.thenList([function() {
							return this.prop.src || this.error("Cannot duplicate - no source HTML.")
						}, function() {
							return this.prop.pageSize || this.setPageSize()
						}]).then((function() {
							var e = {
									position: "relative",
									display: "inline-block",
									width: ("number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
									left: 0,
									right: 0,
									top: 0,
									margin: "auto",
									backgroundColor: this.opt.backgroundColor
								},
								t = function e(t, n) {
									for (var r = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), i = t.firstChild; i; i = i.nextSibling) !0 !== n && 1 === i.nodeType && "SCRIPT" === i.nodeName || r.appendChild(e(i, n));
									return 1 === t.nodeType && ("CANVAS" === t.nodeName ? (r.width = t.width, r.height = t.height, r.getContext("2d").drawImage(t, 0, 0)) : "TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName || (r.value = t.value), r.addEventListener("load", (function() {
										r.scrollTop = t.scrollTop, r.scrollLeft = t.scrollLeft
									}), !0)), r
								}(this.prop.src, this.opt.html2canvas.javascriptEnabled);
							"BODY" === t.tagName && (e.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = a("div", {
								className: "html2pdf__overlay",
								style: {
									position: "fixed",
									overflow: "hidden",
									zIndex: 1e3,
									left: "-100000px",
									right: 0,
									bottom: 0,
									top: 0
								}
							}), this.prop.container = a("div", {
								className: "html2pdf__container",
								style: e
							}), this.prop.container.appendChild(t), this.prop.container.firstChild.appendChild(a("div", {
								style: {
									clear: "both",
									border: "0 none transparent",
									margin: 0,
									padding: 0,
									height: 0
								}
							})), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
						}))
					}, o.prototype.toCanvas = function() {
						var e = [function() {
							return document.body.contains(this.prop.container) || this.toContainer()
						}];
						return this.thenList(e).then(t).then((function(e) {
							var t = Object.assign({}, this.opt.html2canvas);
							return delete t.onrendered, e(this.prop.container, t)
						})).then((function(e) {
							(this.opt.html2canvas.onrendered || function() {})(e), this.prop.canvas = e, document.body.removeChild(this.prop.overlay)
						}))
					}, o.prototype.toContext2d = function() {
						var e = [function() {
							return document.body.contains(this.prop.container) || this.toContainer()
						}];
						return this.thenList(e).then(t).then((function(e) {
							var t = this.opt.jsPDF,
								n = this.opt.fontFaces,
								r = "number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth,
								i = Object.assign({
									async: !0,
									allowTaint: !0,
									scale: r,
									scrollX: this.opt.scrollX || 0,
									scrollY: this.opt.scrollY || 0,
									backgroundColor: "#ffffff",
									imageTimeout: 15e3,
									logging: !0,
									proxy: null,
									removeContainer: !0,
									foreignObjectRendering: !1,
									useCORS: !1
								}, this.opt.html2canvas);
							if (delete i.onrendered, t.context2d.autoPaging = void 0 === this.opt.autoPaging || this.opt.autoPaging, t.context2d.posX = this.opt.x, t.context2d.posY = this.opt.y, t.context2d.margin = this.opt.margin, t.context2d.fontFaces = n, n)
								for (var a = 0; a < n.length; ++a) {
									var o = n[a],
										s = o.src.find((function(e) {
											return "truetype" === e.format
										}));
									s && t.addFont(s.url, o.ref.name, o.ref.style)
								}
							return i.windowHeight = i.windowHeight || 0, i.windowHeight = 0 == i.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : i.windowHeight, t.context2d.save(!0), e(this.prop.container, i)
						})).then((function(e) {
							this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {})(e), this.prop.canvas = e, document.body.removeChild(this.prop.overlay)
						}))
					}, o.prototype.toImg = function() {
						return this.thenList([function() {
							return this.prop.canvas || this.toCanvas()
						}]).then((function() {
							var e = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
							this.prop.img = document.createElement("img"), this.prop.img.src = e
						}))
					}, o.prototype.toPdf = function() {
						return this.thenList([function() {
							return this.toContext2d()
						}]).then((function() {
							this.prop.pdf = this.prop.pdf || this.opt.jsPDF
						}))
					}, o.prototype.output = function(e, t, n) {
						return "img" === (n = n || "pdf").toLowerCase() || "image" === n.toLowerCase() ? this.outputImg(e, t) : this.outputPdf(e, t)
					}, o.prototype.outputPdf = function(e, t) {
						return this.thenList([function() {
							return this.prop.pdf || this.toPdf()
						}]).then((function() {
							return this.prop.pdf.output(e, t)
						}))
					}, o.prototype.outputImg = function(e) {
						return this.thenList([function() {
							return this.prop.img || this.toImg()
						}]).then((function() {
							switch (e) {
								case void 0:
								case "img":
									return this.prop.img;
								case "datauristring":
								case "dataurlstring":
									return this.prop.img.src;
								case "datauri":
								case "dataurl":
									return document.location.href = this.prop.img.src;
								default:
									throw 'Image output type "' + e + '" is not supported.'
							}
						}))
					}, o.prototype.save = function(e) {
						return this.thenList([function() {
							return this.prop.pdf || this.toPdf()
						}]).set(e ? {
							filename: e
						} : null).then((function() {
							this.prop.pdf.save(this.opt.filename)
						}))
					}, o.prototype.doCallback = function() {
						return this.thenList([function() {
							return this.prop.pdf || this.toPdf()
						}]).then((function() {
							this.prop.callback(this.prop.pdf)
						}))
					}, o.prototype.set = function(e) {
						if ("object" !== i(e)) return this;
						var t = Object.keys(e || {}).map((function(t) {
							if (t in o.template.prop) return function() {
								this.prop[t] = e[t]
							};
							switch (t) {
								case "margin":
									return this.setMargin.bind(this, e.margin);
								case "jsPDF":
									return function() {
										return this.opt.jsPDF = e.jsPDF, this.setPageSize()
									};
								case "pageSize":
									return this.setPageSize.bind(this, e.pageSize);
								default:
									return function() {
										this.opt[t] = e[t]
									}
							}
						}), this);
						return this.then((function() {
							return this.thenList(t)
						}))
					}, o.prototype.get = function(e, t) {
						return this.then((function() {
							var n = e in o.template.prop ? this.prop[e] : this.opt[e];
							return t ? t(n) : n
						}))
					}, o.prototype.setMargin = function(e) {
						return this.then((function() {
							switch (i(e)) {
								case "number":
									e = [e, e, e, e];
								case "array":
									if (2 === e.length && (e = [e[0], e[1], e[0], e[1]]), 4 === e.length) break;
								default:
									return this.error("Invalid margin array.")
							}
							this.opt.margin = e
						})).then(this.setPageSize)
					}, o.prototype.setPageSize = function(e) {
						function t(e, t) {
							return Math.floor(e * t / 72 * 96)
						}
						return this.then((function() {
							(e = e || Qi.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (e.inner = {
								width: e.width - this.opt.margin[1] - this.opt.margin[3],
								height: e.height - this.opt.margin[0] - this.opt.margin[2]
							}, e.inner.px = {
								width: t(e.inner.width, e.k),
								height: t(e.inner.height, e.k)
							}, e.inner.ratio = e.inner.height / e.inner.width), this.prop.pageSize = e
						}))
					}, o.prototype.setProgress = function(e, t, n, r) {
						return null != e && (this.progress.val = e), null != t && (this.progress.state = t), null != n && (this.progress.n = n), null != r && (this.progress.stack = r), this.progress.ratio = this.progress.val / this.progress.state, this
					}, o.prototype.updateProgress = function(e, t, n, r) {
						return this.setProgress(e ? this.progress.val + e : null, t || null, n ? this.progress.n + n : null, r ? this.progress.stack.concat(r) : null)
					}, o.prototype.then = function(e, t) {
						var n = this;
						return this.thenCore(e, t, (function(e, t) {
							return n.updateProgress(null, null, 1, [e]), Promise.prototype.then.call(this, (function(t) {
								return n.updateProgress(null, e), t
							})).then(e, t).then((function(e) {
								return n.updateProgress(1), e
							}))
						}))
					}, o.prototype.thenCore = function(e, t, n) {
						n = n || Promise.prototype.then, e && (e = e.bind(this)), t && (t = t.bind(this));
						var r = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? this : o.convert(Object.assign({}, this), Promise.prototype),
							i = n.call(r, e, t);
						return o.convert(i, this.__proto__)
					}, o.prototype.thenExternal = function(e, t) {
						return Promise.prototype.then.call(this, e, t)
					}, o.prototype.thenList = function(e) {
						var t = this;
						return e.forEach((function(e) {
							t = t.thenCore(e)
						})), t
					}, o.prototype.catch = function(e) {
						e && (e = e.bind(this));
						var t = Promise.prototype.catch.call(this, e);
						return o.convert(t, this)
					}, o.prototype.catchExternal = function(e) {
						return Promise.prototype.catch.call(this, e)
					}, o.prototype.error = function(e) {
						return this.then((function() {
							throw new Error(e)
						}))
					}, o.prototype.using = o.prototype.set, o.prototype.saveAs = o.prototype.save, o.prototype.export = o.prototype.output, o.prototype.run = o.prototype.then, Qi.getPageSize = function(e, t, n) {
						if ("object" === (0, yi.Z)(e)) {
							var r = e;
							e = r.orientation, t = r.unit || t, n = r.format || n
						}
						t = t || "mm", n = n || "a4", e = ("" + (e || "P")).toLowerCase();
						var i, a = ("" + n).toLowerCase(),
							o = {
								a0: [2383.94, 3370.39],
								a1: [1683.78, 2383.94],
								a2: [1190.55, 1683.78],
								a3: [841.89, 1190.55],
								a4: [595.28, 841.89],
								a5: [419.53, 595.28],
								a6: [297.64, 419.53],
								a7: [209.76, 297.64],
								a8: [147.4, 209.76],
								a9: [104.88, 147.4],
								a10: [73.7, 104.88],
								b0: [2834.65, 4008.19],
								b1: [2004.09, 2834.65],
								b2: [1417.32, 2004.09],
								b3: [1000.63, 1417.32],
								b4: [708.66, 1000.63],
								b5: [498.9, 708.66],
								b6: [354.33, 498.9],
								b7: [249.45, 354.33],
								b8: [175.75, 249.45],
								b9: [124.72, 175.75],
								b10: [87.87, 124.72],
								c0: [2599.37, 3676.54],
								c1: [1836.85, 2599.37],
								c2: [1298.27, 1836.85],
								c3: [918.43, 1298.27],
								c4: [649.13, 918.43],
								c5: [459.21, 649.13],
								c6: [323.15, 459.21],
								c7: [229.61, 323.15],
								c8: [161.57, 229.61],
								c9: [113.39, 161.57],
								c10: [79.37, 113.39],
								dl: [311.81, 623.62],
								letter: [612, 792],
								"government-letter": [576, 756],
								legal: [612, 1008],
								"junior-legal": [576, 360],
								ledger: [1224, 792],
								tabloid: [792, 1224],
								"credit-card": [153, 243]
							};
						switch (t) {
							case "pt":
								i = 1;
								break;
							case "mm":
								i = 72 / 25.4;
								break;
							case "cm":
								i = 72 / 2.54;
								break;
							case "in":
								i = 72;
								break;
							case "px":
								i = .75;
								break;
							case "pc":
							case "em":
								i = 12;
								break;
							case "ex":
								i = 6;
								break;
							default:
								throw "Invalid unit: " + t
						}
						var s, c = 0,
							l = 0;
						if (o.hasOwnProperty(a)) c = o[a][1] / i, l = o[a][0] / i;
						else try {
							c = n[1], l = n[0]
						} catch (e) {
							throw new Error("Invalid format: " + n)
						}
						if ("p" === e || "portrait" === e) e = "p", l > c && (s = l, l = c, c = s);
						else {
							if ("l" !== e && "landscape" !== e) throw "Invalid orientation: " + e;
							e = "l", c > l && (s = l, l = c, c = s)
						}
						return {
							width: l,
							height: c,
							unit: t,
							k: i,
							orientation: e
						}
					}, e.html = function(e, t) {
						(t = t || {}).callback = t.callback || function() {}, t.html2canvas = t.html2canvas || {}, t.html2canvas.canvas = t.html2canvas.canvas || this.canvas, t.jsPDF = t.jsPDF || this, t.fontFaces = t.fontFaces ? t.fontFaces.map(Ka) : null;
						var n = new o(t);
						return t.worker ? n : n.from(e).doCallback()
					}
				}(Qi.API), Qi.API.addJS = function(e) {
						return ao = e, this.internal.events.subscribe("postPutResources", (function() {
							ro = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (ro + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), io = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + ao + ")"), this.internal.out(">>"), this.internal.out("endobj")
						})), this.internal.events.subscribe("putCatalog", (function() {
							void 0 !== ro && void 0 !== io && this.internal.out("/Names <</JavaScript " + ro + " 0 R>>")
						})), this
					},
					function(e) {
						var t;
						e.events.push(["postPutResources", function() {
							var e = this,
								n = /^(\d+) 0 obj$/;
							if (this.outline.root.children.length > 0)
								for (var r = e.outline.render().split(/\r\n/), i = 0; i < r.length; i++) {
									var a = r[i],
										o = n.exec(a);
									if (null != o) {
										var s = o[1];
										e.internal.newObjectDeferredBegin(s, !1)
									}
									e.internal.write(a)
								}
							if (this.outline.createNamedDestinations) {
								var c = this.internal.pages.length,
									l = [];
								for (i = 0; i < c; i++) {
									var u = e.internal.newObject();
									l.push(u);
									var h = e.internal.getPageInfo(i + 1);
									e.internal.write("<< /D[" + h.objId + " 0 R /XYZ null null null]>> endobj")
								}
								var d = e.internal.newObject();
								for (e.internal.write("<< /Names [ "), i = 0; i < l.length; i++) e.internal.write("(page_" + (i + 1) + ")" + l[i] + " 0 R");
								e.internal.write(" ] >>", "endobj"), t = e.internal.newObject(), e.internal.write("<< /Dests " + d + " 0 R"), e.internal.write(">>", "endobj")
							}
						}]), e.events.push(["putCatalog", function() {
							this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + t + " 0 R"))
						}]), e.events.push(["initialized", function() {
							var e = this;
							e.outline = {
								createNamedDestinations: !1,
								root: {
									children: []
								}
							}, e.outline.add = function(e, t, n) {
								var r = {
									title: t,
									options: n,
									children: []
								};
								return null == e && (e = this.root), e.children.push(r), r
							}, e.outline.render = function() {
								return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = e, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val
							}, e.outline.genIds_r = function(t) {
								t.id = e.internal.newObjectDeferred();
								for (var n = 0; n < t.children.length; n++) this.genIds_r(t.children[n])
							}, e.outline.renderRoot = function(e) {
								this.objStart(e), this.line("/Type /Outlines"), e.children.length > 0 && (this.line("/First " + this.makeRef(e.children[0])), this.line("/Last " + this.makeRef(e.children[e.children.length - 1]))), this.line("/Count " + this.count_r({
									count: 0
								}, e)), this.objEnd()
							}, e.outline.renderItems = function(t) {
								for (var n = this.ctx.pdf.internal.getVerticalCoordinateString, r = 0; r < t.children.length; r++) {
									var i = t.children[r];
									this.objStart(i), this.line("/Title " + this.makeString(i.title)), this.line("/Parent " + this.makeRef(t)), r > 0 && this.line("/Prev " + this.makeRef(t.children[r - 1])), r < t.children.length - 1 && this.line("/Next " + this.makeRef(t.children[r + 1])), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
									var a = this.count = this.count_r({
										count: 0
									}, i);
									if (a > 0 && this.line("/Count " + a), i.options && i.options.pageNumber) {
										var o = e.internal.getPageInfo(i.options.pageNumber);
										this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + n(0) + " 0]")
									}
									this.objEnd()
								}
								for (var s = 0; s < t.children.length; s++) this.renderItems(t.children[s])
							}, e.outline.line = function(e) {
								this.ctx.val += e + "\r\n"
							}, e.outline.makeRef = function(e) {
								return e.id + " 0 R"
							}, e.outline.makeString = function(t) {
								return "(" + e.internal.pdfEscape(t) + ")"
							}, e.outline.objStart = function(e) {
								this.ctx.val += "\r\n" + e.id + " 0 obj\r\n<<\r\n"
							}, e.outline.objEnd = function() {
								this.ctx.val += ">> \r\nendobj\r\n"
							}, e.outline.count_r = function(e, t) {
								for (var n = 0; n < t.children.length; n++) e.count++, this.count_r(e, t.children[n]);
								return e.count
							}
						}])
					}(Qi.API),
					function(e) {
						var t = [192, 193, 194, 195, 196, 197, 198, 199];
						e.processJPEG = function(e, n, r, i, a, o) {
							var s, c = this.decode.DCT_DECODE,
								l = null;
							if ("string" == typeof e || this.__addimage__.isArrayBuffer(e) || this.__addimage__.isArrayBufferView(e)) {
								switch (e = a || e, e = this.__addimage__.isArrayBuffer(e) ? new Uint8Array(e) : e, (s = function(e) {
									for (var n, r = 256 * e.charCodeAt(4) + e.charCodeAt(5), i = e.length, a = {
											width: 0,
											height: 0,
											numcomponents: 1
										}, o = 4; o < i; o += 2) {
										if (o += r, -1 !== t.indexOf(e.charCodeAt(o + 1))) {
											n = 256 * e.charCodeAt(o + 5) + e.charCodeAt(o + 6), a = {
												width: 256 * e.charCodeAt(o + 7) + e.charCodeAt(o + 8),
												height: n,
												numcomponents: e.charCodeAt(o + 9)
											};
											break
										}
										r = 256 * e.charCodeAt(o + 2) + e.charCodeAt(o + 3)
									}
									return a
								}(e = this.__addimage__.isArrayBufferView(e) ? this.__addimage__.arrayBufferToBinaryString(e) : e)).numcomponents) {
									case 1:
										o = this.color_spaces.DEVICE_GRAY;
										break;
									case 4:
										o = this.color_spaces.DEVICE_CMYK;
										break;
									case 3:
										o = this.color_spaces.DEVICE_RGB
								}
								l = {
									data: e,
									width: s.width,
									height: s.height,
									colorSpace: o,
									bitsPerComponent: 8,
									filter: c,
									index: n,
									alias: r
								}
							}
							return l
						}
					}(Qi.API);
				var so, co, lo, uo, ho, fo = function() {
					var e, t, n;

					function r(e) {
						var t, n, r, i, a, o, s, c, l, u, h, d, f, p;
						for (this.data = e, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, o = null;;) {
							switch (t = this.readUInt32(), l = function() {
								var e, t;
								for (t = [], e = 0; e < 4; ++e) t.push(String.fromCharCode(this.data[this.pos++]));
								return t
							}.call(this).join("")) {
								case "IHDR":
									this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
									break;
								case "acTL":
									this.animation = {
										numFrames: this.readUInt32(),
										numPlays: this.readUInt32() || 1 / 0,
										frames: []
									};
									break;
								case "PLTE":
									this.palette = this.read(t);
									break;
								case "fcTL":
									o && this.animation.frames.push(o), this.pos += 4, o = {
										width: this.readUInt32(),
										height: this.readUInt32(),
										xOffset: this.readUInt32(),
										yOffset: this.readUInt32()
									}, a = this.readUInt16(), i = this.readUInt16() || 100, o.delay = 1e3 * a / i, o.disposeOp = this.data[this.pos++], o.blendOp = this.data[this.pos++], o.data = [];
									break;
								case "IDAT":
								case "fdAT":
									for ("fdAT" === l && (this.pos += 4, t -= 4), e = (null != o ? o.data : void 0) || this.imgData, d = 0; 0 <= t ? d < t : d > t; 0 <= t ? ++d : --d) e.push(this.data[this.pos++]);
									break;
								case "tRNS":
									switch (this.transparency = {}, this.colorType) {
										case 3:
											if (r = this.palette.length / 3, this.transparency.indexed = this.read(t), this.transparency.indexed.length > r) throw new Error("More transparent colors than palette size");
											if ((u = r - this.transparency.indexed.length) > 0)
												for (f = 0; 0 <= u ? f < u : f > u; 0 <= u ? ++f : --f) this.transparency.indexed.push(255);
											break;
										case 0:
											this.transparency.grayscale = this.read(t)[0];
											break;
										case 2:
											this.transparency.rgb = this.read(t)
									}
									break;
								case "tEXt":
									s = (h = this.read(t)).indexOf(0), c = String.fromCharCode.apply(String, h.slice(0, s)), this.text[c] = String.fromCharCode.apply(String, h.slice(s + 1));
									break;
								case "IEND":
									return o && this.animation.frames.push(o), this.colors = function() {
										switch (this.colorType) {
											case 0:
											case 3:
											case 4:
												return 1;
											case 2:
											case 6:
												return 3
										}
									}.call(this), this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p, n = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * n, this.colorSpace = function() {
										switch (this.colors) {
											case 1:
												return "DeviceGray";
											case 3:
												return "DeviceRGB"
										}
									}.call(this), void(this.imgData = new Uint8Array(this.imgData));
								default:
									this.pos += t
							}
							if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file")
						}
					}
					r.prototype.read = function(e) {
						var t, n;
						for (n = [], t = 0; 0 <= e ? t < e : t > e; 0 <= e ? ++t : --t) n.push(this.data[this.pos++]);
						return n
					}, r.prototype.readUInt32 = function() {
						return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
					}, r.prototype.readUInt16 = function() {
						return this.data[this.pos++] << 8 | this.data[this.pos++]
					}, r.prototype.decodePixels = function(e) {
						var t = this.pixelBitlength / 8,
							n = new Uint8Array(this.width * this.height * t),
							r = 0,
							i = this;
						if (null == e && (e = this.imgData), 0 === e.length) return new Uint8Array(0);

						function a(a, o, s, c) {
							var l, u, h, d, f, p, m, g, v, y, b, w, x, S, j, N, k, A, L, P, I, C = Math.ceil((i.width - a) / s),
								_ = Math.ceil((i.height - o) / c),
								O = i.width == C && i.height == _;
							for (S = t * C, w = O ? n : new Uint8Array(S * _), p = e.length, x = 0, u = 0; x < _ && r < p;) {
								switch (e[r++]) {
									case 0:
										for (d = k = 0; k < S; d = k += 1) w[u++] = e[r++];
										break;
									case 1:
										for (d = A = 0; A < S; d = A += 1) l = e[r++], f = d < t ? 0 : w[u - t], w[u++] = (l + f) % 256;
										break;
									case 2:
										for (d = L = 0; L < S; d = L += 1) l = e[r++], h = (d - d % t) / t, j = x && w[(x - 1) * S + h * t + d % t], w[u++] = (j + l) % 256;
										break;
									case 3:
										for (d = P = 0; P < S; d = P += 1) l = e[r++], h = (d - d % t) / t, f = d < t ? 0 : w[u - t], j = x && w[(x - 1) * S + h * t + d % t], w[u++] = (l + Math.floor((f + j) / 2)) % 256;
										break;
									case 4:
										for (d = I = 0; I < S; d = I += 1) l = e[r++], h = (d - d % t) / t, f = d < t ? 0 : w[u - t], 0 === x ? j = N = 0 : (j = w[(x - 1) * S + h * t + d % t], N = h && w[(x - 1) * S + (h - 1) * t + d % t]), m = f + j - N, g = Math.abs(m - f), y = Math.abs(m - j), b = Math.abs(m - N), v = g <= y && g <= b ? f : y <= b ? j : N, w[u++] = (l + v) % 256;
										break;
									default:
										throw new Error("Invalid filter algorithm: " + e[r - 1])
								}
								if (!O) {
									var T = ((o + x * c) * i.width + a) * t,
										D = x * S;
									for (d = 0; d < C; d += 1) {
										for (var E = 0; E < t; E += 1) n[T++] = w[D++];
										T += (s - 1) * t
									}
								}
								x++
							}
						}
						return e = (0, bi.HT)(e), 1 == i.interlaceMethod ? (a(0, 0, 8, 8), a(4, 0, 8, 8), a(0, 4, 4, 8), a(2, 0, 4, 4), a(0, 2, 2, 4), a(1, 0, 2, 2), a(0, 1, 1, 2)) : a(0, 0, 1, 1), n
					}, r.prototype.decodePalette = function() {
						var e, t, n, r, i, a, o, s, c;
						for (n = this.palette, a = this.transparency.indexed || [], i = new Uint8Array((a.length || 0) + n.length), r = 0, e = 0, t = o = 0, s = n.length; o < s; t = o += 3) i[r++] = n[t], i[r++] = n[t + 1], i[r++] = n[t + 2], i[r++] = null != (c = a[e++]) ? c : 255;
						return i
					}, r.prototype.copyToImageData = function(e, t) {
						var n, r, i, a, o, s, c, l, u, h, d;
						if (r = this.colors, u = null, n = this.hasAlphaChannel, this.palette.length && (u = null != (d = this._decodedPalette) ? d : this._decodedPalette = this.decodePalette(), r = 4, n = !0), l = (i = e.data || e).length, o = u || t, a = s = 0, 1 === r)
							for (; a < l;) c = u ? 4 * t[a / 4] : s, h = o[c++], i[a++] = h, i[a++] = h, i[a++] = h, i[a++] = n ? o[c++] : 255, s = c;
						else
							for (; a < l;) c = u ? 4 * t[a / 4] : s, i[a++] = o[c++], i[a++] = o[c++], i[a++] = o[c++], i[a++] = n ? o[c++] : 255, s = c
					}, r.prototype.decode = function() {
						var e;
						return e = new Uint8Array(this.width * this.height * 4), this.copyToImageData(e, this.decodePixels()), e
					};
					var i = function() {
						if ("[object Window]" === Object.prototype.toString.call(wi)) {
							try {
								t = wi.document.createElement("canvas"), n = t.getContext("2d")
							} catch (e) {
								return !1
							}
							return !0
						}
						return !1
					};
					return i(), e = function(e) {
						var r;
						if (!0 === i()) return n.width = e.width, n.height = e.height, n.clearRect(0, 0, e.width, e.height), n.putImageData(e, 0, 0), (r = new Image).src = t.toDataURL(), r;
						throw new Error("This method requires a Browser with Canvas-capability.")
					}, r.prototype.decodeFrames = function(t) {
						var n, r, i, a, o, s, c, l;
						if (this.animation) {
							for (l = [], r = o = 0, s = (c = this.animation.frames).length; o < s; r = ++o) n = c[r], i = t.createImageData(n.width, n.height), a = this.decodePixels(new Uint8Array(n.data)), this.copyToImageData(i, a), n.imageData = i, l.push(n.image = e(i));
							return l
						}
					}, r.prototype.renderFrame = function(e, t) {
						var n, r, i;
						return n = (r = this.animation.frames)[t], i = r[t - 1], 0 === t && e.clearRect(0, 0, this.width, this.height), 1 === (null != i ? i.disposeOp : void 0) ? e.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && e.putImageData(i.imageData, i.xOffset, i.yOffset), 0 === n.blendOp && e.clearRect(n.xOffset, n.yOffset, n.width, n.height), e.drawImage(n.image, n.xOffset, n.yOffset)
					}, r.prototype.animate = function(e) {
						var t, n, r, i, a, o, s = this;
						return n = 0, o = this.animation, i = o.numFrames, r = o.frames, a = o.numPlays, (t = function() {
							var o, c;
							if (o = n++ % i, c = r[o], s.renderFrame(e, o), i > 1 && n / i < a) return s.animation._timeout = setTimeout(t, c.delay)
						})()
					}, r.prototype.stopAnimation = function() {
						var e;
						return clearTimeout(null != (e = this.animation) ? e._timeout : void 0)
					}, r.prototype.render = function(e) {
						var t, n;
						return e._png && e._png.stopAnimation(), e._png = this, e.width = this.width, e.height = this.height, t = e.getContext("2d"), this.animation ? (this.decodeFrames(t), this.animate(t)) : (n = t.createImageData(this.width, this.height), this.copyToImageData(n, this.decodePixels()), t.putImageData(n, 0, 0))
					}, r
				}();

				function po(e) {
					var t = 0;
					if (71 !== e[t++] || 73 !== e[t++] || 70 !== e[t++] || 56 !== e[t++] || 56 != (e[t++] + 1 & 253) || 97 !== e[t++]) throw new Error("Invalid GIF 87a/89a header.");
					var n = e[t++] | e[t++] << 8,
						r = e[t++] | e[t++] << 8,
						i = e[t++],
						a = i >> 7,
						o = 1 << 1 + (7 & i);
					e[t++], e[t++];
					var s = null,
						c = null;
					a && (s = t, c = o, t += 3 * o);
					var l = !0,
						u = [],
						h = 0,
						d = null,
						f = 0,
						p = null;
					for (this.width = n, this.height = r; l && t < e.length;) switch (e[t++]) {
						case 33:
							switch (e[t++]) {
								case 255:
									if (11 !== e[t] || 78 == e[t + 1] && 69 == e[t + 2] && 84 == e[t + 3] && 83 == e[t + 4] && 67 == e[t + 5] && 65 == e[t + 6] && 80 == e[t + 7] && 69 == e[t + 8] && 50 == e[t + 9] && 46 == e[t + 10] && 48 == e[t + 11] && 3 == e[t + 12] && 1 == e[t + 13] && 0 == e[t + 16]) t += 14, p = e[t++] | e[t++] << 8, t++;
									else
										for (t += 12;;) {
											if (!((L = e[t++]) >= 0)) throw Error("Invalid block size");
											if (0 === L) break;
											t += L
										}
									break;
								case 249:
									if (4 !== e[t++] || 0 !== e[t + 4]) throw new Error("Invalid graphics extension block.");
									var m = e[t++];
									h = e[t++] | e[t++] << 8, d = e[t++], 0 == (1 & m) && (d = null), f = m >> 2 & 7, t++;
									break;
								case 254:
									for (;;) {
										if (!((L = e[t++]) >= 0)) throw Error("Invalid block size");
										if (0 === L) break;
										t += L
									}
									break;
								default:
									throw new Error("Unknown graphic control label: 0x" + e[t - 1].toString(16))
							}
							break;
						case 44:
							var g = e[t++] | e[t++] << 8,
								v = e[t++] | e[t++] << 8,
								y = e[t++] | e[t++] << 8,
								b = e[t++] | e[t++] << 8,
								w = e[t++],
								x = w >> 6 & 1,
								S = 1 << 1 + (7 & w),
								j = s,
								N = c,
								k = !1;
							w >> 7 && (k = !0, j = t, N = S, t += 3 * S);
							var A = t;
							for (t++;;) {
								var L;
								if (!((L = e[t++]) >= 0)) throw Error("Invalid block size");
								if (0 === L) break;
								t += L
							}
							u.push({
								x: g,
								y: v,
								width: y,
								height: b,
								has_local_palette: k,
								palette_offset: j,
								palette_size: N,
								data_offset: A,
								data_length: t - A,
								transparent_index: d,
								interlaced: !!x,
								delay: h,
								disposal: f
							});
							break;
						case 59:
							l = !1;
							break;
						default:
							throw new Error("Unknown gif block: 0x" + e[t - 1].toString(16))
					}
					this.numFrames = function() {
						return u.length
					}, this.loopCount = function() {
						return p
					}, this.frameInfo = function(e) {
						if (e < 0 || e >= u.length) throw new Error("Frame index out of range.");
						return u[e]
					}, this.decodeAndBlitFrameBGRA = function(t, r) {
						var i = this.frameInfo(t),
							a = i.width * i.height,
							o = new Uint8Array(a);
						mo(e, i.data_offset, o, a);
						var s = i.palette_offset,
							c = i.transparent_index;
						null === c && (c = 256);
						var l = i.width,
							u = n - l,
							h = l,
							d = 4 * (i.y * n + i.x),
							f = 4 * ((i.y + i.height) * n + i.x),
							p = d,
							m = 4 * u;
						!0 === i.interlaced && (m += 4 * n * 7);
						for (var g = 8, v = 0, y = o.length; v < y; ++v) {
							var b = o[v];
							if (0 === h && (h = l, (p += m) >= f && (m = 4 * u + 4 * n * (g - 1), p = d + (l + u) * (g << 1), g >>= 1)), b === c) p += 4;
							else {
								var w = e[s + 3 * b],
									x = e[s + 3 * b + 1],
									S = e[s + 3 * b + 2];
								r[p++] = S, r[p++] = x, r[p++] = w, r[p++] = 255
							}--h
						}
					}, this.decodeAndBlitFrameRGBA = function(t, r) {
						var i = this.frameInfo(t),
							a = i.width * i.height,
							o = new Uint8Array(a);
						mo(e, i.data_offset, o, a);
						var s = i.palette_offset,
							c = i.transparent_index;
						null === c && (c = 256);
						var l = i.width,
							u = n - l,
							h = l,
							d = 4 * (i.y * n + i.x),
							f = 4 * ((i.y + i.height) * n + i.x),
							p = d,
							m = 4 * u;
						!0 === i.interlaced && (m += 4 * n * 7);
						for (var g = 8, v = 0, y = o.length; v < y; ++v) {
							var b = o[v];
							if (0 === h && (h = l, (p += m) >= f && (m = 4 * u + 4 * n * (g - 1), p = d + (l + u) * (g << 1), g >>= 1)), b === c) p += 4;
							else {
								var w = e[s + 3 * b],
									x = e[s + 3 * b + 1],
									S = e[s + 3 * b + 2];
								r[p++] = w, r[p++] = x, r[p++] = S, r[p++] = 255
							}--h
						}
					}
				}

				function mo(e, t, n, r) {
					for (var i = e[t++], a = 1 << i, o = a + 1, s = o + 1, c = i + 1, l = (1 << c) - 1, u = 0, h = 0, d = 0, f = e[t++], p = new Int32Array(4096), m = null;;) {
						for (; u < 16 && 0 !== f;) h |= e[t++] << u, u += 8, 1 === f ? f = e[t++] : --f;
						if (u < c) break;
						var g = h & l;
						if (h >>= c, u -= c, g !== a) {
							if (g === o) break;
							for (var v = g < s ? g : m, y = 0, b = v; b > a;) b = p[b] >> 8, ++y;
							var w = b;
							if (d + y + (v !== g ? 1 : 0) > r) return void Si.log("Warning, gif stream longer than expected.");
							n[d++] = w;
							var x = d += y;
							for (v !== g && (n[d++] = w), b = v; y--;) b = p[b], n[--x] = 255 & b, b >>= 8;
							null !== m && s < 4096 && (p[s++] = m << 8 | w, s >= l + 1 && c < 12 && (++c, l = l << 1 | 1)), m = g
						} else s = o + 1, l = (1 << (c = i + 1)) - 1, m = null
					}
					return d !== r && Si.log("Warning, gif stream shorter than expected."), n
				}

				function go(e) {
					var t, n, r, i, a, o = Math.floor,
						s = new Array(64),
						c = new Array(64),
						l = new Array(64),
						u = new Array(64),
						h = new Array(65535),
						d = new Array(65535),
						f = new Array(64),
						p = new Array(64),
						m = [],
						g = 0,
						v = 7,
						y = new Array(64),
						b = new Array(64),
						w = new Array(64),
						x = new Array(256),
						S = new Array(2048),
						j = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
						N = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
						k = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						A = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
						L = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
						P = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
						I = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						C = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
						_ = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

					function O(e, t) {
						for (var n = 0, r = 0, i = new Array, a = 1; a <= 16; a++) {
							for (var o = 1; o <= e[a]; o++) i[t[r]] = [], i[t[r]][0] = n, i[t[r]][1] = a, r++, n++;
							n *= 2
						}
						return i
					}

					function T(e) {
						for (var t = e[0], n = e[1] - 1; n >= 0;) t & 1 << n && (g |= 1 << v), n--, --v < 0 && (255 == g ? (D(255), D(0)) : D(g), v = 7, g = 0)
					}

					function D(e) {
						m.push(e)
					}

					function E(e) {
						D(e >> 8 & 255), D(255 & e)
					}

					function F(e, t, n, r, i) {
						for (var a, o = i[0], s = i[240], c = function(e, t) {
								var n, r, i, a, o, s, c, l, u, h, d = 0;
								for (u = 0; u < 8; ++u) {
									n = e[d], r = e[d + 1], i = e[d + 2], a = e[d + 3], o = e[d + 4], s = e[d + 5], c = e[d + 6];
									var p = n + (l = e[d + 7]),
										m = n - l,
										g = r + c,
										v = r - c,
										y = i + s,
										b = i - s,
										w = a + o,
										x = a - o,
										S = p + w,
										j = p - w,
										N = g + y,
										k = g - y;
									e[d] = S + N, e[d + 4] = S - N;
									var A = .707106781 * (k + j);
									e[d + 2] = j + A, e[d + 6] = j - A;
									var L = .382683433 * ((S = x + b) - (k = v + m)),
										P = .5411961 * S + L,
										I = 1.306562965 * k + L,
										C = .707106781 * (N = b + v),
										_ = m + C,
										O = m - C;
									e[d + 5] = O + P, e[d + 3] = O - P, e[d + 1] = _ + I, e[d + 7] = _ - I, d += 8
								}
								for (d = 0, u = 0; u < 8; ++u) {
									n = e[d], r = e[d + 8], i = e[d + 16], a = e[d + 24], o = e[d + 32], s = e[d + 40], c = e[d + 48];
									var T = n + (l = e[d + 56]),
										D = n - l,
										E = r + c,
										F = r - c,
										R = i + s,
										M = i - s,
										B = a + o,
										U = a - o,
										q = T + B,
										z = T - B,
										Z = E + R,
										H = E - R;
									e[d] = q + Z, e[d + 32] = q - Z;
									var G = .707106781 * (H + z);
									e[d + 16] = z + G, e[d + 48] = z - G;
									var V = .382683433 * ((q = U + M) - (H = F + D)),
										W = .5411961 * q + V,
										Y = 1.306562965 * H + V,
										K = .707106781 * (Z = M + F),
										J = D + K,
										X = D - K;
									e[d + 40] = X + W, e[d + 24] = X - W, e[d + 8] = J + Y, e[d + 56] = J - Y, d++
								}
								for (u = 0; u < 64; ++u) h = e[u] * t[u], f[u] = h > 0 ? h + .5 | 0 : h - .5 | 0;
								return f
							}(e, t), l = 0; l < 64; ++l) p[j[l]] = c[l];
						var u = p[0] - n;
						n = p[0], 0 == u ? T(r[0]) : (T(r[d[a = 32767 + u]]), T(h[a]));
						for (var m = 63; m > 0 && 0 == p[m];) m--;
						if (0 == m) return T(o), n;
						for (var g, v = 1; v <= m;) {
							for (var y = v; 0 == p[v] && v <= m;) ++v;
							var b = v - y;
							if (b >= 16) {
								g = b >> 4;
								for (var w = 1; w <= g; ++w) T(s);
								b &= 15
							}
							a = 32767 + p[v], T(i[(b << 4) + d[a]]), T(h[a]), v++
						}
						return 63 != m && T(o), n
					}

					function R(e) {
						e = Math.min(Math.max(e, 1), 100), a != e && (function(e) {
							for (var t = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; n < 64; n++) {
								var r = o((t[n] * e + 50) / 100);
								r = Math.min(Math.max(r, 1), 255), s[j[n]] = r
							}
							for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], a = 0; a < 64; a++) {
								var h = o((i[a] * e + 50) / 100);
								h = Math.min(Math.max(h, 1), 255), c[j[a]] = h
							}
							for (var d = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], f = 0, p = 0; p < 8; p++)
								for (var m = 0; m < 8; m++) l[f] = 1 / (s[j[f]] * d[p] * d[m] * 8), u[f] = 1 / (c[j[f]] * d[p] * d[m] * 8), f++
						}(e < 50 ? Math.floor(5e3 / e) : Math.floor(200 - 2 * e)), a = e)
					}
					this.encode = function(e, a) {
							a && R(a), m = new Array, g = 0, v = 7, E(65496), E(65504), E(16), D(74), D(70), D(73), D(70), D(0), D(1), D(1), D(0), E(1), E(1), D(0), D(0),
								function() {
									E(65499), E(132), D(0);
									for (var e = 0; e < 64; e++) D(s[e]);
									D(1);
									for (var t = 0; t < 64; t++) D(c[t])
								}(),
								function(e, t) {
									E(65472), E(17), D(8), E(t), E(e), D(3), D(1), D(17), D(0), D(2), D(17), D(1), D(3), D(17), D(1)
								}(e.width, e.height),
								function() {
									E(65476), E(418), D(0);
									for (var e = 0; e < 16; e++) D(N[e + 1]);
									for (var t = 0; t <= 11; t++) D(k[t]);
									D(16);
									for (var n = 0; n < 16; n++) D(A[n + 1]);
									for (var r = 0; r <= 161; r++) D(L[r]);
									D(1);
									for (var i = 0; i < 16; i++) D(P[i + 1]);
									for (var a = 0; a <= 11; a++) D(I[a]);
									D(17);
									for (var o = 0; o < 16; o++) D(C[o + 1]);
									for (var s = 0; s <= 161; s++) D(_[s])
								}(), E(65498), E(12), D(3), D(1), D(0), D(2), D(17), D(3), D(17), D(0), D(63), D(0);
							var o = 0,
								h = 0,
								d = 0;
							g = 0, v = 7, this.encode.displayName = "_encode_";
							for (var f, p, x, j, O, M, B, U, q, z = e.data, Z = e.width, H = e.height, G = 4 * Z, V = 0; V < H;) {
								for (f = 0; f < G;) {
									for (O = G * V + f, B = -1, U = 0, q = 0; q < 64; q++) M = O + (U = q >> 3) * G + (B = 4 * (7 & q)), V + U >= H && (M -= G * (V + 1 + U - H)), f + B >= G && (M -= f + B - G + 4), p = z[M++], x = z[M++], j = z[M++], y[q] = (S[p] + S[x + 256 >> 0] + S[j + 512 >> 0] >> 16) - 128, b[q] = (S[p + 768 >> 0] + S[x + 1024 >> 0] + S[j + 1280 >> 0] >> 16) - 128, w[q] = (S[p + 1280 >> 0] + S[x + 1536 >> 0] + S[j + 1792 >> 0] >> 16) - 128;
									o = F(y, l, o, t, r), h = F(b, u, h, n, i), d = F(w, u, d, n, i), f += 32
								}
								V += 8
							}
							if (v >= 0) {
								var W = [];
								W[1] = v + 1, W[0] = (1 << v + 1) - 1, T(W)
							}
							return E(65497), new Uint8Array(m)
						}, e = e || 50,
						function() {
							for (var e = String.fromCharCode, t = 0; t < 256; t++) x[t] = e(t)
						}(), t = O(N, k), n = O(P, I), r = O(A, L), i = O(C, _),
						function() {
							for (var e = 1, t = 2, n = 1; n <= 15; n++) {
								for (var r = e; r < t; r++) d[32767 + r] = n, h[32767 + r] = [], h[32767 + r][1] = n, h[32767 + r][0] = r;
								for (var i = -(t - 1); i <= -e; i++) d[32767 + i] = n, h[32767 + i] = [], h[32767 + i][1] = n, h[32767 + i][0] = t - 1 + i;
								e <<= 1, t <<= 1
							}
						}(),
						function() {
							for (var e = 0; e < 256; e++) S[e] = 19595 * e, S[e + 256 >> 0] = 38470 * e, S[e + 512 >> 0] = 7471 * e + 32768, S[e + 768 >> 0] = -11059 * e, S[e + 1024 >> 0] = -21709 * e, S[e + 1280 >> 0] = 32768 * e + 8421375, S[e + 1536 >> 0] = -27439 * e, S[e + 1792 >> 0] = -5329 * e
						}(), R(e)
				}

				function vo(e, t) {
					if (this.pos = 0, this.buffer = e, this.datav = new DataView(e.buffer), this.is_with_alpha = !!t, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
					this.parseHeader(), this.parseBGR()
				}

				function yo(e) {
					function t(e) {
						if (!e) throw Error("assert :P")
					}

					function n(e, t, n) {
						for (var r = 0; 4 > r; r++)
							if (e[t + r] != n.charCodeAt(r)) return !0;
						return !1
					}

					function r(e, t, n, r, i) {
						for (var a = 0; a < i; a++) e[t + a] = n[r + a]
					}

					function i(e, t, n, r) {
						for (var i = 0; i < r; i++) e[t + i] = n
					}

					function a(e) {
						return new Int32Array(e)
					}

					function o(e, t) {
						for (var n = [], r = 0; r < e; r++) n.push(new t);
						return n
					}

					function s(e, t) {
						var n = [];
						return function e(n, r, i) {
							for (var a = i[r], o = 0; o < a && (n.push(i.length > r + 1 ? [] : new t), !(i.length < r + 1)); o++) e(n[o], r + 1, i)
						}(n, 0, e), n
					}
					var c = function() {
						var e = this;

						function c(e, t) {
							for (var n = 1 << t - 1 >>> 0; e & n;) n >>>= 1;
							return n ? (e & n - 1) + n : e
						}

						function l(e, n, r, i, a) {
							t(!(i % r));
							do {
								e[n + (i -= r)] = a
							} while (0 < i)
						}

						function u(e, n, r, i, o) {
							if (t(2328 >= o), 512 >= o) var s = a(512);
							else if (null == (s = a(o))) return 0;
							return function(e, n, r, i, o, s) {
								var u, d, f = n,
									p = 1 << r,
									m = a(16),
									g = a(16);
								for (t(0 != o), t(null != i), t(null != e), t(0 < r), d = 0; d < o; ++d) {
									if (15 < i[d]) return 0;
									++m[i[d]]
								}
								if (m[0] == o) return 0;
								for (g[1] = 0, u = 1; 15 > u; ++u) {
									if (m[u] > 1 << u) return 0;
									g[u + 1] = g[u] + m[u]
								}
								for (d = 0; d < o; ++d) u = i[d], 0 < i[d] && (s[g[u]++] = d);
								if (1 == g[15]) return (i = new h).g = 0, i.value = s[0], l(e, f, 1, p, i), p;
								var v, y = -1,
									b = p - 1,
									w = 0,
									x = 1,
									S = 1,
									j = 1 << r;
								for (d = 0, u = 1, o = 2; u <= r; ++u, o <<= 1) {
									if (x += S <<= 1, 0 > (S -= m[u])) return 0;
									for (; 0 < m[u]; --m[u])(i = new h).g = u, i.value = s[d++], l(e, f + w, o, j, i), w = c(w, u)
								}
								for (u = r + 1, o = 2; 15 >= u; ++u, o <<= 1) {
									if (x += S <<= 1, 0 > (S -= m[u])) return 0;
									for (; 0 < m[u]; --m[u]) {
										if (i = new h, (w & b) != y) {
											for (f += j, v = 1 << (y = u) - r; 15 > y && !(0 >= (v -= m[y]));) ++y, v <<= 1;
											p += j = 1 << (v = y - r), e[n + (y = w & b)].g = v + r, e[n + y].value = f - n - y
										}
										i.g = u - r, i.value = s[d++], l(e, f + (w >> r), o, j, i), w = c(w, u)
									}
								}
								return x != 2 * g[15] - 1 ? 0 : p
							}(e, n, r, i, o, s)
						}

						function h() {
							this.value = this.g = 0
						}

						function d() {
							this.value = this.g = 0
						}

						function f() {
							this.G = o(5, h), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o(Bn, d)
						}

						function p(e, n, r, i) {
							t(null != e), t(null != n), t(2147483648 > i), e.Ca = 254, e.I = 0, e.b = -8, e.Ka = 0, e.oa = n, e.pa = r, e.Jd = n, e.Yc = r + i, e.Zc = 4 <= i ? r + i - 4 + 1 : r, A(e)
						}

						function m(e, t) {
							for (var n = 0; 0 < t--;) n |= P(e, 128) << t;
							return n
						}

						function g(e, t) {
							var n = m(e, t);
							return L(e) ? -n : n
						}

						function v(e, n, r, i) {
							var a, o = 0;
							for (t(null != e), t(null != n), t(4294967288 > i), e.Sb = i, e.Ra = 0, e.u = 0, e.h = 0, 4 < i && (i = 4), a = 0; a < i; ++a) o += n[r + a] << 8 * a;
							e.Ra = o, e.bb = i, e.oa = n, e.pa = r
						}

						function y(e) {
							for (; 8 <= e.u && e.bb < e.Sb;) e.Ra >>>= 8, e.Ra += e.oa[e.pa + e.bb] << zn - 8 >>> 0, ++e.bb, e.u -= 8;
							j(e) && (e.h = 1, e.u = 0)
						}

						function b(e, n) {
							if (t(0 <= n), !e.h && n <= qn) {
								var r = S(e) & Un[n];
								return e.u += n, y(e), r
							}
							return e.h = 1, e.u = 0
						}

						function w() {
							this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0
						}

						function x() {
							this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0
						}

						function S(e) {
							return e.Ra >>> (e.u & zn - 1) >>> 0
						}

						function j(e) {
							return t(e.bb <= e.Sb), e.h || e.bb == e.Sb && e.u > zn
						}

						function N(e, t) {
							e.u = t, e.h = j(e)
						}

						function k(e) {
							e.u >= Zn && (t(e.u >= Zn), y(e))
						}

						function A(e) {
							t(null != e && null != e.oa), e.pa < e.Zc ? (e.I = (e.oa[e.pa++] | e.I << 8) >>> 0, e.b += 8) : (t(null != e && null != e.oa), e.pa < e.Yc ? (e.b += 8, e.I = e.oa[e.pa++] | e.I << 8) : e.Ka ? e.b = 0 : (e.I <<= 8, e.b += 8, e.Ka = 1))
						}

						function L(e) {
							return m(e, 1)
						}

						function P(e, t) {
							var n = e.Ca;
							0 > e.b && A(e);
							var r = e.b,
								i = n * t >>> 8,
								a = (e.I >>> r > i) + 0;
							for (a ? (n -= i, e.I -= i + 1 << r >>> 0) : n = i + 1, r = n, i = 0; 256 <= r;) i += 8, r >>= 8;
							return r = 7 ^ i + Hn[r], e.b -= r, e.Ca = (n << r) - 1, a
						}

						function I(e, t, n) {
							e[t + 0] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = n >> 0 & 255
						}

						function C(e, t) {
							return e[t + 0] << 0 | e[t + 1] << 8
						}

						function _(e, t) {
							return C(e, t) | e[t + 2] << 16
						}

						function O(e, t) {
							return C(e, t) | C(e, t + 2) << 16
						}

						function T(e, n) {
							var r = 1 << n;
							return t(null != e), t(0 < n), e.X = a(r), null == e.X ? 0 : (e.Mb = 32 - n, e.Xa = n, 1)
						}

						function D(e, n) {
							t(null != e), t(null != n), t(e.Xa == n.Xa), r(n.X, 0, e.X, 0, 1 << n.Xa)
						}

						function E() {
							this.X = [], this.Xa = this.Mb = 0
						}

						function F(e, n, r, i) {
							t(null != r), t(null != i);
							var a = r[0],
								o = i[0];
							return 0 == a && (a = (e * o + n / 2) / n), 0 == o && (o = (n * a + e / 2) / e), 0 >= a || 0 >= o ? 0 : (r[0] = a, i[0] = o, 1)
						}

						function R(e, t) {
							return e + (1 << t) - 1 >>> t
						}

						function M(e, t) {
							return ((4278255360 & e) + (4278255360 & t) >>> 0 & 4278255360) + ((16711935 & e) + (16711935 & t) >>> 0 & 16711935) >>> 0
						}

						function B(t, n) {
							e[n] = function(n, r, i, a, o, s, c) {
								var l;
								for (l = 0; l < o; ++l) {
									var u = e[t](s[c + l - 1], i, a + l);
									s[c + l] = M(n[r + l], u)
								}
							}
						}

						function U() {
							this.ud = this.hd = this.jd = 0
						}

						function q(e, t) {
							return ((4278124286 & (e ^ t)) >>> 1) + (e & t) >>> 0
						}

						function z(e) {
							return 0 <= e && 256 > e ? e : 0 > e ? 0 : 255 < e ? 255 : void 0
						}

						function Z(e, t) {
							return z(e + (e - t + .5 >> 1))
						}

						function H(e, t, n) {
							return Math.abs(t - n) - Math.abs(e - n)
						}

						function G(e, t, n, r, i, a, o) {
							for (r = a[o - 1], n = 0; n < i; ++n) a[o + n] = r = M(e[t + n], r)
						}

						function V(e, t, n, r, i) {
							var a;
							for (a = 0; a < n; ++a) {
								var o = e[t + a],
									s = o >> 8 & 255,
									c = 16711935 & (c = (c = 16711935 & o) + ((s << 16) + s));
								r[i + a] = (4278255360 & o) + c >>> 0
							}
						}

						function W(e, t) {
							t.jd = e >> 0 & 255, t.hd = e >> 8 & 255, t.ud = e >> 16 & 255
						}

						function Y(e, t, n, r, i, a) {
							var o;
							for (o = 0; o < r; ++o) {
								var s = t[n + o],
									c = s >>> 8,
									l = s,
									u = 255 & (u = (u = s >>> 16) + ((e.jd << 24 >> 24) * (c << 24 >> 24) >>> 5));
								l = 255 & (l = (l += (e.hd << 24 >> 24) * (c << 24 >> 24) >>> 5) + ((e.ud << 24 >> 24) * (u << 24 >> 24) >>> 5)), i[a + o] = (4278255360 & s) + (u << 16) + l
							}
						}

						function K(t, n, r, i, a) {
							e[n] = function(e, t, n, r, o, s, c, l, u) {
								for (r = c; r < l; ++r)
									for (c = 0; c < u; ++c) o[s++] = a(n[i(e[t++])])
							}, e[t] = function(t, n, o, s, c, l, u) {
								var h = 8 >> t.b,
									d = t.Ea,
									f = t.K[0],
									p = t.w;
								if (8 > h)
									for (t = (1 << t.b) - 1, p = (1 << h) - 1; n < o; ++n) {
										var m, g = 0;
										for (m = 0; m < d; ++m) m & t || (g = i(s[c++])), l[u++] = a(f[g & p]), g >>= h
									} else e["VP8LMapColor" + r](s, c, f, p, l, u, n, o, d)
							}
						}

						function J(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = e[t++];
								r[i++] = a >> 16 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 0 & 255
							}
						}

						function X(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = e[t++];
								r[i++] = a >> 16 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 0 & 255, r[i++] = a >> 24 & 255
							}
						}

						function $(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = (o = e[t++]) >> 16 & 240 | o >> 12 & 15,
									o = o >> 0 & 240 | o >> 28 & 15;
								r[i++] = a, r[i++] = o
							}
						}

						function Q(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = (o = e[t++]) >> 16 & 248 | o >> 13 & 7,
									o = o >> 5 & 224 | o >> 3 & 31;
								r[i++] = a, r[i++] = o
							}
						}

						function ee(e, t, n, r, i) {
							for (n = t + n; t < n;) {
								var a = e[t++];
								r[i++] = a >> 0 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 16 & 255
							}
						}

						function te(e, t, n, i, a, o) {
							if (0 == o)
								for (n = t + n; t < n;) I(i, ((o = e[t++])[0] >> 24 | o[1] >> 8 & 65280 | o[2] << 8 & 16711680 | o[3] << 24) >>> 0), a += 32;
							else r(i, a, e, t, n)
						}

						function ne(t, n) {
							e[n][0] = e[t + "0"], e[n][1] = e[t + "1"], e[n][2] = e[t + "2"], e[n][3] = e[t + "3"], e[n][4] = e[t + "4"], e[n][5] = e[t + "5"], e[n][6] = e[t + "6"], e[n][7] = e[t + "7"], e[n][8] = e[t + "8"], e[n][9] = e[t + "9"], e[n][10] = e[t + "10"], e[n][11] = e[t + "11"], e[n][12] = e[t + "12"], e[n][13] = e[t + "13"], e[n][14] = e[t + "0"], e[n][15] = e[t + "0"]
						}

						function re(e) {
							return e == Zr || e == Hr || e == Gr || e == Vr
						}

						function ie() {
							this.eb = [], this.size = this.A = this.fb = 0
						}

						function ae() {
							this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0
						}

						function oe() {
							this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new ie, this.f.kb = new ae, this.sd = null
						}

						function se() {
							this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0]
						}

						function ce() {
							this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0
						}

						function le(e) {
							return alert("todo:WebPSamplerProcessPlane"), e.T
						}

						function ue(e, t) {
							var n = e.T,
								i = t.ba.f.RGBA,
								a = i.eb,
								o = i.fb + e.ka * i.A,
								s = vi[t.ba.S],
								c = e.y,
								l = e.O,
								u = e.f,
								h = e.N,
								d = e.ea,
								f = e.W,
								p = t.cc,
								m = t.dc,
								g = t.Mc,
								v = t.Nc,
								y = e.ka,
								b = e.ka + e.T,
								w = e.U,
								x = w + 1 >> 1;
							for (0 == y ? s(c, l, null, null, u, h, d, f, u, h, d, f, a, o, null, null, w) : (s(t.ec, t.fc, c, l, p, m, g, v, u, h, d, f, a, o - i.A, a, o, w), ++n); y + 2 < b; y += 2) p = u, m = h, g = d, v = f, h += e.Rc, f += e.Rc, o += 2 * i.A, s(c, (l += 2 * e.fa) - e.fa, c, l, p, m, g, v, u, h, d, f, a, o - i.A, a, o, w);
							return l += e.fa, e.j + b < e.o ? (r(t.ec, t.fc, c, l, w), r(t.cc, t.dc, u, h, x), r(t.Mc, t.Nc, d, f, x), n--) : 1 & b || s(c, l, null, null, u, h, d, f, u, h, d, f, a, o + i.A, null, null, w), n
						}

						function he(e, n, r) {
							var i = e.F,
								a = [e.J];
							if (null != i) {
								var o = e.U,
									s = n.ba.S,
									c = s == Ur || s == Gr;
								n = n.ba.f.RGBA;
								var l = [0],
									u = e.ka;
								l[0] = e.T, e.Kb && (0 == u ? --l[0] : (--u, a[0] -= e.width), e.j + e.ka + e.T == e.o && (l[0] = e.o - e.j - u));
								var h = n.eb;
								u = n.fb + u * n.A, e = kr(i, a[0], e.width, o, l, h, u + (c ? 0 : 3), n.A), t(r == l), e && re(s) && jr(h, u, c, o, l, n.A)
							}
							return 0
						}

						function de(e) {
							var t = e.ma,
								n = t.ba.S,
								r = 11 > n,
								i = n == Rr || n == Br || n == Ur || n == qr || 12 == n || re(n);
							if (t.memory = null, t.Ib = null, t.Jb = null, t.Nd = null, !Fn(t.Oa, e, i ? 11 : 12)) return 0;
							if (i && re(n) && bn(), e.da) alert("todo:use_scaling");
							else {
								if (r) {
									if (t.Ib = le, e.Kb) {
										if (n = e.U + 1 >> 1, t.memory = a(e.U + 2 * n), null == t.memory) return 0;
										t.ec = t.memory, t.fc = 0, t.cc = t.ec, t.dc = t.fc + e.U, t.Mc = t.cc, t.Nc = t.dc + n, t.Ib = ue, bn()
									}
								} else alert("todo:EmitYUV");
								i && (t.Jb = he, r && vn())
							}
							if (r && !_i) {
								for (e = 0; 256 > e; ++e) Oi[e] = 89858 * (e - 128) + Ai >> ki, Ei[e] = -22014 * (e - 128) + Ai, Di[e] = -45773 * (e - 128), Ti[e] = 113618 * (e - 128) + Ai >> ki;
								for (e = Li; e < Pi; ++e) t = 76283 * (e - 16) + Ai >> ki, Fi[e - Li] = Ge(t, 255), Ri[e - Li] = Ge(t + 8 >> 4, 15);
								_i = 1
							}
							return 1
						}

						function fe(e) {
							var n = e.ma,
								r = e.U,
								i = e.T;
							return t(!(1 & e.ka)), 0 >= r || 0 >= i ? 0 : (r = n.Ib(e, n), null != n.Jb && n.Jb(e, n, r), n.Dc += r, 1)
						}

						function pe(e) {
							e.ma.memory = null
						}

						function me(e, t, n, r) {
							return 47 != b(e, 8) ? 0 : (t[0] = b(e, 14) + 1, n[0] = b(e, 14) + 1, r[0] = b(e, 1), 0 != b(e, 3) ? 0 : !e.h)
						}

						function ge(e, t) {
							if (4 > e) return e + 1;
							var n = e - 2 >> 1;
							return (2 + (1 & e) << n) + b(t, n) + 1
						}

						function ve(e, t) {
							return 120 < t ? t - 120 : 1 <= (n = ((n = $r[t - 1]) >> 4) * e + (8 - (15 & n))) ? n : 1;
							var n
						}

						function ye(e, t, n) {
							var r = S(n),
								i = e[t += 255 & r].g - 8;
							return 0 < i && (N(n, n.u + 8), r = S(n), t += e[t].value, t += r & (1 << i) - 1), N(n, n.u + e[t].g), e[t].value
						}

						function be(e, n, r) {
							return r.g += e.g, r.value += e.value << n >>> 0, t(8 >= r.g), e.g
						}

						function we(e, n, r) {
							var i = e.xc;
							return t((n = 0 == i ? 0 : e.vc[e.md * (r >> i) + (n >> i)]) < e.Wb), e.Ya[n]
						}

						function xe(e, n, i, a) {
							var o = e.ab,
								s = e.c * n,
								c = e.C;
							n = c + n;
							var l = i,
								u = a;
							for (a = e.Ta, i = e.Ua; 0 < o--;) {
								var h = e.gc[o],
									d = c,
									f = n,
									p = l,
									m = u,
									g = (u = a, l = i, h.Ea);
								switch (t(d < f), t(f <= h.nc), h.hc) {
									case 2:
										Wn(p, m, (f - d) * g, u, l);
										break;
									case 0:
										var v = d,
											y = f,
											b = u,
											w = l,
											x = (A = h).Ea;
										0 == v && (Gn(p, m, null, null, 1, b, w), G(p, m + 1, 0, 0, x - 1, b, w + 1), m += x, w += x, ++v);
										for (var S = 1 << A.b, j = S - 1, N = R(x, A.b), k = A.K, A = A.w + (v >> A.b) * N; v < y;) {
											var L = k,
												P = A,
												I = 1;
											for (Vn(p, m, b, w - x, 1, b, w); I < x;) {
												var C = (I & ~j) + S;
												C > x && (C = x), (0, $n[L[P++] >> 8 & 15])(p, m + +I, b, w + I - x, C - I, b, w + I), I = C
											}
											m += x, w += x, ++v & j || (A += N)
										}
										f != h.nc && r(u, l - g, u, l + (f - d - 1) * g, g);
										break;
									case 1:
										for (g = p, y = m, x = (p = h.Ea) - (w = p & ~(b = (m = 1 << h.b) - 1)), v = R(p, h.b), S = h.K, h = h.w + (d >> h.b) * v; d < f;) {
											for (j = S, N = h, k = new U, A = y + w, L = y + p; y < A;) W(j[N++], k), Qn(k, g, y, m, u, l), y += m, l += m;
											y < L && (W(j[N++], k), Qn(k, g, y, x, u, l), y += x, l += x), ++d & b || (h += v)
										}
										break;
									case 3:
										if (p == u && m == l && 0 < h.b) {
											for (y = u, p = g = l + (f - d) * g - (w = (f - d) * R(h.Ea, h.b)), m = u, b = l, v = [], w = (x = w) - 1; 0 <= w; --w) v[w] = m[b + w];
											for (w = x - 1; 0 <= w; --w) y[p + w] = v[w];
											Yn(h, d, f, u, g, u, l)
										} else Yn(h, d, f, p, m, u, l)
								}
								l = a, u = i
							}
							u != i && r(a, i, l, u, s)
						}

						function Se(e, n) {
							var r = e.V,
								i = e.Ba + e.c * e.C,
								a = n - e.C;
							if (t(n <= e.l.o), t(16 >= a), 0 < a) {
								var o = e.l,
									s = e.Ta,
									c = e.Ua,
									l = o.width;
								if (xe(e, a, r, i), a = c = [c], t((r = e.C) < (i = n)), t(o.v < o.va), i > o.o && (i = o.o), r < o.j) {
									var u = o.j - r;
									r = o.j, a[0] += u * l
								}
								if (r >= i ? r = 0 : (a[0] += 4 * o.v, o.ka = r - o.j, o.U = o.va - o.v, o.T = i - r, r = 1), r) {
									if (c = c[0], 11 > (r = e.ca).S) {
										var h = r.f.RGBA,
											d = (i = r.S, a = o.U, o = o.T, u = h.eb, h.A),
											f = o;
										for (h = h.fb + e.Ma * h.A; 0 < f--;) {
											var p = s,
												m = c,
												g = a,
												v = u,
												y = h;
											switch (i) {
												case Fr:
													er(p, m, g, v, y);
													break;
												case Rr:
													tr(p, m, g, v, y);
													break;
												case Zr:
													tr(p, m, g, v, y), jr(v, y, 0, g, 1, 0);
													break;
												case Mr:
													ir(p, m, g, v, y);
													break;
												case Br:
													te(p, m, g, v, y, 1);
													break;
												case Hr:
													te(p, m, g, v, y, 1), jr(v, y, 0, g, 1, 0);
													break;
												case Ur:
													te(p, m, g, v, y, 0);
													break;
												case Gr:
													te(p, m, g, v, y, 0), jr(v, y, 1, g, 1, 0);
													break;
												case qr:
													nr(p, m, g, v, y);
													break;
												case Vr:
													nr(p, m, g, v, y), Nr(v, y, g, 1, 0);
													break;
												case zr:
													rr(p, m, g, v, y);
													break;
												default:
													t(0)
											}
											c += l, h += d
										}
										e.Ma += o
									} else alert("todo:EmitRescaledRowsYUVA");
									t(e.Ma <= r.height)
								}
							}
							e.C = n, t(e.C <= e.i)
						}

						function je(e) {
							var t;
							if (0 < e.ua) return 0;
							for (t = 0; t < e.Wb; ++t) {
								var n = e.Ya[t].G,
									r = e.Ya[t].H;
								if (0 < n[1][r[1] + 0].g || 0 < n[2][r[2] + 0].g || 0 < n[3][r[3] + 0].g) return 0
							}
							return 1
						}

						function Ne(e, n, r, i, a, o) {
							if (0 != e.Z) {
								var s = e.qd,
									c = e.rd;
								for (t(null != gi[e.Z]); n < r; ++n) gi[e.Z](s, c, i, a, i, a, o), s = i, c = a, a += o;
								e.qd = s, e.rd = c
							}
						}

						function ke(e, n) {
							var r = e.l.ma,
								i = 0 == r.Z || 1 == r.Z ? e.l.j : e.C;
							if (i = e.C < i ? i : e.C, t(n <= e.l.o), n > i) {
								var a = e.l.width,
									o = r.ca,
									s = r.tb + a * i,
									c = e.V,
									l = e.Ba + e.c * i,
									u = e.gc;
								t(1 == e.ab), t(3 == u[0].hc), Jn(u[0], i, n, c, l, o, s), Ne(r, i, n, o, s, a)
							}
							e.C = e.Ma = n
						}

						function Ae(e, n, r, i, a, o, s) {
							var c = e.$ / i,
								l = e.$ % i,
								u = e.m,
								h = e.s,
								d = r + e.$,
								f = d;
							a = r + i * a;
							var p = r + i * o,
								m = 280 + h.ua,
								g = e.Pb ? c : 16777216,
								v = 0 < h.ua ? h.Wa : null,
								y = h.wc,
								b = d < p ? we(h, l, c) : null;
							t(e.C < o), t(p <= a);
							var w = !1;
							e: for (;;) {
								for (; w || d < p;) {
									var x = 0;
									if (c >= g) {
										var A = d - r;
										t((g = e).Pb), g.wd = g.m, g.xd = A, 0 < g.s.ua && D(g.s.Wa, g.s.vb), g = c + ei
									}
									if (l & y || (b = we(h, l, c)), t(null != b), b.Qb && (n[d] = b.qb, w = !0), !w)
										if (k(u), b.jc) {
											x = u, A = n;
											var L = d,
												P = b.pd[S(x) & Bn - 1];
											t(b.jc), 256 > P.g ? (N(x, x.u + P.g), A[L] = P.value, x = 0) : (N(x, x.u + P.g - 256), t(256 <= P.value), x = P.value), 0 == x && (w = !0)
										} else x = ye(b.G[0], b.H[0], u);
									if (u.h) break;
									if (w || 256 > x) {
										if (!w)
											if (b.nd) n[d] = (b.qb | x << 8) >>> 0;
											else {
												if (k(u), w = ye(b.G[1], b.H[1], u), k(u), A = ye(b.G[2], b.H[2], u), L = ye(b.G[3], b.H[3], u), u.h) break;
												n[d] = (L << 24 | w << 16 | x << 8 | A) >>> 0
											} if (w = !1, ++d, ++l >= i && (l = 0, ++c, null != s && c <= o && !(c % 16) && s(e, c), null != v))
											for (; f < d;) x = n[f++], v.X[(506832829 * x & 4294967295) >>> v.Mb] = x
									} else if (280 > x) {
										if (x = ge(x - 256, u), A = ye(b.G[4], b.H[4], u), k(u), A = ve(i, A = ge(A, u)), u.h) break;
										if (d - r < A || a - d < x) break e;
										for (L = 0; L < x; ++L) n[d + L] = n[d + L - A];
										for (d += x, l += x; l >= i;) l -= i, ++c, null != s && c <= o && !(c % 16) && s(e, c);
										if (t(d <= a), l & y && (b = we(h, l, c)), null != v)
											for (; f < d;) x = n[f++], v.X[(506832829 * x & 4294967295) >>> v.Mb] = x
									} else {
										if (!(x < m)) break e;
										for (w = x - 280, t(null != v); f < d;) x = n[f++], v.X[(506832829 * x & 4294967295) >>> v.Mb] = x;
										x = d, t(!(w >>> (A = v).Xa)), n[x] = A.X[w], w = !0
									}
									w || t(u.h == j(u))
								}
								if (e.Pb && u.h && d < a) t(e.m.h), e.a = 5, e.m = e.wd, e.$ = e.xd, 0 < e.s.ua && D(e.s.vb, e.s.Wa);
								else {
									if (u.h) break e;
									null != s && s(e, c > o ? o : c), e.a = 0, e.$ = d - r
								}
								return 1
							}
							return e.a = 3, 0
						}

						function Le(e) {
							t(null != e), e.vc = null, e.yc = null, e.Ya = null;
							var n = e.Wa;
							null != n && (n.X = null), e.vb = null, t(null != e)
						}

						function Pe() {
							var t = new sn;
							return null == t ? null : (t.a = 0, t.xb = mi, ne("Predictor", "VP8LPredictors"), ne("Predictor", "VP8LPredictors_C"), ne("PredictorAdd", "VP8LPredictorsAdd"), ne("PredictorAdd", "VP8LPredictorsAdd_C"), Wn = V, Qn = Y, er = J, tr = X, nr = $, rr = Q, ir = ee, e.VP8LMapColor32b = Kn, e.VP8LMapColor8b = Xn, t)
						}

						function Ie(e, n, r, s, c) {
							var l = 1,
								d = [e],
								p = [n],
								m = s.m,
								g = s.s,
								v = null,
								y = 0;
							e: for (;;) {
								if (r)
									for (; l && b(m, 1);) {
										var w = d,
											x = p,
											j = s,
											A = 1,
											L = j.m,
											P = j.gc[j.ab],
											I = b(L, 2);
										if (j.Oc & 1 << I) l = 0;
										else {
											switch (j.Oc |= 1 << I, P.hc = I, P.Ea = w[0], P.nc = x[0], P.K = [null], ++j.ab, t(4 >= j.ab), I) {
												case 0:
												case 1:
													P.b = b(L, 3) + 2, A = Ie(R(P.Ea, P.b), R(P.nc, P.b), 0, j, P.K), P.K = P.K[0];
													break;
												case 3:
													var C, _ = b(L, 8) + 1,
														O = 16 < _ ? 0 : 4 < _ ? 1 : 2 < _ ? 2 : 3;
													if (w[0] = R(P.Ea, O), P.b = O, C = A = Ie(_, 1, 0, j, P.K)) {
														var D, E = _,
															F = P,
															B = 1 << (8 >> F.b),
															U = a(B);
														if (null == U) C = 0;
														else {
															var q = F.K[0],
																z = F.w;
															for (U[0] = F.K[0][0], D = 1; D < 1 * E; ++D) U[D] = M(q[z + D], U[D - 1]);
															for (; D < 4 * B; ++D) U[D] = 0;
															F.K[0] = null, F.K[0] = U, C = 1
														}
													}
													A = C;
													break;
												case 2:
													break;
												default:
													t(0)
											}
											l = A
										}
									}
								if (d = d[0], p = p[0], l && b(m, 1) && !(l = 1 <= (y = b(m, 4)) && 11 >= y)) {
									s.a = 3;
									break e
								}
								var Z;
								if (Z = l) t: {
									var H, G, V, W = s,
										Y = d,
										K = p,
										J = y,
										X = r,
										$ = W.m,
										Q = W.s,
										ee = [null],
										te = 1,
										ne = 0,
										re = Qr[J];n: for (;;) {
										if (X && b($, 1)) {
											var ie = b($, 3) + 2,
												ae = R(Y, ie),
												oe = R(K, ie),
												se = ae * oe;
											if (!Ie(ae, oe, 0, W, ee)) break n;
											for (ee = ee[0], Q.xc = ie, H = 0; H < se; ++H) {
												var ce = ee[H] >> 8 & 65535;
												ee[H] = ce, ce >= te && (te = ce + 1)
											}
										}
										if ($.h) break n;
										for (G = 0; 5 > G; ++G) {
											var le = Kr[G];
											!G && 0 < J && (le += 1 << J), ne < le && (ne = le)
										}
										var ue = o(te * re, h),
											he = te,
											de = o(he, f);
										if (null == de) var fe = null;
										else t(65536 >= he), fe = de;
										var pe = a(ne);
										if (null == fe || null == pe || null == ue) {
											W.a = 1;
											break n
										}
										var me = ue;
										for (H = V = 0; H < te; ++H) {
											var ge = fe[H],
												ve = ge.G,
												ye = ge.H,
												we = 0,
												xe = 1,
												Se = 0;
											for (G = 0; 5 > G; ++G) {
												le = Kr[G], ve[G] = me, ye[G] = V, !G && 0 < J && (le += 1 << J);
												r: {
													var je, Ne = le,
														ke = W,
														Pe = pe,
														Ce = me,
														_e = V,
														Oe = 0,
														Te = ke.m,
														De = b(Te, 1);
													if (i(Pe, 0, 0, Ne), De) {
														var Ee = b(Te, 1) + 1,
															Fe = b(Te, 1),
															Re = b(Te, 0 == Fe ? 1 : 8);
														Pe[Re] = 1, 2 == Ee && (Pe[Re = b(Te, 8)] = 1);
														var Me = 1
													} else {
														var Be = a(19),
															Ue = b(Te, 4) + 4;
														if (19 < Ue) {
															ke.a = 3;
															var qe = 0;
															break r
														}
														for (je = 0; je < Ue; ++je) Be[Xr[je]] = b(Te, 3);
														var ze = void 0,
															Ze = void 0,
															He = ke,
															Ge = Be,
															Ve = Ne,
															We = Pe,
															Ye = 0,
															Ke = He.m,
															Je = 8,
															Xe = o(128, h);
														i: for (; u(Xe, 0, 7, Ge, 19);) {
															if (b(Ke, 1)) {
																var $e = 2 + 2 * b(Ke, 3);
																if ((ze = 2 + b(Ke, $e)) > Ve) break i
															} else ze = Ve;
															for (Ze = 0; Ze < Ve && ze--;) {
																k(Ke);
																var Qe = Xe[0 + (127 & S(Ke))];
																N(Ke, Ke.u + Qe.g);
																var et = Qe.value;
																if (16 > et) We[Ze++] = et, 0 != et && (Je = et);
																else {
																	var tt = 16 == et,
																		nt = et - 16,
																		rt = Yr[nt],
																		it = b(Ke, Wr[nt]) + rt;
																	if (Ze + it > Ve) break i;
																	for (var at = tt ? Je : 0; 0 < it--;) We[Ze++] = at
																}
															}
															Ye = 1;
															break i
														}
														Ye || (He.a = 3), Me = Ye
													}(Me = Me && !Te.h) && (Oe = u(Ce, _e, 8, Pe, Ne)),
													Me && 0 != Oe ? qe = Oe : (ke.a = 3, qe = 0)
												}
												if (0 == qe) break n;
												if (xe && 1 == Jr[G] && (xe = 0 == me[V].g), we += me[V].g, V += qe, 3 >= G) {
													var ot, st = pe[0];
													for (ot = 1; ot < le; ++ot) pe[ot] > st && (st = pe[ot]);
													Se += st
												}
											}
											if (ge.nd = xe, ge.Qb = 0, xe && (ge.qb = (ve[3][ye[3] + 0].value << 24 | ve[1][ye[1] + 0].value << 16 | ve[2][ye[2] + 0].value) >>> 0, 0 == we && 256 > ve[0][ye[0] + 0].value && (ge.Qb = 1, ge.qb += ve[0][ye[0] + 0].value << 8)), ge.jc = !ge.Qb && 6 > Se, ge.jc) {
												var ct, lt = ge;
												for (ct = 0; ct < Bn; ++ct) {
													var ut = ct,
														ht = lt.pd[ut],
														dt = lt.G[0][lt.H[0] + ut];
													256 <= dt.value ? (ht.g = dt.g + 256, ht.value = dt.value) : (ht.g = 0, ht.value = 0, ut >>= be(dt, 8, ht), ut >>= be(lt.G[1][lt.H[1] + ut], 16, ht), ut >>= be(lt.G[2][lt.H[2] + ut], 0, ht), be(lt.G[3][lt.H[3] + ut], 24, ht))
												}
											}
										}
										Q.vc = ee, Q.Wb = te, Q.Ya = fe, Q.yc = ue, Z = 1;
										break t
									}
									Z = 0
								}
								if (!(l = Z)) {
									s.a = 3;
									break e
								}
								if (0 < y) {
									if (g.ua = 1 << y, !T(g.Wa, y)) {
										s.a = 1, l = 0;
										break e
									}
								} else g.ua = 0;
								var ft = s,
									pt = d,
									mt = p,
									gt = ft.s,
									vt = gt.xc;
								if (ft.c = pt, ft.i = mt, gt.md = R(pt, vt), gt.wc = 0 == vt ? -1 : (1 << vt) - 1, r) {
									s.xb = pi;
									break e
								}
								if (null == (v = a(d * p))) {
									s.a = 1, l = 0;
									break e
								}
								l = (l = Ae(s, v, 0, d, p, p, null)) && !m.h;
								break e
							}
							return l ? (null != c ? c[0] = v : (t(null == v), t(r)), s.$ = 0, r || Le(g)) : Le(g), l
						}

						function Ce(e, n) {
							var r = e.c * e.i,
								i = r + n + 16 * n;
							return t(e.c <= n), e.V = a(i), null == e.V ? (e.Ta = null, e.Ua = 0, e.a = 1, 0) : (e.Ta = e.V, e.Ua = e.Ba + r + n, 1)
						}

						function _e(e, n) {
							var r = e.C,
								i = n - r,
								a = e.V,
								o = e.Ba + e.c * r;
							for (t(n <= e.l.o); 0 < i;) {
								var s = 16 < i ? 16 : i,
									c = e.l.ma,
									l = e.l.width,
									u = l * s,
									h = c.ca,
									d = c.tb + l * r,
									f = e.Ta,
									p = e.Ua;
								xe(e, s, a, o), Ar(f, p, h, d, u), Ne(c, r, r + s, h, d, l), i -= s, a += s * e.c, r += s
							}
							t(r == n), e.C = e.Ma = n
						}

						function Oe() {
							this.ub = this.yd = this.td = this.Rb = 0
						}

						function Te() {
							this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0
						}

						function De() {
							this.Fb = this.Bb = this.Cb = 0, this.Zb = a(4), this.Lb = a(4)
						}

						function Ee() {
							this.Yb = function() {
								var e = [];
								return function e(t, n, r) {
									for (var i = r[n], a = 0; a < i && (t.push(r.length > n + 1 ? [] : 0), !(r.length < n + 1)); a++) e(t[a], n + 1, r)
								}(e, 0, [3, 11]), e
							}()
						}

						function Fe() {
							this.jb = a(3), this.Wc = s([4, 8], Ee), this.Xc = s([4, 17], Ee)
						}

						function Re() {
							this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a(4), this.od = new a(4)
						}

						function Me() {
							this.ld = this.La = this.dd = this.tc = 0
						}

						function Be() {
							this.Na = this.la = 0
						}

						function Ue() {
							this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0
						}

						function qe() {
							this.ad = a(384), this.Za = 0, this.Ob = a(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0
						}

						function ze() {
							this.uc = this.M = this.Nb = 0, this.wa = Array(new Me), this.Y = 0, this.ya = Array(new qe), this.aa = 0, this.l = new Ve
						}

						function Ze() {
							this.y = a(16), this.f = a(8), this.ea = a(8)
						}

						function He() {
							this.cb = this.a = 0, this.sc = "", this.m = new w, this.Od = new Oe, this.Kc = new Te, this.ed = new Re, this.Qa = new De, this.Ic = this.$c = this.Aa = 0, this.D = new ze, this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = o(8, w), this.ia = 0, this.pb = o(4, Ue), this.Pa = new Fe, this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Ze), this.Hd = 0, this.rb = Array(new Be), this.sb = 0, this.wa = Array(new Me), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new qe), this.L = this.aa = 0, this.gd = s([4, 2], Me), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0
						}

						function Ge(e, t) {
							return 0 > e ? 0 : e > t ? t : e
						}

						function Ve() {
							this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0
						}

						function We() {
							var e = new He;
							return null != e && (e.a = 0, e.sc = "OK", e.cb = 0, e.Xb = 0, ri || (ri = Xe)), e
						}

						function Ye(e, t, n) {
							return 0 == e.a && (e.a = t, e.sc = n, e.cb = 0), 0
						}

						function Ke(e, t, n) {
							return 3 <= n && 157 == e[t + 0] && 1 == e[t + 1] && 42 == e[t + 2]
						}

						function Je(e, n) {
							if (null == e) return 0;
							if (e.a = 0, e.sc = "OK", null == n) return Ye(e, 2, "null VP8Io passed to VP8GetHeaders()");
							var r = n.data,
								a = n.w,
								o = n.ha;
							if (4 > o) return Ye(e, 7, "Truncated header.");
							var s = r[a + 0] | r[a + 1] << 8 | r[a + 2] << 16,
								c = e.Od;
							if (c.Rb = !(1 & s), c.td = s >> 1 & 7, c.yd = s >> 4 & 1, c.ub = s >> 5, 3 < c.td) return Ye(e, 3, "Incorrect keyframe parameters.");
							if (!c.yd) return Ye(e, 4, "Frame not displayable.");
							a += 3, o -= 3;
							var l = e.Kc;
							if (c.Rb) {
								if (7 > o) return Ye(e, 7, "cannot parse picture header");
								if (!Ke(r, a, o)) return Ye(e, 3, "Bad code word");
								l.c = 16383 & (r[a + 4] << 8 | r[a + 3]), l.Td = r[a + 4] >> 6, l.i = 16383 & (r[a + 6] << 8 | r[a + 5]), l.Ud = r[a + 6] >> 6, a += 7, o -= 7, e.za = l.c + 15 >> 4, e.Ub = l.i + 15 >> 4, n.width = l.c, n.height = l.i, n.Da = 0, n.j = 0, n.v = 0, n.va = n.width, n.o = n.height, n.da = 0, n.ib = n.width, n.hb = n.height, n.U = n.width, n.T = n.height, i((s = e.Pa).jb, 0, 255, s.jb.length), t(null != (s = e.Qa)), s.Cb = 0, s.Bb = 0, s.Fb = 1, i(s.Zb, 0, 0, s.Zb.length), i(s.Lb, 0, 0, s.Lb)
							}
							if (c.ub > o) return Ye(e, 7, "bad partition length");
							p(s = e.m, r, a, c.ub), a += c.ub, o -= c.ub, c.Rb && (l.Ld = L(s), l.Kd = L(s)), l = e.Qa;
							var u, h = e.Pa;
							if (t(null != s), t(null != l), l.Cb = L(s), l.Cb) {
								if (l.Bb = L(s), L(s)) {
									for (l.Fb = L(s), u = 0; 4 > u; ++u) l.Zb[u] = L(s) ? g(s, 7) : 0;
									for (u = 0; 4 > u; ++u) l.Lb[u] = L(s) ? g(s, 6) : 0
								}
								if (l.Bb)
									for (u = 0; 3 > u; ++u) h.jb[u] = L(s) ? m(s, 8) : 255
							} else l.Bb = 0;
							if (s.Ka) return Ye(e, 3, "cannot parse segment header");
							if ((l = e.ed).zd = L(s), l.Tb = m(s, 6), l.wb = m(s, 3), l.Pc = L(s), l.Pc && L(s)) {
								for (h = 0; 4 > h; ++h) L(s) && (l.vd[h] = g(s, 6));
								for (h = 0; 4 > h; ++h) L(s) && (l.od[h] = g(s, 6))
							}
							if (e.L = 0 == l.Tb ? 0 : l.zd ? 1 : 2, s.Ka) return Ye(e, 3, "cannot parse filter header");
							var d = o;
							if (o = u = a, a = u + d, l = d, e.Xb = (1 << m(e.m, 2)) - 1, d < 3 * (h = e.Xb)) r = 7;
							else {
								for (u += 3 * h, l -= 3 * h, d = 0; d < h; ++d) {
									var f = r[o + 0] | r[o + 1] << 8 | r[o + 2] << 16;
									f > l && (f = l), p(e.Jc[+d], r, u, f), u += f, l -= f, o += 3
								}
								p(e.Jc[+h], r, u, l), r = u < a ? 0 : 5
							}
							if (0 != r) return Ye(e, r, "cannot parse partitions");
							for (r = m(u = e.m, 7), o = L(u) ? g(u, 4) : 0, a = L(u) ? g(u, 4) : 0, l = L(u) ? g(u, 4) : 0, h = L(u) ? g(u, 4) : 0, u = L(u) ? g(u, 4) : 0, d = e.Qa, f = 0; 4 > f; ++f) {
								if (d.Cb) {
									var v = d.Zb[f];
									d.Fb || (v += r)
								} else {
									if (0 < f) {
										e.pb[f] = e.pb[0];
										continue
									}
									v = r
								}
								var y = e.pb[f];
								y.Sc[0] = ti[Ge(v + o, 127)], y.Sc[1] = ni[Ge(v + 0, 127)], y.Eb[0] = 2 * ti[Ge(v + a, 127)], y.Eb[1] = 101581 * ni[Ge(v + l, 127)] >> 16, 8 > y.Eb[1] && (y.Eb[1] = 8), y.Qc[0] = ti[Ge(v + h, 117)], y.Qc[1] = ni[Ge(v + u, 127)], y.lc = v + u
							}
							if (!c.Rb) return Ye(e, 4, "Not a key frame.");
							for (L(s), c = e.Pa, r = 0; 4 > r; ++r) {
								for (o = 0; 8 > o; ++o)
									for (a = 0; 3 > a; ++a)
										for (l = 0; 11 > l; ++l) h = P(s, li[r][o][a][l]) ? m(s, 8) : si[r][o][a][l], c.Wc[r][o].Yb[a][l] = h;
								for (o = 0; 17 > o; ++o) c.Xc[r][o] = c.Wc[r][ui[o]]
							}
							return e.kc = L(s), e.kc && (e.Bd = m(s, 8)), e.cb = 1
						}

						function Xe(e, t, n, r, i, a, o) {
							var s = t[i].Yb[n];
							for (n = 0; 16 > i; ++i) {
								if (!P(e, s[n + 0])) return i;
								for (; !P(e, s[n + 1]);)
									if (s = t[++i].Yb[0], n = 0, 16 == i) return 16;
								var c = t[i + 1].Yb;
								if (P(e, s[n + 2])) {
									var l = e,
										u = 0;
									if (P(l, (d = s)[(h = n) + 3]))
										if (P(l, d[h + 6])) {
											for (s = 0, h = 2 * (u = P(l, d[h + 8])) + (d = P(l, d[h + 9 + u])), u = 0, d = ii[h]; d[s]; ++s) u += u + P(l, d[s]);
											u += 3 + (8 << h)
										} else P(l, d[h + 7]) ? (u = 7 + 2 * P(l, 165), u += P(l, 145)) : u = 5 + P(l, 159);
									else u = P(l, d[h + 4]) ? 3 + P(l, d[h + 5]) : 2;
									s = c[2]
								} else u = 1, s = c[1];
								c = o + ai[i], 0 > (l = e).b && A(l);
								var h, d = l.b,
									f = (h = l.Ca >> 1) - (l.I >> d) >> 31;
								--l.b, l.Ca += f, l.Ca |= 1, l.I -= (h + 1 & f) << d, a[c] = ((u ^ f) - f) * r[(0 < i) + 0]
							}
							return 16
						}

						function $e(e) {
							var t = e.rb[e.sb - 1];
							t.la = 0, t.Na = 0, i(e.zc, 0, 0, e.zc.length), e.ja = 0
						}

						function Qe(e, n) {
							if (null == e) return 0;
							if (null == n) return Ye(e, 2, "NULL VP8Io parameter in VP8Decode().");
							if (!e.cb && !Je(e, n)) return 0;
							if (t(e.cb), null == n.ac || n.ac(n)) {
								n.ob && (e.L = 0);
								var s = Bi[e.L];
								if (2 == e.L ? (e.yb = 0, e.zb = 0) : (e.yb = n.v - s >> 4, e.zb = n.j - s >> 4, 0 > e.yb && (e.yb = 0), 0 > e.zb && (e.zb = 0)), e.Va = n.o + 15 + s >> 4, e.Hb = n.va + 15 + s >> 4, e.Hb > e.za && (e.Hb = e.za), e.Va > e.Ub && (e.Va = e.Ub), 0 < e.L) {
									var c = e.ed;
									for (s = 0; 4 > s; ++s) {
										var l;
										if (e.Qa.Cb) {
											var u = e.Qa.Lb[s];
											e.Qa.Fb || (u += c.Tb)
										} else u = c.Tb;
										for (l = 0; 1 >= l; ++l) {
											var h = e.gd[s][l],
												d = u;
											if (c.Pc && (d += c.vd[0], l && (d += c.od[0])), 0 < (d = 0 > d ? 0 : 63 < d ? 63 : d)) {
												var f = d;
												0 < c.wb && (f = 4 < c.wb ? f >> 2 : f >> 1) > 9 - c.wb && (f = 9 - c.wb), 1 > f && (f = 1), h.dd = f, h.tc = 2 * d + f, h.ld = 40 <= d ? 2 : 15 <= d ? 1 : 0
											} else h.tc = 0;
											h.La = l
										}
									}
								}
								s = 0
							} else Ye(e, 6, "Frame setup failed"), s = e.a;
							if (s = 0 == s) {
								if (s) {
									e.$c = 0, 0 < e.Aa || (e.Ic = qi);
									e: {
										s = e.Ic,
										c = 4 * (f = e.za);
										var p = 32 * f,
											m = f + 1,
											g = 0 < e.L ? f * (0 < e.Aa ? 2 : 1) : 0,
											v = (2 == e.Aa ? 2 : 1) * f;
										if ((h = c + 832 + (l = 3 * (16 * s + Bi[e.L]) / 2 * p) + (u = null != e.Fa && 0 < e.Fa.length ? e.Kc.c * e.Kc.i : 0)) != h) s = 0;
										else {
											if (h > e.Vb) {
												if (e.Vb = 0, e.Ec = a(h), e.Fc = 0, null == e.Ec) {
													s = Ye(e, 1, "no memory during frame initialization.");
													break e
												}
												e.Vb = h
											}
											h = e.Ec, d = e.Fc, e.Ac = h, e.Bc = d, d += c, e.Gd = o(p, Ze), e.Hd = 0, e.rb = o(m + 1, Be), e.sb = 1, e.wa = g ? o(g, Me) : null, e.Y = 0, e.D.Nb = 0, e.D.wa = e.wa, e.D.Y = e.Y, 0 < e.Aa && (e.D.Y += f), t(!0), e.oc = h, e.pc = d, d += 832, e.ya = o(v, qe), e.aa = 0, e.D.ya = e.ya, e.D.aa = e.aa, 2 == e.Aa && (e.D.aa += f), e.R = 16 * f, e.B = 8 * f, f = (p = Bi[e.L]) * e.R, p = p / 2 * e.B, e.sa = h, e.ta = d + f, e.qa = e.sa, e.ra = e.ta + 16 * s * e.R + p, e.Ha = e.qa, e.Ia = e.ra + 8 * s * e.B + p, e.$c = 0, d += l, e.mb = u ? h : null, e.nb = u ? d : null, t(d + u <= e.Fc + e.Vb), $e(e), i(e.Ac, e.Bc, 0, c), s = 1
										}
									}
									if (s) {
										if (n.ka = 0, n.y = e.sa, n.O = e.ta, n.f = e.qa, n.N = e.ra, n.ea = e.Ha, n.Vd = e.Ia, n.fa = e.R, n.Rc = e.B, n.F = null, n.J = 0, !_r) {
											for (s = -255; 255 >= s; ++s) Lr[255 + s] = 0 > s ? -s : s;
											for (s = -1020; 1020 >= s; ++s) Pr[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
											for (s = -112; 112 >= s; ++s) Ir[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
											for (s = -255; 510 >= s; ++s) Cr[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
											_r = 1
										}
										ar = lt, or = at, cr = ot, lr = st, ur = ct, sr = it, hr = Yt, dr = Kt, fr = $t, pr = Qt, mr = Jt, gr = Xt, vr = en, yr = tn, br = zt, wr = Zt, xr = Ht, Sr = Gt, di[0] = Nt, di[1] = ht, di[2] = St, di[3] = jt, di[4] = kt, di[5] = Lt, di[6] = At, di[7] = Pt, di[8] = Ct, di[9] = It, hi[0] = vt, hi[1] = ft, hi[2] = pt, hi[3] = mt, hi[4] = yt, hi[5] = bt, hi[6] = wt, fi[0] = Dt, fi[1] = dt, fi[2] = _t, fi[3] = Ot, fi[4] = Ft, fi[5] = Et, fi[6] = Rt, s = 1
									} else s = 0
								}
								s && (s = function(e, n) {
									for (e.M = 0; e.M < e.Va; ++e.M) {
										var o, s = e.Jc[e.M & e.Xb],
											c = e.m,
											l = e;
										for (o = 0; o < l.za; ++o) {
											var u = c,
												h = l,
												d = h.Ac,
												f = h.Bc + 4 * o,
												p = h.zc,
												m = h.ya[h.aa + o];
											if (h.Qa.Bb ? m.$b = P(u, h.Pa.jb[0]) ? 2 + P(u, h.Pa.jb[2]) : P(u, h.Pa.jb[1]) : m.$b = 0, h.kc && (m.Ad = P(u, h.Bd)), m.Za = !P(u, 145) + 0, m.Za) {
												var g = m.Ob,
													v = 0;
												for (h = 0; 4 > h; ++h) {
													var y, b = p[0 + h];
													for (y = 0; 4 > y; ++y) {
														b = ci[d[f + y]][b];
														for (var w = oi[P(u, b[0])]; 0 < w;) w = oi[2 * w + P(u, b[w])];
														b = -w, d[f + y] = b
													}
													r(g, v, d, f, 4), v += 4, p[0 + h] = b
												}
											} else b = P(u, 156) ? P(u, 128) ? 1 : 3 : P(u, 163) ? 2 : 0, m.Ob[0] = b, i(d, f, b, 4), i(p, 0, b, 4);
											m.Dd = P(u, 142) ? P(u, 114) ? P(u, 183) ? 1 : 3 : 2 : 0
										}
										if (l.m.Ka) return Ye(e, 7, "Premature end-of-partition0 encountered.");
										for (; e.ja < e.za; ++e.ja) {
											if (l = s, u = (c = e).rb[c.sb - 1], d = c.rb[c.sb + c.ja], o = c.ya[c.aa + c.ja], f = c.kc ? o.Ad : 0) u.la = d.la = 0, o.Za || (u.Na = d.Na = 0), o.Hc = 0, o.Gc = 0, o.ia = 0;
											else {
												var x, S;
												if (u = d, d = l, f = c.Pa.Xc, p = c.ya[c.aa + c.ja], m = c.pb[p.$b], h = p.ad, g = 0, v = c.rb[c.sb - 1], b = y = 0, i(h, g, 0, 384), p.Za) var j = 0,
													N = f[3];
												else {
													w = a(16);
													var k = u.Na + v.Na;
													if (k = ri(d, f[1], k, m.Eb, 0, w, 0), u.Na = v.Na = (0 < k) + 0, 1 < k) ar(w, 0, h, g);
													else {
														var A = w[0] + 3 >> 3;
														for (w = 0; 256 > w; w += 16) h[g + w] = A
													}
													j = 1, N = f[0]
												}
												var L = 15 & u.la,
													I = 15 & v.la;
												for (w = 0; 4 > w; ++w) {
													var C = 1 & I;
													for (A = S = 0; 4 > A; ++A) L = L >> 1 | (C = (k = ri(d, N, k = C + (1 & L), m.Sc, j, h, g)) > j) << 7, S = S << 2 | (3 < k ? 3 : 1 < k ? 2 : 0 != h[g + 0]), g += 16;
													L >>= 4, I = I >> 1 | C << 7, y = (y << 8 | S) >>> 0
												}
												for (N = L, j = I >> 4, x = 0; 4 > x; x += 2) {
													for (S = 0, L = u.la >> 4 + x, I = v.la >> 4 + x, w = 0; 2 > w; ++w) {
														for (C = 1 & I, A = 0; 2 > A; ++A) k = C + (1 & L), L = L >> 1 | (C = 0 < (k = ri(d, f[2], k, m.Qc, 0, h, g))) << 3, S = S << 2 | (3 < k ? 3 : 1 < k ? 2 : 0 != h[g + 0]), g += 16;
														L >>= 2, I = I >> 1 | C << 5
													}
													b |= S << 4 * x, N |= L << 4 << x, j |= (240 & I) << x
												}
												u.la = N, v.la = j, p.Hc = y, p.Gc = b, p.ia = 43690 & b ? 0 : m.ia, f = !(y | b)
											}
											if (0 < c.L && (c.wa[c.Y + c.ja] = c.gd[o.$b][o.Za], c.wa[c.Y + c.ja].La |= !f), l.Ka) return Ye(e, 7, "Premature end-of-file encountered.")
										}
										if ($e(e), c = n, l = 1, o = (s = e).D, u = 0 < s.L && s.M >= s.zb && s.M <= s.Va, 0 == s.Aa) e: {
											if (o.M = s.M, o.uc = u, Dn(s, o), l = 1, o = (S = s.D).Nb, u = (b = Bi[s.L]) * s.R, d = b / 2 * s.B, w = 16 * o * s.R, A = 8 * o * s.B, f = s.sa, p = s.ta - u + w, m = s.qa, h = s.ra - d + A, g = s.Ha, v = s.Ia - d + A, I = 0 == (L = S.M), y = L >= s.Va - 1, 2 == s.Aa && Dn(s, S), S.uc)
												for (C = (k = s).D.M, t(k.D.uc), S = k.yb; S < k.Hb; ++S) {
													j = S, N = C;
													var _ = (O = (q = k).D).Nb;
													x = q.R;
													var O = O.wa[O.Y + j],
														T = q.sa,
														D = q.ta + 16 * _ * x + 16 * j,
														E = O.dd,
														F = O.tc;
													if (0 != F)
														if (t(3 <= F), 1 == q.L) 0 < j && wr(T, D, x, F + 4), O.La && Sr(T, D, x, F), 0 < N && br(T, D, x, F + 4), O.La && xr(T, D, x, F);
														else {
															var R = q.B,
																M = q.qa,
																B = q.ra + 8 * _ * R + 8 * j,
																U = q.Ha,
																q = q.Ia + 8 * _ * R + 8 * j;
															_ = O.ld, 0 < j && (dr(T, D, x, F + 4, E, _), pr(M, B, U, q, R, F + 4, E, _)), O.La && (gr(T, D, x, F, E, _), yr(M, B, U, q, R, F, E, _)), 0 < N && (hr(T, D, x, F + 4, E, _), fr(M, B, U, q, R, F + 4, E, _)), O.La && (mr(T, D, x, F, E, _), vr(M, B, U, q, R, F, E, _))
														}
												}
											if (s.ia && alert("todo:DitherRow"), null != c.put) {
												if (S = 16 * L, L = 16 * (L + 1), I ? (c.y = s.sa, c.O = s.ta + w, c.f = s.qa, c.N = s.ra + A, c.ea = s.Ha, c.W = s.Ia + A) : (S -= b, c.y = f, c.O = p, c.f = m, c.N = h, c.ea = g, c.W = v), y || (L -= b), L > c.o && (L = c.o), c.F = null, c.J = null, null != s.Fa && 0 < s.Fa.length && S < L && (c.J = dn(s, c, S, L - S), c.F = s.mb, null == c.F && 0 == c.F.length)) {
													l = Ye(s, 3, "Could not decode alpha data.");
													break e
												}
												S < c.j && (b = c.j - S, S = c.j, t(!(1 & b)), c.O += s.R * b, c.N += s.B * (b >> 1), c.W += s.B * (b >> 1), null != c.F && (c.J += c.width * b)), S < L && (c.O += c.v, c.N += c.v >> 1, c.W += c.v >> 1, null != c.F && (c.J += c.v), c.ka = S - c.j, c.U = c.va - c.v, c.T = L - S, l = c.put(c))
											}
											o + 1 != s.Ic || y || (r(s.sa, s.ta - u, f, p + 16 * s.R, u), r(s.qa, s.ra - d, m, h + 8 * s.B, d), r(s.Ha, s.Ia - d, g, v + 8 * s.B, d))
										}
										if (!l) return Ye(e, 6, "Output aborted.")
									}
									return 1
								}(e, n)), null != n.bc && n.bc(n), s &= 1
							}
							return s ? (e.cb = 0, s) : 0
						}

						function et(e, t, n, r, i) {
							i = e[t + n + 32 * r] + (i >> 3), e[t + n + 32 * r] = -256 & i ? 0 > i ? 0 : 255 : i
						}

						function tt(e, t, n, r, i, a) {
							et(e, t, 0, n, r + i), et(e, t, 1, n, r + a), et(e, t, 2, n, r - a), et(e, t, 3, n, r - i)
						}

						function nt(e) {
							return (20091 * e >> 16) + e
						}

						function rt(e, t, n, r) {
							var i, o = 0,
								s = a(16);
							for (i = 0; 4 > i; ++i) {
								var c = e[t + 0] + e[t + 8],
									l = e[t + 0] - e[t + 8],
									u = (35468 * e[t + 4] >> 16) - nt(e[t + 12]),
									h = nt(e[t + 4]) + (35468 * e[t + 12] >> 16);
								s[o + 0] = c + h, s[o + 1] = l + u, s[o + 2] = l - u, s[o + 3] = c - h, o += 4, t++
							}
							for (i = o = 0; 4 > i; ++i) c = (e = s[o + 0] + 4) + s[o + 8], l = e - s[o + 8], u = (35468 * s[o + 4] >> 16) - nt(s[o + 12]), et(n, r, 0, 0, c + (h = nt(s[o + 4]) + (35468 * s[o + 12] >> 16))), et(n, r, 1, 0, l + u), et(n, r, 2, 0, l - u), et(n, r, 3, 0, c - h), o++, r += 32
						}

						function it(e, t, n, r) {
							var i = e[t + 0] + 4,
								a = 35468 * e[t + 4] >> 16,
								o = nt(e[t + 4]),
								s = 35468 * e[t + 1] >> 16;
							tt(n, r, 0, i + o, e = nt(e[t + 1]), s), tt(n, r, 1, i + a, e, s), tt(n, r, 2, i - a, e, s), tt(n, r, 3, i - o, e, s)
						}

						function at(e, t, n, r, i) {
							rt(e, t, n, r), i && rt(e, t + 16, n, r + 4)
						}

						function ot(e, t, n, r) {
							or(e, t + 0, n, r, 1), or(e, t + 32, n, r + 128, 1)
						}

						function st(e, t, n, r) {
							var i;
							for (e = e[t + 0] + 4, i = 0; 4 > i; ++i)
								for (t = 0; 4 > t; ++t) et(n, r, t, i, e)
						}

						function ct(e, t, n, r) {
							e[t + 0] && lr(e, t + 0, n, r), e[t + 16] && lr(e, t + 16, n, r + 4), e[t + 32] && lr(e, t + 32, n, r + 128), e[t + 48] && lr(e, t + 48, n, r + 128 + 4)
						}

						function lt(e, t, n, r) {
							var i, o = a(16);
							for (i = 0; 4 > i; ++i) {
								var s = e[t + 0 + i] + e[t + 12 + i],
									c = e[t + 4 + i] + e[t + 8 + i],
									l = e[t + 4 + i] - e[t + 8 + i],
									u = e[t + 0 + i] - e[t + 12 + i];
								o[0 + i] = s + c, o[8 + i] = s - c, o[4 + i] = u + l, o[12 + i] = u - l
							}
							for (i = 0; 4 > i; ++i) s = (e = o[0 + 4 * i] + 3) + o[3 + 4 * i], c = o[1 + 4 * i] + o[2 + 4 * i], l = o[1 + 4 * i] - o[2 + 4 * i], u = e - o[3 + 4 * i], n[r + 0] = s + c >> 3, n[r + 16] = u + l >> 3, n[r + 32] = s - c >> 3, n[r + 48] = u - l >> 3, r += 64
						}

						function ut(e, t, n) {
							var r, i = t - 32,
								a = Dr,
								o = 255 - e[i - 1];
							for (r = 0; r < n; ++r) {
								var s, c = a,
									l = o + e[t - 1];
								for (s = 0; s < n; ++s) e[t + s] = c[l + e[i + s]];
								t += 32
							}
						}

						function ht(e, t) {
							ut(e, t, 4)
						}

						function dt(e, t) {
							ut(e, t, 8)
						}

						function ft(e, t) {
							ut(e, t, 16)
						}

						function pt(e, t) {
							var n;
							for (n = 0; 16 > n; ++n) r(e, t + 32 * n, e, t - 32, 16)
						}

						function mt(e, t) {
							var n;
							for (n = 16; 0 < n; --n) i(e, t, e[t - 1], 16), t += 32
						}

						function gt(e, t, n) {
							var r;
							for (r = 0; 16 > r; ++r) i(t, n + 32 * r, e, 16)
						}

						function vt(e, t) {
							var n, r = 16;
							for (n = 0; 16 > n; ++n) r += e[t - 1 + 32 * n] + e[t + n - 32];
							gt(r >> 5, e, t)
						}

						function yt(e, t) {
							var n, r = 8;
							for (n = 0; 16 > n; ++n) r += e[t - 1 + 32 * n];
							gt(r >> 4, e, t)
						}

						function bt(e, t) {
							var n, r = 8;
							for (n = 0; 16 > n; ++n) r += e[t + n - 32];
							gt(r >> 4, e, t)
						}

						function wt(e, t) {
							gt(128, e, t)
						}

						function xt(e, t, n) {
							return e + 2 * t + n + 2 >> 2
						}

						function St(e, t) {
							var n, i = t - 32;
							for (i = new Uint8Array([xt(e[i - 1], e[i + 0], e[i + 1]), xt(e[i + 0], e[i + 1], e[i + 2]), xt(e[i + 1], e[i + 2], e[i + 3]), xt(e[i + 2], e[i + 3], e[i + 4])]), n = 0; 4 > n; ++n) r(e, t + 32 * n, i, 0, i.length)
						}

						function jt(e, t) {
							var n = e[t - 1],
								r = e[t - 1 + 32],
								i = e[t - 1 + 64],
								a = e[t - 1 + 96];
							I(e, t + 0, 16843009 * xt(e[t - 1 - 32], n, r)), I(e, t + 32, 16843009 * xt(n, r, i)), I(e, t + 64, 16843009 * xt(r, i, a)), I(e, t + 96, 16843009 * xt(i, a, a))
						}

						function Nt(e, t) {
							var n, r = 4;
							for (n = 0; 4 > n; ++n) r += e[t + n - 32] + e[t - 1 + 32 * n];
							for (r >>= 3, n = 0; 4 > n; ++n) i(e, t + 32 * n, r, 4)
						}

						function kt(e, t) {
							var n = e[t - 1 + 0],
								r = e[t - 1 + 32],
								i = e[t - 1 + 64],
								a = e[t - 1 - 32],
								o = e[t + 0 - 32],
								s = e[t + 1 - 32],
								c = e[t + 2 - 32],
								l = e[t + 3 - 32];
							e[t + 0 + 96] = xt(r, i, e[t - 1 + 96]), e[t + 1 + 96] = e[t + 0 + 64] = xt(n, r, i), e[t + 2 + 96] = e[t + 1 + 64] = e[t + 0 + 32] = xt(a, n, r), e[t + 3 + 96] = e[t + 2 + 64] = e[t + 1 + 32] = e[t + 0 + 0] = xt(o, a, n), e[t + 3 + 64] = e[t + 2 + 32] = e[t + 1 + 0] = xt(s, o, a), e[t + 3 + 32] = e[t + 2 + 0] = xt(c, s, o), e[t + 3 + 0] = xt(l, c, s)
						}

						function At(e, t) {
							var n = e[t + 1 - 32],
								r = e[t + 2 - 32],
								i = e[t + 3 - 32],
								a = e[t + 4 - 32],
								o = e[t + 5 - 32],
								s = e[t + 6 - 32],
								c = e[t + 7 - 32];
							e[t + 0 + 0] = xt(e[t + 0 - 32], n, r), e[t + 1 + 0] = e[t + 0 + 32] = xt(n, r, i), e[t + 2 + 0] = e[t + 1 + 32] = e[t + 0 + 64] = xt(r, i, a), e[t + 3 + 0] = e[t + 2 + 32] = e[t + 1 + 64] = e[t + 0 + 96] = xt(i, a, o), e[t + 3 + 32] = e[t + 2 + 64] = e[t + 1 + 96] = xt(a, o, s), e[t + 3 + 64] = e[t + 2 + 96] = xt(o, s, c), e[t + 3 + 96] = xt(s, c, c)
						}

						function Lt(e, t) {
							var n = e[t - 1 + 0],
								r = e[t - 1 + 32],
								i = e[t - 1 + 64],
								a = e[t - 1 - 32],
								o = e[t + 0 - 32],
								s = e[t + 1 - 32],
								c = e[t + 2 - 32],
								l = e[t + 3 - 32];
							e[t + 0 + 0] = e[t + 1 + 64] = a + o + 1 >> 1, e[t + 1 + 0] = e[t + 2 + 64] = o + s + 1 >> 1, e[t + 2 + 0] = e[t + 3 + 64] = s + c + 1 >> 1, e[t + 3 + 0] = c + l + 1 >> 1, e[t + 0 + 96] = xt(i, r, n), e[t + 0 + 64] = xt(r, n, a), e[t + 0 + 32] = e[t + 1 + 96] = xt(n, a, o), e[t + 1 + 32] = e[t + 2 + 96] = xt(a, o, s), e[t + 2 + 32] = e[t + 3 + 96] = xt(o, s, c), e[t + 3 + 32] = xt(s, c, l)
						}

						function Pt(e, t) {
							var n = e[t + 0 - 32],
								r = e[t + 1 - 32],
								i = e[t + 2 - 32],
								a = e[t + 3 - 32],
								o = e[t + 4 - 32],
								s = e[t + 5 - 32],
								c = e[t + 6 - 32],
								l = e[t + 7 - 32];
							e[t + 0 + 0] = n + r + 1 >> 1, e[t + 1 + 0] = e[t + 0 + 64] = r + i + 1 >> 1, e[t + 2 + 0] = e[t + 1 + 64] = i + a + 1 >> 1, e[t + 3 + 0] = e[t + 2 + 64] = a + o + 1 >> 1, e[t + 0 + 32] = xt(n, r, i), e[t + 1 + 32] = e[t + 0 + 96] = xt(r, i, a), e[t + 2 + 32] = e[t + 1 + 96] = xt(i, a, o), e[t + 3 + 32] = e[t + 2 + 96] = xt(a, o, s), e[t + 3 + 64] = xt(o, s, c), e[t + 3 + 96] = xt(s, c, l)
						}

						function It(e, t) {
							var n = e[t - 1 + 0],
								r = e[t - 1 + 32],
								i = e[t - 1 + 64],
								a = e[t - 1 + 96];
							e[t + 0 + 0] = n + r + 1 >> 1, e[t + 2 + 0] = e[t + 0 + 32] = r + i + 1 >> 1, e[t + 2 + 32] = e[t + 0 + 64] = i + a + 1 >> 1, e[t + 1 + 0] = xt(n, r, i), e[t + 3 + 0] = e[t + 1 + 32] = xt(r, i, a), e[t + 3 + 32] = e[t + 1 + 64] = xt(i, a, a), e[t + 3 + 64] = e[t + 2 + 64] = e[t + 0 + 96] = e[t + 1 + 96] = e[t + 2 + 96] = e[t + 3 + 96] = a
						}

						function Ct(e, t) {
							var n = e[t - 1 + 0],
								r = e[t - 1 + 32],
								i = e[t - 1 + 64],
								a = e[t - 1 + 96],
								o = e[t - 1 - 32],
								s = e[t + 0 - 32],
								c = e[t + 1 - 32],
								l = e[t + 2 - 32];
							e[t + 0 + 0] = e[t + 2 + 32] = n + o + 1 >> 1, e[t + 0 + 32] = e[t + 2 + 64] = r + n + 1 >> 1, e[t + 0 + 64] = e[t + 2 + 96] = i + r + 1 >> 1, e[t + 0 + 96] = a + i + 1 >> 1, e[t + 3 + 0] = xt(s, c, l), e[t + 2 + 0] = xt(o, s, c), e[t + 1 + 0] = e[t + 3 + 32] = xt(n, o, s), e[t + 1 + 32] = e[t + 3 + 64] = xt(r, n, o), e[t + 1 + 64] = e[t + 3 + 96] = xt(i, r, n), e[t + 1 + 96] = xt(a, i, r)
						}

						function _t(e, t) {
							var n;
							for (n = 0; 8 > n; ++n) r(e, t + 32 * n, e, t - 32, 8)
						}

						function Ot(e, t) {
							var n;
							for (n = 0; 8 > n; ++n) i(e, t, e[t - 1], 8), t += 32
						}

						function Tt(e, t, n) {
							var r;
							for (r = 0; 8 > r; ++r) i(t, n + 32 * r, e, 8)
						}

						function Dt(e, t) {
							var n, r = 8;
							for (n = 0; 8 > n; ++n) r += e[t + n - 32] + e[t - 1 + 32 * n];
							Tt(r >> 4, e, t)
						}

						function Et(e, t) {
							var n, r = 4;
							for (n = 0; 8 > n; ++n) r += e[t + n - 32];
							Tt(r >> 3, e, t)
						}

						function Ft(e, t) {
							var n, r = 4;
							for (n = 0; 8 > n; ++n) r += e[t - 1 + 32 * n];
							Tt(r >> 3, e, t)
						}

						function Rt(e, t) {
							Tt(128, e, t)
						}

						function Mt(e, t, n) {
							var r = e[t - n],
								i = e[t + 0],
								a = 3 * (i - r) + Or[1020 + e[t - 2 * n] - e[t + n]],
								o = Tr[112 + (a + 4 >> 3)];
							e[t - n] = Dr[255 + r + Tr[112 + (a + 3 >> 3)]], e[t + 0] = Dr[255 + i - o]
						}

						function Bt(e, t, n, r) {
							var i = e[t + 0],
								a = e[t + n];
							return Er[255 + e[t - 2 * n] - e[t - n]] > r || Er[255 + a - i] > r
						}

						function Ut(e, t, n, r) {
							return 4 * Er[255 + e[t - n] - e[t + 0]] + Er[255 + e[t - 2 * n] - e[t + n]] <= r
						}

						function qt(e, t, n, r, i) {
							var a = e[t - 3 * n],
								o = e[t - 2 * n],
								s = e[t - n],
								c = e[t + 0],
								l = e[t + n],
								u = e[t + 2 * n],
								h = e[t + 3 * n];
							return 4 * Er[255 + s - c] + Er[255 + o - l] > r ? 0 : Er[255 + e[t - 4 * n] - a] <= i && Er[255 + a - o] <= i && Er[255 + o - s] <= i && Er[255 + h - u] <= i && Er[255 + u - l] <= i && Er[255 + l - c] <= i
						}

						function zt(e, t, n, r) {
							var i = 2 * r + 1;
							for (r = 0; 16 > r; ++r) Ut(e, t + r, n, i) && Mt(e, t + r, n)
						}

						function Zt(e, t, n, r) {
							var i = 2 * r + 1;
							for (r = 0; 16 > r; ++r) Ut(e, t + r * n, 1, i) && Mt(e, t + r * n, 1)
						}

						function Ht(e, t, n, r) {
							var i;
							for (i = 3; 0 < i; --i) zt(e, t += 4 * n, n, r)
						}

						function Gt(e, t, n, r) {
							var i;
							for (i = 3; 0 < i; --i) Zt(e, t += 4, n, r)
						}

						function Vt(e, t, n, r, i, a, o, s) {
							for (a = 2 * a + 1; 0 < i--;) {
								if (qt(e, t, n, a, o))
									if (Bt(e, t, n, s)) Mt(e, t, n);
									else {
										var c = e,
											l = t,
											u = n,
											h = c[l - 2 * u],
											d = c[l - u],
											f = c[l + 0],
											p = c[l + u],
											m = c[l + 2 * u],
											g = 27 * (y = Or[1020 + 3 * (f - d) + Or[1020 + h - p]]) + 63 >> 7,
											v = 18 * y + 63 >> 7,
											y = 9 * y + 63 >> 7;
										c[l - 3 * u] = Dr[255 + c[l - 3 * u] + y], c[l - 2 * u] = Dr[255 + h + v], c[l - u] = Dr[255 + d + g], c[l + 0] = Dr[255 + f - g], c[l + u] = Dr[255 + p - v], c[l + 2 * u] = Dr[255 + m - y]
									} t += r
							}
						}

						function Wt(e, t, n, r, i, a, o, s) {
							for (a = 2 * a + 1; 0 < i--;) {
								if (qt(e, t, n, a, o))
									if (Bt(e, t, n, s)) Mt(e, t, n);
									else {
										var c = e,
											l = t,
											u = n,
											h = c[l - u],
											d = c[l + 0],
											f = c[l + u],
											p = Tr[112 + (4 + (m = 3 * (d - h)) >> 3)],
											m = Tr[112 + (m + 3 >> 3)],
											g = p + 1 >> 1;
										c[l - 2 * u] = Dr[255 + c[l - 2 * u] + g], c[l - u] = Dr[255 + h + m], c[l + 0] = Dr[255 + d - p], c[l + u] = Dr[255 + f - g]
									} t += r
							}
						}

						function Yt(e, t, n, r, i, a) {
							Vt(e, t, n, 1, 16, r, i, a)
						}

						function Kt(e, t, n, r, i, a) {
							Vt(e, t, 1, n, 16, r, i, a)
						}

						function Jt(e, t, n, r, i, a) {
							var o;
							for (o = 3; 0 < o; --o) Wt(e, t += 4 * n, n, 1, 16, r, i, a)
						}

						function Xt(e, t, n, r, i, a) {
							var o;
							for (o = 3; 0 < o; --o) Wt(e, t += 4, 1, n, 16, r, i, a)
						}

						function $t(e, t, n, r, i, a, o, s) {
							Vt(e, t, i, 1, 8, a, o, s), Vt(n, r, i, 1, 8, a, o, s)
						}

						function Qt(e, t, n, r, i, a, o, s) {
							Vt(e, t, 1, i, 8, a, o, s), Vt(n, r, 1, i, 8, a, o, s)
						}

						function en(e, t, n, r, i, a, o, s) {
							Wt(e, t + 4 * i, i, 1, 8, a, o, s), Wt(n, r + 4 * i, i, 1, 8, a, o, s)
						}

						function tn(e, t, n, r, i, a, o, s) {
							Wt(e, t + 4, 1, i, 8, a, o, s), Wt(n, r + 4, 1, i, 8, a, o, s)
						}

						function nn() {
							this.ba = new oe, this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new ce, this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc"
						}

						function rn() {
							this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0
						}

						function an() {
							this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0
						}

						function on() {
							this.ua = 0, this.Wa = new E, this.vb = new E, this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new f, this.yc = new h
						}

						function sn() {
							this.xb = this.a = 0, this.l = new Ve, this.ca = new oe, this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new x, this.Pb = 0, this.wd = new x, this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new on, this.ab = 0, this.gc = o(4, an), this.Oc = 0
						}

						function cn() {
							this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Ve, this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0
						}

						function ln(e, t, n, r, i, a, o) {
							for (e = null == e ? 0 : e[t + 0], t = 0; t < o; ++t) i[a + t] = e + n[r + t] & 255, e = i[a + t]
						}

						function un(e, t, n, r, i, a, o) {
							var s;
							if (null == e) ln(null, null, n, r, i, a, o);
							else
								for (s = 0; s < o; ++s) i[a + s] = e[t + s] + n[r + s] & 255
						}

						function hn(e, t, n, r, i, a, o) {
							if (null == e) ln(null, null, n, r, i, a, o);
							else {
								var s, c = e[t + 0],
									l = c,
									u = c;
								for (s = 0; s < o; ++s) l = u + (c = e[t + s]) - l, u = n[r + s] + (-256 & l ? 0 > l ? 0 : 255 : l) & 255, l = c, i[a + s] = u
							}
						}

						function dn(e, n, i, o) {
							var s = n.width,
								c = n.o;
							if (t(null != e && null != n), 0 > i || 0 >= o || i + o > c) return null;
							if (!e.Cc) {
								if (null == e.ga) {
									var l;
									if (e.ga = new cn, (l = null == e.ga) || (l = n.width * n.o, t(0 == e.Gb.length), e.Gb = a(l), e.Uc = 0, null == e.Gb ? l = 0 : (e.mb = e.Gb, e.nb = e.Uc, e.rc = null, l = 1), l = !l), !l) {
										l = e.ga;
										var u = e.Fa,
											h = e.P,
											d = e.qc,
											f = e.mb,
											p = e.nb,
											m = h + 1,
											g = d - 1,
											y = l.l;
										if (t(null != u && null != f && null != n), gi[0] = null, gi[1] = ln, gi[2] = un, gi[3] = hn, l.ca = f, l.tb = p, l.c = n.width, l.i = n.height, t(0 < l.c && 0 < l.i), 1 >= d) n = 0;
										else if (l.$a = u[h + 0] >> 0 & 3, l.Z = u[h + 0] >> 2 & 3, l.Lc = u[h + 0] >> 4 & 3, h = u[h + 0] >> 6 & 3, 0 > l.$a || 1 < l.$a || 4 <= l.Z || 1 < l.Lc || h) n = 0;
										else if (y.put = fe, y.ac = de, y.bc = pe, y.ma = l, y.width = n.width, y.height = n.height, y.Da = n.Da, y.v = n.v, y.va = n.va, y.j = n.j, y.o = n.o, l.$a) e: {
											t(1 == l.$a),
											n = Pe();t: for (;;) {
												if (null == n) {
													n = 0;
													break e
												}
												if (t(null != l), l.mc = n, n.c = l.c, n.i = l.i, n.l = l.l, n.l.ma = l, n.l.width = l.c, n.l.height = l.i, n.a = 0, v(n.m, u, m, g), !Ie(l.c, l.i, 1, n, null)) break t;
												if (1 == n.ab && 3 == n.gc[0].hc && je(n.s) ? (l.ic = 1, u = n.c * n.i, n.Ta = null, n.Ua = 0, n.V = a(u), n.Ba = 0, null == n.V ? (n.a = 1, n = 0) : n = 1) : (l.ic = 0, n = Ce(n, l.c)), !n) break t;
												n = 1;
												break e
											}
											l.mc = null,
											n = 0
										}
										else n = g >= l.c * l.i;
										l = !n
									}
									if (l) return null;
									1 != e.ga.Lc ? e.Ga = 0 : o = c - i
								}
								t(null != e.ga), t(i + o <= c);
								e: {
									if (n = (u = e.ga).c, c = u.l.o, 0 == u.$a) {
										if (m = e.rc, g = e.Vc, y = e.Fa, h = e.P + 1 + i * n, d = e.mb, f = e.nb + i * n, t(h <= e.P + e.qc), 0 != u.Z)
											for (t(null != gi[u.Z]), l = 0; l < o; ++l) gi[u.Z](m, g, y, h, d, f, n), m = d, g = f, f += n, h += n;
										else
											for (l = 0; l < o; ++l) r(d, f, y, h, n), m = d, g = f, f += n, h += n;
										e.rc = m, e.Vc = g
									} else {
										if (t(null != u.mc), n = i + o, t(null != (l = u.mc)), t(n <= l.i), l.C >= n) n = 1;
										else if (u.ic || vn(), u.ic) {
											u = l.V, m = l.Ba, g = l.c;
											var b = l.i,
												w = (y = 1, h = l.$ / g, d = l.$ % g, f = l.m, p = l.s, l.$),
												x = g * b,
												S = g * n,
												N = p.wc,
												A = w < S ? we(p, d, h) : null;
											t(w <= x), t(n <= b), t(je(p));
											t: for (;;) {
												for (; !f.h && w < S;) {
													if (d & N || (A = we(p, d, h)), t(null != A), k(f), 256 > (b = ye(A.G[0], A.H[0], f))) u[m + w] = b, ++w, ++d >= g && (d = 0, ++h <= n && !(h % 16) && ke(l, h));
													else {
														if (!(280 > b)) {
															y = 0;
															break t
														}
														b = ge(b - 256, f);
														var L, P = ye(A.G[4], A.H[4], f);
														if (k(f), !(w >= (P = ve(g, P = ge(P, f))) && x - w >= b)) {
															y = 0;
															break t
														}
														for (L = 0; L < b; ++L) u[m + w + L] = u[m + w + L - P];
														for (w += b, d += b; d >= g;) d -= g, ++h <= n && !(h % 16) && ke(l, h);
														w < S && d & N && (A = we(p, d, h))
													}
													t(f.h == j(f))
												}
												ke(l, h > n ? n : h);
												break t
											}!y || f.h && w < x ? (y = 0, l.a = f.h ? 5 : 3) : l.$ = w, n = y
										} else n = Ae(l, l.V, l.Ba, l.c, l.i, n, _e);
										if (!n) {
											o = 0;
											break e
										}
									}
									i + o >= c && (e.Cc = 1),
									o = 1
								}
								if (!o) return null;
								if (e.Cc && (null != (o = e.ga) && (o.mc = null), e.ga = null, 0 < e.Ga)) return alert("todo:WebPDequantizeLevels"), null
							}
							return e.nb + i * s
						}

						function fn(e, t, n, r, i, a) {
							for (; 0 < i--;) {
								var o, s = e,
									c = t + (n ? 1 : 0),
									l = e,
									u = t + (n ? 0 : 3);
								for (o = 0; o < r; ++o) {
									var h = l[u + 4 * o];
									255 != h && (h *= 32897, s[c + 4 * o + 0] = s[c + 4 * o + 0] * h >> 23, s[c + 4 * o + 1] = s[c + 4 * o + 1] * h >> 23, s[c + 4 * o + 2] = s[c + 4 * o + 2] * h >> 23)
								}
								t += a
							}
						}

						function pn(e, t, n, r, i) {
							for (; 0 < r--;) {
								var a;
								for (a = 0; a < n; ++a) {
									var o = e[t + 2 * a + 0],
										s = 15 & (l = e[t + 2 * a + 1]),
										c = 4369 * s,
										l = (240 & l | l >> 4) * c >> 16;
									e[t + 2 * a + 0] = (240 & o | o >> 4) * c >> 16 & 240 | (15 & o | o << 4) * c >> 16 >> 4 & 15, e[t + 2 * a + 1] = 240 & l | s
								}
								t += i
							}
						}

						function mn(e, t, n, r, i, a, o, s) {
							var c, l, u = 255;
							for (l = 0; l < i; ++l) {
								for (c = 0; c < r; ++c) {
									var h = e[t + c];
									a[o + 4 * c] = h, u &= h
								}
								t += n, o += s
							}
							return 255 != u
						}

						function gn(e, t, n, r, i) {
							var a;
							for (a = 0; a < i; ++a) n[r + a] = e[t + a] >> 8
						}

						function vn() {
							jr = fn, Nr = pn, kr = mn, Ar = gn
						}

						function yn(n, r, i) {
							e[n] = function(e, n, a, o, s, c, l, u, h, d, f, p, m, g, v, y, b) {
								var w, x = b - 1 >> 1,
									S = s[c + 0] | l[u + 0] << 16,
									j = h[d + 0] | f[p + 0] << 16;
								t(null != e);
								var N = 3 * S + j + 131074 >> 2;
								for (r(e[n + 0], 255 & N, N >> 16, m, g), null != a && (N = 3 * j + S + 131074 >> 2, r(a[o + 0], 255 & N, N >> 16, v, y)), w = 1; w <= x; ++w) {
									var k = s[c + w] | l[u + w] << 16,
										A = h[d + w] | f[p + w] << 16,
										L = S + k + j + A + 524296,
										P = L + 2 * (k + j) >> 3;
									N = P + S >> 1, S = (L = L + 2 * (S + A) >> 3) + k >> 1, r(e[n + 2 * w - 1], 255 & N, N >> 16, m, g + (2 * w - 1) * i), r(e[n + 2 * w - 0], 255 & S, S >> 16, m, g + (2 * w - 0) * i), null != a && (N = L + j >> 1, S = P + A >> 1, r(a[o + 2 * w - 1], 255 & N, N >> 16, v, y + (2 * w - 1) * i), r(a[o + 2 * w + 0], 255 & S, S >> 16, v, y + (2 * w + 0) * i)), S = k, j = A
								}
								1 & b || (N = 3 * S + j + 131074 >> 2, r(e[n + b - 1], 255 & N, N >> 16, m, g + (b - 1) * i), null != a && (N = 3 * j + S + 131074 >> 2, r(a[o + b - 1], 255 & N, N >> 16, v, y + (b - 1) * i)))
							}
						}

						function bn() {
							vi[Fr] = yi, vi[Rr] = wi, vi[Mr] = bi, vi[Br] = xi, vi[Ur] = Si, vi[qr] = ji, vi[zr] = Ni, vi[Zr] = wi, vi[Hr] = xi, vi[Gr] = Si, vi[Vr] = ji
						}

						function wn(e) {
							return e & ~Ci ? 0 > e ? 0 : 255 : e >> Ii
						}

						function xn(e, t) {
							return wn((19077 * e >> 8) + (26149 * t >> 8) - 14234)
						}

						function Sn(e, t, n) {
							return wn((19077 * e >> 8) - (6419 * t >> 8) - (13320 * n >> 8) + 8708)
						}

						function jn(e, t) {
							return wn((19077 * e >> 8) + (33050 * t >> 8) - 17685)
						}

						function Nn(e, t, n, r, i) {
							r[i + 0] = xn(e, n), r[i + 1] = Sn(e, t, n), r[i + 2] = jn(e, t)
						}

						function kn(e, t, n, r, i) {
							r[i + 0] = jn(e, t), r[i + 1] = Sn(e, t, n), r[i + 2] = xn(e, n)
						}

						function An(e, t, n, r, i) {
							var a = Sn(e, t, n);
							t = a << 3 & 224 | jn(e, t) >> 3, r[i + 0] = 248 & xn(e, n) | a >> 5, r[i + 1] = t
						}

						function Ln(e, t, n, r, i) {
							var a = 240 & jn(e, t) | 15;
							r[i + 0] = 240 & xn(e, n) | Sn(e, t, n) >> 4, r[i + 1] = a
						}

						function Pn(e, t, n, r, i) {
							r[i + 0] = 255, Nn(e, t, n, r, i + 1)
						}

						function In(e, t, n, r, i) {
							kn(e, t, n, r, i), r[i + 3] = 255
						}

						function Cn(e, t, n, r, i) {
							Nn(e, t, n, r, i), r[i + 3] = 255
						}

						function Ge(e, t) {
							return 0 > e ? 0 : e > t ? t : e
						}

						function _n(t, n, r) {
							e[t] = function(e, t, i, a, o, s, c, l, u) {
								for (var h = l + (-2 & u) * r; l != h;) n(e[t + 0], i[a + 0], o[s + 0], c, l), n(e[t + 1], i[a + 0], o[s + 0], c, l + r), t += 2, ++a, ++s, l += 2 * r;
								1 & u && n(e[t + 0], i[a + 0], o[s + 0], c, l)
							}
						}

						function On(e, t, n) {
							return 0 == n ? 0 == e ? 0 == t ? 6 : 5 : 0 == t ? 4 : 0 : n
						}

						function Tn(e, t, n, r, i) {
							switch (e >>> 30) {
								case 3:
									or(t, n, r, i, 0);
									break;
								case 2:
									sr(t, n, r, i);
									break;
								case 1:
									lr(t, n, r, i)
							}
						}

						function Dn(e, t) {
							var n, a, o = t.M,
								s = t.Nb,
								c = e.oc,
								l = e.pc + 40,
								u = e.oc,
								h = e.pc + 584,
								d = e.oc,
								f = e.pc + 600;
							for (n = 0; 16 > n; ++n) c[l + 32 * n - 1] = 129;
							for (n = 0; 8 > n; ++n) u[h + 32 * n - 1] = 129, d[f + 32 * n - 1] = 129;
							for (0 < o ? c[l - 1 - 32] = u[h - 1 - 32] = d[f - 1 - 32] = 129 : (i(c, l - 32 - 1, 127, 21), i(u, h - 32 - 1, 127, 9), i(d, f - 32 - 1, 127, 9)), a = 0; a < e.za; ++a) {
								var p = t.ya[t.aa + a];
								if (0 < a) {
									for (n = -1; 16 > n; ++n) r(c, l + 32 * n - 4, c, l + 32 * n + 12, 4);
									for (n = -1; 8 > n; ++n) r(u, h + 32 * n - 4, u, h + 32 * n + 4, 4), r(d, f + 32 * n - 4, d, f + 32 * n + 4, 4)
								}
								var m = e.Gd,
									g = e.Hd + a,
									v = p.ad,
									y = p.Hc;
								if (0 < o && (r(c, l - 32, m[g].y, 0, 16), r(u, h - 32, m[g].f, 0, 8), r(d, f - 32, m[g].ea, 0, 8)), p.Za) {
									var b = c,
										w = l - 32 + 16;
									for (0 < o && (a >= e.za - 1 ? i(b, w, m[g].y[15], 4) : r(b, w, m[g + 1].y, 0, 4)), n = 0; 4 > n; n++) b[w + 128 + n] = b[w + 256 + n] = b[w + 384 + n] = b[w + 0 + n];
									for (n = 0; 16 > n; ++n, y <<= 2) b = c, w = l + Mi[n], di[p.Ob[n]](b, w), Tn(y, v, 16 * +n, b, w)
								} else if (b = On(a, o, p.Ob[0]), hi[b](c, l), 0 != y)
									for (n = 0; 16 > n; ++n, y <<= 2) Tn(y, v, 16 * +n, c, l + Mi[n]);
								for (n = p.Gc, b = On(a, o, p.Dd), fi[b](u, h), fi[b](d, f), y = v, b = u, w = h, 255 & (p = n >> 0) && (170 & p ? cr(y, 256, b, w) : ur(y, 256, b, w)), p = d, y = f, 255 & (n >>= 8) && (170 & n ? cr(v, 320, p, y) : ur(v, 320, p, y)), o < e.Ub - 1 && (r(m[g].y, 0, c, l + 480, 16), r(m[g].f, 0, u, h + 224, 8), r(m[g].ea, 0, d, f + 224, 8)), n = 8 * s * e.B, m = e.sa, g = e.ta + 16 * a + 16 * s * e.R, v = e.qa, p = e.ra + 8 * a + n, y = e.Ha, b = e.Ia + 8 * a + n, n = 0; 16 > n; ++n) r(m, g + n * e.R, c, l + 32 * n, 16);
								for (n = 0; 8 > n; ++n) r(v, p + n * e.B, u, h + 32 * n, 8), r(y, b + n * e.B, d, f + 32 * n, 8)
							}
						}

						function En(e, r, i, a, o, s, c, l, u) {
							var h = [0],
								d = [0],
								f = 0,
								p = null != u ? u.kd : 0,
								m = null != u ? u : new rn;
							if (null == e || 12 > i) return 7;
							m.data = e, m.w = r, m.ha = i, r = [r], i = [i], m.gb = [m.gb];
							e: {
								var g = r,
									y = i,
									b = m.gb;
								if (t(null != e), t(null != y), t(null != b), b[0] = 0, 12 <= y[0] && !n(e, g[0], "RIFF")) {
									if (n(e, g[0] + 8, "WEBP")) {
										b = 3;
										break e
									}
									var w = O(e, g[0] + 4);
									if (12 > w || 4294967286 < w) {
										b = 3;
										break e
									}
									if (p && w > y[0] - 8) {
										b = 7;
										break e
									}
									b[0] = w, g[0] += 12, y[0] -= 12
								}
								b = 0
							}
							if (0 != b) return b;
							for (w = 0 < m.gb[0], i = i[0];;) {
								e: {
									var S = e;y = r,
									b = i;
									var j = h,
										N = d,
										k = g = [0];
									if ((P = f = [f])[0] = 0, 8 > b[0]) b = 7;
									else {
										if (!n(S, y[0], "VP8X")) {
											if (10 != O(S, y[0] + 4)) {
												b = 3;
												break e
											}
											if (18 > b[0]) {
												b = 7;
												break e
											}
											var A = O(S, y[0] + 8),
												L = 1 + _(S, y[0] + 12);
											if (2147483648 <= L * (S = 1 + _(S, y[0] + 15))) {
												b = 3;
												break e
											}
											null != k && (k[0] = A), null != j && (j[0] = L), null != N && (N[0] = S), y[0] += 18, b[0] -= 18, P[0] = 1
										}
										b = 0
									}
								}
								if (f = f[0], g = g[0], 0 != b) return b;
								if (y = !!(2 & g), !w && f) return 3;
								if (null != s && (s[0] = !!(16 & g)), null != c && (c[0] = y), null != l && (l[0] = 0), c = h[0], g = d[0], f && y && null == u) {
									b = 0;
									break
								}
								if (4 > i) {
									b = 7;
									break
								}
								if (w && f || !w && !f && !n(e, r[0], "ALPH")) {
									i = [i], m.na = [m.na], m.P = [m.P], m.Sa = [m.Sa];
									e: {
										A = e,
										b = r,
										w = i;
										var P = m.gb;j = m.na,
										N = m.P,
										k = m.Sa,
										L = 22,
										t(null != A),
										t(null != w),
										S = b[0];
										var I = w[0];
										for (t(null != j), t(null != k), j[0] = null, N[0] = null, k[0] = 0;;) {
											if (b[0] = S, w[0] = I, 8 > I) {
												b = 7;
												break e
											}
											var C = O(A, S + 4);
											if (4294967286 < C) {
												b = 3;
												break e
											}
											var T = 8 + C + 1 & -2;
											if (L += T, 0 < P && L > P) {
												b = 3;
												break e
											}
											if (!n(A, S, "VP8 ") || !n(A, S, "VP8L")) {
												b = 0;
												break e
											}
											if (I[0] < T) {
												b = 7;
												break e
											}
											n(A, S, "ALPH") || (j[0] = A, N[0] = S + 8, k[0] = C), S += T, I -= T
										}
									}
									if (i = i[0], m.na = m.na[0], m.P = m.P[0], m.Sa = m.Sa[0], 0 != b) break
								}
								i = [i],
								m.Ja = [m.Ja],
								m.xa = [m.xa];e: if (P = e, b = r, w = i, j = m.gb[0], N = m.Ja, k = m.xa, A = b[0], S = !n(P, A, "VP8 "), L = !n(P, A, "VP8L"), t(null != P), t(null != w), t(null != N), t(null != k), 8 > w[0]) b = 7;
									else {
										if (S || L) {
											if (P = O(P, A + 4), 12 <= j && P > j - 12) {
												b = 3;
												break e
											}
											if (p && P > w[0] - 8) {
												b = 7;
												break e
											}
											N[0] = P, b[0] += 8, w[0] -= 8, k[0] = L
										} else k[0] = 5 <= w[0] && 47 == P[A + 0] && !(P[A + 4] >> 5), N[0] = w[0];
										b = 0
									}if (i = i[0], m.Ja = m.Ja[0], m.xa = m.xa[0], r = r[0], 0 != b) break;
								if (4294967286 < m.Ja) return 3;
								if (null == l || y || (l[0] = m.xa ? 2 : 1), c = [c], g = [g], m.xa) {
									if (5 > i) {
										b = 7;
										break
									}
									l = c, p = g, y = s, null == e || 5 > i ? e = 0 : 5 <= i && 47 == e[r + 0] && !(e[r + 4] >> 5) ? (w = [0], P = [0], j = [0], v(N = new x, e, r, i), me(N, w, P, j) ? (null != l && (l[0] = w[0]), null != p && (p[0] = P[0]), null != y && (y[0] = j[0]), e = 1) : e = 0) : e = 0
								} else {
									if (10 > i) {
										b = 7;
										break
									}
									l = g, null == e || 10 > i || !Ke(e, r + 3, i - 3) ? e = 0 : (p = e[r + 0] | e[r + 1] << 8 | e[r + 2] << 16, y = 16383 & (e[r + 7] << 8 | e[r + 6]), e = 16383 & (e[r + 9] << 8 | e[r + 8]), 1 & p || 3 < (p >> 1 & 7) || !(p >> 4 & 1) || p >> 5 >= m.Ja || !y || !e ? e = 0 : (c && (c[0] = y), l && (l[0] = e), e = 1))
								}
								if (!e) return 3;
								if (c = c[0], g = g[0], f && (h[0] != c || d[0] != g)) return 3;null != u && (u[0] = m, u.offset = r - u.w, t(4294967286 > r - u.w), t(u.offset == u.ha - i));
								break
							}
							return 0 == b || 7 == b && f && null == u ? (null != s && (s[0] |= null != m.na && 0 < m.na.length), null != a && (a[0] = c), null != o && (o[0] = g), 0) : b
						}

						function Fn(e, t, n) {
							var r = t.width,
								i = t.height,
								a = 0,
								o = 0,
								s = r,
								c = i;
							if (t.Da = null != e && 0 < e.Da, t.Da && (s = e.cd, c = e.bd, a = e.v, o = e.j, 11 > n || (a &= -2, o &= -2), 0 > a || 0 > o || 0 >= s || 0 >= c || a + s > r || o + c > i)) return 0;
							if (t.v = a, t.j = o, t.va = a + s, t.o = o + c, t.U = s, t.T = c, t.da = null != e && 0 < e.da, t.da) {
								if (!F(s, c, n = [e.ib], a = [e.hb])) return 0;
								t.ib = n[0], t.hb = a[0]
							}
							return t.ob = null != e && e.ob, t.Kb = null == e || !e.Sd, t.da && (t.ob = t.ib < 3 * r / 4 && t.hb < 3 * i / 4, t.Kb = 0), 1
						}

						function Rn(e) {
							if (null == e) return 2;
							if (11 > e.S) {
								var t = e.f.RGBA;
								t.fb += (e.height - 1) * t.A, t.A = -t.A
							} else t = e.f.kb, e = e.height, t.O += (e - 1) * t.fa, t.fa = -t.fa, t.N += (e - 1 >> 1) * t.Ab, t.Ab = -t.Ab, t.W += (e - 1 >> 1) * t.Db, t.Db = -t.Db, null != t.F && (t.J += (e - 1) * t.lb, t.lb = -t.lb);
							return 0
						}

						function Mn(e, t, n, r) {
							if (null == r || 0 >= e || 0 >= t) return 2;
							if (null != n) {
								if (n.Da) {
									var i = n.cd,
										o = n.bd,
										s = -2 & n.v,
										c = -2 & n.j;
									if (0 > s || 0 > c || 0 >= i || 0 >= o || s + i > e || c + o > t) return 2;
									e = i, t = o
								}
								if (n.da) {
									if (!F(e, t, i = [n.ib], o = [n.hb])) return 2;
									e = i[0], t = o[0]
								}
							}
							r.width = e, r.height = t;
							e: {
								var l = r.width,
									u = r.height;
								if (e = r.S, 0 >= l || 0 >= u || !(e >= Fr && 13 > e)) e = 2;
								else {
									if (0 >= r.Rd && null == r.sd) {
										s = o = i = t = 0;
										var h = (c = l * zi[e]) * u;
										if (11 > e || (o = (u + 1) / 2 * (t = (l + 1) / 2), 12 == e && (s = (i = l) * u)), null == (u = a(h + 2 * o + s))) {
											e = 1;
											break e
										}
										r.sd = u, 11 > e ? ((l = r.f.RGBA).eb = u, l.fb = 0, l.A = c, l.size = h) : ((l = r.f.kb).y = u, l.O = 0, l.fa = c, l.Fd = h, l.f = u, l.N = 0 + h, l.Ab = t, l.Cd = o, l.ea = u, l.W = 0 + h + o, l.Db = t, l.Ed = o, 12 == e && (l.F = u, l.J = 0 + h + 2 * o), l.Tc = s, l.lb = i)
									}
									if (t = 1, i = r.S, o = r.width, s = r.height, i >= Fr && 13 > i)
										if (11 > i) e = r.f.RGBA, t &= (c = Math.abs(e.A)) * (s - 1) + o <= e.size, t &= c >= o * zi[i], t &= null != e.eb;
										else {
											e = r.f.kb, c = (o + 1) / 2, h = (s + 1) / 2, l = Math.abs(e.fa), u = Math.abs(e.Ab);
											var d = Math.abs(e.Db),
												f = Math.abs(e.lb),
												p = f * (s - 1) + o;
											t &= l * (s - 1) + o <= e.Fd, t &= u * (h - 1) + c <= e.Cd, t = (t &= d * (h - 1) + c <= e.Ed) & l >= o & u >= c & d >= c, t &= null != e.y, t &= null != e.f, t &= null != e.ea, 12 == i && (t &= f >= o, t &= p <= e.Tc, t &= null != e.F)
										}
									else t = 0;
									e = t ? 0 : 2
								}
							}
							return 0 != e || null != n && n.fd && (e = Rn(r)), e
						}
						var Bn = 64,
							Un = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215],
							qn = 24,
							zn = 32,
							Zn = 8,
							Hn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
						B("Predictor0", "PredictorAdd0"), e.Predictor0 = function() {
							return 4278190080
						}, e.Predictor1 = function(e) {
							return e
						}, e.Predictor2 = function(e, t, n) {
							return t[n + 0]
						}, e.Predictor3 = function(e, t, n) {
							return t[n + 1]
						}, e.Predictor4 = function(e, t, n) {
							return t[n - 1]
						}, e.Predictor5 = function(e, t, n) {
							return q(q(e, t[n + 1]), t[n + 0])
						}, e.Predictor6 = function(e, t, n) {
							return q(e, t[n - 1])
						}, e.Predictor7 = function(e, t, n) {
							return q(e, t[n + 0])
						}, e.Predictor8 = function(e, t, n) {
							return q(t[n - 1], t[n + 0])
						}, e.Predictor9 = function(e, t, n) {
							return q(t[n + 0], t[n + 1])
						}, e.Predictor10 = function(e, t, n) {
							return q(q(e, t[n - 1]), q(t[n + 0], t[n + 1]))
						}, e.Predictor11 = function(e, t, n) {
							var r = t[n + 0];
							return 0 >= H(r >> 24 & 255, e >> 24 & 255, (t = t[n - 1]) >> 24 & 255) + H(r >> 16 & 255, e >> 16 & 255, t >> 16 & 255) + H(r >> 8 & 255, e >> 8 & 255, t >> 8 & 255) + H(255 & r, 255 & e, 255 & t) ? r : e
						}, e.Predictor12 = function(e, t, n) {
							var r = t[n + 0];
							return (z((e >> 24 & 255) + (r >> 24 & 255) - ((t = t[n - 1]) >> 24 & 255)) << 24 | z((e >> 16 & 255) + (r >> 16 & 255) - (t >> 16 & 255)) << 16 | z((e >> 8 & 255) + (r >> 8 & 255) - (t >> 8 & 255)) << 8 | z((255 & e) + (255 & r) - (255 & t))) >>> 0
						}, e.Predictor13 = function(e, t, n) {
							var r = t[n - 1];
							return (Z((e = q(e, t[n + 0])) >> 24 & 255, r >> 24 & 255) << 24 | Z(e >> 16 & 255, r >> 16 & 255) << 16 | Z(e >> 8 & 255, r >> 8 & 255) << 8 | Z(e >> 0 & 255, r >> 0 & 255)) >>> 0
						};
						var Gn = e.PredictorAdd0;
						e.PredictorAdd1 = G, B("Predictor2", "PredictorAdd2"), B("Predictor3", "PredictorAdd3"), B("Predictor4", "PredictorAdd4"), B("Predictor5", "PredictorAdd5"), B("Predictor6", "PredictorAdd6"), B("Predictor7", "PredictorAdd7"), B("Predictor8", "PredictorAdd8"), B("Predictor9", "PredictorAdd9"), B("Predictor10", "PredictorAdd10"), B("Predictor11", "PredictorAdd11"), B("Predictor12", "PredictorAdd12"), B("Predictor13", "PredictorAdd13");
						var Vn = e.PredictorAdd2;
						K("ColorIndexInverseTransform", "MapARGB", "32b", (function(e) {
							return e >> 8 & 255
						}), (function(e) {
							return e
						})), K("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", (function(e) {
							return e
						}), (function(e) {
							return e >> 8 & 255
						}));
						var Wn, Yn = e.ColorIndexInverseTransform,
							Kn = e.MapARGB,
							Jn = e.VP8LColorIndexInverseTransformAlpha,
							Xn = e.MapAlpha,
							$n = e.VP8LPredictorsAdd = [];
						$n.length = 16, (e.VP8LPredictors = []).length = 16, (e.VP8LPredictorsAdd_C = []).length = 16, (e.VP8LPredictors_C = []).length = 16;
						var Qn, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, hr, dr, fr, pr, mr, gr, vr, yr, br, wr, xr, Sr, jr, Nr, kr, Ar, Lr = a(511),
							Pr = a(2041),
							Ir = a(225),
							Cr = a(767),
							_r = 0,
							Or = Pr,
							Tr = Ir,
							Dr = Cr,
							Er = Lr,
							Fr = 0,
							Rr = 1,
							Mr = 2,
							Br = 3,
							Ur = 4,
							qr = 5,
							zr = 6,
							Zr = 7,
							Hr = 8,
							Gr = 9,
							Vr = 10,
							Wr = [2, 3, 7],
							Yr = [3, 3, 11],
							Kr = [280, 256, 256, 256, 40],
							Jr = [0, 1, 1, 1, 0],
							Xr = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
							$r = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112],
							Qr = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
							ei = 8,
							ti = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157],
							ni = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284],
							ri = null,
							ii = [
								[173, 148, 140, 0],
								[176, 155, 140, 135, 0],
								[180, 157, 141, 134, 130, 0],
								[254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
							],
							ai = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
							oi = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
							si = [
								[
									[
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
									],
									[
										[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
										[189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
										[106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
									],
									[
										[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
										[181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
										[78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
									],
									[
										[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
										[184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
										[77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
									],
									[
										[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
										[170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
										[37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
									],
									[
										[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
										[207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
										[102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
									],
									[
										[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
										[177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
										[80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
									],
									[
										[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
									]
								],
								[
									[
										[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
										[131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
										[68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
									],
									[
										[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
										[184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
										[81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
									],
									[
										[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
										[99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
										[23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
									],
									[
										[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
										[109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
										[44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
									],
									[
										[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
										[94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
										[22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
									],
									[
										[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
										[124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
										[35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
									],
									[
										[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
										[121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
										[45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
									],
									[
										[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
										[203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
										[137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
									]
								],
								[
									[
										[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
										[175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
										[73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
									],
									[
										[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
										[239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
										[155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
									],
									[
										[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
										[201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
										[69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
									],
									[
										[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
										[223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
										[141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
									],
									[
										[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
										[190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
										[149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
									],
									[
										[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
									],
									[
										[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
										[213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
										[55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
									],
									[
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
										[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
									]
								],
								[
									[
										[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
										[126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
										[61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
									],
									[
										[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
										[166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
										[39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
									],
									[
										[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
										[124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
										[24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
									],
									[
										[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
										[149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
										[28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
									],
									[
										[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
										[123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
										[20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
									],
									[
										[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
										[168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
										[47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
									],
									[
										[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
										[141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
										[42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
									],
									[
										[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
										[238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
									]
								]
							],
							ci = [
								[
									[231, 120, 48, 89, 115, 113, 120, 152, 112],
									[152, 179, 64, 126, 170, 118, 46, 70, 95],
									[175, 69, 143, 80, 85, 82, 72, 155, 103],
									[56, 58, 10, 171, 218, 189, 17, 13, 152],
									[114, 26, 17, 163, 44, 195, 21, 10, 173],
									[121, 24, 80, 195, 26, 62, 44, 64, 85],
									[144, 71, 10, 38, 171, 213, 144, 34, 26],
									[170, 46, 55, 19, 136, 160, 33, 206, 71],
									[63, 20, 8, 114, 114, 208, 12, 9, 226],
									[81, 40, 11, 96, 182, 84, 29, 16, 36]
								],
								[
									[134, 183, 89, 137, 98, 101, 106, 165, 148],
									[72, 187, 100, 130, 157, 111, 32, 75, 80],
									[66, 102, 167, 99, 74, 62, 40, 234, 128],
									[41, 53, 9, 178, 241, 141, 26, 8, 107],
									[74, 43, 26, 146, 73, 166, 49, 23, 157],
									[65, 38, 105, 160, 51, 52, 31, 115, 128],
									[104, 79, 12, 27, 217, 255, 87, 17, 7],
									[87, 68, 71, 44, 114, 51, 15, 186, 23],
									[47, 41, 14, 110, 182, 183, 21, 17, 194],
									[66, 45, 25, 102, 197, 189, 23, 18, 22]
								],
								[
									[88, 88, 147, 150, 42, 46, 45, 196, 205],
									[43, 97, 183, 117, 85, 38, 35, 179, 61],
									[39, 53, 200, 87, 26, 21, 43, 232, 171],
									[56, 34, 51, 104, 114, 102, 29, 93, 77],
									[39, 28, 85, 171, 58, 165, 90, 98, 64],
									[34, 22, 116, 206, 23, 34, 43, 166, 73],
									[107, 54, 32, 26, 51, 1, 81, 43, 31],
									[68, 25, 106, 22, 64, 171, 36, 225, 114],
									[34, 19, 21, 102, 132, 188, 16, 76, 124],
									[62, 18, 78, 95, 85, 57, 50, 48, 51]
								],
								[
									[193, 101, 35, 159, 215, 111, 89, 46, 111],
									[60, 148, 31, 172, 219, 228, 21, 18, 111],
									[112, 113, 77, 85, 179, 255, 38, 120, 114],
									[40, 42, 1, 196, 245, 209, 10, 25, 109],
									[88, 43, 29, 140, 166, 213, 37, 43, 154],
									[61, 63, 30, 155, 67, 45, 68, 1, 209],
									[100, 80, 8, 43, 154, 1, 51, 26, 71],
									[142, 78, 78, 16, 255, 128, 34, 197, 171],
									[41, 40, 5, 102, 211, 183, 4, 1, 221],
									[51, 50, 17, 168, 209, 192, 23, 25, 82]
								],
								[
									[138, 31, 36, 171, 27, 166, 38, 44, 229],
									[67, 87, 58, 169, 82, 115, 26, 59, 179],
									[63, 59, 90, 180, 59, 166, 93, 73, 154],
									[40, 40, 21, 116, 143, 209, 34, 39, 175],
									[47, 15, 16, 183, 34, 223, 49, 45, 183],
									[46, 17, 33, 183, 6, 98, 15, 32, 183],
									[57, 46, 22, 24, 128, 1, 54, 17, 37],
									[65, 32, 73, 115, 28, 128, 23, 128, 205],
									[40, 3, 9, 115, 51, 192, 18, 6, 223],
									[87, 37, 9, 115, 59, 77, 64, 21, 47]
								],
								[
									[104, 55, 44, 218, 9, 54, 53, 130, 226],
									[64, 90, 70, 205, 40, 41, 23, 26, 57],
									[54, 57, 112, 184, 5, 41, 38, 166, 213],
									[30, 34, 26, 133, 152, 116, 10, 32, 134],
									[39, 19, 53, 221, 26, 114, 32, 73, 255],
									[31, 9, 65, 234, 2, 15, 1, 118, 73],
									[75, 32, 12, 51, 192, 255, 160, 43, 51],
									[88, 31, 35, 67, 102, 85, 55, 186, 85],
									[56, 21, 23, 111, 59, 205, 45, 37, 192],
									[55, 38, 70, 124, 73, 102, 1, 34, 98]
								],
								[
									[125, 98, 42, 88, 104, 85, 117, 175, 82],
									[95, 84, 53, 89, 128, 100, 113, 101, 45],
									[75, 79, 123, 47, 51, 128, 81, 171, 1],
									[57, 17, 5, 71, 102, 57, 53, 41, 49],
									[38, 33, 13, 121, 57, 73, 26, 1, 85],
									[41, 10, 67, 138, 77, 110, 90, 47, 114],
									[115, 21, 2, 10, 102, 255, 166, 23, 6],
									[101, 29, 16, 10, 85, 128, 101, 196, 26],
									[57, 18, 10, 102, 102, 213, 34, 20, 43],
									[117, 20, 15, 36, 163, 128, 68, 1, 26]
								],
								[
									[102, 61, 71, 37, 34, 53, 31, 243, 192],
									[69, 60, 71, 38, 73, 119, 28, 222, 37],
									[68, 45, 128, 34, 1, 47, 11, 245, 171],
									[62, 17, 19, 70, 146, 85, 55, 62, 70],
									[37, 43, 37, 154, 100, 163, 85, 160, 1],
									[63, 9, 92, 136, 28, 64, 32, 201, 85],
									[75, 15, 9, 9, 64, 255, 184, 119, 16],
									[86, 6, 28, 5, 64, 255, 25, 248, 1],
									[56, 8, 17, 132, 137, 255, 55, 116, 128],
									[58, 15, 20, 82, 135, 57, 26, 121, 40]
								],
								[
									[164, 50, 31, 137, 154, 133, 25, 35, 218],
									[51, 103, 44, 131, 131, 123, 31, 6, 158],
									[86, 40, 64, 135, 148, 224, 45, 183, 128],
									[22, 26, 17, 131, 240, 154, 14, 1, 209],
									[45, 16, 21, 91, 64, 222, 7, 1, 197],
									[56, 21, 39, 155, 60, 138, 23, 102, 213],
									[83, 12, 13, 54, 192, 255, 68, 47, 28],
									[85, 26, 85, 85, 128, 128, 32, 146, 171],
									[18, 11, 7, 63, 144, 171, 4, 4, 246],
									[35, 27, 10, 146, 174, 171, 12, 26, 128]
								],
								[
									[190, 80, 35, 99, 180, 80, 126, 54, 45],
									[85, 126, 47, 87, 176, 51, 41, 20, 32],
									[101, 75, 128, 139, 118, 146, 116, 128, 85],
									[56, 41, 15, 176, 236, 85, 37, 9, 62],
									[71, 30, 17, 119, 118, 255, 17, 18, 138],
									[101, 38, 60, 138, 55, 70, 43, 26, 142],
									[146, 36, 19, 30, 171, 255, 97, 27, 20],
									[138, 45, 61, 62, 219, 1, 81, 188, 64],
									[32, 41, 20, 117, 151, 142, 20, 21, 163],
									[112, 19, 12, 61, 195, 128, 48, 4, 24]
								]
							],
							li = [
								[
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
										[249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
										[234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
										[250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
										[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									]
								],
								[
									[
										[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
										[234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
									],
									[
										[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									]
								],
								[
									[
										[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
										[234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
										[251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
									],
									[
										[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									]
								],
								[
									[
										[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
										[248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
										[248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
										[250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									],
									[
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
										[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
									]
								]
							],
							ui = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
							hi = [],
							di = [],
							fi = [],
							pi = 1,
							mi = 2,
							gi = [],
							vi = [];
						yn("UpsampleRgbLinePair", Nn, 3), yn("UpsampleBgrLinePair", kn, 3), yn("UpsampleRgbaLinePair", Cn, 4), yn("UpsampleBgraLinePair", In, 4), yn("UpsampleArgbLinePair", Pn, 4), yn("UpsampleRgba4444LinePair", Ln, 2), yn("UpsampleRgb565LinePair", An, 2);
						var yi = e.UpsampleRgbLinePair,
							bi = e.UpsampleBgrLinePair,
							wi = e.UpsampleRgbaLinePair,
							xi = e.UpsampleBgraLinePair,
							Si = e.UpsampleArgbLinePair,
							ji = e.UpsampleRgba4444LinePair,
							Ni = e.UpsampleRgb565LinePair,
							ki = 16,
							Ai = 1 << ki - 1,
							Li = -227,
							Pi = 482,
							Ii = 6,
							Ci = (256 << Ii) - 1,
							_i = 0,
							Oi = a(256),
							Ti = a(256),
							Di = a(256),
							Ei = a(256),
							Fi = a(Pi - Li),
							Ri = a(Pi - Li);
						_n("YuvToRgbRow", Nn, 3), _n("YuvToBgrRow", kn, 3), _n("YuvToRgbaRow", Cn, 4), _n("YuvToBgraRow", In, 4), _n("YuvToArgbRow", Pn, 4), _n("YuvToRgba4444Row", Ln, 2), _n("YuvToRgb565Row", An, 2);
						var Mi = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396],
							Bi = [0, 2, 8],
							Ui = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
							qi = 1;
						this.WebPDecodeRGBA = function(e, n, r, i, a) {
							var o = Rr,
								s = new nn,
								c = new oe;
							s.ba = c, c.S = o, c.width = [c.width], c.height = [c.height];
							var l = c.width,
								u = c.height,
								h = new se;
							if (null == h || null == e) var d = 2;
							else t(null != h), d = En(e, n, r, h.width, h.height, h.Pd, h.Qd, h.format, null);
							if (0 != d ? l = 0 : (null != l && (l[0] = h.width[0]), null != u && (u[0] = h.height[0]), l = 1), l) {
								c.width = c.width[0], c.height = c.height[0], null != i && (i[0] = c.width), null != a && (a[0] = c.height);
								e: {
									if (i = new Ve, (a = new rn).data = e, a.w = n, a.ha = r, a.kd = 1, n = [0], t(null != a), (0 == (e = En(a.data, a.w, a.ha, null, null, null, n, null, a)) || 7 == e) && n[0] && (e = 4), 0 == (n = e)) {
										if (t(null != s), i.data = a.data, i.w = a.w + a.offset, i.ha = a.ha - a.offset, i.put = fe, i.ac = de, i.bc = pe, i.ma = s, a.xa) {
											if (null == (e = Pe())) {
												s = 1;
												break e
											}
											if (function(e, n) {
													var r = [0],
														i = [0],
														a = [0];
													t: for (;;) {
														if (null == e) return 0;
														if (null == n) return e.a = 2, 0;
														if (e.l = n, e.a = 0, v(e.m, n.data, n.w, n.ha), !me(e.m, r, i, a)) {
															e.a = 3;
															break t
														}
														if (e.xb = mi, n.width = r[0], n.height = i[0], !Ie(r[0], i[0], 1, e, null)) break t;
														return 1
													}
													return t(0 != e.a), 0
												}(e, i)) {
												if (i = 0 == (n = Mn(i.width, i.height, s.Oa, s.ba))) {
													t: {
														i = e;n: for (;;) {
															if (null == i) {
																i = 0;
																break t
															}
															if (t(null != i.s.yc), t(null != i.s.Ya), t(0 < i.s.Wb), t(null != (r = i.l)), t(null != (a = r.ma)), 0 != i.xb) {
																if (i.ca = a.ba, i.tb = a.tb, t(null != i.ca), !Fn(a.Oa, r, Br)) {
																	i.a = 2;
																	break n
																}
																if (!Ce(i, r.width)) break n;
																if (r.da) break n;
																if ((r.da || re(i.ca.S)) && vn(), 11 > i.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), null != i.ca.f.kb.F && vn()), i.Pb && 0 < i.s.ua && null == i.s.vb.X && !T(i.s.vb, i.s.Wa.Xa)) {
																	i.a = 1;
																	break n
																}
																i.xb = 0
															}
															if (!Ae(i, i.V, i.Ba, i.c, i.i, r.o, Se)) break n;
															a.Dc = i.Ma, i = 1;
															break t
														}
														t(0 != i.a),
														i = 0
													}
													i = !i
												}
												i && (n = e.a)
											} else n = e.a
										} else {
											if (null == (e = new We)) {
												s = 1;
												break e
											}
											if (e.Fa = a.na, e.P = a.P, e.qc = a.Sa, Je(e, i)) {
												if (0 == (n = Mn(i.width, i.height, s.Oa, s.ba))) {
													if (e.Aa = 0, r = s.Oa, t(null != (a = e)), null != r) {
														if (0 < (l = 0 > (l = r.Md) ? 0 : 100 < l ? 255 : 255 * l / 100)) {
															for (u = h = 0; 4 > u; ++u) 12 > (d = a.pb[u]).lc && (d.ia = l * Ui[0 > d.lc ? 0 : d.lc] >> 3), h |= d.ia;
															h && (alert("todo:VP8InitRandom"), a.ia = 1)
														}
														a.Ga = r.Id, 100 < a.Ga ? a.Ga = 100 : 0 > a.Ga && (a.Ga = 0)
													}
													Qe(e, i) || (n = e.a)
												}
											} else n = e.a
										}
										0 == n && null != s.Oa && s.Oa.fd && (n = Rn(s.ba))
									}
									s = n
								}
								o = 0 != s ? null : 11 > o ? c.f.RGBA.eb : c.f.kb.y
							} else o = null;
							return o
						};
						var zi = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1]
					};

					function l(e, t) {
						for (var n = "", r = 0; r < 4; r++) n += String.fromCharCode(e[t++]);
						return n
					}

					function u(e, t) {
						return (e[t + 0] << 0 | e[t + 1] << 8 | e[t + 2] << 16) >>> 0
					}

					function h(e, t) {
						return (e[t + 0] << 0 | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
					}
					new c;
					var d = [0],
						f = [0],
						p = [],
						m = new c,
						g = e,
						v = function(e, t) {
							var n = {},
								r = 0,
								i = !1,
								a = 0,
								o = 0;
							if (n.frames = [], ! function(e, t, n, r) {
									for (var i = 0; i < 4; i++)
										if (e[t + i] != "RIFF".charCodeAt(i)) return !0;
									return !1
								}(e, t)) {
								var s, c;
								for (h(e, t += 4), t += 8; t < e.length;) {
									var d = l(e, t),
										f = h(e, t += 4);
									t += 4;
									var p = f + (1 & f);
									switch (d) {
										case "VP8 ":
										case "VP8L":
											void 0 === n.frames[r] && (n.frames[r] = {}), (v = n.frames[r]).src_off = i ? o : t - 8, v.src_size = a + f + 8, r++, i && (i = !1, a = 0, o = 0);
											break;
										case "VP8X":
											(v = n.header = {}).feature_flags = e[t];
											var m = t + 4;
											v.canvas_width = 1 + u(e, m), m += 3, v.canvas_height = 1 + u(e, m), m += 3;
											break;
										case "ALPH":
											i = !0, a = p + 8, o = t - 8;
											break;
										case "ANIM":
											(v = n.header).bgcolor = h(e, t), m = t + 4, v.loop_count = (s = e)[(c = m) + 0] << 0 | s[c + 1] << 8, m += 2;
											break;
										case "ANMF":
											var g, v;
											(v = n.frames[r] = {}).offset_x = 2 * u(e, t), t += 3, v.offset_y = 2 * u(e, t), t += 3, v.width = 1 + u(e, t), t += 3, v.height = 1 + u(e, t), t += 3, v.duration = u(e, t), t += 3, g = e[t++], v.dispose = 1 & g, v.blend = g >> 1 & 1
									}
									"ANMF" != d && (t += p)
								}
								return n
							}
						}(g, 0);
					v.response = g, v.rgbaoutput = !0, v.dataurl = !1;
					var y = v.header ? v.header : null,
						b = v.frames ? v.frames : null;
					if (y) {
						y.loop_counter = y.loop_count, d = [y.canvas_height], f = [y.canvas_width];
						for (var w = 0; w < b.length && 0 != b[w].blend; w++);
					}
					var x = b[0],
						S = m.WebPDecodeRGBA(g, x.src_off, x.src_size, f, d);
					x.rgba = S, x.imgwidth = f[0], x.imgheight = d[0];
					for (var j = 0; j < f[0] * d[0] * 4; j++) p[j] = S[j];
					return this.width = f, this.height = d, this.data = p, this
				}! function(e) {
					var t = function(t, r, c, l) {
							var u = 4,
								h = a;
							switch (l) {
								case e.image_compression.FAST:
									u = 1, h = i;
									break;
								case e.image_compression.MEDIUM:
									u = 6, h = o;
									break;
								case e.image_compression.SLOW:
									u = 9, h = s
							}
							t = n(t, r, c, h);
							var d = (0, bi.iZ)(t, {
								level: u
							});
							return e.__addimage__.arrayBufferToBinaryString(d)
						},
						n = function(e, t, n, r) {
							for (var i, a, o, s = e.length / t, c = new Uint8Array(e.length + s), h = l(), d = 0; d < s; d += 1) {
								if (o = d * t, i = e.subarray(o, o + t), r) c.set(r(i, n, a), o + d);
								else {
									for (var f, p = h.length, m = []; f < p; f += 1) m[f] = h[f](i, n, a);
									var g = u(m.concat());
									c.set(m[g], o + d)
								}
								a = i
							}
							return c
						},
						r = function(e) {
							var t = Array.apply([], e);
							return t.unshift(0), t
						},
						i = function(e, t) {
							var n, r = [],
								i = e.length;
							r[0] = 1;
							for (var a = 0; a < i; a += 1) n = e[a - t] || 0, r[a + 1] = e[a] - n + 256 & 255;
							return r
						},
						a = function(e, t, n) {
							var r, i = [],
								a = e.length;
							i[0] = 2;
							for (var o = 0; o < a; o += 1) r = n && n[o] || 0, i[o + 1] = e[o] - r + 256 & 255;
							return i
						},
						o = function(e, t, n) {
							var r, i, a = [],
								o = e.length;
							a[0] = 3;
							for (var s = 0; s < o; s += 1) r = e[s - t] || 0, i = n && n[s] || 0, a[s + 1] = e[s] + 256 - (r + i >>> 1) & 255;
							return a
						},
						s = function(e, t, n) {
							var r, i, a, o, s = [],
								l = e.length;
							s[0] = 4;
							for (var u = 0; u < l; u += 1) r = e[u - t] || 0, i = n && n[u] || 0, a = n && n[u - t] || 0, o = c(r, i, a), s[u + 1] = e[u] - o + 256 & 255;
							return s
						},
						c = function(e, t, n) {
							if (e === t && t === n) return e;
							var r = Math.abs(t - n),
								i = Math.abs(e - n),
								a = Math.abs(e + t - n - n);
							return r <= i && r <= a ? e : i <= a ? t : n
						},
						l = function() {
							return [r, i, a, o, s]
						},
						u = function(e) {
							var t = e.map((function(e) {
								return e.reduce((function(e, t) {
									return e + Math.abs(t)
								}), 0)
							}));
							return t.indexOf(Math.min.apply(null, t))
						};
					e.processPNG = function(n, r, i, a) {
						var o, s, c, l, u, h, d, f, p, m, g, v, y, b, w, x = this.decode.FLATE_DECODE,
							S = "";
						if (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)), this.__addimage__.isArrayBufferView(n)) {
							if (n = (c = new fo(n)).imgData, s = c.bits, o = c.colorSpace, u = c.colors, -1 !== [4, 6].indexOf(c.colorType)) {
								if (8 === c.bits) {
									p = (f = 32 == c.pixelBitlength ? new Uint32Array(c.decodePixels().buffer) : 16 == c.pixelBitlength ? new Uint16Array(c.decodePixels().buffer) : new Uint8Array(c.decodePixels().buffer)).length, g = new Uint8Array(p * c.colors), m = new Uint8Array(p);
									var j, N = c.pixelBitlength - c.bits;
									for (b = 0, w = 0; b < p; b++) {
										for (y = f[b], j = 0; j < N;) g[w++] = y >>> j & 255, j += c.bits;
										m[b] = y >>> j & 255
									}
								}
								if (16 === c.bits) {
									p = (f = new Uint32Array(c.decodePixels().buffer)).length, g = new Uint8Array(p * (32 / c.pixelBitlength) * c.colors), m = new Uint8Array(p * (32 / c.pixelBitlength)), v = c.colors > 1, b = 0, w = 0;
									for (var k = 0; b < p;) y = f[b++], g[w++] = y >>> 0 & 255, v && (g[w++] = y >>> 16 & 255, y = f[b++], g[w++] = y >>> 0 & 255), m[k++] = y >>> 16 & 255;
									s = 8
								}
								a !== e.image_compression.NONE && "function" == typeof bi.iZ ? (n = t(g, c.width * c.colors, c.colors, a), d = t(m, c.width, 1, a)) : (n = g, d = m, x = void 0)
							}
							if (3 === c.colorType && (o = this.color_spaces.INDEXED, h = c.palette, c.transparency.indexed)) {
								var A = c.transparency.indexed,
									L = 0;
								for (b = 0, p = A.length; b < p; ++b) L += A[b];
								if ((L /= 255) == p - 1 && -1 !== A.indexOf(0)) l = [A.indexOf(0)];
								else if (L !== p) {
									for (f = c.decodePixels(), m = new Uint8Array(f.length), b = 0, p = f.length; b < p; b++) m[b] = A[f[b]];
									d = t(m, c.width, 1)
								}
							}
							var P = function(t) {
								var n;
								switch (t) {
									case e.image_compression.FAST:
										n = 11;
										break;
									case e.image_compression.MEDIUM:
										n = 13;
										break;
									case e.image_compression.SLOW:
										n = 14;
										break;
									default:
										n = 12
								}
								return n
							}(a);
							return x === this.decode.FLATE_DECODE && (S = "/Predictor " + P + " "), S += "/Colors " + u + " /BitsPerComponent " + s + " /Columns " + c.width, (this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) && (n = this.__addimage__.arrayBufferToBinaryString(n)), (d && this.__addimage__.isArrayBuffer(d) || this.__addimage__.isArrayBufferView(d)) && (d = this.__addimage__.arrayBufferToBinaryString(d)), {
								alias: i,
								data: n,
								index: r,
								filter: x,
								decodeParameters: S,
								transparency: l,
								palette: h,
								sMask: d,
								predictor: P,
								width: c.width,
								height: c.height,
								bitsPerComponent: s,
								colorSpace: o
							}
						}
					}
				}(Qi.API),
				function(e) {
					e.processGIF89A = function(t, n, r, i) {
						var a = new po(t),
							o = a.width,
							s = a.height,
							c = [];
						a.decodeAndBlitFrameRGBA(0, c);
						var l = {
								data: c,
								width: o,
								height: s
							},
							u = new go(100).encode(l, 100);
						return e.processJPEG.call(this, u, n, r, i)
					}, e.processGIF87A = e.processGIF89A
				}(Qi.API), vo.prototype.parseHeader = function() {
						if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
							var e = 0 === this.colors ? 1 << this.bitPP : this.colors;
							this.palette = new Array(e);
							for (var t = 0; t < e; t++) {
								var n = this.datav.getUint8(this.pos++, !0),
									r = this.datav.getUint8(this.pos++, !0),
									i = this.datav.getUint8(this.pos++, !0),
									a = this.datav.getUint8(this.pos++, !0);
								this.palette[t] = {
									red: i,
									green: r,
									blue: n,
									quad: a
								}
							}
						}
						this.height < 0 && (this.height *= -1, this.bottom_up = !1)
					}, vo.prototype.parseBGR = function() {
						this.pos = this.offset;
						try {
							var e = "bit" + this.bitPP,
								t = this.width * this.height * 4;
							this.data = new Uint8Array(t), this[e]()
						} catch (e) {
							Si.log("bit decode error:" + e)
						}
					}, vo.prototype.bit1 = function() {
						var e, t = Math.ceil(this.width / 8),
							n = t % 4;
						for (e = this.height - 1; e >= 0; e--) {
							for (var r = this.bottom_up ? e : this.height - 1 - e, i = 0; i < t; i++)
								for (var a = this.datav.getUint8(this.pos++, !0), o = r * this.width * 4 + 8 * i * 4, s = 0; s < 8 && 8 * i + s < this.width; s++) {
									var c = this.palette[a >> 7 - s & 1];
									this.data[o + 4 * s] = c.blue, this.data[o + 4 * s + 1] = c.green, this.data[o + 4 * s + 2] = c.red, this.data[o + 4 * s + 3] = 255
								}
							0 !== n && (this.pos += 4 - n)
						}
					}, vo.prototype.bit4 = function() {
						for (var e = Math.ceil(this.width / 2), t = e % 4, n = this.height - 1; n >= 0; n--) {
							for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < e; i++) {
								var a = this.datav.getUint8(this.pos++, !0),
									o = r * this.width * 4 + 2 * i * 4,
									s = a >> 4,
									c = 15 & a,
									l = this.palette[s];
								if (this.data[o] = l.blue, this.data[o + 1] = l.green, this.data[o + 2] = l.red, this.data[o + 3] = 255, 2 * i + 1 >= this.width) break;
								l = this.palette[c], this.data[o + 4] = l.blue, this.data[o + 4 + 1] = l.green, this.data[o + 4 + 2] = l.red, this.data[o + 4 + 3] = 255
							}
							0 !== t && (this.pos += 4 - t)
						}
					}, vo.prototype.bit8 = function() {
						for (var e = this.width % 4, t = this.height - 1; t >= 0; t--) {
							for (var n = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
								var i = this.datav.getUint8(this.pos++, !0),
									a = n * this.width * 4 + 4 * r;
								if (i < this.palette.length) {
									var o = this.palette[i];
									this.data[a] = o.red, this.data[a + 1] = o.green, this.data[a + 2] = o.blue, this.data[a + 3] = 255
								} else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255
							}
							0 !== e && (this.pos += 4 - e)
						}
					}, vo.prototype.bit15 = function() {
						for (var e = this.width % 3, t = parseInt("11111", 2), n = this.height - 1; n >= 0; n--) {
							for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < this.width; i++) {
								var a = this.datav.getUint16(this.pos, !0);
								this.pos += 2;
								var o = (a & t) / t * 255 | 0,
									s = (a >> 5 & t) / t * 255 | 0,
									c = (a >> 10 & t) / t * 255 | 0,
									l = a >> 15 ? 255 : 0,
									u = r * this.width * 4 + 4 * i;
								this.data[u] = c, this.data[u + 1] = s, this.data[u + 2] = o, this.data[u + 3] = l
							}
							this.pos += e
						}
					}, vo.prototype.bit16 = function() {
						for (var e = this.width % 3, t = parseInt("11111", 2), n = parseInt("111111", 2), r = this.height - 1; r >= 0; r--) {
							for (var i = this.bottom_up ? r : this.height - 1 - r, a = 0; a < this.width; a++) {
								var o = this.datav.getUint16(this.pos, !0);
								this.pos += 2;
								var s = (o & t) / t * 255 | 0,
									c = (o >> 5 & n) / n * 255 | 0,
									l = (o >> 11) / t * 255 | 0,
									u = i * this.width * 4 + 4 * a;
								this.data[u] = l, this.data[u + 1] = c, this.data[u + 2] = s, this.data[u + 3] = 255
							}
							this.pos += e
						}
					}, vo.prototype.bit24 = function() {
						for (var e = this.height - 1; e >= 0; e--) {
							for (var t = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
								var r = this.datav.getUint8(this.pos++, !0),
									i = this.datav.getUint8(this.pos++, !0),
									a = this.datav.getUint8(this.pos++, !0),
									o = t * this.width * 4 + 4 * n;
								this.data[o] = a, this.data[o + 1] = i, this.data[o + 2] = r, this.data[o + 3] = 255
							}
							this.pos += this.width % 4
						}
					}, vo.prototype.bit32 = function() {
						for (var e = this.height - 1; e >= 0; e--)
							for (var t = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
								var r = this.datav.getUint8(this.pos++, !0),
									i = this.datav.getUint8(this.pos++, !0),
									a = this.datav.getUint8(this.pos++, !0),
									o = this.datav.getUint8(this.pos++, !0),
									s = t * this.width * 4 + 4 * n;
								this.data[s] = a, this.data[s + 1] = i, this.data[s + 2] = r, this.data[s + 3] = o
							}
					}, vo.prototype.getData = function() {
						return this.data
					},
					function(e) {
						e.processBMP = function(t, n, r, i) {
							var a = new vo(t, !1),
								o = a.width,
								s = a.height,
								c = {
									data: a.getData(),
									width: o,
									height: s
								},
								l = new go(100).encode(c, 100);
							return e.processJPEG.call(this, l, n, r, i)
						}
					}(Qi.API), yo.prototype.getData = function() {
						return this.data
					},
					function(e) {
						e.processWEBP = function(t, n, r, i) {
							var a = new yo(t, !1),
								o = a.width,
								s = a.height,
								c = {
									data: a.getData(),
									width: o,
									height: s
								},
								l = new go(100).encode(c, 100);
							return e.processJPEG.call(this, l, n, r, i)
						}
					}(Qi.API), Qi.API.processRGBA = function(e, t, n) {
						for (var r = e.data, i = r.length, a = new Uint8Array(i / 4 * 3), o = new Uint8Array(i / 4), s = 0, c = 0, l = 0; l < i; l += 4) {
							var u = r[l],
								h = r[l + 1],
								d = r[l + 2],
								f = r[l + 3];
							a[s++] = u, a[s++] = h, a[s++] = d, o[c++] = f
						}
						var p = this.__addimage__.arrayBufferToBinaryString(a);
						return {
							alpha: this.__addimage__.arrayBufferToBinaryString(o),
							data: p,
							index: t,
							alias: n,
							colorSpace: "DeviceRGB",
							bitsPerComponent: 8,
							width: e.width,
							height: e.height
						}
					}, Qi.API.setLanguage = function(e) {
						return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), void 0 !== {
							af: "Afrikaans",
							sq: "Albanian",
							ar: "Arabic (Standard)",
							"ar-DZ": "Arabic (Algeria)",
							"ar-BH": "Arabic (Bahrain)",
							"ar-EG": "Arabic (Egypt)",
							"ar-IQ": "Arabic (Iraq)",
							"ar-JO": "Arabic (Jordan)",
							"ar-KW": "Arabic (Kuwait)",
							"ar-LB": "Arabic (Lebanon)",
							"ar-LY": "Arabic (Libya)",
							"ar-MA": "Arabic (Morocco)",
							"ar-OM": "Arabic (Oman)",
							"ar-QA": "Arabic (Qatar)",
							"ar-SA": "Arabic (Saudi Arabia)",
							"ar-SY": "Arabic (Syria)",
							"ar-TN": "Arabic (Tunisia)",
							"ar-AE": "Arabic (U.A.E.)",
							"ar-YE": "Arabic (Yemen)",
							an: "Aragonese",
							hy: "Armenian",
							as: "Assamese",
							ast: "Asturian",
							az: "Azerbaijani",
							eu: "Basque",
							be: "Belarusian",
							bn: "Bengali",
							bs: "Bosnian",
							br: "Breton",
							bg: "Bulgarian",
							my: "Burmese",
							ca: "Catalan",
							ch: "Chamorro",
							ce: "Chechen",
							zh: "Chinese",
							"zh-HK": "Chinese (Hong Kong)",
							"zh-CN": "Chinese (PRC)",
							"zh-SG": "Chinese (Singapore)",
							"zh-TW": "Chinese (Taiwan)",
							cv: "Chuvash",
							co: "Corsican",
							cr: "Cree",
							hr: "Croatian",
							cs: "Czech",
							da: "Danish",
							nl: "Dutch (Standard)",
							"nl-BE": "Dutch (Belgian)",
							en: "English",
							"en-AU": "English (Australia)",
							"en-BZ": "English (Belize)",
							"en-CA": "English (Canada)",
							"en-IE": "English (Ireland)",
							"en-JM": "English (Jamaica)",
							"en-NZ": "English (New Zealand)",
							"en-PH": "English (Philippines)",
							"en-ZA": "English (South Africa)",
							"en-TT": "English (Trinidad & Tobago)",
							"en-GB": "English (United Kingdom)",
							"en-US": "English (United States)",
							"en-ZW": "English (Zimbabwe)",
							eo: "Esperanto",
							et: "Estonian",
							fo: "Faeroese",
							fj: "Fijian",
							fi: "Finnish",
							fr: "French (Standard)",
							"fr-BE": "French (Belgium)",
							"fr-CA": "French (Canada)",
							"fr-FR": "French (France)",
							"fr-LU": "French (Luxembourg)",
							"fr-MC": "French (Monaco)",
							"fr-CH": "French (Switzerland)",
							fy: "Frisian",
							fur: "Friulian",
							gd: "Gaelic (Scots)",
							"gd-IE": "Gaelic (Irish)",
							gl: "Galacian",
							ka: "Georgian",
							de: "German (Standard)",
							"de-AT": "German (Austria)",
							"de-DE": "German (Germany)",
							"de-LI": "German (Liechtenstein)",
							"de-LU": "German (Luxembourg)",
							"de-CH": "German (Switzerland)",
							el: "Greek",
							gu: "Gujurati",
							ht: "Haitian",
							he: "Hebrew",
							hi: "Hindi",
							hu: "Hungarian",
							is: "Icelandic",
							id: "Indonesian",
							iu: "Inuktitut",
							ga: "Irish",
							it: "Italian (Standard)",
							"it-CH": "Italian (Switzerland)",
							ja: "Japanese",
							kn: "Kannada",
							ks: "Kashmiri",
							kk: "Kazakh",
							km: "Khmer",
							ky: "Kirghiz",
							tlh: "Klingon",
							ko: "Korean",
							"ko-KP": "Korean (North Korea)",
							"ko-KR": "Korean (South Korea)",
							la: "Latin",
							lv: "Latvian",
							lt: "Lithuanian",
							lb: "Luxembourgish",
							mk: "North Macedonia",
							ms: "Malay",
							ml: "Malayalam",
							mt: "Maltese",
							mi: "Maori",
							mr: "Marathi",
							mo: "Moldavian",
							nv: "Navajo",
							ng: "Ndonga",
							ne: "Nepali",
							no: "Norwegian",
							nb: "Norwegian (Bokmal)",
							nn: "Norwegian (Nynorsk)",
							oc: "Occitan",
							or: "Oriya",
							om: "Oromo",
							fa: "Persian",
							"fa-IR": "Persian/Iran",
							pl: "Polish",
							pt: "Portuguese",
							"pt-BR": "Portuguese (Brazil)",
							pa: "Punjabi",
							"pa-IN": "Punjabi (India)",
							"pa-PK": "Punjabi (Pakistan)",
							qu: "Quechua",
							rm: "Rhaeto-Romanic",
							ro: "Romanian",
							"ro-MO": "Romanian (Moldavia)",
							ru: "Russian",
							"ru-MO": "Russian (Moldavia)",
							sz: "Sami (Lappish)",
							sg: "Sango",
							sa: "Sanskrit",
							sc: "Sardinian",
							sd: "Sindhi",
							si: "Singhalese",
							sr: "Serbian",
							sk: "Slovak",
							sl: "Slovenian",
							so: "Somani",
							sb: "Sorbian",
							es: "Spanish",
							"es-AR": "Spanish (Argentina)",
							"es-BO": "Spanish (Bolivia)",
							"es-CL": "Spanish (Chile)",
							"es-CO": "Spanish (Colombia)",
							"es-CR": "Spanish (Costa Rica)",
							"es-DO": "Spanish (Dominican Republic)",
							"es-EC": "Spanish (Ecuador)",
							"es-SV": "Spanish (El Salvador)",
							"es-GT": "Spanish (Guatemala)",
							"es-HN": "Spanish (Honduras)",
							"es-MX": "Spanish (Mexico)",
							"es-NI": "Spanish (Nicaragua)",
							"es-PA": "Spanish (Panama)",
							"es-PY": "Spanish (Paraguay)",
							"es-PE": "Spanish (Peru)",
							"es-PR": "Spanish (Puerto Rico)",
							"es-ES": "Spanish (Spain)",
							"es-UY": "Spanish (Uruguay)",
							"es-VE": "Spanish (Venezuela)",
							sx: "Sutu",
							sw: "Swahili",
							sv: "Swedish",
							"sv-FI": "Swedish (Finland)",
							"sv-SV": "Swedish (Sweden)",
							ta: "Tamil",
							tt: "Tatar",
							te: "Teluga",
							th: "Thai",
							tig: "Tigre",
							ts: "Tsonga",
							tn: "Tswana",
							tr: "Turkish",
							tk: "Turkmen",
							uk: "Ukrainian",
							hsb: "Upper Sorbian",
							ur: "Urdu",
							ve: "Venda",
							vi: "Vietnamese",
							vo: "Volapuk",
							wa: "Walloon",
							cy: "Welsh",
							xh: "Xhosa",
							ji: "Yiddish",
							zu: "Zulu"
						} [e] && (this.internal.languageSettings.languageCode = e, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
							this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")")
						})), this.internal.languageSettings.isSubscribed = !0)), this
					}, so = Qi.API, co = so.getCharWidthsArray = function(e, t) {
						var n, r, i = (t = t || {}).font || this.internal.getFont(),
							a = t.fontSize || this.internal.getFontSize(),
							o = t.charSpace || this.internal.getCharSpace(),
							s = t.widths ? t.widths : i.metadata.Unicode.widths,
							c = s.fof ? s.fof : 1,
							l = t.kerning ? t.kerning : i.metadata.Unicode.kerning,
							u = l.fof ? l.fof : 1,
							h = !1 !== t.doKerning,
							d = 0,
							f = e.length,
							p = 0,
							m = s[0] || c,
							g = [];
						for (n = 0; n < f; n++) r = e.charCodeAt(n), "function" == typeof i.metadata.widthOfString ? g.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(r)) + o * (1e3 / a) || 0) / 1e3) : (d = h && "object" === (0, yi.Z)(l[r]) && !isNaN(parseInt(l[r][p], 10)) ? l[r][p] / u : 0, g.push((s[r] || m) / c + d)), p = r;
						return g
					}, lo = so.getStringUnitWidth = function(e, t) {
						var n = (t = t || {}).fontSize || this.internal.getFontSize(),
							r = t.font || this.internal.getFont(),
							i = t.charSpace || this.internal.getCharSpace();
						return so.processArabic && (e = so.processArabic(e)), "function" == typeof r.metadata.widthOfString ? r.metadata.widthOfString(e, n, i) / n : co.apply(this, arguments).reduce((function(e, t) {
							return e + t
						}), 0)
					}, uo = function(e, t, n, r) {
						for (var i = [], a = 0, o = e.length, s = 0; a !== o && s + t[a] < n;) s += t[a], a++;
						i.push(e.slice(0, a));
						var c = a;
						for (s = 0; a !== o;) s + t[a] > r && (i.push(e.slice(c, a)), s = 0, c = a), s += t[a], a++;
						return c !== a && i.push(e.slice(c, a)), i
					}, ho = function(e, t, n) {
						n || (n = {});
						var r, i, a, o, s, c, l, u = [],
							h = [u],
							d = n.textIndent || 0,
							f = 0,
							p = 0,
							m = e.split(" "),
							g = co.apply(this, [" ", n])[0];
						if (c = -1 === n.lineIndent ? m[0].length + 2 : n.lineIndent || 0) {
							var v = Array(c).join(" "),
								y = [];
							m.map((function(e) {
								(e = e.split(/\s*\n/)).length > 1 ? y = y.concat(e.map((function(e, t) {
									return (t && e.length ? "\n" : "") + e
								}))) : y.push(e[0])
							})), m = y, c = lo.apply(this, [v, n])
						}
						for (a = 0, o = m.length; a < o; a++) {
							var b = 0;
							if (r = m[a], c && "\n" == r[0] && (r = r.substr(1), b = 1), d + f + (p = (i = co.apply(this, [r, n])).reduce((function(e, t) {
									return e + t
								}), 0)) > t || b) {
								if (p > t) {
									for (s = uo.apply(this, [r, i, t - (d + f), t]), u.push(s.shift()), u = [s.pop()]; s.length;) h.push([s.shift()]);
									p = i.slice(r.length - (u[0] ? u[0].length : 0)).reduce((function(e, t) {
										return e + t
									}), 0)
								} else u = [r];
								h.push(u), d = p + c, f = g
							} else u.push(r), d += f + p, f = g
						}
						return l = c ? function(e, t) {
							return (t ? v : "") + e.join(" ")
						} : function(e) {
							return e.join(" ")
						}, h.map(l)
					}, so.splitTextToSize = function(e, t, n) {
						var r, i = (n = n || {}).fontSize || this.internal.getFontSize(),
							a = function(e) {
								if (e.widths && e.kerning) return {
									widths: e.widths,
									kerning: e.kerning
								};
								var t = this.internal.getFont(e.fontName, e.fontStyle);
								return t.metadata.Unicode ? {
									widths: t.metadata.Unicode.widths || {
										0: 1
									},
									kerning: t.metadata.Unicode.kerning || {}
								} : {
									font: t.metadata,
									fontSize: this.internal.getFontSize(),
									charSpace: this.internal.getCharSpace()
								}
							}.call(this, n);
						r = Array.isArray(e) ? e : String(e).split(/\r?\n/);
						var o = 1 * this.internal.scaleFactor * t / i;
						a.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / i : 0, a.lineIndent = n.lineIndent;
						var s, c, l = [];
						for (s = 0, c = r.length; s < c; s++) l = l.concat(ho.apply(this, [r[s], o, a]));
						return l
					},
					function(e) {
						e.__fontmetrics__ = e.__fontmetrics__ || {};
						for (var t = "klmnopqrstuvwxyz", n = {}, r = {}, i = 0; i < t.length; i++) n[t[i]] = "0123456789abcdef" [i], r["0123456789abcdef" [i]] = t[i];
						var a = function(e) {
								return "0x" + parseInt(e, 10).toString(16)
							},
							o = e.__fontmetrics__.compress = function(e) {
								var t, n, i, s, c = ["{"];
								for (var l in e) {
									if (t = e[l], isNaN(parseInt(l, 10)) ? n = "'" + l + "'" : (l = parseInt(l, 10), n = (n = a(l).slice(2)).slice(0, -1) + r[n.slice(-1)]), "number" == typeof t) t < 0 ? (i = a(t).slice(3), s = "-") : (i = a(t).slice(2), s = ""), i = s + i.slice(0, -1) + r[i.slice(-1)];
									else {
										if ("object" !== (0, yi.Z)(t)) throw new Error("Don't know what to do with value type " + (0, yi.Z)(t) + ".");
										i = o(t)
									}
									c.push(n + i)
								}
								return c.push("}"), c.join("")
							},
							s = e.__fontmetrics__.uncompress = function(e) {
								if ("string" != typeof e) throw new Error("Invalid argument passed to uncompress.");
								for (var t, r, i, a, o = {}, s = 1, c = o, l = [], u = "", h = "", d = e.length - 1, f = 1; f < d; f += 1) "'" == (a = e[f]) ? t ? (i = t.join(""), t = void 0) : t = [] : t ? t.push(a) : "{" == a ? (l.push([c, i]), c = {}, i = void 0) : "}" == a ? ((r = l.pop())[0][r[1]] = c, i = void 0, c = r[0]) : "-" == a ? s = -1 : void 0 === i ? n.hasOwnProperty(a) ? (u += n[a], i = parseInt(u, 16) * s, s = 1, u = "") : u += a : n.hasOwnProperty(a) ? (h += n[a], c[i] = parseInt(h, 16) * s, s = 1, i = void 0, h = "") : h += a;
								return o
							},
							c = {
								codePages: ["WinAnsiEncoding"],
								WinAnsiEncoding: s("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
							},
							l = {
								Unicode: {
									Courier: c,
									"Courier-Bold": c,
									"Courier-BoldOblique": c,
									"Courier-Oblique": c,
									Helvetica: c,
									"Helvetica-Bold": c,
									"Helvetica-BoldOblique": c,
									"Helvetica-Oblique": c,
									"Times-Roman": c,
									"Times-Bold": c,
									"Times-BoldItalic": c,
									"Times-Italic": c
								}
							},
							u = {
								Unicode: {
									"Courier-Oblique": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
									"Times-BoldItalic": s("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
									"Helvetica-Bold": s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
									Courier: s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
									"Courier-BoldOblique": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
									"Times-Bold": s("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
									Symbol: s("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
									Helvetica: s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
									"Helvetica-BoldOblique": s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
									ZapfDingbats: s("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
									"Courier-Bold": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
									"Times-Italic": s("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
									"Times-Roman": s("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
									"Helvetica-Oblique": s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
								}
							};
						e.events.push(["addFont", function(e) {
							var t = e.font,
								n = u.Unicode[t.postScriptName];
							n && (t.metadata.Unicode = {}, t.metadata.Unicode.widths = n.widths, t.metadata.Unicode.kerning = n.kerning);
							var r = l.Unicode[t.postScriptName];
							r && (t.metadata.Unicode.encoding = r, t.encoding = r.codePages[0])
						}])
					}(Qi.API),
					function(e) {
						var t = function(e) {
							for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++) n[r] = e.charCodeAt(r);
							return n
						};
						e.API.events.push(["addFont", function(n) {
							var r = void 0,
								i = n.font,
								a = n.instance;
							if (!i.isStandardFont) {
								if (void 0 === a) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
								if ("string" != typeof(r = !1 === a.existsFileInVFS(i.postScriptName) ? a.loadFile(i.postScriptName) : a.getFileFromVFS(i.postScriptName))) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
								! function(n, r) {
									r = /^\x00\x01\x00\x00/.test(r) ? t(r) : t(Ai(r)), n.metadata = e.API.TTFFont.open(r), n.metadata.Unicode = n.metadata.Unicode || {
										encoding: {},
										kerning: {},
										widths: []
									}, n.metadata.glyIdsUsed = [0]
								}(i, r)
							}
						}])
					}(Qi),
					function(e) {
						function t() {
							return (wi.canvg ? Promise.resolve(wi.canvg) : n.e(469).then(n.bind(n, 81469))).catch((function(e) {
								return Promise.reject(new Error("Could not load canvg: " + e))
							})).then((function(e) {
								return e.default ? e.default : e
							}))
						}
						Qi.API.addSvgAsImage = function(e, n, r, i, a, o, s, c) {
							if (isNaN(n) || isNaN(r)) throw Si.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
							if (isNaN(i) || isNaN(a)) throw Si.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
							var l = document.createElement("canvas");
							l.width = i, l.height = a;
							var u = l.getContext("2d");
							u.fillStyle = "#fff", u.fillRect(0, 0, l.width, l.height);
							var h = {
									ignoreMouse: !0,
									ignoreAnimation: !0,
									ignoreDimensions: !0
								},
								d = this;
							return t().then((function(t) {
								return t.fromString(u, e, h)
							}), (function() {
								return Promise.reject(new Error("Could not load canvg."))
							})).then((function(e) {
								return e.render(h)
							})).then((function() {
								d.addImage(l.toDataURL("image/jpeg", 1), n, r, i, a, s, c)
							}))
						}
					}(), Qi.API.putTotalPages = function(e) {
						var t, n = 0;
						parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (t = new RegExp(e, "g"), n = this.internal.getNumberOfPages()) : (t = new RegExp(this.pdfEscape16(e, this.internal.getFont()), "g"), n = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
						for (var r = 1; r <= this.internal.getNumberOfPages(); r++)
							for (var i = 0; i < this.internal.pages[r].length; i++) this.internal.pages[r][i] = this.internal.pages[r][i].replace(t, n);
						return this
					}, Qi.API.viewerPreferences = function(e, t) {
						var n;
						e = e || {}, t = t || !1;
						var r, i, a, o = {
								HideToolbar: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3
								},
								HideMenubar: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3
								},
								HideWindowUI: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3
								},
								FitWindow: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3
								},
								CenterWindow: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.3
								},
								DisplayDocTitle: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.4
								},
								NonFullScreenPageMode: {
									defaultValue: "UseNone",
									value: "UseNone",
									type: "name",
									explicitSet: !1,
									valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
									pdfVersion: 1.3
								},
								Direction: {
									defaultValue: "L2R",
									value: "L2R",
									type: "name",
									explicitSet: !1,
									valueSet: ["L2R", "R2L"],
									pdfVersion: 1.3
								},
								ViewArea: {
									defaultValue: "CropBox",
									value: "CropBox",
									type: "name",
									explicitSet: !1,
									valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
									pdfVersion: 1.4
								},
								ViewClip: {
									defaultValue: "CropBox",
									value: "CropBox",
									type: "name",
									explicitSet: !1,
									valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
									pdfVersion: 1.4
								},
								PrintArea: {
									defaultValue: "CropBox",
									value: "CropBox",
									type: "name",
									explicitSet: !1,
									valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
									pdfVersion: 1.4
								},
								PrintClip: {
									defaultValue: "CropBox",
									value: "CropBox",
									type: "name",
									explicitSet: !1,
									valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
									pdfVersion: 1.4
								},
								PrintScaling: {
									defaultValue: "AppDefault",
									value: "AppDefault",
									type: "name",
									explicitSet: !1,
									valueSet: ["AppDefault", "None"],
									pdfVersion: 1.6
								},
								Duplex: {
									defaultValue: "",
									value: "none",
									type: "name",
									explicitSet: !1,
									valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
									pdfVersion: 1.7
								},
								PickTrayByPDFSize: {
									defaultValue: !1,
									value: !1,
									type: "boolean",
									explicitSet: !1,
									valueSet: [!0, !1],
									pdfVersion: 1.7
								},
								PrintPageRange: {
									defaultValue: "",
									value: "",
									type: "array",
									explicitSet: !1,
									valueSet: null,
									pdfVersion: 1.7
								},
								NumCopies: {
									defaultValue: 1,
									value: 1,
									type: "integer",
									explicitSet: !1,
									valueSet: null,
									pdfVersion: 1.7
								}
							},
							s = Object.keys(o),
							c = [],
							l = 0,
							u = 0,
							h = 0;

						function d(e, t) {
							var n, r = !1;
							for (n = 0; n < e.length; n += 1) e[n] === t && (r = !0);
							return r
						}
						if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o)), this.internal.viewerpreferences.isSubscribed = !1), n = this.internal.viewerpreferences.configuration, "reset" === e || !0 === t) {
							var f = s.length;
							for (h = 0; h < f; h += 1) n[s[h]].value = n[s[h]].defaultValue, n[s[h]].explicitSet = !1
						}
						if ("object" === (0, yi.Z)(e))
							for (i in e)
								if (a = e[i], d(s, i) && void 0 !== a) {
									if ("boolean" === n[i].type && "boolean" == typeof a) n[i].value = a;
									else if ("name" === n[i].type && d(n[i].valueSet, a)) n[i].value = a;
									else if ("integer" === n[i].type && Number.isInteger(a)) n[i].value = a;
									else if ("array" === n[i].type) {
										for (l = 0; l < a.length; l += 1)
											if (r = !0, 1 === a[l].length && "number" == typeof a[l][0]) c.push(String(a[l] - 1));
											else if (a[l].length > 1) {
											for (u = 0; u < a[l].length; u += 1) "number" != typeof a[l][u] && (r = !1);
											!0 === r && c.push([a[l][0] - 1, a[l][1] - 1].join(" "))
										}
										n[i].value = "[" + c.join(" ") + "]"
									} else n[i].value = n[i].defaultValue;
									n[i].explicitSet = !0
								} return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
							var e, t = [];
							for (e in n) !0 === n[e].explicitSet && ("name" === n[e].type ? t.push("/" + e + " /" + n[e].value) : t.push("/" + e + " " + n[e].value));
							0 !== t.length && this.internal.write("/ViewerPreferences\n<<\n" + t.join("\n") + "\n>>")
						})), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = n, this
					},
					function(e) {
						var t = function() {
								var e = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>',
									t = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
									n = unescape(encodeURIComponent(e)),
									r = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
									i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
									a = unescape(encodeURIComponent("</x:xmpmeta>")),
									o = n.length + r.length + i.length + t.length + a.length;
								this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o + " >>"), this.internal.write("stream"), this.internal.write(t + n + r + i + a), this.internal.write("endstream"), this.internal.write("endobj")
							},
							n = function() {
								this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R")
							};
						e.addMetadata = function(e, r) {
							return void 0 === this.internal.__metadata__ && (this.internal.__metadata__ = {
								metadata: e,
								namespaceuri: r || "http://jspdf.default.namespaceuri/"
							}, this.internal.events.subscribe("putCatalog", n), this.internal.events.subscribe("postPutResources", t)), this
						}
					}(Qi.API),
					function(e) {
						var t = e.API,
							n = t.pdfEscape16 = function(e, t) {
								for (var n, r = t.metadata.Unicode.widths, i = ["", "0", "00", "000", "0000"], a = [""], o = 0, s = e.length; o < s; ++o) {
									if (n = t.metadata.characterToGlyph(e.charCodeAt(o)), t.metadata.glyIdsUsed.push(n), t.metadata.toUnicode[n] = e.charCodeAt(o), -1 == r.indexOf(n) && (r.push(n), r.push([parseInt(t.metadata.widthOfGlyph(n), 10)])), "0" == n) return a.join("");
									n = n.toString(16), a.push(i[4 - n.length], n)
								}
								return a.join("")
							},
							r = function(e) {
								var t, n, r, i, a, o, s;
								for (a = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", r = [], o = 0, s = (n = Object.keys(e).sort((function(e, t) {
										return e - t
									}))).length; o < s; o++) t = n[o], r.length >= 100 && (a += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar", r = []), void 0 !== e[t] && null !== e[t] && "function" == typeof e[t].toString && (i = ("0000" + e[t].toString(16)).slice(-4), t = ("0000" + (+t).toString(16)).slice(-4), r.push("<" + t + "><" + i + ">"));
								return r.length && (a += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar\n"), a + "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"
							};
						t.events.push(["putFont", function(t) {
							! function(t) {
								var n = t.font,
									i = t.out,
									a = t.newObject,
									o = t.putStream;
								if (n.metadata instanceof e.API.TTFFont && "Identity-H" === n.encoding) {
									for (var s = n.metadata.Unicode.widths, c = n.metadata.subset.encode(n.metadata.glyIdsUsed, 1), l = "", u = 0; u < c.length; u++) l += String.fromCharCode(c[u]);
									var h = a();
									o({
										data: l,
										addLength1: !0,
										objectId: h
									}), i("endobj");
									var d = a();
									o({
										data: r(n.metadata.toUnicode),
										addLength1: !0,
										objectId: d
									}), i("endobj");
									var f = a();
									i("<<"), i("/Type /FontDescriptor"), i("/FontName /" + Wi(n.fontName)), i("/FontFile2 " + h + " 0 R"), i("/FontBBox " + e.API.PDFObject.convert(n.metadata.bbox)), i("/Flags " + n.metadata.flags), i("/StemV " + n.metadata.stemV), i("/ItalicAngle " + n.metadata.italicAngle), i("/Ascent " + n.metadata.ascender), i("/Descent " + n.metadata.decender), i("/CapHeight " + n.metadata.capHeight), i(">>"), i("endobj");
									var p = a();
									i("<<"), i("/Type /Font"), i("/BaseFont /" + Wi(n.fontName)), i("/FontDescriptor " + f + " 0 R"), i("/W " + e.API.PDFObject.convert(s)), i("/CIDToGIDMap /Identity"), i("/DW 1000"), i("/Subtype /CIDFontType2"), i("/CIDSystemInfo"), i("<<"), i("/Supplement 0"), i("/Registry (Adobe)"), i("/Ordering (" + n.encoding + ")"), i(">>"), i(">>"), i("endobj"), n.objectNumber = a(), i("<<"), i("/Type /Font"), i("/Subtype /Type0"), i("/ToUnicode " + d + " 0 R"), i("/BaseFont /" + Wi(n.fontName)), i("/Encoding /" + n.encoding), i("/DescendantFonts [" + p + " 0 R]"), i(">>"), i("endobj"), n.isAlreadyPutted = !0
								}
							}(t)
						}]), t.events.push(["putFont", function(t) {
							! function(t) {
								var n = t.font,
									i = t.out,
									a = t.newObject,
									o = t.putStream;
								if (n.metadata instanceof e.API.TTFFont && "WinAnsiEncoding" === n.encoding) {
									for (var s = n.metadata.rawData, c = "", l = 0; l < s.length; l++) c += String.fromCharCode(s[l]);
									var u = a();
									o({
										data: c,
										addLength1: !0,
										objectId: u
									}), i("endobj");
									var h = a();
									o({
										data: r(n.metadata.toUnicode),
										addLength1: !0,
										objectId: h
									}), i("endobj");
									var d = a();
									i("<<"), i("/Descent " + n.metadata.decender), i("/CapHeight " + n.metadata.capHeight), i("/StemV " + n.metadata.stemV), i("/Type /FontDescriptor"), i("/FontFile2 " + u + " 0 R"), i("/Flags 96"), i("/FontBBox " + e.API.PDFObject.convert(n.metadata.bbox)), i("/FontName /" + Wi(n.fontName)), i("/ItalicAngle " + n.metadata.italicAngle), i("/Ascent " + n.metadata.ascender), i(">>"), i("endobj"), n.objectNumber = a();
									for (var f = 0; f < n.metadata.hmtx.widths.length; f++) n.metadata.hmtx.widths[f] = parseInt(n.metadata.hmtx.widths[f] * (1e3 / n.metadata.head.unitsPerEm));
									i("<</Subtype/TrueType/Type/Font/ToUnicode " + h + " 0 R/BaseFont/" + Wi(n.fontName) + "/FontDescriptor " + d + " 0 R/Encoding/" + n.encoding + " /FirstChar 29 /LastChar 255 /Widths " + e.API.PDFObject.convert(n.metadata.hmtx.widths) + ">>"), i("endobj"), n.isAlreadyPutted = !0
								}
							}(t)
						}]);
						var i = function(e) {
							var t, r = e.text || "",
								i = e.x,
								a = e.y,
								o = e.options || {},
								s = e.mutex || {},
								c = s.pdfEscape,
								l = s.activeFontKey,
								u = s.fonts,
								h = l,
								d = "",
								f = 0,
								p = "",
								m = u[h].encoding;
							if ("Identity-H" !== u[h].encoding) return {
								text: r,
								x: i,
								y: a,
								options: o,
								mutex: s
							};
							for (p = r, h = l, Array.isArray(r) && (p = r[0]), f = 0; f < p.length; f += 1) u[h].metadata.hasOwnProperty("cmap") && (t = u[h].metadata.cmap.unicode.codeMap[p[f].charCodeAt(0)]), t || p[f].charCodeAt(0) < 256 && u[h].metadata.hasOwnProperty("Unicode") ? d += p[f] : d += "";
							var g = "";
							return parseInt(h.slice(1)) < 14 || "WinAnsiEncoding" === m ? g = c(d, h).split("").map((function(e) {
								return e.charCodeAt(0).toString(16)
							})).join("") : "Identity-H" === m && (g = n(d, u[h])), s.isHex = !0, {
								text: g,
								x: i,
								y: a,
								options: o,
								mutex: s
							}
						};
						t.events.push(["postProcessText", function(e) {
							var t = e.text || "",
								n = [],
								r = {
									text: t,
									x: e.x,
									y: e.y,
									options: e.options,
									mutex: e.mutex
								};
							if (Array.isArray(t)) {
								var a = 0;
								for (a = 0; a < t.length; a += 1) Array.isArray(t[a]) && 3 === t[a].length ? n.push([i(Object.assign({}, r, {
									text: t[a][0]
								})).text, t[a][1], t[a][2]]) : n.push(i(Object.assign({}, r, {
									text: t[a]
								})).text);
								e.text = n
							} else e.text = i(Object.assign({}, r, {
								text: t
							})).text
						}])
					}(Qi),
					function(e) {
						var t = function() {
							return void 0 === this.internal.vFS && (this.internal.vFS = {}), !0
						};
						e.existsFileInVFS = function(e) {
							return t.call(this), void 0 !== this.internal.vFS[e]
						}, e.addFileToVFS = function(e, n) {
							return t.call(this), this.internal.vFS[e] = n, this
						}, e.getFileFromVFS = function(e) {
							return t.call(this), void 0 !== this.internal.vFS[e] ? this.internal.vFS[e] : null
						}
					}(Qi.API),
					function(e) {
						e.__bidiEngine__ = e.prototype.__bidiEngine__ = function(e) {
							var n, r, i, a, o, s, c, l = t,
								u = [
									[0, 3, 0, 1, 0, 0, 0],
									[0, 3, 0, 1, 2, 2, 0],
									[0, 3, 0, 17, 2, 0, 1],
									[0, 3, 5, 5, 4, 1, 0],
									[0, 3, 21, 21, 4, 0, 1],
									[0, 3, 5, 5, 4, 2, 0]
								],
								h = [
									[2, 0, 1, 1, 0, 1, 0],
									[2, 0, 1, 1, 0, 2, 0],
									[2, 0, 2, 1, 3, 2, 0],
									[2, 0, 2, 33, 3, 1, 1]
								],
								d = {
									L: 0,
									R: 1,
									EN: 2,
									AN: 3,
									N: 4,
									B: 5,
									S: 6
								},
								f = {
									0: 0,
									5: 1,
									6: 2,
									7: 3,
									32: 4,
									251: 5,
									254: 6,
									255: 7
								},
								p = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"],
								m = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),
								g = !1,
								v = 0;
							this.__bidiEngine__ = {};
							var y = function(e) {
									var t = e.charCodeAt(),
										n = t >> 8,
										r = f[n];
									return void 0 !== r ? l[256 * r + (255 & t)] : 252 === n || 253 === n ? "AL" : m.test(n) ? "L" : 8 === n ? "R" : "N"
								},
								b = function(e) {
									for (var t, n = 0; n < e.length; n++) {
										if ("L" === (t = y(e.charAt(n)))) return !1;
										if ("R" === t) return !0
									}
									return !1
								},
								w = function(e, t, o, s) {
									var c, l, u, h, d = t[s];
									switch (d) {
										case "L":
										case "R":
										case "LRE":
										case "RLE":
										case "LRO":
										case "RLO":
										case "PDF":
											g = !1;
											break;
										case "N":
										case "AN":
											break;
										case "EN":
											g && (d = "AN");
											break;
										case "AL":
											g = !0, d = "R";
											break;
										case "WS":
										case "BN":
											d = "N";
											break;
										case "CS":
											s < 1 || s + 1 >= t.length || "EN" !== (c = o[s - 1]) && "AN" !== c || "EN" !== (l = t[s + 1]) && "AN" !== l ? d = "N" : g && (l = "AN"), d = l === c ? l : "N";
											break;
										case "ES":
											d = "EN" === (c = s > 0 ? o[s - 1] : "B") && s + 1 < t.length && "EN" === t[s + 1] ? "EN" : "N";
											break;
										case "ET":
											if (s > 0 && "EN" === o[s - 1]) {
												d = "EN";
												break
											}
											if (g) {
												d = "N";
												break
											}
											for (u = s + 1, h = t.length; u < h && "ET" === t[u];) u++;
											d = u < h && "EN" === t[u] ? "EN" : "N";
											break;
										case "NSM":
											if (i && !a) {
												for (h = t.length, u = s + 1; u < h && "NSM" === t[u];) u++;
												if (u < h) {
													var f = e[s],
														p = f >= 1425 && f <= 2303 || 64286 === f;
													if (c = t[u], p && ("R" === c || "AL" === c)) {
														d = "R";
														break
													}
												}
											}
											d = s < 1 || "B" === (c = t[s - 1]) ? "N" : o[s - 1];
											break;
										case "B":
											g = !1, n = !0, d = v;
											break;
										case "S":
											r = !0, d = "N"
									}
									return d
								},
								x = function(e, t, n) {
									var r = e.split("");
									return n && S(r, n, {
										hiLevel: v
									}), r.reverse(), t && t.reverse(), r.join("")
								},
								S = function(e, t, i) {
									var a, o, s, c, l, f = -1,
										p = e.length,
										m = 0,
										b = [],
										x = v ? h : u,
										S = [];
									for (g = !1, n = !1, r = !1, o = 0; o < p; o++) S[o] = y(e[o]);
									for (s = 0; s < p; s++) {
										if (l = m, b[s] = w(e, S, b, s), a = 240 & (m = x[l][d[b[s]]]), m &= 15, t[s] = c = x[m][5], a > 0)
											if (16 === a) {
												for (o = f; o < s; o++) t[o] = 1;
												f = -1
											} else f = -1;
										if (x[m][6]) - 1 === f && (f = s);
										else if (f > -1) {
											for (o = f; o < s; o++) t[o] = c;
											f = -1
										}
										"B" === S[s] && (t[s] = 0), i.hiLevel |= c
									}
									r && function(e, t, n) {
										for (var r = 0; r < n; r++)
											if ("S" === e[r]) {
												t[r] = v;
												for (var i = r - 1; i >= 0 && "WS" === e[i]; i--) t[i] = v
											}
									}(S, t, p)
								},
								j = function(e, t, r, i, a) {
									if (!(a.hiLevel < e)) {
										if (1 === e && 1 === v && !n) return t.reverse(), void(r && r.reverse());
										for (var o, s, c, l, u = t.length, h = 0; h < u;) {
											if (i[h] >= e) {
												for (c = h + 1; c < u && i[c] >= e;) c++;
												for (l = h, s = c - 1; l < s; l++, s--) o = t[l], t[l] = t[s], t[s] = o, r && (o = r[l], r[l] = r[s], r[s] = o);
												h = c
											}
											h++
										}
									}
								},
								N = function(e, t, n) {
									var r = e.split(""),
										i = {
											hiLevel: v
										};
									return n || (n = []), S(r, n, i),
										function(e, t, n) {
											if (0 !== n.hiLevel && c)
												for (var r, i = 0; i < e.length; i++) 1 === t[i] && (r = p.indexOf(e[i])) >= 0 && (e[i] = p[r + 1])
										}(r, n, i), j(2, r, t, n, i), j(1, r, t, n, i), r.join("")
								};
							return this.__bidiEngine__.doBidiReorder = function(e, t, n) {
								if (function(e, t) {
										if (t)
											for (var n = 0; n < e.length; n++) t[n] = n;
										void 0 === a && (a = b(e)), void 0 === s && (s = b(e))
									}(e, t), i || !o || s)
									if (i && o && a ^ s) v = a ? 1 : 0, e = x(e, t, n);
									else if (!i && o && s) v = a ? 1 : 0, e = N(e, t, n), e = x(e, t);
								else if (!i || a || o || s) {
									if (i && !o && a ^ s) e = x(e, t), a ? (v = 0, e = N(e, t, n)) : (v = 1, e = N(e, t, n), e = x(e, t));
									else if (i && a && !o && s) v = 1, e = N(e, t, n), e = x(e, t);
									else if (!i && !o && a ^ s) {
										var r = c;
										a ? (v = 1, e = N(e, t, n), v = 0, c = !1, e = N(e, t, n), c = r) : (v = 0, e = N(e, t, n), e = x(e, t), v = 1, c = !1, e = N(e, t, n), c = r, e = x(e, t))
									}
								} else v = 0, e = N(e, t, n);
								else v = a ? 1 : 0, e = N(e, t, n);
								return e
							}, this.__bidiEngine__.setOptions = function(e) {
								e && (i = e.isInputVisual, o = e.isOutputVisual, a = e.isInputRtl, s = e.isOutputRtl, c = e.isSymmetricSwapping)
							}, this.__bidiEngine__.setOptions(e), this.__bidiEngine__
						};
						var t = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
							n = new e.__bidiEngine__({
								isInputVisual: !0
							});
						e.API.events.push(["postProcessText", function(e) {
							var t = e.text,
								r = (e.x, e.y, e.options || {}),
								i = (e.mutex, r.lang, []);
							if (r.isInputVisual = "boolean" != typeof r.isInputVisual || r.isInputVisual, n.setOptions(r), "[object Array]" === Object.prototype.toString.call(t)) {
								var a = 0;
								for (i = [], a = 0; a < t.length; a += 1) "[object Array]" === Object.prototype.toString.call(t[a]) ? i.push([n.doBidiReorder(t[a][0]), t[a][1], t[a][2]]) : i.push([n.doBidiReorder(t[a])]);
								e.text = i
							} else e.text = n.doBidiReorder(t);
							n.setOptions({
								isInputVisual: !0
							})
						}])
					}(Qi), Qi.API.TTFFont = function() {
						function e(e) {
							var t;
							if (this.rawData = e, t = this.contents = new wo(e), this.contents.pos = 4, "ttcf" === t.readString(4)) throw new Error("TTCF not supported.");
							t.pos = 0, this.parse(), this.subset = new Bo(this), this.registerTTF()
						}
						return e.open = function(t) {
							return new e(t)
						}, e.prototype.parse = function() {
							return this.directory = new xo(this.contents), this.head = new No(this), this.name = new _o(this), this.cmap = new Ao(this), this.toUnicode = {}, this.hhea = new Lo(this), this.maxp = new Oo(this), this.hmtx = new To(this), this.post = new Io(this), this.os2 = new Po(this), this.loca = new Mo(this), this.glyf = new Eo(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax]
						}, e.prototype.registerTTF = function() {
							var e, t, n, r, i;
							if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() {
									var t, n, r, i;
									for (i = [], t = 0, n = (r = this.bbox).length; t < n; t++) e = r[t], i.push(Math.round(e * this.scaleFactor));
									return i
								}.call(this), this.stemV = 0, this.post.exists ? (n = 255 & (r = this.post.italic_angle), 0 != (32768 & (t = r >> 16)) && (t = -(1 + (65535 ^ t))), this.italicAngle = +(t + "." + n)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (i = this.familyClass) || 2 === i || 3 === i || 4 === i || 5 === i || 7 === i, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font")
						}, e.prototype.characterToGlyph = function(e) {
							var t;
							return (null != (t = this.cmap.unicode) ? t.codeMap[e] : void 0) || 0
						}, e.prototype.widthOfGlyph = function(e) {
							var t;
							return t = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * t
						}, e.prototype.widthOfString = function(e, t, n) {
							var r, i, a, o;
							for (a = 0, i = 0, o = (e = "" + e).length; 0 <= o ? i < o : i > o; i = 0 <= o ? ++i : --i) r = e.charCodeAt(i), a += this.widthOfGlyph(this.characterToGlyph(r)) + n * (1e3 / t) || 0;
							return a * (t / 1e3)
						}, e.prototype.lineHeight = function(e, t) {
							var n;
							return null == t && (t = !1), n = t ? this.lineGap : 0, (this.ascender + n - this.decender) / 1e3 * e
						}, e
					}();
				var bo, wo = function() {
						function e(e) {
							this.data = null != e ? e : [], this.pos = 0, this.length = this.data.length
						}
						return e.prototype.readByte = function() {
							return this.data[this.pos++]
						}, e.prototype.writeByte = function(e) {
							return this.data[this.pos++] = e
						}, e.prototype.readUInt32 = function() {
							return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte()
						}, e.prototype.writeUInt32 = function(e) {
							return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e)
						}, e.prototype.readInt32 = function() {
							var e;
							return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e
						}, e.prototype.writeInt32 = function(e) {
							return e < 0 && (e += 4294967296), this.writeUInt32(e)
						}, e.prototype.readUInt16 = function() {
							return this.readByte() << 8 | this.readByte()
						}, e.prototype.writeUInt16 = function(e) {
							return this.writeByte(e >> 8 & 255), this.writeByte(255 & e)
						}, e.prototype.readInt16 = function() {
							var e;
							return (e = this.readUInt16()) >= 32768 ? e - 65536 : e
						}, e.prototype.writeInt16 = function(e) {
							return e < 0 && (e += 65536), this.writeUInt16(e)
						}, e.prototype.readString = function(e) {
							var t, n;
							for (n = [], t = 0; 0 <= e ? t < e : t > e; t = 0 <= e ? ++t : --t) n[t] = String.fromCharCode(this.readByte());
							return n.join("")
						}, e.prototype.writeString = function(e) {
							var t, n, r;
							for (r = [], t = 0, n = e.length; 0 <= n ? t < n : t > n; t = 0 <= n ? ++t : --t) r.push(this.writeByte(e.charCodeAt(t)));
							return r
						}, e.prototype.readShort = function() {
							return this.readInt16()
						}, e.prototype.writeShort = function(e) {
							return this.writeInt16(e)
						}, e.prototype.readLongLong = function() {
							var e, t, n, r, i, a, o, s;
							return e = this.readByte(), t = this.readByte(), n = this.readByte(), r = this.readByte(), i = this.readByte(), a = this.readByte(), o = this.readByte(), s = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ t) + 1099511627776 * (255 ^ n) + 4294967296 * (255 ^ r) + 16777216 * (255 ^ i) + 65536 * (255 ^ a) + 256 * (255 ^ o) + (255 ^ s) + 1) : 72057594037927940 * e + 281474976710656 * t + 1099511627776 * n + 4294967296 * r + 16777216 * i + 65536 * a + 256 * o + s
						}, e.prototype.writeLongLong = function(e) {
							var t, n;
							return t = Math.floor(e / 4294967296), n = 4294967295 & e, this.writeByte(t >> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t), this.writeByte(n >> 24 & 255), this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n)
						}, e.prototype.readInt = function() {
							return this.readInt32()
						}, e.prototype.writeInt = function(e) {
							return this.writeInt32(e)
						}, e.prototype.read = function(e) {
							var t, n;
							for (t = [], n = 0; 0 <= e ? n < e : n > e; n = 0 <= e ? ++n : --n) t.push(this.readByte());
							return t
						}, e.prototype.write = function(e) {
							var t, n, r, i;
							for (i = [], n = 0, r = e.length; n < r; n++) t = e[n], i.push(this.writeByte(t));
							return i
						}, e
					}(),
					xo = function() {
						var e;

						function t(e) {
							var t, n, r;
							for (this.scalarType = e.readInt(), this.tableCount = e.readShort(), this.searchRange = e.readShort(), this.entrySelector = e.readShort(), this.rangeShift = e.readShort(), this.tables = {}, n = 0, r = this.tableCount; 0 <= r ? n < r : n > r; n = 0 <= r ? ++n : --n) t = {
								tag: e.readString(4),
								checksum: e.readInt(),
								offset: e.readInt(),
								length: e.readInt()
							}, this.tables[t.tag] = t
						}
						return t.prototype.encode = function(t) {
							var n, r, i, a, o, s, c, l, u, h, d, f, p;
							for (p in d = Object.keys(t).length, s = Math.log(2), u = 16 * Math.floor(Math.log(d) / s), a = Math.floor(u / s), l = 16 * d - u, (r = new wo).writeInt(this.scalarType), r.writeShort(d), r.writeShort(u), r.writeShort(a), r.writeShort(l), i = 16 * d, c = r.pos + i, o = null, f = [], t)
								for (h = t[p], r.writeString(p), r.writeInt(e(h)), r.writeInt(c), r.writeInt(h.length), f = f.concat(h), "head" === p && (o = c), c += h.length; c % 4;) f.push(0), c++;
							return r.write(f), n = 2981146554 - e(r.data), r.pos = o + 8, r.writeUInt32(n), r.data
						}, e = function(e) {
							var t, n, r, i;
							for (e = Do.call(e); e.length % 4;) e.push(0);
							for (r = new wo(e), n = 0, t = 0, i = e.length; t < i; t = t += 4) n += r.readUInt32();
							return 4294967295 & n
						}, t
					}(),
					So = {}.hasOwnProperty,
					jo = function(e, t) {
						for (var n in t) So.call(t, n) && (e[n] = t[n]);

						function r() {
							this.constructor = e
						}
						return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
					};
				bo = function() {
					function e(e) {
						var t;
						this.file = e, t = this.file.directory.tables[this.tag], this.exists = !!t, t && (this.offset = t.offset, this.length = t.length, this.parse(this.file.contents))
					}
					return e.prototype.parse = function() {}, e.prototype.encode = function() {}, e.prototype.raw = function() {
						return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null
					}, e
				}();
				var No = function(e) {
						function t() {
							return t.__super__.constructor.apply(this, arguments)
						}
						return jo(t, bo), t.prototype.tag = "head", t.prototype.parse = function(e) {
							return e.pos = this.offset, this.version = e.readInt(), this.revision = e.readInt(), this.checkSumAdjustment = e.readInt(), this.magicNumber = e.readInt(), this.flags = e.readShort(), this.unitsPerEm = e.readShort(), this.created = e.readLongLong(), this.modified = e.readLongLong(), this.xMin = e.readShort(), this.yMin = e.readShort(), this.xMax = e.readShort(), this.yMax = e.readShort(), this.macStyle = e.readShort(), this.lowestRecPPEM = e.readShort(), this.fontDirectionHint = e.readShort(), this.indexToLocFormat = e.readShort(), this.glyphDataFormat = e.readShort()
						}, t.prototype.encode = function(e) {
							var t;
							return (t = new wo).writeInt(this.version), t.writeInt(this.revision), t.writeInt(this.checkSumAdjustment), t.writeInt(this.magicNumber), t.writeShort(this.flags), t.writeShort(this.unitsPerEm), t.writeLongLong(this.created), t.writeLongLong(this.modified), t.writeShort(this.xMin), t.writeShort(this.yMin), t.writeShort(this.xMax), t.writeShort(this.yMax), t.writeShort(this.macStyle), t.writeShort(this.lowestRecPPEM), t.writeShort(this.fontDirectionHint), t.writeShort(e), t.writeShort(this.glyphDataFormat), t.data
						}, t
					}(),
					ko = function() {
						function e(e, t) {
							var n, r, i, a, o, s, c, l, u, h, d, f, p, m, g, v, y;
							switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = t + e.readInt(), u = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format) {
								case 0:
									for (s = 0; s < 256; ++s) this.codeMap[s] = e.readByte();
									break;
								case 4:
									for (d = e.readUInt16(), h = d / 2, e.pos += 6, i = function() {
											var t, n;
											for (n = [], s = t = 0; 0 <= h ? t < h : t > h; s = 0 <= h ? ++t : --t) n.push(e.readUInt16());
											return n
										}(), e.pos += 2, p = function() {
											var t, n;
											for (n = [], s = t = 0; 0 <= h ? t < h : t > h; s = 0 <= h ? ++t : --t) n.push(e.readUInt16());
											return n
										}(), c = function() {
											var t, n;
											for (n = [], s = t = 0; 0 <= h ? t < h : t > h; s = 0 <= h ? ++t : --t) n.push(e.readUInt16());
											return n
										}(), l = function() {
											var t, n;
											for (n = [], s = t = 0; 0 <= h ? t < h : t > h; s = 0 <= h ? ++t : --t) n.push(e.readUInt16());
											return n
										}(), r = (this.length - e.pos + this.offset) / 2, o = function() {
											var t, n;
											for (n = [], s = t = 0; 0 <= r ? t < r : t > r; s = 0 <= r ? ++t : --t) n.push(e.readUInt16());
											return n
										}(), s = g = 0, y = i.length; g < y; s = ++g)
										for (m = i[s], n = v = f = p[s]; f <= m ? v <= m : v >= m; n = f <= m ? ++v : --v) 0 === l[s] ? a = n + c[s] : 0 !== (a = o[l[s] / 2 + (n - f) - (h - s)] || 0) && (a += c[s]), this.codeMap[n] = 65535 & a
							}
							e.pos = u
						}
						return e.encode = function(e, t) {
							var n, r, i, a, o, s, c, l, u, h, d, f, p, m, g, v, y, b, w, x, S, j, N, k, A, L, P, I, C, _, O, T, D, E, F, R, M, B, U, q, z, Z, H, G, V, W;
							switch (I = new wo, a = Object.keys(e).sort((function(e, t) {
								return e - t
							})), t) {
								case "macroman":
									for (p = 0, m = function() {
											var e = [];
											for (f = 0; f < 256; ++f) e.push(0);
											return e
										}(), v = {
											0: 0
										}, i = {}, C = 0, D = a.length; C < D; C++) null == v[H = e[r = a[C]]] && (v[H] = ++p), i[r] = {
										old: e[r],
										new: v[e[r]]
									}, m[r] = v[e[r]];
									return I.writeUInt16(1), I.writeUInt16(0), I.writeUInt32(12), I.writeUInt16(0), I.writeUInt16(262), I.writeUInt16(0), I.write(m), {
										charMap: i,
										subtable: I.data,
										maxGlyphID: p + 1
									};
								case "unicode":
									for (L = [], u = [], y = 0, v = {}, n = {}, g = c = null, _ = 0, E = a.length; _ < E; _++) null == v[w = e[r = a[_]]] && (v[w] = ++y), n[r] = {
										old: w,
										new: v[w]
									}, o = v[w] - r, null != g && o === c || (g && u.push(g), L.push(r), c = o), g = r;
									for (g && u.push(g), u.push(65535), L.push(65535), k = 2 * (N = L.length), j = 2 * Math.pow(Math.log(N) / Math.LN2, 2), h = Math.log(j / 2) / Math.LN2, S = 2 * N - j, s = [], x = [], d = [], f = O = 0, F = L.length; O < F; f = ++O) {
										if (A = L[f], l = u[f], 65535 === A) {
											s.push(0), x.push(0);
											break
										}
										if (A - (P = n[A].new) >= 32768)
											for (s.push(0), x.push(2 * (d.length + N - f)), r = T = A; A <= l ? T <= l : T >= l; r = A <= l ? ++T : --T) d.push(n[r].new);
										else s.push(P - A), x.push(0)
									}
									for (I.writeUInt16(3), I.writeUInt16(1), I.writeUInt32(12), I.writeUInt16(4), I.writeUInt16(16 + 8 * N + 2 * d.length), I.writeUInt16(0), I.writeUInt16(k), I.writeUInt16(j), I.writeUInt16(h), I.writeUInt16(S), z = 0, R = u.length; z < R; z++) r = u[z], I.writeUInt16(r);
									for (I.writeUInt16(0), Z = 0, M = L.length; Z < M; Z++) r = L[Z], I.writeUInt16(r);
									for (G = 0, B = s.length; G < B; G++) o = s[G], I.writeUInt16(o);
									for (V = 0, U = x.length; V < U; V++) b = x[V], I.writeUInt16(b);
									for (W = 0, q = d.length; W < q; W++) p = d[W], I.writeUInt16(p);
									return {
										charMap: n, subtable: I.data, maxGlyphID: y + 1
									}
							}
						}, e
					}(),
					Ao = function(e) {
						function t() {
							return t.__super__.constructor.apply(this, arguments)
						}
						return jo(t, bo), t.prototype.tag = "cmap", t.prototype.parse = function(e) {
							var t, n, r;
							for (e.pos = this.offset, this.version = e.readUInt16(), r = e.readUInt16(), this.tables = [], this.unicode = null, n = 0; 0 <= r ? n < r : n > r; n = 0 <= r ? ++n : --n) t = new ko(e, this.offset), this.tables.push(t), t.isUnicode && null == this.unicode && (this.unicode = t);
							return !0
						}, t.encode = function(e, t) {
							var n, r;
							return null == t && (t = "macroman"), n = ko.encode(e, t), (r = new wo).writeUInt16(0), r.writeUInt16(1), n.table = r.data.concat(n.subtable), n
						}, t
					}(),
					Lo = function(e) {
						function t() {
							return t.__super__.constructor.apply(this, arguments)
						}
						return jo(t, bo), t.prototype.tag = "hhea", t.prototype.parse = function(e) {
							return e.pos = this.offset, this.version = e.readInt(), this.ascender = e.readShort(), this.decender = e.readShort(), this.lineGap = e.readShort(), this.advanceWidthMax = e.readShort(), this.minLeftSideBearing = e.readShort(), this.minRightSideBearing = e.readShort(), this.xMaxExtent = e.readShort(), this.caretSlopeRise = e.readShort(), this.caretSlopeRun = e.readShort(), this.caretOffset = e.readShort(), e.pos += 8, this.metricDataFormat = e.readShort(), this.numberOfMetrics = e.readUInt16()
						}, t
					}(),
					Po = function(e) {
						function t() {
							return t.__super__.constructor.apply(this, arguments)
						}
						return jo(t, bo), t.prototype.tag = "OS/2", t.prototype.parse = function(e) {
							if (e.pos = this.offset, this.version = e.readUInt16(), this.averageCharWidth = e.readShort(), this.weightClass = e.readUInt16(), this.widthClass = e.readUInt16(), this.type = e.readShort(), this.ySubscriptXSize = e.readShort(), this.ySubscriptYSize = e.readShort(), this.ySubscriptXOffset = e.readShort(), this.ySubscriptYOffset = e.readShort(), this.ySuperscriptXSize = e.readShort(), this.ySuperscriptYSize = e.readShort(), this.ySuperscriptXOffset = e.readShort(), this.ySuperscriptYOffset = e.readShort(), this.yStrikeoutSize = e.readShort(), this.yStrikeoutPosition = e.readShort(), this.familyClass = e.readShort(), this.panose = function() {
									var t, n;
									for (n = [], t = 0; t < 10; ++t) n.push(e.readByte());
									return n
								}(), this.charRange = function() {
									var t, n;
									for (n = [], t = 0; t < 4; ++t) n.push(e.readInt());
									return n
								}(), this.vendorID = e.readString(4), this.selection = e.readShort(), this.firstCharIndex = e.readShort(), this.lastCharIndex = e.readShort(), this.version > 0 && (this.ascent = e.readShort(), this.descent = e.readShort(), this.lineGap = e.readShort(), this.winAscent = e.readShort(), this.winDescent = e.readShort(), this.codePageRange = function() {
									var t, n;
									for (n = [], t = 0; t < 2; t = ++t) n.push(e.readInt());
									return n
								}(), this.version > 1)) return this.xHeight = e.readShort(), this.capHeight = e.readShort(), this.defaultChar = e.readShort(), this.breakChar = e.readShort(), this.maxContext = e.readShort()
						}, t
					}(),
					Io = function(e) {
						function t() {
							return t.__super__.constructor.apply(this, arguments)
						}
						return jo(t, bo), t.prototype.tag = "post", t.prototype.parse = function(e) {
							var t, n, r;
							switch (e.pos = this.offset, this.format = e.readInt(), this.italicAngle = e.readInt(), this.underlinePosition = e.readShort(), this.underlineThickness = e.readShort(), this.isFixedPitch = e.readInt(), this.minMemType42 = e.readInt(), this.maxMemType42 = e.readInt(), this.minMemType1 = e.readInt(), this.maxMemType1 = e.readInt(), this.format) {
								case 65536:
								case 196608:
									break;
								case 131072:
									var i;
									for (n = e.readUInt16(), this.glyphNameIndex = [], i = 0; 0 <= n ? i < n : i > n; i = 0 <= n ? ++i : --i) this.glyphNameIndex.push(e.readUInt16());
									for (this.names = [], r = []; e.pos < this.offset + this.length;) t = e.readByte(), r.push(this.names.push(e.readString(t)));
									return r;
								case 151552:
									return n = e.readUInt16(), this.offsets = e.read(n);
								case 262144:
									return this.map = function() {
										var t, n, r;
										for (r = [], i = t = 0, n = this.file.maxp.numGlyphs; 0 <= n ? t < n : t > n; i = 0 <= n ? ++t : --t) r.push(e.readUInt32());
										return r
									}.call(this)
							}
						}, t
					}(),
					Co = function(e, t) {
						this.raw = e, this.length = e.length, this.platformID = t.platformID, this.encodingID = t.encodingID, this.languageID = t.languageID
					},
					_o = function(e) {
						function t() {
							return t.__super__.constructor.apply(this, arguments)
						}
						return jo(t, bo), t.prototype.tag = "name", t.prototype.parse = function(e) {
							var t, n, r, i, a, o, s, c, l, u, h;
							for (e.pos = this.offset, e.readShort(), t = e.readShort(), o = e.readShort(), n = [], i = 0; 0 <= t ? i < t : i > t; i = 0 <= t ? ++i : --i) n.push({
								platformID: e.readShort(),
								encodingID: e.readShort(),
								languageID: e.readShort(),
								nameID: e.readShort(),
								length: e.readShort(),
								offset: this.offset + o + e.readShort()
							});
							for (s = {}, i = l = 0, u = n.length; l < u; i = ++l) r = n[i], e.pos = r.offset, c = e.readString(r.length), a = new Co(c, r), null == s[h = r.nameID] && (s[h] = []), s[r.nameID].push(a);
							this.strings = s, this.copyright = s[0], this.fontFamily = s[1], this.fontSubfamily = s[2], this.uniqueSubfamily = s[3], this.fontName = s[4], this.version = s[5];
							try {
								this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
							} catch (e) {
								this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
							}
							return this.trademark = s[7], this.manufacturer = s[8], this.designer = s[9], this.description = s[10], this.vendorUrl = s[11], this.designerUrl = s[12], this.license = s[13], this.licenseUrl = s[14], this.preferredFamily = s[15], this.preferredSubfamily = s[17], this.compatibleFull = s[18], this.sampleText = s[19]
						}, t
					}(),
					Oo = function(e) {
						function t() {
							return t.__super__.constructor.apply(this, arguments)
						}
						return jo(t, bo), t.prototype.tag = "maxp", t.prototype.parse = function(e) {
							return e.pos = this.offset, this.version = e.readInt(), this.numGlyphs = e.readUInt16(), this.maxPoints = e.readUInt16(), this.maxContours = e.readUInt16(), this.maxCompositePoints = e.readUInt16(), this.maxComponentContours = e.readUInt16(), this.maxZones = e.readUInt16(), this.maxTwilightPoints = e.readUInt16(), this.maxStorage = e.readUInt16(), this.maxFunctionDefs = e.readUInt16(), this.maxInstructionDefs = e.readUInt16(), this.maxStackElements = e.readUInt16(), this.maxSizeOfInstructions = e.readUInt16(), this.maxComponentElements = e.readUInt16(), this.maxComponentDepth = e.readUInt16()
						}, t
					}(),
					To = function(e) {
						function t() {
							return t.__super__.constructor.apply(this, arguments)
						}
						return jo(t, bo), t.prototype.tag = "hmtx", t.prototype.parse = function(e) {
							var t, n, r, i, a, o, s;
							for (e.pos = this.offset, this.metrics = [], t = 0, o = this.file.hhea.numberOfMetrics; 0 <= o ? t < o : t > o; t = 0 <= o ? ++t : --t) this.metrics.push({
								advance: e.readUInt16(),
								lsb: e.readInt16()
							});
							for (r = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
									var n, i;
									for (i = [], t = n = 0; 0 <= r ? n < r : n > r; t = 0 <= r ? ++n : --n) i.push(e.readInt16());
									return i
								}(), this.widths = function() {
									var e, t, n, r;
									for (r = [], e = 0, t = (n = this.metrics).length; e < t; e++) i = n[e], r.push(i.advance);
									return r
								}.call(this), n = this.widths[this.widths.length - 1], s = [], t = a = 0; 0 <= r ? a < r : a > r; t = 0 <= r ? ++a : --a) s.push(this.widths.push(n));
							return s
						}, t.prototype.forGlyph = function(e) {
							return e in this.metrics ? this.metrics[e] : {
								advance: this.metrics[this.metrics.length - 1].advance,
								lsb: this.leftSideBearings[e - this.metrics.length]
							}
						}, t
					}(),
					Do = [].slice,
					Eo = function(e) {
						function t() {
							return t.__super__.constructor.apply(this, arguments)
						}
						return jo(t, bo), t.prototype.tag = "glyf", t.prototype.parse = function() {
							return this.cache = {}
						}, t.prototype.glyphFor = function(e) {
							var t, n, r, i, a, o, s, c, l, u;
							return e in this.cache ? this.cache[e] : (i = this.file.loca, t = this.file.contents, n = i.indexOf(e), 0 === (r = i.lengthOf(e)) ? this.cache[e] = null : (t.pos = this.offset + n, a = (o = new wo(t.read(r))).readShort(), c = o.readShort(), u = o.readShort(), s = o.readShort(), l = o.readShort(), this.cache[e] = -1 === a ? new Ro(o, c, u, s, l) : new Fo(o, a, c, u, s, l), this.cache[e]))
						}, t.prototype.encode = function(e, t, n) {
							var r, i, a, o, s;
							for (a = [], i = [], o = 0, s = t.length; o < s; o++) r = e[t[o]], i.push(a.length), r && (a = a.concat(r.encode(n)));
							return i.push(a.length), {
								table: a,
								offsets: i
							}
						}, t
					}(),
					Fo = function() {
						function e(e, t, n, r, i, a) {
							this.raw = e, this.numberOfContours = t, this.xMin = n, this.yMin = r, this.xMax = i, this.yMax = a, this.compound = !1
						}
						return e.prototype.encode = function() {
							return this.raw.data
						}, e
					}(),
					Ro = function() {
						function e(e, t, n, r, i) {
							var a, o;
							for (this.raw = e, this.xMin = t, this.yMin = n, this.xMax = r, this.yMax = i, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], a = this.raw; o = a.readShort(), this.glyphOffsets.push(a.pos), this.glyphIDs.push(a.readUInt16()), 32 & o;) a.pos += 1 & o ? 4 : 2, 128 & o ? a.pos += 8 : 64 & o ? a.pos += 4 : 8 & o && (a.pos += 2)
						}
						return e.prototype.encode = function() {
							var e, t, n;
							for (t = new wo(Do.call(this.raw.data)), e = 0, n = this.glyphIDs.length; e < n; ++e) t.pos = this.glyphOffsets[e];
							return t.data
						}, e
					}(),
					Mo = function(e) {
						function t() {
							return t.__super__.constructor.apply(this, arguments)
						}
						return jo(t, bo), t.prototype.tag = "loca", t.prototype.parse = function(e) {
							var t, n;
							return e.pos = this.offset, t = this.file.head.indexToLocFormat, this.offsets = 0 === t ? function() {
								var t, r;
								for (r = [], n = 0, t = this.length; n < t; n += 2) r.push(2 * e.readUInt16());
								return r
							}.call(this) : function() {
								var t, r;
								for (r = [], n = 0, t = this.length; n < t; n += 4) r.push(e.readUInt32());
								return r
							}.call(this)
						}, t.prototype.indexOf = function(e) {
							return this.offsets[e]
						}, t.prototype.lengthOf = function(e) {
							return this.offsets[e + 1] - this.offsets[e]
						}, t.prototype.encode = function(e, t) {
							for (var n = new Uint32Array(this.offsets.length), r = 0, i = 0, a = 0; a < n.length; ++a)
								if (n[a] = r, i < t.length && t[i] == a) {
									++i, n[a] = r;
									var o = this.offsets[a],
										s = this.offsets[a + 1] - o;
									s > 0 && (r += s)
								} for (var c = new Array(4 * n.length), l = 0; l < n.length; ++l) c[4 * l + 3] = 255 & n[l], c[4 * l + 2] = (65280 & n[l]) >> 8, c[4 * l + 1] = (16711680 & n[l]) >> 16, c[4 * l] = (4278190080 & n[l]) >> 24;
							return c
						}, t
					}(),
					Bo = function() {
						function e(e) {
							this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33
						}
						return e.prototype.generateCmap = function() {
							var e, t, n, r, i;
							for (t in r = this.font.cmap.tables[0].codeMap, e = {}, i = this.subset) n = i[t], e[t] = r[n];
							return e
						}, e.prototype.glyphsFor = function(e) {
							var t, n, r, i, a, o, s;
							for (r = {}, a = 0, o = e.length; a < o; a++) r[i = e[a]] = this.font.glyf.glyphFor(i);
							for (i in t = [], r)(null != (n = r[i]) ? n.compound : void 0) && t.push.apply(t, n.glyphIDs);
							if (t.length > 0)
								for (i in s = this.glyphsFor(t)) n = s[i], r[i] = n;
							return r
						}, e.prototype.encode = function(e, t) {
							var n, r, i, a, o, s, c, l, u, h, d, f, p, m, g;
							for (r in n = Ao.encode(this.generateCmap(), "unicode"), a = this.glyphsFor(e), d = {
									0: 0
								}, g = n.charMap) d[(s = g[r]).old] = s.new;
							for (f in h = n.maxGlyphID, a) f in d || (d[f] = h++);
							return l = function(e) {
								var t, n;
								for (t in n = {}, e) n[e[t]] = t;
								return n
							}(d), u = Object.keys(l).sort((function(e, t) {
								return e - t
							})), p = function() {
								var e, t, n;
								for (n = [], e = 0, t = u.length; e < t; e++) o = u[e], n.push(l[o]);
								return n
							}(), i = this.font.glyf.encode(a, p, d), c = this.font.loca.encode(i.offsets, p), m = {
								cmap: this.font.cmap.raw(),
								glyf: i.table,
								loca: c,
								hmtx: this.font.hmtx.raw(),
								hhea: this.font.hhea.raw(),
								maxp: this.font.maxp.raw(),
								post: this.font.post.raw(),
								name: this.font.name.raw(),
								head: this.font.head.encode(t)
							}, this.font.os2.exists && (m["OS/2"] = this.font.os2.raw()), this.font.directory.encode(m)
						}, e
					}();
				Qi.API.PDFObject = function() {
					var e;

					function t() {}
					return e = function(e, t) {
						return (Array(t + 1).join("0") + e).slice(-t)
					}, t.convert = function(n) {
						var r, i, a, o;
						if (Array.isArray(n)) return "[" + function() {
							var e, i, a;
							for (a = [], e = 0, i = n.length; e < i; e++) r = n[e], a.push(t.convert(r));
							return a
						}().join(" ") + "]";
						if ("string" == typeof n) return "/" + n;
						if (null != n ? n.isString : void 0) return "(" + n + ")";
						if (n instanceof Date) return "(D:" + e(n.getUTCFullYear(), 4) + e(n.getUTCMonth(), 2) + e(n.getUTCDate(), 2) + e(n.getUTCHours(), 2) + e(n.getUTCMinutes(), 2) + e(n.getUTCSeconds(), 2) + "Z)";
						if ("[object Object]" === {}.toString.call(n)) {
							for (i in a = ["<<"], n) o = n[i], a.push("/" + i + " " + t.convert(o));
							return a.push(">>"), a.join("\n")
						}
						return "" + n
					}, t
				}();

				function Uo(e) {
					return new Promise((function(t, n) {
						var r = null;
						b(e).then((function(n) {
							n.forEach((function(n, i) {
								var a = n.width,
									o = n.height;
								r ? r.addPage([Math.ceil(a), Math.ceil(o)], a > o ? "l" : "p") : r = new Qi({
									orientation: a > o ? "l" : "p",
									unit: "pt",
									format: [Math.ceil(a), Math.ceil(o)],
									compress: !0
								});
								var s = document.createElement("canvas"),
									c = s.getContext("2d");
								s.width = a, s.height = o, c.drawImage(n.ele, 0, 0, a, o, 0, 0, a, o);
								var l = s.toDataURL("image/jpeg", 1);
								r.addImage(l, "JPEG", 0, 0, Math.ceil(a), Math.ceil(o), "", "FAST"), i === e.length - 1 && t(r.output("bloburl"))
							}))
						}))
					}))
				}

				function qo(e, t) {
					return new Promise((function(t, n) {
						var r = 14400;
						b(e).then((function(e) {
							var n = new Qi({
									orientation: e[0].width > e[0].height ? "l" : "p",
									unit: "pt",
									format: [Math.ceil(e[0].width), Math.ceil(r)],
									compress: !0
								}),
								i = r;
							e.forEach((function(e, t) {
								for (var a = e.width, o = 0, s = e.height; o < e.height;)
									if (i > 0) {
										var c = Math.min(s, i),
											l = document.createElement("canvas"),
											u = l.getContext("2d");
										l.width = a, l.height = c, u.drawImage(e.ele, 0, o, a, c, 0, 0, a, c);
										var h = l.toDataURL("image/jpeg", 1);
										n.addImage(h, "JPEG", 0, r - i, Math.ceil(a), Math.ceil(c), "", "FAST"), o += c, s -= i, i -= c
									} else n.addPage({
										format: [a, r]
									}), i = r
							})), t(n.output("bloburl"))
						}))
					}))
				}
				n(78032);
				var zo = n(73216),
					Zo = n(1646),
					Ho = n.n(Zo),
					Go = "https://www.awesomescreenshot.com/api/v1",
					Vo = "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",
					Wo = "https://content.dropboxapi.com/2/files/upload",
					Yo = "https://upload.box.com/api/2.0/files/content",
					Ko = ["/premium/stripe/create_plan", "/premium/stripe/change_plan", "/folder/create", "/folder/add_items", "/folder/change_name", "/trash/throw_into", "/image/change_title", "/video/update_title", "/trash/restore", "/trash/delete", "/image/upload", "/workspace/channel/move_items", "/workspace/channel/load_items", "/workspace/channel/load_members", "/video/websocket/token", "/refer/check_accept"],
					Jo = p().create({
						baseURL: Go
					});

				function Xo(e) {
					return Jo({
						method: "GET",
						url: "/account/auth",
						params: {
							service: e,
							from: "extension"
						}
					})
				}

				function $o(e) {
					return Jo({
						method: "GET",
						url: "/account/load/resource",
						params: e
					})
				}

				function Qo(e, t, n, r, i, a) {
					return Jo({
						method: "POST",
						url: "/destination/add",
						data: {
							accountID: e,
							resourceID: n,
							privacy: i,
							resourceName: r,
							resourceType: t,
							info: a
						}
					})
				}

				function es(e) {
					return Jo({
						method: "GET",
						url: "/destination/image/upload_to_cloud_done",
						params: {
							Service: e
						}
					})
				}
				Jo.interceptors.request.use((function(e) {
					return e
				}), (function() {
					return o.ZP.error("Network error, Request timeout!"), Promise.reject()
				})), Jo.interceptors.response.use((function(e) {
					if (e && e.data && 1 === e.data.code) return Promise.resolve(e.data.data);
					if (e.data.code, 2001 === e.data.code) return Promise.reject(e.data);
					if (1201 === e.data.code) return Promise.reject(e.data);
					if (e.data.msg) {
						if (-1 !== Ko.indexOf(e.config.url)) return Promise.reject(e.data.msg);
						if (o.ZP.error(e.data.msg), "/pricing" !== window.location.pathname) return Promise.reject(e.data.msg)
					}
				}), (function(e) {
					if (e.response) {
						var t = e.response.status;
						// o.ZP.error("Network error! Error Code " + t)
					}
				}));
				n(34529);
				var ts = n(75053),
					ns = (n(64852), n(82530));

				function rs(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return is(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return is(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function is(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var as = zo.Z.Option,
					os = zo.Z.OptGroup,
					ss = ns.ZP.Group,
					cs = {};
				const ls = function(e) {
					var t = e.currentAccount,
						n = rs((0, s.useState)([]), 2),
						r = n[0],
						i = n[1],
						a = rs((0, s.useState)(!1), 2),
						o = a[0],
						c = a[1],
						l = rs((0, s.useState)([]), 2),
						u = l[0],
						h = l[1];
					(0, s.useEffect)((function() {
						c(!0), Promise.all([$o({
							accountID: t.id,
							what: "channel"
						}), $o({
							accountID: t.id,
							what: "member"
						})]).then((function(e) {
							var t = e[0].items.concat(e[1].items);
							i(t.filter((function(e) {
								return e.added
							}))), h(t.filter((function(e) {
								return !e.added
							}))), cs = {}, t.forEach((function(e) {
								cs[e.id] = e
							})), c(!1)
						})).catch((function() {
							c(!1)
						}))
					}), [t.id]);
					var d = we.slack;
					return (0, P.jsxs)(ts.Z, {
						onFinish: function(n) {
							Qo(t.id, cs[n.channel].type, n.channel, cs[n.channel].name, n.privacy, cs[n.channel].info).then((function(t) {
								e.handleDesCreated(t.destination)
							}))
						},
						children: [(0, P.jsx)("div", {
							className: "label",
							children: d.targetName
						}), (0, P.jsx)(ts.Z.Item, {
							name: "channel",
							rules: [{
								required: !0,
								message: "Please choose a channel or member"
							}],
							children: (0, P.jsxs)(zo.Z, {
								size: "large",
								showSearch: !0,
								placeholder: d.placeHolder,
								disabled: o,
								loading: r.length + u.length === 0 || o,
								filterOption: function(e, t) {
									if (t.name) return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0
								},
								children: [r.length && (0, P.jsx)(os, {
									label: "Already Added",
									children: r.map((function(e) {
										return (0, P.jsx)(as, {
											value: e.id,
											name: e.name,
											disabled: !0,
											children: ye[e.type] + e.name
										}, e.id)
									}))
								}), (0, P.jsx)(os, {
									label: "Available",
									children: u.map((function(e) {
										return (0, P.jsx)(as, {
											value: e.id,
											name: e.name,
											children: ye[e.type] + e.name
										}, e.id)
									}))
								})]
							})
						}), (0, P.jsx)(ts.Z.Item, {
							className: "des-share-option",
							name: "privacy",
							initialValue: "private",
							children: (0, P.jsxs)(ss, {
								children: [(0, P.jsx)(ns.ZP, {
									value: "private",
									children: "Private"
								}), (0, P.jsx)(ns.ZP, {
									value: "shared",
									children: "Shared"
								})]
							})
						}), (0, P.jsx)(Ze.Z, {
							type: "primary",
							className: "add-des-btn",
							size: "large",
							block: !0,
							htmlType: "submit",
							children: "Create Destination"
						})]
					})
				};

				function us(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return hs(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hs(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function hs(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var ds = zo.Z.Option,
					fs = zo.Z.OptGroup,
					ps = ns.ZP.Group,
					ms = {};
				const gs = function(e) {
					var t = e.currentAccount,
						n = us((0, s.useState)([]), 2),
						r = n[0],
						i = n[1],
						a = us((0, s.useState)([]), 2),
						o = a[0],
						c = a[1];
					(0, s.useEffect)((function() {
						$o({
							accountID: t.id,
							what: "board"
						}).then((function(e) {
							var t = e.items;
							i(t.filter((function(e) {
								return e.added
							}))), c(t.filter((function(e) {
								return !e.added
							}))), ms = {}, t.forEach((function(e) {
								ms[e.id] = e
							}))
						}))
					}), []);
					var l = we.trello;
					return (0, P.jsxs)(ts.Z, {
						onFinish: function(n) {
							Qo(t.id, ms[n.channel].type, n.channel, ms[n.channel].name, n.privacy, ms[n.channel].info).then((function(t) {
								e.handleDesCreated(t.destination)
							}))
						},
						children: [(0, P.jsx)("div", {
							className: "label",
							children: l.targetName
						}), (0, P.jsx)(ts.Z.Item, {
							name: "channel",
							rules: [{
								required: !0,
								message: "Please choose a board"
							}],
							children: (0, P.jsxs)(zo.Z, {
								size: "large",
								showSearch: !0,
								placeholder: l.placeHolder,
								loading: r.length + o.length === 0,
								filterOption: function(e, t) {
									if (t.name) return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0
								},
								children: [r.length && (0, P.jsx)(fs, {
									label: "Already Added",
									children: r.map((function(e) {
										return (0, P.jsx)(ds, {
											value: e.id,
											name: e.name,
											disabled: !0,
											children: ye[e.type] + e.name
										}, e.id)
									}))
								}), (0, P.jsx)(fs, {
									label: "Available",
									children: o.map((function(e) {
										return (0, P.jsx)(ds, {
											value: e.id,
											name: e.name,
											children: ye[e.type] + e.name
										}, e.id)
									}))
								})]
							})
						}), (0, P.jsx)(ts.Z.Item, {
							className: "des-share-option",
							name: "privacy",
							initialValue: "private",
							children: (0, P.jsxs)(ps, {
								children: [(0, P.jsx)(ns.ZP, {
									value: "private",
									children: "Private"
								}), (0, P.jsx)(ns.ZP, {
									value: "shared",
									children: "Shared"
								})]
							})
						}), (0, P.jsx)(Ze.Z, {
							type: "primary",
							className: "add-des-btn",
							size: "large",
							block: !0,
							htmlType: "submit",
							children: "Create Destination"
						})]
					})
				};

				function vs(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return ys(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ys(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function ys(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var bs = zo.Z.Option,
					ws = zo.Z.OptGroup,
					xs = ns.ZP.Group,
					Ss = {},
					js = {};
				const Ns = function(e) {
					var t = e.currentAccount,
						n = vs((0, s.useState)([]), 2),
						r = n[0],
						i = n[1],
						a = vs((0, s.useState)([]), 2),
						o = a[0],
						c = a[1],
						l = vs((0, s.useState)([]), 2),
						u = l[0],
						h = l[1];
					(0, s.useEffect)((function() {
						$o({
							accountID: t.id,
							what: "workspace"
						}).then((function(e) {
							var t = e.items;
							i(t), f(t[0].id), js = {}, t.forEach((function(e) {
								js[e.id] = e
							}))
						}))
					}), []);
					var d = we.asana;

					function f(e) {
						c([]), h([]), $o({
							accountID: t.id,
							what: "project",
							workspaceID: e
						}).then((function(e) {
							var t = e.items;
							c(t.filter((function(e) {
								return e.added
							}))), h(t.filter((function(e) {
								return !e.added
							}))), Ss = {}, t.forEach((function(e) {
								Ss[e.id] = e
							}))
						}))
					}
					return (0, P.jsxs)(ts.Z, {
						onFinish: function(n) {
							Qo(t.id, "project", n.project, Ss[n.project].name, n.privacy, Ss[n.project].info).then((function(t) {
								e.handleDesCreated(t.destination)
							}))
						},
						children: [(0, P.jsx)("div", {
							className: "label",
							children: d.targetName1
						}), (0, P.jsx)(ts.Z.Item, {
							name: "workspace",
							rules: [{
								required: !0,
								message: "Please choose a workspace"
							}],
							children: (0, P.jsx)(zo.Z, {
								size: "large",
								placeholder: d.placeHolder1,
								loading: 0 === r.length,
								onChange: function(e) {
									f(e)
								},
								children: r.map((function(e) {
									return (0, P.jsx)(bs, {
										value: e.id,
										children: e.name
									}, e.id)
								}))
							})
						}), (0, P.jsx)("div", {
							className: "label",
							children: d.targetName2
						}), (0, P.jsx)(ts.Z.Item, {
							name: "project",
							rules: [{
								required: !0,
								message: "Please choose a project"
							}],
							children: (0, P.jsxs)(zo.Z, {
								size: "large",
								showSearch: !0,
								placeholder: d.placeHolder2,
								loading: o.length + u.length === 0,
								filterOption: function(e, t) {
									if (t.name) return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0
								},
								children: [o.length && (0, P.jsx)(ws, {
									label: "Already Added",
									children: o.map((function(e) {
										return (0, P.jsx)(bs, {
											value: e.id,
											name: e.name,
											disabled: !0,
											children: ye[e.type] + e.name
										}, e.id)
									}))
								}), (0, P.jsx)(ws, {
									label: "Available",
									children: u.map((function(e) {
										return (0, P.jsx)(bs, {
											value: e.id,
											name: e.name,
											children: ye[e.type] + e.name
										}, e.id)
									}))
								})]
							})
						}), (0, P.jsx)(ts.Z.Item, {
							className: "des-share-option",
							name: "privacy",
							initialValue: "private",
							children: (0, P.jsxs)(xs, {
								children: [(0, P.jsx)(ns.ZP, {
									value: "private",
									children: "Private"
								}), (0, P.jsx)(ns.ZP, {
									value: "shared",
									children: "Shared"
								})]
							})
						}), (0, P.jsx)(Ze.Z, {
							type: "primary",
							className: "add-des-btn",
							size: "large",
							block: !0,
							htmlType: "submit",
							children: "Create Destination"
						})]
					})
				};

				function ks(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return As(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return As(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function As(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var Ls = zo.Z.Option,
					Ps = zo.Z.OptGroup,
					Is = ns.ZP.Group,
					Cs = {};
				const _s = function(e) {
					var t = e.currentAccount,
						n = ks((0, s.useState)([]), 2),
						r = n[0],
						i = n[1],
						a = ks((0, s.useState)([]), 2),
						o = a[0],
						c = a[1],
						l = function(e) {
							$o({
								accountID: t.id,
								what: "folder",
								query: e
							}).then((function(e) {
								var t = e.items;
								i(t.filter((function(e) {
									return e.added
								}))), c(t.filter((function(e) {
									return !e.added
								}))), Cs = {}, t.forEach((function(e) {
									Cs[e.id] = e
								}))
							}))
						};
					(0, s.useEffect)((function() {
						l()
					}), []);
					var u = we.googleDrive;
					return (0, P.jsxs)(ts.Z, {
						onFinish: function(n) {
							Qo(t.id, Cs[n.folder].type, n.folder, Cs[n.folder].name, n.privacy, Cs[n.folder].info).then((function(t) {
								e.handleDesCreated(t.destination)
							}))
						},
						children: [(0, P.jsx)("div", {
							className: "label",
							children: u.targetName
						}), (0, P.jsxs)(ts.Z.Item, {
							name: "folder",
							rules: [{
								required: !0,
								message: "choose a folder"
							}],
							children: [(0, P.jsxs)(zo.Z, {
								size: "large",
								showSearch: !0,
								placeholder: u.placeHolder,
								loading: r.length + o.length === 0,
								onSearch: function(e) {
									l(e)
								},
								filterOption: !1,
								children: [r.length && (0, P.jsx)(Ps, {
									label: "Already Added",
									children: r.map((function(e) {
										return (0, P.jsx)(Ls, {
											value: e.id,
											disabled: !0,
											children: ye[e.type] + e.name
										}, e.id)
									}))
								}), (0, P.jsx)(Ps, {
									label: "Available",
									children: o.map((function(e) {
										return (0, P.jsx)(Ls, {
											value: e.id,
											children: ye[e.type] + e.name
										}, e.id)
									}))
								})]
							}), (0, P.jsx)("div", {
								className: "tip",
								children: "Only 10 recent folders are listed. Type and search for other folders."
							})]
						}), (0, P.jsx)(ts.Z.Item, {
							className: "des-share-option",
							name: "privacy",
							initialValue: "private",
							children: (0, P.jsxs)(Is, {
								children: [(0, P.jsx)(ns.ZP, {
									value: "private",
									children: "Private"
								}), (0, P.jsx)(ns.ZP, {
									value: "shared",
									children: "Shared"
								})]
							})
						}), (0, P.jsx)(Ze.Z, {
							type: "primary",
							className: "add-des-btn",
							size: "large",
							block: !0,
							htmlType: "submit",
							children: "Create Destination"
						})]
					})
				};

				function Os(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Ts(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ts(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Ts(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var Ds = zo.Z.Option,
					Es = zo.Z.OptGroup,
					Fs = ns.ZP.Group,
					Rs = {};
				const Ms = function(e) {
					var t = e.currentAccount,
						n = Os((0, s.useState)([]), 2),
						r = n[0],
						i = n[1],
						a = Os((0, s.useState)([]), 2),
						o = a[0],
						c = a[1];
					(0, s.useEffect)((function() {
						$o({
							accountID: t.id,
							what: "repo"
						}).then((function(e) {
							var t = e.items;
							i(t.filter((function(e) {
								return e.added
							}))), c(t.filter((function(e) {
								return !e.added
							}))), Rs = {}, t.forEach((function(e) {
								Rs[e.id] = e
							}))
						}))
					}), []);
					var l = we.github;
					return (0, P.jsxs)(ts.Z, {
						onFinish: function(n) {
							Qo(t.id, Rs[n.repo].type, n.repo, Rs[n.repo].name, n.privacy, Rs[n.repo].info).then((function(t) {
								e.handleDesCreated(t.destination)
							}))
						},
						children: [(0, P.jsx)("div", {
							className: "label",
							children: l.targetName
						}), (0, P.jsx)(ts.Z.Item, {
							name: "repo",
							rules: [{
								required: !0,
								message: "Please choose a channel or member"
							}],
							children: (0, P.jsxs)(zo.Z, {
								size: "large",
								placeholder: l.placeHolder,
								loading: r.length + o.length === 0,
								showSearch: !0,
								onSearch: function(e) {},
								filterOption: function(e, t) {
									if (t.name) return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0
								},
								children: [r.length && (0, P.jsx)(Es, {
									label: "Already Added",
									children: r.map((function(e) {
										return (0, P.jsx)(Ds, {
											value: e.id,
											name: e.info.owner + e.name,
											disabled: !0,
											children: ye[e.type] + e.info.owner + "/" + e.name
										}, e.id)
									}))
								}), (0, P.jsx)(Es, {
									label: "Available",
									children: o.map((function(e) {
										return (0, P.jsx)(Ds, {
											value: e.id,
											name: e.info.owner + e.name,
											children: ye[e.type] + e.info.owner + "/" + e.name
										}, e.id)
									}))
								})]
							})
						}), (0, P.jsx)(ts.Z.Item, {
							className: "des-share-option",
							name: "privacy",
							initialValue: "private",
							children: (0, P.jsxs)(Fs, {
								children: [(0, P.jsx)(ns.ZP, {
									value: "private",
									children: "Private"
								}), (0, P.jsx)(ns.ZP, {
									value: "shared",
									children: "Shared"
								})]
							})
						}), (0, P.jsx)(Ze.Z, {
							type: "primary",
							className: "add-des-btn",
							size: "large",
							block: !0,
							htmlType: "submit",
							children: "Create Destination"
						})]
					})
				};

				function Bs(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Us(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Us(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Us(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var qs = zo.Z.Option,
					zs = zo.Z.OptGroup,
					Zs = ns.ZP.Group,
					Hs = {},
					Gs = {};
				const Vs = function(e) {
					var t = e.currentAccount,
						n = Bs((0, s.useState)([]), 2),
						r = n[0],
						i = n[1],
						a = Bs((0, s.useState)([]), 2),
						o = a[0],
						c = a[1],
						l = Bs((0, s.useState)([]), 2),
						u = l[0],
						h = l[1];
					(0, s.useEffect)((function() {
						$o({
							accountID: t.id,
							what: "cloud"
						}).then((function(e) {
							var t = e.items;
							i(t), f(t[0].id, t[0].name), Gs = {}, t.forEach((function(e) {
								Gs[e.id] = e
							}))
						}))
					}), []);
					var d = we.jira;

					function f(e, n) {
						c([]), h([]), $o({
							accountID: t.id,
							what: "project",
							cloudID: e,
							cloudName: n
						}).then((function(e) {
							var t = e.items;
							c(t.filter((function(e) {
								return e.added
							}))), h(t.filter((function(e) {
								return !e.added
							}))), Hs = {}, t.forEach((function(e) {
								Hs[e.id] = e
							}))
						}))
					}
					return (0, P.jsxs)(ts.Z, {
						onFinish: function(n) {
							Qo(t.id, "project", n.project, Hs[n.project].name, n.privacy, Hs[n.project].info).then((function(t) {
								e.handleDesCreated(t.destination)
							}))
						},
						children: [(0, P.jsx)("div", {
							className: "label",
							children: d.targetName1
						}), (0, P.jsx)(ts.Z.Item, {
							name: "site",
							rules: [{
								required: !0,
								message: "Please choose a site"
							}],
							children: (0, P.jsx)(zo.Z, {
								size: "large",
								placeholder: d.placeHolder1,
								loading: 0 === r.length,
								onChange: function(e) {
									f(e, Gs[e].name)
								},
								children: r.map((function(e) {
									return (0, P.jsx)(qs, {
										value: e.id,
										children: e.name
									}, e.id)
								}))
							})
						}), (0, P.jsx)("div", {
							className: "label",
							children: d.targetName2
						}), (0, P.jsx)(ts.Z.Item, {
							name: "project",
							rules: [{
								required: !0,
								message: "Please choose a project"
							}],
							children: (0, P.jsxs)(zo.Z, {
								size: "large",
								showSearch: !0,
								placeholder: d.placeHolder2,
								loading: o.length + u.length === 0,
								filterOption: function(e, t) {
									if (t.name) return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0
								},
								children: [o.length && (0, P.jsx)(zs, {
									label: "Already Added",
									children: o.map((function(e) {
										return (0, P.jsx)(qs, {
											value: e.id,
											name: e.name,
											disabled: !0,
											children: ye[e.type] + e.name
										}, e.id)
									}))
								}), (0, P.jsx)(zs, {
									label: "Available",
									children: u.map((function(e) {
										return (0, P.jsx)(qs, {
											value: e.id,
											name: e.name,
											children: ye[e.type] + e.name
										}, e.id)
									}))
								})]
							})
						}), (0, P.jsx)(ts.Z.Item, {
							className: "des-share-option",
							name: "privacy",
							initialValue: "private",
							children: (0, P.jsxs)(Zs, {
								children: [(0, P.jsx)(ns.ZP, {
									value: "private",
									children: "Private"
								}), (0, P.jsx)(ns.ZP, {
									value: "shared",
									children: "Shared"
								})]
							})
						}), (0, P.jsx)(Ze.Z, {
							type: "primary",
							className: "add-des-btn",
							size: "large",
							block: !0,
							htmlType: "submit",
							children: "Create Destination"
						})]
					})
				};

				function Ws(e) {
					return Ws = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Ws(e)
				}

				function Ys(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (i = r.key, a = void 0, a = function(e, t) {
							if ("object" !== Ws(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== Ws(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(i, "string"), "symbol" === Ws(a) ? a : String(a)), r)
					}
					var i, a
				}

				function Ks(e, t) {
					return Ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
						return e.__proto__ = t, e
					}, Ks(e, t)
				}

				function Js(e) {
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
						var n, r = $s(e);
						if (t) {
							var i = $s(this).constructor;
							n = Reflect.construct(r, arguments, i)
						} else n = r.apply(this, arguments);
						return function(e, t) {
							if (t && ("object" === Ws(t) || "function" == typeof t)) return t;
							if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
							return Xs(e)
						}(this, n)
					}
				}

				function Xs(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function $s(e) {
					return $s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, $s(e)
				}
				var Qs = {},
					ec = zo.Z.Option;
				zo.Z.OptGroup;
				ke().extend(Ho());
				var tc = function(e) {
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
						}), t && Ks(e, t)
					}(a, e);
					var t, n, r, i = Js(a);

					function a(e) {
						var t;
						return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, a), (t = i.call(this, e)).state = {
							isInAuthMode: !1,
							isLoadList: !1,
							currentResources: [],
							createAccount: "",
							createPrivacy: "private",
							createResource: null,
							isCreating: !1,
							currentAccount: e.currentAccount || (e.accounts ? e.accounts[0] : null) || null,
							isShownUpgrade: !1
						}, t.chooseDes = t.chooseDes.bind(Xs(t)), t.back = t.back.bind(Xs(t)), t.handleAccountChange = t.handleAccountChange.bind(Xs(t)), t.handleConnect = t.handleConnect.bind(Xs(t)), t.handlePrivacyChange = t.handlePrivacyChange.bind(Xs(t)), t.handleResourceChange = t.handleResourceChange.bind(Xs(t)), t.updateCurrentResources = t.updateCurrentResources.bind(Xs(t)), t.handleMessage = t.handleMessage.bind(Xs(t)), t.onAccountConnected = t.onAccountConnected.bind(Xs(t)), t.handleUpgradeCancel = t.handleUpgradeCancel.bind(Xs(t)), t.getPermissionByName = t.getPermissionByName.bind(Xs(t)), t.getFreeTrialTip = t.getFreeTrialTip.bind(Xs(t)), t.getIsShowPro = t.getIsShowPro.bind(Xs(t)), t
					}
					return t = a, n = [{
						key: "componentDidMount",
						value: function() {
							window.addEventListener("message", this.handleMessage)
						}
					}, {
						key: "componentWillUnmount",
						value: function() {
							window.removeEventListener("message", this.handleMessage)
						}
					}, {
						key: "handleMessage",
						value: function(e) {
							if ("accountConnected" === e.data.name) {
								var t = JSON.parse(e.data.data);
								this.setState({
									isInAuthMode: !1
								}), this.onAccountConnected(t)
							}
						}
					}, {
						key: "handleUpgradeCancel",
						value: function() {
							this.setState({
								isShownUpgrade: !1
							})
						}
					}, {
						key: "onAccountConnected",
						value: function(e) {
							this.props.handleAccountConnected(e), this.setState({
								currentAccount: e
							})
						}
					}, {
						key: "chooseDes",
						value: function(e) {
							this.getPermissionByName(e) ? this.setState({
								isInAuthMode: !0,
								createAccount: e
							}) : this.setState({
								isShownUpgrade: !0
							})
						}
					}, {
						key: "getPermissionByName",
						value: function(e) {
							return "googleDrive" === e ? this.props.permissions["allow".concat(v(e))] : this.props.permissions["allow".concat(v(e))] || "free" !== this.props.currentPlan.PlanName
						}
					}, {
						key: "getFreeTrialTip",
						value: function() {
							var e = this.props.permissions;
							if (e.trailConnectedAccountExpireTimeSecond > 0) {
								if (e.trailConnectedAccountExpireTimeSecond > Date.now() / 1e3) {
									var t = 1e3 * e.trailConnectedAccountExpireTimeSecond - Date.now(),
										n = ke().duration(t, "milliseconds").asDays();
									if (n < 1) var r = "less than a day";
									else r = Math.ceil(n) + " days";
									return (0, P.jsxs)(P.Fragment, {
										children: ["Free trial for pro services ends in ", r, ".", (0, P.jsxs)("a", {
											target: "_blank",
											href: "https://www.awesomescreenshot.com/pricing",
											children: [" ", "Upgrade now"]
										})]
									})
								}
								return (0, P.jsxs)(P.Fragment, {
									children: ["The 7-days free trial was expired.", (0, P.jsxs)("a", {
										target: "_blank",
										href: "https://www.awesomescreenshot.com/pricing",
										children: [" ", "Upgrade now"]
									})]
								})
							}
							return -1 === e.trailConnectedAccountExpireTimeSecond ? "" : 0 === e.trailConnectedAccountExpireTimeSecond ? "7-days free trial for pro services" : void 0
						}
					}, {
						key: "handleConnect",
						value: function() {
							Xo(this.state.createAccount).then((function(e) {
								var t = "width=800,height=700,top=" + (window.screen.availHeight - 30 - 700) / 2 + ",left=" + (window.screen.availWidth - 10 - 800) / 2;
								window.open(e.URI, "", t)
							}))
						}
					}, {
						key: "handlePrivacyChange",
						value: function(e) {
							this.setState({
								createPrivacy: e.target.value
							})
						}
					}, {
						key: "handleResourceChange",
						value: function(e) {
							this.setState({
								createResource: e
							})
						}
					}, {
						key: "updateCurrentResources",
						value: function(e) {
							Qs = {}, e.forEach((function(e) {
								Qs[e.id] = e
							})), this.setState({
								currentResources: e,
								isLoadList: !1
							})
						}
					}, {
						key: "handleAccountChange",
						value: function(e) {
							this.setState({
								currentAccount: "add" === e ? null : this.props.accountHash[e]
							})
						}
					}, {
						key: "getIsShowPro",
						value: function() {
							return "free" === this.props.currentPlan.PlanName || "basic" === this.props.currentPlan.PlanName
						}
					}, {
						key: "back",
						value: function() {
							this.setState({
								isInAuthMode: !1
							})
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								t = this.props.accounts,
								n = this.state,
								r = n.currentResources,
								i = (n.isLoadList, n.createResource, n.createPrivacy, n.createAccount),
								a = (n.isCreating, n.currentAccount),
								o = n.isShownUpgrade;
							return r.filter((function(e) {
								return e.added
							})), r.filter((function(e) {
								return !e.added
							})), (0, P.jsxs)(P.Fragment, {
								children: [(0, P.jsx)("div", {
									className: "add-des-panel",
									children: this.state.isInAuthMode ? (0, P.jsxs)(P.Fragment, {
										children: [(0, P.jsx)("div", {
											className: "top",
											children: (0, P.jsxs)("div", {
												className: "back-btn",
												onClick: this.back,
												children: [(0, P.jsx)(ee.Z, {}), "Choose another integration"]
											})
										}), (0, P.jsx)("div", {
											className: "connect-panel",
											children: (0, P.jsxs)("div", {
												className: "box",
												children: [(0, P.jsxs)("div", {
													className: "main-box",
													children: [(0, P.jsx)("div", {
														className: "pic",
														children: (0, P.jsx)("div", {
															className: "logo ".concat(i)
														})
													}), (0, P.jsxs)("div", {
														className: "content",
														children: [(0, P.jsx)("div", {
															className: "logo ".concat(i)
														}), (0, P.jsxs)("div", {
															className: "title",
															children: ["Integrate ", we[i].displayName]
														}), (0, P.jsx)("div", {
															className: "sub-title",
															children: we[i].panelSubTitle
														}), (0, P.jsx)("ul", {
															children: we[i].featureLists.map((function(e, t) {
																return (0, P.jsx)("li", {
																	children: e
																}, t)
															}))
														})]
													})]
												}), (0, P.jsxs)(Ze.Z, {
													type: "primary",
													size: "large",
													onClick: this.handleConnect,
													children: ["Connect with ", we[i].displayName]
												})]
											})
										})]
									}) : (0, P.jsxs)(P.Fragment, {
										children: [(0, P.jsx)("div", {
											className: "title",
											children: a ? "Create a new destination" : "Connect a new account"
										}), (t && t.length) > 0 && (0, P.jsxs)("div", {
											className: "account-select",
											children: [(0, P.jsx)("div", {
												className: "label",
												children: "Connected account"
											}), (0, P.jsxs)(zo.Z, {
												size: "large",
												value: a ? a.id : "add",
												onChange: this.handleAccountChange,
												children: [t.map((function(e) {
													var t = L()("account-logo", e.service);
													return (0, P.jsxs)(ec, {
														value: e.id,
														children: [(0, P.jsx)("div", {
															className: t
														}), we[e.service].displayName, " (", e.userInfo.name, ")"]
													}, e.id)
												})), (0, P.jsxs)(ec, {
													value: "add",
													children: [(0, P.jsx)("div", {
														className: "account-logo add"
													}), "Connect to a new account"]
												})]
											})]
										}), function() {
											if (a) return (0, P.jsx)("div", {
												className: "des-select",
												children: (0, P.jsx)("div", {
													className: "account-des-select",
													children: "slack" === a.service ? (0, P.jsx)(ls, {
														currentAccount: a,
														handleDesCreated: e.props.handleDesCreated
													}) : "trello" === a.service ? (0, P.jsx)(gs, {
														currentAccount: a,
														handleDesCreated: e.props.handleDesCreated
													}) : "asana" === a.service ? (0, P.jsx)(Ns, {
														currentAccount: a,
														handleDesCreated: e.props.handleDesCreated
													}) : "googleDrive" === a.service ? (0, P.jsx)(_s, {
														currentAccount: a,
														handleDesCreated: e.props.handleDesCreated
													}) : "github" === a.service ? (0, P.jsx)(Ms, {
														currentAccount: a,
														handleDesCreated: e.props.handleDesCreated
													}) : "jira" === a.service ? (0, P.jsx)(Vs, {
														currentAccount: a,
														handleDesCreated: e.props.handleDesCreated
													}) : void 0
												})
											});
											var t = "saveElsewhere" === e.props.servicesType ? xe : be;
											return (0, P.jsxs)("div", {
												className: "service-container",
												children: ["saveElsewhere" !== e.props.servicesType && (0, P.jsx)("div", {
													className: "trial-tip",
													children: e.getFreeTrialTip()
												}), (0, P.jsx)("div", {
													className: "label",
													children: "Services"
												}), (0, P.jsx)("div", {
													className: "account-container",
													children: t.map((function(t) {
														var n = L()("account-item", t.name, {
															pro: e.getIsShowPro()
														});
														return (0, P.jsx)("div", {
															className: n,
															"data-des": t.name,
															onClick: e.chooseDes.bind(null, t.name),
															children: (0, P.jsx)("b", {})
														}, t.name)
													}))
												})]
											})
										}()]
									})
								}), (0, P.jsx)(Se.Z, {
									visible: o,
									onCancel: this.handleUpgradeCancel,
									type: "destination"
								})]
							})
						}
					}], n && Ys(t.prototype, n), r && Ys(t, r), Object.defineProperty(t, "prototype", {
						writable: !1
					}), a
				}(s.Component);
				const nc = tc;
				n(3958);
				var rc = n(27049),
					ic = (n(51837), n(54458)),
					ac = n(7085),
					oc = (n(23416), n(84391));
				const sc = function(e) {
					return (0, P.jsx)("div", {
						className: "slack-form",
						children: (0, P.jsxs)(ts.Z, {
							onFinish: function(t) {
								e.handleSend(t)
							},
							children: [(0, P.jsx)("div", {
								className: "label",
								children: "Message"
							}), (0, P.jsx)(ts.Z.Item, {
								name: "description",
								children: (0, P.jsx)(oc.Z.TextArea, {
									size: "large",
									autoSize: {
										minRows: 4
									},
									onChange: e.handleSlackMsgChange
								})
							}), (0, P.jsx)(ts.Z.Item, {
								children: (0, P.jsx)(Ze.Z, {
									className: "send-btn",
									size: "large",
									type: "primary",
									block: !0,
									htmlType: "submit",
									children: "Send message"
								})
							})]
						})
					})
				};
				n(76663);
				var cc = n(68351),
					lc = (n(59263), n(41505)),
					uc = n(58491),
					hc = n(57254);

				function dc(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return fc(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fc(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function fc(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var pc = zo.Z.Option;
				const mc = function(e) {
					var t = dc((0, s.useState)(!1), 2),
						n = t[0],
						r = t[1],
						i = dc((0, s.useState)([]), 2),
						a = i[0],
						o = i[1],
						c = dc((0, s.useState)([]), 2),
						l = c[0],
						u = c[1],
						h = dc((0, s.useState)([]), 2),
						d = h[0],
						f = h[1],
						p = e.resourceID,
						m = e.currentDes;
					return (0, s.useEffect)((function() {
						$o({
							accountID: m.accountID,
							what: "list",
							boardID: p
						}).then((function(e) {
							o(e.items)
						})), $o({
							accountID: m.accountID,
							what: "member",
							boardID: p
						}).then((function(e) {
							u(e.items)
						})), $o({
							accountID: m.accountID,
							what: "label",
							boardID: p
						}).then((function(e) {
							f(e.items)
						}))
					}), [p]), (0, P.jsx)("div", {
						className: "trello-form",
						children: (0, P.jsxs)(ts.Z, {
							onFinish: function(t) {
								var n = {};
								t.description && (n.description = void 0 === t.description ? "" : t.description), n.listID = t.list, t.title && (n.title = t.title), t.members && (n.membersID = t.members.join(",")), t.labels && (n.labelsID = t.labels.join(",")), t.dueDate && !t.dueTime ? n.date = t.dueDate.format("YYYY-MM-DD") : t.dueDate && t.dueTime && (n.datetime = ke().utc(t.dueDate.format("YYYY-MM-DD") + "T" + t.dueTime.format().replace(/(.*)T/, ""))), e.handleSend(n)
							},
							children: [(0, P.jsx)("div", {
								className: "label",
								children: "List"
							}), (0, P.jsx)(ts.Z.Item, {
								name: "list",
								rules: [{
									required: !0,
									message: "Please choose a list"
								}],
								initialValue: a.length ? a[0].id : void 0,
								children: (0, P.jsx)(zo.Z, {
									size: "large",
									placeholder: "Please choose a list",
									showSearch: !0,
									filterOption: function(e, t) {
										return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0
									},
									children: a.map((function(e) {
										return (0, P.jsx)(pc, {
											value: e.id,
											name: e.name,
											children: e.name
										}, e.id)
									}))
								})
							}), (0, P.jsx)("div", {
								className: "label",
								children: "Card title"
							}), (0, P.jsx)(ts.Z.Item, {
								name: "title",
								initialValue: e.tabTitle,
								children: (0, P.jsx)(oc.Z, {
									size: "large",
									autoComplete: "off"
								})
							}), n && (0, P.jsxs)("div", {
								className: "ad-fields",
								children: [(0, P.jsx)("div", {
									className: "label",
									children: "Description"
								}), (0, P.jsx)(ts.Z.Item, {
									name: "description",
									children: (0, P.jsx)(oc.Z.TextArea, {
										size: "large",
										autoSize: {
											minRows: 3
										}
									})
								}), (0, P.jsx)("div", {
									className: "label",
									children: "Members"
								}), (0, P.jsx)(ts.Z.Item, {
									name: "members",
									children: (0, P.jsx)(zo.Z, {
										size: "large",
										mode: "multiple",
										style: {
											width: "100%"
										},
										placeholder: "Select members",
										showSearch: !0,
										filterOption: function(e, t) {
											return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0
										},
										children: l.map((function(e) {
											return (0, P.jsx)(pc, {
												value: e.id,
												name: e.name,
												children: e.name
											}, e.id)
										}))
									})
								}), (0, P.jsx)("div", {
									className: "label",
									children: "Labels"
								}), (0, P.jsx)(ts.Z.Item, {
									name: "labels",
									children: (0, P.jsx)(zo.Z, {
										size: "large",
										mode: "multiple",
										style: {
											width: "100%"
										},
										placeholder: "Select a label",
										className: "label-select trello-member-select",
										showSearch: !0,
										filterOption: function(e, t) {
											return t.name.toLowerCase().indexOf(e.toLowerCase()) >= 0
										},
										dropdownClassName: "trello-label-dropdown",
										children: d.map((function(e) {
											return (0, P.jsx)(pc, {
												value: e.id,
												name: e.name,
												children: (0, P.jsx)("div", {
													className: "trello-label-item " + e.info.color,
													children: e.name
												})
											}, e.id)
										}))
									})
								}), (0, P.jsxs)("div", {
									className: "half-form",
									children: [(0, P.jsxs)("div", {
										className: "half",
										children: [(0, P.jsx)("div", {
											className: "label",
											children: "Due Date"
										}), (0, P.jsx)(ts.Z.Item, {
											name: "dueDate",
											children: (0, P.jsx)(lc.Z, {
												size: "large"
											})
										})]
									}), (0, P.jsxs)("div", {
										className: "half",
										children: [(0, P.jsx)("div", {
											className: "label",
											children: "Due Time"
										}), (0, P.jsx)(ts.Z.Item, {
											name: "dueTime",
											children: (0, P.jsx)(cc.Z, {
												size: "large",
												use12Hours: !0,
												format: "h:mm A",
												className: "due-time-picker"
											})
										})]
									})]
								})]
							}), (0, P.jsx)("div", {
								className: "toggle-field",
								children: (0, P.jsx)("a", {
									className: "toggle-fields-btn",
									onClick: function() {
										r(!n)
									},
									children: n ? (0, P.jsxs)(P.Fragment, {
										children: ["Collapse all fields ", (0, P.jsx)(uc.Z, {})]
									}) : (0, P.jsxs)(P.Fragment, {
										children: ["Show all fields ", (0, P.jsx)(hc.Z, {})]
									})
								})
							}), (0, P.jsx)("div", {
								children: (0, P.jsx)(Ze.Z, {
									className: "send-btn",
									size: "large",
									type: "primary",
									block: !0,
									htmlType: "submit",
									children: "Create card"
								})
							})]
						})
					})
				};

				function gc(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return vc(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vc(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function vc(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var yc = zo.Z.Option;
				const bc = function(e) {
					var t = gc((0, s.useState)(!1), 2),
						n = t[0],
						r = t[1],
						i = gc((0, s.useState)([]), 2),
						a = i[0],
						o = i[1],
						c = gc((0, s.useState)([]), 2),
						l = c[0],
						u = c[1],
						h = gc((0, s.useState)([]), 2),
						d = h[0],
						f = h[1],
						p = e.currentDes,
						m = p.info.workspaceID,
						g = p.resourceID;
					return (0, s.useEffect)((function() {
						$o({
							accountID: p.accountID,
							what: "section",
							projectID: g
						}).then((function(e) {
							o(e.items)
						})), $o({
							accountID: p.accountID,
							what: "member",
							projectID: g
						}).then((function(e) {
							u(e.items)
						})), $o({
							accountID: p.accountID,
							what: "tag",
							workspaceID: m
						}).then((function(e) {
							f(e.items)
						}))
					}), [g]), (0, P.jsx)("div", {
						className: "trello-form",
						children: (0, P.jsxs)(ts.Z, {
							onFinish: function(t) {
								var n = {};
								t.description && (n.description = t.description), t.section && "-1" !== t.section && (n.sectionID = t.section), t.title && (n.title = t.title), t.tags && (n.tagsID = t.tags.join(",")), t.assignee && (n.assigneeID = t.assignee), t.dueDate && !t.dueTime ? n.date = t.dueDate.format("YYYY-MM-DD") : t.dueDate && t.dueTime && (n.datetime = ke().utc(t.dueDate.format("YYYY-MM-DD") + "T" + t.dueTime.format().replace(/(.*)T/, ""))), e.handleSend(n)
							},
							children: [(0, P.jsx)("div", {
								className: "label",
								children: "list" === p.info.layout ? "Section" : "Column"
							}), (0, P.jsx)(ts.Z.Item, {
								name: "section",
								initialValue: "list" !== p.info.layout ? a.length ? a[0].id : null : "-1",
								children: (0, P.jsxs)(zo.Z, {
									size: "large",
									children: ["list" === p.info.layout && (0, P.jsx)(yc, {
										value: "-1",
										children: "No section"
									}), a.map((function(e) {
										return (0, P.jsx)(yc, {
											value: e.id,
											children: e.name
										}, e.id)
									}))]
								})
							}), (0, P.jsx)("div", {
								className: "label",
								children: "Task name"
							}), (0, P.jsx)(ts.Z.Item, {
								name: "title",
								initialValue: e.tabTitle,
								children: (0, P.jsx)(oc.Z, {
									size: "large",
									autoComplete: "false"
								})
							}), n && (0, P.jsxs)("div", {
								className: "ad-fields",
								children: [(0, P.jsx)("div", {
									className: "label",
									children: "Description"
								}), (0, P.jsx)(ts.Z.Item, {
									name: "description",
									children: (0, P.jsx)(oc.Z.TextArea, {
										size: "large",
										autoSize: {
											minRows: 3
										}
									})
								}), (0, P.jsx)("div", {
									className: "label",
									children: "Assignee"
								}), (0, P.jsx)(ts.Z.Item, {
									name: "assignee",
									children: (0, P.jsx)(zo.Z, {
										size: "large",
										style: {
											width: "100%"
										},
										placeholder: "Please select assignee",
										children: l.map((function(e) {
											return (0, P.jsx)(yc, {
												value: e.id,
												children: e.name
											}, e.id)
										}))
									})
								}), (0, P.jsx)("div", {
									className: "label",
									children: "Tags"
								}), (0, P.jsx)(ts.Z.Item, {
									name: "tags",
									children: (0, P.jsx)(zo.Z, {
										size: "large",
										mode: "multiple",
										style: {
											width: "100%"
										},
										placeholder: "Please select",
										children: d.map((function(e) {
											return (0, P.jsx)(yc, {
												value: e.id,
												children: e.name
											}, e.id)
										}))
									})
								}), (0, P.jsxs)("div", {
									className: "half-form",
									children: [(0, P.jsxs)("div", {
										className: "half",
										children: [(0, P.jsx)("div", {
											className: "label",
											children: "Due Date"
										}), (0, P.jsx)(ts.Z.Item, {
											name: "dueDate",
											children: (0, P.jsx)(lc.Z, {
												size: "large"
											})
										})]
									}), (0, P.jsxs)("div", {
										className: "half",
										children: [(0, P.jsx)("div", {
											className: "label",
											children: "Due Time"
										}), (0, P.jsx)(ts.Z.Item, {
											name: "dueTime",
											children: (0, P.jsx)(cc.Z, {
												size: "large",
												use12Hours: !0,
												format: "h:mm A",
												className: "due-time-picker"
											})
										})]
									})]
								})]
							}), (0, P.jsx)("div", {
								className: "toggle-field",
								children: (0, P.jsx)("a", {
									className: "toggle-fields-btn",
									onClick: function() {
										r(!n)
									},
									children: n ? (0, P.jsxs)(P.Fragment, {
										children: ["Collapse all fields ", (0, P.jsx)(uc.Z, {})]
									}) : (0, P.jsxs)(P.Fragment, {
										children: ["Show all fields ", (0, P.jsx)(hc.Z, {})]
									})
								})
							}), (0, P.jsx)("div", {
								children: (0, P.jsx)(Ze.Z, {
									className: "send-btn",
									size: "large",
									type: "primary",
									block: !0,
									htmlType: "submit",
									children: "Create task"
								})
							})]
						})
					})
				};
				const wc = function(e) {
					var t = e.tabTitle;
					return (0, P.jsx)("div", {
						className: "slack-form",
						children: (0, P.jsxs)(ts.Z, {
							onFinish: function(t) {
								e.handleSend(values)
							},
							children: [(0, P.jsx)("div", {
								className: "label",
								children: "Name"
							}), (0, P.jsx)(ts.Z.Item, {
								name: "title",
								initialValue: t,
								children: (0, P.jsx)(oc.Z, {
									onChange: e.handleSlackMsgChange
								})
							}), (0, P.jsx)("div", {
								children: (0, P.jsx)(Ze.Z, {
									className: "send-btn",
									size: "large",
									type: "primary",
									block: !0,
									htmlType: "submit",
									children: "Upload image"
								})
							})]
						})
					})
				};

				function xc(e) {
					return xc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, xc(e)
				}

				function Sc(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== xc(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== xc(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === xc(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function jc(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Nc(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Nc(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Nc(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var kc = zo.Z.Option;
				const Ac = function(e) {
					var t, n = jc((0, s.useState)(!1), 2),
						r = n[0],
						i = n[1],
						a = jc((0, s.useState)([]), 2),
						o = a[0],
						c = a[1],
						l = jc((0, s.useState)([]), 2),
						u = l[0],
						h = l[1],
						d = e.resourceID,
						f = e.currentDes;
					return (0, s.useEffect)((function() {
						$o({
							accountID: f.accountID,
							what: "assignee",
							repo: f.resourceName,
							owner: f.info.owner
						}).then((function(e) {
							c(e.items)
						})), $o({
							accountID: f.accountID,
							what: "label",
							repo: f.resourceName,
							owner: f.info.owner
						}).then((function(e) {
							h(e.items)
						}))
					}), [d]), (0, P.jsx)("div", {
						className: "github-form",
						children: (0, P.jsxs)(ts.Z, {
							onFinish: function(t) {
								var n = {};
								t.description && (n.description = void 0 === t.description ? "" : t.description), n.listID = t.list, t.title && (n.title = t.title), t.assignees && (n.assignees = t.assignees.join(",")), t.labels && (n.labels = t.labels.join(",")), e.handleSend(n)
							},
							children: [(0, P.jsx)("div", {
								className: "label",
								children: "Issue title"
							}), (0, P.jsx)(ts.Z.Item, {
								name: "title",
								initialValue: e.tabTitle,
								children: (0, P.jsx)(oc.Z, {
									size: "large",
									autoComplete: "off"
								})
							}), r && (0, P.jsxs)("div", {
								className: "ad-fields",
								children: [(0, P.jsx)("div", {
									className: "label",
									children: "Description"
								}), (0, P.jsx)(ts.Z.Item, {
									name: "description",
									children: (0, P.jsx)(oc.Z.TextArea, {
										size: "large",
										autoSize: {
											minRows: 3
										}
									})
								}), (0, P.jsx)("div", {
									className: "label",
									children: "Assignee"
								}), (0, P.jsx)(ts.Z.Item, {
									name: "assignees",
									children: (0, P.jsx)(zo.Z, {
										size: "large",
										mode: "multiple",
										style: {
											width: "100%"
										},
										placeholder: "Assign a member",
										children: o.map((function(e) {
											return (0, P.jsx)(kc, {
												value: e.name,
												children: e.name
											}, e.id)
										}))
									})
								}), (0, P.jsx)("div", {
									className: "label",
									children: "Labels"
								}), (0, P.jsx)(ts.Z.Item, {
									name: "labels",
									children: (0, P.jsx)(zo.Z, (t = {
										size: "large",
										mode: "multiple",
										style: {
											width: "100%"
										},
										placeholder: "Select a label",
										className: "label-select"
									}, Sc(t, "className", "trello-member-select"), Sc(t, "dropdownClassName", "trello-label-dropdown"), Sc(t, "children", u.map((function(e) {
										var t = {
											backgroundColor: "#" + e.info.color
										};
										return "ffffff" === e.info.color && (t.color = "black", t.border = "1px solid #eee"), (0, P.jsx)(kc, {
											value: e.name,
											children: (0, P.jsx)("div", {
												style: t,
												className: "trello-label-item",
												children: e.name
											})
										}, e.id)
									}))), t))
								})]
							}), (0, P.jsx)("div", {
								className: "toggle-field",
								children: (0, P.jsx)("a", {
									className: "toggle-fields-btn",
									onClick: function() {
										i(!r)
									},
									children: r ? (0, P.jsxs)(P.Fragment, {
										children: ["Collapse all fields ", (0, P.jsx)(uc.Z, {})]
									}) : (0, P.jsxs)(P.Fragment, {
										children: ["Show all fields ", (0, P.jsx)(hc.Z, {})]
									})
								})
							}), (0, P.jsx)("div", {
								children: (0, P.jsx)(Ze.Z, {
									className: "send-btn",
									size: "large",
									type: "primary",
									block: !0,
									htmlType: "submit",
									children: "Create issue"
								})
							})]
						})
					})
				};
				n(2690);
				var Lc = n(11382),
					Pc = (n(81819), n(85986)),
					Ic = zo.Z.Option;

				function Cc(e) {
					var t = e.field,
						n = t.allowedValues,
						r = t.defaultValue,
						i = -1 !== t.operations.indexOf("add") ? "multiple" : void 0,
						a = function(e) {
							var t = null;
							return n.forEach((function(n) {
								n.id === e && (t = n)
							})), t
						};
					return (0, P.jsx)(zo.Z, {
						showSearch: !0,
						filterOption: function(e, t) {
							return t.children.toLowerCase().indexOf(e.toLowerCase()) >= 0
						},
						size: "large",
						defaultValue: r ? r.id : void 0,
						mode: i,
						onChange: function(n) {
							var r = n;
							"customfield_10021" === t.key && (r = n.map((function(e) {
								return a(e)
							}))), "com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes" === t.schema.custom && (r = n.map((function(e) {
								return a(e)
							}))), "com.atlassian.jira.plugin.system.customfieldtypes:select" === t.schema.custom && (r = {
								id: n
							}), e.handleChange(t.key, r)
						},
						children: n.map((function(e) {
							return (0, P.jsx)(Ic, {
								value: e.id,
								children: e.name || e.value
							}, e.id)
						}))
					})
				}

				function _c(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Oc(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Oc(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Oc(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var Tc = zo.Z.Option;

				function Dc(e) {
					var t = _c((0, s.useState)([]), 2),
						n = t[0],
						r = t[1],
						i = e.field,
						a = e.currentDes;
					(0, s.useEffect)((function() {
						$o({
							accountID: a.accountID,
							what: "autoComplete",
							fieldName: i.key,
							cloudID: a.info.cloudID,
							projectID: a.info.projectID
						}).then((function(e) {
							r(e.items ? e.items : [])
						}))
					}), []);
					var o = -1 !== i.operations.indexOf("add") ? "multiple" : void 0;
					return (0, P.jsx)(zo.Z, {
						showSearch: !0,
						size: "large",
						mode: o,
						onChange: function(t) {
							e.handleChange(i.key, t)
						},
						filterOption: function(e, t) {
							return t.children.toLowerCase().indexOf(e.toLowerCase()) >= 0
						},
						children: n.map((function(e) {
							return function(e) {
								return "assignee" === i.key ? (0, P.jsx)(Tc, {
									value: e.info.user.accountId,
									children: e.info.user.displayName
								}, e.info.user.accountId) : "reporter" === i.key ? (0, P.jsx)(Tc, {
									value: e.id,
									children: e.info.field.displayName
								}, e.id) : "labels" === i.key ? (0, P.jsx)(Tc, {
									value: e.info.field.value,
									children: e.info.field.displayName
								}, e.info.field.value) : (0, P.jsx)(Tc, {})
							}(e)
						}))
					})
				}
				var Ec = n(23279),
					Fc = n.n(Ec),
					Rc = n(49101),
					Mc = n(93695);

				function Bc(e) {
					return function(e) {
						if (Array.isArray(e)) return zc(e)
					}(e) || function(e) {
						if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
					}(e) || qc(e) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Uc(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || qc(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function qc(e, t) {
					if (e) {
						if ("string" == typeof e) return zc(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zc(e, t) : void 0
					}
				}

				function zc(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var Zc = zo.Z.Option;

				function Hc(e) {
					var t = Uc((0, s.useState)([{
							id: Date.now(),
							linkType: "",
							issues: []
						}]), 2),
						n = t[0],
						r = t[1],
						i = Uc((0, s.useState)([]), 2),
						a = i[0],
						o = i[1],
						c = Uc((0, s.useState)([]), 2),
						l = c[0],
						u = c[1],
						d = (e.field, e.currentDes);
					(0, s.useEffect)((function() {
						$o({
							accountID: d.accountID,
							what: "issueLinkType",
							cloudID: d.info.cloudID,
							projectID: d.info.projectID
						}).then((function(e) {
							var t = [];
							e.items.forEach((function(e) {
								"Relates" === e.name ? t.push({
									value: e.name + "+in",
									displayName: e.info.inward
								}) : (t.push({
									value: e.name + "+in",
									displayName: e.info.inward
								}), t.push({
									value: e.name + "+out",
									displayName: e.info.outward
								}))
							})), o(t)
						}))
					}), []), (0, s.useEffect)((function() {
						e.handleChange("issuelinks", n)
					}), [n]);
					var f = function(e, t) {
						$o({
							accountID: d.accountID,
							what: "issue",
							cloudID: d.info.cloudID,
							query: t
						}).then((function(e) {
							e.items[0].info.issues.length > 0 && u(e.items[0].info.issues)
						}))
					};
					return (0, P.jsxs)("div", {
						className: "issue-link",
						children: [(0, P.jsxs)("div", {
							className: "label",
							children: ["Linked issues", (0, P.jsx)("div", {
								className: "add-btn",
								onClick: function() {
									r([].concat(Bc(n), [{
										id: Date.now(),
										linkType: "",
										issues: []
									}]))
								},
								children: (0, P.jsx)(h.Z, {
									title: "Add",
									children: (0, P.jsx)(Rc.Z, {})
								})
							})]
						}), (0, P.jsx)("div", {
							className: "issue-link-container",
							children: n.map((function(e, t) {
								return (0, P.jsxs)("div", {
									className: "issue-link-item",
									children: [(0, P.jsx)(zo.Z, {
										size: "large",
										className: "issue-link-type-select",
										placeholder: "Link type",
										onChange: function(t) {
											! function(e, t) {
												var i = n.filter((function(t) {
													return t.id === e
												}));
												i[0].linkType = t;
												var a = n.map((function(t) {
													return t.id === e ? i[0] : t
												}));
												r(a)
											}(e.id, t)
										},
										children: a.map((function(e) {
											return (0, P.jsx)(Zc, {
												value: e.value,
												children: e.displayName
											}, e.value)
										}))
									}), (0, P.jsx)(zo.Z, {
										size: "large",
										className: "issue-link-select",
										placeholder: "Select issues",
										mode: "multiple",
										onSearch: Fc()((function(t) {
											return f(e.id, t)
										}), 800),
										onDropdownVisibleChange: function(t) {
											t && f(e.id, "")
										},
										onChange: function(t) {
											return function(e, t) {
												var i = n.filter((function(t) {
													return t.id === e
												}));
												i[0].issues = t;
												var a = n.map((function(t) {
													return t.id === e ? i[0] : t
												}));
												r(a)
											}(e.id, t)
										},
										children: l.map((function(e) {
											return (0, P.jsx)(Zc, {
												value: e.key,
												children: e.key
											}, e.key)
										}))
									}), (0, P.jsx)("div", {
										className: "issue-link-remove",
										onClick: function() {
											var t;
											t = e.id, r(n.filter((function(e) {
												return e.id !== t
											})))
										},
										children: (0, P.jsx)(h.Z, {
											title: "Remove",
											children: (0, P.jsx)(Mc.Z, {})
										})
									})]
								}, e.id)
							}))
						})]
					})
				}

				function Gc(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Vc(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Vc(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Vc(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var Wc = zo.Z.Option;

				function Yc(e) {
					var t = Gc((0, s.useState)([]), 2),
						n = t[0],
						r = t[1],
						i = e.field,
						a = e.currentDes;
					(0, s.useEffect)((function() {}), []);
					var o = function(e) {
							var t;
							$o({
								accountID: a.accountID,
								what: (t = i.key, "customfield_10014" === t ? "epic" : "customfield_10021" == t ? "sprint" : void 0),
								cloudName: a.info.cloudName,
								query: e,
								cloudID: a.info.cloudID,
								projectID: a.info.projectID
							}).then((function(e) {
								r(e.items ? e.items : [])
							}))
						},
						c = -1 !== i.operations.indexOf("add") ? "multiple" : void 0;
					return (0, P.jsx)(zo.Z, {
						size: "large",
						showSearch: !0,
						mode: c,
						filterOption: !1,
						onChange: function(t) {
							e.handleChange(i.key, t)
						},
						onSearch: Fc()(o, 800),
						onDropdownVisibleChange: function(e) {
							e && o("")
						},
						children: n.map((function(e) {
							return function(e) {
								return "customfield_10021" === i.key ? (0, P.jsxs)(Wc, {
									value: e.id,
									children: [e.name, "(", e.info.data.stateKey, ")"]
								}, e.id) : "customfield_10014" === i.key ? (0, P.jsxs)(Wc, {
									value: e.id,
									children: [e.name, "-(", e.id, ")"]
								}, e.id) : (0, P.jsx)(Wc, {})
							}(e)
						}))
					})
				}

				function Kc(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Jc(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jc(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Jc(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				const Xc = function(e) {
					var t = Kc((0, s.useState)(!1), 2),
						n = t[0],
						r = t[1],
						i = e.currentDes;
					return (0, P.jsxs)("div", {
						className: "jira-api-token-panel",
						children: [(0, P.jsxs)("div", {
							className: "info",
							children: ["Go to your Atlassian", " ", (0, P.jsx)("a", {
								href: "https://id.atlassian.com/manage/shared-api-tokens",
								target: "_blank",
								children: "API tokens page"
							}), " ", "and create a new API token. Copy the token and paste it into the box below."]
						}), (0, P.jsxs)(ts.Z, {
							onSubmit: function(t) {
								var n, a;
								r(!0), (n = i.account.id, a = t.token, Jo({
									method: "POST",
									url: "/account/jira_basic_token",
									data: {
										accountID: n,
										token: a
									}
								})).then((function() {
									r(!1), e.handleApiTokenSubmitted()
								})).catch((function() {
									r(!1)
								}))
							},
							children: [(0, P.jsx)("div", {
								className: "label",
								children: "API TOKEN"
							}), (0, P.jsx)(ts.Z.Item, {
								name: "token",
								rules: [{
									required: !0
								}],
								children: (0, P.jsx)(oc.Z, {})
							}), (0, P.jsx)(ts.Z.Item, {
								children: (0, P.jsx)(Ze.Z, {
									type: "primary",
									block: !0,
									loading: n,
									htmlType: "submit",
									children: "Submit"
								})
							})]
						})]
					})
				};

				function $c(e) {
					return $c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, $c(e)
				}

				function Qc(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function el(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Qc(Object(n), !0).forEach((function(t) {
							tl(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qc(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function tl(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== $c(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== $c(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === $c(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function nl(e) {
					return (0, P.jsx)(i.Z, el(el({}, e), {}, {
						footer: null,
						maskClosable: !1,
						wrapClassName: "jira-api-token",
						destroyOnClose: !0,
						centered: !0,
						title: "Submit Jira API token",
						children: (0, P.jsx)(Xc, el({}, e))
					}))
				}

				function rl(e) {
					return rl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, rl(e)
				}

				function il(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function al(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? il(Object(n), !0).forEach((function(t) {
							ol(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : il(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function ol(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== rl(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== rl(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === rl(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function sl(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return cl(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cl(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function cl(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var ll = zo.Z.Option,
					ul = {};
				const hl = function(e) {
					var t = sl((0, s.useState)(!1), 2),
						n = t[0],
						r = t[1],
						i = sl((0, s.useState)({}), 2),
						a = i[0],
						o = i[1],
						c = sl((0, s.useState)([]), 2),
						l = c[0],
						h = c[1],
						d = sl((0, s.useState)(null), 2),
						f = d[0],
						p = d[1],
						m = sl((0, s.useState)(!1), 2),
						g = m[0],
						v = m[1],
						y = e.currentDes;
					(0, s.useEffect)((function() {
						l.length && h([]), $o({
							accountID: y.accountID,
							what: "createMeta",
							cloudID: y.info.cloudID,
							projectID: y.info.projectID
						}).then((function(e) {
							p(e.items[0]), h(e.items), e.items.forEach((function(e) {
								ul[e.id] = e
							}))
						}))
					}), [e.currentDes]), (0, s.useEffect)((function() {}));
					var b, w = function(e, t) {
							o(al(al({}, a), {}, ol({}, e, t)))
						},
						x = function(e) {
							var t = {
									fields: {}
								},
								n = {};
							for (var r in n.project = {
									id: y.info.projectID
								}, e) "issuetype" === r || "priority" === r || "assignee" === r ? n[r] = {
								id: e[r]
							} : "summary" === r || "description" === r || "environment" === r || "customfield_10014" === r || "customfield_10016" === r || "labels" === r || "customfield_10037" === r || "customfield_10038" === r || "customfield_10039" === r || "customfield_10029" === r || "customfield_10034" === r || "customfield_10035" === r || "customfield_10036" === r || "customfield_10031" === r || "customfield_10032" === r || "customfield_10033" === r || "customfield_10021" === r || f.info.fields[r] && "com.atlassian.jira.plugin.system.customfieldtypes:select" === f.info.fields[r].schema.custom || f.info.fields[r] && "com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes" === f.info.fields[r].schema.custom || f.info.fields[r] && "com.atlassian.jira.plugin.system.customfieldtypes:float" === f.info.fields[r].schema.custom || f.info.fields[r] && "com.atlassian.jira.plugin.system.customfieldtypes:textarea" === f.info.fields[r].schema.custom || f.info.fields[r] && "com.atlassian.jira.plugin.system.customfieldtypes:textfield" === f.info.fields[r].schema.custom ? f.info.fields[r] && "com.atlassian.jira.plugin.system.customfieldtypes:textarea" === f.info.fields[r].schema.custom ? e[r] && (n[r] = {
								version: 1,
								type: "doc",
								content: [{
									type: "paragraph",
									content: [{
										type: "text",
										text: e[r]
									}]
								}]
							}) : e[r] && (n[r] = e[r]) : "components" === r ? n[r] = e[r].map((function(e) {
								return {
									id: e
								}
							})) : "customfield_10026" === r ? e[r] && (n[r] = [{
								id: f.info.fields.customfield_10026.allowedValues[0].id
							}]) : "fixVersions" === r ? n[r] = e[r].map((function(e) {
								return {
									id: e
								}
							})) : "reporter" === r ? e[r] && (n[r] = {
								id: e[r]
							}) : "parent" === r ? e[r] && (n[r] = {
								key: e[r]
							}) : ("duedate" === r || "customfield_10015" === r || "customfield_10030" === r || f.info.fields[r] && "com.atlassian.jira.plugin.system.customfieldtypes:datetime" === f.info.fields[r].schema.custom || f.info.fields[r] && "com.atlassian.jira.plugin.system.customfieldtypes:datepicker" === f.info.fields[r].schema.custom) && e[r] && (n[r] = e[r].format());
							return (e["timetracking-o"] || e["timetracking-r"]) && (n.timetracking = {}), e["timetracking-o"] && (n.timetracking.originalEstimate = e["timetracking-o"]), e["timetracking-r"] && (n.timetracking.remainingEstimate = e["timetracking-r"]), t.fields = n, e.issuelinks && e.issuelinks.length && (t.issueLinks = [], e.issuelinks.forEach((function(e) {
								if (e.linkType && e.issues.length) {
									var n = e.linkType.split("+"),
										r = n[0],
										i = n[1];
									e.issues.forEach((function(e) {
										var n = ol({
											type: r
										}, "".concat(i, "wardIssue"), e);
										t.issueLinks.push(n)
									}))
								}
							}))), t
						},
						S = function(e) {
							return "timetracking" === e.key ? "(eg. 3w 4d 12h)" : ""
						},
						j = function() {
							v(!0)
						},
						N = function(e) {
							return void 0 !== e.allowedValues ? (0, P.jsx)(Cc, {
								handleChange: w,
								field: e
							}) : void 0 !== e.autoCompleteUrl ? (0, P.jsx)(Dc, {
								handleChange: w,
								currentDes: y,
								field: e
							}) : "description" === e.key || "environment" === e.key || "com.atlassian.jira.plugin.system.customfieldtypes:textarea" === e.schema.custom ? (0, P.jsx)(ts.Z.Item, {
								name: e.key,
								children: (0, P.jsx)(oc.Z.TextArea, {
									size: "large",
									autoSize: {
										minRows: 3
									}
								})
							}) : "customfield_10014" === e.key ? (0, P.jsx)(Yc, {
								handleChange: w,
								currentDes: y,
								field: e
							}) : "customfield_10021" === e.key ? f.info.apiToken ? (0, P.jsx)(Yc, {
								handleChange: w,
								currentDes: y,
								field: e
							}) : (0, P.jsx)(P.Fragment, {
								children: (0, P.jsxs)("i", {
									className: "jira-sprint-tip",
									children: ["To use Sprint, you need to provide an API token.", " ", (0, P.jsx)("a", {
										onClick: j,
										children: "Submit API token"
									})]
								})
							}) : (0, P.jsx)(ts.Z.Item, {
								name: e.key,
								children: (0, P.jsx)(oc.Z, {
									size: "large",
									placeholder: S(e)
								})
							})
						};
					return (0, P.jsxs)("div", {
						className: "jira-form",
						children: [0 === l.length ? (0, P.jsx)("div", {
							className: "loading",
							children: (0, P.jsx)(Lc.Z, {
								indicator: (0, P.jsx)(ac.Z, {
									spin: !0
								})
							})
						}) : (0, P.jsxs)(ts.Z, {
							onFinish: function(t) {
								var n = al(al({}, t), a),
									r = x(n),
									i = f.info.fields;
								i.environment && !r.fields.environment && (r.fields.environment = ""), i.description && !r.fields.description && (r.fields.description = ""), e.handleSend(r)
							},
							children: [(0, P.jsx)("div", {
								className: "label",
								children: "Issue Type"
							}), (0, P.jsx)(ts.Z.Item, {
								name: "issuetype",
								initialValue: l[0].id,
								children: (0, P.jsx)(zo.Z, {
									size: "large",
									onChange: function(e, t) {
										p(ul[e])
									},
									children: l.map((function(e) {
										if ("Subtask" !== e.name) return (0, P.jsx)(ll, {
											value: e.id,
											children: e.name
										}, e.id)
									}))
								})
							}), (0, P.jsx)("div", {
								className: "label",
								children: "Summary"
							}), (0, P.jsx)(ts.Z.Item, {
								name: "summary",
								rules: [{
									required: !0,
									message: "You must specify a summary of the issue."
								}],
								children: (0, P.jsx)(oc.Z, {
									size: "large"
								})
							}), n && (b = f.info.fields, (0, P.jsx)(P.Fragment, {
								children: Object.keys(b).map((function(e) {
									return "issuetype" === e || "project" === e || "summary" === e || "attachment" === e ? void 0 : "timetracking" === e ? (0, P.jsxs)("div", {
										children: [(0, P.jsxs)("div", {
											children: [(0, P.jsx)("div", {
												className: "label",
												children: "Original Estimate"
											}), (0, P.jsx)(ts.Z.Item, {
												name: "timetracking-o",
												children: (0, P.jsx)(oc.Z, {
													size: "large",
													placeholder: "(eg. 3w 4d 12h)"
												})
											})]
										}, "oe"), (0, P.jsxs)("div", {
											children: [(0, P.jsx)("div", {
												className: "label",
												children: "Remaining Estimate"
											}), (0, P.jsx)(ts.Z.Item, {
												name: "timetracking-r",
												children: (0, P.jsx)(oc.Z, {
													size: "large",
													placeholder: "(eg. 3w 4d 12h)"
												})
											})]
										}, "re")]
									}, b[e].key) : "issuelinks" === e ? (0, P.jsx)("div", {
										children: (0, P.jsx)(Hc, {
											handleChange: w,
											currentDes: y,
											field: b
										})
									}, b[e].key) : "duedate" === e || "customfield_10030" === e || "customfield_10015" === e || "com.atlassian.jira.plugin.system.customfieldtypes:datetime" === b[e].schema.custom || "com.atlassian.jira.plugin.system.customfieldtypes:datepicker" === b[e].schema.custom ? (0, P.jsxs)("div", {
										children: [(0, P.jsx)("div", {
											className: "label",
											children: b[e].name
										}), (0, P.jsx)(ts.Z.Item, {
											name: e,
											children: (0, P.jsx)(lc.Z, {
												size: "large",
												style: {
													width: "100%"
												}
											})
										})]
									}, b[e].key) : "customfield_10022" === e || "customfield_10017" === e || "parent" === e ? "" : "customfield_10016" === e || "com.atlassian.jira.plugin.system.customfieldtypes:float" === b[e].schema.custom ? (0, P.jsxs)("div", {
										children: [(0, P.jsx)("div", {
											className: "label",
											children: b[e].name
										}), (0, P.jsx)(ts.Z.Item, {
											name: e,
											children: (0, P.jsx)(Pc.Z, {
												size: "large",
												style: {
													width: "100%"
												}
											})
										})]
									}, b[e].key) : "customfield_10026" === e ? (0, P.jsxs)("div", {
										children: [(0, P.jsx)("div", {
											className: "label",
											children: b[e].name
										}), (0, P.jsx)(ts.Z.Item, {
											name: e,
											children: (0, P.jsx)(u.Z, {
												children: b[e].allowedValues[0].value
											})
										})]
									}, b[e].key) : (0, P.jsxs)("div", {
										children: [(0, P.jsx)("div", {
											className: "label",
											children: b[e].name
										}), N(b[e])]
									}, b[e].key)
								}))
							})), (0, P.jsx)("div", {
								className: "toggle-field",
								children: (0, P.jsx)("a", {
									className: "toggle-fields-btn",
									onClick: function() {
										r(!n)
									},
									children: n ? (0, P.jsxs)(P.Fragment, {
										children: ["Collapse all fields ", (0, P.jsx)(uc.Z, {})]
									}) : (0, P.jsxs)(P.Fragment, {
										children: ["Show all fields ", (0, P.jsx)(hc.Z, {})]
									})
								})
							}), (0, P.jsx)("div", {
								children: (0, P.jsx)(Ze.Z, {
									className: "send-btn",
									size: "large",
									type: "primary",
									block: !0,
									htmlType: "submit",
									children: "Create issue"
								})
							})]
						}), (0, P.jsx)(nl, {
							visible: g,
							onCancel: function() {
								v(!1)
							},
							currentDes: y,
							handleApiTokenSubmitted: function() {
								v(!1), l.length && h([]), $o({
									accountID: y.accountID,
									what: "createMeta",
									cloudID: y.info.cloudID,
									projectID: y.info.projectID
								}).then((function(e) {
									p(e.items[0]), h(e.items), e.items.forEach((function(e) {
										ul[e.id] = e
									}))
								}))
							}
						})]
					})
				};

				function dl(e) {
					return dl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, dl(e)
				}

				function fl(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (i = r.key, a = void 0, a = function(e, t) {
							if ("object" !== dl(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== dl(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(i, "string"), "symbol" === dl(a) ? a : String(a)), r)
					}
					var i, a
				}

				function pl(e, t) {
					return pl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
						return e.__proto__ = t, e
					}, pl(e, t)
				}

				function ml(e) {
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
						var n, r = vl(e);
						if (t) {
							var i = vl(this).constructor;
							n = Reflect.construct(r, arguments, i)
						} else n = r.apply(this, arguments);
						return function(e, t) {
							if (t && ("object" === dl(t) || "function" == typeof t)) return t;
							if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
							return gl(e)
						}(this, n)
					}
				}

				function gl(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function vl(e) {
					return vl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, vl(e)
				}
				var yl = zo.Z.Option,
					bl = function(e) {
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
							}), t && pl(e, t)
						}(s, e);
						var t, n, r, i = ml(s);

						function s(e) {
							var t;
							return function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, s), (t = i.call(this, e)).state = {
								currentDesId: t.props.currentDes.id,
								slackMsg: "",
								isUploading: !1,
								percentage: 0
							}, t.handleDesChange = t.handleDesChange.bind(gl(t)), t.handleSend = t.handleSend.bind(gl(t)), t.handleSlackMsgChange = t.handleSlackMsgChange.bind(gl(t)), t.onUploadProgress = t.onUploadProgress.bind(gl(t)), t
						}
						return t = s, n = [{
							key: "handleDesChange",
							value: function(e) {
								"add" !== e ? this.setState({
									currentDesId: e
								}) : this.props.goToAddDes()
							}
						}, {
							key: "onUploadProgress",
							value: function(e) {
								this.setState({
									percentage: e
								})
							}
						}, {
							key: "handleSend",
							value: function(e) {
								var t = this,
									n = this.props.destinations,
									r = this.state.currentDesId,
									i = {};
								n.forEach((function(e) {
									i[e.id] = e
								}));
								var s = i[r];
								e.service = s.service, e.destinationID = r + "";
								var c, l = e.description;
								if (this.props.tabUrl && (e.sourceLink = this.props.tabUrl), "trello" === e.service ? e.extraString = function(e) {
										if (!e) return "";
										var t = "";
										for (var n in e) t += "**" + n + "**: " + e[n] + " \n";
										return t
									}(this.props.imageInfo) : "asana" === e.service ? e.extraString = function(e) {
										if (!e) return "";
										var t = "";
										return t + "Captured in " + e.Browser + ", " + e["Viewport Size"] + " viewport, " + e["Pixel Ratio"] + " pixel ratio, " + e["Zoom Level"] + " zoom, " + e.OS
									}(this.props.imageInfo) : "github" === e.service ? e.extraString = function(e) {
										if (!e) return "";
										var t = "<table>";
										for (var n in e) t += "<tr><td><strong>" + n + "</strong></td><td>" + e[n] + "</td></tr>";
										return t + "</table> \n"
									}(this.props.imageInfo) : "jira" === e.service && (void 0 !== e.fields.environment ? (e.fields.environment = g(e.fields.environment, this.props.imageInfo, this.props.itemUrl, this.props.type), void 0 !== e.fields.description && (e.fields.description = {
										version: 1,
										type: "doc",
										content: [{
											type: "paragraph",
											content: [{
												type: "text",
												text: e.fields.description
											}]
										}]
									})) : void 0 !== e.fields.description && (e.fields.description = g(e.fields.description, this.props.imageInfo, this.props.itemUrl, this.props.type))), this.props.itemId) "video" === this.props.type ? e.videoID = this.props.itemId : e.imageID = this.props.itemId, this.setState({
									isUploading: !0
								}), (c = e, Jo({
									method: "POST",
									url: "/account/share_item",
									data: c
								})).then((function(n) {
									a.Z.success({
										message: we[e.service].successMsg,
										description: (0, P.jsxs)("a", {
											href: n.itemUrl,
											target: "_blank",
											children: ["Click to see it in your ", we[e.service].displayName]
										})
									}), t.props.handleSendSuccess()
								}), (function(e) {
									throw new Error(we[s.service].actionTypeStr + " failed! (" + e + ")")
								})).catch((function(e) {
									e && o.ZP.error(e.toString() + " Please try again!"), t.setState({
										isUploading: !1,
										percentage: 0
									})
								}));
								else {
									if (this.props.imageBlob) var u = this.props.contentType;
									else {
										var h = this.props.imageUrl.split(",")[1];
										u = this.props.imageUrl.split(",")[0].split(":")[1].split(";")[0]
									}
									this.setState({
											isUploading: !0
										}),
										function(e) {
											return Jo({
												method: "POST",
												url: "/destination/image/create",
												data: e
											})
										}({
											Title: e.title || "",
											Description: l,
											DestID: this.state.currentDesId + "",
											ContentType: u
										}).then((function(n) {
											var r = t.props.imageBlob ? t.props.imageBlob : m(h, u),
												i = new File([r], "test.png"),
												o = n.Image.S3Key;
											return e.destinationImageID = n.Image.ImageID + "", e.imageURL = Go + "/destination/image/show?ImageKey=" + o, e.imageName = t.props.tabTitle + "." + u.replace("image/", ""),
												function(e, t, n) {
													var r = new FormData;
													for (var i in e) r.append(i, e[i]);
													var a = n || "https://awesomescreenshot.s3.amazonaws.com/";
													return p()({
														method: "POST",
														crossdomain: !0,
														url: a,
														data: r,
														onUploadProgress: function(e) {
															var n = Math.round(100 * e.loaded / e.total);
															t(n)
														}
													})
												}({
													AWSAccessKeyId: "AKIAJSCJQ2NM3XLFPVKA",
													acl: "private",
													key: n.Image.S3Key,
													"Content-Type": u,
													policy: n.Policy,
													signature: n.Signature,
													file: i
												}, t.onUploadProgress).then((function(n) {
													return function(e) {
														return Jo({
															method: "GET",
															url: "/destination/image/upload_done",
															params: {
																key: e
															}
														})
													}(o).then((function(n) {
														return function(e) {
															return Jo({
																method: "POST",
																url: "/account/share_screenshot",
																data: e
															})
														}(e).then((function(n) {
															a.Z.success({
																message: we[e.service].successMsg,
																description: (0, P.jsxs)("a", {
																	href: n.itemUrl,
																	target: "_blank",
																	children: ["Click to see it in your", " ", we[e.service].displayName]
																})
															}), t.props.handleSendSuccess()
														}), (function(e) {
															throw new Error(we[s.service].actionTypeStr + " failed! (" + e + ")")
														}))
													}))
												}), (function(e) {
													throw new Error("Upload image failed!")
												}))
										}), (function(e) {
											throw new Error("Create image error!(" + e + ")")
										})).catch((function(e) {
											e && o.ZP.error(e.toString() + " Please try again!"), t.setState({
												isUploading: !1,
												percentage: 0
											})
										}))
								}
							}
						}, {
							key: "handleSlackMsgChange",
							value: function(e) {
								this.setState({
									slackMsg: e.currentTarget.value
								})
							}
						}, {
							key: "render",
							value: function() {
								var e = this,
									t = this.props,
									n = t.destinations,
									r = t.itemUrl,
									i = this.state,
									a = i.currentDesId,
									o = i.isUploading,
									s = i.percentage,
									c = {};
								n.forEach((function(e) {
									c[e.id] = e
								}));
								var l = c[a],
									u = L()("upload-progress", {
										active: o
									}),
									h = L()("destination-area", {
										active: !o
									});
								return (0, P.jsxs)("div", {
									className: "des-panel",
									children: [(0, P.jsxs)("div", {
										className: u,
										children: [r ? (0, P.jsx)(ac.Z, {
											className: "loading"
										}) : (0, P.jsx)(ic.Z, {
											type: "circle",
											status: "active",
											percent: s
										}), (0, P.jsx)("div", {
											className: "upload-tip",
											children: s < 100 && !r ? "Uploading image..." : we[l.service].actionTypeStr + "..."
										})]
									}), (0, P.jsxs)("div", {
										className: h,
										children: [(0, P.jsx)("div", {
											className: "destination-select",
											children: (0, P.jsxs)(zo.Z, {
												size: "large",
												value: a,
												onChange: this.handleDesChange,
												children: [n.map((function(e) {
													var t = L()("des-logo", e.service);
													return (0, P.jsxs)(yl, {
														value: e.id,
														children: [(0, P.jsx)("div", {
															className: t
														}), ye[e.resourceType] + e.resourceName]
													}, e.id)
												})), (0, P.jsxs)(yl, {
													value: "add",
													children: [(0, P.jsx)("div", {
														className: "des-logo add"
													}), "Create a new destination"]
												}, "add")]
											})
										}), (0, P.jsx)(rc.Z, {
											plain: !0,
											children: we[l.service].panelTitle
										}), (0, P.jsx)("div", {
											className: "des-form",
											children: "slack" === l.service ? (0, P.jsx)(sc, {
												currentDes: l,
												tabTitle: e.props.tabTitle,
												handleSend: e.handleSend,
												handleSlackMsgChange: e.handleSlackMsgChange
											}) : "trello" === l.service ? (0, P.jsx)(mc, {
												currentDes: l,
												tabTitle: e.props.tabTitle,
												resourceID: l.resourceID,
												handleSend: e.handleSend
											}) : "asana" === l.service ? (0, P.jsx)(bc, {
												tabTitle: e.props.tabTitle,
												currentDes: l,
												handleSend: e.handleSend
											}) : "googleDrive" === l.service ? (0, P.jsx)(wc, {
												tabTitle: e.props.tabTitle,
												currentDes: l,
												handleSend: e.handleSend
											}) : "github" === l.service ? (0, P.jsx)(Ac, {
												tabTitle: e.props.tabTitle,
												currentDes: l,
												handleSend: e.handleSend
											}) : "jira" === l.service ? (0, P.jsx)(hl, {
												tabTitle: e.props.tabTitle,
												currentDes: l,
												handleSend: e.handleSend
											}) : void 0
										})]
									})]
								})
							}
						}], n && fl(t.prototype, n), r && fl(t, r), Object.defineProperty(t, "prototype", {
							writable: !1
						}), s
					}(s.Component);
				const wl = bl;
				var xl = n(52186);

				function Sl(e) {
					return Sl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Sl(e)
				}

				function jl(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function Nl(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? jl(Object(n), !0).forEach((function(t) {
							kl(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jl(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function kl(e, t, n) {
					return (t = Ll(t)) in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function Al(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ll(r.key), r)
					}
				}

				function Ll(e) {
					var t = function(e, t) {
						if ("object" !== Sl(e) || null === e) return e;
						var n = e[Symbol.toPrimitive];
						if (void 0 !== n) {
							var r = n.call(e, t || "default");
							if ("object" !== Sl(r)) return r;
							throw new TypeError("@@toPrimitive must return a primitive value.")
						}
						return ("string" === t ? String : Number)(e)
					}(e, "string");
					return "symbol" === Sl(t) ? t : String(t)
				}

				function Pl(e, t) {
					return Pl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
						return e.__proto__ = t, e
					}, Pl(e, t)
				}

				function Il(e) {
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
						var n, r = Cl(e);
						if (t) {
							var i = Cl(this).constructor;
							n = Reflect.construct(r, arguments, i)
						} else n = r.apply(this, arguments);
						return function(e, t) {
							if (t && ("object" === Sl(t) || "function" == typeof t)) return t;
							if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
							return function(e) {
								if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return e
							}(e)
						}(this, n)
					}
				}

				function Cl(e) {
					return Cl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, Cl(e)
				}
				var _l = function(e) {
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
						}), t && Pl(e, t)
					}(o, e);
					var t, n, r, a = Il(o);

					function o(e) {
						return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, o), a.call(this, e)
					}
					return t = o, (n = [{
						key: "render",
						value: function() {
							var e = this,
								t = this.props.currentPanel;
							return (0, P.jsx)(i.Z, Nl(Nl({}, this.props), {}, {
								footer: null,
								maskClosable: !1,
								wrapClassName: "des-modal",
								destroyOnClose: !0,
								centered: !0,
								closeIcon: (0, P.jsx)(xl.T, {
									style: {
										fontSize: "12px"
									}
								}),
								children: "add" === t ? (0, P.jsx)(nc, Nl(Nl({}, e.props), {}, {
									currentAccount: e.props.defaultCurrentAccount
								})) : "des" === t ? (0, P.jsx)(wl, {
									currentDes: e.props.currentDes,
									destinations: e.props.destinations,
									goToAddDes: e.props.goToAddDes,
									tabTitle: e.props.tabTitle,
									tabUrl: e.props.tabUrl,
									imageUrl: e.props.imageUrl,
									imageBlob: e.props.imageBlob,
									imageInfo: e.props.imageInfo || null,
									handleSendSuccess: e.props.onCancel,
									contentType: e.props.contentType,
									type: e.props.type,
									itemId: e.props.itemId,
									itemUrl: e.props.itemUrl
								}) : void 0
							}))
						}
					}]) && Al(t.prototype, n), r && Al(t, r), Object.defineProperty(t, "prototype", {
						writable: !1
					}), o
				}(s.Component);
				const Ol = _l;

				function Tl(e) {
					return Tl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Tl(e)
				}

				function Dl(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function El(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Dl(Object(n), !0).forEach((function(t) {
							Fl(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dl(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function Fl(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== Tl(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== Tl(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === Tl(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function Rl(e) {
					return (0, P.jsx)(i.Z, El(El({}, e), {}, {
						footer: null,
						maskClosable: !1,
						wrapClassName: "what-des",
						destroyOnClose: !0,
						children: "what is a destination?"
					}))
				}

				function Ml(e) {
					var t = e.destinations,
						n = L()("des-container", {
							small: e.small
						});
					return (0, P.jsx)("div", {
						className: "render-des",
						children: t && t.length ? (0, P.jsxs)("div", {
							className: n,
							children: [t.map((function(t, n) {
								var r = L()("des-item", t.service);
								return (0, P.jsxs)("div", {
									className: r,
									onClick: e.handleDesClick.bind(null, t),
									title: we[t.service].displayName + " (" + ye[t.resourceType] + t.resourceName + ")",
									children: [(0, P.jsx)("div", {
										className: "icon"
									}), (0, P.jsx)("div", {
										className: "name",
										children: ye[t.resourceType] + t.resourceName
									})]
								}, n)
							})), (0, P.jsx)("div", {
								className: "des-item add",
								onClick: e.handleDesClick.bind(null, "add"),
								children: (0, P.jsx)("div", {
									className: "icon",
									children: "+"
								})
							})]
						}) : (0, P.jsxs)(P.Fragment, {
							children: [(0, P.jsx)(Ze.Z, {
								type: "primary",
								className: "feedback-btn",
								block: !0,
								onClick: e.handleAddDesClick,
								children: "Connect with other services"
							}), (0, P.jsxs)("div", {
								className: "support-s",
								children: [(0, P.jsx)("div", {
									children: "Support:"
								}), (0, P.jsx)("div", {
									className: "s-container",
									children: be.map((function(e) {
										return (0, P.jsx)(h.Z, {
											title: e.displayName,
											children: (0, P.jsx)("div", {
												className: "s-item ".concat(e.name)
											})
										}, e.name)
									}))
								})]
							})]
						})
					})
				}
				var Bl = n(85483);

				function Ul(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return ql(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ql(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function ql(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var zl = zo.Z.Option;
				const Zl = function(e) {
					var t = e.accounts,
						n = e.currentDriveAccount,
						r = n ? n.service : "googleDrive",
						i = we[r],
						c = Ul((0, s.useState)((function() {
							return t ? t[0] : null
						})), 2),
						l = (c[0], c[1]),
						h = Ul((0, s.useState)(""), 2),
						d = h[0],
						f = h[1],
						g = Ul((0, s.useState)(!0), 2),
						b = g[0],
						w = g[1],
						x = Ul((0, s.useState)([]), 2),
						S = x[0],
						j = x[1],
						N = Ul((0, s.useState)(!1), 2),
						k = N[0],
						A = N[1],
						I = Ul((0, s.useState)((function() {
							return null === e.currentDriveAccount
						})), 2),
						C = (I[0], I[1], Ul((0, s.useState)(!1), 2)),
						_ = C[0],
						O = C[1],
						T = Ul((0, s.useState)(0), 2),
						D = T[0],
						E = T[1],
						F = Ul((0, s.useState)(!1), 2),
						R = F[0],
						M = F[1],
						B = Ul((0, s.useState)(""), 2),
						U = B[0],
						q = B[1],
						z = Ul((0, s.useState)(""), 2),
						Z = z[0],
						H = z[1],
						G = Ul((0, s.useState)(!1), 2),
						V = G[0],
						W = G[1],
						Y = Ul((0, s.useState)(!1), 2),
						K = Y[0],
						J = Y[1];
					(0, s.useEffect)((function() {
						l(t[0])
					}), [t.length]), (0, s.useEffect)((function() {
						return e.currentDriveAccount && $(), window.addEventListener("message", X),
							function() {
								window.removeEventListener("message", X)
							}
					}), [e.currentDriveAccount]);
					var X = function(t) {
							if ("accountConnected" === t.data.name) {
								var n = JSON.parse(t.data.data);
								e.handleDriveAccountConnected(n)
							}
						},
						$ = function(t) {
							j([]), A(!0), $o({
								accountID: e.currentDriveAccount.id,
								what: "folder",
								query: t
							}).then((function(e) {
								var t = e.items ? e.items : [];
								j(t), A(!1)
							}))
						},
						Q = function(e, t, r, i) {
							if ("googleDrive" === n.service) {
								var a = new File([e], r.name, {
										type: t
									}),
									o = t.split("/")[1];
								"jpeg" == o && (o = "jpg");
								var s = {
									name: r.name + "." + o
								};
								"-1" !== r.folder && (s.parents = [r.folder]), te(i, a, s, r.googleDriveSharable)
							} else if ("dropbox" === n.service) {
								var c = ("-1" !== r.folder ? S.filter((function(e) {
									return e.id === r.folder
								}))[0].info.path || S.filter((function(e) {
									return e.id === r.folder
								}))[0].info.path_lower : "") + "/" + r.name + "." + t.split("/")[1];
								ne(i, c, e)
							} else if ("box" === n.service) {
								var l = r.name + "." + t.split("/")[1],
									u = r.folder;
								a = new File([e], r.name, {
									type: t
								});
								re(i, a, l, u)
							}
						},
						te = function(t, n, i, s) {
							(function(e, t, n, r, i) {
								var a = new FormData;
								return a.append("metadata", new Blob([JSON.stringify(n)], {
									type: "application/json"
								})), a.append("file", t), p()({
									url: Vo,
									method: "POST",
									headers: {
										Authorization: "Bearer " + e
									},
									data: a,
									onUploadProgress: function(e) {
										var t = 0;
										t = "video" === i ? 50 + Math.round(Math.round(100 * e.loaded / e.total) / 2) : Math.round(100 * e.loaded / e.total), r(t)
									}
								})
							})(t, n, i, E, e.type).then((function(n) {
								if (s) {
									var i = n.data.id;
									J(!0),
										function(e, t) {
											return p()({
												url: "https://www.googleapis.com/drive/v3/files/" + t + "/permissions",
												method: "POST",
												headers: {
													Authorization: "Bearer " + e
												},
												data: {
													role: "reader",
													type: "anyone"
												}
											})
										}(t, i).then((function(e) {
											H("https://drive.google.com/file/d/".concat(i, "/view?usp=sharing")), W(!0), J(!1)
										})).catch((function() {
											H("https://drive.google.com/file/d/".concat(i, "/view?usp=sharing")), W(!0), J(!1)
										}))
								} else a.Z.success({
									message: we[r].successMsg,
									description: (0, P.jsxs)("a", {
										target: "_blank",
										href: "https://drive.google.com/file/d/".concat(n.data.id, "/view"),
										children: ["Click to see it in your ", we[r].displayName]
									})
								}), e.onCancel();
								es("googleDrive")
							})).catch((function(e) {
								o.ZP.error(e.response.data.msg), O(!1), E(0)
							}))
						},
						ne = function(t, n, i) {
							(function(e, t, n, r, i) {
								return p()({
									url: Wo,
									method: "POST",
									headers: {
										Authorization: "Bearer " + e,
										"Dropbox-API-Arg": y({
											path: t,
											mode: "add",
											autorename: !0,
											mute: !1,
											strict_conflict: !1
										}),
										"Content-Type": "application/octet-stream"
									},
									data: n,
									onUploadProgress: function(e) {
										var t = 0;
										t = "video" === i ? 50 + Math.round(Math.round(100 * e.loaded / e.total) / 2) : Math.round(100 * e.loaded / e.total), r(t)
									}
								})
							})(t, n, i, E, e.type).then((function(t) {
								a.Z.success({
									message: we[r].successMsg,
									description: (0, P.jsxs)("a", {
										target: "_blank",
										href: "https://www.dropbox.com/home".concat(t.data.path_display),
										children: ["Click to see it in your ", we[r].displayName]
									})
								}), e.onCancel(), es("dropbox")
							})).catch((function(e) {
								e.response && "insufficient_space" === e.response.data.error.reason[".tag"] ? o.ZP.error("Your dropbox account is full. The screenshot can’t be sent to it") : o.ZP.error(e.response.data.error_summary), O(!1), E(0)
							}))
						},
						re = function(t, n, i, s) {
							(function(e, t, n, r, i, a) {
								var o = new FormData,
									s = {
										name: n
									};
								return s.parent = "-1" !== r ? {
									id: r
								} : {
									id: "0"
								}, o.append("attributes", JSON.stringify(s)), o.append("file", t), p()({
									method: "POST",
									url: Yo,
									headers: {
										Authorization: "Bearer " + e,
										"Access-Control-Expose-Headers": "WWW-Authenticate"
									},
									data: o,
									onUploadProgress: function(e) {
										var t = 0;
										t = "video" === a ? 50 + Math.round(Math.round(100 * e.loaded / e.total) / 2) : Math.round(100 * e.loaded / e.total), i(t)
									}
								})
							})(t, n, i, s, E, e.type).then((function(t) {
								a.Z.success({
									message: we[r].successMsg,
									description: (0, P.jsxs)("a", {
										target: "_blank",
										href: "https://app.box.com/file/".concat(t.data.entries[0].id),
										children: ["Click to see it in your ", we[r].displayName]
									})
								}), e.onCancel(), es("box")
							})).catch((function(e) {
								if (e.response.data && e.response.data.message) var t = e.response.data.message;
								else t = e.response.statusText;
								o.ZP.error(t), O(!1), E(0)
							}))
						},
						ie = function(t) {
							return e.permissions["allow".concat(v(t))]
						},
						ae = L()("upload-progress", {
							active: _
						}),
						oe = L()("drive-wrapper", {
							active: !_
						}),
						se = "video" === e.type ? "video" : "image";
					return (0, P.jsxs)(P.Fragment, {
						children: [(0, P.jsxs)("div", {
							className: "drive-panel",
							children: [(0, P.jsx)("div", {
								className: "title",
								children: null === n ? b ? "Choose your cloud storage" : "" : (0, P.jsxs)(P.Fragment, {
									children: [(0, P.jsx)("div", {
										className: "icon ".concat(n.service)
									}), "Save to ", i.displayName]
								})
							}), (0, P.jsx)("div", {
								className: ae,
								children: V ? (0, P.jsxs)("div", {
									className: "sharable-link-area",
									children: [(0, P.jsx)("div", {
										className: "label",
										children: "Shareable Link"
									}), (0, P.jsx)(oc.Z, {
										value: Z,
										style: {
											width: "320px"
										},
										size: "large"
									}), (0, P.jsx)(Ze.Z, {
										type: "primary",
										size: "large",
										onClick: function() {
											var e, t;
											e = Z, (t = document.createElement("textarea")).value = e, t.style.position = "absolute", t.style.top = "-999999px", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t), o.ZP.success("Copied!")
										},
										children: "Copy"
									})]
								}) : (0, P.jsxs)(P.Fragment, {
									children: [(0, P.jsx)(ic.Z, {
										type: "circle",
										status: "active",
										percent: D
									}), (0, P.jsx)("div", {
										className: "upload-tip",
										children: D < 100 ? "Uploading ".concat(se, "...") : K ? "Creating shareable link..." : we[r].actionTypeStr + "..."
									})]
								})
							}), t.length && n ? (0, P.jsx)("div", {
								className: oe,
								children: (0, P.jsx)("div", {
									className: "container",
									children: (0, P.jsxs)(ts.Z, {
										onFinish: function(t) {
											var r;
											O(!0), (r = n.id, Jo({
												method: "GET",
												url: "/account/token",
												params: {
													accountID: r
												}
											})).then((function(n) {
												var r, i, a = n.token;
												if (e.itemUrl)(r = e.itemUrl, i = function(e) {
													E(Math.round(e / 2))
												}, p()({
													method: "GET",
													url: r,
													responseType: "blob",
													onDownloadProgress: function(e) {
														var t = Math.round(100 * e.loaded / e.total);
														i && i(t)
													}
												})).then((function(e) {
													Q(e.data, "image/png", t, a)
												}));
												else {
													if (e.imageBlob) var o = e.contentType,
														s = e.imageBlob;
													else s = m(e.imageUrl.split(",")[1]), o = e.imageUrl.split(",")[0].split(":")[1].split(";")[0];
													Q(s, o, t, a)
												}
											})).catch((function(e) {
												o.ZP.error("Something went wrong!"), O(!1)
											}))
										},
										children: [(0, P.jsx)("div", {
											className: "account-select"
										}), (0, P.jsx)("div", {
											className: "label",
											children: "Name"
										}), (0, P.jsx)(ts.Z.Item, {
											name: "name",
											rules: [{
												required: !0,
												message: "Please input a name"
											}],
											initialValue: e.tabTitle,
											children: (0, P.jsx)(oc.Z, {})
										}), (0, P.jsx)("div", {
											className: "label",
											children: i.targetName
										}), (0, P.jsx)(ts.Z.Item, {
											name: "folder",
											rules: [{
												required: !0,
												message: "choose a folder"
											}],
											initialValue: "-1",
											children: (0, P.jsxs)(zo.Z, {
												showSearch: !0,
												placeholder: i.placeHolder,
												loading: k,
												onSearch: Fc()((function(e) {
													$(e)
												}), 800),
												filterOption: !1,
												children: [(0, P.jsxs)(zl, {
													value: "-1",
													children: [(0, P.jsx)(Bl.Z, {
														className: "folder-option ".concat(n.service)
													}), "/"]
												}), S.map((function(e) {
													return (0, P.jsxs)(zl, {
														value: e.id,
														children: [(0, P.jsx)(Bl.Z, {
															className: "folder-option ".concat(n.service)
														}), "dropbox" === n.service ? e.info.path || e.info.path_lower : e.name]
													}, e.id)
												}))]
											})
										}), (0, P.jsx)("div", {
											className: "tip",
											children: "googleDrive" === n.service ? "Only root folder and Awesome Screenshot folder are available for the moment." : "Only 10 recent folders are listed. Type and search for other folders."
										}), "googleDrive" === n.service && (0, P.jsx)(ts.Z.Item, {
											name: "googleDriveSharable",
											valuePropName: "checked",
											initialValue: "true" === localStorage["is-google-drive-share"] || e.googleShare,
											children: (0, P.jsx)(u.Z, {
												children: "Get shareable link (Anyone with the link can view)"
											})
										}), (0, P.jsx)(ts.Z.Item, {
											children: (0, P.jsx)(Ze.Z, {
												type: "primary",
												className: "upload-btn",
												size: "large",
												block: !0,
												htmlType: "submit",
												children: "Upload"
											})
										})]
									})
								})
							}) : (0, P.jsx)(P.Fragment, {
								children: b ? (0, P.jsx)("div", {
									className: "service-container",
									children: (0, P.jsx)("div", {
										className: "account-container",
										children: xe.map((function(e) {
											var t = L()("account-item", e.name, {
												pro: !ie(e.name)
											});
											return (0, P.jsx)("div", {
												className: t,
												"data-des": e.name,
												onClick: function() {
													return function(e) {
														ie(e) ? (f(e), w(!1)) : (q(e), M(!0))
													}(e.name)
												},
												children: (0, P.jsx)("b", {})
											}, e.name)
										}))
									})
								}) : (0, P.jsxs)(P.Fragment, {
									children: [(0, P.jsx)("div", {
										className: "top",
										children: (0, P.jsxs)("div", {
											className: "back-btn",
											onClick: function() {
												w(!0)
											},
											children: [(0, P.jsx)(ee.Z, {}), "Choose another cloud storage"]
										})
									}), (0, P.jsx)("div", {
										className: "connect-panel",
										children: (0, P.jsxs)("div", {
											className: "box",
											children: [(0, P.jsxs)("div", {
												className: "main-box",
												children: [(0, P.jsx)("div", {
													className: "pic",
													children: (0, P.jsx)("div", {
														className: "logo ".concat(d)
													})
												}), (0, P.jsxs)("div", {
													className: "content",
													children: [(0, P.jsx)("div", {
														className: "logo ".concat(d)
													}), (0, P.jsxs)("div", {
														className: "title",
														children: ["Integrate ", we[d].displayName]
													}), (0, P.jsx)("div", {
														className: "sub-title",
														children: we[d].panelSubTitle
													}), (0, P.jsx)("ul", {
														children: we[d].featureLists.map((function(e, t) {
															return (0, P.jsx)("li", {
																children: e
															}, t)
														}))
													})]
												})]
											}), (0, P.jsxs)(Ze.Z, {
												type: "primary",
												size: "large",
												onClick: function() {
													Xo(d).then((function(e) {
														var t = "width=800,height=700,top=" + (window.screen.availHeight - 30 - 700) / 2 + ",left=" + (window.screen.availWidth - 10 - 800) / 2;
														window.open(e.URI, "", t)
													}))
												},
												children: ["Connect with ", we[d].displayName]
											})]
										})
									})]
								})
							})]
						}), (0, P.jsx)(Se.Z, {
							visible: R,
							onCancel: function() {
								return M(!1)
							},
							type: U
						})]
					})
				};

				function Hl(e) {
					return Hl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Hl(e)
				}

				function Gl(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function Vl(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Gl(Object(n), !0).forEach((function(t) {
							Wl(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gl(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function Wl(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== Hl(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== Hl(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === Hl(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function Yl(e) {
					return (0, P.jsx)(i.Z, Vl(Vl({}, e), {}, {
						footer: null,
						maskClosable: !1,
						wrapClassName: "des-modal",
						destroyOnClose: !0,
						centered: !0,
						closeIcon: (0, P.jsx)(xl.T, {
							style: {
								fontSize: "12px"
							}
						}),
						children: (0, P.jsx)(Zl, Vl({}, e))
					}))
				}

				function Kl(e) {
					var t = e.accounts;
					return (0, P.jsx)("div", {
						className: "render-drive-accounts",
						children: t && t.length ? (0, P.jsx)("div", {
							className: "save-to-drive",
							children: t.map((function(t) {
								return (0, P.jsxs)("div", {
									className: "save-item ".concat(t.service),
									onClick: e.handleDriveItemClick.bind(null, t),
									children: [(0, P.jsx)("div", {
										className: "icon"
									}), (0, P.jsx)("span", {
										children: (0, P.jsx)("span", {
											className: "user-email",
											title: t.userInfo.email,
											children: t.userInfo.email
										})
									})]
								}, t.id)
							}))
						}) : (0, P.jsxs)(P.Fragment, {
							children: [(0, P.jsx)(Ze.Z, {
								type: "primary",
								className: "connect-btn",
								block: !0,
								onClick: e.handleAddDriveClick,
								children: "Connect with cloud storage"
							}), (0, P.jsxs)("div", {
								className: "support-s",
								children: [(0, P.jsx)("div", {
									children: "Support:"
								}), (0, P.jsx)("div", {
									className: "s-container",
									children: xe.map((function(e) {
										return (0, P.jsx)(h.Z, {
											title: e.displayName,
											children: (0, P.jsx)("div", {
												className: "s-item ".concat(e.name)
											})
										}, e.name)
									}))
								})]
							})]
						})
					})
				}

				function Jl(e) {
					return Jl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Jl(e)
				}

				function Xl(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function $l(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Xl(Object(n), !0).forEach((function(t) {
							Ql(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xl(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function Ql(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== Jl(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== Jl(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === Jl(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function eu(e) {
					return (0, s.useEffect)((function() {
						return function() {}
					}), []), (0, P.jsx)(i.Z, $l($l({}, e), {}, {
						maskClosable: !1,
						className: "dark-comfig",
						wrapClassName: "what-des",
						destroyOnClose: !0,
						closeIcon: (0, P.jsx)(kr, {
							className: "close"
						}),
						width: 340,
						footer: null,
						children: (0, P.jsxs)("div", {
							children: [(0, P.jsx)("div", {
								className: "title",
								children: "Turn off auto back up?"
							}), (0, P.jsx)("div", {
								className: "content",
								children: "Would you like to turn off back up to the cloud automatically? (Note that previously synced screenshots will not be deleted.)"
							}), (0, P.jsx)(Ze.Z, {
								className: "btn",
								onClick: e.comfigAction,
								children: "Turn off"
							})]
						})
					}))
				}

				function tu(e) {
					return tu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, tu(e)
				}

				function nu(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function ru(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? nu(Object(n), !0).forEach((function(t) {
							iu(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nu(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function iu(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== tu(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== tu(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === tu(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}
				const au = function(e) {
					var t, n;
					return (0, P.jsx)(i.Z, ru(ru({}, e), {}, {
						footer: null,
						maskClosable: !1,
						wrapClassName: "sign-in",
						destroyOnClose: !0,
						centered: !0,
						children: (0, P.jsxs)("div", {
							className: "signin-alert-modal",
							children: [(0, P.jsx)("div", {
								className: "tip",
								children: (n = e.type, "aws" === n ? (t = "ext_loc_upload_image", "You need to sign in to an Awesome Screenshot account in order to upload images.") : "drive" === n ? (t = "ext_loc_drive", "You need to sign in to an Awesome Screenshot account in order to connect with cloud services.") : "des" === n ? (t = "ext_loc_destination", "You need to sign in to an Awesome Screenshot account in order to connect with other services.") : "uploadVideo" === n ? (t = "ext_loc_upload_video", "You need to sign in to an Awesome Screenshot account in order to upload videos.") : "")
							}), (0, P.jsx)(Ze.Z, {
								type: "primary",
								size: "large",
								block: !0,
								onClick: function() {
									var e = "https://www.awesomescreenshot.com/signin";
									t && (e += "?from=" + t), window.open(e)
								},
								children: "Sign In"
							})]
						})
					}))
				};

				function ou(e) {
					return ou = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, ou(e)
				}

				function su(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function cu(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? su(Object(n), !0).forEach((function(t) {
							lu(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : su(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function lu(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== ou(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== ou(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === ou(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}
				const uu = function(e) {
					var t = function() {
						e.googleSigin && e.googleSigin()
					};
					return (0, P.jsx)(i.Z, cu(cu({}, e), {}, {
						footer: null,
						maskClosable: !1,
						width: 624,
						wrapClassName: "feature-alert",
						closeIcon: (0, P.jsx)(kr, {}),
						destroyOnClose: !0,
						centered: !0,
						children: (0, P.jsxs)(P.Fragment, {
							children: [(0, P.jsxs)("div", {
								className: "content",
								children: [(0, P.jsxs)("div", {
									className: "tips-field",
									children: [(0, P.jsx)("div", {
										className: "logo",
										children: "NEW!"
									}), (0, P.jsxs)("div", {
										className: "title",
										children: ["Auto backup with ", (0, P.jsx)("span", {
											children: "source URL"
										})]
									}), (0, P.jsxs)("div", {
										className: "tip",
										children: ["Sign in to try out auto backup your screenshot to the cloud with the source URL!", (0, P.jsx)("br", {}), " Like ", (0, P.jsx)("span", {
											children: "bookmark+screenshot!"
										}), " 😍"]
									})]
								}), (0, P.jsx)("div", {
									className: "guide-img"
								})]
							}), (0, P.jsxs)("div", {
								className: "google-btn",
								onClick: t,
								children: [(0, P.jsx)("div", {
									className: "icon-field",
									children: (0, P.jsx)(Cr, {
										className: "icon"
									})
								}), (0, P.jsx)("div", {
									className: "btn-text",
									children: "Sign in with Google"
								})]
							})]
						})
					}))
				};
				n(64886);
				var hu = n(14277),
					du = (n(25791), n(58894));
				const fu = function(e) {
					var t = e.size;
					return (0, P.jsx)("div", {
						className: "container-loading ".concat(t),
						children: (0, P.jsx)(ac.Z, {})
					})
				};

				function pu(e) {
					return pu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, pu(e)
				}

				function mu(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function gu(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? mu(Object(n), !0).forEach((function(t) {
							vu(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mu(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function vu(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== pu(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== pu(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === pu(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function yu(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return bu(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bu(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function bu(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var wu = du.Z.DirectoryTree;
				const xu = function(e) {
					var t = e.isfolderLoading,
						n = e.newFolder,
						r = e.moveItemTo,
						a = e.foldersTreeData,
						c = e.isWorkspaceLoading,
						l = e.workspaceIDs,
						h = e.workspacesIdHash,
						d = e.onCreateAction,
						f = e.isCreatingFolder,
						p = e.isMovingItem,
						m = e.savedPlace,
						g = e.onlySetting,
						v = yu((0, s.useState)("personal"), 2),
						y = v[0],
						b = v[1],
						w = yu((0, s.useState)(null), 2),
						x = w[0],
						S = w[1],
						j = yu((0, s.useState)(null), 2),
						N = j[0],
						k = j[1],
						A = yu((0, s.useState)(null), 2),
						I = A[0],
						C = A[1],
						_ = yu((0, s.useState)(""), 2),
						O = _[0],
						T = _[1],
						D = yu((0, s.useState)("0"), 2),
						E = D[0],
						F = D[1],
						R = yu((0, s.useState)("folder"), 2),
						M = R[0],
						B = R[1],
						U = yu((0, s.useState)(null), 2),
						q = U[0],
						z = U[1],
						Z = yu((0, s.useState)("true" === localStorage["auto-save-path"]), 2),
						H = Z[0],
						G = Z[1],
						V = yu((0, s.useState)(!1), 2),
						W = V[0],
						Y = V[1],
						K = yu((0, s.useState)(!1), 2),
						J = K[0],
						X = K[1],
						$ = yu((0, s.useState)(!0), 2),
						Q = $[0],
						ee = $[1],
						te = (0, s.useRef)(),
						ne = (0, s.useRef)();
					(0, s.useEffect)((function() {
						W && ne.current.focus(), J && te.current && te.current.focus()
					}), [W, J]), (0, s.useEffect)((function() {
						m && !g && re(m)
					}), [m, h]), (0, s.useEffect)((function() {
						e.visible ? !g && m && re(m) : (X(!1), Y(!1), z(null))
					}), [e.visible]), (0, s.useEffect)((function() {
						if (g) {
							var e = void 0 === localStorage.defaultSavePlace ? "folder-.-0-.-My Items" : localStorage.defaultSavePlace;
							re(e)
						}
					}), [g]), (0, s.useEffect)((function() {
						f || (Y(!1), n && (z({
							title: n.title,
							folderID: n.folderID
						}), S({
							title: n.title,
							folderID: n.folderID
						}))), f || "personal" === y || (N && k(h[N.id]), X(!1))
					}), [f]), (0, s.useEffect)((function() {
						return function() {
							X(!1), Y(!1)
						}
					}), []), (0, s.useEffect)((function() {
						return function() {}
					}), []);
					var re = function(e) {
							var t = e.split("-.-")[0];
							B(t);
							var n = e.split("-.-")[1];
							if (F(n), "folder" !== t) {
								var r = e.split("-.-")[2];
								h[r] && (k(h[r]), b(h[r].name))
							} else S({
								title: e.split("-.-")[2],
								folderID: n
							})
						},
						ie = "",
						ae = "",
						oe = function e(t, n, r) {
							for (var i = 0; i < r.length; i++) r[i].folderID === t ? (ie = r[i].key, ae = n) : r[i].children && e(t, r[i].key, r[i].children)
						},
						se = function() {
							var e = q ? q.folderID : E;
							return oe(e, "0", a), "0" === ae ? {
								key: ie,
								parentKey: ""
							} : {
								key: ie,
								parentKey: ae
							}
						},
						ce = function(e, t) {
							S({
								title: t.node.title,
								folderID: t.node.folderID
							}), z(null)
						};

					function le(e) {
						"personal" !== e ? (k(h[e]), b(h[e].name)) : b(e)
					}
					var ue = function() {
						e.onCancel && e.onCancel()
					};

					function he(e) {
						G(e.target.checked), localStorage["auto-save-path"] = e.target.checked
					}
					var de, fe = function() {
							O.length > 60 ? o.ZP.error("The folder name is too long!") : d && d("folder", O, x && x.folderID || "0")
						},
						pe = function() {
							if (r) {
								var e = "";
								"personal" === y ? (e = "folder-.-" + (x && x.folderID || "0") + "-.-" + (x && x.title) || 0, g ? r("setdefault", e) : r("folder", e, x && x.folderID || "0")) : (e = "channel-.-" + I.id + "-.-" + I.workspaceID + "-.-" + I.name, g ? r("setdefault", e) : r("channel", e, I.id, I.workspaceID))
							}
						},
						me = function(e) {
							T(e.target.value)
						},
						ge = function(e) {
							13 === e.keyCode && fe()
						},
						ve = function() {
							Y(!0)
						},
						ye = function() {
							X(!0)
						},
						be = function() {
							Y(!1)
						},
						we = function() {
							X(!1)
						},
						xe = N && N.channels && N.channels.filter((function(e) {
							return !0 === e.isMember
						})),
						Se = function() {
							return (0, P.jsxs)(P.Fragment, {
								children: [(0, P.jsx)("div", {
									className: "field-tip",
									children: "Channels"
								}), (0, P.jsx)("div", {
									className: "folder-select",
									children: c ? (0, P.jsx)(fu, {}) : (0, P.jsxs)(P.Fragment, {
										children: [(0, P.jsx)("div", {
											className: "select-container",
											children: xe && xe.length > 0 ? xe.map((function(e) {
												var t = e,
													n = L()("channel-item", {
														selected: I && I.id === t.id
													});
												return (0, P.jsxs)("div", {
													className: n,
													onClick: function() {
														! function(e) {
															C(e)
														}(e)
													},
													children: [(0, P.jsx)(_r, {}), t.name]
												}, e.id)
											})) : (0, P.jsx)(hu.Z, {
												image: hu.Z.PRESENTED_IMAGE_SIMPLE,
												description: "No channels"
											})
										}), (0, P.jsxs)("div", {
											className: "folder-btn-area",
											onClick: ye,
											children: [(0, P.jsx)(jr, {}), " Create a new channel"]
										})]
									})
								})]
							})
						},
						je = function() {
							return (0, P.jsxs)(P.Fragment, {
								children: [(0, P.jsx)("div", {
									className: "field-tip",
									children: "Folders"
								}), (0, P.jsx)("div", {
									className: "folder-select",
									children: t ? (0, P.jsx)(fu, {}) : (0, P.jsxs)(P.Fragment, {
										children: [(0, P.jsx)("div", {
											className: "select-container",
											children: (0, P.jsx)(wu, {
												expandAction: "doubleClick",
												treeData: a,
												height: 240,
												onSelect: ce,
												defaultSelectedKeys: [se().key],
												defaultExpandedKeys: [se().parentKey]
											})
										}), (0, P.jsxs)("div", {
											className: "folder-btn-area",
											onClick: ve,
											children: [(0, P.jsx)(jr, {}), " Create a new folder", x && "0" !== x.folderID ? (0, P.jsxs)(P.Fragment, {
												children: [" ", "in", " ", (0, P.jsx)("span", {
													className: "par-folder",
													children: x.title
												})]
											}) : (0, P.jsx)(P.Fragment, {})]
										})]
									})
								})]
							})
						};

					function Ne(e) {
						var t = e.channelName,
							n = e.channelDesc;
						d && N && d("channel", t, N.id, n)
					}

					function ke(e, t) {
						t.channelName && t.channelName.length ? Q && ee(!1) : Q || ee(!0)
					}
					return (0, P.jsx)(i.Z, gu(gu({}, e), {}, {
						footer: null,
						maskClosable: !1,
						destroyOnClose: !0,
						width: 430,
						wrapClassName: "move-image",
						closeIcon: (0, P.jsx)(kr, {
							className: "close"
						}),
						centered: !0,
						children: W ? (0, P.jsxs)("div", {
							className: "move-pannel",
							children: [(0, P.jsx)("div", {
								className: "title",
								children: "New folder"
							}), (0, P.jsx)("div", {
								className: "destination-select",
								children: (0, P.jsxs)("div", {
									className: "select-label",
									children: ["Create a new folder", " ", x && "0" !== x.folderID ? (0, P.jsxs)(P.Fragment, {
										children: [" ", "in ", (0, P.jsx)("span", {
											children: x.title
										})]
									}) : (0, P.jsx)(P.Fragment, {})]
								})
							}), (0, P.jsx)("div", {
								className: "content",
								children: (0, P.jsx)(oc.Z, {
									size: "large",
									placeholder: "Enter a folder name",
									onChange: me,
									onKeyDown: ge,
									ref: ne
								})
							}), (0, P.jsx)("div", {
								className: "bottom-area",
								children: (0, P.jsxs)("div", {
									className: "btn-area",
									children: [(0, P.jsx)(Ze.Z, {
										onClick: be,
										className: "btn cancel",
										children: "Cancel"
									}), (0, P.jsx)(Ze.Z, {
										type: "primary",
										disabled: !O.trim(),
										loading: f,
										onClick: fe,
										className: "btn done",
										children: "Create"
									})]
								})
							})]
						}) : J ? (0, P.jsxs)("div", {
							className: "move-pannel",
							children: [(0, P.jsx)("div", {
								className: "title",
								children: "Create a Channel"
							}), (0, P.jsx)("div", {
								className: "destination-select",
								children: (0, P.jsx)("div", {
									className: "select-label",
									children: "Channels are best when organized around a project or a topic"
								})
							}), (0, P.jsxs)(ts.Z, {
								onFinish: Ne,
								onValuesChange: ke,
								children: [(0, P.jsxs)("div", {
									className: "content",
									children: [(0, P.jsx)("div", {
										className: "label",
										children: "Name"
									}), (0, P.jsx)(ts.Z.Item, {
										name: "channelName",
										children: (0, P.jsx)(oc.Z, {
											size: "large",
											autoComplete: "off",
											ref: te,
											placeholder: "e.g. Product Research/ New Year Planning"
										})
									}), (0, P.jsx)("div", {
										className: "input-tip",
										children: "What do your team plan to work on?"
									}), (0, P.jsxs)("div", {
										className: "label",
										children: ["Description ", (0, P.jsx)("span", {
											children: "(optional)"
										})]
									}), (0, P.jsx)(ts.Z.Item, {
										name: "channelDesc",
										children: (0, P.jsx)(oc.Z.TextArea, {
											autoSize: {
												minRows: 4
											}
										})
									}), (0, P.jsx)("div", {
										className: "input-tip",
										children: "What’s this channel about?"
									})]
								}), (0, P.jsx)("div", {
									className: "bottom-area",
									children: (0, P.jsxs)("div", {
										className: "btn-area",
										children: [(0, P.jsx)(Ze.Z, {
											onClick: we,
											className: "btn cancel",
											children: "Cancel"
										}), (0, P.jsx)(Ze.Z, {
											type: "primary",
											loading: f,
											htmlType: "submit",
											className: "btn done",
											disabled: Q,
											children: "Create"
										})]
									})
								})]
							})]
						}) : (0, P.jsxs)("div", {
							className: "move-pannel",
							children: [(0, P.jsxs)("div", {
								className: "title",
								children: [" ", g ? "Set default save location" : "Move to"]
							}), (0, P.jsxs)("div", {
								className: "destination-select",
								children: [(0, P.jsx)("div", {
									className: "select-label",
									children: "Personal & Workspaces"
								}), (0, P.jsxs)(zo.Z, {
									style: {
										width: "100%",
										textAlign: "left"
									},
									size: "large",
									value: y,
									className: "select-destination",
									onChange: le,
									children: ["channel" !== M || g ? (0, P.jsx)(zo.Z.Option, {
										value: "personal",
										children: "Personal"
									}) : (0, P.jsx)(P.Fragment, {}), (0, P.jsx)(P.Fragment, {
										children: l && l.length > 0 && l.map((function(e) {
											return (0, P.jsx)(zo.Z.Option, {
												value: e,
												children: h[e].name
											}, e)
										}))
									})]
								})]
							}), (0, P.jsx)("div", {
								className: "content",
								children: "personal" == y ? je() : Se()
							}), (0, P.jsxs)("div", {
								className: "bottom-area",
								children: [g ? (0, P.jsx)(P.Fragment, {}) : (0, P.jsx)(u.Z, {
									checked: H,
									className: "check-default",
									onChange: he,
									children: "Set as the default save location"
								}), (0, P.jsxs)("div", {
									className: "btn-area",
									children: [(0, P.jsx)(Ze.Z, {
										onClick: ue,
										className: "btn cancel",
										children: "Cancel"
									}), (0, P.jsx)(Ze.Z, {
										type: "primary",
										className: "btn done",
										disabled: (de = !0, !(g || ("personal" !== y ? "channel" !== M || I && (de = de && E !== I.id) : "folder" === M && (x ? de = de && E !== x.folderID : void(de = !1))))),
										loading: p,
										onClick: pe,
										children: "Done"
									})]
								})]
							})]
						})
					}))
				};
				var Su = n(45697),
					ju = n.n(Su);

				function Nu(e) {
					return Nu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Nu(e)
				}

				function ku(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function Au(e, t, n) {
					return t = function(e) {
						var t = function(e, t) {
							if ("object" !== Nu(e) || null === e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" !== Nu(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === t ? String : Number)(e)
						}(e, "string");
						return "symbol" === Nu(t) ? t : String(t)
					}(t), t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function Lu(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Pu(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pu(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Pu(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var Iu = ["#2ecc71", "#3498db", "#8e44ad", "#e67e22", "#e74c3c", "#1abc9c", "#2c3e50"];

				function Cu(e) {
					var t = e.username ? e.username : "no name",
						n = Lu((0, s.useState)("loading"), 2),
						r = n[0],
						i = n[1],
						a = e.bordered,
						o = t ? t.split(" ") : [],
						c = "";
					o.forEach((function(e) {
						c += e.charAt(0).toUpperCase()
					})), c = c.substring(0, 3);
					var l = e.size + "px",
						u = c.length > 1 ? function() {
							var t = e.size / 2 - Math.max(2, c.length),
								n = e.size / 5 * 4,
								r = document.createElement("span");
							if (r.style.visibility = "hidden", r.style.opacity = "0", r.style.position = "fixed", r.innerText = c, r.style.fontWeight = 500, r.style.fontSize = t + "px", document.body.appendChild(r), !(r.offsetWidth > n || r.offsetHeight > n)) return document.body.removeChild(r), t + "px";
							for (var i = 5; i <= t; i++)
								if (r.style.fontSize = i + "px", !(r.offsetWidth < n && r.offsetHeight < n)) return document.body.removeChild(r), i - 1 + "px"
						}() : e.size / 2 - Math.max(2, c.length) + "px",
						h = "square" !== e.type,
						d = e.username ? e.username.length : 0;
					var f = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {};
							t % 2 ? ku(Object(n), !0).forEach((function(t) {
								Au(e, t, n[t])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ku(Object(n)).forEach((function(t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
							}))
						}
						return e
					}({
						height: l,
						width: l,
						lineHeight: l,
						fontSize: u,
						borderRadius: h ? "50%" : "var(--as-border-radius)",
						display: e.block ? "block" : "inline-block",
						backgroundColor: e.avatarUrl && "success" === r ? "" : Iu[d % Iu.length]
					}, e.style);
					return (0, P.jsxs)("div", {
						className: "avatar ".concat(a ? "bordered" : ""),
						style: f,
						children: [e.plan && "Free" !== e.plan && (0, P.jsx)("div", {
							className: "plan-badge ".concat(e.plan),
							children: (0, P.jsx)(xl.C, {})
						}), e.avatarUrl && 0 !== e.avatarUrl.length ? (0, P.jsx)(P.Fragment, {
							children: "failed" !== r ? (0, P.jsx)("img", {
								style: {
									height: l,
									width: l
								},
								src: e.avatarUrl,
								onLoad: function() {
									i("success")
								},
								onError: function() {
									i("failed")
								}
							}) : (0, P.jsx)(P.Fragment, {
								children: c
							})
						}) : (0, P.jsx)(P.Fragment, {
							children: c
						})]
					})
				}
				Cu.propTypes = {
					username: ju().string.isRequired,
					size: ju().oneOfType([ju().string, ju().number]).isRequired,
					type: ju().string,
					avatarUrl: ju().string,
					style: ju().object,
					block: ju().bool,
					plan: ju().oneOf(["professional", "basic"])
				};
				const _u = (0, s.memo)(Cu);
				var Ou = n(99165);

				function Tu(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Du(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Du(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Du(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}

				function Eu(e) {
					var t = e.user,
						n = e.step,
						r = e.updateStatus,
						i = e.isAutoBackup,
						a = e.contentType,
						c = e.imageBlob,
						l = e.imageUrl,
						u = e.tabTitle,
						d = e.tabUrl,
						f = e.saveAction,
						p = e.updateSignStatus,
						m = e.savePlace,
						g = Tu((0, s.useState)(""), 2),
						v = g[0],
						y = g[1],
						b = Tu((0, s.useState)(1), 2),
						w = b[0],
						x = b[1],
						S = Tu((0, s.useState)(0), 2),
						j = S[0],
						N = S[1],
						k = Tu((0, s.useState)(""), 2),
						A = k[0],
						L = k[1],
						I = Tu((0, s.useState)("My items"), 2),
						C = I[0],
						_ = I[1],
						O = Tu((0, s.useState)("folder"), 2),
						T = O[0],
						D = O[1],
						E = Tu((0, s.useState)(""), 2),
						F = E[0],
						R = E[1],
						M = Tu((0, s.useState)(!1), 2),
						B = M[0],
						U = M[1],
						q = Tu((0, s.useState)(!1), 2),
						z = q[0],
						Z = q[1],
						H = Tu((0, s.useState)(0), 2),
						G = H[0],
						V = H[1],
						W = Tu((0, s.useState)(!1), 2),
						Y = W[0],
						K = W[1];
					(0, s.useEffect)((function() {
						ne((function(e) {
							e && V(e.id)
						}))
					}), []), (0, s.useEffect)((function() {
						m && $(m)
					}), [m]), (0, s.useEffect)((function() {
						if ("save" === n)
							if (i && t && t.username) {
								var e = localStorage.currentuploadtab,
									r = localStorage.currentimageid;
								G > 0 && G === parseInt(e) && !c && (!c && r || j > 0) ? (N(parseInt(r)), y("uploaded"), $(localStorage.lastSavePath)) : G > 0 && J(!0)
							} else t && t.username ? i || (N(0), R(""), y("")) : (N(0), y(""))
					}), [G, n, t, i]), (0, s.useEffect)((function() {
						F && i && oe()
					}), [F]);
					var J = function(e) {
							chrome.storage.local.get("userinfo", (function(n) {
								n && n.userinfo && n.userinfo.allowUploadImage || parseInt("2") >= 1 || Y ? te(e) : (y(""), r && r("", !1), U(!1), n && !n.userinfo.allowUploadImage && (f("upgrade"), chrome.runtime.sendMessage({
									action: "updateUserInfo"
								})))
							}))
						},
						X = function() {
							var e;
							t && t.username ? j > 0 ? (U(!0), (e = j, fi({
								method: "GET",
								url: "/image/get_share_link",
								params: {
									id: e
								}
							})).then((function(e) {
								e && mi(e.shareURI).then((function(e) {
									U(!1), R(e.data)
								})).catch((function() {
									U(!1), R(e.shareURI)
								}))
							}))) : (U(!0), te(!1)) : p && p()
						},
						$ = function(e) {
							if (e && void 0 !== e) {
								var t = e.split("-.-")[0];
								D(t), _("folder" === t ? e.split("-.-")[2] : e.split("-.-")[3])
							}
						},
						Q = function(e) {
							x(e)
						},
						ee = function() {
							te(!0)
						},
						te = function(e) {
							(e && y("uploading"), r) && (e && (!0, r("uploading", true)));
							var t = function(t) {
								var n = void 0 === localStorage.defaultSavePlace ? "folder-.-0-.-My Items" : localStorage.defaultSavePlace,
									i = n.split("-.-")[0],
									a = null,
									o = null,
									s = "0";
								"folder" === i ? s = n.split("-.-")[1] : (a = n.split("-.-")[2], o = n.split("-.-")[1]), $(n);
								var c = e;
								c && F && (c = !1),
									function(e, t, n, r, i, a, o, s, c) {
										var l = new FormData;
										return l.append("file", t), l.append("title", n), l.append("folderID", e), l.append("share", !a), l.append("actionType", "ext"), l.append("version", r), a && l.append("from", "ext_backup"), o && l.append("sourceURL", o), s && l.append("workspaceID", s), c && l.append("channelID", c), l.append("client", /Edg/.test(navigator.userAgent) ? "Edge extension" : "chrome extension"), fi({
											method: "POST",
											url: "/image/upload",
											data: l,
											onUploadProgress: function(e) {
												var t = Math.round(100 * e.loaded / e.total);
												i(t)
											}
										})
									}(s, t, u, chrome.runtime.getManifest().version, Q, c, d, a, o).then((function(t) {
										if (chrome.runtime.sendMessage({
												action: "updateUserInfo"
											}), t && G > 0 && (localStorage.currentuploadtab = G, localStorage.currentimageid = a ? t.image.itemID : t.image.id, localStorage.lastSavePath = n), t && c) a ? (N(t.image.itemID), L(t.image.info.imageURI)) : (N(t.image.id), L(t.image.imageURI)), y("uploaded"), r && r("uploaded");
										else if (t) {
											j < 1 && (y(""), r && r(""));
											var i = "";
											a ? (N(t.image.itemID), L(t.image.info.imageURI), i = t.image.info.shareURI) : (N(t.image.id), L(t.image.imageURI), i = t.image.shareURI), e && (y("uploaded"), r && r("uploaded")), mi(i).then((function(e) {
												U(!1), R(e.data)
											})).catch((function() {
												U(!1), R(i)
											}))
										} else y("failed")
									})).catch((function(e) {
										chrome.runtime.sendMessage({
											action: "updateUserInfo"
										}), c || U(!1), e && "Premium Plan Required!" === e.msg ? (y(""), r && r("", !1), f && f("upgrade")) : y("failed")
									}))
							};
							new File([c], u + ("image/png" === a ? ".png" : ".jpg"), {
								type: a
							});
							c ? t(c) : ii(l).then((function(e) {
								t(e)
							}))
						},
						ne = function(e) {
							chrome.tabs.query({
								active: !0,
								currentWindow: !0
							}, (function(t) {
								e(t[0])
							}))
						},
						re = function() {
							!i && t && t.username ? j > 1 ? (y("uploaded"), r && r("uploaded", !0)) : fi({
								method: "GET",
								url: "/user/einfo"
							}).then((function(e) {
								e && e.permission.allowUploadImage ? (K(e.permission.allowUploadImage), r && r("", !0)) : (K(!1), y(""), f && e ? f("upgrade") : o.ZP.error("Network error!"), U(!1))
							})) : (r && r("", !0), gi("ext_backup_google").then((function(e) {
								var t = e.data.data.login_url;
								window.open(t)
							})))
						},
						ie = function() {
							var e = localStorage.lastSavePath;
							if (e && void 0 !== e) {
								var t = "https://www.awesomescreenshot.com/";
								t = "folder" === e.split("-.-")[0] ? t + "folder/" + e.split("-.-")[1] : t + "workspace/" + e.split("-.-")[2] + "/" + e.split("-.-")[1], chrome.extension.getBackgroundPage().openNewTab(t)
							} else A ? chrome.extension.getBackgroundPage().openNewTab(A) : j > 0 && chrome.extension.getBackgroundPage().openNewTab("https://www.awesomescreenshot.com/image/" + j)
						},
						ae = function() {
							f && f("selectFolder", j)
						},
						oe = function() {
							F && (Z(!0), Jr(F), setTimeout((function() {
								Z(!1)
							}), 1600))
						},
						se = function() {
							return F ? (0, P.jsx)("div", {
								className: "aws-share-item",
								children: (0, P.jsxs)("div", {
									className: "input-area",
									children: [(0, P.jsx)("input", {
										type: "text",
										value: F,
										readOnly: !0
									}), (0, P.jsx)(h.Z, {
										title: "copied!",
										trigger: "click",
										visible: z,
										children: (0, P.jsx)("div", {
											className: "aws-share-action-btn",
											onClick: oe,
											children: (0, P.jsx)(Ou.Z, {
												className: "icon"
											})
										})
									})]
								})
							}) : (0, P.jsx)(Ze.Z, {
								loading: B,
								className: "save-aws-btn",
								onClick: X,
								block: !0,
								children: j > 1 ? "Generate & copy shareable link" : "Upload to get shareable link"
							})
						};
					return "uploading" === v || "failed" === v ? (0, P.jsx)("div", {
						className: "upload-field",
						children: "uploading" === v ? (0, P.jsxs)(P.Fragment, {
							children: [(0, P.jsx)(ic.Z, {
								className: "progress",
								strokeWidth: 10,
								trailColor: "rgba(255, 255, 255, 0.05)",
								strokeColor: "#6494F7",
								type: "circle",
								percent: w,
								gapPosition: "left",
								width: 50
							}), (0, P.jsxs)("div", {
								className: "upload-tip uploading",
								children: ["Saving to ", (0, P.jsx)("span", {
									children: C
								}), " "]
							})]
						}) : (0, P.jsxs)("div", {
							className: "failed-field",
							onClick: ee,
							children: [(0, P.jsx)(Er, {
								className: "icon"
							}), (0, P.jsx)("div", {
								className: "upload-tip",
								children: "Failed to upload the picture. Click upload again."
							})]
						})
					}) : "uploaded" === v || j > 0 ? (0, P.jsxs)(P.Fragment, {
						children: [(0, P.jsx)("div", {
							className: "uploaded-tip",
							children: "Currently in"
						}), (0, P.jsxs)("div", {
							className: "uploaded-field",
							children: [(0, P.jsxs)("div", {
								className: "tips",
								onClick: ie,
								children: [(0, P.jsx)("div", {
									className: "icon-field",
									children: "folder" === T ? (0, P.jsx)(Lr, {}) : (0, P.jsx)(_r, {})
								}), " ", (0, P.jsx)("span", {
									className: "place",
									children: C
								})]
							}), (0, P.jsx)("div", {
								className: "action",
								onClick: ae,
								children: "Move"
							})]
						}), se()]
					}) : (0, P.jsxs)(P.Fragment, {
						children: [(0, P.jsx)("div", {
							className: "aws-border",
							children: (0, P.jsxs)(P.Fragment, {
								children: [(0, P.jsxs)("div", {
									className: "aws-header",
									children: [(0, P.jsx)("div", {
										className: "icon-field",
										children: (0, P.jsx)(Ur, {
											className: "icon"
										})
									}), (0, P.jsx)("span", {
										children: "Auto backup with source URL"
									})]
								}), (0, P.jsx)("div", {
									className: "aws-tips",
									children: (!i && t && t.username, "Auto save the image to cloud with the source URL! Like bookmark + screenshot!")
								}), (0, P.jsx)("div", {
									className: "google-btn",
									onClick: re,
									children: t && t.username ? (0, P.jsx)("span", {
										children: "Enable Auto Save to Cloud"
									}) : (0, P.jsxs)(P.Fragment, {
										children: [(0, P.jsx)(Cr, {
											className: "icon"
										}), (0, P.jsx)("span", {
											children: "Sign in with Google"
										})]
									})
								})]
							})
						}), se()]
					})
				}

				function Fu(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
						if (null != n) {
							var r, i, a, o, s = [],
								c = !0,
								l = !1;
							try {
								if (a = (n = n.call(e)).next, 0 === t) {
									if (Object(n) !== n) return;
									c = !1
								} else
									for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
							} catch (e) {
								l = !0, i = e
							} finally {
								try {
									if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return
								} finally {
									if (l) throw i
								}
							}
							return s
						}
					}(e, t) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return Ru(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ru(e, t)
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Ru(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				const Mu = function(e) {
					var t = e.googleEvent,
						n = Fu((0, s.useState)(null), 2),
						r = n[0],
						i = n[1];
					(0, s.useEffect)((function() {
						fetch("https://www.awesomescreenshot.com/promotion.json?t=" + (new Date).getTime(), {
							method: "GET",
							headers: {
								Accept: "application/json"
							}
						}).then((function(e) {
							return e.json()
						})).then((function(e) {
							e.enable && t("tip show", "promotion"), i(e)
						}))
					}), []);
					var a = r ? (0, P.jsxs)("div", {
						className: "promotion-tip-popover",
						children: [(0, P.jsxs)("div", {
							className: "product-name",
							children: [(0, P.jsx)("img", {
								src: r.logoUrl
							}), r.product]
						}), (0, P.jsx)("div", {
							className: "content",
							dangerouslySetInnerHTML: {
								__html: r.content
							}
						}), (0, P.jsxs)("div", {
							className: "btn",
							onClick: function() {
								window.open(r.url), t("popover btn click", "promotion")
							},
							children: [(0, P.jsx)("div", {
								className: "bg"
							}), (0, P.jsx)("div", {
								className: "text",
								children: "Check it Out!"
							}), (0, P.jsx)("div", {
								className: "logo-inner",
								children: (0, P.jsx)("img", {
									src: r.logoUrl,
									alt: ""
								})
							})]
						})]
					}) : null;
					return r && r.enable ? (0, P.jsx)("div", {
						className: "promotion-tip",
						children: (0, P.jsx)(qe.Z, {
							content: a,
							onVisibleChange: function(e) {
								e && t("popover show", "promotion")
							},
							children: (0, P.jsx)("a", {
								href: r.url,
								target: "_blank",
								className: "title",
								dangerouslySetInnerHTML: {
									__html: r.title
								}
							})
						})
					}) : null
				};

				function Bu(e) {
					return Bu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Bu(e)
				}

				function Uu(e) {
					return function(e) {
						if (Array.isArray(e)) return qu(e)
					}(e) || function(e) {
						if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
					}(e) || function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return qu(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qu(e, t)
					}(e) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function qu(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}

				function zu(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function Zu(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? zu(Object(n), !0).forEach((function(t) {
							Hu(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zu(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function Hu(e, t, n) {
					return (t = Ku(t)) in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function Gu() {
					Gu = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						n = t.hasOwnProperty,
						r = Object.defineProperty || function(e, t, n) {
							e[t] = n.value
						},
						i = "function" == typeof Symbol ? Symbol : {},
						a = i.iterator || "@@iterator",
						o = i.asyncIterator || "@@asyncIterator",
						s = i.toStringTag || "@@toStringTag";

					function c(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						c({}, "")
					} catch (e) {
						c = function(e, t, n) {
							return e[t] = n
						}
					}

					function l(e, t, n, i) {
						var a = t && t.prototype instanceof d ? t : d,
							o = Object.create(a.prototype),
							s = new k(i || []);
						return r(o, "_invoke", {
							value: x(e, n, s)
						}), o
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
					var h = {};

					function d() {}

					function f() {}

					function p() {}
					var m = {};
					c(m, a, (function() {
						return this
					}));
					var g = Object.getPrototypeOf,
						v = g && g(g(A([])));
					v && v !== t && n.call(v, a) && (m = v);
					var y = p.prototype = d.prototype = Object.create(m);

					function b(e) {
						["next", "throw", "return"].forEach((function(t) {
							c(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function w(e, t) {
						function i(r, a, o, s) {
							var c = u(e[r], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									h = l.value;
								return h && "object" == Bu(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
									i("next", e, o, s)
								}), (function(e) {
									i("throw", e, o, s)
								})) : t.resolve(h).then((function(e) {
									l.value = e, o(l)
								}), (function(e) {
									return i("throw", e, o, s)
								}))
							}
							s(c.arg)
						}
						var a;
						r(this, "_invoke", {
							value: function(e, n) {
								function r() {
									return new t((function(t, r) {
										i(e, n, t, r)
									}))
								}
								return a = a ? a.then(r, r) : r()
							}
						})
					}

					function x(e, t, n) {
						var r = "suspendedStart";
						return function(i, a) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === i) throw a;
								return L()
							}
							for (n.method = i, n.arg = a;;) {
								var o = n.delegate;
								if (o) {
									var s = S(o, n);
									if (s) {
										if (s === h) continue;
										return s
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var c = u(e, t, n);
								if ("normal" === c.type) {
									if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
									return {
										value: c.arg,
										done: n.done
									}
								}
								"throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
							}
						}
					}

					function S(e, t) {
						var n = t.method,
							r = e.iterator[n];
						if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
						var i = u(r, e.iterator, t.arg);
						if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, h;
						var a = i.arg;
						return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
					}

					function j(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function N(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function k(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(j, this), this.reset(!0)
					}

					function A(e) {
						if (e) {
							var t = e[a];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var r = -1,
									i = function t() {
										for (; ++r < e.length;)
											if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return i.next = i
							}
						}
						return {
							next: L
						}
					}

					function L() {
						return {
							value: void 0,
							done: !0
						}
					}
					return f.prototype = p, r(y, "constructor", {
						value: p,
						configurable: !0
					}), r(p, "constructor", {
						value: f,
						configurable: !0
					}), f.displayName = c(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, c(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, b(w.prototype), c(w.prototype, o, (function() {
						return this
					})), e.AsyncIterator = w, e.async = function(t, n, r, i, a) {
						void 0 === a && (a = Promise);
						var o = new w(l(t, n, r, i), a);
						return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
							return e.done ? e.value : o.next()
						}))
					}, b(y), c(y, s, "Generator"), c(y, a, (function() {
						return this
					})), c(y, "toString", (function() {
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
					}, e.values = A, k.prototype = {
						constructor: k,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
								return o.type = "throw", o.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									o = a.completion;
								if ("root" === a.tryLoc) return r("end");
								if (a.tryLoc <= this.prev) {
									var s = n.call(a, "catchLoc"),
										c = n.call(a, "finallyLoc");
									if (s && c) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return r(a.finallyLoc)
									} else if (s) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
									} else {
										if (!c) throw new Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return r(a.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var i = this.tryEntries[r];
								if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
									var a = i;
									break
								}
							}
							a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var o = a ? a.completion : {};
							return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(o)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), h
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var r = n.completion;
									if ("throw" === r.type) {
										var i = r.arg;
										N(n)
									}
									return i
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: A(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), h
						}
					}, e
				}

				function Vu(e, t, n, r, i, a, o) {
					try {
						var s = e[a](o),
							c = s.value
					} catch (e) {
						return void n(e)
					}
					s.done ? t(c) : Promise.resolve(c).then(r, i)
				}

				function Wu(e) {
					return function() {
						var t = this,
							n = arguments;
						return new Promise((function(r, i) {
							var a = e.apply(t, n);

							function o(e) {
								Vu(a, r, i, o, s, "next", e)
							}

							function s(e) {
								Vu(a, r, i, o, s, "throw", e)
							}
							o(void 0)
						}))
					}
				}

				function Yu(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ku(r.key), r)
					}
				}

				function Ku(e) {
					var t = function(e, t) {
						if ("object" !== Bu(e) || null === e) return e;
						var n = e[Symbol.toPrimitive];
						if (void 0 !== n) {
							var r = n.call(e, t || "default");
							if ("object" !== Bu(r)) return r;
							throw new TypeError("@@toPrimitive must return a primitive value.")
						}
						return ("string" === t ? String : Number)(e)
					}(e, "string");
					return "symbol" === Bu(t) ? t : String(t)
				}

				function Ju(e, t) {
					return Ju = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
						return e.__proto__ = t, e
					}, Ju(e, t)
				}

				function Xu(e) {
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
						var n, r = Qu(e);
						if (t) {
							var i = Qu(this).constructor;
							n = Reflect.construct(r, arguments, i)
						} else n = r.apply(this, arguments);
						return function(e, t) {
							if (t && ("object" === Bu(t) || "function" == typeof t)) return t;
							if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
							return $u(e)
						}(this, n)
					}
				}

				function $u(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function Qu(e) {
					return Qu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, Qu(e)
				}
				var eh = [{
						name: "save",
						displayName: "Download"
					}, {
						name: "copy",
						displayName: "Copy"
					}, {
						name: "pdf",
						displayName: "PDF"
					}, {
						name: "print",
						displayName: "Print"
					}],
					th = {},
					nh = function e(t, n) {
						t.forEach((function(t) {
							n[t.folderID] && "0" !== t.folderID && (t.children = n[t.folderID].map((function(e, n) {
								return {
									title: e.name,
									value: e.folderID + "-.-" + e.name,
									key: t.key + "-" + n,
									folderID: e.folderID,
									icon: function(e) {
										return e.expanded ? (0, P.jsx)(Ir, {}) : (0, P.jsx)(Lr, {})
									}
								}
							})), e(t.children, n))
						}))
					},
					rh = function(e) {
						var t = [],
							n = e;
						return n[0] && n[0].forEach((function(e, n) {
							t.push({
								title: e.name,
								value: e.folderID + "-.-" + e.name,
								key: "" + (n + 1),
								folderID: e.folderID,
								icon: function(e) {
									return e.expanded ? (0, P.jsx)(Ir, {}) : (0, P.jsx)(Lr, {})
								}
							})
						})), t.unshift({
							title: "My Items",
							folderID: "0",
							key: "0",
							value: "0-.-My Items",
							icon: function(e) {
								return e.expanded, (0, P.jsx)(Tr, {})
							}
						}), nh(t, e), t
					},
					ih = !1,
					ah = !1,
					oh = "",
					sh = "",
					ch = function e(t, n, r) {
						for (var i = 0; i < r.length; i++) {
							if (r[i].folderID === t) return ih = !0, void(oh = "folder-.-" + r[i].value);
							r[i].children && e(t, r[i].key, r[i].children)
						}
					},
					lh = function() {
						chrome.storage.sync.get(["clickNo"], (function(e) {
							e.clickNo ? chrome.storage.sync.set({
								neverShow: !0
							}) : chrome.storage.sync.set({
								clickNo: !0
							})
						})), pi().then((function(e) {
							e && vi("chromeFiveStarCancel")
						})), a.Z.destroy()
					},
					uh = function(e, t) {
						a.Z.open({
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
							onClose: lh
						})
					},
					hh = function() {
						Wr("https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj/reviews"), chrome.storage.sync.set({
							neverShow: !0
						}), pi().then((function(e) {
							e && vi("chromeFiveStarClick")
						})), a.Z.destroy()
					},
					dh = function() {
						Wr("/feedback.html"), chrome.storage.sync.set({
							captureCount: 0,
							clickNo: !1,
							neverShow: !1
						}), pi().then((function(e) {
							e && vi("chromeFiveStarFeedback")
						})), a.Z.destroy()
					},
					fh = function() {
						uh((0, P.jsxs)("div", {
							className: "noti_title",
							children: [(0, P.jsx)("img", {
								src: "images/star.png"
							}), " User Satisfaction Survey"]
						}), (0, P.jsxs)("div", {
							className: "noti_des",
							children: [(0, P.jsx)("div", {
								className: "content",
								children: "Your review means a lot to us. Would you mind taking a moment to rate the extension in the Web Store?"
							}), (0, P.jsx)(Ze.Z, {
								style: {
									width: "98px",
									height: "34px"
								},
								type: "primary",
								onClick: lh,
								ghost: !0,
								children: "No, thanks"
							}), (0, P.jsx)(Ze.Z, {
								style: {
									width: "246px",
									height: "34px",
									marginLeft: "14px"
								},
								type: "primary",
								onClick: hh,
								children: "Sure, take me to the Web Store"
							})]
						}))
					},
					ph = function() {
						uh((0, P.jsxs)("div", {
							className: "noti_title",
							children: [(0, P.jsx)("img", {
								src: "images/star.png"
							}), " User Satisfaction Survey"]
						}), (0, P.jsxs)("div", {
							className: "noti_des",
							children: [(0, P.jsx)("div", {
								className: "content",
								children: "Would you like to report any issues you're experiencing or give us some suggestions so that we can make the extension better for you?"
							}), (0, P.jsx)(Ze.Z, {
								style: {
									width: "98px"
								},
								type: "primary",
								onClick: lh,
								ghost: !0,
								children: "No, thanks"
							}), (0, P.jsx)(Ze.Z, {
								style: {
									width: "246px",
									marginLeft: "14px"
								},
								type: "primary",
								onClick: dh,
								children: "Yes, take me to the feedback form"
							})]
						}))
					},
					mh = function(e) {
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
							}), t && Ju(e, t)
						}(d, e);
						var t, n, r, i, a, c, u = Xu(d);

						function d(e) {
							var t;
							return function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, d), (t = u.call(this, e)).printIframe = (0, s.createRef)(), t.copyDiv = (0, s.createRef)(), t.img = (0, s.createRef)(), t.state = {
								isShownSignin: !1,
								isShownSaveToAws: !1,
								imageId: 0,
								isShownWhatDes: !1,
								isShownDrive: !1,
								isShownUpgrade: !1,
								isShownComfig: !1,
								isShownFeatureAlert: !1,
								signInLoading: !1,
								uploadImagePercentage: 0,
								awsShareUrls: [],
								projects: [],
								folders: {},
								foldersTreeData: [],
								isfolderLoading: !1,
								isWorkspaceLoading: !1,
								isCreatingFolder: !1,
								newFolder: null,
								isMovingItem: !1,
								workspacesIds: [],
								workspacesIdHash: {},
								selectPlacesValue: void 0 === localStorage.lastSavePath ? "folder-.-0-.-My Items" : localStorage.lastSavePath,
								autoSaveType: "folder",
								autoSavePlace: "My Items",
								popVisiable: !1,
								onlySetting: !1,
								destinations: [],
								accounts: [],
								isShownDes: !1,
								desCurrentPanel: "add",
								currentDes: null,
								driveService: "",
								currentDriveAccount: null,
								upgradeType: "",
								zoomImageIndex: "",
								haveUndate: !1,
								isShowed: !1,
								temImageBlob: null,
								isShowAds: !1,
								promotionUrl: "https://www.vidline.com/promotion-card.html",
								promotionHeight: 0,
								expandedMore: !1,
								uploadStatus: "",
								googleShare: !1,
								autoUpload: void 0 !== localStorage.autoupload && "true" === localStorage.autoupload
							}, t.handleLocalSave = t.handleLocalSave.bind($u(t)), t.handleSaveToAws = t.handleSaveToAws.bind($u(t)), t.showModal = t.showModal.bind($u(t)), t.handleModalCancel = t.handleModalCancel.bind($u(t)), t.handleSignInFinish = t.handleSignInFinish.bind($u(t)), t.handleUploadFinish = t.handleUploadFinish.bind($u(t)), t.refreshUserData = t.refreshUserData.bind($u(t)), t.handleFolderCreated = t.handleFolderCreated.bind($u(t)), t.openDesModal = t.openDesModal.bind($u(t)), t.handleDesClick = t.handleDesClick.bind($u(t)), t.goToAddDes = t.goToAddDes.bind($u(t)), t.handleDesCreated = t.handleDesCreated.bind($u(t)), t.handleAccountConnected = t.handleAccountConnected.bind($u(t)), t.handleAddDriveClick = t.handleAddDriveClick.bind($u(t)), t.handleAddDesClick = t.handleAddDesClick.bind($u(t)), t.openDriveModal = t.openDriveModal.bind($u(t)), t.openSetting = t.openSetting.bind($u(t)), t.handleDriveAccountConnected = t.handleDriveAccountConnected.bind($u(t)), t.showUpgradeModal = t.showUpgradeModal.bind($u(t)), t.getPermissionByName = t.getPermissionByName.bind($u(t)), t.copyUrl = t.copyUrl.bind($u(t)), t.openFeedback = t.openFeedback.bind($u(t)), t.openOptionPage = t.openOptionPage.bind($u(t)), t.downloadMultiple = t.downloadMultiple.bind($u(t)), t.downloadMultiplePDF = t.downloadMultiplePDF.bind($u(t)), t.handleSignIn = t.handleSignIn.bind($u(t)), t.zoomImage = t.zoomImage.bind($u(t)), t.loadPromotionUrl = t.loadPromotionUrl.bind($u(t)), t.handleMoreAction = t.handleMoreAction.bind($u(t)), t.handleUploadStatus = t.handleUploadStatus.bind($u(t)), t.handleAutoUpload = t.handleAutoUpload.bind($u(t)), t.recordEvent = t.recordEvent.bind($u(t)), t.googleSigin = t.googleSigin.bind($u(t)), t.handleUploadAction = t.handleUploadAction.bind($u(t)), t.handleCreateFolderAction = t.handleCreateFolderAction.bind($u(t)), t.moveItemTo = t.moveItemTo.bind($u(t)), t.handleSettingSave = t.handleSettingSave.bind($u(t)), t.validedDefaultSave = t.validedDefaultSave.bind($u(t)), t.handlePopVisiableChange = t.handlePopVisiableChange.bind($u(t)), t.googleEvent = t.googleEvent.bind($u(t)), t
						}
						return t = d, n = [{
							key: "componentDidMount",
							value: function() {
								var e = this;
								this.props.user.username && 0 === this.state.projects.length && this.refreshUserData(), chrome.runtime.onMessage.addListener((function(t, n, r) {
									var i = t.name;
									"awsLoginByGoogle" === i ? (e.props.refreshUser(), e.setState({
										isShownSignin: !1
									})) : "stop" === i && r()
								})), this.props.imageUrl && !this.props.imageBlob && "[object Array]" !== Object.prototype.toString.call(this.props.imageUrl) && ii(this.props.imageUrl).then((function(t) {
									e.setState({
										temImageBlob: t
									})
								})), window.addEventListener("message", (function(t) {
									var n = t.data;
									n && ("show" === n.type ? e.setState({
										isShowAds: !0,
										promotionHeight: n.height ? parseInt(n.height) : 0
									}) : "close" === t.data.type && e.setState({
										isShowAds: !1
									}))
								})), chrome.storage.local.get("options", (function(t) {
									e.setState({
										googleShare: t.options["is-google-drive-share"]
									})
								}))
							}
						}, {
							key: "UNSAFE_componentWillUpdate",
							value: function(e) {
								"save" === e.step && "save" !== this.props.step && this.setState({
									isShowAds: !1,
									promotionHeight: 0
								})
							}
						}, {
							key: "componentDidUpdate",
							value: function(e) {
								e.user.username !== this.props.user.username && (this.props.user.username ? this.refreshUserData() : this.setState({
									awsShareUrls: [],
									projects: [],
									destinations: [],
									accounts: []
								}));
								var t = null != this.props.permissions.empty || null != this.props.permissions.allowUploadImage;
								if ("save" !== this.props.step || this.state.isShowed || (this.setState({
										isShowed: !0
									}), this.recordEvent()), "save" === this.props.step && !this.state.haveUndate && t) {
									this.setState({
										haveUndate: !0
									});
									var n = this.props.permissions.showChromeFiveStarNever,
										r = this.props.user ? this.props.user.username : "";
									chrome.storage.sync.get(["captureCount", "clickNo", "neverShow"], (function(e) {
										if (!e.neverShow && !n) {
											if (e.clickNo) var t = 200;
											else t = 100;
											e.captureCount && e.captureCount > t && (i = r, a = "Are you enjoying Awesome Screenshot?", uh((0, P.jsxs)("div", {
												className: "noti_title",
												children: [(0, P.jsx)("img", {
													src: "images/star.png"
												}), " User Satisfaction Survey"]
											}), (0, P.jsxs)("div", {
												className: "noti_des",
												children: [i ? (0, P.jsxs)("div", {
													className: "content",
													children: ["Hi ", (0, P.jsxs)("p", {
														className: "user_name",
														children: [" ", i]
													}), " , ", a]
												}) : (0, P.jsx)("div", {
													className: "content",
													children: a
												}), (0, P.jsx)(Ze.Z, {
													style: {
														width: "172px"
													},
													type: "primary",
													onClick: ph,
													ghost: !0,
													children: "Not really"
												}), (0, P.jsx)(Ze.Z, {
													style: {
														width: "172px",
														marginLeft: "14px"
													},
													type: "primary",
													onClick: fh,
													children: "Yes"
												})]
											})))
										}
										var i, a
									}))
								}
							}
						}, {
							key: "recordEvent",
							value: function() {
								pi().then((function(e) {
									li("enter_savePanel", e ? "sigined" : "nosigin")
								})).catch((function() {}))
							}
						}, {
							key: "handleMoreAction",
							value: function() {
								this.setState({
									expandedMore: !this.state.expandedMore
								})
							}
						}, {
							key: "handleUploadStatus",
							value: function(e, t) {
								void 0 !== e && this.setState({
									uploadStatus: e
								}), void 0 !== t && (this.setState({
									autoUpload: t
								}), localStorage.autoupload = t, t || this.setState({
									isShownComfig: !1
								}))
							}
						}, {
							key: "loadPromotionUrl",
							value: function() {
								var e = new URLSearchParams(window.location.search);
								return e.get("promotion_test") ? this.state.promotionUrl + e.get("promotion_test") + "?theme=dark&place=extension" : this.state.promotionUrl + "?theme=dark&place=extension"
							}
						}, {
							key: "googleEvent",
							value: function(e, t) {
								li(e, t)
							}
						}, {
							key: "copyUrl",
							value: function(e) {
								Jr(e)
							}
						}, {
							key: "downloadMultiple",
							value: (c = Wu(Gu().mark((function e() {
								var t, n, r, i, a, o;
								return Gu().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = this.props, n = t.imageUrl, r = t.tabUrl, i = this.props.contentType, "jpeg" === (a = i.split("/")[1]) && (a = "jpg"), o = ri(r), e.next = 7, (0, zr.S1)("save-as");
										case 7:
											e.sent ? Qr().then((function() {
												n.forEach((function(e, t) {
													ei({
														url: e,
														filename: o + "_part" + (t + 1) + "." + a
													})
												}))
											})) : n.forEach((function(e, t) {
												ni(e, o + "_part" + (t + 1) + "." + a)
											}));
										case 9:
										case "end":
											return e.stop()
									}
								}), e, this)
							}))), function() {
								return c.apply(this, arguments)
							})
						}, {
							key: "downloadMultiplePDF",
							value: (a = Wu(Gu().mark((function e() {
								var t, n;
								return Gu().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = this.props.imageUrl, n = ri(this.props.tabUrl), e.next = 4, (0, zr.S1)("save-as");
										case 4:
											e.sent ? Qr().then((function() {
												qo(t).then((function(e) {
													ei({
														url: e,
														filename: n + ".pdf"
													})
												}))
											})) : qo(t).then((function(e) {
												ni(e, n + ".pdf")
											}));
										case 6:
										case "end":
											return e.stop()
									}
								}), e, this)
							}))), function() {
								return a.apply(this, arguments)
							})
						}, {
							key: "handleLocalSave",
							value: (i = Wu(Gu().mark((function e(t) {
								var n, r, i, a, s, c, l, u, h, d, f, p, m, g, v, y, b, w, x, S, j;
								return Gu().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (n = function(e) {
													var t;
													e && ("image/jpeg" === e.type ? (t = e, new Promise((function(e) {
														var n = window.URL.createObjectURL(t),
															r = document.createElement("img"),
															i = document.createElement("canvas"),
															a = i.getContext("2d");
														r.onload = function() {
															i.width = r.width, i.height = r.height, a.drawImage(r, 0, 0), i.toBlob((function(t) {
																e(t)
															}))
														}, r.src = n
													}))).then((function(e) {
														ai(e, (function() {
															o.ZP.success("Copied to clipboard!", 1)
														}), (function(e) {
															o.ZP.error("Copy failed.", 1)
														}))
													})) : ai(e, (function() {
														o.ZP.success("Copied to clipboard!", 1)
													}), (function(e) {
														o.ZP.error("Copy failed.", 1)
													})))
												}, r = this, i = this.props, a = i.imageUrl, s = i.tabTitle, "save" !== t) {
												e.next = 16;
												break
											}
											return c = r.props.contentType, "jpeg" == (l = c.split("/")[1]) && (l = "jpg"), u = s ? s.replace(/(\.|\:)/g, " ") : "untitled", h = (h = u.replace(/[#$~\-!@%^&*();'"?><\[\]{}\|,:\/=+]/g, " ") + "." + l).replace(/\s+/g, "-"), e.next = 12, (0, zr.S1)("save-as");
										case 12:
											e.sent ? (d = {
												url: r.props.imageBlob ? window.URL.createObjectURL(r.props.imageBlob) : r.props.imageUrl,
												filename: h,
												method: "GET",
												saveAs: !0
											}, Qr().then((function() {
												ei(d)
											}))) : ni(r.props.imageBlob ? window.URL.createObjectURL(r.props.imageBlob) : a, h), e.next = 45;
											break;
										case 16:
											if ("print" !== t) {
												e.next = 31;
												break
											}
											f = s ? s.replace(/(\.|\:)/g, " ") : "untitled", h = (h = f.replace(/[#$~\-!@%^&*();'"?><\[\]{}\|,:\/=+]/g, " ")).replace(/\s+/g, "-"), p = this.printIframe.current, document.title = f, m = '<div style="margin:0 auto;"><img style="max-width:100%;" src="'.concat(a, '"></div>'), (g = p.contentWindow.document).write('<style type="text/css"> html{height:100%}</style>'), g.write(m), v = p.contentWindow, setTimeout((function() {
												v.close(), v.focus(), v.print(), g.body.innerHTML = ""
											}), 300), e.next = 45;
											break;
										case 31:
											if ("copy" !== t) {
												e.next = 35;
												break
											}
											try {
												(y = r.props.imageBlob ? r.props.imageBlob : r.state.temImageBlob) ? n(y): r.props.imageUrl && ii(r.props.imageUrl).then((function(e) {
													n(e)
												}))
											} catch (e) {
												o.ZP.error("Sorry,your system doesn't support this function. Please right click on this image to save.")
											}
											e.next = 45;
											break;
										case 35:
											if ("pdf" !== t) {
												e.next = 45;
												break
											}
											return b = this.props.info.height, w = this.props.imageUrl, x = 14400, S = s ? s.replace(/(\.|\:)/g, " ") : "untitled", j = S.replace(/[#$~!@%^&*();'"?><\[\]{}\|,:\/=+-]/g, " ") + ".pdf", e.next = 43, (0, zr.S1)("save-as");
										case 43:
											e.sent ? Qr().then((function() {
												b > x ? Xr(w, x, (function(e) {
													Uo(e).then((function(e) {
														ei({
															url: e,
															filename: j,
															saveAs: !0
														})
													}))
												})) : Uo([w]).then((function(e) {
													ei({
														url: e,
														filename: j,
														saveAs: !0
													})
												}))
											})) : b > x ? Xr(w, x, (function(e) {
												Uo(e).then((function(e) {
													ni(e, j)
												}))
											})) : Uo([w]).then((function(e) {
												ni(e, j)
											}));
										case 45:
											li(t + " image", "local");
										case 46:
										case "end":
											return e.stop()
									}
								}), e, this)
							}))), function(e) {
								return i.apply(this, arguments)
							})
						}, {
							key: "handleSaveToAws",
							value: function() {
								this.props.user.username ? this.showModal("SaveToAws") : this.setState({
									signInType: "aws",
									isShownSignin: !0
								})
							}
						}, {
							key: "handleUploadAction",
							value: function(e, t) {
								"selectFolder" === e ? this.setState({
									isShownSaveToAws: !0,
									imageId: t
								}) : "upgrade" == e && this.setState({
									isShownUpgrade: !0,
									upgradeType: "uploadImage"
								})
							}
						}, {
							key: "openFeedback",
							value: function() {
								var e = Zu({}, this.props.imageInfo);
								localStorage.last_info = JSON.stringify(e), chrome.tabs.create({
									url: "/feedback.html"
								})
							}
						}, {
							key: "openOptionPage",
							value: function() {
								chrome.tabs.create({
									url: "/option-react.html"
								})
							}
						}, {
							key: "googleSigin",
							value: function() {
								this.setState({
									isShownFeatureAlert: !1
								}), this.setState({
									autoUpload: !0
								}), localStorage.autoupload = !0, li("local_img_feature_alert", "google_sigin"), gi("ext_backup_google").then((function(e) {
									var t = e.data.data.login_url;
									window.open(t)
								}))
							}
						}, {
							key: "handleSignInFinish",
							value: function() {
								this.handleModalCancel("Signin"), this.props.refreshUser()
							}
						}, {
							key: "handleUploadFinish",
							value: function(e) {
								this.setState({
									isShownSaveToAws: !1,
									awsShareUrls: [].concat(Uu(this.state.awsShareUrls), [e])
								})
							}
						}, {
							key: "showModal",
							value: function(e) {
								var t = "isShown".concat(e);
								this.setState(Hu({}, t, !0))
							}
						}, {
							key: "openSetting",
							value: function(e) {
								chrome.tabs.create({
									url: "https://www.awesomescreenshot.com/settings/" + e
								})
							}
						}, {
							key: "handleModalCancel",
							value: function(e) {
								var t, n = "isShown".concat(e);
								this.setState((Hu(t = {}, n, !1), Hu(t, "signInType", ""), t)), "FeatureAlert" === e && li("local_img_feature_alert", "cancel"), "SaveToAws" === e && this.setState({
									onlySetting: !1
								})
							}
						}, {
							key: "goToAddDes",
							value: function() {
								this.setState({
									desCurrentPanel: "add"
								})
							}
						}, {
							key: "handleDesCreated",
							value: function(e) {
								this.setState({
									destinations: [].concat(Uu(this.state.destinations), [e]),
									desCurrentPanel: "des",
									currentDes: e
								})
							}
						}, {
							key: "openDesModal",
							value: function(e) {
								var t = this;
								this.setState({
									desCurrentPanel: e
								}, (function() {
									t.showModal("Des")
								}))
							}
						}, {
							key: "getPermissionByName",
							value: function(e) {
								return this.props.permissions["allow".concat(Kr(e))]
							}
						}, {
							key: "goToRate",
							value: function() {
								Wr("https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj/reviews")
							}
						}, {
							key: "handleDesClick",
							value: function(e) {
								var t = this;
								"add" === e ? this.openDesModal("add") : this.getPermissionByName(e.service) ? this.setState({
									currentDes: e
								}, (function() {
									t.openDesModal("des")
								})) : this.setState({
									upgradeType: "des",
									isShownUpgrade: !0
								})
							}
						}, {
							key: "handleSignOut",
							value: function() {
								Wr("https://www.awesomescreenshot.com/web/user/logout")
							}
						}, {
							key: "handleAutoUpload",
							value: function(e) {
								e ? (this.setState({
									autoUpload: !0,
									popVisiable: !1
								}), localStorage.autoupload = !0) : this.setState({
									isShownComfig: !0,
									popVisiable: !1
								}), li("click autobackup switch btn", e ? "open" : "close")
							}
						}, {
							key: "handleSettingSave",
							value: function() {
								this.setState({
									onlySetting: !0,
									isShownSaveToAws: !0,
									popVisiable: !1
								})
							}
						}, {
							key: "moveItemTo",
							value: function(e, t, n, r) {
								var i = this;
								if (this.setState({
										isMovingItem: !0
									}), "folder" === e) li("click move btn", "done_folder"),
									function(e, t, n, r) {
										return fi({
											method: "POST",
											url: "/folder/add_items",
											data: {
												folderID: e,
												videos: t,
												images: n,
												folders: r
											}
										})
									}(n, "", this.state.imageId + "", "").then((function(e) {
										if (i.setState({
												isShownSaveToAws: !1,
												selectPlacesValue: t,
												onlySetting: !1,
												isMovingItem: !1
											}), localStorage.lastSavePath = t, "true" === localStorage["auto-save-path"]) {
											localStorage.defaultSavePlace = t;
											var n = t.split("-.-")[0],
												r = "";
											r = "folder" === n ? t.split("-.-")[2] : t.split("-.-")[3], i.setState({
												autoSaveType: n,
												autoSavePlace: r
											})
										}
									}));
								else if ("channel" === e) li("click move btn", "done_channel"),
									function(e, t, n) {
										return fi({
											method: "POST",
											url: "/workspace/channel/move_items",
											data: {
												workspaceID: e,
												channelID: t,
												items: n
											}
										})
									}(r, n, "image-" + this.state.imageId).then((function(e) {
										if (i.setState({
												isShownSaveToAws: !1,
												selectPlacesValue: t,
												onlySetting: !1,
												isMovingItem: !1
											}), localStorage.lastSavePath = t, "true" === localStorage["auto-save-path"]) {
											localStorage.defaultSavePlace = t;
											var n = t.split("-.-")[0],
												r = "";
											r = "folder" === n ? t.split("-.-")[2] : t.split("-.-")[3], i.setState({
												autoSaveType: n,
												autoSavePlace: r
											})
										}
									}));
								else {
									localStorage.defaultSavePlace = t;
									var a = "";
									a = "folder" === (e = t.split("-.-")[0]) ? t.split("-.-")[2] : t.split("-.-")[3], this.setState({
										isShownSaveToAws: !1,
										onlySetting: !1,
										autoSaveType: e,
										autoSavePlace: a,
										isMovingItem: !1
									})
								}
							}
						}, {
							key: "handleCreateFolderAction",
							value: function(e, t, n, r) {
								var i = this;
								"folder" == e ? (li("local create container", "folder"), this.setState({
									isCreatingFolder: !0
								}), function(e, t) {
									return fi({
										method: "POST",
										url: "/folder/create",
										data: {
											name: e,
											parentID: t
										}
									})
								}(t, n).then((function(e) {
									var t = {},
										n = e.folder.parentID;
									t = i.state.folders[n] ? Zu(Zu({}, i.state.folders), {}, Hu({}, e.folder.parentID, [e.folder].concat(Uu(i.state.folders[n])))) : Zu(Zu({}, i.state.folders), {}, Hu({}, e.folder.parentID, [e.folder]));
									var r = {
											title: e.folder.name,
											folderID: e.folder.folderID
										},
										a = rh(t);
									i.setState({
										isCreatingFolder: !1,
										folders: t,
										foldersTreeData: a,
										newFolder: r
									})
								})).catch((function(e) {
									o.ZP.error(e, 1), i.setState({
										isCreatingFolder: !1
									})
								}))) : "channel" === e && (this.setState({
									isCreatingFolder: !0
								}), li("local create container", "channel"), function(e, t, n) {
									return fi({
										method: "POST",
										url: "/workspace/channel/create",
										data: {
											workspaceID: e,
											name: t,
											description: n
										}
									})
								}(n, t, r).then((function(e) {
									var t = e.channel,
										n = t.workspaceID,
										r = {};
									(r = i.state.workspacesIdHash)[n].channels.push(t), i.setState({
										isCreatingFolder: !1,
										workspacesIdHash: r
									})
								})).catch((function(e) {
									o.ZP.error(e, 1), i.setState({
										isCreatingFolder: !1
									})
								})))
							}
						}, {
							key: "handleFolderCreated",
							value: function(e) {
								var t = {};
								t = this.state.folders[0] ? Zu(Zu({}, this.state.folders), {}, {
									0: [e].concat(Uu(this.state.folders[0]))
								}) : {
									0: [e]
								};
								var n = rh(t);
								this.setState({
									folders: t,
									foldersTreeData: n
								})
							}
						}, {
							key: "openDriveModal",
							value: function(e) {
								var t = this;
								this.props.user.username ? this.props.permissions["allow".concat(Kr(e.service))] ? this.setState({
									currentDriveAccount: e
								}, (function() {
									t.showModal("Drive")
								})) : this.setState({
									upgradeType: e.service
								}, (function() {
									t.showModal("Upgrade")
								})) : this.setState({
									signInType: "drive",
									isShownSignin: !0
								})
							}
						}, {
							key: "refreshUserData",
							value: function() {
								var e, t = this;
								if (this.setState({
										projects: [],
										destinations: [],
										isShownSignin: !1,
										isfolderLoading: !0,
										isWorkspaceLoading: !0,
										workspacesIds: [],
										workspacesIdHash: {},
										autoSaveType: "folder",
										autoSavePlace: "My Items"
									}), void 0 !== localStorage.defaultSavePlace) {
									var n = localStorage.defaultSavePlace,
										r = n.split("-.-")[0],
										i = "";
									i = "folder" === r ? n.split("-.-")[2] : n.split("-.-")[3], this.setState({
										autoSaveType: r,
										autoSavePlace: i
									})
								}
								Promise.all([fi({
									method: "GET",
									url: "/folder/load_user_folders",
									params: {
										count: 20,
										page: e
									}
								}), fi({
									method: "GET",
									url: "/workspace/load_user_all"
								})]).then((function(e) {
									var n = e[0].folders ? e[0].folders : [],
										r = rh(n),
										i = e[1].workspaces ? e[1].workspaces : [];
									if (i.length > 0)
										for (var a = i.map((function(e) {
												return e.id
											})), o = {}, s = 0; s < i.length; s++) {
											var c = i[s];
											o[c.id] = c
										}
									t.validedDefaultSave(r, o), t.setState({
										folders: n,
										foldersTreeData: r,
										isfolderLoading: !1,
										isWorkspaceLoading: !1,
										workspacesIds: a,
										workspacesIdHash: o
									})
								})), Promise.all([fi({
									method: "GET",
									url: "/account/load"
								}), fi({
									method: "GET",
									url: "/destination/load"
								})]).then((function(e) {
									if (t.setState({
											accounts: e[0].accounts ? e[0].accounts : [],
											destinations: e[1].destinations ? e[1].destinations : []
										}), e[0].accounts) {
										th = {}, e[0].accounts.forEach((function(e) {
											th[e.id] = e
										}));
										var n = e[0].accounts.filter((function(e) {
											return "googleDrive" === e.service || "dropbox" === e.service || "box" === e.service
										}));
										n.length > 0 && t.setState({
											expandedMore: !0
										})
									}
								})).catch((function(e) {}))
							}
						}, {
							key: "validedDefaultSave",
							value: function(e, t) {
								var n = localStorage.defaultSavePlace;
								if (void 0 !== n) {
									var r = n.split("-.-")[0];
									if ("folder" === r) {
										var i = n.split("-.-")[1];
										"0" !== i && (ih = !1, ch(i, 0, e), ih ? oh && (localStorage.defaultSavePlace = oh, this.setState({
											autoSavePlace: oh.split("-.-")[2]
										})) : (localStorage.defaultSavePlace = "folder-.-0-.-My Items", this.setState({
											autoSaveType: "folder",
											autoSavePlace: "My Items"
										})))
									} else "channel" === r && (ah = !1, function(e, t, n) {
										if (n) {
											var r = n[e];
											if (r)
												for (var i = 0; i < r.channels.length; i++) {
													var a = r.channels[i];
													if (!0 === a.isMember && a.id === t) {
														ah = !0, sh = "channel-.-" + a.id + "-.-" + a.workspaceID + "-.-" + a.name;
														break
													}
												}
										}
									}(n.split("-.-")[2], n.split("-.-")[1], t), ah ? sh && (localStorage.defaultSavePlace = sh, this.setState({
										autoSavePlace: sh.split("-.-")[3]
									})) : (localStorage.defaultSavePlace = "folder-.-0-.-My Items", this.setState({
										autoSaveType: "folder",
										autoSavePlace: "My Items"
									})))
								}
							}
						}, {
							key: "handleAccountConnected",
							value: function(e) {
								this.setState({
									accounts: [].concat(Uu(this.state.accounts), [e]),
									currentAccount: e
								}, (function() {
									th[e.id] = e
								}))
							}
						}, {
							key: "handleDriveAccountConnected",
							value: function(e) {
								this.setState({
									accounts: [e].concat(Uu(this.state.accounts)),
									currentDriveAccount: e
								})
							}
						}, {
							key: "handleAddDesClick",
							value: function() {
								this.props.user.username ? this.showModal("Des") : this.setState({
									signInType: "des",
									isShownSignin: !0
								})
							}
						}, {
							key: "handleAddDriveClick",
							value: function() {
								var e = this;
								this.props.user.username ? this.setState({
									currentDriveAccount: null
								}, (function() {
									e.showModal("Drive")
								})) : this.setState({
									signInType: "drive",
									isShownSignin: !0
								})
							}
						}, {
							key: "showUpgradeModal",
							value: function(e) {
								this.setState({
									isShownUpgrade: !0,
									driveService: e
								})
							}
						}, {
							key: "zoomImage",
							value: function(e) {
								this.setState({
									zoomImageIndex: e
								})
							}
						}, {
							key: "handleSignIn",
							value: function() {
								window.open("https://www.awesomescreenshot.com/signin?from=ext_loc_normal")
							}
						}, {
							key: "handlePopVisiableChange",
							value: function(e) {
								this.setState({
									popVisiable: e
								})
							}
						}, {
							key: "render",
							value: function() {
								var e = this,
									t = Yr(this.props.imageUrl),
									n = this.state.destinations,
									r = this.props.user,
									i = this.state.accounts.filter((function(e) {
										return "googleDrive" === e.service || "dropbox" === e.service || "box" === e.service
									})),
									a = this.state.accounts.filter((function(e) {
										return "googleDrive" !== e.service && "dropbox" !== e.service && "box" !== e.service
									})),
									o = L()("save-panel", this.props.className),
									s = (0, P.jsxs)(ze.Z, {
										className: "more-menu",
										children: ["free" === this.props.currentPlan.PlanName && (0, P.jsx)(ze.Z.Item, {
											className: "menu-item",
											children: (0, P.jsxs)("a", {
												href: "https://www.awesomescreenshot.com/pricing?from=local_dropdown",
												target: "_blank",
												rel: "noopener noreferrer",
												children: [(0, P.jsx)(He.Z, {
													style: {
														marginRight: "5px"
													},
													title: "Premium user"
												}), "Upgrade"]
											})
										}), (0, P.jsx)(ze.Z.Item, {
											className: "menu-item",
											onClick: this.handleSignOut,
											children: (0, P.jsxs)("a", {
												children: [(0, P.jsx)(qr, {
													style: {
														marginRight: "5px",
														fontSize: "16px"
													}
												}), "Sign out"]
											})
										})]
									}),
									c = function(e, t, n) {
										return (0, P.jsxs)("div", {
											className: "section",
											children: [e && (0, P.jsxs)("div", {
												className: "section-title",
												children: [t && (0, P.jsx)("div", {
													className: "icon " + t
												}), e]
											}), (0, P.jsx)("div", {
												className: "section-content",
												children: n
											})]
										})
									},
									u = (0, P.jsx)("div", {
										className: "more-menu setting",
										children: (0, P.jsxs)("div", {
											children: [(0, P.jsx)("div", {
												className: "title",
												children: "Preferences"
											}), (0, P.jsxs)("div", {
												className: "section",
												children: [(0, P.jsx)("div", {
													className: "label",
													children: "Automatically back up my screenshots "
												}), (0, P.jsx)(l.Z, {
													className: "switch",
													size: "small",
													onChange: this.handleAutoUpload,
													checked: this.state.autoUpload
												})]
											}), (0, P.jsx)("div", {
												className: "sub-title",
												children: "Default save location: "
											}), (0, P.jsxs)("div", {
												className: "uploaded-field",
												onClick: this.handleSettingSave,
												children: [(0, P.jsxs)("div", {
													className: "tips",
													children: ["folder" === this.state.autoSaveType ? (0, P.jsx)(Lr, {}) : (0, P.jsx)(_r, {}), (0, P.jsx)("span", {
														className: "place",
														children: this.state.autoSavePlace
													})]
												}), (0, P.jsx)(Nr, {})]
											})]
										}, "content")
									}),
									d = function(e) {
										return "save" === e ? (0, P.jsx)("div", {
											className: "icon-field",
											children: (0, P.jsx)(Fr, {
												className: "icon"
											})
										}) : "copy" === e ? (0, P.jsx)("div", {
											className: "icon-field",
											children: (0, P.jsx)(Rr, {
												className: "icon"
											})
										}) : "pdf" === e ? (0, P.jsx)("div", {
											className: "icon-field",
											children: (0, P.jsx)(Mr, {
												className: "icon"
											})
										}) : "print" === e ? (0, P.jsx)("div", {
											className: "icon-field",
											children: (0, P.jsx)(Br, {
												className: "icon"
											})
										}) : void 0
									};
								return (0, P.jsxs)("div", {
									className: o,
									children: [(0, P.jsx)("iframe", {
										className: "print-iframe",
										ref: this.printIframe,
										frameBorder: "0"
									}), (0, P.jsx)("div", {
										className: "copy-div",
										contentEditable: "true",
										ref: this.copyDiv
									}), (0, P.jsx)("div", {
										className: "top-bar",
										children: (0, P.jsxs)("div", {
											className: "inner-container",
											children: [(0, P.jsxs)("div", {
												className: "logo-area",
												children: [(0, P.jsx)("div", {
													className: "logo"
												}), (0, P.jsx)("a", {
													target: "_blank",
													href: "https://www.awesomescreenshot.com",
													rel: "noreferrer"
												})]
											}), (0, P.jsxs)("div", {
												className: "user-area",
												children: ["save" === this.props.step && (0, P.jsx)("div", {
													className: "promotion-box",
													children: (0, P.jsx)(Mu, {
														googleEvent: this.googleEvent
													})
												}), (0, P.jsx)("div", {}), (0, P.jsxs)("a", {
													className: "user-link email-us",
													target: "_blank",
													onClick: this.openFeedback,
													children: [(0, P.jsx)("div", {
														className: "icon-field",
														children: (0, P.jsx)(Ar, {})
													}), "Feedback"]
												}), (0, P.jsxs)("a", {
													className: "user-link email-us",
													target: "_blank",
													onClick: this.openOptionPage,
													children: [(0, P.jsx)("div", {
														className: "icon-field",
														children: (0, P.jsx)(Or, {})
													}), "Options"]
												}), r.username ? (0, P.jsxs)("a", {
													className: "user-link email-us",
													href: "https://www.awesomescreenshot.com/my_items",
													target: "_blank",
													rel: "noreferrer",
													children: [(0, P.jsx)("div", {
														className: "icon-field",
														children: (0, P.jsx)(Tr, {})
													}), "My items"]
												}) : (0, P.jsx)(P.Fragment, {}), r.username ? (0, P.jsx)(Ue.Z, {
													overlay: s,
													trigger: ["click"],
													placement: "bottom",
													children: (0, P.jsxs)("div", {
														className: "user-link user-avatar",
														children: [(0, P.jsx)(_u, {
															username: r.username,
															size: "22",
															avatarUrl: this.props.avatar ? "https://www.awesomescreenshot.com/" + this.props.avatar : ""
														}), this.props.currentPlan.PlanName && "free" !== this.props.currentPlan.PlanName ? (0, P.jsx)(Dr, {
															className: "crown"
														}) : (0, P.jsx)(P.Fragment, {}), r.username, (0, P.jsx)(Pr, {
															className: "user-more"
														})]
													})
												}) : (0, P.jsxs)("div", {
													className: "user-link",
													onClick: this.handleSignIn,
													children: [(0, P.jsx)(Tr, {
														className: "me"
													}), "Sign in"]
												})]
											})]
										})
									}), (0, P.jsx)("div", {
										className: "panel",
										children: (0, P.jsxs)("div", {
											className: "inner-container",
											children: [(0, P.jsxs)("div", {
												className: "left",
												children: [!t && (0, P.jsx)(h.Z, {
													mouseEnterDelay: .3,
													title: "Back and Re-edit this screenshot",
													children: (0, P.jsx)("div", {
														className: "back-btn",
														onClick: this.props.backToEdit,
														children: (0, P.jsx)("b", {})
													})
												}), (0, P.jsx)("div", {
													className: "image-container",
													children: Yr(e.props.imageUrl) ? e.props.imageUrl.map((function(t, n) {
														var r = e.state.zoomImageIndex === n,
															i = r ? "zoom-in" : "";
														return (0, P.jsx)("img", {
															className: "multiple ".concat(i),
															src: t,
															ref: e.img,
															alt: "",
															onClick: function() {
																e.zoomImage(r ? "" : n)
															}
														}, n)
													})) : (0, P.jsxs)(P.Fragment, {
														children: [(0, P.jsx)("span", {
															className: "helper"
														}), (0, P.jsx)("img", {
															src: e.props.imageUrl,
															ref: e.img,
															alt: ""
														})]
													})
												})]
											}), (0, P.jsxs)("div", {
												className: "right",
												children: [(0, P.jsxs)("div", {
													className: "panel-logo-area",
													children: [(0, P.jsx)("div", {
														className: "logo"
													}), "AwesomeScreenshot"]
												}), (0, P.jsx)("div", {
													className: "right-container",
													children: t ? (0, P.jsx)("div", {
														className: "multiple-image-panel sub-panel",
														children: (0, P.jsxs)("div", {
															className: "section",
															children: [(0, P.jsxs)("div", {
																className: "tip",
																children: ["Note: there's no way for Chrome to capture this web page as a single image because it is too large, and editing toolbar is not available in this situation. The screenshot was automatically split into", " ", this.props.imageUrl.length, " images. You can download all images or save images as a single PDF with one click."]
															}), (0, P.jsxs)("div", {
																className: "btn-area",
																children: [(0, P.jsx)(Ze.Z, {
																	block: !0,
																	className: "multiple-download-btn",
																	onClick: this.downloadMultiple,
																	children: "Download all ".concat(this.props.imageUrl.length, " images")
																}), (0, P.jsx)(Ze.Z, {
																	block: !0,
																	className: "multiple-download-btn",
																	onClick: this.downloadMultiplePDF,
																	children: "Download as PDF"
																})]
															})]
														})
													}) : (0, P.jsxs)(P.Fragment, {
														children: [(0, P.jsx)("div", {
															className: "local-panel",
															children: (0, P.jsx)("div", {
																className: "local-save-container",
																children: eh.map((function(t, n) {
																	var r = L()("local-save-item", t.name);
																	return (0, P.jsxs)("div", {
																		className: r,
																		onClick: e.handleLocalSave.bind(null, t.name),
																		children: [d(t.name), (0, P.jsx)("span", {
																			className: "action-name",
																			children: t.displayName
																		})]
																	}, n)
																}))
															})
														}), (0, P.jsx)("div", {
															className: "sub-panel",
															children: c("uploading" !== e.state.uploadStatus && "failed" !== e.state.uploadStatus ? (0, P.jsxs)(P.Fragment, {
																children: ["Save to Awesome Screenshot", (0, P.jsx)("div", {
																	className: "actions " + (r.username ? "" : "hidde"),
																	children: (0, P.jsx)(qe.Z, {
																		content: u,
																		trigger: ["click"],
																		className: "more-action",
																		placement: "bottomLeft",
																		color: "#414141",
																		visible: e.state.popVisiable,
																		onVisibleChange: e.handlePopVisiableChange,
																		arrowPointAtCenter: !0,
																		children: (0, P.jsx)("div", {
																			className: "action-btn option"
																		})
																	})
																})]
															}) : (0, P.jsx)(P.Fragment, {}), "", (0, P.jsx)(Eu, {
																user: r,
																updateStatus: this.handleUploadStatus,
																step: this.props.step,
																isAutoBackup: this.state.autoUpload,
																tabTitle: this.props.tabTitle,
																tabUrl: this.props.tabUrl,
																imageUrl: this.props.imageUrl,
																contentType: this.props.contentType,
																saveAction: this.handleUploadAction,
																imageBlob: this.props.imageBlob ? this.props.imageBlob : this.state.temImageBlob,
																updateSignStatus: this.handleSaveToAws,
																savePlace: this.state.selectPlacesValue
															}))
														}), (0, P.jsx)("div", {
															className: "sub-panel",
															children: c((0, P.jsxs)(P.Fragment, {
																children: ["Collaborate with Teammates", 0 !== n.length && (0, P.jsx)("div", {
																	className: "actions",
																	children: (0, P.jsx)(h.Z, {
																		title: "Manage destinations",
																		children: (0, P.jsx)("div", {
																			className: "action-btn option",
																			onClick: this.openSetting.bind(null, "destinations")
																		})
																	})
																})]
															}), "", (0, P.jsx)(Ml, {
																destinations: n,
																handleDesClick: this.handleDesClick,
																handleAddDesClick: this.handleAddDesClick,
																small: !0
															}))
														}), this.state.expandedMore ? (0, P.jsx)("div", {
															className: "sub-panel",
															children: c((0, P.jsxs)(P.Fragment, {
																children: ["Save to Cloud", 0 !== i.length && (0, P.jsxs)("div", {
																	className: "actions",
																	children: [(0, P.jsx)(h.Z, {
																		title: "Connect a new account",
																		children: (0, P.jsx)("div", {
																			className: "action-btn add",
																			onClick: this.handleAddDriveClick
																		})
																	}), (0, P.jsx)(h.Z, {
																		title: "Manage accounts",
																		children: (0, P.jsx)("div", {
																			className: "action-btn option",
																			onClick: this.openSetting.bind(null, "connectedAccounts")
																		})
																	})]
																})]
															}), "", (0, P.jsx)(P.Fragment, {
																children: (0, P.jsx)("div", {
																	className: "save-to-drive",
																	children: (0, P.jsx)(Kl, {
																		accounts: i,
																		handleAddDriveClick: this.handleAddDriveClick,
																		handleDriveItemClick: this.openDriveModal
																	})
																})
															}))
														}) : (0, P.jsx)(P.Fragment, {}), (0, P.jsx)("div", {
															className: "sub-panel",
															children: (0, P.jsx)("div", {
																className: "expand-field",
																onClick: this.handleMoreAction,
																children: this.state.expandedMore ? (0, P.jsxs)("div", {
																	children: [(0, P.jsx)("div", {
																		className: "icon-field",
																		children: (0, P.jsx)(Nr, {
																			className: "icon-hide"
																		})
																	}), "Less"]
																}) : (0, P.jsxs)("div", {
																	children: [(0, P.jsx)("div", {
																		className: "icon-field",
																		children: (0, P.jsx)(Nr, {
																			className: "icon-show"
																		})
																	}), "More"]
																})
															})
														})]
													})
												})]
											})]
										})
									}), (0, P.jsx)("div", {
										className: "footer",
										children: (0, P.jsx)("div", {
											className: "inner-container",
											children: (0, P.jsx)("div", {
												className: "social-media"
											})
										})
									}), (0, P.jsx)(au, {
										visible: this.state.isShownSignin,
										onCancel: this.handleModalCancel.bind(null, "Signin"),
										type: this.state.signInType
									}), (0, P.jsx)(uu, {
										visible: this.state.isShownFeatureAlert,
										googleSigin: this.googleSigin,
										onCancel: this.handleModalCancel.bind(null, "FeatureAlert")
									}), (0, P.jsx)(xu, {
										visible: this.state.isShownSaveToAws,
										onCancel: this.handleModalCancel.bind(null, "SaveToAws"),
										folders: this.state.folders,
										foldersTreeData: this.state.foldersTreeData,
										newFolder: this.state.newFolder,
										onUploadFinish: this.handleUploadFinish,
										onRefreshProjects: this.refreshUserData,
										onFolderCreated: this.handleFolderCreated,
										isfolderLoading: this.state.isfolderLoading,
										isCreatingFolder: this.state.isCreatingFolder,
										isMovingItem: this.state.isMovingItem,
										isWorkspaceLoading: this.state.isWorkspaceLoading,
										workspaceIDs: this.state.workspacesIds,
										workspacesIdHash: this.state.workspacesIdHash,
										onCreateAction: this.handleCreateFolderAction,
										moveItemTo: this.moveItemTo,
										savedPlace: this.state.selectPlacesValue,
										onlySetting: this.state.onlySetting
									}), (0, P.jsx)(Ol, {
										visible: this.state.isShownDes,
										onCancel: this.handleModalCancel.bind(null, "Des"),
										currentPanel: this.state.desCurrentPanel,
										currentDes: this.state.currentDes,
										accountHash: th,
										destinations: this.state.destinations,
										accounts: a,
										tabTitle: this.props.tabTitle,
										tabUrl: this.props.tabUrl,
										imageUrl: this.props.imageUrl,
										imageBlob: this.props.imageBlob ? this.props.imageBlob : this.state.temImageBlob,
										goToAddDes: this.goToAddDes,
										handleDesCreated: this.handleDesCreated,
										handleAccountConnected: this.handleAccountConnected,
										imageInfo: this.props.imageInfo,
										permissions: this.props.permissions,
										currentPlan: this.props.currentPlan,
										contentType: this.props.contentType
									}), (0, P.jsx)(Yl, {
										visible: this.state.isShownDrive,
										onCancel: this.handleModalCancel.bind(null, "Drive"),
										tabTitle: this.props.tabTitle,
										imageUrl: this.props.imageUrl,
										imageBlob: this.props.imageBlob ? this.props.imageBlob : this.state.temImageBlob,
										service: this.state.driveService,
										permissions: this.props.permissions,
										currentPlan: this.props.currentPlan,
										googleShare: this.state.googleShare,
										accounts: i,
										currentDriveAccount: this.state.currentDriveAccount,
										handleDriveAccountConnected: this.handleDriveAccountConnected,
										contentType: this.props.contentType,
										showUpgradeModal: this.showUpgradeModal
									}), (0, P.jsx)(Se.Z, {
										visible: this.state.isShownUpgrade,
										onCancel: this.handleModalCancel.bind(null, "Upgrade"),
										type: this.state.upgradeType
									}), (0, P.jsx)(Rl, {
										visible: this.state.isShownWhatDes,
										onCancel: this.handleModalCancel.bind(null, "WhatDes")
									}), (0, P.jsx)(eu, {
										visible: this.state.isShownComfig,
										comfigAction: this.handleUploadStatus.bind(null, "", !1),
										onCancel: this.handleModalCancel.bind(null, "Comfig")
									})]
								})
							}
						}], n && Yu(t.prototype, n), r && Yu(t, r), Object.defineProperty(t, "prototype", {
							writable: !1
						}), d
					}(s.Component);
				const gh = mh;

				function vh(e) {
					return vh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, vh(e)
				}

				function yh() {
					yh = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						n = t.hasOwnProperty,
						r = Object.defineProperty || function(e, t, n) {
							e[t] = n.value
						},
						i = "function" == typeof Symbol ? Symbol : {},
						a = i.iterator || "@@iterator",
						o = i.asyncIterator || "@@asyncIterator",
						s = i.toStringTag || "@@toStringTag";

					function c(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						c({}, "")
					} catch (e) {
						c = function(e, t, n) {
							return e[t] = n
						}
					}

					function l(e, t, n, i) {
						var a = t && t.prototype instanceof d ? t : d,
							o = Object.create(a.prototype),
							s = new k(i || []);
						return r(o, "_invoke", {
							value: x(e, n, s)
						}), o
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
					var h = {};

					function d() {}

					function f() {}

					function p() {}
					var m = {};
					c(m, a, (function() {
						return this
					}));
					var g = Object.getPrototypeOf,
						v = g && g(g(A([])));
					v && v !== t && n.call(v, a) && (m = v);
					var y = p.prototype = d.prototype = Object.create(m);

					function b(e) {
						["next", "throw", "return"].forEach((function(t) {
							c(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function w(e, t) {
						function i(r, a, o, s) {
							var c = u(e[r], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									h = l.value;
								return h && "object" == vh(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
									i("next", e, o, s)
								}), (function(e) {
									i("throw", e, o, s)
								})) : t.resolve(h).then((function(e) {
									l.value = e, o(l)
								}), (function(e) {
									return i("throw", e, o, s)
								}))
							}
							s(c.arg)
						}
						var a;
						r(this, "_invoke", {
							value: function(e, n) {
								function r() {
									return new t((function(t, r) {
										i(e, n, t, r)
									}))
								}
								return a = a ? a.then(r, r) : r()
							}
						})
					}

					function x(e, t, n) {
						var r = "suspendedStart";
						return function(i, a) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === i) throw a;
								return L()
							}
							for (n.method = i, n.arg = a;;) {
								var o = n.delegate;
								if (o) {
									var s = S(o, n);
									if (s) {
										if (s === h) continue;
										return s
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var c = u(e, t, n);
								if ("normal" === c.type) {
									if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
									return {
										value: c.arg,
										done: n.done
									}
								}
								"throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
							}
						}
					}

					function S(e, t) {
						var n = t.method,
							r = e.iterator[n];
						if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
						var i = u(r, e.iterator, t.arg);
						if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, h;
						var a = i.arg;
						return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
					}

					function j(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function N(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function k(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(j, this), this.reset(!0)
					}

					function A(e) {
						if (e) {
							var t = e[a];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var r = -1,
									i = function t() {
										for (; ++r < e.length;)
											if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return i.next = i
							}
						}
						return {
							next: L
						}
					}

					function L() {
						return {
							value: void 0,
							done: !0
						}
					}
					return f.prototype = p, r(y, "constructor", {
						value: p,
						configurable: !0
					}), r(p, "constructor", {
						value: f,
						configurable: !0
					}), f.displayName = c(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, c(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, b(w.prototype), c(w.prototype, o, (function() {
						return this
					})), e.AsyncIterator = w, e.async = function(t, n, r, i, a) {
						void 0 === a && (a = Promise);
						var o = new w(l(t, n, r, i), a);
						return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
							return e.done ? e.value : o.next()
						}))
					}, b(y), c(y, s, "Generator"), c(y, a, (function() {
						return this
					})), c(y, "toString", (function() {
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
					}, e.values = A, k.prototype = {
						constructor: k,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
								return o.type = "throw", o.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									o = a.completion;
								if ("root" === a.tryLoc) return r("end");
								if (a.tryLoc <= this.prev) {
									var s = n.call(a, "catchLoc"),
										c = n.call(a, "finallyLoc");
									if (s && c) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return r(a.finallyLoc)
									} else if (s) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
									} else {
										if (!c) throw new Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return r(a.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var i = this.tryEntries[r];
								if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
									var a = i;
									break
								}
							}
							a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var o = a ? a.completion : {};
							return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(o)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), h
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var r = n.completion;
									if ("throw" === r.type) {
										var i = r.arg;
										N(n)
									}
									return i
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: A(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), h
						}
					}, e
				}

				function bh(e, t, n, r, i, a, o) {
					try {
						var s = e[a](o),
							c = s.value
					} catch (e) {
						return void n(e)
					}
					s.done ? t(c) : Promise.resolve(c).then(r, i)
				}

				function wh(e) {
					return function() {
						var t = this,
							n = arguments;
						return new Promise((function(r, i) {
							var a = e.apply(t, n);

							function o(e) {
								bh(a, r, i, o, s, "next", e)
							}

							function s(e) {
								bh(a, r, i, o, s, "throw", e)
							}
							o(void 0)
						}))
					}
				}
				var xh = 3e4;

				function Sh() {
					return Sh = wh(yh().mark((function e(t, n, r, i, a, o, s, c, l) {
						var u, h, d, f, p, m, g, v, y, b, w, x, S, j, N, k, A, L, P, I, C, _, O, T, D, E, F, R;
						return yh().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return u = l || xh, h = !1, e.next = 4, jh(t[0]);
								case 4:
									d = e.sent, f = d.width / r, p = d.height / r, s && parseInt(s.height) > parseInt(d.height) && (h = !0), m = Math.ceil(p * n), v = null, y = null, o && o.forEach(function() {
										var e = wh(yh().mark((function e(n) {
											return yh().wrap((function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														if (!(n && n.fill.width > 0 && n.fill.height > 0)) {
															e.next = 11;
															break
														}
														if (0 != n.fill.x) {
															e.next = 7;
															break
														}
														return e.next = 4, Nh(t[0], n.sample);
													case 4:
														v = e.sent, e.next = 11;
														break;
													case 7:
														if (!(n.fill.x > 0)) {
															e.next = 11;
															break
														}
														return e.next = 10, Nh(t[0], n.sample);
													case 10:
														y = e.sent;
													case 11:
													case "end":
														return e.stop()
												}
											}), e)
										})));
										return function(t) {
											return e.apply(this, arguments)
										}
									}()), i ? (b = i.height, h && (b = p), g = (m = b * n) ? ((h ? p : s.height) + (t.length > 2 ? (t.length - 2) * b : 0) + m) / r : ((h ? p : s.height) + (t.length - 1) * b) / r, a && a.height > 0 && (g += a.height / r)) : g = m ? (t.length - 1) * p + m : t.length * p, w = Math.ceil(g / u), x = g % u, S = 0, j = 0, N = [], k = 0, A = 0;
								case 19:
									if (!(A < w)) {
										e.next = 68;
										break
									}
									L = new OffscreenCanvas(10, 10), P = L.getContext("2d"), L.id = "c_" + A, L.width = f, L.height = A === w - 1 ? x : u, I = S;
								case 26:
									if (!(I < t.length)) {
										e.next = 64;
										break
									}
									return C = 0, _ = 0, O = f * r, T = p * r, D = 0, E = f, F = p, e.next = 31, jh(t[I]);
								case 31:
									if (R = e.sent, !i) {
										e.next = 49;
										break
									}
									if (b = i.height, h && (b = p), 0 === I ? (T = h ? p : s.height, F = (h ? p : s.height) / r) : I === t.length - 1 && A === w - 1 ? (C = i.x, D = i.x / r, k ? (_ = (p - Math.min(k, m)) * r, F = Math.min(k, m)) : (_ = (p - m) * r, F = m / r), T = F * r) : (C = i.x, D = i.x / r, k ? (_ = (p - k) * r, C = i.x, D = i.x / r, T = (F = k) * r) : (_ = i.y, C = i.x, D = i.x / r, F = b / r, E = i.width / r, T = b, O = i.width), I === t.length - 1 && A !== w - 1 && (_ = (p - m) * r)), P.drawImage(R, C, _, O, T, D, j, E, F), 0 !== I && (i.x > 0 && v && (P.beginPath(), P.rect(0, j - 1, i.x / r, F + 1), P.fillStyle = v, P.fill()), i.x + i.width < f && y && (P.beginPath(), P.rect((i.x + i.width) / r, j - 1, (f - (i.x + i.width)) / r, F + 1), P.fillStyle = y, P.fill()), I === t.length - 1 && A === w - 1 && a && a.height > 0 && P.drawImage(R, 0, a.y, f * r, a.height, 0, j + F, f, a.height / r)), !(j + F > u)) {
										e.next = 45;
										break
									}
									return S = I, k = I === t.length - 1 && A + 1 === w - 1 ? j + m - u : j + i.height / r - u, j = 0, e.abrupt("break", 64);
								case 45:
									j = k ? j + k : j + F, k = 0;
								case 47:
									e.next = 61;
									break;
								case 49:
									if (I === t.length - 1 && A === w - 1 ? _ = k ? (p - Math.min(k, m)) * r : (p - m) * r : (k && (_ = (p - k) * r, T = (F = k) * r), I === t.length - 1 && A !== w - 1 && (_ = (p - m) * r)), P.drawImage(R, C, _, O, T, D, j, E, F), !(j + F > u)) {
										e.next = 59;
										break
									}
									return S = I, k = I === t.length - 1 && A + 1 === w - 1 ? j + m - u : j + p - u, j = 0, e.abrupt("break", 64);
								case 59:
									j = k ? j + k : j + F, k = 0;
								case 61:
									I++, e.next = 26;
									break;
								case 64:
									! function(e) {
										L.convertToBlob().then((function(t) {
											if (N.push({
													blob: t,
													index: e
												}), N.length === w) {
												N.sort((function(e, t) {
													return e.index - t.index
												}));
												c(N.map((function(e) {
													return e.blob
												})))
											}
										}))
									}(A);
								case 65:
									A++, e.next = 19;
									break;
								case 68:
								case 69:
								case "end":
									return e.stop()
							}
						}), e)
					}))), Sh.apply(this, arguments)
				}

				function jh(e) {
					return new Promise((function(t) {
						fetch(e).then((function(e) {
							return e.blob()
						})).then((function(e) {
							createImageBitmap(e).then((function(e) {
								t(e)
							}))
						}))
					}))
				}

				function Nh(e, t) {
					return kh.apply(this, arguments)
				}

				function kh() {
					return kh = wh(yh().mark((function e(t, n) {
						var r, i, a, o, s, c, l, u, h;
						return yh().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (h = function(e, t) {
											function n(e, t, n) {
												return (e << 16) + (t << 8) + n
											}
											t = t || new Map;
											for (var r = 0, i = e.length; r < i; r += 4)
												if (255 === e[r + 3]) {
													var a = n(e[r], e[r + 1], e[r + 2]);
													t.set(a, (t.get(a) || 0) + 1)
												} return t
										}, !(n.height > 0 && n.width > 0)) {
										e.next = 22;
										break
									}
									return r = new Map, (i = new OffscreenCanvas(10, 10)).width = n.width, i.height = n.height, e.next = 8, jh(t);
								case 8:
									a = e.sent, (o = i.getContext("2d")).drawImage(a, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), s = null;
									try {
										s = o.getImageData(0, 0, n.width, n.height)
									} catch (e) {}
									if (!s) {
										e.next = 21;
										break
									}
									if (h(s.data, r), c = 0, l = 0, u = !1, r.forEach((function(e, t) {
											e > c && (c = e, l = t, u = !0)
										})), !u) {
										e.next = 20;
										break
									}
									return e.abrupt("return", "rgb(" + Ah(l).join(", ") + ")");
								case 20:
									return e.abrupt("return", "rgb(212,212,212)");
								case 21:
									return e.abrupt("return", null);
								case 22:
								case "end":
									return e.stop()
							}
						}), e)
					}))), kh.apply(this, arguments)
				}

				function Ah(e) {
					var t = 255 & e,
						n = 255 & (e >>= 8);
					return [255 & (e >>= 8), n, t]
				}

				function Lh(e) {
					return Lh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Lh(e)
				}

				function Ph() {
					Ph = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						n = t.hasOwnProperty,
						r = Object.defineProperty || function(e, t, n) {
							e[t] = n.value
						},
						i = "function" == typeof Symbol ? Symbol : {},
						a = i.iterator || "@@iterator",
						o = i.asyncIterator || "@@asyncIterator",
						s = i.toStringTag || "@@toStringTag";

					function c(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						c({}, "")
					} catch (e) {
						c = function(e, t, n) {
							return e[t] = n
						}
					}

					function l(e, t, n, i) {
						var a = t && t.prototype instanceof d ? t : d,
							o = Object.create(a.prototype),
							s = new k(i || []);
						return r(o, "_invoke", {
							value: x(e, n, s)
						}), o
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
					var h = {};

					function d() {}

					function f() {}

					function p() {}
					var m = {};
					c(m, a, (function() {
						return this
					}));
					var g = Object.getPrototypeOf,
						v = g && g(g(A([])));
					v && v !== t && n.call(v, a) && (m = v);
					var y = p.prototype = d.prototype = Object.create(m);

					function b(e) {
						["next", "throw", "return"].forEach((function(t) {
							c(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function w(e, t) {
						function i(r, a, o, s) {
							var c = u(e[r], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									h = l.value;
								return h && "object" == Lh(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
									i("next", e, o, s)
								}), (function(e) {
									i("throw", e, o, s)
								})) : t.resolve(h).then((function(e) {
									l.value = e, o(l)
								}), (function(e) {
									return i("throw", e, o, s)
								}))
							}
							s(c.arg)
						}
						var a;
						r(this, "_invoke", {
							value: function(e, n) {
								function r() {
									return new t((function(t, r) {
										i(e, n, t, r)
									}))
								}
								return a = a ? a.then(r, r) : r()
							}
						})
					}

					function x(e, t, n) {
						var r = "suspendedStart";
						return function(i, a) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === i) throw a;
								return L()
							}
							for (n.method = i, n.arg = a;;) {
								var o = n.delegate;
								if (o) {
									var s = S(o, n);
									if (s) {
										if (s === h) continue;
										return s
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var c = u(e, t, n);
								if ("normal" === c.type) {
									if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
									return {
										value: c.arg,
										done: n.done
									}
								}
								"throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
							}
						}
					}

					function S(e, t) {
						var n = t.method,
							r = e.iterator[n];
						if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
						var i = u(r, e.iterator, t.arg);
						if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, h;
						var a = i.arg;
						return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
					}

					function j(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function N(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function k(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(j, this), this.reset(!0)
					}

					function A(e) {
						if (e) {
							var t = e[a];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var r = -1,
									i = function t() {
										for (; ++r < e.length;)
											if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return i.next = i
							}
						}
						return {
							next: L
						}
					}

					function L() {
						return {
							value: void 0,
							done: !0
						}
					}
					return f.prototype = p, r(y, "constructor", {
						value: p,
						configurable: !0
					}), r(p, "constructor", {
						value: f,
						configurable: !0
					}), f.displayName = c(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, c(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, b(w.prototype), c(w.prototype, o, (function() {
						return this
					})), e.AsyncIterator = w, e.async = function(t, n, r, i, a) {
						void 0 === a && (a = Promise);
						var o = new w(l(t, n, r, i), a);
						return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
							return e.done ? e.value : o.next()
						}))
					}, b(y), c(y, s, "Generator"), c(y, a, (function() {
						return this
					})), c(y, "toString", (function() {
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
					}, e.values = A, k.prototype = {
						constructor: k,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
								return o.type = "throw", o.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									o = a.completion;
								if ("root" === a.tryLoc) return r("end");
								if (a.tryLoc <= this.prev) {
									var s = n.call(a, "catchLoc"),
										c = n.call(a, "finallyLoc");
									if (s && c) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return r(a.finallyLoc)
									} else if (s) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
									} else {
										if (!c) throw new Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return r(a.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var i = this.tryEntries[r];
								if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
									var a = i;
									break
								}
							}
							a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var o = a ? a.completion : {};
							return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(o)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), h
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var r = n.completion;
									if ("throw" === r.type) {
										var i = r.arg;
										N(n)
									}
									return i
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: A(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), h
						}
					}, e
				}

				function Ih(e, t, n, r, i, a, o) {
					try {
						var s = e[a](o),
							c = s.value
					} catch (e) {
						return void n(e)
					}
					s.done ? t(c) : Promise.resolve(c).then(r, i)
				}

				function Ch(e, t, n, r, i, a, o, s, c, l, u, h, d, f, p, m, g, v, y) {
					var b, w, x, S, j, N, k, A, L = 1,
						P = new OffscreenCanvas(100, 100),
						I = P.getContext("2d"),
						C = !1,
						_ = 1,
						O = 0,
						T = 0;

					function D() {
						P.width = C ? x - 2 : x, P.height = S
					}
					h && window.devicePixelRatio > 1 && (L = window.devicePixelRatio), fetch(l[0]).then((function(e) {
						return e.blob()
					})).then((function(h) {
						createImageBitmap(h).then((function(h) {
							if (b = h.width / L, w = h.height / L, k = h.width, A = h.height, v && parseInt(v.height) > A + 10) {
								C = !0;
								var d = v.width / k;
								_ = Math.ceil(d), (v = f(d, v)).height > A && (v.height = A, v.width = k), p && (p = f(d, p)).y + p.height > A && (p.height = A - p.y), m && (m = f(d, m)), "selected" === e && (i /= d, a /= d, n /= d, r /= d)
							}

							function f(e, t) {
								return t.x = t.x / e, t.y = Math.ceil(t.y / e), t.height = parseInt(t.height / e), t.width = t.width / e + 2, t
							}
							switch (t) {
								case "visible":
									"selected" === e ? (x = i / L, S = a / L, G = n, Y = r, A = a, k = i) : "desktop" === e || "upload" === e ? (x = b, S = w, G = 0, Y = 0) : (x = b - 0, S = w, G = 0, Y = 0, k -= 0), D(), I.drawImage(h, G, Y, k, A, 0, 0, x, S), "jpg" === u ? P.convertToBlob({
										type: "image/jpeg",
										quality: 1
									}).then((function(e) {
										y(e, {
											width: P.width,
											height: P.height
										})
									})) : P.convertToBlob().then((function(e) {
										y(e, {
											width: P.width,
											height: P.height
										})
									}));
									break;
								case "entire":
									var E = T = O = 0,
										F = l.length,
										R = o,
										M = Math.round(F / R),
										B = null,
										U = null;
									g && g.forEach(function() {
										var e, t = (e = Ph().mark((function e(t) {
											return Ph().wrap((function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														if (!(t && t.fill.width > 0 && t.fill.height > 0)) {
															e.next = 11;
															break
														}
														if (0 != t.fill.x) {
															e.next = 7;
															break
														}
														return e.next = 4, Nh(l[0], t.sample);
													case 4:
														B = e.sent, e.next = 11;
														break;
													case 7:
														if (!(t.fill.x > 0)) {
															e.next = 11;
															break
														}
														return e.next = 10, Nh(l[0], t.sample);
													case 10:
														U = e.sent;
													case 11:
													case "end":
														return e.stop()
												}
											}), e)
										})), function() {
											var t = this,
												n = arguments;
											return new Promise((function(r, i) {
												var a = e.apply(t, n);

												function o(e) {
													Ih(a, r, i, o, s, "next", e)
												}

												function s(e) {
													Ih(a, r, i, o, s, "throw", e)
												}
												o(void 0)
											}))
										});
										return function(e) {
											return t.apply(this, arguments)
										}
									}());
									var q = function e(t, n, r, i, a, o, s, c, d) {
											t ? fetch(t).then((function(e) {
												return e.blob()
											})).then((function(t) {
												createImageBitmap(t).then((function(t) {
													if (p) {
														var u = p.height;
														0 === E ? I.drawImage(t, 0, 0, i, v.height, 0, 0, i / L, v.height / L) : (s = (v.height - _ + (E - 1) * (u - _)) / L, r = p.y, d = u / L, a = u, E === M - 1 && (r = p.y + u - j, d = j / L, a = j), I.drawImage(t, p.x, r, p.width, a, p.x / L, s, p.width / L, d), p.x > 0 && B && (I.beginPath(), I.rect(0, s - 1, p.x / L, d + 1), I.fillStyle = B, I.fill()), p.x + p.width < i && U && (I.beginPath(), I.rect((p.x + p.width) / L, s - 1, (i - (p.x + p.width)) / L, d + 1), I.fillStyle = U, I.fill()), E === M - 1 && m && m.height > 0 && I.drawImage(h, 0, m.y, i, m.height, 0, s + d, i / L, m.height / L)), E++
													} else s = E * w, E == M - 1 && (r = (w - j) * L, a = (d = j) * L), I.drawImage(t, n, r, i, a, o, s, c, d), ++E > M - 1 && z();
													e(l[++O], n, r, i, a, o, s, c, d)
												}))
											})) : "jpg" === u ? P.convertToBlob({
												type: "image/jpeg",
												quality: 1
											}).then((function(e) {
												y(e, {
													width: P.width,
													height: P.height
												})
											})) : P.convertToBlob().then((function(e) {
												y(e, {
													width: P.width,
													height: P.height
												})
											}))
										},
										z = function() {
											++T > R - 1 || (T == R - 1 ? (G = b - N, V = x - T * b, W = T * b) : (G = 0, V = b, W = T * b), Y = 0, K = w, J = 0, q(l[O = (E = 0) + T * M], G, Y, k, A, W, J, V, K))
										};
									if (!c.x && c.y) {
										if (M = F, j = w * s.y, x = "selected" == e ? i / L : b, p) {
											j = p.height * s.y;
											var Z = p.height,
												H = v.height;
											S = j ? 1 === M ? H / L : (H + (M > 2 ? (M - 2) * Z : 0) + j) / L : (H + (M - 1) * Z) / L, m && m.height > 0 && (S += m.height / L)
										} else S = j ? w * (M - 1) + j : w * M;
										if (S > xh) return void
										function(e, t, n, r, i, a, o, s, c) {
											Sh.apply(this, arguments)
										}(l, s.y, L, p, m, g, v, y);
										D();
										var G = 0,
											V = b,
											W = 0,
											Y = 0,
											K = w,
											J = 0;
										"selected" == e && n && (G = n), q(l[O], G, Y, k, A, W, J, V, K)
									}
									if (c.x && !c.y) {
										R = F, N = b * s.x, S = "selected" == e ? request.centerH : w, x = N ? b * (R - 1) + N : b * R, D();
										G = 0, V = b, W = 0, Y = 0, K = w, J = 0;
										! function e(t, n, r, i, a, o, s, c, u, h) {
											o = T * b, T == R - 1 && (n = b - N, c = N), I.drawImage(t, n, r, i, a, o, s, c, u), T < R - 1 && e(l[++T], n, r, i, a, o, s, c, u)
										}(l[O], G, Y, k, A, W, J, V, K)
									}
									if (c.x && c.y) {
										N = b * s.x, j = w * s.y, "selected" == e ? (x = request.centerW, S = request.centerH) : (x = N ? b * (R - 1) + N : b * R, S = j ? w * (M - 1) + j : w * M), D();
										G = 0, V = b, W = 0, Y = 0, K = w, J = 0;
										q(l[O], G, Y, k, A, W, J, V, K)
									}
							}
						}))
					}))
				}
				var _h = n(41044),
					Oh = n(31795),
					Th = n.n(Oh);

				function Dh(e) {
					return Dh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					}, Dh(e)
				}

				function Eh(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function Fh(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Eh(Object(n), !0).forEach((function(t) {
							Rh(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Eh(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function Rh(e, t, n) {
					return (t = zh(t)) in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function Mh() {
					Mh = function() {
						return e
					};
					var e = {},
						t = Object.prototype,
						n = t.hasOwnProperty,
						r = Object.defineProperty || function(e, t, n) {
							e[t] = n.value
						},
						i = "function" == typeof Symbol ? Symbol : {},
						a = i.iterator || "@@iterator",
						o = i.asyncIterator || "@@asyncIterator",
						s = i.toStringTag || "@@toStringTag";

					function c(e, t, n) {
						return Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), e[t]
					}
					try {
						c({}, "")
					} catch (e) {
						c = function(e, t, n) {
							return e[t] = n
						}
					}

					function l(e, t, n, i) {
						var a = t && t.prototype instanceof d ? t : d,
							o = Object.create(a.prototype),
							s = new k(i || []);
						return r(o, "_invoke", {
							value: x(e, n, s)
						}), o
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
					var h = {};

					function d() {}

					function f() {}

					function p() {}
					var m = {};
					c(m, a, (function() {
						return this
					}));
					var g = Object.getPrototypeOf,
						v = g && g(g(A([])));
					v && v !== t && n.call(v, a) && (m = v);
					var y = p.prototype = d.prototype = Object.create(m);

					function b(e) {
						["next", "throw", "return"].forEach((function(t) {
							c(e, t, (function(e) {
								return this._invoke(t, e)
							}))
						}))
					}

					function w(e, t) {
						function i(r, a, o, s) {
							var c = u(e[r], e, a);
							if ("throw" !== c.type) {
								var l = c.arg,
									h = l.value;
								return h && "object" == Dh(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
									i("next", e, o, s)
								}), (function(e) {
									i("throw", e, o, s)
								})) : t.resolve(h).then((function(e) {
									l.value = e, o(l)
								}), (function(e) {
									return i("throw", e, o, s)
								}))
							}
							s(c.arg)
						}
						var a;
						r(this, "_invoke", {
							value: function(e, n) {
								function r() {
									return new t((function(t, r) {
										i(e, n, t, r)
									}))
								}
								return a = a ? a.then(r, r) : r()
							}
						})
					}

					function x(e, t, n) {
						var r = "suspendedStart";
						return function(i, a) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === i) throw a;
								return L()
							}
							for (n.method = i, n.arg = a;;) {
								var o = n.delegate;
								if (o) {
									var s = S(o, n);
									if (s) {
										if (s === h) continue;
										return s
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw r = "completed", n.arg;
									n.dispatchException(n.arg)
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var c = u(e, t, n);
								if ("normal" === c.type) {
									if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
									return {
										value: c.arg,
										done: n.done
									}
								}
								"throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
							}
						}
					}

					function S(e, t) {
						var n = t.method,
							r = e.iterator[n];
						if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
						var i = u(r, e.iterator, t.arg);
						if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, h;
						var a = i.arg;
						return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
					}

					function j(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function N(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function k(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(j, this), this.reset(!0)
					}

					function A(e) {
						if (e) {
							var t = e[a];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var r = -1,
									i = function t() {
										for (; ++r < e.length;)
											if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return i.next = i
							}
						}
						return {
							next: L
						}
					}

					function L() {
						return {
							value: void 0,
							done: !0
						}
					}
					return f.prototype = p, r(y, "constructor", {
						value: p,
						configurable: !0
					}), r(p, "constructor", {
						value: f,
						configurable: !0
					}), f.displayName = c(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
						var t = "function" == typeof e && e.constructor;
						return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
					}, e.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, c(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
					}, e.awrap = function(e) {
						return {
							__await: e
						}
					}, b(w.prototype), c(w.prototype, o, (function() {
						return this
					})), e.AsyncIterator = w, e.async = function(t, n, r, i, a) {
						void 0 === a && (a = Promise);
						var o = new w(l(t, n, r, i), a);
						return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
							return e.done ? e.value : o.next()
						}))
					}, b(y), c(y, s, "Generator"), c(y, a, (function() {
						return this
					})), c(y, "toString", (function() {
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
					}, e.values = A, k.prototype = {
						constructor: k,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
								return o.type = "throw", o.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									o = a.completion;
								if ("root" === a.tryLoc) return r("end");
								if (a.tryLoc <= this.prev) {
									var s = n.call(a, "catchLoc"),
										c = n.call(a, "finallyLoc");
									if (s && c) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return r(a.finallyLoc)
									} else if (s) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
									} else {
										if (!c) throw new Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return r(a.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var i = this.tryEntries[r];
								if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
									var a = i;
									break
								}
							}
							a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var o = a ? a.completion : {};
							return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(o)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), h
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									var r = n.completion;
									if ("throw" === r.type) {
										var i = r.arg;
										N(n)
									}
									return i
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, n) {
							return this.delegate = {
								iterator: A(e),
								resultName: t,
								nextLoc: n
							}, "next" === this.method && (this.arg = void 0), h
						}
					}, e
				}

				function Bh(e, t, n, r, i, a, o) {
					try {
						var s = e[a](o),
							c = s.value
					} catch (e) {
						return void n(e)
					}
					s.done ? t(c) : Promise.resolve(c).then(r, i)
				}

				function Uh(e) {
					return function() {
						var t = this,
							n = arguments;
						return new Promise((function(r, i) {
							var a = e.apply(t, n);

							function o(e) {
								Bh(a, r, i, o, s, "next", e)
							}

							function s(e) {
								Bh(a, r, i, o, s, "throw", e)
							}
							o(void 0)
						}))
					}
				}

				function qh(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, zh(r.key), r)
					}
				}

				function zh(e) {
					var t = function(e, t) {
						if ("object" !== Dh(e) || null === e) return e;
						var n = e[Symbol.toPrimitive];
						if (void 0 !== n) {
							var r = n.call(e, t || "default");
							if ("object" !== Dh(r)) return r;
							throw new TypeError("@@toPrimitive must return a primitive value.")
						}
						return ("string" === t ? String : Number)(e)
					}(e, "string");
					return "symbol" === Dh(t) ? t : String(t)
				}

				function Zh(e, t) {
					return Zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
						return e.__proto__ = t, e
					}, Zh(e, t)
				}

				function Hh(e) {
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
						var n, r = Vh(e);
						if (t) {
							var i = Vh(this).constructor;
							n = Reflect.construct(r, arguments, i)
						} else n = r.apply(this, arguments);
						return function(e, t) {
							if (t && ("object" === Dh(t) || "function" == typeof t)) return t;
							if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
							return Gh(e)
						}(this, n)
					}
				}

				function Gh(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function Vh(e) {
					return Vh = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					}, Vh(e)
				}
				var Wh = {
						Browser: Th().name + " " + Th().version,
						OS: Th().os.toString(),
						"Screen Size": window.screen.width + "x" + window.screen.height,
						"Viewport Size": window.innerWidth + "x" + window.innerHeight,
						"Pixel Ratio": "@" + window.devicePixelRatio + "x"
					},
					Yh = function(e) {
						return "jpg" === e ? "image/jpeg" : "image/png"
					},
					Kh = function(e) {
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
							}), t && Zh(e, t)
						}(u, e);
						var t, n, r, s, c, l = Hh(u);

						function u(e) {
							var t;
							return function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, u), (t = l.call(this, e)).tabTitle, t.tabUrl, t.dataURL, t.type, t.menuType, t.centerOffX, t.centerOffY, t.centerH, t.centerW, t.counter, t.ratio, t.scrollBar, t.contentCanScroll, t.contentClip, t.bottomClip, t.bgRegions, t.topCapturePosition, t.state = {
								tabTitle: "Bg.tabtitle",
								tabUrl: "Bg.taburl",
								annotateImageUrl: "",
								saveImageUrl: "",
								imageBlob: null,
								info: {},
								contentType: Yh("png"),
								user: {
									username: "",
									userType: 0,
									userEmail: "",
									premiumLevel: "2"
								},
								permissions: {},
								currentPlan: {},
								counts: {},
								step: "edit",
								isAddDateAndURL: !1,
								isReported: !1,
								menuType: "Bg.menuType",
								avatarURL: ""
							}, t.enterSave = t.enterSave.bind(Gh(t)), t.backToEdit = t.backToEdit.bind(Gh(t)), t.refreshUser = t.refreshUser.bind(Gh(t)), t.quickReportIssueUrl = t.quickReportIssueUrl.bind(Gh(t)), t.reportIssueUrl = t.reportIssueUrl.bind(Gh(t)), t.prepareImage = t.prepareImage.bind(Gh(t)), t
						}
						return t = u, n = [{
							key: "prepareImage",
							value: (c = Uh(Mh().mark((function e(t) {
								var n, r, i, a, o, s, c, l, u, h, d, f, p, m;
								return Mh().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = this, e.next = 3, (0, zr.cF)("fileUrls");
										case 3:
											return r = (r = e.sent) ? JSON.parse(r) : null, t.zoomLevel && (Wh.zoomLevel = t.zoomLevel), i = t.menuType, a = t.type, o = t.dataURL, e.next = 12, (0, zr.S1)("after-capture-action");
										case 12:
											return s = e.sent, e.next = 15, (0, zr.S1)("skip-annotate");
										case 15:
											if (c = e.sent, s || (s = "true" === c ? "skipEntireCapture" : "annotate"), l = t.taburl, u = t.tabtitle, h = t.menuType, this.setState({
													tabTitle: u,
													tabUrl: l,
													menuType: h
												}), "upload" === h && (s = "annotate"), !l) {
												e.next = 28;
												break
											}
											d = "desktop" === h || "upload" === h ? "" : l, (0, zr.Ot)("tab_url", d), this.setState({
												tabUrl: d
											}), e.next = 33;
											break;
										case 28:
											if ("desktop" === h || "upload" === h) {
												e.next = 33;
												break
											}
											return e.next = 31, (0, zr.cF)("tab_url");
										case 31:
											d = e.sent, this.setState({
												tabUrl: d
											});
										case 33:
											if (!o.length) {
												e.next = 46;
												break
											}
											return e.next = 37, (0, zr.S1)("resize-for-retina");
										case 37:
											return f = e.sent, e.next = 40, (0, zr.S1)("format");
										case 40:
											(p = e.sent) || (p = "png"), this.setState({
												contentType: Yh(p)
											}), Ch(i, a, t.centerOffX, t.centerOffY, t.centerW, t.centerH, t.counter, t.ratio, t.scrollBar, o, p, f, t.contentCanScroll, t.scrollBarWidth, t.contentClip, t.bottomClip, t.bgRegions, t.topCapturePosition, function() {
												var e = Uh(Mh().mark((function e(t, r) {
													var a, o, l, u;
													return Mh().wrap((function(e) {
														for (;;) switch (e.prev = e.next) {
															case 0:
																return a = Yr(t) ? t.map((function(e) {
																	return URL.createObjectURL(e)
																})) : URL.createObjectURL(t), o = "skipAnnotate" === s || ("skipEntireCapture" === s || "true" === c) && "entire" === i || Yr(t), e.next = 9, (0, zr.S1)("add-url");
															case 9:
																l = e.sent, o ? "true" !== l && !l || Yr(t) ? (u = {
																	saveImageUrl: a,
																	imageBlob: t,
																	step: o ? "save" : "edit"
																}, Yr(t) || setTimeout((function() {
																	var e = new FileReader;
																	e.readAsDataURL(t), e.onloadend = function() {
																		var t = e.result;
																		n.setState({
																			saveImageUrl: t
																		}, (function() {
																			e = null
																		}))
																	}
																}), 1200)) : (a = "desktop" === i ? "" : n.state.tabUrl, si(t, r, a, (function(e) {
																	var t = e,
																		i = URL.createObjectURL(t);
																	n.setState({
																		imageBlob: t,
																		saveImageUrl: i,
																		info: r,
																		isAddDateAndURL: !0,
																		step: "save"
																	}), setTimeout((function() {
																		var e = new FileReader;
																		e.readAsDataURL(t), e.onloadend = function() {
																			var t = e.result;
																			n.setState({
																				saveImageUrl: t
																			}, (function() {
																				e = null
																			}))
																		}
																	}), 1200)
																}))) : u = {
																	annotateImageUrl: a
																}, n.setState(u), setTimeout((function() {
																	var e = Yr(t) ? t : [t],
																		n = [];
																	e.forEach((function(t, r) {
																		_h.Z.save(t, "currentScreenshot" + r + ".png").then((function(t) {
																			n.push({
																				url: t,
																				index: r
																			}), n.length === e.length && (n.sort((function(e, t) {
																				return e.index - t.index
																			})), (0, zr.Ot)("fileUrls", JSON.stringify(n.map((function(e) {
																				return e.url
																			})))), chrome.runtime.sendMessage({
																				action: "clearDataURL"
																			}))
																		}))
																	}))
																}), 1e3);
															case 13:
															case "end":
																return e.stop()
														}
													}), e)
												})));
												return function(t, n) {
													return e.apply(this, arguments)
												}
											}()), e.next = 47;
											break;
										case 46:
											r && !o.length && (m = "skipAnnotate" === s || ("skipEntireCapture" === s || "true" === c) && "entire" === a || r.length > 1 ? {
												saveImageUrl: r.length > 1 ? r : r[0],
												step: "save"
											} : {
												annotateImageUrl: r[0]
											}, this.setState(m));
										case 47:
											n.refreshUser(), document.addEventListener("visibilitychange", (function() {
												"visible" === document.visibilityState && n.refreshUser()
											})), chrome.storage.sync.get(["captureCount"], (function(e) {
												e.captureCount ? chrome.storage.sync.set({
													captureCount: (isNaN(parseInt(e.captureCount)) ? 0 : parseInt(e.captureCount)) + 1
												}) : chrome.storage.sync.set({
													captureCount: 1
												})
											}));
										case 51:
										case "end":
											return e.stop()
									}
								}), e, this)
							}))), function(e) {
								return c.apply(this, arguments)
							})
						}, {
							key: "componentDidMount",
							value: function() {
								var e = this;
								chrome.runtime.sendMessage({
									action: "getData"
								}, function() {
									var t = Uh(Mh().mark((function t(n) {
										var r;
										return Mh().wrap((function(t) {
											for (;;) switch (t.prev = t.next) {
												case 0:
													return t.next = 3, (0, zr.cF)("dataURL");
												case 3:
													r = t.sent, n.dataURL = r, e.prepareImage(n);
												case 6:
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
						}, {
							key: "componentWillUnmount",
							value: function() {
								var e = this;
								document.removeEventListener("visibilitychange", (function() {
									"visible" === document.visibilityState && e.refreshUser()
								}))
							}
						}, {
							key: "reportIssueUrl",
							value: function() {
								var e = this;
								if (this.state.isReported) o.ZP.warning("You have reported a problem with this page successfully.");
								else {
									var t = {};
									t["Extension Version"] = chrome.runtime.getManifest().version, localStorage.last_info && (t = Fh(Fh({}, t), JSON.parse(localStorage.last_info))), t.Browser || (t.Browser = Th().name + " " + Th().version), t.OS || (t.OS = Th().os.toString()), t["Screen Size"] || (t["Screen Size"] = window.screen.width + "x" + window.screen.height);
									var n = {
										name: this.state.user.username ? this.state.user.username : "user",
										subject: "Full Page capture Issue",
										content: function(e, t) {
											var n = "";
											for (var r in n += e + "<br/><br/><br/><hr>", t) n += "<b>" + r + "</b>: " + t[r] + "<br/>";
											return n
										}(this.state.tabTitle + " " + this.state.tabUrl + "\nmenuType: " + this.state.menuType, t)
									};
									this.state.user.userEmail && !/privaterelay.appleid.com/.test(this.state.user.userEmail) ? n.email = this.state.user.userEmail : n.email = "report_fullpage@aws.cn",
										function(e) {
											return fi({
												method: "POST",
												url: "/common/contact_us",
												data: e
											})
										}(n).then((function() {
											e.setState({
												isReported: !0
											}), a.Z.open({
												message: "Thank you :)",
												description: "Your report has been sent successfully. We will look into this and find a solution as soon as possible.",
												duration: 2
											})
										})).catch((function() {
											o.ZP.warning("Submission failed. Please retry or copy the page's url to send an email to care@awesomescreenshot.com.")
										}))
								}
							}
						}, {
							key: "quickReportIssueUrl",
							value: function() {
								var e = this;
								i.Z.confirm({
									title: "Not properly captured?",
									onOk: function() {
										e.reportIssueUrl()
									},
									okText: "Report",
									okType: "primary"
								})
							}
						}, {
							key: "refreshUser",
							value: function() {
								var e = this;
								pi().then((function(t) {
                                    t.premiumLevel = 2
									t ? t.username === e.state.user.username && t.type === e.state.user.userType && t.mail === e.state.user.userEmail && t.premiumLevel === 2 || (e.setState({
										user: {
											username: t.username,
											userType: t.type,
											userEmail: t.mail,
											premiumLevel: 2
										}
									}), fi({
										method: "GET",
										url: "/user/info"
									}).then((function(t) {
                                        console.log('user t :', t);
                                        // t.premium.currentPlan.isGift = true
                                        t.premium.currentPlan.PremiumLevel = 2
                                        t.counts = {
                                            "folder": 1,
                                            "image": 0,
                                            "imageLimitation": 100000000,
                                            "imageNotInFolder": 0,
                                            "imageTotalAllCreated": 0,
                                            "imageTotalLimitation": 0,
                                            "video": 0,
                                            "videoLimitation": 100000000,
                                            "videoNotInFolder": 16,
                                            "videoTotalAllCreated": 28,
                                            "videoTotalLimitation": 0
                                        }
										e.setState({
											permissions: {
                                                    "allowUploadImage": true,
                                                    "allowVideoCreate": true
                                                },
											currentPlan: t.premium.currentPlan,
											counts: t.counts,
											avatarURL: t.info.avatarURL
										})
									})), chrome.runtime.sendMessage({
										action: "updateUserInfo"
									})) : (e.setState({
										user: {
											username: "",
											userType: 0,
											userEmail: "",
											premiumLevel: "2"
										},
										currentPlan: {},
										permissions: {
											empty: !0
										}
									}), localStorage.currentuploadtab = -1, localStorage.currentimageid = -1, localStorage.removeItem("defaultSavePlace"))
								}))
							}
						}, {
							key: "enterSave",
							value: (s = Uh(Mh().mark((function e(t, n, r) {
								var i, a, o, s;
								return Mh().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return li("click_done", this.state.user && this.state.user.username ? "sigined" : "nosigin"), e.next = 4, (0, zr.S1)("add-url");
										case 4:
											if (i = e.sent, a = this, !window.location.href.match(/gmail=(.*)/)) {
												e.next = 13;
												break
											}
											return o = parseInt(window.location.href.match(/gmail=(.*)/)[1]), (s = new FileReader).readAsDataURL(n), s.onloadend = function() {
												var e = s.result;
												chrome.tabs.sendMessage(o, {
													action: "insertImage",
													dataURL: e
												}), setTimeout((function() {
													window.close()
												}), 0)
											}, e.abrupt("return");
										case 13:
											Object.keys(r.border).length > 0 ? oi(n, r, "extension", (function(e) {
												var t = e,
													n = URL.createObjectURL(t);
												a.setState({
													imageBlob: t,
													saveImageUrl: n,
													info: r,
													step: "save"
												}), setTimeout((function() {
													var e = new FileReader;
													e.readAsDataURL(t), e.onloadend = function() {
														var t = e.result;
														a.setState({
															saveImageUrl: t
														}, (function() {
															e = null
														}))
													}
												}), 1200)
											})) : i && !a.state.isAddDateAndURL ? (t = "desktop" === a.state.menuType ? "" : this.state.tabUrl, si(n, r, t, (function(e) {
												var t = e,
													n = URL.createObjectURL(t);
												a.setState({
													imageBlob: t,
													saveImageUrl: n,
													info: r,
													step: "save"
												}), setTimeout((function() {
													var e = new FileReader;
													e.readAsDataURL(t), e.onloadend = function() {
														var t = e.result;
														a.setState({
															saveImageUrl: t
														}, (function() {
															e = null
														}))
													}
												}), 1200)
											}))) : (a.setState({
												imageBlob: n,
												saveImageUrl: t,
												info: r,
												step: "save"
											}), setTimeout((function() {
												var e = new FileReader;
												e.readAsDataURL(n), e.onloadend = function() {
													var t = e.result;
													a.setState({
														saveImageUrl: t
													}, (function() {
														e = null
													}))
												}
											}), 1200));
										case 14:
										case "end":
											return e.stop()
									}
								}), e, this)
							}))), function(e, t, n) {
								return s.apply(this, arguments)
							})
						}, {
							key: "backToEdit",
							value: function() {
								var e = {
									step: "edit"
								};
								this.state.annotateImageUrl || (e.annotateImageUrl = this.state.saveImageUrl), this.setState(e)
							}
						}, {
							key: "render",
							value: function() {
								var e = L()("sub-page", {
										active: "edit" === this.state.step
									}),
									t = L()("sub-page", {
										active: "save" === this.state.step
									});
								return this.state.saveImageUrl || this.state.annotateImageUrl ? (0, P.jsxs)(P.Fragment, {
									children: [(0, P.jsx)(Be, {
										imageUrl: this.state.annotateImageUrl,
										handleFinishEdit: this.enterSave,
										permissions: this.state.permissions,
										className: e,
										type: "ext",
										contentType: this.state.contentType,
										isReported: this.state.isReported,
										menuType: this.state.menuType,
										tabUrl: this.state.tabUrl,
										step: this.state.step,
										quickReport: this.quickReportIssueUrl
									}), (0, P.jsx)(gh, {
										user: this.state.user,
										backToEdit: this.backToEdit,
										imageUrl: this.state.saveImageUrl,
										imageBlob: this.state.imageBlob,
										tabTitle: this.state.tabTitle,
										tabUrl: this.state.tabUrl,
										info: this.state.info,
										imageInfo: Wh,
										refreshUser: this.refreshUser,
										step: this.state.step,
										className: t,
										permissions: this.state.permissions,
										currentPlan: this.state.currentPlan,
										contentType: this.state.contentType,
										isReported: this.state.isReported,
										menuType: this.state.menuType,
										quickReport: this.quickReportIssueUrl,
										counts: this.state.counts,
										avatar: this.state.avatarURL
									})]
								}) : (0, P.jsx)("div", {
									className: "loading-page",
									children: (0, P.jsxs)("div", {
										className: "center",
										children: [(0, P.jsx)("div", {
											className: "loading-spinner",
											children: (0, P.jsxs)("div", {
												className: "spinner",
												children: [(0, P.jsx)("div", {
													className: "rect1"
												}), (0, P.jsx)("div", {
													className: "rect2"
												}), (0, P.jsx)("div", {
													className: "rect3"
												}), (0, P.jsx)("div", {
													className: "rect4"
												}), (0, P.jsx)("div", {
													className: "rect5"
												})]
											})
										}), (0, P.jsxs)("div", {
											className: "brand",
											children: [(0, P.jsx)("div", {
												className: "logo"
											}), "AWESOME SCREENSHOT"]
										})]
									})
								})
							}
						}], n && qh(t.prototype, n), r && qh(t, r), Object.defineProperty(t, "prototype", {
							writable: !1
						}), u
					}(s.Component);
				const Jh = Kh;
				r.render((0, P.jsx)(Jh, {}), document.getElementById("edit-page"))
			}
		},
		o = {};

	function s(e) {
		var t = o[e];
		if (void 0 !== t) return t.exports;
		var n = o[e] = {
			id: e,
			loaded: !1,
			exports: {}
		};
		return a[e].call(n.exports, n, n.exports, s), n.loaded = !0, n.exports
	}
	s.m = a, e = [], s.O = (t, n, r, i) => {
		if (!n) {
			var a = 1 / 0;
			for (u = 0; u < e.length; u++) {
				for (var [n, r, i] = e[u], o = !0, c = 0; c < n.length; c++)(!1 & i || a >= i) && Object.keys(s.O).every((e => s.O[e](n[c]))) ? n.splice(c--, 1) : (o = !1, i < a && (a = i));
				if (o) {
					e.splice(u--, 1);
					var l = r();
					void 0 !== l && (t = l)
				}
			}
			return t
		}
		i = i || 0;
		for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
		e[u] = [n, r, i]
	}, s.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return s.d(t, {
			a: t
		}), t
	}, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(e, r) {
		if (1 & r && (e = this(e)), 8 & r) return e;
		if ("object" == typeof e && e) {
			if (4 & r && e.__esModule) return e;
			if (16 & r && "function" == typeof e.then) return e
		}
		var i = Object.create(null);
		s.r(i);
		var a = {};
		t = t || [null, n({}), n([]), n(n)];
		for (var o = 2 & r && e;
			"object" == typeof o && !~t.indexOf(o); o = n(o)) Object.getOwnPropertyNames(o).forEach((t => a[t] = () => e[t]));
		return a.default = () => e, s.d(i, a), i
	}, s.d = (e, t) => {
		for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, n) => (s.f[n](e, t), t)), [])), s.u = e => "javascripts/bundles/" + e + ".bundle.js", s.miniCssF = e => {}, s.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r = {}, i = "awesomescreenshot-extension:", s.l = (e, t, n, a) => {
		if (r[e]) r[e].push(t);
		else {
			var o, c;
			if (void 0 !== n)
				for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
					var h = l[u];
					if (h.getAttribute("src") == e || h.getAttribute("data-webpack") == i + n) {
						o = h;
						break
					}
				}
			o || (c = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, s.nc && o.setAttribute("nonce", s.nc), o.setAttribute("data-webpack", i + n), o.src = e), r[e] = [t];
			var d = (t, n) => {
					o.onerror = o.onload = null, clearTimeout(f);
					var i = r[e];
					if (delete r[e], o.parentNode && o.parentNode.removeChild(o), i && i.forEach((e => e(n))), t) return t(n)
				},
				f = setTimeout(d.bind(null, void 0, {
					type: "timeout",
					target: o
				}), 12e4);
			o.onerror = d.bind(null, o.onerror), o.onload = d.bind(null, o.onload), c && document.head.appendChild(o)
		}
	}, s.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
		var e;
		s.g.importScripts && (e = s.g.location + "");
		var t = s.g.document;
		if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
			var n = t.getElementsByTagName("script");
			n.length && (e = n[n.length - 1].src)
		}
		if (!e) throw new Error("Automatic publicPath is not supported in this browser");
		e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e + "../../"
	})(), (() => {
		var e = {
			922: 0
		};
		s.f.j = (t, n) => {
			var r = s.o(e, t) ? e[t] : void 0;
			if (0 !== r)
				if (r) n.push(r[2]);
				else {
					var i = new Promise(((n, i) => r = e[t] = [n, i]));
					n.push(r[2] = i);
					var a = s.p + s.u(t),
						o = new Error;
					s.l(a, (n => {
						if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
							var i = n && ("load" === n.type ? "missing" : n.type),
								a = n && n.target && n.target.src;
							o.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", o.name = "ChunkLoadError", o.type = i, o.request = a, r[1](o)
						}
					}), "chunk-" + t, t)
				}
		}, s.O.j = t => 0 === e[t];
		var t = (t, n) => {
				var r, i, [a, o, c] = n,
					l = 0;
				if (a.some((t => 0 !== e[t]))) {
					for (r in o) s.o(o, r) && (s.m[r] = o[r]);
					if (c) var u = c(s)
				}
				for (t && t(n); l < a.length; l++) i = a[l], s.o(e, i) && e[i] && e[i][0](), e[i] = 0;
				return s.O(u)
			},
			n = self.webpackChunkawesomescreenshot_extension = self.webpackChunkawesomescreenshot_extension || [];
		n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
	})(), s.nc = void 0, s.O(void 0, [775, 799, 909, 431, 441, 932, 981, 544, 191, 873, 32, 80, 55, 203, 249, 801, 436, 46, 172], (() => s(32082)));
	var c = s.O(void 0, [775, 799, 909, 431, 441, 932, 981, 544, 191, 873, 32, 80, 55, 203, 249, 801, 436, 46, 172], (() => s(67348)));
	c = s.O(c)
})();