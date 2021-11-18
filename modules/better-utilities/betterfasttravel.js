register("command", (arg) => {
    var p1 = new Message(
        "&d&lFAST TRAVEL! &7Page &e1 &7&o(You can click on each warp)\n",
        new TextComponent(" &9SkyBlock Hub&f - hub, l, lobby")
            .setClick("run_command", "/warp hub")
            .setHoverValue("&7Runs &e/warp hub&7 on click."), "\n",
        new TextComponent(" &9Private Island&f - home, island, is")
            .setClick("run_command", "/warp home")
            .setHoverValue("&7Runs &e/warp home&7 on click."), "\n",
        new TextComponent(" &9Spider's Den&f - spider, sd, den")
            .setClick("run_command", "/warp spider")
            .setHoverValue("&7Runs &e/warp spider&7 on click."), "\n",
        new TextComponent(" &9Blazing Fortress&f - nether, net, bf, blazing, blaze")
            .setClick("run_command", "/warp nether")
            .setHoverValue("&7Runs &e/warp nether&7 on click."), "\n",
        new TextComponent(" &9The End&f - end, te")
            .setClick("run_command", "/warp end")
            .setHoverValue("&7Runs &e/warp end&7 on click."), "\n",
        new TextComponent(" &9The Park&f - park, tp, forest, tree")
            .setClick("run_command", "/warp park")
            .setHoverValue("&7Runs &e/warp park&7 on click."), "\n",
        new TextComponent(" &9Gold Mine&f - gold, gm")
            .setClick("run_command", "/warp gold")
            .setHoverValue("&7Runs &e/warp gold&7 on click."), "\n",
        new TextComponent(" &9Deep Caverns&f - deep, dc")
            .setClick("run_command", "/warp deep")
            .setHoverValue("&7Runs &e/warp deep&7 on click."), "\n",

        "                              ",
        "&8&l<< &f-",
        new TextComponent(" &a&l>>")
            .setClick("run_command", "/warps 2")
            .setHoverValue("&7Runs &e/warps 2&7 on click."),
    )
    // << - >>
    //    - >>
    // << -   
    var p2 = new Message(
        "&d&lFAST TRAVEL! &7Page &e2 &7&o(You can click on each warp)\n",
        new TextComponent(" &9Dwarven Mines&f - mines, dwarf, dwarven, dm")
            .setClick("run_command", "/warp mines")
            .setHoverValue("&7Runs &e/warp mines&7 on click."), "\n",
        new TextComponent(" &9The Barn&f - barn, tb")
            .setClick("run_command", "/warp barn")
            .setHoverValue("&7Runs &e/warp barn&7 on click."), "\n",
        new TextComponent(" &9Mushroom Desert&f - desert, md, mushroom")
            .setClick("run_command", "/warp desert")
            .setHoverValue("&7Runs &e/warp desert&7 on click."), "\n",
        new TextComponent(" &9The Castle&f - castle, tc")
            .setClick("run_command", "/warp castle")
            .setHoverValue("&7Runs &e/warp castle&7 on click."), "\n",
        new TextComponent(" &9Sirius Shack&f - da, ss, sirius, dark")
            .setClick("run_command", "/warp da")
            .setHoverValue("&7Runs &e/warp da&7 on click."), "\n",
        new TextComponent(" &9Graveyard Caves&f - crypt, gc, grave")
            .setClick("run_command", "/warp crypt")
            .setHoverValue("&7Runs &e/warp crypt&7 on click."), "\n",
        new TextComponent(" &9Top of Nest&f - nest, ton")
            .setClick("run_command", "/warp nest")
            .setHoverValue("&7Runs &e/warp nest&7 on click."), "\n",
        new TextComponent(" &9Magma Cube Boss&f - magma, mcb")
            .setClick("run_command", "/warp magma")
            .setHoverValue("&7Runs &e/warp magma&7 on click."), "\n",

        "                              ",
        new TextComponent("&c&l<< ")
            .setClick("run_command", "/warps 1")
            .setHoverValue("&7Runs &e/warps 1&7 on click."), "&f-", 
        new TextComponent("&a&l >>")
            .setClick("run_command", "/warps 3")
            .setHoverValue("&7Runs &e/warps 3&7 on click.")
    )
    var p3 = new Message(
        "&d&lFAST TRAVEL! &7Page &e3 &7&o(You can click on each warp)\n",
        new TextComponent(" &9Dragon's Nest&f - drag, dragon, dn")
            .setClick("run_command", "/warp drag")
            .setHoverValue("&7Runs &e/warp drag&7 on click."), "\n",
        new TextComponent(" &9Jungle Island&f - jungle, ji")
            .setClick("run_command", "/warp jungle")
            .setHoverValue("&7Runs &e/warp jungle&7 on click."), "\n",
        new TextComponent(" &9Howling Cave&f - howl, hc")
            .setClick("run_command", "/warp howl")
            .setHoverValue("&7Runs &e/warp howl&7 on click."), "\n",
        new TextComponent(" &9Dungeon Hub&f - dungeon_hub, dungeon, dh")
            .setClick("run_command", "/warp dungeon_hub")
            .setHoverValue("&7Runs &e/warp dungeon_hub&7 on click."),
        new TextComponent(" &9Museum&f - museum")
            .setClick("run_command", "/warp museum")
            .setHoverValue("&7Runs &e/warp museum&7 on click."),
        new TextComponent(" &9Dwarven Forge&f - forge, df")
            .setClick("run_command", "/warp forge")
            .setHoverValue("&7Runs &e/warp forge&7 on click."),
        new TextComponent(" &9Crystal Hallows&f - crystals, hallows, ch")
            .setClick("run_command", "/warp crystals")
            .setHoverValue("&7Runs &e/warp crustals&7 on click."),
        "\n",
        "\n",
        "                              ",
        new TextComponent("&c&l<< ")
            .setClick("run_command", "/warps 2")
            .setHoverValue("&7Runs &e/warps 2&7 on click."),
        "&f- &8&l>> "
    )
    if (!arg) return ChatLib.chat(p1);
    switch (arg) {
        case "1": return ChatLib.chat(p1);
        case "2": return ChatLib.chat(p2);
        case "3": return ChatLib.chat(p3);
    }
    return ChatLib.chat("&cThat page could not be found.");
}).setName("warps");

register("command", (arg) => {
    if (!arg) return ChatLib.command("warp");
    switch (arg.toLowerCase()) {
        // HUB
        case "hub": return ChatLib.command("warp hub")
        case "lobby": return ChatLib.command("warp hub")
        case "l": return ChatLib.command("warp hub")
        // PRIVATE ISLAND
        case "home": return ChatLib.command("warp home")
        case "island": return ChatLib.command("warp home")
        case "is": return ChatLib.command("warp home")
        // SPIDERS DEN
        case "spider": return ChatLib.command("warp spider")
        case "den": return ChatLib.command("warp spider")
        case "sd": return ChatLib.command("warp spider")
        // BLAZING FORTRESS
        case "nether": return ChatLib.command("warp nether")
        case "net": return ChatLib.command("warp nether")
        case "bf": return ChatLib.command("warp nether")
        case "blazing": return ChatLib.command("warp nether")
        case "blaze": return ChatLib.command("warp nether")
        // THE END
        case "end": return ChatLib.command("warp end")
        case "te": return ChatLib.command("warp end")
        // THE PARK
        case "park": return ChatLib.command("warp park")
        case "tp": return ChatLib.command("warp park")
        case "forest": return ChatLib.command("warp park")
        case "tree": return ChatLib.command("warp park")
        // GOLD MINE
        case "gold": return ChatLib.command("warp gold")
        case "gm": return ChatLib.command("warp gold")
        // DEEP CAVERNS
        case "deep": return ChatLib.command("warp deep")
        case "dc": return ChatLib.command("warp deep")
        // DWARVEN MINES
        case "mines": return ChatLib.command("warp mines")
        case "dwarf": return ChatLib.command("warp mines")
        case "dwarven": return ChatLib.command("warp mines")
        case "dm": return ChatLib.command("warp mines")
        // THE BARN
        case "barn": return ChatLib.command("warp barn")
        case "tb": return ChatLib.command("warp barn")
        // MUSHROOM DESERT
        case "desert": return ChatLib.command("warp desert")
        case "md": return ChatLib.command("warp desert")
        case "mushroom": return ChatLib.command("warp desert")
        // CASTLE
        case "castle": return ChatLib.command("warp castle")
        case "tc": return ChatLib.command("warp castle")
        // SIRIUS SHACK
        case "da": return ChatLib.command("warp da")
        case "ss": return ChatLib.command("warp da")
        case "sirius": return ChatLib.command("warp da")
        case "dark": return ChatLib.command("warp da")
        // GRAVEYARD CAVES
        case "crypt": return ChatLib.command("warp crypt")
        case "gc": return ChatLib.command("warp crypt")
        case "grave": return ChatLib.command("warp crypt")
        // TOP OF NEST
        case "nest": return ChatLib.command("warp nest")
        case "ton": return ChatLib.command("warp nest")
        // MAGMA CUBE BOSS
        case "magma": return ChatLib.command("warp magma")
        case "mcb": return ChatLib.command("warp magma")
        // DRAGONS NEST
        case "drag": return ChatLib.command("warp drag")
        case "dragon": return ChatLib.command("warp drag")
        case "dn": return ChatLib.command("warp drag")
        // JUNGLE ISLAND
        case "jungle": return ChatLib.command("warp jungle")
        case "ji": return ChatLib.command("warp jungle")
        // HOWLING CAVE
        case "howl": return ChatLib.command("warp howl")
        case "hc": return ChatLib.command("warp howl")
        // DUNGEON HUB
        case "dungeon_hub": return ChatLib.command("warp dungeon_hub")
        case "dungeon": return ChatLib.command("warp dungeon_hub")
        case "dh": return ChatLib.command("warp dungeon_hub")
        // MUSEUM
        case "museum": return ChatLib.command("warp museum")
        // DWARVEN FORGE
        case "forge": return ChatLib.command("warp forge")
        case "df": return ChatLib.command("warp forge")
        // CRYSTAL HALLOWS
        case "crystals": return ChatLib.command("warp crystals")
        case "crystal": return ChatLib.command("warp crystals")
        case "hallows": return ChatLib.command("warp crystals")
        case "hallow": return ChatLib.command("warp crystals")
        case "ch": return ChatLib.command("warp crystals")
    }
    ChatLib.chat("&cSorry, I don't understand that warp type. Type &e/warp&c to open the &dFast Travel&c menu.")
}).setName("warp");