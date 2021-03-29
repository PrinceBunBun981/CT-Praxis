import { settings } from "../../settings";
register("playerJoined", (event, player) => {
    if (!settings.getSetting("Debug", "Send Proxy Debug")) return;
    if (!Server.getIP().includes("hypixel")) return;
    if (event.getName() == Player.getName()) {
        if (ChatLib.removeFormatting(Scoreboard.getTitle()).includes("HYPIXEL") || ChatLib.removeFormatting(Scoreboard.getTitle()).includes("PROTOTYPE")) {
            ChatLib.command("proxy")
        }
    } else {
        return;
    }
})

register("chat", (proxy, event) => {
    cancel(event)
    ChatLib.chat(`&3&lDEBUG!&7 Connected to proxy &dchi-hp-${proxy}&7.`)
}).setCriteria("&fchi-hp-${proxy}&r");