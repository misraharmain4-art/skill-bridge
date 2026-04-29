function eT(t, n) {
  for (var r = 0; r < n.length; r++) {
    const i = n[r];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const l in i)
        if (l !== "default" && !(l in t)) {
          const c = Object.getOwnPropertyDescriptor(i, l);
          c &&
            Object.defineProperty(
              t,
              l,
              c.get ? c : { enumerable: !0, get: () => i[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const c = {};
    return (
      l.integrity && (c.integrity = l.integrity),
      l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function i(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = r(l);
    fetch(l.href, c);
  }
})();
function Ib(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var eh = { exports: {} },
  No = {};
var Wv;
function tT() {
  if (Wv) return No;
  Wv = 1;
  var t = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function r(i, l, c) {
    var f = null;
    if (
      (c !== void 0 && (f = "" + c),
      l.key !== void 0 && (f = "" + l.key),
      "key" in l)
    ) {
      c = {};
      for (var h in l) h !== "key" && (c[h] = l[h]);
    } else c = l;
    return (
      (l = c.ref),
      { $$typeof: t, type: i, key: f, ref: l !== void 0 ? l : null, props: c }
    );
  }
  return ((No.Fragment = n), (No.jsx = r), (No.jsxs = r), No);
}
var Jv;
function nT() {
  return (Jv || ((Jv = 1), (eh.exports = tT())), eh.exports);
}
var d = nT(),
  th = { exports: {} },
  To = {},
  nh = { exports: {} },
  ah = {};
var ex;
function aT() {
  return (
    ex ||
      ((ex = 1),
      (function (t) {
        function n(L, G) {
          var W = L.length;
          L.push(G);
          e: for (; 0 < W; ) {
            var ge = (W - 1) >>> 1,
              T = L[ge];
            if (0 < l(T, G)) ((L[ge] = G), (L[W] = T), (W = ge));
            else break e;
          }
        }
        function r(L) {
          return L.length === 0 ? null : L[0];
        }
        function i(L) {
          if (L.length === 0) return null;
          var G = L[0],
            W = L.pop();
          if (W !== G) {
            L[0] = W;
            e: for (var ge = 0, T = L.length, Z = T >>> 1; ge < Z; ) {
              var ie = 2 * (ge + 1) - 1,
                ae = L[ie],
                me = ie + 1,
                Ne = L[me];
              if (0 > l(ae, W))
                me < T && 0 > l(Ne, ae)
                  ? ((L[ge] = Ne), (L[me] = W), (ge = me))
                  : ((L[ge] = ae), (L[ie] = W), (ge = ie));
              else if (me < T && 0 > l(Ne, W))
                ((L[ge] = Ne), (L[me] = W), (ge = me));
              else break e;
            }
          }
          return G;
        }
        function l(L, G) {
          var W = L.sortIndex - G.sortIndex;
          return W !== 0 ? W : L.id - G.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          t.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            h = f.now();
          t.unstable_now = function () {
            return f.now() - h;
          };
        }
        var g = [],
          p = [],
          v = 1,
          b = null,
          S = 3,
          E = !1,
          j = !1,
          _ = !1,
          N = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate < "u" ? setImmediate : null;
        function z(L) {
          for (var G = r(p); G !== null; ) {
            if (G.callback === null) i(p);
            else if (G.startTime <= L)
              (i(p), (G.sortIndex = G.expirationTime), n(g, G));
            else break;
            G = r(p);
          }
        }
        function M(L) {
          if (((_ = !1), z(L), !j))
            if (r(g) !== null) ((j = !0), Y || ((Y = !0), J()));
            else {
              var G = r(p);
              G !== null && ce(M, G.startTime - L);
            }
        }
        var Y = !1,
          Q = -1,
          F = 5,
          oe = -1;
        function ne() {
          return N ? !0 : !(t.unstable_now() - oe < F);
        }
        function he() {
          if (((N = !1), Y)) {
            var L = t.unstable_now();
            oe = L;
            var G = !0;
            try {
              e: {
                ((j = !1), _ && ((_ = !1), O(Q), (Q = -1)), (E = !0));
                var W = S;
                try {
                  t: {
                    for (
                      z(L), b = r(g);
                      b !== null && !(b.expirationTime > L && ne());
                    ) {
                      var ge = b.callback;
                      if (typeof ge == "function") {
                        ((b.callback = null), (S = b.priorityLevel));
                        var T = ge(b.expirationTime <= L);
                        if (((L = t.unstable_now()), typeof T == "function")) {
                          ((b.callback = T), z(L), (G = !0));
                          break t;
                        }
                        (b === r(g) && i(g), z(L));
                      } else i(g);
                      b = r(g);
                    }
                    if (b !== null) G = !0;
                    else {
                      var Z = r(p);
                      (Z !== null && ce(M, Z.startTime - L), (G = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (S = W), (E = !1));
                }
                G = void 0;
              }
            } finally {
              G ? J() : (Y = !1);
            }
          }
        }
        var J;
        if (typeof D == "function")
          J = function () {
            D(he);
          };
        else if (typeof MessageChannel < "u") {
          var se = new MessageChannel(),
            ee = se.port2;
          ((se.port1.onmessage = he),
            (J = function () {
              ee.postMessage(null);
            }));
        } else
          J = function () {
            R(he, 0);
          };
        function ce(L, G) {
          Q = R(function () {
            L(t.unstable_now());
          }, G);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (t.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (F = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (t.unstable_next = function (L) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = S;
            }
            var W = S;
            S = G;
            try {
              return L();
            } finally {
              S = W;
            }
          }),
          (t.unstable_requestPaint = function () {
            N = !0;
          }),
          (t.unstable_runWithPriority = function (L, G) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var W = S;
            S = L;
            try {
              return G();
            } finally {
              S = W;
            }
          }),
          (t.unstable_scheduleCallback = function (L, G, W) {
            var ge = t.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? ge + W : ge))
                : (W = ge),
              L)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = W + T),
              (L = {
                id: v++,
                callback: G,
                priorityLevel: L,
                startTime: W,
                expirationTime: T,
                sortIndex: -1,
              }),
              W > ge
                ? ((L.sortIndex = W),
                  n(p, L),
                  r(g) === null &&
                    L === r(p) &&
                    (_ ? (O(Q), (Q = -1)) : (_ = !0), ce(M, W - ge)))
                : ((L.sortIndex = T),
                  n(g, L),
                  j || E || ((j = !0), Y || ((Y = !0), J()))),
              L
            );
          }),
          (t.unstable_shouldYield = ne),
          (t.unstable_wrapCallback = function (L) {
            var G = S;
            return function () {
              var W = S;
              S = G;
              try {
                return L.apply(this, arguments);
              } finally {
                S = W;
              }
            };
          }));
      })(ah)),
    ah
  );
}
var tx;
function rT() {
  return (tx || ((tx = 1), (nh.exports = aT())), nh.exports);
}
var rh = { exports: {} },
  Ue = {};
var nx;
function sT() {
  if (nx) return Ue;
  nx = 1;
  var t = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function S(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (b && T[b]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    _ = {};
  function N(T, Z, ie) {
    ((this.props = T),
      (this.context = Z),
      (this.refs = _),
      (this.updater = ie || E));
  }
  ((N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (T, Z) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, T, Z, "setState");
    }),
    (N.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    }));
  function R() {}
  R.prototype = N.prototype;
  function O(T, Z, ie) {
    ((this.props = T),
      (this.context = Z),
      (this.refs = _),
      (this.updater = ie || E));
  }
  var D = (O.prototype = new R());
  ((D.constructor = O), j(D, N.prototype), (D.isPureReactComponent = !0));
  var z = Array.isArray,
    M = { H: null, A: null, T: null, S: null, V: null },
    Y = Object.prototype.hasOwnProperty;
  function Q(T, Z, ie, ae, me, Ne) {
    return (
      (ie = Ne.ref),
      {
        $$typeof: t,
        type: T,
        key: Z,
        ref: ie !== void 0 ? ie : null,
        props: Ne,
      }
    );
  }
  function F(T, Z) {
    return Q(T.type, Z, void 0, void 0, void 0, T.props);
  }
  function oe(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }
  function ne(T) {
    var Z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (ie) {
        return Z[ie];
      })
    );
  }
  var he = /\/+/g;
  function J(T, Z) {
    return typeof T == "object" && T !== null && T.key != null
      ? ne("" + T.key)
      : Z.toString(36);
  }
  function se() {}
  function ee(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(se, se)
            : ((T.status = "pending"),
              T.then(
                function (Z) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = Z));
                },
                function (Z) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = Z));
                },
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function ce(T, Z, ie, ae, me) {
    var Ne = typeof T;
    (Ne === "undefined" || Ne === "boolean") && (T = null);
    var fe = !1;
    if (T === null) fe = !0;
    else
      switch (Ne) {
        case "bigint":
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case t:
            case n:
              fe = !0;
              break;
            case v:
              return ((fe = T._init), ce(fe(T._payload), Z, ie, ae, me));
          }
      }
    if (fe)
      return (
        (me = me(T)),
        (fe = ae === "" ? "." + J(T, 0) : ae),
        z(me)
          ? ((ie = ""),
            fe != null && (ie = fe.replace(he, "$&/") + "/"),
            ce(me, Z, ie, "", function (De) {
              return De;
            }))
          : me != null &&
            (oe(me) &&
              (me = F(
                me,
                ie +
                  (me.key == null || (T && T.key === me.key)
                    ? ""
                    : ("" + me.key).replace(he, "$&/") + "/") +
                  fe,
              )),
            Z.push(me)),
        1
      );
    fe = 0;
    var ye = ae === "" ? "." : ae + ":";
    if (z(T))
      for (var Ce = 0; Ce < T.length; Ce++)
        ((ae = T[Ce]), (Ne = ye + J(ae, Ce)), (fe += ce(ae, Z, ie, Ne, me)));
    else if (((Ce = S(T)), typeof Ce == "function"))
      for (T = Ce.call(T), Ce = 0; !(ae = T.next()).done; )
        ((ae = ae.value),
          (Ne = ye + J(ae, Ce++)),
          (fe += ce(ae, Z, ie, Ne, me)));
    else if (Ne === "object") {
      if (typeof T.then == "function") return ce(ee(T), Z, ie, ae, me);
      throw (
        (Z = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Z === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : Z) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return fe;
  }
  function L(T, Z, ie) {
    if (T == null) return T;
    var ae = [],
      me = 0;
    return (
      ce(T, ae, "", "", function (Ne) {
        return Z.call(ie, Ne, me++);
      }),
      ae
    );
  }
  function G(T) {
    if (T._status === -1) {
      var Z = T._result;
      ((Z = Z()),
        Z.then(
          function (ie) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = ie));
          },
          function (ie) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = ie));
          },
        ),
        T._status === -1 && ((T._status = 0), (T._result = Z)));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var W =
    typeof reportError == "function"
      ? reportError
      : function (T) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Z = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == "object" &&
                T !== null &&
                typeof T.message == "string"
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(Z)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        };
  function ge() {}
  return (
    (Ue.Children = {
      map: L,
      forEach: function (T, Z, ie) {
        L(
          T,
          function () {
            Z.apply(this, arguments);
          },
          ie,
        );
      },
      count: function (T) {
        var Z = 0;
        return (
          L(T, function () {
            Z++;
          }),
          Z
        );
      },
      toArray: function (T) {
        return (
          L(T, function (Z) {
            return Z;
          }) || []
        );
      },
      only: function (T) {
        if (!oe(T))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return T;
      },
    }),
    (Ue.Component = N),
    (Ue.Fragment = r),
    (Ue.Profiler = l),
    (Ue.PureComponent = O),
    (Ue.StrictMode = i),
    (Ue.Suspense = g),
    (Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M),
    (Ue.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return M.H.useMemoCache(T);
      },
    }),
    (Ue.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (Ue.cloneElement = function (T, Z, ie) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + ".",
        );
      var ae = j({}, T.props),
        me = T.key,
        Ne = void 0;
      if (Z != null)
        for (fe in (Z.ref !== void 0 && (Ne = void 0),
        Z.key !== void 0 && (me = "" + Z.key),
        Z))
          !Y.call(Z, fe) ||
            fe === "key" ||
            fe === "__self" ||
            fe === "__source" ||
            (fe === "ref" && Z.ref === void 0) ||
            (ae[fe] = Z[fe]);
      var fe = arguments.length - 2;
      if (fe === 1) ae.children = ie;
      else if (1 < fe) {
        for (var ye = Array(fe), Ce = 0; Ce < fe; Ce++)
          ye[Ce] = arguments[Ce + 2];
        ae.children = ye;
      }
      return Q(T.type, me, void 0, void 0, Ne, ae);
    }),
    (Ue.createContext = function (T) {
      return (
        (T = {
          $$typeof: f,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: c, _context: T }),
        T
      );
    }),
    (Ue.createElement = function (T, Z, ie) {
      var ae,
        me = {},
        Ne = null;
      if (Z != null)
        for (ae in (Z.key !== void 0 && (Ne = "" + Z.key), Z))
          Y.call(Z, ae) &&
            ae !== "key" &&
            ae !== "__self" &&
            ae !== "__source" &&
            (me[ae] = Z[ae]);
      var fe = arguments.length - 2;
      if (fe === 1) me.children = ie;
      else if (1 < fe) {
        for (var ye = Array(fe), Ce = 0; Ce < fe; Ce++)
          ye[Ce] = arguments[Ce + 2];
        me.children = ye;
      }
      if (T && T.defaultProps)
        for (ae in ((fe = T.defaultProps), fe))
          me[ae] === void 0 && (me[ae] = fe[ae]);
      return Q(T, Ne, void 0, void 0, null, me);
    }),
    (Ue.createRef = function () {
      return { current: null };
    }),
    (Ue.forwardRef = function (T) {
      return { $$typeof: h, render: T };
    }),
    (Ue.isValidElement = oe),
    (Ue.lazy = function (T) {
      return { $$typeof: v, _payload: { _status: -1, _result: T }, _init: G };
    }),
    (Ue.memo = function (T, Z) {
      return { $$typeof: p, type: T, compare: Z === void 0 ? null : Z };
    }),
    (Ue.startTransition = function (T) {
      var Z = M.T,
        ie = {};
      M.T = ie;
      try {
        var ae = T(),
          me = M.S;
        (me !== null && me(ie, ae),
          typeof ae == "object" &&
            ae !== null &&
            typeof ae.then == "function" &&
            ae.then(ge, W));
      } catch (Ne) {
        W(Ne);
      } finally {
        M.T = Z;
      }
    }),
    (Ue.unstable_useCacheRefresh = function () {
      return M.H.useCacheRefresh();
    }),
    (Ue.use = function (T) {
      return M.H.use(T);
    }),
    (Ue.useActionState = function (T, Z, ie) {
      return M.H.useActionState(T, Z, ie);
    }),
    (Ue.useCallback = function (T, Z) {
      return M.H.useCallback(T, Z);
    }),
    (Ue.useContext = function (T) {
      return M.H.useContext(T);
    }),
    (Ue.useDebugValue = function () {}),
    (Ue.useDeferredValue = function (T, Z) {
      return M.H.useDeferredValue(T, Z);
    }),
    (Ue.useEffect = function (T, Z, ie) {
      var ae = M.H;
      if (typeof ie == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return ae.useEffect(T, Z);
    }),
    (Ue.useId = function () {
      return M.H.useId();
    }),
    (Ue.useImperativeHandle = function (T, Z, ie) {
      return M.H.useImperativeHandle(T, Z, ie);
    }),
    (Ue.useInsertionEffect = function (T, Z) {
      return M.H.useInsertionEffect(T, Z);
    }),
    (Ue.useLayoutEffect = function (T, Z) {
      return M.H.useLayoutEffect(T, Z);
    }),
    (Ue.useMemo = function (T, Z) {
      return M.H.useMemo(T, Z);
    }),
    (Ue.useOptimistic = function (T, Z) {
      return M.H.useOptimistic(T, Z);
    }),
    (Ue.useReducer = function (T, Z, ie) {
      return M.H.useReducer(T, Z, ie);
    }),
    (Ue.useRef = function (T) {
      return M.H.useRef(T);
    }),
    (Ue.useState = function (T) {
      return M.H.useState(T);
    }),
    (Ue.useSyncExternalStore = function (T, Z, ie) {
      return M.H.useSyncExternalStore(T, Z, ie);
    }),
    (Ue.useTransition = function () {
      return M.H.useTransition();
    }),
    (Ue.version = "19.1.0"),
    Ue
  );
}
var ax;
function au() {
  return (ax || ((ax = 1), (rh.exports = sT())), rh.exports);
}
var sh = { exports: {} },
  $t = {};
var rx;
function iT() {
  if (rx) return $t;
  rx = 1;
  var t = au();
  function n(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var i = {
      d: {
        f: r,
        r: function () {
          throw Error(n(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function c(g, p, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: p,
      implementation: v,
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    ($t.createPortal = function (g, p) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(n(299));
      return c(g, p, null, v);
    }),
    ($t.flushSync = function (g) {
      var p = f.T,
        v = i.p;
      try {
        if (((f.T = null), (i.p = 2), g)) return g();
      } finally {
        ((f.T = p), (i.p = v), i.d.f());
      }
    }),
    ($t.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        i.d.C(g, p));
    }),
    ($t.prefetchDNS = function (g) {
      typeof g == "string" && i.d.D(g);
    }),
    ($t.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var v = p.as,
          b = h(v, p.crossOrigin),
          S = typeof p.integrity == "string" ? p.integrity : void 0,
          E = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style"
          ? i.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: E,
            })
          : v === "script" &&
            i.d.X(g, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: E,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    ($t.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var v = h(p.as, p.crossOrigin);
            i.d.M(g, {
              crossOrigin: v,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && i.d.M(g);
    }),
    ($t.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var v = p.as,
          b = h(v, p.crossOrigin);
        i.d.L(g, v, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    ($t.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var v = h(p.as, p.crossOrigin);
          i.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else i.d.m(g);
    }),
    ($t.requestFormReset = function (g) {
      i.d.r(g);
    }),
    ($t.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    ($t.useFormState = function (g, p, v) {
      return f.H.useFormState(g, p, v);
    }),
    ($t.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    ($t.version = "19.1.0"),
    $t
  );
}
var sx;
function Gb() {
  if (sx) return sh.exports;
  sx = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return (t(), (sh.exports = iT()), sh.exports);
}
var ix;
function oT() {
  if (ix) return To;
  ix = 1;
  var t = rT(),
    n = au(),
    r = Gb();
  function i(e) {
    var a = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        a += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      a +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var a = e,
      s = e;
    if (e.alternate) for (; a.return; ) a = a.return;
    else {
      e = a;
      do ((a = e), (a.flags & 4098) !== 0 && (s = a.return), (e = a.return));
      while (e);
    }
    return a.tag === 3 ? s : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var a = e.memoizedState;
      if (
        (a === null && ((e = e.alternate), e !== null && (a = e.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (c(e) !== e) throw Error(i(188));
  }
  function g(e) {
    var a = e.alternate;
    if (!a) {
      if (((a = c(e)), a === null)) throw Error(i(188));
      return a !== e ? null : e;
    }
    for (var s = e, o = a; ; ) {
      var u = s.return;
      if (u === null) break;
      var m = u.alternate;
      if (m === null) {
        if (((o = u.return), o !== null)) {
          s = o;
          continue;
        }
        break;
      }
      if (u.child === m.child) {
        for (m = u.child; m; ) {
          if (m === s) return (h(u), e);
          if (m === o) return (h(u), a);
          m = m.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== o.return) ((s = u), (o = m));
      else {
        for (var x = !1, w = u.child; w; ) {
          if (w === s) {
            ((x = !0), (s = u), (o = m));
            break;
          }
          if (w === o) {
            ((x = !0), (o = u), (s = m));
            break;
          }
          w = w.sibling;
        }
        if (!x) {
          for (w = m.child; w; ) {
            if (w === s) {
              ((x = !0), (s = m), (o = u));
              break;
            }
            if (w === o) {
              ((x = !0), (o = m), (s = u));
              break;
            }
            w = w.sibling;
          }
          if (!x) throw Error(i(189));
        }
      }
      if (s.alternate !== o) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? e : a;
  }
  function p(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((a = p(e)), a !== null)) return a;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    b = Symbol.for("react.element"),
    S = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    j = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    N = Symbol.for("react.profiler"),
    R = Symbol.for("react.provider"),
    O = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    z = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    Y = Symbol.for("react.suspense_list"),
    Q = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    oe = Symbol.for("react.activity"),
    ne = Symbol.for("react.memo_cache_sentinel"),
    he = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (he && e[he]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var se = Symbol.for("react.client.reference");
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === se ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case N:
        return "Profiler";
      case _:
        return "StrictMode";
      case M:
        return "Suspense";
      case Y:
        return "SuspenseList";
      case oe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case E:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case O:
          return (e._context.displayName || "Context") + ".Consumer";
        case z:
          var a = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = a.displayName || a.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Q:
          return (
            (a = e.displayName || null),
            a !== null ? a : ee(e.type) || "Memo"
          );
        case F:
          ((a = e._payload), (e = e._init));
          try {
            return ee(e(a));
          } catch {}
      }
    return null;
  }
  var ce = Array.isArray,
    L = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    ge = [],
    T = -1;
  function Z(e) {
    return { current: e };
  }
  function ie(e) {
    0 > T || ((e.current = ge[T]), (ge[T] = null), T--);
  }
  function ae(e, a) {
    (T++, (ge[T] = e.current), (e.current = a));
  }
  var me = Z(null),
    Ne = Z(null),
    fe = Z(null),
    ye = Z(null);
  function Ce(e, a) {
    switch ((ae(fe, a), ae(Ne, e), ae(me, null), a.nodeType)) {
      case 9:
      case 11:
        e = (e = a.documentElement) && (e = e.namespaceURI) ? Tv(e) : 0;
        break;
      default:
        if (((e = a.tagName), (a = a.namespaceURI)))
          ((a = Tv(a)), (e = jv(a, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (ie(me), ae(me, e));
  }
  function De() {
    (ie(me), ie(Ne), ie(fe));
  }
  function Qe(e) {
    e.memoizedState !== null && ae(ye, e);
    var a = me.current,
      s = jv(a, e.type);
    a !== s && (ae(Ne, e), ae(me, s));
  }
  function He(e) {
    (Ne.current === e && (ie(me), ie(Ne)),
      ye.current === e && (ie(ye), (bo._currentValue = W)));
  }
  var We = Object.prototype.hasOwnProperty,
    mt = t.unstable_scheduleCallback,
    Lt = t.unstable_cancelCallback,
    Fa = t.unstable_shouldYield,
    Ia = t.unstable_requestPaint,
    Qt = t.unstable_now,
    Vu = t.unstable_getCurrentPriorityLevel,
    Pu = t.unstable_ImmediatePriority,
    ji = t.unstable_UserBlockingPriority,
    A = t.unstable_NormalPriority,
    V = t.unstable_LowPriority,
    I = t.unstable_IdlePriority,
    de = t.log,
    le = t.unstable_setDisableYieldValue,
    te = null,
    ve = null;
  function Be(e) {
    if (
      (typeof de == "function" && le(e),
      ve && typeof ve.setStrictMode == "function")
    )
      try {
        ve.setStrictMode(te, e);
      } catch {}
  }
  var ze = Math.clz32 ? Math.clz32 : Xn,
    Pt = Math.log,
    ma = Math.LN2;
  function Xn(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Pt(e) / ma) | 0)) | 0);
  }
  var ms = 256,
    Ga = 4194304;
  function Ln(e) {
    var a = e & 42;
    if (a !== 0) return a;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ps(e, a, s) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var u = 0,
      m = e.suspendedLanes,
      x = e.pingedLanes;
    e = e.warmLanes;
    var w = o & 134217727;
    return (
      w !== 0
        ? ((o = w & ~m),
          o !== 0
            ? (u = Ln(o))
            : ((x &= w),
              x !== 0
                ? (u = Ln(x))
                : s || ((s = w & ~e), s !== 0 && (u = Ln(s)))))
        : ((w = o & ~m),
          w !== 0
            ? (u = Ln(w))
            : x !== 0
              ? (u = Ln(x))
              : s || ((s = o & ~e), s !== 0 && (u = Ln(s)))),
      u === 0
        ? 0
        : a !== 0 &&
            a !== u &&
            (a & m) === 0 &&
            ((m = u & -u),
            (s = a & -a),
            m >= s || (m === 32 && (s & 4194048) !== 0))
          ? a
          : u
    );
  }
  function Ya(e, a) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & a) === 0;
  }
  function Hu(e, a) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ci() {
    var e = ms;
    return ((ms <<= 1), (ms & 4194048) === 0 && (ms = 256), e);
  }
  function up() {
    var e = Ga;
    return ((Ga <<= 1), (Ga & 62914560) === 0 && (Ga = 4194304), e);
  }
  function Bu(e) {
    for (var a = [], s = 0; 31 > s; s++) a.push(e);
    return a;
  }
  function Oi(e, a) {
    ((e.pendingLanes |= a),
      a !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function B_(e, a, s, o, u, m) {
    var x = e.pendingLanes;
    ((e.pendingLanes = s),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= s),
      (e.entangledLanes &= s),
      (e.errorRecoveryDisabledLanes &= s),
      (e.shellSuspendCounter = 0));
    var w = e.entanglements,
      C = e.expirationTimes,
      P = e.hiddenUpdates;
    for (s = x & ~s; 0 < s; ) {
      var K = 31 - ze(s),
        X = 1 << K;
      ((w[K] = 0), (C[K] = -1));
      var H = P[K];
      if (H !== null)
        for (P[K] = null, K = 0; K < H.length; K++) {
          var B = H[K];
          B !== null && (B.lane &= -536870913);
        }
      s &= ~X;
    }
    (o !== 0 && dp(e, o, 0),
      m !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(x & ~a)));
  }
  function dp(e, a, s) {
    ((e.pendingLanes |= a), (e.suspendedLanes &= ~a));
    var o = 31 - ze(a);
    ((e.entangledLanes |= a),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (s & 4194090)));
  }
  function fp(e, a) {
    var s = (e.entangledLanes |= a);
    for (e = e.entanglements; s; ) {
      var o = 31 - ze(s),
        u = 1 << o;
      ((u & a) | (e[o] & a) && (e[o] |= a), (s &= ~u));
    }
  }
  function Fu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Iu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function hp() {
    var e = G.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Yv(e.type));
  }
  function F_(e, a) {
    var s = G.p;
    try {
      return ((G.p = e), a());
    } finally {
      G.p = s;
    }
  }
  var Qa = Math.random().toString(36).slice(2),
    Kt = "__reactFiber$" + Qa,
    tn = "__reactProps$" + Qa,
    gs = "__reactContainer$" + Qa,
    Gu = "__reactEvents$" + Qa,
    I_ = "__reactListeners$" + Qa,
    G_ = "__reactHandles$" + Qa,
    mp = "__reactResources$" + Qa,
    Ri = "__reactMarker$" + Qa;
  function Yu(e) {
    (delete e[Kt], delete e[tn], delete e[Gu], delete e[I_], delete e[G_]);
  }
  function ys(e) {
    var a = e[Kt];
    if (a) return a;
    for (var s = e.parentNode; s; ) {
      if ((a = s[gs] || s[Kt])) {
        if (
          ((s = a.alternate),
          a.child !== null || (s !== null && s.child !== null))
        )
          for (e = Av(e); e !== null; ) {
            if ((s = e[Kt])) return s;
            e = Av(e);
          }
        return a;
      }
      ((e = s), (s = e.parentNode));
    }
    return null;
  }
  function vs(e) {
    if ((e = e[Kt] || e[gs])) {
      var a = e.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return e;
    }
    return null;
  }
  function Ai(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e.stateNode;
    throw Error(i(33));
  }
  function xs(e) {
    var a = e[mp];
    return (
      a ||
        (a = e[mp] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      a
    );
  }
  function zt(e) {
    e[Ri] = !0;
  }
  var pp = new Set(),
    gp = {};
  function Lr(e, a) {
    (bs(e, a), bs(e + "Capture", a));
  }
  function bs(e, a) {
    for (gp[e] = a, e = 0; e < a.length; e++) pp.add(a[e]);
  }
  var Y_ = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    yp = {},
    vp = {};
  function Q_(e) {
    return We.call(vp, e)
      ? !0
      : We.call(yp, e)
        ? !1
        : Y_.test(e)
          ? (vp[e] = !0)
          : ((yp[e] = !0), !1);
  }
  function ol(e, a, s) {
    if (Q_(a))
      if (s === null) e.removeAttribute(a);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(a);
            return;
          case "boolean":
            var o = a.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(a);
              return;
            }
        }
        e.setAttribute(a, "" + s);
      }
  }
  function ll(e, a, s) {
    if (s === null) e.removeAttribute(a);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttribute(a, "" + s);
    }
  }
  function pa(e, a, s, o) {
    if (o === null) e.removeAttribute(s);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(s);
          return;
      }
      e.setAttributeNS(a, s, "" + o);
    }
  }
  var Qu, xp;
  function ws(e) {
    if (Qu === void 0)
      try {
        throw Error();
      } catch (s) {
        var a = s.stack.trim().match(/\n( *(at )?)/);
        ((Qu = (a && a[1]) || ""),
          (xp =
            -1 <
            s.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < s.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Qu +
      e +
      xp
    );
  }
  var Ku = !1;
  function Zu(e, a) {
    if (!e || Ku) return "";
    Ku = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (a) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (B) {
                  var H = B;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (B) {
                  H = B;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (B) {
                H = B;
              }
              (X = e()) &&
                typeof X.catch == "function" &&
                X.catch(function () {});
            }
          } catch (B) {
            if (B && H && typeof B.stack == "string") return [B.stack, H.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var m = o.DetermineComponentFrameRoot(),
        x = m[0],
        w = m[1];
      if (x && w) {
        var C = x.split(`
`),
          P = w.split(`
`);
        for (
          u = o = 0;
          o < C.length && !C[o].includes("DetermineComponentFrameRoot");
        )
          o++;
        for (; u < P.length && !P[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (o === C.length || u === P.length)
          for (
            o = C.length - 1, u = P.length - 1;
            1 <= o && 0 <= u && C[o] !== P[u];
          )
            u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (C[o] !== P[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || C[o] !== P[u])) {
                  var K =
                    `
` + C[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      K.includes("<anonymous>") &&
                      (K = K.replace("<anonymous>", e.displayName)),
                    K
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      ((Ku = !1), (Error.prepareStackTrace = s));
    }
    return (s = e ? e.displayName || e.name : "") ? ws(s) : "";
  }
  function K_(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ws(e.type);
      case 16:
        return ws("Lazy");
      case 13:
        return ws("Suspense");
      case 19:
        return ws("SuspenseList");
      case 0:
      case 15:
        return Zu(e.type, !1);
      case 11:
        return Zu(e.type.render, !1);
      case 1:
        return Zu(e.type, !0);
      case 31:
        return ws("Activity");
      default:
        return "";
    }
  }
  function bp(e) {
    try {
      var a = "";
      do ((a += K_(e)), (e = e.return));
      while (e);
      return a;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  function Sn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function wp(e) {
    var a = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (a === "checkbox" || a === "radio")
    );
  }
  function Z_(e) {
    var a = wp(e) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, a),
      o = "" + e[a];
    if (
      !e.hasOwnProperty(a) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var u = s.get,
        m = s.set;
      return (
        Object.defineProperty(e, a, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (x) {
            ((o = "" + x), m.call(this, x));
          },
        }),
        Object.defineProperty(e, a, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (x) {
            o = "" + x;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[a]);
          },
        }
      );
    }
  }
  function cl(e) {
    e._valueTracker || (e._valueTracker = Z_(e));
  }
  function Sp(e) {
    if (!e) return !1;
    var a = e._valueTracker;
    if (!a) return !0;
    var s = a.getValue(),
      o = "";
    return (
      e && (o = wp(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== s ? (a.setValue(e), !0) : !1
    );
  }
  function ul(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var $_ = /[\n"\\]/g;
  function _n(e) {
    return e.replace($_, function (a) {
      return "\\" + a.charCodeAt(0).toString(16) + " ";
    });
  }
  function $u(e, a, s, o, u, m, x, w) {
    ((e.name = ""),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (e.type = x)
        : e.removeAttribute("type"),
      a != null
        ? x === "number"
          ? ((a === 0 && e.value === "") || e.value != a) &&
            (e.value = "" + Sn(a))
          : e.value !== "" + Sn(a) && (e.value = "" + Sn(a))
        : (x !== "submit" && x !== "reset") || e.removeAttribute("value"),
      a != null
        ? Xu(e, x, Sn(a))
        : s != null
          ? Xu(e, x, Sn(s))
          : o != null && e.removeAttribute("value"),
      u == null && m != null && (e.defaultChecked = !!m),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      w != null &&
      typeof w != "function" &&
      typeof w != "symbol" &&
      typeof w != "boolean"
        ? (e.name = "" + Sn(w))
        : e.removeAttribute("name"));
  }
  function _p(e, a, s, o, u, m, x, w) {
    if (
      (m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (e.type = m),
      a != null || s != null)
    ) {
      if (!((m !== "submit" && m !== "reset") || a != null)) return;
      ((s = s != null ? "" + Sn(s) : ""),
        (a = a != null ? "" + Sn(a) : s),
        w || a === e.value || (e.value = a),
        (e.defaultValue = a));
    }
    ((o = o ?? u),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (e.checked = w ? e.checked : !!o),
      (e.defaultChecked = !!o),
      x != null &&
        typeof x != "function" &&
        typeof x != "symbol" &&
        typeof x != "boolean" &&
        (e.name = x));
  }
  function Xu(e, a, s) {
    (a === "number" && ul(e.ownerDocument) === e) ||
      e.defaultValue === "" + s ||
      (e.defaultValue = "" + s);
  }
  function Ss(e, a, s, o) {
    if (((e = e.options), a)) {
      a = {};
      for (var u = 0; u < s.length; u++) a["$" + s[u]] = !0;
      for (s = 0; s < e.length; s++)
        ((u = a.hasOwnProperty("$" + e[s].value)),
          e[s].selected !== u && (e[s].selected = u),
          u && o && (e[s].defaultSelected = !0));
    } else {
      for (s = "" + Sn(s), a = null, u = 0; u < e.length; u++) {
        if (e[u].value === s) {
          ((e[u].selected = !0), o && (e[u].defaultSelected = !0));
          return;
        }
        a !== null || e[u].disabled || (a = e[u]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Ep(e, a, s) {
    if (
      a != null &&
      ((a = "" + Sn(a)), a !== e.value && (e.value = a), s == null)
    ) {
      e.defaultValue !== a && (e.defaultValue = a);
      return;
    }
    e.defaultValue = s != null ? "" + Sn(s) : "";
  }
  function Np(e, a, s, o) {
    if (a == null) {
      if (o != null) {
        if (s != null) throw Error(i(92));
        if (ce(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        s = o;
      }
      (s == null && (s = ""), (a = s));
    }
    ((s = Sn(a)),
      (e.defaultValue = s),
      (o = e.textContent),
      o === s && o !== "" && o !== null && (e.value = o));
  }
  function _s(e, a) {
    if (a) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = a;
        return;
      }
    }
    e.textContent = a;
  }
  var X_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Tp(e, a, s) {
    var o = a.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === ""
      ? o
        ? e.setProperty(a, "")
        : a === "float"
          ? (e.cssFloat = "")
          : (e[a] = "")
      : o
        ? e.setProperty(a, s)
        : typeof s != "number" || s === 0 || X_.has(a)
          ? a === "float"
            ? (e.cssFloat = s)
            : (e[a] = ("" + s).trim())
          : (e[a] = s + "px");
  }
  function jp(e, a, s) {
    if (a != null && typeof a != "object") throw Error(i(62));
    if (((e = e.style), s != null)) {
      for (var o in s)
        !s.hasOwnProperty(o) ||
          (a != null && a.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
              ? (e.cssFloat = "")
              : (e[o] = ""));
      for (var u in a)
        ((o = a[u]), a.hasOwnProperty(u) && s[u] !== o && Tp(e, u, o));
    } else for (var m in a) a.hasOwnProperty(m) && Tp(e, m, a[m]);
  }
  function Wu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var W_ = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    J_ =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function dl(e) {
    return J_.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Ju = null;
  function ed(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Es = null,
    Ns = null;
  function Cp(e) {
    var a = vs(e);
    if (a && (e = a.stateNode)) {
      var s = e[tn] || null;
      e: switch (((e = a.stateNode), a.type)) {
        case "input":
          if (
            ($u(
              e,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name,
            ),
            (a = s.name),
            s.type === "radio" && a != null)
          ) {
            for (s = e; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                'input[name="' + _n("" + a) + '"][type="radio"]',
              ),
                a = 0;
              a < s.length;
              a++
            ) {
              var o = s[a];
              if (o !== e && o.form === e.form) {
                var u = o[tn] || null;
                if (!u) throw Error(i(90));
                $u(
                  o,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (a = 0; a < s.length; a++)
              ((o = s[a]), o.form === e.form && Sp(o));
          }
          break e;
        case "textarea":
          Ep(e, s.value, s.defaultValue);
          break e;
        case "select":
          ((a = s.value), a != null && Ss(e, !!s.multiple, a, !1));
      }
    }
  }
  var td = !1;
  function Op(e, a, s) {
    if (td) return e(a, s);
    td = !0;
    try {
      var o = e(a);
      return o;
    } finally {
      if (
        ((td = !1),
        (Es !== null || Ns !== null) &&
          ($l(), Es && ((a = Es), (e = Ns), (Ns = Es = null), Cp(a), e)))
      )
        for (a = 0; a < e.length; a++) Cp(e[a]);
    }
  }
  function Mi(e, a) {
    var s = e.stateNode;
    if (s === null) return null;
    var o = s[tn] || null;
    if (o === null) return null;
    s = o[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(i(231, a, typeof s));
    return s;
  }
  var ga = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    nd = !1;
  if (ga)
    try {
      var Di = {};
      (Object.defineProperty(Di, "passive", {
        get: function () {
          nd = !0;
        },
      }),
        window.addEventListener("test", Di, Di),
        window.removeEventListener("test", Di, Di));
    } catch {
      nd = !1;
    }
  var Ka = null,
    ad = null,
    fl = null;
  function Rp() {
    if (fl) return fl;
    var e,
      a = ad,
      s = a.length,
      o,
      u = "value" in Ka ? Ka.value : Ka.textContent,
      m = u.length;
    for (e = 0; e < s && a[e] === u[e]; e++);
    var x = s - e;
    for (o = 1; o <= x && a[s - o] === u[m - o]; o++);
    return (fl = u.slice(e, 1 < o ? 1 - o : void 0));
  }
  function hl(e) {
    var a = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && a === 13 && (e = 13))
        : (e = a),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ml() {
    return !0;
  }
  function Ap() {
    return !1;
  }
  function nn(e) {
    function a(s, o, u, m, x) {
      ((this._reactName = s),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = m),
        (this.target = x),
        (this.currentTarget = null));
      for (var w in e)
        e.hasOwnProperty(w) && ((s = e[w]), (this[w] = s ? s(m) : m[w]));
      return (
        (this.isDefaultPrevented = (
          m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1
        )
          ? ml
          : Ap),
        (this.isPropagationStopped = Ap),
        this
      );
    }
    return (
      v(a.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = ml));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = ml));
        },
        persist: function () {},
        isPersistent: ml,
      }),
      a
    );
  }
  var zr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    pl = nn(zr),
    ki = v({}, zr, { view: 0, detail: 0 }),
    eE = nn(ki),
    rd,
    sd,
    Li,
    gl = v({}, ki, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: od,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Li &&
              (Li && e.type === "mousemove"
                ? ((rd = e.screenX - Li.screenX), (sd = e.screenY - Li.screenY))
                : (sd = rd = 0),
              (Li = e)),
            rd);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : sd;
      },
    }),
    Mp = nn(gl),
    tE = v({}, gl, { dataTransfer: 0 }),
    nE = nn(tE),
    aE = v({}, ki, { relatedTarget: 0 }),
    id = nn(aE),
    rE = v({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sE = nn(rE),
    iE = v({}, zr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    oE = nn(iE),
    lE = v({}, zr, { data: 0 }),
    Dp = nn(lE),
    cE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    uE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    dE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function fE(e) {
    var a = this.nativeEvent;
    return a.getModifierState
      ? a.getModifierState(e)
      : (e = dE[e])
        ? !!a[e]
        : !1;
  }
  function od() {
    return fE;
  }
  var hE = v({}, ki, {
      key: function (e) {
        if (e.key) {
          var a = cE[e.key] || e.key;
          if (a !== "Unidentified") return a;
        }
        return e.type === "keypress"
          ? ((e = hl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? uE[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: od,
      charCode: function (e) {
        return e.type === "keypress" ? hl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? hl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    mE = nn(hE),
    pE = v({}, gl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    kp = nn(pE),
    gE = v({}, ki, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: od,
    }),
    yE = nn(gE),
    vE = v({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xE = nn(vE),
    bE = v({}, gl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    wE = nn(bE),
    SE = v({}, zr, { newState: 0, oldState: 0 }),
    _E = nn(SE),
    EE = [9, 13, 27, 32],
    ld = ga && "CompositionEvent" in window,
    zi = null;
  ga && "documentMode" in document && (zi = document.documentMode);
  var NE = ga && "TextEvent" in window && !zi,
    Lp = ga && (!ld || (zi && 8 < zi && 11 >= zi)),
    zp = " ",
    qp = !1;
  function Up(e, a) {
    switch (e) {
      case "keyup":
        return EE.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vp(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Ts = !1;
  function TE(e, a) {
    switch (e) {
      case "compositionend":
        return Vp(a);
      case "keypress":
        return a.which !== 32 ? null : ((qp = !0), zp);
      case "textInput":
        return ((e = a.data), e === zp && qp ? null : e);
      default:
        return null;
    }
  }
  function jE(e, a) {
    if (Ts)
      return e === "compositionend" || (!ld && Up(e, a))
        ? ((e = Rp()), (fl = ad = Ka = null), (Ts = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Lp && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var CE = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Pp(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return a === "input" ? !!CE[e.type] : a === "textarea";
  }
  function Hp(e, a, s, o) {
    (Es ? (Ns ? Ns.push(o) : (Ns = [o])) : (Es = o),
      (a = nc(a, "onChange")),
      0 < a.length &&
        ((s = new pl("onChange", "change", null, s, o)),
        e.push({ event: s, listeners: a })));
  }
  var qi = null,
    Ui = null;
  function OE(e) {
    wv(e, 0);
  }
  function yl(e) {
    var a = Ai(e);
    if (Sp(a)) return e;
  }
  function Bp(e, a) {
    if (e === "change") return a;
  }
  var Fp = !1;
  if (ga) {
    var cd;
    if (ga) {
      var ud = "oninput" in document;
      if (!ud) {
        var Ip = document.createElement("div");
        (Ip.setAttribute("oninput", "return;"),
          (ud = typeof Ip.oninput == "function"));
      }
      cd = ud;
    } else cd = !1;
    Fp = cd && (!document.documentMode || 9 < document.documentMode);
  }
  function Gp() {
    qi && (qi.detachEvent("onpropertychange", Yp), (Ui = qi = null));
  }
  function Yp(e) {
    if (e.propertyName === "value" && yl(Ui)) {
      var a = [];
      (Hp(a, Ui, e, ed(e)), Op(OE, a));
    }
  }
  function RE(e, a, s) {
    e === "focusin"
      ? (Gp(), (qi = a), (Ui = s), qi.attachEvent("onpropertychange", Yp))
      : e === "focusout" && Gp();
  }
  function AE(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return yl(Ui);
  }
  function ME(e, a) {
    if (e === "click") return yl(a);
  }
  function DE(e, a) {
    if (e === "input" || e === "change") return yl(a);
  }
  function kE(e, a) {
    return (e === a && (e !== 0 || 1 / e === 1 / a)) || (e !== e && a !== a);
  }
  var ln = typeof Object.is == "function" ? Object.is : kE;
  function Vi(e, a) {
    if (ln(e, a)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof a != "object" ||
      a === null
    )
      return !1;
    var s = Object.keys(e),
      o = Object.keys(a);
    if (s.length !== o.length) return !1;
    for (o = 0; o < s.length; o++) {
      var u = s[o];
      if (!We.call(a, u) || !ln(e[u], a[u])) return !1;
    }
    return !0;
  }
  function Qp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Kp(e, a) {
    var s = Qp(e);
    e = 0;
    for (var o; s; ) {
      if (s.nodeType === 3) {
        if (((o = e + s.textContent.length), e <= a && o >= a))
          return { node: s, offset: a - e };
        e = o;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = Qp(s);
    }
  }
  function Zp(e, a) {
    return e && a
      ? e === a
        ? !0
        : e && e.nodeType === 3
          ? !1
          : a && a.nodeType === 3
            ? Zp(e, a.parentNode)
            : "contains" in e
              ? e.contains(a)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(a) & 16)
                : !1
      : !1;
  }
  function $p(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var a = ul(e.document); a instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof a.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = a.contentWindow;
      else break;
      a = ul(e.document);
    }
    return a;
  }
  function dd(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      a &&
      ((a === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        a === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var LE = ga && "documentMode" in document && 11 >= document.documentMode,
    js = null,
    fd = null,
    Pi = null,
    hd = !1;
  function Xp(e, a, s) {
    var o =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    hd ||
      js == null ||
      js !== ul(o) ||
      ((o = js),
      "selectionStart" in o && dd(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Pi && Vi(Pi, o)) ||
        ((Pi = o),
        (o = nc(fd, "onSelect")),
        0 < o.length &&
          ((a = new pl("onSelect", "select", null, a, s)),
          e.push({ event: a, listeners: o }),
          (a.target = js))));
  }
  function qr(e, a) {
    var s = {};
    return (
      (s[e.toLowerCase()] = a.toLowerCase()),
      (s["Webkit" + e] = "webkit" + a),
      (s["Moz" + e] = "moz" + a),
      s
    );
  }
  var Cs = {
      animationend: qr("Animation", "AnimationEnd"),
      animationiteration: qr("Animation", "AnimationIteration"),
      animationstart: qr("Animation", "AnimationStart"),
      transitionrun: qr("Transition", "TransitionRun"),
      transitionstart: qr("Transition", "TransitionStart"),
      transitioncancel: qr("Transition", "TransitionCancel"),
      transitionend: qr("Transition", "TransitionEnd"),
    },
    md = {},
    Wp = {};
  ga &&
    ((Wp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Cs.animationend.animation,
      delete Cs.animationiteration.animation,
      delete Cs.animationstart.animation),
    "TransitionEvent" in window || delete Cs.transitionend.transition);
  function Ur(e) {
    if (md[e]) return md[e];
    if (!Cs[e]) return e;
    var a = Cs[e],
      s;
    for (s in a) if (a.hasOwnProperty(s) && s in Wp) return (md[e] = a[s]);
    return e;
  }
  var Jp = Ur("animationend"),
    eg = Ur("animationiteration"),
    tg = Ur("animationstart"),
    zE = Ur("transitionrun"),
    qE = Ur("transitionstart"),
    UE = Ur("transitioncancel"),
    ng = Ur("transitionend"),
    ag = new Map(),
    pd =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  pd.push("scrollEnd");
  function zn(e, a) {
    (ag.set(e, a), Lr(a, [e]));
  }
  var rg = new WeakMap();
  function En(e, a) {
    if (typeof e == "object" && e !== null) {
      var s = rg.get(e);
      return s !== void 0
        ? s
        : ((a = { value: e, source: a, stack: bp(a) }), rg.set(e, a), a);
    }
    return { value: e, source: a, stack: bp(a) };
  }
  var Nn = [],
    Os = 0,
    gd = 0;
  function vl() {
    for (var e = Os, a = (gd = Os = 0); a < e; ) {
      var s = Nn[a];
      Nn[a++] = null;
      var o = Nn[a];
      Nn[a++] = null;
      var u = Nn[a];
      Nn[a++] = null;
      var m = Nn[a];
      if (((Nn[a++] = null), o !== null && u !== null)) {
        var x = o.pending;
        (x === null ? (u.next = u) : ((u.next = x.next), (x.next = u)),
          (o.pending = u));
      }
      m !== 0 && sg(s, u, m);
    }
  }
  function xl(e, a, s, o) {
    ((Nn[Os++] = e),
      (Nn[Os++] = a),
      (Nn[Os++] = s),
      (Nn[Os++] = o),
      (gd |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o));
  }
  function yd(e, a, s, o) {
    return (xl(e, a, s, o), bl(e));
  }
  function Rs(e, a) {
    return (xl(e, null, null, a), bl(e));
  }
  function sg(e, a, s) {
    e.lanes |= s;
    var o = e.alternate;
    o !== null && (o.lanes |= s);
    for (var u = !1, m = e.return; m !== null; )
      ((m.childLanes |= s),
        (o = m.alternate),
        o !== null && (o.childLanes |= s),
        m.tag === 22 &&
          ((e = m.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = m),
        (m = m.return));
    return e.tag === 3
      ? ((m = e.stateNode),
        u &&
          a !== null &&
          ((u = 31 - ze(s)),
          (e = m.hiddenUpdates),
          (o = e[u]),
          o === null ? (e[u] = [a]) : o.push(a),
          (a.lane = s | 536870912)),
        m)
      : null;
  }
  function bl(e) {
    if (50 < fo) throw ((fo = 0), (Ef = null), Error(i(185)));
    for (var a = e.return; a !== null; ) ((e = a), (a = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var As = {};
  function VE(e, a, s, o) {
    ((this.tag = e),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = a),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function cn(e, a, s, o) {
    return new VE(e, a, s, o);
  }
  function vd(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ya(e, a) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = cn(e.tag, a, e.key, e.mode)),
          (s.elementType = e.elementType),
          (s.type = e.type),
          (s.stateNode = e.stateNode),
          (s.alternate = e),
          (e.alternate = s))
        : ((s.pendingProps = a),
          (s.type = e.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = e.flags & 65011712),
      (s.childLanes = e.childLanes),
      (s.lanes = e.lanes),
      (s.child = e.child),
      (s.memoizedProps = e.memoizedProps),
      (s.memoizedState = e.memoizedState),
      (s.updateQueue = e.updateQueue),
      (a = e.dependencies),
      (s.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (s.sibling = e.sibling),
      (s.index = e.index),
      (s.ref = e.ref),
      (s.refCleanup = e.refCleanup),
      s
    );
  }
  function ig(e, a) {
    e.flags &= 65011714;
    var s = e.alternate;
    return (
      s === null
        ? ((e.childLanes = 0),
          (e.lanes = a),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = s.childLanes),
          (e.lanes = s.lanes),
          (e.child = s.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = s.memoizedProps),
          (e.memoizedState = s.memoizedState),
          (e.updateQueue = s.updateQueue),
          (e.type = s.type),
          (a = s.dependencies),
          (e.dependencies =
            a === null
              ? null
              : { lanes: a.lanes, firstContext: a.firstContext })),
      e
    );
  }
  function wl(e, a, s, o, u, m) {
    var x = 0;
    if (((o = e), typeof e == "function")) vd(e) && (x = 1);
    else if (typeof e == "string")
      x = HN(e, s, me.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case oe:
          return (
            (e = cn(31, s, a, u)),
            (e.elementType = oe),
            (e.lanes = m),
            e
          );
        case j:
          return Vr(s.children, u, m, a);
        case _:
          ((x = 8), (u |= 24));
          break;
        case N:
          return (
            (e = cn(12, s, a, u | 2)),
            (e.elementType = N),
            (e.lanes = m),
            e
          );
        case M:
          return ((e = cn(13, s, a, u)), (e.elementType = M), (e.lanes = m), e);
        case Y:
          return ((e = cn(19, s, a, u)), (e.elementType = Y), (e.lanes = m), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case R:
              case D:
                x = 10;
                break e;
              case O:
                x = 9;
                break e;
              case z:
                x = 11;
                break e;
              case Q:
                x = 14;
                break e;
              case F:
                ((x = 16), (o = null));
                break e;
            }
          ((x = 29),
            (s = Error(i(130, e === null ? "null" : typeof e, ""))),
            (o = null));
      }
    return (
      (a = cn(x, s, a, u)),
      (a.elementType = e),
      (a.type = o),
      (a.lanes = m),
      a
    );
  }
  function Vr(e, a, s, o) {
    return ((e = cn(7, e, o, a)), (e.lanes = s), e);
  }
  function xd(e, a, s) {
    return ((e = cn(6, e, null, a)), (e.lanes = s), e);
  }
  function bd(e, a, s) {
    return (
      (a = cn(4, e.children !== null ? e.children : [], e.key, a)),
      (a.lanes = s),
      (a.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      a
    );
  }
  var Ms = [],
    Ds = 0,
    Sl = null,
    _l = 0,
    Tn = [],
    jn = 0,
    Pr = null,
    va = 1,
    xa = "";
  function Hr(e, a) {
    ((Ms[Ds++] = _l), (Ms[Ds++] = Sl), (Sl = e), (_l = a));
  }
  function og(e, a, s) {
    ((Tn[jn++] = va), (Tn[jn++] = xa), (Tn[jn++] = Pr), (Pr = e));
    var o = va;
    e = xa;
    var u = 32 - ze(o) - 1;
    ((o &= ~(1 << u)), (s += 1));
    var m = 32 - ze(a) + u;
    if (30 < m) {
      var x = u - (u % 5);
      ((m = (o & ((1 << x) - 1)).toString(32)),
        (o >>= x),
        (u -= x),
        (va = (1 << (32 - ze(a) + u)) | (s << u) | o),
        (xa = m + e));
    } else ((va = (1 << m) | (s << u) | o), (xa = e));
  }
  function wd(e) {
    e.return !== null && (Hr(e, 1), og(e, 1, 0));
  }
  function Sd(e) {
    for (; e === Sl; )
      ((Sl = Ms[--Ds]), (Ms[Ds] = null), (_l = Ms[--Ds]), (Ms[Ds] = null));
    for (; e === Pr; )
      ((Pr = Tn[--jn]),
        (Tn[jn] = null),
        (xa = Tn[--jn]),
        (Tn[jn] = null),
        (va = Tn[--jn]),
        (Tn[jn] = null));
  }
  var Xt = null,
    gt = null,
    Je = !1,
    Br = null,
    Wn = !1,
    _d = Error(i(519));
  function Fr(e) {
    var a = Error(i(418, ""));
    throw (Fi(En(a, e)), _d);
  }
  function lg(e) {
    var a = e.stateNode,
      s = e.type,
      o = e.memoizedProps;
    switch (((a[Kt] = e), (a[tn] = o), s)) {
      case "dialog":
        (Ye("cancel", a), Ye("close", a));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ye("load", a);
        break;
      case "video":
      case "audio":
        for (s = 0; s < mo.length; s++) Ye(mo[s], a);
        break;
      case "source":
        Ye("error", a);
        break;
      case "img":
      case "image":
      case "link":
        (Ye("error", a), Ye("load", a));
        break;
      case "details":
        Ye("toggle", a);
        break;
      case "input":
        (Ye("invalid", a),
          _p(
            a,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0,
          ),
          cl(a));
        break;
      case "select":
        Ye("invalid", a);
        break;
      case "textarea":
        (Ye("invalid", a), Np(a, o.value, o.defaultValue, o.children), cl(a));
    }
    ((s = o.children),
      (typeof s != "string" && typeof s != "number" && typeof s != "bigint") ||
      a.textContent === "" + s ||
      o.suppressHydrationWarning === !0 ||
      Nv(a.textContent, s)
        ? (o.popover != null && (Ye("beforetoggle", a), Ye("toggle", a)),
          o.onScroll != null && Ye("scroll", a),
          o.onScrollEnd != null && Ye("scrollend", a),
          o.onClick != null && (a.onclick = ac),
          (a = !0))
        : (a = !1),
      a || Fr(e));
  }
  function cg(e) {
    for (Xt = e.return; Xt; )
      switch (Xt.tag) {
        case 5:
        case 13:
          Wn = !1;
          return;
        case 27:
        case 3:
          Wn = !0;
          return;
        default:
          Xt = Xt.return;
      }
  }
  function Hi(e) {
    if (e !== Xt) return !1;
    if (!Je) return (cg(e), (Je = !0), !1);
    var a = e.tag,
      s;
    if (
      ((s = a !== 3 && a !== 27) &&
        ((s = a === 5) &&
          ((s = e.type),
          (s =
            !(s !== "form" && s !== "button") || Pf(e.type, e.memoizedProps))),
        (s = !s)),
      s && gt && Fr(e),
      cg(e),
      a === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, a = 0; e; ) {
          if (e.nodeType === 8)
            if (((s = e.data), s === "/$")) {
              if (a === 0) {
                gt = Un(e.nextSibling);
                break e;
              }
              a--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || a++;
          e = e.nextSibling;
        }
        gt = null;
      }
    } else
      a === 27
        ? ((a = gt), ur(e.type) ? ((e = If), (If = null), (gt = e)) : (gt = a))
        : (gt = Xt ? Un(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Bi() {
    ((gt = Xt = null), (Je = !1));
  }
  function ug() {
    var e = Br;
    return (
      e !== null &&
        (sn === null ? (sn = e) : sn.push.apply(sn, e), (Br = null)),
      e
    );
  }
  function Fi(e) {
    Br === null ? (Br = [e]) : Br.push(e);
  }
  var Ed = Z(null),
    Ir = null,
    ba = null;
  function Za(e, a, s) {
    (ae(Ed, a._currentValue), (a._currentValue = s));
  }
  function wa(e) {
    ((e._currentValue = Ed.current), ie(Ed));
  }
  function Nd(e, a, s) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & a) !== a
          ? ((e.childLanes |= a), o !== null && (o.childLanes |= a))
          : o !== null && (o.childLanes & a) !== a && (o.childLanes |= a),
        e === s)
      )
        break;
      e = e.return;
    }
  }
  function Td(e, a, s, o) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var m = u.dependencies;
      if (m !== null) {
        var x = u.child;
        m = m.firstContext;
        e: for (; m !== null; ) {
          var w = m;
          m = u;
          for (var C = 0; C < a.length; C++)
            if (w.context === a[C]) {
              ((m.lanes |= s),
                (w = m.alternate),
                w !== null && (w.lanes |= s),
                Nd(m.return, s, e),
                o || (x = null));
              break e;
            }
          m = w.next;
        }
      } else if (u.tag === 18) {
        if (((x = u.return), x === null)) throw Error(i(341));
        ((x.lanes |= s),
          (m = x.alternate),
          m !== null && (m.lanes |= s),
          Nd(x, s, e),
          (x = null));
      } else x = u.child;
      if (x !== null) x.return = u;
      else
        for (x = u; x !== null; ) {
          if (x === e) {
            x = null;
            break;
          }
          if (((u = x.sibling), u !== null)) {
            ((u.return = x.return), (x = u));
            break;
          }
          x = x.return;
        }
      u = x;
    }
  }
  function Ii(e, a, s, o) {
    e = null;
    for (var u = a, m = !1; u !== null; ) {
      if (!m) {
        if ((u.flags & 524288) !== 0) m = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var x = u.alternate;
        if (x === null) throw Error(i(387));
        if (((x = x.memoizedProps), x !== null)) {
          var w = u.type;
          ln(u.pendingProps.value, x.value) ||
            (e !== null ? e.push(w) : (e = [w]));
        }
      } else if (u === ye.current) {
        if (((x = u.alternate), x === null)) throw Error(i(387));
        x.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(bo) : (e = [bo]));
      }
      u = u.return;
    }
    (e !== null && Td(a, e, s, o), (a.flags |= 262144));
  }
  function El(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ln(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Gr(e) {
    ((Ir = e),
      (ba = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Zt(e) {
    return dg(Ir, e);
  }
  function Nl(e, a) {
    return (Ir === null && Gr(e), dg(e, a));
  }
  function dg(e, a) {
    var s = a._currentValue;
    if (((a = { context: a, memoizedValue: s, next: null }), ba === null)) {
      if (e === null) throw Error(i(308));
      ((ba = a),
        (e.dependencies = { lanes: 0, firstContext: a }),
        (e.flags |= 524288));
    } else ba = ba.next = a;
    return s;
  }
  var PE =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              a = (this.signal = {
                aborted: !1,
                addEventListener: function (s, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              ((a.aborted = !0),
                e.forEach(function (s) {
                  return s();
                }));
            };
          },
    HE = t.unstable_scheduleCallback,
    BE = t.unstable_NormalPriority,
    Ot = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function jd() {
    return { controller: new PE(), data: new Map(), refCount: 0 };
  }
  function Gi(e) {
    (e.refCount--,
      e.refCount === 0 &&
        HE(BE, function () {
          e.controller.abort();
        }));
  }
  var Yi = null,
    Cd = 0,
    ks = 0,
    Ls = null;
  function FE(e, a) {
    if (Yi === null) {
      var s = (Yi = []);
      ((Cd = 0),
        (ks = Af()),
        (Ls = {
          status: "pending",
          value: void 0,
          then: function (o) {
            s.push(o);
          },
        }));
    }
    return (Cd++, a.then(fg, fg), a);
  }
  function fg() {
    if (--Cd === 0 && Yi !== null) {
      Ls !== null && (Ls.status = "fulfilled");
      var e = Yi;
      ((Yi = null), (ks = 0), (Ls = null));
      for (var a = 0; a < e.length; a++) (0, e[a])();
    }
  }
  function IE(e, a) {
    var s = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          s.push(u);
        },
      };
    return (
      e.then(
        function () {
          ((o.status = "fulfilled"), (o.value = a));
          for (var u = 0; u < s.length; u++) (0, s[u])(a);
        },
        function (u) {
          for (o.status = "rejected", o.reason = u, u = 0; u < s.length; u++)
            (0, s[u])(void 0);
        },
      ),
      o
    );
  }
  var hg = L.S;
  L.S = function (e, a) {
    (typeof a == "object" &&
      a !== null &&
      typeof a.then == "function" &&
      FE(e, a),
      hg !== null && hg(e, a));
  };
  var Yr = Z(null);
  function Od() {
    var e = Yr.current;
    return e !== null ? e : dt.pooledCache;
  }
  function Tl(e, a) {
    a === null ? ae(Yr, Yr.current) : ae(Yr, a.pool);
  }
  function mg() {
    var e = Od();
    return e === null ? null : { parent: Ot._currentValue, pool: e };
  }
  var Qi = Error(i(460)),
    pg = Error(i(474)),
    jl = Error(i(542)),
    Rd = { then: function () {} };
  function gg(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Cl() {}
  function yg(e, a, s) {
    switch (
      ((s = e[s]),
      s === void 0 ? e.push(a) : s !== a && (a.then(Cl, Cl), (a = s)),
      a.status)
    ) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw ((e = a.reason), xg(e), e);
      default:
        if (typeof a.status == "string") a.then(Cl, Cl);
        else {
          if (((e = dt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          ((e = a),
            (e.status = "pending"),
            e.then(
              function (o) {
                if (a.status === "pending") {
                  var u = a;
                  ((u.status = "fulfilled"), (u.value = o));
                }
              },
              function (o) {
                if (a.status === "pending") {
                  var u = a;
                  ((u.status = "rejected"), (u.reason = o));
                }
              },
            ));
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw ((e = a.reason), xg(e), e);
        }
        throw ((Ki = a), Qi);
    }
  }
  var Ki = null;
  function vg() {
    if (Ki === null) throw Error(i(459));
    var e = Ki;
    return ((Ki = null), e);
  }
  function xg(e) {
    if (e === Qi || e === jl) throw Error(i(483));
  }
  var $a = !1;
  function Ad(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Md(e, a) {
    ((e = e.updateQueue),
      a.updateQueue === e &&
        (a.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Xa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Wa(e, a, s) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (et & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (a.next = a) : ((a.next = u.next), (u.next = a)),
        (o.pending = a),
        (a = bl(e)),
        sg(e, null, s),
        a
      );
    }
    return (xl(e, o, a, s), bl(e));
  }
  function Zi(e, a, s) {
    if (
      ((a = a.updateQueue), a !== null && ((a = a.shared), (s & 4194048) !== 0))
    ) {
      var o = a.lanes;
      ((o &= e.pendingLanes), (s |= o), (a.lanes = s), fp(e, s));
    }
  }
  function Dd(e, a) {
    var s = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), s === o)) {
      var u = null,
        m = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var x = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null,
          };
          (m === null ? (u = m = x) : (m = m.next = x), (s = s.next));
        } while (s !== null);
        m === null ? (u = m = a) : (m = m.next = a);
      } else u = m = a;
      ((s = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: m,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = s));
      return;
    }
    ((e = s.lastBaseUpdate),
      e === null ? (s.firstBaseUpdate = a) : (e.next = a),
      (s.lastBaseUpdate = a));
  }
  var kd = !1;
  function $i() {
    if (kd) {
      var e = Ls;
      if (e !== null) throw e;
    }
  }
  function Xi(e, a, s, o) {
    kd = !1;
    var u = e.updateQueue;
    $a = !1;
    var m = u.firstBaseUpdate,
      x = u.lastBaseUpdate,
      w = u.shared.pending;
    if (w !== null) {
      u.shared.pending = null;
      var C = w,
        P = C.next;
      ((C.next = null), x === null ? (m = P) : (x.next = P), (x = C));
      var K = e.alternate;
      K !== null &&
        ((K = K.updateQueue),
        (w = K.lastBaseUpdate),
        w !== x &&
          (w === null ? (K.firstBaseUpdate = P) : (w.next = P),
          (K.lastBaseUpdate = C)));
    }
    if (m !== null) {
      var X = u.baseState;
      ((x = 0), (K = P = C = null), (w = m));
      do {
        var H = w.lane & -536870913,
          B = H !== w.lane;
        if (B ? (Ke & H) === H : (o & H) === H) {
          (H !== 0 && H === ks && (kd = !0),
            K !== null &&
              (K = K.next =
                {
                  lane: 0,
                  tag: w.tag,
                  payload: w.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var Me = e,
              Re = w;
            H = a;
            var ot = s;
            switch (Re.tag) {
              case 1:
                if (((Me = Re.payload), typeof Me == "function")) {
                  X = Me.call(ot, X, H);
                  break e;
                }
                X = Me;
                break e;
              case 3:
                Me.flags = (Me.flags & -65537) | 128;
              case 0:
                if (
                  ((Me = Re.payload),
                  (H = typeof Me == "function" ? Me.call(ot, X, H) : Me),
                  H == null)
                )
                  break e;
                X = v({}, X, H);
                break e;
              case 2:
                $a = !0;
            }
          }
          ((H = w.callback),
            H !== null &&
              ((e.flags |= 64),
              B && (e.flags |= 8192),
              (B = u.callbacks),
              B === null ? (u.callbacks = [H]) : B.push(H)));
        } else
          ((B = {
            lane: H,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            K === null ? ((P = K = B), (C = X)) : (K = K.next = B),
            (x |= H));
        if (((w = w.next), w === null)) {
          if (((w = u.shared.pending), w === null)) break;
          ((B = w),
            (w = B.next),
            (B.next = null),
            (u.lastBaseUpdate = B),
            (u.shared.pending = null));
        }
      } while (!0);
      (K === null && (C = X),
        (u.baseState = C),
        (u.firstBaseUpdate = P),
        (u.lastBaseUpdate = K),
        m === null && (u.shared.lanes = 0),
        (ir |= x),
        (e.lanes = x),
        (e.memoizedState = X));
    }
  }
  function bg(e, a) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(a);
  }
  function wg(e, a) {
    var s = e.callbacks;
    if (s !== null)
      for (e.callbacks = null, e = 0; e < s.length; e++) bg(s[e], a);
  }
  var zs = Z(null),
    Ol = Z(0);
  function Sg(e, a) {
    ((e = Ca), ae(Ol, e), ae(zs, a), (Ca = e | a.baseLanes));
  }
  function Ld() {
    (ae(Ol, Ca), ae(zs, zs.current));
  }
  function zd() {
    ((Ca = Ol.current), ie(zs), ie(Ol));
  }
  var Ja = 0,
    Ve = null,
    st = null,
    St = null,
    Rl = !1,
    qs = !1,
    Qr = !1,
    Al = 0,
    Wi = 0,
    Us = null,
    GE = 0;
  function vt() {
    throw Error(i(321));
  }
  function qd(e, a) {
    if (a === null) return !1;
    for (var s = 0; s < a.length && s < e.length; s++)
      if (!ln(e[s], a[s])) return !1;
    return !0;
  }
  function Ud(e, a, s, o, u, m) {
    return (
      (Ja = m),
      (Ve = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (L.H = e === null || e.memoizedState === null ? sy : iy),
      (Qr = !1),
      (m = s(o, u)),
      (Qr = !1),
      qs && (m = Eg(a, s, o, u)),
      _g(e),
      m
    );
  }
  function _g(e) {
    L.H = ql;
    var a = st !== null && st.next !== null;
    if (((Ja = 0), (St = st = Ve = null), (Rl = !1), (Wi = 0), (Us = null), a))
      throw Error(i(300));
    e === null ||
      qt ||
      ((e = e.dependencies), e !== null && El(e) && (qt = !0));
  }
  function Eg(e, a, s, o) {
    Ve = e;
    var u = 0;
    do {
      if ((qs && (Us = null), (Wi = 0), (qs = !1), 25 <= u))
        throw Error(i(301));
      if (((u += 1), (St = st = null), e.updateQueue != null)) {
        var m = e.updateQueue;
        ((m.lastEffect = null),
          (m.events = null),
          (m.stores = null),
          m.memoCache != null && (m.memoCache.index = 0));
      }
      ((L.H = WE), (m = a(s, o)));
    } while (qs);
    return m;
  }
  function YE() {
    var e = L.H,
      a = e.useState()[0];
    return (
      (a = typeof a.then == "function" ? Ji(a) : a),
      (e = e.useState()[0]),
      (st !== null ? st.memoizedState : null) !== e && (Ve.flags |= 1024),
      a
    );
  }
  function Vd() {
    var e = Al !== 0;
    return ((Al = 0), e);
  }
  function Pd(e, a, s) {
    ((a.updateQueue = e.updateQueue), (a.flags &= -2053), (e.lanes &= ~s));
  }
  function Hd(e) {
    if (Rl) {
      for (e = e.memoizedState; e !== null; ) {
        var a = e.queue;
        (a !== null && (a.pending = null), (e = e.next));
      }
      Rl = !1;
    }
    ((Ja = 0), (St = st = Ve = null), (qs = !1), (Wi = Al = 0), (Us = null));
  }
  function an() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (St === null ? (Ve.memoizedState = St = e) : (St = St.next = e), St);
  }
  function _t() {
    if (st === null) {
      var e = Ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = st.next;
    var a = St === null ? Ve.memoizedState : St.next;
    if (a !== null) ((St = a), (st = e));
    else {
      if (e === null)
        throw Ve.alternate === null ? Error(i(467)) : Error(i(310));
      ((st = e),
        (e = {
          memoizedState: st.memoizedState,
          baseState: st.baseState,
          baseQueue: st.baseQueue,
          queue: st.queue,
          next: null,
        }),
        St === null ? (Ve.memoizedState = St = e) : (St = St.next = e));
    }
    return St;
  }
  function Bd() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ji(e) {
    var a = Wi;
    return (
      (Wi += 1),
      Us === null && (Us = []),
      (e = yg(Us, e, a)),
      (a = Ve),
      (St === null ? a.memoizedState : St.next) === null &&
        ((a = a.alternate),
        (L.H = a === null || a.memoizedState === null ? sy : iy)),
      e
    );
  }
  function Ml(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ji(e);
      if (e.$$typeof === D) return Zt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Fd(e) {
    var a = null,
      s = Ve.updateQueue;
    if ((s !== null && (a = s.memoCache), a == null)) {
      var o = Ve.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (a = {
              data: o.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (a == null && (a = { data: [], index: 0 }),
      s === null && ((s = Bd()), (Ve.updateQueue = s)),
      (s.memoCache = a),
      (s = a.data[a.index]),
      s === void 0)
    )
      for (s = a.data[a.index] = Array(e), o = 0; o < e; o++) s[o] = ne;
    return (a.index++, s);
  }
  function Sa(e, a) {
    return typeof a == "function" ? a(e) : a;
  }
  function Dl(e) {
    var a = _t();
    return Id(a, st, e);
  }
  function Id(e, a, s) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = s;
    var u = e.baseQueue,
      m = o.pending;
    if (m !== null) {
      if (u !== null) {
        var x = u.next;
        ((u.next = m.next), (m.next = x));
      }
      ((a.baseQueue = u = m), (o.pending = null));
    }
    if (((m = e.baseState), u === null)) e.memoizedState = m;
    else {
      a = u.next;
      var w = (x = null),
        C = null,
        P = a,
        K = !1;
      do {
        var X = P.lane & -536870913;
        if (X !== P.lane ? (Ke & X) === X : (Ja & X) === X) {
          var H = P.revertLane;
          if (H === 0)
            (C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: P.action,
                  hasEagerState: P.hasEagerState,
                  eagerState: P.eagerState,
                  next: null,
                }),
              X === ks && (K = !0));
          else if ((Ja & H) === H) {
            ((P = P.next), H === ks && (K = !0));
            continue;
          } else
            ((X = {
              lane: 0,
              revertLane: P.revertLane,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null,
            }),
              C === null ? ((w = C = X), (x = m)) : (C = C.next = X),
              (Ve.lanes |= H),
              (ir |= H));
          ((X = P.action),
            Qr && s(m, X),
            (m = P.hasEagerState ? P.eagerState : s(m, X)));
        } else
          ((H = {
            lane: X,
            revertLane: P.revertLane,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          }),
            C === null ? ((w = C = H), (x = m)) : (C = C.next = H),
            (Ve.lanes |= X),
            (ir |= X));
        P = P.next;
      } while (P !== null && P !== a);
      if (
        (C === null ? (x = m) : (C.next = w),
        !ln(m, e.memoizedState) && ((qt = !0), K && ((s = Ls), s !== null)))
      )
        throw s;
      ((e.memoizedState = m),
        (e.baseState = x),
        (e.baseQueue = C),
        (o.lastRenderedState = m));
    }
    return (u === null && (o.lanes = 0), [e.memoizedState, o.dispatch]);
  }
  function Gd(e) {
    var a = _t(),
      s = a.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var o = s.dispatch,
      u = s.pending,
      m = a.memoizedState;
    if (u !== null) {
      s.pending = null;
      var x = (u = u.next);
      do ((m = e(m, x.action)), (x = x.next));
      while (x !== u);
      (ln(m, a.memoizedState) || (qt = !0),
        (a.memoizedState = m),
        a.baseQueue === null && (a.baseState = m),
        (s.lastRenderedState = m));
    }
    return [m, o];
  }
  function Ng(e, a, s) {
    var o = Ve,
      u = _t(),
      m = Je;
    if (m) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else s = a();
    var x = !ln((st || u).memoizedState, s);
    (x && ((u.memoizedState = s), (qt = !0)), (u = u.queue));
    var w = Cg.bind(null, o, u, e);
    if (
      (eo(2048, 8, w, [e]),
      u.getSnapshot !== a || x || (St !== null && St.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        Vs(9, kl(), jg.bind(null, o, u, s, a), null),
        dt === null)
      )
        throw Error(i(349));
      m || (Ja & 124) !== 0 || Tg(o, a, s);
    }
    return s;
  }
  function Tg(e, a, s) {
    ((e.flags |= 16384),
      (e = { getSnapshot: a, value: s }),
      (a = Ve.updateQueue),
      a === null
        ? ((a = Bd()), (Ve.updateQueue = a), (a.stores = [e]))
        : ((s = a.stores), s === null ? (a.stores = [e]) : s.push(e)));
  }
  function jg(e, a, s, o) {
    ((a.value = s), (a.getSnapshot = o), Og(a) && Rg(e));
  }
  function Cg(e, a, s) {
    return s(function () {
      Og(a) && Rg(e);
    });
  }
  function Og(e) {
    var a = e.getSnapshot;
    e = e.value;
    try {
      var s = a();
      return !ln(e, s);
    } catch {
      return !0;
    }
  }
  function Rg(e) {
    var a = Rs(e, 2);
    a !== null && mn(a, e, 2);
  }
  function Yd(e) {
    var a = an();
    if (typeof e == "function") {
      var s = e;
      if (((e = s()), Qr)) {
        Be(!0);
        try {
          s();
        } finally {
          Be(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = e),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sa,
        lastRenderedState: e,
      }),
      a
    );
  }
  function Ag(e, a, s, o) {
    return ((e.baseState = s), Id(e, st, typeof o == "function" ? o : Sa));
  }
  function QE(e, a, s, o, u) {
    if (zl(e)) throw Error(i(485));
    if (((e = a.action), e !== null)) {
      var m = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (x) {
          m.listeners.push(x);
        },
      };
      (L.T !== null ? s(!0) : (m.isTransition = !1),
        o(m),
        (s = a.pending),
        s === null
          ? ((m.next = a.pending = m), Mg(a, m))
          : ((m.next = s.next), (a.pending = s.next = m)));
    }
  }
  function Mg(e, a) {
    var s = a.action,
      o = a.payload,
      u = e.state;
    if (a.isTransition) {
      var m = L.T,
        x = {};
      L.T = x;
      try {
        var w = s(u, o),
          C = L.S;
        (C !== null && C(x, w), Dg(e, a, w));
      } catch (P) {
        Qd(e, a, P);
      } finally {
        L.T = m;
      }
    } else
      try {
        ((m = s(u, o)), Dg(e, a, m));
      } catch (P) {
        Qd(e, a, P);
      }
  }
  function Dg(e, a, s) {
    s !== null && typeof s == "object" && typeof s.then == "function"
      ? s.then(
          function (o) {
            kg(e, a, o);
          },
          function (o) {
            return Qd(e, a, o);
          },
        )
      : kg(e, a, s);
  }
  function kg(e, a, s) {
    ((a.status = "fulfilled"),
      (a.value = s),
      Lg(a),
      (e.state = s),
      (a = e.pending),
      a !== null &&
        ((s = a.next),
        s === a ? (e.pending = null) : ((s = s.next), (a.next = s), Mg(e, s))));
  }
  function Qd(e, a, s) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do ((a.status = "rejected"), (a.reason = s), Lg(a), (a = a.next));
      while (a !== o);
    }
    e.action = null;
  }
  function Lg(e) {
    e = e.listeners;
    for (var a = 0; a < e.length; a++) (0, e[a])();
  }
  function zg(e, a) {
    return a;
  }
  function qg(e, a) {
    if (Je) {
      var s = dt.formState;
      if (s !== null) {
        e: {
          var o = Ve;
          if (Je) {
            if (gt) {
              t: {
                for (var u = gt, m = Wn; u.nodeType !== 8; ) {
                  if (!m) {
                    u = null;
                    break t;
                  }
                  if (((u = Un(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((m = u.data), (u = m === "F!" || m === "F" ? u : null));
              }
              if (u) {
                ((gt = Un(u.nextSibling)), (o = u.data === "F!"));
                break e;
              }
            }
            Fr(o);
          }
          o = !1;
        }
        o && (a = s[0]);
      }
    }
    return (
      (s = an()),
      (s.memoizedState = s.baseState = a),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: a,
      }),
      (s.queue = o),
      (s = ny.bind(null, Ve, o)),
      (o.dispatch = s),
      (o = Yd(!1)),
      (m = Wd.bind(null, Ve, !1, o.queue)),
      (o = an()),
      (u = { state: a, dispatch: null, action: e, pending: null }),
      (o.queue = u),
      (s = QE.bind(null, Ve, u, m, s)),
      (u.dispatch = s),
      (o.memoizedState = e),
      [a, s, !1]
    );
  }
  function Ug(e) {
    var a = _t();
    return Vg(a, st, e);
  }
  function Vg(e, a, s) {
    if (
      ((a = Id(e, a, zg)[0]),
      (e = Dl(Sa)[0]),
      typeof a == "object" && a !== null && typeof a.then == "function")
    )
      try {
        var o = Ji(a);
      } catch (x) {
        throw x === Qi ? jl : x;
      }
    else o = a;
    a = _t();
    var u = a.queue,
      m = u.dispatch;
    return (
      s !== a.memoizedState &&
        ((Ve.flags |= 2048), Vs(9, kl(), KE.bind(null, u, s), null)),
      [o, m, e]
    );
  }
  function KE(e, a) {
    e.action = a;
  }
  function Pg(e) {
    var a = _t(),
      s = st;
    if (s !== null) return Vg(a, s, e);
    (_t(), (a = a.memoizedState), (s = _t()));
    var o = s.queue.dispatch;
    return ((s.memoizedState = e), [a, o, !1]);
  }
  function Vs(e, a, s, o) {
    return (
      (e = { tag: e, create: s, deps: o, inst: a, next: null }),
      (a = Ve.updateQueue),
      a === null && ((a = Bd()), (Ve.updateQueue = a)),
      (s = a.lastEffect),
      s === null
        ? (a.lastEffect = e.next = e)
        : ((o = s.next), (s.next = e), (e.next = o), (a.lastEffect = e)),
      e
    );
  }
  function kl() {
    return { destroy: void 0, resource: void 0 };
  }
  function Hg() {
    return _t().memoizedState;
  }
  function Ll(e, a, s, o) {
    var u = an();
    ((o = o === void 0 ? null : o),
      (Ve.flags |= e),
      (u.memoizedState = Vs(1 | a, kl(), s, o)));
  }
  function eo(e, a, s, o) {
    var u = _t();
    o = o === void 0 ? null : o;
    var m = u.memoizedState.inst;
    st !== null && o !== null && qd(o, st.memoizedState.deps)
      ? (u.memoizedState = Vs(a, m, s, o))
      : ((Ve.flags |= e), (u.memoizedState = Vs(1 | a, m, s, o)));
  }
  function Bg(e, a) {
    Ll(8390656, 8, e, a);
  }
  function Fg(e, a) {
    eo(2048, 8, e, a);
  }
  function Ig(e, a) {
    return eo(4, 2, e, a);
  }
  function Gg(e, a) {
    return eo(4, 4, e, a);
  }
  function Yg(e, a) {
    if (typeof a == "function") {
      e = e();
      var s = a(e);
      return function () {
        typeof s == "function" ? s() : a(null);
      };
    }
    if (a != null)
      return (
        (e = e()),
        (a.current = e),
        function () {
          a.current = null;
        }
      );
  }
  function Qg(e, a, s) {
    ((s = s != null ? s.concat([e]) : null), eo(4, 4, Yg.bind(null, a, e), s));
  }
  function Kd() {}
  function Kg(e, a) {
    var s = _t();
    a = a === void 0 ? null : a;
    var o = s.memoizedState;
    return a !== null && qd(a, o[1]) ? o[0] : ((s.memoizedState = [e, a]), e);
  }
  function Zg(e, a) {
    var s = _t();
    a = a === void 0 ? null : a;
    var o = s.memoizedState;
    if (a !== null && qd(a, o[1])) return o[0];
    if (((o = e()), Qr)) {
      Be(!0);
      try {
        e();
      } finally {
        Be(!1);
      }
    }
    return ((s.memoizedState = [o, a]), o);
  }
  function Zd(e, a, s) {
    return s === void 0 || (Ja & 1073741824) !== 0
      ? (e.memoizedState = a)
      : ((e.memoizedState = s), (e = Wy()), (Ve.lanes |= e), (ir |= e), s);
  }
  function $g(e, a, s, o) {
    return ln(s, a)
      ? s
      : zs.current !== null
        ? ((e = Zd(e, s, o)), ln(e, a) || (qt = !0), e)
        : (Ja & 42) === 0
          ? ((qt = !0), (e.memoizedState = s))
          : ((e = Wy()), (Ve.lanes |= e), (ir |= e), a);
  }
  function Xg(e, a, s, o, u) {
    var m = G.p;
    G.p = m !== 0 && 8 > m ? m : 8;
    var x = L.T,
      w = {};
    ((L.T = w), Wd(e, !1, a, s));
    try {
      var C = u(),
        P = L.S;
      if (
        (P !== null && P(w, C),
        C !== null && typeof C == "object" && typeof C.then == "function")
      ) {
        var K = IE(C, o);
        to(e, a, K, hn(e));
      } else to(e, a, o, hn(e));
    } catch (X) {
      to(e, a, { then: function () {}, status: "rejected", reason: X }, hn());
    } finally {
      ((G.p = m), (L.T = x));
    }
  }
  function ZE() {}
  function $d(e, a, s, o) {
    if (e.tag !== 5) throw Error(i(476));
    var u = Wg(e).queue;
    Xg(
      e,
      u,
      a,
      W,
      s === null
        ? ZE
        : function () {
            return (Jg(e), s(o));
          },
    );
  }
  function Wg(e) {
    var a = e.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sa,
        lastRenderedState: W,
      },
      next: null,
    };
    var s = {};
    return (
      (a.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Sa,
          lastRenderedState: s,
        },
        next: null,
      }),
      (e.memoizedState = a),
      (e = e.alternate),
      e !== null && (e.memoizedState = a),
      a
    );
  }
  function Jg(e) {
    var a = Wg(e).next.queue;
    to(e, a, {}, hn());
  }
  function Xd() {
    return Zt(bo);
  }
  function ey() {
    return _t().memoizedState;
  }
  function ty() {
    return _t().memoizedState;
  }
  function $E(e) {
    for (var a = e.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var s = hn();
          e = Xa(s);
          var o = Wa(a, e, s);
          (o !== null && (mn(o, a, s), Zi(o, a, s)),
            (a = { cache: jd() }),
            (e.payload = a));
          return;
      }
      a = a.return;
    }
  }
  function XE(e, a, s) {
    var o = hn();
    ((s = {
      lane: o,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      zl(e)
        ? ay(a, s)
        : ((s = yd(e, a, s, o)), s !== null && (mn(s, e, o), ry(s, a, o))));
  }
  function ny(e, a, s) {
    var o = hn();
    to(e, a, s, o);
  }
  function to(e, a, s, o) {
    var u = {
      lane: o,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (zl(e)) ay(a, u);
    else {
      var m = e.alternate;
      if (
        e.lanes === 0 &&
        (m === null || m.lanes === 0) &&
        ((m = a.lastRenderedReducer), m !== null)
      )
        try {
          var x = a.lastRenderedState,
            w = m(x, s);
          if (((u.hasEagerState = !0), (u.eagerState = w), ln(w, x)))
            return (xl(e, a, u, 0), dt === null && vl(), !1);
        } catch {}
      if (((s = yd(e, a, u, o)), s !== null))
        return (mn(s, e, o), ry(s, a, o), !0);
    }
    return !1;
  }
  function Wd(e, a, s, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Af(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zl(e))
    ) {
      if (a) throw Error(i(479));
    } else ((a = yd(e, s, o, 2)), a !== null && mn(a, e, 2));
  }
  function zl(e) {
    var a = e.alternate;
    return e === Ve || (a !== null && a === Ve);
  }
  function ay(e, a) {
    qs = Rl = !0;
    var s = e.pending;
    (s === null ? (a.next = a) : ((a.next = s.next), (s.next = a)),
      (e.pending = a));
  }
  function ry(e, a, s) {
    if ((s & 4194048) !== 0) {
      var o = a.lanes;
      ((o &= e.pendingLanes), (s |= o), (a.lanes = s), fp(e, s));
    }
  }
  var ql = {
      readContext: Zt,
      use: Ml,
      useCallback: vt,
      useContext: vt,
      useEffect: vt,
      useImperativeHandle: vt,
      useLayoutEffect: vt,
      useInsertionEffect: vt,
      useMemo: vt,
      useReducer: vt,
      useRef: vt,
      useState: vt,
      useDebugValue: vt,
      useDeferredValue: vt,
      useTransition: vt,
      useSyncExternalStore: vt,
      useId: vt,
      useHostTransitionStatus: vt,
      useFormState: vt,
      useActionState: vt,
      useOptimistic: vt,
      useMemoCache: vt,
      useCacheRefresh: vt,
    },
    sy = {
      readContext: Zt,
      use: Ml,
      useCallback: function (e, a) {
        return ((an().memoizedState = [e, a === void 0 ? null : a]), e);
      },
      useContext: Zt,
      useEffect: Bg,
      useImperativeHandle: function (e, a, s) {
        ((s = s != null ? s.concat([e]) : null),
          Ll(4194308, 4, Yg.bind(null, a, e), s));
      },
      useLayoutEffect: function (e, a) {
        return Ll(4194308, 4, e, a);
      },
      useInsertionEffect: function (e, a) {
        Ll(4, 2, e, a);
      },
      useMemo: function (e, a) {
        var s = an();
        a = a === void 0 ? null : a;
        var o = e();
        if (Qr) {
          Be(!0);
          try {
            e();
          } finally {
            Be(!1);
          }
        }
        return ((s.memoizedState = [o, a]), o);
      },
      useReducer: function (e, a, s) {
        var o = an();
        if (s !== void 0) {
          var u = s(a);
          if (Qr) {
            Be(!0);
            try {
              s(a);
            } finally {
              Be(!1);
            }
          }
        } else u = a;
        return (
          (o.memoizedState = o.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (o.queue = e),
          (e = e.dispatch = XE.bind(null, Ve, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var a = an();
        return ((e = { current: e }), (a.memoizedState = e));
      },
      useState: function (e) {
        e = Yd(e);
        var a = e.queue,
          s = ny.bind(null, Ve, a);
        return ((a.dispatch = s), [e.memoizedState, s]);
      },
      useDebugValue: Kd,
      useDeferredValue: function (e, a) {
        var s = an();
        return Zd(s, e, a);
      },
      useTransition: function () {
        var e = Yd(!1);
        return (
          (e = Xg.bind(null, Ve, e.queue, !0, !1)),
          (an().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, a, s) {
        var o = Ve,
          u = an();
        if (Je) {
          if (s === void 0) throw Error(i(407));
          s = s();
        } else {
          if (((s = a()), dt === null)) throw Error(i(349));
          (Ke & 124) !== 0 || Tg(o, a, s);
        }
        u.memoizedState = s;
        var m = { value: s, getSnapshot: a };
        return (
          (u.queue = m),
          Bg(Cg.bind(null, o, m, e), [e]),
          (o.flags |= 2048),
          Vs(9, kl(), jg.bind(null, o, m, s, a), null),
          s
        );
      },
      useId: function () {
        var e = an(),
          a = dt.identifierPrefix;
        if (Je) {
          var s = xa,
            o = va;
          ((s = (o & ~(1 << (32 - ze(o) - 1))).toString(32) + s),
            (a = "«" + a + "R" + s),
            (s = Al++),
            0 < s && (a += "H" + s.toString(32)),
            (a += "»"));
        } else ((s = GE++), (a = "«" + a + "r" + s.toString(32) + "»"));
        return (e.memoizedState = a);
      },
      useHostTransitionStatus: Xd,
      useFormState: qg,
      useActionState: qg,
      useOptimistic: function (e) {
        var a = an();
        a.memoizedState = a.baseState = e;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (a.queue = s),
          (a = Wd.bind(null, Ve, !0, s)),
          (s.dispatch = a),
          [e, a]
        );
      },
      useMemoCache: Fd,
      useCacheRefresh: function () {
        return (an().memoizedState = $E.bind(null, Ve));
      },
    },
    iy = {
      readContext: Zt,
      use: Ml,
      useCallback: Kg,
      useContext: Zt,
      useEffect: Fg,
      useImperativeHandle: Qg,
      useInsertionEffect: Ig,
      useLayoutEffect: Gg,
      useMemo: Zg,
      useReducer: Dl,
      useRef: Hg,
      useState: function () {
        return Dl(Sa);
      },
      useDebugValue: Kd,
      useDeferredValue: function (e, a) {
        var s = _t();
        return $g(s, st.memoizedState, e, a);
      },
      useTransition: function () {
        var e = Dl(Sa)[0],
          a = _t().memoizedState;
        return [typeof e == "boolean" ? e : Ji(e), a];
      },
      useSyncExternalStore: Ng,
      useId: ey,
      useHostTransitionStatus: Xd,
      useFormState: Ug,
      useActionState: Ug,
      useOptimistic: function (e, a) {
        var s = _t();
        return Ag(s, st, e, a);
      },
      useMemoCache: Fd,
      useCacheRefresh: ty,
    },
    WE = {
      readContext: Zt,
      use: Ml,
      useCallback: Kg,
      useContext: Zt,
      useEffect: Fg,
      useImperativeHandle: Qg,
      useInsertionEffect: Ig,
      useLayoutEffect: Gg,
      useMemo: Zg,
      useReducer: Gd,
      useRef: Hg,
      useState: function () {
        return Gd(Sa);
      },
      useDebugValue: Kd,
      useDeferredValue: function (e, a) {
        var s = _t();
        return st === null ? Zd(s, e, a) : $g(s, st.memoizedState, e, a);
      },
      useTransition: function () {
        var e = Gd(Sa)[0],
          a = _t().memoizedState;
        return [typeof e == "boolean" ? e : Ji(e), a];
      },
      useSyncExternalStore: Ng,
      useId: ey,
      useHostTransitionStatus: Xd,
      useFormState: Pg,
      useActionState: Pg,
      useOptimistic: function (e, a) {
        var s = _t();
        return st !== null
          ? Ag(s, st, e, a)
          : ((s.baseState = e), [e, s.queue.dispatch]);
      },
      useMemoCache: Fd,
      useCacheRefresh: ty,
    },
    Ps = null,
    no = 0;
  function Ul(e) {
    var a = no;
    return ((no += 1), Ps === null && (Ps = []), yg(Ps, e, a));
  }
  function ao(e, a) {
    ((a = a.props.ref), (e.ref = a !== void 0 ? a : null));
  }
  function Vl(e, a) {
    throw a.$$typeof === b
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(a)),
        Error(
          i(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : e,
          ),
        ));
  }
  function oy(e) {
    var a = e._init;
    return a(e._payload);
  }
  function ly(e) {
    function a(q, k) {
      if (e) {
        var U = q.deletions;
        U === null ? ((q.deletions = [k]), (q.flags |= 16)) : U.push(k);
      }
    }
    function s(q, k) {
      if (!e) return null;
      for (; k !== null; ) (a(q, k), (k = k.sibling));
      return null;
    }
    function o(q) {
      for (var k = new Map(); q !== null; )
        (q.key !== null ? k.set(q.key, q) : k.set(q.index, q), (q = q.sibling));
      return k;
    }
    function u(q, k) {
      return ((q = ya(q, k)), (q.index = 0), (q.sibling = null), q);
    }
    function m(q, k, U) {
      return (
        (q.index = U),
        e
          ? ((U = q.alternate),
            U !== null
              ? ((U = U.index), U < k ? ((q.flags |= 67108866), k) : U)
              : ((q.flags |= 67108866), k))
          : ((q.flags |= 1048576), k)
      );
    }
    function x(q) {
      return (e && q.alternate === null && (q.flags |= 67108866), q);
    }
    function w(q, k, U, $) {
      return k === null || k.tag !== 6
        ? ((k = xd(U, q.mode, $)), (k.return = q), k)
        : ((k = u(k, U)), (k.return = q), k);
    }
    function C(q, k, U, $) {
      var xe = U.type;
      return xe === j
        ? K(q, k, U.props.children, $, U.key)
        : k !== null &&
            (k.elementType === xe ||
              (typeof xe == "object" &&
                xe !== null &&
                xe.$$typeof === F &&
                oy(xe) === k.type))
          ? ((k = u(k, U.props)), ao(k, U), (k.return = q), k)
          : ((k = wl(U.type, U.key, U.props, null, q.mode, $)),
            ao(k, U),
            (k.return = q),
            k);
    }
    function P(q, k, U, $) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== U.containerInfo ||
        k.stateNode.implementation !== U.implementation
        ? ((k = bd(U, q.mode, $)), (k.return = q), k)
        : ((k = u(k, U.children || [])), (k.return = q), k);
    }
    function K(q, k, U, $, xe) {
      return k === null || k.tag !== 7
        ? ((k = Vr(U, q.mode, $, xe)), (k.return = q), k)
        : ((k = u(k, U)), (k.return = q), k);
    }
    function X(q, k, U) {
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return ((k = xd("" + k, q.mode, U)), (k.return = q), k);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case S:
            return (
              (U = wl(k.type, k.key, k.props, null, q.mode, U)),
              ao(U, k),
              (U.return = q),
              U
            );
          case E:
            return ((k = bd(k, q.mode, U)), (k.return = q), k);
          case F:
            var $ = k._init;
            return ((k = $(k._payload)), X(q, k, U));
        }
        if (ce(k) || J(k))
          return ((k = Vr(k, q.mode, U, null)), (k.return = q), k);
        if (typeof k.then == "function") return X(q, Ul(k), U);
        if (k.$$typeof === D) return X(q, Nl(q, k), U);
        Vl(q, k);
      }
      return null;
    }
    function H(q, k, U, $) {
      var xe = k !== null ? k.key : null;
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return xe !== null ? null : w(q, k, "" + U, $);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case S:
            return U.key === xe ? C(q, k, U, $) : null;
          case E:
            return U.key === xe ? P(q, k, U, $) : null;
          case F:
            return ((xe = U._init), (U = xe(U._payload)), H(q, k, U, $));
        }
        if (ce(U) || J(U)) return xe !== null ? null : K(q, k, U, $, null);
        if (typeof U.then == "function") return H(q, k, Ul(U), $);
        if (U.$$typeof === D) return H(q, k, Nl(q, U), $);
        Vl(q, U);
      }
      return null;
    }
    function B(q, k, U, $, xe) {
      if (
        (typeof $ == "string" && $ !== "") ||
        typeof $ == "number" ||
        typeof $ == "bigint"
      )
        return ((q = q.get(U) || null), w(k, q, "" + $, xe));
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case S:
            return (
              (q = q.get($.key === null ? U : $.key) || null),
              C(k, q, $, xe)
            );
          case E:
            return (
              (q = q.get($.key === null ? U : $.key) || null),
              P(k, q, $, xe)
            );
          case F:
            var Fe = $._init;
            return (($ = Fe($._payload)), B(q, k, U, $, xe));
        }
        if (ce($) || J($))
          return ((q = q.get(U) || null), K(k, q, $, xe, null));
        if (typeof $.then == "function") return B(q, k, U, Ul($), xe);
        if ($.$$typeof === D) return B(q, k, U, Nl(k, $), xe);
        Vl(k, $);
      }
      return null;
    }
    function Me(q, k, U, $) {
      for (
        var xe = null, Fe = null, Te = k, Ae = (k = 0), Vt = null;
        Te !== null && Ae < U.length;
        Ae++
      ) {
        Te.index > Ae ? ((Vt = Te), (Te = null)) : (Vt = Te.sibling);
        var $e = H(q, Te, U[Ae], $);
        if ($e === null) {
          Te === null && (Te = Vt);
          break;
        }
        (e && Te && $e.alternate === null && a(q, Te),
          (k = m($e, k, Ae)),
          Fe === null ? (xe = $e) : (Fe.sibling = $e),
          (Fe = $e),
          (Te = Vt));
      }
      if (Ae === U.length) return (s(q, Te), Je && Hr(q, Ae), xe);
      if (Te === null) {
        for (; Ae < U.length; Ae++)
          ((Te = X(q, U[Ae], $)),
            Te !== null &&
              ((k = m(Te, k, Ae)),
              Fe === null ? (xe = Te) : (Fe.sibling = Te),
              (Fe = Te)));
        return (Je && Hr(q, Ae), xe);
      }
      for (Te = o(Te); Ae < U.length; Ae++)
        ((Vt = B(Te, q, Ae, U[Ae], $)),
          Vt !== null &&
            (e &&
              Vt.alternate !== null &&
              Te.delete(Vt.key === null ? Ae : Vt.key),
            (k = m(Vt, k, Ae)),
            Fe === null ? (xe = Vt) : (Fe.sibling = Vt),
            (Fe = Vt)));
      return (
        e &&
          Te.forEach(function (pr) {
            return a(q, pr);
          }),
        Je && Hr(q, Ae),
        xe
      );
    }
    function Re(q, k, U, $) {
      if (U == null) throw Error(i(151));
      for (
        var xe = null,
          Fe = null,
          Te = k,
          Ae = (k = 0),
          Vt = null,
          $e = U.next();
        Te !== null && !$e.done;
        Ae++, $e = U.next()
      ) {
        Te.index > Ae ? ((Vt = Te), (Te = null)) : (Vt = Te.sibling);
        var pr = H(q, Te, $e.value, $);
        if (pr === null) {
          Te === null && (Te = Vt);
          break;
        }
        (e && Te && pr.alternate === null && a(q, Te),
          (k = m(pr, k, Ae)),
          Fe === null ? (xe = pr) : (Fe.sibling = pr),
          (Fe = pr),
          (Te = Vt));
      }
      if ($e.done) return (s(q, Te), Je && Hr(q, Ae), xe);
      if (Te === null) {
        for (; !$e.done; Ae++, $e = U.next())
          (($e = X(q, $e.value, $)),
            $e !== null &&
              ((k = m($e, k, Ae)),
              Fe === null ? (xe = $e) : (Fe.sibling = $e),
              (Fe = $e)));
        return (Je && Hr(q, Ae), xe);
      }
      for (Te = o(Te); !$e.done; Ae++, $e = U.next())
        (($e = B(Te, q, Ae, $e.value, $)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              Te.delete($e.key === null ? Ae : $e.key),
            (k = m($e, k, Ae)),
            Fe === null ? (xe = $e) : (Fe.sibling = $e),
            (Fe = $e)));
      return (
        e &&
          Te.forEach(function (JN) {
            return a(q, JN);
          }),
        Je && Hr(q, Ae),
        xe
      );
    }
    function ot(q, k, U, $) {
      if (
        (typeof U == "object" &&
          U !== null &&
          U.type === j &&
          U.key === null &&
          (U = U.props.children),
        typeof U == "object" && U !== null)
      ) {
        switch (U.$$typeof) {
          case S:
            e: {
              for (var xe = U.key; k !== null; ) {
                if (k.key === xe) {
                  if (((xe = U.type), xe === j)) {
                    if (k.tag === 7) {
                      (s(q, k.sibling),
                        ($ = u(k, U.props.children)),
                        ($.return = q),
                        (q = $));
                      break e;
                    }
                  } else if (
                    k.elementType === xe ||
                    (typeof xe == "object" &&
                      xe !== null &&
                      xe.$$typeof === F &&
                      oy(xe) === k.type)
                  ) {
                    (s(q, k.sibling),
                      ($ = u(k, U.props)),
                      ao($, U),
                      ($.return = q),
                      (q = $));
                    break e;
                  }
                  s(q, k);
                  break;
                } else a(q, k);
                k = k.sibling;
              }
              U.type === j
                ? (($ = Vr(U.props.children, q.mode, $, U.key)),
                  ($.return = q),
                  (q = $))
                : (($ = wl(U.type, U.key, U.props, null, q.mode, $)),
                  ao($, U),
                  ($.return = q),
                  (q = $));
            }
            return x(q);
          case E:
            e: {
              for (xe = U.key; k !== null; ) {
                if (k.key === xe)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === U.containerInfo &&
                    k.stateNode.implementation === U.implementation
                  ) {
                    (s(q, k.sibling),
                      ($ = u(k, U.children || [])),
                      ($.return = q),
                      (q = $));
                    break e;
                  } else {
                    s(q, k);
                    break;
                  }
                else a(q, k);
                k = k.sibling;
              }
              (($ = bd(U, q.mode, $)), ($.return = q), (q = $));
            }
            return x(q);
          case F:
            return ((xe = U._init), (U = xe(U._payload)), ot(q, k, U, $));
        }
        if (ce(U)) return Me(q, k, U, $);
        if (J(U)) {
          if (((xe = J(U)), typeof xe != "function")) throw Error(i(150));
          return ((U = xe.call(U)), Re(q, k, U, $));
        }
        if (typeof U.then == "function") return ot(q, k, Ul(U), $);
        if (U.$$typeof === D) return ot(q, k, Nl(q, U), $);
        Vl(q, U);
      }
      return (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
        ? ((U = "" + U),
          k !== null && k.tag === 6
            ? (s(q, k.sibling), ($ = u(k, U)), ($.return = q), (q = $))
            : (s(q, k), ($ = xd(U, q.mode, $)), ($.return = q), (q = $)),
          x(q))
        : s(q, k);
    }
    return function (q, k, U, $) {
      try {
        no = 0;
        var xe = ot(q, k, U, $);
        return ((Ps = null), xe);
      } catch (Te) {
        if (Te === Qi || Te === jl) throw Te;
        var Fe = cn(29, Te, null, q.mode);
        return ((Fe.lanes = $), (Fe.return = q), Fe);
      }
    };
  }
  var Hs = ly(!0),
    cy = ly(!1),
    Cn = Z(null),
    Jn = null;
  function er(e) {
    var a = e.alternate;
    (ae(Rt, Rt.current & 1),
      ae(Cn, e),
      Jn === null &&
        (a === null || zs.current !== null || a.memoizedState !== null) &&
        (Jn = e));
  }
  function uy(e) {
    if (e.tag === 22) {
      if ((ae(Rt, Rt.current), ae(Cn, e), Jn === null)) {
        var a = e.alternate;
        a !== null && a.memoizedState !== null && (Jn = e);
      }
    } else tr();
  }
  function tr() {
    (ae(Rt, Rt.current), ae(Cn, Cn.current));
  }
  function _a(e) {
    (ie(Cn), Jn === e && (Jn = null), ie(Rt));
  }
  var Rt = Z(0);
  function Pl(e) {
    for (var a = e; a !== null; ) {
      if (a.tag === 13) {
        var s = a.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || Ff(s))
        )
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        ((a.child.return = a), (a = a.child));
        continue;
      }
      if (a === e) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e) return null;
        a = a.return;
      }
      ((a.sibling.return = a.return), (a = a.sibling));
    }
    return null;
  }
  function Jd(e, a, s, o) {
    ((a = e.memoizedState),
      (s = s(o, a)),
      (s = s == null ? a : v({}, a, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s));
  }
  var ef = {
    enqueueSetState: function (e, a, s) {
      e = e._reactInternals;
      var o = hn(),
        u = Xa(o);
      ((u.payload = a),
        s != null && (u.callback = s),
        (a = Wa(e, u, o)),
        a !== null && (mn(a, e, o), Zi(a, e, o)));
    },
    enqueueReplaceState: function (e, a, s) {
      e = e._reactInternals;
      var o = hn(),
        u = Xa(o);
      ((u.tag = 1),
        (u.payload = a),
        s != null && (u.callback = s),
        (a = Wa(e, u, o)),
        a !== null && (mn(a, e, o), Zi(a, e, o)));
    },
    enqueueForceUpdate: function (e, a) {
      e = e._reactInternals;
      var s = hn(),
        o = Xa(s);
      ((o.tag = 2),
        a != null && (o.callback = a),
        (a = Wa(e, o, s)),
        a !== null && (mn(a, e, s), Zi(a, e, s)));
    },
  };
  function dy(e, a, s, o, u, m, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, m, x)
        : a.prototype && a.prototype.isPureReactComponent
          ? !Vi(s, o) || !Vi(u, m)
          : !0
    );
  }
  function fy(e, a, s, o) {
    ((e = a.state),
      typeof a.componentWillReceiveProps == "function" &&
        a.componentWillReceiveProps(s, o),
      typeof a.UNSAFE_componentWillReceiveProps == "function" &&
        a.UNSAFE_componentWillReceiveProps(s, o),
      a.state !== e && ef.enqueueReplaceState(a, a.state, null));
  }
  function Kr(e, a) {
    var s = a;
    if ("ref" in a) {
      s = {};
      for (var o in a) o !== "ref" && (s[o] = a[o]);
    }
    if ((e = e.defaultProps)) {
      s === a && (s = v({}, s));
      for (var u in e) s[u] === void 0 && (s[u] = e[u]);
    }
    return s;
  }
  var Hl =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var a = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(a)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function hy(e) {
    Hl(e);
  }
  function my(e) {
    console.error(e);
  }
  function py(e) {
    Hl(e);
  }
  function Bl(e, a) {
    try {
      var s = e.onUncaughtError;
      s(a.value, { componentStack: a.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function gy(e, a, s) {
    try {
      var o = e.onCaughtError;
      o(s.value, {
        componentStack: s.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function tf(e, a, s) {
    return (
      (s = Xa(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        Bl(e, a);
      }),
      s
    );
  }
  function yy(e) {
    return ((e = Xa(e)), (e.tag = 3), e);
  }
  function vy(e, a, s, o) {
    var u = s.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var m = o.value;
      ((e.payload = function () {
        return u(m);
      }),
        (e.callback = function () {
          gy(a, s, o);
        }));
    }
    var x = s.stateNode;
    x !== null &&
      typeof x.componentDidCatch == "function" &&
      (e.callback = function () {
        (gy(a, s, o),
          typeof u != "function" &&
            (or === null ? (or = new Set([this])) : or.add(this)));
        var w = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: w !== null ? w : "",
        });
      });
  }
  function JE(e, a, s, o, u) {
    if (
      ((s.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((a = s.alternate),
        a !== null && Ii(a, s, u, !0),
        (s = Cn.current),
        s !== null)
      ) {
        switch (s.tag) {
          case 13:
            return (
              Jn === null ? Tf() : s.alternate === null && yt === 0 && (yt = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = u),
              o === Rd
                ? (s.flags |= 16384)
                : ((a = s.updateQueue),
                  a === null ? (s.updateQueue = new Set([o])) : a.add(o),
                  Cf(e, o, u)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              o === Rd
                ? (s.flags |= 16384)
                : ((a = s.updateQueue),
                  a === null
                    ? ((a = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (s.updateQueue = a))
                    : ((s = a.retryQueue),
                      s === null ? (a.retryQueue = new Set([o])) : s.add(o)),
                  Cf(e, o, u)),
              !1
            );
        }
        throw Error(i(435, s.tag));
      }
      return (Cf(e, o, u), Tf(), !1);
    }
    if (Je)
      return (
        (a = Cn.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = u),
            o !== _d && ((e = Error(i(422), { cause: o })), Fi(En(e, s))))
          : (o !== _d && ((a = Error(i(423), { cause: o })), Fi(En(a, s))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (o = En(o, s)),
            (u = tf(e.stateNode, o, u)),
            Dd(e, u),
            yt !== 4 && (yt = 2)),
        !1
      );
    var m = Error(i(520), { cause: o });
    if (
      ((m = En(m, s)),
      uo === null ? (uo = [m]) : uo.push(m),
      yt !== 4 && (yt = 2),
      a === null)
    )
      return !0;
    ((o = En(o, s)), (s = a));
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (e = u & -u),
            (s.lanes |= e),
            (e = tf(s.stateNode, o, e)),
            Dd(s, e),
            !1
          );
        case 1:
          if (
            ((a = s.type),
            (m = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof a.getDerivedStateFromError == "function" ||
                (m !== null &&
                  typeof m.componentDidCatch == "function" &&
                  (or === null || !or.has(m)))))
          )
            return (
              (s.flags |= 65536),
              (u &= -u),
              (s.lanes |= u),
              (u = yy(u)),
              vy(u, e, s, o),
              Dd(s, u),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var xy = Error(i(461)),
    qt = !1;
  function Ht(e, a, s, o) {
    a.child = e === null ? cy(a, null, s, o) : Hs(a, e.child, s, o);
  }
  function by(e, a, s, o, u) {
    s = s.render;
    var m = a.ref;
    if ("ref" in o) {
      var x = {};
      for (var w in o) w !== "ref" && (x[w] = o[w]);
    } else x = o;
    return (
      Gr(a),
      (o = Ud(e, a, s, x, m, u)),
      (w = Vd()),
      e !== null && !qt
        ? (Pd(e, a, u), Ea(e, a, u))
        : (Je && w && wd(a), (a.flags |= 1), Ht(e, a, o, u), a.child)
    );
  }
  function wy(e, a, s, o, u) {
    if (e === null) {
      var m = s.type;
      return typeof m == "function" &&
        !vd(m) &&
        m.defaultProps === void 0 &&
        s.compare === null
        ? ((a.tag = 15), (a.type = m), Sy(e, a, m, o, u))
        : ((e = wl(s.type, null, o, a, a.mode, u)),
          (e.ref = a.ref),
          (e.return = a),
          (a.child = e));
    }
    if (((m = e.child), !uf(e, u))) {
      var x = m.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : Vi), s(x, o) && e.ref === a.ref)
      )
        return Ea(e, a, u);
    }
    return (
      (a.flags |= 1),
      (e = ya(m, o)),
      (e.ref = a.ref),
      (e.return = a),
      (a.child = e)
    );
  }
  function Sy(e, a, s, o, u) {
    if (e !== null) {
      var m = e.memoizedProps;
      if (Vi(m, o) && e.ref === a.ref)
        if (((qt = !1), (a.pendingProps = o = m), uf(e, u)))
          (e.flags & 131072) !== 0 && (qt = !0);
        else return ((a.lanes = e.lanes), Ea(e, a, u));
    }
    return nf(e, a, s, o, u);
  }
  function _y(e, a, s) {
    var o = a.pendingProps,
      u = o.children,
      m = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (((o = m !== null ? m.baseLanes | s : s), e !== null)) {
          for (u = a.child = e.child, m = 0; u !== null; )
            ((m = m | u.lanes | u.childLanes), (u = u.sibling));
          a.childLanes = m & ~o;
        } else ((a.childLanes = 0), (a.child = null));
        return Ey(e, a, o, s);
      }
      if ((s & 536870912) !== 0)
        ((a.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Tl(a, m !== null ? m.cachePool : null),
          m !== null ? Sg(a, m) : Ld(),
          uy(a));
      else
        return (
          (a.lanes = a.childLanes = 536870912),
          Ey(e, a, m !== null ? m.baseLanes | s : s, s)
        );
    } else
      m !== null
        ? (Tl(a, m.cachePool), Sg(a, m), tr(), (a.memoizedState = null))
        : (e !== null && Tl(a, null), Ld(), tr());
    return (Ht(e, a, u, s), a.child);
  }
  function Ey(e, a, s, o) {
    var u = Od();
    return (
      (u = u === null ? null : { parent: Ot._currentValue, pool: u }),
      (a.memoizedState = { baseLanes: s, cachePool: u }),
      e !== null && Tl(a, null),
      Ld(),
      uy(a),
      e !== null && Ii(e, a, o, !0),
      null
    );
  }
  function Fl(e, a) {
    var s = a.ref;
    if (s === null) e !== null && e.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(i(284));
      (e === null || e.ref !== s) && (a.flags |= 4194816);
    }
  }
  function nf(e, a, s, o, u) {
    return (
      Gr(a),
      (s = Ud(e, a, s, o, void 0, u)),
      (o = Vd()),
      e !== null && !qt
        ? (Pd(e, a, u), Ea(e, a, u))
        : (Je && o && wd(a), (a.flags |= 1), Ht(e, a, s, u), a.child)
    );
  }
  function Ny(e, a, s, o, u, m) {
    return (
      Gr(a),
      (a.updateQueue = null),
      (s = Eg(a, o, s, u)),
      _g(e),
      (o = Vd()),
      e !== null && !qt
        ? (Pd(e, a, m), Ea(e, a, m))
        : (Je && o && wd(a), (a.flags |= 1), Ht(e, a, s, m), a.child)
    );
  }
  function Ty(e, a, s, o, u) {
    if ((Gr(a), a.stateNode === null)) {
      var m = As,
        x = s.contextType;
      (typeof x == "object" && x !== null && (m = Zt(x)),
        (m = new s(o, m)),
        (a.memoizedState =
          m.state !== null && m.state !== void 0 ? m.state : null),
        (m.updater = ef),
        (a.stateNode = m),
        (m._reactInternals = a),
        (m = a.stateNode),
        (m.props = o),
        (m.state = a.memoizedState),
        (m.refs = {}),
        Ad(a),
        (x = s.contextType),
        (m.context = typeof x == "object" && x !== null ? Zt(x) : As),
        (m.state = a.memoizedState),
        (x = s.getDerivedStateFromProps),
        typeof x == "function" && (Jd(a, s, x, o), (m.state = a.memoizedState)),
        typeof s.getDerivedStateFromProps == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function" ||
          (typeof m.UNSAFE_componentWillMount != "function" &&
            typeof m.componentWillMount != "function") ||
          ((x = m.state),
          typeof m.componentWillMount == "function" && m.componentWillMount(),
          typeof m.UNSAFE_componentWillMount == "function" &&
            m.UNSAFE_componentWillMount(),
          x !== m.state && ef.enqueueReplaceState(m, m.state, null),
          Xi(a, o, m, u),
          $i(),
          (m.state = a.memoizedState)),
        typeof m.componentDidMount == "function" && (a.flags |= 4194308),
        (o = !0));
    } else if (e === null) {
      m = a.stateNode;
      var w = a.memoizedProps,
        C = Kr(s, w);
      m.props = C;
      var P = m.context,
        K = s.contextType;
      ((x = As), typeof K == "object" && K !== null && (x = Zt(K)));
      var X = s.getDerivedStateFromProps;
      ((K =
        typeof X == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function"),
        (w = a.pendingProps !== w),
        K ||
          (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
            typeof m.componentWillReceiveProps != "function") ||
          ((w || P !== x) && fy(a, m, o, x)),
        ($a = !1));
      var H = a.memoizedState;
      ((m.state = H),
        Xi(a, o, m, u),
        $i(),
        (P = a.memoizedState),
        w || H !== P || $a
          ? (typeof X == "function" && (Jd(a, s, X, o), (P = a.memoizedState)),
            (C = $a || dy(a, s, C, o, H, P, x))
              ? (K ||
                  (typeof m.UNSAFE_componentWillMount != "function" &&
                    typeof m.componentWillMount != "function") ||
                  (typeof m.componentWillMount == "function" &&
                    m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == "function" &&
                    m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == "function" &&
                  (a.flags |= 4194308))
              : (typeof m.componentDidMount == "function" &&
                  (a.flags |= 4194308),
                (a.memoizedProps = o),
                (a.memoizedState = P)),
            (m.props = o),
            (m.state = P),
            (m.context = x),
            (o = C))
          : (typeof m.componentDidMount == "function" && (a.flags |= 4194308),
            (o = !1)));
    } else {
      ((m = a.stateNode),
        Md(e, a),
        (x = a.memoizedProps),
        (K = Kr(s, x)),
        (m.props = K),
        (X = a.pendingProps),
        (H = m.context),
        (P = s.contextType),
        (C = As),
        typeof P == "object" && P !== null && (C = Zt(P)),
        (w = s.getDerivedStateFromProps),
        (P =
          typeof w == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function") ||
          (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
            typeof m.componentWillReceiveProps != "function") ||
          ((x !== X || H !== C) && fy(a, m, o, C)),
        ($a = !1),
        (H = a.memoizedState),
        (m.state = H),
        Xi(a, o, m, u),
        $i());
      var B = a.memoizedState;
      x !== X ||
      H !== B ||
      $a ||
      (e !== null && e.dependencies !== null && El(e.dependencies))
        ? (typeof w == "function" && (Jd(a, s, w, o), (B = a.memoizedState)),
          (K =
            $a ||
            dy(a, s, K, o, H, B, C) ||
            (e !== null && e.dependencies !== null && El(e.dependencies)))
            ? (P ||
                (typeof m.UNSAFE_componentWillUpdate != "function" &&
                  typeof m.componentWillUpdate != "function") ||
                (typeof m.componentWillUpdate == "function" &&
                  m.componentWillUpdate(o, B, C),
                typeof m.UNSAFE_componentWillUpdate == "function" &&
                  m.UNSAFE_componentWillUpdate(o, B, C)),
              typeof m.componentDidUpdate == "function" && (a.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == "function" &&
                (a.flags |= 1024))
            : (typeof m.componentDidUpdate != "function" ||
                (x === e.memoizedProps && H === e.memoizedState) ||
                (a.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != "function" ||
                (x === e.memoizedProps && H === e.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = o),
              (a.memoizedState = B)),
          (m.props = o),
          (m.state = B),
          (m.context = C),
          (o = K))
        : (typeof m.componentDidUpdate != "function" ||
            (x === e.memoizedProps && H === e.memoizedState) ||
            (a.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != "function" ||
            (x === e.memoizedProps && H === e.memoizedState) ||
            (a.flags |= 1024),
          (o = !1));
    }
    return (
      (m = o),
      Fl(e, a),
      (o = (a.flags & 128) !== 0),
      m || o
        ? ((m = a.stateNode),
          (s =
            o && typeof s.getDerivedStateFromError != "function"
              ? null
              : m.render()),
          (a.flags |= 1),
          e !== null && o
            ? ((a.child = Hs(a, e.child, null, u)),
              (a.child = Hs(a, null, s, u)))
            : Ht(e, a, s, u),
          (a.memoizedState = m.state),
          (e = a.child))
        : (e = Ea(e, a, u)),
      e
    );
  }
  function jy(e, a, s, o) {
    return (Bi(), (a.flags |= 256), Ht(e, a, s, o), a.child);
  }
  var af = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function rf(e) {
    return { baseLanes: e, cachePool: mg() };
  }
  function sf(e, a, s) {
    return ((e = e !== null ? e.childLanes & ~s : 0), a && (e |= On), e);
  }
  function Cy(e, a, s) {
    var o = a.pendingProps,
      u = !1,
      m = (a.flags & 128) !== 0,
      x;
    if (
      ((x = m) ||
        (x =
          e !== null && e.memoizedState === null ? !1 : (Rt.current & 2) !== 0),
      x && ((u = !0), (a.flags &= -129)),
      (x = (a.flags & 32) !== 0),
      (a.flags &= -33),
      e === null)
    ) {
      if (Je) {
        if ((u ? er(a) : tr(), Je)) {
          var w = gt,
            C;
          if ((C = w)) {
            e: {
              for (C = w, w = Wn; C.nodeType !== 8; ) {
                if (!w) {
                  w = null;
                  break e;
                }
                if (((C = Un(C.nextSibling)), C === null)) {
                  w = null;
                  break e;
                }
              }
              w = C;
            }
            w !== null
              ? ((a.memoizedState = {
                  dehydrated: w,
                  treeContext: Pr !== null ? { id: va, overflow: xa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (C = cn(18, null, null, 0)),
                (C.stateNode = w),
                (C.return = a),
                (a.child = C),
                (Xt = a),
                (gt = null),
                (C = !0))
              : (C = !1);
          }
          C || Fr(a);
        }
        if (
          ((w = a.memoizedState),
          w !== null && ((w = w.dehydrated), w !== null))
        )
          return (Ff(w) ? (a.lanes = 32) : (a.lanes = 536870912), null);
        _a(a);
      }
      return (
        (w = o.children),
        (o = o.fallback),
        u
          ? (tr(),
            (u = a.mode),
            (w = Il({ mode: "hidden", children: w }, u)),
            (o = Vr(o, u, s, null)),
            (w.return = a),
            (o.return = a),
            (w.sibling = o),
            (a.child = w),
            (u = a.child),
            (u.memoizedState = rf(s)),
            (u.childLanes = sf(e, x, s)),
            (a.memoizedState = af),
            o)
          : (er(a), of(a, w))
      );
    }
    if (
      ((C = e.memoizedState), C !== null && ((w = C.dehydrated), w !== null))
    ) {
      if (m)
        a.flags & 256
          ? (er(a), (a.flags &= -257), (a = lf(e, a, s)))
          : a.memoizedState !== null
            ? (tr(), (a.child = e.child), (a.flags |= 128), (a = null))
            : (tr(),
              (u = o.fallback),
              (w = a.mode),
              (o = Il({ mode: "visible", children: o.children }, w)),
              (u = Vr(u, w, s, null)),
              (u.flags |= 2),
              (o.return = a),
              (u.return = a),
              (o.sibling = u),
              (a.child = o),
              Hs(a, e.child, null, s),
              (o = a.child),
              (o.memoizedState = rf(s)),
              (o.childLanes = sf(e, x, s)),
              (a.memoizedState = af),
              (a = u));
      else if ((er(a), Ff(w))) {
        if (((x = w.nextSibling && w.nextSibling.dataset), x)) var P = x.dgst;
        ((x = P),
          (o = Error(i(419))),
          (o.stack = ""),
          (o.digest = x),
          Fi({ value: o, source: null, stack: null }),
          (a = lf(e, a, s)));
      } else if (
        (qt || Ii(e, a, s, !1), (x = (s & e.childLanes) !== 0), qt || x)
      ) {
        if (
          ((x = dt),
          x !== null &&
            ((o = s & -s),
            (o = (o & 42) !== 0 ? 1 : Fu(o)),
            (o = (o & (x.suspendedLanes | s)) !== 0 ? 0 : o),
            o !== 0 && o !== C.retryLane))
        )
          throw ((C.retryLane = o), Rs(e, o), mn(x, e, o), xy);
        (w.data === "$?" || Tf(), (a = lf(e, a, s)));
      } else
        w.data === "$?"
          ? ((a.flags |= 192), (a.child = e.child), (a = null))
          : ((e = C.treeContext),
            (gt = Un(w.nextSibling)),
            (Xt = a),
            (Je = !0),
            (Br = null),
            (Wn = !1),
            e !== null &&
              ((Tn[jn++] = va),
              (Tn[jn++] = xa),
              (Tn[jn++] = Pr),
              (va = e.id),
              (xa = e.overflow),
              (Pr = a)),
            (a = of(a, o.children)),
            (a.flags |= 4096));
      return a;
    }
    return u
      ? (tr(),
        (u = o.fallback),
        (w = a.mode),
        (C = e.child),
        (P = C.sibling),
        (o = ya(C, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = C.subtreeFlags & 65011712),
        P !== null ? (u = ya(P, u)) : ((u = Vr(u, w, s, null)), (u.flags |= 2)),
        (u.return = a),
        (o.return = a),
        (o.sibling = u),
        (a.child = o),
        (o = u),
        (u = a.child),
        (w = e.child.memoizedState),
        w === null
          ? (w = rf(s))
          : ((C = w.cachePool),
            C !== null
              ? ((P = Ot._currentValue),
                (C = C.parent !== P ? { parent: P, pool: P } : C))
              : (C = mg()),
            (w = { baseLanes: w.baseLanes | s, cachePool: C })),
        (u.memoizedState = w),
        (u.childLanes = sf(e, x, s)),
        (a.memoizedState = af),
        o)
      : (er(a),
        (s = e.child),
        (e = s.sibling),
        (s = ya(s, { mode: "visible", children: o.children })),
        (s.return = a),
        (s.sibling = null),
        e !== null &&
          ((x = a.deletions),
          x === null ? ((a.deletions = [e]), (a.flags |= 16)) : x.push(e)),
        (a.child = s),
        (a.memoizedState = null),
        s);
  }
  function of(e, a) {
    return (
      (a = Il({ mode: "visible", children: a }, e.mode)),
      (a.return = e),
      (e.child = a)
    );
  }
  function Il(e, a) {
    return (
      (e = cn(22, e, null, a)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function lf(e, a, s) {
    return (
      Hs(a, e.child, null, s),
      (e = of(a, a.pendingProps.children)),
      (e.flags |= 2),
      (a.memoizedState = null),
      e
    );
  }
  function Oy(e, a, s) {
    e.lanes |= a;
    var o = e.alternate;
    (o !== null && (o.lanes |= a), Nd(e.return, a, s));
  }
  function cf(e, a, s, o, u) {
    var m = e.memoizedState;
    m === null
      ? (e.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: s,
          tailMode: u,
        })
      : ((m.isBackwards = a),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = o),
        (m.tail = s),
        (m.tailMode = u));
  }
  function Ry(e, a, s) {
    var o = a.pendingProps,
      u = o.revealOrder,
      m = o.tail;
    if ((Ht(e, a, o.children, s), (o = Rt.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (a.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = a.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Oy(e, s, a);
          else if (e.tag === 19) Oy(e, s, a);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === a) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === a) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      o &= 1;
    }
    switch ((ae(Rt, o), u)) {
      case "forwards":
        for (s = a.child, u = null; s !== null; )
          ((e = s.alternate),
            e !== null && Pl(e) === null && (u = s),
            (s = s.sibling));
        ((s = u),
          s === null
            ? ((u = a.child), (a.child = null))
            : ((u = s.sibling), (s.sibling = null)),
          cf(a, !1, u, s, m));
        break;
      case "backwards":
        for (s = null, u = a.child, a.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Pl(e) === null)) {
            a.child = u;
            break;
          }
          ((e = u.sibling), (u.sibling = s), (s = u), (u = e));
        }
        cf(a, !0, s, null, m);
        break;
      case "together":
        cf(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Ea(e, a, s) {
    if (
      (e !== null && (a.dependencies = e.dependencies),
      (ir |= a.lanes),
      (s & a.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ii(e, a, s, !1), (s & a.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && a.child !== e.child) throw Error(i(153));
    if (a.child !== null) {
      for (
        e = a.child, s = ya(e, e.pendingProps), a.child = s, s.return = a;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (s = s.sibling = ya(e, e.pendingProps)),
          (s.return = a));
      s.sibling = null;
    }
    return a.child;
  }
  function uf(e, a) {
    return (e.lanes & a) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && El(e)));
  }
  function eN(e, a, s) {
    switch (a.tag) {
      case 3:
        (Ce(a, a.stateNode.containerInfo),
          Za(a, Ot, e.memoizedState.cache),
          Bi());
        break;
      case 27:
      case 5:
        Qe(a);
        break;
      case 4:
        Ce(a, a.stateNode.containerInfo);
        break;
      case 10:
        Za(a, a.type, a.memoizedProps.value);
        break;
      case 13:
        var o = a.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (er(a), (a.flags |= 128), null)
            : (s & a.child.childLanes) !== 0
              ? Cy(e, a, s)
              : (er(a), (e = Ea(e, a, s)), e !== null ? e.sibling : null);
        er(a);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((o = (s & a.childLanes) !== 0),
          o || (Ii(e, a, s, !1), (o = (s & a.childLanes) !== 0)),
          u)
        ) {
          if (o) return Ry(e, a, s);
          a.flags |= 128;
        }
        if (
          ((u = a.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          ae(Rt, Rt.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((a.lanes = 0), _y(e, a, s));
      case 24:
        Za(a, Ot, e.memoizedState.cache);
    }
    return Ea(e, a, s);
  }
  function Ay(e, a, s) {
    if (e !== null)
      if (e.memoizedProps !== a.pendingProps) qt = !0;
      else {
        if (!uf(e, s) && (a.flags & 128) === 0) return ((qt = !1), eN(e, a, s));
        qt = (e.flags & 131072) !== 0;
      }
    else ((qt = !1), Je && (a.flags & 1048576) !== 0 && og(a, _l, a.index));
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        e: {
          e = a.pendingProps;
          var o = a.elementType,
            u = o._init;
          if (((o = u(o._payload)), (a.type = o), typeof o == "function"))
            vd(o)
              ? ((e = Kr(o, e)), (a.tag = 1), (a = Ty(null, a, o, e, s)))
              : ((a.tag = 0), (a = nf(null, a, o, e, s)));
          else {
            if (o != null) {
              if (((u = o.$$typeof), u === z)) {
                ((a.tag = 11), (a = by(null, a, o, e, s)));
                break e;
              } else if (u === Q) {
                ((a.tag = 14), (a = wy(null, a, o, e, s)));
                break e;
              }
            }
            throw ((a = ee(o) || o), Error(i(306, a, "")));
          }
        }
        return a;
      case 0:
        return nf(e, a, a.type, a.pendingProps, s);
      case 1:
        return ((o = a.type), (u = Kr(o, a.pendingProps)), Ty(e, a, o, u, s));
      case 3:
        e: {
          if ((Ce(a, a.stateNode.containerInfo), e === null))
            throw Error(i(387));
          o = a.pendingProps;
          var m = a.memoizedState;
          ((u = m.element), Md(e, a), Xi(a, o, null, s));
          var x = a.memoizedState;
          if (
            ((o = x.cache),
            Za(a, Ot, o),
            o !== m.cache && Td(a, [Ot], s, !0),
            $i(),
            (o = x.element),
            m.isDehydrated)
          )
            if (
              ((m = { element: o, isDehydrated: !1, cache: x.cache }),
              (a.updateQueue.baseState = m),
              (a.memoizedState = m),
              a.flags & 256)
            ) {
              a = jy(e, a, o, s);
              break e;
            } else if (o !== u) {
              ((u = En(Error(i(424)), a)), Fi(u), (a = jy(e, a, o, s)));
              break e;
            } else
              for (
                e = a.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  gt = Un(e.firstChild),
                  Xt = a,
                  Je = !0,
                  Br = null,
                  Wn = !0,
                  s = cy(a, null, o, s),
                  a.child = s;
                s;
              )
                ((s.flags = (s.flags & -3) | 4096), (s = s.sibling));
          else {
            if ((Bi(), o === u)) {
              a = Ea(e, a, s);
              break e;
            }
            Ht(e, a, o, s);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          Fl(e, a),
          e === null
            ? (s = Lv(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = s)
              : Je ||
                ((s = a.type),
                (e = a.pendingProps),
                (o = rc(fe.current).createElement(s)),
                (o[Kt] = a),
                (o[tn] = e),
                Ft(o, s, e),
                zt(o),
                (a.stateNode = o))
            : (a.memoizedState = Lv(
                a.type,
                e.memoizedProps,
                a.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Qe(a),
          e === null &&
            Je &&
            ((o = a.stateNode = Mv(a.type, a.pendingProps, fe.current)),
            (Xt = a),
            (Wn = !0),
            (u = gt),
            ur(a.type) ? ((If = u), (gt = Un(o.firstChild))) : (gt = u)),
          Ht(e, a, a.pendingProps.children, s),
          Fl(e, a),
          e === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          e === null &&
            Je &&
            ((u = o = gt) &&
              ((o = CN(o, a.type, a.pendingProps, Wn)),
              o !== null
                ? ((a.stateNode = o),
                  (Xt = a),
                  (gt = Un(o.firstChild)),
                  (Wn = !1),
                  (u = !0))
                : (u = !1)),
            u || Fr(a)),
          Qe(a),
          (u = a.type),
          (m = a.pendingProps),
          (x = e !== null ? e.memoizedProps : null),
          (o = m.children),
          Pf(u, m) ? (o = null) : x !== null && Pf(u, x) && (a.flags |= 32),
          a.memoizedState !== null &&
            ((u = Ud(e, a, YE, null, null, s)), (bo._currentValue = u)),
          Fl(e, a),
          Ht(e, a, o, s),
          a.child
        );
      case 6:
        return (
          e === null &&
            Je &&
            ((e = s = gt) &&
              ((s = ON(s, a.pendingProps, Wn)),
              s !== null
                ? ((a.stateNode = s), (Xt = a), (gt = null), (e = !0))
                : (e = !1)),
            e || Fr(a)),
          null
        );
      case 13:
        return Cy(e, a, s);
      case 4:
        return (
          Ce(a, a.stateNode.containerInfo),
          (o = a.pendingProps),
          e === null ? (a.child = Hs(a, null, o, s)) : Ht(e, a, o, s),
          a.child
        );
      case 11:
        return by(e, a, a.type, a.pendingProps, s);
      case 7:
        return (Ht(e, a, a.pendingProps, s), a.child);
      case 8:
        return (Ht(e, a, a.pendingProps.children, s), a.child);
      case 12:
        return (Ht(e, a, a.pendingProps.children, s), a.child);
      case 10:
        return (
          (o = a.pendingProps),
          Za(a, a.type, o.value),
          Ht(e, a, o.children, s),
          a.child
        );
      case 9:
        return (
          (u = a.type._context),
          (o = a.pendingProps.children),
          Gr(a),
          (u = Zt(u)),
          (o = o(u)),
          (a.flags |= 1),
          Ht(e, a, o, s),
          a.child
        );
      case 14:
        return wy(e, a, a.type, a.pendingProps, s);
      case 15:
        return Sy(e, a, a.type, a.pendingProps, s);
      case 19:
        return Ry(e, a, s);
      case 31:
        return (
          (o = a.pendingProps),
          (s = a.mode),
          (o = { mode: o.mode, children: o.children }),
          e === null
            ? ((s = Il(o, s)),
              (s.ref = a.ref),
              (a.child = s),
              (s.return = a),
              (a = s))
            : ((s = ya(e.child, o)),
              (s.ref = a.ref),
              (a.child = s),
              (s.return = a),
              (a = s)),
          a
        );
      case 22:
        return _y(e, a, s);
      case 24:
        return (
          Gr(a),
          (o = Zt(Ot)),
          e === null
            ? ((u = Od()),
              u === null &&
                ((u = dt),
                (m = jd()),
                (u.pooledCache = m),
                m.refCount++,
                m !== null && (u.pooledCacheLanes |= s),
                (u = m)),
              (a.memoizedState = { parent: o, cache: u }),
              Ad(a),
              Za(a, Ot, u))
            : ((e.lanes & s) !== 0 && (Md(e, a), Xi(a, null, null, s), $i()),
              (u = e.memoizedState),
              (m = a.memoizedState),
              u.parent !== o
                ? ((u = { parent: o, cache: o }),
                  (a.memoizedState = u),
                  a.lanes === 0 &&
                    (a.memoizedState = a.updateQueue.baseState = u),
                  Za(a, Ot, o))
                : ((o = m.cache),
                  Za(a, Ot, o),
                  o !== u.cache && Td(a, [Ot], s, !0))),
          Ht(e, a, a.pendingProps.children, s),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(i(156, a.tag));
  }
  function Na(e) {
    e.flags |= 4;
  }
  function My(e, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Pv(a))) {
      if (
        ((a = Cn.current),
        a !== null &&
          ((Ke & 4194048) === Ke
            ? Jn !== null
            : ((Ke & 62914560) !== Ke && (Ke & 536870912) === 0) || a !== Jn))
      )
        throw ((Ki = Rd), pg);
      e.flags |= 8192;
    }
  }
  function Gl(e, a) {
    (a !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((a = e.tag !== 22 ? up() : 536870912), (e.lanes |= a), (Gs |= a)));
  }
  function ro(e, a) {
    if (!Je)
      switch (e.tailMode) {
        case "hidden":
          a = e.tail;
          for (var s = null; a !== null; )
            (a.alternate !== null && (s = a), (a = a.sibling));
          s === null ? (e.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = e.tail;
          for (var o = null; s !== null; )
            (s.alternate !== null && (o = s), (s = s.sibling));
          o === null
            ? a || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function pt(e) {
    var a = e.alternate !== null && e.alternate.child === e.child,
      s = 0,
      o = 0;
    if (a)
      for (var u = e.child; u !== null; )
        ((s |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 65011712),
          (o |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((s |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = s), a);
  }
  function tN(e, a, s) {
    var o = a.pendingProps;
    switch ((Sd(a), a.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (pt(a), null);
      case 1:
        return (pt(a), null);
      case 3:
        return (
          (s = a.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          a.memoizedState.cache !== o && (a.flags |= 2048),
          wa(Ot),
          De(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (Hi(a)
              ? Na(a)
              : e === null ||
                (e.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), ug())),
          pt(a),
          null
        );
      case 26:
        return (
          (s = a.memoizedState),
          e === null
            ? (Na(a),
              s !== null ? (pt(a), My(a, s)) : (pt(a), (a.flags &= -16777217)))
            : s
              ? s !== e.memoizedState
                ? (Na(a), pt(a), My(a, s))
                : (pt(a), (a.flags &= -16777217))
              : (e.memoizedProps !== o && Na(a), pt(a), (a.flags &= -16777217)),
          null
        );
      case 27:
        (He(a), (s = fe.current));
        var u = a.type;
        if (e !== null && a.stateNode != null) e.memoizedProps !== o && Na(a);
        else {
          if (!o) {
            if (a.stateNode === null) throw Error(i(166));
            return (pt(a), null);
          }
          ((e = me.current),
            Hi(a) ? lg(a) : ((e = Mv(u, o, s)), (a.stateNode = e), Na(a)));
        }
        return (pt(a), null);
      case 5:
        if ((He(a), (s = a.type), e !== null && a.stateNode != null))
          e.memoizedProps !== o && Na(a);
        else {
          if (!o) {
            if (a.stateNode === null) throw Error(i(166));
            return (pt(a), null);
          }
          if (((e = me.current), Hi(a))) lg(a);
          else {
            switch (((u = rc(fe.current)), e)) {
              case 1:
                e = u.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                e = u.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    e = u.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    e = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((e = u.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case "select":
                    ((e =
                      typeof o.is == "string"
                        ? u.createElement("select", { is: o.is })
                        : u.createElement("select")),
                      o.multiple
                        ? (e.multiple = !0)
                        : o.size && (e.size = o.size));
                    break;
                  default:
                    e =
                      typeof o.is == "string"
                        ? u.createElement(s, { is: o.is })
                        : u.createElement(s);
                }
            }
            ((e[Kt] = a), (e[tn] = o));
            e: for (u = a.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ((u.child.return = u), (u = u.child));
                continue;
              }
              if (u === a) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === a) break e;
                u = u.return;
              }
              ((u.sibling.return = u.return), (u = u.sibling));
            }
            a.stateNode = e;
            e: switch ((Ft(e, s, o), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Na(a);
          }
        }
        return (pt(a), (a.flags &= -16777217), null);
      case 6:
        if (e && a.stateNode != null) e.memoizedProps !== o && Na(a);
        else {
          if (typeof o != "string" && a.stateNode === null) throw Error(i(166));
          if (((e = fe.current), Hi(a))) {
            if (
              ((e = a.stateNode),
              (s = a.memoizedProps),
              (o = null),
              (u = Xt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps;
              }
            ((e[Kt] = a),
              (e = !!(
                e.nodeValue === s ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Nv(e.nodeValue, s)
              )),
              e || Fr(a));
          } else
            ((e = rc(e).createTextNode(o)), (e[Kt] = a), (a.stateNode = e));
        }
        return (pt(a), null);
      case 13:
        if (
          ((o = a.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = Hi(a)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (
                ((u = a.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(i(317));
              u[Kt] = a;
            } else
              (Bi(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4));
            (pt(a), (u = !1));
          } else
            ((u = ug()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return a.flags & 256 ? (_a(a), a) : (_a(a), null);
        }
        if ((_a(a), (a.flags & 128) !== 0)) return ((a.lanes = s), a);
        if (
          ((s = o !== null), (e = e !== null && e.memoizedState !== null), s)
        ) {
          ((o = a.child),
            (u = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (u = o.alternate.memoizedState.cachePool.pool));
          var m = null;
          (o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (m = o.memoizedState.cachePool.pool),
            m !== u && (o.flags |= 2048));
        }
        return (
          s !== e && s && (a.child.flags |= 8192),
          Gl(a, a.updateQueue),
          pt(a),
          null
        );
      case 4:
        return (De(), e === null && Lf(a.stateNode.containerInfo), pt(a), null);
      case 10:
        return (wa(a.type), pt(a), null);
      case 19:
        if ((ie(Rt), (u = a.memoizedState), u === null)) return (pt(a), null);
        if (((o = (a.flags & 128) !== 0), (m = u.rendering), m === null))
          if (o) ro(u, !1);
          else {
            if (yt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = a.child; e !== null; ) {
                if (((m = Pl(e)), m !== null)) {
                  for (
                    a.flags |= 128,
                      ro(u, !1),
                      e = m.updateQueue,
                      a.updateQueue = e,
                      Gl(a, e),
                      a.subtreeFlags = 0,
                      e = s,
                      s = a.child;
                    s !== null;
                  )
                    (ig(s, e), (s = s.sibling));
                  return (ae(Rt, (Rt.current & 1) | 2), a.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Qt() > Kl &&
              ((a.flags |= 128), (o = !0), ro(u, !1), (a.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = Pl(m)), e !== null)) {
              if (
                ((a.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                (a.updateQueue = e),
                Gl(a, e),
                ro(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !m.alternate &&
                  !Je)
              )
                return (pt(a), null);
            } else
              2 * Qt() - u.renderingStartTime > Kl &&
                s !== 536870912 &&
                ((a.flags |= 128), (o = !0), ro(u, !1), (a.lanes = 4194304));
          u.isBackwards
            ? ((m.sibling = a.child), (a.child = m))
            : ((e = u.last),
              e !== null ? (e.sibling = m) : (a.child = m),
              (u.last = m));
        }
        return u.tail !== null
          ? ((a = u.tail),
            (u.rendering = a),
            (u.tail = a.sibling),
            (u.renderingStartTime = Qt()),
            (a.sibling = null),
            (e = Rt.current),
            ae(Rt, o ? (e & 1) | 2 : e & 1),
            a)
          : (pt(a), null);
      case 22:
      case 23:
        return (
          _a(a),
          zd(),
          (o = a.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (a.flags |= 8192)
            : o && (a.flags |= 8192),
          o
            ? (s & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (pt(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : pt(a),
          (s = a.updateQueue),
          s !== null && Gl(a, s.retryQueue),
          (s = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (s = e.memoizedState.cachePool.pool),
          (o = null),
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (o = a.memoizedState.cachePool.pool),
          o !== s && (a.flags |= 2048),
          e !== null && ie(Yr),
          null
        );
      case 24:
        return (
          (s = null),
          e !== null && (s = e.memoizedState.cache),
          a.memoizedState.cache !== s && (a.flags |= 2048),
          wa(Ot),
          pt(a),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, a.tag));
  }
  function nN(e, a) {
    switch ((Sd(a), a.tag)) {
      case 1:
        return (
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 3:
        return (
          wa(Ot),
          De(),
          (e = a.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((a.flags = (e & -65537) | 128), a)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (He(a), null);
      case 13:
        if (
          (_a(a), (e = a.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (a.alternate === null) throw Error(i(340));
          Bi();
        }
        return (
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 19:
        return (ie(Rt), null);
      case 4:
        return (De(), null);
      case 10:
        return (wa(a.type), null);
      case 22:
      case 23:
        return (
          _a(a),
          zd(),
          e !== null && ie(Yr),
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 24:
        return (wa(Ot), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dy(e, a) {
    switch ((Sd(a), a.tag)) {
      case 3:
        (wa(Ot), De());
        break;
      case 26:
      case 27:
      case 5:
        He(a);
        break;
      case 4:
        De();
        break;
      case 13:
        _a(a);
        break;
      case 19:
        ie(Rt);
        break;
      case 10:
        wa(a.type);
        break;
      case 22:
      case 23:
        (_a(a), zd(), e !== null && ie(Yr));
        break;
      case 24:
        wa(Ot);
    }
  }
  function so(e, a) {
    try {
      var s = a.updateQueue,
        o = s !== null ? s.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        s = u;
        do {
          if ((s.tag & e) === e) {
            o = void 0;
            var m = s.create,
              x = s.inst;
            ((o = m()), (x.destroy = o));
          }
          s = s.next;
        } while (s !== u);
      }
    } catch (w) {
      lt(a, a.return, w);
    }
  }
  function nr(e, a, s) {
    try {
      var o = a.updateQueue,
        u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var m = u.next;
        o = m;
        do {
          if ((o.tag & e) === e) {
            var x = o.inst,
              w = x.destroy;
            if (w !== void 0) {
              ((x.destroy = void 0), (u = a));
              var C = s,
                P = w;
              try {
                P();
              } catch (K) {
                lt(u, C, K);
              }
            }
          }
          o = o.next;
        } while (o !== m);
      }
    } catch (K) {
      lt(a, a.return, K);
    }
  }
  function ky(e) {
    var a = e.updateQueue;
    if (a !== null) {
      var s = e.stateNode;
      try {
        wg(a, s);
      } catch (o) {
        lt(e, e.return, o);
      }
    }
  }
  function Ly(e, a, s) {
    ((s.props = Kr(e.type, e.memoizedProps)), (s.state = e.memoizedState));
    try {
      s.componentWillUnmount();
    } catch (o) {
      lt(e, a, o);
    }
  }
  function io(e, a) {
    try {
      var s = e.ref;
      if (s !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof s == "function" ? (e.refCleanup = s(o)) : (s.current = o);
      }
    } catch (u) {
      lt(e, a, u);
    }
  }
  function ea(e, a) {
    var s = e.ref,
      o = e.refCleanup;
    if (s !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (u) {
          lt(e, a, u);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof s == "function")
        try {
          s(null);
        } catch (u) {
          lt(e, a, u);
        }
      else s.current = null;
  }
  function zy(e) {
    var a = e.type,
      s = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && o.focus();
          break e;
        case "img":
          s.src ? (o.src = s.src) : s.srcSet && (o.srcset = s.srcSet);
      }
    } catch (u) {
      lt(e, e.return, u);
    }
  }
  function df(e, a, s) {
    try {
      var o = e.stateNode;
      (_N(o, e.type, s, a), (o[tn] = a));
    } catch (u) {
      lt(e, e.return, u);
    }
  }
  function qy(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ur(e.type)) ||
      e.tag === 4
    );
  }
  function ff(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || qy(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && ur(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function hf(e, a, s) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode),
        a
          ? (s.nodeType === 9
              ? s.body
              : s.nodeName === "HTML"
                ? s.ownerDocument.body
                : s
            ).insertBefore(e, a)
          : ((a =
              s.nodeType === 9
                ? s.body
                : s.nodeName === "HTML"
                  ? s.ownerDocument.body
                  : s),
            a.appendChild(e),
            (s = s._reactRootContainer),
            s != null || a.onclick !== null || (a.onclick = ac)));
    else if (
      o !== 4 &&
      (o === 27 && ur(e.type) && ((s = e.stateNode), (a = null)),
      (e = e.child),
      e !== null)
    )
      for (hf(e, a, s), e = e.sibling; e !== null; )
        (hf(e, a, s), (e = e.sibling));
  }
  function Yl(e, a, s) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode), a ? s.insertBefore(e, a) : s.appendChild(e));
    else if (
      o !== 4 &&
      (o === 27 && ur(e.type) && (s = e.stateNode), (e = e.child), e !== null)
    )
      for (Yl(e, a, s), e = e.sibling; e !== null; )
        (Yl(e, a, s), (e = e.sibling));
  }
  function Uy(e) {
    var a = e.stateNode,
      s = e.memoizedProps;
    try {
      for (var o = e.type, u = a.attributes; u.length; )
        a.removeAttributeNode(u[0]);
      (Ft(a, o, s), (a[Kt] = e), (a[tn] = s));
    } catch (m) {
      lt(e, e.return, m);
    }
  }
  var Ta = !1,
    xt = !1,
    mf = !1,
    Vy = typeof WeakSet == "function" ? WeakSet : Set,
    Ut = null;
  function aN(e, a) {
    if (((e = e.containerInfo), (Uf = uc), (e = $p(e)), dd(e))) {
      if ("selectionStart" in e)
        var s = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          s = ((s = e.ownerDocument) && s.defaultView) || window;
          var o = s.getSelection && s.getSelection();
          if (o && o.rangeCount !== 0) {
            s = o.anchorNode;
            var u = o.anchorOffset,
              m = o.focusNode;
            o = o.focusOffset;
            try {
              (s.nodeType, m.nodeType);
            } catch {
              s = null;
              break e;
            }
            var x = 0,
              w = -1,
              C = -1,
              P = 0,
              K = 0,
              X = e,
              H = null;
            t: for (;;) {
              for (
                var B;
                X !== s || (u !== 0 && X.nodeType !== 3) || (w = x + u),
                  X !== m || (o !== 0 && X.nodeType !== 3) || (C = x + o),
                  X.nodeType === 3 && (x += X.nodeValue.length),
                  (B = X.firstChild) !== null;
              )
                ((H = X), (X = B));
              for (;;) {
                if (X === e) break t;
                if (
                  (H === s && ++P === u && (w = x),
                  H === m && ++K === o && (C = x),
                  (B = X.nextSibling) !== null)
                )
                  break;
                ((X = H), (H = X.parentNode));
              }
              X = B;
            }
            s = w === -1 || C === -1 ? null : { start: w, end: C };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Vf = { focusedElem: e, selectionRange: s }, uc = !1, Ut = a;
      Ut !== null;
    )
      if (
        ((a = Ut), (e = a.child), (a.subtreeFlags & 1024) !== 0 && e !== null)
      )
        ((e.return = a), (Ut = e));
      else
        for (; Ut !== null; ) {
          switch (((a = Ut), (m = a.alternate), (e = a.flags), a.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && m !== null) {
                ((e = void 0),
                  (s = a),
                  (u = m.memoizedProps),
                  (m = m.memoizedState),
                  (o = s.stateNode));
                try {
                  var Me = Kr(s.type, u, s.elementType === s.type);
                  ((e = o.getSnapshotBeforeUpdate(Me, m)),
                    (o.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Re) {
                  lt(s, s.return, Re);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = a.stateNode.containerInfo), (s = e.nodeType), s === 9)
                )
                  Bf(e);
                else if (s === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = a.sibling), e !== null)) {
            ((e.return = a.return), (Ut = e));
            break;
          }
          Ut = a.return;
        }
  }
  function Py(e, a, s) {
    var o = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        (ar(e, s), o & 4 && so(5, s));
        break;
      case 1:
        if ((ar(e, s), o & 4))
          if (((e = s.stateNode), a === null))
            try {
              e.componentDidMount();
            } catch (x) {
              lt(s, s.return, x);
            }
          else {
            var u = Kr(s.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              e.componentDidUpdate(u, a, e.__reactInternalSnapshotBeforeUpdate);
            } catch (x) {
              lt(s, s.return, x);
            }
          }
        (o & 64 && ky(s), o & 512 && io(s, s.return));
        break;
      case 3:
        if ((ar(e, s), o & 64 && ((e = s.updateQueue), e !== null))) {
          if (((a = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                a = s.child.stateNode;
                break;
              case 1:
                a = s.child.stateNode;
            }
          try {
            wg(e, a);
          } catch (x) {
            lt(s, s.return, x);
          }
        }
        break;
      case 27:
        a === null && o & 4 && Uy(s);
      case 26:
      case 5:
        (ar(e, s), a === null && o & 4 && zy(s), o & 512 && io(s, s.return));
        break;
      case 12:
        ar(e, s);
        break;
      case 13:
        (ar(e, s),
          o & 4 && Fy(e, s),
          o & 64 &&
            ((e = s.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((s = fN.bind(null, s)), RN(e, s)))));
        break;
      case 22:
        if (((o = s.memoizedState !== null || Ta), !o)) {
          ((a = (a !== null && a.memoizedState !== null) || xt), (u = Ta));
          var m = xt;
          ((Ta = o),
            (xt = a) && !m ? rr(e, s, (s.subtreeFlags & 8772) !== 0) : ar(e, s),
            (Ta = u),
            (xt = m));
        }
        break;
      case 30:
        break;
      default:
        ar(e, s);
    }
  }
  function Hy(e) {
    var a = e.alternate;
    (a !== null && ((e.alternate = null), Hy(a)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((a = e.stateNode), a !== null && Yu(a)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var ft = null,
    rn = !1;
  function ja(e, a, s) {
    for (s = s.child; s !== null; ) (By(e, a, s), (s = s.sibling));
  }
  function By(e, a, s) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(te, s);
      } catch {}
    switch (s.tag) {
      case 26:
        (xt || ea(s, a),
          ja(e, a, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s)));
        break;
      case 27:
        xt || ea(s, a);
        var o = ft,
          u = rn;
        (ur(s.type) && ((ft = s.stateNode), (rn = !1)),
          ja(e, a, s),
          go(s.stateNode),
          (ft = o),
          (rn = u));
        break;
      case 5:
        xt || ea(s, a);
      case 6:
        if (
          ((o = ft),
          (u = rn),
          (ft = null),
          ja(e, a, s),
          (ft = o),
          (rn = u),
          ft !== null)
        )
          if (rn)
            try {
              (ft.nodeType === 9
                ? ft.body
                : ft.nodeName === "HTML"
                  ? ft.ownerDocument.body
                  : ft
              ).removeChild(s.stateNode);
            } catch (m) {
              lt(s, a, m);
            }
          else
            try {
              ft.removeChild(s.stateNode);
            } catch (m) {
              lt(s, a, m);
            }
        break;
      case 18:
        ft !== null &&
          (rn
            ? ((e = ft),
              Rv(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                s.stateNode,
              ),
              Eo(e))
            : Rv(ft, s.stateNode));
        break;
      case 4:
        ((o = ft),
          (u = rn),
          (ft = s.stateNode.containerInfo),
          (rn = !0),
          ja(e, a, s),
          (ft = o),
          (rn = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (xt || nr(2, s, a), xt || nr(4, s, a), ja(e, a, s));
        break;
      case 1:
        (xt ||
          (ea(s, a),
          (o = s.stateNode),
          typeof o.componentWillUnmount == "function" && Ly(s, a, o)),
          ja(e, a, s));
        break;
      case 21:
        ja(e, a, s);
        break;
      case 22:
        ((xt = (o = xt) || s.memoizedState !== null), ja(e, a, s), (xt = o));
        break;
      default:
        ja(e, a, s);
    }
  }
  function Fy(e, a) {
    if (
      a.memoizedState === null &&
      ((e = a.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Eo(e);
      } catch (s) {
        lt(a, a.return, s);
      }
  }
  function rN(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var a = e.stateNode;
        return (a === null && (a = e.stateNode = new Vy()), a);
      case 22:
        return (
          (e = e.stateNode),
          (a = e._retryCache),
          a === null && (a = e._retryCache = new Vy()),
          a
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function pf(e, a) {
    var s = rN(e);
    a.forEach(function (o) {
      var u = hN.bind(null, e, o);
      s.has(o) || (s.add(o), o.then(u, u));
    });
  }
  function un(e, a) {
    var s = a.deletions;
    if (s !== null)
      for (var o = 0; o < s.length; o++) {
        var u = s[o],
          m = e,
          x = a,
          w = x;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (ur(w.type)) {
                ((ft = w.stateNode), (rn = !1));
                break e;
              }
              break;
            case 5:
              ((ft = w.stateNode), (rn = !1));
              break e;
            case 3:
            case 4:
              ((ft = w.stateNode.containerInfo), (rn = !0));
              break e;
          }
          w = w.return;
        }
        if (ft === null) throw Error(i(160));
        (By(m, x, u),
          (ft = null),
          (rn = !1),
          (m = u.alternate),
          m !== null && (m.return = null),
          (u.return = null));
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; ) (Iy(a, e), (a = a.sibling));
  }
  var qn = null;
  function Iy(e, a) {
    var s = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (un(a, e),
          dn(e),
          o & 4 && (nr(3, e, e.return), so(3, e), nr(5, e, e.return)));
        break;
      case 1:
        (un(a, e),
          dn(e),
          o & 512 && (xt || s === null || ea(s, s.return)),
          o & 64 &&
            Ta &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((s = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = s === null ? o : s.concat(o))))));
        break;
      case 26:
        var u = qn;
        if (
          (un(a, e),
          dn(e),
          o & 512 && (xt || s === null || ea(s, s.return)),
          o & 4)
        ) {
          var m = s !== null ? s.memoizedState : null;
          if (((o = e.memoizedState), s === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  ((o = e.type),
                    (s = e.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (o) {
                    case "title":
                      ((m = u.getElementsByTagName("title")[0]),
                        (!m ||
                          m[Ri] ||
                          m[Kt] ||
                          m.namespaceURI === "http://www.w3.org/2000/svg" ||
                          m.hasAttribute("itemprop")) &&
                          ((m = u.createElement(o)),
                          u.head.insertBefore(
                            m,
                            u.querySelector("head > title"),
                          )),
                        Ft(m, o, s),
                        (m[Kt] = e),
                        zt(m),
                        (o = m));
                      break e;
                    case "link":
                      var x = Uv("link", "href", u).get(o + (s.href || ""));
                      if (x) {
                        for (var w = 0; w < x.length; w++)
                          if (
                            ((m = x[w]),
                            m.getAttribute("href") ===
                              (s.href == null || s.href === ""
                                ? null
                                : s.href) &&
                              m.getAttribute("rel") ===
                                (s.rel == null ? null : s.rel) &&
                              m.getAttribute("title") ===
                                (s.title == null ? null : s.title) &&
                              m.getAttribute("crossorigin") ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            x.splice(w, 1);
                            break t;
                          }
                      }
                      ((m = u.createElement(o)),
                        Ft(m, o, s),
                        u.head.appendChild(m));
                      break;
                    case "meta":
                      if (
                        (x = Uv("meta", "content", u).get(
                          o + (s.content || ""),
                        ))
                      ) {
                        for (w = 0; w < x.length; w++)
                          if (
                            ((m = x[w]),
                            m.getAttribute("content") ===
                              (s.content == null ? null : "" + s.content) &&
                              m.getAttribute("name") ===
                                (s.name == null ? null : s.name) &&
                              m.getAttribute("property") ===
                                (s.property == null ? null : s.property) &&
                              m.getAttribute("http-equiv") ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              m.getAttribute("charset") ===
                                (s.charSet == null ? null : s.charSet))
                          ) {
                            x.splice(w, 1);
                            break t;
                          }
                      }
                      ((m = u.createElement(o)),
                        Ft(m, o, s),
                        u.head.appendChild(m));
                      break;
                    default:
                      throw Error(i(468, o));
                  }
                  ((m[Kt] = e), zt(m), (o = m));
                }
                e.stateNode = o;
              } else Vv(u, e.type, e.stateNode);
            else e.stateNode = qv(u, o, e.memoizedProps);
          else
            m !== o
              ? (m === null
                  ? s.stateNode !== null &&
                    ((s = s.stateNode), s.parentNode.removeChild(s))
                  : m.count--,
                o === null
                  ? Vv(u, e.type, e.stateNode)
                  : qv(u, o, e.memoizedProps))
              : o === null &&
                e.stateNode !== null &&
                df(e, e.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        (un(a, e),
          dn(e),
          o & 512 && (xt || s === null || ea(s, s.return)),
          s !== null && o & 4 && df(e, e.memoizedProps, s.memoizedProps));
        break;
      case 5:
        if (
          (un(a, e),
          dn(e),
          o & 512 && (xt || s === null || ea(s, s.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            _s(u, "");
          } catch (B) {
            lt(e, e.return, B);
          }
        }
        (o & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), df(e, u, s !== null ? s.memoizedProps : u)),
          o & 1024 && (mf = !0));
        break;
      case 6:
        if ((un(a, e), dn(e), o & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((o = e.memoizedProps), (s = e.stateNode));
          try {
            s.nodeValue = o;
          } catch (B) {
            lt(e, e.return, B);
          }
        }
        break;
      case 3:
        if (
          ((oc = null),
          (u = qn),
          (qn = sc(a.containerInfo)),
          un(a, e),
          (qn = u),
          dn(e),
          o & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            Eo(a.containerInfo);
          } catch (B) {
            lt(e, e.return, B);
          }
        mf && ((mf = !1), Gy(e));
        break;
      case 4:
        ((o = qn),
          (qn = sc(e.stateNode.containerInfo)),
          un(a, e),
          dn(e),
          (qn = o));
        break;
      case 12:
        (un(a, e), dn(e));
        break;
      case 13:
        (un(a, e),
          dn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (s !== null && s.memoizedState !== null) &&
            (wf = Qt()),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), pf(e, o))));
        break;
      case 22:
        u = e.memoizedState !== null;
        var C = s !== null && s.memoizedState !== null,
          P = Ta,
          K = xt;
        if (
          ((Ta = P || u),
          (xt = K || C),
          un(a, e),
          (xt = K),
          (Ta = P),
          dn(e),
          o & 8192)
        )
          e: for (
            a = e.stateNode,
              a._visibility = u ? a._visibility & -2 : a._visibility | 1,
              u && (s === null || C || Ta || xt || Zr(e)),
              s = null,
              a = e;
            ;
          ) {
            if (a.tag === 5 || a.tag === 26) {
              if (s === null) {
                C = s = a;
                try {
                  if (((m = C.stateNode), u))
                    ((x = m.style),
                      typeof x.setProperty == "function"
                        ? x.setProperty("display", "none", "important")
                        : (x.display = "none"));
                  else {
                    w = C.stateNode;
                    var X = C.memoizedProps.style,
                      H =
                        X != null && X.hasOwnProperty("display")
                          ? X.display
                          : null;
                    w.style.display =
                      H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                  }
                } catch (B) {
                  lt(C, C.return, B);
                }
              }
            } else if (a.tag === 6) {
              if (s === null) {
                C = a;
                try {
                  C.stateNode.nodeValue = u ? "" : C.memoizedProps;
                } catch (B) {
                  lt(C, C.return, B);
                }
              }
            } else if (
              ((a.tag !== 22 && a.tag !== 23) ||
                a.memoizedState === null ||
                a === e) &&
              a.child !== null
            ) {
              ((a.child.return = a), (a = a.child));
              continue;
            }
            if (a === e) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === e) break e;
              (s === a && (s = null), (a = a.return));
            }
            (s === a && (s = null),
              (a.sibling.return = a.return),
              (a = a.sibling));
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null &&
            ((s = o.retryQueue),
            s !== null && ((o.retryQueue = null), pf(e, s))));
        break;
      case 19:
        (un(a, e),
          dn(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), pf(e, o))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (un(a, e), dn(e));
    }
  }
  function dn(e) {
    var a = e.flags;
    if (a & 2) {
      try {
        for (var s, o = e.return; o !== null; ) {
          if (qy(o)) {
            s = o;
            break;
          }
          o = o.return;
        }
        if (s == null) throw Error(i(160));
        switch (s.tag) {
          case 27:
            var u = s.stateNode,
              m = ff(e);
            Yl(e, m, u);
            break;
          case 5:
            var x = s.stateNode;
            s.flags & 32 && (_s(x, ""), (s.flags &= -33));
            var w = ff(e);
            Yl(e, w, x);
            break;
          case 3:
          case 4:
            var C = s.stateNode.containerInfo,
              P = ff(e);
            hf(e, P, C);
            break;
          default:
            throw Error(i(161));
        }
      } catch (K) {
        lt(e, e.return, K);
      }
      e.flags &= -3;
    }
    a & 4096 && (e.flags &= -4097);
  }
  function Gy(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var a = e;
        (Gy(a),
          a.tag === 5 && a.flags & 1024 && a.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function ar(e, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) (Py(e, a.alternate, a), (a = a.sibling));
  }
  function Zr(e) {
    for (e = e.child; e !== null; ) {
      var a = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (nr(4, a, a.return), Zr(a));
          break;
        case 1:
          ea(a, a.return);
          var s = a.stateNode;
          (typeof s.componentWillUnmount == "function" && Ly(a, a.return, s),
            Zr(a));
          break;
        case 27:
          go(a.stateNode);
        case 26:
        case 5:
          (ea(a, a.return), Zr(a));
          break;
        case 22:
          a.memoizedState === null && Zr(a);
          break;
        case 30:
          Zr(a);
          break;
        default:
          Zr(a);
      }
      e = e.sibling;
    }
  }
  function rr(e, a, s) {
    for (s = s && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var o = a.alternate,
        u = e,
        m = a,
        x = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (rr(u, m, s), so(4, m));
          break;
        case 1:
          if (
            (rr(u, m, s),
            (o = m),
            (u = o.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (P) {
              lt(o, o.return, P);
            }
          if (((o = m), (u = o.updateQueue), u !== null)) {
            var w = o.stateNode;
            try {
              var C = u.shared.hiddenCallbacks;
              if (C !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < C.length; u++)
                  bg(C[u], w);
            } catch (P) {
              lt(o, o.return, P);
            }
          }
          (s && x & 64 && ky(m), io(m, m.return));
          break;
        case 27:
          Uy(m);
        case 26:
        case 5:
          (rr(u, m, s), s && o === null && x & 4 && zy(m), io(m, m.return));
          break;
        case 12:
          rr(u, m, s);
          break;
        case 13:
          (rr(u, m, s), s && x & 4 && Fy(u, m));
          break;
        case 22:
          (m.memoizedState === null && rr(u, m, s), io(m, m.return));
          break;
        case 30:
          break;
        default:
          rr(u, m, s);
      }
      a = a.sibling;
    }
  }
  function gf(e, a) {
    var s = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (s = e.memoizedState.cachePool.pool),
      (e = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (e = a.memoizedState.cachePool.pool),
      e !== s && (e != null && e.refCount++, s != null && Gi(s)));
  }
  function yf(e, a) {
    ((e = null),
      a.alternate !== null && (e = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== e && (a.refCount++, e != null && Gi(e)));
  }
  function ta(e, a, s, o) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) (Yy(e, a, s, o), (a = a.sibling));
  }
  function Yy(e, a, s, o) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (ta(e, a, s, o), u & 2048 && so(9, a));
        break;
      case 1:
        ta(e, a, s, o);
        break;
      case 3:
        (ta(e, a, s, o),
          u & 2048 &&
            ((e = null),
            a.alternate !== null && (e = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== e && (a.refCount++, e != null && Gi(e))));
        break;
      case 12:
        if (u & 2048) {
          (ta(e, a, s, o), (e = a.stateNode));
          try {
            var m = a.memoizedProps,
              x = m.id,
              w = m.onPostCommit;
            typeof w == "function" &&
              w(
                x,
                a.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (C) {
            lt(a, a.return, C);
          }
        } else ta(e, a, s, o);
        break;
      case 13:
        ta(e, a, s, o);
        break;
      case 23:
        break;
      case 22:
        ((m = a.stateNode),
          (x = a.alternate),
          a.memoizedState !== null
            ? m._visibility & 2
              ? ta(e, a, s, o)
              : oo(e, a)
            : m._visibility & 2
              ? ta(e, a, s, o)
              : ((m._visibility |= 2),
                Bs(e, a, s, o, (a.subtreeFlags & 10256) !== 0)),
          u & 2048 && gf(x, a));
        break;
      case 24:
        (ta(e, a, s, o), u & 2048 && yf(a.alternate, a));
        break;
      default:
        ta(e, a, s, o);
    }
  }
  function Bs(e, a, s, o, u) {
    for (u = u && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var m = e,
        x = a,
        w = s,
        C = o,
        P = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          (Bs(m, x, w, C, u), so(8, x));
          break;
        case 23:
          break;
        case 22:
          var K = x.stateNode;
          (x.memoizedState !== null
            ? K._visibility & 2
              ? Bs(m, x, w, C, u)
              : oo(m, x)
            : ((K._visibility |= 2), Bs(m, x, w, C, u)),
            u && P & 2048 && gf(x.alternate, x));
          break;
        case 24:
          (Bs(m, x, w, C, u), u && P & 2048 && yf(x.alternate, x));
          break;
        default:
          Bs(m, x, w, C, u);
      }
      a = a.sibling;
    }
  }
  function oo(e, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var s = e,
          o = a,
          u = o.flags;
        switch (o.tag) {
          case 22:
            (oo(s, o), u & 2048 && gf(o.alternate, o));
            break;
          case 24:
            (oo(s, o), u & 2048 && yf(o.alternate, o));
            break;
          default:
            oo(s, o);
        }
        a = a.sibling;
      }
  }
  var lo = 8192;
  function Fs(e) {
    if (e.subtreeFlags & lo)
      for (e = e.child; e !== null; ) (Qy(e), (e = e.sibling));
  }
  function Qy(e) {
    switch (e.tag) {
      case 26:
        (Fs(e),
          e.flags & lo &&
            e.memoizedState !== null &&
            FN(qn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Fs(e);
        break;
      case 3:
      case 4:
        var a = qn;
        ((qn = sc(e.stateNode.containerInfo)), Fs(e), (qn = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = lo), (lo = 16777216), Fs(e), (lo = a))
            : Fs(e));
        break;
      default:
        Fs(e);
    }
  }
  function Ky(e) {
    var a = e.alternate;
    if (a !== null && ((e = a.child), e !== null)) {
      a.child = null;
      do ((a = e.sibling), (e.sibling = null), (e = a));
      while (e !== null);
    }
  }
  function co(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var s = 0; s < a.length; s++) {
          var o = a[s];
          ((Ut = o), $y(o, e));
        }
      Ky(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Zy(e), (e = e.sibling));
  }
  function Zy(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (co(e), e.flags & 2048 && nr(9, e, e.return));
        break;
      case 3:
        co(e);
        break;
      case 12:
        co(e);
        break;
      case 22:
        var a = e.stateNode;
        e.memoizedState !== null &&
        a._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((a._visibility &= -3), Ql(e))
          : co(e);
        break;
      default:
        co(e);
    }
  }
  function Ql(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var s = 0; s < a.length; s++) {
          var o = a[s];
          ((Ut = o), $y(o, e));
        }
      Ky(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((a = e), a.tag)) {
        case 0:
        case 11:
        case 15:
          (nr(8, a, a.return), Ql(a));
          break;
        case 22:
          ((s = a.stateNode),
            s._visibility & 2 && ((s._visibility &= -3), Ql(a)));
          break;
        default:
          Ql(a);
      }
      e = e.sibling;
    }
  }
  function $y(e, a) {
    for (; Ut !== null; ) {
      var s = Ut;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          nr(8, s, a);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var o = s.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Gi(s.memoizedState.cache);
      }
      if (((o = s.child), o !== null)) ((o.return = s), (Ut = o));
      else
        e: for (s = e; Ut !== null; ) {
          o = Ut;
          var u = o.sibling,
            m = o.return;
          if ((Hy(o), o === s)) {
            Ut = null;
            break e;
          }
          if (u !== null) {
            ((u.return = m), (Ut = u));
            break e;
          }
          Ut = m;
        }
    }
  }
  var sN = {
      getCacheForType: function (e) {
        var a = Zt(Ot),
          s = a.data.get(e);
        return (s === void 0 && ((s = e()), a.data.set(e, s)), s);
      },
    },
    iN = typeof WeakMap == "function" ? WeakMap : Map,
    et = 0,
    dt = null,
    Ge = null,
    Ke = 0,
    tt = 0,
    fn = null,
    sr = !1,
    Is = !1,
    vf = !1,
    Ca = 0,
    yt = 0,
    ir = 0,
    $r = 0,
    xf = 0,
    On = 0,
    Gs = 0,
    uo = null,
    sn = null,
    bf = !1,
    wf = 0,
    Kl = 1 / 0,
    Zl = null,
    or = null,
    Bt = 0,
    lr = null,
    Ys = null,
    Qs = 0,
    Sf = 0,
    _f = null,
    Xy = null,
    fo = 0,
    Ef = null;
  function hn() {
    if ((et & 2) !== 0 && Ke !== 0) return Ke & -Ke;
    if (L.T !== null) {
      var e = ks;
      return e !== 0 ? e : Af();
    }
    return hp();
  }
  function Wy() {
    On === 0 && (On = (Ke & 536870912) === 0 || Je ? Ci() : 536870912);
    var e = Cn.current;
    return (e !== null && (e.flags |= 32), On);
  }
  function mn(e, a, s) {
    (((e === dt && (tt === 2 || tt === 9)) || e.cancelPendingCommit !== null) &&
      (Ks(e, 0), cr(e, Ke, On, !1)),
      Oi(e, s),
      ((et & 2) === 0 || e !== dt) &&
        (e === dt &&
          ((et & 2) === 0 && ($r |= s), yt === 4 && cr(e, Ke, On, !1)),
        na(e)));
  }
  function Jy(e, a, s) {
    if ((et & 6) !== 0) throw Error(i(327));
    var o = (!s && (a & 124) === 0 && (a & e.expiredLanes) === 0) || Ya(e, a),
      u = o ? cN(e, a) : jf(e, a, !0),
      m = o;
    do {
      if (u === 0) {
        Is && !o && cr(e, a, 0, !1);
        break;
      } else {
        if (((s = e.current.alternate), m && !oN(s))) {
          ((u = jf(e, a, !1)), (m = !1));
          continue;
        }
        if (u === 2) {
          if (((m = a), e.errorRecoveryDisabledLanes & m)) var x = 0;
          else
            ((x = e.pendingLanes & -536870913),
              (x = x !== 0 ? x : x & 536870912 ? 536870912 : 0));
          if (x !== 0) {
            a = x;
            e: {
              var w = e;
              u = uo;
              var C = w.current.memoizedState.isDehydrated;
              if ((C && (Ks(w, x).flags |= 256), (x = jf(w, x, !1)), x !== 2)) {
                if (vf && !C) {
                  ((w.errorRecoveryDisabledLanes |= m), ($r |= m), (u = 4));
                  break e;
                }
                ((m = sn),
                  (sn = u),
                  m !== null &&
                    (sn === null ? (sn = m) : sn.push.apply(sn, m)));
              }
              u = x;
            }
            if (((m = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Ks(e, 0), cr(e, a, 0, !0));
          break;
        }
        e: {
          switch (((o = e), (m = u), m)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              cr(o, a, On, !sr);
              break e;
            case 2:
              sn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((a & 62914560) === a && ((u = wf + 300 - Qt()), 10 < u)) {
            if ((cr(o, a, On, !sr), ps(o, 0, !0) !== 0)) break e;
            o.timeoutHandle = Cv(
              ev.bind(null, o, s, sn, Zl, bf, a, On, $r, Gs, sr, m, 2, -0, 0),
              u,
            );
            break e;
          }
          ev(o, s, sn, Zl, bf, a, On, $r, Gs, sr, m, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    na(e);
  }
  function ev(e, a, s, o, u, m, x, w, C, P, K, X, H, B) {
    if (
      ((e.timeoutHandle = -1),
      (X = a.subtreeFlags),
      (X & 8192 || (X & 16785408) === 16785408) &&
        ((xo = { stylesheets: null, count: 0, unsuspend: BN }),
        Qy(a),
        (X = IN()),
        X !== null))
    ) {
      ((e.cancelPendingCommit = X(
        ov.bind(null, e, a, m, s, o, u, x, w, C, K, 1, H, B),
      )),
        cr(e, m, x, !P));
      return;
    }
    ov(e, a, m, s, o, u, x, w, C);
  }
  function oN(e) {
    for (var a = e; ; ) {
      var s = a.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        a.flags & 16384 &&
        ((s = a.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var o = 0; o < s.length; o++) {
          var u = s[o],
            m = u.getSnapshot;
          u = u.value;
          try {
            if (!ln(m(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = a.child), a.subtreeFlags & 16384 && s !== null))
        ((s.return = a), (a = s));
      else {
        if (a === e) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e) return !0;
          a = a.return;
        }
        ((a.sibling.return = a.return), (a = a.sibling));
      }
    }
    return !0;
  }
  function cr(e, a, s, o) {
    ((a &= ~xf),
      (a &= ~$r),
      (e.suspendedLanes |= a),
      (e.pingedLanes &= ~a),
      o && (e.warmLanes |= a),
      (o = e.expirationTimes));
    for (var u = a; 0 < u; ) {
      var m = 31 - ze(u),
        x = 1 << m;
      ((o[m] = -1), (u &= ~x));
    }
    s !== 0 && dp(e, s, a);
  }
  function $l() {
    return (et & 6) === 0 ? (ho(0), !1) : !0;
  }
  function Nf() {
    if (Ge !== null) {
      if (tt === 0) var e = Ge.return;
      else ((e = Ge), (ba = Ir = null), Hd(e), (Ps = null), (no = 0), (e = Ge));
      for (; e !== null; ) (Dy(e.alternate, e), (e = e.return));
      Ge = null;
    }
  }
  function Ks(e, a) {
    var s = e.timeoutHandle;
    (s !== -1 && ((e.timeoutHandle = -1), NN(s)),
      (s = e.cancelPendingCommit),
      s !== null && ((e.cancelPendingCommit = null), s()),
      Nf(),
      (dt = e),
      (Ge = s = ya(e.current, null)),
      (Ke = a),
      (tt = 0),
      (fn = null),
      (sr = !1),
      (Is = Ya(e, a)),
      (vf = !1),
      (Gs = On = xf = $r = ir = yt = 0),
      (sn = uo = null),
      (bf = !1),
      (a & 8) !== 0 && (a |= a & 32));
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= a; 0 < o; ) {
        var u = 31 - ze(o),
          m = 1 << u;
        ((a |= e[u]), (o &= ~m));
      }
    return ((Ca = a), vl(), s);
  }
  function tv(e, a) {
    ((Ve = null),
      (L.H = ql),
      a === Qi || a === jl
        ? ((a = vg()), (tt = 3))
        : a === pg
          ? ((a = vg()), (tt = 4))
          : (tt =
              a === xy
                ? 8
                : a !== null &&
                    typeof a == "object" &&
                    typeof a.then == "function"
                  ? 6
                  : 1),
      (fn = a),
      Ge === null && ((yt = 1), Bl(e, En(a, e.current))));
  }
  function nv() {
    var e = L.H;
    return ((L.H = ql), e === null ? ql : e);
  }
  function av() {
    var e = L.A;
    return ((L.A = sN), e);
  }
  function Tf() {
    ((yt = 4),
      sr || ((Ke & 4194048) !== Ke && Cn.current !== null) || (Is = !0),
      ((ir & 134217727) === 0 && ($r & 134217727) === 0) ||
        dt === null ||
        cr(dt, Ke, On, !1));
  }
  function jf(e, a, s) {
    var o = et;
    et |= 2;
    var u = nv(),
      m = av();
    ((dt !== e || Ke !== a) && ((Zl = null), Ks(e, a)), (a = !1));
    var x = yt;
    e: do
      try {
        if (tt !== 0 && Ge !== null) {
          var w = Ge,
            C = fn;
          switch (tt) {
            case 8:
              (Nf(), (x = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Cn.current === null && (a = !0);
              var P = tt;
              if (((tt = 0), (fn = null), Zs(e, w, C, P), s && Is)) {
                x = 0;
                break e;
              }
              break;
            default:
              ((P = tt), (tt = 0), (fn = null), Zs(e, w, C, P));
          }
        }
        (lN(), (x = yt));
        break;
      } catch (K) {
        tv(e, K);
      }
    while (!0);
    return (
      a && e.shellSuspendCounter++,
      (ba = Ir = null),
      (et = o),
      (L.H = u),
      (L.A = m),
      Ge === null && ((dt = null), (Ke = 0), vl()),
      x
    );
  }
  function lN() {
    for (; Ge !== null; ) rv(Ge);
  }
  function cN(e, a) {
    var s = et;
    et |= 2;
    var o = nv(),
      u = av();
    dt !== e || Ke !== a
      ? ((Zl = null), (Kl = Qt() + 500), Ks(e, a))
      : (Is = Ya(e, a));
    e: do
      try {
        if (tt !== 0 && Ge !== null) {
          a = Ge;
          var m = fn;
          t: switch (tt) {
            case 1:
              ((tt = 0), (fn = null), Zs(e, a, m, 1));
              break;
            case 2:
            case 9:
              if (gg(m)) {
                ((tt = 0), (fn = null), sv(a));
                break;
              }
              ((a = function () {
                ((tt !== 2 && tt !== 9) || dt !== e || (tt = 7), na(e));
              }),
                m.then(a, a));
              break e;
            case 3:
              tt = 7;
              break e;
            case 4:
              tt = 5;
              break e;
            case 7:
              gg(m)
                ? ((tt = 0), (fn = null), sv(a))
                : ((tt = 0), (fn = null), Zs(e, a, m, 7));
              break;
            case 5:
              var x = null;
              switch (Ge.tag) {
                case 26:
                  x = Ge.memoizedState;
                case 5:
                case 27:
                  var w = Ge;
                  if (!x || Pv(x)) {
                    ((tt = 0), (fn = null));
                    var C = w.sibling;
                    if (C !== null) Ge = C;
                    else {
                      var P = w.return;
                      P !== null ? ((Ge = P), Xl(P)) : (Ge = null);
                    }
                    break t;
                  }
              }
              ((tt = 0), (fn = null), Zs(e, a, m, 5));
              break;
            case 6:
              ((tt = 0), (fn = null), Zs(e, a, m, 6));
              break;
            case 8:
              (Nf(), (yt = 6));
              break e;
            default:
              throw Error(i(462));
          }
        }
        uN();
        break;
      } catch (K) {
        tv(e, K);
      }
    while (!0);
    return (
      (ba = Ir = null),
      (L.H = o),
      (L.A = u),
      (et = s),
      Ge !== null ? 0 : ((dt = null), (Ke = 0), vl(), yt)
    );
  }
  function uN() {
    for (; Ge !== null && !Fa(); ) rv(Ge);
  }
  function rv(e) {
    var a = Ay(e.alternate, e, Ca);
    ((e.memoizedProps = e.pendingProps), a === null ? Xl(e) : (Ge = a));
  }
  function sv(e) {
    var a = e,
      s = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = Ny(s, a, a.pendingProps, a.type, void 0, Ke);
        break;
      case 11:
        a = Ny(s, a, a.pendingProps, a.type.render, a.ref, Ke);
        break;
      case 5:
        Hd(a);
      default:
        (Dy(s, a), (a = Ge = ig(a, Ca)), (a = Ay(s, a, Ca)));
    }
    ((e.memoizedProps = e.pendingProps), a === null ? Xl(e) : (Ge = a));
  }
  function Zs(e, a, s, o) {
    ((ba = Ir = null), Hd(a), (Ps = null), (no = 0));
    var u = a.return;
    try {
      if (JE(e, u, a, s, Ke)) {
        ((yt = 1), Bl(e, En(s, e.current)), (Ge = null));
        return;
      }
    } catch (m) {
      if (u !== null) throw ((Ge = u), m);
      ((yt = 1), Bl(e, En(s, e.current)), (Ge = null));
      return;
    }
    a.flags & 32768
      ? (Je || o === 1
          ? (e = !0)
          : Is || (Ke & 536870912) !== 0
            ? (e = !1)
            : ((sr = e = !0),
              (o === 2 || o === 9 || o === 3 || o === 6) &&
                ((o = Cn.current),
                o !== null && o.tag === 13 && (o.flags |= 16384))),
        iv(a, e))
      : Xl(a);
  }
  function Xl(e) {
    var a = e;
    do {
      if ((a.flags & 32768) !== 0) {
        iv(a, sr);
        return;
      }
      e = a.return;
      var s = tN(a.alternate, a, Ca);
      if (s !== null) {
        Ge = s;
        return;
      }
      if (((a = a.sibling), a !== null)) {
        Ge = a;
        return;
      }
      Ge = a = e;
    } while (a !== null);
    yt === 0 && (yt = 5);
  }
  function iv(e, a) {
    do {
      var s = nN(e.alternate, e);
      if (s !== null) {
        ((s.flags &= 32767), (Ge = s));
        return;
      }
      if (
        ((s = e.return),
        s !== null &&
          ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !a && ((e = e.sibling), e !== null))
      ) {
        Ge = e;
        return;
      }
      Ge = e = s;
    } while (e !== null);
    ((yt = 6), (Ge = null));
  }
  function ov(e, a, s, o, u, m, x, w, C) {
    e.cancelPendingCommit = null;
    do Wl();
    while (Bt !== 0);
    if ((et & 6) !== 0) throw Error(i(327));
    if (a !== null) {
      if (a === e.current) throw Error(i(177));
      if (
        ((m = a.lanes | a.childLanes),
        (m |= gd),
        B_(e, s, m, x, w, C),
        e === dt && ((Ge = dt = null), (Ke = 0)),
        (Ys = a),
        (lr = e),
        (Qs = s),
        (Sf = m),
        (_f = u),
        (Xy = o),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            mN(A, function () {
              return (fv(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (o = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || o)
      ) {
        ((o = L.T), (L.T = null), (u = G.p), (G.p = 2), (x = et), (et |= 4));
        try {
          aN(e, a, s);
        } finally {
          ((et = x), (G.p = u), (L.T = o));
        }
      }
      ((Bt = 1), lv(), cv(), uv());
    }
  }
  function lv() {
    if (Bt === 1) {
      Bt = 0;
      var e = lr,
        a = Ys,
        s = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || s) {
        ((s = L.T), (L.T = null));
        var o = G.p;
        G.p = 2;
        var u = et;
        et |= 4;
        try {
          Iy(a, e);
          var m = Vf,
            x = $p(e.containerInfo),
            w = m.focusedElem,
            C = m.selectionRange;
          if (
            x !== w &&
            w &&
            w.ownerDocument &&
            Zp(w.ownerDocument.documentElement, w)
          ) {
            if (C !== null && dd(w)) {
              var P = C.start,
                K = C.end;
              if ((K === void 0 && (K = P), "selectionStart" in w))
                ((w.selectionStart = P),
                  (w.selectionEnd = Math.min(K, w.value.length)));
              else {
                var X = w.ownerDocument || document,
                  H = (X && X.defaultView) || window;
                if (H.getSelection) {
                  var B = H.getSelection(),
                    Me = w.textContent.length,
                    Re = Math.min(C.start, Me),
                    ot = C.end === void 0 ? Re : Math.min(C.end, Me);
                  !B.extend && Re > ot && ((x = ot), (ot = Re), (Re = x));
                  var q = Kp(w, Re),
                    k = Kp(w, ot);
                  if (
                    q &&
                    k &&
                    (B.rangeCount !== 1 ||
                      B.anchorNode !== q.node ||
                      B.anchorOffset !== q.offset ||
                      B.focusNode !== k.node ||
                      B.focusOffset !== k.offset)
                  ) {
                    var U = X.createRange();
                    (U.setStart(q.node, q.offset),
                      B.removeAllRanges(),
                      Re > ot
                        ? (B.addRange(U), B.extend(k.node, k.offset))
                        : (U.setEnd(k.node, k.offset), B.addRange(U)));
                  }
                }
              }
            }
            for (X = [], B = w; (B = B.parentNode); )
              B.nodeType === 1 &&
                X.push({ element: B, left: B.scrollLeft, top: B.scrollTop });
            for (
              typeof w.focus == "function" && w.focus(), w = 0;
              w < X.length;
              w++
            ) {
              var $ = X[w];
              (($.element.scrollLeft = $.left), ($.element.scrollTop = $.top));
            }
          }
          ((uc = !!Uf), (Vf = Uf = null));
        } finally {
          ((et = u), (G.p = o), (L.T = s));
        }
      }
      ((e.current = a), (Bt = 2));
    }
  }
  function cv() {
    if (Bt === 2) {
      Bt = 0;
      var e = lr,
        a = Ys,
        s = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || s) {
        ((s = L.T), (L.T = null));
        var o = G.p;
        G.p = 2;
        var u = et;
        et |= 4;
        try {
          Py(e, a.alternate, a);
        } finally {
          ((et = u), (G.p = o), (L.T = s));
        }
      }
      Bt = 3;
    }
  }
  function uv() {
    if (Bt === 4 || Bt === 3) {
      ((Bt = 0), Ia());
      var e = lr,
        a = Ys,
        s = Qs,
        o = Xy;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (Bt = 5)
        : ((Bt = 0), (Ys = lr = null), dv(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (or = null),
        Iu(s),
        (a = a.stateNode),
        ve && typeof ve.onCommitFiberRoot == "function")
      )
        try {
          ve.onCommitFiberRoot(te, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        ((a = L.T), (u = G.p), (G.p = 2), (L.T = null));
        try {
          for (var m = e.onRecoverableError, x = 0; x < o.length; x++) {
            var w = o[x];
            m(w.value, { componentStack: w.stack });
          }
        } finally {
          ((L.T = a), (G.p = u));
        }
      }
      ((Qs & 3) !== 0 && Wl(),
        na(e),
        (u = e.pendingLanes),
        (s & 4194090) !== 0 && (u & 42) !== 0
          ? e === Ef
            ? fo++
            : ((fo = 0), (Ef = e))
          : (fo = 0),
        ho(0));
    }
  }
  function dv(e, a) {
    (e.pooledCacheLanes &= a) === 0 &&
      ((a = e.pooledCache), a != null && ((e.pooledCache = null), Gi(a)));
  }
  function Wl(e) {
    return (lv(), cv(), uv(), fv());
  }
  function fv() {
    if (Bt !== 5) return !1;
    var e = lr,
      a = Sf;
    Sf = 0;
    var s = Iu(Qs),
      o = L.T,
      u = G.p;
    try {
      ((G.p = 32 > s ? 32 : s), (L.T = null), (s = _f), (_f = null));
      var m = lr,
        x = Qs;
      if (((Bt = 0), (Ys = lr = null), (Qs = 0), (et & 6) !== 0))
        throw Error(i(331));
      var w = et;
      if (
        ((et |= 4),
        Zy(m.current),
        Yy(m, m.current, x, s),
        (et = w),
        ho(0, !1),
        ve && typeof ve.onPostCommitFiberRoot == "function")
      )
        try {
          ve.onPostCommitFiberRoot(te, m);
        } catch {}
      return !0;
    } finally {
      ((G.p = u), (L.T = o), dv(e, a));
    }
  }
  function hv(e, a, s) {
    ((a = En(s, a)),
      (a = tf(e.stateNode, a, 2)),
      (e = Wa(e, a, 2)),
      e !== null && (Oi(e, 2), na(e)));
  }
  function lt(e, a, s) {
    if (e.tag === 3) hv(e, e, s);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          hv(a, e, s);
          break;
        } else if (a.tag === 1) {
          var o = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (or === null || !or.has(o)))
          ) {
            ((e = En(s, e)),
              (s = yy(2)),
              (o = Wa(a, s, 2)),
              o !== null && (vy(s, o, a, e), Oi(o, 2), na(o)));
            break;
          }
        }
        a = a.return;
      }
  }
  function Cf(e, a, s) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new iN();
      var u = new Set();
      o.set(a, u);
    } else ((u = o.get(a)), u === void 0 && ((u = new Set()), o.set(a, u)));
    u.has(s) ||
      ((vf = !0), u.add(s), (e = dN.bind(null, e, a, s)), a.then(e, e));
  }
  function dN(e, a, s) {
    var o = e.pingCache;
    (o !== null && o.delete(a),
      (e.pingedLanes |= e.suspendedLanes & s),
      (e.warmLanes &= ~s),
      dt === e &&
        (Ke & s) === s &&
        (yt === 4 || (yt === 3 && (Ke & 62914560) === Ke && 300 > Qt() - wf)
          ? (et & 2) === 0 && Ks(e, 0)
          : (xf |= s),
        Gs === Ke && (Gs = 0)),
      na(e));
  }
  function mv(e, a) {
    (a === 0 && (a = up()), (e = Rs(e, a)), e !== null && (Oi(e, a), na(e)));
  }
  function fN(e) {
    var a = e.memoizedState,
      s = 0;
    (a !== null && (s = a.retryLane), mv(e, s));
  }
  function hN(e, a) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          u = e.memoizedState;
        u !== null && (s = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (o !== null && o.delete(a), mv(e, s));
  }
  function mN(e, a) {
    return mt(e, a);
  }
  var Jl = null,
    $s = null,
    Of = !1,
    ec = !1,
    Rf = !1,
    Xr = 0;
  function na(e) {
    (e !== $s &&
      e.next === null &&
      ($s === null ? (Jl = $s = e) : ($s = $s.next = e)),
      (ec = !0),
      Of || ((Of = !0), gN()));
  }
  function ho(e, a) {
    if (!Rf && ec) {
      Rf = !0;
      do
        for (var s = !1, o = Jl; o !== null; ) {
          if (e !== 0) {
            var u = o.pendingLanes;
            if (u === 0) var m = 0;
            else {
              var x = o.suspendedLanes,
                w = o.pingedLanes;
              ((m = (1 << (31 - ze(42 | e) + 1)) - 1),
                (m &= u & ~(x & ~w)),
                (m = m & 201326741 ? (m & 201326741) | 1 : m ? m | 2 : 0));
            }
            m !== 0 && ((s = !0), vv(o, m));
          } else
            ((m = Ke),
              (m = ps(
                o,
                o === dt ? m : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1,
              )),
              (m & 3) === 0 || Ya(o, m) || ((s = !0), vv(o, m)));
          o = o.next;
        }
      while (s);
      Rf = !1;
    }
  }
  function pN() {
    pv();
  }
  function pv() {
    ec = Of = !1;
    var e = 0;
    Xr !== 0 && (EN() && (e = Xr), (Xr = 0));
    for (var a = Qt(), s = null, o = Jl; o !== null; ) {
      var u = o.next,
        m = gv(o, a);
      (m === 0
        ? ((o.next = null),
          s === null ? (Jl = u) : (s.next = u),
          u === null && ($s = s))
        : ((s = o), (e !== 0 || (m & 3) !== 0) && (ec = !0)),
        (o = u));
    }
    ho(e);
  }
  function gv(e, a) {
    for (
      var s = e.suspendedLanes,
        o = e.pingedLanes,
        u = e.expirationTimes,
        m = e.pendingLanes & -62914561;
      0 < m;
    ) {
      var x = 31 - ze(m),
        w = 1 << x,
        C = u[x];
      (C === -1
        ? ((w & s) === 0 || (w & o) !== 0) && (u[x] = Hu(w, a))
        : C <= a && (e.expiredLanes |= w),
        (m &= ~w));
    }
    if (
      ((a = dt),
      (s = Ke),
      (s = ps(
        e,
        e === a ? s : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (o = e.callbackNode),
      s === 0 ||
        (e === a && (tt === 2 || tt === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && Lt(o),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((s & 3) === 0 || Ya(e, s)) {
      if (((a = s & -s), a === e.callbackPriority)) return a;
      switch ((o !== null && Lt(o), Iu(s))) {
        case 2:
        case 8:
          s = ji;
          break;
        case 32:
          s = A;
          break;
        case 268435456:
          s = I;
          break;
        default:
          s = A;
      }
      return (
        (o = yv.bind(null, e)),
        (s = mt(s, o)),
        (e.callbackPriority = a),
        (e.callbackNode = s),
        a
      );
    }
    return (
      o !== null && o !== null && Lt(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function yv(e, a) {
    if (Bt !== 0 && Bt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var s = e.callbackNode;
    if (Wl() && e.callbackNode !== s) return null;
    var o = Ke;
    return (
      (o = ps(
        e,
        e === dt ? o : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      o === 0
        ? null
        : (Jy(e, o, a),
          gv(e, Qt()),
          e.callbackNode != null && e.callbackNode === s
            ? yv.bind(null, e)
            : null)
    );
  }
  function vv(e, a) {
    if (Wl()) return null;
    Jy(e, a, !0);
  }
  function gN() {
    TN(function () {
      (et & 6) !== 0 ? mt(Pu, pN) : pv();
    });
  }
  function Af() {
    return (Xr === 0 && (Xr = Ci()), Xr);
  }
  function xv(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : dl("" + e);
  }
  function bv(e, a) {
    var s = a.ownerDocument.createElement("input");
    return (
      (s.name = a.name),
      (s.value = a.value),
      e.id && s.setAttribute("form", e.id),
      a.parentNode.insertBefore(s, a),
      (e = new FormData(e)),
      s.parentNode.removeChild(s),
      e
    );
  }
  function yN(e, a, s, o, u) {
    if (a === "submit" && s && s.stateNode === u) {
      var m = xv((u[tn] || null).action),
        x = o.submitter;
      x &&
        ((a = (a = x[tn] || null)
          ? xv(a.formAction)
          : x.getAttribute("formAction")),
        a !== null && ((m = a), (x = null)));
      var w = new pl("action", "action", null, o, u);
      e.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Xr !== 0) {
                  var C = x ? bv(u, x) : new FormData(u);
                  $d(
                    s,
                    { pending: !0, data: C, method: u.method, action: m },
                    null,
                    C,
                  );
                }
              } else
                typeof m == "function" &&
                  (w.preventDefault(),
                  (C = x ? bv(u, x) : new FormData(u)),
                  $d(
                    s,
                    { pending: !0, data: C, method: u.method, action: m },
                    m,
                    C,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Mf = 0; Mf < pd.length; Mf++) {
    var Df = pd[Mf],
      vN = Df.toLowerCase(),
      xN = Df[0].toUpperCase() + Df.slice(1);
    zn(vN, "on" + xN);
  }
  (zn(Jp, "onAnimationEnd"),
    zn(eg, "onAnimationIteration"),
    zn(tg, "onAnimationStart"),
    zn("dblclick", "onDoubleClick"),
    zn("focusin", "onFocus"),
    zn("focusout", "onBlur"),
    zn(zE, "onTransitionRun"),
    zn(qE, "onTransitionStart"),
    zn(UE, "onTransitionCancel"),
    zn(ng, "onTransitionEnd"),
    bs("onMouseEnter", ["mouseout", "mouseover"]),
    bs("onMouseLeave", ["mouseout", "mouseover"]),
    bs("onPointerEnter", ["pointerout", "pointerover"]),
    bs("onPointerLeave", ["pointerout", "pointerover"]),
    Lr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Lr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Lr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Lr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Lr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var mo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    bN = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(mo),
    );
  function wv(e, a) {
    a = (a & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var o = e[s],
        u = o.event;
      o = o.listeners;
      e: {
        var m = void 0;
        if (a)
          for (var x = o.length - 1; 0 <= x; x--) {
            var w = o[x],
              C = w.instance,
              P = w.currentTarget;
            if (((w = w.listener), C !== m && u.isPropagationStopped()))
              break e;
            ((m = w), (u.currentTarget = P));
            try {
              m(u);
            } catch (K) {
              Hl(K);
            }
            ((u.currentTarget = null), (m = C));
          }
        else
          for (x = 0; x < o.length; x++) {
            if (
              ((w = o[x]),
              (C = w.instance),
              (P = w.currentTarget),
              (w = w.listener),
              C !== m && u.isPropagationStopped())
            )
              break e;
            ((m = w), (u.currentTarget = P));
            try {
              m(u);
            } catch (K) {
              Hl(K);
            }
            ((u.currentTarget = null), (m = C));
          }
      }
    }
  }
  function Ye(e, a) {
    var s = a[Gu];
    s === void 0 && (s = a[Gu] = new Set());
    var o = e + "__bubble";
    s.has(o) || (Sv(a, e, 2, !1), s.add(o));
  }
  function kf(e, a, s) {
    var o = 0;
    (a && (o |= 4), Sv(s, e, o, a));
  }
  var tc = "_reactListening" + Math.random().toString(36).slice(2);
  function Lf(e) {
    if (!e[tc]) {
      ((e[tc] = !0),
        pp.forEach(function (s) {
          s !== "selectionchange" && (bN.has(s) || kf(s, !1, e), kf(s, !0, e));
        }));
      var a = e.nodeType === 9 ? e : e.ownerDocument;
      a === null || a[tc] || ((a[tc] = !0), kf("selectionchange", !1, a));
    }
  }
  function Sv(e, a, s, o) {
    switch (Yv(a)) {
      case 2:
        var u = QN;
        break;
      case 8:
        u = KN;
        break;
      default:
        u = Zf;
    }
    ((s = u.bind(null, a, s, e)),
      (u = void 0),
      !nd ||
        (a !== "touchstart" && a !== "touchmove" && a !== "wheel") ||
        (u = !0),
      o
        ? u !== void 0
          ? e.addEventListener(a, s, { capture: !0, passive: u })
          : e.addEventListener(a, s, !0)
        : u !== void 0
          ? e.addEventListener(a, s, { passive: u })
          : e.addEventListener(a, s, !1));
  }
  function zf(e, a, s, o, u) {
    var m = o;
    if ((a & 1) === 0 && (a & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var x = o.tag;
        if (x === 3 || x === 4) {
          var w = o.stateNode.containerInfo;
          if (w === u) break;
          if (x === 4)
            for (x = o.return; x !== null; ) {
              var C = x.tag;
              if ((C === 3 || C === 4) && x.stateNode.containerInfo === u)
                return;
              x = x.return;
            }
          for (; w !== null; ) {
            if (((x = ys(w)), x === null)) return;
            if (((C = x.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              o = m = x;
              continue e;
            }
            w = w.parentNode;
          }
        }
        o = o.return;
      }
    Op(function () {
      var P = m,
        K = ed(s),
        X = [];
      e: {
        var H = ag.get(e);
        if (H !== void 0) {
          var B = pl,
            Me = e;
          switch (e) {
            case "keypress":
              if (hl(s) === 0) break e;
            case "keydown":
            case "keyup":
              B = mE;
              break;
            case "focusin":
              ((Me = "focus"), (B = id));
              break;
            case "focusout":
              ((Me = "blur"), (B = id));
              break;
            case "beforeblur":
            case "afterblur":
              B = id;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Mp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = nE;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = yE;
              break;
            case Jp:
            case eg:
            case tg:
              B = sE;
              break;
            case ng:
              B = xE;
              break;
            case "scroll":
            case "scrollend":
              B = eE;
              break;
            case "wheel":
              B = wE;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = oE;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = kp;
              break;
            case "toggle":
            case "beforetoggle":
              B = _E;
          }
          var Re = (a & 4) !== 0,
            ot = !Re && (e === "scroll" || e === "scrollend"),
            q = Re ? (H !== null ? H + "Capture" : null) : H;
          Re = [];
          for (var k = P, U; k !== null; ) {
            var $ = k;
            if (
              ((U = $.stateNode),
              ($ = $.tag),
              ($ !== 5 && $ !== 26 && $ !== 27) ||
                U === null ||
                q === null ||
                (($ = Mi(k, q)), $ != null && Re.push(po(k, $, U))),
              ot)
            )
              break;
            k = k.return;
          }
          0 < Re.length &&
            ((H = new B(H, Me, null, s, K)),
            X.push({ event: H, listeners: Re }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (
            ((H = e === "mouseover" || e === "pointerover"),
            (B = e === "mouseout" || e === "pointerout"),
            H &&
              s !== Ju &&
              (Me = s.relatedTarget || s.fromElement) &&
              (ys(Me) || Me[gs]))
          )
            break e;
          if (
            (B || H) &&
            ((H =
              K.window === K
                ? K
                : (H = K.ownerDocument)
                  ? H.defaultView || H.parentWindow
                  : window),
            B
              ? ((Me = s.relatedTarget || s.toElement),
                (B = P),
                (Me = Me ? ys(Me) : null),
                Me !== null &&
                  ((ot = c(Me)),
                  (Re = Me.tag),
                  Me !== ot || (Re !== 5 && Re !== 27 && Re !== 6)) &&
                  (Me = null))
              : ((B = null), (Me = P)),
            B !== Me)
          ) {
            if (
              ((Re = Mp),
              ($ = "onMouseLeave"),
              (q = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Re = kp),
                ($ = "onPointerLeave"),
                (q = "onPointerEnter"),
                (k = "pointer")),
              (ot = B == null ? H : Ai(B)),
              (U = Me == null ? H : Ai(Me)),
              (H = new Re($, k + "leave", B, s, K)),
              (H.target = ot),
              (H.relatedTarget = U),
              ($ = null),
              ys(K) === P &&
                ((Re = new Re(q, k + "enter", Me, s, K)),
                (Re.target = U),
                (Re.relatedTarget = ot),
                ($ = Re)),
              (ot = $),
              B && Me)
            )
              t: {
                for (Re = B, q = Me, k = 0, U = Re; U; U = Xs(U)) k++;
                for (U = 0, $ = q; $; $ = Xs($)) U++;
                for (; 0 < k - U; ) ((Re = Xs(Re)), k--);
                for (; 0 < U - k; ) ((q = Xs(q)), U--);
                for (; k--; ) {
                  if (Re === q || (q !== null && Re === q.alternate)) break t;
                  ((Re = Xs(Re)), (q = Xs(q)));
                }
                Re = null;
              }
            else Re = null;
            (B !== null && _v(X, H, B, Re, !1),
              Me !== null && ot !== null && _v(X, ot, Me, Re, !0));
          }
        }
        e: {
          if (
            ((H = P ? Ai(P) : window),
            (B = H.nodeName && H.nodeName.toLowerCase()),
            B === "select" || (B === "input" && H.type === "file"))
          )
            var xe = Bp;
          else if (Pp(H))
            if (Fp) xe = DE;
            else {
              xe = AE;
              var Fe = RE;
            }
          else
            ((B = H.nodeName),
              !B ||
              B.toLowerCase() !== "input" ||
              (H.type !== "checkbox" && H.type !== "radio")
                ? P && Wu(P.elementType) && (xe = Bp)
                : (xe = ME));
          if (xe && (xe = xe(e, P))) {
            Hp(X, xe, s, K);
            break e;
          }
          (Fe && Fe(e, H, P),
            e === "focusout" &&
              P &&
              H.type === "number" &&
              P.memoizedProps.value != null &&
              Xu(H, "number", H.value));
        }
        switch (((Fe = P ? Ai(P) : window), e)) {
          case "focusin":
            (Pp(Fe) || Fe.contentEditable === "true") &&
              ((js = Fe), (fd = P), (Pi = null));
            break;
          case "focusout":
            Pi = fd = js = null;
            break;
          case "mousedown":
            hd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((hd = !1), Xp(X, s, K));
            break;
          case "selectionchange":
            if (LE) break;
          case "keydown":
          case "keyup":
            Xp(X, s, K);
        }
        var Te;
        if (ld)
          e: {
            switch (e) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          Ts
            ? Up(e, s) && (Ae = "onCompositionEnd")
            : e === "keydown" &&
              s.keyCode === 229 &&
              (Ae = "onCompositionStart");
        (Ae &&
          (Lp &&
            s.locale !== "ko" &&
            (Ts || Ae !== "onCompositionStart"
              ? Ae === "onCompositionEnd" && Ts && (Te = Rp())
              : ((Ka = K),
                (ad = "value" in Ka ? Ka.value : Ka.textContent),
                (Ts = !0))),
          (Fe = nc(P, Ae)),
          0 < Fe.length &&
            ((Ae = new Dp(Ae, e, null, s, K)),
            X.push({ event: Ae, listeners: Fe }),
            Te
              ? (Ae.data = Te)
              : ((Te = Vp(s)), Te !== null && (Ae.data = Te)))),
          (Te = NE ? TE(e, s) : jE(e, s)) &&
            ((Ae = nc(P, "onBeforeInput")),
            0 < Ae.length &&
              ((Fe = new Dp("onBeforeInput", "beforeinput", null, s, K)),
              X.push({ event: Fe, listeners: Ae }),
              (Fe.data = Te))),
          yN(X, e, P, s, K));
      }
      wv(X, a);
    });
  }
  function po(e, a, s) {
    return { instance: e, listener: a, currentTarget: s };
  }
  function nc(e, a) {
    for (var s = a + "Capture", o = []; e !== null; ) {
      var u = e,
        m = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          m === null ||
          ((u = Mi(e, s)),
          u != null && o.unshift(po(e, u, m)),
          (u = Mi(e, a)),
          u != null && o.push(po(e, u, m))),
        e.tag === 3)
      )
        return o;
      e = e.return;
    }
    return [];
  }
  function Xs(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _v(e, a, s, o, u) {
    for (var m = a._reactName, x = []; s !== null && s !== o; ) {
      var w = s,
        C = w.alternate,
        P = w.stateNode;
      if (((w = w.tag), C !== null && C === o)) break;
      ((w !== 5 && w !== 26 && w !== 27) ||
        P === null ||
        ((C = P),
        u
          ? ((P = Mi(s, m)), P != null && x.unshift(po(s, P, C)))
          : u || ((P = Mi(s, m)), P != null && x.push(po(s, P, C)))),
        (s = s.return));
    }
    x.length !== 0 && e.push({ event: a, listeners: x });
  }
  var wN = /\r\n?/g,
    SN = /\u0000|\uFFFD/g;
  function Ev(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        wN,
        `
`,
      )
      .replace(SN, "");
  }
  function Nv(e, a) {
    return ((a = Ev(a)), Ev(e) === a);
  }
  function ac() {}
  function it(e, a, s, o, u, m) {
    switch (s) {
      case "children":
        typeof o == "string"
          ? a === "body" || (a === "textarea" && o === "") || _s(e, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            a !== "body" &&
            _s(e, "" + o);
        break;
      case "className":
        ll(e, "class", o);
        break;
      case "tabIndex":
        ll(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ll(e, s, o);
        break;
      case "style":
        jp(e, o, m);
        break;
      case "data":
        if (a !== "object") {
          ll(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (a !== "a" || s !== "href")) {
          e.removeAttribute(s);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          e.removeAttribute(s);
          break;
        }
        ((o = dl("" + o)), e.setAttribute(s, o));
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof m == "function" &&
            (s === "formAction"
              ? (a !== "input" && it(e, a, "name", u.name, u, null),
                it(e, a, "formEncType", u.formEncType, u, null),
                it(e, a, "formMethod", u.formMethod, u, null),
                it(e, a, "formTarget", u.formTarget, u, null))
              : (it(e, a, "encType", u.encType, u, null),
                it(e, a, "method", u.method, u, null),
                it(e, a, "target", u.target, u, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(s);
          break;
        }
        ((o = dl("" + o)), e.setAttribute(s, o));
        break;
      case "onClick":
        o != null && (e.onclick = ac);
        break;
      case "onScroll":
        o != null && Ye("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(i(61));
          if (((s = o.__html), s != null)) {
            if (u.children != null) throw Error(i(60));
            e.innerHTML = s;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((s = dl("" + o)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(s, "" + o)
          : e.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(s, "")
          : e.removeAttribute(s);
        break;
      case "capture":
      case "download":
        o === !0
          ? e.setAttribute(s, "")
          : o !== !1 &&
              o != null &&
              typeof o != "function" &&
              typeof o != "symbol"
            ? e.setAttribute(s, o)
            : e.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? e.setAttribute(s, o)
          : e.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? e.removeAttribute(s)
          : e.setAttribute(s, o);
        break;
      case "popover":
        (Ye("beforetoggle", e), Ye("toggle", e), ol(e, "popover", o));
        break;
      case "xlinkActuate":
        pa(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        pa(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        pa(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        pa(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        pa(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        pa(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        pa(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        pa(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        pa(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        ol(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) ||
          (s[0] !== "o" && s[0] !== "O") ||
          (s[1] !== "n" && s[1] !== "N")) &&
          ((s = W_.get(s) || s), ol(e, s, o));
    }
  }
  function qf(e, a, s, o, u, m) {
    switch (s) {
      case "style":
        jp(e, o, m);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(i(61));
          if (((s = o.__html), s != null)) {
            if (u.children != null) throw Error(i(60));
            e.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? _s(e, o)
          : (typeof o == "number" || typeof o == "bigint") && _s(e, "" + o);
        break;
      case "onScroll":
        o != null && Ye("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ye("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = ac);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!gp.hasOwnProperty(s))
          e: {
            if (
              s[0] === "o" &&
              s[1] === "n" &&
              ((u = s.endsWith("Capture")),
              (a = s.slice(2, u ? s.length - 7 : void 0)),
              (m = e[tn] || null),
              (m = m != null ? m[s] : null),
              typeof m == "function" && e.removeEventListener(a, m, u),
              typeof o == "function")
            ) {
              (typeof m != "function" &&
                m !== null &&
                (s in e
                  ? (e[s] = null)
                  : e.hasAttribute(s) && e.removeAttribute(s)),
                e.addEventListener(a, o, u));
              break e;
            }
            s in e
              ? (e[s] = o)
              : o === !0
                ? e.setAttribute(s, "")
                : ol(e, s, o);
          }
    }
  }
  function Ft(e, a, s) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Ye("error", e), Ye("load", e));
        var o = !1,
          u = !1,
          m;
        for (m in s)
          if (s.hasOwnProperty(m)) {
            var x = s[m];
            if (x != null)
              switch (m) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, a));
                default:
                  it(e, a, m, x, s, null);
              }
          }
        (u && it(e, a, "srcSet", s.srcSet, s, null),
          o && it(e, a, "src", s.src, s, null));
        return;
      case "input":
        Ye("invalid", e);
        var w = (m = x = u = null),
          C = null,
          P = null;
        for (o in s)
          if (s.hasOwnProperty(o)) {
            var K = s[o];
            if (K != null)
              switch (o) {
                case "name":
                  u = K;
                  break;
                case "type":
                  x = K;
                  break;
                case "checked":
                  C = K;
                  break;
                case "defaultChecked":
                  P = K;
                  break;
                case "value":
                  m = K;
                  break;
                case "defaultValue":
                  w = K;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (K != null) throw Error(i(137, a));
                  break;
                default:
                  it(e, a, o, K, s, null);
              }
          }
        (_p(e, m, w, C, P, x, u, !1), cl(e));
        return;
      case "select":
        (Ye("invalid", e), (o = x = m = null));
        for (u in s)
          if (s.hasOwnProperty(u) && ((w = s[u]), w != null))
            switch (u) {
              case "value":
                m = w;
                break;
              case "defaultValue":
                x = w;
                break;
              case "multiple":
                o = w;
              default:
                it(e, a, u, w, s, null);
            }
        ((a = m),
          (s = x),
          (e.multiple = !!o),
          a != null ? Ss(e, !!o, a, !1) : s != null && Ss(e, !!o, s, !0));
        return;
      case "textarea":
        (Ye("invalid", e), (m = u = o = null));
        for (x in s)
          if (s.hasOwnProperty(x) && ((w = s[x]), w != null))
            switch (x) {
              case "value":
                o = w;
                break;
              case "defaultValue":
                u = w;
                break;
              case "children":
                m = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(i(91));
                break;
              default:
                it(e, a, x, w, s, null);
            }
        (Np(e, o, u, m), cl(e));
        return;
      case "option":
        for (C in s)
          s.hasOwnProperty(C) &&
            ((o = s[C]), o != null) &&
            (C === "selected"
              ? (e.selected =
                  o && typeof o != "function" && typeof o != "symbol")
              : it(e, a, C, o, s, null));
        return;
      case "dialog":
        (Ye("beforetoggle", e),
          Ye("toggle", e),
          Ye("cancel", e),
          Ye("close", e));
        break;
      case "iframe":
      case "object":
        Ye("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < mo.length; o++) Ye(mo[o], e);
        break;
      case "image":
        (Ye("error", e), Ye("load", e));
        break;
      case "details":
        Ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Ye("error", e), Ye("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (P in s)
          if (s.hasOwnProperty(P) && ((o = s[P]), o != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, a));
              default:
                it(e, a, P, o, s, null);
            }
        return;
      default:
        if (Wu(a)) {
          for (K in s)
            s.hasOwnProperty(K) &&
              ((o = s[K]), o !== void 0 && qf(e, a, K, o, s, void 0));
          return;
        }
    }
    for (w in s)
      s.hasOwnProperty(w) && ((o = s[w]), o != null && it(e, a, w, o, s, null));
  }
  function _N(e, a, s, o) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          m = null,
          x = null,
          w = null,
          C = null,
          P = null,
          K = null;
        for (B in s) {
          var X = s[B];
          if (s.hasOwnProperty(B) && X != null)
            switch (B) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = X;
              default:
                o.hasOwnProperty(B) || it(e, a, B, null, o, X);
            }
        }
        for (var H in o) {
          var B = o[H];
          if (((X = s[H]), o.hasOwnProperty(H) && (B != null || X != null)))
            switch (H) {
              case "type":
                m = B;
                break;
              case "name":
                u = B;
                break;
              case "checked":
                P = B;
                break;
              case "defaultChecked":
                K = B;
                break;
              case "value":
                x = B;
                break;
              case "defaultValue":
                w = B;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(i(137, a));
                break;
              default:
                B !== X && it(e, a, H, B, o, X);
            }
        }
        $u(e, x, w, C, P, K, m, u);
        return;
      case "select":
        B = x = w = H = null;
        for (m in s)
          if (((C = s[m]), s.hasOwnProperty(m) && C != null))
            switch (m) {
              case "value":
                break;
              case "multiple":
                B = C;
              default:
                o.hasOwnProperty(m) || it(e, a, m, null, o, C);
            }
        for (u in o)
          if (
            ((m = o[u]),
            (C = s[u]),
            o.hasOwnProperty(u) && (m != null || C != null))
          )
            switch (u) {
              case "value":
                H = m;
                break;
              case "defaultValue":
                w = m;
                break;
              case "multiple":
                x = m;
              default:
                m !== C && it(e, a, u, m, o, C);
            }
        ((a = w),
          (s = x),
          (o = B),
          H != null
            ? Ss(e, !!s, H, !1)
            : !!o != !!s &&
              (a != null ? Ss(e, !!s, a, !0) : Ss(e, !!s, s ? [] : "", !1)));
        return;
      case "textarea":
        B = H = null;
        for (w in s)
          if (
            ((u = s[w]),
            s.hasOwnProperty(w) && u != null && !o.hasOwnProperty(w))
          )
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                it(e, a, w, null, o, u);
            }
        for (x in o)
          if (
            ((u = o[x]),
            (m = s[x]),
            o.hasOwnProperty(x) && (u != null || m != null))
          )
            switch (x) {
              case "value":
                H = u;
                break;
              case "defaultValue":
                B = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(i(91));
                break;
              default:
                u !== m && it(e, a, x, u, o, m);
            }
        Ep(e, H, B);
        return;
      case "option":
        for (var Me in s)
          ((H = s[Me]),
            s.hasOwnProperty(Me) &&
              H != null &&
              !o.hasOwnProperty(Me) &&
              (Me === "selected"
                ? (e.selected = !1)
                : it(e, a, Me, null, o, H)));
        for (C in o)
          ((H = o[C]),
            (B = s[C]),
            o.hasOwnProperty(C) &&
              H !== B &&
              (H != null || B != null) &&
              (C === "selected"
                ? (e.selected =
                    H && typeof H != "function" && typeof H != "symbol")
                : it(e, a, C, H, o, B)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Re in s)
          ((H = s[Re]),
            s.hasOwnProperty(Re) &&
              H != null &&
              !o.hasOwnProperty(Re) &&
              it(e, a, Re, null, o, H));
        for (P in o)
          if (
            ((H = o[P]),
            (B = s[P]),
            o.hasOwnProperty(P) && H !== B && (H != null || B != null))
          )
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(i(137, a));
                break;
              default:
                it(e, a, P, H, o, B);
            }
        return;
      default:
        if (Wu(a)) {
          for (var ot in s)
            ((H = s[ot]),
              s.hasOwnProperty(ot) &&
                H !== void 0 &&
                !o.hasOwnProperty(ot) &&
                qf(e, a, ot, void 0, o, H));
          for (K in o)
            ((H = o[K]),
              (B = s[K]),
              !o.hasOwnProperty(K) ||
                H === B ||
                (H === void 0 && B === void 0) ||
                qf(e, a, K, H, o, B));
          return;
        }
    }
    for (var q in s)
      ((H = s[q]),
        s.hasOwnProperty(q) &&
          H != null &&
          !o.hasOwnProperty(q) &&
          it(e, a, q, null, o, H));
    for (X in o)
      ((H = o[X]),
        (B = s[X]),
        !o.hasOwnProperty(X) ||
          H === B ||
          (H == null && B == null) ||
          it(e, a, X, H, o, B));
  }
  var Uf = null,
    Vf = null;
  function rc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Tv(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function jv(e, a) {
    if (e === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && a === "foreignObject" ? 0 : e;
  }
  function Pf(e, a) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof a.children == "string" ||
      typeof a.children == "number" ||
      typeof a.children == "bigint" ||
      (typeof a.dangerouslySetInnerHTML == "object" &&
        a.dangerouslySetInnerHTML !== null &&
        a.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Hf = null;
  function EN() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Hf
        ? !1
        : ((Hf = e), !0)
      : ((Hf = null), !1);
  }
  var Cv = typeof setTimeout == "function" ? setTimeout : void 0,
    NN = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ov = typeof Promise == "function" ? Promise : void 0,
    TN =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ov < "u"
          ? function (e) {
              return Ov.resolve(null).then(e).catch(jN);
            }
          : Cv;
  function jN(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ur(e) {
    return e === "head";
  }
  function Rv(e, a) {
    var s = a,
      o = 0,
      u = 0;
    do {
      var m = s.nextSibling;
      if ((e.removeChild(s), m && m.nodeType === 8))
        if (((s = m.data), s === "/$")) {
          if (0 < o && 8 > o) {
            s = o;
            var x = e.ownerDocument;
            if ((s & 1 && go(x.documentElement), s & 2 && go(x.body), s & 4))
              for (s = x.head, go(s), x = s.firstChild; x; ) {
                var w = x.nextSibling,
                  C = x.nodeName;
                (x[Ri] ||
                  C === "SCRIPT" ||
                  C === "STYLE" ||
                  (C === "LINK" && x.rel.toLowerCase() === "stylesheet") ||
                  s.removeChild(x),
                  (x = w));
              }
          }
          if (u === 0) {
            (e.removeChild(m), Eo(a));
            return;
          }
          u--;
        } else
          s === "$" || s === "$?" || s === "$!"
            ? u++
            : (o = s.charCodeAt(0) - 48);
      else o = 0;
      s = m;
    } while (s);
    Eo(a);
  }
  function Bf(e) {
    var a = e.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var s = a;
      switch (((a = a.nextSibling), s.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Bf(s), Yu(s));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(s);
    }
  }
  function CN(e, a, s, o) {
    for (; e.nodeType === 1; ) {
      var u = s;
      if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[Ri])
          switch (a) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((m = e.getAttribute("rel")),
                m === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                m !== u.rel ||
                e.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((m = e.getAttribute("src")),
                (m !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  m &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (a === "input" && e.type === "hidden") {
        var m = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === m) return e;
      } else return e;
      if (((e = Un(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function ON(e, a, s) {
    if (a === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !s) ||
        ((e = Un(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ff(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function RN(e, a) {
    var s = e.ownerDocument;
    if (e.data !== "$?" || s.readyState === "complete") a();
    else {
      var o = function () {
        (a(), s.removeEventListener("DOMContentLoaded", o));
      };
      (s.addEventListener("DOMContentLoaded", o), (e._reactRetry = o));
    }
  }
  function Un(e) {
    for (; e != null; e = e.nextSibling) {
      var a = e.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (
          ((a = e.data),
          a === "$" || a === "$!" || a === "$?" || a === "F!" || a === "F")
        )
          break;
        if (a === "/$") return null;
      }
    }
    return e;
  }
  var If = null;
  function Av(e) {
    e = e.previousSibling;
    for (var a = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (a === 0) return e;
          a--;
        } else s === "/$" && a++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Mv(e, a, s) {
    switch (((a = rc(s)), e)) {
      case "html":
        if (((e = a.documentElement), !e)) throw Error(i(452));
        return e;
      case "head":
        if (((e = a.head), !e)) throw Error(i(453));
        return e;
      case "body":
        if (((e = a.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function go(e) {
    for (var a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
    Yu(e);
  }
  var Rn = new Map(),
    Dv = new Set();
  function sc(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Oa = G.d;
  G.d = { f: AN, r: MN, D: DN, C: kN, L: LN, m: zN, X: UN, S: qN, M: VN };
  function AN() {
    var e = Oa.f(),
      a = $l();
    return e || a;
  }
  function MN(e) {
    var a = vs(e);
    a !== null && a.tag === 5 && a.type === "form" ? Jg(a) : Oa.r(e);
  }
  var Ws = typeof document > "u" ? null : document;
  function kv(e, a, s) {
    var o = Ws;
    if (o && typeof a == "string" && a) {
      var u = _n(a);
      ((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof s == "string" && (u += '[crossorigin="' + s + '"]'),
        Dv.has(u) ||
          (Dv.add(u),
          (e = { rel: e, crossOrigin: s, href: a }),
          o.querySelector(u) === null &&
            ((a = o.createElement("link")),
            Ft(a, "link", e),
            zt(a),
            o.head.appendChild(a))));
    }
  }
  function DN(e) {
    (Oa.D(e), kv("dns-prefetch", e, null));
  }
  function kN(e, a) {
    (Oa.C(e, a), kv("preconnect", e, a));
  }
  function LN(e, a, s) {
    Oa.L(e, a, s);
    var o = Ws;
    if (o && e && a) {
      var u = 'link[rel="preload"][as="' + _n(a) + '"]';
      a === "image" && s && s.imageSrcSet
        ? ((u += '[imagesrcset="' + _n(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == "string" &&
            (u += '[imagesizes="' + _n(s.imageSizes) + '"]'))
        : (u += '[href="' + _n(e) + '"]');
      var m = u;
      switch (a) {
        case "style":
          m = Js(e);
          break;
        case "script":
          m = ei(e);
      }
      Rn.has(m) ||
        ((e = v(
          {
            rel: "preload",
            href: a === "image" && s && s.imageSrcSet ? void 0 : e,
            as: a,
          },
          s,
        )),
        Rn.set(m, e),
        o.querySelector(u) !== null ||
          (a === "style" && o.querySelector(yo(m))) ||
          (a === "script" && o.querySelector(vo(m))) ||
          ((a = o.createElement("link")),
          Ft(a, "link", e),
          zt(a),
          o.head.appendChild(a)));
    }
  }
  function zN(e, a) {
    Oa.m(e, a);
    var s = Ws;
    if (s && e) {
      var o = a && typeof a.as == "string" ? a.as : "script",
        u =
          'link[rel="modulepreload"][as="' + _n(o) + '"][href="' + _n(e) + '"]',
        m = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = ei(e);
      }
      if (
        !Rn.has(m) &&
        ((e = v({ rel: "modulepreload", href: e }, a)),
        Rn.set(m, e),
        s.querySelector(u) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(vo(m))) return;
        }
        ((o = s.createElement("link")),
          Ft(o, "link", e),
          zt(o),
          s.head.appendChild(o));
      }
    }
  }
  function qN(e, a, s) {
    Oa.S(e, a, s);
    var o = Ws;
    if (o && e) {
      var u = xs(o).hoistableStyles,
        m = Js(e);
      a = a || "default";
      var x = u.get(m);
      if (!x) {
        var w = { loading: 0, preload: null };
        if ((x = o.querySelector(yo(m)))) w.loading = 5;
        else {
          ((e = v({ rel: "stylesheet", href: e, "data-precedence": a }, s)),
            (s = Rn.get(m)) && Gf(e, s));
          var C = (x = o.createElement("link"));
          (zt(C),
            Ft(C, "link", e),
            (C._p = new Promise(function (P, K) {
              ((C.onload = P), (C.onerror = K));
            })),
            C.addEventListener("load", function () {
              w.loading |= 1;
            }),
            C.addEventListener("error", function () {
              w.loading |= 2;
            }),
            (w.loading |= 4),
            ic(x, a, o));
        }
        ((x = { type: "stylesheet", instance: x, count: 1, state: w }),
          u.set(m, x));
      }
    }
  }
  function UN(e, a) {
    Oa.X(e, a);
    var s = Ws;
    if (s && e) {
      var o = xs(s).hoistableScripts,
        u = ei(e),
        m = o.get(u);
      m ||
        ((m = s.querySelector(vo(u))),
        m ||
          ((e = v({ src: e, async: !0 }, a)),
          (a = Rn.get(u)) && Yf(e, a),
          (m = s.createElement("script")),
          zt(m),
          Ft(m, "link", e),
          s.head.appendChild(m)),
        (m = { type: "script", instance: m, count: 1, state: null }),
        o.set(u, m));
    }
  }
  function VN(e, a) {
    Oa.M(e, a);
    var s = Ws;
    if (s && e) {
      var o = xs(s).hoistableScripts,
        u = ei(e),
        m = o.get(u);
      m ||
        ((m = s.querySelector(vo(u))),
        m ||
          ((e = v({ src: e, async: !0, type: "module" }, a)),
          (a = Rn.get(u)) && Yf(e, a),
          (m = s.createElement("script")),
          zt(m),
          Ft(m, "link", e),
          s.head.appendChild(m)),
        (m = { type: "script", instance: m, count: 1, state: null }),
        o.set(u, m));
    }
  }
  function Lv(e, a, s, o) {
    var u = (u = fe.current) ? sc(u) : null;
    if (!u) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string"
          ? ((a = Js(s.href)),
            (s = xs(u).hoistableStyles),
            (o = s.get(a)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              s.set(a, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          s.rel === "stylesheet" &&
          typeof s.href == "string" &&
          typeof s.precedence == "string"
        ) {
          e = Js(s.href);
          var m = xs(u).hoistableStyles,
            x = m.get(e);
          if (
            (x ||
              ((u = u.ownerDocument || u),
              (x = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              m.set(e, x),
              (m = u.querySelector(yo(e))) &&
                !m._p &&
                ((x.instance = m), (x.state.loading = 5)),
              Rn.has(e) ||
                ((s = {
                  rel: "preload",
                  as: "style",
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                Rn.set(e, s),
                m || PN(u, e, s, x.state))),
            a && o === null)
          )
            throw Error(i(528, ""));
          return x;
        }
        if (a && o !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (a = s.async),
          (s = s.src),
          typeof s == "string" &&
          a &&
          typeof a != "function" &&
          typeof a != "symbol"
            ? ((a = ei(s)),
              (s = xs(u).hoistableScripts),
              (o = s.get(a)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                s.set(a, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Js(e) {
    return 'href="' + _n(e) + '"';
  }
  function yo(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function zv(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function PN(e, a, s, o) {
    e.querySelector('link[rel="preload"][as="style"][' + a + "]")
      ? (o.loading = 1)
      : ((a = e.createElement("link")),
        (o.preload = a),
        a.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        a.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        Ft(a, "link", s),
        zt(a),
        e.head.appendChild(a));
  }
  function ei(e) {
    return '[src="' + _n(e) + '"]';
  }
  function vo(e) {
    return "script[async]" + e;
  }
  function qv(e, a, s) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + _n(s.href) + '"]');
          if (o) return ((a.instance = o), zt(o), o);
          var u = v({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            zt(o),
            Ft(o, "style", u),
            ic(o, s.precedence, e),
            (a.instance = o)
          );
        case "stylesheet":
          u = Js(s.href);
          var m = e.querySelector(yo(u));
          if (m) return ((a.state.loading |= 4), (a.instance = m), zt(m), m);
          ((o = zv(s)),
            (u = Rn.get(u)) && Gf(o, u),
            (m = (e.ownerDocument || e).createElement("link")),
            zt(m));
          var x = m;
          return (
            (x._p = new Promise(function (w, C) {
              ((x.onload = w), (x.onerror = C));
            })),
            Ft(m, "link", o),
            (a.state.loading |= 4),
            ic(m, s.precedence, e),
            (a.instance = m)
          );
        case "script":
          return (
            (m = ei(s.src)),
            (u = e.querySelector(vo(m)))
              ? ((a.instance = u), zt(u), u)
              : ((o = s),
                (u = Rn.get(m)) && ((o = v({}, s)), Yf(o, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                zt(u),
                Ft(u, "link", o),
                e.head.appendChild(u),
                (a.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, a.type));
      }
    else
      a.type === "stylesheet" &&
        (a.state.loading & 4) === 0 &&
        ((o = a.instance), (a.state.loading |= 4), ic(o, s.precedence, e));
    return a.instance;
  }
  function ic(e, a, s) {
    for (
      var o = s.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = o.length ? o[o.length - 1] : null,
        m = u,
        x = 0;
      x < o.length;
      x++
    ) {
      var w = o[x];
      if (w.dataset.precedence === a) m = w;
      else if (m !== u) break;
    }
    m
      ? m.parentNode.insertBefore(e, m.nextSibling)
      : ((a = s.nodeType === 9 ? s.head : s), a.insertBefore(e, a.firstChild));
  }
  function Gf(e, a) {
    (e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.title == null && (e.title = a.title));
  }
  function Yf(e, a) {
    (e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.integrity == null && (e.integrity = a.integrity));
  }
  var oc = null;
  function Uv(e, a, s) {
    if (oc === null) {
      var o = new Map(),
        u = (oc = new Map());
      u.set(s, o);
    } else ((u = oc), (o = u.get(s)), o || ((o = new Map()), u.set(s, o)));
    if (o.has(e)) return o;
    for (
      o.set(e, null), s = s.getElementsByTagName(e), u = 0;
      u < s.length;
      u++
    ) {
      var m = s[u];
      if (
        !(
          m[Ri] ||
          m[Kt] ||
          (e === "link" && m.getAttribute("rel") === "stylesheet")
        ) &&
        m.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var x = m.getAttribute(a) || "";
        x = e + x;
        var w = o.get(x);
        w ? w.push(m) : o.set(x, [m]);
      }
    }
    return o;
  }
  function Vv(e, a, s) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        s,
        a === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function HN(e, a, s) {
    if (s === 1 || a.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof a.precedence != "string" ||
          typeof a.href != "string" ||
          a.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof a.rel != "string" ||
          typeof a.href != "string" ||
          a.href === "" ||
          a.onLoad ||
          a.onError
        )
          break;
        return a.rel === "stylesheet"
          ? ((e = a.disabled), typeof a.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          a.async &&
          typeof a.async != "function" &&
          typeof a.async != "symbol" &&
          !a.onLoad &&
          !a.onError &&
          a.src &&
          typeof a.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Pv(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var xo = null;
  function BN() {}
  function FN(e, a, s) {
    if (xo === null) throw Error(i(475));
    var o = xo;
    if (
      a.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = Js(s.href),
          m = e.querySelector(yo(u));
        if (m) {
          ((e = m._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (o.count++, (o = lc.bind(o)), e.then(o, o)),
            (a.state.loading |= 4),
            (a.instance = m),
            zt(m));
          return;
        }
        ((m = e.ownerDocument || e),
          (s = zv(s)),
          (u = Rn.get(u)) && Gf(s, u),
          (m = m.createElement("link")),
          zt(m));
        var x = m;
        ((x._p = new Promise(function (w, C) {
          ((x.onload = w), (x.onerror = C));
        })),
          Ft(m, "link", s),
          (a.instance = m));
      }
      (o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(a, e),
        (e = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (o.count++,
          (a = lc.bind(o)),
          e.addEventListener("load", a),
          e.addEventListener("error", a)));
    }
  }
  function IN() {
    if (xo === null) throw Error(i(475));
    var e = xo;
    return (
      e.stylesheets && e.count === 0 && Qf(e, e.stylesheets),
      0 < e.count
        ? function (a) {
            var s = setTimeout(function () {
              if ((e.stylesheets && Qf(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                ((e.unsuspend = null), o());
              }
            }, 6e4);
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function lc() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Qf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var cc = null;
  function Qf(e, a) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (cc = new Map()),
        a.forEach(GN, e),
        (cc = null),
        lc.call(e)));
  }
  function GN(e, a) {
    if (!(a.state.loading & 4)) {
      var s = cc.get(e);
      if (s) var o = s.get(null);
      else {
        ((s = new Map()), cc.set(e, s));
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            m = 0;
          m < u.length;
          m++
        ) {
          var x = u[m];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") &&
            (s.set(x.dataset.precedence, x), (o = x));
        }
        o && s.set(null, o);
      }
      ((u = a.instance),
        (x = u.getAttribute("data-precedence")),
        (m = s.get(x) || o),
        m === o && s.set(null, u),
        s.set(x, u),
        this.count++,
        (o = lc.bind(this)),
        u.addEventListener("load", o),
        u.addEventListener("error", o),
        m
          ? m.parentNode.insertBefore(u, m.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (a.state.loading |= 4));
    }
  }
  var bo = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function YN(e, a, s, o, u, m, x, w) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Bu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Bu(0)),
      (this.hiddenUpdates = Bu(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = u),
      (this.onCaughtError = m),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map()));
  }
  function Hv(e, a, s, o, u, m, x, w, C, P, K, X) {
    return (
      (e = new YN(e, a, s, x, w, C, P, X)),
      (a = 1),
      m === !0 && (a |= 24),
      (m = cn(3, null, null, a)),
      (e.current = m),
      (m.stateNode = e),
      (a = jd()),
      a.refCount++,
      (e.pooledCache = a),
      a.refCount++,
      (m.memoizedState = { element: o, isDehydrated: s, cache: a }),
      Ad(m),
      e
    );
  }
  function Bv(e) {
    return e ? ((e = As), e) : As;
  }
  function Fv(e, a, s, o, u, m) {
    ((u = Bv(u)),
      o.context === null ? (o.context = u) : (o.pendingContext = u),
      (o = Xa(a)),
      (o.payload = { element: s }),
      (m = m === void 0 ? null : m),
      m !== null && (o.callback = m),
      (s = Wa(e, o, a)),
      s !== null && (mn(s, e, a), Zi(s, e, a)));
  }
  function Iv(e, a) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < a ? s : a;
    }
  }
  function Kf(e, a) {
    (Iv(e, a), (e = e.alternate) && Iv(e, a));
  }
  function Gv(e) {
    if (e.tag === 13) {
      var a = Rs(e, 67108864);
      (a !== null && mn(a, e, 67108864), Kf(e, 67108864));
    }
  }
  var uc = !0;
  function QN(e, a, s, o) {
    var u = L.T;
    L.T = null;
    var m = G.p;
    try {
      ((G.p = 2), Zf(e, a, s, o));
    } finally {
      ((G.p = m), (L.T = u));
    }
  }
  function KN(e, a, s, o) {
    var u = L.T;
    L.T = null;
    var m = G.p;
    try {
      ((G.p = 8), Zf(e, a, s, o));
    } finally {
      ((G.p = m), (L.T = u));
    }
  }
  function Zf(e, a, s, o) {
    if (uc) {
      var u = $f(o);
      if (u === null) (zf(e, a, o, dc, s), Qv(e, o));
      else if ($N(u, e, a, s, o)) o.stopPropagation();
      else if ((Qv(e, o), a & 4 && -1 < ZN.indexOf(e))) {
        for (; u !== null; ) {
          var m = vs(u);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (((m = m.stateNode), m.current.memoizedState.isDehydrated)) {
                  var x = Ln(m.pendingLanes);
                  if (x !== 0) {
                    var w = m;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; x; ) {
                      var C = 1 << (31 - ze(x));
                      ((w.entanglements[1] |= C), (x &= ~C));
                    }
                    (na(m), (et & 6) === 0 && ((Kl = Qt() + 500), ho(0)));
                  }
                }
                break;
              case 13:
                ((w = Rs(m, 2)), w !== null && mn(w, m, 2), $l(), Kf(m, 2));
            }
          if (((m = $f(o)), m === null && zf(e, a, o, dc, s), m === u)) break;
          u = m;
        }
        u !== null && o.stopPropagation();
      } else zf(e, a, o, null, s);
    }
  }
  function $f(e) {
    return ((e = ed(e)), Xf(e));
  }
  var dc = null;
  function Xf(e) {
    if (((dc = null), (e = ys(e)), e !== null)) {
      var a = c(e);
      if (a === null) e = null;
      else {
        var s = a.tag;
        if (s === 13) {
          if (((e = f(a)), e !== null)) return e;
          e = null;
        } else if (s === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          e = null;
        } else a !== e && (e = null);
      }
    }
    return ((dc = e), null);
  }
  function Yv(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Vu()) {
          case Pu:
            return 2;
          case ji:
            return 8;
          case A:
          case V:
            return 32;
          case I:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wf = !1,
    dr = null,
    fr = null,
    hr = null,
    wo = new Map(),
    So = new Map(),
    mr = [],
    ZN =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Qv(e, a) {
    switch (e) {
      case "focusin":
      case "focusout":
        dr = null;
        break;
      case "dragenter":
      case "dragleave":
        fr = null;
        break;
      case "mouseover":
      case "mouseout":
        hr = null;
        break;
      case "pointerover":
      case "pointerout":
        wo.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        So.delete(a.pointerId);
    }
  }
  function _o(e, a, s, o, u, m) {
    return e === null || e.nativeEvent !== m
      ? ((e = {
          blockedOn: a,
          domEventName: s,
          eventSystemFlags: o,
          nativeEvent: m,
          targetContainers: [u],
        }),
        a !== null && ((a = vs(a)), a !== null && Gv(a)),
        e)
      : ((e.eventSystemFlags |= o),
        (a = e.targetContainers),
        u !== null && a.indexOf(u) === -1 && a.push(u),
        e);
  }
  function $N(e, a, s, o, u) {
    switch (a) {
      case "focusin":
        return ((dr = _o(dr, e, a, s, o, u)), !0);
      case "dragenter":
        return ((fr = _o(fr, e, a, s, o, u)), !0);
      case "mouseover":
        return ((hr = _o(hr, e, a, s, o, u)), !0);
      case "pointerover":
        var m = u.pointerId;
        return (wo.set(m, _o(wo.get(m) || null, e, a, s, o, u)), !0);
      case "gotpointercapture":
        return (
          (m = u.pointerId),
          So.set(m, _o(So.get(m) || null, e, a, s, o, u)),
          !0
        );
    }
    return !1;
  }
  function Kv(e) {
    var a = ys(e.target);
    if (a !== null) {
      var s = c(a);
      if (s !== null) {
        if (((a = s.tag), a === 13)) {
          if (((a = f(s)), a !== null)) {
            ((e.blockedOn = a),
              F_(e.priority, function () {
                if (s.tag === 13) {
                  var o = hn();
                  o = Fu(o);
                  var u = Rs(s, o);
                  (u !== null && mn(u, s, o), Kf(s, o));
                }
              }));
            return;
          }
        } else if (a === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function fc(e) {
    if (e.blockedOn !== null) return !1;
    for (var a = e.targetContainers; 0 < a.length; ) {
      var s = $f(e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var o = new s.constructor(s.type, s);
        ((Ju = o), s.target.dispatchEvent(o), (Ju = null));
      } else return ((a = vs(s)), a !== null && Gv(a), (e.blockedOn = s), !1);
      a.shift();
    }
    return !0;
  }
  function Zv(e, a, s) {
    fc(e) && s.delete(a);
  }
  function XN() {
    ((Wf = !1),
      dr !== null && fc(dr) && (dr = null),
      fr !== null && fc(fr) && (fr = null),
      hr !== null && fc(hr) && (hr = null),
      wo.forEach(Zv),
      So.forEach(Zv));
  }
  function hc(e, a) {
    e.blockedOn === a &&
      ((e.blockedOn = null),
      Wf ||
        ((Wf = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, XN)));
  }
  var mc = null;
  function $v(e) {
    mc !== e &&
      ((mc = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        mc === e && (mc = null);
        for (var a = 0; a < e.length; a += 3) {
          var s = e[a],
            o = e[a + 1],
            u = e[a + 2];
          if (typeof o != "function") {
            if (Xf(o || s) === null) continue;
            break;
          }
          var m = vs(s);
          m !== null &&
            (e.splice(a, 3),
            (a -= 3),
            $d(m, { pending: !0, data: u, method: s.method, action: o }, o, u));
        }
      }));
  }
  function Eo(e) {
    function a(C) {
      return hc(C, e);
    }
    (dr !== null && hc(dr, e),
      fr !== null && hc(fr, e),
      hr !== null && hc(hr, e),
      wo.forEach(a),
      So.forEach(a));
    for (var s = 0; s < mr.length; s++) {
      var o = mr[s];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < mr.length && ((s = mr[0]), s.blockedOn === null); )
      (Kv(s), s.blockedOn === null && mr.shift());
    if (((s = (e.ownerDocument || e).$$reactFormReplay), s != null))
      for (o = 0; o < s.length; o += 3) {
        var u = s[o],
          m = s[o + 1],
          x = u[tn] || null;
        if (typeof m == "function") x || $v(s);
        else if (x) {
          var w = null;
          if (m && m.hasAttribute("formAction")) {
            if (((u = m), (x = m[tn] || null))) w = x.formAction;
            else if (Xf(u) !== null) continue;
          } else w = x.action;
          (typeof w == "function" ? (s[o + 1] = w) : (s.splice(o, 3), (o -= 3)),
            $v(s));
        }
      }
  }
  function Jf(e) {
    this._internalRoot = e;
  }
  ((pc.prototype.render = Jf.prototype.render =
    function (e) {
      var a = this._internalRoot;
      if (a === null) throw Error(i(409));
      var s = a.current,
        o = hn();
      Fv(s, o, e, a, null, null);
    }),
    (pc.prototype.unmount = Jf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var a = e.containerInfo;
          (Fv(e.current, 2, null, e, null, null), $l(), (a[gs] = null));
        }
      }));
  function pc(e) {
    this._internalRoot = e;
  }
  pc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var a = hp();
      e = { blockedOn: null, target: e, priority: a };
      for (var s = 0; s < mr.length && a !== 0 && a < mr[s].priority; s++);
      (mr.splice(s, 0, e), s === 0 && Kv(e));
    }
  };
  var Xv = n.version;
  if (Xv !== "19.1.0") throw Error(i(527, Xv, "19.1.0"));
  G.findDOMNode = function (e) {
    var a = e._reactInternals;
    if (a === void 0)
      throw typeof e.render == "function"
        ? Error(i(188))
        : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return (
      (e = g(a)),
      (e = e !== null ? p(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var WN = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gc.isDisabled && gc.supportsFiber)
      try {
        ((te = gc.inject(WN)), (ve = gc));
      } catch {}
  }
  return (
    (To.createRoot = function (e, a) {
      if (!l(e)) throw Error(i(299));
      var s = !1,
        o = "",
        u = hy,
        m = my,
        x = py,
        w = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (s = !0),
          a.identifierPrefix !== void 0 && (o = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (m = a.onCaughtError),
          a.onRecoverableError !== void 0 && (x = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (w = a.unstable_transitionCallbacks)),
        (a = Hv(e, 1, !1, null, null, s, o, u, m, x, w, null)),
        (e[gs] = a.current),
        Lf(e),
        new Jf(a)
      );
    }),
    (To.hydrateRoot = function (e, a, s) {
      if (!l(e)) throw Error(i(299));
      var o = !1,
        u = "",
        m = hy,
        x = my,
        w = py,
        C = null,
        P = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (o = !0),
          s.identifierPrefix !== void 0 && (u = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (m = s.onUncaughtError),
          s.onCaughtError !== void 0 && (x = s.onCaughtError),
          s.onRecoverableError !== void 0 && (w = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 &&
            (C = s.unstable_transitionCallbacks),
          s.formState !== void 0 && (P = s.formState)),
        (a = Hv(e, 1, !0, a, s ?? null, o, u, m, x, w, C, P)),
        (a.context = Bv(null)),
        (s = a.current),
        (o = hn()),
        (o = Fu(o)),
        (u = Xa(o)),
        (u.callback = null),
        Wa(s, u, o),
        (s = o),
        (a.current.lanes = s),
        Oi(a, s),
        na(a),
        (e[gs] = a.current),
        Lf(e),
        new pc(a)
      );
    }),
    (To.version = "19.1.0"),
    To
  );
}
var ox;
function lT() {
  if (ox) return th.exports;
  ox = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return (t(), (th.exports = oT()), th.exports);
}
var cT = lT();
function uT(t, n) {
  if (t instanceof RegExp) return { keys: !1, pattern: t };
  var r,
    i,
    l,
    c,
    f = [],
    h = "",
    g = t.split("/");
  for (g[0] || g.shift(); (l = g.shift()); )
    ((r = l[0]),
      r === "*"
        ? (f.push(r), (h += l[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : r === ":"
          ? ((i = l.indexOf("?", 1)),
            (c = l.indexOf(".", 1)),
            f.push(l.substring(1, ~i ? i : ~c ? c : l.length)),
            (h += ~i && !~c ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~c && (h += (~i ? "?" : "") + "\\" + l.substring(c)))
          : (h += "/" + l));
  return {
    keys: f,
    pattern: new RegExp("^" + h + (n ? "(?=$|/)" : "/?$"), "i"),
  };
}
var y = au();
const je = Ib(y),
  ru = eT({ __proto__: null, default: je }, [y]);
var ih = { exports: {} },
  oh = {};
var lx;
function dT() {
  if (lx) return oh;
  lx = 1;
  var t = au();
  function n(b, S) {
    return (b === S && (b !== 0 || 1 / b === 1 / S)) || (b !== b && S !== S);
  }
  var r = typeof Object.is == "function" ? Object.is : n,
    i = t.useState,
    l = t.useEffect,
    c = t.useLayoutEffect,
    f = t.useDebugValue;
  function h(b, S) {
    var E = S(),
      j = i({ inst: { value: E, getSnapshot: S } }),
      _ = j[0].inst,
      N = j[1];
    return (
      c(
        function () {
          ((_.value = E), (_.getSnapshot = S), g(_) && N({ inst: _ }));
        },
        [b, E, S],
      ),
      l(
        function () {
          return (
            g(_) && N({ inst: _ }),
            b(function () {
              g(_) && N({ inst: _ });
            })
          );
        },
        [b],
      ),
      f(E),
      E
    );
  }
  function g(b) {
    var S = b.getSnapshot;
    b = b.value;
    try {
      var E = S();
      return !r(b, E);
    } catch {
      return !0;
    }
  }
  function p(b, S) {
    return S();
  }
  var v =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? p
      : h;
  return (
    (oh.useSyncExternalStore =
      t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : v),
    oh
  );
}
var cx;
function fT() {
  return (cx || ((cx = 1), (ih.exports = dT())), ih.exports);
}
var Yb = fT();
const hT = ru.useInsertionEffect,
  mT =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  pT = mT ? y.useLayoutEffect : y.useEffect,
  gT = hT || pT,
  Qb = (t) => {
    const n = y.useRef([t, (...r) => n[0](...r)]).current;
    return (
      gT(() => {
        n[0] = t;
      }),
      n[1]
    );
  },
  yT = "popstate",
  fm = "pushState",
  hm = "replaceState",
  vT = "hashchange",
  ux = [yT, fm, hm, vT],
  xT = (t) => {
    for (const n of ux) addEventListener(n, t);
    return () => {
      for (const n of ux) removeEventListener(n, t);
    };
  },
  Kb = (t, n) => Yb.useSyncExternalStore(xT, t, n),
  dx = () => location.search,
  bT = ({ ssrSearch: t } = {}) => Kb(dx, t != null ? () => t : dx),
  fx = () => location.pathname,
  wT = ({ ssrPath: t } = {}) => Kb(fx, t != null ? () => t : fx),
  ST = (t, { replace: n = !1, state: r = null } = {}) =>
    history[n ? hm : fm](r, "", t),
  _T = (t = {}) => [wT(t), ST],
  hx = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[hx] > "u") {
  for (const t of [fm, hm]) {
    const n = history[t];
    history[t] = function () {
      const r = n.apply(this, arguments),
        i = new Event(t);
      return ((i.arguments = arguments), dispatchEvent(i), r);
    };
  }
  Object.defineProperty(window, hx, { value: !0 });
}
const ET = (t, n) =>
    n.toLowerCase().indexOf(t.toLowerCase())
      ? "~" + n
      : n.slice(t.length) || "/",
  Zb = (t = "") => (t === "/" ? "" : t),
  NT = (t, n) => (t[0] === "~" ? t.slice(1) : Zb(n) + t),
  TT = (t = "", n) => ET(mx(Zb(t)), mx(n)),
  mx = (t) => {
    try {
      return decodeURI(t);
    } catch {
      return t;
    }
  },
  $b = {
    hook: _T,
    searchHook: bT,
    parser: uT,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (t) => t,
    aroundNav: (t, n, r) => t(n, r),
  },
  Xb = y.createContext($b),
  Ko = () => y.useContext(Xb),
  Wb = {},
  Jb = y.createContext(Wb),
  su = () => y.useContext(Jb),
  iu = (t) => {
    const [n, r] = t.hook(t);
    return [TT(t.base, n), Qb((i, l) => t.aroundNav(r, NT(i, t.base), l))];
  },
  e0 = () => iu(Ko()),
  t0 = (t, n, r, i) => {
    const { pattern: l, keys: c } =
        n instanceof RegExp ? { keys: !1, pattern: n } : t(n || "*", i),
      f = l.exec(r) || [],
      [h, ...g] = f;
    return h !== void 0
      ? [
          !0,
          (() => {
            const p =
              c !== !1
                ? Object.fromEntries(c.map((b, S) => [b, g[S]]))
                : f.groups;
            let v = { ...g };
            return (p && Object.assign(v, p), v);
          })(),
          ...(i ? [h] : []),
        ]
      : [!1, null];
  },
  n0 = ({ children: t, ...n }) => {
    const r = Ko(),
      i = n.hook ? $b : r;
    let l = i;
    const [c, f = n.ssrSearch ?? ""] = n.ssrPath?.split("?") ?? [];
    (c && ((n.ssrSearch = f), (n.ssrPath = c)),
      (n.hrefs = n.hrefs ?? n.hook?.hrefs),
      (n.searchHook = n.searchHook ?? n.hook?.searchHook));
    let h = y.useRef({}),
      g = h.current,
      p = g;
    for (let v in i) {
      const b = v === "base" ? i[v] + (n[v] ?? "") : (n[v] ?? i[v]);
      (g === p && b !== p[v] && (h.current = p = { ...p }),
        (p[v] = b),
        (b !== i[v] || b !== l[v]) && (l = p));
    }
    return y.createElement(Xb.Provider, { value: l, children: t });
  },
  px = ({ children: t, component: n }, r) =>
    n ? y.createElement(n, { params: r }) : typeof t == "function" ? t(r) : t,
  jT = (t) => {
    let n = y.useRef(Wb);
    const r = n.current;
    return (n.current =
      Object.keys(t).length !== Object.keys(r).length ||
      Object.entries(t).some(([i, l]) => l !== r[i])
        ? t
        : r);
  },
  Ra = ({ path: t, nest: n, match: r, ...i }) => {
    const l = Ko(),
      [c] = iu(l),
      [f, h, g] = r ?? t0(l.parser, t, c, n),
      p = jT({ ...su(), ...h });
    if (!f) return null;
    const v = g ? y.createElement(n0, { base: g }, px(i, p)) : px(i, p);
    return y.createElement(Jb.Provider, { value: p, children: v });
  },
  Dt = y.forwardRef((t, n) => {
    const r = Ko(),
      [i, l] = iu(r),
      {
        to: c = "",
        href: f = c,
        onClick: h,
        asChild: g,
        children: p,
        className: v,
        replace: b,
        state: S,
        transition: E,
        ...j
      } = t,
      _ = Qb((R) => {
        R.ctrlKey ||
          R.metaKey ||
          R.altKey ||
          R.shiftKey ||
          R.button !== 0 ||
          (h?.(R), R.defaultPrevented || (R.preventDefault(), l(f, t)));
      }),
      N = r.hrefs(f[0] === "~" ? f.slice(1) : r.base + f, r);
    return g && y.isValidElement(p)
      ? y.cloneElement(p, { onClick: _, href: N })
      : y.createElement("a", {
          ...j,
          onClick: _,
          href: N,
          className: v?.call ? v(i === f) : v,
          children: p,
          ref: n,
        });
  }),
  a0 = (t) =>
    Array.isArray(t)
      ? t.flatMap((n) => a0(n && n.type === y.Fragment ? n.props.children : n))
      : [t],
  CT = ({ children: t, location: n }) => {
    const r = Ko(),
      [i] = iu(r);
    for (const l of a0(t)) {
      let c = 0;
      if (
        y.isValidElement(l) &&
        (c = t0(r.parser, l.props.path, n || i, l.props.nest))[0]
      )
        return y.cloneElement(l, { match: c });
    }
    return null;
  };
var xi = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(t), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  OT = {
    setTimeout: (t, n) => setTimeout(t, n),
    clearTimeout: (t) => clearTimeout(t),
    setInterval: (t, n) => setInterval(t, n),
    clearInterval: (t) => clearInterval(t),
  },
  RT = class {
    #e = OT;
    #t = !1;
    setTimeoutProvider(t) {
      this.#e = t;
    }
    setTimeout(t, n) {
      return this.#e.setTimeout(t, n);
    }
    clearTimeout(t) {
      this.#e.clearTimeout(t);
    }
    setInterval(t, n) {
      return this.#e.setInterval(t, n);
    }
    clearInterval(t) {
      this.#e.clearInterval(t);
    }
  },
  ns = new RT();
function AT(t) {
  setTimeout(t, 0);
}
var rs = typeof window > "u" || "Deno" in globalThis;
function Jt() {}
function MT(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function Rh(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function r0(t, n) {
  return Math.max(t + (n || 0) - Date.now(), 0);
}
function Er(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function An(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function gx(t, n) {
  const {
    type: r = "all",
    exact: i,
    fetchStatus: l,
    predicate: c,
    queryKey: f,
    stale: h,
  } = t;
  if (f) {
    if (i) {
      if (n.queryHash !== mm(f, n.options)) return !1;
    } else if (!Uo(n.queryKey, f)) return !1;
  }
  if (r !== "all") {
    const g = n.isActive();
    if ((r === "active" && !g) || (r === "inactive" && g)) return !1;
  }
  return !(
    (typeof h == "boolean" && n.isStale() !== h) ||
    (l && l !== n.state.fetchStatus) ||
    (c && !c(n))
  );
}
function yx(t, n) {
  const { exact: r, status: i, predicate: l, mutationKey: c } = t;
  if (c) {
    if (!n.options.mutationKey) return !1;
    if (r) {
      if (ss(n.options.mutationKey) !== ss(c)) return !1;
    } else if (!Uo(n.options.mutationKey, c)) return !1;
  }
  return !((i && n.state.status !== i) || (l && !l(n)));
}
function mm(t, n) {
  return (n?.queryKeyHashFn || ss)(t);
}
function ss(t) {
  return JSON.stringify(t, (n, r) =>
    Ah(r)
      ? Object.keys(r)
          .sort()
          .reduce((i, l) => ((i[l] = r[l]), i), {})
      : r,
  );
}
function Uo(t, n) {
  return t === n
    ? !0
    : typeof t != typeof n
      ? !1
      : t && n && typeof t == "object" && typeof n == "object"
        ? Object.keys(n).every((r) => Uo(t[r], n[r]))
        : !1;
}
var DT = Object.prototype.hasOwnProperty;
function s0(t, n, r = 0) {
  if (t === n) return t;
  if (r > 500) return n;
  const i = vx(t) && vx(n);
  if (!i && !(Ah(t) && Ah(n))) return n;
  const c = (i ? t : Object.keys(t)).length,
    f = i ? n : Object.keys(n),
    h = f.length,
    g = i ? new Array(h) : {};
  let p = 0;
  for (let v = 0; v < h; v++) {
    const b = i ? v : f[v],
      S = t[b],
      E = n[b];
    if (S === E) {
      ((g[b] = S), (i ? v < c : DT.call(t, b)) && p++);
      continue;
    }
    if (
      S === null ||
      E === null ||
      typeof S != "object" ||
      typeof E != "object"
    ) {
      g[b] = E;
      continue;
    }
    const j = s0(S, E, r + 1);
    ((g[b] = j), j === S && p++);
  }
  return c === h && p === c ? t : g;
}
function zc(t, n) {
  if (!n || Object.keys(t).length !== Object.keys(n).length) return !1;
  for (const r in t) if (t[r] !== n[r]) return !1;
  return !0;
}
function vx(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Ah(t) {
  if (!xx(t)) return !1;
  const n = t.constructor;
  if (n === void 0) return !0;
  const r = n.prototype;
  return !(
    !xx(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function xx(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function kT(t) {
  return new Promise((n) => {
    ns.setTimeout(n, t);
  });
}
function Mh(t, n, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(t, n)
    : r.structuralSharing !== !1
      ? s0(t, n)
      : n;
}
function LT(t, n, r = 0) {
  const i = [...t, n];
  return r && i.length > r ? i.slice(1) : i;
}
function zT(t, n, r = 0) {
  const i = [n, ...t];
  return r && i.length > r ? i.slice(0, -1) : i;
}
var pm = Symbol();
function i0(t, n) {
  return !t.queryFn && n?.initialPromise
    ? () => n.initialPromise
    : !t.queryFn || t.queryFn === pm
      ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
      : t.queryFn;
}
function gm(t, n) {
  return typeof t == "function" ? t(...n) : !!t;
}
function qT(t, n, r) {
  let i = !1,
    l;
  return (
    Object.defineProperty(t, "signal", {
      enumerable: !0,
      get: () => (
        (l ??= n()),
        i ||
          ((i = !0),
          l.aborted ? r() : l.addEventListener("abort", r, { once: !0 })),
        l
      ),
    }),
    t
  );
}
var UT = class extends xi {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (t) => {
          if (!rs && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(t) {
      ((this.#n = t),
        this.#t?.(),
        (this.#t = t((n) => {
          typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
        })));
    }
    setFocused(t) {
      this.#e !== t && ((this.#e = t), this.onFocus());
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach((n) => {
        n(t);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  ym = new UT();
function Dh() {
  let t, n;
  const r = new Promise((l, c) => {
    ((t = l), (n = c));
  });
  ((r.status = "pending"), r.catch(() => {}));
  function i(l) {
    (Object.assign(r, l), delete r.resolve, delete r.reject);
  }
  return (
    (r.resolve = (l) => {
      (i({ status: "fulfilled", value: l }), t(l));
    }),
    (r.reject = (l) => {
      (i({ status: "rejected", reason: l }), n(l));
    }),
    r
  );
}
var VT = AT;
function PT() {
  let t = [],
    n = 0,
    r = (h) => {
      h();
    },
    i = (h) => {
      h();
    },
    l = VT;
  const c = (h) => {
      n
        ? t.push(h)
        : l(() => {
            r(h);
          });
    },
    f = () => {
      const h = t;
      ((t = []),
        h.length &&
          l(() => {
            i(() => {
              h.forEach((g) => {
                r(g);
              });
            });
          }));
    };
  return {
    batch: (h) => {
      let g;
      n++;
      try {
        g = h();
      } finally {
        (n--, n || f());
      }
      return g;
    },
    batchCalls:
      (h) =>
      (...g) => {
        c(() => {
          h(...g);
        });
      },
    schedule: c,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      i = h;
    },
    setScheduler: (h) => {
      l = h;
    },
  };
}
var kt = PT(),
  HT = class extends xi {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (t) => {
          if (!rs && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(t) {
      ((this.#n = t), this.#t?.(), (this.#t = t(this.setOnline.bind(this))));
    }
    setOnline(t) {
      this.#e !== t &&
        ((this.#e = t),
        this.listeners.forEach((r) => {
          r(t);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  qc = new HT();
function BT(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function o0(t) {
  return (t ?? "online") === "online" ? qc.isOnline() : !0;
}
var kh = class extends Error {
  constructor(t) {
    (super("CancelledError"),
      (this.revert = t?.revert),
      (this.silent = t?.silent));
  }
};
function l0(t) {
  let n = !1,
    r = 0,
    i;
  const l = Dh(),
    c = () => l.status !== "pending",
    f = (_) => {
      if (!c()) {
        const N = new kh(_);
        (S(N), t.onCancel?.(N));
      }
    },
    h = () => {
      n = !0;
    },
    g = () => {
      n = !1;
    },
    p = () =>
      ym.isFocused() &&
      (t.networkMode === "always" || qc.isOnline()) &&
      t.canRun(),
    v = () => o0(t.networkMode) && t.canRun(),
    b = (_) => {
      c() || (i?.(), l.resolve(_));
    },
    S = (_) => {
      c() || (i?.(), l.reject(_));
    },
    E = () =>
      new Promise((_) => {
        ((i = (N) => {
          (c() || p()) && _(N);
        }),
          t.onPause?.());
      }).then(() => {
        ((i = void 0), c() || t.onContinue?.());
      }),
    j = () => {
      if (c()) return;
      let _;
      const N = r === 0 ? t.initialPromise : void 0;
      try {
        _ = N ?? t.fn();
      } catch (R) {
        _ = Promise.reject(R);
      }
      Promise.resolve(_)
        .then(b)
        .catch((R) => {
          if (c()) return;
          const O = t.retry ?? (rs ? 0 : 3),
            D = t.retryDelay ?? BT,
            z = typeof D == "function" ? D(r, R) : D,
            M =
              O === !0 ||
              (typeof O == "number" && r < O) ||
              (typeof O == "function" && O(r, R));
          if (n || !M) {
            S(R);
            return;
          }
          (r++,
            t.onFail?.(r, R),
            kT(z)
              .then(() => (p() ? void 0 : E()))
              .then(() => {
                n ? S(R) : j();
              }));
        });
    };
  return {
    promise: l,
    status: () => l.status,
    cancel: f,
    continue: () => (i?.(), l),
    cancelRetry: h,
    continueRetry: g,
    canStart: v,
    start: () => (v() ? j() : E().then(j), l),
  };
}
var c0 = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        Rh(this.gcTime) &&
          (this.#e = ns.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(t) {
      this.gcTime = Math.max(this.gcTime || 0, t ?? (rs ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (ns.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  FT = class extends c0 {
    #e;
    #t;
    #n;
    #r;
    #a;
    #i;
    #o;
    constructor(t) {
      (super(),
        (this.#o = !1),
        (this.#i = t.defaultOptions),
        this.setOptions(t.options),
        (this.observers = []),
        (this.#r = t.client),
        (this.#n = this.#r.getQueryCache()),
        (this.queryKey = t.queryKey),
        (this.queryHash = t.queryHash),
        (this.#e = wx(this.options)),
        (this.state = t.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#a?.promise;
    }
    setOptions(t) {
      if (
        ((this.options = { ...this.#i, ...t }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const n = wx(this.options);
        n.data !== void 0 &&
          (this.setState(bx(n.data, n.dataUpdatedAt)), (this.#e = n));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(t, n) {
      const r = Mh(this.state.data, t, this.options);
      return (
        this.#s({
          data: r,
          type: "success",
          dataUpdatedAt: n?.updatedAt,
          manual: n?.manual,
        }),
        r
      );
    }
    setState(t, n) {
      this.#s({ type: "setState", state: t, setStateOptions: n });
    }
    cancel(t) {
      const n = this.#a?.promise;
      return (this.#a?.cancel(t), n ? n.then(Jt).catch(Jt) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((t) => An(t.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === pm ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((t) => Er(t.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((t) => t.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(t = 0) {
      return this.state.data === void 0
        ? !0
        : t === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !r0(this.state.dataUpdatedAt, t);
    }
    onFocus() {
      (this.observers
        .find((n) => n.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue());
    }
    onOnline() {
      (this.observers
        .find((n) => n.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue());
    }
    addObserver(t) {
      this.observers.includes(t) ||
        (this.observers.push(t),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: t }));
    }
    removeObserver(t) {
      this.observers.includes(t) &&
        ((this.observers = this.observers.filter((n) => n !== t)),
        this.observers.length ||
          (this.#a &&
            (this.#o ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: t }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#s({ type: "invalidate" });
    }
    async fetch(t, n) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#a?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && n?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
      }
      if ((t && this.setOptions(t), !this.options.queryFn)) {
        const h = this.observers.find((g) => g.options.queryFn);
        h && this.setOptions(h.options);
      }
      const r = new AbortController(),
        i = (h) => {
          Object.defineProperty(h, "signal", {
            enumerable: !0,
            get: () => ((this.#o = !0), r.signal),
          });
        },
        l = () => {
          const h = i0(this.options, n),
            p = (() => {
              const v = {
                client: this.#r,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (i(v), v);
            })();
          return (
            (this.#o = !1),
            this.options.persister ? this.options.persister(h, p, this) : h(p)
          );
        },
        f = (() => {
          const h = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#r,
            state: this.state,
            fetchFn: l,
          };
          return (i(h), h);
        })();
      (this.options.behavior?.onFetch(f, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== f.fetchOptions?.meta) &&
          this.#s({ type: "fetch", meta: f.fetchOptions?.meta }),
        (this.#a = l0({
          initialPromise: n?.initialPromise,
          fn: f.fetchFn,
          onCancel: (h) => {
            (h instanceof kh &&
              h.revert &&
              this.setState({ ...this.#t, fetchStatus: "idle" }),
              r.abort());
          },
          onFail: (h, g) => {
            this.#s({ type: "failed", failureCount: h, error: g });
          },
          onPause: () => {
            this.#s({ type: "pause" });
          },
          onContinue: () => {
            this.#s({ type: "continue" });
          },
          retry: f.options.retry,
          retryDelay: f.options.retryDelay,
          networkMode: f.options.networkMode,
          canRun: () => !0,
        })));
      try {
        const h = await this.#a.start();
        if (h === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(h),
          this.#n.config.onSuccess?.(h, this),
          this.#n.config.onSettled?.(h, this.state.error, this),
          h
        );
      } catch (h) {
        if (h instanceof kh) {
          if (h.silent) return this.#a.promise;
          if (h.revert) {
            if (this.state.data === void 0) throw h;
            return this.state.data;
          }
        }
        throw (
          this.#s({ type: "error", error: h }),
          this.#n.config.onError?.(h, this),
          this.#n.config.onSettled?.(this.state.data, h, this),
          h
        );
      } finally {
        this.scheduleGc();
      }
    }
    #s(t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...u0(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            const i = {
              ...r,
              ...bx(t.data, t.dataUpdatedAt),
              dataUpdateCount: r.dataUpdateCount + 1,
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#t = t.manual ? i : void 0), i);
          case "error":
            const l = t.error;
            return {
              ...r,
              error: l,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: l,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        kt.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: t }));
        }));
    }
  };
function u0(t, n) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: o0(n.networkMode) ? "fetching" : "paused",
    ...(t === void 0 && { error: null, status: "pending" }),
  };
}
function bx(t, n) {
  return {
    data: t,
    dataUpdatedAt: n ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function wx(t) {
  const n =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    r = n !== void 0,
    i = r
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: n,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (i ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var IT = class extends xi {
  constructor(t, n) {
    (super(),
      (this.options = n),
      (this.#e = t),
      (this.#s = null),
      (this.#o = Dh()),
      this.bindMethods(),
      this.setOptions(n));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #a;
  #i;
  #o;
  #s;
  #p;
  #f;
  #h;
  #c;
  #u;
  #l;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      Sx(this.#t, this.options) ? this.#d() : this.updateResult(),
      this.#x());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Lh(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Lh(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#w(),
      this.#t.removeObserver(this));
  }
  setOptions(t) {
    const n = this.options,
      r = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(t)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof An(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean",
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      n._defaulted &&
        !zc(this.options, n) &&
        this.#e
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this,
          }));
    const i = this.hasListeners();
    (i && _x(this.#t, r, this.options, n) && this.#d(),
      this.updateResult(),
      i &&
        (this.#t !== r ||
          An(this.options.enabled, this.#t) !== An(n.enabled, this.#t) ||
          Er(this.options.staleTime, this.#t) !== Er(n.staleTime, this.#t)) &&
        this.#g());
    const l = this.#y();
    i &&
      (this.#t !== r ||
        An(this.options.enabled, this.#t) !== An(n.enabled, this.#t) ||
        l !== this.#l) &&
      this.#v(l);
  }
  getOptimisticResult(t) {
    const n = this.#e.getQueryCache().build(this.#e, t),
      r = this.createResult(n, t);
    return (
      YT(this, r) &&
        ((this.#r = r), (this.#i = this.options), (this.#a = this.#t.state)),
      r
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(t, n) {
    return new Proxy(t, {
      get: (r, i) => (
        this.trackProp(i),
        n?.(i),
        i === "promise" &&
          (this.trackProp("data"),
          !this.options.experimental_prefetchInRender &&
            this.#o.status === "pending" &&
            this.#o.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            )),
        Reflect.get(r, i)
      ),
    });
  }
  trackProp(t) {
    this.#m.add(t);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...t } = {}) {
    return this.fetch({ ...t });
  }
  fetchOptimistic(t) {
    const n = this.#e.defaultQueryOptions(t),
      r = this.#e.getQueryCache().build(this.#e, n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return this.#d({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #d(t) {
    this.#S();
    let n = this.#t.fetch(this.options, t);
    return (t?.throwOnError || (n = n.catch(Jt)), n);
  }
  #g() {
    this.#b();
    const t = Er(this.options.staleTime, this.#t);
    if (rs || this.#r.isStale || !Rh(t)) return;
    const r = r0(this.#r.dataUpdatedAt, t) + 1;
    this.#c = ns.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, r);
  }
  #y() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(t) {
    (this.#w(),
      (this.#l = t),
      !(
        rs ||
        An(this.options.enabled, this.#t) === !1 ||
        !Rh(this.#l) ||
        this.#l === 0
      ) &&
        (this.#u = ns.setInterval(() => {
          (this.options.refetchIntervalInBackground || ym.isFocused()) &&
            this.#d();
        }, this.#l)));
  }
  #x() {
    (this.#g(), this.#v(this.#y()));
  }
  #b() {
    this.#c && (ns.clearTimeout(this.#c), (this.#c = void 0));
  }
  #w() {
    this.#u && (ns.clearInterval(this.#u), (this.#u = void 0));
  }
  createResult(t, n) {
    const r = this.#t,
      i = this.options,
      l = this.#r,
      c = this.#a,
      f = this.#i,
      g = t !== r ? t.state : this.#n,
      { state: p } = t;
    let v = { ...p },
      b = !1,
      S;
    if (n._optimisticResults) {
      const F = this.hasListeners(),
        oe = !F && Sx(t, n),
        ne = F && _x(t, r, n, i);
      ((oe || ne) && (v = { ...v, ...u0(p.data, t.options) }),
        n._optimisticResults === "isRestoring" && (v.fetchStatus = "idle"));
    }
    let { error: E, errorUpdatedAt: j, status: _ } = v;
    S = v.data;
    let N = !1;
    if (n.placeholderData !== void 0 && S === void 0 && _ === "pending") {
      let F;
      (l?.isPlaceholderData && n.placeholderData === f?.placeholderData
        ? ((F = l.data), (N = !0))
        : (F =
            typeof n.placeholderData == "function"
              ? n.placeholderData(this.#h?.state.data, this.#h)
              : n.placeholderData),
        F !== void 0 && ((_ = "success"), (S = Mh(l?.data, F, n)), (b = !0)));
    }
    if (n.select && S !== void 0 && !N)
      if (l && S === c?.data && n.select === this.#p) S = this.#f;
      else
        try {
          ((this.#p = n.select),
            (S = n.select(S)),
            (S = Mh(l?.data, S, n)),
            (this.#f = S),
            (this.#s = null));
        } catch (F) {
          this.#s = F;
        }
    this.#s && ((E = this.#s), (S = this.#f), (j = Date.now()), (_ = "error"));
    const R = v.fetchStatus === "fetching",
      O = _ === "pending",
      D = _ === "error",
      z = O && R,
      M = S !== void 0,
      Q = {
        status: _,
        fetchStatus: v.fetchStatus,
        isPending: O,
        isSuccess: _ === "success",
        isError: D,
        isInitialLoading: z,
        isLoading: z,
        data: S,
        dataUpdatedAt: v.dataUpdatedAt,
        error: E,
        errorUpdatedAt: j,
        failureCount: v.fetchFailureCount,
        failureReason: v.fetchFailureReason,
        errorUpdateCount: v.errorUpdateCount,
        isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
        isFetchedAfterMount:
          v.dataUpdateCount > g.dataUpdateCount ||
          v.errorUpdateCount > g.errorUpdateCount,
        isFetching: R,
        isRefetching: R && !O,
        isLoadingError: D && !M,
        isPaused: v.fetchStatus === "paused",
        isPlaceholderData: b,
        isRefetchError: D && M,
        isStale: vm(t, n),
        refetch: this.refetch,
        promise: this.#o,
        isEnabled: An(n.enabled, t) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const F = Q.data !== void 0,
        oe = Q.status === "error" && !F,
        ne = (se) => {
          oe ? se.reject(Q.error) : F && se.resolve(Q.data);
        },
        he = () => {
          const se = (this.#o = Q.promise = Dh());
          ne(se);
        },
        J = this.#o;
      switch (J.status) {
        case "pending":
          t.queryHash === r.queryHash && ne(J);
          break;
        case "fulfilled":
          (oe || Q.data !== J.value) && he();
          break;
        case "rejected":
          (!oe || Q.error !== J.reason) && he();
          break;
      }
    }
    return Q;
  }
  updateResult() {
    const t = this.#r,
      n = this.createResult(this.#t, this.options);
    if (
      ((this.#a = this.#t.state),
      (this.#i = this.options),
      this.#a.data !== void 0 && (this.#h = this.#t),
      zc(n, t))
    )
      return;
    this.#r = n;
    const r = () => {
      if (!t) return !0;
      const { notifyOnChangeProps: i } = this.options,
        l = typeof i == "function" ? i() : i;
      if (l === "all" || (!l && !this.#m.size)) return !0;
      const c = new Set(l ?? this.#m);
      return (
        this.options.throwOnError && c.add("error"),
        Object.keys(this.#r).some((f) => {
          const h = f;
          return this.#r[h] !== t[h] && c.has(h);
        })
      );
    };
    this.#_({ listeners: r() });
  }
  #S() {
    const t = this.#e.getQueryCache().build(this.#e, this.options);
    if (t === this.#t) return;
    const n = this.#t;
    ((this.#t = t),
      (this.#n = t.state),
      this.hasListeners() && (n?.removeObserver(this), t.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#x());
  }
  #_(t) {
    kt.batch(() => {
      (t.listeners &&
        this.listeners.forEach((n) => {
          n(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: "observerResultsUpdated" }));
    });
  }
};
function GT(t, n) {
  return (
    An(n.enabled, t) !== !1 &&
    t.state.data === void 0 &&
    !(t.state.status === "error" && n.retryOnMount === !1)
  );
}
function Sx(t, n) {
  return GT(t, n) || (t.state.data !== void 0 && Lh(t, n, n.refetchOnMount));
}
function Lh(t, n, r) {
  if (An(n.enabled, t) !== !1 && Er(n.staleTime, t) !== "static") {
    const i = typeof r == "function" ? r(t) : r;
    return i === "always" || (i !== !1 && vm(t, n));
  }
  return !1;
}
function _x(t, n, r, i) {
  return (
    (t !== n || An(i.enabled, t) === !1) &&
    (!r.suspense || t.state.status !== "error") &&
    vm(t, r)
  );
}
function vm(t, n) {
  return An(n.enabled, t) !== !1 && t.isStaleByTime(Er(n.staleTime, t));
}
function YT(t, n) {
  return !zc(t.getCurrentResult(), n);
}
function Ex(t) {
  return {
    onFetch: (n, r) => {
      const i = n.options,
        l = n.fetchOptions?.meta?.fetchMore?.direction,
        c = n.state.data?.pages || [],
        f = n.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        g = 0;
      const p = async () => {
        let v = !1;
        const b = (j) => {
            qT(
              j,
              () => n.signal,
              () => (v = !0),
            );
          },
          S = i0(n.options, n.fetchOptions),
          E = async (j, _, N) => {
            if (v) return Promise.reject();
            if (_ == null && j.pages.length) return Promise.resolve(j);
            const O = (() => {
                const Y = {
                  client: n.client,
                  queryKey: n.queryKey,
                  pageParam: _,
                  direction: N ? "backward" : "forward",
                  meta: n.options.meta,
                };
                return (b(Y), Y);
              })(),
              D = await S(O),
              { maxPages: z } = n.options,
              M = N ? zT : LT;
            return {
              pages: M(j.pages, D, z),
              pageParams: M(j.pageParams, _, z),
            };
          };
        if (l && c.length) {
          const j = l === "backward",
            _ = j ? QT : Nx,
            N = { pages: c, pageParams: f },
            R = _(i, N);
          h = await E(N, R, j);
        } else {
          const j = t ?? c.length;
          do {
            const _ = g === 0 ? (f[0] ?? i.initialPageParam) : Nx(i, h);
            if (g > 0 && _ == null) break;
            ((h = await E(h, _)), g++);
          } while (g < j);
        }
        return h;
      };
      n.options.persister
        ? (n.fetchFn = () =>
            n.options.persister?.(
              p,
              {
                client: n.client,
                queryKey: n.queryKey,
                meta: n.options.meta,
                signal: n.signal,
              },
              r,
            ))
        : (n.fetchFn = p);
    },
  };
}
function Nx(t, { pages: n, pageParams: r }) {
  const i = n.length - 1;
  return n.length > 0 ? t.getNextPageParam(n[i], n, r[i], r) : void 0;
}
function QT(t, { pages: n, pageParams: r }) {
  return n.length > 0 ? t.getPreviousPageParam?.(n[0], n, r[0], r) : void 0;
}
var KT = class extends c0 {
  #e;
  #t;
  #n;
  #r;
  constructor(t) {
    (super(),
      (this.#e = t.client),
      (this.mutationId = t.mutationId),
      (this.#n = t.mutationCache),
      (this.#t = []),
      (this.state = t.state || d0()),
      this.setOptions(t.options),
      this.scheduleGc());
  }
  setOptions(t) {
    ((this.options = t), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    this.#t.includes(t) ||
      (this.#t.push(t),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    ((this.#t = this.#t.filter((n) => n !== t)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: t }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(t) {
    const n = () => {
        this.#a({ type: "continue" });
      },
      r = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = l0({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(t, r)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (c, f) => {
        this.#a({ type: "failed", failureCount: c, error: f });
      },
      onPause: () => {
        this.#a({ type: "pause" });
      },
      onContinue: n,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const i = this.state.status === "pending",
      l = !this.#r.canStart();
    try {
      if (i) n();
      else {
        (this.#a({ type: "pending", variables: t, isPaused: l }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(t, this, r)));
        const f = await this.options.onMutate?.(t, r);
        f !== this.state.context &&
          this.#a({ type: "pending", context: f, variables: t, isPaused: l });
      }
      const c = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(c, t, this.state.context, this, r),
        await this.options.onSuccess?.(c, t, this.state.context, r),
        await this.#n.config.onSettled?.(
          c,
          null,
          this.state.variables,
          this.state.context,
          this,
          r,
        ),
        await this.options.onSettled?.(c, null, t, this.state.context, r),
        this.#a({ type: "success", data: c }),
        c
      );
    } catch (c) {
      try {
        await this.#n.config.onError?.(c, t, this.state.context, this, r);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onError?.(c, t, this.state.context, r);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          c,
          this.state.variables,
          this.state.context,
          this,
          r,
        );
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onSettled?.(void 0, c, t, this.state.context, r);
      } catch (f) {
        Promise.reject(f);
      }
      throw (this.#a({ type: "error", error: c }), c);
    } finally {
      this.#n.runNext(this);
    }
  }
  #a(t) {
    const n = (r) => {
      switch (t.type) {
        case "failed":
          return { ...r, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "pending":
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: t.isPaused,
            status: "pending",
            variables: t.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...r,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = n(this.state)),
      kt.batch(() => {
        (this.#t.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: t }));
      }));
  }
};
function d0() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var ZT = class extends xi {
  constructor(t = {}) {
    (super(),
      (this.config = t),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(t, n, r) {
    const i = new KT({
      client: t,
      mutationCache: this,
      mutationId: ++this.#n,
      options: t.defaultMutationOptions(n),
      state: r,
    });
    return (this.add(i), i);
  }
  add(t) {
    this.#e.add(t);
    const n = yc(t);
    if (typeof n == "string") {
      const r = this.#t.get(n);
      r ? r.push(t) : this.#t.set(n, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (this.#e.delete(t)) {
      const n = yc(t);
      if (typeof n == "string") {
        const r = this.#t.get(n);
        if (r)
          if (r.length > 1) {
            const i = r.indexOf(t);
            i !== -1 && r.splice(i, 1);
          } else r[0] === t && this.#t.delete(n);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const n = yc(t);
    if (typeof n == "string") {
      const i = this.#t.get(n)?.find((l) => l.state.status === "pending");
      return !i || i === t;
    } else return !0;
  }
  runNext(t) {
    const n = yc(t);
    return typeof n == "string"
      ? (this.#t
          .get(n)
          ?.find((i) => i !== t && i.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    kt.batch(() => {
      (this.#e.forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find((r) => yx(n, r));
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => yx(t, n));
  }
  notify(t) {
    kt.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return kt.batch(() => Promise.all(t.map((n) => n.continue().catch(Jt))));
  }
};
function yc(t) {
  return t.options.scope?.id;
}
var $T = class extends xi {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(n, r) {
      (super(),
        (this.#e = n),
        this.setOptions(r),
        this.bindMethods(),
        this.#a());
    }
    bindMethods() {
      ((this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this)));
    }
    setOptions(n) {
      const r = this.options;
      ((this.options = this.#e.defaultMutationOptions(n)),
        zc(this.options, r) ||
          this.#e
            .getMutationCache()
            .notify({
              type: "observerOptionsUpdated",
              mutation: this.#n,
              observer: this,
            }),
        r?.mutationKey &&
        this.options.mutationKey &&
        ss(r.mutationKey) !== ss(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === "pending" &&
            this.#n.setOptions(this.options));
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(n) {
      (this.#a(), this.#i(n));
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      (this.#n?.removeObserver(this), (this.#n = void 0), this.#a(), this.#i());
    }
    mutate(n, r) {
      return (
        (this.#r = r),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(n)
      );
    }
    #a() {
      const n = this.#n?.state ?? d0();
      this.#t = {
        ...n,
        isPending: n.status === "pending",
        isSuccess: n.status === "success",
        isError: n.status === "error",
        isIdle: n.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #i(n) {
      kt.batch(() => {
        if (this.#r && this.hasListeners()) {
          const r = this.#t.variables,
            i = this.#t.context,
            l = {
              client: this.#e,
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          if (n?.type === "success") {
            try {
              this.#r.onSuccess?.(n.data, r, i, l);
            } catch (c) {
              Promise.reject(c);
            }
            try {
              this.#r.onSettled?.(n.data, null, r, i, l);
            } catch (c) {
              Promise.reject(c);
            }
          } else if (n?.type === "error") {
            try {
              this.#r.onError?.(n.error, r, i, l);
            } catch (c) {
              Promise.reject(c);
            }
            try {
              this.#r.onSettled?.(void 0, n.error, r, i, l);
            } catch (c) {
              Promise.reject(c);
            }
          }
        }
        this.listeners.forEach((r) => {
          r(this.#t);
        });
      });
    }
  },
  XT = class extends xi {
    constructor(t = {}) {
      (super(), (this.config = t), (this.#e = new Map()));
    }
    #e;
    build(t, n, r) {
      const i = n.queryKey,
        l = n.queryHash ?? mm(i, n);
      let c = this.get(l);
      return (
        c ||
          ((c = new FT({
            client: t,
            queryKey: i,
            queryHash: l,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(i),
          })),
          this.add(c)),
        c
      );
    }
    add(t) {
      this.#e.has(t.queryHash) ||
        (this.#e.set(t.queryHash, t), this.notify({ type: "added", query: t }));
    }
    remove(t) {
      const n = this.#e.get(t.queryHash);
      n &&
        (t.destroy(),
        n === t && this.#e.delete(t.queryHash),
        this.notify({ type: "removed", query: t }));
    }
    clear() {
      kt.batch(() => {
        this.getAll().forEach((t) => {
          this.remove(t);
        });
      });
    }
    get(t) {
      return this.#e.get(t);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(t) {
      const n = { exact: !0, ...t };
      return this.getAll().find((r) => gx(n, r));
    }
    findAll(t = {}) {
      const n = this.getAll();
      return Object.keys(t).length > 0 ? n.filter((r) => gx(t, r)) : n;
    }
    notify(t) {
      kt.batch(() => {
        this.listeners.forEach((n) => {
          n(t);
        });
      });
    }
    onFocus() {
      kt.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      kt.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  },
  WT = class {
    #e;
    #t;
    #n;
    #r;
    #a;
    #i;
    #o;
    #s;
    constructor(t = {}) {
      ((this.#e = t.queryCache || new XT()),
        (this.#t = t.mutationCache || new ZT()),
        (this.#n = t.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#a = new Map()),
        (this.#i = 0));
    }
    mount() {
      (this.#i++,
        this.#i === 1 &&
          ((this.#o = ym.subscribe(async (t) => {
            t && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = qc.subscribe(async (t) => {
            t && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#i--,
        this.#i === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(t) {
      return this.#e.findAll({ ...t, fetchStatus: "fetching" }).length;
    }
    isMutating(t) {
      return this.#t.findAll({ ...t, status: "pending" }).length;
    }
    getQueryData(t) {
      const n = this.defaultQueryOptions({ queryKey: t });
      return this.#e.get(n.queryHash)?.state.data;
    }
    ensureQueryData(t) {
      const n = this.defaultQueryOptions(t),
        r = this.#e.build(this, n),
        i = r.state.data;
      return i === void 0
        ? this.fetchQuery(t)
        : (t.revalidateIfStale &&
            r.isStaleByTime(Er(n.staleTime, r)) &&
            this.prefetchQuery(n),
          Promise.resolve(i));
    }
    getQueriesData(t) {
      return this.#e.findAll(t).map(({ queryKey: n, state: r }) => {
        const i = r.data;
        return [n, i];
      });
    }
    setQueryData(t, n, r) {
      const i = this.defaultQueryOptions({ queryKey: t }),
        c = this.#e.get(i.queryHash)?.state.data,
        f = MT(n, c);
      if (f !== void 0)
        return this.#e.build(this, i).setData(f, { ...r, manual: !0 });
    }
    setQueriesData(t, n, r) {
      return kt.batch(() =>
        this.#e
          .findAll(t)
          .map(({ queryKey: i }) => [i, this.setQueryData(i, n, r)]),
      );
    }
    getQueryState(t) {
      const n = this.defaultQueryOptions({ queryKey: t });
      return this.#e.get(n.queryHash)?.state;
    }
    removeQueries(t) {
      const n = this.#e;
      kt.batch(() => {
        n.findAll(t).forEach((r) => {
          n.remove(r);
        });
      });
    }
    resetQueries(t, n) {
      const r = this.#e;
      return kt.batch(
        () => (
          r.findAll(t).forEach((i) => {
            i.reset();
          }),
          this.refetchQueries({ type: "active", ...t }, n)
        ),
      );
    }
    cancelQueries(t, n = {}) {
      const r = { revert: !0, ...n },
        i = kt.batch(() => this.#e.findAll(t).map((l) => l.cancel(r)));
      return Promise.all(i).then(Jt).catch(Jt);
    }
    invalidateQueries(t, n = {}) {
      return kt.batch(
        () => (
          this.#e.findAll(t).forEach((r) => {
            r.invalidate();
          }),
          t?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...t, type: t?.refetchType ?? t?.type ?? "active" },
                n,
              )
        ),
      );
    }
    refetchQueries(t, n = {}) {
      const r = { ...n, cancelRefetch: n.cancelRefetch ?? !0 },
        i = kt.batch(() =>
          this.#e
            .findAll(t)
            .filter((l) => !l.isDisabled() && !l.isStatic())
            .map((l) => {
              let c = l.fetch(void 0, r);
              return (
                r.throwOnError || (c = c.catch(Jt)),
                l.state.fetchStatus === "paused" ? Promise.resolve() : c
              );
            }),
        );
      return Promise.all(i).then(Jt);
    }
    fetchQuery(t) {
      const n = this.defaultQueryOptions(t);
      n.retry === void 0 && (n.retry = !1);
      const r = this.#e.build(this, n);
      return r.isStaleByTime(Er(n.staleTime, r))
        ? r.fetch(n)
        : Promise.resolve(r.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(Jt).catch(Jt);
    }
    fetchInfiniteQuery(t) {
      return ((t.behavior = Ex(t.pages)), this.fetchQuery(t));
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(Jt).catch(Jt);
    }
    ensureInfiniteQueryData(t) {
      return ((t.behavior = Ex(t.pages)), this.ensureQueryData(t));
    }
    resumePausedMutations() {
      return qc.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(t) {
      this.#n = t;
    }
    setQueryDefaults(t, n) {
      this.#r.set(ss(t), { queryKey: t, defaultOptions: n });
    }
    getQueryDefaults(t) {
      const n = [...this.#r.values()],
        r = {};
      return (
        n.forEach((i) => {
          Uo(t, i.queryKey) && Object.assign(r, i.defaultOptions);
        }),
        r
      );
    }
    setMutationDefaults(t, n) {
      this.#a.set(ss(t), { mutationKey: t, defaultOptions: n });
    }
    getMutationDefaults(t) {
      const n = [...this.#a.values()],
        r = {};
      return (
        n.forEach((i) => {
          Uo(t, i.mutationKey) && Object.assign(r, i.defaultOptions);
        }),
        r
      );
    }
    defaultQueryOptions(t) {
      if (t._defaulted) return t;
      const n = {
        ...this.#n.queries,
        ...this.getQueryDefaults(t.queryKey),
        ...t,
        _defaulted: !0,
      };
      return (
        n.queryHash || (n.queryHash = mm(n.queryKey, n)),
        n.refetchOnReconnect === void 0 &&
          (n.refetchOnReconnect = n.networkMode !== "always"),
        n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
        !n.networkMode && n.persister && (n.networkMode = "offlineFirst"),
        n.queryFn === pm && (n.enabled = !1),
        n
      );
    }
    defaultMutationOptions(t) {
      return t?._defaulted
        ? t
        : {
            ...this.#n.mutations,
            ...(t?.mutationKey && this.getMutationDefaults(t.mutationKey)),
            ...t,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  f0 = y.createContext(void 0),
  bi = (t) => {
    const n = y.useContext(f0);
    if (!n)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return n;
  },
  JT = ({ client: t, children: n }) => (
    y.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t],
    ),
    d.jsx(f0.Provider, { value: t, children: n })
  ),
  h0 = y.createContext(!1),
  ej = () => y.useContext(h0);
h0.Provider;
function tj() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t,
  };
}
var nj = y.createContext(tj()),
  aj = () => y.useContext(nj),
  rj = (t, n, r) => {
    const i =
      r?.state.error && typeof t.throwOnError == "function"
        ? gm(t.throwOnError, [r.state.error, r])
        : t.throwOnError;
    (t.suspense || t.experimental_prefetchInRender || i) &&
      (n.isReset() || (t.retryOnMount = !1));
  },
  sj = (t) => {
    y.useEffect(() => {
      t.clearReset();
    }, [t]);
  },
  ij = ({
    result: t,
    errorResetBoundary: n,
    throwOnError: r,
    query: i,
    suspense: l,
  }) =>
    t.isError &&
    !n.isReset() &&
    !t.isFetching &&
    i &&
    ((l && t.data === void 0) || gm(r, [t.error, i])),
  oj = (t) => {
    if (t.suspense) {
      const r = (l) => (l === "static" ? l : Math.max(l ?? 1e3, 1e3)),
        i = t.staleTime;
      ((t.staleTime = typeof i == "function" ? (...l) => r(i(...l)) : r(i)),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
    }
  },
  lj = (t, n) => t.isLoading && t.isFetching && !n,
  cj = (t, n) => t?.suspense && n.isPending,
  Tx = (t, n, r) =>
    n.fetchOptimistic(t).catch(() => {
      r.clearReset();
    });
function uj(t, n, r) {
  const i = ej(),
    l = aj(),
    c = bi(),
    f = c.defaultQueryOptions(t);
  c.getDefaultOptions().queries?._experimental_beforeQuery?.(f);
  const h = c.getQueryCache().get(f.queryHash);
  ((f._optimisticResults = i ? "isRestoring" : "optimistic"),
    oj(f),
    rj(f, l, h),
    sj(l));
  const g = !c.getQueryCache().get(f.queryHash),
    [p] = y.useState(() => new n(c, f)),
    v = p.getOptimisticResult(f),
    b = !i && t.subscribed !== !1;
  if (
    (y.useSyncExternalStore(
      y.useCallback(
        (S) => {
          const E = b ? p.subscribe(kt.batchCalls(S)) : Jt;
          return (p.updateResult(), E);
        },
        [p, b],
      ),
      () => p.getCurrentResult(),
      () => p.getCurrentResult(),
    ),
    y.useEffect(() => {
      p.setOptions(f);
    }, [f, p]),
    cj(f, v))
  )
    throw Tx(f, p, l);
  if (
    ij({
      result: v,
      errorResetBoundary: l,
      throwOnError: f.throwOnError,
      query: h,
      suspense: f.suspense,
    })
  )
    throw v.error;
  return (
    c.getDefaultOptions().queries?._experimental_afterQuery?.(f, v),
    f.experimental_prefetchInRender &&
      !rs &&
      lj(v, i) &&
      (g ? Tx(f, p, l) : h?.promise)?.catch(Jt).finally(() => {
        p.updateResult();
      }),
    f.notifyOnChangeProps ? v : p.trackResult(v)
  );
}
function wn(t, n) {
  return uj(t, IT);
}
function ou(t, n) {
  const r = bi(),
    [i] = y.useState(() => new $T(r, t));
  y.useEffect(() => {
    i.setOptions(t);
  }, [i, t]);
  const l = y.useSyncExternalStore(
      y.useCallback((f) => i.subscribe(kt.batchCalls(f)), [i]),
      () => i.getCurrentResult(),
      () => i.getCurrentResult(),
    ),
    c = y.useCallback(
      (f, h) => {
        i.mutate(f, h).catch(Jt);
      },
      [i],
    );
  if (l.error && gm(i.options.throwOnError, [l.error])) throw l.error;
  return { ...l, mutate: c, mutateAsync: l.mutate };
}
const dj = 1,
  fj = 1e6;
let lh = 0;
function hj() {
  return ((lh = (lh + 1) % Number.MAX_SAFE_INTEGER), lh.toString());
}
const ch = new Map(),
  jx = (t) => {
    if (ch.has(t)) return;
    const n = setTimeout(() => {
      (ch.delete(t), Lo({ type: "REMOVE_TOAST", toastId: t }));
    }, fj);
    ch.set(t, n);
  },
  mj = (t, n) => {
    switch (n.type) {
      case "ADD_TOAST":
        return { ...t, toasts: [n.toast, ...t.toasts].slice(0, dj) };
      case "UPDATE_TOAST":
        return {
          ...t,
          toasts: t.toasts.map((r) =>
            r.id === n.toast.id ? { ...r, ...n.toast } : r,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: r } = n;
        return (
          r
            ? jx(r)
            : t.toasts.forEach((i) => {
                jx(i.id);
              }),
          {
            ...t,
            toasts: t.toasts.map((i) =>
              i.id === r || r === void 0 ? { ...i, open: !1 } : i,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return n.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((r) => r.id !== n.toastId) };
    }
  },
  Rc = [];
let Ac = { toasts: [] };
function Lo(t) {
  ((Ac = mj(Ac, t)),
    Rc.forEach((n) => {
      n(Ac);
    }));
}
function pj({ ...t }) {
  const n = hj(),
    r = (l) => Lo({ type: "UPDATE_TOAST", toast: { ...l, id: n } }),
    i = () => Lo({ type: "DISMISS_TOAST", toastId: n });
  return (
    Lo({
      type: "ADD_TOAST",
      toast: {
        ...t,
        id: n,
        open: !0,
        onOpenChange: (l) => {
          l || i();
        },
      },
    }),
    { id: n, dismiss: i, update: r }
  );
}
function Zo() {
  const [t, n] = y.useState(Ac);
  return (
    y.useEffect(
      () => (
        Rc.push(n),
        () => {
          const r = Rc.indexOf(n);
          r > -1 && Rc.splice(r, 1);
        }
      ),
      [t],
    ),
    {
      ...t,
      toast: pj,
      dismiss: (r) => Lo({ type: "DISMISS_TOAST", toastId: r }),
    }
  );
}
var wi = Gb();
const gj = Ib(wi);
function Oe(t, n, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (l) {
    if ((t?.(l), r === !1 || !l.defaultPrevented)) return n?.(l);
  };
}
function Cx(t, n) {
  if (typeof t == "function") return t(n);
  t != null && (t.current = n);
}
function xm(...t) {
  return (n) => {
    let r = !1;
    const i = t.map((l) => {
      const c = Cx(l, n);
      return (!r && typeof c == "function" && (r = !0), c);
    });
    if (r)
      return () => {
        for (let l = 0; l < i.length; l++) {
          const c = i[l];
          typeof c == "function" ? c() : Cx(t[l], null);
        }
      };
  };
}
function rt(...t) {
  return y.useCallback(xm(...t), t);
}
function yj(t, n) {
  const r = y.createContext(n),
    i = (c) => {
      const { children: f, ...h } = c,
        g = y.useMemo(() => h, Object.values(h));
      return d.jsx(r.Provider, { value: g, children: f });
    };
  i.displayName = t + "Provider";
  function l(c) {
    const f = y.useContext(r);
    if (f) return f;
    if (n !== void 0) return n;
    throw new Error(`\`${c}\` must be used within \`${t}\``);
  }
  return [i, l];
}
function fa(t, n = []) {
  let r = [];
  function i(c, f) {
    const h = y.createContext(f),
      g = r.length;
    r = [...r, f];
    const p = (b) => {
      const { scope: S, children: E, ...j } = b,
        _ = S?.[t]?.[g] || h,
        N = y.useMemo(() => j, Object.values(j));
      return d.jsx(_.Provider, { value: N, children: E });
    };
    p.displayName = c + "Provider";
    function v(b, S) {
      const E = S?.[t]?.[g] || h,
        j = y.useContext(E);
      if (j) return j;
      if (f !== void 0) return f;
      throw new Error(`\`${b}\` must be used within \`${c}\``);
    }
    return [p, v];
  }
  const l = () => {
    const c = r.map((f) => y.createContext(f));
    return function (h) {
      const g = h?.[t] || c;
      return y.useMemo(() => ({ [`__scope${t}`]: { ...h, [t]: g } }), [h, g]);
    };
  };
  return ((l.scopeName = t), [i, vj(l, ...n)]);
}
function vj(...t) {
  const n = t[0];
  if (t.length === 1) return n;
  const r = () => {
    const i = t.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (c) {
      const f = i.reduce((h, { useScope: g, scopeName: p }) => {
        const b = g(c)[`__scope${p}`];
        return { ...h, ...b };
      }, {});
      return y.useMemo(() => ({ [`__scope${n.scopeName}`]: f }), [f]);
    };
  };
  return ((r.scopeName = n.scopeName), r);
}
function Vo(t) {
  const n = xj(t),
    r = y.forwardRef((i, l) => {
      const { children: c, ...f } = i,
        h = y.Children.toArray(c),
        g = h.find(wj);
      if (g) {
        const p = g.props.children,
          v = h.map((b) =>
            b === g
              ? y.Children.count(p) > 1
                ? y.Children.only(null)
                : y.isValidElement(p)
                  ? p.props.children
                  : null
              : b,
          );
        return d.jsx(n, {
          ...f,
          ref: l,
          children: y.isValidElement(p) ? y.cloneElement(p, void 0, v) : null,
        });
      }
      return d.jsx(n, { ...f, ref: l, children: c });
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function xj(t) {
  const n = y.forwardRef((r, i) => {
    const { children: l, ...c } = r;
    if (y.isValidElement(l)) {
      const f = _j(l),
        h = Sj(c, l.props);
      return (
        l.type !== y.Fragment && (h.ref = i ? xm(i, f) : f),
        y.cloneElement(l, h)
      );
    }
    return y.Children.count(l) > 1 ? y.Children.only(null) : null;
  });
  return ((n.displayName = `${t}.SlotClone`), n);
}
var m0 = Symbol("radix.slottable");
function bj(t) {
  const n = ({ children: r }) => d.jsx(d.Fragment, { children: r });
  return ((n.displayName = `${t}.Slottable`), (n.__radixId = m0), n);
}
function wj(t) {
  return (
    y.isValidElement(t) &&
    typeof t.type == "function" &&
    "__radixId" in t.type &&
    t.type.__radixId === m0
  );
}
function Sj(t, n) {
  const r = { ...n };
  for (const i in n) {
    const l = t[i],
      c = n[i];
    /^on[A-Z]/.test(i)
      ? l && c
        ? (r[i] = (...h) => {
            const g = c(...h);
            return (l(...h), g);
          })
        : l && (r[i] = l)
      : i === "style"
        ? (r[i] = { ...l, ...c })
        : i === "className" && (r[i] = [l, c].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
function _j(t) {
  let n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    r = n && "isReactWarning" in n && n.isReactWarning;
  return r
    ? t.ref
    : ((n = Object.getOwnPropertyDescriptor(t, "ref")?.get),
      (r = n && "isReactWarning" in n && n.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
function bm(t) {
  const n = t + "CollectionProvider",
    [r, i] = fa(n),
    [l, c] = r(n, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (_) => {
      const { scope: N, children: R } = _,
        O = je.useRef(null),
        D = je.useRef(new Map()).current;
      return d.jsx(l, { scope: N, itemMap: D, collectionRef: O, children: R });
    };
  f.displayName = n;
  const h = t + "CollectionSlot",
    g = Vo(h),
    p = je.forwardRef((_, N) => {
      const { scope: R, children: O } = _,
        D = c(h, R),
        z = rt(N, D.collectionRef);
      return d.jsx(g, { ref: z, children: O });
    });
  p.displayName = h;
  const v = t + "CollectionItemSlot",
    b = "data-radix-collection-item",
    S = Vo(v),
    E = je.forwardRef((_, N) => {
      const { scope: R, children: O, ...D } = _,
        z = je.useRef(null),
        M = rt(N, z),
        Y = c(v, R);
      return (
        je.useEffect(
          () => (
            Y.itemMap.set(z, { ref: z, ...D }),
            () => {
              Y.itemMap.delete(z);
            }
          ),
        ),
        d.jsx(S, { [b]: "", ref: M, children: O })
      );
    });
  E.displayName = v;
  function j(_) {
    const N = c(t + "CollectionConsumer", _);
    return je.useCallback(() => {
      const O = N.collectionRef.current;
      if (!O) return [];
      const D = Array.from(O.querySelectorAll(`[${b}]`));
      return Array.from(N.itemMap.values()).sort(
        (Y, Q) => D.indexOf(Y.ref.current) - D.indexOf(Q.ref.current),
      );
    }, [N.collectionRef, N.itemMap]);
  }
  return [{ Provider: f, Slot: p, ItemSlot: E }, j, i];
}
var Ej = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  qe = Ej.reduce((t, n) => {
    const r = Vo(`Primitive.${n}`),
      i = y.forwardRef((l, c) => {
        const { asChild: f, ...h } = l,
          g = f ? r : n;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          d.jsx(g, { ...h, ref: c })
        );
      });
    return ((i.displayName = `Primitive.${n}`), { ...t, [n]: i });
  }, {});
function p0(t, n) {
  t && wi.flushSync(() => t.dispatchEvent(n));
}
function xn(t) {
  const n = y.useRef(t);
  return (
    y.useEffect(() => {
      n.current = t;
    }),
    y.useMemo(
      () =>
        (...r) =>
          n.current?.(...r),
      [],
    )
  );
}
function Nj(t, n = globalThis?.document) {
  const r = xn(t);
  y.useEffect(() => {
    const i = (l) => {
      l.key === "Escape" && r(l);
    };
    return (
      n.addEventListener("keydown", i, { capture: !0 }),
      () => n.removeEventListener("keydown", i, { capture: !0 })
    );
  }, [r, n]);
}
var Tj = "DismissableLayer",
  zh = "dismissableLayer.update",
  jj = "dismissableLayer.pointerDownOutside",
  Cj = "dismissableLayer.focusOutside",
  Ox,
  g0 = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  $o = y.forwardRef((t, n) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: c,
        onInteractOutside: f,
        onDismiss: h,
        ...g
      } = t,
      p = y.useContext(g0),
      [v, b] = y.useState(null),
      S = v?.ownerDocument ?? globalThis?.document,
      [, E] = y.useState({}),
      j = rt(n, (Q) => b(Q)),
      _ = Array.from(p.layers),
      [N] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      R = _.indexOf(N),
      O = v ? _.indexOf(v) : -1,
      D = p.layersWithOutsidePointerEventsDisabled.size > 0,
      z = O >= R,
      M = Rj((Q) => {
        const F = Q.target,
          oe = [...p.branches].some((ne) => ne.contains(F));
        !z || oe || (l?.(Q), f?.(Q), Q.defaultPrevented || h?.());
      }, S),
      Y = Aj((Q) => {
        const F = Q.target;
        [...p.branches].some((ne) => ne.contains(F)) ||
          (c?.(Q), f?.(Q), Q.defaultPrevented || h?.());
      }, S);
    return (
      Nj((Q) => {
        O === p.layers.size - 1 &&
          (i?.(Q), !Q.defaultPrevented && h && (Q.preventDefault(), h()));
      }, S),
      y.useEffect(() => {
        if (v)
          return (
            r &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ox = S.body.style.pointerEvents),
                (S.body.style.pointerEvents = "none")),
              p.layersWithOutsidePointerEventsDisabled.add(v)),
            p.layers.add(v),
            Rx(),
            () => {
              r &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (S.body.style.pointerEvents = Ox);
            }
          );
      }, [v, S, r, p]),
      y.useEffect(
        () => () => {
          v &&
            (p.layers.delete(v),
            p.layersWithOutsidePointerEventsDisabled.delete(v),
            Rx());
        },
        [v, p],
      ),
      y.useEffect(() => {
        const Q = () => E({});
        return (
          document.addEventListener(zh, Q),
          () => document.removeEventListener(zh, Q)
        );
      }, []),
      d.jsx(qe.div, {
        ...g,
        ref: j,
        style: {
          pointerEvents: D ? (z ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: Oe(t.onFocusCapture, Y.onFocusCapture),
        onBlurCapture: Oe(t.onBlurCapture, Y.onBlurCapture),
        onPointerDownCapture: Oe(
          t.onPointerDownCapture,
          M.onPointerDownCapture,
        ),
      })
    );
  });
$o.displayName = Tj;
var Oj = "DismissableLayerBranch",
  y0 = y.forwardRef((t, n) => {
    const r = y.useContext(g0),
      i = y.useRef(null),
      l = rt(n, i);
    return (
      y.useEffect(() => {
        const c = i.current;
        if (c)
          return (
            r.branches.add(c),
            () => {
              r.branches.delete(c);
            }
          );
      }, [r.branches]),
      d.jsx(qe.div, { ...t, ref: l })
    );
  });
y0.displayName = Oj;
function Rj(t, n = globalThis?.document) {
  const r = xn(t),
    i = y.useRef(!1),
    l = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const c = (h) => {
          if (h.target && !i.current) {
            let g = function () {
              v0(jj, r, p, { discrete: !0 });
            };
            const p = { originalEvent: h };
            h.pointerType === "touch"
              ? (n.removeEventListener("click", l.current),
                (l.current = g),
                n.addEventListener("click", l.current, { once: !0 }))
              : g();
          } else n.removeEventListener("click", l.current);
          i.current = !1;
        },
        f = window.setTimeout(() => {
          n.addEventListener("pointerdown", c);
        }, 0);
      return () => {
        (window.clearTimeout(f),
          n.removeEventListener("pointerdown", c),
          n.removeEventListener("click", l.current));
      };
    }, [n, r]),
    { onPointerDownCapture: () => (i.current = !0) }
  );
}
function Aj(t, n = globalThis?.document) {
  const r = xn(t),
    i = y.useRef(!1);
  return (
    y.useEffect(() => {
      const l = (c) => {
        c.target &&
          !i.current &&
          v0(Cj, r, { originalEvent: c }, { discrete: !1 });
      };
      return (
        n.addEventListener("focusin", l),
        () => n.removeEventListener("focusin", l)
      );
    }, [n, r]),
    {
      onFocusCapture: () => (i.current = !0),
      onBlurCapture: () => (i.current = !1),
    }
  );
}
function Rx() {
  const t = new CustomEvent(zh);
  document.dispatchEvent(t);
}
function v0(t, n, r, { discrete: i }) {
  const l = r.originalEvent.target,
    c = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: r });
  (n && l.addEventListener(t, n, { once: !0 }),
    i ? p0(l, c) : l.dispatchEvent(c));
}
var Mj = $o,
  Dj = y0,
  Ct = globalThis?.document ? y.useLayoutEffect : () => {},
  kj = "Portal",
  Xo = y.forwardRef((t, n) => {
    const { container: r, ...i } = t,
      [l, c] = y.useState(!1);
    Ct(() => c(!0), []);
    const f = r || (l && globalThis?.document?.body);
    return f ? gj.createPortal(d.jsx(qe.div, { ...i, ref: n }), f) : null;
  });
Xo.displayName = kj;
function Lj(t, n) {
  return y.useReducer((r, i) => n[r][i] ?? r, t);
}
var Ha = (t) => {
  const { present: n, children: r } = t,
    i = zj(n),
    l =
      typeof r == "function" ? r({ present: i.isPresent }) : y.Children.only(r),
    c = rt(i.ref, qj(l));
  return typeof r == "function" || i.isPresent
    ? y.cloneElement(l, { ref: c })
    : null;
};
Ha.displayName = "Presence";
function zj(t) {
  const [n, r] = y.useState(),
    i = y.useRef(null),
    l = y.useRef(t),
    c = y.useRef("none"),
    f = t ? "mounted" : "unmounted",
    [h, g] = Lj(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    y.useEffect(() => {
      const p = vc(i.current);
      c.current = h === "mounted" ? p : "none";
    }, [h]),
    Ct(() => {
      const p = i.current,
        v = l.current;
      if (v !== t) {
        const S = c.current,
          E = vc(p);
        (t
          ? g("MOUNT")
          : E === "none" || p?.display === "none"
            ? g("UNMOUNT")
            : g(v && S !== E ? "ANIMATION_OUT" : "UNMOUNT"),
          (l.current = t));
      }
    }, [t, g]),
    Ct(() => {
      if (n) {
        let p;
        const v = n.ownerDocument.defaultView ?? window,
          b = (E) => {
            const _ = vc(i.current).includes(CSS.escape(E.animationName));
            if (E.target === n && _ && (g("ANIMATION_END"), !l.current)) {
              const N = n.style.animationFillMode;
              ((n.style.animationFillMode = "forwards"),
                (p = v.setTimeout(() => {
                  n.style.animationFillMode === "forwards" &&
                    (n.style.animationFillMode = N);
                })));
            }
          },
          S = (E) => {
            E.target === n && (c.current = vc(i.current));
          };
        return (
          n.addEventListener("animationstart", S),
          n.addEventListener("animationcancel", b),
          n.addEventListener("animationend", b),
          () => {
            (v.clearTimeout(p),
              n.removeEventListener("animationstart", S),
              n.removeEventListener("animationcancel", b),
              n.removeEventListener("animationend", b));
          }
        );
      } else g("ANIMATION_END");
    }, [n, g]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: y.useCallback((p) => {
        ((i.current = p ? getComputedStyle(p) : null), r(p));
      }, []),
    }
  );
}
function vc(t) {
  return t?.animationName || "none";
}
function qj(t) {
  let n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    r = n && "isReactWarning" in n && n.isReactWarning;
  return r
    ? t.ref
    : ((n = Object.getOwnPropertyDescriptor(t, "ref")?.get),
      (r = n && "isReactWarning" in n && n.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
var Uj = ru[" useInsertionEffect ".trim().toString()] || Ct;
function Tr({ prop: t, defaultProp: n, onChange: r = () => {}, caller: i }) {
  const [l, c, f] = Vj({ defaultProp: n, onChange: r }),
    h = t !== void 0,
    g = h ? t : l;
  {
    const v = y.useRef(t !== void 0);
    y.useEffect(() => {
      const b = v.current;
      (b !== h &&
        console.warn(
          `${i} is changing from ${b ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (v.current = h));
    }, [h, i]);
  }
  const p = y.useCallback(
    (v) => {
      if (h) {
        const b = Pj(v) ? v(t) : v;
        b !== t && f.current?.(b);
      } else c(v);
    },
    [h, t, c, f],
  );
  return [g, p];
}
function Vj({ defaultProp: t, onChange: n }) {
  const [r, i] = y.useState(t),
    l = y.useRef(r),
    c = y.useRef(n);
  return (
    Uj(() => {
      c.current = n;
    }, [n]),
    y.useEffect(() => {
      l.current !== r && (c.current?.(r), (l.current = r));
    }, [r, l]),
    [r, i, c]
  );
}
function Pj(t) {
  return typeof t == "function";
}
var x0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Hj = "VisuallyHidden",
  lu = y.forwardRef((t, n) =>
    d.jsx(qe.span, { ...t, ref: n, style: { ...x0, ...t.style } }),
  );
lu.displayName = Hj;
var Bj = lu,
  wm = "ToastProvider",
  [Sm, Fj, Ij] = bm("Toast"),
  [b0] = fa("Toast", [Ij]),
  [Gj, cu] = b0(wm),
  w0 = (t) => {
    const {
        __scopeToast: n,
        label: r = "Notification",
        duration: i = 5e3,
        swipeDirection: l = "right",
        swipeThreshold: c = 50,
        children: f,
      } = t,
      [h, g] = y.useState(null),
      [p, v] = y.useState(0),
      b = y.useRef(!1),
      S = y.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${wm}\`. Expected non-empty \`string\`.`,
        ),
      d.jsx(Sm.Provider, {
        scope: n,
        children: d.jsx(Gj, {
          scope: n,
          label: r,
          duration: i,
          swipeDirection: l,
          swipeThreshold: c,
          toastCount: p,
          viewport: h,
          onViewportChange: g,
          onToastAdd: y.useCallback(() => v((E) => E + 1), []),
          onToastRemove: y.useCallback(() => v((E) => E - 1), []),
          isFocusedToastEscapeKeyDownRef: b,
          isClosePausedRef: S,
          children: f,
        }),
      })
    );
  };
w0.displayName = wm;
var S0 = "ToastViewport",
  Yj = ["F8"],
  qh = "toast.viewportPause",
  Uh = "toast.viewportResume",
  _0 = y.forwardRef((t, n) => {
    const {
        __scopeToast: r,
        hotkey: i = Yj,
        label: l = "Notifications ({hotkey})",
        ...c
      } = t,
      f = cu(S0, r),
      h = Fj(r),
      g = y.useRef(null),
      p = y.useRef(null),
      v = y.useRef(null),
      b = y.useRef(null),
      S = rt(n, b, f.onViewportChange),
      E = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      j = f.toastCount > 0;
    (y.useEffect(() => {
      const N = (R) => {
        i.length !== 0 &&
          i.every((D) => R[D] || R.code === D) &&
          b.current?.focus();
      };
      return (
        document.addEventListener("keydown", N),
        () => document.removeEventListener("keydown", N)
      );
    }, [i]),
      y.useEffect(() => {
        const N = g.current,
          R = b.current;
        if (j && N && R) {
          const O = () => {
              if (!f.isClosePausedRef.current) {
                const Y = new CustomEvent(qh);
                (R.dispatchEvent(Y), (f.isClosePausedRef.current = !0));
              }
            },
            D = () => {
              if (f.isClosePausedRef.current) {
                const Y = new CustomEvent(Uh);
                (R.dispatchEvent(Y), (f.isClosePausedRef.current = !1));
              }
            },
            z = (Y) => {
              !N.contains(Y.relatedTarget) && D();
            },
            M = () => {
              N.contains(document.activeElement) || D();
            };
          return (
            N.addEventListener("focusin", O),
            N.addEventListener("focusout", z),
            N.addEventListener("pointermove", O),
            N.addEventListener("pointerleave", M),
            window.addEventListener("blur", O),
            window.addEventListener("focus", D),
            () => {
              (N.removeEventListener("focusin", O),
                N.removeEventListener("focusout", z),
                N.removeEventListener("pointermove", O),
                N.removeEventListener("pointerleave", M),
                window.removeEventListener("blur", O),
                window.removeEventListener("focus", D));
            }
          );
        }
      }, [j, f.isClosePausedRef]));
    const _ = y.useCallback(
      ({ tabbingDirection: N }) => {
        const O = h().map((D) => {
          const z = D.ref.current,
            M = [z, ...sC(z)];
          return N === "forwards" ? M : M.reverse();
        });
        return (N === "forwards" ? O.reverse() : O).flat();
      },
      [h],
    );
    return (
      y.useEffect(() => {
        const N = b.current;
        if (N) {
          const R = (O) => {
            const D = O.altKey || O.ctrlKey || O.metaKey;
            if (O.key === "Tab" && !D) {
              const M = document.activeElement,
                Y = O.shiftKey;
              if (O.target === N && Y) {
                p.current?.focus();
                return;
              }
              const oe = _({ tabbingDirection: Y ? "backwards" : "forwards" }),
                ne = oe.findIndex((he) => he === M);
              uh(oe.slice(ne + 1))
                ? O.preventDefault()
                : Y
                  ? p.current?.focus()
                  : v.current?.focus();
            }
          };
          return (
            N.addEventListener("keydown", R),
            () => N.removeEventListener("keydown", R)
          );
        }
      }, [h, _]),
      d.jsxs(Dj, {
        ref: g,
        role: "region",
        "aria-label": l.replace("{hotkey}", E),
        tabIndex: -1,
        style: { pointerEvents: j ? void 0 : "none" },
        children: [
          j &&
            d.jsx(Vh, {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const N = _({ tabbingDirection: "forwards" });
                uh(N);
              },
            }),
          d.jsx(Sm.Slot, {
            scope: r,
            children: d.jsx(qe.ol, { tabIndex: -1, ...c, ref: S }),
          }),
          j &&
            d.jsx(Vh, {
              ref: v,
              onFocusFromOutsideViewport: () => {
                const N = _({ tabbingDirection: "backwards" });
                uh(N);
              },
            }),
        ],
      })
    );
  });
_0.displayName = S0;
var E0 = "ToastFocusProxy",
  Vh = y.forwardRef((t, n) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: i, ...l } = t,
      c = cu(E0, r);
    return d.jsx(lu, {
      tabIndex: 0,
      ...l,
      ref: n,
      style: { position: "fixed" },
      onFocus: (f) => {
        const h = f.relatedTarget;
        !c.viewport?.contains(h) && i();
      },
    });
  });
Vh.displayName = E0;
var Wo = "Toast",
  Qj = "toast.swipeStart",
  Kj = "toast.swipeMove",
  Zj = "toast.swipeCancel",
  $j = "toast.swipeEnd",
  N0 = y.forwardRef((t, n) => {
    const { forceMount: r, open: i, defaultOpen: l, onOpenChange: c, ...f } = t,
      [h, g] = Tr({ prop: i, defaultProp: l ?? !0, onChange: c, caller: Wo });
    return d.jsx(Ha, {
      present: r || h,
      children: d.jsx(Jj, {
        open: h,
        ...f,
        ref: n,
        onClose: () => g(!1),
        onPause: xn(t.onPause),
        onResume: xn(t.onResume),
        onSwipeStart: Oe(t.onSwipeStart, (p) => {
          p.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Oe(t.onSwipeMove, (p) => {
          const { x: v, y: b } = p.detail.delta;
          (p.currentTarget.setAttribute("data-swipe", "move"),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${v}px`,
            ),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${b}px`,
            ));
        }),
        onSwipeCancel: Oe(t.onSwipeCancel, (p) => {
          (p.currentTarget.setAttribute("data-swipe", "cancel"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: Oe(t.onSwipeEnd, (p) => {
          const { x: v, y: b } = p.detail.delta;
          (p.currentTarget.setAttribute("data-swipe", "end"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${v}px`,
            ),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${b}px`,
            ),
            g(!1));
        }),
      }),
    });
  });
N0.displayName = Wo;
var [Xj, Wj] = b0(Wo, { onClose() {} }),
  Jj = y.forwardRef((t, n) => {
    const {
        __scopeToast: r,
        type: i = "foreground",
        duration: l,
        open: c,
        onClose: f,
        onEscapeKeyDown: h,
        onPause: g,
        onResume: p,
        onSwipeStart: v,
        onSwipeMove: b,
        onSwipeCancel: S,
        onSwipeEnd: E,
        ...j
      } = t,
      _ = cu(Wo, r),
      [N, R] = y.useState(null),
      O = rt(n, (ee) => R(ee)),
      D = y.useRef(null),
      z = y.useRef(null),
      M = l || _.duration,
      Y = y.useRef(0),
      Q = y.useRef(M),
      F = y.useRef(0),
      { onToastAdd: oe, onToastRemove: ne } = _,
      he = xn(() => {
        (N?.contains(document.activeElement) && _.viewport?.focus(), f());
      }),
      J = y.useCallback(
        (ee) => {
          !ee ||
            ee === 1 / 0 ||
            (window.clearTimeout(F.current),
            (Y.current = new Date().getTime()),
            (F.current = window.setTimeout(he, ee)));
        },
        [he],
      );
    (y.useEffect(() => {
      const ee = _.viewport;
      if (ee) {
        const ce = () => {
            (J(Q.current), p?.());
          },
          L = () => {
            const G = new Date().getTime() - Y.current;
            ((Q.current = Q.current - G),
              window.clearTimeout(F.current),
              g?.());
          };
        return (
          ee.addEventListener(qh, L),
          ee.addEventListener(Uh, ce),
          () => {
            (ee.removeEventListener(qh, L), ee.removeEventListener(Uh, ce));
          }
        );
      }
    }, [_.viewport, M, g, p, J]),
      y.useEffect(() => {
        c && !_.isClosePausedRef.current && J(M);
      }, [c, M, _.isClosePausedRef, J]),
      y.useEffect(() => (oe(), () => ne()), [oe, ne]));
    const se = y.useMemo(() => (N ? M0(N) : null), [N]);
    return _.viewport
      ? d.jsxs(d.Fragment, {
          children: [
            se &&
              d.jsx(eC, {
                __scopeToast: r,
                role: "status",
                "aria-live": i === "foreground" ? "assertive" : "polite",
                children: se,
              }),
            d.jsx(Xj, {
              scope: r,
              onClose: he,
              children: wi.createPortal(
                d.jsx(Sm.ItemSlot, {
                  scope: r,
                  children: d.jsx(Mj, {
                    asChild: !0,
                    onEscapeKeyDown: Oe(h, () => {
                      (_.isFocusedToastEscapeKeyDownRef.current || he(),
                        (_.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: d.jsx(qe.li, {
                      tabIndex: 0,
                      "data-state": c ? "open" : "closed",
                      "data-swipe-direction": _.swipeDirection,
                      ...j,
                      ref: O,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...t.style,
                      },
                      onKeyDown: Oe(t.onKeyDown, (ee) => {
                        ee.key === "Escape" &&
                          (h?.(ee.nativeEvent),
                          ee.nativeEvent.defaultPrevented ||
                            ((_.isFocusedToastEscapeKeyDownRef.current = !0),
                            he()));
                      }),
                      onPointerDown: Oe(t.onPointerDown, (ee) => {
                        ee.button === 0 &&
                          (D.current = { x: ee.clientX, y: ee.clientY });
                      }),
                      onPointerMove: Oe(t.onPointerMove, (ee) => {
                        if (!D.current) return;
                        const ce = ee.clientX - D.current.x,
                          L = ee.clientY - D.current.y,
                          G = !!z.current,
                          W = ["left", "right"].includes(_.swipeDirection),
                          ge = ["left", "up"].includes(_.swipeDirection)
                            ? Math.min
                            : Math.max,
                          T = W ? ge(0, ce) : 0,
                          Z = W ? 0 : ge(0, L),
                          ie = ee.pointerType === "touch" ? 10 : 2,
                          ae = { x: T, y: Z },
                          me = { originalEvent: ee, delta: ae };
                        G
                          ? ((z.current = ae), xc(Kj, b, me, { discrete: !1 }))
                          : Ax(ae, _.swipeDirection, ie)
                            ? ((z.current = ae),
                              xc(Qj, v, me, { discrete: !1 }),
                              ee.target.setPointerCapture(ee.pointerId))
                            : (Math.abs(ce) > ie || Math.abs(L) > ie) &&
                              (D.current = null);
                      }),
                      onPointerUp: Oe(t.onPointerUp, (ee) => {
                        const ce = z.current,
                          L = ee.target;
                        if (
                          (L.hasPointerCapture(ee.pointerId) &&
                            L.releasePointerCapture(ee.pointerId),
                          (z.current = null),
                          (D.current = null),
                          ce)
                        ) {
                          const G = ee.currentTarget,
                            W = { originalEvent: ee, delta: ce };
                          (Ax(ce, _.swipeDirection, _.swipeThreshold)
                            ? xc($j, E, W, { discrete: !0 })
                            : xc(Zj, S, W, { discrete: !0 }),
                            G.addEventListener(
                              "click",
                              (ge) => ge.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                _.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  eC = (t) => {
    const { __scopeToast: n, children: r, ...i } = t,
      l = cu(Wo, n),
      [c, f] = y.useState(!1),
      [h, g] = y.useState(!1);
    return (
      aC(() => f(!0)),
      y.useEffect(() => {
        const p = window.setTimeout(() => g(!0), 1e3);
        return () => window.clearTimeout(p);
      }, []),
      h
        ? null
        : d.jsx(Xo, {
            asChild: !0,
            children: d.jsx(lu, {
              ...i,
              children:
                c && d.jsxs(d.Fragment, { children: [l.label, " ", r] }),
            }),
          })
    );
  },
  tC = "ToastTitle",
  T0 = y.forwardRef((t, n) => {
    const { __scopeToast: r, ...i } = t;
    return d.jsx(qe.div, { ...i, ref: n });
  });
T0.displayName = tC;
var nC = "ToastDescription",
  j0 = y.forwardRef((t, n) => {
    const { __scopeToast: r, ...i } = t;
    return d.jsx(qe.div, { ...i, ref: n });
  });
j0.displayName = nC;
var C0 = "ToastAction",
  O0 = y.forwardRef((t, n) => {
    const { altText: r, ...i } = t;
    return r.trim()
      ? d.jsx(A0, {
          altText: r,
          asChild: !0,
          children: d.jsx(_m, { ...i, ref: n }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${C0}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
O0.displayName = C0;
var R0 = "ToastClose",
  _m = y.forwardRef((t, n) => {
    const { __scopeToast: r, ...i } = t,
      l = Wj(R0, r);
    return d.jsx(A0, {
      asChild: !0,
      children: d.jsx(qe.button, {
        type: "button",
        ...i,
        ref: n,
        onClick: Oe(t.onClick, l.onClose),
      }),
    });
  });
_m.displayName = R0;
var A0 = y.forwardRef((t, n) => {
  const { __scopeToast: r, altText: i, ...l } = t;
  return d.jsx(qe.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": i || void 0,
    ...l,
    ref: n,
  });
});
function M0(t) {
  const n = [];
  return (
    Array.from(t.childNodes).forEach((i) => {
      if (
        (i.nodeType === i.TEXT_NODE && i.textContent && n.push(i.textContent),
        rC(i))
      ) {
        const l = i.ariaHidden || i.hidden || i.style.display === "none",
          c = i.dataset.radixToastAnnounceExclude === "";
        if (!l)
          if (c) {
            const f = i.dataset.radixToastAnnounceAlt;
            f && n.push(f);
          } else n.push(...M0(i));
      }
    }),
    n
  );
}
function xc(t, n, r, { discrete: i }) {
  const l = r.originalEvent.currentTarget,
    c = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: r });
  (n && l.addEventListener(t, n, { once: !0 }),
    i ? p0(l, c) : l.dispatchEvent(c));
}
var Ax = (t, n, r = 0) => {
  const i = Math.abs(t.x),
    l = Math.abs(t.y),
    c = i > l;
  return n === "left" || n === "right" ? c && i > r : !c && l > r;
};
function aC(t = () => {}) {
  const n = xn(t);
  Ct(() => {
    let r = 0,
      i = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (i = window.requestAnimationFrame(n)),
      )),
      () => {
        (window.cancelAnimationFrame(r), window.cancelAnimationFrame(i));
      }
    );
  }, [n]);
}
function rC(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function sC(t) {
  const n = [],
    r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const l = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || l
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) n.push(r.currentNode);
  return n;
}
function uh(t) {
  const n = document.activeElement;
  return t.some((r) =>
    r === n ? !0 : (r.focus(), document.activeElement !== n),
  );
}
var iC = w0,
  D0 = _0,
  k0 = N0,
  L0 = T0,
  z0 = j0,
  q0 = O0,
  U0 = _m;
function V0(t) {
  var n,
    r,
    i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var l = t.length;
      for (n = 0; n < l; n++)
        t[n] && (r = V0(t[n])) && (i && (i += " "), (i += r));
    } else for (r in t) t[r] && (i && (i += " "), (i += r));
  return i;
}
function P0() {
  for (var t, n, r = 0, i = "", l = arguments.length; r < l; r++)
    (t = arguments[r]) && (n = V0(t)) && (i && (i += " "), (i += n));
  return i;
}
const Mx = (t) => (typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t),
  Dx = P0,
  Si = (t, n) => (r) => {
    var i;
    if (n?.variants == null) return Dx(t, r?.class, r?.className);
    const { variants: l, defaultVariants: c } = n,
      f = Object.keys(l).map((p) => {
        const v = r?.[p],
          b = c?.[p];
        if (v === null) return null;
        const S = Mx(v) || Mx(b);
        return l[p][S];
      }),
      h =
        r &&
        Object.entries(r).reduce((p, v) => {
          let [b, S] = v;
          return (S === void 0 || (p[b] = S), p);
        }, {}),
      g =
        n == null || (i = n.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((p, v) => {
              let { class: b, className: S, ...E } = v;
              return Object.entries(E).every((j) => {
                let [_, N] = j;
                return Array.isArray(N)
                  ? N.includes({ ...c, ...h }[_])
                  : { ...c, ...h }[_] === N;
              })
                ? [...p, b, S]
                : p;
            }, []);
    return Dx(t, f, g, r?.class, r?.className);
  };
const oC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  lC = (t) =>
    t.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, r, i) =>
      i ? i.toUpperCase() : r.toLowerCase(),
    ),
  kx = (t) => {
    const n = lC(t);
    return n.charAt(0).toUpperCase() + n.slice(1);
  },
  H0 = (...t) =>
    t
      .filter((n, r, i) => !!n && n.trim() !== "" && i.indexOf(n) === r)
      .join(" ")
      .trim(),
  cC = (t) => {
    for (const n in t)
      if (n.startsWith("aria-") || n === "role" || n === "title") return !0;
  };
var uC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const dC = y.forwardRef(
  (
    {
      color: t = "currentColor",
      size: n = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: i,
      className: l = "",
      children: c,
      iconNode: f,
      ...h
    },
    g,
  ) =>
    y.createElement(
      "svg",
      {
        ref: g,
        ...uC,
        width: n,
        height: n,
        stroke: t,
        strokeWidth: i ? (Number(r) * 24) / Number(n) : r,
        className: H0("lucide", l),
        ...(!c && !cC(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...f.map(([p, v]) => y.createElement(p, v)),
        ...(Array.isArray(c) ? c : [c]),
      ],
    ),
);
const ut = (t, n) => {
  const r = y.forwardRef(({ className: i, ...l }, c) =>
    y.createElement(dC, {
      ref: c,
      iconNode: n,
      className: H0(`lucide-${oC(kx(t))}`, `lucide-${t}`, i),
      ...l,
    }),
  );
  return ((r.displayName = kx(t)), r);
};
const fC = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Po = ut("arrow-right", fC);
const hC = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  Em = ut("book-open", hC);
const mC = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  dh = ut("calendar", mC);
const pC = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  gC = ut("check", pC);
const yC = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  B0 = ut("chevron-down", yC);
const vC = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  xC = ut("chevron-right", vC);
const bC = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  wC = ut("chevron-up", bC);
const SC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  _C = ut("circle-alert", SC);
const EC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Uc = ut("circle-check", EC);
const NC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M8 12h8", key: "1wcyev" }],
    ["path", { d: "M12 8v8", key: "napkw2" }],
  ],
  TC = ut("circle-plus", NC);
const jC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  CC = ut("circle-x", jC);
const OC = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]],
  RC = ut("circle", OC);
const AC = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  li = ut("clock", AC);
const MC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  Sr = ut("globe", MC);
const DC = [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0",
      },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
  ],
  Ho = ut("graduation-cap", DC);
const kC = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1",
      },
    ],
  ],
  LC = ut("house", kC);
const zC = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  La = ut("loader-circle", zC);
const qC = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  _r = ut("map-pin", qC);
const UC = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  uu = ut("message-square", UC);
const VC = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ],
  PC = ut("panel-left", VC);
const HC = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  Nm = ut("search", HC);
const BC = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  FC = ut("send", BC);
const IC = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  Tm = ut("star", IC);
const GC = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  YC = ut("trending-up", GC);
const QC = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
  ],
  F0 = ut("user-plus", QC);
const KC = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  I0 = ut("users", KC);
const ZC = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  jm = ut("x", ZC),
  $C = (t, n) => {
    const r = new Array(t.length + n.length);
    for (let i = 0; i < t.length; i++) r[i] = t[i];
    for (let i = 0; i < n.length; i++) r[t.length + i] = n[i];
    return r;
  },
  XC = (t, n) => ({ classGroupId: t, validator: n }),
  G0 = (t = new Map(), n = null, r) => ({
    nextPart: t,
    validators: n,
    classGroupId: r,
  }),
  Vc = "-",
  Lx = [],
  WC = "arbitrary..",
  JC = (t) => {
    const n = tO(t),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: i } = t;
    return {
      getClassGroupId: (f) => {
        if (f.startsWith("[") && f.endsWith("]")) return eO(f);
        const h = f.split(Vc),
          g = h[0] === "" && h.length > 1 ? 1 : 0;
        return Y0(h, g, n);
      },
      getConflictingClassGroupIds: (f, h) => {
        if (h) {
          const g = i[f],
            p = r[f];
          return g ? (p ? $C(p, g) : g) : p || Lx;
        }
        return r[f] || Lx;
      },
    };
  },
  Y0 = (t, n, r) => {
    if (t.length - n === 0) return r.classGroupId;
    const l = t[n],
      c = r.nextPart.get(l);
    if (c) {
      const p = Y0(t, n + 1, c);
      if (p) return p;
    }
    const f = r.validators;
    if (f === null) return;
    const h = n === 0 ? t.join(Vc) : t.slice(n).join(Vc),
      g = f.length;
    for (let p = 0; p < g; p++) {
      const v = f[p];
      if (v.validator(h)) return v.classGroupId;
    }
  },
  eO = (t) =>
    t.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const n = t.slice(1, -1),
            r = n.indexOf(":"),
            i = n.slice(0, r);
          return i ? WC + i : void 0;
        })(),
  tO = (t) => {
    const { theme: n, classGroups: r } = t;
    return nO(r, n);
  },
  nO = (t, n) => {
    const r = G0();
    for (const i in t) {
      const l = t[i];
      Cm(l, r, i, n);
    }
    return r;
  },
  Cm = (t, n, r, i) => {
    const l = t.length;
    for (let c = 0; c < l; c++) {
      const f = t[c];
      aO(f, n, r, i);
    }
  },
  aO = (t, n, r, i) => {
    if (typeof t == "string") {
      rO(t, n, r);
      return;
    }
    if (typeof t == "function") {
      sO(t, n, r, i);
      return;
    }
    iO(t, n, r, i);
  },
  rO = (t, n, r) => {
    const i = t === "" ? n : Q0(n, t);
    i.classGroupId = r;
  },
  sO = (t, n, r, i) => {
    if (oO(t)) {
      Cm(t(i), n, r, i);
      return;
    }
    (n.validators === null && (n.validators = []), n.validators.push(XC(r, t)));
  },
  iO = (t, n, r, i) => {
    const l = Object.entries(t),
      c = l.length;
    for (let f = 0; f < c; f++) {
      const [h, g] = l[f];
      Cm(g, Q0(n, h), r, i);
    }
  },
  Q0 = (t, n) => {
    let r = t;
    const i = n.split(Vc),
      l = i.length;
    for (let c = 0; c < l; c++) {
      const f = i[c];
      let h = r.nextPart.get(f);
      (h || ((h = G0()), r.nextPart.set(f, h)), (r = h));
    }
    return r;
  },
  oO = (t) => "isThemeGetter" in t && t.isThemeGetter === !0,
  lO = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let n = 0,
      r = Object.create(null),
      i = Object.create(null);
    const l = (c, f) => {
      ((r[c] = f), n++, n > t && ((n = 0), (i = r), (r = Object.create(null))));
    };
    return {
      get(c) {
        let f = r[c];
        if (f !== void 0) return f;
        if ((f = i[c]) !== void 0) return (l(c, f), f);
      },
      set(c, f) {
        c in r ? (r[c] = f) : l(c, f);
      },
    };
  },
  Ph = "!",
  zx = ":",
  cO = [],
  qx = (t, n, r, i, l) => ({
    modifiers: t,
    hasImportantModifier: n,
    baseClassName: r,
    maybePostfixModifierPosition: i,
    isExternal: l,
  }),
  uO = (t) => {
    const { prefix: n, experimentalParseClassName: r } = t;
    let i = (l) => {
      const c = [];
      let f = 0,
        h = 0,
        g = 0,
        p;
      const v = l.length;
      for (let _ = 0; _ < v; _++) {
        const N = l[_];
        if (f === 0 && h === 0) {
          if (N === zx) {
            (c.push(l.slice(g, _)), (g = _ + 1));
            continue;
          }
          if (N === "/") {
            p = _;
            continue;
          }
        }
        N === "[" ? f++ : N === "]" ? f-- : N === "(" ? h++ : N === ")" && h--;
      }
      const b = c.length === 0 ? l : l.slice(g);
      let S = b,
        E = !1;
      b.endsWith(Ph)
        ? ((S = b.slice(0, -1)), (E = !0))
        : b.startsWith(Ph) && ((S = b.slice(1)), (E = !0));
      const j = p && p > g ? p - g : void 0;
      return qx(c, E, S, j);
    };
    if (n) {
      const l = n + zx,
        c = i;
      i = (f) =>
        f.startsWith(l) ? c(f.slice(l.length)) : qx(cO, !1, f, void 0, !0);
    }
    if (r) {
      const l = i;
      i = (c) => r({ className: c, parseClassName: l });
    }
    return i;
  },
  dO = (t) => {
    const n = new Map();
    return (
      t.orderSensitiveModifiers.forEach((r, i) => {
        n.set(r, 1e6 + i);
      }),
      (r) => {
        const i = [];
        let l = [];
        for (let c = 0; c < r.length; c++) {
          const f = r[c],
            h = f[0] === "[",
            g = n.has(f);
          h || g
            ? (l.length > 0 && (l.sort(), i.push(...l), (l = [])), i.push(f))
            : l.push(f);
        }
        return (l.length > 0 && (l.sort(), i.push(...l)), i);
      }
    );
  },
  fO = (t) => ({
    cache: lO(t.cacheSize),
    parseClassName: uO(t),
    sortModifiers: dO(t),
    ...JC(t),
  }),
  hO = /\s+/,
  mO = (t, n) => {
    const {
        parseClassName: r,
        getClassGroupId: i,
        getConflictingClassGroupIds: l,
        sortModifiers: c,
      } = n,
      f = [],
      h = t.trim().split(hO);
    let g = "";
    for (let p = h.length - 1; p >= 0; p -= 1) {
      const v = h[p],
        {
          isExternal: b,
          modifiers: S,
          hasImportantModifier: E,
          baseClassName: j,
          maybePostfixModifierPosition: _,
        } = r(v);
      if (b) {
        g = v + (g.length > 0 ? " " + g : g);
        continue;
      }
      let N = !!_,
        R = i(N ? j.substring(0, _) : j);
      if (!R) {
        if (!N) {
          g = v + (g.length > 0 ? " " + g : g);
          continue;
        }
        if (((R = i(j)), !R)) {
          g = v + (g.length > 0 ? " " + g : g);
          continue;
        }
        N = !1;
      }
      const O = S.length === 0 ? "" : S.length === 1 ? S[0] : c(S).join(":"),
        D = E ? O + Ph : O,
        z = D + R;
      if (f.indexOf(z) > -1) continue;
      f.push(z);
      const M = l(R, N);
      for (let Y = 0; Y < M.length; ++Y) {
        const Q = M[Y];
        f.push(D + Q);
      }
      g = v + (g.length > 0 ? " " + g : g);
    }
    return g;
  },
  pO = (...t) => {
    let n = 0,
      r,
      i,
      l = "";
    for (; n < t.length; )
      (r = t[n++]) && (i = K0(r)) && (l && (l += " "), (l += i));
    return l;
  },
  K0 = (t) => {
    if (typeof t == "string") return t;
    let n,
      r = "";
    for (let i = 0; i < t.length; i++)
      t[i] && (n = K0(t[i])) && (r && (r += " "), (r += n));
    return r;
  },
  gO = (t, ...n) => {
    let r, i, l, c;
    const f = (g) => {
        const p = n.reduce((v, b) => b(v), t());
        return (
          (r = fO(p)),
          (i = r.cache.get),
          (l = r.cache.set),
          (c = h),
          h(g)
        );
      },
      h = (g) => {
        const p = i(g);
        if (p) return p;
        const v = mO(g, r);
        return (l(g, v), v);
      };
    return ((c = f), (...g) => c(pO(...g)));
  },
  yO = [],
  At = (t) => {
    const n = (r) => r[t] || yO;
    return ((n.isThemeGetter = !0), n);
  },
  Z0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  $0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  vO = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  xO = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  bO =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  wO = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  SO = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  _O =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  gr = (t) => vO.test(t),
  Pe = (t) => !!t && !Number.isNaN(Number(t)),
  yr = (t) => !!t && Number.isInteger(Number(t)),
  fh = (t) => t.endsWith("%") && Pe(t.slice(0, -1)),
  Aa = (t) => xO.test(t),
  X0 = () => !0,
  EO = (t) => bO.test(t) && !wO.test(t),
  Om = () => !1,
  NO = (t) => SO.test(t),
  TO = (t) => _O.test(t),
  jO = (t) => !be(t) && !Se(t),
  CO = (t) => Mr(t, ew, Om),
  be = (t) => Z0.test(t),
  Wr = (t) => Mr(t, tw, EO),
  Ux = (t) => Mr(t, zO, Pe),
  OO = (t) => Mr(t, aw, X0),
  RO = (t) => Mr(t, nw, Om),
  Vx = (t) => Mr(t, W0, Om),
  AO = (t) => Mr(t, J0, TO),
  bc = (t) => Mr(t, rw, NO),
  Se = (t) => $0.test(t),
  jo = (t) => hs(t, tw),
  MO = (t) => hs(t, nw),
  Px = (t) => hs(t, W0),
  DO = (t) => hs(t, ew),
  kO = (t) => hs(t, J0),
  wc = (t) => hs(t, rw, !0),
  LO = (t) => hs(t, aw, !0),
  Mr = (t, n, r) => {
    const i = Z0.exec(t);
    return i ? (i[1] ? n(i[1]) : r(i[2])) : !1;
  },
  hs = (t, n, r = !1) => {
    const i = $0.exec(t);
    return i ? (i[1] ? n(i[1]) : r) : !1;
  },
  W0 = (t) => t === "position" || t === "percentage",
  J0 = (t) => t === "image" || t === "url",
  ew = (t) => t === "length" || t === "size" || t === "bg-size",
  tw = (t) => t === "length",
  zO = (t) => t === "number",
  nw = (t) => t === "family-name",
  aw = (t) => t === "number" || t === "weight",
  rw = (t) => t === "shadow",
  qO = () => {
    const t = At("color"),
      n = At("font"),
      r = At("text"),
      i = At("font-weight"),
      l = At("tracking"),
      c = At("leading"),
      f = At("breakpoint"),
      h = At("container"),
      g = At("spacing"),
      p = At("radius"),
      v = At("shadow"),
      b = At("inset-shadow"),
      S = At("text-shadow"),
      E = At("drop-shadow"),
      j = At("blur"),
      _ = At("perspective"),
      N = At("aspect"),
      R = At("ease"),
      O = At("animate"),
      D = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      z = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      M = () => [...z(), Se, be],
      Y = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Q = () => ["auto", "contain", "none"],
      F = () => [Se, be, g],
      oe = () => [gr, "full", "auto", ...F()],
      ne = () => [yr, "none", "subgrid", Se, be],
      he = () => ["auto", { span: ["full", yr, Se, be] }, yr, Se, be],
      J = () => [yr, "auto", Se, be],
      se = () => ["auto", "min", "max", "fr", Se, be],
      ee = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      ce = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      L = () => ["auto", ...F()],
      G = () => [
        gr,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...F(),
      ],
      W = () => [
        gr,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...F(),
      ],
      ge = () => [
        gr,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...F(),
      ],
      T = () => [t, Se, be],
      Z = () => [...z(), Px, Vx, { position: [Se, be] }],
      ie = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      ae = () => ["auto", "cover", "contain", DO, CO, { size: [Se, be] }],
      me = () => [fh, jo, Wr],
      Ne = () => ["", "none", "full", p, Se, be],
      fe = () => ["", Pe, jo, Wr],
      ye = () => ["solid", "dashed", "dotted", "double"],
      Ce = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      De = () => [Pe, fh, Px, Vx],
      Qe = () => ["", "none", j, Se, be],
      He = () => ["none", Pe, Se, be],
      We = () => ["none", Pe, Se, be],
      mt = () => [Pe, Se, be],
      Lt = () => [gr, "full", ...F()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Aa],
        breakpoint: [Aa],
        color: [X0],
        container: [Aa],
        "drop-shadow": [Aa],
        ease: ["in", "out", "in-out"],
        font: [jO],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Aa],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Aa],
        shadow: [Aa],
        spacing: ["px", Pe],
        text: [Aa],
        "text-shadow": [Aa],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", gr, be, Se, N] }],
        container: ["container"],
        columns: [{ columns: [Pe, be, Se, h] }],
        "break-after": [{ "break-after": D() }],
        "break-before": [{ "break-before": D() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: M() }],
        overflow: [{ overflow: Y() }],
        "overflow-x": [{ "overflow-x": Y() }],
        "overflow-y": [{ "overflow-y": Y() }],
        overscroll: [{ overscroll: Q() }],
        "overscroll-x": [{ "overscroll-x": Q() }],
        "overscroll-y": [{ "overscroll-y": Q() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: oe() }],
        "inset-x": [{ "inset-x": oe() }],
        "inset-y": [{ "inset-y": oe() }],
        start: [{ "inset-s": oe(), start: oe() }],
        end: [{ "inset-e": oe(), end: oe() }],
        "inset-bs": [{ "inset-bs": oe() }],
        "inset-be": [{ "inset-be": oe() }],
        top: [{ top: oe() }],
        right: [{ right: oe() }],
        bottom: [{ bottom: oe() }],
        left: [{ left: oe() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [yr, "auto", Se, be] }],
        basis: [{ basis: [gr, "full", "auto", h, ...F()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Pe, gr, "auto", "initial", "none", be] }],
        grow: [{ grow: ["", Pe, Se, be] }],
        shrink: [{ shrink: ["", Pe, Se, be] }],
        order: [{ order: [yr, "first", "last", "none", Se, be] }],
        "grid-cols": [{ "grid-cols": ne() }],
        "col-start-end": [{ col: he() }],
        "col-start": [{ "col-start": J() }],
        "col-end": [{ "col-end": J() }],
        "grid-rows": [{ "grid-rows": ne() }],
        "row-start-end": [{ row: he() }],
        "row-start": [{ "row-start": J() }],
        "row-end": [{ "row-end": J() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": se() }],
        "auto-rows": [{ "auto-rows": se() }],
        gap: [{ gap: F() }],
        "gap-x": [{ "gap-x": F() }],
        "gap-y": [{ "gap-y": F() }],
        "justify-content": [{ justify: [...ee(), "normal"] }],
        "justify-items": [{ "justify-items": [...ce(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ce()] }],
        "align-content": [{ content: ["normal", ...ee()] }],
        "align-items": [{ items: [...ce(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ce(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ee() }],
        "place-items": [{ "place-items": [...ce(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ce()] }],
        p: [{ p: F() }],
        px: [{ px: F() }],
        py: [{ py: F() }],
        ps: [{ ps: F() }],
        pe: [{ pe: F() }],
        pbs: [{ pbs: F() }],
        pbe: [{ pbe: F() }],
        pt: [{ pt: F() }],
        pr: [{ pr: F() }],
        pb: [{ pb: F() }],
        pl: [{ pl: F() }],
        m: [{ m: L() }],
        mx: [{ mx: L() }],
        my: [{ my: L() }],
        ms: [{ ms: L() }],
        me: [{ me: L() }],
        mbs: [{ mbs: L() }],
        mbe: [{ mbe: L() }],
        mt: [{ mt: L() }],
        mr: [{ mr: L() }],
        mb: [{ mb: L() }],
        ml: [{ ml: L() }],
        "space-x": [{ "space-x": F() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": F() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: G() }],
        "inline-size": [{ inline: ["auto", ...W()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...W()] }],
        "max-inline-size": [{ "max-inline": ["none", ...W()] }],
        "block-size": [{ block: ["auto", ...ge()] }],
        "min-block-size": [{ "min-block": ["auto", ...ge()] }],
        "max-block-size": [{ "max-block": ["none", ...ge()] }],
        w: [{ w: [h, "screen", ...G()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...G()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [f] }, ...G()] },
        ],
        h: [{ h: ["screen", "lh", ...G()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...G()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...G()] }],
        "font-size": [{ text: ["base", r, jo, Wr] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [i, LO, OO] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              fh,
              be,
            ],
          },
        ],
        "font-family": [{ font: [MO, RO, n] }],
        "font-features": [{ "font-features": [be] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [l, Se, be] }],
        "line-clamp": [{ "line-clamp": [Pe, "none", Se, Ux] }],
        leading: [{ leading: [c, ...F()] }],
        "list-image": [{ "list-image": ["none", Se, be] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", Se, be] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: T() }],
        "text-color": [{ text: T() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ye(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Pe, "from-font", "auto", Se, Wr] },
        ],
        "text-decoration-color": [{ decoration: T() }],
        "underline-offset": [{ "underline-offset": [Pe, "auto", Se, be] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: F() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Se,
              be,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Se, be] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: Z() }],
        "bg-repeat": [{ bg: ie() }],
        "bg-size": [{ bg: ae() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  yr,
                  Se,
                  be,
                ],
                radial: ["", Se, be],
                conic: [yr, Se, be],
              },
              kO,
              AO,
            ],
          },
        ],
        "bg-color": [{ bg: T() }],
        "gradient-from-pos": [{ from: me() }],
        "gradient-via-pos": [{ via: me() }],
        "gradient-to-pos": [{ to: me() }],
        "gradient-from": [{ from: T() }],
        "gradient-via": [{ via: T() }],
        "gradient-to": [{ to: T() }],
        rounded: [{ rounded: Ne() }],
        "rounded-s": [{ "rounded-s": Ne() }],
        "rounded-e": [{ "rounded-e": Ne() }],
        "rounded-t": [{ "rounded-t": Ne() }],
        "rounded-r": [{ "rounded-r": Ne() }],
        "rounded-b": [{ "rounded-b": Ne() }],
        "rounded-l": [{ "rounded-l": Ne() }],
        "rounded-ss": [{ "rounded-ss": Ne() }],
        "rounded-se": [{ "rounded-se": Ne() }],
        "rounded-ee": [{ "rounded-ee": Ne() }],
        "rounded-es": [{ "rounded-es": Ne() }],
        "rounded-tl": [{ "rounded-tl": Ne() }],
        "rounded-tr": [{ "rounded-tr": Ne() }],
        "rounded-br": [{ "rounded-br": Ne() }],
        "rounded-bl": [{ "rounded-bl": Ne() }],
        "border-w": [{ border: fe() }],
        "border-w-x": [{ "border-x": fe() }],
        "border-w-y": [{ "border-y": fe() }],
        "border-w-s": [{ "border-s": fe() }],
        "border-w-e": [{ "border-e": fe() }],
        "border-w-bs": [{ "border-bs": fe() }],
        "border-w-be": [{ "border-be": fe() }],
        "border-w-t": [{ "border-t": fe() }],
        "border-w-r": [{ "border-r": fe() }],
        "border-w-b": [{ "border-b": fe() }],
        "border-w-l": [{ "border-l": fe() }],
        "divide-x": [{ "divide-x": fe() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": fe() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ye(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ye(), "hidden", "none"] }],
        "border-color": [{ border: T() }],
        "border-color-x": [{ "border-x": T() }],
        "border-color-y": [{ "border-y": T() }],
        "border-color-s": [{ "border-s": T() }],
        "border-color-e": [{ "border-e": T() }],
        "border-color-bs": [{ "border-bs": T() }],
        "border-color-be": [{ "border-be": T() }],
        "border-color-t": [{ "border-t": T() }],
        "border-color-r": [{ "border-r": T() }],
        "border-color-b": [{ "border-b": T() }],
        "border-color-l": [{ "border-l": T() }],
        "divide-color": [{ divide: T() }],
        "outline-style": [{ outline: [...ye(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Pe, Se, be] }],
        "outline-w": [{ outline: ["", Pe, jo, Wr] }],
        "outline-color": [{ outline: T() }],
        shadow: [{ shadow: ["", "none", v, wc, bc] }],
        "shadow-color": [{ shadow: T() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, wc, bc] }],
        "inset-shadow-color": [{ "inset-shadow": T() }],
        "ring-w": [{ ring: fe() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: T() }],
        "ring-offset-w": [{ "ring-offset": [Pe, Wr] }],
        "ring-offset-color": [{ "ring-offset": T() }],
        "inset-ring-w": [{ "inset-ring": fe() }],
        "inset-ring-color": [{ "inset-ring": T() }],
        "text-shadow": [{ "text-shadow": ["none", S, wc, bc] }],
        "text-shadow-color": [{ "text-shadow": T() }],
        opacity: [{ opacity: [Pe, Se, be] }],
        "mix-blend": [
          { "mix-blend": [...Ce(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": Ce() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Pe] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": De() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": De() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": T() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": T() }],
        "mask-image-t-from-pos": [{ "mask-t-from": De() }],
        "mask-image-t-to-pos": [{ "mask-t-to": De() }],
        "mask-image-t-from-color": [{ "mask-t-from": T() }],
        "mask-image-t-to-color": [{ "mask-t-to": T() }],
        "mask-image-r-from-pos": [{ "mask-r-from": De() }],
        "mask-image-r-to-pos": [{ "mask-r-to": De() }],
        "mask-image-r-from-color": [{ "mask-r-from": T() }],
        "mask-image-r-to-color": [{ "mask-r-to": T() }],
        "mask-image-b-from-pos": [{ "mask-b-from": De() }],
        "mask-image-b-to-pos": [{ "mask-b-to": De() }],
        "mask-image-b-from-color": [{ "mask-b-from": T() }],
        "mask-image-b-to-color": [{ "mask-b-to": T() }],
        "mask-image-l-from-pos": [{ "mask-l-from": De() }],
        "mask-image-l-to-pos": [{ "mask-l-to": De() }],
        "mask-image-l-from-color": [{ "mask-l-from": T() }],
        "mask-image-l-to-color": [{ "mask-l-to": T() }],
        "mask-image-x-from-pos": [{ "mask-x-from": De() }],
        "mask-image-x-to-pos": [{ "mask-x-to": De() }],
        "mask-image-x-from-color": [{ "mask-x-from": T() }],
        "mask-image-x-to-color": [{ "mask-x-to": T() }],
        "mask-image-y-from-pos": [{ "mask-y-from": De() }],
        "mask-image-y-to-pos": [{ "mask-y-to": De() }],
        "mask-image-y-from-color": [{ "mask-y-from": T() }],
        "mask-image-y-to-color": [{ "mask-y-to": T() }],
        "mask-image-radial": [{ "mask-radial": [Se, be] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": De() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": De() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": T() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": T() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": z() }],
        "mask-image-conic-pos": [{ "mask-conic": [Pe] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": De() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": De() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": T() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": T() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: Z() }],
        "mask-repeat": [{ mask: ie() }],
        "mask-size": [{ mask: ae() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", Se, be] }],
        filter: [{ filter: ["", "none", Se, be] }],
        blur: [{ blur: Qe() }],
        brightness: [{ brightness: [Pe, Se, be] }],
        contrast: [{ contrast: [Pe, Se, be] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", E, wc, bc] }],
        "drop-shadow-color": [{ "drop-shadow": T() }],
        grayscale: [{ grayscale: ["", Pe, Se, be] }],
        "hue-rotate": [{ "hue-rotate": [Pe, Se, be] }],
        invert: [{ invert: ["", Pe, Se, be] }],
        saturate: [{ saturate: [Pe, Se, be] }],
        sepia: [{ sepia: ["", Pe, Se, be] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", Se, be] }],
        "backdrop-blur": [{ "backdrop-blur": Qe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Pe, Se, be] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Pe, Se, be] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Pe, Se, be] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Pe, Se, be] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Pe, Se, be] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Pe, Se, be] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Pe, Se, be] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Pe, Se, be] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": F() }],
        "border-spacing-x": [{ "border-spacing-x": F() }],
        "border-spacing-y": [{ "border-spacing-y": F() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              Se,
              be,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Pe, "initial", Se, be] }],
        ease: [{ ease: ["linear", "initial", R, Se, be] }],
        delay: [{ delay: [Pe, Se, be] }],
        animate: [{ animate: ["none", O, Se, be] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [_, Se, be] }],
        "perspective-origin": [{ "perspective-origin": M() }],
        rotate: [{ rotate: He() }],
        "rotate-x": [{ "rotate-x": He() }],
        "rotate-y": [{ "rotate-y": He() }],
        "rotate-z": [{ "rotate-z": He() }],
        scale: [{ scale: We() }],
        "scale-x": [{ "scale-x": We() }],
        "scale-y": [{ "scale-y": We() }],
        "scale-z": [{ "scale-z": We() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: mt() }],
        "skew-x": [{ "skew-x": mt() }],
        "skew-y": [{ "skew-y": mt() }],
        transform: [{ transform: [Se, be, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: M() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Lt() }],
        "translate-x": [{ "translate-x": Lt() }],
        "translate-y": [{ "translate-y": Lt() }],
        "translate-z": [{ "translate-z": Lt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: T() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: T() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Se,
              be,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": F() }],
        "scroll-mx": [{ "scroll-mx": F() }],
        "scroll-my": [{ "scroll-my": F() }],
        "scroll-ms": [{ "scroll-ms": F() }],
        "scroll-me": [{ "scroll-me": F() }],
        "scroll-mbs": [{ "scroll-mbs": F() }],
        "scroll-mbe": [{ "scroll-mbe": F() }],
        "scroll-mt": [{ "scroll-mt": F() }],
        "scroll-mr": [{ "scroll-mr": F() }],
        "scroll-mb": [{ "scroll-mb": F() }],
        "scroll-ml": [{ "scroll-ml": F() }],
        "scroll-p": [{ "scroll-p": F() }],
        "scroll-px": [{ "scroll-px": F() }],
        "scroll-py": [{ "scroll-py": F() }],
        "scroll-ps": [{ "scroll-ps": F() }],
        "scroll-pe": [{ "scroll-pe": F() }],
        "scroll-pbs": [{ "scroll-pbs": F() }],
        "scroll-pbe": [{ "scroll-pbe": F() }],
        "scroll-pt": [{ "scroll-pt": F() }],
        "scroll-pr": [{ "scroll-pr": F() }],
        "scroll-pb": [{ "scroll-pb": F() }],
        "scroll-pl": [{ "scroll-pl": F() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", Se, be],
          },
        ],
        fill: [{ fill: ["none", ...T()] }],
        "stroke-w": [{ stroke: [Pe, jo, Wr, Ux] }],
        stroke: [{ stroke: ["none", ...T()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  UO = gO(qO);
function we(...t) {
  return UO(P0(t));
}
const VO = iC,
  sw = y.forwardRef(({ className: t, ...n }, r) =>
    d.jsx(D0, {
      ref: r,
      className: we(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t,
      ),
      ...n,
    }),
  );
sw.displayName = D0.displayName;
const PO = Si(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  iw = y.forwardRef(({ className: t, variant: n, ...r }, i) =>
    d.jsx(k0, { ref: i, className: we(PO({ variant: n }), t), ...r }),
  );
iw.displayName = k0.displayName;
const HO = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(q0, {
    ref: r,
    className: we(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t,
    ),
    ...n,
  }),
);
HO.displayName = q0.displayName;
const ow = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(U0, {
    ref: r,
    className: we(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t,
    ),
    "toast-close": "",
    ...n,
    children: d.jsx(jm, { className: "h-4 w-4" }),
  }),
);
ow.displayName = U0.displayName;
const lw = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(L0, { ref: r, className: we("text-sm font-semibold", t), ...n }),
);
lw.displayName = L0.displayName;
const cw = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(z0, { ref: r, className: we("text-sm opacity-90", t), ...n }),
);
cw.displayName = z0.displayName;
function BO() {
  const { toasts: t } = Zo();
  return d.jsxs(VO, {
    children: [
      t.map(function ({ id: n, title: r, description: i, action: l, ...c }) {
        return d.jsxs(
          iw,
          {
            ...c,
            children: [
              d.jsxs("div", {
                className: "grid gap-1",
                children: [
                  r && d.jsx(lw, { children: r }),
                  i && d.jsx(cw, { children: i }),
                ],
              }),
              l,
              d.jsx(ow, {}),
            ],
          },
          n,
        );
      }),
      d.jsx(sw, {}),
    ],
  });
}
var FO = ru[" useId ".trim().toString()] || (() => {}),
  IO = 0;
function za(t) {
  const [n, r] = y.useState(FO());
  return (
    Ct(() => {
      r((i) => i ?? String(IO++));
    }, [t]),
    n ? `radix-${n}` : ""
  );
}
const GO = ["top", "right", "bottom", "left"],
  jr = Math.min,
  gn = Math.max,
  Pc = Math.round,
  Sc = Math.floor,
  la = (t) => ({ x: t, y: t }),
  YO = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Hh(t, n, r) {
  return gn(t, jr(n, r));
}
function Ua(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function Va(t) {
  return t.split("-")[0];
}
function _i(t) {
  return t.split("-")[1];
}
function Rm(t) {
  return t === "x" ? "y" : "x";
}
function Am(t) {
  return t === "y" ? "height" : "width";
}
function oa(t) {
  const n = t[0];
  return n === "t" || n === "b" ? "y" : "x";
}
function Mm(t) {
  return Rm(oa(t));
}
function QO(t, n, r) {
  r === void 0 && (r = !1);
  const i = _i(t),
    l = Mm(t),
    c = Am(l);
  let f =
    l === "x"
      ? i === (r ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
        ? "bottom"
        : "top";
  return (n.reference[c] > n.floating[c] && (f = Hc(f)), [f, Hc(f)]);
}
function KO(t) {
  const n = Hc(t);
  return [Bh(t), n, Bh(n)];
}
function Bh(t) {
  return t.includes("start")
    ? t.replace("start", "end")
    : t.replace("end", "start");
}
const Hx = ["left", "right"],
  Bx = ["right", "left"],
  ZO = ["top", "bottom"],
  $O = ["bottom", "top"];
function XO(t, n, r) {
  switch (t) {
    case "top":
    case "bottom":
      return r ? (n ? Bx : Hx) : n ? Hx : Bx;
    case "left":
    case "right":
      return n ? ZO : $O;
    default:
      return [];
  }
}
function WO(t, n, r, i) {
  const l = _i(t);
  let c = XO(Va(t), r === "start", i);
  return (
    l && ((c = c.map((f) => f + "-" + l)), n && (c = c.concat(c.map(Bh)))),
    c
  );
}
function Hc(t) {
  const n = Va(t);
  return YO[n] + t.slice(n.length);
}
function JO(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function uw(t) {
  return typeof t != "number"
    ? JO(t)
    : { top: t, right: t, bottom: t, left: t };
}
function Bc(t) {
  const { x: n, y: r, width: i, height: l } = t;
  return {
    width: i,
    height: l,
    top: r,
    left: n,
    right: n + i,
    bottom: r + l,
    x: n,
    y: r,
  };
}
function Fx(t, n, r) {
  let { reference: i, floating: l } = t;
  const c = oa(n),
    f = Mm(n),
    h = Am(f),
    g = Va(n),
    p = c === "y",
    v = i.x + i.width / 2 - l.width / 2,
    b = i.y + i.height / 2 - l.height / 2,
    S = i[h] / 2 - l[h] / 2;
  let E;
  switch (g) {
    case "top":
      E = { x: v, y: i.y - l.height };
      break;
    case "bottom":
      E = { x: v, y: i.y + i.height };
      break;
    case "right":
      E = { x: i.x + i.width, y: b };
      break;
    case "left":
      E = { x: i.x - l.width, y: b };
      break;
    default:
      E = { x: i.x, y: i.y };
  }
  switch (_i(n)) {
    case "start":
      E[f] -= S * (r && p ? -1 : 1);
      break;
    case "end":
      E[f] += S * (r && p ? -1 : 1);
      break;
  }
  return E;
}
async function eR(t, n) {
  var r;
  n === void 0 && (n = {});
  const { x: i, y: l, platform: c, rects: f, elements: h, strategy: g } = t,
    {
      boundary: p = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: b = "floating",
      altBoundary: S = !1,
      padding: E = 0,
    } = Ua(n, t),
    j = uw(E),
    N = h[S ? (b === "floating" ? "reference" : "floating") : b],
    R = Bc(
      await c.getClippingRect({
        element:
          (r = await (c.isElement == null ? void 0 : c.isElement(N))) == null ||
          r
            ? N
            : N.contextElement ||
              (await (c.getDocumentElement == null
                ? void 0
                : c.getDocumentElement(h.floating))),
        boundary: p,
        rootBoundary: v,
        strategy: g,
      }),
    ),
    O =
      b === "floating"
        ? { x: i, y: l, width: f.floating.width, height: f.floating.height }
        : f.reference,
    D = await (c.getOffsetParent == null
      ? void 0
      : c.getOffsetParent(h.floating)),
    z = (await (c.isElement == null ? void 0 : c.isElement(D)))
      ? (await (c.getScale == null ? void 0 : c.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    M = Bc(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: O,
            offsetParent: D,
            strategy: g,
          })
        : O,
    );
  return {
    top: (R.top - M.top + j.top) / z.y,
    bottom: (M.bottom - R.bottom + j.bottom) / z.y,
    left: (R.left - M.left + j.left) / z.x,
    right: (M.right - R.right + j.right) / z.x,
  };
}
const tR = 50,
  nR = async (t, n, r) => {
    const {
        placement: i = "bottom",
        strategy: l = "absolute",
        middleware: c = [],
        platform: f,
      } = r,
      h = f.detectOverflow ? f : { ...f, detectOverflow: eR },
      g = await (f.isRTL == null ? void 0 : f.isRTL(n));
    let p = await f.getElementRects({ reference: t, floating: n, strategy: l }),
      { x: v, y: b } = Fx(p, i, g),
      S = i,
      E = 0;
    const j = {};
    for (let _ = 0; _ < c.length; _++) {
      const N = c[_];
      if (!N) continue;
      const { name: R, fn: O } = N,
        {
          x: D,
          y: z,
          data: M,
          reset: Y,
        } = await O({
          x: v,
          y: b,
          initialPlacement: i,
          placement: S,
          strategy: l,
          middlewareData: j,
          rects: p,
          platform: h,
          elements: { reference: t, floating: n },
        });
      ((v = D ?? v),
        (b = z ?? b),
        (j[R] = { ...j[R], ...M }),
        Y &&
          E < tR &&
          (E++,
          typeof Y == "object" &&
            (Y.placement && (S = Y.placement),
            Y.rects &&
              (p =
                Y.rects === !0
                  ? await f.getElementRects({
                      reference: t,
                      floating: n,
                      strategy: l,
                    })
                  : Y.rects),
            ({ x: v, y: b } = Fx(p, S, g))),
          (_ = -1)));
    }
    return { x: v, y: b, placement: S, strategy: l, middlewareData: j };
  },
  aR = (t) => ({
    name: "arrow",
    options: t,
    async fn(n) {
      const {
          x: r,
          y: i,
          placement: l,
          rects: c,
          platform: f,
          elements: h,
          middlewareData: g,
        } = n,
        { element: p, padding: v = 0 } = Ua(t, n) || {};
      if (p == null) return {};
      const b = uw(v),
        S = { x: r, y: i },
        E = Mm(l),
        j = Am(E),
        _ = await f.getDimensions(p),
        N = E === "y",
        R = N ? "top" : "left",
        O = N ? "bottom" : "right",
        D = N ? "clientHeight" : "clientWidth",
        z = c.reference[j] + c.reference[E] - S[E] - c.floating[j],
        M = S[E] - c.reference[E],
        Y = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p));
      let Q = Y ? Y[D] : 0;
      (!Q || !(await (f.isElement == null ? void 0 : f.isElement(Y)))) &&
        (Q = h.floating[D] || c.floating[j]);
      const F = z / 2 - M / 2,
        oe = Q / 2 - _[j] / 2 - 1,
        ne = jr(b[R], oe),
        he = jr(b[O], oe),
        J = ne,
        se = Q - _[j] - he,
        ee = Q / 2 - _[j] / 2 + F,
        ce = Hh(J, ee, se),
        L =
          !g.arrow &&
          _i(l) != null &&
          ee !== ce &&
          c.reference[j] / 2 - (ee < J ? ne : he) - _[j] / 2 < 0,
        G = L ? (ee < J ? ee - J : ee - se) : 0;
      return {
        [E]: S[E] + G,
        data: {
          [E]: ce,
          centerOffset: ee - ce - G,
          ...(L && { alignmentOffset: G }),
        },
        reset: L,
      };
    },
  }),
  rR = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(n) {
          var r, i;
          const {
              placement: l,
              middlewareData: c,
              rects: f,
              initialPlacement: h,
              platform: g,
              elements: p,
            } = n,
            {
              mainAxis: v = !0,
              crossAxis: b = !0,
              fallbackPlacements: S,
              fallbackStrategy: E = "bestFit",
              fallbackAxisSideDirection: j = "none",
              flipAlignment: _ = !0,
              ...N
            } = Ua(t, n);
          if ((r = c.arrow) != null && r.alignmentOffset) return {};
          const R = Va(l),
            O = oa(h),
            D = Va(h) === h,
            z = await (g.isRTL == null ? void 0 : g.isRTL(p.floating)),
            M = S || (D || !_ ? [Hc(h)] : KO(h)),
            Y = j !== "none";
          !S && Y && M.push(...WO(h, _, j, z));
          const Q = [h, ...M],
            F = await g.detectOverflow(n, N),
            oe = [];
          let ne = ((i = c.flip) == null ? void 0 : i.overflows) || [];
          if ((v && oe.push(F[R]), b)) {
            const ee = QO(l, f, z);
            oe.push(F[ee[0]], F[ee[1]]);
          }
          if (
            ((ne = [...ne, { placement: l, overflows: oe }]),
            !oe.every((ee) => ee <= 0))
          ) {
            var he, J;
            const ee = (((he = c.flip) == null ? void 0 : he.index) || 0) + 1,
              ce = Q[ee];
            if (
              ce &&
              (!(b === "alignment" ? O !== oa(ce) : !1) ||
                ne.every((W) =>
                  oa(W.placement) === O ? W.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: ee, overflows: ne },
                reset: { placement: ce },
              };
            let L =
              (J = ne
                .filter((G) => G.overflows[0] <= 0)
                .sort((G, W) => G.overflows[1] - W.overflows[1])[0]) == null
                ? void 0
                : J.placement;
            if (!L)
              switch (E) {
                case "bestFit": {
                  var se;
                  const G =
                    (se = ne
                      .filter((W) => {
                        if (Y) {
                          const ge = oa(W.placement);
                          return ge === O || ge === "y";
                        }
                        return !0;
                      })
                      .map((W) => [
                        W.placement,
                        W.overflows
                          .filter((ge) => ge > 0)
                          .reduce((ge, T) => ge + T, 0),
                      ])
                      .sort((W, ge) => W[1] - ge[1])[0]) == null
                      ? void 0
                      : se[0];
                  G && (L = G);
                  break;
                }
                case "initialPlacement":
                  L = h;
                  break;
              }
            if (l !== L) return { reset: { placement: L } };
          }
          return {};
        },
      }
    );
  };
function Ix(t, n) {
  return {
    top: t.top - n.height,
    right: t.right - n.width,
    bottom: t.bottom - n.height,
    left: t.left - n.width,
  };
}
function Gx(t) {
  return GO.some((n) => t[n] >= 0);
}
const sR = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "hide",
        options: t,
        async fn(n) {
          const { rects: r, platform: i } = n,
            { strategy: l = "referenceHidden", ...c } = Ua(t, n);
          switch (l) {
            case "referenceHidden": {
              const f = await i.detectOverflow(n, {
                  ...c,
                  elementContext: "reference",
                }),
                h = Ix(f, r.reference);
              return {
                data: { referenceHiddenOffsets: h, referenceHidden: Gx(h) },
              };
            }
            case "escaped": {
              const f = await i.detectOverflow(n, { ...c, altBoundary: !0 }),
                h = Ix(f, r.floating);
              return { data: { escapedOffsets: h, escaped: Gx(h) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  dw = new Set(["left", "top"]);
async function iR(t, n) {
  const { placement: r, platform: i, elements: l } = t,
    c = await (i.isRTL == null ? void 0 : i.isRTL(l.floating)),
    f = Va(r),
    h = _i(r),
    g = oa(r) === "y",
    p = dw.has(f) ? -1 : 1,
    v = c && g ? -1 : 1,
    b = Ua(n, t);
  let {
    mainAxis: S,
    crossAxis: E,
    alignmentAxis: j,
  } = typeof b == "number"
    ? { mainAxis: b, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: b.mainAxis || 0,
        crossAxis: b.crossAxis || 0,
        alignmentAxis: b.alignmentAxis,
      };
  return (
    h && typeof j == "number" && (E = h === "end" ? j * -1 : j),
    g ? { x: E * v, y: S * p } : { x: S * p, y: E * v }
  );
}
const oR = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(n) {
          var r, i;
          const { x: l, y: c, placement: f, middlewareData: h } = n,
            g = await iR(n, t);
          return f === ((r = h.offset) == null ? void 0 : r.placement) &&
            (i = h.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: l + g.x, y: c + g.y, data: { ...g, placement: f } };
        },
      }
    );
  },
  lR = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(n) {
          const { x: r, y: i, placement: l, platform: c } = n,
            {
              mainAxis: f = !0,
              crossAxis: h = !1,
              limiter: g = {
                fn: (R) => {
                  let { x: O, y: D } = R;
                  return { x: O, y: D };
                },
              },
              ...p
            } = Ua(t, n),
            v = { x: r, y: i },
            b = await c.detectOverflow(n, p),
            S = oa(Va(l)),
            E = Rm(S);
          let j = v[E],
            _ = v[S];
          if (f) {
            const R = E === "y" ? "top" : "left",
              O = E === "y" ? "bottom" : "right",
              D = j + b[R],
              z = j - b[O];
            j = Hh(D, j, z);
          }
          if (h) {
            const R = S === "y" ? "top" : "left",
              O = S === "y" ? "bottom" : "right",
              D = _ + b[R],
              z = _ - b[O];
            _ = Hh(D, _, z);
          }
          const N = g.fn({ ...n, [E]: j, [S]: _ });
          return {
            ...N,
            data: { x: N.x - r, y: N.y - i, enabled: { [E]: f, [S]: h } },
          };
        },
      }
    );
  },
  cR = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(n) {
          const { x: r, y: i, placement: l, rects: c, middlewareData: f } = n,
            { offset: h = 0, mainAxis: g = !0, crossAxis: p = !0 } = Ua(t, n),
            v = { x: r, y: i },
            b = oa(l),
            S = Rm(b);
          let E = v[S],
            j = v[b];
          const _ = Ua(h, n),
            N =
              typeof _ == "number"
                ? { mainAxis: _, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ..._ };
          if (g) {
            const D = S === "y" ? "height" : "width",
              z = c.reference[S] - c.floating[D] + N.mainAxis,
              M = c.reference[S] + c.reference[D] - N.mainAxis;
            E < z ? (E = z) : E > M && (E = M);
          }
          if (p) {
            var R, O;
            const D = S === "y" ? "width" : "height",
              z = dw.has(Va(l)),
              M =
                c.reference[b] -
                c.floating[D] +
                ((z && ((R = f.offset) == null ? void 0 : R[b])) || 0) +
                (z ? 0 : N.crossAxis),
              Y =
                c.reference[b] +
                c.reference[D] +
                (z ? 0 : ((O = f.offset) == null ? void 0 : O[b]) || 0) -
                (z ? N.crossAxis : 0);
            j < M ? (j = M) : j > Y && (j = Y);
          }
          return { [S]: E, [b]: j };
        },
      }
    );
  },
  uR = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(n) {
          var r, i;
          const { placement: l, rects: c, platform: f, elements: h } = n,
            { apply: g = () => {}, ...p } = Ua(t, n),
            v = await f.detectOverflow(n, p),
            b = Va(l),
            S = _i(l),
            E = oa(l) === "y",
            { width: j, height: _ } = c.floating;
          let N, R;
          b === "top" || b === "bottom"
            ? ((N = b),
              (R =
                S ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(h.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((R = b), (N = S === "end" ? "top" : "bottom"));
          const O = _ - v.top - v.bottom,
            D = j - v.left - v.right,
            z = jr(_ - v[N], O),
            M = jr(j - v[R], D),
            Y = !n.middlewareData.shift;
          let Q = z,
            F = M;
          if (
            ((r = n.middlewareData.shift) != null && r.enabled.x && (F = D),
            (i = n.middlewareData.shift) != null && i.enabled.y && (Q = O),
            Y && !S)
          ) {
            const ne = gn(v.left, 0),
              he = gn(v.right, 0),
              J = gn(v.top, 0),
              se = gn(v.bottom, 0);
            E
              ? (F =
                  j -
                  2 * (ne !== 0 || he !== 0 ? ne + he : gn(v.left, v.right)))
              : (Q =
                  _ - 2 * (J !== 0 || se !== 0 ? J + se : gn(v.top, v.bottom)));
          }
          await g({ ...n, availableWidth: F, availableHeight: Q });
          const oe = await f.getDimensions(h.floating);
          return j !== oe.width || _ !== oe.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function du() {
  return typeof window < "u";
}
function Ei(t) {
  return fw(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function vn(t) {
  var n;
  return (
    (t == null || (n = t.ownerDocument) == null ? void 0 : n.defaultView) ||
    window
  );
}
function ha(t) {
  var n;
  return (n = (fw(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : n.documentElement;
}
function fw(t) {
  return du() ? t instanceof Node || t instanceof vn(t).Node : !1;
}
function Gn(t) {
  return du() ? t instanceof Element || t instanceof vn(t).Element : !1;
}
function Ba(t) {
  return du() ? t instanceof HTMLElement || t instanceof vn(t).HTMLElement : !1;
}
function Yx(t) {
  return !du() || typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof vn(t).ShadowRoot;
}
function Jo(t) {
  const { overflow: n, overflowX: r, overflowY: i, display: l } = Yn(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(n + i + r) &&
    l !== "inline" &&
    l !== "contents"
  );
}
function dR(t) {
  return /^(table|td|th)$/.test(Ei(t));
}
function fu(t) {
  try {
    if (t.matches(":popover-open")) return !0;
  } catch {}
  try {
    return t.matches(":modal");
  } catch {
    return !1;
  }
}
const fR = /transform|translate|scale|rotate|perspective|filter/,
  hR = /paint|layout|strict|content/,
  Jr = (t) => !!t && t !== "none";
let hh;
function Dm(t) {
  const n = Gn(t) ? Yn(t) : t;
  return (
    Jr(n.transform) ||
    Jr(n.translate) ||
    Jr(n.scale) ||
    Jr(n.rotate) ||
    Jr(n.perspective) ||
    (!km() && (Jr(n.backdropFilter) || Jr(n.filter))) ||
    fR.test(n.willChange || "") ||
    hR.test(n.contain || "")
  );
}
function mR(t) {
  let n = Cr(t);
  for (; Ba(n) && !di(n); ) {
    if (Dm(n)) return n;
    if (fu(n)) return null;
    n = Cr(n);
  }
  return null;
}
function km() {
  return (
    hh == null &&
      (hh =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    hh
  );
}
function di(t) {
  return /^(html|body|#document)$/.test(Ei(t));
}
function Yn(t) {
  return vn(t).getComputedStyle(t);
}
function hu(t) {
  return Gn(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function Cr(t) {
  if (Ei(t) === "html") return t;
  const n = t.assignedSlot || t.parentNode || (Yx(t) && t.host) || ha(t);
  return Yx(n) ? n.host : n;
}
function hw(t) {
  const n = Cr(t);
  return di(n)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : Ba(n) && Jo(n)
      ? n
      : hw(n);
}
function Bo(t, n, r) {
  var i;
  (n === void 0 && (n = []), r === void 0 && (r = !0));
  const l = hw(t),
    c = l === ((i = t.ownerDocument) == null ? void 0 : i.body),
    f = vn(l);
  if (c) {
    const h = Fh(f);
    return n.concat(
      f,
      f.visualViewport || [],
      Jo(l) ? l : [],
      h && r ? Bo(h) : [],
    );
  } else return n.concat(l, Bo(l, [], r));
}
function Fh(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function mw(t) {
  const n = Yn(t);
  let r = parseFloat(n.width) || 0,
    i = parseFloat(n.height) || 0;
  const l = Ba(t),
    c = l ? t.offsetWidth : r,
    f = l ? t.offsetHeight : i,
    h = Pc(r) !== c || Pc(i) !== f;
  return (h && ((r = c), (i = f)), { width: r, height: i, $: h });
}
function Lm(t) {
  return Gn(t) ? t : t.contextElement;
}
function ci(t) {
  const n = Lm(t);
  if (!Ba(n)) return la(1);
  const r = n.getBoundingClientRect(),
    { width: i, height: l, $: c } = mw(n);
  let f = (c ? Pc(r.width) : r.width) / i,
    h = (c ? Pc(r.height) : r.height) / l;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: f, y: h }
  );
}
const pR = la(0);
function pw(t) {
  const n = vn(t);
  return !km() || !n.visualViewport
    ? pR
    : { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop };
}
function gR(t, n, r) {
  return (n === void 0 && (n = !1), !r || (n && r !== vn(t)) ? !1 : n);
}
function is(t, n, r, i) {
  (n === void 0 && (n = !1), r === void 0 && (r = !1));
  const l = t.getBoundingClientRect(),
    c = Lm(t);
  let f = la(1);
  n && (i ? Gn(i) && (f = ci(i)) : (f = ci(t)));
  const h = gR(c, r, i) ? pw(c) : la(0);
  let g = (l.left + h.x) / f.x,
    p = (l.top + h.y) / f.y,
    v = l.width / f.x,
    b = l.height / f.y;
  if (c) {
    const S = vn(c),
      E = i && Gn(i) ? vn(i) : i;
    let j = S,
      _ = Fh(j);
    for (; _ && i && E !== j; ) {
      const N = ci(_),
        R = _.getBoundingClientRect(),
        O = Yn(_),
        D = R.left + (_.clientLeft + parseFloat(O.paddingLeft)) * N.x,
        z = R.top + (_.clientTop + parseFloat(O.paddingTop)) * N.y;
      ((g *= N.x),
        (p *= N.y),
        (v *= N.x),
        (b *= N.y),
        (g += D),
        (p += z),
        (j = vn(_)),
        (_ = Fh(j)));
    }
  }
  return Bc({ width: v, height: b, x: g, y: p });
}
function mu(t, n) {
  const r = hu(t).scrollLeft;
  return n ? n.left + r : is(ha(t)).left + r;
}
function gw(t, n) {
  const r = t.getBoundingClientRect(),
    i = r.left + n.scrollLeft - mu(t, r),
    l = r.top + n.scrollTop;
  return { x: i, y: l };
}
function yR(t) {
  let { elements: n, rect: r, offsetParent: i, strategy: l } = t;
  const c = l === "fixed",
    f = ha(i),
    h = n ? fu(n.floating) : !1;
  if (i === f || (h && c)) return r;
  let g = { scrollLeft: 0, scrollTop: 0 },
    p = la(1);
  const v = la(0),
    b = Ba(i);
  if ((b || (!b && !c)) && ((Ei(i) !== "body" || Jo(f)) && (g = hu(i)), b)) {
    const E = is(i);
    ((p = ci(i)), (v.x = E.x + i.clientLeft), (v.y = E.y + i.clientTop));
  }
  const S = f && !b && !c ? gw(f, g) : la(0);
  return {
    width: r.width * p.x,
    height: r.height * p.y,
    x: r.x * p.x - g.scrollLeft * p.x + v.x + S.x,
    y: r.y * p.y - g.scrollTop * p.y + v.y + S.y,
  };
}
function vR(t) {
  return Array.from(t.getClientRects());
}
function xR(t) {
  const n = ha(t),
    r = hu(t),
    i = t.ownerDocument.body,
    l = gn(n.scrollWidth, n.clientWidth, i.scrollWidth, i.clientWidth),
    c = gn(n.scrollHeight, n.clientHeight, i.scrollHeight, i.clientHeight);
  let f = -r.scrollLeft + mu(t);
  const h = -r.scrollTop;
  return (
    Yn(i).direction === "rtl" && (f += gn(n.clientWidth, i.clientWidth) - l),
    { width: l, height: c, x: f, y: h }
  );
}
const Qx = 25;
function bR(t, n) {
  const r = vn(t),
    i = ha(t),
    l = r.visualViewport;
  let c = i.clientWidth,
    f = i.clientHeight,
    h = 0,
    g = 0;
  if (l) {
    ((c = l.width), (f = l.height));
    const v = km();
    (!v || (v && n === "fixed")) && ((h = l.offsetLeft), (g = l.offsetTop));
  }
  const p = mu(i);
  if (p <= 0) {
    const v = i.ownerDocument,
      b = v.body,
      S = getComputedStyle(b),
      E =
        (v.compatMode === "CSS1Compat" &&
          parseFloat(S.marginLeft) + parseFloat(S.marginRight)) ||
        0,
      j = Math.abs(i.clientWidth - b.clientWidth - E);
    j <= Qx && (c -= j);
  } else p <= Qx && (c += p);
  return { width: c, height: f, x: h, y: g };
}
function wR(t, n) {
  const r = is(t, !0, n === "fixed"),
    i = r.top + t.clientTop,
    l = r.left + t.clientLeft,
    c = Ba(t) ? ci(t) : la(1),
    f = t.clientWidth * c.x,
    h = t.clientHeight * c.y,
    g = l * c.x,
    p = i * c.y;
  return { width: f, height: h, x: g, y: p };
}
function Kx(t, n, r) {
  let i;
  if (n === "viewport") i = bR(t, r);
  else if (n === "document") i = xR(ha(t));
  else if (Gn(n)) i = wR(n, r);
  else {
    const l = pw(t);
    i = { x: n.x - l.x, y: n.y - l.y, width: n.width, height: n.height };
  }
  return Bc(i);
}
function yw(t, n) {
  const r = Cr(t);
  return r === n || !Gn(r) || di(r)
    ? !1
    : Yn(r).position === "fixed" || yw(r, n);
}
function SR(t, n) {
  const r = n.get(t);
  if (r) return r;
  let i = Bo(t, [], !1).filter((h) => Gn(h) && Ei(h) !== "body"),
    l = null;
  const c = Yn(t).position === "fixed";
  let f = c ? Cr(t) : t;
  for (; Gn(f) && !di(f); ) {
    const h = Yn(f),
      g = Dm(f);
    (!g && h.position === "fixed" && (l = null),
      (
        c
          ? !g && !l
          : (!g &&
              h.position === "static" &&
              !!l &&
              (l.position === "absolute" || l.position === "fixed")) ||
            (Jo(f) && !g && yw(t, f))
      )
        ? (i = i.filter((v) => v !== f))
        : (l = h),
      (f = Cr(f)));
  }
  return (n.set(t, i), i);
}
function _R(t) {
  let { element: n, boundary: r, rootBoundary: i, strategy: l } = t;
  const f = [
      ...(r === "clippingAncestors"
        ? fu(n)
          ? []
          : SR(n, this._c)
        : [].concat(r)),
      i,
    ],
    h = Kx(n, f[0], l);
  let g = h.top,
    p = h.right,
    v = h.bottom,
    b = h.left;
  for (let S = 1; S < f.length; S++) {
    const E = Kx(n, f[S], l);
    ((g = gn(E.top, g)),
      (p = jr(E.right, p)),
      (v = jr(E.bottom, v)),
      (b = gn(E.left, b)));
  }
  return { width: p - b, height: v - g, x: b, y: g };
}
function ER(t) {
  const { width: n, height: r } = mw(t);
  return { width: n, height: r };
}
function NR(t, n, r) {
  const i = Ba(n),
    l = ha(n),
    c = r === "fixed",
    f = is(t, !0, c, n);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const g = la(0);
  function p() {
    g.x = mu(l);
  }
  if (i || (!i && !c))
    if (((Ei(n) !== "body" || Jo(l)) && (h = hu(n)), i)) {
      const E = is(n, !0, c, n);
      ((g.x = E.x + n.clientLeft), (g.y = E.y + n.clientTop));
    } else l && p();
  c && !i && l && p();
  const v = l && !i && !c ? gw(l, h) : la(0),
    b = f.left + h.scrollLeft - g.x - v.x,
    S = f.top + h.scrollTop - g.y - v.y;
  return { x: b, y: S, width: f.width, height: f.height };
}
function mh(t) {
  return Yn(t).position === "static";
}
function Zx(t, n) {
  if (!Ba(t) || Yn(t).position === "fixed") return null;
  if (n) return n(t);
  let r = t.offsetParent;
  return (ha(t) === r && (r = r.ownerDocument.body), r);
}
function vw(t, n) {
  const r = vn(t);
  if (fu(t)) return r;
  if (!Ba(t)) {
    let l = Cr(t);
    for (; l && !di(l); ) {
      if (Gn(l) && !mh(l)) return l;
      l = Cr(l);
    }
    return r;
  }
  let i = Zx(t, n);
  for (; i && dR(i) && mh(i); ) i = Zx(i, n);
  return i && di(i) && mh(i) && !Dm(i) ? r : i || mR(t) || r;
}
const TR = async function (t) {
  const n = this.getOffsetParent || vw,
    r = this.getDimensions,
    i = await r(t.floating);
  return {
    reference: NR(t.reference, await n(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: i.width, height: i.height },
  };
};
function jR(t) {
  return Yn(t).direction === "rtl";
}
const CR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yR,
  getDocumentElement: ha,
  getClippingRect: _R,
  getOffsetParent: vw,
  getElementRects: TR,
  getClientRects: vR,
  getDimensions: ER,
  getScale: ci,
  isElement: Gn,
  isRTL: jR,
};
function xw(t, n) {
  return (
    t.x === n.x && t.y === n.y && t.width === n.width && t.height === n.height
  );
}
function OR(t, n) {
  let r = null,
    i;
  const l = ha(t);
  function c() {
    var h;
    (clearTimeout(i), (h = r) == null || h.disconnect(), (r = null));
  }
  function f(h, g) {
    (h === void 0 && (h = !1), g === void 0 && (g = 1), c());
    const p = t.getBoundingClientRect(),
      { left: v, top: b, width: S, height: E } = p;
    if ((h || n(), !S || !E)) return;
    const j = Sc(b),
      _ = Sc(l.clientWidth - (v + S)),
      N = Sc(l.clientHeight - (b + E)),
      R = Sc(v),
      D = {
        rootMargin: -j + "px " + -_ + "px " + -N + "px " + -R + "px",
        threshold: gn(0, jr(1, g)) || 1,
      };
    let z = !0;
    function M(Y) {
      const Q = Y[0].intersectionRatio;
      if (Q !== g) {
        if (!z) return f();
        Q
          ? f(!1, Q)
          : (i = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      (Q === 1 && !xw(p, t.getBoundingClientRect()) && f(), (z = !1));
    }
    try {
      r = new IntersectionObserver(M, { ...D, root: l.ownerDocument });
    } catch {
      r = new IntersectionObserver(M, D);
    }
    r.observe(t);
  }
  return (f(!0), c);
}
function RR(t, n, r, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: l = !0,
      ancestorResize: c = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: g = !1,
    } = i,
    p = Lm(t),
    v = l || c ? [...(p ? Bo(p) : []), ...(n ? Bo(n) : [])] : [];
  v.forEach((R) => {
    (l && R.addEventListener("scroll", r, { passive: !0 }),
      c && R.addEventListener("resize", r));
  });
  const b = p && h ? OR(p, r) : null;
  let S = -1,
    E = null;
  f &&
    ((E = new ResizeObserver((R) => {
      let [O] = R;
      (O &&
        O.target === p &&
        E &&
        n &&
        (E.unobserve(n),
        cancelAnimationFrame(S),
        (S = requestAnimationFrame(() => {
          var D;
          (D = E) == null || D.observe(n);
        }))),
        r());
    })),
    p && !g && E.observe(p),
    n && E.observe(n));
  let j,
    _ = g ? is(t) : null;
  g && N();
  function N() {
    const R = is(t);
    (_ && !xw(_, R) && r(), (_ = R), (j = requestAnimationFrame(N)));
  }
  return (
    r(),
    () => {
      var R;
      (v.forEach((O) => {
        (l && O.removeEventListener("scroll", r),
          c && O.removeEventListener("resize", r));
      }),
        b?.(),
        (R = E) == null || R.disconnect(),
        (E = null),
        g && cancelAnimationFrame(j));
    }
  );
}
const AR = oR,
  MR = lR,
  DR = rR,
  kR = uR,
  LR = sR,
  $x = aR,
  zR = cR,
  qR = (t, n, r) => {
    const i = new Map(),
      l = { platform: CR, ...r },
      c = { ...l.platform, _c: i };
    return nR(t, n, { ...l, platform: c });
  };
var UR = typeof document < "u",
  VR = function () {},
  Mc = UR ? y.useLayoutEffect : VR;
function Fc(t, n) {
  if (t === n) return !0;
  if (typeof t != typeof n) return !1;
  if (typeof t == "function" && t.toString() === n.toString()) return !0;
  let r, i, l;
  if (t && n && typeof t == "object") {
    if (Array.isArray(t)) {
      if (((r = t.length), r !== n.length)) return !1;
      for (i = r; i-- !== 0; ) if (!Fc(t[i], n[i])) return !1;
      return !0;
    }
    if (((l = Object.keys(t)), (r = l.length), r !== Object.keys(n).length))
      return !1;
    for (i = r; i-- !== 0; ) if (!{}.hasOwnProperty.call(n, l[i])) return !1;
    for (i = r; i-- !== 0; ) {
      const c = l[i];
      if (!(c === "_owner" && t.$$typeof) && !Fc(t[c], n[c])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
}
function bw(t) {
  return typeof window > "u"
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xx(t, n) {
  const r = bw(t);
  return Math.round(n * r) / r;
}
function ph(t) {
  const n = y.useRef(t);
  return (
    Mc(() => {
      n.current = t;
    }),
    n
  );
}
function PR(t) {
  t === void 0 && (t = {});
  const {
      placement: n = "bottom",
      strategy: r = "absolute",
      middleware: i = [],
      platform: l,
      elements: { reference: c, floating: f } = {},
      transform: h = !0,
      whileElementsMounted: g,
      open: p,
    } = t,
    [v, b] = y.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: n,
      middlewareData: {},
      isPositioned: !1,
    }),
    [S, E] = y.useState(i);
  Fc(S, i) || E(i);
  const [j, _] = y.useState(null),
    [N, R] = y.useState(null),
    O = y.useCallback((W) => {
      W !== Y.current && ((Y.current = W), _(W));
    }, []),
    D = y.useCallback((W) => {
      W !== Q.current && ((Q.current = W), R(W));
    }, []),
    z = c || j,
    M = f || N,
    Y = y.useRef(null),
    Q = y.useRef(null),
    F = y.useRef(v),
    oe = g != null,
    ne = ph(g),
    he = ph(l),
    J = ph(p),
    se = y.useCallback(() => {
      if (!Y.current || !Q.current) return;
      const W = { placement: n, strategy: r, middleware: S };
      (he.current && (W.platform = he.current),
        qR(Y.current, Q.current, W).then((ge) => {
          const T = { ...ge, isPositioned: J.current !== !1 };
          ee.current &&
            !Fc(F.current, T) &&
            ((F.current = T),
            wi.flushSync(() => {
              b(T);
            }));
        }));
    }, [S, n, r, he, J]);
  Mc(() => {
    p === !1 &&
      F.current.isPositioned &&
      ((F.current.isPositioned = !1), b((W) => ({ ...W, isPositioned: !1 })));
  }, [p]);
  const ee = y.useRef(!1);
  (Mc(
    () => (
      (ee.current = !0),
      () => {
        ee.current = !1;
      }
    ),
    [],
  ),
    Mc(() => {
      if ((z && (Y.current = z), M && (Q.current = M), z && M)) {
        if (ne.current) return ne.current(z, M, se);
        se();
      }
    }, [z, M, se, ne, oe]));
  const ce = y.useMemo(
      () => ({ reference: Y, floating: Q, setReference: O, setFloating: D }),
      [O, D],
    ),
    L = y.useMemo(() => ({ reference: z, floating: M }), [z, M]),
    G = y.useMemo(() => {
      const W = { position: r, left: 0, top: 0 };
      if (!L.floating) return W;
      const ge = Xx(L.floating, v.x),
        T = Xx(L.floating, v.y);
      return h
        ? {
            ...W,
            transform: "translate(" + ge + "px, " + T + "px)",
            ...(bw(L.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: ge, top: T };
    }, [r, h, L.floating, v.x, v.y]);
  return y.useMemo(
    () => ({ ...v, update: se, refs: ce, elements: L, floatingStyles: G }),
    [v, se, ce, L, G],
  );
}
const HR = (t) => {
    function n(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(r) {
        const { element: i, padding: l } = typeof t == "function" ? t(r) : t;
        return i && n(i)
          ? i.current != null
            ? $x({ element: i.current, padding: l }).fn(r)
            : {}
          : i
            ? $x({ element: i, padding: l }).fn(r)
            : {};
      },
    };
  },
  BR = (t, n) => {
    const r = AR(t);
    return { name: r.name, fn: r.fn, options: [t, n] };
  },
  FR = (t, n) => {
    const r = MR(t);
    return { name: r.name, fn: r.fn, options: [t, n] };
  },
  IR = (t, n) => ({ fn: zR(t).fn, options: [t, n] }),
  GR = (t, n) => {
    const r = DR(t);
    return { name: r.name, fn: r.fn, options: [t, n] };
  },
  YR = (t, n) => {
    const r = kR(t);
    return { name: r.name, fn: r.fn, options: [t, n] };
  },
  QR = (t, n) => {
    const r = LR(t);
    return { name: r.name, fn: r.fn, options: [t, n] };
  },
  KR = (t, n) => {
    const r = HR(t);
    return { name: r.name, fn: r.fn, options: [t, n] };
  };
var ZR = "Arrow",
  ww = y.forwardRef((t, n) => {
    const { children: r, width: i = 10, height: l = 5, ...c } = t;
    return d.jsx(qe.svg, {
      ...c,
      ref: n,
      width: i,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? r : d.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
ww.displayName = ZR;
var $R = ww;
function Sw(t) {
  const [n, r] = y.useState(void 0);
  return (
    Ct(() => {
      if (t) {
        r({ width: t.offsetWidth, height: t.offsetHeight });
        const i = new ResizeObserver((l) => {
          if (!Array.isArray(l) || !l.length) return;
          const c = l[0];
          let f, h;
          if ("borderBoxSize" in c) {
            const g = c.borderBoxSize,
              p = Array.isArray(g) ? g[0] : g;
            ((f = p.inlineSize), (h = p.blockSize));
          } else ((f = t.offsetWidth), (h = t.offsetHeight));
          r({ width: f, height: h });
        });
        return (i.observe(t, { box: "border-box" }), () => i.unobserve(t));
      } else r(void 0);
    }, [t]),
    n
  );
}
var zm = "Popper",
  [_w, pu] = fa(zm),
  [XR, Ew] = _w(zm),
  Nw = (t) => {
    const { __scopePopper: n, children: r } = t,
      [i, l] = y.useState(null);
    return d.jsx(XR, { scope: n, anchor: i, onAnchorChange: l, children: r });
  };
Nw.displayName = zm;
var Tw = "PopperAnchor",
  jw = y.forwardRef((t, n) => {
    const { __scopePopper: r, virtualRef: i, ...l } = t,
      c = Ew(Tw, r),
      f = y.useRef(null),
      h = rt(n, f),
      g = y.useRef(null);
    return (
      y.useEffect(() => {
        const p = g.current;
        ((g.current = i?.current || f.current),
          p !== g.current && c.onAnchorChange(g.current));
      }),
      i ? null : d.jsx(qe.div, { ...l, ref: h })
    );
  });
jw.displayName = Tw;
var qm = "PopperContent",
  [WR, JR] = _w(qm),
  Cw = y.forwardRef((t, n) => {
    const {
        __scopePopper: r,
        side: i = "bottom",
        sideOffset: l = 0,
        align: c = "center",
        alignOffset: f = 0,
        arrowPadding: h = 0,
        avoidCollisions: g = !0,
        collisionBoundary: p = [],
        collisionPadding: v = 0,
        sticky: b = "partial",
        hideWhenDetached: S = !1,
        updatePositionStrategy: E = "optimized",
        onPlaced: j,
        ..._
      } = t,
      N = Ew(qm, r),
      [R, O] = y.useState(null),
      D = rt(n, (ye) => O(ye)),
      [z, M] = y.useState(null),
      Y = Sw(z),
      Q = Y?.width ?? 0,
      F = Y?.height ?? 0,
      oe = i + (c !== "center" ? "-" + c : ""),
      ne =
        typeof v == "number"
          ? v
          : { top: 0, right: 0, bottom: 0, left: 0, ...v },
      he = Array.isArray(p) ? p : [p],
      J = he.length > 0,
      se = { padding: ne, boundary: he.filter(tA), altBoundary: J },
      {
        refs: ee,
        floatingStyles: ce,
        placement: L,
        isPositioned: G,
        middlewareData: W,
      } = PR({
        strategy: "fixed",
        placement: oe,
        whileElementsMounted: (...ye) =>
          RR(...ye, { animationFrame: E === "always" }),
        elements: { reference: N.anchor },
        middleware: [
          BR({ mainAxis: l + F, alignmentAxis: f }),
          g &&
            FR({
              mainAxis: !0,
              crossAxis: !1,
              limiter: b === "partial" ? IR() : void 0,
              ...se,
            }),
          g && GR({ ...se }),
          YR({
            ...se,
            apply: ({
              elements: ye,
              rects: Ce,
              availableWidth: De,
              availableHeight: Qe,
            }) => {
              const { width: He, height: We } = Ce.reference,
                mt = ye.floating.style;
              (mt.setProperty("--radix-popper-available-width", `${De}px`),
                mt.setProperty("--radix-popper-available-height", `${Qe}px`),
                mt.setProperty("--radix-popper-anchor-width", `${He}px`),
                mt.setProperty("--radix-popper-anchor-height", `${We}px`));
            },
          }),
          z && KR({ element: z, padding: h }),
          nA({ arrowWidth: Q, arrowHeight: F }),
          S && QR({ strategy: "referenceHidden", ...se }),
        ],
      }),
      [ge, T] = Aw(L),
      Z = xn(j);
    Ct(() => {
      G && Z?.();
    }, [G, Z]);
    const ie = W.arrow?.x,
      ae = W.arrow?.y,
      me = W.arrow?.centerOffset !== 0,
      [Ne, fe] = y.useState();
    return (
      Ct(() => {
        R && fe(window.getComputedStyle(R).zIndex);
      }, [R]),
      d.jsx("div", {
        ref: ee.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ce,
          transform: G ? ce.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ne,
          "--radix-popper-transform-origin": [
            W.transformOrigin?.x,
            W.transformOrigin?.y,
          ].join(" "),
          ...(W.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: t.dir,
        children: d.jsx(WR, {
          scope: r,
          placedSide: ge,
          onArrowChange: M,
          arrowX: ie,
          arrowY: ae,
          shouldHideArrow: me,
          children: d.jsx(qe.div, {
            "data-side": ge,
            "data-align": T,
            ..._,
            ref: D,
            style: { ..._.style, animation: G ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Cw.displayName = qm;
var Ow = "PopperArrow",
  eA = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Rw = y.forwardRef(function (n, r) {
    const { __scopePopper: i, ...l } = n,
      c = JR(Ow, i),
      f = eA[c.placedSide];
    return d.jsx("span", {
      ref: c.onArrowChange,
      style: {
        position: "absolute",
        left: c.arrowX,
        top: c.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[c.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[c.placedSide],
        visibility: c.shouldHideArrow ? "hidden" : void 0,
      },
      children: d.jsx($R, {
        ...l,
        ref: r,
        style: { ...l.style, display: "block" },
      }),
    });
  });
Rw.displayName = Ow;
function tA(t) {
  return t !== null;
}
var nA = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(n) {
    const { placement: r, rects: i, middlewareData: l } = n,
      f = l.arrow?.centerOffset !== 0,
      h = f ? 0 : t.arrowWidth,
      g = f ? 0 : t.arrowHeight,
      [p, v] = Aw(r),
      b = { start: "0%", center: "50%", end: "100%" }[v],
      S = (l.arrow?.x ?? 0) + h / 2,
      E = (l.arrow?.y ?? 0) + g / 2;
    let j = "",
      _ = "";
    return (
      p === "bottom"
        ? ((j = f ? b : `${S}px`), (_ = `${-g}px`))
        : p === "top"
          ? ((j = f ? b : `${S}px`), (_ = `${i.floating.height + g}px`))
          : p === "right"
            ? ((j = `${-g}px`), (_ = f ? b : `${E}px`))
            : p === "left" &&
              ((j = `${i.floating.width + g}px`), (_ = f ? b : `${E}px`)),
      { data: { x: j, y: _ } }
    );
  },
});
function Aw(t) {
  const [n, r = "center"] = t.split("-");
  return [n, r];
}
var Mw = Nw,
  Dw = jw,
  kw = Cw,
  Lw = Rw,
  [gu] = fa("Tooltip", [pu]),
  yu = pu(),
  zw = "TooltipProvider",
  aA = 700,
  Ih = "tooltip.open",
  [rA, Um] = gu(zw),
  qw = (t) => {
    const {
        __scopeTooltip: n,
        delayDuration: r = aA,
        skipDelayDuration: i = 300,
        disableHoverableContent: l = !1,
        children: c,
      } = t,
      f = y.useRef(!0),
      h = y.useRef(!1),
      g = y.useRef(0);
    return (
      y.useEffect(() => {
        const p = g.current;
        return () => window.clearTimeout(p);
      }, []),
      d.jsx(rA, {
        scope: n,
        isOpenDelayedRef: f,
        delayDuration: r,
        onOpen: y.useCallback(() => {
          (window.clearTimeout(g.current), (f.current = !1));
        }, []),
        onClose: y.useCallback(() => {
          (window.clearTimeout(g.current),
            (g.current = window.setTimeout(() => (f.current = !0), i)));
        }, [i]),
        isPointerInTransitRef: h,
        onPointerInTransitChange: y.useCallback((p) => {
          h.current = p;
        }, []),
        disableHoverableContent: l,
        children: c,
      })
    );
  };
qw.displayName = zw;
var Fo = "Tooltip",
  [sA, el] = gu(Fo),
  Uw = (t) => {
    const {
        __scopeTooltip: n,
        children: r,
        open: i,
        defaultOpen: l,
        onOpenChange: c,
        disableHoverableContent: f,
        delayDuration: h,
      } = t,
      g = Um(Fo, t.__scopeTooltip),
      p = yu(n),
      [v, b] = y.useState(null),
      S = za(),
      E = y.useRef(0),
      j = f ?? g.disableHoverableContent,
      _ = h ?? g.delayDuration,
      N = y.useRef(!1),
      [R, O] = Tr({
        prop: i,
        defaultProp: l ?? !1,
        onChange: (Q) => {
          (Q
            ? (g.onOpen(), document.dispatchEvent(new CustomEvent(Ih)))
            : g.onClose(),
            c?.(Q));
        },
        caller: Fo,
      }),
      D = y.useMemo(
        () => (R ? (N.current ? "delayed-open" : "instant-open") : "closed"),
        [R],
      ),
      z = y.useCallback(() => {
        (window.clearTimeout(E.current),
          (E.current = 0),
          (N.current = !1),
          O(!0));
      }, [O]),
      M = y.useCallback(() => {
        (window.clearTimeout(E.current), (E.current = 0), O(!1));
      }, [O]),
      Y = y.useCallback(() => {
        (window.clearTimeout(E.current),
          (E.current = window.setTimeout(() => {
            ((N.current = !0), O(!0), (E.current = 0));
          }, _)));
      }, [_, O]);
    return (
      y.useEffect(
        () => () => {
          E.current && (window.clearTimeout(E.current), (E.current = 0));
        },
        [],
      ),
      d.jsx(Mw, {
        ...p,
        children: d.jsx(sA, {
          scope: n,
          contentId: S,
          open: R,
          stateAttribute: D,
          trigger: v,
          onTriggerChange: b,
          onTriggerEnter: y.useCallback(() => {
            g.isOpenDelayedRef.current ? Y() : z();
          }, [g.isOpenDelayedRef, Y, z]),
          onTriggerLeave: y.useCallback(() => {
            j ? M() : (window.clearTimeout(E.current), (E.current = 0));
          }, [M, j]),
          onOpen: z,
          onClose: M,
          disableHoverableContent: j,
          children: r,
        }),
      })
    );
  };
Uw.displayName = Fo;
var Gh = "TooltipTrigger",
  Vw = y.forwardRef((t, n) => {
    const { __scopeTooltip: r, ...i } = t,
      l = el(Gh, r),
      c = Um(Gh, r),
      f = yu(r),
      h = y.useRef(null),
      g = rt(n, h, l.onTriggerChange),
      p = y.useRef(!1),
      v = y.useRef(!1),
      b = y.useCallback(() => (p.current = !1), []);
    return (
      y.useEffect(
        () => () => document.removeEventListener("pointerup", b),
        [b],
      ),
      d.jsx(Dw, {
        asChild: !0,
        ...f,
        children: d.jsx(qe.button, {
          "aria-describedby": l.open ? l.contentId : void 0,
          "data-state": l.stateAttribute,
          ...i,
          ref: g,
          onPointerMove: Oe(t.onPointerMove, (S) => {
            S.pointerType !== "touch" &&
              !v.current &&
              !c.isPointerInTransitRef.current &&
              (l.onTriggerEnter(), (v.current = !0));
          }),
          onPointerLeave: Oe(t.onPointerLeave, () => {
            (l.onTriggerLeave(), (v.current = !1));
          }),
          onPointerDown: Oe(t.onPointerDown, () => {
            (l.open && l.onClose(),
              (p.current = !0),
              document.addEventListener("pointerup", b, { once: !0 }));
          }),
          onFocus: Oe(t.onFocus, () => {
            p.current || l.onOpen();
          }),
          onBlur: Oe(t.onBlur, l.onClose),
          onClick: Oe(t.onClick, l.onClose),
        }),
      })
    );
  });
Vw.displayName = Gh;
var Vm = "TooltipPortal",
  [iA, oA] = gu(Vm, { forceMount: void 0 }),
  Pw = (t) => {
    const { __scopeTooltip: n, forceMount: r, children: i, container: l } = t,
      c = el(Vm, n);
    return d.jsx(iA, {
      scope: n,
      forceMount: r,
      children: d.jsx(Ha, {
        present: r || c.open,
        children: d.jsx(Xo, { asChild: !0, container: l, children: i }),
      }),
    });
  };
Pw.displayName = Vm;
var fi = "TooltipContent",
  Hw = y.forwardRef((t, n) => {
    const r = oA(fi, t.__scopeTooltip),
      { forceMount: i = r.forceMount, side: l = "top", ...c } = t,
      f = el(fi, t.__scopeTooltip);
    return d.jsx(Ha, {
      present: i || f.open,
      children: f.disableHoverableContent
        ? d.jsx(Bw, { side: l, ...c, ref: n })
        : d.jsx(lA, { side: l, ...c, ref: n }),
    });
  }),
  lA = y.forwardRef((t, n) => {
    const r = el(fi, t.__scopeTooltip),
      i = Um(fi, t.__scopeTooltip),
      l = y.useRef(null),
      c = rt(n, l),
      [f, h] = y.useState(null),
      { trigger: g, onClose: p } = r,
      v = l.current,
      { onPointerInTransitChange: b } = i,
      S = y.useCallback(() => {
        (h(null), b(!1));
      }, [b]),
      E = y.useCallback(
        (j, _) => {
          const N = j.currentTarget,
            R = { x: j.clientX, y: j.clientY },
            O = hA(R, N.getBoundingClientRect()),
            D = mA(R, O),
            z = pA(_.getBoundingClientRect()),
            M = yA([...D, ...z]);
          (h(M), b(!0));
        },
        [b],
      );
    return (
      y.useEffect(() => () => S(), [S]),
      y.useEffect(() => {
        if (g && v) {
          const j = (N) => E(N, v),
            _ = (N) => E(N, g);
          return (
            g.addEventListener("pointerleave", j),
            v.addEventListener("pointerleave", _),
            () => {
              (g.removeEventListener("pointerleave", j),
                v.removeEventListener("pointerleave", _));
            }
          );
        }
      }, [g, v, E, S]),
      y.useEffect(() => {
        if (f) {
          const j = (_) => {
            const N = _.target,
              R = { x: _.clientX, y: _.clientY },
              O = g?.contains(N) || v?.contains(N),
              D = !gA(R, f);
            O ? S() : D && (S(), p());
          };
          return (
            document.addEventListener("pointermove", j),
            () => document.removeEventListener("pointermove", j)
          );
        }
      }, [g, v, f, p, S]),
      d.jsx(Bw, { ...t, ref: c })
    );
  }),
  [cA, uA] = gu(Fo, { isInside: !1 }),
  dA = bj("TooltipContent"),
  Bw = y.forwardRef((t, n) => {
    const {
        __scopeTooltip: r,
        children: i,
        "aria-label": l,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        ...h
      } = t,
      g = el(fi, r),
      p = yu(r),
      { onClose: v } = g;
    return (
      y.useEffect(
        () => (
          document.addEventListener(Ih, v),
          () => document.removeEventListener(Ih, v)
        ),
        [v],
      ),
      y.useEffect(() => {
        if (g.trigger) {
          const b = (S) => {
            S.target?.contains(g.trigger) && v();
          };
          return (
            window.addEventListener("scroll", b, { capture: !0 }),
            () => window.removeEventListener("scroll", b, { capture: !0 })
          );
        }
      }, [g.trigger, v]),
      d.jsx($o, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: (b) => b.preventDefault(),
        onDismiss: v,
        children: d.jsxs(kw, {
          "data-state": g.stateAttribute,
          ...p,
          ...h,
          ref: n,
          style: {
            ...h.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            d.jsx(dA, { children: i }),
            d.jsx(cA, {
              scope: r,
              isInside: !0,
              children: d.jsx(Bj, {
                id: g.contentId,
                role: "tooltip",
                children: l || i,
              }),
            }),
          ],
        }),
      })
    );
  });
Hw.displayName = fi;
var Fw = "TooltipArrow",
  fA = y.forwardRef((t, n) => {
    const { __scopeTooltip: r, ...i } = t,
      l = yu(r);
    return uA(Fw, r).isInside ? null : d.jsx(Lw, { ...l, ...i, ref: n });
  });
fA.displayName = Fw;
function hA(t, n) {
  const r = Math.abs(n.top - t.y),
    i = Math.abs(n.bottom - t.y),
    l = Math.abs(n.right - t.x),
    c = Math.abs(n.left - t.x);
  switch (Math.min(r, i, l, c)) {
    case c:
      return "left";
    case l:
      return "right";
    case r:
      return "top";
    case i:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function mA(t, n, r = 5) {
  const i = [];
  switch (n) {
    case "top":
      i.push({ x: t.x - r, y: t.y + r }, { x: t.x + r, y: t.y + r });
      break;
    case "bottom":
      i.push({ x: t.x - r, y: t.y - r }, { x: t.x + r, y: t.y - r });
      break;
    case "left":
      i.push({ x: t.x + r, y: t.y - r }, { x: t.x + r, y: t.y + r });
      break;
    case "right":
      i.push({ x: t.x - r, y: t.y - r }, { x: t.x - r, y: t.y + r });
      break;
  }
  return i;
}
function pA(t) {
  const { top: n, right: r, bottom: i, left: l } = t;
  return [
    { x: l, y: n },
    { x: r, y: n },
    { x: r, y: i },
    { x: l, y: i },
  ];
}
function gA(t, n) {
  const { x: r, y: i } = t;
  let l = !1;
  for (let c = 0, f = n.length - 1; c < n.length; f = c++) {
    const h = n[c],
      g = n[f],
      p = h.x,
      v = h.y,
      b = g.x,
      S = g.y;
    v > i != S > i && r < ((b - p) * (i - v)) / (S - v) + p && (l = !l);
  }
  return l;
}
function yA(t) {
  const n = t.slice();
  return (
    n.sort((r, i) =>
      r.x < i.x ? -1 : r.x > i.x ? 1 : r.y < i.y ? -1 : r.y > i.y ? 1 : 0,
    ),
    vA(n)
  );
}
function vA(t) {
  if (t.length <= 1) return t.slice();
  const n = [];
  for (let i = 0; i < t.length; i++) {
    const l = t[i];
    for (; n.length >= 2; ) {
      const c = n[n.length - 1],
        f = n[n.length - 2];
      if ((c.x - f.x) * (l.y - f.y) >= (c.y - f.y) * (l.x - f.x)) n.pop();
      else break;
    }
    n.push(l);
  }
  n.pop();
  const r = [];
  for (let i = t.length - 1; i >= 0; i--) {
    const l = t[i];
    for (; r.length >= 2; ) {
      const c = r[r.length - 1],
        f = r[r.length - 2];
      if ((c.x - f.x) * (l.y - f.y) >= (c.y - f.y) * (l.x - f.x)) r.pop();
      else break;
    }
    r.push(l);
  }
  return (
    r.pop(),
    n.length === 1 && r.length === 1 && n[0].x === r[0].x && n[0].y === r[0].y
      ? n
      : n.concat(r)
  );
}
var xA = qw,
  bA = Uw,
  wA = Vw,
  SA = Pw,
  Iw = Hw;
const Gw = xA,
  _A = bA,
  EA = wA,
  Yw = y.forwardRef(({ className: t, sideOffset: n = 4, ...r }, i) =>
    d.jsx(SA, {
      children: d.jsx(Iw, {
        ref: i,
        sideOffset: n,
        className: we(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          t,
        ),
        ...r,
      }),
    }),
  );
Yw.displayName = Iw.displayName;
var NA = Symbol.for("react.lazy"),
  Ic = ru[" use ".trim().toString()];
function TA(t) {
  return typeof t == "object" && t !== null && "then" in t;
}
function Qw(t) {
  return (
    t != null &&
    typeof t == "object" &&
    "$$typeof" in t &&
    t.$$typeof === NA &&
    "_payload" in t &&
    TA(t._payload)
  );
}
function Kw(t) {
  const n = jA(t),
    r = y.forwardRef((i, l) => {
      let { children: c, ...f } = i;
      Qw(c) && typeof Ic == "function" && (c = Ic(c._payload));
      const h = y.Children.toArray(c),
        g = h.find(OA);
      if (g) {
        const p = g.props.children,
          v = h.map((b) =>
            b === g
              ? y.Children.count(p) > 1
                ? y.Children.only(null)
                : y.isValidElement(p)
                  ? p.props.children
                  : null
              : b,
          );
        return d.jsx(n, {
          ...f,
          ref: l,
          children: y.isValidElement(p) ? y.cloneElement(p, void 0, v) : null,
        });
      }
      return d.jsx(n, { ...f, ref: l, children: c });
    });
  return ((r.displayName = `${t}.Slot`), r);
}
var Pm = Kw("Slot");
function jA(t) {
  const n = y.forwardRef((r, i) => {
    let { children: l, ...c } = r;
    if (
      (Qw(l) && typeof Ic == "function" && (l = Ic(l._payload)),
      y.isValidElement(l))
    ) {
      const f = AA(l),
        h = RA(c, l.props);
      return (
        l.type !== y.Fragment && (h.ref = i ? xm(i, f) : f),
        y.cloneElement(l, h)
      );
    }
    return y.Children.count(l) > 1 ? y.Children.only(null) : null;
  });
  return ((n.displayName = `${t}.SlotClone`), n);
}
var CA = Symbol("radix.slottable");
function OA(t) {
  return (
    y.isValidElement(t) &&
    typeof t.type == "function" &&
    "__radixId" in t.type &&
    t.type.__radixId === CA
  );
}
function RA(t, n) {
  const r = { ...n };
  for (const i in n) {
    const l = t[i],
      c = n[i];
    /^on[A-Z]/.test(i)
      ? l && c
        ? (r[i] = (...h) => {
            const g = c(...h);
            return (l(...h), g);
          })
        : l && (r[i] = l)
      : i === "style"
        ? (r[i] = { ...l, ...c })
        : i === "className" && (r[i] = [l, c].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
function AA(t) {
  let n = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    r = n && "isReactWarning" in n && n.isReactWarning;
  return r
    ? t.ref
    : ((n = Object.getOwnPropertyDescriptor(t, "ref")?.get),
      (r = n && "isReactWarning" in n && n.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
const gh = 768;
function MA() {
  const [t, n] = y.useState(void 0);
  return (
    y.useEffect(() => {
      const r = window.matchMedia(`(max-width: ${gh - 1}px)`),
        i = () => {
          n(window.innerWidth < gh);
        };
      return (
        r.addEventListener("change", i),
        n(window.innerWidth < gh),
        () => r.removeEventListener("change", i)
      );
    }, []),
    !!t
  );
}
const DA = Si(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground border border-primary-border",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
          outline:
            " border [border-color:var(--button-outline)] shadow-xs active:shadow-none ",
          secondary:
            "border bg-secondary text-secondary-foreground border border-secondary-border ",
          ghost: "border border-transparent",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "min-h-9 px-4 py-2",
          sm: "min-h-8 rounded-md px-3 text-xs",
          lg: "min-h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  bt = y.forwardRef(
    ({ className: t, variant: n, size: r, asChild: i = !1, ...l }, c) => {
      const f = i ? Pm : "button";
      return d.jsx(f, {
        className: we(DA({ variant: n, size: r, className: t })),
        ref: c,
        ...l,
      });
    },
  );
bt.displayName = "Button";
const hi = y.forwardRef(({ className: t, type: n, ...r }, i) =>
  d.jsx("input", {
    type: n,
    className: we(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t,
    ),
    ref: i,
    ...r,
  }),
);
hi.displayName = "Input";
var kA = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  tl = kA.reduce((t, n) => {
    const r = Kw(`Primitive.${n}`),
      i = y.forwardRef((l, c) => {
        const { asChild: f, ...h } = l,
          g = f ? r : n;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          d.jsx(g, { ...h, ref: c })
        );
      });
    return ((i.displayName = `Primitive.${n}`), { ...t, [n]: i });
  }, {}),
  LA = "Separator",
  Wx = "horizontal",
  zA = ["horizontal", "vertical"],
  Zw = y.forwardRef((t, n) => {
    const { decorative: r, orientation: i = Wx, ...l } = t,
      c = qA(i) ? i : Wx,
      h = r
        ? { role: "none" }
        : {
            "aria-orientation": c === "vertical" ? c : void 0,
            role: "separator",
          };
    return d.jsx(tl.div, { "data-orientation": c, ...h, ...l, ref: n });
  });
Zw.displayName = LA;
function qA(t) {
  return zA.includes(t);
}
var $w = Zw;
const UA = y.forwardRef(
  (
    { className: t, orientation: n = "horizontal", decorative: r = !0, ...i },
    l,
  ) =>
    d.jsx($w, {
      ref: l,
      decorative: r,
      orientation: n,
      className: we(
        "shrink-0 bg-border",
        n === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t,
      ),
      ...i,
    }),
);
UA.displayName = $w.displayName;
var yh = "focusScope.autoFocusOnMount",
  vh = "focusScope.autoFocusOnUnmount",
  Jx = { bubbles: !1, cancelable: !0 },
  VA = "FocusScope",
  Hm = y.forwardRef((t, n) => {
    const {
        loop: r = !1,
        trapped: i = !1,
        onMountAutoFocus: l,
        onUnmountAutoFocus: c,
        ...f
      } = t,
      [h, g] = y.useState(null),
      p = xn(l),
      v = xn(c),
      b = y.useRef(null),
      S = rt(n, (_) => g(_)),
      E = y.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (y.useEffect(() => {
      if (i) {
        let _ = function (D) {
            if (E.paused || !h) return;
            const z = D.target;
            h.contains(z) ? (b.current = z) : xr(b.current, { select: !0 });
          },
          N = function (D) {
            if (E.paused || !h) return;
            const z = D.relatedTarget;
            z !== null && (h.contains(z) || xr(b.current, { select: !0 }));
          },
          R = function (D) {
            if (document.activeElement === document.body)
              for (const M of D) M.removedNodes.length > 0 && xr(h);
          };
        (document.addEventListener("focusin", _),
          document.addEventListener("focusout", N));
        const O = new MutationObserver(R);
        return (
          h && O.observe(h, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", _),
              document.removeEventListener("focusout", N),
              O.disconnect());
          }
        );
      }
    }, [i, h, E.paused]),
      y.useEffect(() => {
        if (h) {
          tb.add(E);
          const _ = document.activeElement;
          if (!h.contains(_)) {
            const R = new CustomEvent(yh, Jx);
            (h.addEventListener(yh, p),
              h.dispatchEvent(R),
              R.defaultPrevented ||
                (PA(GA(Xw(h)), { select: !0 }),
                document.activeElement === _ && xr(h)));
          }
          return () => {
            (h.removeEventListener(yh, p),
              setTimeout(() => {
                const R = new CustomEvent(vh, Jx);
                (h.addEventListener(vh, v),
                  h.dispatchEvent(R),
                  R.defaultPrevented || xr(_ ?? document.body, { select: !0 }),
                  h.removeEventListener(vh, v),
                  tb.remove(E));
              }, 0));
          };
        }
      }, [h, p, v, E]));
    const j = y.useCallback(
      (_) => {
        if ((!r && !i) || E.paused) return;
        const N = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey,
          R = document.activeElement;
        if (N && R) {
          const O = _.currentTarget,
            [D, z] = HA(O);
          D && z
            ? !_.shiftKey && R === z
              ? (_.preventDefault(), r && xr(D, { select: !0 }))
              : _.shiftKey &&
                R === D &&
                (_.preventDefault(), r && xr(z, { select: !0 }))
            : R === O && _.preventDefault();
        }
      },
      [r, i, E.paused],
    );
    return d.jsx(qe.div, { tabIndex: -1, ...f, ref: S, onKeyDown: j });
  });
Hm.displayName = VA;
function PA(t, { select: n = !1 } = {}) {
  const r = document.activeElement;
  for (const i of t)
    if ((xr(i, { select: n }), document.activeElement !== r)) return;
}
function HA(t) {
  const n = Xw(t),
    r = eb(n, t),
    i = eb(n.reverse(), t);
  return [r, i];
}
function Xw(t) {
  const n = [],
    r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const l = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || l
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) n.push(r.currentNode);
  return n;
}
function eb(t, n) {
  for (const r of t) if (!BA(r, { upTo: n })) return r;
}
function BA(t, { upTo: n }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (n !== void 0 && t === n) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function FA(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function xr(t, { select: n = !1 } = {}) {
  if (t && t.focus) {
    const r = document.activeElement;
    (t.focus({ preventScroll: !0 }), t !== r && FA(t) && n && t.select());
  }
}
var tb = IA();
function IA() {
  let t = [];
  return {
    add(n) {
      const r = t[0];
      (n !== r && r?.pause(), (t = nb(t, n)), t.unshift(n));
    },
    remove(n) {
      ((t = nb(t, n)), t[0]?.resume());
    },
  };
}
function nb(t, n) {
  const r = [...t],
    i = r.indexOf(n);
  return (i !== -1 && r.splice(i, 1), r);
}
function GA(t) {
  return t.filter((n) => n.tagName !== "A");
}
var xh = 0;
function Ww() {
  y.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", t[0] ?? ab()),
      document.body.insertAdjacentElement("beforeend", t[1] ?? ab()),
      xh++,
      () => {
        (xh === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((n) => n.remove()),
          xh--);
      }
    );
  }, []);
}
function ab() {
  const t = document.createElement("span");
  return (
    t.setAttribute("data-radix-focus-guard", ""),
    (t.tabIndex = 0),
    (t.style.outline = "none"),
    (t.style.opacity = "0"),
    (t.style.position = "fixed"),
    (t.style.pointerEvents = "none"),
    t
  );
}
var ia = function () {
  return (
    (ia =
      Object.assign ||
      function (n) {
        for (var r, i = 1, l = arguments.length; i < l; i++) {
          r = arguments[i];
          for (var c in r)
            Object.prototype.hasOwnProperty.call(r, c) && (n[c] = r[c]);
        }
        return n;
      }),
    ia.apply(this, arguments)
  );
};
function Jw(t, n) {
  var r = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      n.indexOf(i) < 0 &&
      (r[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(t); l < i.length; l++)
      n.indexOf(i[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[l]) &&
        (r[i[l]] = t[i[l]]);
  return r;
}
function YA(t, n, r) {
  if (r || arguments.length === 2)
    for (var i = 0, l = n.length, c; i < l; i++)
      (c || !(i in n)) &&
        (c || (c = Array.prototype.slice.call(n, 0, i)), (c[i] = n[i]));
  return t.concat(c || Array.prototype.slice.call(n));
}
var Dc = "right-scroll-bar-position",
  kc = "width-before-scroll-bar",
  QA = "with-scroll-bars-hidden",
  KA = "--removed-body-scroll-bar-size";
function bh(t, n) {
  return (typeof t == "function" ? t(n) : t && (t.current = n), t);
}
function ZA(t, n) {
  var r = y.useState(function () {
    return {
      value: t,
      callback: n,
      facade: {
        get current() {
          return r.value;
        },
        set current(i) {
          var l = r.value;
          l !== i && ((r.value = i), r.callback(i, l));
        },
      },
    };
  })[0];
  return ((r.callback = n), r.facade);
}
var $A = typeof window < "u" ? y.useLayoutEffect : y.useEffect,
  rb = new WeakMap();
function XA(t, n) {
  var r = ZA(null, function (i) {
    return t.forEach(function (l) {
      return bh(l, i);
    });
  });
  return (
    $A(
      function () {
        var i = rb.get(r);
        if (i) {
          var l = new Set(i),
            c = new Set(t),
            f = r.current;
          (l.forEach(function (h) {
            c.has(h) || bh(h, null);
          }),
            c.forEach(function (h) {
              l.has(h) || bh(h, f);
            }));
        }
        rb.set(r, t);
      },
      [t],
    ),
    r
  );
}
function WA(t) {
  return t;
}
function JA(t, n) {
  n === void 0 && (n = WA);
  var r = [],
    i = !1,
    l = {
      read: function () {
        if (i)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return r.length ? r[r.length - 1] : t;
      },
      useMedium: function (c) {
        var f = n(c, i);
        return (
          r.push(f),
          function () {
            r = r.filter(function (h) {
              return h !== f;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (i = !0; r.length; ) {
          var f = r;
          ((r = []), f.forEach(c));
        }
        r = {
          push: function (h) {
            return c(h);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (c) {
        i = !0;
        var f = [];
        if (r.length) {
          var h = r;
          ((r = []), h.forEach(c), (f = r));
        }
        var g = function () {
            var v = f;
            ((f = []), v.forEach(c));
          },
          p = function () {
            return Promise.resolve().then(g);
          };
        (p(),
          (r = {
            push: function (v) {
              (f.push(v), p());
            },
            filter: function (v) {
              return ((f = f.filter(v)), r);
            },
          }));
      },
    };
  return l;
}
function e2(t) {
  t === void 0 && (t = {});
  var n = JA(null);
  return ((n.options = ia({ async: !0, ssr: !1 }, t)), n);
}
var eS = function (t) {
  var n = t.sideCar,
    r = Jw(t, ["sideCar"]);
  if (!n)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var i = n.read();
  if (!i) throw new Error("Sidecar medium not found");
  return y.createElement(i, ia({}, r));
};
eS.isSideCarExport = !0;
function t2(t, n) {
  return (t.useMedium(n), eS);
}
var tS = e2(),
  wh = function () {},
  vu = y.forwardRef(function (t, n) {
    var r = y.useRef(null),
      i = y.useState({
        onScrollCapture: wh,
        onWheelCapture: wh,
        onTouchMoveCapture: wh,
      }),
      l = i[0],
      c = i[1],
      f = t.forwardProps,
      h = t.children,
      g = t.className,
      p = t.removeScrollBar,
      v = t.enabled,
      b = t.shards,
      S = t.sideCar,
      E = t.noRelative,
      j = t.noIsolation,
      _ = t.inert,
      N = t.allowPinchZoom,
      R = t.as,
      O = R === void 0 ? "div" : R,
      D = t.gapMode,
      z = Jw(t, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      M = S,
      Y = XA([r, n]),
      Q = ia(ia({}, z), l);
    return y.createElement(
      y.Fragment,
      null,
      v &&
        y.createElement(M, {
          sideCar: tS,
          removeScrollBar: p,
          shards: b,
          noRelative: E,
          noIsolation: j,
          inert: _,
          setCallbacks: c,
          allowPinchZoom: !!N,
          lockRef: r,
          gapMode: D,
        }),
      f
        ? y.cloneElement(y.Children.only(h), ia(ia({}, Q), { ref: Y }))
        : y.createElement(O, ia({}, Q, { className: g, ref: Y }), h),
    );
  });
vu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
vu.classNames = { fullWidth: kc, zeroRight: Dc };
var n2 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function a2() {
  if (!document) return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var n = n2();
  return (n && t.setAttribute("nonce", n), t);
}
function r2(t, n) {
  t.styleSheet
    ? (t.styleSheet.cssText = n)
    : t.appendChild(document.createTextNode(n));
}
function s2(t) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(t);
}
var i2 = function () {
    var t = 0,
      n = null;
    return {
      add: function (r) {
        (t == 0 && (n = a2()) && (r2(n, r), s2(n)), t++);
      },
      remove: function () {
        (t--,
          !t && n && (n.parentNode && n.parentNode.removeChild(n), (n = null)));
      },
    };
  },
  o2 = function () {
    var t = i2();
    return function (n, r) {
      y.useEffect(
        function () {
          return (
            t.add(n),
            function () {
              t.remove();
            }
          );
        },
        [n && r],
      );
    };
  },
  nS = function () {
    var t = o2(),
      n = function (r) {
        var i = r.styles,
          l = r.dynamic;
        return (t(i, l), null);
      };
    return n;
  },
  l2 = { left: 0, top: 0, right: 0, gap: 0 },
  Sh = function (t) {
    return parseInt(t || "", 10) || 0;
  },
  c2 = function (t) {
    var n = window.getComputedStyle(document.body),
      r = n[t === "padding" ? "paddingLeft" : "marginLeft"],
      i = n[t === "padding" ? "paddingTop" : "marginTop"],
      l = n[t === "padding" ? "paddingRight" : "marginRight"];
    return [Sh(r), Sh(i), Sh(l)];
  },
  u2 = function (t) {
    if ((t === void 0 && (t = "margin"), typeof window > "u")) return l2;
    var n = c2(t),
      r = document.documentElement.clientWidth,
      i = window.innerWidth;
    return {
      left: n[0],
      top: n[1],
      right: n[2],
      gap: Math.max(0, i - r + n[2] - n[0]),
    };
  },
  d2 = nS(),
  ui = "data-scroll-locked",
  f2 = function (t, n, r, i) {
    var l = t.left,
      c = t.top,
      f = t.right,
      h = t.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          QA,
          ` {
   overflow: hidden `,
        )
        .concat(
          i,
          `;
   padding-right: `,
        )
        .concat(h, "px ")
        .concat(
          i,
          `;
  }
  body[`,
        )
        .concat(
          ui,
          `] {
    overflow: hidden `,
        )
        .concat(
          i,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            n && "position: relative ".concat(i, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  l,
                  `px;
    padding-top: `,
                )
                .concat(
                  c,
                  `px;
    padding-right: `,
                )
                .concat(
                  f,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(h, "px ")
                .concat(
                  i,
                  `;
    `,
                ),
            r === "padding" &&
              "padding-right: ".concat(h, "px ").concat(i, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Dc,
          ` {
    right: `,
        )
        .concat(h, "px ")
        .concat(
          i,
          `;
  }
  
  .`,
        )
        .concat(
          kc,
          ` {
    margin-right: `,
        )
        .concat(h, "px ")
        .concat(
          i,
          `;
  }
  
  .`,
        )
        .concat(Dc, " .")
        .concat(
          Dc,
          ` {
    right: 0 `,
        )
        .concat(
          i,
          `;
  }
  
  .`,
        )
        .concat(kc, " .")
        .concat(
          kc,
          ` {
    margin-right: 0 `,
        )
        .concat(
          i,
          `;
  }
  
  body[`,
        )
        .concat(
          ui,
          `] {
    `,
        )
        .concat(KA, ": ")
        .concat(
          h,
          `px;
  }
`,
        )
    );
  },
  sb = function () {
    var t = parseInt(document.body.getAttribute(ui) || "0", 10);
    return isFinite(t) ? t : 0;
  },
  h2 = function () {
    y.useEffect(function () {
      return (
        document.body.setAttribute(ui, (sb() + 1).toString()),
        function () {
          var t = sb() - 1;
          t <= 0
            ? document.body.removeAttribute(ui)
            : document.body.setAttribute(ui, t.toString());
        }
      );
    }, []);
  },
  m2 = function (t) {
    var n = t.noRelative,
      r = t.noImportant,
      i = t.gapMode,
      l = i === void 0 ? "margin" : i;
    h2();
    var c = y.useMemo(
      function () {
        return u2(l);
      },
      [l],
    );
    return y.createElement(d2, { styles: f2(c, !n, l, r ? "" : "!important") });
  },
  Yh = !1;
if (typeof window < "u")
  try {
    var _c = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Yh = !0), !0);
      },
    });
    (window.addEventListener("test", _c, _c),
      window.removeEventListener("test", _c, _c));
  } catch {
    Yh = !1;
  }
var ti = Yh ? { passive: !1 } : !1,
  p2 = function (t) {
    return t.tagName === "TEXTAREA";
  },
  aS = function (t, n) {
    if (!(t instanceof Element)) return !1;
    var r = window.getComputedStyle(t);
    return (
      r[n] !== "hidden" &&
      !(r.overflowY === r.overflowX && !p2(t) && r[n] === "visible")
    );
  },
  g2 = function (t) {
    return aS(t, "overflowY");
  },
  y2 = function (t) {
    return aS(t, "overflowX");
  },
  ib = function (t, n) {
    var r = n.ownerDocument,
      i = n;
    do {
      typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
      var l = rS(t, i);
      if (l) {
        var c = sS(t, i),
          f = c[1],
          h = c[2];
        if (f > h) return !0;
      }
      i = i.parentNode;
    } while (i && i !== r.body);
    return !1;
  },
  v2 = function (t) {
    var n = t.scrollTop,
      r = t.scrollHeight,
      i = t.clientHeight;
    return [n, r, i];
  },
  x2 = function (t) {
    var n = t.scrollLeft,
      r = t.scrollWidth,
      i = t.clientWidth;
    return [n, r, i];
  },
  rS = function (t, n) {
    return t === "v" ? g2(n) : y2(n);
  },
  sS = function (t, n) {
    return t === "v" ? v2(n) : x2(n);
  },
  b2 = function (t, n) {
    return t === "h" && n === "rtl" ? -1 : 1;
  },
  w2 = function (t, n, r, i, l) {
    var c = b2(t, window.getComputedStyle(n).direction),
      f = c * i,
      h = r.target,
      g = n.contains(h),
      p = !1,
      v = f > 0,
      b = 0,
      S = 0;
    do {
      if (!h) break;
      var E = sS(t, h),
        j = E[0],
        _ = E[1],
        N = E[2],
        R = _ - N - c * j;
      (j || R) && rS(t, h) && ((b += R), (S += j));
      var O = h.parentNode;
      h = O && O.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? O.host : O;
    } while ((!g && h !== document.body) || (g && (n.contains(h) || n === h)));
    return (((v && Math.abs(b) < 1) || (!v && Math.abs(S) < 1)) && (p = !0), p);
  },
  Ec = function (t) {
    return "changedTouches" in t
      ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
      : [0, 0];
  },
  ob = function (t) {
    return [t.deltaX, t.deltaY];
  },
  lb = function (t) {
    return t && "current" in t ? t.current : t;
  },
  S2 = function (t, n) {
    return t[0] === n[0] && t[1] === n[1];
  },
  _2 = function (t) {
    return `
  .block-interactivity-`
      .concat(
        t,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        t,
        ` {pointer-events: all;}
`,
      );
  },
  E2 = 0,
  ni = [];
function N2(t) {
  var n = y.useRef([]),
    r = y.useRef([0, 0]),
    i = y.useRef(),
    l = y.useState(E2++)[0],
    c = y.useState(nS)[0],
    f = y.useRef(t);
  (y.useEffect(
    function () {
      f.current = t;
    },
    [t],
  ),
    y.useEffect(
      function () {
        if (t.inert) {
          document.body.classList.add("block-interactivity-".concat(l));
          var _ = YA([t.lockRef.current], (t.shards || []).map(lb), !0).filter(
            Boolean,
          );
          return (
            _.forEach(function (N) {
              return N.classList.add("allow-interactivity-".concat(l));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(l)),
                _.forEach(function (N) {
                  return N.classList.remove("allow-interactivity-".concat(l));
                }));
            }
          );
        }
      },
      [t.inert, t.lockRef.current, t.shards],
    ));
  var h = y.useCallback(function (_, N) {
      if (
        ("touches" in _ && _.touches.length === 2) ||
        (_.type === "wheel" && _.ctrlKey)
      )
        return !f.current.allowPinchZoom;
      var R = Ec(_),
        O = r.current,
        D = "deltaX" in _ ? _.deltaX : O[0] - R[0],
        z = "deltaY" in _ ? _.deltaY : O[1] - R[1],
        M,
        Y = _.target,
        Q = Math.abs(D) > Math.abs(z) ? "h" : "v";
      if ("touches" in _ && Q === "h" && Y.type === "range") return !1;
      var F = window.getSelection(),
        oe = F && F.anchorNode,
        ne = oe ? oe === Y || oe.contains(Y) : !1;
      if (ne) return !1;
      var he = ib(Q, Y);
      if (!he) return !0;
      if ((he ? (M = Q) : ((M = Q === "v" ? "h" : "v"), (he = ib(Q, Y))), !he))
        return !1;
      if (
        (!i.current && "changedTouches" in _ && (D || z) && (i.current = M), !M)
      )
        return !0;
      var J = i.current || M;
      return w2(J, N, _, J === "h" ? D : z);
    }, []),
    g = y.useCallback(function (_) {
      var N = _;
      if (!(!ni.length || ni[ni.length - 1] !== c)) {
        var R = "deltaY" in N ? ob(N) : Ec(N),
          O = n.current.filter(function (M) {
            return (
              M.name === N.type &&
              (M.target === N.target || N.target === M.shadowParent) &&
              S2(M.delta, R)
            );
          })[0];
        if (O && O.should) {
          N.cancelable && N.preventDefault();
          return;
        }
        if (!O) {
          var D = (f.current.shards || [])
              .map(lb)
              .filter(Boolean)
              .filter(function (M) {
                return M.contains(N.target);
              }),
            z = D.length > 0 ? h(N, D[0]) : !f.current.noIsolation;
          z && N.cancelable && N.preventDefault();
        }
      }
    }, []),
    p = y.useCallback(function (_, N, R, O) {
      var D = { name: _, delta: N, target: R, should: O, shadowParent: T2(R) };
      (n.current.push(D),
        setTimeout(function () {
          n.current = n.current.filter(function (z) {
            return z !== D;
          });
        }, 1));
    }, []),
    v = y.useCallback(function (_) {
      ((r.current = Ec(_)), (i.current = void 0));
    }, []),
    b = y.useCallback(function (_) {
      p(_.type, ob(_), _.target, h(_, t.lockRef.current));
    }, []),
    S = y.useCallback(function (_) {
      p(_.type, Ec(_), _.target, h(_, t.lockRef.current));
    }, []);
  y.useEffect(function () {
    return (
      ni.push(c),
      t.setCallbacks({
        onScrollCapture: b,
        onWheelCapture: b,
        onTouchMoveCapture: S,
      }),
      document.addEventListener("wheel", g, ti),
      document.addEventListener("touchmove", g, ti),
      document.addEventListener("touchstart", v, ti),
      function () {
        ((ni = ni.filter(function (_) {
          return _ !== c;
        })),
          document.removeEventListener("wheel", g, ti),
          document.removeEventListener("touchmove", g, ti),
          document.removeEventListener("touchstart", v, ti));
      }
    );
  }, []);
  var E = t.removeScrollBar,
    j = t.inert;
  return y.createElement(
    y.Fragment,
    null,
    j ? y.createElement(c, { styles: _2(l) }) : null,
    E
      ? y.createElement(m2, { noRelative: t.noRelative, gapMode: t.gapMode })
      : null,
  );
}
function T2(t) {
  for (var n = null; t !== null; )
    (t instanceof ShadowRoot && ((n = t.host), (t = t.host)),
      (t = t.parentNode));
  return n;
}
const j2 = t2(tS, N2);
var Bm = y.forwardRef(function (t, n) {
  return y.createElement(vu, ia({}, t, { ref: n, sideCar: j2 }));
});
Bm.classNames = vu.classNames;
var C2 = function (t) {
    if (typeof document > "u") return null;
    var n = Array.isArray(t) ? t[0] : t;
    return n.ownerDocument.body;
  },
  ai = new WeakMap(),
  Nc = new WeakMap(),
  Tc = {},
  _h = 0,
  iS = function (t) {
    return t && (t.host || iS(t.parentNode));
  },
  O2 = function (t, n) {
    return n
      .map(function (r) {
        if (t.contains(r)) return r;
        var i = iS(r);
        return i && t.contains(i)
          ? i
          : (console.error(
              "aria-hidden",
              r,
              "in not contained inside",
              t,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  R2 = function (t, n, r, i) {
    var l = O2(n, Array.isArray(t) ? t : [t]);
    Tc[r] || (Tc[r] = new WeakMap());
    var c = Tc[r],
      f = [],
      h = new Set(),
      g = new Set(l),
      p = function (b) {
        !b || h.has(b) || (h.add(b), p(b.parentNode));
      };
    l.forEach(p);
    var v = function (b) {
      !b ||
        g.has(b) ||
        Array.prototype.forEach.call(b.children, function (S) {
          if (h.has(S)) v(S);
          else
            try {
              var E = S.getAttribute(i),
                j = E !== null && E !== "false",
                _ = (ai.get(S) || 0) + 1,
                N = (c.get(S) || 0) + 1;
              (ai.set(S, _),
                c.set(S, N),
                f.push(S),
                _ === 1 && j && Nc.set(S, !0),
                N === 1 && S.setAttribute(r, "true"),
                j || S.setAttribute(i, "true"));
            } catch (R) {
              console.error("aria-hidden: cannot operate on ", S, R);
            }
        });
    };
    return (
      v(n),
      h.clear(),
      _h++,
      function () {
        (f.forEach(function (b) {
          var S = ai.get(b) - 1,
            E = c.get(b) - 1;
          (ai.set(b, S),
            c.set(b, E),
            S || (Nc.has(b) || b.removeAttribute(i), Nc.delete(b)),
            E || b.removeAttribute(r));
        }),
          _h--,
          _h ||
            ((ai = new WeakMap()),
            (ai = new WeakMap()),
            (Nc = new WeakMap()),
            (Tc = {})));
      }
    );
  },
  oS = function (t, n, r) {
    r === void 0 && (r = "data-aria-hidden");
    var i = Array.from(Array.isArray(t) ? t : [t]),
      l = C2(t);
    return l
      ? (i.push.apply(i, Array.from(l.querySelectorAll("[aria-live], script"))),
        R2(i, l, r, "aria-hidden"))
      : function () {
          return null;
        };
  },
  xu = "Dialog",
  [lS] = fa(xu),
  [A2, $n] = lS(xu),
  cS = (t) => {
    const {
        __scopeDialog: n,
        children: r,
        open: i,
        defaultOpen: l,
        onOpenChange: c,
        modal: f = !0,
      } = t,
      h = y.useRef(null),
      g = y.useRef(null),
      [p, v] = Tr({ prop: i, defaultProp: l ?? !1, onChange: c, caller: xu });
    return d.jsx(A2, {
      scope: n,
      triggerRef: h,
      contentRef: g,
      contentId: za(),
      titleId: za(),
      descriptionId: za(),
      open: p,
      onOpenChange: v,
      onOpenToggle: y.useCallback(() => v((b) => !b), [v]),
      modal: f,
      children: r,
    });
  };
cS.displayName = xu;
var uS = "DialogTrigger",
  dS = y.forwardRef((t, n) => {
    const { __scopeDialog: r, ...i } = t,
      l = $n(uS, r),
      c = rt(n, l.triggerRef);
    return d.jsx(qe.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": l.open,
      "aria-controls": l.contentId,
      "data-state": Gm(l.open),
      ...i,
      ref: c,
      onClick: Oe(t.onClick, l.onOpenToggle),
    });
  });
dS.displayName = uS;
var Fm = "DialogPortal",
  [M2, fS] = lS(Fm, { forceMount: void 0 }),
  hS = (t) => {
    const { __scopeDialog: n, forceMount: r, children: i, container: l } = t,
      c = $n(Fm, n);
    return d.jsx(M2, {
      scope: n,
      forceMount: r,
      children: y.Children.map(i, (f) =>
        d.jsx(Ha, {
          present: r || c.open,
          children: d.jsx(Xo, { asChild: !0, container: l, children: f }),
        }),
      ),
    });
  };
hS.displayName = Fm;
var Gc = "DialogOverlay",
  mS = y.forwardRef((t, n) => {
    const r = fS(Gc, t.__scopeDialog),
      { forceMount: i = r.forceMount, ...l } = t,
      c = $n(Gc, t.__scopeDialog);
    return c.modal
      ? d.jsx(Ha, {
          present: i || c.open,
          children: d.jsx(k2, { ...l, ref: n }),
        })
      : null;
  });
mS.displayName = Gc;
var D2 = Vo("DialogOverlay.RemoveScroll"),
  k2 = y.forwardRef((t, n) => {
    const { __scopeDialog: r, ...i } = t,
      l = $n(Gc, r);
    return d.jsx(Bm, {
      as: D2,
      allowPinchZoom: !0,
      shards: [l.contentRef],
      children: d.jsx(qe.div, {
        "data-state": Gm(l.open),
        ...i,
        ref: n,
        style: { pointerEvents: "auto", ...i.style },
      }),
    });
  }),
  os = "DialogContent",
  pS = y.forwardRef((t, n) => {
    const r = fS(os, t.__scopeDialog),
      { forceMount: i = r.forceMount, ...l } = t,
      c = $n(os, t.__scopeDialog);
    return d.jsx(Ha, {
      present: i || c.open,
      children: c.modal
        ? d.jsx(L2, { ...l, ref: n })
        : d.jsx(z2, { ...l, ref: n }),
    });
  });
pS.displayName = os;
var L2 = y.forwardRef((t, n) => {
    const r = $n(os, t.__scopeDialog),
      i = y.useRef(null),
      l = rt(n, r.contentRef, i);
    return (
      y.useEffect(() => {
        const c = i.current;
        if (c) return oS(c);
      }, []),
      d.jsx(gS, {
        ...t,
        ref: l,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Oe(t.onCloseAutoFocus, (c) => {
          (c.preventDefault(), r.triggerRef.current?.focus());
        }),
        onPointerDownOutside: Oe(t.onPointerDownOutside, (c) => {
          const f = c.detail.originalEvent,
            h = f.button === 0 && f.ctrlKey === !0;
          (f.button === 2 || h) && c.preventDefault();
        }),
        onFocusOutside: Oe(t.onFocusOutside, (c) => c.preventDefault()),
      })
    );
  }),
  z2 = y.forwardRef((t, n) => {
    const r = $n(os, t.__scopeDialog),
      i = y.useRef(!1),
      l = y.useRef(!1);
    return d.jsx(gS, {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (c) => {
        (t.onCloseAutoFocus?.(c),
          c.defaultPrevented ||
            (i.current || r.triggerRef.current?.focus(), c.preventDefault()),
          (i.current = !1),
          (l.current = !1));
      },
      onInteractOutside: (c) => {
        (t.onInteractOutside?.(c),
          c.defaultPrevented ||
            ((i.current = !0),
            c.detail.originalEvent.type === "pointerdown" && (l.current = !0)));
        const f = c.target;
        (r.triggerRef.current?.contains(f) && c.preventDefault(),
          c.detail.originalEvent.type === "focusin" &&
            l.current &&
            c.preventDefault());
      },
    });
  }),
  gS = y.forwardRef((t, n) => {
    const {
        __scopeDialog: r,
        trapFocus: i,
        onOpenAutoFocus: l,
        onCloseAutoFocus: c,
        ...f
      } = t,
      h = $n(os, r),
      g = y.useRef(null),
      p = rt(n, g);
    return (
      Ww(),
      d.jsxs(d.Fragment, {
        children: [
          d.jsx(Hm, {
            asChild: !0,
            loop: !0,
            trapped: i,
            onMountAutoFocus: l,
            onUnmountAutoFocus: c,
            children: d.jsx($o, {
              role: "dialog",
              id: h.contentId,
              "aria-describedby": h.descriptionId,
              "aria-labelledby": h.titleId,
              "data-state": Gm(h.open),
              ...f,
              ref: p,
              onDismiss: () => h.onOpenChange(!1),
            }),
          }),
          d.jsxs(d.Fragment, {
            children: [
              d.jsx(q2, { titleId: h.titleId }),
              d.jsx(V2, { contentRef: g, descriptionId: h.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Im = "DialogTitle",
  yS = y.forwardRef((t, n) => {
    const { __scopeDialog: r, ...i } = t,
      l = $n(Im, r);
    return d.jsx(qe.h2, { id: l.titleId, ...i, ref: n });
  });
yS.displayName = Im;
var vS = "DialogDescription",
  xS = y.forwardRef((t, n) => {
    const { __scopeDialog: r, ...i } = t,
      l = $n(vS, r);
    return d.jsx(qe.p, { id: l.descriptionId, ...i, ref: n });
  });
xS.displayName = vS;
var bS = "DialogClose",
  wS = y.forwardRef((t, n) => {
    const { __scopeDialog: r, ...i } = t,
      l = $n(bS, r);
    return d.jsx(qe.button, {
      type: "button",
      ...i,
      ref: n,
      onClick: Oe(t.onClick, () => l.onOpenChange(!1)),
    });
  });
wS.displayName = bS;
function Gm(t) {
  return t ? "open" : "closed";
}
var SS = "DialogTitleWarning",
  [RL, _S] = yj(SS, { contentName: os, titleName: Im, docsSlug: "dialog" }),
  q2 = ({ titleId: t }) => {
    const n = _S(SS),
      r = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
    return (
      y.useEffect(() => {
        t && (document.getElementById(t) || console.error(r));
      }, [r, t]),
      null
    );
  },
  U2 = "DialogDescriptionWarning",
  V2 = ({ contentRef: t, descriptionId: n }) => {
    const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_S(U2).contentName}}.`;
    return (
      y.useEffect(() => {
        const l = t.current?.getAttribute("aria-describedby");
        n && l && (document.getElementById(n) || console.warn(i));
      }, [i, t, n]),
      null
    );
  },
  ES = cS,
  P2 = dS,
  NS = hS,
  bu = mS,
  wu = pS,
  Su = yS,
  _u = xS,
  TS = wS;
const H2 = ES,
  B2 = NS,
  jS = y.forwardRef(({ className: t, ...n }, r) =>
    d.jsx(bu, {
      className: we(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        t,
      ),
      ...n,
      ref: r,
    }),
  );
jS.displayName = bu.displayName;
const F2 = Si(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    },
  ),
  CS = y.forwardRef(
    ({ side: t = "right", className: n, children: r, ...i }, l) =>
      d.jsxs(B2, {
        children: [
          d.jsx(jS, {}),
          d.jsxs(wu, {
            ref: l,
            className: we(F2({ side: t }), n),
            ...i,
            children: [
              d.jsxs(TS, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  d.jsx(jm, { className: "h-4 w-4" }),
                  d.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              r,
            ],
          }),
        ],
      }),
  );
CS.displayName = wu.displayName;
const OS = ({ className: t, ...n }) =>
  d.jsx("div", {
    className: we("flex flex-col space-y-2 text-center sm:text-left", t),
    ...n,
  });
OS.displayName = "SheetHeader";
const RS = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(Su, {
    ref: r,
    className: we("text-lg font-semibold text-foreground", t),
    ...n,
  }),
);
RS.displayName = Su.displayName;
const AS = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(_u, {
    ref: r,
    className: we("text-sm text-muted-foreground", t),
    ...n,
  }),
);
AS.displayName = _u.displayName;
function Mt({ className: t, ...n }) {
  return d.jsx("div", {
    className: we("animate-pulse rounded-md bg-primary/10", t),
    ...n,
  });
}
const I2 = "sidebar_state",
  G2 = 3600 * 24 * 7,
  Y2 = "16rem",
  Q2 = "18rem",
  K2 = "3rem",
  Z2 = "b",
  MS = y.createContext(null);
function Ym() {
  const t = y.useContext(MS);
  if (!t) throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
function $2({
  defaultOpen: t = !0,
  open: n,
  onOpenChange: r,
  className: i,
  style: l,
  children: c,
  ...f
}) {
  const h = MA(),
    [g, p] = y.useState(!1),
    [v, b] = y.useState(t),
    S = n ?? v,
    E = y.useCallback(
      (R) => {
        const O = typeof R == "function" ? R(S) : R;
        (r ? r(O) : b(O),
          (document.cookie = `${I2}=${O}; path=/; max-age=${G2}`));
      },
      [r, S],
    ),
    j = y.useCallback(() => (h ? p((R) => !R) : E((R) => !R)), [h, E, p]);
  y.useEffect(() => {
    const R = (O) => {
      O.key === Z2 && (O.metaKey || O.ctrlKey) && (O.preventDefault(), j());
    };
    return (
      window.addEventListener("keydown", R),
      () => window.removeEventListener("keydown", R)
    );
  }, [j]);
  const _ = S ? "expanded" : "collapsed",
    N = y.useMemo(
      () => ({
        state: _,
        open: S,
        setOpen: E,
        isMobile: h,
        openMobile: g,
        setOpenMobile: p,
        toggleSidebar: j,
      }),
      [_, S, E, h, g, p, j],
    );
  return d.jsx(MS.Provider, {
    value: N,
    children: d.jsx(Gw, {
      delayDuration: 0,
      children: d.jsx("div", {
        "data-slot": "sidebar-wrapper",
        style: { "--sidebar-width": Y2, "--sidebar-width-icon": K2, ...l },
        className: we(
          "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
          i,
        ),
        ...f,
        children: c,
      }),
    }),
  });
}
function X2({
  side: t = "left",
  variant: n = "sidebar",
  collapsible: r = "offcanvas",
  className: i,
  children: l,
  ...c
}) {
  const { isMobile: f, state: h, openMobile: g, setOpenMobile: p } = Ym();
  return r === "none"
    ? d.jsx("div", {
        "data-slot": "sidebar",
        className: we(
          "bg-sidebar text-sidebar-foreground flex h-full w-[var(--sidebar-width)] flex-col",
          i,
        ),
        ...c,
        children: l,
      })
    : f
      ? d.jsx(H2, {
          open: g,
          onOpenChange: p,
          ...c,
          children: d.jsxs(CS, {
            "data-sidebar": "sidebar",
            "data-slot": "sidebar",
            "data-mobile": "true",
            className:
              "bg-sidebar text-sidebar-foreground w-[var(--sidebar-width)] p-0 [&>button]:hidden",
            style: { "--sidebar-width": Q2 },
            side: t,
            children: [
              d.jsxs(OS, {
                className: "sr-only",
                children: [
                  d.jsx(RS, { children: "Sidebar" }),
                  d.jsx(AS, { children: "Displays the mobile sidebar." }),
                ],
              }),
              d.jsx("div", {
                className: "flex h-full w-full flex-col",
                children: l,
              }),
            ],
          }),
        })
      : d.jsxs("div", {
          className: "group peer text-sidebar-foreground hidden md:block",
          "data-state": h,
          "data-collapsible": h === "collapsed" ? r : "",
          "data-variant": n,
          "data-side": t,
          "data-slot": "sidebar",
          children: [
            d.jsx("div", {
              "data-slot": "sidebar-gap",
              className: we(
                "relative w-[var(--sidebar-width)] bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                n === "floating" || n === "inset"
                  ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+var(--spacing-4))]"
                  : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)]",
              ),
            }),
            d.jsx("div", {
              "data-slot": "sidebar-container",
              className: we(
                "fixed inset-y-0 z-10 hidden h-svh w-[var(--sidebar-width)] transition-[left,right,width] duration-200 ease-linear md:flex",
                t === "left"
                  ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                  : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                n === "floating" || n === "inset"
                  ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+var(--spacing-4)+2px)]"
                  : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                i,
              ),
              ...c,
              children: d.jsx("div", {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className:
                  "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: l,
              }),
            }),
          ],
        });
}
function W2({ className: t, onClick: n, ...r }) {
  const { toggleSidebar: i } = Ym();
  return d.jsxs(bt, {
    "data-sidebar": "trigger",
    "data-slot": "sidebar-trigger",
    variant: "ghost",
    size: "icon",
    className: we("h-7 w-7", t),
    onClick: (l) => {
      (n?.(l), i());
    },
    ...r,
    children: [
      d.jsx(PC, {}),
      d.jsx("span", { className: "sr-only", children: "Toggle Sidebar" }),
    ],
  });
}
function J2({ className: t, ...n }) {
  return d.jsx("div", {
    "data-slot": "sidebar-header",
    "data-sidebar": "header",
    className: we("flex flex-col gap-2 p-2", t),
    ...n,
  });
}
function eM({ className: t, ...n }) {
  return d.jsx("div", {
    "data-slot": "sidebar-footer",
    "data-sidebar": "footer",
    className: we("flex flex-col gap-2 p-2", t),
    ...n,
  });
}
function tM({ className: t, ...n }) {
  return d.jsx("div", {
    "data-slot": "sidebar-content",
    "data-sidebar": "content",
    className: we(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      t,
    ),
    ...n,
  });
}
function nM({ className: t, ...n }) {
  return d.jsx("div", {
    "data-slot": "sidebar-group",
    "data-sidebar": "group",
    className: we("relative flex w-full min-w-0 flex-col p-2", t),
    ...n,
  });
}
function aM({ className: t, ...n }) {
  return d.jsx("div", {
    "data-slot": "sidebar-group-content",
    "data-sidebar": "group-content",
    className: we("w-full text-sm", t),
    ...n,
  });
}
function rM({ className: t, ...n }) {
  return d.jsx("ul", {
    "data-slot": "sidebar-menu",
    "data-sidebar": "menu",
    className: we("flex w-full min-w-0 flex-col gap-1", t),
    ...n,
  });
}
function jc({ className: t, ...n }) {
  return d.jsx("li", {
    "data-slot": "sidebar-menu-item",
    "data-sidebar": "menu-item",
    className: we("group/menu-item relative", t),
    ...n,
  });
}
const sM = Si(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:w-8! group-data-[collapsible=icon]:h-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
function Cc({
  asChild: t = !1,
  isActive: n = !1,
  variant: r = "default",
  size: i = "default",
  tooltip: l,
  className: c,
  ...f
}) {
  const h = t ? Pm : "button",
    { isMobile: g, state: p } = Ym(),
    v = d.jsx(h, {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": i,
      "data-active": n,
      className: we(sM({ variant: r, size: i }), c),
      ...f,
    });
  return l
    ? (typeof l == "string" && (l = { children: l }),
      d.jsxs(_A, {
        children: [
          d.jsx(EA, { asChild: !0, children: v }),
          d.jsx(Yw, {
            side: "right",
            align: "center",
            hidden: p !== "collapsed" || g,
            ...l,
          }),
        ],
      }))
    : v;
}
function iM(t, n = []) {
  let r = [];
  function i(c, f) {
    const h = y.createContext(f);
    h.displayName = c + "Context";
    const g = r.length;
    r = [...r, f];
    const p = (b) => {
      const { scope: S, children: E, ...j } = b,
        _ = S?.[t]?.[g] || h,
        N = y.useMemo(() => j, Object.values(j));
      return d.jsx(_.Provider, { value: N, children: E });
    };
    p.displayName = c + "Provider";
    function v(b, S) {
      const E = S?.[t]?.[g] || h,
        j = y.useContext(E);
      if (j) return j;
      if (f !== void 0) return f;
      throw new Error(`\`${b}\` must be used within \`${c}\``);
    }
    return [p, v];
  }
  const l = () => {
    const c = r.map((f) => y.createContext(f));
    return function (h) {
      const g = h?.[t] || c;
      return y.useMemo(() => ({ [`__scope${t}`]: { ...h, [t]: g } }), [h, g]);
    };
  };
  return ((l.scopeName = t), [i, oM(l, ...n)]);
}
function oM(...t) {
  const n = t[0];
  if (t.length === 1) return n;
  const r = () => {
    const i = t.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (c) {
      const f = i.reduce((h, { useScope: g, scopeName: p }) => {
        const b = g(c)[`__scope${p}`];
        return { ...h, ...b };
      }, {});
      return y.useMemo(() => ({ [`__scope${n.scopeName}`]: f }), [f]);
    };
  };
  return ((r.scopeName = n.scopeName), r);
}
function lM() {
  return Yb.useSyncExternalStore(
    cM,
    () => !0,
    () => !1,
  );
}
function cM() {
  return () => {};
}
var Qm = "Avatar",
  [uM] = iM(Qm),
  [dM, DS] = uM(Qm),
  kS = y.forwardRef((t, n) => {
    const { __scopeAvatar: r, ...i } = t,
      [l, c] = y.useState("idle");
    return d.jsx(dM, {
      scope: r,
      imageLoadingStatus: l,
      onImageLoadingStatusChange: c,
      children: d.jsx(tl.span, { ...i, ref: n }),
    });
  });
kS.displayName = Qm;
var LS = "AvatarImage",
  zS = y.forwardRef((t, n) => {
    const {
        __scopeAvatar: r,
        src: i,
        onLoadingStatusChange: l = () => {},
        ...c
      } = t,
      f = DS(LS, r),
      h = fM(i, c),
      g = xn((p) => {
        (l(p), f.onImageLoadingStatusChange(p));
      });
    return (
      Ct(() => {
        h !== "idle" && g(h);
      }, [h, g]),
      h === "loaded" ? d.jsx(tl.img, { ...c, ref: n, src: i }) : null
    );
  });
zS.displayName = LS;
var qS = "AvatarFallback",
  US = y.forwardRef((t, n) => {
    const { __scopeAvatar: r, delayMs: i, ...l } = t,
      c = DS(qS, r),
      [f, h] = y.useState(i === void 0);
    return (
      y.useEffect(() => {
        if (i !== void 0) {
          const g = window.setTimeout(() => h(!0), i);
          return () => window.clearTimeout(g);
        }
      }, [i]),
      f && c.imageLoadingStatus !== "loaded"
        ? d.jsx(tl.span, { ...l, ref: n })
        : null
    );
  });
US.displayName = qS;
function cb(t, n) {
  return t
    ? n
      ? (t.src !== n && (t.src = n),
        t.complete && t.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
function fM(t, { referrerPolicy: n, crossOrigin: r }) {
  const i = lM(),
    l = y.useRef(null),
    c = i ? (l.current || (l.current = new window.Image()), l.current) : null,
    [f, h] = y.useState(() => cb(c, t));
  return (
    Ct(() => {
      h(cb(c, t));
    }, [c, t]),
    Ct(() => {
      const g = (b) => () => {
        h(b);
      };
      if (!c) return;
      const p = g("loaded"),
        v = g("error");
      return (
        c.addEventListener("load", p),
        c.addEventListener("error", v),
        n && (c.referrerPolicy = n),
        typeof r == "string" && (c.crossOrigin = r),
        () => {
          (c.removeEventListener("load", p), c.removeEventListener("error", v));
        }
      );
    }, [c, r, n]),
    f
  );
}
var VS = kS,
  PS = zS,
  HS = US;
const Qn = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(VS, {
    ref: r,
    className: we(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      t,
    ),
    ...n,
  }),
);
Qn.displayName = VS.displayName;
const Kn = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(PS, { ref: r, className: we("aspect-square h-full w-full", t), ...n }),
);
Kn.displayName = PS.displayName;
const Zn = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(HS, {
    ref: r,
    className: we(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      t,
    ),
    ...n,
  }),
);
Zn.displayName = HS.displayName;
const hM = new Set([204, 205, 304]),
  mM = "application/json, application/problem+json";
function BS(t) {
  return typeof Request < "u" && t instanceof Request;
}
function pM(t, n) {
  return n ? n.toUpperCase() : BS(t) ? t.method.toUpperCase() : "GET";
}
function gM(t) {
  return typeof URL < "u" && t instanceof URL;
}
function yM(t) {
  return typeof t == "string" ? t : gM(t) ? t.toString() : t.url;
}
function vM(...t) {
  const n = new Headers();
  for (const r of t)
    r &&
      new Headers(r).forEach((i, l) => {
        n.set(l, i);
      });
  return n;
}
function FS(t) {
  const n = t.get("content-type");
  return n ? n.split(";", 1)[0].trim().toLowerCase() : null;
}
function Qh(t) {
  return t === "application/json" || !!t?.endsWith("+json");
}
function IS(t) {
  return !!(
    t &&
    (t.startsWith("text/") ||
      t === "application/xml" ||
      t === "text/xml" ||
      t.endsWith("+xml") ||
      t === "application/x-www-form-urlencoded")
  );
}
function GS(t, n) {
  return !!(
    n === "HEAD" ||
    hM.has(t.status) ||
    t.headers.get("content-length") === "0" ||
    t.body === null
  );
}
function YS(t) {
  return t.charCodeAt(0) === 65279 ? t.slice(1) : t;
}
function QS(t) {
  const n = t.trimStart();
  return n.startsWith("{") || n.startsWith("[");
}
function Co(t, n) {
  if (!t || typeof t != "object") return;
  const r = t[n];
  if (typeof r != "string") return;
  const i = r.trim();
  return i === "" ? void 0 : i;
}
function xM(t, n = 300) {
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
}
function bM(t, n) {
  const r = `HTTP ${t.status} ${t.statusText}`;
  if (typeof n == "string") {
    const f = n.trim();
    return f ? `${r}: ${xM(f)}` : r;
  }
  const i = Co(n, "title"),
    l = Co(n, "detail"),
    c = Co(n, "message") ?? Co(n, "error_description") ?? Co(n, "error");
  return i && l
    ? `${r}: ${i} — ${l}`
    : l
      ? `${r}: ${l}`
      : c
        ? `${r}: ${c}`
        : i
          ? `${r}: ${i}`
          : r;
}
class wM extends Error {
  name = "ApiError";
  status;
  statusText;
  data;
  headers;
  response;
  method;
  url;
  constructor(n, r, i) {
    (super(bM(n, r)),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.status = n.status),
      (this.statusText = n.statusText),
      (this.data = r),
      (this.headers = n.headers),
      (this.response = n),
      (this.method = i.method),
      (this.url = n.url || i.url));
  }
}
class SM extends Error {
  name = "ResponseParseError";
  status;
  statusText;
  headers;
  response;
  method;
  url;
  rawBody;
  cause;
  constructor(n, r, i, l) {
    (super(
      `Failed to parse response from ${l.method} ${n.url || l.url} (${n.status} ${n.statusText}) as JSON`,
    ),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.status = n.status),
      (this.statusText = n.statusText),
      (this.headers = n.headers),
      (this.response = n),
      (this.method = l.method),
      (this.url = n.url || l.url),
      (this.rawBody = r),
      (this.cause = i));
  }
}
async function _M(t, n) {
  const r = await t.text(),
    i = YS(r);
  if (i.trim() === "") return null;
  try {
    return JSON.parse(i);
  } catch (l) {
    throw new SM(t, r, l, n);
  }
}
async function EM(t, n) {
  if (GS(t, n)) return null;
  const r = FS(t.headers);
  if (r && !Qh(r) && !IS(r))
    return typeof t.blob == "function" ? t.blob() : t.text();
  const i = await t.text(),
    l = YS(i);
  if (l.trim() === "") return null;
  if (Qh(r) || QS(l))
    try {
      return JSON.parse(l);
    } catch {
      return i;
    }
  return i;
}
function NM(t) {
  const n = FS(t.headers);
  return Qh(n) ? "json" : IS(n) || n == null ? "text" : "blob";
}
async function TM(t, n, r) {
  if (GS(t, r.method)) return null;
  switch (n === "auto" ? NM(t) : n) {
    case "json":
      return _M(t, r);
    case "text": {
      const l = await t.text();
      return l === "" ? null : l;
    }
    case "blob":
      if (typeof t.blob != "function")
        throw new TypeError(
          'Blob responses are not supported in this runtime. Use responseType "json" or "text" instead.',
        );
      return t.blob();
  }
}
async function Yt(t, n = {}) {
  t = t;
  const { responseType: r = "auto", headers: i, ...l } = n,
    c = pM(t, l.method);
  if (l.body != null && (c === "GET" || c === "HEAD"))
    throw new TypeError(`customFetch: ${c} requests cannot have a body.`);
  const f = vM(BS(t) ? t.headers : void 0, i);
  (typeof l.body == "string" &&
    !f.has("content-type") &&
    QS(l.body) &&
    f.set("content-type", "application/json"),
    r === "json" && !f.has("accept") && f.set("accept", mM));
  const h = { method: c, url: yM(t) },
    g = await fetch(t, { ...l, method: c, headers: f });
  if (!g.ok) {
    const p = await EM(g, c);
    throw new wM(g, p, h);
  }
  return await TM(g, r, h);
}
const jM = () => "/api/me",
  CM = async (t) => Yt(jM(), { ...t, method: "GET" }),
  OM = () => ["/api/me"],
  RM = (t) => {
    const { query: n, request: r } = t ?? {};
    return {
      queryKey: n?.queryKey ?? OM(),
      queryFn: ({ signal: c }) => CM({ signal: c, ...r }),
      ...n,
    };
  };
function Ni(t) {
  const n = RM(t);
  return { ...wn(n), queryKey: n.queryKey };
}
const AM = (t) => {
    const n = new URLSearchParams();
    Object.entries(t || {}).forEach(([i, l]) => {
      l !== void 0 && n.append(i, l === null ? "null" : l.toString());
    });
    const r = n.toString();
    return r.length > 0 ? `/api/students?${r}` : "/api/students";
  },
  MM = async (t, n) => Yt(AM(t), { ...n, method: "GET" }),
  DM = (t) => ["/api/students", ...(t ? [t] : [])],
  kM = (t, n) => {
    const { query: r, request: i } = n ?? {};
    return {
      queryKey: r?.queryKey ?? DM(t),
      queryFn: ({ signal: f }) => MM(t, { signal: f, ...i }),
      ...r,
    };
  };
function LM(t, n) {
  const r = kM(t, n);
  return { ...wn(r), queryKey: r.queryKey };
}
const zM = (t) => `/api/students/${t}`,
  qM = async (t, n) => Yt(zM(t), { ...n, method: "GET" }),
  UM = (t) => [`/api/students/${t}`],
  VM = (t, n) => {
    const { query: r, request: i } = n ?? {};
    return {
      queryKey: r?.queryKey ?? UM(t),
      queryFn: ({ signal: f }) => qM(t, { signal: f, ...i }),
      enabled: !!t,
      ...r,
    };
  };
function PM(t, n) {
  const r = VM(t, n);
  return { ...wn(r), queryKey: r.queryKey };
}
const HM = () => "/api/skills",
  BM = async (t) => Yt(HM(), { ...t, method: "GET" }),
  FM = () => ["/api/skills"],
  IM = (t) => {
    const { query: n, request: r } = t ?? {};
    return {
      queryKey: n?.queryKey ?? FM(),
      queryFn: ({ signal: c }) => BM({ signal: c, ...r }),
      ...n,
    };
  };
function nl(t) {
  const n = IM(t);
  return { ...wn(n), queryKey: n.queryKey };
}
const GM = (t) => {
    const n = new URLSearchParams();
    Object.entries(t || {}).forEach(([i, l]) => {
      l !== void 0 && n.append(i, l === null ? "null" : l.toString());
    });
    const r = n.toString();
    return r.length > 0 ? `/api/listings?${r}` : "/api/listings";
  },
  YM = async (t, n) => Yt(GM(t), { ...n, method: "GET" }),
  KS = (t) => ["/api/listings", ...(t ? [t] : [])],
  QM = (t, n) => {
    const { query: r, request: i } = n ?? {};
    return {
      queryKey: r?.queryKey ?? KS(t),
      queryFn: ({ signal: f }) => YM(t, { signal: f, ...i }),
      ...r,
    };
  };
function KM(t, n) {
  const r = QM(t, n);
  return { ...wn(r), queryKey: r.queryKey };
}
const ZM = () => "/api/listings",
  $M = async (t, n) =>
    Yt(ZM(), {
      ...n,
      method: "POST",
      headers: { "Content-Type": "application/json", ...n?.headers },
      body: JSON.stringify(t),
    }),
  XM = (t) => {
    const n = ["createListing"],
      { mutation: r, request: i } = {
        mutation: { mutationKey: n },
        request: void 0,
      };
    return {
      mutationFn: (c) => {
        const { data: f } = c ?? {};
        return $M(f, i);
      },
      ...r,
    };
  },
  WM = (t) => ou(XM()),
  JM = (t) => `/api/listings/${t}`,
  eD = async (t, n) => Yt(JM(t), { ...n, method: "GET" }),
  tD = (t) => [`/api/listings/${t}`],
  nD = (t, n) => {
    const { query: r, request: i } = n ?? {};
    return {
      queryKey: r?.queryKey ?? tD(t),
      queryFn: ({ signal: f }) => eD(t, { signal: f, ...i }),
      enabled: !!t,
      ...r,
    };
  };
function aD(t, n) {
  const r = nD(t, n);
  return { ...wn(r), queryKey: r.queryKey };
}
const rD = (t) => {
    const n = new URLSearchParams();
    Object.entries(t || {}).forEach(([i, l]) => {
      l !== void 0 && n.append(i, l === null ? "null" : l.toString());
    });
    const r = n.toString();
    return r.length > 0 ? `/api/exchanges?${r}` : "/api/exchanges";
  },
  sD = async (t, n) => Yt(rD(t), { ...n, method: "GET" }),
  Io = (t) => ["/api/exchanges", ...(t ? [t] : [])],
  iD = (t, n) => {
    const { query: r, request: i } = n ?? {};
    return {
      queryKey: r?.queryKey ?? Io(t),
      queryFn: ({ signal: f }) => sD(t, { signal: f, ...i }),
      ...r,
    };
  };
function oD(t, n) {
  const r = iD(t, n);
  return { ...wn(r), queryKey: r.queryKey };
}
const lD = () => "/api/exchanges",
  cD = async (t, n) =>
    Yt(lD(), {
      ...n,
      method: "POST",
      headers: { "Content-Type": "application/json", ...n?.headers },
      body: JSON.stringify(t),
    }),
  uD = (t) => {
    const n = ["createExchange"],
      { mutation: r, request: i } = {
        mutation: { mutationKey: n },
        request: void 0,
      };
    return {
      mutationFn: (c) => {
        const { data: f } = c ?? {};
        return cD(f, i);
      },
      ...r,
    };
  },
  ZS = (t) => ou(uD()),
  dD = (t) => `/api/exchanges/${t}`,
  fD = async (t, n) => Yt(dD(t), { ...n, method: "GET" }),
  Kh = (t) => [`/api/exchanges/${t}`],
  hD = (t, n) => {
    const { query: r, request: i } = n ?? {};
    return {
      queryKey: r?.queryKey ?? Kh(t),
      queryFn: ({ signal: f }) => fD(t, { signal: f, ...i }),
      enabled: !!t,
      ...r,
    };
  };
function mD(t, n) {
  const r = hD(t, n);
  return { ...wn(r), queryKey: r.queryKey };
}
const pD = (t) => `/api/exchanges/${t}`,
  gD = async (t, n, r) =>
    Yt(pD(t), {
      ...r,
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...r?.headers },
      body: JSON.stringify(n),
    }),
  yD = (t) => {
    const n = ["updateExchangeStatus"],
      { mutation: r, request: i } = {
        mutation: { mutationKey: n },
        request: void 0,
      };
    return {
      mutationFn: (c) => {
        const { id: f, data: h } = c ?? {};
        return gD(f, h, i);
      },
      ...r,
    };
  },
  vD = (t) => ou(yD()),
  xD = (t) => `/api/exchanges/${t}/messages`,
  bD = async (t, n) => Yt(xD(t), { ...n, method: "GET" }),
  Zh = (t) => [`/api/exchanges/${t}/messages`],
  wD = (t, n) => {
    const { query: r, request: i } = n ?? {};
    return {
      queryKey: r?.queryKey ?? Zh(t),
      queryFn: ({ signal: f }) => bD(t, { signal: f, ...i }),
      enabled: !!t,
      ...r,
    };
  };
function SD(t, n) {
  const r = wD(t, n);
  return { ...wn(r), queryKey: r.queryKey };
}
const _D = (t) => `/api/exchanges/${t}/messages`,
  ED = async (t, n, r) =>
    Yt(_D(t), {
      ...r,
      method: "POST",
      headers: { "Content-Type": "application/json", ...r?.headers },
      body: JSON.stringify(n),
    }),
  ND = (t) => {
    const n = ["sendExchangeMessage"],
      { mutation: r, request: i } = {
        mutation: { mutationKey: n },
        request: void 0,
      };
    return {
      mutationFn: (c) => {
        const { id: f, data: h } = c ?? {};
        return ED(f, h, i);
      },
      ...r,
    };
  },
  TD = (t) => ou(ND()),
  jD = () => "/api/dashboard/summary",
  CD = async (t) => Yt(jD(), { ...t, method: "GET" }),
  OD = () => ["/api/dashboard/summary"],
  RD = (t) => {
    const { query: n, request: r } = t ?? {};
    return {
      queryKey: n?.queryKey ?? OD(),
      queryFn: ({ signal: c }) => CD({ signal: c, ...r }),
      ...n,
    };
  };
function AD(t) {
  const n = RD(t);
  return { ...wn(n), queryKey: n.queryKey };
}
const MD = () => "/api/dashboard/activity",
  DD = async (t) => Yt(MD(), { ...t, method: "GET" }),
  kD = () => ["/api/dashboard/activity"],
  LD = (t) => {
    const { query: n, request: r } = t ?? {};
    return {
      queryKey: n?.queryKey ?? kD(),
      queryFn: ({ signal: c }) => DD({ signal: c, ...r }),
      ...n,
    };
  };
function zD(t) {
  const n = LD(t);
  return { ...wn(n), queryKey: n.queryKey };
}
const qD = () => "/api/dashboard/trending-skills",
  UD = async (t) => Yt(qD(), { ...t, method: "GET" }),
  VD = () => ["/api/dashboard/trending-skills"],
  PD = (t) => {
    const { query: n, request: r } = t ?? {};
    return {
      queryKey: n?.queryKey ?? VD(),
      queryFn: ({ signal: c }) => UD({ signal: c, ...r }),
      ...n,
    };
  };
function HD(t) {
  const n = PD(t);
  return { ...wn(n), queryKey: n.queryKey };
}
const BD = () => "/api/dashboard/recommended",
  FD = async (t) => Yt(BD(), { ...t, method: "GET" }),
  ID = () => ["/api/dashboard/recommended"],
  GD = (t) => {
    const { query: n, request: r } = t ?? {};
    return {
      queryKey: n?.queryKey ?? ID(),
      queryFn: ({ signal: c }) => FD({ signal: c, ...r }),
      ...n,
    };
  };
function YD(t) {
  const n = GD(t);
  return { ...wn(n), queryKey: n.queryKey };
}
function QD({ children: t }) {
  const [n] = e0(),
    { data: r } = Ni({ query: { enabled: !0 } });
  return d.jsx($2, {
    children: d.jsxs("div", {
      className:
        "flex min-h-screen w-full bg-background selection:bg-primary/20 selection:text-primary",
      children: [
        d.jsxs(X2, {
          className: "border-r border-border/50 bg-card",
          children: [
            d.jsx(J2, {
              className: "p-4 pt-6",
              children: d.jsxs(Dt, {
                href: "/",
                className:
                  "flex items-center gap-2 group transition-opacity hover:opacity-80",
                children: [
                  d.jsx("div", {
                    className:
                      "flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm group-hover:scale-105 transition-transform",
                    children: d.jsx(Ho, { className: "h-5 w-5" }),
                  }),
                  d.jsx("span", {
                    className:
                      "font-serif text-xl font-bold tracking-tight text-foreground",
                    children: "SkillBridge",
                  }),
                ],
              }),
            }),
            d.jsx(tM, {
              className: "px-2",
              children: d.jsx(nM, {
                children: d.jsx(aM, {
                  children: d.jsxs(rM, {
                    children: [
                      d.jsx(jc, {
                        children: d.jsx(Cc, {
                          asChild: !0,
                          isActive: n === "/",
                          children: d.jsxs(Dt, {
                            href: "/",
                            className:
                              "flex items-center gap-3 px-3 py-2 text-sm",
                            children: [
                              d.jsx(LC, { className: "h-4 w-4" }),
                              d.jsx("span", { children: "Dashboard" }),
                            ],
                          }),
                        }),
                      }),
                      d.jsx(jc, {
                        children: d.jsx(Cc, {
                          asChild: !0,
                          isActive: n === "/browse",
                          children: d.jsxs(Dt, {
                            href: "/browse",
                            className:
                              "flex items-center gap-3 px-3 py-2 text-sm",
                            children: [
                              d.jsx(Nm, { className: "h-4 w-4" }),
                              d.jsx("span", { children: "Browse Listings" }),
                            ],
                          }),
                        }),
                      }),
                      d.jsx(jc, {
                        children: d.jsx(Cc, {
                          asChild: !0,
                          isActive: n.startsWith("/students"),
                          children: d.jsxs(Dt, {
                            href: "/students",
                            className:
                              "flex items-center gap-3 px-3 py-2 text-sm",
                            children: [
                              d.jsx(I0, { className: "h-4 w-4" }),
                              d.jsx("span", { children: "Directory" }),
                            ],
                          }),
                        }),
                      }),
                      d.jsx(jc, {
                        children: d.jsx(Cc, {
                          asChild: !0,
                          isActive: n.startsWith("/exchanges"),
                          children: d.jsxs(Dt, {
                            href: "/exchanges",
                            className:
                              "flex items-center gap-3 px-3 py-2 text-sm",
                            children: [
                              d.jsx(uu, { className: "h-4 w-4" }),
                              d.jsx("span", { children: "My Exchanges" }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
            d.jsxs(eM, {
              className: "p-4",
              children: [
                d.jsx(bt, {
                  asChild: !0,
                  className: "w-full mb-4 justify-start gap-2",
                  variant: "secondary",
                  children: d.jsxs(Dt, {
                    href: "/listings/new",
                    children: [
                      d.jsx(TC, { className: "h-4 w-4" }),
                      "Post a listing",
                    ],
                  }),
                }),
                r
                  ? d.jsxs(Dt, {
                      href: `/students/${r.id}`,
                      className:
                        "flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50 border border-transparent hover:border-border/50",
                      children: [
                        d.jsxs(Qn, {
                          className:
                            "h-10 w-10 border border-border/50 shadow-sm",
                          children: [
                            d.jsx(Kn, { src: r.avatarUrl, alt: r.name }),
                            d.jsx(Zn, {
                              className:
                                "bg-primary/10 text-primary font-medium",
                              children: r.name.charAt(0),
                            }),
                          ],
                        }),
                        d.jsxs("div", {
                          className: "flex flex-col overflow-hidden",
                          children: [
                            d.jsx("span", {
                              className:
                                "truncate text-sm font-semibold leading-tight",
                              children: r.name,
                            }),
                            d.jsx("span", {
                              className:
                                "truncate text-xs text-muted-foreground",
                              children: r.major,
                            }),
                          ],
                        }),
                      ],
                    })
                  : d.jsxs("div", {
                      className: "flex items-center gap-3 p-2",
                      children: [
                        d.jsx("div", {
                          className:
                            "h-10 w-10 rounded-full bg-muted animate-pulse",
                        }),
                        d.jsxs("div", {
                          className: "flex flex-col gap-2 w-full",
                          children: [
                            d.jsx("div", {
                              className:
                                "h-4 w-24 bg-muted animate-pulse rounded",
                            }),
                            d.jsx("div", {
                              className:
                                "h-3 w-16 bg-muted animate-pulse rounded",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
        d.jsxs("main", {
          className: "flex-1 flex flex-col min-w-0 overflow-hidden relative",
          children: [
            d.jsxs("div", {
              className:
                "md:hidden flex items-center p-4 border-b border-border/50 bg-card/80 backdrop-blur-md sticky top-0 z-10",
              children: [
                d.jsx(W2, {}),
                d.jsxs("div", {
                  className: "flex items-center gap-2 ml-4",
                  children: [
                    d.jsx(Ho, { className: "h-5 w-5 text-primary" }),
                    d.jsx("span", {
                      className: "font-serif font-bold",
                      children: "SkillBridge",
                    }),
                  ],
                }),
              ],
            }),
            d.jsx("div", {
              className: "flex-1 overflow-auto",
              children: d.jsx("div", {
                className: "mx-auto w-full max-w-5xl p-4 md:p-8 lg:p-12",
                children: t,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const It = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx("div", {
    ref: r,
    className: we("rounded-xl border bg-card text-card-foreground shadow", t),
    ...n,
  }),
);
It.displayName = "Card";
const Mn = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx("div", {
    ref: r,
    className: we("flex flex-col space-y-1.5 p-6", t),
    ...n,
  }),
);
Mn.displayName = "CardHeader";
const Dn = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx("div", {
    ref: r,
    className: we("font-semibold leading-none tracking-tight", t),
    ...n,
  }),
);
Dn.displayName = "CardTitle";
const $h = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx("div", {
    ref: r,
    className: we("text-sm text-muted-foreground", t),
    ...n,
  }),
);
$h.displayName = "CardDescription";
const Gt = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx("div", { ref: r, className: we("p-6 pt-0", t), ...n }),
);
Gt.displayName = "CardContent";
const Go = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx("div", {
    ref: r,
    className: we("flex items-center p-6 pt-0", t),
    ...n,
  }),
);
Go.displayName = "CardFooter";
function KD() {
  return d.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: d.jsx(It, {
      className: "w-full max-w-md mx-4",
      children: d.jsxs(Gt, {
        className: "pt-6",
        children: [
          d.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              d.jsx(_C, { className: "h-8 w-8 text-red-500" }),
              d.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          d.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
const ZD = Si(
  "whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-xs",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-xs",
        outline: "text-foreground border [border-color:var(--badge-outline)]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function Bn({ className: t, variant: n, ...r }) {
  return d.jsx("div", { className: we(ZD({ variant: n }), t), ...r });
}
function ct(t) {
  const n = Object.prototype.toString.call(t);
  return t instanceof Date || (typeof t == "object" && n === "[object Date]")
    ? new t.constructor(+t)
    : typeof t == "number" ||
        n === "[object Number]" ||
        typeof t == "string" ||
        n === "[object String]"
      ? new Date(t)
      : new Date(NaN);
}
function Or(t, n) {
  return t instanceof Date ? new t.constructor(n) : new Date(n);
}
const $S = 6048e5,
  $D = 864e5,
  Oc = 43200,
  ub = 1440;
let XD = {};
function al() {
  return XD;
}
function Yo(t, n) {
  const r = al(),
    i =
      n?.weekStartsOn ??
      n?.locale?.options?.weekStartsOn ??
      r.weekStartsOn ??
      r.locale?.options?.weekStartsOn ??
      0,
    l = ct(t),
    c = l.getDay(),
    f = (c < i ? 7 : 0) + c - i;
  return (l.setDate(l.getDate() - f), l.setHours(0, 0, 0, 0), l);
}
function Yc(t) {
  return Yo(t, { weekStartsOn: 1 });
}
function XS(t) {
  const n = ct(t),
    r = n.getFullYear(),
    i = Or(t, 0);
  (i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0));
  const l = Yc(i),
    c = Or(t, 0);
  (c.setFullYear(r, 0, 4), c.setHours(0, 0, 0, 0));
  const f = Yc(c);
  return n.getTime() >= l.getTime()
    ? r + 1
    : n.getTime() >= f.getTime()
      ? r
      : r - 1;
}
function db(t) {
  const n = ct(t);
  return (n.setHours(0, 0, 0, 0), n);
}
function Qc(t) {
  const n = ct(t),
    r = new Date(
      Date.UTC(
        n.getFullYear(),
        n.getMonth(),
        n.getDate(),
        n.getHours(),
        n.getMinutes(),
        n.getSeconds(),
        n.getMilliseconds(),
      ),
    );
  return (r.setUTCFullYear(n.getFullYear()), +t - +r);
}
function WD(t, n) {
  const r = db(t),
    i = db(n),
    l = +r - Qc(r),
    c = +i - Qc(i);
  return Math.round((l - c) / $D);
}
function JD(t) {
  const n = XS(t),
    r = Or(t, 0);
  return (r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Yc(r));
}
function Lc(t, n) {
  const r = ct(t),
    i = ct(n),
    l = r.getTime() - i.getTime();
  return l < 0 ? -1 : l > 0 ? 1 : l;
}
function ek(t) {
  return Or(t, Date.now());
}
function tk(t) {
  return (
    t instanceof Date ||
    (typeof t == "object" &&
      Object.prototype.toString.call(t) === "[object Date]")
  );
}
function nk(t) {
  if (!tk(t) && typeof t != "number") return !1;
  const n = ct(t);
  return !isNaN(Number(n));
}
function ak(t, n) {
  const r = ct(t),
    i = ct(n),
    l = r.getFullYear() - i.getFullYear(),
    c = r.getMonth() - i.getMonth();
  return l * 12 + c;
}
function rk(t) {
  return (n) => {
    const i = (t ? Math[t] : Math.trunc)(n);
    return i === 0 ? 0 : i;
  };
}
function sk(t, n) {
  return +ct(t) - +ct(n);
}
function ik(t) {
  const n = ct(t);
  return (n.setHours(23, 59, 59, 999), n);
}
function ok(t) {
  const n = ct(t),
    r = n.getMonth();
  return (
    n.setFullYear(n.getFullYear(), r + 1, 0),
    n.setHours(23, 59, 59, 999),
    n
  );
}
function lk(t) {
  const n = ct(t);
  return +ik(n) == +ok(n);
}
function ck(t, n) {
  const r = ct(t),
    i = ct(n),
    l = Lc(r, i),
    c = Math.abs(ak(r, i));
  let f;
  if (c < 1) f = 0;
  else {
    (r.getMonth() === 1 && r.getDate() > 27 && r.setDate(30),
      r.setMonth(r.getMonth() - l * c));
    let h = Lc(r, i) === -l;
    (lk(ct(t)) && c === 1 && Lc(t, i) === 1 && (h = !1),
      (f = l * (c - Number(h))));
  }
  return f === 0 ? 0 : f;
}
function uk(t, n, r) {
  const i = sk(t, n) / 1e3;
  return rk(r?.roundingMethod)(i);
}
function dk(t) {
  const n = ct(t),
    r = Or(t, 0);
  return (r.setFullYear(n.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r);
}
const fk = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  hk = (t, n, r) => {
    let i;
    const l = fk[t];
    return (
      typeof l == "string"
        ? (i = l)
        : n === 1
          ? (i = l.one)
          : (i = l.other.replace("{{count}}", n.toString())),
      r?.addSuffix
        ? r.comparison && r.comparison > 0
          ? "in " + i
          : i + " ago"
        : i
    );
  };
function Eh(t) {
  return (n = {}) => {
    const r = n.width ? String(n.width) : t.defaultWidth;
    return t.formats[r] || t.formats[t.defaultWidth];
  };
}
const mk = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  pk = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  gk = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  yk = {
    date: Eh({ formats: mk, defaultWidth: "full" }),
    time: Eh({ formats: pk, defaultWidth: "full" }),
    dateTime: Eh({ formats: gk, defaultWidth: "full" }),
  },
  vk = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  xk = (t, n, r, i) => vk[t];
function Oo(t) {
  return (n, r) => {
    const i = r?.context ? String(r.context) : "standalone";
    let l;
    if (i === "formatting" && t.formattingValues) {
      const f = t.defaultFormattingWidth || t.defaultWidth,
        h = r?.width ? String(r.width) : f;
      l = t.formattingValues[h] || t.formattingValues[f];
    } else {
      const f = t.defaultWidth,
        h = r?.width ? String(r.width) : t.defaultWidth;
      l = t.values[h] || t.values[f];
    }
    const c = t.argumentCallback ? t.argumentCallback(n) : n;
    return l[c];
  };
}
const bk = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  wk = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Sk = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  _k = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Ek = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  Nk = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  Tk = (t, n) => {
    const r = Number(t),
      i = r % 100;
    if (i > 20 || i < 10)
      switch (i % 10) {
        case 1:
          return r + "st";
        case 2:
          return r + "nd";
        case 3:
          return r + "rd";
      }
    return r + "th";
  },
  jk = {
    ordinalNumber: Tk,
    era: Oo({ values: bk, defaultWidth: "wide" }),
    quarter: Oo({
      values: wk,
      defaultWidth: "wide",
      argumentCallback: (t) => t - 1,
    }),
    month: Oo({ values: Sk, defaultWidth: "wide" }),
    day: Oo({ values: _k, defaultWidth: "wide" }),
    dayPeriod: Oo({
      values: Ek,
      defaultWidth: "wide",
      formattingValues: Nk,
      defaultFormattingWidth: "wide",
    }),
  };
function Ro(t) {
  return (n, r = {}) => {
    const i = r.width,
      l = (i && t.matchPatterns[i]) || t.matchPatterns[t.defaultMatchWidth],
      c = n.match(l);
    if (!c) return null;
    const f = c[0],
      h = (i && t.parsePatterns[i]) || t.parsePatterns[t.defaultParseWidth],
      g = Array.isArray(h) ? Ok(h, (b) => b.test(f)) : Ck(h, (b) => b.test(f));
    let p;
    ((p = t.valueCallback ? t.valueCallback(g) : g),
      (p = r.valueCallback ? r.valueCallback(p) : p));
    const v = n.slice(f.length);
    return { value: p, rest: v };
  };
}
function Ck(t, n) {
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && n(t[r])) return r;
}
function Ok(t, n) {
  for (let r = 0; r < t.length; r++) if (n(t[r])) return r;
}
function Rk(t) {
  return (n, r = {}) => {
    const i = n.match(t.matchPattern);
    if (!i) return null;
    const l = i[0],
      c = n.match(t.parsePattern);
    if (!c) return null;
    let f = t.valueCallback ? t.valueCallback(c[0]) : c[0];
    f = r.valueCallback ? r.valueCallback(f) : f;
    const h = n.slice(l.length);
    return { value: f, rest: h };
  };
}
const Ak = /^(\d+)(th|st|nd|rd)?/i,
  Mk = /\d+/i,
  Dk = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  kk = { any: [/^b/i, /^(a|c)/i] },
  Lk = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  zk = { any: [/1/i, /2/i, /3/i, /4/i] },
  qk = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Uk = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Vk = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Pk = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Hk = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Bk = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  Fk = {
    ordinalNumber: Rk({
      matchPattern: Ak,
      parsePattern: Mk,
      valueCallback: (t) => parseInt(t, 10),
    }),
    era: Ro({
      matchPatterns: Dk,
      defaultMatchWidth: "wide",
      parsePatterns: kk,
      defaultParseWidth: "any",
    }),
    quarter: Ro({
      matchPatterns: Lk,
      defaultMatchWidth: "wide",
      parsePatterns: zk,
      defaultParseWidth: "any",
      valueCallback: (t) => t + 1,
    }),
    month: Ro({
      matchPatterns: qk,
      defaultMatchWidth: "wide",
      parsePatterns: Uk,
      defaultParseWidth: "any",
    }),
    day: Ro({
      matchPatterns: Vk,
      defaultMatchWidth: "wide",
      parsePatterns: Pk,
      defaultParseWidth: "any",
    }),
    dayPeriod: Ro({
      matchPatterns: Hk,
      defaultMatchWidth: "any",
      parsePatterns: Bk,
      defaultParseWidth: "any",
    }),
  },
  WS = {
    code: "en-US",
    formatDistance: hk,
    formatLong: yk,
    formatRelative: xk,
    localize: jk,
    match: Fk,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Ik(t) {
  const n = ct(t);
  return WD(n, dk(n)) + 1;
}
function Gk(t) {
  const n = ct(t),
    r = +Yc(n) - +JD(n);
  return Math.round(r / $S) + 1;
}
function JS(t, n) {
  const r = ct(t),
    i = r.getFullYear(),
    l = al(),
    c =
      n?.firstWeekContainsDate ??
      n?.locale?.options?.firstWeekContainsDate ??
      l.firstWeekContainsDate ??
      l.locale?.options?.firstWeekContainsDate ??
      1,
    f = Or(t, 0);
  (f.setFullYear(i + 1, 0, c), f.setHours(0, 0, 0, 0));
  const h = Yo(f, n),
    g = Or(t, 0);
  (g.setFullYear(i, 0, c), g.setHours(0, 0, 0, 0));
  const p = Yo(g, n);
  return r.getTime() >= h.getTime()
    ? i + 1
    : r.getTime() >= p.getTime()
      ? i
      : i - 1;
}
function Yk(t, n) {
  const r = al(),
    i =
      n?.firstWeekContainsDate ??
      n?.locale?.options?.firstWeekContainsDate ??
      r.firstWeekContainsDate ??
      r.locale?.options?.firstWeekContainsDate ??
      1,
    l = JS(t, n),
    c = Or(t, 0);
  return (c.setFullYear(l, 0, i), c.setHours(0, 0, 0, 0), Yo(c, n));
}
function Qk(t, n) {
  const r = ct(t),
    i = +Yo(r, n) - +Yk(r, n);
  return Math.round(i / $S) + 1;
}
function at(t, n) {
  const r = t < 0 ? "-" : "",
    i = Math.abs(t).toString().padStart(n, "0");
  return r + i;
}
const vr = {
    y(t, n) {
      const r = t.getFullYear(),
        i = r > 0 ? r : 1 - r;
      return at(n === "yy" ? i % 100 : i, n.length);
    },
    M(t, n) {
      const r = t.getMonth();
      return n === "M" ? String(r + 1) : at(r + 1, 2);
    },
    d(t, n) {
      return at(t.getDate(), n.length);
    },
    a(t, n) {
      const r = t.getHours() / 12 >= 1 ? "pm" : "am";
      switch (n) {
        case "a":
        case "aa":
          return r.toUpperCase();
        case "aaa":
          return r;
        case "aaaaa":
          return r[0];
        default:
          return r === "am" ? "a.m." : "p.m.";
      }
    },
    h(t, n) {
      return at(t.getHours() % 12 || 12, n.length);
    },
    H(t, n) {
      return at(t.getHours(), n.length);
    },
    m(t, n) {
      return at(t.getMinutes(), n.length);
    },
    s(t, n) {
      return at(t.getSeconds(), n.length);
    },
    S(t, n) {
      const r = n.length,
        i = t.getMilliseconds(),
        l = Math.trunc(i * Math.pow(10, r - 3));
      return at(l, n.length);
    },
  },
  ri = {
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  fb = {
    G: function (t, n, r) {
      const i = t.getFullYear() > 0 ? 1 : 0;
      switch (n) {
        case "G":
        case "GG":
        case "GGG":
          return r.era(i, { width: "abbreviated" });
        case "GGGGG":
          return r.era(i, { width: "narrow" });
        default:
          return r.era(i, { width: "wide" });
      }
    },
    y: function (t, n, r) {
      if (n === "yo") {
        const i = t.getFullYear(),
          l = i > 0 ? i : 1 - i;
        return r.ordinalNumber(l, { unit: "year" });
      }
      return vr.y(t, n);
    },
    Y: function (t, n, r, i) {
      const l = JS(t, i),
        c = l > 0 ? l : 1 - l;
      if (n === "YY") {
        const f = c % 100;
        return at(f, 2);
      }
      return n === "Yo"
        ? r.ordinalNumber(c, { unit: "year" })
        : at(c, n.length);
    },
    R: function (t, n) {
      const r = XS(t);
      return at(r, n.length);
    },
    u: function (t, n) {
      const r = t.getFullYear();
      return at(r, n.length);
    },
    Q: function (t, n, r) {
      const i = Math.ceil((t.getMonth() + 1) / 3);
      switch (n) {
        case "Q":
          return String(i);
        case "QQ":
          return at(i, 2);
        case "Qo":
          return r.ordinalNumber(i, { unit: "quarter" });
        case "QQQ":
          return r.quarter(i, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return r.quarter(i, { width: "narrow", context: "formatting" });
        default:
          return r.quarter(i, { width: "wide", context: "formatting" });
      }
    },
    q: function (t, n, r) {
      const i = Math.ceil((t.getMonth() + 1) / 3);
      switch (n) {
        case "q":
          return String(i);
        case "qq":
          return at(i, 2);
        case "qo":
          return r.ordinalNumber(i, { unit: "quarter" });
        case "qqq":
          return r.quarter(i, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return r.quarter(i, { width: "narrow", context: "standalone" });
        default:
          return r.quarter(i, { width: "wide", context: "standalone" });
      }
    },
    M: function (t, n, r) {
      const i = t.getMonth();
      switch (n) {
        case "M":
        case "MM":
          return vr.M(t, n);
        case "Mo":
          return r.ordinalNumber(i + 1, { unit: "month" });
        case "MMM":
          return r.month(i, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return r.month(i, { width: "narrow", context: "formatting" });
        default:
          return r.month(i, { width: "wide", context: "formatting" });
      }
    },
    L: function (t, n, r) {
      const i = t.getMonth();
      switch (n) {
        case "L":
          return String(i + 1);
        case "LL":
          return at(i + 1, 2);
        case "Lo":
          return r.ordinalNumber(i + 1, { unit: "month" });
        case "LLL":
          return r.month(i, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return r.month(i, { width: "narrow", context: "standalone" });
        default:
          return r.month(i, { width: "wide", context: "standalone" });
      }
    },
    w: function (t, n, r, i) {
      const l = Qk(t, i);
      return n === "wo"
        ? r.ordinalNumber(l, { unit: "week" })
        : at(l, n.length);
    },
    I: function (t, n, r) {
      const i = Gk(t);
      return n === "Io"
        ? r.ordinalNumber(i, { unit: "week" })
        : at(i, n.length);
    },
    d: function (t, n, r) {
      return n === "do"
        ? r.ordinalNumber(t.getDate(), { unit: "date" })
        : vr.d(t, n);
    },
    D: function (t, n, r) {
      const i = Ik(t);
      return n === "Do"
        ? r.ordinalNumber(i, { unit: "dayOfYear" })
        : at(i, n.length);
    },
    E: function (t, n, r) {
      const i = t.getDay();
      switch (n) {
        case "E":
        case "EE":
        case "EEE":
          return r.day(i, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return r.day(i, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return r.day(i, { width: "short", context: "formatting" });
        default:
          return r.day(i, { width: "wide", context: "formatting" });
      }
    },
    e: function (t, n, r, i) {
      const l = t.getDay(),
        c = (l - i.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case "e":
          return String(c);
        case "ee":
          return at(c, 2);
        case "eo":
          return r.ordinalNumber(c, { unit: "day" });
        case "eee":
          return r.day(l, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return r.day(l, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return r.day(l, { width: "short", context: "formatting" });
        default:
          return r.day(l, { width: "wide", context: "formatting" });
      }
    },
    c: function (t, n, r, i) {
      const l = t.getDay(),
        c = (l - i.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case "c":
          return String(c);
        case "cc":
          return at(c, n.length);
        case "co":
          return r.ordinalNumber(c, { unit: "day" });
        case "ccc":
          return r.day(l, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return r.day(l, { width: "narrow", context: "standalone" });
        case "cccccc":
          return r.day(l, { width: "short", context: "standalone" });
        default:
          return r.day(l, { width: "wide", context: "standalone" });
      }
    },
    i: function (t, n, r) {
      const i = t.getDay(),
        l = i === 0 ? 7 : i;
      switch (n) {
        case "i":
          return String(l);
        case "ii":
          return at(l, n.length);
        case "io":
          return r.ordinalNumber(l, { unit: "day" });
        case "iii":
          return r.day(i, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return r.day(i, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return r.day(i, { width: "short", context: "formatting" });
        default:
          return r.day(i, { width: "wide", context: "formatting" });
      }
    },
    a: function (t, n, r) {
      const l = t.getHours() / 12 >= 1 ? "pm" : "am";
      switch (n) {
        case "a":
        case "aa":
          return r.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return r
            .dayPeriod(l, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return r.dayPeriod(l, { width: "narrow", context: "formatting" });
        default:
          return r.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    b: function (t, n, r) {
      const i = t.getHours();
      let l;
      switch (
        (i === 12
          ? (l = ri.noon)
          : i === 0
            ? (l = ri.midnight)
            : (l = i / 12 >= 1 ? "pm" : "am"),
        n)
      ) {
        case "b":
        case "bb":
          return r.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return r
            .dayPeriod(l, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return r.dayPeriod(l, { width: "narrow", context: "formatting" });
        default:
          return r.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    B: function (t, n, r) {
      const i = t.getHours();
      let l;
      switch (
        (i >= 17
          ? (l = ri.evening)
          : i >= 12
            ? (l = ri.afternoon)
            : i >= 4
              ? (l = ri.morning)
              : (l = ri.night),
        n)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return r.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return r.dayPeriod(l, { width: "narrow", context: "formatting" });
        default:
          return r.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    h: function (t, n, r) {
      if (n === "ho") {
        let i = t.getHours() % 12;
        return (i === 0 && (i = 12), r.ordinalNumber(i, { unit: "hour" }));
      }
      return vr.h(t, n);
    },
    H: function (t, n, r) {
      return n === "Ho"
        ? r.ordinalNumber(t.getHours(), { unit: "hour" })
        : vr.H(t, n);
    },
    K: function (t, n, r) {
      const i = t.getHours() % 12;
      return n === "Ko"
        ? r.ordinalNumber(i, { unit: "hour" })
        : at(i, n.length);
    },
    k: function (t, n, r) {
      let i = t.getHours();
      return (
        i === 0 && (i = 24),
        n === "ko" ? r.ordinalNumber(i, { unit: "hour" }) : at(i, n.length)
      );
    },
    m: function (t, n, r) {
      return n === "mo"
        ? r.ordinalNumber(t.getMinutes(), { unit: "minute" })
        : vr.m(t, n);
    },
    s: function (t, n, r) {
      return n === "so"
        ? r.ordinalNumber(t.getSeconds(), { unit: "second" })
        : vr.s(t, n);
    },
    S: function (t, n) {
      return vr.S(t, n);
    },
    X: function (t, n, r) {
      const i = t.getTimezoneOffset();
      if (i === 0) return "Z";
      switch (n) {
        case "X":
          return mb(i);
        case "XXXX":
        case "XX":
          return ts(i);
        default:
          return ts(i, ":");
      }
    },
    x: function (t, n, r) {
      const i = t.getTimezoneOffset();
      switch (n) {
        case "x":
          return mb(i);
        case "xxxx":
        case "xx":
          return ts(i);
        default:
          return ts(i, ":");
      }
    },
    O: function (t, n, r) {
      const i = t.getTimezoneOffset();
      switch (n) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + hb(i, ":");
        default:
          return "GMT" + ts(i, ":");
      }
    },
    z: function (t, n, r) {
      const i = t.getTimezoneOffset();
      switch (n) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + hb(i, ":");
        default:
          return "GMT" + ts(i, ":");
      }
    },
    t: function (t, n, r) {
      const i = Math.trunc(t.getTime() / 1e3);
      return at(i, n.length);
    },
    T: function (t, n, r) {
      const i = t.getTime();
      return at(i, n.length);
    },
  };
function hb(t, n = "") {
  const r = t > 0 ? "-" : "+",
    i = Math.abs(t),
    l = Math.trunc(i / 60),
    c = i % 60;
  return c === 0 ? r + String(l) : r + String(l) + n + at(c, 2);
}
function mb(t, n) {
  return t % 60 === 0
    ? (t > 0 ? "-" : "+") + at(Math.abs(t) / 60, 2)
    : ts(t, n);
}
function ts(t, n = "") {
  const r = t > 0 ? "-" : "+",
    i = Math.abs(t),
    l = at(Math.trunc(i / 60), 2),
    c = at(i % 60, 2);
  return r + l + n + c;
}
const pb = (t, n) => {
    switch (t) {
      case "P":
        return n.date({ width: "short" });
      case "PP":
        return n.date({ width: "medium" });
      case "PPP":
        return n.date({ width: "long" });
      default:
        return n.date({ width: "full" });
    }
  },
  e1 = (t, n) => {
    switch (t) {
      case "p":
        return n.time({ width: "short" });
      case "pp":
        return n.time({ width: "medium" });
      case "ppp":
        return n.time({ width: "long" });
      default:
        return n.time({ width: "full" });
    }
  },
  Kk = (t, n) => {
    const r = t.match(/(P+)(p+)?/) || [],
      i = r[1],
      l = r[2];
    if (!l) return pb(t, n);
    let c;
    switch (i) {
      case "P":
        c = n.dateTime({ width: "short" });
        break;
      case "PP":
        c = n.dateTime({ width: "medium" });
        break;
      case "PPP":
        c = n.dateTime({ width: "long" });
        break;
      default:
        c = n.dateTime({ width: "full" });
        break;
    }
    return c.replace("{{date}}", pb(i, n)).replace("{{time}}", e1(l, n));
  },
  Zk = { p: e1, P: Kk },
  $k = /^D+$/,
  Xk = /^Y+$/,
  Wk = ["D", "DD", "YY", "YYYY"];
function Jk(t) {
  return $k.test(t);
}
function e4(t) {
  return Xk.test(t);
}
function t4(t, n, r) {
  const i = n4(t, n, r);
  if ((console.warn(i), Wk.includes(t))) throw new RangeError(i);
}
function n4(t, n, r) {
  const i = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const a4 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  r4 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  s4 = /^'([^]*?)'?$/,
  i4 = /''/g,
  o4 = /[a-zA-Z]/;
function Ao(t, n, r) {
  const i = al(),
    l = i.locale ?? WS,
    c =
      i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1,
    f = i.weekStartsOn ?? i.locale?.options?.weekStartsOn ?? 0,
    h = ct(t);
  if (!nk(h)) throw new RangeError("Invalid time value");
  let g = n
    .match(r4)
    .map((v) => {
      const b = v[0];
      if (b === "p" || b === "P") {
        const S = Zk[b];
        return S(v, l.formatLong);
      }
      return v;
    })
    .join("")
    .match(a4)
    .map((v) => {
      if (v === "''") return { isToken: !1, value: "'" };
      const b = v[0];
      if (b === "'") return { isToken: !1, value: l4(v) };
      if (fb[b]) return { isToken: !0, value: v };
      if (b.match(o4))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            b +
            "`",
        );
      return { isToken: !1, value: v };
    });
  l.localize.preprocessor && (g = l.localize.preprocessor(h, g));
  const p = { firstWeekContainsDate: c, weekStartsOn: f, locale: l };
  return g
    .map((v) => {
      if (!v.isToken) return v.value;
      const b = v.value;
      (e4(b) || Jk(b)) && t4(b, n, String(t));
      const S = fb[b[0]];
      return S(h, b, l.localize, p);
    })
    .join("");
}
function l4(t) {
  const n = t.match(s4);
  return n ? n[1].replace(i4, "'") : t;
}
function c4(t, n, r) {
  const i = al(),
    l = r?.locale ?? i.locale ?? WS,
    c = 2520,
    f = Lc(t, n);
  if (isNaN(f)) throw new RangeError("Invalid time value");
  const h = Object.assign({}, r, { addSuffix: r?.addSuffix, comparison: f });
  let g, p;
  f > 0 ? ((g = ct(n)), (p = ct(t))) : ((g = ct(t)), (p = ct(n)));
  const v = uk(p, g),
    b = (Qc(p) - Qc(g)) / 1e3,
    S = Math.round((v - b) / 60);
  let E;
  if (S < 2)
    return r?.includeSeconds
      ? v < 5
        ? l.formatDistance("lessThanXSeconds", 5, h)
        : v < 10
          ? l.formatDistance("lessThanXSeconds", 10, h)
          : v < 20
            ? l.formatDistance("lessThanXSeconds", 20, h)
            : v < 40
              ? l.formatDistance("halfAMinute", 0, h)
              : v < 60
                ? l.formatDistance("lessThanXMinutes", 1, h)
                : l.formatDistance("xMinutes", 1, h)
      : S === 0
        ? l.formatDistance("lessThanXMinutes", 1, h)
        : l.formatDistance("xMinutes", S, h);
  if (S < 45) return l.formatDistance("xMinutes", S, h);
  if (S < 90) return l.formatDistance("aboutXHours", 1, h);
  if (S < ub) {
    const j = Math.round(S / 60);
    return l.formatDistance("aboutXHours", j, h);
  } else {
    if (S < c) return l.formatDistance("xDays", 1, h);
    if (S < Oc) {
      const j = Math.round(S / ub);
      return l.formatDistance("xDays", j, h);
    } else if (S < Oc * 2)
      return ((E = Math.round(S / Oc)), l.formatDistance("aboutXMonths", E, h));
  }
  if (((E = ck(p, g)), E < 12)) {
    const j = Math.round(S / Oc);
    return l.formatDistance("xMonths", j, h);
  } else {
    const j = E % 12,
      _ = Math.trunc(E / 12);
    return j < 3
      ? l.formatDistance("aboutXYears", _, h)
      : j < 9
        ? l.formatDistance("overXYears", _, h)
        : l.formatDistance("almostXYears", _ + 1, h);
  }
}
function Eu(t, n) {
  return c4(t, ek(t), n);
}
function u4() {
  const { data: t } = Ni({ query: { enabled: !0 } }),
    { data: n, isLoading: r } = AD({ query: { enabled: !0 } }),
    { data: i, isLoading: l } = zD({ query: { enabled: !0 } }),
    { data: c, isLoading: f } = HD({ query: { enabled: !0 } }),
    { data: h, isLoading: g } = YD({ query: { enabled: !0 } });
  return d.jsxs("div", {
    className: "space-y-8 animate-in fade-in duration-500",
    children: [
      d.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          d.jsxs("h1", {
            className:
              "text-3xl md:text-4xl font-serif font-bold tracking-tight text-primary",
            children: [
              "Welcome back, ",
              t?.name.split(" ")[0] || "Student",
              "!",
            ],
          }),
          d.jsx("p", {
            className: "text-muted-foreground text-lg",
            children:
              "Here's what's happening in the SkillBridge community today.",
          }),
        ],
      }),
      d.jsxs("div", {
        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
        children: [
          d.jsxs(It, {
            className:
              "bg-primary text-primary-foreground border-none shadow-md",
            children: [
              d.jsxs(Mn, {
                className:
                  "flex flex-row items-center justify-between space-y-0 pb-2",
                children: [
                  d.jsx(Dn, {
                    className: "text-sm font-medium",
                    children: "Pending Exchanges",
                  }),
                  d.jsx(uu, { className: "h-4 w-4 opacity-80" }),
                ],
              }),
              d.jsxs(Gt, {
                children: [
                  r
                    ? d.jsx(Mt, {
                        className: "h-8 w-16 bg-primary-foreground/20",
                      })
                    : d.jsx("div", {
                        className: "text-3xl font-bold",
                        children: n?.pendingExchanges || 0,
                      }),
                  d.jsx("p", {
                    className: "text-xs opacity-80 mt-1",
                    children: "Awaiting response",
                  }),
                ],
              }),
            ],
          }),
          d.jsxs(It, {
            className: "shadow-sm",
            children: [
              d.jsxs(Mn, {
                className:
                  "flex flex-row items-center justify-between space-y-0 pb-2",
                children: [
                  d.jsx(Dn, {
                    className: "text-sm font-medium text-muted-foreground",
                    children: "Hours Learned",
                  }),
                  d.jsx(Em, { className: "h-4 w-4 text-muted-foreground" }),
                ],
              }),
              d.jsxs(Gt, {
                children: [
                  r
                    ? d.jsx(Mt, { className: "h-8 w-16" })
                    : d.jsx("div", {
                        className: "text-3xl font-bold text-foreground",
                        children: n?.totalHoursLearned || 0,
                      }),
                  d.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "From completed sessions",
                  }),
                ],
              }),
            ],
          }),
          d.jsxs(It, {
            className: "shadow-sm",
            children: [
              d.jsxs(Mn, {
                className:
                  "flex flex-row items-center justify-between space-y-0 pb-2",
                children: [
                  d.jsx(Dn, {
                    className: "text-sm font-medium text-muted-foreground",
                    children: "Hours Taught",
                  }),
                  d.jsx(d4, { className: "h-4 w-4 text-muted-foreground" }),
                ],
              }),
              d.jsxs(Gt, {
                children: [
                  r
                    ? d.jsx(Mt, { className: "h-8 w-16" })
                    : d.jsx("div", {
                        className: "text-3xl font-bold text-foreground",
                        children: n?.totalHoursTaught || 0,
                      }),
                  d.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "Knowledge shared",
                  }),
                ],
              }),
            ],
          }),
          d.jsxs(It, {
            className: "shadow-sm",
            children: [
              d.jsxs(Mn, {
                className:
                  "flex flex-row items-center justify-between space-y-0 pb-2",
                children: [
                  d.jsx(Dn, {
                    className: "text-sm font-medium text-muted-foreground",
                    children: "Active Listings",
                  }),
                  d.jsx(Uc, { className: "h-4 w-4 text-muted-foreground" }),
                ],
              }),
              d.jsxs(Gt, {
                children: [
                  r
                    ? d.jsx(Mt, { className: "h-8 w-16" })
                    : d.jsx("div", {
                        className: "text-3xl font-bold text-foreground",
                        children:
                          (n?.activeOffers || 0) + (n?.activeRequests || 0),
                      }),
                  d.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "Offers & requests",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      d.jsxs("div", {
        className: "grid gap-6 md:grid-cols-2 lg:grid-cols-7",
        children: [
          d.jsxs("div", {
            className: "lg:col-span-4 space-y-6",
            children: [
              d.jsxs(It, {
                className: "shadow-sm border-border/50",
                children: [
                  d.jsxs(Mn, {
                    children: [
                      d.jsxs(Dn, {
                        className: "flex items-center gap-2",
                        children: [
                          d.jsx(I0, { className: "h-5 w-5 text-secondary" }),
                          "Recommended Matches",
                        ],
                      }),
                      d.jsx($h, {
                        children: "Based on your skills and requests",
                      }),
                    ],
                  }),
                  d.jsx(Gt, {
                    className: "grid gap-4",
                    children: g
                      ? Array(3)
                          .fill(0)
                          .map((p, v) =>
                            d.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center gap-4 p-3 rounded-lg border",
                                children: [
                                  d.jsx(Mt, {
                                    className: "h-12 w-12 rounded-full",
                                  }),
                                  d.jsxs("div", {
                                    className: "space-y-2 flex-1",
                                    children: [
                                      d.jsx(Mt, { className: "h-4 w-1/3" }),
                                      d.jsx(Mt, { className: "h-3 w-2/3" }),
                                    ],
                                  }),
                                ],
                              },
                              v,
                            ),
                          )
                      : h?.length === 0
                        ? d.jsx("div", {
                            className:
                              "text-center py-8 text-muted-foreground border border-dashed rounded-lg",
                            children: d.jsx("p", {
                              children:
                                "Add more skills to your profile to get recommendations!",
                            }),
                          })
                        : h?.map((p) =>
                            d.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-start gap-4 p-4 rounded-xl border border-border/40 hover:border-border transition-colors group",
                                children: [
                                  d.jsxs(Qn, {
                                    className:
                                      "h-12 w-12 border-2 border-background shadow-sm",
                                    children: [
                                      d.jsx(Kn, { src: p.student.avatarUrl }),
                                      d.jsx(Zn, {
                                        className: "bg-primary/10 text-primary",
                                        children: p.student.name[0],
                                      }),
                                    ],
                                  }),
                                  d.jsxs("div", {
                                    className: "flex-1 space-y-1",
                                    children: [
                                      d.jsxs("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          d.jsx("h4", {
                                            className:
                                              "font-semibold text-foreground group-hover:text-primary transition-colors",
                                            children: d.jsx(Dt, {
                                              href: `/students/${p.student.id}`,
                                              children: p.student.name,
                                            }),
                                          }),
                                          d.jsxs(Bn, {
                                            variant: "secondary",
                                            className:
                                              "bg-secondary/10 text-secondary-foreground hover:bg-secondary/20",
                                            children: [
                                              Math.round(p.matchScore),
                                              "% Match",
                                            ],
                                          }),
                                        ],
                                      }),
                                      d.jsxs("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: [
                                          d.jsx("span", {
                                            className:
                                              "font-medium text-foreground",
                                            children: "You teach:",
                                          }),
                                          " ",
                                          p.youTeach.name,
                                        ],
                                      }),
                                      d.jsxs("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: [
                                          d.jsx("span", {
                                            className:
                                              "font-medium text-foreground",
                                            children: "They teach:",
                                          }),
                                          " ",
                                          p.theyTeach.name,
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              p.student.id,
                            ),
                          ),
                  }),
                ],
              }),
              d.jsxs(It, {
                className: "shadow-sm border-border/50",
                children: [
                  d.jsx(Mn, {
                    children: d.jsxs(Dn, {
                      className: "flex items-center gap-2",
                      children: [
                        d.jsx(li, { className: "h-5 w-5 text-primary" }),
                        "Community Activity",
                      ],
                    }),
                  }),
                  d.jsx(Gt, {
                    children: d.jsx("div", {
                      className: "space-y-6",
                      children: l
                        ? Array(4)
                            .fill(0)
                            .map((p, v) =>
                              d.jsxs(
                                "div",
                                {
                                  className: "flex items-start gap-4",
                                  children: [
                                    d.jsx(Mt, {
                                      className: "h-8 w-8 rounded-full",
                                    }),
                                    d.jsxs("div", {
                                      className: "space-y-2 flex-1",
                                      children: [
                                        d.jsx(Mt, { className: "h-4 w-3/4" }),
                                        d.jsx(Mt, { className: "h-3 w-1/4" }),
                                      ],
                                    }),
                                  ],
                                },
                                v,
                              ),
                            )
                        : i?.length === 0
                          ? d.jsx("div", {
                              className:
                                "text-center py-4 text-muted-foreground",
                              children: "No recent activity.",
                            })
                          : i?.map((p) =>
                              d.jsxs(
                                "div",
                                {
                                  className: "flex items-start gap-4",
                                  children: [
                                    d.jsxs(Qn, {
                                      className: "h-8 w-8 mt-0.5",
                                      children: [
                                        d.jsx(Kn, { src: p.actor.avatarUrl }),
                                        d.jsx(Zn, {
                                          children: p.actor.name[0],
                                        }),
                                      ],
                                    }),
                                    d.jsxs("div", {
                                      className: "space-y-1 flex-1",
                                      children: [
                                        d.jsxs("p", {
                                          className: "text-sm leading-snug",
                                          children: [
                                            d.jsx(Dt, {
                                              href: `/students/${p.actor.id}`,
                                              className:
                                                "font-medium hover:underline text-foreground",
                                              children: p.actor.name,
                                            }),
                                            " ",
                                            d.jsx("span", {
                                              className:
                                                "text-muted-foreground",
                                              children: p.text,
                                            }),
                                          ],
                                        }),
                                        d.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground/80",
                                          children: Eu(new Date(p.createdAt), {
                                            addSuffix: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                p.id,
                              ),
                            ),
                    }),
                  }),
                ],
              }),
            ],
          }),
          d.jsx("div", {
            className: "lg:col-span-3 space-y-6",
            children: d.jsxs(It, {
              className: "shadow-sm border-border/50 bg-accent/30",
              children: [
                d.jsxs(Mn, {
                  children: [
                    d.jsxs(Dn, {
                      className: "flex items-center gap-2 text-lg",
                      children: [
                        d.jsx(YC, { className: "h-5 w-5 text-primary" }),
                        "Trending Skills",
                      ],
                    }),
                    d.jsx($h, {
                      children: "What people are looking for right now",
                    }),
                  ],
                }),
                d.jsxs(Gt, {
                  children: [
                    d.jsx("div", {
                      className: "space-y-4",
                      children: f
                        ? Array(5)
                            .fill(0)
                            .map((p, v) =>
                              d.jsx(Mt, { className: "h-10 w-full" }, v),
                            )
                        : c?.length === 0
                          ? d.jsx("div", {
                              className:
                                "text-sm text-muted-foreground text-center py-2",
                              children: "No trending skills yet.",
                            })
                          : c?.map((p, v) =>
                              d.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between p-2 rounded-md hover:bg-background/50 transition-colors",
                                  children: [
                                    d.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        d.jsxs("span", {
                                          className:
                                            "text-muted-foreground font-mono text-sm w-4",
                                          children: [v + 1, "."],
                                        }),
                                        d.jsx(Dt, {
                                          href: `/browse?skillId=${p.skill.id}`,
                                          className:
                                            "font-medium text-foreground hover:text-primary",
                                          children: p.skill.name,
                                        }),
                                      ],
                                    }),
                                    d.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 text-xs text-muted-foreground",
                                      children: [
                                        d.jsxs("span", {
                                          className:
                                            "text-emerald-600 font-medium",
                                          children: ["+", p.weeklyGrowth, "%"],
                                        }),
                                        d.jsxs("span", {
                                          children: [
                                            "(",
                                            p.requestCount,
                                            " reqs)",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                p.skill.id,
                              ),
                            ),
                    }),
                    d.jsx("div", {
                      className: "mt-4 pt-4 border-t border-border/50",
                      children: d.jsx(bt, {
                        variant: "ghost",
                        size: "sm",
                        className:
                          "w-full text-primary hover:text-primary hover:bg-primary/5",
                        asChild: !0,
                        children: d.jsxs(Dt, {
                          href: "/browse",
                          children: [
                            "Browse all skills ",
                            d.jsx(Po, { className: "ml-2 h-4 w-4" }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function d4(t) {
  return d.jsxs("svg", {
    ...t,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      d.jsx("path", {
        d: "M21.42 10.922a2 2 0 0 0-.019-3.838L12.83 4.38a2 2 0 0 0-1.66 0L2.6 7.08a2 2 0 0 0 0 3.832l8.57 3.698a2 2 0 0 0 1.66 0z",
      }),
      d.jsx("path", { d: "M22 10v6" }),
      d.jsx("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }),
    ],
  });
}
var f4 = y.createContext(void 0);
function Nu(t) {
  const n = y.useContext(f4);
  return t || n || "ltr";
}
var Nh = "rovingFocusGroup.onEntryFocus",
  h4 = { bubbles: !1, cancelable: !0 },
  rl = "RovingFocusGroup",
  [Xh, t1, m4] = bm(rl),
  [p4, Tu] = fa(rl, [m4]),
  [g4, y4] = p4(rl),
  n1 = y.forwardRef((t, n) =>
    d.jsx(Xh.Provider, {
      scope: t.__scopeRovingFocusGroup,
      children: d.jsx(Xh.Slot, {
        scope: t.__scopeRovingFocusGroup,
        children: d.jsx(v4, { ...t, ref: n }),
      }),
    }),
  );
n1.displayName = rl;
var v4 = y.forwardRef((t, n) => {
    const {
        __scopeRovingFocusGroup: r,
        orientation: i,
        loop: l = !1,
        dir: c,
        currentTabStopId: f,
        defaultCurrentTabStopId: h,
        onCurrentTabStopIdChange: g,
        onEntryFocus: p,
        preventScrollOnEntryFocus: v = !1,
        ...b
      } = t,
      S = y.useRef(null),
      E = rt(n, S),
      j = Nu(c),
      [_, N] = Tr({ prop: f, defaultProp: h ?? null, onChange: g, caller: rl }),
      [R, O] = y.useState(!1),
      D = xn(p),
      z = t1(r),
      M = y.useRef(!1),
      [Y, Q] = y.useState(0);
    return (
      y.useEffect(() => {
        const F = S.current;
        if (F)
          return (
            F.addEventListener(Nh, D),
            () => F.removeEventListener(Nh, D)
          );
      }, [D]),
      d.jsx(g4, {
        scope: r,
        orientation: i,
        dir: j,
        loop: l,
        currentTabStopId: _,
        onItemFocus: y.useCallback((F) => N(F), [N]),
        onItemShiftTab: y.useCallback(() => O(!0), []),
        onFocusableItemAdd: y.useCallback(() => Q((F) => F + 1), []),
        onFocusableItemRemove: y.useCallback(() => Q((F) => F - 1), []),
        children: d.jsx(qe.div, {
          tabIndex: R || Y === 0 ? -1 : 0,
          "data-orientation": i,
          ...b,
          ref: E,
          style: { outline: "none", ...t.style },
          onMouseDown: Oe(t.onMouseDown, () => {
            M.current = !0;
          }),
          onFocus: Oe(t.onFocus, (F) => {
            const oe = !M.current;
            if (F.target === F.currentTarget && oe && !R) {
              const ne = new CustomEvent(Nh, h4);
              if ((F.currentTarget.dispatchEvent(ne), !ne.defaultPrevented)) {
                const he = z().filter((L) => L.focusable),
                  J = he.find((L) => L.active),
                  se = he.find((L) => L.id === _),
                  ce = [J, se, ...he].filter(Boolean).map((L) => L.ref.current);
                s1(ce, v);
              }
            }
            M.current = !1;
          }),
          onBlur: Oe(t.onBlur, () => O(!1)),
        }),
      })
    );
  }),
  a1 = "RovingFocusGroupItem",
  r1 = y.forwardRef((t, n) => {
    const {
        __scopeRovingFocusGroup: r,
        focusable: i = !0,
        active: l = !1,
        tabStopId: c,
        children: f,
        ...h
      } = t,
      g = za(),
      p = c || g,
      v = y4(a1, r),
      b = v.currentTabStopId === p,
      S = t1(r),
      {
        onFocusableItemAdd: E,
        onFocusableItemRemove: j,
        currentTabStopId: _,
      } = v;
    return (
      y.useEffect(() => {
        if (i) return (E(), () => j());
      }, [i, E, j]),
      d.jsx(Xh.ItemSlot, {
        scope: r,
        id: p,
        focusable: i,
        active: l,
        children: d.jsx(qe.span, {
          tabIndex: b ? 0 : -1,
          "data-orientation": v.orientation,
          ...h,
          ref: n,
          onMouseDown: Oe(t.onMouseDown, (N) => {
            i ? v.onItemFocus(p) : N.preventDefault();
          }),
          onFocus: Oe(t.onFocus, () => v.onItemFocus(p)),
          onKeyDown: Oe(t.onKeyDown, (N) => {
            if (N.key === "Tab" && N.shiftKey) {
              v.onItemShiftTab();
              return;
            }
            if (N.target !== N.currentTarget) return;
            const R = w4(N, v.orientation, v.dir);
            if (R !== void 0) {
              if (N.metaKey || N.ctrlKey || N.altKey || N.shiftKey) return;
              N.preventDefault();
              let D = S()
                .filter((z) => z.focusable)
                .map((z) => z.ref.current);
              if (R === "last") D.reverse();
              else if (R === "prev" || R === "next") {
                R === "prev" && D.reverse();
                const z = D.indexOf(N.currentTarget);
                D = v.loop ? S4(D, z + 1) : D.slice(z + 1);
              }
              setTimeout(() => s1(D));
            }
          }),
          children:
            typeof f == "function"
              ? f({ isCurrentTabStop: b, hasTabStop: _ != null })
              : f,
        }),
      })
    );
  });
r1.displayName = a1;
var x4 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function b4(t, n) {
  return n !== "rtl"
    ? t
    : t === "ArrowLeft"
      ? "ArrowRight"
      : t === "ArrowRight"
        ? "ArrowLeft"
        : t;
}
function w4(t, n, r) {
  const i = b4(t.key, r);
  if (
    !(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) &&
    !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i))
  )
    return x4[i];
}
function s1(t, n = !1) {
  const r = document.activeElement;
  for (const i of t)
    if (
      i === r ||
      (i.focus({ preventScroll: n }), document.activeElement !== r)
    )
      return;
}
function S4(t, n) {
  return t.map((r, i) => t[(n + i) % t.length]);
}
var i1 = n1,
  o1 = r1,
  ju = "Tabs",
  [_4] = fa(ju, [Tu]),
  l1 = Tu(),
  [E4, Km] = _4(ju),
  c1 = y.forwardRef((t, n) => {
    const {
        __scopeTabs: r,
        value: i,
        onValueChange: l,
        defaultValue: c,
        orientation: f = "horizontal",
        dir: h,
        activationMode: g = "automatic",
        ...p
      } = t,
      v = Nu(h),
      [b, S] = Tr({ prop: i, onChange: l, defaultProp: c ?? "", caller: ju });
    return d.jsx(E4, {
      scope: r,
      baseId: za(),
      value: b,
      onValueChange: S,
      orientation: f,
      dir: v,
      activationMode: g,
      children: d.jsx(qe.div, { dir: v, "data-orientation": f, ...p, ref: n }),
    });
  });
c1.displayName = ju;
var u1 = "TabsList",
  d1 = y.forwardRef((t, n) => {
    const { __scopeTabs: r, loop: i = !0, ...l } = t,
      c = Km(u1, r),
      f = l1(r);
    return d.jsx(i1, {
      asChild: !0,
      ...f,
      orientation: c.orientation,
      dir: c.dir,
      loop: i,
      children: d.jsx(qe.div, {
        role: "tablist",
        "aria-orientation": c.orientation,
        ...l,
        ref: n,
      }),
    });
  });
d1.displayName = u1;
var f1 = "TabsTrigger",
  h1 = y.forwardRef((t, n) => {
    const { __scopeTabs: r, value: i, disabled: l = !1, ...c } = t,
      f = Km(f1, r),
      h = l1(r),
      g = g1(f.baseId, i),
      p = y1(f.baseId, i),
      v = i === f.value;
    return d.jsx(o1, {
      asChild: !0,
      ...h,
      focusable: !l,
      active: v,
      children: d.jsx(qe.button, {
        type: "button",
        role: "tab",
        "aria-selected": v,
        "aria-controls": p,
        "data-state": v ? "active" : "inactive",
        "data-disabled": l ? "" : void 0,
        disabled: l,
        id: g,
        ...c,
        ref: n,
        onMouseDown: Oe(t.onMouseDown, (b) => {
          !l && b.button === 0 && b.ctrlKey === !1
            ? f.onValueChange(i)
            : b.preventDefault();
        }),
        onKeyDown: Oe(t.onKeyDown, (b) => {
          [" ", "Enter"].includes(b.key) && f.onValueChange(i);
        }),
        onFocus: Oe(t.onFocus, () => {
          const b = f.activationMode !== "manual";
          !v && !l && b && f.onValueChange(i);
        }),
      }),
    });
  });
h1.displayName = f1;
var m1 = "TabsContent",
  p1 = y.forwardRef((t, n) => {
    const { __scopeTabs: r, value: i, forceMount: l, children: c, ...f } = t,
      h = Km(m1, r),
      g = g1(h.baseId, i),
      p = y1(h.baseId, i),
      v = i === h.value,
      b = y.useRef(v);
    return (
      y.useEffect(() => {
        const S = requestAnimationFrame(() => (b.current = !1));
        return () => cancelAnimationFrame(S);
      }, []),
      d.jsx(Ha, {
        present: l || v,
        children: ({ present: S }) =>
          d.jsx(qe.div, {
            "data-state": v ? "active" : "inactive",
            "data-orientation": h.orientation,
            role: "tabpanel",
            "aria-labelledby": g,
            hidden: !S,
            id: p,
            tabIndex: 0,
            ...f,
            ref: n,
            style: { ...t.style, animationDuration: b.current ? "0s" : void 0 },
            children: S && c,
          }),
      })
    );
  });
p1.displayName = m1;
function g1(t, n) {
  return `${t}-trigger-${n}`;
}
function y1(t, n) {
  return `${t}-content-${n}`;
}
var N4 = c1,
  v1 = d1,
  x1 = h1,
  b1 = p1;
const w1 = N4,
  Zm = y.forwardRef(({ className: t, ...n }, r) =>
    d.jsx(v1, {
      ref: r,
      className: we(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        t,
      ),
      ...n,
    }),
  );
Zm.displayName = v1.displayName;
const Da = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(x1, {
    ref: r,
    className: we(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      t,
    ),
    ...n,
  }),
);
Da.displayName = x1.displayName;
const T4 = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(b1, {
    ref: r,
    className: we(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t,
    ),
    ...n,
  }),
);
T4.displayName = b1.displayName;
function gb(t, [n, r]) {
  return Math.min(r, Math.max(n, t));
}
function S1(t) {
  const n = y.useRef({ value: t, previous: t });
  return y.useMemo(
    () => (
      n.current.value !== t &&
        ((n.current.previous = n.current.value), (n.current.value = t)),
      n.current.previous
    ),
    [t],
  );
}
var j4 = [" ", "Enter", "ArrowUp", "ArrowDown"],
  C4 = [" ", "Enter"],
  ls = "Select",
  [Cu, Ou, O4] = bm(ls),
  [Ti] = fa(ls, [O4, pu]),
  Ru = pu(),
  [R4, Dr] = Ti(ls),
  [A4, M4] = Ti(ls),
  _1 = (t) => {
    const {
        __scopeSelect: n,
        children: r,
        open: i,
        defaultOpen: l,
        onOpenChange: c,
        value: f,
        defaultValue: h,
        onValueChange: g,
        dir: p,
        name: v,
        autoComplete: b,
        disabled: S,
        required: E,
        form: j,
      } = t,
      _ = Ru(n),
      [N, R] = y.useState(null),
      [O, D] = y.useState(null),
      [z, M] = y.useState(!1),
      Y = Nu(p),
      [Q, F] = Tr({ prop: i, defaultProp: l ?? !1, onChange: c, caller: ls }),
      [oe, ne] = Tr({ prop: f, defaultProp: h, onChange: g, caller: ls }),
      he = y.useRef(null),
      J = N ? j || !!N.closest("form") : !0,
      [se, ee] = y.useState(new Set()),
      ce = Array.from(se)
        .map((L) => L.props.value)
        .join(";");
    return d.jsx(Mw, {
      ..._,
      children: d.jsxs(R4, {
        required: E,
        scope: n,
        trigger: N,
        onTriggerChange: R,
        valueNode: O,
        onValueNodeChange: D,
        valueNodeHasChildren: z,
        onValueNodeHasChildrenChange: M,
        contentId: za(),
        value: oe,
        onValueChange: ne,
        open: Q,
        onOpenChange: F,
        dir: Y,
        triggerPointerDownPosRef: he,
        disabled: S,
        children: [
          d.jsx(Cu.Provider, {
            scope: n,
            children: d.jsx(A4, {
              scope: t.__scopeSelect,
              onNativeOptionAdd: y.useCallback((L) => {
                ee((G) => new Set(G).add(L));
              }, []),
              onNativeOptionRemove: y.useCallback((L) => {
                ee((G) => {
                  const W = new Set(G);
                  return (W.delete(L), W);
                });
              }, []),
              children: r,
            }),
          }),
          J
            ? d.jsxs(
                Q1,
                {
                  "aria-hidden": !0,
                  required: E,
                  tabIndex: -1,
                  name: v,
                  autoComplete: b,
                  value: oe,
                  onChange: (L) => ne(L.target.value),
                  disabled: S,
                  form: j,
                  children: [
                    oe === void 0 ? d.jsx("option", { value: "" }) : null,
                    Array.from(se),
                  ],
                },
                ce,
              )
            : null,
        ],
      }),
    });
  };
_1.displayName = ls;
var E1 = "SelectTrigger",
  N1 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, disabled: i = !1, ...l } = t,
      c = Ru(r),
      f = Dr(E1, r),
      h = f.disabled || i,
      g = rt(n, f.onTriggerChange),
      p = Ou(r),
      v = y.useRef("touch"),
      [b, S, E] = Z1((_) => {
        const N = p().filter((D) => !D.disabled),
          R = N.find((D) => D.value === f.value),
          O = $1(N, _, R);
        O !== void 0 && f.onValueChange(O.value);
      }),
      j = (_) => {
        (h || (f.onOpenChange(!0), E()),
          _ &&
            (f.triggerPointerDownPosRef.current = {
              x: Math.round(_.pageX),
              y: Math.round(_.pageY),
            }));
      };
    return d.jsx(Dw, {
      asChild: !0,
      ...c,
      children: d.jsx(qe.button, {
        type: "button",
        role: "combobox",
        "aria-controls": f.contentId,
        "aria-expanded": f.open,
        "aria-required": f.required,
        "aria-autocomplete": "none",
        dir: f.dir,
        "data-state": f.open ? "open" : "closed",
        disabled: h,
        "data-disabled": h ? "" : void 0,
        "data-placeholder": K1(f.value) ? "" : void 0,
        ...l,
        ref: g,
        onClick: Oe(l.onClick, (_) => {
          (_.currentTarget.focus(), v.current !== "mouse" && j(_));
        }),
        onPointerDown: Oe(l.onPointerDown, (_) => {
          v.current = _.pointerType;
          const N = _.target;
          (N.hasPointerCapture(_.pointerId) &&
            N.releasePointerCapture(_.pointerId),
            _.button === 0 &&
              _.ctrlKey === !1 &&
              _.pointerType === "mouse" &&
              (j(_), _.preventDefault()));
        }),
        onKeyDown: Oe(l.onKeyDown, (_) => {
          const N = b.current !== "";
          (!(_.ctrlKey || _.altKey || _.metaKey) &&
            _.key.length === 1 &&
            S(_.key),
            !(N && _.key === " ") &&
              j4.includes(_.key) &&
              (j(), _.preventDefault()));
        }),
      }),
    });
  });
N1.displayName = E1;
var T1 = "SelectValue",
  j1 = y.forwardRef((t, n) => {
    const {
        __scopeSelect: r,
        className: i,
        style: l,
        children: c,
        placeholder: f = "",
        ...h
      } = t,
      g = Dr(T1, r),
      { onValueNodeHasChildrenChange: p } = g,
      v = c !== void 0,
      b = rt(n, g.onValueNodeChange);
    return (
      Ct(() => {
        p(v);
      }, [p, v]),
      d.jsx(qe.span, {
        ...h,
        ref: b,
        style: { pointerEvents: "none" },
        children: K1(g.value) ? d.jsx(d.Fragment, { children: f }) : c,
      })
    );
  });
j1.displayName = T1;
var D4 = "SelectIcon",
  C1 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, children: i, ...l } = t;
    return d.jsx(qe.span, {
      "aria-hidden": !0,
      ...l,
      ref: n,
      children: i || "▼",
    });
  });
C1.displayName = D4;
var k4 = "SelectPortal",
  O1 = (t) => d.jsx(Xo, { asChild: !0, ...t });
O1.displayName = k4;
var cs = "SelectContent",
  R1 = y.forwardRef((t, n) => {
    const r = Dr(cs, t.__scopeSelect),
      [i, l] = y.useState();
    if (
      (Ct(() => {
        l(new DocumentFragment());
      }, []),
      !r.open)
    ) {
      const c = i;
      return c
        ? wi.createPortal(
            d.jsx(A1, {
              scope: t.__scopeSelect,
              children: d.jsx(Cu.Slot, {
                scope: t.__scopeSelect,
                children: d.jsx("div", { children: t.children }),
              }),
            }),
            c,
          )
        : null;
    }
    return d.jsx(M1, { ...t, ref: n });
  });
R1.displayName = cs;
var Vn = 10,
  [A1, kr] = Ti(cs),
  L4 = "SelectContentImpl",
  z4 = Vo("SelectContent.RemoveScroll"),
  M1 = y.forwardRef((t, n) => {
    const {
        __scopeSelect: r,
        position: i = "item-aligned",
        onCloseAutoFocus: l,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        side: h,
        sideOffset: g,
        align: p,
        alignOffset: v,
        arrowPadding: b,
        collisionBoundary: S,
        collisionPadding: E,
        sticky: j,
        hideWhenDetached: _,
        avoidCollisions: N,
        ...R
      } = t,
      O = Dr(cs, r),
      [D, z] = y.useState(null),
      [M, Y] = y.useState(null),
      Q = rt(n, (ye) => z(ye)),
      [F, oe] = y.useState(null),
      [ne, he] = y.useState(null),
      J = Ou(r),
      [se, ee] = y.useState(!1),
      ce = y.useRef(!1);
    (y.useEffect(() => {
      if (D) return oS(D);
    }, [D]),
      Ww());
    const L = y.useCallback(
        (ye) => {
          const [Ce, ...De] = J().map((We) => We.ref.current),
            [Qe] = De.slice(-1),
            He = document.activeElement;
          for (const We of ye)
            if (
              We === He ||
              (We?.scrollIntoView({ block: "nearest" }),
              We === Ce && M && (M.scrollTop = 0),
              We === Qe && M && (M.scrollTop = M.scrollHeight),
              We?.focus(),
              document.activeElement !== He)
            )
              return;
        },
        [J, M],
      ),
      G = y.useCallback(() => L([F, D]), [L, F, D]);
    y.useEffect(() => {
      se && G();
    }, [se, G]);
    const { onOpenChange: W, triggerPointerDownPosRef: ge } = O;
    (y.useEffect(() => {
      if (D) {
        let ye = { x: 0, y: 0 };
        const Ce = (Qe) => {
            ye = {
              x: Math.abs(Math.round(Qe.pageX) - (ge.current?.x ?? 0)),
              y: Math.abs(Math.round(Qe.pageY) - (ge.current?.y ?? 0)),
            };
          },
          De = (Qe) => {
            (ye.x <= 10 && ye.y <= 10
              ? Qe.preventDefault()
              : D.contains(Qe.target) || W(!1),
              document.removeEventListener("pointermove", Ce),
              (ge.current = null));
          };
        return (
          ge.current !== null &&
            (document.addEventListener("pointermove", Ce),
            document.addEventListener("pointerup", De, {
              capture: !0,
              once: !0,
            })),
          () => {
            (document.removeEventListener("pointermove", Ce),
              document.removeEventListener("pointerup", De, { capture: !0 }));
          }
        );
      }
    }, [D, W, ge]),
      y.useEffect(() => {
        const ye = () => W(!1);
        return (
          window.addEventListener("blur", ye),
          window.addEventListener("resize", ye),
          () => {
            (window.removeEventListener("blur", ye),
              window.removeEventListener("resize", ye));
          }
        );
      }, [W]));
    const [T, Z] = Z1((ye) => {
        const Ce = J().filter((He) => !He.disabled),
          De = Ce.find((He) => He.ref.current === document.activeElement),
          Qe = $1(Ce, ye, De);
        Qe && setTimeout(() => Qe.ref.current.focus());
      }),
      ie = y.useCallback(
        (ye, Ce, De) => {
          const Qe = !ce.current && !De;
          ((O.value !== void 0 && O.value === Ce) || Qe) &&
            (oe(ye), Qe && (ce.current = !0));
        },
        [O.value],
      ),
      ae = y.useCallback(() => D?.focus(), [D]),
      me = y.useCallback(
        (ye, Ce, De) => {
          const Qe = !ce.current && !De;
          ((O.value !== void 0 && O.value === Ce) || Qe) && he(ye);
        },
        [O.value],
      ),
      Ne = i === "popper" ? Wh : D1,
      fe =
        Ne === Wh
          ? {
              side: h,
              sideOffset: g,
              align: p,
              alignOffset: v,
              arrowPadding: b,
              collisionBoundary: S,
              collisionPadding: E,
              sticky: j,
              hideWhenDetached: _,
              avoidCollisions: N,
            }
          : {};
    return d.jsx(A1, {
      scope: r,
      content: D,
      viewport: M,
      onViewportChange: Y,
      itemRefCallback: ie,
      selectedItem: F,
      onItemLeave: ae,
      itemTextRefCallback: me,
      focusSelectedItem: G,
      selectedItemText: ne,
      position: i,
      isPositioned: se,
      searchRef: T,
      children: d.jsx(Bm, {
        as: z4,
        allowPinchZoom: !0,
        children: d.jsx(Hm, {
          asChild: !0,
          trapped: O.open,
          onMountAutoFocus: (ye) => {
            ye.preventDefault();
          },
          onUnmountAutoFocus: Oe(l, (ye) => {
            (O.trigger?.focus({ preventScroll: !0 }), ye.preventDefault());
          }),
          children: d.jsx($o, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: c,
            onPointerDownOutside: f,
            onFocusOutside: (ye) => ye.preventDefault(),
            onDismiss: () => O.onOpenChange(!1),
            children: d.jsx(Ne, {
              role: "listbox",
              id: O.contentId,
              "data-state": O.open ? "open" : "closed",
              dir: O.dir,
              onContextMenu: (ye) => ye.preventDefault(),
              ...R,
              ...fe,
              onPlaced: () => ee(!0),
              ref: Q,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...R.style,
              },
              onKeyDown: Oe(R.onKeyDown, (ye) => {
                const Ce = ye.ctrlKey || ye.altKey || ye.metaKey;
                if (
                  (ye.key === "Tab" && ye.preventDefault(),
                  !Ce && ye.key.length === 1 && Z(ye.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(ye.key))
                ) {
                  let Qe = J()
                    .filter((He) => !He.disabled)
                    .map((He) => He.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(ye.key) &&
                      (Qe = Qe.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(ye.key))
                  ) {
                    const He = ye.target,
                      We = Qe.indexOf(He);
                    Qe = Qe.slice(We + 1);
                  }
                  (setTimeout(() => L(Qe)), ye.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
M1.displayName = L4;
var q4 = "SelectItemAlignedPosition",
  D1 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, onPlaced: i, ...l } = t,
      c = Dr(cs, r),
      f = kr(cs, r),
      [h, g] = y.useState(null),
      [p, v] = y.useState(null),
      b = rt(n, (Q) => v(Q)),
      S = Ou(r),
      E = y.useRef(!1),
      j = y.useRef(!0),
      {
        viewport: _,
        selectedItem: N,
        selectedItemText: R,
        focusSelectedItem: O,
      } = f,
      D = y.useCallback(() => {
        if (c.trigger && c.valueNode && h && p && _ && N && R) {
          const Q = c.trigger.getBoundingClientRect(),
            F = p.getBoundingClientRect(),
            oe = c.valueNode.getBoundingClientRect(),
            ne = R.getBoundingClientRect();
          if (c.dir !== "rtl") {
            const He = ne.left - F.left,
              We = oe.left - He,
              mt = Q.left - We,
              Lt = Q.width + mt,
              Fa = Math.max(Lt, F.width),
              Ia = window.innerWidth - Vn,
              Qt = gb(We, [Vn, Math.max(Vn, Ia - Fa)]);
            ((h.style.minWidth = Lt + "px"), (h.style.left = Qt + "px"));
          } else {
            const He = F.right - ne.right,
              We = window.innerWidth - oe.right - He,
              mt = window.innerWidth - Q.right - We,
              Lt = Q.width + mt,
              Fa = Math.max(Lt, F.width),
              Ia = window.innerWidth - Vn,
              Qt = gb(We, [Vn, Math.max(Vn, Ia - Fa)]);
            ((h.style.minWidth = Lt + "px"), (h.style.right = Qt + "px"));
          }
          const he = S(),
            J = window.innerHeight - Vn * 2,
            se = _.scrollHeight,
            ee = window.getComputedStyle(p),
            ce = parseInt(ee.borderTopWidth, 10),
            L = parseInt(ee.paddingTop, 10),
            G = parseInt(ee.borderBottomWidth, 10),
            W = parseInt(ee.paddingBottom, 10),
            ge = ce + L + se + W + G,
            T = Math.min(N.offsetHeight * 5, ge),
            Z = window.getComputedStyle(_),
            ie = parseInt(Z.paddingTop, 10),
            ae = parseInt(Z.paddingBottom, 10),
            me = Q.top + Q.height / 2 - Vn,
            Ne = J - me,
            fe = N.offsetHeight / 2,
            ye = N.offsetTop + fe,
            Ce = ce + L + ye,
            De = ge - Ce;
          if (Ce <= me) {
            const He = he.length > 0 && N === he[he.length - 1].ref.current;
            h.style.bottom = "0px";
            const We = p.clientHeight - _.offsetTop - _.offsetHeight,
              mt = Math.max(Ne, fe + (He ? ae : 0) + We + G),
              Lt = Ce + mt;
            h.style.height = Lt + "px";
          } else {
            const He = he.length > 0 && N === he[0].ref.current;
            h.style.top = "0px";
            const mt = Math.max(me, ce + _.offsetTop + (He ? ie : 0) + fe) + De;
            ((h.style.height = mt + "px"),
              (_.scrollTop = Ce - me + _.offsetTop));
          }
          ((h.style.margin = `${Vn}px 0`),
            (h.style.minHeight = T + "px"),
            (h.style.maxHeight = J + "px"),
            i?.(),
            requestAnimationFrame(() => (E.current = !0)));
        }
      }, [S, c.trigger, c.valueNode, h, p, _, N, R, c.dir, i]);
    Ct(() => D(), [D]);
    const [z, M] = y.useState();
    Ct(() => {
      p && M(window.getComputedStyle(p).zIndex);
    }, [p]);
    const Y = y.useCallback(
      (Q) => {
        Q && j.current === !0 && (D(), O?.(), (j.current = !1));
      },
      [D, O],
    );
    return d.jsx(V4, {
      scope: r,
      contentWrapper: h,
      shouldExpandOnScrollRef: E,
      onScrollButtonChange: Y,
      children: d.jsx("div", {
        ref: g,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: z,
        },
        children: d.jsx(qe.div, {
          ...l,
          ref: b,
          style: { boxSizing: "border-box", maxHeight: "100%", ...l.style },
        }),
      }),
    });
  });
D1.displayName = q4;
var U4 = "SelectPopperPosition",
  Wh = y.forwardRef((t, n) => {
    const {
        __scopeSelect: r,
        align: i = "start",
        collisionPadding: l = Vn,
        ...c
      } = t,
      f = Ru(r);
    return d.jsx(kw, {
      ...f,
      ...c,
      ref: n,
      align: i,
      collisionPadding: l,
      style: {
        boxSizing: "border-box",
        ...c.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Wh.displayName = U4;
var [V4, $m] = Ti(cs, {}),
  Jh = "SelectViewport",
  k1 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, nonce: i, ...l } = t,
      c = kr(Jh, r),
      f = $m(Jh, r),
      h = rt(n, c.onViewportChange),
      g = y.useRef(0);
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: i,
        }),
        d.jsx(Cu.Slot, {
          scope: r,
          children: d.jsx(qe.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...l,
            ref: h,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...l.style,
            },
            onScroll: Oe(l.onScroll, (p) => {
              const v = p.currentTarget,
                { contentWrapper: b, shouldExpandOnScrollRef: S } = f;
              if (S?.current && b) {
                const E = Math.abs(g.current - v.scrollTop);
                if (E > 0) {
                  const j = window.innerHeight - Vn * 2,
                    _ = parseFloat(b.style.minHeight),
                    N = parseFloat(b.style.height),
                    R = Math.max(_, N);
                  if (R < j) {
                    const O = R + E,
                      D = Math.min(j, O),
                      z = O - D;
                    ((b.style.height = D + "px"),
                      b.style.bottom === "0px" &&
                        ((v.scrollTop = z > 0 ? z : 0),
                        (b.style.justifyContent = "flex-end")));
                  }
                }
              }
              g.current = v.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
k1.displayName = Jh;
var L1 = "SelectGroup",
  [P4, H4] = Ti(L1),
  B4 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, ...i } = t,
      l = za();
    return d.jsx(P4, {
      scope: r,
      id: l,
      children: d.jsx(qe.div, {
        role: "group",
        "aria-labelledby": l,
        ...i,
        ref: n,
      }),
    });
  });
B4.displayName = L1;
var z1 = "SelectLabel",
  q1 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, ...i } = t,
      l = H4(z1, r);
    return d.jsx(qe.div, { id: l.id, ...i, ref: n });
  });
q1.displayName = z1;
var Kc = "SelectItem",
  [F4, U1] = Ti(Kc),
  V1 = y.forwardRef((t, n) => {
    const {
        __scopeSelect: r,
        value: i,
        disabled: l = !1,
        textValue: c,
        ...f
      } = t,
      h = Dr(Kc, r),
      g = kr(Kc, r),
      p = h.value === i,
      [v, b] = y.useState(c ?? ""),
      [S, E] = y.useState(!1),
      j = rt(n, (O) => g.itemRefCallback?.(O, i, l)),
      _ = za(),
      N = y.useRef("touch"),
      R = () => {
        l || (h.onValueChange(i), h.onOpenChange(!1));
      };
    if (i === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return d.jsx(F4, {
      scope: r,
      value: i,
      disabled: l,
      textId: _,
      isSelected: p,
      onItemTextChange: y.useCallback((O) => {
        b((D) => D || (O?.textContent ?? "").trim());
      }, []),
      children: d.jsx(Cu.ItemSlot, {
        scope: r,
        value: i,
        disabled: l,
        textValue: v,
        children: d.jsx(qe.div, {
          role: "option",
          "aria-labelledby": _,
          "data-highlighted": S ? "" : void 0,
          "aria-selected": p && S,
          "data-state": p ? "checked" : "unchecked",
          "aria-disabled": l || void 0,
          "data-disabled": l ? "" : void 0,
          tabIndex: l ? void 0 : -1,
          ...f,
          ref: j,
          onFocus: Oe(f.onFocus, () => E(!0)),
          onBlur: Oe(f.onBlur, () => E(!1)),
          onClick: Oe(f.onClick, () => {
            N.current !== "mouse" && R();
          }),
          onPointerUp: Oe(f.onPointerUp, () => {
            N.current === "mouse" && R();
          }),
          onPointerDown: Oe(f.onPointerDown, (O) => {
            N.current = O.pointerType;
          }),
          onPointerMove: Oe(f.onPointerMove, (O) => {
            ((N.current = O.pointerType),
              l
                ? g.onItemLeave?.()
                : N.current === "mouse" &&
                  O.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: Oe(f.onPointerLeave, (O) => {
            O.currentTarget === document.activeElement && g.onItemLeave?.();
          }),
          onKeyDown: Oe(f.onKeyDown, (O) => {
            (g.searchRef?.current !== "" && O.key === " ") ||
              (C4.includes(O.key) && R(), O.key === " " && O.preventDefault());
          }),
        }),
      }),
    });
  });
V1.displayName = Kc;
var Do = "SelectItemText",
  P1 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, className: i, style: l, ...c } = t,
      f = Dr(Do, r),
      h = kr(Do, r),
      g = U1(Do, r),
      p = M4(Do, r),
      [v, b] = y.useState(null),
      S = rt(
        n,
        (R) => b(R),
        g.onItemTextChange,
        (R) => h.itemTextRefCallback?.(R, g.value, g.disabled),
      ),
      E = v?.textContent,
      j = y.useMemo(
        () =>
          d.jsx(
            "option",
            { value: g.value, disabled: g.disabled, children: E },
            g.value,
          ),
        [g.disabled, g.value, E],
      ),
      { onNativeOptionAdd: _, onNativeOptionRemove: N } = p;
    return (
      Ct(() => (_(j), () => N(j)), [_, N, j]),
      d.jsxs(d.Fragment, {
        children: [
          d.jsx(qe.span, { id: g.textId, ...c, ref: S }),
          g.isSelected && f.valueNode && !f.valueNodeHasChildren
            ? wi.createPortal(c.children, f.valueNode)
            : null,
        ],
      })
    );
  });
P1.displayName = Do;
var H1 = "SelectItemIndicator",
  B1 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, ...i } = t;
    return U1(H1, r).isSelected
      ? d.jsx(qe.span, { "aria-hidden": !0, ...i, ref: n })
      : null;
  });
B1.displayName = H1;
var em = "SelectScrollUpButton",
  F1 = y.forwardRef((t, n) => {
    const r = kr(em, t.__scopeSelect),
      i = $m(em, t.__scopeSelect),
      [l, c] = y.useState(!1),
      f = rt(n, i.onScrollButtonChange);
    return (
      Ct(() => {
        if (r.viewport && r.isPositioned) {
          let h = function () {
            const p = g.scrollTop > 0;
            c(p);
          };
          const g = r.viewport;
          return (
            h(),
            g.addEventListener("scroll", h),
            () => g.removeEventListener("scroll", h)
          );
        }
      }, [r.viewport, r.isPositioned]),
      l
        ? d.jsx(G1, {
            ...t,
            ref: f,
            onAutoScroll: () => {
              const { viewport: h, selectedItem: g } = r;
              h && g && (h.scrollTop = h.scrollTop - g.offsetHeight);
            },
          })
        : null
    );
  });
F1.displayName = em;
var tm = "SelectScrollDownButton",
  I1 = y.forwardRef((t, n) => {
    const r = kr(tm, t.__scopeSelect),
      i = $m(tm, t.__scopeSelect),
      [l, c] = y.useState(!1),
      f = rt(n, i.onScrollButtonChange);
    return (
      Ct(() => {
        if (r.viewport && r.isPositioned) {
          let h = function () {
            const p = g.scrollHeight - g.clientHeight,
              v = Math.ceil(g.scrollTop) < p;
            c(v);
          };
          const g = r.viewport;
          return (
            h(),
            g.addEventListener("scroll", h),
            () => g.removeEventListener("scroll", h)
          );
        }
      }, [r.viewport, r.isPositioned]),
      l
        ? d.jsx(G1, {
            ...t,
            ref: f,
            onAutoScroll: () => {
              const { viewport: h, selectedItem: g } = r;
              h && g && (h.scrollTop = h.scrollTop + g.offsetHeight);
            },
          })
        : null
    );
  });
I1.displayName = tm;
var G1 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, onAutoScroll: i, ...l } = t,
      c = kr("SelectScrollButton", r),
      f = y.useRef(null),
      h = Ou(r),
      g = y.useCallback(() => {
        f.current !== null &&
          (window.clearInterval(f.current), (f.current = null));
      }, []);
    return (
      y.useEffect(() => () => g(), [g]),
      Ct(() => {
        h()
          .find((v) => v.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [h]),
      d.jsx(qe.div, {
        "aria-hidden": !0,
        ...l,
        ref: n,
        style: { flexShrink: 0, ...l.style },
        onPointerDown: Oe(l.onPointerDown, () => {
          f.current === null && (f.current = window.setInterval(i, 50));
        }),
        onPointerMove: Oe(l.onPointerMove, () => {
          (c.onItemLeave?.(),
            f.current === null && (f.current = window.setInterval(i, 50)));
        }),
        onPointerLeave: Oe(l.onPointerLeave, () => {
          g();
        }),
      })
    );
  }),
  I4 = "SelectSeparator",
  Y1 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, ...i } = t;
    return d.jsx(qe.div, { "aria-hidden": !0, ...i, ref: n });
  });
Y1.displayName = I4;
var nm = "SelectArrow",
  G4 = y.forwardRef((t, n) => {
    const { __scopeSelect: r, ...i } = t,
      l = Ru(r),
      c = Dr(nm, r),
      f = kr(nm, r);
    return c.open && f.position === "popper"
      ? d.jsx(Lw, { ...l, ...i, ref: n })
      : null;
  });
G4.displayName = nm;
var Y4 = "SelectBubbleInput",
  Q1 = y.forwardRef(({ __scopeSelect: t, value: n, ...r }, i) => {
    const l = y.useRef(null),
      c = rt(i, l),
      f = S1(n);
    return (
      y.useEffect(() => {
        const h = l.current;
        if (!h) return;
        const g = window.HTMLSelectElement.prototype,
          v = Object.getOwnPropertyDescriptor(g, "value").set;
        if (f !== n && v) {
          const b = new Event("change", { bubbles: !0 });
          (v.call(h, n), h.dispatchEvent(b));
        }
      }, [f, n]),
      d.jsx(qe.select, {
        ...r,
        style: { ...x0, ...r.style },
        ref: c,
        defaultValue: n,
      })
    );
  });
Q1.displayName = Y4;
function K1(t) {
  return t === "" || t === void 0;
}
function Z1(t) {
  const n = xn(t),
    r = y.useRef(""),
    i = y.useRef(0),
    l = y.useCallback(
      (f) => {
        const h = r.current + f;
        (n(h),
          (function g(p) {
            ((r.current = p),
              window.clearTimeout(i.current),
              p !== "" && (i.current = window.setTimeout(() => g(""), 1e3)));
          })(h));
      },
      [n],
    ),
    c = y.useCallback(() => {
      ((r.current = ""), window.clearTimeout(i.current));
    }, []);
  return (
    y.useEffect(() => () => window.clearTimeout(i.current), []),
    [r, l, c]
  );
}
function $1(t, n, r) {
  const l = n.length > 1 && Array.from(n).every((p) => p === n[0]) ? n[0] : n,
    c = r ? t.indexOf(r) : -1;
  let f = Q4(t, Math.max(c, 0));
  l.length === 1 && (f = f.filter((p) => p !== r));
  const g = f.find((p) =>
    p.textValue.toLowerCase().startsWith(l.toLowerCase()),
  );
  return g !== r ? g : void 0;
}
function Q4(t, n) {
  return t.map((r, i) => t[(n + i) % t.length]);
}
var K4 = _1,
  X1 = N1,
  Z4 = j1,
  $4 = C1,
  X4 = O1,
  W1 = R1,
  W4 = k1,
  J1 = q1,
  e_ = V1,
  J4 = P1,
  e3 = B1,
  t_ = F1,
  n_ = I1,
  a_ = Y1;
const ca = K4,
  ua = Z4,
  Fn = y.forwardRef(({ className: t, children: n, ...r }, i) =>
    d.jsxs(X1, {
      ref: i,
      className: we(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        t,
      ),
      ...r,
      children: [
        n,
        d.jsx($4, {
          asChild: !0,
          children: d.jsx(B0, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
Fn.displayName = X1.displayName;
const r_ = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(t_, {
    ref: r,
    className: we("flex cursor-default items-center justify-center py-1", t),
    ...n,
    children: d.jsx(wC, { className: "h-4 w-4" }),
  }),
);
r_.displayName = t_.displayName;
const s_ = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(n_, {
    ref: r,
    className: we("flex cursor-default items-center justify-center py-1", t),
    ...n,
    children: d.jsx(B0, { className: "h-4 w-4" }),
  }),
);
s_.displayName = n_.displayName;
const In = y.forwardRef(
  ({ className: t, children: n, position: r = "popper", ...i }, l) =>
    d.jsx(X4, {
      children: d.jsxs(W1, {
        ref: l,
        className: we(
          "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
          r === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          t,
        ),
        position: r,
        ...i,
        children: [
          d.jsx(r_, {}),
          d.jsx(W4, {
            className: we(
              "p-1",
              r === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: n,
          }),
          d.jsx(s_, {}),
        ],
      }),
    }),
);
In.displayName = W1.displayName;
const t3 = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(J1, {
    ref: r,
    className: we("px-2 py-1.5 text-sm font-semibold", t),
    ...n,
  }),
);
t3.displayName = J1.displayName;
const wt = y.forwardRef(({ className: t, children: n, ...r }, i) =>
  d.jsxs(e_, {
    ref: i,
    className: we(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t,
    ),
    ...r,
    children: [
      d.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: d.jsx(e3, { children: d.jsx(gC, { className: "h-4 w-4" }) }),
      }),
      d.jsx(J4, { children: n }),
    ],
  }),
);
wt.displayName = e_.displayName;
const n3 = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(a_, { ref: r, className: we("-mx-1 my-1 h-px bg-muted", t), ...n }),
);
n3.displayName = a_.displayName;
function a3() {
  const [t, n] = y.useState(""),
    [r, i] = y.useState("all"),
    [l, c] = y.useState("all"),
    [f, h] = y.useState("all"),
    { data: g } = nl({ query: { enabled: !0 } }),
    { data: p, isLoading: v } = KM(
      {
        search: t || void 0,
        kind: r === "all" ? void 0 : r,
        skillId: l === "all" ? void 0 : parseInt(l),
        format: f === "all" ? void 0 : f,
      },
      { query: { enabled: !0 } },
    );
  return d.jsxs("div", {
    className: "space-y-6 animate-in fade-in duration-500",
    children: [
      d.jsxs("div", {
        className:
          "flex flex-col md:flex-row md:items-center justify-between gap-4",
        children: [
          d.jsxs("div", {
            children: [
              d.jsx("h1", {
                className: "text-3xl font-serif font-bold text-foreground",
                children: "Browse Listings",
              }),
              d.jsx("p", {
                className: "text-muted-foreground mt-1",
                children: "Find students to learn from or teach.",
              }),
            ],
          }),
          d.jsx(bt, {
            asChild: !0,
            className: "shrink-0",
            children: d.jsx(Dt, {
              href: "/listings/new",
              children: "Post a Listing",
            }),
          }),
        ],
      }),
      d.jsxs("div", {
        className:
          "bg-card p-4 rounded-xl border border-border/50 shadow-sm space-y-4",
        children: [
          d.jsxs("div", {
            className: "flex flex-col md:flex-row gap-4",
            children: [
              d.jsxs("div", {
                className: "relative flex-1",
                children: [
                  d.jsx(Nm, {
                    className:
                      "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                  }),
                  d.jsx(hi, {
                    placeholder: "Search listings...",
                    className: "pl-9 bg-background",
                    value: t,
                    onChange: (b) => n(b.target.value),
                  }),
                ],
              }),
              d.jsx(w1, {
                value: r,
                onValueChange: (b) => i(b),
                className: "w-full md:w-auto",
                children: d.jsxs(Zm, {
                  className: "w-full h-10",
                  children: [
                    d.jsx(Da, {
                      value: "all",
                      className: "flex-1",
                      children: "All",
                    }),
                    d.jsx(Da, {
                      value: "offer",
                      className: "flex-1",
                      children: "Offers",
                    }),
                    d.jsx(Da, {
                      value: "request",
                      className: "flex-1",
                      children: "Requests",
                    }),
                  ],
                }),
              }),
            ],
          }),
          d.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-4",
            children: [
              d.jsxs(ca, {
                value: l,
                onValueChange: c,
                children: [
                  d.jsx(Fn, {
                    className: "w-full sm:w-[200px] bg-background",
                    children: d.jsx(ua, { placeholder: "All Skills" }),
                  }),
                  d.jsxs(In, {
                    children: [
                      d.jsx(wt, { value: "all", children: "All Skills" }),
                      g?.map((b) =>
                        d.jsx(
                          wt,
                          { value: b.id.toString(), children: b.name },
                          b.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              d.jsxs(ca, {
                value: f,
                onValueChange: (b) => h(b),
                children: [
                  d.jsx(Fn, {
                    className: "w-full sm:w-[200px] bg-background",
                    children: d.jsx(ua, { placeholder: "Format" }),
                  }),
                  d.jsxs(In, {
                    children: [
                      d.jsx(wt, { value: "all", children: "Any Format" }),
                      d.jsx(wt, { value: "in_person", children: "In Person" }),
                      d.jsx(wt, { value: "online", children: "Online" }),
                      d.jsx(wt, { value: "either", children: "Flexible" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      v
        ? d.jsx("div", {
            className:
              "flex items-center justify-center py-20 text-muted-foreground",
            children: d.jsx(La, { className: "h-8 w-8 animate-spin" }),
          })
        : p?.length === 0
          ? d.jsxs("div", {
              className:
                "text-center py-20 bg-card rounded-xl border border-dashed",
              children: [
                d.jsx("p", {
                  className: "text-lg text-muted-foreground",
                  children: "No listings found matching your criteria.",
                }),
                d.jsx(bt, {
                  variant: "link",
                  onClick: () => {
                    (n(""), i("all"), c("all"), h("all"));
                  },
                  className: "mt-2 text-primary",
                  children: "Clear filters",
                }),
              ],
            })
          : d.jsx("div", {
              className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
              children: p?.map((b) =>
                d.jsx(
                  Dt,
                  {
                    href: `/listings/${b.id}`,
                    children: d.jsxs(It, {
                      className:
                        "h-full flex flex-col hover:border-primary/50 transition-colors cursor-pointer group shadow-sm hover:shadow-md",
                      children: [
                        d.jsxs(Mn, {
                          className: "pb-3",
                          children: [
                            d.jsxs("div", {
                              className:
                                "flex justify-between items-start mb-2",
                              children: [
                                d.jsx(Bn, {
                                  variant:
                                    b.kind === "offer"
                                      ? "default"
                                      : "secondary",
                                  className:
                                    b.kind === "offer"
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-secondary text-secondary-foreground",
                                  children:
                                    b.kind === "offer"
                                      ? "Offering to teach"
                                      : "Wants to learn",
                                }),
                                d.jsxs("span", {
                                  className: "text-xs text-muted-foreground",
                                  children: [Eu(new Date(b.createdAt)), " ago"],
                                }),
                              ],
                            }),
                            d.jsx(Dn, {
                              className:
                                "text-xl group-hover:text-primary transition-colors line-clamp-2",
                              children: b.title,
                            }),
                            d.jsxs("div", {
                              className: "flex items-center gap-2 mt-2",
                              children: [
                                d.jsx(Bn, {
                                  variant: "outline",
                                  className: "font-mono text-xs",
                                  children: b.skill.name,
                                }),
                                d.jsx(Bn, {
                                  variant: "outline",
                                  className: "text-xs capitalize",
                                  children: b.level,
                                }),
                              ],
                            }),
                          ],
                        }),
                        d.jsx(Gt, {
                          className: "flex-1",
                          children: d.jsx("p", {
                            className:
                              "text-sm text-muted-foreground line-clamp-3",
                            children: b.description,
                          }),
                        }),
                        d.jsxs(Go, {
                          className:
                            "pt-4 border-t border-border/50 flex items-center justify-between",
                          children: [
                            d.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                d.jsxs(Qn, {
                                  className: "h-8 w-8",
                                  children: [
                                    d.jsx(Kn, { src: b.student.avatarUrl }),
                                    d.jsx(Zn, { children: b.student.name[0] }),
                                  ],
                                }),
                                d.jsx("div", {
                                  className: "text-sm font-medium",
                                  children: b.student.name,
                                }),
                              ],
                            }),
                            d.jsxs("div", {
                              className:
                                "flex items-center text-muted-foreground text-xs",
                              children: [
                                b.format === "in_person" &&
                                  d.jsx(_r, { className: "h-3 w-3 mr-1" }),
                                b.format === "online" &&
                                  d.jsx(Sr, { className: "h-3 w-3 mr-1" }),
                                b.format === "either" &&
                                  d.jsxs("span", {
                                    className: "flex",
                                    children: [
                                      d.jsx(_r, {
                                        className: "h-3 w-3 mr-0.5",
                                      }),
                                      d.jsx(Sr, { className: "h-3 w-3 mr-1" }),
                                    ],
                                  }),
                                d.jsx("span", {
                                  className: "capitalize",
                                  children: b.format.replace("_", " "),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  b.id,
                ),
              ),
            }),
    ],
  });
}
function r3() {
  const [t, n] = y.useState(""),
    [r, i] = y.useState("all"),
    { data: l } = nl({ query: { enabled: !0 } }),
    { data: c, isLoading: f } = LM(
      { search: t || void 0, skill: r === "all" ? void 0 : r },
      { query: { enabled: !0 } },
    );
  return d.jsxs("div", {
    className: "space-y-6 animate-in fade-in duration-500",
    children: [
      d.jsx("div", {
        className:
          "flex flex-col md:flex-row md:items-center justify-between gap-4",
        children: d.jsxs("div", {
          children: [
            d.jsx("h1", {
              className: "text-3xl font-serif font-bold text-foreground",
              children: "Student Directory",
            }),
            d.jsx("p", {
              className: "text-muted-foreground mt-1",
              children: "Discover peers based on what they teach.",
            }),
          ],
        }),
      }),
      d.jsxs("div", {
        className:
          "bg-card p-4 rounded-xl border border-border/50 shadow-sm flex flex-col md:flex-row gap-4",
        children: [
          d.jsxs("div", {
            className: "relative flex-1",
            children: [
              d.jsx(Nm, {
                className:
                  "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
              }),
              d.jsx(hi, {
                placeholder: "Search by name, major, or bio...",
                className: "pl-9 bg-background",
                value: t,
                onChange: (h) => n(h.target.value),
              }),
            ],
          }),
          d.jsxs(ca, {
            value: r,
            onValueChange: i,
            children: [
              d.jsx(Fn, {
                className: "w-full md:w-[250px] bg-background",
                children: d.jsx(ua, { placeholder: "Teaches skill" }),
              }),
              d.jsxs(In, {
                children: [
                  d.jsx(wt, { value: "all", children: "Any Skill" }),
                  l?.map((h) =>
                    d.jsx(wt, { value: h.name, children: h.name }, h.id),
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
      f
        ? d.jsx("div", {
            className:
              "flex items-center justify-center py-20 text-muted-foreground",
            children: d.jsx(La, { className: "h-8 w-8 animate-spin" }),
          })
        : c?.length === 0
          ? d.jsx("div", {
              className:
                "text-center py-20 bg-card rounded-xl border border-dashed",
              children: d.jsx("p", {
                className: "text-lg text-muted-foreground",
                children: "No students found matching your criteria.",
              }),
            })
          : d.jsx("div", {
              className:
                "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
              children: c?.map((h) =>
                d.jsx(
                  Dt,
                  {
                    href: `/students/${h.id}`,
                    children: d.jsx(It, {
                      className:
                        "h-full hover:border-primary/50 transition-colors cursor-pointer group shadow-sm text-center",
                      children: d.jsxs(Gt, {
                        className: "pt-6 pb-4 px-4 flex flex-col items-center",
                        children: [
                          d.jsxs(Qn, {
                            className:
                              "h-24 w-24 border-4 border-background shadow-sm mb-4",
                            children: [
                              d.jsx(Kn, { src: h.avatarUrl }),
                              d.jsx(Zn, {
                                className: "text-2xl",
                                children: h.name[0],
                              }),
                            ],
                          }),
                          d.jsx("h3", {
                            className:
                              "font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1",
                            children: h.name,
                          }),
                          d.jsxs("p", {
                            className:
                              "text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1",
                            children: [
                              d.jsx(Ho, { className: "h-3 w-3" }),
                              h.major,
                            ],
                          }),
                          d.jsxs("div", {
                            className:
                              "flex gap-4 mt-4 text-sm text-muted-foreground",
                            children: [
                              d.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [
                                  d.jsx(Tm, {
                                    className:
                                      "h-4 w-4 fill-secondary text-secondary",
                                  }),
                                  d.jsx("span", {
                                    className: "font-medium text-foreground",
                                    children: h.rating.toFixed(1),
                                  }),
                                ],
                              }),
                              d.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [
                                  d.jsx(Em, {
                                    className: "h-4 w-4 text-primary",
                                  }),
                                  d.jsx("span", {
                                    className: "font-medium text-foreground",
                                    children: h.sessionsCompleted,
                                  }),
                                  d.jsx("span", { children: "sessions" }),
                                ],
                              }),
                            ],
                          }),
                          h.bio &&
                            d.jsxs("p", {
                              className:
                                "text-xs text-muted-foreground mt-4 line-clamp-2 px-2 text-left",
                              children: ['"', h.bio, '"'],
                            }),
                        ],
                      }),
                    }),
                  },
                  h.id,
                ),
              ),
            }),
    ],
  });
}
const Xm = ES,
  Wm = P2,
  s3 = NS,
  i_ = y.forwardRef(({ className: t, ...n }, r) =>
    d.jsx(bu, {
      ref: r,
      className: we(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        t,
      ),
      ...n,
    }),
  );
i_.displayName = bu.displayName;
const Au = y.forwardRef(({ className: t, children: n, ...r }, i) =>
  d.jsxs(s3, {
    children: [
      d.jsx(i_, {}),
      d.jsxs(wu, {
        ref: i,
        className: we(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          t,
        ),
        ...r,
        children: [
          n,
          d.jsxs(TS, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              d.jsx(jm, { className: "h-4 w-4" }),
              d.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
Au.displayName = wu.displayName;
const Mu = ({ className: t, ...n }) =>
  d.jsx("div", {
    className: we("flex flex-col space-y-1.5 text-center sm:text-left", t),
    ...n,
  });
Mu.displayName = "DialogHeader";
const Du = ({ className: t, ...n }) =>
  d.jsx("div", {
    className: we(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t,
    ),
    ...n,
  });
Du.displayName = "DialogFooter";
const ku = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(Su, {
    ref: r,
    className: we("text-lg font-semibold leading-none tracking-tight", t),
    ...n,
  }),
);
ku.displayName = Su.displayName;
const Lu = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(_u, {
    ref: r,
    className: we("text-sm text-muted-foreground", t),
    ...n,
  }),
);
Lu.displayName = _u.displayName;
const sl = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx("textarea", {
    className: we(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t,
    ),
    ref: r,
    ...n,
  }),
);
sl.displayName = "Textarea";
var i3 = "Label",
  o_ = y.forwardRef((t, n) =>
    d.jsx(tl.label, {
      ...t,
      ref: n,
      onMouseDown: (r) => {
        r.target.closest("button, input, select, textarea") ||
          (t.onMouseDown?.(r),
          !r.defaultPrevented && r.detail > 1 && r.preventDefault());
      },
    }),
  );
o_.displayName = i3;
var l_ = o_;
const o3 = Si(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  qa = y.forwardRef(({ className: t, ...n }, r) =>
    d.jsx(l_, { ref: r, className: we(o3(), t), ...n }),
  );
qa.displayName = l_.displayName;
function l3() {
  const { id: t } = su(),
    n = parseInt(t || "0", 10),
    { data: r } = Ni({ query: { enabled: !0 } }),
    { data: i, isLoading: l } = PM(n, { query: { enabled: !!n } }),
    { data: c } = nl({ query: { enabled: !0 } }),
    f = ZS(),
    h = bi(),
    { toast: g } = Zo(),
    [p, v] = y.useState(!1),
    [b, S] = y.useState(""),
    [E, j] = y.useState(""),
    [_, N] = y.useState(""),
    R = r?.id === n,
    O = () => {
      if (!b || !E) {
        g({ title: "Please select both skills", variant: "destructive" });
        return;
      }
      f.mutate(
        {
          data: {
            recipientId: n,
            offeredSkillId: parseInt(b),
            requestedSkillId: parseInt(E),
            message: _,
          },
        },
        {
          onSuccess: () => {
            (g({ title: "Exchange proposed successfully!" }),
              v(!1),
              h.invalidateQueries({ queryKey: Io() }),
              S(""),
              j(""),
              N(""));
          },
          onError: (M) => {
            g({
              title: "Failed to propose exchange",
              description: M.message,
              variant: "destructive",
            });
          },
        },
      );
    };
  if (l)
    return d.jsx("div", {
      className: "space-y-8 animate-in fade-in duration-500",
      children: d.jsxs("div", {
        className:
          "bg-card p-8 rounded-xl border border-border/50 shadow-sm flex flex-col md:flex-row gap-8 items-start md:items-center",
        children: [
          d.jsx(Mt, { className: "h-32 w-32 rounded-full" }),
          d.jsxs("div", {
            className: "space-y-4 flex-1 w-full",
            children: [
              d.jsx(Mt, { className: "h-10 w-1/3" }),
              d.jsx(Mt, { className: "h-4 w-1/4" }),
              d.jsx(Mt, { className: "h-20 w-full" }),
            ],
          }),
        ],
      }),
    });
  if (!i)
    return d.jsx("div", {
      className: "text-center py-20 bg-card rounded-xl border border-dashed",
      children: d.jsx("p", {
        className: "text-lg text-muted-foreground",
        children: "Student not found.",
      }),
    });
  const D = i.offers,
    z = i.requests;
  return d.jsxs("div", {
    className: "space-y-8 animate-in fade-in duration-500",
    children: [
      d.jsxs("div", {
        className:
          "bg-card p-6 md:p-8 rounded-xl border border-border/50 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center relative overflow-hidden",
        children: [
          d.jsx("div", {
            className: "absolute top-0 left-0 w-full h-32 bg-primary/10 -z-10",
          }),
          d.jsxs(Qn, {
            className:
              "h-24 w-24 md:h-32 md:w-32 border-4 border-background shadow-md",
            children: [
              d.jsx(Kn, { src: i.avatarUrl }),
              d.jsx(Zn, { className: "text-4xl", children: i.name[0] }),
            ],
          }),
          d.jsxs("div", {
            className: "flex-1 space-y-4",
            children: [
              d.jsxs("div", {
                className:
                  "flex flex-col md:flex-row md:items-start justify-between gap-4",
                children: [
                  d.jsxs("div", {
                    children: [
                      d.jsxs("h1", {
                        className:
                          "text-3xl font-serif font-bold text-foreground flex items-center gap-3",
                        children: [
                          i.name,
                          R &&
                            d.jsx(Bn, {
                              variant: "secondary",
                              className:
                                "bg-secondary/20 text-secondary-foreground text-xs font-sans align-middle",
                              children: "This is you",
                            }),
                        ],
                      }),
                      d.jsxs("div", {
                        className:
                          "flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground",
                        children: [
                          d.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [
                              d.jsx(Ho, { className: "h-4 w-4" }),
                              " ",
                              i.university,
                              " • ",
                              i.major,
                              " (Year ",
                              i.year,
                              ")",
                            ],
                          }),
                          d.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [
                              d.jsx(Tm, {
                                className:
                                  "h-4 w-4 fill-secondary text-secondary",
                              }),
                              " ",
                              i.rating.toFixed(1),
                              " rating",
                            ],
                          }),
                          d.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [
                              d.jsx(Em, { className: "h-4 w-4 text-primary" }),
                              " ",
                              i.sessionsCompleted,
                              " sessions",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  !R &&
                    d.jsxs(Xm, {
                      open: p,
                      onOpenChange: v,
                      children: [
                        d.jsx(Wm, {
                          asChild: !0,
                          children: d.jsxs(bt, {
                            className: "shrink-0 gap-2",
                            children: [
                              d.jsx(F0, { className: "h-4 w-4" }),
                              "Propose Exchange",
                            ],
                          }),
                        }),
                        d.jsxs(Au, {
                          className: "sm:max-w-[425px]",
                          children: [
                            d.jsxs(Mu, {
                              children: [
                                d.jsx(ku, { children: "Propose an Exchange" }),
                                d.jsxs(Lu, {
                                  children: [
                                    "Offer one of your skills in exchange for something ",
                                    i.name.split(" ")[0],
                                    " can teach you.",
                                  ],
                                }),
                              ],
                            }),
                            d.jsxs("div", {
                              className: "grid gap-4 py-4",
                              children: [
                                d.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    d.jsx(qa, {
                                      children: "What do you want to learn?",
                                    }),
                                    d.jsxs(ca, {
                                      value: E,
                                      onValueChange: j,
                                      children: [
                                        d.jsx(Fn, {
                                          children: d.jsx(ua, {
                                            placeholder: "Select a skill",
                                          }),
                                        }),
                                        d.jsxs(In, {
                                          children: [
                                            D.map((M) =>
                                              d.jsx(
                                                wt,
                                                {
                                                  value: M.skill.id.toString(),
                                                  children: M.skill.name,
                                                },
                                                M.skill.id,
                                              ),
                                            ),
                                            D.length === 0 &&
                                              d.jsx(wt, {
                                                value: "none",
                                                disabled: !0,
                                                children: "They have no offers",
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    d.jsx(qa, {
                                      children: "What can you teach them?",
                                    }),
                                    d.jsxs(ca, {
                                      value: b,
                                      onValueChange: S,
                                      children: [
                                        d.jsx(Fn, {
                                          children: d.jsx(ua, {
                                            placeholder: "Select a skill",
                                          }),
                                        }),
                                        d.jsx(In, {
                                          children: c?.map((M) =>
                                            d.jsx(
                                              wt,
                                              {
                                                value: M.id.toString(),
                                                children: M.name,
                                              },
                                              M.id,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    d.jsx(qa, { children: "Message" }),
                                    d.jsx(sl, {
                                      placeholder: `Hi ${i.name.split(" ")[0]}, I'd love to learn...`,
                                      value: _,
                                      onChange: (M) => N(M.target.value),
                                      rows: 3,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            d.jsxs(Du, {
                              children: [
                                d.jsx(bt, {
                                  variant: "outline",
                                  onClick: () => v(!1),
                                  children: "Cancel",
                                }),
                                d.jsxs(bt, {
                                  onClick: O,
                                  disabled: f.isPending,
                                  children: [
                                    f.isPending &&
                                      d.jsx(La, {
                                        className: "mr-2 h-4 w-4 animate-spin",
                                      }),
                                    "Send Proposal",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              i.bio &&
                d.jsx("div", {
                  className: "text-muted-foreground max-w-3xl",
                  children: i.bio,
                }),
            ],
          }),
        ],
      }),
      d.jsxs("div", {
        className: "grid md:grid-cols-2 gap-8",
        children: [
          d.jsxs("div", {
            className: "space-y-4",
            children: [
              d.jsx("h2", {
                className:
                  "text-xl font-serif font-bold text-foreground border-b border-border pb-2",
                children: "Skills they teach",
              }),
              D.length === 0
                ? d.jsx("div", {
                    className:
                      "text-sm text-muted-foreground p-4 bg-card rounded-lg border border-dashed",
                    children: "No offers posted yet.",
                  })
                : d.jsx("div", {
                    className: "grid gap-4",
                    children: D.map((M) =>
                      d.jsxs(
                        It,
                        {
                          className: "shadow-sm",
                          children: [
                            d.jsx(Mn, {
                              className: "pb-2",
                              children: d.jsxs("div", {
                                className: "flex justify-between items-start",
                                children: [
                                  d.jsx(Dn, {
                                    className: "text-lg",
                                    children: M.title,
                                  }),
                                  d.jsx(Bn, {
                                    variant: "outline",
                                    className: "font-mono text-xs shrink-0",
                                    children: M.skill.name,
                                  }),
                                ],
                              }),
                            }),
                            d.jsx(Gt, {
                              className: "pb-4",
                              children: d.jsx("p", {
                                className:
                                  "text-sm text-muted-foreground line-clamp-2",
                                children: M.description,
                              }),
                            }),
                            d.jsx(Go, {
                              className:
                                "pt-0 flex items-center justify-between text-xs text-muted-foreground",
                              children: d.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  d.jsx("span", {
                                    className:
                                      "capitalize px-2 py-1 bg-muted rounded-md",
                                    children: M.level,
                                  }),
                                  d.jsxs("span", {
                                    className: "flex items-center capitalize",
                                    children: [
                                      M.format === "in_person" &&
                                        d.jsx(_r, {
                                          className: "h-3 w-3 mr-1",
                                        }),
                                      M.format === "online" &&
                                        d.jsx(Sr, {
                                          className: "h-3 w-3 mr-1",
                                        }),
                                      M.format === "either" &&
                                        d.jsxs("span", {
                                          className: "flex",
                                          children: [
                                            d.jsx(_r, {
                                              className: "h-3 w-3 mr-0.5",
                                            }),
                                            d.jsx(Sr, {
                                              className: "h-3 w-3 mr-1",
                                            }),
                                          ],
                                        }),
                                      M.format.replace("_", " "),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        M.id,
                      ),
                    ),
                  }),
            ],
          }),
          d.jsxs("div", {
            className: "space-y-4",
            children: [
              d.jsx("h2", {
                className:
                  "text-xl font-serif font-bold text-foreground border-b border-border pb-2",
                children: "Skills they want to learn",
              }),
              z.length === 0
                ? d.jsx("div", {
                    className:
                      "text-sm text-muted-foreground p-4 bg-card rounded-lg border border-dashed",
                    children: "No requests posted yet.",
                  })
                : d.jsx("div", {
                    className: "grid gap-4",
                    children: z.map((M) =>
                      d.jsxs(
                        It,
                        {
                          className: "shadow-sm",
                          children: [
                            d.jsx(Mn, {
                              className: "pb-2",
                              children: d.jsxs("div", {
                                className: "flex justify-between items-start",
                                children: [
                                  d.jsx(Dn, {
                                    className: "text-lg",
                                    children: M.title,
                                  }),
                                  d.jsx(Bn, {
                                    variant: "outline",
                                    className: "font-mono text-xs shrink-0",
                                    children: M.skill.name,
                                  }),
                                ],
                              }),
                            }),
                            d.jsx(Gt, {
                              className: "pb-4",
                              children: d.jsx("p", {
                                className:
                                  "text-sm text-muted-foreground line-clamp-2",
                                children: M.description,
                              }),
                            }),
                            d.jsx(Go, {
                              className:
                                "pt-0 flex items-center justify-between text-xs text-muted-foreground",
                              children: d.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  d.jsx("span", {
                                    className:
                                      "capitalize px-2 py-1 bg-muted rounded-md",
                                    children: M.level,
                                  }),
                                  d.jsxs("span", {
                                    className: "flex items-center capitalize",
                                    children: [
                                      M.format === "in_person" &&
                                        d.jsx(_r, {
                                          className: "h-3 w-3 mr-1",
                                        }),
                                      M.format === "online" &&
                                        d.jsx(Sr, {
                                          className: "h-3 w-3 mr-1",
                                        }),
                                      M.format === "either" &&
                                        d.jsxs("span", {
                                          className: "flex",
                                          children: [
                                            d.jsx(_r, {
                                              className: "h-3 w-3 mr-0.5",
                                            }),
                                            d.jsx(Sr, {
                                              className: "h-3 w-3 mr-1",
                                            }),
                                          ],
                                        }),
                                      M.format.replace("_", " "),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        M.id,
                      ),
                    ),
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
var il = (t) => t.type === "checkbox",
  as = (t) => t instanceof Date,
  on = (t) => t == null;
const c_ = (t) => typeof t == "object";
var jt = (t) => !on(t) && !Array.isArray(t) && c_(t) && !as(t),
  u_ = (t) =>
    jt(t) && t.target ? (il(t.target) ? t.target.checked : t.target.value) : t,
  c3 = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
  d_ = (t, n) => t.has(c3(n)),
  u3 = (t) => {
    const n = t.constructor && t.constructor.prototype;
    return jt(n) && n.hasOwnProperty("isPrototypeOf");
  },
  Jm =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Et(t) {
  if (t instanceof Date) return new Date(t);
  const n = typeof FileList < "u" && t instanceof FileList;
  if (Jm && (t instanceof Blob || n)) return t;
  const r = Array.isArray(t);
  if (!r && !(jt(t) && u3(t))) return t;
  const i = r ? [] : Object.create(Object.getPrototypeOf(t));
  for (const l in t)
    Object.prototype.hasOwnProperty.call(t, l) && (i[l] = Et(t[l]));
  return i;
}
var zu = (t) => /^\w*$/.test(t),
  ht = (t) => t === void 0,
  ep = (t) => (Array.isArray(t) ? t.filter(Boolean) : []),
  tp = (t) => ep(t.replace(/["|']|\]/g, "").split(/\.|\[/)),
  ue = (t, n, r) => {
    if (!n || !jt(t)) return r;
    const i = (zu(n) ? [n] : tp(n)).reduce((l, c) => (on(l) ? l : l[c]), t);
    return ht(i) || i === t ? (ht(t[n]) ? r : t[n]) : i;
  },
  pn = (t) => typeof t == "boolean",
  en = (t) => typeof t == "function",
  nt = (t, n, r) => {
    let i = -1;
    const l = zu(n) ? [n] : tp(n),
      c = l.length,
      f = c - 1;
    for (; ++i < c; ) {
      const h = l[i];
      let g = r;
      if (i !== f) {
        const p = t[h];
        g = jt(p) || Array.isArray(p) ? p : isNaN(+l[i + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      ((t[h] = g), (t = t[h]));
    }
  };
const Zc = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Pn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Ma = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  np = je.createContext(null);
np.displayName = "HookFormControlContext";
const ap = () => je.useContext(np);
var f_ = (t, n, r, i = !0) => {
  const l = { defaultValues: n._defaultValues };
  for (const c in t)
    Object.defineProperty(l, c, {
      get: () => {
        const f = c;
        return (
          n._proxyFormState[f] !== Pn.all &&
            (n._proxyFormState[f] = !i || Pn.all),
          r && (r[f] = !0),
          t[f]
        );
      },
    });
  return l;
};
const rp = typeof window < "u" ? je.useLayoutEffect : je.useEffect;
function d3(t) {
  const n = ap(),
    { control: r = n, disabled: i, name: l, exact: c } = t || {},
    [f, h] = je.useState(r._formState),
    g = je.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  return (
    rp(
      () =>
        r._subscribe({
          name: l,
          formState: g.current,
          exact: c,
          callback: (p) => {
            !i && h({ ...r._formState, ...p });
          },
        }),
      [l, i, c],
    ),
    je.useEffect(() => {
      g.current.isValid && r._setValid(!0);
    }, [r]),
    je.useMemo(() => f_(f, r, g.current, !1), [f, r])
  );
}
var yn = (t) => typeof t == "string",
  am = (t, n, r, i, l) =>
    yn(t)
      ? (i && n.watch.add(t), ue(r, t, l))
      : Array.isArray(t)
        ? t.map((c) => (i && n.watch.add(c), ue(r, c)))
        : (i && (n.watchAll = !0), r),
  rm = (t) => on(t) || !c_(t);
function Hn(t, n, r = new WeakSet()) {
  if (rm(t) || rm(n)) return Object.is(t, n);
  if (as(t) && as(n)) return Object.is(t.getTime(), n.getTime());
  const i = Object.keys(t),
    l = Object.keys(n);
  if (i.length !== l.length) return !1;
  if (r.has(t) || r.has(n)) return !0;
  (r.add(t), r.add(n));
  for (const c of i) {
    const f = t[c];
    if (!l.includes(c)) return !1;
    if (c !== "ref") {
      const h = n[c];
      if (
        (as(f) && as(h)) ||
        (jt(f) && jt(h)) ||
        (Array.isArray(f) && Array.isArray(h))
          ? !Hn(f, h, r)
          : !Object.is(f, h)
      )
        return !1;
    }
  }
  return !0;
}
function f3(t) {
  const n = ap(),
    {
      control: r = n,
      name: i,
      defaultValue: l,
      disabled: c,
      exact: f,
      compute: h,
    } = t || {},
    g = je.useRef(l),
    p = je.useRef(h),
    v = je.useRef(void 0),
    b = je.useRef(r),
    S = je.useRef(i);
  p.current = h;
  const [E, j] = je.useState(() => {
      const z = r._getWatch(i, g.current);
      return p.current ? p.current(z) : z;
    }),
    _ = je.useCallback(
      (z) => {
        const M = am(i, r._names, z || r._formValues, !1, g.current);
        return p.current ? p.current(M) : M;
      },
      [r._formValues, r._names, i],
    ),
    N = je.useCallback(
      (z) => {
        if (!c) {
          const M = am(i, r._names, z || r._formValues, !1, g.current);
          if (p.current) {
            const Y = p.current(M);
            Hn(Y, v.current) || (j(Y), (v.current = Y));
          } else j(M);
        }
      },
      [r._formValues, r._names, c, i],
    );
  (rp(
    () => (
      (b.current !== r || !Hn(S.current, i)) &&
        ((b.current = r), (S.current = i), N()),
      r._subscribe({
        name: i,
        formState: { values: !0 },
        exact: f,
        callback: (z) => {
          N(z.values);
        },
      })
    ),
    [r, f, i, N],
  ),
    je.useEffect(() => r._removeUnmounted()));
  const R = b.current !== r,
    O = S.current,
    D = je.useMemo(() => {
      if (c) return null;
      const z = !R && !Hn(O, i);
      return R || z ? _() : null;
    }, [c, R, i, O, _]);
  return D !== null ? D : E;
}
function h3(t) {
  const n = ap(),
    {
      name: r,
      disabled: i,
      control: l = n,
      shouldUnregister: c,
      defaultValue: f,
      exact: h = !0,
    } = t,
    g = d_(l._names.array, r),
    p = je.useMemo(
      () => ue(l._formValues, r, ue(l._defaultValues, r, f)),
      [l, r, f],
    ),
    v = f3({ control: l, name: r, defaultValue: p, exact: h }),
    b = d3({ control: l, name: r, exact: h }),
    S = je.useRef(t),
    E = je.useRef(void 0),
    j = je.useRef(
      l.register(r, {
        ...t.rules,
        value: v,
        ...(pn(t.disabled) ? { disabled: t.disabled } : {}),
      }),
    );
  S.current = t;
  const _ = je.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!ue(b.errors, r) },
            isDirty: { enumerable: !0, get: () => !!ue(b.dirtyFields, r) },
            isTouched: { enumerable: !0, get: () => !!ue(b.touchedFields, r) },
            isValidating: {
              enumerable: !0,
              get: () => !!ue(b.validatingFields, r),
            },
            error: { enumerable: !0, get: () => ue(b.errors, r) },
          },
        ),
      [b, r],
    ),
    N = je.useCallback(
      (z) =>
        j.current.onChange({
          target: { value: u_(z), name: r },
          type: Zc.CHANGE,
        }),
      [r],
    ),
    R = je.useCallback(
      () =>
        j.current.onBlur({
          target: { value: ue(l._formValues, r), name: r },
          type: Zc.BLUR,
        }),
      [r, l._formValues],
    ),
    O = je.useCallback(
      (z) => {
        const M = ue(l._fields, r);
        M &&
          M._f &&
          z &&
          (M._f.ref = {
            focus: () => en(z.focus) && z.focus(),
            select: () => en(z.select) && z.select(),
            setCustomValidity: (Y) =>
              en(z.setCustomValidity) && z.setCustomValidity(Y),
            reportValidity: () => en(z.reportValidity) && z.reportValidity(),
          });
      },
      [l._fields, r],
    ),
    D = je.useMemo(
      () => ({
        name: r,
        value: v,
        ...(pn(i) || b.disabled ? { disabled: b.disabled || i } : {}),
        onChange: N,
        onBlur: R,
        ref: O,
      }),
      [r, i, b.disabled, N, R, O, v],
    );
  return (
    je.useEffect(() => {
      const z = l._options.shouldUnregister || c,
        M = E.current;
      (M && M !== r && !g && l.unregister(M),
        l.register(r, {
          ...S.current.rules,
          ...(pn(S.current.disabled) ? { disabled: S.current.disabled } : {}),
        }));
      const Y = (Q, F) => {
        const oe = ue(l._fields, Q);
        oe && oe._f && (oe._f.mount = F);
      };
      if ((Y(r, !0), z)) {
        const Q = Et(ue(l._options.defaultValues, r, S.current.defaultValue));
        (nt(l._defaultValues, r, Q),
          ht(ue(l._formValues, r)) && nt(l._formValues, r, Q));
      }
      return (
        !g && l.register(r),
        (E.current = r),
        () => {
          (g ? z && !l._state.action : z) ? l.unregister(r) : Y(r, !1);
        }
      );
    }, [r, l, g, c]),
    je.useEffect(() => {
      l._setDisabledField({ disabled: i, name: r });
    }, [i, r, l]),
    je.useMemo(() => ({ field: D, formState: b, fieldState: _ }), [D, b, _])
  );
}
const m3 = (t) => t.render(h3(t)),
  sp = je.createContext(null);
sp.displayName = "HookFormContext";
const p3 = () => je.useContext(sp),
  g3 = (t) => {
    const {
      children: n,
      watch: r,
      getValues: i,
      getFieldState: l,
      setError: c,
      clearErrors: f,
      setValue: h,
      trigger: g,
      formState: p,
      resetField: v,
      reset: b,
      handleSubmit: S,
      unregister: E,
      control: j,
      register: _,
      setFocus: N,
      subscribe: R,
    } = t;
    return je.createElement(
      sp.Provider,
      {
        value: je.useMemo(
          () => ({
            watch: r,
            getValues: i,
            getFieldState: l,
            setError: c,
            clearErrors: f,
            setValue: h,
            trigger: g,
            formState: p,
            resetField: v,
            reset: b,
            handleSubmit: S,
            unregister: E,
            control: j,
            register: _,
            setFocus: N,
            subscribe: R,
          }),
          [f, j, p, l, i, S, _, b, v, c, N, h, R, g, E, r],
        ),
      },
      je.createElement(np.Provider, { value: j }, n),
    );
  };
var h_ = (t, n, r, i, l) =>
    n
      ? {
          ...r[t],
          types: { ...(r[t] && r[t].types ? r[t].types : {}), [i]: l || !0 },
        }
      : {},
  zo = (t) => (Array.isArray(t) ? t : [t]),
  yb = () => {
    let t = [];
    return {
      get observers() {
        return t;
      },
      next: (l) => {
        for (const c of t) c.next && c.next(l);
      },
      subscribe: (l) => (
        t.push(l),
        {
          unsubscribe: () => {
            t = t.filter((c) => c !== l);
          },
        }
      ),
      unsubscribe: () => {
        t = [];
      },
    };
  };
function m_(t, n) {
  const r = {};
  for (const i in t)
    if (t.hasOwnProperty(i)) {
      const l = t[i],
        c = n[i];
      if (l && jt(l) && c) {
        const f = m_(l, c);
        jt(f) && (r[i] = f);
      } else t[i] && (r[i] = c);
    }
  return r;
}
var Wt = (t) => jt(t) && !Object.keys(t).length,
  ip = (t) => t.type === "file",
  $c = (t) => {
    if (!Jm) return !1;
    const n = t ? t.ownerDocument : 0;
    return (
      t instanceof
      (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement)
    );
  },
  p_ = (t) => t.type === "select-multiple",
  op = (t) => t.type === "radio",
  y3 = (t) => op(t) || il(t),
  Th = (t) => $c(t) && t.isConnected;
function v3(t, n) {
  const r = n.slice(0, -1).length;
  let i = 0;
  for (; i < r; ) t = ht(t) ? i++ : t[n[i++]];
  return t;
}
function x3(t) {
  for (const n in t) if (t.hasOwnProperty(n) && !ht(t[n])) return !1;
  return !0;
}
function Nt(t, n) {
  const r = Array.isArray(n) ? n : zu(n) ? [n] : tp(n),
    i = r.length === 1 ? t : v3(t, r),
    l = r.length - 1,
    c = r[l];
  return (
    i && delete i[c],
    l !== 0 &&
      ((jt(i) && Wt(i)) || (Array.isArray(i) && x3(i))) &&
      Nt(t, r.slice(0, -1)),
    t
  );
}
var b3 = (t) => {
  for (const n in t) if (en(t[n])) return !0;
  return !1;
};
function g_(t) {
  return Array.isArray(t) || (jt(t) && !b3(t));
}
function sm(t, n = {}) {
  for (const r in t) {
    const i = t[r];
    g_(i)
      ? ((n[r] = Array.isArray(i) ? [] : {}), sm(i, n[r]))
      : ht(i) || (n[r] = !0);
  }
  return n;
}
function ii(t, n, r) {
  r || (r = sm(n));
  for (const i in t) {
    const l = t[i];
    if (g_(l))
      ht(n) || rm(r[i])
        ? (r[i] = sm(l, Array.isArray(l) ? [] : {}))
        : ii(l, on(n) ? {} : n[i], r[i]);
    else {
      const c = n[i];
      r[i] = !Hn(l, c);
    }
  }
  return r;
}
const vb = { value: !1, isValid: !1 },
  xb = { value: !0, isValid: !0 };
var y_ = (t) => {
    if (Array.isArray(t)) {
      if (t.length > 1) {
        const n = t
          .filter((r) => r && r.checked && !r.disabled)
          .map((r) => r.value);
        return { value: n, isValid: !!n.length };
      }
      return t[0].checked && !t[0].disabled
        ? t[0].attributes && !ht(t[0].attributes.value)
          ? ht(t[0].value) || t[0].value === ""
            ? xb
            : { value: t[0].value, isValid: !0 }
          : xb
        : vb;
    }
    return vb;
  },
  v_ = (t, { valueAsNumber: n, valueAsDate: r, setValueAs: i }) =>
    ht(t)
      ? t
      : n
        ? t === ""
          ? NaN
          : t && +t
        : r && yn(t)
          ? new Date(t)
          : i
            ? i(t)
            : t;
const bb = { isValid: !1, value: null };
var x_ = (t) =>
  Array.isArray(t)
    ? t.reduce(
        (n, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : n,
        bb,
      )
    : bb;
function wb(t) {
  const n = t.ref;
  return ip(n)
    ? n.files
    : op(n)
      ? x_(t.refs).value
      : p_(n)
        ? [...n.selectedOptions].map(({ value: r }) => r)
        : il(n)
          ? y_(t.refs).value
          : v_(ht(n.value) ? t.ref.value : n.value, t);
}
var w3 = (t, n, r, i) => {
    const l = {};
    for (const c of t) {
      const f = ue(n, c);
      f && nt(l, c, f._f);
    }
    return {
      criteriaMode: r,
      names: [...t],
      fields: l,
      shouldUseNativeValidation: i,
    };
  },
  Xc = (t) => t instanceof RegExp,
  Mo = (t) =>
    ht(t)
      ? t
      : Xc(t)
        ? t.source
        : jt(t)
          ? Xc(t.value)
            ? t.value.source
            : t.value
          : t,
  Sb = (t) => ({
    isOnSubmit: !t || t === Pn.onSubmit,
    isOnBlur: t === Pn.onBlur,
    isOnChange: t === Pn.onChange,
    isOnAll: t === Pn.all,
    isOnTouch: t === Pn.onTouched,
  });
const _b = "AsyncFunction";
var S3 = (t) =>
    !!t &&
    !!t.validate &&
    !!(
      (en(t.validate) && t.validate.constructor.name === _b) ||
      (jt(t.validate) &&
        Object.values(t.validate).find((n) => n.constructor.name === _b))
    ),
  _3 = (t) =>
    t.mount &&
    (t.required ||
      t.min ||
      t.max ||
      t.maxLength ||
      t.minLength ||
      t.pattern ||
      t.validate),
  Eb = (t, n, r) =>
    !r &&
    (n.watchAll ||
      n.watch.has(t) ||
      [...n.watch].some(
        (i) => t.startsWith(i) && /^\.\w+/.test(t.slice(i.length)),
      ));
const qo = (t, n, r, i) => {
  for (const l of r || Object.keys(t)) {
    const c = ue(t, l);
    if (c) {
      const { _f: f, ...h } = c;
      if (f) {
        if (f.refs && f.refs[0] && n(f.refs[0], l) && !i) return !0;
        if (f.ref && n(f.ref, f.name) && !i) return !0;
        if (qo(h, n)) break;
      } else if (jt(h) && qo(h, n)) break;
    }
  }
};
function Nb(t, n, r) {
  const i = ue(t, r);
  if (i || zu(r)) return { error: i, name: r };
  const l = r.split(".");
  for (; l.length; ) {
    const c = l.join("."),
      f = ue(n, c),
      h = ue(t, c);
    if (f && !Array.isArray(f) && r !== c) return { name: r };
    if (h && h.type) return { name: c, error: h };
    if (h && h.root && h.root.type) return { name: `${c}.root`, error: h.root };
    l.pop();
  }
  return { name: r };
}
var E3 = (t, n, r, i) => {
    r(t);
    const { name: l, ...c } = t;
    return (
      Wt(c) ||
      Object.keys(c).length >= Object.keys(n).length ||
      Object.keys(c).find((f) => n[f] === (!i || Pn.all))
    );
  },
  N3 = (t, n, r) =>
    !t ||
    !n ||
    t === n ||
    zo(t).some((i) => i && (r ? i === n : i.startsWith(n) || n.startsWith(i))),
  T3 = (t, n, r, i, l) =>
    l.isOnAll
      ? !1
      : !r && l.isOnTouch
        ? !(n || t)
        : (r ? i.isOnBlur : l.isOnBlur)
          ? !t
          : (r ? i.isOnChange : l.isOnChange)
            ? t
            : !0,
  j3 = (t, n) => !ep(ue(t, n)).length && Nt(t, n),
  C3 = (t, n, r) => {
    const i = zo(ue(t, r));
    return (nt(i, "root", n[r]), nt(t, r, i), t);
  };
function Tb(t, n, r = "validate") {
  if (yn(t) || (Array.isArray(t) && t.every(yn)) || (pn(t) && !t))
    return { type: r, message: yn(t) ? t : "", ref: n };
}
var si = (t) => (jt(t) && !Xc(t) ? t : { value: t, message: "" }),
  jb = async (t, n, r, i, l, c) => {
    const {
        ref: f,
        refs: h,
        required: g,
        maxLength: p,
        minLength: v,
        min: b,
        max: S,
        pattern: E,
        validate: j,
        name: _,
        valueAsNumber: N,
        mount: R,
      } = t._f,
      O = ue(r, _);
    if (!R || n.has(_)) return {};
    const D = h ? h[0] : f,
      z = (J) => {
        l &&
          D.reportValidity &&
          (D.setCustomValidity(pn(J) ? "" : J || ""), D.reportValidity());
      },
      M = {},
      Y = op(f),
      Q = il(f),
      F = Y || Q,
      oe =
        ((N || ip(f)) && ht(f.value) && ht(O)) ||
        ($c(f) && f.value === "") ||
        O === "" ||
        (Array.isArray(O) && !O.length),
      ne = h_.bind(null, _, i, M),
      he = (J, se, ee, ce = Ma.maxLength, L = Ma.minLength) => {
        const G = J ? se : ee;
        M[_] = { type: J ? ce : L, message: G, ref: f, ...ne(J ? ce : L, G) };
      };
    if (
      c
        ? !Array.isArray(O) || !O.length
        : g &&
          ((!F && (oe || on(O))) ||
            (pn(O) && !O) ||
            (Q && !y_(h).isValid) ||
            (Y && !x_(h).isValid))
    ) {
      const { value: J, message: se } = yn(g)
        ? { value: !!g, message: g }
        : si(g);
      if (
        J &&
        ((M[_] = {
          type: Ma.required,
          message: se,
          ref: D,
          ...ne(Ma.required, se),
        }),
        !i)
      )
        return (z(se), M);
    }
    if (!oe && (!on(b) || !on(S))) {
      let J, se;
      const ee = si(S),
        ce = si(b);
      if (!on(O) && !isNaN(O)) {
        const L = f.valueAsNumber || (O && +O);
        (on(ee.value) || (J = L > ee.value),
          on(ce.value) || (se = L < ce.value));
      } else {
        const L = f.valueAsDate || new Date(O),
          G = (T) => new Date(new Date().toDateString() + " " + T),
          W = f.type == "time",
          ge = f.type == "week";
        (yn(ee.value) &&
          O &&
          (J = W
            ? G(O) > G(ee.value)
            : ge
              ? O > ee.value
              : L > new Date(ee.value)),
          yn(ce.value) &&
            O &&
            (se = W
              ? G(O) < G(ce.value)
              : ge
                ? O < ce.value
                : L < new Date(ce.value)));
      }
      if ((J || se) && (he(!!J, ee.message, ce.message, Ma.max, Ma.min), !i))
        return (z(M[_].message), M);
    }
    if ((p || v) && !oe && (yn(O) || (c && Array.isArray(O)))) {
      const J = si(p),
        se = si(v),
        ee = !on(J.value) && O.length > +J.value,
        ce = !on(se.value) && O.length < +se.value;
      if ((ee || ce) && (he(ee, J.message, se.message), !i))
        return (z(M[_].message), M);
    }
    if (E && !oe && yn(O)) {
      const { value: J, message: se } = si(E);
      if (
        Xc(J) &&
        !O.match(J) &&
        ((M[_] = {
          type: Ma.pattern,
          message: se,
          ref: f,
          ...ne(Ma.pattern, se),
        }),
        !i)
      )
        return (z(se), M);
    }
    if (j) {
      if (en(j)) {
        const J = await j(O, r),
          se = Tb(J, D);
        if (se && ((M[_] = { ...se, ...ne(Ma.validate, se.message) }), !i))
          return (z(se.message), M);
      } else if (jt(j)) {
        let J = {};
        for (const se in j) {
          if (!Wt(J) && !i) break;
          const ee = Tb(await j[se](O, r), D, se);
          ee &&
            ((J = { ...ee, ...ne(se, ee.message) }),
            z(ee.message),
            i && (M[_] = J));
        }
        if (!Wt(J) && ((M[_] = { ref: D, ...J }), !i)) return M;
      }
    }
    return (z(!0), M);
  };
const O3 = {
  mode: Pn.onSubmit,
  reValidateMode: Pn.onChange,
  shouldFocusError: !0,
};
function R3(t = {}) {
  let n = { ...O3, ...t },
    r = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: en(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
    },
    i = {},
    l =
      jt(n.defaultValues) || jt(n.values)
        ? Et(n.defaultValues || n.values) || {}
        : {},
    c = n.shouldUnregister ? {} : Et(l),
    f = { action: !1, mount: !1, watch: !1, keepIsValid: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    g,
    p = 0;
  const v = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    b = { ...v };
  let S = { ...b };
  const E = { array: yb(), state: yb() },
    j = n.criteriaMode === Pn.all,
    _ = (A) => (V) => {
      (clearTimeout(p), (p = setTimeout(A, V)));
    },
    N = async (A) => {
      if (!f.keepIsValid && !n.disabled && (b.isValid || S.isValid || A)) {
        let V;
        (n.resolver
          ? ((V = Wt((await F()).errors)), R())
          : (V = await ne(i, !0)),
          V !== r.isValid && E.state.next({ isValid: V }));
      }
    },
    R = (A, V) => {
      !n.disabled &&
        (b.isValidating ||
          b.validatingFields ||
          S.isValidating ||
          S.validatingFields) &&
        ((A || Array.from(h.mount)).forEach((I) => {
          I && (V ? nt(r.validatingFields, I, V) : Nt(r.validatingFields, I));
        }),
        E.state.next({
          validatingFields: r.validatingFields,
          isValidating: !Wt(r.validatingFields),
        }));
    },
    O = (A, V = [], I, de, le = !0, te = !0) => {
      if (de && I && !n.disabled) {
        if (((f.action = !0), te && Array.isArray(ue(i, A)))) {
          const ve = I(ue(i, A), de.argA, de.argB);
          le && nt(i, A, ve);
        }
        if (te && Array.isArray(ue(r.errors, A))) {
          const ve = I(ue(r.errors, A), de.argA, de.argB);
          (le && nt(r.errors, A, ve), j3(r.errors, A));
        }
        if (
          (b.touchedFields || S.touchedFields) &&
          te &&
          Array.isArray(ue(r.touchedFields, A))
        ) {
          const ve = I(ue(r.touchedFields, A), de.argA, de.argB);
          le && nt(r.touchedFields, A, ve);
        }
        ((b.dirtyFields || S.dirtyFields) && (r.dirtyFields = ii(l, c)),
          E.state.next({
            name: A,
            isDirty: J(A, V),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          }));
      } else nt(c, A, V);
    },
    D = (A, V) => {
      (nt(r.errors, A, V), E.state.next({ errors: r.errors }));
    },
    z = (A) => {
      ((r.errors = A), E.state.next({ errors: r.errors, isValid: !1 }));
    },
    M = (A, V, I, de) => {
      const le = ue(i, A);
      if (le) {
        const te = ue(c, A, ht(I) ? ue(l, A) : I);
        (ht(te) || (de && de.defaultChecked) || V
          ? nt(c, A, V ? te : wb(le._f))
          : ce(A, te),
          f.mount && !f.action && N());
      }
    },
    Y = (A, V, I, de, le) => {
      let te = !1,
        ve = !1;
      const Be = { name: A };
      if (!n.disabled) {
        if (!I || de) {
          (b.isDirty || S.isDirty) &&
            ((ve = r.isDirty),
            (r.isDirty = Be.isDirty = J()),
            (te = ve !== Be.isDirty));
          const ze = Hn(ue(l, A), V);
          ((ve = !!ue(r.dirtyFields, A)),
            ze ? Nt(r.dirtyFields, A) : nt(r.dirtyFields, A, !0),
            (Be.dirtyFields = r.dirtyFields),
            (te = te || ((b.dirtyFields || S.dirtyFields) && ve !== !ze)));
        }
        if (I) {
          const ze = ue(r.touchedFields, A);
          ze ||
            (nt(r.touchedFields, A, I),
            (Be.touchedFields = r.touchedFields),
            (te = te || ((b.touchedFields || S.touchedFields) && ze !== I)));
        }
        te && le && E.state.next(Be);
      }
      return te ? Be : {};
    },
    Q = (A, V, I, de) => {
      const le = ue(r.errors, A),
        te = (b.isValid || S.isValid) && pn(V) && r.isValid !== V;
      if (
        (n.delayError && I
          ? ((g = _(() => D(A, I))), g(n.delayError))
          : (clearTimeout(p),
            (g = null),
            I ? nt(r.errors, A, I) : Nt(r.errors, A)),
        (I ? !Hn(le, I) : le) || !Wt(de) || te)
      ) {
        const ve = {
          ...de,
          ...(te && pn(V) ? { isValid: V } : {}),
          errors: r.errors,
          name: A,
        };
        ((r = { ...r, ...ve }), E.state.next(ve));
      }
    },
    F = async (A) => (
      R(A, !0),
      await n.resolver(
        c,
        n.context,
        w3(A || h.mount, i, n.criteriaMode, n.shouldUseNativeValidation),
      )
    ),
    oe = async (A) => {
      const { errors: V } = await F(A);
      if ((R(A), A))
        for (const I of A) {
          const de = ue(V, I);
          de ? nt(r.errors, I, de) : Nt(r.errors, I);
        }
      else r.errors = V;
      return V;
    },
    ne = async (A, V, I = { valid: !0 }) => {
      for (const de in A) {
        const le = A[de];
        if (le) {
          const { _f: te, ...ve } = le;
          if (te) {
            const Be = h.array.has(te.name),
              ze = le._f && S3(le._f);
            ze && b.validatingFields && R([te.name], !0);
            const Pt = await jb(
              le,
              h.disabled,
              c,
              j,
              n.shouldUseNativeValidation && !V,
              Be,
            );
            if (
              (ze && b.validatingFields && R([te.name]),
              Pt[te.name] && ((I.valid = !1), V || t.shouldUseNativeValidation))
            )
              break;
            !V &&
              (ue(Pt, te.name)
                ? Be
                  ? C3(r.errors, Pt, te.name)
                  : nt(r.errors, te.name, Pt[te.name])
                : Nt(r.errors, te.name));
          }
          !Wt(ve) && (await ne(ve, V, I));
        }
      }
      return I.valid;
    },
    he = () => {
      for (const A of h.unMount) {
        const V = ue(i, A);
        V &&
          (V._f.refs ? V._f.refs.every((I) => !Th(I)) : !Th(V._f.ref)) &&
          Ce(A);
      }
      h.unMount = new Set();
    },
    J = (A, V) => !n.disabled && (A && V && nt(c, A, V), !Hn(Z(), l)),
    se = (A, V, I) =>
      am(A, h, { ...(f.mount ? c : ht(V) ? l : yn(A) ? { [A]: V } : V) }, I, V),
    ee = (A) =>
      ep(ue(f.mount ? c : l, A, n.shouldUnregister ? ue(l, A, []) : [])),
    ce = (A, V, I = {}) => {
      const de = ue(i, A);
      let le = V;
      if (de) {
        const te = de._f;
        te &&
          (!te.disabled && nt(c, A, v_(V, te)),
          (le = $c(te.ref) && on(V) ? "" : V),
          p_(te.ref)
            ? [...te.ref.options].forEach(
                (ve) => (ve.selected = le.includes(ve.value)),
              )
            : te.refs
              ? il(te.ref)
                ? te.refs.forEach((ve) => {
                    (!ve.defaultChecked || !ve.disabled) &&
                      (Array.isArray(le)
                        ? (ve.checked = !!le.find((Be) => Be === ve.value))
                        : (ve.checked = le === ve.value || !!le));
                  })
                : te.refs.forEach((ve) => (ve.checked = ve.value === le))
              : ip(te.ref)
                ? (te.ref.value = "")
                : ((te.ref.value = le),
                  te.ref.type || E.state.next({ name: A, values: Et(c) })));
      }
      ((I.shouldDirty || I.shouldTouch) &&
        Y(A, le, I.shouldTouch, I.shouldDirty, !0),
        I.shouldValidate && T(A));
    },
    L = (A, V, I) => {
      for (const de in V) {
        if (!V.hasOwnProperty(de)) return;
        const le = V[de],
          te = A + "." + de,
          ve = ue(i, te);
        (h.array.has(A) || jt(le) || (ve && !ve._f)) && !as(le)
          ? L(te, le, I)
          : ce(te, le, I);
      }
    },
    G = (A, V, I = {}) => {
      const de = ue(i, A),
        le = h.array.has(A),
        te = Et(V);
      (nt(c, A, te),
        le
          ? (E.array.next({ name: A, values: Et(c) }),
            (b.isDirty || b.dirtyFields || S.isDirty || S.dirtyFields) &&
              I.shouldDirty &&
              E.state.next({
                name: A,
                dirtyFields: ii(l, c),
                isDirty: J(A, te),
              }))
          : de && !de._f && !on(te)
            ? L(A, te, I)
            : ce(A, te, I),
        Eb(A, h)
          ? E.state.next({ ...r, name: A, values: Et(c) })
          : E.state.next({ name: f.mount ? A : void 0, values: Et(c) }));
    },
    W = async (A) => {
      f.mount = !0;
      const V = A.target;
      let I = V.name,
        de = !0;
      const le = ue(i, I),
        te = (ze) => {
          de =
            Number.isNaN(ze) ||
            (as(ze) && isNaN(ze.getTime())) ||
            Hn(ze, ue(c, I, ze));
        },
        ve = Sb(n.mode),
        Be = Sb(n.reValidateMode);
      if (le) {
        let ze, Pt;
        const ma = V.type ? wb(le._f) : u_(A),
          Xn = A.type === Zc.BLUR || A.type === Zc.FOCUS_OUT,
          ms =
            (!_3(le._f) && !n.resolver && !ue(r.errors, I) && !le._f.deps) ||
            T3(Xn, ue(r.touchedFields, I), r.isSubmitted, Be, ve),
          Ga = Eb(I, h, Xn);
        (nt(c, I, ma),
          Xn
            ? (!V || !V.readOnly) &&
              (le._f.onBlur && le._f.onBlur(A), g && g(0))
            : le._f.onChange && le._f.onChange(A));
        const Ln = Y(I, ma, Xn),
          ps = !Wt(Ln) || Ga;
        if ((!Xn && E.state.next({ name: I, type: A.type, values: Et(c) }), ms))
          return (
            (b.isValid || S.isValid) &&
              (n.mode === "onBlur" ? Xn && N() : Xn || N()),
            ps && E.state.next({ name: I, ...(Ga ? {} : Ln) })
          );
        if ((!Xn && Ga && E.state.next({ ...r }), n.resolver)) {
          const { errors: Ya } = await F([I]);
          if ((R([I]), te(ma), de)) {
            const Hu = Nb(r.errors, i, I),
              Ci = Nb(Ya, i, Hu.name || I);
            ((ze = Ci.error), (I = Ci.name), (Pt = Wt(Ya)));
          }
        } else
          (R([I], !0),
            (ze = (await jb(le, h.disabled, c, j, n.shouldUseNativeValidation))[
              I
            ]),
            R([I]),
            te(ma),
            de &&
              (ze
                ? (Pt = !1)
                : (b.isValid || S.isValid) && (Pt = await ne(i, !0))));
        de &&
          (le._f.deps &&
            (!Array.isArray(le._f.deps) || le._f.deps.length > 0) &&
            T(le._f.deps),
          Q(I, Pt, ze, Ln));
      }
    },
    ge = (A, V) => {
      if (ue(r.errors, V) && A.focus) return (A.focus(), 1);
    },
    T = async (A, V = {}) => {
      let I, de;
      const le = zo(A);
      if (n.resolver) {
        const te = await oe(ht(A) ? A : le);
        ((I = Wt(te)), (de = A ? !le.some((ve) => ue(te, ve)) : I));
      } else
        A
          ? ((de = (
              await Promise.all(
                le.map(async (te) => {
                  const ve = ue(i, te);
                  return await ne(ve && ve._f ? { [te]: ve } : ve);
                }),
              )
            ).every(Boolean)),
            !(!de && !r.isValid) && N())
          : (de = I = await ne(i));
      return (
        E.state.next({
          ...(!yn(A) || ((b.isValid || S.isValid) && I !== r.isValid)
            ? {}
            : { name: A }),
          ...(n.resolver || !A ? { isValid: I } : {}),
          errors: r.errors,
        }),
        V.shouldFocus && !de && qo(i, ge, A ? le : h.mount),
        de
      );
    },
    Z = (A, V) => {
      let I = { ...(f.mount ? c : l) };
      return (
        V && (I = m_(V.dirtyFields ? r.dirtyFields : r.touchedFields, I)),
        ht(A) ? I : yn(A) ? ue(I, A) : A.map((de) => ue(I, de))
      );
    },
    ie = (A, V) => ({
      invalid: !!ue((V || r).errors, A),
      isDirty: !!ue((V || r).dirtyFields, A),
      error: ue((V || r).errors, A),
      isValidating: !!ue(r.validatingFields, A),
      isTouched: !!ue((V || r).touchedFields, A),
    }),
    ae = (A) => {
      const V = A ? zo(A) : void 0;
      (V?.forEach((I) => Nt(r.errors, I)),
        V
          ? V.forEach((I) => {
              E.state.next({ name: I, errors: r.errors });
            })
          : E.state.next({ errors: {} }));
    },
    me = (A, V, I) => {
      const de = (ue(i, A, { _f: {} })._f || {}).ref,
        le = ue(r.errors, A) || {},
        { ref: te, message: ve, type: Be, ...ze } = le;
      (nt(r.errors, A, { ...ze, ...V, ref: de }),
        E.state.next({ name: A, errors: r.errors, isValid: !1 }),
        I && I.shouldFocus && de && de.focus && de.focus());
    },
    Ne = (A, V) =>
      en(A)
        ? E.state.subscribe({
            next: (I) => "values" in I && A(se(void 0, V), I),
          })
        : se(A, V, !0),
    fe = (A) =>
      E.state.subscribe({
        next: (V) => {
          N3(A.name, V.name, A.exact) &&
            E3(V, A.formState || b, Vu, A.reRenderRoot) &&
            A.callback({ values: { ...c }, ...r, ...V, defaultValues: l });
        },
      }).unsubscribe,
    ye = (A) => (
      (f.mount = !0),
      (S = { ...S, ...A.formState }),
      fe({ ...A, formState: { ...v, ...A.formState } })
    ),
    Ce = (A, V = {}) => {
      for (const I of A ? zo(A) : h.mount)
        (h.mount.delete(I),
          h.array.delete(I),
          V.keepValue || (Nt(i, I), Nt(c, I)),
          !V.keepError && Nt(r.errors, I),
          !V.keepDirty && Nt(r.dirtyFields, I),
          !V.keepTouched && Nt(r.touchedFields, I),
          !V.keepIsValidating && Nt(r.validatingFields, I),
          !n.shouldUnregister && !V.keepDefaultValue && Nt(l, I));
      (E.state.next({ values: Et(c) }),
        E.state.next({ ...r, ...(V.keepDirty ? { isDirty: J() } : {}) }),
        !V.keepIsValid && N());
    },
    De = ({ disabled: A, name: V }) => {
      if ((pn(A) && f.mount) || A || h.disabled.has(V)) {
        const le = h.disabled.has(V) !== !!A;
        (A ? h.disabled.add(V) : h.disabled.delete(V),
          le && f.mount && !f.action && N());
      }
    },
    Qe = (A, V = {}) => {
      let I = ue(i, A);
      const de = pn(V.disabled) || pn(n.disabled);
      return (
        nt(i, A, {
          ...(I || {}),
          _f: {
            ...(I && I._f ? I._f : { ref: { name: A } }),
            name: A,
            mount: !0,
            ...V,
          },
        }),
        h.mount.add(A),
        I
          ? De({ disabled: pn(V.disabled) ? V.disabled : n.disabled, name: A })
          : M(A, !0, V.value),
        {
          ...(de ? { disabled: V.disabled || n.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!V.required,
                min: Mo(V.min),
                max: Mo(V.max),
                minLength: Mo(V.minLength),
                maxLength: Mo(V.maxLength),
                pattern: Mo(V.pattern),
              }
            : {}),
          name: A,
          onChange: W,
          onBlur: W,
          ref: (le) => {
            if (le) {
              (Qe(A, V), (I = ue(i, A)));
              const te =
                  (ht(le.value) &&
                    le.querySelectorAll &&
                    le.querySelectorAll("input,select,textarea")[0]) ||
                  le,
                ve = y3(te),
                Be = I._f.refs || [];
              if (ve ? Be.find((ze) => ze === te) : te === I._f.ref) return;
              (nt(i, A, {
                _f: {
                  ...I._f,
                  ...(ve
                    ? {
                        refs: [
                          ...Be.filter(Th),
                          te,
                          ...(Array.isArray(ue(l, A)) ? [{}] : []),
                        ],
                        ref: { type: te.type, name: A },
                      }
                    : { ref: te }),
                },
              }),
                M(A, !1, void 0, te));
            } else
              ((I = ue(i, A, {})),
                I._f && (I._f.mount = !1),
                (n.shouldUnregister || V.shouldUnregister) &&
                  !(d_(h.array, A) && f.action) &&
                  h.unMount.add(A));
          },
        }
      );
    },
    He = () => n.shouldFocusError && qo(i, ge, h.mount),
    We = (A) => {
      pn(A) &&
        (E.state.next({ disabled: A }),
        qo(
          i,
          (V, I) => {
            const de = ue(i, I);
            de &&
              ((V.disabled = de._f.disabled || A),
              Array.isArray(de._f.refs) &&
                de._f.refs.forEach((le) => {
                  le.disabled = de._f.disabled || A;
                }));
          },
          0,
          !1,
        ));
    },
    mt = (A, V) => async (I) => {
      let de;
      I && (I.preventDefault && I.preventDefault(), I.persist && I.persist());
      let le = Et(c);
      if ((E.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: te, values: ve } = await F();
        (R(), (r.errors = te), (le = Et(ve)));
      } else await ne(i);
      if (h.disabled.size) for (const te of h.disabled) Nt(le, te);
      if ((Nt(r.errors, "root"), Wt(r.errors))) {
        E.state.next({ errors: {} });
        try {
          await A(le, I);
        } catch (te) {
          de = te;
        }
      } else (V && (await V({ ...r.errors }, I)), He(), setTimeout(He));
      if (
        (E.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Wt(r.errors) && !de,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        de)
      )
        throw de;
    },
    Lt = (A, V = {}) => {
      ue(i, A) &&
        (ht(V.defaultValue)
          ? G(A, Et(ue(l, A)))
          : (G(A, V.defaultValue), nt(l, A, Et(V.defaultValue))),
        V.keepTouched || Nt(r.touchedFields, A),
        V.keepDirty ||
          (Nt(r.dirtyFields, A),
          (r.isDirty = V.defaultValue ? J(A, Et(ue(l, A))) : J())),
        V.keepError || (Nt(r.errors, A), b.isValid && N()),
        E.state.next({ ...r }));
    },
    Fa = (A, V = {}) => {
      const I = A ? Et(A) : l,
        de = Et(I),
        le = Wt(A),
        te = le ? l : de;
      if ((V.keepDefaultValues || (l = I), !V.keepValues)) {
        if (V.keepDirtyValues) {
          const ve = new Set([...h.mount, ...Object.keys(ii(l, c))]);
          for (const Be of Array.from(ve)) {
            const ze = ue(r.dirtyFields, Be),
              Pt = ue(c, Be),
              ma = ue(te, Be);
            ze && !ht(Pt) ? nt(te, Be, Pt) : !ze && !ht(ma) && G(Be, ma);
          }
        } else {
          if (Jm && ht(A))
            for (const ve of h.mount) {
              const Be = ue(i, ve);
              if (Be && Be._f) {
                const ze = Array.isArray(Be._f.refs)
                  ? Be._f.refs[0]
                  : Be._f.ref;
                if ($c(ze)) {
                  const Pt = ze.closest("form");
                  if (Pt) {
                    Pt.reset();
                    break;
                  }
                }
              }
            }
          if (V.keepFieldsRef) for (const ve of h.mount) G(ve, ue(te, ve));
          else i = {};
        }
        ((c = n.shouldUnregister ? (V.keepDefaultValues ? Et(l) : {}) : Et(te)),
          E.array.next({ values: { ...te } }),
          E.state.next({ values: { ...te } }));
      }
      ((h = {
        mount: V.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (f.mount =
          !b.isValid ||
          !!V.keepIsValid ||
          !!V.keepDirtyValues ||
          (!n.shouldUnregister && !Wt(te))),
        (f.watch = !!n.shouldUnregister),
        (f.keepIsValid = !!V.keepIsValid),
        (f.action = !1),
        V.keepErrors || (r.errors = {}),
        E.state.next({
          submitCount: V.keepSubmitCount ? r.submitCount : 0,
          isDirty: le
            ? !1
            : V.keepDirty
              ? r.isDirty
              : !!(V.keepDefaultValues && !Hn(A, l)),
          isSubmitted: V.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: le
            ? {}
            : V.keepDirtyValues
              ? V.keepDefaultValues && c
                ? ii(l, c)
                : r.dirtyFields
              : V.keepDefaultValues && A
                ? ii(l, A)
                : V.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: V.keepTouched ? r.touchedFields : {},
          errors: V.keepErrors ? r.errors : {},
          isSubmitSuccessful: V.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: l,
        }));
    },
    Ia = (A, V) => Fa(en(A) ? A(c) : A, { ...n.resetOptions, ...V }),
    Qt = (A, V = {}) => {
      const I = ue(i, A),
        de = I && I._f;
      if (de) {
        const le = de.refs ? de.refs[0] : de.ref;
        le.focus &&
          setTimeout(() => {
            (le.focus(), V.shouldSelect && en(le.select) && le.select());
          });
      }
    },
    Vu = (A) => {
      r = { ...r, ...A };
    },
    ji = {
      control: {
        register: Qe,
        unregister: Ce,
        getFieldState: ie,
        handleSubmit: mt,
        setError: me,
        _subscribe: fe,
        _runSchema: F,
        _updateIsValidating: R,
        _focusError: He,
        _getWatch: se,
        _getDirty: J,
        _setValid: N,
        _setFieldArray: O,
        _setDisabledField: De,
        _setErrors: z,
        _getFieldArray: ee,
        _reset: Fa,
        _resetDefaultValues: () =>
          en(n.defaultValues) &&
          n.defaultValues().then((A) => {
            (Ia(A, n.resetOptions), E.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: he,
        _disableForm: We,
        _subjects: E,
        _proxyFormState: b,
        get _fields() {
          return i;
        },
        get _formValues() {
          return c;
        },
        get _state() {
          return f;
        },
        set _state(A) {
          f = A;
        },
        get _defaultValues() {
          return l;
        },
        get _names() {
          return h;
        },
        set _names(A) {
          h = A;
        },
        get _formState() {
          return r;
        },
        get _options() {
          return n;
        },
        set _options(A) {
          n = { ...n, ...A };
        },
      },
      subscribe: ye,
      trigger: T,
      register: Qe,
      handleSubmit: mt,
      watch: Ne,
      setValue: G,
      getValues: Z,
      reset: Ia,
      resetField: Lt,
      clearErrors: ae,
      unregister: Ce,
      setError: me,
      setFocus: Qt,
      getFieldState: ie,
    };
  return { ...ji, formControl: ji };
}
function A3(t = {}) {
  const n = je.useRef(void 0),
    r = je.useRef(void 0),
    [i, l] = je.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: en(t.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
      isReady: !1,
      defaultValues: en(t.defaultValues) ? void 0 : t.defaultValues,
    });
  if (!n.current)
    if (t.formControl)
      ((n.current = { ...t.formControl, formState: i }),
        t.defaultValues &&
          !en(t.defaultValues) &&
          t.formControl.reset(t.defaultValues, t.resetOptions));
    else {
      const { formControl: f, ...h } = R3(t);
      n.current = { ...h, formState: i };
    }
  const c = n.current.control;
  return (
    (c._options = t),
    rp(() => {
      const f = c._subscribe({
        formState: c._proxyFormState,
        callback: () => l({ ...c._formState }),
        reRenderRoot: !0,
      });
      return (
        l((h) => ({ ...h, isReady: !0 })),
        (c._formState.isReady = !0),
        f
      );
    }, [c]),
    je.useEffect(() => c._disableForm(t.disabled), [c, t.disabled]),
    je.useEffect(() => {
      (t.mode && (c._options.mode = t.mode),
        t.reValidateMode && (c._options.reValidateMode = t.reValidateMode));
    }, [c, t.mode, t.reValidateMode]),
    je.useEffect(() => {
      t.errors && (c._setErrors(t.errors), c._focusError());
    }, [c, t.errors]),
    je.useEffect(() => {
      t.shouldUnregister && c._subjects.state.next({ values: c._getWatch() });
    }, [c, t.shouldUnregister]),
    je.useEffect(() => {
      if (c._proxyFormState.isDirty) {
        const f = c._getDirty();
        f !== i.isDirty && c._subjects.state.next({ isDirty: f });
      }
    }, [c, i.isDirty]),
    je.useEffect(() => {
      var f;
      t.values && !Hn(t.values, r.current)
        ? (c._reset(t.values, {
            keepFieldsRef: !0,
            ...c._options.resetOptions,
          }),
          (!((f = c._options.resetOptions) === null || f === void 0) &&
            f.keepIsValid) ||
            c._setValid(),
          (r.current = t.values),
          l((h) => ({ ...h })))
        : c._resetDefaultValues();
    }, [c, t.values]),
    je.useEffect(() => {
      (c._state.mount || (c._setValid(), (c._state.mount = !0)),
        c._state.watch &&
          ((c._state.watch = !1), c._subjects.state.next({ ...c._formState })),
        c._removeUnmounted());
    }),
    (n.current.formState = je.useMemo(() => f_(i, c), [c, i])),
    n.current
  );
}
const Cb = (t, n, r) => {
    if (t && "reportValidity" in t) {
      const i = ue(r, n);
      (t.setCustomValidity((i && i.message) || ""), t.reportValidity());
    }
  },
  b_ = (t, n) => {
    for (const r in n.fields) {
      const i = n.fields[r];
      i && i.ref && "reportValidity" in i.ref
        ? Cb(i.ref, r, t)
        : i.refs && i.refs.forEach((l) => Cb(l, r, t));
    }
  },
  M3 = (t, n) => {
    n.shouldUseNativeValidation && b_(t, n);
    const r = {};
    for (const i in t) {
      const l = ue(n.fields, i),
        c = Object.assign(t[i] || {}, { ref: l && l.ref });
      if (D3(n.names || Object.keys(t), i)) {
        const f = Object.assign({}, ue(r, i));
        (nt(f, "root", c), nt(r, i, f));
      } else nt(r, i, c);
    }
    return r;
  },
  D3 = (t, n) => t.some((r) => r.startsWith(n + "."));
var k3 = function (t, n) {
    for (var r = {}; t.length; ) {
      var i = t[0],
        l = i.code,
        c = i.message,
        f = i.path.join(".");
      if (!r[f])
        if ("unionErrors" in i) {
          var h = i.unionErrors[0].errors[0];
          r[f] = { message: h.message, type: h.code };
        } else r[f] = { message: c, type: l };
      if (
        ("unionErrors" in i &&
          i.unionErrors.forEach(function (v) {
            return v.errors.forEach(function (b) {
              return t.push(b);
            });
          }),
        n)
      ) {
        var g = r[f].types,
          p = g && g[i.code];
        r[f] = h_(f, n, r, l, p ? [].concat(p, i.message) : i.message);
      }
      t.shift();
    }
    return r;
  },
  L3 = function (t, n, r) {
    return (
      r === void 0 && (r = {}),
      function (i, l, c) {
        try {
          return Promise.resolve(
            (function (f, h) {
              try {
                var g = Promise.resolve(
                  t[r.mode === "sync" ? "parse" : "parseAsync"](i, n),
                ).then(function (p) {
                  return (
                    c.shouldUseNativeValidation && b_({}, c),
                    { errors: {}, values: r.raw ? i : p }
                  );
                });
              } catch (p) {
                return h(p);
              }
              return g && g.then ? g.then(void 0, h) : g;
            })(0, function (f) {
              if (
                (function (h) {
                  return Array.isArray(h?.errors);
                })(f)
              )
                return {
                  values: {},
                  errors: M3(
                    k3(
                      f.errors,
                      !c.shouldUseNativeValidation && c.criteriaMode === "all",
                    ),
                    c,
                  ),
                };
              throw f;
            }),
          );
        } catch (f) {
          return Promise.reject(f);
        }
      }
    );
  },
  Xe;
(function (t) {
  t.assertEqual = (l) => {};
  function n(l) {}
  t.assertIs = n;
  function r(l) {
    throw new Error();
  }
  ((t.assertNever = r),
    (t.arrayToEnum = (l) => {
      const c = {};
      for (const f of l) c[f] = f;
      return c;
    }),
    (t.getValidEnumValues = (l) => {
      const c = t.objectKeys(l).filter((h) => typeof l[l[h]] != "number"),
        f = {};
      for (const h of c) f[h] = l[h];
      return t.objectValues(f);
    }),
    (t.objectValues = (l) =>
      t.objectKeys(l).map(function (c) {
        return l[c];
      })),
    (t.objectKeys =
      typeof Object.keys == "function"
        ? (l) => Object.keys(l)
        : (l) => {
            const c = [];
            for (const f in l)
              Object.prototype.hasOwnProperty.call(l, f) && c.push(f);
            return c;
          }),
    (t.find = (l, c) => {
      for (const f of l) if (c(f)) return f;
    }),
    (t.isInteger =
      typeof Number.isInteger == "function"
        ? (l) => Number.isInteger(l)
        : (l) =>
            typeof l == "number" && Number.isFinite(l) && Math.floor(l) === l));
  function i(l, c = " | ") {
    return l.map((f) => (typeof f == "string" ? `'${f}'` : f)).join(c);
  }
  ((t.joinValues = i),
    (t.jsonStringifyReplacer = (l, c) =>
      typeof c == "bigint" ? c.toString() : c));
})(Xe || (Xe = {}));
var Ob;
(function (t) {
  t.mergeShapes = (n, r) => ({ ...n, ...r });
})(Ob || (Ob = {}));
const _e = Xe.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  wr = (t) => {
    switch (typeof t) {
      case "undefined":
        return _e.undefined;
      case "string":
        return _e.string;
      case "number":
        return Number.isNaN(t) ? _e.nan : _e.number;
      case "boolean":
        return _e.boolean;
      case "function":
        return _e.function;
      case "bigint":
        return _e.bigint;
      case "symbol":
        return _e.symbol;
      case "object":
        return Array.isArray(t)
          ? _e.array
          : t === null
            ? _e.null
            : t.then &&
                typeof t.then == "function" &&
                t.catch &&
                typeof t.catch == "function"
              ? _e.promise
              : typeof Map < "u" && t instanceof Map
                ? _e.map
                : typeof Set < "u" && t instanceof Set
                  ? _e.set
                  : typeof Date < "u" && t instanceof Date
                    ? _e.date
                    : _e.object;
      default:
        return _e.unknown;
    }
  },
  re = Xe.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]);
class Pa extends Error {
  get errors() {
    return this.issues;
  }
  constructor(n) {
    (super(),
      (this.issues = []),
      (this.addIssue = (i) => {
        this.issues = [...this.issues, i];
      }),
      (this.addIssues = (i = []) => {
        this.issues = [...this.issues, ...i];
      }));
    const r = new.target.prototype;
    (Object.setPrototypeOf
      ? Object.setPrototypeOf(this, r)
      : (this.__proto__ = r),
      (this.name = "ZodError"),
      (this.issues = n));
  }
  format(n) {
    const r =
        n ||
        function (c) {
          return c.message;
        },
      i = { _errors: [] },
      l = (c) => {
        for (const f of c.issues)
          if (f.code === "invalid_union") f.unionErrors.map(l);
          else if (f.code === "invalid_return_type") l(f.returnTypeError);
          else if (f.code === "invalid_arguments") l(f.argumentsError);
          else if (f.path.length === 0) i._errors.push(r(f));
          else {
            let h = i,
              g = 0;
            for (; g < f.path.length; ) {
              const p = f.path[g];
              (g === f.path.length - 1
                ? ((h[p] = h[p] || { _errors: [] }), h[p]._errors.push(r(f)))
                : (h[p] = h[p] || { _errors: [] }),
                (h = h[p]),
                g++);
            }
          }
      };
    return (l(this), i);
  }
  static assert(n) {
    if (!(n instanceof Pa)) throw new Error(`Not a ZodError: ${n}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Xe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(n = (r) => r.message) {
    const r = {},
      i = [];
    for (const l of this.issues)
      if (l.path.length > 0) {
        const c = l.path[0];
        ((r[c] = r[c] || []), r[c].push(n(l)));
      } else i.push(n(l));
    return { formErrors: i, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Pa.create = (t) => new Pa(t);
const im = (t, n) => {
  let r;
  switch (t.code) {
    case re.invalid_type:
      t.received === _e.undefined
        ? (r = "Required")
        : (r = `Expected ${t.expected}, received ${t.received}`);
      break;
    case re.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Xe.jsonStringifyReplacer)}`;
      break;
    case re.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Xe.joinValues(t.keys, ", ")}`;
      break;
    case re.invalid_union:
      r = "Invalid input";
      break;
    case re.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Xe.joinValues(t.options)}`;
      break;
    case re.invalid_enum_value:
      r = `Invalid enum value. Expected ${Xe.joinValues(t.options)}, received '${t.received}'`;
      break;
    case re.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case re.invalid_return_type:
      r = "Invalid function return type";
      break;
    case re.invalid_date:
      r = "Invalid date";
      break;
    case re.invalid_string:
      typeof t.validation == "object"
        ? "includes" in t.validation
          ? ((r = `Invalid input: must include "${t.validation.includes}"`),
            typeof t.validation.position == "number" &&
              (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`))
          : "startsWith" in t.validation
            ? (r = `Invalid input: must start with "${t.validation.startsWith}"`)
            : "endsWith" in t.validation
              ? (r = `Invalid input: must end with "${t.validation.endsWith}"`)
              : Xe.assertNever(t.validation)
        : t.validation !== "regex"
          ? (r = `Invalid ${t.validation}`)
          : (r = "Invalid");
      break;
    case re.too_small:
      t.type === "array"
        ? (r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)`)
        : t.type === "string"
          ? (r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)`)
          : t.type === "number"
            ? (r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`)
            : t.type === "bigint"
              ? (r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`)
              : t.type === "date"
                ? (r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}`)
                : (r = "Invalid input");
      break;
    case re.too_big:
      t.type === "array"
        ? (r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)`)
        : t.type === "string"
          ? (r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)`)
          : t.type === "number"
            ? (r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`)
            : t.type === "bigint"
              ? (r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`)
              : t.type === "date"
                ? (r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}`)
                : (r = "Invalid input");
      break;
    case re.custom:
      r = "Invalid input";
      break;
    case re.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case re.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case re.not_finite:
      r = "Number must be finite";
      break;
    default:
      ((r = n.defaultError), Xe.assertNever(t));
  }
  return { message: r };
};
let z3 = im;
function q3() {
  return z3;
}
const U3 = (t) => {
  const { data: n, path: r, errorMaps: i, issueData: l } = t,
    c = [...r, ...(l.path || [])],
    f = { ...l, path: c };
  if (l.message !== void 0) return { ...l, path: c, message: l.message };
  let h = "";
  const g = i
    .filter((p) => !!p)
    .slice()
    .reverse();
  for (const p of g) h = p(f, { data: n, defaultError: h }).message;
  return { ...l, path: c, message: h };
};
function pe(t, n) {
  const r = q3(),
    i = U3({
      issueData: n,
      data: t.data,
      path: t.path,
      errorMaps: [
        t.common.contextualErrorMap,
        t.schemaErrorMap,
        r,
        r === im ? void 0 : im,
      ].filter((l) => !!l),
    });
  t.common.issues.push(i);
}
class bn {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(n, r) {
    const i = [];
    for (const l of r) {
      if (l.status === "aborted") return ke;
      (l.status === "dirty" && n.dirty(), i.push(l.value));
    }
    return { status: n.value, value: i };
  }
  static async mergeObjectAsync(n, r) {
    const i = [];
    for (const l of r) {
      const c = await l.key,
        f = await l.value;
      i.push({ key: c, value: f });
    }
    return bn.mergeObjectSync(n, i);
  }
  static mergeObjectSync(n, r) {
    const i = {};
    for (const l of r) {
      const { key: c, value: f } = l;
      if (c.status === "aborted" || f.status === "aborted") return ke;
      (c.status === "dirty" && n.dirty(),
        f.status === "dirty" && n.dirty(),
        c.value !== "__proto__" &&
          (typeof f.value < "u" || l.alwaysSet) &&
          (i[c.value] = f.value));
    }
    return { status: n.value, value: i };
  }
}
const ke = Object.freeze({ status: "aborted" }),
  ko = (t) => ({ status: "dirty", value: t }),
  kn = (t) => ({ status: "valid", value: t }),
  Rb = (t) => t.status === "aborted",
  Ab = (t) => t.status === "dirty",
  mi = (t) => t.status === "valid",
  Wc = (t) => typeof Promise < "u" && t instanceof Promise;
var Ee;
(function (t) {
  ((t.errToObj = (n) => (typeof n == "string" ? { message: n } : n || {})),
    (t.toString = (n) => (typeof n == "string" ? n : n?.message)));
})(Ee || (Ee = {}));
class Rr {
  constructor(n, r, i, l) {
    ((this._cachedPath = []),
      (this.parent = n),
      (this.data = r),
      (this._path = i),
      (this._key = l));
  }
  get path() {
    return (
      this._cachedPath.length ||
        (Array.isArray(this._key)
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Mb = (t, n) => {
  if (mi(n)) return { success: !0, data: n.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const r = new Pa(t.common.issues);
      return ((this._error = r), this._error);
    },
  };
};
function Ie(t) {
  if (!t) return {};
  const {
    errorMap: n,
    invalid_type_error: r,
    required_error: i,
    description: l,
  } = t;
  if (n && (r || i))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return n
    ? { errorMap: n, description: l }
    : {
        errorMap: (f, h) => {
          const { message: g } = t;
          return f.code === "invalid_enum_value"
            ? { message: g ?? h.defaultError }
            : typeof h.data > "u"
              ? { message: g ?? i ?? h.defaultError }
              : f.code !== "invalid_type"
                ? { message: h.defaultError }
                : { message: g ?? r ?? h.defaultError };
        },
        description: l,
      };
}
class Ze {
  get description() {
    return this._def.description;
  }
  _getType(n) {
    return wr(n.data);
  }
  _getOrReturnCtx(n, r) {
    return (
      r || {
        common: n.parent.common,
        data: n.data,
        parsedType: wr(n.data),
        schemaErrorMap: this._def.errorMap,
        path: n.path,
        parent: n.parent,
      }
    );
  }
  _processInputParams(n) {
    return {
      status: new bn(),
      ctx: {
        common: n.parent.common,
        data: n.data,
        parsedType: wr(n.data),
        schemaErrorMap: this._def.errorMap,
        path: n.path,
        parent: n.parent,
      },
    };
  }
  _parseSync(n) {
    const r = this._parse(n);
    if (Wc(r)) throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(n) {
    const r = this._parse(n);
    return Promise.resolve(r);
  }
  parse(n, r) {
    const i = this.safeParse(n, r);
    if (i.success) return i.data;
    throw i.error;
  }
  safeParse(n, r) {
    const i = {
        common: {
          issues: [],
          async: r?.async ?? !1,
          contextualErrorMap: r?.errorMap,
        },
        path: r?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: n,
        parsedType: wr(n),
      },
      l = this._parseSync({ data: n, path: i.path, parent: i });
    return Mb(i, l);
  }
  "~validate"(n) {
    const r = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: n,
      parsedType: wr(n),
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: n, path: [], parent: r });
        return mi(i) ? { value: i.value } : { issues: r.common.issues };
      } catch (i) {
        (i?.message?.toLowerCase()?.includes("encountered") &&
          (this["~standard"].async = !0),
          (r.common = { issues: [], async: !0 }));
      }
    return this._parseAsync({ data: n, path: [], parent: r }).then((i) =>
      mi(i) ? { value: i.value } : { issues: r.common.issues },
    );
  }
  async parseAsync(n, r) {
    const i = await this.safeParseAsync(n, r);
    if (i.success) return i.data;
    throw i.error;
  }
  async safeParseAsync(n, r) {
    const i = {
        common: { issues: [], contextualErrorMap: r?.errorMap, async: !0 },
        path: r?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: n,
        parsedType: wr(n),
      },
      l = this._parse({ data: n, path: i.path, parent: i }),
      c = await (Wc(l) ? l : Promise.resolve(l));
    return Mb(i, c);
  }
  refine(n, r) {
    const i = (l) =>
      typeof r == "string" || typeof r > "u"
        ? { message: r }
        : typeof r == "function"
          ? r(l)
          : r;
    return this._refinement((l, c) => {
      const f = n(l),
        h = () => c.addIssue({ code: re.custom, ...i(l) });
      return typeof Promise < "u" && f instanceof Promise
        ? f.then((g) => (g ? !0 : (h(), !1)))
        : f
          ? !0
          : (h(), !1);
    });
  }
  refinement(n, r) {
    return this._refinement((i, l) =>
      n(i) ? !0 : (l.addIssue(typeof r == "function" ? r(i, l) : r), !1),
    );
  }
  _refinement(n) {
    return new yi({
      schema: this,
      typeName: Le.ZodEffects,
      effect: { type: "refinement", refinement: n },
    });
  }
  superRefine(n) {
    return this._refinement(n);
  }
  constructor(n) {
    ((this.spa = this.safeParseAsync),
      (this._def = n),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (r) => this["~validate"](r),
      }));
  }
  optional() {
    return Nr.create(this, this._def);
  }
  nullable() {
    return vi.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return da.create(this);
  }
  promise() {
    return nu.create(this, this._def);
  }
  or(n) {
    return eu.create([this, n], this._def);
  }
  and(n) {
    return tu.create(this, n, this._def);
  }
  transform(n) {
    return new yi({
      ...Ie(this._def),
      schema: this,
      typeName: Le.ZodEffects,
      effect: { type: "transform", transform: n },
    });
  }
  default(n) {
    const r = typeof n == "function" ? n : () => n;
    return new lm({
      ...Ie(this._def),
      innerType: this,
      defaultValue: r,
      typeName: Le.ZodDefault,
    });
  }
  brand() {
    return new oL({ typeName: Le.ZodBranded, type: this, ...Ie(this._def) });
  }
  catch(n) {
    const r = typeof n == "function" ? n : () => n;
    return new cm({
      ...Ie(this._def),
      innerType: this,
      catchValue: r,
      typeName: Le.ZodCatch,
    });
  }
  describe(n) {
    const r = this.constructor;
    return new r({ ...this._def, description: n });
  }
  pipe(n) {
    return lp.create(this, n);
  }
  readonly() {
    return um.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const V3 = /^c[^\s-]{8,}$/i,
  P3 = /^[0-9a-z]+$/,
  H3 = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  B3 =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  F3 = /^[a-z0-9_-]{21}$/i,
  I3 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  G3 =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Y3 =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Q3 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let jh;
const K3 =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Z3 =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  $3 =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  X3 =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  W3 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  J3 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  w_ =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  eL = new RegExp(`^${w_}$`);
function S_(t) {
  let n = "[0-5]\\d";
  t.precision
    ? (n = `${n}\\.\\d{${t.precision}}`)
    : t.precision == null && (n = `${n}(\\.\\d+)?`);
  const r = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${n})${r}`;
}
function tL(t) {
  return new RegExp(`^${S_(t)}$`);
}
function nL(t) {
  let n = `${w_}T${S_(t)}`;
  const r = [];
  return (
    r.push(t.local ? "Z?" : "Z"),
    t.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (n = `${n}(${r.join("|")})`),
    new RegExp(`^${n}$`)
  );
}
function aL(t, n) {
  return !!(
    ((n === "v4" || !n) && K3.test(t)) ||
    ((n === "v6" || !n) && $3.test(t))
  );
}
function rL(t, n) {
  if (!I3.test(t)) return !1;
  try {
    const [r] = t.split(".");
    if (!r) return !1;
    const i = r
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(r.length + ((4 - (r.length % 4)) % 4), "="),
      l = JSON.parse(atob(i));
    return !(
      typeof l != "object" ||
      l === null ||
      ("typ" in l && l?.typ !== "JWT") ||
      !l.alg ||
      (n && l.alg !== n)
    );
  } catch {
    return !1;
  }
}
function sL(t, n) {
  return !!(
    ((n === "v4" || !n) && Z3.test(t)) ||
    ((n === "v6" || !n) && X3.test(t))
  );
}
class ka extends Ze {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = String(n.data)),
      this._getType(n) !== _e.string)
    ) {
      const c = this._getOrReturnCtx(n);
      return (
        pe(c, {
          code: re.invalid_type,
          expected: _e.string,
          received: c.parsedType,
        }),
        ke
      );
    }
    const i = new bn();
    let l;
    for (const c of this._def.checks)
      if (c.kind === "min")
        n.data.length < c.value &&
          ((l = this._getOrReturnCtx(n, l)),
          pe(l, {
            code: re.too_small,
            minimum: c.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "max")
        n.data.length > c.value &&
          ((l = this._getOrReturnCtx(n, l)),
          pe(l, {
            code: re.too_big,
            maximum: c.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "length") {
        const f = n.data.length > c.value,
          h = n.data.length < c.value;
        (f || h) &&
          ((l = this._getOrReturnCtx(n, l)),
          f
            ? pe(l, {
                code: re.too_big,
                maximum: c.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: c.message,
              })
            : h &&
              pe(l, {
                code: re.too_small,
                minimum: c.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: c.message,
              }),
          i.dirty());
      } else if (c.kind === "email")
        Y3.test(n.data) ||
          ((l = this._getOrReturnCtx(n, l)),
          pe(l, {
            validation: "email",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "emoji")
        (jh || (jh = new RegExp(Q3, "u")),
          jh.test(n.data) ||
            ((l = this._getOrReturnCtx(n, l)),
            pe(l, {
              validation: "emoji",
              code: re.invalid_string,
              message: c.message,
            }),
            i.dirty()));
      else if (c.kind === "uuid")
        B3.test(n.data) ||
          ((l = this._getOrReturnCtx(n, l)),
          pe(l, {
            validation: "uuid",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "nanoid")
        F3.test(n.data) ||
          ((l = this._getOrReturnCtx(n, l)),
          pe(l, {
            validation: "nanoid",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "cuid")
        V3.test(n.data) ||
          ((l = this._getOrReturnCtx(n, l)),
          pe(l, {
            validation: "cuid",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "cuid2")
        P3.test(n.data) ||
          ((l = this._getOrReturnCtx(n, l)),
          pe(l, {
            validation: "cuid2",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "ulid")
        H3.test(n.data) ||
          ((l = this._getOrReturnCtx(n, l)),
          pe(l, {
            validation: "ulid",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "url")
        try {
          new URL(n.data);
        } catch {
          ((l = this._getOrReturnCtx(n, l)),
            pe(l, {
              validation: "url",
              code: re.invalid_string,
              message: c.message,
            }),
            i.dirty());
        }
      else
        c.kind === "regex"
          ? ((c.regex.lastIndex = 0),
            c.regex.test(n.data) ||
              ((l = this._getOrReturnCtx(n, l)),
              pe(l, {
                validation: "regex",
                code: re.invalid_string,
                message: c.message,
              }),
              i.dirty()))
          : c.kind === "trim"
            ? (n.data = n.data.trim())
            : c.kind === "includes"
              ? n.data.includes(c.value, c.position) ||
                ((l = this._getOrReturnCtx(n, l)),
                pe(l, {
                  code: re.invalid_string,
                  validation: { includes: c.value, position: c.position },
                  message: c.message,
                }),
                i.dirty())
              : c.kind === "toLowerCase"
                ? (n.data = n.data.toLowerCase())
                : c.kind === "toUpperCase"
                  ? (n.data = n.data.toUpperCase())
                  : c.kind === "startsWith"
                    ? n.data.startsWith(c.value) ||
                      ((l = this._getOrReturnCtx(n, l)),
                      pe(l, {
                        code: re.invalid_string,
                        validation: { startsWith: c.value },
                        message: c.message,
                      }),
                      i.dirty())
                    : c.kind === "endsWith"
                      ? n.data.endsWith(c.value) ||
                        ((l = this._getOrReturnCtx(n, l)),
                        pe(l, {
                          code: re.invalid_string,
                          validation: { endsWith: c.value },
                          message: c.message,
                        }),
                        i.dirty())
                      : c.kind === "datetime"
                        ? nL(c).test(n.data) ||
                          ((l = this._getOrReturnCtx(n, l)),
                          pe(l, {
                            code: re.invalid_string,
                            validation: "datetime",
                            message: c.message,
                          }),
                          i.dirty())
                        : c.kind === "date"
                          ? eL.test(n.data) ||
                            ((l = this._getOrReturnCtx(n, l)),
                            pe(l, {
                              code: re.invalid_string,
                              validation: "date",
                              message: c.message,
                            }),
                            i.dirty())
                          : c.kind === "time"
                            ? tL(c).test(n.data) ||
                              ((l = this._getOrReturnCtx(n, l)),
                              pe(l, {
                                code: re.invalid_string,
                                validation: "time",
                                message: c.message,
                              }),
                              i.dirty())
                            : c.kind === "duration"
                              ? G3.test(n.data) ||
                                ((l = this._getOrReturnCtx(n, l)),
                                pe(l, {
                                  validation: "duration",
                                  code: re.invalid_string,
                                  message: c.message,
                                }),
                                i.dirty())
                              : c.kind === "ip"
                                ? aL(n.data, c.version) ||
                                  ((l = this._getOrReturnCtx(n, l)),
                                  pe(l, {
                                    validation: "ip",
                                    code: re.invalid_string,
                                    message: c.message,
                                  }),
                                  i.dirty())
                                : c.kind === "jwt"
                                  ? rL(n.data, c.alg) ||
                                    ((l = this._getOrReturnCtx(n, l)),
                                    pe(l, {
                                      validation: "jwt",
                                      code: re.invalid_string,
                                      message: c.message,
                                    }),
                                    i.dirty())
                                  : c.kind === "cidr"
                                    ? sL(n.data, c.version) ||
                                      ((l = this._getOrReturnCtx(n, l)),
                                      pe(l, {
                                        validation: "cidr",
                                        code: re.invalid_string,
                                        message: c.message,
                                      }),
                                      i.dirty())
                                    : c.kind === "base64"
                                      ? W3.test(n.data) ||
                                        ((l = this._getOrReturnCtx(n, l)),
                                        pe(l, {
                                          validation: "base64",
                                          code: re.invalid_string,
                                          message: c.message,
                                        }),
                                        i.dirty())
                                      : c.kind === "base64url"
                                        ? J3.test(n.data) ||
                                          ((l = this._getOrReturnCtx(n, l)),
                                          pe(l, {
                                            validation: "base64url",
                                            code: re.invalid_string,
                                            message: c.message,
                                          }),
                                          i.dirty())
                                        : Xe.assertNever(c);
    return { status: i.value, value: n.data };
  }
  _regex(n, r, i) {
    return this.refinement((l) => n.test(l), {
      validation: r,
      code: re.invalid_string,
      ...Ee.errToObj(i),
    });
  }
  _addCheck(n) {
    return new ka({ ...this._def, checks: [...this._def.checks, n] });
  }
  email(n) {
    return this._addCheck({ kind: "email", ...Ee.errToObj(n) });
  }
  url(n) {
    return this._addCheck({ kind: "url", ...Ee.errToObj(n) });
  }
  emoji(n) {
    return this._addCheck({ kind: "emoji", ...Ee.errToObj(n) });
  }
  uuid(n) {
    return this._addCheck({ kind: "uuid", ...Ee.errToObj(n) });
  }
  nanoid(n) {
    return this._addCheck({ kind: "nanoid", ...Ee.errToObj(n) });
  }
  cuid(n) {
    return this._addCheck({ kind: "cuid", ...Ee.errToObj(n) });
  }
  cuid2(n) {
    return this._addCheck({ kind: "cuid2", ...Ee.errToObj(n) });
  }
  ulid(n) {
    return this._addCheck({ kind: "ulid", ...Ee.errToObj(n) });
  }
  base64(n) {
    return this._addCheck({ kind: "base64", ...Ee.errToObj(n) });
  }
  base64url(n) {
    return this._addCheck({ kind: "base64url", ...Ee.errToObj(n) });
  }
  jwt(n) {
    return this._addCheck({ kind: "jwt", ...Ee.errToObj(n) });
  }
  ip(n) {
    return this._addCheck({ kind: "ip", ...Ee.errToObj(n) });
  }
  cidr(n) {
    return this._addCheck({ kind: "cidr", ...Ee.errToObj(n) });
  }
  datetime(n) {
    return typeof n == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: n,
        })
      : this._addCheck({
          kind: "datetime",
          precision: typeof n?.precision > "u" ? null : n?.precision,
          offset: n?.offset ?? !1,
          local: n?.local ?? !1,
          ...Ee.errToObj(n?.message),
        });
  }
  date(n) {
    return this._addCheck({ kind: "date", message: n });
  }
  time(n) {
    return typeof n == "string"
      ? this._addCheck({ kind: "time", precision: null, message: n })
      : this._addCheck({
          kind: "time",
          precision: typeof n?.precision > "u" ? null : n?.precision,
          ...Ee.errToObj(n?.message),
        });
  }
  duration(n) {
    return this._addCheck({ kind: "duration", ...Ee.errToObj(n) });
  }
  regex(n, r) {
    return this._addCheck({ kind: "regex", regex: n, ...Ee.errToObj(r) });
  }
  includes(n, r) {
    return this._addCheck({
      kind: "includes",
      value: n,
      position: r?.position,
      ...Ee.errToObj(r?.message),
    });
  }
  startsWith(n, r) {
    return this._addCheck({ kind: "startsWith", value: n, ...Ee.errToObj(r) });
  }
  endsWith(n, r) {
    return this._addCheck({ kind: "endsWith", value: n, ...Ee.errToObj(r) });
  }
  min(n, r) {
    return this._addCheck({ kind: "min", value: n, ...Ee.errToObj(r) });
  }
  max(n, r) {
    return this._addCheck({ kind: "max", value: n, ...Ee.errToObj(r) });
  }
  length(n, r) {
    return this._addCheck({ kind: "length", value: n, ...Ee.errToObj(r) });
  }
  nonempty(n) {
    return this.min(1, Ee.errToObj(n));
  }
  trim() {
    return new ka({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new ka({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new ka({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((n) => n.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((n) => n.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((n) => n.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((n) => n.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((n) => n.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((n) => n.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((n) => n.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((n) => n.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((n) => n.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((n) => n.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((n) => n.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((n) => n.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((n) => n.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((n) => n.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((n) => n.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((n) => n.kind === "base64url");
  }
  get minLength() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "min" && (n === null || r.value > n) && (n = r.value);
    return n;
  }
  get maxLength() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "max" && (n === null || r.value < n) && (n = r.value);
    return n;
  }
}
ka.create = (t) =>
  new ka({
    checks: [],
    typeName: Le.ZodString,
    coerce: t?.coerce ?? !1,
    ...Ie(t),
  });
function iL(t, n) {
  const r = (t.toString().split(".")[1] || "").length,
    i = (n.toString().split(".")[1] || "").length,
    l = r > i ? r : i,
    c = Number.parseInt(t.toFixed(l).replace(".", "")),
    f = Number.parseInt(n.toFixed(l).replace(".", ""));
  return (c % f) / 10 ** l;
}
class us extends Ze {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(n) {
    if (
      (this._def.coerce && (n.data = Number(n.data)),
      this._getType(n) !== _e.number)
    ) {
      const c = this._getOrReturnCtx(n);
      return (
        pe(c, {
          code: re.invalid_type,
          expected: _e.number,
          received: c.parsedType,
        }),
        ke
      );
    }
    let i;
    const l = new bn();
    for (const c of this._def.checks)
      c.kind === "int"
        ? Xe.isInteger(n.data) ||
          ((i = this._getOrReturnCtx(n, i)),
          pe(i, {
            code: re.invalid_type,
            expected: "integer",
            received: "float",
            message: c.message,
          }),
          l.dirty())
        : c.kind === "min"
          ? (c.inclusive ? n.data < c.value : n.data <= c.value) &&
            ((i = this._getOrReturnCtx(n, i)),
            pe(i, {
              code: re.too_small,
              minimum: c.value,
              type: "number",
              inclusive: c.inclusive,
              exact: !1,
              message: c.message,
            }),
            l.dirty())
          : c.kind === "max"
            ? (c.inclusive ? n.data > c.value : n.data >= c.value) &&
              ((i = this._getOrReturnCtx(n, i)),
              pe(i, {
                code: re.too_big,
                maximum: c.value,
                type: "number",
                inclusive: c.inclusive,
                exact: !1,
                message: c.message,
              }),
              l.dirty())
            : c.kind === "multipleOf"
              ? iL(n.data, c.value) !== 0 &&
                ((i = this._getOrReturnCtx(n, i)),
                pe(i, {
                  code: re.not_multiple_of,
                  multipleOf: c.value,
                  message: c.message,
                }),
                l.dirty())
              : c.kind === "finite"
                ? Number.isFinite(n.data) ||
                  ((i = this._getOrReturnCtx(n, i)),
                  pe(i, { code: re.not_finite, message: c.message }),
                  l.dirty())
                : Xe.assertNever(c);
    return { status: l.value, value: n.data };
  }
  gte(n, r) {
    return this.setLimit("min", n, !0, Ee.toString(r));
  }
  gt(n, r) {
    return this.setLimit("min", n, !1, Ee.toString(r));
  }
  lte(n, r) {
    return this.setLimit("max", n, !0, Ee.toString(r));
  }
  lt(n, r) {
    return this.setLimit("max", n, !1, Ee.toString(r));
  }
  setLimit(n, r, i, l) {
    return new us({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: n, value: r, inclusive: i, message: Ee.toString(l) },
      ],
    });
  }
  _addCheck(n) {
    return new us({ ...this._def, checks: [...this._def.checks, n] });
  }
  int(n) {
    return this._addCheck({ kind: "int", message: Ee.toString(n) });
  }
  positive(n) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Ee.toString(n),
    });
  }
  negative(n) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Ee.toString(n),
    });
  }
  nonpositive(n) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Ee.toString(n),
    });
  }
  nonnegative(n) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Ee.toString(n),
    });
  }
  multipleOf(n, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: n,
      message: Ee.toString(r),
    });
  }
  finite(n) {
    return this._addCheck({ kind: "finite", message: Ee.toString(n) });
  }
  safe(n) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Ee.toString(n),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Ee.toString(n),
    });
  }
  get minValue() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "min" && (n === null || r.value > n) && (n = r.value);
    return n;
  }
  get maxValue() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "max" && (n === null || r.value < n) && (n = r.value);
    return n;
  }
  get isInt() {
    return !!this._def.checks.find(
      (n) =>
        n.kind === "int" || (n.kind === "multipleOf" && Xe.isInteger(n.value)),
    );
  }
  get isFinite() {
    let n = null,
      r = null;
    for (const i of this._def.checks) {
      if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
        return !0;
      i.kind === "min"
        ? (r === null || i.value > r) && (r = i.value)
        : i.kind === "max" && (n === null || i.value < n) && (n = i.value);
    }
    return Number.isFinite(r) && Number.isFinite(n);
  }
}
us.create = (t) =>
  new us({
    checks: [],
    typeName: Le.ZodNumber,
    coerce: t?.coerce || !1,
    ...Ie(t),
  });
class ds extends Ze {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(n) {
    if (this._def.coerce)
      try {
        n.data = BigInt(n.data);
      } catch {
        return this._getInvalidInput(n);
      }
    if (this._getType(n) !== _e.bigint) return this._getInvalidInput(n);
    let i;
    const l = new bn();
    for (const c of this._def.checks)
      c.kind === "min"
        ? (c.inclusive ? n.data < c.value : n.data <= c.value) &&
          ((i = this._getOrReturnCtx(n, i)),
          pe(i, {
            code: re.too_small,
            type: "bigint",
            minimum: c.value,
            inclusive: c.inclusive,
            message: c.message,
          }),
          l.dirty())
        : c.kind === "max"
          ? (c.inclusive ? n.data > c.value : n.data >= c.value) &&
            ((i = this._getOrReturnCtx(n, i)),
            pe(i, {
              code: re.too_big,
              type: "bigint",
              maximum: c.value,
              inclusive: c.inclusive,
              message: c.message,
            }),
            l.dirty())
          : c.kind === "multipleOf"
            ? n.data % c.value !== BigInt(0) &&
              ((i = this._getOrReturnCtx(n, i)),
              pe(i, {
                code: re.not_multiple_of,
                multipleOf: c.value,
                message: c.message,
              }),
              l.dirty())
            : Xe.assertNever(c);
    return { status: l.value, value: n.data };
  }
  _getInvalidInput(n) {
    const r = this._getOrReturnCtx(n);
    return (
      pe(r, {
        code: re.invalid_type,
        expected: _e.bigint,
        received: r.parsedType,
      }),
      ke
    );
  }
  gte(n, r) {
    return this.setLimit("min", n, !0, Ee.toString(r));
  }
  gt(n, r) {
    return this.setLimit("min", n, !1, Ee.toString(r));
  }
  lte(n, r) {
    return this.setLimit("max", n, !0, Ee.toString(r));
  }
  lt(n, r) {
    return this.setLimit("max", n, !1, Ee.toString(r));
  }
  setLimit(n, r, i, l) {
    return new ds({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: n, value: r, inclusive: i, message: Ee.toString(l) },
      ],
    });
  }
  _addCheck(n) {
    return new ds({ ...this._def, checks: [...this._def.checks, n] });
  }
  positive(n) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Ee.toString(n),
    });
  }
  negative(n) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Ee.toString(n),
    });
  }
  nonpositive(n) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Ee.toString(n),
    });
  }
  nonnegative(n) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Ee.toString(n),
    });
  }
  multipleOf(n, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: n,
      message: Ee.toString(r),
    });
  }
  get minValue() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "min" && (n === null || r.value > n) && (n = r.value);
    return n;
  }
  get maxValue() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "max" && (n === null || r.value < n) && (n = r.value);
    return n;
  }
}
ds.create = (t) =>
  new ds({
    checks: [],
    typeName: Le.ZodBigInt,
    coerce: t?.coerce ?? !1,
    ...Ie(t),
  });
class Jc extends Ze {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = !!n.data), this._getType(n) !== _e.boolean)
    ) {
      const i = this._getOrReturnCtx(n);
      return (
        pe(i, {
          code: re.invalid_type,
          expected: _e.boolean,
          received: i.parsedType,
        }),
        ke
      );
    }
    return kn(n.data);
  }
}
Jc.create = (t) =>
  new Jc({ typeName: Le.ZodBoolean, coerce: t?.coerce || !1, ...Ie(t) });
class pi extends Ze {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = new Date(n.data)),
      this._getType(n) !== _e.date)
    ) {
      const c = this._getOrReturnCtx(n);
      return (
        pe(c, {
          code: re.invalid_type,
          expected: _e.date,
          received: c.parsedType,
        }),
        ke
      );
    }
    if (Number.isNaN(n.data.getTime())) {
      const c = this._getOrReturnCtx(n);
      return (pe(c, { code: re.invalid_date }), ke);
    }
    const i = new bn();
    let l;
    for (const c of this._def.checks)
      c.kind === "min"
        ? n.data.getTime() < c.value &&
          ((l = this._getOrReturnCtx(n, l)),
          pe(l, {
            code: re.too_small,
            message: c.message,
            inclusive: !0,
            exact: !1,
            minimum: c.value,
            type: "date",
          }),
          i.dirty())
        : c.kind === "max"
          ? n.data.getTime() > c.value &&
            ((l = this._getOrReturnCtx(n, l)),
            pe(l, {
              code: re.too_big,
              message: c.message,
              inclusive: !0,
              exact: !1,
              maximum: c.value,
              type: "date",
            }),
            i.dirty())
          : Xe.assertNever(c);
    return { status: i.value, value: new Date(n.data.getTime()) };
  }
  _addCheck(n) {
    return new pi({ ...this._def, checks: [...this._def.checks, n] });
  }
  min(n, r) {
    return this._addCheck({
      kind: "min",
      value: n.getTime(),
      message: Ee.toString(r),
    });
  }
  max(n, r) {
    return this._addCheck({
      kind: "max",
      value: n.getTime(),
      message: Ee.toString(r),
    });
  }
  get minDate() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "min" && (n === null || r.value > n) && (n = r.value);
    return n != null ? new Date(n) : null;
  }
  get maxDate() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "max" && (n === null || r.value < n) && (n = r.value);
    return n != null ? new Date(n) : null;
  }
}
pi.create = (t) =>
  new pi({
    checks: [],
    coerce: t?.coerce || !1,
    typeName: Le.ZodDate,
    ...Ie(t),
  });
class Db extends Ze {
  _parse(n) {
    if (this._getType(n) !== _e.symbol) {
      const i = this._getOrReturnCtx(n);
      return (
        pe(i, {
          code: re.invalid_type,
          expected: _e.symbol,
          received: i.parsedType,
        }),
        ke
      );
    }
    return kn(n.data);
  }
}
Db.create = (t) => new Db({ typeName: Le.ZodSymbol, ...Ie(t) });
class kb extends Ze {
  _parse(n) {
    if (this._getType(n) !== _e.undefined) {
      const i = this._getOrReturnCtx(n);
      return (
        pe(i, {
          code: re.invalid_type,
          expected: _e.undefined,
          received: i.parsedType,
        }),
        ke
      );
    }
    return kn(n.data);
  }
}
kb.create = (t) => new kb({ typeName: Le.ZodUndefined, ...Ie(t) });
class Lb extends Ze {
  _parse(n) {
    if (this._getType(n) !== _e.null) {
      const i = this._getOrReturnCtx(n);
      return (
        pe(i, {
          code: re.invalid_type,
          expected: _e.null,
          received: i.parsedType,
        }),
        ke
      );
    }
    return kn(n.data);
  }
}
Lb.create = (t) => new Lb({ typeName: Le.ZodNull, ...Ie(t) });
class zb extends Ze {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(n) {
    return kn(n.data);
  }
}
zb.create = (t) => new zb({ typeName: Le.ZodAny, ...Ie(t) });
class qb extends Ze {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(n) {
    return kn(n.data);
  }
}
qb.create = (t) => new qb({ typeName: Le.ZodUnknown, ...Ie(t) });
class Ar extends Ze {
  _parse(n) {
    const r = this._getOrReturnCtx(n);
    return (
      pe(r, {
        code: re.invalid_type,
        expected: _e.never,
        received: r.parsedType,
      }),
      ke
    );
  }
}
Ar.create = (t) => new Ar({ typeName: Le.ZodNever, ...Ie(t) });
class Ub extends Ze {
  _parse(n) {
    if (this._getType(n) !== _e.undefined) {
      const i = this._getOrReturnCtx(n);
      return (
        pe(i, {
          code: re.invalid_type,
          expected: _e.void,
          received: i.parsedType,
        }),
        ke
      );
    }
    return kn(n.data);
  }
}
Ub.create = (t) => new Ub({ typeName: Le.ZodVoid, ...Ie(t) });
class da extends Ze {
  _parse(n) {
    const { ctx: r, status: i } = this._processInputParams(n),
      l = this._def;
    if (r.parsedType !== _e.array)
      return (
        pe(r, {
          code: re.invalid_type,
          expected: _e.array,
          received: r.parsedType,
        }),
        ke
      );
    if (l.exactLength !== null) {
      const f = r.data.length > l.exactLength.value,
        h = r.data.length < l.exactLength.value;
      (f || h) &&
        (pe(r, {
          code: f ? re.too_big : re.too_small,
          minimum: h ? l.exactLength.value : void 0,
          maximum: f ? l.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: l.exactLength.message,
        }),
        i.dirty());
    }
    if (
      (l.minLength !== null &&
        r.data.length < l.minLength.value &&
        (pe(r, {
          code: re.too_small,
          minimum: l.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: l.minLength.message,
        }),
        i.dirty()),
      l.maxLength !== null &&
        r.data.length > l.maxLength.value &&
        (pe(r, {
          code: re.too_big,
          maximum: l.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: l.maxLength.message,
        }),
        i.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((f, h) => l.type._parseAsync(new Rr(r, f, r.path, h))),
      ).then((f) => bn.mergeArray(i, f));
    const c = [...r.data].map((f, h) =>
      l.type._parseSync(new Rr(r, f, r.path, h)),
    );
    return bn.mergeArray(i, c);
  }
  get element() {
    return this._def.type;
  }
  min(n, r) {
    return new da({
      ...this._def,
      minLength: { value: n, message: Ee.toString(r) },
    });
  }
  max(n, r) {
    return new da({
      ...this._def,
      maxLength: { value: n, message: Ee.toString(r) },
    });
  }
  length(n, r) {
    return new da({
      ...this._def,
      exactLength: { value: n, message: Ee.toString(r) },
    });
  }
  nonempty(n) {
    return this.min(1, n);
  }
}
da.create = (t, n) =>
  new da({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Le.ZodArray,
    ...Ie(n),
  });
function oi(t) {
  if (t instanceof Tt) {
    const n = {};
    for (const r in t.shape) {
      const i = t.shape[r];
      n[r] = Nr.create(oi(i));
    }
    return new Tt({ ...t._def, shape: () => n });
  } else
    return t instanceof da
      ? new da({ ...t._def, type: oi(t.element) })
      : t instanceof Nr
        ? Nr.create(oi(t.unwrap()))
        : t instanceof vi
          ? vi.create(oi(t.unwrap()))
          : t instanceof fs
            ? fs.create(t.items.map((n) => oi(n)))
            : t;
}
class Tt extends Ze {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const n = this._def.shape(),
      r = Xe.objectKeys(n);
    return ((this._cached = { shape: n, keys: r }), this._cached);
  }
  _parse(n) {
    if (this._getType(n) !== _e.object) {
      const p = this._getOrReturnCtx(n);
      return (
        pe(p, {
          code: re.invalid_type,
          expected: _e.object,
          received: p.parsedType,
        }),
        ke
      );
    }
    const { status: i, ctx: l } = this._processInputParams(n),
      { shape: c, keys: f } = this._getCached(),
      h = [];
    if (
      !(this._def.catchall instanceof Ar && this._def.unknownKeys === "strip")
    )
      for (const p in l.data) f.includes(p) || h.push(p);
    const g = [];
    for (const p of f) {
      const v = c[p],
        b = l.data[p];
      g.push({
        key: { status: "valid", value: p },
        value: v._parse(new Rr(l, b, l.path, p)),
        alwaysSet: p in l.data,
      });
    }
    if (this._def.catchall instanceof Ar) {
      const p = this._def.unknownKeys;
      if (p === "passthrough")
        for (const v of h)
          g.push({
            key: { status: "valid", value: v },
            value: { status: "valid", value: l.data[v] },
          });
      else if (p === "strict")
        h.length > 0 &&
          (pe(l, { code: re.unrecognized_keys, keys: h }), i.dirty());
      else if (p !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const p = this._def.catchall;
      for (const v of h) {
        const b = l.data[v];
        g.push({
          key: { status: "valid", value: v },
          value: p._parse(new Rr(l, b, l.path, v)),
          alwaysSet: v in l.data,
        });
      }
    }
    return l.common.async
      ? Promise.resolve()
          .then(async () => {
            const p = [];
            for (const v of g) {
              const b = await v.key,
                S = await v.value;
              p.push({ key: b, value: S, alwaysSet: v.alwaysSet });
            }
            return p;
          })
          .then((p) => bn.mergeObjectSync(i, p))
      : bn.mergeObjectSync(i, g);
  }
  get shape() {
    return this._def.shape();
  }
  strict(n) {
    return (
      Ee.errToObj,
      new Tt({
        ...this._def,
        unknownKeys: "strict",
        ...(n !== void 0
          ? {
              errorMap: (r, i) => {
                const l = this._def.errorMap?.(r, i).message ?? i.defaultError;
                return r.code === "unrecognized_keys"
                  ? { message: Ee.errToObj(n).message ?? l }
                  : { message: l };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Tt({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new Tt({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(n) {
    return new Tt({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...n }),
    });
  }
  merge(n) {
    return new Tt({
      unknownKeys: n._def.unknownKeys,
      catchall: n._def.catchall,
      shape: () => ({ ...this._def.shape(), ...n._def.shape() }),
      typeName: Le.ZodObject,
    });
  }
  setKey(n, r) {
    return this.augment({ [n]: r });
  }
  catchall(n) {
    return new Tt({ ...this._def, catchall: n });
  }
  pick(n) {
    const r = {};
    for (const i of Xe.objectKeys(n))
      n[i] && this.shape[i] && (r[i] = this.shape[i]);
    return new Tt({ ...this._def, shape: () => r });
  }
  omit(n) {
    const r = {};
    for (const i of Xe.objectKeys(this.shape)) n[i] || (r[i] = this.shape[i]);
    return new Tt({ ...this._def, shape: () => r });
  }
  deepPartial() {
    return oi(this);
  }
  partial(n) {
    const r = {};
    for (const i of Xe.objectKeys(this.shape)) {
      const l = this.shape[i];
      n && !n[i] ? (r[i] = l) : (r[i] = l.optional());
    }
    return new Tt({ ...this._def, shape: () => r });
  }
  required(n) {
    const r = {};
    for (const i of Xe.objectKeys(this.shape))
      if (n && !n[i]) r[i] = this.shape[i];
      else {
        let c = this.shape[i];
        for (; c instanceof Nr; ) c = c._def.innerType;
        r[i] = c;
      }
    return new Tt({ ...this._def, shape: () => r });
  }
  keyof() {
    return __(Xe.objectKeys(this.shape));
  }
}
Tt.create = (t, n) =>
  new Tt({
    shape: () => t,
    unknownKeys: "strip",
    catchall: Ar.create(),
    typeName: Le.ZodObject,
    ...Ie(n),
  });
Tt.strictCreate = (t, n) =>
  new Tt({
    shape: () => t,
    unknownKeys: "strict",
    catchall: Ar.create(),
    typeName: Le.ZodObject,
    ...Ie(n),
  });
Tt.lazycreate = (t, n) =>
  new Tt({
    shape: t,
    unknownKeys: "strip",
    catchall: Ar.create(),
    typeName: Le.ZodObject,
    ...Ie(n),
  });
class eu extends Ze {
  _parse(n) {
    const { ctx: r } = this._processInputParams(n),
      i = this._def.options;
    function l(c) {
      for (const h of c) if (h.result.status === "valid") return h.result;
      for (const h of c)
        if (h.result.status === "dirty")
          return (r.common.issues.push(...h.ctx.common.issues), h.result);
      const f = c.map((h) => new Pa(h.ctx.common.issues));
      return (pe(r, { code: re.invalid_union, unionErrors: f }), ke);
    }
    if (r.common.async)
      return Promise.all(
        i.map(async (c) => {
          const f = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return {
            result: await c._parseAsync({
              data: r.data,
              path: r.path,
              parent: f,
            }),
            ctx: f,
          };
        }),
      ).then(l);
    {
      let c;
      const f = [];
      for (const g of i) {
        const p = { ...r, common: { ...r.common, issues: [] }, parent: null },
          v = g._parseSync({ data: r.data, path: r.path, parent: p });
        if (v.status === "valid") return v;
        (v.status === "dirty" && !c && (c = { result: v, ctx: p }),
          p.common.issues.length && f.push(p.common.issues));
      }
      if (c) return (r.common.issues.push(...c.ctx.common.issues), c.result);
      const h = f.map((g) => new Pa(g));
      return (pe(r, { code: re.invalid_union, unionErrors: h }), ke);
    }
  }
  get options() {
    return this._def.options;
  }
}
eu.create = (t, n) => new eu({ options: t, typeName: Le.ZodUnion, ...Ie(n) });
function om(t, n) {
  const r = wr(t),
    i = wr(n);
  if (t === n) return { valid: !0, data: t };
  if (r === _e.object && i === _e.object) {
    const l = Xe.objectKeys(n),
      c = Xe.objectKeys(t).filter((h) => l.indexOf(h) !== -1),
      f = { ...t, ...n };
    for (const h of c) {
      const g = om(t[h], n[h]);
      if (!g.valid) return { valid: !1 };
      f[h] = g.data;
    }
    return { valid: !0, data: f };
  } else if (r === _e.array && i === _e.array) {
    if (t.length !== n.length) return { valid: !1 };
    const l = [];
    for (let c = 0; c < t.length; c++) {
      const f = t[c],
        h = n[c],
        g = om(f, h);
      if (!g.valid) return { valid: !1 };
      l.push(g.data);
    }
    return { valid: !0, data: l };
  } else
    return r === _e.date && i === _e.date && +t == +n
      ? { valid: !0, data: t }
      : { valid: !1 };
}
class tu extends Ze {
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n),
      l = (c, f) => {
        if (Rb(c) || Rb(f)) return ke;
        const h = om(c.value, f.value);
        return h.valid
          ? ((Ab(c) || Ab(f)) && r.dirty(), { status: r.value, value: h.data })
          : (pe(i, { code: re.invalid_intersection_types }), ke);
      };
    return i.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseAsync({
            data: i.data,
            path: i.path,
            parent: i,
          }),
        ]).then(([c, f]) => l(c, f))
      : l(
          this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseSync({ data: i.data, path: i.path, parent: i }),
        );
  }
}
tu.create = (t, n, r) =>
  new tu({ left: t, right: n, typeName: Le.ZodIntersection, ...Ie(r) });
class fs extends Ze {
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== _e.array)
      return (
        pe(i, {
          code: re.invalid_type,
          expected: _e.array,
          received: i.parsedType,
        }),
        ke
      );
    if (i.data.length < this._def.items.length)
      return (
        pe(i, {
          code: re.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        ke
      );
    !this._def.rest &&
      i.data.length > this._def.items.length &&
      (pe(i, {
        code: re.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      r.dirty());
    const c = [...i.data]
      .map((f, h) => {
        const g = this._def.items[h] || this._def.rest;
        return g ? g._parse(new Rr(i, f, i.path, h)) : null;
      })
      .filter((f) => !!f);
    return i.common.async
      ? Promise.all(c).then((f) => bn.mergeArray(r, f))
      : bn.mergeArray(r, c);
  }
  get items() {
    return this._def.items;
  }
  rest(n) {
    return new fs({ ...this._def, rest: n });
  }
}
fs.create = (t, n) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new fs({ items: t, typeName: Le.ZodTuple, rest: null, ...Ie(n) });
};
class Vb extends Ze {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== _e.map)
      return (
        pe(i, {
          code: re.invalid_type,
          expected: _e.map,
          received: i.parsedType,
        }),
        ke
      );
    const l = this._def.keyType,
      c = this._def.valueType,
      f = [...i.data.entries()].map(([h, g], p) => ({
        key: l._parse(new Rr(i, h, i.path, [p, "key"])),
        value: c._parse(new Rr(i, g, i.path, [p, "value"])),
      }));
    if (i.common.async) {
      const h = new Map();
      return Promise.resolve().then(async () => {
        for (const g of f) {
          const p = await g.key,
            v = await g.value;
          if (p.status === "aborted" || v.status === "aborted") return ke;
          ((p.status === "dirty" || v.status === "dirty") && r.dirty(),
            h.set(p.value, v.value));
        }
        return { status: r.value, value: h };
      });
    } else {
      const h = new Map();
      for (const g of f) {
        const p = g.key,
          v = g.value;
        if (p.status === "aborted" || v.status === "aborted") return ke;
        ((p.status === "dirty" || v.status === "dirty") && r.dirty(),
          h.set(p.value, v.value));
      }
      return { status: r.value, value: h };
    }
  }
}
Vb.create = (t, n, r) =>
  new Vb({ valueType: n, keyType: t, typeName: Le.ZodMap, ...Ie(r) });
class Qo extends Ze {
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== _e.set)
      return (
        pe(i, {
          code: re.invalid_type,
          expected: _e.set,
          received: i.parsedType,
        }),
        ke
      );
    const l = this._def;
    (l.minSize !== null &&
      i.data.size < l.minSize.value &&
      (pe(i, {
        code: re.too_small,
        minimum: l.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: l.minSize.message,
      }),
      r.dirty()),
      l.maxSize !== null &&
        i.data.size > l.maxSize.value &&
        (pe(i, {
          code: re.too_big,
          maximum: l.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: l.maxSize.message,
        }),
        r.dirty()));
    const c = this._def.valueType;
    function f(g) {
      const p = new Set();
      for (const v of g) {
        if (v.status === "aborted") return ke;
        (v.status === "dirty" && r.dirty(), p.add(v.value));
      }
      return { status: r.value, value: p };
    }
    const h = [...i.data.values()].map((g, p) =>
      c._parse(new Rr(i, g, i.path, p)),
    );
    return i.common.async ? Promise.all(h).then((g) => f(g)) : f(h);
  }
  min(n, r) {
    return new Qo({
      ...this._def,
      minSize: { value: n, message: Ee.toString(r) },
    });
  }
  max(n, r) {
    return new Qo({
      ...this._def,
      maxSize: { value: n, message: Ee.toString(r) },
    });
  }
  size(n, r) {
    return this.min(n, r).max(n, r);
  }
  nonempty(n) {
    return this.min(1, n);
  }
}
Qo.create = (t, n) =>
  new Qo({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: Le.ZodSet,
    ...Ie(n),
  });
class Pb extends Ze {
  get schema() {
    return this._def.getter();
  }
  _parse(n) {
    const { ctx: r } = this._processInputParams(n);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Pb.create = (t, n) => new Pb({ getter: t, typeName: Le.ZodLazy, ...Ie(n) });
class Hb extends Ze {
  _parse(n) {
    if (n.data !== this._def.value) {
      const r = this._getOrReturnCtx(n);
      return (
        pe(r, {
          received: r.data,
          code: re.invalid_literal,
          expected: this._def.value,
        }),
        ke
      );
    }
    return { status: "valid", value: n.data };
  }
  get value() {
    return this._def.value;
  }
}
Hb.create = (t, n) => new Hb({ value: t, typeName: Le.ZodLiteral, ...Ie(n) });
function __(t, n) {
  return new gi({ values: t, typeName: Le.ZodEnum, ...Ie(n) });
}
class gi extends Ze {
  _parse(n) {
    if (typeof n.data != "string") {
      const r = this._getOrReturnCtx(n),
        i = this._def.values;
      return (
        pe(r, {
          expected: Xe.joinValues(i),
          received: r.parsedType,
          code: re.invalid_type,
        }),
        ke
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(n.data))
    ) {
      const r = this._getOrReturnCtx(n),
        i = this._def.values;
      return (
        pe(r, { received: r.data, code: re.invalid_enum_value, options: i }),
        ke
      );
    }
    return kn(n.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const n = {};
    for (const r of this._def.values) n[r] = r;
    return n;
  }
  get Values() {
    const n = {};
    for (const r of this._def.values) n[r] = r;
    return n;
  }
  get Enum() {
    const n = {};
    for (const r of this._def.values) n[r] = r;
    return n;
  }
  extract(n, r = this._def) {
    return gi.create(n, { ...this._def, ...r });
  }
  exclude(n, r = this._def) {
    return gi.create(
      this.options.filter((i) => !n.includes(i)),
      { ...this._def, ...r },
    );
  }
}
gi.create = __;
class Bb extends Ze {
  _parse(n) {
    const r = Xe.getValidEnumValues(this._def.values),
      i = this._getOrReturnCtx(n);
    if (i.parsedType !== _e.string && i.parsedType !== _e.number) {
      const l = Xe.objectValues(r);
      return (
        pe(i, {
          expected: Xe.joinValues(l),
          received: i.parsedType,
          code: re.invalid_type,
        }),
        ke
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(Xe.getValidEnumValues(this._def.values))),
      !this._cache.has(n.data))
    ) {
      const l = Xe.objectValues(r);
      return (
        pe(i, { received: i.data, code: re.invalid_enum_value, options: l }),
        ke
      );
    }
    return kn(n.data);
  }
  get enum() {
    return this._def.values;
  }
}
Bb.create = (t, n) =>
  new Bb({ values: t, typeName: Le.ZodNativeEnum, ...Ie(n) });
class nu extends Ze {
  unwrap() {
    return this._def.type;
  }
  _parse(n) {
    const { ctx: r } = this._processInputParams(n);
    if (r.parsedType !== _e.promise && r.common.async === !1)
      return (
        pe(r, {
          code: re.invalid_type,
          expected: _e.promise,
          received: r.parsedType,
        }),
        ke
      );
    const i = r.parsedType === _e.promise ? r.data : Promise.resolve(r.data);
    return kn(
      i.then((l) =>
        this._def.type.parseAsync(l, {
          path: r.path,
          errorMap: r.common.contextualErrorMap,
        }),
      ),
    );
  }
}
nu.create = (t, n) => new nu({ type: t, typeName: Le.ZodPromise, ...Ie(n) });
class yi extends Ze {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Le.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n),
      l = this._def.effect || null,
      c = {
        addIssue: (f) => {
          (pe(i, f), f.fatal ? r.abort() : r.dirty());
        },
        get path() {
          return i.path;
        },
      };
    if (((c.addIssue = c.addIssue.bind(c)), l.type === "preprocess")) {
      const f = l.transform(i.data, c);
      if (i.common.async)
        return Promise.resolve(f).then(async (h) => {
          if (r.value === "aborted") return ke;
          const g = await this._def.schema._parseAsync({
            data: h,
            path: i.path,
            parent: i,
          });
          return g.status === "aborted"
            ? ke
            : g.status === "dirty" || r.value === "dirty"
              ? ko(g.value)
              : g;
        });
      {
        if (r.value === "aborted") return ke;
        const h = this._def.schema._parseSync({
          data: f,
          path: i.path,
          parent: i,
        });
        return h.status === "aborted"
          ? ke
          : h.status === "dirty" || r.value === "dirty"
            ? ko(h.value)
            : h;
      }
    }
    if (l.type === "refinement") {
      const f = (h) => {
        const g = l.refinement(h, c);
        if (i.common.async) return Promise.resolve(g);
        if (g instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return h;
      };
      if (i.common.async === !1) {
        const h = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return h.status === "aborted"
          ? ke
          : (h.status === "dirty" && r.dirty(),
            f(h.value),
            { status: r.value, value: h.value });
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((h) =>
            h.status === "aborted"
              ? ke
              : (h.status === "dirty" && r.dirty(),
                f(h.value).then(() => ({ status: r.value, value: h.value }))),
          );
    }
    if (l.type === "transform")
      if (i.common.async === !1) {
        const f = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        if (!mi(f)) return ke;
        const h = l.transform(f.value, c);
        if (h instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: r.value, value: h };
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((f) =>
            mi(f)
              ? Promise.resolve(l.transform(f.value, c)).then((h) => ({
                  status: r.value,
                  value: h,
                }))
              : ke,
          );
    Xe.assertNever(l);
  }
}
yi.create = (t, n, r) =>
  new yi({ schema: t, typeName: Le.ZodEffects, effect: n, ...Ie(r) });
yi.createWithPreprocess = (t, n, r) =>
  new yi({
    schema: n,
    effect: { type: "preprocess", transform: t },
    typeName: Le.ZodEffects,
    ...Ie(r),
  });
class Nr extends Ze {
  _parse(n) {
    return this._getType(n) === _e.undefined
      ? kn(void 0)
      : this._def.innerType._parse(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nr.create = (t, n) =>
  new Nr({ innerType: t, typeName: Le.ZodOptional, ...Ie(n) });
class vi extends Ze {
  _parse(n) {
    return this._getType(n) === _e.null
      ? kn(null)
      : this._def.innerType._parse(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
vi.create = (t, n) =>
  new vi({ innerType: t, typeName: Le.ZodNullable, ...Ie(n) });
class lm extends Ze {
  _parse(n) {
    const { ctx: r } = this._processInputParams(n);
    let i = r.data;
    return (
      r.parsedType === _e.undefined && (i = this._def.defaultValue()),
      this._def.innerType._parse({ data: i, path: r.path, parent: r })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
lm.create = (t, n) =>
  new lm({
    innerType: t,
    typeName: Le.ZodDefault,
    defaultValue: typeof n.default == "function" ? n.default : () => n.default,
    ...Ie(n),
  });
class cm extends Ze {
  _parse(n) {
    const { ctx: r } = this._processInputParams(n),
      i = { ...r, common: { ...r.common, issues: [] } },
      l = this._def.innerType._parse({
        data: i.data,
        path: i.path,
        parent: { ...i },
      });
    return Wc(l)
      ? l.then((c) => ({
          status: "valid",
          value:
            c.status === "valid"
              ? c.value
              : this._def.catchValue({
                  get error() {
                    return new Pa(i.common.issues);
                  },
                  input: i.data,
                }),
        }))
      : {
          status: "valid",
          value:
            l.status === "valid"
              ? l.value
              : this._def.catchValue({
                  get error() {
                    return new Pa(i.common.issues);
                  },
                  input: i.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
cm.create = (t, n) =>
  new cm({
    innerType: t,
    typeName: Le.ZodCatch,
    catchValue: typeof n.catch == "function" ? n.catch : () => n.catch,
    ...Ie(n),
  });
class Fb extends Ze {
  _parse(n) {
    if (this._getType(n) !== _e.nan) {
      const i = this._getOrReturnCtx(n);
      return (
        pe(i, {
          code: re.invalid_type,
          expected: _e.nan,
          received: i.parsedType,
        }),
        ke
      );
    }
    return { status: "valid", value: n.data };
  }
}
Fb.create = (t) => new Fb({ typeName: Le.ZodNaN, ...Ie(t) });
class oL extends Ze {
  _parse(n) {
    const { ctx: r } = this._processInputParams(n),
      i = r.data;
    return this._def.type._parse({ data: i, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class lp extends Ze {
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n);
    if (i.common.async)
      return (async () => {
        const c = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return c.status === "aborted"
          ? ke
          : c.status === "dirty"
            ? (r.dirty(), ko(c.value))
            : this._def.out._parseAsync({
                data: c.value,
                path: i.path,
                parent: i,
              });
      })();
    {
      const l = this._def.in._parseSync({
        data: i.data,
        path: i.path,
        parent: i,
      });
      return l.status === "aborted"
        ? ke
        : l.status === "dirty"
          ? (r.dirty(), { status: "dirty", value: l.value })
          : this._def.out._parseSync({
              data: l.value,
              path: i.path,
              parent: i,
            });
    }
  }
  static create(n, r) {
    return new lp({ in: n, out: r, typeName: Le.ZodPipeline });
  }
}
class um extends Ze {
  _parse(n) {
    const r = this._def.innerType._parse(n),
      i = (l) => (mi(l) && (l.value = Object.freeze(l.value)), l);
    return Wc(r) ? r.then((l) => i(l)) : i(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
um.create = (t, n) =>
  new um({ innerType: t, typeName: Le.ZodReadonly, ...Ie(n) });
var Le;
(function (t) {
  ((t.ZodString = "ZodString"),
    (t.ZodNumber = "ZodNumber"),
    (t.ZodNaN = "ZodNaN"),
    (t.ZodBigInt = "ZodBigInt"),
    (t.ZodBoolean = "ZodBoolean"),
    (t.ZodDate = "ZodDate"),
    (t.ZodSymbol = "ZodSymbol"),
    (t.ZodUndefined = "ZodUndefined"),
    (t.ZodNull = "ZodNull"),
    (t.ZodAny = "ZodAny"),
    (t.ZodUnknown = "ZodUnknown"),
    (t.ZodNever = "ZodNever"),
    (t.ZodVoid = "ZodVoid"),
    (t.ZodArray = "ZodArray"),
    (t.ZodObject = "ZodObject"),
    (t.ZodUnion = "ZodUnion"),
    (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (t.ZodIntersection = "ZodIntersection"),
    (t.ZodTuple = "ZodTuple"),
    (t.ZodRecord = "ZodRecord"),
    (t.ZodMap = "ZodMap"),
    (t.ZodSet = "ZodSet"),
    (t.ZodFunction = "ZodFunction"),
    (t.ZodLazy = "ZodLazy"),
    (t.ZodLiteral = "ZodLiteral"),
    (t.ZodEnum = "ZodEnum"),
    (t.ZodEffects = "ZodEffects"),
    (t.ZodNativeEnum = "ZodNativeEnum"),
    (t.ZodOptional = "ZodOptional"),
    (t.ZodNullable = "ZodNullable"),
    (t.ZodDefault = "ZodDefault"),
    (t.ZodCatch = "ZodCatch"),
    (t.ZodPromise = "ZodPromise"),
    (t.ZodBranded = "ZodBranded"),
    (t.ZodPipeline = "ZodPipeline"),
    (t.ZodReadonly = "ZodReadonly"));
})(Le || (Le = {}));
const Ch = ka.create;
us.create;
ds.create;
Jc.create;
pi.create;
Ar.create;
da.create;
const lL = Tt.create;
eu.create;
tu.create;
fs.create;
const Oh = gi.create;
nu.create;
Nr.create;
vi.create;
const cL = {
    string: (t) => ka.create({ ...t, coerce: !0 }),
    number: (t) => us.create({ ...t, coerce: !0 }),
    boolean: (t) => Jc.create({ ...t, coerce: !0 }),
    bigint: (t) => ds.create({ ...t, coerce: !0 }),
    date: (t) => pi.create({ ...t, coerce: !0 }),
  },
  uL = g3,
  E_ = y.createContext(null),
  es = ({ ...t }) =>
    d.jsx(E_.Provider, {
      value: { name: t.name },
      children: d.jsx(m3, { ...t }),
    }),
  qu = () => {
    const t = y.useContext(E_),
      n = y.useContext(N_),
      { getFieldState: r, formState: i } = p3();
    if (!t) throw new Error("useFormField should be used within <FormField>");
    if (!n) throw new Error("useFormField should be used within <FormItem>");
    const l = r(t.name, i),
      { id: c } = n;
    return {
      id: c,
      name: t.name,
      formItemId: `${c}-form-item`,
      formDescriptionId: `${c}-form-item-description`,
      formMessageId: `${c}-form-item-message`,
      ...l,
    };
  },
  N_ = y.createContext(null),
  aa = y.forwardRef(({ className: t, ...n }, r) => {
    const i = y.useId();
    return d.jsx(N_.Provider, {
      value: { id: i },
      children: d.jsx("div", { ref: r, className: we("space-y-2", t), ...n }),
    });
  });
aa.displayName = "FormItem";
const ra = y.forwardRef(({ className: t, ...n }, r) => {
  const { error: i, formItemId: l } = qu();
  return d.jsx(qa, {
    ref: r,
    className: we(i && "text-destructive", t),
    htmlFor: l,
    ...n,
  });
});
ra.displayName = "FormLabel";
const sa = y.forwardRef(({ ...t }, n) => {
  const {
    error: r,
    formItemId: i,
    formDescriptionId: l,
    formMessageId: c,
  } = qu();
  return d.jsx(Pm, {
    ref: n,
    id: i,
    "aria-describedby": r ? `${l} ${c}` : `${l}`,
    "aria-invalid": !!r,
    ...t,
  });
});
sa.displayName = "FormControl";
const T_ = y.forwardRef(({ className: t, ...n }, r) => {
  const { formDescriptionId: i } = qu();
  return d.jsx("p", {
    ref: r,
    id: i,
    className: we("text-[0.8rem] text-muted-foreground", t),
    ...n,
  });
});
T_.displayName = "FormDescription";
const br = y.forwardRef(({ className: t, children: n, ...r }, i) => {
  const { error: l, formMessageId: c } = qu(),
    f = l ? String(l?.message ?? "") : n;
  return f
    ? d.jsx("p", {
        ref: i,
        id: c,
        className: we("text-[0.8rem] font-medium text-destructive", t),
        ...r,
        children: f,
      })
    : null;
});
br.displayName = "FormMessage";
var cp = "Radio",
  [dL, j_] = fa(cp),
  [fL, hL] = dL(cp),
  C_ = y.forwardRef((t, n) => {
    const {
        __scopeRadio: r,
        name: i,
        checked: l = !1,
        required: c,
        disabled: f,
        value: h = "on",
        onCheck: g,
        form: p,
        ...v
      } = t,
      [b, S] = y.useState(null),
      E = rt(n, (N) => S(N)),
      j = y.useRef(!1),
      _ = b ? p || !!b.closest("form") : !0;
    return d.jsxs(fL, {
      scope: r,
      checked: l,
      disabled: f,
      children: [
        d.jsx(qe.button, {
          type: "button",
          role: "radio",
          "aria-checked": l,
          "data-state": M_(l),
          "data-disabled": f ? "" : void 0,
          disabled: f,
          value: h,
          ...v,
          ref: E,
          onClick: Oe(t.onClick, (N) => {
            (l || g?.(),
              _ &&
                ((j.current = N.isPropagationStopped()),
                j.current || N.stopPropagation()));
          }),
        }),
        _ &&
          d.jsx(A_, {
            control: b,
            bubbles: !j.current,
            name: i,
            value: h,
            checked: l,
            required: c,
            disabled: f,
            form: p,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
C_.displayName = cp;
var O_ = "RadioIndicator",
  R_ = y.forwardRef((t, n) => {
    const { __scopeRadio: r, forceMount: i, ...l } = t,
      c = hL(O_, r);
    return d.jsx(Ha, {
      present: i || c.checked,
      children: d.jsx(qe.span, {
        "data-state": M_(c.checked),
        "data-disabled": c.disabled ? "" : void 0,
        ...l,
        ref: n,
      }),
    });
  });
R_.displayName = O_;
var mL = "RadioBubbleInput",
  A_ = y.forwardRef(
    ({ __scopeRadio: t, control: n, checked: r, bubbles: i = !0, ...l }, c) => {
      const f = y.useRef(null),
        h = rt(f, c),
        g = S1(r),
        p = Sw(n);
      return (
        y.useEffect(() => {
          const v = f.current;
          if (!v) return;
          const b = window.HTMLInputElement.prototype,
            E = Object.getOwnPropertyDescriptor(b, "checked").set;
          if (g !== r && E) {
            const j = new Event("click", { bubbles: i });
            (E.call(v, r), v.dispatchEvent(j));
          }
        }, [g, r, i]),
        d.jsx(qe.input, {
          type: "radio",
          "aria-hidden": !0,
          defaultChecked: r,
          ...l,
          tabIndex: -1,
          ref: h,
          style: {
            ...l.style,
            ...p,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      );
    },
  );
A_.displayName = mL;
function M_(t) {
  return t ? "checked" : "unchecked";
}
var pL = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Uu = "RadioGroup",
  [gL] = fa(Uu, [Tu, j_]),
  D_ = Tu(),
  k_ = j_(),
  [yL, vL] = gL(Uu),
  L_ = y.forwardRef((t, n) => {
    const {
        __scopeRadioGroup: r,
        name: i,
        defaultValue: l,
        value: c,
        required: f = !1,
        disabled: h = !1,
        orientation: g,
        dir: p,
        loop: v = !0,
        onValueChange: b,
        ...S
      } = t,
      E = D_(r),
      j = Nu(p),
      [_, N] = Tr({ prop: c, defaultProp: l ?? null, onChange: b, caller: Uu });
    return d.jsx(yL, {
      scope: r,
      name: i,
      required: f,
      disabled: h,
      value: _,
      onValueChange: N,
      children: d.jsx(i1, {
        asChild: !0,
        ...E,
        orientation: g,
        dir: j,
        loop: v,
        children: d.jsx(qe.div, {
          role: "radiogroup",
          "aria-required": f,
          "aria-orientation": g,
          "data-disabled": h ? "" : void 0,
          dir: j,
          ...S,
          ref: n,
        }),
      }),
    });
  });
L_.displayName = Uu;
var z_ = "RadioGroupItem",
  q_ = y.forwardRef((t, n) => {
    const { __scopeRadioGroup: r, disabled: i, ...l } = t,
      c = vL(z_, r),
      f = c.disabled || i,
      h = D_(r),
      g = k_(r),
      p = y.useRef(null),
      v = rt(n, p),
      b = c.value === l.value,
      S = y.useRef(!1);
    return (
      y.useEffect(() => {
        const E = (_) => {
            pL.includes(_.key) && (S.current = !0);
          },
          j = () => (S.current = !1);
        return (
          document.addEventListener("keydown", E),
          document.addEventListener("keyup", j),
          () => {
            (document.removeEventListener("keydown", E),
              document.removeEventListener("keyup", j));
          }
        );
      }, []),
      d.jsx(o1, {
        asChild: !0,
        ...h,
        focusable: !f,
        active: b,
        children: d.jsx(C_, {
          disabled: f,
          required: c.required,
          checked: b,
          ...g,
          ...l,
          name: c.name,
          ref: v,
          onCheck: () => c.onValueChange(l.value),
          onKeyDown: Oe((E) => {
            E.key === "Enter" && E.preventDefault();
          }),
          onFocus: Oe(l.onFocus, () => {
            S.current && p.current?.click();
          }),
        }),
      })
    );
  });
q_.displayName = z_;
var xL = "RadioGroupIndicator",
  U_ = y.forwardRef((t, n) => {
    const { __scopeRadioGroup: r, ...i } = t,
      l = k_(r);
    return d.jsx(R_, { ...l, ...i, ref: n });
  });
U_.displayName = xL;
var V_ = L_,
  P_ = q_,
  bL = U_;
const H_ = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(V_, { className: we("grid gap-2", t), ...n, ref: r }),
);
H_.displayName = V_.displayName;
const dm = y.forwardRef(({ className: t, ...n }, r) =>
  d.jsx(P_, {
    ref: r,
    className: we(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      t,
    ),
    ...n,
    children: d.jsx(bL, {
      className: "flex items-center justify-center",
      children: d.jsx(RC, { className: "h-3.5 w-3.5 fill-primary" }),
    }),
  }),
);
dm.displayName = P_.displayName;
const wL = lL({
  kind: Oh(["offer", "request"]),
  skillId: cL.number().min(1, "Please select a skill"),
  title: Ch().min(5, "Title must be at least 5 characters").max(100),
  description: Ch()
    .min(20, "Description must be at least 20 characters")
    .max(1e3),
  level: Oh(["beginner", "intermediate", "advanced"]),
  format: Oh(["in_person", "online", "either"]),
  availability: Ch()
    .min(5, "Please provide some availability details")
    .max(200),
});
function SL() {
  const [, t] = e0(),
    { toast: n } = Zo(),
    r = bi(),
    { data: i } = nl({ query: { enabled: !0 } }),
    l = WM(),
    c = A3({
      resolver: L3(wL),
      defaultValues: {
        kind: "offer",
        skillId: 0,
        title: "",
        description: "",
        level: "beginner",
        format: "either",
        availability: "",
      },
    });
  function f(h) {
    l.mutate(
      { data: h },
      {
        onSuccess: () => {
          (n({ title: "Listing created successfully!" }),
            r.invalidateQueries({ queryKey: KS() }),
            t("/browse"));
        },
        onError: (g) => {
          n({
            title: "Failed to create listing",
            description: g.message,
            variant: "destructive",
          });
        },
      },
    );
  }
  return d.jsxs("div", {
    className:
      "max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 pb-12",
    children: [
      d.jsxs("div", {
        children: [
          d.jsx("h1", {
            className: "text-3xl font-serif font-bold text-foreground",
            children: "Post a Listing",
          }),
          d.jsx("p", {
            className: "text-muted-foreground mt-1",
            children: "Share what you can teach or what you want to learn.",
          }),
        ],
      }),
      d.jsx(It, {
        className: "border-border/50 shadow-sm",
        children: d.jsx(uL, {
          ...c,
          children: d.jsxs("form", {
            onSubmit: c.handleSubmit(f),
            children: [
              d.jsxs(Gt, {
                className: "space-y-6 pt-6",
                children: [
                  d.jsx(es, {
                    control: c.control,
                    name: "kind",
                    render: ({ field: h }) =>
                      d.jsxs(aa, {
                        className: "space-y-3",
                        children: [
                          d.jsx(ra, { children: "I want to..." }),
                          d.jsx(sa, {
                            children: d.jsxs(H_, {
                              onValueChange: h.onChange,
                              defaultValue: h.value,
                              className: "flex flex-col sm:flex-row gap-4",
                              children: [
                                d.jsxs(aa, {
                                  className:
                                    "flex items-center space-x-3 space-y-0 bg-background border p-4 rounded-lg flex-1 cursor-pointer hover:border-primary transition-colors",
                                  children: [
                                    d.jsx(sa, {
                                      children: d.jsx(dm, { value: "offer" }),
                                    }),
                                    d.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        d.jsx(ra, {
                                          className:
                                            "font-medium cursor-pointer",
                                          children: "Teach",
                                        }),
                                        d.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children: "Offer to teach a skill",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d.jsxs(aa, {
                                  className:
                                    "flex items-center space-x-3 space-y-0 bg-background border p-4 rounded-lg flex-1 cursor-pointer hover:border-secondary transition-colors",
                                  children: [
                                    d.jsx(sa, {
                                      children: d.jsx(dm, { value: "request" }),
                                    }),
                                    d.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        d.jsx(ra, {
                                          className:
                                            "font-medium cursor-pointer",
                                          children: "Learn",
                                        }),
                                        d.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children: "Request to learn a skill",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          d.jsx(br, {}),
                        ],
                      }),
                  }),
                  d.jsxs("div", {
                    className: "grid sm:grid-cols-2 gap-6",
                    children: [
                      d.jsx(es, {
                        control: c.control,
                        name: "skillId",
                        render: ({ field: h }) =>
                          d.jsxs(aa, {
                            children: [
                              d.jsx(ra, { children: "Skill" }),
                              d.jsxs(ca, {
                                onValueChange: (g) => h.onChange(parseInt(g)),
                                value: h.value ? h.value.toString() : "",
                                children: [
                                  d.jsx(sa, {
                                    children: d.jsx(Fn, {
                                      children: d.jsx(ua, {
                                        placeholder: "Select a skill",
                                      }),
                                    }),
                                  }),
                                  d.jsx(In, {
                                    children: i?.map((g) =>
                                      d.jsx(
                                        wt,
                                        {
                                          value: g.id.toString(),
                                          children: g.name,
                                        },
                                        g.id,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              d.jsx(br, {}),
                            ],
                          }),
                      }),
                      d.jsx(es, {
                        control: c.control,
                        name: "level",
                        render: ({ field: h }) =>
                          d.jsxs(aa, {
                            children: [
                              d.jsx(ra, { children: "Proficiency Level" }),
                              d.jsxs(ca, {
                                onValueChange: h.onChange,
                                defaultValue: h.value,
                                children: [
                                  d.jsx(sa, {
                                    children: d.jsx(Fn, {
                                      children: d.jsx(ua, {
                                        placeholder: "Select level",
                                      }),
                                    }),
                                  }),
                                  d.jsxs(In, {
                                    children: [
                                      d.jsx(wt, {
                                        value: "beginner",
                                        children: "Beginner",
                                      }),
                                      d.jsx(wt, {
                                        value: "intermediate",
                                        children: "Intermediate",
                                      }),
                                      d.jsx(wt, {
                                        value: "advanced",
                                        children: "Advanced",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              d.jsx(br, {}),
                            ],
                          }),
                      }),
                    ],
                  }),
                  d.jsx(es, {
                    control: c.control,
                    name: "title",
                    render: ({ field: h }) =>
                      d.jsxs(aa, {
                        children: [
                          d.jsx(ra, { children: "Title" }),
                          d.jsx(sa, {
                            children: d.jsx(hi, {
                              placeholder: "e.g. Intro to React & Tailwind CSS",
                              ...h,
                            }),
                          }),
                          d.jsx(T_, {
                            children: "A catchy, clear title for your listing.",
                          }),
                          d.jsx(br, {}),
                        ],
                      }),
                  }),
                  d.jsx(es, {
                    control: c.control,
                    name: "description",
                    render: ({ field: h }) =>
                      d.jsxs(aa, {
                        children: [
                          d.jsx(ra, { children: "Description" }),
                          d.jsx(sa, {
                            children: d.jsx(sl, {
                              placeholder:
                                "Detail what you'll cover, your teaching style, or what you're hoping to learn...",
                              className: "h-32",
                              ...h,
                            }),
                          }),
                          d.jsx(br, {}),
                        ],
                      }),
                  }),
                  d.jsxs("div", {
                    className: "grid sm:grid-cols-2 gap-6",
                    children: [
                      d.jsx(es, {
                        control: c.control,
                        name: "format",
                        render: ({ field: h }) =>
                          d.jsxs(aa, {
                            children: [
                              d.jsx(ra, { children: "Format" }),
                              d.jsxs(ca, {
                                onValueChange: h.onChange,
                                defaultValue: h.value,
                                children: [
                                  d.jsx(sa, {
                                    children: d.jsx(Fn, {
                                      children: d.jsx(ua, {
                                        placeholder: "Select format",
                                      }),
                                    }),
                                  }),
                                  d.jsxs(In, {
                                    children: [
                                      d.jsx(wt, {
                                        value: "in_person",
                                        children: "In Person",
                                      }),
                                      d.jsx(wt, {
                                        value: "online",
                                        children: "Online",
                                      }),
                                      d.jsx(wt, {
                                        value: "either",
                                        children: "Flexible (Either)",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              d.jsx(br, {}),
                            ],
                          }),
                      }),
                      d.jsx(es, {
                        control: c.control,
                        name: "availability",
                        render: ({ field: h }) =>
                          d.jsxs(aa, {
                            children: [
                              d.jsx(ra, { children: "Availability" }),
                              d.jsx(sa, {
                                children: d.jsx(hi, {
                                  placeholder:
                                    "e.g. Weekday evenings, Weekends",
                                  ...h,
                                }),
                              }),
                              d.jsx(br, {}),
                            ],
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              d.jsxs(Go, {
                className: "bg-muted/30 border-t p-6 flex justify-end gap-3",
                children: [
                  d.jsx(bt, {
                    variant: "ghost",
                    type: "button",
                    onClick: () => t("/browse"),
                    children: "Cancel",
                  }),
                  d.jsxs(bt, {
                    type: "submit",
                    disabled: l.isPending,
                    children: [
                      l.isPending &&
                        d.jsx(La, { className: "mr-2 h-4 w-4 animate-spin" }),
                      "Post Listing",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function _L() {
  const { id: t } = su(),
    n = parseInt(t || "0", 10),
    { data: r } = Ni({ query: { enabled: !0 } }),
    { data: i, isLoading: l } = aD(n, { query: { enabled: !!n } }),
    { data: c } = nl({ query: { enabled: !0 } }),
    f = ZS(),
    h = bi(),
    { toast: g } = Zo(),
    [p, v] = y.useState(!1),
    [b, S] = y.useState(""),
    [E, j] = y.useState(""),
    [_, N] = y.useState(""),
    R = r?.id === i?.studentId;
  je.useEffect(() => {
    i &&
      p &&
      (i.kind === "offer"
        ? j(i.skill.id.toString())
        : S(i.skill.id.toString()));
  }, [i, p]);
  const O = () => {
    !b ||
      !E ||
      !i ||
      f.mutate(
        {
          data: {
            recipientId: i.studentId,
            offeredSkillId: parseInt(b),
            requestedSkillId: parseInt(E),
            message: _,
          },
        },
        {
          onSuccess: () => {
            (g({ title: "Exchange proposed successfully!" }),
              v(!1),
              h.invalidateQueries({ queryKey: Io() }),
              N(""));
          },
          onError: (D) => {
            g({
              title: "Failed to propose exchange",
              description: D.message,
              variant: "destructive",
            });
          },
        },
      );
  };
  return l
    ? d.jsxs("div", {
        className: "max-w-4xl mx-auto space-y-8 animate-in fade-in",
        children: [
          d.jsx(Mt, { className: "h-10 w-3/4" }),
          d.jsx(Mt, { className: "h-48 w-full" }),
        ],
      })
    : i
      ? d.jsxs("div", {
          className:
            "max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12",
          children: [
            d.jsxs("div", {
              className:
                "flex flex-col md:flex-row gap-4 justify-between items-start md:items-center",
              children: [
                d.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    d.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        d.jsx(Bn, {
                          variant: i.kind === "offer" ? "default" : "secondary",
                          className:
                            i.kind === "offer"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground",
                          children:
                            i.kind === "offer"
                              ? "Offering to teach"
                              : "Wants to learn",
                        }),
                        d.jsx(Bn, {
                          variant: "outline",
                          className: "font-mono",
                          children: i.skill.name,
                        }),
                      ],
                    }),
                    d.jsx("h1", {
                      className:
                        "text-3xl md:text-4xl font-serif font-bold text-foreground",
                      children: i.title,
                    }),
                    d.jsx("div", {
                      className:
                        "flex items-center text-sm text-muted-foreground gap-4",
                      children: d.jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [
                          d.jsx(li, { className: "h-4 w-4" }),
                          " Posted ",
                          Eu(new Date(i.createdAt)),
                          " ago",
                        ],
                      }),
                    }),
                  ],
                }),
                !R &&
                  d.jsxs(Xm, {
                    open: p,
                    onOpenChange: v,
                    children: [
                      d.jsx(Wm, {
                        asChild: !0,
                        children: d.jsxs(bt, {
                          size: "lg",
                          className: "w-full md:w-auto gap-2",
                          children: [
                            d.jsx(F0, { className: "h-5 w-5" }),
                            "Propose Exchange",
                          ],
                        }),
                      }),
                      d.jsxs(Au, {
                        className: "sm:max-w-[425px]",
                        children: [
                          d.jsxs(Mu, {
                            children: [
                              d.jsx(ku, { children: "Propose an Exchange" }),
                              d.jsxs(Lu, {
                                children: [
                                  "Offer one of your skills in exchange for ",
                                  i.skill.name,
                                  ".",
                                ],
                              }),
                            ],
                          }),
                          d.jsxs("div", {
                            className: "grid gap-4 py-4",
                            children: [
                              d.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  d.jsx(qa, {
                                    children: "What do you want to learn?",
                                  }),
                                  d.jsxs(ca, {
                                    value: E,
                                    onValueChange: j,
                                    disabled: i.kind === "offer",
                                    children: [
                                      d.jsx(Fn, {
                                        children: d.jsx(ua, {
                                          placeholder: "Select a skill",
                                        }),
                                      }),
                                      d.jsx(In, {
                                        children: c?.map((D) =>
                                          d.jsx(
                                            wt,
                                            {
                                              value: D.id.toString(),
                                              children: D.name,
                                            },
                                            D.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              d.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  d.jsx(qa, {
                                    children: "What can you teach them?",
                                  }),
                                  d.jsxs(ca, {
                                    value: b,
                                    onValueChange: S,
                                    disabled: i.kind === "request",
                                    children: [
                                      d.jsx(Fn, {
                                        children: d.jsx(ua, {
                                          placeholder: "Select a skill",
                                        }),
                                      }),
                                      d.jsx(In, {
                                        children: c?.map((D) =>
                                          d.jsx(
                                            wt,
                                            {
                                              value: D.id.toString(),
                                              children: D.name,
                                            },
                                            D.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              d.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  d.jsx(qa, { children: "Message" }),
                                  d.jsx(sl, {
                                    placeholder: `Hi ${i.student.name.split(" ")[0]}, I saw your listing for ${i.skill.name}...`,
                                    value: _,
                                    onChange: (D) => N(D.target.value),
                                    rows: 4,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d.jsxs(Du, {
                            children: [
                              d.jsx(bt, {
                                variant: "outline",
                                onClick: () => v(!1),
                                children: "Cancel",
                              }),
                              d.jsxs(bt, {
                                onClick: O,
                                disabled: f.isPending,
                                children: [
                                  f.isPending &&
                                    d.jsx(La, {
                                      className: "mr-2 h-4 w-4 animate-spin",
                                    }),
                                  "Send Proposal",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            d.jsxs("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: [
                d.jsx("div", {
                  className: "md:col-span-2 space-y-8",
                  children: d.jsxs(It, {
                    className: "shadow-sm border-border/50",
                    children: [
                      d.jsx(Mn, {
                        className: "bg-muted/30 border-b pb-4",
                        children: d.jsx(Dn, {
                          className: "text-lg",
                          children: "Details",
                        }),
                      }),
                      d.jsxs(Gt, {
                        className: "pt-6 space-y-6",
                        children: [
                          d.jsx("div", {
                            className:
                              "prose prose-sm md:prose-base dark:prose-invert max-w-none text-foreground whitespace-pre-wrap",
                            children: i.description,
                          }),
                          d.jsxs("div", {
                            className:
                              "grid grid-cols-2 gap-6 pt-6 border-t border-border/50",
                            children: [
                              d.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  d.jsx("span", {
                                    className:
                                      "text-sm font-medium text-muted-foreground block",
                                    children: "Level",
                                  }),
                                  d.jsx("span", {
                                    className: "capitalize font-medium",
                                    children: i.level,
                                  }),
                                ],
                              }),
                              d.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  d.jsx("span", {
                                    className:
                                      "text-sm font-medium text-muted-foreground block",
                                    children: "Format",
                                  }),
                                  d.jsxs("span", {
                                    className:
                                      "flex items-center capitalize font-medium",
                                    children: [
                                      i.format === "in_person" &&
                                        d.jsx(_r, {
                                          className:
                                            "h-4 w-4 mr-1.5 text-primary",
                                        }),
                                      i.format === "online" &&
                                        d.jsx(Sr, {
                                          className:
                                            "h-4 w-4 mr-1.5 text-primary",
                                        }),
                                      i.format === "either" &&
                                        d.jsxs("span", {
                                          className: "flex",
                                          children: [
                                            d.jsx(_r, {
                                              className:
                                                "h-4 w-4 mr-0.5 text-primary",
                                            }),
                                            d.jsx(Sr, {
                                              className:
                                                "h-4 w-4 mr-1.5 text-primary",
                                            }),
                                          ],
                                        }),
                                      i.format.replace("_", " "),
                                    ],
                                  }),
                                ],
                              }),
                              d.jsxs("div", {
                                className: "space-y-1 col-span-2",
                                children: [
                                  d.jsx("span", {
                                    className:
                                      "text-sm font-medium text-muted-foreground block",
                                    children: "Availability",
                                  }),
                                  d.jsx("span", {
                                    className: "font-medium",
                                    children: i.availability,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                d.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    d.jsx("h3", {
                      className: "text-lg font-serif font-bold",
                      children: "About the Student",
                    }),
                    d.jsx(It, {
                      className:
                        "shadow-sm border-border/50 overflow-hidden hover:border-primary/50 transition-colors group",
                      children: d.jsx(Dt, {
                        href: `/students/${i.student.id}`,
                        children: d.jsxs(Gt, {
                          className:
                            "p-6 flex flex-col items-center text-center cursor-pointer",
                          children: [
                            d.jsxs(Qn, {
                              className:
                                "h-24 w-24 border-4 border-background shadow-sm mb-4 group-hover:scale-105 transition-transform",
                              children: [
                                d.jsx(Kn, { src: i.student.avatarUrl }),
                                d.jsx(Zn, {
                                  className: "text-2xl",
                                  children: i.student.name[0],
                                }),
                              ],
                            }),
                            d.jsx("h4", {
                              className:
                                "font-bold text-lg group-hover:text-primary transition-colors",
                              children: i.student.name,
                            }),
                            d.jsxs("p", {
                              className:
                                "text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1",
                              children: [
                                d.jsx(Ho, { className: "h-3 w-3" }),
                                i.student.major,
                              ],
                            }),
                            d.jsxs("div", {
                              className:
                                "flex gap-3 mt-4 text-sm bg-muted/50 px-3 py-2 rounded-lg",
                              children: [
                                d.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    d.jsx(Tm, {
                                      className:
                                        "h-4 w-4 fill-secondary text-secondary",
                                    }),
                                    d.jsx("span", {
                                      className: "font-medium",
                                      children: i.student.rating.toFixed(1),
                                    }),
                                  ],
                                }),
                                d.jsx("div", {
                                  className: "w-px bg-border h-4",
                                }),
                                d.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    d.jsx("span", {
                                      className: "font-medium",
                                      children: i.student.sessionsCompleted,
                                    }),
                                    d.jsx("span", {
                                      className: "text-muted-foreground",
                                      children: "sessions",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            d.jsxs("div", {
                              className:
                                "mt-4 w-full flex items-center justify-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity",
                              children: [
                                "View Profile ",
                                d.jsx(Po, { className: "ml-1 h-4 w-4" }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : d.jsx("div", {
          className:
            "text-center py-20 bg-card rounded-xl border border-dashed max-w-4xl mx-auto",
          children: d.jsx("p", {
            className: "text-lg text-muted-foreground",
            children: "Listing not found.",
          }),
        });
}
function EL() {
  const [t, n] = y.useState("all"),
    { data: r } = Ni({ query: { enabled: !0 } }),
    { data: i, isLoading: l } = oD(
      { status: t === "all" ? void 0 : t },
      { query: { enabled: !0 } },
    ),
    c = (f) => {
      switch (f) {
        case "pending":
          return {
            color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
            icon: li,
          };
        case "accepted":
          return {
            color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
            icon: Uc,
          };
        case "completed":
          return {
            color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
            icon: Uc,
          };
        case "declined":
          return {
            color: "bg-red-500/10 text-red-600 border-red-500/20",
            icon: CC,
          };
        default:
          return {
            color: "bg-muted text-muted-foreground border-border",
            icon: li,
          };
      }
    };
  return d.jsxs("div", {
    className: "space-y-6 animate-in fade-in duration-500 max-w-5xl mx-auto",
    children: [
      d.jsx("div", {
        className:
          "flex flex-col md:flex-row md:items-center justify-between gap-4",
        children: d.jsxs("div", {
          children: [
            d.jsx("h1", {
              className: "text-3xl font-serif font-bold text-foreground",
              children: "My Exchanges",
            }),
            d.jsx("p", {
              className: "text-muted-foreground mt-1",
              children: "Manage your skill swaps and active learning sessions.",
            }),
          ],
        }),
      }),
      d.jsx("div", {
        className:
          "bg-card p-2 rounded-xl border border-border/50 shadow-sm overflow-x-auto",
        children: d.jsx(w1, {
          value: t,
          onValueChange: (f) => n(f),
          className: "w-full",
          children: d.jsxs(Zm, {
            className:
              "w-full justify-start h-auto p-1 bg-transparent flex-nowrap min-w-max",
            children: [
              d.jsx(Da, {
                value: "all",
                className: "data-[state=active]:bg-muted px-4 py-2",
                children: "All",
              }),
              d.jsx(Da, {
                value: "pending",
                className:
                  "data-[state=active]:bg-yellow-500/10 data-[state=active]:text-yellow-700 px-4 py-2",
                children: "Pending",
              }),
              d.jsx(Da, {
                value: "accepted",
                className:
                  "data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-700 px-4 py-2",
                children: "Active",
              }),
              d.jsx(Da, {
                value: "completed",
                className:
                  "data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-700 px-4 py-2",
                children: "Completed",
              }),
              d.jsx(Da, {
                value: "declined",
                className:
                  "data-[state=active]:bg-red-500/10 data-[state=active]:text-red-700 px-4 py-2",
                children: "Declined",
              }),
            ],
          }),
        }),
      }),
      l
        ? d.jsx("div", {
            className:
              "flex items-center justify-center py-20 text-muted-foreground",
            children: d.jsx(La, { className: "h-8 w-8 animate-spin" }),
          })
        : i?.length === 0
          ? d.jsxs("div", {
              className:
                "text-center py-20 bg-card rounded-xl border border-dashed flex flex-col items-center justify-center",
              children: [
                d.jsx("div", {
                  className:
                    "h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4",
                  children: d.jsx(uu, { className: "h-8 w-8 text-primary" }),
                }),
                d.jsx("p", {
                  className: "text-lg font-medium text-foreground mb-1",
                  children: "No exchanges found.",
                }),
                d.jsx("p", {
                  className: "text-muted-foreground mb-6",
                  children: "Start proposing skill swaps with other students!",
                }),
                d.jsx(Dt, {
                  href: "/browse",
                  className:
                    "bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors",
                  children: "Browse Listings",
                }),
              ],
            })
          : d.jsx("div", {
              className: "grid gap-4",
              children: i?.map((f) => {
                const h = f.proposerId === r?.id,
                  g = h ? f.recipient : f.proposer,
                  p = h ? f.offeredSkill : f.requestedSkill,
                  v = h ? f.requestedSkill : f.offeredSkill,
                  b = c(f.status).icon;
                return d.jsx(
                  Dt,
                  {
                    href: `/exchanges/${f.id}`,
                    children: d.jsx(It, {
                      className:
                        "hover:border-primary/50 transition-all cursor-pointer group shadow-sm hover:shadow-md",
                      children: d.jsxs(Gt, {
                        className:
                          "p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center",
                        children: [
                          d.jsxs("div", {
                            className: "flex items-center gap-4 min-w-[200px]",
                            children: [
                              d.jsxs(Qn, {
                                className:
                                  "h-12 w-12 border-2 border-background shadow-sm",
                                children: [
                                  d.jsx(Kn, { src: g.avatarUrl }),
                                  d.jsx(Zn, { children: g.name[0] }),
                                ],
                              }),
                              d.jsxs("div", {
                                children: [
                                  d.jsx("h3", {
                                    className:
                                      "font-semibold text-foreground group-hover:text-primary transition-colors",
                                    children: g.name,
                                  }),
                                  d.jsxs("p", {
                                    className:
                                      "text-xs text-muted-foreground flex items-center gap-1",
                                    children: [
                                      d.jsx(li, { className: "h-3 w-3" }),
                                      Eu(new Date(f.createdAt)),
                                      " ago",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d.jsxs("div", {
                            className:
                              "flex-1 bg-muted/40 rounded-lg p-3 sm:px-6 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2 sm:gap-4 border border-border/50",
                            children: [
                              d.jsxs("div", {
                                className: "text-sm text-center flex-1",
                                children: [
                                  d.jsx("span", {
                                    className:
                                      "text-muted-foreground text-xs block mb-0.5",
                                    children: "You teach",
                                  }),
                                  d.jsx("span", {
                                    className:
                                      "font-medium font-mono bg-background px-2 py-1 rounded border shadow-sm",
                                    children: p.name,
                                  }),
                                ],
                              }),
                              d.jsx("div", {
                                className:
                                  "hidden sm:flex text-muted-foreground mx-2",
                                children: d.jsx(Po, {
                                  className: "h-5 w-5 opacity-50",
                                }),
                              }),
                              d.jsx("div", {
                                className:
                                  "flex sm:hidden text-muted-foreground my-1 justify-center w-full",
                                children: d.jsx(Po, {
                                  className: "h-4 w-4 opacity-50 rotate-90",
                                }),
                              }),
                              d.jsxs("div", {
                                className: "text-sm text-center flex-1",
                                children: [
                                  d.jsx("span", {
                                    className:
                                      "text-muted-foreground text-xs block mb-0.5",
                                    children: "They teach",
                                  }),
                                  d.jsx("span", {
                                    className:
                                      "font-medium font-mono bg-background px-2 py-1 rounded border shadow-sm",
                                    children: v.name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d.jsxs("div", {
                            className:
                              "flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 sm:min-w-[120px]",
                            children: [
                              d.jsxs(Bn, {
                                variant: "outline",
                                className: `${c(f.status).color} px-2.5 py-1 capitalize flex items-center gap-1.5`,
                                children: [
                                  d.jsx(b, { className: "h-3.5 w-3.5" }),
                                  f.status,
                                ],
                              }),
                              d.jsx(xC, {
                                className:
                                  "h-5 w-5 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  },
                  f.id,
                );
              }),
            }),
    ],
  });
}
function NL() {
  const { id: t } = su(),
    n = parseInt(t || "0", 10),
    { data: r } = Ni({ query: { enabled: !0 } }),
    { data: i, isLoading: l } = mD(n, { query: { enabled: !!n } }),
    { data: c, isLoading: f } = SD(n, {
      query: { enabled: !!n, refetchInterval: 5e3 },
    }),
    h = TD(),
    g = vD(),
    p = bi(),
    { toast: v } = Zo(),
    b = y.useRef(null),
    [S, E] = y.useState(""),
    [j, _] = y.useState(!1),
    [N, R] = y.useState(""),
    O = () => {
      if (!N) {
        v({ title: "Please pick a date and time", variant: "destructive" });
        return;
      }
      const ne = new Date(N).toISOString();
      g.mutate(
        { id: n, data: { scheduledAt: ne } },
        {
          onSuccess: () => {
            (v({
              title: "Session scheduled",
              description: Ao(new Date(ne), "EEEE, MMM d 'at' h:mm a"),
            }),
              _(!1),
              p.invalidateQueries({ queryKey: Kh(n) }),
              p.invalidateQueries({ queryKey: Io() }));
          },
          onError: (he) =>
            v({
              title: "Could not schedule",
              description: he.message,
              variant: "destructive",
            }),
        },
      );
    };
  y.useEffect(() => {
    b.current?.scrollIntoView({ behavior: "smooth" });
  }, [c]);
  const D = () => {
      S.trim() &&
        h.mutate(
          { id: n, data: { body: S } },
          {
            onSuccess: () => {
              (E(""), p.invalidateQueries({ queryKey: Zh(n) }));
            },
          },
        );
    },
    z = (ne) => {
      g.mutate(
        { id: n, data: { status: ne } },
        {
          onSuccess: () => {
            (v({ title: `Exchange ${ne}!` }),
              p.invalidateQueries({ queryKey: Kh(n) }),
              p.invalidateQueries({ queryKey: Io() }),
              p.invalidateQueries({ queryKey: Zh(n) }));
          },
          onError: (he) => {
            v({
              title: "Failed to update status",
              description: he.message,
              variant: "destructive",
            });
          },
        },
      );
    };
  if (l)
    return d.jsxs("div", {
      className: "max-w-4xl mx-auto space-y-6",
      children: [
        d.jsx(Mt, { className: "h-32 w-full rounded-xl" }),
        d.jsx(Mt, { className: "h-[500px] w-full rounded-xl" }),
      ],
    });
  if (!i || !r)
    return d.jsx("div", {
      className: "text-center py-20 text-muted-foreground",
      children: "Exchange not found.",
    });
  const M = i.proposerId === r.id,
    Y = M ? i.recipient : i.proposer,
    Q = M ? i.offeredSkill : i.requestedSkill,
    F = M ? i.requestedSkill : i.offeredSkill,
    oe = !M;
  return d.jsxs("div", {
    className:
      "max-w-4xl mx-auto h-[calc(100vh-10rem)] flex flex-col animate-in fade-in duration-500",
    children: [
      d.jsxs("div", {
        className:
          "bg-card rounded-t-xl border border-border/50 border-b-0 p-4 md:p-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center shadow-sm relative z-10",
        children: [
          d.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              d.jsx(Dt, {
                href: `/students/${Y.id}`,
                children: d.jsxs(Qn, {
                  className:
                    "h-12 w-12 md:h-14 md:w-14 border-2 border-background shadow-sm cursor-pointer hover:border-primary transition-colors",
                  children: [
                    d.jsx(Kn, { src: Y.avatarUrl }),
                    d.jsx(Zn, { children: Y.name[0] }),
                  ],
                }),
              }),
              d.jsxs("div", {
                children: [
                  d.jsx("h2", {
                    className: "font-serif font-bold text-lg leading-tight",
                    children: d.jsx(Dt, {
                      href: `/students/${Y.id}`,
                      className: "hover:text-primary transition-colors",
                      children: Y.name,
                    }),
                  }),
                  d.jsxs("div", {
                    className: "flex items-center gap-2 mt-1",
                    children: [
                      d.jsx(Bn, {
                        variant: "outline",
                        className: `px-2 py-0.5 capitalize text-xs ${i.status === "pending" ? "bg-yellow-500/10 text-yellow-700 border-yellow-500/20" : i.status === "accepted" ? "bg-blue-500/10 text-blue-700 border-blue-500/20" : i.status === "completed" ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/20" : "bg-red-500/10 text-red-700 border-red-500/20"}`,
                        children: i.status,
                      }),
                      i.scheduledAt &&
                        d.jsxs("span", {
                          className:
                            "text-xs text-muted-foreground flex items-center gap-1",
                          children: [
                            d.jsx(dh, { className: "h-3 w-3" }),
                            Ao(new Date(i.scheduledAt), "MMM d, h:mm a"),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          d.jsx("div", {
            className:
              "flex flex-col items-center bg-muted/40 rounded-lg px-4 py-2 border border-border/50 w-full md:w-auto",
            children: d.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                d.jsx("span", {
                  className:
                    "font-mono text-xs font-medium px-2 py-1 bg-background rounded shadow-sm",
                  children: Q.name,
                }),
                d.jsx(Po, { className: "h-4 w-4 text-muted-foreground" }),
                d.jsx("span", {
                  className:
                    "font-mono text-xs font-medium px-2 py-1 bg-background rounded shadow-sm",
                  children: F.name,
                }),
              ],
            }),
          }),
        ],
      }),
      i.status === "pending" &&
        oe &&
        d.jsxs("div", {
          className:
            "bg-yellow-500/10 border-x border-y border-yellow-500/20 p-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-yellow-800",
          children: [
            d.jsxs("span", {
              className: "font-medium flex items-center gap-2",
              children: [
                d.jsx(li, { className: "h-4 w-4" }),
                " ",
                Y.name.split(" ")[0],
                " proposed this exchange.",
              ],
            }),
            d.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                d.jsx(bt, {
                  size: "sm",
                  variant: "outline",
                  className:
                    "border-yellow-500/30 text-yellow-700 hover:bg-yellow-500/20",
                  onClick: () => z("declined"),
                  disabled: g.isPending,
                  children: "Decline",
                }),
                d.jsx(bt, {
                  size: "sm",
                  className: "bg-yellow-500 hover:bg-yellow-600 text-white",
                  onClick: () => z("accepted"),
                  disabled: g.isPending,
                  children: "Accept Proposal",
                }),
              ],
            }),
          ],
        }),
      i.status === "accepted" &&
        d.jsxs("div", {
          className:
            "bg-blue-500/10 border-x border-y border-blue-500/20 p-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-800",
          children: [
            d.jsx("span", {
              className: "font-medium flex items-center gap-2",
              children: i.scheduledAt
                ? d.jsxs(d.Fragment, {
                    children: [
                      d.jsx(dh, { className: "h-4 w-4" }),
                      "Session scheduled for ",
                      Ao(new Date(i.scheduledAt), "EEEE, MMM d 'at' h:mm a"),
                    ],
                  })
                : "This exchange is active. Pick a time and meet up.",
            }),
            d.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                d.jsxs(Xm, {
                  open: j,
                  onOpenChange: _,
                  children: [
                    d.jsx(Wm, {
                      asChild: !0,
                      children: d.jsxs(bt, {
                        size: "sm",
                        variant: "outline",
                        className:
                          "border-blue-500/30 text-blue-700 hover:bg-blue-500/20",
                        onClick: () => {
                          R(
                            i.scheduledAt
                              ? Ao(
                                  new Date(i.scheduledAt),
                                  "yyyy-MM-dd'T'HH:mm",
                                )
                              : "",
                          );
                        },
                        children: [
                          d.jsx(dh, { className: "h-4 w-4 mr-2" }),
                          i.scheduledAt ? "Reschedule" : "Schedule a session",
                        ],
                      }),
                    }),
                    d.jsxs(Au, {
                      className: "sm:max-w-[420px]",
                      children: [
                        d.jsxs(Mu, {
                          children: [
                            d.jsx(ku, { children: "Schedule your session" }),
                            d.jsxs(Lu, {
                              children: [
                                "Pick a time that works for both you and ",
                                Y.name.split(" ")[0],
                                ".",
                              ],
                            }),
                          ],
                        }),
                        d.jsx("div", {
                          className: "grid gap-4 py-2",
                          children: d.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              d.jsx(qa, {
                                htmlFor: "scheduled-at",
                                children: "Date & time",
                              }),
                              d.jsx(hi, {
                                id: "scheduled-at",
                                type: "datetime-local",
                                value: N,
                                onChange: (ne) => R(ne.target.value),
                              }),
                            ],
                          }),
                        }),
                        d.jsxs(Du, {
                          children: [
                            d.jsx(bt, {
                              variant: "outline",
                              onClick: () => _(!1),
                              children: "Cancel",
                            }),
                            d.jsxs(bt, {
                              onClick: O,
                              disabled: g.isPending,
                              children: [
                                g.isPending &&
                                  d.jsx(La, {
                                    className: "mr-2 h-4 w-4 animate-spin",
                                  }),
                                "Save",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsxs(bt, {
                  size: "sm",
                  className: "bg-blue-500 hover:bg-blue-600 text-white",
                  onClick: () => z("completed"),
                  disabled: g.isPending,
                  children: [
                    d.jsx(Uc, { className: "h-4 w-4 mr-2" }),
                    " Mark as Completed",
                  ],
                }),
              ],
            }),
          ],
        }),
      d.jsx("div", {
        className:
          "flex-1 bg-card/50 border-x border-border/50 flex flex-col overflow-hidden",
        children: d.jsxs("div", {
          className: "flex-1 overflow-y-auto p-4 md:p-6 space-y-6",
          children: [
            f
              ? d.jsx("div", {
                  className: "flex justify-center",
                  children: d.jsx(La, {
                    className: "h-6 w-6 animate-spin text-muted-foreground",
                  }),
                })
              : c?.length === 0
                ? d.jsxs("div", {
                    className:
                      "text-center text-muted-foreground h-full flex flex-col items-center justify-center",
                    children: [
                      d.jsx(uu, { className: "h-8 w-8 mb-2 opacity-20" }),
                      d.jsx("p", { children: "No messages yet." }),
                    ],
                  })
                : c?.map((ne, he) => {
                    const J = ne.senderId === r.id,
                      se = J ? r : Y,
                      ee = he === 0 || c[he - 1].senderId !== ne.senderId;
                    return d.jsxs(
                      "div",
                      {
                        className: `flex gap-3 max-w-[80%] ${J ? "ml-auto flex-row-reverse" : ""}`,
                        children: [
                          d.jsx("div", {
                            className: `shrink-0 w-8 ${!ee && "opacity-0"}`,
                            children: d.jsxs(Qn, {
                              className: "h-8 w-8 shadow-sm",
                              children: [
                                d.jsx(Kn, { src: se.avatarUrl }),
                                d.jsx(Zn, { children: se.name[0] }),
                              ],
                            }),
                          }),
                          d.jsxs("div", {
                            className: `flex flex-col ${J ? "items-end" : "items-start"}`,
                            children: [
                              ee &&
                                d.jsx("span", {
                                  className:
                                    "text-xs text-muted-foreground mb-1 ml-1",
                                  children: se.name.split(" ")[0],
                                }),
                              d.jsx("div", {
                                className: `px-4 py-2.5 rounded-2xl text-sm whitespace-pre-wrap shadow-sm ${J ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-card border border-border/50 rounded-tl-sm text-foreground"}`,
                                children: ne.body,
                              }),
                              d.jsx("span", {
                                className:
                                  "text-[10px] text-muted-foreground mt-1 opacity-50",
                                children: Ao(new Date(ne.createdAt), "h:mm a"),
                              }),
                            ],
                          }),
                        ],
                      },
                      ne.id,
                    );
                  }),
            d.jsx("div", { ref: b }),
          ],
        }),
      }),
      d.jsxs("div", {
        className:
          "bg-card p-4 rounded-b-xl border border-border/50 shadow-sm mt-0 relative z-10",
        children: [
          d.jsxs("div", {
            className: "flex gap-2 items-end",
            children: [
              d.jsx(sl, {
                placeholder:
                  i.status === "declined"
                    ? "Exchange declined. Cannot send messages."
                    : "Type your message...",
                className: "min-h-[60px] max-h-[120px] resize-y bg-background",
                value: S,
                onChange: (ne) => E(ne.target.value),
                onKeyDown: (ne) => {
                  ne.key === "Enter" &&
                    !ne.shiftKey &&
                    (ne.preventDefault(), D());
                },
                disabled: i.status === "declined",
              }),
              d.jsx(bt, {
                className: "h-11 w-11 shrink-0 rounded-full",
                onClick: D,
                disabled: !S.trim() || h.isPending || i.status === "declined",
                size: "icon",
                children: h.isPending
                  ? d.jsx(La, { className: "h-5 w-5 animate-spin" })
                  : d.jsx(FC, { className: "h-5 w-5 ml-0.5" }),
              }),
            ],
          }),
          d.jsx("p", {
            className: "text-[10px] text-muted-foreground mt-2 text-center",
            children: "Press Enter to send, Shift+Enter for new line",
          }),
        ],
      }),
    ],
  });
}
const TL = new WT();
function jL() {
  return d.jsx(QD, {
    children: d.jsxs(CT, {
      children: [
        d.jsx(Ra, { path: "/", component: u4 }),
        d.jsx(Ra, { path: "/browse", component: a3 }),
        d.jsx(Ra, { path: "/students", component: r3 }),
        d.jsx(Ra, { path: "/students/:id", component: l3 }),
        d.jsx(Ra, { path: "/listings/new", component: SL }),
        d.jsx(Ra, { path: "/listings/:id", component: _L }),
        d.jsx(Ra, { path: "/exchanges", component: EL }),
        d.jsx(Ra, { path: "/exchanges/:id", component: NL }),
        d.jsx(Ra, { component: KD }),
      ],
    }),
  });
}
function CL() {
  return d.jsx(JT, {
    client: TL,
    children: d.jsxs(Gw, {
      children: [
        d.jsx(n0, { base: "/".replace(/\/$/, ""), children: d.jsx(jL, {}) }),
        d.jsx(BO, {}),
      ],
    }),
  });
}
cT.createRoot(document.getElementById("root")).render(d.jsx(CL, {}));
