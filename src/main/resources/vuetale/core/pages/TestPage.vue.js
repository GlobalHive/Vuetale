import { defineComponent as M, ref as i, onBeforeUnmount as b, openBlock as v, createElementBlock as h, createVNode as l, unref as t, withCtx as T, createElementVNode as u, toDisplayString as a, createBlock as G, createCommentVNode as w, Fragment as D, renderList as S } from "vue";
import { Common as r } from "../components/Common.js";
import { Core as E } from "../components/core/index.js";
import { useData as c } from "../composables/useData.js";
const W = { anchor: { Full: 1, Left: 0, Right: 0 } }, K = {
  "layout-mode": "Top",
  "flex-weight": 1,
  anchor: { Full: 1 },
  background: { Color: "#444444" }
}, O = { "layout-mode": "TopScrolling" }, m = /* @__PURE__ */ M({
  __name: "TestPage",
  setup(x) {
    console.log("WORKS!");
    const I = c("testFn", () => {
    }), V = c("testFn2", (e, n) => {
    });
    function C() {
      console.log("CLICKED ME"), _.value = !_.value, I.value(), console.log("Return of testFn2: ", V.value(123, "hello")), R.value();
    }
    const _ = i(!1), d = i("nothing yet"), U = c("test"), F = c("test2"), H = c("counter"), R = c("close", () => {
    }), o = i([]);
    function y() {
      o.value.push({ name: `Entry ${o.value.length + 1}`, toggle: !1 });
    }
    function A(e) {
      o.value.splice(e, 1);
    }
    function B(e) {
      if (e > 0) {
        const n = o.value[e];
        o.value[e] = o.value[e - 1], o.value[e - 1] = n;
      }
    }
    const g = i(0), f = i(0), N = setInterval(() => {
      g.value++;
    }, 1e3), k = setInterval(() => {
      f.value++;
    }, 1500);
    return b(() => {
      clearInterval(N), clearInterval(k);
    }), (e, n) => (v(), h("Group", W, [
      l(t(r).Container, {
        anchor: { Height: 800, Width: 600 },
        "close-button": !0
      }, {
        title: T(() => [
          l(t(r).Title, {
            class: "",
            text: _.value ? "Title example" : "Anotherx title"
          }, null, 8, ["text"])
        ]),
        content: T(() => [
          u("Group", K, [
            u("Group", null, [
              u("Label", null, a(d.value) + " | " + a(t(U)) + " " + a(t(F)?.a) + " " + a(t(H)) + " | Counter1: " + a(g.value) + " | Counter2: " + a(f.value), 1)
            ]),
            n[1] || (n[1] = u("TextField", null, null, -1)),
            l(t(r).TextButton, {
              text: "Example test",
              onActivating: C,
              anchor: { Height: 20, Top: 80 }
            }),
            _.value ? (v(), G(t(E).TextField, {
              key: 0,
              decoration: { Default: {} },
              modelValue: d.value,
              "onUpdate:modelValue": n[0] || (n[0] = (s) => d.value = s),
              anchor: { Height: 120, Top: 10, Width: 200 }
            }, null, 8, ["modelValue"])) : w("", !0),
            u("Group", O, [
              (v(!0), h(D, null, S(o.value, (s, p) => (v(), h("Group", {
                key: p,
                anchor: { Height: 200 }
              }, [
                u("Label", null, a(s.name), 1),
                l(t(E).TextField, {
                  modelValue: s.name,
                  "onUpdate:modelValue": (L) => s.name = L
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                l(t(r).TextButton, {
                  text: "Remove",
                  onActivating: () => A(p),
                  anchor: { Height: 20, Top: 5, Left: 100 }
                }, null, 8, ["onActivating"]),
                l(t(r).TextButton, {
                  text: "Up",
                  onActivating: () => B(p),
                  anchor: { Height: 20, Top: 5, Left: 160 }
                }, null, 8, ["onActivating"])
              ]))), 128)),
              l(t(r).TextButton, {
                text: "Add Entry",
                onActivating: y,
                anchor: { Height: 20, Top: 10 }
              })
            ])
          ])
        ]),
        _: 1
      })
    ]));
  }
});
m.__hmrId = "265dd60d";
typeof __VUE_HMR_RUNTIME__ < "u" && (__VUE_HMR_RUNTIME__.createRecord(m.__hmrId, m) || __VUE_HMR_RUNTIME__.reload(m.__hmrId, m));
export {
  m as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFBhZ2UudnVlLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
