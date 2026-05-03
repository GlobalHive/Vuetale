package li.kelp.vuetale.extension

import com.caoccao.javet.values.V8Value
import li.kelp.vuetale.tree.Element
import java.util.logging.Logger

enum class HandleResult {
    NOT_HANDLED,
    HANDLED,
    ERROR
}

abstract class VuetaleExtension {
    abstract val name: String;

    val logger = Logger.getLogger("Vuetale ($name)")

    open fun init() {
    }

    open fun patchProp(appId: String, el: Element, key: String, prevValue: V8Value, nextValue: V8Value): HandleResult {
        return HandleResult.NOT_HANDLED
    }
}