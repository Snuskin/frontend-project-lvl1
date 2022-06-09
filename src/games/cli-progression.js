import run, { generateNumber } from '../index.js';

const description = 'What number is missing in the progression?';
const progressionArrayGenerate = (firstNumber, difference) => {
  const progressionArray = [];
  progressionArray.push(firstNumber);
  for (let i = 0; i <= 10; i += 1) {
    progressionArray.push(progressionArray[i] + difference);
  }
  return progressionArray;
};
export const generateNewRound = () => {
  const [firstNumber] = generateNumber();
  const difference = Math.floor(Math.random() * (10 - 1)) + 1;
  const preFinalArr = progressionArrayGenerate(firstNumber, difference);
  const index = Math.floor(Math.random() * (10 - 1)) + 1;
  const rightAnswer = `${preFinalArr[index]}`;
  const FinalArr = [
    ...preFinalArr.slice(0, preFinalArr.indexOf(preFinalArr[index])),
    '..',
    ...preFinalArr.slice(preFinalArr.indexOf(preFinalArr[index]) + 1),
  ];
  const question = FinalArr.join(' ');
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
