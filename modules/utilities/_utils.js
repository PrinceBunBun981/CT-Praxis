// helper function to remove rank and formatting from a username
export function removeRank(name) {
    name = ChatLib.removeFormatting(name);
    return name.replace(/\[.+]/g, "");
}