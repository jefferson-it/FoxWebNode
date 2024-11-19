"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Create = exports.$FoxesGet = exports.$ = exports.$FoxGet = void 0;
const FoxElm_js_1 = require("../class/FoxElm.js");
const FoxesGet_js_1 = require("../class/FoxesGet.js");
const FoxGet_js_1 = require("../class/FoxGet.js");
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
function $FoxGet(query) {
    return new FoxGet_js_1.$Fox(query);
}
exports.$FoxGet = $FoxGet;
/**
 *
 * @param {FoxElement} legacyElement
 * @returns
 */
function $(legacyElement) {
    return new FoxElm_js_1.$FoxElm(legacyElement);
}
exports.$ = $;
/**
 *
 * @param {string} query
 * @returns
 */
function $FoxesGet(query) {
    return new FoxesGet_js_1.$Foxes(query);
}
exports.$FoxesGet = $FoxesGet;
/**
 *
 * @param {string} tagName
 * @param {SettingsFox} settings
 * @returns {$FoxElm}
 */
function $Create(tagName, settings) {
    const newElement = $(document?.createElement(tagName));
    newElement.SetSetting({ ...settings });
    return newElement;
}
exports.$Create = $Create;
