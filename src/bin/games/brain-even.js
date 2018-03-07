#!/usr/bin/env node
import { makeGame, makeGameElement, getRandomInt } from '../..';

const getElementGameEven = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 100;
  const question = getRandomInt(minRandomNumber, maxRandomNumber);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return makeGameElement(question, answer);
};

const makeGameEven = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  makeGame(rules, getElementGameEven);
};

makeGameEven();
