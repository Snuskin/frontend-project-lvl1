import run, { generateNumber } from '../index.js';

const description = 'What is the result of the expression?';
const [firstNumber, secondNumber] = generateNumber();
const operands = ['+', '-', '*'];
const calculate = (operand) => {
  switch (operand) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operand: '${operand}'!`);
  }
};

export const generateNewRound = () => {
  const operand = operands[Math.floor(Math.random() * operands.length)];
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  const rightAnswer = `${calculate(firstNumber, operand, secondNumber)}`;
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
