import mainLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const greatestCommonDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return greatestCommonDivisor(secondNumber, firstNumber % secondNumber);
};

export const conductGame = () => {
  const firstNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const secondNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `${greatestCommonDivisor(firstNumber, secondNumber)}`;
  return [question, rightAnswer];
};

export const startGame = () => mainLogic(description, conductGame);
