import run from '../index.js';
import generateNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (firstNumber) => {
  if (firstNumber < 2) {
    return false;
  }

  for (let i = 2; i <= firstNumber / 2; i += 1) {
    if (firstNumber % i === 0) {
      return false;
    }
  }
  return true;
};

export const generateNewRound = () => {
  const firstNumber = generateNumber(0, 100);
  const question = String(firstNumber);
  const rightAnswer = isPrime(firstNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
