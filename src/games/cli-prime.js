import mainLogic from '../index.js';

const introduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (questNumber) => {
  if (questNumber < 2) {
    return false;
  }

  for (let i = 2; i <= questNumber / 2; i += 1) {
    if (questNumber % i === 0) {
      return false;
    }
  }
  return true;
};

export const content = () => {
  const questNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const question = `${questNumber}`;
  const rightAnswer = isPrime(questNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export const currLogic = () => mainLogic(introduction, content);
