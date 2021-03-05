import { settings } from "../../settings";
const Color = Java.type("java.awt.Color");
let toggleDisplay = false;
let cVal = 0;
let pos = [0, 0, 0];
let elapsed = 0;

register("chat", (str, event) => {
    if (!settings.getSetting("Solvers", "Puzzler")) return;
    if (str.includes("tomorrow")) {
        ChatLib.chat("&e[NPC] &dPuzzler&f: &cYou've already solved this puzzle for today.");
        return cancel(event);
    }
    const puzzle = ChatLib.removeFormatting(str);
    const posX = Player.lookingAt().getX();
    const posY = Player.lookingAt().getY();
    const posZ = Player.lookingAt().getZ();

    let posOffset = [0, 0];

    puzzle.split("").forEach(char => {
        if (char === "▲") {
            posOffset[1]++;
        } else if (char === "▼") {
            posOffset[1]--;
        } else if (char === "▶") {
            posOffset[0]--;
        } else if (char === "◀") {
            posOffset[0]++;
        }
    });

    pos = [posX + posOffset[0], posY, posZ + posOffset[1]];

    toggleDisplay = true;
}).setCriteria('&e[NPC] &dPuzzler&f: ${str}');


register("tick", (str, event) => {
    if (!toggleDisplay) return;
    if (elapsed === 200) {
        toggleDisplay = false;
        elapsed = 0;
    } else elapsed++;

    cVal += 0.01;

    const color = Color.getHSBColor(cVal, 1, 1);
    const r = color.getRed();
    const g = color.getGreen();
    const b = color.getBlue();

    try {
        World.particle.spawnParticle('SPELL_MOB',
            pos[0],
            pos[1],
            pos[2],
            r / 255,
            g / 255,
            b / 255).setMaxAge(100);
    } catch (e) {
        ChatLib.chat("&e[NPC] &dPuzzler&f: &cDo not move your mouse after clicking on the NPC for a second or two.");
        toggleDisplay = false;
    }
});