import run, { generateNumber } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const greatestCommonDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return greatestCommonDivisor(secondNumber, firstNumber % secondNumber);
};

export const generateNewRound = () => {
  const [firstNumber, secondNumber] = generateNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `${greatestCommonDivisor(firstNumber, secondNumber)}`;
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
