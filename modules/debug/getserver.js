import { settings } from "../../settings";
register("playerJoined", (event, player) => {
    if (!Server.getIP().includes("hypixel")) return;
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    if (event.getName() == Player.getName()) {
        ChatLib.command("whereami")
    } else {
        return;
    }
})

register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`&3&lDEBUG!&7 Connected to server &a${server}&7.`)
}).setCriteria("&bYou are currently connected to server &r&6${server}&r");
//&bYou are currently connected to server &r&6prototypelobby39&r

register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`&3&lDEBUG!&7 Connecting to server &e${server}&7...`)
}).setCriteria("&7Sending to server ${server}...&r");
//&7Sending to server mini59Q...&r

register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`&3&lDEBUG!&7 Connecting to server &e${server}&7...`)
}).setCriteria("&a&lSERVER FOUND! &r&7Sending to ${server}!&r");
//&a&lSERVER FOUND! &r&7Sending to mega26E!&r

register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`&3&lDEBUG!&7 Disconnected from server &c${server}&7.`)
}).setCriteria("&r&c&lDISCONNECTED! &r&7from ${server}!&r");
//&r&c&lDISCONNECTED! &r&7from mega26E!&r

register("chat", (server, event) => { // Will always send this message and send you to lobby.
    cancel(event)
    ChatLib.chat(`&3&lDEBUG!&7 Something went wrong when sending you to &c${server}. Sending you to &bLobby&7.`)
    ChatLib.command(`lobby`)
}).setCriteria("&cSomething went wrong trying to send you to that server! If this keeps happening please report it! (${server})&r");
//&cSomething went wrong trying to send you to that server! If this keeps happening please report it! (mini281D)&r

register("chat", (server, event) => { // Will always send this message and send you to lobby.
    cancel(event)
    ChatLib.chat(`&3&lDEBUG!&7 You were kicked while joining that server!`)
    ChatLib.command(`lobby`)
}).setCriteria("&cYou were kicked while joining that server!&r");
//&cYou were kicked while joining that server!&r

register("chat", (server, event) => { // Will always send this message and send you to lobby.
    cancel(event)
    ChatLib.chat(`&3&lDEBUG!&7 Something went wrong when sending you to &c${server}. Sending you to &bLobby&7.`)
    ChatLib.command(`lobby`)
}).setCriteria("&r&cThere was an error while joining server ${server}!&r");
//&r&cThere was an error while joining server mini143U!&r