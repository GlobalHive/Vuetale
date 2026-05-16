package li.kelp.vuetale.extension

import com.caoccao.javet.values.V8Value
import li.kelp.vuetale.app.App
import li.kelp.vuetale.app.AppType
import li.kelp.vuetale.javascript.JSEngine
import li.kelp.vuetale.tree.Element
import java.util.logging.Logger

enum class HandleResult {
    /**
     * Default value, indicates that the extension did not handle the property change. Vuetale will continue to check other extensions for handling this change.
     */
    NOT_HANDLED,

    /**
     * Indicates that the extension handled the property change. Vuetale will stop checking other extensions for handling this change.
     */
    HANDLED,

    /**
     * Indicates that the extension encountered an error while handling the property change. Vuetale will log the error and stop checking other extensions for handling this change.
     */
    ERROR
}

/**
 * Base class for Vuetale extensions. Extensions can be used to add custom functionality to Vuetale.
 */
abstract class VuetaleExtension {
    abstract val name: String;

    val logger = Logger.getLogger("Vuetale Extension ($name)")

    open fun init() {
    }

    open fun setup() {

    }

    open fun extendJS(engine: JSEngine) {}

    open fun patchProp(appId: String, el: Element, key: String, prevValue: V8Value, nextValue: V8Value): HandleResult {
        return HandleResult.NOT_HANDLED
    }

    open fun afterCreateApp(it: App, type: AppType, componentPath: String?) {

    }

    open fun beforeRemoveApp(id: String): HandleResult {
        return HandleResult.NOT_HANDLED
    }

    open fun afterRemoveElement(app: App?, element: Element) {}
}