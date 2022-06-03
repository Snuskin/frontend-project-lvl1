import { mainLogic } from '../index.js';

const introduction = 'What number is missing in the progression?';
const progressionArrayGenerate = (firstNumber, difference) => {
  const progressionArray = [];
  progressionArray.push(firstNumber);
  for (let i = 0; i <= 10; i++) {
    progressionArray.push(progressionArray[i] + difference);
  }
  return progressionArray;
};

export const content = () => {
  const firstNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  const difference = Math.floor(Math.random() * (10 - 1)) + 1;
  const finalArr = progressionArrayGenerate(firstNumber, difference);
  const index = Math.floor(Math.random() * (10 - 1)) + 1;
  const rightAnswer = `${finalArr[index]}`;
  finalArr[index] = '..';
  const question = finalArr.join(' ');
  return [question, rightAnswer];
};

export const currLogic = () => mainLogic(introduction, content);
