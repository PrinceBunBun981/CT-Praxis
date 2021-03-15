import { settings } from "../../settings";
import { Setting, SettingsObject } from "../../../SettingsManager/SettingsManager";
register("command", (arg) => {
    if (arg) {
        switch (arg.toLowerCase()) {
            case "test":
                ChatLib.actionBar(`&b&lWoah... you found this? cool.`)
                break;
        }
    } else {
        var clickableMessage = new Message(
            "&6&m" + ChatLib.getChatBreak("-"),
            "&6&lPRAXIS! &7Commands:\n",
            " &9/pxmenu&f - Open the &cPraxis&f settings menu.\n",
            " &9/ai&f - Manage AutoIgnore settings.\n",
            " &9/warps&f - Fast Travel Extra Warp List (SB).\n",
            " &9/warp&f - Fast Travel Warp Menu (SB).\n",
            " &9/fakeboop&f - Sends a Fake Boop from an admin in chat.\n",
            " &9/fun&f - Shows all of Hypixel's fun commands.",
            " &9/maths&f - Solves a math equation.",
            " &9/qr&f - Quickly reports a user (BHop, KA, Reach).",
            "&6&m" + ChatLib.getChatBreak("-")
          );
        ChatLib.chat(clickableMessage)
    }
}).setName("px");