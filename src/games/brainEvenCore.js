import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

// maximum value
const maxOperandValue = 100;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

// respond function
const respondGeneration = (operand) => {
  if ((operand % 2) === 0) {
    return ('yes');
  }
  return ('no');
};

const taskAndRespondEvenGameGeneration = () => {
  const taskAndRespond = [];
  const operandA = getRandomNumber(0, maxOperandValue);
  taskAndRespond.push(operandA.toString());
  taskAndRespond.push(respondGeneration(operandA));
  return taskAndRespond;
};

const playEvenGame = () => {
  gameProcess(taskAndRespondEvenGameGeneration, rule);
};

export default playEvenGame;
