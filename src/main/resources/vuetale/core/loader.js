import { shallowReactive as u, ref as h } from "vue";
import { hytaleRenderer as m } from "./renderer.js";
import v from "./components/App.vue.js";
/* empty css                    */
import { flushPendingStyles as y, applyStyles as k } from "./styles.js";
function T(t, o) {
  globalThis[t] = o;
}
const l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
function j(t, o, e) {
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
function G(t, o) {
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
function d(t, o, e) {
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
function B(t, o) {
  const e = c.get(t);
  if (e)
    return e[o];
}
function N(t, o) {
  const e = f.get(t);
  if (e)
    return e[o];
}
function L(t) {
  return A.get(t);
}
const b = /* @__PURE__ */ new Map();
function P(t, o) {
  b.set(t, o);
}
function R(t) {
  return b.get(t);
}
function w(t) {
  const o = l.get(t);
  if (o) {
    try {
      typeof globalThis.__vt_cancelTimersForApp == "function" && globalThis.__vt_cancelTimersForApp(t);
    } catch {
    }
    o.unmount(), l.delete(t), i.delete(t), _.delete(t), c.delete(t);
  }
}
function H(t, o) {
  console.log("Creating user app", t, o ?? "(no component)"), y(), c.has(t) || c.set(t, u({}));
  const e = h(o);
  g.set(t, e);
  const n = m(t).createApp(v);
  return n.provide("appId", t), n.provide("componentPathRef", e), l.set(t, n), n;
}
function C(t, o) {
  const e = g.get(t);
  e ? (e.value = o, console.log("navigateTo", t, o)) : console.warn("navigateTo: no app found with id", t);
}
function D(t) {
  return l.get(t);
}
function F(t) {
  return i.get(t);
}
function V(t) {
  return _.get(t);
}
function I(t, o) {
  const e = {
    _vtContainerId: t,
    getRoot: () => o.root
  };
  Object.defineProperty(e, "_vnode", { value: null, writable: !0, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "__vue_app__", { value: null, writable: !0, enumerable: !1, configurable: !0 }), i.set(t, e);
}
T("_vt", {
  applyStyles: k,
  createUserApp: H,
  getUserApp: D,
  getUserAppRef: F,
  registerUserAppRef: I,
  removeUserApp: w,
  navigateTo: C,
  registerComponent: P,
  setAppData: d,
  getRegisteredComponent: R,
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
  H as createUserApp,
  B as getAppData,
  L as getGlobalData,
  N as getPlayerData,
  R as getRegisteredComponent,
  D as getUserApp,
  V as getUserAppMeta,
  F as getUserAppRef,
  C as navigateTo,
  P as registerComponent,
  I as registerUserAppRef,
  w as removeUserApp,
  d as setAppData,
  G as setGlobalData,
  j as setPlayerData
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
