"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Fox = void 0;
const FoxElm_js_1 = require("./FoxElm.js");
class $Fox extends FoxElm_js_1.$FoxElm {
    /**
     * @param {string} query
     */
    constructor(query) {
        super(document?.querySelector(query));
    }
}
exports.$Fox = $Fox;
