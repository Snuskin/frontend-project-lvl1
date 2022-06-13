import run from '../index.js';
import generateNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const createProgression = (firstNumber, difference) => {
  const maxArrLength = 9;
  const progressionArray = [];
  for (let i = 0; i <= maxArrLength; i += 1) {
    progressionArray.push(firstNumber + i * difference);
  }
  return progressionArray;
};
export const generateNewRound = () => {
  const [firstNumber] = generateNumber();
  const [, , difference] = generateNumber();
  const calculatedProgression = createProgression(firstNumber, difference);
  const [, , , index] = generateNumber();
  const hiddenNumber = calculatedProgression.splice(index, 1, '..');
  const rightAnswer = `${hiddenNumber}`;
  const question = calculatedProgression.join(' ');
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
