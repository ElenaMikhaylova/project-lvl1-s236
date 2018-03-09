import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const makeGameElement = (question, answer) => cons(question, answer);
const getQuestionGameElement = gameElement => car(gameElement);
const getAnswerGameElement = gameElement => cdr(gameElement);

export const getUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const makeGame = (stringRules, getGameElement) => {
  const countGames = 3;
  console.log('Welcome to the Brain Games!');
  console.log(stringRules);
  const userName = getUserName();
  const makeGameElements = (gameCounter = 1) => {
    if (gameCounter > countGames) {
      return true;
    }
    const gameElement = getGameElement();
    console.log(`Question: ${getQuestionGameElement(gameElement)}`);
    const gameAnswer = getAnswerGameElement(gameElement);
    const userAnswer = getUserAnswer();
    if (userAnswer === String(gameAnswer)) {
      console.log('Correct!');
      return makeGameElements(gameCounter + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'.
Let's try again, ${userName}!`);
    return false;
  };
  if (makeGameElements()) {
    console.log(`Congratulations, ${userName}!`);
  }
};
