import { settings } from "../../settings";
register("MessageSent", function(msg, event) {
    console.log('message sent')
    if (!settings.getSetting("Chat Utilities", "Bypass EZ")) return;
    if (msg.toLowerCase().includes('ez')) {
        ChatLib.say(msg.replace(/\bez\b/, 'eࠀz'))
        cancel(event)
    }
})