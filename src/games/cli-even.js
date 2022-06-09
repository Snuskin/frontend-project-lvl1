import run, { generateNumber } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumEven = (firstNumber) => firstNumber % 2 === 0;

export const generateNewRound = () => {
  const [firstNumber] = generateNumber();
  const question = `${firstNumber}`;
  const rightAnswer = isNumEven(firstNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
