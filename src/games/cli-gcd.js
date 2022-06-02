import { mainLogic } from '../index.js';
 const introduction = 'Find the greatest common divisor of given numbers.';
 const greatestCommonDivisor = (firstNumber, secondNumber) => {
    if( ! secondNumber) { 
        return firstNumber;
      } 
      else { 
        return greatestCommonDivisor(secondNumber, firstNumber % secondNumber);  
      }
 };

 export const content = () => {
    const firstNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    const secondNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    const question = `${firstNumber} ${secondNumber}`;
    const rightAnswer = `${greatestCommonDivisor(firstNumber, secondNumber)}`;
    return [question, rightAnswer];
};

    export const currLogic = () => mainLogic(introduction, content);    
