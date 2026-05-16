import { defineComponent as G, ref as i, onBeforeUnmount as I, openBlock as v, createElementBlock as d, createVNode as l, unref as t, withCtx as T, createElementVNode as u, toDisplayString as a, createBlock as D, createCommentVNode as R, Fragment as S, renderList as N } from "vue";
import { Common as r } from "../components/Common.js";
import { Core as x } from "../components/core/index.js";
import { useData as c } from "../composables/useData.js";
const W = { anchor: { Full: 1, Left: 0, Right: 0 } }, w = {
  "layout-mode": "Top",
  "flex-weight": 1,
  anchor: { Full: 1 },
  background: { Color: "#444444" }
}, K = { "layout-mode": "TopScrolling" }, q = /* @__PURE__ */ G({
  __name: "TestPage",
  setup(M) {
    console.log("WORKS!");
    const C = c("testFn", () => {
    }), E = c("testFn2", (e, n) => {
    });
    function F() {
      console.log("CLICKED ME"), m.value = !m.value, C.value(), console.log("Return of testFn2: ", E.value(123, "hello")), A.value();
    }
    const m = i(!1), p = i("nothing yet"), _ = c("test"), V = c("test2"), y = c("counter"), A = c("close", () => {
    }), o = i([]);
    function B() {
      o.value.push({ name: `Entry ${o.value.length + 1}`, toggle: !1 });
    }
    function k(e) {
      o.value.splice(e, 1);
    }
    function H(e) {
      if (e > 0) {
        const n = o.value[e];
        o.value[e] = o.value[e - 1], o.value[e - 1] = n;
      }
    }
    const h = i(0), f = i(0), L = setInterval(() => {
      h.value++;
    }, 1e3), U = setInterval(() => {
      f.value++;
    }, 1500);
    return I(() => {
      clearInterval(L), clearInterval(U);
    }), (e, n) => (v(), d("Group", W, [
      l(t(r).Container, {
        anchor: { Height: 800, Width: 600 },
        "close-button": !0
      }, {
        title: T(() => [
          l(t(r).Title, {
            class: "",
            text: m.value ? "Title example" : "Anotherx title"
          }, null, 8, ["text"])
        ]),
        content: T(() => [
          u("Group", w, [
            u("Group", null, [
              u("Label", null, a(p.value) + " | " + a(t(_)) + " " + a(t(V)?.a) + " " + a(t(y)) + " | Counter1: " + a(h.value) + " | Counter c: " + a(f.value), 1)
            ]),
            n[1] || (n[1] = u("TextField", null, null, -1)),
            l(t(r).TextButton, {
              text: "Example test",
              onActivating: F,
              anchor: { Height: 20, Top: 80 }
            }),
            m.value ? (v(), D(t(x).TextField, {
              key: 0,
              decoration: { Default: {} },
              modelValue: p.value,
              "onUpdate:modelValue": n[0] || (n[0] = (s) => p.value = s),
              anchor: { Height: 120, Top: 10, Width: 200 }
            }, null, 8, ["modelValue"])) : R("", !0),
            u("Group", K, [
              (v(!0), d(S, null, N(o.value, (s, g) => (v(), d("Group", {
                key: g,
                anchor: { Height: 200 }
              }, [
                u("Label", null, a(s.name), 1),
                l(t(x).TextField, {
                  modelValue: s.name,
                  "onUpdate:modelValue": (b) => s.name = b
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                l(t(r).TextButton, {
                  text: "Remove",
                  onActivating: () => k(g),
                  anchor: { Height: 20, Top: 5, Left: 100 }
                }, null, 8, ["onActivating"]),
                l(t(r).TextButton, {
                  text: "Up",
                  onActivating: () => H(g),
                  anchor: { Height: 20, Top: 5, Left: 160 }
                }, null, 8, ["onActivating"])
              ]))), 128)),
              l(t(r).TextButton, {
                text: "Add Entry",
                onActivating: B,
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
export {
  q as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFBhZ2UudnVlLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
