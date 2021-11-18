//&a[VIP&6+&a] Blanks_QuTie&f&r&f: BUY CO!NS 3ASILY: kirapog com&r
register("chat", (game, event) => {
    cancel(event)
    ChatLib.chat(`&cYou are already playing ${game}, idiot.&r`)
}).setCriteria("${username}: ${message}");