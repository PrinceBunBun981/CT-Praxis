import { Setting, SettingsObject } from "../../../SettingsManager/SettingsManager";
register("command", (args) => {
    var adminlist = ["hypixel", "Rezzus", "Technoblade", "ChiLynn", "AgentKid", "Plancke", "DevSlashNull", "codename_B", "aPunch", "Jayavarmen", "Nitroholic_", "OrangeMarshall", "ConnorLinfoot", "Externalizable", "Plancke", "Dctr", "Minikloon", "PJoke1"]
    var i = Math.floor(Math.random() * adminlist.length)
    if (i == 0 || i == 1) {
        ChatLib.chat("&dFrom &c[OWNER] " + adminlist[i] + "&7: &d&lBoop!")
    } else {
        if (i == 2) {
            ChatLib.chat("&dFrom &d[PIG&b+++&d] " + adminlist[i] + "&7: &d&lBoop!")
        } else {
            ChatLib.chat("&dFrom &c[ADMIN] " + adminlist[i] + "&7: &d&lBoop!")
        }
    }
}).setName("fakeboop");