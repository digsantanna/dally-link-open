import readline from 'readline-sync';

export default function getTaskTime(): string {
  let taskTime: string = readline.question('Em qual horário(HH:MM) você deseja que o link seja aberto? ');

  const re: RegExp = /\d{2}:\d{2}/;

  while (!re.test(taskTime)) {
    taskTime = readline.question('Por favor insira um horário no formato "HH:MM": ');
  }
  return taskTime;
};