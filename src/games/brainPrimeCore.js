import readlineSync from 'readline-sync';
import { gameProcess } from './gameProcessor.js';

const maxOperandValue = 100; // maximum operand value
const taskStr = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const divFind = (opA) => {
  const divs = [];
  for (let i = 1; i < opA; i += 1) if (opA % i === 0) divs.push(i);
  // console.log(`${opA} division by ${divs}`);
  if (divs.length > 1) return 'no';
  return 'yes';
};

const isSuccessivePrimeGameTurn = () => {
  const operandA = 1 + Math.floor(Math.random() * maxOperandValue);
  console.log(`Question: ${operandA}`);
  const userAnswer = readlineSync.question('Answer is : ');
  if (userAnswer.toLowerCase() === divFind(operandA)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${divFind(operandA)}.`);
  return false;
};

const primeGame = () => {
  gameProcess(isSuccessivePrimeGameTurn, taskStr);
};

export default primeGame;
