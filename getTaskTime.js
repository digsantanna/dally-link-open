'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const readline_sync_1 = __importDefault(require('readline-sync'));
function getTaskTime() {
  let taskTime = readline_sync_1.default.question('Em qual horário(HH:MM) você deseja que o link seja aberto? ');
  const re = /\d{2}:\d{2}/;
  while (!re.test(taskTime)) {
    taskTime = readline_sync_1.default.question('Por favor insira um horário no formato "HH:MM": ');
  }
  return taskTime;
}
exports.default = getTaskTime;

