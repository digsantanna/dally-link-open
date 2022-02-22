const readlineSync = require('readline-sync');

module.exports = () => {
  let taskTime = readlineSync.question('Em qual horário(HH:MM) você deseja que o link seja aberto? ');

  const re = /\d{2}:\d{2}/;

  while (!re.test(taskTime)) {
    taskTime = readlineSync.question('Por favor insira um horário no formato "HH:MM": ');
  }
  return taskTime;
};