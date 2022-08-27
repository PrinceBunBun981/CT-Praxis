import { settings } from "../../settings";
import PVObject from "../../../PersistentData/index";

const constants = new PVObject(
	"Praxis",
	{
		quickReport: {
            phrases: [],
        }
	},
    ".quickReport.json"
)

register("chat", (player, message, event) => {
    if (!settings.getSetting("Easy Report", "Quick Report")) return;
    var username = ChatLib.removeFormatting(player).replace(/\[(.+)\]+ (.+)/g, `$2`).split(" ")[0].replace(":", "");
    var clenseMessage = message.toLowerCase().replace(/[0-9]/g, "").replace(/[{*}]/g, "")
    var p1 = new Message(
        `${player}: ${message}`,
        new TextComponent(" &c[REPORT]").setClick("run_command", `/cr ${username}`).setHoverValue("&eClick to Quickly Chat Report this User."))
    var p2 = new Message(
        new TextComponent(`${player}&f: ${message}`).setClick("run_command", `/socialoptions ${username}`).setHoverValue("&eOpen Social Options menu."))
	
    for (let ai = 0; ai < constants.quickReport.phrases.length; ai++) {
		if (clenseMessage.includes(constants.quickReport.phrases[ai])) {
			cancel(event);
			ChatLib.chat(p1);
		}
	}
}).setCriteria("${player}: ${message}");

register("chat", () => {
	if (!settings.getSetting("Easy Report", "Auto Confirm Report")) return;
	setTimeout(function(){ ChatLib.command("cr confirm"); }, 500);
}).setCriteria("&aPlease type &r&e/report confirm&r&a to log your report for staff review.&r");

register("command", (main, ...args) => {
	if (!main) {
		ChatLib.chat("&b&m" + ChatLib.getChatBreak("-"));
		ChatLib.chat("&b&lQUICK REPORT!&7 Commands:");
		ChatLib.chat(" &9/qr add <phrase> &f- Add a phrase to the filter.");
		ChatLib.chat(" &9/qr remove <phrase> &f- Remove a phrase from the filter.");
		ChatLib.chat(" &9/qr clear &f- Clear all phrases from the filter.");
		ChatLib.chat(" &9/qr list &f- Show all phrases that are filtered.");
		ChatLib.chat("&b&m" + ChatLib.getChatBreak("-"));
	}

	else if (main.toLowerCase() === "add") {
		args = args.join(" ");
		if (args === "") return ChatLib.chat(`&c&lSYNTAX!&7 Incorrect usage! /qr add <phrase>!`);
		if (Array.prototype.includes.call(constants.quickReport.phrases, args)) return ChatLib.chat(`&b&lQUICK REPORT! &7Couldn't add &e${args} &7to the list as it is already filtered.`);
		Array.prototype.push.call(constants.quickReport.phrases, args);
		ChatLib.chat(`&b&lQUICK REPORT! &7Added &e${args}&7 to filter.`);
	}
	else if (main.toLowerCase() === "remove") {
		args = args.join(" ");
		if (args === "") return ChatLib.chat(`&c&lSYNTAX!&7 Incorrect usage! /qr remove <word>!`);
		if (!Array.prototype.includes.call(constants.quickReport.phrases, args)) return ChatLib.chat(`&b&lQUICK REPORT! &7Couldn't remove &e${args} &7from the list as it is not filtered.`);

		let temp = [];
		for (let i = 0; i < constants.quickReport.phrases.length; i++) {
			temp.push(constants.quickReport.phrases[i]);
		}
		for (let i = temp.length - 1; i >= 0; i--) {
			if (temp[i] === args) {
				temp.splice(i, 1);
				ChatLib.chat(`&b&lQUICK REPORT! &7Removed &e${args}&7 from the filter.`);
			}
		}
		constants.quickReport.phrases = [...temp];
	}
	else if (main.toLowerCase() === "clear") {
		constants.quickReport.phrases = [];
		ChatLib.chat(`&b&lQUICK REPORT! &7Cleared the filter.`);
	}
	else if (main === "list") {
		ChatLib.chat(`&b&lQUICK REPORT! &7Filtered phrases: &e${Array.prototype.join.call(constants.quickReport.phrases, "&f, &e")}`);
	}
}).setName("qr").setTabCompletions(["add", "remove", "clear", "list"]);