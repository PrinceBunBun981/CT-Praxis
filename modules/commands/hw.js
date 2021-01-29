import { Setting, SettingsObject } from "../../../SettingsManager/SettingsManager";
export default ({
    name: 'hw',
    tabCompletions: ['test'],
    callback: function(arg) {
        if (arg) {
            switch (arg.toLowerCase()) {
                case "test":
                    ChatLib.chat("test")
                    break;
            }
        } else {
            var clickableMessage = new Message(
                "&6&lHOPWATCH HELP! &7&o(You can click on each command)\n",
                new TextComponent(" &9/fakeboop&f - Sends a Fake Boop from an admin in chat.")
                    .setClick("run_command", "/fakeboop")
                    .setHoverValue("&7Runs &e/fakeboop&7 on click."),
                "\n",
                new TextComponent(" &9/warps&f - Fast Travel Extra Warp List (SB).")
                    .setClick("run_command", "/warps")
                    .setHoverValue("&7Runs &e/warps&7 on click."),
                "\n",
                new TextComponent(" &9/warp&f - Fast Travel Warp Menu (SB).")
                    .setClick("run_command", "/warp")
                    .setHoverValue("&7Runs &e/warp&7 on click."),
                "\n",
                new TextComponent(" &9/scooby&f - Like zoinks Scoob.")
                    .setClick("run_command", "/scooby")
                    .setHoverValue("&7Runs &e/scooby&7 on click."),
                "\n",
                new TextComponent(" &9/whadafak&f - I don't even know.")
                    .setClick("run_command", "/whadafak")
                    .setHoverValue("&7Runs &e/whadafak&7 on click."),
              );
            ChatLib.chat(clickableMessage)
        }
    }
})