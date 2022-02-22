const reBuilder = (num: number): string => {
  return `${num < 10 ? '0' + num : num}`;
}

export default function hoursNow(): string {
  const hours: number = new Date().getHours();
  const minutes: number = new Date().getMinutes();

  return `${reBuilder(hours)}:${reBuilder(minutes)}`;
};
