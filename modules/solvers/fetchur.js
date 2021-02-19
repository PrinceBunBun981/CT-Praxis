import { settings } from "../../settings";
export default ({
    name: 'fetchur',
    criteria: '&e[NPC] Fetchur&f: ${str}',
    callback: (str, event) => {
        if (!settings.getSetting("Solvers", "Fetchur Enabled")) return;
        if (str.includes("tmrw")) {
            ChatLib.chat("&e[NPC] Fetchur&f: &cYou've already solved this puzzle for today.");
            return cancel(event);
        }
        if (str.includes("yellow and see through")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dYellow Stained Glass&f.");
            return cancel(event);
        }
        if (str.includes("circlular and sometimes moves")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dCompass&f.");
            return cancel(event);
        }
        if (str.includes("expensive minerals")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dMithril&f.");
            return cancel(event);
        }
        if (str.includes("useful during celebrations")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dFirework Rocket&f.");
            return cancel(event);
        }
        if (str.includes("hot and gives energy")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dCheap Coffee&f or &dDecent Coffee.");
            return cancel(event);
        }
        if (str.includes("tall and can be opened")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dWooden Door&f.");
            return cancel(event);
        }
        if (str.includes("explosive but more than usual")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dSuperboom TNT&f.");
            return cancel(event);
        }
        if (str.includes("wearable and grows")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dPumpkin&f.");
            return cancel(event);
        }
        if (str.includes("shiny and makes sparks")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dFlint and Steel&f.");
            return cancel(event);
        }
        if (str.includes("red and white and you can mine it")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dNether Quartz Ore&f.");
            return cancel(event);
        }
        if (str.includes("round and green, or purple")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dEnder Pearl&f.");
            return cancel(event);
        }
        if (str.includes("red and soft")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dRed Wool&f.");
            return cancel(event);
        }
        if (str.includes("brown and fluffy")) {
            ChatLib.chat("&e[NPC] Fetchur&f: im looking for &dRabbit's Foot&f.");
            return cancel(event);
        }
    },
})