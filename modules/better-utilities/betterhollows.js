import { settings } from "../../settings";

function sendToHollows() {
    if (!settings.getSetting("Better Utilities", "Better Hollows")) return;

    ChatLib.command("enterthecrystalhollows")
}

function buyNewPass() {
    if (!settings.getSetting("Better Utilities", "Better Hollows")) return;

    ChatLib.command("purchasecrystallhollowspass");
}

register('chat', sendToHollows).setCriteria("&e[NPC] &5Gwendolyn&f: &rGreat! Now hop on into the Minecart and I'll get you on your way!&r")
register('chat', sendToHollows).setCriteria("&e[NPC] &5Gwendolyn&f: &rGood luck in the mines!&r")

register('chat', buyNewPass).setCriteria("&eClick here to purchase a new 2 hour pass for &610,000 Coins&r")
register('chat', buyNewPass).setCriteria("&eClick to buy a new pass for &610,000 Coins&r")
