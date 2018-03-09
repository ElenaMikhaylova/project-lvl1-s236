
import { makeGame, makeGameElement, getRandomInt } from '..';

const getElementGameCalc = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 100;
  const operand1 = getRandomInt(minRandomNumber, maxRandomNumber);
  const operand2 = getRandomInt(minRandomNumber, maxRandomNumber);
  const signNumber = getRandomInt(1, 3);
  if (signNumber === 1) {
    return makeGameElement(`${operand1} + ${operand2}`, operand1 + operand2);
  } else if (signNumber === 2) {
    return makeGameElement(`${operand1} - ${operand2}`, operand1 - operand2);
  }
  return makeGameElement(`${operand1} * ${operand2}`, operand1 * operand2);
};

export default () => {
  const rules = 'What is the result of the expression?';
  makeGame(rules, getElementGameCalc);
};
