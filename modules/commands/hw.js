import { Setting, SettingsObject } from "../../../SettingsManager/SettingsManager";
export default ({
    name: 'hw',
    tabCompletions: ['test'],
    callback: function(arg) {
        if (arg) {
            switch (arg.toLowerCase()) {
                case "test":
                    ChatLib.chat("nice you found this pos")
                    break;
            }
        } else {
            var clickableMessage = new Message(
                "&6&m" + ChatLib.getChatBreak("-"),
                "&6&lHOPWATCH! &7Commands:\n",
                " &9/hwmenu&f - Open the HopWatch settings menu.\n",
                " &9/ai&f - Manage AutoIgnore settings.\n",
                " &9/warps&f - Fast Travel Extra Warp List (SB).\n",
                " &9/warp&f - Fast Travel Warp Menu (SB).\n",
                " &9/fakeboop&f - Sends a Fake Boop from an admin in chat.\n",
                " &9/fun&f - Shows all of Hypixel's fun commands.",
                "&6&m" + ChatLib.getChatBreak("-")
              );
            ChatLib.chat(clickableMessage)
        }
    }
})