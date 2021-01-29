export default ({
    name: 'warps',
    tabCompletions: [],
    callback: (arg) => {
        var p1 = new Message(
            "&d&lFAST TRAVEL! &7Page &e1 &7&o(You can click on each warp)\n",
            new TextComponent(" &9SkyBlock Hub&f - hub, l, lobby")
                .setClick("run_command", "/warp hub")
                .setHoverValue("&7Runs &e/warp hub&7 on click."), "\n",
            new TextComponent(" &9Private Island&f - home, island, is")
                .setClick("run_command", "/warp home")
                .setHoverValue("&7Runs &e/warp home&7 on click."), "\n",
            new TextComponent(" &9Spider's Den&f - spider, sd")
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
            "\n",
            "\n",
            "\n",
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
    }
})