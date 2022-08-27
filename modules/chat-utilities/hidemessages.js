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

register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Pit Streaks")}).setCriteria('&r&c&lSTREAK! &r&7of &r&c${*} &r&7kills by ').setContains()

register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Pit Bounties")}).setCriteria('&r&6&lBOUNTY! &r&7of &r&6&l${*} &r&7on ').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Pit Bounties")}).setCriteria('&r&6&lBOUNTY! &r&7bump &r&6&l${*} &r&7on ').setContains()

register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Pit Notes")}).setCriteria('&r&e&lNOTE! ').setContains()

register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Pit Free XP")}).setCriteria('&r&a&lFREE XP! &r&7for participation ').setContains()

//&r&b[MVP&c+&b] Elepfant_kochen&f &6slid into the lobby!&r
//&r &b>&c>&a>&r &r&6[MVP&3++&6] candyies&f &6slid into the lobby!&r &a<&c<&b<&r
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Lobby Joins")}).setCriteria('&6joined the lobby!&r').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Lobby Joins")}).setCriteria('&6slid into the lobby!&r').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Lobby Joins")}).setCriteria('&6spooked in the lobby!&r').setContains()


//&r&b✦ &r&b[MVP&r&a+&r&b] Toaq&r&f &r&7found a &r&6Legendary Scanner Cloak &r&7in a &r&bCrafted Mystery Box #3&r&7!&r
//&r&b✦ &r&b[MVP&r&f+&r&b] Sr_Taylor&r&f &r&7found an &r&5Epic Baby Light Blue Sheep Pet &r&7in a &r&aMystery Box&r&7!&r
//&r&b✦ &r&b[MVP&r&2+&r&b] wu_ben&r&f &r&7found a &r&6Legendary Rainbow Gadget &r&7in a &r&aMystery Box&r&7!&r
//&b✦ &r&b[MVP&r&c+&r&b] canweplayonline&r&f &r&7found a &r&e✰✰✰✰&r&7✰ &r&bMystery Box&r&7!&r
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Mystery Boxes")}).setCriteria('&r&7found a &r&e✰✰✰✰✰ &r&bMystery Box&r&7!&r').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Mystery Boxes")}).setCriteria('&r&7found a &r&e✰✰✰✰&r&7✰ &r&bMystery Box&r&7!&r').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Mystery Boxes")}).setCriteria('&r&7found a &r&e✰✰✰&r&7✰✰ &r&bMystery Box&r&7!&r').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Mystery Boxes")}).setCriteria('&r&7found a &r&e✰✰&r&7✰✰✰ &r&bMystery Box&r&7!&r').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Mystery Boxes")}).setCriteria('&r&7found a &r&e✰&r&7✰✰✰✰ &r&bMystery Box&r&7!&r').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Mystery Boxes")}).setCriteria('&r&7in a &r&bCrafted Mystery Box #${*}&r&7!&r').setContains()
register('chat', (event) => {chatShit(event, "Hide Messages", "Hide Mystery Boxes")}).setCriteria('&r&7in a &r&aMystery Box&r&7!&r').setContains()