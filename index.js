/* 
 *  
 *  Praxis by PrinceBunBun981
 *  
 */

//-- Functions
function enableModule(module) {
    require(module);
    console.log(`[PRAXIS] Enabled ${module}`);
}

//-- Import all other modules from the modules folder 

// Commands
enableModule("./modules/commands/fun.js");
enableModule("./modules/commands/px.js");
enableModule("./modules/commands/fakeboop.js");
enableModule("./modules/commands/givememoreinfo.js");
enableModule("./modules/commands/playerinfo.js");
enableModule("./modules/commands/list.js");
enableModule("./modules/commands/getfriends.js");
enableModule("./modules/commands/aliases.js");


// Solvers
enableModule("./modules/solvers/fetchur.js");
enableModule("./modules/solvers/quickmaths.js");


// Better Utilities
enableModule("./modules/better-utilities/betterfasttravel.js");
enableModule("./modules/better-utilities/betterfriendlist.js");
enableModule("./modules/better-utilities/betterparties.js");
enableModule("./modules/better-utilities/betterhollows.js");


// Chat Utilities
enableModule("./modules/chat-utilities/autoutils.js");
enableModule("./modules/chat-utilities/autoignore.js");
enableModule("./modules/chat-utilities/changemessages.js");
enableModule("./modules/chat-utilities/hidemessages.js");


// Debug
enableModule("./modules/debug/getproxy.js");
enableModule("./modules/debug/getserver.js");
enableModule("./modules/debug/test.js");


// Easy Report
enableModule("./modules/easy-report/socialoptions.js");
enableModule("./modules/easy-report/quickreport.js");