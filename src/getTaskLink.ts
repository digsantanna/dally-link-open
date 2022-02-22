import readline from 'readline-sync';

export default function getTaskLink(): string {
  let link: string = readline.question('Qual link deseja que seja aberto? ');

  while (!link.length) {
    link = readline.question('Por favor insira o link: ');
  }

  const re1: RegExp = /^https:\/\//;
  const re2: RegExp = /^http:\/\//;

  if (!re1.test(link) && !re2.test(link)) link = 'https://' + link;
  
  return link;
};
