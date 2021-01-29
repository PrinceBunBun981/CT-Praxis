/* 
 *  
 *  HopWatch by PrinceBunBun981
 *  
 */

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
import { settings } from "./settings";
//-- Import all other modules from the modules folder 

// Commands
import hw from "./modules/commands/hw.js";
register("command", hw.callback).setTabCompletions(hw.tabCompletions).setName(hw.name);

import scooby from "./modules/commands/scooby.js";
register("command", scooby.callback).setName(scooby.name)

import whadafak from "./modules/commands/whadafak.js";
register("command", whadafak.callback).setName(whadafak.name)

import fakeboop from "./modules/commands/fakeboop.js";
register("command", fakeboop.callback).setTabCompletions(fakeboop.tabCompletions).setName(fakeboop.name);

// Extra Warp Commands
import warps from "./modules/commands/warps.js";
import warplist from "./modules/commands/warplist.js";
if (settings.getSetting("Quality of Life", "Extra Fast Travel Commands")) {
    register("command", warps.callback).setTabCompletions(warps.tabCompletions).setName(warps.name);
    register("command", warplist.callback).setName(warplist.name);
}

// Solvers
import fetchur from "./modules/solvers/fetchur.js";
register("chat", fetchur.callback).setCriteria(fetchur.criteria);

import puzzler from "./modules/solvers/puzzler.js";
register("chat", puzzler.chat).setCriteria(puzzler.criteria);
register("tick", puzzler.tick);