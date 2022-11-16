export const getRandom = (max: number,min:number) => {
  if(isNaN(min)) min=0;
  const num = Math.random()*(max-min);
  return parseInt(String(num + min));
}
