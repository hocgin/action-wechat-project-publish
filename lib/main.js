"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugPrintf = void 0;
const core_1 = require("./core");
const core = __importStar(require("@actions/core"));
let getInput = () => ({
    debug: core.getInput('debug') === 'true',
    upload_key: core.getInput('upload_key'),
    workspace: core.getInput('workspace'),
    action_type: core.getInput('action_type'),
    type: core.getInput('type'),
    env: core.getInput('env'),
    version: core.getInput('version'),
    description: core.getInput('description'),
    preview_pagepath: core.getInput('preview_pagepath'),
    preview_pagequery: core.getInput('preview_pagequery'),
    proxy: core.getInput('proxy'),
});
let handleOutput = (output = {}) => {
    Object.keys(output).forEach((key) => core.setOutput(key, output[key]));
    debugPrintf('输出变量: ', output);
};
function debugPrintf(...args) {
    if (getInput().debug) {
        console.log(...args);
    }
}
exports.debugPrintf = debugPrintf;
try {
    (() => __awaiter(void 0, void 0, void 0, function* () { return handleOutput(yield (0, core_1.run)(getInput())); }))();
}
catch (error) {
    core.setFailed(error === null || error === void 0 ? void 0 : error.message);
}