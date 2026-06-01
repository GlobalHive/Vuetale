import { defineComponent as N, ref as i, onBeforeUnmount as b, openBlock as d, createElementBlock as h, createVNode as a, unref as t, withCtx as v, createElementVNode as u, toDisplayString as n, createBlock as M, createCommentVNode as G, Fragment as w, renderList as D } from "vue";
import { Common as r } from "../components/Common.js";
import { Core as f } from "../components/core/index.js";
import { useData as c } from "../composables/useData.js";
import { $asset as T } from "../assets.js";
const S = { anchor: { Full: 1, Left: 0, Right: 0 } }, W = {
  "layout-mode": "Top",
  "flex-weight": 1,
  anchor: { Full: 1 },
  background: { Color: "#444444" }
}, K = ["background"], $ = { "layout-mode": "TopScrolling" }, m = /* @__PURE__ */ N({
  __name: "TestPage",
  setup(E) {
    console.log("WORKS!");
    const x = c("testFn", () => {
    }), V = c("testFn2", (e, l) => {
    });
    function H() {
      console.log("CLICKED ME"), _.value = !_.value, x.value(), console.log("Return of testFn2: ", V.value(123, "hello")), R.value();
    }
    const _ = i(!1), p = i("nothing yet"), U = c("test"), C = c("test2"), F = c("counter"), R = c("close", () => {
    }), o = i([]);
    function y() {
      o.value.push({ name: `Entry ${o.value.length + 1}`, toggle: !1 });
    }
    function k(e) {
      o.value.splice(e, 1);
    }
    function I(e) {
      if (e > 0) {
        const l = o.value[e];
        o.value[e] = o.value[e - 1], o.value[e - 1] = l;
      }
    }
    const L = i(0), A = i(0);
    return b(() => {
    }), (e, l) => (d(), h("Group", S, [
      a(t(r).Container, {
        anchor: { Height: 800, Width: 600 },
        "close-button": !0
      }, {
        title: v(() => [
          a(t(r).Title, {
            class: "",
            text: _.value ? "Title example" : "Anotherx title"
          }, null, 8, ["text"])
        ]),
        content: v(() => [
          u("Group", W, [
            u("Group", null, [
              u("Label", null, n(p.value) + " | " + n(t(U)) + " " + n(t(C)?.a) + " " + n(t(F)) + " | Counter1: " + n(L.value) + " | " + n(t(T)("VuetaleLogo.png")) + " c: " + n(A.value), 1)
            ]),
            l[1] || (l[1] = u("TextField", null, null, -1)),
            a(t(r).TextButton, {
              text: "Example test",
              onActivating: H,
              anchor: { Height: 20, Top: 80 }
            }),
            _.value ? (d(), M(t(f).TextField, {
              key: 0,
              decoration: { Default: {} },
              modelValue: p.value,
              "onUpdate:modelValue": l[0] || (l[0] = (s) => p.value = s),
              anchor: { Height: 120, Top: 10, Width: 200 }
            }, null, 8, ["modelValue"])) : G("", !0),
            u("Group", {
              background: t(T)("VuetaleLogo.png"),
              anchor: { Width: 200, Height: 300 }
            }, null, 8, K),
            u("Group", $, [
              (d(!0), h(w, null, D(o.value, (s, g) => (d(), h("Group", {
                key: g,
                anchor: { Height: 200 }
              }, [
                u("Label", null, n(s.name), 1),
                a(t(f).TextField, {
                  modelValue: s.name,
                  "onUpdate:modelValue": (B) => s.name = B
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                a(t(r).TextButton, {
                  text: "Remove",
                  onActivating: () => k(g),
                  anchor: { Height: 20, Top: 5, Left: 100 }
                }, null, 8, ["onActivating"]),
                a(t(r).TextButton, {
                  text: "Up",
                  onActivating: () => I(g),
                  anchor: { Height: 20, Top: 5, Left: 160 }
                }, null, 8, ["onActivating"])
              ]))), 128)),
              a(t(r).TextButton, {
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
