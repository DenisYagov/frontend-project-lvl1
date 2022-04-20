import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

// maximum value
const maxOperandValue = 100;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

// respond function
const respondGeneration = (operand) => (operand % 2) === 0;

const taskAndRespondEvenGameGeneration = () => {
  const operandA = getRandomNumber(0, maxOperandValue);
  const task = operandA.toString();
  let rightRespond; // respond variable
  if (respondGeneration(operandA)) {
    rightRespond = 'yes';
  } else {
    rightRespond = 'no';
  }
  return [task, rightRespond];
};

const playEvenGame = () => {
  gameProcess(taskAndRespondEvenGameGeneration, rule);
};

export default playEvenGame;
