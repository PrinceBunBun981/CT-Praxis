import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";
export const settings = new SettingsObject(
    "Praxis", 
    []
).setCommand("pxmenu").setSize(415, 300);

Setting.register(settings);