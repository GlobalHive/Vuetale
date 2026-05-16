package li.kelp.vuetale.app

import li.kelp.vuetale.extension.AssetLoadingExtension
import li.kelp.vuetale.extension.HandleResult
import li.kelp.vuetale.extension.VuetaleExtension
import li.kelp.vuetale.javascript.JSEngine
import li.kelp.vuetale.tree.initializeElements
import li.kelp.vuetale.validator.initializeSchemas


object AppManager {
    init {
        initializeElements()
        initializeSchemas()
        registerCoreExtensions()
    }

    val apps: MutableMap<String, App> = mutableMapOf()

    val extensions = mutableListOf<VuetaleExtension>()

    fun registerExtension(extension: Class<out VuetaleExtension>) {
        val instance = extension.getDeclaredConstructor().newInstance()
        instance.init()
        extensions.add(instance)

        instance.extendJS(getEngine())
    }

    fun registerCoreExtensions() {
        registerExtension(AssetLoadingExtension::class.java)
    }

    fun getAppId(owner: String, type: AppType): String {
        return "$owner-$type"
    }

    private fun getEngine() = JSEngine.instance

    fun createApp(id: String, type: AppType, componentPath: String? = null): App {
        val fullId = getAppId(id, type)

        if (apps.containsKey(fullId)) {
            throw IllegalArgumentException("App with id '$id' already exists")
        }

        return App(id, type, componentPath).also {
            addApp(it)
            extensions.forEach { ext -> ext.afterCreateApp(it, type, componentPath) }
        }
    }

    fun getApp(id: String): App? {
        return apps[id]
    }

    fun addApp(app: App) {
        apps[app.getId()] = app
    }

    fun removeApp(id: String) {

        if (extensions.any { it.beforeRemoveApp(id) !== HandleResult.NOT_HANDLED }) return

        getApp(id)?.let {
            if (it.isMounted) {
                it.unmount()
            }
        }
        apps.remove(id)
    }

    fun removeApp(owner: String, type: AppType) {
        val id = getAppId(owner, type)
        removeApp(id)
    }

    fun removeOwnerApps(owner: String) {
        val idsToRemove = apps.keys.filter { it.startsWith("$owner-") }
        for (id in idsToRemove) {
            removeApp(id)
        }
    }


}