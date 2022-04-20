import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxOperandValue = 10; // maximum operand value
const maxOperation = 3; // operation type nomber
const operationType = ['+', '-', '*']; // operation values that correspond to operation number
const rule = 'What is the result of the expression?';

const respondValueCalculation = (operandA, opType, operandB) => {
  // respond value string:
  switch (opType) {
    case '+': return ((operandA + operandB).toString());
    case '-': return ((operandA - operandB).toString());
    case '*': return ((operandA * operandB).toString());
    default: console.log('unexpected situation Error. Please check BrainCalcCore.js');
      return -1;
  }
};

const taskAndRespondGcdGameGeneration = () => {
  const taskAndRespond = [];
  // two operands random generation
  const operandA = getRandomNumber(0, maxOperandValue);
  const operandB = getRandomNumber(0, maxOperandValue);
  // operation between operands random generation
  const op = getRandomNumber(0, maxOperation);
  // function output preparation
  // task value string:
  taskAndRespond.push(`${operandA} ${operationType[op]} ${operandB}`);
  // respond value string:
  taskAndRespond.push(respondValueCalculation(operandA, operationType[op], operandB));
  return taskAndRespond;
};

const playCalcGame = () => {
  gameProcess(taskAndRespondGcdGameGeneration, rule);
};

export default playCalcGame;
