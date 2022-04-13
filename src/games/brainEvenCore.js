import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

// maximum value
const maxOperandValue = 100;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const taskEvenGameGeneration = () => {
  const taskAndRespond = [];
  const operandA = getRandomNumber(0, maxOperandValue);
  taskAndRespond.push(operandA.toString());
  if ((operandA % 2) === 0) {
    taskAndRespond.push('yes');
  } else {
    taskAndRespond.push('no');
  }
  return taskAndRespond;
};

const evenGame = () => {
  gameProcess(taskEvenGameGeneration, rule);
};

export default evenGame;
