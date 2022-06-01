import readlineSync from 'readline-sync';
import { congrats } from "../src/index.js";
export const calculator = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');
    let rightAnswerCount = 0;
    while (rightAnswerCount < 3) {
        const firstNumber = Math.floor(Math.random() * (100 - 1)) + 1;
        const secondNumber = Math.floor(Math.random() * (100 - 1)) + 1;
        const arrOfOperands = ['+', '-', '*'];
        let rightAnswer;
        const operand = arrOfOperands[Math.floor(Math.random() * arrOfOperands.length)];
        console.log('Question:' + ' ' + firstNumber + " " + operand + " " + secondNumber);

        switch (operand) {
            case '+' :
                rightAnswer = firstNumber + secondNumber;
                break;
            case '-' :
                rightAnswer = firstNumber - secondNumber;
                break;
            case '*' :
                rightAnswer = firstNumber * secondNumber;
                break;    
        }
        let userAnswer = readlineSync.question('Your answer: ');
        userAnswer = Number(userAnswer);
        if (userAnswer !== rightAnswer) {
        rightAnswerCount = 0;
        console.log("'" + userAnswer + "'" + " is wrong answer ;(." + " " + "Correct answer was" + ' ' + "'" + rightAnswer + "'" + '.');
        console.log("Let's try again," + ' ' + name + '!');
        break;
    }
    else {
        rightAnswerCount += 1;
        console.log("Correct!");
    }
   }
   if (rightAnswerCount === 3) {
    console.log("Congratulations," + ' ' + name + '!');
}
}