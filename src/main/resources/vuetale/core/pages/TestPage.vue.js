import { defineComponent as b, ref as s, onBeforeUnmount as G, openBlock as v, createElementBlock as d, createVNode as l, unref as t, withCtx as T, createElementVNode as u, toDisplayString as a, createBlock as I, createCommentVNode as D, Fragment as R, renderList as S } from "vue";
import { Common as r } from "../components/Common.js";
import { Core as x } from "../components/core/index.js";
import { useData as i } from "../composables/useData.js";
const N = { anchor: { Full: 1, Left: 0, Right: 0 } }, W = {
  "layout-mode": "Top",
  "flex-weight": 1,
  anchor: { Full: 1 },
  background: { Color: "#444444" }
}, w = { "layout-mode": "TopScrolling" }, j = /* @__PURE__ */ b({
  __name: "TestPage",
  setup(K) {
    console.log("WORKS!");
    const C = i("testFn", () => {
    }), E = i("testFn2", (e, n) => {
    });
    function F() {
      console.log("CLICKED ME"), m.value = !m.value, C.value(), console.log("Return of testFn2: ", E.value(123, "hello"));
    }
    const m = s(!1), p = s("nothing yet"), _ = i("test"), V = i("test2"), y = i("counter"), o = s([]);
    function A() {
      o.value.push({ name: `Entry ${o.value.length + 1}`, toggle: !1 });
    }
    function B(e) {
      o.value.splice(e, 1);
    }
    function k(e) {
      if (e > 0) {
        const n = o.value[e];
        o.value[e] = o.value[e - 1], o.value[e - 1] = n;
      }
    }
    const h = s(0), f = s(0), H = setInterval(() => {
      h.value++;
    }, 1e3), L = setInterval(() => {
      f.value++;
    }, 1500);
    return G(() => {
      clearInterval(H), clearInterval(L);
    }), (e, n) => (v(), d("Group", N, [
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
          u("Group", W, [
            u("Group", null, [
              u("Label", null, a(p.value) + " | " + a(t(_)) + " " + a(t(V)?.a) + " " + a(t(y)) + " | Counter1: " + a(h.value) + " | Counter2: " + a(f.value), 1)
            ]),
            n[1] || (n[1] = u("TextField", null, null, -1)),
            l(t(r).TextButton, {
              text: "Example test",
              onActivating: F,
              anchor: { Height: 20, Top: 80 }
            }),
            m.value ? (v(), I(t(x).TextField, {
              key: 0,
              decoration: { Default: {} },
              modelValue: p.value,
              "onUpdate:modelValue": n[0] || (n[0] = (c) => p.value = c),
              anchor: { Height: 120, Top: 10, Width: 200 }
            }, null, 8, ["modelValue"])) : D("", !0),
            u("Group", w, [
              (v(!0), d(R, null, S(o.value, (c, g) => (v(), d("Group", {
                key: g,
                anchor: { Height: 200 }
              }, [
                u("Label", null, a(c.name), 1),
                l(t(x).TextField, {
                  modelValue: c.name,
                  "onUpdate:modelValue": (U) => c.name = U
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                l(t(r).TextButton, {
                  text: "Remove",
                  onActivating: () => B(g),
                  anchor: { Height: 20, Top: 5, Left: 100 }
                }, null, 8, ["onActivating"]),
                l(t(r).TextButton, {
                  text: "Up",
                  onActivating: () => k(g),
                  anchor: { Height: 20, Top: 5, Left: 160 }
                }, null, 8, ["onActivating"])
              ]))), 128)),
              l(t(r).TextButton, {
                text: "Add Entry",
                onActivating: A,
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
  j as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFBhZ2UudnVlLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
