import run from '../index.js';
import generateNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operands = ['+', '-', '*'];
const calculate = (firstNumber, secondNumber, operand) => {
  switch (operand) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return `Unknown operand: '${operand}'!`;
  }
};

export const generateNewRound = () => {
  const firstNumber = generateNumber(0, 100);
  const secondNumber = generateNumber(0, 100);
  const operand = operands[generateNumber(0, operands.length - 1)];
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  const rightAnswer = calculate(firstNumber, secondNumber, operand).toString();
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
