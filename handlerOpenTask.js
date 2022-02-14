const open = require('open');

module.exports = async (URL_TASK) => {
  console.log(`Abrindo ${URL_TASK}...`);
  await open(URL_TASK);
  console.log('Encerrando...');
};
