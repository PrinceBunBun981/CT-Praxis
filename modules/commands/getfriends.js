import request from "../../../requestV2/index";

let looping = false;

const loadingMsgs = [
	"Loading.",
	"Loading..",
	"Loading...",
	"Loading....",
	"Loading....."
];

let i = 0;

function loop() {
	if (!looping) return;
	if (i === loadingMsgs.length) {
		ChatLib.clearChat(i + loadingMsgs.length - 1);
		i = 0;
	}
	new Message(loadingMsgs[i]).setChatLineId(i + loadingMsgs.length).chat();
	ChatLib.clearChat(i + loadingMsgs.length - 1);
	i++;
}

function getFriendData(player) {
	if (!player) return ChatLib.chat("&cIncorrect usage! /getfriends Player");

	looping = true;

	// code for the actual request
	request({
		url: `https://api.mojang.com/users/profiles/minecraft/${player}`,
		headers: {
			'User-Agent': 'Mozilla/5.0 (ChatTriggers)'
		},
		json: true
	})
		.then((mcdata) => {
			request({
				url: `https://api.slothpixel.me/api/players/${player}/friends`,
				headers: {
					'User-Agent': 'Mozilla/5.0 (ChatTriggers)'
				},
				json: true
			})
				.then(data => {

					if (data) {
                        new Message(
                            new TextComponent(`&e${mcdata.name} &9has &d${data.length} &9friends.`),
							
                        ).chat();
					}

					looping = false;
					ChatLib.clearChat(i + loadingMsgs.length - 1);
				})
				.catch(e => {
					looping = false;
					ChatLib.clearChat(i + loadingMsgs.length - 1);
					ChatLib.chat("&cSomething went wrong.");
					print(`Something went wrong getting information from Slothpixel:\n${JSON.stringify(e)}`);
				});
		})
		.catch(e => {
			looping = false;
			ChatLib.clearChat(i + loadingMsgs.length - 1);
			ChatLib.chat("&cInvalid username!");
			print(`Username not found:\n${JSON.stringify(e)}`);
		});
}

register("step", loop).setFps(10);
register("command", getFriendData).setName("gf");
register("command", getFriendData).setName("getfriend");
register("command", getFriendData).setName("getfriends");