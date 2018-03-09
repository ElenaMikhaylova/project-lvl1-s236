import { makeGame, makeGameElement, getRandomInt } from '..';

const getBalanceNumber = (num) => {
  const digits = String(num).split('').sort((a, b) => a - b).join('');
  const min = Number(digits.charAt(0));
  const max = Number(digits.charAt(digits.length - 1));
  const remainder = max - min;
  if (remainder < 2) {
    return Number(digits);
  }
  const balance = (remainder - (remainder % 2)) / 2;
  const restStr = digits.substr(1, digits.length - 2);
  return getBalanceNumber(Number(`${min + balance}${restStr}${max - balance}`));
};

const getElementGameBalance = () => {
  const minRandomNumber = 10;
  const maxRandomNumber = 10000;
  const question = getRandomInt(minRandomNumber, maxRandomNumber);
  const answer = getBalanceNumber(question);
  return makeGameElement(question, answer);
};

export default () => {
  const rules = 'Balance the given number.';
  makeGame(rules, getElementGameBalance);
};
