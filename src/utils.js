export default function generateNumber() {
  const firstNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const secondNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const difference = Math.floor(Math.random() * (10 - 1)) + 1;
  const index = Math.floor(Math.random() * (10 - 1)) + 1;
  const operandIndex = Math.floor(Math.random() * 2);
  return [firstNumber, secondNumber, difference, index, operandIndex];
}
