/* eslint-disable arrow-body-style */
import mainLogic from '../index.js';

const description = 'What is the result of the expression?';

const arrOfOperands = ['+', '-', '*'];
const calculate = (firstNumber, operand, secondNumber) => {
  switch (operand) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

export const conductGame = () => {
  const firstNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const secondNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const operand = arrOfOperands[Math.floor(Math.random() * arrOfOperands.length)];
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  const rightAnswer = `${calculate(firstNumber, operand, secondNumber)}`;
  return [question, rightAnswer];
};

export const startGame = () => mainLogic(description, conductGame);
