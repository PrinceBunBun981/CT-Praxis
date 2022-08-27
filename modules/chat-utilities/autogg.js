import { settings } from "../../settings";

function chatShit(e) {
	if (!settings.getSetting("Chat Utilities", "Auto GG")) return;
  	ChatLib.say("gg");
    ChatLib.chat("&aAutomatically sent chat message.")
}

register('chat', chatShit).setCriteria('&6&lPIT EVENT ENDED:').setContains()
register('chat', chatShit).setCriteria('&6&lRAFFLE ENDED!').setContains()
register('chat', chatShit).setCriteria('&c&lGOBLIN RAID ENDED!').setContains()
register('chat', chatShit).setCriteria('&a&lYOU WON!').setContains()