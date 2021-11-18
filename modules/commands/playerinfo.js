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

function getData(player) {
	if (!player) return ChatLib.chat("&cIncorrect usage! /pi Player");

	looping = true;

	// code for the actual request
	request({
		url: `https://api.mojang.com/users/profiles/minecraft/${player}`,
		headers: {
			'User-Agent': 'Mozilla/5.0 (ChatTriggers)'
		},
		json: true
	})
		.then(() => {
			request({
				url: `https://api.slothpixel.me/api/players/${player}`,
				headers: {
					'User-Agent': 'Mozilla/5.0 (ChatTriggers)'
				},
				json: true
			})
				.then(data => {
					let realName = data.username;
                    let currentVersion = data.mc_version;
                    let nameHistory = data.name_history
					let lastLogin = data.last_login;
					let lastLogout = data.last_logout;
					let lastGame = data.last_game;
					let rankFormatted;

					if (data.rank_formatted === "&7") rankFormatted = "&7";
					else if (data.rank_formatted !== "&7") rankFormatted = `${data.rank_formatted} `;

                    

					if (!realName) {
						ChatLib.chat(`&c${player} hasn't logged onto Hypixel.`);
					}

					// checks for staff
					else if (!lastLogin && !lastLogout) {
						ChatLib.chat(
							`${rankFormatted + realName} &chasn't logged onto Hypixel.`
						);
					}

					else if (data.online) {
                        new Message(
                            new TextComponent(`${rankFormatted + realName} `).setHoverValue([
                                `&6Name History:\n- ${nameHistory.join("\n- ")}`
                            ]),
							new TextComponent(`&9has been &aonline &9for &a${timeSince(Date.now(), lastLogin).toString().trim()}&9.`),
							new TextComponent(`\n &7- &9Version: &d${currentVersion}&9`),
							new TextComponent(`\n &7- &9Level: &d${data.level}&9`),
							
                        ).chat();
					}

					else if (lastLogout) {
						new Message(
                            new TextComponent(`${rankFormatted + realName} `).setHoverValue([
                                `&6Name History:\n- ${nameHistory.join("\n- ")}`
                            ]),
							new TextComponent(
								`&9has been &coffline &9for &c${timeSince(Date.now(), lastLogout).toString().trim()}&9.`),
                            new TextComponent(`\n &7- &9Last Logged Out: &c${new Date(lastLogout)}&9`),
							new TextComponent(`\n &7- &9Last Game: &6${lastGame}&9`),
							new TextComponent(`\n &7- &9Level: &d${data.level}&9`),
						).chat();
					}
					else if (lastLogin && !lastLogout) {
						new Message(
                            new TextComponent(`${rankFormatted + realName} `).setHoverValue([
                                `&6Name History:\n- ${nameHistory.join("\n- ")}`
                            ]),
							new TextComponent(
								`&9last logged in &e${new Date(lastLogin).toString().trim()}&9.`),
							new TextComponent(`\n &7- &9Last Game: &6${lastGame}&9`),
							new TextComponent(`\n &7- &9Level: &d${data.level}&9`),
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

function timeSince(t1, t2) {
	let secondsDiff = (t1 - t2) / 1000;
	let minutesDiff = secondsDiff / 60;
	let hoursDiff = minutesDiff / 60;
	let daysDiff = hoursDiff / 24;
	let yearsDiff = daysDiff / 365.25;

	if (secondsDiff > 60 * Math.floor(minutesDiff))
		secondsDiff -= 60 * Math.floor(minutesDiff);

	if (minutesDiff > 60 * Math.floor(hoursDiff))
		minutesDiff -= 60 * Math.floor(hoursDiff);

	if (hoursDiff > 24 * Math.floor(daysDiff))
		hoursDiff -= 24 * Math.floor(daysDiff);

	if (daysDiff > 365.25 * Math.floor(yearsDiff))
		daysDiff -= 365.25 * Math.floor(yearsDiff);


	Math.floor(secondsDiff) === 0
		? (secondsDiff = "")
		: (secondsDiff = `${Math.floor(secondsDiff)}s `);
	Math.floor(minutesDiff) === 0
		? (minutesDiff = "")
		: (minutesDiff = `${Math.floor(minutesDiff)}m `);
	Math.floor(hoursDiff) === 0
		? (hoursDiff = "")
		: (hoursDiff = `${Math.floor(hoursDiff)}h `);
	Math.floor(daysDiff) === 0
		? (daysDiff = "")
		: (daysDiff = `${Math.floor(daysDiff)}d `);
	Math.floor(yearsDiff) === 0
		? (yearsDiff = "")
		: (yearsDiff = `${Math.floor(yearsDiff)}y `);

	return yearsDiff + daysDiff + hoursDiff + minutesDiff + secondsDiff;
}

function stopLoadingMsg() {
	looping = false;
	ChatLib.clearChat(i + loadingMsgs.length - 1);
}

register("step", loop).setFps(10);
register("command", getData).setName("seen");
register("command", getData).setName("pi");
register("command", getData).setName("playerinfo");
register("command", stopLoadingMsg).setName("stoploadmsg");
