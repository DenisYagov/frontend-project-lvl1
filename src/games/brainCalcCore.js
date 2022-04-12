import readlineSync from 'readline-sync';
import { gameProcess, randomGenerator } from '../gameProcessor.js';

const maxOperandValue = 10; // maximum operand value
const maxOperation = 3; // operation type nomber
const rule = 'What is the result of the expression?';

const isSuccessiveCalcGameTurn = () => {
  // two operands random generation
  const operandA = randomGenerator(maxOperandValue);
  const operandB = randomGenerator(maxOperandValue);
  // operation between operands random generation
  const op = randomGenerator(maxOperation);
  // symbol of operation receiving
  let charOP = '*';
  switch (op) {
    case 0: charOP = '+';
      break;
    case 1: charOP = '-';
      break;
    default: charOP = '*';
  }
  // task question generation and input
  console.log(`Question: ${operandA} ${charOP} ${operandB}`);
  const userSolution = readlineSync.question('Answer is : ');
  // checking if the ansewer is correct
  switch (op) {
    case 0: { if ((operandA + operandB) === parseInt(userSolution, 10)) { console.log('Correct!'); return true; }
      console.log(`${userSolution} is wrong answer ;(. Correct answer was ${operandA + operandB}`);
      return false; }
    case 1: { if ((operandA - operandB) === parseInt(userSolution, 10)) { console.log('Correct!'); return true; }
      console.log(`${userSolution} is wrong answer ;(. Correct answer was ${operandA - operandB}`);
      return false; }
    case 2: { if ((operandA * operandB) === parseInt(userSolution, 10)) { console.log('Correct!'); return true; }
      console.log(`${userSolution} is wrong answer ;(. Correct answer was ${operandA * operandB}`);
      return false; }
    default: console.log(`${userSolution} is wrong answer ;(. Correct answer was ...`);
      return false;
  }
};

const calcGame = () => {
  gameProcess(isSuccessiveCalcGameTurn, rule);
};

export default calcGame;
