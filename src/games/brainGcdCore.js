import readlineSync from 'readline-sync';
import { gameProcess } from './gameProcessor.js';

const maxOperandValue = 100; // maximum operand value
const taskStr = 'Find the greatest common divisor of given numbers.';

const gcdFind = (operandA, operandB) => {
  const divs = [];
  let out = 0;
  for (let i = 1; i <= operandA; i += 1) if (operandA % i === 0) divs.push(i);
  for (let i = 0; i < divs.length; i += 1) if (operandB % divs[i] === 0) out = i;
  // console.log(`divs = ${divs}`);
  // console.log(`out = ${out}`);
  return divs[out];
};

const isSuccessiveGcdGameTurn = () => {
  const operandA = 1 + Math.floor(Math.random() * maxOperandValue);
  const operandB = 1 + Math.floor(Math.random() * maxOperandValue);
  console.log(`Question: ${operandA} ${operandB}`);
  const Answer = readlineSync.question('Answer is : ');
  if (parseInt(Answer, 10) === gcdFind(operandA, operandB)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${Answer} is wrong answer ;(. Correct answer was ${gcdFind(operandA, operandB)}.`);
  return false;
};

const gcdGame = () => {
  gameProcess(isSuccessiveGcdGameTurn, taskStr);
};

export default gcdGame;
