"use strict";
/**
 * @typedef { import("./lib.ef22.ts").Number } Number
 * @typedef { import("./lib.ef22.ts").String } String
 * @typedef { import("./lib.ef22.ts").Object } Object
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const VerifyTypes_js_1 = require("./functions/VerifyTypes.js");
Number.prototype.format = function (x) {
    let template = "0".repeat(x);
    let numBase = this.toString();
    return `${template.slice(numBase.length)}${numBase}`;
};
Number.prototype[Symbol.iterator] = function () {
    let currentNum = 0;
    return {
        next: () => {
            if (currentNum == this) {
                return { done: true };
            }
            else if (this < 0) {
                return {
                    value: currentNum--,
                    done: false
                };
            }
            else if (this >= 0) {
                return {
                    value: currentNum++,
                    done: false
                };
            }
        }
    };
};
Object.prototype.toString = function () {
    return JSON.stringify(this);
};
Object.prototype.values = function () {
    return Object.values(this);
};
Object.prototype.keys = function () {
    return Object.keys(this);
};
String.prototype.toObject = function () {
    try {
        let obj = this.toString();
        return JSON.parse(obj);
    }
    catch (error) {
        console.error(`This string isn't a json string.`);
        return null;
    }
};
String.prototype.toNum = function () {
    if ((0, VerifyTypes_js_1.IsNum)(this)) {
        return Number(this);
    }
    else {
        return NaN;
    }
};
String.prototype.toInt = function () {
    const num_val = this.toNum();
    if ((0, VerifyTypes_js_1.IsNum)(num_val)) {
        return Math.floor(num_val);
    }
    else {
        return NaN;
    }
};
String.prototype.toFloat = function (x) {
    const num_val = this.toNum();
    if ((0, VerifyTypes_js_1.IsNum)(num_val)) {
        return Math.floor(num_val).toFixed(x);
    }
    else {
        return NaN;
    }
};
