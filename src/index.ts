#!/usr/bin/env node
import handleOpenTask from './handlerOpenTask';
import getTaskTime from './getTaskTime';
import hoursNow from './hoursNow';
import getTaskLink from './getTaskLink';

const taskTime: string = getTaskTime();
const link: string = getTaskLink();

console.log(`O link "${link}" será aberto às "${taskTime}"`);

let hour: string = hoursNow();

while (taskTime !== hour) {
  hour = hoursNow();
};

handleOpenTask(link);