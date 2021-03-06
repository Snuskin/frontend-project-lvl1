import run from '../index.js';
import generateNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const createProgression = (firstNumber, maxProgrLength, difference) => {
  const progression = [];
  for (let i = 0; i <= maxProgrLength; i += 1) {
    progression.push(firstNumber + i * difference);
  }
  return progression;
};
export const generateNewRound = () => {
  const firstNumber = generateNumber(0, 100);
  const difference = generateNumber(1, 20);
  const maxProgrLength = generateNumber(5, 9);
  const calculatedProgression = createProgression(firstNumber, maxProgrLength, difference);
  const index = generateNumber(0, maxProgrLength);
  const hiddenNumber = calculatedProgression.splice(index, 1, '..');
  const rightAnswer = String(hiddenNumber);
  const question = calculatedProgression.join(' ');
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
