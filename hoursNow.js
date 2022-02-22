'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const reBuilder = (num) => {
  return `${num < 10 ? '0' + num : num}`;
};
function hoursNow() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${reBuilder(hours)}:${reBuilder(minutes)}`;
}
exports.default = hoursNow;

