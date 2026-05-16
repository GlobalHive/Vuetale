package li.kelp.vuetale.extension

import com.caoccao.javet.values.V8Value
import li.kelp.vuetale.tree.Element

class AssetLoadingExtension : VuetaleExtension() {
    override val name: String
        get() = "Asset Loading"

    override fun patchProp(
        appId: String,
        el: Element,
        key: String,
        prevValue: V8Value,
        nextValue: V8Value
    ): HandleResult {

        if (key == "texturePath") {
            val path = nextValue.asString()
        }

        return HandleResult.NOT_HANDLED
    }

}