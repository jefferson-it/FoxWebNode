"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Foxes_js_1 = require("./functions/Foxes.js");
const Utils_js_1 = require("./functions/Utils.js");
const VerifyTypes_js_1 = require("./functions/VerifyTypes.js");
const InstanceOf_js_1 = require("./functions/InstanceOf.js");
const request_js_1 = require("./HTTP/request.js");
require("./preload.js");
const queryParser_js_1 = __importDefault(require("./HTTP/queryParser.js"));
const instance_js_1 = __importDefault(require("./HTTP/instance.js"));
exports.default = {
    DOM: {
        $: Foxes_js_1.$,
        $Fox: Foxes_js_1.$FoxGet,
        $Foxes: Foxes_js_1.$FoxesGet,
        $Create: Foxes_js_1.$Create,
        $IsFoxElement: InstanceOf_js_1.IsFoxElement,
    },
    $VerifyTypes: {
        IsArray: VerifyTypes_js_1.IsArray,
        IsMatriz: VerifyTypes_js_1.IsMatriz,
        IsNum: VerifyTypes_js_1.IsNum,
        IsObj: VerifyTypes_js_1.IsObj
    },
    $Math: {
        RoundNum: Utils_js_1.RoundNum,
        RoundNumUp: Utils_js_1.RoundNumUp,
        RoundNumDown: Utils_js_1.RoundNumDown,
        GenRandom: Utils_js_1.GenRandom
    },
    $Utils: {
        FindAllIndex: Utils_js_1.FindAllIndex,
        GenRandomText: Utils_js_1.GenRandomText,
        MaskText: Utils_js_1.MaskText
    },
    HTTP: {
        SendRequest: request_js_1.SendRequest,
        QueryParser: queryParser_js_1.default,
        RequestInstance: instance_js_1.default
    }
};
