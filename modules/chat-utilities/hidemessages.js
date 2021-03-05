import { settings } from "../../settings";

function chatShit(event, category, setting) {
	if (!settings.getSetting(category, setting)) return;
    cancel(event);
}

register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Tips")}).setCriteria('&aYou tipped ').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Tips")}).setCriteria('&aYou were tipped by ').setContains()

register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Other Gifts")}).setCriteria('&cThis gift is for ').setContains()

register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Guild XP")}).setCriteria('&r&aYou earned &r&2${*} GEXP &r&afrom playing ').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Guild XP")}).setCriteria('&r&2&lGUILD XP! &r&7Earned &r&2${*} &r&7past ').setContains()

register('chat', (event) => {chatShit(event, "Pit Utilities", "Hide Pit Streaks")}).setCriteria('&r&c&lSTREAK! &r&7of &r&c${*} &r&7kills by ').setContains()

register('chat', (event) => {chatShit(event, "Pit Utilities", "Hide Pit Bounties")}).setCriteria('&r&6&lBOUNTY! &r&7of &r&6&l${*} &r&7on ').setContains()
register('chat', (event) => {chatShit(event, "Pit Utilities", "Hide Pit Bounties")}).setCriteria('&r&6&lBOUNTY! &r&7bump &r&6&l${*} &r&7on ').setContains()

register('chat', (event) => {chatShit(event, "Pit Utilities", "Hide Pit Notes")}).setCriteria('&r&e&lNOTE! ').setContains()

register('chat', (event) => {chatShit(event, "Pit Utilities", "Hide Pit Free XP")}).setCriteria('&r&a&lFREE XP! &r&7for participation ').setContains()