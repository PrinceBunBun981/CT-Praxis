import { settings } from "../../settings";
import { removeRank } from "../../_utils";

const roles = {
    leader: 0,
    moderator: 1,
    member: 2
}

let party = {
    waiting: false,
    num: undefined,
    leader: undefined,
    moderators: [],
    members: [],
    role: roles.member
};

function print_party() {
	if(party.num === undefined)
        return;
    ChatLib.chat("&aParty members (" + party.num + ")");

    switch(party.role) {
        case roles.leader:
            new Message(
                new TextComponent("&9&lWRP").setClick("run_command", "/p warp").setHoverValue("&7Warp the Party to you."),
                " &7- ",
                new TextComponent("&4&lDSB").setClick("run_command", "/p disband").setHoverValue("&7Disband the Party."),
                " &7- ",
                new TextComponent("&e&lTAI").setClick("run_command", "/p settings allinvite").setHoverValue("&7Toggle All Invite."),
                " &7- ",
                new TextComponent("&6&lPRV").setClick("run_command", "/p private").setHoverValue("&7Make the Party private.")
            ).chat();
        case roles.moderator:
            new Message(
                new TextComponent("&c&lKAO").setClick("run_command", "/p kickoffline").setHoverValue("&7Kick all offline Party members"),
                " &7- ",
                new TextComponent("&c&lMPC").setClick("run_command", "/p mute").setHoverValue("&7Toggle Party chat mute.")
            ).chat();
            break;
        default:
            break;
    }

	ChatLib.chat("&f ");

    let arrow = "\u00BB ";

    ChatLib.chat(`&eParty Leader:`)
    ChatLib.chat(`${party.leader.status}${arrow} ${party.leader.name}`)

    if(party.moderators.length > 0)
        ChatLib.chat('&eModerators:')
    party.moderators.forEach(mod => {
        if(party.role === roles.leader) {
			new Message(
				`${mod.status}${arrow} ${mod.name}`,
				" ",
				new TextComponent("&a[&a⋀&a]").setClick("run_command", "/p promote " + removeRank(mod.name).trim()).setHoverValue("&7Promote " + mod.name.trim()),
				" ",
				new TextComponent("&c[&c⋁&c]").setClick("run_command", "/p demote " + removeRank(mod.name).trim()).setHoverValue("&7Demote " + mod.name.trim()),
				" ",
				new TextComponent("&4[&4-&4]").setClick("run_command", "/p remove " + removeRank(mod.name).trim()).setHoverValue("&7Kick " + mod.name.trim())
			).chat();
        } else {
            ChatLib.chat(`${mod.status}${arrow} ${mod.name}`)
        }
    })

    if(party.members.length > 0)
        ChatLib.chat('&eMembers:')

    party.members.forEach(member => {
        switch(party.role) {
            case roles.leader:
                new Message(
                    `${member.status}${arrow} ${member.name}`,
                    " ",
                    new TextComponent("&2[&2⋀&2]").setClick("run_command", "/p transfer " + removeRank(member.name).trim()).setHoverValue("&7Transfer party to " + member.name.trim()),
                    " ",
                    new TextComponent("&a[&a⋀&a]").setClick("run_command", "/p promote " + removeRank(member.name).trim()).setHoverValue("&7Promote " + member.name.trim()),
                    " ",
                    new TextComponent("&4[&4-&4]").setClick("run_command", "/p remove " + removeRank(member.name).trim()).setHoverValue("&7Kick " + member.name.trim())
                ).chat();
                break;
            case roles.moderator:
            case roles.member:
            default:
                ChatLib.chat(`${member.status}${arrow} ${member.name}`)
                break;
        }
    })
}

register('chat', () => {
    if (!settings.getSetting("Better Utilities", "Better Parties")) return;
    if(party.waiting) {
        party.waiting = false;
        print_party()
    }
}).setChatCriteria('&9&m-----------------------------&r')

register('chat', () => {
    if (!settings.getSetting("Better Utilities", "Better Parties")) return;
    party.num = undefined;
    party.leader = undefined;
    party.moderators = [];
    party.members = [];
    party.role = roles.member;
}).setChatCriteria('&cYou are not currently in a party.&r')

register('chat', (ppNum, event) => {
    if (!settings.getSetting("Better Utilities", "Better Parties")) return;
	cancel(event);

    party.waiting = true;

    party.num = undefined;
    party.leader = undefined;
    party.moderators = [];
    party.members = [];
    party.role = roles.member;

    party.num = ppNum;
}).setChatCriteria('&6Party Members (${ppnum})&r').setParameter('start');

register('chat', (name, status, event) => {
    if (!settings.getSetting("Better Utilities", "Better Parties")) return;
	cancel(event);

    if(removeRank(name).trim() === Player.getName())
        party.role = roles.leader;

    party.leader = {'name': name, 'status': status};
}).setChatCriteria('&eParty Leader: ${name} &r${status}●&r').setParameter('start');

register('chat', (mods, event) => {
    if (!settings.getSetting("Better Utilities", "Better Parties")) return;
	cancel(event);

    const list = mods.replace(/&r/g, '').split(" \u25CF ");
    list.forEach(name => {
        if(name.length === 0)
            return;

        let status = name.substring(name.length - 2, name.length) // idk could add a yellow dot for away or something

        if(removeRank(name).trim() === Player.getName())
            party.role = roles.moderator;

        party.moderators.push({ 'name': name, 'status': status });
    })
}).setChatCriteria('&eParty Moderators: ${mods}').setParameter('start');


register('chat', (members, event) => {
    if (!settings.getSetting("Better Utilities", "Better Parties")) return;
	cancel(event);

    const list = members.replace(/&r/g, '').split(" \u25CF ");
    list.forEach(name => {
        if(name.length === 0)
            return;
        name = name.trim()
        let status = name.substring(name.length - 2, name.length) // idk could add a yellow dot for away or something
        party.members.push({ 'name': name, 'status': status });
    })
}).setChatCriteria('&eParty Members: ${members}').setParameter('start');
