import request from "../../../requestV2/index";
function checkForNickedPlayers() {
    const list = []
    TabList.getNames().forEach(p => {
        if (!p.includes("§f")
        && !p.includes("§l") && !p.includes("[") && !p.includes("]") && !p.includes("/") && !p.includes("\\") && !p.includes(":")) {
        
            request({
		    url: `https://api.mojang.com/users/profiles/minecraft/${p}`,
		    headers: {
			    'User-Agent': 'Mozilla/5.0 (ChatTriggers)'
		    },
		        json: true
	    })
		    .then(() => {
		    	request({
		    		url: `https://api.slothpixel.me/api/players/${p}`,
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
		    				ChatLib.chat(`&c${p} hasn't logged onto Hypixel.`);
		    			}

		    			// checks for staff
		    			else if (!lastLogin && !lastLogout) {
		    				new Message(
                                new TextComponent(`${rankFormatted + realName} `).setHoverValue([
                                    `&6Name History:\n- ${nameHistory.join("\n- ")}`
                                ]),
		    					new TextComponent(`&chas their login API disabled.`),
		    					new TextComponent(`\n &7- &9Version: &d${currentVersion}&9`),
		    					new TextComponent(`\n &7- &9Level: &d${data.level}&9`),
                            
                            ).chat();
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
		    		})
		    		.catch(e => {
		    			looping = false;
		    			ChatLib.chat("&cSomething went wrong.");
		    			print(`Something went wrong getting information from Slothpixel:\n${JSON.stringify(e)}`);
		    		});
		    })
		    .catch(e => {
		    	looping = false;
                ChatLib.chat(`${p} is nicked.`);
		    	list.push(p)
		    	print(`Username not found:\n${JSON.stringify(e)}`);
		    });
        }
    })

    if (list.length < 1) return ChatLib.chat("&cThere are no nicked players in your game.");
    ChatLib.chat("")
    ChatLib.chat("&b&lONLINE: " + list.join("&e,&r ").toString());
    ChatLib.chat("")
}

register("command", checkForNickedPlayers).setName("checknicked");