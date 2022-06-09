import run, { generateNumber } from '../index.js';

const [firstNumber] = generateNumber();
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumEven = () => firstNumber % 2 === 0;

export const generateNewRound = () => {
  const question = `${firstNumber}`;
  const rightAnswer = isNumEven(firstNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
