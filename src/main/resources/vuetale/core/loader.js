import { shallowReactive as i, ref as A } from "vue";
import { hytaleRenderer as m } from "./renderer.js";
import v from "./components/App.vue.js";
/* empty css                    */
import { flushPendingStyles as T, applyStyles as h } from "./styles.js";
function b(e, t) {
  globalThis[e] = t;
}
const p = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
function R(e, t, o) {
  let n = r.get(e);
  n || (n = i({}), r.set(e, n));
  let s = o;
  try {
    if (o && typeof o == "object" && "_vtHostFnId" in o) {
      const a = o._vtHostFnId;
      s = function(...g) {
        try {
          return ktBridge.invokeHostCallback(a, ...g);
        } catch (l) {
          throw console.error("invokeHostCallback failed for", a, l), l;
        }
      };
    }
  } catch (a) {
    console.error("setAppData: failed to convert host callback marker", a);
  }
  n[t] = s;
}
function O(e, t) {
  const o = r.get(e);
  if (o)
    return o[t];
}
const _ = /* @__PURE__ */ new Map();
function P(e, t) {
  _.set(e, t);
}
function y(e) {
  return _.get(e);
}
function w(e) {
  const t = p.get(e);
  if (t) {
    try {
      typeof globalThis.__vt_cancelTimersForApp == "function" && globalThis.__vt_cancelTimersForApp(e);
    } catch {
    }
    t.unmount(), p.delete(e), c.delete(e), f.delete(e), r.delete(e);
  }
}
function S(e, t) {
  console.log("Creating user app", e, t ?? "(no component)"), T(), r.has(e) || r.set(e, i({}));
  const o = A(t);
  u.set(e, o);
  const n = m(e).createApp(v);
  return n.provide("appId", e), n.provide("componentPathRef", o), p.set(e, n), n;
}
function U(e, t) {
  const o = u.get(e);
  o ? (o.value = t, console.log("navigateTo", e, t)) : console.warn("navigateTo: no app found with id", e);
}
function E(e) {
  return p.get(e);
}
function M(e) {
  return c.get(e);
}
function D(e) {
  return f.get(e);
}
function C(e, t) {
  const o = {
    _vtContainerId: e,
    getRoot: () => t.root
  };
  Object.defineProperty(o, "_vnode", { value: null, writable: !0, enumerable: !1, configurable: !0 }), Object.defineProperty(o, "__vue_app__", { value: null, writable: !0, enumerable: !1, configurable: !0 }), c.set(e, o);
}
b("_vt", {
  applyStyles: h,
  createUserApp: S,
  getUserApp: E,
  getUserAppRef: M,
  registerUserAppRef: C,
  removeUserApp: w,
  navigateTo: U,
  registerComponent: P,
  setAppData: R,
  getRegisteredComponent: y,
  cancelTimersForApp: (e) => {
    try {
      typeof globalThis.__vt_cancelTimersForApp == "function" && globalThis.__vt_cancelTimersForApp(e);
    } catch {
    }
  },
  USER_APPS_REF: c,
  USER_APPS_DATA: r
});
export {
  p as USER_APPS,
  r as USER_APPS_DATA,
  f as USER_APPS_META,
  c as USER_APPS_REF,
  S as createUserApp,
  O as getAppData,
  y as getRegisteredComponent,
  E as getUserApp,
  D as getUserAppMeta,
  M as getUserAppRef,
  U as navigateTo,
  P as registerComponent,
  C as registerUserAppRef,
  w as removeUserApp,
  R as setAppData
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
