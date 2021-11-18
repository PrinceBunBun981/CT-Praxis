function getPlayers() {
    const list = []
    TabList.getNames().forEach(p => {
        if (p.startsWith("§c") 
        || p.startsWith("§2") 
        || p.startsWith("§9") 
        || p.startsWith("§6") 
        || p.startsWith("§b") 
        || p.startsWith("§a")
        || p.startsWith("§7")
        && !p.includes("§f")
        && !p.includes("§l")) {
            list.push(p);
        }
    })

    ChatLib.chat("&b&lONLINE: " + list.join("&e,&r ").toString())
}

register("command", getPlayers).setName("list");

function getStaff() {
    const list = []
    TabList.getNames().forEach(p => {
        if (p.startsWith("§c") 
        || p.startsWith("§2") 
        || p.startsWith("§9") 
        && !p.includes("§f")
        && !p.includes("§l")) {
            list.push(p);
        }
    })

    if (list.length < 1) return ChatLib.chat("&cNo online staff or youtubers on this server.");
    ChatLib.chat("")
    ChatLib.chat("&b&lONLINE: " + list.join("&e,&r ").toString());
    ChatLib.chat("")
}

register("command", getStaff).setName("getstaff");
register("command", getStaff).setName("getyt");