import run from '../index.js';
import generateNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (firstNumber) => firstNumber % 2 === 0;

export const generateNewRound = () => {
  const [firstNumber] = generateNumber();
  const question = `${firstNumber}`;
  const rightAnswer = isEven(firstNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
