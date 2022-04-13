import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxOperandValue = 10; // maximum operand value
const maxOperation = 3; // operation type nomber
const rule = 'What is the result of the expression?';

const taskGcdGameGeneration = () => {
  const taskAndRespond = [];
  // two operands random generation
  const operandA = getRandomNumber(0, maxOperandValue);
  const operandB = getRandomNumber(0, maxOperandValue);
  // operation between operands random generation
  const op = getRandomNumber(0, maxOperation);
  // function output preparation
  switch (op) {
    case 0: taskAndRespond.push(`${operandA} + ${operandB}`);
      taskAndRespond.push((operandA + operandB).toString());
      break;
    case 1: taskAndRespond.push(`${operandA} - ${operandB}`);
      taskAndRespond.push((operandA - operandB).toString());
      break;
    default: taskAndRespond.push(`${operandA} * ${operandB}`);
      taskAndRespond.push((operandA * operandB).toString());
      break;
  }
  return taskAndRespond;
};

const calcGame = () => {
  gameProcess(taskGcdGameGeneration, rule);
};

export default calcGame;
