import { makeGame, makeGameElement, getRandomInt } from '..';

const isPrime = (num, item = 2) => {
  if (item ** 2 > num) {
    return true;
  }
  if (num % item === 0) {
    return false;
  }
  return isPrime(num, item + 1);
};

const getElementGamePrime = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 50;
  const question = getRandomInt(minRandomNumber, maxRandomNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return makeGameElement(question, String(answer));
};

export default () => {
  const rules = 'Is this number prime?';
  makeGame(rules, getElementGamePrime);
};
