import { settings } from "../../settings";
register("chat", (equation, event) => {
    if (!settings.getSetting("Solvers", "Quick Maths")) return;
    try {
        var eq = `${equation}`.replaceAll("x", "*");
        var solve = eval(eq);

        ChatLib.chat(new TextComponent(`&d&lQUICK MATHS!&a Solved the equation: &e${solve} &7[&e&lCLICK&7]`).setClick("run_command", `${solve}`).setHoverValue("&7Prints the answer in chat."))
    } catch (e) {
        ChatLib.chat(`&d&lQUICK MATHS!&c Could not regonize that equation.`)
    }
}).setCriteria("&r&d&lQUICK MATHS! &r&7Solve: &r&e${equation}&r");

register("command", (...args) => {
    try {
        var eq = `${args.splice(0)}`.replaceAll("x", "*");
        var solve = eval(eq);

        ChatLib.chat(`&d&lMATHS!&7 Answer: &e${solve}`);
    } catch (e) {
        ChatLib.chat(`&d&lMATHS!&c Could not regonize that equation, do not use spaces.`)
    }
}).setName("maths");