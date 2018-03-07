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
  let gameElement;
  let gameQuestion;
  let gameAnswer;
  let userAnswer;
  console.log('Welcome to the Brain Games!');
  console.log(stringRules);
  const userName = getUserName();
  for (let counter = 1; counter <= countGames; counter += 1) {
    gameElement = getGameElement();
    gameQuestion = getQuestionGameElement(gameElement);
    console.log(`Question: ${gameQuestion}`);
    gameAnswer = getAnswerGameElement(gameElement);
    userAnswer = getUserAnswer();
    if (userAnswer === gameAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
