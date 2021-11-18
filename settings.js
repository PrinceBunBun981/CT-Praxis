import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";
export const settings = new SettingsObject(
    "Praxis", 
    []
).setCommand("pxmenu").setSize(426, 300);

Setting.register(settings);