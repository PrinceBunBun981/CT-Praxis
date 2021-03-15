import { settings } from "../../settings";

function chatShit(e) {
	if (!settings.getSetting("Chat Utilities", "Auto L")) return;
  	ChatLib.say("L");
    ChatLib.chat("&aAutomatically sent chat message.")
}

register('chat', chatShit).setCriteria('&r&c&lA player has been removed from your ').setContains()