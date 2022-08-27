import { settings } from "../../settings";

class HFController {
	id = 69135;
	idOffset = 0;

	friendsList(event) {
		if (!settings.getSetting("Better Utilities", "Better Friends List")) return;

		cancel(event);
		this.clearOldPage();

		const lines = ChatLib.getChatMessage(event, true).split("\n");

		for (let i = 0; i < lines.length; i++) {
			// breaks
			if (i === 0 || i === lines.length - 1) {
				new Message("&9&m" + ChatLib.getChatBreak("-")).setChatLineId(this.getId()).chat();
			}

			// page numbers
			else if (lines[i].includes("&r&9 &6Friends (Page ")) {
				const line = ChatLib.removeFormatting(lines[i]);
				const num1 = Number(line.substring(line.indexOf("(Page ") + 6, line.indexOf(" of ")));
				const num2 = Number(line.substring(line.indexOf(" of ") + 4, line.indexOf(")")));

				let leftArrow = "&8<<";
				let rightArrow = "&8>>";

				if (!isNaN(num1) && !isNaN(num2)) {
					if (num1 !== 1) {
						leftArrow = new TextComponent("&9<<")
							.setClick("run_command", "/flist " + (num1-1))
							.setHoverValue("&7Page " + (num1-1));
					}

					if (num1 !== num2) {
						rightArrow = new TextComponent("&9>>")
							.setClick("run_command", "/flist " + (num1+1))
							.setHoverValue("&7Page " + (num1+1));
					}

					new Message(
						"                             ",
						leftArrow,
						" &6Friends (" + num1 + "/" + num2 + ") ",
						rightArrow
					).setChatLineId(this.getId()).chat();
				}
			}

			// idle in limbo
			else if (lines[i].includes("&r&e is idle in Limbo&r&9")) {
				let name = lines[i].substring(0, lines[i].indexOf("&r&e is idle in Limbo&r&9"));

				new Message(
					new TextComponent(" &e\u25A0 ").setClick("run_command", "/p invite " + ChatLib.removeFormatting(name)).setHoverValue("&7Party " + name),
					new TextComponent(name).setClick("suggest_command", "/w " + ChatLib.removeFormatting(name) + " ").setHoverValue("&7Message " + name),
					" &8idle"
				).setChatLineId(this.getId()).chat();
			}

			// offline
			else if (lines[i].includes("&r&c is currently offline&r&9")) {
				let name = lines[i].substring(0, lines[i].indexOf("&r&c is currently offline&r&9"));

				new Message(
					" &c\u25A0 " + name + " ",
					new TextComponent("&4-").setClick("run_command", "/fremove " + name).setHoverValue("&7Remove " + name),
					new TextComponent(" &6i").setClick("run_command", "/pi " + name.removeFormatting()).setHoverValue("&7Player Info " + name)
				).setChatLineId(this.getId()).chat();
			}

			// unknown realm
			else if (lines[i].includes("&r&e is in an unknown realm&r&9")) {
				let name = lines[i].substring(0, lines[i].indexOf("&r&e is in an unknown realm&r&9"));
				new Message(
					new TextComponent(" &a\u25A0 ").setClick("run_command", "/p invite " + ChatLib.removeFormatting(name)).setHoverValue("&7Party " + name),
					new TextComponent(name).setClick("suggest_command", "/w " + ChatLib.removeFormatting(name) + " ").setHoverValue("&7Message " + name),
					" &8an unknown realm"
				).setChatLineId(this.getId()).chat();
			}

			// watching a replay
			else if (lines[i].includes("&r&e is watching a replay&r&9")) {
				let name = lines[i].substring(0, lines[i].indexOf("&r&e is watching a replay&r&9"));
				new Message(
					new TextComponent(" &a\u25A0 ").setClick("run_command", "/p invite " + ChatLib.removeFormatting(name)).setHoverValue("&7Party " + name),
					new TextComponent(name).setClick("suggest_command", "/w " + ChatLib.removeFormatting(name) + " ").setHoverValue("&7Message " + name),
					" &8is watching a replay"
				).setChatLineId(this.getId()).chat();
			}

			// in game or lobby
			else if (lines[i].includes("&r&e is in ")) {
				let name = lines[i].substring(0, lines[i].indexOf("&r&e is in "));
				let game = lines[i].substring(lines[i].indexOf("&r&e is in ") + 11);
				new Message(
					new TextComponent(" &a\u25A0 ").setClick("run_command", "/p invite " + ChatLib.removeFormatting(name)).setHoverValue("&7Party " + name),
					new TextComponent(name).setClick("suggest_command", "/w " + ChatLib.removeFormatting(name) + " ").setHoverValue("&7Message " + name),
					" &8is in " + game
				).setChatLineId(this.getId()).chat();
			}

			// playing smp
			else if (lines[i].includes("&r&e is playing SMP")) {
				let name = lines[i].substring(0, lines[i].indexOf("&r&e is playing SMP"));
				new Message(
					new TextComponent(" &a\u25A0 ").setClick("run_command", "/p invite " + ChatLib.removeFormatting(name)).setHoverValue("&7Party " + name),
					new TextComponent(name).setClick("suggest_command", "/w " + ChatLib.removeFormatting(name) + " ").setHoverValue("&7Message " + name),
					" &8is playing on an SMP"
				).setChatLineId(this.getId()).chat();
			}

			// bust
			else if (lines[i].includes("&r&e is currently &r&5Busy")) {
				let name = lines[i].substring(0, lines[i].indexOf("&r&e is currently &r&5Busy"));

				new Message(
					new TextComponent(" &5\u25A0 ").setClick("run_command", "/p invite " + ChatLib.removeFormatting(name)).setHoverValue("&7Party " + name),
					new TextComponent(name).setClick("suggest_command", "/w " + ChatLib.removeFormatting(name) + " ").setHoverValue("&7Message " + name),
					" &8is currently &5Busy"
				).setChatLineId(this.getId()).chat();
			}

			// default
			else {
				new Message(lines[i]).setChatLineId(this.getId()).chat();
			}
		}
	}

	getId() {
		return this.id + this.idOffset++;
	}

	clearOldPage() {
		for (let i = this.id; i <= this.id + this.idOffset; i++) {
			ChatLib.clearChat(i);
		}

		this.idOffset = 0;
	}

	removeFriend(name) {
		if (!name) {
			return;
		}

		new Message("&4&m" + ChatLib.getChatBreak("-")).setChatLineId(69131).chat();
		new Message(" &cAre you sure you want to remove " + name).setChatLineId(69132).chat();
		new Message(
			new TextComponent(" &2&l[Remove]").setClick("run_command", "/fremoveconfirm " + ChatLib.removeFormatting(name)).setHoverValue("&7Remove " + name),
			" ",
			new TextComponent("&4&l[Cancel]").setClick("run_command", "/fremovecancel").setHoverValue("&7Cancel")
		).setChatLineId(69133).chat();
		new Message("&4&m" + ChatLib.getChatBreak("-")).setChatLineId(69134).chat();
	}

	confirmRemove(name) {
		ChatLib.clearChat(69131, 69132, 69133, 69134);
		ChatLib.command("f remove " + name);
    }

}

const BetterFriendsList = new HFController();
register("chat", function(event) {
	BetterFriendsList.friendsList(event);
}).setCriteria("&r&9 &6Friends (Page ").setParameter("contains");

register("command", function(name) {
	BetterFriendsList.removeFriend(name);
}).setName("fremove");

register("command", function(page) {
	ChatLib.command("f list " + page);
}).setName("flist");

register("command", function(name) {
	BetterFriendsList.confirmRemove(name);
}).setName("fremoveconfirm");

register("command", function() {
	ChatLib.clearChat(69131, 69132, 69133, 69134);
}).setName("fremovecancel");

