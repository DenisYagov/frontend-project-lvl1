import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxOperandValue = 10; // maximum operand value
const operationType = ['+', '-', '*']; // operation values that correspond to operation number
const maxOperation = operationType.length; // operation type nomber
const rule = 'What is the result of the expression?';

const respondValueCalculation = (operandA, opType, operandB) => {
  // respond value string:
  switch (opType) {
    case '+':
      return ((operandA + operandB));
    case '-':
      return ((operandA - operandB));
    case '*':
      return ((operandA * operandB));
    default: throw new Error('unexpected situation Error. Please check BrainCalcCore.js');
  }
};

const taskAndRespondCalcGameGeneration = () => {
  // two operands random generation
  const operandA = getRandomNumber(0, maxOperandValue);
  const operandB = getRandomNumber(0, maxOperandValue);
  // operation between operands random generation
  const op = getRandomNumber(0, maxOperation - 1);
  // function output preparation
  // task value string:
  const task = `${operandA} ${operationType[op]} ${operandB}`;
  // respond value string:
  const rightRespond = respondValueCalculation(operandA, operationType[op], operandB);
  return [task, rightRespond.toString()];
};

const playCalcGame = () => {
  gameProcess(taskAndRespondCalcGameGeneration, rule);
};

export default playCalcGame;
