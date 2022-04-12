import readlineSync from 'readline-sync';
import { gameProcess, randomGenerator } from '../gameProcessor.js';

const maxOperandValue = 100; // maximum operand value
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const divFind = (opA) => {
  // array, that contains all divisions with whole remainder
  const divs = [];
  // loop with each diveder check
  for (let i = 1; i < opA; i += 1) {
    if (opA % i === 0) divs.push(i);
  }
  // console.log(`${opA} division by ${divs}`);
  // length of array chek. In case >1 the value is not prime
  if (divs.length > 1) return 'no';
  return 'yes';
};

const isSuccessivePrimeGameTurn = () => {
  // random task generation and dialog
  const operandA = 1 + randomGenerator(maxOperandValue);
  console.log(`Question: ${operandA}`);
  const userAnswer = readlineSync.question('Answer is : ');
  // checking if the answer is correct and result dialog
  if (userAnswer.toLowerCase() === divFind(operandA)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${divFind(operandA)}.`);
  return false;
};

const primeGame = () => {
  gameProcess(isSuccessivePrimeGameTurn, rule);
};

export default primeGame;
