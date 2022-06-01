import readlineSync from 'readline-sync';
export const isNumberEven = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
 console.log('Answer "yes" if the number is even, otherwise answer "no".')
 let rightAnswerCount = 0;
 while (rightAnswerCount < 3) {
     const questNumber = Math.floor(Math.random() * (1000 - 1)) + 1;
     let rightAnswer;
     if (questNumber % 2 === 0) {
         rightAnswer = 'yes';
        }
        else {
            rightAnswer = 'no';
        }
        const userAnswer = readlineSync.question('Question:' + " " + questNumber + " ");
 
 if (userAnswer !== rightAnswer) {
     rightAnswerCount = 0;
     console.log("'" + userAnswer + "'" + " is wrong answer");
     console.log("Let's try again," + ' ' + name + '!');
 }
 else {
     rightAnswerCount += 1;
     console.log("Correct!");
 }
}
console.log("Congratulations," + ' ' + name + '!');
}