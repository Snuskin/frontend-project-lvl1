import run, { generateNumber } from '../index.js';

const [firstNumber] = generateNumber();
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = () => {
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
  const question = `${firstNumber}`;
  const rightAnswer = isPrime(firstNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export const startGame = () => run(description, generateNewRound);
