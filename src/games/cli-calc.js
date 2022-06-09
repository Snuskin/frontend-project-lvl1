import run, { generateNumber } from '../index.js';

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
  const [firstNumber, secondNumber] = generateNumber();
  const operand = operands[Math.floor(Math.random() * operands.length)];
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  const rightAnswer = `${calculate(firstNumber, secondNumber, operand)}`;
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);