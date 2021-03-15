// helper function to remove rank and formatting from a username
export function removeRank(name) {
    name = ChatLib.removeFormatting(name);
    return name.replace(/\[.+]/g, "");
}

// add a delay to an action
export function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}