import { settings } from "../../settings";

register("chat", (type, player, joinleave, event) => {
    if (!settings.getSetting("Chat Utilities", "Join Leave Notification Color")) return;
    cancel(event);
    if (type == "&aFriend") {
        if (joinleave == "joined") {
            ChatLib.chat(`${type} > ${player} &a${joinleave}.`);
        } else {
            ChatLib.chat(`${type} > ${player} &c${joinleave}.`);
        }
    }
    if (type == "&2Guild") {
        if (joinleave == "joined") {
            ChatLib.chat(`${type} > ${player} &a${joinleave}.`);
        } else {
            ChatLib.chat(`${type} > ${player} &c${joinleave}.`);
        }
    }
}).setCriteria("${type} > &r${player} &r&e${joinleave}.&r")