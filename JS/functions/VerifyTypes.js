"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsMatriz = exports.IsArray = exports.IsObj = exports.IsNum = void 0;
/**
 * Verifica se o elemento é um número ou não
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsNum(target) {
    return (target < 0) || (target >= 0);
}
exports.IsNum = IsNum;
/**
 * Verifica se o elemento é um Objeto(não array) ou não
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsObj(target) {
    return (typeof target === "object" && Array.isArray(target) === false);
}
exports.IsObj = IsObj;
/**
 * Verifica se o elemento é um Array ou não
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsArray(target) {
    return Array.isArray(target) === true;
}
exports.IsArray = IsArray;
/**
 * Verifica se o elemento é uma matriz ou não
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsMatriz(target) {
    let is = new Array();
    if (IsArray(target)) {
        is.push(true);
        for (let key of target) {
            is.push(IsArray(key));
        }
    }
    return !is.includes(false);
}
exports.IsMatriz = IsMatriz;
