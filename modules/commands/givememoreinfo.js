register("command", arg => {
    if (!arg) return ChatLib.command("givememoreinfo");
    let prefix = "&e&lINFO!"
    switch (arg.toLowerCase()) {
        case "test": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 `),
            "&d&m" + ChatLib.getChatBreak("-")));
        // Better Utilities
        case "betterfriendslist": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 &aBetter Friends List&7 changes the way &e/f list&7 looks, giving it custom page navigation and more.`),
            "&d&m" + ChatLib.getChatBreak("-")));
        case "betterparties": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 &aBetter Parties&7 changes the way &e/p list&7 looks, giving useful click commands.`),
            "&d&m" + ChatLib.getChatBreak("-")));
        case "betterfasttravel": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 &dBetter Fast Travel&7 adds more commands to &e/warp&7 and a &e/warps&7 command to list them all.`),
            "&d&m" + ChatLib.getChatBreak("-")));
        // Chat Utilities
        case "autoignore": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 &3Auto Ignore&7 lets you can set a filter and whenever a player triggers it, they will automatically be added to your &e/ignore&7 players list.`),
            "&d&m" + ChatLib.getChatBreak("-")));
        case "joinleavenotificationcolor": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 &eJoin Leave Notification Color&7 changes join and leave notifications to have the respectable &cred&7 and &agreen&7 upon joining and leaving.`),
            "&d&m" + ChatLib.getChatBreak("-")));
        case "autol": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 &aAuto L&7 makes you automatically say &eL&7 whenever a player is banned from your server.`),
            "&d&m" + ChatLib.getChatBreak("-")));
        case "autogg": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 &aAuto GG&7 makes you automatically say &egg&7 when an event ends.`),
            "&d&m" + ChatLib.getChatBreak("-")));
        case "hidemessages": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 &cHide Messages&7 hides specific chat messages from being shown to you.`),
            "&d&m" + ChatLib.getChatBreak("-")));
        // Solvers
        case "fetchur": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 The &dFetchur&7 solver automatically says the item &dFetchur&7 needs. &7(&aSkyblock&7)`),
            "&d&m" + ChatLib.getChatBreak("-")));
        case "puzzler": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 The &dPuzzler&7 solver automatically shows the location of the block needed to mine. &7(&aSkyblock&7)`),
            "&d&m" + ChatLib.getChatBreak("-")));
        case "quickmaths": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 The &dQuick Maths&7 solver automatically solves &dQuick Maths&7 equations and adds a button to say the answer directly in chat.`),
            "&d&m" + ChatLib.getChatBreak("-")));
        // Debug
        case "sendproxydebug": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 Upon switching certain servers on &6Hypixel&7, the &dProxy&7 you are currently on will be shown in chat.`),
            "&d&m" + ChatLib.getChatBreak("-")));
        case "sendserverdebug": return ChatLib.chat(new Message(
            "&d&m" + ChatLib.getChatBreak("-"),
            new TextComponent(`${prefix}&7 Upon switching certain servers on &6Hypixel&7, the &dServer&7 you are currently on will be shown in chat.`),
            "&d&m" + ChatLib.getChatBreak("-")));
    }
    ChatLib.chat(`&fUnknown command. Type "/help" for help.`)
}).setName("givememoreinfo").setTabCompletions([""]);