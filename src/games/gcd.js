import { makeGame, makeGameElement, getRandomInt } from '..';

const getGCD = (num1, num2) => {
  const a = Math.max(num1, num2);
  const b = Math.min(num1, num2);
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const getElementGameGCD = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 100;
  const operand1 = getRandomInt(minRandomNumber, maxRandomNumber);
  const operand2 = getRandomInt(minRandomNumber, maxRandomNumber);
  const question = `${operand1} ${operand2}`;
  const answer = getGCD(operand1, operand2);
  return makeGameElement(question, answer);
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  makeGame(rules, getElementGameGCD);
};
