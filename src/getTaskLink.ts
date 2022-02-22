const readlineSync = require('readline-sync');

module.exports = () => {
  let link = readlineSync.question('Qual link deseja que seja aberto? ');

  while (!link) {
    readlineSync.question('Por favor insira o link: ');
  }

  const re1 = /^https:\/\//;
  const re2 = /^http:\/\//;

  if (!re1.test(link) && !re2.test(link)) link = 'https://' + link;
  
  return link;
};
