// import { register } from "../../../SettingsManager/Settings";
import { settings } from "../../settings";

// AUTO L
function sendL(e) {
	if (!settings.getSetting("Chat Utilities", "Auto L")) return;
  	ChatLib.say("L");
    ChatLib.chat("&aAutomatically sent chat message.")
}

register('chat', sendL).setCriteria('&r&c&lA player has been removed from your ').setContains()

function sendTY(e) {
	if (!settings.getSetting("Chat Utilities", "Thanks Watchdog")) return;
  	ChatLib.say("Thanks Watchdog!");
    ChatLib.chat("&aAutomatically sent chat message.")
}
register('chat', sendTY).setCriteria('&fWatchdog has banned &r&c&l${num}&r&f players in the last 7 days.&r')

function sendYey(e) {
  	ChatLib.say(":yey:");
    ChatLib.chat("&aAutomatically sent chat message.")
}
register('chat', sendYey).setCriteria("&r&aWow, you caught a &r${fish}&r&a!").setContains()
register('chat', sendYey).setCriteria("&r&aWow, you caught &r${fish}&r&a!").setContains()

// AUTO GG FIXES
function sendGG(e, receiver) {
	if (!settings.getSetting("Chat Utilities", "Auto GG")) return;
  	ChatLib.say("gg");
    ChatLib.chat("&aAutomatically sent chat message.")
}

register('chat', sendGG).setCriteria('&6&lPIT EVENT ENDED:').setContains()
register('chat', sendGG).setCriteria('&6&lRAFFLE ENDED!').setContains()
register('chat', sendGG).setCriteria('&c&lGOBLIN RAID ENDED!').setContains()
register('chat', sendGG).setCriteria('&a&lYOU WON!').setContains()
register('chat', (gifter, rank, receiver, event) => sendGG).setCriteria("&r&e&k?&r&c&k?&r&4&k?&r &r${gifter}&r&e gifted the &r${rank}&r&e rank to &r${receiver}&r&e! &r&4&k?&r&c&k?&r&e&k?&r")
register('chat', sendGG).setCriteria("&r${*}&r&f &r&acaught a &r${fish}&r&a!").setContains()
register('chat', sendGG).setCriteria("&r${*}&r&f &r&acaught &r${fish}&r&a!").setContains()

//&r&b[MVP&r&4+&r&b] 5555555555&r&f &r&acaught a &r&e&lBarnacle&r&a! It really grows on you.&r
//&r&6[MVP&r&e++&r&6] Kitloon&r&f &r&acaught a &r&e&lKnockback Slimeball&r&a! So this is where it's been all this time?&r
//&r&b[MVP&r&e+&r&b] Tragicalplum9&r&f &r&acaught &r&6&lOops The Fish&r&a! Oops, wrong game.&r

// AUTO RE BOOP
function sendBoop(e, name) {
	if (!settings.getSetting("Chat Utilities", "Auto Re-Boop")) return;
    ChatLib.command("boop " + name);
    ChatLib.chat("&aAutomatically sent boop.")
}

register("chat", sendBoop).setCriteria("&dFrom &r${*} ${name}&r&7: &r&d&lBoop!&r");
//&dFrom &r&b[MVP&r&2+&r&b] poopoohut&r&7: &r&d&lBoop!&r


function sendCustomWho(e, name) {
	if (!settings.getSetting("Chat Utilities", "Auto Who")) return;
	cancel(e)
	ChatLib.command("list", true)
}

register("chat", sendCustomWho).setCriteria("&rThis command is not available on this server!&r");