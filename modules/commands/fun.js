var sendMessage = new Message(
  "&5&m" + ChatLib.getChatBreak("-"),
  "&5&lHYPIXEL FUN COMMANDS! &2&lL&7 Lobbies Only &7- &b&lS&7 Seasonal", "\n",
  ` &9/boop <name> &f- Sends the user a message saying "&5&lBoop!&f"`, "\n",
  ` &9/iamtryingtobenicebutitshard &f- Randomizes capital letters. &2&lL `, "\n",
  ` &9/fw &f- Launches a firework. Requires &a[VIP]&f or above. &2&lL `, "\n",
  ` &9/zoo &f- Sends to lobby with "&6This isn't the Zoo, it's the lobby!&f"`, "\n",
  ` &9/easter &f- Gives you an easter egg. &2&lL &b&lS`, "\n",
  ` &9/trickortreat &f- Halloween Command. &2&lL &b&lS`, "\n",
  ` &9/snowball &f- Launches a snowball. &2&lL &b&lS`, "\n",
  ` &9/presents &f- Christmas Command. &2&lL &b&lS`, "\n",
  ` &9/whatsmyface &f- Sends your face in chat. &2&lL`, "\n",
  ` &9/whatdoyoudo &f- Responds "&7Nothing.&f" &2&lL`, "\n",
  ` &9/opme &f- Responds "&cYou are no longer OP!&f"`, "\n",
  ` &9/mystery &f- Responds "&6Scooby dooby doo, where are you?&f"`, "\n",
  ` &9/rawr &f- Responds "&7Wow, you scared me there!&f" &2&lL`, "\n",
  ` &9/removearenabrawl &f- Responds "ok" &2&lL`, "\n",
  ` &9/pokemon &f- Responds "&3Gotta catch 'em all!" &2&lL`, "\n",
  ` &9/hello or /hi &f- Responds "&aWhy hello there.&f"`, "\n",
  ` &9/admin &f- Gives a random responce like "&cTry Harder&f" &2&lL`, "\n",
  ` &9/thiscommandliterallydoesnothing &f- What do you expect?`, "\n",
  ` &9/cat &f- Responds with a picture of a cat in chat. &3&lUHC`, "\n",
  ` &9/shrug &f- Puts the shrug emoji in chat. Requires &6[MVP++] &2&lL`, "\n",
  ` &9/emoji or emojis &f- Sends all &6[MVP++]&f emojis in chat.`, "\n",
  "&5&m" + ChatLib.getChatBreak("-")
);

register("command", () => {
    ChatLib.chat(sendMessage)
}).setName("fun")

register("command", () => {
    ChatLib.chat(sendMessage)
}).setName("funcommands")