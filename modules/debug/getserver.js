import { settings } from "../../settings";

register("playerJoined", (event, player) => {
    if (!Server.getIP().includes("hypixel")) return;
    if (event.getName() == Player.getName()) {
        if (settings.getSetting("Debug", "Send Server Debug")) {
            ChatLib.command("whereami");
        }
        if (settings.getSetting("Chat Utilities", "Auto Who")) {
            ChatLib.command("who");
        }
        if (settings.getSetting("Chat Utilities", "Auto Get Staff")) {
            ChatLib.command("getstaff", true);
        }
        if (settings.getSetting("Better Utilities", "Auto Check Nicked")) {
            ChatLib.command("checknicked", true);
        }
        return;
    }
})

var prefix;
if (settings.getSetting("Debug", "Show Debug Prefix")) {
    prefix = "&3&lDEBUG! "
} else {
    prefix = ""
}

register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&aConnected to server &b${server}&a.`)
}).setCriteria("&b&bYou are currently connected to server &6${server}&r");


register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&eConnecting to server &b${server}&e...`)
}).setCriteria("&7Sending to server ${server}...&r");

register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&eConnecting to server &b${server}&e...`)
}).setCriteria("&aSending you to ${server}&r");

register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&cKicked while joining that server.`)
}).setCriteria("&cYou were kicked while joining that server!&r");

register("chat", (reason, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&cThat server is full. (&7${reason}&c)`)
}).setCriteria("&r&cThis server is full! (${reason})&r");

register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&eConnecting to server &b${server}&e...`)
}).setCriteria("&a&lSERVER FOUND! &r&7Sending to ${server}!&r");

register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&cDisconnected from server &b${server}&c.`)
}).setCriteria("&r&c&lDISCONNECTED! &r&7from ${server}!&r");

register("chat", (server, event) => {
    //if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&cSomething went wrong when sending you to &b${server}&c. Sending you to &bLobby&c.`)
    ChatLib.command(`lobby`)
}).setCriteria("&cSomething went wrong trying to send you to that server! If this keeps happening please report it! (${server})&r");

register("chat", (server, event) => {
    //if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&cYou were kicked while joining that server!`)
    ChatLib.command(`lobby`)
}).setCriteria("&cYou were kicked while joining that server!&r");

register("chat", (server, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&cSomething went wrong when sending you to &b${server}&c. Sending you to &bLobby&c.`)
    ChatLib.command(`lobby`)
}).setCriteria("&r&cThere was an error while joining server ${server}!&r");

register("chat", (error, event) => {
    if (!settings.getSetting("Debug", "Send Server Debug")) return;
    cancel(event)
    ChatLib.chat(`${prefix}&cSomething went wrong when sending you to that server. &c(&7${error}&c)`)
}).setCriteria("&r&cCouldn't warp you! Try again later. &r&7(${error})&r");
