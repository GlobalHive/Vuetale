const e = globalThis;
e.console = {
  log: (...r) => ktConsole.log(r.map((t) => String(t)).join(" ")),
  info: (...r) => ktConsole.info(r.map((t) => String(t)).join(" ")),
  warn: (...r) => ktConsole.warn(r.map((t) => String(t)).join(" ")),
  error: (...r) => ktConsole.error(r.map((t) => String(t)).join(" ")),
  debug: (...r) => ktConsole.debug(r.map((t) => String(t)).join(" "))
};
(function() {
  e.__vt_timers_installed || (e.__vt_timers_installed = !0, e.__vt_timer_callbacks = /* @__PURE__ */ Object.create(null), e.__vt_timer_app_ids = /* @__PURE__ */ Object.create(null), e.__vt_nextTimerId = 1, e.__vt_currentAppId = null, e.setTimeout = function(r, t) {
    const _ = e.__vt_nextTimerId++;
    e.__vt_timer_callbacks[_] = function(...c) {
      try {
        r(...c);
      } catch (i) {
        console.error("__vt timer callback error", i);
      }
    }, e.__vt_currentAppId && (e.__vt_timer_app_ids[_] = e.__vt_currentAppId);
    try {
      ktTimer.schedule(_, t || 0, !1);
    } catch (c) {
      console.error("ktTimer.schedule failed", c);
    }
    return _;
  }, e.setInterval = function(r, t) {
    const _ = e.__vt_nextTimerId++;
    e.__vt_timer_callbacks[_] = function(...c) {
      try {
        r(...c);
      } catch (i) {
        console.error("__vt interval callback error", i);
      }
    }, e.__vt_currentAppId && (e.__vt_timer_app_ids[_] = e.__vt_currentAppId);
    try {
      ktTimer.schedule(_, t || 0, !0);
    } catch (c) {
      console.error("ktTimer.schedule failed", c);
    }
    return _;
  }, e.clearTimeout = e.clearInterval = function(r) {
    try {
      ktTimer.cancel(r);
    } catch {
    }
    try {
      delete e.__vt_timer_callbacks[r];
    } catch (t) {
      console.error("delete timer callback failed", t);
    }
    try {
      delete e.__vt_timer_app_ids[r];
    } catch {
    }
  }, e.__vt_clearTimers = function() {
    try {
      const r = Object.keys(e.__vt_timer_callbacks || {});
      for (const t of r) {
        try {
          ktTimer.cancel(Number(t));
        } catch (_) {
          console.error("ktTimer.cancel failed", _);
        }
        try {
          delete e.__vt_timer_callbacks[t];
        } catch (_) {
          console.error("delete timer callback failed", _);
        }
        try {
          delete e.__vt_timer_app_ids[t];
        } catch {
        }
      }
    } catch (r) {
      console.error("__vt_clearTimers error", r);
    }
  }, e.__vt_cancelTimersForApp = function(r) {
    try {
      const t = Object.keys(e.__vt_timer_app_ids || {});
      for (const _ of t)
        if (e.__vt_timer_app_ids[_] === r) {
          try {
            ktTimer.cancel(Number(_));
          } catch {
          }
          try {
            delete e.__vt_timer_callbacks[_];
          } catch {
          }
          try {
            delete e.__vt_timer_app_ids[_];
          } catch {
          }
        }
    } catch (t) {
      console.error("__vt_cancelTimersForApp error", t);
    }
  }, e.__vt_invokeTimer = function(r) {
    try {
      const t = e.__vt_timer_callbacks[r];
      t && t();
    } catch (t) {
      console.error("__vt invoke error", t);
    }
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFybHkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
