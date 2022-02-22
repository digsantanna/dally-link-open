import open from 'open';

export default async function handleOpenTask (URL_TASK: string): Promise<void> {
  console.log(`Abrindo ${URL_TASK}...`);
  await open(URL_TASK);
  console.log('Encerrando...');
};
