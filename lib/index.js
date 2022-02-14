const handleOpenTask = require('./handlerOpenTask');
const getTaskTime = require('./getTaskTime');
const hoursNow = require('./hoursNow');
const getTaskLink = require('./getTaskLink');

const dallyLinkOpen = async () => {
  const taskTime = getTaskTime();
  const link = getTaskLink();

  console.log(`O link "${link}" será aberto às "${taskTime}"`);

  let hour = hoursNow();

  while (taskTime !== hour) {
    hour = hoursNow();
    if (hour === taskTime) {
      await handleOpenTask(link);
      console.log('Encerrando...');
      break;
    }
  }
};

module.exports = dallyLinkOpen;
