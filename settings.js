import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";
export const settings = new SettingsObject(
    "Praxis", 
    []
).setCommand("pxmenu").setSize(400, 200);

Setting.register(settings);
