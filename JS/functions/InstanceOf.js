"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsFoxElement = void 0;
const FoxElm_js_1 = require("../class/FoxElm.js");
function IsFoxElement(elm) {
    return elm instanceof FoxElm_js_1.$FoxElm;
}
exports.IsFoxElement = IsFoxElement;
