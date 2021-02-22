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
require("./modules/commands/fun.js");

import hw from "./modules/commands/hw.js";
register("command", hw.callback).setTabCompletions(hw.tabCompletions).setName(hw.name);

import scooby from "./modules/commands/scooby.js";
register("command", scooby.callback).setName(scooby.name)

import whadafak from "./modules/commands/whadafak.js";
register("command", whadafak.callback).setName(whadafak.name)

import fakeboop from "./modules/commands/fakeboop.js";
register("command", fakeboop.callback).setTabCompletions(fakeboop.tabCompletions).setName(fakeboop.name);

import prince from "./modules/commands/prince.js";
register("command", prince.callback).setTabCompletions(prince.tabCompletions).setName(prince.name);

// Solvers
import fetchur from "./modules/solvers/fetchur.js";
register("chat", fetchur.callback).setCriteria(fetchur.criteria);

import puzzler from "./modules/solvers/puzzler.js";
register("chat", puzzler.chat).setCriteria(puzzler.criteria);
register("tick", puzzler.tick);

// Utilities
require("./modules/utilities/betterfriendlist.js");
require("./modules/utilities/betterparties.js");
require("./modules/utilities/autoignore.js");
require("./modules/utilities/joinleavecolors.js");

if (settings.getSetting("Quality of Life", "Extra Fast Travel Commands")) {
    require("./modules/utilities/betterfasttravel.js")
}