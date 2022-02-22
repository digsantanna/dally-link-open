#!/usr/bin/env node
const handleOpenTask = require('./handlerOpenTask');
const getTaskTime = require('./getTaskTime');
const hoursNow = require('./hoursNow');
const getTaskLink = require('./getTaskLink');

const taskTime = getTaskTime();
const link = getTaskLink();

console.log(`O link "${link}" será aberto às "${taskTime}"`);

let hour = hoursNow();

while (taskTime !== hour) {
  hour = hoursNow();
  if (hour === taskTime) {
    handleOpenTask(link);
    break;
  }
}
