#!/usr/bin/env node

import { makeGame, makeGameElement, getRandomInt } from '../..';

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
  const firstOperand = getRandomInt(minRandomNumber, maxRandomNumber);
  const secondOperand = getRandomInt(minRandomNumber, maxRandomNumber);
  const question = `${firstOperand} ${secondOperand}`;
  const answer = getGCD(firstOperand, secondOperand);
  return makeGameElement(question, String(answer));
};

const makeGameGCD = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  makeGame(rules, getElementGameGCD);
};

makeGameGCD();
