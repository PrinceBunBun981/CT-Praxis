import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";
export const settings = new SettingsObject(
    "HopWatch", 
    []
).setCommand("hwmenu").setSize(400, 200);

Setting.register(settings);
