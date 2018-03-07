import { makeGame, makeGameElement, getRandomInt } from '..';

const getBalanceNumber = (num) => {
  const digits = num.split('').sort((a, b) => a - b).join('');
  const min = Number(digits.charAt(0));
  const max = Number(digits.charAt(digits.length - 1));
  const remainder = max - min;
  if (remainder < 2) {
    return digits;
  }
  const balance = (remainder - (remainder % 2)) / 2;
  let restStr = '';
  if (digits.length > 2) {
    restStr = digits.substr(1, digits.length - 2);
  }
  return getBalanceNumber(`${min + balance}${restStr}${max - balance}`);
};

const getElementGameBalance = () => {
  const minRandomNumber = 10;
  const maxRandomNumber = 10000;
  const question = getRandomInt(minRandomNumber, maxRandomNumber);
  const answer = getBalanceNumber(String(question));
  return makeGameElement(question, String(answer));
};

export default () => {
  const rules = 'Balance the given number.';
  makeGame(rules, getElementGameBalance);
};
