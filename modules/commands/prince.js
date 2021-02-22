import { Setting, SettingsObject } from "../../../SettingsManager/SettingsManager";
export default ({
    name: 'prince',
    tabCompletions: [],
    callback: () => {
        var clickableMessage = new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent("&d&lPRINCE! &eSince my name is so fucking long here..")
                .setHoverValue("&7Fuck you Shoop."), "\n", // Fuck you Shoop
            new TextComponent(" &9Send Party Invite&f - /p PrinceBunBun981")
                .setClick("run_command", "/p PrinceBunBun981")
                .setHoverValue("&7Runs &e/p PrinceBunBun981&7 on click."), "\n",
            new TextComponent(" &9Transfer Party&f - /p transfer PrinceBunBun981")
                .setClick("run_command", "/p transfer PrinceBunBun981")
                .setHoverValue("&7Runs &e/p transfer PrinceBunBun981&7 on click."), "\n",
            "&d&m" + ChatLib.getChatBreak("-")
            )
        ChatLib.chat(clickableMessage);
    },
})