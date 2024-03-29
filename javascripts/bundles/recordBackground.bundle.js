(() => {
	"use strict";
	var t, e, r, n = {
			35552: (t, e, r) => {
				r.d(e, {
					$r: () => He,
					Bn: () => Ke,
					GR: () => Fe,
					HC: () => Ze,
					Jw: () => qe,
					R6: () => Je,
					UB: () => Ue,
					ZE: () => ze,
					a6: () => Ge,
					c8: () => Ve,
					gD: () => Qe,
					jT: () => We,
					m2: () => Be,
					q6: () => Ye,
					qw: () => $e
				});
				var n = r(67294),
					o = r(16165),
					i = r(94184),
					a = r.n(i),
					c = (r(82452), r(98374)),
					u = r(60327),
					s = r(92976),
					l = r(98688),
					f = r(30418),
					h = r(24986),
					d = r(73586),
					p = r(49355),
					v = r(62504),
					y = r(86324),
					m = r(92504),
					g = r(11685),
					b = r(1744),
					w = r(42978),
					x = r(83225),
					k = r(83462),
					S = r(33038),
					E = r(29970),
					O = r(9187),
					T = r(48960),
					j = r(26436),
					I = r(93185),
					L = r(1080),
					P = r(66716),
					_ = r(36716),
					C = r(4883),
					D = r(85631),
					R = r(2134),
					M = r(68766),
					A = r(45250),
					N = r(4689),
					F = r(11734),
					Z = r(68901),
					G = r(97479),
					U = r(63501),
					B = r(4450),
					z = r(55744),
					V = r(10757),
					q = r(83538),
					K = r(9571),
					W = r(7241),
					H = r(42025),
					Y = r(31727),
					J = r(71428),
					Q = r(57179),
					$ = r(69546),
					X = r(60126),
					tt = r(17687),
					et = r(22939),
					rt = r(63059),
					nt = r(58899),
					ot = r(58707),
					it = r(38183),
					at = r(76664),
					ct = r(24346),
					ut = r(44436),
					st = r(85309),
					lt = r(54392),
					ft = r(68321),
					ht = r(8197),
					dt = r(21482),
					pt = r(37491),
					vt = r(64322),
					yt = r(13243),
					mt = r(64664),
					gt = r(13736),
					bt = r(94222),
					wt = r(63073),
					xt = r(82082),
					kt = r(26836),
					St = r(74748),
					Et = r(59333),
					Ot = r(70110),
					Tt = r(15801),
					jt = r(70161),
					It = r(49233),
					Lt = r(14962),
					Pt = r(21844),
					_t = r(27807),
					Ct = r(64094),
					Dt = r(93388),
					Rt = r(92580),
					Mt = r(93103),
					At = r(38514),
					Nt = r(25912),
					Ft = r(75847),
					Zt = r(30227),
					Gt = r(74990),
					Ut = r(91696),
					Bt = r(19877),
					zt = r(31614),
					Vt = r(64970),
					qt = r(69426),
					Kt = r(83748),
					Wt = r(78037),
					Ht = r(12528),
					Yt = r(30913),
					Jt = r(54311),
					Qt = r(53495),
					$t = r(77809),
					Xt = r(46516),
					te = r(32729),
					ee = r(72005),
					re = r(48858),
					ne = r(26191),
					oe = r(94372),
					ie = r(60272),
					ae = r(67449),
					ce = r(56191),
					ue = r(45747),
					se = r(39873),
					le = r(19961),
					fe = r(96596),
					he = r(17352),
					de = r(33146),
					pe = r(98258),
					ve = r(59478),
					ye = r(76838),
					me = r(67671),
					ge = r(56101),
					be = r(61780),
					we = r(72245),
					xe = r(44549),
					ke = r(61654),
					Se = r(49795),
					Ee = r(19926),
					Oe = r(22015),
					Te = r(22594),
					je = r(45818),
					Ie = r(85893);

				function Le(t) {
					return Le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, Le(t)
				}

				function Pe(t, e) {
					var r = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(t);
						e && (n = n.filter((function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						}))), r.push.apply(r, n)
					}
					return r
				}

				function _e(t) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {};
						e % 2 ? Pe(Object(r), !0).forEach((function(e) {
							Ce(t, e, r[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Pe(Object(r)).forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
						}))
					}
					return t
				}

				function Ce(t, e, r) {
					return (e = function(t) {
						var e = function(t, e) {
							if ("object" !== Le(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== Le(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(t, "string");
						return "symbol" === Le(e) ? e : String(e)
					}(e)) in t ? Object.defineProperty(t, e, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = r, t
				}

				function De(t) {
					var e = a()("svg-icon", t.className);
					return (0, Ie.jsx)(o.Z, _e(_e({}, t), {}, {
						className: e
					}))
				}
				var Re = {
						AddImageIcon: c.Z,
						AddIcon: u.Z,
						AnnotateIcon: s.Z,
						ArrowIcon: l.Z,
						CloseIcon: f.Z,
						CommentIcon: h.Z,
						CopyLinkIcon: d.Z,
						CopyIcon: p.Z,
						DownloadIcon: v.Z,
						EmbedIcon: y.Z,
						FeedbackIcon: m.Z,
						FolderIcon: g.Z,
						ImagesIcon: b.Z,
						ItemsIcon: w.Z,
						LoadingMoreIcon: x.Z,
						MoreIcon: k.Z,
						MoveFolderIcon: S.Z,
						NotificationIcon: E.Z,
						OpenFolderIcon: O.Z,
						PutBackIcon: T.Z,
						RenameIcon: j.Z,
						RightIcon: I.Z,
						TagIcon: L.Z,
						TrashFilledIcon: P.Z,
						TrashIcon: _.Z,
						VideosIcon: C.Z,
						AddTextIcon: D.Z,
						CutIcon: R.Z,
						ProIcon: M.Z,
						PullIcon: A.Z,
						ReduceIcon: N.Z,
						MoreDotIcon: F.Z,
						PlayIcon: G.Z,
						PauseIcon: U.Z,
						FullScreenIcon: B.Z,
						NormalScreenIcon: z.Z,
						PIPIcon: V.Z,
						ReplayIcon: q.Z,
						VolumeCloseIcon: K.Z,
						VolumeHighIcon: W.Z,
						VolumeLowIcon: H.Z,
						SharedIcon: Y.Z,
						StepForwardIcon: J.Z,
						StepBackIcon: Q.Z,
						CommentBubbleIcon: $.Z,
						MentionMsgIcon: X.Z,
						VideoEditorIcon: Z.Z,
						EmojiIcon: tt.Z,
						RecordDesktopIcon: et.Z,
						RecordCameraIcon: rt.Z,
						PricingTagIcon: nt.Z,
						LightThemeIcon: ot.Z,
						DarkThemeIcon: it.Z,
						AutoThemeIcon: at.Z,
						NewTabIcon: ct.Z,
						MicIcon: ut.Z,
						HDIcon: st.Z,
						CameraIcon: lt.Z,
						ChromeIcon: ft.Z,
						EdgeIcon: ht.Z,
						GoogleIcon: dt.Z,
						BrushIcon: pt.Z,
						SecurityIcon: yt.Z,
						SyncIcon: vt.Z,
						ChannelIcon: mt.Z,
						SettingIcon: gt.Z,
						MemberIcon: bt.Z,
						PersonIcon: wt.Z,
						QuestionMarkIcon: xt.Z,
						CardIcon: kt.Z,
						SharedMeIcon: St.Z,
						MeIcon: Et.Z,
						StarIcon: Ot.Z,
						EmptyIcon: Tt.Z,
						PdfIcon: jt.Z,
						PrinterIcon: It.Z,
						CopyImageIcon: Lt.Z,
						SmileIcon: Pt.Z,
						CrownIcon: _t.Z,
						CrownBgIcon: Ct.Z,
						SharedMeFilledIcon: Dt.Z,
						WarningIcon: Rt.Z,
						BilligIcon: Mt.Z,
						StarFolderIcon: At.Z,
						MeFilledIcon: Nt.Z,
						AtIcon: Ft.Z,
						StickerIcon: tt.Z,
						CameraNoIcon: Zt.Z,
						TrashRecordIcon: Gt.Z,
						StopRecordIcon: Ut.Z,
						ActionBigIcon: zt.Z,
						ActionMiniIcon: Bt.Z,
						CameraRecordIcon: Vt.Z,
						CheckboxIcon: qt.Z,
						DragIcon: Kt.Z,
						AddMemberIcon: Wt.Z,
						RecordPauseIcon: Ht.Z,
						RecordPlayIcon: Yt.Z,
						LockIcon: Jt.Z,
						EnterpriseIcon: Qt.Z,
						DomainIcon: $t.Z,
						SsoIcon: Xt.Z,
						DownloadExtIcon: te.Z,
						CopyExtIcon: ee.Z,
						PDFExtIcon: re.Z,
						PrintExtIcon: ne.Z,
						BackupExtIcon: oe.Z,
						OutIcon: ie.Z,
						ShareIcon: ae.Z,
						DescIcon: ce.Z,
						FolderFilledIcon: ue.Z,
						VideoFolderIcon: se.Z,
						VideoFilmIcon: le.Z,
						VideoEditIcon: fe.Z,
						IcStopIcon: Ut.Z,
						PointerIcon: he.Z,
						ExtWarningIcon: de.Z,
						NoBackupIcon: pe.Z,
						VideoFailedIcon: ve.Z,
						VideoStatusIcon: ye.Z,
						VideoPlayIcon: me.Z,
						VideoDownloadIcon: ge.Z,
						VideoRetryIcon: be.Z,
						VideoDeleteIcon: we.Z,
						MyItemIcon: xe.Z,
						DoneIcon: ke.Z,
						ScreenshotIIcon: Se.Z,
						TabIIcon: Ee.Z,
						InfiniteIcon: Oe.Z,
						BrainIcon: Te.Z,
						SiderOcrIcon: je.Z
					},
					Me = {},
					Ae = function(t) {
						Me[t] = (0, n.memo)((function(e) {
							return (0, Ie.jsx)(De, _e({
								component: Re[t]
							}, e))
						})), Me[t].displayName = t
					};
				for (var Ne in Re) Ae(Ne);
				Me.AddImageIcon, Me.AddIcon, Me.AnnotateIcon, Me.ArrowIcon, Me.CloseIcon, Me.CommentIcon, Me.CopyLinkIcon, Me.CopyIcon, Me.DownloadIcon, Me.EmbedIcon, Me.FeedbackIcon, Me.FolderIcon, Me.ImagesIcon, Me.ItemsIcon, Me.LoadingMoreIcon, Me.MoreIcon, Me.MoveFolderIcon, Me.NotificationIcon, Me.OpenFolderIcon, Me.PutBackIcon, Me.RenameIcon, Me.RightIcon, Me.TagIcon, Me.TrashFilledIcon, Me.TrashIcon, Me.VideosIcon, Me.AddTextIcon, Me.CutIcon, Me.ProIcon, Me.PullIcon, Me.ReduceIcon, Me.MoreDotIcon, Me.PlayIcon, Me.PauseIcon, Me.FullScreenIcon, Me.NormalScreenIcon, Me.PIPIcon, Me.ReplayIcon, Me.VolumeCloseIcon, Me.VolumeHighIcon, Me.VolumeLowIcon, Me.SharedIcon, Me.StepForwardIcon, Me.StepBackIcon, Me.CommentBubbleIcon, Me.MentionMsgIcon, Me.VideoEditorIcon, Me.EmojiIcon, Me.RecordDesktopIcon, Me.RecordCameraIcon, Me.PricingTagIcon, Me.LightThemeIcon, Me.DarkThemeIcon, Me.AutoThemeIcon, Me.NewTabIcon, Me.MicIcon, Me.HDIcon, Me.CameraIcon, Me.ChromeIcon, Me.EdgeIcon, Me.GoogleIcon, Me.BrushIcon, Me.SecurityIcon, Me.SyncIcon, Me.ChannelIcon, Me.SettingIcon, Me.MemberIcon, Me.PersonIcon, Me.QuestionMarkIcon, Me.CardIcon, Me.SharedMeIcon, Me.MeIcon, Me.StarIcon, Me.EmptyIcon, Me.PdfIcon, Me.PrinterIcon, Me.CopyImageIcon, Me.SmileIcon, Me.CrownIcon, Me.CrownBgIcon, Me.SharedMeFilledIcon, Me.WarningIcon, Me.BilligIcon, Me.StarFolderIcon, Me.MeFilledIcon, Me.AtIcon, Me.StickerIcon, Me.CameraNoIcon;
				var Fe = Me.TrashRecordIcon,
					Ze = (Me.StopRecordIcon, Me.ActionBigIcon, Me.ActionMiniIcon, Me.CameraRecordIcon, Me.DragIcon, Me.CheckboxIcon, Me.AddMemberIcon, Me.RecordPauseIcon),
					Ge = Me.RecordPlayIcon,
					Ue = (Me.LockIcon, Me.EnterpriseIcon, Me.DomainIcon, Me.SsoIcon, Me.DownloadExtIcon, Me.CopyExtIcon, Me.PDFExtIcon, Me.PrintExtIcon, Me.BackupExtIcon, Me.OutIcon, Me.ShareIcon, Me.DescIcon, Me.FolderFilledIcon, Me.VideoFolderIcon, Me.VideoFilmIcon, Me.VideoEditIcon, Me.IcStopIcon),
					Be = Me.PointerIcon,
					ze = Me.ExtWarningIcon,
					Ve = Me.NoBackupIcon,
					qe = Me.VideoFailedIcon,
					Ke = Me.VideoStatusIcon,
					We = Me.VideoPlayIcon,
					He = Me.VideoDownloadIcon,
					Ye = Me.VideoRetryIcon,
					Je = Me.VideoDeleteIcon,
					Qe = Me.MyItemIcon,
					$e = Me.DoneIcon;
				Me.ScreenshotIIcon, Me.TabIIcon, Me.InfiniteIcon, Me.BrainIcon, Me.SiderOcrIcon
			},
			1102: (t, e, r) => {
				var n = r(73935),
					o = r(67294),
					i = r(82483),
					a = r(92427),
					c = r(86642);

				function u(t) {
					return t.filter((function(t, e, r) {
						return "" !== t.label && r.findIndex((function(e) {
							return e.deviceId === t.deviceId
						})) === e
					}))
				}

				function s() {
					return new Promise((function(t, e) {
						! function(t, e) {
							if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources && (navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)), !navigator.enumerateDevices && navigator.mediaDevices.enumerateDevices && (navigator.enumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator)), navigator.enumerateDevices) {
								var r = [],
									n = [],
									o = [],
									i = [],
									a = [],
									c = [];
								navigator.enumerateDevices((function(e) {
									e.forEach((function(t) {
										var e, u = {};
										for (var s in t) u[s] = t[s];
										r.forEach((function(t) {
											t.deviceId === u.deviceId && (e = !0)
										})), e || ("audio" === u.kind && (u.kind = "audioinput"), "video" === u.kind && (u.kind = "videoinput"), u.deviceId || (u.deviceId = u.id), u.id || (u.id = u.deviceId), "audioinput" !== u.kind && "audio" !== u.kind || i.push(u), "audiooutput" === u.kind && a.push(u), "videoinput" !== u.kind && "video" !== u.kind || c.push(u), -1 !== u.kind.indexOf("audio") && n.push(u), -1 !== u.kind.indexOf("video") && o.push(u), r.push(u))
									})), t && t({
										allMediaDevices: r,
										allVideoDevices: o,
										allAudioDevices: n,
										videoInputDevices: c,
										audioInputDevices: i,
										audioOutputDevices: a
									})
								}))
							} else e(null, "Neither navigator.mediaDevices.enumerateDevices NOR MediaStreamTrack.getSources are available.")
						}((function(e) {
							var r = e,
								n = u(r.audioInputDevices),
								o = u(r.videoInputDevices);
							t({
								availableAudioDevices: n,
								availableVideoDevices: o
							})
						}))
					}))
				}

				function l(t, e) {
					return chrome.runtime.sendMessage(t, e)
				}
				navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && (navigator.enumerateDevices = function(t) {
					navigator.mediaDevices.enumerateDevices().then(t)
				});
				var f = r(72769),
					h = "#E53935",
					d = {
						videoCodec: "fmp4",
						mimeType: "video/mp4;codecs=h264"
					},
					p = 1073741824,
					v = 2,
					y = 1,
					m = r(41044),
					g = r(83550);

				function b(t) {
					return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, b(t)
				}

				function w() {
					w = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new j(o || []);
						return n(a, "_invoke", {
							value: S(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(I([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function x(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function k(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == b(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function S(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return L()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = E(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function E(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, E(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function O(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function T(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function j(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(O, this), this.reset(!0)
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
							next: L
						}
					}

					function L() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, x(k.prototype), u(k.prototype, a, (function() {
						return this
					})), t.AsyncIterator = k, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new k(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, x(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = I, j.prototype = {
						constructor: j,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), T(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										T(r)
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
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function x(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}

				function k(t) {
					return function() {
						var e = this,
							r = arguments;
						return new Promise((function(n, o) {
							var i = t.apply(e, r);

							function a(t) {
								x(i, n, o, a, c, "next", t)
							}

							function c(t) {
								x(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						}))
					}
				}

				function S(t, e) {
					return chrome.tabs.move(t, {
						windowId: e,
						index: 0
					})
				}

				function E(t) {
					return chrome.tabs.update(t, {
						pinned: !0
					})
				}

				function O(t) {
					return chrome.windows.update(t, {
						state: "minimized"
					})
				}

				function T(t, e, r) {
					return j.apply(this, arguments)
				}

				function j() {
					return (j = k(w().mark((function t(e, r, n) {
						return w().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return t.prev = 0, t.next = 3, S(e, r);
								case 3:
									return t.next = 5, E(e);
								case 5:
									t.next = 18;
									break;
								case 7:
									return t.prev = 7, t.t0 = t.catch(0), t.prev = 10, t.next = 13, O(r);
								case 13:
									t.next = 18;
									break;
								case 15:
									t.prev = 15, t.t1 = t.catch(10);
								case 18:
								case "end":
									return t.stop()
							}
						}), t, null, [
							[0, 7],
							[10, 15]
						])
					})))).apply(this, arguments)
				}

				function I(t) {}
				var L = {
					db: null,
					log: function() {
						Array.prototype.slice.apply(arguments).unshift("[DB]: ")
					},
					init: function() {
						return new Promise((function(t, e) {
							var r = indexedDB.open("AwesomeScreenshot", 1);
							r.onupgradeneeded = function(t) {
								var e = t.target.result;
								t.target.transaction.onerror = I, e.objectStoreNames.contains("recordings") && e.deleteObjectStore("recordings"), e.createObjectStore("recordings", {
									autoIncrement: !0
								}).createIndex("by_id", "id", {
									unique: !0
								})
							}, r.onsuccess = function(e) {
								L.db = e.target.result, t(e.target.result)
							}, r.onerror = function(t) {
								e(t)
							}
						}))
					},
					save: function(t) {
						var e = this.db;
						return new Promise((function(r, n) {
							var o = e.transaction(["recordings"], "readwrite").objectStore("recordings"),
								i = (new Date).getTime(),
								a = o.put({
									id: i,
									fileUrl: t.fileUrl,
									detail: {
										title: t.title,
										youtubeUrl: "",
										gDriveUrl: "",
										size: t.size,
										duration: t.duration,
										timeStamp: i,
										thumbnailUrl: "",
										recordType: t.recordType,
										codecs: t.codecs
									}
								});
							a.onsuccess = function() {
								r({
									id: i,
									fileUrl: t.fileUrl,
									detail: {
										title: t.title,
										youtubeUrl: "",
										gDriveUrl: "",
										size: t.size,
										duration: t.duration,
										timeStamp: i,
										thumbnailUrl: "",
										recordType: t.recordType,
										codecs: t.codecs
									}
								})
							}, a.onerror = n
						}))
					},
					get: function(t) {
						var e = this.db;
						return new Promise((function(r, n) {
							var o = e.transaction(["recordings"], "readwrite").objectStore("recordings").index("by_id").get(t);
							o.onsuccess = function(t) {
								var e = t.target.result;
								r(e)
							}, o.onerror = n
						}))
					},
					getAll: function() {
						var t = this.db;
						return new Promise((function(e, r) {
							var n = t.transaction(["recordings"], "readwrite").objectStore("recordings").getAll();
							n.onsuccess = function(t) {
								var r = t.target.result;
								e(r)
							}, n.onerror = r
						}))
					},
					_getCursor: function(t) {
						var e = this.db;
						return new Promise((function(r, n) {
							var o = e.transaction(["recordings"], "readwrite").objectStore("recordings"),
								i = IDBKeyRange.only(t),
								a = o.index("by_id").openCursor(i);
							a.onsuccess = function(t) {
								var e = t.target.result;
								e && r(e)
							}, a.onerror = n
						}))
					},
					updateYoutubeUrl: function(t, e) {
						var r = this;
						return new Promise((function(n, o) {
							r._getCursor(t).then((function(t) {
								t.value.detail.youtubeUrl = e;
								var r = t.update(t.value);
								r.onsuccess = n, r.onerror = o
							}))
						}))
					},
					update: function(t, e) {
						var r = this.db;
						return new Promise((function(n, o) {
							var i = r.transaction(["recordings"], "readwrite").objectStore("recordings"),
								a = IDBKeyRange.only(t),
								c = i.index("by_id").openCursor(a);
							c.onsuccess = function(t) {
								var r = t.target.result;
								r && (r.update(e).onsuccess = function() {
									n()
								})
							}, c.onerror = o
						}))
					},
					deleteAll: function() {
						var t = this.db;
						return new Promise((function(e, r) {
							var n = t.transaction(["recordings"], "readwrite").objectStore("recordings").clear();
							n.onsuccess = function(t) {
								var r = t.target.result;
								e(r)
							}, n.onerror = r
						}))
					},
					delete: function(t) {
						var e = this.db;
						return new Promise((function(r, n) {
							var o = e.transaction(["recordings"], "readwrite").objectStore("recordings"),
								i = IDBKeyRange.only(t),
								a = o.index("by_id").openCursor(i);
							a.onsuccess = function(t) {
								var e = t.target.result;
								e && (e.delete().onsuccess = function() {
									r()
								})
							}, a.onerror = n
						}))
					}
				};
				const P = L;
				var _ = r(77029),
					C = r(99231);

				function D(t) {
					return D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, D(t)
				}

				function R() {
					R = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == D(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function M(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== D(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== D(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === D(i) ? i : String(i)), n)
					}
					var o, i
				}
				var A = function() {
					function t() {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, t), this.queue = []
					}
					var e, r, n;
					return e = t, (r = [{
						key: "ready",
						value: function() {
							return (0, C.m)(this, void 0, void 0, R().mark((function t() {
								return R().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.abrupt("return", "");
										case 1:
										case "end":
											return t.stop()
									}
								}), t)
							})))
						}
					}, {
						key: "start",
						value: function() {
							return {
								vid: "0",
								title: "Download"
							}
						}
					}, {
						key: "pause",
						value: function() {}
					}, {
						key: "resume",
						value: function() {}
					}, {
						key: "send",
						value: function() {}
					}, {
						key: "sendAll",
						value: function() {}
					}, {
						key: "connect",
						value: function() {
							return (0, C.m)(this, void 0, void 0, R().mark((function t() {
								return R().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.abrupt("return", !0);
										case 1:
										case "end":
											return t.stop()
									}
								}), t)
							})))
						}
					}, {
						key: "tryConnect",
						value: function() {
							return (0, C.m)(this, void 0, void 0, R().mark((function t() {
								return R().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.abrupt("return", !0);
										case 1:
										case "end":
											return t.stop()
									}
								}), t)
							})))
						}
					}, {
						key: "disconnect",
						value: function() {}
					}, {
						key: "isConnected",
						value: function() {
							return !0
						}
					}, {
						key: "push",
						value: function(t) {
							t instanceof Blob && this.queue.push(t)
						}
					}, {
						key: "stop",
						value: function() {
							return (0, C.m)(this, void 0, void 0, R().mark((function t() {
								var e = this;
								return R().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											setTimeout((function() {
												var t = new Blob(e.queue, {
														type: "video/mp4"
													}),
													r = URL.createObjectURL(t),
													n = document.createElement("a");
												n.href = r, n.download = "Record" + Date.now() + ".mp4", n.click()
											}), 1e3);
										case 1:
										case "end":
											return t.stop()
									}
								}), t)
							})))
						}
					}, {
						key: "cancel",
						value: function() {
							return (0, C.m)(this, void 0, void 0, R().mark((function t() {
								return R().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											this.stop();
										case 1:
										case "end":
											return t.stop()
									}
								}), t, this)
							})))
						}
					}, {
						key: "getData",
						value: function() {
							return {
								vid: "0",
								title: "Download"
							}
						}
					}, {
						key: "getQueueProgress",
						value: function() {
							return {
								finished: this.queue.length,
								current: this.queue.length,
								total: this.queue.length
							}
						}
					}, {
						key: "refreshProgress",
						value: function() {}
					}]) && M(e.prototype, r), n && M(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), t
				}();

				function N(t) {
					return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, N(t)
				}

				function F() {
					F = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == N(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function Z(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== N(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== N(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === N(i) ? i : String(i)), n)
					}
					var o, i
				}
				var G = function() {
					function t(e) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, t), this.DBName = (null == e ? void 0 : e.name) || "Storage_Index", this.DBVersion = (null == e ? void 0 : e.version) || 1, this.objectStoreName = (null == e ? void 0 : e.indexStoreName) || "index", this.handleUpgrade = this.handleUpgrade.bind(this), this.initDB()
					}
					var e, r, n;
					return e = t, r = [{
						key: "initDB",
						value: function() {
							var t = this;
							if (this.db) return this.db;
							var e = indexedDB.open(this.DBName, this.DBVersion);
							return new Promise((function(r, n) {
								e.onerror = function(t) {
									n()
								}, e.onupgradeneeded = t.handleUpgrade, e.onsuccess = function() {
									r(e.result)
								}
							})).then((function(e) {
								t.db = e, e.onerror = console.error
							})).catch(console.error)
						}
					}, {
						key: "getObjectStore",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, F().mark((function e() {
								var r, n;
								return F().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.initDB();
										case 2:
											return r = this.db.transaction([this.objectStoreName], t), n = r.objectStore(this.objectStoreName), e.abrupt("return", n);
										case 5:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "handleUpgrade",
						value: function(t) {
							t.target.result.createObjectStore(this.objectStoreName, {
								autoIncrement: !0
							})
						}
					}, {
						key: "createIndex",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, F().mark((function e() {
								var r, n, o;
								return F().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return r = Object.assign({}, t), e.next = 3, this.getObjectStore("readwrite");
										case 3:
											return n = e.sent, o = n.add(r), e.abrupt("return", new Promise((function(t, e) {
												o.onsuccess = function() {
													var e = o.result;
													t(e)
												}, o.onerror = function(t) {
													e()
												}
											})));
										case 6:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "updateIndex",
						value: function(t, e) {
							return (0, C.m)(this, void 0, void 0, F().mark((function r() {
								var n, o;
								return F().wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											return r.next = 2, this.getObjectStore("readwrite");
										case 2:
											n = r.sent, o = n.get(t), new Promise((function(t, e) {
												o.onsuccess = function() {
													t(o.result)
												}, o.onerror = function(t) {
													e()
												}
											})).then((function(r) {
												var o = Object.assign(Object.assign({}, r), e),
													i = n.put(o, t);
												return new Promise((function(t, e) {
													i.onsuccess = t, i.onerror = function(t) {
														e()
													}
												}))
											}));
										case 5:
										case "end":
											return r.stop()
									}
								}), r, this)
							})))
						}
					}, {
						key: "removeIndex",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, F().mark((function e() {
								var r, n;
								return F().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.getObjectStore("readwrite");
										case 2:
											return r = e.sent, n = r.delete(t), e.abrupt("return", new Promise((function(t, e) {
												n.onsuccess = t, n.onerror = function(t) {
													e()
												}
											})));
										case 5:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "getIndex",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, F().mark((function e() {
								var r, n, o;
								return F().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.getObjectStore("readonly");
										case 2:
											if (r = e.sent, !isFinite(t)) {
												e.next = 6;
												break
											}
											return n = r.get(t), e.abrupt("return", new Promise((function(t, e) {
												n.onsuccess = function() {
													t(n.result)
												}, n.onerror = function(t) {
													e()
												}
											})));
										case 6:
											return o = r.getAll(), e.abrupt("return", new Promise((function(t, e) {
												o.onsuccess = function() {
													t(o.result)
												}, o.onerror = function(t) {
													e()
												}
											})));
										case 8:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "digest",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, F().mark((function e() {
								var r, n, o, i, a;
								return F().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!window) {
												e.next = 21;
												break
											}
											return r = document.createElement("video"), n = document.createElement("canvas"), o = n.getContext("2d"), r.muted = !0, r.src = URL.createObjectURL(t), e.next = 9, r.play();
										case 9:
											if (!isNaN(r.duration)) {
												e.next = 12;
												break
											}
											return e.abrupt("return", !1);
										case 12:
											return r.currentTime = Math.min(r.duration / 2, 1), n.width = Math.min(r.videoWidth, 420), n.height = Math.min(r.videoHeight, 420 * r.videoHeight / r.videoWidth), o.drawImage(r, 0, 0, n.width, n.height), i = n.toDataURL(), a = {
												thumbnail: i,
												resolution: r.videoWidth + "*" + r.videoHeight,
												size: t.size,
												duration: 1e3 * r.duration
											}, URL.revokeObjectURL(r.src), r.src = "", e.abrupt("return", a);
										case 21:
											return e.abrupt("return", !1);
										case 22:
										case "end":
											return e.stop()
									}
								}), e)
							})))
						}
					}], r && Z(e.prototype, r), n && Z(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), t
				}();

				function U(t) {
					return U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, U(t)
				}

				function B() {
					B = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == U(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function z(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== U(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== U(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === U(i) ? i : String(i)), n)
					}
					var o, i
				}

				function V(t, e) {
					return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, V(t, e)
				}

				function q(t) {
					var e = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (t) {
							return !1
						}
					}();
					return function() {
						var r, n = K(t);
						if (e) {
							var o = K(this).constructor;
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments);
						return function(t, e) {
							if (e && ("object" === U(e) || "function" == typeof e)) return e;
							if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
							return function(t) {
								if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return t
							}(t)
						}(this, r)
					}
				}

				function K(t) {
					return K = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					}, K(t)
				}
				var W = function(t) {
					! function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								writable: !0,
								configurable: !0
							}
						}), Object.defineProperty(t, "prototype", {
							writable: !1
						}), e && V(t, e)
					}(i, t);
					var e, r, n, o = q(i);

					function i(t) {
						var e;
						return function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, i), (e = o.call(this)).queue = [], e.isPushDone = !1, e.dirName = (null == t ? void 0 : t.videosDirName) || "videos", e.autoGenerateThumbnail = !1 !== (null == t ? void 0 : t.autoGenerateThumbnail), e.DEBUG_sliceId = 0, e
					}
					return e = i, (r = [{
						key: "initFS",
						value: function() {
							return (0, C.m)(this, void 0, void 0, B().mark((function t() {
								var e, r;
								return B().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (!this.fs) {
												t.next = 2;
												break
											}
											return t.abrupt("return");
										case 2:
											return e = window.requestFileSystem || window.webkitRequestFileSystem, t.next = 5, new Promise((function(t, r) {
												e(window.PERSISTENT, 52428800, (function(e) {
													t(e)
												}), (function(t) {
													r()
												}))
											}));
										case 5:
											r = t.sent, this.fs = r;
										case 7:
										case "end":
											return t.stop()
									}
								}), t, this)
							})))
						}
					}, {
						key: "ready",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, B().mark((function e() {
								var r, n, o, i, a = this;
								return B().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.initFS();
										case 2:
											return e.next = 4, this.createIndex({
												createAt: Date.now(),
												title: t.title,
												status: "ready",
												statusTimestamp: Date.now()
											});
										case 4:
											return r = e.sent, this.indexKey = r, e.next = 8, new Promise((function(t, e) {
												a.fs.root.getDirectory(a.dirName, {
													create: !0
												}, (function(e) {
													t(e)
												}), (function(t) {
													e(t)
												}))
											}));
										case 8:
											return n = e.sent, e.next = 11, new Promise((function(t, e) {
												n.getFile("" + a.indexKey, {
													create: !0
												}, (function(e) {
													t(e)
												}), (function(t) {
													e(t)
												}))
											}));
										case 11:
											return o = e.sent, this.fileEntry = o, e.next = 15, new Promise((function(t, e) {
												o.createWriter((function(e) {
													t(e)
												}), (function(t) {
													e()
												}))
											}));
										case 15:
											return i = e.sent, this.fileWriter = i, this.queue = [], this.isPushDone = !1, e.abrupt("return", r + "");
										case 20:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "push",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, B().mark((function e() {
								return B().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if ("string" != typeof t) {
												e.next = 2;
												break
											}
											return e.abrupt("return", void 0);
										case 2:
											this.queue.push(t), this.isWriting || this.write();
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "write",
						value: function() {
							return (0, C.m)(this, void 0, void 0, B().mark((function t() {
								var e, r = this;
								return B().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											this.isWriting = !0, e = B().mark((function t() {
												var e;
												return B().wrap((function(t) {
													for (;;) switch (t.prev = t.next) {
														case 0:
															return e = r.queue.shift(), r.DEBUG_sliceId++, r.writerPromise = new Promise((function(t, n) {
																r.fileWriter.write(e), r.fileWriter.onerror = function(t) {
																	n()
																}, r.fileWriter.onwriteend = function() {
																	t()
																}
															})), t.next = 6, r.writerPromise;
														case 6:
														case "end":
															return t.stop()
													}
												}), t)
											}));
										case 2:
											if (!(this.queue.length > 0)) {
												t.next = 6;
												break
											}
											return t.delegateYield(e(), "t0", 4);
										case 4:
											t.next = 2;
											break;
										case 6:
											this.isWriting = !1, this.isPushDone && this.handleSuccess();
										case 8:
										case "end":
											return t.stop()
									}
								}), t, this)
							})))
						}
					}, {
						key: "start",
						value: function(t) {
							return this.updateIndex(this.indexKey, {
								key: this.indexKey,
								mimeType: t || "",
								status: "started",
								statusTimestamp: Date.now(),
								isFS: !0,
								fullPath: "/" + this.dirName + "/" + this.indexKey
							}), {
								vid: "" + this.indexKey,
								title: ""
							}
						}
					}, {
						key: "pause",
						value: function() {
							this.updateIndex(this.indexKey, {
								status: "paused",
								statusTimestamp: Date.now()
							})
						}
					}, {
						key: "resume",
						value: function() {
							this.updateIndex(this.indexKey, {
								status: "resumed",
								statusTimestamp: Date.now()
							})
						}
					}, {
						key: "stop",
						value: function(t) {
							var e = t.duration,
								r = t.size;
							return (0, C.m)(this, void 0, void 0, B().mark((function t() {
								var n = this;
								return B().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return this.isPushDone = !0, t.next = 3, this.updateIndex(this.indexKey, {
												duration: e || 0,
												size: r || 0
											});
										case 3:
											return t.abrupt("return", new Promise((function(t) {
												n.stopPromiseResolve = t
											})));
										case 4:
										case "end":
											return t.stop()
									}
								}), t, this)
							})))
						}
					}, {
						key: "cancel",
						value: function() {
							return (0, C.m)(this, void 0, void 0, B().mark((function t() {
								var e = this;
								return B().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.abrupt("return", new Promise((function(t, r) {
												if (!e.fileEntry) return t();
												e.fileEntry.remove((function() {
													t()
												}), (function(t) {
													r()
												}))
											})).then((function() {
												return e.removeIndex(e.indexKey)
											})).then((function() {
												e.clear()
											})));
										case 1:
										case "end":
											return t.stop()
									}
								}), t)
							})))
						}
					}, {
						key: "regenerateThumbnail",
						value: function() {}
					}, {
						key: "handleSuccess",
						value: function() {
							var t = this;
							this.updateIndex(this.indexKey, {
								status: "stopped",
								statusTimestamp: Date.now()
							}).then((function() {
								if (t.autoGenerateThumbnail) return t.generateThumbnail()
							})).then((function(e) {
								if (e) return t.updateIndex(t.indexKey, e)
							})).then((function() {
								t.clear()
							})).then((function() {
								t.stopPromiseResolve && t.stopPromiseResolve()
							}))
						}
					}, {
						key: "generateThumbnail",
						value: function() {
							return (0, C.m)(this, void 0, void 0, B().mark((function t() {
								var e, r = this;
								return B().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.next = 3, new Promise((function(t, e) {
												r.fileEntry.file((function(e) {
													t(e)
												}), (function(t) {
													e()
												}))
											}));
										case 3:
											return e = t.sent, t.abrupt("return", this.digest(e));
										case 5:
										case "end":
											return t.stop()
									}
								}), t, this)
							})))
						}
					}, {
						key: "clear",
						value: function() {
							this.fileWriter = null, this.fileEntry = null
						}
					}]) && z(e.prototype, r), n && z(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), i
				}(G);

				function H(t) {
					return H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, H(t)
				}

				function Y() {
					Y = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == H(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function J(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== H(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== H(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === H(i) ? i : String(i)), n)
					}
					var o, i
				}
				var Q, $, X = function() {
					function t(e) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, t)
					}
					var e, r, n;
					return e = t, (r = [{
						key: "ready",
						value: function() {
							return (0, C.m)(this, void 0, void 0, Y().mark((function t() {
								return Y().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return this.id = "pipe-" + Date.now(), t.abrupt("return", this.id);
										case 2:
										case "end":
											return t.stop()
									}
								}), t, this)
							})))
						}
					}, {
						key: "start",
						value: function() {
							return {
								vid: this.id,
								title: ""
							}
						}
					}, {
						key: "pause",
						value: function() {}
					}, {
						key: "resume",
						value: function() {}
					}, {
						key: "push",
						value: function(t) {
							this.count += 1
						}
					}, {
						key: "stop",
						value: function() {
							return (0, C.m)(this, void 0, void 0, Y().mark((function t() {
								return Y().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											this.onSuccess && this.onSuccess(this.id, {
												vid: this.id,
												title: ""
											});
										case 1:
										case "end":
											return t.stop()
									}
								}), t, this)
							})))
						}
					}, {
						key: "cancel",
						value: function() {
							return (0, C.m)(this, void 0, void 0, Y().mark((function t() {
								return Y().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
										case "end":
											return t.stop()
									}
								}), t)
							})))
						}
					}, {
						key: "getQueueProgress",
						value: function() {
							return {
								finished: this.count,
								current: this.count,
								total: this.count
							}
						}
					}]) && J(e.prototype, r), n && J(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), t
				}();
				! function(t) {
					t.desktop = "desktop", t.tab = "tab", t.camera = "camera"
				}(Q || (Q = {})),
				function(t) {
					t[t.notReady = 0] = "notReady", t[t.ready = 1] = "ready", t[t.waitingAuthorized = 2] = "waitingAuthorized", t[t.recording = 3] = "recording", t[t.paused = 4] = "paused", t[t.connecting = 5] = "connecting", t[t.countdown = 6] = "countdown", t[t.uploading = 7] = "uploading"
				}($ || ($ = {}));
				var tt, et, rt, nt, ot;

				function it(t, e) {
					return function(t) {
						if (Array.isArray(t)) return t
					}(t) || function(t, e) {
						var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
						if (null != r) {
							var n, o, i, a, c = [],
								u = !0,
								s = !1;
							try {
								if (i = (r = r.call(t)).next, 0 === e) {
									if (Object(r) !== r) return;
									u = !1
								} else
									for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
							} catch (t) {
								s = !0, o = t
							} finally {
								try {
									if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
								} finally {
									if (s) throw o
								}
							}
							return c
						}
					}(t, e) || function(t, e) {
						if (!t) return;
						if ("string" == typeof t) return at(t, e);
						var r = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === r && t.constructor && (r = t.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(t);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return at(t, e)
					}(t, e) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function at(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
					return n
				}

				function ct(t, e) {
					var r = it(t, 2),
						n = r[0],
						o = r[1],
						i = it(e, 2),
						a = i[0],
						c = i[1];
					if (n <= a && o <= c) return [n, o];
					var u = Math.min(a / n, c / o);
					return [Math.ceil(u * n), Math.ceil(u * o)]
				}

				function ut(t) {
					return function(t) {
						if (Array.isArray(t)) return st(t)
					}(t) || function(t) {
						if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
					}(t) || function(t, e) {
						if (!t) return;
						if ("string" == typeof t) return st(t, e);
						var r = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === r && t.constructor && (r = t.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(t);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return st(t, e)
					}(t) || function() {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function st(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
					return n
				}

				function lt() {
					lt = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == yt(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function ft() {
					return ft = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
						var n = function(t, e) {
							for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = vt(t)););
							return t
						}(t, e);
						if (n) {
							var o = Object.getOwnPropertyDescriptor(n, e);
							return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
						}
					}, ft.apply(this, arguments)
				}

				function ht(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), Object.defineProperty(t, "prototype", {
						writable: !1
					}), e && dt(t, e)
				}

				function dt(t, e) {
					return dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, dt(t, e)
				}

				function pt(t) {
					var e = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (t) {
							return !1
						}
					}();
					return function() {
						var r, n = vt(t);
						if (e) {
							var o = vt(this).constructor;
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments);
						return function(t, e) {
							if (e && ("object" === yt(e) || "function" == typeof e)) return e;
							if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
							return function(t) {
								if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return t
							}(t)
						}(this, r)
					}
				}

				function vt(t) {
					return vt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					}, vt(t)
				}

				function yt(t) {
					return yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, yt(t)
				}

				function mt(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function gt(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== yt(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== yt(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === yt(i) ? i : String(i)), n)
					}
					var o, i
				}

				function bt(t, e, r) {
					return e && gt(t.prototype, e), r && gt(t, r), Object.defineProperty(t, "prototype", {
						writable: !1
					}), t
				}! function(t) {
					t[t.null = 0] = "null", t[t.ready = 1] = "ready", t[t.start = 2] = "start", t[t.pause = 3] = "pause", t[t.resume = 4] = "resume", t[t.stop = 5] = "stop", t[t.cancel = 6] = "cancel", t[t.abort_cancel = 7] = "abort_cancel", t[t.abort_stop = 8] = "abort_stop", t[t.abort = 9] = "abort", t[t.processing_success = 10] = "processing_success", t[t.processing_error = 11] = "processing_error"
				}(tt || (tt = {})),
				function(t) {
					t[t.unready = 0] = "unready", t[t.unauthorized = 1] = "unauthorized", t[t.forbidden = 2] = "forbidden", t[t.authorized = 3] = "authorized", t[t.failed = 4] = "failed"
				}(et || (et = {})),
				function(t) {
					t.smartKeyToggleTime = "smart_key_toggle_time", t.focusingWindowIdList = "focusing_window_id_list"
				}(rt || (rt = {}));
				var wt, xt = function() {
						function t(e) {
							mt(this, t), this.inputStream = e.stream, this.crop = e.crop
						}
						return bt(t, [{
							key: "stop",
							value: function() {
								this.outputStream && (this.outputStream.getTracks().forEach((function(t) {
									return t.stop()
								})), this.outputStream = null), this.inputStream && (this.inputStream.getTracks().forEach((function(t) {
									return t.stop()
								})), this.inputStream = null)
							}
						}]), t
					}(),
					kt = function(t) {
						ht(r, t);
						var e = pt(r);

						function r(t) {
							var n;
							return mt(this, r), (n = e.call(this, t)).setTimeout = t.setTimeout || window.setTimeout, n.clearTimeout = t.clearTimeout || window.clearTimeout, n.setTimeout = n.setTimeout.bind(null), n.clearTimeout = n.clearTimeout.bind(null), n.timeout = isFinite(t.timeout) ? t.timeout : 34, n
						}
						return bt(r, [{
							key: "absCrop",
							value: function(t) {
								return (0, C.m)(this, void 0, void 0, lt().mark((function e() {
									var r, n, o;
									return lt().wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												if (!this.imageCapture) {
													e.next = 6;
													break
												}
												return e.next = 3, this.imageCapture.grabFrame();
											case 3:
												return r = e.sent, n = r.width, o = r.height, e.abrupt("return", jt(t, {
													width: n,
													height: o
												}));
											case 6:
												return e.abrupt("return", jt(t));
											case 7:
											case "end":
												return e.stop()
										}
									}), e, this)
								})))
							}
						}, {
							key: "prepare",
							value: function() {
								return (0, C.m)(this, void 0, void 0, lt().mark((function t() {
									var e, r, n, o, i = this;
									return lt().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												if (!this.inputStream) {
													t.next = 18;
													break
												}
												return e = this.inputStream.getVideoTracks()[0], this.imageCapture = new ImageCapture(e), e.addEventListener("ended", (function() {
													return i.stop()
												})), this.canvas = document.createElement("canvas"), t.next = 7, this.absCrop(this.crop);
											case 7:
												return r = t.sent, this.canvas.width = r.w, this.canvas.height = r.h, It(r.w, r.h) && (this.canvas.height = Math.round(9 * r.w / 16)), this.ctx = this.canvas.getContext("2d"), this.canvasStream = this.canvas.captureStream(), n = this.inputStream.getAudioTracks(), o = this.canvasStream.getVideoTracks(), this.outputStream = new MediaStream([].concat(ut(o), ut(n))), this.outputStream.getVideoTracks().forEach((function(t) {
													return t.addEventListener("ended", (function() {
														return i.stop()
													}))
												})), t.abrupt("return");
											case 18:
											case "end":
												return t.stop()
										}
									}), t, this)
								})))
							}
						}, {
							key: "render",
							value: function() {
								return (0, C.m)(this, void 0, void 0, lt().mark((function t() {
									var e, r, n, o, i, a, c, u, s = this;
									return lt().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												return e = this.ctx, r = this.imageCapture, t.next = 4, this.absCrop(this.crop);
											case 4:
												n = t.sent, o = n.x, i = n.y, a = n.w, c = n.h, 0, u = function t() {
													r.grabFrame().then((function(t) {
														e.drawImage(t, o, i, a, c, 0, Math.round((s.canvas.height - c) / 2), a, c)
													})).catch((function(t) {})), s.timeoutId = s.setTimeout(t, s.timeout)
												}, this.clearTimeout(this.timeoutId), u();
											case 13:
											case "end":
												return t.stop()
										}
									}), t, this)
								})))
							}
						}, {
							key: "stop",
							value: function() {
								ft(vt(r.prototype), "stop", this).call(this), clearTimeout(this.timeoutId), this.canvas = null, this.imageCapture = null, this.ctx = null
							}
						}, {
							key: "cropStream",
							value: function(t) {
								return (0, C.m)(this, void 0, void 0, lt().mark((function e() {
									return lt().wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												return t && (this.crop = t), e.next = 3, this.prepare();
											case 3:
												this.render();
											case 4:
											case "end":
												return e.stop()
										}
									}), e, this)
								})))
							}
						}]), r
					}(xt),
					St = "undefined" != typeof MediaStreamTrackProcessor && "undefined" != typeof MediaStreamTrackGenerator,
					Et = !(null === (ot = null === (nt = null === globalThis || void 0 === globalThis ? void 0 : globalThis.location) || void 0 === nt ? void 0 : nt.href) || void 0 === ot ? void 0 : ot.match(/^https?:\/\//)),
					Ot = St && Et;
				Ot && (wt = new Worker("crop.worker.js"));
				var Tt = function(t) {
					ht(r, t);
					var e = pt(r);

					function r(t) {
						return mt(this, r), e.call(this, t)
					}
					return bt(r, [{
						key: "cropStream",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, lt().mark((function e() {
								var r, n, o, i, a, c, u, s, l, f, h, d = this;
								return lt().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t && (this.crop = t), !this.inputStream) {
												e.next = 15;
												break
											}
											return r = this.inputStream.getVideoTracks()[0], n = new MediaStreamTrackProcessor({
												track: r
											}), o = new MediaStreamTrackGenerator({
												kind: "video"
											}), i = jt(this.crop), a = i.x, c = i.y, u = i.w, s = i.h, l = n.readable, f = o.writable, wt.postMessage({
												action: "crop",
												readable: l,
												writable: f,
												visibleRect: {
													x: a,
													y: c,
													width: u,
													height: s
												}
											}, [l, f]), e.next = 11, new Promise((function(t) {
												wt.onmessage = function(e) {
													"crop-worker" === e.data.action && t(e.data)
												}
											}));
										case 11:
											r.addEventListener("ended", (function() {
												return d.stop()
											})), h = this.inputStream.getAudioTracks(), this.outputStream = new MediaStream([o].concat(ut(h))), this.outputStream.getVideoTracks().forEach((function(t) {
												return t.addEventListener("ended", (function() {
													return d.stop()
												}))
											}));
										case 15:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}]), r
				}(xt);

				function jt(t, e) {
					var r = t.x,
						n = t.y,
						o = t.w,
						i = t.h,
						a = t.ww,
						c = t.wh;
					return e && (a = e.width, c = e.height), r < 1 && n < 1 && o <= 1 && i <= 1 && (r = Math.round(r * a), n = Math.round(n * c), o = Math.round(o * a), i = Math.round(i * c)), {
						x: r = 1 & r ? r + 1 : r,
						y: n = 1 & n ? n + 1 : n,
						w: o = 1 & o ? o - 3 : o - 2,
						h: i = 1 & i ? i - 3 : i - 2,
						ww: a,
						wh: c
					}
				}

				function It(t, e) {
					return t > 475 && e < 120
				}
				var Lt = function() {
					function t(e) {
						mt(this, t);
						var r = jt(e.crop);
						It(r.w, r.h) ? this.cropInstance = new kt(e) : this.cropInstance = new t.CropClass(e)
					}
					return bt(t, [{
						key: "output",
						get: function() {
							return this.cropInstance.outputStream
						}
					}, {
						key: "cropStream",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, lt().mark((function e() {
								return lt().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.cropInstance.cropStream(t));
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "stop",
						value: function() {
							this.cropInstance.stop()
						}
					}]), t
				}();

				function Pt(t, e) {
					return function(t) {
						if (Array.isArray(t)) return t
					}(t) || function(t, e) {
						var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
						if (null != r) {
							var n, o, i, a, c = [],
								u = !0,
								s = !1;
							try {
								if (i = (r = r.call(t)).next, 0 === e) {
									if (Object(r) !== r) return;
									u = !1
								} else
									for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
							} catch (t) {
								s = !0, o = t
							} finally {
								try {
									if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
								} finally {
									if (s) throw o
								}
							}
							return c
						}
					}(t, e) || function(t, e) {
						if (!t) return;
						if ("string" == typeof t) return _t(t, e);
						var r = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === r && t.constructor && (r = t.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(t);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _t(t, e)
					}(t, e) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function _t(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
					return n
				}

				function Ct() {
					Ct = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == Dt(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function Dt(t) {
					return Dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, Dt(t)
				}

				function Rt(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== Dt(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== Dt(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === Dt(i) ? i : String(i)), n)
					}
					var o, i
				}
				Lt.CropClass = Ot ? Tt : kt;
				var Mt, At = function() {
					function t(e) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, t), this.switchMic = this.switchMic.bind(this), this.setTimeout = (null == e ? void 0 : e.setTimeout) || window.setTimeout, this.clearTimeout = (null == e ? void 0 : e.clearTimeout) || window.clearTimeout, this.setTimeout = this.setTimeout.bind(null), this.clearTimeout = this.clearTimeout.bind(null)
					}
					var e, r, n;
					return e = t, r = [{
						key: "captureDesktop",
						value: function(e) {
							var r, n;
							return (0, C.m)(this, void 0, void 0, Ct().mark((function o() {
								var i, a, c, u, s, l, f, h, d, p, v = this;
								return Ct().wrap((function(o) {
									for (;;) switch (o.prev = o.next) {
										case 0:
											if (this.desktopCaptureOptions = e, a = (i = e || {}).timeout, c = i.sources, u = i.constraints, s = i.audio, l = i.video, f = e.streamId) {
												o.next = 7;
												break
											}
											return o.next = 6, new Promise((function(t, e) {
												v.desktopStreamIdResolve = t, v.desktopMediaRequestId = chrome.desktopCapture.chooseDesktopMedia(c || ["screen", "window", "tab", "audio"], t), a > 0 && v.setTimeout((function() {
													chrome.desktopCapture.cancelChooseDesktopMedia(v.desktopMediaRequestId), v.desktopMediaRequestId = -1, e()
												}), a)
											}));
										case 6:
											f = o.sent;
										case 7:
											if (f) {
												o.next = 11;
												break
											}
											throw new DOMException("Invalid state", "NotAllowedError");
										case 11:
											return h = !1 !== s && Object.assign(Object.assign({}, "object" == Dt(null == u ? void 0 : u.audio) ? u.audio : {}), {
												mandatory: Object.assign(Object.assign({}, "object" == Dt(null == u ? void 0 : u.audio) ? null === (r = u.audio) || void 0 === r ? void 0 : r.mandatory : {}), {
													chromeMediaSource: "desktop",
													chromeMediaSourceId: f
												})
											}), d = !1 !== l && Object.assign(Object.assign({}, "object" == Dt(null == u ? void 0 : u.video) ? u.video : {}), {
												mandatory: Object.assign(Object.assign({}, "object" == Dt(null == u ? void 0 : u.video) ? null === (n = u.video) || void 0 === n ? void 0 : n.mandatory : {}), {
													chromeMediaSource: "desktop",
													chromeMediaSourceId: f
												})
											}), p = Object.assign(Object.assign({}, u), {
												audio: h,
												video: d
											}), t.stopStream(this._stream), o.next = 17, navigator.mediaDevices.getUserMedia(p);
										case 17:
											return this._stream = o.sent, this.desktopMediaRequestId = -1, o.abrupt("return", this._stream);
										case 21:
										case "end":
											return o.stop()
									}
								}), o, this)
							})))
						}
					}, {
						key: "reopenDesktopMediaPicker",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
							return (0, C.m)(this, void 0, void 0, Ct().mark((function e() {
								var r, n, o, i = this;
								return Ct().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return this.desktopMediaRequestId && chrome.desktopCapture.cancelChooseDesktopMedia(this.desktopMediaRequestId), r = this.desktopCaptureOptions || {}, n = r.sources, o = this, e.next = 5, new Promise((function(e, r) {
												i.desktopMediaRequestId = chrome.desktopCapture.chooseDesktopMedia(n || ["screen", "window", "tab", "audio"], (function(t) {
													e(t), "function" == typeof o.desktopStreamIdResolve && o.desktopStreamIdResolve(t)
												})), t > 0 && i.setTimeout((function() {
													chrome.desktopCapture.cancelChooseDesktopMedia(i.desktopMediaRequestId), i.desktopMediaRequestId = -1, r()
												}))
											}));
										case 5:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "captureTabMedia",
						value: function(t) {
							var e, r, n;
							return (0, C.m)(this, void 0, void 0, Ct().mark((function o() {
								var i, a, c, u, s, l, f, h, d, p, v, y, m, g, b, w, x;
								return Ct().wrap((function(o) {
									for (;;) switch (o.prev = o.next) {
										case 0:
											if (this.stopCapture(), a = (i = t || {}).tabId, c = i.captureOptions, u = i.noAudioPatch, s = i.dimension, l = {
													width: 1920,
													height: 1080
												}, !(a && (null === chrome || void 0 === chrome ? void 0 : chrome.tabs) && s)) {
												o.next = 10;
												break
											}
											return f = null === window || void 0 === window ? void 0 : window.devicePixelRatio, h = isFinite(f) ? f : 1, o.next = 8, new Promise((function(t) {
												chrome.tabs.get(a, (function(e) {
													return t(e)
												}))
											}));
										case 8:
											d = o.sent, l = {
												width: (null !== (e = null == d ? void 0 : d.width) && void 0 !== e ? e : 1920) * h,
												height: (null !== (r = null == d ? void 0 : d.height) && void 0 !== r ? r : 1080) * h
											};
										case 10:
											return v = (p = s || {
												maxWidth: 1920,
												maxHeight: 1080
											}).maxWidth, y = p.maxHeight, m = ct([l.width, l.height], [v, y]), g = Pt(m, 2), b = g[0], w = g[1], x = Object.assign(Object.assign({
												audio: !0,
												video: !0
											}, c), {
												videoConstraints: Object.assign(Object.assign({}, null == c ? void 0 : c.videoConstraints), {
													mandatory: Object.assign(Object.assign(Object.assign({}, null === (n = null == c ? void 0 : c.videoConstraints) || void 0 === n ? void 0 : n.mandatory), {
														chromeMediaSource: "tab"
													}), s ? {
														maxWidth: b,
														maxHeight: w
													} : {})
												})
											}), o.next = 16, new Promise((function(t) {
												chrome.tabCapture.capture(x, (function(e) {
													t(e)
												}))
											}));
										case 16:
											return this._stream = o.sent, !0 !== u && this.patchTabCapture(), o.abrupt("return", this._stream);
										case 19:
										case "end":
											return o.stop()
									}
								}), o, this)
							})))
						}
					}, {
						key: "captureTab",
						value: function(t) {
							var e, r;
							return (0, C.m)(this, void 0, void 0, Ct().mark((function n() {
								var o, i, a, c, u, s, l, f, h, d, p, v;
								return Ct().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											if (i = (o = t || {}).targetTabId, a = o.consumerTabId, c = o.captureOptions, u = o.noAudioPatch, s = t.streamId) {
												n.next = 6;
												break
											}
											return n.next = 5, new Promise((function(t) {
												chrome.tabCapture.getMediaStreamId({
													targetTabId: i,
													consumerTabId: a
												}, (function(e) {
													t(e)
												}))
											}));
										case 5:
											s = n.sent;
										case 6:
											return f = (l = c || {}).audio, h = l.video, d = Object.assign(Object.assign({}, null == c ? void 0 : c.audioConstraints), {
												mandatory: Object.assign(Object.assign({}, null === (e = null == c ? void 0 : c.audioConstraints) || void 0 === e ? void 0 : e.mandatory), {
													chromeMediaSource: "tab",
													chromeMediaSourceId: s
												})
											}), p = Object.assign(Object.assign({}, null == c ? void 0 : c.videoConstraints), {
												mandatory: Object.assign(Object.assign({}, null === (r = null == c ? void 0 : c.videoConstraints) || void 0 === r ? void 0 : r.mandatory), {
													chromeMediaSource: "tab",
													chromeMediaSourceId: s
												})
											}), v = {
												audio: 0 != f && d,
												video: 0 != h && p
											}, n.next = 12, window.navigator.mediaDevices.getUserMedia(v);
										case 12:
											return this._stream = n.sent, !0 !== u && this.patchTabCapture(), n.abrupt("return", this._stream);
										case 15:
										case "end":
											return n.stop()
									}
								}), n, this)
							})))
						}
					}, {
						key: "patchTabCapture",
						value: function() {
							var t;
							if ((null === (t = this._stream.getAudioTracks()) || void 0 === t ? void 0 : t.length) > 0) {
								var e = new AudioContext;
								e.createMediaStreamSource(this._stream).connect(e.destination), this._stream.getAudioTracks().forEach((function(t) {
									t.addEventListener("ended", (function() {
										"closed" !== e.state && e.close()
									}))
								}))
							}
						}
					}, {
						key: "getDisplayMedia",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, Ct().mark((function e() {
								return Ct().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return this.stopCapture(), t = Object.assign(Object.assign({
												audio: !0
											}, t), {
												video: Object.assign({
													displaySurface: "monitor"
												}, null == t ? void 0 : t.video)
											}), e.next = 4, window.navigator.mediaDevices.getDisplayMedia(t);
										case 4:
											return this._stream = e.sent, e.abrupt("return", this._stream);
										case 8:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "getUserMedia",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, Ct().mark((function e() {
								return Ct().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return this.stopCapture(), t = Object.assign({
												audio: !0,
												video: !0
											}, t), e.next = 4, navigator.mediaDevices.getUserMedia(t);
										case 4:
											return this._stream = e.sent, e.abrupt("return", this._stream);
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "stream",
						get: function() {
							return this._stream
						},
						set: function(t) {
							this._stream = t
						}
					}, {
						key: "prepareAudioContext",
						value: function() {
							var t = this;
							if (!this.audioContext && this._stream) {
								this.audioContext = new AudioContext, this.audioDestination = this.audioContext.createMediaStreamDestination(), (this._stream.getAudioTracks().length > 0 ? this.audioContext.createMediaStreamSource(this._stream) : this.audioContext.createMediaElementSource(document.createElement("audio"))).connect(this.audioDestination);
								var e = this.audioDestination.stream.getAudioTracks()[0];
								this._stream.addTrack(e), this._stream.getAudioTracks().forEach((function(r) {
									r !== e && (t._stream.removeTrack(r), t._stream.addTrack(r))
								}))
							}
						}
					}, {
						key: "turnOnMic",
						value: function(e) {
							return (0, C.m)(this, void 0, void 0, Ct().mark((function r() {
								var n;
								return Ct().wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											return t.stopStream(this.micStream), r.prev = 1, r.next = 4, window.navigator.mediaDevices.getUserMedia({
												audio: !e || {
													deviceId: e
												},
												video: !1
											});
										case 4:
											this.micStream = r.sent, r.next = 10;
											break;
										case 7:
											return r.prev = 7, r.t0 = r.catch(1), r.abrupt("return", !1);
										case 10:
											return this.turnOffMicTime = 0, (n = this.micStream.getAudioTracks()[0]) && (n.onended = this.switchMic), this.prepareAudioContext(), this.micAudioSource = this.audioContext.createMediaStreamSource(this.micStream), this.micAudioSource.connect(this.audioDestination), r.abrupt("return", !0);
										case 19:
										case "end":
											return r.stop()
									}
								}), r, this, [
									[1, 7]
								])
							})))
						}
					}, {
						key: "turnOffMic",
						value: function() {
							return (0, C.m)(this, void 0, void 0, Ct().mark((function e() {
								return Ct().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											this.turnOffMicTime = Date.now(), this.micAudioSource && (t.stopStream(this.micStream), this.micAudioSource = null, this.micStream = null);
										case 2:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "switchMic",
						value: function() {
							Date.now() - this.turnOffMicTime > 200 && (this._stream.removeTrack(this.micStream.getAudioTracks()[0]), this.turnOnMic())
						}
					}, {
						key: "cropVideoTrack",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, Ct().mark((function e() {
								return Ct().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!this._stream || !this.cropStream) {
												e.next = 3;
												break
											}
											return e.abrupt("return", this.cropStream.cropStream(t));
										case 3:
											if (!this._stream) {
												e.next = 8;
												break
											}
											return this.cropStream = new Lt({
												stream: this._stream,
												crop: t,
												setTimeout: this.setTimeout,
												clearTimeout: this.clearTimeout
											}), e.next = 7, this.cropStream.cropStream();
										case 7:
											this._stream = this.cropStream.output;
										case 8:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "stopCapture",
						value: function() {
							this._stream && t.stopStream(this._stream), this.desktopMediaRequestId > 0 && chrome.desktopCapture.cancelChooseDesktopMedia(this.desktopMediaRequestId), this.micStream && (this.turnOffMicTime = Date.now(), t.stopStream(this.micStream)), this.micAudioSource && (this.micAudioSource = null), this.audioContext && ("closed" !== this.audioContext.state && this.audioContext.close(), this.audioContext = null, this.audioDestination = null), this.cropStream && (this.cropStream.stop(), this.cropStream = null)
						}
					}], n = [{
						key: "isCaptureDesktopSupported",
						value: function() {
							return !!(window.chrome && window.chrome.desktopCapture && window.chrome.desktopCapture.chooseDesktopMedia)
						}
					}, {
						key: "stopStream",
						value: function(t) {
							t && t.getTracks && t.getTracks().forEach((function(t) {
								return t.stop()
							}))
						}
					}], r && Rt(e.prototype, r), n && Rt(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), t
				}();

				function Nt(t) {
					return Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, Nt(t)
				}

				function Ft() {
					Ft = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == Nt(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}! function(t) {
					t[t.touch = 0] = "touch", t[t.syncRecordingStatus = 1] = "syncRecordingStatus", t[t.requestRecordingStatus = 2] = "requestRecordingStatus", t[t.readyRecording = 3] = "readyRecording", t[t.startRecording = 4] = "startRecording", t[t.pauseRecording = 5] = "pauseRecording", t[t.resumeRecording = 6] = "resumeRecording", t[t.stopRecording = 7] = "stopRecording", t[t.cancelRecording = 8] = "cancelRecording", t[t.showCamera = 9] = "showCamera", t[t.showCameraPictureInPicture = 10] = "showCameraPictureInPicture", t[t.tabShowCamera = 11] = "tabShowCamera", t[t.tabCloseCamera = 12] = "tabCloseCamera", t[t.syncCameraStatus = 13] = "syncCameraStatus", t[t.showModalRecorder = 14] = "showModalRecorder", t[t.closeModalRecorder = 15] = "closeModalRecorder", t[t.requestSetting = 16] = "requestSetting", t[t.syncSetting = 17] = "syncSetting", t[t.requestReadyRecording = 18] = "requestReadyRecording", t[t.syncAuthorizationStatus = 19] = "syncAuthorizationStatus", t[t.windowsFocusChanged = 20] = "windowsFocusChanged", t[t.requestWindowsFocusingList = 21] = "requestWindowsFocusingList", t[t.reopenDesktopMediaPicker = 22] = "reopenDesktopMediaPicker", t[t.removeTask = 23] = "removeTask", t[t.reportActivity = 24] = "reportActivity", t[t.turnMicTo = 25] = "turnMicTo", t[t.turnCameraTo = 26] = "turnCameraTo", t[t.recordEvent = 27] = "recordEvent", t[t.TEST_delay = 28] = "TEST_delay"
				}(Mt || (Mt = {}));
				var Zt = function(t) {
						return "function" == typeof t
					},
					Gt = function(t) {
						return "boolean" == typeof t
					},
					Ut = function(t) {
						return t instanceof Blob
					},
					Bt = function(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.setTimeout;
						return new Promise((function(r) {
							e((function() {
								r()
							}), t)
						}))
					};
				var zt = function() {
					var t = this,
						e = function e(r, n) {
							var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
							return (0, C.m)(t, void 0, void 0, Ft().mark((function t() {
								var i, a, c, u, s, l, f, h, d, p, v, y = this;
								return Ft().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (i = o.retry, a = void 0 !== i && i, c = o.timeout, u = void 0 === c ? 0 : c, s = e.beforeRequest(r, n = n || {}), r = s.info, n = s.init, u > 0 && (f = new AbortController, n.signal = f.signal, l = setTimeout((function() {
													f.abort()
												}), u)), a) {
												t.next = 14;
												break
											}
											return t.next = 9, fetch(r, n);
										case 9:
											d = t.sent, l && clearTimeout(l), h = e.beforeResponse(d), t.next = 19;
											break;
										case 14:
											return p = void 0, v = void 0, Gt(a) || (p = a.wait, v = a.times), t.next = 19, qt((function(t) {
												return (0, C.m)(y, void 0, void 0, Ft().mark((function o() {
													var i;
													return Ft().wrap((function(o) {
														for (;;) switch (o.prev = o.next) {
															case 0:
																return o.prev = 0, l && clearTimeout(l), o.next = 4, fetch(r, n);
															case 4:
																i = o.sent, h = e.beforeResponse(i), o.next = 14;
																break;
															case 8:
																if (o.prev = 8, o.t0 = o.catch(0), l && clearTimeout(l), 0 !== t) {
																	o.next = 13;
																	break
																}
																throw o.t0;
															case 13:
																return o.abrupt("return", !1);
															case 14:
																return o.abrupt("return", !0);
															case 15:
															case "end":
																return o.stop()
														}
													}), o, null, [
														[0, 8]
													])
												})))
											}), p, v);
										case 19:
											return t.abrupt("return", h);
										case 20:
										case "end":
											return t.stop()
									}
								}), t)
							})))
						};
					e.beforeRequest = function(t, e) {
						return {
							info: t,
							init: e
						}
					}, e.beforeResponse = function(t) {
						if (!t.ok) throw new Error("Network response was not OK");
						return t.json()
					}, e.meta = {
						token: ""
					};
					var r = function(t) {
						return function(r, n, o) {
							return (n = n || {}).method = t.toUpperCase(), e(r, n, o)
						}
					};
					return e.get = r("get"), e.post = r("post"), e.put = r("put"), e.delete = r("delete"), e.update = r("update"), e
				}();

				function Vt(t, e, r) {
					var n = t[e];
					Object.defineProperty(t, e, {
						get: function() {
							return n
						},
						set: function(t) {
							var e = n;
							n = t, e !== t && r(t, e)
						}
					})
				}

				function qt(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
					return (0, C.m)(this, void 0, void 0, Ft().mark((function n() {
						var o, i, a;
						return Ft().wrap((function(n) {
							for (;;) switch (n.prev = n.next) {
								case 0:
									o = 0, i = 0, a = 0;
								case 3:
									return n.next = 6, t(r - o);
								case 6:
									if (!n.sent) {
										n.next = 9;
										break
									}
									return n.abrupt("return");
								case 9:
									if (o++, a = Zt(e) ? e(i, o) : e, i = a, !(a < 0 || r >= 0 && o > r)) {
										n.next = 14;
										break
									}
									return n.abrupt("return");
								case 14:
									return n.next = 16, Bt(a);
								case 16:
									n.next = 3;
									break;
								case 18:
								case "end":
									return n.stop()
							}
						}), n)
					})))
				}
				zt.beforeRequest = function(t, e) {
					return zt.meta.token && (e.headers = Object.assign({
						Authorization: zt.meta.token
					}, e.headers || {})), {
						info: t,
						init: e
					}
				};
				Math.pow(2, 31);

				function Kt(t) {
					return Kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, Kt(t)
				}

				function Wt(t, e) {
					return function(t) {
						if (Array.isArray(t)) return t
					}(t) || function(t, e) {
						var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
						if (null != r) {
							var n, o, i, a, c = [],
								u = !0,
								s = !1;
							try {
								if (i = (r = r.call(t)).next, 0 === e) {
									if (Object(r) !== r) return;
									u = !1
								} else
									for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
							} catch (t) {
								s = !0, o = t
							} finally {
								try {
									if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
								} finally {
									if (s) throw o
								}
							}
							return c
						}
					}(t, e) || function(t, e) {
						if (!t) return;
						if ("string" == typeof t) return Ht(t, e);
						var r = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === r && t.constructor && (r = t.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(t);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ht(t, e)
					}(t, e) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Ht(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
					return n
				}

				function Yt(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== Kt(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== Kt(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === Kt(i) ? i : String(i)), n)
					}
					var o, i
				}
				var Jt = /^video\/mp4;?\s*(codecs[=:][(h264)|(h.264)].*)?$/,
					Qt = ["video/webm;codecs=h264,opus", "video/mp4;codecs:h.264,opus"],
					$t = function() {
						function t(e, r, n) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, t), this.setTimeout = (null == n ? void 0 : n.setTimeout) || window.setTimeout, this.clearTimeout = (null == n ? void 0 : n.clearTimeout) || window.clearTimeout, this.handleAbort = this.handleAbort.bind(this), this.handleDataAvailable = this.handleDataAvailable.bind(this), this.handleRemuxerDataAvailable = this.handleRemuxerDataAvailable.bind(this), this.handleError = this.handleError.bind(this), this.setTimeout = this.setTimeout.bind(null), this.clearTimeout = this.clearTimeout.bind(null), this.timeSlice = null == n ? void 0 : n.timeSlice, this.safariTimeslicePatch = !0 === (null == n ? void 0 : n.safariTimeslicePatch), this.noFragmentedMp4 = !0 === (null == n ? void 0 : n.noFragmentedMp4), this.noWasmMuxer = !0 === (null == n ? void 0 : n.noWasmMuxer);
							var o = Wt(this.getMimeType(null == r ? void 0 : r.mimeType, null == n ? void 0 : n.fallbackMimeTypes), 2),
								i = o[0],
								a = o[1];
							this.mimeType = i, this.realMimeType = a, this.stream = e;
							var c = Object.assign(Object.assign({}, r), {
								mimeType: a
							});
							this.mediaRecorder = new MediaRecorder(e, c), this.hookup()
						}
						var e, r, n;
						return e = t, n = [{
							key: "isTypeSupported",
							value: function(t) {
								var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
									r = window.Module;
								if (!e && (null == r ? void 0 : r.inited)) {
									var n = Jt.test(t),
										o = Qt.find((function(t) {
											return MediaRecorder.isTypeSupported(t)
										}));
									if (n && o) return !0
								}
								return MediaRecorder.isTypeSupported(t)
							}
						}], (r = [{
							key: "hookup",
							value: function() {
								var t = this;
								this.isHookup = !0, this.countedDuration = 0, this.size = 0, this.isRecording = !1, this.lastSliceCrash = !1, this.gotLastSlice = null, this.gotLastRemuxerSlice = null, this.mediaRecorder.ondataavailable = this.handleDataAvailable, this.mediaRecorder.onstop = this.handleAbort, this.mediaRecorder.onerror = this.handleError, this.stream.getVideoTracks().forEach((function(e) {
									return e.addEventListener("ended", t.handleAbort)
								}))
							}
						}, {
							key: "unHook",
							value: function() {
								var t = this;
								this.isHookup = !1, this.mediaRecorder.ondataavailable = null, this.mediaRecorder.onstop = null, this.mediaRecorder.onerror = null, this.stream && this.stream.getVideoTracks().forEach((function(e) {
									return e.removeEventListener("ended", t.handleAbort)
								}))
							}
						}, {
							key: "getMimeType",
							value: function(t, e) {
								var r = [];
								"string" == typeof t && r.push(t), e && e.forEach((function(t) {
									return r.push(t)
								})), 0 === r.length && r.push(""), t = r[0];
								var n = window.Module;
								if (!this.noWasmMuxer && (null == n ? void 0 : n.inited)) {
									var o = r.findIndex((function(t) {
											return MediaRecorder.isTypeSupported(t)
										})),
										i = r.findIndex((function(t) {
											return Jt.test(t)
										})),
										a = Qt.find((function(t) {
											return MediaRecorder.isTypeSupported(t)
										}));
									if (-1 !== i && (-1 === o || o > i) && a) return this.wasmMuxer = !0, this.muxerInit(), [r[i], a];
									if (-1 !== o) {
										var c = r[o];
										return [c, c]
									}
								}
								return [t, t]
							}
						}, {
							key: "muxerInit",
							value: function() {
								var t = this.noFragmentedMp4 ? 0 : 1,
									e = window.Module;
								e._mp4_muxer_close(1), e._mp4_muxer_create(0, t, 0, 3), window.muxer_data_out = this.handleRemuxerDataAvailable
							}
						}, {
							key: "start",
							value: function(t) {
								if (this.isHookup || this.hookup(), this.gotLastSlicePromise = null, "inactive" === this.mediaRecorder.state) {
									void 0 === t && (t = this.timeSlice), this.mediaRecorder.start(t > 0 ? t : void 0);
									var e = Date.now();
									return this.startTime = e, this.resumeTime = this.startTime, this.isRecording = !0, this.startTime
								}
							}
						}, {
							key: "pause",
							value: function() {
								if ("recording" === this.mediaRecorder.state) {
									this.mediaRecorder.pause();
									var t = Date.now();
									return this.countedDuration = this.countedDuration + t - this.resumeTime, this.countedDuration
								}
							}
						}, {
							key: "resume",
							value: function() {
								if ("paused" === this.mediaRecorder.state) {
									this.mediaRecorder.resume();
									var t = Date.now();
									return this.resumeTime = t, t
								}
							}
						}, {
							key: "stop",
							value: function() {
								var t = this.mediaRecorder.state,
									e = Date.now();
								"recording" == t && (this.countedDuration += e - this.resumeTime), "recording" != t && "paused" != t || (this.mediaRecorder.stop(), this.isRecording = !1, this.awaitDataAvailable(), this.stopTime = e)
							}
						}, {
							key: "cancel",
							value: function() {
								this.unHook();
								var t = this.mediaRecorder.state;
								if (["recording", "paused"].includes(t)) {
									this.isRecording = !1, this.mediaRecorder.stop();
									var e = Date.now();
									this.stopTime = e
								}
								var r = window.Module;
								this.wasmMuxer && r && r._mp4_muxer_close(1)
							}
						}, {
							key: "handleAbort",
							value: function(t) {
								var e = this.countedDuration;
								!0 === this.isRecording && (this.awaitDataAvailable(), this.isRecording = !1, this.stopTime = Date.now(), e = this.countedDuration + this.stopTime - this.resumeTime);
								try {
									this.onAbort && this.onAbort(e, t)
								} catch (t) {}
							}
						}, {
							key: "awaitDataAvailable",
							value: function() {
								var t = this;
								if (!this.gotLastSlicePromise) {
									var e = window.Module;
									if (this.gotLastSlicePromise = new Promise((function(e) {
											t.setTimeout((function() {
												return e()
											}), 1e3), t.gotLastSlice = e
										})), this.wasmMuxer) return this.gotLastRemuxerSlicePromise = new Promise((function(e) {
										t.setTimeout((function() {
											return e()
										}), 1e4), t.gotLastRemuxerSlice = e
									})), this.gotLastSlicePromise.then((function() {
										e._mp4_muxer_close(1)
									})), void this.gotLastRemuxerSlicePromise.then((function() {
										t.onAllDataAvailable && t.onAllDataAvailable()
									}));
									this.gotLastSlicePromise.then((function() {
										t.onAllDataAvailable && t.onAllDataAvailable()
									}))
								}
							}
						}, {
							key: "handleDataAvailable",
							value: function(t) {
								var e = this;
								this.size = this.size + t.data.size;
								try {
									this.onRawDataAvailable && this.onRawDataAvailable(t)
								} catch (t) {}
								if (this.gotLastSlice && this.gotLastSlice(), this.safariTimeslicePatch) {
									if (0 === t.data.size) return void(this.lastSliceCrash = !0);
									if (!0 === this.lastSliceCrash) return void(this.lastSliceCrash = !1)
								}
								if (this.wasmMuxer) {
									var r = window.Module,
										n = new FileReader;
									return n.readAsArrayBuffer(t.data), void(n.onload = function() {
										var t = new Uint8Array(n.result),
											o = r._malloc(t.length);
										r.HEAPU8.set(t, o), r._mp4_muxer_put_media(o, t.length) < 0 && r._free(o), e.gotLastRemuxerSlice && e.setTimeout((function() {
											r._mp4_muxer_close(1)
										}), 0)
									})
								}
								try {
									this.ondataavailable && this.ondataavailable(t)
								} catch (t) {}
							}
						}, {
							key: "handleRemuxerDataAvailable",
							value: function(t) {
								t.type;
								var e = t.data,
									r = t.flag,
									n = (t.duration, new Blob([e]));
								try {
									var o = new BlobEvent("dataavailable", {
										data: n
									});
									this.ondataavailable && this.ondataavailable(o)
								} catch (t) {}
								1 === r && this.gotLastRemuxerSlice && this.gotLastRemuxerSlice()
							}
						}, {
							key: "handleError",
							value: function(t) {}
						}, {
							key: "duration",
							get: function() {
								var t = this.mediaRecorder.state;
								return "paused" == t ? this.countedDuration : "recording" == t ? this.countedDuration + Date.now() - this.resumeTime : "inactive" == t && this.countedDuration ? this.countedDuration : 0
							}
						}, {
							key: "state",
							get: function() {
								return this.mediaRecorder ? this.mediaRecorder.state : "inactive"
							}
						}]) && Yt(e.prototype, r), n && Yt(e, n), Object.defineProperty(e, "prototype", {
							writable: !1
						}), t
					}();

				function Xt(t) {
					return Xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, Xt(t)
				}

				function te() {
					te = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == Xt(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function ee(t, e, r) {
					return ee = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (t) {
							return !1
						}
					}() ? Reflect.construct.bind() : function(t, e, r) {
						var n = [null];
						n.push.apply(n, e);
						var o = new(Function.bind.apply(t, n));
						return r && re(o, r.prototype), o
					}, ee.apply(null, arguments)
				}

				function re(t, e) {
					return re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, re(t, e)
				}

				function ne(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== Xt(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== Xt(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === Xt(i) ? i : String(i)), n)
					}
					var o, i
				}
				var oe = function() {
					function t(e) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, t), this.stopping = !1, this.countdownTime = [0, 0], this.setTimeout = e.setTimeout || window.setTimeout, this.clearTimeout = e.clearTimeout || window.clearTimeout, this.setTimeout = this.setTimeout.bind(null), this.clearTimeout = this.clearTimeout.bind(null)
					}
					var e, r, n;
					return e = t, r = [{
						key: "setOptions",
						value: function(t) {
							this.options = t
						}
					}, {
						key: "ready",
						value: function(t) {
							return this.options = t, this.isAllDataAvailable = !1, this.cancelled = !1, this.taskInit(), this.prepare(this.initialize.bind(this))
						}
					}, {
						key: "initialize",
						value: function() {
							for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
							this.recorder = ee($t, e), this.recorder.ondataavailable = this.handleDataAvailable.bind(this), this.recorder.onRawDataAvailable = this.handleRawDataAvailable.bind(this), this.recorder.onAbort = this.handleAbort.bind(this), this.recorder.onAllDataAvailable = this.handleAllDataAvailable.bind(this)
						}
					}, {
						key: "start",
						value: function() {
							try {
								this.recorder.start()
							} catch (t) {
								return this.cancel()
							}
							return this.showStatus = $.recording, this.recordingTimer(), this.recorderEvent = tt.start, this.refreshStatus(), this.recorderEvent = tt.null, this.recorder.startTime
						}
					}, {
						key: "pause",
						value: function() {
							return this.showStatus = $.paused, this.recorderEvent = tt.pause, this.refreshStatus(), this.recorderEvent = tt.null, this.recorder.countedDuration
						}
					}, {
						key: "safePause",
						value: function() {
							return (0, C.m)(this, void 0, void 0, te().mark((function t() {
								return te().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (0 !== this.recorder.size) {
												t.next = 4;
												break
											}
											return t.next = 4, Bt(400, this.setTimeout);
										case 4:
											return t.abrupt("return", this.pause());
										case 5:
										case "end":
											return t.stop()
									}
								}), t, this)
							})))
						}
					}, {
						key: "resume",
						value: function() {
							return this.showStatus = $.recording, this.recordingTimer(), this.recorderEvent = tt.resume, this.refreshStatus(), this.recorderEvent = tt.null, this.recorder.resumeTime
						}
					}, {
						key: "cancel",
						value: function() {
							var t;
							this.cancelled || (this.cancelled = !0, this.showStatus = $.ready, null === (t = this.recorder) || void 0 === t || t.cancel(), this.recorderEvent = tt.cancel, this.refreshStatus(), this.recorderEvent = tt.null, this.clear())
						}
					}, {
						key: "stop",
						value: function() {
							this.recorder.stop(), this.foregroundProcessing ? this.showStatus = $.uploading : this.showStatus = $.ready, this.recorderEvent = tt.stop, this.refreshStatus(), this.recorderEvent = tt.null, this.clear()
						}
					}, {
						key: "safeStop",
						value: function() {
							return (0, C.m)(this, void 0, void 0, te().mark((function t() {
								return te().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (!this.stopping) {
												t.next = 3;
												break
											}
											return t.abrupt("return");
										case 3:
											if (this.stopping = !0, 0 !== this.recorder.size) {
												t.next = 9;
												break
											}
											return t.next = 9, Bt(400, this.setTimeout);
										case 9:
											this.stop(), this.stopping = !1;
										case 11:
										case "end":
											return t.stop()
									}
								}), t, this)
							})))
						}
					}, {
						key: "handleDataAvailable",
						value: function(t) {
							try {
								this.onDataAvailable && this.onDataAvailable(t)
							} catch (t) {}
						}
					}, {
						key: "handleRawDataAvailable",
						value: function(t) {
							try {
								this.onRawDataAvailable && this.onRawDataAvailable(t)
							} catch (t) {}
						}
					}, {
						key: "handleAllDataAvailable",
						value: function() {
							try {
								this.onAllDataAvailable && this.onAllDataAvailable()
							} catch (t) {}
						}
					}, {
						key: "handleAbort",
						value: function(t, e) {
							switch (this.showStatus === $.recording && Date.now() - this.recorder.startTime < 400 && (this.showStatus = $.countdown), this.showStatus) {
								case $.ready:
									break;
								case $.waitingAuthorized:
								case $.connecting:
								case $.countdown:
									this.cancel(), this.recorderEvent = tt.abort_cancel, this.refreshStatus(), this.recorderEvent = tt.null;
									break;
								case $.recording:
								case $.paused:
									this.stop(), this.recorderEvent = tt.abort_stop, this.refreshStatus(), this.recorderEvent = tt.null
							}
						}
					}, {
						key: "clear",
						value: function() {
							this.recorderEvent = tt.null
						}
					}], r && ne(e.prototype, r), n && ne(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), t
				}();

				function ie(t) {
					return ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, ie(t)
				}

				function ae(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== ie(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== ie(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === ie(i) ? i : String(i)), n)
					}
					var o, i
				}

				function ce() {
					return ce = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
						var n = function(t, e) {
							for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = le(t)););
							return t
						}(t, e);
						if (n) {
							var o = Object.getOwnPropertyDescriptor(n, e);
							return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
						}
					}, ce.apply(this, arguments)
				}

				function ue(t, e) {
					return ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, ue(t, e)
				}

				function se(t) {
					var e = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (t) {
							return !1
						}
					}();
					return function() {
						var r, n = le(t);
						if (e) {
							var o = le(this).constructor;
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments);
						return function(t, e) {
							if (e && ("object" === ie(e) || "function" == typeof e)) return e;
							if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
							return function(t) {
								if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return t
							}(t)
						}(this, r)
					}
				}

				function le(t) {
					return le = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					}, le(t)
				}

				function fe(t) {
					return fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, fe(t)
				}

				function he(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== fe(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== fe(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === fe(i) ? i : String(i)), n)
					}
					var o, i
				}

				function de(t, e) {
					return de = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, de(t, e)
				}

				function pe(t) {
					var e = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (t) {
							return !1
						}
					}();
					return function() {
						var r, n = ve(t);
						if (e) {
							var o = ve(this).constructor;
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments);
						return function(t, e) {
							if (e && ("object" === fe(e) || "function" == typeof e)) return e;
							if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
							return function(t) {
								if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return t
							}(t)
						}(this, r)
					}
				}

				function ve(t) {
					return ve = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					}, ve(t)
				}

				function ye(t) {
					return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, ye(t)
				}

				function me() {
					me = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == ye(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function ge(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== ye(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== ye(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === ye(i) ? i : String(i)), n)
					}
					var o, i
				}

				function be() {
					return be = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
						var n = function(t, e) {
							for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Se(t)););
							return t
						}(t, e);
						if (n) {
							var o = Object.getOwnPropertyDescriptor(n, e);
							return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
						}
					}, be.apply(this, arguments)
				}

				function we(t, e) {
					return we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, we(t, e)
				}

				function xe(t) {
					var e = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (t) {
							return !1
						}
					}();
					return function() {
						var r, n = Se(t);
						if (e) {
							var o = Se(this).constructor;
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments);
						return function(t, e) {
							if (e && ("object" === ye(e) || "function" == typeof e)) return e;
							if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
							return ke(t)
						}(this, r)
					}
				}

				function ke(t) {
					if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t
				}

				function Se(t) {
					return Se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					}, Se(t)
				}
				var Ee = function(t) {
					! function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								writable: !0,
								configurable: !0
							}
						}), Object.defineProperty(t, "prototype", {
							writable: !1
						}), e && we(t, e)
					}(i, t);
					var e, r, n, o = xe(i);

					function i(t) {
						var e;
						return function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, i), e = o.call(this, t), t && (e.blankCameraVideo = t.blankCameraVideo, e.pipAspectRatio = t.pipCameraAspectRatio), e.handleLeavePictureInPicture = e.handleLeavePictureInPicture.bind(ke(e)), e.isCameraOn = !1, e
					}
					return e = i, r = [{
						key: "turnCameraTo",
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
							return (0, C.m)(this, void 0, void 0, me().mark((function r() {
								return me().wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											if ("on" === t && this.showCamera(e), "off" !== t) {
												r.next = 4;
												break
											}
											return r.next = 4, this.closeCamera();
										case 4:
											this.refreshStatus();
										case 5:
										case "end":
											return r.stop()
									}
								}), r, this)
							})))
						}
					}, {
						key: "showCamera",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, me().mark((function e() {
								var r;
								return me().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											r = t || this.options.camera.deviceId, this.cameraID = r, e.t0 = this.options.recordType, e.next = e.t0 === Q.tab ? 5 : e.t0 === Q.desktop ? 8 : e.t0 === Q.camera ? 11 : 12;
											break;
										case 5:
											return e.next = 7, this.tabShowCamera(r);
										case 7:
											return e.abrupt("break", 12);
										case 8:
											return e.next = 10, this.showCameraPictureInPicture(r);
										case 10:
										case 11:
											return e.abrupt("break", 12);
										case 12:
											this.isCameraOn = !0, this.refreshStatus();
										case 14:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "closeCamera",
						value: function() {
							var t;
							switch (null === (t = this.options) || void 0 === t ? void 0 : t.recordType) {
								case Q.tab:
									return this.tabCloseCamera();
								case Q.desktop:
									return this.exitPictureInPicture();
								case Q.camera:
							}
						}
					}, {
						key: "syncTabCameraStatus",
						value: function(t, e, r) {
							var n = !e || e === this.tabId;
							t !== this.isCameraOn && n && (this.isCameraOn = t), r && (this.cameraID = r)
						}
					}, {
						key: "showCameraPictureInPicture",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, me().mark((function e() {
								var r;
								return me().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if ((r = "on-" + t) !== this.pictureInPictureKey) {
												e.next = 4;
												break
											}
											return e.abrupt("return");
										case 4:
											if (this.pictureInPictureKey = r, this.closePendingPictureInPicture = !1, void 0 !== document.pictureInPictureElement) {
												e.next = 9;
												break
											}
											return e.abrupt("return");
										case 9:
											return e.prev = 9, e.next = 12, this.videoPictureInPicture();
										case 12:
											if (e.sent) {
												e.next = 16;
												break
											}
											return e.next = 16, this.newVideoPictureInPicture(t);
										case 16:
											return e.prev = 16, this.closePendingPictureInPicture && this.exitPictureInPicture(), e.finish(16);
										case 20:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[9, , 16, 20]
								])
							})))
						}
					}, {
						key: "videoPictureInPicture",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, me().mark((function e() {
								var r, n = this;
								return me().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!(r = document.querySelector(t || "video.ours-picture-in-picture-video"))) {
												e.next = 7;
												break
											}
											return e.next = 5, r.requestPictureInPicture().then((function() {
												r.classList.add("picture-in-picture"), r.play().catch(console.error)
											}), (function() {
												function t() {
													r.requestPictureInPicture(), r.classList.add("picture-in-picture"), r.play().catch((function() {}))
												}
												r.addEventListener("loadeddata", t), n.removeLoadedDataListener = function() {
													r.removeEventListener("loadeddata", t)
												}
											}));
										case 5:
											return r.addEventListener("leavepictureinpicture", this.handleLeavePictureInPicture), e.abrupt("return", !0);
										case 7:
											return e.abrupt("return", !1);
										case 8:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "newVideoPictureInPicture",
						value: function(t) {
							var e, r;
							return (0, C.m)(this, void 0, void 0, me().mark((function n() {
								var o, i, a, c = this;
								return me().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											if (t = t || (null === (r = null === (e = this.options) || void 0 === e ? void 0 : e.camera) || void 0 === r ? void 0 : r.deviceId), this.assistCapturer && this.assistCapturer.stopCapture(), this.assistCapturer = new At, o = Date.now(), this.cameraCapturerId = o, this.videoEl || (this.videoEl = document.createElement("video")), a = new Promise((function(t) {
													i = t
												})), this.videoEl.onloadedmetadata = function() {
													c.videoEl.onloadedmetadata = null, c.videoEl.requestPictureInPicture().then((function() {
														c.videoEl.onleavepictureinpicture = c.handleLeavePictureInPicture, i && i(!0)
													})).catch((function() {
														i && i(!1)
													}))
												}, !this.blankCameraVideo) {
												n.next = 18;
												break
											}
											return this.videoEl.srcObject = null, this.videoEl.src = this.blankCameraVideo, this.videoEl.play(), n.next = 15, a;
										case 15:
											if (n.sent) {
												n.next = 18;
												break
											}
											return n.abrupt("return");
										case 18:
											return n.next = 20, this.assistCapturer.getUserMedia({
												audio: !1,
												video: !t || {
													deviceId: t
												}
											}).then((function(t) {
												o !== c.cameraCapturerId && At.stopStream(t), c.pipAspectRatio && t.getVideoTracks().forEach((function(t) {
													t.applyConstraints({
														aspectRatio: c.pipAspectRatio
													})
												})), c.cameraStream = t
											})).catch((function(t) {
												c.catch(t, "getStreamFailed")
											}));
										case 20:
											return this.videoEl.srcObject = this.cameraStream, this.videoEl.play(), n.abrupt("return", a);
										case 23:
										case "end":
											return n.stop()
									}
								}), n, this)
							})))
						}
					}, {
						key: "exitPictureInPicture",
						value: function() {
							return (0, C.m)(this, void 0, void 0, me().mark((function t() {
								return me().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (this.closePendingPictureInPicture = !0, this.pictureInPictureKey = "off", At.stopStream(this.cameraStream), !document.pictureInPictureElement) {
												t.next = 9;
												break
											}
											return t.next = 7, document.exitPictureInPicture();
										case 7:
											t.next = 10;
											break;
										case 9:
											this.isCameraOn && (this.isCameraOn = !1);
										case 10:
											this.removeLoadedDataListener && this.removeLoadedDataListener();
										case 11:
										case "end":
											return t.stop()
									}
								}), t, this)
							})))
						}
					}, {
						key: "handleLeavePictureInPicture",
						value: function(t) {
							this.pictureInPictureKey = "off", At.stopStream(this.cameraStream), t && t.target.classList.remove("picture-in-picture"), this.isCameraOn = !1, ![$.notReady, $.ready].includes(this.showStatus) && this.refreshStatus()
						}
					}, {
						key: "tabShowCamera",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, me().mark((function e() {
								var r;
								return me().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											r = t || this.options.camera.deviceId, this.safeSendMessageToTab({
												action: Mt.tabShowCamera,
												cameraId: r
											}, this.options.tabId), this.onToggleTabCamera && this.onToggleTabCamera({
												tabId: this.options.tabId,
												visible: !0,
												deviceId: r
											});
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})))
						}
					}, {
						key: "tabCloseCamera",
						value: function() {
							this.safeSendMessageToTab({
								action: Mt.tabCloseCamera
							}, this.options.tabId);
							try {
								this.onToggleTabCamera && this.onToggleTabCamera({
									tabId: this.options.tabId,
									visible: !1
								})
							} catch (t) {}
							this.isCameraOn = !1, this.refreshStatus()
						}
					}, {
						key: "clear",
						value: function() {
							be(Se(i.prototype), "clear", this).call(this), this.closeCamera(), this.isCameraOn = !1, this.assistCapturer && this.assistCapturer.stopCapture(), this.assistCapturer = null
						}
					}], r && ge(e.prototype, r), n && ge(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), i
				}(function(t) {
					! function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								writable: !0,
								configurable: !0
							}
						}), Object.defineProperty(t, "prototype", {
							writable: !1
						}), e && de(t, e)
					}(i, t);
					var e, r, n, o = pe(i);

					function i() {
						return function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, i), o.apply(this, arguments)
					}
					return e = i, (r = [{
						key: "catch",
						value: function(t, e) {
							return t && "Invalid state" === t.message ? this.report("cancelShareScreen", t) : t && "Permission denied by system" === t.message || t && "Could not start video source" === t.message ? (this.report("startFailed", t), this.report("recordingPermissionDenied")) : void(t && "getStreamFailed" === e && this.report("cameraUnavailable", t))
						}
					}, {
						key: "report",
						value: function(t, e) {
							"function" == typeof this.onCatch && this.onCatch.call(null, t, e)
						}
					}]) && he(e.prototype, r), n && he(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), i
				}(function(t) {
					! function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								writable: !0,
								configurable: !0
							}
						}), Object.defineProperty(t, "prototype", {
							writable: !1
						}), e && ue(t, e)
					}(i, t);
					var e, r, n, o = se(i);

					function i(t) {
						var e;
						return function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, i), (e = o.call(this, t)).simpleTaskPool = {}, e.taskPool = {}, e
					}
					return e = i, (r = [{
						key: "setTask",
						value: function(t) {
							t.id && t.generate && (this.taskPool[t.id] = t), t.id && t.action && (this.simpleTaskPool[t.id] = t)
						}
					}, {
						key: "taskInit",
						value: function() {
							this.simpleTaskPool = {};
							for (var t = 0, e = Object.keys(this.taskPool); t < e.length; t++) {
								var r = e[t],
									n = this.taskPool[r];
								n.init && n.init(n)
							}
						}
					}, {
						key: "removeTask",
						value: function(t) {
							delete this.simpleTaskPool[t], delete this.taskPool[t]
						}
					}, {
						key: "getTask",
						value: function(t) {
							return this.simpleTaskPool[t] || null
						}
					}, {
						key: "checkTask",
						value: function(t) {
							for (var e = Date.now(), r = 0, n = Object.keys(this.taskPool); r < n.length; r++) {
								var o = n[r],
									i = this.taskPool[o],
									a = i.generate(i, t);
								a && a.id && this.setTask(a)
							}
							for (var c = 0, u = Object.keys(this.simpleTaskPool); c < u.length; c++) {
								var s = u[c],
									l = this.simpleTaskPool[s];
								isFinite(l.timestamp) && l.timestamp <= e && this.executeSimpleTask(l), isFinite(l.duration) && l.duration <= t && this.executeSimpleTask(l)
							}
						}
					}, {
						key: "executeSimpleTask",
						value: function(t) {
							switch (t.action) {
								case "stop":
									this.stop();
									break;
								case "pause":
									this.pause()
							}
							delete this.simpleTaskPool[t.id]
						}
					}, {
						key: "showTimer",
						value: function(t) {}
					}, {
						key: "countdownTimer",
						value: function(t) {
							var e = this;
							! function r() {
								var n = t[1] - (Date.now() - t[0]);
								if (n > 0 && e.showStatus === $.countdown) return e.showTimer(Math.round(n / 1e3) + ""), void(e.countdownTimeoutId = e.setTimeout(r, n % 1e3));
								e.setTimeout((function() {
									e.start()
								}), 100)
							}()
						}
					}, {
						key: "recordingTimer",
						value: function() {
							var t, e, r = this,
								n = this.recorder.countedDuration,
								o = this.recorder.resumeTime;
							! function i() {
								var a, c, u, s;
								r.showStatus === $.recording && (t = n + Date.now() - o, r.showTimer((a = t, c = Math.floor(a / 36e5), u = Math.floor(a % 36e5 / 6e4), s = Math.floor(a % 6e4 / 1e3), c > 0 ? "".concat(c, ":").concat(("00" + u).slice(-2), ":").concat(("00" + s).slice(-2)) : "".concat(u, ":").concat(("00" + s).slice(-2)))), r.checkTask(t), e = t % 1e3, e = Math.max(1e3 - e, e), r.recordingTimeoutId = r.setTimeout(i, e))
							}()
						}
					}, {
						key: "clear",
						value: function() {
							ce(le(i.prototype), "clear", this).call(this), this.showTimer(""), this.clearTimeout(this.countdownTimeoutId), this.clearTimeout(this.recordingTimeoutId), this.simpleTaskPool = {}
						}
					}]) && ae(e.prototype, r), n && ae(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), i
				}(oe)));

				function Oe(t) {
					return Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, Oe(t)
				}

				function Te() {
					Te = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == Oe(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function je(t) {
					switch (t) {
						case "720p":
							return {
								maxWidth: 1280, maxHeight: 720, maxFrameRate: 30
							};
						case "1080p":
						default:
							return {
								maxWidth: 1920, maxHeight: 1080, maxFrameRate: 30
							};
						case "2k":
							return {
								maxWidth: 2560, maxHeight: 1440, maxFrameRate: 30
							};
						case "4k":
							return {
								maxWidth: 4096, maxHeight: 2160, maxFrameRate: 30
							}
					}
				}

				function Ie(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3670016;
					return (0, C.m)(this, void 0, void 0, Te().mark((function r() {
						var n, o, i, a, c, u;
						return Te().wrap((function(r) {
							for (;;) switch (r.prev = r.next) {
								case 0:
									return n = t.getVideoTracks()[0].getSettings(), o = n.width, i = n.height, r.prev = 3, a = new ImageCapture(t.getVideoTracks()[0]), r.next = 7, a.grabFrame();
								case 7:
									c = r.sent, o = c.width, i = c.height, c.close(), r.next = 15;
									break;
								case 13:
									r.prev = 13, r.t0 = r.catch(3);
								case 15:
									return u = Math.round(Math.sqrt(o * i / 1920 / 1080) * e), r.abrupt("return", {
										videoBitsPerSecond: u
									});
								case 17:
								case "end":
									return r.stop()
							}
						}), r, null, [
							[3, 13]
						])
					})))
				}

				function Le(t) {
					return Le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, Le(t)
				}

				function Pe() {
					Pe = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == Le(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function _e(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== Le(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== Le(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === Le(i) ? i : String(i)), n)
					}
					var o, i
				}

				function Ce() {
					return Ce = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
						var n = function(t, e) {
							for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Me(t)););
							return t
						}(t, e);
						if (n) {
							var o = Object.getOwnPropertyDescriptor(n, e);
							return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
						}
					}, Ce.apply(this, arguments)
				}

				function De(t, e) {
					return De = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, De(t, e)
				}

				function Re(t) {
					var e = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (t) {
							return !1
						}
					}();
					return function() {
						var r, n = Me(t);
						if (e) {
							var o = Me(this).constructor;
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments);
						return function(t, e) {
							if (e && ("object" === Le(e) || "function" == typeof e)) return e;
							if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
							return function(t) {
								if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return t
							}(t)
						}(this, r)
					}
				}

				function Me(t) {
					return Me = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					}, Me(t)
				}
				var Ae = function(t) {
					! function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								writable: !0,
								configurable: !0
							}
						}), Object.defineProperty(t, "prototype", {
							writable: !1
						}), e && De(t, e)
					}(i, t);
					var e, r, n, o = Re(i);

					function i(t) {
						var e;
						return function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, i), (e = o.call(this, t)).foregroundProcessing = t.foregroundProcessing, e.mediaSources = t.mediaSources || ["screen", "window", "tab", "audio"], e.mimeTypes = t.mimeTypes, e.timeSlice = t.timeSlice || 1e3, e.safariTimeslicePatch = !0 === t.safariTimeslicePatch, e.bitrateBase = t.bitrateBase || 3670016, e.showStatus = $.ready, e
					}
					return e = i, r = [{
						key: "reopenDesktopMediaPicker",
						value: function() {
							this.showStatus === $.waitingAuthorized && [Q.desktop].includes(this.options.recordType) && this.capturer && this.capturer.reopenDesktopMediaPicker()
						}
					}, {
						key: "turnMicTo",
						value: function(t) {
							var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
							return (0, C.m)(this, void 0, void 0, Pe().mark((function n() {
								var o;
								return Pe().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											o = r || (null === (e = this.options.microphone) || void 0 === e ? void 0 : e.deviceId), "on" === t ? (this.isMicOn = !0, this.capturer.turnOnMic(o)) : "off" === t ? (this.isMicOn = !1, this.capturer.turnOffMic()) : (this.isMicOn ? this.capturer.turnOffMic() : this.capturer.turnOnMic(o), this.isMicOn = !this.isMicOn), this.micID = o, this.refreshStatus();
										case 4:
										case "end":
											return n.stop()
									}
								}), n, this)
							})))
						}
					}, {
						key: "prepare",
						value: function(t) {
							var e;
							return (0, C.m)(this, void 0, void 0, Pe().mark((function r() {
								var n, o, i = this;
								return Pe().wrap((function(r) {
									for (;;) switch (r.prev = r.next) {
										case 0:
											this.showStatus = $.waitingAuthorized, this.refreshStatus(), this.tabId = this.options.tabId, n = this.onPrepare ? this.onPrepare(this.options) : Promise.resolve(), o = this.prepareStream(this.options), (null === (e = this.options.camera) || void 0 === e ? void 0 : e.open) && this.showCamera(), this.prepareAbort = !1, o.then((function(t) {
												try {
													i.afterCaptureStream && i.afterCaptureStream(t)
												} catch (t) {}
												i.validateStream(t), i.recordStream = t, i.showStatus = $.connecting, i.refreshStatus()
											})).then((function() {
												return n
											})).then((function() {
												var t = i.options.quality || {},
													e = Object.assign({}, t.videoBitsPerSecond ? {
														videoBitsPerSecond: t.videoBitsPerSecond
													} : {});
												return e.videoBitsPerSecond ? Promise.resolve(e) : Ie(i.recordStream, i.bitrateBase)
											})).then((function(e) {
												var r = i.options,
													n = r.processorType,
													o = r.stopTimerTask;
												i.capturer.prepareAudioContext();
												var a = "storage" == n || "none" == n;
												t(i.recordStream, Object.assign({}, e), {
													fallbackMimeTypes: i.mimeTypes,
													timeSlice: i.timeSlice,
													noWasmMuxer: null,
													safariTimeslicePatch: i.safariTimeslicePatch,
													noFragmentedMp4: a,
													setTimeout: i.setTimeout,
													clearTimeout: i.clearTimeout
												}), o && i.setTask(o), i.showStatus = $.countdown, i.countdownTime = [Date.now(), i.options.countdown], i.countdownTimer(i.countdownTime), i.refreshStatus()
											})).catch((function(t) {
												i.recordStream || i.afterCaptureStream && i.afterCaptureStream(null), i.prepareAbort = !0, i.showStatus = $.ready, i.refreshStatus(), i.resetPrepared(), i.cancel(), i.catch(t)
											})), this.recorderEvent = tt.ready, this.refreshStatus(), this.recorderEvent = tt.null;
										case 11:
										case "end":
											return r.stop()
									}
								}), r, this)
							})))
						}
					}, {
						key: "prepareStream",
						value: function(t) {
							var e, r, n, o;
							return (0, C.m)(this, void 0, void 0, Pe().mark((function i() {
								var a, c, u, s, l, f = this;
								return Pe().wrap((function(i) {
									for (;;) switch (i.prev = i.next) {
										case 0:
											if (!t.stream) {
												i.next = 2;
												break
											}
											return i.abrupt("return", t.stream);
										case 2:
											this.beforeCaptureStream && this.beforeCaptureStream(t), a = null === (e = this.options.microphone) || void 0 === e ? void 0 : e.deviceId, c = Object.assign(Object.assign({}, je(this.options.quality.equivalent)), this.options.quality), u = new At({
												setTimeout: this.setTimeout,
												clearTimeout: this.clearTimeout
											}), this.capturer = u, this.isMicOn = !1, s = [], i.t0 = t.recordType, i.next = i.t0 === Q.desktop ? 12 : i.t0 === Q.tab ? 14 : i.t0 === Q.camera ? 17 : 19;
											break;
										case 12:
											return At.isCaptureDesktopSupported() ? s.push(this.capturer.captureDesktop({
												streamId: t.streamId,
												sources: this.mediaSources,
												timeout: 6e4,
												constraints: {
													audio: !0,
													video: {
														mandatory: {
															maxWidth: c.maxWidth,
															maxHeight: c.maxHeight,
															maxFrameRate: c.maxFrameRate
														}
													}
												}
											})) : s.push(this.capturer.getDisplayMedia({
												audio: !0,
												video: {
													width: {
														max: c.maxWidth
													},
													height: {
														max: c.maxHeight
													},
													frameRate: c.maxFrameRate
												}
											})), i.abrupt("break", 19);
										case 14:
											return s.push(this.capturer.captureTab({
												targetTabId: this.options.tabId,
												streamId: this.options.streamId,
												captureOptions: {
													audio: !1 !== this.options.tabAudio,
													video: !0,
													videoConstraints: {
														mandatory: this.options.crop ? {
															maxWidth: this.options.crop.ww,
															maxHeight: this.options.crop.wh
														} : {
															maxWidth: c.maxWidth,
															maxHeight: c.maxHeight
														}
													}
												}
											})), i.abrupt("break", 19);
										case 17:
											return s.push(this.capturer.getUserMedia({
												video: {
													deviceId: null === (r = this.options.camera) || void 0 === r ? void 0 : r.deviceId
												},
												audio: !1
											})), i.abrupt("break", 19);
										case 19:
											if (!this.options.crop) {
												i.next = 25;
												break
											}
											return i.next = 23, Promise.all(s);
										case 23:
											return i.next = 25, this.capturer.cropVideoTrack(this.options.crop);
										case 25:
											if (!(null === (o = null === (n = this.options) || void 0 === n ? void 0 : n.microphone) || void 0 === o ? void 0 : o.open)) {
												i.next = 33;
												break
											}
											return this.isMicOn = !0, this.micID = a, i.next = 31, Promise.all(s);
										case 31:
											l = this.capturer.turnOnMic(a).then((function(t) {
												t || (f.isMicOn = !1)
											})), s.push(l);
										case 33:
											return i.next = 35, Promise.all(s);
										case 35:
											return this.prepareAbort && u.stopCapture(), i.abrupt("return", u.stream);
										case 38:
										case "end":
											return i.stop()
									}
								}), i, this)
							})))
						}
					}, {
						key: "validateStream",
						value: function(t) {
							var e = !0;
							if (t || (e = !1), t.active || (e = !1), !e) throw Error("Capturer: invalid stream.")
						}
					}, {
						key: "resetPrepared",
						value: function() {
							this.capturer && this.capturer.stopCapture(), At.stopStream(this.recordStream), this.closeCamera()
						}
					}, {
						key: "getTabInfo",
						value: function(t) {
							return (0, C.m)(this, void 0, void 0, Pe().mark((function t() {
								return Pe().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.abrupt("return", {
												title: document.title,
												url: window.location.href
											});
										case 1:
										case "end":
											return t.stop()
									}
								}), t)
							})))
						}
					}, {
						key: "safeSendMessageToTab",
						value: function(t, e) {
							return (0, C.m)(this, void 0, void 0, Pe().mark((function t() {
								return Pe().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.abrupt("return");
										case 1:
										case "end":
											return t.stop()
									}
								}), t)
							})))
						}
					}, {
						key: "clear",
						value: function() {
							Ce(Me(i.prototype), "clear", this).call(this), this.tabId = null, this.tabInfo = null, this.capturer && this.capturer.stopCapture(), At.stopStream(this.recordStream), this.recordStream = null, this.capturer = null
						}
					}], r && _e(e.prototype, r), n && _e(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), i
				}(Ee);

				function Ne(t) {
					return Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, Ne(t)
				}

				function Fe(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== Ne(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== Ne(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === Ne(i) ? i : String(i)), n)
					}
					var o, i
				}

				function Ze(t, e) {
					return Ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, Ze(t, e)
				}

				function Ge(t) {
					var e = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (t) {
							return !1
						}
					}();
					return function() {
						var r, n = Ue(t);
						if (e) {
							var o = Ue(this).constructor;
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments);
						return function(t, e) {
							if (e && ("object" === Ne(e) || "function" == typeof e)) return e;
							if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
							return function(t) {
								if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return t
							}(t)
						}(this, r)
					}
				}

				function Ue(t) {
					return Ue = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					}, Ue(t)
				}
				var Be = function(t) {
						! function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									writable: !0,
									configurable: !0
								}
							}), Object.defineProperty(t, "prototype", {
								writable: !1
							}), e && Ze(t, e)
						}(i, t);
						var e, r, n, o = Ge(i);

						function i(t) {
							return function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i), o.call(this, t)
						}
						return e = i, (r = [{
							key: "refreshStatus",
							value: function() {}
						}, {
							key: "getStatusData",
							value: function() {}
						}]) && Fe(e.prototype, r), n && Fe(e, n), Object.defineProperty(e, "prototype", {
							writable: !1
						}), i
					}(Ae),
					ze = r(12964);

				function Ve(t) {
					return Ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, Ve(t)
				}

				function qe() {
					qe = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == Ve(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function Ke(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function We(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== Ve(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== Ve(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === Ve(i) ? i : String(i)), n)
					}
					var o, i
				}

				function He(t, e, r) {
					return e && We(t.prototype, e), r && We(t, r), Object.defineProperty(t, "prototype", {
						writable: !1
					}), t
				}
				var Ye = function() {
						function t(e) {
							var r = this;
							Ke(this, t), this.processing = !1, this.dataSize = 0, this.dataCount = 0, this.confirmedDataCount = 0, this.jobQueue = new Je, this.status = "uploading", this.reUploading = !1, this.reUploadFirstSlice = !0, this.hasError = !1, zt.meta.token = e.token, this.apiOrigin = e.apiPath, e.backupKey && (this.backupKey = e.backupKey, this.backup = new ze.Z), Vt(this, "confirmedDataCount", (function() {
								return r.refreshProgress()
							})), Vt(this, "dataCount", (function() {
								return r.refreshProgress()
							}))
						}
						return He(t, [{
							key: "ready",
							value: function(t) {
								return (0, C.m)(this, void 0, void 0, qe().mark((function e() {
									return qe().wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												return this.title = t.title, this.payload = this.parsePayload(t.payload || {}), e.next = 4, this.init();
											case 4:
												return this.vid = e.sent, this.onConnected && this.onConnected(this.vid, {
													vid: this.vid
												}), e.abrupt("return", this.vid);
											case 7:
											case "end":
												return e.stop()
										}
									}), e, this)
								})))
							}
						}, {
							key: "init",
							value: function() {
								return (0, C.m)(this, void 0, void 0, qe().mark((function t() {
									var e;
									return qe().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												return this.processing = !0, t.next = 3, zt.post(this.getUrl("v2/record/init"), {
													body: JSON.stringify({
														video_title: this.title,
														scope: this.payload.scope,
														extra: this.payload.extra
													})
												});
											case 3:
												return e = t.sent, this.processing = !1, 3 === e.data.status && this.callHook("onError", this.vid, {
													type: "quotaExceeded"
												}), t.abrupt("return", e.data.vid);
											case 7:
											case "end":
												return t.stop()
										}
									}), t, this)
								})))
							}
						}, {
							key: "push",
							value: function(t) {
								this.hasError || ("uploading" === this.status || "paused" === this.status) && Ut(t) && t.size && (this.dataSize || this.reportFirstSlice(t), this.pushUploadJob(t, this.dataSize, this.dataCount), this.dataSize += t.size, this.dataCount += 1)
							}
						}, {
							key: "pushUploadJob",
							value: function(t, e, r) {
								var n = this;
								this.backup && this.jobQueue.length > 250 ? this.jobQueue.push((function() {
									return (0, C.m)(n, void 0, void 0, qe().mark((function t() {
										var n, o;
										return qe().wrap((function(t) {
											for (;;) switch (t.prev = t.next) {
												case 0:
													return t.next = 2, this.backup.getSlice(this.backupKey, r);
												case 2:
													return n = t.sent, o = n.data, t.next = 6, this.upload(o, e, r);
												case 6:
												case "end":
													return t.stop()
											}
										}), t, this)
									})))
								})) : this.jobQueue.push((function() {
									return (0, C.m)(n, void 0, void 0, qe().mark((function n() {
										return qe().wrap((function(n) {
											for (;;) switch (n.prev = n.next) {
												case 0:
													return n.next = 2, this.upload(t, e, r);
												case 2:
												case "end":
													return n.stop()
											}
										}), n, this)
									})))
								}))
							}
						}, {
							key: "uploadSlice",
							value: function(t, e, r) {
								return (0, C.m)(this, void 0, void 0, qe().mark((function n() {
									var o = this;
									return qe().wrap((function(n) {
										for (;;) switch (n.prev = n.next) {
											case 0:
												if (!this.hasError) {
													n.next = 2;
													break
												}
												return n.abrupt("return", !0);
											case 2:
												if ("uploading" !== this.status || !Ut(t) || !t.size) {
													n.next = 13;
													break
												}
												if (!this.reUploadFirstSlice) {
													n.next = 9;
													break
												}
												return this.reUploadFirstSlice = !1, n.next = 7, this.upload(t, e, r);
											case 7:
												n.next = 11;
												break;
											case 9:
												return n.next = 11, this.jobQueue.push((function() {
													return (0, C.m)(o, void 0, void 0, qe().mark((function n() {
														return qe().wrap((function(n) {
															for (;;) switch (n.prev = n.next) {
																case 0:
																	return n.next = 2, this.upload(t, e, r);
																case 2:
																case "end":
																	return n.stop()
															}
														}), n, this)
													})))
												}));
											case 11:
												if (!this.hasError) {
													n.next = 13;
													break
												}
												return n.abrupt("return", !0);
											case 13:
											case "end":
												return n.stop()
										}
									}), n, this)
								})))
							}
						}, {
							key: "upload",
							value: function(t, e, r) {
								return (0, C.m)(this, void 0, void 0, qe().mark((function n() {
									var o;
									return qe().wrap((function(n) {
										for (;;) switch (n.prev = n.next) {
											case 0:
												return (o = new FormData).append("video_id", this.vid), o.append("file", t), o.append("offset", String(e)), n.next = 6, zt.post(this.getUrl("v2/record/file_upload?vid=".concat(this.vid, "&idx=").concat(r, "&offset=").concat(e)), {
													body: o
												}, {
													retry: !0
												});
											case 6:
												if (-400 !== n.sent.code) {
													n.next = 10;
													break
												}
												return this.hasError || (this.hasError = !0, this.status = "stopped", this.callHook("onError", this.vid, {})), n.abrupt("return");
											case 10:
												"canceled" !== this.status && (Zt(this.onSliceUploaded) && this.onSliceUploaded(this.vid, r), this.confirmedDataCount += 1);
											case 11:
											case "end":
												return n.stop()
										}
									}), n, this)
								})))
							}
						}, {
							key: "startReUpload",
							value: function(t, e, r, n) {
								this.vid = t, this.reUploading = !0, this.dataSize = n || 0, this.dataCount = e, this.confirmedDataCount = r
							}
						}, {
							key: "start",
							value: function() {
								return {
									vid: this.vid,
									title: this.title
								}
							}
						}, {
							key: "pause",
							value: function() {
								this.status = "paused"
							}
						}, {
							key: "resume",
							value: function() {
								this.status = "uploading"
							}
						}, {
							key: "stop",
							value: function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									e = t.keepalive,
									r = void 0 !== e && e,
									n = t.onStop,
									o = void 0 === n ? function() {
										return null
									} : n;
								return (0, C.m)(this, void 0, void 0, qe().mark((function t() {
									var e = this;
									return qe().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												if ("stopped" !== this.status) {
													t.next = 2;
													break
												}
												return t.abrupt("return");
											case 2:
												this.status = "stopped", this.hasError || (this.processing = !0, qt((function() {
													return (0, C.m)(e, void 0, void 0, qe().mark((function t() {
														return qe().wrap((function(t) {
															for (;;) switch (t.prev = t.next) {
																case 0:
																	if (!this.done) {
																		t.next = 7;
																		break
																	}
																	return t.next = 3, zt.put(this.getUrl("/record/complete/".concat(this.vid, "?type=").concat(this.reUploading ? "backup" : "default")), {
																		keepalive: r
																	}, {
																		retry: !0
																	});
																case 3:
																	return this.processing = !1, this.callHook("onSuccess", this.vid, {
																		vid: this.vid,
																		title: this.title
																	}), Zt(o) && o(), t.abrupt("return", !0);
																case 7:
																	return t.abrupt("return", !1);
																case 8:
																case "end":
																	return t.stop()
															}
														}), t, this)
													})))
												}), 1e3));
											case 4:
											case "end":
												return t.stop()
										}
									}), t, this)
								})))
							}
						}, {
							key: "cancel",
							value: function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								return (0, C.m)(this, void 0, void 0, qe().mark((function e() {
									var r = this;
									return qe().wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												if ("canceled" !== this.status) {
													e.next = 2;
													break
												}
												return e.abrupt("return");
											case 2:
												return this.status = "canceled", this.processing = !0, e.abrupt("return", qt((function() {
													return (0, C.m)(r, void 0, void 0, qe().mark((function e() {
														var r;
														return qe().wrap((function(e) {
															for (;;) switch (e.prev = e.next) {
																case 0:
																	if (!this.vid) {
																		e.next = 6;
																		break
																	}
																	return r = this.getUrl("/record/".concat(this.dataSize ? "discard" : "cancel", "/").concat(this.vid)), e.next = 4, zt.delete(r, {
																		keepalive: t
																	}, {
																		retry: !0
																	});
																case 4:
																	return this.processing = !1, e.abrupt("return", !0);
																case 6:
																	return e.abrupt("return", !1);
																case 7:
																case "end":
																	return e.stop()
															}
														}), e, this)
													})))
												}), 1e3));
											case 5:
											case "end":
												return e.stop()
										}
									}), e, this)
								})))
							}
						}, {
							key: "reportFirstSlice",
							value: function(t) {
								zt.post(this.getUrl("/record/buffer/first"), {
									body: JSON.stringify({
										id: this.vid,
										size: t.size,
										extra: this.payload.extra
									})
								})
							}
						}, {
							key: "parsePayload",
							value: function(t) {
								var e = t,
									r = {};
								e.locationType && e.locationId && (r.scope = {
									type: e.locationType,
									id: e.locationId
								});
								var n = r.extra = {};
								return e.tabUrl && (n.source_url = e.tabUrl), e.appVersion && (n.client_version = e.appVersion), e.recordType && (n.record_type = e.recordType), e.recorderVersion && (n.recorder_version = e.recorderVersion), e.screenSize && (n.screen_size = e.screenSize), e.appAndPlatform && (n.client = e.appAndPlatform), r
							}
						}, {
							key: "getUrl",
							value: function(t) {
								return function() {
									for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
									return e.join("/").replace(/([^:])\/{2,}/g, "$1/")
								}(this.apiOrigin, t)
							}
						}, {
							key: "progress",
							get: function() {
								return {
									finished: this.confirmedDataCount,
									current: this.confirmedDataCount,
									total: this.dataCount,
									more: {
										binarySlice: this.confirmedDataCount
									}
								}
							}
						}, {
							key: "done",
							get: function() {
								return "stopped" === this.status && this.confirmedDataCount === this.dataCount
							}
						}, {
							key: "refreshProgress",
							value: function() {
								var t = this.progress;
								this.callHook("onProgress", this.vid, t.finished / t.total, {
									binarySlice: t.more.binarySlice,
									finished: t.finished,
									total: t.total,
									current: t.current
								})
							}
						}, {
							key: "onProgress",
							value: function(t, e) {}
						}, {
							key: "onError",
							value: function() {}
						}, {
							key: "onSuccess",
							value: function() {}
						}, {
							key: "onSliceUploaded",
							value: function(t, e) {
								return (0, C.m)(this, void 0, void 0, qe().mark((function t() {
									return qe().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
											case "end":
												return t.stop()
										}
									}), t)
								})))
							}
						}, {
							key: "callHook",
							value: function(t) {
								for (var e, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
								Zt(this[t]) && (e = this[t]).call.apply(e, [this].concat(n))
							}
						}]), t
					}(),
					Je = function() {
						function t() {
							Ke(this, t), this.runningCount = 0, this.jobs = []
						}
						return He(t, [{
							key: "busy",
							get: function() {
								return this.runningCount >= 5
							}
						}, {
							key: "length",
							get: function() {
								return this.jobs.length
							}
						}, {
							key: "push",
							value: function(t) {
								var e = this,
									r = new Promise((function(t) {
										e.resolveHook = t
									}));
								return this.jobs.push(t), this.startNextJob(), r
							}
						}, {
							key: "startNextJob",
							value: function() {
								return (0, C.m)(this, void 0, void 0, qe().mark((function t() {
									var e;
									return qe().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												if (!this.busy) {
													t.next = 2;
													break
												}
												return t.abrupt("return");
											case 2:
												return this.resolveHook(this.runningCount), this.runningCount++, e = this.jobs.shift(), t.prev = 5, t.next = 8, e();
											case 8:
												this.runningCount--, this.jobs.length > 0 && this.startNextJob(), t.next = 16;
												break;
											case 12:
												t.prev = 12, t.t0 = t.catch(5), this.runningCount--, this.push(e);
											case 16:
											case "end":
												return t.stop()
										}
									}), t, this, [
										[5, 12]
									])
								})))
							}
						}]), t
					}(),
					Qe = r(6186);

				function $e(t) {
					return $e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, $e(t)
				}

				function Xe() {
					Xe = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == $e(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function tr(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== $e(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== $e(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === $e(i) ? i : String(i)), n)
					}
					var o, i
				}

				function er() {
					return er = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
						var n = function(t, e) {
							for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ir(t)););
							return t
						}(t, e);
						if (n) {
							var o = Object.getOwnPropertyDescriptor(n, e);
							return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
						}
					}, er.apply(this, arguments)
				}

				function rr(t, e) {
					return rr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, rr(t, e)
				}

				function nr(t) {
					var e = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (t) {
							return !1
						}
					}();
					return function() {
						var r, n = ir(t);
						if (e) {
							var o = ir(this).constructor;
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments);
						return function(t, e) {
							if (e && ("object" === $e(e) || "function" == typeof e)) return e;
							if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
							return or(t)
						}(this, r)
					}
				}

				function or(t) {
					if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t
				}

				function ir(t) {
					return ir = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					}, ir(t)
				}
				var ar = function(t) {
						! function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									writable: !0,
									configurable: !0
								}
							}), Object.defineProperty(t, "prototype", {
								writable: !1
							}), e && rr(t, e)
						}(i, t);
						var e, r, n, o = nr(i);

						function i(t) {
							var e;
							return function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i), (e = o.call(this, t)).backupStrategy = t.backupStrategy, e.autoGenerateThumbnail = !1 !== t.autoGenerateThumbnail, e.isStorageAlert = !1, e.isEmptyData = !0, e.isEmptyFmp4Data = !0, e.onPrepare = e.prepareCompat.bind(or(e)), e.singleLine = new Qe.u({
								setTimeout: e.setTimeout,
								clearTimeout: e.clearTimeout
							}), e.processorMap = new Map, e
						}
						return e = i, r = [{
							key: "prepareCompat",
							value: function() {
								var t;
								return (0, C.m)(this, void 0, void 0, Xe().mark((function e() {
									return Xe().wrap((function(e) {
										for (;;) switch (e.prev = e.next) {
											case 0:
												return e.next = 2, this.beforePrepareProcessor();
											case 2:
												if (!this.prepareAbort) {
													e.next = 4;
													break
												}
												throw Error("prepareAborted");
											case 4:
												return e.next = 6, this.prepareBackup();
											case 6:
												return this.backupKey = e.sent, e.next = 9, this.prepareProcessor();
											case 9:
												return this.processKey = e.sent, this.backup && this.backup.update({
													processKey: this.processKey,
													originId: this.videoId,
													options: this.options
												}), null === (t = this.singleLine) || void 0 === t || t.register(this.processKey), e.next = 15, this.afterPrepareProcessor();
											case 15:
											case "end":
												return e.stop()
										}
									}), e, this)
								})))
							}
						}, {
							key: "updateStorageAlert",
							value: function(t) {
								this.isStorageAlert = t
							}
						}, {
							key: "beforePrepareProcessor",
							value: function() {
								return (0, C.m)(this, void 0, void 0, Xe().mark((function t() {
									var e, r, n, o, i, a, c, u;
									return Xe().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												e = this.options, r = e.tabId, n = e.processorType, o = e.title, i = e.recordType, this.videoId = "", this.processorType = n || "upload", this.backupType = "none", t.t0 = this.backupStrategy, t.next = "upload" === t.t0 ? 7 : "auto" === t.t0 ? 9 : "original" === t.t0 || "output" === t.t0 ? 11 : 13;
												break;
											case 7:
												return this.backupType = "upload" === this.processorType ? "output" : "none", t.abrupt("break", 13);
											case 9:
												return this.backupType = "upload" === this.processorType ? "output" : "original", t.abrupt("break", 13);
											case 11:
												return this.backupType = this.backupStrategy, t.abrupt("break", 13);
											case 13:
												if (this.title = o || this.generateTitle(i), !isFinite(r)) {
													t.next = 18;
													break
												}
												return t.next = 17, this.getTabInfo(r);
											case 17:
												this.tab = t.sent;
											case 18:
												return t.next = 20, this.getProcessorConfig(this.processorType);
											case 20:
												a = t.sent, this.processorConfig = a, "token" in a && (zt.meta.token = a.token, c = this.parseToken(a.token), u = c.id, this.userId = u);
											case 23:
											case "end":
												return t.stop()
										}
									}), t, this)
								})))
							}
						}, {
							key: "prepareBackup",
							value: function() {
								return (0, C.m)(this, void 0, void 0, Xe().mark((function t() {
									var e, r;
									return Xe().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												e = this.backupType, t.t0 = e, t.next = "original" === t.t0 || "output" === t.t0 ? 4 : (t.t0, 6);
												break;
											case 4:
												return this.backup = new ze.Z, t.abrupt("break", 8);
											case 6:
												return this.backup = null, t.abrupt("break", 8);
											case 8:
												if (this.backup) {
													t.next = 10;
													break
												}
												return t.abrupt("return");
											case 10:
												return t.next = 12, this.backup.create({
													title: this.title,
													owner: this.userId,
													mimeType: "output" === e ? "video/mp4" : "video/webm"
												});
											case 12:
												return r = t.sent, t.abrupt("return", r.key);
											case 14:
											case "end":
												return t.stop()
										}
									}), t, this)
								})))
							}
						}, {
							key: "prepareProcessor",
							value: function() {
								return (0, C.m)(this, void 0, void 0, Xe().mark((function t() {
									var e, r, n;
									return Xe().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												e = this.processorType, r = this.options.payload, t.t0 = e, t.next = "download" === t.t0 ? 5 : "storage" === t.t0 ? 7 : "upload" === t.t0 ? 9 : "none" === t.t0 ? 11 : 13;
												break;
											case 5:
												return this.processor = new A, t.abrupt("break", 14);
											case 7:
												return this.processor = new W({
													autoGenerateThumbnail: this.autoGenerateThumbnail
												}), t.abrupt("break", 14);
											case 9:
												return this.processor = new Ye(this.processorConfig), t.abrupt("break", 14);
											case 11:
												return this.processor = new X(this.processorConfig), t.abrupt("break", 14);
											case 13:
												throw Error("RecorderCompat processorType not supported!");
											case 14:
												return this.processor.onConnected = this.handleProcessorConnected.bind(this), this.processor.onProgress = this.handleProcessorProgress.bind(this), this.processor.onSuccess = this.handleProcessorSuccess.bind(this), this.processor.onError = this.handleProcessorError.bind(this), this.processor.onSliceUploaded = this.handleSliceUploaded.bind(this), t.next = 21, this.processor.ready({
													title: this.title,
													payload: r
												});
											case 21:
												return n = t.sent, t.abrupt("return", n);
											case 24:
											case "end":
												return t.stop()
										}
									}), t, this)
								})))
							}
						}, {
							key: "afterPrepareProcessor",
							value: function() {
								return (0, C.m)(this, void 0, void 0, Xe().mark((function t() {
									var e;
									return Xe().wrap((function(t) {
										for (;;) switch (t.prev = t.next) {
											case 0:
												e = this.processKey, this.processorMap.set(e, {
													key: e,
													type: this.processorType,
													vid: this.videoId,
													processor: this.processor,
													backup: this.backup,
													title: this.title,
													size: 0,
													duration: 0,
													progress: 0
												});
											case 2:
											case "end":
												return t.stop()
										}
									}), t, this)
								})))
							}
						}, {
							key: "generateTitle",
							value: function(t) {
								var e = new Date,
									r = "".concat(e.toLocaleDateString().replace(/\//g, "-"), "_").concat(e.toLocaleTimeString("en-US", {
										hour12: !1
									}).slice(0, -3));
								switch (t) {
									case "desktop":
										return this.tab ? this.tab.title : "Desktop-" + r;
									case "camera":
										return "Camera-" + r;
									case "tab":
										return this.tab ? "Tab-" + this.tab.title : "Tab-" + r;
									default:
										return "Record-" + r
								}
							}
						}, {
							key: "parseToken",
							value: function(t) {
								try {
									return {
										id: JSON.parse(atob(t.split(".")[1])).user_id + ""
									}
								} catch (t) {
									return {
										id: ""
									}
								}
							}
						}, {
							key: "handleDataAvailable",
							value: function(t) {
								var e = this;
								if (!this.cancelled) {
									if (t.data && t.data.size > 0 && this.isEmptyFmp4Data && (this.isEmptyFmp4Data = !1), this.processor.push(t.data), this.backup && "output" === this.backupType && !this.backup.push(t.data, {
											duration: this.recorder.duration
										}).then((function() {}), (function() {
											e.onException && e.onException("saveFailed", "save blob failed")
										}))) {
										var r = "save indexDB before";
										t.data && t.data.size || (r = "empty blob"), this.onException && this.onException("saveFailed", r)
									}
									er(ir(i.prototype), "handleDataAvailable", this).call(this, t)
								}
							}
						}, {
							key: "handleRawDataAvailable",
							value: function(t) {
								this.cancelled || (t.data && t.data.size > 0 && this.isEmptyData && (this.isEmptyData = !1), t.data && t.data.size || this.onException && this.onException("emptyBlob", "empty original blob"), this.backup && "original" === this.backupType && this.backup.push(t.data, {
									duration: this.recorder.duration
								}), er(ir(i.prototype), "handleRawDataAvailable", this).call(this, t))
							}
						}, {
							key: "handleProcessorConnected",
							value: function(t, e) {
								if (t === this.processKey && (this.videoId = e.vid), this.processorMap.has(t)) {
									var r = this.processorMap.get(t);
									this.processorMap.set(t, Object.assign(Object.assign({}, r), {
										vid: e.vid
									})), r && r.backup && (null == r || r.backup.update(Object.assign({
										originId: e.vid,
										sid: e.sid
									}, (null == e ? void 0 : e.backupDetails) ? e.backupDetails : {})))
								}
							}
						}, {
							key: "handleProcessorProgress",
							value: function(t, e, r) {
								if (this.processingProgress = [r.finished, r.current, r.total], this.processorMap.has(t)) {
									var n = this.processorMap.get(t).backup;
									null == n || n.update({
										uploadedSlice: r.binarySlice,
										progress: e
									})
								}
								this.isAllDataAvailable || (this.processingProgress = [r.finished, r.current, r.total + 3]), this.showStatus === $.uploading && this.refreshStatus()
							}
						}, {
							key: "handleProcessorError",
							value: function(t, e) {
								var r;
								if (t == this.processKey) switch ("quotaExceeded" === e.type && (this.report("quotaExceeded"), this.cancel()), this.showStatus) {
									case $.waitingAuthorized:
									case $.connecting:
									case $.countdown:
										this.prepareAbort = !0, this.cancel();
										break;
									case $.recording:
									case $.paused:
										this.stop()
								}
								e && "networkError" === e.type && t && (null === (r = this.singleLine) || void 0 === r || r.unregister(t))
							}
						}, {
							key: "handleProcessorSuccess",
							value: function(t) {
								var e;
								if (t == this.processKey && (this.showStatus === $.uploading && (this.showStatus = $.ready), this.recorderEvent = tt.processing_success, this.refreshStatus(), this.recorderEvent = tt.null, this.foregroundProcessing && this.complete()), this.processorMap.has(t)) {
									var r = this.processorMap.get(t).backup;
									null == r || r.remove(), this.processorMap.delete(t)
								}
								null === (e = this.singleLine) || void 0 === e || e.unregister(t)
							}
						}, {
							key: "handleSliceUploaded",
							value: function(t, e) {
								return (0, C.m)(this, void 0, void 0, Xe().mark((function r() {
									var n, o;
									return Xe().wrap((function(r) {
										for (;;) switch (r.prev = r.next) {
											case 0:
												if (!this.processorMap.has(t)) {
													r.next = 8;
													break
												}
												if (n = this.processorMap.get(t), !(o = n.backup)) {
													r.next = 8;
													break
												}
												return r.next = 5, o.updateSlice(e, {
													uploaded: !0
												});
											case 5:
												if (!this.isStorageAlert) {
													r.next = 8;
													break
												}
												return r.next = 8, o.deleteSlice(this.backupKey, e);
											case 8:
											case "end":
												return r.stop()
										}
									}), r, this)
								})))
							}
						}, {
							key: "handleAllDataAvailable",
							value: function() {
								var t, e;
								return (0, C.m)(this, void 0, void 0, Xe().mark((function r() {
									var n, o, i;
									return Xe().wrap((function(r) {
										for (;;) switch (r.prev = r.next) {
											case 0:
												return n = this.recorder, o = n.duration, i = n.size, r.next = 4, null === (t = this.processor) || void 0 === t ? void 0 : t.stop({
													duration: o,
													size: i
												});
											case 4:
												return r.next = 6, null === (e = this.backup) || void 0 === e ? void 0 : e.close(o);
											case 6:
												this.onStopDone && this.onStopDone({
													key: this.processKey,
													title: this.title,
													duration: this.recorder.duration,
													size: this.recorder.size,
													processorType: this.processorType
												});
											case 7:
											case "end":
												return r.stop()
										}
									}), r, this)
								})))
							}
						}, {
							key: "getUploader",
							value: function() {
								return this.processor
							}
						}, {
							key: "start",
							value: function() {
								this.processor.start(this.recorder.mimeType), er(ir(i.prototype), "start", this).call(this);
								try {
									this.onStart && this.onStart({
										options: this.options,
										key: this.processKey,
										title: this.title,
										processorType: this.processorType
									})
								} catch (t) {}
							}
						}, {
							key: "pause",
							value: function() {
								return this.recorder.pause(), this.processor.pause(), er(ir(i.prototype), "pause", this).call(this)
							}
						}, {
							key: "resume",
							value: function() {
								return this.recorder.resume(), this.processor.resume(), er(ir(i.prototype), "resume", this).call(this)
							}
						}, {
							key: "cancel",
							value: function() {
								var t, e, r, n = Promise.all([null === (t = this.processor) || void 0 === t ? void 0 : t.cancel(), null === (e = this.backup) || void 0 === e ? void 0 : e.remove()]);
								this.backup = null, this.processKey && this.processorMap.set(this.processKey, Object.assign(Object.assign({}, this.processorMap.get(this.processKey)), {
									backup: null
								})), null === (r = this.singleLine) || void 0 === r || r.unregister(this.processKey), er(ir(i.prototype), "cancel", this).call(this);
								try {
									this.onCancel && this.onCancel({
										key: this.processKey,
										title: this.title,
										processorType: this.processorType,
										donePromise: n
									})
								} catch (t) {}
							}
						}, {
							key: "stop",
							value: function() {
								er(ir(i.prototype), "stop", this).call(this);
								try {
									this.onStop && this.onStop({
										key: this.processKey,
										title: this.title,
										duration: this.recorder.duration,
										size: this.recorder.size,
										processorType: this.processorType
									})
								} catch (t) {}
								this.foregroundProcessing || this.complete()
							}
						}, {
							key: "abnormalExit",
							value: function() {
								this.recorder && this.recorder.size ? (this.backup && this.backup.close(), this.processor.stop({
									keepalive: !0
								})) : (this.processor.cancel(!0), this.backup && this.backup.remove())
							}
						}, {
							key: "complete",
							value: function() {}
						}, {
							key: "clear",
							value: function() {
								er(ir(i.prototype), "clear", this).call(this);
								try {
									this.onClear && this.onClear()
								} catch (t) {}
							}
						}, {
							key: "getStatusData",
							value: function() {
								var t;
								return this.recorder ? {
									recordType: this.options.recordType,
									showStatus: this.showStatus,
									resumeTime: this.recorder.resumeTime,
									countedDuration: this.recorder.countedDuration,
									size: this.recorder.size,
									countdownTime: this.countdownTime,
									recorderEvent: this.recorderEvent,
									isCameraOn: this.isCameraOn,
									videoTitle: this.title,
									processingProgress: this.processingProgress,
									isMicOn: this.isMicOn,
									videoId: this.videoId,
									micID: this.micID,
									cameraID: this.cameraID,
									processorRunning: this.processor.processing,
									tabId: this.tabId
								} : {
									recordType: null === (t = this.options) || void 0 === t ? void 0 : t.recordType,
									showStatus: this.showStatus,
									resumeTime: 0,
									countedDuration: 0,
									size: 0,
									countdownTime: this.countdownTime,
									recorderEvent: this.recorderEvent,
									isCameraOn: this.isCameraOn,
									videoTitle: this.title,
									processingProgress: this.processingProgress,
									isMicOn: this.isMicOn,
									videoId: this.videoId,
									micID: this.micID,
									cameraID: this.cameraID,
									processorRunning: !1,
									tabId: this.tabId
								}
							}
						}, {
							key: "refreshStatus",
							value: function() {
								var t = this.getStatusData();
								this.onStatusChange && this.onStatusChange(t)
							}
						}], r && tr(e.prototype, r), n && tr(e, n), Object.defineProperty(e, "prototype", {
							writable: !1
						}), i
					}(Be),
					cr = r(63188);

				function ur(t) {
					return ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, ur(t)
				}

				function sr() {
					sr = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == ur(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function lr(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}

				function fr(t) {
					return function() {
						var e = this,
							r = arguments;
						return new Promise((function(n, o) {
							var i = t.apply(e, r);

							function a(t) {
								lr(i, n, o, a, c, "next", t)
							}

							function c(t) {
								lr(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						}))
					}
				}

				function hr(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
							if ("object" !== ur(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== ur(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(o, "string"), "symbol" === ur(i) ? i : String(i)), n)
					}
					var o, i
				}

				function dr() {
					return dr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
						var n = function(t, e) {
							for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = yr(t)););
							return t
						}(t, e);
						if (n) {
							var o = Object.getOwnPropertyDescriptor(n, e);
							return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
						}
					}, dr.apply(this, arguments)
				}

				function pr(t, e) {
					return pr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					}, pr(t, e)
				}

				function vr(t) {
					var e = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (t) {
							return !1
						}
					}();
					return function() {
						var r, n = yr(t);
						if (e) {
							var o = yr(this).constructor;
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments);
						return function(t, e) {
							if (e && ("object" === ur(e) || "function" == typeof e)) return e;
							if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
							return function(t) {
								if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return t
							}(t)
						}(this, r)
					}
				}

				function yr(t) {
					return yr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
						return t.__proto__ || Object.getPrototypeOf(t)
					}, yr(t)
				}
				var mr = function(t) {
					! function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								writable: !0,
								configurable: !0
							}
						}), Object.defineProperty(t, "prototype", {
							writable: !1
						}), e && pr(t, e)
					}(y, t);
					var e, r, n, o, i, u, s, f, h, d, p, v = vr(y);

					function y(t) {
						var e;
						return function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, y), (e = v.call(this, t)).haveEndRecord = !1, e.sendStopInfo = !1, e.haveAlertEmptyData = !1, e.reportFmp4Time = 0, e.reportEmptyData = 0, e
					}
					return e = y, r = [{
						key: "getUid",
						value: (p = fr(sr().mark((function t() {
							return sr().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										return t.abrupt("return", new Promise((function(t) {
											chrome.runtime.sendMessage({
												action: "getUID"
											}, (function(e) {
												t(e)
											}))
										})));
									case 1:
									case "end":
										return t.stop()
								}
							}), t)
						}))), function() {
							return p.apply(this, arguments)
						})
					}, {
						key: "getProcessorConfig",
						value: (d = fr(sr().mark((function t() {
							var e, r, n;
							return sr().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										return e = this.options.payload, t.next = 4, this.getUid();
									case 4:
										return r = t.sent, n = {
											wsUrl: g.Z.wsUrl + "/websocket2/video/open?time=" + Date.now(),
											apiBase: g.Z.baseUrl,
											token: r.sid,
											uid: r.uid,
											tabTitle: e.tabTitle,
											maxQueueBlobSlice: 200,
											setTimeout: (0, c.fx)() ? cr.$ : null,
											clearTimeout: (0, c.fx)() ? cr.x : null
										}, t.abrupt("return", n);
									case 7:
									case "end":
										return t.stop()
								}
							}), t, this)
						}))), function() {
							return d.apply(this, arguments)
						})
					}, {
						key: "safeSendMessageToTab",
						value: (h = fr(sr().mark((function t(e, r) {
							var n;
							return sr().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if (n = this.options.crop, 11 !== e.action) {
											t.next = 10;
											break
										}
										return t.next = 5, l({
											action: "sendMessageToTab",
											tabid: r,
											data: {
												action: "setup-camera",
												crop: n || "",
												deviceId: e.cameraId
											}
										});
									case 5:
										"err" == t.sent && (this.isCameraOn = !1, this.refreshStatus()), t.next = 11;
										break;
									case 10:
										12 === e.action && l({
											action: "sendMessageToTab",
											tabid: r,
											data: {
												action: "stop-camera"
											}
										});
									case 11:
									case "end":
										return t.stop()
								}
							}), t, this)
						}))), function(t, e) {
							return h.apply(this, arguments)
						})
					}, {
						key: "complete",
						value: function() {}
					}, {
						key: "handleAllDataAvailable",
						value: (f = fr(sr().mark((function t() {
							var e, r, n;
							return sr().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										dr(yr(y.prototype), "handleAllDataAvailable", this).call(this), this.haveEndRecord = !0, "none" === (e = this.processorType) ? Nn() : "upload" === e && (Fn(this.videoId), (r = on) || (r = "stream end"), this.isEmptyData && (r += " emptyRecordData"), this.videoId ? this.processor instanceof _.Q && (n = Math.floor(this.recorder.countedDuration / 1e3), this.sendClickStop(this.processKey, this.processor, r, n, !1)) : this.updateClickStopStatus(r, this.processKey, !1)), a.Z.dispatch("checkBackUp"), a.Z.dispatch("statusChecker");
									case 7:
									case "end":
										return t.stop()
								}
							}), t, this)
						}))), function() {
							return f.apply(this, arguments)
						})
					}, {
						key: "sendClickStop",
						value: function(t, e, r, n, o) {
							var i = this,
								a = this;
							e.httpReportStop(r, n).then((function(e) {
								a.sendStopInfo = !0, i.updateClickStopStatus(r, t, !0)
							})).catch((function(a) {
								o ? i.updateClickStopStatus(r, t, !1) : setTimeout((function() {
									i.sendClickStop(t, e, r, n, !0)
								}), 3e3)
							}))
						}
					}, {
						key: "sendVideoLog",
						value: function(t, e) {
							var r;
							this.videoId && ("noRecordData" == t || "noRecordDataFmp4" == t ? r = "216" : "saveBackupFailed" == t && (r = "215"), r && fetch(g.Z.baseUrl + "/api/v1/video/log", {
								method: "POST",
								headers: {
									"Content-Type": "application/json; charset=utf-8"
								},
								body: JSON.stringify({
									videoID: this.videoId,
									logType: r,
									info: JSON.stringify(e)
								})
							}).then((function(t) {
								return t.json()
							})).then((function(t) {}))), "noRecordData" == t ? chrome.runtime.sendMessage({
								action: "googleEvent",
								name: "empty_record_data",
								extra: JSON.stringify(e)
							}) : "noRecordDataFmp4" == t ? chrome.runtime.sendMessage({
								action: "googleEvent",
								name: "empty_record_fmp4_data",
								extra: JSON.stringify(e)
							}) : "saveBackupFailed" == t && chrome.runtime.sendMessage({
								action: "googleEvent",
								name: "save_backup_failed",
								extra: JSON.stringify(e)
							})
						}
					}, {
						key: "updateClickStopStatus",
						value: function(t, e, r) {
							if (e && this.processorMap.has(e)) {
								var n = this.processorMap.get(e).backup;
								n && (r ? null == n || n.update({
									clickStop: "ok",
									stopFrom: t
								}) : null == n || n.update({
									clickStop: "failed",
									stopFrom: t
								}))
							}
						}
					}, {
						key: "prepareProcessor",
						value: (s = fr(sr().mark((function t() {
							var e, r, n;
							return sr().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										e = this.processorType, r = this.options.payload, t.t0 = e, t.next = "download" === t.t0 ? 5 : "storage" === t.t0 ? 7 : "upload" === t.t0 ? 9 : "none" === t.t0 ? 11 : 13;
										break;
									case 5:
										return this.processor = new A, t.abrupt("break", 14);
									case 7:
										return this.processor = new W({
											autoGenerateThumbnail: this.autoGenerateThumbnail
										}), t.abrupt("break", 14);
									case 9:
										return this.processor = new _.Q(this.processorConfig), t.abrupt("break", 14);
									case 11:
										return this.processor = new X(this.processorConfig), t.abrupt("break", 14);
									case 13:
										throw Error("RecorderCompat processorType not supported!");
									case 14:
										return this.processor.onConnected = this.handleProcessorConnected.bind(this), this.processor.onError = this.handleProcessorError.bind(this), this.processor.onProgress = this.handleProcessorProgress.bind(this), this.processor.onSuccess = this.handleProcessorSuccess.bind(this), this.processor.onSliceUploaded = this.handleSliceUploaded.bind(this), this.haveEndRecord = !1, this.sendStopInfo = !1, t.next = 24, this.processor.ready({
											title: this.title,
											payload: r
										});
									case 24:
										return n = t.sent, t.abrupt("return", n);
									case 27:
									case "end":
										return t.stop()
								}
							}), t, this)
						}))), function() {
							return s.apply(this, arguments)
						})
					}, {
						key: "checkEmptyRecordData",
						value: (u = fr(sr().mark((function t(e) {
							var r, n, o, i, a, c, u, s;
							return sr().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if (!(e >= 1e4) || this.haveAlertEmptyData) {
											t.next = 26;
											break
										}
										if (!(this.isEmptyFmp4Data && "output" == this.backupType && this.reportFmp4Time < 5)) {
											t.next = 13;
											break
										}
										return t.next = 5, navigator.storage.estimate();
									case 5:
										r = t.sent, n = r.usage, o = r.quota, (i = {
											msg: "10s no RecordFmp4Data"
										}).usage = n, i.quota = o, this.sendVideoLog("noRecordDataFmp4", i), this.reportFmp4Time = this.reportFmp4Time + 1;
									case 13:
										if (!this.isEmptyData) {
											t.next = 26;
											break
										}
										return this.haveAlertEmptyData = !0, l({
											action: "windowsCreate",
											data: {
												type: "popup",
												url: "/empty-data-alert.html",
												left: 200,
												top: 200,
												width: 634,
												height: 200,
												focused: !0
											}
										}), this.cancel(), t.next = 19, navigator.storage.estimate();
									case 19:
										a = t.sent, c = a.usage, u = a.quota, (s = {
											msg: "10s no RecordData"
										}).usage = c, s.quota = u, this.sendVideoLog("noRecordData", s);
									case 26:
									case "end":
										return t.stop()
								}
							}), t, this)
						}))), function(t) {
							return u.apply(this, arguments)
						})
					}, {
						key: "onStart",
						value: function(t) {
							this.haveAlertEmptyData = !1, this.reportFmp4Time = 0, this.reportEmptyData = 0
						}
					}, {
						key: "onException",
						value: (i = fr(sr().mark((function t(e, r) {
							var n, o, i, a, c, u, s, l;
							return sr().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if ("saveFailed" != e) {
											t.next = 13;
											break
										}
										return t.next = 4, navigator.storage.estimate();
									case 4:
										n = t.sent, o = n.usage, i = n.quota, (a = {
											msg: r
										}).usage = o, a.quota = i, this.sendVideoLog("saveBackupFailed", a), t.next = 24;
										break;
									case 13:
										if (!("emptyBlob" == e && this.reportEmptyData < 22)) {
											t.next = 24;
											break
										}
										return t.next = 16, navigator.storage.estimate();
									case 16:
										c = t.sent, u = c.usage, s = c.quota, (l = {
											msg: r
										}).usage = u, l.quota = s, this.reportEmptyData++, this.sendVideoLog("noRecordData", l);
									case 24:
									case "end":
										return t.stop()
								}
							}), t, this)
						}))), function(t, e) {
							return i.apply(this, arguments)
						})
					}, {
						key: "handleProcessorConnected",
						value: function(t, e) {
							dr(yr(y.prototype), "handleProcessorConnected", this).call(this, t, e)
						}
					}, {
						key: "cancelAction",
						value: (o = fr(sr().mark((function t() {
							var e;
							return sr().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if ("upload" != this.processorType || !this.processor) {
											t.next = 5;
											break
										}
										return t.next = 3, this.processor.cancel();
									case 3:
										return t.next = 5, null === (e = this.backup) || void 0 === e ? void 0 : e.remove();
									case 5:
									case "end":
										return t.stop()
								}
							}), t, this)
						}))), function() {
							return o.apply(this, arguments)
						})
					}, {
						key: "handleProcessorProgress",
						value: function(t, e, r) {
							if (dr(yr(y.prototype), "handleProcessorProgress", this).call(this, t, e, r), a.Z.dispatch("uploadingUpdate"), chrome.runtime.sendMessage({
									action: "uploadingUpdate",
									target: "backupList"
								}), this.haveEndRecord && !this.sendStopInfo && navigator.onLine && e > .5 && t && this.processorMap.has(t)) {
								var n = this.processorMap.get(t),
									o = n.processor,
									i = n.backup;
								if (o && i) {
									var c = i.detail;
									if (this.sendStopInfo = !0, c && "failed" === c.clickStop) {
										var u = Math.floor(c.duration / 1e3);
										this.sendClickStop(t, o, c.stopFrom, u)
									}
								}
							}
						}
					}, {
						key: "handleProcessorError",
						value: function(t, e) {
							if (dr(yr(y.prototype), "handleProcessorError", this).call(this, t, e), this.processorMap.has(t) && "unknown" === e.type) {
								var r = this.processorMap.get(t).backup;
								null == r || r.update({
									processStatus: "failed"
								}), a.Z.dispatch("uploadingUpdate"), chrome.runtime.sendMessage({
									action: "uploadingUpdate",
									target: "backupList"
								})
							}
							a.Z.dispatch("statusChecker")
						}
					}, {
						key: "handleProcessorSuccess",
						value: function(t, e) {
							var r;
							if (t == this.processKey && (this.showStatus === $.uploading && (this.showStatus = $.ready), this.recorderEvent = tt.processing_success, this.refreshStatus(), this.recorderEvent = tt.null, this.foregroundProcessing && this.complete()), this.processorMap.has(t)) {
								var n = this.processorMap.get(t).backup;
								e ? null == n || n.update({
									processStatus: "completed",
									progress: 1,
									originId: e.vid
								}) : null == n || n.update({
									processStatus: "completed",
									progress: 1
								}), a.Z.dispatch("uploadingUpdate"), chrome.runtime.sendMessage({
									action: "uploadingUpdate",
									target: "backupList"
								}), this.setTimeout((function() {
									null == n || n.remove(), a.Z.dispatch("statusChecker")
								}), 400), this.processorMap.delete(t)
							} else a.Z.dispatch("statusChecker");
							null === (r = this.singleLine) || void 0 === r || r.unregister(t)
						}
					}, {
						key: "sendStatusData",
						value: function() {
							this.getStatusData()
						}
					}], r && hr(e.prototype, r), n && hr(e, n), Object.defineProperty(e, "prototype", {
						writable: !1
					}), y
				}(ar);

				function gr(t) {
					return gr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, gr(t)
				}

				function br() {
					br = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == gr(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function wr(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}

				function xr(t) {
					return function() {
						var e = this,
							r = arguments;
						return new Promise((function(n, o) {
							var i = t.apply(e, r);

							function a(t) {
								wr(i, n, o, a, c, "next", t)
							}

							function c(t) {
								wr(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						}))
					}
				}
				var kr = null,
					Sr = !1,
					Er = "",
					Or = null,
					Tr = !1,
					jr = null,
					Ir = 0,
					Lr = null,
					Pr = [],
					_r = [],
					Cr = null,
					Dr = null,
					Rr = null,
					Mr = !1,
					Ar = null,
					Nr = !1,
					Fr = !1,
					Zr = "init",
					Gr = "",
					Ur = 0,
					Br = 0,
					zr = !1,
					Vr = "",
					qr = null,
					Kr = 0,
					Wr = null,
					Hr = !1,
					Yr = [],
					Jr = !1,
					Qr = "0:00",
					$r = null,
					Xr = null,
					tn = 1,
					en = "",
					rn = "auto-stop-timer",
					nn = 0,
					on = "",
					an = !1,
					cn = !!localStorage.isBrave,
					un = document.createElement("video");
				un.muted = !0;
				g.Z.baseUrl;

				function sn() {
					return sn = xr(br().mark((function t(e) {
						var r;
						return br().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									if ("desktop" !== e || !(0, c.fx)()) {
										t.next = 5;
										break
									}
									return t.next = 3, (0, f.cF)("showGuide");
								case 3:
									r = t.sent, a.Z.dispatch("verifyGuide", !r);
								case 5:
								case "end":
									return t.stop()
							}
						}), t)
					}))), sn.apply(this, arguments)
				}

				function ln() {
					P.init(), navigator.brave && navigator.brave.isBrave().then((function(t) {
						cn = t, localStorage.isBrave = !0
					})), chrome.runtime.onMessage.addListener((function(t, e, r) {
						var n;
						if ("offscreen" == t.target) switch (t.action) {
							case "checkpin":
								r("hi");
								break;
							case "tests":
								r("hhh");
								break;
							case "record/start":
								kr = t.recordOptions,
									function(t) {
										sn.apply(this, arguments)
									}(Er = kr.recordType);
								var o = kr.recordingTabId;
								"camera" !== Er && l({
									action: "insertAction",
									tabid: o
								}, (function() {
									l({
										action: "sendMessageToTab",
										tabid: o,
										data: {
											action: "insertRecordDiv"
										}
									}), "custom" == Er && l({
										action: "sendMessageToTab",
										tabid: o,
										data: {
											action: "prepareCustom"
										}
									})
								})), "custom" === Er || (kr.isShowToolbar && Hn(), wn(kr), "camera" !== Er && kr.isRecordCam && Vn(kr.camDeviceId, kr.recordType, !0));
								break;
							case "record/stop":
								Un("recording" !== Zr || t.isDiscard), t.from && (on = t.from), r();
								break;
							case "record/pause":
								Dn();
								break;
							case "record/resume":
								Rn();
								break;
							case "record/discard":
								Un(!0);
								break;
							case "record/changeMic":
								var i = t.deviceId;
								i && (kr.micDeviceId = i, n = i, Ar && (Ar.turnMicTo("on", n), Wn()), hn("mic-deviceId", i));
								break;
							case "record/changeCamera":
								var a = t.deviceId;
								a && (kr.camDeviceId = a, function(t) {
									var e = kr,
										r = (e.camDeviceId, e.recordType);
									zn(), Vn(t, r), Wn()
								}(a), hn("cam-deviceId", a));
								break;
							case "close-camera":
								Kn();
								break;
							case "hideAnnBar":
								Bn();
								break;
							case "embedCameraFailed":
								(0, c.RB)("/getAccess.html"), Ar && Ar.turnCameraTo("off");
								break;
							case "init-camera":
								! function() {
									var t = kr,
										e = t.recordType,
										r = t.camDeviceId;
									"camera" !== e && (Fr || Rr ? Kn() : Vn(r, e))
								}();
								break;
							case "record/getInfo":
								r(function(t) {
									if ("string" == typeof t) return kn(t);
									if (Array.isArray(t)) return t.map((function(t) {
										return kn(t)
									}))
								}(t.keys));
								break;
							case "record/toggleMic":
								! function() {
									Nr ? Ar.turnMicTo("off") : Ar.turnMicTo("on", kr.micDeviceId || "default");
									l({
										action: "updateRecordUI"
									}), Ln("updateRecordUI", {
										audStatus: Ur,
										camStatus: Br
									})
								}();
								break;
							case "record/toggleToolbar":
								! function() {
									var t = kr,
										e = t.recordType,
										r = t.isShowToolbar;
									"camera" !== e && (r ? Bn() : Hn(Gr, kr.cropObj))
								}();
								break;
							case "autoStop/toggle":
								! function(t) {
									Tr = t, t || (timerHour = 0, timerMin = 0, timerSec = 0, Xr = 0);
									gn()
								}(t.isOn);
								break;
							case "autoStop/updateTimer":
								var u = t.data;
								! function(t, e, r) {
									jr.timerHour = t, jr.timerMin = e, jr.timerSec = r, Tr = !0, gn(), An()
								}(u.hour, u.min, u.sec);
								break;
							case "autoStop/resetTimer":
								Xr = Kr;
								break;
							case "recordTime":
								pn(t.data);
								break;
							case "record/startCustom1":
								var s = t.data;
								t.ratio;
								kr.isShowToolbar && Hn(!1, s), kr.streamId = t.streamId, kr.isRecordCam && (Rr ? l({
									action: "sendMessageToTab",
									tabid: Vr,
									data: {
										action: "setup-camera",
										crop: "custom" === Er ? crop : "",
										deviceId: kr.camDeviceId
									}
								}) : Vn(kr.camDeviceId, "custom")), wn(kr, s);
								break;
							case "tabUpdated":
								if (kr) {
									var f = kr.isShowToolbar,
										h = t.tabid;
									f && Hn(Gr, kr.cropObj),
										function(t) {
											var e = kr,
												r = e.micDeviceId,
												n = e.camDeviceId,
												o = {
													audios: Pr.map((function(t) {
														return {
															deviceId: t.deviceId,
															label: t.label
														}
													})),
													cams: _r.map((function(t) {
														return {
															deviceId: t.deviceId,
															label: t.label
														}
													})),
													defaultMic: r || "default",
													defaultCam: n || "default"
												};
											l({
												action: "sendMessageToTab",
												tabid: t,
												data: {
													action: "devices",
													data: o
												}
											})
										}(h)
								}
								break;
							case "reloadRecorder":
								! function() {
									fn.apply(this, arguments)
								}()
						}
					}))
				}

				function fn() {
					return (fn = xr(br().mark((function t() {
						return br().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return t.next = 2, Ar.cancelAction();
								case 2:
									location.reload();
								case 3:
								case "end":
									return t.stop()
							}
						}), t)
					})))).apply(this, arguments)
				}

				function hn(t, e) {
					return dn.apply(this, arguments)
				}

				function dn() {
					return (dn = xr(br().mark((function t(e, r) {
						var n;
						return br().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									e && r && ((n = {})[e] = r, l({
										action: "updateStorage",
										type: "options",
										data: n
									}));
								case 1:
								case "end":
									return t.stop()
							}
						}), t)
					})))).apply(this, arguments)
				}

				function pn(t) {
					l({
						action: "setBadge",
						type: "text",
						data: Qr = t
					}), a.Z.dispatch("timeUpdated", Qr), Ln("updateRecordTime", Qr)
				}

				function vn(t, e) {
					var r = !1;
					t !== Fr && (Fr = t, r = !0, Br = t ? 2 : _r.length > 0 ? 1 : 3), e !== Nr && (Nr = e, r = !0, Ur = e ? 2 : Pr.length > 0 ? 1 : 3), r && (l({
						action: "updateRecordUI"
					}), Ln("updateRecordUI", {
						audStatus: Ur,
						camStatus: Br
					}))
				}

				function yn(t, e) {
					Ar || ((Ar = globalThis.window ? new mr({
						backupStrategy: "upload",
						mimeTypes: [Gn()],
						timeSlice: 500,
						noFragmentedMp4: !0,
						pipCameraAspectRatio: 1.78,
						setTimeout: (0, c.fx)() ? cr.$ : null,
						clearTimeout: (0, c.fx)() ? cr.x : null,
						foregroundProcessing: !1,
						mediaSources: ["screen", "window", "audio"]
					}) : null).onCatch = function(t, e) {
						"cancelShareScreen" === t || ("startFailed" === t ? (! function(t) {
							var e, r;
							t && ("NotAllowedError" === t.name ? /Permission denied by system/.test(t) ? (e = "mac", /Mac OS/.test(window.navigator.userAgent) || (e = "win"), /\[Mic\]/.test(t) ? r = "mic" : "camera" === kr.recordType && (r = "camera")) : /Could not start audio source/.test(t) && (e = "win", r = "mic") : "NotReadableError" === t.name && (e = "mac", r = "browser_issue", /Mac OS/.test(window.navigator.userAgent) || (e = "win", r = "mic")));
							if (e) {
								var n = "/permission-denied.html?os=" + e;
								r && (n += "&type=" + r), l({
									action: "openNewTab",
									data: n
								})
							}
						}(e), Tn()) : "cameraUnavailable" === t && ((0, c.RB)("/getAccess.html"), Fr = !1))
					}, Ar.showTimer = function(t) {
						t.length > 2 && (pn(t), An())
					}), Ar.ready({
						recordType: "custom" === t.recordType ? "tab" : t.recordType,
						microphone: {
							deviceId: t.micDeviceId,
							open: t.isRecordMic
						},
						camera: {
							deviceId: t.camDeviceId,
							open: t.isRecordCam
						},
						crop: e || "",
						quality: {
							equivalent: "4k" == t.resolution ? "4k" : t.resolution + "p"
						},
						tabId: t.recordingTabId,
						streamId: t.streamId,
						processorType: "local" === t.saveLocation ? "none" : "upload",
						countdown: 1e3 * parseInt(kr.countdown),
						tabAudio: t.isRecordTabSound,
						title: t.recordingTabTitle,
						payload: {
							videoCodec: d ? d.videoCodec : "webm",
							tabUrl: t.recordingTabUrl,
							tabTitle: t.recordingTabTitle,
							appAndPlatform: Sn(),
							recordType: t.recordType,
							recorderVersion: t.recorderVersion,
							appVersion: navigator.userAgent,
							screenSize: t.screenWidth + "*" + t.screenHeight
						}
					}), Ar.onStatusChange = function() {
						var t = xr(br().mark((function t(e) {
							var r, n, o, i, u, s, f, h, d, p, v, y, g, b, w, x;
							return br().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										r = e.showStatus, a.Z.dispatch("uploadingUpdate"), l({
											action: "uploadingUpdate",
											target: "backupList"
										}), 1 === r ? e.recorderEvent == tt.stop ? (setTimeout((function() {
											On()
										}), 100), a.Z.dispatch("statusChecker")) : e.recorderEvent != tt.cancel && e.recorderEvent !== tt.abort_cancel || (Wr && Wr.saveName && m.Z.remove(Wr.saveName), Wr && Wr.info && P.delete(Wr.info.id), Vr && l({
											action: "sendMessageToTab",
											tabid: Vr,
											data: {
												action: "stop-countdown"
											}
										}), a.Z.dispatch("discardAction", Ar.backupKey), a.Z.dispatch("statusChecker"), On(), o = (n = kr).recordType, i = n.recordBgTabId, u = n.mainWinId, s = n.recordBgWinId, "desktop" === o && (0, c.fx)() && T(i, u, s), l({
											action: "uploadingUpdate",
											target: "backupList"
										})) : 3 === r ? (pn(Qr), vn(e.isCameraOn, e.isMicOn), jn("recording")) : 4 === r ? vn(e.isCameraOn, e.isMicOn) : 5 === r ? (h = (f = kr).recordType, d = f.recordBgTabId, p = f.mainWinId, v = f.recordBgWinId, "desktop" === h && (0, c.fx)() && T(d, p, v)) : 6 === r && (g = (y = kr).recordType, b = y.recordBgTabId, w = y.mainWinId, x = y.recordBgWinId, "desktop" === g && (0, c.fx)() && T(b, w, x), xn(), l({
											action: "prepare-recording"
										}), gn(), mn(), Tn(), a.Z.dispatch("statusChecker"));
									case 5:
									case "end":
										return t.stop()
								}
							}), t)
						})));
						return function(e) {
							return t.apply(this, arguments)
						}
					}(), Ar.onDataAvailable = function(e) {
						"local" === t.saveLocation && function(t) {
							Cn.apply(this, arguments)
						}(e.data)
					}
				}

				function mn() {
					var t = Ar.getTask("norm-task");
					t || (t = {
						id: "norm-task",
						init: function() {},
						generate: function(t, e) {
							return function(t) {
								var e = kr,
									r = e.isSaveLocal,
									n = e.saveLocation;
								cn || navigator.storage.estimate().then((function(t) {
									var e = t.quota - t.usage;
									if (!isNaN(e) && e < p * y) {
										Ar.updateStorageAlert(!0), Un();
										var r = window.screen.width,
											n = window.screen.height,
											o = (r - 400) / 2,
											i = (n - 380) / 2;
										setTimeout((function() {
											l({
												action: "windowsCreate",
												data: {
													type: "popup",
													url: "/storage-alert.html",
													left: o || 200,
													top: i || 200,
													width: 500,
													height: 470,
													focused: !0
												}
											})
										}), 2e3)
									} else !isNaN(e) && e < p * v && !an && (Ar.updateStorageAlert(!0), an = !0)
								}));
								var o = Ar.getTask(rn);
								"cloud" !== n || r || o || l({
									action: "getPremiumLevel"
								}, (function(e) {
									var r = e ? 144e5 : 108e5;
									t >= tn * r && t <= tn * r + 100 && (l({
										action: "windowsCreate",
										data: {
											type: "popup",
											url: "/notification.html",
											left: 0,
											top: 0,
											width: 300,
											height: 400,
											focused: !0
										}
									}), tn++)
								}));
								Ar.checkEmptyRecordData(t), t >= 301e3 && l({
									action: "getStorage",
									type: "userinfo"
								}, (function(t) {
                                    t.userinfo.premiumLevel = 2
									t.userinfo ? "local" === n || r ? t.userinfo.premiumLevel < 2 && (1 === t.userinfo.premiumLevel && 0 === t.userinfo.newPremium || Un()) : t.userinfo.videoTotalLimitation >= t.userinfo.videoLimitation && t.userinfo.premiumLevel < 2 && (on = "5mins_stop", Un()) : Un()
								}));
								t >= 216e5 && (on = "6hours", Un())
							}(e), Kr = e, !1
						}
					}, Ar.setTask(t))
				}

				function gn() {
					var t = Ar.getTask(rn);
					if (Tr && jr.timerHour + jr.timerMin + jr.timerSec > 0) {
						var e = Kr,
							r = 1e3 * (jr.timerSec + 60 * jr.timerMin + 3600 * jr.timerHour) + (e || 0);
						nn = r + 100, t ? t.duration = nn : Ar.setTask({
							id: rn,
							action: "stop",
							duration: nn
						})
					} else t && Ar.removeTask(rn)
				}

				function bn() {
					return kr ? kr.saveLocation : "local"
				}

				function wn(t, e) {
					Wr = null, Hr = !1, Jr = !1, Yr = [], Qr = "0:00", on = "", kr = t, yn(t, e), kr.isSaveLocal = "local" === t.saveLocation, Vr = kr.recordingTabId, !1, e && (Or = e, kr.cropObj = e), Sr = !0, l({
						action: "keepAwake"
					}), l({
						action: "updateContextMenu",
						isBeginRecorded: Sr
					}), Tr = t.isAutoStop, jr = {
						timerHour: t.autoStopHour,
						timerMin: t.autoStopMin,
						timerSec: t.autoStopSec
					}, Ir = parseInt(kr.countdown), s().then((function(t) {
						var e, r, n;
						Pr = t.availableAudioDevices, _r = t.availableVideoDevices, r = (e = kr).micDeviceId, n = e.camDeviceId, l({
							action: "broadCastMessage",
							data: {
								action: "devices",
								data: {
									audios: Pr.map((function(t) {
										return {
											deviceId: t.deviceId,
											label: t.label
										}
									})),
									cams: _r.map((function(t) {
										return {
											deviceId: t.deviceId,
											label: t.label
										}
									})),
									defaultMic: r || "default",
									defaultCam: n || "default"
								}
							}
						})
					})), jn("preparing")
				}

				function xn() {
					var t = kr.countdown;
					l({
						action: "setBadge",
						type: "color",
						data: h
					}), t > 0 ? Vr && "camera" !== Er ? l({
						action: "insertAction",
						tabid: Vr
					}, (function() {
						l({
							action: "sendMessageToTab",
							tabid: Vr,
							data: {
								action: "startCountDown",
								countdown: parseInt(t)
							}
						}), In()
					})) : In() : En()
				}

				function kn(t) {
					switch (t) {
						case "time":
							return Qr;
						case "isInCountdown":
							return Mr;
						case "isPaused":
							return zr;
						case "socketClient":
							return $r;
						case "autoTimerInfo":
							return jr;
						case "isAutoTimerStop":
							return Tr;
						case "recordTimeLength":
							return Kr;
						case "startAutoStop":
							return Xr;
						case "countdown":
							return Ir;
						case "cameraStream":
							return Fr || !!Rr;
						case "audioStream":
							return Nr;
						case "isShowToolbar":
							return kr.isShowToolbar;
						case "isBeginRecorded":
							return Sr;
						case "recordingStatus":
							return Zr;
						case "autoStopTime":
							return en;
						case "devicesInfo":
							return {
								audioDevices: Pr.length, videoDevices: _r.length
							}
					}
				}

				function Sn() {
					return /Edg/.test(navigator.userAgent) ? "Edge extension" : "Chrome extension"
				}

				function En() {
					Ln("done_start"), !0, l({
						action: "start-recording"
					}), Gr = !0, jn("recording"), (new Date).getTime()
				}

				function On() {
					var t = kr.isShowToolbar;
					Vr && (l({
						action: "sendMessageToTab",
						tabid: Vr,
						data: {
							action: "removeRecordDiv"
						}
					}), l({
						action: "sendMessageToTab",
						tabid: Vr,
						data: {
							action: "endSelect"
						}
					})), l({
						action: "stop-recording",
						data: !0
					}), l({
						action: "setRecordDefault"
					}), Cr && (Cr.getTracks().forEach((function(t) {
						t.stop()
					})), Cr.onended && Cr.onended()), Qr = "0:00", l({
						action: "updateContextMenu",
						isBeginRecorded: !1
					}), t && ({
						mouseMode: "mouse",
						currentMouse: "default",
						drawMode: "freeline",
						currentColor: "red",
						isCollapse: !1,
						isPaused: !1
					}, Bn()), Fr = !1, Nr = !1, an = !1, null, localStorage.alertStorage = "0", l({
						action: "releaseKeepAwake"
					}), Dr && Dr.stop(), Rr && zn(), Lr && (clearInterval(Lr), Lr = null), Sr = !1, Ar = null, Cr = null, Dr = null, Rr = null, Gr = !1, jn("init"), null, zr = !1, tn = 1, Ir = 0, Mr = !1, qr && (clearInterval(qr), qr = null), Vr = "", "", !1, !1, Ur = 1, Br = 1, l({
						action: "setBadge",
						type: "text",
						data: ""
					}), Xr = 0, Kr = 0, Tr = !1, en = ""
				}

				function Tn() {
					l({
						action: "updateStorage",
						type: "options",
						data: {
							"auto-timer-stop": !1,
							"auto-hour": 0,
							"auto-min": 0,
							"auto-sec": 0
						}
					})
				}

				function jn(t) {
					Zr = t, l({
						action: "saveStorage",
						type: "recordingStatus",
						data: t
					}), a.Z.dispatch("statusChange", t)
				}

				function In() {
					Mr = !0, jn("countdown"), l({
						action: "setBadge",
						type: "text",
						data: Ir + ""
					}), a.Z.dispatch("countdownChange", Ir), Lr = setInterval((function() {
						if (1 === Ir) return clearInterval(Lr), l({
							action: "setBadge",
							type: "text",
							data: "0:00"
						}), Ir = 0, void En();
						Ir >= 1 ? (l({
							action: "setBadge",
							type: "text",
							data: --Ir + ""
						}), a.Z.dispatch("countdownChange", Ir)) : clearInterval(Lr)
					}), 990)
				}

				function Ln(t, e) {
					var r = kr.recordType;
					"desktop" === r ? l({
						action: "broadCastMessage",
						data: {
							action: t,
							data: e
						}
					}) : "tab" !== r && "custom" !== r || Vr && l({
						action: "sendMessageToTab",
						tabid: Vr,
						data: {
							action: t,
							data: e
						}
					})
				}

				function Pn(t, e) {
					var r = kr.recordType;
					return new Promise((function(n) {
						Hr && n(), Wr = {
							size: 0
						};
						var o = function(t) {
								if ("desktop" === t || "tab" === t || "custom" === t) return kr.recordingTabTitle;
								if ("camera" === t) {
									var e = new Date;
									return "Camera-" + (e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + "-" + e.getHours() + "-" + e.getMinutes() + "-" + e.getSeconds())
								}
							}(r),
							i = function(t) {
								if ("desktop" === t) var e = "Desktop";
								else if ("tab" === t || "custom" === t) e = "Tab";
								else if ("camera" === t) e = "Camera";
								return e + "-" + (new Date).getTime()
							}(r);
						m.Z.save(t, i).then((function(r) {
							return P.save({
								fileUrl: r,
								title: o,
								size: (0, c.RD)(t.size),
								duration: e,
								recordType: kr.recordType,
								codecs: d.videoCodec
							})
						})).then((function(t) {
							Wr.saveName = i, Wr.info = t, Hr = !0, Jr = !1, n()
						}))
					}))
				}

				function _n() {
					for (Jr = !0; Yr.length > 0 && Wr;) {
						var t = Yr.shift();
						m.Z.append(t, Wr.saveName);
						var e = Wr.info;
						e.detail && (Wr.size += t.size, e.detail.size = (0, c.RD)(Wr.size), "0:00" != Qr && (e.detail.duration = Qr), P.update(e.id, Wr.info))
					}
					Jr = !1
				}

				function Cn() {
					return (Cn = xr(br().mark((function t(e) {
						return br().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									kr.recordType, e && (Wr ? (Yr.push(e), Hr && !Jr && _n()) : Pn(e, Qr).then((function() {
										Jr || _n()
									})));
								case 3:
								case "end":
									return t.stop()
							}
						}), t)
					})))).apply(this, arguments)
				}

				function Dn(t, e) {
					var r = kr,
						n = r.recordType;
					r.isShowToolbar, r.saveLocation, r.isSaveLocal;
					zr || (Ar.pause(), zr = !0, Mn(!0), "camera" === n && l({
						action: "pause-recording"
					}), a.Z.dispatch("togglePaused", !0))
				}

				function Rn() {
					Ar.resume(), zr = !1, Mn(!1), a.Z.dispatch("togglePaused", !1)
				}

				function Mn(t) {
					var e = kr,
						r = e.recordType,
						n = e.isShowToolbar;
					t ? n && ("tab" === r || "custom" === r ? Vr && l({
						action: "sendMessageToTab",
						tabid: Vr,
						data: {
							action: "pause"
						}
					}) : "desktop" === r ? l({
						action: "broadCastMessage",
						data: {
							action: "pause"
						}
					}) : "camera" === r && l({
						action: "pause-recording"
					})) : n && ("tab" === r || "custom" === r ? l({
						action: "sendMessageToTab",
						tabid: Vr,
						data: {
							action: "resume"
						}
					}) : "desktop" === r ? l({
						action: "broadCastMessage",
						data: {
							action: "resume"
						}
					}) : "camera" === r && l({
						action: "resume-recording"
					}))
				}

				function An() {
					var t = jr,
						e = t.timerHour,
						r = t.timerMin,
						n = t.timerSec;
					if (Tr && e + r + n > 0) {
						Ar.getStatusData();
						var o = 0;
						nn - 200 >= Kr && (o = nn - Kr - 200), o = Math.floor(o / 1e3);
						var i = Math.floor(o / 3600),
							a = Math.floor((o - 3600 * i) / 60),
							c = o % 60;
						c < 10 && (c = "0" + c), en = (i > 0 ? i + ":" : "") + (i > 0 && 0 == a ? "00" : a) + ":" + c
					}
				}

				function Nn() {
					setTimeout((function() {
						Wr && Wr.info && Wr.info.id && l({
							action: "openNewTab",
							data: "/video-react.html?id=" + Wr.info.id
						})
					}), 250), On(), chrome.storage && (0, f.Ot)("showGuide", !0)
				}

				function Fn(t) {
					return Zn.apply(this, arguments)
				}

				function Zn() {
					return (Zn = xr(br().mark((function t(e) {
						var r;
						return br().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									if (!e) {
										t.next = 4;
										break
									}
									l({
										action: "openNewTab",
										data: g.Z.baseUrl + "/video/" + e
									}), t.next = 12;
									break;
								case 4:
									if (!chrome.storage) {
										t.next = 11;
										break
									}
									return t.next = 7, (0, f.cF)("recordTab");
								case 7:
									(r = t.sent) && chrome.tabs.update(r, {
										pinned: !0,
										highlighted: !0
									}), t.next = 12;
									break;
								case 11:
									l({
										action: "openNewTab",
										data: "/backup-list.html"
									});
								case 12:
									chrome.storage && (0, f.Ot)("showGuide", !0), On();
								case 14:
								case "end":
									return t.stop()
							}
						}), t)
					})))).apply(this, arguments)
				}

				function Gn() {
					return d ? d.mimeType : "video/webm;codecs=vp8"
				}

				function Un(t, e) {
					t ? Ar.cancel() : Ar.safeStop(), e && (on = e)
				}

				function Bn() {
					kr.isShowToolbar;
					Ln("remove-toolbar", {}), kr.isShowToolbar = !1, l({
						action: "updateRecordUI"
					})
				}

				function zn(t) {
					Rr && (Rr.id && Rr.getTracks().forEach((function(e) {
						e.stop(), t && t()
					})), Rr = null, un.srcObject = null, !1, l({
						action: "updateRecordUI"
					}), Ln("updateRecordUI", {
						audStatus: Ur,
						camStatus: Br = 1
					}))
				}

				function Vn(t, e, r) {
					return qn.apply(this, arguments)
				}

				function qn() {
					return qn = xr(br().mark((function t(e, r, n) {
						var o, i, a;
						return br().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									"tab" === r || "custom" === r ? (i = (o = kr).recordingTabId, a = o.camDeviceId, n ? (l({
										action: "sendMessageToTab",
										tabid: i,
										data: {
											action: "setup-camera",
											crop: "custom" === r ? Or : "",
											deviceId: a
										}
									}), Rr = !0) : Ar.turnCameraTo("on", e || "default")) : Ar.turnCameraTo("on", e || "default"), n && Ln("updateRecordUI", {
										audStatus: Ur,
										camStatus: Br
									});
								case 2:
								case "end":
									return t.stop()
							}
						}), t)
					}))), qn.apply(this, arguments)
				}

				function Kn() {
					var t = kr,
						e = t.recordType,
						r = t.recordingTabId;
					l("tab" === e || "custom" === e ? {
						action: "sendMessageToTab",
						tabid: r,
						data: {
							action: "stop-camera"
						}
					} : {
						action: "stop-camera"
					}), zn(), Ar && Ar.turnCameraTo("off")
				}

				function Wn() {
					var t = kr,
						e = t.micDeviceId,
						r = t.camDeviceId;
					Ln("defaultDevice", {
						defaultMic: e || "default",
						defaultCam: r || "default"
					})
				}

				function Hn(t, e) {
					var r = kr,
						n = r.recordType,
						o = r.recordingTabId;
					r.isShowToolbar;
					"tab" === n || "custom" === n ? l({
						action: "insertContent",
						tabid: o,
						data: {
							action: "setup-toolbar",
							isRecorded: t,
							crop: "custom" === n ? e : "",
							audStatus: Ur,
							camStatus: Br,
							recordTime: Qr,
							isPaused: zr
						}
					}) : "desktop" === n && l({
						action: "insertAllContent",
						data: {
							action: "setup-toolbar",
							isRecorded: t,
							audStatus: Ur,
							camStatus: Br,
							recordTime: Qr,
							isPaused: zr
						}
					}), kr.isShowToolbar = !0, l({
						action: "updateRecordUI"
					})
				}
				P.init(), chrome.runtime.connect({
					name: "record"
				}).onMessage.addListener((function(t) {
					t.action
				}));
				var Yn = r(85893);

				function Jn(t, e) {
					return function(t) {
						if (Array.isArray(t)) return t
					}(t) || function(t, e) {
						var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
						if (null != r) {
							var n, o, i, a, c = [],
								u = !0,
								s = !1;
							try {
								if (i = (r = r.call(t)).next, 0 === e) {
									if (Object(r) !== r) return;
									u = !1
								} else
									for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
							} catch (t) {
								s = !0, o = t
							} finally {
								try {
									if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
								} finally {
									if (s) throw o
								}
							}
							return c
						}
					}(t, e) || function(t, e) {
						if (!t) return;
						if ("string" == typeof t) return Qn(t, e);
						var r = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === r && t.constructor && (r = t.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(t);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qn(t, e)
					}(t, e) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function Qn(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
					return n
				}
				const $n = function() {
					var t = Jn((0, o.useState)(0), 2),
						e = t[0],
						r = t[1];

					function n(t) {
						r(t)
					}
					return (0, o.useEffect)((function() {
						a.Z.on("countdownChange", n)
					}), []), (0, Yn.jsxs)("div", {
						className: "countdown-panel",
						children: [(0, Yn.jsx)("div", {
							className: "cd-tip",
							children: "Recording will start in"
						}), (0, Yn.jsx)("div", {
							className: "cd-text",
							children: e
						})]
					})
				};
				r(81211);
				var Xn = r(2214),
					to = r(35552);
				const eo = function(t) {
					var e = t.time,
						r = t.isPaused,
						n = t.handlePause,
						o = t.handleResume,
						i = t.handleDiscard,
						a = t.handleStop;
					return (0, Yn.jsxs)("div", {
						className: "record-panel ".concat(r ? "paused" : ""),
						children: [(0, Yn.jsx)("div", {
							className: "recording-status",
							children: (0, Yn.jsxs)(Yn.Fragment, {
								children: [(0, Yn.jsx)("div", {
									className: "recording-icon ".concat(r ? "paused" : "")
								}), r ? "Paused" : "Recording"]
							})
						}), (0, Yn.jsx)("div", {
							className: "time",
							children: e
						}), (0, Yn.jsxs)("div", {
							className: "btn-area",
							children: [(0, Yn.jsx)("div", {
								className: "record-action-btn tiny",
								onClick: function() {
									Xn.Z.confirm({
										title: chrome.i18n.getMessage("warning"),
										content: chrome.i18n.getMessage("discard_p"),
										okText: chrome.i18n.getMessage("discard_p_yes"),
										cancelText: chrome.i18n.getMessage("discard_p_no"),
										onOk: i,
										okType: "danger"
									})
								},
								children: (0, Yn.jsx)(to.GR, {})
							}), (0, Yn.jsxs)("div", {
								className: "actions",
								children: [r ? (0, Yn.jsx)("div", {
									className: "record-action-btn tiny",
									onClick: o,
									children: (0, Yn.jsx)(to.a6, {})
								}) : (0, Yn.jsx)("div", {
									className: "record-action-btn tiny",
									onClick: n,
									children: (0, Yn.jsx)(to.HC, {})
								}), (0, Yn.jsxs)("div", {
									className: "record-action-btn stop",
									onClick: a,
									children: [(0, Yn.jsx)(to.UB, {}), "Stop"]
								})]
							})]
						})]
					})
				};

				function ro(t, e) {
					return function(t) {
						if (Array.isArray(t)) return t
					}(t) || function(t, e) {
						var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
						if (null != r) {
							var n, o, i, a, c = [],
								u = !0,
								s = !1;
							try {
								if (i = (r = r.call(t)).next, 0 === e) {
									if (Object(r) !== r) return;
									u = !1
								} else
									for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
							} catch (t) {
								s = !0, o = t
							} finally {
								try {
									if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
								} finally {
									if (s) throw o
								}
							}
							return c
						}
					}(t, e) || function(t, e) {
						if (!t) return;
						if ("string" == typeof t) return no(t, e);
						var r = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === r && t.constructor && (r = t.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(t);
						if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return no(t, e)
					}(t, e) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function no(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
					return n
				}
				const oo = function(t) {
					t.status;
					var e = ro((0, o.useState)("00:00"), 2),
						r = e[0],
						n = e[1],
						i = ro((0, o.useState)(!1), 2),
						c = i[0],
						u = i[1];

					function s(t) {
						u(t)
					}

					function l(t) {
						n(t)
					}
					return (0, o.useEffect)((function() {
						return a.Z.on("timeUpdated", l), a.Z.on("togglePaused", s),
							function() {
								a.Z.remove("timeUpdated", l), a.Z.remove("togglePaused", s)
							}
					}), []), (0, Yn.jsx)(eo, {
						time: r,
						isPaused: c,
						handlePause: function() {
							Dn()
						},
						handleResume: function() {
							Rn()
						},
						handleDiscard: function() {
							Un(!0)
						},
						handleStop: function() {
							Un(!1, "pinTab")
						}
					})
				};
				var io = r(59631),
					ao = r(95915);
				const co = function(t) {
					var e = t.showGuide,
						r = t.isWindows;
					return (0, Yn.jsxs)("div", {
						className: "guide-container ".concat(e ? "show" : ""),
						children: [(0, Yn.jsxs)("div", {
							className: "bubble left-top",
							children: [(0, Yn.jsx)("div", {
								className: "guide-title",
								children: "Step 1"
							}), (0, Yn.jsx)("div", {
								className: "guide-msg",
								children: "Click to select the screen under entir screen"
							})]
						}), r ? (0, Yn.jsxs)("div", {
							className: "bubble left-bottom",
							children: [(0, Yn.jsx)("div", {
								className: "guide-title",
								children: "Step 2"
							}), (0, Yn.jsx)("div", {
								className: "guide-msg",
								children: "Check the system sound"
							})]
						}) : (0, Yn.jsx)(Yn.Fragment, {}), (0, Yn.jsxs)("div", {
							className: "bubble right-bottom ".concat(r ? "windows" : ""),
							children: [(0, Yn.jsx)("div", {
								className: "guide-title",
								children: r ? "Step 3" : "Step 2"
							}), (0, Yn.jsx)("div", {
								className: "guide-msg",
								children: "Click the Share button to start recording."
							}), (0, Yn.jsx)(to.m2, {})]
						})]
					})
				};
				var uo = r(35036);

				function so(t) {
					return so = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, so(t)
				}

				function lo(t) {
					return bo(t) || function(t) {
						if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
					}(t) || mo(t) || yo()
				}

				function fo() {
					fo = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof h ? e : h,
							a = Object.create(i.prototype),
							c = new O(o || []);
						return n(a, "_invoke", {
							value: x(t, r, c)
						}), a
					}

					function l(t, e, r) {
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
					t.wrap = s;
					var f = {};

					function h() {}

					function d() {}

					function p() {}
					var v = {};
					u(v, i, (function() {
						return this
					}));
					var y = Object.getPrototypeOf,
						m = y && y(y(T([])));
					m && m !== e && r.call(m, i) && (v = m);
					var g = p.prototype = h.prototype = Object.create(v);

					function b(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function w(t, e) {
						function o(n, i, a, c) {
							var u = l(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									f = s.value;
								return f && "object" == so(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(f).then((function(t) {
									s.value = t, a(s)
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

					function x(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return j()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = k(a, r);
									if (c) {
										if (c === f) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = l(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function k(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
						var o = l(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, f;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
					}

					function S(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function E(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function O(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(S, this), this.reset(!0)
					}

					function T(t) {
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
							next: j
						}
					}

					function j() {
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
					}), d.displayName = u(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, c, "GeneratorFunction")), t.prototype = Object.create(g), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, b(w.prototype), u(w.prototype, a, (function() {
						return this
					})), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new w(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, b(g), u(g, c, "Generator"), u(g, i, (function() {
						return this
					})), u(g, "toString", (function() {
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
					}, t.values = T, O.prototype = {
						constructor: O,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), f
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										E(r)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, e, r) {
							return this.delegate = {
								iterator: T(t),
								resultName: e,
								nextLoc: r
							}, "next" === this.method && (this.arg = void 0), f
						}
					}, t
				}

				function ho(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}

				function po(t) {
					return function() {
						var e = this,
							r = arguments;
						return new Promise((function(n, o) {
							var i = t.apply(e, r);

							function a(t) {
								ho(i, n, o, a, c, "next", t)
							}

							function c(t) {
								ho(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						}))
					}
				}

				function vo(t, e) {
					return bo(t) || function(t, e) {
						var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
						if (null != r) {
							var n, o, i, a, c = [],
								u = !0,
								s = !1;
							try {
								if (i = (r = r.call(t)).next, 0 === e) {
									if (Object(r) !== r) return;
									u = !1
								} else
									for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
							} catch (t) {
								s = !0, o = t
							} finally {
								try {
									if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
								} finally {
									if (s) throw o
								}
							}
							return c
						}
					}(t, e) || mo(t, e) || yo()
				}

				function yo() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}

				function mo(t, e) {
					if (t) {
						if ("string" == typeof t) return go(t, e);
						var r = Object.prototype.toString.call(t).slice(8, -1);
						return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? go(t, e) : void 0
					}
				}

				function go(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
					return n
				}

				function bo(t) {
					if (Array.isArray(t)) return t
				}
				if (window) {
					var wo = document.createElement("script");
					wo.src = "./mp4_muxer.js", document.head.appendChild(wo), window.Module = {}, window.Module.inited = !1, window.Module.onRuntimeInitialized = function() {
						window.Module.inited = !0
					}
				}
				const xo = function() {
					var t = vo((0, o.useState)("init"), 2),
						e = t[0],
						r = t[1],
						n = vo((0, o.useState)([]), 2),
						u = n[0],
						s = n[1],
						l = vo((0, o.useState)(0), 2),
						f = l[0],
						h = l[1],
						d = vo((0, o.useState)(!1), 2),
						p = d[0],
						v = d[1],
						y = vo((0, o.useState)(!0), 2),
						m = y[0],
						g = y[1],
						b = vo((0, o.useState)(!1), 2),
						w = b[0],
						x = b[1],
						k = vo((0, o.useState)(5), 2),
						S = k[0],
						E = k[1],
						O = vo((0, o.useState)(!1), 2),
						T = O[0],
						j = O[1],
						I = null,
						L = (0, o.createRef)();
					L.current = u;
					var P = 5,
						_ = (0, o.createRef)();
					_.current = e;
					var C = 0;
					(0, o.useEffect)((function() {
						return ln(), a.Z.on("statusChange", Z), a.Z.on("uploadingUpdate", K), a.Z.on("statusChecker", G), a.Z.on("verifyGuide", F), a.Z.on("discardAction", N), a.Z.on("checkBackUp", M), document.title = "Recorder", g(navigator.onLine), setTimeout((function() {
								A(!0)
							}), 400), (0, c.fx)() && (window.onbeforeunload = D, K()), (0, c.fx)() && document.addEventListener("visibilitychange", po(fo().mark((function t() {
								var e;
								return fo().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return t.next = 3, chrome.tabs.getCurrent();
										case 3:
											if (t.sent, "visible" !== document.visibilityState) {
												t.next = 12;
												break
											}
											return t.next = 8, chrome.tabs.getCurrent();
										case 8:
											(e = t.sent) && e.pinned && (A(!0), K()), B();
										case 12:
										case "end":
											return t.stop()
									}
								}), t)
							})))), window.addEventListener("offline", (function(t) {
								g(!1), R(!1)
							})), window.addEventListener("online", (function(t) {
								g(!0), R(!0)
							})), window.navigator.connection.onchange = R, B(),
							function() {
								window.onbeforeunload = null
							}
					}), []);
					var D = function(t) {
						("init" !== e || L.current.length > 0) && (t.returnValue = "changes you made may not be saved.")
					};

					function R(t) {
						var e = window.navigator.connection.downlink;
						navigator.onLine ? (x(e < .15), e > .001 && A(t)) : x(!0)
					}

					function M() {
						A(!0)
					}

					function A(t) {
						var e = (new Date).getTime();
						e - C > 7e4 && navigator.onLine && t && !t.type && (C = e, (0, uo.Os)())
					}

					function N(t) {
						if (L.current.length > 0 && t >= 0) {
							var e = L.current.find((function(e) {
								return e.key === t
							}));
							if (e) {
								var r = L.current.indexOf(e);
								L.current.splice(r, 1);
								var n = lo(L.current).slice(0);
								s(n), L.current = n
							}
						}
					}

					function F(t) {
						v(t)
					}

					function Z(t) {
						r(t), _.current = t, G(), K(), "preparing" !== t && v(!1), "init" !== t ? j(!1) : B()
					}

					function G() {
						return U.apply(this, arguments)
					}

					function U() {
						return (U = po(fo().mark((function t() {
							return fo().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, (0, uo.RC)();
									case 2:
										if (0 == t.sent.length ? chrome.runtime.sendMessage({
												action: "offScreenStatus",
												data: !1
											}) : chrome.runtime.sendMessage({
												action: "offScreenStatus",
												data: !0
											}), !(0, c.fx)()) {
											t.next = 9;
											break
										}
										return t.next = 7, (0, uo.ip)();
									case 7:
										0 == t.sent.length && "init" === e && B();
									case 9:
									case "end":
										return t.stop()
								}
							}), t)
						})))).apply(this, arguments)
					}

					function B() {
						return z.apply(this, arguments)
					}

					function z() {
						return (z = po(fo().mark((function t() {
							var e;
							return fo().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if (!(0, c.fx)()) {
											t.next = 9;
											break
										}
										return t.next = 4, chrome.tabs.getCurrent();
									case 4:
										return e = t.sent, t.next = 7, (0, uo.ip)();
									case 7:
										0 == t.sent && "init" === _.current ? (j(!0), e.highlighted ? null === I ? (E(P = 5), I = setInterval((function() {
											V()
										}), 1e3)) : (E(P = 5), clearInterval(I), I = setInterval((function() {
											V()
										}), 1e3)) : (I && clearInterval(I), I = null, P < 3 && (P = 3), E(P), I = setInterval(po(fo().mark((function t() {
											return fo().wrap((function(t) {
												for (;;) switch (t.prev = t.next) {
													case 0:
														V();
													case 1:
													case "end":
														return t.stop()
												}
											}), t)
										}))), 1e3))) : I && (j(!1), E(P = 5), clearInterval(I), I = null);
									case 9:
									case "end":
										return t.stop()
								}
							}), t)
						})))).apply(this, arguments)
					}

					function V() {
						return q.apply(this, arguments)
					}

					function q() {
						return (q = po(fo().mark((function t() {
							var e, r;
							return fo().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if (P--, E(P), !(P <= 0)) {
											t.next = 13;
											break
										}
										if (clearInterval(I), !(0, c.fx)()) {
											t.next = 13;
											break
										}
										return t.next = 8, chrome.tabs.getCurrent();
									case 8:
										return e = t.sent, t.next = 11, (0, uo.ip)();
									case 11:
										r = t.sent, e && e.pinned && (0, c.fx)() && "init" === _.current && 0 == r.length && (L.current = [], I = null, window.close());
									case 13:
									case "end":
										return t.stop()
								}
							}), t)
						})))).apply(this, arguments)
					}

					function K() {
						return W.apply(this, arguments)
					}

					function W() {
						return (W = po(fo().mark((function t() {
							var e;
							return fo().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, (0, uo.ip)();
									case 2:
										(e = t.sent).length > 0 && Date.now() - f > 100 && (e.sort((function(t, e) {
											return e.createAt - t.createAt
										})), h(Date.now()), s(e), L.current = e);
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))).apply(this, arguments)
					}
					var H = "init" === e && u.length > 0 ? "uploading" : e,
						Y = navigator.userAgent.indexOf("Windows") + navigator.userAgent.indexOf("CrOS") > 0,
						J = "cloud" === bn;
					return (0, Yn.jsx)("div", {
						className: "record-bg",
						children: e ? (0, Yn.jsxs)(Yn.Fragment, {
							children: [(0, Yn.jsx)("div", {
								className: "logo"
							}), ("recording" === e || "uploading" === H || T) && (0, Yn.jsx)("div", {
								className: "tip " + (T ? "close" : ""),
								children: (0, Yn.jsxs)("div", {
									className: "alert-content " + (T ? "close" : ""),
									children: [(0, Yn.jsx)(to.ZE, {}), T ? "Your videos have been uploaded successfully. This tab will automatically close in ".concat(S, " seconds.") : "uploading" === H ? "Please keep this page open while uploading to avoid upload failure." : "Please DO NOT close this page while recording. It will cause the recording to fail."]
								})
							}), (0, Yn.jsxs)("div", {
								className: "center-box",
								children: [(0, Yn.jsxs)(i.r, {
									test: H,
									children: [(0, Yn.jsx)(i.J, {
										value: "init",
										children: (0, Yn.jsxs)("div", {
											className: "empty-box",
											children: [(0, Yn.jsx)(to.c8, {}), (0, Yn.jsx)("div", {
												className: "tips",
												children: "All Videos Uploaded "
											}), (0, Yn.jsxs)("div", {
												children: ["You can check your videos in", " ", (0, Yn.jsx)("a", {
													href: "https://www.awesomescreenshot.com/my_items",
													target: "_blank",
													children: "My Items"
												}), "."]
											})]
										})
									}), (0, Yn.jsx)(i.J, {
										value: "countdown",
										children: (0, Yn.jsx)($n, {})
									}), (0, Yn.jsx)(i.J, {
										value: "preparing",
										children: J ? (0, Yn.jsxs)("div", {
											class: "video-prepare-view",
											children: [(0, Yn.jsxs)("div", {
												class: "loading",
												children: [(0, Yn.jsx)("div", {
													class: "double-bounce1"
												}), (0, Yn.jsx)("div", {
													class: "double-bounce2"
												})]
											}), (0, Yn.jsx)("div", {
												class: "prepare-tip",
												children: "Connecting to the server"
											})]
										}) : (0, Yn.jsx)(Yn.Fragment, {})
									}), (0, Yn.jsx)(i.J, {
										value: "recording",
										children: (0, Yn.jsx)(oo, {
											status: e
										})
									}), (0, Yn.jsx)(i.J, {
										value: "uploading",
										children: (0, Yn.jsxs)(Yn.Fragment, {
											children: [m ? (0, Yn.jsx)(Yn.Fragment, {}) : (0, Yn.jsxs)("div", {
												className: "network-warning",
												children: [(0, Yn.jsx)(to.ZE, {}), "Network Disconnect"]
											}), (0, Yn.jsx)(ao.Z, {
												lists: u,
												poorNetWork: w,
												isRecorder: !0
											})]
										})
									})]
								}), "uploading" === H ? (0, Yn.jsxs)("div", {
									className: "footer",
									children: [(0, Yn.jsx)(to.gD, {}), " You can check your uploaded videos in", " ", (0, Yn.jsx)("a", {
										href: "https://www.awesomescreenshot.com/all_videos",
										target: "_blank",
										children: '"My videos"'
									}), "."]
								}) : (0, Yn.jsx)(Yn.Fragment, {})]
							}), (0, Yn.jsx)(co, {
								showGuide: p,
								isWindows: Y
							})]
						}) : (0, Yn.jsx)(Yn.Fragment, {
							children: (0, Yn.jsx)("div", {
								className: "loading",
								children: (0, Yn.jsx)(io.Z, {
									size: "large"
								})
							})
						})
					})
				};
				n.render((0, Yn.jsx)(xo, {}), document.getElementById("app"))
			},
			35036: (t, e, r) => {
				r.d(e, {
					Os: () => w,
					RC: () => O,
					ip: () => j,
					ws: () => k
				});
				var n = r(12964),
					o = r(6186),
					i = r(77029),
					a = r(83550),
					c = r(92427),
					u = r(63188),
					s = r(86642);

				function l(t) {
					return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, l(t)
				}

				function f(t, e) {
					var r = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(t);
						e && (n = n.filter((function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						}))), r.push.apply(r, n)
					}
					return r
				}

				function h(t) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {};
						e % 2 ? f(Object(r), !0).forEach((function(e) {
							d(t, e, r[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
						}))
					}
					return t
				}

				function d(t, e, r) {
					return (e = function(t) {
						var e = function(t, e) {
							if ("object" !== l(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" !== l(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return ("string" === e ? String : Number)(t)
						}(t, "string");
						return "symbol" === l(e) ? e : String(e)
					}(e)) in t ? Object.defineProperty(t, e, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = r, t
				}

				function p() {
					p = function() {
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

					function u(t, e, r) {
						return Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function(t, e, r) {
							return t[e] = r
						}
					}

					function s(t, e, r, o) {
						var i = e && e.prototype instanceof d ? e : d,
							a = Object.create(i.prototype),
							c = new j(o || []);
						return n(a, "_invoke", {
							value: S(t, r, c)
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
					t.wrap = s;
					var h = {};

					function d() {}

					function v() {}

					function y() {}
					var m = {};
					u(m, i, (function() {
						return this
					}));
					var g = Object.getPrototypeOf,
						b = g && g(g(I([])));
					b && b !== e && r.call(b, i) && (m = b);
					var w = y.prototype = d.prototype = Object.create(m);

					function x(t) {
						["next", "throw", "return"].forEach((function(e) {
							u(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function k(t, e) {
						function o(n, i, a, c) {
							var u = f(t[n], t, i);
							if ("throw" !== u.type) {
								var s = u.arg,
									h = s.value;
								return h && "object" == l(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
									o("next", t, a, c)
								}), (function(t) {
									o("throw", t, a, c)
								})) : e.resolve(h).then((function(t) {
									s.value = t, a(s)
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

					function S(t, e, r) {
						var n = "suspendedStart";
						return function(o, i) {
							if ("executing" === n) throw new Error("Generator is already running");
							if ("completed" === n) {
								if ("throw" === o) throw i;
								return L()
							}
							for (r.method = o, r.arg = i;;) {
								var a = r.delegate;
								if (a) {
									var c = E(a, r);
									if (c) {
										if (c === h) continue;
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg;
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw n = "completed", r.arg;
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg);
								n = "executing";
								var u = f(t, e, r);
								if ("normal" === u.type) {
									if (n = r.done ? "completed" : "suspendedYield", u.arg === h) continue;
									return {
										value: u.arg,
										done: r.done
									}
								}
								"throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
							}
						}
					}

					function E(t, e) {
						var r = e.method,
							n = t.iterator[r];
						if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, E(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), h;
						var o = f(n, t.iterator, e.arg);
						if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, h;
						var i = o.arg;
						return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
					}

					function O(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function T(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function j(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(O, this), this.reset(!0)
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
							next: L
						}
					}

					function L() {
						return {
							value: void 0,
							done: !0
						}
					}
					return v.prototype = y, n(w, "constructor", {
						value: y,
						configurable: !0
					}), n(y, "constructor", {
						value: v,
						configurable: !0
					}), v.displayName = u(y, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(w), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, x(k.prototype), u(k.prototype, a, (function() {
						return this
					})), t.AsyncIterator = k, t.async = function(e, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new k(s(e, r, n, o), i);
						return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
							return t.done ? t.value : a.next()
						}))
					}, x(w), u(w, c, "Generator"), u(w, i, (function() {
						return this
					})), u(w, "toString", (function() {
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
					}, t.values = I, j.prototype = {
						constructor: j,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !t)
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
										u = r.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return n(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
									} else {
										if (!u) throw new Error("try statement without catch or finally");
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
							return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), T(r), h
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										T(r)
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
							}, "next" === this.method && (this.arg = void 0), h
						}
					}, t
				}

				function v(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}

				function y(t) {
					return function() {
						var e = this,
							r = arguments;
						return new Promise((function(n, o) {
							var i = t.apply(e, r);

							function a(t) {
								v(i, n, o, a, c, "next", t)
							}

							function c(t) {
								v(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						}))
					}
				}
				var m = 2e4;

				function g() {
					return b.apply(this, arguments)
				}

				function b() {
					return (b = y(p().mark((function t() {
						return p().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return t.abrupt("return", new Promise((function(t) {
										chrome.runtime.sendMessage({
											action: "getUID"
										}, (function(e) {
											t(e)
										}))
									})));
								case 1:
								case "end":
									return t.stop()
							}
						}), t)
					})))).apply(this, arguments)
				}

				function w() {
					return x.apply(this, arguments)
				}

				function x() {
					return (x = y(p().mark((function t() {
						var e, r, i, a, c, u, s, l, f, v;
						return p().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									e = new n.Z, r = new o.u, i = Date.now() + "", r.register(i), c = !1,
										function(t) {}, s = function() {
											u()
										}, l = function(t) {}, f = function() {
											u()
										}, v = p().mark((function t() {
											var n, o, v, y, g, b;
											return p().wrap((function(t) {
												for (;;) switch (t.prev = t.next) {
													case 0:
														return n = Date.now(), t.next = 3, e.getAllDetail();
													case 3:
														return (o = t.sent).filter((function(t) {
															return "created" === t.status && n - t.updateAt > 10 * m
														})).forEach((function(t) {
															return e.update(h(h({}, t), {}, {
																processStatus: "failed"
															}), t.key)
														})), o.filter((function(t) {
															return "created" === t.status && "failed" === t.processStatus && n - t.updateAt > 10 * m
														})).forEach((function(t) {
															return e.remove(t.key)
														})), v = o.filter((function(t) {
															return !["created"].includes(t.status) && "fmp4" === t.storeName
														})), y = v.map((function(t) {
															return t.processKey
														})), t.next = 10, r.queryOutageKeys(y);
													case 10:
														if (g = t.sent, b = v.filter((function(t) {
																return g.includes(t.processKey)
															})), a = b.find((function(t) {
																return "failed" !== t.processStatus
															})), b && b.length > 0 && b.reduce((function(t, e) {
																return h(h({}, t), {}, d({}, e.key, h(h({}, e), {}, {
																	external: !0
																})))
															}), {}), a) {
															t.next = 19;
															break
														}
														return c = !0, t.abrupt("return", "break");
													case 19:
														return k(i, a.key, s, l, f), t.next = 24, new Promise((function(t) {
															u = t
														}));
													case 24:
													case "end":
														return t.stop()
												}
											}), t)
										}));
								case 10:
									if (c) {
										t.next = 17;
										break
									}
									return t.delegateYield(v(), "t0", 12);
								case 12:
									if ("break" !== t.t0) {
										t.next = 15;
										break
									}
									return t.abrupt("break", 17);
								case 15:
									t.next = 10;
									break;
								case 17:
									r.unregister(i);
								case 18:
								case "end":
									return t.stop()
							}
						}), t)
					})))).apply(this, arguments)
				}

				function k(t, e, r, n, o) {
					return S.apply(this, arguments)
				}

				function S() {
					return S = y(p().mark((function t(e, r, l, f, d) {
						var v, m, b, w, x, k, S, O, T, j, I, L, P, _, C, D, R, M;
						return p().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return M = function() {
										if (w && x && !k && (k = !0, L.stop({
												duration: m.duration,
												size: m.size
											}), "ok" !== m.clickStop)) {
											var t = Math.floor(m.duration / 1e3);
											L.httpReportStop(m.stopFrom, t).then((function() {
												v && v.update({
													clickStop: ""
												}, r)
											}))
										}
									}, v = new n.Z, t.next = 4, v.getDetail(r);
								case 4:
									if ((!(m = t.sent) || "completed" != m.processStatus) && m) {
										t.next = 9;
										break
									}
									return d && d(), t.abrupt("return");
								case 9:
									return t.next = 11, g();
								case 11:
									if (!(b = t.sent) || b.sid) {
										t.next = 14;
										break
									}
									return t.abrupt("return");
								case 14:
									if (w = !1, x = !1, k = !1, !1, S = !1, O = 0, I = !0, !(e && e.length > 1)) {
										t.next = 26;
										break
									}
									return t.next = 24, v.update({
										processKey: e
									}, r);
								case 24:
									t.next = 33;
									break;
								case 26:
									return I = !1, T = new o.u, j = Date.now() + "", T.register(j), e = j, t.next = 33, v.update({
										processKey: j
									}, r);
								case 33:
									if ((L = new i.Q({
											wsUrl: a.Z.wsUrl + "/websocket2/video/open?time=" + Date.now(),
											apiBase: a.Z.baseUrl,
											token: b.sid,
											uid: b.uid,
											sid: m.sid,
											maxQueueBlobSlice: 200,
											setTimeout: (0, s.fx)() ? u.$ : null,
											clearTimeout: (0, s.fx)() ? u.x : null
										})).onError = function() {
											var t = y(p().mark((function t(e, n) {
												return p().wrap((function(t) {
													for (;;) switch (t.prev = t.next) {
														case 0:
															if (!v) {
																t.next = 8;
																break
															}
															if (!n || "unknown" !== n.type) {
																t.next = 4;
																break
															}
															return t.next = 4, v.update({
																processStatus: "failed"
															}, r);
														case 4:
															c.Z.dispatch("uploadingUpdate"), chrome.runtime.sendMessage({
																action: "uploadingUpdate",
																target: "backupList"
															}), l && l();
														case 8:
															T && j && T.unregister(j);
														case 9:
														case "end":
															return t.stop()
													}
												}), t)
											})));
											return function(e, r) {
												return t.apply(this, arguments)
											}
										}(), L.onProgress = function() {
											var t = y(p().mark((function t(e, n) {
												return p().wrap((function(t) {
													for (;;) switch (t.prev = t.next) {
														case 0:
															if (!v || S) {
																t.next = 8;
																break
															}
															if (n > 1 && (n = 1), !(Date.now() - O > 100)) {
																t.next = 8;
																break
															}
															return O = Date.now(), t.next = 6, v.update({
																progress: n
															}, r);
														case 6:
															c.Z.dispatch("uploadingUpdate"), chrome.runtime.sendMessage({
																action: "uploadingUpdate",
																target: "backupList"
															});
														case 8:
															f && f(n);
														case 9:
														case "end":
															return t.stop()
													}
												}), t)
											})));
											return function(e, r) {
												return t.apply(this, arguments)
											}
										}(), L.onSuccess = function() {
											var t = y(p().mark((function t(e, n) {
												return p().wrap((function(t) {
													for (;;) switch (t.prev = t.next) {
														case 0:
															if (S = !0, !n || !n.vid) {
																t.next = 7;
																break
															}
															return t.next = 5, v.update({
																progress: 1,
																processStatus: "completed",
																originId: n.vid
															}, r);
														case 5:
															t.next = 9;
															break;
														case 7:
															return t.next = 9, v.update({
																progress: 1,
																processStatus: "completed"
															}, r);
														case 9:
															c.Z.dispatch("uploadingUpdate"), chrome.runtime.sendMessage({
																action: "uploadingUpdate",
																target: "backupList"
															}), setTimeout((function() {
																v.remove(r), v = null, c.Z.dispatch("statusChecker", "backup"), d && d()
															}), 600), T && j && T.unregister(j);
														case 14:
														case "end":
															return t.stop()
													}
												}), t)
											})));
											return function(e, r) {
												return t.apply(this, arguments)
											}
										}(), L.onConnected = function() {
											var t = y(p().mark((function t(e, r) {
												return p().wrap((function(t) {
													for (;;) switch (t.prev = t.next) {
														case 0:
															v && (v.update(h({
																originId: r.vid
															}, null != r && r.backupDetails ? r.backupDetails : {})), x = !0, M());
														case 1:
														case "end":
															return t.stop()
													}
												}), t)
											})));
											return function(e, r) {
												return t.apply(this, arguments)
											}
										}(), L.getSlice = function() {
											var t = y(p().mark((function t(e) {
												var r;
												return p().wrap((function(t) {
													for (;;) switch (t.prev = t.next) {
														case 0:
															if (v) {
																t.next = 2;
																break
															}
															return t.abrupt("return", null);
														case 2:
															return t.next = 4, v.getSlice(m.key, e);
														case 4:
															return r = t.sent, t.abrupt("return", r.data);
														case 6:
														case "end":
															return t.stop()
													}
												}), t)
											})));
											return function(e) {
												return t.apply(this, arguments)
											}
										}(), v.update({
											processStatus: "uploading"
										}, r), (!e || e.length < 1) && (c.Z.dispatch("uploadingUpdate"), chrome.runtime.sendMessage({
											action: "uploadingUpdate",
											target: "backupList"
										})), !m.originId || !I) {
										t.next = 53;
										break
									}
									return t.next = 46, L.replenish(m.originId, m.videoName);
								case 46:
									P = t.sent, L.updateTotalSliceBackup(P), x = !0, E(m.originId, "217", {
										videoSliceId: P + 1
									}), M(), t.next = 60;
									break;
								case 53:
									return _ = {}, P = -1, I = !1, m.options && (_ = m.options.payload), t.next = 59, L.ready({
										title: m.title,
										payload: _
									});
								case 59:
									t.sent;
								case 60:
									C = isFinite(m.sliceEnd - m.sliceStart) ? m.sliceEnd - m.sliceStart : 2e5, L.updateBackupSlices(C), D = P + 1;
								case 63:
									if (!(D < C)) {
										t.next = 71;
										break
									}
									return t.next = 66, v.getSlice(m.key, D);
								case 66:
									(R = t.sent) && R.data ? L.push(R.data) : L.id && E(L.id, "215", {
										msg: "getBackupDataNull"
									});
								case 68:
									D++, t.next = 63;
									break;
								case 71:
									w = !0, M();
								case 74:
								case "end":
									return t.stop()
							}
						}), t)
					}))), S.apply(this, arguments)
				}

				function E(t, e, r) {
					t && t.length > 0 && fetch(a.Z.baseUrl + "/api/v1/video/log", {
						method: "POST",
						headers: {
							"Content-Type": "application/json; charset=utf-8"
						},
						body: JSON.stringify({
							videoID: t,
							logType: e,
							info: JSON.stringify(r)
						})
					}).then((function(t) {
						return t.json()
					})).then((function(t) {}))
				}

				function O() {
					return T.apply(this, arguments)
				}

				function T() {
					return (T = y(p().mark((function t() {
						var e, r, i;
						return p().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return e = new n.Z, new o.u, t.next = 4, e.getAllDetail();
								case 4:
									if (!((r = t.sent) && r.length > 0)) {
										t.next = 10;
										break
									}
									return i = r.filter((function(t) {
										return !["failed"].includes(t.status) && "fmp4" === t.storeName
									})), t.abrupt("return", i);
								case 10:
									return t.abrupt("return", []);
								case 11:
								case "end":
									return t.stop()
							}
						}), t)
					})))).apply(this, arguments)
				}

				function j() {
					return I.apply(this, arguments)
				}

				function I() {
					return (I = y(p().mark((function t() {
						var e, r, i;
						return p().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return e = new n.Z, new o.u, t.next = 4, e.getAllDetail();
								case 4:
									if (!((r = t.sent) && r.length > 0)) {
										t.next = 10;
										break
									}
									return i = r.filter((function(t) {
										return !["created"].includes(t.status) && "fmp4" === t.storeName
									})), t.abrupt("return", i);
								case 10:
									return t.abrupt("return", []);
								case 11:
								case "end":
									return t.stop()
							}
						}), t)
					})))).apply(this, arguments)
				}
			}
		},
		o = {};

	function i(t) {
		var e = o[t];
		if (void 0 !== e) return e.exports;
		var r = o[t] = {
			exports: {}
		};
		return n[t].call(r.exports, r, r.exports, i), r.exports
	}
	i.m = n, t = [], i.O = (e, r, n, o) => {
		if (!r) {
			var a = 1 / 0;
			for (l = 0; l < t.length; l++) {
				for (var [r, n, o] = t[l], c = !0, u = 0; u < r.length; u++)(!1 & o || a >= o) && Object.keys(i.O).every((t => i.O[t](r[u]))) ? r.splice(u--, 1) : (c = !1, o < a && (a = o));
				if (c) {
					t.splice(l--, 1);
					var s = n();
					void 0 !== s && (e = s)
				}
			}
			return e
		}
		o = o || 0;
		for (var l = t.length; l > 0 && t[l - 1][2] > o; l--) t[l] = t[l - 1];
		t[l] = [r, n, o]
	}, i.n = t => {
		var e = t && t.__esModule ? () => t.default : () => t;
		return i.d(e, {
			a: e
		}), e
	}, r = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__, i.t = function(t, n) {
		if (1 & n && (t = this(t)), 8 & n) return t;
		if ("object" == typeof t && t) {
			if (4 & n && t.__esModule) return t;
			if (16 & n && "function" == typeof t.then) return t
		}
		var o = Object.create(null);
		i.r(o);
		var a = {};
		e = e || [null, r({}), r([]), r(r)];
		for (var c = 2 & n && t;
			"object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => a[e] = () => t[e]));
		return a.default = () => t, i.d(o, a), o
	}, i.d = (t, e) => {
		for (var r in e) i.o(e, r) && !i.o(t, r) && Object.defineProperty(t, r, {
			enumerable: !0,
			get: e[r]
		})
	}, i.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (t) {
			if ("object" == typeof window) return window
		}
	}(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, (() => {
		var t = {
			830: 0
		};
		i.O.j = e => 0 === t[e];
		var e = (e, r) => {
				var n, o, [a, c, u] = r,
					s = 0;
				if (a.some((e => 0 !== t[e]))) {
					for (n in c) i.o(c, n) && (i.m[n] = c[n]);
					if (u) var l = u(i)
				}
				for (e && e(r); s < a.length; s++) o = a[s], i.o(t, o) && t[o] && t[o][0](), t[o] = 0;
				return i.O(l)
			},
			r = self.webpackChunkawesomescreenshot_extension = self.webpackChunkawesomescreenshot_extension || [];
		r.forEach(e.bind(null, 0)), r.push = e.bind(null, r.push.bind(r))
	})(), i.O(void 0, [775, 799, 909, 431, 441, 932, 981, 544, 462, 801, 436, 46, 123], (() => i(32082)));
	var a = i.O(void 0, [775, 799, 909, 431, 441, 932, 981, 544, 462, 801, 436, 46, 123], (() => i(1102)));
	a = i.O(a)
})();