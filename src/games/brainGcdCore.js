// import readlineSync from 'readline-sync';
import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

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
  for (let i = divs.length - 1; i >= 0; i -= 1) {
    if (operandB % divs[i] === 0) {
      out = i;
      break;
    }
  }
  // console.log(`divs = ${divs}`);
  // console.log(`out = ${out}`);
  return divs[out];
};

const taskAndRespondGcdGameGeneration = () => {
  const taskAndRespond = [];
  const operandA = getRandomNumber(1, maxOperandValue);
  const operandB = getRandomNumber(1, maxOperandValue);
  taskAndRespond.push(`${operandA} ${operandB}`);
  taskAndRespond.push(gcdFind(operandA, operandB).toString());
  return taskAndRespond;
};

const playGcdGame = () => {
  gameProcess(taskAndRespondGcdGameGeneration, rule);
};

export default playGcdGame;
