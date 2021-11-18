register("command", args => {
    if (!args) return ChatLib.chat("&cMissing arguments. Usage: /socialoptions (player)");
    var message = new Message(
        `\n  &7${args}\n`,
        new TextComponent(" &c[Report Player] ")
            .setClick("run_command", `/report ${args}`)
            .setHoverValue(`&eClick to &c/report &7${args}`),
        new TextComponent(" &e[Ignore Player] ")
            .setClick("run_command", `/ignore add ${args}`)
            .setHoverValue(`&eClick to &e/ignore &7${args}`),
        new TextComponent(" &a[ChatReport Player] ")
            .setClick("run_command", `/report ${args} -b CHR -C`)
            .setHoverValue(`&eClick to &a/report &7${args}`),
        `\n`
    )

    return ChatLib.chat(message);
}).setName("socialoptions");