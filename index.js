#!/usr/bin/env node
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const handlerOpenTask_1 = __importDefault(require('./handlerOpenTask'));
const getTaskTime_1 = __importDefault(require('./getTaskTime'));
const hoursNow_1 = __importDefault(require('./hoursNow'));
const getTaskLink_1 = __importDefault(require('./getTaskLink'));
const taskTime = (0, getTaskTime_1.default)();
const link = (0, getTaskLink_1.default)();
console.log(`O link "${link}" será aberto às "${taskTime}"`);
let hour = (0, hoursNow_1.default)();
while (taskTime !== hour) {
  hour = (0, hoursNow_1.default)();
}

(0, handlerOpenTask_1.default)(link);
