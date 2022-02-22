"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function getTaskLink() {
    let link = readline_sync_1.default.question('Qual link deseja que seja aberto? ');
    while (!link.length) {
        link = readline_sync_1.default.question('Por favor insira o link: ');
    }
    const re1 = /^https:\/\//;
    const re2 = /^http:\/\//;
    if (!re1.test(link) && !re2.test(link))
        link = 'https://' + link;
    return link;
}
exports.default = getTaskLink;
;
