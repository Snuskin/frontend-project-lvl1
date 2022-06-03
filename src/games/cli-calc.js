import { mainLogic } from '../index.js';

const introduction = 'What is the result of the expression?';

const arrOfOperands = ['+', '-', '*'];
const calculate = (firstNumber, operand, secondNumber) => {
  switch (operand) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
  }
};

export const content = () => {
  const firstNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const secondNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const operand = arrOfOperands[Math.floor(Math.random() * arrOfOperands.length)];
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  const rightAnswer = `${calculate(firstNumber, operand, secondNumber)}`;
  return [question, rightAnswer];
};

export const currLogic = () => mainLogic(introduction, content);
