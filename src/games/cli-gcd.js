import run from '../index.js';
import generateNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const getCommonDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return getCommonDivisor(secondNumber, firstNumber % secondNumber);
};

export const generateNewRound = () => {
  const firstNumber = generateNumber(0, 100);
  const secondNumber = generateNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `${getCommonDivisor(firstNumber, secondNumber)}`;
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
