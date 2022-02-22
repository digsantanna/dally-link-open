'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const open_1 = __importDefault(require('open'));
async function handleOpenTask(URL_TASK) {
  console.log(`Abrindo ${URL_TASK}...`);
  await (0, open_1.default)(URL_TASK);
  console.log('Encerrando...');
}
exports.default = handleOpenTask;

