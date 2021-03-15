register("command", arg => {
    if (!settings.getSetting("Better Utilities", "Better Fast Travel")) return;
    if (!arg) return ChatLib.command("warp");
    switch (arg.toLowerCase()) {
        //case "list": return ChatLib.command("warps", true);
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
        // JERRYS WORKSHOP
        case "jerry": return ChatLib.command("savethejerrys")
        case "jw": return ChatLib.command("savethejerrys")
        case "xmas": return ChatLib.command("savethejerrys")
    }
    ChatLib.chat("&cSorry, I don't understand that warp type. Type &e/warps&c for a list of all &dFast Travel&c destinations.")
}).setName("warp");