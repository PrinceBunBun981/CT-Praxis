import { Setting, SettingsObject } from "../../../SettingsManager/SettingsManager";
register("command", (arg) => {
    if (arg) {
        try {
            ChatLib.command(`wdr ${arg} ka bhop reach`)
        } catch (e) {}
    } else {
        ChatLib.chat("&c&lSYNTAX!&7 Use &e/qr (user)&7 to Quick Report a user.")
    }
}).setName("qr");