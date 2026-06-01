package li.kelp.vuetale

import com.hypixel.hytale.server.core.event.events.player.PlayerDisconnectEvent
import com.hypixel.hytale.server.core.plugin.JavaPlugin
import com.hypixel.hytale.server.core.plugin.JavaPluginInit
import li.kelp.vuetale.app.AppManager
import li.kelp.vuetale.commands.VuetaleCommand
import li.kelp.vuetale.commands.VuetaleDebugCommand
import li.kelp.vuetale.events.PlayerConnectionListener
import li.kelp.vuetale.javascript.JSEngine
import li.kelp.vuetale.javascript.ModuleRegistry
import org.jline.builtins.telnet.ConnectionListener


class Plugin(init: JavaPluginInit) : JavaPlugin(init) {

    /** Captured during setup so shutdown can close without re-initializing. */
    private var jsEngine: JSEngine? = null

    override fun setup() {
        // Register this JAR's resources under the 'vt:@core' alias so other mods
        // can import from 'vt:@core/components/...' etc.
        ModuleRegistry.registerModule("core", Plugin::class.java)

        // Eagerly initialize JSEngine (and AppManager via its init block) so that any
        // startup failures (missing vue.js, broken loader.js, etc.) surface here with
        // full stack traces rather than being silently swallowed inside a later async block.
        try {
            jsEngine = JSEngine.instance
            // Touch AppManager so its object init (initializeElements, registerCoreExtensions)
            // also runs now and any error is surfaced immediately.
            AppManager.apps // just accesses the object to trigger its init
            logger.atInfo().log("JSEngine and AppManager initialized successfully")
        } catch (t: Throwable) {
            logger.atSevere().withCause(t).log("Failed to initialize JSEngine / AppManager at startup")
            // Re-throw so the plugin fails loudly rather than appearing to load but doing nothing.
            throw t
        }

        this.getCommandRegistry().registerCommand(VuetaleCommand())
        this.getCommandRegistry().registerCommand(VuetaleDebugCommand())

        this.getEventRegistry().registerGlobal<Void?, PlayerDisconnectEvent?>(
            PlayerDisconnectEvent::class.java,
            PlayerConnectionListener::onPlayerDisconnect
        )
        logger.atInfo().log("Vuetale initialized")

    }

    override fun shutdown() {
        // Cleanly stop the Node.js event-loop pump and release V8 resources.
        jsEngine?.close()
        jsEngine = null
    }
}