import readlineSync from 'readline-sync';
import { gameProcess, randomGenerator } from '../gameProcessor.js';

const maxOperandValue = 100; // maximum operand value
const rule = 'Find the greatest common divisor of given numbers.';

const gcdFind = (operandA, operandB) => {
  // array of divisions with whole reminder of first operand
  const divs = [];
  let out = 0; // position of GCD in array as output
  // loop to find all whole reminder for operandA
  for (let i = 1; i <= operandA; i += 1) {
    if (operandA % i === 0) divs.push(i);
  }
  // loop to find all all whole reminder in array divs[] and fix the maximum value
  for (let i = 0; i < divs.length; i += 1) {
    if (operandB % divs[i] === 0) out = i;
  }
  // console.log(`divs = ${divs}`);
  // console.log(`out = ${out}`);
  return divs[out];
};

const isSuccessiveGcdGameTurn = () => {
  // random generation of operands for the task
  const operandA = 1 + randomGenerator(maxOperandValue);
  const operandB = 1 + randomGenerator(maxOperandValue);
  // user dialog
  console.log(`Question: ${operandA} ${operandB}`);
  const userSolution = readlineSync.question('Answer is : ');
  // checking if the task answer is correct and respond
  if (parseInt(userSolution, 10) === gcdFind(operandA, operandB)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userSolution} is wrong answer ;(. Correct answer was ${gcdFind(operandA, operandB)}.`);
  return false;
};

const gcdGame = () => {
  gameProcess(isSuccessiveGcdGameTurn, rule);
};

export default gcdGame;
