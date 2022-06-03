import { mainLogic } from '../index.js';
    
const introduction = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumEven = (questNumber) => questNumber % 2 === 0;
 
export const content = () => {
 const questNumber = Math.floor(Math.random() * (100 - 1)) + 1;
 const question = `${questNumber}`;
 const rightAnswer = isNumEven(questNumber) ? 'yes' : 'no';
 return [question, rightAnswer];
};

export const currLogic = () => mainLogic(introduction, content);