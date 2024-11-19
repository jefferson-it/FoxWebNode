import { $FoxElm } from "../class/FoxElm.js";
import { $Foxes as FoxesGet } from "../class/FoxesGet.js";
import { $Fox as FoxGet } from "../class/FoxGet.js";
import { SettingsFox } from "../interfaces/Interface.Fox";
import { FoxElement } from "../interfaces/Types.Fox";

/**
 * @typedef { import("../interfaces/Interface.Fox.d.ts").StylesFoxes } StylesFoxes
 * @typedef { import("../interfaces/Interface.Fox.d.ts").SettingsFox } SettingsFox
 * @typedef { import("../interfaces/Types.Fox.ts").FoxElement} FoxElement
 * @typedef { import("../interfaces/Types.Fox.ts").FoxENV} FoxENV
 * @typedef { import("../interfaces/Types.Fox.ts").ConversorTo} ConversorTo
 * @typedef { import("../interfaces/Types.Fox.ts").FoxEvents} FoxEvents
 * @typedef { import("../interfaces/Types.Fox.ts").FoxTags} FoxTags
 * @typedef { import("../interfaces/Types.Fox.ts").FoxElm} $FoxElm
 * 
*/
/**
 * 
 * @param {string} query 
 * @returns 
 */
export function $FoxGet(query: string){
    return new FoxGet(query);
}
/**
 * 
 * @param {FoxElement} legacyElement 
 * @returns 
 */
export function $(legacyElement: FoxElement){
    return new $FoxElm(legacyElement);
}
/**
 * 
 * @param {string} query 
 * @returns 
 */
export function $FoxesGet(query: string){
    return new FoxesGet(query);
}
/**
 * 
 * @param {string} tagName 
 * @param {SettingsFox} settings 
 * @returns {$FoxElm}
 */
export function $Create(tagName: string, settings:SettingsFox): $FoxElm{
    const newElement = $(document?.createElement(tagName));

    newElement.SetSetting({...settings})

    return newElement;
}