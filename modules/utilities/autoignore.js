import { settings } from "../../settings";
import PVObject from "../../../PersistentData/index";

const constants = new PVObject(
	"HopWatch",
	{
		autoIgnore: {
            phrases: [],
			whitelist_players: []
        }
	}
)

register("chat", (player, message, event) => {
	if (!settings.getSetting("Auto Ignore", "Enabled")) return;

    player = ChatLib.removeFormatting(player).replace(/\[(.+)\]+ (.+)/g, `$2`);
    clenseMessage = message.toLowerCase()
        .replace(/[0-9]/g, "")
		.replace(/[{*}]/g, "")

	new Thread(() => {
		for (let wlplayers = 0; wlplayers < constants.autoIgnore.whitelist_players.length; wlplayers++) {
			if (player.includes(constants.autoIgnore.whitelist_players[wlplayers])) {
				return;
			}
		}
		for (let ai = 0; ai < constants.autoIgnore.phrases.length; ai++) {
			if (clenseMessage.includes(constants.autoIgnore.phrases[ai])) {
                if (!player.includes("Guild >") &&
                    !player.includes("Officer >") &&
                    !player.includes("Party >") &&
                    !player.includes("From") &&
                    player !== Player.getName()
                ) {
                    ChatLib.command(`ignore add ${player}`)
                    ChatLib.chat(new Message(
						`&3&lAUTO IGNORE!&7 Added &e${player} &7to ignore list.`,
					))
					ChatLib.chat(new Message(
						new TextComponent(` &c&l[R]`)
                        	.setClick("run_command", `/ignore remove ${player}`)
                        	.setHoverValue(`&7Remove &e${player}&7 from your ignore list.`),
						"&7 -",
						new TextComponent(` &e&l[W]`)
                        	.setClick("run_command", `/ai awl ${player}`)
                        	.setHoverValue(`&7Add &e${player}&7 to the whitelist.`)
					))
                }
			}
		}
		return;
	}).start();
}).setCriteria("${player}: ${message}");

register("command", (main, ...args) => {
	if (!main) {
		ChatLib.chat("&b&m" + ChatLib.getChatBreak("-"));
		ChatLib.chat("&3&lAUTO IGNORE!&7 Commands:");
		ChatLib.chat(" &9/ai add <word> &f- Add a word to the filter.");
		ChatLib.chat(" &9/ai remove <word> &f- Remove a word from the filter.");
		ChatLib.chat(" &9/ai clear &f- Clear all words from the filter.");
		ChatLib.chat(" &9/ai list &f- Show all words that are ignored.");
		ChatLib.chat(" &9/ai whitelist &f- Shows the players that are whitelisted.");
		ChatLib.chat(" &9/ai awl <player> &f- Add a player to the whitelist.");
		ChatLib.chat(" &9/ai dwl <player> &f- Remove a player from the whitelist.");
		ChatLib.chat("&b&m" + ChatLib.getChatBreak("-"));
	}

	else if (main.toLowerCase() === "add") {
		args = args.join(" ");
		if (args === "") return ChatLib.chat(`&c&lSYNTAX!&7 Incorrect usage! /ai add <word>!`);
		if (Array.prototype.includes.call(constants.autoIgnore.phrases, args)) return ChatLib.chat(`&3&lAUTO IGNORE! &7Couldn't add &e${args} &7to the list as it is already filtered.`);
		Array.prototype.push.call(constants.autoIgnore.phrases, args);
		ChatLib.chat(`&3&lAUTO IGNORE! &7Added &e${args}&7 to filter.`);
	}
	else if (main.toLowerCase() === "remove") {
		args = args.join(" ");
		if (args === "") return ChatLib.chat(`&c&lSYNTAX!&7 Incorrect usage! /ai remove <word>!`);
		if (!Array.prototype.includes.call(constants.autoIgnore.phrases, args)) return ChatLib.chat(`&3&lAUTO IGNORE! &7Couldn't remove &e${args} &7from the list as it is not filtered.`);

		let temp = [];
		for (let i = 0; i < constants.autoIgnore.phrases.length; i++) {
			temp.push(constants.autoIgnore.phrases[i]);
		}
		for (let i = temp.length - 1; i >= 0; i--) {
			if (temp[i] === args) {
				temp.splice(i, 1);
				ChatLib.chat(`&3&lAUTO IGNORE! &7Removed &e${args}&7 from the filter.`);
			}
		}
		constants.autoIgnore.phrases = [...temp];
	}
	else if (main.toLowerCase() === "clear") {
		constants.autoIgnore.phrases = [];
		ChatLib.chat(`&3&lAUTO IGNORE! &7Cleared the filter.`);
	}
	else if (main === "list") {
		ChatLib.chat(`&3&lAUTO IGNORE! &7Ignored words: &e${Array.prototype.join.call(constants.autoIgnore.phrases, "&f, &e")}`);
	}
	else if (main === "whitelist") {
		ChatLib.chat(`&3&lAUTO IGNORE! &7Whitelisted players: &e${Array.prototype.join.call(constants.autoIgnore.whitelist_players, "&f, ")}`);
	}
	else if (main.toLowerCase() === "awl") {
		args = args.join(" ");
		if (args === "") return ChatLib.chat(`&c&lSYNTAX!&7 Incorrect usage! /ai awl <player>!`);
		if (Array.prototype.includes.call(constants.autoIgnore.whitelist_players, args)) return ChatLib.chat(`&3&lAUTO IGNORE! &7Couldn't add &e${args} &7to the whitelist as they are already added.`);
		Array.prototype.push.call(constants.autoIgnore.whitelist_players, args);
		ChatLib.chat(`&3&lAUTO IGNORE! &7Added &e${args}&7 to the whitelist.`);
	}
	else if (main.toLowerCase() === "dwl") {
		args = args.join(" ");
		if (args === "") return ChatLib.chat(`&c&lSYNTAX!&7 Incorrect usage! /ai dwl <player>!`);
		if (!Array.prototype.includes.call(constants.autoIgnore.whitelist_players, args)) return ChatLib.chat(`&3&lAUTO IGNORE! &7Couldn't remove &e${args} &7from the whitelist as are not on it.`);

		let temp = [];
		for (let i = 0; i < constants.autoIgnore.whitelist_players.length; i++) {
			temp.push(constants.autoIgnore.whitelist_players[i]);
		}
		for (let i = temp.length - 1; i >= 0; i--) {
			if (temp[i] === args) {
				temp.splice(i, 1);
				ChatLib.chat(`&3&lAUTO IGNORE! &7Removed &e${args}&7 from the whitelist.`);
			}
		}
		constants.autoIgnore.whitelist_players = [...temp];
	}

}).setName("ai").setTabCompletions(["add", "remove", "clear", "list", "whitelisted", "whitelist", "delwhitelist"]);

// register("chat", (event) => {
//     cancel(event);
// }).setCriteria("Added ${*} to your ignore list.")
