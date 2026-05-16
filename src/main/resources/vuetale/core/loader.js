import { reactive as h, shallowReactive as u, ref as m } from "vue";
import { hytaleRenderer as v } from "./renderer.js";
import y from "./components/App.vue.js";
/* empty css                    */
import { flushPendingStyles as k, applyStyles as T } from "./styles.js";
function d(t, o) {
  globalThis[t] = o;
}
const l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), A = h(/* @__PURE__ */ new Map());
function G(t, o, e) {
  let n = f.get(t);
  n || (n = u({}), f.set(t, n));
  let a = e;
  try {
    if (e && typeof e == "object" && "_vtHostFnId" in e) {
      const r = e._vtHostFnId;
      a = function(...p) {
        try {
          return ktBridge.invokeHostCallback(r, ...p);
        } catch (s) {
          throw console.error("invokeHostCallback failed for", r, s), s;
        }
      };
    }
  } catch (r) {
    console.error("setPlayerData: failed to convert host callback marker", r);
  }
  n[o] = a;
}
function B(t, o) {
  let e = o;
  try {
    if (o && typeof o == "object" && "_vtHostFnId" in o) {
      const n = o._vtHostFnId;
      e = function(...a) {
        try {
          return ktBridge.invokeHostCallback(n, ...a);
        } catch (r) {
          throw console.error("invokeHostCallback failed for", n, r), r;
        }
      };
    }
  } catch (n) {
    console.error("setGlobalData: failed to convert host callback marker", n);
  }
  A.set(t, e);
}
function P(t, o, e) {
  let n = c.get(t);
  n || (n = u({}), c.set(t, n));
  let a = e;
  try {
    if (e && typeof e == "object" && "_vtHostFnId" in e) {
      const r = e._vtHostFnId;
      a = function(...p) {
        try {
          return ktBridge.invokeHostCallback(r, ...p);
        } catch (s) {
          throw console.error("invokeHostCallback failed for", r, s), s;
        }
      };
    }
  } catch (r) {
    console.error("setAppData: failed to convert host callback marker", r);
  }
  n[o] = a;
}
function N(t, o) {
  const e = c.get(t);
  if (e)
    return e[o];
}
function L(t, o) {
  const e = f.get(t);
  if (e)
    return e[o];
}
function V(t) {
  return A.get(t);
}
const b = /* @__PURE__ */ new Map();
function R(t, o) {
  b.set(t, o);
}
function w(t) {
  return b.get(t);
}
function H(t) {
  const o = l.get(t);
  if (o) {
    try {
      typeof globalThis.__vt_cancelTimersForApp == "function" && globalThis.__vt_cancelTimersForApp(t);
    } catch {
    }
    o.unmount(), l.delete(t), i.delete(t), _.delete(t), c.delete(t);
  }
}
function C(t, o) {
  console.log("Creating user app", t, o ?? "(no component)"), k(), c.has(t) || c.set(t, u({}));
  const e = m(o);
  g.set(t, e);
  const n = v(t).createApp(y);
  return n.provide("appId", t), n.provide("componentPathRef", e), l.set(t, n), n;
}
function D(t, o) {
  const e = g.get(t);
  e ? (e.value = o, console.log("navigateTo", t, o)) : console.warn("navigateTo: no app found with id", t);
}
function F(t) {
  return l.get(t);
}
function I(t) {
  return i.get(t);
}
function x(t) {
  return _.get(t);
}
function M(t, o) {
  const e = {
    _vtContainerId: t,
    getRoot: () => o.root
  };
  Object.defineProperty(e, "_vnode", { value: null, writable: !0, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "__vue_app__", { value: null, writable: !0, enumerable: !1, configurable: !0 }), i.set(t, e);
}
d("_vt", {
  applyStyles: T,
  createUserApp: C,
  getUserApp: F,
  getUserAppRef: I,
  registerUserAppRef: M,
  removeUserApp: H,
  navigateTo: D,
  registerComponent: R,
  setAppData: P,
  getRegisteredComponent: w,
  cancelTimersForApp: (t) => {
    try {
      typeof globalThis.__vt_cancelTimersForApp == "function" && globalThis.__vt_cancelTimersForApp(t);
    } catch {
    }
  },
  USER_APPS_REF: i,
  USER_APPS_DATA: c
});
export {
  A as GLOBAL_DATA,
  f as PLAYER_DATA,
  l as USER_APPS,
  c as USER_APPS_DATA,
  _ as USER_APPS_META,
  i as USER_APPS_REF,
  C as createUserApp,
  N as getAppData,
  V as getGlobalData,
  L as getPlayerData,
  w as getRegisteredComponent,
  F as getUserApp,
  x as getUserAppMeta,
  I as getUserAppRef,
  D as navigateTo,
  R as registerComponent,
  M as registerUserAppRef,
  H as removeUserApp,
  P as setAppData,
  B as setGlobalData,
  G as setPlayerData
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
