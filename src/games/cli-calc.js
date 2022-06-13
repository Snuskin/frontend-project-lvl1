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
  const [firstNumber, secondNumber] = generateNumber();
  const [, , , , operandIndex] = generateNumber();
  const operand = operands[operandIndex];
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  const calculateResult = calculate(firstNumber, secondNumber, operand);
  const rightAnswer = calculateResult.toString();
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
