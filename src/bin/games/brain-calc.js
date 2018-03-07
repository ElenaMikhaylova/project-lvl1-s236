#!/usr/bin/env node

import { makeGame, makeGameElement, getRandomInt } from '../..';

const getElementGameCalc = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 100;
  const firstOperand = getRandomInt(minRandomNumber, maxRandomNumber);
  const secondOperand = getRandomInt(minRandomNumber, maxRandomNumber);
  const signNumber = getRandomInt(1, 3);
  let sign;
  let answer;
  if (signNumber === 1) {
    sign = '+';
    answer = firstOperand + secondOperand;
  } else if (signNumber === 2) {
    sign = '-';
    answer = firstOperand - secondOperand;
  } else {
    sign = '*';
    answer = firstOperand * secondOperand;
  }
  const question = `${firstOperand} ${sign} ${secondOperand}`;
  return makeGameElement(question, String(answer));
};

const makeGameCalc = () => {
  const rules = 'What is the result of the expression?';
  makeGame(rules, getElementGameCalc);
};

makeGameCalc();
