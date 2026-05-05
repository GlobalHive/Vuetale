package li.kelp.vuetale.helpers

import com.hypixel.hytale.server.core.universe.Universe
import com.hypixel.hytale.server.core.universe.world.World
import java.util.UUID
import java.util.concurrent.CompletableFuture

fun UUID.toWorld(): World? = Universe.get().getWorld(this)
fun <T> World.getDeferred(consumer: () -> T): CompletableFuture<T> {
    val future = CompletableFuture<T>()

    this.execute {
        try {
            val result = consumer()
            future.complete(result)
        } catch (e: Exception) {
            future.completeExceptionally(e)
        }
    }

    return future
}

//suspend fun <T> World.await(consumer: () -> T): T {
//    return getDeferred(consumer).await()
//}

//suspend fun <T : Component<EntityStore>> PlayerRef.getComponentThreadsafe(component: ComponentType<EntityStore, T>): T? {
//    return this.worldUuid?.toWorld()?.await {
//        this.reference?.store?.getComponent(this.reference!!, component)
//    }
//}