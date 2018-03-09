import { makeGame, makeGameElement, getRandomInt } from '..';

const getProgressionElement = (start, step, index) => start + (step * (index - 1));

const getProgressionString = (start, step, length, skip) => {
  const iter = (index, acc) => {
    if (index > length) {
      return acc;
    }
    const current = index !== skip ? getProgressionElement(start, step, index) : '..';
    return iter(index + 1, index === 1 ? current : `${acc} ${current}`);
  };
  return iter(1, '');
};

const getElementGameProgression = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 10;
  const startNumber = getRandomInt(minRandomNumber, maxRandomNumber);
  const stepProgression = getRandomInt(minRandomNumber, maxRandomNumber);
  const lengthProgression = 10;
  const skipIndex = getRandomInt(1, lengthProgression);
  const question = getProgressionString(startNumber, stepProgression, lengthProgression, skipIndex);
  const answer = getProgressionElement(startNumber, stepProgression, skipIndex);
  return makeGameElement(question, answer);
};

export default () => {
  const rules = 'What number is missing in this progression?';
  makeGame(rules, getElementGameProgression);
};
