const getRandomNumber = () => {
  let min = 1;
  let max = 10;
  return Math.floor(Math.random() * (max - min) + min);
}
