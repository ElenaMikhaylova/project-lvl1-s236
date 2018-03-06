import readlineSync from 'readline-sync';

export const startGame = (stringRules) => {
  console.log('Welcome to the Brain Games!');
  if (stringRules.length !== 0) {
    console.log(stringRules);
  }
};

export const getUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const gameEven = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const countGames = 3;
  let randomNumber;
  let userAnswer;
  let correctAnswer;
  startGame('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserName();
  for (let counter = 1; counter <= countGames; counter += 1) {
    randomNumber = getRandomInt(minNumber, maxNumber);
    console.log(`Question: ${randomNumber}`);
    correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    userAnswer = getUserAnswer();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
