import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxOperandValue = 100; // maximum operand value
const rule = 'Find the greatest common divisor of given numbers.';

const gcdFind = (operandA, operandB) => {
  // algoritm works faster with minimal operand in the loop
  const minOperand = Math.min(operandA, operandB);
  // loop to find all whole reminder for operandA and operandB
  for (let i = minOperand; i > 0; i -= 1) {
    if ((operandA % i === 0) && (operandB % i === 0)) {
      return i;
    }
  }
  return 1;
};

const taskAndRespondGcdGameGeneration = () => {
  const operandA = getRandomNumber(1, maxOperandValue);
  const operandB = getRandomNumber(1, maxOperandValue);
  const task = (`${operandA} ${operandB}`);
  const rightRespond = gcdFind(operandA, operandB).toString();
  return [task, rightRespond];
};

const playGcdGame = () => {
  gameProcess(taskAndRespondGcdGameGeneration, rule);
};

export default playGcdGame;
