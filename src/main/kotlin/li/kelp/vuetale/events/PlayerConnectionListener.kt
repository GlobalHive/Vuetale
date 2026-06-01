package li.kelp.vuetale.events

import com.hypixel.hytale.server.core.event.events.player.PlayerDisconnectEvent
import li.kelp.vuetale.app.PlayerUiManager
import java.util.EventListener

class PlayerConnectionListener : EventListener {


    companion object {
        fun onPlayerDisconnect(event: PlayerDisconnectEvent) {
            PlayerUiManager.remove(event.playerRef.uuid)
        }

    }
}

