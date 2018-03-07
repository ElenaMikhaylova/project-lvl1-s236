import { makeGame, makeGameElement, getRandomInt } from '..';

const getProgressionString = (start, step, length, skip) => {
  const iter = (index, acc) => {
    if (index > length) {
      return acc;
    }
    let current;
    if (index === skip) {
      current = '..';
    } else {
      current = String(start + (step * (index - 1)));
    }
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
  const answer = startNumber + (stepProgression * (skipIndex - 1));
  return makeGameElement(question, String(answer));
};

export default () => {
  const rules = 'What number is missing in this progression?';
  makeGame(rules, getElementGameProgression);
};
